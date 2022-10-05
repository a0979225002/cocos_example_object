/*
Copyright 2021 LuJun

Permission is hereby granted, free of charge, to any person obtaining a copy 
of this software and associated documentation files (the "Software"), to deal 
in the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the Software is furnished 
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in 
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/// <reference path="../base/base.ts" />
/// <reference path="../base/state.ts" />
/// <reference path="../pack/read-config.ts" />
/// <reference path="../utils/js.ts" />
namespace lcc {

const TAG = "lcc/config/config-manager.ts";

/**
 * @zh
 * 配置对象映射表<br/>
 * 在加载完对应配置后，可以直接通过这个变量访问配置数据<br/>
 * ```
 *      lcc.configMgr.loadConfigFile('asset://resources/config/test');
 *      let testConfig = CONFIGS.test;      // 方式1
 *      let testConfig = CONFIGS['test'];   // 方式2
 * ```
 */
export let CONFIGS:{[key:string]:any} = js.createMap();

/**
 * @zh
 * 加载配置选项
 */
export interface LoadConfigOption {
	 /**
     * @zh
     * 配置名称<br/>
     * 可以修改配置加载后的名称<br/>
     * 如果没有指定，则会使用配置文件的名作为配置名  
     */
	configName?:string;

    /**
    * @zh
    * 合并当前配置<br/>
    * 如果`CONFIGS`中存在当前名称的配置，那么会把当前配置合并到原有配置上<br/>
    * 否则，当前配置会替换原有存在配置
    */
    merge?:boolean;
}

/**
 * @zh
 * 配置管理器<br/>
 * 主要用于管理程序的配置对象<br/>
 * 配置对象在加载时会进行以下处理:<br/>
 * 1、替换配置对象字符串中的`${...}`变量值。变量值可以通过`setVariable`设置，其中`localpath`为固有值，表示当前文件目录。<br/>
 * 2、替换配置对象健中以`@`开始的引用字段。其值表示引用路径，比如`http://localhost/test.json`表示网络文件, `asset://resources/test`表示resources包中的test.json文件。
 * 会以引用文件的内容(这里是JSON对象)替换当前字段的值，并且去掉健中的`@`符号。<br/>
 * 例如：<br/>
 * 存在网络文件http://localhost/test.json，内容为；<br/>
 * ```
 * {
 *      "type" : "remote file"
 * }
 * ```
 * 存在资源文件asset://resources/test (resources包中的test.json文件)，内容为；<br/>
 * ```
 * {
 *      "type": "asset file"
 * }
 * ```
 * 存在本地配置文件asset://resources/config (resources包中的config.json文件)，内容为；<br/>
 * ```
 * {
 *      "config" : "config file",
 *      "@remote" : "http://localhost/test.json",
 *      "@asset" : "${localpath}/test"
 * }
 * ```
 * 那么，使用`lcc.configMgr.loadConfigFile('asset://resources/config')`后，<br/>
 * 使用lcc.configMgr.getConfig('config')内容如下；<br/>
 * ```
 * {
 *      "config" : "config file",
 *      "remote" : {
 *          "type" : "remote file"
 *      },
 *      "asset" :  {
 *          "type" : "asset file"
 *      }
 * }
 * ```
 * 可以看出config加载时，通过网络替换引用`@remote`，解析变量`localpath`拼接test.json路径并替换引用`@asset`<br/>
 */
class ConfigManager {
    
    /**
     * @zh
     * 构造函数
     */
    constructor(){
        state.on('initialize', ()=>{
			doing.stateInitialize.in(()=>{
                this.removeAllConfigs();
            });
		});
    }
    
    /**
     * @zh
     * 获得所有配置<br/>
     * 也可以直接使用`CONFIGS`
     */
    public getConfigs(){
        return CONFIGS;
    }
    
    /**
     * @zh
     * 获得对应配置<br/>
     * 也可以直接使用`CONFIGS[key]`
     */
    public getConfig<T = any>(key:string){
        return CONFIGS[key] as T;
    }
	
    /**
     * @zh
     * 移除指定配置<br/>
     * 
     * @param cname - 配置名称
     */
    public removeConfig(cname:string){
		delete CONFIGS[cname];
	}
	
	/**
     * @zh
	 * 移除所有配置
	 */
	public removeAllConfigs(){
		for(let cname of Object.keys(CONFIGS)){
			delete CONFIGS[cname];
		}
    }
    
    /**
     * @zh
     * 加载配置文件<br/>
	 * 用法：<br/>
	 * ```
	 * 		// 加载resources目录下的配置
	 * 		lcc.configMgr.loadConfig('asset://resources/config/test');
	 * 		// 获得加载的配置
	 * 		lcc.configMgr.getConfig('test');
	 * 
	 * 		// 加载resources目录下的配置，并且重置名称
	 * 		lcc.configMgr.loadConfig('asset://resources/config/test', 'newtest');
	 * 		// 获得加载的配置
	 * 		lcc.configMgr.getConfig('newtest');
	 * 
	 * 		// 加载game子包下的配置，并且重置名称。如果有相同配置，则合并
	 * 		lcc.configMgr.loadConfig('asset://game/config/test', { name : 'newtest', merge : true });
	 * 		// 获得加载的配置
	 * 		lcc.configMgr.getConfig('newtest');
	 * ```
	 * 
     * @param jfile - JSON文件路径
     * @param nameOrOption - 配置名称或者选项
     */
    public async loadConfigFile(jfile:string, nameOrOption:string|LoadConfigOption = {}){
		let localconf = await readConfigFile(jfile);
		if(localconf){
			let option:LoadConfigOption;
			if(typeof nameOrOption == 'string'){
				option = {
					configName : nameOrOption,
				};
			}else{
				option = nameOrOption;
			}
			option.configName = option.configName || fs.basename(jfile);
			DEBUG.CONFIG && cc.log(TAG, `local config ${option.configName} : ${JSON.stringify(localconf)}`);
			if(!option.merge){
                delete CONFIGS[option.configName];
            }
            let config = CONFIGS[option.configName];
            if(!config){
                config = js.createMap();
                CONFIGS[option.configName] = config;
            }
			js.mergeMap(config, localconf, { tag : TAG, source : jfile });
		}else{
			cc.error(TAG, `loadConfigFile '${jfile}' not found!!!`);
		}
    }
};

/**
 * @zh
 * 配置管理器对象
 */
export const configMgr = new ConfigManager();

}
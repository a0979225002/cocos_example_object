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
/// <reference path="../base/variable.ts" />
/// <reference path="../network/http/http.ts" />
/// <reference path="./pack-manager.ts" />

namespace lcc {

const TAG = "lcc/pack/read-config.ts";

/**
 * @zh
 * 下载远程配置`remoteconfig`文件的超时时间
 */
export let REMOTE_CONFIG_TIMEOUT = 5;

/**
 * @zh
 * 解析配置对象</br>
 * 1、解析配置中的引用</br>
 *      "@key1":"http://localhost/config.json"     =>   "key1" : [具体内容]</br>
 *      "@key2":"resources://config/test1"         =>   "key2" : [具体内容]</br>
 * 
 * @param config 配置对象
 */
async function parseConfigObject(config:any){
    for(let k of Object.keys(config)){
        let v = config[k];
        let vtp = typeof(v);
        if (vtp == 'object'){
            await parseConfigObject(v);
        }else if(vtp == 'string' && k.indexOf('@') == 0){
            let nc =  await readConfigFile(v);
            if(nc){
                config[k.substr(1)] = nc;
                delete config[k];
            }else{
                cc.error(TAG, `parseConfig file '${v}' not found!!!`);
            }
        }
    }
}

/**
 * @zh
 * 读取配置文件
 * 
 * @param fileUrl 配置文件URL
 */
export async function readConfigFile(fileUrl:string){
    let content:string = null;
    if(fileUrl.indexOf('http://') == 0 || fileUrl.indexOf('https://') == 0){
        content = await http.get(fileUrl, REMOTE_CONFIG_TIMEOUT);
    }else if(fileUrl.indexOf('asset://') == 0){
        content = JSON.stringify(await packMgr.loadJson(fileUrl));
    }else{
        cc.error(TAG, `readConfigFile Unknown Url ${fileUrl}`);
    }
    if(content){
        content = variable.parseString(content, { localpath : fs.dirname(fileUrl) });
        let config = JSON.parse(content);
        await parseConfigObject(config);
        return config;
    }
}

}

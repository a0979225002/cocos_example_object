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
/// <reference path="../utils/js.ts" />
/// <reference path="./net-line.ts" />

namespace lcc {

const TAG = "lcc/network/net-client.ts";

/**
 * @zh
 * 网络客户端tick时间<br/>
 * 客户端上[[NetLine.onUpdate]]的基准时间
 */
export let NETCLIENT_TICKTIME = 1;

/**
 * @zh
 * 网络客户端映射表
 */
export let NETCLIENTS:{[key:string]:NetLine} = js.createMap();

/**
 * @zh
 * 网络客户端管理<br/>
 * 主动发起连接端的管理
 */
class NetClient extends cc.EventTarget {
	
	/**
     * @zh
	 * 是否使用网络心跳
	 */
	private _useNetHeart:boolean = false;

	/**
	 * @zh
	 * WSS 配置
	 */
	private _WSSConfig:{protocol:string, cert:string} = null;

	/**
	 * @zh
	 * 构造函数
	 */
	constructor(){
		super();
		state.on('initialize', ()=>{
			doing.stateInitialize.in(()=>{
				this._useNetHeart =  false;
				this._WSSConfig =  null;
			});
		});
		state.on('release', ()=>{
			doing.stateRelease.in(()=>{
				this.clear();
				this.removeAllClients();
			});
		});
	}
	
	/**
	 * @zh
	 * 设置WSS 配置
	 * 
	 * @param protocol - 协议
	 * @param cert - 证书
	 */
	public setWSSConfig(protocol:string, cert:string){
		this._WSSConfig = {
			protocol : protocol,
			cert : cert,
		}
	}
	
	/**
	 * @zh
	 * 获得WSS 配置
	 */
	public getWSSConfig(){
		return this._WSSConfig;
	}
	
	/**
	 * @zh
	 * 安装心跳
	 */
	private setupHeartTick(){
		if(!this._useNetHeart && !js.isEmptyMap(NETCLIENTS)){
			timerMgr.addTimer(NETCLIENT_TICKTIME, this.onHeartTick.bind(this), {
                group : "lcc.NetClient", 
                key : "tick",
                loop : true
            });
            this._useNetHeart = true;
            DEBUG.NETWORK && cc.log(TAG, `setupHeartTick tick ${NETCLIENT_TICKTIME}`);
		}
	}

	/**
	 * @zh
	 * 删除心跳
	 */
	private deleteHeartTick(){
		if(this._useNetHeart && js.isEmptyMap(NETCLIENTS)){
			timerMgr.removeTimer({
                group : "lcc.NetClient", 
                key : "tick",
            });
            this._useNetHeart = false;
            DEBUG.NETWORK && cc.log(TAG, `deleteHeartTick tick`);
		}
	}
	
	/**
     * @zh
	 * 当心跳回调
     * 
     * @param dt 间隔时间，一般为[[NETCLIENT_TICKTIME]]
	 */
	private onHeartTick(dt:number){
		for (let cname of Object.keys(NETCLIENTS)){
			let netline = NETCLIENTS[cname];
			if(netline){
				netline.onUpdate(dt);
			}
		}
	}
	
	/**
	 * 添加客户端<br/>
     * 这里只是添加客户端，如果你需要启动客户端，应该手动调用`open`<br/>
     * ```
     *      let client = lcc.netClient.addClient(...);
     *      if(client){
     *          // 打开客户端，一般是向服务器发送连接请求
     *          client.open();
     *      }
     * ```
     * 
	 * @param name - 名称
	 * @param type - 类型
	 * @param config - 配置
	 */
	public addClient(name:string, type:number, config:{[key:string]:any} = js.createMap()){
        DEBUG.NETWORK && cc.log(TAG, `addClient ${name} ${type} ${JSON.stringify(config)}`);
        if(NETCLIENTS[name]){
			cc.error(TAG, `client [${name}] conflict!`);
		}else{
			let netType = NetLine.getNetType(type);
			if(!netType){
				cc.error(TAG, `net type [${type}] not found!`);
			}else{
				let netline = new netType(name, NetLineMode.CLIENT, type);
				NETCLIENTS[name] = netline;
				netline.config(config);
                this.setupHeartTick();
                DEBUG.NETWORK && cc.log(TAG, `addClient ${name} success`);
				return netline;
			}
		}
	}
	
	/**
     * @zh
	 * 获得网络客户端
     * 
	 * @param name 名称
     * 
     * @returns 客户端对象
	 */
	public getClient(name:string){
		return NETCLIENTS[name];
	}

	/**
     * @zh
	 * 移除网络客户端
     * 
	 * @param name 名称
	 */
	public removeClient(name:string){
		DEBUG.NETWORK && cc.log(TAG, `removeClient ${name}`);
		let netline = NETCLIENTS[name];
		if(netline){
			netline.close();
			delete NETCLIENTS[name];
            this.deleteHeartTick();
            DEBUG.NETWORK && cc.log(TAG, `removeClient ${name} success`);
		}
	}

	/**
	 * @zh
	 * 移除所有客户端
	 */
	public removeAllClients(){
		for(let name of Object.keys(NETCLIENTS)){
			this.removeClient(name);
		}
	}
};

/**
 * @zh
 * 网络客户端管理实例
 */
export const netClient = new NetClient();

}

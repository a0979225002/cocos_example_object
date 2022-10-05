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

/// <reference path="../net-line.ts" />
/// <reference path="../net-client.ts" />
/// <reference path="../../utils/js-buffer.ts" />

namespace lcc {

const TAG = "lcc/network/websocket/websocket-line.ts";

/**
 * @zh
 * WS心跳
 */
export let WEBSOCKET_HEARTTICK = 10;

/**
 * @zh
 * 网络线类型
 */
export namespace NetLineType {
	/**
	 * @zh
	 * WS网络线
	 */
	export const WEBSOCKET = 1;
}

/**
 * @zh
 * WS网络线配置
 */
export interface WebSocketConfig {
	/**
	 * @zh
	 * URL连接
	 */
	url?:string, 
}

/**
 * @zh
 * WEBSOCKET网络线<br/>
 */
export class WebSocketLine extends NetLine {
	
	/**
	 * @zh
	 * 网络线配置
	 */
	private _config:WebSocketConfig = null;
	
	/**
	 * @zh
	 * 网络线实体
	 */
	private _entity:WebSocket = null;
	
	/**
	 * @zh
	 * 就绪
	 */
	private _ready:boolean = false;
	
	/**
	 * @zh
	 * 心跳时间限制
	 */
	private _heartTimeLimit:number = WEBSOCKET_HEARTTICK;

	/**
	 * @zh
	 * 检查心跳时间
	 */
	private _checkHeartTime:number = 0;

	/**
	 * @zh
	 * 发送心跳时间<br/>
     * 客户端
	 */
	private _sendHeartTime:number = 0;

	/**
	 * @zh
	 * 获得URL连接
	 */
	public getURL(){
		return this._config.url;
	}

	/**
     * @zh
	 * 配置网络线
     * 
     * @param config - 配置对象
	 */
	public config(config:WebSocketConfig){
        DEBUG.NETWORK && cc.log(TAG, `${this.getName()} config`);
		this._config = config;
	}

	/**
     * @zh
	 * 检查网络线是否有效
	 */
	public isValid() {
		return this._entity && this._ready;
	}

    /**
     * @zh
     * 处理网络线数据
     * 
     * @param netData - 收到的网络数据
     */
    private onDealNetData(netData:NetData){
        this._checkHeartTime = 0;
        DEBUG.NETWORK && cc.log(TAG, `${this.getName()} onDealNetData ${JSON.stringify(netData)}`);
        if(netData.protocols){
            this.pushDispatchCaches(netData.protocols);
        }
        if(netData.type == netdata.NetDataType.SYNC_HERTTICK_TIME){
            if(this._mode === NetLineMode.CLIENT){
                this._heartTimeLimit = (netData.data as netdata.SyncHeartTickTime).heartTime;
                this.writeNetLineData(netdata.NetDataType.HERT_TICK);
                this._sendHeartTime = 0;
                DEBUG.NETWORK && cc.log(TAG, `${this.getName()} SYNC_HERTTICK_TIME ${this._heartTimeLimit}`);
            }
        }
    }
    
	/**
	 * @zh
	 * 打开网络线
	 */
	public async open():Promise<boolean>{
		if(!this._entity){
			if(this._mode === NetLineMode.CLIENT){
                DEBUG.NETWORK && cc.log(TAG, `${this.getName()} CLIENT open ${this._config.url}`);
				try {
					if(this._config.url.indexOf("wss://") == 0 && CC_JSB){
						let wssconfig = netClient.getWSSConfig();
						if(wssconfig){
							// @ts-ignore
							this._entity = new WebSocket(this._config.url, wssconfig.protocol, wssconfig.cert);
						}else{
							cc.warn(TAG, "native wss connect must set wssconfig");
							try{
								this.emit("onOpen", false, this);
							}catch(e){
								cc.error(TAG, `${this.getName()} CLIENT open Exception ${e}`);
							}
						}
					}else{
						this._entity = new WebSocket(this._config.url);
					}
				} catch(err) {
					cc.error(err);
					try{
						this.emit("onOpen", false, this);
					}catch(e){
						cc.error(TAG, `${this.getName()} CLIENT open Exception ${e}`);
					}
					return;
				}
				this._entity.onopen = (ev:Event)=>{
                    DEBUG.NETWORK && cc.log(TAG, `${this.getName()} CLIENT onopen`);
					this._checkHeartTime = 0;
                    this._sendHeartTime = 0;
					this._ready = true;
					try{
						this.emit("onOpen", true, this);
					}catch(e){
						cc.error(TAG, `${this.getName()} CLIENT open onopen Exception ${e}`);
					}
				};
				this._entity.onclose = (ev:CloseEvent)=>{
                    DEBUG.NETWORK && cc.log(TAG, `${this.getName()} CLIENT onclose`);
					if(this._entity){
						this._entity = null;
                        this._ready = false;
						try{
							this.emit("onClose", this, 0);
						}catch(e){
							cc.error(TAG, `${this.getName()} CLIENT open onclose Exception ${e}`);
						}
					}
				};
				this._entity.onmessage = (ev: MessageEvent)=>{
                    DEBUG.NETWORK && cc.log(TAG, `${this.getName()} CLIENT onmessage ${ev.data}`);
					if (typeof ev.data == 'string'){
						let netData:NetData = JSON.parse(ev.data);
						if(netData){
							this.onDealNetData(netData);
						}
					}else if(ev.data instanceof ArrayBuffer){
						let netData:NetData = unpackNetData(ev.data);
						if(netData){
							this.onDealNetData(netData);
						}
					}else if(ev.data instanceof Blob){
						var reader = new FileReader();  
						reader.onload = (evt)=>{  
							if(evt.target.readyState == FileReader.DONE){  
								let netData:NetData = unpackNetData(<ArrayBuffer>evt.target.result);
								if(netData){
									this.onDealNetData(netData);
								}
							}
						}
						reader.readAsArrayBuffer(ev.data);  
					}
				};
				this._entity.onerror = (ev: Event)=>{
                    DEBUG.NETWORK && cc.log(TAG, `${this.getName()} CLIENT onerror ${ev}`);
					try{
						if(this._ready){
							this.emit("onError", this, ev);
						}else{
							this.emit("onOpen", false, this);
						}
					}catch(e){
						cc.error(TAG, `${this.getName()} CLIENT open onerror Exception ${e}`);
					}
					this.close();
				};
			}
		}
		if(this._entity){
			return new Promise((resolve)=>{ 
				if(this._ready){
					resolve(true);
				}else{
					this.once(`onOpen`, resolve); 
				}
			});
		}
	}

	/**
	 * @zh
	 * 关闭网络线
	 */
	public close(){
		if(this._entity){
            DEBUG.NETWORK && cc.log(TAG, `${this.getName()} ${this._mode} close`);
			let ent = this._entity;
			this._entity = null;
			if(this._ready){
				ent.close();
			}
			this._ready = false;
			try{
				this.emit("onClose", this, 0);
			}catch(e){
				cc.error(TAG, `${this.getName()} close Exception ${e}`);
			}
		}
	}
	
	/**
     * @zh
	 * 更新网络线
     * 
	 * @param dt - 间隔时间
	 */
	public onUpdate(dt:number){
		if(this._entity && this._ready){
			this._checkHeartTime += dt;
			if(this._checkHeartTime >= this._heartTimeLimit){
                DEBUG.NETWORK && cc.log(TAG, `${this.getName()} onUpdate checkHeartTime close`);
				this.close();
			}
			if(this._mode === NetLineMode.CLIENT){
				this._sendHeartTime += dt;
				if(this._sendHeartTime >= this._heartTimeLimit / 2){
                    DEBUG.NETWORK && cc.log(TAG, `${this.getName()} onUpdate sendHeartTime`);
					this.writeNetLineData(netdata.NetDataType.HERT_TICK);
					this._sendHeartTime = 0;
				}
			}
		}
	}

	/**
     * @zh
	 * 发送网络线数据
     * 
	 * @param data - 网络数据
	 */
	protected sendNetData(netData:NetData){
		if(this._entity && this._ready){
			this._entity.send(packNetData(netData, this));
		}else{
			console.warn(TAG, `WebSocketLine ${this._name} sendNetData fail!`);
		}
	}
};

//注册网络类型
NetLine.registerNetType(NetLineType.WEBSOCKET, WebSocketLine);

}

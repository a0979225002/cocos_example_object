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

namespace lcc {

const TAG = "lcc/network/http/http-line.ts";

/**
 * @zh
 * HTTP心跳，不大于0表示不使用
 */
export let HTTP_HEARTTICK = -1;

/**
 * @zh
 * HTTP协议路径
 */
export let HTTP_PROTOCOL_PATH = '/protocol';

/**
 * @zh
 * 网络线类型
 */
export namespace NetLineType {
	/**
	 * @zh
	 * HTTP网络线
	 */
	export const HTTP = 2;
}

/**
 * @zh
 * Http调用方式
 */
export enum HttpCall {
	/**
	 * @zh
	 * GET调用
	 */
	GET = 1,

	/**
	 * @zh
	 * POST调用
	 */
	POST,
}

/**
 * @zh
 * WS网络线配置
 */
export interface HttpConfig {
	/**
	 * @zh
	 * URL连接
	 */
    url?:string;
    
    /**
	 * @zh
     * 调用方式， 默认POST<br/>
     * 客户端
     */
    call?:HttpCall;
}

/**
 * @zh
 * HTTP网络线
 */
export class HttpLine extends NetLine {

	/**
	 * @zh
	 * 网络线配置
	 */
	private _config:HttpConfig = null;
	
    /**
	 * @zh
     * 连接ID
     */
    private _connectID:string = null;
	
	/**
	 * @zh
	 * 就绪
	 */
    private _ready:boolean = false;
    
    /**
	 * @zh
     * 已经关闭
     */
    private _closed:boolean = false;

    /**
	 * @zh
     * 发送心跳时间
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
	public config(config:HttpConfig){
        DEBUG.NETWORK && cc.log(TAG, `${this.getName()} config`);
        this._config = config;
	}
    
	/**
     * @zh
	 * 检查网络线是否有效
	 */
	public isValid() {
		return this._ready && !this._closed;
	}

    /**
     * @zh
     * 处理网络线数据
     * 
     * @param netData 网络数据
     */
    private onDealNetData(netData:NetData){
        DEBUG.NETWORK && cc.log(TAG, `${this.getName()} onDealNetData ${JSON.stringify(netData)}`);
        if(netData.protocols){
            this.pushDispatchCaches(netData.protocols);
		}
		if(netData.type == netdata.NetDataType.SYNC_CONNECT_ID){
            this._connectID = (netData.data as netdata.SyncConnectID).connectID;
            DEBUG.NETWORK && cc.log(TAG, `${this.getName()} onDealNetData SYNC_CONNECT_ID ${this._connectID}`);
            if(!this._ready){
                DEBUG.NETWORK && cc.log(TAG, `${this.getName()} CLIENT connect`);
                this._sendHeartTime = 0;
                this._ready = true;
                try{
                    this.emit("onOpen", true, this);
                }catch(e){
                    cc.error(TAG, `onDealNetData SYNC_CONNECT_ID Exception ${e}`);
                }
            }
        }
    }
    
	/**
     * @zh
	 * 打开网络线
	 */
    public async open():Promise<boolean>{
		if(!this._ready){
            this._config.call = this._config.call || HttpCall.POST;
            DEBUG.NETWORK && cc.log(TAG, `${this.getName()} CLIENT open ${this._config.url} ${this._config.call}`);
			if(this._config.url){
				this._config.url = `${this._config.url}${HTTP_PROTOCOL_PATH}`;
                this.syncConnectID();
			}else{
				cc.error(TAG, `HttpLine ${this._name} url is invalid!`);
                try{
                    this.emit("onOpen", false, this);
                }catch(e){
                    cc.error(TAG, `CLIENT open Exception ${e}`);
                }
			}
		}
		return new Promise((resolve)=>{ 
            if(this._ready){
                resolve(true);
            }else{
                this.once(`onOpen`, resolve); 
            }
        });
	}

	/**
     * @zh
	 * 关闭网络线
	 */
	public close(){
        if(this._ready){
            DEBUG.NETWORK && cc.log(TAG, `${this.getName()} CLIENT close`);
            this._ready = false;
            this.emit("onClose", this, 0);
        }
	}
	
	/**
     * @zh
	 * 更新网络线
     * 
	 * @param dt 间隔时间
	 */
	public onUpdate(dt:number){
		if(HTTP_HEARTTICK > 0 && this._ready){
            this._sendHeartTime += dt;
            if(this._sendHeartTime >= HTTP_HEARTTICK){
                DEBUG.NETWORK && cc.log(TAG, `${this.getName()} onUpdate sendHeartTime`);
                this.writeNetLineData(netdata.NetDataType.HERT_TICK);
            }
        }
	}

    /**
	 * @zh
     * 同步连接ID
     */
    protected syncConnectID(){
        if(this._mode === NetLineMode.CLIENT){
            DEBUG.NETWORK && cc.log(TAG, `${this.getName()} syncConnectID`);
            let data:NetData = {
                type : netdata.NetDataType.SYNC_CONNECT_ID
            };
            this.sendNetData_client(data);
        }
    }

    /**
     * @zh
     * 发送网络数据-客户端
     * 
     * @param data - 网络数据
     */
    private async sendNetData_client(netData:NetData){
		let datab64 = js.ab2b64(packNetData(netData, this));
        let r:any;
        if(this._config.call == HttpCall.POST){
            r = await http.postJson(this._config.url, { data : datab64 });
        }else{ // GET
            r = await http.getJson(this._config.url + "?data=" + datab64);
        }
		let rNetData:NetData = r && unpackNetData(js.b642u8a(r.data).buffer);
        if(rNetData){
            this.onDealNetData(rNetData);
        }
    }
    
	/**
     * @zh
	 * 发送网络线数据
     * 
	 * @param data - 网络数据
	 */
	protected async sendNetData(data:NetData){
        if(this._ready){
            DEBUG.NETWORK && cc.log(TAG, `${this.getName()} sendNetData ${this._mode} ${JSON.stringify(data)}`);
            if(this._mode === NetLineMode.CLIENT){
                data.connectID = this._connectID;
                this.sendNetData_client(data);
                this._sendHeartTime = 0;
            }
        }else{
			cc.warn(TAG, `HttpLine ${this._name} sendNetData fail!`);
		}
	}
};

//注册网络类型
NetLine.registerNetType(NetLineType.HTTP, HttpLine);

}

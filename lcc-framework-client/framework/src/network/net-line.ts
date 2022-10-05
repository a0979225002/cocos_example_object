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

namespace lcc {

const TAG = "lcc/network/net-line.ts";

/**
 * @zh
 * 网络线模式
 */
export enum NetLineMode {
    /**
     * @zh
     * 客户端
     */
    CLIENT = 1,
    
    /**
     * @zh
     * 服务器
     */
    SERVER,
    
    /**
     * @zh
     * 连接-服务器收到的连接
     */
    CONNECT,
};

/**
 * @zh
 * 网络线基类<br/>
 * 基本属性、网络数据的缓冲和发送操作等
 */
export class NetLine extends cc.EventTarget {

	/**
	 * @zh
	 * 网络线类型表
	 */
	private static __types:{[key:number]:typeof NetLine} = js.createMap();
	
	/**
	 * @zh
	 * 网络线名称
	 */
	protected _name:string = null;

	/**
	 * @zh
	 * 网络线模式
	 */
	protected _mode:NetLineMode = null;

	/**
	 * @zh
	 * 网络线类型
	 */
	protected _type:number = null;

	/**
	 * @zh
	 * 使用ProtoBuff
	 */
	protected _useProtoBuff:boolean = false;

	/**
	 * @zh
	 * 自动发送
	 */
	protected _autoSend:boolean = true;

	/**
	 * @zh
	 * 发送缓冲
	 */
	protected _sendCaches:ProtocolData[] = [];

	/**
	 * @zh
	 * 自动分发
	 */
	protected _autoDispatch:boolean = true;

	/**
	 * @zh
	 * 分发缓冲
	 */
	protected _dispatchCaches:ProtocolData[] = [];

	/**
	 * @zh
	 * 注册网络线类型
	 * 
	 * @param netType - 网络类型枚举
	 * @param value - 网络类型对象
	 */
	public static registerNetType(netType:number, value:typeof NetLine){
		NetLine.__types[netType] = value;
	}

	/**
	 * @zh
	 * 获得网络类型对象
	 * 
	 * @param netType - 网络类型枚举
	 */
	public static getNetType(netType:number){
		return NetLine.__types[netType];
	}
	
	/**
	 * @zh
	 * 构造函数
	 * @param name - 名称
	 * @param mode - 模式
	 * @param type - 类型
	 */
	constructor(name:string, mode:NetLineMode, type:number){
		super();
		this._mode = mode;
		this._type = type;
		this._name = name;
	}

	/**
     * @zh
	 * 配置网络线<br/>
     * 子类中应该重写该函数
     * 
	 * @param config - 不同类型的网络线有不同的配置
	 */
	public config(config:any){}
	
	/**
     * @zh
	 * 检查网络线是否有效<br/>
     * 子类中应该重写该函数
     * 
     * @returns 如果无效，有些操作可能不会执行
	 */
	public isValid() {
		return false;
	}
    
	/**
     * @zh
	 * 打开网络线<br/>
     * 子类中应该重写该函数
	 */
	public async open():Promise<boolean>{
		return false;
	}
	
	/**
     * @zh
	 * 关闭网络线<br/>
     * 子类中应该重写该函数
	 */
	public close(){}

	/**
     * @zh
	 * 更新网络线<br/>
     * 子类中应该重写该函数
     * 
	 * @param dt 间隔时间
	 */
	public onUpdate(dt:number){}

	/**
     * @zh
	 * 发送网络数据<br/>
     * 子类中应该重写该函数
     * 
	 * @param data - 网络数据
	 */
	protected sendNetData(data:NetData){
		console.warn(TAG, `NetLine ${this._name} discard send datas!`);
	}
	
	/**
     * @zh
	 * 获得网络线名称
	 */
	public getName(){
		return this._name;
	}
	
	/**
     * @zh
	 * 获得模式
	 */
	public getMode(){
		return this._mode;
	}

	/**
     * @zh
	 * 获得类型
	 */
	public getType(){
		return this._type;
	}

	/**
	 * @zh
	 * 设置是否使用ProtoBuff
	 * 
	 * @param use - 是否使用ProtoBuff
	 */
	public useProtoBuff(use:boolean){
		this._useProtoBuff = use;
	}

	/**
	 * @zh
	 * 检查是否使用ProtoBuff
	 */
	public isUseProtoBuff(){
		return this._useProtoBuff;
	}
	
	/**
     * @zh
	 * 自动发送使能<br/>、
     * `自动发送`的意思是：如果`writeProtocol`写入协议后，会立刻发送出去
     * 
     * @param psend - 是否自动发送
	 */
	public autoSend(pwrite:boolean){
        DEBUG.NETWORK && cc.log(TAG, `${this.getName()} autoSend ${pwrite}`);
		if(this._autoSend != pwrite){
			this._autoSend = pwrite;
			if(pwrite){
                this.flushSendCaches();
            }
		}
	}
	
	/**
     * @zh
	 * 自动分发使能<br/>、
     * `自动发送`的意思是：如果接收到网络数据协议后，是否立刻`emit`到注册的协议事件
     * 
	 * @param dispatch - 是否自动分发
	 */
	public autoDispatch(dispatch:boolean){
        DEBUG.NETWORK && cc.log(TAG, `${this.getName()} autoDispatch ${dispatch}`);
		if (this._autoDispatch != dispatch) {
			this._autoDispatch = dispatch;
			if(dispatch){
                this.flushDispatchCaches();
            }
		}
	}

    /**
     * @zh
     * 压入发送缓存
     * 
     * @param datas - 协议数据
     */
    public pushSendCaches(datas:ProtocolData[]){
        DEBUG.NETWORK && cc.log(TAG, `${this.getName()} pushSendCaches ${JSON.stringify(datas)}`);
        this._sendCaches.push(...datas);
        if(this._autoSend){
            this.flushSendCaches();
        }
    }

    /**
     * @zh
     * 压入分发缓存
     * 
     * @param datas - 协议数据
     */
    public pushDispatchCaches(datas:ProtocolData[]){
        DEBUG.NETWORK && cc.log(TAG, `${this.getName()} pushDispatchCaches ${JSON.stringify(datas)}`);
        this._dispatchCaches.push(...datas);
        if(this._autoDispatch){
            this.flushDispatchCaches();
        }
    }

	/**
     * @zh
	 * 弹出发送缓冲<br/>
     * 会返回并清空发送缓冲
     * 
     * @returns 协议数据
	 */
	protected popSendCaches(){
		if(this._sendCaches.length > 0){
			let caches = this._sendCaches;
            this._sendCaches = [];
            DEBUG.NETWORK && cc.log(TAG, `${this.getName()} popSendCaches success`);
			return caches;
		}
	}

	/**
     * @zh
	 * 输出发送缓冲<br/>
     * 当网络线无效或者没有数据时，除非使用`force`，否则不能执行发送操作
     * 
     * @param force - 如果当前网络线无效，也强制输出(最终结果可能是丢弃所有数据)
	 */
	public flushSendCaches(force:boolean = false){
        if(force || (this.isValid() && this._sendCaches.length > 0)){
            DEBUG.NETWORK && cc.log(TAG, `${this.getName()} flushSendCaches success ${force}`);
            this.writeNetLineData(netdata.NetDataType.PROTOCOLS);
        }
	}

	/**
     * @zh
	 * 输出分发缓冲<br/>
     * 分发处理缓冲中的网络数据
	 */
	protected flushDispatchCaches(){
        DEBUG.NETWORK && cc.log(TAG, `${this.getName()} flushDispatchCaches success`);
		for (let cache of this._dispatchCaches){
			try{
				this.emit("protocol-" + cache.cmd, cache.data, this);
				this.emit("protocol", cache.cmd, cache.data, this);
				if(this._mode === NetLineMode.CLIENT){
					netClient.emit("protocol-" + cache.cmd, cache.data, this);
					netClient.emit("protocol", cache.cmd, cache.data, this);
				}
			}catch(e){
				cc.error(TAG, `${this.getName()} flushDispatchCaches Exception ${e}`);
			}
        }
        this._dispatchCaches = [];
    }
	
    /**
     * @zh
     * 写入网络线数据
     * 
     * @param type - 数据类型
     * @param data - 数据对象
     */
    protected writeNetLineData<T>(type:netdata.NetDataType, data?:T){
        DEBUG.NETWORK && cc.log(TAG, `${this.getName()} writeNetLineData ${type} ${data && JSON.stringify(data)}`);
        this.sendNetData({ type : type, data : data, protocols : this.popSendCaches() });
    }
    
	/**
     * @zh
	 * 写入协议<br/>
     * 协议是最基本的通信数据，它由`cmd`标记数据的类型，和`data`包含具体内容组成
     * 
	 * @param cmd - 命令
	 * @param data - 数据
	 */
	public writeProtocol<T>(cmd:number, data?:T){
        DEBUG.NETWORK && cc.log(TAG, `${this.getName()} writeProtocol ${cmd} ${data && JSON.stringify(data)}`);
		this.pushSendCaches([{
            cmd : cmd,
            data : data,
        }]);
    }
}

}

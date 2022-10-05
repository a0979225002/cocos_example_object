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

/// <reference path="../base/state.ts" />
/// <reference path="../log/log-manager.ts" />
/// <reference path="../utils/js.ts" />
/// <reference path="../utils/js-buffer.ts" />
/// <reference path="./net-data.ts" />

namespace lcc {

const TAG = "lcc/network/protocol-manager.ts";

/**
 * protobuf库
 */
export let __jspb = require('google-protobuf');

/**
 * @zh
 * 消息包装器
 * 
 * @param M - 消息类型
 * @param D - 数据类型
 */
export interface MessagePacker<M = any, D = any> {
    /**
     * @zh
     * 打包数据
     * 
     * @param data - 数据对象
     * @return 消息对象
     */
    pack(data:D):M;

    /**
     * @zh
     * 解包数据
     * 
     * @param msg - 消息对象
	 * @return 数据对象
     */
    unpack(msg:M):D;
}

/**
 * @zh
 * 消息对象
 */
interface Message {
	/**
	 * @zh
	 * 打包器
	 */
	packer:MessagePacker;

	/**
	 * @zh
	 * 所属包
	 */
	pack?:string;
}

/**
 * @zh
 * 协议配置
 */
interface Protocol{
	/**
	 * @zh
	 * 协议消息名称
	 */
    msgName:string;

	/**
	 * @zh
	 * 协议消息类型
	 */
	msgType:any;

	/**
	 * @zh
	 * 所属包
	 */
	pack?:string;
}

/**
 * @zh
 * Protobuf管理器<br/>
 * 主要管理协议打包器
 */
class ProtobufManager implements ProtobufInterface {

	/**
	 * @zh
	 * 协议映射表
	 */
	private _protocolMap:{[key:number]:Protocol} = js.createMap();
	
	/**
	 * @zh
	 * 消息映射表
	 */
	private _messageMap:{[key:string]:Message} = js.createMap();
	
	/**
	 * @zh
	 * 构造管理器
	 */
	constructor(){
		state.on('initialize', ()=>{
			doing.stateInitialize.in(()=>{
				//this._protocolMap = js.createMap();
				//this._messageMap = js.createMap();
				packMgr.on('released', this.onPackReleased, this);
			});
		});
		state.on('release', ()=>{
			doing.stateRelease.in(()=>{
				packMgr.targetOff(this);
			});
		});
	}
	
	/**
	 * @internal
	 */
	private async onPackReleased(pname:string){
		for(let k of Object.keys(this._protocolMap)){
			let protocol:Protocol = this._protocolMap[k];
			if(protocol.pack == pname){
				delete this._protocolMap[k];
			}
		}
		for(let k of Object.keys(this._messageMap)){
			let message:Message = this._messageMap[k];
			if(message.pack == pname){
				delete this._messageMap[k];
			}
		}
	}
	
	/**
	 * @zh
	 * 判断是否有协议
	 * 
	 * @param command - 命令号
	 */
	public hasProtocol(command:number){
		return <Protocol>this._protocolMap[command] != null;
	}

	/**
	 * @zh
	 * 获得协议
	 * 
	 * @param command - 命令号
	 */
	public getProtocol(command:number){
		return <Protocol>this._protocolMap[command];
	}

	/**
	 * @zh
	 * 添加协议
	 * 
	 * @param command - 命令号
	 * @param msgName - 消息名称
	 * @param msgType - 消息类型
	 * @param pack - 所属包
	 */
	public addProtocol(command:number, msgName:string, msgType:any, pack?:string){
		if (this._protocolMap[command]){
			logMgr.warn(TAG, `addProtocol command '${command}' conflict`);
		}
		this._protocolMap[command] = {
			msgName : msgName,
			msgType : msgType,
		};
	}

	/**
	 * @zh
	 * 移除协议
	 * 
	 * @param command - 命令号
	 */
	public removeProtocol(command:number){
		delete this._protocolMap[command];
	}

	/**
	 * @zh
	 * 打包协议
	 * 
	 * @param wBuff - 写入缓冲
	 * @param command - 命令号
	 * @param data - 数据
	 */
	public packProtocol<T>(wBuff:js.BufferWriter, command:number, data:T){
		let protocol = this.getProtocol(command);
		if(protocol){
			var msg = this.packMessage(protocol.msgName, data);
			var buff = msg.serializeBinary();
			wBuff.writeUShort(buff.byteLength);
			wBuff.writeData(buff);
		}
	}

	/**
	 * @zh
	 * 解包协议
	 * 
	 * @param rBuff - 读取缓冲
	 * @param command - 命令号
	 */
	public unpackProtocol<T>(rBuff:js.BufferReader, command:number){
		let protocol = this.getProtocol(command);
		if(protocol){
			var byteLength = rBuff.readUShort();
			var buff = rBuff.readData(byteLength);
			var msg = protocol.msgType.deserializeBinary(buff);
			return pbMgr.unpackMessage(protocol.msgName, msg);
		}
	}
	
	/**
	 * @zh
	 * 获得消息打包器
	 * 
	 * @param name - 消息名称
	 */
	public getMessagePacker(name:string){
		let msg = this._messageMap[name];
		return msg && msg.packer;
	}

	/**
	 * @zh
	 * 添加消息打包器
	 * 
	 * @param name - 消息名称
	 * @param packer - 打包器
	 * @param pack - 所属包
	 */
	public addMessagePacker(name:string, packer:MessagePacker, pack?:string){
		if (this._messageMap[name]){
			logMgr.warn(TAG, `addMessagePacker command '${name}' conflict`);
		}
		this._messageMap[name] = {
			packer : packer,
			pack : pack,
		};
	}

	/**
	 * @zh
	 * 移除消息打包器
	 * 
	 * @param name - 消息名称
	 */
	public removeMessagePacker(name:string){
		delete this._messageMap[name];
	}

	/**
	 * @zh
	 * 打包消息
	 * 
	 * @param name - 消息名称
	 * @param data - 数据
	 * @return - 消息对象
	 */
	public packMessage(name:string, data:any){
		let packer = this.getMessagePacker(name);
		if (packer){
			return packer.pack(data);
		}
	}

	/**
	 * @zh
	 * 解包消息
	 * 
	 * @param name - 消息名称
	 * @param msg - 消息对象
	 * @return - 数据
	 */
	public unpackMessage(name:string, msg:any){
		let packer = this.getMessagePacker(name);
		if(packer){
			return packer.unpack(msg);
		}
	}
}

/**
 * @zh
 * 协议管理器实例
 */
export const pbMgr = new ProtobufManager();

// 设置协议接口
__pbInterface = pbMgr;

}

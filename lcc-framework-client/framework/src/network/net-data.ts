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

/// <reference path="../utils/js-buffer.ts" />

namespace lcc {

const TAG = "lcc/network/net-data.ts";

/**
 * @zh
 * 数据包装器
 */
export interface DataPacker<T = any> {
	/**
	 * @zh
	 * 打包数据
	 * 
	 * @param wBuff - 缓冲写入器
	 * @param data - 数据对象
	 */
	pack(wBuff:js.BufferWriter, data:T):void;

	/**
	 * @zh
	 * 解包数据
	 * 
	 * @param rBuff - 缓冲读取器
	 */
	unpack(rBuff:js.BufferReader):T;
}

/**
 * @zh
 * 协议接口
 */
export interface ProtobufInterface {
	/**
	 * @zh
	 * 判断是否存在协议
	 * 
	 * @param command - 命令号
	 */
	hasProtocol(command:number):boolean;

	/**
	 * @zh
	 * 打包协议
	 * 
	 * @param wBuff - 写入缓冲
	 * @param command - 命令号
	 * @param data - 数据
	 */
	packProtocol<T>(wBuff:js.BufferWriter, command:number, data:T):void;

	/**
	 * @zh
	 * 解包协议
	 * 
	 * @param rBuff - 读取缓冲
	 * @param command - 命令号
	 */
	unpackProtocol<T>(rBuff:js.BufferReader, command:number):T;
}

/**
 * @zh
 * 内部网络数据<br/>
 * 不要引用他们，除非你知道在干什么
 */
export namespace netdata {

/**
 * @zh
 * 网络数据类型
 */
export enum NetDataType {
	/**
	 * @zh
	 * 协议
	 */
	PROTOCOLS = 0,
	
	/**
	 * @zh
	 * 心跳
	 */
	HERT_TICK,

	/**
	 * @zh
	 * 同步心跳时间
	 */
	SYNC_HERTTICK_TIME,

	/**
	 * @zh
	 * 同步连接ID
	 */
	SYNC_CONNECT_ID,
}

/**
 * @zh
 * 同步心跳时间
 */
export interface SyncHeartTickTime {
	/**
	 * @zh
	 * 心跳时间
	 */
	heartTime:number;
}

/**
 * @zh
 * 同步连接ID
 */
export interface SyncConnectID {
	/**
	 * @zh
	 * 连接ID
	 */
	connectID:string;
}

/**
 * @zh
 * 空网络数据打包器
 */
const EmptyPacker:DataPacker = {
	pack : (wBuff:js.BufferWriter, data:any)=>{
	},
	unpack : (rBuff:js.BufferReader)=>{
	}
}

/**
 * @zh
 * 网络数据打包器映射表
 */
export const PackerMap:{[key:number]:DataPacker} = {
	[NetDataType.PROTOCOLS] : EmptyPacker,
	[NetDataType.HERT_TICK] : EmptyPacker,
	[NetDataType.SYNC_HERTTICK_TIME] : {
		pack : (wBuff:js.BufferWriter, data:SyncHeartTickTime)=>{
			wBuff.writeUShort(data.heartTime)
		},
		unpack : (rBuff:js.BufferReader):SyncHeartTickTime=>{
			let heartTime = rBuff.readUShort();
			return {
				heartTime : heartTime
			}
		}
	},
	[NetDataType.SYNC_CONNECT_ID] : {
		pack : (wBuff:js.BufferWriter, data:SyncConnectID)=>{
			wBuff.writeString(data.connectID || '')
		},
		unpack : (rBuff:js.BufferReader):SyncConnectID=>{
			let connectID = rBuff.readString();
			return {
				connectID : connectID
			}
		}
	},
}

}

/**
 * @zh
 * 协议数据<br/>
 * 协议是最基本的通信数据，它由`cmd`标记数据的类型，和`data`包含具体内容组成
 */
export interface ProtocolData {
	/**
	 * @zh
	 * 命令号
	 */
	cmd:number;

	/**
	 * @zh
	 * 数据
	 */
	data:any;
}

/**
 * @zh
 * 网络数据
 */
export interface NetData {
	/**
	 * @zh
	 * 连接ID<br/>
	 * http需要
	 */
	connectID?:string;

	/**
	 * @zh
	 * 类型
	 */
	type:netdata.NetDataType;

	/**
	 * @zh
	 * 数据
	 */
	data?:any;

	/**
	 * @zh
	 * 协议数据表
	 */
	protocols?:ProtocolData[];
}

/**
 * @zh
 * 协议接口, 内部使用
 */
export let __pbInterface:ProtobufInterface = null;

/**
 * @zh
 * 打包网络数据
 * 
 * @param netData - 网络数据对象
 * @param netLine - 可选，当前网络线
 */
export function packNetData(data:NetData, netLine?:NetLine):ArrayBuffer {
	let wBuff = new js.BufferWriter();
	wBuff.writeString(data.connectID || '');
	wBuff.writeUShort(data.type);
	let packer = netdata.PackerMap[data.type];
	if(!packer){
		logMgr.error(TAG, `not find packer for NetData ${data.type}`);
		return null;
	}
	packer.pack(wBuff, data.data || {});

	// 打包协议
	let useProtocol = !netLine || netLine.isUseProtoBuff();
	let protoSize = data.protocols ? data.protocols.length : 0;
	wBuff.writeUShort(protoSize);
	for(let i = 0; i < protoSize; i++){
		let protocol = data.protocols[i];
		if(useProtocol && __pbInterface && __pbInterface.hasProtocol(protocol.cmd)){
			wBuff.writeUByte(1);
			wBuff.writeUShort(protocol.cmd);
			__pbInterface.packProtocol(wBuff, protocol.cmd, protocol.data);
		}else{
			wBuff.writeUByte(0);
			wBuff.writeString(JSON.stringify(protocol));
		}
	}

	return wBuff.getData();
}

/**
 * @zh
 * 解包网络数据
 * 
 * @param netBuff - 网络数据缓冲
 */
export function unpackNetData(netBuff:ArrayBuffer):NetData {
	let rBuff = new js.BufferReader(netBuff);
	let connectID = rBuff.readString() || undefined;
	let type = rBuff.readUShort();
	let packer = netdata.PackerMap[type];
	if(!packer){
		logMgr.error(TAG, `not find packer for NetData ${type}`);
		return null;
	}
	let data = packer.unpack(rBuff);

	// 解包协议
	let protoSize = rBuff.readUShort();
	let protocols:ProtocolData[] = [];
	for(let i = 0; i < protoSize; i++){
		if(rBuff.readUByte()){
			let cmd = rBuff.readUShort();
			let data = __pbInterface && __pbInterface.unpackProtocol(rBuff, cmd);
			protocols.push({
				cmd : cmd,
				data : data,
			});
		}else{
			protocols.push(JSON.parse(rBuff.readString()));
		}
	}

	return {
		connectID : connectID,
		type : type,
		data : data,
		protocols : protocols,
	};
}

}

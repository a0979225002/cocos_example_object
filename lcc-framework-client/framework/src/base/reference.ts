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
/// <reference path="./variable.ts" />
/// <reference path="../utils/js.ts" />

namespace lcc {

const TAG = "lcc/base/reference.ts";

/**
 * @zh
 * 引用冲突
 */
export let ERROR_REFERENCE_CONFLICT = true;

/**
 * @zh
 * 引用键
 */
export interface RefKey {
	/**
	 * @zh
	 * 路径
	 */
	path:string;

	/**
	 * @zh
	 * 包名, 默认使用当前加载的
	 */
	pack?:string;
}

/**
 * @zh
 * 获得引用key字符串
 * 
 * @param key 引用key对象
 */
export function getRefKeyString(key:RefKey){
	if(key.pack == null){
		key.pack = variable.get('__LoadPack__') || 'resources';
	}
	return `${key.pack}://${key.path}`;
}

/**
 * @zh
 * 引用类
 */
class Reference {
	/**
	 * @zh
	 * 映射表
	 */
	private _map:{[key:string]:any} = js.createMap();

	/**
	 * @zh
	 * 获得指定引用
	 * 
	 * @param key 键
	 */
	public get<T = any>(key:string | RefKey){
		if(typeof key != 'string'){
			key = getRefKeyString(key);
		}
		return <T>this._map[key];
	}

	/**
	 * @zh
	 * 添加指定引用
	 * 
	 * @param key 键
	 * @param value 值
	 */
	public add(key:string | RefKey, value:any){
		if(typeof key != 'string'){
			key = getRefKeyString(key);
		}
		if(this._map[key]){
			let msg = `key ${key} conflict`;
			if(ERROR_REFERENCE_CONFLICT){
				cc.error(TAG, msg);
			}else{
				cc.warn(TAG, msg);
			}
		}
		DEBUG.BASE && cc.log(TAG, `add ${key} => ${value}`);
		this._map[key] = value;
	}

	/**
	 * @zh
	 * 遍历引用
	 * 
	 * @param callback - 回调函数
	 */
	public foreach(callback:(key:string, value:any)=>boolean){
		for(let k in this._map){
			if(callback(k, this._map[k])){
				break;
			}
		}
	}

	/**
	 * @zh
	 * 移除指定引用
	 * 
	 * @param key 键
	 */
	public remove(key:string | RefKey){
		if(typeof key != 'string'){
			key = getRefKeyString(key);
		}
		DEBUG.BASE && cc.log(TAG, `remove ${key}`);
		delete this._map[key];
	}

	/**
	 * @zh
	 * 通过包名称移除
	 * 
	 * @param pack 包名称
	 */
	public removeByPack(pack:string){
		let prefix = `${pack}://`;
		for(let key of Object.keys(this._map)){
			if(key.indexOf(prefix) == 0){
				this.remove(key);
			}
		}
	}

	/**
	 * @zh
	 * 移除所有引用
	 */
	public removeAll(){
		for(let key of Object.keys(this._map)){
			this.remove(key);
		}
	}
}

/**
 * @zh
 * 引用对象
 */
export const reference = new Reference();

/**
 * @zh
 * 装饰器
 */
export namespace _decorator {

/**
 * @zh
 * lcc引用类装饰器
 */
export function refclass(key?:string | RefKey) {
	return function(target:any){
		key = key || target.prototype.constructor.name;
		if(typeof key != 'string'){
			key = getRefKeyString(key);
		}
		lcc.reference.add(key, target);
	}
};

}

}

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

namespace lcc {

const TAG = "lcc/prefab/node-pools.ts";

/**
 * @zh
 * 节点池表
 */
class NodePools {
	
	/**
	 * @zh
	 * 节点池表
	 */
	private _pools:{[key:string]:cc.NodePool} = js.createMap()
	
	/**
	 * 构造数据库管理器
	 */
	constructor(){
		state.on('initialize', ()=>{
			doing.stateInitialize.in(()=>{
				this._pools = js.createMap();
			});
		});
	}
	
	/**
	 * @zh
	 * 从对象池中获得节点
	 * 
	 * @param prefab - 预制资源
	 * @param name - 可选，自定义名称
	 */
	public getNode(prefab: cc.Prefab, name?:string){
		name = name || prefab.data.name;
		let node: cc.Node = null;
		if (this._pools.hasOwnProperty(name)) {
			let pool = this._pools[name];
			if (pool.size() > 0) {
				node = pool.get();
			} else {
				node = cc.instantiate(prefab);
			}
		} else {
			let pool = new cc.NodePool();
			this._pools[name] = pool;

			node = cc.instantiate(prefab);
		}
		
		return node;
	}

	/**
	 * @zh
	 * 将节点放回对象池中
	 * 
	 * @param node - 节点对象
	 * @param name - 可选，自定义名称
	 */
	public putNode(node:cc.Node, name?:string){
		name = name || node.name;
		let pool = null;
		if (this._pools.hasOwnProperty(name)) {
			pool = this._pools[name];
		} else {
			pool = new cc.NodePool();
			this._pools[name] = pool;
		}

		pool.put(node);
	}

	/**
	 * @zh
	 * 根据名称清空对象池
	 * 
	 * @param name - 名称
	 */
	public clearPool(name:string){
		if (this._pools.hasOwnProperty(name)) {
			let pool = this._pools[name];
			pool.clear();
		}
	}
	
	/**
	 * @zh
	 * 清空所有对象池
	 */
	public clearAllPools(){
		for (let name of Object.keys(this._pools)){
			this.clearPool(name);
		}
	}
};

/**
 * @zh
 * 节点池表对象
 */
export const nodePools = new NodePools();

}

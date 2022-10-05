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
/// <reference path="./node-pools.ts" />

namespace lcc {

const TAG = "lcc/prefab/prefab-manager.ts";

/**
 * @zh
 * 索引路径
 */
export namespace INDEXPATH {
	
	/**
	 * @zh
	 * 预制体
	 */
	export let PREFAB = "prefab";
};

/**
 * @zh
 * 预制体实例
 */
const PREFAB_INSTANCE = "lcc_Prefab";

/**
 * @zh
 * 预制体配置
 */
interface PrefabConfig {
	/**
	 * @zh
	 * 预制体
	 */
	prefab:cc.Prefab;

	/**
	 * @zh
	 * 配置
	 */
	config:{
		/**
		 * @zh
		 * 预制体文件
		 */
		file:string;

		/**
		 * @zh
		 * 池中分配
		 */
		pool?:boolean;
	};

	/**
	 * @zh
	 * 预加载
	 */
	preload?:boolean;
}

/**
 * @zh
 * 预制体管理器
 */
class PrefabManager {
	
	/**
	 * @zh
	 * 预制体配置表
	 */
	private _prefabConfigs:{[key:string]:PrefabConfig} = js.createMap();

	/**
	 * @zh
	 * 预制体实例，用于在预制体上挂配置
	 */
	private _prefabInstances:{[key:string]:PrefabBase} = js.createMap();

	/**
	 * @zh
	 * 预制体实例节点
	 */
	private _instanceRoot:cc.Node = null;

	/**
	 * @zh
	 * 构造函数
	 */
	constructor(){
		state.on('initialize', ()=>{
			doing.stateInitialize.in(()=>{
				this._prefabConfigs = js.createMap();
				this._prefabInstances = js.createMap();
				this._instanceRoot = null;
				indexMgr.on("indexes_removed", this.onIndexesRemoved, this);
			});
		});
		state.on('release', ()=>{
			doing.stateRelease.in(()=>{
				indexMgr.targetOff(this);
			});
		});
	}
	
	/**
	 * @zh
	 * 当移除索引
	 * 
	 * @internal
	 */
	private onIndexesRemoved(){
		this.releaseInvalidPrefabConfigs();
	}

	/**
	 * @zh
	 * 释放无效预制体
	 */
	public releaseInvalidPrefabConfigs(){
		let prefabfiles = indexMgr.getIndex(INDEXPATH.PREFAB) || js.createMap();
		for(let pname of Object.keys(this._prefabConfigs)){
			if(!prefabfiles[pname]){
				this.releasePrefabConfig(pname);
			}
		}
	}

	/**
	 * @zh
	 * 释放预制体
	 * 
	 * @param pname - 预制体名称
	 * @param preload - 预加载也释放
	 */
	public releasePrefabConfig(pname:string, preload:boolean = false){
		let prefabconf = this._prefabConfigs[pname];
		if(prefabconf && (!prefabconf.preload || preload)){
			prefabconf.prefab.decRef();
			delete this._prefabConfigs[pname];
			nodePools.clearPool(pname);
		}
	}

	/**
	 * @zh
	 * 释放预制体数组
	 * 
	 * @param pnames - 预制体数组
	 * @param preload - 预加载也释放
	 */
	public releasePrefabConfigs(pnames:string[], preload:boolean = false){
		for(let pname of pnames){
			this.releasePrefabConfig(pname, preload);
		}
	}
	
    /**
	 * @zh
     * 预加载预制体
	 * 
	 * @param pname - 预制体名称
     */
	public async preloadPrefabConfig(pname:string){
		let prefabconf = await this.getPrefabConfig(pname);
		if(prefabconf){
			prefabconf.preload = true;
		}
	}
    
    /**
	 * @zh
     * 预加载预制体数组
	 * 
	 * @param pnames - 预制体数组
	 * @param progress - 进度
     */
    public async preloadPrefabConfigs(pnames:string[], progress = (p:number)=>{}){
        for(let i = 0, len = pnames.length; i < len; i++){
			await this.preloadPrefabConfig(pnames[i]);
            progress((i + 1) / len);
        }
	}

	/**
	 * @zh
	 * 获得预制体配置
	 * 
	 * @param pname 预制体名称
	 */
	private async getPrefabConfig(pname:string){
		let prefabConf = this._prefabConfigs[pname];
		if(!prefabConf){
			let config = indexMgr.getIndex(INDEXPATH.PREFAB + "/" + pname);
			if(config){
				let prefab = await packMgr.loadPrefab(config.file);
				prefabConf = {
					prefab : prefab,
					config : config,
				};
				prefab.addRef();
				this._prefabConfigs[pname] = prefabConf;
			}
		}
		return prefabConf;
	}
	
	/**
	 * @zh
	 * 创建预制体
	 * 
	 * @param pname - 预制体名称
	 * @param pool - 在池中创建
	 */
	public async createPrefab<T extends PrefabBase>(pname:string, pool?:boolean){
		let prefabconf = await this.getPrefabConfig(pname);
		if(prefabconf){
			if(pool == null){
				pool = prefabconf.config.pool;
			}
			let node:cc.Node = null;
			if(pool){
				node = nodePools.getNode(prefabconf.prefab, pname);
			}else{
				node = cc.instantiate(prefabconf.prefab);
			}
			let prefab = node.getComponent(PrefabBase) || node.getComponentInChildren(PrefabBase);
			if(!prefab){
				prefab = node.addComponent(PrefabBase);
			}
			prefab._setRootNode(node);
			prefab._setPrefabName(pname);
			return <T>prefab;
		}
	}

	/**
	 * @zh
	 * 释放预制体到池中
	 * 
	 * @param prefab - 预制体对象
	 * @param pool - 在池中创建
	 */
	public releasePrefab(prefab:PrefabBase, pool?:boolean){
		let pname = prefab.getPrefabName();
		if(pool == null){
			let prefabconf = this._prefabConfigs[pname];
			if(prefabconf){
				pool = prefabconf.config.pool;
			}
		}
		if(pool){
			nodePools.putNode(prefab.getRootNode(), pname);
		}else{
			prefab.getRootNode().destroy();
		}
	}

	/**
	 * @zh
	 * 获得预制体实例，一般用于获得在预制体上放的配置
	 * 
	 * @param pname - 预制体名称
	 */
	public async getPrefabInstance<T extends PrefabBase>(pname:string){
		let prefab = this._prefabInstances[pname];
		if(!prefab){
			prefab = await this.createPrefab(pname);
			if(!this._instanceRoot){
				this._instanceRoot = new cc.Node(PREFAB_INSTANCE);
				cc.director.getScene().addChild(this._instanceRoot);
				cc.game.addPersistRootNode(this._instanceRoot);
			}
			prefab.getRootNode().parent = this._instanceRoot;
			this._prefabInstances[pname] = prefab;
		}
		return <T>prefab;
	}

	/**
	 * @zh
	 * 释放预制体实例，一般用于释放在预制体上放的配置
	 * 
	 * @param pname - 预制体名称
	 */
	public releasePrefabInstance(pname:string){
		let prefab = this._prefabInstances[pname];
		if(prefab){
			this.releasePrefab(prefab);
			delete this._prefabInstances[pname];
		}
	}
};

/**
 * @zh
 * 预制体管理器对象
 */
export const prefabMgr = new PrefabManager();

}

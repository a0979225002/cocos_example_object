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

/// <reference path="../utils/js.ts" />

namespace lcc {

const TAG = "lcc/prefab/prefab-bind.ts";

const {ccclass, property, menu} = cc._decorator;

@ccclass("lcc.PrefabBindConfig")
class PrefabBindConfig {
	
	@property({
		type: cc.Node,
		tooltip : "绑定的节点"
	})
	node:cc.Node = null!;

	@property({
		tooltip: "绑定的预制体"
	})
	prefab:string = "";

	@property({
		tooltip : "高级选项",
	})
	advance:boolean = false;

	@property({
		tooltip: "重定义引用的键",
		visible (){
			return this.advance;
		}
	})
	key:string = "";

	@property({
		tooltip: "UI优先级",
		visible (){
			return this.advance;
		}
	})
	priority:number = 0;

	@property({
		tooltip : "池中分配",
		visible (){
			return this.advance;
		}
	})
	pool:boolean = false;
}

/**
 * @zh
 * 预制体绑定
 */
@ccclass("lcc.PrefabBind")
@menu("i18n:lcc-framework.menu-extension/PrefabBind")
export class PrefabBind extends cc.Component {
	
	@property({
		type: [PrefabBindConfig],
		tooltip: "预制体绑定配置"
	})
	prefabBinds:PrefabBindConfig[] = [];

	/**
	 * @zh
	 * 绑定配置表
	 */
	_bindConfigs:{[key:string]:PrefabBindConfig} = null;

	/**
	 * @zh
	 * 预制体表
	 */
	_prefabs:{[key:string]:PrefabBase} = null;
	
	/**
	 * @zh
	 * 扩展加载
	 */
	protected async onLoad(){
		this._bindConfigs = js.createMap();
		this._prefabs = js.createMap();
		for (let wd of this.prefabBinds){
			let name = wd.advance ? wd.key : wd.prefab;
			this._bindConfigs[name] = wd;
			let prefab = await prefabMgr.createPrefab(wd.prefab, wd.advance ? wd.pool : null);
			if(prefab){
				prefab.node.parent = wd.node;
				this._prefabs[name] = prefab;
				if(wd.advance){
					prefab.node.zIndex = wd.priority;
				}
			}
		}
	}

	/**
	 * @zh
	 * 扩展销毁
	 */
	protected onDestroy(){
		for (let name in this._prefabs){
			let prefab = this._prefabs[name];
			let config = this._bindConfigs[name];
			prefabMgr.releasePrefab(prefab, config.pool);
		}
		this._prefabs = null;
		this._bindConfigs = null;
	}

	/**
	 * @zh
	 * 获得预制体
	 * 
	 * @param key - 键
	 */
	public getPrefab<T extends PrefabBase>(key:string){
		return <T>this._prefabs[key];
	}
}

}

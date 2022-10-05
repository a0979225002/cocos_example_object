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

namespace lcc {

const TAG = "lcc/prefab/prefab-base.ts";

const { ccclass, property } = cc._decorator;

/**
 * @zh
 * 预制体基类
 */
@ccclass("lcc.PrefabBase")
export class PrefabBase extends cc.Component {
	
	/**
	 * @zh
	 * 预制体名称
	 */
	private _prefabName:string = null;

	/**
	 * @zh
	 * 预制体根节点
	 */
	private _rootNode:cc.Node = null;

	/**
	 * @zh
	 * 设置预制体名称
	 * 
	 * @param wname - 预制体名称
	 */
	public _setPrefabName(pname:string){
		this._prefabName = pname;
	}

	/**
	 * @zh
	 * 获得预制体名称
	 */
	public getPrefabName():string {
		return this._prefabName || this.node.name;
	}

	/**
	 * @zh
	 * 设置预制体根节点
	 * 
	 * @param node - 根节点
	 */
	 public _setRootNode(node:cc.Node){
		this._rootNode = node;
	}

	/**
	 * @zh
	 * 获得预制体根节点
	 */
	public getRootNode():cc.Node {
		return this._rootNode;
	}
}

}

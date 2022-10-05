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

namespace lcc {

const TAG = "lcc/scene/scene-manager.ts";

/**
 * @zh
 * 场景管理器
 */
class SceneManager {
	
	/**
	 * @zh
	 * 场景栈
	 */
	private _sceneStack:SceneSnapshot[] = [];

	/**
	 * @zh
	 * 当前场景
	 */
	private _currentScene:SceneBase = null;

	/**
	 * @zh
	 * 构造函数
	 */
	constructor(){
		state.on('initialize', ()=>{
			doing.stateInitialize.in(()=>{
				this._sceneStack = [];
				this._currentScene = null;
			});
		});
	}

	/**
	 * @zh
	 * 检查当前场景<br/>
	 * 搜索场景的[[SceneBase]]脚本组件，如果不存在就会在第一个子节点上挂载一个新的
	 */
	private checkCurrentScene(){
		if(!this._currentScene){
			let snode:cc.Scene = cc.director.getScene();
			let scene = snode.getComponentInChildren(SceneBase);
			if(!scene){
				let node = <cc.Node><any>(snode.children[0]);
				if(node){
					scene = node.addComponent(SceneBase);
				}else{
					cc.error(TAG, "scene must have nodes")
				}
			}
			scene._setSceneName(snode.name);
			this._currentScene = scene;
		}
	}

	/**
	 * @zh
	 * 获得当前场景
	 */
	public getCurrentScene():SceneBase {
		this.checkCurrentScene();
		return this._currentScene;
	}

	/**
	 * @zh
	 * 切换场景
	 * 
	 * @param sname - 场景名
	 * @param sargs - 快照参数
	 */
	private _switchScene(sname:string, ...sargs:any[]){
        let self = this;
        uiMgr.closeAllUI();
		cc.director.loadScene(sname, (err, snode:cc.Scene)=>{
			if(!err && snode){
				let scene = snode.getComponentInChildren(SceneBase);
				if(!scene){
					let node = <cc.Node><any>(snode.children[0]);
					if(node){
						scene = node.addComponent(SceneBase);
					}else{
						cc.error(TAG, "scene must have nodes")
					}
				}
				scene._setSceneName(snode.name);
				self._currentScene = scene;
				scene.onSceneLoad(...sargs);
			}else{
				cc.error(TAG, `scene ${sname} switch failure`)
			}
		});
	}

	/**
	 * @zh
	 * 切换场景
	 * 
	 * @param sname - 场景名
	 * @param sargs - 快照参数
	 */
	public switchScene(sname:string, ...sargs:any[]){
		this._sceneStack = [];
		this._switchScene(sname, ...sargs);
	}

	/**
	 * @zh
	 * 制作当前场景的快照
	 */
	public makeSnapshot():SceneSnapshot {
		let curscene = this.getCurrentScene();
		if(curscene){
			return curscene.makeSnapshot();
		}
	}

	/**
	 * @zh
	 * 恢复场景快照
	 * 
	 * @param snapshot - 场景快照
	 */
	public resumeSnapshot(snapshot:SceneSnapshot) {
		if(snapshot){
			this._switchScene(snapshot.sceneName, snapshot.sceneArgs);
		}
	}
	
	/**
	 * @zh
	 * 压入场景到栈
	 * 
	 * @param sname - 场景名
	 * @param sargs - 快照参数
	 */
	public pushScene(sname:string, ...sargs:any[]){
		let curscene = this.getCurrentScene();
		if(curscene){
			this._sceneStack.push(curscene.makeSnapshot());
		}
		this._switchScene(sname, ...sargs);
	}

	/**
	 * @zh
	 * 弹出栈中的场景
	 */
	public popScene(){
		let scenep = this._sceneStack.pop();
		if(scenep){
			this._switchScene(scenep.sceneName, scenep.sceneArgs);
		}
	}

	/**
	 * @zh
	 * 获得场景栈
	 */
	public getSceneStack(){
		return this._sceneStack;
	}
};

/**
 * @zh
 * 场景管理器对象
 */
export const sceneMgr = new SceneManager();

}

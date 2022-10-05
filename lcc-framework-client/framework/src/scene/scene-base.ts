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

const TAG = "lcc/scene/scene-base.ts";

const { ccclass, property } = cc._decorator;

/**
 * @zh
 * 场景快照
 */
export interface SceneSnapshot {
	/**
	 * @zh
	 * 场景名
	 */
	sceneName:string,

	/**
	 * @zh
	 * 参数列表
	 */
	sceneArgs:any[],
}

/**
 * @zh
 * 场景基类
 */
@ccclass("lcc.SceneBase")
export class SceneBase extends cc.Component {
	/**
	 * @zh
	 * 捕捉按键
	 */
	@property({
		tooltip : "启动按键捕捉"
	})
	catchKeys:boolean = false;

	/**
	 * @zh
	 * 场景名称
	 */
	private _sceneName:string = null;

	/**
	 * @zh
	 * 安装场景
	 */
	protected onLoad(){
		if(this.catchKeys){
			cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.OnCatchKeyEvent, this);
		}
	}

	/**
	 * @zh
	 * 场景销毁
	 */
	protected onDestroy(){
		if(this.catchKeys){
			cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.OnCatchKeyEvent, this);
		}
	}

	/**
	 * @zh
	 * 当场景场景加载<br/>
	 * 子类需要可以重写这个函数
	 * 
	 * @param sceneArgs - 参数
	 */
	public onSceneLoad(...sceneArgs:any[]){}
	
	/**
	 * @zh
	 * 设置场景名称
	 * 
	 * @param scenename - 设置场景名
	 */
	public _setSceneName(scenename:string){
		this._sceneName = scenename;
	}

	/**
	 * @zh
	 * 获得场景名称
	 */
	public getSceneName():string {
		if(!this._sceneName){
			this._sceneName = cc.director.getScene().name;
		}
		return this._sceneName;
	}

	/**
	 * @zh
	 * 当捕捉到键盘事件
	 * 
	 * @param event - 按键值
	 */
	private OnCatchKeyEvent(event:any){
		if(!uiMgr.onKeyPressed(event.keyCode)){
			this.onKeyPressed(event.keyCode);
		}
	}
	
	/**
	 * @zh
	 * 制作场景快照<br/>
	 * 如果场景可以保存数据，可以重写这个函数
	 */
	public makeSnapshot(){
		return {
			sceneName : this.getSceneName(),
			sceneArgs : []
		}
	}

	/**
	 * @zh
	 * 当按键按下
	 */
	public onKeyPressed(keyCode:string){ return false; }
}

}

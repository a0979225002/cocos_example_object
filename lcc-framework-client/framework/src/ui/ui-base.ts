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

const TAG = "lcc/ui/ui-base.ts";

const { ccclass, property } = cc._decorator;

/**
 * @zh
 * UI动画播放接口
 */
export interface UIAnimationPlayable {
	/**
	 * @zh
	 * 播放指定类型动画
	 * 
	 * @param aType 动画类型
	 */
	play(aType:string):Promise<any>;
}

/**
 * @zh
 * UI基类
 */
@ccclass("lcc.UIBase")
export class UIBase extends cc.Component {
	/**
	 * @zh
	 * 根节点
	 */
	private _rootNode:cc.Node = null;

	/**
	 * @zh
	 * UI动画对象
	 */
	private _uiAnimation:UIAnimationPlayable = null;

	/**
	 * @zh
	 * UI名称
	 */
	private _uiName:string = null;

	/**
	 * @zh
	 * 固定优先级
	 */
	private _fixedPriority:number = null;

	/**
	 * @zh
	 * 画布对象
	 */
	private _canvas:CanvasConfig = null;

	/**
	 * @zh
	 * 设置根节点
	 * 
	 * @param node - 节点对象
	 */
	public _setRootNode(node:cc.Node){
		this._rootNode = node;
	}

	/**
	 * @zh
	 * 设置是否激活
	 * 
	 * @param active - 是否激活
	 */
	public setActive(active:boolean){
		this._rootNode.active = active;
	}
	
	/**
	 * @zh
	 * 设置UI名称
	 * 
	 * @param uiname - UI名称
	 */
	public _setUIName(uiname:string){
		this._uiName = uiname;
	}

	/**
	 * @zh
	 * 获得UI名称
	 */
	public getUIName():string {
		return this._uiName;
	}

	/**
	 * @zh
	 * 设置固定优先级
	 * 
	 * @param priority - 优先级
	 */
	public setFixedPriority(priority:number) {
		this._fixedPriority = priority;
	}

	/**
	 * @zh
	 * 获得固定优先级
	 */
	public getFixedPriority():number {
		return this._fixedPriority;
	}

	/**
	 * @zh
	 * 设置画布对象
	 * 
	 * @param canvas - 画布对象
	 */
	public _setCanvas(canvas:CanvasConfig){
		this._canvas = canvas;
	}

	/**
	 * @zh
	 * 获得画布对象
	 */
	public getCanvas() {
		return this._canvas;
	}

	/**
	 * @zh
	 * 关闭当前UI
	 */
	public closeSelf(release:boolean = false){
		return uiMgr.closeUI(this.getUIName(), release);
	}
	
	/**
	 * @zh
	 * UI创建，内部使用
	 */
	public _onUICreate(){
		this._uiAnimation = this.getComponent('lcc.UIAnimation');
		this.onUICreate();
	}
	
	/**
	 * @zh
	 * 播放UI动画
	 * 
	 * @param aType 动画类型
	 */
	public async playUIAnimation(aType:string){
		if(this._uiAnimation){
			await this._uiAnimation.play(aType);
		}
	}
	
	/**
	 * @zh
	 * UI创建回调，子类中可以重写这个函数
	 */
	public onUICreate(){}

	/**
	 * @zh
	 * UI打开回调，子类中可以重写这个函数
	 * 
	 * @param args - 打开参数
	 */
    public onOpen(...args:any[]):any{}
    
	/**
	 * @zh
	 * UI关闭回调，子类中可以重写这个函数
	 */
	public onClose(){}

	/**
	 * @zh
	 * UI释放回调，子类中可以重写这个函数
	 */
	public onUIRelease(){}
	
	/**
	 * @zh
	 * 当改变当前UI最前面，子类中可以重写这个函数
	 */
	public onChangeFront(front:boolean){}

	/**
	 * @zh
	 * 当按键按下，子类中可以重写这个函数
	 */
	public onKeyPressed(keyCode:string){ return false; }
	
}

}

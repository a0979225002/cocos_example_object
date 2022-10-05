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

/// <reference path="./ui-base.ts" />

namespace lcc {

const TAG = "lcc/ui/ui-animation.ts";

const { ccclass, property, executeInEditMode, menu } = cc._decorator;

/**
 * @zh
 * 空动画枚举
 */
export enum TempAnimtionEnum {
	'<None>' = 0
}

/**
 * @zh
 * UI动画组件<br/>
 * 添加到UIBase同节点上生效
 */
@ccclass("lcc.UIAnimation")
@executeInEditMode()
@menu("i18n:lcc-framework.menu-extension/UIAnimation")
export class UIAnimation extends cc.Component implements UIAnimationPlayable {
    
	/**
	 * @zh
	 * UI动画
	 */
	@property(cc.Animation)
	_uiAnimation:cc.Animation = null;
	@property({
		type : cc.Animation,
		tooltip : 'UI动画组件'
	})
	get uiAnimation(){
		return this._uiAnimation;
	}
	set uiAnimation(value:cc.Animation){
		if(this._uiAnimation != value){
			this._uiAnimation = value;
			this.updateAnimationEnum();
		}
	}

	/**
	 * @zh
	 * 打开动画
	 */
	@property({
		type:cc.Enum(TempAnimtionEnum),
		tooltip : '在UI动画组件中，打开动画的索引',
		visible (){
			return this._uiAnimation != null;
		}
	})
	openAnimation:number = TempAnimtionEnum["<None>"];

	/**
	 * @zh
	 * 打开动画反转
	 */
	@property({
		tooltip : '是否反转打开动画',
		visible (){
			return this._uiAnimation != null && this.openAnimation != 0;
		}
	})
	openReverse:boolean = false;

	/**
	 * @zh
	 * 关闭动画
	 */
	@property({
		type:cc.Enum(TempAnimtionEnum),
		tooltip : '在UI动画组件中，关闭动画的索引',
		visible (){
			return this._uiAnimation != null;
		}
	})
	closeAnimation:number = TempAnimtionEnum["<None>"];

	/**
	 * @zh
	 * 反转关闭动画
	 */
	@property({
		tooltip : '是否反转关闭动画',
		visible (){
			return this._uiAnimation != null && this.closeAnimation != 0;
		}
	})
	closeReverse:boolean = false;

	/**
	 * @zh
	 * 更新动画枚举
	 */
    private updateAnimationEnum(){
        if(CC_EDITOR){
            if(this._uiAnimation){
                let enumMap:{[key:string]:number} = {
                    '<None>' : 0
                };
                this._uiAnimation.getClips().forEach((v,i)=>{ enumMap[v.name] = i + 1; });
                // @ts-ignore
                cc.Class.Attr.setClassAttr(this, 'openAnimation', 'enumList', cc.Enum.getList(enumMap));
                // @ts-ignore
                cc.Class.Attr.setClassAttr(this, 'closeAnimation', 'enumList', cc.Enum.getList(enumMap));
            }else{
                // @ts-ignore
                cc.Class.Attr.setClassAttr(this, 'openAnimation', 'enumList', cc.Enum.getList(cc.Enum(TempAnimtionEnum)));
                // @ts-ignore
                cc.Class.Attr.setClassAttr(this, 'closeAnimation', 'enumList', cc.Enum.getList(cc.Enum(TempAnimtionEnum)));
            }
            if(this.node){
                Editor.Utils.refreshSelectedInspector('node', this.node.uuid);
            }
        }
    }
    
	/**
	 * @zh
	 * 预加载
	 */
	__preload(){
		this.updateAnimationEnum();
	}
	
	/**
	 * @zh
	 * 播放动画
	 * 
	 * @param aType 动画类型 'open'/'close'
	 */
     public play(aType:string){
		return new Promise((resolve)=>{
			if(!this._uiAnimation){
				resolve(null);
			}else{
				let state:cc.AnimationState = null;
				let duration:number = 0;
				if(aType == 'open' && this.openAnimation > 0){
					let clip = this._uiAnimation.getClips()[this.openAnimation - 1];
					state = this._uiAnimation.getAnimationState(clip.name);
					if(this.openReverse){
						state.time = clip.duration;
						state.speed = -1;
					}else{
						state.time = 0;
						state.speed = 1;
					}
					duration = clip.duration;
				}else if(aType == 'close' && this.closeAnimation > 0){
					let clip = this._uiAnimation.getClips()[this.closeAnimation - 1];
					state = this._uiAnimation.getAnimationState(clip.name);
					if(this.closeReverse){
						state.time = clip.duration;
						state.speed = -1;
					}else{
						state.time = 0;
						state.speed = 1;
					}
					duration = clip.duration;
				}
				if(!state){
					resolve(null);
				}else{
					state.play();
					cc.tween(this.node).delay(duration).call(resolve).start();
				}
			}
		});
	}
}

}

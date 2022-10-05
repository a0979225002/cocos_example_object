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
/// <reference path="../utils/js.ts" />

namespace lcc {

const TAG = "lcc/base/doing.ts";

/**
 * @zh
 * 计数器
 */
class Counter {

	/**
	 * @zh
	 * 计数值
	 */
    private _count:number = 0;

	/**
	 * @zh
	 * 归零回调
	 */
    private _onZero:Function = null;

	/**
	 * @zh
	 * 检查归零
	 */
	private checkZero(){
		if(this._count <= 0){
			if(this._onZero){
				let callback = this._onZero;
				this._onZero = null;
				try{
					callback();
				}catch(e){
					cc.error(TAG, `checkZero Exception ${e}`);
				}
			}
		}
	}

	/**
	 * 重置计数
	 */
	public reset(){
		this._count = 0;
		this.checkZero();
	}
	
	/**
	 * @zh
	 * 增加计数
	 */
	public addCount(){
		this._count ++;
	}

	/**
	 * @zh
	 * 减少计数
	 */
	public decCount(){
		this._count --;
		this.checkZero();
	}

	/**
	 * @zh
	 * 在回调函数内计数
	 * 
	 * @param callback - 回调函数
	 */
	public async in(callback:Function){
		this.addCount();
		if(callback){
			try{
				await callback();
			}catch(e){
				cc.error(TAG, `in Exception ${e}`);
			}
		}
		this.decCount();
	}
	
	/**
	 * @zh
	 * 直到归零
	 */
	public async untilZero(){
		if(this._count > 0){
			return new Promise<any>((resolve)=>{
				this._onZero = resolve;
			});
		}
	}
}

/**
 * @zh
 * 工作中类
 */
class Doing {

	/**
	 * 索引加载
	 */
	public indexLoad:Counter = new Counter();
	
	/**
	 * 语言更新
	 */
	public langUpdate:Counter = new Counter();
	
	/**
	 * 状态初始化
	 */
	public stateInitialize:Counter = new Counter();
	
	/**
	 * 状态释放
	 */
	public stateRelease:Counter = new Counter();
	
	/**
	 * 重置工作中
	 */
	public reset(){
		this.indexLoad.reset();
		this.langUpdate.reset();
		this.stateInitialize.reset();
		this.stateRelease.reset();
	}
}

/**
 * @zh
 * 工作中对象
 */
export const doing = new Doing();

}

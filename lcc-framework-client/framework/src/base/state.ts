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
/// <reference path="./doing.ts" />
/// <reference path="./reference.ts" />
/// <reference path="./variable.ts" />

namespace lcc {

const TAG = "lcc/base/state.ts";
    
/**
 * @zh
 * 框架状态
 */
class State extends cc.EventTarget {

	/**
	 * @zh
	 * 是否已经初始化
	 */
	private _initialized:boolean = false;

	/**
	 * @zh
	 * 判断是否已经初始化
	 */
	public get initialized(){
		return this._initialized;
	}
	
	/**
	 * @zh
	 * 初始化
	 */
	public async initialize(){
		if(!this._initialized){
			reference.removeAll();
			variable.removeAll();
			doing.reset();
			try{
				this.emit('initialize');
			}catch(e){
				cc.error(TAG, `initialize Exception ${e}`);
			}
			await doing.stateInitialize.untilZero();
			this._initialized = true;
		}
	}
	
	/**
	 * @zh
	 * 释放
	 */
	 public async release(){
		if(this._initialized){
			this._initialized = false;
			doing.reset();
			try{
				this.emit('release');
			}catch(e){
				cc.error(TAG, `release Exception ${e}`);
			}
			await doing.stateRelease.untilZero();
		}
	}
}

/**
 * @zh
 * 框架状态对象
 */
export const state = new State();

}

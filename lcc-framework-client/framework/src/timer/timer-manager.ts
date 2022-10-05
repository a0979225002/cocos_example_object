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

const TAG = "lcc/timer/timer-manager.ts";

/**
 * @zh
 * 定时器配置
 */
 interface TimerConfig {
    /**
     * @zh
     * 剩余时间
     */
    remainTime:number;
    
    /**
     * @zh
     * 处理函数
     */
    handle:(dt?:number)=>void;
    
    /**
     * @zh
     * 循环运行，除非被移除
     */
    loop:boolean;
    
    /**
     * @zh
     * 总时间
     */
	totalTime:number;
}

/**
 * @zh
 * 定时器选项
 */
export interface TimerOption {
    /**
     * @zh
     * 定时器分组
     */
    group?:string;

    /**
     * @zh
     * 定时器键
     */
    key?:string;

    /**
     * @zh
     * 循环运行
     */
    loop?:boolean;
}

/**
 * @zh
 * 默认定时器组
 */
export let DEFAULT_TIMER_GROUP = "default";

/**
/**
 * @zh
 * 定时器时间片，秒
 */
export let TIMER_TIMESLICE = 1;

/**
 * @zh
 * 定时器管理器<br/>
 * 主要用于程序中所有定时器的添加、触发和移除
 */
 class TimerManager {
	
	/**
     * @zh
	 * 定时器实体
	 */
	private _entity = null;

	/**
     * @zh
	 * 任务映射表
	 */
	private _taskMap:{[key:string]:{[key:string]:TimerConfig}} = js.createMap();

	/**
     * @zh
	 * 任务索引<br>
     * 如果任务没有指定`key`，就会自动分配索引
	 */
	private _taskIndex = 0;

	/**
	 * @zh
	 * 构造函数
	 */
	constructor(){
		state.on('initialize', ()=>{
			doing.stateInitialize.in(()=>{
				this._entity = null;
				this._taskMap = js.createMap();
				this._taskIndex = 0;
			});
		});
		state.on('release', ()=>{
			doing.stateRelease.in(()=>{
				this.removeAllTimers();
			});
		});
    }
	
	/**
     * @zh
	 * 安装定时器实体
	 */
	private setupTimerEntity(){
		if(!this._entity && !js.isEmptyMap(this._taskMap)){
			this._entity = setInterval(this.onTimeUpdate.bind(this), TIMER_TIMESLICE * 1000);
			DEBUG.TIMER && cc.log(TAG, `setupTimerEntity ${TIMER_TIMESLICE * 1000}`);
		}
	}
	
	/**
     * @zh
	 * 删除定时器实体
	 */
	private deleteTimerEntity(){
		if(this._entity && js.isEmptyMap(this._taskMap)){
			clearInterval(this._entity);
			this._entity = null;
			DEBUG.TIMER && cc.log(TAG, `deleteTimerEntity`);
		}
	}

	/**
     * @zh
	 * 时间更新函数
	 */
	private onTimeUpdate(){
		let change = false;
		for (let group of Object.keys(this._taskMap)){
			let tasks = this._taskMap[group];
			if(tasks){
				for (let key of Object.keys(tasks)){
					let task = tasks[key];
					if(task){
						task.remainTime -= TIMER_TIMESLICE;
						if(task.remainTime <= 0){
							if(task.loop){
								task.remainTime = task.totalTime;
							}else{
								delete tasks[key];
								if(js.isEmptyMap(tasks)){
									delete this._taskMap[group];
									change = true;
								}
							}
							try {
								task.handle(task.totalTime);
							}catch(e){
								logMgr.error(TAG, `onTimeUpdate '${group}-${key}' ${e}`);
							}
						}
					}
				}
			}
		}
		if(change){
			this.deleteTimerEntity();
		}
	}

	/**
     * @zh
	 * 添加定时器
     * 
	 * @param time - 回调的时间
	 * @param handle - 回调函数
	 * @param key - 可选，定时器键或者定时器选项
	 */
	public addTimer(time:number, handle:(dt?:number)=>void, key:string|TimerOption = {}){
        let option:TimerOption;
        if(typeof key == 'string'){
            option = { key : key };
        }else{
            option = key;
        }
		DEBUG.TIMER && cc.log(TAG, `addTimer ${time} ${JSON.stringify(option)}`);
        let group = option.group || DEFAULT_TIMER_GROUP;
		let tasks = this._taskMap[group];
		if(!tasks){
			tasks = js.createMap();
			this._taskMap[group] = tasks;
		}
        let timerKey = option.key || (this._taskIndex++).toString();
		tasks[timerKey] = {
			remainTime : time,
			handle : handle,
			loop : option.loop,
			totalTime : time,
		}
		this.setupTimerEntity();
        return timerKey;
	}

	/**
     * @zh
	 * 移除定时器<br/>
     * 如果选项不传入`key`，那么会移除整个定时器分组上的所有定时器
     * 
	 * @param key - 定时器键或者定时器选项，如果使用选项则必须存在group，否则不生效
	 */
	public removeTimer(key:string|TimerOption){
        let option:TimerOption;
        if(typeof key == 'string'){
            option = { key : key, group : DEFAULT_TIMER_GROUP };
        }else{
            option = key;
        }
		DEBUG.TIMER && cc.log(TAG, `removeTimer ${JSON.stringify(option)}`);
        if(option.group){
            let timerKey = option.key;
            let remainTime = 0;
            let tasks = this._taskMap[option.group];
            if(tasks){
                if(timerKey){
                    let task = tasks[timerKey];
                    if(task){
                        delete tasks[timerKey];
                        if(js.isEmptyMap(tasks)){
                            delete this._taskMap[option.group];
                        }
                        remainTime = task.remainTime;
                    }
                    DEBUG.TIMER && cc.log(TAG, `removeTimer ${JSON.stringify(option)} success`);
                }else{
                    delete this._taskMap[option.group];
                    DEBUG.TIMER && cc.log(TAG, `removeTimer Group ${JSON.stringify(option)} success`);
                }
            }
            this.deleteTimerEntity();
            return remainTime;
        }
		
	}

	/**
	 * 移除定时器
	 */
	public removeAllTimers(){
		for(let group of Object.keys(this._taskMap)){
			this.removeTimer({ group : group });
		}
	}

	/**
	 * @zh
	 * 睡眠指定秒数
	 * 
	 * @param seconds - 秒数
	 */
	public sleep(seconds:number){
		return new Promise((resolve)=>{
			this.addTimer(seconds, resolve, { group : 'lcc.TimerManager.sleep' });
		});
	}
}

/**
 * @zh
 * 定时器管理器对象
 */
export const timerMgr = new TimerManager();

}

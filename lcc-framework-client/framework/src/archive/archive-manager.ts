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

const TAG = "lcc/archive/archive-manager.ts";

/**
 * @zh
 * 事件点块位数
 */
const EPOINT_BLOCK = 32;

/**
 * @zh
 * 存档信息项
 */
const INFO_ITEM = "archive_info"

/**
 * @zh
 * 存档插槽前缀
 */
const DATA_PREFIX = "archive_data_";

/**
 * @zh
 * 默认存档事件段
 */
export let ARCHIVE_EVENTS_SEGEMENT = 'default';

/**
 * @zh
 * 存档信息
 */
interface ArchiveInfo {
	/**
	 * @zh
	 * 插槽
	 */
	slot:number;

	/**
	 * @zh
	 * 名字
	 */
	name:string;

	/**
	 * @zh
	 * 时间
	 */
	time:number;

	/**
	 * @zh
	 * 版本
	 */
	version:string;
}

/**
 * @zh
 * 存档管理器
 */
class ArchiveManager extends cc.EventTarget {

	/**
	 * @zh
	 * 存档信息
	 */
	private _infos:{[key:number]:ArchiveInfo} = js.createMap();

	/**
	 * @zh
	 * 当前存档插槽
	 */
	private _nowSlot:number = 0;

	/**
	 * @zh
	 * 当前存档数据
	 */
	private _data:any = null;

	/**
	 * @zh
	 * 构造函数
	 */
	constructor(){
		super();
		state.on('initialize', ()=>{
			doing.stateInitialize.in(()=>{
				this._infos = JSON.parse(cc.sys.localStorage.getItem(INFO_ITEM) || "{}");
				this._nowSlot = 0;
				this._data = null;
			});
		});
		state.on('release', ()=>{
			doing.stateRelease.in(()=>{
				this.clear();
			});
		});
	}
	
	/**
	 * @zh
	 * 获得当前存档信息
	 */
	public getArchiveInfo(){
		return this._infos[this,this._nowSlot];
	}

	/**
	 * @zh
	 * 获得当前存档数据
	 */
	public getArchiveData(){
		return this._data;
	}

	/**
	 * @zh
	 * 获得所有存档
	 */
	public getArchives(){
		let archives:ArchiveInfo[] = [];
		for(let s in this._infos){
			archives.push(this._infos[s]);
		}
		archives.sort((a, b)=>{
			return b.time - a.time;
		});
		return archives;
	}

	/**
	 * @zh
	 * 加载存档
	 * 
	 * @param slot - 插槽
	 */
	public loadArchive(slot:number){
		this._nowSlot = slot;
		let datas = cc.sys.localStorage.getItem(DATA_PREFIX + this._nowSlot);
		if(datas){
			this._data = JSON.parse(datas);
			try {
				this.emit("load", this._data, this._infos[this._nowSlot]);
				DEBUG.ARCHIVE && cc.log(TAG, `loadArchive ${slot}`);
				return true;
			}catch(e){
				cc.error(TAG, `loadArchive ' Exception ${e}`);
			}
		}
	}

	/**
	 * @zh
	 * 保存存档
	 * 
	 * @param slot - 插槽
	 */
	public saveArchive(slot:number){
		this._nowSlot = slot;
		if(this._nowSlot && this._infos && this._data){
			let info = this._infos[this._nowSlot];
			try {
				this.emit("save", this._data, info);
				info.time = Math.floor(Date.now()/1000);
				cc.sys.localStorage.setItem(INFO_ITEM, JSON.stringify(this._infos));
				cc.sys.localStorage.setItem(DATA_PREFIX + this._nowSlot, JSON.stringify(this._data));
				DEBUG.ARCHIVE && cc.log(TAG, `saveArchive ${slot}`);
			}catch(e){
				cc.error(TAG, `saveArchive ' Exception ${e}`);
			}
		}
	}

	/**
	 * @zh
	 * 删除存档
	 * 
	 * @param slot - 插槽
	 */
	public deleteArchive(slot:number){
		if(this._nowSlot == slot){
			this._data = null;
		}
		this._nowSlot = slot;
		if(this._infos[this._nowSlot]){
			delete this._infos[this._nowSlot];
			cc.sys.localStorage.setItem(INFO_ITEM, JSON.stringify(this._infos));
			cc.sys.localStorage.setItem(DATA_PREFIX + this._nowSlot, "");
			DEBUG.ARCHIVE && cc.log(TAG, `deleteArchive ${slot}`);
			return true;
		}
	}

	/**
	 * @zh
	 * 新建存档
	 * 
	 * @param slot - 插槽
	 * @param name - 存档名
	 */
	public createArchive(slot:number, name?:string){
		this._nowSlot = slot;
		let info = {
			slot : slot,
			name : name || "New Archive",
			time : Math.floor(Date.now() / 1000),
			version : "1.0.0",
		};
		this._infos[slot] = info;
		this._data = {
			eventps : {		 	            // 事件点
				default : js.createMap()	// 默认
			}
		};
		try {
			this.emit("create", this._data, info);
			DEBUG.ARCHIVE && cc.log(TAG, `createArchive ${slot} name:${name}`);
		}catch(e){
			cc.error(TAG, `createArchive ' Exception ${e}`);
		}
	}
	
	/**
	 * @zh
	 * 检查事件点
	 * 
	 * @param point - 事件
	 * @param segment - 段
	 */
	public checkEventPoint(point:number, segment:string = ARCHIVE_EVENTS_SEGEMENT){
		point --;
		let valofst = Math.floor(point / EPOINT_BLOCK);
		let bitofst = point % EPOINT_BLOCK;
		let segeps = this._data.eventps[segment];
		if(!segeps){
			return false;
		}
		let epsval = segeps[valofst];
		if(!epsval){
			return false;
		}
		return ((epsval & (1 << bitofst)) != 0);
	}

	/**
	 * @zh
	 * 设置事件点
	 * 
	 * @param point - 事件
	 * @param state - 状态
	 * @param segment - 段
	 */
	public setEventPoint(point:number, state:boolean, segment:string = ARCHIVE_EVENTS_SEGEMENT){
		point --;
		let valofst = Math.floor(point / EPOINT_BLOCK);
		let bitofst = point % EPOINT_BLOCK;
		
		let segeps = this._data.eventps[segment];
		if(!segeps){
			segeps = js.createMap();
			this._data.eventps[segment] = segeps;
		}
		let epsval = segeps[valofst] || 0;
		if(state){
			epsval = epsval | (1 << bitofst);
		}else{
			epsval = epsval & (~(1 << bitofst));
		}
		segeps[valofst] = epsval;
		DEBUG.ARCHIVE && cc.log(TAG, `setEventPoint ${point} state:${state} segment:${segment}`);
	}
};

/**
 * @zh
 * 存档管理器对象
 */
export const archiveMgr = new ArchiveManager();

}

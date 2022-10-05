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
/// <reference path="../base/doing.ts" />
/// <reference path="../utils/js.ts" />

namespace lcc {

const TAG = "lcc/table/table-manager.ts";

/**
 * @zh
 * 索引路径
 */
export namespace INDEXPATH {
	
	/**
	 * @zh
	 * 数据表
	 */
	export let TABLE = "table";
};

/**
 * @zh
 * 自动加载数据表<br/>
 * 如果为true，那么会在加载游戏包的时候加载所有数据表。
 */
export let LOADTABLE_AUTO = true;

/**
 * @zh
 * 数据表对象映射表<br/>
 */
export let TABLES:{[key:string]:any} = js.createMap();

/**
 * @zh
 * 数据表管理器<br/>
 * 主要用于管理游戏数据表，这些表一般由策划配置<br/>
 * 数据表的合并功能
 */
class TableManager {
	
	/**
	 * @zh
	 * 数据表加载映射表
	 */
	private _loadMap:{[key:string]:boolean} = js.createMap();

	/**
	 * @zh
	 * 构造函数
	 */
	constructor(){
		state.on('initialize', ()=>{
			doing.stateInitialize.in(()=>{
				this._loadMap = js.createMap();
				indexMgr.on("indexes_removed", this.onIndexesRemoved, this);
				indexMgr.on("indexes_loaded_" + INDEXPATH.TABLE, this.onIndexesLoaded, this);
			});
		});
		state.on('release', ()=>{
			doing.stateRelease.in(()=>{
				indexMgr.targetOff(this);
				for(let tname of Object.keys(TABLES)){
					delete TABLES[tname];
				}
			});
		});
    }
	
	/**
	 * @zh
	 * 当移除索引
	 * 
	 * @internal
	 */
	private onIndexesRemoved(){
		doing.indexLoad.addCount();
		for(let tname of Object.keys(TABLES)){
			delete TABLES[tname];
		}
		this.onIndexesLoaded(indexMgr.getIndex(INDEXPATH.TABLE));
		doing.indexLoad.decCount();
	}

	/**
	 * @zh
	 * 当加载索引
	 * 
	 * @param ivalue 索引对象
	 * 
	 * @internal
	 */
	private async onIndexesLoaded(ivalue:Object){
		doing.indexLoad.addCount();
		if(ivalue){
			for(let tname in ivalue){
				if(LOADTABLE_AUTO || this._loadMap[tname]){
					this._loadMap[tname] = true;
					let tfiles = ivalue[tname];
					for (let tfile of tfiles){
						await this.loadTableFile(tfile);
					}
					this.sortListTable(tname);
				}
			}
		}
		doing.indexLoad.decCount();
	}

	/**
	 * @zh
	 * 加载数据表
	 * 
	 * @param tgPath - 数据表文件全局路径
	 */
	private async loadTableFile(tgPath:string){
		let table = await packMgr.loadJson(tgPath);
		if(!table){
			cc.error(TAG, `database file ${tgPath} read fail !!!`);
		}else{
			js.mergeMap(TABLES, table, { tag : TAG, source : tgPath });
			DEBUG.TABLE && cc.log(TAG, `load table ${JSON.stringify(table)} from ${tgPath}`);
		}
    }

	/**
	 * @zh
	 * 索引具体值
	 * 
	 * @param map - 索引对象
	 * @param index - 索引
	 */
	private indexValue(map:Object, index:any){
		if(typeof index == 'string'){
			return js.getMapValue(map, index, '.');
		}else{
			return map[index];
		}
	}

	/**
	 * @zh
	 * 排序列表类型数据表
	 * 
	 * @param tname 数据表名称
	 */
	private sortListTable(tname:string){
		let sortMap = TABLES['#listSort'];
		if(sortMap){
			let table = TABLES[tname]
			let sortInfo = sortMap[tname];
			if(table && sortInfo){
				if(sortInfo.key != null){
					if(sortInfo.sort == 'up'){
						table.sort((a:any , b:any)=>{ return this.indexValue(a, sortInfo.key) - this.indexValue(b, sortInfo.key); });
					}else{
						table.sort((a:any , b:any)=>{ return this.indexValue(b, sortInfo.key) - this.indexValue(a, sortInfo.key); });
					}
				}else{
					if(sortInfo.sort == 'up'){
						table.sort((a:any , b:any)=>{ return a - b; });
					}else{
						table.sort((a:any , b:any)=>{ return b - a; });
					}
				}
			}
		}
	}
	
    /**
	 * @zh
     * 获得所有表
     */
	public getTables(){
        return TABLES;
    }
    
    /**
	 * @zh
     * 获得指定表<br/>
	 * 在[[LOADTABLE_AUTO]]为false时。如果表未加载，会优先加载指定表。
	 * 
     * @param tname - 数据表名称
     */
    public async getTable<T = any>(tname:string){
		await this.loadTable(tname);
        return TABLES[tname] as T;
    }

	/**
	 * @zh
	 * 手动加载数据表<br/>
	 * 只在[[LOADTABLE_AUTO]]为false下有效
	 * 
	 * @param tnames - 数据表名称数组
	 */
	public async loadTable(...tnames:string[]){
		if(!LOADTABLE_AUTO){
			for(let tname of tnames){
				if(!this._loadMap[tname]){
					this._loadMap[tname] = true;
					let tfiles = indexMgr.getIndex(`${INDEXPATH.TABLE}/${tname}`);
					if(tfiles){
						for (let tfile of tfiles){
							await this.loadTableFile(tfile);
						}
						this.sortListTable(tname);
					}
				}
			}
		}
	}

    /**
	 * @zh
     * 手动移除数据表<br/>
	 * 只在[[LOADTABLE_AUTO]]为false下有效
	 * 
     * @param tnames - 数据表名称数组
     */
	public removeTable(...tnames:string[]){
		if(!LOADTABLE_AUTO){
			for(let tname of tnames){
				delete TABLES[tname];
				delete this._loadMap[tname];
			}
		}
    }
	
	/**
	 * @zh
	 * 手动移除移除所有数据表<br/>
	 * 只在[[LOADTABLE_AUTO]]为false下有效
	 */
	public removeAllTables(){
		if(!LOADTABLE_AUTO){
			this.removeTable(...Object.keys(TABLES));
		}
    }

};

/**
 * @zh
 * 数据表管理对象
 */
export const tableMgr = new TableManager();

variable.set('TABLE', (path:string)=>{
	return js.getMapValue(TABLES, path);
})

}

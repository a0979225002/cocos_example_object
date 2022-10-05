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
/// <reference path="../base/doing.ts" />
/// <reference path="../pack/read-config.ts" />
/// <reference path="../base/variable.ts" />
/// <reference path="../utils/js.ts" />

namespace lcc {

const TAG = "lcc/index/index-manager.ts";

/**
 * @zh
 * 索引路径冲突
 */
export let ERROR_INDEX_PATH_CONFLICT = true;

/**
 * @zh
 * 包索引
 */
interface PackIndex {
	/**
	 * @zh
	 * 优先级
	 */
	priority:number;

	/**
	 * @zh
	 * 索引对象
	 */
	indexes:any;
}

/**
 * @zh
 * 索引管理器<br/>
 * 管理游戏中的公用资源索引
 */
class IndexManager extends cc.EventTarget {
	
	/**
	 * @zh
	 * 包优先级
	 */
	private _packPriority:number = 0;
	
	/**
	 * @zh
	 * 包索引表
	 */
	private _packIndexs:{[key:string]:PackIndex} = js.createMap();

	/**
	 * @zh
	 * 全局索引表
	 */
	private _indexes:any = js.createMap();

	/**
	 * @zh
	 * 构造索引管理器
	 */
	constructor(){
		super();
		state.on('initialize', ()=>{
			doing.stateInitialize.in(()=>{
				this._packPriority = 0;
				this._packIndexs = js.createMap();
				this._indexes = js.createMap();
			});
		});
		state.on('release', ()=>{
			doing.stateRelease.in(()=>{
				this.clear();
			});
		});
	}

	//--------------------------------------------------	索引操作

	/**
	 * @zh
	 * 合并Map表<br/>
	 * Map表合并规则：<br/>
	 * 遍历源Map表字段，对比目的Map表对应字段，存在几种情况：<br/>
	 * 1、目的Map表中不存在该字段，直接设置为源Map表字段<br/>
	 * 2、目的Map表字段和源Map表字段同为数组(Array)，把字段的源Map表数组复制到目的Map表数组中<br/>
	 * 3、目的Map表字段和源Map表字段同为对象(Object)，以字段的目的Map表和源Map表为参数再次调用次函数<br/>
	 * 4、其他情况，说明存在冲突。警告后，源Map表字段直接覆盖目的Map表字段
	 * 
	 * @param dmap - 目的Map表
	 * @param smap - 源Map表
	 * @param listen - 是否监听
	 * @param ipath - 文件路径
	 */
	private mergeTable(dmap:Object, smap:Object, listen:boolean = false, ipath:string = ""){
        for(let key in smap){
            let svalue = smap[key];
            let dvalue = dmap[key];
            let lipath = ipath ? `${ipath}/${key}` : key;

            if(!dvalue){
                dmap[key] = svalue;
            }else{
                let stype = typeof svalue;
                let dtype = typeof dvalue;
                if(dtype == 'object' && stype == dtype){
                    let sarray = svalue instanceof Array;
                    let darray = dvalue instanceof Array;
                    if(sarray != darray){
                        let msg = `invalid merge type array '${sarray}-${darray}' in key '${key}'`;
                        if(ERROR_INDEX_PATH_CONFLICT){
                            cc.error(TAG, msg);
                        }else{
                            cc.warn(TAG, msg);
                        }
                        dmap[key] = svalue;
                    }else{
                        if(darray){
                            dvalue.push(...svalue);
                        }else {
                            this.mergeTable(dvalue, svalue, listen, lipath);
                        }
                    }
                }else{
                    let msg = `invalid merge type '${stype}-${dtype}' in key '${key}'`;
                    if(ERROR_INDEX_PATH_CONFLICT){
                        cc.error(TAG, msg);
                    }else{
                        cc.warn(TAG, msg);
                    }
                    dmap[key] = svalue;
                }
            }
            if(listen){
				try{
					this.emit("indexes_loaded_" + lipath, svalue);
				}catch(e){
					cc.error(TAG, `mergeTable Exception ${e}`);
				}
			}
        }
	}

	/**
	 * @zh
	 * 重构索引
	 */
	private rebuildIndexes(){
		this._indexes = js.createMap();
		let packIndexs = Object.values(this._packIndexs).sort((a,b)=>{ return a.priority - b.priority; });
		for (let pi of packIndexs){
			this.mergeTable(this._indexes, pi.indexes);
		}
	}
	
	/**
	 * @zh
	 * 获得指定索引
	 * 
	 * @param path - 索引路径
	 */
	public getIndex(path:string){
		if(path){
			return js.getMapValue(this._indexes, path, "/");
		}
	}

	/**
	 * @zh
	 * 加载包索引表
	 * 
	 * @param pname - 包名称
	 */
	public async loadPackIndexes(pname:string){
		doing.indexLoad.addCount();
		let indexPath = `asset://${pname}/index-files`;
		let indexConfig = await readConfigFile(indexPath);
		if(indexConfig){
			indexConfig = translateJSON(indexConfig, fs.dirname(indexPath));
			for(let k in indexConfig){
				let indexFile = indexConfig[k];
				let indexes = await readConfigFile(indexFile);
				if(indexes){
					indexes = translateJSON(indexes, fs.dirname(indexFile));
					let packIndex = this._packIndexs[pname];
					if(!packIndex){
						packIndex = {
							priority : this._packPriority ++,
							indexes : indexes,
						};
						this._packIndexs[pname] = packIndex;
					}else{
						this.mergeTable(packIndex.indexes, indexes);
					}
					this.mergeTable(this._indexes, indexes, true);
				}
			}
		}
		doing.indexLoad.decCount();
	}
	
	/**
	 * @zh
	 * 移除包索引表
	 * 
	 * @param pname - 包名称
	 */
	public removePackIndexes(pname:string){
		doing.indexLoad.addCount();
		let packIndex = this._packIndexs[pname];
		if(packIndex){
			delete this._packIndexs[pname];
			this.rebuildIndexes();
			this.notifyIndexesRemoved(packIndex.indexes);
			try{
				this.emit("indexes_removed");
			}catch(e){
				cc.error(TAG, `removePackIndexes Exception ${e}`);
			}
		}
		doing.indexLoad.decCount();
	}

	/**
	 * @zh
	 * 通知索引被移除
	 * 
	 * @param indexes - 移除的包索引表
	 * @param ipath - 当前索引路径
	 */
	private notifyIndexesRemoved(indexes:any, ipath:string = ""){
		if(indexes){
			for(let key in indexes){
				let value = indexes[key];
				let lipath = ipath ? `${ipath}/${key}` : key;
				if(typeof value == 'object'){
					this.notifyIndexesRemoved(value, lipath);
				}
				try{
					this.emit("indexes_removed_" + lipath, value);
				}catch(e){
					cc.error(TAG, `notifyIndexesRemoved Exception ${e}`);
				}
			}
		}
	}
}

/**
 * @zh
 * 索引管理器对象
 */
export const indexMgr = new IndexManager();;

}

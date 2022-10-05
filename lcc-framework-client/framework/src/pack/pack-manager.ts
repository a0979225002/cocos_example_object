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
/// <reference path="../base/variable.ts" />
/// <reference path="../base/reference.ts" />
/// <reference path="../index/index-manager.ts" />
/// <reference path="../utils/js.ts" />
/// <reference path="../utils/asset.ts" />

namespace lcc {

const TAG = "lcc/pack/pack-manager.ts";

/**
 * @zh
 * 真实文件路径
 */
export interface RealFilePath {
	/**
	 * @zh
	 * 真实路径
	 */
	rpath:string;

	/**
	 * @zh
	 * 资源包
	 */
	bundle?:cc.AssetManager.Bundle;
}

/**
 * @zh
 * 包管理器
 */
class PackManager extends cc.EventTarget {
	
	/**
	 * @zh
	 * 包映射表
	 */
	private _packs:{[key:string]:PackLoader} = js.createMap();

	/**
	 * @zh
	 * 构造函数
	 */
	constructor(){
		super();
		state.on('initialize',async ()=>{
			doing.stateInitialize.in(async ()=>{
				await asset.loadBundle('resources');
				this._packs = js.createMap();
			});
		});
		state.on('release', async ()=>{
			doing.stateRelease.in(async ()=>{
				this.clear();
				await this.releaseAllPacks();
			});
		});
	}
	
	/**
	 * @zh
	 * 获得指定包
	 * 
	 * @param name - 包名称
	 */
	public getPack(name:string){
		return this._packs[name];
	}
	
	/**
	 * @zh
	 * 加载包
	 * 
	 * @param nameOrUrl - 包名称或者URL路径
	 */
	public async loadPack(nameOrUrl:string){
		let pname = fs.basename(nameOrUrl);
		let pack = this._packs[pname];
		if(!pack){
			variable.set("__LoadPack__", pname);
			let bundle = await asset.loadBundle(nameOrUrl);
			let PackLoaderType = reference.get<typeof PackLoader>({pack : pname, path : 'PackLoader'}) || PackLoader;
			let packLoader = new PackLoaderType(pname, bundle);
			this._packs[pname] = packLoader;
			await indexMgr.loadPackIndexes(pname);
			await packLoader.onLoad();
			try{
				this.emit("loaded", pname);
			}catch(e){
				cc.error(TAG, `loadPack Exception ${e}`);
			}
			await doing.indexLoad.untilZero();							// 等待索引加载完成
		}
		return pack;
	}

	/**
	 * @zh
	 * 释放包
	 * 
	 * @param name - 包名称
	 */
	public async releasePack(name:string){
		let pack = this._packs[name];
		if(pack){
			let bundle = pack.getBundle();
			await pack.onDestroy();
			indexMgr.removePackIndexes(name);
			delete this._packs[name];
			reference.removeByPack(name);
			cc.assetManager.removeBundle(bundle);
			try{
				this.emit("released", name);
			}catch(e){
				cc.error(TAG, `releasePack Exception ${e}`);
			}
			await doing.indexLoad.untilZero();							// 等待索引加载完成
		}
	}

	/**
	 * @zh
	 * 释放所有包
	 */
	public async releaseAllPacks(){
		for(let name of Object.keys(this._packs)){
			await this.releasePack(name);
		}
	}
	
	/**
	 * @zh
	 * 解析资源路径
	 * 
	 * @param aPath - 资源路径
	 */
	public parseAssetPath(aPath:string):RealFilePath{
		let parts = aPath.split('://');
		if(parts.length == 2 && parts[0] == 'asset'){
			let pindex = parts[1].indexOf('/');
			return {
				rpath : parts[1].substring(pindex + 1),
				bundle : this.getPack(parts[1].substring(0, pindex)).getBundle(),
			}
		}
	}

	/**
	 * @zh
	 * 加载json文件
	 * 
	 * @param jgPath - JSON文件全局路径
	 */
	public async loadJson(jgPath:string){
		let finfo = this.parseAssetPath(jgPath);
		if(finfo && finfo.bundle){
			return await asset.loadJson(finfo.rpath, finfo.bundle);
		}else{
			cc.warn(TAG, `not found Json : ${jgPath}`);
		}
	}

		
	/**
	 * @zh
	 * 加载音频
	 * 
	 * @param agPath - 音频文件全局路径
	 */
	 public async loadAudio(agPath:string) {
		let finfo = this.parseAssetPath(agPath);
		if(finfo && finfo.bundle){
			return await asset.loadAudio(finfo.rpath, finfo.bundle);
		}else{
			cc.warn(TAG, `not found AudioClip : ${agPath}`);
		}
	}

	/**
	 * @zh
	 * 加载预制件
	 * 
	 * @param pfile 预制件全局路径
	 */
	public async loadPrefab(pgPath:string) {
		let finfo = this.parseAssetPath(pgPath);
		if(finfo && finfo.bundle){
			return await asset.loadPrefab(finfo.rpath, finfo.bundle);
		}else{
			cc.warn(TAG, `not found Prefab : ${pgPath}`);
		}
	}

	/**
	 * @zh
	 * 加载精灵帧
	 * 
	 * @param sfgPath 精灵帧全局路径
	 */
	public async loadSpriteFrame(sfgPath:string){
		let finfo = this.parseAssetPath(sfgPath);
		if(finfo && finfo.bundle){
			return await asset.loadSpriteFrame(finfo.rpath, finfo.bundle);
		}else{
			cc.warn(TAG, `not found SpriteFrame : ${sfgPath}`);
		}
	}

	/**
	 * @zh
	 * 加载ttf字体
	 * 
	 * @param ttfgPath - 字体文件全局路径
	 */
	public async loadTTFFont(ttfgPath:string) {
		let finfo = this.parseAssetPath(ttfgPath);
		if(finfo && finfo.bundle){
			return await asset.loadTTFFont(finfo.rpath, finfo.bundle);
		}else{
			cc.warn(TAG, `not found TTFFont : ${ttfgPath}`);
		}
	}
		
	/**
	 * @zh
	 * 获得资源的url
	 * 
	 * @param agPath 资源文件全局路径
	 */
	public async getAssetUrl(agPath:string){
		let finfo = this.parseAssetPath(agPath);
		if(finfo && finfo.bundle){
			return await asset.getAssetUrl(finfo.rpath, finfo.bundle);
		}else{
			cc.warn(TAG, `not found ResUrl : ${agPath}`);
		}
	}
}

/**
 * @zh
 * 包管理器对象
 */
export const packMgr = new PackManager();

}

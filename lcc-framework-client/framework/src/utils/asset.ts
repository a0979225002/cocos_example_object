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

export namespace asset {

const TAG = "lcc/utils/asset.ts";

/**
 * @zh
 * 加载资源包
 * 
 * @param nameOrUrl - 包名或者URL路径
 */
export function loadBundle(nameOrUrl:string){
	return new Promise<cc.AssetManager.Bundle>((resolve) => {
		cc.assetManager.loadBundle(nameOrUrl, (err, bundle)=>{
			if (!err && bundle) {
				resolve(bundle);
			} else {
				cc.warn(TAG, `not found Bundle : ${nameOrUrl}`);
				resolve(null);
			}
		});
	});
}

/**
 * @zh
 * 加载远程精灵帧
 * 
 * @param surl - 精灵帧URL路径
 * @param ext - 图片后缀, 例如 .png .jpg 等。如果路径没有后缀，则必须指定该后缀
 */
export function loadRemoteSpriteFrame(surl:string, ext?:string){
	return new Promise<cc.SpriteFrame>((resolve) => {
		let callback = (err:Error, data:cc.Asset) => {        
			if (!err && data) {
				let spriteFrame = new cc.SpriteFrame();
				spriteFrame.setTexture(<cc.Texture2D>data);
				resolve(spriteFrame);
			}else{
				cc.warn(TAG, `not found Remote SpriteFrame : ${surl}`);
				resolve(null);
			}
		}
		if(ext){
			cc.assetManager.loadRemote(surl, { type : ext }, callback);
		}else{
			cc.assetManager.loadRemote(surl, callback);
		}
	});
}

/**
 * @zh
 * 通过UUID获得资源
 * 
 * @param uuid - UUID字符串
 */
export function getAssetByUUID<T extends cc.Asset>(uuid:string){
	return new Promise<T>((resolve)=>{
		cc.assetManager.loadAny([ uuid ], function (err, asset:T) {
			if(!err && asset){
				resolve(asset);
			}else{
				cc.warn(TAG, `not found asset : ${uuid}`);
				resolve(null);
			}
		});
	});
}

/**
 * @zh
 * 加载json文件
 * 
 * @param jgPath - JSON文件包路径
 * @param bundle - 包对象
 */
export function loadJson(jpPath:string, bundle:cc.AssetManager.Bundle = cc.resources){
	return new Promise<any>((resolve) => {
		bundle.load(jpPath, cc.JsonAsset, (err, data:cc.JsonAsset) => {
			if (!err && data) {
				resolve(data.json);
			} else {
				cc.warn(TAG, `not found Json : ${jpPath} in ${bundle.name}`);
				resolve(null);
			}
		});
	});
}

/**
 * @zh
 * 加载音频
 * 
 * @param apPath - 音频文件包路径
 * @param bundle - 包对象
 */
export function loadAudio(apPath:string, bundle:cc.AssetManager.Bundle = cc.resources) {
	return new Promise<cc.AudioClip>((resolve) => {
		bundle.load(apPath, cc.AudioClip, (err, data:cc.AudioClip) => {
			if (!err && data) {
				resolve(data);
			} else {
				cc.warn(TAG, `not found AudioClip : ${apPath} in ${bundle.name}`);
				resolve(null);
			}
		});
	});
}

/**
 * @zh
 * 加载预制件
 * 
 * @param ppPath 预制件包路径
 * @param bundle - 包对象
 */
export function loadPrefab(ppPath:string, bundle:cc.AssetManager.Bundle = cc.resources) {
	return new Promise<cc.Prefab>((resolve) => {
		bundle.load(ppPath, cc.Prefab, (err, data:cc.Prefab) => {
			if (!err && data) {
				resolve(data);
			} else {
				cc.warn(TAG, `not found Prefab : ${ppPath} in ${bundle.name}`);
				resolve(null);
			}
		});
	});
}

/**
 * @zh
 * 加载精灵帧
 * 
 * @param sfgPath 精灵帧包路径
 * @param bundle - 包对象
 */
export function loadSpriteFrame(sfpPath:string, bundle:cc.AssetManager.Bundle = cc.resources){
	return new Promise<cc.SpriteFrame>((resolve)=>{
		bundle.load(sfpPath, cc.SpriteFrame, (err, data:cc.SpriteFrame) => {
			if (!err && data) {
				resolve(data);
			}else{
				cc.warn(TAG, `not found SpriteFrame : ${sfpPath} in ${bundle.name}`);
				resolve(null);
			}
		});
	});
}

/**
 * @zh
 * 加载ttf字体
 * 
 * @param ttfgPath - 字体文件全局路径
 * @param bundle - 包对象
 */
export function loadTTFFont(ttfpPath:string, bundle:cc.AssetManager.Bundle = cc.resources) {
	return new Promise<cc.TTFFont>((resolve) => {
		bundle.load(ttfpPath, cc.TTFFont, (err, data) => {
			if (!err && data) {
				resolve(data);
			} else {
				cc.warn(TAG, `not found TTFFont : ${ttfpPath} in ${bundle.name}`);
				resolve(null);
			}
		});
	});
}

/**
 * @zh
 * 获得资源的url
 * 
 * @param agPath 资源包路径
 * @param bundle - 包对象
 */
export function getAssetUrl(apPath:string, bundle:cc.AssetManager.Bundle = cc.resources){
	return new Promise<string>((resolve)=>{
		bundle.load(apPath, cc.Asset, (err, data) => {
			if (!err && data) {
				resolve(data.nativeUrl);
			}else{
				cc.warn(TAG, `not found ResUrl : ${apPath} in ${bundle.name}`);
				resolve(null);
			}
		});
	});
}

}

}

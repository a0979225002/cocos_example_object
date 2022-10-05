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
	
const TAG = "lcc/pack/pack-loader.ts";

/**
 * @zh
 * 包加载器基类
 */
export class PackLoader {
	/**
	 * @zh
	 * 包的名称
	 */
	private _name:string = null;

	/**
	 * @zh
	 * 资源包对象
	 */
	private _bundle:cc.AssetManager.Bundle = null;

	/**
	 * @zh
	 * 构造包加载器
	 * 
	 * @param name - 包的名称
	 * @param bundle - 资源包对象
	 */
	constructor(name:string, bundle:cc.AssetManager.Bundle){
		this._name = name;
		this._bundle = bundle;
	}

	/**
	 * @zh
	 * 获得包名称
	 */
	public getName(){
		return this._name;
	}

	/**
	 * @zh
	 * 获得包资源
	 */
	public getBundle(){
		return this._bundle;
	}
	
	/**
	 * @zh
	 * 加载操作
	 */
	public async onLoad(){}
	
	/**
	 * @zh
	 * 销毁操作
	 */
    public async onDestroy(){}
    
    /**
     * @zh
     * 加载json文件
     * 
     * @param jpPath - json文件包路径
     */
    public loadJson(jpPath:string){
        return asset.loadJson(jpPath, this._bundle);
    }

    /**
     * @zh
     * 加载音频
     * 
     * @param apPath - 音频文件包路径
     */
    public loadAudio(apPath:string) {
        return asset.loadAudio(apPath, this._bundle);
    }

    /**
     * @zh
     * 加载预制件
     * 
     * @param ppPath 预制件包路径
     */
    public loadPrefab(ppPath:string) {
        return asset.loadPrefab(ppPath, this._bundle);
    }

    /**
     * @zh
     * 加载精灵帧
     * 
     * @param sfpPath 精灵帧包路径
     */
    public loadSpriteFrame(sfpPath:string){
        return asset.loadSpriteFrame(sfpPath, this._bundle);
    }

    /**
     * @zh
     * 加载ttf字体
     * 
     * @param ttfpPath - 字体ttf文件包路径
     */
    public loadTTFFont(ttfpPath:string) {
        return asset.loadTTFFont(ttfpPath, this._bundle);
    }

    /**
     * @zh
     * 获得资源的url
     * 
     * @param apPath 资源文件包路径
     */
    public getAssetUrl(apPath:string){
        return asset.getAssetUrl(apPath, this._bundle);
    }
}

}

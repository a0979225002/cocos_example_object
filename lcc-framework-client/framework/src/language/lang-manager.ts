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
/// <reference path="../base/variable.ts" />
/// <reference path="../utils/js.ts" />

namespace lcc {

const TAG = "lcc/language/lang-manager.ts";

const {ccclass, property} = cc._decorator;

/**
 * @zh
 * 索引路径
 */
export namespace INDEXPATH {
	
	/**
	 * @zh
	 * 字体
	 */
	export let FONT = "font";

	/**
	 * @zh
	 * 语言
	 */
	export let LANG = "lang";
};

/**
 * @zh
 * 默认语言
 */
export let DEFAULT_LANGUAGE = 'zh';

/**
 * @zh
 * 语言配置
 */
interface LangConfig {
	/**
	 * @zh
	 * 文本配置表
	 */
	texts:{[key:string]:{
		/**
		 * @zh
		 * 文本
		 */
		text:string;

		/**
		 * @zh
		 * 使用的字体
		 */
		fontName?:string;

		/**
		 * @zh
		 * 字体大小
		 */
		fontSize?:number;
	}};

	/**
	 * @zh
	 * 语言图片表
	 */
	images:{[key:string]:string};
}

/**
 * @zh
 * 多语言文本
 */
@ccclass("lcc.LangText")
export class LangText {
	/**
	 * @zh
	 * 使用富文本
	 */
	@property({
		tooltip : "使用富文本"
	})
	useRichText:boolean = false;

	/**
	 * @zh
	 * 关联标签
	 */
	@property({
		type : cc.Label,
		visible (){
			return this.useRichText == false;
		}
	})
	label:cc.Label = null!;

	/**
	 * @zh
	 * 关联富文本
	 */
	@property({
		type : cc.RichText,
		visible (){
			return this.useRichText == true;
		}
	})
	richText:cc.RichText = null!;

	/**
	 * @zh
	 * 关联键
	 */
	@property({
		tooltip : "关联键"
	})
	key:string = "";

	/**
	 * @zh
	 * 关联文本参数
	 */
	@property({
		tooltip : "关联文本参数"
	})
	args:string = "";
}

/**
 * @zh
 * 多语言图片
 */
@ccclass("lcc.LangImage")
export class LangImage {
	/**
	 * @zh
	 * 关联精灵
	 */
	@property(cc.Sprite)
	image:cc.Sprite = null!;

	/**
	 * @zh
	 * 关联键
	 */
	@property({
		tooltip : "关联键"
	})
	key:string = "";
}

/**
 * @zh
 * 语言管理器<br/>
 * 管理多语言与其字体
 */
class LangManager extends cc.EventTarget {
	
	/**
	 * @zh
	 * 字体缓冲
	 */
	private _fontBuff:{[key:string]:cc.TTFFont} = js.createMap();

	/**
	 * @zh
	 * 图片缓冲
	 */
	private _imageBuff:{[key:string]:cc.SpriteFrame} = js.createMap();

	/**
	 * @zh
	 * 语言配置表
	 */
	private _langConfig:LangConfig = { texts : {}, images : {} };

	/**
	 * @zh
	 * 当前语言
	 */
	private _nowLang:string = null!;

	/**
	 * @zh
	 * 多语言组映射表
	 */
	private _langGroupMap:{[key:string]:{texts:LangText[], images:LangImage[]}} = js.createMap();

	/**
	 * @zh
	 * 构造管理器
	 */
	constructor(){
		super();
		state.on('initialize', ()=>{
			doing.stateInitialize.in(()=>{
				this._fontBuff = js.createMap();
				this._imageBuff = js.createMap();
				this._langConfig = { texts : {}, images : {} };
				this._nowLang = null;
				this._langGroupMap = js.createMap();
				indexMgr.on("indexes_removed", this.reloadNowLanguage, this);
				indexMgr.on("indexes_loaded_" + INDEXPATH.LANG, this.onLangIndexesLoaded, this);
			});
		});
		state.on('release', ()=>{
			doing.stateRelease.in(()=>{
				this.clear();
				indexMgr.targetOff(this);
			});
		});
	}
	
	/**
	 * @internal
	 */
	private async reloadNowLanguage(){
		doing.indexLoad.addCount();
		this._langConfig = { texts : {}, images : {} };
		await this.loadPreposeLangs();
		await this.onLangIndexesLoaded(lcc.indexMgr.getIndex(INDEXPATH.LANG));
		this.removeInvalidBuff();
		doing.indexLoad.decCount();
	}

	/**
	 * @zh
	 * 当索引加载
	 * 
	 * @param ivalue 索引路径对象
	 */
	private async onLangIndexesLoaded(ivalue:Object){
		doing.indexLoad.addCount();
		this._nowLang = this._nowLang || DEFAULT_LANGUAGE;
		if(ivalue){
			let tfiles = ivalue[this._nowLang];
			if(tfiles){
				for (let tfile of tfiles){
					let table = await readConfigFile(tfile);
					if(!table){
						cc.error(TAG, `lang file ${tfile} read fail !!!`);
					}else{
						table = translateJSON(table, fs.dirname(tfile));
						this.loadTable(table, tfile);
					}
				}
			}
		}
		doing.indexLoad.decCount();
	}
	
	/**
	 * @zh
	 * 移除无效的缓冲
	 */
	public removeInvalidBuff(){
		// 字体
		let fontconfs = indexMgr.getIndex(INDEXPATH.FONT);
		for (let fname of Object.keys(this._fontBuff)){
			let font = this._fontBuff[fname];
			if(!fontconfs[fname] && font){
				font.decRef();
				delete this._fontBuff[fname];
			}
		}

		// 图片
		for (let ipath of Object.keys(this._imageBuff)){
			let image = this._imageBuff[ipath];
			let find = false;
			(()=>{
				for(let k in this._langConfig.images){
					let path = this._langConfig.images[k];
					if(ipath == path){
						find = true;
						return;
					}
				}
			})();
			if(!find){
				image.decRef();
				delete this._imageBuff[ipath];
			}
		}
	}
	
	/**
	 * @zh
	 * 合并表<br/>
	 * 合并规则与[[js.mergeMap]]一致
	 * 
	 * @param table - 新表对象
	 * @param tfile - 文件路径
	 */
	private loadTable(table:Object, tfile:string = "[unknown]"){
		js.mergeMap(this._langConfig, table, { tag : TAG, source : tfile });
		DEBUG.LANG && cc.log(TAG, `load lang table ${JSON.stringify(table)} from ${tfile}`);
	}

	/**
	 * @zh
	 * 加载前置配置
	 */
	public async loadPreposeLangs(){
		this._nowLang = this._nowLang || DEFAULT_LANGUAGE;
		let prelangs = await asset.loadJson("lcc-assets/prelangs", cc.resources);
		let langConfig = prelangs && prelangs[this._nowLang];
		if(langConfig){
			this.loadTable(translateJSON(langConfig), "asset://resources/lcc-assets/prelangs");
		}
	}
	
	/**
	 * @zh
	 * 设置并更新语言
	 * 
	 * @param lang - 语言名称
	 * @param deflang - 可选，默认语言
	 */
	public async setLanguage(lang:string){
		if(this._nowLang != lang){
			this._nowLang = lang;
			await this.reloadNowLanguage();
			await this.updateAllLangGroup();
			try{
				this.emit("lang_changed", lang);
			}catch(e){
				cc.error(TAG, `setLanguage Exception ${e}`);
			}
			await doing.langUpdate.untilZero();		// 直到更新完成
		}
	}

	/**
	 * @zh
	 * 获得当前语言
	 */
	public getLanguage(){
		return this._nowLang;
	}

	/**
	 * @zh
	 * 获得语言列表
	 */
	public getLanguageList(){
		return Object.keys(indexMgr.getIndex(INDEXPATH.LANG));
	}

	/**
	 * @zh
	 * 更新所有语言组
	 */
	private async updateAllLangGroup(){
		for (let group in this._langGroupMap){
			await this.updateLangGroup(group);
		}
	}

	/**
	 * @zh
	 * 更新指定语言组
	 * 
	 * @param group - 组名称
	 */
	private async updateLangGroup(group:string){
		if(this._nowLang){
			let groupconf = this._langGroupMap[group];
			if(groupconf){
				if(groupconf.texts){
					for (let tc of groupconf.texts){
						await this.updateText(tc.useRichText ? tc.richText : tc.label, tc.key, tc.args.split(","));
					}
				}
				if(groupconf.images){
					for (let ic of groupconf.images){
						await this.updateImage(ic.image, ic.key);
					}
				}
			}
		}
	}

	/**
	 * @zh
	 * 更新文本
	 * 
	 * @param target - 目标对象
	 * @param key - 关联文本key
	 * @param args - 文本参数
	 */
	public async updateText(target:cc.Label|cc.RichText, key:string, ...args:any[]){
		doing.langUpdate.addCount();
		let textConf = this._langConfig.texts[key];
		if(textConf){
			target.string = variable.parseString(textConf.text, args);
			if(textConf.fontSize){
				target.fontSize = textConf.fontSize;
			}
			if(textConf.fontName){
				let font = await this.getFont(textConf.fontName);
				if(font){
					target.font = font;
				}
			}
		}else{
			cc.error(TAG, `updateText lang:${this._nowLang} key:${key} not found!`);
		}
		doing.langUpdate.decCount();
	}

	/**
	 * @zh
	 * 获得字体
	 * 
	 * @param fname - 字体名称
	 */
	private async getFont(fname:string){
		let font = this._fontBuff[fname];
		if(!font){
			let path = indexMgr.getIndex(INDEXPATH.FONT + "/" + fname);
			font = await packMgr.loadTTFFont(path);
			if(font){
				font.addRef();
				this._fontBuff[fname] = font;
			}
		}
		return font;
	}

	/**
	 * @zh
	 * 更新图片
	 * 
	 * @param target - 目标对象
	 * @param key - 关联图片key
	 */
	public async updateImage(target:cc.Sprite, key:string){
		doing.langUpdate.addCount();
		let imgPath = this._langConfig.images[key];
		if(imgPath){
			let spframe = await this.getLangImage(imgPath);
			if(spframe){
				target.spriteFrame = spframe;
			}
		}else{
			cc.error(TAG, `updateImage lang:${this._nowLang} key:${key} not found!`);
		}
		doing.langUpdate.decCount();
	}

	/**
	 * @zh
	 * 获得语言图片
	 * 
	 * @param fpath - 语言图片路径
	 */
	private async getLangImage(fpath:string){
		let spframe = this._imageBuff[fpath];
		if(!spframe){
			spframe = await packMgr.loadSpriteFrame(fpath);
			if(spframe){
				spframe.addRef();
				this._imageBuff[fpath] = spframe;
			}
		}
		return spframe;
	}

	/**
	 * @zh
	 * 添加语言组<br/>
	 * 配套组件使用
	 * 
	 * @param group - 组名称
	 * @param texts - 文本组
	 * @param images - 图片组
	 */
	public async _addLangGroup(group:string, texts?:LangText[], images?:LangImage[]){
		if(this._langGroupMap[group]){
			cc.error(TAG, `lang group conflict ${group}!!!`);
		}else{
			this._langGroupMap[group] = {
				texts : texts,
				images : images,
			};
			await this.updateLangGroup(group);
		}
	}

	/**
	 * @zh
	 * 移除语言组<br/>
	 * 配套组件使用
	 * 
	 * @param group - 组名称
	 */
	public _removeLangGroup(group:string){
		delete this._langGroupMap[group];
	}

	/**
	 * @zh
	 * 增加语言更新中计数
	 */
	public addLangUpdating(){
		doing.langUpdate.addCount();
	}
	
	/**
	 * @zh
	 * 减少语言更新中计数
	 */
	public decLangUpdating(){
		doing.langUpdate.decCount();
	}
	
	/**
	 * @zh
	 * 获得当前语言文本
	 * 
	 * @param key - 关联key
	 * @param args - 参数数组
	 */
	public getText(key:string, ...args:any[]){
		let textConf = this._langConfig.texts[key];
		if (textConf){
			return variable.parseString(textConf.text, ...args);
		}
	}
	
	/**
	 * @zh
	 * 获得当前语言图片
	 * 
	 * @param key - 关联key
	 */
	public async getImage(key:string){
		let imgPath = this._langConfig.images[key];
		if (imgPath){
			return await this.getLangImage(imgPath);
		}
    }
    
    /**
	 * @zh
     * 获得图片的路径
	 * 
	 * @param key - 关联key
     */
    public async getImageUrl(key:string){
        let imgPath = this._langConfig.images[key];
		if(imgPath){
			return await packMgr.getAssetUrl(imgPath);
		}
    }
};

/**
 * @zh
 * 语言管理器对象
 */
export const langMgr = new LangManager();

variable.set('LANG', (key:string)=>{
	return langMgr.getText(key);
})

}

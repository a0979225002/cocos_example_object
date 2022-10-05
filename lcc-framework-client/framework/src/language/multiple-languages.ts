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

/// <reference path = "./lang-manager.ts" /> 

namespace lcc {

const TAG = "lcc/language/multiple-languages.ts";

const {ccclass, property, menu} = cc._decorator;

/**
 * @zh
 * 多语言绑定组件
 */
@ccclass("lcc.MultipleLanguages")
@menu("i18n:lcc-framework.menu-extension/MultipleLanguages")
export class MultipleLanguages extends cc.Component {
	
	@property({
		type : [LangText],
		tooltip : "多语言文本"
	})
	langTexts:LangText[] = [];
	
	@property({
		type : [LangImage],
		tooltip : "多语言图片"
	})
	langImages:LangImage[] = [];
	
	onLoad(){
		// @ts-ignore
		langMgr._addLangGroup(this._id, this.langTexts, this.langImages);
	}
	
	onDestroy(){
		// @ts-ignore
		langMgr._removeLangGroup(this._id);
	}
}

}

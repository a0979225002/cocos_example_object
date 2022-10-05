// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class LanguageUI extends lcc.UIBase {

    @property(cc.Node)
    frame:cc.Node = null;

    @property(cc.Node)
    languageItem:cc.Node = null;

    @property(cc.Node)
    listContent:cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    onUICreate(){
        this.frame.on(cc.Node.EventType.TOUCH_END, ()=>{
            this.closeSelf();
        });
    }

    onOpen(){
        this.updateLanguages();
        lcc.langMgr.on('lang_changed', this.updateLanguages, this);
    }

    onClose(){
        lcc.langMgr.targetOff(this);
    }

    updateLanguages(){
        let nowLang = cc.sys.localStorage.getItem('test.lang') || 'zh';
        let langNodes = this.listContent.children;
        let langs = lcc.langMgr.getLanguageList();
        for(let i = 0; i<Math.max(langNodes.length, langs.length);i++){
            let langNode = langNodes[i];
            let lang = langs[i]
            if(!langNode){
                langNode = cc.instantiate(this.languageItem);
                langNode.parent = this.listContent;
            }else if(!lang){
                langNode.active = false;
                continue;
            }
            let label = langNode.getComponentInChildren(cc.Label);
            langNode["_lang"] = langs[i];
            lcc.langMgr.updateText(label, `language-${langs[i]}`);
            label.node.color = nowLang == langs[i] ? cc.Color.RED : cc.Color.WHITE;
            langNode.active = true;
        }
    }

    async changeLanguage(event){
        let lang = event.target["_lang"];
        cc.sys.localStorage.setItem('test.lang', lang);
        await lcc.langMgr.setLanguage(lang);
    }

    // onLoad () {}

    // update (dt) {}
}

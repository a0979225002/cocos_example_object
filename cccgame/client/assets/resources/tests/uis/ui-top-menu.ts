// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class TopMenuUI extends lcc.UIBase {

    @property(cc.Button)
    btn_return:cc.Button = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    update (dt:number) {
       this.btn_return.node.active = lcc.uiMgr.getUIStack().length > 1;
    }
    
    async callback(event,data:string){
        if(data == 'return'){
            lcc.uiMgr.popUI();
        }else if(data == 'packmgr'){
            lcc.uiMgr.openUI('ui-package');
        }else if(data == 'mullang'){
            lcc.uiMgr.openUI('ui-language');
        }
    }
}

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class TestTableUI extends lcc.UIBase {

    @property(cc.Label)
    name101:cc.Label = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    // update (dt) {}

    onOpen(){
        cc.sys.localStorage.setItem('test.nowpage',this.getUIName());
        this.updateName();
        lcc.langMgr.on('lang_changed', this.updateName, this);
    }

    onClose(){
        lcc.langMgr.targetOff(this);
    }

    public updateName(){
        this.name101.string = lcc.langMgr.getText((lcc.TABLES.rolesmo as lcc$TABLES.rolesmo)[101].name);
    }
    
    async callback(event,data:string){
        if(data == 'map-object'){
            lcc.uiMgr.openUI('ui-message', JSON.stringify(lcc.TABLES.rolesmo, null, 4), 15);
        }else if(data == 'map-array'){
            lcc.uiMgr.openUI('ui-message', JSON.stringify(lcc.TABLES.rolesma, null, 4), 15);
        }else if(data == 'map-value'){
            lcc.uiMgr.openUI('ui-message', JSON.stringify(lcc.TABLES.rolesmv, null, 4), 15);
        }else if(data == 'list-object'){
            lcc.uiMgr.openUI('ui-message', JSON.stringify(lcc.TABLES.roleslo, null, 4), 15);
        }else if(data == 'list-array'){
            lcc.uiMgr.openUI('ui-message', JSON.stringify(lcc.TABLES.rolesla, null, 4), 15);
        }else if(data == 'list-value'){
            lcc.uiMgr.openUI('ui-message', JSON.stringify(lcc.TABLES.roleslv, null, 4), 15);
        }
    }
}

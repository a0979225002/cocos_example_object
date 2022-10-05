// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class TestListUI extends lcc.UIBase {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    // update (dt) {}

    onOpen(){
        let resumepage = cc.sys.localStorage.getItem('test.resumepage');
        if(resumepage && resumepage != this.getUIName()){
            cc.sys.localStorage.setItem('test.resumepage','');
            lcc.uiMgr.pushUI(resumepage);
        }else{
            cc.sys.localStorage.setItem('test.nowpage',this.getUIName());
        }
    }
    
    async openTest(event, data:string){
        await lcc.uiMgr.pushUI(data);
    }
}

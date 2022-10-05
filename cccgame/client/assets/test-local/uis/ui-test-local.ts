// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class TestLocalUI extends lcc.UIBase {

    @property(cc.Node)
    frame:cc.Node = null;

    @property(cc.Label)
    message:cc.Label = null;

    // LIFE-CYCLE CALLBACKS:

    onUICreate(){
        this.frame.on(cc.Node.EventType.TOUCH_END, ()=>{
            this.closeSelf();
        });
    }

    onOpen(){
        
    }

    // onLoad () {}

    // update (dt) {}
}

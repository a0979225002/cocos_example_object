// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class MessageUI extends lcc.UIBase {

    @property(cc.Node)
    frame:cc.Node = null;

    @property(cc.Label)
    message:cc.Label = null;

    private _dfSize:number = 0;

    // LIFE-CYCLE CALLBACKS:

    onUICreate(){
        this.frame.on(cc.Node.EventType.TOUCH_END, ()=>{
            this.closeSelf();
        });
        this._dfSize = this.message.fontSize;
    }

    onOpen(message:string, fSize:number){
        let fs = fSize || this._dfSize;
        this.message.fontSize = fs;
        this.message.lineHeight = fs + 2;
        this.message.string = message;
    }

    // onLoad () {}

    // update (dt) {}
}

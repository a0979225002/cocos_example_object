// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class TestNetworkUI extends lcc.UIBase {

    @property(cc.Label)
    connectState:cc.Label = null;

    @property(cc.Label)
    connectButton:cc.Label = null;
    
    @property(cc.Toggle)
    useProtobuf:cc.Toggle = null;

    /**
     * 连接线
     */
    private _connectLine:lcc.NetLine = null;

    private _sendContent:lcc.protocol.ProtoTest = {
        parent : 'test',
        from : 'client',
        version : 2,
        isClient : true,
        isServer : false,
        ref : { value : 2000 },
        enumList : [ lcc.protocol.EnumTest.ENUM1, lcc.protocol.EnumTest.ENUM3 ],
        enumMap : { ['1']:lcc.protocol.EnumTest.ENUM1, ['3']:lcc.protocol.EnumTest.ENUM3 }
    };
    
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    // update (dt) {}

    onOpen(){
        cc.sys.localStorage.setItem('test.nowpage',this.getUIName());
        this._connectLine = lcc.netClient.addClient('test-websocket', lcc.NetLineType.WEBSOCKET, { url:'ws://localhost:4569' });
        this._connectLine.on('onOpen', this.updateUI.bind(this));
        this._connectLine.on('onClose', this.updateUI.bind(this));
        this._connectLine.on('onError', this.updateUI.bind(this));
        this._connectLine.on(`protocol-${lcc.protocol.PROTOTEST}`, (data:lcc.protocol.ProtoTest)=>{
            lcc.uiMgr.openUI('ui-message', JSON.stringify(data, null, 4), 15);
        });
        this.updateUI();
        lcc.langMgr.on('lang_changed', this.updateUI, this);
    }

    onClose(){
        lcc.langMgr.targetOff(this);
        lcc.netClient.removeClient('test-websocket');
    }

    public updateUI(){
        if(this._connectLine.isValid()){
            this.connectState.string = lcc.langMgr.getText('test-testnetwork-connected');
            this.connectState.node.color = cc.Color.GREEN;
            this.connectButton.string = lcc.langMgr.getText('test-testnetwork-disconnect');
        }else{
            this.connectState.string = lcc.langMgr.getText('test-testnetwork-notconnected');
            this.connectState.node.color = cc.Color.RED;
            this.connectButton.string = lcc.langMgr.getText('test-testnetwork-connect');
        }
    }
    
    async callback(event,data:string){
        if(data == 'connectOrNot'){
            if(this._connectLine.isValid()){
                this._connectLine.close();
            }else{
                this._connectLine.open();
            }
        }else if(data == 'readSendContent'){
            lcc.uiMgr.openUI('ui-message', JSON.stringify(this._sendContent, null, 4), 20);
        }else if(data == 'testSendRecv'){
            if(this._connectLine.isValid()){
                this._connectLine.useProtoBuff(this.useProtobuf.isChecked);
                this._connectLine.writeProtocol<lcc.protocol.ProtoTest>(lcc.protocol.PROTOTEST, this._sendContent);
            }else{
                lcc.uiMgr.openUI('ui-message', '连接线未连接');
            }
        }
    }
}

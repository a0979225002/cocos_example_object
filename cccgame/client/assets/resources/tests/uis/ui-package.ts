// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class PackageUI extends lcc.UIBase {

    @property(cc.Node)
    frame:cc.Node = null;

    @property(cc.Label)
    localState:cc.Label = null;

    @property(cc.Label)
    remoteState:cc.Label = null;

    @property(cc.Label)
    localButtonText:cc.Label = null;

    @property(cc.Label)
    remoteButtonText:cc.Label = null;

    // LIFE-CYCLE CALLBACKS:

    onUICreate(){
        this.frame.on(cc.Node.EventType.TOUCH_END, ()=>{
            this.closeSelf();
        });
    }

    onOpen(){
        this.updateUI();
        lcc.packMgr.on('loaded', this.updateUI, this);
    }

    onClose(){
        lcc.packMgr.targetOff(this);
    }

    updateUI(){
        
        let localLoaded = cc.sys.localStorage.getItem('test.pack.local') == 'true';
        let remoteLoaded = cc.sys.localStorage.getItem('test.pack.remote') == 'true';
        this.localState.string = localLoaded ? lcc.langMgr.getText('test-package-loaded') : lcc.langMgr.getText('test-package-notloaded');
        this.localState.node.color = localLoaded ? cc.Color.GREEN : cc.Color.RED;
        this.localButtonText.string = localLoaded ? lcc.langMgr.getText('test-package-unload') : lcc.langMgr.getText('test-package-load');
        this.remoteState.string = remoteLoaded ? lcc.langMgr.getText('test-package-loaded') : lcc.langMgr.getText('test-package-notloaded');
        this.remoteState.node.color = remoteLoaded ? cc.Color.GREEN : cc.Color.RED;
        this.remoteButtonText.string = remoteLoaded ? lcc.langMgr.getText('test-package-unload') : lcc.langMgr.getText('test-package-load');
    }

    async callback(event, data){
        if(data == 'local'){
            if(cc.sys.localStorage.getItem('test.pack.local') == 'true'){
                cc.sys.localStorage.setItem('test.pack.local', 'false');
                //await lcc.packMgr.releasePack('resources')
                cc.sys.localStorage.setItem('test.resumepage', cc.sys.localStorage.getItem('test.nowpage'));
                await lcc.state.release();
                cc.game.restart();
            }else{
                cc.sys.localStorage.setItem('test.pack.local', 'true');
                await lcc.packMgr.loadPack('test-local');
            }
        }else if(data == 'remote'){
            if(cc.sys.localStorage.getItem('test.pack.remote') == 'true'){
                cc.sys.localStorage.setItem('test.pack.remote', 'false');
                cc.sys.localStorage.setItem('test.resumepage', cc.sys.localStorage.getItem('test.nowpage'));
                await lcc.state.release();
                cc.game.restart();
            }else{
                cc.sys.localStorage.setItem('test.pack.remote', 'true');
                await lcc.packMgr.loadPack('http://localhost:4568/test-remote');
            }
        }
    }

    // onLoad () {}

    // update (dt) {}
}

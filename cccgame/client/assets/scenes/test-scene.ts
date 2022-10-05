// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, executeInEditMode, property} = cc._decorator;

@ccclass
export default class TestScene extends lcc.SceneBase {

    // onLoad () {}

    async start(){
        if(!lcc.state.initialized){
            await lcc.state.initialize();
            let lang = cc.sys.localStorage.getItem('test.lang') || 'zh';
            await lcc.langMgr.setLanguage(lang);
            await lcc.packMgr.loadPack('resources');
            if(cc.sys.localStorage.getItem('test.pack.local') == 'true'){
                await lcc.packMgr.loadPack('test-local');
            }
            if(cc.sys.localStorage.getItem('test.pack.remote') == 'true'){
                await lcc.packMgr.loadPack('http://localhost:4568/test-remote');
            }
        }
        lcc.uiMgr.openUI('ui-top-menu');
        lcc.uiMgr.pushUI('ui-test-list');
    }

    // update (dt) {}
}

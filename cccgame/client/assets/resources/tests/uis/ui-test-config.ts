// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class TestConfigUI extends lcc.UIBase {

    @property(cc.EditBox)
    editVar:cc.EditBox = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    // update (dt) {}

    onOpen(){
        let testvar = cc.sys.localStorage.getItem('test.config.var.test');
        if(!testvar){
            testvar = 'config';
            cc.sys.localStorage.setItem('test.config.var.test', testvar);
        }
        this.editVar.string = testvar;
        cc.sys.localStorage.setItem('test.nowpage',this.getUIName());
    }
    
    async callback(event,data:string){
        if(data == 'read-local1'){
            lcc.uiMgr.openUI('ui-message', JSON.stringify(await lcc.asset.loadJson('tests/config/test1', cc.resources), null, 4));
        }else if(data == 'read-local2'){
            lcc.uiMgr.openUI('ui-message', JSON.stringify(await lcc.asset.loadJson('tests/config/test2', cc.resources), null, 4));
        }else if(data == 'read-remote'){
            lcc.uiMgr.openUI('ui-message', JSON.stringify(await lcc.http.getJson('http://localhost:4567/config'), null, 4));
        }else if(data == 'modify-var'){
            cc.sys.localStorage.setItem('test.config.var.test', this.editVar.string);
            lcc.uiMgr.openUI('ui-message', lcc.langMgr.getText('test-testconfig-modifysuccess'));
        }else if(data == 'readconfig-local1'){
            lcc.variable.set('test', cc.sys.localStorage.getItem('test.config.var.test'));
            lcc.configMgr.removeAllConfigs();
            await lcc.configMgr.loadConfigFile('asset://resources/tests/config/test1');
            lcc.uiMgr.openUI('ui-message', JSON.stringify(lcc.CONFIGS['test1'], null, 4));
        }else if(data == 'readconfig-local2'){
            lcc.variable.set('test', cc.sys.localStorage.getItem('test.config.var.test'));
            lcc.configMgr.removeAllConfigs();
            await lcc.configMgr.loadConfigFile('asset://resources/tests/config/test2');
            lcc.uiMgr.openUI('ui-message', JSON.stringify(lcc.CONFIGS['test2'], null, 4));
        }
    }
}

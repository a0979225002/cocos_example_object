import LangMng from "../../manager/LangMng";
import UIBase from "./UIBase";
import { ViewZorder } from "../../data/const/ViewZorder";

const { ccclass } = cc._decorator;

@ccclass
export default class UIInfo extends UIBase {

    node_main: cc.Node;

    label_title_1: cc.Label;
    label_con_txt_1: cc.Label;
    label_title_2: cc.Label;
    label_con_txt_2: cc.Label;

    btn_close: cc.Node;

    onUILoad() {

        this.node_main = this.node.getChildByName("main");
        this.btn_close = this.node_main.getChildByName("btn_close");

        let con1= this.node_main.getChildByName("con_1")
        this.label_title_1 = con1.getChildByName("title").getComponent(cc.Label);
        this.label_con_txt_1 = con1.getChildByName("content").getComponent(cc.Label);

        let con2= this.node_main.getChildByName("con_2")
        this.label_title_2 = con2.getChildByName("title").getComponent(cc.Label);
        this.label_con_txt_2 = con1.getChildByName("content").getComponent(cc.Label);

        this.node.zIndex = ViewZorder.UI;

        this.setTxt();
        this.hide(false);

    }

    onShow() {
        this.onRegisterEvent(this.btn_close, this.onBtnCloseClick, this);
    }

    show(): void {

        if (this.node.active) {
            return;
        }

        this.node.active = true;

        this.fadeIn();

    }

    hide(isAni: boolean = true) {

        if (!this.node.active) {
            return;
        }

        if (isAni) {
            this.fadeOut();
            return;
        }

        this.node.active = false;

    }

    setTxt(): void {
        this.label_title_1.string = LangMng.getTxt("I_001");
        this.label_con_txt_1.string = LangMng.getTxt("I_002");
        this.label_title_2.string = LangMng.getTxt("I_003");
        this.label_con_txt_2.string = LangMng.getTxt("I_004");
    }

    fadeIn(): void {
        this.node.opacity = 0;
        this.node.stopAllActions();
        this.node.runAction(cc.fadeIn(.1).easing(cc.easeSineOut()));
    }


    fadeOut(): void {
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(
            cc.fadeOut(.1),
            cc.callFunc(() => {
                this.node.active = false;
            })
        ));
    }

    onBtnCloseClick(): void {
        this.hide();
    }

}

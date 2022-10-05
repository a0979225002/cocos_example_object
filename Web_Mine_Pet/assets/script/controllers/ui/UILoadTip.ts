
import UIBase from "./UIBase";
import {ViewZorder} from "../../data/const/ViewZorder";


const { ccclass } = cc._decorator;

@ccclass
export default class UILoadTip extends UIBase {

    icon: cc.Node;

    onUILoad() {
        this.icon = this.node.getChildByName("icon");
        this.node.zIndex = ViewZorder.Loading;
        this.hide();
    }

    show(): void {
        this.node.active = true;
        this.icon.opacity = 0;
        this.icon.runAction(cc.sequence(
           cc.delayTime(.5),
           cc.fadeIn(.2),
        ));
    }

    hide() {
        this.icon.stopAllActions();
        this.node.active = false;
    }

}

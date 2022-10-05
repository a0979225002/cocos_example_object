import UIBase from "./UIBase";

const { ccclass } = cc._decorator;

@ccclass
export default class UILoading extends UIBase {

    protected static prefabUrl = "loading_full_plane";
    protected static className = "UILoading";


    onInit() {
        cc.game.addPersistRootNode(this.node);
    }

    onUILoad() {

        this.resize();
    }

    show(): void {

        if (this.node.active) {
            return;
        }

        this.node.active = true;
        this.setTxt();
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


    fadeIn(): void {
        this.node.opacity = 0;
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(
            cc.fadeIn(.1),
            cc.callFunc(() => {
            })
        ));
    }


    fadeOut(): void {
        this.node.runAction(cc.sequence(
            cc.delayTime(.2),
            cc.fadeOut(.16),
            cc.callFunc(() => {
                this.node.active = false;
            })
        ));
    }


    setTxt(): void {

    }

    resize(): void {
        const pos = this.getCanvas();
        this.node.setPosition(pos.x, pos.y);
    }

}

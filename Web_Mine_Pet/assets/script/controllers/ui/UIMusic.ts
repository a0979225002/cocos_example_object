import UIBase from "./UIBase";
import DataUIMusic from "../../data/scene/DataUIMusic";
import LangMng from "../../manager/LangMng";
import MusicMng from "../../manager/MusicMng";

enum BtnType {
    Music,
    Effect,
}

const {ccclass} = cc._decorator;

@ccclass
export default class UIMusic extends UIBase {

    ui: DataUIMusic = null;

    protected static prefabUrl = "music_panel";
    protected static className = "UIMusic";

    private _isLangSet: boolean = false;
    private _closeX: number = -33;
    private _openX: number = 33;
    private _closeColor: cc.Color = new cc.Color(190, 190, 190, 255);
    private _openColor: cc.Color = new cc.Color(0, 133, 255, 255);

    onInit(): void {
        cc.game.addPersistRootNode(this.node);
        this.resize();
    }

    onUILoad(): void {

        this.ui = this.node.addComponent(DataUIMusic);

        this.updateBtnDisplay(BtnType.Music);
        this.updateBtnDisplay(BtnType.Effect);

        this.hide(false);

    }

    onShow(): void {

        this.setLang();

        this.onRegisterEvent(this.ui.btn_close, this.onBtnCloseClick, this);
        this.onRegisterEvent(this.ui.btn_music, this.onBtnMusicClick, this);
        this.onRegisterEvent(this.ui.btn_effect, this.onBtnEffectClick, this);

    }

    onHide(): void {


        this.unRegisterEvent(this.ui.btn_music, this.onBtnCloseClick, this);
        this.unRegisterEvent(this.ui.btn_close, this.onBtnMusicClick, this);
        this.unRegisterEvent(this.ui.btn_effect, this.onBtnEffectClick, this);

    }

    onBtnCloseClick(): void {
        this.hide();
    }

    onBtnMusicClick(): void {
        MusicMng.switchMusic();
        this.updateBtnDisplay(BtnType.Music);
    }

    onBtnEffectClick(): void {
        MusicMng.switchEffect();
        this.updateBtnDisplay(BtnType.Effect);
    }

    updateBtnDisplay(type: BtnType): void {

        let state = type == 0 ? MusicMng.getMusicState() : MusicMng.getEffectState();
        let circleNode = type == 0 ? this.ui.node_musicCircle : this.ui.node_effectCircle;
        let bgNode = type == 0 ? this.ui.node_musicBg : this.ui.node_effectBg;
        let targetPosX = state ? this._openX : this._closeX;
        let targetColor = state ? this._openColor : this._closeColor;

        circleNode.stopAllActions();
        circleNode.runAction(
            cc.moveTo(.2, targetPosX, 0).easing(cc.easeSineOut()),
        );

        bgNode.stopAllActions();
        bgNode.runAction(
            cc.tintTo(.2, targetColor.getR(), targetColor.getG(), targetColor.getB())
        );
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

    fadeIn(): void {
        this.ui.node_main.setPosition(0, 2000);
        this.ui.node_main.stopAllActions();
        this.ui.node_main.runAction(cc.sequence(
            cc.moveTo(.3, 0, 0).easing(cc.easeQuarticActionInOut()),
            cc.callFunc(() => {

            })
        ));
    }

    fadeOut(): void {
        this.ui.node_main.stopAllActions();
        this.ui.node_main.runAction(cc.sequence(cc.moveTo(.2, 0, 2000).easing(cc.easeSineOut()),
            cc.callFunc(() => {
                this.node.active = false;
            })
        ));
    }

    setLang(): void {

        if (this._isLangSet) {
            return;
        }

        this.ui.label_music.string = LangMng.getTxt("MB_008");
        this.ui.label_effect.string = LangMng.getTxt("MB_009");
        this.ui.label_close.string = LangMng.getTxt("P_1003");

        this._isLangSet = true;

    }

    resize(): void {
        const pos = this.getCanvas();
        this.node.setPosition(pos.x, pos.y);
    }

}
import UIBase from "./UIBase";
import { Log } from "../../common/Log";
import DataUIMessage from "../../data/scene/DataUIMessage";
import LangMng from "../../manager/LangMng";

const { ccclass } = cc._decorator;

enum PopType {
    All,
    Confirm,
    None
}

export interface DialogParams {
    type: number,
    content: string,
    confirmCb?: Function,
    cancelCb?: Function
    canCover?: boolean,
    autoClose?: boolean,
}

@ccclass
export default class UIMessage extends UIBase {

    ui: DataUIMessage = null;

    protected static prefabUrl = "message_panel";
    protected static className = "UIMessage";

    private _isLangSet: boolean = false;
    private _type: number = PopType.None;
    private _content: string;
    private _confirmCb: Function;
    private _cancelCb: Function;
    private _canCover: boolean = true;
    private _autoClose: boolean = false;
    private _timer: number = null;
    private _timerTime: number = 3000;


    onInit(params): void {
        cc.game.addPersistRootNode(this.node);
    }

    onUILoad(): void {
        this.ui = this.node.addComponent(DataUIMessage);
        this.resize();
        this.hide(false);
    }

    onShow(): void {
        this.onRegisterEvent(this.ui.btn_confirm, this.onConfirmClick, this);
        this.onRegisterEvent(this.ui.btn_cancel, this.onCancelClick, this);
        this.onRegisterEvent(this.ui.node_backBg, this.onBackBgClick, this);
        this.setLang();
    }

    onHide(): void {
        this.unRegisterEvent(this.ui.btn_cancel, this.onConfirmClick, this);
        this.unRegisterEvent(this.ui.btn_cancel, this.onCancelClick, this);
        this.unRegisterEvent(this.ui.node_backBg, this.onBackBgClick, this);
        this._canCover = true;
    }

    onConfirmClick(): void {

        if (this._confirmCb) {
            this._confirmCb();
        }

        this.hide();

    }

    onCancelClick(): void {

        if (this._cancelCb) {
            this._cancelCb();
        }

        this.hide();

    }

    onBackBgClick(): void {
        this.hide();
    }

    show(params): void {

        if (params == undefined) {
            return;
        }

        let data = params as DialogParams;
        this._type = data.type;
        this._content = data.content;
        this._confirmCb = data.confirmCb;
        this._cancelCb = data.cancelCb;

        if (data.canCover != undefined) {
            this._canCover = data.canCover;
        }

        if(!this._canCover && this.node.active) {
            return;
        }

        if (data.autoClose != undefined) {
            this._autoClose = data.autoClose;
        }

        if (this._autoClose) {
            this._timer = setTimeout(() => {
                this.hide();
            }, this._timerTime);
        }

        this.node.active = true;
        this.setIntroTxt();
        this.setBtnsDisplay();
        this.fadeIn();

    }

    hide(isAni: boolean = true) {

        clearTimeout(this._timer);

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
        this.ui.node_main.opacity = 0;
        this.ui.node_main.scale = 1.3;
        this.ui.node_main.stopAllActions();
        this.ui.node_main.runAction(cc.sequence(cc.spawn(
            cc.fadeIn(.15),
            cc.scaleTo(.2, 1).easing(cc.easeBackOut())
            ),
            cc.callFunc(() => {

            })
        ));
    }


    fadeOut(): void {
        this.ui.node_main.stopAllActions();
        this.ui.node_main.runAction(cc.sequence(
            cc.fadeOut(.1),
            cc.callFunc(() => {
                this.node.active = false;
            })
        ));
    }

    setBtnsDisplay(): void {

        switch (this._type) {
            case PopType.Confirm:
                this.setBtnCancelActive(false);
                this.setBtnConfirmActive(true);
                break;
            case  PopType.None:
                this.setBtnCancelActive(false);
                this.setBtnConfirmActive(false);
                break;
            default:
                this.setBtnCancelActive(true);
                this.setBtnConfirmActive(true);
        }

    }

    setBtnConfirmActive(state: boolean): void {
        this.ui.btn_confirm.active = state;
    }

    setBtnCancelActive(state: boolean): void {
        this.ui.btn_cancel.active = state;
    }

    setIntroTxt(): void {
        this.ui.label_msg_txt.string = this._content;
    }

    setLang(): void {

        if (this._isLangSet) {
            return;
        }

        this.ui.label_confirm.string = LangMng.getTxt("P_1001");
        this.ui.label_cancel.string = LangMng.getTxt("P_1002");

        this._isLangSet = true;

    }

    resize(): void {
        const pos = this.getCanvas();
        this.node.setPosition(pos.x, pos.y);
    }

}
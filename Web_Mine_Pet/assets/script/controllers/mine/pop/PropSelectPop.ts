import LangMng from "../../../manager/LangMng";
import UIBase from "../../ui/UIBase";
import { ViewZorder } from "../../../data/const/ViewZorder";

class CtrlBtn {

    id: number = -1;
    node: cc.Node;

    node_normal: cc.Node;
    node_active: cc.Node;

    sprite_normal_icon: cc.Sprite;
    sprite_active_icon: cc.Sprite;

    label_txt: cc.Label;

    clickCallBack = null;

    canClick: boolean = true;

    constructor(node: cc.Node, id: number, config?) {

        this.node = node;
        this.id = id;

        if (config && config.clickCallBack) {
            this.clickCallBack = config.clickCallBack;
        }

        this.node_normal = this.node.getChildByName("normal");
        this.node_active = this.node.getChildByName("active");
        this.label_txt = this.node.getChildByName("txt").getComponent(cc.Label);

        if (config && config.iconNormal) {
            this.sprite_normal_icon = this.node_normal.getChildByName("icon").getComponent(cc.Sprite);
            this.sprite_normal_icon.spriteFrame = config.iconNormal;
        }

        if (config && config.iconActive) {
            this.sprite_active_icon = this.node_active.getChildByName("icon").getComponent(cc.Sprite);
            this.sprite_active_icon.spriteFrame = config.iconActive;
        }

        this.init();

    }

    init(): void {
        this.setPieceNum("");
    }

    show(): void {
        this.node_normal.active = false;
        this.node_active.active = true;
    }

    hide(): void {
        this.node_normal.active = true;
        this.node_active.active = false;
    }

    setPieceNum(str): void {
        this.label_txt.string = str;
    }

    clickBindOn(): void {
        this.node.on("touchend", this.onClick, this);
    }

    clickBindOff(): void {
        this.node.off("touchend", this.onClick, this);
    }

    onClick(): void {
        if (this.clickCallBack && this.canClick) {
            this.clickCallBack(this.id);
        }
    }

    remove(): void {

        let label = this.label_txt;
        label.string = LangMng.getTxt("T_114");
        label.node.setPosition(0, 0);
        label.node.color = new cc.Color(170, 170, 170);
        label.fontSize = 30;

        this.sprite_normal_icon.node.active = false;
        this.sprite_active_icon.node.active = false;
        this.canClick = false;

    }

    updateData(data): void {

        let info = data.info;

        if (info) {
            this.setPieceNum(`${ info.quantity }/${ info.require }`);
        }

        this.canClick = true;

    }

}

export default class PropSelectPop extends UIBase {

    node_main: cc.Node;

    node_view_holder: cc.Node;
    node_view_con: cc.Node;
    no_txt: cc.Label;

    node_btns_holder: cc.Node;

    btn_close: cc.Node;

    currentIndex: number = -1;
    ctrlBtns: CtrlBtn[] = [];

    mineID: number = -1;

    langTxtData = {
        noDisplay: "",
    };

    btnIconImg = null;

    onUILoad(): void {

        this.node_main = this.node.getChildByName("main");

        this.node_view_holder = this.node_main.getChildByName("view_holder");
        this.node_view_con = this.node_view_holder.getChildByName("con");
        this.no_txt = this.node_view_holder.getChildByName("no_txt").getComponent(cc.Label);

        this.node_btns_holder = this.node_main.getChildByName("btns_holder");

        this.btn_close = this.node_main.getChildByName("btn_close");

        this.viewInit();
        this.hide();

    }

    show(msg): void {

        this.node.active = true;
        this.mineID = msg.petID;

        this.btnsInfoUpdate();
        this.change(this.getCurrentSelectID(this.mineID));

        this.onRegisterEvent(this.btn_close, this.onBtnClose, this);

    }

    hide(): void {
        this.node.active = false;
        this.unRegisterEvent(this.btn_close, this.onBtnClose, this);

    }

    onBtnClose(): void {

        this.hide();

    }

    change(id): void {

        if (this.currentIndex >= 0) {
            this.ctrlBtns[this.currentIndex].hide();
        }

        this.currentIndex = id;

        this.ctrlBtns[id].show();

    }

    viewInit(): void {

        this.setOrder();
        this.setNoUseTxt();
        this.previewHide();
        this.btnsCreate();

    }

    previewShow(): void {
        this.node_view_con.active = true;
    }

    previewHide(): void {
        this.node_view_con.active = false;
    }

    noUseShow(): void {
        this.no_txt.node.active = true;
    }

    noUseHide(): void {
        this.no_txt.node.active = false;
    }

    btnsCreate(): void {

        for (let i = 0; i < 8; i++) {

            let btnNode = this.node_btns_holder.children[i];

            let ctrlBtn = new CtrlBtn(btnNode, i, {
                iconNormal: (() => {
                    return this.btnIconImg && this.btnIconImg.n ? this.btnIconImg.n[i]: null;
                })(),
                iconActive: (() => {
                    return this.btnIconImg && this.btnIconImg.a ? this.btnIconImg.a[i]: null;
                })(),
                clickCallBack: this.btnOnClick.bind(this),
            });

            this.ctrlBtns.push(ctrlBtn);

        }

    }

    btnsInfoUpdate(): void {

        let data = this.getListData();

        for (let i = 1; i < this.ctrlBtns.length; i++) {

            if (data[i - 1]) {
                this.ctrlBtns[i].updateData(data[i - 1]);
            } else {
                this.ctrlBtns[i].remove();
            }

        }

    }

    btnsClickOn(): void {
        this.ctrlBtns.forEach((btn) => {
            btn.clickBindOn();
        });
    }

    btnsClickOff(): void {
        this.ctrlBtns.forEach((btn) => {
            btn.clickBindOff();
        });
    }

    btnOnClick(id: number): void {

        if (this.currentIndex == id) {
            return;
        }

        this.change(id);

    }

    setOrder(): void {
        this.node.zIndex = ViewZorder.UI;
    }

    setNoUseTxt(): void {
        this.no_txt.string = this.langTxtData ? this.langTxtData.noDisplay : "";
    }

    getListData() {
        return [];
    }

    getPieceMaxNum() {
        return 0;
    }

    getCurrentSelectID(id) {
        return null;
    }

}
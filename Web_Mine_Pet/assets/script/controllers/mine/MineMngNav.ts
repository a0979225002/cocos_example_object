import EventMng from "../../manager/EventMng";
import { MainEvent } from "../../data/const/EventConst";
import UIBase from "../ui/UIBase";

const { ccclass } = cc._decorator;

@ccclass
export default class MineMngNav extends UIBase {

    navBtns: Btn[] = [];
    preIndex: number = 0;
    currentIndex: number = 0;

    onUILoad(): void {
        this.btnsCreate();
    }

    onShow(): void {
        this.btnsBindOn();
    }

    onHide(): void {
        this.btnBindOff();
    }

    btnsCreate(): void {
        for (let i = 0; i < this.node.children.length; i++) {
            let btn = this.node.children[i];
            this.navBtns[i] = new Btn(btn, i);
        }
    }

    btnsBindOn(): void {
        this.navBtns.forEach((btn) => {
            btn.eventBindOn();
        });
    }

    btnBindOff(): void {
        this.navBtns.forEach((btn) => {
            btn.eventBindOff();
        });
    }

    btnSwitch(id: number): void {
        this.preIndex = this.currentIndex;
        this.currentIndex = id;
        this.navBtns[this.preIndex].updateState(false);
        this.navBtns[this.currentIndex].updateState(true);
    }

}

class Btn {

    node: cc.Node;
    node_txt: cc.Node;
    node_activeBg: cc.Node;
    color_black: cc.Color = new cc.Color(0, 0, 0, 255);
    color_white: cc.Color = new cc.Color(255, 255, 255, 255);

    protected _id: number = 0;

    constructor(node: cc.Node, id: number) {
        this.node = node;
        this._id = id;
        this.node_activeBg = this.node.getChildByName("bg_active");
        this.node_txt = this.node.getChildByName("txt");
    }

    click(): void {
        EventMng.emit(MainEvent.MINE_MNG_PAGE_SWITCH, this.id);
    }

    eventBindOn(): void {
        this.node.on("touchend", this.click, this);
    }

    eventBindOff(): void {
        this.node.off("touchend", this.click, this);
    }

    updateState(state: boolean): void {
        this.activeBgShow(state);
        this.node_txt.color = state ? this.color_black : this.color_white;
    }

    activeBgShow(state: boolean): void {

        this.node_activeBg.active = state;

        if (state) {
            this.node_activeBg.opacity = 0;
            this.node_activeBg.stopAllActions();
            this.node_activeBg.runAction(cc.fadeIn(.15));
        }

    }

    set id(value: number) {
        this._id = value;
    }

    get id(): number {
        return this._id;
    }

}
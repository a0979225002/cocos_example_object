import EventMng from "../../manager/EventMng";
import LangMng from "../../manager/LangMng";
import UIBase from "../ui/UIBase";
import { ActionTransition } from "../../common/ActionTransition";
import { MainEvent } from "../../data/const/EventConst";
import DataMineCollect from "../../data/scene/DataMineCollect";
import CollectGeneral from "./collect/CollectGeneral";

const { ccclass } = cc._decorator;

@ccclass
export default class MineCollect extends UIBase {

    ui: DataMineCollect;
    collectGeneral: CollectGeneral;
    pages: any[] = [];
    currentPageIndex: number = 0;

    onUILoad(): void {
        this.ui = this.node.addComponent(DataMineCollect);
        this.collectGeneral = this.ui.node_con_1.addComponent(CollectGeneral);
        this.viewInit();
    }

    onShow(): void {
        this.onRegisterEvent(this.ui.btn_home, this.onBtnHomeClick, this);
        this.onRegisterEvent(this.ui.btn_vip, this.onBtnVipClick, this);
    }

    onHide() {
        this.unRegisterEvent(this.ui.btn_home, this.onBtnHomeClick, this);
        this.unRegisterEvent(this.ui.btn_vip, this.onBtnVipClick, this);
    }
    viewInit(): void {
        this.pages.push(this.collectGeneral);
        this.node.active = false;
    }

    show(aniState: boolean = true): void {
        this.pages[this.currentPageIndex].viewReset();
        ActionTransition.pageFadeIn(this.node, aniState, () => {
            this.pages[this.currentPageIndex].mineAniPlay();
        });
    }

    hide(aniState: boolean = true): void {
        ActionTransition.pageFadeOut(this.node, aniState);
    }


    onBtnHomeClick(): void {
        EventMng.emit(MainEvent.ENTER_MINE_MNG);
    }

    onBtnVipClick(): void {
        EventMng.emit(MainEvent.MESSAGE_SHOW, {
            type: 2,
            content: LangMng.getTxt("S_9001"),
            autoClose: true,
        });
    }

}
import EventMng from "../../manager/EventMng";
import LangMng from "../../manager/LangMng";
import { ActionTransition } from "../../common/ActionTransition";
import { MainEvent } from "../../data/const/EventConst";
import UIBase from "../ui/UIBase";
import DataMineMng from "../../data/scene/DataMineMng";
import MineMngNav from "./MineMngNav";
import MineMngCon from "./MineMngCon";

const { ccclass } = cc._decorator;

@ccclass
export default class MineMng extends UIBase {

    ui: DataMineMng = null;
    tabNav: MineMngNav;
    con: MineMngCon;

    private _currentIndex: number = 0;

    onUILoad(): void {
        this.ui = this.node.addComponent(DataMineMng);
        this.tabNav = this.ui.tab_nav_holder.addComponent(MineMngNav);
        this.con = this.ui.con_holder.addComponent(MineMngCon);
        this.viewInit();
    }

    onShow() {
        this.initEvent(MainEvent.MINE_MNG_PAGE_SWITCH, this.onPageSwitch);
    }

    viewInit(): void {
        let mineListState = this.con.pages[0].slider.getSliderState();
        if (mineListState == 0 ) {
            this.tabNav.navBtns[2].node.active = false;
        }
    }


    show(aniState: boolean = true): void {
        ActionTransition.pageFadeIn(this.node, aniState);
    }


    hide(aniState: boolean = true): void {
        ActionTransition.pageFadeOut(this.node, aniState);
    }


    onPageSwitch(id: number): void {


        if (this._currentIndex == id) {
            return;
        }

        let hasPage = this.getHasPage(id);
        if (!hasPage) {
            EventMng.emit(MainEvent.MESSAGE_SHOW, {
                type: 2,
                content: LangMng.getTxt("S_9001"),
                autoClose: true,
            });
            return;
        }

        this.currentIndex = id;
        this.tabNav.btnSwitch(this.currentIndex);
        this.con.pageSwitch(this.currentIndex);

    }

    getHasPage(id): boolean {
        return !!this.con.pages[id];
    }

    set currentIndex(value: number) {
        this._currentIndex = value;
    }

    get currentIndex(): number {
        return this._currentIndex;
    }

}
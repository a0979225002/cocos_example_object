import GameController from "../../GameController";
import GameCenter from "../../data/GameCenter";
import EventMng from "../../manager/EventMng";
import LangMng from "../../manager/LangMng";
import { MainEvent } from "../../data/const/EventConst";
import { ViewZorder } from "../../data/const/ViewZorder";
import DataGame from "../../data/scene/DataGame";
import MineMng from "../mine/MineMng";
import MineCollect from "../mine/MineCollect";
import UIBase from "../ui/UIBase";
import UIHelp from "../ui/UIHelp";
import UIInfo from "../ui/UIInfo";
import UILoading from "../ui/UILoading";
import UILoadTip from "../ui/UILoadTip";
import UIUpgradePanel from "../ui/UIUpgradePanel";
import UISkinPop from "../ui/UISkinPop";

const { ccclass } = cc._decorator;

@ccclass
export default class MainGame extends UIBase {
    ui: DataGame = null;
    mineMng: MineMng;
    mineCollect: MineCollect;
    loadTip: UILoadTip;
    upgradePanel: UIUpgradePanel;
    infoPop: UIInfo;
    skinPop: UISkinPop;
    private pages: any[] = [];
    private _prePageIndex: number = -1;
    private _currentPageIndex: number = 0;

    onUILoad(): void {
        this.ui = this.node.addComponent(DataGame);
        this.mineMng = this.ui.mine_mng_holder.addComponent(MineMng);
        this.mineCollect = this.ui.mine_holder.addComponent(MineCollect);
        this.upgradePanel = this.ui.upgrade_holder.addComponent(UIUpgradePanel);
        this.infoPop = this.ui.info_pop_holder.addComponent(UIInfo);
        this.loadTip = this.ui.load_tip.addComponent(UILoadTip);
        this.skinPop = this.ui.skin_pop_holder.addComponent(UISkinPop);
        this.viewInit();
    }

    onShow(): void {
        this.initEvent(MainEvent.ENTER_MINE_COLLECT, this.onEnterMineCollect);
        this.initEvent(MainEvent.ENTER_MINE_MNG, this.onEnterMineMng);
        this.initEvent(MainEvent.MESSAGE_SHOW, this.onMessageShow);
        this.initEvent(MainEvent.PET_UPGRADE_REQ, this.onPetUpgradeReq);
        this.initEvent(MainEvent.PET_UPGRADE, this.onPetUpgrade);
        this.initEvent(MainEvent.OPEN_SKIN_POP_REQ, this.onOpenSkinPopReq);
        this.initEvent(MainEvent.OPEN_SKIN_POP, this.onOpenSkinPop);
        this.initEvent(MainEvent.MINE_CHANGE_REQ, this.onMineChangeReq)
        this.onRegisterEvent(this.ui.btn_close, this.onBtnCloseClick, this);
        this.onRegisterEvent(this.ui.btn_info, this.onBtnInfoClick, this);
        UIHelp.HideUI(UILoading);
        this.switchPage(false);
    }

    viewInit(): void {
        this.btnsSetZIndex();
        this.createPages();
        this.setVecStr();
    }

    createPages(): void {
        this.pages.push(this.mineMng);
        this.pages.push(this.mineCollect);
    }

    switchPage(aniState: boolean): void {

        if (this.prePageIndex == this.currentPageIndex) {
            return;
        }

        if (this._prePageIndex != -1) {
            this.pages[this.prePageIndex].hide(aniState);
        }

        this.pages[this.currentPageIndex].show(aniState);

    }

    btnsSetZIndex(): void {
        let val = ViewZorder.Btn;
        this.ui.btn_close.zIndex = val;
        this.ui.btn_info.zIndex = val;
    }

    btnClosePosReset(pageIndex: number): void {

        let pos: cc.Vec2 = cc.v2();

        switch (pageIndex) {
            case 0:
                pos = cc.v2(279, 495);
                break;
            case 1:
                pos = cc.v2(279, 590);
                break;
        }

        this.ui.btn_close.setPosition(pos);

    }

    btnInfoPosReset(pageIndex: number): void {

        let pos: cc.Vec2 = cc.v2();

        switch (pageIndex) {
            case 0:
                pos = cc.v2(185, 495);
                break;
            case 1:
                pos = cc.v2(185, 590);
                break;
        }

        this.ui.btn_info.setPosition(pos);

    }

    onPageSwitch(pageIndex: number): void {
        this.prePageIndex = this.currentPageIndex;
        this.currentPageIndex = pageIndex;
        this.switchPage(true);
        this.btnClosePosReset(pageIndex);
        this.btnInfoPosReset(pageIndex);
    }

    onEnterMineCollect(msg): void {

        this.loadTip.hide();
        if (msg.state == 0) {
            this.onPageSwitch(1);
            this.mineCollect.collectGeneral.updateMine();
        } else {
            this.onMessageShow({
                type: 2,
                content: LangMng.getTxt("S_9102"),
                autoClose: true
            });
        }

    }


    onEnterMineMng(): void {
        this.onPageSwitch(0);
    }

    onMessageShow(config): void {
        UIHelp.ShowDialog(config);
    }

    onBtnCloseClick(): void {
        GameController.net.send("close", null);
    }

    onBtnInfoClick(): void {
        this.infoPop.show();
    }

    onMineChangeReq(): void {
        this.loadTip.show();
        GameController.net.send("use", {
            petID: GameCenter.game.mineSelectID,
            elfID: GameCenter.game.partnerSelectID,
        });
    }

    onPetUpgradeReq(data): void {
        this.loadTip.show();
        GameController.net.send("upgrade", {
            petID: data.id,
        });
    }

    onPetUpgrade(msg): void {

        this.loadTip.hide();

        let state = msg.isUpgrade;

        switch (state) {
            case 0:
            case 1:
                this.upgradePanel.show(msg.petID);
                const timer = setTimeout(() => {
                    this.upgradePanel.hide(() => {
                        EventMng.emit("PET_UPGRADE_CHANGE", {
                            state: state,
                            id: msg.petID,
                        });
                    });
                    clearTimeout(timer);
                }, 3000);
                break;
            case 2:
                this.onUpgradeError("T_108");
                break;
            case 3:
                this.onUpgradeError("T_109");
                break;
            case 4:
                this.onUpgradeError("T_107");
                break;
        }

        GameCenter.game.mineLevel[msg.petID] = msg.level;
        this.mineMng.con.page1.slider.items[msg.petID].setLevel(msg.petID, msg.level);

    }

    onUpgradeError(str): void {
        EventMng.emit(MainEvent.MESSAGE_SHOW, {
            type: 2,
            content: LangMng.getTxt(str),
            autoClose: true,
        });
    }

    onOpenSkinPopReq(msg): void {
        GameController.net.send("getbag", {
            petID: msg.id,
            bag: "skin",
        });
    }
    onOpenSkinPop(msg): void {
        this.skinPop.show(msg);
    }

    get currentPageIndex(): number {
        return this._currentPageIndex;
    }

    get prePageIndex(): number {
        return this._prePageIndex;
    }

    set currentPageIndex(value: number) {
        this._currentPageIndex = value;
    }

    set prePageIndex(value: number) {
        this._prePageIndex = value;
    }

    setVecStr(): void {
        this.ui.ver_str.node.zIndex = ViewZorder.Btn;
        this.ui.ver_str.string = "v1.0.1";
    }

}
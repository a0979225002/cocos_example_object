import GameCenter from "../../../data/GameCenter";
import LangMng from "../../../manager/LangMng";
import AssetsMng from "../../../manager/AssetsMng";
import EventMng from "../../../manager/EventMng";
import { MineSelectItem } from "./MineSelectItem";
import { ActionTransition } from "../../../common/ActionTransition";
import { MainEvent } from "../../../data/const/EventConst";

export class MineSlider {

    ui: any = null;
    items: MineSelectItem[] = [];
    type: number;
    state: number = 0;
    pageWidth: number = 300;
    itemOffsetY: number = 150;
    layoutX: number = -333;
    cubeSizeProp: number = 0;

    referenceMode: boolean = false;
    sliderPageCallBack = null;

    private _prePageIndex: number = -1;
    private _currentPageIndex: number = 1;

    constructor(ui, type: number, config?) {

        this.ui = ui;
        this.type = type;

        this._currentPageIndex = this.type == 0 ? GameCenter.game.mineSelectID : GameCenter.game.partnerSelectID;

        this.updateGameCenterData();
        this.updateChooseTip();

        if (!config) {
            return;
        }

        if (config.referenceMode) {
            this.referenceMode = config.referenceMode;
        }

        if (config.sliderPageCallBack) {
            this.sliderPageCallBack = config.sliderPageCallBack;
        }

    }

    init(): void {
        this.cubeSizeProp = this.pageWidth / this.itemOffsetY;
        this.updateChooseTip();
    }


    show(): void {
        this.ui.page_view.node.on("scrolling", this.onSliderScrolling, this);
        this.ui.page_view.node.on("page-turning", this.onPageTurning, this);
        this.updateChooseTip();
        this.updateBtnDisplayState();
    }


    hide(): void {
        this.ui.page_view.node.off("scrolling", this.onSliderScrolling, this);
        this.ui.page_view.node.off("page-turning", this.onPageTurning, this);
    }


    createSliderList(floorAsset, bodyAsset): void {

        let state = this.getSliderState();


        if (state == 0) {

            let node = this.ui.node_item_main.children[0];
            this.items[0] = new MineSelectItem(node,0, 0);
            this.items[0].play("ACTION");

            if (this.ui.label_intro_title) {
                this.ui.label_intro_title.string = "";
            }

            if (this.ui.label_intro_con) {
                let txtCode = this.type == 0 ? "T_002" : "T_001";
                this.ui.label_intro_con.string = `\n${LangMng.getTxt(txtCode)}`;
            }

            return;

        }

        const itemPrefab = AssetsMng.getAssets("cube_item");

        let sliderData = this.getListDate();
        for (let i = 0; i < sliderData.length; i++) {
            let sceneNode = this.ui.node_item_main.children[i];
            let node = sceneNode ? sceneNode : cc.instantiate(itemPrefab);
            let itemID = sliderData[i];
            let floorName = itemID > 0 ? floorAsset[i] : "empty";
            let bodyAssets = itemID > 0 ? AssetsMng.getAssets(`${bodyAsset[i]}.spine`): null;
            this.ui.page_view.addPage(node);
            this.items[i] = new MineSelectItem(node, this.type, itemID, GameCenter.game.mineLevel[i], {
                floorName: floorName,
                bodyAssets: bodyAssets,
            });
        }

        this.layoutActive(false);
        this.ui.page_view.setCurrentPageIndex(this._currentPageIndex);
        this.updateItemIndex();
        this.onPageTurning();

    }

    updateCurrentPage(): void {
        this._prePageIndex = this._currentPageIndex;
        this._currentPageIndex = this.ui.page_view.getCurrentPageIndex();
        this.updateGameCenterData();
    }

    updateChooseTip(): void {

        let state = this.type == 0 ? GameCenter.game.hasPartner() : GameCenter.game.hasMine();
        let data = this.type == 0 ? GameCenter.cfgPartner[GameCenter.game.partnerSelectID] : GameCenter.cfgMine[GameCenter.game.mineSelectID];
        let str = data.name;

        if (state) {

            this.ui.sprite_choose_tip_img.spriteFrame = this.getChooseTipImg();
            this.ui.node_choose_tip_img.active = true;
            this.ui.node_choose_state.active = true;
            this.ui.label_choose_tip_title.string = str;
            this.ui.node_choose_tip_bg.color = new cc.Color(data.bgColor.r, data.bgColor.g, data.bgColor.b);
            this.ui.node_choose_tip_bg.opacity = 255;

        } else {
            this.ui.node_choose_tip_img.active = false;
            this.ui.node_choose_state.active = false;
            this.ui.label_choose_tip_title.string = `${LangMng.getTxt("T_005")}`;
            this.ui.node_choose_tip_bg.color = new cc.Color(0, 0, 0);
            this.ui.node_choose_tip_bg.opacity = 110;

        }

    }

    getChooseTipImg(): cc.SpriteFrame {

        let img = null;

        switch (this.type) {
            case 0:
                img = GameCenter.getCurrentPartnerChooseIcon();
                break;
            case 1:
                img = GameCenter.getCurrentPetChooseIcon();
                break;
        }

        return img;

    }

    updateItemIndex(): void {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].node.zIndex = this.items.length - i;
        }
    }

    updateItemSpinePos(): void {
        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            let itemX = 0;
            let itemY = (i - this._currentPageIndex) * this.itemOffsetY;
            item.setSpineNodePosition(new cc.Vec2(itemX, itemY));
        }
    }

    updateItemAni(): void {

        if (this._prePageIndex >= 0 && this.items[this._prePageIndex]) {
            this.items[this._prePageIndex].play("IDLE");
        }

        if (this.items[this._currentPageIndex]) {
            this.items[this._currentPageIndex].play("ACTION");
        }

    }

    updateItemIntro(): void {

        if (!this.ui.node_intro_txt_group) {
            return;
        }

        let listCfgData = this.getCfgData();
        let data = listCfgData[this.items[this._currentPageIndex].id];

        if (this.ui.label_intro_title.string == data.name) {
            return;
        }

        this.ui.node_intro_txt_group.stopAllActions();
        this.ui.node_intro_txt_group.runAction(cc.sequence(
            cc.fadeOut(.1),
            cc.callFunc(() => {
                this.ui.label_intro_title.string = data.name;
                this.ui.label_intro_con.string = `\n${data.intro}`;
                if (this.type == 0) {
                    if (GameCenter.game.mineList[this.currentPageIndex] != 0) {
                        let itemLevel = GameCenter.game.mineLevel[this.currentPageIndex];
                        this.ui.label_intro_title.string += ` (${LangMng.getTxt("T_006")}${itemLevel})`;
                    }
                }
            }),
            cc.delayTime(.1),
            cc.fadeIn(.15).easing(cc.easeSineOut())
        ));

    }


    updateLevel(): void {
        let listCfgData = this.getCfgData();
        if (!this.items[this._currentPageIndex]) { return; }
        let data = listCfgData[this.items[this._currentPageIndex].id];
        this.ui.label_intro_title.string = data.name;
        if (this.type == 0) {
            if (GameCenter.game.mineList[this.currentPageIndex] != 0) {
                let itemLevel = GameCenter.game.mineLevel[this.currentPageIndex];
                this.ui.label_intro_title.string += ` (${LangMng.getTxt("T_006")}${itemLevel})`;
            }
        }
    }

    updateGameCenterData(): void {

        if (this.referenceMode) {
            return;
        }

        if (this.type == 0) {
            GameCenter.game.mineSelectID = this._currentPageIndex;
        } else if (this.type == 1) {
            GameCenter.game.partnerSelectID = this._currentPageIndex;
        }

    }

    getCfgData(): void {

        let data = null;

        switch (this.type) {
            case 0:
                data = GameCenter.cfgMine;
                break;
            case 1:
                data = GameCenter.cfgPartner;
                break;
        }

        return data;

    }

    onPageTurning(): void {

        this.updateCurrentPage();
        this.updateItemAni();
        this.updateItemSpinePos();
        this.updateItemIntro();
        this.updateBtnDisplayState();

        if (this.sliderPageCallBack) {
            this.sliderPageCallBack();
        }

    }

    updateBtnDisplayState(): void {
        if (GameCenter.game.canGo) {
            if (this.ui.node_btn_go_active) {
                this.ui.node_btn_go_active.active = true;
                this.ui.node_btn_go_normal.active = false;
            }
        } else {
            if (this.ui.node_btn_go_active) {
                this.ui.node_btn_go_active.active = false;
                this.ui.node_btn_go_normal.active = true;
            }
        }
    }

    updateSliderPage(e): void {
        let nodeName = e.currentTarget.name;
        let goToPageIndex = nodeName == "arrow_right" ? this._currentPageIndex + 1 : this._currentPageIndex - 1;
        this.ui.page_view.scrollToPage(goToPageIndex, .3);
    }

    getSliderState(): number {

        let list = this.getListDate();

        for (let i = 0; i < list.length; i++) {
            if (list[i] == 1) {
                this.state = 1;
                break;
            }
        }

        return this.state;
    }

    getListDate(): number[] {

        let data = null;

        switch (this.type) {
            case 0:
                data = GameCenter.game.mineList;
                break;
            case 1:
                data = GameCenter.game.partnerList;
                break;
        }

        return data;
    }

    layoutActive(state: boolean = true): void {
        this.ui.layout.updateLayout();
        this.ui.layout.enabled = state;
    }

    arrowBtnsBindOn(): void {
        this.ui.btn_slider_arrow_left.on('touchend', this.onArrowLeftClick, this);
        this.ui.btn_slider_arrow_right.on('touchend', this.onArrowRightClick, this);
    }

    arrowBtnsBindOff(): void {
        this.ui.btn_slider_arrow_left.off('touchend', this.onArrowLeftClick, this);
        this.ui.btn_slider_arrow_right.off('touchend', this.onArrowRightClick, this);
    }

    onSliderScrolling(): void {
        let layoutPos = this.ui.layout.node.getPosition();
        for (let i = 0; i < this.items.length; i++) {
            let dx = Math.abs(layoutPos.x) - Math.abs(this.layoutX) - (i * this.pageWidth);
            let cubeY = dx / this.cubeSizeProp;
            this.items[i].setSpineNodePosition(new cc.Vec2(0, -cubeY));
        }
    }

    onArrowLeftClick(e): void {
        this.updateSliderPage(e);
    }

    onArrowRightClick(e): void {
        this.updateSliderPage(e);
    }

    onBtnGoClick(): void {

        if (!GameCenter.game.canGo) {

            let txt = null;

            if (!GameCenter.game.hasMine()) {
                txt = LangMng.getTxt("T_003");
            } else if (!GameCenter.game.hasPartner()) {
                txt = LangMng.getTxt("T_004");
            }

            EventMng.emit(MainEvent.MESSAGE_SHOW, {
                type: 2,
                content: LangMng.getTxt(`${txt}`),
                autoClose: true,
            });

            return;
        }

        ActionTransition.btnBounce(this.ui.btn_go, () => {

            EventMng.emit(MainEvent.MINE_CHANGE_REQ);

        });

    }

    set prePageIndex(value: number) {
        this._prePageIndex = value;
    }

    get prePageIndex(): number {
        return this._prePageIndex;
    }

    set currentPageIndex(value: number) {
        this._currentPageIndex = value;
    }

    get currentPageIndex(): number {
        return this._currentPageIndex;
    }

}
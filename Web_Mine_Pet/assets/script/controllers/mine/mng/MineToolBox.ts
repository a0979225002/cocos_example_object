import GameCenter from "../../../data/GameCenter";
import EventMng from "../../../manager/EventMng";
import LangMng from "../../../manager/LangMng";
import { MineSlider } from "./MineSlider";
import { ToolBtn, ToolIntroCon } from "./ToolComponent";
import { ActionTransition } from "../../../common/ActionTransition";
import { MainEvent } from "../../../data/const/EventConst";
import UIBase from "../../ui/UIBase";
import DataMineToolBox from "../../../data/scene/DataMineToolBox";

const { ccclass } = cc._decorator;

@ccclass
export default class MineToolBox extends UIBase {

    ui: DataMineToolBox;
    slider: MineSlider;
    controlBts: ToolBtn[] = [];
    introCon: ToolIntroCon[] = [];

    private btnCanClick: boolean = false;
    private currentToolBtnIndex = -1;

    onUILoad(): void {
        this.ui = this.node.addComponent(DataMineToolBox);
        this.mineSliderCreate();
        this.toolBtnsCreate();
        this.toolIntroConCreate();
    }

    onStart() {
        this.slider.init();
        this.slider.createSliderList(GameCenter.game.mineFloorName, GameCenter.game.mineBodyName);
        this.viewInit();
    }

    onShow(): void {
        this.initEvent(MainEvent.PET_UPGRADE_CHANGE, this.onPetUpgradeChange);
        this.initEvent(MainEvent.MESSAGE_SHOW, this.onMessageShow);
        this.onRegisterEvent(this.ui.btn_confirm, this.onBtnConfirmClick, this);
        this.slider.show();
        this.slider.arrowBtnsBindOn();
        this.viewReset();
        this.toolBtnsBindOn();
    }

    onHide() {
        this.unRegisterEvent(this.ui.btn_confirm, this.onBtnConfirmClick, this);
        this.slider.hide();
        this.slider.arrowBtnsBindOff();
        this.toolBtnsBindOff();
    }

    viewInit(): void {
        this.controlBts[0].setCount(GameCenter.game.canCount);
        this.controlBts[0].setTitleTxt(LangMng.getTxt("T_100"));
        this.controlBts[1].setTitleTxt(LangMng.getTxt("T_110"));
        this.controlBts[2].setTitleTxt(LangMng.getTxt("T_111"));
        this.ui.label_item_name.string = '';
        this.levelBarUpdate();
    }

    viewReset(): void {
        this.currentToolBtnIndex = -1;
        this.btnCanClick = false;
        this.msgTipShow(LangMng.getTxt("T_008"));
        this.toolIntroConHide();
        this.ui.node_confirm_active.active = false;
        this.stateBoxHide();
    }

    mineSliderCreate(): void {
        this.slider = new MineSlider(this.ui, 0, {
            referenceMode: true,
            sliderPageCallBack: this.onSliderPageCallBack.bind(this),
        });
    }

    itemCheck(autoUpdate: boolean = true): boolean {

        let state = false;

        if (this.currentToolBtnIndex < 0) {
            return state;
        }

        if (GameCenter.game.mineList[this.slider.currentPageIndex] == 0) {
            this.msgTipShow(LangMng.getTxt("T_009"));
            this.toolIntroConHide();
        } else {
            this.msgTipHide();
            this.toolIntroConUpdate(autoUpdate);
            state = true;
        }

        return state;

    }

    itemDialogShow(str): void {
        this.ui.node_pet_dialog_holder.active = true;
        this.ui.label_pet_dialog_txt.string = str;
        this.ui.node_pet_dialog_holder.opacity = 255;
        this.ui.node_pet_dialog_holder.stopAllActions();
        this.ui.node_pet_dialog_holder.runAction(cc.sequence(
            cc.delayTime(3),
            cc.fadeOut(.2),
            cc.callFunc(() => {
                this.ui.node_pet_dialog_holder.active = false;
            })
        ))
    }

    toolBtnsCreate(): void {
        for (let i = 0 ; i < this.ui.node_props_holder.children.length; i++) {
            let node = this.ui.node_props_holder.children[i];
            this.controlBts[i] = new ToolBtn(node, i, this.onToolBtnClick.bind(this));
        }
    }

    toolBtnsUpdate(): void {
        this.controlBts[0].setCount(GameCenter.game.canCount);
    }

    toolBtnsBindOn(): void {
        for (let i = 0; i < this.controlBts.length; i++) {
            this.controlBts[i].bindOn();
        }
    }

    toolBtnsBindOff(): void {
        for (let i = 0; i < this.controlBts.length; i++) {
            this.controlBts[i].bindOff();
            this.controlBts[i].active(false);
        }
    }

    toolBtnSwitch(id): void {

        if (this.currentToolBtnIndex >= 0) {
            this.controlBts[this.currentToolBtnIndex].active(false);
        }

        this.currentToolBtnIndex = id;

        this.controlBts[this.currentToolBtnIndex].active(true);

        this.btnCanClick = this.itemCheck();

    }

    toolIntroConCreate(): void {
        this.introCon[0] = new ToolIntroCon(this.ui.node_intro_con_1, 0, this.canIntroUpdate.bind(this));
        this.introCon[1] = new ToolIntroCon(this.ui.node_intro_con_2, 0, this.canIntroUpdate.bind(this));
        this.introCon[2] = new ToolIntroCon(this.ui.node_intro_con_3, 0, this.canIntroUpdate.bind(this));
    }

    toolIntroConHide(): void {
        for (let i = 0; i < this.introCon.length; i++) {
            this.introCon[i].hide();
        }
    }

    toolIntroConUpdate(autoUpdate): void {

        this.toolIntroConHide();
        this.introCon[this.currentToolBtnIndex].show();

        switch (this.currentToolBtnIndex) {

            case 0:
                this.canIntroUpdate();
                this.btnConfirmShow();
                break;
            case 1:
                this.btnConfirmHide();
                this.decIntroUpdate();
                break;
            case 2:

                this.btnConfirmHide();
                this.skinIntroUpdate();

                if (autoUpdate) {
                    EventMng.emit(MainEvent.OPEN_SKIN_POP_REQ, {
                        id: this.slider.currentPageIndex
                    })
                }

                break;
        }
    }

    msgTipShow(str: string): void {

        this.ui.label_msg_tip.string = str;
        let node = this.ui.label_msg_tip.node;

        node.active = true;
        node.opacity = 0;

        node.stopAllActions();
        node.runAction(cc.fadeIn(.1));

    }

    msgTipHide(): void {

        let node = this.ui.label_msg_tip.node;

        if(!node.active) { return; }

        node.stopAllActions();
        node.runAction(cc.sequence(
            cc.fadeOut(.1),
            cc.callFunc(() => {
                node.active = false;
            })
        ));

    }

    canIntroUpdate(): void {

        let nextLevel = GameCenter.game.mineLevel[this.slider.currentPageIndex] + 1;

        this.ui.node_confirm_active.active = false;

        if (nextLevel >= 10) {
            this.toolIntroConHide();
            this.msgTipShow(LangMng.getTxt("T_107"));
            return;
        }


        if (!this.ui.node_intro_con_1.active) { return; }

        let introNode = this.introCon[this.currentToolBtnIndex].node;
        let sliverLabel = introNode.getChildByName("g_1").getChildByName("count").getComponent(cc.Label);
        let canCountLabel = introNode.getChildByName("g_2").getChildByName("count").getComponent(cc.Label);
        let canTipLabel = introNode.getChildByName("g_2").getChildByName("count_tip").getComponent(cc.Label);

        let upTxt1 = introNode.getChildByName("g_3").getChildByName("txt_1").getComponent(cc.RichText);


        let silverVal = GameCenter.game.levelConfig.silver[nextLevel - 2];
        let canVal = GameCenter.game.levelConfig.can[nextLevel - 2];

        sliverLabel.string = `${silverVal}`;
        canCountLabel.string = `x${canVal}`;
        canTipLabel.string = `(${GameCenter.game.canCount}/${canVal})`;
        upTxt1.string = `${LangMng.getTxt("T_103")} ${nextLevel}\n\r${LangMng.getTxt("T_104")} <color = #ffc600>${GameCenter.game.levelConfig.rate[nextLevel - 2]}%</c>`;

        if (GameCenter.game.silverPoint >= silverVal && GameCenter.game.canCount >= canVal) {
            this.ui.node_confirm_active.active = true;
        }

    }

     decIntroUpdate(): void {

         if (GameCenter.game.mineAccessories[this.slider.currentPageIndex] == 0) {
             this.ui.node_intro_con_2.active = false;
             this.msgTipShow(LangMng.getTxt("T_112"));
         }

    }


    skinIntroUpdate(): void {

        if (GameCenter.game.mineSkin[this.slider.currentPageIndex] == 0) {
            this.ui.node_intro_con_3.active = false;
            this.msgTipShow(LangMng.getTxt("T_113"));
        }

    }

    levelBarShow(): void {
        this.ui.node_level_holder.active = true;
    }

    levelBarHide(): void {
        this.ui.node_level_holder.active = false;
    }

    levelBarUpdate(): void {
        this.ui.label_level_num.string = `LV.${GameCenter.game.mineLevel[this.slider.currentPageIndex]}`;
    }

    onToolBtnClick(id): void {

        let introPage = this.introCon[id];

        if (!introPage) {
            EventMng.emit(MainEvent.MESSAGE_SHOW, {
                type: 2,
                content: LangMng.getTxt("S_9001"),
                autoClose: true,
            });
            return;
        }

        this.toolBtnSwitch(id);

    }


    onBtnConfirmClick(): void {

        this.unRegisterEvent(this.ui.btn_confirm, this.onBtnConfirmClick, this);

        ActionTransition.btnBounce(this.ui.btn_confirm, () => {


            if (!this.btnCanClick) {
                this.onRegisterEvent(this.ui.btn_confirm, this.onBtnConfirmClick, this);
                return;
            }

            EventMng.emit('PET_UPGRADE_REQ', {
                id: this.slider.currentPageIndex,
            });

        });

    }

    onSliderPageCallBack(): void {

        this.btnCanClick = this.itemCheck(false);

        if (GameCenter.game.mineList[this.slider.currentPageIndex] == 0) {
            this.levelBarHide();
            this.ui.label_item_name.string = '';
        } else {
            this.levelBarShow();
            this.ui.label_item_name.string = GameCenter.cfgMine[this.slider.currentPageIndex].name;
        }

    }

    onPetUpgradeChange(data): void {

        this.onRegisterEvent(this.ui.btn_confirm, this.onBtnConfirmClick, this);

        this.toolBtnsUpdate();
        this.levelBarUpdate();
        this.canIntroUpdate();

        let level = GameCenter.game.mineLevel[data.id];

        if (data.state == 0) {
            this.slider.items[data.id].upgradeSuccess(data.id, level);
            this.itemDialogShow(LangMng.getTxt("T_105"));
            this.ui.ani_level_bar.play();
        } else {
            this.slider.items[data.id].upgradeFail();
            this.itemDialogShow(LangMng.getTxt("T_106"));
        }

    }

    onMessageShow(): void {
        this.onRegisterEvent(this.ui.btn_confirm, this.onBtnConfirmClick, this);
    }

    stateBoxShow(): void {
        this.ui.node_state_tip.active = true;
    }

    stateBoxHide(): void {
        this.ui.node_state_tip.active = false;
    }

    btnConfirmShow(): void {
        this.ui.btn_confirm.active = true;
    }

    btnConfirmHide(): void {
        this.ui.btn_confirm.active = false;
    }

}
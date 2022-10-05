import GameCenter from "../../../data/GameCenter";
import GameController from "../../../GameController";
import AssetsMng from "../../../manager/AssetsMng";
import UIBase from "../../ui/UIBase";
import ParticleCoin from "./ParticleCoin";
import DataCollectGeneral from "../../../data/scene/DataCollectGeneral";
import { ActionTransition } from "../../../common/ActionTransition";
import { MainEvent } from "../../../data/const/EventConst";

const { ccclass } = cc._decorator;

@ccclass
export default class CollectGeneral extends UIBase {

    ui: DataCollectGeneral;
    particleCoin: ParticleCoin;

    canUpdateMine: boolean = true;

    onUILoad(): void {
        this.ui = this.node.addComponent(DataCollectGeneral);
        this.particleCoin = this.ui.node_coin_particle_holder.addComponent(ParticleCoin);
        this.viewReset();
    }

    onShow(): void {
        this.initEvent(MainEvent.GET_POINT, this.onGetPoint);
        this.initEvent(MainEvent.MINE_GENERAL_UPDATE, this.onMineUpdate);
        this.onRegisterEvent(this.ui.btn_get, this.onBtnGetClick, this);
        this.dataReset();
        cc.game.on(cc.game.EVENT_SHOW, () => {
            this.updateMine();
        });
        this.updateChooseIcon();
    }

    onHide(): void {
        this.unRegisterEvent(this.ui.btn_get, this.onBtnGetClick, this);
    }

    viewReset(): void {
        this.setRoadTheme();
        this.setPetSpineTheme();
        this.setPartnerSpineTheme();
        this.roadActive(false);
        this.petActive(false);
        this.partnerActive(false);
        this.coinActive(false);
        this.mineTipHide();
        this.ui.label_time.string = "00:00:00";
        this.ui.btn_get.active = false;
        this.ui.btn_get.opacity = 0;
        this.ui.node_coin_level_holder.opacity = 0;
    }

    dataReset(): void {
        this.setGoldPoint();
        this.setSliverPoint();
        this.updateWarehousePoint();
        this.updateMoneyPile();
        this.updateBtnGetState();
    }

    mineAniPlay(): void {
        this.roadAniPlay(() => {
            this.petRunAniPlay();
            this.partnerRunAniPlay();
            this.coinRunAniPlay();
            this.mineTipShow();
        });
    }

    roadActive(state: boolean = true): void {
        this.ui.spine_road.node.stopAllActions();
        this.ui.spine_road.node.active = state;
    }

    roadAniPlay(callBack?: Function): void {
        this.roadActive();
        this.ui.spine_road.node.runAction(cc.sequence(
            cc.callFunc(() => {
                this.ui.spine_road.setAnimation(0, "run_op", false);
                this.ui.spine_road.addAnimation(0, "run_action", true);
            }),
            cc.delayTime(1),
            cc.callFunc(() => {
                this.ui.btn_get.active = true;
                this.ui.btn_get.runAction(cc.fadeIn(.2));
                this.ui.node_coin_level_holder.runAction(cc.fadeIn(.2));
                if (callBack) callBack();
            }),
        ));
    }

    setRoadTheme(): void {
        let id = GameCenter.game.mineSelectID;
        let name = GameCenter.game.mineRoadName[id];
        this.ui.spine_road.skeletonData = AssetsMng.getAssets(`${name}.spine`);
    }

    petActive(state: boolean = true): void {
        this.ui.spine_pet.node.active = state;
    }

    petRunAniPlay(): void {
        this.petActive();
        this.ui.spine_pet.setAnimation(0, `run_patch_02`, true);
    }

    setPetSpineTheme(): void {
        let name = GameCenter.game.getPetBodyThemeName();

        this.petActive();
        this.ui.spine_pet.skeletonData = AssetsMng.getAssets(`${name}.spine`);
        this.setPetSkin();
    }

    setPetSkin(): void {
        this.ui.spine_pet.setSkin(GameCenter.game.getPetBodySkinName());
    }

    partnerActive(state: boolean = true): void {
        this.ui.spine_partner.node.active = state;
    }

    partnerRunAniPlay(): void {
        this.partnerActive();
        this.ui.spine_partner.setAnimation(0, `run_patch_02`, true);
    }

    setPartnerSpineTheme(): void {
        let name = GameCenter.game.getPartnerBodyThemeName();
        this.partnerActive();
        this.ui.spine_partner.skeletonData = AssetsMng.getAssets(`${name}.spine`);
    }

    coinActive(state: boolean = true): void {
        this.ui.spine_coin.node.active = state;
    }

    coinRunAniPlay(): void {
        this.coinActive();
        this.ui.spine_coin.setAnimation(0, `run_patch_02`, true);
    }

    mineTipShow(): void {
        this.ui.node_mine_tip_holder.active = true;
        this.ui.node_mine_tip_holder.runAction(cc.fadeIn(.3));
    }

    mineTipHide(): void {
        this.ui.node_mine_tip_holder.opacity = 0;
        this.ui.node_mine_tip_holder.active = false;
    }

    timeNumberChange(num: number): string {
        return num < 10 ? `0${num}` : `${num}`;
    }

    formatSecond(secs): string {
        let hr = Math.floor(secs / 3600);
        let min = Math.floor((secs - (hr * 3600)) / 60);
        let sec = secs - (hr * 3600) - (min * 60);
        return ` ${this.timeNumberChange(hr)}:${this.timeNumberChange(min)}:${this.timeNumberChange(sec)}`;
    }

    getAccumulatedHours(): number {
        return Math.floor(GameCenter.game.currentTime / 3600);
    }

    setGoldPoint(): void {
        this.ui.label_gold.string = `${GameCenter.game.goldPoint}`;
    }

    setSliverPoint(): void {
        this.ui.label_sliver.string = `${GameCenter.game.silverPoint}`;
    }

    updatePoints(): void {
        this.setGoldPoint();
        this.setSliverPoint();
    }

    updateWarehousePoint(): void {
        this.ui.label_coin_txt.string = `${GameCenter.game.warehousePoint}`;
    }

    updateMoneyPile(): void {

        let level = this.getMoneyPileLevel();
        let nodeArr = this.ui.node_coin_level_holder.children;

        for (let i = 0; i < nodeArr.length; i++) {
           nodeArr[i].active = i == level;
        }

    }

    getMoneyPileLevel(): number {

        let hr = this.getAccumulatedHours();
        let level = 0;

        if (hr < 6) {
            level = 0;
        } else if (hr >= 6 && hr < 12) {
            level = 1;
        } else if (hr >= 12) {
            level = 2;
        }

        return level;

    }

    onBtnGetClick(): void {
        ActionTransition.btnBounce(this.ui.btn_get);
        GameController.net.send("action", null);
    }

    onGetPoint(): void {

        let goldNum = Number(GameCenter.game.collect.gold);
        let sliverNum = Number(GameCenter.game.collect.silver);

        goldNum = goldNum <= 30 ? goldNum : 30;
        sliverNum = sliverNum <= 30 ? sliverNum : 30;

        this.particleCoin.createCoins(cc.v2(0, -510), goldNum, sliverNum, () => {
            this.updatePoints();
        });

    }

    onMineUpdate(): void {
        this.updateWarehousePoint();
        this.updateBtnGetState();
        this.updateMoneyPile();
    }

    updateMine(): void {

        if (this.canUpdateMine) {
            this.canUpdateMine = false;
            GameController.net.send("other", null);
            const timer = setTimeout(() => {
                this.canUpdateMine = true;
                clearTimeout(timer)
            }, 30)
        }

    }

    updateTime(): void {

        if (!GameCenter.game.timeActive) {
            if (this.ui.label_time.string != this.formatSecond(0)) {
                this.ui.label_time.string = this.formatSecond(0);
            }
            return;
        }

        if (this.ui.label_time.string != this.formatSecond(GameCenter.game.currentTime)) {

            this.ui.label_time.string = this.formatSecond(GameCenter.game.currentTime);

            if (GameCenter.game.currentTime % 3600 == 0 && GameCenter.game.currentTime > 0) {
                this.updateMine();
            }

        }

    }

    updateBtnGetState(): void {

        let hr = this.getAccumulatedHours();

        if (hr < 6) {
            this.ui.node_get_normal.active = true;
            this.ui.node_get_active.active = false;
        } else {
            this.ui.node_get_normal.active = false;
            this.ui.node_get_active.active = true;
        }

    }

    updateChooseIcon(): void {
        this.ui.sprite_icon_mine.spriteFrame = GameCenter.getCurrentPetChooseIcon();
        this.ui.sprite_icon_partner.spriteFrame = GameCenter.getCurrentPartnerChooseIcon();
    }

    protected update(dt: number) {
        if (!this.node.active) { return; }
        this.updateTime();
    }

}
"use strict";
cc._RF.push(module, '001d4Aj4DNOvbICg2vzJCcK', 'CollectGeneral');
// script/controllers/mine/collect/CollectGeneral.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameCenter_1 = require("../../../data/GameCenter");
var GameController_1 = require("../../../GameController");
var AssetsMng_1 = require("../../../manager/AssetsMng");
var UIBase_1 = require("../../ui/UIBase");
var ParticleCoin_1 = require("./ParticleCoin");
var DataCollectGeneral_1 = require("../../../data/scene/DataCollectGeneral");
var ActionTransition_1 = require("../../../common/ActionTransition");
var EventConst_1 = require("../../../data/const/EventConst");
var ccclass = cc._decorator.ccclass;
var CollectGeneral = /** @class */ (function (_super) {
    __extends(CollectGeneral, _super);
    function CollectGeneral() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canUpdateMine = true;
        return _this;
    }
    CollectGeneral.prototype.onUILoad = function () {
        this.ui = this.node.addComponent(DataCollectGeneral_1.default);
        this.particleCoin = this.ui.node_coin_particle_holder.addComponent(ParticleCoin_1.default);
        this.viewReset();
    };
    CollectGeneral.prototype.onShow = function () {
        var _this = this;
        this.initEvent(EventConst_1.MainEvent.GET_POINT, this.onGetPoint);
        this.initEvent(EventConst_1.MainEvent.MINE_GENERAL_UPDATE, this.onMineUpdate);
        this.onRegisterEvent(this.ui.btn_get, this.onBtnGetClick, this);
        this.dataReset();
        cc.game.on(cc.game.EVENT_SHOW, function () {
            _this.updateMine();
        });
        this.updateChooseIcon();
    };
    CollectGeneral.prototype.onHide = function () {
        this.unRegisterEvent(this.ui.btn_get, this.onBtnGetClick, this);
    };
    CollectGeneral.prototype.viewReset = function () {
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
    };
    CollectGeneral.prototype.dataReset = function () {
        this.setGoldPoint();
        this.setSliverPoint();
        this.updateWarehousePoint();
        this.updateMoneyPile();
        this.updateBtnGetState();
    };
    CollectGeneral.prototype.mineAniPlay = function () {
        var _this = this;
        this.roadAniPlay(function () {
            _this.petRunAniPlay();
            _this.partnerRunAniPlay();
            _this.coinRunAniPlay();
            _this.mineTipShow();
        });
    };
    CollectGeneral.prototype.roadActive = function (state) {
        if (state === void 0) { state = true; }
        this.ui.spine_road.node.stopAllActions();
        this.ui.spine_road.node.active = state;
    };
    CollectGeneral.prototype.roadAniPlay = function (callBack) {
        var _this = this;
        this.roadActive();
        this.ui.spine_road.node.runAction(cc.sequence(cc.callFunc(function () {
            _this.ui.spine_road.setAnimation(0, "run_op", false);
            _this.ui.spine_road.addAnimation(0, "run_action", true);
        }), cc.delayTime(1), cc.callFunc(function () {
            _this.ui.btn_get.active = true;
            _this.ui.btn_get.runAction(cc.fadeIn(.2));
            _this.ui.node_coin_level_holder.runAction(cc.fadeIn(.2));
            if (callBack)
                callBack();
        })));
    };
    CollectGeneral.prototype.setRoadTheme = function () {
        var id = GameCenter_1.default.game.mineSelectID;
        var name = GameCenter_1.default.game.mineRoadName[id];
        this.ui.spine_road.skeletonData = AssetsMng_1.default.getAssets(name + ".spine");
    };
    CollectGeneral.prototype.petActive = function (state) {
        if (state === void 0) { state = true; }
        this.ui.spine_pet.node.active = state;
    };
    CollectGeneral.prototype.petRunAniPlay = function () {
        this.petActive();
        this.ui.spine_pet.setAnimation(0, "run_patch_02", true);
    };
    CollectGeneral.prototype.setPetSpineTheme = function () {
        var name = GameCenter_1.default.game.getPetBodyThemeName();
        this.petActive();
        this.ui.spine_pet.skeletonData = AssetsMng_1.default.getAssets(name + ".spine");
        this.setPetSkin();
    };
    CollectGeneral.prototype.setPetSkin = function () {
        this.ui.spine_pet.setSkin(GameCenter_1.default.game.getPetBodySkinName());
    };
    CollectGeneral.prototype.partnerActive = function (state) {
        if (state === void 0) { state = true; }
        this.ui.spine_partner.node.active = state;
    };
    CollectGeneral.prototype.partnerRunAniPlay = function () {
        this.partnerActive();
        this.ui.spine_partner.setAnimation(0, "run_patch_02", true);
    };
    CollectGeneral.prototype.setPartnerSpineTheme = function () {
        var name = GameCenter_1.default.game.getPartnerBodyThemeName();
        this.partnerActive();
        this.ui.spine_partner.skeletonData = AssetsMng_1.default.getAssets(name + ".spine");
    };
    CollectGeneral.prototype.coinActive = function (state) {
        if (state === void 0) { state = true; }
        this.ui.spine_coin.node.active = state;
    };
    CollectGeneral.prototype.coinRunAniPlay = function () {
        this.coinActive();
        this.ui.spine_coin.setAnimation(0, "run_patch_02", true);
    };
    CollectGeneral.prototype.mineTipShow = function () {
        this.ui.node_mine_tip_holder.active = true;
        this.ui.node_mine_tip_holder.runAction(cc.fadeIn(.3));
    };
    CollectGeneral.prototype.mineTipHide = function () {
        this.ui.node_mine_tip_holder.opacity = 0;
        this.ui.node_mine_tip_holder.active = false;
    };
    CollectGeneral.prototype.timeNumberChange = function (num) {
        return num < 10 ? "0" + num : "" + num;
    };
    CollectGeneral.prototype.formatSecond = function (secs) {
        var hr = Math.floor(secs / 3600);
        var min = Math.floor((secs - (hr * 3600)) / 60);
        var sec = secs - (hr * 3600) - (min * 60);
        return " " + this.timeNumberChange(hr) + ":" + this.timeNumberChange(min) + ":" + this.timeNumberChange(sec);
    };
    CollectGeneral.prototype.getAccumulatedHours = function () {
        return Math.floor(GameCenter_1.default.game.currentTime / 3600);
    };
    CollectGeneral.prototype.setGoldPoint = function () {
        this.ui.label_gold.string = "" + GameCenter_1.default.game.goldPoint;
    };
    CollectGeneral.prototype.setSliverPoint = function () {
        this.ui.label_sliver.string = "" + GameCenter_1.default.game.silverPoint;
    };
    CollectGeneral.prototype.updatePoints = function () {
        this.setGoldPoint();
        this.setSliverPoint();
    };
    CollectGeneral.prototype.updateWarehousePoint = function () {
        this.ui.label_coin_txt.string = "" + GameCenter_1.default.game.warehousePoint;
    };
    CollectGeneral.prototype.updateMoneyPile = function () {
        var level = this.getMoneyPileLevel();
        var nodeArr = this.ui.node_coin_level_holder.children;
        for (var i = 0; i < nodeArr.length; i++) {
            nodeArr[i].active = i == level;
        }
    };
    CollectGeneral.prototype.getMoneyPileLevel = function () {
        var hr = this.getAccumulatedHours();
        var level = 0;
        if (hr < 6) {
            level = 0;
        }
        else if (hr >= 6 && hr < 12) {
            level = 1;
        }
        else if (hr >= 12) {
            level = 2;
        }
        return level;
    };
    CollectGeneral.prototype.onBtnGetClick = function () {
        ActionTransition_1.ActionTransition.btnBounce(this.ui.btn_get);
        GameController_1.default.net.send("action", null);
    };
    CollectGeneral.prototype.onGetPoint = function () {
        var _this = this;
        var goldNum = Number(GameCenter_1.default.game.collect.gold);
        var sliverNum = Number(GameCenter_1.default.game.collect.silver);
        goldNum = goldNum <= 30 ? goldNum : 30;
        sliverNum = sliverNum <= 30 ? sliverNum : 30;
        this.particleCoin.createCoins(cc.v2(0, -510), goldNum, sliverNum, function () {
            _this.updatePoints();
        });
    };
    CollectGeneral.prototype.onMineUpdate = function () {
        this.updateWarehousePoint();
        this.updateBtnGetState();
        this.updateMoneyPile();
    };
    CollectGeneral.prototype.updateMine = function () {
        var _this = this;
        if (this.canUpdateMine) {
            this.canUpdateMine = false;
            GameController_1.default.net.send("other", null);
            var timer_1 = setTimeout(function () {
                _this.canUpdateMine = true;
                clearTimeout(timer_1);
            }, 30);
        }
    };
    CollectGeneral.prototype.updateTime = function () {
        if (!GameCenter_1.default.game.timeActive) {
            if (this.ui.label_time.string != this.formatSecond(0)) {
                this.ui.label_time.string = this.formatSecond(0);
            }
            return;
        }
        if (this.ui.label_time.string != this.formatSecond(GameCenter_1.default.game.currentTime)) {
            this.ui.label_time.string = this.formatSecond(GameCenter_1.default.game.currentTime);
            if (GameCenter_1.default.game.currentTime % 3600 == 0 && GameCenter_1.default.game.currentTime > 0) {
                this.updateMine();
            }
        }
    };
    CollectGeneral.prototype.updateBtnGetState = function () {
        var hr = this.getAccumulatedHours();
        if (hr < 6) {
            this.ui.node_get_normal.active = true;
            this.ui.node_get_active.active = false;
        }
        else {
            this.ui.node_get_normal.active = false;
            this.ui.node_get_active.active = true;
        }
    };
    CollectGeneral.prototype.updateChooseIcon = function () {
        this.ui.sprite_icon_mine.spriteFrame = GameCenter_1.default.getCurrentPetChooseIcon();
        this.ui.sprite_icon_partner.spriteFrame = GameCenter_1.default.getCurrentPartnerChooseIcon();
    };
    CollectGeneral.prototype.update = function (dt) {
        if (!this.node.active) {
            return;
        }
        this.updateTime();
    };
    CollectGeneral = __decorate([
        ccclass
    ], CollectGeneral);
    return CollectGeneral;
}(UIBase_1.default));
exports.default = CollectGeneral;

cc._RF.pop();

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/mine/collect/CollectGeneral.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcbWluZVxcY29sbGVjdFxcQ29sbGVjdEdlbmVyYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBQ2xELDBEQUFxRDtBQUNyRCx3REFBbUQ7QUFDbkQsMENBQXFDO0FBQ3JDLCtDQUEwQztBQUMxQyw2RUFBd0U7QUFDeEUscUVBQW9FO0FBQ3BFLDZEQUEyRDtBQUVuRCxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUdsQztJQUE0QyxrQ0FBTTtJQUFsRDtRQUFBLHFFQThSQztRQXpSRyxtQkFBYSxHQUFZLElBQUksQ0FBQzs7SUF5UmxDLENBQUM7SUF2UkcsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsNEJBQWtCLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMseUJBQXlCLENBQUMsWUFBWSxDQUFDLHNCQUFZLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQVMsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixFQUFFLENBQUMs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OFJqRDtrQkE5Um9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUNlbnRlciBmcm9tIFwiLi4vLi4vLi4vZGF0YS9HYW1lQ2VudGVyXCI7XHJcbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vLi4vLi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IEFzc2V0c01uZyBmcm9tIFwiLi4vLi4vLi4vbWFuYWdlci9Bc3NldHNNbmdcIjtcclxuaW1wb3J0IFVJQmFzZSBmcm9tIFwiLi4vLi4vdWkvVUlCYXNlXCI7XHJcbmltcG9ydCBQYXJ0aWNsZUNvaW4gZnJvbSBcIi4vUGFydGljbGVDb2luXCI7XHJcbmltcG9ydCBEYXRhQ29sbGVjdEdlbmVyYWwgZnJvbSBcIi4uLy4uLy4uL2RhdGEvc2NlbmUvRGF0YUNvbGxlY3RHZW5lcmFsXCI7XHJcbmltcG9ydCB7IEFjdGlvblRyYW5zaXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL0FjdGlvblRyYW5zaXRpb25cIjtcclxuaW1wb3J0IHsgTWFpbkV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvY29uc3QvRXZlbnRDb25zdFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGVjdEdlbmVyYWwgZXh0ZW5kcyBVSUJhc2Uge1xyXG5cclxuICAgIHVpOiBEYXRhQ29sbGVjdEdlbmVyYWw7XHJcbiAgICBwYXJ0aWNsZUNvaW46IFBhcnRpY2xlQ29pbjtcclxuXHJcbiAgICBjYW5VcGRhdGVNaW5lOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBvblVJTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChEYXRhQ29sbGVjdEdlbmVyYWwpO1xyXG4gICAgICAgIHRoaXMucGFydGljbGVDb2luID0gdGhpcy51aS5ub2RlX2NvaW5fcGFydGljbGVfaG9sZGVyLmFkZENvbXBvbmVudChQYXJ0aWNsZUNvaW4pO1xyXG4gICAgICAgIHRoaXMudmlld1Jlc2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KE1haW5FdmVudC5HRVRfUE9JTlQsIHRoaXMub25HZXRQb2ludCk7XHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoTWFpbkV2ZW50Lk1JTkVfR0VORVJBTF9VUERBVEUsIHRoaXMub25NaW5lVXBkYXRlKTtcclxuICAgICAgICB0aGlzLm9uUmVnaXN0ZXJFdmVudCh0aGlzLnVpLmJ0bl9nZXQsIHRoaXMub25CdG5HZXRDbGljaywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5kYXRhUmVzZXQoKTtcclxuICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfU0hPVywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1pbmUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNob29zZUljb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkhpZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51blJlZ2lzdGVyRXZlbnQodGhpcy51aS5idG5fZ2V0LCB0aGlzLm9uQnRuR2V0Q2xpY2ssIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHZpZXdSZXNldCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldFJvYWRUaGVtZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0UGV0U3BpbmVUaGVtZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0UGFydG5lclNwaW5lVGhlbWUoKTtcclxuICAgICAgICB0aGlzLnJvYWRBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMucGV0QWN0aXZlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnBhcnRuZXJBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuY29pbkFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5taW5lVGlwSGlkZSgpO1xyXG4gICAgICAgIHRoaXMudWkubGFiZWxfdGltZS5zdHJpbmcgPSBcIjAwOjAwOjAwXCI7XHJcbiAgICAgICAgdGhpcy51aS5idG5fZ2V0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudWkuYnRuX2dldC5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLnVpLm5vZGVfY29pbl9sZXZlbF9ob2xkZXIub3BhY2l0eSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YVJlc2V0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0R29sZFBvaW50KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTbGl2ZXJQb2ludCgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlV2FyZWhvdXNlUG9pbnQoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZU1vbmV5UGlsZSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQnRuR2V0U3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBtaW5lQW5pUGxheSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvYWRBbmlQbGF5KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wZXRSdW5BbmlQbGF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFydG5lclJ1bkFuaVBsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5jb2luUnVuQW5pUGxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1pbmVUaXBTaG93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcm9hZEFjdGl2ZShzdGF0ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpLnNwaW5lX3JvYWQubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMudWkuc3BpbmVfcm9hZC5ub2RlLmFjdGl2ZSA9IHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHJvYWRBbmlQbGF5KGNhbGxCYWNrPzogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvYWRBY3RpdmUoKTtcclxuICAgICAgICB0aGlzLnVpLnNwaW5lX3JvYWQubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudWkuc3BpbmVfcm9hZC5zZXRBbmltYXRpb24oMCwgXCJydW5fb3BcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51aS5zcGluZV9yb2FkLmFkZEFuaW1hdGlvbigwLCBcInJ1bl9hY3Rpb25cIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMSksXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudWkuYnRuX2dldC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51aS5idG5fZ2V0LnJ1bkFjdGlvbihjYy5mYWRlSW4oLjIpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudWkubm9kZV9jb2luX2xldmVsX2hvbGRlci5ydW5BY3Rpb24oY2MuZmFkZUluKC4yKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbEJhY2spIGNhbGxCYWNrKCk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJvYWRUaGVtZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgaWQgPSBHYW1lQ2VudGVyLmdhbWUubWluZVNlbGVjdElEO1xyXG4gICAgICAgIGxldCBuYW1lID0gR2FtZUNlbnRlci5nYW1lLm1pbmVSb2FkTmFtZVtpZF07XHJcbiAgICAgICAgdGhpcy51aS5zcGluZV9yb2FkLnNrZWxldG9uRGF0YSA9IEFzc2V0c01uZy5nZXRBc3NldHMoYCR7bmFtZX0uc3BpbmVgKTtcclxuICAgIH1cclxuXHJcbiAgICBwZXRBY3RpdmUoc3RhdGU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51aS5zcGluZV9wZXQubm9kZS5hY3RpdmUgPSBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBwZXRSdW5BbmlQbGF5KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGV0QWN0aXZlKCk7XHJcbiAgICAgICAgdGhpcy51aS5zcGluZV9wZXQuc2V0QW5pbWF0aW9uKDAsIGBydW5fcGF0Y2hfMDJgLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQZXRTcGluZVRoZW1lKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBuYW1lID0gR2FtZUNlbnRlci5nYW1lLmdldFBldEJvZHlUaGVtZU5hbWUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wZXRBY3RpdmUoKTtcclxuICAgICAgICB0aGlzLnVpLnNwaW5lX3BldC5za2VsZXRvbkRhdGEgPSBBc3NldHNNbmcuZ2V0QXNzZXRzKGAke25hbWV9LnNwaW5lYCk7XHJcbiAgICAgICAgdGhpcy5zZXRQZXRTa2luKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGV0U2tpbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpLnNwaW5lX3BldC5zZXRTa2luKEdhbWVDZW50ZXIuZ2FtZS5nZXRQZXRCb2R5U2tpbk5hbWUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFydG5lckFjdGl2ZShzdGF0ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpLnNwaW5lX3BhcnRuZXIubm9kZS5hY3RpdmUgPSBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJ0bmVyUnVuQW5pUGxheSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhcnRuZXJBY3RpdmUoKTtcclxuICAgICAgICB0aGlzLnVpLnNwaW5lX3BhcnRuZXIuc2V0QW5pbWF0aW9uKDAsIGBydW5fcGF0Y2hfMDJgLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQYXJ0bmVyU3BpbmVUaGVtZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbmFtZSA9IEdhbWVDZW50ZXIuZ2FtZS5nZXRQYXJ0bmVyQm9keVRoZW1lTmFtZSgpO1xyXG4gICAgICAgIHRoaXMucGFydG5lckFjdGl2ZSgpO1xyXG4gICAgICAgIHRoaXMudWkuc3BpbmVfcGFydG5lci5za2VsZXRvbkRhdGEgPSBBc3NldHNNbmcuZ2V0QXNzZXRzKGAke25hbWV9LnNwaW5lYCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29pbkFjdGl2ZShzdGF0ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpLnNwaW5lX2NvaW4ubm9kZS5hY3RpdmUgPSBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb2luUnVuQW5pUGxheSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNvaW5BY3RpdmUoKTtcclxuICAgICAgICB0aGlzLnVpLnNwaW5lX2NvaW4uc2V0QW5pbWF0aW9uKDAsIGBydW5fcGF0Y2hfMDJgLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBtaW5lVGlwU2hvdygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpLm5vZGVfbWluZV90aXBfaG9sZGVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51aS5ub2RlX21pbmVfdGlwX2hvbGRlci5ydW5BY3Rpb24oY2MuZmFkZUluKC4zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWluZVRpcEhpZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51aS5ub2RlX21pbmVfdGlwX2hvbGRlci5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLnVpLm5vZGVfbWluZV90aXBfaG9sZGVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRpbWVOdW1iZXJDaGFuZ2UobnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBudW0gPCAxMCA/IGAwJHtudW19YCA6IGAke251bX1gO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdFNlY29uZChzZWNzKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgaHIgPSBNYXRoLmZsb29yKHNlY3MgLyAzNjAwKTtcclxuICAgICAgICBsZXQgbWluID0gTWF0aC5mbG9vcigoc2VjcyAtIChociAqIDM2MDApKSAvIDYwKTtcclxuICAgICAgICBsZXQgc2VjID0gc2VjcyAtIChociAqIDM2MDApIC0gKG1pbiAqIDYwKTtcclxuICAgICAgICByZXR1cm4gYCAke3RoaXMudGltZU51bWJlckNoYW5nZShocil9OiR7dGhpcy50aW1lTnVtYmVyQ2hhbmdlKG1pbil9OiR7dGhpcy50aW1lTnVtYmVyQ2hhbmdlKHNlYyl9YDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY2N1bXVsYXRlZEhvdXJzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoR2FtZUNlbnRlci5nYW1lLmN1cnJlbnRUaW1lIC8gMzYwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0R29sZFBvaW50KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudWkubGFiZWxfZ29sZC5zdHJpbmcgPSBgJHtHYW1lQ2VudGVyLmdhbWUuZ29sZFBvaW50fWA7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2xpdmVyUG9pbnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51aS5sYWJlbF9zbGl2ZXIuc3RyaW5nID0gYCR7R2FtZUNlbnRlci5nYW1lLnNpbHZlclBvaW50fWA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUG9pbnRzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0R29sZFBvaW50KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTbGl2ZXJQb2ludCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVdhcmVob3VzZVBvaW50KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudWkubGFiZWxfY29pbl90eHQuc3RyaW5nID0gYCR7R2FtZUNlbnRlci5nYW1lLndhcmVob3VzZVBvaW50fWA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTW9uZXlQaWxlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgbGV2ZWwgPSB0aGlzLmdldE1vbmV5UGlsZUxldmVsKCk7XHJcbiAgICAgICAgbGV0IG5vZGVBcnIgPSB0aGlzLnVpLm5vZGVfY29pbl9sZXZlbF9ob2xkZXIuY2hpbGRyZW47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZUFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgIG5vZGVBcnJbaV0uYWN0aXZlID0gaSA9PSBsZXZlbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldE1vbmV5UGlsZUxldmVsKCk6IG51bWJlciB7XHJcblxyXG4gICAgICAgIGxldCBociA9IHRoaXMuZ2V0QWNjdW11bGF0ZWRIb3VycygpO1xyXG4gICAgICAgIGxldCBsZXZlbCA9IDA7XHJcblxyXG4gICAgICAgIGlmIChociA8IDYpIHtcclxuICAgICAgICAgICAgbGV2ZWwgPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaHIgPj0gNiAmJiBociA8IDEyKSB7XHJcbiAgICAgICAgICAgIGxldmVsID0gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKGhyID49IDEyKSB7XHJcbiAgICAgICAgICAgIGxldmVsID0gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBsZXZlbDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5HZXRDbGljaygpOiB2b2lkIHtcclxuICAgICAgICBBY3Rpb25UcmFuc2l0aW9uLmJ0bkJvdW5jZSh0aGlzLnVpLmJ0bl9nZXQpO1xyXG4gICAgICAgIEdhbWVDb250cm9sbGVyLm5ldC5zZW5kKFwiYWN0aW9uXCIsIG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uR2V0UG9pbnQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGxldCBnb2xkTnVtID0gTnVtYmVyKEdhbWVDZW50ZXIuZ2FtZS5jb2xsZWN0LmdvbGQpO1xyXG4gICAgICAgIGxldCBzbGl2ZXJOdW0gPSBOdW1iZXIoR2FtZUNlbnRlci5nYW1lLmNvbGxlY3Quc2lsdmVyKTtcclxuXHJcbiAgICAgICAgZ29sZE51bSA9IGdvbGROdW0gPD0gMzAgPyBnb2xkTnVtIDogMzA7XHJcbiAgICAgICAgc2xpdmVyTnVtID0gc2xpdmVyTnVtIDw9IDMwID8gc2xpdmVyTnVtIDogMzA7XHJcblxyXG4gICAgICAgIHRoaXMucGFydGljbGVDb2luLmNyZWF0ZUNvaW5zKGNjLnYyKDAsIC01MTApLCBnb2xkTnVtLCBzbGl2ZXJOdW0sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQb2ludHMoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25NaW5lVXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudXBkYXRlV2FyZWhvdXNlUG9pbnQoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJ0bkdldFN0YXRlKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVNb25leVBpbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVNaW5lKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jYW5VcGRhdGVNaW5lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVXBkYXRlTWluZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBHYW1lQ29udHJvbGxlci5uZXQuc2VuZChcIm90aGVyXCIsIG51bGwpO1xyXG4gICAgICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5VcGRhdGVNaW5lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcclxuICAgICAgICAgICAgfSwgMzApXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUaW1lKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAoIUdhbWVDZW50ZXIuZ2FtZS50aW1lQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVpLmxhYmVsX3RpbWUuc3RyaW5nICE9IHRoaXMuZm9ybWF0U2Vjb25kKDApKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpLmxhYmVsX3RpbWUuc3RyaW5nID0gdGhpcy5mb3JtYXRTZWNvbmQoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudWkubGFiZWxfdGltZS5zdHJpbmcgIT0gdGhpcy5mb3JtYXRTZWNvbmQoR2FtZUNlbnRlci5nYW1lLmN1cnJlbnRUaW1lKSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy51aS5sYWJlbF90aW1lLnN0cmluZyA9IHRoaXMuZm9ybWF0U2Vjb25kKEdhbWVDZW50ZXIuZ2FtZS5jdXJyZW50VGltZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoR2FtZUNlbnRlci5nYW1lLmN1cnJlbnRUaW1lICUgMzYwMCA9PSAwICYmIEdhbWVDZW50ZXIuZ2FtZS5jdXJyZW50VGltZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTWluZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQnRuR2V0U3RhdGUoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGxldCBociA9IHRoaXMuZ2V0QWNjdW11bGF0ZWRIb3VycygpO1xyXG5cclxuICAgICAgICBpZiAoaHIgPCA2KSB7XHJcbiAgICAgICAgICAgIHRoaXMudWkubm9kZV9nZXRfbm9ybWFsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudWkubm9kZV9nZXRfYWN0aXZlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudWkubm9kZV9nZXRfbm9ybWFsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVpLm5vZGVfZ2V0X2FjdGl2ZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ2hvb3NlSWNvbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpLnNwcml0ZV9pY29uX21pbmUuc3ByaXRlRnJhbWUgPSBHYW1lQ2VudGVyLmdldEN1cnJlbnRQZXRDaG9vc2VJY29uKCk7XHJcbiAgICAgICAgdGhpcy51aS5zcHJpdGVfaWNvbl9wYXJ0bmVyLnNwcml0ZUZyYW1lID0gR2FtZUNlbnRlci5nZXRDdXJyZW50UGFydG5lckNob29zZUljb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lKCk7XHJcbiAgICB9XHJcblxyXG59Il19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/scene/MainGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d49ey3UNdNHILW3a7N49Vl', 'MainGame');
// script/controllers/scene/MainGame.ts

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
var GameController_1 = require("../../GameController");
var GameCenter_1 = require("../../data/GameCenter");
var EventMng_1 = require("../../manager/EventMng");
var LangMng_1 = require("../../manager/LangMng");
var EventConst_1 = require("../../data/const/EventConst");
var ViewZorder_1 = require("../../data/const/ViewZorder");
var DataGame_1 = require("../../data/scene/DataGame");
var MineMng_1 = require("../mine/MineMng");
var MineCollect_1 = require("../mine/MineCollect");
var UIBase_1 = require("../ui/UIBase");
var UIHelp_1 = require("../ui/UIHelp");
var UIInfo_1 = require("../ui/UIInfo");
var UILoading_1 = require("../ui/UILoading");
var UILoadTip_1 = require("../ui/UILoadTip");
var UIUpgradePanel_1 = require("../ui/UIUpgradePanel");
var UISkinPop_1 = require("../ui/UISkinPop");
var ccclass = cc._decorator.ccclass;
var MainGame = /** @class */ (function (_super) {
    __extends(MainGame, _super);
    function MainGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui = null;
        _this.pages = [];
        _this._prePageIndex = -1;
        _this._currentPageIndex = 0;
        return _this;
    }
    MainGame.prototype.onUILoad = function () {
        this.ui = this.node.addComponent(DataGame_1.default);
        this.mineMng = this.ui.mine_mng_holder.addComponent(MineMng_1.default);
        this.mineCollect = this.ui.mine_holder.addComponent(MineCollect_1.default);
        this.upgradePanel = this.ui.upgrade_holder.addComponent(UIUpgradePanel_1.default);
        this.infoPop = this.ui.info_pop_holder.addComponent(UIInfo_1.default);
        this.loadTip = this.ui.load_tip.addComponent(UILoadTip_1.default);
        this.skinPop = this.ui.skin_pop_holder.addComponent(UISkinPop_1.default);
        this.viewInit();
    };
    MainGame.prototype.onShow = function () {
        this.initEvent(EventConst_1.MainEvent.ENTER_MINE_COLLECT, this.onEnterMineCollect);
        this.initEvent(EventConst_1.MainEvent.ENTER_MINE_MNG, this.onEnterMineMng);
        this.initEvent(EventConst_1.MainEvent.MESSAGE_SHOW, this.onMessageShow);
        this.initEvent(EventConst_1.MainEvent.PET_UPGRADE_REQ, this.onPetUpgradeReq);
        this.initEvent(EventConst_1.MainEvent.PET_UPGRADE, this.onPetUpgrade);
        this.initEvent(EventConst_1.MainEvent.OPEN_SKIN_POP_REQ, this.onOpenSkinPopReq);
        this.initEvent(EventConst_1.MainEvent.OPEN_SKIN_POP, this.onOpenSkinPop);
        this.initEvent(EventConst_1.MainEvent.MINE_CHANGE_REQ, this.onMineChangeReq);
        this.onRegisterEvent(this.ui.btn_close, this.onBtnCloseClick, this);
        this.onRegisterEvent(this.ui.btn_info, this.onBtnInfoClick, this);
        UIHelp_1.default.HideUI(UILoading_1.default);
        this.switchPage(false);
    };
    MainGame.prototype.viewInit = function () {
        this.btnsSetZIndex();
        this.createPages();
        this.setVecStr();
    };
    MainGame.prototype.createPages = function () {
        this.pages.push(this.mineMng);
        this.pages.push(this.mineCollect);
    };
    MainGame.prototype.switchPage = function (aniState) {
        if (this.prePageIndex == this.currentPageIndex) {
            return;
        }
        if (this._prePageIndex != -1) {
            this.pages[this.prePageIndex].hide(aniState);
        }
        this.pages[this.currentPageIndex].show(aniState);
    };
    MainGame.prototype.btnsSetZIndex = function () {
        var val = ViewZorder_1.ViewZorder.Btn;
        this.ui.btn_close.zIndex = val;
        this.ui.btn_info.zIndex = val;
    };
    MainGame.prototype.btnClosePosReset = function (pageIndex) {
        var pos = cc.v2();
        switch (pageIndex) {
            case 0:
                pos = cc.v2(279, 495);
                break;
            case 1:
                pos = cc.v2(279, 590);
                break;
        }
        this.ui.btn_close.setPosition(pos);
    };
    MainGame.prototype.btnInfoPosReset = function (pageIndex) {
        var pos = cc.v2();
        switch (pageIndex) {
            case 0:
                pos = cc.v2(185, 495);
                break;
            case 1:
                pos = cc.v2(185, 590);
                break;
        }
        this.ui.btn_info.setPosition(pos);
    };
    MainGame.prototype.onPageSwitch = function (pageIndex) {
        this.prePageIndex = this.currentPageIndex;
        this.currentPageIndex = pageIndex;
        this.switchPage(true);
        this.btnClosePosReset(pageIndex);
        this.btnInfoPosReset(pageIndex);
    };
    MainGame.prototype.onEnterMineCollect = function (msg) {
        this.loadTip.hide();
        if (msg.state == 0) {
            this.onPageSwitch(1);
            this.mineCollect.collectGeneral.updateMine();
        }
        else {
            this.onMessageShow({
                type: 2,
                content: LangMng_1.default.getTxt("S_9102"),
                autoClose: true
            });
        }
    };
    MainGame.prototype.onEnterMineMng = function () {
        this.onPageSwitch(0);
    };
    MainGame.prototype.onMessageShow = function (config) {
        UIHelp_1.default.ShowDialog(config);
    };
    MainGame.prototype.onBtnCloseClick = function () {
        GameController_1.default.net.send("close", null);
    };
    MainGame.prototype.onBtnInfoClick = function () {
        this.infoPop.show();
    };
    MainGame.prototype.onMineChangeReq = function () {
        this.loadTip.show();
        GameController_1.default.net.send("use", {
            petID: GameCenter_1.default.game.mineSelectID,
            elfID: GameCenter_1.default.game.partnerSelectID,
        });
    };
    MainGame.prototype.onPetUpgradeReq = function (data) {
        this.loadTip.show();
        GameController_1.default.net.send("upgrade", {
            petID: data.id,
        });
    };
    MainGame.prototype.onPetUpgrade = function (msg) {
        var _this = this;
        this.loadTip.hide();
        var state = msg.isUpgrade;
        switch (state) {
            case 0:
            case 1:
                this.upgradePanel.show(msg.petID);
                var timer_1 = setTimeout(function () {
                    _this.upgradePanel.hide(function () {
                        EventMng_1.default.emit("PET_UPGRADE_CHANGE", {
                            state: state,
                            id: msg.petID,
                        });
                    });
                    clearTimeout(timer_1);
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
        GameCenter_1.default.game.mineLevel[msg.petID] = msg.level;
        this.mineMng.con.page1.slider.items[msg.petID].setLevel(msg.petID, msg.level);
    };
    MainGame.prototype.onUpgradeError = function (str) {
        EventMng_1.default.emit(EventConst_1.MainEvent.MESSAGE_SHOW, {
            type: 2,
            content: LangMng_1.default.getTxt(str),
            autoClose: true,
        });
    };
    MainGame.prototype.onOpenSkinPopReq = function (msg) {
        GameController_1.default.net.send("getbag", {
            petID: msg.id,
            bag: "skin",
        });
    };
    MainGame.prototype.onOpenSkinPop = function (msg) {
        this.skinPop.show(msg);
    };
    Object.defineProperty(MainGame.prototype, "currentPageIndex", {
        get: function () {
            return this._currentPageIndex;
        },
        set: function (value) {
            this._currentPageIndex = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainGame.prototype, "prePageIndex", {
        get: function () {
            return this._prePageIndex;
        },
        set: function (value) {
            this._prePageIndex = value;
        },
        enumerable: false,
        configurable: true
    });
    MainGame.prototype.setVecStr = function () {
        this.ui.ver_str.node.zIndex = ViewZorder_1.ViewZorder.Btn;
        this.ui.ver_str.string = "v1.0.1";
    };
    MainGame = __decorate([
        ccclass
    ], MainGame);
    return MainGame;
}(UIBase_1.default));
exports.default = MainGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcc2NlbmVcXE1haW5HYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFrRDtBQUNsRCxvREFBK0M7QUFDL0MsbURBQThDO0FBQzlDLGlEQUE0QztBQUM1QywwREFBd0Q7QUFDeEQsMERBQXlEO0FBQ3pELHNEQUFpRDtBQUNqRCwyQ0FBc0M7QUFDdEMsbURBQThDO0FBQzlDLHVDQUFrQztBQUNsQyx1Q0FBa0M7QUFDbEMsdUNBQWtDO0FBQ2xDLDZDQUF3QztBQUN4Qyw2Q0FBd0M7QUFDeEMsdURBQWtEO0FBQ2xELDZDQUF3QztBQUVoQyxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUdsQztJQUFzQyw0QkFBTTtJQUE1QztRQUFBLHFFQTBPQztRQXpPRyxRQUFFLEdBQWEsSUFBSSxDQUFDO1FBT1osV0FBSyxHQUFVLEVBQUUsQ0FBQztRQUNsQixtQkFBYSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzNCLHVCQUFpQixHQUFXLENBQUMsQ0FBQzs7SUFnTzFDLENBQUM7SUE5TkcsMkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLGlCQUFPLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsd0JBQWMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxP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QztRQUNuQyxDQUFDOzs7T0FSQTtJQUVELHNCQUFJLGtDQUFZO2FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7YUFNRCxVQUFpQixLQUFhO1lBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7OztPQVJBO0lBVUQsNEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsdUJBQVUsQ0FBQyxHQUFHLENBQUM7UUFDN0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztJQUN0QyxDQUFDO0lBeE9nQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBME81QjtJQUFELGVBQUM7Q0ExT0QsQUEwT0MsQ0ExT3FDLGdCQUFNLEdBME8zQztrQkExT29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4uLy4uL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBHYW1lQ2VudGVyIGZyb20gXCIuLi8uLi9kYXRhL0dhbWVDZW50ZXJcIjtcclxuaW1wb3J0IEV2ZW50TW5nIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0V2ZW50TW5nXCI7XHJcbmltcG9ydCBMYW5nTW5nIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0xhbmdNbmdcIjtcclxuaW1wb3J0IHsgTWFpbkV2ZW50IH0gZnJvbSBcIi4uLy4uL2RhdGEvY29uc3QvRXZlbnRDb25zdFwiO1xyXG5pbXBvcnQgeyBWaWV3Wm9yZGVyIH0gZnJvbSBcIi4uLy4uL2RhdGEvY29uc3QvVmlld1pvcmRlclwiO1xyXG5pbXBvcnQgRGF0YUdhbWUgZnJvbSBcIi4uLy4uL2RhdGEvc2NlbmUvRGF0YUdhbWVcIjtcclxuaW1wb3J0IE1pbmVNbmcgZnJvbSBcIi4uL21pbmUvTWluZU1uZ1wiO1xyXG5pbXBvcnQgTWluZUNvbGxlY3QgZnJvbSBcIi4uL21pbmUvTWluZUNvbGxlY3RcIjtcclxuaW1wb3J0IFVJQmFzZSBmcm9tIFwiLi4vdWkvVUlCYXNlXCI7XHJcbmltcG9ydCBVSUhlbHAgZnJvbSBcIi4uL3VpL1VJSGVscFwiO1xyXG5pbXBvcnQgVUlJbmZvIGZyb20gXCIuLi91aS9VSUluZm9cIjtcclxuaW1wb3J0IFVJTG9hZGluZyBmcm9tIFwiLi4vdWkvVUlMb2FkaW5nXCI7XHJcbmltcG9ydCBVSUxvYWRUaXAgZnJvbSBcIi4uL3VpL1VJTG9hZFRpcFwiO1xyXG5pbXBvcnQgVUlVcGdyYWRlUGFuZWwgZnJvbSBcIi4uL3VpL1VJVXBncmFkZVBhbmVsXCI7XHJcbmltcG9ydCBVSVNraW5Qb3AgZnJvbSBcIi4uL3VpL1VJU2tpblBvcFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbkdhbWUgZXh0ZW5kcyBVSUJhc2Uge1xyXG4gICAgdWk6IERhdGFHYW1lID0gbnVsbDtcclxuICAgIG1pbmVNbmc6IE1pbmVNbmc7XHJcbiAgICBtaW5lQ29sbGVjdDogTWluZUNvbGxlY3Q7XHJcbiAgICBsb2FkVGlwOiBVSUxvYWRUaXA7XHJcbiAgICB1cGdyYWRlUGFuZWw6IFVJVXBncmFkZVBhbmVsO1xyXG4gICAgaW5mb1BvcDogVUlJbmZvO1xyXG4gICAgc2tpblBvcDogVUlTa2luUG9wO1xyXG4gICAgcHJpdmF0ZSBwYWdlczogYW55W10gPSBbXTtcclxuICAgIHByaXZhdGUgX3ByZVBhZ2VJbmRleDogbnVtYmVyID0gLTE7XHJcbiAgICBwcml2YXRlIF9jdXJyZW50UGFnZUluZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uVUlMb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudWkgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KERhdGFHYW1lKTtcclxuICAgICAgICB0aGlzLm1pbmVNbmcgPSB0aGlzLnVpLm1pbmVfbW5nX2hvbGRlci5hZGRDb21wb25lbnQoTWluZU1uZyk7XHJcbiAgICAgICAgdGhpcy5taW5lQ29sbGVjdCA9IHRoaXMudWkubWluZV9ob2xkZXIuYWRkQ29tcG9uZW50KE1pbmVDb2xsZWN0KTtcclxuICAgICAgICB0aGlzLnVwZ3JhZGVQYW5lbCA9IHRoaXMudWkudXBncmFkZV9ob2xkZXIuYWRkQ29tcG9uZW50KFVJVXBncmFkZVBhbmVsKTtcclxuICAgICAgICB0aGlzLmluZm9Qb3AgPSB0aGlzLnVpLmluZm9fcG9wX2hvbGRlci5hZGRDb21wb25lbnQoVUlJbmZvKTtcclxuICAgICAgICB0aGlzLmxvYWRUaXAgPSB0aGlzLnVpLmxvYWRfdGlwLmFkZENvbXBvbmVudChVSUxvYWRUaXApO1xyXG4gICAgICAgIHRoaXMuc2tpblBvcCA9IHRoaXMudWkuc2tpbl9wb3BfaG9sZGVyLmFkZENvbXBvbmVudChVSVNraW5Qb3ApO1xyXG4gICAgICAgIHRoaXMudmlld0luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoTWFpbkV2ZW50LkVOVEVSX01JTkVfQ09MTEVDVCwgdGhpcy5vbkVudGVyTWluZUNvbGxlY3QpO1xyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KE1haW5FdmVudC5FTlRFUl9NSU5FX01ORywgdGhpcy5vbkVudGVyTWluZU1uZyk7XHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoTWFpbkV2ZW50Lk1FU1NBR0VfU0hPVywgdGhpcy5vbk1lc3NhZ2VTaG93KTtcclxuICAgICAgICB0aGlzLmluaXRFdmVudChNYWluRXZlbnQuUEVUX1VQR1JBREVfUkVRLCB0aGlzLm9uUGV0VXBncmFkZVJlcSk7XHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoTWFpbkV2ZW50LlBFVF9VUEdSQURFLCB0aGlzLm9uUGV0VXBncmFkZSk7XHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoTWFpbkV2ZW50Lk9QRU5fU0tJTl9QT1BfUkVRLCB0aGlzLm9uT3BlblNraW5Qb3BSZXEpO1xyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KE1haW5FdmVudC5PUEVOX1NLSU5fUE9QLCB0aGlzLm9uT3BlblNraW5Qb3ApO1xyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KE1haW5FdmVudC5NSU5FX0NIQU5HRV9SRVEsIHRoaXMub25NaW5lQ2hhbmdlUmVxKVxyXG4gICAgICAgIHRoaXMub25SZWdpc3RlckV2ZW50KHRoaXMudWkuYnRuX2Nsb3NlLCB0aGlzLm9uQnRuQ2xvc2VDbGljaywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblJlZ2lzdGVyRXZlbnQodGhpcy51aS5idG5faW5mbywgdGhpcy5vbkJ0bkluZm9DbGljaywgdGhpcyk7XHJcbiAgICAgICAgVUlIZWxwLkhpZGVVSShVSUxvYWRpbmcpO1xyXG4gICAgICAgIHRoaXMuc3dpdGNoUGFnZShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5idG5zU2V0WkluZGV4KCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVQYWdlcygpO1xyXG4gICAgICAgIHRoaXMuc2V0VmVjU3RyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlUGFnZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYWdlcy5wdXNoKHRoaXMubWluZU1uZyk7XHJcbiAgICAgICAgdGhpcy5wYWdlcy5wdXNoKHRoaXMubWluZUNvbGxlY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaFBhZ2UoYW5pU3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJlUGFnZUluZGV4ID09IHRoaXMuY3VycmVudFBhZ2VJbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fcHJlUGFnZUluZGV4ICE9IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZXNbdGhpcy5wcmVQYWdlSW5kZXhdLmhpZGUoYW5pU3RhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlSW5kZXhdLnNob3coYW5pU3RhdGUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBidG5zU2V0WkluZGV4KCk6IHZvaWQge1xyXG4gICAgICAgIGxldCB2YWwgPSBWaWV3Wm9yZGVyLkJ0bjtcclxuICAgICAgICB0aGlzLnVpLmJ0bl9jbG9zZS56SW5kZXggPSB2YWw7XHJcbiAgICAgICAgdGhpcy51aS5idG5faW5mby56SW5kZXggPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgYnRuQ2xvc2VQb3NSZXNldChwYWdlSW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgcG9zOiBjYy5WZWMyID0gY2MudjIoKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChwYWdlSW5kZXgpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgcG9zID0gY2MudjIoMjc5LCA0OTUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHBvcyA9IGNjLnYyKDI3OSwgNTkwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51aS5idG5fY2xvc2Uuc2V0UG9zaXRpb24ocG9zKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYnRuSW5mb1Bvc1Jlc2V0KHBhZ2VJbmRleDogbnVtYmVyKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGxldCBwb3M6IGNjLlZlYzIgPSBjYy52MigpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHBhZ2VJbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBwb3MgPSBjYy52MigxODUsIDQ5NSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcG9zID0gY2MudjIoMTg1LCA1OTApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVpLmJ0bl9pbmZvLnNldFBvc2l0aW9uKHBvcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uUGFnZVN3aXRjaChwYWdlSW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucHJlUGFnZUluZGV4ID0gdGhpcy5jdXJyZW50UGFnZUluZGV4O1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2VJbmRleCA9IHBhZ2VJbmRleDtcclxuICAgICAgICB0aGlzLnN3aXRjaFBhZ2UodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5idG5DbG9zZVBvc1Jlc2V0KHBhZ2VJbmRleCk7XHJcbiAgICAgICAgdGhpcy5idG5JbmZvUG9zUmVzZXQocGFnZUluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVudGVyTWluZUNvbGxlY3QobXNnKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZFRpcC5oaWRlKCk7XHJcbiAgICAgICAgaWYgKG1zZy5zdGF0ZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25QYWdlU3dpdGNoKDEpO1xyXG4gICAgICAgICAgICB0aGlzLm1pbmVDb2xsZWN0LmNvbGxlY3RHZW5lcmFsLnVwZGF0ZU1pbmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9uTWVzc2FnZVNob3coe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogMixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IExhbmdNbmcuZ2V0VHh0KFwiU185MTAyXCIpLFxyXG4gICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uRW50ZXJNaW5lTW5nKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25QYWdlU3dpdGNoKDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTWVzc2FnZVNob3coY29uZmlnKTogdm9pZCB7XHJcbiAgICAgICAgVUlIZWxwLlNob3dEaWFsb2coY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkNsb3NlQ2xpY2soKTogdm9pZCB7XHJcbiAgICAgICAgR2FtZUNvbnRyb2xsZXIubmV0LnNlbmQoXCJjbG9zZVwiLCBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkluZm9DbGljaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmluZm9Qb3Auc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTWluZUNoYW5nZVJlcSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvYWRUaXAuc2hvdygpO1xyXG4gICAgICAgIEdhbWVDb250cm9sbGVyLm5ldC5zZW5kKFwidXNlXCIsIHtcclxuICAgICAgICAgICAgcGV0SUQ6IEdhbWVDZW50ZXIuZ2FtZS5taW5lU2VsZWN0SUQsXHJcbiAgICAgICAgICAgIGVsZklEOiBHYW1lQ2VudGVyLmdhbWUucGFydG5lclNlbGVjdElELFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUGV0VXBncmFkZVJlcShkYXRhKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2FkVGlwLnNob3coKTtcclxuICAgICAgICBHYW1lQ29udHJvbGxlci5uZXQuc2VuZChcInVwZ3JhZGVcIiwge1xyXG4gICAgICAgICAgICBwZXRJRDogZGF0YS5pZCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblBldFVwZ3JhZGUobXNnKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZFRpcC5oaWRlKCk7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZSA9IG1zZy5pc1VwZ3JhZGU7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZ3JhZGVQYW5lbC5zaG93KG1zZy5wZXRJRCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBncmFkZVBhbmVsLmhpZGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFdmVudE1uZy5lbWl0KFwiUEVUX1VQR1JBREVfQ0hBTkdFXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBtc2cucGV0SUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uVXBncmFkZUVycm9yKFwiVF8xMDhcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vblVwZ3JhZGVFcnJvcihcIlRfMTA5XCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHRoaXMub25VcGdyYWRlRXJyb3IoXCJUXzEwN1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR2FtZUNlbnRlci5nYW1lLm1pbmVMZXZlbFttc2cucGV0SURdID0gbXNnLmxldmVsO1xyXG4gICAgICAgIHRoaXMubWluZU1uZy5jb24ucGFnZTEuc2xpZGVyLml0ZW1zW21zZy5wZXRJRF0uc2V0TGV2ZWwobXNnLnBldElELCBtc2cubGV2ZWwpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblVwZ3JhZGVFcnJvcihzdHIpOiB2b2lkIHtcclxuICAgICAgICBFdmVudE1uZy5lbWl0KE1haW5FdmVudC5NRVNTQUdFX1NIT1csIHtcclxuICAgICAgICAgICAgdHlwZTogMixcclxuICAgICAgICAgICAgY29udGVudDogTGFuZ01uZy5nZXRUeHQoc3RyKSxcclxuICAgICAgICAgICAgYXV0b0Nsb3NlOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uT3BlblNraW5Qb3BSZXEobXNnKTogdm9pZCB7XHJcbiAgICAgICAgR2FtZUNvbnRyb2xsZXIubmV0LnNlbmQoXCJnZXRiYWdcIiwge1xyXG4gICAgICAgICAgICBwZXRJRDogbXNnLmlkLFxyXG4gICAgICAgICAgICBiYWc6IFwic2tpblwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25PcGVuU2tpblBvcChtc2cpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNraW5Qb3Auc2hvdyhtc2cpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjdXJyZW50UGFnZUluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRQYWdlSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByZVBhZ2VJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcmVQYWdlSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGN1cnJlbnRQYWdlSW5kZXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRQYWdlSW5kZXggPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcHJlUGFnZUluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9wcmVQYWdlSW5kZXggPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRWZWNTdHIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51aS52ZXJfc3RyLm5vZGUuekluZGV4ID0gVmlld1pvcmRlci5CdG47XHJcbiAgICAgICAgdGhpcy51aS52ZXJfc3RyLnN0cmluZyA9IFwidjEuMC4xXCI7XHJcbiAgICB9XHJcblxyXG59Il19
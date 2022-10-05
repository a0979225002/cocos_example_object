"use strict";
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
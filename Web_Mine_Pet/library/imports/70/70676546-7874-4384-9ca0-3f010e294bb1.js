"use strict";
cc._RF.push(module, '70676VGeHRDhJygPwEOKUux', 'MineToolBox');
// script/controllers/mine/mng/MineToolBox.ts

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
var EventMng_1 = require("../../../manager/EventMng");
var LangMng_1 = require("../../../manager/LangMng");
var MineSlider_1 = require("./MineSlider");
var ToolComponent_1 = require("./ToolComponent");
var ActionTransition_1 = require("../../../common/ActionTransition");
var EventConst_1 = require("../../../data/const/EventConst");
var UIBase_1 = require("../../ui/UIBase");
var DataMineToolBox_1 = require("../../../data/scene/DataMineToolBox");
var ccclass = cc._decorator.ccclass;
var MineToolBox = /** @class */ (function (_super) {
    __extends(MineToolBox, _super);
    function MineToolBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.controlBts = [];
        _this.introCon = [];
        _this.btnCanClick = false;
        _this.currentToolBtnIndex = -1;
        return _this;
    }
    MineToolBox.prototype.onUILoad = function () {
        this.ui = this.node.addComponent(DataMineToolBox_1.default);
        this.mineSliderCreate();
        this.toolBtnsCreate();
        this.toolIntroConCreate();
    };
    MineToolBox.prototype.onStart = function () {
        this.slider.init();
        this.slider.createSliderList(GameCenter_1.default.game.mineFloorName, GameCenter_1.default.game.mineBodyName);
        this.viewInit();
    };
    MineToolBox.prototype.onShow = function () {
        this.initEvent(EventConst_1.MainEvent.PET_UPGRADE_CHANGE, this.onPetUpgradeChange);
        this.initEvent(EventConst_1.MainEvent.MESSAGE_SHOW, this.onMessageShow);
        this.onRegisterEvent(this.ui.btn_confirm, this.onBtnConfirmClick, this);
        this.slider.show();
        this.slider.arrowBtnsBindOn();
        this.viewReset();
        this.toolBtnsBindOn();
    };
    MineToolBox.prototype.onHide = function () {
        this.unRegisterEvent(this.ui.btn_confirm, this.onBtnConfirmClick, this);
        this.slider.hide();
        this.slider.arrowBtnsBindOff();
        this.toolBtnsBindOff();
    };
    MineToolBox.prototype.viewInit = function () {
        this.controlBts[0].setCount(GameCenter_1.default.game.canCount);
        this.controlBts[0].setTitleTxt(LangMng_1.default.getTxt("T_100"));
        this.controlBts[1].setTitleTxt(LangMng_1.default.getTxt("T_110"));
        this.controlBts[2].setTitleTxt(LangMng_1.default.getTxt("T_111"));
        this.ui.label_item_name.string = '';
        this.levelBarUpdate();
    };
    MineToolBox.prototype.viewReset = function () {
        this.currentToolBtnIndex = -1;
        this.btnCanClick = false;
        this.msgTipShow(LangMng_1.default.getTxt("T_008"));
        this.toolIntroConHide();
        this.ui.node_confirm_active.active = false;
        this.stateBoxHide();
    };
    MineToolBox.prototype.mineSliderCreate = function () {
        this.slider = new MineSlider_1.MineSlider(this.ui, 0, {
            referenceMode: true,
            sliderPageCallBack: this.onSliderPageCallBack.bind(this),
        });
    };
    MineToolBox.prototype.itemCheck = function (autoUpdate) {
        if (autoUpdate === void 0) { autoUpdate = true; }
        var state = false;
        if (this.currentToolBtnIndex < 0) {
            return state;
        }
        if (GameCenter_1.default.game.mineList[this.slider.currentPageIndex] == 0) {
            this.msgTipShow(LangMng_1.default.getTxt("T_009"));
            this.toolIntroConHide();
        }
        else {
            this.msgTipHide();
            this.toolIntroConUpdate(autoUpdate);
            state = true;
        }
        return state;
    };
    MineToolBox.prototype.itemDialogShow = function (str) {
        var _this = this;
        this.ui.node_pet_dialog_holder.active = true;
        this.ui.label_pet_dialog_txt.string = str;
        this.ui.node_pet_dialog_holder.opacity = 255;
        this.ui.node_pet_dialog_holder.stopAllActions();
        this.ui.node_pet_dialog_holder.runAction(cc.sequence(cc.delayTime(3), cc.fadeOut(.2), cc.callFunc(function () {
            _this.ui.node_pet_dialog_holder.active = false;
        })));
    };
    MineToolBox.prototype.toolBtnsCreate = function () {
        for (var i = 0; i < this.ui.node_props_holder.children.length; i++) {
            var node = this.ui.node_props_holder.children[i];
            this.controlBts[i] = new ToolComponent_1.ToolBtn(node, i, this.onToolBtnClick.bind(this));
        }
    };
    MineToolBox.prototype.toolBtnsUpdate = function () {
        this.controlBts[0].setCount(GameCenter_1.default.game.canCount);
    };
    MineToolBox.prototype.toolBtnsBindOn = function () {
        for (var i = 0; i < this.controlBts.length; i++) {
            this.controlBts[i].bindOn();
        }
    };
    MineToolBox.prototype.toolBtnsBindOff = function () {
        for (var i = 0; i < this.controlBts.length; i++) {
            this.controlBts[i].bindOff();
            this.controlBts[i].active(false);
        }
    };
    MineToolBox.prototype.toolBtnSwitch = function (id) {
        if (this.currentToolBtnIndex >= 0) {
            this.controlBts[this.currentToolBtnIndex].active(false);
        }
        this.currentToolBtnIndex = id;
        this.controlBts[this.currentToolBtnIndex].active(true);
        this.btnCanClick = this.itemCheck();
    };
    MineToolBox.prototype.toolIntroConCreate = function () {
        this.introCon[0] = new ToolComponent_1.ToolIntroCon(this.ui.node_intro_con_1, 0, this.canIntroUpdate.bind(this));
        this.introCon[1] = new ToolComponent_1.ToolIntroCon(this.ui.node_intro_con_2, 0, this.canIntroUpdate.bind(this));
        this.introCon[2] = new ToolComponent_1.ToolIntroCon(this.ui.node_intro_con_3, 0, this.canIntroUpdate.bind(this));
    };
    MineToolBox.prototype.toolIntroConHide = function () {
        for (var i = 0; i < this.introCon.length; i++) {
            this.introCon[i].hide();
        }
    };
    MineToolBox.prototype.toolIntroConUpdate = function (autoUpdate) {
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
                    EventMng_1.default.emit(EventConst_1.MainEvent.OPEN_SKIN_POP_REQ, {
                        id: this.slider.currentPageIndex
                    });
                }
                break;
        }
    };
    MineToolBox.prototype.msgTipShow = function (str) {
        this.ui.label_msg_tip.string = str;
        var node = this.ui.label_msg_tip.node;
        node.active = true;
        node.opacity = 0;
        node.stopAllActions();
        node.runAction(cc.fadeIn(.1));
    };
    MineToolBox.prototype.msgTipHide = function () {
        var node = this.ui.label_msg_tip.node;
        if (!node.active) {
            return;
        }
        node.stopAllActions();
        node.runAction(cc.sequence(cc.fadeOut(.1), cc.callFunc(function () {
            node.active = false;
        })));
    };
    MineToolBox.prototype.canIntroUpdate = function () {
        var nextLevel = GameCenter_1.default.game.mineLevel[this.slider.currentPageIndex] + 1;
        this.ui.node_confirm_active.active = false;
        if (nextLevel >= 10) {
            this.toolIntroConHide();
            this.msgTipShow(LangMng_1.default.getTxt("T_107"));
            return;
        }
        if (!this.ui.node_intro_con_1.active) {
            return;
        }
        var introNode = this.introCon[this.currentToolBtnIndex].node;
        var sliverLabel = introNode.getChildByName("g_1").getChildByName("count").getComponent(cc.Label);
        var canCountLabel = introNode.getChildByName("g_2").getChildByName("count").getComponent(cc.Label);
        var canTipLabel = introNode.getChildByName("g_2").getChildByName("count_tip").getComponent(cc.Label);
        var upTxt1 = introNode.getChildByName("g_3").getChildByName("txt_1").getComponent(cc.RichText);
        var silverVal = GameCenter_1.default.game.levelConfig.silver[nextLevel - 2];
        var canVal = GameCenter_1.default.game.levelConfig.can[nextLevel - 2];
        sliverLabel.string = "" + silverVal;
        canCountLabel.string = "x" + canVal;
        canTipLabel.string = "(" + GameCenter_1.default.game.canCount + "/" + canVal + ")";
        upTxt1.string = LangMng_1.default.getTxt("T_103") + " " + nextLevel + "\n\r" + LangMng_1.default.getTxt("T_104") + " <color = #ffc600>" + GameCenter_1.default.game.levelConfig.rate[nextLevel - 2] + "%</c>";
        if (GameCenter_1.default.game.silverPoint >= silverVal && GameCenter_1.default.game.canCount >= canVal) {
            this.ui.node_confirm_active.active = true;
        }
    };
    MineToolBox.prototype.decIntroUpdate = function () {
        if (GameCenter_1.default.game.mineAccessories[this.slider.currentPageIndex] == 0) {
            this.ui.node_intro_con_2.active = false;
            this.msgTipShow(LangMng_1.default.getTxt("T_112"));
        }
    };
    MineToolBox.prototype.skinIntroUpdate = function () {
        if (GameCenter_1.default.game.mineSkin[this.slider.currentPageIndex] == 0) {
            this.ui.node_intro_con_3.active = false;
            this.msgTipShow(LangMng_1.default.getTxt("T_113"));
        }
    };
    MineToolBox.prototype.levelBarShow = function () {
        this.ui.node_level_holder.active = true;
    };
    MineToolBox.prototype.levelBarHide = function () {
        this.ui.node_level_holder.active = false;
    };
    MineToolBox.prototype.levelBarUpdate = function () {
        this.ui.label_level_num.string = "LV." + GameCenter_1.default.game.mineLevel[this.slider.currentPageIndex];
    };
    MineToolBox.prototype.onToolBtnClick = function (id) {
        var introPage = this.introCon[id];
        if (!introPage) {
            EventMng_1.default.emit(EventConst_1.MainEvent.MESSAGE_SHOW, {
                type: 2,
                content: LangMng_1.default.getTxt("S_9001"),
                autoClose: true,
            });
            return;
        }
        this.toolBtnSwitch(id);
    };
    MineToolBox.prototype.onBtnConfirmClick = function () {
        var _this = this;
        this.unRegisterEvent(this.ui.btn_confirm, this.onBtnConfirmClick, this);
        ActionTransition_1.ActionTransition.btnBounce(this.ui.btn_confirm, function () {
            if (!_this.btnCanClick) {
                _this.onRegisterEvent(_this.ui.btn_confirm, _this.onBtnConfirmClick, _this);
                return;
            }
            EventMng_1.default.emit('PET_UPGRADE_REQ', {
                id: _this.slider.currentPageIndex,
            });
        });
    };
    MineToolBox.prototype.onSliderPageCallBack = function () {
        this.btnCanClick = this.itemCheck(false);
        if (GameCenter_1.default.game.mineList[this.slider.currentPageIndex] == 0) {
            this.levelBarHide();
            this.ui.label_item_name.string = '';
        }
        else {
            this.levelBarShow();
            this.ui.label_item_name.string = GameCenter_1.default.cfgMine[this.slider.currentPageIndex].name;
        }
    };
    MineToolBox.prototype.onPetUpgradeChange = function (data) {
        this.onRegisterEvent(this.ui.btn_confirm, this.onBtnConfirmClick, this);
        this.toolBtnsUpdate();
        this.levelBarUpdate();
        this.canIntroUpdate();
        var level = GameCenter_1.default.game.mineLevel[data.id];
        if (data.state == 0) {
            this.slider.items[data.id].upgradeSuccess(data.id, level);
            this.itemDialogShow(LangMng_1.default.getTxt("T_105"));
            this.ui.ani_level_bar.play();
        }
        else {
            this.slider.items[data.id].upgradeFail();
            this.itemDialogShow(LangMng_1.default.getTxt("T_106"));
        }
    };
    MineToolBox.prototype.onMessageShow = function () {
        this.onRegisterEvent(this.ui.btn_confirm, this.onBtnConfirmClick, this);
    };
    MineToolBox.prototype.stateBoxShow = function () {
        this.ui.node_state_tip.active = true;
    };
    MineToolBox.prototype.stateBoxHide = function () {
        this.ui.node_state_tip.active = false;
    };
    MineToolBox.prototype.btnConfirmShow = function () {
        this.ui.btn_confirm.active = true;
    };
    MineToolBox.prototype.btnConfirmHide = function () {
        this.ui.btn_confirm.active = false;
    };
    MineToolBox = __decorate([
        ccclass
    ], MineToolBox);
    return MineToolBox;
}(UIBase_1.default));
exports.default = MineToolBox;

cc._RF.pop();

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/mine/mng/MineToolBox.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcbWluZVxcbW5nXFxNaW5lVG9vbEJveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBa0Q7QUFDbEQsc0RBQWlEO0FBQ2pELG9EQUErQztBQUMvQywyQ0FBMEM7QUFDMUMsaURBQXdEO0FBQ3hELHFFQUFvRTtBQUNwRSw2REFBMkQ7QUFDM0QsMENBQXFDO0FBQ3JDLHVFQUFrRTtBQUUxRCxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUdsQztJQUF5QywrQkFBTTtJQUEvQztRQUFBLHFFQWtYQztRQTlXRyxnQkFBVSxHQUFjLEVBQUUsQ0FBQztRQUMzQixjQUFRLEdBQW1CLEVBQUUsQ0FBQztRQUV0QixpQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3Qix5QkFBbUIsR0FBRyxDQUFDLENBQUMsQ0FBQzs7SUEwV3JDLENBQUM7SUF4V0csOEJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMseUJBQWUsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsNkJBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsb0JBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCw0QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFNB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QUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDaEQ7SUFFTCxDQUFDO0lBRUQsbUNBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxrQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN6QyxDQUFDO0lBRUQsa0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDMUMsQ0FBQztJQUVELG9DQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxvQ0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN2QyxDQUFDO0lBaFhnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBa1gvQjtJQUFELGtCQUFDO0NBbFhELEFBa1hDLENBbFh3QyxnQkFBTSxHQWtYOUM7a0JBbFhvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVDZW50ZXIgZnJvbSBcIi4uLy4uLy4uL2RhdGEvR2FtZUNlbnRlclwiO1xyXG5pbXBvcnQgRXZlbnRNbmcgZnJvbSBcIi4uLy4uLy4uL21hbmFnZXIvRXZlbnRNbmdcIjtcclxuaW1wb3J0IExhbmdNbmcgZnJvbSBcIi4uLy4uLy4uL21hbmFnZXIvTGFuZ01uZ1wiO1xyXG5pbXBvcnQgeyBNaW5lU2xpZGVyIH0gZnJvbSBcIi4vTWluZVNsaWRlclwiO1xyXG5pbXBvcnQgeyBUb29sQnRuLCBUb29sSW50cm9Db24gfSBmcm9tIFwiLi9Ub29sQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFjdGlvblRyYW5zaXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL0FjdGlvblRyYW5zaXRpb25cIjtcclxuaW1wb3J0IHsgTWFpbkV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvY29uc3QvRXZlbnRDb25zdFwiO1xyXG5pbXBvcnQgVUlCYXNlIGZyb20gXCIuLi8uLi91aS9VSUJhc2VcIjtcclxuaW1wb3J0IERhdGFNaW5lVG9vbEJveCBmcm9tIFwiLi4vLi4vLi4vZGF0YS9zY2VuZS9EYXRhTWluZVRvb2xCb3hcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmVUb29sQm94IGV4dGVuZHMgVUlCYXNlIHtcclxuXHJcbiAgICB1aTogRGF0YU1pbmVUb29sQm94O1xyXG4gICAgc2xpZGVyOiBNaW5lU2xpZGVyO1xyXG4gICAgY29udHJvbEJ0czogVG9vbEJ0bltdID0gW107XHJcbiAgICBpbnRyb0NvbjogVG9vbEludHJvQ29uW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGJ0bkNhbkNsaWNrOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRUb29sQnRuSW5kZXggPSAtMTtcclxuXHJcbiAgICBvblVJTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChEYXRhTWluZVRvb2xCb3gpO1xyXG4gICAgICAgIHRoaXMubWluZVNsaWRlckNyZWF0ZSgpO1xyXG4gICAgICAgIHRoaXMudG9vbEJ0bnNDcmVhdGUoKTtcclxuICAgICAgICB0aGlzLnRvb2xJbnRyb0NvbkNyZWF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyLmNyZWF0ZVNsaWRlckxpc3QoR2FtZUNlbnRlci5nYW1lLm1pbmVGbG9vck5hbWUsIEdhbWVDZW50ZXIuZ2FtZS5taW5lQm9keU5hbWUpO1xyXG4gICAgICAgIHRoaXMudmlld0luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoTWFpbkV2ZW50LlBFVF9VUEdSQURFX0NIQU5HRSwgdGhpcy5vblBldFVwZ3JhZGVDaGFuZ2UpO1xyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KE1haW5FdmVudC5NRVNTQUdFX1NIT1csIHRoaXMub25NZXNzYWdlU2hvdyk7XHJcbiAgICAgICAgdGhpcy5vblJlZ2lzdGVyRXZlbnQodGhpcy51aS5idG5fY29uZmlybSwgdGhpcy5vbkJ0bkNvbmZpcm1DbGljaywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIuc2hvdygpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyLmFycm93QnRuc0JpbmRPbigpO1xyXG4gICAgICAgIHRoaXMudmlld1Jlc2V0KCk7XHJcbiAgICAgICAgdGhpcy50b29sQnRuc0JpbmRPbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGlkZSgpIHtcclxuICAgICAgICB0aGlzLnVuUmVnaXN0ZXJFdmVudCh0aGlzLnVpLmJ0bl9jb25maXJtLCB0aGlzLm9uQnRuQ29uZmlybUNsaWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnNsaWRlci5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIuYXJyb3dCdG5zQmluZE9mZigpO1xyXG4gICAgICAgIHRoaXMudG9vbEJ0bnNCaW5kT2ZmKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sQnRzWzBdLnNldENvdW50KEdhbWVDZW50ZXIuZ2FtZS5jYW5Db3VudCk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sQnRzWzBdLnNldFRpdGxlVHh0KExhbmdNbmcuZ2V0VHh0KFwiVF8xMDBcIikpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbEJ0c1sxXS5zZXRUaXRsZVR4dChMYW5nTW5nLmdldFR4dChcIlRfMTEwXCIpKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xCdHNbMl0uc2V0VGl0bGVUeHQoTGFuZ01uZy5nZXRUeHQoXCJUXzExMVwiKSk7XHJcbiAgICAgICAgdGhpcy51aS5sYWJlbF9pdGVtX25hbWUuc3RyaW5nID0gJyc7XHJcbiAgICAgICAgdGhpcy5sZXZlbEJhclVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHZpZXdSZXNldCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUb29sQnRuSW5kZXggPSAtMTtcclxuICAgICAgICB0aGlzLmJ0bkNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tc2dUaXBTaG93KExhbmdNbmcuZ2V0VHh0KFwiVF8wMDhcIikpO1xyXG4gICAgICAgIHRoaXMudG9vbEludHJvQ29uSGlkZSgpO1xyXG4gICAgICAgIHRoaXMudWkubm9kZV9jb25maXJtX2FjdGl2ZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YXRlQm94SGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG1pbmVTbGlkZXJDcmVhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIgPSBuZXcgTWluZVNsaWRlcih0aGlzLnVpLCAwLCB7XHJcbiAgICAgICAgICAgIHJlZmVyZW5jZU1vZGU6IHRydWUsXHJcbiAgICAgICAgICAgIHNsaWRlclBhZ2VDYWxsQmFjazogdGhpcy5vblNsaWRlclBhZ2VDYWxsQmFjay5iaW5kKHRoaXMpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGl0ZW1DaGVjayhhdXRvVXBkYXRlOiBib29sZWFuID0gdHJ1ZSk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICBsZXQgc3RhdGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRvb2xCdG5JbmRleCA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKEdhbWVDZW50ZXIuZ2FtZS5taW5lTGlzdFt0aGlzLnNsaWRlci5jdXJyZW50UGFnZUluZGV4XSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXNnVGlwU2hvdyhMYW5nTW5nLmdldFR4dChcIlRfMDA5XCIpKTtcclxuICAgICAgICAgICAgdGhpcy50b29sSW50cm9Db25IaWRlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tc2dUaXBIaWRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbEludHJvQ29uVXBkYXRlKGF1dG9VcGRhdGUpO1xyXG4gICAgICAgICAgICBzdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGl0ZW1EaWFsb2dTaG93KHN0cik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudWkubm9kZV9wZXRfZGlhbG9nX2hvbGRlci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudWkubGFiZWxfcGV0X2RpYWxvZ190eHQuc3RyaW5nID0gc3RyO1xyXG4gICAgICAgIHRoaXMudWkubm9kZV9wZXRfZGlhbG9nX2hvbGRlci5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHRoaXMudWkubm9kZV9wZXRfZGlhbG9nX2hvbGRlci5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMudWkubm9kZV9wZXRfZGlhbG9nX2hvbGRlci5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLmRlbGF5VGltZSgzKSxcclxuICAgICAgICAgICAgY2MuZmFkZU91dCguMiksXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudWkubm9kZV9wZXRfZGlhbG9nX2hvbGRlci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApKVxyXG4gICAgfVxyXG5cclxuICAgIHRvb2xCdG5zQ3JlYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHRoaXMudWkubm9kZV9wcm9wc19ob2xkZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnVpLm5vZGVfcHJvcHNfaG9sZGVyLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xCdHNbaV0gPSBuZXcgVG9vbEJ0bihub2RlLCBpLCB0aGlzLm9uVG9vbEJ0bkNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b29sQnRuc1VwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xCdHNbMF0uc2V0Q291bnQoR2FtZUNlbnRlci5nYW1lLmNhbkNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICB0b29sQnRuc0JpbmRPbigpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29udHJvbEJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xCdHNbaV0uYmluZE9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvb2xCdG5zQmluZE9mZigpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29udHJvbEJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xCdHNbaV0uYmluZE9mZigpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xCdHNbaV0uYWN0aXZlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9vbEJ0blN3aXRjaChpZCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VG9vbEJ0bkluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sQnRzW3RoaXMuY3VycmVudFRvb2xCdG5JbmRleF0uYWN0aXZlKGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFRvb2xCdG5JbmRleCA9IGlkO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2xCdHNbdGhpcy5jdXJyZW50VG9vbEJ0bkluZGV4XS5hY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYnRuQ2FuQ2xpY2sgPSB0aGlzLml0ZW1DaGVjaygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0b29sSW50cm9Db25DcmVhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbnRyb0NvblswXSA9IG5ldyBUb29sSW50cm9Db24odGhpcy51aS5ub2RlX2ludHJvX2Nvbl8xLCAwLCB0aGlzLmNhbkludHJvVXBkYXRlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuaW50cm9Db25bMV0gPSBuZXcgVG9vbEludHJvQ29uKHRoaXMudWkubm9kZV9pbnRyb19jb25fMiwgMCwgdGhpcy5jYW5JbnRyb1VwZGF0ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmludHJvQ29uWzJdID0gbmV3IFRvb2xJbnRyb0Nvbih0aGlzLnVpLm5vZGVfaW50cm9fY29uXzMsIDAsIHRoaXMuY2FuSW50cm9VcGRhdGUuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9vbEludHJvQ29uSGlkZSgpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW50cm9Db24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5pbnRyb0NvbltpXS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvb2xJbnRyb0NvblVwZGF0ZShhdXRvVXBkYXRlKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMudG9vbEludHJvQ29uSGlkZSgpO1xyXG4gICAgICAgIHRoaXMuaW50cm9Db25bdGhpcy5jdXJyZW50VG9vbEJ0bkluZGV4XS5zaG93KCk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5jdXJyZW50VG9vbEJ0bkluZGV4KSB7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkludHJvVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkNvbmZpcm1TaG93KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5Db25maXJtSGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWNJbnRyb1VwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkNvbmZpcm1IaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNraW5JbnRyb1VwZGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhdXRvVXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRNbmcuZW1pdChNYWluRXZlbnQuT1BFTl9TS0lOX1BPUF9SRVEsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuc2xpZGVyLmN1cnJlbnRQYWdlSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtc2dUaXBTaG93KHN0cjogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMudWkubGFiZWxfbXNnX3RpcC5zdHJpbmcgPSBzdHI7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnVpLmxhYmVsX21zZ190aXAubm9kZTtcclxuXHJcbiAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIG5vZGUub3BhY2l0eSA9IDA7XHJcblxyXG4gICAgICAgIG5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5mYWRlSW4oLjEpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbXNnVGlwSGlkZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnVpLmxhYmVsX21zZ190aXAubm9kZTtcclxuXHJcbiAgICAgICAgaWYoIW5vZGUuYWN0aXZlKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLmZhZGVPdXQoLjEpLFxyXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYW5JbnRyb1VwZGF0ZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IG5leHRMZXZlbCA9IEdhbWVDZW50ZXIuZ2FtZS5taW5lTGV2ZWxbdGhpcy5zbGlkZXIuY3VycmVudFBhZ2VJbmRleF0gKyAxO1xyXG5cclxuICAgICAgICB0aGlzLnVpLm5vZGVfY29uZmlybV9hY3RpdmUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChuZXh0TGV2ZWwgPj0gMTApIHtcclxuICAgICAgICAgICAgdGhpcy50b29sSW50cm9Db25IaWRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubXNnVGlwU2hvdyhMYW5nTW5nLmdldFR4dChcIlRfMTA3XCIpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICghdGhpcy51aS5ub2RlX2ludHJvX2Nvbl8xLmFjdGl2ZSkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgbGV0IGludHJvTm9kZSA9IHRoaXMuaW50cm9Db25bdGhpcy5jdXJyZW50VG9vbEJ0bkluZGV4XS5ub2RlO1xyXG4gICAgICAgIGxldCBzbGl2ZXJMYWJlbCA9IGludHJvTm9kZS5nZXRDaGlsZEJ5TmFtZShcImdfMVwiKS5nZXRDaGlsZEJ5TmFtZShcImNvdW50XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgbGV0IGNhbkNvdW50TGFiZWwgPSBpbnRyb05vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJnXzJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIGxldCBjYW5UaXBMYWJlbCA9IGludHJvTm9kZS5nZXRDaGlsZEJ5TmFtZShcImdfMlwiKS5nZXRDaGlsZEJ5TmFtZShcImNvdW50X3RpcFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuICAgICAgICBsZXQgdXBUeHQxID0gaW50cm9Ob2RlLmdldENoaWxkQnlOYW1lKFwiZ18zXCIpLmdldENoaWxkQnlOYW1lKFwidHh0XzFcIikuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KTtcclxuXHJcblxyXG4gICAgICAgIGxldCBzaWx2ZXJWYWwgPSBHYW1lQ2VudGVyLmdhbWUubGV2ZWxDb25maWcuc2lsdmVyW25leHRMZXZlbCAtIDJdO1xyXG4gICAgICAgIGxldCBjYW5WYWwgPSBHYW1lQ2VudGVyLmdhbWUubGV2ZWxDb25maWcuY2FuW25leHRMZXZlbCAtIDJdO1xyXG5cclxuICAgICAgICBzbGl2ZXJMYWJlbC5zdHJpbmcgPSBgJHtzaWx2ZXJWYWx9YDtcclxuICAgICAgICBjYW5Db3VudExhYmVsLnN0cmluZyA9IGB4JHtjYW5WYWx9YDtcclxuICAgICAgICBjYW5UaXBMYWJlbC5zdHJpbmcgPSBgKCR7R2FtZUNlbnRlci5nYW1lLmNhbkNvdW50fS8ke2NhblZhbH0pYDtcclxuICAgICAgICB1cFR4dDEuc3RyaW5nID0gYCR7TGFuZ01uZy5nZXRUeHQoXCJUXzEwM1wiKX0gJHtuZXh0TGV2ZWx9XFxuXFxyJHtMYW5nTW5nLmdldFR4dChcIlRfMTA0XCIpfSA8Y29sb3IgPSAjZmZjNjAwPiR7R2FtZUNlbnRlci5nYW1lLmxldmVsQ29uZmlnLnJhdGVbbmV4dExldmVsIC0gMl19JTwvYz5gO1xyXG5cclxuICAgICAgICBpZiAoR2FtZUNlbnRlci5nYW1lLnNpbHZlclBvaW50ID49IHNpbHZlclZhbCAmJiBHYW1lQ2VudGVyLmdhbWUuY2FuQ291bnQgPj0gY2FuVmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudWkubm9kZV9jb25maXJtX2FjdGl2ZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgIGRlY0ludHJvVXBkYXRlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICAgaWYgKEdhbWVDZW50ZXIuZ2FtZS5taW5lQWNjZXNzb3JpZXNbdGhpcy5zbGlkZXIuY3VycmVudFBhZ2VJbmRleF0gPT0gMCkge1xyXG4gICAgICAgICAgICAgdGhpcy51aS5ub2RlX2ludHJvX2Nvbl8yLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgdGhpcy5tc2dUaXBTaG93KExhbmdNbmcuZ2V0VHh0KFwiVF8xMTJcIikpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBza2luSW50cm9VcGRhdGUoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmIChHYW1lQ2VudGVyLmdhbWUubWluZVNraW5bdGhpcy5zbGlkZXIuY3VycmVudFBhZ2VJbmRleF0gPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnVpLm5vZGVfaW50cm9fY29uXzMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubXNnVGlwU2hvdyhMYW5nTW5nLmdldFR4dChcIlRfMTEzXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxldmVsQmFyU2hvdygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpLm5vZGVfbGV2ZWxfaG9sZGVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbGV2ZWxCYXJIaWRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudWkubm9kZV9sZXZlbF9ob2xkZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV2ZWxCYXJVcGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51aS5sYWJlbF9sZXZlbF9udW0uc3RyaW5nID0gYExWLiR7R2FtZUNlbnRlci5nYW1lLm1pbmVMZXZlbFt0aGlzLnNsaWRlci5jdXJyZW50UGFnZUluZGV4XX1gO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG9vbEJ0bkNsaWNrKGlkKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGxldCBpbnRyb1BhZ2UgPSB0aGlzLmludHJvQ29uW2lkXTtcclxuXHJcbiAgICAgICAgaWYgKCFpbnRyb1BhZ2UpIHtcclxuICAgICAgICAgICAgRXZlbnRNbmcuZW1pdChNYWluRXZlbnQuTUVTU0FHRV9TSE9XLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAyLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogTGFuZ01uZy5nZXRUeHQoXCJTXzkwMDFcIiksXHJcbiAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRvb2xCdG5Td2l0Y2goaWQpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgb25CdG5Db25maXJtQ2xpY2soKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMudW5SZWdpc3RlckV2ZW50KHRoaXMudWkuYnRuX2NvbmZpcm0sIHRoaXMub25CdG5Db25maXJtQ2xpY2ssIHRoaXMpO1xyXG5cclxuICAgICAgICBBY3Rpb25UcmFuc2l0aW9uLmJ0bkJvdW5jZSh0aGlzLnVpLmJ0bl9jb25maXJtLCAoKSA9PiB7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmJ0bkNhbkNsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uUmVnaXN0ZXJFdmVudCh0aGlzLnVpLmJ0bl9jb25maXJtLCB0aGlzLm9uQnRuQ29uZmlybUNsaWNrLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgRXZlbnRNbmcuZW1pdCgnUEVUX1VQR1JBREVfUkVRJywge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMuc2xpZGVyLmN1cnJlbnRQYWdlSW5kZXgsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25TbGlkZXJQYWdlQ2FsbEJhY2soKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuYnRuQ2FuQ2xpY2sgPSB0aGlzLml0ZW1DaGVjayhmYWxzZSk7XHJcblxyXG4gICAgICAgIGlmIChHYW1lQ2VudGVyLmdhbWUubWluZUxpc3RbdGhpcy5zbGlkZXIuY3VycmVudFBhZ2VJbmRleF0gPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsQmFySGlkZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnVpLmxhYmVsX2l0ZW1fbmFtZS5zdHJpbmcgPSAnJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsQmFyU2hvdygpO1xyXG4gICAgICAgICAgICB0aGlzLnVpLmxhYmVsX2l0ZW1fbmFtZS5zdHJpbmcgPSBHYW1lQ2VudGVyLmNmZ01pbmVbdGhpcy5zbGlkZXIuY3VycmVudFBhZ2VJbmRleF0ubmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uUGV0VXBncmFkZUNoYW5nZShkYXRhKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMub25SZWdpc3RlckV2ZW50KHRoaXMudWkuYnRuX2NvbmZpcm0sIHRoaXMub25CdG5Db25maXJtQ2xpY2ssIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnRvb2xCdG5zVXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5sZXZlbEJhclVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuY2FuSW50cm9VcGRhdGUoKTtcclxuXHJcbiAgICAgICAgbGV0IGxldmVsID0gR2FtZUNlbnRlci5nYW1lLm1pbmVMZXZlbFtkYXRhLmlkXTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEuc3RhdGUgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlci5pdGVtc1tkYXRhLmlkXS51cGdyYWRlU3VjY2VzcyhkYXRhLmlkLCBsZXZlbCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbURpYWxvZ1Nob3coTGFuZ01uZy5nZXRUeHQoXCJUXzEwNVwiKSk7XHJcbiAgICAgICAgICAgIHRoaXMudWkuYW5pX2xldmVsX2Jhci5wbGF5KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zbGlkZXIuaXRlbXNbZGF0YS5pZF0udXBncmFkZUZhaWwoKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtRGlhbG9nU2hvdyhMYW5nTW5nLmdldFR4dChcIlRfMTA2XCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uTWVzc2FnZVNob3coKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblJlZ2lzdGVyRXZlbnQodGhpcy51aS5idG5fY29uZmlybSwgdGhpcy5vbkJ0bkNvbmZpcm1DbGljaywgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGVCb3hTaG93KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudWkubm9kZV9zdGF0ZV90aXAuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0ZUJveEhpZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51aS5ub2RlX3N0YXRlX3RpcC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBidG5Db25maXJtU2hvdygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpLmJ0bl9jb25maXJtLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgYnRuQ29uZmlybUhpZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51aS5idG5fY29uZmlybS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbn0iXX0=
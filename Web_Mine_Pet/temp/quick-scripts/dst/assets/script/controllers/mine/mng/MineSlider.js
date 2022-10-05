
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/mine/mng/MineSlider.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '057ddp8kttBb6HL7VXKwnBw', 'MineSlider');
// script/controllers/mine/mng/MineSlider.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MineSlider = void 0;
var GameCenter_1 = require("../../../data/GameCenter");
var LangMng_1 = require("../../../manager/LangMng");
var AssetsMng_1 = require("../../../manager/AssetsMng");
var EventMng_1 = require("../../../manager/EventMng");
var MineSelectItem_1 = require("./MineSelectItem");
var ActionTransition_1 = require("../../../common/ActionTransition");
var EventConst_1 = require("../../../data/const/EventConst");
var MineSlider = /** @class */ (function () {
    function MineSlider(ui, type, config) {
        this.ui = null;
        this.items = [];
        this.state = 0;
        this.pageWidth = 300;
        this.itemOffsetY = 150;
        this.layoutX = -333;
        this.cubeSizeProp = 0;
        this.referenceMode = false;
        this.sliderPageCallBack = null;
        this._prePageIndex = -1;
        this._currentPageIndex = 1;
        this.ui = ui;
        this.type = type;
        this._currentPageIndex = this.type == 0 ? GameCenter_1.default.game.mineSelectID : GameCenter_1.default.game.partnerSelectID;
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
    MineSlider.prototype.init = function () {
        this.cubeSizeProp = this.pageWidth / this.itemOffsetY;
        this.updateChooseTip();
    };
    MineSlider.prototype.show = function () {
        this.ui.page_view.node.on("scrolling", this.onSliderScrolling, this);
        this.ui.page_view.node.on("page-turning", this.onPageTurning, this);
        this.updateChooseTip();
        this.updateBtnDisplayState();
    };
    MineSlider.prototype.hide = function () {
        this.ui.page_view.node.off("scrolling", this.onSliderScrolling, this);
        this.ui.page_view.node.off("page-turning", this.onPageTurning, this);
    };
    MineSlider.prototype.createSliderList = function (floorAsset, bodyAsset) {
        var state = this.getSliderState();
        if (state == 0) {
            var node = this.ui.node_item_main.children[0];
            this.items[0] = new MineSelectItem_1.MineSelectItem(node, 0, 0);
            this.items[0].play("ACTION");
            if (this.ui.label_intro_title) {
                this.ui.label_intro_title.string = "";
            }
            if (this.ui.label_intro_con) {
                var txtCode = this.type == 0 ? "T_002" : "T_001";
                this.ui.label_intro_con.string = "\n" + LangMng_1.default.getTxt(txtCode);
            }
            return;
        }
        var itemPrefab = AssetsMng_1.default.getAssets("cube_item");
        var sliderData = this.getListDate();
        for (var i = 0; i < sliderData.length; i++) {
            var sceneNode = this.ui.node_item_main.children[i];
            var node = sceneNode ? sceneNode : cc.instantiate(itemPrefab);
            var itemID = sliderData[i];
            var floorName = itemID > 0 ? floorAsset[i] : "empty";
            var bodyAssets = itemID > 0 ? AssetsMng_1.default.getAssets(bodyAsset[i] + ".spine") : null;
            this.ui.page_view.addPage(node);
            this.items[i] = new MineSelectItem_1.MineSelectItem(node, this.type, itemID, GameCenter_1.default.game.mineLevel[i], {
                floorName: floorName,
                bodyAssets: bodyAssets,
            });
        }
        this.layoutActive(false);
        this.ui.page_view.setCurrentPageIndex(this._currentPageIndex);
        this.updateItemIndex();
        this.onPageTurning();
    };
    MineSlider.prototype.updateCurrentPage = function () {
        this._prePageIndex = this._currentPageIndex;
        this._currentPageIndex = this.ui.page_view.getCurrentPageIndex();
        this.updateGameCenterData();
    };
    MineSlider.prototype.updateChooseTip = function () {
        var state = this.type == 0 ? GameCenter_1.default.game.hasPartner() : GameCenter_1.default.game.hasMine();
        var data = this.type == 0 ? GameCenter_1.default.cfgPartner[GameCenter_1.default.game.partnerSelectID] : GameCenter_1.default.cfgMine[GameCenter_1.default.game.mineSelectID];
        var str = data.name;
        if (state) {
            this.ui.sprite_choose_tip_img.spriteFrame = this.getChooseTipImg();
            this.ui.node_choose_tip_img.active = true;
            this.ui.node_choose_state.active = true;
            this.ui.label_choose_tip_title.string = str;
            this.ui.node_choose_tip_bg.color = new cc.Color(data.bgColor.r, data.bgColor.g, data.bgColor.b);
            this.ui.node_choose_tip_bg.opacity = 255;
        }
        else {
            this.ui.node_choose_tip_img.active = false;
            this.ui.node_choose_state.active = false;
            this.ui.label_choose_tip_title.string = "" + LangMng_1.default.getTxt("T_005");
            this.ui.node_choose_tip_bg.color = new cc.Color(0, 0, 0);
            this.ui.node_choose_tip_bg.opacity = 110;
        }
    };
    MineSlider.prototype.getChooseTipImg = function () {
        var img = null;
        switch (this.type) {
            case 0:
                img = GameCenter_1.default.getCurrentPartnerChooseIcon();
                break;
            case 1:
                img = GameCenter_1.default.getCurrentPetChooseIcon();
                break;
        }
        return img;
    };
    MineSlider.prototype.updateItemIndex = function () {
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].node.zIndex = this.items.length - i;
        }
    };
    MineSlider.prototype.updateItemSpinePos = function () {
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            var itemX = 0;
            var itemY = (i - this._currentPageIndex) * this.itemOffsetY;
            item.setSpineNodePosition(new cc.Vec2(itemX, itemY));
        }
    };
    MineSlider.prototype.updateItemAni = function () {
        if (this._prePageIndex >= 0 && this.items[this._prePageIndex]) {
            this.items[this._prePageIndex].play("IDLE");
        }
        if (this.items[this._currentPageIndex]) {
            this.items[this._currentPageIndex].play("ACTION");
        }
    };
    MineSlider.prototype.updateItemIntro = function () {
        var _this = this;
        if (!this.ui.node_intro_txt_group) {
            return;
        }
        var listCfgData = this.getCfgData();
        var data = listCfgData[this.items[this._currentPageIndex].id];
        if (this.ui.label_intro_title.string == data.name) {
            return;
        }
        this.ui.node_intro_txt_group.stopAllActions();
        this.ui.node_intro_txt_group.runAction(cc.sequence(cc.fadeOut(.1), cc.callFunc(function () {
            _this.ui.label_intro_title.string = data.name;
            _this.ui.label_intro_con.string = "\n" + data.intro;
            if (_this.type == 0) {
                if (GameCenter_1.default.game.mineList[_this.currentPageIndex] != 0) {
                    var itemLevel = GameCenter_1.default.game.mineLevel[_this.currentPageIndex];
                    _this.ui.label_intro_title.string += " (" + LangMng_1.default.getTxt("T_006") + itemLevel + ")";
                }
            }
        }), cc.delayTime(.1), cc.fadeIn(.15).easing(cc.easeSineOut())));
    };
    MineSlider.prototype.updateLevel = function () {
        var listCfgData = this.getCfgData();
        if (!this.items[this._currentPageIndex]) {
            return;
        }
        var data = listCfgData[this.items[this._currentPageIndex].id];
        this.ui.label_intro_title.string = data.name;
        if (this.type == 0) {
            if (GameCenter_1.default.game.mineList[this.currentPageIndex] != 0) {
                var itemLevel = GameCenter_1.default.game.mineLevel[this.currentPageIndex];
                this.ui.label_intro_title.string += " (" + LangMng_1.default.getTxt("T_006") + itemLevel + ")";
            }
        }
    };
    MineSlider.prototype.updateGameCenterData = function () {
        if (this.referenceMode) {
            return;
        }
        if (this.type == 0) {
            GameCenter_1.default.game.mineSelectID = this._currentPageIndex;
        }
        else if (this.type == 1) {
            GameCenter_1.default.game.partnerSelectID = this._currentPageIndex;
        }
    };
    MineSlider.prototype.getCfgData = function () {
        var data = null;
        switch (this.type) {
            case 0:
                data = GameCenter_1.default.cfgMine;
                break;
            case 1:
                data = GameCenter_1.default.cfgPartner;
                break;
        }
        return data;
    };
    MineSlider.prototype.onPageTurning = function () {
        this.updateCurrentPage();
        this.updateItemAni();
        this.updateItemSpinePos();
        this.updateItemIntro();
        this.updateBtnDisplayState();
        if (this.sliderPageCallBack) {
            this.sliderPageCallBack();
        }
    };
    MineSlider.prototype.updateBtnDisplayState = function () {
        if (GameCenter_1.default.game.canGo) {
            if (this.ui.node_btn_go_active) {
                this.ui.node_btn_go_active.active = true;
                this.ui.node_btn_go_normal.active = false;
            }
        }
        else {
            if (this.ui.node_btn_go_active) {
                this.ui.node_btn_go_active.active = false;
                this.ui.node_btn_go_normal.active = true;
            }
        }
    };
    MineSlider.prototype.updateSliderPage = function (e) {
        var nodeName = e.currentTarget.name;
        var goToPageIndex = nodeName == "arrow_right" ? this._currentPageIndex + 1 : this._currentPageIndex - 1;
        this.ui.page_view.scrollToPage(goToPageIndex, .3);
    };
    MineSlider.prototype.getSliderState = function () {
        var list = this.getListDate();
        for (var i = 0; i < list.length; i++) {
            if (list[i] == 1) {
                this.state = 1;
                break;
            }
        }
        return this.state;
    };
    MineSlider.prototype.getListDate = function () {
        var data = null;
        switch (this.type) {
            case 0:
                data = GameCenter_1.default.game.mineList;
                break;
            case 1:
                data = GameCenter_1.default.game.partnerList;
                break;
        }
        return data;
    };
    MineSlider.prototype.layoutActive = function (state) {
        if (state === void 0) { state = true; }
        this.ui.layout.updateLayout();
        this.ui.layout.enabled = state;
    };
    MineSlider.prototype.arrowBtnsBindOn = function () {
        this.ui.btn_slider_arrow_left.on('touchend', this.onArrowLeftClick, this);
        this.ui.btn_slider_arrow_right.on('touchend', this.onArrowRightClick, this);
    };
    MineSlider.prototype.arrowBtnsBindOff = function () {
        this.ui.btn_slider_arrow_left.off('touchend', this.onArrowLeftClick, this);
        this.ui.btn_slider_arrow_right.off('touchend', this.onArrowRightClick, this);
    };
    MineSlider.prototype.onSliderScrolling = function () {
        var layoutPos = this.ui.layout.node.getPosition();
        for (var i = 0; i < this.items.length; i++) {
            var dx = Math.abs(layoutPos.x) - Math.abs(this.layoutX) - (i * this.pageWidth);
            var cubeY = dx / this.cubeSizeProp;
            this.items[i].setSpineNodePosition(new cc.Vec2(0, -cubeY));
        }
    };
    MineSlider.prototype.onArrowLeftClick = function (e) {
        this.updateSliderPage(e);
    };
    MineSlider.prototype.onArrowRightClick = function (e) {
        this.updateSliderPage(e);
    };
    MineSlider.prototype.onBtnGoClick = function () {
        if (!GameCenter_1.default.game.canGo) {
            var txt = null;
            if (!GameCenter_1.default.game.hasMine()) {
                txt = LangMng_1.default.getTxt("T_003");
            }
            else if (!GameCenter_1.default.game.hasPartner()) {
                txt = LangMng_1.default.getTxt("T_004");
            }
            EventMng_1.default.emit(EventConst_1.MainEvent.MESSAGE_SHOW, {
                type: 2,
                content: LangMng_1.default.getTxt("" + txt),
                autoClose: true,
            });
            return;
        }
        ActionTransition_1.ActionTransition.btnBounce(this.ui.btn_go, function () {
            EventMng_1.default.emit(EventConst_1.MainEvent.MINE_CHANGE_REQ);
        });
    };
    Object.defineProperty(MineSlider.prototype, "prePageIndex", {
        get: function () {
            return this._prePageIndex;
        },
        set: function (value) {
            this._prePageIndex = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MineSlider.prototype, "currentPageIndex", {
        get: function () {
            return this._currentPageIndex;
        },
        set: function (value) {
            this._currentPageIndex = value;
        },
        enumerable: false,
        configurable: true
    });
    return MineSlider;
}());
exports.MineSlider = MineSlider;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcbWluZVxcbW5nXFxNaW5lU2xpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFrRDtBQUNsRCxvREFBK0M7QUFDL0Msd0RBQW1EO0FBQ25ELHNEQUFpRDtBQUNqRCxtREFBa0Q7QUFDbEQscUVBQW9FO0FBQ3BFLDZEQUEyRDtBQUUzRDtJQWlCSSxvQkFBWSxFQUFFLEVBQUUsSUFBWSxFQUFFLE1BQU87UUFmckMsT0FBRSxHQUFRLElBQUksQ0FBQztRQUNmLFVBQUssR0FBcUIsRUFBRSxDQUFDO1FBRTdCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsY0FBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixnQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUMxQixZQUFPLEdBQVcsQ0FBQyxHQUFHLENBQUM7UUFDdkIsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFFekIsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRWxCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDM0Isc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBSWxDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFakIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLG9CQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUV6RyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkIsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNULE9BQU87U0FDVjtRQUVELElBQUksTUFBTSxDQUFDLGFBQWEs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QUMsTUFBTSxFQUFFO1lBRXZDLGtCQUFRLENBQUMsSUFBSSxDQUFDLHNCQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFN0MsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsc0JBQUksb0NBQVk7YUFJaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQzthQU5ELFVBQWlCLEtBQWE7WUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSx3Q0FBZ0I7YUFJcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNsQyxDQUFDO2FBTkQsVUFBcUIsS0FBYTtZQUM5QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBTUwsaUJBQUM7QUFBRCxDQWxaQSxBQWtaQyxJQUFBO0FBbFpZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVDZW50ZXIgZnJvbSBcIi4uLy4uLy4uL2RhdGEvR2FtZUNlbnRlclwiO1xyXG5pbXBvcnQgTGFuZ01uZyBmcm9tIFwiLi4vLi4vLi4vbWFuYWdlci9MYW5nTW5nXCI7XHJcbmltcG9ydCBBc3NldHNNbmcgZnJvbSBcIi4uLy4uLy4uL21hbmFnZXIvQXNzZXRzTW5nXCI7XHJcbmltcG9ydCBFdmVudE1uZyBmcm9tIFwiLi4vLi4vLi4vbWFuYWdlci9FdmVudE1uZ1wiO1xyXG5pbXBvcnQgeyBNaW5lU2VsZWN0SXRlbSB9IGZyb20gXCIuL01pbmVTZWxlY3RJdGVtXCI7XHJcbmltcG9ydCB7IEFjdGlvblRyYW5zaXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL0FjdGlvblRyYW5zaXRpb25cIjtcclxuaW1wb3J0IHsgTWFpbkV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvY29uc3QvRXZlbnRDb25zdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1pbmVTbGlkZXIge1xyXG5cclxuICAgIHVpOiBhbnkgPSBudWxsO1xyXG4gICAgaXRlbXM6IE1pbmVTZWxlY3RJdGVtW10gPSBbXTtcclxuICAgIHR5cGU6IG51bWJlcjtcclxuICAgIHN0YXRlOiBudW1iZXIgPSAwO1xyXG4gICAgcGFnZVdpZHRoOiBudW1iZXIgPSAzMDA7XHJcbiAgICBpdGVtT2Zmc2V0WTogbnVtYmVyID0gMTUwO1xyXG4gICAgbGF5b3V0WDogbnVtYmVyID0gLTMzMztcclxuICAgIGN1YmVTaXplUHJvcDogbnVtYmVyID0gMDtcclxuXHJcbiAgICByZWZlcmVuY2VNb2RlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzbGlkZXJQYWdlQ2FsbEJhY2sgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgX3ByZVBhZ2VJbmRleDogbnVtYmVyID0gLTE7XHJcbiAgICBwcml2YXRlIF9jdXJyZW50UGFnZUluZGV4OiBudW1iZXIgPSAxO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHVpLCB0eXBlOiBudW1iZXIsIGNvbmZpZz8pIHtcclxuXHJcbiAgICAgICAgdGhpcy51aSA9IHVpO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcblxyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRQYWdlSW5kZXggPSB0aGlzLnR5cGUgPT0gMCA/IEdhbWVDZW50ZXIuZ2FtZS5taW5lU2VsZWN0SUQgOiBHYW1lQ2VudGVyLmdhbWUucGFydG5lclNlbGVjdElEO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUdhbWVDZW50ZXJEYXRhKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDaG9vc2VUaXAoKTtcclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5yZWZlcmVuY2VNb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmZXJlbmNlTW9kZSA9IGNvbmZpZy5yZWZlcmVuY2VNb2RlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5zbGlkZXJQYWdlQ2FsbEJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5zbGlkZXJQYWdlQ2FsbEJhY2sgPSBjb25maWcuc2xpZGVyUGFnZUNhbGxCYWNrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1YmVTaXplUHJvcCA9IHRoaXMucGFnZVdpZHRoIC8gdGhpcy5pdGVtT2Zmc2V0WTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNob29zZVRpcCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzaG93KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudWkucGFnZV92aWV3Lm5vZGUub24oXCJzY3JvbGxpbmdcIiwgdGhpcy5vblNsaWRlclNjcm9sbGluZywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51aS5wYWdlX3ZpZXcubm9kZS5vbihcInBhZ2UtdHVybmluZ1wiLCB0aGlzLm9uUGFnZVR1cm5pbmcsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2hvb3NlVGlwKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCdG5EaXNwbGF5U3RhdGUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaGlkZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpLnBhZ2Vfdmlldy5ub2RlLm9mZihcInNjcm9sbGluZ1wiLCB0aGlzLm9uU2xpZGVyU2Nyb2xsaW5nLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVpLnBhZ2Vfdmlldy5ub2RlLm9mZihcInBhZ2UtdHVybmluZ1wiLCB0aGlzLm9uUGFnZVR1cm5pbmcsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjcmVhdGVTbGlkZXJMaXN0KGZsb29yQXNzZXQsIGJvZHlBc3NldCk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLmdldFNsaWRlclN0YXRlKCk7XHJcblxyXG5cclxuICAgICAgICBpZiAoc3RhdGUgPT0gMCkge1xyXG5cclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnVpLm5vZGVfaXRlbV9tYWluLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zWzBdID0gbmV3IE1pbmVTZWxlY3RJdGVtKG5vZGUsMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbMF0ucGxheShcIkFDVElPTlwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVpLmxhYmVsX2ludHJvX3RpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpLmxhYmVsX2ludHJvX3RpdGxlLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVpLmxhYmVsX2ludHJvX2Nvbikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHR4dENvZGUgPSB0aGlzLnR5cGUgPT0gMCA/IFwiVF8wMDJcIiA6IFwiVF8wMDFcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMudWkubGFiZWxfaW50cm9fY29uLnN0cmluZyA9IGBcXG4ke0xhbmdNbmcuZ2V0VHh0KHR4dENvZGUpfWA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpdGVtUHJlZmFiID0gQXNzZXRzTW5nLmdldEFzc2V0cyhcImN1YmVfaXRlbVwiKTtcclxuXHJcbiAgICAgICAgbGV0IHNsaWRlckRhdGEgPSB0aGlzLmdldExpc3REYXRlKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXJEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzY2VuZU5vZGUgPSB0aGlzLnVpLm5vZGVfaXRlbV9tYWluLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHNjZW5lTm9kZSA/IHNjZW5lTm9kZSA6IGNjLmluc3RhbnRpYXRlKGl0ZW1QcmVmYWIpO1xyXG4gICAgICAgICAgICBsZXQgaXRlbUlEID0gc2xpZGVyRGF0YVtpXTtcclxuICAgICAgICAgICAgbGV0IGZsb29yTmFtZSA9IGl0ZW1JRCA+IDAgPyBmbG9vckFzc2V0W2ldIDogXCJlbXB0eVwiO1xyXG4gICAgICAgICAgICBsZXQgYm9keUFzc2V0cyA9IGl0ZW1JRCA+IDAgPyBBc3NldHNNbmcuZ2V0QXNzZXRzKGAke2JvZHlBc3NldFtpXX0uc3BpbmVgKTogbnVsbDtcclxuICAgICAgICAgICAgdGhpcy51aS5wYWdlX3ZpZXcuYWRkUGFnZShub2RlKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc1tpXSA9IG5ldyBNaW5lU2VsZWN0SXRlbShub2RlLCB0aGlzLnR5cGUsIGl0ZW1JRCwgR2FtZUNlbnRlci5nYW1lLm1pbmVMZXZlbFtpXSwge1xyXG4gICAgICAgICAgICAgICAgZmxvb3JOYW1lOiBmbG9vck5hbWUsXHJcbiAgICAgICAgICAgICAgICBib2R5QXNzZXRzOiBib2R5QXNzZXRzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubGF5b3V0QWN0aXZlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnVpLnBhZ2Vfdmlldy5zZXRDdXJyZW50UGFnZUluZGV4KHRoaXMuX2N1cnJlbnRQYWdlSW5kZXgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSXRlbUluZGV4KCk7XHJcbiAgICAgICAgdGhpcy5vblBhZ2VUdXJuaW5nKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUN1cnJlbnRQYWdlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3ByZVBhZ2VJbmRleCA9IHRoaXMuX2N1cnJlbnRQYWdlSW5kZXg7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFBhZ2VJbmRleCA9IHRoaXMudWkucGFnZV92aWV3LmdldEN1cnJlbnRQYWdlSW5kZXgoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUdhbWVDZW50ZXJEYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ2hvb3NlVGlwKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnR5cGUgPT0gMCA/IEdhbWVDZW50ZXIuZ2FtZS5oYXNQYXJ0bmVyKCkgOiBHYW1lQ2VudGVyLmdhbWUuaGFzTWluZSgpO1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy50eXBlID09IDAgPyBHYW1lQ2VudGVyLmNmZ1BhcnRuZXJbR2FtZUNlbnRlci5nYW1lLnBhcnRuZXJTZWxlY3RJRF0gOiBHYW1lQ2VudGVyLmNmZ01pbmVbR2FtZUNlbnRlci5nYW1lLm1pbmVTZWxlY3RJRF07XHJcbiAgICAgICAgbGV0IHN0ciA9IGRhdGEubmFtZTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXRlKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVpLnNwcml0ZV9jaG9vc2VfdGlwX2ltZy5zcHJpdGVGcmFtZSA9IHRoaXMuZ2V0Q2hvb3NlVGlwSW1nKCk7XHJcbiAgICAgICAgICAgIHRoaXMudWkubm9kZV9jaG9vc2VfdGlwX2ltZy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVpLm5vZGVfY2hvb3NlX3N0YXRlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudWkubGFiZWxfY2hvb3NlX3RpcF90aXRsZS5zdHJpbmcgPSBzdHI7XHJcbiAgICAgICAgICAgIHRoaXMudWkubm9kZV9jaG9vc2VfdGlwX2JnLmNvbG9yID0gbmV3IGNjLkNvbG9yKGRhdGEuYmdDb2xvci5yLCBkYXRhLmJnQ29sb3IuZywgZGF0YS5iZ0NvbG9yLmIpO1xyXG4gICAgICAgICAgICB0aGlzLnVpLm5vZGVfY2hvb3NlX3RpcF9iZy5vcGFjaXR5ID0gMjU1O1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVpLm5vZGVfY2hvb3NlX3RpcF9pbWcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudWkubm9kZV9jaG9vc2Vfc3RhdGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudWkubGFiZWxfY2hvb3NlX3RpcF90aXRsZS5zdHJpbmcgPSBgJHtMYW5nTW5nLmdldFR4dChcIlRfMDA1XCIpfWA7XHJcbiAgICAgICAgICAgIHRoaXMudWkubm9kZV9jaG9vc2VfdGlwX2JnLmNvbG9yID0gbmV3IGNjLkNvbG9yKDAsIDAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLnVpLm5vZGVfY2hvb3NlX3RpcF9iZy5vcGFjaXR5ID0gMTEwO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldENob29zZVRpcEltZygpOiBjYy5TcHJpdGVGcmFtZSB7XHJcblxyXG4gICAgICAgIGxldCBpbWcgPSBudWxsO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBpbWcgPSBHYW1lQ2VudGVyLmdldEN1cnJlbnRQYXJ0bmVyQ2hvb3NlSWNvbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGltZyA9IEdhbWVDZW50ZXIuZ2V0Q3VycmVudFBldENob29zZUljb24oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGltZztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSXRlbUluZGV4KCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zW2ldLm5vZGUuekluZGV4ID0gdGhpcy5pdGVtcy5sZW5ndGggLSBpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVJdGVtU3BpbmVQb3MoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtc1tpXTtcclxuICAgICAgICAgICAgbGV0IGl0ZW1YID0gMDtcclxuICAgICAgICAgICAgbGV0IGl0ZW1ZID0gKGkgLSB0aGlzLl9jdXJyZW50UGFnZUluZGV4KSAqIHRoaXMuaXRlbU9mZnNldFk7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0U3BpbmVOb2RlUG9zaXRpb24obmV3IGNjLlZlYzIoaXRlbVgsIGl0ZW1ZKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUl0ZW1BbmkoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9wcmVQYWdlSW5kZXggPj0gMCAmJiB0aGlzLml0ZW1zW3RoaXMuX3ByZVBhZ2VJbmRleF0pIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc1t0aGlzLl9wcmVQYWdlSW5kZXhdLnBsYXkoXCJJRExFXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbXNbdGhpcy5fY3VycmVudFBhZ2VJbmRleF0pIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc1t0aGlzLl9jdXJyZW50UGFnZUluZGV4XS5wbGF5KFwiQUNUSU9OXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSXRlbUludHJvKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMudWkubm9kZV9pbnRyb190eHRfZ3JvdXApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGxpc3RDZmdEYXRhID0gdGhpcy5nZXRDZmdEYXRhKCk7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBsaXN0Q2ZnRGF0YVt0aGlzLml0ZW1zW3RoaXMuX2N1cnJlbnRQYWdlSW5kZXhdLmlkXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudWkubGFiZWxfaW50cm9fdGl0bGUuc3RyaW5nID09IGRhdGEubmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVpLm5vZGVfaW50cm9fdHh0X2dyb3VwLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy51aS5ub2RlX2ludHJvX3R4dF9ncm91cC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLmZhZGVPdXQoLjEpLFxyXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpLmxhYmVsX2ludHJvX3RpdGxlLnN0cmluZyA9IGRhdGEubmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudWkubGFiZWxfaW50cm9fY29uLnN0cmluZyA9IGBcXG4ke2RhdGEuaW50cm99YDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChHYW1lQ2VudGVyLmdhbWUubWluZUxpc3RbdGhpcy5jdXJyZW50UGFnZUluZGV4XSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtTGV2ZWwgPSBHYW1lQ2VudGVyLmdhbWUubWluZUxldmVsW3RoaXMuY3VycmVudFBhZ2VJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWkubGFiZWxfaW50cm9fdGl0bGUuc3RyaW5nICs9IGAgKCR7TGFuZ01uZy5nZXRUeHQoXCJUXzAwNlwiKX0ke2l0ZW1MZXZlbH0pYDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoLjEpLFxyXG4gICAgICAgICAgICBjYy5mYWRlSW4oLjE1KS5lYXNpbmcoY2MuZWFzZVNpbmVPdXQoKSlcclxuICAgICAgICApKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZUxldmVsKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBsaXN0Q2ZnRGF0YSA9IHRoaXMuZ2V0Q2ZnRGF0YSgpO1xyXG4gICAgICAgIGlmICghdGhpcy5pdGVtc1t0aGlzLl9jdXJyZW50UGFnZUluZGV4XSkgeyByZXR1cm47IH1cclxuICAgICAgICBsZXQgZGF0YSA9IGxpc3RDZmdEYXRhW3RoaXMuaXRlbXNbdGhpcy5fY3VycmVudFBhZ2VJbmRleF0uaWRdO1xyXG4gICAgICAgIHRoaXMudWkubGFiZWxfaW50cm9fdGl0bGUuc3RyaW5nID0gZGF0YS5uYW1lO1xyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoR2FtZUNlbnRlci5nYW1lLm1pbmVMaXN0W3RoaXMuY3VycmVudFBhZ2VJbmRleF0gIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1MZXZlbCA9IEdhbWVDZW50ZXIuZ2FtZS5taW5lTGV2ZWxbdGhpcy5jdXJyZW50UGFnZUluZGV4XTtcclxuICAgICAgICAgICAgICAgIHRoaXMudWkubGFiZWxfaW50cm9fdGl0bGUuc3RyaW5nICs9IGAgKCR7TGFuZ01uZy5nZXRUeHQoXCJUXzAwNlwiKX0ke2l0ZW1MZXZlbH0pYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVHYW1lQ2VudGVyRGF0YSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmVmZXJlbmNlTW9kZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy50eXBlID09IDApIHtcclxuICAgICAgICAgICAgR2FtZUNlbnRlci5nYW1lLm1pbmVTZWxlY3RJRCA9IHRoaXMuX2N1cnJlbnRQYWdlSW5kZXg7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICBHYW1lQ2VudGVyLmdhbWUucGFydG5lclNlbGVjdElEID0gdGhpcy5fY3VycmVudFBhZ2VJbmRleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldENmZ0RhdGEoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGxldCBkYXRhID0gbnVsbDtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgZGF0YSA9IEdhbWVDZW50ZXIuY2ZnTWluZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gR2FtZUNlbnRlci5jZmdQYXJ0bmVyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25QYWdlVHVybmluZygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50UGFnZSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSXRlbUFuaSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSXRlbVNwaW5lUG9zKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJdGVtSW50cm8oKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJ0bkRpc3BsYXlTdGF0ZSgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zbGlkZXJQYWdlQ2FsbEJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5zbGlkZXJQYWdlQ2FsbEJhY2soKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUJ0bkRpc3BsYXlTdGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoR2FtZUNlbnRlci5nYW1lLmNhbkdvKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVpLm5vZGVfYnRuX2dvX2FjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51aS5ub2RlX2J0bl9nb19hY3RpdmUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudWkubm9kZV9idG5fZ29fbm9ybWFsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudWkubm9kZV9idG5fZ29fYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpLm5vZGVfYnRuX2dvX2FjdGl2ZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudWkubm9kZV9idG5fZ29fbm9ybWFsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU2xpZGVyUGFnZShlKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG5vZGVOYW1lID0gZS5jdXJyZW50VGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgbGV0IGdvVG9QYWdlSW5kZXggPSBub2RlTmFtZSA9PSBcImFycm93X3JpZ2h0XCIgPyB0aGlzLl9jdXJyZW50UGFnZUluZGV4ICsgMSA6IHRoaXMuX2N1cnJlbnRQYWdlSW5kZXggLSAxO1xyXG4gICAgICAgIHRoaXMudWkucGFnZV92aWV3LnNjcm9sbFRvUGFnZShnb1RvUGFnZUluZGV4LCAuMyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2xpZGVyU3RhdGUoKTogbnVtYmVyIHtcclxuXHJcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLmdldExpc3REYXRlKCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAobGlzdFtpXSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaXN0RGF0ZSgpOiBudW1iZXJbXSB7XHJcblxyXG4gICAgICAgIGxldCBkYXRhID0gbnVsbDtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgZGF0YSA9IEdhbWVDZW50ZXIuZ2FtZS5taW5lTGlzdDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gR2FtZUNlbnRlci5nYW1lLnBhcnRuZXJMaXN0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBsYXlvdXRBY3RpdmUoc3RhdGU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51aS5sYXlvdXQudXBkYXRlTGF5b3V0KCk7XHJcbiAgICAgICAgdGhpcy51aS5sYXlvdXQuZW5hYmxlZCA9IHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGFycm93QnRuc0JpbmRPbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpLmJ0bl9zbGlkZXJfYXJyb3dfbGVmdC5vbigndG91Y2hlbmQnLCB0aGlzLm9uQXJyb3dMZWZ0Q2xpY2ssIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWkuYnRuX3NsaWRlcl9hcnJvd19yaWdodC5vbigndG91Y2hlbmQnLCB0aGlzLm9uQXJyb3dSaWdodENsaWNrLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhcnJvd0J0bnNCaW5kT2ZmKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudWkuYnRuX3NsaWRlcl9hcnJvd19sZWZ0Lm9mZigndG91Y2hlbmQnLCB0aGlzLm9uQXJyb3dMZWZ0Q2xpY2ssIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWkuYnRuX3NsaWRlcl9hcnJvd19yaWdodC5vZmYoJ3RvdWNoZW5kJywgdGhpcy5vbkFycm93UmlnaHRDbGljaywgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TbGlkZXJTY3JvbGxpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGxheW91dFBvcyA9IHRoaXMudWkubGF5b3V0Lm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGR4ID0gTWF0aC5hYnMobGF5b3V0UG9zLngpIC0gTWF0aC5hYnModGhpcy5sYXlvdXRYKSAtIChpICogdGhpcy5wYWdlV2lkdGgpO1xyXG4gICAgICAgICAgICBsZXQgY3ViZVkgPSBkeCAvIHRoaXMuY3ViZVNpemVQcm9wO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zW2ldLnNldFNwaW5lTm9kZVBvc2l0aW9uKG5ldyBjYy5WZWMyKDAsIC1jdWJlWSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkFycm93TGVmdENsaWNrKGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNsaWRlclBhZ2UoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25BcnJvd1JpZ2h0Q2xpY2soZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2xpZGVyUGFnZShlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkdvQ2xpY2soKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICghR2FtZUNlbnRlci5nYW1lLmNhbkdvKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdHh0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmICghR2FtZUNlbnRlci5nYW1lLmhhc01pbmUoKSkge1xyXG4gICAgICAgICAgICAgICAgdHh0ID0gTGFuZ01uZy5nZXRUeHQoXCJUXzAwM1wiKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghR2FtZUNlbnRlci5nYW1lLmhhc1BhcnRuZXIoKSkge1xyXG4gICAgICAgICAgICAgICAgdHh0ID0gTGFuZ01uZy5nZXRUeHQoXCJUXzAwNFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgRXZlbnRNbmcuZW1pdChNYWluRXZlbnQuTUVTU0FHRV9TSE9XLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAyLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogTGFuZ01uZy5nZXRUeHQoYCR7dHh0fWApLFxyXG4gICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEFjdGlvblRyYW5zaXRpb24uYnRuQm91bmNlKHRoaXMudWkuYnRuX2dvLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBFdmVudE1uZy5lbWl0KE1haW5FdmVudC5NSU5FX0NIQU5HRV9SRVEpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHByZVBhZ2VJbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcHJlUGFnZUluZGV4ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByZVBhZ2VJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcmVQYWdlSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGN1cnJlbnRQYWdlSW5kZXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRQYWdlSW5kZXggPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY3VycmVudFBhZ2VJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50UGFnZUluZGV4O1xyXG4gICAgfVxyXG5cclxufSJdfQ==
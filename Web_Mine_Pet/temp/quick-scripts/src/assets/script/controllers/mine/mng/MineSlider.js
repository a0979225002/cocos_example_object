"use strict";
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
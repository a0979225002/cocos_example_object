"use strict";
cc._RF.push(module, '8166cTvy+RJFIeDtGEoIKtC', 'UIMusic');
// script/controllers/ui/UIMusic.ts

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
var UIBase_1 = require("./UIBase");
var DataUIMusic_1 = require("../../data/scene/DataUIMusic");
var LangMng_1 = require("../../manager/LangMng");
var MusicMng_1 = require("../../manager/MusicMng");
var BtnType;
(function (BtnType) {
    BtnType[BtnType["Music"] = 0] = "Music";
    BtnType[BtnType["Effect"] = 1] = "Effect";
})(BtnType || (BtnType = {}));
var ccclass = cc._decorator.ccclass;
var UIMusic = /** @class */ (function (_super) {
    __extends(UIMusic, _super);
    function UIMusic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui = null;
        _this._isLangSet = false;
        _this._closeX = -33;
        _this._openX = 33;
        _this._closeColor = new cc.Color(190, 190, 190, 255);
        _this._openColor = new cc.Color(0, 133, 255, 255);
        return _this;
    }
    UIMusic.prototype.onInit = function () {
        cc.game.addPersistRootNode(this.node);
        this.resize();
    };
    UIMusic.prototype.onUILoad = function () {
        this.ui = this.node.addComponent(DataUIMusic_1.default);
        this.updateBtnDisplay(BtnType.Music);
        this.updateBtnDisplay(BtnType.Effect);
        this.hide(false);
    };
    UIMusic.prototype.onShow = function () {
        this.setLang();
        this.onRegisterEvent(this.ui.btn_close, this.onBtnCloseClick, this);
        this.onRegisterEvent(this.ui.btn_music, this.onBtnMusicClick, this);
        this.onRegisterEvent(this.ui.btn_effect, this.onBtnEffectClick, this);
    };
    UIMusic.prototype.onHide = function () {
        this.unRegisterEvent(this.ui.btn_music, this.onBtnCloseClick, this);
        this.unRegisterEvent(this.ui.btn_close, this.onBtnMusicClick, this);
        this.unRegisterEvent(this.ui.btn_effect, this.onBtnEffectClick, this);
    };
    UIMusic.prototype.onBtnCloseClick = function () {
        this.hide();
    };
    UIMusic.prototype.onBtnMusicClick = function () {
        MusicMng_1.default.switchMusic();
        this.updateBtnDisplay(BtnType.Music);
    };
    UIMusic.prototype.onBtnEffectClick = function () {
        MusicMng_1.default.switchEffect();
        this.updateBtnDisplay(BtnType.Effect);
    };
    UIMusic.prototype.updateBtnDisplay = function (type) {
        var state = type == 0 ? MusicMng_1.default.getMusicState() : MusicMng_1.default.getEffectState();
        var circleNode = type == 0 ? this.ui.node_musicCircle : this.ui.node_effectCircle;
        var bgNode = type == 0 ? this.ui.node_musicBg : this.ui.node_effectBg;
        var targetPosX = state ? this._openX : this._closeX;
        var targetColor = state ? this._openColor : this._closeColor;
        circleNode.stopAllActions();
        circleNode.runAction(cc.moveTo(.2, targetPosX, 0).easing(cc.easeSineOut()));
        bgNode.stopAllActions();
        bgNode.runAction(cc.tintTo(.2, targetColor.getR(), targetColor.getG(), targetColor.getB()));
    };
    UIMusic.prototype.show = function () {
        if (this.node.active) {
            return;
        }
        this.node.active = true;
        this.fadeIn();
    };
    UIMusic.prototype.hide = function (isAni) {
        if (isAni === void 0) { isAni = true; }
        if (!this.node.active) {
            return;
        }
        if (isAni) {
            this.fadeOut();
            return;
        }
        this.node.active = false;
    };
    UIMusic.prototype.fadeIn = function () {
        this.ui.node_main.setPosition(0, 2000);
        this.ui.node_main.stopAllActions();
        this.ui.node_main.runAction(cc.sequence(cc.moveTo(.3, 0, 0).easing(cc.easeQuarticActionInOut()), cc.callFunc(function () {
        })));
    };
    UIMusic.prototype.fadeOut = function () {
        var _this = this;
        this.ui.node_main.stopAllActions();
        this.ui.node_main.runAction(cc.sequence(cc.moveTo(.2, 0, 2000).easing(cc.easeSineOut()), cc.callFunc(function () {
            _this.node.active = false;
        })));
    };
    UIMusic.prototype.setLang = function () {
        if (this._isLangSet) {
            return;
        }
        this.ui.label_music.string = LangMng_1.default.getTxt("MB_008");
        this.ui.label_effect.string = LangMng_1.default.getTxt("MB_009");
        this.ui.label_close.string = LangMng_1.default.getTxt("P_1003");
        this._isLangSet = true;
    };
    UIMusic.prototype.resize = function () {
        var pos = this.getCanvas();
        this.node.setPosition(pos.x, pos.y);
    };
    UIMusic.prefabUrl = "music_panel";
    UIMusic.className = "UIMusic";
    UIMusic = __decorate([
        ccclass
    ], UIMusic);
    return UIMusic;
}(UIBase_1.default));
exports.default = UIMusic;

cc._RF.pop();
"use strict";
cc._RF.push(module, '2d4de+mDeJJN7KetexHq3uT', 'UIMessage');
// script/controllers/ui/UIMessage.ts

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
var DataUIMessage_1 = require("../../data/scene/DataUIMessage");
var LangMng_1 = require("../../manager/LangMng");
var ccclass = cc._decorator.ccclass;
var PopType;
(function (PopType) {
    PopType[PopType["All"] = 0] = "All";
    PopType[PopType["Confirm"] = 1] = "Confirm";
    PopType[PopType["None"] = 2] = "None";
})(PopType || (PopType = {}));
var UIMessage = /** @class */ (function (_super) {
    __extends(UIMessage, _super);
    function UIMessage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui = null;
        _this._isLangSet = false;
        _this._type = PopType.None;
        _this._canCover = true;
        _this._autoClose = false;
        _this._timer = null;
        _this._timerTime = 3000;
        return _this;
    }
    UIMessage.prototype.onInit = function (params) {
        cc.game.addPersistRootNode(this.node);
    };
    UIMessage.prototype.onUILoad = function () {
        this.ui = this.node.addComponent(DataUIMessage_1.default);
        this.resize();
        this.hide(false);
    };
    UIMessage.prototype.onShow = function () {
        this.onRegisterEvent(this.ui.btn_confirm, this.onConfirmClick, this);
        this.onRegisterEvent(this.ui.btn_cancel, this.onCancelClick, this);
        this.onRegisterEvent(this.ui.node_backBg, this.onBackBgClick, this);
        this.setLang();
    };
    UIMessage.prototype.onHide = function () {
        this.unRegisterEvent(this.ui.btn_cancel, this.onConfirmClick, this);
        this.unRegisterEvent(this.ui.btn_cancel, this.onCancelClick, this);
        this.unRegisterEvent(this.ui.node_backBg, this.onBackBgClick, this);
        this._canCover = true;
    };
    UIMessage.prototype.onConfirmClick = function () {
        if (this._confirmCb) {
            this._confirmCb();
        }
        this.hide();
    };
    UIMessage.prototype.onCancelClick = function () {
        if (this._cancelCb) {
            this._cancelCb();
        }
        this.hide();
    };
    UIMessage.prototype.onBackBgClick = function () {
        this.hide();
    };
    UIMessage.prototype.show = function (params) {
        var _this = this;
        if (params == undefined) {
            return;
        }
        var data = params;
        this._type = data.type;
        this._content = data.content;
        this._confirmCb = data.confirmCb;
        this._cancelCb = data.cancelCb;
        if (data.canCover != undefined) {
            this._canCover = data.canCover;
        }
        if (!this._canCover && this.node.active) {
            return;
        }
        if (data.autoClose != undefined) {
            this._autoClose = data.autoClose;
        }
        if (this._autoClose) {
            this._timer = setTimeout(function () {
                _this.hide();
            }, this._timerTime);
        }
        this.node.active = true;
        this.setIntroTxt();
        this.setBtnsDisplay();
        this.fadeIn();
    };
    UIMessage.prototype.hide = function (isAni) {
        if (isAni === void 0) { isAni = true; }
        clearTimeout(this._timer);
        if (!this.node.active) {
            return;
        }
        if (isAni) {
            this.fadeOut();
            return;
        }
        this.node.active = false;
    };
    UIMessage.prototype.fadeIn = function () {
        this.ui.node_main.opacity = 0;
        this.ui.node_main.scale = 1.3;
        this.ui.node_main.stopAllActions();
        this.ui.node_main.runAction(cc.sequence(cc.spawn(cc.fadeIn(.15), cc.scaleTo(.2, 1).easing(cc.easeBackOut())), cc.callFunc(function () {
        })));
    };
    UIMessage.prototype.fadeOut = function () {
        var _this = this;
        this.ui.node_main.stopAllActions();
        this.ui.node_main.runAction(cc.sequence(cc.fadeOut(.1), cc.callFunc(function () {
            _this.node.active = false;
        })));
    };
    UIMessage.prototype.setBtnsDisplay = function () {
        switch (this._type) {
            case PopType.Confirm:
                this.setBtnCancelActive(false);
                this.setBtnConfirmActive(true);
                break;
            case PopType.None:
                this.setBtnCancelActive(false);
                this.setBtnConfirmActive(false);
                break;
            default:
                this.setBtnCancelActive(true);
                this.setBtnConfirmActive(true);
        }
    };
    UIMessage.prototype.setBtnConfirmActive = function (state) {
        this.ui.btn_confirm.active = state;
    };
    UIMessage.prototype.setBtnCancelActive = function (state) {
        this.ui.btn_cancel.active = state;
    };
    UIMessage.prototype.setIntroTxt = function () {
        this.ui.label_msg_txt.string = this._content;
    };
    UIMessage.prototype.setLang = function () {
        if (this._isLangSet) {
            return;
        }
        this.ui.label_confirm.string = LangMng_1.default.getTxt("P_1001");
        this.ui.label_cancel.string = LangMng_1.default.getTxt("P_1002");
        this._isLangSet = true;
    };
    UIMessage.prototype.resize = function () {
        var pos = this.getCanvas();
        this.node.setPosition(pos.x, pos.y);
    };
    UIMessage.prefabUrl = "message_panel";
    UIMessage.className = "UIMessage";
    UIMessage = __decorate([
        ccclass
    ], UIMessage);
    return UIMessage;
}(UIBase_1.default));
exports.default = UIMessage;

cc._RF.pop();
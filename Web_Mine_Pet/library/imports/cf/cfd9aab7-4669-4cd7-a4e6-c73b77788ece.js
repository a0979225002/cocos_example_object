"use strict";
cc._RF.push(module, 'cfd9aq3RmlM16Tmxzt3eI7O', 'UIInfo');
// script/controllers/ui/UIInfo.ts

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
var LangMng_1 = require("../../manager/LangMng");
var UIBase_1 = require("./UIBase");
var ViewZorder_1 = require("../../data/const/ViewZorder");
var ccclass = cc._decorator.ccclass;
var UIInfo = /** @class */ (function (_super) {
    __extends(UIInfo, _super);
    function UIInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIInfo.prototype.onUILoad = function () {
        this.node_main = this.node.getChildByName("main");
        this.btn_close = this.node_main.getChildByName("btn_close");
        var con1 = this.node_main.getChildByName("con_1");
        this.label_title_1 = con1.getChildByName("title").getComponent(cc.Label);
        this.label_con_txt_1 = con1.getChildByName("content").getComponent(cc.Label);
        var con2 = this.node_main.getChildByName("con_2");
        this.label_title_2 = con2.getChildByName("title").getComponent(cc.Label);
        this.label_con_txt_2 = con1.getChildByName("content").getComponent(cc.Label);
        this.node.zIndex = ViewZorder_1.ViewZorder.UI;
        this.setTxt();
        this.hide(false);
    };
    UIInfo.prototype.onShow = function () {
        this.onRegisterEvent(this.btn_close, this.onBtnCloseClick, this);
    };
    UIInfo.prototype.show = function () {
        if (this.node.active) {
            return;
        }
        this.node.active = true;
        this.fadeIn();
    };
    UIInfo.prototype.hide = function (isAni) {
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
    UIInfo.prototype.setTxt = function () {
        this.label_title_1.string = LangMng_1.default.getTxt("I_001");
        this.label_con_txt_1.string = LangMng_1.default.getTxt("I_002");
        this.label_title_2.string = LangMng_1.default.getTxt("I_003");
        this.label_con_txt_2.string = LangMng_1.default.getTxt("I_004");
    };
    UIInfo.prototype.fadeIn = function () {
        this.node.opacity = 0;
        this.node.stopAllActions();
        this.node.runAction(cc.fadeIn(.1).easing(cc.easeSineOut()));
    };
    UIInfo.prototype.fadeOut = function () {
        var _this = this;
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.fadeOut(.1), cc.callFunc(function () {
            _this.node.active = false;
        })));
    };
    UIInfo.prototype.onBtnCloseClick = function () {
        this.hide();
    };
    UIInfo = __decorate([
        ccclass
    ], UIInfo);
    return UIInfo;
}(UIBase_1.default));
exports.default = UIInfo;

cc._RF.pop();
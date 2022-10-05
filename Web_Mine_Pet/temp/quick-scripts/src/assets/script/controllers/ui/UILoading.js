"use strict";
cc._RF.push(module, 'f7418/eTg1GuKl68PWCV/8c', 'UILoading');
// script/controllers/ui/UILoading.ts

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
var ccclass = cc._decorator.ccclass;
var UILoading = /** @class */ (function (_super) {
    __extends(UILoading, _super);
    function UILoading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UILoading.prototype.onInit = function () {
        cc.game.addPersistRootNode(this.node);
    };
    UILoading.prototype.onUILoad = function () {
        this.resize();
    };
    UILoading.prototype.show = function () {
        if (this.node.active) {
            return;
        }
        this.node.active = true;
        this.setTxt();
        this.fadeIn();
    };
    UILoading.prototype.hide = function (isAni) {
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
    UILoading.prototype.fadeIn = function () {
        this.node.opacity = 0;
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.fadeIn(.1), cc.callFunc(function () {
        })));
    };
    UILoading.prototype.fadeOut = function () {
        var _this = this;
        this.node.runAction(cc.sequence(cc.delayTime(.2), cc.fadeOut(.16), cc.callFunc(function () {
            _this.node.active = false;
        })));
    };
    UILoading.prototype.setTxt = function () {
    };
    UILoading.prototype.resize = function () {
        var pos = this.getCanvas();
        this.node.setPosition(pos.x, pos.y);
    };
    UILoading.prefabUrl = "loading_full_plane";
    UILoading.className = "UILoading";
    UILoading = __decorate([
        ccclass
    ], UILoading);
    return UILoading;
}(UIBase_1.default));
exports.default = UILoading;

cc._RF.pop();
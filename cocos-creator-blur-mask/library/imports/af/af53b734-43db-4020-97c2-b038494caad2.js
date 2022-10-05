"use strict";
cc._RF.push(module, 'af53bc0Q9tAIJfCsDhJTKrS', 'Logic');
// scripts/Logic.ts

"use strict";
/**
 * 点击面板弹出提示框行为
 * @author wheatup
 * @version 1.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Logic = /** @class */ (function (_super) {
    __extends(Logic, _super);
    function Logic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 点击对象
        _this.tapReceiver = null;
        _this.mask = null;
        _this.panel = null;
        _this.showing = false;
        return _this;
    }
    Logic.prototype.onLoad = function () {
        var _this = this;
        this.panel.active = false;
        this.panel.opacity = 0;
        this.panel.scale = 0.2;
        this.mask.active = false;
        this.mask.opacity = 0;
        this.tapReceiver.on('touchstart', function () { return _this.showing ? _this.hide() : _this.show(); }, this);
    };
    Logic.prototype.show = function () {
        this.showing = true;
        this.mask.active = true;
        this.panel.active = true;
        Wheen.stop(this.mask);
        new Wheen(this.mask)
            .to({ opacity: 255 }, 500, Wheen.Easing.Cubic.easeOut)
            .start();
        Wheen.stop(this.panel);
        new Wheen(this.panel)
            .to({ opacity: 255, scale: 1 }, 500, Wheen.Easing.Back.easeOut)
            .start();
    };
    Logic.prototype.hide = function () {
        var _this = this;
        this.showing = false;
        this.panel.active = true;
        Wheen.stop(this.mask);
        new Wheen(this.mask)
            .to({ opacity: 0 }, 500, Wheen.Easing.Cubic.easeOut)
            .callFunc(function () { return _this.panel.active = false; })
            .start();
        Wheen.stop(this.panel);
        new Wheen(this.panel)
            .to({ opacity: 0, scale: 0 }, 500, Wheen.Easing.Back.easeIn)
            .callFunc(function () { return _this.panel.active = false; })
            .start();
    };
    __decorate([
        property(cc.Node)
    ], Logic.prototype, "tapReceiver", void 0);
    __decorate([
        property(cc.Node)
    ], Logic.prototype, "mask", void 0);
    __decorate([
        property(cc.Node)
    ], Logic.prototype, "panel", void 0);
    Logic = __decorate([
        ccclass
    ], Logic);
    return Logic;
}(cc.Component));
exports.default = Logic;

cc._RF.pop();
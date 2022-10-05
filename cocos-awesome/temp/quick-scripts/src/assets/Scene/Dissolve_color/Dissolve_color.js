"use strict";
cc._RF.push(module, '184ab+BIeVCTLvd8FH6B+h3', 'Dissolve_color');
// Scene/Dissolve_color/Dissolve_color.ts

"use strict";
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Dissolve_color = /** @class */ (function (_super) {
    __extends(Dissolve_color, _super);
    function Dissolve_color() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tip = null;
        _this.materialList = [];
        _this.fadePct = 0; // 溶解百分比
        _this.activeFlag = false; // 溶解进行中
        _this.symbol = 1; // 色彩叠加的正负
        _this.speed = 0.5; // 色彩叠加的速度
        return _this;
    }
    Dissolve_color.prototype.start = function () {
        this.materialList.push(this.node.getChildByName('ghost').getComponent(cc.Sprite).getMaterial(0), this.node.getChildByName('man').getComponent(cc.Sprite).getMaterial(0));
    };
    Dissolve_color.prototype.toggle = function () {
        if (this.activeFlag)
            return;
        this.activeFlag = true;
    };
    Dissolve_color.prototype.update = function (dt) {
        var _this = this;
        if (!this.activeFlag)
            return;
        this.materialList.forEach(function (material) { return material.setProperty('fade_pct', _this.fadePct); });
        if (this.fadePct >= 0 && this.fadePct <= 1) {
            this.fadePct += this.symbol * dt * this.speed;
            this.tip.string = "溶解程度 " + this.fadePct.toFixed(1);
        }
        else {
            this.fadePct = this.fadePct > 1 ? 1 : 0;
            this.symbol = -this.symbol;
            this.activeFlag = false;
        }
    };
    var _b;
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Label) === "function" ? _b : Object)
    ], Dissolve_color.prototype, "tip", void 0);
    Dissolve_color = __decorate([
        ccclass
    ], Dissolve_color);
    return Dissolve_color;
}(cc.Component));
exports.default = Dissolve_color;

cc._RF.pop();
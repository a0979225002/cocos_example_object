"use strict";
cc._RF.push(module, '3e6d8oj6wpAArqZBvQLVnpf', 'uv1');
// Script/uv1.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var spritearrow = /** @class */ (function (_super) {
    __extends(spritearrow, _super);
    function spritearrow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uv = null;
        _this._speed = 0.7;
        _this._time = 0;
        return _this;
    }
    spritearrow.prototype.start = function () {
        this._material = this.uv.getMaterial(0);
        // this.time = 0;
        // this._material = this.getComponent(cc.Sprite).getMaterial(0);
    };
    /**
     * 掃光
     */
    spritearrow.prototype.flashLightAction = function (dt) {
        if (this._time > 11) {
            this._time = 0;
        }
        this._material.setProperty("u_time", this._time);
        this._time += dt * this._speed;
    };
    spritearrow.prototype.update = function (dt) {
        this.flashLightAction(dt);
    };
    __decorate([
        property(cc.Sprite)
    ], spritearrow.prototype, "uv", void 0);
    spritearrow = __decorate([
        ccclass
    ], spritearrow);
    return spritearrow;
}(cc.Component));
exports.default = spritearrow;

cc._RF.pop();
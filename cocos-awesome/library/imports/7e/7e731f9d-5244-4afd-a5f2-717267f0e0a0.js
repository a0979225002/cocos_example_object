"use strict";
cc._RF.push(module, '7e731+dUkRK/aXycXJn8OCg', 'Follow_spot');
// Scene/Follow_spot/Follow_spot.ts

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
var Follow_spot = /** @class */ (function (_super) {
    __extends(Follow_spot, _super);
    function Follow_spot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.material = null;
        _this.center = [0.1, 0.5];
        return _this;
    }
    Follow_spot.prototype.onLoad = function () {
        this.material = this.bg.getComponent(cc.Sprite).getMaterial(0);
        this.material.setProperty('wh_ratio', this.bg.width / this.bg.height);
        this.material.setProperty('center', this.center);
        this.bg.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
    };
    Follow_spot.prototype.touchMoveEvent = function (evt) {
        this.center[0] += evt.getDeltaX() / this.bg.width;
        this.center[1] -= evt.getDeltaY() / this.bg.height;
        this.material.setProperty('center', this.center);
    };
    var _b;
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Node) === "function" ? _b : Object)
    ], Follow_spot.prototype, "bg", void 0);
    Follow_spot = __decorate([
        ccclass
    ], Follow_spot);
    return Follow_spot;
}(cc.Component));
exports.default = Follow_spot;

cc._RF.pop();
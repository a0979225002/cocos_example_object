"use strict";
cc._RF.push(module, '58a09IoQgtOp59qWxU/tUY+', 'Infinite_bg_scroll');
// Scene/Infinite_bg_scroll/Infinite_bg_scroll.ts

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
var Infinite_bg_scroll = /** @class */ (function (_super) {
    __extends(Infinite_bg_scroll, _super);
    function Infinite_bg_scroll() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg1 = null;
        _this.bg2 = null;
        _this.speed = 500;
        return _this;
    }
    Infinite_bg_scroll.prototype.onLoad = function () {
        var viewSize = cc.view.getVisibleSize();
        this.bg2.getComponent(cc.Widget).left = viewSize.width;
        this.bg2.getComponent(cc.Widget).right = -viewSize.width;
    };
    Infinite_bg_scroll.prototype.update = function (dt) {
        var temp = dt * this.speed;
        if (this.bg2.x - temp <= 0) {
            this.bg1.x = this.bg2.x;
            this.bg2.x = this.bg1.x + this.bg1.width;
        }
        this.bg1.x -= temp;
        this.bg2.x -= temp;
    };
    var _b, _c;
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Node) === "function" ? _b : Object)
    ], Infinite_bg_scroll.prototype, "bg1", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Node) === "function" ? _c : Object)
    ], Infinite_bg_scroll.prototype, "bg2", void 0);
    Infinite_bg_scroll = __decorate([
        ccclass
    ], Infinite_bg_scroll);
    return Infinite_bg_scroll;
}(cc.Component));
exports.default = Infinite_bg_scroll;

cc._RF.pop();
"use strict";
cc._RF.push(module, 'd485aKJH4VK9ZttqIWBQAMc', 'Water_spread');
// Scene/Water_spread/Water_spread.ts

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
var Water_spread = /** @class */ (function (_super) {
    __extends(Water_spread, _super);
    function Water_spread() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.material = null;
        _this.waveOffset = 0.0;
        return _this;
    }
    Water_spread.prototype.onLoad = function () {
        this.material = this.bg.getComponent(cc.Sprite).getMaterial(0);
        this.bg.on(cc.Node.EventType.TOUCH_END, this.touchStartEvent, this);
    };
    Water_spread.prototype.touchStartEvent = function (evt) {
        var pos = evt.getLocation();
        this.material.setProperty('center', [pos.x / this.bg.width, (this.bg.height - pos.y) / this.bg.height]);
        this.waveOffset = 0.0;
    };
    Water_spread.prototype.update = function (dt) {
        if (this.waveOffset > 2.0)
            return;
        this.waveOffset += dt;
        this.material.setProperty('wave_offset', this.waveOffset);
    };
    var _b;
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Node) === "function" ? _b : Object)
    ], Water_spread.prototype, "bg", void 0);
    Water_spread = __decorate([
        ccclass
    ], Water_spread);
    return Water_spread;
}(cc.Component));
exports.default = Water_spread;

cc._RF.pop();
"use strict";
cc._RF.push(module, '82433YSgYFI4Kmfyazc1Wwg', 'Bullet_Tracking');
// Scene/Bullet_Tracking/Bullet_Tracking.ts

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
var Bullet_Tracking = /** @class */ (function (_super) {
    __extends(Bullet_Tracking, _super);
    function Bullet_Tracking() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.launch_btn = null;
        _this.bullet = null;
        _this.target = null;
        _this.fireFlag = false;
        _this.bulletSpeed = 200;
        return _this;
    }
    Bullet_Tracking.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
    };
    Bullet_Tracking.prototype.touchMoveEvent = function (evt) {
        this.target.x += evt.getDeltaX();
        this.target.y += evt.getDeltaY();
    };
    Bullet_Tracking.prototype.fire = function () {
        this.bullet.getComponent(cc.Sprite).enabled = true;
        this.bullet.getChildByName('boom').active = false;
        this.bullet.setPosition(this.launch_btn.position);
        this.bullet.active = true;
        this.fireFlag = true;
    };
    Bullet_Tracking.prototype.hitTheTarget = function () {
        var _this = this;
        this.fireFlag = false;
        this.bullet.getComponent(cc.Sprite).enabled = false;
        this.bullet.getChildByName('boom').active = true;
        this.scheduleOnce(function () {
            _this.bullet.getChildByName('boom').active = false;
        }, 0.2);
    };
    Bullet_Tracking.prototype.update = function (dt) {
        if (!this.fireFlag)
            return;
        var targetPos = this.target.getPosition();
        var bulletPos = this.bullet.getPosition();
        var normalizeVec = targetPos.subtract(bulletPos).normalize();
        this.bullet.x += normalizeVec.x * this.bulletSpeed * dt;
        this.bullet.y += normalizeVec.y * this.bulletSpeed * dt;
        // 角度变化以y轴正方向为起点，逆时针角度递增
        this.bullet.angle = cc.v2(0, 1).signAngle(normalizeVec) * 180 / Math.PI;
        var rect = this.target.getBoundingBox();
        if (rect.contains(bulletPos))
            this.hitTheTarget();
    };
    var _b, _c, _d;
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Node) === "function" ? _b : Object)
    ], Bullet_Tracking.prototype, "launch_btn", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Node) === "function" ? _c : Object)
    ], Bullet_Tracking.prototype, "bullet", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_d = typeof cc !== "undefined" && cc.Node) === "function" ? _d : Object)
    ], Bullet_Tracking.prototype, "target", void 0);
    Bullet_Tracking = __decorate([
        ccclass
    ], Bullet_Tracking);
    return Bullet_Tracking;
}(cc.Component));
exports.default = Bullet_Tracking;

cc._RF.pop();
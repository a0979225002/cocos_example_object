"use strict";
cc._RF.push(module, 'ea7dbuck+9ApJnQTq/C4vpv', 'Joystick');
// Scene/Joystick/Joystick.ts

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
var Roller = /** @class */ (function (_super) {
    __extends(Roller, _super);
    function Roller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.controlDot = null;
        _this.joystick = null;
        _this.movableStar = null;
        _this.movableFlag = false;
        _this.radian = 0;
        _this.speed = 150;
        return _this;
    }
    Roller.prototype.onLoad = function () {
        this.initTouchEvent();
    };
    Roller.prototype.initTouchEvent = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEndEvent, this);
    };
    Roller.prototype.touchStartEvent = function (event) {
        var touchPos = this.node.convertToNodeSpaceAR(event.getLocation());
        var distance = touchPos.len();
        var radius = this.node.width / 2 - this.controlDot.width / 2;
        // 以x轴正方向为基准，计算偏移量
        this.radian = cc.v2(1, 0).signAngle(touchPos);
        var offsetX = Math.cos(this.radian) * radius;
        var offsetY = Math.sin(this.radian) * radius;
        this.controlDot.setPosition(radius > distance ? touchPos : cc.v2(offsetX, offsetY));
        this.movableFlag = true;
    };
    Roller.prototype.touchMoveEvent = function (event) {
        var touchPos = this.node.convertToNodeSpaceAR(event.getLocation());
        var distance = touchPos.len();
        var radius = this.node.width / 2 - this.controlDot.width / 2;
        this.radian = cc.v2(1, 0).signAngle(touchPos);
        var offsetX = Math.cos(this.radian) * radius;
        var offsetY = Math.sin(this.radian) * radius;
        this.controlDot.setPosition(radius > distance ? touchPos : cc.v2(offsetX, offsetY));
    };
    Roller.prototype.touchEndEvent = function () {
        this.movableFlag = false;
        this.controlDot.setPosition(cc.v2(0, 0));
    };
    Roller.prototype.update = function (dt) {
        if (!this.movableFlag)
            return;
        this.movableStar.x += Math.cos(this.radian) * dt * this.speed;
        this.movableStar.y += Math.sin(this.radian) * dt * this.speed;
    };
    var _b, _c, _d;
    __decorate([
        property({ type: cc.Node, tooltip: '操控杆的控制点' }),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Node) === "function" ? _b : Object)
    ], Roller.prototype, "controlDot", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '操控杆' }),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Node) === "function" ? _c : Object)
    ], Roller.prototype, "joystick", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_d = typeof cc !== "undefined" && cc.Node) === "function" ? _d : Object)
    ], Roller.prototype, "movableStar", void 0);
    Roller = __decorate([
        ccclass
    ], Roller);
    return Roller;
}(cc.Component));
exports.default = Roller;

cc._RF.pop();
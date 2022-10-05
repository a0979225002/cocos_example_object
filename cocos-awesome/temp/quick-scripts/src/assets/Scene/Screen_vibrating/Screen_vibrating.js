"use strict";
cc._RF.push(module, 'a8a4fhJRiRB8YVcfMOtC1jT', 'Screen_vibrating');
// Scene/Screen_vibrating/Screen_vibrating.ts

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
var Screen_vibrating = /** @class */ (function (_super) {
    __extends(Screen_vibrating, _super);
    function Screen_vibrating() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgNode = null;
        _this.hitFeedback = null;
        return _this;
    }
    Screen_vibrating.prototype.onLoad = function () {
        this.shakeEffect(this.bgNode, 1);
    };
    Screen_vibrating.prototype.hit = function (evn) {
        var _this = this;
        this.shakeEffect(evn.currentTarget, 0.6);
        this.hitFeedback.setPosition(this.node.convertToNodeSpaceAR(evn.getLocation()));
        this.hitFeedback.active = true;
        var anim = this.hitFeedback.getComponent(cc.Animation);
        anim.on('finished', function () {
            _this.hitFeedback.active = false;
            anim.setCurrentTime(0);
            anim.stop();
        });
        anim.play();
    };
    Screen_vibrating.prototype.shakeEffect = function (node, duration) {
        node.stopAllActions();
        node.runAction(cc
            .sequence(cc.moveTo(0.02, cc.v2(5, 7)), cc.moveTo(0.02, cc.v2(-6, 7)), cc.moveTo(0.02, cc.v2(-13, 3)), cc.moveTo(0.02, cc.v2(3, -6)), cc.moveTo(0.02, cc.v2(-5, 5)), cc.moveTo(0.02, cc.v2(2, -8)), cc.moveTo(0.02, cc.v2(-8, -10)), cc.moveTo(0.02, cc.v2(3, 10)), cc.moveTo(0.02, cc.v2(0, 0)))
            .repeatForever());
        this.scheduleOnce(function () {
            node.stopAllActions();
            node.setPosition(0, 0);
        }, duration);
    };
    var _b, _c;
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Node) === "function" ? _b : Object)
    ], Screen_vibrating.prototype, "bgNode", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Node) === "function" ? _c : Object)
    ], Screen_vibrating.prototype, "hitFeedback", void 0);
    Screen_vibrating = __decorate([
        ccclass
    ], Screen_vibrating);
    return Screen_vibrating;
}(cc.Component));
exports.default = Screen_vibrating;

cc._RF.pop();
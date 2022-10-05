"use strict";
cc._RF.push(module, '7d68bZisFBP06BUmEtWSaVY', 'Metaball');
// Scene/Metaball/Metaball.ts

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
var Metaball = /** @class */ (function (_super) {
    __extends(Metaball, _super);
    function Metaball() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ball = null;
        _this.material = null;
        _this.touchStartPoint = null;
        return _this;
    }
    Metaball.prototype.onLoad = function () {
        this.material = this.ball.getComponent(cc.Sprite).getMaterial(0);
        this.touchStartPoint = cc.v2(this.ball.width / 2, this.ball.height / 2);
        this.ball.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
    };
    Metaball.prototype.touchMoveEvent = function (evt) {
        this.touchStartPoint = this.touchStartPoint.add(evt.getDelta());
        var x = this.touchStartPoint.x;
        var y = this.ball.height - this.touchStartPoint.y;
        this.material.setProperty('u_point', [x / this.ball.width, y / this.ball.height]);
    };
    var _b;
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Node) === "function" ? _b : Object)
    ], Metaball.prototype, "ball", void 0);
    Metaball = __decorate([
        ccclass
    ], Metaball);
    return Metaball;
}(cc.Component));
exports.default = Metaball;

cc._RF.pop();
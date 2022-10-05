"use strict";
cc._RF.push(module, 'a9db2Elhj9G0LB//IMXXrAZ', 'Doge');
// scripts/Doge.ts

"use strict";
/**
 * 背景doge
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
var Doge = /** @class */ (function (_super) {
    __extends(Doge, _super);
    function Doge() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xDir = 1;
        _this.yDir = 1;
        return _this;
    }
    // 让doge在屏幕上跑来跑去
    Doge.prototype.update = function (dt) {
        this.node.x += dt * 100 * this.xDir;
        this.node.y += dt * 100 * this.yDir;
        var width = (cc.Canvas.instance.node.width - this.node.width) * 0.5;
        var height = (cc.Canvas.instance.node.height - this.node.height) * 0.5;
        if (this.node.x < -width) {
            this.xDir = 1;
        }
        else if (this.node.x > width) {
            this.xDir = -1;
        }
        if (this.node.y < -height) {
            this.yDir = 1;
        }
        else if (this.node.y > height) {
            this.yDir = -1;
        }
    };
    Doge = __decorate([
        ccclass
    ], Doge);
    return Doge;
}(cc.Component));
exports.default = Doge;

cc._RF.pop();
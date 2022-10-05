
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Doge.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRG9nZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7R0FJRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUcsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUF5QkM7UUF2QkEsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixVQUFJLEdBQVcsQ0FBQyxDQUFDOztJQXNCbEIsQ0FBQztJQXBCQSxnQkFBZ0I7SUFDaEIscUJBQU0sR0FBTixVQUFPLEVBQUU7UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXBDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNwRSxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFdkUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTtZQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUNkO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUU7WUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNmO1FBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUNkO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLEVBQUU7WUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNmO0lBQ0YsQ0FBQztJQXhCbUIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQXlCeEI7SUFBRCxXQUFDO0NBekJELEFBeUJDLENBekJpQyxFQUFFLENBQUMsU0FBUyxHQXlCN0M7a0JBekJvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOiDjOaZr2RvZ2VcclxuICogQGF1dGhvciB3aGVhdHVwXHJcbiAqIEB2ZXJzaW9uIDEuMFxyXG4gKi9cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2dlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcblx0eERpcjogbnVtYmVyID0gMTtcclxuXHR5RGlyOiBudW1iZXIgPSAxO1xyXG5cclxuXHQvLyDorqlkb2dl5Zyo5bGP5bmV5LiK6LeR5p2l6LeR5Y67XHJcblx0dXBkYXRlKGR0KSB7XHJcblx0XHR0aGlzLm5vZGUueCArPSBkdCAqIDEwMCAqIHRoaXMueERpcjtcclxuXHRcdHRoaXMubm9kZS55ICs9IGR0ICogMTAwICogdGhpcy55RGlyO1xyXG5cclxuXHRcdGxldCB3aWR0aCA9IChjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS53aWR0aCAtIHRoaXMubm9kZS53aWR0aCkgKiAwLjU7XHJcblx0XHRsZXQgaGVpZ2h0ID0gKGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmhlaWdodCAtIHRoaXMubm9kZS5oZWlnaHQpICogMC41O1xyXG5cclxuXHRcdGlmICh0aGlzLm5vZGUueCA8IC13aWR0aCkge1xyXG5cdFx0XHR0aGlzLnhEaXIgPSAxO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLm5vZGUueCA+IHdpZHRoKSB7XHJcblx0XHRcdHRoaXMueERpciA9IC0xO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLm5vZGUueSA8IC1oZWlnaHQpIHtcclxuXHRcdFx0dGhpcy55RGlyID0gMTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5ub2RlLnkgPiBoZWlnaHQpIHtcclxuXHRcdFx0dGhpcy55RGlyID0gLTE7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Logic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'af53bc0Q9tAIJfCsDhJTKrS', 'Logic');
// scripts/Logic.ts

"use strict";
/**
 * 点击面板弹出提示框行为
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
var Logic = /** @class */ (function (_super) {
    __extends(Logic, _super);
    function Logic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 点击对象
        _this.tapReceiver = null;
        _this.mask = null;
        _this.panel = null;
        _this.showing = false;
        return _this;
    }
    Logic.prototype.onLoad = function () {
        var _this = this;
        this.panel.active = false;
        this.panel.opacity = 0;
        this.panel.scale = 0.2;
        this.mask.active = false;
        this.mask.opacity = 0;
        this.tapReceiver.on('touchstart', function () { return _this.showing ? _this.hide() : _this.show(); }, this);
    };
    Logic.prototype.show = function () {
        this.showing = true;
        this.mask.active = true;
        this.panel.active = true;
        Wheen.stop(this.mask);
        new Wheen(this.mask)
            .to({ opacity: 255 }, 500, Wheen.Easing.Cubic.easeOut)
            .start();
        Wheen.stop(this.panel);
        new Wheen(this.panel)
            .to({ opacity: 255, scale: 1 }, 500, Wheen.Easing.Back.easeOut)
            .start();
    };
    Logic.prototype.hide = function () {
        var _this = this;
        this.showing = false;
        this.panel.active = true;
        Wheen.stop(this.mask);
        new Wheen(this.mask)
            .to({ opacity: 0 }, 500, Wheen.Easing.Cubic.easeOut)
            .callFunc(function () { return _this.panel.active = false; })
            .start();
        Wheen.stop(this.panel);
        new Wheen(this.panel)
            .to({ opacity: 0, scale: 0 }, 500, Wheen.Easing.Back.easeIn)
            .callFunc(function () { return _this.panel.active = false; })
            .start();
    };
    __decorate([
        property(cc.Node)
    ], Logic.prototype, "tapReceiver", void 0);
    __decorate([
        property(cc.Node)
    ], Logic.prototype, "mask", void 0);
    __decorate([
        property(cc.Node)
    ], Logic.prototype, "panel", void 0);
    Logic = __decorate([
        ccclass
    ], Logic);
    return Logic;
}(cc.Component));
exports.default = Logic;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTG9naWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0dBSUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVHLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBeURDO1FBdkRBLE9BQU87UUFFUCxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsYUFBTyxHQUFZLEtBQUssQ0FBQzs7SUE2QzFCLENBQUM7SUEzQ0Esc0JBQU0sR0FBTjtRQUFBLGlCQVNDO1FBUkEsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSxFQUF4QyxDQUF3QyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFRCxvQkFBSSxHQUFKO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUV6QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2xCLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2FBQ3JELEtBQUssRUFBRSxDQUFDO1FBRVYsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNuQixFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQzlELEtBQUssRUFBRSxDQUFDO0lBQ1gsQ0FBQztJQUVELG9CQUFJLEdBQUo7UUFBQSxpQkFlQztRQWRBLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUV6QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2xCLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2FBQ25ELFFBQVEsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxFQUF6QixDQUF5QixDQUFDO2FBQ3pDLEtBQUssRUFBRSxDQUFDO1FBRVYsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNuQixFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQzNELFFBQVEsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxFQUF6QixDQUF5QixDQUFDO2FBQ3pDLEtBQUssRUFBRSxDQUFDO0lBQ1gsQ0FBQztJQXBERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dUNBQ0c7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3Q0FDSTtJQVZGLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0F5RHpCO0lBQUQsWUFBQztDQXpERCxBQXlEQyxDQXpEa0MsRUFBRSxDQUFDLFNBQVMsR0F5RDlDO2tCQXpEb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDngrnlh7vpnaLmnb/lvLnlh7rmj5DnpLrmoYbooYzkuLpcclxuICogQGF1dGhvciB3aGVhdHVwXHJcbiAqIEB2ZXJzaW9uIDEuMFxyXG4gKi9cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpYyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG5cdC8vIOeCueWHu+WvueixoVxyXG5cdEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG5cdHRhcFJlY2VpdmVyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblx0QHByb3BlcnR5KGNjLk5vZGUpXHJcblx0bWFzazogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cdEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG5cdHBhbmVsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblx0c2hvd2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRvbkxvYWQoKSB7XHJcblx0XHR0aGlzLnBhbmVsLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5wYW5lbC5vcGFjaXR5ID0gMDtcclxuXHRcdHRoaXMucGFuZWwuc2NhbGUgPSAwLjI7XHJcblxyXG5cdFx0dGhpcy5tYXNrLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5tYXNrLm9wYWNpdHkgPSAwO1xyXG5cclxuXHRcdHRoaXMudGFwUmVjZWl2ZXIub24oJ3RvdWNoc3RhcnQnLCAoKSA9PiB0aGlzLnNob3dpbmcgPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdygpLCB0aGlzKTtcclxuXHR9XHJcblxyXG5cdHNob3coKSB7XHJcblx0XHR0aGlzLnNob3dpbmcgPSB0cnVlO1xyXG5cdFx0dGhpcy5tYXNrLmFjdGl2ZSA9IHRydWU7XHJcblx0XHR0aGlzLnBhbmVsLmFjdGl2ZSA9IHRydWU7XHJcblxyXG5cdFx0V2hlZW4uc3RvcCh0aGlzLm1hc2spO1xyXG5cdFx0bmV3IFdoZWVuKHRoaXMubWFzaylcclxuXHRcdFx0LnRvKHsgb3BhY2l0eTogMjU1IH0sIDUwMCwgV2hlZW4uRWFzaW5nLkN1YmljLmVhc2VPdXQpXHJcblx0XHRcdC5zdGFydCgpO1xyXG5cclxuXHRcdFdoZWVuLnN0b3AodGhpcy5wYW5lbCk7XHJcblx0XHRuZXcgV2hlZW4odGhpcy5wYW5lbClcclxuXHRcdFx0LnRvKHsgb3BhY2l0eTogMjU1LCBzY2FsZTogMSB9LCA1MDAsIFdoZWVuLkVhc2luZy5CYWNrLmVhc2VPdXQpXHJcblx0XHRcdC5zdGFydCgpO1xyXG5cdH1cclxuXHJcblx0aGlkZSgpIHtcclxuXHRcdHRoaXMuc2hvd2luZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5wYW5lbC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuXHRcdFdoZWVuLnN0b3AodGhpcy5tYXNrKTtcclxuXHRcdG5ldyBXaGVlbih0aGlzLm1hc2spXHJcblx0XHRcdC50byh7IG9wYWNpdHk6IDAgfSwgNTAwLCBXaGVlbi5FYXNpbmcuQ3ViaWMuZWFzZU91dClcclxuXHRcdFx0LmNhbGxGdW5jKCgpID0+IHRoaXMucGFuZWwuYWN0aXZlID0gZmFsc2UpXHJcblx0XHRcdC5zdGFydCgpO1xyXG5cclxuXHRcdFdoZWVuLnN0b3AodGhpcy5wYW5lbCk7XHJcblx0XHRuZXcgV2hlZW4odGhpcy5wYW5lbClcclxuXHRcdFx0LnRvKHsgb3BhY2l0eTogMCwgc2NhbGU6IDAgfSwgNTAwLCBXaGVlbi5FYXNpbmcuQmFjay5lYXNlSW4pXHJcblx0XHRcdC5jYWxsRnVuYygoKSA9PiB0aGlzLnBhbmVsLmFjdGl2ZSA9IGZhbHNlKVxyXG5cdFx0XHQuc3RhcnQoKTtcclxuXHR9XHJcbn1cclxuIl19
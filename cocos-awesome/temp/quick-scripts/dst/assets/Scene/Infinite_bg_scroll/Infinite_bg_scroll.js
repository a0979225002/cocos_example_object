
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scene/Infinite_bg_scroll/Infinite_bg_scroll.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NlbmVcXEluZmluaXRlX2JnX3Njcm9sbFxcSW5maW5pdGVfYmdfc2Nyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBdUJDO1FBckJDLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFFcEIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUVwQixXQUFLLEdBQVcsR0FBRyxDQUFDOztJQWlCdEIsQ0FBQztJQWhCQyxtQ0FBTSxHQUFOO1FBQ0UsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUE7UUFDdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUE7SUFDMUQsQ0FBQztJQUVELG1DQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ1AsSUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQzFDO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNyQixDQUFDOztJQXBCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNiLEVBQUUsb0JBQUYsRUFBRSxDQUFDLElBQUk7bURBQVE7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDYixFQUFFLG9CQUFGLEVBQUUsQ0FBQyxJQUFJO21EQUFRO0lBSkQsa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0F1QnRDO0lBQUQseUJBQUM7Q0F2QkQsQUF1QkMsQ0F2QitDLEVBQUUsQ0FBQyxTQUFTLEdBdUIzRDtrQkF2Qm9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZpbml0ZV9iZ19zY3JvbGwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGJnMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgYmcyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgc3BlZWQ6IG51bWJlciA9IDUwMDtcclxuICBvbkxvYWQoKSB7XHJcbiAgICBjb25zdCB2aWV3U2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcclxuICAgIHRoaXMuYmcyLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSB2aWV3U2l6ZS53aWR0aFxyXG4gICAgdGhpcy5iZzIuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkucmlnaHQgPSAtdmlld1NpemUud2lkdGhcclxuICB9XHJcblxyXG4gIHVwZGF0ZShkdCkge1xyXG4gICAgY29uc3QgdGVtcCA9IGR0ICogdGhpcy5zcGVlZDtcclxuICAgIGlmICh0aGlzLmJnMi54IC0gdGVtcCA8PSAwKSB7XHJcbiAgICAgIHRoaXMuYmcxLnggPSB0aGlzLmJnMi54O1xyXG4gICAgICB0aGlzLmJnMi54ID0gdGhpcy5iZzEueCArIHRoaXMuYmcxLndpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYmcxLnggLT0gdGVtcDtcclxuICAgIHRoaXMuYmcyLnggLT0gdGVtcDtcclxuICB9XHJcbn1cclxuIl19
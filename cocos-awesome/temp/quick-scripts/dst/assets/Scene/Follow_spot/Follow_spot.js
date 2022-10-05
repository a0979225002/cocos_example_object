
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scene/Follow_spot/Follow_spot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e731+dUkRK/aXycXJn8OCg', 'Follow_spot');
// Scene/Follow_spot/Follow_spot.ts

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
var Follow_spot = /** @class */ (function (_super) {
    __extends(Follow_spot, _super);
    function Follow_spot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.material = null;
        _this.center = [0.1, 0.5];
        return _this;
    }
    Follow_spot.prototype.onLoad = function () {
        this.material = this.bg.getComponent(cc.Sprite).getMaterial(0);
        this.material.setProperty('wh_ratio', this.bg.width / this.bg.height);
        this.material.setProperty('center', this.center);
        this.bg.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
    };
    Follow_spot.prototype.touchMoveEvent = function (evt) {
        this.center[0] += evt.getDeltaX() / this.bg.width;
        this.center[1] -= evt.getDeltaY() / this.bg.height;
        this.material.setProperty('center', this.center);
    };
    var _b;
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Node) === "function" ? _b : Object)
    ], Follow_spot.prototype, "bg", void 0);
    Follow_spot = __decorate([
        ccclass
    ], Follow_spot);
    return Follow_spot;
}(cc.Component));
exports.default = Follow_spot;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NlbmVcXEZvbGxvd19zcG90XFxGb2xsb3dfc3BvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQW1CQztRQWpCQyxRQUFFLEdBQVksSUFBSSxDQUFDO1FBQ25CLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBQzdCLFlBQU0sR0FBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzs7SUFlaEMsQ0FBQztJQWJDLDRCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsb0NBQWMsR0FBZCxVQUFlLEdBQXdCO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7SUFoQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDZCxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxJQUFJOzJDQUFRO0lBRkEsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQW1CL0I7SUFBRCxrQkFBQztDQW5CRCxBQW1CQyxDQW5Cd0MsRUFBRSxDQUFDLFNBQVMsR0FtQnBEO2tCQW5Cb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb2xsb3dfc3BvdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgYmc6IGNjLk5vZGUgPSBudWxsO1xyXG4gIG1hdGVyaWFsOiBjYy5NYXRlcmlhbCA9IG51bGw7XHJcbiAgY2VudGVyOiBudW1iZXJbXSA9IFswLjEsIDAuNV07XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHRoaXMubWF0ZXJpYWwgPSB0aGlzLmJnLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmdldE1hdGVyaWFsKDApO1xyXG4gICAgdGhpcy5tYXRlcmlhbC5zZXRQcm9wZXJ0eSgnd2hfcmF0aW8nLCB0aGlzLmJnLndpZHRoIC8gdGhpcy5iZy5oZWlnaHQpO1xyXG4gICAgdGhpcy5tYXRlcmlhbC5zZXRQcm9wZXJ0eSgnY2VudGVyJywgdGhpcy5jZW50ZXIpO1xyXG5cclxuICAgIHRoaXMuYmcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmVFdmVudCwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICB0b3VjaE1vdmVFdmVudChldnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgIHRoaXMuY2VudGVyWzBdICs9IGV2dC5nZXREZWx0YVgoKSAvIHRoaXMuYmcud2lkdGg7XHJcbiAgICB0aGlzLmNlbnRlclsxXSAtPSBldnQuZ2V0RGVsdGFZKCkgLyB0aGlzLmJnLmhlaWdodDtcclxuICAgIHRoaXMubWF0ZXJpYWwuc2V0UHJvcGVydHkoJ2NlbnRlcicsIHRoaXMuY2VudGVyKTtcclxuICB9XHJcbn1cclxuIl19
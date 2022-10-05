
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scene/Mosaic/Mosaic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e6cdawfgB1DSKkHRoeo2dHy', 'Mosaic');
// Scene/Mosaic/Mosaic.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Mosaic = /** @class */ (function (_super) {
    __extends(Mosaic, _super);
    function Mosaic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.material = null;
        return _this;
    }
    Mosaic.prototype.onLoad = function () {
        this.material = this.node.getChildByName('npc').getComponent(cc.Sprite).getMaterial(0);
    };
    Mosaic.prototype.setPixelCount = function (slide, type) {
        this.material.setProperty(type + "_count", Math.floor(slide.progress * 100));
    };
    Mosaic.prototype.togglePixel = function (toggle) {
        this.material.define('USE_MASAIC', toggle.isChecked, 0, true);
    };
    Mosaic = __decorate([
        ccclass
    ], Mosaic);
    return Mosaic;
}(cc.Component));
exports.default = Mosaic;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NlbmVcXE1vc2FpY1xcTW9zYWljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBY0M7UUFiQyxjQUFRLEdBQWdCLElBQUksQ0FBQzs7SUFhL0IsQ0FBQztJQVhDLHVCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFRCw4QkFBYSxHQUFiLFVBQWMsS0FBZ0IsRUFBRSxJQUFlO1FBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFJLElBQUksV0FBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCw0QkFBVyxHQUFYLFVBQVksTUFBaUI7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFia0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQWMxQjtJQUFELGFBQUM7Q0FkRCxBQWNDLENBZG1DLEVBQUUsQ0FBQyxTQUFTLEdBYy9DO2tCQWRvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vc2FpYyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgbWF0ZXJpYWw6IGNjLk1hdGVyaWFsID0gbnVsbDtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5tYXRlcmlhbCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnbnBjJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZ2V0TWF0ZXJpYWwoMCk7XHJcbiAgfVxyXG5cclxuICBzZXRQaXhlbENvdW50KHNsaWRlOiBjYy5TbGlkZXIsIHR5cGU6ICd4JyB8ICd5Jykge1xyXG4gICAgdGhpcy5tYXRlcmlhbC5zZXRQcm9wZXJ0eShgJHt0eXBlfV9jb3VudGAsIE1hdGguZmxvb3Ioc2xpZGUucHJvZ3Jlc3MgKiAxMDApKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVBpeGVsKHRvZ2dsZTogY2MuVG9nZ2xlKSB7XHJcbiAgICB0aGlzLm1hdGVyaWFsLmRlZmluZSgnVVNFX01BU0FJQycsIHRvZ2dsZS5pc0NoZWNrZWQsIDAsIHRydWUpO1xyXG4gIH1cclxufVxyXG4iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scene/Water_spread/Water_spread.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd485aKJH4VK9ZttqIWBQAMc', 'Water_spread');
// Scene/Water_spread/Water_spread.ts

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
var Water_spread = /** @class */ (function (_super) {
    __extends(Water_spread, _super);
    function Water_spread() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.material = null;
        _this.waveOffset = 0.0;
        return _this;
    }
    Water_spread.prototype.onLoad = function () {
        this.material = this.bg.getComponent(cc.Sprite).getMaterial(0);
        this.bg.on(cc.Node.EventType.TOUCH_END, this.touchStartEvent, this);
    };
    Water_spread.prototype.touchStartEvent = function (evt) {
        var pos = evt.getLocation();
        this.material.setProperty('center', [pos.x / this.bg.width, (this.bg.height - pos.y) / this.bg.height]);
        this.waveOffset = 0.0;
    };
    Water_spread.prototype.update = function (dt) {
        if (this.waveOffset > 2.0)
            return;
        this.waveOffset += dt;
        this.material.setProperty('wave_offset', this.waveOffset);
    };
    var _b;
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Node) === "function" ? _b : Object)
    ], Water_spread.prototype, "bg", void 0);
    Water_spread = __decorate([
        ccclass
    ], Water_spread);
    return Water_spread;
}(cc.Component));
exports.default = Water_spread;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NlbmVcXFdhdGVyX3NwcmVhZFxcV2F0ZXJfc3ByZWFkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBdUJDO1FBckJDLFFBQUUsR0FBWSxJQUFJLENBQUM7UUFDbkIsY0FBUSxHQUFnQixJQUFJLENBQUM7UUFPN0IsZ0JBQVUsR0FBVyxHQUFHLENBQUM7O0lBYTNCLENBQUM7SUFsQkMsNkJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBR0Qsc0NBQWUsR0FBZixVQUFnQixHQUF3QjtRQUN0QyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDekcsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7SUFDeEIsQ0FBQztJQUVELDZCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ1AsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUc7WUFBRSxPQUFPO1FBRWxDLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7SUFwQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDZCxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxJQUFJOzRDQUFRO0lBRkEsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXVCaEM7SUFBRCxtQkFBQztDQXZCRCxBQXVCQyxDQXZCeUMsRUFBRSxDQUFDLFNBQVMsR0F1QnJEO2tCQXZCb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYXRlcl9zcHJlYWQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGJnOiBjYy5Ob2RlID0gbnVsbDtcclxuICBtYXRlcmlhbDogY2MuTWF0ZXJpYWwgPSBudWxsO1xyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLm1hdGVyaWFsID0gdGhpcy5iZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5nZXRNYXRlcmlhbCgwKTtcclxuICAgIHRoaXMuYmcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoU3RhcnRFdmVudCwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICB3YXZlT2Zmc2V0OiBudW1iZXIgPSAwLjA7XHJcbiAgdG91Y2hTdGFydEV2ZW50KGV2dDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgbGV0IHBvcyA9IGV2dC5nZXRMb2NhdGlvbigpO1xyXG4gICAgdGhpcy5tYXRlcmlhbC5zZXRQcm9wZXJ0eSgnY2VudGVyJywgWyBwb3MueCAvIHRoaXMuYmcud2lkdGgsICh0aGlzLmJnLmhlaWdodCAtIHBvcy55KSAvIHRoaXMuYmcuaGVpZ2h0XSk7XHJcbiAgICB0aGlzLndhdmVPZmZzZXQgPSAwLjA7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoZHQpIHtcclxuICAgIGlmICh0aGlzLndhdmVPZmZzZXQgPiAyLjApIHJldHVybjtcclxuXHJcbiAgICB0aGlzLndhdmVPZmZzZXQgKz0gZHQ7XHJcbiAgICB0aGlzLm1hdGVyaWFsLnNldFByb3BlcnR5KCd3YXZlX29mZnNldCcsIHRoaXMud2F2ZU9mZnNldCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
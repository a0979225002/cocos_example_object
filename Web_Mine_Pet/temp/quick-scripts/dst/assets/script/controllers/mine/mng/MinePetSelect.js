
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/mine/mng/MinePetSelect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '36f187Vx9tGArp2Zx7M0LOh', 'MinePetSelect');
// script/controllers/mine/mng/MinePetSelect.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameCenter_1 = require("../../../data/GameCenter");
var MineSelect_1 = require("./MineSelect");
var MinePetSelect = /** @class */ (function (_super) {
    __extends(MinePetSelect, _super);
    function MinePetSelect() {
        var _this = _super.call(this, 0) || this;
        _this.setInitData();
        return _this;
    }
    MinePetSelect.prototype.reset = function () {
        this.slider.updateItemAni();
        this.slider.updateLevel();
    };
    MinePetSelect.prototype.setInitData = function () {
        this.bodyName = GameCenter_1.default.game.mineBodyName;
        this.floorName = GameCenter_1.default.game.mineFloorName;
    };
    return MinePetSelect;
}(MineSelect_1.MineSelect));
exports.default = MinePetSelect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcbWluZVxcbW5nXFxNaW5lUGV0U2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFrRDtBQUNsRCwyQ0FBMEM7QUFFMUM7SUFBMkMsaUNBQVU7SUFFakQ7UUFBQSxZQUNJLGtCQUFNLENBQUMsQ0FBQyxTQUVYO1FBREcsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOztJQUN2QixDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQ25ELENBQUM7SUFFTCxvQkFBQztBQUFELENBakJBLEFBaUJDLENBakIwQyx1QkFBVSxHQWlCcEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUNlbnRlciBmcm9tIFwiLi4vLi4vLi4vZGF0YS9HYW1lQ2VudGVyXCI7XHJcbmltcG9ydCB7IE1pbmVTZWxlY3QgfSBmcm9tIFwiLi9NaW5lU2VsZWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5lUGV0U2VsZWN0IGV4dGVuZHMgTWluZVNlbGVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRJbml0RGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2xpZGVyLnVwZGF0ZUl0ZW1BbmkoKTtcclxuICAgICAgICB0aGlzLnNsaWRlci51cGRhdGVMZXZlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEluaXREYXRhKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYm9keU5hbWUgPSBHYW1lQ2VudGVyLmdhbWUubWluZUJvZHlOYW1lO1xyXG4gICAgICAgIHRoaXMuZmxvb3JOYW1lID0gR2FtZUNlbnRlci5nYW1lLm1pbmVGbG9vck5hbWU7XHJcbiAgICB9XHJcblxyXG59Il19
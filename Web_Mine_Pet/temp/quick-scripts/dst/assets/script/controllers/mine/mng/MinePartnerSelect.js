
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/mine/mng/MinePartnerSelect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7fcaetwU4JJoYylMh7oczeT', 'MinePartnerSelect');
// script/controllers/mine/mng/MinePartnerSelect.ts

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
        var _this = _super.call(this, 1) || this;
        _this.setInitData();
        return _this;
    }
    MinePetSelect.prototype.setInitData = function () {
        this.bodyName = GameCenter_1.default.game.partnerBodyName;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcbWluZVxcbW5nXFxNaW5lUGFydG5lclNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBa0Q7QUFDbEQsMkNBQTBDO0FBRTFDO0lBQTJDLGlDQUFVO0lBRWpEO1FBQUEsWUFDSSxrQkFBTSxDQUFDLENBQUMsU0FFWDtRQURHLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7SUFDdkIsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUNuRCxDQUFDO0lBRUwsb0JBQUM7QUFBRCxDQVpBLEFBWUMsQ0FaMEMsdUJBQVUsR0FZcEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUNlbnRlciBmcm9tIFwiLi4vLi4vLi4vZGF0YS9HYW1lQ2VudGVyXCI7XHJcbmltcG9ydCB7IE1pbmVTZWxlY3QgfSBmcm9tIFwiLi9NaW5lU2VsZWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5lUGV0U2VsZWN0IGV4dGVuZHMgTWluZVNlbGVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoMSk7XHJcbiAgICAgICAgdGhpcy5zZXRJbml0RGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEluaXREYXRhKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYm9keU5hbWUgPSBHYW1lQ2VudGVyLmdhbWUucGFydG5lckJvZHlOYW1lO1xyXG4gICAgICAgIHRoaXMuZmxvb3JOYW1lID0gR2FtZUNlbnRlci5nYW1lLm1pbmVGbG9vck5hbWU7XHJcbiAgICB9XHJcblxyXG59Il19
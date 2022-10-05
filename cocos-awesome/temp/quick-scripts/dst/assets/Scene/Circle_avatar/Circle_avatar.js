
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scene/Circle_avatar/Circle_avatar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b33a01MvpCe7oAqTa8OiHm', 'Circle_avatar');
// Scene/Circle_avatar/Circle_avatar.ts

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
var CircleAvatar = /** @class */ (function (_super) {
    __extends(CircleAvatar, _super);
    function CircleAvatar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rectAvatar = null;
        return _this;
    }
    CircleAvatar.prototype.start = function () {
        this.rectAvatar.getMaterial(0).setProperty('wh_ratio', this.rectAvatar.node.width / this.rectAvatar.node.height);
    };
    var _b;
    __decorate([
        property(cc.Sprite),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Sprite) === "function" ? _b : Object)
    ], CircleAvatar.prototype, "rectAvatar", void 0);
    CircleAvatar = __decorate([
        ccclass
    ], CircleAvatar);
    return CircleAvatar;
}(cc.Component));
exports.default = CircleAvatar;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NlbmVcXENpcmNsZV9hdmF0YXJcXENpcmNsZV9hdmF0YXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFPQztRQUxDLGdCQUFVLEdBQWMsSUFBSSxDQUFDOztJQUsvQixDQUFDO0lBSEMsNEJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25ILENBQUM7O0lBSkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDUixFQUFFLG9CQUFGLEVBQUUsQ0FBQyxNQUFNO29EQUFRO0lBRlYsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQU9oQztJQUFELG1CQUFDO0NBUEQsQUFPQyxDQVB5QyxFQUFFLENBQUMsU0FBUyxHQU9yRDtrQkFQb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGVBdmF0YXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgcmVjdEF2YXRhcjogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB0aGlzLnJlY3RBdmF0YXIuZ2V0TWF0ZXJpYWwoMCkuc2V0UHJvcGVydHkoJ3doX3JhdGlvJywgdGhpcy5yZWN0QXZhdGFyLm5vZGUud2lkdGggLyB0aGlzLnJlY3RBdmF0YXIubm9kZS5oZWlnaHQpO1xyXG4gIH1cclxufVxyXG4iXX0=
"use strict";
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
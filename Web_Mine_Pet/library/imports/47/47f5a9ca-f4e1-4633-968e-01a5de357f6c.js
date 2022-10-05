"use strict";
cc._RF.push(module, '47f5anK9OFGM5aOAaXeNX9s', 'UISkinPop');
// script/controllers/ui/UISkinPop.ts

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
var AssetsMng_1 = require("../../manager/AssetsMng");
var GameCenter_1 = require("../../data/GameCenter");
var PropSelectPop_1 = require("../mine/pop/PropSelectPop");
var LangMng_1 = require("../../manager/LangMng");
var UISkinPop = /** @class */ (function (_super) {
    __extends(UISkinPop, _super);
    function UISkinPop() {
        var _this = _super.call(this) || this;
        _this.langTxtData = null;
        _this.langTxtData = {
            noDisplay: LangMng_1.default.getTxt("T_113"),
        };
        _this.btnIconImg = {
            n: _this.getBtnNormalImg(),
            a: _this.getBtnActiveImg(),
        };
        return _this;
    }
    UISkinPop.prototype.getListData = function () {
        return GameCenter_1.default.game.mineSkinListData;
    };
    UISkinPop.prototype.getBtnNormalImg = function () {
        var arr = [null];
        var img = AssetsMng_1.default.getAssets("decoration.plist");
        for (var i = 1; i < 8; i++) {
            arr[i] = img.getSpriteFrame("skin_01_n");
        }
        return arr;
    };
    UISkinPop.prototype.getBtnActiveImg = function () {
        var arr = [null];
        var img = AssetsMng_1.default.getAssets("decoration.plist");
        for (var i = 1; i < 8; i++) {
            arr[i] = img.getSpriteFrame("skin_01_a");
        }
        return arr;
    };
    UISkinPop.prototype.getCurrentSelectID = function (id) {
        return GameCenter_1.default.game.mineSkin[id];
    };
    return UISkinPop;
}(PropSelectPop_1.default));
exports.default = UISkinPop;

cc._RF.pop();
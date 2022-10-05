"use strict";
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
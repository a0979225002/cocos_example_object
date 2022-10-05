"use strict";
cc._RF.push(module, 'b2f2byd4L5G6Z6W+vjV+m7B', 'MineSelect');
// script/controllers/mine/mng/MineSelect.ts

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
exports.MineSelect = void 0;
var MineSlider_1 = require("./MineSlider");
var UIBase_1 = require("../../ui/UIBase");
var DataMinePetSelect_1 = require("../../../data/scene/DataMinePetSelect");
var MineSelect = /** @class */ (function (_super) {
    __extends(MineSelect, _super);
    function MineSelect(type) {
        var _this = _super.call(this) || this;
        _this.type = null;
        _this.bodyName = [];
        _this.floorName = [];
        _this.type = type;
        return _this;
    }
    MineSelect.prototype.onUILoad = function () {
        this.ui = this.node.addComponent(DataMinePetSelect_1.default);
        this.slider = new MineSlider_1.MineSlider(this.ui, this.type);
    };
    MineSelect.prototype.onStart = function () {
        this.slider.init();
        this.slider.createSliderList(this.getFloorAssets(), this.getBodyAssets());
    };
    MineSelect.prototype.onShow = function () {
        this.onRegisterEvent(this.ui.btn_go, this.onBtnGoClick, this);
        this.slider.show();
        this.slider.arrowBtnsBindOn();
    };
    MineSelect.prototype.onHide = function () {
        this.unRegisterEvent(this.ui.btn_go, this.onBtnGoClick, this);
        this.slider.hide();
        this.slider.arrowBtnsBindOff();
    };
    MineSelect.prototype.onBtnGoClick = function () {
        this.slider.onBtnGoClick();
    };
    MineSelect.prototype.getBodyAssets = function () {
        return this.bodyName;
    };
    MineSelect.prototype.getFloorAssets = function () {
        return this.floorName;
    };
    return MineSelect;
}(UIBase_1.default));
exports.MineSelect = MineSelect;

cc._RF.pop();
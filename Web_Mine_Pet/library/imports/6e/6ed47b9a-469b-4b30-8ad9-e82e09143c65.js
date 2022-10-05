"use strict";
cc._RF.push(module, '6ed47uaRptLMIrZ6C4JFDxl', 'MineMngCon');
// script/controllers/mine/MineMngCon.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIBase_1 = require("../ui/UIBase");
var DataMineMngCon_1 = require("../../data/scene/DataMineMngCon");
var MinePetSelect_1 = require("./mng/MinePetSelect");
var MinePartnerSelect_1 = require("./mng/MinePartnerSelect");
var MineToolBox_1 = require("./mng/MineToolBox");
var ccclass = cc._decorator.ccclass;
var MineMngCon = /** @class */ (function (_super) {
    __extends(MineMngCon, _super);
    function MineMngCon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pages = [];
        _this.preIndex = 0;
        _this.currentIndex = 0;
        return _this;
    }
    MineMngCon.prototype.onUILoad = function () {
        this.ui = this.node.addComponent(DataMineMngCon_1.default);
        this.page1 = this.ui.node_page_1.addComponent(MinePetSelect_1.default);
        this.page2 = this.ui.node_page_2.addComponent(MinePartnerSelect_1.default);
        this.page3 = this.ui.node_page_3.addComponent(MineToolBox_1.default);
        this.pages.push(this.page1, this.page2, this.page3);
        this.pageSwitch(0);
    };
    MineMngCon.prototype.pageSwitch = function (id) {
        this.preIndex = this.currentIndex;
        this.currentIndex = id;
        for (var i = 0; i < this.pages.length; i++) {
            this.pages[i].node.active = i == this.currentIndex;
        }
        if (this.pages[this.currentIndex].reset) {
            this.pages[this.currentIndex].reset();
        }
    };
    MineMngCon = __decorate([
        ccclass
    ], MineMngCon);
    return MineMngCon;
}(UIBase_1.default));
exports.default = MineMngCon;

cc._RF.pop();
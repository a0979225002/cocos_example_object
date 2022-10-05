"use strict";
cc._RF.push(module, '79162YREBtFPLtdy43/hcZX', 'DataMineMngCon');
// script/data/scene/DataMineMngCon.ts

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
var ccclass = cc._decorator.ccclass;
var DataMineMngCon = /** @class */ (function (_super) {
    __extends(DataMineMngCon, _super);
    function DataMineMngCon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataMineMngCon.prototype.onLoad = function () {
        this.node_view_holder = this.node.getChildByName("view_holder");
        this.node_page_1 = this.node_view_holder.getChildByName("con_1");
        this.node_page_2 = this.node_view_holder.getChildByName("con_2");
        this.node_page_3 = this.node_view_holder.getChildByName("con_3");
    };
    DataMineMngCon = __decorate([
        ccclass
    ], DataMineMngCon);
    return DataMineMngCon;
}(cc.Component));
exports.default = DataMineMngCon;

cc._RF.pop();
"use strict";
cc._RF.push(module, '951fe/2bjRGuJYzEde9QRhM', 'DataUIMessage');
// script/data/scene/DataUIMessage.ts

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
var DataUIMessage = /** @class */ (function (_super) {
    __extends(DataUIMessage, _super);
    function DataUIMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataUIMessage.prototype.onLoad = function () {
        this.node_main = this.node.getChildByName("main");
        this.node_backBg = this.node.getChildByName("bg");
        this.label_msg_txt = this.node_main.getChildByName("txt").getComponent(cc.Label);
        this.btn_main = this.node_main.getChildByName("btn_main");
        this.btn_cancel = this.btn_main.getChildByName("btn_cancel");
        this.btn_confirm = this.btn_main.getChildByName("btn_confirm");
        this.label_cancel = this.btn_cancel.getChildByName("txt").getComponent(cc.Label);
        this.label_confirm = this.btn_confirm.getChildByName("txt").getComponent(cc.Label);
    };
    DataUIMessage = __decorate([
        ccclass
    ], DataUIMessage);
    return DataUIMessage;
}(cc.Component));
exports.default = DataUIMessage;

cc._RF.pop();
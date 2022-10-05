"use strict";
cc._RF.push(module, '6ee63MtGNRCs7+qoygTJjeG', 'UILoadTip');
// script/controllers/ui/UILoadTip.ts

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
var UIBase_1 = require("./UIBase");
var ViewZorder_1 = require("../../data/const/ViewZorder");
var ccclass = cc._decorator.ccclass;
var UILoadTip = /** @class */ (function (_super) {
    __extends(UILoadTip, _super);
    function UILoadTip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UILoadTip.prototype.onUILoad = function () {
        this.icon = this.node.getChildByName("icon");
        this.node.zIndex = ViewZorder_1.ViewZorder.Loading;
        this.hide();
    };
    UILoadTip.prototype.show = function () {
        this.node.active = true;
        this.icon.opacity = 0;
        this.icon.runAction(cc.sequence(cc.delayTime(.5), cc.fadeIn(.2)));
    };
    UILoadTip.prototype.hide = function () {
        this.icon.stopAllActions();
        this.node.active = false;
    };
    UILoadTip = __decorate([
        ccclass
    ], UILoadTip);
    return UILoadTip;
}(UIBase_1.default));
exports.default = UILoadTip;

cc._RF.pop();
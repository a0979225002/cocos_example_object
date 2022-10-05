"use strict";
cc._RF.push(module, '79c2fe0u3xCq4f+JmAcLrhS', 'GearItem');
// scripts/GearItem.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GearItem = /** @class */ (function (_super) {
    __extends(GearItem, _super);
    function GearItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.num = 8;
        _this.radius = 112 / 2;
        _this.velocity = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    GearItem.prototype.start = function () {
    };
    GearItem.prototype.update = function (dt) {
        if (this.velocity != 0) {
            this.node.angle += this.velocity;
        }
    };
    __decorate([
        property
    ], GearItem.prototype, "num", void 0);
    __decorate([
        property
    ], GearItem.prototype, "radius", void 0);
    __decorate([
        property
    ], GearItem.prototype, "velocity", void 0);
    GearItem = __decorate([
        ccclass
    ], GearItem);
    return GearItem;
}(cc.Component));
exports.default = GearItem;

cc._RF.pop();
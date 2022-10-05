"use strict";
cc._RF.push(module, '1484ebWK2pJpLb4brP/XlwY', 'test');
// Script/test.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var test = /** @class */ (function (_super) {
    __extends(test, _super);
    function test() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setTime = 43200000;
        _this.showTime = 0;
        return _this;
    }
    test.prototype.start = function () {
        var _this = this;
        setInterval(function () {
            _this.showTime += 1000;
            console.log(_this.updateTime(_this.showTime, _this.setTime));
        }, 1000);
    };
    test.prototype.updateTime = function (time, countTime) {
        var hr = Math.floor(time / 3600);
        var min = Math.floor((time - (hr * 3600)) / 60);
        var sec = time - (hr * 3600) - (min * 60);
        var returnPercent = time / countTime;
        return returnPercent;
    };
    test = __decorate([
        ccclass
    ], test);
    return test;
}(cc.Component));
exports.default = test;

cc._RF.pop();
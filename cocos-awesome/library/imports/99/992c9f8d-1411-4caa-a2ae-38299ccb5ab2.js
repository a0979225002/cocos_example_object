"use strict";
cc._RF.push(module, '992c9+NFBFMqqKuOCmcy1qy', 'SystemCenter');
// src/SystemCenter.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var ccclass = cc._decorator.ccclass;
var fcc_template_1 = require("./dist/tcc/fcc-template");
var MySceneStyle_1 = require("./MySceneStyle");
/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2021-09-14 上午 11:11
 * @Version 1.0
 */
var SystemCenter = /** @class */ (function (_super) {
    __extends(SystemCenter, _super);
    function SystemCenter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SystemCenter.prototype.onCreate = function () {
        fcc.sceneMgr
            .setDesignWidth(1280)
            .setDesignHeight(720)
            .updateSize(new MySceneStyle_1.default())
            .startListener(500);
    };
    SystemCenter.prototype.configSetting = function () {
        fcc.configMgr
            .setCocosDebug(cc.debug.DebugMode.INFO)
            .setFrameWorkDebug(true)
            .build();
    };
    SystemCenter.prototype.audioSetting = function () {
    };
    SystemCenter.prototype.initClient = function () {
    };
    SystemCenter.prototype.notificationSetting = function () {
    };
    SystemCenter.prototype.processCreate = function () {
    };
    SystemCenter = __decorate([
        ccclass
    ], SystemCenter);
    return SystemCenter;
}(fcc_template_1.ACenterTemplate));
exports.default = SystemCenter;

cc._RF.pop();
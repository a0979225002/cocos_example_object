
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/SystemCenter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxTeXN0ZW1DZW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTyxPQUFPLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7QUFFdkMsd0RBQXdEO0FBQ3hELCtDQUEwQztBQUUxQzs7Ozs7R0FLRztBQUVIO0lBQTBDLGdDQUFlO0lBQXpEOztJQTRCQSxDQUFDO0lBMUJhLCtCQUFRLEdBQWxCO1FBQ0ksR0FBRyxDQUFDLFFBQVE7YUFDUCxjQUFjLENBQUMsSUFBSSxDQUFDO2FBQ3BCLGVBQWUsQ0FBQyxHQUFHLENBQUM7YUFDcEIsVUFBVSxDQUFDLElBQUksc0JBQVksRUFBRSxDQUFDO2FBQzlCLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRVMsb0NBQWEsR0FBdkI7UUFDSSxHQUFHLENBQUMsU0FBUzthQUNSLGFBQWEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7YUFDdEMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO2FBQ3ZCLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFUyxtQ0FBWSxHQUF0QjtJQUNBLENBQUM7SUFFUyxpQ0FBVSxHQUFwQjtJQUNBLENBQUM7SUFFUywwQ0FBbUIsR0FBN0I7SUFDQSxDQUFDO0lBRVMsb0NBQWEsR0FBdkI7SUFDQSxDQUFDO0lBM0JnQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBNEJoQztJQUFELG1CQUFDO0NBNUJELEFBNEJDLENBNUJ5Qyw4QkFBZSxHQTRCeEQ7a0JBNUJvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNjY2xhc3MgPSBjYy5fZGVjb3JhdG9yLmNjY2xhc3M7XG5pbXBvcnQgcHJvcGVydHkgPSBjYy5fZGVjb3JhdG9yLnByb3BlcnR5O1xuaW1wb3J0IHtBQ2VudGVyVGVtcGxhdGV9IGZyb20gXCIuL2Rpc3QvdGNjL2ZjYy10ZW1wbGF0ZVwiO1xuaW1wb3J0IE15U2NlbmVTdHlsZSBmcm9tICcuL015U2NlbmVTdHlsZSc7XG5cbi8qKlxuICogQEF1dGhvciDola3nq4vlk4FcbiAqIEBEZXNjcmlwdGlvbiBUT0RPXG4gKiBARGF0ZSAyMDIxLTA5LTE0IOS4iuWNiCAxMToxMVxuICogQFZlcnNpb24gMS4wXG4gKi9cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTeXN0ZW1DZW50ZXIgZXh0ZW5kcyBBQ2VudGVyVGVtcGxhdGV7XG5cbiAgICBwcm90ZWN0ZWQgb25DcmVhdGUoKTogdm9pZCB7XG4gICAgICAgIGZjYy5zY2VuZU1nclxuICAgICAgICAgICAgLnNldERlc2lnbldpZHRoKDEyODApXG4gICAgICAgICAgICAuc2V0RGVzaWduSGVpZ2h0KDcyMClcbiAgICAgICAgICAgIC51cGRhdGVTaXplKG5ldyBNeVNjZW5lU3R5bGUoKSlcbiAgICAgICAgICAgIC5zdGFydExpc3RlbmVyKDUwMCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNvbmZpZ1NldHRpbmcoKTogdm9pZCB7XG4gICAgICAgIGZjYy5jb25maWdNZ3JcbiAgICAgICAgICAgIC5zZXRDb2Nvc0RlYnVnKGNjLmRlYnVnLkRlYnVnTW9kZS5JTkZPKVxuICAgICAgICAgICAgLnNldEZyYW1lV29ya0RlYnVnKHRydWUpXG4gICAgICAgICAgICAuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXVkaW9TZXR0aW5nKCk6IHZvaWQge1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0Q2xpZW50KCk6IHZvaWQge1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBub3RpZmljYXRpb25TZXR0aW5nKCk6IHZvaWQge1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBwcm9jZXNzQ3JlYXRlKCk6IHZvaWQge1xuICAgIH1cbn1cbiJdfQ==
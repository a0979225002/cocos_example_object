"use strict";
cc._RF.push(module, '87246oEJvxNxIO0AJc0p5RR', 'start');
// script/scene/start.ts

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
var rolling_lottery_1 = require("../rolling_lottery/rolling_lottery");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var start = /** @class */ (function (_super) {
    __extends(start, _super);
    function start() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /* ***************private*************** */
        _this._rolling_lottery_os = [];
        return _this;
    }
    /* -------------------------------segmentation------------------------------- */
    start.prototype.onLoad = function () {
        var _this = this;
        cc.find("Canvas/抽奖机").children.forEach(function (v1_o, k1_n) {
            _this._rolling_lottery_os.push(v1_o.getComponent(rolling_lottery_1.default));
            _this._rolling_lottery_os[k1_n].reset();
        });
    };
    /* ***************按钮事件*************** */
    start.prototype.btn_打乱 = function () {
        this._rolling_lottery_os.forEach(function (v1_o) {
            v1_o.random_order();
        });
    };
    start.prototype.btn_随机抽奖 = function () {
        if (this._rolling_lottery_os.filter(function (v1_o) { return v1_o.scroll_b; }).length) {
            cc.warn("动作未结束");
            return;
        }
        this._rolling_lottery_os.forEach(function (v1_o) {
            var old_speed_n = v1_o.max_speed_n;
            // 修改速度让其更加真实
            v1_o.max_speed_n += Math.floor(Math.random() * 11) - 5;
            v1_o.scroll(Math.floor(Math.random() * v1_o.node.children.length), {
                "rebound_finish_cb_f": function () {
                    v1_o.max_speed_n = old_speed_n;
                }
            });
        });
    };
    start.prototype.btn_必中抽奖 = function () {
        if (this._rolling_lottery_os.filter(function (v1_o) { return v1_o.scroll_b; }).length) {
            cc.warn("动作未结束");
            return;
        }
        var index_n = Math.floor(Math.random() * this._rolling_lottery_os[0].node.children.length);
        var target_s = this._rolling_lottery_os[0].node.children[index_n].name;
        this._rolling_lottery_os.forEach(function (v1_o) {
            var old_speed_n = v1_o.max_speed_n;
            // 修改速度让其更加真实
            v1_o.max_speed_n += Math.floor(Math.random() * 11) - 5;
            v1_o.scroll(v1_o.node.children.findIndex(function (v2_o) { return v2_o.name === target_s; }), {
                "rebound_finish_cb_f": function () {
                    v1_o.max_speed_n = old_speed_n;
                }
            });
        });
    };
    start = __decorate([
        ccclass
    ], start);
    return start;
}(cc.Component));
exports.default = start;

cc._RF.pop();
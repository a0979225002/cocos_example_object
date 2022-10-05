
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene/start.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZVxcc3RhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQWlFO0FBRTNELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBa0RDO1FBakRHLDJDQUEyQztRQUNuQyx5QkFBbUIsR0FBc0IsRUFBRSxDQUFDOztJQWdEeEQsQ0FBQztJQS9DRyxnRkFBZ0Y7SUFDaEYsc0JBQU0sR0FBTjtRQUFBLGlCQUtDO1FBSkcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLElBQUk7WUFDOUMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHlCQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCx3Q0FBd0M7SUFDakMsc0JBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTSx3QkFBUSxHQUFmO1FBQ0ksSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFHLE9BQUEsSUFBSSxDQUFDLFFBQVEsRUFBYixDQUFhLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDOUQsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUNqQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ25DLGFBQWE7WUFDYixJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUMvRCxxQkFBcUIsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7Z0JBQ25DLENBQUM7YUFDSixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTSx3QkFBUSxHQUFmO1FBQ0ksSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFHLE9BQUEsSUFBSSxDQUFDLFFBQVEsRUFBYixDQUFhLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDOUQsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzRixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDdkUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7WUFDakMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNuQyxhQUFhO1lBQ2IsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUcsT0FBQSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBdEIsQ0FBc0IsQ0FBQyxFQUFFO2dCQUNyRSxxQkFBcUIsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7Z0JBQ25DLENBQUM7YUFDSixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFqRGdCLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FrRHpCO0lBQUQsWUFBQztDQWxERCxBQWtEQyxDQWxEa0MsRUFBRSxDQUFDLFNBQVMsR0FrRDlDO2tCQWxEb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByb2xsaW5nX2xvdHRlcnkgZnJvbSBcIi4uL3JvbGxpbmdfbG90dGVyeS9yb2xsaW5nX2xvdHRlcnlcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3RhcnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgLyogKioqKioqKioqKioqKioqcHJpdmF0ZSoqKioqKioqKioqKioqKiAqL1xyXG4gICAgcHJpdmF0ZSBfcm9sbGluZ19sb3R0ZXJ5X29zOiByb2xsaW5nX2xvdHRlcnlbXSA9IFtdO1xyXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXNlZ21lbnRhdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL+aKveWlluaculwiKS5jaGlsZHJlbi5mb3JFYWNoKCh2MV9vLCBrMV9uKT0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcm9sbGluZ19sb3R0ZXJ5X29zLnB1c2godjFfby5nZXRDb21wb25lbnQocm9sbGluZ19sb3R0ZXJ5KSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JvbGxpbmdfbG90dGVyeV9vc1trMV9uXS5yZXNldCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyogKioqKioqKioqKioqKioq5oyJ6ZKu5LqL5Lu2KioqKioqKioqKioqKioqICovXHJcbiAgICBwdWJsaWMgYnRuX+aJk+S5sSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9yb2xsaW5nX2xvdHRlcnlfb3MuZm9yRWFjaCh2MV9vPT4ge1xyXG4gICAgICAgICAgICB2MV9vLnJhbmRvbV9vcmRlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGJ0bl/pmo/mnLrmir3lpZYoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3JvbGxpbmdfbG90dGVyeV9vcy5maWx0ZXIodjFfbz0+IHYxX28uc2Nyb2xsX2IpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwi5Yqo5L2c5pyq57uT5p2fXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3JvbGxpbmdfbG90dGVyeV9vcy5mb3JFYWNoKHYxX289PiB7XHJcbiAgICAgICAgICAgIGxldCBvbGRfc3BlZWRfbiA9IHYxX28ubWF4X3NwZWVkX247XHJcbiAgICAgICAgICAgIC8vIOS/ruaUuemAn+W6puiuqeWFtuabtOWKoOecn+WunlxyXG4gICAgICAgICAgICB2MV9vLm1heF9zcGVlZF9uICs9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDExKSAtIDU7XHJcbiAgICAgICAgICAgIHYxX28uc2Nyb2xsKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHYxX28ubm9kZS5jaGlsZHJlbi5sZW5ndGgpLCB7XHJcbiAgICAgICAgICAgICAgICBcInJlYm91bmRfZmluaXNoX2NiX2ZcIjogKCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdjFfby5tYXhfc3BlZWRfbiA9IG9sZF9zcGVlZF9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBidG5f5b+F5Lit5oq95aWWKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9yb2xsaW5nX2xvdHRlcnlfb3MuZmlsdGVyKHYxX289PiB2MV9vLnNjcm9sbF9iKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY2Mud2FybihcIuWKqOS9nOacque7k+adn1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaW5kZXhfbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuX3JvbGxpbmdfbG90dGVyeV9vc1swXS5ub2RlLmNoaWxkcmVuLmxlbmd0aCk7XHJcbiAgICAgICAgbGV0IHRhcmdldF9zID0gdGhpcy5fcm9sbGluZ19sb3R0ZXJ5X29zWzBdLm5vZGUuY2hpbGRyZW5baW5kZXhfbl0ubmFtZTtcclxuICAgICAgICB0aGlzLl9yb2xsaW5nX2xvdHRlcnlfb3MuZm9yRWFjaCh2MV9vPT4ge1xyXG4gICAgICAgICAgICBsZXQgb2xkX3NwZWVkX24gPSB2MV9vLm1heF9zcGVlZF9uO1xyXG4gICAgICAgICAgICAvLyDkv67mlLnpgJ/luqborqnlhbbmm7TliqDnnJ/lrp5cclxuICAgICAgICAgICAgdjFfby5tYXhfc3BlZWRfbiArPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMSkgLSA1O1xyXG4gICAgICAgICAgICB2MV9vLnNjcm9sbCh2MV9vLm5vZGUuY2hpbGRyZW4uZmluZEluZGV4KHYyX289PiB2Ml9vLm5hbWUgPT09IHRhcmdldF9zKSwge1xyXG4gICAgICAgICAgICAgICAgXCJyZWJvdW5kX2ZpbmlzaF9jYl9mXCI6ICgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHYxX28ubWF4X3NwZWVkX24gPSBvbGRfc3BlZWRfbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19
"use strict";
cc._RF.push(module, '3c1d5suB8lEIKAQ6dFPve2H', 'bezier_curve');
// script/rolling_lottery/bezier_curve.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**贝塞尔曲线 */
var bezier_curve = /** @class */ (function () {
    function bezier_curve(point_os_) {
        this.control_point_os = point_os_;
    }
    /* -------------------------------segmentation------------------------------- */
    /* ***************功能函数*************** */
    /**递归阶乘 */
    bezier_curve.prototype._factorial = function (v_n_) {
        if (v_n_ <= 1) {
            return 1;
        }
        else {
            return v_n_ * this._factorial(v_n_ - 1);
        }
    };
    /**
     * 获取曲线上某点的位置
     * @param pos_n_ min: 0, max: 1
     */
    bezier_curve.prototype.point = function (pos_n_) {
        var _this = this;
        if (!this.control_point_os) {
            cc.error("不存在控制点");
            return;
        }
        if (this.control_point_os.length < 2) {
            cc.error("控制点不能少于2");
            return;
        }
        if (pos_n_ < 0 || pos_n_ > 1) {
            pos_n_ = pos_n_ < 0 ? 0 : 1;
        }
        if (pos_n_ === 0) {
            return this.control_point_os[0];
        }
        else if (pos_n_ === 1) {
            return this.control_point_os[this.control_point_os.length - 1];
        }
        var result_o = cc.v2();
        var index1_n = this.control_point_os.length - 1;
        this.control_point_os.forEach(function (v1_o, k1_s) {
            if (!k1_s) {
                result_o.x += v1_o.x * Math.pow((1 - pos_n_), index1_n - k1_s) * Math.pow(pos_n_, k1_s);
                result_o.y += v1_o.y * Math.pow((1 - pos_n_), index1_n - k1_s) * Math.pow(pos_n_, k1_s);
            }
            else {
                result_o.x += _this._factorial(index1_n) / _this._factorial(k1_s) / _this._factorial(index1_n - k1_s) * v1_o.x * Math.pow((1 - pos_n_), index1_n - k1_s) * Math.pow(pos_n_, k1_s);
                result_o.y += _this._factorial(index1_n) / _this._factorial(k1_s) / _this._factorial(index1_n - k1_s) * v1_o.y * Math.pow((1 - pos_n_), index1_n - k1_s) * Math.pow(pos_n_, k1_s);
            }
        });
        return result_o;
    };
    return bezier_curve;
}());
exports.default = bezier_curve;

cc._RF.pop();
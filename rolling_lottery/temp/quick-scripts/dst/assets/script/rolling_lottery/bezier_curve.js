
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/rolling_lottery/bezier_curve.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyb2xsaW5nX2xvdHRlcnlcXGJlemllcl9jdXJ2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLFdBQVc7QUFDWDtJQUNJLHNCQUFZLFNBQXFCO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUtELGdGQUFnRjtJQUNoRix3Q0FBd0M7SUFDeEMsVUFBVTtJQUNGLGlDQUFVLEdBQWxCLFVBQW1CLElBQVk7UUFDM0IsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ1gsT0FBTyxDQUFDLENBQUM7U0FDWjthQUFNO1lBQ0gsT0FBTyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDM0M7SUFDTCxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ksNEJBQUssR0FBWixVQUFhLE1BQWM7UUFBM0IsaUJBNkJDO1FBNUJHLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDeEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDckIsT0FBTztTQUNWO1FBQ0QsSUFBSSxNQUFNLEdBQUcsQ0FBQyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDMUIsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkM7YUFBTSxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNsRTtRQUNELElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUN2QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLElBQUk7WUFDckMsSUFBRyxDQUFDLElBQUksRUFBRTtnQkFDTixRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3hGLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQzthQUMzRjtpQkFBTTtnQkFDSCxRQUFRLENBQUMsQ0FBQyxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBRSxDQUFDLEdBQUcsTUFBTSxDQUFFLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO2dCQUNoTCxRQUFRLENBQUMsQ0FBQyxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBRSxDQUFDLEdBQUcsTUFBTSxDQUFFLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO2FBQ25MO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQXBEQSxBQW9EQyxJQUFBO0FBWUQsa0JBQWUsWUFBWSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlIF9iZXppZXJfY3VydmUge1xyXG4gICAgLyotLS0tLS0tLS1lbnVtX3ByaXZhdGUgKi9cclxuICAgIC8qLS0tLS0tLS0tZW51bV9wdWJsaWMgKi9cclxuICAgIC8qLS0tLS0tLS0taW50ZXJmYWNlX3ByaXZhdGUgKi9cclxuICAgIC8qLS0tLS0tLS0taW50ZXJmYWNlX3B1YmxpYyAqL1xyXG4gICAgLyotLS0tLS0tLS12YXIgfCBjb25zdCAqL1xyXG4gICAgLyotLS0tLS0tLS1jbGFzc19wcml2YXRlICovXHJcbiAgICAvKi0tLS0tLS0tLWNsYXNzX3B1YmxpYyAqL1xyXG59XHJcblxyXG4vKirotJ3loZ7lsJTmm7Lnur8gKi9cclxuY2xhc3MgYmV6aWVyX2N1cnZlIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvaW50X29zXz86IGNjLlZlYzJbXSkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbF9wb2ludF9vcyA9IHBvaW50X29zXztcclxuICAgIH1cclxuICAgIC8qICoqKioqKioqKioqKioqKnByaXZhdGUqKioqKioqKioqKioqKiogKi9cclxuICAgIC8qICoqKioqKioqKioqKioqKnB1YmxpYyoqKioqKioqKioqKioqKiAqL1xyXG4gICAgLyoq5o6n5Yi254K5ICovXHJcbiAgICBwdWJsaWMgY29udHJvbF9wb2ludF9vczogY2MuVmVjMltdO1xyXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXNlZ21lbnRhdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgIC8qICoqKioqKioqKioqKioqKuWKn+iDveWHveaVsCoqKioqKioqKioqKioqKiAqL1xyXG4gICAgLyoq6YCS5b2S6Zi25LmYICovXHJcbiAgICBwcml2YXRlIF9mYWN0b3JpYWwodl9uXzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHZfbl8gPD0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdl9uXyAqIHRoaXMuX2ZhY3RvcmlhbCh2X25fIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmm7Lnur/kuIrmn5DngrnnmoTkvY3nva5cclxuICAgICAqIEBwYXJhbSBwb3Nfbl8gbWluOiAwLCBtYXg6IDFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvaW50KHBvc19uXzogbnVtYmVyKTogY2MuVmVjMiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRyb2xfcG9pbnRfb3MpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCLkuI3lrZjlnKjmjqfliLbngrlcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY29udHJvbF9wb2ludF9vcy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwi5o6n5Yi254K55LiN6IO95bCR5LqOMlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocG9zX25fIDwgMCB8fCBwb3Nfbl8gPiAxKSB7XHJcbiAgICAgICAgICAgIHBvc19uXyA9IHBvc19uXyA8IDAgPyAwIDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBvc19uXyA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sX3BvaW50X29zWzBdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocG9zX25fID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xfcG9pbnRfb3NbdGhpcy5jb250cm9sX3BvaW50X29zLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzdWx0X28gPSBjYy52MigpO1xyXG4gICAgICAgIGxldCBpbmRleDFfbiA9IHRoaXMuY29udHJvbF9wb2ludF9vcy5sZW5ndGggLSAxO1xyXG4gICAgICAgIHRoaXMuY29udHJvbF9wb2ludF9vcy5mb3JFYWNoKCh2MV9vLCBrMV9zKT0+IHtcclxuICAgICAgICAgICAgaWYoIWsxX3MpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdF9vLnggKz0gdjFfby54ICogTWF0aC5wb3coKDEgLSBwb3Nfbl8pLCBpbmRleDFfbiAtIGsxX3MpICogTWF0aC5wb3cocG9zX25fLCBrMV9zKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdF9vLnkgKz0gdjFfby55ICogTWF0aC5wb3coKDEgLSBwb3Nfbl8pLCBpbmRleDFfbiAtIGsxX3MpICogTWF0aC5wb3cocG9zX25fLCBrMV9zKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdF9vLnggKz0gdGhpcy5fZmFjdG9yaWFsKGluZGV4MV9uKSAvIHRoaXMuX2ZhY3RvcmlhbChrMV9zKSAvIHRoaXMuX2ZhY3RvcmlhbChpbmRleDFfbiAtIGsxX3MpICogdjFfby54ICogTWF0aC5wb3coKCAxIC0gcG9zX25fICksIGluZGV4MV9uIC0gazFfcykgKiBNYXRoLnBvdyhwb3Nfbl8sIGsxX3MpIFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0X28ueSArPSB0aGlzLl9mYWN0b3JpYWwoaW5kZXgxX24pIC8gdGhpcy5fZmFjdG9yaWFsKGsxX3MpIC8gdGhpcy5fZmFjdG9yaWFsKGluZGV4MV9uIC0gazFfcykgKiB2MV9vLnkgKiBNYXRoLnBvdygoIDEgLSBwb3Nfbl8gKSwgaW5kZXgxX24gLSBrMV9zKSAqIE1hdGgucG93KHBvc19uXywgazFfcykgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0X287XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZSBiZXppZXJfY3VydmUge1xyXG4gICAgLyotLS0tLS0tLS1lbnVtX3ByaXZhdGUgKi9cclxuICAgIC8qLS0tLS0tLS0tZW51bV9wdWJsaWMgKi9cclxuICAgIC8qLS0tLS0tLS0taW50ZXJmYWNlX3ByaXZhdGUgKi9cclxuICAgIC8qLS0tLS0tLS0taW50ZXJmYWNlX3B1YmxpYyAqL1xyXG4gICAgLyotLS0tLS0tLS12YXIgfCBjb25zdCAqL1xyXG4gICAgLyotLS0tLS0tLS1jbGFzc19wcml2YXRlICovXHJcbiAgICAvKi0tLS0tLS0tLWNsYXNzX3B1YmxpYyAqL1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiZXppZXJfY3VydmU7Il19
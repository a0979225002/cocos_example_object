
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/rolling_lottery/rolling_lottery.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a64d0cyOW9D+LcGE3sqs49Z', 'rolling_lottery');
// script/rolling_lottery/rolling_lottery.ts

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
var bezier_curve_1 = require("./bezier_curve");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, help = _a.help;
var _rolling_lottery;
(function (_rolling_lottery) {
    /*---------enum_private */
    /*---------enum_public */
    /**移动方向 */
    var move_dire;
    (function (move_dire) {
        move_dire[move_dire["\u4E0A"] = 0] = "\u4E0A";
        move_dire[move_dire["\u4E0B"] = 1] = "\u4E0B";
    })(move_dire = _rolling_lottery.move_dire || (_rolling_lottery.move_dire = {}));
    /*---------var | const */
    /*---------class_private */
    /*---------class_public */
    var callback = /** @class */ (function () {
        function callback() {
            // ------------------public
            /**触发状态 */
            this.trigger_b = false;
            // ------------------属性
            this.callback_o = null;
            this.check_dist_n = 0;
        }
        __decorate([
            property({ displayName: "回调", type: cc.Component.EventHandler })
        ], callback.prototype, "callback_o", void 0);
        __decorate([
            property({ displayName: "提前检测距离", min: 0 })
        ], callback.prototype, "check_dist_n", void 0);
        callback = __decorate([
            ccclass("tool/rolling_lottery/callback")
        ], callback);
        return callback;
    }());
    _rolling_lottery.callback = callback;
})(_rolling_lottery || (_rolling_lottery = {}));
/**滚动抽奖 */
var rolling_lottery = /** @class */ (function (_super) {
    __extends(rolling_lottery, _super);
    function rolling_lottery() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**当前距离 */
        _this._curr_dist_n = 0;
        /**步长时间 */
        _this._step_time_s_n = 0.01;
        /**当前时间 */
        _this._curr_time_s_n = 0;
        /**动作列表 */
        _this._action_as = [];
        /* ***************public*************** */
        /**滚动状态 */
        _this.scroll_b = false;
        /* ***************属性*************** */
        _this.move_dire_e = _rolling_lottery.move_dire.下;
        _this.max_speed_n = 50;
        _this.turn_lap_n = 10;
        _this.turn_lap_random_n = 0;
        _this.inertia_n = 50;
        _this.scroll_action_os = [cc.v2(0, 0), cc.v2(0.44, 0.8925), cc.v2(0.375, 0.25), cc.v2(0.75, 0.75), cc.v2(1, 0.05)];
        _this.rebound_action_os = [cc.v2(0, -0.05), cc.v2(0.5, -0.02), cc.v2(1, 0)];
        /**滚动结束回调 */
        _this.scorll_finish_cb_os = [];
        /**反弹结束回调 */
        _this.rebound_finish_cb_os = [];
        /**滚动单格回调 */
        _this.scroll_grid_cb_os = [];
        /**滚动单格回调补全（例：一格距离5，滚动10调用2次回调而非1次） */
        _this.scroll_grid_cb_supp_b = true;
        return _this;
    }
    rolling_lottery_1 = rolling_lottery;
    /* -------------------------------segmentation------------------------------- */
    rolling_lottery.prototype.onLoad = function () {
        // ------------------添加动作
        // 滚动
        this._action_as.push(this._scroll_action_a = {
            "bezier_o": new bezier_curve_1.default(this.scroll_action_os),
            "dist_n": 0,
        });
        // 反弹
        if (this.inertia_n > 0) {
            this._action_as.push(this._rebound_action_a = {
                "bezier_o": new bezier_curve_1.default(this.rebound_action_os),
                "dist_n": 0,
            });
        }
        var debug_b = false;
        if (!debug_b) {
            return;
        }
        var bezier_o = this._action_as[0].bezier_o;
        var point_os = [];
        var graphics_o = cc.Canvas.instance.node.getComponent(cc.Graphics) || cc.Canvas.instance.node.addComponent(cc.Graphics);
        var start_b = false;
        var offset_o = cc.v2(-cc.Canvas.instance.node.width * 0.5 + 100, -cc.Canvas.instance.node.height * 0.5 + 100);
        var scale_n = 100;
        for (var i = 0; i <= 1; i += 0.1) {
            point_os.push(bezier_o.point(i));
        }
        // ------------------绘制曲线线段
        graphics_o.strokeColor = cc.Color.WHITE;
        point_os.forEach(function (v1_o) {
            if (!start_b) {
                start_b = true;
                graphics_o.moveTo(v1_o.x * scale_n + offset_o.x, v1_o.y * scale_n + offset_o.y);
            }
            else {
                graphics_o.lineTo(v1_o.x * scale_n + offset_o.x, v1_o.y * scale_n + offset_o.y);
            }
        });
        graphics_o.stroke();
        // ------------------绘制控制点
        graphics_o.fillColor = cc.Color.RED;
        bezier_o.control_point_os.forEach(function (v1_o) {
            graphics_o.circle(v1_o.x * scale_n + offset_o.x, v1_o.y * scale_n + offset_o.y, 5);
            graphics_o.fill();
        });
        graphics_o.stroke();
    };
    rolling_lottery.prototype.update = function (dt_n_) {
        var _this = this;
        if (!this.scroll_b) {
            return;
        }
        var curr_action_a = this._action_as[this._curr_action_n];
        if ((curr_action_a.dist_n > 0 && this._curr_dist_n < curr_action_a.dist_n)
            || (curr_action_a.dist_n < 0 && this._curr_dist_n > curr_action_a.dist_n)) {
            this._curr_time_s_n += dt_n_;
            if (this._curr_time_s_n >= this._step_time_s_n) {
                this._curr_time_s_n -= this._step_time_s_n;
                /**距离比例 */
                var dist_scale_n = Math.round(this._curr_dist_n / Math.abs(curr_action_a.dist_n) * 100) / 100;
                /**当前t的曲线坐标y */
                var y_n = curr_action_a.bezier_o.point(dist_scale_n).y;
                // ------------------防止0停止运动
                if (y_n === 0) {
                    var pre_o = curr_action_a.bezier_o.point(dist_scale_n - 0.01);
                    var next_o = curr_action_a.bezier_o.point(dist_scale_n + 0.01);
                    y_n = next_o.y;
                    if (y_n === 0) {
                        y_n = pre_o.y >= 0 ? 0.01 : -0.01;
                    }
                }
                this._curr_speed_n = this.max_speed_n * y_n;
                if ((this._curr_dist_n + Math.abs(this._curr_speed_n)) > curr_action_a.dist_n) {
                    this._curr_speed_n = curr_action_a.dist_n - this._curr_dist_n;
                }
                this._curr_dist_n += Math.abs(this._curr_speed_n);
                if (this.move_dire_e === _rolling_lottery.move_dire.下) {
                    this._curr_speed_n = -this._curr_speed_n;
                }
                this._scrolling();
                this._update_move_dist(this._curr_speed_n);
            }
        }
        // ------------------动作执行完成，自动执行下个动作
        else if (this._curr_action_n < this._action_as.length - 1) {
            ++this._curr_action_n;
            this._curr_dist_n = 0;
            this.update(0);
        }
        // ------------------所有动作执行完成
        else {
            this.scroll_b = false;
        }
        switch (curr_action_a) {
            // 滚动
            case this._scroll_action_a:
                {
                    // ------------------结束回调
                    if (this._config_o.scroll_finish_cb_f && (this._curr_dist_n + this._config_o.scorll_trigger_dist_n) >= curr_action_a.dist_n) {
                        this._config_o.scroll_finish_cb_f();
                        this._config_o.scroll_finish_cb_f = null;
                    }
                    this.scorll_finish_cb_os.forEach(function (v1_o) {
                        if (!v1_o.trigger_b && (_this._curr_dist_n + v1_o.check_dist_n) >= curr_action_a.dist_n) {
                            v1_o.callback_o.emit([v1_o.callback_o.customEventData]);
                            v1_o.trigger_b = true;
                        }
                    });
                }
                break;
            // 反弹
            case this._rebound_action_a:
                {
                    // ------------------结束回调
                    if (this._config_o.rebound_finish_cb_f && (this._curr_dist_n + this._config_o.rebound_trigger_dist_n) >= curr_action_a.dist_n) {
                        this._config_o.rebound_finish_cb_f();
                        this._config_o.rebound_finish_cb_f = null;
                    }
                    this.rebound_finish_cb_os.forEach(function (v1_o) {
                        if (!v1_o.trigger_b && (_this._curr_dist_n + v1_o.check_dist_n) >= curr_action_a.dist_n) {
                            v1_o.callback_o.emit([v1_o.callback_o.customEventData]);
                            v1_o.trigger_b = true;
                        }
                    });
                }
                break;
        }
        // cc.log(this._dist_n);
    };
    /* ***************功能函数*************** */
    /**获取在世界坐标系下的节点包围盒(不包含自身激活的子节点范围) */
    rolling_lottery.prototype._get_bounding_box_to_world = function (node_o_) {
        var w_n = node_o_._contentSize.width;
        var h_n = node_o_._contentSize.height;
        var rect_o = cc.rect(-node_o_._anchorPoint.x * w_n, -node_o_._anchorPoint.y * h_n, w_n, h_n);
        node_o_._calculWorldMatrix();
        rect_o.transformMat4(rect_o, node_o_._worldMatrix);
        return rect_o;
    };
    /**检测碰撞 */
    rolling_lottery.prototype._check_collision = function (node_o_) {
        var rect1_o = this._get_bounding_box_to_world(this.node);
        var rect2_o = this._get_bounding_box_to_world(node_o_);
        // ------------------保险范围
        rect1_o.width += rect1_o.width * 0.5;
        rect1_o.height += rect1_o.height * 0.5;
        rect1_o.x -= rect1_o.width * 0.25;
        rect1_o.y -= rect1_o.height * 0.25;
        return rect1_o.intersects(rect2_o);
    };
    /**重置 */
    rolling_lottery.prototype._reset = function () {
        // ------------------重置数据
        this._last_pos_n = undefined;
        this._curr_dist_n = 0;
        this._move_dist_n = 0;
        this._curr_time_s_n = 0;
        this._curr_action_n = 0;
        this._action_as.forEach(function (v1_a) {
            v1_a.dist_n = 0;
        });
        this.scorll_finish_cb_os.forEach(function (v1_o) {
            v1_o.trigger_b = false;
        });
        this.rebound_finish_cb_os.forEach(function (v1_o) {
            v1_o.trigger_b = false;
        });
    };
    /**更新运动距离 */
    rolling_lottery.prototype._update_move_dist = function (dist_n_) {
        if (!this._config_o.scroll_grid_cb_f) {
            return;
        }
        this._move_dist_n += Math.abs(dist_n_);
        /**当前所在格子 */
        var curr_pos_n = Math.floor(this._move_dist_n / this._lap_len_n) * this.node.children.length;
        /**整除单圈长度后的剩余距离 */
        var dist_n = this._move_dist_n % this._lap_len_n;
        for (var k1_n = 0; k1_n < this.node.children.length; ++k1_n) {
            if ((dist_n -= this.node.children[k1_n].height) <= 0) {
                curr_pos_n += k1_n;
                break;
            }
        }
        // ------------------执行回调
        if (this._last_pos_n !== undefined && curr_pos_n !== this._last_pos_n) {
            if (this._config_o.scroll_grid_cb_supp_b) {
                var for_n = Math.abs(this._last_pos_n - curr_pos_n);
                for (; for_n--;) {
                    this._config_o.scroll_grid_cb_f();
                }
            }
            else {
                this._config_o.scroll_grid_cb_f();
            }
            if (this.scroll_grid_cb_supp_b) {
                var for_n = Math.abs(this._last_pos_n - curr_pos_n);
                for (; for_n--;) {
                    this.scroll_grid_cb_os.forEach(function (v1_o) {
                        v1_o.emit([v1_o.customEventData]);
                    });
                }
            }
            else {
                this.scroll_grid_cb_os.forEach(function (v1_o) {
                    v1_o.emit([v1_o.customEventData]);
                });
            }
        }
        this._last_pos_n = curr_pos_n;
    };
    /**计算运动距离 */
    rolling_lottery.prototype._comp_move_dist = function (index_n_) {
        /**中心点y */
        var center_y_n = -this.node.height * this.node.anchorY + this.node.height * 0.5;
        /**距离 */
        var dist_y_n = 0;
        if (this.move_dire_e === _rolling_lottery.move_dire.上) {
            if (this.node.children[index_n_].y > center_y_n) {
                dist_y_n = this._lap_len_n - (this.node.children[index_n_].y - center_y_n);
            }
            else if (this.node.children[index_n_].y < center_y_n) {
                dist_y_n = center_y_n - this.node.children[index_n_].y;
            }
        }
        else {
            if (this.node.children[index_n_].y > center_y_n) {
                dist_y_n = this.node.children[index_n_].y - center_y_n;
            }
            else if (this.node.children[index_n_].y < center_y_n) {
                dist_y_n = this._lap_len_n - (center_y_n - this.node.children[index_n_].y);
            }
        }
        return dist_y_n;
    };
    /**重置
     * - 重置布局，在更新子节点后调用
     */
    rolling_lottery.prototype.reset = function () {
        var _this = this;
        // ------------------重置布局
        var old_h_n = this.node.height;
        var layout_o = this.node.getComponent(cc.Layout);
        layout_o.enabled = true;
        layout_o.updateLayout();
        layout_o.enabled = false;
        this.node.height = old_h_n;
        this._lap_len_n = 0;
        this.node.children.forEach(function (v1_o) {
            _this._lap_len_n += v1_o.height;
        });
        this._reset();
    };
    /**随机子节点顺序（打乱） */
    rolling_lottery.prototype.random_order = function () {
        if (this.scroll_b) {
            cc.warn("忙碌");
            return;
        }
        var children_os = [];
        children_os.push.apply(children_os, this.node.children);
        this.node.removeAllChildren();
        while (children_os.length) {
            this.node.addChild(children_os.splice(Math.floor(Math.random() * children_os.length), 1)[0]);
        }
        this.reset();
    };
    /**
     * 滚动
     * @param index_n_ 目标位置
     */
    rolling_lottery.prototype.scroll = function (index_n_, config_o_) {
        if (index_n_ >= this.node.children.length) {
            cc.error("目标位置错误");
            return;
        }
        if (this.scroll_b) {
            cc.error("忙碌");
            return;
        }
        this._config_o = new rolling_lottery_1.config(config_o_);
        this._reset();
        /**运动距离 */
        var move_dist_n = this._comp_move_dist(index_n_);
        // 惯性距离
        this._rebound_action_a.dist_n = this.inertia_n;
        // 滚动距离
        this._scroll_action_a.dist_n = this._lap_len_n * (this.turn_lap_n + Math.floor(Math.random() * this.turn_lap_random_n)) + move_dist_n + this._rebound_action_a.dist_n;
        this.scroll_b = true;
    };
    /**
     * 立即跳转到指定item
     * @param index_n_ 默认随机子节点下标
     */
    rolling_lottery.prototype.jump = function (index_n_) {
        if (index_n_ === void 0) { index_n_ = Math.floor(Math.random() * (this.node.children.length + 1)); }
        /**运动距离 */
        var move_dist_n = this._comp_move_dist(index_n_);
        this._curr_speed_n = this._scroll_action_a.dist_n = move_dist_n;
        this._scrolling();
    };
    /* ***************其他事件*************** */
    rolling_lottery.prototype._scrolling = function () {
        var _this = this;
        /**实际顶部y */
        var top_y_n = this.node.height - this.node.height * this.node.anchorY;
        /**实际底部y */
        var bottom_y_n = top_y_n - this._lap_len_n;
        /**视图顶部y */
        var top_view_y_n = top_y_n;
        /**视图底部y */
        var bottom_view_y_n = this.node.y - this.node.height;
        // ------------------向上滚动
        if (this._curr_speed_n > 0) {
            var temp1_n_1;
            this.node.children.forEach(function (v1_o) {
                v1_o.y += _this._curr_speed_n;
                if (v1_o.y > top_view_y_n && !_this._check_collision(v1_o)) {
                    temp1_n_1 = (v1_o.y - top_y_n) % _this._lap_len_n;
                    v1_o.y = bottom_y_n + temp1_n_1;
                }
            });
        }
        // ------------------向下滚动
        else if (this._curr_speed_n < 0) {
            var temp1_n_2;
            this.node.children.forEach(function (v1_o) {
                v1_o.y += _this._curr_speed_n;
                if (v1_o.y < bottom_view_y_n && !_this._check_collision(v1_o)) {
                    temp1_n_2 = (bottom_y_n - v1_o.y) % _this._lap_len_n;
                    v1_o.y = top_y_n - temp1_n_2;
                }
            });
        }
    };
    var rolling_lottery_1;
    __decorate([
        property({ displayName: "旋转方向", type: cc.Enum(_rolling_lottery.move_dire) })
    ], rolling_lottery.prototype, "move_dire_e", void 0);
    __decorate([
        property({ displayName: "最大速度（距离/s）", min: 0.1 })
    ], rolling_lottery.prototype, "max_speed_n", void 0);
    __decorate([
        property({
            displayName: "转动圈数",
            min: 0,
            step: 1,
        })
    ], rolling_lottery.prototype, "turn_lap_n", void 0);
    __decorate([
        property({
            displayName: "转动随机圈数",
            min: 0,
            step: 1,
        })
    ], rolling_lottery.prototype, "turn_lap_random_n", void 0);
    __decorate([
        property({ displayName: "惯性随机距离", min: 0 })
    ], rolling_lottery.prototype, "inertia_n", void 0);
    __decorate([
        property({
            displayName: "滚动动作曲线",
            tooltip: "贝塞尔曲线控制点，可点击组件右上角->帮助文档进行跳转编辑",
            type: [cc.Vec2],
        })
    ], rolling_lottery.prototype, "scroll_action_os", void 0);
    __decorate([
        property({
            displayName: "反弹动作曲线",
            tooltip: "贝塞尔曲线控制点，可点击组件右上角->帮助文档进行跳转编辑",
            type: [cc.Vec2],
            visible: function () { return this.inertia_n > 0; }
        })
    ], rolling_lottery.prototype, "rebound_action_os", void 0);
    __decorate([
        property({ displayName: "滚动结束回调", type: [_rolling_lottery.callback] })
    ], rolling_lottery.prototype, "scorll_finish_cb_os", void 0);
    __decorate([
        property({
            displayName: "反弹结束回调",
            type: [_rolling_lottery.callback],
            visible: function () { return this.inertia_n > 0; }
        })
    ], rolling_lottery.prototype, "rebound_finish_cb_os", void 0);
    __decorate([
        property({ displayName: "滚动单格回调", type: [cc.Component.EventHandler] })
    ], rolling_lottery.prototype, "scroll_grid_cb_os", void 0);
    __decorate([
        property({
            displayName: "滚动单格回调补全",
            tooltip: "例：一格距离5，滚动10调用2次回调而非1次",
            visible: function () { return this.scroll_grid_cb_os.length; }
        })
    ], rolling_lottery.prototype, "scroll_grid_cb_supp_b", void 0);
    rolling_lottery = rolling_lottery_1 = __decorate([
        ccclass,
        help("https://www.desmos.com/calculator/cahqdxeshd?lang=zh-CN"),
        menu("tool/rolling_lottery")
    ], rolling_lottery);
    return rolling_lottery;
}(cc.Component));
(function (rolling_lottery) {
    /*---------enum_private */
    /*---------enum_public */
    /**移动方向 */
    rolling_lottery.move_dire = _rolling_lottery.move_dire;
    /*---------interface_private */
    /*---------interface_public */
    /*---------var | const */
    /*---------class_private */
    /*---------class_public */
    /**配置 */
    var config = /** @class */ (function () {
        function config(init_a_) {
            /**滚动回调提前检测距离 */
            this.scorll_trigger_dist_n = 0;
            /**反弹回调提前检测距离 */
            this.rebound_trigger_dist_n = 0;
            /**滚动单格补全（例：一格距离5，滚动10调用2次回调而非1次） */
            this.scroll_grid_cb_supp_b = true;
            if (init_a_) {
                Object.assign(this, init_a_);
            }
        }
        return config;
    }());
    rolling_lottery.config = config;
})(rolling_lottery || (rolling_lottery = {}));
exports.default = rolling_lottery;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxyb2xsaW5nX2xvdHRlcnlcXHJvbGxpbmdfbG90dGVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBMEM7QUFFcEMsSUFBQSxLQUFrQyxFQUFFLENBQUMsVUFBVSxFQUE5QyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxJQUFJLFVBQUEsRUFBRSxJQUFJLFVBQWlCLENBQUM7QUFFdEQsSUFBTyxnQkFBZ0IsQ0E4QnRCO0FBOUJELFdBQU8sZ0JBQWdCO0lBQ25CLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLElBQVksU0FHWDtJQUhELFdBQVksU0FBUztRQUNqQiw2Q0FBQyxDQUFBO1FBQ0QsNkNBQUMsQ0FBQTtJQUNMLENBQUMsRUFIVyxTQUFTLEdBQVQsMEJBQVMsS0FBVCwwQkFBUyxRQUdwQjtJQVNELHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBRTFCO1FBQUE7WUFDSSwyQkFBMkI7WUFDM0IsVUFBVTtZQUNILGNBQVMsR0FBRyxLQUFLLENBQUM7WUFDekIsdUJBQXVCO1lBRXZCLGVBQVUsR0FBOEIsSUFBSSxDQUFDO1lBRTdDLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFIRztZQURDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7b0RBQ3BCO1FBRTdDO1lBREMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7c0RBQzNCO1FBUlIsUUFBUTtZQURwQixPQUFPLENBQUMsK0JBQStCLENBQUM7V0FDNUIsUUFBUSxDQVNwQjtRQUFELGVBQUM7S0FURCxBQVNDLElBQUE7SUFUWSx5QkFBUSxXQVNwQixDQUFBO0FBQ0wsQ0FB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OEJyQjtBQUVELGtCQUFlLGVBQWUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiZXppZXJfY3VydmUgZnJvbSBcIi4vYmV6aWVyX2N1cnZlXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHksIG1lbnUsIGhlbHB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbm1vZHVsZSBfcm9sbGluZ19sb3R0ZXJ5IHtcclxuICAgIC8qLS0tLS0tLS0tZW51bV9wcml2YXRlICovXHJcbiAgICAvKi0tLS0tLS0tLWVudW1fcHVibGljICovXHJcbiAgICAvKirnp7vliqjmlrnlkJEgKi9cclxuICAgIGV4cG9ydCBlbnVtIG1vdmVfZGlyZSB7XHJcbiAgICAgICAg5LiKLFxyXG4gICAgICAgIOS4iyxcclxuICAgIH1cclxuICAgIC8qLS0tLS0tLS0taW50ZXJmYWNlX3ByaXZhdGUgKi9cclxuICAgIC8qLS0tLS0tLS0taW50ZXJmYWNlX3B1YmxpYyAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBhY3Rpb24ge1xyXG4gICAgICAgIC8qKui/kOWKqOabsue6vyAqL1xyXG4gICAgICAgIGJlemllcl9vOiBiZXppZXJfY3VydmU7XHJcbiAgICAgICAgLyoq6L+Q5Yqo6Led56a7ICovXHJcbiAgICAgICAgZGlzdF9uOiBudW1iZXI7XHJcbiAgICB9XHJcbiAgICAvKi0tLS0tLS0tLXZhciB8IGNvbnN0ICovXHJcbiAgICAvKi0tLS0tLS0tLWNsYXNzX3ByaXZhdGUgKi9cclxuICAgIC8qLS0tLS0tLS0tY2xhc3NfcHVibGljICovXHJcbiAgICBAY2NjbGFzcyhcInRvb2wvcm9sbGluZ19sb3R0ZXJ5L2NhbGxiYWNrXCIpXHJcbiAgICBleHBvcnQgY2xhc3MgY2FsbGJhY2sge1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLXB1YmxpY1xyXG4gICAgICAgIC8qKuinpuWPkeeKtuaAgSAqL1xyXG4gICAgICAgIHB1YmxpYyB0cmlnZ2VyX2IgPSBmYWxzZTtcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS3lsZ7mgKdcclxuICAgICAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLlm57osINcIiwgdHlwZTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlciB9KVxyXG4gICAgICAgIGNhbGxiYWNrX286IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIgPSBudWxsO1xyXG4gICAgICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuaPkOWJjeajgOa1i+i3neemu1wiLCBtaW46IDAgfSlcclxuICAgICAgICBjaGVja19kaXN0X24gPSAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKirmu5rliqjmir3lpZYgKi9cclxuQGNjY2xhc3NcclxuQGhlbHAoXCJodHRwczovL3d3dy5kZXNtb3MuY29tL2NhbGN1bGF0b3IvY2FocWR4ZXNoZD9sYW5nPXpoLUNOXCIpXHJcbkBtZW51KFwidG9vbC9yb2xsaW5nX2xvdHRlcnlcIilcclxuY2xhc3Mgcm9sbGluZ19sb3R0ZXJ5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIC8qICoqKioqKioqKioqKioqKnByaXZhdGUqKioqKioqKioqKioqKiogKi9cclxuICAgIC8qKuW9k+WJjemAn+W6pu+8iOi3neemuy9z77yJICovXHJcbiAgICBwcml2YXRlIF9jdXJyX3NwZWVkX246IG51bWJlcjtcclxuICAgIC8qKuW9k+WJjei3neemuyAqL1xyXG4gICAgcHJpdmF0ZSBfY3Vycl9kaXN0X24gPSAwO1xyXG4gICAgLyoq5q2l6ZW/5pe26Ze0ICovXHJcbiAgICBwcml2YXRlIF9zdGVwX3RpbWVfc19uID0gMC4wMTtcclxuICAgIC8qKuW9k+WJjeaXtumXtCAqL1xyXG4gICAgcHJpdmF0ZSBfY3Vycl90aW1lX3NfbiA9IDA7XHJcbiAgICAvKirljZXlnIjplb/luqYgKi9cclxuICAgIHByaXZhdGUgX2xhcF9sZW5fbjogbnVtYmVyO1xyXG4gICAgLyoq6YWN572u5pWw5o2uICovXHJcbiAgICBwcml2YXRlIF9jb25maWdfbzogcm9sbGluZ19sb3R0ZXJ5LmNvbmZpZztcclxuICAgIC8qKuWKqOS9nOWIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBfYWN0aW9uX2FzOiBfcm9sbGluZ19sb3R0ZXJ5LmFjdGlvbltdID0gW107XHJcbiAgICAvKirlvZPliY3liqjkvZzkuIvmoIcgKi9cclxuICAgIHByaXZhdGUgX2N1cnJfYWN0aW9uX246IG51bWJlcjtcclxuICAgIC8qKua7muWKqOWKqOS9nCAqL1xyXG4gICAgcHJpdmF0ZSBfc2Nyb2xsX2FjdGlvbl9hOiBfcm9sbGluZ19sb3R0ZXJ5LmFjdGlvbjtcclxuICAgIC8qKuWPjeW8ueWKqOS9nCAqL1xyXG4gICAgcHJpdmF0ZSBfcmVib3VuZF9hY3Rpb25fYTogX3JvbGxpbmdfbG90dGVyeS5hY3Rpb247XHJcbiAgICAvKirov5Dliqjot53nprsgKi9cclxuICAgIHByaXZhdGUgX21vdmVfZGlzdF9uOiBudW1iZXI7XHJcbiAgICAvKirkuIrmrKHmiYDlnKjmoLzlrZDkuIvmoIcgKi9cclxuICAgIHByaXZhdGUgX2xhc3RfcG9zX246IG51bWJlcjtcclxuICAgIC8qICoqKioqKioqKioqKioqKnB1YmxpYyoqKioqKioqKioqKioqKiAqL1xyXG4gICAgLyoq5rua5Yqo54q25oCBICovXHJcbiAgICBwdWJsaWMgc2Nyb2xsX2IgPSBmYWxzZTtcclxuICAgIC8qICoqKioqKioqKioqKioqKuWxnuaApyoqKioqKioqKioqKioqKiAqL1xyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5peL6L2s5pa55ZCRXCIsIHR5cGU6IGNjLkVudW0oX3JvbGxpbmdfbG90dGVyeS5tb3ZlX2RpcmUpIH0pXHJcbiAgICBtb3ZlX2RpcmVfZSA9IF9yb2xsaW5nX2xvdHRlcnkubW92ZV9kaXJlLuS4iztcclxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuacgOWkp+mAn+W6pu+8iOi3neemuy9z77yJXCIsIG1pbjogMC4xIH0pXHJcbiAgICBtYXhfc3BlZWRfbiA9IDUwO1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCLovazliqjlnIjmlbBcIixcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgc3RlcDogMSxcclxuICAgIH0pXHJcbiAgICB0dXJuX2xhcF9uID0gMTA7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIui9rOWKqOmaj+acuuWciOaVsFwiLFxyXG4gICAgICAgIG1pbjogMCxcclxuICAgICAgICBzdGVwOiAxLFxyXG4gICAgfSlcclxuICAgIHR1cm5fbGFwX3JhbmRvbV9uID0gMDtcclxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuaDr+aAp+maj+acuui3neemu1wiLCBtaW46IDAgfSlcclxuICAgIGluZXJ0aWFfbiA9IDUwO1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCLmu5rliqjliqjkvZzmm7Lnur9cIixcclxuICAgICAgICB0b29sdGlwOiBcIui0neWhnuWwlOabsue6v+aOp+WItueCue+8jOWPr+eCueWHu+e7hOS7tuWPs+S4iuinki0+5biu5Yqp5paH5qGj6L+b6KGM6Lez6L2s57yW6L6RXCIsXHJcbiAgICAgICAgdHlwZTogW2NjLlZlYzJdLFxyXG4gICAgfSlcclxuICAgIHNjcm9sbF9hY3Rpb25fb3M6IGNjLlZlYzJbXSA9IFtjYy52MigwLCAwKSwgY2MudjIoMC40NCwgMC44OTI1KSwgY2MudjIoMC4zNzUsIDAuMjUpLCBjYy52MigwLjc1LCAwLjc1KSwgY2MudjIoMSwgMC4wNSldO1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCLlj43lvLnliqjkvZzmm7Lnur9cIixcclxuICAgICAgICB0b29sdGlwOiBcIui0neWhnuWwlOabsue6v+aOp+WItueCue+8jOWPr+eCueWHu+e7hOS7tuWPs+S4iuinki0+5biu5Yqp5paH5qGj6L+b6KGM6Lez6L2s57yW6L6RXCIsXHJcbiAgICAgICAgdHlwZTogW2NjLlZlYzJdLFxyXG4gICAgICAgIHZpc2libGU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5pbmVydGlhX24gPiAwOyB9XHJcbiAgICB9KVxyXG4gICAgcmVib3VuZF9hY3Rpb25fb3M6IGNjLlZlYzJbXSA9IFtjYy52MigwLCAtMC4wNSksIGNjLnYyKDAuNSwgLTAuMDIpLCBjYy52MigxLCAwKV07XHJcbiAgICAvKirmu5rliqjnu5PmnZ/lm57osIMgKi9cclxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIua7muWKqOe7k+adn+Wbnuiwg1wiLCB0eXBlOiBbX3JvbGxpbmdfbG90dGVyeS5jYWxsYmFja10gfSlcclxuICAgIHNjb3JsbF9maW5pc2hfY2Jfb3M6IF9yb2xsaW5nX2xvdHRlcnkuY2FsbGJhY2tbXSA9IFtdO1xyXG4gICAgLyoq5Y+N5by557uT5p2f5Zue6LCDICovXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIuWPjeW8uee7k+adn+Wbnuiwg1wiLFxyXG4gICAgICAgIHR5cGU6IFtfcm9sbGluZ19sb3R0ZXJ5LmNhbGxiYWNrXSxcclxuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmluZXJ0aWFfbiA+IDA7IH1cclxuICAgIH0pXHJcbiAgICByZWJvdW5kX2ZpbmlzaF9jYl9vczogX3JvbGxpbmdfbG90dGVyeS5jYWxsYmFja1tdID0gW107XHJcbiAgICAvKirmu5rliqjljZXmoLzlm57osIMgKi9cclxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIua7muWKqOWNleagvOWbnuiwg1wiLCB0eXBlOiBbY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcl0gfSlcclxuICAgIHNjcm9sbF9ncmlkX2NiX29zOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10gPSBbXTtcclxuICAgIC8qKua7muWKqOWNleagvOWbnuiwg+ihpeWFqO+8iOS+i++8muS4gOagvOi3neemuzXvvIzmu5rliqgxMOiwg+eUqDLmrKHlm57osIPogIzpnZ4x5qyh77yJICovXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIua7muWKqOWNleagvOWbnuiwg+ihpeWFqFwiLFxyXG4gICAgICAgIHRvb2x0aXA6IFwi5L6L77ya5LiA5qC86Led56a7Ne+8jOa7muWKqDEw6LCD55SoMuasoeWbnuiwg+iAjOmdnjHmrKFcIixcclxuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLnNjcm9sbF9ncmlkX2NiX29zLmxlbmd0aDsgfVxyXG4gICAgfSlcclxuICAgIHNjcm9sbF9ncmlkX2NiX3N1cHBfYiA9IHRydWU7XHJcbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tc2VnbWVudGF0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLea3u+WKoOWKqOS9nFxyXG4gICAgICAgIC8vIOa7muWKqFxyXG4gICAgICAgIHRoaXMuX2FjdGlvbl9hcy5wdXNoKHRoaXMuX3Njcm9sbF9hY3Rpb25fYSA9IHtcclxuICAgICAgICAgICAgXCJiZXppZXJfb1wiOiBuZXcgYmV6aWVyX2N1cnZlKHRoaXMuc2Nyb2xsX2FjdGlvbl9vcyksXHJcbiAgICAgICAgICAgIFwiZGlzdF9uXCI6IDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8g5Y+N5by5XHJcbiAgICAgICAgaWYgKHRoaXMuaW5lcnRpYV9uID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9hY3Rpb25fYXMucHVzaCh0aGlzLl9yZWJvdW5kX2FjdGlvbl9hID0ge1xyXG4gICAgICAgICAgICAgICAgXCJiZXppZXJfb1wiOiBuZXcgYmV6aWVyX2N1cnZlKHRoaXMucmVib3VuZF9hY3Rpb25fb3MpLFxyXG4gICAgICAgICAgICAgICAgXCJkaXN0X25cIjogMCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRlYnVnX2IgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIWRlYnVnX2IpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYmV6aWVyX28gPSB0aGlzLl9hY3Rpb25fYXNbMF0uYmV6aWVyX287XHJcbiAgICAgICAgbGV0IHBvaW50X29zOiBjYy5WZWMyW10gPSBbXTtcclxuICAgICAgICBsZXQgZ3JhcGhpY3NfbyA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChjYy5HcmFwaGljcykgfHwgY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBsZXQgc3RhcnRfYiA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBvZmZzZXRfbyA9IGNjLnYyKC1jYy5DYW52YXMuaW5zdGFuY2Uubm9kZS53aWR0aCAqIDAuNSArIDEwMCwgLWNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmhlaWdodCAqIDAuNSArIDEwMCk7XHJcbiAgICAgICAgbGV0IHNjYWxlX24gPSAxMDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMTsgaSArPSAwLjEpIHtcclxuICAgICAgICAgICAgcG9pbnRfb3MucHVzaChiZXppZXJfby5wb2ludChpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLee7mOWItuabsue6v+e6v+autVxyXG4gICAgICAgIGdyYXBoaWNzX28uc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICBwb2ludF9vcy5mb3JFYWNoKHYxX289PiB7XHJcbiAgICAgICAgICAgIGlmICghc3RhcnRfYikge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRfYiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBncmFwaGljc19vLm1vdmVUbyh2MV9vLnggKiBzY2FsZV9uICsgb2Zmc2V0X28ueCwgdjFfby55ICogc2NhbGVfbiArIG9mZnNldF9vLnkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZ3JhcGhpY3Nfby5saW5lVG8odjFfby54ICogc2NhbGVfbiArIG9mZnNldF9vLngsIHYxX28ueSAqIHNjYWxlX24gKyBvZmZzZXRfby55KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdyYXBoaWNzX28uc3Ryb2tlKCk7XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0t57uY5Yi25o6n5Yi254K5XHJcbiAgICAgICAgZ3JhcGhpY3Nfby5maWxsQ29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgICAgYmV6aWVyX28uY29udHJvbF9wb2ludF9vcy5mb3JFYWNoKHYxX289PiB7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzX28uY2lyY2xlKHYxX28ueCAqIHNjYWxlX24gKyBvZmZzZXRfby54LCB2MV9vLnkgKiBzY2FsZV9uICsgb2Zmc2V0X28ueSwgNSk7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzX28uZmlsbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdyYXBoaWNzX28uc3Ryb2tlKCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHRfbl86IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5zY3JvbGxfYikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjdXJyX2FjdGlvbl9hID0gdGhpcy5fYWN0aW9uX2FzW3RoaXMuX2N1cnJfYWN0aW9uX25dO1xyXG4gICAgICAgIGlmICgoY3Vycl9hY3Rpb25fYS5kaXN0X24gPiAwICYmIHRoaXMuX2N1cnJfZGlzdF9uIDwgY3Vycl9hY3Rpb25fYS5kaXN0X24pXHJcbiAgICAgICAgfHwgKGN1cnJfYWN0aW9uX2EuZGlzdF9uIDwgMCAmJiB0aGlzLl9jdXJyX2Rpc3RfbiA+IGN1cnJfYWN0aW9uX2EuZGlzdF9uKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyX3RpbWVfc19uICs9IGR0X25fO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY3Vycl90aW1lX3NfbiA+PSB0aGlzLl9zdGVwX3RpbWVfc19uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyX3RpbWVfc19uIC09IHRoaXMuX3N0ZXBfdGltZV9zX247XHJcbiAgICAgICAgICAgICAgICAvKirot53nprvmr5TkvosgKi9cclxuICAgICAgICAgICAgICAgIGxldCBkaXN0X3NjYWxlX24gPSBNYXRoLnJvdW5kKHRoaXMuX2N1cnJfZGlzdF9uIC8gTWF0aC5hYnMoY3Vycl9hY3Rpb25fYS5kaXN0X24pICogMTAwKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgIC8qKuW9k+WJjXTnmoTmm7Lnur/lnZDmoId5ICovXHJcbiAgICAgICAgICAgICAgICBsZXQgeV9uID0gY3Vycl9hY3Rpb25fYS5iZXppZXJfby5wb2ludChkaXN0X3NjYWxlX24pLnk7XHJcbiAgICAgICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS3pmLLmraIw5YGc5q2i6L+Q5YqoXHJcbiAgICAgICAgICAgICAgICBpZiAoeV9uID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByZV9vID0gY3Vycl9hY3Rpb25fYS5iZXppZXJfby5wb2ludChkaXN0X3NjYWxlX24gLSAwLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dF9vID0gY3Vycl9hY3Rpb25fYS5iZXppZXJfby5wb2ludChkaXN0X3NjYWxlX24gKyAwLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICB5X24gPSBuZXh0X28ueTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeV9uID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHlfbiA9IHByZV9vLnkgPj0gMCA/IDAuMDEgOiAtMC4wMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyX3NwZWVkX24gPSB0aGlzLm1heF9zcGVlZF9uICogeV9uO1xyXG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLl9jdXJyX2Rpc3RfbiArIE1hdGguYWJzKHRoaXMuX2N1cnJfc3BlZWRfbikpID4gY3Vycl9hY3Rpb25fYS5kaXN0X24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyX3NwZWVkX24gPSBjdXJyX2FjdGlvbl9hLmRpc3RfbiAtIHRoaXMuX2N1cnJfZGlzdF9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3Vycl9kaXN0X24gKz0gTWF0aC5hYnModGhpcy5fY3Vycl9zcGVlZF9uKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vdmVfZGlyZV9lID09PSBfcm9sbGluZ19sb3R0ZXJ5Lm1vdmVfZGlyZS7kuIspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyX3NwZWVkX24gPSAtdGhpcy5fY3Vycl9zcGVlZF9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVfbW92ZV9kaXN0KHRoaXMuX2N1cnJfc3BlZWRfbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0t5Yqo5L2c5omn6KGM5a6M5oiQ77yM6Ieq5Yqo5omn6KGM5LiL5Liq5Yqo5L2cXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fY3Vycl9hY3Rpb25fbiA8IHRoaXMuX2FjdGlvbl9hcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICsrdGhpcy5fY3Vycl9hY3Rpb25fbjtcclxuICAgICAgICAgICAgdGhpcy5fY3Vycl9kaXN0X24gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0t5omA5pyJ5Yqo5L2c5omn6KGM5a6M5oiQXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsX2IgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChjdXJyX2FjdGlvbl9hKSB7XHJcbiAgICAgICAgICAgIC8vIOa7muWKqFxyXG4gICAgICAgICAgICBjYXNlIHRoaXMuX3Njcm9sbF9hY3Rpb25fYToge1xyXG4gICAgICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0t57uT5p2f5Zue6LCDXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY29uZmlnX28uc2Nyb2xsX2ZpbmlzaF9jYl9mICYmICh0aGlzLl9jdXJyX2Rpc3RfbiArIHRoaXMuX2NvbmZpZ19vLnNjb3JsbF90cmlnZ2VyX2Rpc3RfbikgPj0gY3Vycl9hY3Rpb25fYS5kaXN0X24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb25maWdfby5zY3JvbGxfZmluaXNoX2NiX2YoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb25maWdfby5zY3JvbGxfZmluaXNoX2NiX2YgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY29ybGxfZmluaXNoX2NiX29zLmZvckVhY2godjFfbz0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXYxX28udHJpZ2dlcl9iICYmICh0aGlzLl9jdXJyX2Rpc3RfbiArIHYxX28uY2hlY2tfZGlzdF9uKSA+PSBjdXJyX2FjdGlvbl9hLmRpc3Rfbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2MV9vLmNhbGxiYWNrX28uZW1pdChbdjFfby5jYWxsYmFja19vLmN1c3RvbUV2ZW50RGF0YV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2MV9vLnRyaWdnZXJfYiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gYnJlYWs7XHJcbiAgICAgICAgICAgIC8vIOWPjeW8uVxyXG4gICAgICAgICAgICBjYXNlIHRoaXMuX3JlYm91bmRfYWN0aW9uX2E6IHtcclxuICAgICAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLee7k+adn+Wbnuiwg1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NvbmZpZ19vLnJlYm91bmRfZmluaXNoX2NiX2YgJiYgKHRoaXMuX2N1cnJfZGlzdF9uICsgdGhpcy5fY29uZmlnX28ucmVib3VuZF90cmlnZ2VyX2Rpc3RfbikgPj0gY3Vycl9hY3Rpb25fYS5kaXN0X24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb25maWdfby5yZWJvdW5kX2ZpbmlzaF9jYl9mKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29uZmlnX28ucmVib3VuZF9maW5pc2hfY2JfZiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYm91bmRfZmluaXNoX2NiX29zLmZvckVhY2godjFfbz0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXYxX28udHJpZ2dlcl9iICYmICh0aGlzLl9jdXJyX2Rpc3RfbiArIHYxX28uY2hlY2tfZGlzdF9uKSA+PSBjdXJyX2FjdGlvbl9hLmRpc3Rfbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2MV9vLmNhbGxiYWNrX28uZW1pdChbdjFfby5jYWxsYmFja19vLmN1c3RvbUV2ZW50RGF0YV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2MV9vLnRyaWdnZXJfYiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNjLmxvZyh0aGlzLl9kaXN0X24pO1xyXG4gICAgfVxyXG4gICAgLyogKioqKioqKioqKioqKioq5Yqf6IO95Ye95pWwKioqKioqKioqKioqKioqICovXHJcbiAgICAvKirojrflj5blnKjkuJbnlYzlnZDmoIfns7vkuIvnmoToioLngrnljIXlm7Tnm5Io5LiN5YyF5ZCr6Ieq6Lqr5r+A5rS755qE5a2Q6IqC54K56IyD5Zu0KSAqL1xyXG4gICAgcHJpdmF0ZSBfZ2V0X2JvdW5kaW5nX2JveF90b193b3JsZChub2RlX29fOiBhbnkpOiBjYy5SZWN0IHtcclxuICAgICAgICBsZXQgd19uOiBudW1iZXIgPSBub2RlX29fLl9jb250ZW50U2l6ZS53aWR0aDtcclxuICAgICAgICBsZXQgaF9uOiBudW1iZXIgPSBub2RlX29fLl9jb250ZW50U2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgbGV0IHJlY3RfbyA9IGNjLnJlY3QoXHJcbiAgICAgICAgICAgIC1ub2RlX29fLl9hbmNob3JQb2ludC54ICogd19uLCBcclxuICAgICAgICAgICAgLW5vZGVfb18uX2FuY2hvclBvaW50LnkgKiBoX24sIFxyXG4gICAgICAgICAgICB3X24sIFxyXG4gICAgICAgICAgICBoX25cclxuICAgICAgICApO1xyXG4gICAgICAgIG5vZGVfb18uX2NhbGN1bFdvcmxkTWF0cml4KCk7XHJcbiAgICAgICAgcmVjdF9vLnRyYW5zZm9ybU1hdDQocmVjdF9vLCBub2RlX29fLl93b3JsZE1hdHJpeCk7XHJcbiAgICAgICAgcmV0dXJuIHJlY3RfbztcclxuICAgIH1cclxuICAgIC8qKuajgOa1i+eisOaSniAqL1xyXG4gICAgcHJpdmF0ZSBfY2hlY2tfY29sbGlzaW9uKG5vZGVfb186IGNjLk5vZGUpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgcmVjdDFfbyA9IHRoaXMuX2dldF9ib3VuZGluZ19ib3hfdG9fd29ybGQodGhpcy5ub2RlKTtcclxuICAgICAgICBsZXQgcmVjdDJfbyA9IHRoaXMuX2dldF9ib3VuZGluZ19ib3hfdG9fd29ybGQobm9kZV9vXyk7XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0t5L+d6Zmp6IyD5Zu0XHJcbiAgICAgICAgcmVjdDFfby53aWR0aCArPSByZWN0MV9vLndpZHRoICogMC41O1xyXG4gICAgICAgIHJlY3QxX28uaGVpZ2h0ICs9IHJlY3QxX28uaGVpZ2h0ICogMC41O1xyXG4gICAgICAgIHJlY3QxX28ueCAtPSByZWN0MV9vLndpZHRoICogMC4yNTtcclxuICAgICAgICByZWN0MV9vLnkgLT0gcmVjdDFfby5oZWlnaHQgKiAwLjI1O1xyXG4gICAgICAgIHJldHVybiByZWN0MV9vLmludGVyc2VjdHMocmVjdDJfbyk7XHJcbiAgICB9XHJcbiAgICAvKirph43nva4gKi9cclxuICAgIHByaXZhdGUgX3Jlc2V0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLemHjee9ruaVsOaNrlxyXG4gICAgICAgIHRoaXMuX2xhc3RfcG9zX24gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5fY3Vycl9kaXN0X24gPSAwO1xyXG4gICAgICAgIHRoaXMuX21vdmVfZGlzdF9uID0gMDtcclxuICAgICAgICB0aGlzLl9jdXJyX3RpbWVfc19uID0gMDtcclxuICAgICAgICB0aGlzLl9jdXJyX2FjdGlvbl9uID0gMDtcclxuICAgICAgICB0aGlzLl9hY3Rpb25fYXMuZm9yRWFjaCh2MV9hPT4ge1xyXG4gICAgICAgICAgICB2MV9hLmRpc3RfbiA9IDA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zY29ybGxfZmluaXNoX2NiX29zLmZvckVhY2godjFfbz0+IHtcclxuICAgICAgICAgICAgdjFfby50cmlnZ2VyX2IgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlYm91bmRfZmluaXNoX2NiX29zLmZvckVhY2godjFfbz0+IHtcclxuICAgICAgICAgICAgdjFfby50cmlnZ2VyX2IgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKuabtOaWsOi/kOWKqOi3neemuyAqL1xyXG4gICAgcHJpdmF0ZSBfdXBkYXRlX21vdmVfZGlzdChkaXN0X25fOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2NvbmZpZ19vLnNjcm9sbF9ncmlkX2NiX2YpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9tb3ZlX2Rpc3RfbiArPSBNYXRoLmFicyhkaXN0X25fKTtcclxuICAgICAgICAvKirlvZPliY3miYDlnKjmoLzlrZAgKi9cclxuICAgICAgICBsZXQgY3Vycl9wb3NfbiA9IE1hdGguZmxvb3IodGhpcy5fbW92ZV9kaXN0X24gLyB0aGlzLl9sYXBfbGVuX24pICogdGhpcy5ub2RlLmNoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICAvKirmlbTpmaTljZXlnIjplb/luqblkI7nmoTliankvZnot53nprsgKi9cclxuICAgICAgICBsZXQgZGlzdF9uID0gdGhpcy5fbW92ZV9kaXN0X24gJSB0aGlzLl9sYXBfbGVuX247XHJcbiAgICAgICAgZm9yIChsZXQgazFfbiA9IDA7IGsxX24gPCB0aGlzLm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyArK2sxX24pIHtcclxuICAgICAgICAgICAgaWYgKChkaXN0X24gLT0gdGhpcy5ub2RlLmNoaWxkcmVuW2sxX25dLmhlaWdodCkgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgY3Vycl9wb3NfbiArPSBrMV9uO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0t5omn6KGM5Zue6LCDXHJcbiAgICAgICAgaWYgKHRoaXMuX2xhc3RfcG9zX24gIT09IHVuZGVmaW5lZCAmJiBjdXJyX3Bvc19uICE9PSB0aGlzLl9sYXN0X3Bvc19uKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb25maWdfby5zY3JvbGxfZ3JpZF9jYl9zdXBwX2IpIHtcclxuICAgICAgICAgICAgICAgIGxldCBmb3JfbiA9IE1hdGguYWJzKHRoaXMuX2xhc3RfcG9zX24gLSBjdXJyX3Bvc19uKTtcclxuICAgICAgICAgICAgICAgIGZvciAoOyBmb3Jfbi0tOyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29uZmlnX28uc2Nyb2xsX2dyaWRfY2JfZigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29uZmlnX28uc2Nyb2xsX2dyaWRfY2JfZigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbF9ncmlkX2NiX3N1cHBfYikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZvcl9uID0gTWF0aC5hYnModGhpcy5fbGFzdF9wb3NfbiAtIGN1cnJfcG9zX24pO1xyXG4gICAgICAgICAgICAgICAgZm9yICg7IGZvcl9uLS07KXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbF9ncmlkX2NiX29zLmZvckVhY2godjFfbz0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdjFfby5lbWl0KFsgdjFfby5jdXN0b21FdmVudERhdGEgXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbF9ncmlkX2NiX29zLmZvckVhY2godjFfbz0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2MV9vLmVtaXQoWyB2MV9vLmN1c3RvbUV2ZW50RGF0YSBdKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2xhc3RfcG9zX24gPSBjdXJyX3Bvc19uO1xyXG4gICAgfVxyXG4gICAgLyoq6K6h566X6L+Q5Yqo6Led56a7ICovXHJcbiAgICBwcml2YXRlIF9jb21wX21vdmVfZGlzdChpbmRleF9uXzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICAvKirkuK3lv4Pngrl5ICovXHJcbiAgICAgICAgbGV0IGNlbnRlcl95X24gPSAtdGhpcy5ub2RlLmhlaWdodCAqIHRoaXMubm9kZS5hbmNob3JZICsgdGhpcy5ub2RlLmhlaWdodCAqIDAuNTtcclxuICAgICAgICAvKirot53nprsgKi9cclxuICAgICAgICBsZXQgZGlzdF95X24gPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLm1vdmVfZGlyZV9lID09PSBfcm9sbGluZ19sb3R0ZXJ5Lm1vdmVfZGlyZS7kuIopIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5jaGlsZHJlbltpbmRleF9uX10ueSA+IGNlbnRlcl95X24pIHtcclxuICAgICAgICAgICAgICAgIGRpc3RfeV9uID0gdGhpcy5fbGFwX2xlbl9uIC0gKHRoaXMubm9kZS5jaGlsZHJlbltpbmRleF9uX10ueSAtIGNlbnRlcl95X24pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubm9kZS5jaGlsZHJlbltpbmRleF9uX10ueSA8IGNlbnRlcl95X24pIHtcclxuICAgICAgICAgICAgICAgIGRpc3RfeV9uID0gY2VudGVyX3lfbiAtIHRoaXMubm9kZS5jaGlsZHJlbltpbmRleF9uX10ueTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuY2hpbGRyZW5baW5kZXhfbl9dLnkgPiBjZW50ZXJfeV9uKSB7XHJcbiAgICAgICAgICAgICAgICBkaXN0X3lfbiA9IHRoaXMubm9kZS5jaGlsZHJlbltpbmRleF9uX10ueSAtIGNlbnRlcl95X247XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlLmNoaWxkcmVuW2luZGV4X25fXS55IDwgY2VudGVyX3lfbikge1xyXG4gICAgICAgICAgICAgICAgZGlzdF95X24gPSB0aGlzLl9sYXBfbGVuX24gLSAoY2VudGVyX3lfbiAtIHRoaXMubm9kZS5jaGlsZHJlbltpbmRleF9uX10ueSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpc3RfeV9uO1xyXG4gICAgfVxyXG4gICAgLyoq6YeN572uXHJcbiAgICAgKiAtIOmHjee9ruW4g+WxgO+8jOWcqOabtOaWsOWtkOiKgueCueWQjuiwg+eUqFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0t6YeN572u5biD5bGAXHJcbiAgICAgICAgbGV0IG9sZF9oX24gPSB0aGlzLm5vZGUuaGVpZ2h0O1xyXG4gICAgICAgIGxldCBsYXlvdXRfbyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcclxuICAgICAgICBsYXlvdXRfby5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBsYXlvdXRfby51cGRhdGVMYXlvdXQoKTtcclxuICAgICAgICBsYXlvdXRfby5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IG9sZF9oX247XHJcbiAgICAgICAgdGhpcy5fbGFwX2xlbl9uID0gMDtcclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW4uZm9yRWFjaCh2MV9vPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9sYXBfbGVuX24gKz0gdjFfby5oZWlnaHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcmVzZXQoKTtcclxuICAgIH1cclxuICAgIC8qKumaj+acuuWtkOiKgueCuemhuuW6j++8iOaJk+S5se+8iSAqL1xyXG4gICAgcHVibGljIHJhbmRvbV9vcmRlcigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zY3JvbGxfYikge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwi5b+Z56KMXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjaGlsZHJlbl9vcyA9IFtdO1xyXG4gICAgICAgIGNoaWxkcmVuX29zLnB1c2goLi4udGhpcy5ub2RlLmNoaWxkcmVuKTtcclxuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICB3aGlsZSAoY2hpbGRyZW5fb3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChjaGlsZHJlbl9vcy5zcGxpY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hpbGRyZW5fb3MubGVuZ3RoKSwgMSlbMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOa7muWKqFxyXG4gICAgICogQHBhcmFtIGluZGV4X25fIOebruagh+S9jee9rlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2Nyb2xsKGluZGV4X25fOiBudW1iZXIsIGNvbmZpZ19vXz86IHJvbGxpbmdfbG90dGVyeS5jb25maWcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoaW5kZXhfbl8gPj0gdGhpcy5ub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcIuebruagh+S9jee9rumUmeivr1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zY3JvbGxfYikge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcIuW/meeijFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb25maWdfbyA9IG5ldyByb2xsaW5nX2xvdHRlcnkuY29uZmlnKGNvbmZpZ19vXyk7XHJcbiAgICAgICAgdGhpcy5fcmVzZXQoKTtcclxuICAgICAgICAvKirov5Dliqjot53nprsgKi9cclxuICAgICAgICBsZXQgbW92ZV9kaXN0X24gPSB0aGlzLl9jb21wX21vdmVfZGlzdChpbmRleF9uXyk7XHJcbiAgICAgICAgLy8g5oOv5oCn6Led56a7XHJcbiAgICAgICAgdGhpcy5fcmVib3VuZF9hY3Rpb25fYS5kaXN0X24gPSB0aGlzLmluZXJ0aWFfbjtcclxuICAgICAgICAvLyDmu5rliqjot53nprtcclxuICAgICAgICB0aGlzLl9zY3JvbGxfYWN0aW9uX2EuZGlzdF9uID0gdGhpcy5fbGFwX2xlbl9uICogKHRoaXMudHVybl9sYXBfbiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudHVybl9sYXBfcmFuZG9tX24pKSArIG1vdmVfZGlzdF9uICsgdGhpcy5fcmVib3VuZF9hY3Rpb25fYS5kaXN0X247XHJcbiAgICAgICAgdGhpcy5zY3JvbGxfYiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOeri+WNs+i3s+i9rOWIsOaMh+Wumml0ZW1cclxuICAgICAqIEBwYXJhbSBpbmRleF9uXyDpu5jorqTpmo/mnLrlrZDoioLngrnkuIvmoIdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGp1bXAoaW5kZXhfbl8gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5ub2RlLmNoaWxkcmVuLmxlbmd0aCArIDEpKSk6IHZvaWQge1xyXG4gICAgICAgIC8qKui/kOWKqOi3neemuyAqL1xyXG4gICAgICAgIGxldCBtb3ZlX2Rpc3RfbiA9IHRoaXMuX2NvbXBfbW92ZV9kaXN0KGluZGV4X25fKTtcclxuICAgICAgICB0aGlzLl9jdXJyX3NwZWVkX24gPSB0aGlzLl9zY3JvbGxfYWN0aW9uX2EuZGlzdF9uID0gbW92ZV9kaXN0X247XHJcbiAgICAgICAgdGhpcy5fc2Nyb2xsaW5nKCk7XHJcbiAgICB9XHJcbiAgICAvKiAqKioqKioqKioqKioqKirlhbbku5bkuovku7YqKioqKioqKioqKioqKiogKi9cclxuICAgIHByaXZhdGUgX3Njcm9sbGluZygpOiB2b2lkIHtcclxuICAgICAgICAvKirlrp7pmYXpobbpg6h5ICovXHJcbiAgICAgICAgbGV0IHRvcF95X24gPSB0aGlzLm5vZGUuaGVpZ2h0IC0gdGhpcy5ub2RlLmhlaWdodCAqIHRoaXMubm9kZS5hbmNob3JZO1xyXG4gICAgICAgIC8qKuWunumZheW6lemDqHkgKi9cclxuICAgICAgICBsZXQgYm90dG9tX3lfbiA9IHRvcF95X24gLSB0aGlzLl9sYXBfbGVuX247XHJcbiAgICAgICAgLyoq6KeG5Zu+6aG26YOoeSAqL1xyXG4gICAgICAgIGxldCB0b3Bfdmlld195X24gPSB0b3BfeV9uO1xyXG4gICAgICAgIC8qKuinhuWbvuW6lemDqHkgKi9cclxuICAgICAgICBsZXQgYm90dG9tX3ZpZXdfeV9uID0gdGhpcy5ub2RlLnkgLSB0aGlzLm5vZGUuaGVpZ2h0O1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLeWQkeS4iua7muWKqFxyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyX3NwZWVkX24gPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wMV9uOiBudW1iZXI7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbi5mb3JFYWNoKHYxX289PiB7XHJcbiAgICAgICAgICAgICAgICB2MV9vLnkgKz0gdGhpcy5fY3Vycl9zcGVlZF9uO1xyXG4gICAgICAgICAgICAgICAgaWYgKHYxX28ueSA+IHRvcF92aWV3X3lfbiAmJiAhdGhpcy5fY2hlY2tfY29sbGlzaW9uKHYxX28pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcDFfbiA9ICh2MV9vLnkgLSB0b3BfeV9uKSAlIHRoaXMuX2xhcF9sZW5fbjtcclxuICAgICAgICAgICAgICAgICAgICB2MV9vLnkgPSBib3R0b21feV9uICsgdGVtcDFfbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLeWQkeS4i+a7muWKqFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2N1cnJfc3BlZWRfbiA8IDApIHtcclxuICAgICAgICAgICAgbGV0IHRlbXAxX246IG51bWJlcjtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuLmZvckVhY2godjFfbz0+IHtcclxuICAgICAgICAgICAgICAgIHYxX28ueSArPSB0aGlzLl9jdXJyX3NwZWVkX247XHJcbiAgICAgICAgICAgICAgICBpZiAodjFfby55IDwgYm90dG9tX3ZpZXdfeV9uICYmICF0aGlzLl9jaGVja19jb2xsaXNpb24odjFfbykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wMV9uID0gKGJvdHRvbV95X24gLSB2MV9vLnkpICUgdGhpcy5fbGFwX2xlbl9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHYxX28ueSA9IHRvcF95X24gLSB0ZW1wMV9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZSByb2xsaW5nX2xvdHRlcnkge1xyXG4gICAgLyotLS0tLS0tLS1lbnVtX3ByaXZhdGUgKi9cclxuICAgIC8qLS0tLS0tLS0tZW51bV9wdWJsaWMgKi9cclxuICAgIC8qKuenu+WKqOaWueWQkSAqL1xyXG4gICAgZXhwb3J0IGNvbnN0IG1vdmVfZGlyZSA9IF9yb2xsaW5nX2xvdHRlcnkubW92ZV9kaXJlO1xyXG4gICAgLyotLS0tLS0tLS1pbnRlcmZhY2VfcHJpdmF0ZSAqL1xyXG4gICAgLyotLS0tLS0tLS1pbnRlcmZhY2VfcHVibGljICovXHJcbiAgICAvKi0tLS0tLS0tLXZhciB8IGNvbnN0ICovXHJcbiAgICAvKi0tLS0tLS0tLWNsYXNzX3ByaXZhdGUgKi9cclxuICAgIC8qLS0tLS0tLS0tY2xhc3NfcHVibGljICovXHJcbiAgICAvKirphY3nva4gKi9cclxuICAgIGV4cG9ydCBjbGFzcyBjb25maWcge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGluaXRfYV8/OiBjb25maWcpIHtcclxuICAgICAgICAgICAgaWYgKGluaXRfYV8pIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdF9hXyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLyoq5rua5Yqo57uT5p2f5Zue6LCDICovXHJcbiAgICAgICAgc2Nyb2xsX2ZpbmlzaF9jYl9mPzogKCk9PiB2b2lkO1xyXG4gICAgICAgIC8qKua7muWKqOWbnuiwg+aPkOWJjeajgOa1i+i3neemuyAqL1xyXG4gICAgICAgIHNjb3JsbF90cmlnZ2VyX2Rpc3RfbiA/PSAwO1xyXG4gICAgICAgIC8qKuWPjeW8uee7k+adn+WbnuiwgyAqL1xyXG4gICAgICAgIHJlYm91bmRfZmluaXNoX2NiX2Y/OiAoKT0+IHZvaWQ7XHJcbiAgICAgICAgLyoq5Y+N5by55Zue6LCD5o+Q5YmN5qOA5rWL6Led56a7ICovXHJcbiAgICAgICAgcmVib3VuZF90cmlnZ2VyX2Rpc3RfbiA/PSAwO1xyXG4gICAgICAgIC8qKua7muWKqOWNleagvOWbnuiwgyAqL1xyXG4gICAgICAgIHNjcm9sbF9ncmlkX2NiX2Y/OiAoKT0+IHZvaWQ7XHJcbiAgICAgICAgLyoq5rua5Yqo5Y2V5qC86KGl5YWo77yI5L6L77ya5LiA5qC86Led56a7Ne+8jOa7muWKqDEw6LCD55SoMuasoeWbnuiwg+iAjOmdnjHmrKHvvIkgKi9cclxuICAgICAgICBzY3JvbGxfZ3JpZF9jYl9zdXBwX2IgPz0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9sbGluZ19sb3R0ZXJ5OyJdfQ==
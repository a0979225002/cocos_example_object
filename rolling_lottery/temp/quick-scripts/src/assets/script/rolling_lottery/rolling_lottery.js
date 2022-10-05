"use strict";
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
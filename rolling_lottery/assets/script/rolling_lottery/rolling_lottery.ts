import bezier_curve from "./bezier_curve";

const {ccclass, property, menu, help} = cc._decorator;

module _rolling_lottery {
    /*---------enum_private */
    /*---------enum_public */
    /**移动方向 */
    export enum move_dire {
        上,
        下,
    }
    /*---------interface_private */
    /*---------interface_public */
    export interface action {
        /**运动曲线 */
        bezier_o: bezier_curve;
        /**运动距离 */
        dist_n: number;
    }
    /*---------var | const */
    /*---------class_private */
    /*---------class_public */
    @ccclass("tool/rolling_lottery/callback")
    export class callback {
        // ------------------public
        /**触发状态 */
        public trigger_b = false;
        // ------------------属性
        @property({ displayName: "回调", type: cc.Component.EventHandler })
        callback_o: cc.Component.EventHandler = null;
        @property({ displayName: "提前检测距离", min: 0 })
        check_dist_n = 0;
    }
}

/**滚动抽奖 */
@ccclass
@help("https://www.desmos.com/calculator/cahqdxeshd?lang=zh-CN")
@menu("tool/rolling_lottery")
class rolling_lottery extends cc.Component {
    /* ***************private*************** */
    /**当前速度（距离/s） */
    private _curr_speed_n: number;
    /**当前距离 */
    private _curr_dist_n = 0;
    /**步长时间 */
    private _step_time_s_n = 0.01;
    /**当前时间 */
    private _curr_time_s_n = 0;
    /**单圈长度 */
    private _lap_len_n: number;
    /**配置数据 */
    private _config_o: rolling_lottery.config;
    /**动作列表 */
    private _action_as: _rolling_lottery.action[] = [];
    /**当前动作下标 */
    private _curr_action_n: number;
    /**滚动动作 */
    private _scroll_action_a: _rolling_lottery.action;
    /**反弹动作 */
    private _rebound_action_a: _rolling_lottery.action;
    /**运动距离 */
    private _move_dist_n: number;
    /**上次所在格子下标 */
    private _last_pos_n: number;
    /* ***************public*************** */
    /**滚动状态 */
    public scroll_b = false;
    /* ***************属性*************** */
    @property({ displayName: "旋转方向", type: cc.Enum(_rolling_lottery.move_dire) })
    move_dire_e = _rolling_lottery.move_dire.下;
    @property({ displayName: "最大速度（距离/s）", min: 0.1 })
    max_speed_n = 50;
    @property({
        displayName: "转动圈数",
        min: 0,
        step: 1,
    })
    turn_lap_n = 10;
    @property({
        displayName: "转动随机圈数",
        min: 0,
        step: 1,
    })
    turn_lap_random_n = 0;
    @property({ displayName: "惯性随机距离", min: 0 })
    inertia_n = 50;
    @property({
        displayName: "滚动动作曲线",
        tooltip: "贝塞尔曲线控制点，可点击组件右上角->帮助文档进行跳转编辑",
        type: [cc.Vec2],
    })
    scroll_action_os: cc.Vec2[] = [cc.v2(0, 0), cc.v2(0.44, 0.8925), cc.v2(0.375, 0.25), cc.v2(0.75, 0.75), cc.v2(1, 0.05)];
    @property({
        displayName: "反弹动作曲线",
        tooltip: "贝塞尔曲线控制点，可点击组件右上角->帮助文档进行跳转编辑",
        type: [cc.Vec2],
        visible: function() { return this.inertia_n > 0; }
    })
    rebound_action_os: cc.Vec2[] = [cc.v2(0, -0.05), cc.v2(0.5, -0.02), cc.v2(1, 0)];
    /**滚动结束回调 */
    @property({ displayName: "滚动结束回调", type: [_rolling_lottery.callback] })
    scorll_finish_cb_os: _rolling_lottery.callback[] = [];
    /**反弹结束回调 */
    @property({
        displayName: "反弹结束回调",
        type: [_rolling_lottery.callback],
        visible: function () { return this.inertia_n > 0; }
    })
    rebound_finish_cb_os: _rolling_lottery.callback[] = [];
    /**滚动单格回调 */
    @property({ displayName: "滚动单格回调", type: [cc.Component.EventHandler] })
    scroll_grid_cb_os: cc.Component.EventHandler[] = [];
    /**滚动单格回调补全（例：一格距离5，滚动10调用2次回调而非1次） */
    @property({
        displayName: "滚动单格回调补全",
        tooltip: "例：一格距离5，滚动10调用2次回调而非1次",
        visible: function () { return this.scroll_grid_cb_os.length; }
    })
    scroll_grid_cb_supp_b = true;
    /* -------------------------------segmentation------------------------------- */
    onLoad() {
        // ------------------添加动作
        // 滚动
        this._action_as.push(this._scroll_action_a = {
            "bezier_o": new bezier_curve(this.scroll_action_os),
            "dist_n": 0,
        });
        // 反弹
        if (this.inertia_n > 0) {
            this._action_as.push(this._rebound_action_a = {
                "bezier_o": new bezier_curve(this.rebound_action_os),
                "dist_n": 0,
            });
        }
        const debug_b = false;
        if (!debug_b) {
            return;
        }
        let bezier_o = this._action_as[0].bezier_o;
        let point_os: cc.Vec2[] = [];
        let graphics_o = cc.Canvas.instance.node.getComponent(cc.Graphics) || cc.Canvas.instance.node.addComponent(cc.Graphics);
        let start_b = false;
        let offset_o = cc.v2(-cc.Canvas.instance.node.width * 0.5 + 100, -cc.Canvas.instance.node.height * 0.5 + 100);
        let scale_n = 100;
        for (let i = 0; i <= 1; i += 0.1) {
            point_os.push(bezier_o.point(i));
        }
        // ------------------绘制曲线线段
        graphics_o.strokeColor = cc.Color.WHITE;
        point_os.forEach(v1_o=> {
            if (!start_b) {
                start_b = true;
                graphics_o.moveTo(v1_o.x * scale_n + offset_o.x, v1_o.y * scale_n + offset_o.y);
            } else {
                graphics_o.lineTo(v1_o.x * scale_n + offset_o.x, v1_o.y * scale_n + offset_o.y);
            }
        });
        graphics_o.stroke();
        // ------------------绘制控制点
        graphics_o.fillColor = cc.Color.RED;
        bezier_o.control_point_os.forEach(v1_o=> {
            graphics_o.circle(v1_o.x * scale_n + offset_o.x, v1_o.y * scale_n + offset_o.y, 5);
            graphics_o.fill();
        });
        graphics_o.stroke();
    }
    update(dt_n_: number) {
        if (!this.scroll_b) {
            return;
        }
        let curr_action_a = this._action_as[this._curr_action_n];
        if ((curr_action_a.dist_n > 0 && this._curr_dist_n < curr_action_a.dist_n)
        || (curr_action_a.dist_n < 0 && this._curr_dist_n > curr_action_a.dist_n)) {
            this._curr_time_s_n += dt_n_;
            if (this._curr_time_s_n >= this._step_time_s_n) {
                this._curr_time_s_n -= this._step_time_s_n;
                /**距离比例 */
                let dist_scale_n = Math.round(this._curr_dist_n / Math.abs(curr_action_a.dist_n) * 100) / 100;
                /**当前t的曲线坐标y */
                let y_n = curr_action_a.bezier_o.point(dist_scale_n).y;
                // ------------------防止0停止运动
                if (y_n === 0) {
                    let pre_o = curr_action_a.bezier_o.point(dist_scale_n - 0.01);
                    let next_o = curr_action_a.bezier_o.point(dist_scale_n + 0.01);
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
            case this._scroll_action_a: {
                // ------------------结束回调
                if (this._config_o.scroll_finish_cb_f && (this._curr_dist_n + this._config_o.scorll_trigger_dist_n) >= curr_action_a.dist_n) {
                    this._config_o.scroll_finish_cb_f();
                    this._config_o.scroll_finish_cb_f = null;
                }
                this.scorll_finish_cb_os.forEach(v1_o=> {
                    if (!v1_o.trigger_b && (this._curr_dist_n + v1_o.check_dist_n) >= curr_action_a.dist_n) {
                        v1_o.callback_o.emit([v1_o.callback_o.customEventData]);
                        v1_o.trigger_b = true;
                    }
                });
            } break;
            // 反弹
            case this._rebound_action_a: {
                // ------------------结束回调
                if (this._config_o.rebound_finish_cb_f && (this._curr_dist_n + this._config_o.rebound_trigger_dist_n) >= curr_action_a.dist_n) {
                    this._config_o.rebound_finish_cb_f();
                    this._config_o.rebound_finish_cb_f = null;
                }
                this.rebound_finish_cb_os.forEach(v1_o=> {
                    if (!v1_o.trigger_b && (this._curr_dist_n + v1_o.check_dist_n) >= curr_action_a.dist_n) {
                        v1_o.callback_o.emit([v1_o.callback_o.customEventData]);
                        v1_o.trigger_b = true;
                    }
                });
            } break;
        }
        // cc.log(this._dist_n);
    }
    /* ***************功能函数*************** */
    /**获取在世界坐标系下的节点包围盒(不包含自身激活的子节点范围) */
    private _get_bounding_box_to_world(node_o_: any): cc.Rect {
        let w_n: number = node_o_._contentSize.width;
        let h_n: number = node_o_._contentSize.height;
        let rect_o = cc.rect(
            -node_o_._anchorPoint.x * w_n, 
            -node_o_._anchorPoint.y * h_n, 
            w_n, 
            h_n
        );
        node_o_._calculWorldMatrix();
        rect_o.transformMat4(rect_o, node_o_._worldMatrix);
        return rect_o;
    }
    /**检测碰撞 */
    private _check_collision(node_o_: cc.Node): boolean {
        let rect1_o = this._get_bounding_box_to_world(this.node);
        let rect2_o = this._get_bounding_box_to_world(node_o_);
        // ------------------保险范围
        rect1_o.width += rect1_o.width * 0.5;
        rect1_o.height += rect1_o.height * 0.5;
        rect1_o.x -= rect1_o.width * 0.25;
        rect1_o.y -= rect1_o.height * 0.25;
        return rect1_o.intersects(rect2_o);
    }
    /**重置 */
    private _reset(): void {
        // ------------------重置数据
        this._last_pos_n = undefined;
        this._curr_dist_n = 0;
        this._move_dist_n = 0;
        this._curr_time_s_n = 0;
        this._curr_action_n = 0;
        this._action_as.forEach(v1_a=> {
            v1_a.dist_n = 0;
        });
        this.scorll_finish_cb_os.forEach(v1_o=> {
            v1_o.trigger_b = false;
        });
        this.rebound_finish_cb_os.forEach(v1_o=> {
            v1_o.trigger_b = false;
        });
    }
    /**更新运动距离 */
    private _update_move_dist(dist_n_: number): void {
        if (!this._config_o.scroll_grid_cb_f) {
            return;
        }
        this._move_dist_n += Math.abs(dist_n_);
        /**当前所在格子 */
        let curr_pos_n = Math.floor(this._move_dist_n / this._lap_len_n) * this.node.children.length;
        /**整除单圈长度后的剩余距离 */
        let dist_n = this._move_dist_n % this._lap_len_n;
        for (let k1_n = 0; k1_n < this.node.children.length; ++k1_n) {
            if ((dist_n -= this.node.children[k1_n].height) <= 0) {
                curr_pos_n += k1_n;
                break;
            }
        }
        // ------------------执行回调
        if (this._last_pos_n !== undefined && curr_pos_n !== this._last_pos_n) {
            if (this._config_o.scroll_grid_cb_supp_b) {
                let for_n = Math.abs(this._last_pos_n - curr_pos_n);
                for (; for_n--;){
                    this._config_o.scroll_grid_cb_f();
                }
            } else {
                this._config_o.scroll_grid_cb_f();
            }
            if (this.scroll_grid_cb_supp_b) {
                let for_n = Math.abs(this._last_pos_n - curr_pos_n);
                for (; for_n--;){
                    this.scroll_grid_cb_os.forEach(v1_o=> {
                        v1_o.emit([ v1_o.customEventData ]);
                    });
                }
            } else {
                this.scroll_grid_cb_os.forEach(v1_o=> {
                    v1_o.emit([ v1_o.customEventData ]);
                });
            }
        }
        this._last_pos_n = curr_pos_n;
    }
    /**计算运动距离 */
    private _comp_move_dist(index_n_: number): number {
        /**中心点y */
        let center_y_n = -this.node.height * this.node.anchorY + this.node.height * 0.5;
        /**距离 */
        let dist_y_n = 0;
        if (this.move_dire_e === _rolling_lottery.move_dire.上) {
            if (this.node.children[index_n_].y > center_y_n) {
                dist_y_n = this._lap_len_n - (this.node.children[index_n_].y - center_y_n);
            } else if (this.node.children[index_n_].y < center_y_n) {
                dist_y_n = center_y_n - this.node.children[index_n_].y;
            }
        } else {
            if (this.node.children[index_n_].y > center_y_n) {
                dist_y_n = this.node.children[index_n_].y - center_y_n;
            } else if (this.node.children[index_n_].y < center_y_n) {
                dist_y_n = this._lap_len_n - (center_y_n - this.node.children[index_n_].y);
            }
        }
        return dist_y_n;
    }
    /**重置
     * - 重置布局，在更新子节点后调用
     */
    public reset(): void {
        // ------------------重置布局
        let old_h_n = this.node.height;
        let layout_o = this.node.getComponent(cc.Layout);
        layout_o.enabled = true;
        layout_o.updateLayout();
        layout_o.enabled = false;
        this.node.height = old_h_n;
        this._lap_len_n = 0;
        this.node.children.forEach(v1_o=> {
            this._lap_len_n += v1_o.height;
        });
        this._reset();
    }
    /**随机子节点顺序（打乱） */
    public random_order(): void {
        if (this.scroll_b) {
            cc.warn("忙碌");
            return;
        }
        let children_os = [];
        children_os.push(...this.node.children);
        this.node.removeAllChildren();
        while (children_os.length) {
            this.node.addChild(children_os.splice(Math.floor(Math.random() * children_os.length), 1)[0]);
        }
        this.reset();
    }
    /**
     * 滚动
     * @param index_n_ 目标位置
     */
    public scroll(index_n_: number, config_o_?: rolling_lottery.config): void {
        if (index_n_ >= this.node.children.length) {
            cc.error("目标位置错误");
            return;
        }
        if (this.scroll_b) {
            cc.error("忙碌");
            return;
        }
        this._config_o = new rolling_lottery.config(config_o_);
        this._reset();
        /**运动距离 */
        let move_dist_n = this._comp_move_dist(index_n_);
        // 惯性距离
        this._rebound_action_a.dist_n = this.inertia_n;
        // 滚动距离
        this._scroll_action_a.dist_n = this._lap_len_n * (this.turn_lap_n + Math.floor(Math.random() * this.turn_lap_random_n)) + move_dist_n + this._rebound_action_a.dist_n;
        this.scroll_b = true;
    }
    /**
     * 立即跳转到指定item
     * @param index_n_ 默认随机子节点下标
     */
    public jump(index_n_ = Math.floor(Math.random() * (this.node.children.length + 1))): void {
        /**运动距离 */
        let move_dist_n = this._comp_move_dist(index_n_);
        this._curr_speed_n = this._scroll_action_a.dist_n = move_dist_n;
        this._scrolling();
    }
    /* ***************其他事件*************** */
    private _scrolling(): void {
        /**实际顶部y */
        let top_y_n = this.node.height - this.node.height * this.node.anchorY;
        /**实际底部y */
        let bottom_y_n = top_y_n - this._lap_len_n;
        /**视图顶部y */
        let top_view_y_n = top_y_n;
        /**视图底部y */
        let bottom_view_y_n = this.node.y - this.node.height;
        // ------------------向上滚动
        if (this._curr_speed_n > 0) {
            let temp1_n: number;
            this.node.children.forEach(v1_o=> {
                v1_o.y += this._curr_speed_n;
                if (v1_o.y > top_view_y_n && !this._check_collision(v1_o)) {
                    temp1_n = (v1_o.y - top_y_n) % this._lap_len_n;
                    v1_o.y = bottom_y_n + temp1_n;
                }
            });
        }
        // ------------------向下滚动
        else if (this._curr_speed_n < 0) {
            let temp1_n: number;
            this.node.children.forEach(v1_o=> {
                v1_o.y += this._curr_speed_n;
                if (v1_o.y < bottom_view_y_n && !this._check_collision(v1_o)) {
                    temp1_n = (bottom_y_n - v1_o.y) % this._lap_len_n;
                    v1_o.y = top_y_n - temp1_n;
                }
            });
        }
    }
}

module rolling_lottery {
    /*---------enum_private */
    /*---------enum_public */
    /**移动方向 */
    export const move_dire = _rolling_lottery.move_dire;
    /*---------interface_private */
    /*---------interface_public */
    /*---------var | const */
    /*---------class_private */
    /*---------class_public */
    /**配置 */
    export class config {
        constructor(init_a_?: config) {
            if (init_a_) {
                Object.assign(this, init_a_);
            }
        }
        /**滚动结束回调 */
        scroll_finish_cb_f?: ()=> void;
        /**滚动回调提前检测距离 */
        scorll_trigger_dist_n ?= 0;
        /**反弹结束回调 */
        rebound_finish_cb_f?: ()=> void;
        /**反弹回调提前检测距离 */
        rebound_trigger_dist_n ?= 0;
        /**滚动单格回调 */
        scroll_grid_cb_f?: ()=> void;
        /**滚动单格补全（例：一格距离5，滚动10调用2次回调而非1次） */
        scroll_grid_cb_supp_b ?= true;
    }
}

export default rolling_lottery;
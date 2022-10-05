// author: http://lamyoung.com/

import PhysicsPolygonColliderEx from "./PhysicsPolygonColliderEx";

// 挖洞圆半径
const DIG_RADIUS = 50;
// 圆的边的数量
const DIG_FRAGMENT = 12;
// 归一到单位化
const DIG_OPTIMIZE_SIZE = 1;


const { ccclass, property } = cc._decorator;

@ccclass
export default class Main_poly extends cc.Component {

    graphics: cc.Graphics = null;

    @property(cc.Node)
    node_dirty: cc.Node = null;

    @property(cc.Node)
    node_ball: cc.Node = null;

    @property(PhysicsPolygonColliderEx)
    polyEx: PhysicsPolygonColliderEx = null;

    onLoad() {
        cc.macro.ENABLE_MULTI_TOUCH = false;

        cc.director.getPhysicsManager().enabled = true;
        // 开启物理步长的设置
        cc.director.getPhysicsManager().enabledAccumulator = true;

        // 物理步长，默认 FIXED_TIME_STEP 是 1/60
        cc.PhysicsManager.FIXED_TIME_STEP = 1 / 30;

        // 每次更新物理系统处理速度的迭代次数，默认为 10
        cc.PhysicsManager.VELOCITY_ITERATIONS = 8;

        // 每次更新物理系统处理位置的迭代次数，默认为 10
        cc.PhysicsManager.POSITION_ITERATIONS = 8;

        this.node_dirty.on(cc.Node.EventType.TOUCH_START, this._touchStart, this);
        this.node_dirty.on(cc.Node.EventType.TOUCH_MOVE, this._touchMove, this);
        this.node_dirty.on(cc.Node.EventType.TOUCH_END, this._touchEnd, this);
        this.node_dirty.on(cc.Node.EventType.TOUCH_CANCEL, this._touchEnd, this);

        this.graphics = this.node_dirty.getComponent(cc.Mask)['_graphics'];
    }

    start() {
        this.scheduleOnce(() => {
            this.reset();
        }, 0.01);
    }

    private _optimizePoint(point) {
        const x = Math.floor(point[0] * DIG_OPTIMIZE_SIZE) / DIG_OPTIMIZE_SIZE;
        const y = Math.floor(point[1] * DIG_OPTIMIZE_SIZE) / DIG_OPTIMIZE_SIZE;
        return cc.v2(x, y);
    }

    private _touchStart(touch: cc.Touch) {
        this._touchStartPos = undefined;
        this._touchMove(touch);
    }

    private _touchStartPos: cc.Vec2;
    private _touchMove(touch: cc.Touch) {
        const regions: cc.Vec2[] = [];
        const pos = this.graphics.node.convertToNodeSpaceAR(touch.getLocation());

        const count = DIG_FRAGMENT;
        if (!this._touchStartPos) {
            for (let index = 0; index < count; index++) {
                const r = 2 * Math.PI * index / count;
                const x = pos.x + DIG_RADIUS * Math.cos(r);
                const y = pos.y + DIG_RADIUS * Math.sin(r);
                regions.push(this._optimizePoint([x, y]));
            }
            this._touchStartPos = pos;
        } else {
            const delta = pos.sub(this._touchStartPos);
            // 手指移动的距离太小的话忽略
            if (delta.lengthSqr() > 25) {
                // 这里是合并成一个顺滑的图形  详细见下面内容
                // 优化篇原文:  https://mp.weixin.qq.com/s/4lFv9p346yEg_PSOwN0WKw  
                // 优化篇视频:  https://b23.tv/BV1GV411d7eq  
                const startPos = this._touchStartPos;
                for (let index = 0; index < count; index++) {
                    const r = 2 * Math.PI * index / count;
                    let vec_x = DIG_RADIUS * Math.cos(r);
                    let vec_y = DIG_RADIUS * Math.sin(r);
                    let x, y;
                    if (delta.dot(cc.v2(vec_x, vec_y)) > 0) {
                        x = pos.x + vec_x;
                        y = pos.y + vec_y;
                    } else {
                        x = startPos.x + vec_x;
                        y = startPos.y + vec_y;
                    }
                    regions.push(this._optimizePoint([x, y]));
                }
                this._touchStartPos = pos;
            }
        }

        if (regions.length)
            this.polyEx.pushCommand('polyDifference', [regions, this.graphics]);
    }

    private _touchEnd(touch: cc.Touch) {
        this._touchStartPos = undefined;
    }

    reset() {
        const ww = this.node_dirty.width;
        const hh = this.node_dirty.height;
        this.polyEx.init([
            [cc.v2(-ww / 2, -hh / 2), cc.v2(-ww / 2, hh / 2), cc.v2(ww / 2, hh / 2), cc.v2(ww / 2, -hh / 2)]
        ]);
        this.polyEx.polyDifference([], this.graphics);
        this.node_ball.setPosition(0, hh / 2 + 100);
        this.node_ball.getComponent(cc.RigidBody).linearVelocity = cc.v2();
    }

    private debug() {
        cc.debug.setDisplayStats(!cc.debug.isDisplayStats());
        cc.director.getPhysicsManager().debugDrawFlags = cc.debug.isDisplayStats() ? 1 : 0;
    }

}
// 欢迎关注微信公众号[白玉无冰]

/**
█████████████████████████████████████
█████████████████████████████████████
████ ▄▄▄▄▄ █▀█ █▄██▀▄ ▄▄██ ▄▄▄▄▄ ████
████ █   █ █▀▀▀█ ▀▄▀▀▀█▄▀█ █   █ ████
████ █▄▄▄█ █▀ █▀▀▀ ▀▄▄ ▄ █ █▄▄▄█ ████
████▄▄▄▄▄▄▄█▄▀ ▀▄█ ▀▄█▄▀ █▄▄▄▄▄▄▄████
████▄▄  ▄▀▄▄ ▄▀▄▀▀▄▄▄ █ █ ▀ ▀▄█▄▀████
████▀ ▄  █▄█▀█▄█▀█  ▀▄ █ ▀ ▄▄██▀█████
████ ▄▀▄▄▀▄ █▄▄█▄ ▀▄▀ ▀ ▀ ▀▀▀▄ █▀████
████▀ ██ ▀▄ ▄██ ▄█▀▄ ██▀ ▀ █▄█▄▀█████
████   ▄██▄▀ █▀▄▀▄▀▄▄▄▄ ▀█▀ ▀▀ █▀████
████ █▄ █ ▄ █▀ █▀▄█▄▄▄▄▀▄▄█▄▄▄▄▀█████
████▄█▄█▄█▄█▀ ▄█▄   ▀▄██ ▄▄▄ ▀   ████
████ ▄▄▄▄▄ █▄██ ▄█▀  ▄   █▄█  ▄▀█████
████ █   █ █ ▄█▄ ▀  ▀▀██ ▄▄▄▄ ▄▀ ████
████ █▄▄▄█ █ ▄▄▀ ▄█▄█▄█▄ ▀▄   ▄ █████
████▄▄▄▄▄▄▄█▄██▄▄██▄▄▄█████▄▄█▄██████
█████████████████████████████████████
█████████████████████████████████████
 */
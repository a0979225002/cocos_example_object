// author: http://lamyoung.com/

import PhysicsPolygonColliderEx_piecewise from "./PhysicsPolygonColliderEx_piecewise";

// 挖洞圆半径
const DIG_RADIUS = 50;
// 分块半径(小于挖洞)
const PICE_RADIUS = 40;
// 圆的边的数量
const DIG_FRAGMENT = 12;
// 归一到单位化
const DIG_OPTIMIZE_SIZE = 1;


const { ccclass, property } = cc._decorator;

@ccclass
export default class Main_poly_piecewise extends cc.Component {

    @property(cc.Graphics)
    graphics: cc.Graphics = null;

    @property(cc.Node)
    node_dirty: cc.Node = null;

    @property(cc.Node)
    node_ball: cc.Node = null;

    @property(cc.Node)
    node_qrCode: cc.Node = null;

    @property(PhysicsPolygonColliderEx_piecewise)
    polyEx: PhysicsPolygonColliderEx_piecewise = null;

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
        let xMin = Number.MAX_SAFE_INTEGER, xMax = Number.MIN_SAFE_INTEGER, yMin = Number.MAX_SAFE_INTEGER, yMax = Number.MIN_SAFE_INTEGER;
        const count = DIG_FRAGMENT;
        const regions_push = (x, y) => {
            const p = this._optimizePoint([x, y]);
            xMin = p.x < xMin ? p.x : xMin;
            yMin = p.y < yMin ? p.y : yMin;
            xMax = p.x > xMax ? p.x : xMax;
            yMax = p.y > yMax ? p.y : yMax;
            regions.push(p);
        }
 
        if (!this._touchStartPos) {
            for (let index = 0; index < count; index++) {
                const r = 2 * Math.PI * index / count;
                const x = pos.x + DIG_RADIUS * Math.cos(r);
                const y = pos.y + DIG_RADIUS * Math.sin(r);
                regions_push(x, y);
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
                    regions_push(x, y);
                }
                this._touchStartPos = pos;
            }
        }

        if (regions.length) {
            const rect_r = cc.Rect.fromMinMax(cc.v2(xMin, yMin), cc.v2(xMax, yMax));
            for (let index = 0; index < this._rects.length; index++) {
                const rect = this._rects[index];
                if (rect.intersects(rect_r)) {
                    this.polyEx.pushCommand('polyDifference', [regions, index])
                }
            }
        }
    }

    private _touchEnd(touch: cc.Touch) {
        this._touchStartPos = undefined;
    }

    private _rects: cc.Rect[] = [];
    reset() {
        this._rects = [];
        const polys: cc.Vec2[][][] = [];
        const totalRow = 12;
        const totalCol = 10;
        for (let index = 0; index < totalRow * totalCol; index++) {
            const row = Math.floor(index / totalCol);
            const col = index % totalCol;
            const y = row * PICE_RADIUS * 2 - totalRow * PICE_RADIUS;
            const x = col * PICE_RADIUS * 2 - totalCol * PICE_RADIUS;
            this._rects[index] = cc.rect(x, y, PICE_RADIUS * 2, PICE_RADIUS * 2);
            const { xMin, xMax, yMin, yMax } = this._rects[index];
            polys[index] = [[cc.v2(xMin, yMin), cc.v2(xMin, yMax), cc.v2(xMax, yMax), cc.v2(xMax, yMin)]]
        }

        this.polyEx.init(polys, this.graphics);
        this.node_ball.setPosition(0, 500);
    }

    private debug() {
        cc.debug.setDisplayStats(!cc.debug.isDisplayStats());
        cc.director.getPhysicsManager().debugDrawFlags = cc.debug.isDisplayStats() ? 1 : 0;
    }

    private showOrHideQrCode() {
        this.node_qrCode.active = !this.node_qrCode.active;
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
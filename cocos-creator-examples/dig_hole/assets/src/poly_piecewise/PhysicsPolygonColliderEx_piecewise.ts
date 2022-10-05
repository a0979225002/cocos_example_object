// author: http://lamyoung.com/
/** author
█████████████████████████████████
█████████████████████████████████
████ ▄▄▄▄▄ █▀▀ ██   ██ ▄▄▄▄▄ ████
████ █   █ █▄▀██▀█  ▄█ █   █ ████
████ █▄▄▄█ █ ▄ █ ▀▄ ▄█ █▄▄▄█ ████
████▄▄▄▄▄▄▄█ █ ▀▄█ █▄█▄▄▄▄▄▄▄████
████▄▄▀▄▀█▄▄▀▀█  ██▄▄▀ ▄▄█▄▄▀████
████ █ ▄▄▄▄█▄▀▀  ▀ █  █▀ ██▄▄████
█████▀█▀  ▄▄██▄ █▀▄█▄▄ ▀█ ▀▄ ████
████▄▀█▀██▄██   █▄▄█ ▄██▀▀▄▀▄████
████▄▄▄▄▄█▄█▀ ▀█  ▀  ▄▄▄   █▀████
████ ▄▄▄▄▄ █▄▀█▄ █ ▄ █▄█ ▀▀ ▄████
████ █   █ █▀▀█▀██▀█▄▄▄  █▀█▄████
████ █▄▄▄█ █▀ ▄███▀▄▀▀▀█▄ ▄█▄████
████▄▄▄▄▄▄▄█▄███▄██▄▄▄█▄███▄▄████
█████████████████████████████████
█████████████████████████████████

*/

const { ccclass, property, menu, requireComponent } = cc._decorator;

@ccclass
@menu("i18n:MAIN_MENU.component.physics/Collider/PolygonEX_piecewise-lamyoung.com")
@requireComponent(cc.RigidBody)
export default class PhysicsPolygonColliderEx_piecewise extends cc.Component {

    private _ctx: cc.Graphics;

    // public get polys() {
    //     return this._polys.map((v) => { return this._convertClipperPathToVecArray(v) });
    // }
    private _polys: { X: number, Y: number }[][][] = [];

    private _physicsPolygonColliders: cc.PhysicsPolygonCollider[] = [];

    init(polys: cc.Vec2[][][], ctx: cc.Graphics) {
        // this._polys = polys.map((v) => { return v.map(vv => { this._convertVecArrayToClipperPath(vv) }) });
        this._polys = [];
        for (let index = 0; index < polys.length; index++) {
            const element = polys[index];
            this._polys[index] = element.map((v) => { return this._convertVecArrayToClipperPath(v) });
        }
        this._ctx = ctx;
        this._commands = [];
        this.draw();
    }

    private _commands: { name: string, params: any[] }[] = [];

    pushCommand(name: string, params: any[]) {
        this._commands.push({ name, params });
    }

    polyDifference(poly: cc.Vec2[], index: number) {
        // const ctx = this._ctx;
        if (!this._polys[index] || this._polys[index].length === 0) return;

        // 计算新的多边形
        // https://sourceforge.net/p/jsclipper/wiki/documentation
        const cpr = new ClipperLib.Clipper(ClipperLib.Clipper.ioStrictlySimple);
        const subj_paths = this._polys[index];
        const clip_paths = [this._convertVecArrayToClipperPath(poly)]
        cpr.AddPaths(subj_paths, ClipperLib.PolyType.ptSubject, true);
        cpr.AddPaths(clip_paths, ClipperLib.PolyType.ptClip, true);
        const subject_fillType = ClipperLib.PolyFillType.pftEvenOdd;
        const clip_fillType = ClipperLib.PolyFillType.pftEvenOdd;
        const solution = new ClipperLib.Paths();
        cpr.Execute(ClipperLib.ClipType.ctDifference, solution, subject_fillType, clip_fillType);
        this._polys[index] = solution || [];
        // cc.log(solution, index, 'polyDifference');
    }

    private draw() {
        const ctx = this._ctx;
        ctx.clear();
        let _physicsPolygonColliders_count = 0;
        for (let index = 0; index < this._polys.length; index++) {
            const polygons = this._polys[index];
            for (let index2 = 0; index2 < polygons.length; index2++) {
                const polygon = polygons[index2];

                let c = this._physicsPolygonColliders[_physicsPolygonColliders_count];
                if (!c) {
                    c = this.addComponent(cc.PhysicsPolygonCollider);
                    c.friction = 0;
                    c.restitution = 0;
                    this._physicsPolygonColliders[_physicsPolygonColliders_count] = c;
                }
                c.points = this._convertClipperPathToVecArray(polygon);
                c.apply();
                _physicsPolygonColliders_count++;

                for (let index3 = 0; index3 < c.points.length; index3++) {
                    const p = c.points[index3];
                    if (index3 === 0) ctx.moveTo(p.x, p.y);
                    else ctx.lineTo(p.x, p.y);
                }
                ctx.close();
            }
        }
        ctx.fill();
        this._physicsPolygonColliders.slice(_physicsPolygonColliders_count).forEach(((v,i) => {
            if (v.points.length) {
                v.points.length = 0;
                v.apply();
            }
        }));
    }

    lateUpdate(dt: number) {
        if (this._commands.length) {
            // 每帧执行命令队列
            const len = this._commands.length;//Math.ceil(this._commands.length / 2);
            for (let index = 0; index < len; index++) {
                const cmd = this._commands.shift();
                if (cmd)
                    this[cmd.name](...cmd.params);
                else
                    break;
            }
            this.draw();
        }
    }

    private _convertVecArrayToClipperPath(poly: cc.Vec2[]) {
        return poly.map((p) => { return { X: p.x, Y: p.y } });
    }

    private _convertClipperPathToVecArray(poly: { X: number, Y: number }[]) {
        return poly.map((p) => { return cc.v2(p.X, p.Y) });
    }

    // private _convertClipperPathToPoly2triPoint(poly: { X: number, Y: number }[], exclude: poly2tri.Point[] = []): poly2tri.Point[] {
    //     // return poly.map((p) => { return new poly2tri.Point(p.X, p.Y) });
    //     const newPos: poly2tri.Point[] = [];
    //     poly.forEach((p, i) => {
    //         const p_now = new poly2tri.Point(p.X, p.Y)
    //         const isIn = exclude.some((e_p) => {
    //             if (e_p.equals(p_now)) {
    //                 return true;
    //             }
    //         })
    //         if (!isIn) {
    //             newPos.push(p_now);
    //             exclude.push(p_now);
    //         }
    //     })
    //     if (newPos.length > 2)
    //         return newPos;
    //     else
    //         return [];
    // }

}

// 欢迎关注微信公众号[白玉无冰]
// qq 交流群 859642112

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
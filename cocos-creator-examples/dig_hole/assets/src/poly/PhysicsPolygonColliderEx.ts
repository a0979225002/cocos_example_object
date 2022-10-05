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

const DIG_OPTIMIZE_SIZE = 1;

const { ccclass, property, menu, requireComponent } = cc._decorator;

@ccclass
@menu("i18n:MAIN_MENU.component.physics/Collider/PolygonEX-lamyoung.com")
@requireComponent(cc.RigidBody)
export default class PhysicsPolygonColliderEx extends cc.Component {



    public get polys() {
        return this._polys.map((v) => { return this._convertClipperPathToVecArray(v) });
    }
    private _polys: { X: number, Y: number }[][] = [];

    private _physicsPolygonColliders: cc.PhysicsPolygonCollider[] = [];

    init(polys: cc.Vec2[][]) {
        this._polys = polys.map((v) => { return this._convertVecArrayToClipperPath(v) });
        this._commands = [];
    }

    private _commands: { name: string, params: any[] }[] = [];

    pushCommand(name: string, params: any[]) {
        this._commands.push({ name, params });
    }

    polyDifference(poly: cc.Vec2[], ctx?: cc.Graphics) {
        // if (poly.length < 3) return;

        // 计算新的多边形
        const cpr = new ClipperLib.Clipper(ClipperLib.Clipper.ioStrictlySimple); //ClipperLib.Clipper.ioStrictlySimple | ClipperLib.Clipper.ioPreserveCollinear
        // cpr.PreserveCollinear = true;
        const subj_paths = this._polys;
        const clip_paths = [this._convertVecArrayToClipperPath(poly)]
        cpr.AddPaths(subj_paths, ClipperLib.PolyType.ptSubject, true);
        cpr.AddPaths(clip_paths, ClipperLib.PolyType.ptClip, true);
        const subject_fillType = ClipperLib.PolyFillType.pftEvenOdd;
        const clip_fillType = ClipperLib.PolyFillType.pftEvenOdd;
        const solution_polytree = new ClipperLib.PolyTree();
        cpr.Execute(ClipperLib.ClipType.ctDifference, solution_polytree, subject_fillType, clip_fillType);
        const solution_expolygons = ClipperLib.JS.PolyTreeToExPolygons(solution_polytree);
        this._polys = ClipperLib.Clipper.PolyTreeToPaths(solution_polytree);
        // cc.log(solution_expolygons);

        // 将多边形分割成三角形 并绘制出来
        ctx && ctx.clear(true);
        let _physicsPolygonColliders_count = 0;
        for (const expolygon of solution_expolygons) {
            // const outers = ClipperLib.Clipper.SimplifyPolygon(expolygon.outer,ClipperLib.PolyFillType.pftEvenOdd);
            // cc.log(outer,"outer",expolygon.outer)
            const countor = this._convertClipperPathToPoly2triPoint(expolygon.outer);
            if (countor.length < 2) continue;
            const swctx = new poly2tri.SweepContext(countor, { cloneArrays: true });
            // const exclude = countor;
            const holes = expolygon.holes.map(h => { return this._convertClipperPathToPoly2triPoint(h, countor) });
            try {
                // 防止 addhole 失败 使用try
                swctx.addHoles(holes);
                swctx.triangulate();
                const triangles = swctx.getTriangles();
                // cc.log('triangles', triangles);
                for (const tri of triangles) {
                    // 逐一处理三角形
                    let c = this._physicsPolygonColliders[_physicsPolygonColliders_count];
                    if (!c) {
                        c = this.addComponent(cc.PhysicsPolygonCollider);
                        c.friction = 0;
                        c.restitution = 0;
                        this._physicsPolygonColliders[_physicsPolygonColliders_count] = c;
                    }
                    c.points = tri.getPoints().map((v, i) => {
                        if (ctx) {
                            if (i === 0) ctx.moveTo(v.x, v.y);
                            else ctx.lineTo(v.x, v.y);
                        }
                        return cc.v2(v.x, v.y)
                    });
                    c.apply();
                    _physicsPolygonColliders_count++;
                    if (ctx) {
                        ctx.close();
                        ctx.fill();
                    }
                }
            } catch (e) {
                console.error('polyDifference poly2tri error', _physicsPolygonColliders_count, expolygon);
                console.error(e);
                continue;
            }
        }

        this._physicsPolygonColliders.slice(_physicsPolygonColliders_count).forEach((v => {
            if (v.points.length) {
                v.points.length = 0;
                v.apply();
            }
        }));
    }

    lateUpdate(dt: number) {
        if (this._commands.length) {
            // 每帧执行命令队列
            for (let index = 0; index < 2; index++) {
                const cmd = this._commands.shift();
                if (cmd)
                    this[cmd.name](...cmd.params);
                else
                    break;
            }
        }
    }

    private _convertVecArrayToClipperPath(poly: cc.Vec2[]) {
        return poly.map((p) => { return { X: p.x, Y: p.y } });
    }

    private _convertClipperPathToVecArray(poly: { X: number, Y: number }[]) {
        return poly.map((p) => { return cc.v2(p.X, p.Y) });
    }

    private _convertClipperPathToPoly2triPoint(poly: { X: number, Y: number }[], exclude: poly2tri.Point[] = []): poly2tri.Point[] {
        // return poly.map((p) => { return new poly2tri.Point(p.X, p.Y) });
        const newPos: poly2tri.Point[] = [];
        poly.forEach((p, i) => {
            const p_now = new poly2tri.Point(p.X, p.Y)
            const isIn = exclude.some((e_p) => {
                if (e_p.equals(p_now)) {
                    return true;
                }
            })
            if (!isIn) {
                newPos.push(p_now);
                exclude.push(p_now);
            }
        })
        if (newPos.length > 2)
            return newPos;
        else
            return [];
    }

}

// 欢迎关注微信公众号[白玉无冰]
// qq 交流群 859642112
// 图文讲解
// https://mp.weixin.qq.com/s/jxKeM2Ah5UHlGTryksdr6Q
// https://mp.weixin.qq.com/s/bL4VTlmzAO7ZzxB9NZ-R8A
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
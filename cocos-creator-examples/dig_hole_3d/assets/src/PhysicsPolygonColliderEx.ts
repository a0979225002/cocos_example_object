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


const THICK = 100
const gfx = cc['gfx'];

const { ccclass, property, menu, requireComponent } = cc._decorator;

@ccclass
@menu("i18n:MAIN_MENU.component.physics/Collider/PolygonEX-lamyoung.com")
@requireComponent(cc.RigidBody)
export default class PhysicsPolygonColliderEx extends cc.Component {

    @property(cc.MeshRenderer)
    meshRenderer: cc.MeshRenderer = null;



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


        // 绘制底层 mesh
        const arr2 = this._polys.map((v) => { return this._convertClipperPathToVecArray(v) });
        const poly_tri_arr = [];
        const c_count = arr2.length;
        for (let k = 0; k < c_count; k++) {
            let tmpArr = arr2[k];
            let tmpArr2 = [];
            for (let k2 = 0; k2 < tmpArr.length; k2++) {
                let aa = tmpArr[k2];
                tmpArr2.push([aa.x, aa.y]);
            }

            poly_tri_arr.push(tmpArr2);
        }
        this.addMesh(poly_tri_arr);
    }



    addMesh(tri) {

        let allPoints = [];
        let indexArr = [];

        let uvIndexArr = [];
        let uvType = 0;
        let uvupTypeArr = [cc.v2(0, 0), cc.v2(0, 1), cc.v2(1, 0), cc.v2(1, 1)]
        let uvDownTypeArr = [cc.v2(1, 1), cc.v2(0, 0), cc.v2(0, 1), cc.v2(1, 0)]
        let colorIndex = [];


        // console.log("****2this._regions.length:"+tri.length);

        for (let i = 0; i < tri.length; i++) {
            let singleParr = [].concat(tri[i]);
            indexArr[i] = [];
            let length = singleParr.length;
            for (let j = 0; j < length; j++) {
                if (singleParr[j]) {
                    allPoints.push(cc.v3(singleParr[j][0], singleParr[j][1], 0))
                    indexArr[i].push(allPoints.length - 1)
                    uvIndexArr.push(uvupTypeArr[uvType]);
                    uvType = uvType >= 3 ? 0 : uvType + 1;
                    colorIndex.push(cc.Color.WHITE)
                }
            }
        }

        uvType = 0;
        let iLength = allPoints.length;
        for (let i = 0; i < iLength; i++) {
            allPoints[i + iLength] = cc.v3(allPoints[i].x, allPoints[i].y, -THICK)
            uvIndexArr.push(uvDownTypeArr[uvType]);
            uvType = uvType >= 3 ? 0 : uvType + 1;
            colorIndex.push(cc.Color.WHITE)
        }




        const vfmtPosColor = new gfx.VertexFormat([
            { name: gfx.ATTR_POSITION, type: gfx.ATTR_TYPE_FLOAT32, num: 3 },
            { name: gfx.ATTR_UV0, type: gfx.ATTR_TYPE_FLOAT32, num: 2 },
            { name: gfx.ATTR_COLOR, type: gfx.ATTR_TYPE_UINT8, num: 4, normalize: true },
        ]);

        let mesh = new cc.Mesh();
        mesh.init(vfmtPosColor, allPoints.length, true);
        this.meshRenderer.mesh = mesh;

        mesh.setVertices(gfx.ATTR_POSITION, allPoints);
        mesh.setVertices(gfx.ATTR_COLOR, colorIndex);
        mesh.setVertices(gfx.ATTR_UV0, uvIndexArr);

        let indices = this.conmuteIndices(indexArr, iLength)
        mesh.setIndices(indices);
    }

    conmuteIndices(indexArr, length) {
        let indicesarr = [];
        for (let i = 0; i < indexArr.length; i++) {
            let arr = indexArr[i];
            for (let j = 0; j < arr.length; j++) {
                let p1, p2, p3, p4;
                if (j < arr.length - 1) {
                    p1 = arr[j];
                    p2 = arr[j + 1];
                    p3 = arr[j] + length;
                    p4 = arr[j + 1] + length;
                } else {
                    p1 = arr[j];
                    p2 = arr[0];
                    p3 = arr[j] + length;
                    p4 = arr[0] + length;
                }
                indicesarr.push(p1, p2, p4, p3, p4, p1)
            }
        }
        return indicesarr;
    }

    lateUpdate(dt: number) {
        if (this._commands.length) {
            // 每帧执行命令队列
            for (let index = 0; index < Math.ceil(this._commands.length / 2 + 0.5); index++) {
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
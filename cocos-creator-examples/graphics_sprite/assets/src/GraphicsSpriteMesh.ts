// author: http://lamyoung.com/


const { ccclass, property, requireComponent } = cc._decorator;
@ccclass
@requireComponent(cc.Graphics)
export default class GraphicsSpriteMesh extends cc.Component {

    @property(cc.Sprite)
    sprite: cc.Sprite = null;

    graphics: cc.Graphics = null;


    private _vertices: { x: number[], y: number[], nu: number[], nv: number[], triangles: number[] } = {
        x: [],
        y: [],
        nu: [],
        nv: [],
        triangles: [],
    }

    onLoad() {
        this.graphics = this.node.getComponent(cc.Graphics);
        this.sprite.type = cc.Sprite.Type.MESH;
        this.sprite.node.anchorY = 1;
        this.sprite.node.anchorX = 0;
        this.sprite.node.scaleY = -1;
        this.sprite.node.x = this.node.y = 0;
        this.sprite.spriteFrame['vertices'] = this._vertices;
    }

    stroke() {
        if (cc.game.renderType === cc.game.RENDER_TYPE_WEBGL) {
            const vertices = this._vertices;
            vertices.x.length = vertices.y.length = vertices.nu.length = vertices.nv.length = vertices.triangles.length = 0;
            const _impl = this.graphics['_impl'];
            // const _assembler = this.graphics['_assembler'];
            // cc.log(_impl);
            const w = this.graphics.lineWidth;
            for (let index = 0; index < _impl._paths.length; index++) {
                const path = _impl._paths[index];
                const pathPoints = path.points;
                // cc.log(index, path);
                if (pathPoints.length < 2) continue;
                for (let index2 = 1; index2 < pathPoints.length; index2++) {
                    const p = cc.v2(pathPoints[index2].x, pathPoints[index2].y); // 当前点
                    const p_pre = cc.v2(pathPoints[index2 - 1].x, pathPoints[index2 - 1].y); //上一个点
                    const dir = p.sub(p_pre); //方向
                    const cross_dir = (dir.y == 0 ? cc.v2(0, 1) : cc.v2(1, -dir.x / dir.y).normalize()).mulSelf(w / 2); //垂直方向
                    const p_r_t = p.add(cross_dir); //右上
                    const p_r_b = p.sub(cross_dir); // 右下
                    const p_l_t = p_pre.add(cross_dir); // 左上
                    const p_l_b = p_pre.sub(cross_dir); // 左下

                    const uv_mul = 50;
                    let i_offset = vertices.x.length;
                    vertices.x.push(p_r_t.x, p_r_b.x, p_l_t.x, p_l_b.x);
                    vertices.y.push(p_r_t.y, p_r_b.y, p_l_t.y, p_l_b.y);
                    vertices.nu.push(p_r_t.x / uv_mul, p_r_b.x / uv_mul, p_l_t.x / uv_mul, p_l_b.x / uv_mul);
                    vertices.nv.push(p_r_t.y / uv_mul, p_r_b.y / uv_mul, p_l_t.y / uv_mul, p_l_b.y / uv_mul);

                    vertices.triangles.push(i_offset + 0);
                    vertices.triangles.push(i_offset + 1);
                    vertices.triangles.push(i_offset + 2);
                    vertices.triangles.push(i_offset + 1);
                    vertices.triangles.push(i_offset + 2);
                    vertices.triangles.push(i_offset + 3);

                    //画圆
                    const count = 12;
                    i_offset = vertices.x.length;
                    vertices.x.push(p.x);
                    vertices.y.push(p.y);
                    vertices.nu.push(p.x / uv_mul);
                    vertices.nv.push(p.y / uv_mul);
                    for (let index3 = 0; index3 < count; index3++) {
                        const r = 2 * Math.PI * index3 / count;
                        const pos_circle = cc.v2(w / 2 * Math.cos(r), w / 2 * Math.sin(r)).addSelf(p);
                        vertices.x.push(pos_circle.x);
                        vertices.y.push(pos_circle.y);
                        vertices.nu.push(pos_circle.x / uv_mul);
                        vertices.nv.push(pos_circle.y / uv_mul);
                        if (index3 === 0) {
                            vertices.triangles.push(i_offset, i_offset + 1 + index3, i_offset + count);
                        } else {
                            vertices.triangles.push(i_offset, i_offset + 1 + index3, i_offset + index3);
                        }
                    }
                }
            }
            // cc.log(vertices);
            this.sprite['setVertsDirty']();
            // this.graphics.stroke();
        } else {
            this.graphics.stroke();
        }
    }

    clear() {
        this.graphics.clear(true);
        if (cc.game.renderType === cc.game.RENDER_TYPE_WEBGL) {
            const vertices = this._vertices;
            vertices.x.length = vertices.y.length = vertices.nu.length = vertices.nv.length = vertices.triangles.length = 0;
            this.sprite['setVertsDirty']();
        }
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
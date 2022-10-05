// author: http://lamyoung.com/


const { ccclass, property, requireComponent } = cc._decorator;
@ccclass
@requireComponent(cc.Graphics)
export default class GraphicsSpriteMesh_rope extends cc.Component {

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
            const uv_mul = 1 / 50;

            let trianglesCache: number[][] = [];
            let offsetX = cc.v2(); // 记录每节长度
            for (let index = 0; index < _impl._paths.length; index++) {
                const path = _impl._paths[index];
                const pathPoints = path.points;
                // cc.log(index, path);
                if (pathPoints.length < 2) continue;
                for (let index2 = pathPoints.length - 1; index2 > 0; index2--) {
                    let triangles: number[] = [];
                    const p = cc.v2(pathPoints[index2].x, pathPoints[index2].y); // 当前点
                    const p_pre = cc.v2(pathPoints[index2 - 1].x, pathPoints[index2 - 1].y); //上一个点
                    const dir = p.sub(p_pre); //方向
                    const cross_dir = (dir.y == 0 ? cc.v2(0, 1) : cc.v2(1, -dir.x / dir.y).normalize()).mulSelf(w / 2); //垂直方向
                    const p_r_t = p.add(cross_dir); //右上
                    const p_r_b = p.sub(cross_dir); // 右下
                    const p_l_t = p_pre.add(cross_dir); // 左上
                    const p_l_b = p_pre.sub(cross_dir); // 左下

                    // 当前线段长度
                    const dirLen = dir.len();

                    // 画长方形
                    let i_offset = vertices.x.length;
                    vertices.x.push(p_r_t.x, p_r_b.x, p_l_t.x, p_l_b.x);
                    vertices.y.push(p_r_t.y, p_r_b.y, p_l_t.y, p_l_b.y);
                    // 计算长方形的uv
                    vertices.nu.push(offsetX.x * uv_mul, offsetX.x * uv_mul, (offsetX.x + dirLen) * uv_mul, (offsetX.x + dirLen) * uv_mul);
                    vertices.nv.push(1, 0, 1, 0);

                    triangles.push(i_offset + 0);
                    triangles.push(i_offset + 1);
                    triangles.push(i_offset + 2);
                    triangles.push(i_offset + 1);
                    triangles.push(i_offset + 2);
                    triangles.push(i_offset + 3);

                    //画圆
                    const dir_angle = dir.signAngle(cc.v2(-1, 0));//与x轴的负方向的夹角
                    const count = 12;
                    i_offset = vertices.x.length;
                    // 这里是圆心
                    vertices.x.push(p.x);
                    vertices.y.push(p.y);
                    vertices.nu.push(offsetX.x * uv_mul);
                    vertices.nv.push(0.5);
                    for (let index3 = 0; index3 < count; index3++) {
                        const r = 2 * Math.PI * index3 / count;
                        // 圆心到各个边的向量
                        const pos_circle = cc.v2(w / 2 * Math.cos(r), w / 2 * Math.sin(r));
                        vertices.x.push(pos_circle.add(p).x);
                        vertices.y.push(pos_circle.add(p).y);
                        // 对于圆的uv需要旋转
                        vertices.nu.push((pos_circle.rotate(dir_angle).x + offsetX.x) * uv_mul);
                        vertices.nv.push(pos_circle.rotate(dir_angle).y / w + 0.5);
                        if (index3 === 0) {
                            triangles.push(i_offset, i_offset + 1 + index3, i_offset + count);
                        } else {
                            triangles.push(i_offset, i_offset + 1 + index3, i_offset + index3);
                        }
                    }

                    trianglesCache.push(triangles);

                    offsetX.addSelf(cc.v2(dirLen, 0)); // 记录已经画的长度长度

                }
            }
            trianglesCache.reverse(); // 顶点索引反转
            trianglesCache.forEach(v => {
                // 真正的顶点索引顺序
                vertices.triangles.push(...v)
            })
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

/**
 * 
 * 
前置教程: 
[初探精灵中的网格渲染模式 ！](https://mp.weixin.qq.com/s/2FcixeoV-Fg-7OodILECeg)  
图文:  
part-1:  https://mp.weixin.qq.com/s/ozXjdpyid5f2Xwo7uo0MuQ    
part-2:  https://mp.weixin.qq.com/s/xniwz-a_FI0snWqqPd2NOg    
 */

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
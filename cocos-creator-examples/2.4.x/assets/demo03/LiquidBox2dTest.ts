
// author: http://lamyoung.com/
const { ccclass, property } = cc._decorator;

// https://mp.weixin.qq.com/s/T-xkgkLonYqA_4yqPIYLSg
let particleSystem;
const PTM_RATIO = cc.PhysicsManager.PTM_RATIO;
const PSD_RADIUS = 2;

const gfx = cc['gfx'];

@ccclass
export default class LiquidBox2dTest extends cc.Component {


    @property(cc.MeshRenderer)
    meshRenderer: cc.MeshRenderer = null;

    @property(cc.SpriteFrame)
    spriteFrame: cc.SpriteFrame = null;

    onLoad() {
        const phyMgr = cc.director.getPhysicsManager();
        phyMgr.enabled = true;
        phyMgr.debugDrawFlags = 7;

        let spriteFrame = this.spriteFrame;
        if (spriteFrame) {
            let newTexture = spriteFrame.getTexture();
            if (newTexture && newTexture.loaded) {
                this.onSpriteFrameLoaded();
            } else {
                spriteFrame.once('load', this.onSpriteFrameLoaded, this);
            }
        }
    }


    onSpriteFrameLoaded() {
        const texture = this.spriteFrame.getTexture();
        this.meshRenderer.node.width = texture.width;
        this.meshRenderer.node.height = texture.height;


        const phyMgr = cc.director.getPhysicsManager();
        const world = phyMgr['_world'];
        const psd = new b2.ParticleSystemDef();
        psd.radius = PSD_RADIUS / PTM_RATIO; //每个粒子的半径
        // psd.dampingStrength = 0.2;//阻尼
        psd.elasticStrength = 0.5;
        particleSystem = world.CreateParticleSystem(psd);
        // particleSystem.SetGravityScale(0.4);//重力比例
        // particleSystem.SetDensity(1);//粒子的密度


        // cc.log('third group');
        // third group
        const box = new b2.PolygonShape();
        const pgd = new b2.ParticleGroupDef();
        box.SetAsBox(this.meshRenderer.node.width / 2 / PTM_RATIO, this.meshRenderer.node.height / 2 / PTM_RATIO);
        pgd.flags = b2.ParticleFlag.b2_elasticParticle;
        pgd.groupFlags = b2.ParticleGroupFlag.b2_solidParticleGroup;
        const pos = this.meshRenderer.node.convertToWorldSpaceAR(cc.Vec2.ZERO).divSelf(PTM_RATIO);
        pgd.position.Set(pos.x, pos.y);
        // pgd.angle = -0.5;
        pgd.angularVelocity = Math.random() - 0.5;
        pgd.shape = box;
        // pgd.color.Set(0, 0, 255, 255);
        const particleGroup = particleSystem.CreateParticleGroup(pgd);


        // cc.log('third pgd', pgd);
        // cc.log('third particleGroup', particleGroup);

        let particleCount = particleSystem.GetParticleCount();
        // cc.log('particleCount', particleCount);
        let posBuff = particleSystem.GetPositionBuffer();
        // cc.log('posBuff', posBuff);
        // cc.log('particleSystem', particleSystem);

        const mesh = new cc.Mesh();
        mesh.init(new gfx.VertexFormat([
            { name: gfx.ATTR_POSITION, type: gfx.ATTR_TYPE_FLOAT32, num: 2 },
            { name: gfx.ATTR_UV0, type: gfx.ATTR_TYPE_FLOAT32, num: 2 },
        ]), particleCount, true);

        const material = this.meshRenderer.getMaterial(0);
        const uv = this.spriteFrame.uv;
        /**
         *    t
         * l     r
         *    b
         */
        const uv_l = uv[0];
        const uv_r = uv[6];
        const uv_b = uv[3];
        const uv_t = uv[5];

        material.setProperty('texture', texture);
        material.setProperty('u_pointSize', PSD_RADIUS * 2);

        const vertexes = [];
        const ids = [];
        const uvs = [];

        for (let i = 0; i < particleCount; ++i) {
            const x = posBuff[i].x * PTM_RATIO;
            const y = posBuff[i].y * PTM_RATIO;
            const pt = this.meshRenderer.node.convertToNodeSpaceAR(cc.v2(x, y));
            vertexes.push(pt);

            const u = this._lerp(uv_l, uv_r, (pt.x + texture.width / 2) / texture.width);
            const v = this._lerp(uv_b, uv_t, (pt.y + texture.height / 2) / texture.height);
            uvs.push(cc.v2(u, v));

            const indexOffset = i;
            ids.push(indexOffset);
        }
        mesh.setVertices(gfx.ATTR_POSITION, vertexes);
        mesh.setVertices(gfx.ATTR_UV0, uvs);
        mesh.setPrimitiveType(gfx.PT_POINTS, 0);
        mesh.setIndices(ids);

        this.meshRenderer.mesh = mesh;


        cc.log('this.meshRenderer', this.meshRenderer);
        cc.log('vertexes', vertexes);
        cc.log('uvs', uvs);
        cc.log('ids', ids);

    }

    private _lerp(a: number, b: number, w: number) {
        return a + w * (b - a);
    }

    lateUpdate() {
        if (!particleSystem) return;
        let particleCount = particleSystem.GetParticleCount();
        let posBuff = particleSystem.GetPositionBuffer();

        const vertexes = [];

        // this.graphics.clear();
        for (let i = 0; i < particleCount; ++i) {
            const x = posBuff[i].x * PTM_RATIO;
            const y = posBuff[i].y * PTM_RATIO;
            const pt = this.meshRenderer.node.convertToNodeSpaceAR(cc.v2(x, y));
            vertexes.push(pt);
            // vertexes.push(cc.v2(x, y));
            // const p2 = this.graphics.node.parent.convertToNodeSpaceAR(cc.v2(x, y))
            // this.graphics.circle(p2.x, p2.y, PSD_RADIUS);

        }
        this.meshRenderer.mesh.setVertices(gfx.ATTR_POSITION, vertexes);
        this.meshRenderer.markForRender(true);
        // this.graphics.fill();
    }

    onDestroy() {
        cc.log('onDestroy');
        const phyMgr = cc.director.getPhysicsManager();
        const world = phyMgr['_world'];
        world.DestroyParticleSystem(particleSystem);
        particleSystem = null;
    }
}




/*
https://mp.weixin.qq.com/s/Ht0kIbaeBEds_wUeUlu8JQ

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

import { _decorator, Component, Sprite, systemEvent, SystemEventType, v4, v2, v3, EventMouse, Vec3, UITransform, resources, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

//临时变量，避免过度创建
const temp_v2 = v2()
const temp_v3 = v3()

@ccclass('Fake3dTest')
export class Fake3dTest extends Component {
    @property(Sprite)
    sprite: Sprite = null!;

    private _params = v4();
    private _targetMouse = v2();
    private _uiTrans: UITransform = null!

    private _spriteFrames: SpriteFrame[] = [];
    private _spriteFrames_map: { [key: string]: SpriteFrame } = {};

    start() {
        resources.loadDir("fake3d/sprite-frame", SpriteFrame, (err, assets) => {
            if (err || !assets || assets.length < 1) return;
            let index = 0;
            // console.log('assets', assets);
            for (let index = 0; index < assets.length; index++) {
                const asset = assets[index];
                if (asset.name.split('-')[1] === 'map') {
                    this._spriteFrames_map[asset.name] = asset;
                } else {
                    this._spriteFrames.push(asset);
                }
            }
            systemEvent.on(SystemEventType.TOUCH_END, () => {
                const sp = this._spriteFrames[index];
                const map = this._spriteFrames_map[sp.name + '-map']
                if (map) {
                    this.sprite.spriteFrame = sp;
                    this.sprite.getMaterial(0)!.setProperty('depthTexture', map.texture);
                    this._params.z = sp.width / 50;
                    this._params.w = sp.height / 50;
                }
                index = ((index + 1) % this._spriteFrames.length);
            }, this);
        });
        this._uiTrans = this.sprite.getComponent(UITransform)!;
        systemEvent.on(SystemEventType.MOUSE_MOVE, this.onMouseMove, this);
        // threshold --> params.zw
        this._params.z = this._uiTrans.width / 50;
        this._params.w = this._uiTrans.height / 50;
    }

    onDestroy() {
        systemEvent.targetOff(this);
    }

    private onMouseMove(evt: EventMouse) {
        // 坐标转换
        const location = evt.getUILocation(temp_v2);
        const worldLocation = Vec3.set(temp_v3, location.x, location.y, 0);
        const spriteLocation = this._uiTrans.convertToNodeSpaceAR(worldLocation, temp_v3);
        // uMouse   --> params.xy
        this._targetMouse.x = spriteLocation.x / this._uiTrans.width;
        this._targetMouse.y = spriteLocation.y / this._uiTrans.height;
    }

    update() {
        // inertia
        this._params.x += (this._targetMouse.x - this._params.x) * 0.05;
        this._params.y += (this._targetMouse.y - this._params.y) * 0.05;
        // 设置 uniform
        this.sprite.getMaterial(0)?.setProperty('mouseAndThreshold', this._params);
    }


    onLoad() {
        console.warn(`
        欢迎关注微信公众号  白玉无冰 

        导航：https://mp.weixin.qq.com/s/Ht0kIbaeBEds_wUeUlu8JQ
        `)
        console.info(
            `
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
            `
        )
    }
}


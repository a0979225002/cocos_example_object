
import { _decorator, Component, Node, Sprite, systemEvent, SystemEventType, EventMouse, v4, UITransform, v2, v3, Vec3, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

//临时变量，避免过度创建
const temp_v2 = v2()
const temp_v3 = v3()

@ccclass('HoverSpriteTest')
export class HoverSpriteTest extends Component {
    @property(Sprite)
    sprite: Sprite = null!;

    private _params = v4()
    private _uiTrans: UITransform = null!
    start() {
        this._uiTrans = this.sprite.getComponent(UITransform)!;
        systemEvent.on(SystemEventType.MOUSE_MOVE, this.onMouseMove, this);
        // resolution --> params.zw
        this._params.z = 1;
        this._params.w = this._uiTrans.height / this._uiTrans.width;
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
        this._params.x = spriteLocation.x / this._uiTrans.width + this._uiTrans.anchorX;
        this._params.y = 1 - (spriteLocation.y / this._uiTrans.height + this._uiTrans.anchorX);
        // 设置 uniform
        this.sprite.getMaterial(0)?.setProperty('params', this._params);
    }

    @property([SpriteFrame])
    spfs: SpriteFrame[] = [];
    private _index = 0
    private onSwitchSpriteFrame() {
        this._index = (this._index + 1) % this.spfs.length;
        this.sprite.spriteFrame = this.spfs[this._index];
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



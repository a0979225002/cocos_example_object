
import { _decorator, Component, Node, resources, Texture2D, sys, systemEvent, SystemEventType, MeshRenderer } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MatcapTest')
export class MatcapTest extends Component {

    @property([Node])
    model_node: Node[] = []

    private _textures2d: Texture2D[] = []

    start() {
        resources.loadDir("matcap/texture", Texture2D, (err, assets) => {
            this._textures2d = assets;
            let index = 0;
            console.log('assets', assets);
            systemEvent.on(SystemEventType.TOUCH_END, () => {
                this.model_node[0].getComponent(MeshRenderer)!.getMaterial(0)?.setProperty('mainTexture', this._textures2d[index], 0);
                index = ((index + 1) % this._textures2d.length);
            }, this);
        });
    }

    onDestroy() {
        systemEvent.targetOff(this);
    }

    update() {
        this.model_node.forEach(n => {
            n.eulerAngles = n.eulerAngles.add3f(0, 1, 0);
        })
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



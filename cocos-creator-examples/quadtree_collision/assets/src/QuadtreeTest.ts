// author: http://lamyoung.com/

import QuadtreeCollision from "./QuadtreeCollision";

const { ccclass, property } = cc._decorator;

@ccclass
export default class QuadtreeTest extends cc.Component {
    @property(cc.Collider)
    collider_role: cc.Collider = null;

    @property(cc.Node)
    all_collider_parent: cc.Node = null;

    private _all_collider: cc.Collider[] = [];

    private _quadCollision: QuadtreeCollision;

    onLoad() {
        this._all_collider = this.all_collider_parent.getComponentsInChildren(cc.Collider);
        // 这边是挂载在canvas下的脚本，用canvas的rect初始化创建。
        this._quadCollision = new QuadtreeCollision(this.node.getBoundingBoxToWorld());
    }

    start() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    private onTouchMove(evt: cc.Touch) {
        const pos = this.collider_role.node.parent.convertToNodeSpaceAR(evt.getLocation());
        this.collider_role.node.x = pos.x;
        this.collider_role.node.y = pos.y;
    }

    lateUpdate() {
        const { retrieve, contacts } = this._quadCollision.check(this._all_collider, this.collider_role);
        // retrieve 准备测试的对象(预览图中的绿色)   cc.Collider[]
        // contacts 碰撞对象(预览图中的红色)   cc.Collider[]
        this._all_collider.forEach(c => c.node.color = cc.Color.WHITE);
        retrieve.forEach(c => c.node.color = cc.Color.GREEN);
        contacts.forEach(c => c.node.color = cc.Color.RED);
    }
}

/*

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
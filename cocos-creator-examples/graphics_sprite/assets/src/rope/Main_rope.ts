// author: http://lamyoung.com/


let handler_pool: handler[] = [];

//用于绑定回调函数this指针
class handler {
    private cb: Function;
    private host: any;
    private args: any[];

    constructor() { }

    init(cb: Function, host = null, ...args) {
        this.cb = cb;
        this.host = host;
        this.args = args;
    }

    exec(...extras) {
        this.cb.apply(this.host, this.args.concat(extras));
    }
}

function gen_handler(cb: Function, host: any = null, ...args: any[]): handler {
    let single_handler: handler = new handler();
    //这里要展开args, 否则会将args当数组传给wrapper, 导致其args参数变成2维数组[[]]
    single_handler.init(cb, host, ...args);
    handler_pool.push(single_handler);
    return single_handler;
}

import GraphicsSpriteMesh_rope from "./GraphicsSpriteMesh_rope";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    @property(GraphicsSpriteMesh_rope)
    graphicsSpriteMesh: GraphicsSpriteMesh_rope = null;

    start() {
        cc.macro.ENABLE_MULTI_TOUCH = false;

        this.graphicsSpriteMesh.node.on(cc.Node.EventType.TOUCH_START, this._touchStart, this);
        this.graphicsSpriteMesh.node.on(cc.Node.EventType.TOUCH_MOVE, this._touchMove, this);
        this.graphicsSpriteMesh.node.on(cc.Node.EventType.TOUCH_END, this._touchEnd, this);
        this.graphicsSpriteMesh.node.on(cc.Node.EventType.TOUCH_CANCEL, this._touchEnd, this);
        this.reset();
    }

    private _touchStart(touch: cc.Touch) {
        // const pos = this.graphicsSpriteMesh.node.convertToNodeSpaceAR(touch.getLocation());
        // gen_handler(this.graphicsSpriteMesh.graphics.moveTo, this.graphicsSpriteMesh.graphics, pos.x, pos.y);
    }

    private _touchMove(touch: cc.Touch) {
        const pos = this.graphicsSpriteMesh.node.convertToNodeSpaceAR(touch.getLocation());
        this.executeCommands();
        this.graphicsSpriteMesh.graphics.lineTo(pos.x, pos.y);
        this.graphicsSpriteMesh.stroke();
    }

    private _touchEnd(touch: cc.Touch) {
        const pos = this.graphicsSpriteMesh.node.convertToNodeSpaceAR(touch.getLocation());
        gen_handler(this.graphicsSpriteMesh.graphics.lineTo, this.graphicsSpriteMesh.graphics, pos.x, pos.y);
    }

    private reset() {
        handler_pool.length = 0;
        gen_handler(this.graphicsSpriteMesh.clear, this.graphicsSpriteMesh);
        gen_handler(this.graphicsSpriteMesh.graphics.moveTo, this.graphicsSpriteMesh.graphics, 0, 0);
        this.executeCommands();
        // this.graphicsSpriteMesh.graphics.moveTo(0, 0);
        this.graphicsSpriteMesh.graphics.quadraticCurveTo(100, 200, 200, 0);
        this.graphicsSpriteMesh.graphics.quadraticCurveTo(200, -200, 0, -200);
        this.graphicsSpriteMesh.graphics.quadraticCurveTo(-200, -200, -200, 0);
        this.graphicsSpriteMesh.graphics.quadraticCurveTo(-100, 200, 0, 0);
        this.graphicsSpriteMesh.stroke();
    }

    private executeCommands() {
        handler_pool.forEach((v) => {
            v.exec();
        })
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
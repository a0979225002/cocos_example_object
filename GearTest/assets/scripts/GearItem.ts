// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class GearItem extends cc.Component {

    @property
    num: number = 8;

    @property
    radius: number = 112 / 2;

    @property
    velocity: number = 0;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    update(dt: number) {
        if (this.velocity != 0) {
            this.node.angle += this.velocity;
        }
    }
}

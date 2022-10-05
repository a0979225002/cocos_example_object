// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GearItem from './GearItem'

const { ccclass, property } = cc._decorator;

@ccclass
export default class GearManager extends cc.Component {

    start() {
        //这里仅按节点顺序依次传递，用于演示齿轮对齐。
        //实际项目应根据距离与半径来判断是否接触，
        //再以有动力的齿轮为根节点生成节点树，依次传递。
        let gearItems = this.getComponentsInChildren(GearItem);
        let pos1 = new cc.Vec2();
        let pos2 = new cc.Vec2();
        for (let i = 1; i < gearItems.length; ++i) {
            let prev = gearItems[i - 1];
            let cur = gearItems[i];
            prev.node.getPosition(pos1);
            cur.node.getPosition(pos2);
            //齿轮2相对齿轮1位置的角度
            let angle = cc.misc.radiansToDegrees(Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x));
            //齿轮1从0度转至与齿轮2相切，经过的角度
            let angle2 = angle - (prev.node.angle % 360);
            //齿轮1旋转整数齿后，接近相切，又转动f齿（0到1），才正式与齿轮2相切
            let f = (angle2 / (360 / prev.num)) % 1;
            //齿轮2的0度位置旋转至与齿轮1相切（angle+180度）后，再转动0.5齿（使凹凸相对），再转动f
            let angle3 = angle + 180 + (360 / cur.num) * (0.5 + f);
            cur.node.angle = angle3;
            //齿轮2速度与齿轮1速度，与它们的齿轮数成反比
            cur.velocity = -prev.velocity * prev.num / cur.num;
        }
    }

    // update (dt) {}
}

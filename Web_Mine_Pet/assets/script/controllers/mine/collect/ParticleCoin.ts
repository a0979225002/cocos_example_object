import UIBase from "../../ui/UIBase";
import AssetsMng from "../../../manager/AssetsMng";

const {ccclass} = cc._decorator;

@ccclass
export default class ParticleCoin extends UIBase {

    node_coin_container: cc.Node;
    node_icon_gold: cc.Node;
    node_icon_sliver: cc.Node;

    goldCoinPrefab: cc.Prefab;
    sliverCoinPrefab: cc.Prefab;

    centerPos: cc.Vec2 = cc.v2(0, 0);

    sprayRange: number = 270;
    sprayRangeMin: number = 60;
    scaleVal: number = .6;

    _callBack;

    onUILoad(): void {

        this.node_coin_container = this.node.getChildByName("container");
        this.node_icon_gold = this.node.getChildByName("icon_gold");
        this.node_icon_sliver = this.node.getChildByName("icon_sliver");

        this.goldCoinPrefab = AssetsMng.getAssets("coin_gold_prefab");
        this.sliverCoinPrefab = AssetsMng.getAssets("coin_sliver_prefab");

    }

    createCoins(centerPoint: cc.Vec2, goldCount: number, sliverCount: number, callBack?): void {

        this.centerPos = centerPoint;


        this.createCoinNode(1, goldCount);
        this.createCoinNode(0, sliverCount);

        const timer = setTimeout(() => {
            if (callBack) callBack()
            clearTimeout(timer);
        }, 1000);


    }

    createCoinNode(type: number, count: number): void {

        for (let i = 0; i < count; i++) {

            let prefab = type == 0 ? this.sliverCoinPrefab : this.goldCoinPrefab;

            let coinNode = cc.instantiate(prefab);

            let targetPos = this.getExplosionTargetPos();

            coinNode.angle = Math.random() * 360;
            coinNode.setPosition(this.centerPos);
            coinNode.setScale(this.scaleVal);

            this.node_coin_container.addChild(coinNode);


            this.explosionAniPlay(coinNode, targetPos, type);

        }

    }

    coinIconJump(node): void {

        node.runAction(cc.sequence(
            cc.scaleTo(.08, 1.3).easing(cc.easeSineOut()),
            cc.scaleTo(.06, 1),
        ));
    }

    explosionAniPlay(node: cc.Node, targetPos: cc.Vec2, type: number): void {

        let walletPos = type == 0 ? this.node_icon_sliver.position : this.node_icon_gold.position;
        let ani = node.children[0].getComponent(cc.Animation);
        let x = targetPos.x + node.x;
        let y = targetPos.y + node.y;
        ani.play();

        node.runAction(cc.sequence(
            cc.moveTo(.3, x, y).easing(cc.easeCubicActionOut()),
            cc.delayTime(Math.random()),
            cc.callFunc(() => {
                ani.stop();
            }),
            cc.moveTo(.8, walletPos.x, walletPos.y).easing(cc.easeInOut(3.0)),
            cc.callFunc(() => {
                node.destroy();
                this.coinIconJump(type == 0 ? this.node_icon_sliver : this.node_icon_gold);
            })
        ));

    }

    getExplosionTargetPos(): cc.Vec2 {
        const theta = Math.random() * Math.PI * 2
        let r = Math.random() * this.sprayRange + this.sprayRangeMin;
        let x = r * Math.cos(theta);
        let y = r * Math.sin(theta);
        return cc.v2(x, y);
    }


}

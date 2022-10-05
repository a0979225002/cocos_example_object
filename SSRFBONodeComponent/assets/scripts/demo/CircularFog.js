// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        fbo: cc.Node,
        spine: cc.Node,
        dragon: cc.Node,
    },
    onLoad () {
        cc.debug.setDisplayStats(true);
    },

    start () {
        cc.tween(this.spine)
            .by(15, { position: cc.v2(900, 0) })
            .start();

        cc.tween(this.dragon)
            .by(20, { position: cc.v2(1100, 0) })
            .start();
    },
    update (dt) {
        this.fbo.getComponent(cc.Sprite).getMaterial(0).setProperty("Pos", [(this.spine.x + this.fbo.width / 2) / this.fbo.width, (this.spine.y + this.fbo.height / 2) / cc.winSize.height]);
    },
});

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
    },
    onLoad () {
        cc.debug.setDisplayStats(true);
    },

    start () {
        cc.tween(this.fbo)
            .by(25, { position: cc.v2(-900, 0) })
            .start();
    },
    update (dt) {
    },
});

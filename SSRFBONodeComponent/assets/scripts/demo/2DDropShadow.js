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
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.debug.setDisplayStats(true);
    },

    start () {
        // cc.debug.setDisplayStats(true);
        // let self = this;
        // this.schedule(function() {
        //     self.fbo.getComponent("FBONodeCaptureComponent").capture("666");
        // }, 0.1);

        cc.tween(this.spine)
            .by(15, { position: cc.v2(900, 0) })
            .start();

        cc.tween(this.dragon)
            .by(20, { position: cc.v2(1100, 0) })
            .start();
    },
    update (dt) {
        // this.fbo.getComponent("FBONodeCaptureComponent").capture("666");
    },
});


cc.Class({
    extends: cc.Component,

    properties: {
        fow: cc.Node
    },

    onLoad () {
        cc.debug.setDisplayStats(true);
    },

    start () {
        let self = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            var touches = event.getTouches();
            var touchLoc = touches[0].getLocation();
            self.fow.getComponent("SSRFoWComponent").updateFog(self.fow.convertToNodeSpaceAR(touchLoc));
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var touches = event.getTouches();
            var touchLoc = touches[0].getLocation();
            self.fow.getComponent("SSRFoWComponent").updateFog(self.fow.convertToNodeSpaceAR(touchLoc));
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            var touches = event.getTouches();
            var touchLoc = touches[0].getLocation();
            self.fow.getComponent("SSRFoWComponent").updateFog(self.fow.convertToNodeSpaceAR(touchLoc));
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
        }, this);
    }
});

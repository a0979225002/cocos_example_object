"use strict";
cc._RF.push(module, '894c5cmPJdKjY/iavFrHK6D', 'FoWTest');
// scripts/demo/FoWTest.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    fow: cc.Node
  },
  onLoad: function onLoad() {
    cc.debug.setDisplayStats(true);
  },
  start: function start() {
    var self = this;
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
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {}, this);
  }
});

cc._RF.pop();
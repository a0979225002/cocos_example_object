"use strict";
cc._RF.push(module, '7ee86AiUblJ7oGG5vTJ80/p', 'NightVision');
// scripts/demo/NightVision.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    spine: cc.Node,
    dragon: cc.Node,
    binocular: cc.Node // foo: {
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
  onLoad: function onLoad() {
    cc.debug.setDisplayStats(true);
  },
  start: function start() {
    cc.tween(this.spine).by(15, {
      position: cc.v2(900, 0)
    }).start();
    cc.tween(this.dragon).by(20, {
      position: cc.v2(1100, 0)
    }).start();
    var self = this; // this.node.on(cc.Node.EventType.TOUCH_START, this._touchStartCallback, this);

    this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      var canvas = cc.find("Canvas");
      var location = canvas.convertToNodeSpaceAR(event.touch.getLocation());
      self.binocular.position = location;
    }, this); // this.node.on(cc.Node.EventType.TOUCH_END, this._touchEndCallback, this);
    // this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._touchCancelCallback, this);
  }
});

cc._RF.pop();
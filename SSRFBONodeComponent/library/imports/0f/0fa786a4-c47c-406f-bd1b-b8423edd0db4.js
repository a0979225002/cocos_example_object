"use strict";
cc._RF.push(module, '0fa78akxHxAb70buEI+3Q20', 'Cyberpunk.fire');
// scripts/demo/Cyberpunk.fire.js

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
    fbo: cc.Node
  },
  onLoad: function onLoad() {
    cc.debug.setDisplayStats(true);
  },
  start: function start() {
    cc.tween(this.fbo).by(25, {
      position: cc.v2(-900, 0)
    }).start();
  },
  update: function update(dt) {}
});

cc._RF.pop();
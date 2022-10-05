"use strict";
cc._RF.push(module, '93940/npztBHaSlyWKo4C4y', 'SnowCover');
// scripts/demo/SnowCover.js

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
    fbo: cc.Node,
    fbo2: cc.Node,
    fbo3: cc.Node,
    spine: cc.Node,
    dragon: cc.Node,
    snow: cc.ParticleSystem
  },
  onLoad: function onLoad() {
    cc.debug.setDisplayStats(true);
    this.time = 0;
    this.melting = false;
  },
  start: function start() {
    cc.tween(this.spine).by(25, {
      position: cc.v2(900, 0)
    }).start();
    cc.tween(this.dragon).by(30, {
      position: cc.v2(1100, 0)
    }).start();
  },
  update: function update(dt) {
    if (this.melting) {
      var edge = this.fbo.getComponent(cc.Sprite).getMaterial(0).getProperty("Edge");

      if (edge >= 0.0) {
        edge -= dt / 30;
        this.fbo.getComponent(cc.Sprite).getMaterial(0).setProperty("Edge", edge);
        this.fbo2.getComponent(cc.Sprite).getMaterial(0).setProperty("Edge", edge);
        this.fbo3.getComponent(cc.Sprite).getMaterial(0).setProperty("Edge", edge);
        this.spine.getComponent(sp.Skeleton).getMaterial(0).setProperty("Edge", edge);
        this.dragon.getComponent(dragonBones.ArmatureDisplay).getMaterial(0).setProperty("Edge", edge);
      }
    } else {
      this.time += dt / 40;

      if (this.fbo.getComponent(cc.Sprite).getMaterial(0).getProperty("Edge") < 0.35) {
        this.fbo.getComponent(cc.Sprite).getMaterial(0).setProperty("Edge", this.time);
        this.fbo2.getComponent(cc.Sprite).getMaterial(0).setProperty("Edge", this.time);
        this.fbo3.getComponent(cc.Sprite).getMaterial(0).setProperty("Edge", this.time);
        this.spine.getComponent(sp.Skeleton).getMaterial(0).setProperty("Edge", this.time);
        this.dragon.getComponent(dragonBones.ArmatureDisplay).getMaterial(0).setProperty("Edge", this.time);
      } else {
        this.melting = true;
        this.time = 0;
        this.snow.stopSystem();
      }
    }
  }
});

cc._RF.pop();
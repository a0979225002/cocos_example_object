"use strict";
cc._RF.push(module, 'cb92dR/FtVI558n2xXaixEz', 'propeller');
// src/propeller.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        rotateSpeed: 360
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        this.angles = cc.v3();
    },
    update: function update(dt) {
        this.angles.x += this.rotateSpeed * dt;
        this.node.eulerAngles = this.angles;
    }
});

cc._RF.pop();
(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/propeller.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'cb92dR/FtVI558n2xXaixEz', 'propeller', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=propeller.js.map
        
(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/primitive/sphere.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ce4b6wXjklDp5eO/hh8VSzY', 'sphere', __filename);
// src/primitive/sphere.js

'use strict';

var Primitive = require('./primitive');

cc.Class({
    extends: Primitive,

    properties: {
        radius: {
            default: 25,
            notify: function notify() {
                this.delayInit();
            }
        },

        segments: {
            default: 32,
            notify: function notify() {
                this.delayInit();
            }
        }
    },

    _createData: function _createData() {
        return cc.primitive.sphere(this.radius, { segments: this.segments });
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
        //# sourceMappingURL=sphere.js.map
        
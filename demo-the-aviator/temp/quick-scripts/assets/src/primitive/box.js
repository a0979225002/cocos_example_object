(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/primitive/box.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a70270Fvd9Mn66Upk302M+8', 'box', __filename);
// src/primitive/box.js

'use strict';

var Primitive = require('./primitive');

cc.Class({
    extends: Primitive,

    properties: {
        width: {
            default: 100,
            notify: function notify() {
                this.delayInit();
            }
        },
        height: {
            default: 100,
            notify: function notify() {
                this.delayInit();
            }
        },
        length: {
            default: 100,
            notify: function notify() {
                this.delayInit();
            }
        }
    },
    _createData: function _createData() {
        return cc.primitive.box(this.width, this.height, this.length);
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
        //# sourceMappingURL=box.js.map
        
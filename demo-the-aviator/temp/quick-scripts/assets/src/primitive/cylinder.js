(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/src/primitive/cylinder.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '44dc5bGoJVG973D/qrBQr94', 'cylinder', __filename);
// src/primitive/cylinder.js

'use strict';

var Primitive = require('./primitive');

cc.Class({
    extends: Primitive,

    properties: {
        radiusTop: {
            default: 30,
            notify: function notify() {
                this.delayInit();
            }
        },
        radiusBottom: {
            default: 30,
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
        radialSegments: {
            default: 32,
            notify: function notify() {
                this.delayInit();
            }
        },
        heightSegments: {
            default: 1,
            notify: function notify() {
                this.delayInit();
            }
        }
    },
    _createData: function _createData() {
        return cc.primitive.cylinder(this.radiusTop, this.radiusBottom, this.height, {
            radialSegments: this.radialSegments,
            heightSegments: this.heightSegments
        });
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
        //# sourceMappingURL=cylinder.js.map
        
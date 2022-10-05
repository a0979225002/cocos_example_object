"use strict";
cc._RF.push(module, '44dc5bGoJVG973D/qrBQr94', 'cylinder');
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
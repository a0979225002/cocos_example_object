"use strict";
cc._RF.push(module, 'a70270Fvd9Mn66Upk302M+8', 'box');
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
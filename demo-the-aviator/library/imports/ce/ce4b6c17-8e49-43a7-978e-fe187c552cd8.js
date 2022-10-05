"use strict";
cc._RF.push(module, 'ce4b6wXjklDp5eO/hh8VSzY', 'sphere');
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
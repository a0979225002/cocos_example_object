
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/TransferFrag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '88622uEk39JO7YhDjslLjae', 'TransferFrag');
// Script/TransferFrag.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Transfer = /** @class */ (function () {
    function Transfer() {
    }
    Transfer.vert = "\n    attribute vec4 a_position;\n    attribute vec2 a_texCoord;\n    attribute vec4 a_color;\n    varying vec2 v_texCoord; \n    varying vec4 v_fragmentColor; \n    void main() \n    { \n        gl_Position = CC_PMatrix * a_position;\n        v_fragmentColor = a_color; \n        v_texCoord = a_texCoord; \n    }\n    ";
    Transfer.frag = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    \n    uniform float time;\n\n    varying vec4 v_fragmentColor;\n    varying vec2 v_texCoord;\n    void main()\n    {\n        vec4 c = v_fragmentColor * texture2D(CC_Texture0, v_texCoord);\n        gl_FragColor = c;\n\n        float temp = v_texCoord.x - time;\n        if (temp <= 0.0) {\n            float temp2 = abs(temp);\n            if (temp2 <= 0.2) {\n                gl_FragColor.w = 1.0 - temp2/0.2;\n            } else {\n                gl_FragColor.w = 0.0;\n            }\n        } else {\n            gl_FragColor.w = 1.0;\n        }\n    }\n    ";
    return Transfer;
}());
exports.default = Transfer;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUcmFuc2ZlckZyYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBMENBLENBQUM7SUF6Q1UsYUFBSSxHQUFFLGlVQVlaLENBQUM7SUFFSyxhQUFJLEdBQUMsb25CQTBCWCxDQUFDO0lBQ04sZUFBQztDQTFDRCxBQTBDQyxJQUFBO2tCQTFDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zZmVyIHtcclxuICAgIHN0YXRpYyB2ZXJ0ID1gXHJcbiAgICBhdHRyaWJ1dGUgdmVjNCBhX3Bvc2l0aW9uO1xyXG4gICAgYXR0cmlidXRlIHZlYzIgYV90ZXhDb29yZDtcclxuICAgIGF0dHJpYnV0ZSB2ZWM0IGFfY29sb3I7XHJcbiAgICB2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDsgXHJcbiAgICB2YXJ5aW5nIHZlYzQgdl9mcmFnbWVudENvbG9yOyBcclxuICAgIHZvaWQgbWFpbigpIFxyXG4gICAgeyBcclxuICAgICAgICBnbF9Qb3NpdGlvbiA9IENDX1BNYXRyaXggKiBhX3Bvc2l0aW9uO1xyXG4gICAgICAgIHZfZnJhZ21lbnRDb2xvciA9IGFfY29sb3I7IFxyXG4gICAgICAgIHZfdGV4Q29vcmQgPSBhX3RleENvb3JkOyBcclxuICAgIH1cclxuICAgIGA7XHJcbiAgICBcclxuICAgIHN0YXRpYyBmcmFnPWBcclxuICAgICNpZmRlZiBHTF9FU1xyXG4gICAgcHJlY2lzaW9uIGxvd3AgZmxvYXQ7XHJcbiAgICAjZW5kaWZcclxuICAgIFxyXG4gICAgdW5pZm9ybSBmbG9hdCB0aW1lO1xyXG5cclxuICAgIHZhcnlpbmcgdmVjNCB2X2ZyYWdtZW50Q29sb3I7XHJcbiAgICB2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxuICAgIHZvaWQgbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgdmVjNCBjID0gdl9mcmFnbWVudENvbG9yICogdGV4dHVyZTJEKENDX1RleHR1cmUwLCB2X3RleENvb3JkKTtcclxuICAgICAgICBnbF9GcmFnQ29sb3IgPSBjO1xyXG5cclxuICAgICAgICBmbG9hdCB0ZW1wID0gdl90ZXhDb29yZC54IC0gdGltZTtcclxuICAgICAgICBpZiAodGVtcCA8PSAwLjApIHtcclxuICAgICAgICAgICAgZmxvYXQgdGVtcDIgPSBhYnModGVtcCk7XHJcbiAgICAgICAgICAgIGlmICh0ZW1wMiA8PSAwLjIpIHtcclxuICAgICAgICAgICAgICAgIGdsX0ZyYWdDb2xvci53ID0gMS4wIC0gdGVtcDIvMC4yO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yLncgPSAwLjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnbF9GcmFnQ29sb3IudyA9IDEuMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBgO1xyXG59Il19
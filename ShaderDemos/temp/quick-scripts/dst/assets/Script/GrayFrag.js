
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GrayFrag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4bdbfnUGoRGuZRGr52jBbJu', 'GrayFrag');
// Script/GrayFrag.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GrayFrag = /** @class */ (function () {
    function GrayFrag() {
    }
    GrayFrag.default_vert = "\n    attribute vec4 a_position;\n    attribute vec2 a_texCoord;\n    attribute vec4 a_color;\n    varying vec2 v_texCoord;\n    varying vec4 v_fragmentColor;\n    void main()\n    {\n        gl_Position = CC_PMatrix * a_position;\n        v_fragmentColor = a_color;\n        v_texCoord = a_texCoord;\n    }\n    ";
    GrayFrag.gray_frag = "\n    #ifdef GL_ES\n    precision mediump float;\n    #endif\n    varying vec4 v_fragmentColor;\n    varying vec2 v_texCoord;\n    void main()\n    {\n        vec4 c = v_fragmentColor * texture2D(CC_Texture0, v_texCoord);\n        gl_FragColor.xyz = vec3(0.2126*c.r + 0.7152*c.g + 0.0722*c.b);\n        gl_FragColor.w = c.w;\n    }\n    ";
    return GrayFrag;
}());
exports.default = GrayFrag;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHcmF5RnJhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUE0QkEsQ0FBQztJQTNCVSxxQkFBWSxHQUFHLDJUQVlyQixDQUFDO0lBRUssa0JBQVMsR0FBRyxtVkFZbEIsQ0FBQztJQUNOLGVBQUM7Q0E1QkQsQUE0QkMsSUFBQTtrQkE1Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBHcmF5RnJhZ3tcclxuICAgIHN0YXRpYyBkZWZhdWx0X3ZlcnQgPSBgXHJcbiAgICBhdHRyaWJ1dGUgdmVjNCBhX3Bvc2l0aW9uO1xyXG4gICAgYXR0cmlidXRlIHZlYzIgYV90ZXhDb29yZDtcclxuICAgIGF0dHJpYnV0ZSB2ZWM0IGFfY29sb3I7XHJcbiAgICB2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxuICAgIHZhcnlpbmcgdmVjNCB2X2ZyYWdtZW50Q29sb3I7XHJcbiAgICB2b2lkIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIGdsX1Bvc2l0aW9uID0gQ0NfUE1hdHJpeCAqIGFfcG9zaXRpb247XHJcbiAgICAgICAgdl9mcmFnbWVudENvbG9yID0gYV9jb2xvcjtcclxuICAgICAgICB2X3RleENvb3JkID0gYV90ZXhDb29yZDtcclxuICAgIH1cclxuICAgIGA7XHJcbiAgICAgICBcclxuICAgIHN0YXRpYyBncmF5X2ZyYWcgPSBgXHJcbiAgICAjaWZkZWYgR0xfRVNcclxuICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG4gICAgI2VuZGlmXHJcbiAgICB2YXJ5aW5nIHZlYzQgdl9mcmFnbWVudENvbG9yO1xyXG4gICAgdmFyeWluZyB2ZWMyIHZfdGV4Q29vcmQ7XHJcbiAgICB2b2lkIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIHZlYzQgYyA9IHZfZnJhZ21lbnRDb2xvciAqIHRleHR1cmUyRChDQ19UZXh0dXJlMCwgdl90ZXhDb29yZCk7XHJcbiAgICAgICAgZ2xfRnJhZ0NvbG9yLnh5eiA9IHZlYzMoMC4yMTI2KmMuciArIDAuNzE1MipjLmcgKyAwLjA3MjIqYy5iKTtcclxuICAgICAgICBnbF9GcmFnQ29sb3IudyA9IGMudztcclxuICAgIH1cclxuICAgIGA7XHJcbn1cclxuIl19
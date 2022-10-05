
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shaders/ccShader_lightningBolt_Frag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '294banLxhNOnZhlfOvlwtIA', 'ccShader_lightningBolt_Frag');
// Shaders/ccShader_lightningBolt_Frag.js

"use strict";

module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nvarying vec2 v_texCoord;\nvarying vec4 v_color;\n//uniform sampler2D CC_Texture0;\nuniform float u_opacity;\n\nvoid main() {\n    vec4 texColor=texture2D(CC_Texture0, v_texCoord);\n    gl_FragColor=texColor*v_color*u_opacity;\n}\n\n";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyc1xcY2NTaGFkZXJfbGlnaHRuaW5nQm9sdF9GcmFnLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsT0FBUCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPVxyXG5gXHJcbiNpZmRlZiBHTF9FU1xyXG5wcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcclxuI2VuZGlmXHJcblxyXG52YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxudmFyeWluZyB2ZWM0IHZfY29sb3I7XHJcbi8vdW5pZm9ybSBzYW1wbGVyMkQgQ0NfVGV4dHVyZTA7XHJcbnVuaWZvcm0gZmxvYXQgdV9vcGFjaXR5O1xyXG5cclxudm9pZCBtYWluKCkge1xyXG4gICAgdmVjNCB0ZXhDb2xvcj10ZXh0dXJlMkQoQ0NfVGV4dHVyZTAsIHZfdGV4Q29vcmQpO1xyXG4gICAgZ2xfRnJhZ0NvbG9yPXRleENvbG9yKnZfY29sb3IqdV9vcGFjaXR5O1xyXG59XHJcblxyXG5gXHJcblxyXG4iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shaders/ccShader_Negative_Black_White_Frag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c783ciGjChFwIKrWgxxqcIf', 'ccShader_Negative_Black_White_Frag');
// Shaders/ccShader_Negative_Black_White_Frag.js

"use strict";

/* 底片黑白 */
module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec2 v_texCoord;\nvoid main()\n{\n    vec3 v = texture2D(CC_Texture0, v_texCoord).rgb;\n    float f = 1.0 - (v.r * 0.3 + v.g * 0.59 + v.b * 0.11);\n    gl_FragColor = vec4(f, f, f, 1.0);\n}\n";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyc1xcY2NTaGFkZXJfTmVnYXRpdmVfQmxhY2tfV2hpdGVfRnJhZy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUFBLE1BQU0sQ0FBQ0MsT0FBUCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyog5bqV54mH6buR55m9ICovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9XHJcbmBcclxuI2lmZGVmIEdMX0VTXHJcbnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG4jZW5kaWZcclxudmFyeWluZyB2ZWMyIHZfdGV4Q29vcmQ7XHJcbnZvaWQgbWFpbigpXHJcbntcclxuICAgIHZlYzMgdiA9IHRleHR1cmUyRChDQ19UZXh0dXJlMCwgdl90ZXhDb29yZCkucmdiO1xyXG4gICAgZmxvYXQgZiA9IDEuMCAtICh2LnIgKiAwLjMgKyB2LmcgKiAwLjU5ICsgdi5iICogMC4xMSk7XHJcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGYsIGYsIGYsIDEuMCk7XHJcbn1cclxuYCJdfQ==
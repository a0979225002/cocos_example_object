
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shaders/ccShader_Negative_Image_Frag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '22b86QwDe9ALLPEMFzEr7/I', 'ccShader_Negative_Image_Frag');
// Shaders/ccShader_Negative_Image_Frag.js

"use strict";

/* 底片镜像 */
module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec2 v_texCoord;\nvoid main()\n{\n\tgl_FragColor = vec4(1.0 - texture2D(CC_Texture0, v_texCoord).rgb, 1.0);\n}\n";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyc1xcY2NTaGFkZXJfTmVnYXRpdmVfSW1hZ2VfRnJhZy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUFBLE1BQU0sQ0FBQ0MsT0FBUCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyog5bqV54mH6ZWc5YOPICovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9XHJcbmBcclxuI2lmZGVmIEdMX0VTXHJcbnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG4jZW5kaWZcclxudmFyeWluZyB2ZWMyIHZfdGV4Q29vcmQ7XHJcbnZvaWQgbWFpbigpXHJcbntcclxuXHRnbF9GcmFnQ29sb3IgPSB2ZWM0KDEuMCAtIHRleHR1cmUyRChDQ19UZXh0dXJlMCwgdl90ZXhDb29yZCkucmdiLCAxLjApO1xyXG59XHJcbmAiXX0=
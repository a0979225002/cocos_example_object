
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shaders/ccShader_Wave_H_Frag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e6a51LGYIZEC7V61j5KigmH', 'ccShader_Wave_H_Frag');
// Shaders/ccShader_Wave_H_Frag.js

"use strict";

/* 水平波浪 */
module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec2 v_texCoord;\nuniform float motion;\nuniform float angle;\nvoid main()\n{\n    vec2 tmp = v_texCoord;\n    tmp.x = tmp.x + 0.05 * sin(motion +  tmp.y * angle);\n    gl_FragColor = texture2D(CC_Texture0, tmp);\n}\n";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyc1xcY2NTaGFkZXJfV2F2ZV9IX0ZyYWcuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBQSxNQUFNLENBQUNDLE9BQVAiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qIOawtOW5s+azoua1qiAqL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPVxyXG5gXHJcbiNpZmRlZiBHTF9FU1xyXG5wcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcclxuI2VuZGlmXHJcbnZhcnlpbmcgdmVjMiB2X3RleENvb3JkO1xyXG51bmlmb3JtIGZsb2F0IG1vdGlvbjtcclxudW5pZm9ybSBmbG9hdCBhbmdsZTtcclxudm9pZCBtYWluKClcclxue1xyXG4gICAgdmVjMiB0bXAgPSB2X3RleENvb3JkO1xyXG4gICAgdG1wLnggPSB0bXAueCArIDAuMDUgKiBzaW4obW90aW9uICsgIHRtcC55ICogYW5nbGUpO1xyXG4gICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKENDX1RleHR1cmUwLCB0bXApO1xyXG59XHJcbmAiXX0=
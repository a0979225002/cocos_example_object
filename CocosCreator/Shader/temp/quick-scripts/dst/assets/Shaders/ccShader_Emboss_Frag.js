
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shaders/ccShader_Emboss_Frag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ac442tsTRdFYpIFqGfHWzCV', 'ccShader_Emboss_Frag');
// Shaders/ccShader_Emboss_Frag.js

"use strict";

/* 浮雕 */
module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec2 v_texCoord;\nuniform float widthStep;\nuniform float heightStep;\nconst float stride = 2.0;\nvoid main()\n{\n    vec3 tmpColor = texture2D(CC_Texture0, v_texCoord + vec2(widthStep * stride, heightStep * stride)).rgb;\n    tmpColor = texture2D(CC_Texture0, v_texCoord).rgb - tmpColor + 0.5;\n    float f = (tmpColor.r + tmpColor.g + tmpColor.b) / 3.0;\n    gl_FragColor = vec4(f, f, f, 1.0);\n}\n\n";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyc1xcY2NTaGFkZXJfRW1ib3NzX0ZyYWcuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBQSxNQUFNLENBQUNDLE9BQVAiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qIOa1rumblSAqL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPVxyXG5gXHJcbiNpZmRlZiBHTF9FU1xyXG5wcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcclxuI2VuZGlmXHJcbnZhcnlpbmcgdmVjMiB2X3RleENvb3JkO1xyXG51bmlmb3JtIGZsb2F0IHdpZHRoU3RlcDtcclxudW5pZm9ybSBmbG9hdCBoZWlnaHRTdGVwO1xyXG5jb25zdCBmbG9hdCBzdHJpZGUgPSAyLjA7XHJcbnZvaWQgbWFpbigpXHJcbntcclxuICAgIHZlYzMgdG1wQ29sb3IgPSB0ZXh0dXJlMkQoQ0NfVGV4dHVyZTAsIHZfdGV4Q29vcmQgKyB2ZWMyKHdpZHRoU3RlcCAqIHN0cmlkZSwgaGVpZ2h0U3RlcCAqIHN0cmlkZSkpLnJnYjtcclxuICAgIHRtcENvbG9yID0gdGV4dHVyZTJEKENDX1RleHR1cmUwLCB2X3RleENvb3JkKS5yZ2IgLSB0bXBDb2xvciArIDAuNTtcclxuICAgIGZsb2F0IGYgPSAodG1wQ29sb3IuciArIHRtcENvbG9yLmcgKyB0bXBDb2xvci5iKSAvIDMuMDtcclxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoZiwgZiwgZiwgMS4wKTtcclxufVxyXG5cclxuYCJdfQ==
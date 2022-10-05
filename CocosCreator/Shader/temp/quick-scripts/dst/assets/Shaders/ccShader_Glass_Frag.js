
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shaders/ccShader_Glass_Frag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd224fzmSIhPOo16XoV1xpYS', 'ccShader_Glass_Frag');
// Shaders/ccShader_Glass_Frag.js

"use strict";

/* 磨砂玻璃 1.0 */

/* 磨砂玻璃 3.0 */

/* 磨砂玻璃 6.0 */
module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec2 v_texCoord;\nuniform float widthStep;\nuniform float heightStep;\nuniform float blurRadiusScale;\nconst float blurRadius = 6.0;\nconst float blurPixels = (blurRadius * 2.0 + 1.0) * (blurRadius * 2.0 + 1.0);\nfloat random(vec3 scale, float seed) {\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\nvoid main()\n{\n    vec3 sumColor = vec3(0.0, 0.0, 0.0);  \n    for(float fy = -blurRadius; fy <= blurRadius; ++fy)\n    {\n        float dir = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n        for(float fx = -blurRadius; fx <= blurRadius; ++fx)\n        {\n            float dis = distance(vec2(fx * widthStep, fy * heightStep), vec2(0.0, 0.0)) * blurRadiusScale;\n            vec2 coord = vec2(dis * cos(dir), dis * sin(dir));\n            sumColor += texture2D(CC_Texture0, v_texCoord + coord).rgb;\n        }\n    }\n    gl_FragColor = vec4(sumColor / blurPixels, 1.0);\n}\n";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyc1xcY2NTaGFkZXJfR2xhc3NfRnJhZy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBO0FBRUFBLE1BQU0sQ0FBQ0MsT0FBUCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyog56Oo56CC546755KDIDEuMCAqL1xyXG4vKiDno6jnoILnjrvnkoMgMy4wICovXHJcbi8qIOejqOeggueOu+eSgyA2LjAgKi9cclxuXHJcbm1vZHVsZS5leHBvcnRzID1cclxuYFxyXG4jaWZkZWYgR0xfRVNcclxucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcbiNlbmRpZlxyXG52YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxudW5pZm9ybSBmbG9hdCB3aWR0aFN0ZXA7XHJcbnVuaWZvcm0gZmxvYXQgaGVpZ2h0U3RlcDtcclxudW5pZm9ybSBmbG9hdCBibHVyUmFkaXVzU2NhbGU7XHJcbmNvbnN0IGZsb2F0IGJsdXJSYWRpdXMgPSA2LjA7XHJcbmNvbnN0IGZsb2F0IGJsdXJQaXhlbHMgPSAoYmx1clJhZGl1cyAqIDIuMCArIDEuMCkgKiAoYmx1clJhZGl1cyAqIDIuMCArIDEuMCk7XHJcbmZsb2F0IHJhbmRvbSh2ZWMzIHNjYWxlLCBmbG9hdCBzZWVkKSB7XHJcbiAgICByZXR1cm4gZnJhY3Qoc2luKGRvdChnbF9GcmFnQ29vcmQueHl6ICsgc2VlZCwgc2NhbGUpKSAqIDQzNzU4LjU0NTMgKyBzZWVkKTtcclxufVxyXG52b2lkIG1haW4oKVxyXG57XHJcbiAgICB2ZWMzIHN1bUNvbG9yID0gdmVjMygwLjAsIDAuMCwgMC4wKTsgIFxyXG4gICAgZm9yKGZsb2F0IGZ5ID0gLWJsdXJSYWRpdXM7IGZ5IDw9IGJsdXJSYWRpdXM7ICsrZnkpXHJcbiAgICB7XHJcbiAgICAgICAgZmxvYXQgZGlyID0gcmFuZG9tKHZlYzMoMTIuOTg5OCwgNzguMjMzLCAxNTEuNzE4MiksIDAuMCk7XHJcbiAgICAgICAgZm9yKGZsb2F0IGZ4ID0gLWJsdXJSYWRpdXM7IGZ4IDw9IGJsdXJSYWRpdXM7ICsrZngpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmbG9hdCBkaXMgPSBkaXN0YW5jZSh2ZWMyKGZ4ICogd2lkdGhTdGVwLCBmeSAqIGhlaWdodFN0ZXApLCB2ZWMyKDAuMCwgMC4wKSkgKiBibHVyUmFkaXVzU2NhbGU7XHJcbiAgICAgICAgICAgIHZlYzIgY29vcmQgPSB2ZWMyKGRpcyAqIGNvcyhkaXIpLCBkaXMgKiBzaW4oZGlyKSk7XHJcbiAgICAgICAgICAgIHN1bUNvbG9yICs9IHRleHR1cmUyRChDQ19UZXh0dXJlMCwgdl90ZXhDb29yZCArIGNvb3JkKS5yZ2I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChzdW1Db2xvciAvIGJsdXJQaXhlbHMsIDEuMCk7XHJcbn1cclxuYCJdfQ==
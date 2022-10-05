
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shaders/ccShader_Gray_Frag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73888xoJwVIWrhZc5ygaWzE', 'ccShader_Gray_Frag');
// Shaders/ccShader_Gray_Frag.js

"use strict";

/* 灰度 */
module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec2 v_texCoord;\nvoid main()\n{\n    vec3 v = texture2D(CC_Texture0, v_texCoord).rgb;\n    float f = v.r * 0.299 + v.g * 0.587 + v.b * 0.114;\n    gl_FragColor = vec4(f, f, f, 1.0);\n}\n";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyc1xcY2NTaGFkZXJfR3JheV9GcmFnLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQUEsTUFBTSxDQUFDQyxPQUFQIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKiDngbDluqYgKi9cclxuXHJcbm1vZHVsZS5leHBvcnRzID1cclxuYFxyXG4jaWZkZWYgR0xfRVNcclxucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcbiNlbmRpZlxyXG52YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxudm9pZCBtYWluKClcclxue1xyXG4gICAgdmVjMyB2ID0gdGV4dHVyZTJEKENDX1RleHR1cmUwLCB2X3RleENvb3JkKS5yZ2I7XHJcbiAgICBmbG9hdCBmID0gdi5yICogMC4yOTkgKyB2LmcgKiAwLjU4NyArIHYuYiAqIDAuMTE0O1xyXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChmLCBmLCBmLCAxLjApO1xyXG59XHJcbmAiXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shaders/ccShader_Blur_Edge_Detail_Frag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8d8efHxD+NJDJDhjrQlBHJs', 'ccShader_Blur_Edge_Detail_Frag');
// Shaders/ccShader_Blur_Edge_Detail_Frag.js

"use strict";

/* 模糊 0.5     */

/* 模糊 1.0     */

/* 细节 -2.0    */

/* 细节 -5.0    */

/* 细节 -10.0   */

/* 边缘 2.0     */

/* 边缘 5.0     */

/* 边缘 10.0    */
module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec2 v_texCoord;\nuniform float widthStep;\nuniform float heightStep;\nuniform float strength;\nconst float blurRadius = 2.0;\nconst float blurPixels = (blurRadius * 2.0 + 1.0) * (blurRadius * 2.0 + 1.0);\nvoid main()\n{\n    vec3 sumColor = vec3(0.0, 0.0, 0.0);\n    for(float fy = -blurRadius; fy <= blurRadius; ++fy)\n    {\n        for(float fx = -blurRadius; fx <= blurRadius; ++fx)\n        {\n            vec2 coord = vec2(fx * widthStep, fy * heightStep);\n            sumColor += texture2D(CC_Texture0, v_texCoord + coord).rgb;\n        }\n    }\n    gl_FragColor = vec4(mix(texture2D(CC_Texture0, v_texCoord).rgb, sumColor / blurPixels, strength), 1.0);\n}\n";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyc1xcY2NTaGFkZXJfQmx1cl9FZGdlX0RldGFpbF9GcmFnLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7QUFFQUEsTUFBTSxDQUFDQyxPQUFQIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKiDmqKHns4ogMC41ICAgICAqL1xyXG4vKiDmqKHns4ogMS4wICAgICAqL1xyXG4vKiDnu4boioIgLTIuMCAgICAqL1xyXG4vKiDnu4boioIgLTUuMCAgICAqL1xyXG4vKiDnu4boioIgLTEwLjAgICAqL1xyXG4vKiDovrnnvJggMi4wICAgICAqL1xyXG4vKiDovrnnvJggNS4wICAgICAqL1xyXG4vKiDovrnnvJggMTAuMCAgICAqL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPVxyXG5gXHJcbiNpZmRlZiBHTF9FU1xyXG5wcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcclxuI2VuZGlmXHJcbnZhcnlpbmcgdmVjMiB2X3RleENvb3JkO1xyXG51bmlmb3JtIGZsb2F0IHdpZHRoU3RlcDtcclxudW5pZm9ybSBmbG9hdCBoZWlnaHRTdGVwO1xyXG51bmlmb3JtIGZsb2F0IHN0cmVuZ3RoO1xyXG5jb25zdCBmbG9hdCBibHVyUmFkaXVzID0gMi4wO1xyXG5jb25zdCBmbG9hdCBibHVyUGl4ZWxzID0gKGJsdXJSYWRpdXMgKiAyLjAgKyAxLjApICogKGJsdXJSYWRpdXMgKiAyLjAgKyAxLjApO1xyXG52b2lkIG1haW4oKVxyXG57XHJcbiAgICB2ZWMzIHN1bUNvbG9yID0gdmVjMygwLjAsIDAuMCwgMC4wKTtcclxuICAgIGZvcihmbG9hdCBmeSA9IC1ibHVyUmFkaXVzOyBmeSA8PSBibHVyUmFkaXVzOyArK2Z5KVxyXG4gICAge1xyXG4gICAgICAgIGZvcihmbG9hdCBmeCA9IC1ibHVyUmFkaXVzOyBmeCA8PSBibHVyUmFkaXVzOyArK2Z4KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmVjMiBjb29yZCA9IHZlYzIoZnggKiB3aWR0aFN0ZXAsIGZ5ICogaGVpZ2h0U3RlcCk7XHJcbiAgICAgICAgICAgIHN1bUNvbG9yICs9IHRleHR1cmUyRChDQ19UZXh0dXJlMCwgdl90ZXhDb29yZCArIGNvb3JkKS5yZ2I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChtaXgodGV4dHVyZTJEKENDX1RleHR1cmUwLCB2X3RleENvb3JkKS5yZ2IsIHN1bUNvbG9yIC8gYmx1clBpeGVscywgc3RyZW5ndGgpLCAxLjApO1xyXG59XHJcbmAiXX0=
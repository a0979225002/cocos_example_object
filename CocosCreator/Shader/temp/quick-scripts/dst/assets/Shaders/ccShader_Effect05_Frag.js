
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shaders/ccShader_Effect05_Frag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '337ebBhO3FAIo6X9bI3so70', 'ccShader_Effect05_Frag');
// Shaders/ccShader_Effect05_Frag.js

"use strict";

module.exports = "\n#ifdef GL_ES\nprecision highp float;\n#endif\n\nuniform float time;\nuniform vec2 mouse;\nuniform vec2 resolution;\n\n#define M_PI 3.1415926535897932384626433832795\n\nvoid main( void ) {\n  float time2 = time;\n  vec2 mouse2 = mouse;\n\tfloat radius = 0.75;\n\tvec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);\n\t// assign color only to the points that are inside of the circle\n\tgl_FragColor = vec4(smoothstep(0.0,1.0, pow(radius - length(p),0.05) ));\t\n}\n\n\n";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyc1xcY2NTaGFkZXJfRWZmZWN0MDVfRnJhZy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLE9BQVAiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID1cclxuYFxyXG4jaWZkZWYgR0xfRVNcclxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xyXG4jZW5kaWZcclxuXHJcbnVuaWZvcm0gZmxvYXQgdGltZTtcclxudW5pZm9ybSB2ZWMyIG1vdXNlO1xyXG51bmlmb3JtIHZlYzIgcmVzb2x1dGlvbjtcclxuXHJcbiNkZWZpbmUgTV9QSSAzLjE0MTU5MjY1MzU4OTc5MzIzODQ2MjY0MzM4MzI3OTVcclxuXHJcbnZvaWQgbWFpbiggdm9pZCApIHtcclxuICBmbG9hdCB0aW1lMiA9IHRpbWU7XHJcbiAgdmVjMiBtb3VzZTIgPSBtb3VzZTtcclxuXHRmbG9hdCByYWRpdXMgPSAwLjc1O1xyXG5cdHZlYzIgcCA9IChnbF9GcmFnQ29vcmQueHkgKiAyLjAgLSByZXNvbHV0aW9uKSAvIG1pbihyZXNvbHV0aW9uLngsIHJlc29sdXRpb24ueSk7XHJcblx0Ly8gYXNzaWduIGNvbG9yIG9ubHkgdG8gdGhlIHBvaW50cyB0aGF0IGFyZSBpbnNpZGUgb2YgdGhlIGNpcmNsZVxyXG5cdGdsX0ZyYWdDb2xvciA9IHZlYzQoc21vb3Roc3RlcCgwLjAsMS4wLCBwb3cocmFkaXVzIC0gbGVuZ3RoKHApLDAuMDUpICkpO1x0XHJcbn1cclxuXHJcblxyXG5gXHJcbiJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shaders/ccShader_Circle_Light_Frag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '809c0F7ZPNA+orsMC9NHEF6', 'ccShader_Circle_Light_Frag');
// Shaders/ccShader_Circle_Light_Frag.js

"use strict";

module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec2 v_texCoord;\nuniform float time;\nuniform vec2 mouse_touch;\nuniform vec2 resolution;\n\nvoid main( void ) {\n  float t=time;\n  vec2 touch=mouse_touch;\n  vec2 resolution2s=resolution;\n  vec2 position = ((gl_FragCoord.xy / resolution.xy) * 2. - 1.) * vec2(resolution.x / resolution.y, 1.0);\n  float d = abs(0.1 + length(position) - 0.5 * abs(sin(time))) * 5.0;\n  vec3 sumColor = vec3(0.0, 0.0, 0.0);\n\tsumColor += texture2D(CC_Texture0, v_texCoord).rgb;\n\tgl_FragColor = vec4(sumColor.r/d, sumColor.g, sumColor.b, mouse_touch.x/800.0 );\n}\n";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyc1xcY2NTaGFkZXJfQ2lyY2xlX0xpZ2h0X0ZyYWcuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxPQUFQIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9XHJcbmBcclxuI2lmZGVmIEdMX0VTXHJcbnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG4jZW5kaWZcclxudmFyeWluZyB2ZWMyIHZfdGV4Q29vcmQ7XHJcbnVuaWZvcm0gZmxvYXQgdGltZTtcclxudW5pZm9ybSB2ZWMyIG1vdXNlX3RvdWNoO1xyXG51bmlmb3JtIHZlYzIgcmVzb2x1dGlvbjtcclxuXHJcbnZvaWQgbWFpbiggdm9pZCApIHtcclxuICBmbG9hdCB0PXRpbWU7XHJcbiAgdmVjMiB0b3VjaD1tb3VzZV90b3VjaDtcclxuICB2ZWMyIHJlc29sdXRpb24ycz1yZXNvbHV0aW9uO1xyXG4gIHZlYzIgcG9zaXRpb24gPSAoKGdsX0ZyYWdDb29yZC54eSAvIHJlc29sdXRpb24ueHkpICogMi4gLSAxLikgKiB2ZWMyKHJlc29sdXRpb24ueCAvIHJlc29sdXRpb24ueSwgMS4wKTtcclxuICBmbG9hdCBkID0gYWJzKDAuMSArIGxlbmd0aChwb3NpdGlvbikgLSAwLjUgKiBhYnMoc2luKHRpbWUpKSkgKiA1LjA7XHJcbiAgdmVjMyBzdW1Db2xvciA9IHZlYzMoMC4wLCAwLjAsIDAuMCk7XHJcblx0c3VtQ29sb3IgKz0gdGV4dHVyZTJEKENDX1RleHR1cmUwLCB2X3RleENvb3JkKS5yZ2I7XHJcblx0Z2xfRnJhZ0NvbG9yID0gdmVjNChzdW1Db2xvci5yL2QsIHN1bUNvbG9yLmcsIHN1bUNvbG9yLmIsIG1vdXNlX3RvdWNoLngvODAwLjAgKTtcclxufVxyXG5gIl19
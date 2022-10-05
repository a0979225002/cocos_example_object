
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shaders/ccShader_Wave_V_Frag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '035c51ilq5E5K0vR8gxJk63', 'ccShader_Wave_V_Frag');
// Shaders/ccShader_Wave_V_Frag.js

"use strict";

/* 垂直波浪 */
module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec2 v_texCoord;\nuniform float motion;\nuniform float angle;\nvoid main()\n{\n    vec2 tmp = v_texCoord;\n    tmp.y = tmp.y + 0.05 * sin(motion +  tmp.x * angle);\n    gl_FragColor = texture2D(CC_Texture0, tmp);\n}\n";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyc1xcY2NTaGFkZXJfV2F2ZV9WX0ZyYWcuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBQSxNQUFNLENBQUNDLE9BQVAiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qIOWeguebtOazoua1qiAqL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAgXHJcbmBcclxuI2lmZGVmIEdMX0VTXHJcbnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG4jZW5kaWZcclxudmFyeWluZyB2ZWMyIHZfdGV4Q29vcmQ7XHJcbnVuaWZvcm0gZmxvYXQgbW90aW9uO1xyXG51bmlmb3JtIGZsb2F0IGFuZ2xlO1xyXG52b2lkIG1haW4oKVxyXG57XHJcbiAgICB2ZWMyIHRtcCA9IHZfdGV4Q29vcmQ7XHJcbiAgICB0bXAueSA9IHRtcC55ICsgMC4wNSAqIHNpbihtb3Rpb24gKyAgdG1wLnggKiBhbmdsZSk7XHJcbiAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQoQ0NfVGV4dHVyZTAsIHRtcCk7XHJcbn1cclxuYCJdfQ==
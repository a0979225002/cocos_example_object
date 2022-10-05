
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shaders/ccShader_Shadow_Black_White_Frag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c272evTobpLioVcZ8YURnWQ', 'ccShader_Shadow_Black_White_Frag');
// Shaders/ccShader_Shadow_Black_White_Frag.js

"use strict";

/* 渐变黑白 */
module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec2 v_texCoord;\nuniform float strength;\nvoid main()\n{\n    vec3 v = texture2D(CC_Texture0, v_texCoord).rgb;\n    float f = step(strength, (v.r + v.g + v.b) / 3.0 );\n    gl_FragColor = vec4(f, f, f, 1.0);\n}\n";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyc1xcY2NTaGFkZXJfU2hhZG93X0JsYWNrX1doaXRlX0ZyYWcuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBQSxNQUFNLENBQUNDLE9BQVAiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qIOa4kOWPmOm7keeZvSAqL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPVxyXG5gXHJcbiNpZmRlZiBHTF9FU1xyXG5wcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcclxuI2VuZGlmXHJcbnZhcnlpbmcgdmVjMiB2X3RleENvb3JkO1xyXG51bmlmb3JtIGZsb2F0IHN0cmVuZ3RoO1xyXG52b2lkIG1haW4oKVxyXG57XHJcbiAgICB2ZWMzIHYgPSB0ZXh0dXJlMkQoQ0NfVGV4dHVyZTAsIHZfdGV4Q29vcmQpLnJnYjtcclxuICAgIGZsb2F0IGYgPSBzdGVwKHN0cmVuZ3RoLCAodi5yICsgdi5nICsgdi5iKSAvIDMuMCApO1xyXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChmLCBmLCBmLCAxLjApO1xyXG59XHJcbmAiXX0=
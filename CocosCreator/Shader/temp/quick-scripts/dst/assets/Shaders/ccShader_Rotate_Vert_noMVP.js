
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shaders/ccShader_Rotate_Vert_noMVP.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '863c0PZ7UVM+pnGn3gxgnvI', 'ccShader_Rotate_Vert_noMVP');
// Shaders/ccShader_Rotate_Vert_noMVP.js

"use strict";

module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\nattribute vec4 a_position;\n attribute vec2 a_texCoord;\n attribute vec4 a_color;\n varying vec2 v_texCoord;\n varying vec4 v_fragmentColor;\nuniform vec4 rotation;\n void main()\n {\n     gl_Position = CC_PMatrix  * a_position * rotation;\n     v_fragmentColor = a_color;\n     v_texCoord = a_texCoord;\n }\n\n";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyc1xcY2NTaGFkZXJfUm90YXRlX1ZlcnRfbm9NVlAuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxPQUFQIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9XHJcbmBcclxuI2lmZGVmIEdMX0VTXHJcbnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG4jZW5kaWZcclxuYXR0cmlidXRlIHZlYzQgYV9wb3NpdGlvbjtcclxuIGF0dHJpYnV0ZSB2ZWMyIGFfdGV4Q29vcmQ7XHJcbiBhdHRyaWJ1dGUgdmVjNCBhX2NvbG9yO1xyXG4gdmFyeWluZyB2ZWMyIHZfdGV4Q29vcmQ7XHJcbiB2YXJ5aW5nIHZlYzQgdl9mcmFnbWVudENvbG9yO1xyXG51bmlmb3JtIHZlYzQgcm90YXRpb247XHJcbiB2b2lkIG1haW4oKVxyXG4ge1xyXG4gICAgIGdsX1Bvc2l0aW9uID0gQ0NfUE1hdHJpeCAgKiBhX3Bvc2l0aW9uICogcm90YXRpb247XHJcbiAgICAgdl9mcmFnbWVudENvbG9yID0gYV9jb2xvcjtcclxuICAgICB2X3RleENvb3JkID0gYV90ZXhDb29yZDtcclxuIH1cclxuXHJcbmAiXX0=
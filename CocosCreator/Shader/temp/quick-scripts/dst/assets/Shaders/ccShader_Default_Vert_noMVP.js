
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shaders/ccShader_Default_Vert_noMVP.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '43902EEq9hDVIWH7OBEhbvT', 'ccShader_Default_Vert_noMVP');
// Shaders/ccShader_Default_Vert_noMVP.js

"use strict";

module.exports = "\nattribute vec4 a_position;\n attribute vec2 a_texCoord;\n attribute vec4 a_color;\n varying vec2 v_texCoord;\n varying vec4 v_fragmentColor;\n void main()\n {\n     gl_Position = CC_PMatrix  * a_position;\n     v_fragmentColor = a_color;\n     v_texCoord = a_texCoord;\n }\n";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyc1xcY2NTaGFkZXJfRGVmYXVsdF9WZXJ0X25vTVZQLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsT0FBUCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPVxyXG5gXHJcbmF0dHJpYnV0ZSB2ZWM0IGFfcG9zaXRpb247XHJcbiBhdHRyaWJ1dGUgdmVjMiBhX3RleENvb3JkO1xyXG4gYXR0cmlidXRlIHZlYzQgYV9jb2xvcjtcclxuIHZhcnlpbmcgdmVjMiB2X3RleENvb3JkO1xyXG4gdmFyeWluZyB2ZWM0IHZfZnJhZ21lbnRDb2xvcjtcclxuIHZvaWQgbWFpbigpXHJcbiB7XHJcbiAgICAgZ2xfUG9zaXRpb24gPSBDQ19QTWF0cml4ICAqIGFfcG9zaXRpb247XHJcbiAgICAgdl9mcmFnbWVudENvbG9yID0gYV9jb2xvcjtcclxuICAgICB2X3RleENvb3JkID0gYV90ZXhDb29yZDtcclxuIH1cclxuYFxyXG5cclxuIl19
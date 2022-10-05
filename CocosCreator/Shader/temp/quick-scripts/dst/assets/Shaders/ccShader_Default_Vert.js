
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shaders/ccShader_Default_Vert.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '440f5W7uvVNAaZx4ALzoZN8', 'ccShader_Default_Vert');
// Shaders/ccShader_Default_Vert.js

"use strict";

module.exports = "\nattribute vec4 a_position;\nattribute vec2 a_texCoord;\nattribute vec4 a_color;\nvarying vec2 v_texCoord;\nvarying vec4 v_fragmentColor;\nvoid main()\n{\n    gl_Position = CC_PMatrix * a_position;\n    v_fragmentColor = a_color;\n    v_texCoord = a_texCoord;\n}\n";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyc1xcY2NTaGFkZXJfRGVmYXVsdF9WZXJ0LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsT0FBUCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPVxyXG5gXHJcbmF0dHJpYnV0ZSB2ZWM0IGFfcG9zaXRpb247XHJcbmF0dHJpYnV0ZSB2ZWMyIGFfdGV4Q29vcmQ7XHJcbmF0dHJpYnV0ZSB2ZWM0IGFfY29sb3I7XHJcbnZhcnlpbmcgdmVjMiB2X3RleENvb3JkO1xyXG52YXJ5aW5nIHZlYzQgdl9mcmFnbWVudENvbG9yO1xyXG52b2lkIG1haW4oKVxyXG57XHJcbiAgICBnbF9Qb3NpdGlvbiA9IENDX1BNYXRyaXggKiBhX3Bvc2l0aW9uO1xyXG4gICAgdl9mcmFnbWVudENvbG9yID0gYV9jb2xvcjtcclxuICAgIHZfdGV4Q29vcmQgPSBhX3RleENvb3JkO1xyXG59XHJcbmAgXHJcblxyXG4iXX0=
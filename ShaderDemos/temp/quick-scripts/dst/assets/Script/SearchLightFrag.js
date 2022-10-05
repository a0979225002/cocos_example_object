
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SearchLightFrag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd97daHlXyRMC7SfPeNmozga', 'SearchLightFrag');
// Script/SearchLightFrag.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SearchLightFrag = /** @class */ (function () {
    function SearchLightFrag() {
    }
    SearchLightFrag.search_light_vert = "\n    attribute vec4 a_position;\n    attribute vec2 a_texCoord;\n    attribute vec4 a_color;\n    varying vec2 v_texCoord;\n    varying vec4 v_fragmentColor;\n    void main()\n    {\n        gl_Position = CC_PMatrix * a_position;\n        v_fragmentColor = a_color;\n        v_texCoord = a_texCoord;\n    }\n    ";
    SearchLightFrag.search_light_frag = "\n    #ifdef GL_ES\n    precision mediump float;\n    #endif\n    uniform vec2 resolution;\n    uniform vec2 mouse;\n    varying vec2 v_texCoord;\n\n    void mainImage( out vec4 fragColor, in vec2 fragCoord )\n    {\n        // y\u5750\u6807\u7FFB\u8F6C\n        vec2 imouse = vec2(mouse.x, resolution.y - mouse.y);\n        // \u7EB9\u7406\u5750\u6807\n        vec2 uv = v_texCoord.xy ;\n        // \u7EB9\u7406\u91C7\u6837\n        vec4 tex = texture2D(CC_Texture0, uv);\n        // \u7247\u5143\u5230\u9F20\u6807\u70B9\u7684\u5DEE\u5411\u91CF\n        vec2 d = uv*resolution.xy -imouse.xy ;\n        // \u5149\u7167\u534A\u5F84\n        vec2 s = 0.15 * resolution.xy;\n        // \u70B9\u79EF\u53D6\u6BD4\u4F8B\n        float r = dot(d, d)/dot(s,s);\n        fragColor =  tex * (1.08 - r);   \n    }\n    void main()\n    {\n        mainImage(gl_FragColor, gl_FragCoord.xy);\n    }\n    ";
    return SearchLightFrag;
}());
exports.default = SearchLightFrag;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTZWFyY2hMaWdodEZyYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBMkNBLENBQUM7SUExQ1UsaUNBQWlCLEdBQUcsMlRBWTFCLENBQUM7SUFDSyxpQ0FBaUIsR0FBRyw0M0JBNEIxQixDQUFDO0lBQ04sc0JBQUM7Q0EzQ0QsQUEyQ0MsSUFBQTtrQkEzQ29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hMaWdodEZyYWd7XHJcbiAgICBzdGF0aWMgc2VhcmNoX2xpZ2h0X3ZlcnQgPSBgXHJcbiAgICBhdHRyaWJ1dGUgdmVjNCBhX3Bvc2l0aW9uO1xyXG4gICAgYXR0cmlidXRlIHZlYzIgYV90ZXhDb29yZDtcclxuICAgIGF0dHJpYnV0ZSB2ZWM0IGFfY29sb3I7XHJcbiAgICB2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxuICAgIHZhcnlpbmcgdmVjNCB2X2ZyYWdtZW50Q29sb3I7XHJcbiAgICB2b2lkIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIGdsX1Bvc2l0aW9uID0gQ0NfUE1hdHJpeCAqIGFfcG9zaXRpb247XHJcbiAgICAgICAgdl9mcmFnbWVudENvbG9yID0gYV9jb2xvcjtcclxuICAgICAgICB2X3RleENvb3JkID0gYV90ZXhDb29yZDtcclxuICAgIH1cclxuICAgIGA7XHJcbiAgICBzdGF0aWMgc2VhcmNoX2xpZ2h0X2ZyYWcgPSBgXHJcbiAgICAjaWZkZWYgR0xfRVNcclxuICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG4gICAgI2VuZGlmXHJcbiAgICB1bmlmb3JtIHZlYzIgcmVzb2x1dGlvbjtcclxuICAgIHVuaWZvcm0gdmVjMiBtb3VzZTtcclxuICAgIHZhcnlpbmcgdmVjMiB2X3RleENvb3JkO1xyXG5cclxuICAgIHZvaWQgbWFpbkltYWdlKCBvdXQgdmVjNCBmcmFnQ29sb3IsIGluIHZlYzIgZnJhZ0Nvb3JkIClcclxuICAgIHtcclxuICAgICAgICAvLyB55Z2Q5qCH57+76L2sXHJcbiAgICAgICAgdmVjMiBpbW91c2UgPSB2ZWMyKG1vdXNlLngsIHJlc29sdXRpb24ueSAtIG1vdXNlLnkpO1xyXG4gICAgICAgIC8vIOe6ueeQhuWdkOagh1xyXG4gICAgICAgIHZlYzIgdXYgPSB2X3RleENvb3JkLnh5IDtcclxuICAgICAgICAvLyDnurnnkIbph4fmoLdcclxuICAgICAgICB2ZWM0IHRleCA9IHRleHR1cmUyRChDQ19UZXh0dXJlMCwgdXYpO1xyXG4gICAgICAgIC8vIOeJh+WFg+WIsOm8oOagh+eCueeahOW3ruWQkemHj1xyXG4gICAgICAgIHZlYzIgZCA9IHV2KnJlc29sdXRpb24ueHkgLWltb3VzZS54eSA7XHJcbiAgICAgICAgLy8g5YWJ54Wn5Y2K5b6EXHJcbiAgICAgICAgdmVjMiBzID0gMC4xNSAqIHJlc29sdXRpb24ueHk7XHJcbiAgICAgICAgLy8g54K556ev5Y+W5q+U5L6LXHJcbiAgICAgICAgZmxvYXQgciA9IGRvdChkLCBkKS9kb3QocyxzKTtcclxuICAgICAgICBmcmFnQ29sb3IgPSAgdGV4ICogKDEuMDggLSByKTsgICBcclxuICAgIH1cclxuICAgIHZvaWQgbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgbWFpbkltYWdlKGdsX0ZyYWdDb2xvciwgZ2xfRnJhZ0Nvb3JkLnh5KTtcclxuICAgIH1cclxuICAgIGA7XHJcbn1cclxuIl19
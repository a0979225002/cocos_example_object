
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/DissolveFrag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dca57lTnNZAd7NZ/YjDNwv/', 'DissolveFrag');
// Script/DissolveFrag.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DissolveFrag = /** @class */ (function () {
    function DissolveFrag() {
    }
    DissolveFrag.vert = "\n    attribute vec4 a_position;\n    attribute vec2 a_texCoord;\n    attribute vec4 a_color;\n    varying vec2 v_texCoord; \n    varying vec4 v_fragmentColor; \n    void main() \n    { \n        gl_Position = CC_PMatrix * a_position;\n        v_fragmentColor = a_color; \n        v_texCoord = a_texCoord; \n    }\n    ";
    DissolveFrag.frag = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n\n    uniform vec2 resolution;\n    uniform float time;\n    uniform sampler2D texture1;\n\n    varying vec2 v_texCoord;\n    varying vec4 v_fragmentColor;\n    void mainImage( out vec4 fragColor, in vec2 fragCoord )\n    {\n        // \u7EB9\u7406\u5750\u6807\n        vec2 uv = v_texCoord;\n        // \u6CD5\u5411\u7EB9\u7406r\u901A\u9053\n        float height = texture2D(texture1,uv).r;\n        // \u91C7\u6837\u7EB9\u7406\n        vec4 color = v_fragmentColor * texture2D(CC_Texture0,uv);\n\n        if(height < time)\n        {\n            discard;\n        }\n        \n        if(height < time+0.04)\n        {\n            // \u6EB6\u89E3\u989C\u8272\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\n            color = vec4(.9,.6,0.3,color.a);\n        }\n        \n        fragColor = color;\n    }\n\n    void main()\n    {\n        mainImage(gl_FragColor, gl_FragCoord.xy);\n    }\n    ";
    return DissolveFrag;
}());
exports.default = DissolveFrag;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEaXNzb2x2ZUZyYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBc0RBLENBQUM7SUFyRFUsaUJBQUksR0FBRSxpVUFZWixDQUFDO0lBRUssaUJBQUksR0FBQyx1N0JBc0NYLENBQUM7SUFDTixtQkFBQztDQXRERCxBQXNEQyxJQUFBO2tCQXREb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3NvbHZlRnJhZyB7XHJcbiAgICBzdGF0aWMgdmVydCA9YFxyXG4gICAgYXR0cmlidXRlIHZlYzQgYV9wb3NpdGlvbjtcclxuICAgIGF0dHJpYnV0ZSB2ZWMyIGFfdGV4Q29vcmQ7XHJcbiAgICBhdHRyaWJ1dGUgdmVjNCBhX2NvbG9yO1xyXG4gICAgdmFyeWluZyB2ZWMyIHZfdGV4Q29vcmQ7IFxyXG4gICAgdmFyeWluZyB2ZWM0IHZfZnJhZ21lbnRDb2xvcjsgXHJcbiAgICB2b2lkIG1haW4oKSBcclxuICAgIHsgXHJcbiAgICAgICAgZ2xfUG9zaXRpb24gPSBDQ19QTWF0cml4ICogYV9wb3NpdGlvbjtcclxuICAgICAgICB2X2ZyYWdtZW50Q29sb3IgPSBhX2NvbG9yOyBcclxuICAgICAgICB2X3RleENvb3JkID0gYV90ZXhDb29yZDsgXHJcbiAgICB9XHJcbiAgICBgO1xyXG4gICAgXHJcbiAgICBzdGF0aWMgZnJhZz1gXHJcbiAgICAjaWZkZWYgR0xfRVNcclxuICAgIHByZWNpc2lvbiBsb3dwIGZsb2F0O1xyXG4gICAgI2VuZGlmXHJcblxyXG4gICAgdW5pZm9ybSB2ZWMyIHJlc29sdXRpb247XHJcbiAgICB1bmlmb3JtIGZsb2F0IHRpbWU7XHJcbiAgICB1bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlMTtcclxuXHJcbiAgICB2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxuICAgIHZhcnlpbmcgdmVjNCB2X2ZyYWdtZW50Q29sb3I7XHJcbiAgICB2b2lkIG1haW5JbWFnZSggb3V0IHZlYzQgZnJhZ0NvbG9yLCBpbiB2ZWMyIGZyYWdDb29yZCApXHJcbiAgICB7XHJcbiAgICAgICAgLy8g57q555CG5Z2Q5qCHXHJcbiAgICAgICAgdmVjMiB1diA9IHZfdGV4Q29vcmQ7XHJcbiAgICAgICAgLy8g5rOV5ZCR57q555CGcumAmumBk1xyXG4gICAgICAgIGZsb2F0IGhlaWdodCA9IHRleHR1cmUyRCh0ZXh0dXJlMSx1dikucjtcclxuICAgICAgICAvLyDph4fmoLfnurnnkIZcclxuICAgICAgICB2ZWM0IGNvbG9yID0gdl9mcmFnbWVudENvbG9yICogdGV4dHVyZTJEKENDX1RleHR1cmUwLHV2KTtcclxuXHJcbiAgICAgICAgaWYoaGVpZ2h0IDwgdGltZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRpc2NhcmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGhlaWdodCA8IHRpbWUrMC4wNClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIOa6tuino+minOiJsu+8jOWPr+S7peiHquWumuS5iVxyXG4gICAgICAgICAgICBjb2xvciA9IHZlYzQoLjksLjYsMC4zLGNvbG9yLmEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmcmFnQ29sb3IgPSBjb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICB2b2lkIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIG1haW5JbWFnZShnbF9GcmFnQ29sb3IsIGdsX0ZyYWdDb29yZC54eSk7XHJcbiAgICB9XHJcbiAgICBgO1xyXG59Il19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/CirclePortraitFrag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '19c76ks9PBILogq3fvEqG5h', 'CirclePortraitFrag');
// Script/CirclePortraitFrag.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Feofox Game
// Author:Lerry
// https://github.com/fylz1125/ShaderDemos
var CircleFrag = /** @class */ (function () {
    function CircleFrag() {
    }
    CircleFrag.circle_vert = "\n    attribute vec4 a_position;\n    attribute vec2 a_texCoord;\n    attribute vec4 a_color;\n    varying vec2 v_texCoord;\n    varying vec4 v_fragmentColor;\n    void main()\n    {\n        gl_Position = CC_PMatrix * a_position;\n        v_fragmentColor = a_color;\n        v_texCoord = a_texCoord;\n    }\n    ";
    CircleFrag.circle_frag = "\n    #ifdef GL_ES\n    precision mediump float;\n    #endif\n\n    varying vec4 v_fragmentColor;\n    varying vec2 v_texCoord;\n\n    uniform float u_edge;\n    uniform float u_offset; \n\n    void main()\n    {\n        float edge = u_edge;\n        float dis = 0.0;\n        vec2 texCoord = v_texCoord;\n        if ( texCoord.x < edge )\n        {\n            if ( texCoord.y < edge )\n            {\n                dis = distance( texCoord, vec2(edge, edge) );\n            }\n            if ( texCoord.y > (1.0 - edge) )\n            {\n                dis = distance( texCoord, vec2(edge, (1.0 - edge)) );\n            }\n        }\n        else if ( texCoord.x > (1.0 - edge) )\n        {\n            if ( texCoord.y < edge )\n            {\n                dis = distance( texCoord, vec2((1.0 - edge), edge ) );\n            }\n            if ( texCoord.y > (1.0 - edge) )\n            {\n                dis = distance( texCoord, vec2((1.0 - edge), (1.0 - edge) ) );\n            }\n        }\n  \n        if(dis > 0.001)\n        {\n            // \u5916\u5708\u6C9F\n            float gap = edge * 0.02;\n            if(dis <= edge - gap)\n            {\n                gl_FragColor = texture2D( CC_Texture0,texCoord);\n            }\n            else if(dis <= edge)\n            {\n                // \u5E73\u6ED1\u8FC7\u6E21\n                float t = smoothstep(0.,gap,edge-dis);\n                vec4 color = texture2D( CC_Texture0,texCoord);\n                gl_FragColor = vec4(color.rgb,t);\n            }else{\n                gl_FragColor = vec4(0.,0.,0.,0.);\n            }\n        }\n        else\n        {\n            gl_FragColor = texture2D( CC_Texture0,texCoord);\n        }\n    }\n\n    ";
    return CircleFrag;
}());
exports.default = CircleFrag;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDaXJjbGVQb3J0cmFpdEZyYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxjQUFjO0FBQ2QsZUFBZTtBQUNmLDBDQUEwQztBQUMxQztJQUFBO0lBOEVBLENBQUM7SUE3RVUsc0JBQVcsR0FBRywyVEFZcEIsQ0FBQztJQUNLLHNCQUFXLEdBQUcsNnJEQStEcEIsQ0FBQztJQUNOLGlCQUFDO0NBOUVELEFBOEVDLElBQUE7a0JBOUVvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRmVvZm94IEdhbWVcclxuLy8gQXV0aG9yOkxlcnJ5XHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9meWx6MTEyNS9TaGFkZXJEZW1vc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGVGcmFnIHtcclxuICAgIHN0YXRpYyBjaXJjbGVfdmVydCA9IGBcclxuICAgIGF0dHJpYnV0ZSB2ZWM0IGFfcG9zaXRpb247XHJcbiAgICBhdHRyaWJ1dGUgdmVjMiBhX3RleENvb3JkO1xyXG4gICAgYXR0cmlidXRlIHZlYzQgYV9jb2xvcjtcclxuICAgIHZhcnlpbmcgdmVjMiB2X3RleENvb3JkO1xyXG4gICAgdmFyeWluZyB2ZWM0IHZfZnJhZ21lbnRDb2xvcjtcclxuICAgIHZvaWQgbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgZ2xfUG9zaXRpb24gPSBDQ19QTWF0cml4ICogYV9wb3NpdGlvbjtcclxuICAgICAgICB2X2ZyYWdtZW50Q29sb3IgPSBhX2NvbG9yO1xyXG4gICAgICAgIHZfdGV4Q29vcmQgPSBhX3RleENvb3JkO1xyXG4gICAgfVxyXG4gICAgYDtcclxuICAgIHN0YXRpYyBjaXJjbGVfZnJhZyA9IGBcclxuICAgICNpZmRlZiBHTF9FU1xyXG4gICAgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcbiAgICAjZW5kaWZcclxuXHJcbiAgICB2YXJ5aW5nIHZlYzQgdl9mcmFnbWVudENvbG9yO1xyXG4gICAgdmFyeWluZyB2ZWMyIHZfdGV4Q29vcmQ7XHJcblxyXG4gICAgdW5pZm9ybSBmbG9hdCB1X2VkZ2U7XHJcbiAgICB1bmlmb3JtIGZsb2F0IHVfb2Zmc2V0OyBcclxuXHJcbiAgICB2b2lkIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIGZsb2F0IGVkZ2UgPSB1X2VkZ2U7XHJcbiAgICAgICAgZmxvYXQgZGlzID0gMC4wO1xyXG4gICAgICAgIHZlYzIgdGV4Q29vcmQgPSB2X3RleENvb3JkO1xyXG4gICAgICAgIGlmICggdGV4Q29vcmQueCA8IGVkZ2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0ZXhDb29yZC55IDwgZWRnZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRpcyA9IGRpc3RhbmNlKCB0ZXhDb29yZCwgdmVjMihlZGdlLCBlZGdlKSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICggdGV4Q29vcmQueSA+ICgxLjAgLSBlZGdlKSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRpcyA9IGRpc3RhbmNlKCB0ZXhDb29yZCwgdmVjMihlZGdlLCAoMS4wIC0gZWRnZSkpICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIHRleENvb3JkLnggPiAoMS4wIC0gZWRnZSkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0ZXhDb29yZC55IDwgZWRnZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRpcyA9IGRpc3RhbmNlKCB0ZXhDb29yZCwgdmVjMigoMS4wIC0gZWRnZSksIGVkZ2UgKSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICggdGV4Q29vcmQueSA+ICgxLjAgLSBlZGdlKSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRpcyA9IGRpc3RhbmNlKCB0ZXhDb29yZCwgdmVjMigoMS4wIC0gZWRnZSksICgxLjAgLSBlZGdlKSApICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgaWYoZGlzID4gMC4wMDEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyDlpJblnIjmsp9cclxuICAgICAgICAgICAgZmxvYXQgZ2FwID0gZWRnZSAqIDAuMDI7XHJcbiAgICAgICAgICAgIGlmKGRpcyA8PSBlZGdlIC0gZ2FwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQoIENDX1RleHR1cmUwLHRleENvb3JkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGRpcyA8PSBlZGdlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyDlubPmu5Hov4fmuKFcclxuICAgICAgICAgICAgICAgIGZsb2F0IHQgPSBzbW9vdGhzdGVwKDAuLGdhcCxlZGdlLWRpcyk7XHJcbiAgICAgICAgICAgICAgICB2ZWM0IGNvbG9yID0gdGV4dHVyZTJEKCBDQ19UZXh0dXJlMCx0ZXhDb29yZCk7XHJcbiAgICAgICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGNvbG9yLnJnYix0KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KDAuLDAuLDAuLDAuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQoIENDX1RleHR1cmUwLHRleENvb3JkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYDtcclxufSJdfQ==
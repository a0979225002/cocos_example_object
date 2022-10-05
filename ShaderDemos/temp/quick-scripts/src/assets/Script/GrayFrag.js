"use strict";
cc._RF.push(module, '4bdbfnUGoRGuZRGr52jBbJu', 'GrayFrag');
// Script/GrayFrag.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GrayFrag = /** @class */ (function () {
    function GrayFrag() {
    }
    GrayFrag.default_vert = "\n    attribute vec4 a_position;\n    attribute vec2 a_texCoord;\n    attribute vec4 a_color;\n    varying vec2 v_texCoord;\n    varying vec4 v_fragmentColor;\n    void main()\n    {\n        gl_Position = CC_PMatrix * a_position;\n        v_fragmentColor = a_color;\n        v_texCoord = a_texCoord;\n    }\n    ";
    GrayFrag.gray_frag = "\n    #ifdef GL_ES\n    precision mediump float;\n    #endif\n    varying vec4 v_fragmentColor;\n    varying vec2 v_texCoord;\n    void main()\n    {\n        vec4 c = v_fragmentColor * texture2D(CC_Texture0, v_texCoord);\n        gl_FragColor.xyz = vec3(0.2126*c.r + 0.7152*c.g + 0.0722*c.b);\n        gl_FragColor.w = c.w;\n    }\n    ";
    return GrayFrag;
}());
exports.default = GrayFrag;

cc._RF.pop();
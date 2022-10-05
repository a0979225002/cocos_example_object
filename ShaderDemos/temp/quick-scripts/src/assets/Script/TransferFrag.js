"use strict";
cc._RF.push(module, '88622uEk39JO7YhDjslLjae', 'TransferFrag');
// Script/TransferFrag.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Transfer = /** @class */ (function () {
    function Transfer() {
    }
    Transfer.vert = "\n    attribute vec4 a_position;\n    attribute vec2 a_texCoord;\n    attribute vec4 a_color;\n    varying vec2 v_texCoord; \n    varying vec4 v_fragmentColor; \n    void main() \n    { \n        gl_Position = CC_PMatrix * a_position;\n        v_fragmentColor = a_color; \n        v_texCoord = a_texCoord; \n    }\n    ";
    Transfer.frag = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    \n    uniform float time;\n\n    varying vec4 v_fragmentColor;\n    varying vec2 v_texCoord;\n    void main()\n    {\n        vec4 c = v_fragmentColor * texture2D(CC_Texture0, v_texCoord);\n        gl_FragColor = c;\n\n        float temp = v_texCoord.x - time;\n        if (temp <= 0.0) {\n            float temp2 = abs(temp);\n            if (temp2 <= 0.2) {\n                gl_FragColor.w = 1.0 - temp2/0.2;\n            } else {\n                gl_FragColor.w = 0.0;\n            }\n        } else {\n            gl_FragColor.w = 1.0;\n        }\n    }\n    ";
    return Transfer;
}());
exports.default = Transfer;

cc._RF.pop();
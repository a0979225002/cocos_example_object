"use strict";
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
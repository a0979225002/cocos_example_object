"use strict";
cc._RF.push(module, 'b03fcXtOQtGK7mL07BlMBdq', 'GaussBlursFrag');
// Script/GaussBlursFrag.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BlursFrag = /** @class */ (function () {
    function BlursFrag() {
    }
    BlursFrag.blurs_vert = "\n    attribute vec4 a_position;\n    attribute vec2 a_texCoord;\n    attribute vec4 a_color;\n    varying vec2 v_texCoord;\n    varying vec4 v_fragmentColor;\n    void main()\n    {\n        gl_Position = CC_PMatrix * a_position;\n        v_fragmentColor = a_color;\n        v_texCoord = a_texCoord;\n    }\n    ";
    BlursFrag.blurs_frag = "\n    #ifdef GL_ES\n    precision mediump float;\n    #endif\n    uniform float bluramount;\n    varying vec2 v_texCoord;\n    vec4 draw(vec2 uv) {\n    return texture2D(CC_Texture0,uv).rgba; \n    }\n    float grid(float var, float size) {\n    return floor(var*size)/size;\n    }\n    float rand(vec2 co){\n    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n    }\n    void mainImage( out vec4 fragColor, in vec2 fragCoord )\n    {\n    vec2 uv = v_texCoord.xy;\n    vec4 blurred_image = vec4(0.);\n    #define repeats 5.\n    for (float i = 0.; i < repeats; i++) { \n    vec2 q = vec2(cos(degrees((i/repeats)*360.)),sin(degrees((i/repeats)*360.))) * (rand(vec2(i,uv.x+uv.y))+bluramount); \n    vec2 uv2 = uv+(q*bluramount);\n    blurred_image += draw(uv2)/2.;\n    q = vec2(cos(degrees((i/repeats)*360.)),sin(degrees((i/repeats)*360.))) * (rand(vec2(i+2.,uv.x+uv.y+24.))+bluramount); \n    uv2 = uv+(q*bluramount);\n    blurred_image += draw(uv2)/2.;\n    }\n    blurred_image /= repeats;\n    fragColor = vec4(blurred_image);\n    }\n    void main()\n    {\n    mainImage(gl_FragColor, gl_FragCoord.xy);\n    }\n    ";
    return BlursFrag;
}());
exports.default = BlursFrag;

cc._RF.pop();
"use strict";
cc._RF.push(module, '1a2e0lgfLVJ2Z1JCdcFAr8X', 'ccShader_Avg_Black_White_Frag');
// Shaders/ccShader_Avg_Black_White_Frag.js

"use strict";

/* 平均值黑白 */
module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec2 v_texCoord;\nvoid main()\n{\n    vec4 v = texture2D(CC_Texture0, v_texCoord).rgba;\n    float f = (v.r + v.g + v.b) / 3.0;\n    gl_FragColor = vec4(f, f, f, v.a);\n}\n";

cc._RF.pop();
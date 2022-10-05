"use strict";
cc._RF.push(module, '73888xoJwVIWrhZc5ygaWzE', 'ccShader_Gray_Frag');
// Shaders/ccShader_Gray_Frag.js

"use strict";

/* 灰度 */
module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec2 v_texCoord;\nvoid main()\n{\n    vec3 v = texture2D(CC_Texture0, v_texCoord).rgb;\n    float f = v.r * 0.299 + v.g * 0.587 + v.b * 0.114;\n    gl_FragColor = vec4(f, f, f, 1.0);\n}\n";

cc._RF.pop();
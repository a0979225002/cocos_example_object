"use strict";
cc._RF.push(module, 'cef0855UTtGd7MuFy73hFpV', 'ccShader_Normal_Frag');
// Shaders/ccShader_Normal_Frag.js

"use strict";

/* 平均值黑白 */
module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec2 v_texCoord;\nvoid main()\n{\n    vec4 v = texture2D(CC_Texture0, v_texCoord).rgba;\n    gl_FragColor = v;\n}\n";

cc._RF.pop();
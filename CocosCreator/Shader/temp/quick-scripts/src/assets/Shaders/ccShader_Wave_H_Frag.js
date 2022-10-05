"use strict";
cc._RF.push(module, 'e6a51LGYIZEC7V61j5KigmH', 'ccShader_Wave_H_Frag');
// Shaders/ccShader_Wave_H_Frag.js

"use strict";

/* 水平波浪 */
module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec2 v_texCoord;\nuniform float motion;\nuniform float angle;\nvoid main()\n{\n    vec2 tmp = v_texCoord;\n    tmp.x = tmp.x + 0.05 * sin(motion +  tmp.y * angle);\n    gl_FragColor = texture2D(CC_Texture0, tmp);\n}\n";

cc._RF.pop();
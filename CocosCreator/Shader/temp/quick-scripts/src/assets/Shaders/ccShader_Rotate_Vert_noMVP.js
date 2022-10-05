"use strict";
cc._RF.push(module, '863c0PZ7UVM+pnGn3gxgnvI', 'ccShader_Rotate_Vert_noMVP');
// Shaders/ccShader_Rotate_Vert_noMVP.js

"use strict";

module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\nattribute vec4 a_position;\n attribute vec2 a_texCoord;\n attribute vec4 a_color;\n varying vec2 v_texCoord;\n varying vec4 v_fragmentColor;\nuniform vec4 rotation;\n void main()\n {\n     gl_Position = CC_PMatrix  * a_position * rotation;\n     v_fragmentColor = a_color;\n     v_texCoord = a_texCoord;\n }\n\n";

cc._RF.pop();
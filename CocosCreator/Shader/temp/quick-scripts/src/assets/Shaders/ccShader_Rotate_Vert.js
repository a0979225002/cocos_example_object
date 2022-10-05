"use strict";
cc._RF.push(module, '30e36EIUwtNQ5fUhzsDC35r', 'ccShader_Rotate_Vert');
// Shaders/ccShader_Rotate_Vert.js

"use strict";

module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\nattribute vec4 a_position;\n attribute vec2 a_texCoord;\n attribute vec4 a_color;\n varying vec2 v_texCoord;\n varying vec4 v_fragmentColor;\nuniform vec4 rotation;\n void main()\n {\n     gl_Position = ( CC_PMatrix * CC_MVMatrix ) * a_position * vec4(0.5,1,1,1);\n     //gl_Position = vec4(0.5,1,1,1);\n     v_fragmentColor = a_color;\n     v_texCoord = a_texCoord;\n }\n";

cc._RF.pop();
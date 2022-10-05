"use strict";
cc._RF.push(module, '294banLxhNOnZhlfOvlwtIA', 'ccShader_lightningBolt_Frag');
// Shaders/ccShader_lightningBolt_Frag.js

"use strict";

module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nvarying vec2 v_texCoord;\nvarying vec4 v_color;\n//uniform sampler2D CC_Texture0;\nuniform float u_opacity;\n\nvoid main() {\n    vec4 texColor=texture2D(CC_Texture0, v_texCoord);\n    gl_FragColor=texColor*v_color*u_opacity;\n}\n\n";

cc._RF.pop();
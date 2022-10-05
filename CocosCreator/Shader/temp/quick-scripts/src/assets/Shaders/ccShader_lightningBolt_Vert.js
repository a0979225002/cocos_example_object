"use strict";
cc._RF.push(module, 'd9877mSE59O4r/jBxSp0Kwo', 'ccShader_lightningBolt_Vert');
// Shaders/ccShader_lightningBolt_Vert.js

"use strict";

module.exports = "\nattribute vec4 a_position;\nattribute vec2 a_texCoord;\nattribute vec4 a_color;\nvarying vec2 v_texCoord;\nvarying vec4 v_color;\nvoid main()\n{\n    vec4 pos=vec4(a_position.xy,0,1);\n    gl_Position = CC_MVPMatrix * pos;\n    v_texCoord = a_texCoord;\n    v_color = a_color;\n    \n}\n";

cc._RF.pop();
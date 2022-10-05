"use strict";
cc._RF.push(module, 'ac442tsTRdFYpIFqGfHWzCV', 'ccShader_Emboss_Frag');
// Shaders/ccShader_Emboss_Frag.js

"use strict";

/* 浮雕 */
module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec2 v_texCoord;\nuniform float widthStep;\nuniform float heightStep;\nconst float stride = 2.0;\nvoid main()\n{\n    vec3 tmpColor = texture2D(CC_Texture0, v_texCoord + vec2(widthStep * stride, heightStep * stride)).rgb;\n    tmpColor = texture2D(CC_Texture0, v_texCoord).rgb - tmpColor + 0.5;\n    float f = (tmpColor.r + tmpColor.g + tmpColor.b) / 3.0;\n    gl_FragColor = vec4(f, f, f, 1.0);\n}\n\n";

cc._RF.pop();
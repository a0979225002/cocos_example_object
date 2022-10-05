"use strict";
cc._RF.push(module, 'd224fzmSIhPOo16XoV1xpYS', 'ccShader_Glass_Frag');
// Shaders/ccShader_Glass_Frag.js

"use strict";

/* 磨砂玻璃 1.0 */

/* 磨砂玻璃 3.0 */

/* 磨砂玻璃 6.0 */
module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec2 v_texCoord;\nuniform float widthStep;\nuniform float heightStep;\nuniform float blurRadiusScale;\nconst float blurRadius = 6.0;\nconst float blurPixels = (blurRadius * 2.0 + 1.0) * (blurRadius * 2.0 + 1.0);\nfloat random(vec3 scale, float seed) {\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\nvoid main()\n{\n    vec3 sumColor = vec3(0.0, 0.0, 0.0);  \n    for(float fy = -blurRadius; fy <= blurRadius; ++fy)\n    {\n        float dir = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n        for(float fx = -blurRadius; fx <= blurRadius; ++fx)\n        {\n            float dis = distance(vec2(fx * widthStep, fy * heightStep), vec2(0.0, 0.0)) * blurRadiusScale;\n            vec2 coord = vec2(dis * cos(dir), dis * sin(dir));\n            sumColor += texture2D(CC_Texture0, v_texCoord + coord).rgb;\n        }\n    }\n    gl_FragColor = vec4(sumColor / blurPixels, 1.0);\n}\n";

cc._RF.pop();
"use strict";
cc._RF.push(module, '337ebBhO3FAIo6X9bI3so70', 'ccShader_Effect05_Frag');
// Shaders/ccShader_Effect05_Frag.js

"use strict";

module.exports = "\n#ifdef GL_ES\nprecision highp float;\n#endif\n\nuniform float time;\nuniform vec2 mouse;\nuniform vec2 resolution;\n\n#define M_PI 3.1415926535897932384626433832795\n\nvoid main( void ) {\n  float time2 = time;\n  vec2 mouse2 = mouse;\n\tfloat radius = 0.75;\n\tvec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);\n\t// assign color only to the points that are inside of the circle\n\tgl_FragColor = vec4(smoothstep(0.0,1.0, pow(radius - length(p),0.05) ));\t\n}\n\n\n";

cc._RF.pop();
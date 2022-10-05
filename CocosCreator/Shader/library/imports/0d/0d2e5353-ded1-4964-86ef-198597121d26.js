"use strict";
cc._RF.push(module, '0d2e5NT3tFJZIbvGYWXEh0m', 'ccShader_Effect06_Frag');
// Shaders/ccShader_Effect06_Frag.js

"use strict";

module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\n// Pygolampis 2\n\nuniform float time;\nuniform vec2 mouse;\nuniform vec2 resolution;\n\nconst int numBlobs = 128;\n\nvoid main( void ) {\n\n\tvec2 p = (gl_FragCoord.xy / resolution.x) - vec2(0.5, 0.5 * (resolution.y / resolution.x));\n\n\tvec3 c = vec3(0.0);\n\tfor (int i=0; i<numBlobs; i++)\n\t{\n\t\tfloat px = sin(float(i)*0.1 + 0.5) * 0.4;\n\t\tfloat py = sin(float(i*i)*0.01 + 0.4*time) * 0.2;\n\t\tfloat pz = sin(float(i*i*i)*0.001 + 0.3*time) * 0.3 + 0.4;\n\t\tfloat radius = 0.005 / pz;\n\t\tvec2 pos = p + vec2(px, py);\n\t\tfloat z = radius - length(pos);\n\t\tif (z < 0.0) z = 0.0;\n\t\tfloat cc = z / radius;\n\t\tc += vec3(cc * (sin(float(i*i*i)) * 0.5 + 0.5), cc * (sin(float(i*i*i*i*i)) * 0.5 + 0.5), cc * (sin(float(i*i*i*i)) * 0.5 + 0.5));\n\t}\n\n\tgl_FragColor = vec4(c.x+p.y, c.y+p.y, c.z+p.y, 1.0);\n}\n\n\n";

cc._RF.pop();
"use strict";
cc._RF.push(module, '11f07p5MPxF6pKNkwuMvZHu', 'ccShader_Effect03_Frag');
// Shaders/ccShader_Effect03_Frag.js

"use strict";

module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform float time;\nuniform vec2 mouse_touch;\nuniform vec2 resolution;\n\nfloat sphIntersect(vec3 ro, vec3 rd, vec4 sph)\n{\n    vec3 oc = ro - sph.xyz;\n    float b = dot( oc, rd );\n    float c = dot( oc, oc ) - sph.w*sph.w;\n    float h = b*b - c;\n    if( h<0.0 ) return -1.0;\n    h = sqrt( h );\n    return -b - h;\n}\n\nvoid main()\n{\n\tvec2 mo = mouse_touch * 2.0 - 1.0;\n\tvec3 col = vec3(0.5, 1, 1);\n\tfloat aspect = resolution.x / resolution.y;\n\n\tvec2 uv = (gl_FragCoord.xy / resolution.xy) * 2.0 - 1.0;\n\tuv.x *= aspect;\n\n\tvec3 rdir = normalize(vec3(uv, 3.0));\n\tvec3 rpos = vec3(0, 0, -10);\n\n\tfloat dist = sphIntersect(rpos, rdir, vec4(0, 0, 0, 1.5));\n\tif(dist != -1.0){\n\t\tvec3 ldir = vec3(mo.x, mo.y, -1.0);\n\t\tvec3 snorm = normalize(rpos + rdir * dist);\n\t\tcol = vec3(1, 0, 0) * max(dot(snorm, ldir), 0.0);\n\t}\n\n\tcol = pow(col, vec3(0.454545));\n\tgl_FragColor = vec4(col, 1.0);\n}\n\n\n";

cc._RF.pop();
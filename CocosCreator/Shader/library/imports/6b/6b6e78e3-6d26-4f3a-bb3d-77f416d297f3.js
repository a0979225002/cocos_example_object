"use strict";
cc._RF.push(module, '6b6e7jjbSZPOrs9d/QW0pfz', 'ccShader_Effect22_Frag');
// Shaders/ccShader_Effect22_Frag.js

"use strict";

module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform float time;\nuniform vec2 mouse_touch;\nuniform vec2 resolution;\n\nvoid main( void ) {\n\n\tvec2 p = (2.0*gl_FragCoord.xy-resolution.xy)/resolution.y;\n    float tau = 3.1415926535;\n    float a = sin(time);\n    float r = length(p)*0.75;\n    vec2 uv = vec2(a/tau,r);\n\t\n\t//get the color\n\tfloat xCol = (uv.x - (time / 3.0)) * 3.0;\n\txCol = mod(xCol, 3.0);\n\tvec3 horColour = vec3(sin(time*2.99)*1.25, sin(time*3.111)*0.25, sin(time*1.31)*0.25);\n\t\n\tif (xCol < .1) {\n\t\t\n\t\thorColour.r += 1.0 - xCol;\n\t\thorColour.g += xCol;\n\t}\n\telse if (xCol < 0.4) {\n\t\t\n\t\txCol -= 1.0;\n\t\thorColour.g += 1.0 - xCol;\n\t\thorColour.b += xCol;\n\t}\n\telse {\n\t\t\n\t\txCol -= 2.0;\n\t\thorColour.b += 1.0 - xCol;\n\t\thorColour.r += xCol;\n\t}\n\n\t// draw color beam\n\tuv = (3.0 * uv) - abs(sin(time));\n\tfloat beamWidth = .0+1.1*abs((sin(time)*0.2*2.0) / (3.0 * uv.x * uv.y));\n\tvec3 horBeam = vec3(beamWidth);\n\tgl_FragColor = vec4((( horBeam) * horColour), 1.0);\n}\n\n";

cc._RF.pop();
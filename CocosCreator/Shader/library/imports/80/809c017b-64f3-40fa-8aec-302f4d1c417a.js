"use strict";
cc._RF.push(module, '809c0F7ZPNA+orsMC9NHEF6', 'ccShader_Circle_Light_Frag');
// Shaders/ccShader_Circle_Light_Frag.js

"use strict";

module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec2 v_texCoord;\nuniform float time;\nuniform vec2 mouse_touch;\nuniform vec2 resolution;\n\nvoid main( void ) {\n  float t=time;\n  vec2 touch=mouse_touch;\n  vec2 resolution2s=resolution;\n  vec2 position = ((gl_FragCoord.xy / resolution.xy) * 2. - 1.) * vec2(resolution.x / resolution.y, 1.0);\n  float d = abs(0.1 + length(position) - 0.5 * abs(sin(time))) * 5.0;\n  vec3 sumColor = vec3(0.0, 0.0, 0.0);\n\tsumColor += texture2D(CC_Texture0, v_texCoord).rgb;\n\tgl_FragColor = vec4(sumColor.r/d, sumColor.g, sumColor.b, mouse_touch.x/800.0 );\n}\n";

cc._RF.pop();
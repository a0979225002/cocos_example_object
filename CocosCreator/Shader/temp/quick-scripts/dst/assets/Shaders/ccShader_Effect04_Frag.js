
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shaders/ccShader_Effect04_Frag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '00676n8pVBFYJsX3Vb+nAeV', 'ccShader_Effect04_Frag');
// Shaders/ccShader_Effect04_Frag.js

"use strict";

module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform float time;\nuniform vec2 mouse_touch;\nuniform vec2 resolution;\n\nvoid main( void ) {\n\n\tvec2 p = (2.0*gl_FragCoord.xy-resolution.xy)/resolution.y;\n    float tau = 3.1415926535;\n    float a = sin(time);\n    float r = length(p)*0.75;\n    vec2 uv = vec2(a/tau,r);\n\t\n\t//get the color\n\tfloat xCol = (uv.x - (time / 3.0)) * 3.0;\n\txCol = mod(xCol, 3.0);\n\tvec3 horColour = vec3(sin(time*2.99)*1.25, sin(time*3.111)*0.25, sin(time*1.31)*0.25);\n\t\n\tif (xCol < .1) {\n\t\t\n\t\thorColour.r += 1.0 - xCol;\n\t\thorColour.g += xCol;\n\t}\n\telse if (xCol < 0.4) {\n\t\t\n\t\txCol -= 1.0;\n\t\thorColour.g += 1.0 - xCol;\n\t\thorColour.b += xCol;\n\t}\n\telse {\n\t\t\n\t\txCol -= 2.0;\n\t\thorColour.b += 1.0 - xCol;\n\t\thorColour.r += xCol;\n\t}\n\n\t// draw color beam\n\tuv = (3.0 * uv) - abs(sin(time));\n\tfloat beamWidth = .0+1.1*abs((sin(time)*0.2*2.0) / (3.0 * uv.x * uv.y));\n\tvec3 horBeam = vec3(beamWidth);\n\tgl_FragColor = vec4((( horBeam) * horColour), 1.0);\n}\n\n";

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyc1xcY2NTaGFkZXJfRWZmZWN0MDRfRnJhZy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLE9BQVAiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID1cclxuYFxyXG4jaWZkZWYgR0xfRVNcclxucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcbiNlbmRpZlxyXG5cclxudW5pZm9ybSBmbG9hdCB0aW1lO1xyXG51bmlmb3JtIHZlYzIgbW91c2VfdG91Y2g7XHJcbnVuaWZvcm0gdmVjMiByZXNvbHV0aW9uO1xyXG5cclxudm9pZCBtYWluKCB2b2lkICkge1xyXG5cclxuXHR2ZWMyIHAgPSAoMi4wKmdsX0ZyYWdDb29yZC54eS1yZXNvbHV0aW9uLnh5KS9yZXNvbHV0aW9uLnk7XHJcbiAgICBmbG9hdCB0YXUgPSAzLjE0MTU5MjY1MzU7XHJcbiAgICBmbG9hdCBhID0gc2luKHRpbWUpO1xyXG4gICAgZmxvYXQgciA9IGxlbmd0aChwKSowLjc1O1xyXG4gICAgdmVjMiB1diA9IHZlYzIoYS90YXUscik7XHJcblx0XHJcblx0Ly9nZXQgdGhlIGNvbG9yXHJcblx0ZmxvYXQgeENvbCA9ICh1di54IC0gKHRpbWUgLyAzLjApKSAqIDMuMDtcclxuXHR4Q29sID0gbW9kKHhDb2wsIDMuMCk7XHJcblx0dmVjMyBob3JDb2xvdXIgPSB2ZWMzKHNpbih0aW1lKjIuOTkpKjEuMjUsIHNpbih0aW1lKjMuMTExKSowLjI1LCBzaW4odGltZSoxLjMxKSowLjI1KTtcclxuXHRcclxuXHRpZiAoeENvbCA8IC4xKSB7XHJcblx0XHRcclxuXHRcdGhvckNvbG91ci5yICs9IDEuMCAtIHhDb2w7XHJcblx0XHRob3JDb2xvdXIuZyArPSB4Q29sO1xyXG5cdH1cclxuXHRlbHNlIGlmICh4Q29sIDwgMC40KSB7XHJcblx0XHRcclxuXHRcdHhDb2wgLT0gMS4wO1xyXG5cdFx0aG9yQ29sb3VyLmcgKz0gMS4wIC0geENvbDtcclxuXHRcdGhvckNvbG91ci5iICs9IHhDb2w7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0XHJcblx0XHR4Q29sIC09IDIuMDtcclxuXHRcdGhvckNvbG91ci5iICs9IDEuMCAtIHhDb2w7XHJcblx0XHRob3JDb2xvdXIuciArPSB4Q29sO1xyXG5cdH1cclxuXHJcblx0Ly8gZHJhdyBjb2xvciBiZWFtXHJcblx0dXYgPSAoMy4wICogdXYpIC0gYWJzKHNpbih0aW1lKSk7XHJcblx0ZmxvYXQgYmVhbVdpZHRoID0gLjArMS4xKmFicygoc2luKHRpbWUpKjAuMioyLjApIC8gKDMuMCAqIHV2LnggKiB1di55KSk7XHJcblx0dmVjMyBob3JCZWFtID0gdmVjMyhiZWFtV2lkdGgpO1xyXG5cdGdsX0ZyYWdDb2xvciA9IHZlYzQoKCggaG9yQmVhbSkgKiBob3JDb2xvdXIpLCAxLjApO1xyXG59XHJcblxyXG5gIl19
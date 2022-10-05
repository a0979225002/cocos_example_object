
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shaders/ccShader_LightEffect_Frag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '96c33w025dFXoQ0Enyk0Zq4', 'ccShader_LightEffect_Frag');
// Shaders/ccShader_LightEffect_Frag.js

"use strict";

module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec2 v_texCoord;\nuniform float time;\nuniform vec2 mouse_touch;\nuniform vec2 resolution;\nconst float minRStart = -2.0;\nconst float maxRStart = 1.0;\nconst float minIStart = -1.0;\nconst float maxIStart = 1.0;\nconst int maxIterations = 50;\n// Immaginary number: has a real and immaginary part\nstruct complexNumber\n{\n\tfloat r;\n\tfloat i;\n};\nvoid main( void ) {\n\tfloat minR = minRStart; // change these in order to zoom\n\tfloat maxR = maxRStart;\n\tfloat minI = minIStart;\n\tfloat maxI = maxIStart;\n\t\n\tvec3 col = vec3(0,0,0);\n\t\n\tvec2 pos = gl_FragCoord.xy / resolution;\n\t\n\t// The complex number of the current pixel.\n\tcomplexNumber im;\n\tim.r = minR + (maxR-minR)*pos.x; // LERP within range\n\tim.i = minI + (maxI-minI)*pos.y;\n\t\n\tcomplexNumber z;\n\tz.r = im.r;\n\tz.i = im.i;\n\t\n\tbool def = true; // is the number (im) definite?\n\tint iterations = 0;\n\tfor(int i = 0; i< maxIterations; i++)\n\t{\n\t\tif(sqrt(z.r*z.r + z.i*z.i) > 2.0) // abs(z) = distance from origo\n\t\t{\n\t\t\tdef = false;\n\t\t\titerations = i; \n\t\t\tbreak;\n\t\t}\n\t\t// Mandelbrot formula: zNew = zOld*zOld + im\n\t\t// z = (a+bi) => z*z = (a+bi)(a+bi) = a*a - b*b + 2abi\n\t\tcomplexNumber zSquared; \n\t\tzSquared.r = z.r*z.r - z.i*z.i; // real part: a*a - b*b\n\t\tzSquared.i = 2.0*z.r*z.i; // immaginary part: 2abi\n\t\t// add: rSquared + im -> simple: just add the real and immaginary parts\n\t\tz.r = zSquared.r + im.r; // add real parts\n\t\tz.i = zSquared.i + im.i; // add immaginary parts\n\t}\n\tif(def) // it is definite => colour it black\n\t\tcol.rgb = vec3(0,0,0);\n\telse // the number grows to infinity => colour it by the number of iterations \n\t{\n\t\tfloat i = float(iterations)/float(maxIterations);\n\t\tcol.r = smoothstep(0.0,0.5, i);\n\t\tcol.g = smoothstep(0.0,1.0,i);\n\t\tcol.b = smoothstep(0.3,1.0, i);\n\t}\n\tgl_FragColor.rgb = col;\n}\n\n";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyc1xcY2NTaGFkZXJfTGlnaHRFZmZlY3RfRnJhZy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLE9BQVAiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID1cclxuYFxyXG4jaWZkZWYgR0xfRVNcclxucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcbiNlbmRpZlxyXG52YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxudW5pZm9ybSBmbG9hdCB0aW1lO1xyXG51bmlmb3JtIHZlYzIgbW91c2VfdG91Y2g7XHJcbnVuaWZvcm0gdmVjMiByZXNvbHV0aW9uO1xyXG5jb25zdCBmbG9hdCBtaW5SU3RhcnQgPSAtMi4wO1xyXG5jb25zdCBmbG9hdCBtYXhSU3RhcnQgPSAxLjA7XHJcbmNvbnN0IGZsb2F0IG1pbklTdGFydCA9IC0xLjA7XHJcbmNvbnN0IGZsb2F0IG1heElTdGFydCA9IDEuMDtcclxuY29uc3QgaW50IG1heEl0ZXJhdGlvbnMgPSA1MDtcclxuLy8gSW1tYWdpbmFyeSBudW1iZXI6IGhhcyBhIHJlYWwgYW5kIGltbWFnaW5hcnkgcGFydFxyXG5zdHJ1Y3QgY29tcGxleE51bWJlclxyXG57XHJcblx0ZmxvYXQgcjtcclxuXHRmbG9hdCBpO1xyXG59O1xyXG52b2lkIG1haW4oIHZvaWQgKSB7XHJcblx0ZmxvYXQgbWluUiA9IG1pblJTdGFydDsgLy8gY2hhbmdlIHRoZXNlIGluIG9yZGVyIHRvIHpvb21cclxuXHRmbG9hdCBtYXhSID0gbWF4UlN0YXJ0O1xyXG5cdGZsb2F0IG1pbkkgPSBtaW5JU3RhcnQ7XHJcblx0ZmxvYXQgbWF4SSA9IG1heElTdGFydDtcclxuXHRcclxuXHR2ZWMzIGNvbCA9IHZlYzMoMCwwLDApO1xyXG5cdFxyXG5cdHZlYzIgcG9zID0gZ2xfRnJhZ0Nvb3JkLnh5IC8gcmVzb2x1dGlvbjtcclxuXHRcclxuXHQvLyBUaGUgY29tcGxleCBudW1iZXIgb2YgdGhlIGN1cnJlbnQgcGl4ZWwuXHJcblx0Y29tcGxleE51bWJlciBpbTtcclxuXHRpbS5yID0gbWluUiArIChtYXhSLW1pblIpKnBvcy54OyAvLyBMRVJQIHdpdGhpbiByYW5nZVxyXG5cdGltLmkgPSBtaW5JICsgKG1heEktbWluSSkqcG9zLnk7XHJcblx0XHJcblx0Y29tcGxleE51bWJlciB6O1xyXG5cdHouciA9IGltLnI7XHJcblx0ei5pID0gaW0uaTtcclxuXHRcclxuXHRib29sIGRlZiA9IHRydWU7IC8vIGlzIHRoZSBudW1iZXIgKGltKSBkZWZpbml0ZT9cclxuXHRpbnQgaXRlcmF0aW9ucyA9IDA7XHJcblx0Zm9yKGludCBpID0gMDsgaTwgbWF4SXRlcmF0aW9uczsgaSsrKVxyXG5cdHtcclxuXHRcdGlmKHNxcnQoei5yKnouciArIHouaSp6LmkpID4gMi4wKSAvLyBhYnMoeikgPSBkaXN0YW5jZSBmcm9tIG9yaWdvXHJcblx0XHR7XHJcblx0XHRcdGRlZiA9IGZhbHNlO1xyXG5cdFx0XHRpdGVyYXRpb25zID0gaTsgXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0Ly8gTWFuZGVsYnJvdCBmb3JtdWxhOiB6TmV3ID0gek9sZCp6T2xkICsgaW1cclxuXHRcdC8vIHogPSAoYStiaSkgPT4geip6ID0gKGErYmkpKGErYmkpID0gYSphIC0gYipiICsgMmFiaVxyXG5cdFx0Y29tcGxleE51bWJlciB6U3F1YXJlZDsgXHJcblx0XHR6U3F1YXJlZC5yID0gei5yKnouciAtIHouaSp6Lmk7IC8vIHJlYWwgcGFydDogYSphIC0gYipiXHJcblx0XHR6U3F1YXJlZC5pID0gMi4wKnoucip6Lmk7IC8vIGltbWFnaW5hcnkgcGFydDogMmFiaVxyXG5cdFx0Ly8gYWRkOiByU3F1YXJlZCArIGltIC0+IHNpbXBsZToganVzdCBhZGQgdGhlIHJlYWwgYW5kIGltbWFnaW5hcnkgcGFydHNcclxuXHRcdHouciA9IHpTcXVhcmVkLnIgKyBpbS5yOyAvLyBhZGQgcmVhbCBwYXJ0c1xyXG5cdFx0ei5pID0gelNxdWFyZWQuaSArIGltLmk7IC8vIGFkZCBpbW1hZ2luYXJ5IHBhcnRzXHJcblx0fVxyXG5cdGlmKGRlZikgLy8gaXQgaXMgZGVmaW5pdGUgPT4gY29sb3VyIGl0IGJsYWNrXHJcblx0XHRjb2wucmdiID0gdmVjMygwLDAsMCk7XHJcblx0ZWxzZSAvLyB0aGUgbnVtYmVyIGdyb3dzIHRvIGluZmluaXR5ID0+IGNvbG91ciBpdCBieSB0aGUgbnVtYmVyIG9mIGl0ZXJhdGlvbnMgXHJcblx0e1xyXG5cdFx0ZmxvYXQgaSA9IGZsb2F0KGl0ZXJhdGlvbnMpL2Zsb2F0KG1heEl0ZXJhdGlvbnMpO1xyXG5cdFx0Y29sLnIgPSBzbW9vdGhzdGVwKDAuMCwwLjUsIGkpO1xyXG5cdFx0Y29sLmcgPSBzbW9vdGhzdGVwKDAuMCwxLjAsaSk7XHJcblx0XHRjb2wuYiA9IHNtb290aHN0ZXAoMC4zLDEuMCwgaSk7XHJcblx0fVxyXG5cdGdsX0ZyYWdDb2xvci5yZ2IgPSBjb2w7XHJcbn1cclxuXHJcbmAiXX0=
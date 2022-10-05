
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shaders/ccShader_Effect06_Frag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0d2e5NT3tFJZIbvGYWXEh0m', 'ccShader_Effect06_Frag');
// Shaders/ccShader_Effect06_Frag.js

"use strict";

module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\n// Pygolampis 2\n\nuniform float time;\nuniform vec2 mouse;\nuniform vec2 resolution;\n\nconst int numBlobs = 128;\n\nvoid main( void ) {\n\n\tvec2 p = (gl_FragCoord.xy / resolution.x) - vec2(0.5, 0.5 * (resolution.y / resolution.x));\n\n\tvec3 c = vec3(0.0);\n\tfor (int i=0; i<numBlobs; i++)\n\t{\n\t\tfloat px = sin(float(i)*0.1 + 0.5) * 0.4;\n\t\tfloat py = sin(float(i*i)*0.01 + 0.4*time) * 0.2;\n\t\tfloat pz = sin(float(i*i*i)*0.001 + 0.3*time) * 0.3 + 0.4;\n\t\tfloat radius = 0.005 / pz;\n\t\tvec2 pos = p + vec2(px, py);\n\t\tfloat z = radius - length(pos);\n\t\tif (z < 0.0) z = 0.0;\n\t\tfloat cc = z / radius;\n\t\tc += vec3(cc * (sin(float(i*i*i)) * 0.5 + 0.5), cc * (sin(float(i*i*i*i*i)) * 0.5 + 0.5), cc * (sin(float(i*i*i*i)) * 0.5 + 0.5));\n\t}\n\n\tgl_FragColor = vec4(c.x+p.y, c.y+p.y, c.z+p.y, 1.0);\n}\n\n\n";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyc1xcY2NTaGFkZXJfRWZmZWN0MDZfRnJhZy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLE9BQVAiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID1cclxuYFxyXG4jaWZkZWYgR0xfRVNcclxucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcbiNlbmRpZlxyXG5cclxuLy8gUHlnb2xhbXBpcyAyXHJcblxyXG51bmlmb3JtIGZsb2F0IHRpbWU7XHJcbnVuaWZvcm0gdmVjMiBtb3VzZTtcclxudW5pZm9ybSB2ZWMyIHJlc29sdXRpb247XHJcblxyXG5jb25zdCBpbnQgbnVtQmxvYnMgPSAxMjg7XHJcblxyXG52b2lkIG1haW4oIHZvaWQgKSB7XHJcblxyXG5cdHZlYzIgcCA9IChnbF9GcmFnQ29vcmQueHkgLyByZXNvbHV0aW9uLngpIC0gdmVjMigwLjUsIDAuNSAqIChyZXNvbHV0aW9uLnkgLyByZXNvbHV0aW9uLngpKTtcclxuXHJcblx0dmVjMyBjID0gdmVjMygwLjApO1xyXG5cdGZvciAoaW50IGk9MDsgaTxudW1CbG9iczsgaSsrKVxyXG5cdHtcclxuXHRcdGZsb2F0IHB4ID0gc2luKGZsb2F0KGkpKjAuMSArIDAuNSkgKiAwLjQ7XHJcblx0XHRmbG9hdCBweSA9IHNpbihmbG9hdChpKmkpKjAuMDEgKyAwLjQqdGltZSkgKiAwLjI7XHJcblx0XHRmbG9hdCBweiA9IHNpbihmbG9hdChpKmkqaSkqMC4wMDEgKyAwLjMqdGltZSkgKiAwLjMgKyAwLjQ7XHJcblx0XHRmbG9hdCByYWRpdXMgPSAwLjAwNSAvIHB6O1xyXG5cdFx0dmVjMiBwb3MgPSBwICsgdmVjMihweCwgcHkpO1xyXG5cdFx0ZmxvYXQgeiA9IHJhZGl1cyAtIGxlbmd0aChwb3MpO1xyXG5cdFx0aWYgKHogPCAwLjApIHogPSAwLjA7XHJcblx0XHRmbG9hdCBjYyA9IHogLyByYWRpdXM7XHJcblx0XHRjICs9IHZlYzMoY2MgKiAoc2luKGZsb2F0KGkqaSppKSkgKiAwLjUgKyAwLjUpLCBjYyAqIChzaW4oZmxvYXQoaSppKmkqaSppKSkgKiAwLjUgKyAwLjUpLCBjYyAqIChzaW4oZmxvYXQoaSppKmkqaSkpICogMC41ICsgMC41KSk7XHJcblx0fVxyXG5cclxuXHRnbF9GcmFnQ29sb3IgPSB2ZWM0KGMueCtwLnksIGMueStwLnksIGMueitwLnksIDEuMCk7XHJcbn1cclxuXHJcblxyXG5gIl19
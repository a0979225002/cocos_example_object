
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shaders/ccShader_Effect03_Frag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '11f07p5MPxF6pKNkwuMvZHu', 'ccShader_Effect03_Frag');
// Shaders/ccShader_Effect03_Frag.js

"use strict";

module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform float time;\nuniform vec2 mouse_touch;\nuniform vec2 resolution;\n\nfloat sphIntersect(vec3 ro, vec3 rd, vec4 sph)\n{\n    vec3 oc = ro - sph.xyz;\n    float b = dot( oc, rd );\n    float c = dot( oc, oc ) - sph.w*sph.w;\n    float h = b*b - c;\n    if( h<0.0 ) return -1.0;\n    h = sqrt( h );\n    return -b - h;\n}\n\nvoid main()\n{\n\tvec2 mo = mouse_touch * 2.0 - 1.0;\n\tvec3 col = vec3(0.5, 1, 1);\n\tfloat aspect = resolution.x / resolution.y;\n\n\tvec2 uv = (gl_FragCoord.xy / resolution.xy) * 2.0 - 1.0;\n\tuv.x *= aspect;\n\n\tvec3 rdir = normalize(vec3(uv, 3.0));\n\tvec3 rpos = vec3(0, 0, -10);\n\n\tfloat dist = sphIntersect(rpos, rdir, vec4(0, 0, 0, 1.5));\n\tif(dist != -1.0){\n\t\tvec3 ldir = vec3(mo.x, mo.y, -1.0);\n\t\tvec3 snorm = normalize(rpos + rdir * dist);\n\t\tcol = vec3(1, 0, 0) * max(dot(snorm, ldir), 0.0);\n\t}\n\n\tcol = pow(col, vec3(0.454545));\n\tgl_FragColor = vec4(col, 1.0);\n}\n\n\n";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyc1xcY2NTaGFkZXJfRWZmZWN0MDNfRnJhZy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLE9BQVAiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID1cclxuYFxyXG4jaWZkZWYgR0xfRVNcclxucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcbiNlbmRpZlxyXG5cclxudW5pZm9ybSBmbG9hdCB0aW1lO1xyXG51bmlmb3JtIHZlYzIgbW91c2VfdG91Y2g7XHJcbnVuaWZvcm0gdmVjMiByZXNvbHV0aW9uO1xyXG5cclxuZmxvYXQgc3BoSW50ZXJzZWN0KHZlYzMgcm8sIHZlYzMgcmQsIHZlYzQgc3BoKVxyXG57XHJcbiAgICB2ZWMzIG9jID0gcm8gLSBzcGgueHl6O1xyXG4gICAgZmxvYXQgYiA9IGRvdCggb2MsIHJkICk7XHJcbiAgICBmbG9hdCBjID0gZG90KCBvYywgb2MgKSAtIHNwaC53KnNwaC53O1xyXG4gICAgZmxvYXQgaCA9IGIqYiAtIGM7XHJcbiAgICBpZiggaDwwLjAgKSByZXR1cm4gLTEuMDtcclxuICAgIGggPSBzcXJ0KCBoICk7XHJcbiAgICByZXR1cm4gLWIgLSBoO1xyXG59XHJcblxyXG52b2lkIG1haW4oKVxyXG57XHJcblx0dmVjMiBtbyA9IG1vdXNlX3RvdWNoICogMi4wIC0gMS4wO1xyXG5cdHZlYzMgY29sID0gdmVjMygwLjUsIDEsIDEpO1xyXG5cdGZsb2F0IGFzcGVjdCA9IHJlc29sdXRpb24ueCAvIHJlc29sdXRpb24ueTtcclxuXHJcblx0dmVjMiB1diA9IChnbF9GcmFnQ29vcmQueHkgLyByZXNvbHV0aW9uLnh5KSAqIDIuMCAtIDEuMDtcclxuXHR1di54ICo9IGFzcGVjdDtcclxuXHJcblx0dmVjMyByZGlyID0gbm9ybWFsaXplKHZlYzModXYsIDMuMCkpO1xyXG5cdHZlYzMgcnBvcyA9IHZlYzMoMCwgMCwgLTEwKTtcclxuXHJcblx0ZmxvYXQgZGlzdCA9IHNwaEludGVyc2VjdChycG9zLCByZGlyLCB2ZWM0KDAsIDAsIDAsIDEuNSkpO1xyXG5cdGlmKGRpc3QgIT0gLTEuMCl7XHJcblx0XHR2ZWMzIGxkaXIgPSB2ZWMzKG1vLngsIG1vLnksIC0xLjApO1xyXG5cdFx0dmVjMyBzbm9ybSA9IG5vcm1hbGl6ZShycG9zICsgcmRpciAqIGRpc3QpO1xyXG5cdFx0Y29sID0gdmVjMygxLCAwLCAwKSAqIG1heChkb3Qoc25vcm0sIGxkaXIpLCAwLjApO1xyXG5cdH1cclxuXHJcblx0Y29sID0gcG93KGNvbCwgdmVjMygwLjQ1NDU0NSkpO1xyXG5cdGdsX0ZyYWdDb2xvciA9IHZlYzQoY29sLCAxLjApO1xyXG59XHJcblxyXG5cclxuYFxyXG4iXX0=
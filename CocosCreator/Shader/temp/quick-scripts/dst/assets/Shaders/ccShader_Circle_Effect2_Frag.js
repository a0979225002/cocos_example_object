
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Shaders/ccShader_Circle_Effect2_Frag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '17861m3GZBEGILbyvFOnYO1', 'ccShader_Circle_Effect2_Frag');
// Shaders/ccShader_Circle_Effect2_Frag.js

"use strict";

module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec2 v_texCoord;\nuniform float time;\nuniform vec2 mouse_touch;\nuniform vec2 resolution;\n\n\nvoid main( void ) {\n\n\tvec2 position = ( gl_FragCoord.xy / resolution.xy ) + mouse_touch / 4.0;\n\n\tfloat color = 0.0;\n\tcolor += sin( position.x * cos( time / 15.0 ) * 80.0 ) + cos( position.y * cos( time / 15.0 ) * 10.0 );\n\tcolor += sin( position.y * sin( time / 10.0 ) * 40.0 ) + cos( position.x * sin( time / 25.0 ) * 40.0 );\n\tcolor += sin( position.x * sin( time / 5.0 ) * 10.0 ) + sin( position.y * sin( time / 35.0 ) * 80.0 );\n\tcolor *= sin( time / 10.0 ) * 0.5;\n\n\tgl_FragColor = vec4( vec3( color, color * 0.5, sin( color + time / 3.0 ) * 0.75 ), 1.0 );\n\n}\n";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hhZGVyc1xcY2NTaGFkZXJfQ2lyY2xlX0VmZmVjdDJfRnJhZy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLE9BQVAiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID1cclxuYFxyXG4jaWZkZWYgR0xfRVNcclxucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcbiNlbmRpZlxyXG52YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxudW5pZm9ybSBmbG9hdCB0aW1lO1xyXG51bmlmb3JtIHZlYzIgbW91c2VfdG91Y2g7XHJcbnVuaWZvcm0gdmVjMiByZXNvbHV0aW9uO1xyXG5cclxuXHJcbnZvaWQgbWFpbiggdm9pZCApIHtcclxuXHJcblx0dmVjMiBwb3NpdGlvbiA9ICggZ2xfRnJhZ0Nvb3JkLnh5IC8gcmVzb2x1dGlvbi54eSApICsgbW91c2VfdG91Y2ggLyA0LjA7XHJcblxyXG5cdGZsb2F0IGNvbG9yID0gMC4wO1xyXG5cdGNvbG9yICs9IHNpbiggcG9zaXRpb24ueCAqIGNvcyggdGltZSAvIDE1LjAgKSAqIDgwLjAgKSArIGNvcyggcG9zaXRpb24ueSAqIGNvcyggdGltZSAvIDE1LjAgKSAqIDEwLjAgKTtcclxuXHRjb2xvciArPSBzaW4oIHBvc2l0aW9uLnkgKiBzaW4oIHRpbWUgLyAxMC4wICkgKiA0MC4wICkgKyBjb3MoIHBvc2l0aW9uLnggKiBzaW4oIHRpbWUgLyAyNS4wICkgKiA0MC4wICk7XHJcblx0Y29sb3IgKz0gc2luKCBwb3NpdGlvbi54ICogc2luKCB0aW1lIC8gNS4wICkgKiAxMC4wICkgKyBzaW4oIHBvc2l0aW9uLnkgKiBzaW4oIHRpbWUgLyAzNS4wICkgKiA4MC4wICk7XHJcblx0Y29sb3IgKj0gc2luKCB0aW1lIC8gMTAuMCApICogMC41O1xyXG5cclxuXHRnbF9GcmFnQ29sb3IgPSB2ZWM0KCB2ZWMzKCBjb2xvciwgY29sb3IgKiAwLjUsIHNpbiggY29sb3IgKyB0aW1lIC8gMy4wICkgKiAwLjc1ICksIDEuMCApO1xyXG5cclxufVxyXG5gIl19
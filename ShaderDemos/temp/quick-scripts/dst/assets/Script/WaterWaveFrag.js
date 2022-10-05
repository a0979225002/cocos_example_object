
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/WaterWaveFrag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '720663wl5dOb4wjb/ei9ejg', 'WaterWaveFrag');
// Script/WaterWaveFrag.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WaterWaveFrag = /** @class */ (function () {
    function WaterWaveFrag() {
    }
    WaterWaveFrag.waterwave_vert = "\n    attribute vec4 a_position;\n    attribute vec2 a_texCoord;\n    attribute vec4 a_color;\n    varying vec2 v_texCoord;\n    varying vec4 v_fragmentColor;\n    void main()\n    {\n        gl_Position = CC_PMatrix * a_position;\n        v_fragmentColor = a_color;\n        v_texCoord = a_texCoord;\n    }\n    ";
    WaterWaveFrag.waterwave_frag = "\n    #ifdef GL_ES\n    precision mediump float;\n    #endif\n    \n    #define F cos(x-y)*cos(y),sin(x+y)*sin(y)\n\n    uniform float time;\n    uniform vec2 resolution;\n    varying vec2 v_texCoord;\n\n    vec2 s(vec2 p)\n    {\n        float d=time*0.2,x=8.*(p.x+d),y=8.*(p.y+d);\n        return vec2(F);\n    }\n    void mainImage( out vec4 fragColor, in vec2 fragCoord )\n    {\n        // \u6362\u6210resolution\n        vec2 rs = resolution.xy;\n        // \u6362\u6210\u7EB9\u7406\u5750\u6807v_texCoord.xy\n        vec2 uv = v_texCoord.xy;\n        vec2 q = uv+2./resolution.x*(s(uv)-s(uv+rs));\n        //\u53CD\u8F6Cy\n        // q.y=1.-q.y;\n        fragColor = texture2D(CC_Texture0,q);\n    }\n    void main()\n    {\n        mainImage(gl_FragColor, gl_FragCoord.xy);\n    }\n    ";
    return WaterWaveFrag;
}());
exports.default = WaterWaveFrag;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXYXRlcldhdmVGcmFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQStDQSxDQUFDO0lBOUNVLDRCQUFjLEdBQUcsMlRBWXZCLENBQUM7SUFFSyw0QkFBYyxHQUFHLDJ4QkErQnZCLENBQUM7SUFDTixvQkFBQztDQS9DRCxBQStDQyxJQUFBO2tCQS9Db0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhdGVyV2F2ZUZyYWd7XHJcbiAgICBzdGF0aWMgd2F0ZXJ3YXZlX3ZlcnQgPSBgXHJcbiAgICBhdHRyaWJ1dGUgdmVjNCBhX3Bvc2l0aW9uO1xyXG4gICAgYXR0cmlidXRlIHZlYzIgYV90ZXhDb29yZDtcclxuICAgIGF0dHJpYnV0ZSB2ZWM0IGFfY29sb3I7XHJcbiAgICB2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxuICAgIHZhcnlpbmcgdmVjNCB2X2ZyYWdtZW50Q29sb3I7XHJcbiAgICB2b2lkIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIGdsX1Bvc2l0aW9uID0gQ0NfUE1hdHJpeCAqIGFfcG9zaXRpb247XHJcbiAgICAgICAgdl9mcmFnbWVudENvbG9yID0gYV9jb2xvcjtcclxuICAgICAgICB2X3RleENvb3JkID0gYV90ZXhDb29yZDtcclxuICAgIH1cclxuICAgIGA7XHJcbiAgICAgICBcclxuICAgIHN0YXRpYyB3YXRlcndhdmVfZnJhZyA9IGBcclxuICAgICNpZmRlZiBHTF9FU1xyXG4gICAgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcbiAgICAjZW5kaWZcclxuICAgIFxyXG4gICAgI2RlZmluZSBGIGNvcyh4LXkpKmNvcyh5KSxzaW4oeCt5KSpzaW4oeSlcclxuXHJcbiAgICB1bmlmb3JtIGZsb2F0IHRpbWU7XHJcbiAgICB1bmlmb3JtIHZlYzIgcmVzb2x1dGlvbjtcclxuICAgIHZhcnlpbmcgdmVjMiB2X3RleENvb3JkO1xyXG5cclxuICAgIHZlYzIgcyh2ZWMyIHApXHJcbiAgICB7XHJcbiAgICAgICAgZmxvYXQgZD10aW1lKjAuMix4PTguKihwLngrZCkseT04LioocC55K2QpO1xyXG4gICAgICAgIHJldHVybiB2ZWMyKEYpO1xyXG4gICAgfVxyXG4gICAgdm9pZCBtYWluSW1hZ2UoIG91dCB2ZWM0IGZyYWdDb2xvciwgaW4gdmVjMiBmcmFnQ29vcmQgKVxyXG4gICAge1xyXG4gICAgICAgIC8vIOaNouaIkHJlc29sdXRpb25cclxuICAgICAgICB2ZWMyIHJzID0gcmVzb2x1dGlvbi54eTtcclxuICAgICAgICAvLyDmjaLmiJDnurnnkIblnZDmoId2X3RleENvb3JkLnh5XHJcbiAgICAgICAgdmVjMiB1diA9IHZfdGV4Q29vcmQueHk7XHJcbiAgICAgICAgdmVjMiBxID0gdXYrMi4vcmVzb2x1dGlvbi54KihzKHV2KS1zKHV2K3JzKSk7XHJcbiAgICAgICAgLy/lj43ovax5XHJcbiAgICAgICAgLy8gcS55PTEuLXEueTtcclxuICAgICAgICBmcmFnQ29sb3IgPSB0ZXh0dXJlMkQoQ0NfVGV4dHVyZTAscSk7XHJcbiAgICB9XHJcbiAgICB2b2lkIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIG1haW5JbWFnZShnbF9GcmFnQ29sb3IsIGdsX0ZyYWdDb29yZC54eSk7XHJcbiAgICB9XHJcbiAgICBgO1xyXG59Il19
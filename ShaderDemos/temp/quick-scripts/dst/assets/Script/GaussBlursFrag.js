
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GaussBlursFrag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b03fcXtOQtGK7mL07BlMBdq', 'GaussBlursFrag');
// Script/GaussBlursFrag.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BlursFrag = /** @class */ (function () {
    function BlursFrag() {
    }
    BlursFrag.blurs_vert = "\n    attribute vec4 a_position;\n    attribute vec2 a_texCoord;\n    attribute vec4 a_color;\n    varying vec2 v_texCoord;\n    varying vec4 v_fragmentColor;\n    void main()\n    {\n        gl_Position = CC_PMatrix * a_position;\n        v_fragmentColor = a_color;\n        v_texCoord = a_texCoord;\n    }\n    ";
    BlursFrag.blurs_frag = "\n    #ifdef GL_ES\n    precision mediump float;\n    #endif\n    uniform float bluramount;\n    varying vec2 v_texCoord;\n    vec4 draw(vec2 uv) {\n    return texture2D(CC_Texture0,uv).rgba; \n    }\n    float grid(float var, float size) {\n    return floor(var*size)/size;\n    }\n    float rand(vec2 co){\n    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n    }\n    void mainImage( out vec4 fragColor, in vec2 fragCoord )\n    {\n    vec2 uv = v_texCoord.xy;\n    vec4 blurred_image = vec4(0.);\n    #define repeats 5.\n    for (float i = 0.; i < repeats; i++) { \n    vec2 q = vec2(cos(degrees((i/repeats)*360.)),sin(degrees((i/repeats)*360.))) * (rand(vec2(i,uv.x+uv.y))+bluramount); \n    vec2 uv2 = uv+(q*bluramount);\n    blurred_image += draw(uv2)/2.;\n    q = vec2(cos(degrees((i/repeats)*360.)),sin(degrees((i/repeats)*360.))) * (rand(vec2(i+2.,uv.x+uv.y+24.))+bluramount); \n    uv2 = uv+(q*bluramount);\n    blurred_image += draw(uv2)/2.;\n    }\n    blurred_image /= repeats;\n    fragColor = vec4(blurred_image);\n    }\n    void main()\n    {\n    mainImage(gl_FragColor, gl_FragCoord.xy);\n    }\n    ";
    return BlursFrag;
}());
exports.default = BlursFrag;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYXVzc0JsdXJzRnJhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFrREEsQ0FBQztJQWpEVSxvQkFBVSxHQUFHLDJUQVluQixDQUFDO0lBQ0ssb0JBQVUsR0FBRyxzbkNBbUNuQixDQUFDO0lBQ04sZ0JBQUM7Q0FsREQsQUFrREMsSUFBQTtrQkFsRG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBCbHVyc0ZyYWcge1xyXG4gICAgc3RhdGljIGJsdXJzX3ZlcnQgPSBgXHJcbiAgICBhdHRyaWJ1dGUgdmVjNCBhX3Bvc2l0aW9uO1xyXG4gICAgYXR0cmlidXRlIHZlYzIgYV90ZXhDb29yZDtcclxuICAgIGF0dHJpYnV0ZSB2ZWM0IGFfY29sb3I7XHJcbiAgICB2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxuICAgIHZhcnlpbmcgdmVjNCB2X2ZyYWdtZW50Q29sb3I7XHJcbiAgICB2b2lkIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIGdsX1Bvc2l0aW9uID0gQ0NfUE1hdHJpeCAqIGFfcG9zaXRpb247XHJcbiAgICAgICAgdl9mcmFnbWVudENvbG9yID0gYV9jb2xvcjtcclxuICAgICAgICB2X3RleENvb3JkID0gYV90ZXhDb29yZDtcclxuICAgIH1cclxuICAgIGA7XHJcbiAgICBzdGF0aWMgYmx1cnNfZnJhZyA9IGBcclxuICAgICNpZmRlZiBHTF9FU1xyXG4gICAgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcbiAgICAjZW5kaWZcclxuICAgIHVuaWZvcm0gZmxvYXQgYmx1cmFtb3VudDtcclxuICAgIHZhcnlpbmcgdmVjMiB2X3RleENvb3JkO1xyXG4gICAgdmVjNCBkcmF3KHZlYzIgdXYpIHtcclxuICAgIHJldHVybiB0ZXh0dXJlMkQoQ0NfVGV4dHVyZTAsdXYpLnJnYmE7IFxyXG4gICAgfVxyXG4gICAgZmxvYXQgZ3JpZChmbG9hdCB2YXIsIGZsb2F0IHNpemUpIHtcclxuICAgIHJldHVybiBmbG9vcih2YXIqc2l6ZSkvc2l6ZTtcclxuICAgIH1cclxuICAgIGZsb2F0IHJhbmQodmVjMiBjbyl7XHJcbiAgICByZXR1cm4gZnJhY3Qoc2luKGRvdChjby54eSAsdmVjMigxMi45ODk4LDc4LjIzMykpKSAqIDQzNzU4LjU0NTMpO1xyXG4gICAgfVxyXG4gICAgdm9pZCBtYWluSW1hZ2UoIG91dCB2ZWM0IGZyYWdDb2xvciwgaW4gdmVjMiBmcmFnQ29vcmQgKVxyXG4gICAge1xyXG4gICAgdmVjMiB1diA9IHZfdGV4Q29vcmQueHk7XHJcbiAgICB2ZWM0IGJsdXJyZWRfaW1hZ2UgPSB2ZWM0KDAuKTtcclxuICAgICNkZWZpbmUgcmVwZWF0cyA1LlxyXG4gICAgZm9yIChmbG9hdCBpID0gMC47IGkgPCByZXBlYXRzOyBpKyspIHsgXHJcbiAgICB2ZWMyIHEgPSB2ZWMyKGNvcyhkZWdyZWVzKChpL3JlcGVhdHMpKjM2MC4pKSxzaW4oZGVncmVlcygoaS9yZXBlYXRzKSozNjAuKSkpICogKHJhbmQodmVjMihpLHV2LngrdXYueSkpK2JsdXJhbW91bnQpOyBcclxuICAgIHZlYzIgdXYyID0gdXYrKHEqYmx1cmFtb3VudCk7XHJcbiAgICBibHVycmVkX2ltYWdlICs9IGRyYXcodXYyKS8yLjtcclxuICAgIHEgPSB2ZWMyKGNvcyhkZWdyZWVzKChpL3JlcGVhdHMpKjM2MC4pKSxzaW4oZGVncmVlcygoaS9yZXBlYXRzKSozNjAuKSkpICogKHJhbmQodmVjMihpKzIuLHV2LngrdXYueSsyNC4pKStibHVyYW1vdW50KTsgXHJcbiAgICB1djIgPSB1disocSpibHVyYW1vdW50KTtcclxuICAgIGJsdXJyZWRfaW1hZ2UgKz0gZHJhdyh1djIpLzIuO1xyXG4gICAgfVxyXG4gICAgYmx1cnJlZF9pbWFnZSAvPSByZXBlYXRzO1xyXG4gICAgZnJhZ0NvbG9yID0gdmVjNChibHVycmVkX2ltYWdlKTtcclxuICAgIH1cclxuICAgIHZvaWQgbWFpbigpXHJcbiAgICB7XHJcbiAgICBtYWluSW1hZ2UoZ2xfRnJhZ0NvbG9yLCBnbF9GcmFnQ29vcmQueHkpO1xyXG4gICAgfVxyXG4gICAgYDtcclxufSJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/CirclePortraitEffect');
require('./assets/Script/CirclePortraitFrag');
require('./assets/Script/DissolveEffect');
require('./assets/Script/DissolveFrag');
require('./assets/Script/EffectManager');
require('./assets/Script/FluxayEffect');
require('./assets/Script/FluxayFrag');
require('./assets/Script/GaussBlurEffect');
require('./assets/Script/GaussBlursFrag');
require('./assets/Script/GrayEffect');
require('./assets/Script/GrayFrag');
require('./assets/Script/Menu');
require('./assets/Script/SearchLightEffect');
require('./assets/Script/SearchLightFrag');
require('./assets/Script/TransferEffect');
require('./assets/Script/TransferFrag');
require('./assets/Script/TurnPageEffect');
require('./assets/Script/TurnPageFrag');
require('./assets/Script/WaterWaveEffect');
require('./assets/Script/WaterWaveFrag');
require('./assets/Script/shader/MaterialComponent');
require('./assets/Script/shader/MaterialManager');
require('./assets/Script/shader/MaterialSingleton');
require('./assets/Script/shader/ShaderFSH');
require('./assets/Script/shader/ShaderLab');
require('./assets/migration/use_v2.0.x_cc.Toggle_event');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/TurnPageFrag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '215f3EJr0ZPB7NfDgJ9xYCA', 'TurnPageFrag');
// Script/TurnPageFrag.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TurnPageFrag = /** @class */ (function () {
    function TurnPageFrag() {
    }
    TurnPageFrag.turnpage_vert = "\n    attribute vec4 a_position;\n    attribute vec2 a_texCoord;\n    attribute vec4 a_color;\n    varying vec2 v_texCoord;\n    varying vec4 v_fragmentColor;\n    void main()\n    {\n        gl_Position = CC_PMatrix * a_position;\n        v_fragmentColor = a_color;\n        v_texCoord = a_texCoord;\n    }\n    ";
    TurnPageFrag.turnpage_frag = "\n    uniform vec2 resolution;\n    uniform vec2 mouse;\n    varying vec2 v_texCoord;\n\n    const float pi = 3.14159;\n    const float twopi = 6.28319;\n\n    const float e0 = 0.018;\n    const float ppow = 2.0;\n\n    const float bcolorMix = 0.67;\n    const float maxBcolVal = 0.4;\n\n    const float diffint = 1.2;\n    const float ambientt = 0.1;\n    const float ambientb = 0.4;\n\n    const vec2 specpos = vec2(0.85, -0.2);\n    const float specpow = 5.;\n    const float specwidth = 0.4;\n    const float specint = 0.6;\n\n    const vec2 shadowoffset = vec2(0.07, -0.04);\n    const float shadowsmoothness = 0.012;\n    const float shadowint = 0.25;\n\n    const float aawidth = 0.7;\n    const int aasamples = 3;\n\n    const bool showpoints = false;\n    const bool colors = false;\n    const bool anim = true;\n\n    // #define swap_x\n    // Simple \"random\" function\n    float random(float co)\n    {\n        return fract(sin(co*12.989) * 43758.545);\n    }\n\n    vec4 getPagebackColor()\n    {\n        \n        float cn = 1.;\n        vec4 pagebackColor;\n        pagebackColor.r = maxBcolVal*random(cn + 263.714);\n        pagebackColor.g = maxBcolVal*random(cn*4. - 151.894);\n        pagebackColor.b = maxBcolVal*random(cn*7. + 87.548);\n        pagebackColor.a = 1.0;\n        return pagebackColor;\n    }\n\n    vec2 rotateVec(vec2 vect, float angle)\n    {\n        float xr = vect.x*cos(angle) + vect.y*sin(angle);\n        float yr = vect.x*sin(angle) - vect.y*cos(angle);\n        return vec2(xr, yr);\n    }\n\n    // Curl function on the axis bottom left corner - corner of the sheet\n    float pageFunction(float x, float e)\n    {\n        return pow(pow(x, ppow) - e, 1./ppow);\n    }\n\n    // Derivate of the curl function for light calculations\n    float pageFunctionDer(float x, float e)\n    {\n        return pow(x, ppow - 1.)/pow(pow(x, ppow) - e, (ppow - 1.)/ppow);\n    }\n\n    vec4 turnPage(vec2 fragCoord)\n    {\n        // General calculations\n        vec2 uv = v_texCoord.xy ;//fragCoord.xy / resolution.yy;\n        float ratio = resolution.x/resolution.y;\n        \n        // As long as one doesn't click on the canvas, the animation runs\n        vec2 mpoint;\n        bool firstcycle;\n        \n        vec2 Mouse2 = mouse;\n        #ifdef swap_x\n        Mouse2.x = resolution.x - Mouse2.x;\n        #endif\n        mpoint = Mouse2.xy;\n        firstcycle = true;\n        vec2 midmpoint = mpoint*0.5;\n        float mdist = distance(fragCoord, mpoint);\n        float e = e0*pow(mdist/resolution.y, 2.) + 0.02*e0*smoothstep(0., 0.12, mdist/resolution.y);\n        float angle = - atan(mpoint.x/mpoint.y) + pi*0.5;\n        \n        vec2 uv2 = uv;\n        #ifdef swap_x\n        uv2.x = ratio - uv2.x;\n        #endif\n        \n        vec2 uvr = rotateVec(uv2 - midmpoint/resolution.yy, angle);\n        \n        float pagefunc = pageFunction(uvr.x, e);\n        vec2 uvr2 = vec2(pagefunc, uvr.y); \n        vec2 uvr3 = rotateVec(uvr2, -angle) - vec2(1., -1.)*midmpoint/resolution.yy;\n        \n        vec2 uvr2b = vec2(-pagefunc, uvr.y); \n        vec2 uvr3b = rotateVec(uvr2b, -angle) - vec2(1., -1.)*midmpoint/resolution.yy;\n        \n        #ifdef swap_x\n        uvr3b.x = ratio - uvr3b.x;\n        #endif\n            \n        vec4 i; \n        // Turned page\n        if (uvr.x>0. && uvr3b.y>0.)\n        {\n            vec2 uvcorr = vec2(ratio, 1.);\n            vec2 uvrcorr = rotateVec(uvcorr - midmpoint/resolution.yy, angle);\n            float pagefunccorr = pageFunction(uvrcorr.x, e);\n            vec2 uvrcorr2 = vec2(-pagefunccorr, uvrcorr.y); \n            vec2 uvrcorr3 = rotateVec(uvrcorr2, -angle) - vec2(1., -1.)*midmpoint/resolution.yy;\n        \n            float pagefuncder = pageFunctionDer(uvr.x, e);\n            float intfac = 1. - diffint*(1. - 1./pagefuncder);\n\n            if(uvr3.x>=0. || uvr3.y<=0.)\n            {\n                // Top of the turned page           \n                float mdists = distance(fragCoord, mpoint)*0.7 - 55.;\n                float es = e0*pow(mdists/resolution.y, 2.) + 0.02*e0*smoothstep(0., 0.08, mdist/resolution.y);\n                vec2 uvrs = rotateVec(uv2 - midmpoint/resolution.yy - shadowoffset, angle);\n                float pagefuncs = pageFunction(uvrs.x + 0.015, es - 0.001);\n                vec2 uvr2s = vec2(pagefuncs, uvrs.y); \n                vec2 uvr3s = rotateVec(uvr2s, -angle) - vec2(1., -1.)*midmpoint/resolution.yy;\n                float shadow = 1. - (1. - smoothstep(-shadowsmoothness, shadowsmoothness, uvr3s.x))*(1. - smoothstep(shadowsmoothness, -shadowsmoothness, uvr3s.y));\n                \n                float difft = intfac*(1. - ambientt) + ambientt;\n                difft = difft*(shadow*shadowint + 1. - shadowint)/2. + mix(1. - shadowint, difft, shadow)/2.;\n                if (firstcycle)\n                    i = difft*(colors?vec4(1., 0.3, 0.3, 1.):texture2D(CC_Texture0, mod((uvr3b - uvrcorr3)/vec2(-ratio, 1.), 1.)));\n                else\n                    i = difft*(colors?vec4(1., 0.3, 0.3, 1.):texture2D(CC_Texture0, mod((uvr3b - uvrcorr3)/vec2(-ratio, 1.), 1.)));\n            }\n            else\n            {\n                // Bottom of the turned page\n                float diffb = intfac*(1. - ambientb) + ambientb;\n                float spec = pow(smoothstep(specpos.x - 0.35, specpos.x, intfac)*smoothstep(specpos.x + 0.35, specpos.x, intfac), specpow);\n                spec*= specint*pow(1. - pow(clamp(abs(uvr.y - specpos.y), 0., specwidth*2.), 2.)/specwidth, specpow);\n                if (firstcycle)\n                    i = diffb*(colors?vec4(0.3, 1.0, 0.3, 1.):mix(texture2D(CC_Texture0, mod((uvr3 - uvrcorr3)/vec2(-ratio, 1.), 1.)), getPagebackColor(), bcolorMix));\n                else\n                    i = diffb*(colors?vec4(0.3, 1.0, 0.3, 1.):mix(texture2D(CC_Texture0, mod((uvr3 - uvrcorr3)/vec2(-ratio, 1.), 1.)), getPagebackColor(), bcolorMix));\n                //i = diffb*(colors?vec4(0.3, 1.0, 0.3, 1.):texture2D(iChannel1, mod((uvr3 - uvrcorr3)/vec2(-ratio, 1.), 1.)), vec4(0.3, 0., 0., 1.));\n                i = mix(i, vec4(1.0), spec);\n            }\n        }\n        else\n        {\n            // \"Background\" with simple shadow\n            vec2 mpointbg = vec2(0.2, 0.01);\n            vec2 midmpointbg = mpointbg*0.5;\n            float mdistbg = distance(fragCoord, mpointbg);\n            float ebg = e0*pow(mdistbg/resolution.y, 2.) + 0.01*e0*smoothstep(0., 0.12, mdistbg/resolution.y);\n            float anglebg = 0.001; //- atan(mpointbg.x/mpointbg.y) + pi*0.5;\n            vec2 uvrbg = rotateVec(uv - midmpointbg/resolution.yy, anglebg);\n            //float pagefuncbg = mix(uvrbg.x, pageFunction(uvrbg.x, ebg), clamp(uvrbg.x*5., 0., 1.));\n            float pagefuncbg;\n            if (uvrbg.x<0.15)\n            pagefuncbg = uvrbg.x;\n            else\n            pagefuncbg = mix(uvrbg.x, pageFunction(uvrbg.x, ebg), smoothstep(mpoint.x/resolution.x + 0.1, mpoint.x/resolution.x, uvrbg.x));\n            \n            vec2 uvr2bbg = vec2(-pagefuncbg, uvrbg.y); \n            vec2 uvr3bbg = rotateVec(uvr2bbg, -anglebg) - vec2(1., -1.)*midmpointbg/resolution.yy;\n            vec2 uvcorrbg = vec2(ratio, 1.);\n            vec2 uvrcorrbg = rotateVec(uvcorrbg - midmpointbg/resolution.yy, anglebg);\n            float pagefunccorrbg = pageFunction(uvrcorrbg.x, ebg);\n            vec2 uvrcorr2bg = vec2(-pagefunccorrbg, uvrcorrbg.y); \n            vec2 uvrcorr3bg = rotateVec(uvrcorr2bg, -anglebg) - vec2(1., -1.)*midmpointbg/resolution.yy;       \n            float pagefuncderbg = pageFunctionDer(uvrbg.x, ebg);\n            float intfacbg = 1. - diffint*(1. - 1./pagefuncderbg);\n            float difftbg = intfacbg*(1. - ambientt) + ambientt;\n            \n            if (firstcycle) \n                i = colors?difftbg*vec4(0.3, 0.3, 1., 1.):texture2D(CC_Texture0, mod((uvr3bbg - uvrcorr3bg)/vec2(-ratio, 1.), 1.));\n            else\n                i = colors?difftbg*vec4(0.3, 0.3, 1., 1.):texture2D(CC_Texture0, mod((uvr3bbg - uvrcorr3bg)/vec2(-ratio, 1.), 1.));\n            float bgshadow = 1. + shadowint*smoothstep(-0.08+shadowsmoothness*4., -0.08, uvr3b.y) - shadowint;\n            \n            if (uvr3b.y<0.)\n            i*= bgshadow;\n        }\n        return i;\n    }\n    \n    void mainImage(out vec4 fragColor, in vec2 fragCoord)\n    {\n        // Antialiasing\n        vec4 vs = vec4(0.);\n        for (int j=0;j<aasamples ;j++)\n        {\n        float oy = float(j)*aawidth/max(float(aasamples-1), 1.);\n        for (int i=0;i<aasamples ;i++)\n        {\n            float ox = float(i)*aawidth/max(float(aasamples-1), 1.);\n            vs+= turnPage(fragCoord + vec2(ox, oy));\n        }\n        }\n        vec4 i = vs/vec4(aasamples*aasamples);    \n        \n        // Show the mouse points. Was only used for development\n        vec4 ocol; \n        if (showpoints)\n        {\n            float ratio = resolution.x/resolution.y;\n            vec2 mpoint = mouse.xy;\n            vec2 midmpoint = mouse.xy*0.5;\n            float mdist = distance(fragCoord, mpoint);\n            float midmdist = distance(fragCoord, midmpoint);\n            \n            ocol = mix(i, vec4(1., 0., 0., 1.), smoothstep(6., 4., mdist));\n            ocol = mix(ocol, vec4(1., 1., 0., 1.), smoothstep(6., 4., midmdist));\n        }\n        else\n            ocol = i;\n            \n        fragColor = ocol;\n    }\n\n    void main()\n    {\n        mainImage(gl_FragColor, gl_FragCoord.xy);\n    }\n    ";
    return TurnPageFrag;
}());
exports.default = TurnPageFrag;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUdXJuUGFnZUZyYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBd1BBLENBQUM7SUF2UFUsMEJBQWEsR0FBRywyVEFZdEIsQ0FBQztJQUNLLDBCQUFhLEdBQUcseTNTQXlPdEIsQ0FBQztJQUNOLG1CQUFDO0NBeFBELEFBd1BDLElBQUE7a0JBeFBvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHVyblBhZ2VGcmFne1xyXG4gICAgc3RhdGljIHR1cm5wYWdlX3ZlcnQgPSBgXHJcbiAgICBhdHRyaWJ1dGUgdmVjNCBhX3Bvc2l0aW9uO1xyXG4gICAgYXR0cmlidXRlIHZlYzIgYV90ZXhDb29yZDtcclxuICAgIGF0dHJpYnV0ZSB2ZWM0IGFfY29sb3I7XHJcbiAgICB2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxuICAgIHZhcnlpbmcgdmVjNCB2X2ZyYWdtZW50Q29sb3I7XHJcbiAgICB2b2lkIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIGdsX1Bvc2l0aW9uID0gQ0NfUE1hdHJpeCAqIGFfcG9zaXRpb247XHJcbiAgICAgICAgdl9mcmFnbWVudENvbG9yID0gYV9jb2xvcjtcclxuICAgICAgICB2X3RleENvb3JkID0gYV90ZXhDb29yZDtcclxuICAgIH1cclxuICAgIGA7XHJcbiAgICBzdGF0aWMgdHVybnBhZ2VfZnJhZyA9IGBcclxuICAgIHVuaWZvcm0gdmVjMiByZXNvbHV0aW9uO1xyXG4gICAgdW5pZm9ybSB2ZWMyIG1vdXNlO1xyXG4gICAgdmFyeWluZyB2ZWMyIHZfdGV4Q29vcmQ7XHJcblxyXG4gICAgY29uc3QgZmxvYXQgcGkgPSAzLjE0MTU5O1xyXG4gICAgY29uc3QgZmxvYXQgdHdvcGkgPSA2LjI4MzE5O1xyXG5cclxuICAgIGNvbnN0IGZsb2F0IGUwID0gMC4wMTg7XHJcbiAgICBjb25zdCBmbG9hdCBwcG93ID0gMi4wO1xyXG5cclxuICAgIGNvbnN0IGZsb2F0IGJjb2xvck1peCA9IDAuNjc7XHJcbiAgICBjb25zdCBmbG9hdCBtYXhCY29sVmFsID0gMC40O1xyXG5cclxuICAgIGNvbnN0IGZsb2F0IGRpZmZpbnQgPSAxLjI7XHJcbiAgICBjb25zdCBmbG9hdCBhbWJpZW50dCA9IDAuMTtcclxuICAgIGNvbnN0IGZsb2F0IGFtYmllbnRiID0gMC40O1xyXG5cclxuICAgIGNvbnN0IHZlYzIgc3BlY3BvcyA9IHZlYzIoMC44NSwgLTAuMik7XHJcbiAgICBjb25zdCBmbG9hdCBzcGVjcG93ID0gNS47XHJcbiAgICBjb25zdCBmbG9hdCBzcGVjd2lkdGggPSAwLjQ7XHJcbiAgICBjb25zdCBmbG9hdCBzcGVjaW50ID0gMC42O1xyXG5cclxuICAgIGNvbnN0IHZlYzIgc2hhZG93b2Zmc2V0ID0gdmVjMigwLjA3LCAtMC4wNCk7XHJcbiAgICBjb25zdCBmbG9hdCBzaGFkb3dzbW9vdGhuZXNzID0gMC4wMTI7XHJcbiAgICBjb25zdCBmbG9hdCBzaGFkb3dpbnQgPSAwLjI1O1xyXG5cclxuICAgIGNvbnN0IGZsb2F0IGFhd2lkdGggPSAwLjc7XHJcbiAgICBjb25zdCBpbnQgYWFzYW1wbGVzID0gMztcclxuXHJcbiAgICBjb25zdCBib29sIHNob3dwb2ludHMgPSBmYWxzZTtcclxuICAgIGNvbnN0IGJvb2wgY29sb3JzID0gZmFsc2U7XHJcbiAgICBjb25zdCBib29sIGFuaW0gPSB0cnVlO1xyXG5cclxuICAgIC8vICNkZWZpbmUgc3dhcF94XHJcbiAgICAvLyBTaW1wbGUgXCJyYW5kb21cIiBmdW5jdGlvblxyXG4gICAgZmxvYXQgcmFuZG9tKGZsb2F0IGNvKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBmcmFjdChzaW4oY28qMTIuOTg5KSAqIDQzNzU4LjU0NSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmVjNCBnZXRQYWdlYmFja0NvbG9yKClcclxuICAgIHtcclxuICAgICAgICBcclxuICAgICAgICBmbG9hdCBjbiA9IDEuO1xyXG4gICAgICAgIHZlYzQgcGFnZWJhY2tDb2xvcjtcclxuICAgICAgICBwYWdlYmFja0NvbG9yLnIgPSBtYXhCY29sVmFsKnJhbmRvbShjbiArIDI2My43MTQpO1xyXG4gICAgICAgIHBhZ2ViYWNrQ29sb3IuZyA9IG1heEJjb2xWYWwqcmFuZG9tKGNuKjQuIC0gMTUxLjg5NCk7XHJcbiAgICAgICAgcGFnZWJhY2tDb2xvci5iID0gbWF4QmNvbFZhbCpyYW5kb20oY24qNy4gKyA4Ny41NDgpO1xyXG4gICAgICAgIHBhZ2ViYWNrQ29sb3IuYSA9IDEuMDtcclxuICAgICAgICByZXR1cm4gcGFnZWJhY2tDb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICB2ZWMyIHJvdGF0ZVZlYyh2ZWMyIHZlY3QsIGZsb2F0IGFuZ2xlKVxyXG4gICAge1xyXG4gICAgICAgIGZsb2F0IHhyID0gdmVjdC54KmNvcyhhbmdsZSkgKyB2ZWN0Lnkqc2luKGFuZ2xlKTtcclxuICAgICAgICBmbG9hdCB5ciA9IHZlY3QueCpzaW4oYW5nbGUpIC0gdmVjdC55KmNvcyhhbmdsZSk7XHJcbiAgICAgICAgcmV0dXJuIHZlYzIoeHIsIHlyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDdXJsIGZ1bmN0aW9uIG9uIHRoZSBheGlzIGJvdHRvbSBsZWZ0IGNvcm5lciAtIGNvcm5lciBvZiB0aGUgc2hlZXRcclxuICAgIGZsb2F0IHBhZ2VGdW5jdGlvbihmbG9hdCB4LCBmbG9hdCBlKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBwb3cocG93KHgsIHBwb3cpIC0gZSwgMS4vcHBvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVyaXZhdGUgb2YgdGhlIGN1cmwgZnVuY3Rpb24gZm9yIGxpZ2h0IGNhbGN1bGF0aW9uc1xyXG4gICAgZmxvYXQgcGFnZUZ1bmN0aW9uRGVyKGZsb2F0IHgsIGZsb2F0IGUpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHBvdyh4LCBwcG93IC0gMS4pL3Bvdyhwb3coeCwgcHBvdykgLSBlLCAocHBvdyAtIDEuKS9wcG93KTtcclxuICAgIH1cclxuXHJcbiAgICB2ZWM0IHR1cm5QYWdlKHZlYzIgZnJhZ0Nvb3JkKVxyXG4gICAge1xyXG4gICAgICAgIC8vIEdlbmVyYWwgY2FsY3VsYXRpb25zXHJcbiAgICAgICAgdmVjMiB1diA9IHZfdGV4Q29vcmQueHkgOy8vZnJhZ0Nvb3JkLnh5IC8gcmVzb2x1dGlvbi55eTtcclxuICAgICAgICBmbG9hdCByYXRpbyA9IHJlc29sdXRpb24ueC9yZXNvbHV0aW9uLnk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQXMgbG9uZyBhcyBvbmUgZG9lc24ndCBjbGljayBvbiB0aGUgY2FudmFzLCB0aGUgYW5pbWF0aW9uIHJ1bnNcclxuICAgICAgICB2ZWMyIG1wb2ludDtcclxuICAgICAgICBib29sIGZpcnN0Y3ljbGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmVjMiBNb3VzZTIgPSBtb3VzZTtcclxuICAgICAgICAjaWZkZWYgc3dhcF94XHJcbiAgICAgICAgTW91c2UyLnggPSByZXNvbHV0aW9uLnggLSBNb3VzZTIueDtcclxuICAgICAgICAjZW5kaWZcclxuICAgICAgICBtcG9pbnQgPSBNb3VzZTIueHk7XHJcbiAgICAgICAgZmlyc3RjeWNsZSA9IHRydWU7XHJcbiAgICAgICAgdmVjMiBtaWRtcG9pbnQgPSBtcG9pbnQqMC41O1xyXG4gICAgICAgIGZsb2F0IG1kaXN0ID0gZGlzdGFuY2UoZnJhZ0Nvb3JkLCBtcG9pbnQpO1xyXG4gICAgICAgIGZsb2F0IGUgPSBlMCpwb3cobWRpc3QvcmVzb2x1dGlvbi55LCAyLikgKyAwLjAyKmUwKnNtb290aHN0ZXAoMC4sIDAuMTIsIG1kaXN0L3Jlc29sdXRpb24ueSk7XHJcbiAgICAgICAgZmxvYXQgYW5nbGUgPSAtIGF0YW4obXBvaW50LngvbXBvaW50LnkpICsgcGkqMC41O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZlYzIgdXYyID0gdXY7XHJcbiAgICAgICAgI2lmZGVmIHN3YXBfeFxyXG4gICAgICAgIHV2Mi54ID0gcmF0aW8gLSB1djIueDtcclxuICAgICAgICAjZW5kaWZcclxuICAgICAgICBcclxuICAgICAgICB2ZWMyIHV2ciA9IHJvdGF0ZVZlYyh1djIgLSBtaWRtcG9pbnQvcmVzb2x1dGlvbi55eSwgYW5nbGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZsb2F0IHBhZ2VmdW5jID0gcGFnZUZ1bmN0aW9uKHV2ci54LCBlKTtcclxuICAgICAgICB2ZWMyIHV2cjIgPSB2ZWMyKHBhZ2VmdW5jLCB1dnIueSk7IFxyXG4gICAgICAgIHZlYzIgdXZyMyA9IHJvdGF0ZVZlYyh1dnIyLCAtYW5nbGUpIC0gdmVjMigxLiwgLTEuKSptaWRtcG9pbnQvcmVzb2x1dGlvbi55eTtcclxuICAgICAgICBcclxuICAgICAgICB2ZWMyIHV2cjJiID0gdmVjMigtcGFnZWZ1bmMsIHV2ci55KTsgXHJcbiAgICAgICAgdmVjMiB1dnIzYiA9IHJvdGF0ZVZlYyh1dnIyYiwgLWFuZ2xlKSAtIHZlYzIoMS4sIC0xLikqbWlkbXBvaW50L3Jlc29sdXRpb24ueXk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgI2lmZGVmIHN3YXBfeFxyXG4gICAgICAgIHV2cjNiLnggPSByYXRpbyAtIHV2cjNiLng7XHJcbiAgICAgICAgI2VuZGlmXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHZlYzQgaTsgXHJcbiAgICAgICAgLy8gVHVybmVkIHBhZ2VcclxuICAgICAgICBpZiAodXZyLng+MC4gJiYgdXZyM2IueT4wLilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZlYzIgdXZjb3JyID0gdmVjMihyYXRpbywgMS4pO1xyXG4gICAgICAgICAgICB2ZWMyIHV2cmNvcnIgPSByb3RhdGVWZWModXZjb3JyIC0gbWlkbXBvaW50L3Jlc29sdXRpb24ueXksIGFuZ2xlKTtcclxuICAgICAgICAgICAgZmxvYXQgcGFnZWZ1bmNjb3JyID0gcGFnZUZ1bmN0aW9uKHV2cmNvcnIueCwgZSk7XHJcbiAgICAgICAgICAgIHZlYzIgdXZyY29ycjIgPSB2ZWMyKC1wYWdlZnVuY2NvcnIsIHV2cmNvcnIueSk7IFxyXG4gICAgICAgICAgICB2ZWMyIHV2cmNvcnIzID0gcm90YXRlVmVjKHV2cmNvcnIyLCAtYW5nbGUpIC0gdmVjMigxLiwgLTEuKSptaWRtcG9pbnQvcmVzb2x1dGlvbi55eTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgZmxvYXQgcGFnZWZ1bmNkZXIgPSBwYWdlRnVuY3Rpb25EZXIodXZyLngsIGUpO1xyXG4gICAgICAgICAgICBmbG9hdCBpbnRmYWMgPSAxLiAtIGRpZmZpbnQqKDEuIC0gMS4vcGFnZWZ1bmNkZXIpO1xyXG5cclxuICAgICAgICAgICAgaWYodXZyMy54Pj0wLiB8fCB1dnIzLnk8PTAuKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBUb3Agb2YgdGhlIHR1cm5lZCBwYWdlICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZsb2F0IG1kaXN0cyA9IGRpc3RhbmNlKGZyYWdDb29yZCwgbXBvaW50KSowLjcgLSA1NS47XHJcbiAgICAgICAgICAgICAgICBmbG9hdCBlcyA9IGUwKnBvdyhtZGlzdHMvcmVzb2x1dGlvbi55LCAyLikgKyAwLjAyKmUwKnNtb290aHN0ZXAoMC4sIDAuMDgsIG1kaXN0L3Jlc29sdXRpb24ueSk7XHJcbiAgICAgICAgICAgICAgICB2ZWMyIHV2cnMgPSByb3RhdGVWZWModXYyIC0gbWlkbXBvaW50L3Jlc29sdXRpb24ueXkgLSBzaGFkb3dvZmZzZXQsIGFuZ2xlKTtcclxuICAgICAgICAgICAgICAgIGZsb2F0IHBhZ2VmdW5jcyA9IHBhZ2VGdW5jdGlvbih1dnJzLnggKyAwLjAxNSwgZXMgLSAwLjAwMSk7XHJcbiAgICAgICAgICAgICAgICB2ZWMyIHV2cjJzID0gdmVjMihwYWdlZnVuY3MsIHV2cnMueSk7IFxyXG4gICAgICAgICAgICAgICAgdmVjMiB1dnIzcyA9IHJvdGF0ZVZlYyh1dnIycywgLWFuZ2xlKSAtIHZlYzIoMS4sIC0xLikqbWlkbXBvaW50L3Jlc29sdXRpb24ueXk7XHJcbiAgICAgICAgICAgICAgICBmbG9hdCBzaGFkb3cgPSAxLiAtICgxLiAtIHNtb290aHN0ZXAoLXNoYWRvd3Ntb290aG5lc3MsIHNoYWRvd3Ntb290aG5lc3MsIHV2cjNzLngpKSooMS4gLSBzbW9vdGhzdGVwKHNoYWRvd3Ntb290aG5lc3MsIC1zaGFkb3dzbW9vdGhuZXNzLCB1dnIzcy55KSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZsb2F0IGRpZmZ0ID0gaW50ZmFjKigxLiAtIGFtYmllbnR0KSArIGFtYmllbnR0O1xyXG4gICAgICAgICAgICAgICAgZGlmZnQgPSBkaWZmdCooc2hhZG93KnNoYWRvd2ludCArIDEuIC0gc2hhZG93aW50KS8yLiArIG1peCgxLiAtIHNoYWRvd2ludCwgZGlmZnQsIHNoYWRvdykvMi47XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3RjeWNsZSlcclxuICAgICAgICAgICAgICAgICAgICBpID0gZGlmZnQqKGNvbG9ycz92ZWM0KDEuLCAwLjMsIDAuMywgMS4pOnRleHR1cmUyRChDQ19UZXh0dXJlMCwgbW9kKCh1dnIzYiAtIHV2cmNvcnIzKS92ZWMyKC1yYXRpbywgMS4pLCAxLikpKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBpID0gZGlmZnQqKGNvbG9ycz92ZWM0KDEuLCAwLjMsIDAuMywgMS4pOnRleHR1cmUyRChDQ19UZXh0dXJlMCwgbW9kKCh1dnIzYiAtIHV2cmNvcnIzKS92ZWMyKC1yYXRpbywgMS4pLCAxLikpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIEJvdHRvbSBvZiB0aGUgdHVybmVkIHBhZ2VcclxuICAgICAgICAgICAgICAgIGZsb2F0IGRpZmZiID0gaW50ZmFjKigxLiAtIGFtYmllbnRiKSArIGFtYmllbnRiO1xyXG4gICAgICAgICAgICAgICAgZmxvYXQgc3BlYyA9IHBvdyhzbW9vdGhzdGVwKHNwZWNwb3MueCAtIDAuMzUsIHNwZWNwb3MueCwgaW50ZmFjKSpzbW9vdGhzdGVwKHNwZWNwb3MueCArIDAuMzUsIHNwZWNwb3MueCwgaW50ZmFjKSwgc3BlY3Bvdyk7XHJcbiAgICAgICAgICAgICAgICBzcGVjKj0gc3BlY2ludCpwb3coMS4gLSBwb3coY2xhbXAoYWJzKHV2ci55IC0gc3BlY3Bvcy55KSwgMC4sIHNwZWN3aWR0aCoyLiksIDIuKS9zcGVjd2lkdGgsIHNwZWNwb3cpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0Y3ljbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgaSA9IGRpZmZiKihjb2xvcnM/dmVjNCgwLjMsIDEuMCwgMC4zLCAxLik6bWl4KHRleHR1cmUyRChDQ19UZXh0dXJlMCwgbW9kKCh1dnIzIC0gdXZyY29ycjMpL3ZlYzIoLXJhdGlvLCAxLiksIDEuKSksIGdldFBhZ2ViYWNrQ29sb3IoKSwgYmNvbG9yTWl4KSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgaSA9IGRpZmZiKihjb2xvcnM/dmVjNCgwLjMsIDEuMCwgMC4zLCAxLik6bWl4KHRleHR1cmUyRChDQ19UZXh0dXJlMCwgbW9kKCh1dnIzIC0gdXZyY29ycjMpL3ZlYzIoLXJhdGlvLCAxLiksIDEuKSksIGdldFBhZ2ViYWNrQ29sb3IoKSwgYmNvbG9yTWl4KSk7XHJcbiAgICAgICAgICAgICAgICAvL2kgPSBkaWZmYiooY29sb3JzP3ZlYzQoMC4zLCAxLjAsIDAuMywgMS4pOnRleHR1cmUyRChpQ2hhbm5lbDEsIG1vZCgodXZyMyAtIHV2cmNvcnIzKS92ZWMyKC1yYXRpbywgMS4pLCAxLikpLCB2ZWM0KDAuMywgMC4sIDAuLCAxLikpO1xyXG4gICAgICAgICAgICAgICAgaSA9IG1peChpLCB2ZWM0KDEuMCksIHNwZWMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIFwiQmFja2dyb3VuZFwiIHdpdGggc2ltcGxlIHNoYWRvd1xyXG4gICAgICAgICAgICB2ZWMyIG1wb2ludGJnID0gdmVjMigwLjIsIDAuMDEpO1xyXG4gICAgICAgICAgICB2ZWMyIG1pZG1wb2ludGJnID0gbXBvaW50YmcqMC41O1xyXG4gICAgICAgICAgICBmbG9hdCBtZGlzdGJnID0gZGlzdGFuY2UoZnJhZ0Nvb3JkLCBtcG9pbnRiZyk7XHJcbiAgICAgICAgICAgIGZsb2F0IGViZyA9IGUwKnBvdyhtZGlzdGJnL3Jlc29sdXRpb24ueSwgMi4pICsgMC4wMSplMCpzbW9vdGhzdGVwKDAuLCAwLjEyLCBtZGlzdGJnL3Jlc29sdXRpb24ueSk7XHJcbiAgICAgICAgICAgIGZsb2F0IGFuZ2xlYmcgPSAwLjAwMTsgLy8tIGF0YW4obXBvaW50YmcueC9tcG9pbnRiZy55KSArIHBpKjAuNTtcclxuICAgICAgICAgICAgdmVjMiB1dnJiZyA9IHJvdGF0ZVZlYyh1diAtIG1pZG1wb2ludGJnL3Jlc29sdXRpb24ueXksIGFuZ2xlYmcpO1xyXG4gICAgICAgICAgICAvL2Zsb2F0IHBhZ2VmdW5jYmcgPSBtaXgodXZyYmcueCwgcGFnZUZ1bmN0aW9uKHV2cmJnLngsIGViZyksIGNsYW1wKHV2cmJnLngqNS4sIDAuLCAxLikpO1xyXG4gICAgICAgICAgICBmbG9hdCBwYWdlZnVuY2JnO1xyXG4gICAgICAgICAgICBpZiAodXZyYmcueDwwLjE1KVxyXG4gICAgICAgICAgICBwYWdlZnVuY2JnID0gdXZyYmcueDtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBwYWdlZnVuY2JnID0gbWl4KHV2cmJnLngsIHBhZ2VGdW5jdGlvbih1dnJiZy54LCBlYmcpLCBzbW9vdGhzdGVwKG1wb2ludC54L3Jlc29sdXRpb24ueCArIDAuMSwgbXBvaW50LngvcmVzb2x1dGlvbi54LCB1dnJiZy54KSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2ZWMyIHV2cjJiYmcgPSB2ZWMyKC1wYWdlZnVuY2JnLCB1dnJiZy55KTsgXHJcbiAgICAgICAgICAgIHZlYzIgdXZyM2JiZyA9IHJvdGF0ZVZlYyh1dnIyYmJnLCAtYW5nbGViZykgLSB2ZWMyKDEuLCAtMS4pKm1pZG1wb2ludGJnL3Jlc29sdXRpb24ueXk7XHJcbiAgICAgICAgICAgIHZlYzIgdXZjb3JyYmcgPSB2ZWMyKHJhdGlvLCAxLik7XHJcbiAgICAgICAgICAgIHZlYzIgdXZyY29ycmJnID0gcm90YXRlVmVjKHV2Y29ycmJnIC0gbWlkbXBvaW50YmcvcmVzb2x1dGlvbi55eSwgYW5nbGViZyk7XHJcbiAgICAgICAgICAgIGZsb2F0IHBhZ2VmdW5jY29ycmJnID0gcGFnZUZ1bmN0aW9uKHV2cmNvcnJiZy54LCBlYmcpO1xyXG4gICAgICAgICAgICB2ZWMyIHV2cmNvcnIyYmcgPSB2ZWMyKC1wYWdlZnVuY2NvcnJiZywgdXZyY29ycmJnLnkpOyBcclxuICAgICAgICAgICAgdmVjMiB1dnJjb3JyM2JnID0gcm90YXRlVmVjKHV2cmNvcnIyYmcsIC1hbmdsZWJnKSAtIHZlYzIoMS4sIC0xLikqbWlkbXBvaW50YmcvcmVzb2x1dGlvbi55eTsgICAgICAgXHJcbiAgICAgICAgICAgIGZsb2F0IHBhZ2VmdW5jZGVyYmcgPSBwYWdlRnVuY3Rpb25EZXIodXZyYmcueCwgZWJnKTtcclxuICAgICAgICAgICAgZmxvYXQgaW50ZmFjYmcgPSAxLiAtIGRpZmZpbnQqKDEuIC0gMS4vcGFnZWZ1bmNkZXJiZyk7XHJcbiAgICAgICAgICAgIGZsb2F0IGRpZmZ0YmcgPSBpbnRmYWNiZyooMS4gLSBhbWJpZW50dCkgKyBhbWJpZW50dDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChmaXJzdGN5Y2xlKSBcclxuICAgICAgICAgICAgICAgIGkgPSBjb2xvcnM/ZGlmZnRiZyp2ZWM0KDAuMywgMC4zLCAxLiwgMS4pOnRleHR1cmUyRChDQ19UZXh0dXJlMCwgbW9kKCh1dnIzYmJnIC0gdXZyY29ycjNiZykvdmVjMigtcmF0aW8sIDEuKSwgMS4pKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgaSA9IGNvbG9ycz9kaWZmdGJnKnZlYzQoMC4zLCAwLjMsIDEuLCAxLik6dGV4dHVyZTJEKENDX1RleHR1cmUwLCBtb2QoKHV2cjNiYmcgLSB1dnJjb3JyM2JnKS92ZWMyKC1yYXRpbywgMS4pLCAxLikpO1xyXG4gICAgICAgICAgICBmbG9hdCBiZ3NoYWRvdyA9IDEuICsgc2hhZG93aW50KnNtb290aHN0ZXAoLTAuMDgrc2hhZG93c21vb3RobmVzcyo0LiwgLTAuMDgsIHV2cjNiLnkpIC0gc2hhZG93aW50O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHV2cjNiLnk8MC4pXHJcbiAgICAgICAgICAgIGkqPSBiZ3NoYWRvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZvaWQgbWFpbkltYWdlKG91dCB2ZWM0IGZyYWdDb2xvciwgaW4gdmVjMiBmcmFnQ29vcmQpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gQW50aWFsaWFzaW5nXHJcbiAgICAgICAgdmVjNCB2cyA9IHZlYzQoMC4pO1xyXG4gICAgICAgIGZvciAoaW50IGo9MDtqPGFhc2FtcGxlcyA7aisrKVxyXG4gICAgICAgIHtcclxuICAgICAgICBmbG9hdCBveSA9IGZsb2F0KGopKmFhd2lkdGgvbWF4KGZsb2F0KGFhc2FtcGxlcy0xKSwgMS4pO1xyXG4gICAgICAgIGZvciAoaW50IGk9MDtpPGFhc2FtcGxlcyA7aSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZmxvYXQgb3ggPSBmbG9hdChpKSphYXdpZHRoL21heChmbG9hdChhYXNhbXBsZXMtMSksIDEuKTtcclxuICAgICAgICAgICAgdnMrPSB0dXJuUGFnZShmcmFnQ29vcmQgKyB2ZWMyKG94LCBveSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmVjNCBpID0gdnMvdmVjNChhYXNhbXBsZXMqYWFzYW1wbGVzKTsgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2hvdyB0aGUgbW91c2UgcG9pbnRzLiBXYXMgb25seSB1c2VkIGZvciBkZXZlbG9wbWVudFxyXG4gICAgICAgIHZlYzQgb2NvbDsgXHJcbiAgICAgICAgaWYgKHNob3dwb2ludHMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmbG9hdCByYXRpbyA9IHJlc29sdXRpb24ueC9yZXNvbHV0aW9uLnk7XHJcbiAgICAgICAgICAgIHZlYzIgbXBvaW50ID0gbW91c2UueHk7XHJcbiAgICAgICAgICAgIHZlYzIgbWlkbXBvaW50ID0gbW91c2UueHkqMC41O1xyXG4gICAgICAgICAgICBmbG9hdCBtZGlzdCA9IGRpc3RhbmNlKGZyYWdDb29yZCwgbXBvaW50KTtcclxuICAgICAgICAgICAgZmxvYXQgbWlkbWRpc3QgPSBkaXN0YW5jZShmcmFnQ29vcmQsIG1pZG1wb2ludCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBvY29sID0gbWl4KGksIHZlYzQoMS4sIDAuLCAwLiwgMS4pLCBzbW9vdGhzdGVwKDYuLCA0LiwgbWRpc3QpKTtcclxuICAgICAgICAgICAgb2NvbCA9IG1peChvY29sLCB2ZWM0KDEuLCAxLiwgMC4sIDEuKSwgc21vb3Roc3RlcCg2LiwgNC4sIG1pZG1kaXN0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgb2NvbCA9IGk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGZyYWdDb2xvciA9IG9jb2w7XHJcbiAgICB9XHJcblxyXG4gICAgdm9pZCBtYWluKClcclxuICAgIHtcclxuICAgICAgICBtYWluSW1hZ2UoZ2xfRnJhZ0NvbG9yLCBnbF9GcmFnQ29vcmQueHkpO1xyXG4gICAgfVxyXG4gICAgYDtcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/shader/ShaderLab.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '60d02YpoG5BlpHIzjewzE0W', 'ShaderLab');
// Script/shader/ShaderLab.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MVP = "\nuniform mat4 viewProj;\nuniform mat4 model;\nattribute vec3 a_position;\nattribute vec2 a_uv0;\nvarying vec2 uv0;\nvoid main () {\n    mat4 mvp;\n    mvp = viewProj * model;\n    vec4 pos = mvp * vec4(a_position, 1);\n    gl_Position = pos;\n    uv0 = a_uv0;\n}\n";
var ShaderLab = {
    GrayScaling: {
        vert: MVP,
        frag: "\nuniform sampler2D texture;\nuniform vec4 color;\nvarying vec2 uv0;\nvoid main () {\n    vec4 c = texture2D(texture, uv0);\n    float gray = dot(c.rgb, vec3(0.299 * 0.5, 0.587 * 0.5, 0.114 * 0.5));\n    gl_FragColor = vec4(gray, gray, gray, c.a * 0.5);\n}\n"
    },
    Stone: {
        vert: MVP,
        frag: "\nuniform sampler2D texture;\nuniform vec4 color;\nvarying vec2 uv0;\nvoid main () {\n    vec4 c = color * texture2D(texture, uv0);\n    float clrbright = (c.r + c.g + c.b) * (1. / 3.);\n    float gray = (0.6) * clrbright;\n    gl_FragColor = vec4(gray, gray, gray, c.a);\n}\n"
    },
    Ice: {
        vert: MVP,
        frag: "\nuniform sampler2D texture;\nuniform vec4 color;\nvarying vec2 uv0;\nvoid main () {\n    vec4 clrx = color * texture2D(texture, uv0);\n    float brightness = (clrx.r + clrx.g + clrx.b) * (1. / 3.);\n\tfloat gray = (1.5)*brightness;\n\tclrx = vec4(gray, gray, gray, clrx.a)*vec4(0.8,1.2,1.5,1);\n    gl_FragColor =clrx;\n}\n"
    },
    Frozen: {
        vert: MVP,
        frag: "\nuniform sampler2D texture;\nuniform vec4 color;\nvarying vec2 uv0;\nvoid main () {\n    vec4 c = color * texture2D(texture, uv0);\n    c *= vec4(0.8, 1, 0.8, 1);\n\tc.b += c.a * 0.2;\n    gl_FragColor = c;\n}\n"
    },
    Mirror: {
        vert: MVP,
        frag: "\nuniform sampler2D texture;\nuniform vec4 color;\nvarying vec2 uv0;\nvoid main () {\n    vec4 c = color * texture2D(texture, uv0);\n    c.r *= 0.5;\n    c.g *= 0.8;\n    c.b += c.a * 0.2;\n    gl_FragColor = c;\n}\n"
    },
    Poison: {
        vert: MVP,
        frag: "\nuniform sampler2D texture;\nuniform vec4 color;\nvarying vec2 uv0;\nvoid main () {\n    vec4 c = color * texture2D(texture, uv0);\n    c.r *= 0.8;\n\tc.r += 0.08 * c.a;\n\tc.g *= 0.8;\n    c.g += 0.2 * c.a;\n\tc.b *= 0.8;\n    gl_FragColor = c;\n}\n"
    },
    Banish: {
        vert: MVP,
        frag: "\nuniform sampler2D texture;\nuniform vec4 color;\nvarying vec2 uv0;\nvoid main () {\n    vec4 c = color * texture2D(texture, uv0);\n    float gg = (c.r + c.g + c.b) * (1.0 / 3.0);\n    c.r = gg * 0.9;\n    c.g = gg * 1.2;\n    c.b = gg * 0.8;\n    c.a *= (gg + 0.1);\n    gl_FragColor = c;\n}\n"
    },
    Vanish: {
        vert: MVP,
        frag: "\nuniform sampler2D texture;\nuniform vec4 color;\nvarying vec2 uv0;\nvoid main () {\n    vec4 c = color * texture2D(texture, uv0);\n    float gray = (c.r + c.g + c.b) * (1. / 3.);\n    float rgb = gray * 0.8;\n    gl_FragColor = vec4(rgb, rgb, rgb, c.a * (gray + 0.1));\n}\n"
    },
    Invisible: {
        vert: MVP,
        frag: "\nvoid main () {\n    gl_FragColor = vec4(0,0,0,0);\n}\n"
    },
    Blur: {
        vert: MVP,
        frag: "\nuniform sampler2D texture;\nuniform vec4 color;\nuniform float num;\nvarying vec2 uv0;\nvoid main () {\n    vec4 sum = vec4(0.0);\n    vec2 size = vec2(num,num);\n    sum += texture2D(texture, uv0 - 0.4 * size) * 0.05;\n\tsum += texture2D(texture, uv0 - 0.3 * size) * 0.09;\n\tsum += texture2D(texture, uv0 - 0.2 * size) * 0.12;\n\tsum += texture2D(texture, uv0 - 0.1 * size) * 0.15;\n\tsum += texture2D(texture, uv0             ) * 0.16;\n\tsum += texture2D(texture, uv0 + 0.1 * size) * 0.15;\n\tsum += texture2D(texture, uv0 + 0.2 * size) * 0.12;\n\tsum += texture2D(texture, uv0 + 0.3 * size) * 0.09;\n    sum += texture2D(texture, uv0 + 0.4 * size) * 0.05;\n    \n    vec4 vectemp = vec4(0,0,0,0);\n    vec4 substract = vec4(0,0,0,0);\n    vectemp = (sum - substract) * color;\n\n    float alpha = texture2D(texture, uv0).a;\n    if(alpha < 0.05) { gl_FragColor = vec4(0 , 0 , 0 , 0); }\n\telse { gl_FragColor = vectemp; }\n}\n"
    },
    GaussBlur: {
        vert: MVP,
        frag: "\n#define repeats 5.\nuniform sampler2D texture;\nuniform vec4 color;\nuniform float num;\nvarying vec2 uv0;\n\nvec4 draw(vec2 uv) {\n    return color * texture2D(texture,uv).rgba; \n}\nfloat grid(float var, float size) {\n    return floor(var*size)/size;\n}\nfloat rand(vec2 co){\n    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\nvoid main()\n{\n    vec4 blurred_image = vec4(0.);\n    for (float i = 0.; i < repeats; i++) { \n        vec2 q = vec2(cos(degrees((i/repeats)*360.)),sin(degrees((i/repeats)*360.))) * (rand(vec2(i,uv0.x+uv0.y))+num); \n        vec2 uv2 = uv0+(q*num);\n        blurred_image += draw(uv2)/2.;\n        q = vec2(cos(degrees((i/repeats)*360.)),sin(degrees((i/repeats)*360.))) * (rand(vec2(i+2.,uv0.x+uv0.y+24.))+num); \n        uv2 = uv0+(q*num);\n        blurred_image += draw(uv2)/2.;\n    }\n    blurred_image /= repeats;\n    gl_FragColor = vec4(blurred_image);\n}\n"
    },
    Dissolve: {
        vert: MVP,
        frag: "\nuniform sampler2D texture;\nuniform vec4 color;\nuniform float time;\nvarying vec2 uv0;\n\nvoid main()\n{\n    vec4 c = color * texture2D(texture,uv0);\n    float height = c.r;\n    if(height < time)\n    {\n        discard;\n    }\n    if(height < time+0.04)\n    {\n        // \u6EB6\u89E3\u989C\u8272\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\n        c = vec4(.9,.6,0.3,c.a);\n    }\n    gl_FragColor = c;\n}\n"
    },
    Fluxay: {
        vert: MVP,
        frag: "\nuniform sampler2D texture;\nuniform vec4 color;\nuniform float time;\nvarying vec2 uv0;\n\nvoid main()\n{\n    vec4 src_color = color * texture2D(texture, uv0).rgba;\n\n    float width = 0.08;       //\u6D41\u5149\u7684\u5BBD\u5EA6\u8303\u56F4 (\u8C03\u6574\u8BE5\u503C\u6539\u53D8\u6D41\u5149\u7684\u5BBD\u5EA6)\n    float start = tan(time/1.414);  //\u6D41\u5149\u7684\u8D77\u59CBx\u5750\u6807\n    float strength = 0.008;   //\u6D41\u5149\u589E\u4EAE\u5F3A\u5EA6   (\u8C03\u6574\u8BE5\u503C\u6539\u53D8\u6D41\u5149\u7684\u589E\u4EAE\u5F3A\u5EA6)\n    float offset = 0.5;      //\u504F\u79FB\u503C         (\u8C03\u6574\u8BE5\u503C\u6539\u53D8\u6D41\u5149\u7684\u503E\u659C\u7A0B\u5EA6)\n    if(uv0.x < (start - offset * uv0.y) &&  uv0.x > (start - offset * uv0.y - width))\n    {\n        vec3 improve = strength * vec3(255, 255, 255);\n        vec3 result = improve * vec3( src_color.r, src_color.g, src_color.b);\n        gl_FragColor = vec4(result, src_color.a);\n\n    }else{\n        gl_FragColor = src_color;\n    }\n}\n"
    },
    FluxaySuper: {
        vert: MVP,
        frag: "\n#define TAU 6.12\n#define MAX_ITER 5\nuniform sampler2D texture;\nuniform vec4 color;\nuniform float time;\nvarying vec2 uv0;\n\nvoid main()\n{\n    float time = time * .5+5.;\n    // uv should be the 0-1 uv of texture...\n    vec2 uv = uv0.xy;//fragCoord.xy / iResolution.xy;\n    \n    vec2 p = mod(uv*TAU, TAU)-250.0;\n\n    vec2 i = vec2(p);\n    float c = 1.0;\n    float inten = .0045;\n\n    for (int n = 0; n < MAX_ITER; n++) \n    {\n        float t =  time * (1.0 - (3.5 / float(n+1)));\n        i = p + vec2(cos(t - i.x) + sin(t + i.y), sin(t - i.y) + cos(1.5*t + i.x));\n        c += 1.0/length(vec2(p.x / (cos(i.x+t)/inten),p.y / (cos(i.y+t)/inten)));\n    }\n    c /= float(MAX_ITER);\n    c = 1.17-pow(c, 1.4);\n    vec4 tex = texture2D(texture,uv);\n    vec3 colour = vec3(pow(abs(c), 20.0));\n    colour = clamp(colour + vec3(0.0, 0.0, .0), 0.0, tex.a);\n\n    // \u6DF7\u5408\u6CE2\u5149\n    float alpha = c*tex[3];  \n    tex[0] = tex[0] + colour[0]*alpha; \n    tex[1] = tex[1] + colour[1]*alpha; \n    tex[2] = tex[2] + colour[2]*alpha; \n    gl_FragColor = color * tex;\n}\n"
    },
    Pure: {
        vert: MVP,
        frag: "\nuniform sampler2D texture;\nuniform vec4 color;\nvarying vec2 uv0;\nvoid main () {\n    vec4 c = color * texture2D(texture, uv0);\n    gl_FragColor = vec4(color.rgb, c.a);\n}\n"
    },
    WaterWave: {
        vert: MVP,
        frag: "\n#define F cos(x-y)*cos(y),sin(x+y)*sin(y)\n\nuniform sampler2D texture;\nuniform float time;\nuniform vec3 resolution;\nvarying vec2 uv0;\n\nvec2 s(vec2 p)\n{\n    float d=time*0.2,x=8.*(p.x+d),y=8.*(p.y+d);\n    return vec2(F);\n}\nvoid mainImage( out vec4 fragColor, in vec2 fragCoord )\n{\n    // \u6362\u6210resolution\n    vec2 rs = resolution.xy;\n    // \u6362\u6210\u7EB9\u7406\u5750\u6807v_texCoord.xy\n    vec2 uv = uv0.xy;\n    vec2 q = uv+2./resolution.x*(s(uv)-s(uv+rs));\n    //\u53CD\u8F6Cy\n    // q.y=1.-q.y;\n    fragColor = texture2D(texture,q);\n}\nvoid main()\n{\n    mainImage(gl_FragColor, gl_FragCoord.xy);\n}\n"
    }
};
exports.default = ShaderLab;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzaGFkZXJcXFNoYWRlckxhYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQU0sR0FBRyxHQUFHLDJRQWFYLENBQUM7QUFFRixJQUFNLFNBQVMsR0FBRztJQUNkLFdBQVcsRUFBRTtRQUNULElBQUksRUFBRSxHQUFHO1FBQ1QsSUFBSSxFQUNaLG9RQVNDO0tBQ0k7SUFDRCxLQUFLLEVBQUU7UUFDSCxJQUFJLEVBQUUsR0FBRztRQUNULElBQUksRUFDWixzUkFVQztLQUNJO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsSUFBSSxFQUFFLEdBQUc7UUFDVCxJQUFJLEVBQ1osc1VBV0M7S0FDSTtJQUNELE1BQU0sRUFBRTtRQUNKLElBQUksRUFBRSxHQUFHO1FBQ1QsSUFBSSxFQUNaLHNOQVVDO0tBQ0k7SUFDRCxNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUUsR0FBRztRQUNULElBQUksRUFDWiwwTkFXQztLQUNJO0lBQ0QsTUFBTSxFQUFFO1FBQ0osSUFBSSxFQUFFLEdBQUc7UUFDVCxJQUFJLEVBQ1osNlBBYUM7S0FDSTtJQUNELE1BQU0sRUFBRTtRQUNKLElBQUksRUFBRSxHQUFHO1FBQ1QsSUFBSSxFQUNaLHlTQWFDO0tBQ0k7SUFDRCxNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUUsR0FBRztRQUNULElBQUksRUFDWixxUkFVQztLQUNJO0lBQ0QsU0FBUyxFQUFFO1FBQ1AsSUFBSSxFQUFFLEdBQUc7UUFDVCxJQUFJLEVBQ1osMERBSUM7S0FDSTtJQUNELElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxHQUFHO1FBQ1QsSUFBSSxFQUNaLHU2QkEwQkM7S0FDSTtJQUNELFNBQVMsRUFBRTtRQUNQLElBQUksRUFBRSxHQUFHO1FBQ1QsSUFBSSxFQUNaLDQ1QkE4QkM7S0FDSTtJQUNELFFBQVEsRUFBRTtRQUNOLElBQUksRUFBRSxHQUFHO1FBQ1QsSUFBSSxFQUNaLDRaQXFCQztLQUNJO0lBQ0QsTUFBTSxFQUFFO1FBQ0osSUFBSSxFQUFFLEdBQUc7UUFDVCxJQUFJLEVBQ1oseWdDQXdCQztLQUNJO0lBQ0QsV0FBVyxFQUFFO1FBQ1QsSUFBSSxFQUFFLEdBQUc7UUFDVCxJQUFJLEVBQ1osNmtDQXVDQztLQUNJO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLEdBQUc7UUFDVCxJQUFJLEVBQ1osb0xBUUM7S0FDSTtJQUNELFNBQVMsRUFBRTtRQUNQLElBQUksRUFBRSxHQUFHO1FBQ1QsSUFBSSxFQUNaLCtuQkE0QkM7S0FDSTtDQUNKLENBQUM7QUFFRixrQkFBZSxTQUFTLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgTVZQID0gYFxyXG51bmlmb3JtIG1hdDQgdmlld1Byb2o7XHJcbnVuaWZvcm0gbWF0NCBtb2RlbDtcclxuYXR0cmlidXRlIHZlYzMgYV9wb3NpdGlvbjtcclxuYXR0cmlidXRlIHZlYzIgYV91djA7XHJcbnZhcnlpbmcgdmVjMiB1djA7XHJcbnZvaWQgbWFpbiAoKSB7XHJcbiAgICBtYXQ0IG12cDtcclxuICAgIG12cCA9IHZpZXdQcm9qICogbW9kZWw7XHJcbiAgICB2ZWM0IHBvcyA9IG12cCAqIHZlYzQoYV9wb3NpdGlvbiwgMSk7XHJcbiAgICBnbF9Qb3NpdGlvbiA9IHBvcztcclxuICAgIHV2MCA9IGFfdXYwO1xyXG59XHJcbmA7XHJcblxyXG5jb25zdCBTaGFkZXJMYWIgPSB7XHJcbiAgICBHcmF5U2NhbGluZzoge1xyXG4gICAgICAgIHZlcnQ6IE1WUCxcclxuICAgICAgICBmcmFnOiBcclxuYFxyXG51bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlO1xyXG51bmlmb3JtIHZlYzQgY29sb3I7XHJcbnZhcnlpbmcgdmVjMiB1djA7XHJcbnZvaWQgbWFpbiAoKSB7XHJcbiAgICB2ZWM0IGMgPSB0ZXh0dXJlMkQodGV4dHVyZSwgdXYwKTtcclxuICAgIGZsb2F0IGdyYXkgPSBkb3QoYy5yZ2IsIHZlYzMoMC4yOTkgKiAwLjUsIDAuNTg3ICogMC41LCAwLjExNCAqIDAuNSkpO1xyXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChncmF5LCBncmF5LCBncmF5LCBjLmEgKiAwLjUpO1xyXG59XHJcbmBcclxuICAgIH0sXHJcbiAgICBTdG9uZToge1xyXG4gICAgICAgIHZlcnQ6IE1WUCxcclxuICAgICAgICBmcmFnOiBcclxuYFxyXG51bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlO1xyXG51bmlmb3JtIHZlYzQgY29sb3I7XHJcbnZhcnlpbmcgdmVjMiB1djA7XHJcbnZvaWQgbWFpbiAoKSB7XHJcbiAgICB2ZWM0IGMgPSBjb2xvciAqIHRleHR1cmUyRCh0ZXh0dXJlLCB1djApO1xyXG4gICAgZmxvYXQgY2xyYnJpZ2h0ID0gKGMuciArIGMuZyArIGMuYikgKiAoMS4gLyAzLik7XHJcbiAgICBmbG9hdCBncmF5ID0gKDAuNikgKiBjbHJicmlnaHQ7XHJcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGdyYXksIGdyYXksIGdyYXksIGMuYSk7XHJcbn1cclxuYFxyXG4gICAgfSxcclxuICAgIEljZToge1xyXG4gICAgICAgIHZlcnQ6IE1WUCxcclxuICAgICAgICBmcmFnOiBcclxuYFxyXG51bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlO1xyXG51bmlmb3JtIHZlYzQgY29sb3I7XHJcbnZhcnlpbmcgdmVjMiB1djA7XHJcbnZvaWQgbWFpbiAoKSB7XHJcbiAgICB2ZWM0IGNscnggPSBjb2xvciAqIHRleHR1cmUyRCh0ZXh0dXJlLCB1djApO1xyXG4gICAgZmxvYXQgYnJpZ2h0bmVzcyA9IChjbHJ4LnIgKyBjbHJ4LmcgKyBjbHJ4LmIpICogKDEuIC8gMy4pO1xyXG5cdGZsb2F0IGdyYXkgPSAoMS41KSpicmlnaHRuZXNzO1xyXG5cdGNscnggPSB2ZWM0KGdyYXksIGdyYXksIGdyYXksIGNscnguYSkqdmVjNCgwLjgsMS4yLDEuNSwxKTtcclxuICAgIGdsX0ZyYWdDb2xvciA9Y2xyeDtcclxufVxyXG5gXHJcbiAgICB9LFxyXG4gICAgRnJvemVuOiB7XHJcbiAgICAgICAgdmVydDogTVZQLFxyXG4gICAgICAgIGZyYWc6IFxyXG5gXHJcbnVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7XHJcbnVuaWZvcm0gdmVjNCBjb2xvcjtcclxudmFyeWluZyB2ZWMyIHV2MDtcclxudm9pZCBtYWluICgpIHtcclxuICAgIHZlYzQgYyA9IGNvbG9yICogdGV4dHVyZTJEKHRleHR1cmUsIHV2MCk7XHJcbiAgICBjICo9IHZlYzQoMC44LCAxLCAwLjgsIDEpO1xyXG5cdGMuYiArPSBjLmEgKiAwLjI7XHJcbiAgICBnbF9GcmFnQ29sb3IgPSBjO1xyXG59XHJcbmBcclxuICAgIH0sXHJcbiAgICBNaXJyb3I6IHtcclxuICAgICAgICB2ZXJ0OiBNVlAsXHJcbiAgICAgICAgZnJhZzogXHJcbmBcclxudW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTtcclxudW5pZm9ybSB2ZWM0IGNvbG9yO1xyXG52YXJ5aW5nIHZlYzIgdXYwO1xyXG52b2lkIG1haW4gKCkge1xyXG4gICAgdmVjNCBjID0gY29sb3IgKiB0ZXh0dXJlMkQodGV4dHVyZSwgdXYwKTtcclxuICAgIGMuciAqPSAwLjU7XHJcbiAgICBjLmcgKj0gMC44O1xyXG4gICAgYy5iICs9IGMuYSAqIDAuMjtcclxuICAgIGdsX0ZyYWdDb2xvciA9IGM7XHJcbn1cclxuYFxyXG4gICAgfSxcclxuICAgIFBvaXNvbjoge1xyXG4gICAgICAgIHZlcnQ6IE1WUCxcclxuICAgICAgICBmcmFnOiBcclxuYFxyXG51bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlO1xyXG51bmlmb3JtIHZlYzQgY29sb3I7XHJcbnZhcnlpbmcgdmVjMiB1djA7XHJcbnZvaWQgbWFpbiAoKSB7XHJcbiAgICB2ZWM0IGMgPSBjb2xvciAqIHRleHR1cmUyRCh0ZXh0dXJlLCB1djApO1xyXG4gICAgYy5yICo9IDAuODtcclxuXHRjLnIgKz0gMC4wOCAqIGMuYTtcclxuXHRjLmcgKj0gMC44O1xyXG4gICAgYy5nICs9IDAuMiAqIGMuYTtcclxuXHRjLmIgKj0gMC44O1xyXG4gICAgZ2xfRnJhZ0NvbG9yID0gYztcclxufVxyXG5gXHJcbiAgICB9LFxyXG4gICAgQmFuaXNoOiB7XHJcbiAgICAgICAgdmVydDogTVZQLFxyXG4gICAgICAgIGZyYWc6IFxyXG5gXHJcbnVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7XHJcbnVuaWZvcm0gdmVjNCBjb2xvcjtcclxudmFyeWluZyB2ZWMyIHV2MDtcclxudm9pZCBtYWluICgpIHtcclxuICAgIHZlYzQgYyA9IGNvbG9yICogdGV4dHVyZTJEKHRleHR1cmUsIHV2MCk7XHJcbiAgICBmbG9hdCBnZyA9IChjLnIgKyBjLmcgKyBjLmIpICogKDEuMCAvIDMuMCk7XHJcbiAgICBjLnIgPSBnZyAqIDAuOTtcclxuICAgIGMuZyA9IGdnICogMS4yO1xyXG4gICAgYy5iID0gZ2cgKiAwLjg7XHJcbiAgICBjLmEgKj0gKGdnICsgMC4xKTtcclxuICAgIGdsX0ZyYWdDb2xvciA9IGM7XHJcbn1cclxuYFxyXG4gICAgfSxcclxuICAgIFZhbmlzaDoge1xyXG4gICAgICAgIHZlcnQ6IE1WUCxcclxuICAgICAgICBmcmFnOiBcclxuYFxyXG51bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlO1xyXG51bmlmb3JtIHZlYzQgY29sb3I7XHJcbnZhcnlpbmcgdmVjMiB1djA7XHJcbnZvaWQgbWFpbiAoKSB7XHJcbiAgICB2ZWM0IGMgPSBjb2xvciAqIHRleHR1cmUyRCh0ZXh0dXJlLCB1djApO1xyXG4gICAgZmxvYXQgZ3JheSA9IChjLnIgKyBjLmcgKyBjLmIpICogKDEuIC8gMy4pO1xyXG4gICAgZmxvYXQgcmdiID0gZ3JheSAqIDAuODtcclxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQocmdiLCByZ2IsIHJnYiwgYy5hICogKGdyYXkgKyAwLjEpKTtcclxufVxyXG5gXHJcbiAgICB9LFxyXG4gICAgSW52aXNpYmxlOiB7XHJcbiAgICAgICAgdmVydDogTVZQLFxyXG4gICAgICAgIGZyYWc6IFxyXG5gXHJcbnZvaWQgbWFpbiAoKSB7XHJcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KDAsMCwwLDApO1xyXG59XHJcbmBcclxuICAgIH0sXHJcbiAgICBCbHVyOiB7XHJcbiAgICAgICAgdmVydDogTVZQLFxyXG4gICAgICAgIGZyYWc6IFxyXG5gXHJcbnVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7XHJcbnVuaWZvcm0gdmVjNCBjb2xvcjtcclxudW5pZm9ybSBmbG9hdCBudW07XHJcbnZhcnlpbmcgdmVjMiB1djA7XHJcbnZvaWQgbWFpbiAoKSB7XHJcbiAgICB2ZWM0IHN1bSA9IHZlYzQoMC4wKTtcclxuICAgIHZlYzIgc2l6ZSA9IHZlYzIobnVtLG51bSk7XHJcbiAgICBzdW0gKz0gdGV4dHVyZTJEKHRleHR1cmUsIHV2MCAtIDAuNCAqIHNpemUpICogMC4wNTtcclxuXHRzdW0gKz0gdGV4dHVyZTJEKHRleHR1cmUsIHV2MCAtIDAuMyAqIHNpemUpICogMC4wOTtcclxuXHRzdW0gKz0gdGV4dHVyZTJEKHRleHR1cmUsIHV2MCAtIDAuMiAqIHNpemUpICogMC4xMjtcclxuXHRzdW0gKz0gdGV4dHVyZTJEKHRleHR1cmUsIHV2MCAtIDAuMSAqIHNpemUpICogMC4xNTtcclxuXHRzdW0gKz0gdGV4dHVyZTJEKHRleHR1cmUsIHV2MCAgICAgICAgICAgICApICogMC4xNjtcclxuXHRzdW0gKz0gdGV4dHVyZTJEKHRleHR1cmUsIHV2MCArIDAuMSAqIHNpemUpICogMC4xNTtcclxuXHRzdW0gKz0gdGV4dHVyZTJEKHRleHR1cmUsIHV2MCArIDAuMiAqIHNpemUpICogMC4xMjtcclxuXHRzdW0gKz0gdGV4dHVyZTJEKHRleHR1cmUsIHV2MCArIDAuMyAqIHNpemUpICogMC4wOTtcclxuICAgIHN1bSArPSB0ZXh0dXJlMkQodGV4dHVyZSwgdXYwICsgMC40ICogc2l6ZSkgKiAwLjA1O1xyXG4gICAgXHJcbiAgICB2ZWM0IHZlY3RlbXAgPSB2ZWM0KDAsMCwwLDApO1xyXG4gICAgdmVjNCBzdWJzdHJhY3QgPSB2ZWM0KDAsMCwwLDApO1xyXG4gICAgdmVjdGVtcCA9IChzdW0gLSBzdWJzdHJhY3QpICogY29sb3I7XHJcblxyXG4gICAgZmxvYXQgYWxwaGEgPSB0ZXh0dXJlMkQodGV4dHVyZSwgdXYwKS5hO1xyXG4gICAgaWYoYWxwaGEgPCAwLjA1KSB7IGdsX0ZyYWdDb2xvciA9IHZlYzQoMCAsIDAgLCAwICwgMCk7IH1cclxuXHRlbHNlIHsgZ2xfRnJhZ0NvbG9yID0gdmVjdGVtcDsgfVxyXG59XHJcbmBcclxuICAgIH0sXHJcbiAgICBHYXVzc0JsdXI6IHtcclxuICAgICAgICB2ZXJ0OiBNVlAsXHJcbiAgICAgICAgZnJhZzogXHJcbmBcclxuI2RlZmluZSByZXBlYXRzIDUuXHJcbnVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7XHJcbnVuaWZvcm0gdmVjNCBjb2xvcjtcclxudW5pZm9ybSBmbG9hdCBudW07XHJcbnZhcnlpbmcgdmVjMiB1djA7XHJcblxyXG52ZWM0IGRyYXcodmVjMiB1dikge1xyXG4gICAgcmV0dXJuIGNvbG9yICogdGV4dHVyZTJEKHRleHR1cmUsdXYpLnJnYmE7IFxyXG59XHJcbmZsb2F0IGdyaWQoZmxvYXQgdmFyLCBmbG9hdCBzaXplKSB7XHJcbiAgICByZXR1cm4gZmxvb3IodmFyKnNpemUpL3NpemU7XHJcbn1cclxuZmxvYXQgcmFuZCh2ZWMyIGNvKXtcclxuICAgIHJldHVybiBmcmFjdChzaW4oZG90KGNvLnh5ICx2ZWMyKDEyLjk4OTgsNzguMjMzKSkpICogNDM3NTguNTQ1Myk7XHJcbn1cclxudm9pZCBtYWluKClcclxue1xyXG4gICAgdmVjNCBibHVycmVkX2ltYWdlID0gdmVjNCgwLik7XHJcbiAgICBmb3IgKGZsb2F0IGkgPSAwLjsgaSA8IHJlcGVhdHM7IGkrKykgeyBcclxuICAgICAgICB2ZWMyIHEgPSB2ZWMyKGNvcyhkZWdyZWVzKChpL3JlcGVhdHMpKjM2MC4pKSxzaW4oZGVncmVlcygoaS9yZXBlYXRzKSozNjAuKSkpICogKHJhbmQodmVjMihpLHV2MC54K3V2MC55KSkrbnVtKTsgXHJcbiAgICAgICAgdmVjMiB1djIgPSB1djArKHEqbnVtKTtcclxuICAgICAgICBibHVycmVkX2ltYWdlICs9IGRyYXcodXYyKS8yLjtcclxuICAgICAgICBxID0gdmVjMihjb3MoZGVncmVlcygoaS9yZXBlYXRzKSozNjAuKSksc2luKGRlZ3JlZXMoKGkvcmVwZWF0cykqMzYwLikpKSAqIChyYW5kKHZlYzIoaSsyLix1djAueCt1djAueSsyNC4pKStudW0pOyBcclxuICAgICAgICB1djIgPSB1djArKHEqbnVtKTtcclxuICAgICAgICBibHVycmVkX2ltYWdlICs9IGRyYXcodXYyKS8yLjtcclxuICAgIH1cclxuICAgIGJsdXJyZWRfaW1hZ2UgLz0gcmVwZWF0cztcclxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoYmx1cnJlZF9pbWFnZSk7XHJcbn1cclxuYFxyXG4gICAgfSxcclxuICAgIERpc3NvbHZlOiB7XHJcbiAgICAgICAgdmVydDogTVZQLFxyXG4gICAgICAgIGZyYWc6IFxyXG5gXHJcbnVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7XHJcbnVuaWZvcm0gdmVjNCBjb2xvcjtcclxudW5pZm9ybSBmbG9hdCB0aW1lO1xyXG52YXJ5aW5nIHZlYzIgdXYwO1xyXG5cclxudm9pZCBtYWluKClcclxue1xyXG4gICAgdmVjNCBjID0gY29sb3IgKiB0ZXh0dXJlMkQodGV4dHVyZSx1djApO1xyXG4gICAgZmxvYXQgaGVpZ2h0ID0gYy5yO1xyXG4gICAgaWYoaGVpZ2h0IDwgdGltZSlcclxuICAgIHtcclxuICAgICAgICBkaXNjYXJkO1xyXG4gICAgfVxyXG4gICAgaWYoaGVpZ2h0IDwgdGltZSswLjA0KVxyXG4gICAge1xyXG4gICAgICAgIC8vIOa6tuino+minOiJsu+8jOWPr+S7peiHquWumuS5iVxyXG4gICAgICAgIGMgPSB2ZWM0KC45LC42LDAuMyxjLmEpO1xyXG4gICAgfVxyXG4gICAgZ2xfRnJhZ0NvbG9yID0gYztcclxufVxyXG5gXHJcbiAgICB9LFxyXG4gICAgRmx1eGF5OiB7XHJcbiAgICAgICAgdmVydDogTVZQLFxyXG4gICAgICAgIGZyYWc6IFxyXG5gXHJcbnVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7XHJcbnVuaWZvcm0gdmVjNCBjb2xvcjtcclxudW5pZm9ybSBmbG9hdCB0aW1lO1xyXG52YXJ5aW5nIHZlYzIgdXYwO1xyXG5cclxudm9pZCBtYWluKClcclxue1xyXG4gICAgdmVjNCBzcmNfY29sb3IgPSBjb2xvciAqIHRleHR1cmUyRCh0ZXh0dXJlLCB1djApLnJnYmE7XHJcblxyXG4gICAgZmxvYXQgd2lkdGggPSAwLjA4OyAgICAgICAvL+a1geWFieeahOWuveW6puiMg+WbtCAo6LCD5pW06K+l5YC85pS55Y+Y5rWB5YWJ55qE5a695bqmKVxyXG4gICAgZmxvYXQgc3RhcnQgPSB0YW4odGltZS8xLjQxNCk7ICAvL+a1geWFieeahOi1t+Wni3jlnZDmoIdcclxuICAgIGZsb2F0IHN0cmVuZ3RoID0gMC4wMDg7ICAgLy/mtYHlhYnlop7kuq7lvLrluqYgICAo6LCD5pW06K+l5YC85pS55Y+Y5rWB5YWJ55qE5aKe5Lqu5by65bqmKVxyXG4gICAgZmxvYXQgb2Zmc2V0ID0gMC41OyAgICAgIC8v5YGP56e75YC8ICAgICAgICAgKOiwg+aVtOivpeWAvOaUueWPmOa1geWFieeahOWAvuaWnOeoi+W6pilcclxuICAgIGlmKHV2MC54IDwgKHN0YXJ0IC0gb2Zmc2V0ICogdXYwLnkpICYmICB1djAueCA+IChzdGFydCAtIG9mZnNldCAqIHV2MC55IC0gd2lkdGgpKVxyXG4gICAge1xyXG4gICAgICAgIHZlYzMgaW1wcm92ZSA9IHN0cmVuZ3RoICogdmVjMygyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICB2ZWMzIHJlc3VsdCA9IGltcHJvdmUgKiB2ZWMzKCBzcmNfY29sb3Iuciwgc3JjX2NvbG9yLmcsIHNyY19jb2xvci5iKTtcclxuICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHJlc3VsdCwgc3JjX2NvbG9yLmEpO1xyXG5cclxuICAgIH1lbHNle1xyXG4gICAgICAgIGdsX0ZyYWdDb2xvciA9IHNyY19jb2xvcjtcclxuICAgIH1cclxufVxyXG5gXHJcbiAgICB9LFxyXG4gICAgRmx1eGF5U3VwZXI6IHtcclxuICAgICAgICB2ZXJ0OiBNVlAsXHJcbiAgICAgICAgZnJhZzogXHJcbmBcclxuI2RlZmluZSBUQVUgNi4xMlxyXG4jZGVmaW5lIE1BWF9JVEVSIDVcclxudW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTtcclxudW5pZm9ybSB2ZWM0IGNvbG9yO1xyXG51bmlmb3JtIGZsb2F0IHRpbWU7XHJcbnZhcnlpbmcgdmVjMiB1djA7XHJcblxyXG52b2lkIG1haW4oKVxyXG57XHJcbiAgICBmbG9hdCB0aW1lID0gdGltZSAqIC41KzUuO1xyXG4gICAgLy8gdXYgc2hvdWxkIGJlIHRoZSAwLTEgdXYgb2YgdGV4dHVyZS4uLlxyXG4gICAgdmVjMiB1diA9IHV2MC54eTsvL2ZyYWdDb29yZC54eSAvIGlSZXNvbHV0aW9uLnh5O1xyXG4gICAgXHJcbiAgICB2ZWMyIHAgPSBtb2QodXYqVEFVLCBUQVUpLTI1MC4wO1xyXG5cclxuICAgIHZlYzIgaSA9IHZlYzIocCk7XHJcbiAgICBmbG9hdCBjID0gMS4wO1xyXG4gICAgZmxvYXQgaW50ZW4gPSAuMDA0NTtcclxuXHJcbiAgICBmb3IgKGludCBuID0gMDsgbiA8IE1BWF9JVEVSOyBuKyspIFxyXG4gICAge1xyXG4gICAgICAgIGZsb2F0IHQgPSAgdGltZSAqICgxLjAgLSAoMy41IC8gZmxvYXQobisxKSkpO1xyXG4gICAgICAgIGkgPSBwICsgdmVjMihjb3ModCAtIGkueCkgKyBzaW4odCArIGkueSksIHNpbih0IC0gaS55KSArIGNvcygxLjUqdCArIGkueCkpO1xyXG4gICAgICAgIGMgKz0gMS4wL2xlbmd0aCh2ZWMyKHAueCAvIChjb3MoaS54K3QpL2ludGVuKSxwLnkgLyAoY29zKGkueSt0KS9pbnRlbikpKTtcclxuICAgIH1cclxuICAgIGMgLz0gZmxvYXQoTUFYX0lURVIpO1xyXG4gICAgYyA9IDEuMTctcG93KGMsIDEuNCk7XHJcbiAgICB2ZWM0IHRleCA9IHRleHR1cmUyRCh0ZXh0dXJlLHV2KTtcclxuICAgIHZlYzMgY29sb3VyID0gdmVjMyhwb3coYWJzKGMpLCAyMC4wKSk7XHJcbiAgICBjb2xvdXIgPSBjbGFtcChjb2xvdXIgKyB2ZWMzKDAuMCwgMC4wLCAuMCksIDAuMCwgdGV4LmEpO1xyXG5cclxuICAgIC8vIOa3t+WQiOazouWFiVxyXG4gICAgZmxvYXQgYWxwaGEgPSBjKnRleFszXTsgIFxyXG4gICAgdGV4WzBdID0gdGV4WzBdICsgY29sb3VyWzBdKmFscGhhOyBcclxuICAgIHRleFsxXSA9IHRleFsxXSArIGNvbG91clsxXSphbHBoYTsgXHJcbiAgICB0ZXhbMl0gPSB0ZXhbMl0gKyBjb2xvdXJbMl0qYWxwaGE7IFxyXG4gICAgZ2xfRnJhZ0NvbG9yID0gY29sb3IgKiB0ZXg7XHJcbn1cclxuYFxyXG4gICAgfSxcclxuICAgIFB1cmU6IHtcclxuICAgICAgICB2ZXJ0OiBNVlAsXHJcbiAgICAgICAgZnJhZzogXHJcbmBcclxudW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTtcclxudW5pZm9ybSB2ZWM0IGNvbG9yO1xyXG52YXJ5aW5nIHZlYzIgdXYwO1xyXG52b2lkIG1haW4gKCkge1xyXG4gICAgdmVjNCBjID0gY29sb3IgKiB0ZXh0dXJlMkQodGV4dHVyZSwgdXYwKTtcclxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoY29sb3IucmdiLCBjLmEpO1xyXG59XHJcbmBcclxuICAgIH0sXHJcbiAgICBXYXRlcldhdmU6IHtcclxuICAgICAgICB2ZXJ0OiBNVlAsXHJcbiAgICAgICAgZnJhZzpcclxuYFxyXG4jZGVmaW5lIEYgY29zKHgteSkqY29zKHkpLHNpbih4K3kpKnNpbih5KVxyXG5cclxudW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTtcclxudW5pZm9ybSBmbG9hdCB0aW1lO1xyXG51bmlmb3JtIHZlYzMgcmVzb2x1dGlvbjtcclxudmFyeWluZyB2ZWMyIHV2MDtcclxuXHJcbnZlYzIgcyh2ZWMyIHApXHJcbntcclxuICAgIGZsb2F0IGQ9dGltZSowLjIseD04LioocC54K2QpLHk9OC4qKHAueStkKTtcclxuICAgIHJldHVybiB2ZWMyKEYpO1xyXG59XHJcbnZvaWQgbWFpbkltYWdlKCBvdXQgdmVjNCBmcmFnQ29sb3IsIGluIHZlYzIgZnJhZ0Nvb3JkIClcclxue1xyXG4gICAgLy8g5o2i5oiQcmVzb2x1dGlvblxyXG4gICAgdmVjMiBycyA9IHJlc29sdXRpb24ueHk7XHJcbiAgICAvLyDmjaLmiJDnurnnkIblnZDmoId2X3RleENvb3JkLnh5XHJcbiAgICB2ZWMyIHV2ID0gdXYwLnh5O1xyXG4gICAgdmVjMiBxID0gdXYrMi4vcmVzb2x1dGlvbi54KihzKHV2KS1zKHV2K3JzKSk7XHJcbiAgICAvL+WPjei9rHlcclxuICAgIC8vIHEueT0xLi1xLnk7XHJcbiAgICBmcmFnQ29sb3IgPSB0ZXh0dXJlMkQodGV4dHVyZSxxKTtcclxufVxyXG52b2lkIG1haW4oKVxyXG57XHJcbiAgICBtYWluSW1hZ2UoZ2xfRnJhZ0NvbG9yLCBnbF9GcmFnQ29vcmQueHkpO1xyXG59XHJcbmBcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoYWRlckxhYjtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/DissolveFrag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dca57lTnNZAd7NZ/YjDNwv/', 'DissolveFrag');
// Script/DissolveFrag.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DissolveFrag = /** @class */ (function () {
    function DissolveFrag() {
    }
    DissolveFrag.vert = "\n    attribute vec4 a_position;\n    attribute vec2 a_texCoord;\n    attribute vec4 a_color;\n    varying vec2 v_texCoord; \n    varying vec4 v_fragmentColor; \n    void main() \n    { \n        gl_Position = CC_PMatrix * a_position;\n        v_fragmentColor = a_color; \n        v_texCoord = a_texCoord; \n    }\n    ";
    DissolveFrag.frag = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n\n    uniform vec2 resolution;\n    uniform float time;\n    uniform sampler2D texture1;\n\n    varying vec2 v_texCoord;\n    varying vec4 v_fragmentColor;\n    void mainImage( out vec4 fragColor, in vec2 fragCoord )\n    {\n        // \u7EB9\u7406\u5750\u6807\n        vec2 uv = v_texCoord;\n        // \u6CD5\u5411\u7EB9\u7406r\u901A\u9053\n        float height = texture2D(texture1,uv).r;\n        // \u91C7\u6837\u7EB9\u7406\n        vec4 color = v_fragmentColor * texture2D(CC_Texture0,uv);\n\n        if(height < time)\n        {\n            discard;\n        }\n        \n        if(height < time+0.04)\n        {\n            // \u6EB6\u89E3\u989C\u8272\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\n            color = vec4(.9,.6,0.3,color.a);\n        }\n        \n        fragColor = color;\n    }\n\n    void main()\n    {\n        mainImage(gl_FragColor, gl_FragCoord.xy);\n    }\n    ";
    return DissolveFrag;
}());
exports.default = DissolveFrag;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEaXNzb2x2ZUZyYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBc0RBLENBQUM7SUFyRFUsaUJBQUksR0FBRSxpVUFZWixDQUFDO0lBRUssaUJBQUksR0FBQyx1N0JBc0NYLENBQUM7SUFDTixtQkFBQztDQXRERCxBQXNEQyxJQUFBO2tCQXREb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3NvbHZlRnJhZyB7XHJcbiAgICBzdGF0aWMgdmVydCA9YFxyXG4gICAgYXR0cmlidXRlIHZlYzQgYV9wb3NpdGlvbjtcclxuICAgIGF0dHJpYnV0ZSB2ZWMyIGFfdGV4Q29vcmQ7XHJcbiAgICBhdHRyaWJ1dGUgdmVjNCBhX2NvbG9yO1xyXG4gICAgdmFyeWluZyB2ZWMyIHZfdGV4Q29vcmQ7IFxyXG4gICAgdmFyeWluZyB2ZWM0IHZfZnJhZ21lbnRDb2xvcjsgXHJcbiAgICB2b2lkIG1haW4oKSBcclxuICAgIHsgXHJcbiAgICAgICAgZ2xfUG9zaXRpb24gPSBDQ19QTWF0cml4ICogYV9wb3NpdGlvbjtcclxuICAgICAgICB2X2ZyYWdtZW50Q29sb3IgPSBhX2NvbG9yOyBcclxuICAgICAgICB2X3RleENvb3JkID0gYV90ZXhDb29yZDsgXHJcbiAgICB9XHJcbiAgICBgO1xyXG4gICAgXHJcbiAgICBzdGF0aWMgZnJhZz1gXHJcbiAgICAjaWZkZWYgR0xfRVNcclxuICAgIHByZWNpc2lvbiBsb3dwIGZsb2F0O1xyXG4gICAgI2VuZGlmXHJcblxyXG4gICAgdW5pZm9ybSB2ZWMyIHJlc29sdXRpb247XHJcbiAgICB1bmlmb3JtIGZsb2F0IHRpbWU7XHJcbiAgICB1bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlMTtcclxuXHJcbiAgICB2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxuICAgIHZhcnlpbmcgdmVjNCB2X2ZyYWdtZW50Q29sb3I7XHJcbiAgICB2b2lkIG1haW5JbWFnZSggb3V0IHZlYzQgZnJhZ0NvbG9yLCBpbiB2ZWMyIGZyYWdDb29yZCApXHJcbiAgICB7XHJcbiAgICAgICAgLy8g57q555CG5Z2Q5qCHXHJcbiAgICAgICAgdmVjMiB1diA9IHZfdGV4Q29vcmQ7XHJcbiAgICAgICAgLy8g5rOV5ZCR57q555CGcumAmumBk1xyXG4gICAgICAgIGZsb2F0IGhlaWdodCA9IHRleHR1cmUyRCh0ZXh0dXJlMSx1dikucjtcclxuICAgICAgICAvLyDph4fmoLfnurnnkIZcclxuICAgICAgICB2ZWM0IGNvbG9yID0gdl9mcmFnbWVudENvbG9yICogdGV4dHVyZTJEKENDX1RleHR1cmUwLHV2KTtcclxuXHJcbiAgICAgICAgaWYoaGVpZ2h0IDwgdGltZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRpc2NhcmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGhlaWdodCA8IHRpbWUrMC4wNClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIOa6tuino+minOiJsu+8jOWPr+S7peiHquWumuS5iVxyXG4gICAgICAgICAgICBjb2xvciA9IHZlYzQoLjksLjYsMC4zLGNvbG9yLmEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmcmFnQ29sb3IgPSBjb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICB2b2lkIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIG1haW5JbWFnZShnbF9GcmFnQ29sb3IsIGdsX0ZyYWdDb29yZC54eSk7XHJcbiAgICB9XHJcbiAgICBgO1xyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/DissolveEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '831c4Ne7TdMaYLo5lnjBd8e', 'DissolveEffect');
// Script/DissolveEffect.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DissolveFrag_1 = require("./DissolveFrag");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DissolveEffect = /** @class */ (function (_super) {
    __extends(DissolveEffect, _super);
    function DissolveEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.noiseTexture = null;
        _this.startTime = Date.now();
        _this.time = 0.;
        return _this;
    }
    DissolveEffect.prototype.onLoad = function () {
        this.enabled = false;
    };
    DissolveEffect.prototype.useDissolve = function () {
        // 绑定噪音纹理
        var texture1 = this.noiseTexture.getTexture();
        var gltext1 = texture1._glID;
        if (cc.sys.isNative) {
        }
        else {
            cc.gl.bindTexture2DN(1, texture1);
        }
        this.program = new cc.GLProgram();
        if (cc.sys.isNative) {
            this.program.initWithString(DissolveFrag_1.default.vert, DissolveFrag_1.default.frag);
        }
        else {
            this.program.initWithVertexShaderByteArray(DissolveFrag_1.default.vert, DissolveFrag_1.default.frag);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
        }
        this.program.link();
        this.program.updateUniforms();
        this.program.use();
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
            glProgram_state.setUniformFloat("time", this.time);
            glProgram_state.setUniformTexture("texture1", gltext1);
        }
        else {
            var ba = this.program.getUniformLocationForName("time");
            var text1 = this.program.getUniformLocationForName("texture1");
            this.program.setUniformLocationWith1f(ba, this.time);
            this.program.setUniformLocationWith1i(text1, 1);
        }
        this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program);
        this.enabled = true;
    };
    DissolveEffect.prototype.setProgram = function (node, program) {
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(program);
            node.setGLProgramState(glProgram_state);
        }
        else {
            node.setShaderProgram(program);
        }
    };
    DissolveEffect.prototype.update = function (dt) {
        // 溶解速度
        this.time += 0.008;
        if (this.program) {
            this.program.use();
            if (cc.sys.isNative) {
                var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
                glProgram_state.setUniformFloat("time", this.time);
            }
            else {
                var ct = this.program.getUniformLocationForName("time");
                this.program.setUniformLocationWith1f(ct, this.time);
            }
        }
    };
    __decorate([
        property(cc.SpriteFrame)
    ], DissolveEffect.prototype, "noiseTexture", void 0);
    DissolveEffect = __decorate([
        ccclass
    ], DissolveEffect);
    return DissolveEffect;
}(cc.Component));
exports.default = DissolveEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEaXNzb2x2ZUVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBMEM7QUFDcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUEwRUM7UUF2RUcsa0JBQVksR0FBbUIsSUFBSSxDQUFDO1FBR3BDLGVBQVMsR0FBVSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDOUIsVUFBSSxHQUFXLEVBQUUsQ0FBQzs7SUFtRXRCLENBQUM7SUFoRUcsK0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0ksU0FBUztRQUNULElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDOUMsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUM3QixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1NBQ3BCO2FBQ0k7WUFDRCxFQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDckM7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2xDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsc0JBQVksQ0FBQyxJQUFJLEVBQUUsc0JBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyRTthQUFNO1lBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxzQkFBWSxDQUFDLElBQUksRUFBRSxzQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pGLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQzdGLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3ZGLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1NBQ25HO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFbkIsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvRSxlQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkQsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUMxRDthQUFNO1lBQ0gsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4RCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNuRDtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVELG1DQUFVLEdBQVYsVUFBVyxJQUFTLEVBQUUsT0FBWTtRQUM5QixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksZUFBZSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEM7SUFDTCxDQUFDO0lBRUQsK0JBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxPQUFPO1FBQ1AsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNuQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDL0UsZUFBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3REO2lCQUFNO2dCQUNILElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4RDtTQUNKO0lBQ0wsQ0FBQztJQXRFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3dEQUNXO0lBSG5CLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0EwRWxDO0lBQUQscUJBQUM7Q0ExRUQsQUEwRUMsQ0ExRTJDLEVBQUUsQ0FBQyxTQUFTLEdBMEV2RDtrQkExRW9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlzc29sdmVGcmFnIGZyb20gJy4vRGlzc29sdmVGcmFnJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3NvbHZlRWZmZWN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBub2lzZVRleHR1cmU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBwcm9ncmFtOiBjYy5HTFByb2dyYW07XHJcbiAgICBzdGFydFRpbWU6bnVtYmVyID0gRGF0ZS5ub3coKTtcclxuICAgIHRpbWU6IG51bWJlciA9IDAuO1xyXG5cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRGlzc29sdmUoKSB7XHJcbiAgICAgICAgLy8g57uR5a6a5Zmq6Z+z57q555CGXHJcbiAgICAgICAgbGV0IHRleHR1cmUxID0gdGhpcy5ub2lzZVRleHR1cmUuZ2V0VGV4dHVyZSgpO1xyXG4gICAgICAgIGxldCBnbHRleHQxID0gdGV4dHVyZTEuX2dsSUQ7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2MuZ2wuYmluZFRleHR1cmUyRE4oMSwgdGV4dHVyZTEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbmV3IGNjLkdMUHJvZ3JhbSgpO1xyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmluaXRXaXRoU3RyaW5nKERpc3NvbHZlRnJhZy52ZXJ0LCBEaXNzb2x2ZUZyYWcuZnJhZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmluaXRXaXRoVmVydGV4U2hhZGVyQnl0ZUFycmF5KERpc3NvbHZlRnJhZy52ZXJ0LCBEaXNzb2x2ZUZyYWcuZnJhZyk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfUE9TSVRJT04sIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfUE9TSVRJT04pO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX0NPTE9SLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX0NPTE9SKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9URVhfQ09PUkQsIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfVEVYX0NPT1JEUyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvZ3JhbS5saW5rKCk7XHJcbiAgICAgICAgdGhpcy5wcm9ncmFtLnVwZGF0ZVVuaWZvcm1zKCk7XHJcbiAgICAgICAgdGhpcy5wcm9ncmFtLnVzZSgpO1xyXG5cclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0odGhpcy5wcm9ncmFtKTtcclxuICAgICAgICAgICAgZ2xQcm9ncmFtX3N0YXRlLnNldFVuaWZvcm1GbG9hdChcInRpbWVcIiwgdGhpcy50aW1lKTtcclxuICAgICAgICAgICAgZ2xQcm9ncmFtX3N0YXRlLnNldFVuaWZvcm1UZXh0dXJlKFwidGV4dHVyZTFcIiwgZ2x0ZXh0MSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGJhID0gdGhpcy5wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoXCJ0aW1lXCIpO1xyXG4gICAgICAgICAgICBsZXQgdGV4dDEgPSB0aGlzLnByb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZShcInRleHR1cmUxXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmKGJhLCB0aGlzLnRpbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFpKHRleHQxLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRQcm9ncmFtKHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5fc2dOb2RlLCB0aGlzLnByb2dyYW0pO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvZ3JhbShub2RlOiBhbnksIHByb2dyYW06IGFueSkge1xyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgdmFyIGdsUHJvZ3JhbV9zdGF0ZSA9IGNjLkdMUHJvZ3JhbVN0YXRlLmdldE9yQ3JlYXRlV2l0aEdMUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgICAgICAgICAgbm9kZS5zZXRHTFByb2dyYW1TdGF0ZShnbFByb2dyYW1fc3RhdGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0U2hhZGVyUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy8g5rq26Kej6YCf5bqmXHJcbiAgICAgICAgdGhpcy50aW1lICs9IDAuMDA4O1xyXG4gICAgICAgIGlmICh0aGlzLnByb2dyYW0pIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnVzZSgpO1xyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgICAgICAgICBnbFByb2dyYW1fc3RhdGUuc2V0VW5pZm9ybUZsb2F0KFwidGltZVwiLCB0aGlzLnRpbWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN0ID0gdGhpcy5wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoXCJ0aW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgxZihjdCwgdGhpcy50aW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/EffectManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bd1117F/2dLHJBPHjLTzcUt', 'EffectManager');
// Script/EffectManager.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EffectManager = /** @class */ (function (_super) {
    __extends(EffectManager, _super);
    function EffectManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fragShader = 'lightcircle';
        _this.default_vert = "\n    attribute vec4 a_position;\n    attribute vec2 a_texCoord;\n    attribute vec4 a_color;\n    varying vec2 v_texCoord;\n    varying vec4 v_fragmentColor;\n    void main()\n    {\n        gl_Position = CC_PMatrix * a_position;\n        v_fragmentColor = a_color;\n        v_texCoord = a_texCoord;\n    }\n    ";
        _this.frag_glsl = '';
        _this.startTime = Date.now();
        _this.time = 0;
        _this.resolution = { x: 0.0, y: 0.0 };
        return _this;
    }
    // 初始化
    EffectManager.prototype.onLoad = function () {
        cc.director.setDisplayStats(true);
        this.resolution.x = (this.node.getContentSize().width);
        this.resolution.y = (this.node.getContentSize().height);
        var self = this;
        cc.loader.loadRes(this.fragShader, function (err, data) {
            if (err)
                cc.log(err);
            else {
                self.frag_glsl = data;
                self.useShader();
            }
        });
    };
    EffectManager.prototype.useShader = function () {
        this.program = new cc.GLProgram();
        if (cc.sys.isNative) {
            this.program.initWithString(this.default_vert, this.frag_glsl);
        }
        else {
            this.program.initWithVertexShaderByteArray(this.default_vert, this.frag_glsl);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
        }
        this.program.link();
        this.program.updateUniforms();
        this.program.use();
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
            glProgram_state.setUniformFloat("time", this.time);
            glProgram_state.setUniformVec2("resolution", this.resolution);
        }
        else {
            var ba = this.program.getUniformLocationForName("time");
            var res = this.program.getUniformLocationForName("resolution");
            this.program.setUniformLocationWith1f(ba, this.time);
            this.program.setUniformLocationWith2f(res, this.resolution.x, this.resolution.y);
        }
        this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program);
    };
    EffectManager.prototype.setProgram = function (node, program) {
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(program);
            node.setGLProgramState(glProgram_state);
        }
        else {
            node.setShaderProgram(program);
        }
    };
    EffectManager.prototype.updateParameters = function () {
        this.time = (Date.now() - this.startTime) / 1000;
    };
    // 每帧更新函数
    EffectManager.prototype.update = function (dt) {
        this.updateParameters();
        if (this.program) {
            this.program.use();
            if (cc.sys.isNative) {
                var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
                glProgram_state.setUniformFloat("time", this.time);
            }
            else {
                var ct = this.program.getUniformLocationForName("time");
                this.program.setUniformLocationWith1f(ct, this.time);
            }
        }
    };
    __decorate([
        property
    ], EffectManager.prototype, "fragShader", void 0);
    EffectManager = __decorate([
        ccclass
    ], EffectManager);
    return EffectManager;
}(cc.Component));
exports.default = EffectManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFZmZlY3RNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBNkZDO1FBMUZHLGdCQUFVLEdBQVcsYUFBYSxDQUFDO1FBRW5DLGtCQUFZLEdBQUcsMlRBWWQsQ0FBQztRQUdGLGVBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsZUFBUyxHQUFVLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM5QixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGdCQUFVLEdBQUMsRUFBRSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQzs7SUFzRS9CLENBQUM7SUFyRUcsTUFBTTtJQUNOLDhCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxDQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQVUsR0FBRyxFQUFFLElBQUk7WUFDbEQsSUFBSSxHQUFHO2dCQUNILEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ1g7Z0JBQ0QsSUFBSSxDQUFDLFNBQVMs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SSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3JELENBQUM7SUFDRCxTQUFTO0lBQ1QsOEJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ25CLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksZUFBZSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMvRSxlQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEQ7aUJBQU07Z0JBQ0gsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hEO1NBQ0o7SUFDTCxDQUFDO0lBekZEO1FBREMsUUFBUTtxREFDMEI7SUFIbEIsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQTZGakM7SUFBRCxvQkFBQztDQTdGRCxBQTZGQyxDQTdGMEMsRUFBRSxDQUFDLFNBQVMsR0E2RnREO2tCQTdGb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZmZlY3RNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGZyYWdTaGFkZXI6IHN0cmluZyA9ICdsaWdodGNpcmNsZSc7XHJcbiAgICBcclxuICAgIGRlZmF1bHRfdmVydCA9IGBcclxuICAgIGF0dHJpYnV0ZSB2ZWM0IGFfcG9zaXRpb247XHJcbiAgICBhdHRyaWJ1dGUgdmVjMiBhX3RleENvb3JkO1xyXG4gICAgYXR0cmlidXRlIHZlYzQgYV9jb2xvcjtcclxuICAgIHZhcnlpbmcgdmVjMiB2X3RleENvb3JkO1xyXG4gICAgdmFyeWluZyB2ZWM0IHZfZnJhZ21lbnRDb2xvcjtcclxuICAgIHZvaWQgbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgZ2xfUG9zaXRpb24gPSBDQ19QTWF0cml4ICogYV9wb3NpdGlvbjtcclxuICAgICAgICB2X2ZyYWdtZW50Q29sb3IgPSBhX2NvbG9yO1xyXG4gICAgICAgIHZfdGV4Q29vcmQgPSBhX3RleENvb3JkO1xyXG4gICAgfVxyXG4gICAgYDtcclxuXHJcbiAgICBwcm9ncmFtOiBjYy5HTFByb2dyYW07XHJcbiAgICBmcmFnX2dsc2w6IHN0cmluZyA9ICcnO1xyXG4gICAgc3RhcnRUaW1lOm51bWJlciA9IERhdGUubm93KCk7XHJcbiAgICB0aW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcmVzb2x1dGlvbj17IHg6MC4wLCB5OjAuMH07XHJcbiAgICAvLyDliJ3lp4vljJZcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5zZXREaXNwbGF5U3RhdHModHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5yZXNvbHV0aW9uLnggPSAodGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkud2lkdGggKTtcclxuICAgICAgICB0aGlzLnJlc29sdXRpb24ueSA9ICh0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQpO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyh0aGlzLmZyYWdTaGFkZXIsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGVycilcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZnJhZ19nbHNsID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIHNlbGYudXNlU2hhZGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VTaGFkZXIoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbmV3IGNjLkdMUHJvZ3JhbSgpOyBcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5pbml0V2l0aFN0cmluZyh0aGlzLmRlZmF1bHRfdmVydCwgdGhpcy5mcmFnX2dsc2wpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5pbml0V2l0aFZlcnRleFNoYWRlckJ5dGVBcnJheSh0aGlzLmRlZmF1bHRfdmVydCwgdGhpcy5mcmFnX2dsc2wpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX1BPU0lUSU9OLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1BPU0lUSU9OKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9DT0xPUiwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9DT0xPUik7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfVEVYX0NPT1JELCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1RFWF9DT09SRFMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb2dyYW0ubGluaygpO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbS51c2UoKTtcclxuXHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtRmxvYXQoXCJ0aW1lXCIsIHRoaXMudGltZSk7XHJcbiAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtVmVjMiggXCJyZXNvbHV0aW9uXCIsIHRoaXMucmVzb2x1dGlvbiApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBiYSA9IHRoaXMucHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lKFwidGltZVwiKTtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IHRoaXMucHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lKCBcInJlc29sdXRpb25cIiApO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmKGJhLCB0aGlzLnRpbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDJmKCByZXMsIHRoaXMucmVzb2x1dGlvbi54LHRoaXMucmVzb2x1dGlvbi55ICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0UHJvZ3JhbSh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuX3NnTm9kZSwgdGhpcy5wcm9ncmFtKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9ncmFtKG5vZGU6IGFueSwgcHJvZ3JhbTogYW55KSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgICAgICBub2RlLnNldEdMUHJvZ3JhbVN0YXRlKGdsUHJvZ3JhbV9zdGF0ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbm9kZS5zZXRTaGFkZXJQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQYXJhbWV0ZXJzKCkge1xyXG4gICAgICAgIHRoaXMudGltZSA9IChEYXRlLm5vdygpIC0gdGhpcy5zdGFydFRpbWUpIC8gMTAwMDtcclxuICAgIH1cclxuICAgIC8vIOavj+W4p+abtOaWsOWHveaVsFxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQYXJhbWV0ZXJzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvZ3JhbSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0udXNlKCk7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0odGhpcy5wcm9ncmFtKTtcclxuICAgICAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtRmxvYXQoXCJ0aW1lXCIsIHRoaXMudGltZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3QgPSB0aGlzLnByb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZShcInRpbWVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmKGN0LCB0aGlzLnRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GaussBlurEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3c908SX2u5DfIEt7iumNEPE', 'GaussBlurEffect');
// Script/GaussBlurEffect.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GaussBlursFrag_1 = require("./GaussBlursFrag");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GaussBlurEffect = /** @class */ (function (_super) {
    __extends(GaussBlurEffect, _super);
    function GaussBlurEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAllChildrenUse = false;
        _this.slider = null;
        _this.blurText = null;
        _this.bluramount = 0.10;
        return _this;
    }
    GaussBlurEffect.prototype.onLoad = function () {
        this.bluramount = this.slider.progress / 10;
        this.blurText.string = (this.slider.progress * 100).toString();
        this.useBlur();
    };
    GaussBlurEffect.prototype.start = function () {
    };
    GaussBlurEffect.prototype.useBlur = function () {
        this.program = new cc.GLProgram();
        if (cc.sys.isNative) {
            this.program.initWithString(GaussBlursFrag_1.default.blurs_vert, GaussBlursFrag_1.default.blurs_frag);
        }
        else {
            this.program.initWithVertexShaderByteArray(GaussBlursFrag_1.default.blurs_vert, GaussBlursFrag_1.default.blurs_frag);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
        }
        this.program.link();
        this.program.updateUniforms();
        this.program.use();
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
            glProgram_state.setUniformFloat("bluramount", this.bluramount);
        }
        else {
            var ba = this.program.getUniformLocationForName("bluramount");
            this.program.setUniformLocationWith1f(ba, this.bluramount);
        }
        if (this.isAllChildrenUse) {
            this.setProgram(this.node._sgNode, this.program);
        }
        else {
            this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program);
        }
    };
    GaussBlurEffect.prototype.setProgram = function (node, program) {
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(program);
            node.setGLProgramState(glProgram_state);
        }
        else {
            node.setShaderProgram(program);
        }
        var children = node.children;
        if (!children)
            return;
        for (var i = 0; i < children.length; i++) {
            this.setProgram(children[i], program);
        }
    };
    GaussBlurEffect.prototype.onSliderBlurAmount = function (slider, eventType) {
        this.bluramount = Number((this.slider.progress / 10).toFixed(3));
        this.blurText.string = (this.bluramount * 1000).toString();
        this.changeBlurAmount(this.bluramount);
    };
    GaussBlurEffect.prototype.changeBlurAmount = function (amount) {
        if (this.program) {
            this.program.use();
            if (cc.sys.isNative) {
                var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
                glProgram_state.setUniformFloat("bluramount", this.bluramount);
            }
            else {
                var ba = this.program.getUniformLocationForName("bluramount");
                this.program.setUniformLocationWith1f(ba, this.bluramount);
            }
        }
    };
    __decorate([
        property
    ], GaussBlurEffect.prototype, "isAllChildrenUse", void 0);
    __decorate([
        property(cc.Slider)
    ], GaussBlurEffect.prototype, "slider", void 0);
    __decorate([
        property(cc.Label)
    ], GaussBlurEffect.prototype, "blurText", void 0);
    GaussBlurEffect = __decorate([
        ccclass
    ], GaussBlurEffect);
    return GaussBlurEffect;
}(cc.Component));
exports.default = GaussBlurEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYXVzc0JsdXJFZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXlDO0FBQ25DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBdUZDO1FBcEZHLHNCQUFnQixHQUFZLEtBQUssQ0FBQztRQUdsQyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFHMUIsZ0JBQVUsR0FBVyxJQUFJLENBQUM7O0lBMkU5QixDQUFDO0lBdkVHLGdDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsK0JBQUssR0FBTDtJQUNBLENBQUM7SUFFRCxpQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLHdCQUFTLENBQUMsVUFBVSxFQUFFLHdCQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDM0U7YUFBTTtZQUNILElBQUksQ0FBQyxPQUFPLENBQUMsNkJBQTZCLENBQUMsd0JBQVMsQ0FBQyxVQUFVLEVBQUUsd0JBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN2RixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUM3RixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUN2RixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztTQUNuRztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRW5CLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0UsZUFBZSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2xFO2FBQU07WUFDSCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM5RDtRQUNELElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3BEO2FBQU07WUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVFO0lBQ0wsQ0FBQztJQUVELG9DQUFVLEdBQVYsVUFBVyxJQUFTLEVBQUUsT0FBWTtRQUM5QixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksZUFBZSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEM7UUFDRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRO1lBQ1QsT0FBTztRQUVYLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQztJQUVELDRDQUFrQixHQUFsQixVQUFtQixNQUFpQixFQUFFLFNBQWM7UUFDaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsMENBQWdCLEdBQWhCLFVBQWlCLE1BQWM7UUFDM0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNuQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDL0UsZUFBZSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ2xFO2lCQUFNO2dCQUNILElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzlELElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUM5RDtTQUNKO0lBQ0wsQ0FBQztJQW5GRDtRQURDLFFBQVE7NkRBQ3lCO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bURBQ0s7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDTztJQVRULGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0F1Rm5DO0lBQUQsc0JBQUM7Q0F2RkQsQUF1RkMsQ0F2RjRDLEVBQUUsQ0FBQyxTQUFTLEdBdUZ4RDtrQkF2Rm9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmx1cnNGcmFnIGZyb20gJy4vR2F1c3NCbHVyc0ZyYWcnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2F1c3NCbHVyRWZmZWN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpc0FsbENoaWxkcmVuVXNlOiBib29sZWFuID0gZmFsc2U7IFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TbGlkZXIpXHJcbiAgICBzbGlkZXI6IGNjLlNsaWRlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgYmx1clRleHQ6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBwcm9ncmFtOiBjYy5HTFByb2dyYW07XHJcbiAgICBibHVyYW1vdW50OiBudW1iZXIgPSAwLjEwO1xyXG5cclxuICAgIFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmJsdXJhbW91bnQgPSB0aGlzLnNsaWRlci5wcm9ncmVzcyAvIDEwO1xyXG4gICAgICAgIHRoaXMuYmx1clRleHQuc3RyaW5nID0gKHRoaXMuc2xpZGVyLnByb2dyZXNzKjEwMCkudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLnVzZUJsdXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH1cclxuXHJcbiAgICB1c2VCbHVyKCkge1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBjYy5HTFByb2dyYW0oKTtcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5pbml0V2l0aFN0cmluZyhCbHVyc0ZyYWcuYmx1cnNfdmVydCwgQmx1cnNGcmFnLmJsdXJzX2ZyYWcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5pbml0V2l0aFZlcnRleFNoYWRlckJ5dGVBcnJheShCbHVyc0ZyYWcuYmx1cnNfdmVydCwgQmx1cnNGcmFnLmJsdXJzX2ZyYWcpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX1BPU0lUSU9OLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1BPU0lUSU9OKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9DT0xPUiwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9DT0xPUik7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfVEVYX0NPT1JELCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1RFWF9DT09SRFMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb2dyYW0ubGluaygpO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbS51c2UoKTtcclxuXHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtRmxvYXQoXCJibHVyYW1vdW50XCIsIHRoaXMuYmx1cmFtb3VudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGJhID0gdGhpcy5wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoXCJibHVyYW1vdW50XCIpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmKGJhLCB0aGlzLmJsdXJhbW91bnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc0FsbENoaWxkcmVuVXNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZ3JhbSh0aGlzLm5vZGUuX3NnTm9kZSwgdGhpcy5wcm9ncmFtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFByb2dyYW0odGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLl9zZ05vZGUsIHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFByb2dyYW0obm9kZTogYW55LCBwcm9ncmFtOiBhbnkpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0ocHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0R0xQcm9ncmFtU3RhdGUoZ2xQcm9ncmFtX3N0YXRlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub2RlLnNldFNoYWRlclByb2dyYW0ocHJvZ3JhbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XHJcbiAgICAgICAgaWYgKCFjaGlsZHJlbilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZ3JhbShjaGlsZHJlbltpXSwgcHJvZ3JhbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2xpZGVyQmx1ckFtb3VudChzbGlkZXI6IGNjLlNsaWRlciwgZXZlbnRUeXBlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmJsdXJhbW91bnQgPSBOdW1iZXIoKHRoaXMuc2xpZGVyLnByb2dyZXNzIC8gMTApLnRvRml4ZWQoMykpO1xyXG4gICAgICAgIHRoaXMuYmx1clRleHQuc3RyaW5nID0gKHRoaXMuYmx1cmFtb3VudCoxMDAwKS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlQmx1ckFtb3VudCh0aGlzLmJsdXJhbW91bnQpO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICBjaGFuZ2VCbHVyQW1vdW50KGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvZ3JhbSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0udXNlKCk7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0odGhpcy5wcm9ncmFtKTtcclxuICAgICAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtRmxvYXQoXCJibHVyYW1vdW50XCIsIHRoaXMuYmx1cmFtb3VudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmEgPSB0aGlzLnByb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZShcImJsdXJhbW91bnRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmKGJhLCB0aGlzLmJsdXJhbW91bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICBcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/FluxayFrag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '47640HOQ1ZDg7T5phsuLF1h', 'FluxayFrag');
// Script/FluxayFrag.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Feofox Game
// Author:Lerry
// https://github.com/fylz1125/ShaderDemos
var FluxayFrag = /** @class */ (function () {
    function FluxayFrag() {
    }
    FluxayFrag.fluxay_vert = "\n    attribute vec4 a_position;\n    attribute vec2 a_texCoord;\n    attribute vec4 a_color;\n    varying vec2 v_texCoord;\n    varying vec4 v_fragmentColor;\n    void main()\n    {\n        gl_Position = CC_PMatrix * a_position;\n        v_fragmentColor = a_color;\n        v_texCoord = a_texCoord;\n    }\n    ";
    // 流光特效
    FluxayFrag.fluxay_frag = "\n    #ifdef GL_ES\n    precision mediump float;\n    #endif\n    varying vec2 v_texCoord;\n    uniform float time;\n    void main()\n    {\n        vec4 src_color = texture2D(CC_Texture0, v_texCoord).rgba;\n\n        float width = 0.02;       //\u6D41\u5149\u7684\u5BBD\u5EA6\u8303\u56F4 (\u8C03\u6574\u8BE5\u503C\u6539\u53D8\u6D41\u5149\u7684\u5BBD\u5EA6)\n        float start = tan(time/1.414);  //\u6D41\u5149\u7684\u8D77\u59CBx\u5750\u6807\n        float strength = 0.006;   //\u6D41\u5149\u589E\u4EAE\u5F3A\u5EA6   (\u8C03\u6574\u8BE5\u503C\u6539\u53D8\u6D41\u5149\u7684\u589E\u4EAE\u5F3A\u5EA6)\n        float offset = 0.5;      //\u504F\u79FB\u503C         (\u8C03\u6574\u8BE5\u503C\u6539\u53D8\u6D41\u5149\u7684\u503E\u659C\u7A0B\u5EA6)\n        if( v_texCoord.x < (start - offset * v_texCoord.y) &&  v_texCoord.x > (start - offset * v_texCoord.y - width))\n        {\n            vec3 improve = strength * vec3(255, 255, 255);\n            vec3 result = improve * vec3( src_color.r, src_color.g, src_color.b);\n            gl_FragColor = vec4(result, src_color.a);\n\n        }else{\n            gl_FragColor = src_color;\n        }\n    }\n    ";
    // 流光的另一种写法
    FluxayFrag.fluxay_frag_s = "\n    #ifdef GL_ES                                 \n    precision mediump float;                          \n    #endif                                          \n    \n    varying vec4 v_fragmentColor;                  \n    varying vec2 v_texCoord;                      \n    \n    // uniform float factor;  \n    // uniform float width;  \n    uniform float time;  \n    // uniform vec3 color; \n    void main()                                      \n    {   \n        float factor = .06;\n        float width = .02;\n        // float offset = .5;\n        vec3 color = vec3(10.,10.,10.);                                           \n        vec4 texColor = texture2D(CC_Texture0, v_texCoord);  \n    \n        float distance = abs(v_texCoord[0]+v_texCoord[1]-tan(time))/1.414;   \n\n        distance = 1.0-(1.0/width)*distance;  \n        distance = max(distance, 0.0);  \n        vec4 sample = vec4(0.0,0.0,0.0,0.0);  \n        sample[0] = color[0] * distance;  \n        sample[1] = color[1] * distance;  \n        sample[2] = color[2] * distance;  \n        sample[3] = distance;  \n\n        float alpha = sample[3]*texColor[3];  \n        texColor[0] = texColor[0] + sample[0]*alpha*factor;  \n        texColor[1] = texColor[1] + sample[1]*alpha*factor;  \n        texColor[2] = texColor[2] + sample[2]*alpha*factor;  \n        gl_FragColor = v_fragmentColor * texColor;  \n    }\n     ";
    // 波光特效
    FluxayFrag.fluxay_frag_super = "\n    #define TAU 6.120470874064187\n    #define MAX_ITER 5\n    uniform float time; \n    varying vec2 v_texCoord;\n    varying vec4 v_fragmentColor;\n    void mainImage( out vec4 fragColor, in vec2 fragCoord ) \n    {\n        float time = time * .5+5.;\n        // uv should be the 0-1 uv of texture...\n        vec2 uv = v_texCoord.xy;//fragCoord.xy / iResolution.xy;\n        \n\n        vec2 p = mod(uv*TAU, TAU)-250.0;\n\n        vec2 i = vec2(p);\n        float c = 1.0;\n        float inten = .0045;\n\n        for (int n = 0; n < MAX_ITER; n++) \n        {\n            float t =  time * (1.0 - (3.5 / float(n+1)));\n            i = p + vec2(cos(t - i.x) + sin(t + i.y), sin(t - i.y) + cos(1.5*t + i.x));\n            c += 1.0/length(vec2(p.x / (cos(i.x+t)/inten),p.y / (cos(i.y+t)/inten)));\n        }\n        c /= float(MAX_ITER);\n        c = 1.17-pow(c, 1.4);\n        vec4 tex = texture2D(CC_Texture0,uv);\n        vec3 colour = vec3(pow(abs(c), 20.0));\n        colour = clamp(colour + vec3(0.0, 0.0, .0), 0.0, tex.a);\n\n        // \u6DF7\u5408\u6CE2\u5149\n        float alpha = c*tex[3];  \n        tex[0] = tex[0] + colour[0]*alpha; \n        tex[1] = tex[1] + colour[1]*alpha; \n        tex[2] = tex[2] + colour[2]*alpha; \n        fragColor = v_fragmentColor * tex;\n    }\n    void main()\n    {\n        mainImage(gl_FragColor, gl_FragCoord.xy);\n    }\n    ";
    return FluxayFrag;
}());
exports.default = FluxayFrag;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxGbHV4YXlGcmFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsY0FBYztBQUNkLGVBQWU7QUFDZiwwQ0FBMEM7QUFDMUM7SUFBQTtJQTRIQSxDQUFDO0lBM0hVLHNCQUFXLEdBQUcsMlRBWXBCLENBQUM7SUFFRixPQUFPO0lBQ0Esc0JBQVcsR0FBRyxxb0NBd0JwQixDQUFDO0lBRUYsV0FBVztJQUNKLHdCQUFhLEdBQUcsbzNDQW9DckIsQ0FBQztJQUNILE9BQU87SUFDQSw0QkFBaUIsR0FBRyx5MkNBMEMxQixDQUFDO0lBQ04saUJBQUM7Q0E1SEQsQUE0SEMsSUFBQTtrQkE1SG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGZW9mb3ggR2FtZVxyXG4vLyBBdXRob3I6TGVycnlcclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Z5bHoxMTI1L1NoYWRlckRlbW9zXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsdXhheUZyYWd7XHJcbiAgICBzdGF0aWMgZmx1eGF5X3ZlcnQgPSBgXHJcbiAgICBhdHRyaWJ1dGUgdmVjNCBhX3Bvc2l0aW9uO1xyXG4gICAgYXR0cmlidXRlIHZlYzIgYV90ZXhDb29yZDtcclxuICAgIGF0dHJpYnV0ZSB2ZWM0IGFfY29sb3I7XHJcbiAgICB2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxuICAgIHZhcnlpbmcgdmVjNCB2X2ZyYWdtZW50Q29sb3I7XHJcbiAgICB2b2lkIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIGdsX1Bvc2l0aW9uID0gQ0NfUE1hdHJpeCAqIGFfcG9zaXRpb247XHJcbiAgICAgICAgdl9mcmFnbWVudENvbG9yID0gYV9jb2xvcjtcclxuICAgICAgICB2X3RleENvb3JkID0gYV90ZXhDb29yZDtcclxuICAgIH1cclxuICAgIGA7XHJcblxyXG4gICAgLy8g5rWB5YWJ54m55pWIXHJcbiAgICBzdGF0aWMgZmx1eGF5X2ZyYWcgPSBgXHJcbiAgICAjaWZkZWYgR0xfRVNcclxuICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG4gICAgI2VuZGlmXHJcbiAgICB2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxuICAgIHVuaWZvcm0gZmxvYXQgdGltZTtcclxuICAgIHZvaWQgbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgdmVjNCBzcmNfY29sb3IgPSB0ZXh0dXJlMkQoQ0NfVGV4dHVyZTAsIHZfdGV4Q29vcmQpLnJnYmE7XHJcblxyXG4gICAgICAgIGZsb2F0IHdpZHRoID0gMC4wMjsgICAgICAgLy/mtYHlhYnnmoTlrr3luqbojIPlm7QgKOiwg+aVtOivpeWAvOaUueWPmOa1geWFieeahOWuveW6pilcclxuICAgICAgICBmbG9hdCBzdGFydCA9IHRhbih0aW1lLzEuNDE0KTsgIC8v5rWB5YWJ55qE6LW35aeLeOWdkOagh1xyXG4gICAgICAgIGZsb2F0IHN0cmVuZ3RoID0gMC4wMDY7ICAgLy/mtYHlhYnlop7kuq7lvLrluqYgICAo6LCD5pW06K+l5YC85pS55Y+Y5rWB5YWJ55qE5aKe5Lqu5by65bqmKVxyXG4gICAgICAgIGZsb2F0IG9mZnNldCA9IDAuNTsgICAgICAvL+WBj+enu+WAvCAgICAgICAgICjosIPmlbTor6XlgLzmlLnlj5jmtYHlhYnnmoTlgL7mlpznqIvluqYpXHJcbiAgICAgICAgaWYoIHZfdGV4Q29vcmQueCA8IChzdGFydCAtIG9mZnNldCAqIHZfdGV4Q29vcmQueSkgJiYgIHZfdGV4Q29vcmQueCA+IChzdGFydCAtIG9mZnNldCAqIHZfdGV4Q29vcmQueSAtIHdpZHRoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZlYzMgaW1wcm92ZSA9IHN0cmVuZ3RoICogdmVjMygyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgdmVjMyByZXN1bHQgPSBpbXByb3ZlICogdmVjMyggc3JjX2NvbG9yLnIsIHNyY19jb2xvci5nLCBzcmNfY29sb3IuYik7XHJcbiAgICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQocmVzdWx0LCBzcmNfY29sb3IuYSk7XHJcblxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSBzcmNfY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYDtcclxuXHJcbiAgICAvLyDmtYHlhYnnmoTlj6bkuIDnp43lhpnms5VcclxuICAgIHN0YXRpYyBmbHV4YXlfZnJhZ19zID0gYFxyXG4gICAgI2lmZGVmIEdMX0VTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDsgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgI2VuZGlmICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgIHZhcnlpbmcgdmVjNCB2X2ZyYWdtZW50Q29sb3I7ICAgICAgICAgICAgICAgICAgXHJcbiAgICB2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDsgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgIC8vIHVuaWZvcm0gZmxvYXQgZmFjdG9yOyAgXHJcbiAgICAvLyB1bmlmb3JtIGZsb2F0IHdpZHRoOyAgXHJcbiAgICB1bmlmb3JtIGZsb2F0IHRpbWU7ICBcclxuICAgIC8vIHVuaWZvcm0gdmVjMyBjb2xvcjsgXHJcbiAgICB2b2lkIG1haW4oKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICB7ICAgXHJcbiAgICAgICAgZmxvYXQgZmFjdG9yID0gLjA2O1xyXG4gICAgICAgIGZsb2F0IHdpZHRoID0gLjAyO1xyXG4gICAgICAgIC8vIGZsb2F0IG9mZnNldCA9IC41O1xyXG4gICAgICAgIHZlYzMgY29sb3IgPSB2ZWMzKDEwLiwxMC4sMTAuKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgdmVjNCB0ZXhDb2xvciA9IHRleHR1cmUyRChDQ19UZXh0dXJlMCwgdl90ZXhDb29yZCk7ICBcclxuICAgIFxyXG4gICAgICAgIGZsb2F0IGRpc3RhbmNlID0gYWJzKHZfdGV4Q29vcmRbMF0rdl90ZXhDb29yZFsxXS10YW4odGltZSkpLzEuNDE0OyAgIFxyXG5cclxuICAgICAgICBkaXN0YW5jZSA9IDEuMC0oMS4wL3dpZHRoKSpkaXN0YW5jZTsgIFxyXG4gICAgICAgIGRpc3RhbmNlID0gbWF4KGRpc3RhbmNlLCAwLjApOyAgXHJcbiAgICAgICAgdmVjNCBzYW1wbGUgPSB2ZWM0KDAuMCwwLjAsMC4wLDAuMCk7ICBcclxuICAgICAgICBzYW1wbGVbMF0gPSBjb2xvclswXSAqIGRpc3RhbmNlOyAgXHJcbiAgICAgICAgc2FtcGxlWzFdID0gY29sb3JbMV0gKiBkaXN0YW5jZTsgIFxyXG4gICAgICAgIHNhbXBsZVsyXSA9IGNvbG9yWzJdICogZGlzdGFuY2U7ICBcclxuICAgICAgICBzYW1wbGVbM10gPSBkaXN0YW5jZTsgIFxyXG5cclxuICAgICAgICBmbG9hdCBhbHBoYSA9IHNhbXBsZVszXSp0ZXhDb2xvclszXTsgIFxyXG4gICAgICAgIHRleENvbG9yWzBdID0gdGV4Q29sb3JbMF0gKyBzYW1wbGVbMF0qYWxwaGEqZmFjdG9yOyAgXHJcbiAgICAgICAgdGV4Q29sb3JbMV0gPSB0ZXhDb2xvclsxXSArIHNhbXBsZVsxXSphbHBoYSpmYWN0b3I7ICBcclxuICAgICAgICB0ZXhDb2xvclsyXSA9IHRleENvbG9yWzJdICsgc2FtcGxlWzJdKmFscGhhKmZhY3RvcjsgIFxyXG4gICAgICAgIGdsX0ZyYWdDb2xvciA9IHZfZnJhZ21lbnRDb2xvciAqIHRleENvbG9yOyAgXHJcbiAgICB9XHJcbiAgICAgYDtcclxuICAgIC8vIOazouWFieeJueaViFxyXG4gICAgc3RhdGljIGZsdXhheV9mcmFnX3N1cGVyID0gYFxyXG4gICAgI2RlZmluZSBUQVUgNi4xMjA0NzA4NzQwNjQxODdcclxuICAgICNkZWZpbmUgTUFYX0lURVIgNVxyXG4gICAgdW5pZm9ybSBmbG9hdCB0aW1lOyBcclxuICAgIHZhcnlpbmcgdmVjMiB2X3RleENvb3JkO1xyXG4gICAgdmFyeWluZyB2ZWM0IHZfZnJhZ21lbnRDb2xvcjtcclxuICAgIHZvaWQgbWFpbkltYWdlKCBvdXQgdmVjNCBmcmFnQ29sb3IsIGluIHZlYzIgZnJhZ0Nvb3JkICkgXHJcbiAgICB7XHJcbiAgICAgICAgZmxvYXQgdGltZSA9IHRpbWUgKiAuNSs1LjtcclxuICAgICAgICAvLyB1diBzaG91bGQgYmUgdGhlIDAtMSB1diBvZiB0ZXh0dXJlLi4uXHJcbiAgICAgICAgdmVjMiB1diA9IHZfdGV4Q29vcmQueHk7Ly9mcmFnQ29vcmQueHkgLyBpUmVzb2x1dGlvbi54eTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgdmVjMiBwID0gbW9kKHV2KlRBVSwgVEFVKS0yNTAuMDtcclxuXHJcbiAgICAgICAgdmVjMiBpID0gdmVjMihwKTtcclxuICAgICAgICBmbG9hdCBjID0gMS4wO1xyXG4gICAgICAgIGZsb2F0IGludGVuID0gLjAwNDU7XHJcblxyXG4gICAgICAgIGZvciAoaW50IG4gPSAwOyBuIDwgTUFYX0lURVI7IG4rKykgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmbG9hdCB0ID0gIHRpbWUgKiAoMS4wIC0gKDMuNSAvIGZsb2F0KG4rMSkpKTtcclxuICAgICAgICAgICAgaSA9IHAgKyB2ZWMyKGNvcyh0IC0gaS54KSArIHNpbih0ICsgaS55KSwgc2luKHQgLSBpLnkpICsgY29zKDEuNSp0ICsgaS54KSk7XHJcbiAgICAgICAgICAgIGMgKz0gMS4wL2xlbmd0aCh2ZWMyKHAueCAvIChjb3MoaS54K3QpL2ludGVuKSxwLnkgLyAoY29zKGkueSt0KS9pbnRlbikpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYyAvPSBmbG9hdChNQVhfSVRFUik7XHJcbiAgICAgICAgYyA9IDEuMTctcG93KGMsIDEuNCk7XHJcbiAgICAgICAgdmVjNCB0ZXggPSB0ZXh0dXJlMkQoQ0NfVGV4dHVyZTAsdXYpO1xyXG4gICAgICAgIHZlYzMgY29sb3VyID0gdmVjMyhwb3coYWJzKGMpLCAyMC4wKSk7XHJcbiAgICAgICAgY29sb3VyID0gY2xhbXAoY29sb3VyICsgdmVjMygwLjAsIDAuMCwgLjApLCAwLjAsIHRleC5hKTtcclxuXHJcbiAgICAgICAgLy8g5re35ZCI5rOi5YWJXHJcbiAgICAgICAgZmxvYXQgYWxwaGEgPSBjKnRleFszXTsgIFxyXG4gICAgICAgIHRleFswXSA9IHRleFswXSArIGNvbG91clswXSphbHBoYTsgXHJcbiAgICAgICAgdGV4WzFdID0gdGV4WzFdICsgY29sb3VyWzFdKmFscGhhOyBcclxuICAgICAgICB0ZXhbMl0gPSB0ZXhbMl0gKyBjb2xvdXJbMl0qYWxwaGE7IFxyXG4gICAgICAgIGZyYWdDb2xvciA9IHZfZnJhZ21lbnRDb2xvciAqIHRleDtcclxuICAgIH1cclxuICAgIHZvaWQgbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgbWFpbkltYWdlKGdsX0ZyYWdDb2xvciwgZ2xfRnJhZ0Nvb3JkLnh5KTtcclxuICAgIH1cclxuICAgIGA7XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3be05fYTCtF7rOx+4oc54SM', 'use_v2.0.x_cc.Toggle_event');
// migration/use_v2.0.x_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only compatible with projects prior to v2.1.0.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 之前版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
if (cc.Toggle) {
  // Whether the 'toggle' and 'checkEvents' events are fired when 'toggle.check() / toggle.uncheck()' is called in the code
  // 在代码中调用 'toggle.check() / toggle.uncheck()' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_check = true;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfdjIuMC54X2NjLlRvZ2dsZV9ldmVudC5qcyJdLCJuYW1lcyI6WyJjYyIsIlRvZ2dsZSIsIl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFZQSxJQUFJQSxFQUFFLENBQUNDLE1BQVAsRUFBZTtBQUNYO0FBQ0E7QUFDQUQsRUFBQUEsRUFBRSxDQUFDQyxNQUFILENBQVVDLDJCQUFWLEdBQXdDLElBQXhDO0FBQ0giLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IENvY29zIENyZWF0b3IgYW5kIGlzIG9ubHkgY29tcGF0aWJsZSB3aXRoIHByb2plY3RzIHByaW9yIHRvIHYyLjEuMC5cclxuICogWW91IGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IGFkZCB0aGlzIHNjcmlwdCBpbiBhbnkgb3RoZXIgcHJvamVjdC5cclxuICogSWYgeW91IGRvbid0IHVzZSBjYy5Ub2dnbGUgaW4geW91ciBwcm9qZWN0LCB5b3UgY2FuIGRlbGV0ZSB0aGlzIHNjcmlwdCBkaXJlY3RseS5cclxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cclxuICpcclxuICog5q2k6ISa5pys55SxIENvY29zIENyZWF0b3Ig6Ieq5Yqo55Sf5oiQ77yM5LuF55So5LqO5YW85a65IHYyLjEuMCDkuYvliY3niYjmnKznmoTlt6XnqIvvvIxcclxuICog5L2g5peg6ZyA5Zyo5Lu75L2V5YW25a6D6aG555uu5Lit5omL5Yqo5re75Yqg5q2k6ISa5pys44CCXHJcbiAqIOWmguaenOS9oOeahOmhueebruS4reayoeeUqOWIsCBUb2dnbGXvvIzlj6/nm7TmjqXliKDpmaTor6XohJrmnKzjgIJcclxuICog5aaC5p6c5L2g55qE6aG555uu5pyJ5omY566h5LqOIGdpdCDnrYnniYjmnKzlupPvvIzor7flsIbmraTohJrmnKzkuIDlubbkuIrkvKDjgIJcclxuICovXHJcblxyXG5pZiAoY2MuVG9nZ2xlKSB7XHJcbiAgICAvLyBXaGV0aGVyIHRoZSAndG9nZ2xlJyBhbmQgJ2NoZWNrRXZlbnRzJyBldmVudHMgYXJlIGZpcmVkIHdoZW4gJ3RvZ2dsZS5jaGVjaygpIC8gdG9nZ2xlLnVuY2hlY2soKScgaXMgY2FsbGVkIGluIHRoZSBjb2RlXHJcbiAgICAvLyDlnKjku6PnoIHkuK3osIPnlKggJ3RvZ2dsZS5jaGVjaygpIC8gdG9nZ2xlLnVuY2hlY2soKScg5pe25piv5ZCm6Kem5Y+RICd0b2dnbGUnIOS4jiAnY2hlY2tFdmVudHMnIOS6i+S7tlxyXG4gICAgY2MuVG9nZ2xlLl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayA9IHRydWU7XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/FluxayEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e8aabh4tllDR7kMBCxz7hqp', 'FluxayEffect');
// Script/FluxayEffect.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Feofox Game
// Author:Lerry
// https://github.com/fylz1125/ShaderDemos
var FluxayFrag_1 = require("./FluxayFrag");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FluxayEffect = /** @class */ (function (_super) {
    __extends(FluxayEffect, _super);
    function FluxayEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mode = 0;
        _this.fragStr = null;
        _this.startTime = Date.now();
        _this.time = 0;
        return _this;
    }
    FluxayEffect.prototype.onLoad = function () {
        if (this.mode == 0) {
            this.fragStr = FluxayFrag_1.default.fluxay_frag;
        }
        else {
            this.fragStr = FluxayFrag_1.default.fluxay_frag_super;
        }
        this.useWater();
    };
    FluxayEffect.prototype.start = function () {
    };
    FluxayEffect.prototype.useWater = function () {
        this.program = new cc.GLProgram();
        if (cc.sys.isNative) {
            this.program.initWithString(FluxayFrag_1.default.fluxay_vert, this.fragStr);
        }
        else {
            this.program.initWithVertexShaderByteArray(FluxayFrag_1.default.fluxay_vert, this.fragStr);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
        }
        this.program.link();
        this.program.updateUniforms();
        this.program.use();
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
            glProgram_state.setUniformFloat("time", this.time);
        }
        else {
            var ba = this.program.getUniformLocationForName("time");
            this.program.setUniformLocationWith1f(ba, this.time);
        }
        this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program);
    };
    FluxayEffect.prototype.setProgram = function (node, program) {
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(program);
            node.setGLProgramState(glProgram_state);
        }
        else {
            node.setShaderProgram(program);
        }
    };
    FluxayEffect.prototype.update = function (dt) {
        this.time = (Date.now() - this.startTime) / 1000;
        if (this.program) {
            this.program.use();
            if (cc.sys.isNative) {
                var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
                glProgram_state.setUniformFloat("time", this.time);
            }
            else {
                var ct = this.program.getUniformLocationForName("time");
                this.program.setUniformLocationWith1f(ct, this.time);
            }
        }
    };
    __decorate([
        property
    ], FluxayEffect.prototype, "mode", void 0);
    FluxayEffect = __decorate([
        ccclass
    ], FluxayEffect);
    return FluxayEffect;
}(cc.Component));
exports.default = FluxayEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxGbHV4YXlFZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsY0FBYztBQUNkLGVBQWU7QUFDZiwwQ0FBMEM7QUFDMUMsMkNBQWtDO0FBRTVCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBbUVDO1FBakVHLFVBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsYUFBTyxHQUFXLElBQUksQ0FBQztRQUV2QixlQUFTLEdBQVUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzlCLFVBQUksR0FBVyxDQUFDLENBQUM7O0lBNkRyQixDQUFDO0lBMURHLDZCQUFNLEdBQU47UUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQU0sQ0FBQyxXQUFXLENBQUM7U0FDckM7YUFBTTtZQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQU0sQ0FBQyxpQkFBaUIsQ0FBQztTQUMzQztRQUNELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsNEJBQUssR0FBTDtJQUNBLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLG9CQUFNLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqRTthQUFNO1lBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxvQkFBTSxDQUFDLFdBQVcsRUFBRSxJ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QztDQW5FRCxBQW1FQyxDQW5FeUMsRUFBRSxDQUFDLFNBQVMsR0FtRXJEO2tCQW5Fb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZlb2ZveCBHYW1lXHJcbi8vIEF1dGhvcjpMZXJyeVxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZnlsejExMjUvU2hhZGVyRGVtb3NcclxuaW1wb3J0IEZsdXhheSBmcm9tICcuL0ZsdXhheUZyYWcnO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbHV4YXlFZmZlY3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtb2RlOiBudW1iZXIgPSAwOyAgICBcclxuICAgIGZyYWdTdHI6IHN0cmluZyA9IG51bGw7XHJcbiAgICBwcm9ncmFtOiBjYy5HTFByb2dyYW07XHJcbiAgICBzdGFydFRpbWU6bnVtYmVyID0gRGF0ZS5ub3coKTtcclxuICAgIHRpbWU6IG51bWJlciA9IDA7XHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5tb2RlID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5mcmFnU3RyID0gRmx1eGF5LmZsdXhheV9mcmFnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJhZ1N0ciA9IEZsdXhheS5mbHV4YXlfZnJhZ19zdXBlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51c2VXYXRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIHVzZVdhdGVyKCkge1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBjYy5HTFByb2dyYW0oKTtcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5pbml0V2l0aFN0cmluZyhGbHV4YXkuZmx1eGF5X3ZlcnQsIHRoaXMuZnJhZ1N0cik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmluaXRXaXRoVmVydGV4U2hhZGVyQnl0ZUFycmF5KEZsdXhheS5mbHV4YXlfdmVydCwgdGhpcy5mcmFnU3RyKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9QT1NJVElPTiwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9QT1NJVElPTik7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfQ09MT1IsIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfQ09MT1IpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX1RFWF9DT09SRCwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9URVhfQ09PUkRTKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9ncmFtLmxpbmsoKTtcclxuICAgICAgICB0aGlzLnByb2dyYW0udXBkYXRlVW5pZm9ybXMoKTtcclxuICAgICAgICB0aGlzLnByb2dyYW0udXNlKCk7XHJcblxyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgdmFyIGdsUHJvZ3JhbV9zdGF0ZSA9IGNjLkdMUHJvZ3JhbVN0YXRlLmdldE9yQ3JlYXRlV2l0aEdMUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xyXG4gICAgICAgICAgICBnbFByb2dyYW1fc3RhdGUuc2V0VW5pZm9ybUZsb2F0KFwidGltZVwiLCB0aGlzLnRpbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBiYSA9IHRoaXMucHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lKFwidGltZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgxZihiYSwgdGhpcy50aW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRQcm9ncmFtKHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5fc2dOb2RlLCB0aGlzLnByb2dyYW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFByb2dyYW0obm9kZTogYW55LCBwcm9ncmFtOiBhbnkpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0ocHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0R0xQcm9ncmFtU3RhdGUoZ2xQcm9ncmFtX3N0YXRlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub2RlLnNldFNoYWRlclByb2dyYW0ocHJvZ3JhbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMudGltZSA9IChEYXRlLm5vdygpIC0gdGhpcy5zdGFydFRpbWUpIC8gMTAwMDtcclxuICAgICAgICBpZiAodGhpcy5wcm9ncmFtKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS51c2UoKTtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGdsUHJvZ3JhbV9zdGF0ZSA9IGNjLkdMUHJvZ3JhbVN0YXRlLmdldE9yQ3JlYXRlV2l0aEdMUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xyXG4gICAgICAgICAgICAgICAgZ2xQcm9ncmFtX3N0YXRlLnNldFVuaWZvcm1GbG9hdChcInRpbWVcIiwgdGhpcy50aW1lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdCA9IHRoaXMucHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lKFwidGltZVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMWYoY3QsIHRoaXMudGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GrayEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '25ea7qT3A5DTrk6mpTAwlYf', 'GrayEffect');
// Script/GrayEffect.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GrayFrag_1 = require("./GrayFrag");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GrayEffect = /** @class */ (function (_super) {
    __extends(GrayEffect, _super);
    function GrayEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAllChildrenUse = false;
        return _this;
    }
    GrayEffect.prototype.onLoad = function () {
        this.grayShader();
    };
    // 变灰shader
    GrayEffect.prototype.grayShader = function () {
        this.program = new cc.GLProgram();
        if (cc.sys.isNative) {
            this.program.initWithString(GrayFrag_1.default.default_vert, GrayFrag_1.default.gray_frag);
            this.program.link();
            this.program.updateUniforms();
        }
        else {
            this.program.initWithVertexShaderByteArray(GrayFrag_1.default.default_vert, GrayFrag_1.default.gray_frag);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
            this.program.link();
            this.program.updateUniforms();
        }
        if (this.isAllChildrenUse) {
            this.setProgram(this.node._sgNode, this.program);
        }
        else {
            this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program);
        }
    };
    GrayEffect.prototype.setProgram = function (node, program) {
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(program);
            node.setGLProgramState(glProgram_state);
        }
        else {
            node.setShaderProgram(program);
        }
        var children = node.children;
        if (!children)
            return;
        for (var i = 0; i < children.length; i++) {
            this.setProgram(children[i], program);
        }
    };
    // 恢复默认shader
    GrayEffect.prototype.resetProgram = function (node) {
        node.getComponent(cc.Sprite)._sgNode.setState(0);
        var children = node.children;
        if (!children)
            return;
        for (var i = 0; i < children.length; i++) {
            this.resetProgram(children[i]);
        }
    };
    GrayEffect.prototype.resetShader = function () {
        if (this.isAllChildrenUse) {
            this.resetProgram(this.node);
        }
        else {
            this.node.getComponent(cc.Sprite)._sgNode.setState(0);
        }
    };
    __decorate([
        property
    ], GrayEffect.prototype, "isAllChildrenUse", void 0);
    GrayEffect = __decorate([
        ccclass
    ], GrayEffect);
    return GrayEffect;
}(cc.Component));
exports.default = GrayEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHcmF5RWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE4QjtBQUN4QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQTtBQUczQztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQXFFQztRQW5FRyxzQkFBZ0IsR0FBWSxLQUFLLENBQUM7O0lBbUV0QyxDQUFDO0lBL0RHLDJCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFdBQVc7SUFDWCwrQkFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLGtCQUFJLENBQUMsWUFBWSxFQUFFLGtCQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ2pDO2FBQU07WUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLDZCQUE2QixDQUFDLGtCQUFJLENBQUMsWUFBWSxFQUFFLGtCQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDOUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDN0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDdkYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDaEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEQ7YUFBTTtZQUNILElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDNUU7SUFFTCxDQUFDO0lBRUQsK0JBQVUsR0FBVixVQUFXLElBQVMsRUFBRSxPQUFZO1FBQzlCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsQztRQUVELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVE7WUFDVCxPQUFPO1FBRVgsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDekM7SUFDTCxDQUFDO0lBRUQsYUFBYTtJQUNiLGlDQUFZLEdBQVosVUFBYSxJQUFhO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUTtZQUNULE9BQU87UUFDWCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xDO0lBRUwsQ0FBQztJQUVELGdDQUFXLEdBQVg7UUFDSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQzthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekQ7SUFDTCxDQUFDO0lBbEVEO1FBREMsUUFBUTt3REFDeUI7SUFGakIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXFFOUI7SUFBRCxpQkFBQztDQXJFRCxBQXFFQyxDQXJFdUMsRUFBRSxDQUFDLFNBQVMsR0FxRW5EO2tCQXJFb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHcmF5IGZyb20gJy4vR3JheUZyYWcnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmF5RWZmZWN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgaXNBbGxDaGlsZHJlblVzZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByb2dyYW06IGNjLkdMUHJvZ3JhbTsvLyBTaGFkZXJQcm9ncmFtXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuZ3JheVNoYWRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWPmOeBsHNoYWRlclxyXG4gICAgZ3JheVNoYWRlcigpIHtcclxuICAgICAgICB0aGlzLnByb2dyYW0gPSBuZXcgY2MuR0xQcm9ncmFtKCk7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uaW5pdFdpdGhTdHJpbmcoR3JheS5kZWZhdWx0X3ZlcnQsIEdyYXkuZ3JheV9mcmFnKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmxpbmsoKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnVwZGF0ZVVuaWZvcm1zKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmluaXRXaXRoVmVydGV4U2hhZGVyQnl0ZUFycmF5KEdyYXkuZGVmYXVsdF92ZXJ0LCBHcmF5LmdyYXlfZnJhZyk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfUE9TSVRJT04sIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfUE9TSVRJT04pO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX0NPTE9SLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX0NPTE9SKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9URVhfQ09PUkQsIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfVEVYX0NPT1JEUyk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5saW5rKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc0FsbENoaWxkcmVuVXNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZ3JhbSh0aGlzLm5vZGUuX3NnTm9kZSwgdGhpcy5wcm9ncmFtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFByb2dyYW0odGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLl9zZ05vZGUsIHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9ncmFtKG5vZGU6IGFueSwgcHJvZ3JhbTogYW55KSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgICAgICBub2RlLnNldEdMUHJvZ3JhbVN0YXRlKGdsUHJvZ3JhbV9zdGF0ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbm9kZS5zZXRTaGFkZXJQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbjtcclxuICAgICAgICBpZiAoIWNoaWxkcmVuKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRQcm9ncmFtKGNoaWxkcmVuW2ldLCBwcm9ncmFtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5oGi5aSN6buY6K6kc2hhZGVyXHJcbiAgICByZXNldFByb2dyYW0obm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuX3NnTm9kZS5zZXRTdGF0ZSgwKTtcclxuICAgICAgICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuO1xyXG4gICAgICAgIGlmICghY2hpbGRyZW4pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQcm9ncmFtKGNoaWxkcmVuW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRTaGFkZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBbGxDaGlsZHJlblVzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0UHJvZ3JhbSh0aGlzLm5vZGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5fc2dOb2RlLnNldFN0YXRlKDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GrayFrag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4bdbfnUGoRGuZRGr52jBbJu', 'GrayFrag');
// Script/GrayFrag.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GrayFrag = /** @class */ (function () {
    function GrayFrag() {
    }
    GrayFrag.default_vert = "\n    attribute vec4 a_position;\n    attribute vec2 a_texCoord;\n    attribute vec4 a_color;\n    varying vec2 v_texCoord;\n    varying vec4 v_fragmentColor;\n    void main()\n    {\n        gl_Position = CC_PMatrix * a_position;\n        v_fragmentColor = a_color;\n        v_texCoord = a_texCoord;\n    }\n    ";
    GrayFrag.gray_frag = "\n    #ifdef GL_ES\n    precision mediump float;\n    #endif\n    varying vec4 v_fragmentColor;\n    varying vec2 v_texCoord;\n    void main()\n    {\n        vec4 c = v_fragmentColor * texture2D(CC_Texture0, v_texCoord);\n        gl_FragColor.xyz = vec3(0.2126*c.r + 0.7152*c.g + 0.0722*c.b);\n        gl_FragColor.w = c.w;\n    }\n    ";
    return GrayFrag;
}());
exports.default = GrayFrag;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHcmF5RnJhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUE0QkEsQ0FBQztJQTNCVSxxQkFBWSxHQUFHLDJUQVlyQixDQUFDO0lBRUssa0JBQVMsR0FBRyxtVkFZbEIsQ0FBQztJQUNOLGVBQUM7Q0E1QkQsQUE0QkMsSUFBQTtrQkE1Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBHcmF5RnJhZ3tcclxuICAgIHN0YXRpYyBkZWZhdWx0X3ZlcnQgPSBgXHJcbiAgICBhdHRyaWJ1dGUgdmVjNCBhX3Bvc2l0aW9uO1xyXG4gICAgYXR0cmlidXRlIHZlYzIgYV90ZXhDb29yZDtcclxuICAgIGF0dHJpYnV0ZSB2ZWM0IGFfY29sb3I7XHJcbiAgICB2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxuICAgIHZhcnlpbmcgdmVjNCB2X2ZyYWdtZW50Q29sb3I7XHJcbiAgICB2b2lkIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIGdsX1Bvc2l0aW9uID0gQ0NfUE1hdHJpeCAqIGFfcG9zaXRpb247XHJcbiAgICAgICAgdl9mcmFnbWVudENvbG9yID0gYV9jb2xvcjtcclxuICAgICAgICB2X3RleENvb3JkID0gYV90ZXhDb29yZDtcclxuICAgIH1cclxuICAgIGA7XHJcbiAgICAgICBcclxuICAgIHN0YXRpYyBncmF5X2ZyYWcgPSBgXHJcbiAgICAjaWZkZWYgR0xfRVNcclxuICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG4gICAgI2VuZGlmXHJcbiAgICB2YXJ5aW5nIHZlYzQgdl9mcmFnbWVudENvbG9yO1xyXG4gICAgdmFyeWluZyB2ZWMyIHZfdGV4Q29vcmQ7XHJcbiAgICB2b2lkIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIHZlYzQgYyA9IHZfZnJhZ21lbnRDb2xvciAqIHRleHR1cmUyRChDQ19UZXh0dXJlMCwgdl90ZXhDb29yZCk7XHJcbiAgICAgICAgZ2xfRnJhZ0NvbG9yLnh5eiA9IHZlYzMoMC4yMTI2KmMuciArIDAuNzE1MipjLmcgKyAwLjA3MjIqYy5iKTtcclxuICAgICAgICBnbF9GcmFnQ29sb3IudyA9IGMudztcclxuICAgIH1cclxuICAgIGA7XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SearchLightFrag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd97daHlXyRMC7SfPeNmozga', 'SearchLightFrag');
// Script/SearchLightFrag.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SearchLightFrag = /** @class */ (function () {
    function SearchLightFrag() {
    }
    SearchLightFrag.search_light_vert = "\n    attribute vec4 a_position;\n    attribute vec2 a_texCoord;\n    attribute vec4 a_color;\n    varying vec2 v_texCoord;\n    varying vec4 v_fragmentColor;\n    void main()\n    {\n        gl_Position = CC_PMatrix * a_position;\n        v_fragmentColor = a_color;\n        v_texCoord = a_texCoord;\n    }\n    ";
    SearchLightFrag.search_light_frag = "\n    #ifdef GL_ES\n    precision mediump float;\n    #endif\n    uniform vec2 resolution;\n    uniform vec2 mouse;\n    varying vec2 v_texCoord;\n\n    void mainImage( out vec4 fragColor, in vec2 fragCoord )\n    {\n        // y\u5750\u6807\u7FFB\u8F6C\n        vec2 imouse = vec2(mouse.x, resolution.y - mouse.y);\n        // \u7EB9\u7406\u5750\u6807\n        vec2 uv = v_texCoord.xy ;\n        // \u7EB9\u7406\u91C7\u6837\n        vec4 tex = texture2D(CC_Texture0, uv);\n        // \u7247\u5143\u5230\u9F20\u6807\u70B9\u7684\u5DEE\u5411\u91CF\n        vec2 d = uv*resolution.xy -imouse.xy ;\n        // \u5149\u7167\u534A\u5F84\n        vec2 s = 0.15 * resolution.xy;\n        // \u70B9\u79EF\u53D6\u6BD4\u4F8B\n        float r = dot(d, d)/dot(s,s);\n        fragColor =  tex * (1.08 - r);   \n    }\n    void main()\n    {\n        mainImage(gl_FragColor, gl_FragCoord.xy);\n    }\n    ";
    return SearchLightFrag;
}());
exports.default = SearchLightFrag;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTZWFyY2hMaWdodEZyYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBMkNBLENBQUM7SUExQ1UsaUNBQWlCLEdBQUcsMlRBWTFCLENBQUM7SUFDSyxpQ0FBaUIsR0FBRyw0M0JBNEIxQixDQUFDO0lBQ04sc0JBQUM7Q0EzQ0QsQUEyQ0MsSUFBQTtrQkEzQ29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hMaWdodEZyYWd7XHJcbiAgICBzdGF0aWMgc2VhcmNoX2xpZ2h0X3ZlcnQgPSBgXHJcbiAgICBhdHRyaWJ1dGUgdmVjNCBhX3Bvc2l0aW9uO1xyXG4gICAgYXR0cmlidXRlIHZlYzIgYV90ZXhDb29yZDtcclxuICAgIGF0dHJpYnV0ZSB2ZWM0IGFfY29sb3I7XHJcbiAgICB2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxuICAgIHZhcnlpbmcgdmVjNCB2X2ZyYWdtZW50Q29sb3I7XHJcbiAgICB2b2lkIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIGdsX1Bvc2l0aW9uID0gQ0NfUE1hdHJpeCAqIGFfcG9zaXRpb247XHJcbiAgICAgICAgdl9mcmFnbWVudENvbG9yID0gYV9jb2xvcjtcclxuICAgICAgICB2X3RleENvb3JkID0gYV90ZXhDb29yZDtcclxuICAgIH1cclxuICAgIGA7XHJcbiAgICBzdGF0aWMgc2VhcmNoX2xpZ2h0X2ZyYWcgPSBgXHJcbiAgICAjaWZkZWYgR0xfRVNcclxuICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG4gICAgI2VuZGlmXHJcbiAgICB1bmlmb3JtIHZlYzIgcmVzb2x1dGlvbjtcclxuICAgIHVuaWZvcm0gdmVjMiBtb3VzZTtcclxuICAgIHZhcnlpbmcgdmVjMiB2X3RleENvb3JkO1xyXG5cclxuICAgIHZvaWQgbWFpbkltYWdlKCBvdXQgdmVjNCBmcmFnQ29sb3IsIGluIHZlYzIgZnJhZ0Nvb3JkIClcclxuICAgIHtcclxuICAgICAgICAvLyB55Z2Q5qCH57+76L2sXHJcbiAgICAgICAgdmVjMiBpbW91c2UgPSB2ZWMyKG1vdXNlLngsIHJlc29sdXRpb24ueSAtIG1vdXNlLnkpO1xyXG4gICAgICAgIC8vIOe6ueeQhuWdkOagh1xyXG4gICAgICAgIHZlYzIgdXYgPSB2X3RleENvb3JkLnh5IDtcclxuICAgICAgICAvLyDnurnnkIbph4fmoLdcclxuICAgICAgICB2ZWM0IHRleCA9IHRleHR1cmUyRChDQ19UZXh0dXJlMCwgdXYpO1xyXG4gICAgICAgIC8vIOeJh+WFg+WIsOm8oOagh+eCueeahOW3ruWQkemHj1xyXG4gICAgICAgIHZlYzIgZCA9IHV2KnJlc29sdXRpb24ueHkgLWltb3VzZS54eSA7XHJcbiAgICAgICAgLy8g5YWJ54Wn5Y2K5b6EXHJcbiAgICAgICAgdmVjMiBzID0gMC4xNSAqIHJlc29sdXRpb24ueHk7XHJcbiAgICAgICAgLy8g54K556ev5Y+W5q+U5L6LXHJcbiAgICAgICAgZmxvYXQgciA9IGRvdChkLCBkKS9kb3QocyxzKTtcclxuICAgICAgICBmcmFnQ29sb3IgPSAgdGV4ICogKDEuMDggLSByKTsgICBcclxuICAgIH1cclxuICAgIHZvaWQgbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgbWFpbkltYWdlKGdsX0ZyYWdDb2xvciwgZ2xfRnJhZ0Nvb3JkLnh5KTtcclxuICAgIH1cclxuICAgIGA7XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SearchLightEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '06070jb+6JF2p+w1IfhXjt2', 'SearchLightEffect');
// Script/SearchLightEffect.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Feofox Game
// Author:Lerry
// https://github.com/fylz1125/ShaderDemos
var SearchLightFrag_1 = require("./SearchLightFrag");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SearchLightEffect = /** @class */ (function (_super) {
    __extends(SearchLightEffect, _super);
    function SearchLightEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startTime = Date.now();
        _this.time = 0;
        _this.resolution = { x: 0.0, y: 0.0 };
        _this.mouse = { x: 0.0, y: 0.0 };
        return _this;
        // update (dt) {}
    }
    SearchLightEffect.prototype.onLoad = function () {
        this.resolution.x = (this.node.getContentSize().width);
        this.resolution.y = (this.node.getContentSize().height);
        this.mouse.x = 50.;
        this.mouse.y = 40.;
        var self = this;
        // 添加触摸事件包含鼠标事件
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            // 转化为node的局部坐标
            var touchPos = self.node.convertTouchToNodeSpaceAR(event.touch);
            self.mouse.x = touchPos.x;
            self.mouse.y = touchPos.y;
            self.changeLight();
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var touchPos = self.node.convertTouchToNodeSpaceAR(event.touch);
            self.mouse.x = touchPos.x;
            self.mouse.y = touchPos.y;
            self.changeLight();
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            // cc.log('touch end');
        }, this);
        this.useShader();
    };
    SearchLightEffect.prototype.useShader = function () {
        this.program = new cc.GLProgram();
        if (cc.sys.isNative) {
            this.program.initWithString(SearchLightFrag_1.default.search_light_vert, SearchLightFrag_1.default.search_light_frag);
        }
        else {
            this.program.initWithVertexShaderByteArray(SearchLightFrag_1.default.search_light_vert, SearchLightFrag_1.default.search_light_frag);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
        }
        this.program.link();
        this.program.updateUniforms();
        this.program.use();
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
            glProgram_state.setUniformVec2("resolution", this.resolution);
            glProgram_state.setUniformVec2("mouse", this.mouse);
        }
        else {
            var res = this.program.getUniformLocationForName("resolution");
            var ms = this.program.getUniformLocationForName("mouse");
            this.program.setUniformLocationWith2f(res, this.resolution.x, this.resolution.y);
            this.program.setUniformLocationWith2f(ms, this.mouse.x, this.mouse.y);
        }
        this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program);
    };
    SearchLightEffect.prototype.setProgram = function (node, program) {
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(program);
            node.setGLProgramState(glProgram_state);
        }
        else {
            node.setShaderProgram(program);
        }
    };
    SearchLightEffect.prototype.changeLight = function () {
        if (this.program) {
            this.program.use();
            if (cc.sys.isNative) {
                var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
                glProgram_state.setUniformVec2("resolution", this.resolution);
                glProgram_state.setUniformVec2("mouse", this.mouse);
            }
            else {
                var res = this.program.getUniformLocationForName("resolution");
                var ms = this.program.getUniformLocationForName("mouse");
                this.program.setUniformLocationWith2f(res, this.resolution.x, this.resolution.y);
                this.program.setUniformLocationWith2f(ms, this.mouse.x, this.mouse.y);
            }
        }
    };
    SearchLightEffect = __decorate([
        ccclass
    ], SearchLightEffect);
    return SearchLightEffect;
}(cc.Component));
exports.default = SearchLightEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTZWFyY2hMaWdodEVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxjQUFjO0FBQ2QsZUFBZTtBQUNmLDBDQUEwQztBQUMxQyxxREFBNEM7QUFFdEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUEyRkM7UUF4RkcsZUFBUyxHQUFVLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM5QixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBRWpCLGdCQUFVLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNoQyxXQUFLLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQzs7UUFtRjNCLGlCQUFpQjtJQUNyQixDQUFDO0lBbEZHLGtDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxDQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGVBQWU7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFX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QkFBd0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQy9FLGVBQWUsQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDOUQsZUFBZSxDQUFDLGNBQWMsQ0FBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDO2FBQ3pEO2lCQUFNO2dCQUNILElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUUsWUFBWSxDQUFFLENBQUM7Z0JBQ2pFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3pELElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFFLENBQUM7Z0JBQ2xGLElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDeEU7U0FDSjtJQUNMLENBQUM7SUF4RmdCLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBMkZyQztJQUFELHdCQUFDO0NBM0ZELEFBMkZDLENBM0Y4QyxFQUFFLENBQUMsU0FBUyxHQTJGMUQ7a0JBM0ZvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGZW9mb3ggR2FtZVxyXG4vLyBBdXRob3I6TGVycnlcclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Z5bHoxMTI1L1NoYWRlckRlbW9zXHJcbmltcG9ydCBTZWFyY2hMaWdodCBmcm9tICcuL1NlYXJjaExpZ2h0RnJhZyc7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaExpZ2h0RWZmZWN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcm9ncmFtOiBjYy5HTFByb2dyYW07XHJcbiAgICBzdGFydFRpbWU6bnVtYmVyID0gRGF0ZS5ub3coKTtcclxuICAgIHRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcmVzb2x1dGlvbiA9IHsgeDogMC4wLCB5OiAwLjAgfTtcclxuICAgIG1vdXNlID0geyB4OiAwLjAsIHk6IDAuMCB9O1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnJlc29sdXRpb24ueCA9ICggdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkud2lkdGggKTtcclxuICAgICAgICB0aGlzLnJlc29sdXRpb24ueSA9ICh0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMubW91c2UueCA9IDUwLjtcclxuICAgICAgICB0aGlzLm1vdXNlLnkgPSA0MC47XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIC8vIOa3u+WKoOinpuaRuOS6i+S7tuWMheWQq+m8oOagh+S6i+S7tlxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24gKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgICAgIC8vIOi9rOWMluS4um5vZGXnmoTlsYDpg6jlnZDmoIdcclxuICAgICAgICAgICAgbGV0IHRvdWNoUG9zID0gc2VsZi5ub2RlLmNvbnZlcnRUb3VjaFRvTm9kZVNwYWNlQVIoZXZlbnQudG91Y2gpO1xyXG4gICAgICAgICAgICBzZWxmLm1vdXNlLnggPSB0b3VjaFBvcy54O1xyXG4gICAgICAgICAgICBzZWxmLm1vdXNlLnkgPSB0b3VjaFBvcy55O1xyXG4gICAgICAgICAgICBzZWxmLmNoYW5nZUxpZ2h0KCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCBmdW5jdGlvbiAoZXZlbnQ6Y2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgICAgICBsZXQgdG91Y2hQb3MgPSBzZWxmLm5vZGUuY29udmVydFRvdWNoVG9Ob2RlU3BhY2VBUihldmVudC50b3VjaCk7XHJcbiAgICAgICAgICAgIHNlbGYubW91c2UueCA9IHRvdWNoUG9zLng7XHJcbiAgICAgICAgICAgIHNlbGYubW91c2UueSA9IHRvdWNoUG9zLnk7XHJcbiAgICAgICAgICAgIHNlbGYuY2hhbmdlTGlnaHQoKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgLy8gY2MubG9nKCd0b3VjaCBlbmQnKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMudXNlU2hhZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlU2hhZGVyKCkge1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBjYy5HTFByb2dyYW0oKTtcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5pbml0V2l0aFN0cmluZyhTZWFyY2hMaWdodC5zZWFyY2hfbGlnaHRfdmVydCwgU2VhcmNoTGlnaHQuc2VhcmNoX2xpZ2h0X2ZyYWcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5pbml0V2l0aFZlcnRleFNoYWRlckJ5dGVBcnJheShTZWFyY2hMaWdodC5zZWFyY2hfbGlnaHRfdmVydCwgU2VhcmNoTGlnaHQuc2VhcmNoX2xpZ2h0X2ZyYWcpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX1BPU0lUSU9OLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1BPU0lUSU9OKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9DT0xPUiwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9DT0xPUik7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfVEVYX0NPT1JELCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1RFWF9DT09SRFMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb2dyYW0ubGluaygpO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbS51c2UoKTtcclxuXHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtVmVjMihcInJlc29sdXRpb25cIiwgdGhpcy5yZXNvbHV0aW9uKTtcclxuICAgICAgICAgICAgZ2xQcm9ncmFtX3N0YXRlLnNldFVuaWZvcm1WZWMyKCBcIm1vdXNlXCIsIHRoaXMubW91c2UgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gdGhpcy5wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoIFwicmVzb2x1dGlvblwiICk7XHJcbiAgICAgICAgICAgIGxldCBtcyA9IHRoaXMucHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lKFwibW91c2VcIik7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMmYoIHJlcywgdGhpcy5yZXNvbHV0aW9uLngsdGhpcy5yZXNvbHV0aW9uLnkgKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgyZihtcywgdGhpcy5tb3VzZS54LHRoaXMubW91c2UueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0UHJvZ3JhbSh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuX3NnTm9kZSwgdGhpcy5wcm9ncmFtKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9ncmFtKG5vZGU6IGFueSwgcHJvZ3JhbTogYW55KSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgICAgICBub2RlLnNldEdMUHJvZ3JhbVN0YXRlKGdsUHJvZ3JhbV9zdGF0ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbm9kZS5zZXRTaGFkZXJQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VMaWdodCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9ncmFtKSB7IFxyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0udXNlKCk7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0odGhpcy5wcm9ncmFtKTtcclxuICAgICAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtVmVjMihcInJlc29sdXRpb25cIiwgdGhpcy5yZXNvbHV0aW9uKTtcclxuICAgICAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtVmVjMiggXCJtb3VzZVwiLCB0aGlzLm1vdXNlICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0gdGhpcy5wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoIFwicmVzb2x1dGlvblwiICk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbXMgPSB0aGlzLnByb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZShcIm1vdXNlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgyZiggcmVzLCB0aGlzLnJlc29sdXRpb24ueCx0aGlzLnJlc29sdXRpb24ueSApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgyZihtcywgdGhpcy5tb3VzZS54LHRoaXMubW91c2UueSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/TransferEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1b90/rohdEk4SdmmEZANaD', 'TransferEffect');
// Script/TransferEffect.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var TransferFrag_1 = require("./TransferFrag");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TransferEffect = /** @class */ (function (_super) {
    __extends(TransferEffect, _super);
    function TransferEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAllChildrenUse = false;
        _this.time = 0;
        return _this;
    }
    TransferEffect.prototype.start = function () {
        // init logic
        this.enabled = false;
    };
    TransferEffect.prototype.useShader = function () {
        var bgSp = this.node.getComponent(cc.Sprite);
        this.program = new cc.GLProgram();
        if (!cc.sys.isNative) {
            this.program.initWithVertexShaderByteArray(TransferFrag_1.default.vert, TransferFrag_1.default.frag);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
        }
        else {
            this.program.initWithString(TransferFrag_1.default.vert, TransferFrag_1.default.frag);
        }
        this.program.link();
        this.program.updateUniforms();
        this.program.use();
        if (!cc.sys.isNative) {
            var time = this.program.getUniformLocationForName("time");
            this.program.setUniformLocationWith1f(time, this.time);
        }
        else {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
            glProgram_state.setUniformFloat("time", this.time);
        }
        // bgSp._sgNode.setShaderProgram(this.program);
        // this.enabled = true;
        if (this.isAllChildrenUse) {
            this.setProgram(this.node._sgNode, this.program);
        }
        else {
            this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program);
        }
        this.enabled = true;
    };
    TransferEffect.prototype.setProgram = function (node, program) {
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(program);
            node.setGLProgramState(glProgram_state);
        }
        else {
            node.setShaderProgram(program);
        }
        var children = node.children;
        if (!children)
            return;
        for (var i = 0; i < children.length; i++) {
            this.setProgram(children[i], program);
        }
    };
    TransferEffect.prototype.update = function (dt) {
        this.time += 0.02;
        if (this.program) {
            this.program.use();
            if (!cc.sys.isNative) {
                var time = this.program.getUniformLocationForName("time");
                this.program.setUniformLocationWith1f(time, this.time);
            }
            else {
                var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
                glProgram_state.setUniformFloat("time", this.time);
            }
        }
    };
    __decorate([
        property
    ], TransferEffect.prototype, "isAllChildrenUse", void 0);
    TransferEffect = __decorate([
        ccclass
    ], TransferEffect);
    return TransferEffect;
}(cc.Component));
exports.default = TransferEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUcmFuc2ZlckVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBc0M7QUFDaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUE0RUM7UUF4RUcsc0JBQWdCLEdBQVksS0FBSyxDQUFDO1FBR2xDLFVBQUksR0FBVyxDQUFDLENBQUM7O0lBcUVyQixDQUFDO0lBbkVHLDhCQUFLLEdBQUw7UUFDSSxhQUFhO1FBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVELGtDQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksR0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxzQkFBUSxDQUFDLElBQUksRUFBRSxzQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQzdGLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3ZGLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFD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QUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDL0UsZUFBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3REO1NBQ0o7SUFDTCxDQUFDO0lBdkVEO1FBREMsUUFBUTs0REFDeUI7SUFKakIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQTRFbEM7SUFBRCxxQkFBQztDQTVFRCxBQTRFQyxDQTVFMkMsRUFBRSxDQUFDLFNBQVMsR0E0RXZEO2tCQTVFb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFuc2ZlciBmcm9tICcuL1RyYW5zZmVyRnJhZyc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2ZlckVmZmVjdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgaXNBbGxDaGlsZHJlblVzZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByb2dyYW06IGNjLkdMUHJvZ3JhbTtcclxuICAgIHRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gaW5pdCBsb2dpY1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZVNoYWRlcigpIHtcclxuICAgICAgICBsZXQgYmdTcDogY2MuU3ByaXRlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBjYy5HTFByb2dyYW0oKTtcclxuICAgICAgICBpZiAoIWNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uaW5pdFdpdGhWZXJ0ZXhTaGFkZXJCeXRlQXJyYXkoVHJhbnNmZXIudmVydCwgVHJhbnNmZXIuZnJhZyk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfUE9TSVRJT04sIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfUE9TSVRJT04pO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX0NPTE9SLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX0NPTE9SKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9URVhfQ09PUkQsIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfVEVYX0NPT1JEUyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmluaXRXaXRoU3RyaW5nKFRyYW5zZmVyLnZlcnQsIFRyYW5zZmVyLmZyYWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb2dyYW0ubGluaygpO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbS51c2UoKTtcclxuXHJcbiAgICAgICAgaWYgKCFjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgbGV0IHRpbWUgPSB0aGlzLnByb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZShcInRpbWVcIik7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMWYodGltZSwgdGhpcy50aW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtRmxvYXQoXCJ0aW1lXCIsIHRoaXMudGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGJnU3AuX3NnTm9kZS5zZXRTaGFkZXJQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgLy8gdGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5pc0FsbENoaWxkcmVuVXNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZ3JhbSh0aGlzLm5vZGUuX3NnTm9kZSwgdGhpcy5wcm9ncmFtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFByb2dyYW0odGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLl9zZ05vZGUsIHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvZ3JhbShub2RlOiBhbnksIHByb2dyYW06IGFueSkge1xyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgdmFyIGdsUHJvZ3JhbV9zdGF0ZSA9IGNjLkdMUHJvZ3JhbVN0YXRlLmdldE9yQ3JlYXRlV2l0aEdMUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgICAgICAgICAgbm9kZS5zZXRHTFByb2dyYW1TdGF0ZShnbFByb2dyYW1fc3RhdGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0U2hhZGVyUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbjtcclxuICAgICAgICBpZiAoIWNoaWxkcmVuKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRQcm9ncmFtKGNoaWxkcmVuW2ldLCBwcm9ncmFtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMudGltZSArPSAwLjAyO1xyXG4gICAgICAgIGlmICh0aGlzLnByb2dyYW0pIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnVzZSgpO1xyXG4gICAgICAgICAgICBpZiAoIWNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWUgPSB0aGlzLnByb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZShcInRpbWVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmKHRpbWUsIHRoaXMudGltZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgICAgICAgICBnbFByb2dyYW1fc3RhdGUuc2V0VW5pZm9ybUZsb2F0KFwidGltZVwiLCB0aGlzLnRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/TransferFrag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '88622uEk39JO7YhDjslLjae', 'TransferFrag');
// Script/TransferFrag.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Transfer = /** @class */ (function () {
    function Transfer() {
    }
    Transfer.vert = "\n    attribute vec4 a_position;\n    attribute vec2 a_texCoord;\n    attribute vec4 a_color;\n    varying vec2 v_texCoord; \n    varying vec4 v_fragmentColor; \n    void main() \n    { \n        gl_Position = CC_PMatrix * a_position;\n        v_fragmentColor = a_color; \n        v_texCoord = a_texCoord; \n    }\n    ";
    Transfer.frag = "\n    #ifdef GL_ES\n    precision lowp float;\n    #endif\n    \n    uniform float time;\n\n    varying vec4 v_fragmentColor;\n    varying vec2 v_texCoord;\n    void main()\n    {\n        vec4 c = v_fragmentColor * texture2D(CC_Texture0, v_texCoord);\n        gl_FragColor = c;\n\n        float temp = v_texCoord.x - time;\n        if (temp <= 0.0) {\n            float temp2 = abs(temp);\n            if (temp2 <= 0.2) {\n                gl_FragColor.w = 1.0 - temp2/0.2;\n            } else {\n                gl_FragColor.w = 0.0;\n            }\n        } else {\n            gl_FragColor.w = 1.0;\n        }\n    }\n    ";
    return Transfer;
}());
exports.default = Transfer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUcmFuc2ZlckZyYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBMENBLENBQUM7SUF6Q1UsYUFBSSxHQUFFLGlVQVlaLENBQUM7SUFFSyxhQUFJLEdBQUMsb25CQTBCWCxDQUFDO0lBQ04sZUFBQztDQTFDRCxBQTBDQyxJQUFBO2tCQTFDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zZmVyIHtcclxuICAgIHN0YXRpYyB2ZXJ0ID1gXHJcbiAgICBhdHRyaWJ1dGUgdmVjNCBhX3Bvc2l0aW9uO1xyXG4gICAgYXR0cmlidXRlIHZlYzIgYV90ZXhDb29yZDtcclxuICAgIGF0dHJpYnV0ZSB2ZWM0IGFfY29sb3I7XHJcbiAgICB2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDsgXHJcbiAgICB2YXJ5aW5nIHZlYzQgdl9mcmFnbWVudENvbG9yOyBcclxuICAgIHZvaWQgbWFpbigpIFxyXG4gICAgeyBcclxuICAgICAgICBnbF9Qb3NpdGlvbiA9IENDX1BNYXRyaXggKiBhX3Bvc2l0aW9uO1xyXG4gICAgICAgIHZfZnJhZ21lbnRDb2xvciA9IGFfY29sb3I7IFxyXG4gICAgICAgIHZfdGV4Q29vcmQgPSBhX3RleENvb3JkOyBcclxuICAgIH1cclxuICAgIGA7XHJcbiAgICBcclxuICAgIHN0YXRpYyBmcmFnPWBcclxuICAgICNpZmRlZiBHTF9FU1xyXG4gICAgcHJlY2lzaW9uIGxvd3AgZmxvYXQ7XHJcbiAgICAjZW5kaWZcclxuICAgIFxyXG4gICAgdW5pZm9ybSBmbG9hdCB0aW1lO1xyXG5cclxuICAgIHZhcnlpbmcgdmVjNCB2X2ZyYWdtZW50Q29sb3I7XHJcbiAgICB2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxuICAgIHZvaWQgbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgdmVjNCBjID0gdl9mcmFnbWVudENvbG9yICogdGV4dHVyZTJEKENDX1RleHR1cmUwLCB2X3RleENvb3JkKTtcclxuICAgICAgICBnbF9GcmFnQ29sb3IgPSBjO1xyXG5cclxuICAgICAgICBmbG9hdCB0ZW1wID0gdl90ZXhDb29yZC54IC0gdGltZTtcclxuICAgICAgICBpZiAodGVtcCA8PSAwLjApIHtcclxuICAgICAgICAgICAgZmxvYXQgdGVtcDIgPSBhYnModGVtcCk7XHJcbiAgICAgICAgICAgIGlmICh0ZW1wMiA8PSAwLjIpIHtcclxuICAgICAgICAgICAgICAgIGdsX0ZyYWdDb2xvci53ID0gMS4wIC0gdGVtcDIvMC4yO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yLncgPSAwLjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnbF9GcmFnQ29sb3IudyA9IDEuMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBgO1xyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/shader/MaterialSingleton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1c61a8tZbFId421pLOVx0oz', 'MaterialSingleton');
// Script/shader/MaterialSingleton.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var math = cc.vmath;
var renderEngine = cc.renderer.renderEngine;
var Material = renderEngine.Material;
var MaterialSingleton = /** @class */ (function (_super) {
    __extends(MaterialSingleton, _super);
    function MaterialSingleton() {
        return _super.call(this, false) || this;
    }
    MaterialSingleton.getInstance = function (shaderName) {
        if (!this.instance) {
            this.instance = new MaterialSingleton();
        }
        this.instance.initWithName(shaderName);
        return this.instance;
    };
    MaterialSingleton.prototype.initWithName = function (shaderName) {
        var renderer = renderEngine.renderer;
        var gfx = renderEngine.gfx;
        var pass = new renderer.Pass(shaderName);
        pass.setDepth(false, false);
        pass.setCullMode(gfx.CULL_NONE);
        pass.setBlend(gfx.BLEND_FUNC_ADD, gfx.BLEND_SRC_ALPHA, gfx.BLEND_ONE_MINUS_SRC_ALPHA, gfx.BLEND_FUNC_ADD, gfx.BLEND_SRC_ALPHA, gfx.BLEND_ONE_MINUS_SRC_ALPHA);
        var mainTech = new renderer.Technique(['transparent'], [
            { name: 'texture', type: renderer.PARAM_TEXTURE_2D },
            { name: 'pos', type: renderer.PARAM_FLOAT3 },
            { name: 'size', type: renderer.PARAM_FLOAT2 },
            { name: 'iTime', type: renderer.PARAM_FLOAT },
            { name: 'num', type: renderer.PARAM_FLOAT },
            { name: 'resolution', type: renderer.PARAM_FLOAT3 },
        ], [pass]);
        // @ts-ignore
        this._texture = null;
        // @ts-ignore
        this._pos = { x: 0.0, y: 0.0, z: 0.0 };
        // @ts-ignore
        this._size = { x: 0.0, y: 0.0 };
        // @ts-ignore
        this._time = 0.0;
        // @ts-ignore
        this._num = 0.0;
        // @ts-ignore
        this._resolution = math.vec3.create();
        // @ts-ignore
        this._effect = this.effect = new renderer.Effect([
            mainTech
        ], {
            'pos': this._pos,
            'size': this._size,
            'iTime': this._time,
            'num': this._num,
            'resolution': this._resolution
        }, []);
        // @ts-ignore
        this._mainTech = mainTech;
    };
    MaterialSingleton.prototype.setTexture = function (texture) {
        if (this._texture !== texture) {
            // @ts-ignore
            this._texture = texture;
            this._texture.update({
                // 有时候需要反转y轴
                flipY: false,
                // 多级渐进纹理
                mipmap: true
            });
            this._effect.setProperty('texture', texture.getImpl());
            this._texIds['texture'] = texture.getId();
        }
    };
    MaterialSingleton.prototype.setPos = function (x, y, z) {
        this._pos.x = x;
        this._pos.y = y;
        this._pos.z = z;
        this._effect.setProperty('pos', this._pos);
    };
    MaterialSingleton.prototype.setSize = function (x, y) {
        this._size.x = x;
        this._size.y = y;
        this._effect.setProperty('size', this._size);
    };
    MaterialSingleton.prototype.setTime = function (time) {
        // @ts-ignore
        this._time = time;
        this._effect.setProperty('iTime', this._time);
    };
    MaterialSingleton.prototype.setNum = function (num) {
        // @ts-ignore
        this._num = num;
        this._effect.setProperty('num', this._num);
    };
    MaterialSingleton.prototype.setResolution = function (w, h) {
        this._resolution.x = w;
        this._resolution.y = h;
        this._effect.setProperty('resolution', this._resolution);
    };
    MaterialSingleton.instance = null;
    return MaterialSingleton;
}(Material));
exports.default = MaterialSingleton;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzaGFkZXJcXE1hdGVyaWFsU2luZ2xldG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGFBQWE7QUFDYixJQUFNLElBQUksR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0FBQ3RCLElBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO0FBQzlDLElBQU0sUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7QUFFdkM7SUFBK0MscUNBQVE7SUFFbkQ7ZUFDSSxrQkFBTSxLQUFLLENBQUM7SUFDaEIsQ0FBQztJQUVhLDZCQUFXLEdBQXpCLFVBQTBCLFVBQWlCO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDdEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFTyx3Q0FBWSxHQUFwQixVQUFxQixVQUFrQjtRQUNuQyxJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO1FBQ3JDLElBQUksR0FBRyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUM7UUFFM0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQ1QsR0FBRyxDQUFDLGNBQWMsRUFDbEIsR0FBRyxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMseUJBQXlCLEVBQ2xELEdB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LENBdEg4QyxRQUFRLEdBc0h0RDtrQkF0SG9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1pZ25vcmVcclxuY29uc3QgbWF0aCA9IGNjLnZtYXRoO1xyXG5jb25zdCByZW5kZXJFbmdpbmUgPSBjYy5yZW5kZXJlci5yZW5kZXJFbmdpbmU7XHJcbmNvbnN0IE1hdGVyaWFsID0gcmVuZGVyRW5naW5lLk1hdGVyaWFsO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0ZXJpYWxTaW5nbGV0b24gZXh0ZW5kcyBNYXRlcmlhbCB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTWF0ZXJpYWxTaW5nbGV0b24gPSBudWxsO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2Uoc2hhZGVyTmFtZTpzdHJpbmcpOiBNYXRlcmlhbFNpbmdsZXRvbiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTWF0ZXJpYWxTaW5nbGV0b24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5pbml0V2l0aE5hbWUoc2hhZGVyTmFtZSlcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRXaXRoTmFtZShzaGFkZXJOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgcmVuZGVyZXIgPSByZW5kZXJFbmdpbmUucmVuZGVyZXI7XHJcbiAgICAgICAgbGV0IGdmeCA9IHJlbmRlckVuZ2luZS5nZng7XHJcblxyXG4gICAgICAgIGxldCBwYXNzID0gbmV3IHJlbmRlcmVyLlBhc3Moc2hhZGVyTmFtZSk7XHJcbiAgICAgICAgcGFzcy5zZXREZXB0aChmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgIHBhc3Muc2V0Q3VsbE1vZGUoZ2Z4LkNVTExfTk9ORSk7XHJcbiAgICAgICAgcGFzcy5zZXRCbGVuZChcclxuICAgICAgICAgICAgZ2Z4LkJMRU5EX0ZVTkNfQURELFxyXG4gICAgICAgICAgICBnZnguQkxFTkRfU1JDX0FMUEhBLCBnZnguQkxFTkRfT05FX01JTlVTX1NSQ19BTFBIQSxcclxuICAgICAgICAgICAgZ2Z4LkJMRU5EX0ZVTkNfQURELFxyXG4gICAgICAgICAgICBnZnguQkxFTkRfU1JDX0FMUEhBLCBnZnguQkxFTkRfT05FX01JTlVTX1NSQ19BTFBIQVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCBtYWluVGVjaCA9IG5ldyByZW5kZXJlci5UZWNobmlxdWUoXHJcbiAgICAgICAgICAgIFsndHJhbnNwYXJlbnQnXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAndGV4dHVyZScsIHR5cGU6IHJlbmRlcmVyLlBBUkFNX1RFWFRVUkVfMkQgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ3BvcycsIHR5cGU6IHJlbmRlcmVyLlBBUkFNX0ZMT0FUMyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnc2l6ZScsIHR5cGU6IHJlbmRlcmVyLlBBUkFNX0ZMT0FUMiB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnaVRpbWUnLCB0eXBlOiByZW5kZXJlci5QQVJBTV9GTE9BVCB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnbnVtJywgdHlwZTogcmVuZGVyZXIuUEFSQU1fRkxPQVQgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ3Jlc29sdXRpb24nLCB0eXBlOiByZW5kZXJlci5QQVJBTV9GTE9BVDMgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW3Bhc3NdXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHRoaXMuX3RleHR1cmUgPSBudWxsO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICB0aGlzLl9wb3MgPSB7IHg6IDAuMCwgeTogMC4wLCB6OiAwLjAgfTtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgdGhpcy5fc2l6ZSA9IHsgeDogMC4wLCB5OiAwLjAgfTtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgdGhpcy5fdGltZSA9IDAuMDtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgdGhpcy5fbnVtID0gMC4wO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICB0aGlzLl9yZXNvbHV0aW9uID0gbWF0aC52ZWMzLmNyZWF0ZSgpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICB0aGlzLl9lZmZlY3QgPSB0aGlzLmVmZmVjdCA9IG5ldyByZW5kZXJlci5FZmZlY3QoXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIG1haW5UZWNoXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICdwb3MnOiB0aGlzLl9wb3MsXHJcbiAgICAgICAgICAgICAgICAnc2l6ZSc6IHRoaXMuX3NpemUsXHJcbiAgICAgICAgICAgICAgICAnaVRpbWUnOiB0aGlzLl90aW1lLFxyXG4gICAgICAgICAgICAgICAgJ251bSc6IHRoaXMuX251bSxcclxuICAgICAgICAgICAgICAgICdyZXNvbHV0aW9uJzogdGhpcy5fcmVzb2x1dGlvblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbXVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHRoaXMuX21haW5UZWNoID0gbWFpblRlY2g7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGV4dHVyZSh0ZXh0dXJlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RleHR1cmUgIT09IHRleHR1cmUpIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICB0aGlzLl90ZXh0dXJlID0gdGV4dHVyZTtcclxuICAgICAgICAgICAgdGhpcy5fdGV4dHVyZS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgLy8g5pyJ5pe25YCZ6ZyA6KaB5Y+N6L2seei9tFxyXG4gICAgICAgICAgICAgICAgZmxpcFk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8g5aSa57qn5riQ6L+b57q555CGXHJcbiAgICAgICAgICAgICAgICBtaXBtYXA6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2VmZmVjdC5zZXRQcm9wZXJ0eSgndGV4dHVyZScsIHRleHR1cmUuZ2V0SW1wbCgpKTtcclxuICAgICAgICAgICAgdGhpcy5fdGV4SWRzWyd0ZXh0dXJlJ10gPSB0ZXh0dXJlLmdldElkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFBvcyh4LCB5LCB6KSB7XHJcbiAgICAgICAgdGhpcy5fcG9zLnggPSB4O1xyXG4gICAgICAgIHRoaXMuX3Bvcy55ID0geTtcclxuICAgICAgICB0aGlzLl9wb3MueiA9IHo7XHJcbiAgICAgICAgdGhpcy5fZWZmZWN0LnNldFByb3BlcnR5KCdwb3MnLCB0aGlzLl9wb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNpemUoeCwgeSkge1xyXG4gICAgICAgIHRoaXMuX3NpemUueCA9IHg7XHJcbiAgICAgICAgdGhpcy5fc2l6ZS55ID0geTtcclxuICAgICAgICB0aGlzLl9lZmZlY3Quc2V0UHJvcGVydHkoJ3NpemUnLCB0aGlzLl9zaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lKHRpbWUpIHtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgdGhpcy5fdGltZSA9IHRpbWU7XHJcbiAgICAgICAgdGhpcy5fZWZmZWN0LnNldFByb3BlcnR5KCdpVGltZScsIHRoaXMuX3RpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE51bShudW0pIHtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgdGhpcy5fbnVtID0gbnVtO1xyXG4gICAgICAgIHRoaXMuX2VmZmVjdC5zZXRQcm9wZXJ0eSgnbnVtJywgdGhpcy5fbnVtKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRSZXNvbHV0aW9uKHcsIGgpIHtcclxuICAgICAgICB0aGlzLl9yZXNvbHV0aW9uLnggPSB3O1xyXG4gICAgICAgIHRoaXMuX3Jlc29sdXRpb24ueSA9IGg7XHJcbiAgICAgICAgdGhpcy5fZWZmZWN0LnNldFByb3BlcnR5KCdyZXNvbHV0aW9uJywgdGhpcy5fcmVzb2x1dGlvbik7XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Menu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '59162ZNomNLqJejBaIkOivx', 'Menu');
// Script/Menu.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgm = null;
        _this.author = "大掌教";
        _this.authorLb = null;
        _this.wechatLb = null;
        return _this;
        // 每帧更新函数
        // update(dt) {}
    }
    // 初始化
    Menu.prototype.onLoad = function () {
        cc.debug.setDisplayStats(true);
        cc.game.addPersistRootNode(this.node);
        cc.audioEngine.playMusic(this.bgm, true);
        this.authorLb.string = this.author;
        var lbAction = cc.repeatForever(cc.sequence(cc.scaleTo(1, 1.1), cc.scaleTo(1, 1.0), cc.scaleTo(1, 0.9), cc.scaleTo(1, 1.0)));
        var finished = cc.callFunc(function () {
            this.authorLb.node.runAction(lbAction);
            this.wechatLb.node.runAction(cc.spawn(cc.scaleTo(1, 1.0), cc.rotateBy(1, 720)));
        }, this);
        var lbSpawn = cc.spawn(cc.scaleTo(1.5, 1.0).easing(cc.easeSineIn()), cc.fadeTo(1.5, 255).easing(cc.easeSineIn()));
        var lbSequence = cc.sequence(lbSpawn, finished);
        this.authorLb.node.runAction(lbSequence);
    };
    Menu.prototype.goGlackhole = function () {
        cc.director.loadScene("Blackhole");
    };
    __decorate([
        property({
            type: cc.AudioClip,
            displayName: "背景音乐"
        })
    ], Menu.prototype, "bgm", void 0);
    __decorate([
        property({
            displayName: "作者",
            visible: false
        })
    ], Menu.prototype, "author", void 0);
    __decorate([
        property({
            type: cc.Label,
            displayName: "作者"
        })
    ], Menu.prototype, "authorLb", void 0);
    __decorate([
        property({
            type: cc.Label,
            displayName: "公众号ID"
        })
    ], Menu.prototype, "wechatLb", void 0);
    Menu = __decorate([
        ccclass
    ], Menu);
    return Menu;
}(cc.Component));
exports.default = Menu;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBeURDO1FBbkRHLFNBQUcsR0FBaUIsSUFBSSxDQUFDO1FBTXpCLFlBQU0sR0FBRyxLQUFLLENBQUM7UUFNZixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBTTFCLGNBQVEsR0FBYSxJQUFJLENBQUM7O1FBK0IxQixTQUFTO1FBQ1QsZ0JBQWdCO0lBQ3BCLENBQUM7SUE5QkcsTUFBTTtJQUNOLHFCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFbkMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FDM0IsRUFBRSxDQUFDLFFBQVEsQ0FDUCxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFDbEIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQ2xCLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUNsQixFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FDckIsQ0FDSixDQUFDO1FBQ0YsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNULElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xILElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsMEJBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUE5Q0Q7UUFKQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVM7WUFDbEIsV0FBVyxFQUFFLE1BQU07U0FDdEIsQ0FBQztxQ0FDdUI7SUFNekI7UUFKQyxRQUFRLENBQUM7WUFDTixXQUFXLEVBQUUsSUFBSTtZQUNqQixPQUFPLEVBQUUsS0FBSztTQUNqQixDQUFDO3dDQUNhO0lBTWY7UUFKQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUs7WUFDZCxXQUFXLEVBQUUsSUFBSTtTQUNwQixDQUFDOzBDQUN3QjtJQU0xQjtRQUpDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSztZQUNkLFdBQVcsRUFBRSxPQUFPO1NBQ3ZCLENBQUM7MENBQ3dCO0lBeEJULElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0F5RHhCO0lBQUQsV0FBQztDQXpERCxBQXlEQyxDQXpEaUMsRUFBRSxDQUFDLFNBQVMsR0F5RDdDO2tCQXpEb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICBkaXNwbGF5TmFtZTogXCLog4zmma/pn7PkuZBcIlxyXG4gICAgfSlcclxuICAgIGJnbTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIuS9nOiAhVwiLFxyXG4gICAgICAgIHZpc2libGU6IGZhbHNlXHJcbiAgICB9KVxyXG4gICAgYXV0aG9yID0gXCLlpKfmjozmlZlcIjtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIuS9nOiAhVwiXHJcbiAgICB9KVxyXG4gICAgYXV0aG9yTGI6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIuWFrOS8l+WPt0lEXCJcclxuICAgIH0pXHJcbiAgICB3ZWNoYXRMYjogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyDliJ3lp4vljJZcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5kZWJ1Zy5zZXREaXNwbGF5U3RhdHModHJ1ZSk7XHJcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ20sIHRydWUpO1xyXG4gICAgICAgIHRoaXMuYXV0aG9yTGIuc3RyaW5nID0gdGhpcy5hdXRob3I7XHJcblxyXG4gICAgICAgIGxldCBsYkFjdGlvbiA9IGNjLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygxLCAxLjEpLFxyXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygxLCAxLjApLFxyXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygxLCAwLjkpLFxyXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygxLCAxLjApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCBmaW5pc2hlZCA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHsgXHJcbiAgICAgICAgICAgIHRoaXMuYXV0aG9yTGIubm9kZS5ydW5BY3Rpb24obGJBY3Rpb24pXHJcbiAgICAgICAgICAgIHRoaXMud2VjaGF0TGIubm9kZS5ydW5BY3Rpb24oY2Muc3Bhd24oY2Muc2NhbGVUbygxLDEuMCksY2Mucm90YXRlQnkoMSw3MjApKSk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgbGV0IGxiU3Bhd24gPSBjYy5zcGF3bihjYy5zY2FsZVRvKDEuNSwgMS4wKS5lYXNpbmcoY2MuZWFzZVNpbmVJbigpKSwgY2MuZmFkZVRvKDEuNSwgMjU1KS5lYXNpbmcoY2MuZWFzZVNpbmVJbigpKSk7XHJcbiAgICAgICAgbGV0IGxiU2VxdWVuY2UgPSBjYy5zZXF1ZW5jZShsYlNwYXduLCBmaW5pc2hlZCwpO1xyXG4gICAgICAgIHRoaXMuYXV0aG9yTGIubm9kZS5ydW5BY3Rpb24obGJTZXF1ZW5jZSk7XHJcbiAgICB9XHJcbiAgICBnb0dsYWNraG9sZSgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJCbGFja2hvbGVcIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIOavj+W4p+abtOaWsOWHveaVsFxyXG4gICAgLy8gdXBkYXRlKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/WaterWaveEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a07cefNdFNDU7fkKWco4FFG', 'WaterWaveEffect');
// Script/WaterWaveEffect.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Feofox Game
// Author:Lerry
// https://github.com/fylz1125/ShaderDemos
var WaterWaveFrag_1 = require("./WaterWaveFrag");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WaterWaveEffect = /** @class */ (function (_super) {
    __extends(WaterWaveEffect, _super);
    function WaterWaveEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startTime = Date.now();
        _this.time = 0;
        _this.resolution = { x: 0.0, y: 0.0 };
        return _this;
    }
    WaterWaveEffect.prototype.onLoad = function () {
        this.resolution.x = (this.node.getContentSize().width);
        this.resolution.y = (this.node.getContentSize().height);
        this.useWater();
    };
    WaterWaveEffect.prototype.start = function () {
    };
    WaterWaveEffect.prototype.useWater = function () {
        if (this.program)
            return;
        this.program = new cc.GLProgram();
        if (cc.sys.isNative) {
            this.program.initWithString(WaterWaveFrag_1.default.waterwave_vert, WaterWaveFrag_1.default.waterwave_frag);
        }
        else {
            this.program.initWithVertexShaderByteArray(WaterWaveFrag_1.default.waterwave_vert, WaterWaveFrag_1.default.waterwave_frag);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
        }
        this.program.link();
        this.program.updateUniforms();
        this.program.use();
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
            glProgram_state.setUniformFloat("time", this.time);
            glProgram_state.setUniformVec2("resolution", this.resolution);
        }
        else {
            var res = this.program.getUniformLocationForName("resolution");
            var ba = this.program.getUniformLocationForName("time");
            this.program.setUniformLocationWith2f(res, this.resolution.x, this.resolution.y);
            this.program.setUniformLocationWith1f(ba, this.time);
        }
        this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program);
    };
    WaterWaveEffect.prototype.setProgram = function (node, program) {
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(program);
            node.setGLProgramState(glProgram_state);
        }
        else {
            node.setShaderProgram(program);
        }
    };
    WaterWaveEffect.prototype.update = function (dt) {
        this.time = (Date.now() - this.startTime) / 1000;
        if (this.program) {
            this.program.use();
            if (cc.sys.isNative) {
                var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
                glProgram_state.setUniformFloat("time", this.time);
            }
            else {
                var ct = this.program.getUniformLocationForName("time");
                this.program.setUniformLocationWith1f(ct, this.time);
            }
        }
    };
    WaterWaveEffect = __decorate([
        ccclass
    ], WaterWaveEffect);
    return WaterWaveEffect;
}(cc.Component));
exports.default = WaterWaveEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXYXRlcldhdmVFZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsY0FBYztBQUNkLGVBQWU7QUFDZiwwQ0FBMEM7QUFDMUMsaURBQXdDO0FBQ2xDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBb0VDO1FBakVHLGVBQVMsR0FBVSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDOUIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUVqQixnQkFBVSxHQUFDLEVBQUUsQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUM7O0lBOEQvQixDQUFDO0lBNURHLGdDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxDQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUVwQixDQUFDO0lBRUQsK0JBQUssR0FBTDtJQUNBLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLHVCQUFTLENBQUMsY0FBYyxFQUFFLHVCQUFTLENBQUMs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SSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMvRSxlQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEQ7aUJBQU07Z0JBQ0gsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hEO1NBQ0o7SUFDTCxDQUFDO0lBbkVnQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBb0VuQztJQUFELHNCQUFDO0NBcEVELEFBb0VDLENBcEU0QyxFQUFFLENBQUMsU0FBUyxHQW9FeEQ7a0JBcEVvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRmVvZm94IEdhbWVcclxuLy8gQXV0aG9yOkxlcnJ5XHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9meWx6MTEyNS9TaGFkZXJEZW1vc1xyXG5pbXBvcnQgV2F0ZXJXYXZlIGZyb20gJy4vV2F0ZXJXYXZlRnJhZyc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYXRlcldhdmVFZmZlY3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByb2dyYW06IGNjLkdMUHJvZ3JhbTtcclxuICAgIHN0YXJ0VGltZTpudW1iZXIgPSBEYXRlLm5vdygpO1xyXG4gICAgdGltZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICByZXNvbHV0aW9uPXsgeDowLjAsIHk6MC4wfTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5yZXNvbHV0aW9uLnggPSAoIHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpLndpZHRoICk7XHJcbiAgICAgICAgdGhpcy5yZXNvbHV0aW9uLnkgPSAoIHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCApO1xyXG4gICAgICAgIHRoaXMudXNlV2F0ZXIoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH1cclxuXHJcbiAgICB1c2VXYXRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9ncmFtKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbmV3IGNjLkdMUHJvZ3JhbSgpO1xyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmluaXRXaXRoU3RyaW5nKFdhdGVyV2F2ZS53YXRlcndhdmVfdmVydCwgV2F0ZXJXYXZlLndhdGVyd2F2ZV9mcmFnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uaW5pdFdpdGhWZXJ0ZXhTaGFkZXJCeXRlQXJyYXkoV2F0ZXJXYXZlLndhdGVyd2F2ZV92ZXJ0LCBXYXRlcldhdmUud2F0ZXJ3YXZlX2ZyYWcpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX1BPU0lUSU9OLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1BPU0lUSU9OKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9DT0xPUiwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9DT0xPUik7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfVEVYX0NPT1JELCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1RFWF9DT09SRFMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb2dyYW0ubGluaygpO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbS51c2UoKTtcclxuXHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtRmxvYXQoXCJ0aW1lXCIsIHRoaXMudGltZSk7XHJcbiAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtVmVjMiggXCJyZXNvbHV0aW9uXCIsIHRoaXMucmVzb2x1dGlvbiApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSB0aGlzLnByb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZSggXCJyZXNvbHV0aW9uXCIgKTtcclxuICAgICAgICAgICAgbGV0IGJhID0gdGhpcy5wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoXCJ0aW1lXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDJmKCByZXMsIHRoaXMucmVzb2x1dGlvbi54LHRoaXMucmVzb2x1dGlvbi55ICk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMWYoYmEsIHRoaXMudGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0UHJvZ3JhbSh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuX3NnTm9kZSwgdGhpcy5wcm9ncmFtKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9ncmFtKG5vZGU6IGFueSwgcHJvZ3JhbTogYW55KSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgICAgICBub2RlLnNldEdMUHJvZ3JhbVN0YXRlKGdsUHJvZ3JhbV9zdGF0ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbm9kZS5zZXRTaGFkZXJQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLnRpbWUgPSAoRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lKSAvIDEwMDA7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvZ3JhbSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0udXNlKCk7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0odGhpcy5wcm9ncmFtKTtcclxuICAgICAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtRmxvYXQoXCJ0aW1lXCIsIHRoaXMudGltZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3QgPSB0aGlzLnByb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZShcInRpbWVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmKGN0LCB0aGlzLnRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/shader/ShaderFSH.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '29b03mm3atFILcbvdSJf3v0', 'ShaderFSH');
// Script/shader/ShaderFSH.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MVP = "\nuniform mat4 viewProj;\nuniform mat4 model;\nattribute vec3 a_position;\nattribute vec2 a_uv0;\nvarying vec2 uv0;\nvoid main () {\n    mat4 mvp;\n    mvp = viewProj * model;\n    vec4 pos = mvp * vec4(a_position, 1);\n    gl_Position = pos;\n    uv0 = a_uv0;\n}\n";
var ShaderFSH = [
    {
        name: "GrayScaling",
        vert: MVP,
        defines: [],
        frag: "\nuniform sampler2D texture;\nuniform vec4 color;\nvarying vec2 uv0;\nvoid main () {\n    vec4 c = color * texture2D(texture, uv0);\n    float gray = dot(c.rgb, vec3(0.299 * 0.5, 0.587 * 0.5, 0.114 * 0.5));\n    gl_FragColor = vec4(gray, gray, gray, c.a * 0.5);\n}\n"
    },
    {
        name: "WaterWave",
        vert: MVP,
        defines: [],
        frag: "\n#define F cos(x-y)*cos(y),sin(x+y)*sin(y)\n\nuniform sampler2D texture;\nuniform float iTime;\nuniform vec3 resolution;\nvarying vec2 uv0;\n\nvec2 s(vec2 p)\n{\n    float d=iTime*0.2,x=8.*(p.x+d),y=8.*(p.y+d);\n    return vec2(F);\n}\nvoid mainImage( out vec4 fragColor, in vec2 fragCoord )\n{\n    // \u6362\u6210resolution\n    vec2 rs = resolution.xy;\n    // \u6362\u6210\u7EB9\u7406\u5750\u6807 uv0\n    vec2 uv = uv0.xy;\n    vec2 q = uv+2./resolution.x*(s(uv)-s(uv+rs));\n    //\u53CD\u8F6Cy\n    // q.y=1.-q.y;\n    fragColor = texture2D(texture,q);\n}\nvoid main()\n{\n    mainImage(gl_FragColor, gl_FragCoord.xy);\n}\n"
    },
    {
        name: "StartLighting",
        vert: MVP,
        defines: [],
        frag: "\nuniform float iTime;\nuniform vec3 resolution;\nvarying vec2 uv0;\n\nvec2 hash(in vec2 p)\n{\n  p=vec2(dot(p,vec2(127.1,311.7)),\n  dot(p,vec2(269.5,183.3)));\n  \n  return-1.+2.*fract(sin(p)*43758.5453123);\n}\n\nfloat noise(in vec2 p)\n{\n  const float K1=.366025404;\n  const float K2=.211324865;\n  \n  vec2 i=floor(p+(p.x+p.y)*K1);\n  \n  vec2 a=p-i+(i.x+i.y)*K2;\n  vec2 o=step(a.yx,a.xy);\n  vec2 b=a-o+K2;\n  vec2 c=a-1.+2.*K2;\n  \n  vec3 h=max(.5-vec3(dot(a,a),dot(b,b),dot(c,c)),.0);\n  \n  vec3 n=h*h*h*h*vec3(dot(a,hash(i+.0)),\n  dot(b,hash(i+o)),\n  dot(c,hash(i+1.)));\n  \n  return dot(n,vec3(70.));\n}\n\nfloat fbm(in vec2 p,float time)\n{\n  float c=cos(time/sqrt(3.));\n  float d=noise(p);\n  d+=.5*noise(p+vec2(+c,+0.));\n  d+=.25*noise(p+vec2(+0.,+c));\n  d+=.125*noise(p+vec2(-c,+0.));\n  d+=.0625*noise(p+vec2(+0.,-c));\n  d/=(1.+.5+.25+.125+.0625);\n  return.5+.5*d;\n}\n\nvec2 toPolar(in vec2 p)\n{\n  float r=length(p);\n  float a=atan(p.y,p.x);\n  return vec2(r,a);\n}\n\nvec2 toRect(in vec2 p)\n{\n  float x=p.x*cos(p.y);\n  float y=p.x*sin(p.y);\n  return vec2(x,y);\n}\n\n\n\nvec3 electric(in vec2 uv)\n{\n  const float thickness=.25;\n  const float haze=2.5;\n  const float size=.075;\n  const int count=3;\n  \n  vec2 p=uv;\n  \n  vec2 pp=toPolar(p);\n  pp.y+=.2*p.x;\n  p=toRect(pp);\n  \n  vec3 col=vec3(0.);\n  \n  float a1=smoothstep(.05,1.,length(p-vec2(-.6,0.)));\n  float a2=smoothstep(.05,1.,length(p-vec2(.6,0.)));\n  float s1=1./(a1+.1)*1.1;\n  float s2=1./(a2+.1)*1.1;\n  \n  float e1=1.6+.4*sin(iTime*sqrt(2.));\n  float e2=e1;\n  \n  for(int i=0;i<count;++i)\n  {\n    float fi=float(i);\n    float time=iTime+fi;\n    float fe1=(pow(fi+1.,.2))*e1;\n    float fe2=fe1;\n    vec2 o1=1.5*time*vec2(0,-1);\n    vec2 o2=o1;\n    float d1=abs((p.y*haze)*thickness/(p.y-fe1*fbm(p+o1,time*.11)*a1))*s1;\n    float d2=abs((p.y*haze)*thickness/(p.y-fe2*fbm(p+o2,time*.09)*a2))*s2;\n    col+=d1*size*vec3(.1,.8,2.);\n    col+=d2*size*vec3(2.,.1,.8);\n  }\n  \n  col/=float(count-1);\n  return col;\n}\n\nvoid mainImage(out vec4 fragColor,in vec2 fragCoord)\n{\n  vec2 uv=uv0.xy;\n  uv.x=2.*uv.x-1.;\n  uv.y=1.-2.*uv.y;\n  uv.x*=resolution.x/resolution.y;\n\n  vec3 col=electric(uv*2.);\n\n  fragColor=vec4(col,1.);\n}\nvoid main()\n{\n    mainImage(gl_FragColor, gl_FragCoord.xy);\n}\n        "
    },
    {
        name: "Blackhole",
        vert: MVP,
        defines: [],
        frag: "\nuniform vec3 resolution;\nvarying vec2 uv0;\n#define f(a) exp(-10.*pow(length(U-.52*cos(a+vec2(0.0,33.0))), 2.))\n\nvoid mainImage(out vec4 fragColor, in vec2 fragCoord)\n{\n    vec2 rs = resolution.xy;\n    vec2 U = (2.*uv0*rs-rs)/rs.y;\n    // \u7FFB\u8F6CY\n    U.y=-U.y;\n    \n    fragColor = (.5-.5*cos(min(6.*length(U),6.3)))*(.7*vec4(1.,.25,0.0,.0)\n    +(f(.65)+f(1.6)+f(2.8))*vec4(.8,.8,.5,0.))\n    +vec4(vec3(.0),1.);//\u9ED1\u8272\u80CC\u666F\n}\nvoid main()\n{\n    mainImage(gl_FragColor, gl_FragCoord.xy);\n}\n    "
    }
];
cc.game.once(cc.game.EVENT_ENGINE_INITED, function () {
    ShaderFSH.forEach(function (val) {
        // shader模板定义 名字，顶点着色器，片段着色器，宏定义列表，引擎初始化完成即定义
        // @ts-ignore
        cc.renderer._forward._programLib.define(val.name, val.vert, val.frag, val.defines || []);
    });
});
exports.default = ShaderFSH;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzaGFkZXJcXFNoYWRlckZTSC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sR0FBRyxHQUFHLDJRQWFYLENBQUM7QUFDRixJQUFNLFNBQVMsR0FBRztJQUNkO1FBQ0ksSUFBSSxFQUFFLGFBQWE7UUFDbkIsSUFBSSxFQUFFLEdBQUc7UUFDVCxPQUFPLEVBQUUsRUFBRTtRQUNYLElBQUksRUFBRSw0UUFTYjtLQUNJO0lBRUQ7UUFDSSxJQUFJLEVBQUUsV0FBVztRQUNqQixJQUFJLEVBQUUsR0FBRztRQUNULE9BQU8sRUFBRSxFQUFFO1FBQ1gsSUFBSSxFQUFFLHduQkE0QmI7S0FDSTtJQUNEO1FBQ0ksSUFBSSxFQUFFLGVBQWU7UUFDckIsSUFBSSxFQUFFLEdBQUc7UUFDVCxPQUFPLEVBQUUsRUFBRTtRQUNYLElBQUksRUFBRSw2eEVBc0hMO0tBQ047SUFDRDtRQUNFLElBQUksRUFBRSxXQUFXO1FBQ2pCLElBQUksRUFBRSxHQUFHO1FBQ1QsT0FBTyxFQUFFLEVBQUU7UUFDWCxJQUFJLEVBQUUsc2hCQW9CTDtLQUNGO0NBQ0YsQ0FBQztBQUdGLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUU7SUFDdEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7UUFDbEIsNkNBQTZDO1FBQzdDLGFBQWE7UUFDYixFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUM7SUFDN0YsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQztBQUVILGtCQUFlLFNBQVMsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1WUCA9IGBcclxudW5pZm9ybSBtYXQ0IHZpZXdQcm9qO1xyXG51bmlmb3JtIG1hdDQgbW9kZWw7XHJcbmF0dHJpYnV0ZSB2ZWMzIGFfcG9zaXRpb247XHJcbmF0dHJpYnV0ZSB2ZWMyIGFfdXYwO1xyXG52YXJ5aW5nIHZlYzIgdXYwO1xyXG52b2lkIG1haW4gKCkge1xyXG4gICAgbWF0NCBtdnA7XHJcbiAgICBtdnAgPSB2aWV3UHJvaiAqIG1vZGVsO1xyXG4gICAgdmVjNCBwb3MgPSBtdnAgKiB2ZWM0KGFfcG9zaXRpb24sIDEpO1xyXG4gICAgZ2xfUG9zaXRpb24gPSBwb3M7XHJcbiAgICB1djAgPSBhX3V2MDtcclxufVxyXG5gO1xyXG5jb25zdCBTaGFkZXJGU0ggPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJHcmF5U2NhbGluZ1wiLC8v54Gw5bqm5Zu+XHJcbiAgICAgICAgdmVydDogTVZQLFxyXG4gICAgICAgIGRlZmluZXM6IFtdLFxyXG4gICAgICAgIGZyYWc6IGBcclxudW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTtcclxudW5pZm9ybSB2ZWM0IGNvbG9yO1xyXG52YXJ5aW5nIHZlYzIgdXYwO1xyXG52b2lkIG1haW4gKCkge1xyXG4gICAgdmVjNCBjID0gY29sb3IgKiB0ZXh0dXJlMkQodGV4dHVyZSwgdXYwKTtcclxuICAgIGZsb2F0IGdyYXkgPSBkb3QoYy5yZ2IsIHZlYzMoMC4yOTkgKiAwLjUsIDAuNTg3ICogMC41LCAwLjExNCAqIDAuNSkpO1xyXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChncmF5LCBncmF5LCBncmF5LCBjLmEgKiAwLjUpO1xyXG59XHJcbmBcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiV2F0ZXJXYXZlXCIsLy/msLTms6JcclxuICAgICAgICB2ZXJ0OiBNVlAsXHJcbiAgICAgICAgZGVmaW5lczogW10sXHJcbiAgICAgICAgZnJhZzogYFxyXG4jZGVmaW5lIEYgY29zKHgteSkqY29zKHkpLHNpbih4K3kpKnNpbih5KVxyXG5cclxudW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTtcclxudW5pZm9ybSBmbG9hdCBpVGltZTtcclxudW5pZm9ybSB2ZWMzIHJlc29sdXRpb247XHJcbnZhcnlpbmcgdmVjMiB1djA7XHJcblxyXG52ZWMyIHModmVjMiBwKVxyXG57XHJcbiAgICBmbG9hdCBkPWlUaW1lKjAuMix4PTguKihwLngrZCkseT04LioocC55K2QpO1xyXG4gICAgcmV0dXJuIHZlYzIoRik7XHJcbn1cclxudm9pZCBtYWluSW1hZ2UoIG91dCB2ZWM0IGZyYWdDb2xvciwgaW4gdmVjMiBmcmFnQ29vcmQgKVxyXG57XHJcbiAgICAvLyDmjaLmiJByZXNvbHV0aW9uXHJcbiAgICB2ZWMyIHJzID0gcmVzb2x1dGlvbi54eTtcclxuICAgIC8vIOaNouaIkOe6ueeQhuWdkOaghyB1djBcclxuICAgIHZlYzIgdXYgPSB1djAueHk7XHJcbiAgICB2ZWMyIHEgPSB1disyLi9yZXNvbHV0aW9uLngqKHModXYpLXModXYrcnMpKTtcclxuICAgIC8v5Y+N6L2seVxyXG4gICAgLy8gcS55PTEuLXEueTtcclxuICAgIGZyYWdDb2xvciA9IHRleHR1cmUyRCh0ZXh0dXJlLHEpO1xyXG59XHJcbnZvaWQgbWFpbigpXHJcbntcclxuICAgIG1haW5JbWFnZShnbF9GcmFnQ29sb3IsIGdsX0ZyYWdDb29yZC54eSk7XHJcbn1cclxuYFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIlN0YXJ0TGlnaHRpbmdcIiwvL+WwgemdoueahOmXqueUtVxyXG4gICAgICAgIHZlcnQ6IE1WUCxcclxuICAgICAgICBkZWZpbmVzOiBbXSxcclxuICAgICAgICBmcmFnOiBgXHJcbnVuaWZvcm0gZmxvYXQgaVRpbWU7XHJcbnVuaWZvcm0gdmVjMyByZXNvbHV0aW9uO1xyXG52YXJ5aW5nIHZlYzIgdXYwO1xyXG5cclxudmVjMiBoYXNoKGluIHZlYzIgcClcclxue1xyXG4gIHA9dmVjMihkb3QocCx2ZWMyKDEyNy4xLDMxMS43KSksXHJcbiAgZG90KHAsdmVjMigyNjkuNSwxODMuMykpKTtcclxuICBcclxuICByZXR1cm4tMS4rMi4qZnJhY3Qoc2luKHApKjQzNzU4LjU0NTMxMjMpO1xyXG59XHJcblxyXG5mbG9hdCBub2lzZShpbiB2ZWMyIHApXHJcbntcclxuICBjb25zdCBmbG9hdCBLMT0uMzY2MDI1NDA0O1xyXG4gIGNvbnN0IGZsb2F0IEsyPS4yMTEzMjQ4NjU7XHJcbiAgXHJcbiAgdmVjMiBpPWZsb29yKHArKHAueCtwLnkpKksxKTtcclxuICBcclxuICB2ZWMyIGE9cC1pKyhpLngraS55KSpLMjtcclxuICB2ZWMyIG89c3RlcChhLnl4LGEueHkpO1xyXG4gIHZlYzIgYj1hLW8rSzI7XHJcbiAgdmVjMiBjPWEtMS4rMi4qSzI7XHJcbiAgXHJcbiAgdmVjMyBoPW1heCguNS12ZWMzKGRvdChhLGEpLGRvdChiLGIpLGRvdChjLGMpKSwuMCk7XHJcbiAgXHJcbiAgdmVjMyBuPWgqaCpoKmgqdmVjMyhkb3QoYSxoYXNoKGkrLjApKSxcclxuICBkb3QoYixoYXNoKGkrbykpLFxyXG4gIGRvdChjLGhhc2goaSsxLikpKTtcclxuICBcclxuICByZXR1cm4gZG90KG4sdmVjMyg3MC4pKTtcclxufVxyXG5cclxuZmxvYXQgZmJtKGluIHZlYzIgcCxmbG9hdCB0aW1lKVxyXG57XHJcbiAgZmxvYXQgYz1jb3ModGltZS9zcXJ0KDMuKSk7XHJcbiAgZmxvYXQgZD1ub2lzZShwKTtcclxuICBkKz0uNSpub2lzZShwK3ZlYzIoK2MsKzAuKSk7XHJcbiAgZCs9LjI1Km5vaXNlKHArdmVjMigrMC4sK2MpKTtcclxuICBkKz0uMTI1Km5vaXNlKHArdmVjMigtYywrMC4pKTtcclxuICBkKz0uMDYyNSpub2lzZShwK3ZlYzIoKzAuLC1jKSk7XHJcbiAgZC89KDEuKy41Ky4yNSsuMTI1Ky4wNjI1KTtcclxuICByZXR1cm4uNSsuNSpkO1xyXG59XHJcblxyXG52ZWMyIHRvUG9sYXIoaW4gdmVjMiBwKVxyXG57XHJcbiAgZmxvYXQgcj1sZW5ndGgocCk7XHJcbiAgZmxvYXQgYT1hdGFuKHAueSxwLngpO1xyXG4gIHJldHVybiB2ZWMyKHIsYSk7XHJcbn1cclxuXHJcbnZlYzIgdG9SZWN0KGluIHZlYzIgcClcclxue1xyXG4gIGZsb2F0IHg9cC54KmNvcyhwLnkpO1xyXG4gIGZsb2F0IHk9cC54KnNpbihwLnkpO1xyXG4gIHJldHVybiB2ZWMyKHgseSk7XHJcbn1cclxuXHJcblxyXG5cclxudmVjMyBlbGVjdHJpYyhpbiB2ZWMyIHV2KVxyXG57XHJcbiAgY29uc3QgZmxvYXQgdGhpY2tuZXNzPS4yNTtcclxuICBjb25zdCBmbG9hdCBoYXplPTIuNTtcclxuICBjb25zdCBmbG9hdCBzaXplPS4wNzU7XHJcbiAgY29uc3QgaW50IGNvdW50PTM7XHJcbiAgXHJcbiAgdmVjMiBwPXV2O1xyXG4gIFxyXG4gIHZlYzIgcHA9dG9Qb2xhcihwKTtcclxuICBwcC55Kz0uMipwLng7XHJcbiAgcD10b1JlY3QocHApO1xyXG4gIFxyXG4gIHZlYzMgY29sPXZlYzMoMC4pO1xyXG4gIFxyXG4gIGZsb2F0IGExPXNtb290aHN0ZXAoLjA1LDEuLGxlbmd0aChwLXZlYzIoLS42LDAuKSkpO1xyXG4gIGZsb2F0IGEyPXNtb290aHN0ZXAoLjA1LDEuLGxlbmd0aChwLXZlYzIoLjYsMC4pKSk7XHJcbiAgZmxvYXQgczE9MS4vKGExKy4xKSoxLjE7XHJcbiAgZmxvYXQgczI9MS4vKGEyKy4xKSoxLjE7XHJcbiAgXHJcbiAgZmxvYXQgZTE9MS42Ky40KnNpbihpVGltZSpzcXJ0KDIuKSk7XHJcbiAgZmxvYXQgZTI9ZTE7XHJcbiAgXHJcbiAgZm9yKGludCBpPTA7aTxjb3VudDsrK2kpXHJcbiAge1xyXG4gICAgZmxvYXQgZmk9ZmxvYXQoaSk7XHJcbiAgICBmbG9hdCB0aW1lPWlUaW1lK2ZpO1xyXG4gICAgZmxvYXQgZmUxPShwb3coZmkrMS4sLjIpKSplMTtcclxuICAgIGZsb2F0IGZlMj1mZTE7XHJcbiAgICB2ZWMyIG8xPTEuNSp0aW1lKnZlYzIoMCwtMSk7XHJcbiAgICB2ZWMyIG8yPW8xO1xyXG4gICAgZmxvYXQgZDE9YWJzKChwLnkqaGF6ZSkqdGhpY2tuZXNzLyhwLnktZmUxKmZibShwK28xLHRpbWUqLjExKSphMSkpKnMxO1xyXG4gICAgZmxvYXQgZDI9YWJzKChwLnkqaGF6ZSkqdGhpY2tuZXNzLyhwLnktZmUyKmZibShwK28yLHRpbWUqLjA5KSphMikpKnMyO1xyXG4gICAgY29sKz1kMSpzaXplKnZlYzMoLjEsLjgsMi4pO1xyXG4gICAgY29sKz1kMipzaXplKnZlYzMoMi4sLjEsLjgpO1xyXG4gIH1cclxuICBcclxuICBjb2wvPWZsb2F0KGNvdW50LTEpO1xyXG4gIHJldHVybiBjb2w7XHJcbn1cclxuXHJcbnZvaWQgbWFpbkltYWdlKG91dCB2ZWM0IGZyYWdDb2xvcixpbiB2ZWMyIGZyYWdDb29yZClcclxue1xyXG4gIHZlYzIgdXY9dXYwLnh5O1xyXG4gIHV2Lng9Mi4qdXYueC0xLjtcclxuICB1di55PTEuLTIuKnV2Lnk7XHJcbiAgdXYueCo9cmVzb2x1dGlvbi54L3Jlc29sdXRpb24ueTtcclxuXHJcbiAgdmVjMyBjb2w9ZWxlY3RyaWModXYqMi4pO1xyXG5cclxuICBmcmFnQ29sb3I9dmVjNChjb2wsMS4pO1xyXG59XHJcbnZvaWQgbWFpbigpXHJcbntcclxuICAgIG1haW5JbWFnZShnbF9GcmFnQ29sb3IsIGdsX0ZyYWdDb29yZC54eSk7XHJcbn1cclxuICAgICAgICBgXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkJsYWNraG9sZVwiLC8v6buR5rSeXHJcbiAgICB2ZXJ0OiBNVlAsXHJcbiAgICBkZWZpbmVzOiBbXSxcclxuICAgIGZyYWc6IGBcclxudW5pZm9ybSB2ZWMzIHJlc29sdXRpb247XHJcbnZhcnlpbmcgdmVjMiB1djA7XHJcbiNkZWZpbmUgZihhKSBleHAoLTEwLipwb3cobGVuZ3RoKFUtLjUyKmNvcyhhK3ZlYzIoMC4wLDMzLjApKSksIDIuKSlcclxuXHJcbnZvaWQgbWFpbkltYWdlKG91dCB2ZWM0IGZyYWdDb2xvciwgaW4gdmVjMiBmcmFnQ29vcmQpXHJcbntcclxuICAgIHZlYzIgcnMgPSByZXNvbHV0aW9uLnh5O1xyXG4gICAgdmVjMiBVID0gKDIuKnV2MCpycy1ycykvcnMueTtcclxuICAgIC8vIOe/u+i9rFlcclxuICAgIFUueT0tVS55O1xyXG4gICAgXHJcbiAgICBmcmFnQ29sb3IgPSAoLjUtLjUqY29zKG1pbig2LipsZW5ndGgoVSksNi4zKSkpKiguNyp2ZWM0KDEuLC4yNSwwLjAsLjApXHJcbiAgICArKGYoLjY1KStmKDEuNikrZigyLjgpKSp2ZWM0KC44LC44LC41LDAuKSlcclxuICAgICt2ZWM0KHZlYzMoLjApLDEuKTsvL+m7keiJsuiDjOaZr1xyXG59XHJcbnZvaWQgbWFpbigpXHJcbntcclxuICAgIG1haW5JbWFnZShnbF9GcmFnQ29sb3IsIGdsX0ZyYWdDb29yZC54eSk7XHJcbn1cclxuICAgIGBcclxuICB9XHJcbl07XHJcblxyXG5cclxuY2MuZ2FtZS5vbmNlKGNjLmdhbWUuRVZFTlRfRU5HSU5FX0lOSVRFRCwgZnVuY3Rpb24gKCkge1xyXG4gICAgU2hhZGVyRlNILmZvckVhY2goKHZhbCkgPT4ge1xyXG4gICAgICAgIC8vIHNoYWRlcuaooeadv+WumuS5iSDlkI3lrZfvvIzpobbngrnnnYDoibLlmajvvIzniYfmrrXnnYDoibLlmajvvIzlro/lrprkuYnliJfooajvvIzlvJXmk47liJ3lp4vljJblrozmiJDljbPlrprkuYlcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgY2MucmVuZGVyZXIuX2ZvcndhcmQuX3Byb2dyYW1MaWIuZGVmaW5lKHZhbC5uYW1lLCB2YWwudmVydCwgdmFsLmZyYWcsIHZhbC5kZWZpbmVzIHx8IFtdKTtcclxuICAgIH0pXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hhZGVyRlNIOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/shader/MaterialManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '164cfakMGRJPLW/2RrDe4fy', 'MaterialManager');
// Script/shader/MaterialManager.ts

"use strict";
// Author：lerry（大掌教）
// 详细教程请关注博客和微信公众号
// csdn：https://darkpalm.blog.csdn.net
// 微信公众号ID：darkpalm
// Q群：704391772
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShaderEffects = exports.ShaderType = void 0;
// import ShaderLab from "./ShaderLab";
var ShaderFSH_1 = require("./ShaderFSH");
var MaterialSingleton_1 = require("./MaterialSingleton");
/**
 * 定义材质类型
 */
var ShaderType;
(function (ShaderType) {
    // 系统自带
    ShaderType[ShaderType["Normal"] = -2] = "Normal";
    // 系统自带
    ShaderType[ShaderType["Gray"] = -1] = "Gray";
    // 自定义开始
    ShaderType[ShaderType["GrayScaling"] = 0] = "GrayScaling";
    ShaderType[ShaderType["WaterWave"] = 1] = "WaterWave";
    ShaderType[ShaderType["StartLighting"] = 2] = "StartLighting";
    ShaderType[ShaderType["Blackhole"] = 3] = "Blackhole";
})(ShaderType = exports.ShaderType || (exports.ShaderType = {}));
/**
 * 定义个中文的，看起来舒爽一点
 * 两个枚举要配套使用
 */
exports.ShaderEffects = cc.Enum({
    正常: -2,
    灰色: -1,
    灰度图: 0,
    水波: 1,
    闪电: 2,
    黑洞照片: 3
});
var MaterialManager = /** @class */ (function () {
    function MaterialManager() {
    }
    /**
     * 获取一个材质
     * @param sprite 精灵
     * @param shader shader类型
     */
    MaterialManager.getMaterial = function (sprite, shader) {
        if (cc.game.renderType === cc.game.RENDER_TYPE_CANVAS) {
            cc.warn("Shader not surpport for canvas");
            return;
        }
        if (!sprite || !sprite.spriteFrame) {
            return;
        }
        if (shader > ShaderType.Gray) {
            var name = ShaderType[shader];
            var lab = ShaderFSH_1.default[shader];
            if (!lab) {
                console.warn('Shader not defined', name);
                return;
            }
            cc.dynamicAtlasManager.enabled = false;
            var material = MaterialSingleton_1.default.getInstance(name);
            var texture = sprite.spriteFrame.getTexture();
            material.setTexture(texture);
            material.updateHash();
            var sp = sprite;
            sp._material = material;
            sp._renderData._material = material;
            sp._state = shader;
            return material;
        }
        else {
            // 系统自带normal和gray
            sprite.setState(shader + 2);
        }
    };
    return MaterialManager;
}());
exports.default = MaterialManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzaGFkZXJcXE1hdGVyaWFsTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQixzQ0FBc0M7QUFDdEMsbUJBQW1CO0FBQ25CLGVBQWU7OztBQUVmLHVDQUF1QztBQUN2Qyx5Q0FBb0M7QUFDcEMseURBQW9EO0FBQ3BEOztHQUVHO0FBQ0gsSUFBWSxVQVVYO0FBVkQsV0FBWSxVQUFVO0lBQ2xCLE9BQU87SUFDUCxnREFBVyxDQUFBO0lBQ1gsT0FBTztJQUNQLDRDQUFJLENBQUE7SUFDSixRQUFRO0lBQ1IseURBQVcsQ0FBQTtJQUNYLHFEQUFTLENBQUE7SUFDVCw2REFBYSxDQUFBO0lBQ2IscURBQVMsQ0FBQTtBQUNiLENBQUMsRUFWVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQVVyQjtBQUVEOzs7R0FHRztBQUNRLFFBQUEsYUFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDL0IsRUFBRSxFQUFDLENBQUMsQ0FBQztJQUNMLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDTixHQUFHLEVBQUUsQ0FBQztJQUNOLEVBQUUsRUFBRSxDQUFDO0lBQ0wsRUFBRSxFQUFFLENBQUM7SUFDTCxJQUFJLEVBQUMsQ0FBQztDQUNULENBQUMsQ0FBQTtBQUVGO0lBQUE7SUFxQ0EsQ0FBQztJQXBDRzs7OztPQUlHO0lBQ0ksMkJBQVcsR0FBbEIsVUFBbUIsTUFBaUIsRUFBRSxNQUFrQjtRQUNwRCxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDbkQsRUFBRSxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1lBQzFDLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO1lBQ2hDLE9BQU87U0FDVjtRQUNELElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUU7WUFDMUIsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlCLElBQUksR0FBRyxHQUFHLG1CQUFTLENBQUMsTUFBZ0IsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDekMsT0FBTzthQUNWO1lBQ0QsRUFBRSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDdkMsSUFBSSxRQUFRLEdBQUcsMkJBQWlCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25ELElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDOUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QixRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDdEIsSUFBSSxFQUFFLEdBQUcsTUFBYSxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBQ3hCLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztZQUNwQyxFQUFFLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNuQixPQUFPLFFBQVEsQ0FBQztTQUNuQjthQUNJO1lBQ0Qsa0JBQWtCO1lBQ2xCLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FyQ0EsQUFxQ0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEF1dGhvcu+8mmxlcnJ577yI5aSn5o6M5pWZ77yJXHJcbi8vIOivpue7huaVmeeoi+ivt+WFs+azqOWNmuWuouWSjOW+ruS/oeWFrOS8l+WPt1xyXG4vLyBjc2Ru77yaaHR0cHM6Ly9kYXJrcGFsbS5ibG9nLmNzZG4ubmV0XHJcbi8vIOW+ruS/oeWFrOS8l+WPt0lE77yaZGFya3BhbG1cclxuLy8gUee+pO+8mjcwNDM5MTc3MlxyXG5cclxuLy8gaW1wb3J0IFNoYWRlckxhYiBmcm9tIFwiLi9TaGFkZXJMYWJcIjtcclxuaW1wb3J0IFNoYWRlckZTSCBmcm9tIFwiLi9TaGFkZXJGU0hcIjtcclxuaW1wb3J0IE1hdGVyaWFsU2luZ2xldG9uIGZyb20gXCIuL01hdGVyaWFsU2luZ2xldG9uXCI7XHJcbi8qKlxyXG4gKiDlrprkuYnmnZDotKjnsbvlnotcclxuICovXHJcbmV4cG9ydCBlbnVtIFNoYWRlclR5cGUge1xyXG4gICAgLy8g57O757uf6Ieq5bimXHJcbiAgICBOb3JtYWwgPSAtMixcclxuICAgIC8vIOezu+e7n+iHquW4plxyXG4gICAgR3JheSxcclxuICAgIC8vIOiHquWumuS5ieW8gOWni1xyXG4gICAgR3JheVNjYWxpbmcsXHJcbiAgICBXYXRlcldhdmUsXHJcbiAgICBTdGFydExpZ2h0aW5nLFxyXG4gICAgQmxhY2tob2xlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlrprkuYnkuKrkuK3mlofnmoTvvIznnIvotbfmnaXoiJLniL3kuIDngrlcclxuICog5Lik5Liq5p6a5Li+6KaB6YWN5aWX5L2/55SoXHJcbiAqL1xyXG5leHBvcnQgbGV0IFNoYWRlckVmZmVjdHMgPSBjYy5FbnVtKHtcclxuICAgIOato+W4uDotMixcclxuICAgIOeBsOiJsjogLTEsXHJcbiAgICDngbDluqblm746IDAsXHJcbiAgICDmsLTms6I6IDEsXHJcbiAgICDpl6rnlLU6IDIsXHJcbiAgICDpu5HmtJ7nhafniYc6M1xyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0ZXJpYWxNYW5hZ2VyIHtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5LiA5Liq5p2Q6LSoXHJcbiAgICAgKiBAcGFyYW0gc3ByaXRlIOeyvueBtSBcclxuICAgICAqIEBwYXJhbSBzaGFkZXIgc2hhZGVy57G75Z6LXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRNYXRlcmlhbChzcHJpdGU6IGNjLlNwcml0ZSwgc2hhZGVyOiBTaGFkZXJUeXBlKTogTWF0ZXJpYWxTaW5nbGV0b24ge1xyXG4gICAgICAgIGlmIChjYy5nYW1lLnJlbmRlclR5cGUgPT09IGNjLmdhbWUuUkVOREVSX1RZUEVfQ0FOVkFTKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oXCJTaGFkZXIgbm90IHN1cnBwb3J0IGZvciBjYW52YXNcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzcHJpdGUgfHwgIXNwcml0ZS5zcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzaGFkZXIgPiBTaGFkZXJUeXBlLkdyYXkpIHtcclxuICAgICAgICAgICAgbGV0IG5hbWUgPSBTaGFkZXJUeXBlW3NoYWRlcl07XHJcbiAgICAgICAgICAgIGxldCBsYWIgPSBTaGFkZXJGU0hbc2hhZGVyIGFzIG51bWJlcl07XHJcbiAgICAgICAgICAgIGlmICghbGFiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1NoYWRlciBub3QgZGVmaW5lZCcsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLmR5bmFtaWNBdGxhc01hbmFnZXIuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgbWF0ZXJpYWwgPSBNYXRlcmlhbFNpbmdsZXRvbi5nZXRJbnN0YW5jZShuYW1lKTtcclxuICAgICAgICAgICAgbGV0IHRleHR1cmUgPSBzcHJpdGUuc3ByaXRlRnJhbWUuZ2V0VGV4dHVyZSgpO1xyXG4gICAgICAgICAgICBtYXRlcmlhbC5zZXRUZXh0dXJlKHRleHR1cmUpO1xyXG4gICAgICAgICAgICBtYXRlcmlhbC51cGRhdGVIYXNoKCk7XHJcbiAgICAgICAgICAgIGxldCBzcCA9IHNwcml0ZSBhcyBhbnk7XHJcbiAgICAgICAgICAgIHNwLl9tYXRlcmlhbCA9IG1hdGVyaWFsO1xyXG4gICAgICAgICAgICBzcC5fcmVuZGVyRGF0YS5fbWF0ZXJpYWwgPSBtYXRlcmlhbDtcclxuICAgICAgICAgICAgc3AuX3N0YXRlID0gc2hhZGVyO1xyXG4gICAgICAgICAgICByZXR1cm4gbWF0ZXJpYWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDns7vnu5/oh6rluKZub3JtYWzlkoxncmF5XHJcbiAgICAgICAgICAgIHNwcml0ZS5zZXRTdGF0ZShzaGFkZXIrMik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/TurnPageEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '56464QjcXtOhaQBU40mS6Ne', 'TurnPageEffect');
// Script/TurnPageEffect.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var TurnPageFrag_1 = require("./TurnPageFrag");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TurnPageEffect = /** @class */ (function (_super) {
    __extends(TurnPageEffect, _super);
    function TurnPageEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resolution = { x: 0.0, y: 0.0 };
        _this.mouse = { x: 0.0, y: 0.0 };
        return _this;
    }
    TurnPageEffect.prototype.onLoad = function () {
        this.resolution.x = (this.node.getContentSize().width);
        this.resolution.y = (this.node.getContentSize().height);
        this.mouse.x = 0.0;
        this.mouse.y = 0.0;
        var self = this;
        // 添加触摸事件包含鼠标事件
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            // 转化为node的局部坐标
            var touchPos = self.node.convertTouchToNodeSpaceAR(event.touch);
            self.mouse.x = touchPos.x;
            self.mouse.y = touchPos.y;
            self.changeLight();
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var touchPos = self.node.convertTouchToNodeSpaceAR(event.touch);
            self.mouse.x = touchPos.x;
            self.mouse.y = touchPos.y;
            self.changeLight();
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            // cc.log('touch end');
        }, this);
        this.useShader();
    };
    TurnPageEffect.prototype.useShader = function () {
        this.program = new cc.GLProgram();
        if (cc.sys.isNative) {
            this.program.initWithString(TurnPageFrag_1.default.turnpage_vert, TurnPageFrag_1.default.turnpage_frag);
        }
        else {
            this.program.initWithVertexShaderByteArray(TurnPageFrag_1.default.turnpage_vert, TurnPageFrag_1.default.turnpage_frag);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
        }
        this.program.link();
        this.program.updateUniforms();
        this.program.use();
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
            glProgram_state.setUniformVec2("resolution", this.resolution);
            glProgram_state.setUniformVec2("mouse", this.mouse);
        }
        else {
            var res = this.program.getUniformLocationForName("resolution");
            var ms = this.program.getUniformLocationForName("mouse");
            this.program.setUniformLocationWith2f(res, this.resolution.x, this.resolution.y);
            this.program.setUniformLocationWith2f(ms, this.mouse.x, this.mouse.y);
        }
        this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program);
    };
    TurnPageEffect.prototype.setProgram = function (node, program) {
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(program);
            node.setGLProgramState(glProgram_state);
        }
        else {
            node.setShaderProgram(program);
        }
    };
    TurnPageEffect.prototype.changeLight = function () {
        if (this.program) {
            this.program.use();
            if (cc.sys.isNative) {
                var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
                glProgram_state.setUniformVec2("resolution", this.resolution);
                glProgram_state.setUniformVec2("mouse", this.mouse);
            }
            else {
                var res = this.program.getUniformLocationForName("resolution");
                var ms = this.program.getUniformLocationForName("mouse");
                this.program.setUniformLocationWith2f(res, this.resolution.x, this.resolution.y);
                this.program.setUniformLocationWith2f(ms, this.mouse.x, this.mouse.y);
            }
        }
    };
    TurnPageEffect = __decorate([
        ccclass
    ], TurnPageEffect);
    return TurnPageEffect;
}(cc.Component));
exports.default = TurnPageEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUdXJuUGFnZUVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBMEM7QUFDcEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUF1RkM7UUFuRkcsZ0JBQVUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLFdBQUssR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDOztJQWtGL0IsQ0FBQztJQWhGRywrQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssQ0FBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ25CLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixlQUFlO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQVUsS0FBMEI7WUFDNUUsZUFBZTtZQUNmLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hFLElBQUks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LE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUM7YUFDekQ7aUJBQU07Z0JBQ0gsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBRSxZQUFZLENBQUUsQ0FBQztnQkFDakUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDekQsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUUsQ0FBQztnQkFDbEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4RTtTQUNKO0lBQ0wsQ0FBQztJQXRGZ0IsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQXVGbEM7SUFBRCxxQkFBQztDQXZGRCxBQXVGQyxDQXZGMkMsRUFBRSxDQUFDLFNBQVMsR0F1RnZEO2tCQXZGb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUdXJuUGFnZUZyYWcgZnJvbSAnLi9UdXJuUGFnZUZyYWcnO1xyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR1cm5QYWdlRWZmZWN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcm9ncmFtOiBjYy5HTFByb2dyYW07XHJcblxyXG4gICAgcmVzb2x1dGlvbiA9IHsgeDogMC4wLCB5OiAwLjAgfTtcclxuICAgIG1vdXNlID0geyB4OiAwLjAsIHk6IDAuMCB9O1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnJlc29sdXRpb24ueCA9ICggdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkud2lkdGggKTtcclxuICAgICAgICB0aGlzLnJlc29sdXRpb24ueSA9ICh0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMubW91c2UueCA9IDAuMDtcclxuICAgICAgICB0aGlzLm1vdXNlLnkgPSAwLjA7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIC8vIOa3u+WKoOinpuaRuOS6i+S7tuWMheWQq+m8oOagh+S6i+S7tlxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24gKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgICAgIC8vIOi9rOWMluS4um5vZGXnmoTlsYDpg6jlnZDmoIdcclxuICAgICAgICAgICAgbGV0IHRvdWNoUG9zID0gc2VsZi5ub2RlLmNvbnZlcnRUb3VjaFRvTm9kZVNwYWNlQVIoZXZlbnQudG91Y2gpO1xyXG4gICAgICAgICAgICBzZWxmLm1vdXNlLnggPSB0b3VjaFBvcy54O1xyXG4gICAgICAgICAgICBzZWxmLm1vdXNlLnkgPSB0b3VjaFBvcy55O1xyXG4gICAgICAgICAgICBzZWxmLmNoYW5nZUxpZ2h0KCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCBmdW5jdGlvbiAoZXZlbnQ6Y2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgICAgICBsZXQgdG91Y2hQb3MgPSBzZWxmLm5vZGUuY29udmVydFRvdWNoVG9Ob2RlU3BhY2VBUihldmVudC50b3VjaCk7XHJcbiAgICAgICAgICAgIHNlbGYubW91c2UueCA9IHRvdWNoUG9zLng7XHJcbiAgICAgICAgICAgIHNlbGYubW91c2UueSA9IHRvdWNoUG9zLnk7XHJcbiAgICAgICAgICAgIHNlbGYuY2hhbmdlTGlnaHQoKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgLy8gY2MubG9nKCd0b3VjaCBlbmQnKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMudXNlU2hhZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlU2hhZGVyKCkge1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBjYy5HTFByb2dyYW0oKTtcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5pbml0V2l0aFN0cmluZyhUdXJuUGFnZUZyYWcudHVybnBhZ2VfdmVydCwgVHVyblBhZ2VGcmFnLnR1cm5wYWdlX2ZyYWcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5pbml0V2l0aFZlcnRleFNoYWRlckJ5dGVBcnJheShUdXJuUGFnZUZyYWcudHVybnBhZ2VfdmVydCwgVHVyblBhZ2VGcmFnLnR1cm5wYWdlX2ZyYWcpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX1BPU0lUSU9OLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1BPU0lUSU9OKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9DT0xPUiwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9DT0xPUik7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfVEVYX0NPT1JELCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1RFWF9DT09SRFMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb2dyYW0ubGluaygpO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbS51c2UoKTtcclxuXHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtVmVjMihcInJlc29sdXRpb25cIiwgdGhpcy5yZXNvbHV0aW9uKTtcclxuICAgICAgICAgICAgZ2xQcm9ncmFtX3N0YXRlLnNldFVuaWZvcm1WZWMyKFwibW91c2VcIiwgdGhpcy5tb3VzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IHRoaXMucHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lKCBcInJlc29sdXRpb25cIiApO1xyXG4gICAgICAgICAgICBsZXQgbXMgPSB0aGlzLnByb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZShcIm1vdXNlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDJmKCByZXMsIHRoaXMucmVzb2x1dGlvbi54LHRoaXMucmVzb2x1dGlvbi55ICk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMmYobXMsIHRoaXMubW91c2UueCx0aGlzLm1vdXNlLnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFByb2dyYW0odGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLl9zZ05vZGUsIHRoaXMucHJvZ3JhbSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvZ3JhbShub2RlOiBhbnksIHByb2dyYW06IGFueSkge1xyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgdmFyIGdsUHJvZ3JhbV9zdGF0ZSA9IGNjLkdMUHJvZ3JhbVN0YXRlLmdldE9yQ3JlYXRlV2l0aEdMUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgICAgICAgICAgbm9kZS5zZXRHTFByb2dyYW1TdGF0ZShnbFByb2dyYW1fc3RhdGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0U2hhZGVyUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlTGlnaHQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvZ3JhbSkgeyBcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnVzZSgpO1xyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgICAgICAgICBnbFByb2dyYW1fc3RhdGUuc2V0VW5pZm9ybVZlYzIoXCJyZXNvbHV0aW9uXCIsIHRoaXMucmVzb2x1dGlvbik7XHJcbiAgICAgICAgICAgICAgICBnbFByb2dyYW1fc3RhdGUuc2V0VW5pZm9ybVZlYzIoIFwibW91c2VcIiwgdGhpcy5tb3VzZSApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IHRoaXMucHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lKCBcInJlc29sdXRpb25cIiApO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1zID0gdGhpcy5wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoXCJtb3VzZVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMmYoIHJlcywgdGhpcy5yZXNvbHV0aW9uLngsdGhpcy5yZXNvbHV0aW9uLnkgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMmYobXMsIHRoaXMubW91c2UueCx0aGlzLm1vdXNlLnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/CirclePortraitFrag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '19c76ks9PBILogq3fvEqG5h', 'CirclePortraitFrag');
// Script/CirclePortraitFrag.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Feofox Game
// Author:Lerry
// https://github.com/fylz1125/ShaderDemos
var CircleFrag = /** @class */ (function () {
    function CircleFrag() {
    }
    CircleFrag.circle_vert = "\n    attribute vec4 a_position;\n    attribute vec2 a_texCoord;\n    attribute vec4 a_color;\n    varying vec2 v_texCoord;\n    varying vec4 v_fragmentColor;\n    void main()\n    {\n        gl_Position = CC_PMatrix * a_position;\n        v_fragmentColor = a_color;\n        v_texCoord = a_texCoord;\n    }\n    ";
    CircleFrag.circle_frag = "\n    #ifdef GL_ES\n    precision mediump float;\n    #endif\n\n    varying vec4 v_fragmentColor;\n    varying vec2 v_texCoord;\n\n    uniform float u_edge;\n    uniform float u_offset; \n\n    void main()\n    {\n        float edge = u_edge;\n        float dis = 0.0;\n        vec2 texCoord = v_texCoord;\n        if ( texCoord.x < edge )\n        {\n            if ( texCoord.y < edge )\n            {\n                dis = distance( texCoord, vec2(edge, edge) );\n            }\n            if ( texCoord.y > (1.0 - edge) )\n            {\n                dis = distance( texCoord, vec2(edge, (1.0 - edge)) );\n            }\n        }\n        else if ( texCoord.x > (1.0 - edge) )\n        {\n            if ( texCoord.y < edge )\n            {\n                dis = distance( texCoord, vec2((1.0 - edge), edge ) );\n            }\n            if ( texCoord.y > (1.0 - edge) )\n            {\n                dis = distance( texCoord, vec2((1.0 - edge), (1.0 - edge) ) );\n            }\n        }\n  \n        if(dis > 0.001)\n        {\n            // \u5916\u5708\u6C9F\n            float gap = edge * 0.02;\n            if(dis <= edge - gap)\n            {\n                gl_FragColor = texture2D( CC_Texture0,texCoord);\n            }\n            else if(dis <= edge)\n            {\n                // \u5E73\u6ED1\u8FC7\u6E21\n                float t = smoothstep(0.,gap,edge-dis);\n                vec4 color = texture2D( CC_Texture0,texCoord);\n                gl_FragColor = vec4(color.rgb,t);\n            }else{\n                gl_FragColor = vec4(0.,0.,0.,0.);\n            }\n        }\n        else\n        {\n            gl_FragColor = texture2D( CC_Texture0,texCoord);\n        }\n    }\n\n    ";
    return CircleFrag;
}());
exports.default = CircleFrag;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDaXJjbGVQb3J0cmFpdEZyYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxjQUFjO0FBQ2QsZUFBZTtBQUNmLDBDQUEwQztBQUMxQztJQUFBO0lBOEVBLENBQUM7SUE3RVUsc0JBQVcsR0FBRywyVEFZcEIsQ0FBQztJQUNLLHNCQUFXLEdBQUcsNnJEQStEcEIsQ0FBQztJQUNOLGlCQUFDO0NBOUVELEFBOEVDLElBQUE7a0JBOUVvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRmVvZm94IEdhbWVcclxuLy8gQXV0aG9yOkxlcnJ5XHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9meWx6MTEyNS9TaGFkZXJEZW1vc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGVGcmFnIHtcclxuICAgIHN0YXRpYyBjaXJjbGVfdmVydCA9IGBcclxuICAgIGF0dHJpYnV0ZSB2ZWM0IGFfcG9zaXRpb247XHJcbiAgICBhdHRyaWJ1dGUgdmVjMiBhX3RleENvb3JkO1xyXG4gICAgYXR0cmlidXRlIHZlYzQgYV9jb2xvcjtcclxuICAgIHZhcnlpbmcgdmVjMiB2X3RleENvb3JkO1xyXG4gICAgdmFyeWluZyB2ZWM0IHZfZnJhZ21lbnRDb2xvcjtcclxuICAgIHZvaWQgbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgZ2xfUG9zaXRpb24gPSBDQ19QTWF0cml4ICogYV9wb3NpdGlvbjtcclxuICAgICAgICB2X2ZyYWdtZW50Q29sb3IgPSBhX2NvbG9yO1xyXG4gICAgICAgIHZfdGV4Q29vcmQgPSBhX3RleENvb3JkO1xyXG4gICAgfVxyXG4gICAgYDtcclxuICAgIHN0YXRpYyBjaXJjbGVfZnJhZyA9IGBcclxuICAgICNpZmRlZiBHTF9FU1xyXG4gICAgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcbiAgICAjZW5kaWZcclxuXHJcbiAgICB2YXJ5aW5nIHZlYzQgdl9mcmFnbWVudENvbG9yO1xyXG4gICAgdmFyeWluZyB2ZWMyIHZfdGV4Q29vcmQ7XHJcblxyXG4gICAgdW5pZm9ybSBmbG9hdCB1X2VkZ2U7XHJcbiAgICB1bmlmb3JtIGZsb2F0IHVfb2Zmc2V0OyBcclxuXHJcbiAgICB2b2lkIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIGZsb2F0IGVkZ2UgPSB1X2VkZ2U7XHJcbiAgICAgICAgZmxvYXQgZGlzID0gMC4wO1xyXG4gICAgICAgIHZlYzIgdGV4Q29vcmQgPSB2X3RleENvb3JkO1xyXG4gICAgICAgIGlmICggdGV4Q29vcmQueCA8IGVkZ2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0ZXhDb29yZC55IDwgZWRnZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRpcyA9IGRpc3RhbmNlKCB0ZXhDb29yZCwgdmVjMihlZGdlLCBlZGdlKSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICggdGV4Q29vcmQueSA+ICgxLjAgLSBlZGdlKSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRpcyA9IGRpc3RhbmNlKCB0ZXhDb29yZCwgdmVjMihlZGdlLCAoMS4wIC0gZWRnZSkpICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIHRleENvb3JkLnggPiAoMS4wIC0gZWRnZSkgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCB0ZXhDb29yZC55IDwgZWRnZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRpcyA9IGRpc3RhbmNlKCB0ZXhDb29yZCwgdmVjMigoMS4wIC0gZWRnZSksIGVkZ2UgKSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICggdGV4Q29vcmQueSA+ICgxLjAgLSBlZGdlKSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRpcyA9IGRpc3RhbmNlKCB0ZXhDb29yZCwgdmVjMigoMS4wIC0gZWRnZSksICgxLjAgLSBlZGdlKSApICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgaWYoZGlzID4gMC4wMDEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyDlpJblnIjmsp9cclxuICAgICAgICAgICAgZmxvYXQgZ2FwID0gZWRnZSAqIDAuMDI7XHJcbiAgICAgICAgICAgIGlmKGRpcyA8PSBlZGdlIC0gZ2FwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQoIENDX1RleHR1cmUwLHRleENvb3JkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGRpcyA8PSBlZGdlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyDlubPmu5Hov4fmuKFcclxuICAgICAgICAgICAgICAgIGZsb2F0IHQgPSBzbW9vdGhzdGVwKDAuLGdhcCxlZGdlLWRpcyk7XHJcbiAgICAgICAgICAgICAgICB2ZWM0IGNvbG9yID0gdGV4dHVyZTJEKCBDQ19UZXh0dXJlMCx0ZXhDb29yZCk7XHJcbiAgICAgICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGNvbG9yLnJnYix0KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KDAuLDAuLDAuLDAuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQoIENDX1RleHR1cmUwLHRleENvb3JkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYDtcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/CirclePortraitEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bf118HtGdBCe5k973WKlsID', 'CirclePortraitEffect');
// Script/CirclePortraitEffect.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var CirclePortraitFrag_1 = require("./CirclePortraitFrag");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cornerSlider = null;
        _this.edge = 0.05;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
        this.edge = this.cornerSlider.progress / 2;
        this.makeCircle();
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.makeCircle = function () {
        if (this.program)
            return;
        this.program = new cc.GLProgram();
        if (cc.sys.isNative) {
            this.program.initWithString(CirclePortraitFrag_1.default.circle_vert, CirclePortraitFrag_1.default.circle_frag);
        }
        else {
            this.program.initWithVertexShaderByteArray(CirclePortraitFrag_1.default.circle_vert, CirclePortraitFrag_1.default.circle_frag);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
        }
        this.program.link();
        this.program.updateUniforms();
        this.program.use();
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
            glProgram_state.setUniformFloat('u_edge', this.edge);
        }
        else {
            var ed = this.program.getUniformLocationForName("u_edge");
            this.program.setUniformLocationWith1f(ed, this.edge);
        }
        this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program);
    };
    NewClass.prototype.setProgram = function (node, program) {
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(program);
            node.setGLProgramState(glProgram_state);
        }
        else {
            node.setShaderProgram(program);
        }
    };
    NewClass.prototype.onSliderChange = function (slider, eventType) {
        this.edge = Number((slider.progress / 2).toFixed(2));
        if (!this.program)
            return;
        this.program.use();
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
            glProgram_state.setUniformFloat("u_edge", this.edge);
        }
        else {
            var ed = this.program.getUniformLocationForName("u_edge");
            this.program.setUniformLocationWith1f(ed, this.edge);
        }
    };
    __decorate([
        property(cc.Slider)
    ], NewClass.prototype, "cornerSlider", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDaXJjbGVQb3J0cmFpdEVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBa0Q7QUFFNUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFrRUM7UUEvREcsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFHL0IsVUFBSSxHQUFHLElBQUksQ0FBQzs7UUEyRFosaUJBQWlCO0lBQ3JCLENBQUM7SUExREcseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCw2QkFBVSxHQUFWO1FBQ0ksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLDRCQUFjLENBQUMsV0FBVyxFQUFFLDRCQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdkY7YUFBTTtZQUNILElBQUksQ0FBQyxPQUFPLENBQUMsNkJBQTZCLENBQUMsNEJBQWMsQ0FBQyxXQUFXLEVBQUUsNEJBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNuRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FB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b290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaXJjbGVQb3J0cmFpdCBmcm9tICcuL0NpcmNsZVBvcnRyYWl0RnJhZyc7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU2xpZGVyKVxyXG4gICAgY29ybmVyU2xpZGVyOiBjYy5TbGlkZXIgPSBudWxsO1xyXG5cclxuICAgIHByb2dyYW06IGNjLkdMUHJvZ3JhbTtcclxuICAgIGVkZ2UgPSAwLjA1O1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmVkZ2UgPSB0aGlzLmNvcm5lclNsaWRlci5wcm9ncmVzcyAvIDI7XHJcbiAgICAgICAgdGhpcy5tYWtlQ2lyY2xlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtYWtlQ2lyY2xlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb2dyYW0pIHJldHVybjsgICAgXHJcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbmV3IGNjLkdMUHJvZ3JhbSgpO1xyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmluaXRXaXRoU3RyaW5nKENpcmNsZVBvcnRyYWl0LmNpcmNsZV92ZXJ0LCBDaXJjbGVQb3J0cmFpdC5jaXJjbGVfZnJhZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmluaXRXaXRoVmVydGV4U2hhZGVyQnl0ZUFycmF5KENpcmNsZVBvcnRyYWl0LmNpcmNsZV92ZXJ0LCBDaXJjbGVQb3J0cmFpdC5jaXJjbGVfZnJhZyk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfUE9TSVRJT04sIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfUE9TSVRJT04pO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX0NPTE9SLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX0NPTE9SKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9URVhfQ09PUkQsIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfVEVYX0NPT1JEUyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvZ3JhbS5saW5rKCk7XHJcbiAgICAgICAgdGhpcy5wcm9ncmFtLnVwZGF0ZVVuaWZvcm1zKCk7XHJcbiAgICAgICAgdGhpcy5wcm9ncmFtLnVzZSgpO1xyXG5cclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0odGhpcy5wcm9ncmFtKTtcclxuICAgICAgICAgICAgZ2xQcm9ncmFtX3N0YXRlLnNldFVuaWZvcm1GbG9hdCgndV9lZGdlJywgdGhpcy5lZGdlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZWQgPSB0aGlzLnByb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZSggXCJ1X2VkZ2VcIiApO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmKGVkLCB0aGlzLmVkZ2UgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRQcm9ncmFtKHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5fc2dOb2RlLCB0aGlzLnByb2dyYW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFByb2dyYW0obm9kZTogYW55LCBwcm9ncmFtOiBhbnkpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0ocHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0R0xQcm9ncmFtU3RhdGUoZ2xQcm9ncmFtX3N0YXRlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub2RlLnNldFNoYWRlclByb2dyYW0ocHJvZ3JhbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2xpZGVyQ2hhbmdlKHNsaWRlcjogY2MuU2xpZGVyLCBldmVudFR5cGU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuZWRnZSA9IE51bWJlcigoc2xpZGVyLnByb2dyZXNzIC8gMikudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb2dyYW0pIHJldHVybjtcclxuICAgICAgICB0aGlzLnByb2dyYW0udXNlKCk7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtRmxvYXQoXCJ1X2VkZ2VcIiwgdGhpcy5lZGdlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZWQgPSB0aGlzLnByb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZShcInVfZWRnZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgxZihlZCwgdGhpcy5lZGdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/shader/MaterialComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1051azP8/dDh4jHNUC7U4lc', 'MaterialComponent');
// Script/shader/MaterialComponent.ts

"use strict";
// Author：lerry（大掌教）
// 详细教程请关注博客和微信公众号
// csdn：https://darkpalm.blog.csdn.net
// 微信公众号ID：darkpalm
// Q群：704391772
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var MaterialManager_1 = require("./MaterialManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, executeInEditMode = _a.executeInEditMode;
var NeedUpdate = [MaterialManager_1.ShaderType.WaterWave, MaterialManager_1.ShaderType.StartLighting];
var ShaderComponent = /** @class */ (function (_super) {
    __extends(ShaderComponent, _super);
    function ShaderComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._shader = MaterialManager_1.ShaderType.Normal;
        _this._time = 0;
        _this._startIndex = Date.now();
        return _this;
    }
    Object.defineProperty(ShaderComponent.prototype, "shader", {
        get: function () { return this._shader; },
        set: function (type) {
            this._shader = type;
            this._setMaterial();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShaderComponent.prototype, "material", {
        get: function () { return this._material; },
        enumerable: false,
        configurable: true
    });
    ShaderComponent.prototype.start = function () {
        this.getComponent(cc.Sprite).setState(cc.Sprite.State.NORMAL);
        this._setMaterial();
    };
    ShaderComponent.prototype.update = function (dt) {
        if (!this._material)
            return;
        this._updateShaderTime(dt);
    };
    ShaderComponent.prototype._setMaterial = function () {
        var shader = this.shader;
        var sprite = this.getComponent(cc.Sprite);
        var material = MaterialManager_1.default.getMaterial(sprite, shader);
        this._material = material;
        if (!material)
            return;
        switch (shader) {
            case MaterialManager_1.ShaderType.WaterWave:
            case MaterialManager_1.ShaderType.StartLighting:
            case MaterialManager_1.ShaderType.Blackhole:
                material.setResolution(this.node.width, this.node.height);
                break;
            default:
                break;
        }
    };
    /**
     * 随时间更新shader
     * @param dt 每帧时间
     */
    ShaderComponent.prototype._updateShaderTime = function (dt) {
        if (NeedUpdate.indexOf(this._shader) >= 0) {
            this._time = (Date.now() - this._startIndex) / 1000;
            this._material.setTime(this._time);
        }
    };
    __decorate([
        property({ type: cc.Enum(MaterialManager_1.ShaderType), visible: false })
    ], ShaderComponent.prototype, "_shader", void 0);
    __decorate([
        property({
            type: cc.Enum(MaterialManager_1.ShaderEffects),
            displayName: "着色器"
        })
    ], ShaderComponent.prototype, "shader", null);
    ShaderComponent = __decorate([
        ccclass,
        executeInEditMode,
        requireComponent(cc.Sprite)
    ], ShaderComponent);
    return ShaderComponent;
}(cc.Component));
exports.default = ShaderComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzaGFkZXJcXE1hdGVyaWFsQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLHNDQUFzQztBQUN0QyxtQkFBbUI7QUFDbkIsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2YscURBQStFO0FBRXpFLElBQUEsS0FBNkQsRUFBRSxDQUFDLFVBQVUsRUFBeEUsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsZ0JBQWdCLHNCQUFBLEVBQUUsaUJBQWlCLHVCQUFrQixDQUFDO0FBRWpGLElBQU0sVUFBVSxHQUFHLENBQUMsNEJBQVUsQ0FBQyxTQUFTLEVBQUMsNEJBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUtuRTtJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQTBEQztRQXZEVyxhQUFPLEdBQWUsNEJBQVUsQ0FBQyxNQUFNLENBQUM7UUFZeEMsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGlCQUFXLEdBQVUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDOztJQTBDNUMsQ0FBQztJQWpERyxzQkFBSSxtQ0FBTTthQUFWLGNBQWUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNyQyxVQUFXLElBQUk7WUFDWCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQzs7O09BSm9DO0lBU3JDLHNCQUFJLHFDQUFRO2FBQVosY0FBaUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFL0IsK0JBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFeEIsQ0FBQztJQUVTLGdDQUFNLEdBQWhCLFVBQWlCLEVBQUU7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU8sc0NBQVksR0FBcEI7UUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3pCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLElBQUksUUFBUSxHQUFHLHlCQUFlLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDdEIsUUFBUSxNQUFNLEVBQUU7WUFDWixLQUFLLDRCQUFVLENBQUMsU0FBUyxDQUFDO1lBQzFCLEtBQUssNEJBQVUsQ0FBQyxhQUFhLENBQUM7WUFDOUIsS0FBSyw0QkFBVSxDQUFDLFNBQVM7Z0JBQ3JCLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDMUQsTUFBTTtZQUNWO2dCQUNJLE1BQU07U0FDYjtJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSywyQ0FBaUIsR0FBekIsVUFBMEIsRUFBRTtRQUN4QixJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztJQXRERDtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLDRCQUFVLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7b0RBQ1I7SUFNaEQ7UUFKQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQywrQkFBYSxDQUFDO1lBQzVCLFdBQVcsRUFBQyxLQUFLO1NBQ3BCLENBQUM7aURBQ21DO0lBVHBCLGVBQWU7UUFIbkMsT0FBTztRQUNQLGlCQUFpQjtRQUNqQixnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO09BQ1AsZUFBZSxDQTBEbkM7SUFBRCxzQkFBQztDQTFERCxBQTBEQyxDQTFENEMsRUFBRSxDQUFDLFNBQVMsR0EwRHhEO2tCQTFEb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEF1dGhvcu+8mmxlcnJ577yI5aSn5o6M5pWZ77yJXHJcbi8vIOivpue7huaVmeeoi+ivt+WFs+azqOWNmuWuouWSjOW+ruS/oeWFrOS8l+WPt1xyXG4vLyBjc2Ru77yaaHR0cHM6Ly9kYXJrcGFsbS5ibG9nLmNzZG4ubmV0XHJcbi8vIOW+ruS/oeWFrOS8l+WPt0lE77yaZGFya3BhbG1cclxuLy8gUee+pO+8mjcwNDM5MTc3MlxyXG5cclxuaW1wb3J0IE1hdGVyaWFsU2luZ2xldG9uIGZyb20gXCIuL01hdGVyaWFsU2luZ2xldG9uXCI7XHJcbmltcG9ydCBNYXRlcmlhbE1hbmFnZXIsIHsgU2hhZGVyVHlwZSwgU2hhZGVyRWZmZWN0cyB9IGZyb20gXCIuL01hdGVyaWFsTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgcmVxdWlyZUNvbXBvbmVudCwgZXhlY3V0ZUluRWRpdE1vZGUgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5jb25zdCBOZWVkVXBkYXRlID0gW1NoYWRlclR5cGUuV2F0ZXJXYXZlLFNoYWRlclR5cGUuU3RhcnRMaWdodGluZ107XHJcblxyXG5AY2NjbGFzc1xyXG5AZXhlY3V0ZUluRWRpdE1vZGVcclxuQHJlcXVpcmVDb21wb25lbnQoY2MuU3ByaXRlKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFkZXJDb21wb25lbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oU2hhZGVyVHlwZSksIHZpc2libGU6IGZhbHNlIH0pXHJcbiAgICBwcml2YXRlIF9zaGFkZXI6IFNoYWRlclR5cGUgPSBTaGFkZXJUeXBlLk5vcm1hbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkVudW0oU2hhZGVyRWZmZWN0cyksXHJcbiAgICAgICAgZGlzcGxheU5hbWU6XCLnnYDoibLlmahcIlxyXG4gICAgfSlcclxuICAgIGdldCBzaGFkZXIoKSB7IHJldHVybiB0aGlzLl9zaGFkZXI7IH1cclxuICAgIHNldCBzaGFkZXIodHlwZSkge1xyXG4gICAgICAgIHRoaXMuX3NoYWRlciA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5fc2V0TWF0ZXJpYWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF90aW1lID0gMDtcclxuICAgIHByaXZhdGUgX3N0YXJ0SW5kZXg6bnVtYmVyID0gRGF0ZS5ub3coKTtcclxuICAgIHByaXZhdGUgIF9tYXRlcmlhbDogTWF0ZXJpYWxTaW5nbGV0b247XHJcbiAgICBnZXQgbWF0ZXJpYWwoKSB7IHJldHVybiB0aGlzLl9tYXRlcmlhbDsgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldFN0YXRlKGNjLlNwcml0ZS5TdGF0ZS5OT1JNQUwpO1xyXG4gICAgICAgIHRoaXMuX3NldE1hdGVyaWFsKCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fbWF0ZXJpYWwpIHJldHVybjtcclxuICAgICAgICB0aGlzLl91cGRhdGVTaGFkZXJUaW1lKGR0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zZXRNYXRlcmlhbCgpIHtcclxuICAgICAgICBsZXQgc2hhZGVyID0gdGhpcy5zaGFkZXI7XHJcbiAgICAgICAgbGV0IHNwcml0ZSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgbGV0IG1hdGVyaWFsID0gTWF0ZXJpYWxNYW5hZ2VyLmdldE1hdGVyaWFsKHNwcml0ZSwgc2hhZGVyKTtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbCA9IG1hdGVyaWFsO1xyXG4gICAgICAgIGlmICghbWF0ZXJpYWwpIHJldHVybjtcclxuICAgICAgICBzd2l0Y2ggKHNoYWRlcikge1xyXG4gICAgICAgICAgICBjYXNlIFNoYWRlclR5cGUuV2F0ZXJXYXZlOlxyXG4gICAgICAgICAgICBjYXNlIFNoYWRlclR5cGUuU3RhcnRMaWdodGluZzpcclxuICAgICAgICAgICAgY2FzZSBTaGFkZXJUeXBlLkJsYWNraG9sZTpcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLnNldFJlc29sdXRpb24odGhpcy5ub2RlLndpZHRoLCB0aGlzLm5vZGUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqP5pe26Ze05pu05pawc2hhZGVyXHJcbiAgICAgKiBAcGFyYW0gZHQg5q+P5bin5pe26Ze0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3VwZGF0ZVNoYWRlclRpbWUoZHQpIHtcclxuICAgICAgICBpZiAoTmVlZFVwZGF0ZS5pbmRleE9mKHRoaXMuX3NoYWRlcikgPj0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl90aW1lID0gKERhdGUubm93KCkgLSB0aGlzLl9zdGFydEluZGV4KSAvIDEwMDA7XHJcbiAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsLnNldFRpbWUodGhpcy5fdGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

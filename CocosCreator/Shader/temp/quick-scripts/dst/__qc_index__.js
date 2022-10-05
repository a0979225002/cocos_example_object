
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
require('./assets/Script/Avg_Black_White');
require('./assets/Script/Blur_Edge_Detail');
require('./assets/Script/CircleEffect2');
require('./assets/Script/CircleLight');
require('./assets/Script/Effect');
require('./assets/Script/Effect03');
require('./assets/Script/Effect04');
require('./assets/Script/Effect05');
require('./assets/Script/Effect06');
require('./assets/Script/Effect07');
require('./assets/Script/Effect08');
require('./assets/Script/Effect09');
require('./assets/Script/Effect10');
require('./assets/Script/Effect11');
require('./assets/Script/Effect12');
require('./assets/Script/Effect13');
require('./assets/Script/Effect14');
require('./assets/Script/Effect15');
require('./assets/Script/Effect16');
require('./assets/Script/Effect17');
require('./assets/Script/Effect18');
require('./assets/Script/Effect19');
require('./assets/Script/Effect20');
require('./assets/Script/EffectCommon');
require('./assets/Script/EffectForShaderToy');
require('./assets/Script/Effect_BlackWhite');
require('./assets/Script/Effect_Rotate');
require('./assets/Script/Emboss');
require('./assets/Script/Glass');
require('./assets/Script/Glass2');
require('./assets/Script/Gray');
require('./assets/Script/LightEffet');
require('./assets/Script/LightningBolt');
require('./assets/Script/Negative_Black_White');
require('./assets/Script/Negative_Image');
require('./assets/Script/Shadow_Black_White');
require('./assets/Script/UIManager');
require('./assets/Script/UI/EffectManager');
require('./assets/Script/Wave_H');
require('./assets/Script/Wave_V');
require('./assets/Script/Wave_VH');
require('./assets/Shaders/ccShader_Avg_Black_White_Frag');
require('./assets/Shaders/ccShader_Blur_Edge_Detail_Frag');
require('./assets/Shaders/ccShader_Circle_Effect2_Frag');
require('./assets/Shaders/ccShader_Circle_Light_Frag');
require('./assets/Shaders/ccShader_Default_Vert');
require('./assets/Shaders/ccShader_Default_Vert_noMVP');
require('./assets/Shaders/ccShader_Effect03_Frag');
require('./assets/Shaders/ccShader_Effect04_Frag');
require('./assets/Shaders/ccShader_Effect05_Frag');
require('./assets/Shaders/ccShader_Effect06_Frag');
require('./assets/Shaders/ccShader_Effect07_Frag');
require('./assets/Shaders/ccShader_Effect08_Frag');
require('./assets/Shaders/ccShader_Effect09_Frag');
require('./assets/Shaders/ccShader_Effect10_Frag');
require('./assets/Shaders/ccShader_Effect11_Frag');
require('./assets/Shaders/ccShader_Effect12_Frag');
require('./assets/Shaders/ccShader_Effect13_Frag');
require('./assets/Shaders/ccShader_Effect14_Frag');
require('./assets/Shaders/ccShader_Effect15_Frag');
require('./assets/Shaders/ccShader_Effect16_Frag');
require('./assets/Shaders/ccShader_Effect17_Frag');
require('./assets/Shaders/ccShader_Effect18_Frag');
require('./assets/Shaders/ccShader_Effect19_Frag');
require('./assets/Shaders/ccShader_Effect20_Frag');
require('./assets/Shaders/ccShader_Effect21_Frag');
require('./assets/Shaders/ccShader_Effect22_Frag');
require('./assets/Shaders/ccShader_Effect23_Frag');
require('./assets/Shaders/ccShader_Effect24_Frag');
require('./assets/Shaders/ccShader_Effect25_Frag');
require('./assets/Shaders/ccShader_Effect26_Frag');
require('./assets/Shaders/ccShader_Emboss_Frag');
require('./assets/Shaders/ccShader_Glass_Frag');
require('./assets/Shaders/ccShader_Gray_Frag');
require('./assets/Shaders/ccShader_LightEffect_Frag');
require('./assets/Shaders/ccShader_Negative_Black_White_Frag');
require('./assets/Shaders/ccShader_Negative_Image_Frag');
require('./assets/Shaders/ccShader_Normal_Frag');
require('./assets/Shaders/ccShader_Rotate_Vert');
require('./assets/Shaders/ccShader_Rotate_Vert_noMVP');
require('./assets/Shaders/ccShader_Rotation_Avg_Black_White_Frag');
require('./assets/Shaders/ccShader_Shadow_Black_White_Frag');
require('./assets/Shaders/ccShader_Wave_H_Frag');
require('./assets/Shaders/ccShader_Wave_VH_Frag');
require('./assets/Shaders/ccShader_Wave_V_Frag');
require('./assets/Shaders/ccShader_lightningBolt_Frag');
require('./assets/Shaders/ccShader_lightningBolt_Vert');
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

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
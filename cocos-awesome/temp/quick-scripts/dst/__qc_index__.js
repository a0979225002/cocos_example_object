
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
require('./assets/Scene/Bullet_Tracking/Bullet_Tracking');
require('./assets/Scene/Change_clothes/Change_clothes');
require('./assets/Scene/Circle_avatar/Circle_avatar');
require('./assets/Scene/Coin_fly_to_wallet/Coin_fly_to_wallet');
require('./assets/Scene/Dissolve_color/Dissolve_color');
require('./assets/Scene/Follow_spot/Follow_spot');
require('./assets/Scene/Home/BackHomeBtn');
require('./assets/Scene/Home/Home');
require('./assets/Scene/Infinite_bg_scroll/Infinite_bg_scroll');
require('./assets/Scene/Joystick/Joystick');
require('./assets/Scene/Magnifying_mirror/Magnifying_mirror');
require('./assets/Scene/Metaball/Metaball');
require('./assets/Scene/Metaball/Untitled-1');
require('./assets/Scene/Mosaic/Mosaic');
require('./assets/Scene/Moving_ghost/Moving_ghost');
require('./assets/Scene/Photo_gallery/Photo_gallery');
require('./assets/Scene/Scratch_ticket/Scratch_ticket');
require('./assets/Scene/Screen_vibrating/Screen_vibrating');
require('./assets/Scene/Specular_gloss/Specular_gloss');
require('./assets/Scene/Typer/Typer');
require('./assets/Scene/Water_spread/Water_spread');
require('./assets/migration/use_reversed_rotateBy');
require('./assets/migration/use_v2.1-2.2.1_cc.Toggle_event');
require('./assets/src/MySceneStyle');
require('./assets/src/SystemCenter');
require('./assets/src/dist/tcc/fcc-template');

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
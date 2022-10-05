
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
require('./assets/scripts/TestList');
require('./assets/scripts/Testcase');
require('./assets/scripts/demo/2DDropShadow');
require('./assets/scripts/demo/CircularFog');
require('./assets/scripts/demo/Cyberpunk.fire');
require('./assets/scripts/demo/FoWTest');
require('./assets/scripts/demo/NightVision');
require('./assets/scripts/demo/SnowCover');
require('./assets/scripts/demo/WaterTurbulence');
require('./assets/scripts/ssr/fbo/component/FBONodeCaptureComponent');
require('./assets/scripts/ssr/fbo/component/FBONodeCloneComponent');
require('./assets/scripts/ssr/fbo/component/FBONodeComponent');
require('./assets/scripts/ssr/fbo/component/FBONodeGhostComponent');
require('./assets/scripts/ssr/fbo/component/FBONodeInPlaceComponent');
require('./assets/scripts/ssr/fbo/component/FBONodeRegionComponent');
require('./assets/scripts/ssr/fbo/component/FBONodeScreenComponent');
require('./assets/scripts/ssr/fbo/component/FBONodeTargetComponent');
require('./assets/scripts/ssr/fbo/namespace/FBONamespace');
require('./assets/scripts/ssr/fow/component/SSRFoWComponent');
require('./assets/scripts/ssr/fow/namespace/SSRFoWNamespace');
require('./assets/scripts/ssr/fow/util/SSRTiledFogOfWarUtil');

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
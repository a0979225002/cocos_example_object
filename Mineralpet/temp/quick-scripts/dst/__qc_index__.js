
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
require('./assets/Script/Controll');
require('./assets/Script/Modle');
require('./assets/Script/drawBoard/DrawBoard');
require('./assets/Script/drawBoard/DrawBoardBuilder');
require('./assets/Script/drawBoard/DrawBoardModel');
require('./assets/Script/drawBoard/DrawBordModel');
require('./assets/Script/drawBoard/IColorCount');
require('./assets/Script/drawBoard/IDrawBordInitializeData');
require('./assets/Script/drawBoard/IVec2');
require('./assets/Script/test');

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
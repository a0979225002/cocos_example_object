
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
require('./assets/migration/use_reversed_rotateTo');
require('./assets/script/GameController');
require('./assets/script/api/GPGAPI');
require('./assets/script/common/ActionTransition');
require('./assets/script/common/Log');
require('./assets/script/controllers/mine/MineCollect');
require('./assets/script/controllers/mine/MineMng');
require('./assets/script/controllers/mine/MineMngCon');
require('./assets/script/controllers/mine/MineMngNav');
require('./assets/script/controllers/mine/collect/CollectGeneral');
require('./assets/script/controllers/mine/collect/ParticleCoin');
require('./assets/script/controllers/mine/mng/MinePartnerSelect');
require('./assets/script/controllers/mine/mng/MinePetProps');
require('./assets/script/controllers/mine/mng/MinePetSelect');
require('./assets/script/controllers/mine/mng/MineSelect');
require('./assets/script/controllers/mine/mng/MineSelectItem');
require('./assets/script/controllers/mine/mng/MineSlider');
require('./assets/script/controllers/mine/mng/MineToolBox');
require('./assets/script/controllers/mine/mng/ToolComponent');
require('./assets/script/controllers/mine/pop/PropSelectPop');
require('./assets/script/controllers/scene/MainGame');
require('./assets/script/controllers/scene/MainLoading');
require('./assets/script/controllers/ui/UIBase');
require('./assets/script/controllers/ui/UIHelp');
require('./assets/script/controllers/ui/UIInfo');
require('./assets/script/controllers/ui/UILoadTip');
require('./assets/script/controllers/ui/UILoading');
require('./assets/script/controllers/ui/UIMessage');
require('./assets/script/controllers/ui/UIMusic');
require('./assets/script/controllers/ui/UISkinPop');
require('./assets/script/controllers/ui/UIUpgradePanel');
require('./assets/script/data/Assets');
require('./assets/script/data/GameCenter');
require('./assets/script/data/IDataModel');
require('./assets/script/data/config/CfgMine');
require('./assets/script/data/config/CfgPartner');
require('./assets/script/data/const/EventConst');
require('./assets/script/data/const/ViewZorder');
require('./assets/script/data/model/GameModel');
require('./assets/script/data/model/System');
require('./assets/script/data/model/WebAPI');
require('./assets/script/data/scene/DataCollectGeneral');
require('./assets/script/data/scene/DataGame');
require('./assets/script/data/scene/DataLoading');
require('./assets/script/data/scene/DataMineCollect');
require('./assets/script/data/scene/DataMineMng');
require('./assets/script/data/scene/DataMineMngCon');
require('./assets/script/data/scene/DataMinePetSelect');
require('./assets/script/data/scene/DataMineToolBox');
require('./assets/script/data/scene/DataUIMessage');
require('./assets/script/data/scene/DataUIMusic');
require('./assets/script/lang/CNY');
require('./assets/script/lang/NTD');
require('./assets/script/lib/anime.es');
require('./assets/script/manager/AssetsMng');
require('./assets/script/manager/EventMng');
require('./assets/script/manager/LangMng');
require('./assets/script/manager/MusicMng');
require('./assets/script/manager/SceneMng');
require('./assets/script/manager/UIMng');

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
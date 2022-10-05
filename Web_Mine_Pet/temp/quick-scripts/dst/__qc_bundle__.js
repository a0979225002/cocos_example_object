
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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/config/CfgMine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c0116gUkgVNf4z35ur54na3', 'CfgMine');
// script/data/config/CfgMine.js

"use strict";

module.exports = {
  0: {
    levelName: ["", "", ""],
    name: "",
    intro: ""
  },
  1: {
    levelName: ["m_d1_s", "m_d1_m", "m_d1_l"],
    name: "巴特",
    intro: "巴特是一隻勤奮的小狗狗。雖然有些健忘，但個性老實敦厚。每出門6小時會帶回一些銀幣，記得要找牠領取哦！",
    bgColor: {
      r: 255,
      g: 187,
      b: 0
    }
  },
  2: {
    levelName: ["", "", ""],
    name: "",
    intro: ""
  },
  3: {
    levelName: ["", "", ""],
    name: "",
    intro: ""
  },
  4: {
    levelName: ["", "", ""],
    name: "",
    intro: ""
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxjb25maWdcXENmZ01pbmUuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImxldmVsTmFtZSIsIm5hbWUiLCJpbnRybyIsImJnQ29sb3IiLCJyIiwiZyIsImIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiLEtBQUc7QUFDQ0MsSUFBQUEsU0FBUyxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULENBRFo7QUFFQ0MsSUFBQUEsSUFBSSxFQUFFLEVBRlA7QUFHQ0MsSUFBQUEsS0FBSyxFQUFFO0FBSFIsR0FEVTtBQU1iLEtBQUc7QUFDQ0YsSUFBQUEsU0FBUyxFQUFFLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsUUFBckIsQ0FEWjtBQUVDQyxJQUFBQSxJQUFJLEVBQUUsSUFGUDtBQUdDQyxJQUFBQSxLQUFLLEVBQUUsb0RBSFI7QUFJQ0MsSUFBQUEsT0FBTyxFQUFFO0FBQUVDLE1BQUFBLENBQUMsRUFBRSxHQUFMO0FBQVVDLE1BQUFBLENBQUMsRUFBRSxHQUFiO0FBQWtCQyxNQUFBQSxDQUFDLEVBQUU7QUFBckI7QUFKVixHQU5VO0FBWWIsS0FBRztBQUNDTixJQUFBQSxTQUFTLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsQ0FEWjtBQUVDQyxJQUFBQSxJQUFJLEVBQUUsRUFGUDtBQUdDQyxJQUFBQSxLQUFLLEVBQUU7QUFIUixHQVpVO0FBaUJiLEtBQUc7QUFDQ0YsSUFBQUEsU0FBUyxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULENBRFo7QUFFQ0MsSUFBQUEsSUFBSSxFQUFFLEVBRlA7QUFHQ0MsSUFBQUEsS0FBSyxFQUFFO0FBSFIsR0FqQlU7QUFzQmIsS0FBRztBQUNDRixJQUFBQSxTQUFTLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsQ0FEWjtBQUVDQyxJQUFBQSxJQUFJLEVBQUUsRUFGUDtBQUdDQyxJQUFBQSxLQUFLLEVBQUU7QUFIUjtBQXRCVSxDQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICAwOiB7XHJcbiAgICAgICAgbGV2ZWxOYW1lOiBbXCJcIiwgXCJcIiwgXCJcIl0sXHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBpbnRybzogXCJcIixcclxuICAgIH0sXHJcbiAgICAxOiB7XHJcbiAgICAgICAgbGV2ZWxOYW1lOiBbXCJtX2QxX3NcIiwgXCJtX2QxX21cIiwgXCJtX2QxX2xcIl0sXHJcbiAgICAgICAgbmFtZTogXCLlt7TniblcIixcclxuICAgICAgICBpbnRybzogXCLlt7TnibnmmK/kuIDpmrvli6Tlpa7nmoTlsI/ni5fni5fjgILpm5bnhLbmnInkupvlgaXlv5jvvIzkvYblgIvmgKfogIHlr6bmlabljprjgILmr4/lh7rploA25bCP5pmC5pyD5bi25Zue5LiA5Lqb6YqA5bmj77yM6KiY5b6X6KaB5om+54mg6aCY5Y+W5ZOm77yBXCIsXHJcbiAgICAgICAgYmdDb2xvcjogeyByOiAyNTUsIGc6IDE4NywgYjogMCB9XHJcbiAgICB9LFxyXG4gICAgMjoge1xyXG4gICAgICAgIGxldmVsTmFtZTogW1wiXCIsIFwiXCIsIFwiXCJdLFxyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgaW50cm86IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgMzoge1xyXG4gICAgICAgIGxldmVsTmFtZTogW1wiXCIsIFwiXCIsIFwiXCJdLFxyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgaW50cm86IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgNDoge1xyXG4gICAgICAgIGxldmVsTmFtZTogW1wiXCIsIFwiXCIsIFwiXCJdLFxyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgaW50cm86IFwiXCIsXHJcbiAgICB9LFxyXG59OyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/mine/collect/ParticleCoin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b589ddNgZxFCbiwnKmoPLRW', 'ParticleCoin');
// script/controllers/mine/collect/ParticleCoin.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var UIBase_1 = require("../../ui/UIBase");
var AssetsMng_1 = require("../../../manager/AssetsMng");
var ccclass = cc._decorator.ccclass;
var ParticleCoin = /** @class */ (function (_super) {
    __extends(ParticleCoin, _super);
    function ParticleCoin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.centerPos = cc.v2(0, 0);
        _this.sprayRange = 270;
        _this.sprayRangeMin = 60;
        _this.scaleVal = .6;
        return _this;
    }
    ParticleCoin.prototype.onUILoad = function () {
        this.node_coin_container = this.node.getChildByName("container");
        this.node_icon_gold = this.node.getChildByName("icon_gold");
        this.node_icon_sliver = this.node.getChildByName("icon_sliver");
        this.goldCoinPrefab = AssetsMng_1.default.getAssets("coin_gold_prefab");
        this.sliverCoinPrefab = AssetsMng_1.default.getAssets("coin_sliver_prefab");
    };
    ParticleCoin.prototype.createCoins = function (centerPoint, goldCount, sliverCount, callBack) {
        this.centerPos = centerPoint;
        this.createCoinNode(1, goldCount);
        this.createCoinNode(0, sliverCount);
        var timer = setTimeout(function () {
            if (callBack)
                callBack();
            clearTimeout(timer);
        }, 1000);
    };
    ParticleCoin.prototype.createCoinNode = function (type, count) {
        for (var i = 0; i < count; i++) {
            var prefab = type == 0 ? this.sliverCoinPrefab : this.goldCoinPrefab;
            var coinNode = cc.instantiate(prefab);
            var targetPos = this.getExplosionTargetPos();
            coinNode.angle = Math.random() * 360;
            coinNode.setPosition(this.centerPos);
            coinNode.setScale(this.scaleVal);
            this.node_coin_container.addChild(coinNode);
            this.explosionAniPlay(coinNode, targetPos, type);
        }
    };
    ParticleCoin.prototype.coinIconJump = function (node) {
        node.runAction(cc.sequence(cc.scaleTo(.08, 1.3).easing(cc.easeSineOut()), cc.scaleTo(.06, 1)));
    };
    ParticleCoin.prototype.explosionAniPlay = function (node, targetPos, type) {
        var _this = this;
        var walletPos = type == 0 ? this.node_icon_sliver.position : this.node_icon_gold.position;
        var ani = node.children[0].getComponent(cc.Animation);
        var x = targetPos.x + node.x;
        var y = targetPos.y + node.y;
        ani.play();
        node.runAction(cc.sequence(cc.moveTo(.3, x, y).easing(cc.easeCubicActionOut()), cc.delayTime(Math.random()), cc.callFunc(function () {
            ani.stop();
        }), cc.moveTo(.8, walletPos.x, walletPos.y).easing(cc.easeInOut(3.0)), cc.callFunc(function () {
            node.destroy();
            _this.coinIconJump(type == 0 ? _this.node_icon_sliver : _this.node_icon_gold);
        })));
    };
    ParticleCoin.prototype.getExplosionTargetPos = function () {
        var theta = Math.random() * Math.PI * 2;
        var r = Math.random() * this.sprayRange + this.sprayRangeMin;
        var x = r * Math.cos(theta);
        var y = r * Math.sin(theta);
        return cc.v2(x, y);
    };
    ParticleCoin = __decorate([
        ccclass
    ], ParticleCoin);
    return ParticleCoin;
}(UIBase_1.default));
exports.default = ParticleCoin;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcbWluZVxcY29sbGVjdFxcUGFydGljbGVDb2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUFxQztBQUNyQyx3REFBbUQ7QUFFNUMsSUFBQSxPQUFPLEdBQUksRUFBRSxDQUFDLFVBQVUsUUFBakIsQ0FBa0I7QUFHaEM7SUFBMEMsZ0NBQU07SUFBaEQ7UUFBQSxxRUEyR0M7UUFsR0csZUFBUyxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWpDLGdCQUFVLEdBQVcsR0FBRyxDQUFDO1FBQ3pCLG1CQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGNBQVEsR0FBVyxFQUFFLENBQUM7O0lBOEYxQixDQUFDO0lBMUZHLCtCQUFRLEdBQVI7UUFFSSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFaEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxtQkFBUyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxtQkFBUyxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBRXRFLENBQUM7SUFFRCxrQ0FBVyxHQUFYLFVBQVksV0FBb0IsRUFBRSxTQUFpQixFQUFFLFdBQW1CLEVBQUUsUUFBUztRQUUvRSxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztRQUc3QixJQUFJLENBQUMsY0FBYyxD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QVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNqRSxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ1IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMvRSxDQUFDLENBQUMsQ0FDTCxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsNENBQXFCLEdBQXJCO1FBQ0ksSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ3pDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBeEdnQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBMkdoQztJQUFELG1CQUFDO0NBM0dELEFBMkdDLENBM0d5QyxnQkFBTSxHQTJHL0M7a0JBM0dvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJQmFzZSBmcm9tIFwiLi4vLi4vdWkvVUlCYXNlXCI7XHJcbmltcG9ydCBBc3NldHNNbmcgZnJvbSBcIi4uLy4uLy4uL21hbmFnZXIvQXNzZXRzTW5nXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzc30gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydGljbGVDb2luIGV4dGVuZHMgVUlCYXNlIHtcclxuXHJcbiAgICBub2RlX2NvaW5fY29udGFpbmVyOiBjYy5Ob2RlO1xyXG4gICAgbm9kZV9pY29uX2dvbGQ6IGNjLk5vZGU7XHJcbiAgICBub2RlX2ljb25fc2xpdmVyOiBjYy5Ob2RlO1xyXG5cclxuICAgIGdvbGRDb2luUHJlZmFiOiBjYy5QcmVmYWI7XHJcbiAgICBzbGl2ZXJDb2luUHJlZmFiOiBjYy5QcmVmYWI7XHJcblxyXG4gICAgY2VudGVyUG9zOiBjYy5WZWMyID0gY2MudjIoMCwgMCk7XHJcblxyXG4gICAgc3ByYXlSYW5nZTogbnVtYmVyID0gMjcwO1xyXG4gICAgc3ByYXlSYW5nZU1pbjogbnVtYmVyID0gNjA7XHJcbiAgICBzY2FsZVZhbDogbnVtYmVyID0gLjY7XHJcblxyXG4gICAgX2NhbGxCYWNrO1xyXG5cclxuICAgIG9uVUlMb2FkKCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVfY29pbl9jb250YWluZXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb250YWluZXJcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlX2ljb25fZ29sZCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImljb25fZ29sZFwiKTtcclxuICAgICAgICB0aGlzLm5vZGVfaWNvbl9zbGl2ZXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uX3NsaXZlclwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5nb2xkQ29pblByZWZhYiA9IEFzc2V0c01uZy5nZXRBc3NldHMoXCJjb2luX2dvbGRfcHJlZmFiXCIpO1xyXG4gICAgICAgIHRoaXMuc2xpdmVyQ29pblByZWZhYiA9IEFzc2V0c01uZy5nZXRBc3NldHMoXCJjb2luX3NsaXZlcl9wcmVmYWJcIik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNvaW5zKGNlbnRlclBvaW50OiBjYy5WZWMyLCBnb2xkQ291bnQ6IG51bWJlciwgc2xpdmVyQ291bnQ6IG51bWJlciwgY2FsbEJhY2s/KTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuY2VudGVyUG9zID0gY2VudGVyUG9pbnQ7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZUNvaW5Ob2RlKDEsIGdvbGRDb3VudCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDb2luTm9kZSgwLCBzbGl2ZXJDb3VudCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjYWxsQmFjaykgY2FsbEJhY2soKVxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ29pbk5vZGUodHlwZTogbnVtYmVyLCBjb3VudDogbnVtYmVyKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IHByZWZhYiA9IHR5cGUgPT0gMCA/IHRoaXMuc2xpdmVyQ29pblByZWZhYiA6IHRoaXMuZ29sZENvaW5QcmVmYWI7XHJcblxyXG4gICAgICAgICAgICBsZXQgY29pbk5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRhcmdldFBvcyA9IHRoaXMuZ2V0RXhwbG9zaW9uVGFyZ2V0UG9zKCk7XHJcblxyXG4gICAgICAgICAgICBjb2luTm9kZS5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICAgICAgICAgIGNvaW5Ob2RlLnNldFBvc2l0aW9uKHRoaXMuY2VudGVyUG9zKTtcclxuICAgICAgICAgICAgY29pbk5vZGUuc2V0U2NhbGUodGhpcy5zY2FsZVZhbCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGVfY29pbl9jb250YWluZXIuYWRkQ2hpbGQoY29pbk5vZGUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZXhwbG9zaW9uQW5pUGxheShjb2luTm9kZSwgdGFyZ2V0UG9zLCB0eXBlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb2luSWNvbkp1bXAobm9kZSk6IHZvaWQge1xyXG5cclxuICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgY2Muc2NhbGVUbyguMDgsIDEuMykuZWFzaW5nKGNjLmVhc2VTaW5lT3V0KCkpLFxyXG4gICAgICAgICAgICBjYy5zY2FsZVRvKC4wNiwgMSksXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwbG9zaW9uQW5pUGxheShub2RlOiBjYy5Ob2RlLCB0YXJnZXRQb3M6IGNjLlZlYzIsIHR5cGU6IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgd2FsbGV0UG9zID0gdHlwZSA9PSAwID8gdGhpcy5ub2RlX2ljb25fc2xpdmVyLnBvc2l0aW9uIDogdGhpcy5ub2RlX2ljb25fZ29sZC5wb3NpdGlvbjtcclxuICAgICAgICBsZXQgYW5pID0gbm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICBsZXQgeCA9IHRhcmdldFBvcy54ICsgbm9kZS54O1xyXG4gICAgICAgIGxldCB5ID0gdGFyZ2V0UG9zLnkgKyBub2RlLnk7XHJcbiAgICAgICAgYW5pLnBsYXkoKTtcclxuXHJcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLm1vdmVUbyguMywgeCwgeSkuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbk91dCgpKSxcclxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKE1hdGgucmFuZG9tKCkpLFxyXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbmkuc3RvcCgpO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgY2MubW92ZVRvKC44LCB3YWxsZXRQb3MueCwgd2FsbGV0UG9zLnkpLmVhc2luZyhjYy5lYXNlSW5PdXQoMy4wKSksXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2luSWNvbkp1bXAodHlwZSA9PSAwID8gdGhpcy5ub2RlX2ljb25fc2xpdmVyIDogdGhpcy5ub2RlX2ljb25fZ29sZCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEV4cGxvc2lvblRhcmdldFBvcygpOiBjYy5WZWMyIHtcclxuICAgICAgICBjb25zdCB0aGV0YSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMlxyXG4gICAgICAgIGxldCByID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuc3ByYXlSYW5nZSArIHRoaXMuc3ByYXlSYW5nZU1pbjtcclxuICAgICAgICBsZXQgeCA9IHIgKiBNYXRoLmNvcyh0aGV0YSk7XHJcbiAgICAgICAgbGV0IHkgPSByICogTWF0aC5zaW4odGhldGEpO1xyXG4gICAgICAgIHJldHVybiBjYy52Mih4LCB5KTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/ActionTransition.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f6d7lF8+5Pla+j4wECkTyZ', 'ActionTransition');
// script/common/ActionTransition.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionTransition = void 0;
var ActionTransition = /** @class */ (function () {
    function ActionTransition() {
    }
    ActionTransition.pageFadeIn = function (node, aniState, callBack) {
        if (aniState === void 0) { aniState = true; }
        node.zIndex = 9;
        node.active = true;
        if (!aniState) {
            return;
        }
        node.opacity = 0;
        node.setScale(1.2);
        node.active = true;
        node.stopAllActions();
        node.runAction(cc.sequence(cc.delayTime(.16), cc.spawn(cc.scaleTo(.3, 1).easing(cc.easeBackInOut()), cc.fadeIn(.1)), cc.callFunc(function () {
            if (callBack)
                callBack();
        })));
    };
    ActionTransition.pageFadeOut = function (node, aniState, callBack) {
        if (aniState === void 0) { aniState = true; }
        if (aniState) {
            node.zIndex = 1;
            node.stopAllActions();
            node.runAction(cc.sequence(cc.scaleTo(.3, 0).easing(cc.easeBackIn()), cc.callFunc(function () {
                node.active = false;
                if (callBack)
                    callBack();
            })));
            return;
        }
        node.active = false;
    };
    ActionTransition.btnBounce = function (node, callBack) {
        node.runAction(cc.sequence(cc.scaleTo(.13, 1.1), cc.scaleTo(.1, 1), cc.callFunc(function () {
            if (callBack)
                callBack();
        })));
    };
    return ActionTransition;
}());
exports.ActionTransition = ActionTransition;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXEFjdGlvblRyYW5zaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQTJEQSxDQUFDO0lBekRpQiwyQkFBVSxHQUF4QixVQUF5QixJQUFhLEVBQUUsUUFBd0IsRUFBRSxRQUFtQjtRQUE3Qyx5QkFBQSxFQUFBLGVBQXdCO1FBRTVELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRW5CLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFFMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUN0QixFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixFQUFFLENBQUMsS0FBSyxDQUNKLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsRUFDNUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FDaEIsRUFDRCxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ1IsSUFBSSxRQUFRO2dCQUFFLFFBQVEsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUNMLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFYSw0QkFBVyxHQUF6QixVQUEwQixJQUFhLEVBQUUsUUFBd0IsRUFBRSxRQUFtQjtRQUE3Qyx5QkFBQSxFQUFBLGVBQXdCO1FBRTdELElBQUksUUFBUSxFQUFFO1lBRVYsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFFaEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FDdEIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUN6QyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUNSLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixJQUFJLFFBQVE7b0JBQUUsUUFBUSxFQUFFLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQ0wsQ0FBQyxDQUFDO1lBRUgsT0FBTztTQUVWO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFFeEIsQ0FBQztJQUVhLDBCQUFTLEdBQXZCLFVBQXdCLElBQWEsRUFBRSxRQUFtQjtRQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQ3RCLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUNwQixFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFDakIsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNSLElBQUksUUFBUTtnQkFBRSxRQUFRLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FDTCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUwsdUJBQUM7QUFBRCxDQTNEQSxBQTJEQyxJQUFBO0FBM0RZLDRDQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBY3Rpb25UcmFuc2l0aW9uIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhZ2VGYWRlSW4obm9kZTogY2MuTm9kZSwgYW5pU3RhdGU6IGJvb2xlYW4gPSB0cnVlLCBjYWxsQmFjaz86IEZ1bmN0aW9uKTogdm9pZCB7XHJcblxyXG4gICAgICAgIG5vZGUuekluZGV4ID0gOTtcclxuICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICghYW5pU3RhdGUpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIG5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgbm9kZS5zZXRTY2FsZSgxLjIpO1xyXG4gICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLmRlbGF5VGltZSguMTYpLFxyXG4gICAgICAgICAgICBjYy5zcGF3bihcclxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oLjMsIDEpLmVhc2luZyhjYy5lYXNlQmFja0luT3V0KCkpLFxyXG4gICAgICAgICAgICAgICAgY2MuZmFkZUluKC4xKVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbEJhY2spIGNhbGxCYWNrKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFnZUZhZGVPdXQobm9kZTogY2MuTm9kZSwgYW5pU3RhdGU6IGJvb2xlYW4gPSB0cnVlLCBjYWxsQmFjaz86IEZ1bmN0aW9uKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmIChhbmlTdGF0ZSkge1xyXG5cclxuICAgICAgICAgICAgbm9kZS56SW5kZXggPSAxO1xyXG5cclxuICAgICAgICAgICAgbm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oLjMsIDApLmVhc2luZyhjYy5lYXNlQmFja0luKCkpLFxyXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxCYWNrKSBjYWxsQmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBidG5Cb3VuY2Uobm9kZTogY2MuTm9kZSwgY2FsbEJhY2s/OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICBjYy5zY2FsZVRvKC4xMywgMS4xKSxcclxuICAgICAgICAgICAgY2Muc2NhbGVUbyguMSwgMSksXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsQmFjaykgY2FsbEJhY2soKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApKTtcclxuICAgIH1cclxuXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/api/GPGAPI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9f2569Jys9BA5U+pyZK6gQC', 'GPGAPI');
// script/api/GPGAPI.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GPGAPI = void 0;
var EventMng_1 = require("../manager/EventMng");
var GPGAPI = /** @class */ (function () {
    function GPGAPI() {
    }
    GPGAPI.prototype.connect = function () {
        window.addEventListener("message", this.onReceiveMessage, false);
    };
    GPGAPI.prototype.send = function (cmd, data) {
        var Packet = {
            cmd: cmd,
            data: data
        };
        window.parent.postMessage(Packet, "*");
    };
    GPGAPI.prototype.onReceiveMessage = function (event) {
        var cmd = event.data.cmd;
        var data = event.data.data;
        EventMng_1.default.emit(cmd, data);
    };
    return GPGAPI;
}());
exports.GPGAPI = GPGAPI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxhcGlcXEdQR0FQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFFM0M7SUFBQTtJQW9CQSxDQUFDO0lBbEJHLHdCQUFPLEdBQVA7UUFDSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQscUJBQUksR0FBSixVQUFLLEdBQVcsRUFBRSxJQUFZO1FBQzFCLElBQUksTUFBTSxHQUFHO1lBQ1QsR0FBRyxFQUFFLEdBQUc7WUFDUixJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELGlDQUFnQixHQUFoQixVQUFpQixLQUFLO1FBQ2xCLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzNCLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzdCLGtCQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUwsYUFBQztBQUFELENBcEJBLEFBb0JDLElBQUE7QUFwQlksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnRNbmcgZnJvbSBcIi4uL21hbmFnZXIvRXZlbnRNbmdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHUEdBUEkge1xyXG5cclxuICAgIGNvbm5lY3QoKTogdm9pZCB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMub25SZWNlaXZlTWVzc2FnZSwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmQoY21kOiBzdHJpbmcsIGRhdGE6IG9iamVjdCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBQYWNrZXQgPSB7XHJcbiAgICAgICAgICAgIGNtZDogY21kLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgfTtcclxuICAgICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKFBhY2tldCwgXCIqXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVjZWl2ZU1lc3NhZ2UoZXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjbWQgPSBldmVudC5kYXRhLmNtZDtcclxuICAgICAgICBjb25zdCBkYXRhID0gZXZlbnQuZGF0YS5kYXRhO1xyXG4gICAgICAgIEV2ZW50TW5nLmVtaXQoY21kLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/GameCenter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a0f07OGhsVLNaJb6hfQq2WI', 'GameCenter');
// script/data/GameCenter.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssetsMng_1 = require("../manager/AssetsMng");
var CfgMine = require("./config/CfgMine");
var CfgPartner = require("./config/CfgPartner");
var System_1 = require("./model/System");
var GameModel_1 = require("./model/GameModel");
var GameCenter = /** @class */ (function () {
    function GameCenter() {
        this.cfgMine = CfgMine;
        this.cfgPartner = CfgPartner;
        this.system = null;
        this.game = null;
        this.system = new System_1.default();
        this.game = new GameModel_1.default();
        this.init();
    }
    GameCenter.prototype.init = function () {
        var models = [this.system, this.game];
        for (var i = 0; i < models.length; i++) {
            models[i].getData = this.getData.bind(this);
        }
    };
    GameCenter.prototype.getData = function (modelName, val) {
        if (!this[modelName]) {
            return null;
        }
        return this[modelName][val];
    };
    GameCenter.prototype.getCurrentPetChooseIcon = function () {
        var id = this.game.mineSelectID;
        var level = this.game.mineLevel[id];
        var assetImg = AssetsMng_1.default.getAssets("pet_1.plist");
        return assetImg.getSpriteFrame("" + this.cfgMine[id].levelName[Math.floor((level - 1) / 3)]);
    };
    GameCenter.prototype.getCurrentPartnerChooseIcon = function () {
        var id = this.game.partnerSelectID;
        var assetImg = AssetsMng_1.default.getAssets("pet_2.plist");
        return assetImg.getSpriteFrame("display_" + this.cfgPartner[id].levelName[0]);
    };
    return GameCenter;
}());
exports.default = new GameCenter();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxHYW1lQ2VudGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQTZDO0FBQzdDLDBDQUE0QztBQUM1QyxnREFBa0Q7QUFDbEQseUNBQW9DO0FBQ3BDLCtDQUEwQztBQUUxQztJQU9JO1FBTEEsWUFBTyxHQUFXLE9BQU8sQ0FBQztRQUMxQixlQUFVLEdBQVcsVUFBVSxDQUFDO1FBQ2hDLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFDdEIsU0FBSSxHQUFjLElBQUksQ0FBQztRQUluQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZ0JBQU0sRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxtQkFBUyxFQUFFLENBQUM7UUFFNUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBRWhCLENBQUM7SUFFRCx5QkFBSSxHQUFKO1FBQ0ksSUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9DO0lBQ0wsQ0FBQztJQUVELDRCQUFPLEdBQVAsVUFBUSxTQUFpQixFQUFFLEdBQVc7UUFFbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNsQixPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFaEMsQ0FBQztJQUVELDRDQUF1QixHQUF2QjtRQUNJLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ2hDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLElBQUksUUFBUSxHQUFHLG1CQUFTLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUcsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFFRCxnREFBMkIsR0FBM0I7UUFDSSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNuQyxJQUFJLFFBQVEsR0FBRyxtQkFBUyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsRCxPQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBVyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUcsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFTCxpQkFBQztBQUFELENBOUNBLEFBOENDLElBQUE7QUFFRCxrQkFBZSxJQUFJLFVBQVUsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFzc2V0c01uZyBmcm9tIFwiLi4vbWFuYWdlci9Bc3NldHNNbmdcIjtcclxuaW1wb3J0ICogYXMgQ2ZnTWluZSBmcm9tIFwiLi9jb25maWcvQ2ZnTWluZVwiO1xyXG5pbXBvcnQgKiBhcyBDZmdQYXJ0bmVyIGZyb20gXCIuL2NvbmZpZy9DZmdQYXJ0bmVyXCI7XHJcbmltcG9ydCBTeXN0ZW0gZnJvbSBcIi4vbW9kZWwvU3lzdGVtXCI7XHJcbmltcG9ydCBHYW1lTW9kZWwgZnJvbSBcIi4vbW9kZWwvR2FtZU1vZGVsXCI7XHJcblxyXG5jbGFzcyBHYW1lQ2VudGVyIHtcclxuXHJcbiAgICBjZmdNaW5lOiBvYmplY3QgPSBDZmdNaW5lO1xyXG4gICAgY2ZnUGFydG5lcjogb2JqZWN0ID0gQ2ZnUGFydG5lcjtcclxuICAgIHN5c3RlbTogU3lzdGVtID0gbnVsbDtcclxuICAgIGdhbWU6IEdhbWVNb2RlbCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3lzdGVtID0gbmV3IFN5c3RlbSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lTW9kZWwoKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbW9kZWxzID0gW3RoaXMuc3lzdGVtLCB0aGlzLmdhbWVdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kZWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG1vZGVsc1tpXS5nZXREYXRhID0gdGhpcy5nZXREYXRhLmJpbmQodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGEobW9kZWxOYW1lOiBzdHJpbmcsIHZhbDogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpc1ttb2RlbE5hbWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXNbbW9kZWxOYW1lXVt2YWxdO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW50UGV0Q2hvb3NlSWNvbigpIHtcclxuICAgICAgICBsZXQgaWQgPSB0aGlzLmdhbWUubWluZVNlbGVjdElEO1xyXG4gICAgICAgIGxldCBsZXZlbCA9IHRoaXMuZ2FtZS5taW5lTGV2ZWxbaWRdO1xyXG4gICAgICAgIGxldCBhc3NldEltZyA9IEFzc2V0c01uZy5nZXRBc3NldHMoYHBldF8xLnBsaXN0YCk7XHJcbiAgICAgICAgcmV0dXJuIGFzc2V0SW1nLmdldFNwcml0ZUZyYW1lKGAke3RoaXMuY2ZnTWluZVtpZF0ubGV2ZWxOYW1lW01hdGguZmxvb3IoKGxldmVsIC0gMSkgLyAzKV19YCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VycmVudFBhcnRuZXJDaG9vc2VJY29uKCkge1xyXG4gICAgICAgIGxldCBpZCA9IHRoaXMuZ2FtZS5wYXJ0bmVyU2VsZWN0SUQ7XHJcbiAgICAgICAgbGV0IGFzc2V0SW1nID0gQXNzZXRzTW5nLmdldEFzc2V0cyhgcGV0XzIucGxpc3RgKTtcclxuICAgICAgICByZXR1cm4gYXNzZXRJbWcuZ2V0U3ByaXRlRnJhbWUoYGRpc3BsYXlfJHt0aGlzLmNmZ1BhcnRuZXJbaWRdLmxldmVsTmFtZVswXX1gKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBHYW1lQ2VudGVyKCk7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '625adCwuHROjZwwrOIfvQIe', 'GameController');
// script/GameController.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssetsMng_1 = require("./manager/AssetsMng");
var SceneMng_1 = require("./manager/SceneMng");
var LangMng_1 = require("./manager/LangMng");
var GPGAPI_1 = require("./api/GPGAPI");
var GameController = /** @class */ (function () {
    function GameController() {
        this.net = null;
    }
    GameController.prototype.init = function () {
        AssetsMng_1.default.init();
        SceneMng_1.default.init();
        LangMng_1.default.init();
        this.net = new GPGAPI_1.GPGAPI();
        this.net.connect();
    };
    return GameController;
}());
exports.default = new GameController();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUM1QywrQ0FBMEM7QUFDMUMsNkNBQXdDO0FBQ3hDLHVDQUFzQztBQUV0QztJQUFBO1FBRUksUUFBRyxHQUFXLElBQUksQ0FBQztJQVV2QixDQUFDO0lBUkcsNkJBQUksR0FBSjtRQUNJLG1CQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakIsa0JBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVMLHFCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFFRCxrQkFBZSxJQUFJLGNBQWMsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFzc2V0c01uZyBmcm9tIFwiLi9tYW5hZ2VyL0Fzc2V0c01uZ1wiO1xyXG5pbXBvcnQgU2NlbmVNbmcgZnJvbSBcIi4vbWFuYWdlci9TY2VuZU1uZ1wiO1xyXG5pbXBvcnQgTGFuZ01uZyBmcm9tIFwiLi9tYW5hZ2VyL0xhbmdNbmdcIjtcclxuaW1wb3J0IHsgR1BHQVBJIH0gZnJvbSBcIi4vYXBpL0dQR0FQSVwiO1xyXG5cclxuY2xhc3MgR2FtZUNvbnRyb2xsZXIge1xyXG5cclxuICAgIG5ldDogR1BHQVBJID0gbnVsbDtcclxuXHJcbiAgICBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIEFzc2V0c01uZy5pbml0KCk7XHJcbiAgICAgICAgU2NlbmVNbmcuaW5pdCgpO1xyXG4gICAgICAgIExhbmdNbmcuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMubmV0ID0gbmV3IEdQR0FQSSgpO1xyXG4gICAgICAgIHRoaXMubmV0LmNvbm5lY3QoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBHYW1lQ29udHJvbGxlcigpOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/model/GameModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2723OMcjJG6oiOUkAUM8YA', 'GameModel');
// script/data/model/GameModel.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EventMng_1 = require("../../manager/EventMng");
var EventConst_1 = require("../const/EventConst");
var IDataModel_1 = require("../IDataModel");
var GameModel = /** @class */ (function (_super) {
    __extends(GameModel, _super);
    function GameModel() {
        var _this = _super.call(this, "Game") || this;
        _this._mineSelectID = 0;
        _this.mineList = [0, 0, 0, 0, 0];
        _this.mineLevel = [1, 1, 1, 1, 1];
        _this.mineSkin = [0, 0, 0, 0, 0];
        _this.mineAccessories = [0, 0, 0, 0, 0];
        _this._partnerSelectID = 0;
        _this.partnerList = [0, 0, 0, 0, 0];
        _this._canGo = false;
        _this.goldPoint = 0;
        _this.silverPoint = 0;
        _this.warehousePoint = 0;
        _this.timeActive = false;
        _this.countDownTimer = null;
        _this.currentTime = 0;
        _this.grandTotalTime = 120;
        _this.collect = {
            gold: 0,
            silver: 0
        };
        _this.levelConfig = {
            silver: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            can: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            rate: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        };
        _this.canCount = 0;
        _this.mineSkinListData = [];
        _this.levelSkinName = ["obj_S", "obj_M", "obj_L"];
        _this.mineBodyName = ["pet01", "pet01", "pet01", "pet01", "pet01"];
        _this.mineFloorName = ["floor_01", "floor_01", "floor_01", "floor_01", "floor_01"];
        _this.mineSkinName = ["pet01",];
        _this.mineRoadName = ["map_gpg1", "map_gpg1", "map_gpg1", "map_gpg1", "map_gpg1"];
        _this.partnerBodyName = ["mining1", "mining1", "mining1", "mining1", "mining1"];
        return _this;
    }
    GameModel.prototype.getMessageListeners = function () {
        var _a;
        var _this = this;
        return _a = {},
            _a['start'] = function (msg) { _this.onStart(msg); },
            _a['action'] = function (msg) { _this.onAction(msg); },
            _a['other'] = function (msg) { _this.onOther(msg); },
            _a['upgrade'] = function (msg) { _this.onUpgrade(msg); },
            _a['getbag'] = function (msg) { _this.onGetBag(msg); },
            _a['use'] = function (msg) { _this.onUse(msg); },
            _a;
    };
    GameModel.prototype.onStart = function (msg) {
        if (msg == null) {
            EventMng_1.default.emit(EventConst_1.MainEvent.MESSAGE_SHOW, {
                code: "S_9100"
            });
            return;
        }
        this.goldPoint = msg.wallet.gold;
        this.silverPoint = msg.wallet.silver;
        this.mineSelectID = msg.currentPet;
        for (var i = 0; i < msg.pet.length; i++) {
            var data = msg.pet[i];
            this.mineList[i] = data.own ? 1 : 0;
            if (this.mineList[i] == 1) {
                this.mineLevel[i] = data.info.level;
                this.mineSkin[i] = data.info.skin.id;
                this.mineAccessories[i] = data.info.deco.id;
            }
        }
        this.partnerSelectID = msg.currentElf;
        for (var i = 0; i < msg.elf.length; i++) {
            this.partnerList[i] = msg.elf[i].own ? 1 : 0;
        }
        this.levelConfig.silver = msg.upgrade.silver;
        this.levelConfig.can = msg.upgrade.can;
        this.levelConfig.rate = msg.upgrade.chance;
        this.canCount = msg.can;
        this.grandTotalTime = msg.other.time;
        this.warehousePoint = msg.other.expect;
        this.timeStart();
        EventMng_1.default.emit(EventConst_1.LoadEvent.LOAD_SUCCESS);
    };
    GameModel.prototype.onAction = function (msg) {
        if (msg == null) {
            return;
        }
        this.goldPoint = msg.wallet.gold;
        this.silverPoint = msg.wallet.silver;
        this.collect.gold = msg.getmine.gold;
        this.collect.silver = msg.getmine.silver;
        if (this.collect.gold == 0 && this.collect.silver == 0) {
            return;
        }
        EventMng_1.default.emit(EventConst_1.MainEvent.GET_POINT);
    };
    GameModel.prototype.onOther = function (msg) {
        if (msg == null) {
            return;
        }
        this.timeStop();
        this.grandTotalTime = msg.time > 43200 ? 43200 : msg.time;
        this.warehousePoint = msg.expect;
        this.timeStart();
        EventMng_1.default.emit("MINE_GENERAL_UPDATE");
    };
    GameModel.prototype.onUpgrade = function (msg) {
        this.canCount = msg.can;
        this.goldPoint = msg.gold;
        this.silverPoint = msg.silver;
        EventMng_1.default.emit("PET_UPGRADE", msg);
    };
    GameModel.prototype.onUse = function (msg) {
        var state = msg.isSuccess;
        EventMng_1.default.emit(EventConst_1.MainEvent.ENTER_MINE_COLLECT, {
            state: state,
        });
    };
    GameModel.prototype.timeInit = function () {
        this.currentTime = this.grandTotalTime;
    };
    GameModel.prototype.timeStart = function () {
        var _this = this;
        this.timeInit();
        this.timeActive = true;
        var time = 0;
        var start = new Date().getTime();
        var action = function () {
            clearTimeout(_this.countDownTimer);
            if (_this.currentTime < 0 || _this.currentTime >= 43200) {
                return;
            }
            time += 1000;
            var diff = (new Date().getTime() - start) - time;
            _this.currentTime += 1;
            if (_this.currentTime < 0) {
                _this.timeStop();
                return;
            }
            _this.countDownTimer = setTimeout(action, (1000 - diff));
        };
        this.countDownTimer = setTimeout(action, 1000);
    };
    GameModel.prototype.timeStop = function () {
        this.timeActive = false;
        this.currentTime = 0;
        clearTimeout(this.countDownTimer);
    };
    GameModel.prototype.onGetBag = function (msg) {
        this.mineSkinListData = msg.skinList;
        EventMng_1.default.emit("OPEN_SKIN_POP", msg);
    };
    GameModel.prototype.hasMine = function () {
        return this.mineList[this.mineSelectID] != 0;
    };
    GameModel.prototype.getPetBodyThemeName = function (id) {
        var checkID = id == 0 || id > 0 ? id : this.mineSelectID;
        var name = this.mineBodyName[checkID];
        if (this.mineSkin[checkID] > 0) {
            name = this.mineSkinName[this.mineSkin[checkID]];
        }
        return name;
    };
    GameModel.prototype.getPetBodySkinName = function (id) {
        var name = "default";
        var checkID = id == 0 || id > 0 ? id : this.mineSelectID;
        if (this.mineSkin[checkID] == 0) {
            name = this.levelSkinName[Math.floor((this.mineLevel[checkID] - 1) / 3)];
        }
        return name;
    };
    GameModel.prototype.getPartnerBodyThemeName = function () {
        return this.partnerBodyName[this.partnerSelectID];
    };
    GameModel.prototype.hasPartner = function () {
        return this.partnerList[this.partnerSelectID] != 0;
    };
    Object.defineProperty(GameModel.prototype, "mineSelectID", {
        get: function () {
            return this._mineSelectID;
        },
        set: function (value) {
            this._mineSelectID = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameModel.prototype, "partnerSelectID", {
        get: function () {
            return this._partnerSelectID;
        },
        set: function (value) {
            this._partnerSelectID = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameModel.prototype, "canGo", {
        get: function () {
            this._canGo = !(!this.hasMine() || !this.hasPartner());
            return this._canGo;
        },
        set: function (value) {
            this._canGo = value;
        },
        enumerable: false,
        configurable: true
    });
    return GameModel;
}(IDataModel_1.default));
exports.default = GameModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxtb2RlbFxcR2FtZU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5QyxrREFBMkQ7QUFDM0QsNENBQXVDO0FBRXZDO0lBQXVDLDZCQUFVO0lBNEM3QztRQUFBLFlBQ0ksa0JBQU0sTUFBTSxDQUFDLFNBQ2hCO1FBNUNPLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQ2xDLGNBQVEsR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyQyxlQUFTLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEMsY0FBUSxHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLHFCQUFlLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFcEMsc0JBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBQ3JDLGlCQUFXLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFaEMsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUVoQyxlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBRTNCLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLG9CQUFjLEdBQVcsSUFBSSxDQUFDO1FBQzlCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLG9CQUFjLEdBQVcsR0FBRyxDQUFDO1FBRTdCLGFBQU8sR0FBRztZQUNOLElBQUksRUFBRSxDQUFDO1lBQ1AsTUFBTSxFQUFFLENBQUM7U0FDWixDQUFDO1FBRUYsaUJBQVcsR0FBRztZQUNWLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ25DLEdBQUcsRUFBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2pDLElBQUksRUFBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3JDLENBQUE7UUFFRCxjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRXJCLHNCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUV0QixtQkFBYSxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM1QyxrQkFBWSxHQUFHLENBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBRSxDQUFDO1FBQy9ELG1CQUFhLEdBQUcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDN0Usa0JBQVksR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLGtCQUFZLEdBQUcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDNUUscUJBQWUsR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQzs7SUFJMUUsQ0FBQztJQUVELHVDQUFtQixHQUFuQjs7UUFBQSxpQkFTQztRQVJHO1lBQ0ksR0FBQyxPQUFPLElBQUcsVUFBQyxHQUFHLElBQU8sS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUM7WUFDekMsR0FBQyxRQUFRLElBQUcsVUFBQyxHQUFHLElBQU8sS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUM7WUFDM0MsR0FBQyxPQUFPLElBQUcsVUFBQyxHQUFHLElBQU8sS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUM7WUFDekMsR0FBQyxTQUFTLElBQUcsVUFBQyxHQUFHLElBQU8sS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUM7WUFDN0MsR0FBQyxRQUFRLElBQUcsVUFBQyxHQUFHLElBQU8sS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUM7WUFDM0MsR0FBQyxLQUFLLElBQUcsVUFBQyxHQUFHLElBQU8sS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUM7ZUFDeEM7SUFDTCxDQUFDO0lBRUQsMkJBQU8sR0FBUCxVQUFRLEdBQUc7UUFHUCxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFFYixrQkFBUSxDQUFDLElBQUksQ0FBQyxzQkFBUyxDQUFDLFlBQVksRUFBRTtnQkFDbEMsSUFBSSxFQUFFLFFBQVE7YUFDakIsQ0FBQyxDQUFDO1lBRUgsT0FBTztTQUVWO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBRXJDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztRQUVuQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckMsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNyQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUMvQztTQUNKO1FBRUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDO1FBRXRDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoRDtRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBRTNDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUV4QixJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFFdkMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpCLGtCQUFRLENBQUMsSUFBSSxDQUFDLHNCQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFMUMsQ0FBQztJQUVELDRCQUFRLEdBQVIsVUFBUyxHQUFHO1FBRVIsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBRTVCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUVyQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUV6QyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFFbkUsa0JBQVEsQ0FBQyxJQUFJLENBQUMsc0JBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUV2QyxDQUFDO0lBRUQsMkJBQU8sR0FBUCxVQUFRLEdBQUc7UUFFUCxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFFNUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWhCLElBQUksQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztRQUMxRCxJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFFakMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpCLGtCQUFRLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFFekMsQ0FBQztJQUVELDZCQUFTLEdBQVQsVUFBVSxHQUFHO1FBQ1QsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDOUIsa0JBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCx5QkFBSyxHQUFMLFVBQU0sR0FBRztRQUVMLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFFMUIsa0JBQVEsQ0FBQyxJQUFJLENBQUMsc0JBQVMsQ0FBQyxrQkFBa0IsRUFBRTtZQUN4QyxLQUFLLEVBQUUsS0FBSztTQUNmLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCw0QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzNDLENBQUM7SUFFRCw2QkFBUyxHQUFUO1FBQUEsaUJBaUNDO1FBL0JHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVoQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUV2QixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7UUFDYixJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWpDLElBQUksTUFBTSxHQUFHO1lBRVQsWUFBWSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUVsQyxJQUFJLEtBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLEtBQUksQ0FBQyxXQUFXLElBQUksS0FBSyxFQUFFO2dCQUNuRCxPQUFPO2FBQ1Y7WUFFRCxJQUFJLElBQUksSUFBSSxDQUFDO1lBQ2IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztZQUVqRCxLQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQztZQUV0QixJQUFJLEtBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFO2dCQUN0QixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hCLE9BQU87YUFDVjtZQUVELEtBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRTVELENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVuRCxDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELDRCQUFRLEdBQVIsVUFBUyxHQUFHO1FBQ1IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFDckMsa0JBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwyQkFBTyxHQUFQO1FBQ0ksT0FBUSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELHVDQUFtQixHQUFuQixVQUFvQixFQUFXO1FBRTNCLElBQUksT0FBTyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBRTFELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFdEMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM1QixJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDcEQ7UUFFRCxPQUFPLElBQUksQ0FBQztJQUVoQixDQUFDO0lBRUQsc0NBQWtCLEdBQWxCLFVBQW1CLEVBQVc7UUFFMUIsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBRXJCLElBQUksT0FBTyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBRXpELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUMzRTtRQUVELE9BQU8sSUFBSSxDQUFDO0lBRWhCLENBQUM7SUFFRCwyQ0FBdUIsR0FBdkI7UUFDSSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCw4QkFBVSxHQUFWO1FBQ0ksT0FBUSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELHNCQUFJLG1DQUFZO2FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7YUFFRCxVQUFpQixLQUFhO1lBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7OztPQUpBO0lBTUQsc0JBQUksc0NBQWU7YUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqQyxDQUFDO2FBRUQsVUFBb0IsS0FBYTtZQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUM7OztPQUpBO0lBTUQsc0JBQUksNEJBQUs7YUFBVDtZQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7WUFDdkQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFVLEtBQWM7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQzs7O09BSkE7SUFNTCxnQkFBQztBQUFELENBN1FBLEFBNlFDLENBN1FzQyxvQkFBVSxHQTZRaEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnRNbmcgZnJvbSBcIi4uLy4uL21hbmFnZXIvRXZlbnRNbmdcIjtcclxuaW1wb3J0IHsgTG9hZEV2ZW50LCBNYWluRXZlbnQgfSBmcm9tIFwiLi4vY29uc3QvRXZlbnRDb25zdFwiO1xyXG5pbXBvcnQgSURhdGFNb2RlbCBmcm9tIFwiLi4vSURhdGFNb2RlbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1vZGVsIGV4dGVuZHMgSURhdGFNb2RlbCB7XHJcblxyXG4gICAgcHJpdmF0ZSBfbWluZVNlbGVjdElEOiBudW1iZXIgPSAwO1xyXG4gICAgbWluZUxpc3Q6IG51bWJlcltdID0gWzAsIDAsIDAsIDAsIDBdO1xyXG4gICAgbWluZUxldmVsOiBudW1iZXJbXSA9IFsxLCAxLCAxLCAxLCAxXTtcclxuICAgIG1pbmVTa2luOiBudW1iZXJbXSA9IFswLCAwLCAwLCAwLCAwXTtcclxuICAgIG1pbmVBY2Nlc3NvcmllczogbnVtYmVyW10gPSBbMCwgMCwgMCwgMCwgMF07XHJcblxyXG4gICAgcHJpdmF0ZSBfcGFydG5lclNlbGVjdElEOiBudW1iZXIgPSAwO1xyXG4gICAgcGFydG5lckxpc3Q6IG51bWJlcltdID0gWzAsIDAsIDAsIDAsIDBdO1xyXG5cclxuICAgIHByaXZhdGUgX2NhbkdvOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgZ29sZFBvaW50OiBudW1iZXIgPSAwO1xyXG4gICAgc2lsdmVyUG9pbnQ6IG51bWJlciA9IDA7XHJcbiAgICB3YXJlaG91c2VQb2ludDogbnVtYmVyID0gMDtcclxuXHJcbiAgICB0aW1lQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBjb3VudERvd25UaW1lcjogbnVtYmVyID0gbnVsbDtcclxuICAgIGN1cnJlbnRUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgZ3JhbmRUb3RhbFRpbWU6IG51bWJlciA9IDEyMDtcclxuXHJcbiAgICBjb2xsZWN0ID0ge1xyXG4gICAgICAgIGdvbGQ6IDAsXHJcbiAgICAgICAgc2lsdmVyOiAwXHJcbiAgICB9O1xyXG5cclxuICAgIGxldmVsQ29uZmlnID0ge1xyXG4gICAgICAgIHNpbHZlcjogWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgIGNhbjogIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICByYXRlOiAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgfVxyXG5cclxuICAgIGNhbkNvdW50OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG1pbmVTa2luTGlzdERhdGEgPSBbXTtcclxuXHJcbiAgICBsZXZlbFNraW5OYW1lID0gW1wib2JqX1NcIiwgXCJvYmpfTVwiLCBcIm9ial9MXCJdO1xyXG4gICAgbWluZUJvZHlOYW1lID0gWyBcInBldDAxXCIsIFwicGV0MDFcIiwgXCJwZXQwMVwiLCBcInBldDAxXCIsIFwicGV0MDFcIiBdO1xyXG4gICAgbWluZUZsb29yTmFtZSA9IFtcImZsb29yXzAxXCIsIFwiZmxvb3JfMDFcIiwgXCJmbG9vcl8wMVwiLCBcImZsb29yXzAxXCIsIFwiZmxvb3JfMDFcIl07XHJcbiAgICBtaW5lU2tpbk5hbWUgPSBbXCJwZXQwMVwiLF07XHJcbiAgICBtaW5lUm9hZE5hbWUgPSBbXCJtYXBfZ3BnMVwiLCBcIm1hcF9ncGcxXCIsIFwibWFwX2dwZzFcIiwgXCJtYXBfZ3BnMVwiLCBcIm1hcF9ncGcxXCJdO1xyXG4gICAgcGFydG5lckJvZHlOYW1lID0gW1wibWluaW5nMVwiLCBcIm1pbmluZzFcIiwgXCJtaW5pbmcxXCIsIFwibWluaW5nMVwiLCBcIm1pbmluZzFcIl07XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJHYW1lXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKTogb2JqZWN0IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBbJ3N0YXJ0J106IChtc2cpID0+IHsgdGhpcy5vblN0YXJ0KG1zZykgfSxcclxuICAgICAgICAgICAgWydhY3Rpb24nXTogKG1zZykgPT4geyB0aGlzLm9uQWN0aW9uKG1zZykgfSxcclxuICAgICAgICAgICAgWydvdGhlciddOiAobXNnKSA9PiB7IHRoaXMub25PdGhlcihtc2cpIH0sXHJcbiAgICAgICAgICAgIFsndXBncmFkZSddOiAobXNnKSA9PiB7IHRoaXMub25VcGdyYWRlKG1zZykgfSxcclxuICAgICAgICAgICAgWydnZXRiYWcnXTogKG1zZykgPT4geyB0aGlzLm9uR2V0QmFnKG1zZykgfSxcclxuICAgICAgICAgICAgWyd1c2UnXTogKG1zZykgPT4geyB0aGlzLm9uVXNlKG1zZykgfSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TdGFydChtc2cpOiB2b2lkIHtcclxuXHJcblxyXG4gICAgICAgIGlmIChtc2cgPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgRXZlbnRNbmcuZW1pdChNYWluRXZlbnQuTUVTU0FHRV9TSE9XLCB7XHJcbiAgICAgICAgICAgICAgICBjb2RlOiBcIlNfOTEwMFwiXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ29sZFBvaW50ID0gbXNnLndhbGxldC5nb2xkO1xyXG4gICAgICAgIHRoaXMuc2lsdmVyUG9pbnQgPSBtc2cud2FsbGV0LnNpbHZlcjtcclxuXHJcbiAgICAgICAgdGhpcy5taW5lU2VsZWN0SUQgPSBtc2cuY3VycmVudFBldDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cucGV0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gbXNnLnBldFtpXTtcclxuICAgICAgICAgICAgdGhpcy5taW5lTGlzdFtpXSA9IGRhdGEub3duID8gMSA6IDA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1pbmVMaXN0W2ldID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWluZUxldmVsW2ldID0gZGF0YS5pbmZvLmxldmVsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taW5lU2tpbltpXSA9IGRhdGEuaW5mby5za2luLmlkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taW5lQWNjZXNzb3JpZXNbaV0gPSBkYXRhLmluZm8uZGVjby5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wYXJ0bmVyU2VsZWN0SUQgPSBtc2cuY3VycmVudEVsZjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cuZWxmLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFydG5lckxpc3RbaV0gPSBtc2cuZWxmW2ldLm93biA/IDEgOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sZXZlbENvbmZpZy5zaWx2ZXIgPSBtc2cudXBncmFkZS5zaWx2ZXI7XHJcbiAgICAgICAgdGhpcy5sZXZlbENvbmZpZy5jYW4gPSBtc2cudXBncmFkZS5jYW47XHJcbiAgICAgICAgdGhpcy5sZXZlbENvbmZpZy5yYXRlID0gbXNnLnVwZ3JhZGUuY2hhbmNlO1xyXG5cclxuICAgICAgICB0aGlzLmNhbkNvdW50ID0gbXNnLmNhbjtcclxuXHJcbiAgICAgICAgdGhpcy5ncmFuZFRvdGFsVGltZSA9IG1zZy5vdGhlci50aW1lO1xyXG4gICAgICAgIHRoaXMud2FyZWhvdXNlUG9pbnQgPSBtc2cub3RoZXIuZXhwZWN0O1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVTdGFydCgpO1xyXG5cclxuICAgICAgICBFdmVudE1uZy5lbWl0KExvYWRFdmVudC5MT0FEX1NVQ0NFU1MpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkFjdGlvbihtc2cpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKG1zZyA9PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICB0aGlzLmdvbGRQb2ludCA9IG1zZy53YWxsZXQuZ29sZDtcclxuICAgICAgICB0aGlzLnNpbHZlclBvaW50ID0gbXNnLndhbGxldC5zaWx2ZXI7XHJcblxyXG4gICAgICAgIHRoaXMuY29sbGVjdC5nb2xkID0gbXNnLmdldG1pbmUuZ29sZDtcclxuICAgICAgICB0aGlzLmNvbGxlY3Quc2lsdmVyID0gbXNnLmdldG1pbmUuc2lsdmVyO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb2xsZWN0LmdvbGQgPT0gMCAmJiB0aGlzLmNvbGxlY3Quc2lsdmVyID09IDApIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIEV2ZW50TW5nLmVtaXQoTWFpbkV2ZW50LkdFVF9QT0lOVCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uT3RoZXIobXNnKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmIChtc2cgPT0gbnVsbCkgeyByZXR1cm47IH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRpbWVTdG9wKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JhbmRUb3RhbFRpbWUgPSBtc2cudGltZSA+IDQzMjAwID8gNDMyMDAgOiBtc2cudGltZTtcclxuICAgICAgICB0aGlzLndhcmVob3VzZVBvaW50ID0gbXNnLmV4cGVjdDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRpbWVTdGFydCgpO1xyXG5cclxuICAgICAgICBFdmVudE1uZy5lbWl0KFwiTUlORV9HRU5FUkFMX1VQREFURVwiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25VcGdyYWRlKG1zZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2FuQ291bnQgPSBtc2cuY2FuO1xyXG4gICAgICAgIHRoaXMuZ29sZFBvaW50ID0gbXNnLmdvbGQ7XHJcbiAgICAgICAgdGhpcy5zaWx2ZXJQb2ludCA9IG1zZy5zaWx2ZXI7XHJcbiAgICAgICAgRXZlbnRNbmcuZW1pdChcIlBFVF9VUEdSQURFXCIsIG1zZyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Vc2UobXNnKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZSA9IG1zZy5pc1N1Y2Nlc3M7XHJcblxyXG4gICAgICAgIEV2ZW50TW5nLmVtaXQoTWFpbkV2ZW50LkVOVEVSX01JTkVfQ09MTEVDVCwge1xyXG4gICAgICAgICAgICBzdGF0ZTogc3RhdGUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRpbWVJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSB0aGlzLmdyYW5kVG90YWxUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHRpbWVTdGFydCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lSW5pdCgpO1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVBY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICBsZXQgdGltZSA9IDA7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgIGxldCBhY3Rpb24gPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jb3VudERvd25UaW1lcik7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA8IDAgfHwgdGhpcy5jdXJyZW50VGltZSA+PSA0MzIwMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aW1lICs9IDEwMDA7XHJcbiAgICAgICAgICAgIGxldCBkaWZmID0gKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnQpIC0gdGltZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUgKz0gMTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lU3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvdW50RG93blRpbWVyID0gc2V0VGltZW91dChhY3Rpb24sICgxMDAwIC0gZGlmZikpO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmNvdW50RG93blRpbWVyID0gc2V0VGltZW91dChhY3Rpb24sIDEwMDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0aW1lU3RvcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRpbWVBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jb3VudERvd25UaW1lcik7XHJcbiAgICB9XHJcbiAgICBvbkdldEJhZyhtc2cpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1pbmVTa2luTGlzdERhdGEgPSBtc2cuc2tpbkxpc3Q7XHJcbiAgICAgICAgRXZlbnRNbmcuZW1pdChcIk9QRU5fU0tJTl9QT1BcIiwgbXNnKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNNaW5lKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAgdGhpcy5taW5lTGlzdFt0aGlzLm1pbmVTZWxlY3RJRF0gIT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQZXRCb2R5VGhlbWVOYW1lKGlkPzogbnVtYmVyKTogc3RyaW5nIHtcclxuXHJcbiAgICAgICAgbGV0IGNoZWNrSUQgPSBpZCA9PSAwIHx8IGlkID4gMCA/ICBpZCA6IHRoaXMubWluZVNlbGVjdElEO1xyXG5cclxuICAgICAgICBsZXQgbmFtZSA9IHRoaXMubWluZUJvZHlOYW1lW2NoZWNrSURdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5taW5lU2tpbltjaGVja0lEXSA+IDApIHtcclxuICAgICAgICAgICAgbmFtZSA9IHRoaXMubWluZVNraW5OYW1lW3RoaXMubWluZVNraW5bY2hlY2tJRF1dO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFBldEJvZHlTa2luTmFtZShpZD86IG51bWJlcik6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGxldCBuYW1lID0gXCJkZWZhdWx0XCI7XHJcblxyXG4gICAgICAgIGxldCBjaGVja0lEID0gaWQgPT0gMCB8fCBpZCA+IDAgPyBpZCA6IHRoaXMubWluZVNlbGVjdElEO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5taW5lU2tpbltjaGVja0lEXSA9PSAwKSB7XHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGlzLmxldmVsU2tpbk5hbWVbTWF0aC5mbG9vcigodGhpcy5taW5lTGV2ZWxbY2hlY2tJRF0gLSAxKSAvIDMpXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFBhcnRuZXJCb2R5VGhlbWVOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFydG5lckJvZHlOYW1lW3RoaXMucGFydG5lclNlbGVjdElEXTtcclxuICAgIH1cclxuICAgIGhhc1BhcnRuZXIoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICB0aGlzLnBhcnRuZXJMaXN0W3RoaXMucGFydG5lclNlbGVjdElEXSAhPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtaW5lU2VsZWN0SUQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWluZVNlbGVjdElEO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBtaW5lU2VsZWN0SUQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21pbmVTZWxlY3RJRCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwYXJ0bmVyU2VsZWN0SUQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGFydG5lclNlbGVjdElEO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBwYXJ0bmVyU2VsZWN0SUQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3BhcnRuZXJTZWxlY3RJRCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjYW5HbygpOiBib29sZWFuIHtcclxuICAgICAgICB0aGlzLl9jYW5HbyA9ICEoIXRoaXMuaGFzTWluZSgpIHx8ICF0aGlzLmhhc1BhcnRuZXIoKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbkdvO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBjYW5Hbyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2NhbkdvID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/scene/DataGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0fdd3GZQGJGxqJ+FslCjHX8', 'DataGame');
// script/data/scene/DataGame.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var ccclass = cc._decorator.ccclass;
var DataGame = /** @class */ (function (_super) {
    __extends(DataGame, _super);
    function DataGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataGame.prototype.onLoad = function () {
        var parent = this.node.getParent();
        this.Canvas = parent.getChildByName("Canvas");
        this.mine_mng_holder = this.Canvas.getChildByName("mine_mng_holder");
        this.mine_holder = this.Canvas.getChildByName("mine_holder");
        this.info_pop_holder = this.Canvas.getChildByName("info_pop_holder");
        this.skin_pop_holder = this.Canvas.getChildByName("skin_pop_holder");
        this.upgrade_holder = this.Canvas.getChildByName("upgrade_holder");
        this.load_tip = this.Canvas.getChildByName("load_tip");
        this.btn_close = this.Canvas.getChildByName("btn_close");
        this.btn_info = this.Canvas.getChildByName("btn_info");
        this.ver_str = this.Canvas.getChildByName("ver_str").getComponent(cc.Label);
    };
    DataGame = __decorate([
        ccclass
    ], DataGame);
    return DataGame;
}(cc.Component));
exports.default = DataGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxzY2VuZVxcRGF0YUdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVEsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBbUI7QUFHbEM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBNEJBLENBQUM7SUFkRyx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUExQmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E0QjVCO0lBQUQsZUFBQztDQTVCRCxBQTRCQyxDQTVCcUMsRUFBRSxDQUFDLFNBQVMsR0E0QmpEO2tCQTVCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBDYW52YXM6IGNjLk5vZGU7XHJcbiAgICBtaW5lX21uZ19ob2xkZXI6IGNjLk5vZGU7XHJcbiAgICBtaW5lX2hvbGRlcjogY2MuTm9kZTtcclxuICAgIGluZm9fcG9wX2hvbGRlcjogY2MuTm9kZTtcclxuICAgIHNraW5fcG9wX2hvbGRlcjogY2MuTm9kZTtcclxuICAgIHVwZ3JhZGVfaG9sZGVyOiBjYy5Ob2RlO1xyXG4gICAgbG9hZF90aXA6IGNjLk5vZGU7XHJcbiAgICBidG5fY2xvc2U6IGNjLk5vZGU7XHJcbiAgICBidG5faW5mbzogY2MuTm9kZTtcclxuXHJcbiAgICB2ZXJfc3RyOiBjYy5MYWJlbDtcclxuXHJcbiAgICBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMubm9kZS5nZXRQYXJlbnQoKTtcclxuICAgICAgICB0aGlzLkNhbnZhcyA9IHBhcmVudC5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKTtcclxuICAgICAgICB0aGlzLm1pbmVfbW5nX2hvbGRlciA9IHRoaXMuQ2FudmFzLmdldENoaWxkQnlOYW1lKFwibWluZV9tbmdfaG9sZGVyXCIpO1xyXG4gICAgICAgIHRoaXMubWluZV9ob2xkZXIgPSB0aGlzLkNhbnZhcy5nZXRDaGlsZEJ5TmFtZShcIm1pbmVfaG9sZGVyXCIpO1xyXG4gICAgICAgIHRoaXMuaW5mb19wb3BfaG9sZGVyID0gdGhpcy5DYW52YXMuZ2V0Q2hpbGRCeU5hbWUoXCJpbmZvX3BvcF9ob2xkZXJcIik7XHJcbiAgICAgICAgdGhpcy5za2luX3BvcF9ob2xkZXIgPSB0aGlzLkNhbnZhcy5nZXRDaGlsZEJ5TmFtZShcInNraW5fcG9wX2hvbGRlclwiKTtcclxuICAgICAgICB0aGlzLnVwZ3JhZGVfaG9sZGVyID0gdGhpcy5DYW52YXMuZ2V0Q2hpbGRCeU5hbWUoXCJ1cGdyYWRlX2hvbGRlclwiKTtcclxuICAgICAgICB0aGlzLmxvYWRfdGlwID0gdGhpcy5DYW52YXMuZ2V0Q2hpbGRCeU5hbWUoXCJsb2FkX3RpcFwiKTtcclxuICAgICAgICB0aGlzLmJ0bl9jbG9zZSA9IHRoaXMuQ2FudmFzLmdldENoaWxkQnlOYW1lKFwiYnRuX2Nsb3NlXCIpO1xyXG4gICAgICAgIHRoaXMuYnRuX2luZm8gPSB0aGlzLkNhbnZhcy5nZXRDaGlsZEJ5TmFtZShcImJ0bl9pbmZvXCIpO1xyXG4gICAgICAgIHRoaXMudmVyX3N0ciA9IHRoaXMuQ2FudmFzLmdldENoaWxkQnlOYW1lKFwidmVyX3N0clwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/lang/NTD.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1a0dmpxSdCiqqmWG39U2Fb', 'NTD');
// script/lang/NTD.js

"use strict";

module.exports = {
  "S_9100": '連線錯誤!',
  "S_9001": '尚未開放!',
  "S_9102": '操作失敗!',
  "T_001": '您還未有小夥伴喔\n快去得到一隻你的小夥伴吧!',
  "T_002": '您還未有礦機喔\n快去得到一隻你的礦機吧!',
  "T_003": '您還未選定寵物喔',
  "T_004": '您還未選定小夥伴喔',
  "T_005": '未選擇',
  "T_006": 'LV.',
  "T_007": '使用!',
  "T_008": '要選哪一個呢?',
  "T_009": '您還未雍有此礦機喔!',
  "T_100": '神奇罐頭',
  "T_101": '--',
  "T_102": '--',
  "T_103": '升級至等級',
  "T_104": '成功率',
  "T_105": '嘩!!!我覺得全身\n\r充滿力量~',
  "T_106": '我相信下次一定\n\r會成功的!!',
  "T_107": '等級已達上限!!',
  "T_108": '您的銀幣不足喔~',
  "T_109": '您的罐頭不足喔~',
  "T_110": '飾品',
  "T_111": '造型',
  "T_112": '不顯示飾品',
  "T_113": '不顯示造型',
  "T_114": '空',
  "I_001": '礦機功能',
  "I_002": '礦機每小時都會給予玩家一定數量的錢幣，每過六小時可領一次，十二小時即達上限不再累積。!',
  "I_003": '礦機等級',
  "I_004": '礦機會隨著等級的成長而增加所得的獎勵。消耗罐頭及銀幣有一定機率可以提升礦機等級。'
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsYW5nXFxOVEQuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBR2IsWUFBVSxPQUhHO0FBSWIsWUFBVSxPQUpHO0FBS2IsWUFBVSxPQUxHO0FBT2IsV0FBUyx5QkFQSTtBQVFiLFdBQVMsdUJBUkk7QUFTYixXQUFTLFVBVEk7QUFVYixXQUFTLFdBVkk7QUFXYixXQUFTLEtBWEk7QUFZYixXQUFTLEtBWkk7QUFhYixXQUFTLEtBYkk7QUFjYixXQUFTLFNBZEk7QUFlYixXQUFTLFlBZkk7QUFnQmIsV0FBUyxNQWhCSTtBQWlCYixXQUFTLElBakJJO0FBa0JiLFdBQVMsSUFsQkk7QUFtQmIsV0FBUyxPQW5CSTtBQW9CYixXQUFTLEtBcEJJO0FBcUJiLFdBQVMsb0JBckJJO0FBc0JiLFdBQVMsbUJBdEJJO0FBdUJiLFdBQVMsVUF2Qkk7QUF3QmIsV0FBUyxVQXhCSTtBQXlCYixXQUFTLFVBekJJO0FBMEJiLFdBQVMsSUExQkk7QUEyQmIsV0FBUyxJQTNCSTtBQTRCYixXQUFTLE9BNUJJO0FBNkJiLFdBQVMsT0E3Qkk7QUE4QmIsV0FBUyxHQTlCSTtBQWdDYixXQUFTLE1BaENJO0FBaUNiLFdBQVMsNkNBakNJO0FBa0NiLFdBQVMsTUFsQ0k7QUFtQ2IsV0FBUztBQW5DSSxDQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG5cclxuICAgIFwiU185MTAwXCI6ICfpgKPnt5rpjK/oqqQhJyxcclxuICAgIFwiU185MDAxXCI6ICflsJrmnKrplovmlL4hJyxcclxuICAgIFwiU185MTAyXCI6ICfmk43kvZzlpLHmlZchJyxcclxuXHJcbiAgICBcIlRfMDAxXCI6ICfmgqjpgoTmnKrmnInlsI/lpKXkvLTllpRcXG7lv6vljrvlvpfliLDkuIDpmrvkvaDnmoTlsI/lpKXkvLTlkKchJyxcclxuICAgIFwiVF8wMDJcIjogJ+aCqOmChOacquacieekpuapn+WWlFxcbuW/q+WOu+W+l+WIsOS4gOmau+S9oOeahOekpuapn+WQpyEnLFxyXG4gICAgXCJUXzAwM1wiOiAn5oKo6YKE5pyq6YG45a6a5a+154mp5ZaUJyxcclxuICAgIFwiVF8wMDRcIjogJ+aCqOmChOacqumBuOWumuWwj+WkpeS8tOWWlCcsXHJcbiAgICBcIlRfMDA1XCI6ICfmnKrpgbjmk4cnLFxyXG4gICAgXCJUXzAwNlwiOiAnTFYuJyxcclxuICAgIFwiVF8wMDdcIjogJ+S9v+eUqCEnLFxyXG4gICAgXCJUXzAwOFwiOiAn6KaB6YG45ZOq5LiA5YCL5ZGiPycsXHJcbiAgICBcIlRfMDA5XCI6ICfmgqjpgoTmnKrpm43mnInmraTnpKbmqZ/llpQhJyxcclxuICAgIFwiVF8xMDBcIjogJ+elnuWlh+e9kOmgrScsXHJcbiAgICBcIlRfMTAxXCI6ICctLScsXHJcbiAgICBcIlRfMTAyXCI6ICctLScsXHJcbiAgICBcIlRfMTAzXCI6ICfljYfntJroh7PnrYnntJonLFxyXG4gICAgXCJUXzEwNFwiOiAn5oiQ5Yqf546HJyxcclxuICAgIFwiVF8xMDVcIjogJ+WYqSEhIeaIkeimuuW+l+WFqOi6q1xcblxccuWFhea7v+WKm+mHj34nLFxyXG4gICAgXCJUXzEwNlwiOiAn5oiR55u45L+h5LiL5qyh5LiA5a6aXFxuXFxy5pyD5oiQ5Yqf55qEISEnLFxyXG4gICAgXCJUXzEwN1wiOiAn562J57Sa5bey6YGU5LiK6ZmQISEnLFxyXG4gICAgXCJUXzEwOFwiOiAn5oKo55qE6YqA5bmj5LiN6Laz5ZaUficsXHJcbiAgICBcIlRfMTA5XCI6ICfmgqjnmoTnvZDpoK3kuI3otrPllpR+JyxcclxuICAgIFwiVF8xMTBcIjogJ+mjvuWTgScsXHJcbiAgICBcIlRfMTExXCI6ICfpgKDlnosnLFxyXG4gICAgXCJUXzExMlwiOiAn5LiN6aGv56S66aO+5ZOBJyxcclxuICAgIFwiVF8xMTNcIjogJ+S4jemhr+ekuumAoOWeiycsXHJcbiAgICBcIlRfMTE0XCI6ICfnqbonLFxyXG5cclxuICAgIFwiSV8wMDFcIjogJ+ekpuapn+WKn+iDvScsXHJcbiAgICBcIklfMDAyXCI6ICfnpKbmqZ/mr4/lsI/mmYLpg73mnIPntabkuojnjqnlrrbkuIDlrprmlbjph4/nmoTpjKLluaPvvIzmr4/pgY7lha3lsI/mmYLlj6/poJjkuIDmrKHvvIzljYHkuozlsI/mmYLljbPpgZTkuIrpmZDkuI3lho3ntK/nqY3jgIIhJyxcclxuICAgIFwiSV8wMDNcIjogJ+ekpuapn+etiee0micsXHJcbiAgICBcIklfMDA0XCI6ICfnpKbmqZ/mnIPpmqjokZfnrYnntJrnmoTmiJDplbfogIzlop7liqDmiYDlvpfnmoTnjY7li7XjgILmtojogJfnvZDpoK3lj4rpioDluaPmnInkuIDlrprmqZ/njoflj6/ku6Xmj5DljYfnpKbmqZ/nrYnntJrjgIInLFxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/AssetsMng.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0935a8N6rJPWKXmhvgo3hu/', 'AssetsMng');
// script/manager/AssetsMng.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Assets_1 = require("../data/Assets");
var EventMng_1 = require("../manager/EventMng");
var EventConst_1 = require("../data/const/EventConst");
var AssetsMng = /** @class */ (function () {
    function AssetsMng() {
    }
    AssetsMng.prototype.init = function () {
    };
    AssetsMng.prototype.onPreLoad = function () {
        this.onGamePrefabLoad();
    };
    AssetsMng.prototype.onPreLoadDone = function () {
        EventMng_1.default.emit(EventConst_1.LoadEvent.LOAD_PRELOAD_DONE);
    };
    AssetsMng.prototype.onGameSpineLoad = function () {
        var _this = this;
        var arr = Assets_1.default.getGameSpineUrls();
        cc.loader.loadResArray(arr, sp.SkeletonData, function (error, data) {
            _this.onGameSpineDone(error, data);
        });
    };
    AssetsMng.prototype.onGameSpineDone = function (error, data) {
        if (!error) {
            this.setAssets(data, '.spine');
            this.onPreLoadDone();
        }
        else {
            console.log(error);
        }
    };
    AssetsMng.prototype.onGameAssetsLoad = function () {
        var _this = this;
        var arr = Assets_1.default.getGameAssetsUrls();
        cc.loader.loadResArray(arr, cc.SpriteAtlas, function (error, data) {
            _this.onGameAssetsDone(error, data);
        });
    };
    AssetsMng.prototype.onGameAssetsDone = function (error, data) {
        if (!error) {
            this.setAssets(data);
            this.onGameSpineLoad();
        }
        else {
            console.log(error);
        }
    };
    AssetsMng.prototype.onGamePrefabLoad = function () {
        var _this = this;
        var arr = Assets_1.default.getGameAssetsPrefabUrls();
        cc.loader.loadResArray(arr, function (error, data) {
            _this.onGamePrefabLoadDone(error, data);
        });
    };
    AssetsMng.prototype.onGamePrefabLoadDone = function (error, data) {
        if (!error) {
            this.setAssets(data);
            this.onGameAssetsLoad();
        }
        else {
            console.log(error);
        }
    };
    AssetsMng.prototype.setAssets = function (data, name) {
        for (var i = 0; i < data.length; i++) {
            var valName = data[i]._name;
            if (name) {
                valName += name;
            }
            Assets_1.default[valName] = data[i];
        }
    };
    AssetsMng.prototype.getAssets = function (name) {
        if (Assets_1.default[name]) {
            return Assets_1.default[name];
        }
    };
    AssetsMng.prototype.getHeadPhotoImg = function (id) {
        var plist = this.getAssets("head_photo.plist");
        if (!plist) {
            return;
        }
        var num = id < 10 ? "0" + id : id;
        return plist.getSpriteFrame("head_" + num);
    };
    return AssetsMng;
}());
exports.default = new AssetsMng();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxBc3NldHNNbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFDcEMsZ0RBQTJDO0FBQzNDLHVEQUFxRDtBQUVyRDtJQUFBO0lBMkdBLENBQUM7SUF6R0csd0JBQUksR0FBSjtJQUVBLENBQUM7SUFFRCw2QkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELGlDQUFhLEdBQWI7UUFDSSxrQkFBUSxDQUFDLElBQUksQ0FBQyxzQkFBUyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUtELG1DQUFlLEdBQWY7UUFBQSxpQkFLQztRQUpHLElBQU0sR0FBRyxHQUFHLGdCQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN0QyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFDLEtBQUssRUFBRSxJQUFJO1lBQ3JELEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG1DQUFlLEdBQWYsVUFBZ0IsS0FBSyxFQUFFLElBQUk7UUFDdkIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjthQUFNO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFHRCxvQ0FBZ0IsR0FBaEI7UUFBQSxpQkFLQztRQUpHLElBQU0sR0FBRyxHQUFHLGdCQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN2QyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLEtBQUssRUFBRSxJQUFJO1lBQ3BELEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBR0Qsb0NBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDUixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMxQjthQUFNO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFHRCxvQ0FBZ0IsR0FBaEI7UUFBQSxpQkFLQztRQUpHLElBQU0sR0FBRyxHQUFHLGdCQUFNLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUM3QyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsVUFBQyxLQUFLLEVBQUUsSUFBSTtZQUNwQyxLQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdDQUFvQixHQUFwQixVQUFxQixLQUFLLEVBQUUsSUFBSTtRQUM1QixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUMzQjthQUFNO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFRCw2QkFBUyxHQUFULFVBQVUsSUFBSSxFQUFFLElBQWE7UUFFekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFFbEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUU1QixJQUFJLElBQUksRUFBRTtnQkFDTixPQUFPLElBQUksSUFBSSxDQUFDO2FBQ25CO1lBRUQsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FJN0I7SUFFTCxDQUFDO0lBR0QsNkJBQVMsR0FBVCxVQUFVLElBQVk7UUFDbEIsSUFBSSxnQkFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2QsT0FBTyxnQkFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUdELG1DQUFlLEdBQWYsVUFBZ0IsRUFBVTtRQUV0QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNSLE9BQU87U0FDVjtRQUVELElBQUksR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQUksRUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbEMsT0FBTyxLQUFLLENBQUMsY0FBYyxDQUFDLFVBQVEsR0FBSyxDQUFDLENBQUM7SUFFL0MsQ0FBQztJQUVMLGdCQUFDO0FBQUQsQ0EzR0EsQUEyR0MsSUFBQTtBQUVELGtCQUFlLElBQUksU0FBUyxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXNzZXRzIGZyb20gXCIuLi9kYXRhL0Fzc2V0c1wiO1xyXG5pbXBvcnQgRXZlbnRNbmcgZnJvbSBcIi4uL21hbmFnZXIvRXZlbnRNbmdcIjtcclxuaW1wb3J0IHsgTG9hZEV2ZW50IH0gZnJvbSBcIi4uL2RhdGEvY29uc3QvRXZlbnRDb25zdFwiO1xyXG5cclxuY2xhc3MgQXNzZXRzTW5nIHtcclxuXHJcbiAgICBpbml0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblByZUxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkdhbWVQcmVmYWJMb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25QcmVMb2FkRG9uZSgpOiB2b2lkIHtcclxuICAgICAgICBFdmVudE1uZy5lbWl0KExvYWRFdmVudC5MT0FEX1BSRUxPQURfRE9ORSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgb25HYW1lU3BpbmVMb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGFyciA9IEFzc2V0cy5nZXRHYW1lU3BpbmVVcmxzKCk7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXNBcnJheShhcnIsIHNwLlNrZWxldG9uRGF0YSwgKGVycm9yLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25HYW1lU3BpbmVEb25lKGVycm9yLCBkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkdhbWVTcGluZURvbmUoZXJyb3IsIGRhdGEpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXNzZXRzKGRhdGEsICcuc3BpbmUnKTtcclxuICAgICAgICAgICAgdGhpcy5vblByZUxvYWREb25lKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgb25HYW1lQXNzZXRzTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBhcnIgPSBBc3NldHMuZ2V0R2FtZUFzc2V0c1VybHMoKTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlc0FycmF5KGFyciwgY2MuU3ByaXRlQXRsYXMsIChlcnJvciwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uR2FtZUFzc2V0c0RvbmUoZXJyb3IsIGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkdhbWVBc3NldHNEb25lKGVycm9yLCBkYXRhKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLnNldEFzc2V0cyhkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5vbkdhbWVTcGluZUxvYWQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkdhbWVQcmVmYWJMb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGFyciA9IEFzc2V0cy5nZXRHYW1lQXNzZXRzUHJlZmFiVXJscygpO1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzQXJyYXkoYXJyLCAoZXJyb3IsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbkdhbWVQcmVmYWJMb2FkRG9uZShlcnJvciwgZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25HYW1lUHJlZmFiTG9hZERvbmUoZXJyb3IsIGRhdGEpIHtcclxuICAgICAgICBpZiAoIWVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXNzZXRzKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLm9uR2FtZUFzc2V0c0xvYWQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEFzc2V0cyhkYXRhLCBuYW1lPzogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IHZhbE5hbWUgPSBkYXRhW2ldLl9uYW1lO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHZhbE5hbWUgKz0gbmFtZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQXNzZXRzW3ZhbE5hbWVdID0gZGF0YVtpXTtcclxuXHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRBc3NldHMobmFtZTogc3RyaW5nKTogYW55e1xyXG4gICAgICAgIGlmIChBc3NldHNbbmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIEFzc2V0c1tuYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldEhlYWRQaG90b0ltZyhpZDogbnVtYmVyKTogY2MuU3ByaXRlRnJhbWUge1xyXG5cclxuICAgICAgICBsZXQgcGxpc3QgPSB0aGlzLmdldEFzc2V0cyhcImhlYWRfcGhvdG8ucGxpc3RcIik7XHJcblxyXG4gICAgICAgIGlmICghcGxpc3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG51bSA9IGlkIDwgMTAgPyBgMCR7aWR9YCA6IGlkO1xyXG4gICAgICAgIHJldHVybiBwbGlzdC5nZXRTcHJpdGVGcmFtZShgaGVhZF8ke251bX1gKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQXNzZXRzTW5nKCk7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/lib/anime.es.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'db9e2P8oX1PXYgteZk3fz/E', 'anime.es');
// script/lib/anime.es.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

/*
 * anime.js v3.0.0
 * (c) 2019 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */
// Defaults
var defaultInstanceSettings = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: 'normal',
  autoplay: true,
  timelineOffset: 0
};
var defaultTweenSettings = {
  duration: 1000,
  delay: 0,
  endDelay: 0,
  easing: 'easeOutElastic(1, .5)',
  round: 0
};
var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective']; // Caching

var cache = {
  CSS: {},
  springs: {}
}; // Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

function applyArguments(func, args) {
  return func.apply(null, args);
}

var is = {
  arr: function arr(a) {
    return Array.isArray(a);
  },
  obj: function obj(a) {
    return stringContains(Object.prototype.toString.call(a), 'Object');
  },
  pth: function pth(a) {
    return is.obj(a) && a.hasOwnProperty('totalLength');
  },
  svg: function svg(a) {
    return a instanceof SVGElement;
  },
  inp: function inp(a) {
    return a instanceof HTMLInputElement;
  },
  dom: function dom(a) {
    return a.nodeType || is.svg(a);
  },
  str: function str(a) {
    return typeof a === 'string';
  },
  fnc: function fnc(a) {
    return typeof a === 'function';
  },
  und: function und(a) {
    return typeof a === 'undefined';
  },
  hex: function hex(a) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
  },
  rgb: function rgb(a) {
    return /^rgb/.test(a);
  },
  hsl: function hsl(a) {
    return /^hsl/.test(a);
  },
  col: function col(a) {
    return is.hex(a) || is.rgb(a) || is.hsl(a);
  },
  key: function key(a) {
    return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes';
  }
}; // Easings

function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(',').map(function (p) {
    return parseFloat(p);
  }) : [];
} // Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js


function spring(string, duration) {
  var params = parseEasingParameters(string);
  var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
  var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
  var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
  var velocity = minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
  var w0 = Math.sqrt(stiffness / mass);
  var zeta = damping / (2 * Math.sqrt(stiffness * mass));
  var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
  var a = 1;
  var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;

  function solver(t) {
    var progress = duration ? duration * t / 1000 : t;

    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
    } else {
      progress = (a + b * progress) * Math.exp(-progress * w0);
    }

    if (t === 0 || t === 1) {
      return t;
    }

    return 1 - progress;
  }

  function getDuration() {
    var cached = cache.springs[string];

    if (cached) {
      return cached;
    }

    var frame = 1 / 6;
    var elapsed = 0;
    var rest = 0;

    while (true) {
      elapsed += frame;

      if (solver(elapsed) === 1) {
        rest++;

        if (rest >= 16) {
          break;
        }
      } else {
        rest = 0;
      }
    }

    var duration = elapsed * frame * 1000;
    cache.springs[string] = duration;
    return duration;
  }

  return duration ? solver : getDuration;
} // Elastic easing adapted from jQueryUI http://api.jqueryui.com/easings/


function elastic(amplitude, period) {
  if (amplitude === void 0) amplitude = 1;
  if (period === void 0) period = .5;
  var a = minMax(amplitude, 1, 10);
  var p = minMax(period, .1, 2);
  return function (t) {
    return t === 0 || t === 1 ? t : -a * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - p / (Math.PI * 2) * Math.asin(1 / a)) * (Math.PI * 2) / p);
  };
} // Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function


function steps(steps) {
  if (steps === void 0) steps = 10;
  return function (t) {
    return Math.round(t * steps) * (1 / steps);
  };
} // BezierEasing https://github.com/gre/bezier-easing


var bezier = function () {
  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  function A(aA1, aA2) {
    return 1.0 - 3.0 * aA2 + 3.0 * aA1;
  }

  function B(aA1, aA2) {
    return 3.0 * aA2 - 6.0 * aA1;
  }

  function C(aA1) {
    return 3.0 * aA1;
  }

  function calcBezier(aT, aA1, aA2) {
    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
  }

  function getSlope(aT, aA1, aA2) {
    return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
  }

  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX,
        currentT,
        i = 0;

    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;

      if (currentX > 0.0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > 0.0000001 && ++i < 10);

    return currentT;
  }

  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < 4; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);

      if (currentSlope === 0.0) {
        return aGuessT;
      }

      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }

    return aGuessT;
  }

  function bezier(mX1, mY1, mX2, mY2) {
    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
      return;
    }

    var sampleValues = new Float32Array(kSplineTableSize);

    if (mX1 !== mY1 || mX2 !== mY2) {
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }

    function getTForX(aX) {
      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }

      --currentSample;
      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);

      if (initialSlope >= 0.001) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }
    }

    return function (x) {
      if (mX1 === mY1 && mX2 === mY2) {
        return x;
      }

      if (x === 0 || x === 1) {
        return x;
      }

      return calcBezier(getTForX(x), mY1, mY2);
    };
  }

  return bezier;
}();

var penner = function () {
  var names = ['Quad', 'Cubic', 'Quart', 'Quint', 'Sine', 'Expo', 'Circ', 'Back', 'Elastic']; // Approximated Penner equations http://matthewlein.com/ceaser/

  var curves = {
    In: [[0.550, 0.085, 0.680, 0.530],
    /* inQuad */
    [0.550, 0.055, 0.675, 0.190],
    /* inCubic */
    [0.895, 0.030, 0.685, 0.220],
    /* inQuart */
    [0.755, 0.050, 0.855, 0.060],
    /* inQuint */
    [0.470, 0.000, 0.745, 0.715],
    /* inSine */
    [0.950, 0.050, 0.795, 0.035],
    /* inExpo */
    [0.600, 0.040, 0.980, 0.335],
    /* inCirc */
    [0.600, -0.280, 0.735, 0.045],
    /* inBack */
    elastic
    /* inElastic */
    ],
    Out: [[0.250, 0.460, 0.450, 0.940],
    /* outQuad */
    [0.215, 0.610, 0.355, 1.000],
    /* outCubic */
    [0.165, 0.840, 0.440, 1.000],
    /* outQuart */
    [0.230, 1.000, 0.320, 1.000],
    /* outQuint */
    [0.390, 0.575, 0.565, 1.000],
    /* outSine */
    [0.190, 1.000, 0.220, 1.000],
    /* outExpo */
    [0.075, 0.820, 0.165, 1.000],
    /* outCirc */
    [0.175, 0.885, 0.320, 1.275],
    /* outBack */
    function (a, p) {
      return function (t) {
        return 1 - elastic(a, p)(1 - t);
      };
    }
    /* outElastic */
    ],
    InOut: [[0.455, 0.030, 0.515, 0.955],
    /* inOutQuad */
    [0.645, 0.045, 0.355, 1.000],
    /* inOutCubic */
    [0.770, 0.000, 0.175, 1.000],
    /* inOutQuart */
    [0.860, 0.000, 0.070, 1.000],
    /* inOutQuint */
    [0.445, 0.050, 0.550, 0.950],
    /* inOutSine */
    [1.000, 0.000, 0.000, 1.000],
    /* inOutExpo */
    [0.785, 0.135, 0.150, 0.860],
    /* inOutCirc */
    [0.680, -0.550, 0.265, 1.550],
    /* inOutBack */
    function (a, p) {
      return function (t) {
        return t < .5 ? elastic(a, p)(t * 2) / 2 : 1 - elastic(a, p)(t * -2 + 2) / 2;
      };
    }
    /* inOutElastic */
    ]
  };
  var eases = {
    linear: [0.250, 0.250, 0.750, 0.750]
  };

  var loop = function loop(coords) {
    curves[coords].forEach(function (ease, i) {
      eases['ease' + coords + names[i]] = ease;
    });
  };

  for (var coords in curves) {
    loop(coords);
  }

  return eases;
}();

function parseEasings(easing, duration) {
  if (is.fnc(easing)) {
    return easing;
  }

  var name = easing.split('(')[0];
  var ease = penner[name];
  var args = parseEasingParameters(easing);

  switch (name) {
    case 'spring':
      return spring(easing, duration);

    case 'cubicBezier':
      return applyArguments(bezier, args);

    case 'steps':
      return applyArguments(steps, args);

    default:
      return is.fnc(ease) ? applyArguments(ease, args) : applyArguments(bezier, ease);
  }
} // Strings


function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch (e) {
    return;
  }
} // Arrays


function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];

  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];

      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }

  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) {
    return a.concat(is.arr(b) ? flattenArray(b) : b);
  }, []);
}

function toArray(o) {
  if (is.arr(o)) {
    return o;
  }

  if (is.str(o)) {
    o = selectString(o) || o;
  }

  if (o instanceof NodeList || o instanceof HTMLCollection) {
    return [].slice.call(o);
  }

  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) {
    return a === val;
  });
} // Objects


function cloneObject(o) {
  var clone = {};

  for (var p in o) {
    clone[p] = o[p];
  }

  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o1) {
    o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
  }

  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o2) {
    o[p] = is.und(o1[p]) ? o2[p] : o1[p];
  }

  return o;
} // Colors


function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return "rgba(" + r + "," + g + "," + b + ",1)";
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;

  function hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1;
    }

    if (t > 1) {
      t -= 1;
    }

    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }

    if (t < 1 / 2) {
      return q;
    }

    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }

    return p;
  }

  var r, g, b;

  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
}

function colorToRgb(val) {
  if (is.rgb(val)) {
    return rgbToRgba(val);
  }

  if (is.hex(val)) {
    return hexToRgba(val);
  }

  if (is.hsl(val)) {
    return hslToRgba(val);
  }
} // Units


function getUnit(val) {
  var split = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);

  if (split) {
    return split[2];
  }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') {
    return 'px';
  }

  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) {
    return 'deg';
  }
} // Values


function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) {
    return val;
  }

  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);

  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) {
    return value;
  }

  var cached = cache.CSS[value + unit];

  if (!is.und(cached)) {
    return cached;
  }

  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (getAttribute(el, prop) || is.svg(el) && el[prop])) {
    return 'attribute';
  }

  if (is.dom(el) && arrayContains(validTransforms, prop)) {
    return 'transform';
  }

  if (is.dom(el) && prop !== 'transform' && getCSSValue(el, prop)) {
    return 'css';
  }

  if (el[prop] != null) {
    return 'object';
  }
}

function getElementTransforms(el) {
  if (!is.dom(el)) {
    return;
  }

  var str = el.style.transform || '';
  var reg = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m;

  while (m = reg.exec(str)) {
    transforms.set(m[1], m[2]);
  }

  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;

  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }

  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform':
      return getTransformValue(target, propName, animatable, unit);

    case 'css':
      return getCSSValue(target, propName, unit);

    case 'attribute':
      return getAttribute(target, propName);

    default:
      return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);

  if (!operator) {
    return to;
  }

  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));

  switch (operator[0][0]) {
    case '+':
      return x + y + u;

    case '-':
      return x - y + u;

    case '*':
      return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) {
    return colorToRgb(val);
  }

  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
  return unit && !/\s/g.test(val) ? unitLess + unit : unitLess;
} // getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744


function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return getAttribute(el, 'width') * 2 + getAttribute(el, 'height') * 2;
}

function getLineLength(el) {
  return getDistance({
    x: getAttribute(el, 'x1'),
    y: getAttribute(el, 'y1')
  }, {
    x: getAttribute(el, 'x2'),
    y: getAttribute(el, 'y2')
  });
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;

  for (var i = 0; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);

    if (i > 0) {
      totalLength += getDistance(previousPos, currentPos);
    }

    previousPos = currentPos;
  }

  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
} // Path animation


function getTotalLength(el) {
  if (el.getTotalLength) {
    return el.getTotalLength();
  }

  switch (el.tagName.toLowerCase()) {
    case 'circle':
      return getCircleLength(el);

    case 'rect':
      return getRectLength(el);

    case 'line':
      return getLineLength(el);

    case 'polyline':
      return getPolylineLength(el);

    case 'polygon':
      return getPolygonLength(el);
  }
}

function setDashoffset(el) {
  var pathLength = getTotalLength(el);
  el.setAttribute('stroke-dasharray', pathLength);
  return pathLength;
} // Motion path


function getParentSvgEl(el) {
  var parentEl = el.parentNode;

  while (is.svg(parentEl)) {
    parentEl = parentEl.parentNode;

    if (!is.svg(parentEl.parentNode)) {
      break;
    }
  }

  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width / viewBox[2],
    h: height / viewBox[3]
  };
}

function getPath(path, percent) {
  var pathEl = is.str(path) ? selectString(path)[0] : path;
  var p = percent || 100;
  return function (property) {
    return {
      property: property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p / 100)
    };
  };
}

function getPathProgress(path, progress) {
  function point(offset) {
    if (offset === void 0) offset = 0;
    var l = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l);
  }

  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);

  switch (path.property) {
    case 'x':
      return (p.x - svg.x) * svg.w;

    case 'y':
      return (p.y - svg.y) * svg.h;

    case 'angle':
      return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
  }
} // Decompose value


function decomposeValue(val, unit) {
  var rgx = /-?\d*\.?\d+/g;
  var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: is.str(val) || unit ? value.split(rgx) : []
  };
} // Animatables


function parseTargets(targets) {
  var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
  return filterArray(targetsArray, function (item, pos, self) {
    return self.indexOf(item) === pos;
  });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {
      target: t,
      id: i,
      total: parsed.length,
      transforms: {
        list: getElementTransforms(t)
      }
    };
  });
} // Properties


function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings); // Override duration if easing is a spring

  if (/^spring/.test(settings.easing)) {
    settings.duration = spring(settings.easing);
  }

  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = l === 2 && !is.obj(prop[0]);

    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) {
        settings.duration = tweenSettings.duration / l;
      }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {
        value: prop
      };
    }
  }

  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = is.obj(v) && !is.pth(v) ? v : {
      value: v
    }; // Default delay value should only be applied to the first tween

    if (is.und(obj.delay)) {
      obj.delay = !i ? tweenSettings.delay : 0;
    } // Default endDelay value should only be applied to the last tween


    if (is.und(obj.endDelay)) {
      obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0;
    }

    return obj;
  }).map(function (k) {
    return mergeObjects(k, settings);
  });
}

function flattenKeyframes(keyframes) {
  var propertyNames = filterArray(flattenArray(keyframes.map(function (key) {
    return Object.keys(key);
  })), function (p) {
    return is.key(p);
  }).reduce(function (a, b) {
    if (a.indexOf(b) < 0) {
      a.push(b);
    }

    return a;
  }, []);
  var properties = {};

  var loop = function loop(i) {
    var propName = propertyNames[i];
    properties[propName] = keyframes.map(function (key) {
      var newKey = {};

      for (var p in key) {
        if (is.key(p)) {
          if (p == propName) {
            newKey.value = key[p];
          }
        } else {
          newKey[p] = key[p];
        }
      }

      return newKey;
    });
  };

  for (var i = 0; i < propertyNames.length; i++) {
    loop(i);
  }

  return properties;
}

function getProperties(tweenSettings, params) {
  var properties = [];
  var keyframes = params.keyframes;

  if (keyframes) {
    params = mergeObjects(flattenKeyframes(keyframes), params);
  }

  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }

  return properties;
} // Tweens


function normalizeTweenValues(tween, animatable) {
  var t = {};

  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);

    if (is.arr(value)) {
      value = value.map(function (v) {
        return getFunctionValue(v, animatable);
      });

      if (value.length === 1) {
        value = value[0];
      }
    }

    t[p] = value;
  }

  t.duration = parseFloat(t.duration);
  t.delay = parseFloat(t.delay);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;

    if (is.und(to)) {
      to = previousValue;
    }

    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
    tween.easing = parseEasings(tween.easing, tween.duration);
    tween.isPath = is.pth(tweenValue);
    tween.isColor = is.col(tween.from.original);

    if (tween.isColor) {
      tween.round = 1;
    }

    previousTween = tween;
    return tween;
  });
} // Tween progress


var setProgressValue = {
  css: function css(t, p, v) {
    return t.style[p] = v;
  },
  attribute: function attribute(t, p, v) {
    return t.setAttribute(p, v);
  },
  object: function object(t, p, v) {
    return t[p] = v;
  },
  transform: function transform(t, p, v, transforms, manual) {
    transforms.list.set(p, v);

    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) {
        str += prop + "(" + value + ") ";
      });
      t.style.transform = str;
    }
  }
}; // Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
} // Animations


function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);

  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end,
      delay: tweens[0].delay,
      endDelay: lastTween.endDelay
    };
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) {
    return !is.und(a);
  });
} // Create Instance


function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;

  var getTlOffset = function getTlOffset(anim) {
    return anim.timelineOffset ? anim.timelineOffset : 0;
  };

  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.duration;
  })) : tweenSettings.duration;
  timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.delay;
  })) : tweenSettings.delay;
  timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.duration - anim.endDelay;
  })) : tweenSettings.endDelay;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration,
    delay: timings.delay,
    endDelay: timings.endDelay
  });
} // Core


var activeInstances = [];
var pausedInstances = [];
var raf;

var engine = function () {
  function play() {
    raf = requestAnimationFrame(step);
  }

  function step(t) {
    var activeInstancesLength = activeInstances.length;

    if (activeInstancesLength) {
      var i = 0;

      while (i < activeInstancesLength) {
        var activeInstance = activeInstances[i];

        if (!activeInstance.paused) {
          activeInstance.tick(t);
        } else {
          var instanceIndex = activeInstances.indexOf(activeInstance);

          if (instanceIndex > -1) {
            activeInstances.splice(instanceIndex, 1);
            activeInstancesLength = activeInstances.length;
          }
        }

        i++;
      }

      play();
    } else {
      raf = cancelAnimationFrame(raf);
    }
  }

  return play;
}();

function handleVisibilityChange() {
  if (document.hidden) {
    activeInstances.forEach(function (ins) {
      return ins.pause();
    });
    pausedInstances = activeInstances.slice(0);
    activeInstances = [];
  } else {
    pausedInstances.forEach(function (ins) {
      return ins.play();
    });
  }
}

document.addEventListener('visibilitychange', handleVisibilityChange); // Public Instance

function anime(params) {
  if (params === void 0) params = {};
  var startTime = 0,
      lastTime = 0,
      now = 0;
  var children,
      childrenLength = 0;
  var resolve = null;

  function makePromise() {
    return window.Promise && new Promise(function (_resolve) {
      return resolve = _resolve;
    });
  }

  var promise = makePromise();
  var instance = createNewInstance(params);

  function toggleInstanceDirection() {
    instance.reversed = !instance.reversed;
    children.forEach(function (child) {
      return child.reversed = instance.reversed;
    });
  }

  function adjustTime(time) {
    return instance.reversed ? instance.duration - time : time;
  }

  function resetTime() {
    startTime = 0;
    lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
  }

  function seekCild(time, child) {
    if (child) {
      child.seek(time - child.timelineOffset);
    }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) {
        seekCild(time, children[i]);
      }
    } else {
      for (var i$1 = childrenLength; i$1--;) {
        seekCild(time, children[i$1]);
      }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;

    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength]; // Only check for keyframes if there is more than one tween

      if (tweenLength) {
        tween = filterArray(tweens, function (t) {
          return insTime < t.end;
        })[0] || tween;
      }

      var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = void 0;

      for (var n = 0; n < toNumbersLength; n++) {
        var value = void 0;
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;

        if (!tween.isPath) {
          value = fromNumber + eased * (toNumber - fromNumber);
        } else {
          value = getPathProgress(tween.value, eased * toNumber);
        }

        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }

        numbers.push(value);
      } // Manual Array.reduce for better performances


      var stringsLength = strings.length;

      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];

        for (var s = 0; s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];

          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }

      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setCallback(cb) {
    if (instance[cb] && !instance.passThrough) {
      instance[cb](instance);
    }
  }

  function countIteration() {
    if (instance.remaining && instance.remaining !== true) {
      instance.remaining--;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insDelay = instance.delay;
    var insEndDelay = insDuration - instance.endDelay;
    var insTime = adjustTime(engineTime);
    instance.progress = minMax(insTime / insDuration * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;

    if (children) {
      syncInstanceChildren(insTime);
    }

    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
      setCallback('begin');
      setCallback('loopBegin');
    }

    if (insTime <= insDelay && instance.currentTime !== 0) {
      setAnimationsProgress(0);
    }

    if (insTime >= insEndDelay && instance.currentTime !== insDuration || !insDuration) {
      setAnimationsProgress(insDuration);
    }

    if (insTime > insDelay && insTime < insEndDelay) {
      if (!instance.changeBegan) {
        instance.changeBegan = true;
        instance.changeCompleted = false;
        setCallback('changeBegin');
      }

      setCallback('change');
      setAnimationsProgress(insTime);
    } else {
      if (instance.changeBegan) {
        instance.changeCompleted = true;
        instance.changeBegan = false;
        setCallback('changeComplete');
      }
    }

    instance.currentTime = minMax(insTime, 0, insDuration);

    if (instance.began) {
      setCallback('update');
    }

    if (engineTime >= insDuration) {
      lastTime = 0;
      countIteration();

      if (instance.remaining) {
        startTime = now;
        setCallback('loopComplete');
        setCallback('loopBegin');

        if (instance.direction === 'alternate') {
          toggleInstanceDirection();
        }
      } else {
        instance.paused = true;

        if (!instance.completed) {
          instance.completed = true;
          setCallback('loopComplete');
          setCallback('complete');

          if ('Promise' in window) {
            resolve();
            promise = makePromise();
          }
        }
      }
    }
  }

  instance.reset = function () {
    var direction = instance.direction;
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.changeBegan = false;
    instance.completed = false;
    instance.changeCompleted = false;
    instance.reversePlayback = false;
    instance.reversed = direction === 'reverse';
    instance.remaining = instance.loop;
    children = instance.children;
    childrenLength = children.length;

    for (var i = childrenLength; i--;) {
      instance.children[i].reset();
    }

    if (instance.reversed && instance.loop !== true || direction === 'alternate' && instance.loop === 1) {
      instance.remaining++;
    }

    setAnimationsProgress(0);
  }; // Set Value helper


  instance.set = function (targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.tick = function (t) {
    now = t;

    if (!startTime) {
      startTime = now;
    }

    setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
  };

  instance.seek = function (time) {
    setInstanceProgress(adjustTime(time));
  };

  instance.pause = function () {
    instance.paused = true;
    resetTime();
  };

  instance.play = function () {
    if (!instance.paused) {
      return;
    }

    instance.paused = false;
    activeInstances.push(instance);
    resetTime();

    if (!raf) {
      engine();
    }
  };

  instance.reverse = function () {
    toggleInstanceDirection();
    resetTime();
  };

  instance.restart = function () {
    instance.reset();
    instance.play();
  };

  instance.finished = promise;
  instance.reset();

  if (instance.autoplay) {
    instance.play();
  }

  return instance;
} // Remove targets from animation


function removeTargetsFromAnimations(targetsArray, animations) {
  for (var a = animations.length; a--;) {
    if (arrayContains(targetsArray, animations[a].animatable.target)) {
      animations.splice(a, 1);
    }
  }
}

function removeTargets(targets) {
  var targetsArray = parseTargets(targets);

  for (var i = activeInstances.length; i--;) {
    var instance = activeInstances[i];
    var animations = instance.animations;
    var children = instance.children;
    removeTargetsFromAnimations(targetsArray, animations);

    for (var c = children.length; c--;) {
      var child = children[c];
      var childAnimations = child.animations;
      removeTargetsFromAnimations(targetsArray, childAnimations);

      if (!childAnimations.length && !child.children.length) {
        children.splice(c, 1);
      }
    }

    if (!animations.length && !children.length) {
      instance.pause();
    }
  }
} // Stagger helpers


function stagger(val, params) {
  if (params === void 0) params = {};
  var direction = params.direction || 'normal';
  var easing = params.easing ? parseEasings(params.easing) : null;
  var grid = params.grid;
  var axis = params.axis;
  var fromIndex = params.from || 0;
  var fromFirst = fromIndex === 'first';
  var fromCenter = fromIndex === 'center';
  var fromLast = fromIndex === 'last';
  var isRange = is.arr(val);
  var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
  var val2 = isRange ? parseFloat(val[1]) : 0;
  var unit = getUnit(isRange ? val[1] : val) || 0;
  var start = params.start || 0 + (isRange ? val1 : 0);
  var values = [];
  var maxValue = 0;
  return function (el, i, t) {
    if (fromFirst) {
      fromIndex = 0;
    }

    if (fromCenter) {
      fromIndex = (t - 1) / 2;
    }

    if (fromLast) {
      fromIndex = t - 1;
    }

    if (!values.length) {
      for (var index = 0; index < t; index++) {
        if (!grid) {
          values.push(Math.abs(fromIndex - index));
        } else {
          var fromX = !fromCenter ? fromIndex % grid[0] : (grid[0] - 1) / 2;
          var fromY = !fromCenter ? Math.floor(fromIndex / grid[0]) : (grid[1] - 1) / 2;
          var toX = index % grid[0];
          var toY = Math.floor(index / grid[0]);
          var distanceX = fromX - toX;
          var distanceY = fromY - toY;
          var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

          if (axis === 'x') {
            value = -distanceX;
          }

          if (axis === 'y') {
            value = -distanceY;
          }

          values.push(value);
        }

        maxValue = Math.max.apply(Math, values);
      }

      if (easing) {
        values = values.map(function (val) {
          return easing(val / maxValue) * maxValue;
        });
      }

      if (direction === 'reverse') {
        values = values.map(function (val) {
          return axis ? val < 0 ? val * -1 : -val : Math.abs(maxValue - val);
        });
      }
    }

    var spacing = isRange ? (val2 - val1) / maxValue : val1;
    return start + spacing * (Math.round(values[i] * 100) / 100) + unit;
  };
} // Timeline


function timeline(params) {
  if (params === void 0) params = {};
  var tl = anime(params);
  tl.duration = 0;

  tl.add = function (instanceParams, timelineOffset) {
    var tlIndex = activeInstances.indexOf(tl);
    var children = tl.children;

    if (tlIndex > -1) {
      activeInstances.splice(tlIndex, 1);
    }

    function passThrough(ins) {
      ins.passThrough = true;
    }

    for (var i = 0; i < children.length; i++) {
      passThrough(children[i]);
    }

    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
    insParams.targets = insParams.targets || params.targets;
    var tlDuration = tl.duration;
    insParams.autoplay = false;
    insParams.direction = tl.direction;
    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
    passThrough(tl);
    tl.seek(insParams.timelineOffset);
    var ins = anime(insParams);
    passThrough(ins);
    children.push(ins);
    var timings = getInstanceTimings(children, params);
    tl.delay = timings.delay;
    tl.endDelay = timings.endDelay;
    tl.duration = timings.duration;
    tl.seek(0);
    tl.reset();

    if (tl.autoplay) {
      tl.play();
    }

    return tl;
  };

  return tl;
}

anime.version = '3.0.0';
anime.speed = 1;
anime.running = activeInstances;
anime.remove = removeTargets;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;

anime.random = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var _default = anime;
exports["default"] = _default;
module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsaWJcXGFuaW1lLmVzLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRJbnN0YW5jZVNldHRpbmdzIiwidXBkYXRlIiwiYmVnaW4iLCJsb29wQmVnaW4iLCJjaGFuZ2VCZWdpbiIsImNoYW5nZSIsImNoYW5nZUNvbXBsZXRlIiwibG9vcENvbXBsZXRlIiwiY29tcGxldGUiLCJsb29wIiwiZGlyZWN0aW9uIiwiYXV0b3BsYXkiLCJ0aW1lbGluZU9mZnNldCIsImRlZmF1bHRUd2VlblNldHRpbmdzIiwiZHVyYXRpb24iLCJkZWxheSIsImVuZERlbGF5IiwiZWFzaW5nIiwicm91bmQiLCJ2YWxpZFRyYW5zZm9ybXMiLCJjYWNoZSIsIkNTUyIsInNwcmluZ3MiLCJtaW5NYXgiLCJ2YWwiLCJtaW4iLCJtYXgiLCJNYXRoIiwic3RyaW5nQ29udGFpbnMiLCJzdHIiLCJ0ZXh0IiwiaW5kZXhPZiIsImFwcGx5QXJndW1lbnRzIiwiZnVuYyIsImFyZ3MiLCJhcHBseSIsImlzIiwiYXJyIiwiYSIsIkFycmF5IiwiaXNBcnJheSIsIm9iaiIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInB0aCIsImhhc093blByb3BlcnR5Iiwic3ZnIiwiU1ZHRWxlbWVudCIsImlucCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJkb20iLCJub2RlVHlwZSIsImZuYyIsInVuZCIsImhleCIsInRlc3QiLCJyZ2IiLCJoc2wiLCJjb2wiLCJrZXkiLCJwYXJzZUVhc2luZ1BhcmFtZXRlcnMiLCJzdHJpbmciLCJtYXRjaCIsImV4ZWMiLCJzcGxpdCIsIm1hcCIsInAiLCJwYXJzZUZsb2F0Iiwic3ByaW5nIiwicGFyYW1zIiwibWFzcyIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJ2ZWxvY2l0eSIsIncwIiwic3FydCIsInpldGEiLCJ3ZCIsImIiLCJzb2x2ZXIiLCJ0IiwicHJvZ3Jlc3MiLCJleHAiLCJjb3MiLCJzaW4iLCJnZXREdXJhdGlvbiIsImNhY2hlZCIsImZyYW1lIiwiZWxhcHNlZCIsInJlc3QiLCJlbGFzdGljIiwiYW1wbGl0dWRlIiwicGVyaW9kIiwicG93IiwiUEkiLCJhc2luIiwic3RlcHMiLCJiZXppZXIiLCJrU3BsaW5lVGFibGVTaXplIiwia1NhbXBsZVN0ZXBTaXplIiwiQSIsImFBMSIsImFBMiIsIkIiLCJDIiwiY2FsY0JlemllciIsImFUIiwiZ2V0U2xvcGUiLCJiaW5hcnlTdWJkaXZpZGUiLCJhWCIsImFBIiwiYUIiLCJtWDEiLCJtWDIiLCJjdXJyZW50WCIsImN1cnJlbnRUIiwiaSIsImFicyIsIm5ld3RvblJhcGhzb25JdGVyYXRlIiwiYUd1ZXNzVCIsImN1cnJlbnRTbG9wZSIsIm1ZMSIsIm1ZMiIsInNhbXBsZVZhbHVlcyIsIkZsb2F0MzJBcnJheSIsImdldFRGb3JYIiwiaW50ZXJ2YWxTdGFydCIsImN1cnJlbnRTYW1wbGUiLCJsYXN0U2FtcGxlIiwiZGlzdCIsImd1ZXNzRm9yVCIsImluaXRpYWxTbG9wZSIsIngiLCJwZW5uZXIiLCJuYW1lcyIsImN1cnZlcyIsIkluIiwiT3V0IiwiSW5PdXQiLCJlYXNlcyIsImxpbmVhciIsImNvb3JkcyIsImZvckVhY2giLCJlYXNlIiwicGFyc2VFYXNpbmdzIiwibmFtZSIsInNlbGVjdFN0cmluZyIsIm5vZGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZSIsImZpbHRlckFycmF5IiwiY2FsbGJhY2siLCJsZW4iLCJsZW5ndGgiLCJ0aGlzQXJnIiwiYXJndW1lbnRzIiwicmVzdWx0IiwicHVzaCIsImZsYXR0ZW5BcnJheSIsInJlZHVjZSIsImNvbmNhdCIsInRvQXJyYXkiLCJvIiwiTm9kZUxpc3QiLCJIVE1MQ29sbGVjdGlvbiIsInNsaWNlIiwiYXJyYXlDb250YWlucyIsInNvbWUiLCJjbG9uZU9iamVjdCIsImNsb25lIiwicmVwbGFjZU9iamVjdFByb3BzIiwibzEiLCJvMiIsIm1lcmdlT2JqZWN0cyIsInJnYlRvUmdiYSIsInJnYlZhbHVlIiwiaGV4VG9SZ2JhIiwiaGV4VmFsdWUiLCJyZ3giLCJyZXBsYWNlIiwibSIsInIiLCJnIiwicGFyc2VJbnQiLCJoc2xUb1JnYmEiLCJoc2xWYWx1ZSIsImgiLCJzIiwibCIsImh1ZTJyZ2IiLCJxIiwiY29sb3JUb1JnYiIsImdldFVuaXQiLCJnZXRUcmFuc2Zvcm1Vbml0IiwicHJvcE5hbWUiLCJnZXRGdW5jdGlvblZhbHVlIiwiYW5pbWF0YWJsZSIsInRhcmdldCIsImlkIiwidG90YWwiLCJnZXRBdHRyaWJ1dGUiLCJlbCIsInByb3AiLCJjb252ZXJ0UHhUb1VuaXQiLCJ2YWx1ZSIsInVuaXQiLCJ2YWx1ZVVuaXQiLCJiYXNlbGluZSIsInRlbXBFbCIsImNyZWF0ZUVsZW1lbnQiLCJ0YWdOYW1lIiwicGFyZW50RWwiLCJwYXJlbnROb2RlIiwiYm9keSIsImFwcGVuZENoaWxkIiwic3R5bGUiLCJwb3NpdGlvbiIsIndpZHRoIiwiZmFjdG9yIiwib2Zmc2V0V2lkdGgiLCJyZW1vdmVDaGlsZCIsImNvbnZlcnRlZFVuaXQiLCJnZXRDU1NWYWx1ZSIsInVwcGVyY2FzZVByb3BOYW1lIiwidG9Mb3dlckNhc2UiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImdldEFuaW1hdGlvblR5cGUiLCJnZXRFbGVtZW50VHJhbnNmb3JtcyIsInRyYW5zZm9ybSIsInJlZyIsInRyYW5zZm9ybXMiLCJNYXAiLCJzZXQiLCJnZXRUcmFuc2Zvcm1WYWx1ZSIsImRlZmF1bHRWYWwiLCJnZXQiLCJsaXN0IiwiZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZSIsImdldFJlbGF0aXZlVmFsdWUiLCJ0byIsImZyb20iLCJvcGVyYXRvciIsInUiLCJ5IiwidmFsaWRhdGVWYWx1ZSIsIm9yaWdpbmFsVW5pdCIsInVuaXRMZXNzIiwic3Vic3RyIiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZ2V0Q2lyY2xlTGVuZ3RoIiwiZ2V0UmVjdExlbmd0aCIsImdldExpbmVMZW5ndGgiLCJnZXRQb2x5bGluZUxlbmd0aCIsInBvaW50cyIsInRvdGFsTGVuZ3RoIiwicHJldmlvdXNQb3MiLCJudW1iZXJPZkl0ZW1zIiwiY3VycmVudFBvcyIsImdldEl0ZW0iLCJnZXRQb2x5Z29uTGVuZ3RoIiwiZ2V0VG90YWxMZW5ndGgiLCJzZXREYXNob2Zmc2V0IiwicGF0aExlbmd0aCIsInNldEF0dHJpYnV0ZSIsImdldFBhcmVudFN2Z0VsIiwiZ2V0UGFyZW50U3ZnIiwicGF0aEVsIiwic3ZnRGF0YSIsInBhcmVudFN2Z0VsIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInZpZXdCb3hBdHRyIiwiaGVpZ2h0Iiwidmlld0JveCIsInciLCJnZXRQYXRoIiwicGF0aCIsInBlcmNlbnQiLCJwcm9wZXJ0eSIsImdldFBhdGhQcm9ncmVzcyIsInBvaW50Iiwib2Zmc2V0IiwiZ2V0UG9pbnRBdExlbmd0aCIsInAwIiwiYXRhbjIiLCJkZWNvbXBvc2VWYWx1ZSIsIm9yaWdpbmFsIiwibnVtYmVycyIsIk51bWJlciIsInN0cmluZ3MiLCJwYXJzZVRhcmdldHMiLCJ0YXJnZXRzIiwidGFyZ2V0c0FycmF5IiwiaXRlbSIsInBvcyIsInNlbGYiLCJnZXRBbmltYXRhYmxlcyIsInBhcnNlZCIsIm5vcm1hbGl6ZVByb3BlcnR5VHdlZW5zIiwidHdlZW5TZXR0aW5ncyIsInNldHRpbmdzIiwiaXNGcm9tVG8iLCJwcm9wQXJyYXkiLCJ2IiwiayIsImZsYXR0ZW5LZXlmcmFtZXMiLCJrZXlmcmFtZXMiLCJwcm9wZXJ0eU5hbWVzIiwia2V5cyIsInByb3BlcnRpZXMiLCJuZXdLZXkiLCJnZXRQcm9wZXJ0aWVzIiwidHdlZW5zIiwibm9ybWFsaXplVHdlZW5WYWx1ZXMiLCJ0d2VlbiIsIm5vcm1hbGl6ZVR3ZWVucyIsInByZXZpb3VzVHdlZW4iLCJ0d2VlblZhbHVlIiwidG9Vbml0Iiwib3JpZ2luYWxWYWx1ZSIsInByZXZpb3VzVmFsdWUiLCJmcm9tVW5pdCIsInN0YXJ0IiwiZW5kIiwiaXNQYXRoIiwiaXNDb2xvciIsInNldFByb2dyZXNzVmFsdWUiLCJjc3MiLCJhdHRyaWJ1dGUiLCJvYmplY3QiLCJtYW51YWwiLCJsYXN0Iiwic2V0VGFyZ2V0c1ZhbHVlIiwiYW5pbWF0YWJsZXMiLCJhbmltVHlwZSIsImNyZWF0ZUFuaW1hdGlvbiIsImxhc3RUd2VlbiIsInR5cGUiLCJnZXRBbmltYXRpb25zIiwiZ2V0SW5zdGFuY2VUaW1pbmdzIiwiYW5pbWF0aW9ucyIsImFuaW1MZW5ndGgiLCJnZXRUbE9mZnNldCIsImFuaW0iLCJ0aW1pbmdzIiwiaW5zdGFuY2VJRCIsImNyZWF0ZU5ld0luc3RhbmNlIiwiaW5zdGFuY2VTZXR0aW5ncyIsImNoaWxkcmVuIiwiYWN0aXZlSW5zdGFuY2VzIiwicGF1c2VkSW5zdGFuY2VzIiwicmFmIiwiZW5naW5lIiwicGxheSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN0ZXAiLCJhY3RpdmVJbnN0YW5jZXNMZW5ndGgiLCJhY3RpdmVJbnN0YW5jZSIsInBhdXNlZCIsInRpY2siLCJpbnN0YW5jZUluZGV4Iiwic3BsaWNlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlIiwiaGlkZGVuIiwiaW5zIiwicGF1c2UiLCJhZGRFdmVudExpc3RlbmVyIiwiYW5pbWUiLCJzdGFydFRpbWUiLCJsYXN0VGltZSIsIm5vdyIsImNoaWxkcmVuTGVuZ3RoIiwicmVzb2x2ZSIsIm1ha2VQcm9taXNlIiwid2luZG93IiwiUHJvbWlzZSIsIl9yZXNvbHZlIiwicHJvbWlzZSIsImluc3RhbmNlIiwidG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24iLCJyZXZlcnNlZCIsImNoaWxkIiwiYWRqdXN0VGltZSIsInRpbWUiLCJyZXNldFRpbWUiLCJjdXJyZW50VGltZSIsInNwZWVkIiwic2Vla0NpbGQiLCJzZWVrIiwic3luY0luc3RhbmNlQ2hpbGRyZW4iLCJyZXZlcnNlUGxheWJhY2siLCJpJDEiLCJzZXRBbmltYXRpb25zUHJvZ3Jlc3MiLCJpbnNUaW1lIiwiYW5pbWF0aW9uc0xlbmd0aCIsInR3ZWVuTGVuZ3RoIiwiZWFzZWQiLCJpc05hTiIsInRvTnVtYmVyc0xlbmd0aCIsIm4iLCJ0b051bWJlciIsImZyb21OdW1iZXIiLCJzdHJpbmdzTGVuZ3RoIiwibiQxIiwiY3VycmVudFZhbHVlIiwic2V0Q2FsbGJhY2siLCJjYiIsInBhc3NUaHJvdWdoIiwiY291bnRJdGVyYXRpb24iLCJyZW1haW5pbmciLCJzZXRJbnN0YW5jZVByb2dyZXNzIiwiZW5naW5lVGltZSIsImluc0R1cmF0aW9uIiwiaW5zRGVsYXkiLCJpbnNFbmREZWxheSIsImJlZ2FuIiwiY2hhbmdlQmVnYW4iLCJjaGFuZ2VDb21wbGV0ZWQiLCJjb21wbGV0ZWQiLCJyZXNldCIsInJldmVyc2UiLCJyZXN0YXJ0IiwiZmluaXNoZWQiLCJyZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbnMiLCJyZW1vdmVUYXJnZXRzIiwiYyIsImNoaWxkQW5pbWF0aW9ucyIsInN0YWdnZXIiLCJncmlkIiwiYXhpcyIsImZyb21JbmRleCIsImZyb21GaXJzdCIsImZyb21DZW50ZXIiLCJmcm9tTGFzdCIsImlzUmFuZ2UiLCJ2YWwxIiwidmFsMiIsInZhbHVlcyIsIm1heFZhbHVlIiwiaW5kZXgiLCJmcm9tWCIsImZyb21ZIiwiZmxvb3IiLCJ0b1giLCJ0b1kiLCJkaXN0YW5jZVgiLCJkaXN0YW5jZVkiLCJzcGFjaW5nIiwidGltZWxpbmUiLCJ0bCIsImFkZCIsImluc3RhbmNlUGFyYW1zIiwidGxJbmRleCIsImluc1BhcmFtcyIsInRsRHVyYXRpb24iLCJ2ZXJzaW9uIiwicnVubmluZyIsInJlbW92ZSIsImNvbnZlcnRQeCIsInJhbmRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQUlBLHVCQUF1QixHQUFHO0FBQzVCQyxFQUFBQSxNQUFNLEVBQUUsSUFEb0I7QUFFNUJDLEVBQUFBLEtBQUssRUFBRSxJQUZxQjtBQUc1QkMsRUFBQUEsU0FBUyxFQUFFLElBSGlCO0FBSTVCQyxFQUFBQSxXQUFXLEVB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ekJEOztBQTBCQSxTQUFPQSxFQUFQO0FBQ0Q7O0FBRURsRixLQUFLLENBQUN3RixPQUFOLEdBQWdCLE9BQWhCO0FBQ0F4RixLQUFLLENBQUNtQixLQUFOLEdBQWMsQ0FBZDtBQUNBbkIsS0FBSyxDQUFDeUYsT0FBTixHQUFnQjVHLGVBQWhCO0FBQ0FtQixLQUFLLENBQUMwRixNQUFOLEdBQWVqQyxhQUFmO0FBQ0F6RCxLQUFLLENBQUN2SSxHQUFOLEdBQVlFLHNCQUFaO0FBQ0FxSSxLQUFLLENBQUMxSSxHQUFOLEdBQVlzRyxlQUFaO0FBQ0FvQyxLQUFLLENBQUMyRixTQUFOLEdBQWtCblEsZUFBbEI7QUFDQXdLLEtBQUssQ0FBQzVGLElBQU4sR0FBYUQsT0FBYjtBQUNBNkYsS0FBSyxDQUFDM0csYUFBTixHQUFzQkEsYUFBdEI7QUFDQTJHLEtBQUssQ0FBQzRELE9BQU4sR0FBZ0JBLE9BQWhCO0FBQ0E1RCxLQUFLLENBQUNpRixRQUFOLEdBQWlCQSxRQUFqQjtBQUNBakYsS0FBSyxDQUFDclcsTUFBTixHQUFlaUksWUFBZjtBQUNBb08sS0FBSyxDQUFDL08sTUFBTixHQUFlQSxNQUFmOztBQUNBK08sS0FBSyxDQUFDNEYsTUFBTixHQUFlLFVBQVV6YixHQUFWLEVBQWVDLEdBQWYsRUFBb0I7QUFBRSxTQUFPQyxJQUFJLENBQUNzYSxLQUFMLENBQVd0YSxJQUFJLENBQUN1YixNQUFMLE1BQWlCeGIsR0FBRyxHQUFHRCxHQUFOLEdBQVksQ0FBN0IsQ0FBWCxJQUE4Q0EsR0FBckQ7QUFBMkQsQ0FBaEc7O2VBRWU2ViIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIGFuaW1lLmpzIHYzLjAuMFxuICogKGMpIDIwMTkgSnVsaWFuIEdhcm5pZXJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogYW5pbWVqcy5jb21cbiAqL1xuXG4vLyBEZWZhdWx0c1xuXG52YXIgZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MgPSB7XG4gIHVwZGF0ZTogbnVsbCxcbiAgYmVnaW46IG51bGwsXG4gIGxvb3BCZWdpbjogbnVsbCxcbiAgY2hhbmdlQmVnaW46IG51bGwsXG4gIGNoYW5nZTogbnVsbCxcbiAgY2hhbmdlQ29tcGxldGU6IG51bGwsXG4gIGxvb3BDb21wbGV0ZTogbnVsbCxcbiAgY29tcGxldGU6IG51bGwsXG4gIGxvb3A6IDEsXG4gIGRpcmVjdGlvbjogJ25vcm1hbCcsXG4gIGF1dG9wbGF5OiB0cnVlLFxuICB0aW1lbGluZU9mZnNldDogMFxufTtcblxudmFyIGRlZmF1bHRUd2VlblNldHRpbmdzID0ge1xuICBkdXJhdGlvbjogMTAwMCxcbiAgZGVsYXk6IDAsXG4gIGVuZERlbGF5OiAwLFxuICBlYXNpbmc6ICdlYXNlT3V0RWxhc3RpYygxLCAuNSknLFxuICByb3VuZDogMFxufTtcblxudmFyIHZhbGlkVHJhbnNmb3JtcyA9IFsndHJhbnNsYXRlWCcsICd0cmFuc2xhdGVZJywgJ3RyYW5zbGF0ZVonLCAncm90YXRlJywgJ3JvdGF0ZVgnLCAncm90YXRlWScsICdyb3RhdGVaJywgJ3NjYWxlJywgJ3NjYWxlWCcsICdzY2FsZVknLCAnc2NhbGVaJywgJ3NrZXcnLCAnc2tld1gnLCAnc2tld1knLCAncGVyc3BlY3RpdmUnXTtcblxuLy8gQ2FjaGluZ1xuXG52YXIgY2FjaGUgPSB7XG4gIENTUzoge30sXG4gIHNwcmluZ3M6IHt9XG59O1xuXG4vLyBVdGlsc1xuXG5mdW5jdGlvbiBtaW5NYXgodmFsLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsLCBtaW4pLCBtYXgpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdDb250YWlucyhzdHIsIHRleHQpIHtcbiAgcmV0dXJuIHN0ci5pbmRleE9mKHRleHQpID4gLTE7XG59XG5cbmZ1bmN0aW9uIGFwcGx5QXJndW1lbnRzKGZ1bmMsIGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmMuYXBwbHkobnVsbCwgYXJncyk7XG59XG5cbnZhciBpcyA9IHtcbiAgYXJyOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gQXJyYXkuaXNBcnJheShhKTsgfSxcbiAgb2JqOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gc3RyaW5nQ29udGFpbnMoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpLCAnT2JqZWN0Jyk7IH0sXG4gIHB0aDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGlzLm9iaihhKSAmJiBhLmhhc093blByb3BlcnR5KCd0b3RhbExlbmd0aCcpOyB9LFxuICBzdmc6IGZ1bmN0aW9uIChhKSB7IHJldHVybiBhIGluc3RhbmNlb2YgU1ZHRWxlbWVudDsgfSxcbiAgaW5wOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQ7IH0sXG4gIGRvbTogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEubm9kZVR5cGUgfHwgaXMuc3ZnKGEpOyB9LFxuICBzdHI6IGZ1bmN0aW9uIChhKSB7IHJldHVybiB0eXBlb2YgYSA9PT0gJ3N0cmluZyc7IH0sXG4gIGZuYzogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIHR5cGVvZiBhID09PSAnZnVuY3Rpb24nOyB9LFxuICB1bmQ6IGZ1bmN0aW9uIChhKSB7IHJldHVybiB0eXBlb2YgYSA9PT0gJ3VuZGVmaW5lZCc7IH0sXG4gIGhleDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIC8oXiNbMC05QS1GXXs2fSQpfCheI1swLTlBLUZdezN9JCkvaS50ZXN0KGEpOyB9LFxuICByZ2I6IGZ1bmN0aW9uIChhKSB7IHJldHVybiAvXnJnYi8udGVzdChhKTsgfSxcbiAgaHNsOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gL15oc2wvLnRlc3QoYSk7IH0sXG4gIGNvbDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIChpcy5oZXgoYSkgfHwgaXMucmdiKGEpIHx8IGlzLmhzbChhKSk7IH0sXG4gIGtleTogZnVuY3Rpb24gKGEpIHsgcmV0dXJuICFkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShhKSAmJiAhZGVmYXVsdFR3ZWVuU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYSkgJiYgYSAhPT0gJ3RhcmdldHMnICYmIGEgIT09ICdrZXlmcmFtZXMnOyB9XG59O1xuXG4vLyBFYXNpbmdzXG5cbmZ1bmN0aW9uIHBhcnNlRWFzaW5nUGFyYW1ldGVycyhzdHJpbmcpIHtcbiAgdmFyIG1hdGNoID0gL1xcKChbXildKylcXCkvLmV4ZWMoc3RyaW5nKTtcbiAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0uc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKHApIHsgcmV0dXJuIHBhcnNlRmxvYXQocCk7IH0pIDogW107XG59XG5cbi8vIFNwcmluZyBzb2x2ZXIgaW5zcGlyZWQgYnkgV2Via2l0IENvcHlyaWdodCDCqSAyMDE2IEFwcGxlIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gaHR0cHM6Ly93ZWJraXQub3JnL2RlbW9zL3NwcmluZy9zcHJpbmcuanNcblxuZnVuY3Rpb24gc3ByaW5nKHN0cmluZywgZHVyYXRpb24pIHtcblxuICB2YXIgcGFyYW1zID0gcGFyc2VFYXNpbmdQYXJhbWV0ZXJzKHN0cmluZyk7XG4gIHZhciBtYXNzID0gbWluTWF4KGlzLnVuZChwYXJhbXNbMF0pID8gMSA6IHBhcmFtc1swXSwgLjEsIDEwMCk7XG4gIHZhciBzdGlmZm5lc3MgPSBtaW5NYXgoaXMudW5kKHBhcmFtc1sxXSkgPyAxMDAgOiBwYXJhbXNbMV0sIC4xLCAxMDApO1xuICB2YXIgZGFtcGluZyA9IG1pbk1heChpcy51bmQocGFyYW1zWzJdKSA/IDEwIDogcGFyYW1zWzJdLCAuMSwgMTAwKTtcbiAgdmFyIHZlbG9jaXR5ID0gIG1pbk1heChpcy51bmQocGFyYW1zWzNdKSA/IDAgOiBwYXJhbXNbM10sIC4xLCAxMDApO1xuICB2YXIgdzAgPSBNYXRoLnNxcnQoc3RpZmZuZXNzIC8gbWFzcyk7XG4gIHZhciB6ZXRhID0gZGFtcGluZyAvICgyICogTWF0aC5zcXJ0KHN0aWZmbmVzcyAqIG1hc3MpKTtcbiAgdmFyIHdkID0gemV0YSA8IDEgPyB3MCAqIE1hdGguc3FydCgxIC0gemV0YSAqIHpldGEpIDogMDtcbiAgdmFyIGEgPSAxO1xuICB2YXIgYiA9IHpldGEgPCAxID8gKHpldGEgKiB3MCArIC12ZWxvY2l0eSkgLyB3ZCA6IC12ZWxvY2l0eSArIHcwO1xuXG4gIGZ1bmN0aW9uIHNvbHZlcih0KSB7XG4gICAgdmFyIHByb2dyZXNzID0gZHVyYXRpb24gPyAoZHVyYXRpb24gKiB0KSAvIDEwMDAgOiB0O1xuICAgIGlmICh6ZXRhIDwgMSkge1xuICAgICAgcHJvZ3Jlc3MgPSBNYXRoLmV4cCgtcHJvZ3Jlc3MgKiB6ZXRhICogdzApICogKGEgKiBNYXRoLmNvcyh3ZCAqIHByb2dyZXNzKSArIGIgKiBNYXRoLnNpbih3ZCAqIHByb2dyZXNzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2dyZXNzID0gKGEgKyBiICogcHJvZ3Jlc3MpICogTWF0aC5leHAoLXByb2dyZXNzICogdzApO1xuICAgIH1cbiAgICBpZiAodCA9PT0gMCB8fCB0ID09PSAxKSB7IHJldHVybiB0OyB9XG4gICAgcmV0dXJuIDEgLSBwcm9ncmVzcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldER1cmF0aW9uKCkge1xuICAgIHZhciBjYWNoZWQgPSBjYWNoZS5zcHJpbmdzW3N0cmluZ107XG4gICAgaWYgKGNhY2hlZCkgeyByZXR1cm4gY2FjaGVkOyB9XG4gICAgdmFyIGZyYW1lID0gMS82O1xuICAgIHZhciBlbGFwc2VkID0gMDtcbiAgICB2YXIgcmVzdCA9IDA7XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgZWxhcHNlZCArPSBmcmFtZTtcbiAgICAgIGlmIChzb2x2ZXIoZWxhcHNlZCkgPT09IDEpIHtcbiAgICAgICAgcmVzdCsrO1xuICAgICAgICBpZiAocmVzdCA+PSAxNikgeyBicmVhazsgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdCA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBkdXJhdGlvbiA9IGVsYXBzZWQgKiBmcmFtZSAqIDEwMDA7XG4gICAgY2FjaGUuc3ByaW5nc1tzdHJpbmddID0gZHVyYXRpb247XG4gICAgcmV0dXJuIGR1cmF0aW9uO1xuICB9XG5cbiAgcmV0dXJuIGR1cmF0aW9uID8gc29sdmVyIDogZ2V0RHVyYXRpb247XG5cbn1cblxuLy8gRWxhc3RpYyBlYXNpbmcgYWRhcHRlZCBmcm9tIGpRdWVyeVVJIGh0dHA6Ly9hcGkuanF1ZXJ5dWkuY29tL2Vhc2luZ3MvXG5cbmZ1bmN0aW9uIGVsYXN0aWMoYW1wbGl0dWRlLCBwZXJpb2QpIHtcbiAgaWYgKCBhbXBsaXR1ZGUgPT09IHZvaWQgMCApIGFtcGxpdHVkZSA9IDE7XG4gIGlmICggcGVyaW9kID09PSB2b2lkIDAgKSBwZXJpb2QgPSAuNTtcblxuICB2YXIgYSA9IG1pbk1heChhbXBsaXR1ZGUsIDEsIDEwKTtcbiAgdmFyIHAgPSBtaW5NYXgocGVyaW9kLCAuMSwgMik7XG4gIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiAodCA9PT0gMCB8fCB0ID09PSAxKSA/IHQgOlxuICAgICAgLWEgKiBNYXRoLnBvdygyLCAxMCAqICh0IC0gMSkpICogTWF0aC5zaW4oKCgodCAtIDEpIC0gKHAgLyAoTWF0aC5QSSAqIDIpICogTWF0aC5hc2luKDEgLyBhKSkpICogKE1hdGguUEkgKiAyKSkgLyBwKTtcbiAgfVxufVxuXG4vLyBCYXNpYyBzdGVwcyBlYXNpbmcgaW1wbGVtZW50YXRpb24gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZnIvZG9jcy9XZWIvQ1NTL3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXG5cbmZ1bmN0aW9uIHN0ZXBzKHN0ZXBzKSB7XG4gIGlmICggc3RlcHMgPT09IHZvaWQgMCApIHN0ZXBzID0gMTA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiBNYXRoLnJvdW5kKHQgKiBzdGVwcykgKiAoMSAvIHN0ZXBzKTsgfTtcbn1cblxuLy8gQmV6aWVyRWFzaW5nIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZ1xuXG52YXIgYmV6aWVyID0gKGZ1bmN0aW9uICgpIHtcblxuICB2YXIga1NwbGluZVRhYmxlU2l6ZSA9IDExO1xuICB2YXIga1NhbXBsZVN0ZXBTaXplID0gMS4wIC8gKGtTcGxpbmVUYWJsZVNpemUgLSAxLjApO1xuXG4gIGZ1bmN0aW9uIEEoYUExLCBhQTIpIHsgcmV0dXJuIDEuMCAtIDMuMCAqIGFBMiArIDMuMCAqIGFBMSB9XG4gIGZ1bmN0aW9uIEIoYUExLCBhQTIpIHsgcmV0dXJuIDMuMCAqIGFBMiAtIDYuMCAqIGFBMSB9XG4gIGZ1bmN0aW9uIEMoYUExKSAgICAgIHsgcmV0dXJuIDMuMCAqIGFBMSB9XG5cbiAgZnVuY3Rpb24gY2FsY0JlemllcihhVCwgYUExLCBhQTIpIHsgcmV0dXJuICgoQShhQTEsIGFBMikgKiBhVCArIEIoYUExLCBhQTIpKSAqIGFUICsgQyhhQTEpKSAqIGFUIH1cbiAgZnVuY3Rpb24gZ2V0U2xvcGUoYVQsIGFBMSwgYUEyKSB7IHJldHVybiAzLjAgKiBBKGFBMSwgYUEyKSAqIGFUICogYVQgKyAyLjAgKiBCKGFBMSwgYUEyKSAqIGFUICsgQyhhQTEpIH1cblxuICBmdW5jdGlvbiBiaW5hcnlTdWJkaXZpZGUoYVgsIGFBLCBhQiwgbVgxLCBtWDIpIHtcbiAgICB2YXIgY3VycmVudFgsIGN1cnJlbnRULCBpID0gMDtcbiAgICBkbyB7XG4gICAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xuICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgIGlmIChjdXJyZW50WCA+IDAuMCkgeyBhQiA9IGN1cnJlbnRUOyB9IGVsc2UgeyBhQSA9IGN1cnJlbnRUOyB9XG4gICAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gMC4wMDAwMDAxICYmICsraSA8IDEwKTtcbiAgICByZXR1cm4gY3VycmVudFQ7XG4gIH1cblxuICBmdW5jdGlvbiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgYUd1ZXNzVCwgbVgxLCBtWDIpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7ICsraSkge1xuICAgICAgdmFyIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcbiAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkgeyByZXR1cm4gYUd1ZXNzVDsgfVxuICAgICAgdmFyIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgIGFHdWVzc1QgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XG4gICAgfVxuICAgIHJldHVybiBhR3Vlc3NUO1xuICB9XG5cbiAgZnVuY3Rpb24gYmV6aWVyKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuXG4gICAgaWYgKCEoMCA8PSBtWDEgJiYgbVgxIDw9IDEgJiYgMCA8PSBtWDIgJiYgbVgyIDw9IDEpKSB7IHJldHVybjsgfVxuICAgIHZhciBzYW1wbGVWYWx1ZXMgPSBuZXcgRmxvYXQzMkFycmF5KGtTcGxpbmVUYWJsZVNpemUpO1xuXG4gICAgaWYgKG1YMSAhPT0gbVkxIHx8IG1YMiAhPT0gbVkyKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtTcGxpbmVUYWJsZVNpemU7ICsraSkge1xuICAgICAgICBzYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRURm9yWChhWCkge1xuXG4gICAgICB2YXIgaW50ZXJ2YWxTdGFydCA9IDA7XG4gICAgICB2YXIgY3VycmVudFNhbXBsZSA9IDE7XG4gICAgICB2YXIgbGFzdFNhbXBsZSA9IGtTcGxpbmVUYWJsZVNpemUgLSAxO1xuXG4gICAgICBmb3IgKDsgY3VycmVudFNhbXBsZSAhPT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgICBpbnRlcnZhbFN0YXJ0ICs9IGtTYW1wbGVTdGVwU2l6ZTtcbiAgICAgIH1cblxuICAgICAgLS1jdXJyZW50U2FtcGxlO1xuXG4gICAgICB2YXIgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUgKyAxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XG4gICAgICB2YXIgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBrU2FtcGxlU3RlcFNpemU7XG4gICAgICB2YXIgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG5cbiAgICAgIGlmIChpbml0aWFsU2xvcGUgPj0gMC4wMDEpIHtcbiAgICAgICAgcmV0dXJuIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBndWVzc0ZvclQsIG1YMSwgbVgyKTtcbiAgICAgIH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgcmV0dXJuIGd1ZXNzRm9yVDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoeCkge1xuICAgICAgaWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSB7IHJldHVybiB4OyB9XG4gICAgICBpZiAoeCA9PT0gMCB8fCB4ID09PSAxKSB7IHJldHVybiB4OyB9XG4gICAgICByZXR1cm4gY2FsY0JlemllcihnZXRURm9yWCh4KSwgbVkxLCBtWTIpO1xuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIGJlemllcjtcblxufSkoKTtcblxudmFyIHBlbm5lciA9IChmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIG5hbWVzID0gWydRdWFkJywgJ0N1YmljJywgJ1F1YXJ0JywgJ1F1aW50JywgJ1NpbmUnLCAnRXhwbycsICdDaXJjJywgJ0JhY2snLCAnRWxhc3RpYyddO1xuXG4gIC8vIEFwcHJveGltYXRlZCBQZW5uZXIgZXF1YXRpb25zIGh0dHA6Ly9tYXR0aGV3bGVpbi5jb20vY2Vhc2VyL1xuXG4gIHZhciBjdXJ2ZXMgPSB7XG4gICAgSW46IFtcbiAgICAgIFswLjU1MCwgMC4wODUsIDAuNjgwLCAwLjUzMF0sIC8qIGluUXVhZCAqL1xuICAgICAgWzAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwXSwgLyogaW5DdWJpYyAqL1xuICAgICAgWzAuODk1LCAwLjAzMCwgMC42ODUsIDAuMjIwXSwgLyogaW5RdWFydCAqL1xuICAgICAgWzAuNzU1LCAwLjA1MCwgMC44NTUsIDAuMDYwXSwgLyogaW5RdWludCAqL1xuICAgICAgWzAuNDcwLCAwLjAwMCwgMC43NDUsIDAuNzE1XSwgLyogaW5TaW5lICovXG4gICAgICBbMC45NTAsIDAuMDUwLCAwLjc5NSwgMC4wMzVdLCAvKiBpbkV4cG8gKi9cbiAgICAgIFswLjYwMCwgMC4wNDAsIDAuOTgwLCAwLjMzNV0sIC8qIGluQ2lyYyAqL1xuICAgICAgWzAuNjAwLC0wLjI4MCwgMC43MzUsIDAuMDQ1XSwgLyogaW5CYWNrICovXG4gICAgICBlbGFzdGljIC8qIGluRWxhc3RpYyAqL1xuICAgIF0sXG4gICAgT3V0OiBbXG4gICAgICBbMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDBdLCAvKiBvdXRRdWFkICovXG4gICAgICBbMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDBdLCAvKiBvdXRDdWJpYyAqL1xuICAgICAgWzAuMTY1LCAwLjg0MCwgMC40NDAsIDEuMDAwXSwgLyogb3V0UXVhcnQgKi9cbiAgICAgIFswLjIzMCwgMS4wMDAsIDAuMzIwLCAxLjAwMF0sIC8qIG91dFF1aW50ICovXG4gICAgICBbMC4zOTAsIDAuNTc1LCAwLjU2NSwgMS4wMDBdLCAvKiBvdXRTaW5lICovXG4gICAgICBbMC4xOTAsIDEuMDAwLCAwLjIyMCwgMS4wMDBdLCAvKiBvdXRFeHBvICovXG4gICAgICBbMC4wNzUsIDAuODIwLCAwLjE2NSwgMS4wMDBdLCAvKiBvdXRDaXJjICovXG4gICAgICBbMC4xNzUsIDAuODg1LCAwLjMyMCwgMS4yNzVdLCAvKiBvdXRCYWNrICovXG4gICAgICBmdW5jdGlvbiAoYSwgcCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIDEgLSBlbGFzdGljKGEsIHApKDEgLSB0KTsgfTsgfSAvKiBvdXRFbGFzdGljICovXG4gICAgXSxcbiAgICBJbk91dDogW1xuICAgICAgWzAuNDU1LCAwLjAzMCwgMC41MTUsIDAuOTU1XSwgLyogaW5PdXRRdWFkICovXG4gICAgICBbMC42NDUsIDAuMDQ1LCAwLjM1NSwgMS4wMDBdLCAvKiBpbk91dEN1YmljICovXG4gICAgICBbMC43NzAsIDAuMDAwLCAwLjE3NSwgMS4wMDBdLCAvKiBpbk91dFF1YXJ0ICovXG4gICAgICBbMC44NjAsIDAuMDAwLCAwLjA3MCwgMS4wMDBdLCAvKiBpbk91dFF1aW50ICovXG4gICAgICBbMC40NDUsIDAuMDUwLCAwLjU1MCwgMC45NTBdLCAvKiBpbk91dFNpbmUgKi9cbiAgICAgIFsxLjAwMCwgMC4wMDAsIDAuMDAwLCAxLjAwMF0sIC8qIGluT3V0RXhwbyAqL1xuICAgICAgWzAuNzg1LCAwLjEzNSwgMC4xNTAsIDAuODYwXSwgLyogaW5PdXRDaXJjICovXG4gICAgICBbMC42ODAsLTAuNTUwLCAwLjI2NSwgMS41NTBdLCAvKiBpbk91dEJhY2sgKi9cbiAgICAgIGZ1bmN0aW9uIChhLCBwKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdCA8IC41ID8gZWxhc3RpYyhhLCBwKSh0ICogMikgLyAyIDogMSAtIGVsYXN0aWMoYSwgcCkodCAqIC0yICsgMikgLyAyOyB9OyB9IC8qIGluT3V0RWxhc3RpYyAqL1xuICAgIF1cbiAgfTtcblxuICB2YXIgZWFzZXMgPSB7XG4gICAgbGluZWFyOiBbMC4yNTAsIDAuMjUwLCAwLjc1MCwgMC43NTBdXG4gIH07XG5cbiAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGNvb3JkcyApIHtcbiAgICBjdXJ2ZXNbY29vcmRzXS5mb3JFYWNoKGZ1bmN0aW9uIChlYXNlLCBpKSB7XG4gICAgICBlYXNlc1snZWFzZScrY29vcmRzK25hbWVzW2ldXSA9IGVhc2U7XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgY29vcmRzIGluIGN1cnZlcykgbG9vcCggY29vcmRzICk7XG5cbiAgcmV0dXJuIGVhc2VzO1xuXG59KSgpO1xuXG5mdW5jdGlvbiBwYXJzZUVhc2luZ3MoZWFzaW5nLCBkdXJhdGlvbikge1xuICBpZiAoaXMuZm5jKGVhc2luZykpIHsgcmV0dXJuIGVhc2luZzsgfVxuICB2YXIgbmFtZSA9IGVhc2luZy5zcGxpdCgnKCcpWzBdO1xuICB2YXIgZWFzZSA9IHBlbm5lcltuYW1lXTtcbiAgdmFyIGFyZ3MgPSBwYXJzZUVhc2luZ1BhcmFtZXRlcnMoZWFzaW5nKTtcbiAgc3dpdGNoIChuYW1lKSB7XG4gICAgY2FzZSAnc3ByaW5nJyA6IHJldHVybiBzcHJpbmcoZWFzaW5nLCBkdXJhdGlvbik7XG4gICAgY2FzZSAnY3ViaWNCZXppZXInIDogcmV0dXJuIGFwcGx5QXJndW1lbnRzKGJlemllciwgYXJncyk7XG4gICAgY2FzZSAnc3RlcHMnIDogcmV0dXJuIGFwcGx5QXJndW1lbnRzKHN0ZXBzLCBhcmdzKTtcbiAgICBkZWZhdWx0IDogcmV0dXJuIGlzLmZuYyhlYXNlKSA/IGFwcGx5QXJndW1lbnRzKGVhc2UsIGFyZ3MpIDogYXBwbHlBcmd1bWVudHMoYmV6aWVyLCBlYXNlKTtcbiAgfVxufVxuXG4vLyBTdHJpbmdzXG5cbmZ1bmN0aW9uIHNlbGVjdFN0cmluZyhzdHIpIHtcbiAgdHJ5IHtcbiAgICB2YXIgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHN0cik7XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9IGNhdGNoKGUpIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLy8gQXJyYXlzXG5cbmZ1bmN0aW9uIGZpbHRlckFycmF5KGFyciwgY2FsbGJhY2spIHtcbiAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gIHZhciB0aGlzQXJnID0gYXJndW1lbnRzLmxlbmd0aCA+PSAyID8gYXJndW1lbnRzWzFdIDogdm9pZCAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoaSBpbiBhcnIpIHtcbiAgICAgIHZhciB2YWwgPSBhcnJbaV07XG4gICAgICBpZiAoY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB2YWwsIGksIGFycikpIHtcbiAgICAgICAgcmVzdWx0LnB1c2godmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbkFycmF5KGFycikge1xuICByZXR1cm4gYXJyLnJlZHVjZShmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5jb25jYXQoaXMuYXJyKGIpID8gZmxhdHRlbkFycmF5KGIpIDogYik7IH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gdG9BcnJheShvKSB7XG4gIGlmIChpcy5hcnIobykpIHsgcmV0dXJuIG87IH1cbiAgaWYgKGlzLnN0cihvKSkgeyBvID0gc2VsZWN0U3RyaW5nKG8pIHx8IG87IH1cbiAgaWYgKG8gaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBvIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24pIHsgcmV0dXJuIFtdLnNsaWNlLmNhbGwobyk7IH1cbiAgcmV0dXJuIFtvXTtcbn1cblxuZnVuY3Rpb24gYXJyYXlDb250YWlucyhhcnIsIHZhbCkge1xuICByZXR1cm4gYXJyLnNvbWUoZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEgPT09IHZhbDsgfSk7XG59XG5cbi8vIE9iamVjdHNcblxuZnVuY3Rpb24gY2xvbmVPYmplY3Qobykge1xuICB2YXIgY2xvbmUgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiBvKSB7IGNsb25lW3BdID0gb1twXTsgfVxuICByZXR1cm4gY2xvbmU7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VPYmplY3RQcm9wcyhvMSwgbzIpIHtcbiAgdmFyIG8gPSBjbG9uZU9iamVjdChvMSk7XG4gIGZvciAodmFyIHAgaW4gbzEpIHsgb1twXSA9IG8yLmhhc093blByb3BlcnR5KHApID8gbzJbcF0gOiBvMVtwXTsgfVxuICByZXR1cm4gbztcbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3RzKG8xLCBvMikge1xuICB2YXIgbyA9IGNsb25lT2JqZWN0KG8xKTtcbiAgZm9yICh2YXIgcCBpbiBvMikgeyBvW3BdID0gaXMudW5kKG8xW3BdKSA/IG8yW3BdIDogbzFbcF07IH1cbiAgcmV0dXJuIG87XG59XG5cbi8vIENvbG9yc1xuXG5mdW5jdGlvbiByZ2JUb1JnYmEocmdiVmFsdWUpIHtcbiAgdmFyIHJnYiA9IC9yZ2JcXCgoXFxkKyxcXHMqW1xcZF0rLFxccypbXFxkXSspXFwpL2cuZXhlYyhyZ2JWYWx1ZSk7XG4gIHJldHVybiByZ2IgPyAoXCJyZ2JhKFwiICsgKHJnYlsxXSkgKyBcIiwxKVwiKSA6IHJnYlZhbHVlO1xufVxuXG5mdW5jdGlvbiBoZXhUb1JnYmEoaGV4VmFsdWUpIHtcbiAgdmFyIHJneCA9IC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2k7XG4gIHZhciBoZXggPSBoZXhWYWx1ZS5yZXBsYWNlKHJneCwgZnVuY3Rpb24gKG0sIHIsIGcsIGIpIHsgcmV0dXJuIHIgKyByICsgZyArIGcgKyBiICsgYjsgfSApO1xuICB2YXIgcmdiID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gIHZhciByID0gcGFyc2VJbnQocmdiWzFdLCAxNik7XG4gIHZhciBnID0gcGFyc2VJbnQocmdiWzJdLCAxNik7XG4gIHZhciBiID0gcGFyc2VJbnQocmdiWzNdLCAxNik7XG4gIHJldHVybiAoXCJyZ2JhKFwiICsgciArIFwiLFwiICsgZyArIFwiLFwiICsgYiArIFwiLDEpXCIpO1xufVxuXG5mdW5jdGlvbiBoc2xUb1JnYmEoaHNsVmFsdWUpIHtcbiAgdmFyIGhzbCA9IC9oc2xcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSVcXCkvZy5leGVjKGhzbFZhbHVlKSB8fCAvaHNsYVxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspXFwpL2cuZXhlYyhoc2xWYWx1ZSk7XG4gIHZhciBoID0gcGFyc2VJbnQoaHNsWzFdLCAxMCkgLyAzNjA7XG4gIHZhciBzID0gcGFyc2VJbnQoaHNsWzJdLCAxMCkgLyAxMDA7XG4gIHZhciBsID0gcGFyc2VJbnQoaHNsWzNdLCAxMCkgLyAxMDA7XG4gIHZhciBhID0gaHNsWzRdIHx8IDE7XG4gIGZ1bmN0aW9uIGh1ZTJyZ2IocCwgcSwgdCkge1xuICAgIGlmICh0IDwgMCkgeyB0ICs9IDE7IH1cbiAgICBpZiAodCA+IDEpIHsgdCAtPSAxOyB9XG4gICAgaWYgKHQgPCAxLzYpIHsgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQ7IH1cbiAgICBpZiAodCA8IDEvMikgeyByZXR1cm4gcTsgfVxuICAgIGlmICh0IDwgMi8zKSB7IHJldHVybiBwICsgKHEgLSBwKSAqICgyLzMgLSB0KSAqIDY7IH1cbiAgICByZXR1cm4gcDtcbiAgfVxuICB2YXIgciwgZywgYjtcbiAgaWYgKHMgPT0gMCkge1xuICAgIHIgPSBnID0gYiA9IGw7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xuICAgIHZhciBwID0gMiAqIGwgLSBxO1xuICAgIHIgPSBodWUycmdiKHAsIHEsIGggKyAxLzMpO1xuICAgIGcgPSBodWUycmdiKHAsIHEsIGgpO1xuICAgIGIgPSBodWUycmdiKHAsIHEsIGggLSAxLzMpO1xuICB9XG4gIHJldHVybiAoXCJyZ2JhKFwiICsgKHIgKiAyNTUpICsgXCIsXCIgKyAoZyAqIDI1NSkgKyBcIixcIiArIChiICogMjU1KSArIFwiLFwiICsgYSArIFwiKVwiKTtcbn1cblxuZnVuY3Rpb24gY29sb3JUb1JnYih2YWwpIHtcbiAgaWYgKGlzLnJnYih2YWwpKSB7IHJldHVybiByZ2JUb1JnYmEodmFsKTsgfVxuICBpZiAoaXMuaGV4KHZhbCkpIHsgcmV0dXJuIGhleFRvUmdiYSh2YWwpOyB9XG4gIGlmIChpcy5oc2wodmFsKSkgeyByZXR1cm4gaHNsVG9SZ2JhKHZhbCk7IH1cbn1cblxuLy8gVW5pdHNcblxuZnVuY3Rpb24gZ2V0VW5pdCh2YWwpIHtcbiAgdmFyIHNwbGl0ID0gLyhbXFwrXFwtXT9bMC05I1xcLl0rKSglfHB4fHB0fGVtfHJlbXxpbnxjbXxtbXxleHxjaHxwY3x2d3x2aHx2bWlufHZtYXh8ZGVnfHJhZHx0dXJuKT8kLy5leGVjKHZhbCk7XG4gIGlmIChzcGxpdCkgeyByZXR1cm4gc3BsaXRbMl07IH1cbn1cblxuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtVW5pdChwcm9wTmFtZSkge1xuICBpZiAoc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICd0cmFuc2xhdGUnKSB8fCBwcm9wTmFtZSA9PT0gJ3BlcnNwZWN0aXZlJykgeyByZXR1cm4gJ3B4JzsgfVxuICBpZiAoc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICdyb3RhdGUnKSB8fCBzdHJpbmdDb250YWlucyhwcm9wTmFtZSwgJ3NrZXcnKSkgeyByZXR1cm4gJ2RlZyc7IH1cbn1cblxuLy8gVmFsdWVzXG5cbmZ1bmN0aW9uIGdldEZ1bmN0aW9uVmFsdWUodmFsLCBhbmltYXRhYmxlKSB7XG4gIGlmICghaXMuZm5jKHZhbCkpIHsgcmV0dXJuIHZhbDsgfVxuICByZXR1cm4gdmFsKGFuaW1hdGFibGUudGFyZ2V0LCBhbmltYXRhYmxlLmlkLCBhbmltYXRhYmxlLnRvdGFsKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKGVsLCBwcm9wKSB7XG4gIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUocHJvcCk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRQeFRvVW5pdChlbCwgdmFsdWUsIHVuaXQpIHtcbiAgdmFyIHZhbHVlVW5pdCA9IGdldFVuaXQodmFsdWUpO1xuICBpZiAoYXJyYXlDb250YWlucyhbdW5pdCwgJ2RlZycsICdyYWQnLCAndHVybiddLCB2YWx1ZVVuaXQpKSB7IHJldHVybiB2YWx1ZTsgfVxuICB2YXIgY2FjaGVkID0gY2FjaGUuQ1NTW3ZhbHVlICsgdW5pdF07XG4gIGlmICghaXMudW5kKGNhY2hlZCkpIHsgcmV0dXJuIGNhY2hlZDsgfVxuICB2YXIgYmFzZWxpbmUgPSAxMDA7XG4gIHZhciB0ZW1wRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsLnRhZ05hbWUpO1xuICB2YXIgcGFyZW50RWwgPSAoZWwucGFyZW50Tm9kZSAmJiAoZWwucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQpKSA/IGVsLnBhcmVudE5vZGUgOiBkb2N1bWVudC5ib2R5O1xuICBwYXJlbnRFbC5hcHBlbmRDaGlsZCh0ZW1wRWwpO1xuICB0ZW1wRWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICB0ZW1wRWwuc3R5bGUud2lkdGggPSBiYXNlbGluZSArIHVuaXQ7XG4gIHZhciBmYWN0b3IgPSBiYXNlbGluZSAvIHRlbXBFbC5vZmZzZXRXaWR0aDtcbiAgcGFyZW50RWwucmVtb3ZlQ2hpbGQodGVtcEVsKTtcbiAgdmFyIGNvbnZlcnRlZFVuaXQgPSBmYWN0b3IgKiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgY2FjaGUuQ1NTW3ZhbHVlICsgdW5pdF0gPSBjb252ZXJ0ZWRVbml0O1xuICByZXR1cm4gY29udmVydGVkVW5pdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q1NTVmFsdWUoZWwsIHByb3AsIHVuaXQpIHtcbiAgaWYgKHByb3AgaW4gZWwuc3R5bGUpIHtcbiAgICB2YXIgdXBwZXJjYXNlUHJvcE5hbWUgPSBwcm9wLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIHZhbHVlID0gZWwuc3R5bGVbcHJvcF0gfHwgZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZSh1cHBlcmNhc2VQcm9wTmFtZSkgfHwgJzAnO1xuICAgIHJldHVybiB1bml0ID8gY29udmVydFB4VG9Vbml0KGVsLCB2YWx1ZSwgdW5pdCkgOiB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBbmltYXRpb25UeXBlKGVsLCBwcm9wKSB7XG4gIGlmIChpcy5kb20oZWwpICYmICFpcy5pbnAoZWwpICYmIChnZXRBdHRyaWJ1dGUoZWwsIHByb3ApIHx8IChpcy5zdmcoZWwpICYmIGVsW3Byb3BdKSkpIHsgcmV0dXJuICdhdHRyaWJ1dGUnOyB9XG4gIGlmIChpcy5kb20oZWwpICYmIGFycmF5Q29udGFpbnModmFsaWRUcmFuc2Zvcm1zLCBwcm9wKSkgeyByZXR1cm4gJ3RyYW5zZm9ybSc7IH1cbiAgaWYgKGlzLmRvbShlbCkgJiYgKHByb3AgIT09ICd0cmFuc2Zvcm0nICYmIGdldENTU1ZhbHVlKGVsLCBwcm9wKSkpIHsgcmV0dXJuICdjc3MnOyB9XG4gIGlmIChlbFtwcm9wXSAhPSBudWxsKSB7IHJldHVybiAnb2JqZWN0JzsgfVxufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50VHJhbnNmb3JtcyhlbCkge1xuICBpZiAoIWlzLmRvbShlbCkpIHsgcmV0dXJuOyB9XG4gIHZhciBzdHIgPSBlbC5zdHlsZS50cmFuc2Zvcm0gfHwgJyc7XG4gIHZhciByZWcgID0gLyhcXHcrKVxcKChbXildKilcXCkvZztcbiAgdmFyIHRyYW5zZm9ybXMgPSBuZXcgTWFwKCk7XG4gIHZhciBtOyB3aGlsZSAobSA9IHJlZy5leGVjKHN0cikpIHsgdHJhbnNmb3Jtcy5zZXQobVsxXSwgbVsyXSk7IH1cbiAgcmV0dXJuIHRyYW5zZm9ybXM7XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zZm9ybVZhbHVlKGVsLCBwcm9wTmFtZSwgYW5pbWF0YWJsZSwgdW5pdCkge1xuICB2YXIgZGVmYXVsdFZhbCA9IHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAnc2NhbGUnKSA/IDEgOiAwICsgZ2V0VHJhbnNmb3JtVW5pdChwcm9wTmFtZSk7XG4gIHZhciB2YWx1ZSA9IGdldEVsZW1lbnRUcmFuc2Zvcm1zKGVsKS5nZXQocHJvcE5hbWUpIHx8IGRlZmF1bHRWYWw7XG4gIGlmIChhbmltYXRhYmxlKSB7XG4gICAgYW5pbWF0YWJsZS50cmFuc2Zvcm1zLmxpc3Quc2V0KHByb3BOYW1lLCB2YWx1ZSk7XG4gICAgYW5pbWF0YWJsZS50cmFuc2Zvcm1zWydsYXN0J10gPSBwcm9wTmFtZTtcbiAgfVxuICByZXR1cm4gdW5pdCA/IGNvbnZlcnRQeFRvVW5pdChlbCwgdmFsdWUsIHVuaXQpIDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldE9yaWdpbmFsVGFyZ2V0VmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgdW5pdCwgYW5pbWF0YWJsZSkge1xuICBzd2l0Y2ggKGdldEFuaW1hdGlvblR5cGUodGFyZ2V0LCBwcm9wTmFtZSkpIHtcbiAgICBjYXNlICd0cmFuc2Zvcm0nOiByZXR1cm4gZ2V0VHJhbnNmb3JtVmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgYW5pbWF0YWJsZSwgdW5pdCk7XG4gICAgY2FzZSAnY3NzJzogcmV0dXJuIGdldENTU1ZhbHVlKHRhcmdldCwgcHJvcE5hbWUsIHVuaXQpO1xuICAgIGNhc2UgJ2F0dHJpYnV0ZSc6IHJldHVybiBnZXRBdHRyaWJ1dGUodGFyZ2V0LCBwcm9wTmFtZSk7XG4gICAgZGVmYXVsdDogcmV0dXJuIHRhcmdldFtwcm9wTmFtZV0gfHwgMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRSZWxhdGl2ZVZhbHVlKHRvLCBmcm9tKSB7XG4gIHZhciBvcGVyYXRvciA9IC9eKFxcKj18XFwrPXwtPSkvLmV4ZWModG8pO1xuICBpZiAoIW9wZXJhdG9yKSB7IHJldHVybiB0bzsgfVxuICB2YXIgdSA9IGdldFVuaXQodG8pIHx8IDA7XG4gIHZhciB4ID0gcGFyc2VGbG9hdChmcm9tKTtcbiAgdmFyIHkgPSBwYXJzZUZsb2F0KHRvLnJlcGxhY2Uob3BlcmF0b3JbMF0sICcnKSk7XG4gIHN3aXRjaCAob3BlcmF0b3JbMF1bMF0pIHtcbiAgICBjYXNlICcrJzogcmV0dXJuIHggKyB5ICsgdTtcbiAgICBjYXNlICctJzogcmV0dXJuIHggLSB5ICsgdTtcbiAgICBjYXNlICcqJzogcmV0dXJuIHggKiB5ICsgdTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVZhbHVlKHZhbCwgdW5pdCkge1xuICBpZiAoaXMuY29sKHZhbCkpIHsgcmV0dXJuIGNvbG9yVG9SZ2IodmFsKTsgfVxuICB2YXIgb3JpZ2luYWxVbml0ID0gZ2V0VW5pdCh2YWwpO1xuICB2YXIgdW5pdExlc3MgPSBvcmlnaW5hbFVuaXQgPyB2YWwuc3Vic3RyKDAsIHZhbC5sZW5ndGggLSBvcmlnaW5hbFVuaXQubGVuZ3RoKSA6IHZhbDtcbiAgcmV0dXJuIHVuaXQgJiYgIS9cXHMvZy50ZXN0KHZhbCkgPyB1bml0TGVzcyArIHVuaXQgOiB1bml0TGVzcztcbn1cblxuLy8gZ2V0VG90YWxMZW5ndGgoKSBlcXVpdmFsZW50IGZvciBjaXJjbGUsIHJlY3QsIHBvbHlsaW5lLCBwb2x5Z29uIGFuZCBsaW5lIHNoYXBlc1xuLy8gYWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL1NlYkxhbWJsYS8zZTA1NTBjNDk2YzIzNjcwOTc0NFxuXG5mdW5jdGlvbiBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMi54IC0gcDEueCwgMikgKyBNYXRoLnBvdyhwMi55IC0gcDEueSwgMikpO1xufVxuXG5mdW5jdGlvbiBnZXRDaXJjbGVMZW5ndGgoZWwpIHtcbiAgcmV0dXJuIE1hdGguUEkgKiAyICogZ2V0QXR0cmlidXRlKGVsLCAncicpO1xufVxuXG5mdW5jdGlvbiBnZXRSZWN0TGVuZ3RoKGVsKSB7XG4gIHJldHVybiAoZ2V0QXR0cmlidXRlKGVsLCAnd2lkdGgnKSAqIDIpICsgKGdldEF0dHJpYnV0ZShlbCwgJ2hlaWdodCcpICogMik7XG59XG5cbmZ1bmN0aW9uIGdldExpbmVMZW5ndGgoZWwpIHtcbiAgcmV0dXJuIGdldERpc3RhbmNlKFxuICAgIHt4OiBnZXRBdHRyaWJ1dGUoZWwsICd4MScpLCB5OiBnZXRBdHRyaWJ1dGUoZWwsICd5MScpfSxcbiAgICB7eDogZ2V0QXR0cmlidXRlKGVsLCAneDInKSwgeTogZ2V0QXR0cmlidXRlKGVsLCAneTInKX1cbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0UG9seWxpbmVMZW5ndGgoZWwpIHtcbiAgdmFyIHBvaW50cyA9IGVsLnBvaW50cztcbiAgdmFyIHRvdGFsTGVuZ3RoID0gMDtcbiAgdmFyIHByZXZpb3VzUG9zO1xuICBmb3IgKHZhciBpID0gMCA7IGkgPCBwb2ludHMubnVtYmVyT2ZJdGVtczsgaSsrKSB7XG4gICAgdmFyIGN1cnJlbnRQb3MgPSBwb2ludHMuZ2V0SXRlbShpKTtcbiAgICBpZiAoaSA+IDApIHsgdG90YWxMZW5ndGggKz0gZ2V0RGlzdGFuY2UocHJldmlvdXNQb3MsIGN1cnJlbnRQb3MpOyB9XG4gICAgcHJldmlvdXNQb3MgPSBjdXJyZW50UG9zO1xuICB9XG4gIHJldHVybiB0b3RhbExlbmd0aDtcbn1cblxuZnVuY3Rpb24gZ2V0UG9seWdvbkxlbmd0aChlbCkge1xuICB2YXIgcG9pbnRzID0gZWwucG9pbnRzO1xuICByZXR1cm4gZ2V0UG9seWxpbmVMZW5ndGgoZWwpICsgZ2V0RGlzdGFuY2UocG9pbnRzLmdldEl0ZW0ocG9pbnRzLm51bWJlck9mSXRlbXMgLSAxKSwgcG9pbnRzLmdldEl0ZW0oMCkpO1xufVxuXG4vLyBQYXRoIGFuaW1hdGlvblxuXG5mdW5jdGlvbiBnZXRUb3RhbExlbmd0aChlbCkge1xuICBpZiAoZWwuZ2V0VG90YWxMZW5ndGgpIHsgcmV0dXJuIGVsLmdldFRvdGFsTGVuZ3RoKCk7IH1cbiAgc3dpdGNoKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2NpcmNsZSc6IHJldHVybiBnZXRDaXJjbGVMZW5ndGgoZWwpO1xuICAgIGNhc2UgJ3JlY3QnOiByZXR1cm4gZ2V0UmVjdExlbmd0aChlbCk7XG4gICAgY2FzZSAnbGluZSc6IHJldHVybiBnZXRMaW5lTGVuZ3RoKGVsKTtcbiAgICBjYXNlICdwb2x5bGluZSc6IHJldHVybiBnZXRQb2x5bGluZUxlbmd0aChlbCk7XG4gICAgY2FzZSAncG9seWdvbic6IHJldHVybiBnZXRQb2x5Z29uTGVuZ3RoKGVsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXREYXNob2Zmc2V0KGVsKSB7XG4gIHZhciBwYXRoTGVuZ3RoID0gZ2V0VG90YWxMZW5ndGgoZWwpO1xuICBlbC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBwYXRoTGVuZ3RoKTtcbiAgcmV0dXJuIHBhdGhMZW5ndGg7XG59XG5cbi8vIE1vdGlvbiBwYXRoXG5cbmZ1bmN0aW9uIGdldFBhcmVudFN2Z0VsKGVsKSB7XG4gIHZhciBwYXJlbnRFbCA9IGVsLnBhcmVudE5vZGU7XG4gIHdoaWxlIChpcy5zdmcocGFyZW50RWwpKSB7XG4gICAgcGFyZW50RWwgPSBwYXJlbnRFbC5wYXJlbnROb2RlO1xuICAgIGlmICghaXMuc3ZnKHBhcmVudEVsLnBhcmVudE5vZGUpKSB7IGJyZWFrOyB9XG4gIH1cbiAgcmV0dXJuIHBhcmVudEVsO1xufVxuXG5mdW5jdGlvbiBnZXRQYXJlbnRTdmcocGF0aEVsLCBzdmdEYXRhKSB7XG4gIHZhciBzdmcgPSBzdmdEYXRhIHx8IHt9O1xuICB2YXIgcGFyZW50U3ZnRWwgPSBzdmcuZWwgfHwgZ2V0UGFyZW50U3ZnRWwocGF0aEVsKTtcbiAgdmFyIHJlY3QgPSBwYXJlbnRTdmdFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIHZpZXdCb3hBdHRyID0gZ2V0QXR0cmlidXRlKHBhcmVudFN2Z0VsLCAndmlld0JveCcpO1xuICB2YXIgd2lkdGggPSByZWN0LndpZHRoO1xuICB2YXIgaGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG4gIHZhciB2aWV3Qm94ID0gc3ZnLnZpZXdCb3ggfHwgKHZpZXdCb3hBdHRyID8gdmlld0JveEF0dHIuc3BsaXQoJyAnKSA6IFswLCAwLCB3aWR0aCwgaGVpZ2h0XSk7XG4gIHJldHVybiB7XG4gICAgZWw6IHBhcmVudFN2Z0VsLFxuICAgIHZpZXdCb3g6IHZpZXdCb3gsXG4gICAgeDogdmlld0JveFswXSAvIDEsXG4gICAgeTogdmlld0JveFsxXSAvIDEsXG4gICAgdzogd2lkdGggLyB2aWV3Qm94WzJdLFxuICAgIGg6IGhlaWdodCAvIHZpZXdCb3hbM11cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQYXRoKHBhdGgsIHBlcmNlbnQpIHtcbiAgdmFyIHBhdGhFbCA9IGlzLnN0cihwYXRoKSA/IHNlbGVjdFN0cmluZyhwYXRoKVswXSA6IHBhdGg7XG4gIHZhciBwID0gcGVyY2VudCB8fCAxMDA7XG4gIHJldHVybiBmdW5jdGlvbihwcm9wZXJ0eSkge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wZXJ0eTogcHJvcGVydHksXG4gICAgICBlbDogcGF0aEVsLFxuICAgICAgc3ZnOiBnZXRQYXJlbnRTdmcocGF0aEVsKSxcbiAgICAgIHRvdGFsTGVuZ3RoOiBnZXRUb3RhbExlbmd0aChwYXRoRWwpICogKHAgLyAxMDApXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBhdGhQcm9ncmVzcyhwYXRoLCBwcm9ncmVzcykge1xuICBmdW5jdGlvbiBwb2ludChvZmZzZXQpIHtcbiAgICBpZiAoIG9mZnNldCA9PT0gdm9pZCAwICkgb2Zmc2V0ID0gMDtcblxuICAgIHZhciBsID0gcHJvZ3Jlc3MgKyBvZmZzZXQgPj0gMSA/IHByb2dyZXNzICsgb2Zmc2V0IDogMDtcbiAgICByZXR1cm4gcGF0aC5lbC5nZXRQb2ludEF0TGVuZ3RoKGwpO1xuICB9XG4gIHZhciBzdmcgPSBnZXRQYXJlbnRTdmcocGF0aC5lbCwgcGF0aC5zdmcpO1xuICB2YXIgcCA9IHBvaW50KCk7XG4gIHZhciBwMCA9IHBvaW50KC0xKTtcbiAgdmFyIHAxID0gcG9pbnQoKzEpO1xuICBzd2l0Y2ggKHBhdGgucHJvcGVydHkpIHtcbiAgICBjYXNlICd4JzogcmV0dXJuIChwLnggLSBzdmcueCkgKiBzdmcudztcbiAgICBjYXNlICd5JzogcmV0dXJuIChwLnkgLSBzdmcueSkgKiBzdmcuaDtcbiAgICBjYXNlICdhbmdsZSc6IHJldHVybiBNYXRoLmF0YW4yKHAxLnkgLSBwMC55LCBwMS54IC0gcDAueCkgKiAxODAgLyBNYXRoLlBJO1xuICB9XG59XG5cbi8vIERlY29tcG9zZSB2YWx1ZVxuXG5mdW5jdGlvbiBkZWNvbXBvc2VWYWx1ZSh2YWwsIHVuaXQpIHtcbiAgdmFyIHJneCA9IC8tP1xcZCpcXC4/XFxkKy9nO1xuICB2YXIgdmFsdWUgPSB2YWxpZGF0ZVZhbHVlKChpcy5wdGgodmFsKSA/IHZhbC50b3RhbExlbmd0aCA6IHZhbCksIHVuaXQpICsgJyc7XG4gIHJldHVybiB7XG4gICAgb3JpZ2luYWw6IHZhbHVlLFxuICAgIG51bWJlcnM6IHZhbHVlLm1hdGNoKHJneCkgPyB2YWx1ZS5tYXRjaChyZ3gpLm1hcChOdW1iZXIpIDogWzBdLFxuICAgIHN0cmluZ3M6IChpcy5zdHIodmFsKSB8fCB1bml0KSA/IHZhbHVlLnNwbGl0KHJneCkgOiBbXVxuICB9XG59XG5cbi8vIEFuaW1hdGFibGVzXG5cbmZ1bmN0aW9uIHBhcnNlVGFyZ2V0cyh0YXJnZXRzKSB7XG4gIHZhciB0YXJnZXRzQXJyYXkgPSB0YXJnZXRzID8gKGZsYXR0ZW5BcnJheShpcy5hcnIodGFyZ2V0cykgPyB0YXJnZXRzLm1hcCh0b0FycmF5KSA6IHRvQXJyYXkodGFyZ2V0cykpKSA6IFtdO1xuICByZXR1cm4gZmlsdGVyQXJyYXkodGFyZ2V0c0FycmF5LCBmdW5jdGlvbiAoaXRlbSwgcG9zLCBzZWxmKSB7IHJldHVybiBzZWxmLmluZGV4T2YoaXRlbSkgPT09IHBvczsgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEFuaW1hdGFibGVzKHRhcmdldHMpIHtcbiAgdmFyIHBhcnNlZCA9IHBhcnNlVGFyZ2V0cyh0YXJnZXRzKTtcbiAgcmV0dXJuIHBhcnNlZC5tYXAoZnVuY3Rpb24gKHQsIGkpIHtcbiAgICByZXR1cm4ge3RhcmdldDogdCwgaWQ6IGksIHRvdGFsOiBwYXJzZWQubGVuZ3RoLCB0cmFuc2Zvcm1zOiB7IGxpc3Q6IGdldEVsZW1lbnRUcmFuc2Zvcm1zKHQpIH0gfTtcbiAgfSk7XG59XG5cbi8vIFByb3BlcnRpZXNcblxuZnVuY3Rpb24gbm9ybWFsaXplUHJvcGVydHlUd2VlbnMocHJvcCwgdHdlZW5TZXR0aW5ncykge1xuICB2YXIgc2V0dGluZ3MgPSBjbG9uZU9iamVjdCh0d2VlblNldHRpbmdzKTtcbiAgLy8gT3ZlcnJpZGUgZHVyYXRpb24gaWYgZWFzaW5nIGlzIGEgc3ByaW5nXG4gIGlmICgvXnNwcmluZy8udGVzdChzZXR0aW5ncy5lYXNpbmcpKSB7IHNldHRpbmdzLmR1cmF0aW9uID0gc3ByaW5nKHNldHRpbmdzLmVhc2luZyk7IH1cbiAgaWYgKGlzLmFycihwcm9wKSkge1xuICAgIHZhciBsID0gcHJvcC5sZW5ndGg7XG4gICAgdmFyIGlzRnJvbVRvID0gKGwgPT09IDIgJiYgIWlzLm9iaihwcm9wWzBdKSk7XG4gICAgaWYgKCFpc0Zyb21Ubykge1xuICAgICAgLy8gRHVyYXRpb24gZGl2aWRlZCBieSB0aGUgbnVtYmVyIG9mIHR3ZWVuc1xuICAgICAgaWYgKCFpcy5mbmModHdlZW5TZXR0aW5ncy5kdXJhdGlvbikpIHsgc2V0dGluZ3MuZHVyYXRpb24gPSB0d2VlblNldHRpbmdzLmR1cmF0aW9uIC8gbDsgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUcmFuc2Zvcm0gW2Zyb20sIHRvXSB2YWx1ZXMgc2hvcnRoYW5kIHRvIGEgdmFsaWQgdHdlZW4gdmFsdWVcbiAgICAgIHByb3AgPSB7dmFsdWU6IHByb3B9O1xuICAgIH1cbiAgfVxuICB2YXIgcHJvcEFycmF5ID0gaXMuYXJyKHByb3ApID8gcHJvcCA6IFtwcm9wXTtcbiAgcmV0dXJuIHByb3BBcnJheS5tYXAoZnVuY3Rpb24gKHYsIGkpIHtcbiAgICB2YXIgb2JqID0gKGlzLm9iaih2KSAmJiAhaXMucHRoKHYpKSA/IHYgOiB7dmFsdWU6IHZ9O1xuICAgIC8vIERlZmF1bHQgZGVsYXkgdmFsdWUgc2hvdWxkIG9ubHkgYmUgYXBwbGllZCB0byB0aGUgZmlyc3QgdHdlZW5cbiAgICBpZiAoaXMudW5kKG9iai5kZWxheSkpIHsgb2JqLmRlbGF5ID0gIWkgPyB0d2VlblNldHRpbmdzLmRlbGF5IDogMDsgfVxuICAgIC8vIERlZmF1bHQgZW5kRGVsYXkgdmFsdWUgc2hvdWxkIG9ubHkgYmUgYXBwbGllZCB0byB0aGUgbGFzdCB0d2VlblxuICAgIGlmIChpcy51bmQob2JqLmVuZERlbGF5KSkgeyBvYmouZW5kRGVsYXkgPSBpID09PSBwcm9wQXJyYXkubGVuZ3RoIC0gMSA/IHR3ZWVuU2V0dGluZ3MuZW5kRGVsYXkgOiAwOyB9XG4gICAgcmV0dXJuIG9iajtcbiAgfSkubWFwKGZ1bmN0aW9uIChrKSB7IHJldHVybiBtZXJnZU9iamVjdHMoaywgc2V0dGluZ3MpOyB9KTtcbn1cblxuXG5mdW5jdGlvbiBmbGF0dGVuS2V5ZnJhbWVzKGtleWZyYW1lcykge1xuICB2YXIgcHJvcGVydHlOYW1lcyA9IGZpbHRlckFycmF5KGZsYXR0ZW5BcnJheShrZXlmcmFtZXMubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIE9iamVjdC5rZXlzKGtleSk7IH0pKSwgZnVuY3Rpb24gKHApIHsgcmV0dXJuIGlzLmtleShwKTsgfSlcbiAgLnJlZHVjZShmdW5jdGlvbiAoYSxiKSB7IGlmIChhLmluZGV4T2YoYikgPCAwKSB7IGEucHVzaChiKTsgfSByZXR1cm4gYTsgfSwgW10pO1xuICB2YXIgcHJvcGVydGllcyA9IHt9O1xuICB2YXIgbG9vcCA9IGZ1bmN0aW9uICggaSApIHtcbiAgICB2YXIgcHJvcE5hbWUgPSBwcm9wZXJ0eU5hbWVzW2ldO1xuICAgIHByb3BlcnRpZXNbcHJvcE5hbWVdID0ga2V5ZnJhbWVzLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbmV3S2V5ID0ge307XG4gICAgICBmb3IgKHZhciBwIGluIGtleSkge1xuICAgICAgICBpZiAoaXMua2V5KHApKSB7XG4gICAgICAgICAgaWYgKHAgPT0gcHJvcE5hbWUpIHsgbmV3S2V5LnZhbHVlID0ga2V5W3BdOyB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3S2V5W3BdID0ga2V5W3BdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3S2V5O1xuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydHlOYW1lcy5sZW5ndGg7IGkrKykgbG9vcCggaSApO1xuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydGllcyh0d2VlblNldHRpbmdzLCBwYXJhbXMpIHtcbiAgdmFyIHByb3BlcnRpZXMgPSBbXTtcbiAgdmFyIGtleWZyYW1lcyA9IHBhcmFtcy5rZXlmcmFtZXM7XG4gIGlmIChrZXlmcmFtZXMpIHsgcGFyYW1zID0gbWVyZ2VPYmplY3RzKGZsYXR0ZW5LZXlmcmFtZXMoa2V5ZnJhbWVzKSwgcGFyYW1zKTsgfVxuICBmb3IgKHZhciBwIGluIHBhcmFtcykge1xuICAgIGlmIChpcy5rZXkocCkpIHtcbiAgICAgIHByb3BlcnRpZXMucHVzaCh7XG4gICAgICAgIG5hbWU6IHAsXG4gICAgICAgIHR3ZWVuczogbm9ybWFsaXplUHJvcGVydHlUd2VlbnMocGFyYW1zW3BdLCB0d2VlblNldHRpbmdzKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG4vLyBUd2VlbnNcblxuZnVuY3Rpb24gbm9ybWFsaXplVHdlZW5WYWx1ZXModHdlZW4sIGFuaW1hdGFibGUpIHtcbiAgdmFyIHQgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiB0d2Vlbikge1xuICAgIHZhciB2YWx1ZSA9IGdldEZ1bmN0aW9uVmFsdWUodHdlZW5bcF0sIGFuaW1hdGFibGUpO1xuICAgIGlmIChpcy5hcnIodmFsdWUpKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gZ2V0RnVuY3Rpb25WYWx1ZSh2LCBhbmltYXRhYmxlKTsgfSk7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAxKSB7IHZhbHVlID0gdmFsdWVbMF07IH1cbiAgICB9XG4gICAgdFtwXSA9IHZhbHVlO1xuICB9XG4gIHQuZHVyYXRpb24gPSBwYXJzZUZsb2F0KHQuZHVyYXRpb24pO1xuICB0LmRlbGF5ID0gcGFyc2VGbG9hdCh0LmRlbGF5KTtcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVR3ZWVucyhwcm9wLCBhbmltYXRhYmxlKSB7XG4gIHZhciBwcmV2aW91c1R3ZWVuO1xuICByZXR1cm4gcHJvcC50d2VlbnMubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIHR3ZWVuID0gbm9ybWFsaXplVHdlZW5WYWx1ZXModCwgYW5pbWF0YWJsZSk7XG4gICAgdmFyIHR3ZWVuVmFsdWUgPSB0d2Vlbi52YWx1ZTtcbiAgICB2YXIgdG8gPSBpcy5hcnIodHdlZW5WYWx1ZSkgPyB0d2VlblZhbHVlWzFdIDogdHdlZW5WYWx1ZTtcbiAgICB2YXIgdG9Vbml0ID0gZ2V0VW5pdCh0byk7XG4gICAgdmFyIG9yaWdpbmFsVmFsdWUgPSBnZXRPcmlnaW5hbFRhcmdldFZhbHVlKGFuaW1hdGFibGUudGFyZ2V0LCBwcm9wLm5hbWUsIHRvVW5pdCwgYW5pbWF0YWJsZSk7XG4gICAgdmFyIHByZXZpb3VzVmFsdWUgPSBwcmV2aW91c1R3ZWVuID8gcHJldmlvdXNUd2Vlbi50by5vcmlnaW5hbCA6IG9yaWdpbmFsVmFsdWU7XG4gICAgdmFyIGZyb20gPSBpcy5hcnIodHdlZW5WYWx1ZSkgPyB0d2VlblZhbHVlWzBdIDogcHJldmlvdXNWYWx1ZTtcbiAgICB2YXIgZnJvbVVuaXQgPSBnZXRVbml0KGZyb20pIHx8IGdldFVuaXQob3JpZ2luYWxWYWx1ZSk7XG4gICAgdmFyIHVuaXQgPSB0b1VuaXQgfHwgZnJvbVVuaXQ7XG4gICAgaWYgKGlzLnVuZCh0bykpIHsgdG8gPSBwcmV2aW91c1ZhbHVlOyB9XG4gICAgdHdlZW4uZnJvbSA9IGRlY29tcG9zZVZhbHVlKGZyb20sIHVuaXQpO1xuICAgIHR3ZWVuLnRvID0gZGVjb21wb3NlVmFsdWUoZ2V0UmVsYXRpdmVWYWx1ZSh0bywgZnJvbSksIHVuaXQpO1xuICAgIHR3ZWVuLnN0YXJ0ID0gcHJldmlvdXNUd2VlbiA/IHByZXZpb3VzVHdlZW4uZW5kIDogMDtcbiAgICB0d2Vlbi5lbmQgPSB0d2Vlbi5zdGFydCArIHR3ZWVuLmRlbGF5ICsgdHdlZW4uZHVyYXRpb24gKyB0d2Vlbi5lbmREZWxheTtcbiAgICB0d2Vlbi5lYXNpbmcgPSBwYXJzZUVhc2luZ3ModHdlZW4uZWFzaW5nLCB0d2Vlbi5kdXJhdGlvbik7XG4gICAgdHdlZW4uaXNQYXRoID0gaXMucHRoKHR3ZWVuVmFsdWUpO1xuICAgIHR3ZWVuLmlzQ29sb3IgPSBpcy5jb2wodHdlZW4uZnJvbS5vcmlnaW5hbCk7XG4gICAgaWYgKHR3ZWVuLmlzQ29sb3IpIHsgdHdlZW4ucm91bmQgPSAxOyB9XG4gICAgcHJldmlvdXNUd2VlbiA9IHR3ZWVuO1xuICAgIHJldHVybiB0d2VlbjtcbiAgfSk7XG59XG5cbi8vIFR3ZWVuIHByb2dyZXNzXG5cbnZhciBzZXRQcm9ncmVzc1ZhbHVlID0ge1xuICBjc3M6IGZ1bmN0aW9uICh0LCBwLCB2KSB7IHJldHVybiB0LnN0eWxlW3BdID0gdjsgfSxcbiAgYXR0cmlidXRlOiBmdW5jdGlvbiAodCwgcCwgdikgeyByZXR1cm4gdC5zZXRBdHRyaWJ1dGUocCwgdik7IH0sXG4gIG9iamVjdDogZnVuY3Rpb24gKHQsIHAsIHYpIHsgcmV0dXJuIHRbcF0gPSB2OyB9LFxuICB0cmFuc2Zvcm06IGZ1bmN0aW9uICh0LCBwLCB2LCB0cmFuc2Zvcm1zLCBtYW51YWwpIHtcbiAgICB0cmFuc2Zvcm1zLmxpc3Quc2V0KHAsIHYpO1xuICAgIGlmIChwID09PSB0cmFuc2Zvcm1zLmxhc3QgfHwgbWFudWFsKSB7XG4gICAgICB2YXIgc3RyID0gJyc7XG4gICAgICB0cmFuc2Zvcm1zLmxpc3QuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIHByb3ApIHsgc3RyICs9IHByb3AgKyBcIihcIiArIHZhbHVlICsgXCIpIFwiOyB9KTtcbiAgICAgIHQuc3R5bGUudHJhbnNmb3JtID0gc3RyO1xuICAgIH1cbiAgfVxufTtcblxuLy8gU2V0IFZhbHVlIGhlbHBlclxuXG5mdW5jdGlvbiBzZXRUYXJnZXRzVmFsdWUodGFyZ2V0cywgcHJvcGVydGllcykge1xuICB2YXIgYW5pbWF0YWJsZXMgPSBnZXRBbmltYXRhYmxlcyh0YXJnZXRzKTtcbiAgYW5pbWF0YWJsZXMuZm9yRWFjaChmdW5jdGlvbiAoYW5pbWF0YWJsZSkge1xuICAgIGZvciAodmFyIHByb3BlcnR5IGluIHByb3BlcnRpZXMpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGdldEZ1bmN0aW9uVmFsdWUocHJvcGVydGllc1twcm9wZXJ0eV0sIGFuaW1hdGFibGUpO1xuICAgICAgdmFyIHRhcmdldCA9IGFuaW1hdGFibGUudGFyZ2V0O1xuICAgICAgdmFyIHZhbHVlVW5pdCA9IGdldFVuaXQodmFsdWUpO1xuICAgICAgdmFyIG9yaWdpbmFsVmFsdWUgPSBnZXRPcmlnaW5hbFRhcmdldFZhbHVlKHRhcmdldCwgcHJvcGVydHksIHZhbHVlVW5pdCwgYW5pbWF0YWJsZSk7XG4gICAgICB2YXIgdW5pdCA9IHZhbHVlVW5pdCB8fCBnZXRVbml0KG9yaWdpbmFsVmFsdWUpO1xuICAgICAgdmFyIHRvID0gZ2V0UmVsYXRpdmVWYWx1ZSh2YWxpZGF0ZVZhbHVlKHZhbHVlLCB1bml0KSwgb3JpZ2luYWxWYWx1ZSk7XG4gICAgICB2YXIgYW5pbVR5cGUgPSBnZXRBbmltYXRpb25UeXBlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgc2V0UHJvZ3Jlc3NWYWx1ZVthbmltVHlwZV0odGFyZ2V0LCBwcm9wZXJ0eSwgdG8sIGFuaW1hdGFibGUudHJhbnNmb3JtcywgdHJ1ZSk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gQW5pbWF0aW9uc1xuXG5mdW5jdGlvbiBjcmVhdGVBbmltYXRpb24oYW5pbWF0YWJsZSwgcHJvcCkge1xuICB2YXIgYW5pbVR5cGUgPSBnZXRBbmltYXRpb25UeXBlKGFuaW1hdGFibGUudGFyZ2V0LCBwcm9wLm5hbWUpO1xuICBpZiAoYW5pbVR5cGUpIHtcbiAgICB2YXIgdHdlZW5zID0gbm9ybWFsaXplVHdlZW5zKHByb3AsIGFuaW1hdGFibGUpO1xuICAgIHZhciBsYXN0VHdlZW4gPSB0d2VlbnNbdHdlZW5zLmxlbmd0aCAtIDFdO1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBhbmltVHlwZSxcbiAgICAgIHByb3BlcnR5OiBwcm9wLm5hbWUsXG4gICAgICBhbmltYXRhYmxlOiBhbmltYXRhYmxlLFxuICAgICAgdHdlZW5zOiB0d2VlbnMsXG4gICAgICBkdXJhdGlvbjogbGFzdFR3ZWVuLmVuZCxcbiAgICAgIGRlbGF5OiB0d2VlbnNbMF0uZGVsYXksXG4gICAgICBlbmREZWxheTogbGFzdFR3ZWVuLmVuZERlbGF5XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFuaW1hdGlvbnMoYW5pbWF0YWJsZXMsIHByb3BlcnRpZXMpIHtcbiAgcmV0dXJuIGZpbHRlckFycmF5KGZsYXR0ZW5BcnJheShhbmltYXRhYmxlcy5tYXAoZnVuY3Rpb24gKGFuaW1hdGFibGUpIHtcbiAgICByZXR1cm4gcHJvcGVydGllcy5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHJldHVybiBjcmVhdGVBbmltYXRpb24oYW5pbWF0YWJsZSwgcHJvcCk7XG4gICAgfSk7XG4gIH0pKSwgZnVuY3Rpb24gKGEpIHsgcmV0dXJuICFpcy51bmQoYSk7IH0pO1xufVxuXG4vLyBDcmVhdGUgSW5zdGFuY2VcblxuZnVuY3Rpb24gZ2V0SW5zdGFuY2VUaW1pbmdzKGFuaW1hdGlvbnMsIHR3ZWVuU2V0dGluZ3MpIHtcbiAgdmFyIGFuaW1MZW5ndGggPSBhbmltYXRpb25zLmxlbmd0aDtcbiAgdmFyIGdldFRsT2Zmc2V0ID0gZnVuY3Rpb24gKGFuaW0pIHsgcmV0dXJuIGFuaW0udGltZWxpbmVPZmZzZXQgPyBhbmltLnRpbWVsaW5lT2Zmc2V0IDogMDsgfTtcbiAgdmFyIHRpbWluZ3MgPSB7fTtcbiAgdGltaW5ncy5kdXJhdGlvbiA9IGFuaW1MZW5ndGggPyBNYXRoLm1heC5hcHBseShNYXRoLCBhbmltYXRpb25zLm1hcChmdW5jdGlvbiAoYW5pbSkgeyByZXR1cm4gZ2V0VGxPZmZzZXQoYW5pbSkgKyBhbmltLmR1cmF0aW9uOyB9KSkgOiB0d2VlblNldHRpbmdzLmR1cmF0aW9uO1xuICB0aW1pbmdzLmRlbGF5ID0gYW5pbUxlbmd0aCA/IE1hdGgubWluLmFwcGx5KE1hdGgsIGFuaW1hdGlvbnMubWFwKGZ1bmN0aW9uIChhbmltKSB7IHJldHVybiBnZXRUbE9mZnNldChhbmltKSArIGFuaW0uZGVsYXk7IH0pKSA6IHR3ZWVuU2V0dGluZ3MuZGVsYXk7XG4gIHRpbWluZ3MuZW5kRGVsYXkgPSBhbmltTGVuZ3RoID8gdGltaW5ncy5kdXJhdGlvbiAtIE1hdGgubWF4LmFwcGx5KE1hdGgsIGFuaW1hdGlvbnMubWFwKGZ1bmN0aW9uIChhbmltKSB7IHJldHVybiBnZXRUbE9mZnNldChhbmltKSArIGFuaW0uZHVyYXRpb24gLSBhbmltLmVuZERlbGF5OyB9KSkgOiB0d2VlblNldHRpbmdzLmVuZERlbGF5O1xuICByZXR1cm4gdGltaW5ncztcbn1cblxudmFyIGluc3RhbmNlSUQgPSAwO1xuXG5mdW5jdGlvbiBjcmVhdGVOZXdJbnN0YW5jZShwYXJhbXMpIHtcbiAgdmFyIGluc3RhbmNlU2V0dGluZ3MgPSByZXBsYWNlT2JqZWN0UHJvcHMoZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MsIHBhcmFtcyk7XG4gIHZhciB0d2VlblNldHRpbmdzID0gcmVwbGFjZU9iamVjdFByb3BzKGRlZmF1bHRUd2VlblNldHRpbmdzLCBwYXJhbXMpO1xuICB2YXIgcHJvcGVydGllcyA9IGdldFByb3BlcnRpZXModHdlZW5TZXR0aW5ncywgcGFyYW1zKTtcbiAgdmFyIGFuaW1hdGFibGVzID0gZ2V0QW5pbWF0YWJsZXMocGFyYW1zLnRhcmdldHMpO1xuICB2YXIgYW5pbWF0aW9ucyA9IGdldEFuaW1hdGlvbnMoYW5pbWF0YWJsZXMsIHByb3BlcnRpZXMpO1xuICB2YXIgdGltaW5ncyA9IGdldEluc3RhbmNlVGltaW5ncyhhbmltYXRpb25zLCB0d2VlblNldHRpbmdzKTtcbiAgdmFyIGlkID0gaW5zdGFuY2VJRDtcbiAgaW5zdGFuY2VJRCsrO1xuICByZXR1cm4gbWVyZ2VPYmplY3RzKGluc3RhbmNlU2V0dGluZ3MsIHtcbiAgICBpZDogaWQsXG4gICAgY2hpbGRyZW46IFtdLFxuICAgIGFuaW1hdGFibGVzOiBhbmltYXRhYmxlcyxcbiAgICBhbmltYXRpb25zOiBhbmltYXRpb25zLFxuICAgIGR1cmF0aW9uOiB0aW1pbmdzLmR1cmF0aW9uLFxuICAgIGRlbGF5OiB0aW1pbmdzLmRlbGF5LFxuICAgIGVuZERlbGF5OiB0aW1pbmdzLmVuZERlbGF5XG4gIH0pO1xufVxuXG4vLyBDb3JlXG5cbnZhciBhY3RpdmVJbnN0YW5jZXMgPSBbXTtcbnZhciBwYXVzZWRJbnN0YW5jZXMgPSBbXTtcbnZhciByYWY7XG5cbnZhciBlbmdpbmUgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBwbGF5KCkge1xuICAgIHJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgfVxuICBmdW5jdGlvbiBzdGVwKHQpIHtcbiAgICB2YXIgYWN0aXZlSW5zdGFuY2VzTGVuZ3RoID0gYWN0aXZlSW5zdGFuY2VzLmxlbmd0aDtcbiAgICBpZiAoYWN0aXZlSW5zdGFuY2VzTGVuZ3RoKSB7XG4gICAgICB2YXIgaSA9IDA7XG4gICAgICB3aGlsZSAoaSA8IGFjdGl2ZUluc3RhbmNlc0xlbmd0aCkge1xuICAgICAgICB2YXIgYWN0aXZlSW5zdGFuY2UgPSBhY3RpdmVJbnN0YW5jZXNbaV07XG4gICAgICAgIGlmICghYWN0aXZlSW5zdGFuY2UucGF1c2VkKSB7XG4gICAgICAgICAgYWN0aXZlSW5zdGFuY2UudGljayh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaW5zdGFuY2VJbmRleCA9IGFjdGl2ZUluc3RhbmNlcy5pbmRleE9mKGFjdGl2ZUluc3RhbmNlKTtcbiAgICAgICAgICBpZiAoaW5zdGFuY2VJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBhY3RpdmVJbnN0YW5jZXMuc3BsaWNlKGluc3RhbmNlSW5kZXgsIDEpO1xuICAgICAgICAgICAgYWN0aXZlSW5zdGFuY2VzTGVuZ3RoID0gYWN0aXZlSW5zdGFuY2VzLmxlbmd0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgICAgcGxheSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByYWYgPSBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGxheTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UoKSB7XG4gIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICBhY3RpdmVJbnN0YW5jZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5zKSB7IHJldHVybiBpbnMucGF1c2UoKTsgfSk7XG4gICAgcGF1c2VkSW5zdGFuY2VzID0gYWN0aXZlSW5zdGFuY2VzLnNsaWNlKDApO1xuICAgIGFjdGl2ZUluc3RhbmNlcyA9IFtdO1xuICB9IGVsc2Uge1xuICAgIHBhdXNlZEluc3RhbmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbnMpIHsgcmV0dXJuIGlucy5wbGF5KCk7IH0pO1xuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKTtcblxuLy8gUHVibGljIEluc3RhbmNlXG5cbmZ1bmN0aW9uIGFuaW1lKHBhcmFtcykge1xuICBpZiAoIHBhcmFtcyA9PT0gdm9pZCAwICkgcGFyYW1zID0ge307XG5cblxuICB2YXIgc3RhcnRUaW1lID0gMCwgbGFzdFRpbWUgPSAwLCBub3cgPSAwO1xuICB2YXIgY2hpbGRyZW4sIGNoaWxkcmVuTGVuZ3RoID0gMDtcbiAgdmFyIHJlc29sdmUgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIG1ha2VQcm9taXNlKCkge1xuICAgIHJldHVybiB3aW5kb3cuUHJvbWlzZSAmJiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoX3Jlc29sdmUpIHsgcmV0dXJuIHJlc29sdmUgPSBfcmVzb2x2ZTsgfSk7XG4gIH1cblxuICB2YXIgcHJvbWlzZSA9IG1ha2VQcm9taXNlKCk7XG5cbiAgdmFyIGluc3RhbmNlID0gY3JlYXRlTmV3SW5zdGFuY2UocGFyYW1zKTtcblxuICBmdW5jdGlvbiB0b2dnbGVJbnN0YW5jZURpcmVjdGlvbigpIHtcbiAgICBpbnN0YW5jZS5yZXZlcnNlZCA9ICFpbnN0YW5jZS5yZXZlcnNlZDtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gY2hpbGQucmV2ZXJzZWQgPSBpbnN0YW5jZS5yZXZlcnNlZDsgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGp1c3RUaW1lKHRpbWUpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UucmV2ZXJzZWQgPyBpbnN0YW5jZS5kdXJhdGlvbiAtIHRpbWUgOiB0aW1lO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUaW1lKCkge1xuICAgIHN0YXJ0VGltZSA9IDA7XG4gICAgbGFzdFRpbWUgPSBhZGp1c3RUaW1lKGluc3RhbmNlLmN1cnJlbnRUaW1lKSAqICgxIC8gYW5pbWUuc3BlZWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2Vla0NpbGQodGltZSwgY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQpIHsgY2hpbGQuc2Vlayh0aW1lIC0gY2hpbGQudGltZWxpbmVPZmZzZXQpOyB9XG4gIH1cblxuICBmdW5jdGlvbiBzeW5jSW5zdGFuY2VDaGlsZHJlbih0aW1lKSB7XG4gICAgaWYgKCFpbnN0YW5jZS5yZXZlcnNlUGxheWJhY2spIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykgeyBzZWVrQ2lsZCh0aW1lLCBjaGlsZHJlbltpXSk7IH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSQxID0gY2hpbGRyZW5MZW5ndGg7IGkkMS0tOykgeyBzZWVrQ2lsZCh0aW1lLCBjaGlsZHJlbltpJDFdKTsgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnNUaW1lKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBhbmltYXRpb25zID0gaW5zdGFuY2UuYW5pbWF0aW9ucztcbiAgICB2YXIgYW5pbWF0aW9uc0xlbmd0aCA9IGFuaW1hdGlvbnMubGVuZ3RoO1xuICAgIHdoaWxlIChpIDwgYW5pbWF0aW9uc0xlbmd0aCkge1xuICAgICAgdmFyIGFuaW0gPSBhbmltYXRpb25zW2ldO1xuICAgICAgdmFyIGFuaW1hdGFibGUgPSBhbmltLmFuaW1hdGFibGU7XG4gICAgICB2YXIgdHdlZW5zID0gYW5pbS50d2VlbnM7XG4gICAgICB2YXIgdHdlZW5MZW5ndGggPSB0d2VlbnMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciB0d2VlbiA9IHR3ZWVuc1t0d2Vlbkxlbmd0aF07XG4gICAgICAvLyBPbmx5IGNoZWNrIGZvciBrZXlmcmFtZXMgaWYgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZSB0d2VlblxuICAgICAgaWYgKHR3ZWVuTGVuZ3RoKSB7IHR3ZWVuID0gZmlsdGVyQXJyYXkodHdlZW5zLCBmdW5jdGlvbiAodCkgeyByZXR1cm4gKGluc1RpbWUgPCB0LmVuZCk7IH0pWzBdIHx8IHR3ZWVuOyB9XG4gICAgICB2YXIgZWxhcHNlZCA9IG1pbk1heChpbnNUaW1lIC0gdHdlZW4uc3RhcnQgLSB0d2Vlbi5kZWxheSwgMCwgdHdlZW4uZHVyYXRpb24pIC8gdHdlZW4uZHVyYXRpb247XG4gICAgICB2YXIgZWFzZWQgPSBpc05hTihlbGFwc2VkKSA/IDEgOiB0d2Vlbi5lYXNpbmcoZWxhcHNlZCk7XG4gICAgICB2YXIgc3RyaW5ncyA9IHR3ZWVuLnRvLnN0cmluZ3M7XG4gICAgICB2YXIgcm91bmQgPSB0d2Vlbi5yb3VuZDtcbiAgICAgIHZhciBudW1iZXJzID0gW107XG4gICAgICB2YXIgdG9OdW1iZXJzTGVuZ3RoID0gdHdlZW4udG8ubnVtYmVycy5sZW5ndGg7XG4gICAgICB2YXIgcHJvZ3Jlc3MgPSAodm9pZCAwKTtcbiAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdG9OdW1iZXJzTGVuZ3RoOyBuKyspIHtcbiAgICAgICAgdmFyIHZhbHVlID0gKHZvaWQgMCk7XG4gICAgICAgIHZhciB0b051bWJlciA9IHR3ZWVuLnRvLm51bWJlcnNbbl07XG4gICAgICAgIHZhciBmcm9tTnVtYmVyID0gdHdlZW4uZnJvbS5udW1iZXJzW25dIHx8IDA7XG4gICAgICAgIGlmICghdHdlZW4uaXNQYXRoKSB7XG4gICAgICAgICAgdmFsdWUgPSBmcm9tTnVtYmVyICsgKGVhc2VkICogKHRvTnVtYmVyIC0gZnJvbU51bWJlcikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gZ2V0UGF0aFByb2dyZXNzKHR3ZWVuLnZhbHVlLCBlYXNlZCAqIHRvTnVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm91bmQpIHtcbiAgICAgICAgICBpZiAoISh0d2Vlbi5pc0NvbG9yICYmIG4gPiAyKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlICogcm91bmQpIC8gcm91bmQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG51bWJlcnMucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICAvLyBNYW51YWwgQXJyYXkucmVkdWNlIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VzXG4gICAgICB2YXIgc3RyaW5nc0xlbmd0aCA9IHN0cmluZ3MubGVuZ3RoO1xuICAgICAgaWYgKCFzdHJpbmdzTGVuZ3RoKSB7XG4gICAgICAgIHByb2dyZXNzID0gbnVtYmVyc1swXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2dyZXNzID0gc3RyaW5nc1swXTtcbiAgICAgICAgZm9yICh2YXIgcyA9IDA7IHMgPCBzdHJpbmdzTGVuZ3RoOyBzKyspIHtcbiAgICAgICAgICB2YXIgYSA9IHN0cmluZ3Nbc107XG4gICAgICAgICAgdmFyIGIgPSBzdHJpbmdzW3MgKyAxXTtcbiAgICAgICAgICB2YXIgbiQxID0gbnVtYmVyc1tzXTtcbiAgICAgICAgICBpZiAoIWlzTmFOKG4kMSkpIHtcbiAgICAgICAgICAgIGlmICghYikge1xuICAgICAgICAgICAgICBwcm9ncmVzcyArPSBuJDEgKyAnICc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwcm9ncmVzcyArPSBuJDEgKyBiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2V0UHJvZ3Jlc3NWYWx1ZVthbmltLnR5cGVdKGFuaW1hdGFibGUudGFyZ2V0LCBhbmltLnByb3BlcnR5LCBwcm9ncmVzcywgYW5pbWF0YWJsZS50cmFuc2Zvcm1zKTtcbiAgICAgIGFuaW0uY3VycmVudFZhbHVlID0gcHJvZ3Jlc3M7XG4gICAgICBpKys7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0Q2FsbGJhY2soY2IpIHtcbiAgICBpZiAoaW5zdGFuY2VbY2JdICYmICFpbnN0YW5jZS5wYXNzVGhyb3VnaCkgeyBpbnN0YW5jZVtjYl0oaW5zdGFuY2UpOyB9XG4gIH1cblxuICBmdW5jdGlvbiBjb3VudEl0ZXJhdGlvbigpIHtcbiAgICBpZiAoaW5zdGFuY2UucmVtYWluaW5nICYmIGluc3RhbmNlLnJlbWFpbmluZyAhPT0gdHJ1ZSkge1xuICAgICAgaW5zdGFuY2UucmVtYWluaW5nLS07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0SW5zdGFuY2VQcm9ncmVzcyhlbmdpbmVUaW1lKSB7XG4gICAgdmFyIGluc0R1cmF0aW9uID0gaW5zdGFuY2UuZHVyYXRpb247XG4gICAgdmFyIGluc0RlbGF5ID0gaW5zdGFuY2UuZGVsYXk7XG4gICAgdmFyIGluc0VuZERlbGF5ID0gaW5zRHVyYXRpb24gLSBpbnN0YW5jZS5lbmREZWxheTtcbiAgICB2YXIgaW5zVGltZSA9IGFkanVzdFRpbWUoZW5naW5lVGltZSk7XG4gICAgaW5zdGFuY2UucHJvZ3Jlc3MgPSBtaW5NYXgoKGluc1RpbWUgLyBpbnNEdXJhdGlvbikgKiAxMDAsIDAsIDEwMCk7XG4gICAgaW5zdGFuY2UucmV2ZXJzZVBsYXliYWNrID0gaW5zVGltZSA8IGluc3RhbmNlLmN1cnJlbnRUaW1lO1xuICAgIGlmIChjaGlsZHJlbikgeyBzeW5jSW5zdGFuY2VDaGlsZHJlbihpbnNUaW1lKTsgfVxuICAgIGlmICghaW5zdGFuY2UuYmVnYW4gJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgPiAwKSB7XG4gICAgICBpbnN0YW5jZS5iZWdhbiA9IHRydWU7XG4gICAgICBzZXRDYWxsYmFjaygnYmVnaW4nKTtcbiAgICAgIHNldENhbGxiYWNrKCdsb29wQmVnaW4nKTtcbiAgICB9XG4gICAgaWYgKGluc1RpbWUgPD0gaW5zRGVsYXkgJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgIT09IDApIHtcbiAgICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcygwKTtcbiAgICB9XG4gICAgaWYgKChpbnNUaW1lID49IGluc0VuZERlbGF5ICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lICE9PSBpbnNEdXJhdGlvbikgfHwgIWluc0R1cmF0aW9uKSB7XG4gICAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zRHVyYXRpb24pO1xuICAgIH1cbiAgICBpZiAoaW5zVGltZSA+IGluc0RlbGF5ICYmIGluc1RpbWUgPCBpbnNFbmREZWxheSkge1xuICAgICAgaWYgKCFpbnN0YW5jZS5jaGFuZ2VCZWdhbikge1xuICAgICAgICBpbnN0YW5jZS5jaGFuZ2VCZWdhbiA9IHRydWU7XG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICBzZXRDYWxsYmFjaygnY2hhbmdlQmVnaW4nKTtcbiAgICAgIH1cbiAgICAgIHNldENhbGxiYWNrKCdjaGFuZ2UnKTtcbiAgICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnNUaW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGluc3RhbmNlLmNoYW5nZUJlZ2FuKSB7XG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUJlZ2FuID0gZmFsc2U7XG4gICAgICAgIHNldENhbGxiYWNrKCdjaGFuZ2VDb21wbGV0ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBpbnN0YW5jZS5jdXJyZW50VGltZSA9IG1pbk1heChpbnNUaW1lLCAwLCBpbnNEdXJhdGlvbik7XG4gICAgaWYgKGluc3RhbmNlLmJlZ2FuKSB7IHNldENhbGxiYWNrKCd1cGRhdGUnKTsgfVxuICAgIGlmIChlbmdpbmVUaW1lID49IGluc0R1cmF0aW9uKSB7XG4gICAgICBsYXN0VGltZSA9IDA7XG4gICAgICBjb3VudEl0ZXJhdGlvbigpO1xuICAgICAgaWYgKGluc3RhbmNlLnJlbWFpbmluZykge1xuICAgICAgICBzdGFydFRpbWUgPSBub3c7XG4gICAgICAgIHNldENhbGxiYWNrKCdsb29wQ29tcGxldGUnKTtcbiAgICAgICAgc2V0Q2FsbGJhY2soJ2xvb3BCZWdpbicpO1xuICAgICAgICBpZiAoaW5zdGFuY2UuZGlyZWN0aW9uID09PSAnYWx0ZXJuYXRlJykgeyB0b2dnbGVJbnN0YW5jZURpcmVjdGlvbigpOyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnN0YW5jZS5wYXVzZWQgPSB0cnVlO1xuICAgICAgICBpZiAoIWluc3RhbmNlLmNvbXBsZXRlZCkge1xuICAgICAgICAgIGluc3RhbmNlLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgc2V0Q2FsbGJhY2soJ2xvb3BDb21wbGV0ZScpO1xuICAgICAgICAgIHNldENhbGxiYWNrKCdjb21wbGV0ZScpO1xuICAgICAgICAgIGlmICgnUHJvbWlzZScgaW4gd2luZG93KSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICBwcm9taXNlID0gbWFrZVByb21pc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnN0YW5jZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkaXJlY3Rpb24gPSBpbnN0YW5jZS5kaXJlY3Rpb247XG4gICAgaW5zdGFuY2UucGFzc1Rocm91Z2ggPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5jdXJyZW50VGltZSA9IDA7XG4gICAgaW5zdGFuY2UucHJvZ3Jlc3MgPSAwO1xuICAgIGluc3RhbmNlLnBhdXNlZCA9IHRydWU7XG4gICAgaW5zdGFuY2UuYmVnYW4gPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5jaGFuZ2VCZWdhbiA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmNoYW5nZUNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIGluc3RhbmNlLnJldmVyc2VQbGF5YmFjayA9IGZhbHNlO1xuICAgIGluc3RhbmNlLnJldmVyc2VkID0gZGlyZWN0aW9uID09PSAncmV2ZXJzZSc7XG4gICAgaW5zdGFuY2UucmVtYWluaW5nID0gaW5zdGFuY2UubG9vcDtcbiAgICBjaGlsZHJlbiA9IGluc3RhbmNlLmNoaWxkcmVuO1xuICAgIGNoaWxkcmVuTGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSBjaGlsZHJlbkxlbmd0aDsgaS0tOykgeyBpbnN0YW5jZS5jaGlsZHJlbltpXS5yZXNldCgpOyB9XG4gICAgaWYgKGluc3RhbmNlLnJldmVyc2VkICYmIGluc3RhbmNlLmxvb3AgIT09IHRydWUgfHwgKGRpcmVjdGlvbiA9PT0gJ2FsdGVybmF0ZScgJiYgaW5zdGFuY2UubG9vcCA9PT0gMSkpIHsgaW5zdGFuY2UucmVtYWluaW5nKys7IH1cbiAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoMCk7XG4gIH07XG5cbiAgLy8gU2V0IFZhbHVlIGhlbHBlclxuXG4gIGluc3RhbmNlLnNldCA9IGZ1bmN0aW9uKHRhcmdldHMsIHByb3BlcnRpZXMpIHtcbiAgICBzZXRUYXJnZXRzVmFsdWUodGFyZ2V0cywgcHJvcGVydGllcyk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xuXG4gIGluc3RhbmNlLnRpY2sgPSBmdW5jdGlvbih0KSB7XG4gICAgbm93ID0gdDtcbiAgICBpZiAoIXN0YXJ0VGltZSkgeyBzdGFydFRpbWUgPSBub3c7IH1cbiAgICBzZXRJbnN0YW5jZVByb2dyZXNzKChub3cgKyAobGFzdFRpbWUgLSBzdGFydFRpbWUpKSAqIGFuaW1lLnNwZWVkKTtcbiAgfTtcblxuICBpbnN0YW5jZS5zZWVrID0gZnVuY3Rpb24odGltZSkge1xuICAgIHNldEluc3RhbmNlUHJvZ3Jlc3MoYWRqdXN0VGltZSh0aW1lKSk7XG4gIH07XG5cbiAgaW5zdGFuY2UucGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgICBpbnN0YW5jZS5wYXVzZWQgPSB0cnVlO1xuICAgIHJlc2V0VGltZSgpO1xuICB9O1xuXG4gIGluc3RhbmNlLnBsYXkgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIWluc3RhbmNlLnBhdXNlZCkgeyByZXR1cm47IH1cbiAgICBpbnN0YW5jZS5wYXVzZWQgPSBmYWxzZTtcbiAgICBhY3RpdmVJbnN0YW5jZXMucHVzaChpbnN0YW5jZSk7XG4gICAgcmVzZXRUaW1lKCk7XG4gICAgaWYgKCFyYWYpIHsgZW5naW5lKCk7IH1cbiAgfTtcblxuICBpbnN0YW5jZS5yZXZlcnNlID0gZnVuY3Rpb24oKSB7XG4gICAgdG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24oKTtcbiAgICByZXNldFRpbWUoKTtcbiAgfTtcblxuICBpbnN0YW5jZS5yZXN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgaW5zdGFuY2UucmVzZXQoKTtcbiAgICBpbnN0YW5jZS5wbGF5KCk7XG4gIH07XG5cbiAgaW5zdGFuY2UuZmluaXNoZWQgPSBwcm9taXNlO1xuICBpbnN0YW5jZS5yZXNldCgpO1xuXG4gIGlmIChpbnN0YW5jZS5hdXRvcGxheSkgeyBpbnN0YW5jZS5wbGF5KCk7IH1cblxuICByZXR1cm4gaW5zdGFuY2U7XG5cbn1cblxuLy8gUmVtb3ZlIHRhcmdldHMgZnJvbSBhbmltYXRpb25cblxuZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb25zKHRhcmdldHNBcnJheSwgYW5pbWF0aW9ucykge1xuICBmb3IgKHZhciBhID0gYW5pbWF0aW9ucy5sZW5ndGg7IGEtLTspIHtcbiAgICBpZiAoYXJyYXlDb250YWlucyh0YXJnZXRzQXJyYXksIGFuaW1hdGlvbnNbYV0uYW5pbWF0YWJsZS50YXJnZXQpKSB7XG4gICAgICBhbmltYXRpb25zLnNwbGljZShhLCAxKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0cyh0YXJnZXRzKSB7XG4gIHZhciB0YXJnZXRzQXJyYXkgPSBwYXJzZVRhcmdldHModGFyZ2V0cyk7XG4gIGZvciAodmFyIGkgPSBhY3RpdmVJbnN0YW5jZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgdmFyIGluc3RhbmNlID0gYWN0aXZlSW5zdGFuY2VzW2ldO1xuICAgIHZhciBhbmltYXRpb25zID0gaW5zdGFuY2UuYW5pbWF0aW9ucztcbiAgICB2YXIgY2hpbGRyZW4gPSBpbnN0YW5jZS5jaGlsZHJlbjtcbiAgICByZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbnModGFyZ2V0c0FycmF5LCBhbmltYXRpb25zKTtcbiAgICBmb3IgKHZhciBjID0gY2hpbGRyZW4ubGVuZ3RoOyBjLS07KSB7XG4gICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltjXTtcbiAgICAgIHZhciBjaGlsZEFuaW1hdGlvbnMgPSBjaGlsZC5hbmltYXRpb25zO1xuICAgICAgcmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb25zKHRhcmdldHNBcnJheSwgY2hpbGRBbmltYXRpb25zKTtcbiAgICAgIGlmICghY2hpbGRBbmltYXRpb25zLmxlbmd0aCAmJiAhY2hpbGQuY2hpbGRyZW4ubGVuZ3RoKSB7IGNoaWxkcmVuLnNwbGljZShjLCAxKTsgfVxuICAgIH1cbiAgICBpZiAoIWFuaW1hdGlvbnMubGVuZ3RoICYmICFjaGlsZHJlbi5sZW5ndGgpIHsgaW5zdGFuY2UucGF1c2UoKTsgfVxuICB9XG59XG5cbi8vIFN0YWdnZXIgaGVscGVyc1xuXG5mdW5jdGlvbiBzdGFnZ2VyKHZhbCwgcGFyYW1zKSB7XG4gIGlmICggcGFyYW1zID09PSB2b2lkIDAgKSBwYXJhbXMgPSB7fTtcblxuICB2YXIgZGlyZWN0aW9uID0gcGFyYW1zLmRpcmVjdGlvbiB8fCAnbm9ybWFsJztcbiAgdmFyIGVhc2luZyA9IHBhcmFtcy5lYXNpbmcgPyBwYXJzZUVhc2luZ3MocGFyYW1zLmVhc2luZykgOiBudWxsO1xuICB2YXIgZ3JpZCA9IHBhcmFtcy5ncmlkO1xuICB2YXIgYXhpcyA9IHBhcmFtcy5heGlzO1xuICB2YXIgZnJvbUluZGV4ID0gcGFyYW1zLmZyb20gfHwgMDtcbiAgdmFyIGZyb21GaXJzdCA9IGZyb21JbmRleCA9PT0gJ2ZpcnN0JztcbiAgdmFyIGZyb21DZW50ZXIgPSBmcm9tSW5kZXggPT09ICdjZW50ZXInO1xuICB2YXIgZnJvbUxhc3QgPSBmcm9tSW5kZXggPT09ICdsYXN0JztcbiAgdmFyIGlzUmFuZ2UgPSBpcy5hcnIodmFsKTtcbiAgdmFyIHZhbDEgPSBpc1JhbmdlID8gcGFyc2VGbG9hdCh2YWxbMF0pIDogcGFyc2VGbG9hdCh2YWwpO1xuICB2YXIgdmFsMiA9IGlzUmFuZ2UgPyBwYXJzZUZsb2F0KHZhbFsxXSkgOiAwO1xuICB2YXIgdW5pdCA9IGdldFVuaXQoaXNSYW5nZSA/IHZhbFsxXSA6IHZhbCkgfHwgMDtcbiAgdmFyIHN0YXJ0ID0gcGFyYW1zLnN0YXJ0IHx8IDAgKyAoaXNSYW5nZSA/IHZhbDEgOiAwKTtcbiAgdmFyIHZhbHVlcyA9IFtdO1xuICB2YXIgbWF4VmFsdWUgPSAwO1xuICByZXR1cm4gZnVuY3Rpb24gKGVsLCBpLCB0KSB7XG4gICAgaWYgKGZyb21GaXJzdCkgeyBmcm9tSW5kZXggPSAwOyB9XG4gICAgaWYgKGZyb21DZW50ZXIpIHsgZnJvbUluZGV4ID0gKHQgLSAxKSAvIDI7IH1cbiAgICBpZiAoZnJvbUxhc3QpIHsgZnJvbUluZGV4ID0gdCAtIDE7IH1cbiAgICBpZiAoIXZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0OyBpbmRleCsrKSB7XG4gICAgICAgIGlmICghZ3JpZCkge1xuICAgICAgICAgIHZhbHVlcy5wdXNoKE1hdGguYWJzKGZyb21JbmRleCAtIGluZGV4KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGZyb21YID0gIWZyb21DZW50ZXIgPyBmcm9tSW5kZXglZ3JpZFswXSA6IChncmlkWzBdLTEpLzI7XG4gICAgICAgICAgdmFyIGZyb21ZID0gIWZyb21DZW50ZXIgPyBNYXRoLmZsb29yKGZyb21JbmRleC9ncmlkWzBdKSA6IChncmlkWzFdLTEpLzI7XG4gICAgICAgICAgdmFyIHRvWCA9IGluZGV4JWdyaWRbMF07XG4gICAgICAgICAgdmFyIHRvWSA9IE1hdGguZmxvb3IoaW5kZXgvZ3JpZFswXSk7XG4gICAgICAgICAgdmFyIGRpc3RhbmNlWCA9IGZyb21YIC0gdG9YO1xuICAgICAgICAgIHZhciBkaXN0YW5jZVkgPSBmcm9tWSAtIHRvWTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBNYXRoLnNxcnQoZGlzdGFuY2VYICogZGlzdGFuY2VYICsgZGlzdGFuY2VZICogZGlzdGFuY2VZKTtcbiAgICAgICAgICBpZiAoYXhpcyA9PT0gJ3gnKSB7IHZhbHVlID0gLWRpc3RhbmNlWDsgfVxuICAgICAgICAgIGlmIChheGlzID09PSAneScpIHsgdmFsdWUgPSAtZGlzdGFuY2VZOyB9XG4gICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIG1heFZhbHVlID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgdmFsdWVzKTtcbiAgICAgIH1cbiAgICAgIGlmIChlYXNpbmcpIHsgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsKSB7IHJldHVybiBlYXNpbmcodmFsIC8gbWF4VmFsdWUpICogbWF4VmFsdWU7IH0pOyB9XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAncmV2ZXJzZScpIHsgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsKSB7IHJldHVybiBheGlzID8gKHZhbCA8IDApID8gdmFsICogLTEgOiAtdmFsIDogTWF0aC5hYnMobWF4VmFsdWUgLSB2YWwpOyB9KTsgfVxuICAgIH1cbiAgICB2YXIgc3BhY2luZyA9IGlzUmFuZ2UgPyAodmFsMiAtIHZhbDEpIC8gbWF4VmFsdWUgOiB2YWwxO1xuICAgIHJldHVybiBzdGFydCArIChzcGFjaW5nICogKE1hdGgucm91bmQodmFsdWVzW2ldICogMTAwKSAvIDEwMCkpICsgdW5pdDtcbiAgfVxufVxuXG4vLyBUaW1lbGluZVxuXG5mdW5jdGlvbiB0aW1lbGluZShwYXJhbXMpIHtcbiAgaWYgKCBwYXJhbXMgPT09IHZvaWQgMCApIHBhcmFtcyA9IHt9O1xuXG4gIHZhciB0bCA9IGFuaW1lKHBhcmFtcyk7XG4gIHRsLmR1cmF0aW9uID0gMDtcbiAgdGwuYWRkID0gZnVuY3Rpb24oaW5zdGFuY2VQYXJhbXMsIHRpbWVsaW5lT2Zmc2V0KSB7XG4gICAgdmFyIHRsSW5kZXggPSBhY3RpdmVJbnN0YW5jZXMuaW5kZXhPZih0bCk7XG4gICAgdmFyIGNoaWxkcmVuID0gdGwuY2hpbGRyZW47XG4gICAgaWYgKHRsSW5kZXggPiAtMSkgeyBhY3RpdmVJbnN0YW5jZXMuc3BsaWNlKHRsSW5kZXgsIDEpOyB9XG4gICAgZnVuY3Rpb24gcGFzc1Rocm91Z2goaW5zKSB7IGlucy5wYXNzVGhyb3VnaCA9IHRydWU7IH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7IHBhc3NUaHJvdWdoKGNoaWxkcmVuW2ldKTsgfVxuICAgIHZhciBpbnNQYXJhbXMgPSBtZXJnZU9iamVjdHMoaW5zdGFuY2VQYXJhbXMsIHJlcGxhY2VPYmplY3RQcm9wcyhkZWZhdWx0VHdlZW5TZXR0aW5ncywgcGFyYW1zKSk7XG4gICAgaW5zUGFyYW1zLnRhcmdldHMgPSBpbnNQYXJhbXMudGFyZ2V0cyB8fCBwYXJhbXMudGFyZ2V0cztcbiAgICB2YXIgdGxEdXJhdGlvbiA9IHRsLmR1cmF0aW9uO1xuICAgIGluc1BhcmFtcy5hdXRvcGxheSA9IGZhbHNlO1xuICAgIGluc1BhcmFtcy5kaXJlY3Rpb24gPSB0bC5kaXJlY3Rpb247XG4gICAgaW5zUGFyYW1zLnRpbWVsaW5lT2Zmc2V0ID0gaXMudW5kKHRpbWVsaW5lT2Zmc2V0KSA/IHRsRHVyYXRpb24gOiBnZXRSZWxhdGl2ZVZhbHVlKHRpbWVsaW5lT2Zmc2V0LCB0bER1cmF0aW9uKTtcbiAgICBwYXNzVGhyb3VnaCh0bCk7XG4gICAgdGwuc2VlayhpbnNQYXJhbXMudGltZWxpbmVPZmZzZXQpO1xuICAgIHZhciBpbnMgPSBhbmltZShpbnNQYXJhbXMpO1xuICAgIHBhc3NUaHJvdWdoKGlucyk7XG4gICAgY2hpbGRyZW4ucHVzaChpbnMpO1xuICAgIHZhciB0aW1pbmdzID0gZ2V0SW5zdGFuY2VUaW1pbmdzKGNoaWxkcmVuLCBwYXJhbXMpO1xuICAgIHRsLmRlbGF5ID0gdGltaW5ncy5kZWxheTtcbiAgICB0bC5lbmREZWxheSA9IHRpbWluZ3MuZW5kRGVsYXk7XG4gICAgdGwuZHVyYXRpb24gPSB0aW1pbmdzLmR1cmF0aW9uO1xuICAgIHRsLnNlZWsoMCk7XG4gICAgdGwucmVzZXQoKTtcbiAgICBpZiAodGwuYXV0b3BsYXkpIHsgdGwucGxheSgpOyB9XG4gICAgcmV0dXJuIHRsO1xuICB9O1xuICByZXR1cm4gdGw7XG59XG5cbmFuaW1lLnZlcnNpb24gPSAnMy4wLjAnO1xuYW5pbWUuc3BlZWQgPSAxO1xuYW5pbWUucnVubmluZyA9IGFjdGl2ZUluc3RhbmNlcztcbmFuaW1lLnJlbW92ZSA9IHJlbW92ZVRhcmdldHM7XG5hbmltZS5nZXQgPSBnZXRPcmlnaW5hbFRhcmdldFZhbHVlO1xuYW5pbWUuc2V0ID0gc2V0VGFyZ2V0c1ZhbHVlO1xuYW5pbWUuY29udmVydFB4ID0gY29udmVydFB4VG9Vbml0O1xuYW5pbWUucGF0aCA9IGdldFBhdGg7XG5hbmltZS5zZXREYXNob2Zmc2V0ID0gc2V0RGFzaG9mZnNldDtcbmFuaW1lLnN0YWdnZXIgPSBzdGFnZ2VyO1xuYW5pbWUudGltZWxpbmUgPSB0aW1lbGluZTtcbmFuaW1lLmVhc2luZyA9IHBhcnNlRWFzaW5ncztcbmFuaW1lLnBlbm5lciA9IHBlbm5lcjtcbmFuaW1lLnJhbmRvbSA9IGZ1bmN0aW9uIChtaW4sIG1heCkgeyByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjsgfTtcblxuZXhwb3J0IGRlZmF1bHQgYW5pbWU7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/mine/MineMngNav.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ab80fqLElB9I8oFBRZmzCi', 'MineMngNav');
// script/controllers/mine/MineMngNav.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var EventMng_1 = require("../../manager/EventMng");
var EventConst_1 = require("../../data/const/EventConst");
var UIBase_1 = require("../ui/UIBase");
var ccclass = cc._decorator.ccclass;
var MineMngNav = /** @class */ (function (_super) {
    __extends(MineMngNav, _super);
    function MineMngNav() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.navBtns = [];
        _this.preIndex = 0;
        _this.currentIndex = 0;
        return _this;
    }
    MineMngNav.prototype.onUILoad = function () {
        this.btnsCreate();
    };
    MineMngNav.prototype.onShow = function () {
        this.btnsBindOn();
    };
    MineMngNav.prototype.onHide = function () {
        this.btnBindOff();
    };
    MineMngNav.prototype.btnsCreate = function () {
        for (var i = 0; i < this.node.children.length; i++) {
            var btn = this.node.children[i];
            this.navBtns[i] = new Btn(btn, i);
        }
    };
    MineMngNav.prototype.btnsBindOn = function () {
        this.navBtns.forEach(function (btn) {
            btn.eventBindOn();
        });
    };
    MineMngNav.prototype.btnBindOff = function () {
        this.navBtns.forEach(function (btn) {
            btn.eventBindOff();
        });
    };
    MineMngNav.prototype.btnSwitch = function (id) {
        this.preIndex = this.currentIndex;
        this.currentIndex = id;
        this.navBtns[this.preIndex].updateState(false);
        this.navBtns[this.currentIndex].updateState(true);
    };
    MineMngNav = __decorate([
        ccclass
    ], MineMngNav);
    return MineMngNav;
}(UIBase_1.default));
exports.default = MineMngNav;
var Btn = /** @class */ (function () {
    function Btn(node, id) {
        this.color_black = new cc.Color(0, 0, 0, 255);
        this.color_white = new cc.Color(255, 255, 255, 255);
        this._id = 0;
        this.node = node;
        this._id = id;
        this.node_activeBg = this.node.getChildByName("bg_active");
        this.node_txt = this.node.getChildByName("txt");
    }
    Btn.prototype.click = function () {
        EventMng_1.default.emit(EventConst_1.MainEvent.MINE_MNG_PAGE_SWITCH, this.id);
    };
    Btn.prototype.eventBindOn = function () {
        this.node.on("touchend", this.click, this);
    };
    Btn.prototype.eventBindOff = function () {
        this.node.off("touchend", this.click, this);
    };
    Btn.prototype.updateState = function (state) {
        this.activeBgShow(state);
        this.node_txt.color = state ? this.color_black : this.color_white;
    };
    Btn.prototype.activeBgShow = function (state) {
        this.node_activeBg.active = state;
        if (state) {
            this.node_activeBg.opacity = 0;
            this.node_activeBg.stopAllActions();
            this.node_activeBg.runAction(cc.fadeIn(.15));
        }
    };
    Object.defineProperty(Btn.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    return Btn;
}());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcbWluZVxcTWluZU1uZ05hdi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsMERBQXdEO0FBQ3hELHVDQUFrQztBQUUxQixJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUdsQztJQUF3Qyw4QkFBTTtJQUE5QztRQUFBLHFFQTRDQztRQTFDRyxhQUFPLEdBQVUsRUFBRSxDQUFDO1FBQ3BCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsa0JBQVksR0FBVyxDQUFDLENBQUM7O0lBd0M3QixDQUFDO0lBdENHLDZCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELDJCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELDJCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELCtCQUFVLEdBQVY7UUFDSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQUVELCtCQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7WUFDckIsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RCLENB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QzthQU5ELFVBQU8sS0FBYTtZQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQU1MLFVBQUM7QUFBRCxDQXREQSxBQXNEQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50TW5nIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0V2ZW50TW5nXCI7XHJcbmltcG9ydCB7IE1haW5FdmVudCB9IGZyb20gXCIuLi8uLi9kYXRhL2NvbnN0L0V2ZW50Q29uc3RcIjtcclxuaW1wb3J0IFVJQmFzZSBmcm9tIFwiLi4vdWkvVUlCYXNlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5lTW5nTmF2IGV4dGVuZHMgVUlCYXNlIHtcclxuXHJcbiAgICBuYXZCdG5zOiBCdG5bXSA9IFtdO1xyXG4gICAgcHJlSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBjdXJyZW50SW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgb25VSUxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5idG5zQ3JlYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYnRuc0JpbmRPbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGlkZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJ0bkJpbmRPZmYoKTtcclxuICAgIH1cclxuXHJcbiAgICBidG5zQ3JlYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSB0aGlzLm5vZGUuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIHRoaXMubmF2QnRuc1tpXSA9IG5ldyBCdG4oYnRuLCBpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnRuc0JpbmRPbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5hdkJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgICAgICAgIGJ0bi5ldmVudEJpbmRPbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJ0bkJpbmRPZmYoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5uYXZCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICAgICAgICBidG4uZXZlbnRCaW5kT2ZmKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnRuU3dpdGNoKGlkOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnByZUluZGV4ID0gdGhpcy5jdXJyZW50SW5kZXg7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBpZDtcclxuICAgICAgICB0aGlzLm5hdkJ0bnNbdGhpcy5wcmVJbmRleF0udXBkYXRlU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubmF2QnRuc1t0aGlzLmN1cnJlbnRJbmRleF0udXBkYXRlU3RhdGUodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBCdG4ge1xyXG5cclxuICAgIG5vZGU6IGNjLk5vZGU7XHJcbiAgICBub2RlX3R4dDogY2MuTm9kZTtcclxuICAgIG5vZGVfYWN0aXZlQmc6IGNjLk5vZGU7XHJcbiAgICBjb2xvcl9ibGFjazogY2MuQ29sb3IgPSBuZXcgY2MuQ29sb3IoMCwgMCwgMCwgMjU1KTtcclxuICAgIGNvbG9yX3doaXRlOiBjYy5Db2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpO1xyXG5cclxuICAgIHByb3RlY3RlZCBfaWQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3Iobm9kZTogY2MuTm9kZSwgaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XHJcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcclxuICAgICAgICB0aGlzLm5vZGVfYWN0aXZlQmcgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ19hY3RpdmVcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlX3R4dCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInR4dFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGljaygpOiB2b2lkIHtcclxuICAgICAgICBFdmVudE1uZy5lbWl0KE1haW5FdmVudC5NSU5FX01OR19QQUdFX1NXSVRDSCwgdGhpcy5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRCaW5kT24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwidG91Y2hlbmRcIiwgdGhpcy5jbGljaywgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRCaW5kT2ZmKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoXCJ0b3VjaGVuZFwiLCB0aGlzLmNsaWNrLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGF0ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlQmdTaG93KHN0YXRlKTtcclxuICAgICAgICB0aGlzLm5vZGVfdHh0LmNvbG9yID0gc3RhdGUgPyB0aGlzLmNvbG9yX2JsYWNrIDogdGhpcy5jb2xvcl93aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmVCZ1Nob3coc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlX2FjdGl2ZUJnLmFjdGl2ZSA9IHN0YXRlO1xyXG5cclxuICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlX2FjdGl2ZUJnLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVfYWN0aXZlQmcuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlX2FjdGl2ZUJnLnJ1bkFjdGlvbihjYy5mYWRlSW4oLjE1KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXQgaWQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2lkID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_reversed_rotateTo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c160oeO7NA4IlFNZ3yRGrU', 'use_reversed_rotateTo');
// migration/use_reversed_rotateTo.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only used for projects compatible with v2.1.0/v2.1.1/v2.2.1/v2.2.2 versions.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Action in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0/v2.1.1/v2.2.1/v2.2.2 版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Action，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
cc.RotateTo._reverse = true;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfcmV2ZXJzZWRfcm90YXRlVG8uanMiXSwibmFtZXMiOlsiY2MiLCJSb3RhdGVUbyIsIl9yZXZlcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxRQUFILENBQVlDLFFBQVosR0FBdUIsSUFBdkIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IENvY29zIENyZWF0b3IgYW5kIGlzIG9ubHkgdXNlZCBmb3IgcHJvamVjdHMgY29tcGF0aWJsZSB3aXRoIHYyLjEuMC92Mi4xLjEvdjIuMi4xL3YyLjIuMiB2ZXJzaW9ucy5cclxuICogWW91IGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IGFkZCB0aGlzIHNjcmlwdCBpbiBhbnkgb3RoZXIgcHJvamVjdC5cclxuICogSWYgeW91IGRvbid0IHVzZSBjYy5BY3Rpb24gaW4geW91ciBwcm9qZWN0LCB5b3UgY2FuIGRlbGV0ZSB0aGlzIHNjcmlwdCBkaXJlY3RseS5cclxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cclxuICpcclxuICog5q2k6ISa5pys55SxIENvY29zIENyZWF0b3Ig6Ieq5Yqo55Sf5oiQ77yM5LuF55So5LqO5YW85a65IHYyLjEuMC92Mi4xLjEvdjIuMi4xL3YyLjIuMiDniYjmnKznmoTlt6XnqIvvvIxcclxuICog5L2g5peg6ZyA5Zyo5Lu75L2V5YW25a6D6aG555uu5Lit5omL5Yqo5re75Yqg5q2k6ISa5pys44CCXHJcbiAqIOWmguaenOS9oOeahOmhueebruS4reayoeeUqOWIsCBBY3Rpb27vvIzlj6/nm7TmjqXliKDpmaTor6XohJrmnKzjgIJcclxuICog5aaC5p6c5L2g55qE6aG555uu5pyJ5omY566h5LqOIGdpdCDnrYnniYjmnKzlupPvvIzor7flsIbmraTohJrmnKzkuIDlubbkuIrkvKDjgIJcclxuICovXHJcblxyXG5jYy5Sb3RhdGVUby5fcmV2ZXJzZSA9IHRydWU7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/mine/mng/MinePetProps.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8dd67LN9LBF2p4bHCx9YcRG', 'MinePetProps');
// script/controllers/mine/mng/MinePetProps.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var UIBase_1 = require("../../ui/UIBase");
var ccclass = cc._decorator.ccclass;
var MinePetProps = /** @class */ (function (_super) {
    __extends(MinePetProps, _super);
    function MinePetProps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MinePetProps.prototype.onUILoad = function () { };
    MinePetProps = __decorate([
        ccclass
    ], MinePetProps);
    return MinePetProps;
}(UIBase_1.default));
exports.default = MinePetProps;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcbWluZVxcbW5nXFxNaW5lUGV0UHJvcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQXFDO0FBRzdCLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBR2xDO0lBQTBDLGdDQUFNO0lBQWhEOztJQUtBLENBQUM7SUFGRywrQkFBUSxHQUFSLGNBQW1CLENBQUM7SUFISCxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBS2hDO0lBQUQsbUJBQUM7Q0FMRCxBQUtDLENBTHlDLGdCQUFNLEdBSy9DO2tCQUxvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJQmFzZSBmcm9tIFwiLi4vLi4vdWkvVUlCYXNlXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWluZVBldFByb3BzIGV4dGVuZHMgVUlCYXNlIHtcclxuXHJcblxyXG4gICAgb25VSUxvYWQoKTogdm9pZCB7IH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/scene/MainLoading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b5d27Ax+B5PZ7cPb5SXl9yK', 'MainLoading');
// script/controllers/scene/MainLoading.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var GameController_1 = require("../../GameController");
var AssetsMng_1 = require("../../manager/AssetsMng");
var SceneMng_1 = require("../../manager/SceneMng");
var EventConst_1 = require("../../data/const/EventConst");
var UIBase_1 = require("../ui/UIBase");
var UIHelp_1 = require("../ui/UIHelp");
var LangMng_1 = require("../../manager/LangMng");
var ccclass = cc._decorator.ccclass;
var MainLoading = /** @class */ (function (_super) {
    __extends(MainLoading, _super);
    function MainLoading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainLoading.prototype.onUILoad = function () {
        UIHelp_1.default.ShowLoading();
        UIHelp_1.default.ShowDialog(null);
        this.initEvent(EventConst_1.LoadEvent.LOAD_PRELOAD_DONE, this.onAssetLoadDone);
        this.initEvent(EventConst_1.LoadEvent.LOAD_SUCCESS, this.onLoadSuccess);
        this.initEvent(EventConst_1.MainEvent.MESSAGE_SHOW, this.onMessageShow);
        SceneMng_1.default.resize();
    };
    MainLoading.prototype.onStart = function () {
        GameController_1.default.init();
        this.onPreLoad();
    };
    MainLoading.prototype.onPreLoad = function () {
        AssetsMng_1.default.onPreLoad();
    };
    MainLoading.prototype.onAssetLoadDone = function () {
        SceneMng_1.default.preload("mainGame", this.onNextSceneLoad.bind(this));
    };
    MainLoading.prototype.onNextSceneLoad = function () {
        GameController_1.default.net.send("start", null);
    };
    MainLoading.prototype.onLoadSuccess = function () {
        var timer = setTimeout((function () {
            SceneMng_1.default.goGame();
            clearTimeout(timer);
        }), 1000);
    };
    MainLoading.prototype.onMessageShow = function (config) {
        UIHelp_1.default.ShowDialog({
            content: LangMng_1.default.getTxt(config.code),
        });
    };
    MainLoading.prototype.update = function (dt) {
        SceneMng_1.default.resizeUpdate();
    };
    MainLoading = __decorate([
        ccclass
    ], MainLoading);
    return MainLoading;
}(UIBase_1.default));
exports.default = MainLoading;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcc2NlbmVcXE1haW5Mb2FkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFrRDtBQUNsRCxxREFBZ0Q7QUFDaEQsbURBQThDO0FBQzlDLDBEQUFtRTtBQUNuRSx1Q0FBa0M7QUFDbEMsdUNBQWtDO0FBQ2xDLGlEQUE0QztBQUVwQyxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUdsQztJQUF5QywrQkFBTTtJQUEvQzs7SUFxREEsQ0FBQztJQW5ERyw4QkFBUSxHQUFSO1FBRUksZ0JBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixnQkFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4QixJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFTLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTNELGtCQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFFdEIsQ0FBQztJQUVELDZCQUFPLEdBQVA7UUFDSSx3QkFBYyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBR0QsK0JBQVMsR0FBVDtRQUNJLG1CQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUdELHFDQUFlLEdBQWY7UUFDSSxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBR0QscUNBQWUsR0FBZjtRQUNJLHdCQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELG1DQUFhLEdBQWI7UUFDSSxJQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsQ0FBQztZQUN0QixrQkFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2xCLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNkLENBQUM7SUFHRCxtQ0FBYSxHQUFiLFVBQWMsTUFBTTtRQUNoQixnQkFBTSxDQUFDLFVBQVUsQ0FBQztZQUNWLE9BQU8sRUFBRSxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQzNDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFUyw0QkFBTSxHQUFoQixVQUFpQixFQUFVO1FBQ3ZCLGtCQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQW5EZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXFEL0I7SUFBRCxrQkFBQztDQXJERCxBQXFEQyxDQXJEd0MsZ0JBQU0sR0FxRDlDO2tCQXJEb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vLi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IEFzc2V0c01uZyBmcm9tIFwiLi4vLi4vbWFuYWdlci9Bc3NldHNNbmdcIjtcclxuaW1wb3J0IFNjZW5lTW5nIGZyb20gXCIuLi8uLi9tYW5hZ2VyL1NjZW5lTW5nXCI7XHJcbmltcG9ydCB7IExvYWRFdmVudCwgTWFpbkV2ZW50IH0gZnJvbSBcIi4uLy4uL2RhdGEvY29uc3QvRXZlbnRDb25zdFwiO1xyXG5pbXBvcnQgVUlCYXNlIGZyb20gXCIuLi91aS9VSUJhc2VcIjtcclxuaW1wb3J0IFVJSGVscCBmcm9tIFwiLi4vdWkvVUlIZWxwXCI7XHJcbmltcG9ydCBMYW5nTW5nIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0xhbmdNbmdcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5Mb2FkaW5nIGV4dGVuZHMgVUlCYXNlIHtcclxuXHJcbiAgICBvblVJTG9hZCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgVUlIZWxwLlNob3dMb2FkaW5nKCk7XHJcbiAgICAgICAgVUlIZWxwLlNob3dEaWFsb2cobnVsbCk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KExvYWRFdmVudC5MT0FEX1BSRUxPQURfRE9ORSwgdGhpcy5vbkFzc2V0TG9hZERvbmUpO1xyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KExvYWRFdmVudC5MT0FEX1NVQ0NFU1MsIHRoaXMub25Mb2FkU3VjY2Vzcyk7XHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoTWFpbkV2ZW50Lk1FU1NBR0VfU0hPVywgdGhpcy5vbk1lc3NhZ2VTaG93KTtcclxuXHJcbiAgICAgICAgU2NlbmVNbmcucmVzaXplKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgR2FtZUNvbnRyb2xsZXIuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMub25QcmVMb2FkKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uUHJlTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBBc3NldHNNbmcub25QcmVMb2FkKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uQXNzZXRMb2FkRG9uZSgpOiB2b2lkIHtcclxuICAgICAgICBTY2VuZU1uZy5wcmVsb2FkKFwibWFpbkdhbWVcIiwgdGhpcy5vbk5leHRTY2VuZUxvYWQuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uTmV4dFNjZW5lTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBHYW1lQ29udHJvbGxlci5uZXQuc2VuZChcInN0YXJ0XCIsIG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZFN1Y2Nlc3MoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgoKSA9PiB7XHJcbiAgICAgICAgICAgIFNjZW5lTW5nLmdvR2FtZSgpO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgIH0pLCAxMDAwKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25NZXNzYWdlU2hvdyhjb25maWcpOiB2b2lkIHtcclxuICAgICAgICBVSUhlbHAuU2hvd0RpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBMYW5nTW5nLmdldFR4dChjb25maWcuY29kZSksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgU2NlbmVNbmcucmVzaXplVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/const/ViewZorder.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '29baandiBxIr75OnuvAtJCP', 'ViewZorder');
// script/data/const/ViewZorder.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewZorder = void 0;
var ViewZorder = /** @class */ (function () {
    function ViewZorder() {
    }
    ViewZorder.Btn = 13;
    ViewZorder.Scene = 20;
    ViewZorder.UI = 100;
    ViewZorder.Dialog = 200;
    ViewZorder.Loading = 300;
    return ViewZorder;
}());
exports.ViewZorder = ViewZorder;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxjb25zdFxcVmlld1pvcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBTUEsQ0FBQztJQUwwQixjQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ1QsZ0JBQUssR0FBRyxFQUFFLENBQUM7SUFDWCxhQUFFLEdBQUcsR0FBRyxDQUFDO0lBQ1QsaUJBQU0sR0FBRyxHQUFHLENBQUM7SUFDYixrQkFBTyxHQUFHLEdBQUcsQ0FBQztJQUN6QyxpQkFBQztDQU5ELEFBTUMsSUFBQTtBQU5ZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFZpZXdab3JkZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdG4gPSAxMztcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU2NlbmUgPSAyMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVUkgPSAxMDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERpYWxvZyA9IDIwMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTG9hZGluZyA9IDMwMDtcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/ui/UIHelp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0f7597DOsZLc7J+fGCabqaN', 'UIHelp');
// script/controllers/ui/UIHelp.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UIMng_1 = require("../../manager/UIMng");
var UILoading_1 = require("./UILoading");
var UIMessage_1 = require("./UIMessage");
var ViewZorder_1 = require("../../data/const/ViewZorder");
var UIHelp = /** @class */ (function () {
    function UIHelp() {
    }
    UIHelp.ShowUI = function (uiClass) {
        UIMng_1.default.getInstance().showUI(uiClass);
    };
    UIHelp.HideUI = function (uiClass) {
        UIMng_1.default.getInstance().hideUI(uiClass);
    };
    UIHelp.ShowLoading = function (callback) {
        UIMng_1.default.getInstance().openUI(UILoading_1.default, ViewZorder_1.ViewZorder.UI, callback);
    };
    UIHelp.ShowDialog = function (data) {
        var dialogUI = UIMng_1.default.getInstance().getUI(UIMessage_1.default);
        if (!dialogUI) {
            UIMng_1.default.getInstance().openUI(UIMessage_1.default, ViewZorder_1.ViewZorder.Dialog, null, null, data);
        }
        else {
            dialogUI.show(data);
        }
    };
    UIHelp.Resize = function (uiClass) {
        UIMng_1.default.getInstance().resizeUI(uiClass);
    };
    return UIHelp;
}());
exports.default = UIHelp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcdWlcXFVJSGVscC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF3QztBQUV4Qyx5Q0FBb0M7QUFDcEMseUNBQW9DO0FBQ3BDLDBEQUF1RDtBQUV2RDtJQUFBO0lBMkJBLENBQUM7SUF6QmlCLGFBQU0sR0FBcEIsVUFBdUMsT0FBbUI7UUFDdEQsZUFBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRWEsYUFBTSxHQUFwQixVQUF1QyxPQUFtQjtRQUN0RCxlQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFYSxrQkFBVyxHQUF6QixVQUEwQixRQUFtQjtRQUN6QyxlQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLG1CQUFTLEVBQUUsdUJBQVUsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVhLGlCQUFVLEdBQXhCLFVBQXlCLElBQUk7UUFDekIsSUFBSSxRQUFRLEdBQUcsZUFBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBUyxDQUFjLENBQUM7UUFDakUsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNYLGVBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsbUJBQVMsRUFBRSx1QkFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzlFO2FBQU07WUFDSCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUVhLGFBQU0sR0FBcEIsVUFBdUMsT0FBbUI7UUFDdEQsZUFBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUwsYUFBQztBQUFELENBM0JBLEFBMkJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlNbmcgZnJvbSBcIi4uLy4uL21hbmFnZXIvVUlNbmdcIjtcclxuaW1wb3J0IFVJQmFzZSwgeyBVSUNsYXNzIH0gZnJvbSBcIi4vVUlCYXNlXCI7XHJcbmltcG9ydCBVSUxvYWRpbmcgZnJvbSBcIi4vVUlMb2FkaW5nXCI7XHJcbmltcG9ydCBVSU1lc3NhZ2UgZnJvbSBcIi4vVUlNZXNzYWdlXCI7XHJcbmltcG9ydCB7Vmlld1pvcmRlcn0gZnJvbSBcIi4uLy4uL2RhdGEvY29uc3QvVmlld1pvcmRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlIZWxwIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFNob3dVSTxUIGV4dGVuZHMgVUlCYXNlPih1aUNsYXNzOiBVSUNsYXNzPFQ+KSB7XHJcbiAgICAgICAgVUlNbmcuZ2V0SW5zdGFuY2UoKS5zaG93VUkodWlDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBIaWRlVUk8VCBleHRlbmRzIFVJQmFzZT4odWlDbGFzczogVUlDbGFzczxUPikge1xyXG4gICAgICAgIFVJTW5nLmdldEluc3RhbmNlKCkuaGlkZVVJKHVpQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgU2hvd0xvYWRpbmcoY2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIFVJTW5nLmdldEluc3RhbmNlKCkub3BlblVJKFVJTG9hZGluZywgVmlld1pvcmRlci5VSSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgU2hvd0RpYWxvZyhkYXRhKSB7XHJcbiAgICAgICAgbGV0IGRpYWxvZ1VJID0gVUlNbmcuZ2V0SW5zdGFuY2UoKS5nZXRVSShVSU1lc3NhZ2UpIGFzIFVJTWVzc2FnZTtcclxuICAgICAgICBpZiAoIWRpYWxvZ1VJKSB7XHJcbiAgICAgICAgICAgIFVJTW5nLmdldEluc3RhbmNlKCkub3BlblVJKFVJTWVzc2FnZSwgVmlld1pvcmRlci5EaWFsb2csIG51bGwsIG51bGwsIGRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpYWxvZ1VJLnNob3coZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgUmVzaXplPFQgZXh0ZW5kcyBVSUJhc2U+KHVpQ2xhc3M6IFVJQ2xhc3M8VD4pOiB2b2lkIHtcclxuICAgICAgICBVSU1uZy5nZXRJbnN0YW5jZSgpLnJlc2l6ZVVJKHVpQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/mine/pop/PropSelectPop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4a94TBtqJGB7bW3Gnm6qbA', 'PropSelectPop');
// script/controllers/mine/pop/PropSelectPop.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LangMng_1 = require("../../../manager/LangMng");
var UIBase_1 = require("../../ui/UIBase");
var ViewZorder_1 = require("../../../data/const/ViewZorder");
var CtrlBtn = /** @class */ (function () {
    function CtrlBtn(node, id, config) {
        this.id = -1;
        this.clickCallBack = null;
        this.canClick = true;
        this.node = node;
        this.id = id;
        if (config && config.clickCallBack) {
            this.clickCallBack = config.clickCallBack;
        }
        this.node_normal = this.node.getChildByName("normal");
        this.node_active = this.node.getChildByName("active");
        this.label_txt = this.node.getChildByName("txt").getComponent(cc.Label);
        if (config && config.iconNormal) {
            this.sprite_normal_icon = this.node_normal.getChildByName("icon").getComponent(cc.Sprite);
            this.sprite_normal_icon.spriteFrame = config.iconNormal;
        }
        if (config && config.iconActive) {
            this.sprite_active_icon = this.node_active.getChildByName("icon").getComponent(cc.Sprite);
            this.sprite_active_icon.spriteFrame = config.iconActive;
        }
        this.init();
    }
    CtrlBtn.prototype.init = function () {
        this.setPieceNum("");
    };
    CtrlBtn.prototype.show = function () {
        this.node_normal.active = false;
        this.node_active.active = true;
    };
    CtrlBtn.prototype.hide = function () {
        this.node_normal.active = true;
        this.node_active.active = false;
    };
    CtrlBtn.prototype.setPieceNum = function (str) {
        this.label_txt.string = str;
    };
    CtrlBtn.prototype.clickBindOn = function () {
        this.node.on("touchend", this.onClick, this);
    };
    CtrlBtn.prototype.clickBindOff = function () {
        this.node.off("touchend", this.onClick, this);
    };
    CtrlBtn.prototype.onClick = function () {
        if (this.clickCallBack && this.canClick) {
            this.clickCallBack(this.id);
        }
    };
    CtrlBtn.prototype.remove = function () {
        var label = this.label_txt;
        label.string = LangMng_1.default.getTxt("T_114");
        label.node.setPosition(0, 0);
        label.node.color = new cc.Color(170, 170, 170);
        label.fontSize = 30;
        this.sprite_normal_icon.node.active = false;
        this.sprite_active_icon.node.active = false;
        this.canClick = false;
    };
    CtrlBtn.prototype.updateData = function (data) {
        var info = data.info;
        if (info) {
            this.setPieceNum(info.quantity + "/" + info.require);
        }
        this.canClick = true;
    };
    return CtrlBtn;
}());
var PropSelectPop = /** @class */ (function (_super) {
    __extends(PropSelectPop, _super);
    function PropSelectPop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentIndex = -1;
        _this.ctrlBtns = [];
        _this.mineID = -1;
        _this.langTxtData = {
            noDisplay: "",
        };
        _this.btnIconImg = null;
        return _this;
    }
    PropSelectPop.prototype.onUILoad = function () {
        this.node_main = this.node.getChildByName("main");
        this.node_view_holder = this.node_main.getChildByName("view_holder");
        this.node_view_con = this.node_view_holder.getChildByName("con");
        this.no_txt = this.node_view_holder.getChildByName("no_txt").getComponent(cc.Label);
        this.node_btns_holder = this.node_main.getChildByName("btns_holder");
        this.btn_close = this.node_main.getChildByName("btn_close");
        this.viewInit();
        this.hide();
    };
    PropSelectPop.prototype.show = function (msg) {
        this.node.active = true;
        this.mineID = msg.petID;
        this.btnsInfoUpdate();
        this.change(this.getCurrentSelectID(this.mineID));
        this.onRegisterEvent(this.btn_close, this.onBtnClose, this);
    };
    PropSelectPop.prototype.hide = function () {
        this.node.active = false;
        this.unRegisterEvent(this.btn_close, this.onBtnClose, this);
    };
    PropSelectPop.prototype.onBtnClose = function () {
        this.hide();
    };
    PropSelectPop.prototype.change = function (id) {
        if (this.currentIndex >= 0) {
            this.ctrlBtns[this.currentIndex].hide();
        }
        this.currentIndex = id;
        this.ctrlBtns[id].show();
    };
    PropSelectPop.prototype.viewInit = function () {
        this.setOrder();
        this.setNoUseTxt();
        this.previewHide();
        this.btnsCreate();
    };
    PropSelectPop.prototype.previewShow = function () {
        this.node_view_con.active = true;
    };
    PropSelectPop.prototype.previewHide = function () {
        this.node_view_con.active = false;
    };
    PropSelectPop.prototype.noUseShow = function () {
        this.no_txt.node.active = true;
    };
    PropSelectPop.prototype.noUseHide = function () {
        this.no_txt.node.active = false;
    };
    PropSelectPop.prototype.btnsCreate = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var btnNode = this_1.node_btns_holder.children[i];
            var ctrlBtn = new CtrlBtn(btnNode, i, {
                iconNormal: (function () {
                    return _this.btnIconImg && _this.btnIconImg.n ? _this.btnIconImg.n[i] : null;
                })(),
                iconActive: (function () {
                    return _this.btnIconImg && _this.btnIconImg.a ? _this.btnIconImg.a[i] : null;
                })(),
                clickCallBack: this_1.btnOnClick.bind(this_1),
            });
            this_1.ctrlBtns.push(ctrlBtn);
        };
        var this_1 = this;
        for (var i = 0; i < 8; i++) {
            _loop_1(i);
        }
    };
    PropSelectPop.prototype.btnsInfoUpdate = function () {
        var data = this.getListData();
        for (var i = 1; i < this.ctrlBtns.length; i++) {
            if (data[i - 1]) {
                this.ctrlBtns[i].updateData(data[i - 1]);
            }
            else {
                this.ctrlBtns[i].remove();
            }
        }
    };
    PropSelectPop.prototype.btnsClickOn = function () {
        this.ctrlBtns.forEach(function (btn) {
            btn.clickBindOn();
        });
    };
    PropSelectPop.prototype.btnsClickOff = function () {
        this.ctrlBtns.forEach(function (btn) {
            btn.clickBindOff();
        });
    };
    PropSelectPop.prototype.btnOnClick = function (id) {
        if (this.currentIndex == id) {
            return;
        }
        this.change(id);
    };
    PropSelectPop.prototype.setOrder = function () {
        this.node.zIndex = ViewZorder_1.ViewZorder.UI;
    };
    PropSelectPop.prototype.setNoUseTxt = function () {
        this.no_txt.string = this.langTxtData ? this.langTxtData.noDisplay : "";
    };
    PropSelectPop.prototype.getListData = function () {
        return [];
    };
    PropSelectPop.prototype.getPieceMaxNum = function () {
        return 0;
    };
    PropSelectPop.prototype.getCurrentSelectID = function (id) {
        return null;
    };
    return PropSelectPop;
}(UIBase_1.default));
exports.default = PropSelectPop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcbWluZVxccG9wXFxQcm9wU2VsZWN0UG9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUErQztBQUMvQywwQ0FBcUM7QUFDckMsNkRBQTREO0FBRTVEO0lBaUJJLGlCQUFZLElBQWEsRUFBRSxFQUFVLEVBQUUsTUFBTztRQWY5QyxPQUFFLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFXaEIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFFckIsYUFBUSxHQUFZLElBQUksQ0FBQztRQUlyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUViLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1NBQzdDO1FBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV4RSxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQzdCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEdBQUcs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QUUsQ0FBQztJQUM1RSxDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNJLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELHNDQUFjLEdBQWQ7UUFDSSxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCwwQ0FBa0IsR0FBbEIsVUFBbUIsRUFBRTtRQUNqQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUwsb0JBQUM7QUFBRCxDQXJMQSxBQXFMQyxDQXJMMEMsZ0JBQU0sR0FxTGhEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExhbmdNbmcgZnJvbSBcIi4uLy4uLy4uL21hbmFnZXIvTGFuZ01uZ1wiO1xyXG5pbXBvcnQgVUlCYXNlIGZyb20gXCIuLi8uLi91aS9VSUJhc2VcIjtcclxuaW1wb3J0IHsgVmlld1pvcmRlciB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2NvbnN0L1ZpZXdab3JkZXJcIjtcclxuXHJcbmNsYXNzIEN0cmxCdG4ge1xyXG5cclxuICAgIGlkOiBudW1iZXIgPSAtMTtcclxuICAgIG5vZGU6IGNjLk5vZGU7XHJcblxyXG4gICAgbm9kZV9ub3JtYWw6IGNjLk5vZGU7XHJcbiAgICBub2RlX2FjdGl2ZTogY2MuTm9kZTtcclxuXHJcbiAgICBzcHJpdGVfbm9ybWFsX2ljb246IGNjLlNwcml0ZTtcclxuICAgIHNwcml0ZV9hY3RpdmVfaWNvbjogY2MuU3ByaXRlO1xyXG5cclxuICAgIGxhYmVsX3R4dDogY2MuTGFiZWw7XHJcblxyXG4gICAgY2xpY2tDYWxsQmFjayA9IG51bGw7XHJcblxyXG4gICAgY2FuQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5vZGU6IGNjLk5vZGUsIGlkOiBudW1iZXIsIGNvbmZpZz8pIHtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcblxyXG4gICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLmNsaWNrQ2FsbEJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5jbGlja0NhbGxCYWNrID0gY29uZmlnLmNsaWNrQ2FsbEJhY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGVfbm9ybWFsID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibm9ybWFsXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZV9hY3RpdmUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgdGhpcy5sYWJlbF90eHQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0eHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZyAmJiBjb25maWcuaWNvbk5vcm1hbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZV9ub3JtYWxfaWNvbiA9IHRoaXMubm9kZV9ub3JtYWwuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZV9ub3JtYWxfaWNvbi5zcHJpdGVGcmFtZSA9IGNvbmZpZy5pY29uTm9ybWFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZyAmJiBjb25maWcuaWNvbkFjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZV9hY3RpdmVfaWNvbiA9IHRoaXMubm9kZV9hY3RpdmUuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZV9hY3RpdmVfaWNvbi5zcHJpdGVGcmFtZSA9IGNvbmZpZy5pY29uQWN0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRQaWVjZU51bShcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZV9ub3JtYWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlX2FjdGl2ZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlX25vcm1hbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZV9hY3RpdmUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGllY2VOdW0oc3RyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sYWJlbF90eHQuc3RyaW5nID0gc3RyO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrQmluZE9uKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcInRvdWNoZW5kXCIsIHRoaXMub25DbGljaywgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tCaW5kT2ZmKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoXCJ0b3VjaGVuZFwiLCB0aGlzLm9uQ2xpY2ssIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2xpY2tDYWxsQmFjayAmJiB0aGlzLmNhbkNsaWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpY2tDYWxsQmFjayh0aGlzLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgbGFiZWwgPSB0aGlzLmxhYmVsX3R4dDtcclxuICAgICAgICBsYWJlbC5zdHJpbmcgPSBMYW5nTW5nLmdldFR4dChcIlRfMTE0XCIpO1xyXG4gICAgICAgIGxhYmVsLm5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgbGFiZWwubm9kZS5jb2xvciA9IG5ldyBjYy5Db2xvcigxNzAsIDE3MCwgMTcwKTtcclxuICAgICAgICBsYWJlbC5mb250U2l6ZSA9IDMwO1xyXG5cclxuICAgICAgICB0aGlzLnNwcml0ZV9ub3JtYWxfaWNvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlX2FjdGl2ZV9pY29uLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVEYXRhKGRhdGEpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IGluZm8gPSBkYXRhLmluZm87XHJcblxyXG4gICAgICAgIGlmIChpbmZvKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UGllY2VOdW0oYCR7IGluZm8ucXVhbnRpdHkgfS8keyBpbmZvLnJlcXVpcmUgfWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcFNlbGVjdFBvcCBleHRlbmRzIFVJQmFzZSB7XHJcblxyXG4gICAgbm9kZV9tYWluOiBjYy5Ob2RlO1xyXG5cclxuICAgIG5vZGVfdmlld19ob2xkZXI6IGNjLk5vZGU7XHJcbiAgICBub2RlX3ZpZXdfY29uOiBjYy5Ob2RlO1xyXG4gICAgbm9fdHh0OiBjYy5MYWJlbDtcclxuXHJcbiAgICBub2RlX2J0bnNfaG9sZGVyOiBjYy5Ob2RlO1xyXG5cclxuICAgIGJ0bl9jbG9zZTogY2MuTm9kZTtcclxuXHJcbiAgICBjdXJyZW50SW5kZXg6IG51bWJlciA9IC0xO1xyXG4gICAgY3RybEJ0bnM6IEN0cmxCdG5bXSA9IFtdO1xyXG5cclxuICAgIG1pbmVJRDogbnVtYmVyID0gLTE7XHJcblxyXG4gICAgbGFuZ1R4dERhdGEgPSB7XHJcbiAgICAgICAgbm9EaXNwbGF5OiBcIlwiLFxyXG4gICAgfTtcclxuXHJcbiAgICBidG5JY29uSW1nID0gbnVsbDtcclxuXHJcbiAgICBvblVJTG9hZCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlX21haW4gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtYWluXCIpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVfdmlld19ob2xkZXIgPSB0aGlzLm5vZGVfbWFpbi5nZXRDaGlsZEJ5TmFtZShcInZpZXdfaG9sZGVyXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZV92aWV3X2NvbiA9IHRoaXMubm9kZV92aWV3X2hvbGRlci5nZXRDaGlsZEJ5TmFtZShcImNvblwiKTtcclxuICAgICAgICB0aGlzLm5vX3R4dCA9IHRoaXMubm9kZV92aWV3X2hvbGRlci5nZXRDaGlsZEJ5TmFtZShcIm5vX3R4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVfYnRuc19ob2xkZXIgPSB0aGlzLm5vZGVfbWFpbi5nZXRDaGlsZEJ5TmFtZShcImJ0bnNfaG9sZGVyXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmJ0bl9jbG9zZSA9IHRoaXMubm9kZV9tYWluLmdldENoaWxkQnlOYW1lKFwiYnRuX2Nsb3NlXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnZpZXdJbml0KCk7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3cobXNnKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubWluZUlEID0gbXNnLnBldElEO1xyXG5cclxuICAgICAgICB0aGlzLmJ0bnNJbmZvVXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UodGhpcy5nZXRDdXJyZW50U2VsZWN0SUQodGhpcy5taW5lSUQpKTtcclxuXHJcbiAgICAgICAgdGhpcy5vblJlZ2lzdGVyRXZlbnQodGhpcy5idG5fY2xvc2UsIHRoaXMub25CdG5DbG9zZSwgdGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudW5SZWdpc3RlckV2ZW50KHRoaXMuYnRuX2Nsb3NlLCB0aGlzLm9uQnRuQ2xvc2UsIHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkNsb3NlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlKGlkKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3RybEJ0bnNbdGhpcy5jdXJyZW50SW5kZXhdLmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gaWQ7XHJcblxyXG4gICAgICAgIHRoaXMuY3RybEJ0bnNbaWRdLnNob3coKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdmlld0luaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0T3JkZXIoKTtcclxuICAgICAgICB0aGlzLnNldE5vVXNlVHh0KCk7XHJcbiAgICAgICAgdGhpcy5wcmV2aWV3SGlkZSgpO1xyXG4gICAgICAgIHRoaXMuYnRuc0NyZWF0ZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcmV2aWV3U2hvdygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGVfdmlld19jb24uYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2aWV3SGlkZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGVfdmlld19jb24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbm9Vc2VTaG93KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9fdHh0Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBub1VzZUhpZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub190eHQubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBidG5zQ3JlYXRlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGJ0bk5vZGUgPSB0aGlzLm5vZGVfYnRuc19ob2xkZXIuY2hpbGRyZW5baV07XHJcblxyXG4gICAgICAgICAgICBsZXQgY3RybEJ0biA9IG5ldyBDdHJsQnRuKGJ0bk5vZGUsIGksIHtcclxuICAgICAgICAgICAgICAgIGljb25Ob3JtYWw6ICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnRuSWNvbkltZyAmJiB0aGlzLmJ0bkljb25JbWcubiA/IHRoaXMuYnRuSWNvbkltZy5uW2ldOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfSkoKSxcclxuICAgICAgICAgICAgICAgIGljb25BY3RpdmU6ICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnRuSWNvbkltZyAmJiB0aGlzLmJ0bkljb25JbWcuYSA/IHRoaXMuYnRuSWNvbkltZy5hW2ldOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfSkoKSxcclxuICAgICAgICAgICAgICAgIGNsaWNrQ2FsbEJhY2s6IHRoaXMuYnRuT25DbGljay5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3RybEJ0bnMucHVzaChjdHJsQnRuKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBidG5zSW5mb1VwZGF0ZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldExpc3REYXRhKCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5jdHJsQnRucy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGFbaSAtIDFdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0cmxCdG5zW2ldLnVwZGF0ZURhdGEoZGF0YVtpIC0gMV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdHJsQnRuc1tpXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJ0bnNDbGlja09uKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY3RybEJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgICAgICAgIGJ0bi5jbGlja0JpbmRPbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJ0bnNDbGlja09mZigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN0cmxCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICAgICAgICBidG4uY2xpY2tCaW5kT2ZmKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnRuT25DbGljayhpZDogbnVtYmVyKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA9PSBpZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZShpZCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldE9yZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS56SW5kZXggPSBWaWV3Wm9yZGVyLlVJO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE5vVXNlVHh0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9fdHh0LnN0cmluZyA9IHRoaXMubGFuZ1R4dERhdGEgPyB0aGlzLmxhbmdUeHREYXRhLm5vRGlzcGxheSA6IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGlzdERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBpZWNlTWF4TnVtKCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEN1cnJlbnRTZWxlY3RJRChpZCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/IDataModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5b69fxbAnxDyKy2tHdRK8MZ', 'IDataModel');
// script/data/IDataModel.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventMng_1 = require("../manager/EventMng");
var IDataModel = /** @class */ (function () {
    function IDataModel(modelName) {
        if (modelName === void 0) { modelName = 'default'; }
        this.modelName = 'default';
        this.modelName = modelName;
        this.registerListeners();
    }
    IDataModel.prototype.registerListeners = function () {
        var tbMsg = this.getMessageListeners();
        var _loop_1 = function (key) {
            if (tbMsg.hasOwnProperty(key)) {
                EventMng_1.default.on(key.toString(), function (msg) {
                    tbMsg[key](msg);
                });
            }
        };
        for (var key in tbMsg) {
            _loop_1(key);
        }
    };
    IDataModel.prototype.getMessageListeners = function () {
        return {};
    };
    IDataModel.prototype.getData = function (modelName, val) {
        return;
    };
    return IDataModel;
}());
exports.default = IDataModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxJRGF0YU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBRTNDO0lBSUksb0JBQVksU0FBcUI7UUFBckIsMEJBQUEsRUFBQSxxQkFBcUI7UUFGdkIsY0FBUyxHQUFXLFNBQVMsQ0FBQztRQUdwQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU8sc0NBQWlCLEdBQXpCO1FBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0NBQzVCLEdBQUc7WUFDVixJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzNCLGtCQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxVQUFVLEdBQUc7b0JBQ3JDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLENBQUE7YUFDTDs7UUFMTCxLQUFLLElBQU0sR0FBRyxJQUFJLEtBQUs7b0JBQVosR0FBRztTQU1iO0lBQ0wsQ0FBQztJQUVELHdDQUFtQixHQUFuQjtRQUNJLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELDRCQUFPLEdBQVAsVUFBUSxTQUFpQixFQUFFLEdBQVc7UUFDbEMsT0FBTztJQUNYLENBQUM7SUFFTCxpQkFBQztBQUFELENBNUJBLEFBNEJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnRNbmcgZnJvbSBcIi4uL21hbmFnZXIvRXZlbnRNbmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElEYXRhTW9kZWwge1xyXG5cclxuICAgIHByb3RlY3RlZCBtb2RlbE5hbWU6IHN0cmluZyA9ICdkZWZhdWx0JztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbE5hbWUgPSAnZGVmYXVsdCcpIHtcclxuICAgICAgICB0aGlzLm1vZGVsTmFtZSA9IG1vZGVsTmFtZTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3Rlckxpc3RlbmVycygpIHtcclxuICAgICAgICBsZXQgdGJNc2cgPSB0aGlzLmdldE1lc3NhZ2VMaXN0ZW5lcnMoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0Yk1zZykge1xyXG4gICAgICAgICAgICBpZiAodGJNc2cuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgRXZlbnRNbmcub24oa2V5LnRvU3RyaW5nKCksIGZ1bmN0aW9uIChtc2cpIHtcclxuICAgICAgICAgICAgICAgICAgICB0Yk1zZ1trZXldKG1zZyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGEobW9kZWxOYW1lOiBzdHJpbmcsIHZhbDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/config/CfgPartner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d6f5YqHa5C7IfaWiybgF6T', 'CfgPartner');
// script/data/config/CfgPartner.js

"use strict";

module.exports = {
  0: {
    levelName: ["empty"],
    name: "",
    intro: ""
  },
  1: {
    levelName: ["f1"],
    name: "艾咪",
    intro: "艾咪是一隻愛冒險卻又有些脾氣暴躁的小雞。愛冒險的牠，總會在出外旅行後帶回找到的金幣。",
    bgColor: {
      r: 0,
      g: 184,
      b: 146
    }
  },
  2: {
    levelName: [""],
    name: "",
    intro: ""
  },
  3: {
    levelName: [""],
    name: "",
    intro: ""
  },
  4: {
    levelName: [""],
    name: "",
    intro: ""
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxjb25maWdcXENmZ1BhcnRuZXIuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImxldmVsTmFtZSIsIm5hbWUiLCJpbnRybyIsImJnQ29sb3IiLCJyIiwiZyIsImIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiLEtBQUc7QUFDQ0MsSUFBQUEsU0FBUyxFQUFFLENBQUMsT0FBRCxDQURaO0FBRUNDLElBQUFBLElBQUksRUFBRSxFQUZQO0FBR0NDLElBQUFBLEtBQUssRUFBRTtBQUhSLEdBRFU7QUFNYixLQUFHO0FBQ0NGLElBQUFBLFNBQVMsRUFBRSxDQUFDLElBQUQsQ0FEWjtBQUVDQyxJQUFBQSxJQUFJLEVBQUUsSUFGUDtBQUdDQyxJQUFBQSxLQUFLLEVBQUUsNENBSFI7QUFJQ0MsSUFBQUEsT0FBTyxFQUFFO0FBQUNDLE1BQUFBLENBQUMsRUFBRSxDQUFKO0FBQU9DLE1BQUFBLENBQUMsRUFBQyxHQUFUO0FBQWNDLE1BQUFBLENBQUMsRUFBRTtBQUFqQjtBQUpWLEdBTlU7QUFZYixLQUFHO0FBQ0NOLElBQUFBLFNBQVMsRUFBRSxDQUFDLEVBQUQsQ0FEWjtBQUVDQyxJQUFBQSxJQUFJLEVBQUUsRUFGUDtBQUdDQyxJQUFBQSxLQUFLLEVBQUU7QUFIUixHQVpVO0FBaUJiLEtBQUc7QUFDQ0YsSUFBQUEsU0FBUyxFQUFFLENBQUMsRUFBRCxDQURaO0FBRUNDLElBQUFBLElBQUksRUFBRSxFQUZQO0FBR0NDLElBQUFBLEtBQUssRUFBRTtBQUhSLEdBakJVO0FBc0JiLEtBQUc7QUFDQ0YsSUFBQUEsU0FBUyxFQUFFLENBQUMsRUFBRCxDQURaO0FBRUNDLElBQUFBLElBQUksRUFBRSxFQUZQO0FBR0NDLElBQUFBLEtBQUssRUFBRTtBQUhSO0FBdEJVLENBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIDA6IHtcclxuICAgICAgICBsZXZlbE5hbWU6IFtcImVtcHR5XCJdLFxyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgaW50cm86IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgMToge1xyXG4gICAgICAgIGxldmVsTmFtZTogW1wiZjFcIl0sXHJcbiAgICAgICAgbmFtZTogXCLoib7lkqpcIixcclxuICAgICAgICBpbnRybzogXCLoib7lkqrmmK/kuIDpmrvmhJvlhpLpmqrljbvlj4jmnInkupvohL7msKPmmrTouoHnmoTlsI/pm57jgILmhJvlhpLpmqrnmoTniaDvvIznuL3mnIPlnKjlh7rlpJbml4XooYzlvozluLblm57mib7liLDnmoTph5HluaPjgIJcIixcclxuICAgICAgICBiZ0NvbG9yOiB7cjogMCwgZzoxODQsIGI6IDE0Nn1cclxuICAgIH0sXHJcbiAgICAyOiB7XHJcbiAgICAgICAgbGV2ZWxOYW1lOiBbXCJcIl0sXHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBpbnRybzogXCJcIixcclxuICAgIH0sXHJcbiAgICAzOiB7XHJcbiAgICAgICAgbGV2ZWxOYW1lOiBbXCJcIl0sXHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBpbnRybzogXCJcIixcclxuICAgIH0sXHJcbiAgICA0OiB7XHJcbiAgICAgICAgbGV2ZWxOYW1lOiBbXCJcIl0sXHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBpbnRybzogXCJcIixcclxuICAgIH0sXHJcbn07Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/common/Log.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '91663yV+DxPHogKRY3ADlL1', 'Log');
// script/common/Log.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
var Log = /** @class */ (function () {
    function Log() {
    }
    return Log;
}());
exports.Log = Log;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25cXExvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBRUEsQ0FBQztJQUFELFVBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLGtCQUFHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIExvZyB7XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/model/WebAPI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '03ebe44nLBHH4l0fYiXtCmo', 'WebAPI');
// script/data/model/WebAPI.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IDataModel_1 = require("../IDataModel");
var WebAPI = /** @class */ (function (_super) {
    __extends(WebAPI, _super);
    function WebAPI() {
        var _this = _super.call(this, "WebAPI") || this;
        _this.init();
        return _this;
    }
    Object.defineProperty(WebAPI.prototype, "GameServerSocket", {
        get: function () {
            return this._GameServerSocket;
        },
        set: function (value) {
            this._GameServerSocket = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAPI.prototype, "accountName", {
        get: function () {
            return this._accountName;
        },
        set: function (value) {
            this._accountName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAPI.prototype, "loginType", {
        get: function () {
            return this._loginType;
        },
        set: function (value) {
            this._loginType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAPI.prototype, "token", {
        get: function () {
            return this._token;
        },
        set: function (value) {
            this._token = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAPI.prototype, "code", {
        get: function () {
            return this._code;
        },
        set: function (value) {
            this._code = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAPI.prototype, "channelId", {
        get: function () {
            return this._channelId;
        },
        set: function (value) {
            this._channelId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAPI.prototype, "gameId", {
        get: function () {
            return this._gameId;
        },
        set: function (value) {
            this._gameId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAPI.prototype, "lang", {
        get: function () {
            return this._lang;
        },
        set: function (value) {
            this._lang = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAPI.prototype, "gameMaker", {
        get: function () {
            return this._gameMaker;
        },
        set: function (value) {
            this._gameMaker = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAPI.prototype, "homeURL", {
        get: function () {
            return this._homeURL;
        },
        set: function (value) {
            this._homeURL = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAPI.prototype, "companyIcon", {
        get: function () {
            return this._companyIcon;
        },
        set: function (value) {
            this._companyIcon = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAPI.prototype, "windows", {
        get: function () {
            return this._windows;
        },
        set: function (value) {
            this._windows = value;
        },
        enumerable: false,
        configurable: true
    });
    WebAPI.prototype.init = function () {
        this.setData("GameServerSocket");
        this.setData("accountName");
        this.setData("loginType");
        this.setData("token");
        this.setData("gameId");
        this.setData("lang");
        this.setData("homeURL");
        this.setData("companyIcon");
        this.setData("windows");
    };
    WebAPI.prototype.setData = function (name) {
        if ((window[name] && window[name] != "") || window[name] === 0) {
            this[name] = window[name];
        }
    };
    return WebAPI;
}(IDataModel_1.default));
exports.default = WebAPI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxtb2RlbFxcV2ViQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUF1QztBQW9CdkM7SUFBb0MsMEJBQVU7SUFpRzFDO1FBQUEsWUFDSSxrQkFBTSxRQUFRLENBQUMsU0FFbEI7UUFERyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7O0lBQ2hCLENBQUM7SUFqR0Qsc0JBQUksb0NBQWdCO2FBQXBCO1lBQ0ksT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDbEMsQ0FBQzthQUNELFVBQXFCLEtBQUs7WUFDdEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztRQUNuQyxDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLCtCQUFXO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzthQUNELFVBQWdCLEtBQUs7WUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSw2QkFBUzthQUFiO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFDRCxVQUFjLEtBQUs7WUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLHlCQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUNELFVBQVUsS0FBSztZQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7OztPQUhBO0lBTUQsc0JBQUksd0JBQUk7YUFBUjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO2FBQ0QsVUFBUyxLQUFLO1lBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSw2QkFBUzthQUFiO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFDRCxVQUFjLEtBQUs7WUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLDBCQUFNO2FBQVY7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzthQUNELFVBQVcsS0FBSztZQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQUhBO0lBTUQsc0JBQUksd0JBQUk7YUFBUjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO2FBQ0QsVUFBUyxLQUFLO1lBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSw2QkFBUzthQUFiO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFDRCxVQUFjLEtBQUs7WUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLDJCQUFPO2FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzthQUNELFVBQVksS0FBSztZQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUM7OztPQUhBO0lBTUQsc0JBQUksK0JBQVc7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDO2FBQ0QsVUFBZ0IsS0FBSztZQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLDJCQUFPO2FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzthQUNELFVBQVksS0FBSztZQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUM7OztPQUhBO0lBU0QscUJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELHdCQUFPLEdBQVAsVUFBUSxJQUFZO1FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFFTCxhQUFDO0FBQUQsQ0F4SEEsQUF3SEMsQ0F4SG1DLG9CQUFVLEdBd0g3QyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJRGF0YU1vZGVsIGZyb20gXCIuLi9JRGF0YU1vZGVsXCI7XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgICAgICBHYW1lU2VydmVyU29ja2V0OiBhbnk7XHJcbiAgICAgICAgYWNjb3VudE5hbWU6IGFueTtcclxuICAgICAgICBsb2dpblR5cGU6IGFueTtcclxuICAgICAgICB0b2tlbjogYW55O1xyXG4gICAgICAgIGNvZGU6IGFueTtcclxuICAgICAgICBjaGFubmVsSWQ6IGFueTtcclxuICAgICAgICBnYW1lSWQ6IGFueTtcclxuICAgICAgICBsYW5nOiBhbnk7XHJcbiAgICAgICAgZ2FtZU1ha2VyOiBhbnk7XHJcbiAgICAgICAgaG9tZVVSTDogYW55O1xyXG4gICAgICAgIGNvbXBhbnlJY29uOiBhbnk7XHJcbiAgICAgICAgd2luZG93czogYW55O1xyXG4gICAgICAgIENvY29zTG9hZEVuZDogYW55O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWJBUEkgZXh0ZW5kcyBJRGF0YU1vZGVsIHtcclxuXHJcbiAgICBwcml2YXRlIF9HYW1lU2VydmVyU29ja2V0O1xyXG4gICAgZ2V0IEdhbWVTZXJ2ZXJTb2NrZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dhbWVTZXJ2ZXJTb2NrZXQ7XHJcbiAgICB9XHJcbiAgICBzZXQgR2FtZVNlcnZlclNvY2tldCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX0dhbWVTZXJ2ZXJTb2NrZXQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9hY2NvdW50TmFtZTtcclxuICAgIGdldCBhY2NvdW50TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYWNjb3VudE5hbWU7XHJcbiAgICB9XHJcbiAgICBzZXQgYWNjb3VudE5hbWUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9hY2NvdW50TmFtZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvZ2luVHlwZTtcclxuICAgIGdldCBsb2dpblR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvZ2luVHlwZTtcclxuICAgIH1cclxuICAgIHNldCBsb2dpblR5cGUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9sb2dpblR5cGUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF90b2tlbjtcclxuICAgIGdldCB0b2tlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW47XHJcbiAgICB9XHJcbiAgICBzZXQgdG9rZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLl90b2tlbiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NvZGU7XHJcbiAgICBnZXQgY29kZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29kZTtcclxuICAgIH1cclxuICAgIHNldCBjb2RlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fY29kZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NoYW5uZWxJZDtcclxuICAgIGdldCBjaGFubmVsSWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYW5uZWxJZDtcclxuICAgIH1cclxuICAgIHNldCBjaGFubmVsSWQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9jaGFubmVsSWQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nYW1lSWQ7XHJcbiAgICBnZXQgZ2FtZUlkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nYW1lSWQ7XHJcbiAgICB9XHJcbiAgICBzZXQgZ2FtZUlkKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fZ2FtZUlkID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbGFuZztcclxuICAgIGdldCBsYW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sYW5nO1xyXG4gICAgfVxyXG4gICAgc2V0IGxhbmcodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9sYW5nID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2FtZU1ha2VyO1xyXG4gICAgZ2V0IGdhbWVNYWtlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZU1ha2VyO1xyXG4gICAgfVxyXG4gICAgc2V0IGdhbWVNYWtlcih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2dhbWVNYWtlciA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hvbWVVUkw7XHJcbiAgICBnZXQgaG9tZVVSTCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faG9tZVVSTDtcclxuICAgIH1cclxuICAgIHNldCBob21lVVJMKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5faG9tZVVSTCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NvbXBhbnlJY29uO1xyXG4gICAgZ2V0IGNvbXBhbnlJY29uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wYW55SWNvbjtcclxuICAgIH1cclxuICAgIHNldCBjb21wYW55SWNvbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2NvbXBhbnlJY29uID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfd2luZG93cztcclxuICAgIGdldCB3aW5kb3dzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93aW5kb3dzO1xyXG4gICAgfVxyXG4gICAgc2V0IHdpbmRvd3ModmFsdWUpIHtcclxuICAgICAgICB0aGlzLl93aW5kb3dzID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihcIldlYkFQSVwiKTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YShcIkdhbWVTZXJ2ZXJTb2NrZXRcIik7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKFwiYWNjb3VudE5hbWVcIik7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKFwibG9naW5UeXBlXCIpO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YShcInRva2VuXCIpO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YShcImdhbWVJZFwiKTtcclxuICAgICAgICB0aGlzLnNldERhdGEoXCJsYW5nXCIpO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YShcImhvbWVVUkxcIik7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKFwiY29tcGFueUljb25cIik7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKFwid2luZG93c1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREYXRhKG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICgod2luZG93W25hbWVdICAmJiB3aW5kb3dbbmFtZV0gIT0gXCJcIikgfHwgd2luZG93W25hbWVdID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB3aW5kb3dbbmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/scene/DataMineCollect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3ba5jlSARHnasx6WtisttO', 'DataMineCollect');
// script/data/scene/DataMineCollect.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var ccclass = cc._decorator.ccclass;
var DataMineCollect = /** @class */ (function (_super) {
    __extends(DataMineCollect, _super);
    function DataMineCollect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataMineCollect.prototype.onLoad = function () {
        this.node_con_holder = this.node.getChildByName("con_holder");
        this.node_view_holder = this.node_con_holder.getChildByName("view_holder");
        this.node_con_1 = this.node_view_holder.getChildByName("con_1");
        this.btn_home = this.node.getChildByName("btn_home");
        this.btn_vip = this.node.getChildByName("btn_vip");
    };
    DataMineCollect = __decorate([
        ccclass
    ], DataMineCollect);
    return DataMineCollect;
}(cc.Component));
exports.default = DataMineCollect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxzY2VuZVxcRGF0YU1pbmVDb2xsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQUEsT0FBTyxHQUFJLEVBQUUsQ0FBQyxVQUFVLFFBQWpCLENBQWtCO0FBR2hDO0lBQTZDLG1DQUFZO0lBQXpEOztJQW1CQSxDQUFDO0lBVkcsZ0NBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFdkQsQ0FBQztJQWpCZ0IsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQW1CbkM7SUFBRCxzQkFBQztDQW5CRCxBQW1CQyxDQW5CNEMsRUFBRSxDQUFDLFNBQVMsR0FtQnhEO2tCQW5Cb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhTWluZUNvbGxlY3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG5vZGVfY29uX2hvbGRlcjogY2MuTm9kZTtcclxuICAgIG5vZGVfdmlld19ob2xkZXI6IGNjLk5vZGU7XHJcbiAgICBub2RlX2Nvbl8xOiBjYy5Ob2RlO1xyXG5cclxuICAgIGJ0bl9ob21lOiBjYy5Ob2RlO1xyXG4gICAgYnRuX3ZpcDogY2MuTm9kZTtcclxuXHJcbiAgICBvbkxvYWQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZV9jb25faG9sZGVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29uX2hvbGRlclwiKTtcclxuICAgICAgICB0aGlzLm5vZGVfdmlld19ob2xkZXIgPSB0aGlzLm5vZGVfY29uX2hvbGRlci5nZXRDaGlsZEJ5TmFtZShcInZpZXdfaG9sZGVyXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZV9jb25fMSA9IHRoaXMubm9kZV92aWV3X2hvbGRlci5nZXRDaGlsZEJ5TmFtZShcImNvbl8xXCIpO1xyXG4gICAgICAgIHRoaXMuYnRuX2hvbWUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5faG9tZVwiKTtcclxuICAgICAgICB0aGlzLmJ0bl92aXAgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fdmlwXCIpO1xyXG5cclxuICAgIH1cclxuXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/model/System.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a67c9ki4oxP0I5lYcxGk/fB', 'System');
// script/data/model/System.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IDataModel_1 = require("../IDataModel");
var System = /** @class */ (function (_super) {
    __extends(System, _super);
    function System() {
        var _this = _super.call(this, "System") || this;
        _this.developMode = 0;
        _this.language = "NTD";
        return _this;
    }
    return System;
}(IDataModel_1.default));
exports.default = System;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxtb2RlbFxcU3lzdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUF1QztBQUV2QztJQUFvQywwQkFBVTtJQUsxQztRQUFBLFlBQ0ksa0JBQU0sUUFBUSxDQUFDLFNBQ2xCO1FBTEQsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsY0FBUSxHQUFXLEtBQUssQ0FBQzs7SUFJekIsQ0FBQztJQUVMLGFBQUM7QUFBRCxDQVRBLEFBU0MsQ0FUbUMsb0JBQVUsR0FTN0MiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSURhdGFNb2RlbCBmcm9tIFwiLi4vSURhdGFNb2RlbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3lzdGVtIGV4dGVuZHMgSURhdGFNb2RlbCB7XHJcblxyXG4gICAgZGV2ZWxvcE1vZGU6IG51bWJlciA9IDA7XHJcbiAgICBsYW5ndWFnZTogc3RyaW5nID0gXCJOVERcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihcIlN5c3RlbVwiKTtcclxuICAgIH1cclxuXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/scene/DataMineMng.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'adeeazM4dRK1rn5CeMn8Sqb', 'DataMineMng');
// script/data/scene/DataMineMng.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var ccclass = cc._decorator.ccclass;
var DataMineMng = /** @class */ (function (_super) {
    __extends(DataMineMng, _super);
    function DataMineMng() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataMineMng.prototype.onLoad = function () {
        this.tab_nav_holder = this.node.getChildByName("tab_holder");
        this.con_holder = this.node.getChildByName("con_holder");
    };
    DataMineMng = __decorate([
        ccclass
    ], DataMineMng);
    return DataMineMng;
}(cc.Component));
exports.default = DataMineMng;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxzY2VuZVxcRGF0YU1pbmVNbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBQSxPQUFPLEdBQUksRUFBRSxDQUFDLFVBQVUsUUFBakIsQ0FBa0I7QUFHaEM7SUFBeUMsK0JBQVk7SUFBckQ7O0lBVUEsQ0FBQztJQUxHLDRCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQVJnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBVS9CO0lBQUQsa0JBQUM7Q0FWRCxBQVVDLENBVndDLEVBQUUsQ0FBQyxTQUFTLEdBVXBEO2tCQVZvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3N9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFNaW5lTW5nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICB0YWJfbmF2X2hvbGRlcjrjgIBjYy5Ob2RlO1xyXG4gICAgY29uX2hvbGRlcjrjgIBjYy5Ob2RlO1xyXG5cclxuICAgIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRhYl9uYXZfaG9sZGVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGFiX2hvbGRlclwiKTtcclxuICAgICAgICB0aGlzLmNvbl9ob2xkZXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb25faG9sZGVyXCIpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/scene/DataMineMngCon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '79162YREBtFPLtdy43/hcZX', 'DataMineMngCon');
// script/data/scene/DataMineMngCon.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var ccclass = cc._decorator.ccclass;
var DataMineMngCon = /** @class */ (function (_super) {
    __extends(DataMineMngCon, _super);
    function DataMineMngCon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataMineMngCon.prototype.onLoad = function () {
        this.node_view_holder = this.node.getChildByName("view_holder");
        this.node_page_1 = this.node_view_holder.getChildByName("con_1");
        this.node_page_2 = this.node_view_holder.getChildByName("con_2");
        this.node_page_3 = this.node_view_holder.getChildByName("con_3");
    };
    DataMineMngCon = __decorate([
        ccclass
    ], DataMineMngCon);
    return DataMineMngCon;
}(cc.Component));
exports.default = DataMineMngCon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxzY2VuZVxcRGF0YU1pbmVNbmdDb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVEsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBbUI7QUFHbEM7SUFBNEMsa0NBQVk7SUFBeEQ7O0lBY0EsQ0FBQztJQVBHLCtCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQVpnQixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBY2xDO0lBQUQscUJBQUM7Q0FkRCxBQWNDLENBZDJDLEVBQUUsQ0FBQyxTQUFTLEdBY3ZEO2tCQWRvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YU1pbmVNbmdDb24gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG5vZGVfdmlld19ob2xkZXI6IGNjLk5vZGU7XHJcbiAgICBub2RlX3BhZ2VfMTogY2MuTm9kZTtcclxuICAgIG5vZGVfcGFnZV8yOiBjYy5Ob2RlO1xyXG4gICAgbm9kZV9wYWdlXzM6IGNjLk5vZGU7XHJcblxyXG4gICAgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZV92aWV3X2hvbGRlciA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInZpZXdfaG9sZGVyXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZV9wYWdlXzEgPSB0aGlzLm5vZGVfdmlld19ob2xkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJjb25fMVwiKTtcclxuICAgICAgICB0aGlzLm5vZGVfcGFnZV8yID0gdGhpcy5ub2RlX3ZpZXdfaG9sZGVyLmdldENoaWxkQnlOYW1lKFwiY29uXzJcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlX3BhZ2VfMyA9IHRoaXMubm9kZV92aWV3X2hvbGRlci5nZXRDaGlsZEJ5TmFtZShcImNvbl8zXCIpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/scene/DataMineToolBox.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0c9ebgvRsVFL4K6mEvb/+vq', 'DataMineToolBox');
// script/data/scene/DataMineToolBox.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var ccclass = cc._decorator.ccclass;
var DataMineToolBox = /** @class */ (function (_super) {
    __extends(DataMineToolBox, _super);
    function DataMineToolBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataMineToolBox.prototype.onLoad = function () {
        this.node_item_slider_holder = this.node.getChildByName("item_slider_holder");
        this.node_item_main = this.node_item_slider_holder.getChildByName("item_main");
        this.node_arrow_holder = this.node.getChildByName("arrow_holder");
        this.node_props_holder = this.node.getChildByName("props_holder");
        this.node_pet_dialog_holder = this.node.getChildByName("pet_dialog_holder");
        this.label_pet_dialog_txt = this.node_pet_dialog_holder.getChildByName("txt").getComponent(cc.Label);
        this.node_level_holder = this.node.getChildByName("level_holder");
        this.node_level_bar = this.node_level_holder.getChildByName("level_bar");
        this.ani_level_bar = this.node_level_bar.getChildByName("mask").getComponent(cc.Animation);
        this.label_level_num = this.node_level_holder.getChildByName("level_num").getComponent(cc.Label);
        this.node_intro_holder = this.node.getChildByName("intro_holder");
        this.label_msg_tip = this.node_intro_holder.getChildByName("msg_tip").getComponent(cc.Label);
        this.label_item_name = this.node.getChildByName("item_name").getComponent(cc.Label);
        this.node_intro_con_1 = this.node_intro_holder.getChildByName("con_1");
        this.node_intro_con_2 = this.node_intro_holder.getChildByName("con_2");
        this.node_intro_con_3 = this.node_intro_holder.getChildByName("con_3");
        this.btn_confirm = this.node.getChildByName("btn_confirm");
        this.node_confirm_active = this.btn_confirm.getChildByName("active");
        this.node_state_tip = this.node.getChildByName("state_tip");
        this.btn_slider_arrow_left = this.node_arrow_holder.getChildByName("arrow_left");
        this.btn_slider_arrow_right = this.node_arrow_holder.getChildByName("arrow_right");
        this.page_view = this.node_item_slider_holder.getComponent(cc.PageView);
        this.layout = this.node_item_main.getComponent(cc.Layout);
        this.node_choose_tip_main = this.node.getChildByName("choose_tip_main");
        this.node_choose_tip_bg = this.node_choose_tip_main.getChildByName("bg");
        this.node_choose_img_mask = this.node_choose_tip_main.getChildByName("mask");
        this.node_choose_tip_img = this.node_choose_img_mask.getChildByName("img");
        this.sprite_choose_tip_img = this.node_choose_tip_img.getComponent(cc.Sprite);
        this.node_choose_state = this.node_choose_tip_main.getChildByName("btn_state");
        this.label_choose_tip_title = this.node_choose_tip_main.getChildByName("title").getComponent(cc.Label);
    };
    DataMineToolBox = __decorate([
        ccclass
    ], DataMineToolBox);
    return DataMineToolBox;
}(cc.Component));
exports.default = DataMineToolBox;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxzY2VuZVxcRGF0YU1pbmVUb29sQm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFRLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBR2xDO0lBQTZDLG1DQUFZO0lBQXpEOztJQTBGQSxDQUFDO0lBL0NHLGdDQUFNLEdBQU47UUFFSSxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWxFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVsRSxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxD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LGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0EwRm5DO0lBQUQsc0JBQUM7Q0ExRkQsQUEwRkMsQ0ExRjRDLEVBQUUsQ0FBQyxTQUFTLEdBMEZ4RDtrQkExRm9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhTWluZVRvb2xCb3ggZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG5vZGVfY2hvb3NlX3RpcF9tYWluOiAgY2MuTm9kZTtcclxuICAgIG5vZGVfY2hvb3NlX3RpcF9iZzogY2MuTm9kZTtcclxuICAgIG5vZGVfY2hvb3NlX2ltZ19tYXNrOiBjYy5Ob2RlO1xyXG4gICAgbm9kZV9jaG9vc2VfdGlwX2ltZzogY2MuTm9kZTtcclxuICAgIHNwcml0ZV9jaG9vc2VfdGlwX2ltZzogY2MuU3ByaXRlO1xyXG4gICAgbm9kZV9jaG9vc2Vfc3RhdGU6IGNjLk5vZGU7XHJcblxyXG4gICAgbGFiZWxfY2hvb3NlX3RpcF90aXRsZTogY2MuTGFiZWw7XHJcbiAgICBsYWJlbF9pdGVtX25hbWU6IGNjLkxhYmVsO1xyXG5cclxuICAgIG5vZGVfcGV0X2RpYWxvZ19ob2xkZXI6IGNjLk5vZGU7XHJcbiAgICBsYWJlbF9wZXRfZGlhbG9nX3R4dDogY2MuTGFiZWw7XHJcblxyXG4gICAgbm9kZV9pdGVtX3NsaWRlcl9ob2xkZXI6IGNjLk5vZGU7XHJcbiAgICBub2RlX2l0ZW1fbWFpbjogY2MuTm9kZTtcclxuICAgIG5vZGVfYXJyb3dfaG9sZGVyOiBjYy5Ob2RlO1xyXG5cclxuICAgIG5vZGVfcHJvcHNfaG9sZGVyOiBjYy5Ob2RlO1xyXG5cclxuICAgIG5vZGVfbGV2ZWxfaG9sZGVyOiBjYy5Ob2RlO1xyXG4gICAgbm9kZV9sZXZlbF9iYXI6IGNjLk5vZGU7XHJcbiAgICBhbmlfbGV2ZWxfYmFyOiBjYy5BbmltYXRpb247XHJcbiAgICBsYWJlbF9sZXZlbF9udW06IGNjLkxhYmVsO1xyXG5cclxuICAgIG5vZGVfaW50cm9faG9sZGVyOiBjYy5Ob2RlO1xyXG4gICAgbm9kZV9pbnRyb19jb25fMTogY2MuTm9kZTtcclxuICAgIG5vZGVfaW50cm9fY29uXzI6IGNjLk5vZGU7XHJcbiAgICBub2RlX2ludHJvX2Nvbl8zOiBjYy5Ob2RlO1xyXG4gICAgbGFiZWxfbXNnX3RpcDogY2MuTGFiZWw7XHJcblxyXG4gICAgYnRuX3NsaWRlcl9hcnJvd19sZWZ0OiBjYy5Ob2RlO1xyXG4gICAgYnRuX3NsaWRlcl9hcnJvd19yaWdodDogY2MuTm9kZTtcclxuXHJcbiAgICBidG5fY29uZmlybTogY2MuTm9kZTtcclxuICAgIG5vZGVfY29uZmlybV9hY3RpdmU6IGNjLk5vZGU7XHJcblxyXG4gICAgbm9kZV9zdGF0ZV90aXA6IGNjLk5vZGU7XHJcblxyXG4gICAgcGFnZV92aWV3OiBjYy5QYWdlVmlldztcclxuICAgIGxheW91dDogY2MuTGF5b3V0O1xyXG5cclxuICAgIG9uTG9hZCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlX2l0ZW1fc2xpZGVyX2hvbGRlciA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIml0ZW1fc2xpZGVyX2hvbGRlclwiKTtcclxuICAgICAgICB0aGlzLm5vZGVfaXRlbV9tYWluID0gdGhpcy5ub2RlX2l0ZW1fc2xpZGVyX2hvbGRlci5nZXRDaGlsZEJ5TmFtZShcIml0ZW1fbWFpblwiKTtcclxuICAgICAgICB0aGlzLm5vZGVfYXJyb3dfaG9sZGVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYXJyb3dfaG9sZGVyXCIpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVfcHJvcHNfaG9sZGVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvcHNfaG9sZGVyXCIpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVfcGV0X2RpYWxvZ19ob2xkZXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwZXRfZGlhbG9nX2hvbGRlclwiKTtcclxuICAgICAgICB0aGlzLmxhYmVsX3BldF9kaWFsb2dfdHh0ID0gdGhpcy5ub2RlX3BldF9kaWFsb2dfaG9sZGVyLmdldENoaWxkQnlOYW1lKFwidHh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZV9sZXZlbF9ob2xkZXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsZXZlbF9ob2xkZXJcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlX2xldmVsX2JhciA9IHRoaXMubm9kZV9sZXZlbF9ob2xkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJsZXZlbF9iYXJcIik7XHJcbiAgICAgICAgdGhpcy5hbmlfbGV2ZWxfYmFyID0gdGhpcy5ub2RlX2xldmVsX2Jhci5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMubGFiZWxfbGV2ZWxfbnVtID0gdGhpcy5ub2RlX2xldmVsX2hvbGRlci5nZXRDaGlsZEJ5TmFtZShcImxldmVsX251bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVfaW50cm9faG9sZGVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaW50cm9faG9sZGVyXCIpO1xyXG4gICAgICAgIHRoaXMubGFiZWxfbXNnX3RpcCA9IHRoaXMubm9kZV9pbnRyb19ob2xkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJtc2dfdGlwXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgIHRoaXMubGFiZWxfaXRlbV9uYW1lID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaXRlbV9uYW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZV9pbnRyb19jb25fMSA9IHRoaXMubm9kZV9pbnRyb19ob2xkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJjb25fMVwiKTtcclxuICAgICAgICB0aGlzLm5vZGVfaW50cm9fY29uXzIgPSB0aGlzLm5vZGVfaW50cm9faG9sZGVyLmdldENoaWxkQnlOYW1lKFwiY29uXzJcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlX2ludHJvX2Nvbl8zID0gdGhpcy5ub2RlX2ludHJvX2hvbGRlci5nZXRDaGlsZEJ5TmFtZShcImNvbl8zXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmJ0bl9jb25maXJtID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuX2NvbmZpcm1cIik7XHJcbiAgICAgICAgdGhpcy5ub2RlX2NvbmZpcm1fYWN0aXZlID0gdGhpcy5idG5fY29uZmlybS5nZXRDaGlsZEJ5TmFtZShcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlX3N0YXRlX3RpcCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInN0YXRlX3RpcFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5idG5fc2xpZGVyX2Fycm93X2xlZnQgPSB0aGlzLm5vZGVfYXJyb3dfaG9sZGVyLmdldENoaWxkQnlOYW1lKFwiYXJyb3dfbGVmdFwiKTtcclxuICAgICAgICB0aGlzLmJ0bl9zbGlkZXJfYXJyb3dfcmlnaHQgPSB0aGlzLm5vZGVfYXJyb3dfaG9sZGVyLmdldENoaWxkQnlOYW1lKFwiYXJyb3dfcmlnaHRcIik7XHJcblxyXG4gICAgICAgIHRoaXMucGFnZV92aWV3ID0gdGhpcy5ub2RlX2l0ZW1fc2xpZGVyX2hvbGRlci5nZXRDb21wb25lbnQoY2MuUGFnZVZpZXcpO1xyXG4gICAgICAgIHRoaXMubGF5b3V0ID0gdGhpcy5ub2RlX2l0ZW1fbWFpbi5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlX2Nob29zZV90aXBfbWFpbiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNob29zZV90aXBfbWFpblwiKTtcclxuICAgICAgICB0aGlzLm5vZGVfY2hvb3NlX3RpcF9iZyA9IHRoaXMubm9kZV9jaG9vc2VfdGlwX21haW4uZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKTtcclxuICAgICAgICB0aGlzLm5vZGVfY2hvb3NlX2ltZ19tYXNrID0gdGhpcy5ub2RlX2Nob29zZV90aXBfbWFpbi5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlX2Nob29zZV90aXBfaW1nID0gdGhpcy5ub2RlX2Nob29zZV9pbWdfbWFzay5nZXRDaGlsZEJ5TmFtZShcImltZ1wiKTtcclxuICAgICAgICB0aGlzLnNwcml0ZV9jaG9vc2VfdGlwX2ltZyA9IHRoaXMubm9kZV9jaG9vc2VfdGlwX2ltZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICB0aGlzLm5vZGVfY2hvb3NlX3N0YXRlID0gdGhpcy5ub2RlX2Nob29zZV90aXBfbWFpbi5nZXRDaGlsZEJ5TmFtZShcImJ0bl9zdGF0ZVwiKTtcclxuICAgICAgICB0aGlzLmxhYmVsX2Nob29zZV90aXBfdGl0bGUgPSB0aGlzLm5vZGVfY2hvb3NlX3RpcF9tYWluLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/scene/DataCollectGeneral.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '681860GOZRHaqZFZ7UmArby', 'DataCollectGeneral');
// script/data/scene/DataCollectGeneral.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var ccclass = cc._decorator.ccclass;
var DataCollectGeneral = /** @class */ (function (_super) {
    __extends(DataCollectGeneral, _super);
    function DataCollectGeneral() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataCollectGeneral.prototype.onLoad = function () {
        this.node_mine_tip_holder = this.node.getChildByName("mine_tip_holder");
        this.label_time = this.node_mine_tip_holder.getChildByName("remain_time").getComponent(cc.Label);
        this.label_coin_txt = this.node_mine_tip_holder.getChildByName("coin_txt").getComponent(cc.Label);
        this.node_icon_mine_box = this.node.getChildByName("icon_mine_box");
        this.sprite_icon_mine = this.node_icon_mine_box.getChildByName("icon").getComponent(cc.Sprite);
        this.node_icon_partner_box = this.node.getChildByName("icon_partner_box");
        this.sprite_icon_partner = this.node_icon_partner_box.getChildByName("icon").getComponent(cc.Sprite);
        this.node_coin_particle_holder = this.node.getChildByName("coin_particle_holder");
        this.node_gold_coin_holder = this.node.getChildByName("gold_coin_holder");
        this.node_sliver_coin_holder = this.node.getChildByName("sliver_coin_holder");
        this.node_coin_level_holder = this.node.getChildByName("coin_level_holder");
        this.label_gold = this.node_gold_coin_holder.getChildByName("txt").getComponent(cc.Label);
        this.label_sliver = this.node_sliver_coin_holder.getChildByName("txt").getComponent(cc.Label);
        this.btn_get = this.node.getChildByName("btn_get");
        this.node_get_normal = this.btn_get.getChildByName("normal");
        this.node_get_active = this.btn_get.getChildByName("active");
        this.spine_road = this.node.getChildByName("road").getComponent(sp.Skeleton);
        this.spine_pet = this.node.getChildByName("pet").getComponent(sp.Skeleton);
        this.spine_partner = this.node.getChildByName("partner").getComponent(sp.Skeleton);
        this.spine_coin = this.node.getChildByName("coin").getComponent(sp.Skeleton);
    };
    DataCollectGeneral = __decorate([
        ccclass
    ], DataCollectGeneral);
    return DataCollectGeneral;
}(cc.Component));
exports.default = DataCollectGeneral;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxzY2VuZVxcRGF0YUNvbGxlY3RHZW5lcmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQUEsT0FBTyxHQUFJLEVBQUUsQ0FBQyxVQUFVLFFBQWpCLENBQWtCO0FBR2hDO0lBQWdELHNDQUFZO0lBQTVEOztJQStEQSxDQUFDO0lBakNHLG1DQUFNLEdBQU47UUFFSSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVsRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUvRixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsbUJBQW1CLEdBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRHLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRWxGLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRTlFLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRTVFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTlGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUVqRixDQUFDO0lBN0RnQixrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQStEdEM7SUFBRCx5QkFBQztDQS9ERCxBQStEQyxDQS9EK0MsRUFBRSxDQUFDLFNBQVMsR0ErRDNEO2tCQS9Eb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3N9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFDb2xsZWN0R2VuZXJhbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgbm9kZV9jb2luX3BhcnRpY2xlX2hvbGRlcjogY2MuTm9kZTtcclxuICAgIG5vZGVfbWluZV90aXBfaG9sZGVyOiBjYy5Ob2RlO1xyXG5cclxuICAgIG5vZGVfZ29sZF9jb2luX2hvbGRlcjogY2MuTm9kZTtcclxuICAgIG5vZGVfc2xpdmVyX2NvaW5faG9sZGVyOiBjYy5Ob2RlO1xyXG5cclxuICAgIG5vZGVfY29pbl9sZXZlbF9ob2xkZXI6IGNjLk5vZGU7XHJcblxyXG4gICAgbm9kZV9pY29uX21pbmVfYm94OiBjYy5Ob2RlO1xyXG4gICAgc3ByaXRlX2ljb25fbWluZTogY2MuU3ByaXRlO1xyXG5cclxuICAgIG5vZGVfaWNvbl9wYXJ0bmVyX2JveDogY2MuTm9kZTtcclxuICAgIHNwcml0ZV9pY29uX3BhcnRuZXI6IGNjLlNwcml0ZTtcclxuXHJcbiAgICBsYWJlbF90aW1lOiBjYy5MYWJlbDtcclxuICAgIGxhYmVsX2dvbGQ6IGNjLkxhYmVsO1xyXG4gICAgbGFiZWxfc2xpdmVyOiBjYy5MYWJlbDtcclxuICAgIGxhYmVsX2NvaW5fdHh0OiBjYy5MYWJlbDtcclxuXHJcbiAgICBidG5fZ2V0OiBjYy5Ob2RlO1xyXG4gICAgbm9kZV9nZXRfbm9ybWFsOiBjYy5Ob2RlO1xyXG4gICAgbm9kZV9nZXRfYWN0aXZlOiBjYy5Ob2RlO1xyXG5cclxuICAgIHNwaW5lX3JvYWQ6IHNwLlNrZWxldG9uO1xyXG4gICAgc3BpbmVfcGV0OiBzcC5Ta2VsZXRvbjtcclxuICAgIHNwaW5lX3BhcnRuZXI6IHNwLlNrZWxldG9uO1xyXG4gICAgc3BpbmVfY29pbjogc3AuU2tlbGV0b247XHJcblxyXG4gICAgb25Mb2FkKCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVfbWluZV90aXBfaG9sZGVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibWluZV90aXBfaG9sZGVyXCIpO1xyXG4gICAgICAgIHRoaXMubGFiZWxfdGltZSA9IHRoaXMubm9kZV9taW5lX3RpcF9ob2xkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJyZW1haW5fdGltZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMubGFiZWxfY29pbl90eHQgPSB0aGlzLm5vZGVfbWluZV90aXBfaG9sZGVyLmdldENoaWxkQnlOYW1lKFwiY29pbl90eHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlX2ljb25fbWluZV9ib3ggPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uX21pbmVfYm94XCIpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlX2ljb25fbWluZSA9IHRoaXMubm9kZV9pY29uX21pbmVfYm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlX2ljb25fcGFydG5lcl9ib3ggPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uX3BhcnRuZXJfYm94XCIpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlX2ljb25fcGFydG5lciA9ICB0aGlzLm5vZGVfaWNvbl9wYXJ0bmVyX2JveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZV9jb2luX3BhcnRpY2xlX2hvbGRlciA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvaW5fcGFydGljbGVfaG9sZGVyXCIpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVfZ29sZF9jb2luX2hvbGRlciA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImdvbGRfY29pbl9ob2xkZXJcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlX3NsaXZlcl9jb2luX2hvbGRlciA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNsaXZlcl9jb2luX2hvbGRlclwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlX2NvaW5fbGV2ZWxfaG9sZGVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29pbl9sZXZlbF9ob2xkZXJcIik7XHJcblxyXG4gICAgICAgIHRoaXMubGFiZWxfZ29sZCA9IHRoaXMubm9kZV9nb2xkX2NvaW5faG9sZGVyLmdldENoaWxkQnlOYW1lKFwidHh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5sYWJlbF9zbGl2ZXIgPSB0aGlzLm5vZGVfc2xpdmVyX2NvaW5faG9sZGVyLmdldENoaWxkQnlOYW1lKFwidHh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgIHRoaXMuYnRuX2dldCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bl9nZXRcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlX2dldF9ub3JtYWwgPSB0aGlzLmJ0bl9nZXQuZ2V0Q2hpbGRCeU5hbWUoXCJub3JtYWxcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlX2dldF9hY3RpdmUgPSB0aGlzLmJ0bl9nZXQuZ2V0Q2hpbGRCeU5hbWUoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAgIHRoaXMuc3BpbmVfcm9hZCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInJvYWRcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICB0aGlzLnNwaW5lX3BldCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBldFwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgIHRoaXMuc3BpbmVfcGFydG5lciA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBhcnRuZXJcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICB0aGlzLnNwaW5lX2NvaW4gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb2luXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcblxyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/lang/CNY.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5e77b36o5lGkp97sxLufBiU', 'CNY');
// script/lang/CNY.js

"use strict";

module.exports = {
  "S_9001": '尚未開放!',
  "S_9100": '連線錯誤!',
  "T_001": '您還未有寵物喔',
  "T_002": '快去得到一隻你的礦狗吧!',
  "T_003": '您還未選定寵物喔',
  "T_004": '您還未選定小夥伴喔',
  "T_005": '未選擇',
  "T_006": '等級',
  "T_007": '使用!',
  "I_001": '礦機功能',
  "I_002": '礦機每小時都會給予玩家一定數量的錢幣，每過六小時可領一次，十二小時即達上限不再累積。!',
  "I_003": '礦機等級',
  "I_004": '礦機會隨著等級的成長而增加所得的獎勵。消耗罐頭及銀幣有一定機率可以提升礦機等級。'
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsYW5nXFxDTlkuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBSWIsWUFBVSxPQUpHO0FBS2IsWUFBVSxPQUxHO0FBT2IsV0FBUyxTQVBJO0FBUWIsV0FBUyxjQVJJO0FBU2IsV0FBUyxVQVRJO0FBVWIsV0FBUyxXQVZJO0FBV2IsV0FBUyxLQVhJO0FBWWIsV0FBUyxJQVpJO0FBYWIsV0FBUyxLQWJJO0FBZWIsV0FBUyxNQWZJO0FBZ0JiLFdBQVMsNkNBaEJJO0FBaUJiLFdBQVMsTUFqQkk7QUFrQmIsV0FBUztBQWxCSSxDQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XHJcblxyXG5cclxuXHJcbiAgICBcIlNfOTAwMVwiOiAn5bCa5pyq6ZaL5pS+IScsXHJcbiAgICBcIlNfOTEwMFwiOiAn6YCj57ea6Yyv6KqkIScsXHJcblxyXG4gICAgXCJUXzAwMVwiOiAn5oKo6YKE5pyq5pyJ5a+154mp5ZaUJyxcclxuICAgIFwiVF8wMDJcIjogJ+W/q+WOu+W+l+WIsOS4gOmau+S9oOeahOekpueLl+WQpyEnLFxyXG4gICAgXCJUXzAwM1wiOiAn5oKo6YKE5pyq6YG45a6a5a+154mp5ZaUJyxcclxuICAgIFwiVF8wMDRcIjogJ+aCqOmChOacqumBuOWumuWwj+WkpeS8tOWWlCcsXHJcbiAgICBcIlRfMDA1XCI6ICfmnKrpgbjmk4cnLFxyXG4gICAgXCJUXzAwNlwiOiAn562J57SaJyxcclxuICAgIFwiVF8wMDdcIjogJ+S9v+eUqCEnLFxyXG5cclxuICAgIFwiSV8wMDFcIjogJ+ekpuapn+WKn+iDvScsXHJcbiAgICBcIklfMDAyXCI6ICfnpKbmqZ/mr4/lsI/mmYLpg73mnIPntabkuojnjqnlrrbkuIDlrprmlbjph4/nmoTpjKLluaPvvIzmr4/pgY7lha3lsI/mmYLlj6/poJjkuIDmrKHvvIzljYHkuozlsI/mmYLljbPpgZTkuIrpmZDkuI3lho3ntK/nqY3jgIIhJyxcclxuICAgIFwiSV8wMDNcIjogJ+ekpuapn+etiee0micsXHJcbiAgICBcIklfMDA0XCI6ICfnpKbmqZ/mnIPpmqjokZfnrYnntJrnmoTmiJDplbfogIzlop7liqDmiYDlvpfnmoTnjY7li7XjgILmtojogJfnvZDpoK3lj4rpioDluaPmnInkuIDlrprmqZ/njoflj6/ku6Xmj5DljYfnpKbmqZ/nrYnntJrjgIInLFxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/MusicMng.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5b610IWD/FEgp5Yjbypp1Sk', 'MusicMng');
// script/manager/MusicMng.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameCenter_1 = require("../data/GameCenter");
var MusicMng = /** @class */ (function () {
    function MusicMng() {
        this._data = {};
        this._musicID = null;
    }
    MusicMng.prototype.init = function () {
        this._volMusic = GameCenter_1.default.system.music_vol;
        this._volEffect = GameCenter_1.default.system.effect_vol;
        this.musicVolSet();
        this.effectVolSet();
    };
    MusicMng.prototype.preLoad = function (callBack) {
        this.audioLoad("music/preload", callBack);
    };
    MusicMng.prototype.load = function (callBack) {
        this.audioLoad("music/main", callBack);
    };
    MusicMng.prototype.audioLoad = function (path, callBack) {
        var _this = this;
        cc.loader.loadResDir(path, cc.AudioClip, function (err, Clip) {
            for (var key in Clip) {
                _this._data[Clip[key]._name] = Clip[key];
            }
            if (callBack)
                callBack();
        });
    };
    MusicMng.prototype.switchMusic = function () {
        GameCenter_1.default.system.is_open_music = !GameCenter_1.default.system.is_open_music;
        this.musicVolSet();
        return GameCenter_1.default.system.is_open_music;
    };
    MusicMng.prototype.musicPlay = function (musicName, playLoop) {
        if (playLoop === void 0) { playLoop = true; }
        this.musicStop();
        this._musicID = cc.audioEngine.playMusic(this._data[musicName], playLoop);
        return this._musicID;
    };
    MusicMng.prototype.musicStop = function () {
        cc.audioEngine.stopMusic();
    };
    MusicMng.prototype.musicVolSet = function (vol) {
        if (vol) {
            this._volMusic = vol;
        }
        cc.audioEngine.setMusicVolume(this.getMusicState() ? this._volMusic : 0);
    };
    MusicMng.prototype.getMusicState = function () {
        return GameCenter_1.default.system.is_open_music;
    };
    MusicMng.prototype.switchEffect = function () {
        GameCenter_1.default.system.is_open_sound = !GameCenter_1.default.system.is_open_sound;
        this.effectVolSet();
        return GameCenter_1.default.system.is_open_sound;
    };
    MusicMng.prototype.effectPlay = function (effectName, playLoop) {
        if (playLoop === void 0) { playLoop = false; }
        if (!GameCenter_1.default.system.is_open_sound)
            return;
        return cc.audioEngine.playEffect(this._data[effectName], playLoop);
    };
    MusicMng.prototype.effectStop = function (effectID) {
        cc.audioEngine.stop(effectID);
    };
    MusicMng.prototype.effectVolSet = function () {
        cc.audioEngine.setEffectsVolume(GameCenter_1.default.system.is_open_sound ? this._volEffect : 0);
    };
    MusicMng.prototype.getEffectState = function () {
        return GameCenter_1.default.system.is_open_sound;
    };
    MusicMng.prototype.btnClick = function () {
        this.effectPlay("button_01");
    };
    return MusicMng;
}());
exports.default = new MusicMng();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxNdXNpY01uZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUU1QztJQUFBO1FBRVksVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGFBQVEsR0FBRyxJQUFJLENBQUM7SUEyRjVCLENBQUM7SUF2RkcsdUJBQUksR0FBSjtRQUVJLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLEdBQUcsb0JBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBRS9DLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFeEIsQ0FBQztJQUVELDBCQUFPLEdBQVAsVUFBUSxRQUFtQjtRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsdUJBQUksR0FBSixVQUFLLFFBQW1CO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCw0QkFBUyxHQUFULFVBQVUsSUFBWSxFQUFFLFFBQW1CO1FBQTNDLGlCQU9DO1FBTkcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFHLEVBQUUsSUFBSTtZQUMvQyxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtnQkFDbEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzNDO1lBQ0QsSUFBSSxRQUFRO2dCQUFFLFFBQVEsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdELDhCQUFXLEdBQVg7UUFDSSxvQkFBVSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsQ0FBQyxvQkFBVSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDbkUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLE9BQU8sb0JBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQzNDLENBQUM7SUFFRCw0QkFBUyxHQUFULFVBQVUsU0FBaUIsRUFBRSxRQUFlO1FBQWYseUJBQUEsRUFBQSxlQUFlO1FBQ3hDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDMUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsOEJBQVcsR0FBWCxVQUFZLEdBQVk7UUFFcEIsSUFBSSxHQUFHLEVBQUU7WUFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztTQUN4QjtRQUVELEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFNUUsQ0FBQztJQUVELGdDQUFhLEdBQWI7UUFDSSxPQUFPLG9CQUFVLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUMzQyxDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUNJLG9CQUFVLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxDQUFFLG9CQUFVLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUNwRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsT0FBTyxvQkFBVSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDM0MsQ0FBQztJQUVELDZCQUFVLEdBQVYsVUFBVyxVQUFrQixFQUFFLFFBQXlCO1FBQXpCLHlCQUFBLEVBQUEsZ0JBQXlCO1FBQ3BELElBQUcsQ0FBQyxvQkFBVSxDQUFDLE1BQU0sQ0FBQyxhQUFhO1lBQUUsT0FBTztRQUM1QyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELDZCQUFVLEdBQVYsVUFBVyxRQUFnQjtRQUN2QixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsb0JBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRUQsaUNBQWMsR0FBZDtRQUNJLE9BQU8sb0JBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQzNDLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBSUwsZUFBQztBQUFELENBOUZBLEFBOEZDLElBQUE7QUFFRCxrQkFBZSxJQUFJLFFBQVEsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVDZW50ZXIgZnJvbSBcIi4uL2RhdGEvR2FtZUNlbnRlclwiO1xyXG5cclxuY2xhc3MgTXVzaWNNbmcge1xyXG5cclxuICAgIHByaXZhdGUgX2RhdGEgPSB7fTtcclxuICAgIHByaXZhdGUgX211c2ljSUQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfdm9sTXVzaWM7XHJcbiAgICBwcml2YXRlIF92b2xFZmZlY3Q7XHJcblxyXG4gICAgaW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5fdm9sTXVzaWMgPSBHYW1lQ2VudGVyLnN5c3RlbS5tdXNpY192b2w7XHJcbiAgICAgICAgdGhpcy5fdm9sRWZmZWN0ID0gR2FtZUNlbnRlci5zeXN0ZW0uZWZmZWN0X3ZvbDtcclxuXHJcbiAgICAgICAgdGhpcy5tdXNpY1ZvbFNldCgpO1xyXG4gICAgICAgIHRoaXMuZWZmZWN0Vm9sU2V0KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByZUxvYWQoY2FsbEJhY2s/OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYXVkaW9Mb2FkKFwibXVzaWMvcHJlbG9hZFwiLCBjYWxsQmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZChjYWxsQmFjaz86IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hdWRpb0xvYWQoXCJtdXNpYy9tYWluXCIsIGNhbGxCYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBhdWRpb0xvYWQocGF0aDogc3RyaW5nLCBjYWxsQmFjaz86IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXNEaXIocGF0aCwgY2MuQXVkaW9DbGlwLCAoZXJyLCBDbGlwKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBDbGlwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhW0NsaXBba2V5XS5fbmFtZV0gPSBDbGlwW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNhbGxCYWNrKSBjYWxsQmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzd2l0Y2hNdXNpYygpOiBib29sZWFuIHtcclxuICAgICAgICBHYW1lQ2VudGVyLnN5c3RlbS5pc19vcGVuX211c2ljID0gIUdhbWVDZW50ZXIuc3lzdGVtLmlzX29wZW5fbXVzaWM7XHJcbiAgICAgICAgdGhpcy5tdXNpY1ZvbFNldCgpO1xyXG4gICAgICAgIHJldHVybiBHYW1lQ2VudGVyLnN5c3RlbS5pc19vcGVuX211c2ljO1xyXG4gICAgfVxyXG5cclxuICAgIG11c2ljUGxheShtdXNpY05hbWU6IHN0cmluZywgcGxheUxvb3AgPSB0cnVlKTogbnVtYmVyIHtcclxuICAgICAgICB0aGlzLm11c2ljU3RvcCgpO1xyXG4gICAgICAgIHRoaXMuX211c2ljSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5fZGF0YVttdXNpY05hbWVdLCBwbGF5TG9vcCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX211c2ljSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgbXVzaWNTdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG4gICAgfVxyXG5cclxuICAgIG11c2ljVm9sU2V0KHZvbD86IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodm9sKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZvbE11c2ljID0gdm9sO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUodGhpcy5nZXRNdXNpY1N0YXRlKCk/IHRoaXMuX3ZvbE11c2ljIDogMCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldE11c2ljU3RhdGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIEdhbWVDZW50ZXIuc3lzdGVtLmlzX29wZW5fbXVzaWM7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoRWZmZWN0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIEdhbWVDZW50ZXIuc3lzdGVtLmlzX29wZW5fc291bmQgPSAhIEdhbWVDZW50ZXIuc3lzdGVtLmlzX29wZW5fc291bmQ7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RWb2xTZXQoKTtcclxuICAgICAgICByZXR1cm4gR2FtZUNlbnRlci5zeXN0ZW0uaXNfb3Blbl9zb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICBlZmZlY3RQbGF5KGVmZmVjdE5hbWU6IHN0cmluZywgcGxheUxvb3A6IGJvb2xlYW4gPSBmYWxzZSk6IG51bWJlciB7XHJcbiAgICAgICAgaWYoIUdhbWVDZW50ZXIuc3lzdGVtLmlzX29wZW5fc291bmQpIHJldHVybjtcclxuICAgICAgICByZXR1cm4gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLl9kYXRhW2VmZmVjdE5hbWVdLCBwbGF5TG9vcCk7XHJcbiAgICB9XHJcblxyXG4gICAgZWZmZWN0U3RvcChlZmZlY3RJRDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcChlZmZlY3RJRCk7XHJcbiAgICB9XHJcblxyXG4gICAgZWZmZWN0Vm9sU2V0KCk6IHZvaWQge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUoR2FtZUNlbnRlci5zeXN0ZW0uaXNfb3Blbl9zb3VuZCA/IHRoaXMuX3ZvbEVmZmVjdCA6IDApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVmZmVjdFN0YXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBHYW1lQ2VudGVyLnN5c3RlbS5pc19vcGVuX3NvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgIGJ0bkNsaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWZmZWN0UGxheShcImJ1dHRvbl8wMVwiKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IE11c2ljTW5nKCk7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/scene/DataUIMusic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '87d10eQ+dlK/K0hO7FQVb4S', 'DataUIMusic');
// script/data/scene/DataUIMusic.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var ccclass = cc._decorator.ccclass;
var DataUIMusic = /** @class */ (function (_super) {
    __extends(DataUIMusic, _super);
    function DataUIMusic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataUIMusic.prototype.onLoad = function () {
        this.node_main = this.node.getChildByName("main");
        this.node_music = this.node_main.getChildByName("btn_music");
        this.node_effect = this.node_main.getChildByName("btn_effect");
        this.label_music = this.node_music.getChildByName("title").getComponent(cc.Label);
        this.label_effect = this.node_effect.getChildByName("title").getComponent(cc.Label);
        this.btn_music = this.node_music.getChildByName("switch_main");
        this.btn_effect = this.node_effect.getChildByName("switch_main");
        this.btn_close = this.node_main.getChildByName("btn_close");
        this.label_close = this.btn_close.getChildByName("txt").getComponent(cc.Label);
        this.node_musicBg = this.btn_music.getChildByName("bg");
        this.node_musicCircle = this.btn_music.getChildByName("circle");
        this.node_effectBg = this.btn_effect.getChildByName("bg");
        this.node_effectCircle = this.btn_effect.getChildByName("circle");
    };
    DataUIMusic = __decorate([
        ccclass
    ], DataUIMusic);
    return DataUIMusic;
}(cc.Component));
exports.default = DataUIMusic;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxzY2VuZVxcRGF0YVVJTXVzaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVEsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBbUI7QUFHbEM7SUFBeUMsK0JBQVk7SUFBckQ7O0lBeUNBLENBQUM7SUF4QkcsNEJBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxTQUFTLEdBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRS9ELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRS9FLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWhFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXRFLENBQUM7SUF2Q2dCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0F5Qy9CO0lBQUQsa0JBQUM7Q0F6Q0QsQUF5Q0MsQ0F6Q3dDLEVBQUUsQ0FBQyxTQUFTLEdBeUNwRDtrQkF6Q29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhVUlNdXNpYyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgbm9kZV9tYWluOiBjYy5Ob2RlO1xyXG4gICAgbm9kZV9tdXNpYzogY2MuTm9kZTtcclxuICAgIG5vZGVfZWZmZWN0OiBjYy5Ob2RlO1xyXG4gICAgbGFiZWxfbXVzaWM6IGNjLkxhYmVsO1xyXG4gICAgbGFiZWxfZWZmZWN0OiBjYy5MYWJlbDtcclxuICAgIGJ0bl9tdXNpYzogY2MuTm9kZTtcclxuICAgIGJ0bl9lZmZlY3Q6IGNjLk5vZGU7XHJcbiAgICBidG5fY2xvc2U6IGNjLk5vZGU7XHJcbiAgICBsYWJlbF9jbG9zZTogY2MuTGFiZWw7XHJcblxyXG4gICAgbm9kZV9tdXNpY0JnOiBjYy5Ob2RlO1xyXG4gICAgbm9kZV9lZmZlY3RCZzogY2MuTm9kZTtcclxuICAgIG5vZGVfbXVzaWNDaXJjbGU6IGNjLk5vZGU7XHJcbiAgICBub2RlX2VmZmVjdENpcmNsZTogY2MuTm9kZTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZV9tYWluID0gIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm1haW5cIik7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZV9tdXNpYyA9IHRoaXMubm9kZV9tYWluLmdldENoaWxkQnlOYW1lKFwiYnRuX211c2ljXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZV9lZmZlY3QgPSB0aGlzLm5vZGVfbWFpbi5nZXRDaGlsZEJ5TmFtZShcImJ0bl9lZmZlY3RcIik7XHJcblxyXG4gICAgICAgIHRoaXMubGFiZWxfbXVzaWMgPSB0aGlzLm5vZGVfbXVzaWMuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMubGFiZWxfZWZmZWN0ID0gdGhpcy5ub2RlX2VmZmVjdC5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgIHRoaXMuYnRuX211c2ljID0gdGhpcy5ub2RlX211c2ljLmdldENoaWxkQnlOYW1lKFwic3dpdGNoX21haW5cIik7XHJcbiAgICAgICAgdGhpcy5idG5fZWZmZWN0ID0gdGhpcy5ub2RlX2VmZmVjdC5nZXRDaGlsZEJ5TmFtZShcInN3aXRjaF9tYWluXCIpO1xyXG4gICAgICAgIHRoaXMuYnRuX2Nsb3NlID0gdGhpcy5ub2RlX21haW4uZ2V0Q2hpbGRCeU5hbWUoXCJidG5fY2xvc2VcIik7XHJcblxyXG4gICAgICAgIHRoaXMubGFiZWxfY2xvc2UgPSB0aGlzLmJ0bl9jbG9zZS5nZXRDaGlsZEJ5TmFtZShcInR4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVfbXVzaWNCZyA9IHRoaXMuYnRuX211c2ljLmdldENoaWxkQnlOYW1lKFwiYmdcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlX211c2ljQ2lyY2xlID0gdGhpcy5idG5fbXVzaWMuZ2V0Q2hpbGRCeU5hbWUoXCJjaXJjbGVcIik7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZV9lZmZlY3RCZyA9IHRoaXMuYnRuX2VmZmVjdC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZV9lZmZlY3RDaXJjbGUgPSB0aGlzLmJ0bl9lZmZlY3QuZ2V0Q2hpbGRCeU5hbWUoXCJjaXJjbGVcIik7XHJcblxyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/SceneMng.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1ffbcqd11JElod7SHTW99A/', 'SceneMng');
// script/manager/SceneMng.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UIMessage_1 = require("../controllers/ui/UIMessage");
var UIHelp_1 = require("../controllers/ui/UIHelp");
var UILoading_1 = require("../controllers/ui/UILoading");
var SceneName;
(function (SceneName) {
    SceneName[SceneName["Login"] = 0] = "Login";
    SceneName[SceneName["Game"] = 1] = "Game";
})(SceneName || (SceneName = {}));
var SceneMng = /** @class */ (function () {
    function SceneMng() {
        this._nowScene = SceneName.Login;
        this._resizeActive = false;
        this._resizeDt = 0;
        this.init();
    }
    SceneMng.prototype.init = function () {
        this.resizeBindOn();
    };
    SceneMng.prototype.preload = function (sceneName, onCompleted) {
        cc.director.preloadScene(sceneName, onCompleted);
    };
    SceneMng.prototype.load = function (sceneName) {
        var _this = this;
        cc.director.loadScene(sceneName, function () {
            _this.resize();
        });
    };
    SceneMng.prototype.goGame = function () {
        this.load("mainGame");
        this._nowScene = SceneName.Game;
    };
    SceneMng.prototype.getCurrentSceneName = function () {
        return this._nowScene;
    };
    SceneMng.prototype.resize = function () {
        this.setCanvasSize();
        UIHelp_1.default.Resize(UILoading_1.default);
        UIHelp_1.default.Resize(UIMessage_1.default);
    };
    SceneMng.prototype.setCanvasSize = function () {
        if (!cc) {
            return;
        }
        var canvasSize = this.getWinSize();
        if (canvasSize.height / canvasSize.width <= 16 / 9) {
            cc.view.setDesignResolutionSize(750, 1333, new cc.ResolutionPolicy(cc.ContainerStrategy.PROPORTION_TO_FRAME, cc.ContentStrategy.NO_BORDER));
        }
        else {
            if (canvasSize.height / canvasSize.width > 16 / 9 && canvasSize.height / canvasSize.width <= 19.5 / 9) {
                cc.view.setDesignResolutionSize(750, 1624, new cc.ResolutionPolicy(cc.ContainerStrategy.EQUAL_TO_FRAME, cc.ContentStrategy.FIXED_WIDTH));
            }
            else {
                cc.view.setDesignResolutionSize(750, 1624, new cc.ResolutionPolicy(cc.ContainerStrategy.PROPORTION_TO_FRAME, cc.ContentStrategy.NO_BORDER));
            }
        }
    };
    SceneMng.prototype.resizeBindOn = function () {
        var _this = this;
        window.addEventListener("resize", this.debounce(function () {
            _this.resize();
            _this._resizeActive = true;
        }));
    };
    SceneMng.prototype.resizeUpdate = function () {
        if (this._resizeActive) {
            this._resizeDt++;
            if (this._resizeDt <= 3 || this._resizeDt >= 96) {
                this.resize();
            }
            if (this._resizeDt > 100) {
                this._resizeActive = false;
                this._resizeDt = 0;
            }
        }
    };
    SceneMng.prototype.debounce = function (func) {
        var timer;
        return function (event) {
            if (timer)
                clearTimeout(timer);
            timer = setTimeout(func, 300, event);
        };
    };
    SceneMng.prototype.getWinSize = function () {
        return { width: window.innerWidth, height: window.innerHeight };
    };
    Object.defineProperty(SceneMng.prototype, "nowScene", {
        get: function () {
            return this._nowScene;
        },
        set: function (value) {
            this._nowScene = value;
        },
        enumerable: false,
        configurable: true
    });
    return SceneMng;
}());
exports.default = new SceneMng();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxTY2VuZU1uZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUFvRDtBQUNwRCxtREFBOEM7QUFDOUMseURBQW9EO0FBSXBELElBQUssU0FHSjtBQUhELFdBQUssU0FBUztJQUNWLDJDQUFLLENBQUE7SUFDTCx5Q0FBSSxDQUFBO0FBQ1IsQ0FBQyxFQUhJLFNBQVMsS0FBVCxTQUFTLFFBR2I7QUFFRDtJQU1JO1FBSlEsY0FBUyxHQUFjLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDdkMsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUcxQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUdELHVCQUFJLEdBQUo7UUFFSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFeEIsQ0FBQztJQUVELDBCQUFPLEdBQVAsVUFBUSxTQUFpQixFQUFFLFdBQStCO1FBQ3RELEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBR0QsdUJBQUksR0FBSixVQUFLLFNBQWlCO1FBQXRCLGlCQUlDO1FBSEcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQzdCLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDcEMsQ0FBQztJQUVELHNDQUFtQixHQUFuQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxhQUFh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QzFCLENBQUM7YUFFRCxVQUFhLEtBQWdCO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7OztPQUpBO0lBTUwsZUFBQztBQUFELENBL0dBLEFBK0dDLElBQUE7QUFFRCxrQkFBZSxJQUFJLFFBQVEsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJTWVzc2FnZSBmcm9tIFwiLi4vY29udHJvbGxlcnMvdWkvVUlNZXNzYWdlXCI7XHJcbmltcG9ydCBVSUhlbHAgZnJvbSBcIi4uL2NvbnRyb2xsZXJzL3VpL1VJSGVscFwiO1xyXG5pbXBvcnQgVUlMb2FkaW5nIGZyb20gXCIuLi9jb250cm9sbGVycy91aS9VSUxvYWRpbmdcIjtcclxuXHJcbmV4cG9ydCB0eXBlIENvbXBsZXRlZENhbGxiYWNrID0gKGNvbXBsZXRlZENvdW50OiBudW1iZXIsIHRvdGFsQ291bnQ6IG51bWJlciwgaXRlbTogYW55KSA9PiB2b2lkO1xyXG5cclxuZW51bSBTY2VuZU5hbWUge1xyXG4gICAgTG9naW4sXHJcbiAgICBHYW1lXHJcbn1cclxuXHJcbmNsYXNzIFNjZW5lTW5nIHtcclxuXHJcbiAgICBwcml2YXRlIF9ub3dTY2VuZTogU2NlbmVOYW1lID0gU2NlbmVOYW1lLkxvZ2luO1xyXG4gICAgcHJpdmF0ZSBfcmVzaXplQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9yZXNpemVEdDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5yZXNpemVCaW5kT24oKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJlbG9hZChzY2VuZU5hbWU6IHN0cmluZywgb25Db21wbGV0ZWQ/OiBDb21wbGV0ZWRDYWxsYmFjayk6IHZvaWQge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShzY2VuZU5hbWUsIG9uQ29tcGxldGVkKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbG9hZChzY2VuZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzY2VuZU5hbWUsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZXNpemUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnb0dhbWUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2FkKFwibWFpbkdhbWVcIik7XHJcbiAgICAgICAgdGhpcy5fbm93U2NlbmUgPSBTY2VuZU5hbWUuR2FtZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW50U2NlbmVOYW1lKCk6IFNjZW5lTmFtZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25vd1NjZW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldENhbnZhc1NpemUoKTtcclxuICAgICAgICBVSUhlbHAuUmVzaXplKFVJTG9hZGluZyk7XHJcbiAgICAgICAgVUlIZWxwLlJlc2l6ZShVSU1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgc2V0Q2FudmFzU2l6ZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKCFjYykgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgbGV0IGNhbnZhc1NpemUgPSB0aGlzLmdldFdpblNpemUoKTtcclxuXHJcbiAgICAgICAgaWYgKGNhbnZhc1NpemUuaGVpZ2h0IC8gY2FudmFzU2l6ZS53aWR0aCA8PSAxNiAvIDkpIHtcclxuXHJcbiAgICAgICAgICAgIGNjLnZpZXcuc2V0RGVzaWduUmVzb2x1dGlvblNpemUoNzUwLCAxMzMzLCBuZXcgY2MuUmVzb2x1dGlvblBvbGljeShjYy5Db250YWluZXJTdHJhdGVneS5QUk9QT1JUSU9OX1RPX0ZSQU1FLCBjYy5Db250ZW50U3RyYXRlZ3kuTk9fQk9SREVSKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGNhbnZhc1NpemUuaGVpZ2h0IC8gY2FudmFzU2l6ZS53aWR0aCA+IDE2IC8gOSAmJiBjYW52YXNTaXplLmhlaWdodCAvIGNhbnZhc1NpemUud2lkdGggPD0gMTkuNSAvIDkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjYy52aWV3LnNldERlc2lnblJlc29sdXRpb25TaXplKDc1MCwgMTYyNCwgbmV3IGNjLlJlc29sdXRpb25Qb2xpY3koY2MuQ29udGFpbmVyU3RyYXRlZ3kuRVFVQUxfVE9fRlJBTUUsIGNjLkNvbnRlbnRTdHJhdGVneS5GSVhFRF9XSURUSCkpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2Mudmlldy5zZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSg3NTAsIDE2MjQsIG5ldyBjYy5SZXNvbHV0aW9uUG9saWN5KGNjLkNvbnRhaW5lclN0cmF0ZWd5LlBST1BPUlRJT05fVE9fRlJBTUUsIGNjLkNvbnRlbnRTdHJhdGVneS5OT19CT1JERVIpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVzaXplQmluZE9uKCk6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuZGVib3VuY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNpemVBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVzaXplVXBkYXRlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fcmVzaXplQWN0aXZlKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9yZXNpemVEdCsrO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX3Jlc2l6ZUR0IDw9IDMgfHwgdGhpcy5fcmVzaXplRHQgPj0gOTYpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZXNpemVEdCA+IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzaXplQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNpemVEdCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBkZWJvdW5jZShmdW5jOiBGdW5jdGlvbikge1xyXG4gICAgICAgIGxldCB0aW1lcjtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICh0aW1lcikgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmMsIDMwMCwgZXZlbnQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2luU2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4ge3dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHR9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBub3dTY2VuZSgpOiBTY2VuZU5hbWUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ub3dTY2VuZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbm93U2NlbmUodmFsdWU6IFNjZW5lTmFtZSkge1xyXG4gICAgICAgIHRoaXMuX25vd1NjZW5lID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgU2NlbmVNbmcoKTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/EventMng.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ad72P7XjxKhJOAtex6Rmy3', 'EventMng');
// script/manager/EventMng.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new cc.EventTarget();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxFdmVudE1uZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtCQUFlLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgbmV3IGNjLkV2ZW50VGFyZ2V0KCk7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/UIMng.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '095671c/OFGXJQ8UAONFXpD', 'UIMng');
// script/manager/UIMng.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ViewZorder_1 = require("../data/const/ViewZorder");
var UIMng = /** @class */ (function () {
    function UIMng() {
        this.uiList = [];
    }
    UIMng.getInstance = function () {
        if (this.instance == null) {
            this.instance = new UIMng();
        }
        return this.instance;
    };
    UIMng.prototype.openUI = function (uiClass, zOrder, callback, onProgress) {
        var _this = this;
        if (zOrder === void 0) { zOrder = ViewZorder_1.ViewZorder.UI; }
        var args = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            args[_i - 4] = arguments[_i];
        }
        if (this.getUI(uiClass)) {
            return;
        }
        cc.loader.loadRes(uiClass.getUrl(), function (completedCount, totalCount, item) {
            onProgress && onProgress(completedCount, totalCount, item);
        }, function (error, prefab) {
            if (error) {
                return;
            }
            if (_this.getUI(uiClass)) {
                return;
            }
            var uiNode = cc.instantiate(prefab);
            var ui = uiNode.getComponent(uiClass);
            if (!ui) {
                return;
            }
            ui.init(args);
            var uiRoot = cc.director.getScene();
            if (!uiRoot) {
                return;
            }
            uiNode.parent = uiRoot;
            uiNode.zIndex = zOrder;
            _this.uiList.push(ui);
            ui.tag = uiClass;
            callback && callback(ui);
        });
    };
    UIMng.prototype.showUI = function (uiClass, callback) {
        var ui = this.getUI(uiClass);
        if (!ui) {
            console.error("UIMng showUI: ui " + uiClass.getName() + " not exist");
            return;
        }
        if (ui["show"]) {
            ui["show"]();
        }
        else {
            ui.node.active = true;
        }
    };
    UIMng.prototype.hideUI = function (uiClass) {
        var ui = this.getUI(uiClass);
        if (ui["hide"]) {
            ui["hide"]();
        }
        else {
            ui.node.active = false;
        }
    };
    UIMng.prototype.resizeUI = function (uiClass) {
        var ui = this.getUI(uiClass);
        if (ui && ui["resize"]) {
            ui["resize"]();
        }
    };
    UIMng.prototype.closeUI = function (uiClass) {
        for (var i = 0; i < this.uiList.length; ++i) {
            if (this.uiList[i].tag === uiClass) {
                if (cc.isValid(this.uiList[i].node)) {
                    this.uiList[i].node.destroy();
                    this.clearDependsRes(uiClass.getUrl());
                }
                this.uiList.splice(i, 1);
                return;
            }
        }
    };
    UIMng.prototype.getUI = function (uiClass) {
        for (var i = 0; i < this.uiList.length; ++i) {
            if (this.uiList[i].tag === uiClass) {
                return this.uiList[i];
            }
        }
        return null;
    };
    UIMng.prototype.clearDependsRes = function (prefabUrl) {
        var deps = cc.loader.getDependsRecursively(prefabUrl);
        deps.forEach(function (item) {
            if (item.indexOf('common') === -1) {
                cc.loader.release(item);
            }
        });
    };
    return UIMng;
}());
exports.default = UIMng;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxVSU1uZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHVEQUFvRDtBQUNwRDtJQVlJO1FBVFEsV0FBTSxHQUFhLEVBQUUsQ0FBQztJQVc5QixDQUFDO0lBVGEsaUJBQVcsR0FBekI7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztTQUMvQjtRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBTU0sc0JBQU0sR0FBYixVQUFnQyxPQUFtQixFQUFFLE1BQThCLEVBQUUsUUFBbUIsRUFBRSxVQUFxQjtRQUEvSCxpQkF5Q0M7UUF6Q29ELHVCQUFBLEVBQUEsU0FBaUIsdUJBQVUsQ0FBQyxFQUFFO1FBQThDLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsNkJBQWM7O1FBRTNJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNyQixPQUFPO1NBQ1Y7UUFFRCxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsVUFBQyxjQUFzQixFQUFFLFVBQWtCLEVBQUUsSUFBUztZQUN0RixVQUFVLElBQUksVUFBVSxDQUFDLGNBQWMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0QsQ0FBQyxFQUFFLFVBQUMsS0FBSyxFQUFFLE1BQU07WUFFYixJQUFJLEtBQUssRUFBRTtnQkFDUCxPQUFPO2FBQ1Y7WUFFRCxJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3JCLE9BQU87YUFDVjtZQUVELElBQUksTUFBTSxHQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0MsSUFBSSxFQUFFLEdB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RSxDQUFDLEVBQUU7WUFDekMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7Z0JBQ2hDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN6QjtTQUNKO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFFaEIsQ0FBQztJQUVPLCtCQUFlLEdBQXZCLFVBQXdCLFNBQVM7UUFDN0IsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtZQUNkLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDL0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0I7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFHTCxZQUFDO0FBQUQsQ0FoSUEsQUFnSUMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSUJhc2UsIHsgVUlDbGFzcyB9IGZyb20gXCIuLi9jb250cm9sbGVycy91aS9VSUJhc2VcIjtcclxuaW1wb3J0IHtWaWV3Wm9yZGVyfSBmcm9tIFwiLi4vZGF0YS9jb25zdC9WaWV3Wm9yZGVyXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJTW5nIHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogVUlNbmc7XHJcbiAgICBwcml2YXRlIHVpTGlzdDogVUlCYXNlW10gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IFVJTW5nIHtcclxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVUlNbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5VSTxUIGV4dGVuZHMgVUlCYXNlPih1aUNsYXNzOiBVSUNsYXNzPFQ+LCB6T3JkZXI6IG51bWJlciA9IFZpZXdab3JkZXIuVUksIGNhbGxiYWNrPzogRnVuY3Rpb24sIG9uUHJvZ3Jlc3M/OiBGdW5jdGlvbiwgLi4uYXJnczogYW55W10pIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0VUkodWlDbGFzcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXModWlDbGFzcy5nZXRVcmwoKSwgKGNvbXBsZXRlZENvdW50OiBudW1iZXIsIHRvdGFsQ291bnQ6IG51bWJlciwgaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIG9uUHJvZ3Jlc3MgJiYgb25Qcm9ncmVzcyhjb21wbGV0ZWRDb3VudCwgdG90YWxDb3VudCwgaXRlbSk7XHJcbiAgICAgICAgfSwgKGVycm9yLCBwcmVmYWIpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRVSSh1aUNsYXNzKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdWlOb2RlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgbGV0IHVpID0gdWlOb2RlLmdldENvbXBvbmVudCh1aUNsYXNzKSBhcyBVSUJhc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXVpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHVpLmluaXQoYXJncyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdWlSb290ID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdWlSb290KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHVpTm9kZS5wYXJlbnQgPSB1aVJvb3Q7XHJcbiAgICAgICAgICAgIHVpTm9kZS56SW5kZXggPSB6T3JkZXI7XHJcbiAgICAgICAgICAgIHRoaXMudWlMaXN0LnB1c2godWkpO1xyXG4gICAgICAgICAgICB1aS50YWcgPSB1aUNsYXNzO1xyXG5cclxuICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sodWkpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd1VJPFQgZXh0ZW5kcyBVSUJhc2U+KHVpQ2xhc3M6IFVJQ2xhc3M8VD4sIGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuXHJcbiAgICAgICAgbGV0IHVpID0gdGhpcy5nZXRVSSh1aUNsYXNzKTtcclxuXHJcbiAgICAgICAgaWYgKCF1aSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBVSU1uZyBzaG93VUk6IHVpICR7dWlDbGFzcy5nZXROYW1lKCl9IG5vdCBleGlzdGApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodWlbYHNob3dgXSkge1xyXG4gICAgICAgICAgICB1aVtgc2hvd2BdKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdWkubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpZGVVSTxUIGV4dGVuZHMgVUlCYXNlPih1aUNsYXNzOiBVSUNsYXNzPFQ+KSB7XHJcbiAgICAgICAgbGV0IHVpID0gdGhpcy5nZXRVSSh1aUNsYXNzKTtcclxuICAgICAgICBpZiAodWlbYGhpZGVgXSkge1xyXG4gICAgICAgICAgICB1aVtgaGlkZWBdKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdWkubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2l6ZVVJPFQgZXh0ZW5kcyBVSUJhc2U+KHVpQ2xhc3M6IFVJQ2xhc3M8VD4pIHtcclxuICAgICAgICBsZXQgdWkgPSB0aGlzLmdldFVJKHVpQ2xhc3MpO1xyXG4gICAgICAgIGlmICh1aSAmJiB1aVtgcmVzaXplYF0pIHtcclxuICAgICAgICAgICAgdWlbYHJlc2l6ZWBdKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VVSTxUIGV4dGVuZHMgVUlCYXNlPih1aUNsYXNzOiBVSUNsYXNzPFQ+KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVpTGlzdC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51aUxpc3RbaV0udGFnID09PSB1aUNsYXNzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLnVpTGlzdFtpXS5ub2RlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWlMaXN0W2ldLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJEZXBlbmRzUmVzKHVpQ2xhc3MuZ2V0VXJsKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy51aUxpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRVSTxUIGV4dGVuZHMgVUlCYXNlPih1aUNsYXNzOiBVSUNsYXNzPFQ+KTogVUlCYXNlIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVpTGlzdC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51aUxpc3RbaV0udGFnID09PSB1aUNsYXNzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51aUxpc3RbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsZWFyRGVwZW5kc1JlcyhwcmVmYWJVcmwpIHtcclxuICAgICAgICBsZXQgZGVwcyA9IGNjLmxvYWRlci5nZXREZXBlbmRzUmVjdXJzaXZlbHkocHJlZmFiVXJsKTtcclxuICAgICAgICBkZXBzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uaW5kZXhPZignY29tbW9uJykgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIucmVsZWFzZShpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/LangMng.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f55cb6l4/tA2ohzJpkFRfG6', 'LangMng');
// script/manager/LangMng.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameCenter_1 = require("../data/GameCenter");
var LangMng = /** @class */ (function () {
    function LangMng() {
        this._data = null;
    }
    LangMng.prototype.init = function () {
        var langMode = GameCenter_1.default.system.language;
        this._data = require(langMode);
    };
    LangMng.prototype.getTxt = function (code) {
        if (!this._data)
            return;
        if (code == null)
            return code;
        return this._data[code] == null ? code : this._data[code];
    };
    return LangMng;
}());
exports.default = new LangMng();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxMYW5nTW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTRDO0FBRTVDO0lBQUE7UUFFWSxVQUFLLEdBQUcsSUFBSSxDQUFDO0lBZXpCLENBQUM7SUFiRyxzQkFBSSxHQUFKO1FBRUksSUFBSSxRQUFRLEdBQUcsb0JBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRW5DLENBQUM7SUFFRCx3QkFBTSxHQUFOLFVBQU8sSUFBWTtRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87UUFDeEIsSUFBSSxJQUFJLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQzlCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUwsY0FBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFFRCxrQkFBZSxJQUFJLE9BQU8sRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVDZW50ZXIgZnJvbSBcIi4uL2RhdGEvR2FtZUNlbnRlclwiO1xyXG5cclxuY2xhc3MgTGFuZ01uZyB7XHJcblxyXG4gICAgcHJpdmF0ZSBfZGF0YSA9IG51bGw7XHJcblxyXG4gICAgaW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IGxhbmdNb2RlID0gR2FtZUNlbnRlci5zeXN0ZW0ubGFuZ3VhZ2U7XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IHJlcXVpcmUobGFuZ01vZGUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRUeHQoY29kZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2RhdGEpIHJldHVybjtcclxuICAgICAgICBpZiAoY29kZSA9PSBudWxsKSByZXR1cm4gY29kZTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVtjb2RlXSA9PSBudWxsID8gY29kZSA6IHRoaXMuX2RhdGFbY29kZV07XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgTGFuZ01uZygpOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/mine/MineCollect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ccc99o6jJ9MNa1E8Z6mswH1', 'MineCollect');
// script/controllers/mine/MineCollect.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var EventMng_1 = require("../../manager/EventMng");
var LangMng_1 = require("../../manager/LangMng");
var UIBase_1 = require("../ui/UIBase");
var ActionTransition_1 = require("../../common/ActionTransition");
var EventConst_1 = require("../../data/const/EventConst");
var DataMineCollect_1 = require("../../data/scene/DataMineCollect");
var CollectGeneral_1 = require("./collect/CollectGeneral");
var ccclass = cc._decorator.ccclass;
var MineCollect = /** @class */ (function (_super) {
    __extends(MineCollect, _super);
    function MineCollect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pages = [];
        _this.currentPageIndex = 0;
        return _this;
    }
    MineCollect.prototype.onUILoad = function () {
        this.ui = this.node.addComponent(DataMineCollect_1.default);
        this.collectGeneral = this.ui.node_con_1.addComponent(CollectGeneral_1.default);
        this.viewInit();
    };
    MineCollect.prototype.onShow = function () {
        this.onRegisterEvent(this.ui.btn_home, this.onBtnHomeClick, this);
        this.onRegisterEvent(this.ui.btn_vip, this.onBtnVipClick, this);
    };
    MineCollect.prototype.onHide = function () {
        this.unRegisterEvent(this.ui.btn_home, this.onBtnHomeClick, this);
        this.unRegisterEvent(this.ui.btn_vip, this.onBtnVipClick, this);
    };
    MineCollect.prototype.viewInit = function () {
        this.pages.push(this.collectGeneral);
        this.node.active = false;
    };
    MineCollect.prototype.show = function (aniState) {
        var _this = this;
        if (aniState === void 0) { aniState = true; }
        this.pages[this.currentPageIndex].viewReset();
        ActionTransition_1.ActionTransition.pageFadeIn(this.node, aniState, function () {
            _this.pages[_this.currentPageIndex].mineAniPlay();
        });
    };
    MineCollect.prototype.hide = function (aniState) {
        if (aniState === void 0) { aniState = true; }
        ActionTransition_1.ActionTransition.pageFadeOut(this.node, aniState);
    };
    MineCollect.prototype.onBtnHomeClick = function () {
        EventMng_1.default.emit(EventConst_1.MainEvent.ENTER_MINE_MNG);
    };
    MineCollect.prototype.onBtnVipClick = function () {
        EventMng_1.default.emit(EventConst_1.MainEvent.MESSAGE_SHOW, {
            type: 2,
            content: LangMng_1.default.getTxt("S_9001"),
            autoClose: true,
        });
    };
    MineCollect = __decorate([
        ccclass
    ], MineCollect);
    return MineCollect;
}(UIBase_1.default));
exports.default = MineCollect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcbWluZVxcTWluZUNvbGxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLGlEQUE0QztBQUM1Qyx1Q0FBa0M7QUFDbEMsa0VBQWlFO0FBQ2pFLDBEQUF3RDtBQUN4RCxvRUFBK0Q7QUFDL0QsMkRBQXNEO0FBRTlDLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBR2xDO0lBQXlDLCtCQUFNO0lBQS9DO1FBQUEscUVBbURDO1FBL0NHLFdBQUssR0FBVSxFQUFFLENBQUM7UUFDbEIsc0JBQWdCLEdBQVcsQ0FBQyxDQUFDOztJQThDakMsQ0FBQztJQTVDRyw4QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyx5QkFBZSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsd0JBQWMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELDRCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFDRCw4QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsMEJBQUksR0FBSixVQUFLLFFBQXdCO1FBQTdCLGlCQUtDO1FBTEkseUJBQUEsRUFBQSxlQUF3QjtRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzlDLG1DQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRTtZQUM3QyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDBCQUFJLEdBQUosVUFBSyxRQUF3QjtRQUF4Qix5QkFBQSxFQUFBLGVBQXdCO1FBQ3pCLG1DQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFHRCxvQ0FBYyxHQUFkO1FBQ0ksa0JBQVEsQ0FBQyxJQUFJLENBQUMsc0JBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsbUNBQWEsR0FBYjtRQUNJLGtCQUFRLENBQUMsSUFBSSxDQUFDLHNCQUFTLENBQUMsWUFBWSxFQUFFO1lBQ2xDLElBQUksRUFBRSxDQUFDO1lBQ1AsT0FBTyxFQUFFLGlCQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNqQyxTQUFTLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBakRnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBbUQvQjtJQUFELGtCQUFDO0NBbkRELEFBbURDLENBbkR3QyxnQkFBTSxHQW1EOUM7a0JBbkRvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50TW5nIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0V2ZW50TW5nXCI7XHJcbmltcG9ydCBMYW5nTW5nIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0xhbmdNbmdcIjtcclxuaW1wb3J0IFVJQmFzZSBmcm9tIFwiLi4vdWkvVUlCYXNlXCI7XHJcbmltcG9ydCB7IEFjdGlvblRyYW5zaXRpb24gfSBmcm9tIFwiLi4vLi4vY29tbW9uL0FjdGlvblRyYW5zaXRpb25cIjtcclxuaW1wb3J0IHsgTWFpbkV2ZW50IH0gZnJvbSBcIi4uLy4uL2RhdGEvY29uc3QvRXZlbnRDb25zdFwiO1xyXG5pbXBvcnQgRGF0YU1pbmVDb2xsZWN0IGZyb20gXCIuLi8uLi9kYXRhL3NjZW5lL0RhdGFNaW5lQ29sbGVjdFwiO1xyXG5pbXBvcnQgQ29sbGVjdEdlbmVyYWwgZnJvbSBcIi4vY29sbGVjdC9Db2xsZWN0R2VuZXJhbFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWluZUNvbGxlY3QgZXh0ZW5kcyBVSUJhc2Uge1xyXG5cclxuICAgIHVpOiBEYXRhTWluZUNvbGxlY3Q7XHJcbiAgICBjb2xsZWN0R2VuZXJhbDogQ29sbGVjdEdlbmVyYWw7XHJcbiAgICBwYWdlczogYW55W10gPSBbXTtcclxuICAgIGN1cnJlbnRQYWdlSW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgb25VSUxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51aSA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoRGF0YU1pbmVDb2xsZWN0KTtcclxuICAgICAgICB0aGlzLmNvbGxlY3RHZW5lcmFsID0gdGhpcy51aS5ub2RlX2Nvbl8xLmFkZENvbXBvbmVudChDb2xsZWN0R2VuZXJhbCk7XHJcbiAgICAgICAgdGhpcy52aWV3SW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2hvdygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uUmVnaXN0ZXJFdmVudCh0aGlzLnVpLmJ0bl9ob21lLCB0aGlzLm9uQnRuSG9tZUNsaWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm9uUmVnaXN0ZXJFdmVudCh0aGlzLnVpLmJ0bl92aXAsIHRoaXMub25CdG5WaXBDbGljaywgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25IaWRlKCkge1xyXG4gICAgICAgIHRoaXMudW5SZWdpc3RlckV2ZW50KHRoaXMudWkuYnRuX2hvbWUsIHRoaXMub25CdG5Ib21lQ2xpY2ssIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudW5SZWdpc3RlckV2ZW50KHRoaXMudWkuYnRuX3ZpcCwgdGhpcy5vbkJ0blZpcENsaWNrLCB0aGlzKTtcclxuICAgIH1cclxuICAgIHZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFnZXMucHVzaCh0aGlzLmNvbGxlY3RHZW5lcmFsKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdyhhbmlTdGF0ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhZ2VzW3RoaXMuY3VycmVudFBhZ2VJbmRleF0udmlld1Jlc2V0KCk7XHJcbiAgICAgICAgQWN0aW9uVHJhbnNpdGlvbi5wYWdlRmFkZUluKHRoaXMubm9kZSwgYW5pU3RhdGUsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlSW5kZXhdLm1pbmVBbmlQbGF5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZShhbmlTdGF0ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICBBY3Rpb25UcmFuc2l0aW9uLnBhZ2VGYWRlT3V0KHRoaXMubm9kZSwgYW5pU3RhdGUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkJ0bkhvbWVDbGljaygpOiB2b2lkIHtcclxuICAgICAgICBFdmVudE1uZy5lbWl0KE1haW5FdmVudC5FTlRFUl9NSU5FX01ORyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5WaXBDbGljaygpOiB2b2lkIHtcclxuICAgICAgICBFdmVudE1uZy5lbWl0KE1haW5FdmVudC5NRVNTQUdFX1NIT1csIHtcclxuICAgICAgICAgICAgdHlwZTogMixcclxuICAgICAgICAgICAgY29udGVudDogTGFuZ01uZy5nZXRUeHQoXCJTXzkwMDFcIiksXHJcbiAgICAgICAgICAgIGF1dG9DbG9zZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/mine/MineMng.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '45f045uJgJKmrnqXFHFo6tj', 'MineMng');
// script/controllers/mine/MineMng.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var EventMng_1 = require("../../manager/EventMng");
var LangMng_1 = require("../../manager/LangMng");
var ActionTransition_1 = require("../../common/ActionTransition");
var EventConst_1 = require("../../data/const/EventConst");
var UIBase_1 = require("../ui/UIBase");
var DataMineMng_1 = require("../../data/scene/DataMineMng");
var MineMngNav_1 = require("./MineMngNav");
var MineMngCon_1 = require("./MineMngCon");
var ccclass = cc._decorator.ccclass;
var MineMng = /** @class */ (function (_super) {
    __extends(MineMng, _super);
    function MineMng() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui = null;
        _this._currentIndex = 0;
        return _this;
    }
    MineMng.prototype.onUILoad = function () {
        this.ui = this.node.addComponent(DataMineMng_1.default);
        this.tabNav = this.ui.tab_nav_holder.addComponent(MineMngNav_1.default);
        this.con = this.ui.con_holder.addComponent(MineMngCon_1.default);
        this.viewInit();
    };
    MineMng.prototype.onShow = function () {
        this.initEvent(EventConst_1.MainEvent.MINE_MNG_PAGE_SWITCH, this.onPageSwitch);
    };
    MineMng.prototype.viewInit = function () {
        var mineListState = this.con.pages[0].slider.getSliderState();
        if (mineListState == 0) {
            this.tabNav.navBtns[2].node.active = false;
        }
    };
    MineMng.prototype.show = function (aniState) {
        if (aniState === void 0) { aniState = true; }
        ActionTransition_1.ActionTransition.pageFadeIn(this.node, aniState);
    };
    MineMng.prototype.hide = function (aniState) {
        if (aniState === void 0) { aniState = true; }
        ActionTransition_1.ActionTransition.pageFadeOut(this.node, aniState);
    };
    MineMng.prototype.onPageSwitch = function (id) {
        if (this._currentIndex == id) {
            return;
        }
        var hasPage = this.getHasPage(id);
        if (!hasPage) {
            EventMng_1.default.emit(EventConst_1.MainEvent.MESSAGE_SHOW, {
                type: 2,
                content: LangMng_1.default.getTxt("S_9001"),
                autoClose: true,
            });
            return;
        }
        this.currentIndex = id;
        this.tabNav.btnSwitch(this.currentIndex);
        this.con.pageSwitch(this.currentIndex);
    };
    MineMng.prototype.getHasPage = function (id) {
        return !!this.con.pages[id];
    };
    Object.defineProperty(MineMng.prototype, "currentIndex", {
        get: function () {
            return this._currentIndex;
        },
        set: function (value) {
            this._currentIndex = value;
        },
        enumerable: false,
        configurable: true
    });
    MineMng = __decorate([
        ccclass
    ], MineMng);
    return MineMng;
}(UIBase_1.default));
exports.default = MineMng;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcbWluZVxcTWluZU1uZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsaURBQTRDO0FBQzVDLGtFQUFpRTtBQUNqRSwwREFBd0Q7QUFDeEQsdUNBQWtDO0FBQ2xDLDREQUF1RDtBQUN2RCwyQ0FBc0M7QUFDdEMsMkNBQXNDO0FBRTlCLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBR2xDO0lBQXFDLDJCQUFNO0lBQTNDO1FBQUEscUVBd0VDO1FBdEVHLFFBQUUsR0FBZ0IsSUFBSSxDQUFDO1FBSWYsbUJBQWEsR0FBVyxDQUFDLENBQUM7O0lBa0V0QyxDQUFDO0lBaEVHLDBCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxvQkFBVSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsb0JBQVUsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsd0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQVMsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELDBCQUFRLEdBQVI7UUFDSSxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDOUQsSUFBSSxhQUFhLElBQUksQ0FBQyxFQUFHO1lBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQzlDO0lBQ0wsQ0FBQztJQUdELHNCQUFJLEdBQUosVUFBSyxRQUF3QjtRQUF4Qix5QkFBQSxFQUFBLGVBQXdCO1FBQ3pCLG1DQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFHRCxzQkFBSSxHQUFKLFVBQUssUUFBd0I7UUFBeEIseUJBQUEsRUFBQSxlQUF3QjtRQUN6QixtQ0FBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBR0QsOEJBQVksR0FBWixVQUFhLEVBQVU7UUFHbkIsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLEVBQUUsRUFBRTtZQUMxQixPQUFPO1NBQ1Y7UUFFRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDVixrQkFBUSxDQUFDLElBQUksQ0FBQyxzQkFBUyxDQUFDLFlBQVksRUFBRTtnQkFDbEMsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsT0FBTyxFQUFFLGlCQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFDakMsU0FBUyxFQUFFLElBQUk7YUFDbEIsQ0FBQyxDQUFDO1lBQ0gsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUUzQyxDQUFDO0lBRUQsNEJBQVUsR0FBVixVQUFXLEVBQUU7UUFDVCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsc0JBQUksaUNBQVk7YUFJaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQzthQU5ELFVBQWlCLEtBQWE7WUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFsRWdCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0F3RTNCO0lBQUQsY0FBQztDQXhFRCxBQXdFQyxDQXhFb0MsZ0JBQU0sR0F3RTFDO2tCQXhFb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudE1uZyBmcm9tIFwiLi4vLi4vbWFuYWdlci9FdmVudE1uZ1wiO1xyXG5pbXBvcnQgTGFuZ01uZyBmcm9tIFwiLi4vLi4vbWFuYWdlci9MYW5nTW5nXCI7XHJcbmltcG9ydCB7IEFjdGlvblRyYW5zaXRpb24gfSBmcm9tIFwiLi4vLi4vY29tbW9uL0FjdGlvblRyYW5zaXRpb25cIjtcclxuaW1wb3J0IHsgTWFpbkV2ZW50IH0gZnJvbSBcIi4uLy4uL2RhdGEvY29uc3QvRXZlbnRDb25zdFwiO1xyXG5pbXBvcnQgVUlCYXNlIGZyb20gXCIuLi91aS9VSUJhc2VcIjtcclxuaW1wb3J0IERhdGFNaW5lTW5nIGZyb20gXCIuLi8uLi9kYXRhL3NjZW5lL0RhdGFNaW5lTW5nXCI7XHJcbmltcG9ydCBNaW5lTW5nTmF2IGZyb20gXCIuL01pbmVNbmdOYXZcIjtcclxuaW1wb3J0IE1pbmVNbmdDb24gZnJvbSBcIi4vTWluZU1uZ0NvblwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWluZU1uZyBleHRlbmRzIFVJQmFzZSB7XHJcblxyXG4gICAgdWk6IERhdGFNaW5lTW5nID0gbnVsbDtcclxuICAgIHRhYk5hdjogTWluZU1uZ05hdjtcclxuICAgIGNvbjogTWluZU1uZ0NvbjtcclxuXHJcbiAgICBwcml2YXRlIF9jdXJyZW50SW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgb25VSUxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51aSA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoRGF0YU1pbmVNbmcpO1xyXG4gICAgICAgIHRoaXMudGFiTmF2ID0gdGhpcy51aS50YWJfbmF2X2hvbGRlci5hZGRDb21wb25lbnQoTWluZU1uZ05hdik7XHJcbiAgICAgICAgdGhpcy5jb24gPSB0aGlzLnVpLmNvbl9ob2xkZXIuYWRkQ29tcG9uZW50KE1pbmVNbmdDb24pO1xyXG4gICAgICAgIHRoaXMudmlld0luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoTWFpbkV2ZW50Lk1JTkVfTU5HX1BBR0VfU1dJVENILCB0aGlzLm9uUGFnZVN3aXRjaCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1pbmVMaXN0U3RhdGUgPSB0aGlzLmNvbi5wYWdlc1swXS5zbGlkZXIuZ2V0U2xpZGVyU3RhdGUoKTtcclxuICAgICAgICBpZiAobWluZUxpc3RTdGF0ZSA9PSAwICkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYk5hdi5uYXZCdG5zWzJdLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzaG93KGFuaVN0YXRlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgICAgIEFjdGlvblRyYW5zaXRpb24ucGFnZUZhZGVJbih0aGlzLm5vZGUsIGFuaVN0YXRlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaGlkZShhbmlTdGF0ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICBBY3Rpb25UcmFuc2l0aW9uLnBhZ2VGYWRlT3V0KHRoaXMubm9kZSwgYW5pU3RhdGUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvblBhZ2VTd2l0Y2goaWQ6IG51bWJlcik6IHZvaWQge1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRJbmRleCA9PSBpZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGFzUGFnZSA9IHRoaXMuZ2V0SGFzUGFnZShpZCk7XHJcbiAgICAgICAgaWYgKCFoYXNQYWdlKSB7XHJcbiAgICAgICAgICAgIEV2ZW50TW5nLmVtaXQoTWFpbkV2ZW50Lk1FU1NBR0VfU0hPVywge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogMixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IExhbmdNbmcuZ2V0VHh0KFwiU185MDAxXCIpLFxyXG4gICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBpZDtcclxuICAgICAgICB0aGlzLnRhYk5hdi5idG5Td2l0Y2godGhpcy5jdXJyZW50SW5kZXgpO1xyXG4gICAgICAgIHRoaXMuY29uLnBhZ2VTd2l0Y2godGhpcy5jdXJyZW50SW5kZXgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRIYXNQYWdlKGlkKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5jb24ucGFnZXNbaWRdO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBjdXJyZW50SW5kZXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRJbmRleCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjdXJyZW50SW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudEluZGV4O1xyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/scene/DataUIMessage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '951fe/2bjRGuJYzEde9QRhM', 'DataUIMessage');
// script/data/scene/DataUIMessage.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var ccclass = cc._decorator.ccclass;
var DataUIMessage = /** @class */ (function (_super) {
    __extends(DataUIMessage, _super);
    function DataUIMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataUIMessage.prototype.onLoad = function () {
        this.node_main = this.node.getChildByName("main");
        this.node_backBg = this.node.getChildByName("bg");
        this.label_msg_txt = this.node_main.getChildByName("txt").getComponent(cc.Label);
        this.btn_main = this.node_main.getChildByName("btn_main");
        this.btn_cancel = this.btn_main.getChildByName("btn_cancel");
        this.btn_confirm = this.btn_main.getChildByName("btn_confirm");
        this.label_cancel = this.btn_cancel.getChildByName("txt").getComponent(cc.Label);
        this.label_confirm = this.btn_confirm.getChildByName("txt").getComponent(cc.Label);
    };
    DataUIMessage = __decorate([
        ccclass
    ], DataUIMessage);
    return DataUIMessage;
}(cc.Component));
exports.default = DataUIMessage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxzY2VuZVxcRGF0YVVJTWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBUSxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUdsQztJQUEyQyxpQ0FBWTtJQUF2RDs7SUF1QkEsQ0FBQztJQVhHLDhCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQXJCZ0IsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQXVCakM7SUFBRCxvQkFBQztDQXZCRCxBQXVCQyxDQXZCMEMsRUFBRSxDQUFDLFNBQVMsR0F1QnREO2tCQXZCb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFVSU1lc3NhZ2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG5vZGVfbWFpbjogY2MuTm9kZTtcclxuICAgIG5vZGVfYmFja0JnOiBjYy5Ob2RlO1xyXG5cclxuICAgIGxhYmVsX21zZ190eHQ6IGNjLkxhYmVsO1xyXG4gICAgYnRuX21haW46IGNjLk5vZGU7XHJcbiAgICBidG5fY29uZmlybTogY2MuTm9kZTtcclxuICAgIGxhYmVsX2NvbmZpcm06IGNjLkxhYmVsO1xyXG4gICAgYnRuX2NhbmNlbDogY2MuTm9kZTtcclxuICAgIGxhYmVsX2NhbmNlbDogY2MuTGFiZWw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZV9tYWluID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibWFpblwiKTtcclxuICAgICAgICB0aGlzLm5vZGVfYmFja0JnID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIik7XHJcbiAgICAgICAgdGhpcy5sYWJlbF9tc2dfdHh0ID0gdGhpcy5ub2RlX21haW4uZ2V0Q2hpbGRCeU5hbWUoXCJ0eHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLmJ0bl9tYWluID0gdGhpcy5ub2RlX21haW4uZ2V0Q2hpbGRCeU5hbWUoXCJidG5fbWFpblwiKTtcclxuICAgICAgICB0aGlzLmJ0bl9jYW5jZWwgPSB0aGlzLmJ0bl9tYWluLmdldENoaWxkQnlOYW1lKFwiYnRuX2NhbmNlbFwiKTtcclxuICAgICAgICB0aGlzLmJ0bl9jb25maXJtID0gdGhpcy5idG5fbWFpbi5nZXRDaGlsZEJ5TmFtZShcImJ0bl9jb25maXJtXCIpO1xyXG4gICAgICAgIHRoaXMubGFiZWxfY2FuY2VsID0gdGhpcy5idG5fY2FuY2VsLmdldENoaWxkQnlOYW1lKFwidHh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5sYWJlbF9jb25maXJtID0gdGhpcy5idG5fY29uZmlybS5nZXRDaGlsZEJ5TmFtZShcInR4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/scene/DataMinePetSelect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f0a29L217FAM4rQ+9QnVoK+', 'DataMinePetSelect');
// script/data/scene/DataMinePetSelect.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var ccclass = cc._decorator.ccclass;
var DataMinePetSelect = /** @class */ (function (_super) {
    __extends(DataMinePetSelect, _super);
    function DataMinePetSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataMinePetSelect.prototype.onLoad = function () {
        this.node_item_slider_holder = this.node.getChildByName("item_slider_holder");
        this.node_item_main = this.node_item_slider_holder.getChildByName("item_main");
        this.node_arrow_holder = this.node.getChildByName("arrow_holder");
        this.node_intro_holder = this.node.getChildByName("intro_holder");
        this.node_intro_txt_group = this.node_intro_holder.getChildByName("txt_group");
        this.label_intro_title = this.node_intro_txt_group.getChildByName("title").getComponent(cc.Label);
        this.label_intro_con = this.node_intro_txt_group.getChildByName("con").getComponent(cc.Label);
        this.btn_slider_arrow_left = this.node_arrow_holder.getChildByName("arrow_left");
        this.btn_slider_arrow_right = this.node_arrow_holder.getChildByName("arrow_right");
        this.btn_go = this.node.getChildByName("btn_go");
        this.node_btn_go_normal = this.btn_go.getChildByName("normal");
        this.node_btn_go_active = this.btn_go.getChildByName("active");
        this.page_view = this.node_item_slider_holder.getComponent(cc.PageView);
        this.layout = this.node_item_main.getComponent(cc.Layout);
        this.node_choose_tip_main = this.node.getChildByName("choose_tip_main");
        this.node_choose_tip_bg = this.node_choose_tip_main.getChildByName("bg");
        this.node_choose_img_mask = this.node_choose_tip_main.getChildByName("mask");
        this.node_choose_tip_img = this.node_choose_img_mask.getChildByName("img");
        this.sprite_choose_tip_img = this.node_choose_tip_img.getComponent(cc.Sprite);
        this.node_choose_state = this.node_choose_tip_main.getChildByName("btn_state");
        this.label_choose_tip_title = this.node_choose_tip_main.getChildByName("title").getComponent(cc.Label);
    };
    DataMinePetSelect = __decorate([
        ccclass
    ], DataMinePetSelect);
    return DataMinePetSelect;
}(cc.Component));
exports.default = DataMinePetSelect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxzY2VuZVxcRGF0YU1pbmVQZXRTZWxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVEsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBbUI7QUFHbEM7SUFBK0MscUNBQVk7SUFBM0Q7O0lBNkRBLENBQUM7SUEvQkcsa0NBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFbEUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEcsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFOUYsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRS9ELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFMUQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFM0csQ0FBQztJQTNEZ0IsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0E2RHJDO0lBQUQsd0JBQUM7Q0E3REQsQUE2REMsQ0E3RDhDLEVBQUUsQ0FBQyxTQUFTLEdBNkQxRDtrQkE3RG9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFNaW5lUGV0U2VsZWN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBub2RlX2Nob29zZV90aXBfbWFpbjogIGNjLk5vZGU7XHJcbiAgICBub2RlX2Nob29zZV90aXBfYmc6IGNjLk5vZGU7XHJcbiAgICBub2RlX2Nob29zZV9pbWdfbWFzazogY2MuTm9kZTtcclxuICAgIG5vZGVfY2hvb3NlX3RpcF9pbWc6IGNjLk5vZGU7XHJcbiAgICBzcHJpdGVfY2hvb3NlX3RpcF9pbWc6IGNjLlNwcml0ZTtcclxuICAgIG5vZGVfY2hvb3NlX3N0YXRlOiBjYy5Ob2RlO1xyXG4gICAgbGFiZWxfY2hvb3NlX3RpcF90aXRsZTogY2MuTGFiZWw7XHJcblxyXG4gICAgbm9kZV9pdGVtX3NsaWRlcl9ob2xkZXI6IGNjLk5vZGU7XHJcbiAgICBub2RlX2l0ZW1fbWFpbjogY2MuTm9kZTtcclxuICAgIG5vZGVfYXJyb3dfaG9sZGVyOiBjYy5Ob2RlO1xyXG4gICAgbm9kZV9pbnRyb19ob2xkZXI6IGNjLk5vZGU7XHJcbiAgICBub2RlX2ludHJvX3R4dF9ncm91cDogY2MuTm9kZTtcclxuXHJcbiAgICBsYWJlbF9pbnRyb190aXRsZTogY2MuTGFiZWw7XHJcbiAgICBsYWJlbF9pbnRyb19jb246IGNjLkxhYmVsO1xyXG5cclxuICAgIGJ0bl9zbGlkZXJfYXJyb3dfbGVmdDogY2MuTm9kZTtcclxuICAgIGJ0bl9zbGlkZXJfYXJyb3dfcmlnaHQ6IGNjLk5vZGU7XHJcbiAgICBidG5fZ286IGNjLk5vZGU7XHJcblxyXG4gICAgbm9kZV9idG5fZ29fbm9ybWFsOiBjYy5Ob2RlO1xyXG4gICAgbm9kZV9idG5fZ29fYWN0aXZlOiBjYy5Ob2RlO1xyXG5cclxuICAgIHBhZ2VfdmlldzogY2MuUGFnZVZpZXc7XHJcbiAgICBsYXlvdXQ6IGNjLkxheW91dDtcclxuXHJcblxyXG4gICAgb25Mb2FkKCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVfaXRlbV9zbGlkZXJfaG9sZGVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaXRlbV9zbGlkZXJfaG9sZGVyXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZV9pdGVtX21haW4gPSB0aGlzLm5vZGVfaXRlbV9zbGlkZXJfaG9sZGVyLmdldENoaWxkQnlOYW1lKFwiaXRlbV9tYWluXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZV9hcnJvd19ob2xkZXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd19ob2xkZXJcIik7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZV9pbnRyb19ob2xkZXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbnRyb19ob2xkZXJcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlX2ludHJvX3R4dF9ncm91cCA9IHRoaXMubm9kZV9pbnRyb19ob2xkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ0eHRfZ3JvdXBcIik7XHJcbiAgICAgICAgdGhpcy5sYWJlbF9pbnRyb190aXRsZSA9IHRoaXMubm9kZV9pbnRyb190eHRfZ3JvdXAuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMubGFiZWxfaW50cm9fY29uID0gdGhpcy5ub2RlX2ludHJvX3R4dF9ncm91cC5nZXRDaGlsZEJ5TmFtZShcImNvblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuICAgICAgICB0aGlzLmJ0bl9zbGlkZXJfYXJyb3dfbGVmdCA9IHRoaXMubm9kZV9hcnJvd19ob2xkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd19sZWZ0XCIpO1xyXG4gICAgICAgIHRoaXMuYnRuX3NsaWRlcl9hcnJvd19yaWdodCA9IHRoaXMubm9kZV9hcnJvd19ob2xkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd19yaWdodFwiKTtcclxuICAgICAgICB0aGlzLmJ0bl9nbyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bl9nb1wiKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlX2J0bl9nb19ub3JtYWwgPSB0aGlzLmJ0bl9nby5nZXRDaGlsZEJ5TmFtZShcIm5vcm1hbFwiKTtcclxuICAgICAgICB0aGlzLm5vZGVfYnRuX2dvX2FjdGl2ZSA9IHRoaXMuYnRuX2dvLmdldENoaWxkQnlOYW1lKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnBhZ2VfdmlldyA9IHRoaXMubm9kZV9pdGVtX3NsaWRlcl9ob2xkZXIuZ2V0Q29tcG9uZW50KGNjLlBhZ2VWaWV3KTtcclxuICAgICAgICB0aGlzLmxheW91dCA9IHRoaXMubm9kZV9pdGVtX21haW4uZ2V0Q29tcG9uZW50KGNjLkxheW91dCk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZV9jaG9vc2VfdGlwX21haW4gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjaG9vc2VfdGlwX21haW5cIik7XHJcbiAgICAgICAgdGhpcy5ub2RlX2Nob29zZV90aXBfYmcgPSB0aGlzLm5vZGVfY2hvb3NlX3RpcF9tYWluLmdldENoaWxkQnlOYW1lKFwiYmdcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlX2Nob29zZV9pbWdfbWFzayA9IHRoaXMubm9kZV9jaG9vc2VfdGlwX21haW4uZ2V0Q2hpbGRCeU5hbWUoXCJtYXNrXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZV9jaG9vc2VfdGlwX2ltZyA9IHRoaXMubm9kZV9jaG9vc2VfaW1nX21hc2suZ2V0Q2hpbGRCeU5hbWUoXCJpbWdcIik7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVfY2hvb3NlX3RpcF9pbWcgPSB0aGlzLm5vZGVfY2hvb3NlX3RpcF9pbWcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlX2Nob29zZV9zdGF0ZSA9IHRoaXMubm9kZV9jaG9vc2VfdGlwX21haW4uZ2V0Q2hpbGRCeU5hbWUoXCJidG5fc3RhdGVcIik7XHJcbiAgICAgICAgdGhpcy5sYWJlbF9jaG9vc2VfdGlwX3RpdGxlID0gdGhpcy5ub2RlX2Nob29zZV90aXBfbWFpbi5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/Assets.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '340e97coRhIRIju4Wj756U6', 'Assets');
// script/data/Assets.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Assets = /** @class */ (function () {
    function Assets() {
        this.langAssetUrl = "images/txt/";
        this.gameAssetUrl = "images/";
        this.prefabAssetUrl = "prefab/";
        this.spineAssetUrl = "spine/";
        this._gameAssetsName = [
            "pet/pet_1",
            "pet/pet_2",
            "game/decoration"
        ];
        this._gameAssetsPrefabName = [
            "cube_item",
            "coin_gold_prefab",
            "coin_sliver_prefab",
        ];
        this._gameAssetsSpineName = [
            "select/select",
            "map/map_gpg1",
            "mine/pet01",
            "partner/mining1",
            "coin/coin",
        ];
    }
    Assets.prototype.getGameAssetsPrefabUrls = function () {
        var arr = [];
        for (var i = 0; i < this._gameAssetsPrefabName.length; i++) {
            arr.push(this.prefabAssetUrl + this._gameAssetsPrefabName[i]);
        }
        return arr;
    };
    Assets.prototype.getPrefabAssetUrl = function () {
        return this.prefabAssetUrl;
    };
    Assets.prototype.getGameAssetsUrls = function () {
        var arr = [];
        for (var i = 0; i < this._gameAssetsName.length; i++) {
            arr.push(this.getGameAssetUrl() + this._gameAssetsName[i]);
        }
        return arr;
    };
    Assets.prototype.getGameAssetUrl = function () {
        return this.gameAssetUrl;
    };
    Assets.prototype.getGameSpineUrls = function () {
        var arr = [];
        for (var i = 0; i < this._gameAssetsSpineName.length; i++) {
            arr.push(this.getGameSpineUrl() + this._gameAssetsSpineName[i]);
        }
        return arr;
    };
    Assets.prototype.getGameSpineUrl = function () {
        return this.spineAssetUrl;
    };
    return Assets;
}());
exports.default = new Assets();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxBc3NldHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO1FBSUksaUJBQVksR0FBVyxhQUFhLENBQUM7UUFDckMsaUJBQVksR0FBVyxTQUFTLENBQUM7UUFDakMsbUJBQWMsR0FBVyxTQUFTLENBQUM7UUFDbkMsa0JBQWEsR0FBVyxRQUFRLENBQUM7UUFFekIsb0JBQWUsR0FBYTtZQUNoQyxXQUFXO1lBQ1gsV0FBVztZQUNYLGlCQUFpQjtTQUNwQixDQUFDO1FBRU0sMEJBQXFCLEdBQWE7WUFDdEMsV0FBVztZQUNYLGtCQUFrQjtZQUNsQixvQkFBb0I7U0FDdkIsQ0FBQztRQUVNLHlCQUFvQixHQUFhO1lBRXJDLGVBQWU7WUFFZixjQUFjO1lBRWQsWUFBWTtZQUVaLGlCQUFpQjtZQUVqQixXQUFXO1NBRWQsQ0FBQztJQXVDTixDQUFDO0lBcENHLHdDQUF1QixHQUF2QjtRQUNJLElBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqRTtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVELGtDQUFpQixHQUFqQjtRQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixDQUFDO0lBRUQsa0NBQWlCLEdBQWpCO1FBQ0ksSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5RDtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVELGdDQUFlLEdBQWY7UUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQztJQUVELGlDQUFnQixHQUFoQjtRQUNJLElBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25FO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRUQsZ0NBQWUsR0FBZjtRQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM5QixDQUFDO0lBRUwsYUFBQztBQUFELENBeEVBLEFBd0VDLElBQUE7QUFFRCxrQkFBZSxJQUFJLE1BQU0sRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXNzZXRzIHtcblxuICAgIFt4OiBzdHJpbmddOiBhbnk7XG5cbiAgICBsYW5nQXNzZXRVcmw6IHN0cmluZyA9IFwiaW1hZ2VzL3R4dC9cIjtcbiAgICBnYW1lQXNzZXRVcmw6IHN0cmluZyA9IFwiaW1hZ2VzL1wiO1xuICAgIHByZWZhYkFzc2V0VXJsOiBzdHJpbmcgPSBcInByZWZhYi9cIjtcbiAgICBzcGluZUFzc2V0VXJsOiBzdHJpbmcgPSBcInNwaW5lL1wiO1xuXG4gICAgcHJpdmF0ZSBfZ2FtZUFzc2V0c05hbWU6IHN0cmluZ1tdID0gW1xuICAgICAgICBcInBldC9wZXRfMVwiLFxuICAgICAgICBcInBldC9wZXRfMlwiLFxuICAgICAgICBcImdhbWUvZGVjb3JhdGlvblwiXG4gICAgXTtcblxuICAgIHByaXZhdGUgX2dhbWVBc3NldHNQcmVmYWJOYW1lOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgXCJjdWJlX2l0ZW1cIixcbiAgICAgICAgXCJjb2luX2dvbGRfcHJlZmFiXCIsXG4gICAgICAgIFwiY29pbl9zbGl2ZXJfcHJlZmFiXCIsXG4gICAgXTtcblxuICAgIHByaXZhdGUgX2dhbWVBc3NldHNTcGluZU5hbWU6IHN0cmluZ1tdID0gW1xuXG4gICAgICAgIFwic2VsZWN0L3NlbGVjdFwiLFxuXG4gICAgICAgIFwibWFwL21hcF9ncGcxXCIsXG5cbiAgICAgICAgXCJtaW5lL3BldDAxXCIsXG5cbiAgICAgICAgXCJwYXJ0bmVyL21pbmluZzFcIixcblxuICAgICAgICBcImNvaW4vY29pblwiLFxuXG4gICAgXTtcblxuXG4gICAgZ2V0R2FtZUFzc2V0c1ByZWZhYlVybHMoKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9nYW1lQXNzZXRzUHJlZmFiTmFtZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJyLnB1c2godGhpcy5wcmVmYWJBc3NldFVybCArIHRoaXMuX2dhbWVBc3NldHNQcmVmYWJOYW1lW2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIGdldFByZWZhYkFzc2V0VXJsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnByZWZhYkFzc2V0VXJsO1xuICAgIH1cblxuICAgIGdldEdhbWVBc3NldHNVcmxzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgY29uc3QgYXJyID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZ2FtZUFzc2V0c05hbWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyci5wdXNoKHRoaXMuZ2V0R2FtZUFzc2V0VXJsKCkgKyB0aGlzLl9nYW1lQXNzZXRzTmFtZVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICBnZXRHYW1lQXNzZXRVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZUFzc2V0VXJsO1xuICAgIH1cblxuICAgIGdldEdhbWVTcGluZVVybHMoKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9nYW1lQXNzZXRzU3BpbmVOYW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcnIucHVzaCh0aGlzLmdldEdhbWVTcGluZVVybCgpICsgdGhpcy5fZ2FtZUFzc2V0c1NwaW5lTmFtZVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICBnZXRHYW1lU3BpbmVVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BpbmVBc3NldFVybDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFzc2V0cygpOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/mine/collect/CollectGeneral.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '001d4Aj4DNOvbICg2vzJCcK', 'CollectGeneral');
// script/controllers/mine/collect/CollectGeneral.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var GameCenter_1 = require("../../../data/GameCenter");
var GameController_1 = require("../../../GameController");
var AssetsMng_1 = require("../../../manager/AssetsMng");
var UIBase_1 = require("../../ui/UIBase");
var ParticleCoin_1 = require("./ParticleCoin");
var DataCollectGeneral_1 = require("../../../data/scene/DataCollectGeneral");
var ActionTransition_1 = require("../../../common/ActionTransition");
var EventConst_1 = require("../../../data/const/EventConst");
var ccclass = cc._decorator.ccclass;
var CollectGeneral = /** @class */ (function (_super) {
    __extends(CollectGeneral, _super);
    function CollectGeneral() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canUpdateMine = true;
        return _this;
    }
    CollectGeneral.prototype.onUILoad = function () {
        this.ui = this.node.addComponent(DataCollectGeneral_1.default);
        this.particleCoin = this.ui.node_coin_particle_holder.addComponent(ParticleCoin_1.default);
        this.viewReset();
    };
    CollectGeneral.prototype.onShow = function () {
        var _this = this;
        this.initEvent(EventConst_1.MainEvent.GET_POINT, this.onGetPoint);
        this.initEvent(EventConst_1.MainEvent.MINE_GENERAL_UPDATE, this.onMineUpdate);
        this.onRegisterEvent(this.ui.btn_get, this.onBtnGetClick, this);
        this.dataReset();
        cc.game.on(cc.game.EVENT_SHOW, function () {
            _this.updateMine();
        });
        this.updateChooseIcon();
    };
    CollectGeneral.prototype.onHide = function () {
        this.unRegisterEvent(this.ui.btn_get, this.onBtnGetClick, this);
    };
    CollectGeneral.prototype.viewReset = function () {
        this.setRoadTheme();
        this.setPetSpineTheme();
        this.setPartnerSpineTheme();
        this.roadActive(false);
        this.petActive(false);
        this.partnerActive(false);
        this.coinActive(false);
        this.mineTipHide();
        this.ui.label_time.string = "00:00:00";
        this.ui.btn_get.active = false;
        this.ui.btn_get.opacity = 0;
        this.ui.node_coin_level_holder.opacity = 0;
    };
    CollectGeneral.prototype.dataReset = function () {
        this.setGoldPoint();
        this.setSliverPoint();
        this.updateWarehousePoint();
        this.updateMoneyPile();
        this.updateBtnGetState();
    };
    CollectGeneral.prototype.mineAniPlay = function () {
        var _this = this;
        this.roadAniPlay(function () {
            _this.petRunAniPlay();
            _this.partnerRunAniPlay();
            _this.coinRunAniPlay();
            _this.mineTipShow();
        });
    };
    CollectGeneral.prototype.roadActive = function (state) {
        if (state === void 0) { state = true; }
        this.ui.spine_road.node.stopAllActions();
        this.ui.spine_road.node.active = state;
    };
    CollectGeneral.prototype.roadAniPlay = function (callBack) {
        var _this = this;
        this.roadActive();
        this.ui.spine_road.node.runAction(cc.sequence(cc.callFunc(function () {
            _this.ui.spine_road.setAnimation(0, "run_op", false);
            _this.ui.spine_road.addAnimation(0, "run_action", true);
        }), cc.delayTime(1), cc.callFunc(function () {
            _this.ui.btn_get.active = true;
            _this.ui.btn_get.runAction(cc.fadeIn(.2));
            _this.ui.node_coin_level_holder.runAction(cc.fadeIn(.2));
            if (callBack)
                callBack();
        })));
    };
    CollectGeneral.prototype.setRoadTheme = function () {
        var id = GameCenter_1.default.game.mineSelectID;
        var name = GameCenter_1.default.game.mineRoadName[id];
        this.ui.spine_road.skeletonData = AssetsMng_1.default.getAssets(name + ".spine");
    };
    CollectGeneral.prototype.petActive = function (state) {
        if (state === void 0) { state = true; }
        this.ui.spine_pet.node.active = state;
    };
    CollectGeneral.prototype.petRunAniPlay = function () {
        this.petActive();
        this.ui.spine_pet.setAnimation(0, "run_patch_02", true);
    };
    CollectGeneral.prototype.setPetSpineTheme = function () {
        var name = GameCenter_1.default.game.getPetBodyThemeName();
        this.petActive();
        this.ui.spine_pet.skeletonData = AssetsMng_1.default.getAssets(name + ".spine");
        this.setPetSkin();
    };
    CollectGeneral.prototype.setPetSkin = function () {
        this.ui.spine_pet.setSkin(GameCenter_1.default.game.getPetBodySkinName());
    };
    CollectGeneral.prototype.partnerActive = function (state) {
        if (state === void 0) { state = true; }
        this.ui.spine_partner.node.active = state;
    };
    CollectGeneral.prototype.partnerRunAniPlay = function () {
        this.partnerActive();
        this.ui.spine_partner.setAnimation(0, "run_patch_02", true);
    };
    CollectGeneral.prototype.setPartnerSpineTheme = function () {
        var name = GameCenter_1.default.game.getPartnerBodyThemeName();
        this.partnerActive();
        this.ui.spine_partner.skeletonData = AssetsMng_1.default.getAssets(name + ".spine");
    };
    CollectGeneral.prototype.coinActive = function (state) {
        if (state === void 0) { state = true; }
        this.ui.spine_coin.node.active = state;
    };
    CollectGeneral.prototype.coinRunAniPlay = function () {
        this.coinActive();
        this.ui.spine_coin.setAnimation(0, "run_patch_02", true);
    };
    CollectGeneral.prototype.mineTipShow = function () {
        this.ui.node_mine_tip_holder.active = true;
        this.ui.node_mine_tip_holder.runAction(cc.fadeIn(.3));
    };
    CollectGeneral.prototype.mineTipHide = function () {
        this.ui.node_mine_tip_holder.opacity = 0;
        this.ui.node_mine_tip_holder.active = false;
    };
    CollectGeneral.prototype.timeNumberChange = function (num) {
        return num < 10 ? "0" + num : "" + num;
    };
    CollectGeneral.prototype.formatSecond = function (secs) {
        var hr = Math.floor(secs / 3600);
        var min = Math.floor((secs - (hr * 3600)) / 60);
        var sec = secs - (hr * 3600) - (min * 60);
        return " " + this.timeNumberChange(hr) + ":" + this.timeNumberChange(min) + ":" + this.timeNumberChange(sec);
    };
    CollectGeneral.prototype.getAccumulatedHours = function () {
        return Math.floor(GameCenter_1.default.game.currentTime / 3600);
    };
    CollectGeneral.prototype.setGoldPoint = function () {
        this.ui.label_gold.string = "" + GameCenter_1.default.game.goldPoint;
    };
    CollectGeneral.prototype.setSliverPoint = function () {
        this.ui.label_sliver.string = "" + GameCenter_1.default.game.silverPoint;
    };
    CollectGeneral.prototype.updatePoints = function () {
        this.setGoldPoint();
        this.setSliverPoint();
    };
    CollectGeneral.prototype.updateWarehousePoint = function () {
        this.ui.label_coin_txt.string = "" + GameCenter_1.default.game.warehousePoint;
    };
    CollectGeneral.prototype.updateMoneyPile = function () {
        var level = this.getMoneyPileLevel();
        var nodeArr = this.ui.node_coin_level_holder.children;
        for (var i = 0; i < nodeArr.length; i++) {
            nodeArr[i].active = i == level;
        }
    };
    CollectGeneral.prototype.getMoneyPileLevel = function () {
        var hr = this.getAccumulatedHours();
        var level = 0;
        if (hr < 6) {
            level = 0;
        }
        else if (hr >= 6 && hr < 12) {
            level = 1;
        }
        else if (hr >= 12) {
            level = 2;
        }
        return level;
    };
    CollectGeneral.prototype.onBtnGetClick = function () {
        ActionTransition_1.ActionTransition.btnBounce(this.ui.btn_get);
        GameController_1.default.net.send("action", null);
    };
    CollectGeneral.prototype.onGetPoint = function () {
        var _this = this;
        var goldNum = Number(GameCenter_1.default.game.collect.gold);
        var sliverNum = Number(GameCenter_1.default.game.collect.silver);
        goldNum = goldNum <= 30 ? goldNum : 30;
        sliverNum = sliverNum <= 30 ? sliverNum : 30;
        this.particleCoin.createCoins(cc.v2(0, -510), goldNum, sliverNum, function () {
            _this.updatePoints();
        });
    };
    CollectGeneral.prototype.onMineUpdate = function () {
        this.updateWarehousePoint();
        this.updateBtnGetState();
        this.updateMoneyPile();
    };
    CollectGeneral.prototype.updateMine = function () {
        var _this = this;
        if (this.canUpdateMine) {
            this.canUpdateMine = false;
            GameController_1.default.net.send("other", null);
            var timer_1 = setTimeout(function () {
                _this.canUpdateMine = true;
                clearTimeout(timer_1);
            }, 30);
        }
    };
    CollectGeneral.prototype.updateTime = function () {
        if (!GameCenter_1.default.game.timeActive) {
            if (this.ui.label_time.string != this.formatSecond(0)) {
                this.ui.label_time.string = this.formatSecond(0);
            }
            return;
        }
        if (this.ui.label_time.string != this.formatSecond(GameCenter_1.default.game.currentTime)) {
            this.ui.label_time.string = this.formatSecond(GameCenter_1.default.game.currentTime);
            if (GameCenter_1.default.game.currentTime % 3600 == 0 && GameCenter_1.default.game.currentTime > 0) {
                this.updateMine();
            }
        }
    };
    CollectGeneral.prototype.updateBtnGetState = function () {
        var hr = this.getAccumulatedHours();
        if (hr < 6) {
            this.ui.node_get_normal.active = true;
            this.ui.node_get_active.active = false;
        }
        else {
            this.ui.node_get_normal.active = false;
            this.ui.node_get_active.active = true;
        }
    };
    CollectGeneral.prototype.updateChooseIcon = function () {
        this.ui.sprite_icon_mine.spriteFrame = GameCenter_1.default.getCurrentPetChooseIcon();
        this.ui.sprite_icon_partner.spriteFrame = GameCenter_1.default.getCurrentPartnerChooseIcon();
    };
    CollectGeneral.prototype.update = function (dt) {
        if (!this.node.active) {
            return;
        }
        this.updateTime();
    };
    CollectGeneral = __decorate([
        ccclass
    ], CollectGeneral);
    return CollectGeneral;
}(UIBase_1.default));
exports.default = CollectGeneral;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcbWluZVxcY29sbGVjdFxcQ29sbGVjdEdlbmVyYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBQ2xELDBEQUFxRDtBQUNyRCx3REFBbUQ7QUFDbkQsMENBQXFDO0FBQ3JDLCtDQUEwQztBQUMxQyw2RUFBd0U7QUFDeEUscUVBQW9FO0FBQ3BFLDZEQUEyRDtBQUVuRCxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUdsQztJQUE0QyxrQ0FBTTtJQUFsRDtRQUFBLHFFQThSQztRQXpSRyxtQkFBYSxHQUFZLElBQUksQ0FBQzs7SUF5UmxDLENBQUM7SUF2UkcsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsNEJBQWtCLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMseUJBQXlCLENBQUMsWUFBWSxDQUFDLHNCQUFZLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQVMsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixFQUFFLENBQUMs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OFJqRDtrQkE5Um9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUNlbnRlciBmcm9tIFwiLi4vLi4vLi4vZGF0YS9HYW1lQ2VudGVyXCI7XHJcbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vLi4vLi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IEFzc2V0c01uZyBmcm9tIFwiLi4vLi4vLi4vbWFuYWdlci9Bc3NldHNNbmdcIjtcclxuaW1wb3J0IFVJQmFzZSBmcm9tIFwiLi4vLi4vdWkvVUlCYXNlXCI7XHJcbmltcG9ydCBQYXJ0aWNsZUNvaW4gZnJvbSBcIi4vUGFydGljbGVDb2luXCI7XHJcbmltcG9ydCBEYXRhQ29sbGVjdEdlbmVyYWwgZnJvbSBcIi4uLy4uLy4uL2RhdGEvc2NlbmUvRGF0YUNvbGxlY3RHZW5lcmFsXCI7XHJcbmltcG9ydCB7IEFjdGlvblRyYW5zaXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL0FjdGlvblRyYW5zaXRpb25cIjtcclxuaW1wb3J0IHsgTWFpbkV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvY29uc3QvRXZlbnRDb25zdFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGVjdEdlbmVyYWwgZXh0ZW5kcyBVSUJhc2Uge1xyXG5cclxuICAgIHVpOiBEYXRhQ29sbGVjdEdlbmVyYWw7XHJcbiAgICBwYXJ0aWNsZUNvaW46IFBhcnRpY2xlQ29pbjtcclxuXHJcbiAgICBjYW5VcGRhdGVNaW5lOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBvblVJTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChEYXRhQ29sbGVjdEdlbmVyYWwpO1xyXG4gICAgICAgIHRoaXMucGFydGljbGVDb2luID0gdGhpcy51aS5ub2RlX2NvaW5fcGFydGljbGVfaG9sZGVyLmFkZENvbXBvbmVudChQYXJ0aWNsZUNvaW4pO1xyXG4gICAgICAgIHRoaXMudmlld1Jlc2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KE1haW5FdmVudC5HRVRfUE9JTlQsIHRoaXMub25HZXRQb2ludCk7XHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoTWFpbkV2ZW50Lk1JTkVfR0VORVJBTF9VUERBVEUsIHRoaXMub25NaW5lVXBkYXRlKTtcclxuICAgICAgICB0aGlzLm9uUmVnaXN0ZXJFdmVudCh0aGlzLnVpLmJ0bl9nZXQsIHRoaXMub25CdG5HZXRDbGljaywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5kYXRhUmVzZXQoKTtcclxuICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfU0hPVywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1pbmUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNob29zZUljb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkhpZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51blJlZ2lzdGVyRXZlbnQodGhpcy51aS5idG5fZ2V0LCB0aGlzLm9uQnRuR2V0Q2xpY2ssIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHZpZXdSZXNldCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldFJvYWRUaGVtZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0UGV0U3BpbmVUaGVtZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0UGFydG5lclNwaW5lVGhlbWUoKTtcclxuICAgICAgICB0aGlzLnJvYWRBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMucGV0QWN0aXZlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnBhcnRuZXJBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuY29pbkFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5taW5lVGlwSGlkZSgpO1xyXG4gICAgICAgIHRoaXMudWkubGFiZWxfdGltZS5zdHJpbmcgPSBcIjAwOjAwOjAwXCI7XHJcbiAgICAgICAgdGhpcy51aS5idG5fZ2V0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudWkuYnRuX2dldC5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLnVpLm5vZGVfY29pbl9sZXZlbF9ob2xkZXIub3BhY2l0eSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YVJlc2V0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0R29sZFBvaW50KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTbGl2ZXJQb2ludCgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlV2FyZWhvdXNlUG9pbnQoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZU1vbmV5UGlsZSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQnRuR2V0U3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBtaW5lQW5pUGxheSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvYWRBbmlQbGF5KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wZXRSdW5BbmlQbGF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFydG5lclJ1bkFuaVBsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5jb2luUnVuQW5pUGxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1pbmVUaXBTaG93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcm9hZEFjdGl2ZShzdGF0ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpLnNwaW5lX3JvYWQubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMudWkuc3BpbmVfcm9hZC5ub2RlLmFjdGl2ZSA9IHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHJvYWRBbmlQbGF5KGNhbGxCYWNrPzogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvYWRBY3RpdmUoKTtcclxuICAgICAgICB0aGlzLnVpLnNwaW5lX3JvYWQubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudWkuc3BpbmVfcm9hZC5zZXRBbmltYXRpb24oMCwgXCJydW5fb3BcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51aS5zcGluZV9yb2FkLmFkZEFuaW1hdGlvbigwLCBcInJ1bl9hY3Rpb25cIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMSksXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudWkuYnRuX2dldC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51aS5idG5fZ2V0LnJ1bkFjdGlvbihjYy5mYWRlSW4oLjIpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudWkubm9kZV9jb2luX2xldmVsX2hvbGRlci5ydW5BY3Rpb24oY2MuZmFkZUluKC4yKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbEJhY2spIGNhbGxCYWNrKCk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJvYWRUaGVtZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgaWQgPSBHYW1lQ2VudGVyLmdhbWUubWluZVNlbGVjdElEO1xyXG4gICAgICAgIGxldCBuYW1lID0gR2FtZUNlbnRlci5nYW1lLm1pbmVSb2FkTmFtZVtpZF07XHJcbiAgICAgICAgdGhpcy51aS5zcGluZV9yb2FkLnNrZWxldG9uRGF0YSA9IEFzc2V0c01uZy5nZXRBc3NldHMoYCR7bmFtZX0uc3BpbmVgKTtcclxuICAgIH1cclxuXHJcbiAgICBwZXRBY3RpdmUoc3RhdGU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51aS5zcGluZV9wZXQubm9kZS5hY3RpdmUgPSBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBwZXRSdW5BbmlQbGF5KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGV0QWN0aXZlKCk7XHJcbiAgICAgICAgdGhpcy51aS5zcGluZV9wZXQuc2V0QW5pbWF0aW9uKDAsIGBydW5fcGF0Y2hfMDJgLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQZXRTcGluZVRoZW1lKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBuYW1lID0gR2FtZUNlbnRlci5nYW1lLmdldFBldEJvZHlUaGVtZU5hbWUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wZXRBY3RpdmUoKTtcclxuICAgICAgICB0aGlzLnVpLnNwaW5lX3BldC5za2VsZXRvbkRhdGEgPSBBc3NldHNNbmcuZ2V0QXNzZXRzKGAke25hbWV9LnNwaW5lYCk7XHJcbiAgICAgICAgdGhpcy5zZXRQZXRTa2luKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGV0U2tpbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpLnNwaW5lX3BldC5zZXRTa2luKEdhbWVDZW50ZXIuZ2FtZS5nZXRQZXRCb2R5U2tpbk5hbWUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFydG5lckFjdGl2ZShzdGF0ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpLnNwaW5lX3BhcnRuZXIubm9kZS5hY3RpdmUgPSBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJ0bmVyUnVuQW5pUGxheSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhcnRuZXJBY3RpdmUoKTtcclxuICAgICAgICB0aGlzLnVpLnNwaW5lX3BhcnRuZXIuc2V0QW5pbWF0aW9uKDAsIGBydW5fcGF0Y2hfMDJgLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQYXJ0bmVyU3BpbmVUaGVtZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbmFtZSA9IEdhbWVDZW50ZXIuZ2FtZS5nZXRQYXJ0bmVyQm9keVRoZW1lTmFtZSgpO1xyXG4gICAgICAgIHRoaXMucGFydG5lckFjdGl2ZSgpO1xyXG4gICAgICAgIHRoaXMudWkuc3BpbmVfcGFydG5lci5za2VsZXRvbkRhdGEgPSBBc3NldHNNbmcuZ2V0QXNzZXRzKGAke25hbWV9LnNwaW5lYCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29pbkFjdGl2ZShzdGF0ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpLnNwaW5lX2NvaW4ubm9kZS5hY3RpdmUgPSBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb2luUnVuQW5pUGxheSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNvaW5BY3RpdmUoKTtcclxuICAgICAgICB0aGlzLnVpLnNwaW5lX2NvaW4uc2V0QW5pbWF0aW9uKDAsIGBydW5fcGF0Y2hfMDJgLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBtaW5lVGlwU2hvdygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpLm5vZGVfbWluZV90aXBfaG9sZGVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51aS5ub2RlX21pbmVfdGlwX2hvbGRlci5ydW5BY3Rpb24oY2MuZmFkZUluKC4zKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWluZVRpcEhpZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51aS5ub2RlX21pbmVfdGlwX2hvbGRlci5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLnVpLm5vZGVfbWluZV90aXBfaG9sZGVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRpbWVOdW1iZXJDaGFuZ2UobnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBudW0gPCAxMCA/IGAwJHtudW19YCA6IGAke251bX1gO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdFNlY29uZChzZWNzKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgaHIgPSBNYXRoLmZsb29yKHNlY3MgLyAzNjAwKTtcclxuICAgICAgICBsZXQgbWluID0gTWF0aC5mbG9vcigoc2VjcyAtIChociAqIDM2MDApKSAvIDYwKTtcclxuICAgICAgICBsZXQgc2VjID0gc2VjcyAtIChociAqIDM2MDApIC0gKG1pbiAqIDYwKTtcclxuICAgICAgICByZXR1cm4gYCAke3RoaXMudGltZU51bWJlckNoYW5nZShocil9OiR7dGhpcy50aW1lTnVtYmVyQ2hhbmdlKG1pbil9OiR7dGhpcy50aW1lTnVtYmVyQ2hhbmdlKHNlYyl9YDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY2N1bXVsYXRlZEhvdXJzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoR2FtZUNlbnRlci5nYW1lLmN1cnJlbnRUaW1lIC8gMzYwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0R29sZFBvaW50KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudWkubGFiZWxfZ29sZC5zdHJpbmcgPSBgJHtHYW1lQ2VudGVyLmdhbWUuZ29sZFBvaW50fWA7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2xpdmVyUG9pbnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51aS5sYWJlbF9zbGl2ZXIuc3RyaW5nID0gYCR7R2FtZUNlbnRlci5nYW1lLnNpbHZlclBvaW50fWA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUG9pbnRzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0R29sZFBvaW50KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTbGl2ZXJQb2ludCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVdhcmVob3VzZVBvaW50KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudWkubGFiZWxfY29pbl90eHQuc3RyaW5nID0gYCR7R2FtZUNlbnRlci5nYW1lLndhcmVob3VzZVBvaW50fWA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTW9uZXlQaWxlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgbGV2ZWwgPSB0aGlzLmdldE1vbmV5UGlsZUxldmVsKCk7XHJcbiAgICAgICAgbGV0IG5vZGVBcnIgPSB0aGlzLnVpLm5vZGVfY29pbl9sZXZlbF9ob2xkZXIuY2hpbGRyZW47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZUFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgIG5vZGVBcnJbaV0uYWN0aXZlID0gaSA9PSBsZXZlbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldE1vbmV5UGlsZUxldmVsKCk6IG51bWJlciB7XHJcblxyXG4gICAgICAgIGxldCBociA9IHRoaXMuZ2V0QWNjdW11bGF0ZWRIb3VycygpO1xyXG4gICAgICAgIGxldCBsZXZlbCA9IDA7XHJcblxyXG4gICAgICAgIGlmIChociA8IDYpIHtcclxuICAgICAgICAgICAgbGV2ZWwgPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaHIgPj0gNiAmJiBociA8IDEyKSB7XHJcbiAgICAgICAgICAgIGxldmVsID0gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKGhyID49IDEyKSB7XHJcbiAgICAgICAgICAgIGxldmVsID0gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBsZXZlbDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5HZXRDbGljaygpOiB2b2lkIHtcclxuICAgICAgICBBY3Rpb25UcmFuc2l0aW9uLmJ0bkJvdW5jZSh0aGlzLnVpLmJ0bl9nZXQpO1xyXG4gICAgICAgIEdhbWVDb250cm9sbGVyLm5ldC5zZW5kKFwiYWN0aW9uXCIsIG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uR2V0UG9pbnQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGxldCBnb2xkTnVtID0gTnVtYmVyKEdhbWVDZW50ZXIuZ2FtZS5jb2xsZWN0LmdvbGQpO1xyXG4gICAgICAgIGxldCBzbGl2ZXJOdW0gPSBOdW1iZXIoR2FtZUNlbnRlci5nYW1lLmNvbGxlY3Quc2lsdmVyKTtcclxuXHJcbiAgICAgICAgZ29sZE51bSA9IGdvbGROdW0gPD0gMzAgPyBnb2xkTnVtIDogMzA7XHJcbiAgICAgICAgc2xpdmVyTnVtID0gc2xpdmVyTnVtIDw9IDMwID8gc2xpdmVyTnVtIDogMzA7XHJcblxyXG4gICAgICAgIHRoaXMucGFydGljbGVDb2luLmNyZWF0ZUNvaW5zKGNjLnYyKDAsIC01MTApLCBnb2xkTnVtLCBzbGl2ZXJOdW0sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQb2ludHMoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25NaW5lVXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudXBkYXRlV2FyZWhvdXNlUG9pbnQoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJ0bkdldFN0YXRlKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVNb25leVBpbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVNaW5lKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jYW5VcGRhdGVNaW5lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuVXBkYXRlTWluZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBHYW1lQ29udHJvbGxlci5uZXQuc2VuZChcIm90aGVyXCIsIG51bGwpO1xyXG4gICAgICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5VcGRhdGVNaW5lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcclxuICAgICAgICAgICAgfSwgMzApXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUaW1lKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAoIUdhbWVDZW50ZXIuZ2FtZS50aW1lQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVpLmxhYmVsX3RpbWUuc3RyaW5nICE9IHRoaXMuZm9ybWF0U2Vjb25kKDApKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpLmxhYmVsX3RpbWUuc3RyaW5nID0gdGhpcy5mb3JtYXRTZWNvbmQoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudWkubGFiZWxfdGltZS5zdHJpbmcgIT0gdGhpcy5mb3JtYXRTZWNvbmQoR2FtZUNlbnRlci5nYW1lLmN1cnJlbnRUaW1lKSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy51aS5sYWJlbF90aW1lLnN0cmluZyA9IHRoaXMuZm9ybWF0U2Vjb25kKEdhbWVDZW50ZXIuZ2FtZS5jdXJyZW50VGltZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoR2FtZUNlbnRlci5nYW1lLmN1cnJlbnRUaW1lICUgMzYwMCA9PSAwICYmIEdhbWVDZW50ZXIuZ2FtZS5jdXJyZW50VGltZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTWluZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQnRuR2V0U3RhdGUoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGxldCBociA9IHRoaXMuZ2V0QWNjdW11bGF0ZWRIb3VycygpO1xyXG5cclxuICAgICAgICBpZiAoaHIgPCA2KSB7XHJcbiAgICAgICAgICAgIHRoaXMudWkubm9kZV9nZXRfbm9ybWFsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudWkubm9kZV9nZXRfYWN0aXZlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudWkubm9kZV9nZXRfbm9ybWFsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVpLm5vZGVfZ2V0X2FjdGl2ZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ2hvb3NlSWNvbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpLnNwcml0ZV9pY29uX21pbmUuc3ByaXRlRnJhbWUgPSBHYW1lQ2VudGVyLmdldEN1cnJlbnRQZXRDaG9vc2VJY29uKCk7XHJcbiAgICAgICAgdGhpcy51aS5zcHJpdGVfaWNvbl9wYXJ0bmVyLnNwcml0ZUZyYW1lID0gR2FtZUNlbnRlci5nZXRDdXJyZW50UGFydG5lckNob29zZUljb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lKCk7XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/mine/mng/MinePetSelect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '36f187Vx9tGArp2Zx7M0LOh', 'MinePetSelect');
// script/controllers/mine/mng/MinePetSelect.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameCenter_1 = require("../../../data/GameCenter");
var MineSelect_1 = require("./MineSelect");
var MinePetSelect = /** @class */ (function (_super) {
    __extends(MinePetSelect, _super);
    function MinePetSelect() {
        var _this = _super.call(this, 0) || this;
        _this.setInitData();
        return _this;
    }
    MinePetSelect.prototype.reset = function () {
        this.slider.updateItemAni();
        this.slider.updateLevel();
    };
    MinePetSelect.prototype.setInitData = function () {
        this.bodyName = GameCenter_1.default.game.mineBodyName;
        this.floorName = GameCenter_1.default.game.mineFloorName;
    };
    return MinePetSelect;
}(MineSelect_1.MineSelect));
exports.default = MinePetSelect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcbWluZVxcbW5nXFxNaW5lUGV0U2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFrRDtBQUNsRCwyQ0FBMEM7QUFFMUM7SUFBMkMsaUNBQVU7SUFFakQ7UUFBQSxZQUNJLGtCQUFNLENBQUMsQ0FBQyxTQUVYO1FBREcsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOztJQUN2QixDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQ25ELENBQUM7SUFFTCxvQkFBQztBQUFELENBakJBLEFBaUJDLENBakIwQyx1QkFBVSxHQWlCcEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUNlbnRlciBmcm9tIFwiLi4vLi4vLi4vZGF0YS9HYW1lQ2VudGVyXCI7XHJcbmltcG9ydCB7IE1pbmVTZWxlY3QgfSBmcm9tIFwiLi9NaW5lU2VsZWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5lUGV0U2VsZWN0IGV4dGVuZHMgTWluZVNlbGVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoMCk7XHJcbiAgICAgICAgdGhpcy5zZXRJbml0RGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2xpZGVyLnVwZGF0ZUl0ZW1BbmkoKTtcclxuICAgICAgICB0aGlzLnNsaWRlci51cGRhdGVMZXZlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEluaXREYXRhKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYm9keU5hbWUgPSBHYW1lQ2VudGVyLmdhbWUubWluZUJvZHlOYW1lO1xyXG4gICAgICAgIHRoaXMuZmxvb3JOYW1lID0gR2FtZUNlbnRlci5nYW1lLm1pbmVGbG9vck5hbWU7XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/mine/mng/MineSelect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b2f2byd4L5G6Z6W+vjV+m7B', 'MineSelect');
// script/controllers/mine/mng/MineSelect.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MineSelect = void 0;
var MineSlider_1 = require("./MineSlider");
var UIBase_1 = require("../../ui/UIBase");
var DataMinePetSelect_1 = require("../../../data/scene/DataMinePetSelect");
var MineSelect = /** @class */ (function (_super) {
    __extends(MineSelect, _super);
    function MineSelect(type) {
        var _this = _super.call(this) || this;
        _this.type = null;
        _this.bodyName = [];
        _this.floorName = [];
        _this.type = type;
        return _this;
    }
    MineSelect.prototype.onUILoad = function () {
        this.ui = this.node.addComponent(DataMinePetSelect_1.default);
        this.slider = new MineSlider_1.MineSlider(this.ui, this.type);
    };
    MineSelect.prototype.onStart = function () {
        this.slider.init();
        this.slider.createSliderList(this.getFloorAssets(), this.getBodyAssets());
    };
    MineSelect.prototype.onShow = function () {
        this.onRegisterEvent(this.ui.btn_go, this.onBtnGoClick, this);
        this.slider.show();
        this.slider.arrowBtnsBindOn();
    };
    MineSelect.prototype.onHide = function () {
        this.unRegisterEvent(this.ui.btn_go, this.onBtnGoClick, this);
        this.slider.hide();
        this.slider.arrowBtnsBindOff();
    };
    MineSelect.prototype.onBtnGoClick = function () {
        this.slider.onBtnGoClick();
    };
    MineSelect.prototype.getBodyAssets = function () {
        return this.bodyName;
    };
    MineSelect.prototype.getFloorAssets = function () {
        return this.floorName;
    };
    return MineSelect;
}(UIBase_1.default));
exports.MineSelect = MineSelect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcbWluZVxcbW5nXFxNaW5lU2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMEM7QUFDMUMsMENBQXFDO0FBQ3JDLDJFQUFzRTtBQUV0RTtJQUFnQyw4QkFBTTtJQVNsQyxvQkFBWSxJQUFZO1FBQXhCLFlBQ0ksaUJBQU8sU0FFVjtRQVBELFVBQUksR0FBVyxJQUFJLENBQUM7UUFDcEIsY0FBUSxHQUFhLEVBQUUsQ0FBQztRQUN4QixlQUFTLEdBQWEsRUFBRSxDQUFDO1FBSXJCLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztJQUNyQixDQUFDO0lBRUQsNkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsMkJBQWlCLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksdUJBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsNEJBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELDJCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCwyQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxpQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsa0NBQWEsR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQsbUNBQWMsR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUwsaUJBQUM7QUFBRCxDQWhEQSxBQWdEQyxDQWhEK0IsZ0JBQU0sR0FnRHJDO0FBaERZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWluZVNsaWRlciB9IGZyb20gXCIuL01pbmVTbGlkZXJcIjtcclxuaW1wb3J0IFVJQmFzZSBmcm9tIFwiLi4vLi4vdWkvVUlCYXNlXCI7XHJcbmltcG9ydCBEYXRhTWluZVBldFNlbGVjdCBmcm9tIFwiLi4vLi4vLi4vZGF0YS9zY2VuZS9EYXRhTWluZVBldFNlbGVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1pbmVTZWxlY3QgZXh0ZW5kcyBVSUJhc2Uge1xyXG5cclxuICAgIHVpOiBEYXRhTWluZVBldFNlbGVjdDtcclxuICAgIHNsaWRlcjogTWluZVNsaWRlcjtcclxuXHJcbiAgICB0eXBlOiBudW1iZXIgPSBudWxsO1xyXG4gICAgYm9keU5hbWU6IHN0cmluZ1tdID0gW107XHJcbiAgICBmbG9vck5hbWU6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IodHlwZTogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVUlMb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudWkgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KERhdGFNaW5lUGV0U2VsZWN0KTtcclxuICAgICAgICB0aGlzLnNsaWRlciA9IG5ldyBNaW5lU2xpZGVyKHRoaXMudWksIHRoaXMudHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdGFydCgpIHtcclxuICAgICAgICB0aGlzLnNsaWRlci5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIuY3JlYXRlU2xpZGVyTGlzdCh0aGlzLmdldEZsb29yQXNzZXRzKCksIHRoaXMuZ2V0Qm9keUFzc2V0cygpKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblJlZ2lzdGVyRXZlbnQodGhpcy51aS5idG5fZ28sIHRoaXMub25CdG5Hb0NsaWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnNsaWRlci5zaG93KCk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIuYXJyb3dCdG5zQmluZE9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25IaWRlKCkge1xyXG4gICAgICAgIHRoaXMudW5SZWdpc3RlckV2ZW50KHRoaXMudWkuYnRuX2dvLCB0aGlzLm9uQnRuR29DbGljaywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyLmFycm93QnRuc0JpbmRPZmYoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkdvQ2xpY2soKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIub25CdG5Hb0NsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Qm9keUFzc2V0cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib2R5TmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGbG9vckFzc2V0cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mbG9vck5hbWU7XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/mine/mng/MineSlider.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '057ddp8kttBb6HL7VXKwnBw', 'MineSlider');
// script/controllers/mine/mng/MineSlider.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MineSlider = void 0;
var GameCenter_1 = require("../../../data/GameCenter");
var LangMng_1 = require("../../../manager/LangMng");
var AssetsMng_1 = require("../../../manager/AssetsMng");
var EventMng_1 = require("../../../manager/EventMng");
var MineSelectItem_1 = require("./MineSelectItem");
var ActionTransition_1 = require("../../../common/ActionTransition");
var EventConst_1 = require("../../../data/const/EventConst");
var MineSlider = /** @class */ (function () {
    function MineSlider(ui, type, config) {
        this.ui = null;
        this.items = [];
        this.state = 0;
        this.pageWidth = 300;
        this.itemOffsetY = 150;
        this.layoutX = -333;
        this.cubeSizeProp = 0;
        this.referenceMode = false;
        this.sliderPageCallBack = null;
        this._prePageIndex = -1;
        this._currentPageIndex = 1;
        this.ui = ui;
        this.type = type;
        this._currentPageIndex = this.type == 0 ? GameCenter_1.default.game.mineSelectID : GameCenter_1.default.game.partnerSelectID;
        this.updateGameCenterData();
        this.updateChooseTip();
        if (!config) {
            return;
        }
        if (config.referenceMode) {
            this.referenceMode = config.referenceMode;
        }
        if (config.sliderPageCallBack) {
            this.sliderPageCallBack = config.sliderPageCallBack;
        }
    }
    MineSlider.prototype.init = function () {
        this.cubeSizeProp = this.pageWidth / this.itemOffsetY;
        this.updateChooseTip();
    };
    MineSlider.prototype.show = function () {
        this.ui.page_view.node.on("scrolling", this.onSliderScrolling, this);
        this.ui.page_view.node.on("page-turning", this.onPageTurning, this);
        this.updateChooseTip();
        this.updateBtnDisplayState();
    };
    MineSlider.prototype.hide = function () {
        this.ui.page_view.node.off("scrolling", this.onSliderScrolling, this);
        this.ui.page_view.node.off("page-turning", this.onPageTurning, this);
    };
    MineSlider.prototype.createSliderList = function (floorAsset, bodyAsset) {
        var state = this.getSliderState();
        if (state == 0) {
            var node = this.ui.node_item_main.children[0];
            this.items[0] = new MineSelectItem_1.MineSelectItem(node, 0, 0);
            this.items[0].play("ACTION");
            if (this.ui.label_intro_title) {
                this.ui.label_intro_title.string = "";
            }
            if (this.ui.label_intro_con) {
                var txtCode = this.type == 0 ? "T_002" : "T_001";
                this.ui.label_intro_con.string = "\n" + LangMng_1.default.getTxt(txtCode);
            }
            return;
        }
        var itemPrefab = AssetsMng_1.default.getAssets("cube_item");
        var sliderData = this.getListDate();
        for (var i = 0; i < sliderData.length; i++) {
            var sceneNode = this.ui.node_item_main.children[i];
            var node = sceneNode ? sceneNode : cc.instantiate(itemPrefab);
            var itemID = sliderData[i];
            var floorName = itemID > 0 ? floorAsset[i] : "empty";
            var bodyAssets = itemID > 0 ? AssetsMng_1.default.getAssets(bodyAsset[i] + ".spine") : null;
            this.ui.page_view.addPage(node);
            this.items[i] = new MineSelectItem_1.MineSelectItem(node, this.type, itemID, GameCenter_1.default.game.mineLevel[i], {
                floorName: floorName,
                bodyAssets: bodyAssets,
            });
        }
        this.layoutActive(false);
        this.ui.page_view.setCurrentPageIndex(this._currentPageIndex);
        this.updateItemIndex();
        this.onPageTurning();
    };
    MineSlider.prototype.updateCurrentPage = function () {
        this._prePageIndex = this._currentPageIndex;
        this._currentPageIndex = this.ui.page_view.getCurrentPageIndex();
        this.updateGameCenterData();
    };
    MineSlider.prototype.updateChooseTip = function () {
        var state = this.type == 0 ? GameCenter_1.default.game.hasPartner() : GameCenter_1.default.game.hasMine();
        var data = this.type == 0 ? GameCenter_1.default.cfgPartner[GameCenter_1.default.game.partnerSelectID] : GameCenter_1.default.cfgMine[GameCenter_1.default.game.mineSelectID];
        var str = data.name;
        if (state) {
            this.ui.sprite_choose_tip_img.spriteFrame = this.getChooseTipImg();
            this.ui.node_choose_tip_img.active = true;
            this.ui.node_choose_state.active = true;
            this.ui.label_choose_tip_title.string = str;
            this.ui.node_choose_tip_bg.color = new cc.Color(data.bgColor.r, data.bgColor.g, data.bgColor.b);
            this.ui.node_choose_tip_bg.opacity = 255;
        }
        else {
            this.ui.node_choose_tip_img.active = false;
            this.ui.node_choose_state.active = false;
            this.ui.label_choose_tip_title.string = "" + LangMng_1.default.getTxt("T_005");
            this.ui.node_choose_tip_bg.color = new cc.Color(0, 0, 0);
            this.ui.node_choose_tip_bg.opacity = 110;
        }
    };
    MineSlider.prototype.getChooseTipImg = function () {
        var img = null;
        switch (this.type) {
            case 0:
                img = GameCenter_1.default.getCurrentPartnerChooseIcon();
                break;
            case 1:
                img = GameCenter_1.default.getCurrentPetChooseIcon();
                break;
        }
        return img;
    };
    MineSlider.prototype.updateItemIndex = function () {
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].node.zIndex = this.items.length - i;
        }
    };
    MineSlider.prototype.updateItemSpinePos = function () {
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            var itemX = 0;
            var itemY = (i - this._currentPageIndex) * this.itemOffsetY;
            item.setSpineNodePosition(new cc.Vec2(itemX, itemY));
        }
    };
    MineSlider.prototype.updateItemAni = function () {
        if (this._prePageIndex >= 0 && this.items[this._prePageIndex]) {
            this.items[this._prePageIndex].play("IDLE");
        }
        if (this.items[this._currentPageIndex]) {
            this.items[this._currentPageIndex].play("ACTION");
        }
    };
    MineSlider.prototype.updateItemIntro = function () {
        var _this = this;
        if (!this.ui.node_intro_txt_group) {
            return;
        }
        var listCfgData = this.getCfgData();
        var data = listCfgData[this.items[this._currentPageIndex].id];
        if (this.ui.label_intro_title.string == data.name) {
            return;
        }
        this.ui.node_intro_txt_group.stopAllActions();
        this.ui.node_intro_txt_group.runAction(cc.sequence(cc.fadeOut(.1), cc.callFunc(function () {
            _this.ui.label_intro_title.string = data.name;
            _this.ui.label_intro_con.string = "\n" + data.intro;
            if (_this.type == 0) {
                if (GameCenter_1.default.game.mineList[_this.currentPageIndex] != 0) {
                    var itemLevel = GameCenter_1.default.game.mineLevel[_this.currentPageIndex];
                    _this.ui.label_intro_title.string += " (" + LangMng_1.default.getTxt("T_006") + itemLevel + ")";
                }
            }
        }), cc.delayTime(.1), cc.fadeIn(.15).easing(cc.easeSineOut())));
    };
    MineSlider.prototype.updateLevel = function () {
        var listCfgData = this.getCfgData();
        if (!this.items[this._currentPageIndex]) {
            return;
        }
        var data = listCfgData[this.items[this._currentPageIndex].id];
        this.ui.label_intro_title.string = data.name;
        if (this.type == 0) {
            if (GameCenter_1.default.game.mineList[this.currentPageIndex] != 0) {
                var itemLevel = GameCenter_1.default.game.mineLevel[this.currentPageIndex];
                this.ui.label_intro_title.string += " (" + LangMng_1.default.getTxt("T_006") + itemLevel + ")";
            }
        }
    };
    MineSlider.prototype.updateGameCenterData = function () {
        if (this.referenceMode) {
            return;
        }
        if (this.type == 0) {
            GameCenter_1.default.game.mineSelectID = this._currentPageIndex;
        }
        else if (this.type == 1) {
            GameCenter_1.default.game.partnerSelectID = this._currentPageIndex;
        }
    };
    MineSlider.prototype.getCfgData = function () {
        var data = null;
        switch (this.type) {
            case 0:
                data = GameCenter_1.default.cfgMine;
                break;
            case 1:
                data = GameCenter_1.default.cfgPartner;
                break;
        }
        return data;
    };
    MineSlider.prototype.onPageTurning = function () {
        this.updateCurrentPage();
        this.updateItemAni();
        this.updateItemSpinePos();
        this.updateItemIntro();
        this.updateBtnDisplayState();
        if (this.sliderPageCallBack) {
            this.sliderPageCallBack();
        }
    };
    MineSlider.prototype.updateBtnDisplayState = function () {
        if (GameCenter_1.default.game.canGo) {
            if (this.ui.node_btn_go_active) {
                this.ui.node_btn_go_active.active = true;
                this.ui.node_btn_go_normal.active = false;
            }
        }
        else {
            if (this.ui.node_btn_go_active) {
                this.ui.node_btn_go_active.active = false;
                this.ui.node_btn_go_normal.active = true;
            }
        }
    };
    MineSlider.prototype.updateSliderPage = function (e) {
        var nodeName = e.currentTarget.name;
        var goToPageIndex = nodeName == "arrow_right" ? this._currentPageIndex + 1 : this._currentPageIndex - 1;
        this.ui.page_view.scrollToPage(goToPageIndex, .3);
    };
    MineSlider.prototype.getSliderState = function () {
        var list = this.getListDate();
        for (var i = 0; i < list.length; i++) {
            if (list[i] == 1) {
                this.state = 1;
                break;
            }
        }
        return this.state;
    };
    MineSlider.prototype.getListDate = function () {
        var data = null;
        switch (this.type) {
            case 0:
                data = GameCenter_1.default.game.mineList;
                break;
            case 1:
                data = GameCenter_1.default.game.partnerList;
                break;
        }
        return data;
    };
    MineSlider.prototype.layoutActive = function (state) {
        if (state === void 0) { state = true; }
        this.ui.layout.updateLayout();
        this.ui.layout.enabled = state;
    };
    MineSlider.prototype.arrowBtnsBindOn = function () {
        this.ui.btn_slider_arrow_left.on('touchend', this.onArrowLeftClick, this);
        this.ui.btn_slider_arrow_right.on('touchend', this.onArrowRightClick, this);
    };
    MineSlider.prototype.arrowBtnsBindOff = function () {
        this.ui.btn_slider_arrow_left.off('touchend', this.onArrowLeftClick, this);
        this.ui.btn_slider_arrow_right.off('touchend', this.onArrowRightClick, this);
    };
    MineSlider.prototype.onSliderScrolling = function () {
        var layoutPos = this.ui.layout.node.getPosition();
        for (var i = 0; i < this.items.length; i++) {
            var dx = Math.abs(layoutPos.x) - Math.abs(this.layoutX) - (i * this.pageWidth);
            var cubeY = dx / this.cubeSizeProp;
            this.items[i].setSpineNodePosition(new cc.Vec2(0, -cubeY));
        }
    };
    MineSlider.prototype.onArrowLeftClick = function (e) {
        this.updateSliderPage(e);
    };
    MineSlider.prototype.onArrowRightClick = function (e) {
        this.updateSliderPage(e);
    };
    MineSlider.prototype.onBtnGoClick = function () {
        if (!GameCenter_1.default.game.canGo) {
            var txt = null;
            if (!GameCenter_1.default.game.hasMine()) {
                txt = LangMng_1.default.getTxt("T_003");
            }
            else if (!GameCenter_1.default.game.hasPartner()) {
                txt = LangMng_1.default.getTxt("T_004");
            }
            EventMng_1.default.emit(EventConst_1.MainEvent.MESSAGE_SHOW, {
                type: 2,
                content: LangMng_1.default.getTxt("" + txt),
                autoClose: true,
            });
            return;
        }
        ActionTransition_1.ActionTransition.btnBounce(this.ui.btn_go, function () {
            EventMng_1.default.emit(EventConst_1.MainEvent.MINE_CHANGE_REQ);
        });
    };
    Object.defineProperty(MineSlider.prototype, "prePageIndex", {
        get: function () {
            return this._prePageIndex;
        },
        set: function (value) {
            this._prePageIndex = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MineSlider.prototype, "currentPageIndex", {
        get: function () {
            return this._currentPageIndex;
        },
        set: function (value) {
            this._currentPageIndex = value;
        },
        enumerable: false,
        configurable: true
    });
    return MineSlider;
}());
exports.MineSlider = MineSlider;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcbWluZVxcbW5nXFxNaW5lU2xpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFrRDtBQUNsRCxvREFBK0M7QUFDL0Msd0RBQW1EO0FBQ25ELHNEQUFpRDtBQUNqRCxtREFBa0Q7QUFDbEQscUVBQW9FO0FBQ3BFLDZEQUEyRDtBQUUzRDtJQWlCSSxvQkFBWSxFQUFFLEVBQUUsSUFBWSxFQUFFLE1BQU87UUFmckMsT0FBRSxHQUFRLElBQUksQ0FBQztRQUNmLFVBQUssR0FBcUIsRUFBRSxDQUFDO1FBRTdCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsY0FBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixnQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUMxQixZQUFPLEdBQVcsQ0FBQyxHQUFHLENBQUM7UUFDdkIsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFFekIsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRWxCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDM0Isc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBSWxDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFakIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLG9CQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUV6RyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkIsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNULE9BQU87U0FDVjtRQUVELElBQUksTUFBTSxDQUFDLGFBQWEs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QUMsTUFBTSxFQUFFO1lBRXZDLGtCQUFRLENBQUMsSUFBSSxDQUFDLHNCQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFN0MsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsc0JBQUksb0NBQVk7YUFJaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQzthQU5ELFVBQWlCLEtBQWE7WUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSx3Q0FBZ0I7YUFJcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNsQyxDQUFDO2FBTkQsVUFBcUIsS0FBYTtZQUM5QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBTUwsaUJBQUM7QUFBRCxDQWxaQSxBQWtaQyxJQUFBO0FBbFpZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVDZW50ZXIgZnJvbSBcIi4uLy4uLy4uL2RhdGEvR2FtZUNlbnRlclwiO1xyXG5pbXBvcnQgTGFuZ01uZyBmcm9tIFwiLi4vLi4vLi4vbWFuYWdlci9MYW5nTW5nXCI7XHJcbmltcG9ydCBBc3NldHNNbmcgZnJvbSBcIi4uLy4uLy4uL21hbmFnZXIvQXNzZXRzTW5nXCI7XHJcbmltcG9ydCBFdmVudE1uZyBmcm9tIFwiLi4vLi4vLi4vbWFuYWdlci9FdmVudE1uZ1wiO1xyXG5pbXBvcnQgeyBNaW5lU2VsZWN0SXRlbSB9IGZyb20gXCIuL01pbmVTZWxlY3RJdGVtXCI7XHJcbmltcG9ydCB7IEFjdGlvblRyYW5zaXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL0FjdGlvblRyYW5zaXRpb25cIjtcclxuaW1wb3J0IHsgTWFpbkV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvY29uc3QvRXZlbnRDb25zdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1pbmVTbGlkZXIge1xyXG5cclxuICAgIHVpOiBhbnkgPSBudWxsO1xyXG4gICAgaXRlbXM6IE1pbmVTZWxlY3RJdGVtW10gPSBbXTtcclxuICAgIHR5cGU6IG51bWJlcjtcclxuICAgIHN0YXRlOiBudW1iZXIgPSAwO1xyXG4gICAgcGFnZVdpZHRoOiBudW1iZXIgPSAzMDA7XHJcbiAgICBpdGVtT2Zmc2V0WTogbnVtYmVyID0gMTUwO1xyXG4gICAgbGF5b3V0WDogbnVtYmVyID0gLTMzMztcclxuICAgIGN1YmVTaXplUHJvcDogbnVtYmVyID0gMDtcclxuXHJcbiAgICByZWZlcmVuY2VNb2RlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzbGlkZXJQYWdlQ2FsbEJhY2sgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgX3ByZVBhZ2VJbmRleDogbnVtYmVyID0gLTE7XHJcbiAgICBwcml2YXRlIF9jdXJyZW50UGFnZUluZGV4OiBudW1iZXIgPSAxO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHVpLCB0eXBlOiBudW1iZXIsIGNvbmZpZz8pIHtcclxuXHJcbiAgICAgICAgdGhpcy51aSA9IHVpO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcblxyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRQYWdlSW5kZXggPSB0aGlzLnR5cGUgPT0gMCA/IEdhbWVDZW50ZXIuZ2FtZS5taW5lU2VsZWN0SUQgOiBHYW1lQ2VudGVyLmdhbWUucGFydG5lclNlbGVjdElEO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUdhbWVDZW50ZXJEYXRhKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDaG9vc2VUaXAoKTtcclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5yZWZlcmVuY2VNb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmZXJlbmNlTW9kZSA9IGNvbmZpZy5yZWZlcmVuY2VNb2RlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5zbGlkZXJQYWdlQ2FsbEJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5zbGlkZXJQYWdlQ2FsbEJhY2sgPSBjb25maWcuc2xpZGVyUGFnZUNhbGxCYWNrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1YmVTaXplUHJvcCA9IHRoaXMucGFnZVdpZHRoIC8gdGhpcy5pdGVtT2Zmc2V0WTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNob29zZVRpcCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzaG93KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudWkucGFnZV92aWV3Lm5vZGUub24oXCJzY3JvbGxpbmdcIiwgdGhpcy5vblNsaWRlclNjcm9sbGluZywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51aS5wYWdlX3ZpZXcubm9kZS5vbihcInBhZ2UtdHVybmluZ1wiLCB0aGlzLm9uUGFnZVR1cm5pbmcsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2hvb3NlVGlwKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCdG5EaXNwbGF5U3RhdGUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaGlkZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpLnBhZ2Vfdmlldy5ub2RlLm9mZihcInNjcm9sbGluZ1wiLCB0aGlzLm9uU2xpZGVyU2Nyb2xsaW5nLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVpLnBhZ2Vfdmlldy5ub2RlLm9mZihcInBhZ2UtdHVybmluZ1wiLCB0aGlzLm9uUGFnZVR1cm5pbmcsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjcmVhdGVTbGlkZXJMaXN0KGZsb29yQXNzZXQsIGJvZHlBc3NldCk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLmdldFNsaWRlclN0YXRlKCk7XHJcblxyXG5cclxuICAgICAgICBpZiAoc3RhdGUgPT0gMCkge1xyXG5cclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnVpLm5vZGVfaXRlbV9tYWluLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zWzBdID0gbmV3IE1pbmVTZWxlY3RJdGVtKG5vZGUsMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbMF0ucGxheShcIkFDVElPTlwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVpLmxhYmVsX2ludHJvX3RpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpLmxhYmVsX2ludHJvX3RpdGxlLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVpLmxhYmVsX2ludHJvX2Nvbikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHR4dENvZGUgPSB0aGlzLnR5cGUgPT0gMCA/IFwiVF8wMDJcIiA6IFwiVF8wMDFcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMudWkubGFiZWxfaW50cm9fY29uLnN0cmluZyA9IGBcXG4ke0xhbmdNbmcuZ2V0VHh0KHR4dENvZGUpfWA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpdGVtUHJlZmFiID0gQXNzZXRzTW5nLmdldEFzc2V0cyhcImN1YmVfaXRlbVwiKTtcclxuXHJcbiAgICAgICAgbGV0IHNsaWRlckRhdGEgPSB0aGlzLmdldExpc3REYXRlKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXJEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzY2VuZU5vZGUgPSB0aGlzLnVpLm5vZGVfaXRlbV9tYWluLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHNjZW5lTm9kZSA/IHNjZW5lTm9kZSA6IGNjLmluc3RhbnRpYXRlKGl0ZW1QcmVmYWIpO1xyXG4gICAgICAgICAgICBsZXQgaXRlbUlEID0gc2xpZGVyRGF0YVtpXTtcclxuICAgICAgICAgICAgbGV0IGZsb29yTmFtZSA9IGl0ZW1JRCA+IDAgPyBmbG9vckFzc2V0W2ldIDogXCJlbXB0eVwiO1xyXG4gICAgICAgICAgICBsZXQgYm9keUFzc2V0cyA9IGl0ZW1JRCA+IDAgPyBBc3NldHNNbmcuZ2V0QXNzZXRzKGAke2JvZHlBc3NldFtpXX0uc3BpbmVgKTogbnVsbDtcclxuICAgICAgICAgICAgdGhpcy51aS5wYWdlX3ZpZXcuYWRkUGFnZShub2RlKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc1tpXSA9IG5ldyBNaW5lU2VsZWN0SXRlbShub2RlLCB0aGlzLnR5cGUsIGl0ZW1JRCwgR2FtZUNlbnRlci5nYW1lLm1pbmVMZXZlbFtpXSwge1xyXG4gICAgICAgICAgICAgICAgZmxvb3JOYW1lOiBmbG9vck5hbWUsXHJcbiAgICAgICAgICAgICAgICBib2R5QXNzZXRzOiBib2R5QXNzZXRzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubGF5b3V0QWN0aXZlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnVpLnBhZ2Vfdmlldy5zZXRDdXJyZW50UGFnZUluZGV4KHRoaXMuX2N1cnJlbnRQYWdlSW5kZXgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSXRlbUluZGV4KCk7XHJcbiAgICAgICAgdGhpcy5vblBhZ2VUdXJuaW5nKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUN1cnJlbnRQYWdlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3ByZVBhZ2VJbmRleCA9IHRoaXMuX2N1cnJlbnRQYWdlSW5kZXg7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFBhZ2VJbmRleCA9IHRoaXMudWkucGFnZV92aWV3LmdldEN1cnJlbnRQYWdlSW5kZXgoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUdhbWVDZW50ZXJEYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ2hvb3NlVGlwKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnR5cGUgPT0gMCA/IEdhbWVDZW50ZXIuZ2FtZS5oYXNQYXJ0bmVyKCkgOiBHYW1lQ2VudGVyLmdhbWUuaGFzTWluZSgpO1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy50eXBlID09IDAgPyBHYW1lQ2VudGVyLmNmZ1BhcnRuZXJbR2FtZUNlbnRlci5nYW1lLnBhcnRuZXJTZWxlY3RJRF0gOiBHYW1lQ2VudGVyLmNmZ01pbmVbR2FtZUNlbnRlci5nYW1lLm1pbmVTZWxlY3RJRF07XHJcbiAgICAgICAgbGV0IHN0ciA9IGRhdGEubmFtZTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXRlKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVpLnNwcml0ZV9jaG9vc2VfdGlwX2ltZy5zcHJpdGVGcmFtZSA9IHRoaXMuZ2V0Q2hvb3NlVGlwSW1nKCk7XHJcbiAgICAgICAgICAgIHRoaXMudWkubm9kZV9jaG9vc2VfdGlwX2ltZy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVpLm5vZGVfY2hvb3NlX3N0YXRlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudWkubGFiZWxfY2hvb3NlX3RpcF90aXRsZS5zdHJpbmcgPSBzdHI7XHJcbiAgICAgICAgICAgIHRoaXMudWkubm9kZV9jaG9vc2VfdGlwX2JnLmNvbG9yID0gbmV3IGNjLkNvbG9yKGRhdGEuYmdDb2xvci5yLCBkYXRhLmJnQ29sb3IuZywgZGF0YS5iZ0NvbG9yLmIpO1xyXG4gICAgICAgICAgICB0aGlzLnVpLm5vZGVfY2hvb3NlX3RpcF9iZy5vcGFjaXR5ID0gMjU1O1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVpLm5vZGVfY2hvb3NlX3RpcF9pbWcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudWkubm9kZV9jaG9vc2Vfc3RhdGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudWkubGFiZWxfY2hvb3NlX3RpcF90aXRsZS5zdHJpbmcgPSBgJHtMYW5nTW5nLmdldFR4dChcIlRfMDA1XCIpfWA7XHJcbiAgICAgICAgICAgIHRoaXMudWkubm9kZV9jaG9vc2VfdGlwX2JnLmNvbG9yID0gbmV3IGNjLkNvbG9yKDAsIDAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLnVpLm5vZGVfY2hvb3NlX3RpcF9iZy5vcGFjaXR5ID0gMTEwO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldENob29zZVRpcEltZygpOiBjYy5TcHJpdGVGcmFtZSB7XHJcblxyXG4gICAgICAgIGxldCBpbWcgPSBudWxsO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBpbWcgPSBHYW1lQ2VudGVyLmdldEN1cnJlbnRQYXJ0bmVyQ2hvb3NlSWNvbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGltZyA9IEdhbWVDZW50ZXIuZ2V0Q3VycmVudFBldENob29zZUljb24oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGltZztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSXRlbUluZGV4KCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zW2ldLm5vZGUuekluZGV4ID0gdGhpcy5pdGVtcy5sZW5ndGggLSBpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVJdGVtU3BpbmVQb3MoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtc1tpXTtcclxuICAgICAgICAgICAgbGV0IGl0ZW1YID0gMDtcclxuICAgICAgICAgICAgbGV0IGl0ZW1ZID0gKGkgLSB0aGlzLl9jdXJyZW50UGFnZUluZGV4KSAqIHRoaXMuaXRlbU9mZnNldFk7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0U3BpbmVOb2RlUG9zaXRpb24obmV3IGNjLlZlYzIoaXRlbVgsIGl0ZW1ZKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUl0ZW1BbmkoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9wcmVQYWdlSW5kZXggPj0gMCAmJiB0aGlzLml0ZW1zW3RoaXMuX3ByZVBhZ2VJbmRleF0pIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc1t0aGlzLl9wcmVQYWdlSW5kZXhdLnBsYXkoXCJJRExFXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbXNbdGhpcy5fY3VycmVudFBhZ2VJbmRleF0pIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc1t0aGlzLl9jdXJyZW50UGFnZUluZGV4XS5wbGF5KFwiQUNUSU9OXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSXRlbUludHJvKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMudWkubm9kZV9pbnRyb190eHRfZ3JvdXApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGxpc3RDZmdEYXRhID0gdGhpcy5nZXRDZmdEYXRhKCk7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBsaXN0Q2ZnRGF0YVt0aGlzLml0ZW1zW3RoaXMuX2N1cnJlbnRQYWdlSW5kZXhdLmlkXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudWkubGFiZWxfaW50cm9fdGl0bGUuc3RyaW5nID09IGRhdGEubmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVpLm5vZGVfaW50cm9fdHh0X2dyb3VwLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy51aS5ub2RlX2ludHJvX3R4dF9ncm91cC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLmZhZGVPdXQoLjEpLFxyXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpLmxhYmVsX2ludHJvX3RpdGxlLnN0cmluZyA9IGRhdGEubmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudWkubGFiZWxfaW50cm9fY29uLnN0cmluZyA9IGBcXG4ke2RhdGEuaW50cm99YDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChHYW1lQ2VudGVyLmdhbWUubWluZUxpc3RbdGhpcy5jdXJyZW50UGFnZUluZGV4XSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtTGV2ZWwgPSBHYW1lQ2VudGVyLmdhbWUubWluZUxldmVsW3RoaXMuY3VycmVudFBhZ2VJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWkubGFiZWxfaW50cm9fdGl0bGUuc3RyaW5nICs9IGAgKCR7TGFuZ01uZy5nZXRUeHQoXCJUXzAwNlwiKX0ke2l0ZW1MZXZlbH0pYDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoLjEpLFxyXG4gICAgICAgICAgICBjYy5mYWRlSW4oLjE1KS5lYXNpbmcoY2MuZWFzZVNpbmVPdXQoKSlcclxuICAgICAgICApKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZUxldmVsKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBsaXN0Q2ZnRGF0YSA9IHRoaXMuZ2V0Q2ZnRGF0YSgpO1xyXG4gICAgICAgIGlmICghdGhpcy5pdGVtc1t0aGlzLl9jdXJyZW50UGFnZUluZGV4XSkgeyByZXR1cm47IH1cclxuICAgICAgICBsZXQgZGF0YSA9IGxpc3RDZmdEYXRhW3RoaXMuaXRlbXNbdGhpcy5fY3VycmVudFBhZ2VJbmRleF0uaWRdO1xyXG4gICAgICAgIHRoaXMudWkubGFiZWxfaW50cm9fdGl0bGUuc3RyaW5nID0gZGF0YS5uYW1lO1xyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoR2FtZUNlbnRlci5nYW1lLm1pbmVMaXN0W3RoaXMuY3VycmVudFBhZ2VJbmRleF0gIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1MZXZlbCA9IEdhbWVDZW50ZXIuZ2FtZS5taW5lTGV2ZWxbdGhpcy5jdXJyZW50UGFnZUluZGV4XTtcclxuICAgICAgICAgICAgICAgIHRoaXMudWkubGFiZWxfaW50cm9fdGl0bGUuc3RyaW5nICs9IGAgKCR7TGFuZ01uZy5nZXRUeHQoXCJUXzAwNlwiKX0ke2l0ZW1MZXZlbH0pYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVHYW1lQ2VudGVyRGF0YSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmVmZXJlbmNlTW9kZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy50eXBlID09IDApIHtcclxuICAgICAgICAgICAgR2FtZUNlbnRlci5nYW1lLm1pbmVTZWxlY3RJRCA9IHRoaXMuX2N1cnJlbnRQYWdlSW5kZXg7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICBHYW1lQ2VudGVyLmdhbWUucGFydG5lclNlbGVjdElEID0gdGhpcy5fY3VycmVudFBhZ2VJbmRleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldENmZ0RhdGEoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGxldCBkYXRhID0gbnVsbDtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgZGF0YSA9IEdhbWVDZW50ZXIuY2ZnTWluZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gR2FtZUNlbnRlci5jZmdQYXJ0bmVyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25QYWdlVHVybmluZygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50UGFnZSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSXRlbUFuaSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSXRlbVNwaW5lUG9zKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJdGVtSW50cm8oKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJ0bkRpc3BsYXlTdGF0ZSgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zbGlkZXJQYWdlQ2FsbEJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5zbGlkZXJQYWdlQ2FsbEJhY2soKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUJ0bkRpc3BsYXlTdGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoR2FtZUNlbnRlci5nYW1lLmNhbkdvKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVpLm5vZGVfYnRuX2dvX2FjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51aS5ub2RlX2J0bl9nb19hY3RpdmUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudWkubm9kZV9idG5fZ29fbm9ybWFsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudWkubm9kZV9idG5fZ29fYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpLm5vZGVfYnRuX2dvX2FjdGl2ZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudWkubm9kZV9idG5fZ29fbm9ybWFsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU2xpZGVyUGFnZShlKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG5vZGVOYW1lID0gZS5jdXJyZW50VGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgbGV0IGdvVG9QYWdlSW5kZXggPSBub2RlTmFtZSA9PSBcImFycm93X3JpZ2h0XCIgPyB0aGlzLl9jdXJyZW50UGFnZUluZGV4ICsgMSA6IHRoaXMuX2N1cnJlbnRQYWdlSW5kZXggLSAxO1xyXG4gICAgICAgIHRoaXMudWkucGFnZV92aWV3LnNjcm9sbFRvUGFnZShnb1RvUGFnZUluZGV4LCAuMyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2xpZGVyU3RhdGUoKTogbnVtYmVyIHtcclxuXHJcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLmdldExpc3REYXRlKCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAobGlzdFtpXSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaXN0RGF0ZSgpOiBudW1iZXJbXSB7XHJcblxyXG4gICAgICAgIGxldCBkYXRhID0gbnVsbDtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgZGF0YSA9IEdhbWVDZW50ZXIuZ2FtZS5taW5lTGlzdDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gR2FtZUNlbnRlci5nYW1lLnBhcnRuZXJMaXN0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBsYXlvdXRBY3RpdmUoc3RhdGU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51aS5sYXlvdXQudXBkYXRlTGF5b3V0KCk7XHJcbiAgICAgICAgdGhpcy51aS5sYXlvdXQuZW5hYmxlZCA9IHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGFycm93QnRuc0JpbmRPbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpLmJ0bl9zbGlkZXJfYXJyb3dfbGVmdC5vbigndG91Y2hlbmQnLCB0aGlzLm9uQXJyb3dMZWZ0Q2xpY2ssIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWkuYnRuX3NsaWRlcl9hcnJvd19yaWdodC5vbigndG91Y2hlbmQnLCB0aGlzLm9uQXJyb3dSaWdodENsaWNrLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhcnJvd0J0bnNCaW5kT2ZmKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudWkuYnRuX3NsaWRlcl9hcnJvd19sZWZ0Lm9mZigndG91Y2hlbmQnLCB0aGlzLm9uQXJyb3dMZWZ0Q2xpY2ssIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWkuYnRuX3NsaWRlcl9hcnJvd19yaWdodC5vZmYoJ3RvdWNoZW5kJywgdGhpcy5vbkFycm93UmlnaHRDbGljaywgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TbGlkZXJTY3JvbGxpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGxheW91dFBvcyA9IHRoaXMudWkubGF5b3V0Lm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGR4ID0gTWF0aC5hYnMobGF5b3V0UG9zLngpIC0gTWF0aC5hYnModGhpcy5sYXlvdXRYKSAtIChpICogdGhpcy5wYWdlV2lkdGgpO1xyXG4gICAgICAgICAgICBsZXQgY3ViZVkgPSBkeCAvIHRoaXMuY3ViZVNpemVQcm9wO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zW2ldLnNldFNwaW5lTm9kZVBvc2l0aW9uKG5ldyBjYy5WZWMyKDAsIC1jdWJlWSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkFycm93TGVmdENsaWNrKGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNsaWRlclBhZ2UoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25BcnJvd1JpZ2h0Q2xpY2soZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2xpZGVyUGFnZShlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkdvQ2xpY2soKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICghR2FtZUNlbnRlci5nYW1lLmNhbkdvKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdHh0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmICghR2FtZUNlbnRlci5nYW1lLmhhc01pbmUoKSkge1xyXG4gICAgICAgICAgICAgICAgdHh0ID0gTGFuZ01uZy5nZXRUeHQoXCJUXzAwM1wiKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghR2FtZUNlbnRlci5nYW1lLmhhc1BhcnRuZXIoKSkge1xyXG4gICAgICAgICAgICAgICAgdHh0ID0gTGFuZ01uZy5nZXRUeHQoXCJUXzAwNFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgRXZlbnRNbmcuZW1pdChNYWluRXZlbnQuTUVTU0FHRV9TSE9XLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAyLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogTGFuZ01uZy5nZXRUeHQoYCR7dHh0fWApLFxyXG4gICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEFjdGlvblRyYW5zaXRpb24uYnRuQm91bmNlKHRoaXMudWkuYnRuX2dvLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBFdmVudE1uZy5lbWl0KE1haW5FdmVudC5NSU5FX0NIQU5HRV9SRVEpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHByZVBhZ2VJbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcHJlUGFnZUluZGV4ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByZVBhZ2VJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcmVQYWdlSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGN1cnJlbnRQYWdlSW5kZXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRQYWdlSW5kZXggPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY3VycmVudFBhZ2VJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50UGFnZUluZGV4O1xyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/mine/mng/MineSelectItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '53216EY6MZCD467i9KzmUsg', 'MineSelectItem');
// script/controllers/mine/mng/MineSelectItem.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MineSelectItem = void 0;
var GameCenter_1 = require("../../../data/GameCenter");
var MineSelectItem = /** @class */ (function () {
    function MineSelectItem(node, type, itemID, itemLevel, config) {
        if (type === void 0) { type = 0; }
        if (itemID === void 0) { itemID = 0; }
        if (itemLevel === void 0) { itemLevel = 0; }
        this.id = 0;
        this.skinID = 0;
        this.level = 0;
        this.size = {
            w: 666,
            h: 600
        };
        this.floorName = "empty";
        this.node = node;
        this.node_spine_box = this.node.getChildByName("spine");
        this.spine_body = this.node_spine_box.getChildByName("body").getComponent(sp.Skeleton);
        this.spine_floor = this.node_spine_box.getChildByName("floor").getComponent(sp.Skeleton);
        this.id = itemID;
        this.type = type;
        this.level = itemLevel;
        if (config) {
            if (config.floorName) {
                this.floorName = config.floorName;
            }
            if (config.bodyAssets) {
                this.setBodySpineAssets(config.bodyAssets);
            }
        }
        this.init();
    }
    MineSelectItem.prototype.init = function () {
        this.setSkin();
        this.play("IDLE");
    };
    MineSelectItem.prototype.play = function (aniName) {
        this.bodyPlay(aniName);
        this.floorPlay(aniName);
    };
    MineSelectItem.prototype.bodyPlay = function (aniName) {
        if (aniName == "IDLE") {
            this.spine_body.setAnimation(0, "select_idle", true);
        }
        else if (aniName == "ACTION") {
            this.spine_body.setAnimation(0, "select_act", true);
        }
    };
    MineSelectItem.prototype.floorPlay = function (aniName) {
        if (!this.spine_floor) {
            return;
        }
        if (aniName == "IDLE") {
            this.spine_floor.setAnimation(0, "" + this.floorName, true);
        }
        else if (aniName == "ACTION") {
            var actionAniName = this.floorName == "empty" ? this.floorName + "_act" : this.floorName;
            this.spine_floor.setAnimation(0, actionAniName, true);
        }
    };
    MineSelectItem.prototype.setSkin = function (id) {
        if (this.type > 0) {
            return;
        }
        this.spine_body.setSkin(GameCenter_1.default.game.getPetBodySkinName(id));
    };
    MineSelectItem.prototype.upgradeSuccess = function (id, level) {
        this.setLevel(id, level);
        var spine = this.spine_body;
        spine.setAnimation(0, "lv_success", false);
        spine.addAnimation(0, "idle", true);
    };
    MineSelectItem.prototype.upgradeFail = function () {
        var spine = this.spine_body;
        spine.setAnimation(0, "lv_fail", false);
        spine.addAnimation(0, "idle", true);
    };
    MineSelectItem.prototype.setLevel = function (id, val) {
        this.level = val;
        this.setSkin(id);
    };
    MineSelectItem.prototype.setSpineNodePosition = function (pos) {
        this.node_spine_box.setPosition(pos);
    };
    MineSelectItem.prototype.setBodySpineAssets = function (assets) {
        this.spine_body.skeletonData = assets;
    };
    return MineSelectItem;
}());
exports.MineSelectItem = MineSelectItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcbWluZVxcbW5nXFxNaW5lU2VsZWN0SXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBa0Q7QUFFbEQ7SUFtQkksd0JBQVksSUFBYSxFQUFFLElBQWdCLEVBQUUsTUFBa0IsRUFBRSxTQUFxQixFQUFFLE1BQU87UUFBcEUscUJBQUEsRUFBQSxRQUFnQjtRQUFFLHVCQUFBLEVBQUEsVUFBa0I7UUFBRSwwQkFBQSxFQUFBLGFBQXFCO1FBWHRGLE9BQUUsR0FBVyxDQUFDLENBQUM7UUFFZixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsU0FBSSxHQUFXO1lBQ1gsQ0FBQyxFQUFHLEdBQUc7WUFDUCxDQUFDLEVBQUUsR0FBRztTQUNULENBQUM7UUFFRixjQUFTLEdBQVcsT0FBTyxDQUFDO1FBSXhCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV6RixJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUV2QixJQUFJLE1BQU0sRUFBRTtZQUVSLElBQUksTUFB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Q0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCw2Q0FBb0IsR0FBcEIsVUFBcUIsR0FBWTtRQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsMkNBQWtCLEdBQWxCLFVBQW1CLE1BQU07UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO0lBQzFDLENBQUM7SUFFTCxxQkFBQztBQUFELENBakhBLEFBaUhDLElBQUE7QUFqSFksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUNlbnRlciBmcm9tIFwiLi4vLi4vLi4vZGF0YS9HYW1lQ2VudGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWluZVNlbGVjdEl0ZW0ge1xyXG5cclxuICAgIG5vZGU6IGNjLk5vZGU7XHJcbiAgICBub2RlX3NwaW5lX2JveDogY2MuTm9kZTtcclxuXHJcbiAgICBzcGluZV9ib2R5OiBzcC5Ta2VsZXRvbjtcclxuICAgIHNwaW5lX2Zsb29yOiBzcC5Ta2VsZXRvbjtcclxuXHJcbiAgICBpZDogbnVtYmVyID0gMDtcclxuICAgIHR5cGU6IG51bWJlcjtcclxuICAgIHNraW5JRDogbnVtYmVyID0gMDtcclxuICAgIGxldmVsOiBudW1iZXIgPSAwO1xyXG4gICAgc2l6ZTogb2JqZWN0ID0ge1xyXG4gICAgICAgIHc6ICA2NjYsXHJcbiAgICAgICAgaDogNjAwXHJcbiAgICB9O1xyXG5cclxuICAgIGZsb29yTmFtZTogc3RyaW5nID0gXCJlbXB0eVwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5vZGU6IGNjLk5vZGUsIHR5cGU6IG51bWJlciA9IDAsIGl0ZW1JRDogbnVtYmVyID0gMCwgaXRlbUxldmVsOiBudW1iZXIgPSAwLCBjb25maWc/KSB7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XHJcbiAgICAgICAgdGhpcy5ub2RlX3NwaW5lX2JveCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwaW5lXCIpO1xyXG4gICAgICAgIHRoaXMuc3BpbmVfYm9keSA9IHRoaXMubm9kZV9zcGluZV9ib3guZ2V0Q2hpbGRCeU5hbWUoXCJib2R5XCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgdGhpcy5zcGluZV9mbG9vciA9IHRoaXMubm9kZV9zcGluZV9ib3guZ2V0Q2hpbGRCeU5hbWUoXCJmbG9vclwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG5cclxuICAgICAgICB0aGlzLmlkID0gaXRlbUlEO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IGl0ZW1MZXZlbDtcclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZykge1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5mbG9vck5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmxvb3JOYW1lID0gY29uZmlnLmZsb29yTmFtZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5ib2R5QXNzZXRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEJvZHlTcGluZUFzc2V0cyhjb25maWcuYm9keUFzc2V0cyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldFNraW4oKTtcclxuICAgICAgICB0aGlzLnBsYXkoXCJJRExFXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwbGF5KGFuaU5hbWU6U3RyaW5nKSA6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYm9keVBsYXkoYW5pTmFtZSk7XHJcbiAgICAgICAgdGhpcy5mbG9vclBsYXkoYW5pTmFtZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGJvZHlQbGF5KGFuaU5hbWUpOiB2b2lkIHtcclxuICAgICAgICBpZiAoYW5pTmFtZSA9PSBcIklETEVcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNwaW5lX2JvZHkuc2V0QW5pbWF0aW9uKDAsIGBzZWxlY3RfaWRsZWAsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYW5pTmFtZSA9PSBcIkFDVElPTlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BpbmVfYm9keS5zZXRBbmltYXRpb24oMCwgYHNlbGVjdF9hY3RgLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmxvb3JQbGF5KGFuaU5hbWUpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnNwaW5lX2Zsb29yKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBpZiAoYW5pTmFtZSA9PSBcIklETEVcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNwaW5lX2Zsb29yLnNldEFuaW1hdGlvbigwLCBgJHt0aGlzLmZsb29yTmFtZX1gLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGFuaU5hbWUgPT0gXCJBQ1RJT05cIikge1xyXG4gICAgICAgICAgICBsZXQgYWN0aW9uQW5pTmFtZSA9IHRoaXMuZmxvb3JOYW1lID09IFwiZW1wdHlcIiA/IGAke3RoaXMuZmxvb3JOYW1lfV9hY3RgIDogdGhpcy5mbG9vck5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3BpbmVfZmxvb3Iuc2V0QW5pbWF0aW9uKDAsIGFjdGlvbkFuaU5hbWUsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2tpbihpZD8pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zcGluZV9ib2R5LnNldFNraW4oR2FtZUNlbnRlci5nYW1lLmdldFBldEJvZHlTa2luTmFtZShpZCkpO1xyXG5cclxuICAgIH1cclxuICAgIHVwZ3JhZGVTdWNjZXNzKGlkOiBudW1iZXIsIGxldmVsOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldExldmVsKGlkLCBsZXZlbCk7XHJcbiAgICAgICAgbGV0IHNwaW5lID0gIHRoaXMuc3BpbmVfYm9keTtcclxuICAgICAgICBzcGluZS5zZXRBbmltYXRpb24oMCwgYGx2X3N1Y2Nlc3NgLCBmYWxzZSk7XHJcbiAgICAgICAgc3BpbmUuYWRkQW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGdyYWRlRmFpbCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc3BpbmUgPSAgdGhpcy5zcGluZV9ib2R5O1xyXG4gICAgICAgIHNwaW5lLnNldEFuaW1hdGlvbigwLCBgbHZfZmFpbGAsIGZhbHNlKTtcclxuICAgICAgICBzcGluZS5hZGRBbmltYXRpb24oMCwgYGlkbGVgLCB0cnVlKTtcclxuICAgIH1cclxuICAgIHNldExldmVsKGlkLCB2YWw6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSB2YWw7XHJcbiAgICAgICAgdGhpcy5zZXRTa2luKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTcGluZU5vZGVQb3NpdGlvbihwb3M6IGNjLlZlYzIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGVfc3BpbmVfYm94LnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Qm9keVNwaW5lQXNzZXRzKGFzc2V0cyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3BpbmVfYm9keS5za2VsZXRvbkRhdGEgPSBhc3NldHM7XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/scene/MainGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d49ey3UNdNHILW3a7N49Vl', 'MainGame');
// script/controllers/scene/MainGame.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var GameController_1 = require("../../GameController");
var GameCenter_1 = require("../../data/GameCenter");
var EventMng_1 = require("../../manager/EventMng");
var LangMng_1 = require("../../manager/LangMng");
var EventConst_1 = require("../../data/const/EventConst");
var ViewZorder_1 = require("../../data/const/ViewZorder");
var DataGame_1 = require("../../data/scene/DataGame");
var MineMng_1 = require("../mine/MineMng");
var MineCollect_1 = require("../mine/MineCollect");
var UIBase_1 = require("../ui/UIBase");
var UIHelp_1 = require("../ui/UIHelp");
var UIInfo_1 = require("../ui/UIInfo");
var UILoading_1 = require("../ui/UILoading");
var UILoadTip_1 = require("../ui/UILoadTip");
var UIUpgradePanel_1 = require("../ui/UIUpgradePanel");
var UISkinPop_1 = require("../ui/UISkinPop");
var ccclass = cc._decorator.ccclass;
var MainGame = /** @class */ (function (_super) {
    __extends(MainGame, _super);
    function MainGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui = null;
        _this.pages = [];
        _this._prePageIndex = -1;
        _this._currentPageIndex = 0;
        return _this;
    }
    MainGame.prototype.onUILoad = function () {
        this.ui = this.node.addComponent(DataGame_1.default);
        this.mineMng = this.ui.mine_mng_holder.addComponent(MineMng_1.default);
        this.mineCollect = this.ui.mine_holder.addComponent(MineCollect_1.default);
        this.upgradePanel = this.ui.upgrade_holder.addComponent(UIUpgradePanel_1.default);
        this.infoPop = this.ui.info_pop_holder.addComponent(UIInfo_1.default);
        this.loadTip = this.ui.load_tip.addComponent(UILoadTip_1.default);
        this.skinPop = this.ui.skin_pop_holder.addComponent(UISkinPop_1.default);
        this.viewInit();
    };
    MainGame.prototype.onShow = function () {
        this.initEvent(EventConst_1.MainEvent.ENTER_MINE_COLLECT, this.onEnterMineCollect);
        this.initEvent(EventConst_1.MainEvent.ENTER_MINE_MNG, this.onEnterMineMng);
        this.initEvent(EventConst_1.MainEvent.MESSAGE_SHOW, this.onMessageShow);
        this.initEvent(EventConst_1.MainEvent.PET_UPGRADE_REQ, this.onPetUpgradeReq);
        this.initEvent(EventConst_1.MainEvent.PET_UPGRADE, this.onPetUpgrade);
        this.initEvent(EventConst_1.MainEvent.OPEN_SKIN_POP_REQ, this.onOpenSkinPopReq);
        this.initEvent(EventConst_1.MainEvent.OPEN_SKIN_POP, this.onOpenSkinPop);
        this.initEvent(EventConst_1.MainEvent.MINE_CHANGE_REQ, this.onMineChangeReq);
        this.onRegisterEvent(this.ui.btn_close, this.onBtnCloseClick, this);
        this.onRegisterEvent(this.ui.btn_info, this.onBtnInfoClick, this);
        UIHelp_1.default.HideUI(UILoading_1.default);
        this.switchPage(false);
    };
    MainGame.prototype.viewInit = function () {
        this.btnsSetZIndex();
        this.createPages();
        this.setVecStr();
    };
    MainGame.prototype.createPages = function () {
        this.pages.push(this.mineMng);
        this.pages.push(this.mineCollect);
    };
    MainGame.prototype.switchPage = function (aniState) {
        if (this.prePageIndex == this.currentPageIndex) {
            return;
        }
        if (this._prePageIndex != -1) {
            this.pages[this.prePageIndex].hide(aniState);
        }
        this.pages[this.currentPageIndex].show(aniState);
    };
    MainGame.prototype.btnsSetZIndex = function () {
        var val = ViewZorder_1.ViewZorder.Btn;
        this.ui.btn_close.zIndex = val;
        this.ui.btn_info.zIndex = val;
    };
    MainGame.prototype.btnClosePosReset = function (pageIndex) {
        var pos = cc.v2();
        switch (pageIndex) {
            case 0:
                pos = cc.v2(279, 495);
                break;
            case 1:
                pos = cc.v2(279, 590);
                break;
        }
        this.ui.btn_close.setPosition(pos);
    };
    MainGame.prototype.btnInfoPosReset = function (pageIndex) {
        var pos = cc.v2();
        switch (pageIndex) {
            case 0:
                pos = cc.v2(185, 495);
                break;
            case 1:
                pos = cc.v2(185, 590);
                break;
        }
        this.ui.btn_info.setPosition(pos);
    };
    MainGame.prototype.onPageSwitch = function (pageIndex) {
        this.prePageIndex = this.currentPageIndex;
        this.currentPageIndex = pageIndex;
        this.switchPage(true);
        this.btnClosePosReset(pageIndex);
        this.btnInfoPosReset(pageIndex);
    };
    MainGame.prototype.onEnterMineCollect = function (msg) {
        this.loadTip.hide();
        if (msg.state == 0) {
            this.onPageSwitch(1);
            this.mineCollect.collectGeneral.updateMine();
        }
        else {
            this.onMessageShow({
                type: 2,
                content: LangMng_1.default.getTxt("S_9102"),
                autoClose: true
            });
        }
    };
    MainGame.prototype.onEnterMineMng = function () {
        this.onPageSwitch(0);
    };
    MainGame.prototype.onMessageShow = function (config) {
        UIHelp_1.default.ShowDialog(config);
    };
    MainGame.prototype.onBtnCloseClick = function () {
        GameController_1.default.net.send("close", null);
    };
    MainGame.prototype.onBtnInfoClick = function () {
        this.infoPop.show();
    };
    MainGame.prototype.onMineChangeReq = function () {
        this.loadTip.show();
        GameController_1.default.net.send("use", {
            petID: GameCenter_1.default.game.mineSelectID,
            elfID: GameCenter_1.default.game.partnerSelectID,
        });
    };
    MainGame.prototype.onPetUpgradeReq = function (data) {
        this.loadTip.show();
        GameController_1.default.net.send("upgrade", {
            petID: data.id,
        });
    };
    MainGame.prototype.onPetUpgrade = function (msg) {
        var _this = this;
        this.loadTip.hide();
        var state = msg.isUpgrade;
        switch (state) {
            case 0:
            case 1:
                this.upgradePanel.show(msg.petID);
                var timer_1 = setTimeout(function () {
                    _this.upgradePanel.hide(function () {
                        EventMng_1.default.emit("PET_UPGRADE_CHANGE", {
                            state: state,
                            id: msg.petID,
                        });
                    });
                    clearTimeout(timer_1);
                }, 3000);
                break;
            case 2:
                this.onUpgradeError("T_108");
                break;
            case 3:
                this.onUpgradeError("T_109");
                break;
            case 4:
                this.onUpgradeError("T_107");
                break;
        }
        GameCenter_1.default.game.mineLevel[msg.petID] = msg.level;
        this.mineMng.con.page1.slider.items[msg.petID].setLevel(msg.petID, msg.level);
    };
    MainGame.prototype.onUpgradeError = function (str) {
        EventMng_1.default.emit(EventConst_1.MainEvent.MESSAGE_SHOW, {
            type: 2,
            content: LangMng_1.default.getTxt(str),
            autoClose: true,
        });
    };
    MainGame.prototype.onOpenSkinPopReq = function (msg) {
        GameController_1.default.net.send("getbag", {
            petID: msg.id,
            bag: "skin",
        });
    };
    MainGame.prototype.onOpenSkinPop = function (msg) {
        this.skinPop.show(msg);
    };
    Object.defineProperty(MainGame.prototype, "currentPageIndex", {
        get: function () {
            return this._currentPageIndex;
        },
        set: function (value) {
            this._currentPageIndex = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainGame.prototype, "prePageIndex", {
        get: function () {
            return this._prePageIndex;
        },
        set: function (value) {
            this._prePageIndex = value;
        },
        enumerable: false,
        configurable: true
    });
    MainGame.prototype.setVecStr = function () {
        this.ui.ver_str.node.zIndex = ViewZorder_1.ViewZorder.Btn;
        this.ui.ver_str.string = "v1.0.1";
    };
    MainGame = __decorate([
        ccclass
    ], MainGame);
    return MainGame;
}(UIBase_1.default));
exports.default = MainGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcc2NlbmVcXE1haW5HYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFrRDtBQUNsRCxvREFBK0M7QUFDL0MsbURBQThDO0FBQzlDLGlEQUE0QztBQUM1QywwREFBd0Q7QUFDeEQsMERBQXlEO0FBQ3pELHNEQUFpRDtBQUNqRCwyQ0FBc0M7QUFDdEMsbURBQThDO0FBQzlDLHVDQUFrQztBQUNsQyx1Q0FBa0M7QUFDbEMsdUNBQWtDO0FBQ2xDLDZDQUF3QztBQUN4Qyw2Q0FBd0M7QUFDeEMsdURBQWtEO0FBQ2xELDZDQUF3QztBQUVoQyxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUdsQztJQUFzQyw0QkFBTTtJQUE1QztRQUFBLHFFQTBPQztRQXpPRyxRQUFFLEdBQWEsSUFBSSxDQUFDO1FBT1osV0FBSyxHQUFVLEVBQUUsQ0FBQztRQUNsQixtQkFBYSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzNCLHVCQUFpQixHQUFXLENBQUMsQ0FBQzs7SUFnTzFDLENBQUM7SUE5TkcsMkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLGlCQUFPLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsd0JBQWMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxP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QztRQUNuQyxDQUFDOzs7T0FSQTtJQUVELHNCQUFJLGtDQUFZO2FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7YUFNRCxVQUFpQixLQUFhO1lBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7OztPQVJBO0lBVUQsNEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsdUJBQVUsQ0FBQyxHQUFHLENBQUM7UUFDN0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztJQUN0QyxDQUFDO0lBeE9nQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBME81QjtJQUFELGVBQUM7Q0ExT0QsQUEwT0MsQ0ExT3FDLGdCQUFNLEdBME8zQztrQkExT29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4uLy4uL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBHYW1lQ2VudGVyIGZyb20gXCIuLi8uLi9kYXRhL0dhbWVDZW50ZXJcIjtcclxuaW1wb3J0IEV2ZW50TW5nIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0V2ZW50TW5nXCI7XHJcbmltcG9ydCBMYW5nTW5nIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0xhbmdNbmdcIjtcclxuaW1wb3J0IHsgTWFpbkV2ZW50IH0gZnJvbSBcIi4uLy4uL2RhdGEvY29uc3QvRXZlbnRDb25zdFwiO1xyXG5pbXBvcnQgeyBWaWV3Wm9yZGVyIH0gZnJvbSBcIi4uLy4uL2RhdGEvY29uc3QvVmlld1pvcmRlclwiO1xyXG5pbXBvcnQgRGF0YUdhbWUgZnJvbSBcIi4uLy4uL2RhdGEvc2NlbmUvRGF0YUdhbWVcIjtcclxuaW1wb3J0IE1pbmVNbmcgZnJvbSBcIi4uL21pbmUvTWluZU1uZ1wiO1xyXG5pbXBvcnQgTWluZUNvbGxlY3QgZnJvbSBcIi4uL21pbmUvTWluZUNvbGxlY3RcIjtcclxuaW1wb3J0IFVJQmFzZSBmcm9tIFwiLi4vdWkvVUlCYXNlXCI7XHJcbmltcG9ydCBVSUhlbHAgZnJvbSBcIi4uL3VpL1VJSGVscFwiO1xyXG5pbXBvcnQgVUlJbmZvIGZyb20gXCIuLi91aS9VSUluZm9cIjtcclxuaW1wb3J0IFVJTG9hZGluZyBmcm9tIFwiLi4vdWkvVUlMb2FkaW5nXCI7XHJcbmltcG9ydCBVSUxvYWRUaXAgZnJvbSBcIi4uL3VpL1VJTG9hZFRpcFwiO1xyXG5pbXBvcnQgVUlVcGdyYWRlUGFuZWwgZnJvbSBcIi4uL3VpL1VJVXBncmFkZVBhbmVsXCI7XHJcbmltcG9ydCBVSVNraW5Qb3AgZnJvbSBcIi4uL3VpL1VJU2tpblBvcFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbkdhbWUgZXh0ZW5kcyBVSUJhc2Uge1xyXG4gICAgdWk6IERhdGFHYW1lID0gbnVsbDtcclxuICAgIG1pbmVNbmc6IE1pbmVNbmc7XHJcbiAgICBtaW5lQ29sbGVjdDogTWluZUNvbGxlY3Q7XHJcbiAgICBsb2FkVGlwOiBVSUxvYWRUaXA7XHJcbiAgICB1cGdyYWRlUGFuZWw6IFVJVXBncmFkZVBhbmVsO1xyXG4gICAgaW5mb1BvcDogVUlJbmZvO1xyXG4gICAgc2tpblBvcDogVUlTa2luUG9wO1xyXG4gICAgcHJpdmF0ZSBwYWdlczogYW55W10gPSBbXTtcclxuICAgIHByaXZhdGUgX3ByZVBhZ2VJbmRleDogbnVtYmVyID0gLTE7XHJcbiAgICBwcml2YXRlIF9jdXJyZW50UGFnZUluZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uVUlMb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudWkgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KERhdGFHYW1lKTtcclxuICAgICAgICB0aGlzLm1pbmVNbmcgPSB0aGlzLnVpLm1pbmVfbW5nX2hvbGRlci5hZGRDb21wb25lbnQoTWluZU1uZyk7XHJcbiAgICAgICAgdGhpcy5taW5lQ29sbGVjdCA9IHRoaXMudWkubWluZV9ob2xkZXIuYWRkQ29tcG9uZW50KE1pbmVDb2xsZWN0KTtcclxuICAgICAgICB0aGlzLnVwZ3JhZGVQYW5lbCA9IHRoaXMudWkudXBncmFkZV9ob2xkZXIuYWRkQ29tcG9uZW50KFVJVXBncmFkZVBhbmVsKTtcclxuICAgICAgICB0aGlzLmluZm9Qb3AgPSB0aGlzLnVpLmluZm9fcG9wX2hvbGRlci5hZGRDb21wb25lbnQoVUlJbmZvKTtcclxuICAgICAgICB0aGlzLmxvYWRUaXAgPSB0aGlzLnVpLmxvYWRfdGlwLmFkZENvbXBvbmVudChVSUxvYWRUaXApO1xyXG4gICAgICAgIHRoaXMuc2tpblBvcCA9IHRoaXMudWkuc2tpbl9wb3BfaG9sZGVyLmFkZENvbXBvbmVudChVSVNraW5Qb3ApO1xyXG4gICAgICAgIHRoaXMudmlld0luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoTWFpbkV2ZW50LkVOVEVSX01JTkVfQ09MTEVDVCwgdGhpcy5vbkVudGVyTWluZUNvbGxlY3QpO1xyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KE1haW5FdmVudC5FTlRFUl9NSU5FX01ORywgdGhpcy5vbkVudGVyTWluZU1uZyk7XHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoTWFpbkV2ZW50Lk1FU1NBR0VfU0hPVywgdGhpcy5vbk1lc3NhZ2VTaG93KTtcclxuICAgICAgICB0aGlzLmluaXRFdmVudChNYWluRXZlbnQuUEVUX1VQR1JBREVfUkVRLCB0aGlzLm9uUGV0VXBncmFkZVJlcSk7XHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoTWFpbkV2ZW50LlBFVF9VUEdSQURFLCB0aGlzLm9uUGV0VXBncmFkZSk7XHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoTWFpbkV2ZW50Lk9QRU5fU0tJTl9QT1BfUkVRLCB0aGlzLm9uT3BlblNraW5Qb3BSZXEpO1xyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KE1haW5FdmVudC5PUEVOX1NLSU5fUE9QLCB0aGlzLm9uT3BlblNraW5Qb3ApO1xyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KE1haW5FdmVudC5NSU5FX0NIQU5HRV9SRVEsIHRoaXMub25NaW5lQ2hhbmdlUmVxKVxyXG4gICAgICAgIHRoaXMub25SZWdpc3RlckV2ZW50KHRoaXMudWkuYnRuX2Nsb3NlLCB0aGlzLm9uQnRuQ2xvc2VDbGljaywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblJlZ2lzdGVyRXZlbnQodGhpcy51aS5idG5faW5mbywgdGhpcy5vbkJ0bkluZm9DbGljaywgdGhpcyk7XHJcbiAgICAgICAgVUlIZWxwLkhpZGVVSShVSUxvYWRpbmcpO1xyXG4gICAgICAgIHRoaXMuc3dpdGNoUGFnZShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5idG5zU2V0WkluZGV4KCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVQYWdlcygpO1xyXG4gICAgICAgIHRoaXMuc2V0VmVjU3RyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlUGFnZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYWdlcy5wdXNoKHRoaXMubWluZU1uZyk7XHJcbiAgICAgICAgdGhpcy5wYWdlcy5wdXNoKHRoaXMubWluZUNvbGxlY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaFBhZ2UoYW5pU3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJlUGFnZUluZGV4ID09IHRoaXMuY3VycmVudFBhZ2VJbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fcHJlUGFnZUluZGV4ICE9IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZXNbdGhpcy5wcmVQYWdlSW5kZXhdLmhpZGUoYW5pU3RhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlSW5kZXhdLnNob3coYW5pU3RhdGUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBidG5zU2V0WkluZGV4KCk6IHZvaWQge1xyXG4gICAgICAgIGxldCB2YWwgPSBWaWV3Wm9yZGVyLkJ0bjtcclxuICAgICAgICB0aGlzLnVpLmJ0bl9jbG9zZS56SW5kZXggPSB2YWw7XHJcbiAgICAgICAgdGhpcy51aS5idG5faW5mby56SW5kZXggPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgYnRuQ2xvc2VQb3NSZXNldChwYWdlSW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgcG9zOiBjYy5WZWMyID0gY2MudjIoKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChwYWdlSW5kZXgpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgcG9zID0gY2MudjIoMjc5LCA0OTUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHBvcyA9IGNjLnYyKDI3OSwgNTkwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51aS5idG5fY2xvc2Uuc2V0UG9zaXRpb24ocG9zKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYnRuSW5mb1Bvc1Jlc2V0KHBhZ2VJbmRleDogbnVtYmVyKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGxldCBwb3M6IGNjLlZlYzIgPSBjYy52MigpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHBhZ2VJbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBwb3MgPSBjYy52MigxODUsIDQ5NSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcG9zID0gY2MudjIoMTg1LCA1OTApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVpLmJ0bl9pbmZvLnNldFBvc2l0aW9uKHBvcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uUGFnZVN3aXRjaChwYWdlSW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucHJlUGFnZUluZGV4ID0gdGhpcy5jdXJyZW50UGFnZUluZGV4O1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2VJbmRleCA9IHBhZ2VJbmRleDtcclxuICAgICAgICB0aGlzLnN3aXRjaFBhZ2UodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5idG5DbG9zZVBvc1Jlc2V0KHBhZ2VJbmRleCk7XHJcbiAgICAgICAgdGhpcy5idG5JbmZvUG9zUmVzZXQocGFnZUluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVudGVyTWluZUNvbGxlY3QobXNnKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZFRpcC5oaWRlKCk7XHJcbiAgICAgICAgaWYgKG1zZy5zdGF0ZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25QYWdlU3dpdGNoKDEpO1xyXG4gICAgICAgICAgICB0aGlzLm1pbmVDb2xsZWN0LmNvbGxlY3RHZW5lcmFsLnVwZGF0ZU1pbmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9uTWVzc2FnZVNob3coe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogMixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IExhbmdNbmcuZ2V0VHh0KFwiU185MTAyXCIpLFxyXG4gICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uRW50ZXJNaW5lTW5nKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25QYWdlU3dpdGNoKDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTWVzc2FnZVNob3coY29uZmlnKTogdm9pZCB7XHJcbiAgICAgICAgVUlIZWxwLlNob3dEaWFsb2coY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkNsb3NlQ2xpY2soKTogdm9pZCB7XHJcbiAgICAgICAgR2FtZUNvbnRyb2xsZXIubmV0LnNlbmQoXCJjbG9zZVwiLCBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkluZm9DbGljaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmluZm9Qb3Auc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTWluZUNoYW5nZVJlcSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvYWRUaXAuc2hvdygpO1xyXG4gICAgICAgIEdhbWVDb250cm9sbGVyLm5ldC5zZW5kKFwidXNlXCIsIHtcclxuICAgICAgICAgICAgcGV0SUQ6IEdhbWVDZW50ZXIuZ2FtZS5taW5lU2VsZWN0SUQsXHJcbiAgICAgICAgICAgIGVsZklEOiBHYW1lQ2VudGVyLmdhbWUucGFydG5lclNlbGVjdElELFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUGV0VXBncmFkZVJlcShkYXRhKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2FkVGlwLnNob3coKTtcclxuICAgICAgICBHYW1lQ29udHJvbGxlci5uZXQuc2VuZChcInVwZ3JhZGVcIiwge1xyXG4gICAgICAgICAgICBwZXRJRDogZGF0YS5pZCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblBldFVwZ3JhZGUobXNnKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZFRpcC5oaWRlKCk7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZSA9IG1zZy5pc1VwZ3JhZGU7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZ3JhZGVQYW5lbC5zaG93KG1zZy5wZXRJRCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBncmFkZVBhbmVsLmhpZGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFdmVudE1uZy5lbWl0KFwiUEVUX1VQR1JBREVfQ0hBTkdFXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBtc2cucGV0SUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uVXBncmFkZUVycm9yKFwiVF8xMDhcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vblVwZ3JhZGVFcnJvcihcIlRfMTA5XCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHRoaXMub25VcGdyYWRlRXJyb3IoXCJUXzEwN1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgR2FtZUNlbnRlci5nYW1lLm1pbmVMZXZlbFttc2cucGV0SURdID0gbXNnLmxldmVsO1xyXG4gICAgICAgIHRoaXMubWluZU1uZy5jb24ucGFnZTEuc2xpZGVyLml0ZW1zW21zZy5wZXRJRF0uc2V0TGV2ZWwobXNnLnBldElELCBtc2cubGV2ZWwpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblVwZ3JhZGVFcnJvcihzdHIpOiB2b2lkIHtcclxuICAgICAgICBFdmVudE1uZy5lbWl0KE1haW5FdmVudC5NRVNTQUdFX1NIT1csIHtcclxuICAgICAgICAgICAgdHlwZTogMixcclxuICAgICAgICAgICAgY29udGVudDogTGFuZ01uZy5nZXRUeHQoc3RyKSxcclxuICAgICAgICAgICAgYXV0b0Nsb3NlOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uT3BlblNraW5Qb3BSZXEobXNnKTogdm9pZCB7XHJcbiAgICAgICAgR2FtZUNvbnRyb2xsZXIubmV0LnNlbmQoXCJnZXRiYWdcIiwge1xyXG4gICAgICAgICAgICBwZXRJRDogbXNnLmlkLFxyXG4gICAgICAgICAgICBiYWc6IFwic2tpblwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25PcGVuU2tpblBvcChtc2cpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNraW5Qb3Auc2hvdyhtc2cpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjdXJyZW50UGFnZUluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRQYWdlSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByZVBhZ2VJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcmVQYWdlSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGN1cnJlbnRQYWdlSW5kZXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRQYWdlSW5kZXggPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcHJlUGFnZUluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9wcmVQYWdlSW5kZXggPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRWZWNTdHIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51aS52ZXJfc3RyLm5vZGUuekluZGV4ID0gVmlld1pvcmRlci5CdG47XHJcbiAgICAgICAgdGhpcy51aS52ZXJfc3RyLnN0cmluZyA9IFwidjEuMC4xXCI7XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/const/EventConst.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '23077tDaiFOYJMfHPD1J4iF', 'EventConst');
// script/data/const/EventConst.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainEvent = exports.LoadEvent = exports.SocketEvent = void 0;
var SocketEvent = /** @class */ (function () {
    function SocketEvent() {
    }
    SocketEvent.SOCKET_OPEN = 'SOCKET_OPEN';
    SocketEvent.SOCKET_CLOSE = 'SOCKET_CLOSE';
    return SocketEvent;
}());
exports.SocketEvent = SocketEvent;
var LoadEvent = /** @class */ (function () {
    function LoadEvent() {
    }
    LoadEvent.LOAD_PRELOAD_DONE = 'LOAD_PRELOAD_DONE';
    LoadEvent.LOAD_SUCCESS = 'LOAD_SUCCESS';
    return LoadEvent;
}());
exports.LoadEvent = LoadEvent;
var MainEvent = /** @class */ (function () {
    function MainEvent() {
    }
    MainEvent.ENTER_MINE_COLLECT = 'ENTER_MINE_COLLECT';
    MainEvent.ENTER_MINE_MNG = 'ENTER_MINE_MNG';
    MainEvent.MINE_GENERAL_UPDATE = 'MINE_GENERAL_UPDATE';
    MainEvent.MINE_MNG_PAGE_SWITCH = 'MINE_MNG_PAGE_SWITCH';
    MainEvent.MESSAGE_SHOW = 'MESSAGE_SHOW';
    MainEvent.GET_POINT = 'GET_POINT';
    MainEvent.PET_UPGRADE_REQ = 'PET_UPGRADE_REQ';
    MainEvent.PET_UPGRADE = 'PET_UPGRADE';
    MainEvent.PET_UPGRADE_CHANGE = 'PET_UPGRADE_CHANGE';
    MainEvent.OPEN_SKIN_POP_REQ = 'OPEN_SKIN_POP_REQ';
    MainEvent.OPEN_SKIN_POP = 'OPEN_SKIN_POP';
    MainEvent.MINE_CHANGE_REQ = 'MINE_CHANGE_REQ';
    return MainEvent;
}());
exports.MainEvent = MainEvent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxjb25zdFxcRXZlbnRDb25zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUFBO0lBR0EsQ0FBQztJQUYwQix1QkFBVyxHQUFHLGFBQWEsQ0FBQztJQUM1Qix3QkFBWSxHQUFHLGNBQWMsQ0FBQztJQUN6RCxrQkFBQztDQUhELEFBR0MsSUFBQTtBQUhZLGtDQUFXO0FBS3hCO0lBQUE7SUFHQSxDQUFDO0lBRjBCLDJCQUFpQixHQUFHLG1CQUFtQixDQUFDO0lBQ3hDLHNCQUFZLEdBQUcsY0FBYyxDQUFDO0lBQ3pELGdCQUFDO0NBSEQsQUFHQyxJQUFBO0FBSFksOEJBQVM7QUFLdEI7SUFBQTtJQWFBLENBQUM7SUFaMEIsNEJBQWtCLEdBQUcsb0JBQW9CLENBQUM7SUFDMUMsd0JBQWMsR0FBRyxnQkFBZ0IsQ0FBQztJQUNsQyw2QkFBbUIsR0FBRyxxQkFBcUIsQ0FBQztJQUM1Qyw4QkFBb0IsR0FBRyxzQkFBc0IsQ0FBQztJQUM5QyxzQkFBWSxHQUFHLGNBQWMsQ0FBQztJQUM5QixtQkFBUyxHQUFHLFdBQVcsQ0FBQztJQUN4Qix5QkFBZSxHQUFHLGlCQUFpQixDQUFDO0lBQ3BDLHFCQUFXLEdBQUcsYUFBYSxDQUFDO0lBQzVCLDRCQUFrQixHQUFHLG9CQUFvQixDQUFDO0lBQzFDLDJCQUFpQixHQUFHLG1CQUFtQixDQUFDO0lBQ3hDLHVCQUFhLEdBQUcsZUFBZSxDQUFDO0lBQ2hDLHlCQUFlLEdBQUcsaUJBQWlCLENBQUM7SUFDL0QsZ0JBQUM7Q0FiRCxBQWFDLElBQUE7QUFiWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY2xhc3MgU29ja2V0RXZlbnQge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTT0NLRVRfT1BFTiA9ICdTT0NLRVRfT1BFTic7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNPQ0tFVF9DTE9TRSA9ICdTT0NLRVRfQ0xPU0UnO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZEV2ZW50IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTE9BRF9QUkVMT0FEX0RPTkUgPSAnTE9BRF9QUkVMT0FEX0RPTkUnO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBMT0FEX1NVQ0NFU1MgPSAnTE9BRF9TVUNDRVNTJztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1haW5FdmVudCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVOVEVSX01JTkVfQ09MTEVDVCA9ICdFTlRFUl9NSU5FX0NPTExFQ1QnO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFTlRFUl9NSU5FX01ORyA9ICdFTlRFUl9NSU5FX01ORyc7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE1JTkVfR0VORVJBTF9VUERBVEUgPSAnTUlORV9HRU5FUkFMX1VQREFURSc7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE1JTkVfTU5HX1BBR0VfU1dJVENIID0gJ01JTkVfTU5HX1BBR0VfU1dJVENIJztcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTUVTU0FHRV9TSE9XID0gJ01FU1NBR0VfU0hPVyc7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEdFVF9QT0lOVCA9ICdHRVRfUE9JTlQnO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBQRVRfVVBHUkFERV9SRVEgPSAnUEVUX1VQR1JBREVfUkVRJztcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUEVUX1VQR1JBREUgPSAnUEVUX1VQR1JBREUnO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBQRVRfVVBHUkFERV9DSEFOR0UgPSAnUEVUX1VQR1JBREVfQ0hBTkdFJztcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT1BFTl9TS0lOX1BPUF9SRVEgPSAnT1BFTl9TS0lOX1BPUF9SRVEnO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPUEVOX1NLSU5fUE9QID0gJ09QRU5fU0tJTl9QT1AnO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBNSU5FX0NIQU5HRV9SRVEgPSAnTUlORV9DSEFOR0VfUkVRJztcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/mine/mng/MineToolBox.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70676VGeHRDhJygPwEOKUux', 'MineToolBox');
// script/controllers/mine/mng/MineToolBox.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var GameCenter_1 = require("../../../data/GameCenter");
var EventMng_1 = require("../../../manager/EventMng");
var LangMng_1 = require("../../../manager/LangMng");
var MineSlider_1 = require("./MineSlider");
var ToolComponent_1 = require("./ToolComponent");
var ActionTransition_1 = require("../../../common/ActionTransition");
var EventConst_1 = require("../../../data/const/EventConst");
var UIBase_1 = require("../../ui/UIBase");
var DataMineToolBox_1 = require("../../../data/scene/DataMineToolBox");
var ccclass = cc._decorator.ccclass;
var MineToolBox = /** @class */ (function (_super) {
    __extends(MineToolBox, _super);
    function MineToolBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.controlBts = [];
        _this.introCon = [];
        _this.btnCanClick = false;
        _this.currentToolBtnIndex = -1;
        return _this;
    }
    MineToolBox.prototype.onUILoad = function () {
        this.ui = this.node.addComponent(DataMineToolBox_1.default);
        this.mineSliderCreate();
        this.toolBtnsCreate();
        this.toolIntroConCreate();
    };
    MineToolBox.prototype.onStart = function () {
        this.slider.init();
        this.slider.createSliderList(GameCenter_1.default.game.mineFloorName, GameCenter_1.default.game.mineBodyName);
        this.viewInit();
    };
    MineToolBox.prototype.onShow = function () {
        this.initEvent(EventConst_1.MainEvent.PET_UPGRADE_CHANGE, this.onPetUpgradeChange);
        this.initEvent(EventConst_1.MainEvent.MESSAGE_SHOW, this.onMessageShow);
        this.onRegisterEvent(this.ui.btn_confirm, this.onBtnConfirmClick, this);
        this.slider.show();
        this.slider.arrowBtnsBindOn();
        this.viewReset();
        this.toolBtnsBindOn();
    };
    MineToolBox.prototype.onHide = function () {
        this.unRegisterEvent(this.ui.btn_confirm, this.onBtnConfirmClick, this);
        this.slider.hide();
        this.slider.arrowBtnsBindOff();
        this.toolBtnsBindOff();
    };
    MineToolBox.prototype.viewInit = function () {
        this.controlBts[0].setCount(GameCenter_1.default.game.canCount);
        this.controlBts[0].setTitleTxt(LangMng_1.default.getTxt("T_100"));
        this.controlBts[1].setTitleTxt(LangMng_1.default.getTxt("T_110"));
        this.controlBts[2].setTitleTxt(LangMng_1.default.getTxt("T_111"));
        this.ui.label_item_name.string = '';
        this.levelBarUpdate();
    };
    MineToolBox.prototype.viewReset = function () {
        this.currentToolBtnIndex = -1;
        this.btnCanClick = false;
        this.msgTipShow(LangMng_1.default.getTxt("T_008"));
        this.toolIntroConHide();
        this.ui.node_confirm_active.active = false;
        this.stateBoxHide();
    };
    MineToolBox.prototype.mineSliderCreate = function () {
        this.slider = new MineSlider_1.MineSlider(this.ui, 0, {
            referenceMode: true,
            sliderPageCallBack: this.onSliderPageCallBack.bind(this),
        });
    };
    MineToolBox.prototype.itemCheck = function (autoUpdate) {
        if (autoUpdate === void 0) { autoUpdate = true; }
        var state = false;
        if (this.currentToolBtnIndex < 0) {
            return state;
        }
        if (GameCenter_1.default.game.mineList[this.slider.currentPageIndex] == 0) {
            this.msgTipShow(LangMng_1.default.getTxt("T_009"));
            this.toolIntroConHide();
        }
        else {
            this.msgTipHide();
            this.toolIntroConUpdate(autoUpdate);
            state = true;
        }
        return state;
    };
    MineToolBox.prototype.itemDialogShow = function (str) {
        var _this = this;
        this.ui.node_pet_dialog_holder.active = true;
        this.ui.label_pet_dialog_txt.string = str;
        this.ui.node_pet_dialog_holder.opacity = 255;
        this.ui.node_pet_dialog_holder.stopAllActions();
        this.ui.node_pet_dialog_holder.runAction(cc.sequence(cc.delayTime(3), cc.fadeOut(.2), cc.callFunc(function () {
            _this.ui.node_pet_dialog_holder.active = false;
        })));
    };
    MineToolBox.prototype.toolBtnsCreate = function () {
        for (var i = 0; i < this.ui.node_props_holder.children.length; i++) {
            var node = this.ui.node_props_holder.children[i];
            this.controlBts[i] = new ToolComponent_1.ToolBtn(node, i, this.onToolBtnClick.bind(this));
        }
    };
    MineToolBox.prototype.toolBtnsUpdate = function () {
        this.controlBts[0].setCount(GameCenter_1.default.game.canCount);
    };
    MineToolBox.prototype.toolBtnsBindOn = function () {
        for (var i = 0; i < this.controlBts.length; i++) {
            this.controlBts[i].bindOn();
        }
    };
    MineToolBox.prototype.toolBtnsBindOff = function () {
        for (var i = 0; i < this.controlBts.length; i++) {
            this.controlBts[i].bindOff();
            this.controlBts[i].active(false);
        }
    };
    MineToolBox.prototype.toolBtnSwitch = function (id) {
        if (this.currentToolBtnIndex >= 0) {
            this.controlBts[this.currentToolBtnIndex].active(false);
        }
        this.currentToolBtnIndex = id;
        this.controlBts[this.currentToolBtnIndex].active(true);
        this.btnCanClick = this.itemCheck();
    };
    MineToolBox.prototype.toolIntroConCreate = function () {
        this.introCon[0] = new ToolComponent_1.ToolIntroCon(this.ui.node_intro_con_1, 0, this.canIntroUpdate.bind(this));
        this.introCon[1] = new ToolComponent_1.ToolIntroCon(this.ui.node_intro_con_2, 0, this.canIntroUpdate.bind(this));
        this.introCon[2] = new ToolComponent_1.ToolIntroCon(this.ui.node_intro_con_3, 0, this.canIntroUpdate.bind(this));
    };
    MineToolBox.prototype.toolIntroConHide = function () {
        for (var i = 0; i < this.introCon.length; i++) {
            this.introCon[i].hide();
        }
    };
    MineToolBox.prototype.toolIntroConUpdate = function (autoUpdate) {
        this.toolIntroConHide();
        this.introCon[this.currentToolBtnIndex].show();
        switch (this.currentToolBtnIndex) {
            case 0:
                this.canIntroUpdate();
                this.btnConfirmShow();
                break;
            case 1:
                this.btnConfirmHide();
                this.decIntroUpdate();
                break;
            case 2:
                this.btnConfirmHide();
                this.skinIntroUpdate();
                if (autoUpdate) {
                    EventMng_1.default.emit(EventConst_1.MainEvent.OPEN_SKIN_POP_REQ, {
                        id: this.slider.currentPageIndex
                    });
                }
                break;
        }
    };
    MineToolBox.prototype.msgTipShow = function (str) {
        this.ui.label_msg_tip.string = str;
        var node = this.ui.label_msg_tip.node;
        node.active = true;
        node.opacity = 0;
        node.stopAllActions();
        node.runAction(cc.fadeIn(.1));
    };
    MineToolBox.prototype.msgTipHide = function () {
        var node = this.ui.label_msg_tip.node;
        if (!node.active) {
            return;
        }
        node.stopAllActions();
        node.runAction(cc.sequence(cc.fadeOut(.1), cc.callFunc(function () {
            node.active = false;
        })));
    };
    MineToolBox.prototype.canIntroUpdate = function () {
        var nextLevel = GameCenter_1.default.game.mineLevel[this.slider.currentPageIndex] + 1;
        this.ui.node_confirm_active.active = false;
        if (nextLevel >= 10) {
            this.toolIntroConHide();
            this.msgTipShow(LangMng_1.default.getTxt("T_107"));
            return;
        }
        if (!this.ui.node_intro_con_1.active) {
            return;
        }
        var introNode = this.introCon[this.currentToolBtnIndex].node;
        var sliverLabel = introNode.getChildByName("g_1").getChildByName("count").getComponent(cc.Label);
        var canCountLabel = introNode.getChildByName("g_2").getChildByName("count").getComponent(cc.Label);
        var canTipLabel = introNode.getChildByName("g_2").getChildByName("count_tip").getComponent(cc.Label);
        var upTxt1 = introNode.getChildByName("g_3").getChildByName("txt_1").getComponent(cc.RichText);
        var silverVal = GameCenter_1.default.game.levelConfig.silver[nextLevel - 2];
        var canVal = GameCenter_1.default.game.levelConfig.can[nextLevel - 2];
        sliverLabel.string = "" + silverVal;
        canCountLabel.string = "x" + canVal;
        canTipLabel.string = "(" + GameCenter_1.default.game.canCount + "/" + canVal + ")";
        upTxt1.string = LangMng_1.default.getTxt("T_103") + " " + nextLevel + "\n\r" + LangMng_1.default.getTxt("T_104") + " <color = #ffc600>" + GameCenter_1.default.game.levelConfig.rate[nextLevel - 2] + "%</c>";
        if (GameCenter_1.default.game.silverPoint >= silverVal && GameCenter_1.default.game.canCount >= canVal) {
            this.ui.node_confirm_active.active = true;
        }
    };
    MineToolBox.prototype.decIntroUpdate = function () {
        if (GameCenter_1.default.game.mineAccessories[this.slider.currentPageIndex] == 0) {
            this.ui.node_intro_con_2.active = false;
            this.msgTipShow(LangMng_1.default.getTxt("T_112"));
        }
    };
    MineToolBox.prototype.skinIntroUpdate = function () {
        if (GameCenter_1.default.game.mineSkin[this.slider.currentPageIndex] == 0) {
            this.ui.node_intro_con_3.active = false;
            this.msgTipShow(LangMng_1.default.getTxt("T_113"));
        }
    };
    MineToolBox.prototype.levelBarShow = function () {
        this.ui.node_level_holder.active = true;
    };
    MineToolBox.prototype.levelBarHide = function () {
        this.ui.node_level_holder.active = false;
    };
    MineToolBox.prototype.levelBarUpdate = function () {
        this.ui.label_level_num.string = "LV." + GameCenter_1.default.game.mineLevel[this.slider.currentPageIndex];
    };
    MineToolBox.prototype.onToolBtnClick = function (id) {
        var introPage = this.introCon[id];
        if (!introPage) {
            EventMng_1.default.emit(EventConst_1.MainEvent.MESSAGE_SHOW, {
                type: 2,
                content: LangMng_1.default.getTxt("S_9001"),
                autoClose: true,
            });
            return;
        }
        this.toolBtnSwitch(id);
    };
    MineToolBox.prototype.onBtnConfirmClick = function () {
        var _this = this;
        this.unRegisterEvent(this.ui.btn_confirm, this.onBtnConfirmClick, this);
        ActionTransition_1.ActionTransition.btnBounce(this.ui.btn_confirm, function () {
            if (!_this.btnCanClick) {
                _this.onRegisterEvent(_this.ui.btn_confirm, _this.onBtnConfirmClick, _this);
                return;
            }
            EventMng_1.default.emit('PET_UPGRADE_REQ', {
                id: _this.slider.currentPageIndex,
            });
        });
    };
    MineToolBox.prototype.onSliderPageCallBack = function () {
        this.btnCanClick = this.itemCheck(false);
        if (GameCenter_1.default.game.mineList[this.slider.currentPageIndex] == 0) {
            this.levelBarHide();
            this.ui.label_item_name.string = '';
        }
        else {
            this.levelBarShow();
            this.ui.label_item_name.string = GameCenter_1.default.cfgMine[this.slider.currentPageIndex].name;
        }
    };
    MineToolBox.prototype.onPetUpgradeChange = function (data) {
        this.onRegisterEvent(this.ui.btn_confirm, this.onBtnConfirmClick, this);
        this.toolBtnsUpdate();
        this.levelBarUpdate();
        this.canIntroUpdate();
        var level = GameCenter_1.default.game.mineLevel[data.id];
        if (data.state == 0) {
            this.slider.items[data.id].upgradeSuccess(data.id, level);
            this.itemDialogShow(LangMng_1.default.getTxt("T_105"));
            this.ui.ani_level_bar.play();
        }
        else {
            this.slider.items[data.id].upgradeFail();
            this.itemDialogShow(LangMng_1.default.getTxt("T_106"));
        }
    };
    MineToolBox.prototype.onMessageShow = function () {
        this.onRegisterEvent(this.ui.btn_confirm, this.onBtnConfirmClick, this);
    };
    MineToolBox.prototype.stateBoxShow = function () {
        this.ui.node_state_tip.active = true;
    };
    MineToolBox.prototype.stateBoxHide = function () {
        this.ui.node_state_tip.active = false;
    };
    MineToolBox.prototype.btnConfirmShow = function () {
        this.ui.btn_confirm.active = true;
    };
    MineToolBox.prototype.btnConfirmHide = function () {
        this.ui.btn_confirm.active = false;
    };
    MineToolBox = __decorate([
        ccclass
    ], MineToolBox);
    return MineToolBox;
}(UIBase_1.default));
exports.default = MineToolBox;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcbWluZVxcbW5nXFxNaW5lVG9vbEJveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBa0Q7QUFDbEQsc0RBQWlEO0FBQ2pELG9EQUErQztBQUMvQywyQ0FBMEM7QUFDMUMsaURBQXdEO0FBQ3hELHFFQUFvRTtBQUNwRSw2REFBMkQ7QUFDM0QsMENBQXFDO0FBQ3JDLHVFQUFrRTtBQUUxRCxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUdsQztJQUF5QywrQkFBTTtJQUEvQztRQUFBLHFFQWtYQztRQTlXRyxnQkFBVSxHQUFjLEVBQUUsQ0FBQztRQUMzQixjQUFRLEdBQW1CLEVBQUUsQ0FBQztRQUV0QixpQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3Qix5QkFBbUIsR0FBRyxDQUFDLENBQUMsQ0FBQzs7SUEwV3JDLENBQUM7SUF4V0csOEJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMseUJBQWUsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsNkJBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsb0JBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCw0QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFNB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QUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDaEQ7SUFFTCxDQUFDO0lBRUQsbUNBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxrQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN6QyxDQUFDO0lBRUQsa0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDMUMsQ0FBQztJQUVELG9DQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxvQ0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN2QyxDQUFDO0lBaFhnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBa1gvQjtJQUFELGtCQUFDO0NBbFhELEFBa1hDLENBbFh3QyxnQkFBTSxHQWtYOUM7a0JBbFhvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVDZW50ZXIgZnJvbSBcIi4uLy4uLy4uL2RhdGEvR2FtZUNlbnRlclwiO1xyXG5pbXBvcnQgRXZlbnRNbmcgZnJvbSBcIi4uLy4uLy4uL21hbmFnZXIvRXZlbnRNbmdcIjtcclxuaW1wb3J0IExhbmdNbmcgZnJvbSBcIi4uLy4uLy4uL21hbmFnZXIvTGFuZ01uZ1wiO1xyXG5pbXBvcnQgeyBNaW5lU2xpZGVyIH0gZnJvbSBcIi4vTWluZVNsaWRlclwiO1xyXG5pbXBvcnQgeyBUb29sQnRuLCBUb29sSW50cm9Db24gfSBmcm9tIFwiLi9Ub29sQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFjdGlvblRyYW5zaXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL0FjdGlvblRyYW5zaXRpb25cIjtcclxuaW1wb3J0IHsgTWFpbkV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvY29uc3QvRXZlbnRDb25zdFwiO1xyXG5pbXBvcnQgVUlCYXNlIGZyb20gXCIuLi8uLi91aS9VSUJhc2VcIjtcclxuaW1wb3J0IERhdGFNaW5lVG9vbEJveCBmcm9tIFwiLi4vLi4vLi4vZGF0YS9zY2VuZS9EYXRhTWluZVRvb2xCb3hcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmVUb29sQm94IGV4dGVuZHMgVUlCYXNlIHtcclxuXHJcbiAgICB1aTogRGF0YU1pbmVUb29sQm94O1xyXG4gICAgc2xpZGVyOiBNaW5lU2xpZGVyO1xyXG4gICAgY29udHJvbEJ0czogVG9vbEJ0bltdID0gW107XHJcbiAgICBpbnRyb0NvbjogVG9vbEludHJvQ29uW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGJ0bkNhbkNsaWNrOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRUb29sQnRuSW5kZXggPSAtMTtcclxuXHJcbiAgICBvblVJTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChEYXRhTWluZVRvb2xCb3gpO1xyXG4gICAgICAgIHRoaXMubWluZVNsaWRlckNyZWF0ZSgpO1xyXG4gICAgICAgIHRoaXMudG9vbEJ0bnNDcmVhdGUoKTtcclxuICAgICAgICB0aGlzLnRvb2xJbnRyb0NvbkNyZWF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyLmNyZWF0ZVNsaWRlckxpc3QoR2FtZUNlbnRlci5nYW1lLm1pbmVGbG9vck5hbWUsIEdhbWVDZW50ZXIuZ2FtZS5taW5lQm9keU5hbWUpO1xyXG4gICAgICAgIHRoaXMudmlld0luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoTWFpbkV2ZW50LlBFVF9VUEdSQURFX0NIQU5HRSwgdGhpcy5vblBldFVwZ3JhZGVDaGFuZ2UpO1xyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KE1haW5FdmVudC5NRVNTQUdFX1NIT1csIHRoaXMub25NZXNzYWdlU2hvdyk7XHJcbiAgICAgICAgdGhpcy5vblJlZ2lzdGVyRXZlbnQodGhpcy51aS5idG5fY29uZmlybSwgdGhpcy5vbkJ0bkNvbmZpcm1DbGljaywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIuc2hvdygpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyLmFycm93QnRuc0JpbmRPbigpO1xyXG4gICAgICAgIHRoaXMudmlld1Jlc2V0KCk7XHJcbiAgICAgICAgdGhpcy50b29sQnRuc0JpbmRPbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGlkZSgpIHtcclxuICAgICAgICB0aGlzLnVuUmVnaXN0ZXJFdmVudCh0aGlzLnVpLmJ0bl9jb25maXJtLCB0aGlzLm9uQnRuQ29uZmlybUNsaWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnNsaWRlci5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIuYXJyb3dCdG5zQmluZE9mZigpO1xyXG4gICAgICAgIHRoaXMudG9vbEJ0bnNCaW5kT2ZmKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sQnRzWzBdLnNldENvdW50KEdhbWVDZW50ZXIuZ2FtZS5jYW5Db3VudCk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sQnRzWzBdLnNldFRpdGxlVHh0KExhbmdNbmcuZ2V0VHh0KFwiVF8xMDBcIikpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbEJ0c1sxXS5zZXRUaXRsZVR4dChMYW5nTW5nLmdldFR4dChcIlRfMTEwXCIpKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xCdHNbMl0uc2V0VGl0bGVUeHQoTGFuZ01uZy5nZXRUeHQoXCJUXzExMVwiKSk7XHJcbiAgICAgICAgdGhpcy51aS5sYWJlbF9pdGVtX25hbWUuc3RyaW5nID0gJyc7XHJcbiAgICAgICAgdGhpcy5sZXZlbEJhclVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHZpZXdSZXNldCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUb29sQnRuSW5kZXggPSAtMTtcclxuICAgICAgICB0aGlzLmJ0bkNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tc2dUaXBTaG93KExhbmdNbmcuZ2V0VHh0KFwiVF8wMDhcIikpO1xyXG4gICAgICAgIHRoaXMudG9vbEludHJvQ29uSGlkZSgpO1xyXG4gICAgICAgIHRoaXMudWkubm9kZV9jb25maXJtX2FjdGl2ZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YXRlQm94SGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG1pbmVTbGlkZXJDcmVhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIgPSBuZXcgTWluZVNsaWRlcih0aGlzLnVpLCAwLCB7XHJcbiAgICAgICAgICAgIHJlZmVyZW5jZU1vZGU6IHRydWUsXHJcbiAgICAgICAgICAgIHNsaWRlclBhZ2VDYWxsQmFjazogdGhpcy5vblNsaWRlclBhZ2VDYWxsQmFjay5iaW5kKHRoaXMpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGl0ZW1DaGVjayhhdXRvVXBkYXRlOiBib29sZWFuID0gdHJ1ZSk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICBsZXQgc3RhdGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRvb2xCdG5JbmRleCA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKEdhbWVDZW50ZXIuZ2FtZS5taW5lTGlzdFt0aGlzLnNsaWRlci5jdXJyZW50UGFnZUluZGV4XSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXNnVGlwU2hvdyhMYW5nTW5nLmdldFR4dChcIlRfMDA5XCIpKTtcclxuICAgICAgICAgICAgdGhpcy50b29sSW50cm9Db25IaWRlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tc2dUaXBIaWRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbEludHJvQ29uVXBkYXRlKGF1dG9VcGRhdGUpO1xyXG4gICAgICAgICAgICBzdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGl0ZW1EaWFsb2dTaG93KHN0cik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudWkubm9kZV9wZXRfZGlhbG9nX2hvbGRlci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudWkubGFiZWxfcGV0X2RpYWxvZ190eHQuc3RyaW5nID0gc3RyO1xyXG4gICAgICAgIHRoaXMudWkubm9kZV9wZXRfZGlhbG9nX2hvbGRlci5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHRoaXMudWkubm9kZV9wZXRfZGlhbG9nX2hvbGRlci5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMudWkubm9kZV9wZXRfZGlhbG9nX2hvbGRlci5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLmRlbGF5VGltZSgzKSxcclxuICAgICAgICAgICAgY2MuZmFkZU91dCguMiksXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudWkubm9kZV9wZXRfZGlhbG9nX2hvbGRlci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApKVxyXG4gICAgfVxyXG5cclxuICAgIHRvb2xCdG5zQ3JlYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHRoaXMudWkubm9kZV9wcm9wc19ob2xkZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnVpLm5vZGVfcHJvcHNfaG9sZGVyLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xCdHNbaV0gPSBuZXcgVG9vbEJ0bihub2RlLCBpLCB0aGlzLm9uVG9vbEJ0bkNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b29sQnRuc1VwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xCdHNbMF0uc2V0Q291bnQoR2FtZUNlbnRlci5nYW1lLmNhbkNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICB0b29sQnRuc0JpbmRPbigpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29udHJvbEJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xCdHNbaV0uYmluZE9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvb2xCdG5zQmluZE9mZigpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29udHJvbEJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xCdHNbaV0uYmluZE9mZigpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xCdHNbaV0uYWN0aXZlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9vbEJ0blN3aXRjaChpZCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VG9vbEJ0bkluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sQnRzW3RoaXMuY3VycmVudFRvb2xCdG5JbmRleF0uYWN0aXZlKGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFRvb2xCdG5JbmRleCA9IGlkO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2xCdHNbdGhpcy5jdXJyZW50VG9vbEJ0bkluZGV4XS5hY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYnRuQ2FuQ2xpY2sgPSB0aGlzLml0ZW1DaGVjaygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0b29sSW50cm9Db25DcmVhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbnRyb0NvblswXSA9IG5ldyBUb29sSW50cm9Db24odGhpcy51aS5ub2RlX2ludHJvX2Nvbl8xLCAwLCB0aGlzLmNhbkludHJvVXBkYXRlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuaW50cm9Db25bMV0gPSBuZXcgVG9vbEludHJvQ29uKHRoaXMudWkubm9kZV9pbnRyb19jb25fMiwgMCwgdGhpcy5jYW5JbnRyb1VwZGF0ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmludHJvQ29uWzJdID0gbmV3IFRvb2xJbnRyb0Nvbih0aGlzLnVpLm5vZGVfaW50cm9fY29uXzMsIDAsIHRoaXMuY2FuSW50cm9VcGRhdGUuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9vbEludHJvQ29uSGlkZSgpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW50cm9Db24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5pbnRyb0NvbltpXS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvb2xJbnRyb0NvblVwZGF0ZShhdXRvVXBkYXRlKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMudG9vbEludHJvQ29uSGlkZSgpO1xyXG4gICAgICAgIHRoaXMuaW50cm9Db25bdGhpcy5jdXJyZW50VG9vbEJ0bkluZGV4XS5zaG93KCk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5jdXJyZW50VG9vbEJ0bkluZGV4KSB7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkludHJvVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkNvbmZpcm1TaG93KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5Db25maXJtSGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWNJbnRyb1VwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkNvbmZpcm1IaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNraW5JbnRyb1VwZGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhdXRvVXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRNbmcuZW1pdChNYWluRXZlbnQuT1BFTl9TS0lOX1BPUF9SRVEsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuc2xpZGVyLmN1cnJlbnRQYWdlSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtc2dUaXBTaG93KHN0cjogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMudWkubGFiZWxfbXNnX3RpcC5zdHJpbmcgPSBzdHI7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnVpLmxhYmVsX21zZ190aXAubm9kZTtcclxuXHJcbiAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIG5vZGUub3BhY2l0eSA9IDA7XHJcblxyXG4gICAgICAgIG5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5mYWRlSW4oLjEpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbXNnVGlwSGlkZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnVpLmxhYmVsX21zZ190aXAubm9kZTtcclxuXHJcbiAgICAgICAgaWYoIW5vZGUuYWN0aXZlKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLmZhZGVPdXQoLjEpLFxyXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYW5JbnRyb1VwZGF0ZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IG5leHRMZXZlbCA9IEdhbWVDZW50ZXIuZ2FtZS5taW5lTGV2ZWxbdGhpcy5zbGlkZXIuY3VycmVudFBhZ2VJbmRleF0gKyAxO1xyXG5cclxuICAgICAgICB0aGlzLnVpLm5vZGVfY29uZmlybV9hY3RpdmUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChuZXh0TGV2ZWwgPj0gMTApIHtcclxuICAgICAgICAgICAgdGhpcy50b29sSW50cm9Db25IaWRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubXNnVGlwU2hvdyhMYW5nTW5nLmdldFR4dChcIlRfMTA3XCIpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICghdGhpcy51aS5ub2RlX2ludHJvX2Nvbl8xLmFjdGl2ZSkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgbGV0IGludHJvTm9kZSA9IHRoaXMuaW50cm9Db25bdGhpcy5jdXJyZW50VG9vbEJ0bkluZGV4XS5ub2RlO1xyXG4gICAgICAgIGxldCBzbGl2ZXJMYWJlbCA9IGludHJvTm9kZS5nZXRDaGlsZEJ5TmFtZShcImdfMVwiKS5nZXRDaGlsZEJ5TmFtZShcImNvdW50XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgbGV0IGNhbkNvdW50TGFiZWwgPSBpbnRyb05vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJnXzJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIGxldCBjYW5UaXBMYWJlbCA9IGludHJvTm9kZS5nZXRDaGlsZEJ5TmFtZShcImdfMlwiKS5nZXRDaGlsZEJ5TmFtZShcImNvdW50X3RpcFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuICAgICAgICBsZXQgdXBUeHQxID0gaW50cm9Ob2RlLmdldENoaWxkQnlOYW1lKFwiZ18zXCIpLmdldENoaWxkQnlOYW1lKFwidHh0XzFcIikuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KTtcclxuXHJcblxyXG4gICAgICAgIGxldCBzaWx2ZXJWYWwgPSBHYW1lQ2VudGVyLmdhbWUubGV2ZWxDb25maWcuc2lsdmVyW25leHRMZXZlbCAtIDJdO1xyXG4gICAgICAgIGxldCBjYW5WYWwgPSBHYW1lQ2VudGVyLmdhbWUubGV2ZWxDb25maWcuY2FuW25leHRMZXZlbCAtIDJdO1xyXG5cclxuICAgICAgICBzbGl2ZXJMYWJlbC5zdHJpbmcgPSBgJHtzaWx2ZXJWYWx9YDtcclxuICAgICAgICBjYW5Db3VudExhYmVsLnN0cmluZyA9IGB4JHtjYW5WYWx9YDtcclxuICAgICAgICBjYW5UaXBMYWJlbC5zdHJpbmcgPSBgKCR7R2FtZUNlbnRlci5nYW1lLmNhbkNvdW50fS8ke2NhblZhbH0pYDtcclxuICAgICAgICB1cFR4dDEuc3RyaW5nID0gYCR7TGFuZ01uZy5nZXRUeHQoXCJUXzEwM1wiKX0gJHtuZXh0TGV2ZWx9XFxuXFxyJHtMYW5nTW5nLmdldFR4dChcIlRfMTA0XCIpfSA8Y29sb3IgPSAjZmZjNjAwPiR7R2FtZUNlbnRlci5nYW1lLmxldmVsQ29uZmlnLnJhdGVbbmV4dExldmVsIC0gMl19JTwvYz5gO1xyXG5cclxuICAgICAgICBpZiAoR2FtZUNlbnRlci5nYW1lLnNpbHZlclBvaW50ID49IHNpbHZlclZhbCAmJiBHYW1lQ2VudGVyLmdhbWUuY2FuQ291bnQgPj0gY2FuVmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudWkubm9kZV9jb25maXJtX2FjdGl2ZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgIGRlY0ludHJvVXBkYXRlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICAgaWYgKEdhbWVDZW50ZXIuZ2FtZS5taW5lQWNjZXNzb3JpZXNbdGhpcy5zbGlkZXIuY3VycmVudFBhZ2VJbmRleF0gPT0gMCkge1xyXG4gICAgICAgICAgICAgdGhpcy51aS5ub2RlX2ludHJvX2Nvbl8yLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgdGhpcy5tc2dUaXBTaG93KExhbmdNbmcuZ2V0VHh0KFwiVF8xMTJcIikpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBza2luSW50cm9VcGRhdGUoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmIChHYW1lQ2VudGVyLmdhbWUubWluZVNraW5bdGhpcy5zbGlkZXIuY3VycmVudFBhZ2VJbmRleF0gPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnVpLm5vZGVfaW50cm9fY29uXzMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubXNnVGlwU2hvdyhMYW5nTW5nLmdldFR4dChcIlRfMTEzXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxldmVsQmFyU2hvdygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpLm5vZGVfbGV2ZWxfaG9sZGVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbGV2ZWxCYXJIaWRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudWkubm9kZV9sZXZlbF9ob2xkZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV2ZWxCYXJVcGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51aS5sYWJlbF9sZXZlbF9udW0uc3RyaW5nID0gYExWLiR7R2FtZUNlbnRlci5nYW1lLm1pbmVMZXZlbFt0aGlzLnNsaWRlci5jdXJyZW50UGFnZUluZGV4XX1gO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG9vbEJ0bkNsaWNrKGlkKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGxldCBpbnRyb1BhZ2UgPSB0aGlzLmludHJvQ29uW2lkXTtcclxuXHJcbiAgICAgICAgaWYgKCFpbnRyb1BhZ2UpIHtcclxuICAgICAgICAgICAgRXZlbnRNbmcuZW1pdChNYWluRXZlbnQuTUVTU0FHRV9TSE9XLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAyLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogTGFuZ01uZy5nZXRUeHQoXCJTXzkwMDFcIiksXHJcbiAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRvb2xCdG5Td2l0Y2goaWQpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgb25CdG5Db25maXJtQ2xpY2soKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMudW5SZWdpc3RlckV2ZW50KHRoaXMudWkuYnRuX2NvbmZpcm0sIHRoaXMub25CdG5Db25maXJtQ2xpY2ssIHRoaXMpO1xyXG5cclxuICAgICAgICBBY3Rpb25UcmFuc2l0aW9uLmJ0bkJvdW5jZSh0aGlzLnVpLmJ0bl9jb25maXJtLCAoKSA9PiB7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmJ0bkNhbkNsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uUmVnaXN0ZXJFdmVudCh0aGlzLnVpLmJ0bl9jb25maXJtLCB0aGlzLm9uQnRuQ29uZmlybUNsaWNrLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgRXZlbnRNbmcuZW1pdCgnUEVUX1VQR1JBREVfUkVRJywge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMuc2xpZGVyLmN1cnJlbnRQYWdlSW5kZXgsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25TbGlkZXJQYWdlQ2FsbEJhY2soKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuYnRuQ2FuQ2xpY2sgPSB0aGlzLml0ZW1DaGVjayhmYWxzZSk7XHJcblxyXG4gICAgICAgIGlmIChHYW1lQ2VudGVyLmdhbWUubWluZUxpc3RbdGhpcy5zbGlkZXIuY3VycmVudFBhZ2VJbmRleF0gPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsQmFySGlkZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnVpLmxhYmVsX2l0ZW1fbmFtZS5zdHJpbmcgPSAnJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsQmFyU2hvdygpO1xyXG4gICAgICAgICAgICB0aGlzLnVpLmxhYmVsX2l0ZW1fbmFtZS5zdHJpbmcgPSBHYW1lQ2VudGVyLmNmZ01pbmVbdGhpcy5zbGlkZXIuY3VycmVudFBhZ2VJbmRleF0ubmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uUGV0VXBncmFkZUNoYW5nZShkYXRhKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMub25SZWdpc3RlckV2ZW50KHRoaXMudWkuYnRuX2NvbmZpcm0sIHRoaXMub25CdG5Db25maXJtQ2xpY2ssIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnRvb2xCdG5zVXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5sZXZlbEJhclVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuY2FuSW50cm9VcGRhdGUoKTtcclxuXHJcbiAgICAgICAgbGV0IGxldmVsID0gR2FtZUNlbnRlci5nYW1lLm1pbmVMZXZlbFtkYXRhLmlkXTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEuc3RhdGUgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlci5pdGVtc1tkYXRhLmlkXS51cGdyYWRlU3VjY2VzcyhkYXRhLmlkLCBsZXZlbCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbURpYWxvZ1Nob3coTGFuZ01uZy5nZXRUeHQoXCJUXzEwNVwiKSk7XHJcbiAgICAgICAgICAgIHRoaXMudWkuYW5pX2xldmVsX2Jhci5wbGF5KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zbGlkZXIuaXRlbXNbZGF0YS5pZF0udXBncmFkZUZhaWwoKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtRGlhbG9nU2hvdyhMYW5nTW5nLmdldFR4dChcIlRfMTA2XCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uTWVzc2FnZVNob3coKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblJlZ2lzdGVyRXZlbnQodGhpcy51aS5idG5fY29uZmlybSwgdGhpcy5vbkJ0bkNvbmZpcm1DbGljaywgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGVCb3hTaG93KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudWkubm9kZV9zdGF0ZV90aXAuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0ZUJveEhpZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51aS5ub2RlX3N0YXRlX3RpcC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBidG5Db25maXJtU2hvdygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpLmJ0bl9jb25maXJtLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgYnRuQ29uZmlybUhpZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51aS5idG5fY29uZmlybS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/mine/mng/MinePartnerSelect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7fcaetwU4JJoYylMh7oczeT', 'MinePartnerSelect');
// script/controllers/mine/mng/MinePartnerSelect.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameCenter_1 = require("../../../data/GameCenter");
var MineSelect_1 = require("./MineSelect");
var MinePetSelect = /** @class */ (function (_super) {
    __extends(MinePetSelect, _super);
    function MinePetSelect() {
        var _this = _super.call(this, 1) || this;
        _this.setInitData();
        return _this;
    }
    MinePetSelect.prototype.setInitData = function () {
        this.bodyName = GameCenter_1.default.game.partnerBodyName;
        this.floorName = GameCenter_1.default.game.mineFloorName;
    };
    return MinePetSelect;
}(MineSelect_1.MineSelect));
exports.default = MinePetSelect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcbWluZVxcbW5nXFxNaW5lUGFydG5lclNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBa0Q7QUFDbEQsMkNBQTBDO0FBRTFDO0lBQTJDLGlDQUFVO0lBRWpEO1FBQUEsWUFDSSxrQkFBTSxDQUFDLENBQUMsU0FFWDtRQURHLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7SUFDdkIsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUNuRCxDQUFDO0lBRUwsb0JBQUM7QUFBRCxDQVpBLEFBWUMsQ0FaMEMsdUJBQVUsR0FZcEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUNlbnRlciBmcm9tIFwiLi4vLi4vLi4vZGF0YS9HYW1lQ2VudGVyXCI7XHJcbmltcG9ydCB7IE1pbmVTZWxlY3QgfSBmcm9tIFwiLi9NaW5lU2VsZWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5lUGV0U2VsZWN0IGV4dGVuZHMgTWluZVNlbGVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoMSk7XHJcbiAgICAgICAgdGhpcy5zZXRJbml0RGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEluaXREYXRhKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYm9keU5hbWUgPSBHYW1lQ2VudGVyLmdhbWUucGFydG5lckJvZHlOYW1lO1xyXG4gICAgICAgIHRoaXMuZmxvb3JOYW1lID0gR2FtZUNlbnRlci5nYW1lLm1pbmVGbG9vck5hbWU7XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/mine/mng/ToolComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '296d8BDkOlGEIbDuK7/FYDQ', 'ToolComponent');
// script/controllers/mine/mng/ToolComponent.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolIntroCon = exports.ToolBtn = void 0;
var ToolBtn = /** @class */ (function () {
    function ToolBtn(node, id, clickCallback) {
        this.id = -1;
        this.clickCallback = null;
        this.color_red = null;
        this.color_black = null;
        this.id = id;
        this.node = node;
        this.count_box = this.node.getChildByName("count_box");
        this.count_bg = this.count_box.getChildByName("bg");
        this.label_count = this.count_box.getChildByName("number").getComponent(cc.Label);
        this.bg_active = this.node.getChildByName("bg_active");
        this.title_main = this.node.getChildByName("title");
        this.label_title = this.title_main.getChildByName("txt").getComponent(cc.Label);
        this.color_red = new cc.Color(255, 59, 59);
        this.color_black = new cc.Color(0, 0, 0);
        if (clickCallback) {
            this.clickCallback = clickCallback;
        }
    }
    ToolBtn.prototype.active = function (state) {
        this.bg_active.active = state;
        this.title_main.active = state;
        this.count_bg.color = state ? this.color_red : this.color_black;
    };
    ToolBtn.prototype.setCount = function (val) {
        this.label_count.string = val;
    };
    ToolBtn.prototype.setTitleTxt = function (str) {
        this.label_title.string = str;
    };
    ToolBtn.prototype.bindOn = function () {
        this.node.on("touchend", this.onClick, this);
    };
    ToolBtn.prototype.bindOff = function () {
        this.node.off("touchend", this.onClick, this);
    };
    ToolBtn.prototype.onClick = function () {
        if (this.clickCallback)
            this.clickCallback(this.id);
    };
    return ToolBtn;
}());
exports.ToolBtn = ToolBtn;
var ToolIntroCon = /** @class */ (function () {
    function ToolIntroCon(node, id, updateIntro) {
        this.id = -1;
        this.updateIntro = null;
        this.node = node;
        this.id = id;
        if (updateIntro) {
            this.updateIntro = updateIntro;
        }
    }
    ToolIntroCon.prototype.show = function () {
        this.node.active = true;
        if (this.updateIntro) {
            this.updateIntro();
        }
    };
    ToolIntroCon.prototype.hide = function () {
        if (!this.node.active) {
            return;
        }
        this.node.active = false;
    };
    return ToolIntroCon;
}());
exports.ToolIntroCon = ToolIntroCon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcbWluZVxcbW5nXFxUb29sQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBcUJJLGlCQUFZLElBQUksRUFBRSxFQUFFLEVBQUUsYUFBYztRQW5CcEMsT0FBRSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBY2hCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBRXJCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFJZixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWpCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDdEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV2RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVoRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFekMsSUFBSSxhQUFhLEVBQUU7WUFDZixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztTQUN0QztJQUVMLENBQUM7SUFFRCx3QkFBTSxHQUFOLFVBQU8sS0FBYztRQUVqQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRS9CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUVwRSxDQUFDO0lBRUQsMEJBQVEsR0FBUixVQUFTLEdBQUc7UUFDUixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDbEMsQ0FBQztJQUVELDZCQUFXLEdBQVgsVUFBWSxHQUFHO1FBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ2xDLENBQUM7SUFFRCx3QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELHlCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQseUJBQU8sR0FBUDtRQUNJLElBQUksSUFBSSxDQUFDLGFBQWE7WUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUwsY0FBQztBQUFELENBMUVBLEFBMEVDLElBQUE7QUExRVksMEJBQU87QUE0RXBCO0lBT0ksc0JBQVksSUFBSSxFQUFFLEVBQUUsRUFBRSxXQUFZO1FBTGxDLE9BQUUsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUdoQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUlmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBRWIsSUFBSSxXQUFXLEVBQUU7WUFDYixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztTQUNsQztJQUVMLENBQUM7SUFFRCwyQkFBSSxHQUFKO1FBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRXhCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7SUFFTCxDQUFDO0lBRUQsMkJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUFFLE9BQU87U0FBRTtRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVMLG1CQUFDO0FBQUQsQ0FqQ0EsQUFpQ0MsSUFBQTtBQWpDWSxvQ0FBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBUb29sQnRuIHtcclxuXHJcbiAgICBpZDogbnVtYmVyID0gLTE7XHJcblxyXG4gICAgbm9kZTogY2MuTm9kZTtcclxuXHJcbiAgICBjb3VudF9iZzogY2MuTm9kZTtcclxuICAgIGNvdW50X2JveDogY2MuTm9kZTtcclxuXHJcbiAgICBiZ19hY3RpdmU6IGNjLk5vZGU7XHJcbiAgICB0aXRsZV9tYWluOiBjYy5Ob2RlO1xyXG5cclxuXHJcbiAgICBsYWJlbF9jb3VudDogY2MuTGFiZWw7XHJcbiAgICBsYWJlbF90aXRsZTogY2MuTGFiZWw7XHJcblxyXG4gICAgY2xpY2tDYWxsYmFjayA9IG51bGw7XHJcblxyXG4gICAgY29sb3JfcmVkID0gbnVsbDtcclxuICAgIGNvbG9yX2JsYWNrID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihub2RlLCBpZCwgY2xpY2tDYWxsYmFjaz8pIHtcclxuXHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XHJcblxyXG4gICAgICAgIHRoaXMuY291bnRfYm94ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY291bnRfYm94XCIpXHJcbiAgICAgICAgdGhpcy5jb3VudF9iZyA9IHRoaXMuY291bnRfYm94LmdldENoaWxkQnlOYW1lKFwiYmdcIik7XHJcblxyXG4gICAgICAgIHRoaXMubGFiZWxfY291bnQgPSB0aGlzLmNvdW50X2JveC5nZXRDaGlsZEJ5TmFtZShcIm51bWJlclwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuICAgICAgICB0aGlzLmJnX2FjdGl2ZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnX2FjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy50aXRsZV9tYWluID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIik7XHJcbiAgICAgICAgdGhpcy5sYWJlbF90aXRsZSA9IHRoaXMudGl0bGVfbWFpbi5nZXRDaGlsZEJ5TmFtZShcInR4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbG9yX3JlZCA9IG5ldyBjYy5Db2xvcigyNTUsIDU5LCA1OSk7XHJcbiAgICAgICAgdGhpcy5jb2xvcl9ibGFjayA9IG5ldyBjYy5Db2xvcigwLCAwLCAwKTtcclxuXHJcbiAgICAgICAgaWYgKGNsaWNrQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5jbGlja0NhbGxiYWNrID0gY2xpY2tDYWxsYmFjaztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLmJnX2FjdGl2ZS5hY3RpdmUgPSBzdGF0ZTtcclxuICAgICAgICB0aGlzLnRpdGxlX21haW4uYWN0aXZlID0gc3RhdGU7XHJcblxyXG4gICAgICAgIHRoaXMuY291bnRfYmcuY29sb3IgPSBzdGF0ZSA/IHRoaXMuY29sb3JfcmVkIDogdGhpcy5jb2xvcl9ibGFjaztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q291bnQodmFsKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sYWJlbF9jb3VudC5zdHJpbmcgPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGl0bGVUeHQoc3RyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sYWJlbF90aXRsZS5zdHJpbmcgPSBzdHI7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZE9uKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcInRvdWNoZW5kXCIsIHRoaXMub25DbGljaywgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZE9mZigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKFwidG91Y2hlbmRcIiwgdGhpcy5vbkNsaWNrLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmNsaWNrQ2FsbGJhY2spIHRoaXMuY2xpY2tDYWxsYmFjayh0aGlzLmlkKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUb29sSW50cm9Db24ge1xyXG5cclxuICAgIGlkOiBudW1iZXIgPSAtMTtcclxuICAgIG5vZGU6IGNjLk5vZGU7XHJcblxyXG4gICAgdXBkYXRlSW50cm8gPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5vZGUsIGlkLCB1cGRhdGVJbnRybz8pIHtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcblxyXG4gICAgICAgIGlmICh1cGRhdGVJbnRybykge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUludHJvID0gdXBkYXRlSW50cm87XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG93KCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlSW50cm8pIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVJbnRybygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/ui/UILoadTip.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6ee63MtGNRCs7+qoygTJjeG', 'UILoadTip');
// script/controllers/ui/UILoadTip.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var UIBase_1 = require("./UIBase");
var ViewZorder_1 = require("../../data/const/ViewZorder");
var ccclass = cc._decorator.ccclass;
var UILoadTip = /** @class */ (function (_super) {
    __extends(UILoadTip, _super);
    function UILoadTip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UILoadTip.prototype.onUILoad = function () {
        this.icon = this.node.getChildByName("icon");
        this.node.zIndex = ViewZorder_1.ViewZorder.Loading;
        this.hide();
    };
    UILoadTip.prototype.show = function () {
        this.node.active = true;
        this.icon.opacity = 0;
        this.icon.runAction(cc.sequence(cc.delayTime(.5), cc.fadeIn(.2)));
    };
    UILoadTip.prototype.hide = function () {
        this.icon.stopAllActions();
        this.node.active = false;
    };
    UILoadTip = __decorate([
        ccclass
    ], UILoadTip);
    return UILoadTip;
}(UIBase_1.default));
exports.default = UILoadTip;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcdWlcXFVJTG9hZFRpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtQ0FBOEI7QUFDOUIsMERBQXVEO0FBRy9DLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBR2xDO0lBQXVDLDZCQUFNO0lBQTdDOztJQXdCQSxDQUFDO0lBcEJHLDRCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLHVCQUFVLENBQUMsT0FBTyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsd0JBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FDNUIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDaEIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FDZixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsd0JBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUF0QmdCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0F3QjdCO0lBQUQsZ0JBQUM7Q0F4QkQsQUF3QkMsQ0F4QnNDLGdCQUFNLEdBd0I1QztrQkF4Qm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFVJQmFzZSBmcm9tIFwiLi9VSUJhc2VcIjtcclxuaW1wb3J0IHtWaWV3Wm9yZGVyfSBmcm9tIFwiLi4vLi4vZGF0YS9jb25zdC9WaWV3Wm9yZGVyXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlMb2FkVGlwIGV4dGVuZHMgVUlCYXNlIHtcclxuXHJcbiAgICBpY29uOiBjYy5Ob2RlO1xyXG5cclxuICAgIG9uVUlMb2FkKCkge1xyXG4gICAgICAgIHRoaXMuaWNvbiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImljb25cIik7XHJcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IFZpZXdab3JkZXIuTG9hZGluZztcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaWNvbi5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLmljb24ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgIGNjLmRlbGF5VGltZSguNSksXHJcbiAgICAgICAgICAgY2MuZmFkZUluKC4yKSxcclxuICAgICAgICApKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIHRoaXMuaWNvbi5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/ui/UIInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cfd9aq3RmlM16Tmxzt3eI7O', 'UIInfo');
// script/controllers/ui/UIInfo.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var LangMng_1 = require("../../manager/LangMng");
var UIBase_1 = require("./UIBase");
var ViewZorder_1 = require("../../data/const/ViewZorder");
var ccclass = cc._decorator.ccclass;
var UIInfo = /** @class */ (function (_super) {
    __extends(UIInfo, _super);
    function UIInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIInfo.prototype.onUILoad = function () {
        this.node_main = this.node.getChildByName("main");
        this.btn_close = this.node_main.getChildByName("btn_close");
        var con1 = this.node_main.getChildByName("con_1");
        this.label_title_1 = con1.getChildByName("title").getComponent(cc.Label);
        this.label_con_txt_1 = con1.getChildByName("content").getComponent(cc.Label);
        var con2 = this.node_main.getChildByName("con_2");
        this.label_title_2 = con2.getChildByName("title").getComponent(cc.Label);
        this.label_con_txt_2 = con1.getChildByName("content").getComponent(cc.Label);
        this.node.zIndex = ViewZorder_1.ViewZorder.UI;
        this.setTxt();
        this.hide(false);
    };
    UIInfo.prototype.onShow = function () {
        this.onRegisterEvent(this.btn_close, this.onBtnCloseClick, this);
    };
    UIInfo.prototype.show = function () {
        if (this.node.active) {
            return;
        }
        this.node.active = true;
        this.fadeIn();
    };
    UIInfo.prototype.hide = function (isAni) {
        if (isAni === void 0) { isAni = true; }
        if (!this.node.active) {
            return;
        }
        if (isAni) {
            this.fadeOut();
            return;
        }
        this.node.active = false;
    };
    UIInfo.prototype.setTxt = function () {
        this.label_title_1.string = LangMng_1.default.getTxt("I_001");
        this.label_con_txt_1.string = LangMng_1.default.getTxt("I_002");
        this.label_title_2.string = LangMng_1.default.getTxt("I_003");
        this.label_con_txt_2.string = LangMng_1.default.getTxt("I_004");
    };
    UIInfo.prototype.fadeIn = function () {
        this.node.opacity = 0;
        this.node.stopAllActions();
        this.node.runAction(cc.fadeIn(.1).easing(cc.easeSineOut()));
    };
    UIInfo.prototype.fadeOut = function () {
        var _this = this;
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.fadeOut(.1), cc.callFunc(function () {
            _this.node.active = false;
        })));
    };
    UIInfo.prototype.onBtnCloseClick = function () {
        this.hide();
    };
    UIInfo = __decorate([
        ccclass
    ], UIInfo);
    return UIInfo;
}(UIBase_1.default));
exports.default = UIInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcdWlcXFVJSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFDNUMsbUNBQThCO0FBQzlCLDBEQUF5RDtBQUVqRCxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUdsQztJQUFvQywwQkFBTTtJQUExQzs7SUEwRkEsQ0FBQztJQS9FRyx5QkFBUSxHQUFSO1FBRUksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTVELElBQUksSUFBSSxHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTdFLElBQUksSUFBSSxHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTdFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLHVCQUFVLENBQUMsRUFBRSxDQUFDO1FBRWpDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFckIsQ0FBQztJQUVELHVCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQscUJBQUksR0FBSjtRQUVJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDbEIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRXhCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUVsQixDQUFDO0lBRUQscUJBQUksR0FBSixVQUFLLEtBQXFCO1FBQXJCLHNCQUFBLEVBQUEsWUFBcUI7UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ25CLE9BQU87U0FDVjtRQUVELElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBRTdCLENBQUM7SUFFRCx1QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELHVCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFHRCx3QkFBTyxHQUFQO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQzNCLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQ2QsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNSLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FDTCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsZ0NBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBeEZnQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBMEYxQjtJQUFELGFBQUM7Q0ExRkQsQUEwRkMsQ0ExRm1DLGdCQUFNLEdBMEZ6QztrQkExRm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGFuZ01uZyBmcm9tIFwiLi4vLi4vbWFuYWdlci9MYW5nTW5nXCI7XHJcbmltcG9ydCBVSUJhc2UgZnJvbSBcIi4vVUlCYXNlXCI7XHJcbmltcG9ydCB7IFZpZXdab3JkZXIgfSBmcm9tIFwiLi4vLi4vZGF0YS9jb25zdC9WaWV3Wm9yZGVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUluZm8gZXh0ZW5kcyBVSUJhc2Uge1xyXG5cclxuICAgIG5vZGVfbWFpbjogY2MuTm9kZTtcclxuXHJcbiAgICBsYWJlbF90aXRsZV8xOiBjYy5MYWJlbDtcclxuICAgIGxhYmVsX2Nvbl90eHRfMTogY2MuTGFiZWw7XHJcbiAgICBsYWJlbF90aXRsZV8yOiBjYy5MYWJlbDtcclxuICAgIGxhYmVsX2Nvbl90eHRfMjogY2MuTGFiZWw7XHJcblxyXG4gICAgYnRuX2Nsb3NlOiBjYy5Ob2RlO1xyXG5cclxuICAgIG9uVUlMb2FkKCkge1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVfbWFpbiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm1haW5cIik7XHJcbiAgICAgICAgdGhpcy5idG5fY2xvc2UgPSB0aGlzLm5vZGVfbWFpbi5nZXRDaGlsZEJ5TmFtZShcImJ0bl9jbG9zZVwiKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbjE9IHRoaXMubm9kZV9tYWluLmdldENoaWxkQnlOYW1lKFwiY29uXzFcIilcclxuICAgICAgICB0aGlzLmxhYmVsX3RpdGxlXzEgPSBjb24xLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLmxhYmVsX2Nvbl90eHRfMSA9IGNvbjEuZ2V0Q2hpbGRCeU5hbWUoXCJjb250ZW50XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgIGxldCBjb24yPSB0aGlzLm5vZGVfbWFpbi5nZXRDaGlsZEJ5TmFtZShcImNvbl8yXCIpXHJcbiAgICAgICAgdGhpcy5sYWJlbF90aXRsZV8yID0gY29uMi5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5sYWJlbF9jb25fdHh0XzIgPSBjb24xLmdldENoaWxkQnlOYW1lKFwiY29udGVudFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gVmlld1pvcmRlci5VSTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRUeHQoKTtcclxuICAgICAgICB0aGlzLmhpZGUoZmFsc2UpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgICAgdGhpcy5vblJlZ2lzdGVyRXZlbnQodGhpcy5idG5fY2xvc2UsIHRoaXMub25CdG5DbG9zZUNsaWNrLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ub2RlLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5mYWRlSW4oKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZShpc0FuaTogYm9vbGVhbiA9IHRydWUpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLm5vZGUuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc0FuaSkge1xyXG4gICAgICAgICAgICB0aGlzLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRUeHQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sYWJlbF90aXRsZV8xLnN0cmluZyA9IExhbmdNbmcuZ2V0VHh0KFwiSV8wMDFcIik7XHJcbiAgICAgICAgdGhpcy5sYWJlbF9jb25fdHh0XzEuc3RyaW5nID0gTGFuZ01uZy5nZXRUeHQoXCJJXzAwMlwiKTtcclxuICAgICAgICB0aGlzLmxhYmVsX3RpdGxlXzIuc3RyaW5nID0gTGFuZ01uZy5nZXRUeHQoXCJJXzAwM1wiKTtcclxuICAgICAgICB0aGlzLmxhYmVsX2Nvbl90eHRfMi5zdHJpbmcgPSBMYW5nTW5nLmdldFR4dChcIklfMDA0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZhZGVJbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5mYWRlSW4oLjEpLmVhc2luZyhjYy5lYXNlU2luZU91dCgpKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZhZGVPdXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgY2MuZmFkZU91dCguMSksXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkNsb3NlQ2xpY2soKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/scene/DataLoading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0008dcZGeVCd79FDAnjf6f3', 'DataLoading');
// script/data/scene/DataLoading.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var ccclass = cc._decorator.ccclass;
var DataLoading = /** @class */ (function (_super) {
    __extends(DataLoading, _super);
    function DataLoading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataLoading.prototype.onLoad = function () { };
    DataLoading = __decorate([
        ccclass
    ], DataLoading);
    return DataLoading;
}(cc.Component));
exports.default = DataLoading;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxzY2VuZVxcRGF0YUxvYWRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVEsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBbUI7QUFHbEM7SUFBeUMsK0JBQVk7SUFBckQ7O0lBSUEsQ0FBQztJQUZHLDRCQUFNLEdBQU4sY0FBVSxDQUFDO0lBRk0sV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQUkvQjtJQUFELGtCQUFDO0NBSkQsQUFJQyxDQUp3QyxFQUFFLENBQUMsU0FBUyxHQUlwRDtrQkFKb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFMb2FkaW5nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBvbkxvYWQoKSB7fVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/ui/UIMusic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8166cTvy+RJFIeDtGEoIKtC', 'UIMusic');
// script/controllers/ui/UIMusic.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var UIBase_1 = require("./UIBase");
var DataUIMusic_1 = require("../../data/scene/DataUIMusic");
var LangMng_1 = require("../../manager/LangMng");
var MusicMng_1 = require("../../manager/MusicMng");
var BtnType;
(function (BtnType) {
    BtnType[BtnType["Music"] = 0] = "Music";
    BtnType[BtnType["Effect"] = 1] = "Effect";
})(BtnType || (BtnType = {}));
var ccclass = cc._decorator.ccclass;
var UIMusic = /** @class */ (function (_super) {
    __extends(UIMusic, _super);
    function UIMusic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui = null;
        _this._isLangSet = false;
        _this._closeX = -33;
        _this._openX = 33;
        _this._closeColor = new cc.Color(190, 190, 190, 255);
        _this._openColor = new cc.Color(0, 133, 255, 255);
        return _this;
    }
    UIMusic.prototype.onInit = function () {
        cc.game.addPersistRootNode(this.node);
        this.resize();
    };
    UIMusic.prototype.onUILoad = function () {
        this.ui = this.node.addComponent(DataUIMusic_1.default);
        this.updateBtnDisplay(BtnType.Music);
        this.updateBtnDisplay(BtnType.Effect);
        this.hide(false);
    };
    UIMusic.prototype.onShow = function () {
        this.setLang();
        this.onRegisterEvent(this.ui.btn_close, this.onBtnCloseClick, this);
        this.onRegisterEvent(this.ui.btn_music, this.onBtnMusicClick, this);
        this.onRegisterEvent(this.ui.btn_effect, this.onBtnEffectClick, this);
    };
    UIMusic.prototype.onHide = function () {
        this.unRegisterEvent(this.ui.btn_music, this.onBtnCloseClick, this);
        this.unRegisterEvent(this.ui.btn_close, this.onBtnMusicClick, this);
        this.unRegisterEvent(this.ui.btn_effect, this.onBtnEffectClick, this);
    };
    UIMusic.prototype.onBtnCloseClick = function () {
        this.hide();
    };
    UIMusic.prototype.onBtnMusicClick = function () {
        MusicMng_1.default.switchMusic();
        this.updateBtnDisplay(BtnType.Music);
    };
    UIMusic.prototype.onBtnEffectClick = function () {
        MusicMng_1.default.switchEffect();
        this.updateBtnDisplay(BtnType.Effect);
    };
    UIMusic.prototype.updateBtnDisplay = function (type) {
        var state = type == 0 ? MusicMng_1.default.getMusicState() : MusicMng_1.default.getEffectState();
        var circleNode = type == 0 ? this.ui.node_musicCircle : this.ui.node_effectCircle;
        var bgNode = type == 0 ? this.ui.node_musicBg : this.ui.node_effectBg;
        var targetPosX = state ? this._openX : this._closeX;
        var targetColor = state ? this._openColor : this._closeColor;
        circleNode.stopAllActions();
        circleNode.runAction(cc.moveTo(.2, targetPosX, 0).easing(cc.easeSineOut()));
        bgNode.stopAllActions();
        bgNode.runAction(cc.tintTo(.2, targetColor.getR(), targetColor.getG(), targetColor.getB()));
    };
    UIMusic.prototype.show = function () {
        if (this.node.active) {
            return;
        }
        this.node.active = true;
        this.fadeIn();
    };
    UIMusic.prototype.hide = function (isAni) {
        if (isAni === void 0) { isAni = true; }
        if (!this.node.active) {
            return;
        }
        if (isAni) {
            this.fadeOut();
            return;
        }
        this.node.active = false;
    };
    UIMusic.prototype.fadeIn = function () {
        this.ui.node_main.setPosition(0, 2000);
        this.ui.node_main.stopAllActions();
        this.ui.node_main.runAction(cc.sequence(cc.moveTo(.3, 0, 0).easing(cc.easeQuarticActionInOut()), cc.callFunc(function () {
        })));
    };
    UIMusic.prototype.fadeOut = function () {
        var _this = this;
        this.ui.node_main.stopAllActions();
        this.ui.node_main.runAction(cc.sequence(cc.moveTo(.2, 0, 2000).easing(cc.easeSineOut()), cc.callFunc(function () {
            _this.node.active = false;
        })));
    };
    UIMusic.prototype.setLang = function () {
        if (this._isLangSet) {
            return;
        }
        this.ui.label_music.string = LangMng_1.default.getTxt("MB_008");
        this.ui.label_effect.string = LangMng_1.default.getTxt("MB_009");
        this.ui.label_close.string = LangMng_1.default.getTxt("P_1003");
        this._isLangSet = true;
    };
    UIMusic.prototype.resize = function () {
        var pos = this.getCanvas();
        this.node.setPosition(pos.x, pos.y);
    };
    UIMusic.prefabUrl = "music_panel";
    UIMusic.className = "UIMusic";
    UIMusic = __decorate([
        ccclass
    ], UIMusic);
    return UIMusic;
}(UIBase_1.default));
exports.default = UIMusic;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcdWlcXFVJTXVzaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBQzlCLDREQUF1RDtBQUN2RCxpREFBNEM7QUFDNUMsbURBQThDO0FBRTlDLElBQUssT0FHSjtBQUhELFdBQUssT0FBTztJQUNSLHVDQUFLLENBQUE7SUFDTCx5Q0FBTSxDQUFBO0FBQ1YsQ0FBQyxFQUhJLE9BQU8sS0FBUCxPQUFPLFFBR1g7QUFFTSxJQUFBLE9BQU8sR0FBSSxFQUFFLENBQUMsVUFBVSxRQUFqQixDQUFrQjtBQUdoQztJQUFxQywyQkFBTTtJQUEzQztRQUFBLHFFQWtKQztRQWhKRyxRQUFFLEdBQWdCLElBQUksQ0FBQztRQUtmLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGFBQU8sR0FBVyxDQUFDLEVBQUUsQ0FBQztRQUN0QixZQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLGlCQUFXLEdBQWEsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELGdCQUFVLEdBQWEsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDOztJQXVJbEUsQ0FBQztJQXJJRyx3QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCwwQkFBUSxHQUFSO1FBRUksSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFDLENBQUM7UUFFOUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8s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U0FBUyxDQUFDO0lBTHRCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FrSjNCO0lBQUQsY0FBQztDQWxKRCxBQWtKQyxDQWxKb0MsZ0JBQU0sR0FrSjFDO2tCQWxKb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSUJhc2UgZnJvbSBcIi4vVUlCYXNlXCI7XHJcbmltcG9ydCBEYXRhVUlNdXNpYyBmcm9tIFwiLi4vLi4vZGF0YS9zY2VuZS9EYXRhVUlNdXNpY1wiO1xyXG5pbXBvcnQgTGFuZ01uZyBmcm9tIFwiLi4vLi4vbWFuYWdlci9MYW5nTW5nXCI7XHJcbmltcG9ydCBNdXNpY01uZyBmcm9tIFwiLi4vLi4vbWFuYWdlci9NdXNpY01uZ1wiO1xyXG5cclxuZW51bSBCdG5UeXBlIHtcclxuICAgIE11c2ljLFxyXG4gICAgRWZmZWN0LFxyXG59XHJcblxyXG5jb25zdCB7Y2NjbGFzc30gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlNdXNpYyBleHRlbmRzIFVJQmFzZSB7XHJcblxyXG4gICAgdWk6IERhdGFVSU11c2ljID0gbnVsbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIHByZWZhYlVybCA9IFwibXVzaWNfcGFuZWxcIjtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgY2xhc3NOYW1lID0gXCJVSU11c2ljXCI7XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNMYW5nU2V0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9jbG9zZVg6IG51bWJlciA9IC0zMztcclxuICAgIHByaXZhdGUgX29wZW5YOiBudW1iZXIgPSAzMztcclxuICAgIHByaXZhdGUgX2Nsb3NlQ29sb3I6IGNjLkNvbG9yID0gbmV3IGNjLkNvbG9yKDE5MCwgMTkwLCAxOTAsIDI1NSk7XHJcbiAgICBwcml2YXRlIF9vcGVuQ29sb3I6IGNjLkNvbG9yID0gbmV3IGNjLkNvbG9yKDAsIDEzMywgMjU1LCAyNTUpO1xyXG5cclxuICAgIG9uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMucmVzaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25VSUxvYWQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMudWkgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KERhdGFVSU11c2ljKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVCdG5EaXNwbGF5KEJ0blR5cGUuTXVzaWMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQnRuRGlzcGxheShCdG5UeXBlLkVmZmVjdCk7XHJcblxyXG4gICAgICAgIHRoaXMuaGlkZShmYWxzZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uU2hvdygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRMYW5nKCk7XHJcblxyXG4gICAgICAgIHRoaXMub25SZWdpc3RlckV2ZW50KHRoaXMudWkuYnRuX2Nsb3NlLCB0aGlzLm9uQnRuQ2xvc2VDbGljaywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblJlZ2lzdGVyRXZlbnQodGhpcy51aS5idG5fbXVzaWMsIHRoaXMub25CdG5NdXNpY0NsaWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm9uUmVnaXN0ZXJFdmVudCh0aGlzLnVpLmJ0bl9lZmZlY3QsIHRoaXMub25CdG5FZmZlY3RDbGljaywgdGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uSGlkZSgpOiB2b2lkIHtcclxuXHJcblxyXG4gICAgICAgIHRoaXMudW5SZWdpc3RlckV2ZW50KHRoaXMudWkuYnRuX211c2ljLCB0aGlzLm9uQnRuQ2xvc2VDbGljaywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51blJlZ2lzdGVyRXZlbnQodGhpcy51aS5idG5fY2xvc2UsIHRoaXMub25CdG5NdXNpY0NsaWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVuUmVnaXN0ZXJFdmVudCh0aGlzLnVpLmJ0bl9lZmZlY3QsIHRoaXMub25CdG5FZmZlY3RDbGljaywgdGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuQ2xvc2VDbGljaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bk11c2ljQ2xpY2soKTogdm9pZCB7XHJcbiAgICAgICAgTXVzaWNNbmcuc3dpdGNoTXVzaWMoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJ0bkRpc3BsYXkoQnRuVHlwZS5NdXNpYyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5FZmZlY3RDbGljaygpOiB2b2lkIHtcclxuICAgICAgICBNdXNpY01uZy5zd2l0Y2hFZmZlY3QoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJ0bkRpc3BsYXkoQnRuVHlwZS5FZmZlY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUJ0bkRpc3BsYXkodHlwZTogQnRuVHlwZSk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgc3RhdGUgPSB0eXBlID09IDAgPyBNdXNpY01uZy5nZXRNdXNpY1N0YXRlKCkgOiBNdXNpY01uZy5nZXRFZmZlY3RTdGF0ZSgpO1xyXG4gICAgICAgIGxldCBjaXJjbGVOb2RlID0gdHlwZSA9PSAwID8gdGhpcy51aS5ub2RlX211c2ljQ2lyY2xlIDogdGhpcy51aS5ub2RlX2VmZmVjdENpcmNsZTtcclxuICAgICAgICBsZXQgYmdOb2RlID0gdHlwZSA9PSAwID8gdGhpcy51aS5ub2RlX211c2ljQmcgOiB0aGlzLnVpLm5vZGVfZWZmZWN0Qmc7XHJcbiAgICAgICAgbGV0IHRhcmdldFBvc1ggPSBzdGF0ZSA/IHRoaXMuX29wZW5YIDogdGhpcy5fY2xvc2VYO1xyXG4gICAgICAgIGxldCB0YXJnZXRDb2xvciA9IHN0YXRlID8gdGhpcy5fb3BlbkNvbG9yIDogdGhpcy5fY2xvc2VDb2xvcjtcclxuXHJcbiAgICAgICAgY2lyY2xlTm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIGNpcmNsZU5vZGUucnVuQWN0aW9uKFxyXG4gICAgICAgICAgICBjYy5tb3ZlVG8oLjIsIHRhcmdldFBvc1gsIDApLmVhc2luZyhjYy5lYXNlU2luZU91dCgpKSxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBiZ05vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICBiZ05vZGUucnVuQWN0aW9uKFxyXG4gICAgICAgICAgICBjYy50aW50VG8oLjIsIHRhcmdldENvbG9yLmdldFIoKSwgdGFyZ2V0Q29sb3IuZ2V0RygpLCB0YXJnZXRDb2xvci5nZXRCKCkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ub2RlLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZhZGVJbigpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBoaWRlKGlzQW5pOiBib29sZWFuID0gdHJ1ZSkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzQW5pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFkZU91dCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZhZGVJbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpLm5vZGVfbWFpbi5zZXRQb3NpdGlvbigwLCAyMDAwKTtcclxuICAgICAgICB0aGlzLnVpLm5vZGVfbWFpbi5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMudWkubm9kZV9tYWluLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgY2MubW92ZVRvKC4zLCAwLCAwKS5lYXNpbmcoY2MuZWFzZVF1YXJ0aWNBY3Rpb25Jbk91dCgpKSxcclxuICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApKTtcclxuICAgIH1cclxuXHJcbiAgICBmYWRlT3V0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudWkubm9kZV9tYWluLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy51aS5ub2RlX21haW4ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbyguMiwgMCwgMjAwMCkuZWFzaW5nKGNjLmVhc2VTaW5lT3V0KCkpLFxyXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGFuZygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2lzTGFuZ1NldCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVpLmxhYmVsX211c2ljLnN0cmluZyA9IExhbmdNbmcuZ2V0VHh0KFwiTUJfMDA4XCIpO1xyXG4gICAgICAgIHRoaXMudWkubGFiZWxfZWZmZWN0LnN0cmluZyA9IExhbmdNbmcuZ2V0VHh0KFwiTUJfMDA5XCIpO1xyXG4gICAgICAgIHRoaXMudWkubGFiZWxfY2xvc2Uuc3RyaW5nID0gTGFuZ01uZy5nZXRUeHQoXCJQXzEwMDNcIik7XHJcblxyXG4gICAgICAgIHRoaXMuX2lzTGFuZ1NldCA9IHRydWU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBwb3MgPSB0aGlzLmdldENhbnZhcygpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihwb3MueCwgcG9zLnkpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/ui/UILoading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f7418/eTg1GuKl68PWCV/8c', 'UILoading');
// script/controllers/ui/UILoading.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var UIBase_1 = require("./UIBase");
var ccclass = cc._decorator.ccclass;
var UILoading = /** @class */ (function (_super) {
    __extends(UILoading, _super);
    function UILoading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UILoading.prototype.onInit = function () {
        cc.game.addPersistRootNode(this.node);
    };
    UILoading.prototype.onUILoad = function () {
        this.resize();
    };
    UILoading.prototype.show = function () {
        if (this.node.active) {
            return;
        }
        this.node.active = true;
        this.setTxt();
        this.fadeIn();
    };
    UILoading.prototype.hide = function (isAni) {
        if (isAni === void 0) { isAni = true; }
        if (!this.node.active) {
            return;
        }
        if (isAni) {
            this.fadeOut();
            return;
        }
        this.node.active = false;
    };
    UILoading.prototype.fadeIn = function () {
        this.node.opacity = 0;
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.fadeIn(.1), cc.callFunc(function () {
        })));
    };
    UILoading.prototype.fadeOut = function () {
        var _this = this;
        this.node.runAction(cc.sequence(cc.delayTime(.2), cc.fadeOut(.16), cc.callFunc(function () {
            _this.node.active = false;
        })));
    };
    UILoading.prototype.setTxt = function () {
    };
    UILoading.prototype.resize = function () {
        var pos = this.getCanvas();
        this.node.setPosition(pos.x, pos.y);
    };
    UILoading.prefabUrl = "loading_full_plane";
    UILoading.className = "UILoading";
    UILoading = __decorate([
        ccclass
    ], UILoading);
    return UILoading;
}(UIBase_1.default));
exports.default = UILoading;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcdWlcXFVJTG9hZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFFdEIsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBbUI7QUFHbEM7SUFBdUMsNkJBQU07SUFBN0M7O0lBeUVBLENBQUM7SUFuRUcsMEJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCw0QkFBUSxHQUFSO1FBRUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCx3QkFBSSxHQUFKO1FBRUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNsQixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCx3QkFBSSxHQUFKLFVBQUssS0FBcUI7UUFBckIsc0JBQUEsRUFBQSxZQUFxQjtRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDbkIsT0FBTztTQUNWO1FBRUQsSUFBSSxLQUFLLEVBQUU7WUFDUCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFFN0IsQ0FBQztJQUdELDBCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUMzQixFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUNiLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFDWixDQUFDLENBQUMsQ0FDTCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBR0QsMkJBQU8sR0FBUDtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FDM0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDaEIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFDZixFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ1IsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUNMLENBQUMsQ0FBQztJQUNQLENBQUM7SUFHRCwwQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELDBCQUFNLEdBQU47UUFDSSxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQXJFZ0IsbUJBQVMsR0FBRyxvQkFBb0IsQ0FBQztJQUNqQyxtQkFBUyxHQUFHLFdBQVcsQ0FBQztJQUh4QixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBeUU3QjtJQUFELGdCQUFDO0NBekVELEFBeUVDLENBekVzQyxnQkFBTSxHQXlFNUM7a0JBekVvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJQmFzZSBmcm9tIFwiLi9VSUJhc2VcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJTG9hZGluZyBleHRlbmRzIFVJQmFzZSB7XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBwcmVmYWJVcmwgPSBcImxvYWRpbmdfZnVsbF9wbGFuZVwiO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBjbGFzc05hbWUgPSBcIlVJTG9hZGluZ1wiO1xyXG5cclxuXHJcbiAgICBvbkluaXQoKSB7XHJcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBvblVJTG9hZCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ub2RlLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNldFR4dCgpO1xyXG4gICAgICAgIHRoaXMuZmFkZUluKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZShpc0FuaTogYm9vbGVhbiA9IHRydWUpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLm5vZGUuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc0FuaSkge1xyXG4gICAgICAgICAgICB0aGlzLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgZmFkZUluKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICBjYy5mYWRlSW4oLjEpLFxyXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZhZGVPdXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKC4yKSxcclxuICAgICAgICAgICAgY2MuZmFkZU91dCguMTYpLFxyXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldFR4dCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMuZ2V0Q2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHBvcy54LCBwb3MueSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/ui/UIMessage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2d4de+mDeJJN7KetexHq3uT', 'UIMessage');
// script/controllers/ui/UIMessage.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var UIBase_1 = require("./UIBase");
var DataUIMessage_1 = require("../../data/scene/DataUIMessage");
var LangMng_1 = require("../../manager/LangMng");
var ccclass = cc._decorator.ccclass;
var PopType;
(function (PopType) {
    PopType[PopType["All"] = 0] = "All";
    PopType[PopType["Confirm"] = 1] = "Confirm";
    PopType[PopType["None"] = 2] = "None";
})(PopType || (PopType = {}));
var UIMessage = /** @class */ (function (_super) {
    __extends(UIMessage, _super);
    function UIMessage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui = null;
        _this._isLangSet = false;
        _this._type = PopType.None;
        _this._canCover = true;
        _this._autoClose = false;
        _this._timer = null;
        _this._timerTime = 3000;
        return _this;
    }
    UIMessage.prototype.onInit = function (params) {
        cc.game.addPersistRootNode(this.node);
    };
    UIMessage.prototype.onUILoad = function () {
        this.ui = this.node.addComponent(DataUIMessage_1.default);
        this.resize();
        this.hide(false);
    };
    UIMessage.prototype.onShow = function () {
        this.onRegisterEvent(this.ui.btn_confirm, this.onConfirmClick, this);
        this.onRegisterEvent(this.ui.btn_cancel, this.onCancelClick, this);
        this.onRegisterEvent(this.ui.node_backBg, this.onBackBgClick, this);
        this.setLang();
    };
    UIMessage.prototype.onHide = function () {
        this.unRegisterEvent(this.ui.btn_cancel, this.onConfirmClick, this);
        this.unRegisterEvent(this.ui.btn_cancel, this.onCancelClick, this);
        this.unRegisterEvent(this.ui.node_backBg, this.onBackBgClick, this);
        this._canCover = true;
    };
    UIMessage.prototype.onConfirmClick = function () {
        if (this._confirmCb) {
            this._confirmCb();
        }
        this.hide();
    };
    UIMessage.prototype.onCancelClick = function () {
        if (this._cancelCb) {
            this._cancelCb();
        }
        this.hide();
    };
    UIMessage.prototype.onBackBgClick = function () {
        this.hide();
    };
    UIMessage.prototype.show = function (params) {
        var _this = this;
        if (params == undefined) {
            return;
        }
        var data = params;
        this._type = data.type;
        this._content = data.content;
        this._confirmCb = data.confirmCb;
        this._cancelCb = data.cancelCb;
        if (data.canCover != undefined) {
            this._canCover = data.canCover;
        }
        if (!this._canCover && this.node.active) {
            return;
        }
        if (data.autoClose != undefined) {
            this._autoClose = data.autoClose;
        }
        if (this._autoClose) {
            this._timer = setTimeout(function () {
                _this.hide();
            }, this._timerTime);
        }
        this.node.active = true;
        this.setIntroTxt();
        this.setBtnsDisplay();
        this.fadeIn();
    };
    UIMessage.prototype.hide = function (isAni) {
        if (isAni === void 0) { isAni = true; }
        clearTimeout(this._timer);
        if (!this.node.active) {
            return;
        }
        if (isAni) {
            this.fadeOut();
            return;
        }
        this.node.active = false;
    };
    UIMessage.prototype.fadeIn = function () {
        this.ui.node_main.opacity = 0;
        this.ui.node_main.scale = 1.3;
        this.ui.node_main.stopAllActions();
        this.ui.node_main.runAction(cc.sequence(cc.spawn(cc.fadeIn(.15), cc.scaleTo(.2, 1).easing(cc.easeBackOut())), cc.callFunc(function () {
        })));
    };
    UIMessage.prototype.fadeOut = function () {
        var _this = this;
        this.ui.node_main.stopAllActions();
        this.ui.node_main.runAction(cc.sequence(cc.fadeOut(.1), cc.callFunc(function () {
            _this.node.active = false;
        })));
    };
    UIMessage.prototype.setBtnsDisplay = function () {
        switch (this._type) {
            case PopType.Confirm:
                this.setBtnCancelActive(false);
                this.setBtnConfirmActive(true);
                break;
            case PopType.None:
                this.setBtnCancelActive(false);
                this.setBtnConfirmActive(false);
                break;
            default:
                this.setBtnCancelActive(true);
                this.setBtnConfirmActive(true);
        }
    };
    UIMessage.prototype.setBtnConfirmActive = function (state) {
        this.ui.btn_confirm.active = state;
    };
    UIMessage.prototype.setBtnCancelActive = function (state) {
        this.ui.btn_cancel.active = state;
    };
    UIMessage.prototype.setIntroTxt = function () {
        this.ui.label_msg_txt.string = this._content;
    };
    UIMessage.prototype.setLang = function () {
        if (this._isLangSet) {
            return;
        }
        this.ui.label_confirm.string = LangMng_1.default.getTxt("P_1001");
        this.ui.label_cancel.string = LangMng_1.default.getTxt("P_1002");
        this._isLangSet = true;
    };
    UIMessage.prototype.resize = function () {
        var pos = this.getCanvas();
        this.node.setPosition(pos.x, pos.y);
    };
    UIMessage.prefabUrl = "message_panel";
    UIMessage.className = "UIMessage";
    UIMessage = __decorate([
        ccclass
    ], UIMessage);
    return UIMessage;
}(UIBase_1.default));
exports.default = UIMessage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcdWlcXFVJTWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFFOUIsZ0VBQTJEO0FBQzNELGlEQUE0QztBQUVwQyxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUVsQyxJQUFLLE9BSUo7QUFKRCxXQUFLLE9BQU87SUFDUixtQ0FBRyxDQUFBO0lBQ0gsMkNBQU8sQ0FBQTtJQUNQLHFDQUFJLENBQUE7QUFDUixDQUFDLEVBSkksT0FBTyxLQUFQLE9BQU8sUUFJWDtBQVlEO0lBQXVDLDZCQUFNO0lBQTdDO1FBQUEscUVBaU1DO1FBL0xHLFFBQUUsR0FBa0IsSUFBSSxDQUFDO1FBS2pCLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLFdBQUssR0FBVyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBSTdCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsWUFBTSxHQUFXLElBQUksQ0FBQztRQUN0QixnQkFBVSxHQUFXLElBQUksQ0FBQzs7SUFrTHRDLENBQUM7SUEvS0csMEJBQU0sR0FBTixVQUFPLE1BQU07UUFDVCxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsdUJBQWEsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELDBCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFF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LFFBQVEsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV2RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUUzQixDQUFDO0lBRUQsMEJBQU0sR0FBTjtRQUNJLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBM0xnQixtQkFBUyxHQUFHLGVBQWUsQ0FBQztJQUM1QixtQkFBUyxHQUFHLFdBQVcsQ0FBQztJQUx4QixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBaU03QjtJQUFELGdCQUFDO0NBak1ELEFBaU1DLENBak1zQyxnQkFBTSxHQWlNNUM7a0JBak1vQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJQmFzZSBmcm9tIFwiLi9VSUJhc2VcIjtcclxuaW1wb3J0IHsgTG9nIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9Mb2dcIjtcclxuaW1wb3J0IERhdGFVSU1lc3NhZ2UgZnJvbSBcIi4uLy4uL2RhdGEvc2NlbmUvRGF0YVVJTWVzc2FnZVwiO1xyXG5pbXBvcnQgTGFuZ01uZyBmcm9tIFwiLi4vLi4vbWFuYWdlci9MYW5nTW5nXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5lbnVtIFBvcFR5cGUge1xyXG4gICAgQWxsLFxyXG4gICAgQ29uZmlybSxcclxuICAgIE5vbmVcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dQYXJhbXMge1xyXG4gICAgdHlwZTogbnVtYmVyLFxyXG4gICAgY29udGVudDogc3RyaW5nLFxyXG4gICAgY29uZmlybUNiPzogRnVuY3Rpb24sXHJcbiAgICBjYW5jZWxDYj86IEZ1bmN0aW9uXHJcbiAgICBjYW5Db3Zlcj86IGJvb2xlYW4sXHJcbiAgICBhdXRvQ2xvc2U/OiBib29sZWFuLFxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1lc3NhZ2UgZXh0ZW5kcyBVSUJhc2Uge1xyXG5cclxuICAgIHVpOiBEYXRhVUlNZXNzYWdlID0gbnVsbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIHByZWZhYlVybCA9IFwibWVzc2FnZV9wYW5lbFwiO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBjbGFzc05hbWUgPSBcIlVJTWVzc2FnZVwiO1xyXG5cclxuICAgIHByaXZhdGUgX2lzTGFuZ1NldDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfdHlwZTogbnVtYmVyID0gUG9wVHlwZS5Ob25lO1xyXG4gICAgcHJpdmF0ZSBfY29udGVudDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfY29uZmlybUNiOiBGdW5jdGlvbjtcclxuICAgIHByaXZhdGUgX2NhbmNlbENiOiBGdW5jdGlvbjtcclxuICAgIHByaXZhdGUgX2NhbkNvdmVyOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgX2F1dG9DbG9zZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfdGltZXI6IG51bWJlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIF90aW1lclRpbWU6IG51bWJlciA9IDMwMDA7XHJcblxyXG5cclxuICAgIG9uSW5pdChwYXJhbXMpOiB2b2lkIHtcclxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVUlMb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudWkgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KERhdGFVSU1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMucmVzaXplKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblJlZ2lzdGVyRXZlbnQodGhpcy51aS5idG5fY29uZmlybSwgdGhpcy5vbkNvbmZpcm1DbGljaywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblJlZ2lzdGVyRXZlbnQodGhpcy51aS5idG5fY2FuY2VsLCB0aGlzLm9uQ2FuY2VsQ2xpY2ssIHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25SZWdpc3RlckV2ZW50KHRoaXMudWkubm9kZV9iYWNrQmcsIHRoaXMub25CYWNrQmdDbGljaywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZXRMYW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25IaWRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudW5SZWdpc3RlckV2ZW50KHRoaXMudWkuYnRuX2NhbmNlbCwgdGhpcy5vbkNvbmZpcm1DbGljaywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51blJlZ2lzdGVyRXZlbnQodGhpcy51aS5idG5fY2FuY2VsLCB0aGlzLm9uQ2FuY2VsQ2xpY2ssIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudW5SZWdpc3RlckV2ZW50KHRoaXMudWkubm9kZV9iYWNrQmcsIHRoaXMub25CYWNrQmdDbGljaywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5fY2FuQ292ZXIgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29uZmlybUNsaWNrKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fY29uZmlybUNiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpcm1DYigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2FuY2VsQ2xpY2soKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jYW5jZWxDYikge1xyXG4gICAgICAgICAgICB0aGlzLl9jYW5jZWxDYigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uQmFja0JnQ2xpY2soKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdyhwYXJhbXMpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHBhcmFtcyA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRhdGEgPSBwYXJhbXMgYXMgRGlhbG9nUGFyYW1zO1xyXG4gICAgICAgIHRoaXMuX3R5cGUgPSBkYXRhLnR5cGU7XHJcbiAgICAgICAgdGhpcy5fY29udGVudCA9IGRhdGEuY29udGVudDtcclxuICAgICAgICB0aGlzLl9jb25maXJtQ2IgPSBkYXRhLmNvbmZpcm1DYjtcclxuICAgICAgICB0aGlzLl9jYW5jZWxDYiA9IGRhdGEuY2FuY2VsQ2I7XHJcblxyXG4gICAgICAgIGlmIChkYXRhLmNhbkNvdmVyICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYW5Db3ZlciA9IGRhdGEuY2FuQ292ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighdGhpcy5fY2FuQ292ZXIgJiYgdGhpcy5ub2RlLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGF0YS5hdXRvQ2xvc2UgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2F1dG9DbG9zZSA9IGRhdGEuYXV0b0Nsb3NlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2F1dG9DbG9zZSkge1xyXG4gICAgICAgICAgICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMuX3RpbWVyVGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNldEludHJvVHh0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRCdG5zRGlzcGxheSgpO1xyXG4gICAgICAgIHRoaXMuZmFkZUluKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoaXNBbmk6IGJvb2xlYW4gPSB0cnVlKSB7XHJcblxyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5ub2RlLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNBbmkpIHtcclxuICAgICAgICAgICAgdGhpcy5mYWRlT3V0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZmFkZUluKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudWkubm9kZV9tYWluLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMudWkubm9kZV9tYWluLnNjYWxlID0gMS4zO1xyXG4gICAgICAgIHRoaXMudWkubm9kZV9tYWluLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy51aS5ub2RlX21haW4ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnNwYXduKFxyXG4gICAgICAgICAgICBjYy5mYWRlSW4oLjE1KSxcclxuICAgICAgICAgICAgY2Muc2NhbGVUbyguMiwgMSkuZWFzaW5nKGNjLmVhc2VCYWNrT3V0KCkpXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZhZGVPdXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51aS5ub2RlX21haW4uc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLnVpLm5vZGVfbWFpbi5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLmZhZGVPdXQoLjEpLFxyXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QnRuc0Rpc3BsYXkoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fdHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFBvcFR5cGUuQ29uZmlybTpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QnRuQ2FuY2VsQWN0aXZlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QnRuQ29uZmlybUFjdGl2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICBQb3BUeXBlLk5vbmU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEJ0bkNhbmNlbEFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEJ0bkNvbmZpcm1BY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEJ0bkNhbmNlbEFjdGl2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QnRuQ29uZmlybUFjdGl2ZSh0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldEJ0bkNvbmZpcm1BY3RpdmUoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpLmJ0bl9jb25maXJtLmFjdGl2ZSA9IHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEJ0bkNhbmNlbEFjdGl2ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudWkuYnRuX2NhbmNlbC5hY3RpdmUgPSBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbnRyb1R4dCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpLmxhYmVsX21zZ190eHQuc3RyaW5nID0gdGhpcy5fY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMYW5nKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5faXNMYW5nU2V0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudWkubGFiZWxfY29uZmlybS5zdHJpbmcgPSBMYW5nTW5nLmdldFR4dChcIlBfMTAwMVwiKTtcclxuICAgICAgICB0aGlzLnVpLmxhYmVsX2NhbmNlbC5zdHJpbmcgPSBMYW5nTW5nLmdldFR4dChcIlBfMTAwMlwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5faXNMYW5nU2V0ID0gdHJ1ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMuZ2V0Q2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHBvcy54LCBwb3MueSk7XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/ui/UISkinPop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '47f5anK9OFGM5aOAaXeNX9s', 'UISkinPop');
// script/controllers/ui/UISkinPop.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AssetsMng_1 = require("../../manager/AssetsMng");
var GameCenter_1 = require("../../data/GameCenter");
var PropSelectPop_1 = require("../mine/pop/PropSelectPop");
var LangMng_1 = require("../../manager/LangMng");
var UISkinPop = /** @class */ (function (_super) {
    __extends(UISkinPop, _super);
    function UISkinPop() {
        var _this = _super.call(this) || this;
        _this.langTxtData = null;
        _this.langTxtData = {
            noDisplay: LangMng_1.default.getTxt("T_113"),
        };
        _this.btnIconImg = {
            n: _this.getBtnNormalImg(),
            a: _this.getBtnActiveImg(),
        };
        return _this;
    }
    UISkinPop.prototype.getListData = function () {
        return GameCenter_1.default.game.mineSkinListData;
    };
    UISkinPop.prototype.getBtnNormalImg = function () {
        var arr = [null];
        var img = AssetsMng_1.default.getAssets("decoration.plist");
        for (var i = 1; i < 8; i++) {
            arr[i] = img.getSpriteFrame("skin_01_n");
        }
        return arr;
    };
    UISkinPop.prototype.getBtnActiveImg = function () {
        var arr = [null];
        var img = AssetsMng_1.default.getAssets("decoration.plist");
        for (var i = 1; i < 8; i++) {
            arr[i] = img.getSpriteFrame("skin_01_a");
        }
        return arr;
    };
    UISkinPop.prototype.getCurrentSelectID = function (id) {
        return GameCenter_1.default.game.mineSkin[id];
    };
    return UISkinPop;
}(PropSelectPop_1.default));
exports.default = UISkinPop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcdWlcXFVJU2tpblBvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Q7QUFDaEQsb0RBQStDO0FBQy9DLDJEQUFzRDtBQUN0RCxpREFBNEM7QUFFNUM7SUFBdUMsNkJBQWE7SUFJaEQ7UUFBQSxZQUVJLGlCQUFPLFNBV1Y7UUFmRCxpQkFBVyxHQUFHLElBQUksQ0FBQztRQU1mLEtBQUksQ0FBQyxXQUFXLEdBQUc7WUFDZixTQUFTLEVBQUUsaUJBQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ3JDLENBQUE7UUFFRCxLQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2QsQ0FBQyxFQUFFLEtBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsQ0FBQyxFQUFFLEtBQUksQ0FBQyxlQUFlLEVBQUU7U0FDNUIsQ0FBQTs7SUFFTCxDQUFDO0lBRUQsK0JBQVcsR0FBWDtRQUNJLE9BQU8sb0JBQVUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDNUMsQ0FBQztJQUVELG1DQUFlLEdBQWY7UUFFRyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLElBQUksR0FBRyxHQUFHLG1CQUFTLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFbEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM1QztRQUVELE9BQU8sR0FBRyxDQUFDO0lBRWQsQ0FBQztJQUVELG1DQUFlLEdBQWY7UUFFSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLElBQUksR0FBRyxHQUFHLG1CQUFTLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFbEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM1QztRQUVELE9BQU8sR0FBRyxDQUFDO0lBRWYsQ0FBQztJQUVELHNDQUFrQixHQUFsQixVQUFtQixFQUFFO1FBQ2pCLE9BQU8sb0JBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTCxnQkFBQztBQUFELENBckRBLEFBcURDLENBckRzQyx1QkFBYSxHQXFEbkQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXNzZXRzTW5nIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0Fzc2V0c01uZ1wiO1xyXG5pbXBvcnQgR2FtZUNlbnRlciBmcm9tIFwiLi4vLi4vZGF0YS9HYW1lQ2VudGVyXCI7XHJcbmltcG9ydCBQcm9wU2VsZWN0UG9wIGZyb20gXCIuLi9taW5lL3BvcC9Qcm9wU2VsZWN0UG9wXCI7XHJcbmltcG9ydCBMYW5nTW5nIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0xhbmdNbmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJU2tpblBvcCBleHRlbmRzIFByb3BTZWxlY3RQb3Age1xyXG5cclxuICAgIGxhbmdUeHREYXRhID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5sYW5nVHh0RGF0YSA9IHtcclxuICAgICAgICAgICAgbm9EaXNwbGF5OiBMYW5nTW5nLmdldFR4dChcIlRfMTEzXCIpLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5idG5JY29uSW1nID0ge1xyXG4gICAgICAgICAgICBuOiB0aGlzLmdldEJ0bk5vcm1hbEltZygpLFxyXG4gICAgICAgICAgICBhOiB0aGlzLmdldEJ0bkFjdGl2ZUltZygpLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGlzdERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIEdhbWVDZW50ZXIuZ2FtZS5taW5lU2tpbkxpc3REYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJ0bk5vcm1hbEltZygpIHtcclxuXHJcbiAgICAgICBsZXQgYXJyID0gW251bGxdO1xyXG4gICAgICAgbGV0IGltZyA9IEFzc2V0c01uZy5nZXRBc3NldHMoXCJkZWNvcmF0aW9uLnBsaXN0XCIpO1xyXG5cclxuICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgICAgICAgYXJyW2ldID0gaW1nLmdldFNwcml0ZUZyYW1lKFwic2tpbl8wMV9uXCIpO1xyXG4gICAgICAgfVxyXG5cclxuICAgICAgIHJldHVybiBhcnI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEJ0bkFjdGl2ZUltZygpIHtcclxuXHJcbiAgICAgICAgbGV0IGFyciA9IFtudWxsXTtcclxuICAgICAgICBsZXQgaW1nID0gQXNzZXRzTW5nLmdldEFzc2V0cyhcImRlY29yYXRpb24ucGxpc3RcIik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFycltpXSA9IGltZy5nZXRTcHJpdGVGcmFtZShcInNraW5fMDFfYVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhcnI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEN1cnJlbnRTZWxlY3RJRChpZCkge1xyXG4gICAgICAgIHJldHVybiBHYW1lQ2VudGVyLmdhbWUubWluZVNraW5baWRdO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/mine/MineMngCon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6ed47uaRptLMIrZ6C4JFDxl', 'MineMngCon');
// script/controllers/mine/MineMngCon.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var UIBase_1 = require("../ui/UIBase");
var DataMineMngCon_1 = require("../../data/scene/DataMineMngCon");
var MinePetSelect_1 = require("./mng/MinePetSelect");
var MinePartnerSelect_1 = require("./mng/MinePartnerSelect");
var MineToolBox_1 = require("./mng/MineToolBox");
var ccclass = cc._decorator.ccclass;
var MineMngCon = /** @class */ (function (_super) {
    __extends(MineMngCon, _super);
    function MineMngCon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pages = [];
        _this.preIndex = 0;
        _this.currentIndex = 0;
        return _this;
    }
    MineMngCon.prototype.onUILoad = function () {
        this.ui = this.node.addComponent(DataMineMngCon_1.default);
        this.page1 = this.ui.node_page_1.addComponent(MinePetSelect_1.default);
        this.page2 = this.ui.node_page_2.addComponent(MinePartnerSelect_1.default);
        this.page3 = this.ui.node_page_3.addComponent(MineToolBox_1.default);
        this.pages.push(this.page1, this.page2, this.page3);
        this.pageSwitch(0);
    };
    MineMngCon.prototype.pageSwitch = function (id) {
        this.preIndex = this.currentIndex;
        this.currentIndex = id;
        for (var i = 0; i < this.pages.length; i++) {
            this.pages[i].node.active = i == this.currentIndex;
        }
        if (this.pages[this.currentIndex].reset) {
            this.pages[this.currentIndex].reset();
        }
    };
    MineMngCon = __decorate([
        ccclass
    ], MineMngCon);
    return MineMngCon;
}(UIBase_1.default));
exports.default = MineMngCon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcbWluZVxcTWluZU1uZ0Nvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBa0M7QUFDbEMsa0VBQTZEO0FBQzdELHFEQUFnRDtBQUNoRCw2REFBd0Q7QUFDeEQsaURBQTRDO0FBRXBDLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBR2xDO0lBQXdDLDhCQUFNO0lBQTlDO1FBQUEscUVBaUNDO1FBL0JHLFdBQUssR0FBVSxFQUFFLENBQUM7UUFRbEIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixrQkFBWSxHQUFXLENBQUMsQ0FBQzs7SUFzQjdCLENBQUM7SUFwQkcsNkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsd0JBQWMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLHVCQUFhLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQywyQkFBaUIsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELCtCQUFVLEdBQVYsVUFBVyxFQUFVO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3REO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDekM7SUFDTCxDQUFDO0lBL0JnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBaUM5QjtJQUFELGlCQUFDO0NBakNELEFBaUNDLENBakN1QyxnQkFBTSxHQWlDN0M7a0JBakNvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJQmFzZSBmcm9tIFwiLi4vdWkvVUlCYXNlXCI7XHJcbmltcG9ydCBEYXRhTWluZU1uZ0NvbiBmcm9tIFwiLi4vLi4vZGF0YS9zY2VuZS9EYXRhTWluZU1uZ0NvblwiO1xyXG5pbXBvcnQgTWluZVBldFNlbGVjdCBmcm9tIFwiLi9tbmcvTWluZVBldFNlbGVjdFwiO1xyXG5pbXBvcnQgTWluZVBhcnRuZXJTZWxlY3QgZnJvbSBcIi4vbW5nL01pbmVQYXJ0bmVyU2VsZWN0XCI7XHJcbmltcG9ydCBNaW5lVG9vbEJveCBmcm9tIFwiLi9tbmcvTWluZVRvb2xCb3hcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmVNbmdDb24gZXh0ZW5kcyBVSUJhc2Uge1xyXG5cclxuICAgIHBhZ2VzOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIHVpOiBEYXRhTWluZU1uZ0NvbjtcclxuXHJcbiAgICBwYWdlMTogTWluZVBldFNlbGVjdDtcclxuICAgIHBhZ2UyOiBNaW5lUGFydG5lclNlbGVjdDtcclxuICAgIHBhZ2UzOiBNaW5lVG9vbEJveDtcclxuXHJcbiAgICBwcmVJbmRleDogbnVtYmVyID0gMDtcclxuICAgIGN1cnJlbnRJbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBvblVJTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChEYXRhTWluZU1uZ0Nvbik7XHJcbiAgICAgICAgdGhpcy5wYWdlMSA9IHRoaXMudWkubm9kZV9wYWdlXzEuYWRkQ29tcG9uZW50KE1pbmVQZXRTZWxlY3QpO1xyXG4gICAgICAgIHRoaXMucGFnZTIgPSB0aGlzLnVpLm5vZGVfcGFnZV8yLmFkZENvbXBvbmVudChNaW5lUGFydG5lclNlbGVjdCk7XHJcbiAgICAgICAgdGhpcy5wYWdlMyA9IHRoaXMudWkubm9kZV9wYWdlXzMuYWRkQ29tcG9uZW50KE1pbmVUb29sQm94KTtcclxuICAgICAgICB0aGlzLnBhZ2VzLnB1c2godGhpcy5wYWdlMSwgdGhpcy5wYWdlMiwgdGhpcy5wYWdlMyk7XHJcbiAgICAgICAgdGhpcy5wYWdlU3dpdGNoKDApO1xyXG4gICAgfVxyXG5cclxuICAgIHBhZ2VTd2l0Y2goaWQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucHJlSW5kZXggPSB0aGlzLmN1cnJlbnRJbmRleDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGlkO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VzW2ldLm5vZGUuYWN0aXZlID0gaSA9PSB0aGlzLmN1cnJlbnRJbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGFnZXNbdGhpcy5jdXJyZW50SW5kZXhdLnJlc2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZXNbdGhpcy5jdXJyZW50SW5kZXhdLnJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/ui/UIUpgradePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '65452SKn4BDMZY6E+o5EwfY', 'UIUpgradePanel');
// script/controllers/ui/UIUpgradePanel.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameCenter_1 = require("../../data/GameCenter");
var AssetsMng_1 = require("../../manager/AssetsMng");
var ViewZorder_1 = require("../../data/const/ViewZorder");
var UIBase_1 = require("./UIBase");
var UIUpgradePanel = /** @class */ (function (_super) {
    __extends(UIUpgradePanel, _super);
    function UIUpgradePanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIUpgradePanel.prototype.onUILoad = function () {
        this.black_bg = this.node.getChildByName("bg");
        this.spine = this.node.getChildByName("spine").getComponent(sp.Skeleton);
        this.light = this.node.getChildByName("light");
        this.node.active = false;
        this.init();
    };
    UIUpgradePanel.prototype.init = function () {
        this.node.zIndex = ViewZorder_1.ViewZorder.UI;
    };
    UIUpgradePanel.prototype.show = function (upgradeID) {
        this.setSpineData(upgradeID);
        this.node.active = true;
        this.light.active = false;
        this.black_bg.active = true;
        this.black_bg.opacity = 0;
        this.black_bg.stopAllActions();
        this.black_bg.runAction(cc.fadeTo(.15, 180));
        this.spine.node.active = true;
        this.spine.setAnimation(0, "lv_start", true);
    };
    UIUpgradePanel.prototype.hide = function (callback) {
        var _this = this;
        this.light.active = true;
        this.light.opacity = 0;
        this.light.stopAllActions();
        this.light.runAction(cc.sequence(cc.fadeIn(.15).easing(cc.easeSineIn()), cc.callFunc(function () {
            _this.spine.node.active = false;
            _this.black_bg.active = false;
            if (callback) {
                callback();
            }
        }), cc.delayTime(.1), cc.fadeOut(.2).easing(cc.easeSineOut()), cc.callFunc(function () {
            _this.node.active = false;
        })));
    };
    UIUpgradePanel.prototype.setSpineData = function (upgradeID) {
        var spineName = GameCenter_1.default.game.getPetBodyThemeName(upgradeID);
        this.spine.skeletonData = AssetsMng_1.default.getAssets(spineName + ".spine");
        this.setSkin(upgradeID);
    };
    UIUpgradePanel.prototype.setSkin = function (upgradeID) {
        this.spine.setSkin(GameCenter_1.default.game.getPetBodySkinName(upgradeID));
    };
    return UIUpgradePanel;
}(UIBase_1.default));
exports.default = UIUpgradePanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcdWlcXFVJVXBncmFkZVBhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUErQztBQUMvQyxxREFBZ0Q7QUFDaEQsMERBQXlEO0FBQ3pELG1DQUE4QjtBQUU5QjtJQUE0QyxrQ0FBTTtJQUFsRDs7SUFvRUEsQ0FBQztJQTlERyxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsdUJBQVUsQ0FBQyxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELDZCQUFJLEdBQUosVUFBSyxTQUFTO1FBRVYsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU3QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVqRCxDQUFDO0lBRUQsNkJBQUksR0FBSixVQUFLLFFBQVM7UUFBZCxpQkFxQkM7UUFuQkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQzVCLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUN0QyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ1IsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUMvQixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsUUFBUSxFQUFFLENBQUM7YUFDZDtRQUNMLENBQUMsQ0FBQyxFQUNGLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQ2hCLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUN2QyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ1IsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUNMLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCxxQ0FBWSxHQUFaLFVBQWEsU0FBUztRQUNsQixJQUFJLFNBQVMsR0FBRyxvQkFBVSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxtQkFBUyxDQUFDLFNBQVMsQ0FBSyxTQUFTLFdBQVMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUdELGdDQUFPLEdBQVAsVUFBUSxTQUFTO1FBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsb0JBQVUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUwscUJBQUM7QUFBRCxDQXBFQSxBQW9FQyxDQXBFMkMsZ0JBQU0sR0FvRWpEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVDZW50ZXIgZnJvbSBcIi4uLy4uL2RhdGEvR2FtZUNlbnRlclwiO1xyXG5pbXBvcnQgQXNzZXRzTW5nIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0Fzc2V0c01uZ1wiO1xyXG5pbXBvcnQgeyBWaWV3Wm9yZGVyIH0gZnJvbSBcIi4uLy4uL2RhdGEvY29uc3QvVmlld1pvcmRlclwiO1xyXG5pbXBvcnQgVUlCYXNlIGZyb20gXCIuL1VJQmFzZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlVcGdyYWRlUGFuZWwgZXh0ZW5kcyBVSUJhc2Uge1xyXG5cclxuICAgIGJsYWNrX2JnOiBjYy5Ob2RlO1xyXG4gICAgc3BpbmU6IHNwLlNrZWxldG9uO1xyXG4gICAgbGlnaHQ6IGNjLk5vZGU7XHJcblxyXG4gICAgb25VSUxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ibGFja19iZyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpO1xyXG4gICAgICAgIHRoaXMuc3BpbmUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluZVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgIHRoaXMubGlnaHQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsaWdodFwiKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gVmlld1pvcmRlci5VSTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KHVwZ3JhZGVJRCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLnNldFNwaW5lRGF0YSh1cGdyYWRlSUQpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmxhY2tfYmcuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJsYWNrX2JnLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMuYmxhY2tfYmcuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLmJsYWNrX2JnLnJ1bkFjdGlvbihjYy5mYWRlVG8oLjE1LCAxODApKTtcclxuXHJcbiAgICAgICAgdGhpcy5zcGluZS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zcGluZS5zZXRBbmltYXRpb24oMCwgYGx2X3N0YXJ0YCwgdHJ1ZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoY2FsbGJhY2s/KTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMubGlnaHQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxpZ2h0Lm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMubGlnaHQuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLmxpZ2h0LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgY2MuZmFkZUluKC4xNSkuZWFzaW5nKGNjLmVhc2VTaW5lSW4oKSksXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BpbmUubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmxhY2tfYmcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKC4xKSxcclxuICAgICAgICAgICAgY2MuZmFkZU91dCguMikuZWFzaW5nKGNjLmVhc2VTaW5lT3V0KCkpLFxyXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldFNwaW5lRGF0YSh1cGdyYWRlSUQpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc3BpbmVOYW1lID0gR2FtZUNlbnRlci5nYW1lLmdldFBldEJvZHlUaGVtZU5hbWUodXBncmFkZUlEKTtcclxuICAgICAgICB0aGlzLnNwaW5lLnNrZWxldG9uRGF0YSA9IEFzc2V0c01uZy5nZXRBc3NldHMoYCR7IHNwaW5lTmFtZSB9LnNwaW5lYCk7XHJcbiAgICAgICAgdGhpcy5zZXRTa2luKHVwZ3JhZGVJRCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldFNraW4odXBncmFkZUlEKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcGluZS5zZXRTa2luKEdhbWVDZW50ZXIuZ2FtZS5nZXRQZXRCb2R5U2tpbk5hbWUodXBncmFkZUlEKSk7XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/ui/UIBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2b6cedKGxRIG6XYQhia9aYu', 'UIBase');
// script/controllers/ui/UIBase.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var EventMng_1 = require("../../manager/EventMng");
var PREFAB_UI_DIR = 'prefab/';
var ccclass = cc._decorator.ccclass;
var UIBase = /** @class */ (function (_super) {
    __extends(UIBase, _super);
    function UIBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UIBase.prototype, "tag", {
        get: function () {
            return this.mTag;
        },
        set: function (value) {
            this.mTag = value;
        },
        enumerable: false,
        configurable: true
    });
    UIBase.getUrl = function () {
        return PREFAB_UI_DIR + this.prefabUrl;
    };
    UIBase.getName = function () {
        return this.className;
    };
    UIBase.prototype.init = function (params) {
        this.onInit(params);
    };
    UIBase.prototype.onLoad = function () {
        this._notifyEventList = new Map();
        this._registerEventList = new Map();
        this.onUILoad();
    };
    UIBase.prototype.start = function () {
        this.onStart();
    };
    UIBase.prototype.onDestroy = function () {
        this.onUIDestroy();
    };
    UIBase.prototype.onEnable = function () {
        this.onRegisterEvent(this.node, this.touchEvent, this);
        this.onShow();
    };
    UIBase.prototype.onDisable = function () {
        this.unRegisterEvent(this.node, this.touchEvent, this);
        this.onHide();
        var self = this;
        this._notifyEventList.forEach(function (f, key) {
            EventMng_1.default.off(key, f, self);
        }, this);
        this._notifyEventList.clear();
    };
    UIBase.prototype.initEvent = function (eventName, callback) {
        EventMng_1.default.on(eventName, callback, this);
        this._notifyEventList.set(eventName, callback);
    };
    UIBase.prototype.touchEvent = function (event) {
        event.stopPropagation();
    };
    UIBase.prototype.onRegisterEvent = function (node, callback, target) {
        if (target === void 0) { target = null; }
        if (!node) {
            return;
        }
        node.on(cc.Node.EventType.TOUCH_END, callback, target);
        this._registerEventList.set(node.name, { callback: callback, target: target });
    };
    UIBase.prototype.unRegisterEvent = function (node, callback, target) {
        if (target === void 0) { target = null; }
        node.off(cc.Node.EventType.TOUCH_END, callback, target);
    };
    UIBase.prototype.getCanvas = function () {
        var node = cc.find("Canvas");
        return cc.v2(node.x, node.y);
    };
    UIBase.prototype.onInit = function (params) { };
    UIBase.prototype.onUILoad = function () { };
    UIBase.prototype.onUIDestroy = function () { };
    UIBase.prototype.onStart = function () { };
    UIBase.prototype.onShow = function () { };
    UIBase.prototype.onHide = function () { };
    UIBase = __decorate([
        ccclass
    ], UIBase);
    return UIBase;
}(cc.Component));
exports.default = UIBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcdWlcXFVJQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFhOUMsSUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDO0FBQ3hCLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBR2xDO0lBQW9DLDBCQUFZO0lBQWhEOztJQWdHQSxDQUFDO0lBMUZHLHNCQUFXLHVCQUFHO2FBQWQ7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQzthQUNELFVBQWUsS0FBVTtZQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FIQTtJQVFhLGFBQU0sR0FBcEI7UUFDSSxPQUFPLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFDLENBQUM7SUFFYSxjQUFPLEdBQXJCO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCxxQkFBSSxHQUFKLFVBQUssTUFBTTtRQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELHVCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxHQUFHLEVBQW9CLENBQUM7UUFDcEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksR0FBRyxFQUF5QixDQUFDO1FBQzNELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsc0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsMEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQseUJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsMEJBQVMsR0FBVDtRQUVJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXZELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVkLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLEdBQUc7WUFDakMsa0JBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFbEMsQ0FBQztJQUVELDBCQUFTLEdBQVQsVUFBVSxTQUFpQixFQUFFLFFBQWtCO1FBQzNDLGtCQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELDJCQUFVLEdBQVYsVUFBVyxLQUFLO1FBQ1osS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxnQ0FBZSxHQUFmLFVBQWdCLElBQWEsRUFBRSxRQUFRLEVBQUUsTUFBYTtRQUFiLHVCQUFBLEVBQUEsYUFBYTtRQUNsRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVELGdDQUFlLEdBQWYsVUFBZ0IsSUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFhO1FBQWIsdUJBQUEsRUFBQSxhQUFhO1FBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsMEJBQVMsR0FBVDtRQUNJLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCx1QkFBTSxHQUFOLFVBQU8sTUFBTSxJQUFJLENBQUM7SUFDbEIseUJBQVEsR0FBUixjQUFhLENBQUM7SUFDZCw0QkFBVyxHQUFYLGNBQWdCLENBQUM7SUFDakIsd0JBQU8sR0FBUCxjQUFZLENBQUM7SUFDYix1QkFBTSxHQUFOLGNBQVcsQ0FBQztJQUNaLHVCQUFNLEdBQU4sY0FBVyxDQUFDO0lBOUZLLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FnRzFCO0lBQUQsYUFBQztDQWhHRCxBQWdHQyxDQWhHbUMsRUFBRSxDQUFDLFNBQVMsR0FnRy9DO2tCQWhHb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudE1uZyBmcm9tIFwiLi4vLi4vbWFuYWdlci9FdmVudE1uZ1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVSUNsYXNzPFQgZXh0ZW5kcyBVSUJhc2U+IHtcclxuICAgIG5ldygpOiBUO1xyXG4gICAgZ2V0VXJsKCk6IHN0cmluZztcclxuICAgIGdldE5hbWUoKTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUmVnaXN0ZXJFdmVudCB7XHJcbiAgICBjYWxsYmFjazogRnVuY3Rpb24sXHJcbiAgICB0YXJnZXQ/OiBhbnksXHJcbn1cclxuXHJcbmNvbnN0IFBSRUZBQl9VSV9ESVIgPSAncHJlZmFiLyc7XHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQmFzZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBwcmVmYWJVcmw7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGNsYXNzTmFtZTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgbVRhZzogYW55O1xyXG4gICAgcHVibGljIGdldCB0YWcoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tVGFnO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCB0YWcodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMubVRhZyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX25vdGlmeUV2ZW50TGlzdDogTWFwPHN0cmluZywgRnVuY3Rpb24+O1xyXG4gICAgcHJpdmF0ZSBfcmVnaXN0ZXJFdmVudExpc3Q6IE1hcDxzdHJpbmcsIFJlZ2lzdGVyRXZlbnQ+O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VXJsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFBSRUZBQl9VSV9ESVIgKyB0aGlzLnByZWZhYlVybDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbGFzc05hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChwYXJhbXMpIHtcclxuICAgICAgICB0aGlzLm9uSW5pdChwYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLl9ub3RpZnlFdmVudExpc3QgPSBuZXcgTWFwPHN0cmluZywgRnVuY3Rpb24+KCk7XHJcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXJFdmVudExpc3QgPSBuZXcgTWFwPHN0cmluZywgUmVnaXN0ZXJFdmVudD4oKTtcclxuICAgICAgICB0aGlzLm9uVUlMb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5vblN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMub25VSURlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm9uUmVnaXN0ZXJFdmVudCh0aGlzLm5vZGUsIHRoaXMudG91Y2hFdmVudCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcblxyXG4gICAgICAgIHRoaXMudW5SZWdpc3RlckV2ZW50KHRoaXMubm9kZSwgdGhpcy50b3VjaEV2ZW50LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkhpZGUoKTtcclxuXHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLl9ub3RpZnlFdmVudExpc3QuZm9yRWFjaCgoZiwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIEV2ZW50TW5nLm9mZihrZXksIGYsIHNlbGYpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl9ub3RpZnlFdmVudExpc3QuY2xlYXIoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEV2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pIHtcclxuICAgICAgICBFdmVudE1uZy5vbihldmVudE5hbWUsIGNhbGxiYWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLl9ub3RpZnlFdmVudExpc3Quc2V0KGV2ZW50TmFtZSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHRvdWNoRXZlbnQoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlZ2lzdGVyRXZlbnQobm9kZTogY2MuTm9kZSwgY2FsbGJhY2ssIHRhcmdldCA9IG51bGwpIHtcclxuICAgICAgICBpZiAoIW5vZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgY2FsbGJhY2ssIHRhcmdldCk7XHJcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXJFdmVudExpc3Quc2V0KG5vZGUubmFtZSwge2NhbGxiYWNrOiBjYWxsYmFjaywgdGFyZ2V0OiB0YXJnZXR9KTtcclxuICAgIH1cclxuXHJcbiAgICB1blJlZ2lzdGVyRXZlbnQobm9kZTogY2MuTm9kZSwgY2FsbGJhY2ssIHRhcmdldCA9IG51bGwpIHtcclxuICAgICAgICBub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGNhbGxiYWNrLCB0YXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENhbnZhcygpIHtcclxuICAgICAgICBjb25zdCBub2RlID0gY2MuZmluZChcIkNhbnZhc1wiKTtcclxuICAgICAgICByZXR1cm4gY2MudjIobm9kZS54LCBub2RlLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5pdChwYXJhbXMpIHsgfVxyXG4gICAgb25VSUxvYWQoKSB7IH1cclxuICAgIG9uVUlEZXN0cm95KCkgeyB9XHJcbiAgICBvblN0YXJ0KCkgeyB9XHJcbiAgICBvblNob3coKSB7IH1cclxuICAgIG9uSGlkZSgpIHsgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

"use strict";
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
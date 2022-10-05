"use strict";
cc._RF.push(module, 'e54affUF7NGeZytNFcwLhOd', 'Coin_fly_to_wallet');
// Scene/Coin_fly_to_wallet/Coin_fly_to_wallet.ts

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Coin_fly_to_wallet = /** @class */ (function (_super) {
    __extends(Coin_fly_to_wallet, _super);
    function Coin_fly_to_wallet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startPoint = null;
        _this.endPoint = null;
        _this.coinPrefab = null;
        _this.coinPool = null;
        return _this;
    }
    Coin_fly_to_wallet.prototype.onLoad = function () {
        this.coinPool = new cc.NodePool();
        this.initCoinPool();
    };
    Coin_fly_to_wallet.prototype.initCoinPool = function (count) {
        if (count === void 0) { count = 20; }
        for (var i = 0; i < count; i++) {
            var coin = cc.instantiate(this.coinPrefab);
            this.coinPool.put(coin);
        }
    };
    Coin_fly_to_wallet.prototype.playAnim = function () {
        var randomCount = Math.random() * 15 + 10;
        var stPos = this.startPoint.getPosition();
        var edPos = this.endPoint.getPosition();
        this.playCoinFlyAnim(randomCount, stPos, edPos);
    };
    Coin_fly_to_wallet.prototype.playCoinFlyAnim = function (count, stPos, edPos, r) {
        var _this = this;
        if (r === void 0) { r = 130; }
        // 确保当前节点池有足够的金币
        var poolSize = this.coinPool.size();
        var reCreateCoinCount = poolSize > count ? 0 : count - poolSize;
        this.initCoinPool(reCreateCoinCount);
        // 生成圆，并且对圆上的点进行排序
        var points = this.getCirclePoints(r, stPos, count);
        var coinNodeList = points.map(function (pos) {
            var coin = _this.coinPool.get();
            coin.setPosition(stPos);
            _this.node.addChild(coin);
            return {
                node: coin,
                stPos: stPos,
                mdPos: pos,
                edPos: edPos,
                dis: pos.sub(edPos).mag()
            };
        });
        coinNodeList = coinNodeList.sort(function (a, b) {
            if (a.dis - b.dis > 0)
                return 1;
            if (a.dis - b.dis < 0)
                return -1;
            return 0;
        });
        // 执行金币落袋的动画
        coinNodeList.forEach(function (item, idx) {
            item.node.runAction(cc.sequence(cc.moveTo(0.3, item.mdPos), cc.delayTime(idx * 0.01), cc.moveTo(0.5, item.edPos), cc.callFunc(function () {
                _this.coinPool.put(item.node);
            })));
        });
    };
    /**
     * 以某点为圆心，生成圆周上等分点的坐标
     *
     * @param {number} r 半径
     * @param {cc.Vec2} pos 圆心坐标
     * @param {number} count 等分点数量
     * @param {number} [randomScope=80] 等分点的随机波动范围
     * @returns {cc.Vec2[]} 返回等分点坐标
     */
    Coin_fly_to_wallet.prototype.getCirclePoints = function (r, pos, count, randomScope) {
        if (randomScope === void 0) { randomScope = 60; }
        var points = [];
        var radians = (Math.PI / 180) * Math.round(360 / count);
        for (var i = 0; i < count; i++) {
            var x = pos.x + r * Math.sin(radians * i);
            var y = pos.y + r * Math.cos(radians * i);
            points.unshift(cc.v3(x + Math.random() * randomScope, y + Math.random() * randomScope, 0));
        }
        return points;
    };
    var _b, _c, _d;
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Node) === "function" ? _b : Object)
    ], Coin_fly_to_wallet.prototype, "startPoint", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Node) === "function" ? _c : Object)
    ], Coin_fly_to_wallet.prototype, "endPoint", void 0);
    __decorate([
        property(cc.Prefab),
        __metadata("design:type", typeof (_d = typeof cc !== "undefined" && cc.Prefab) === "function" ? _d : Object)
    ], Coin_fly_to_wallet.prototype, "coinPrefab", void 0);
    Coin_fly_to_wallet = __decorate([
        ccclass
    ], Coin_fly_to_wallet);
    return Coin_fly_to_wallet;
}(cc.Component));
exports.default = Coin_fly_to_wallet;

cc._RF.pop();
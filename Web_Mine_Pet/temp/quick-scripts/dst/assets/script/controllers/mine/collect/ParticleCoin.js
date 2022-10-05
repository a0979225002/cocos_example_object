
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
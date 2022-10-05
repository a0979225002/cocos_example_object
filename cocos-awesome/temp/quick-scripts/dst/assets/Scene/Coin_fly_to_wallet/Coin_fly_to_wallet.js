
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scene/Coin_fly_to_wallet/Coin_fly_to_wallet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NlbmVcXENvaW5fZmx5X3RvX3dhbGxldFxcQ29pbl9mbHlfdG9fd2FsbGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBeUZDO1FBdkZDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsY0FBUSxHQUFnQixJQUFJLENBQUM7O0lBaUYvQixDQUFDO0lBL0VDLG1DQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQseUNBQVksR0FBWixVQUFhLEtBQWtCO1FBQWxCLHNCQUFBLEVBQUEsVUFBa0I7UUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QixJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0UsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDMUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxQyxJQUFJLEtBQUssR0FBRyxJQUFJ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R0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxXQUFXLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1RjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0lBdEZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ04sRUFBRSxvQkFBRixFQUFFLENBQUMsSUFBSTswREFBUTtJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNSLEVBQUUsb0JBQUYsRUFBRSxDQUFDLElBQUk7d0RBQVE7SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDUixFQUFFLG9CQUFGLEVBQUUsQ0FBQyxNQUFNOzBEQUFRO0lBTlYsa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0F5RnRDO0lBQUQseUJBQUM7Q0F6RkQsQUF5RkMsQ0F6RitDLEVBQUUsQ0FBQyxTQUFTLEdBeUYzRDtrQkF6Rm9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2luX2ZseV90b193YWxsZXQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHN0YXJ0UG9pbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGVuZFBvaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gIGNvaW5QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gIGNvaW5Qb29sOiBjYy5Ob2RlUG9vbCA9IG51bGw7XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHRoaXMuY29pblBvb2wgPSBuZXcgY2MuTm9kZVBvb2woKTtcclxuICAgIHRoaXMuaW5pdENvaW5Qb29sKCk7XHJcbiAgfVxyXG5cclxuICBpbml0Q29pblBvb2woY291bnQ6IG51bWJlciA9IDIwKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgbGV0IGNvaW4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNvaW5QcmVmYWIpO1xyXG4gICAgICB0aGlzLmNvaW5Qb29sLnB1dChjb2luKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBsYXlBbmltKCkge1xyXG4gICAgbGV0IHJhbmRvbUNvdW50ID0gTWF0aC5yYW5kb20oKSAqIDE1ICsgMTA7XHJcbiAgICBsZXQgc3RQb3MgPSB0aGlzLnN0YXJ0UG9pbnQuZ2V0UG9zaXRpb24oKTtcclxuICAgIGxldCBlZFBvcyA9IHRoaXMuZW5kUG9pbnQuZ2V0UG9zaXRpb24oKTtcclxuICAgIHRoaXMucGxheUNvaW5GbHlBbmltKHJhbmRvbUNvdW50LCBzdFBvcywgZWRQb3MpO1xyXG4gIH1cclxuXHJcbiAgcGxheUNvaW5GbHlBbmltKGNvdW50OiBudW1iZXIsIHN0UG9zOiBjYy5WZWMyLCBlZFBvczogY2MuVmVjMiwgcjogbnVtYmVyID0gMTMwKSB7XHJcbiAgICAvLyDnoa7kv53lvZPliY3oioLngrnmsaDmnInotrPlpJ/nmoTph5HluIFcclxuICAgIGNvbnN0IHBvb2xTaXplID0gdGhpcy5jb2luUG9vbC5zaXplKCk7XHJcbiAgICBjb25zdCByZUNyZWF0ZUNvaW5Db3VudCA9IHBvb2xTaXplID4gY291bnQgPyAwIDogY291bnQgLSBwb29sU2l6ZTtcclxuICAgIHRoaXMuaW5pdENvaW5Qb29sKHJlQ3JlYXRlQ29pbkNvdW50KTtcclxuXHJcbiAgICAvLyDnlJ/miJDlnIbvvIzlubbkuJTlr7nlnIbkuIrnmoTngrnov5vooYzmjpLluo9cclxuICAgIGxldCBwb2ludHMgPSB0aGlzLmdldENpcmNsZVBvaW50cyhyLCBzdFBvcywgY291bnQpO1xyXG4gICAgbGV0IGNvaW5Ob2RlTGlzdCA9IHBvaW50cy5tYXAocG9zID0+IHtcclxuICAgICAgbGV0IGNvaW4gPSB0aGlzLmNvaW5Qb29sLmdldCgpO1xyXG4gICAgICBjb2luLnNldFBvc2l0aW9uKHN0UG9zKTtcclxuICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGNvaW4pO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG5vZGU6IGNvaW4sXHJcbiAgICAgICAgc3RQb3M6IHN0UG9zLFxyXG4gICAgICAgIG1kUG9zOiBwb3MsXHJcbiAgICAgICAgZWRQb3M6IGVkUG9zLFxyXG4gICAgICAgIGRpczogKHBvcyBhcyBhbnkpLnN1YihlZFBvcykubWFnKClcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgY29pbk5vZGVMaXN0ID0gY29pbk5vZGVMaXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgaWYgKGEuZGlzIC0gYi5kaXMgPiAwKSByZXR1cm4gMTtcclxuICAgICAgaWYgKGEuZGlzIC0gYi5kaXMgPCAwKSByZXR1cm4gLTE7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g5omn6KGM6YeR5biB6JC96KKL55qE5Yqo55S7XHJcbiAgICBjb2luTm9kZUxpc3QuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XHJcbiAgICAgIGl0ZW0ubm9kZS5ydW5BY3Rpb24oXHJcbiAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICBjYy5tb3ZlVG8oMC4zLCBpdGVtLm1kUG9zKSxcclxuICAgICAgICAgIGNjLmRlbGF5VGltZShpZHggKiAwLjAxKSxcclxuICAgICAgICAgIGNjLm1vdmVUbygwLjUsIGl0ZW0uZWRQb3MpLFxyXG4gICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvaW5Qb29sLnB1dChpdGVtLm5vZGUpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOS7peafkOeCueS4uuWchuW/g++8jOeUn+aIkOWchuWRqOS4iuetieWIhueCueeahOWdkOagh1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHIg5Y2K5b6EXHJcbiAgICogQHBhcmFtIHtjYy5WZWMyfSBwb3Mg5ZyG5b+D5Z2Q5qCHXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IOetieWIhueCueaVsOmHj1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbcmFuZG9tU2NvcGU9ODBdIOetieWIhueCueeahOmaj+acuuazouWKqOiMg+WbtFxyXG4gICAqIEByZXR1cm5zIHtjYy5WZWMyW119IOi/lOWbnuetieWIhueCueWdkOagh1xyXG4gICAqL1xyXG4gIGdldENpcmNsZVBvaW50cyhyOiBudW1iZXIsIHBvczogY2MuVmVjMiwgY291bnQ6IG51bWJlciwgcmFuZG9tU2NvcGU6IG51bWJlciA9IDYwKTogY2MuVmVjMltdIHtcclxuICAgIGxldCBwb2ludHMgPSBbXTtcclxuICAgIGxldCByYWRpYW5zID0gKE1hdGguUEkgLyAxODApICogTWF0aC5yb3VuZCgzNjAgLyBjb3VudCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgbGV0IHggPSBwb3MueCArIHIgKiBNYXRoLnNpbihyYWRpYW5zICogaSk7XHJcbiAgICAgIGxldCB5ID0gcG9zLnkgKyByICogTWF0aC5jb3MocmFkaWFucyAqIGkpO1xyXG4gICAgICBwb2ludHMudW5zaGlmdChjYy52Myh4ICsgTWF0aC5yYW5kb20oKSAqIHJhbmRvbVNjb3BlLCB5ICsgTWF0aC5yYW5kb20oKSAqIHJhbmRvbVNjb3BlLCAwKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcG9pbnRzO1xyXG4gIH1cclxufVxyXG4iXX0=
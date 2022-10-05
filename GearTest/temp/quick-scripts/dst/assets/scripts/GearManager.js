
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GearManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '55f80q2Ay1KHqzG1huTiP9I', 'GearManager');
// scripts/GearManager.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
Object.defineProperty(exports, "__esModule", { value: true });
var GearItem_1 = require("./GearItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GearManager = /** @class */ (function (_super) {
    __extends(GearManager, _super);
    function GearManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GearManager.prototype.start = function () {
        //这里仅按节点顺序依次传递，用于演示齿轮对齐。
        //实际项目应根据距离与半径来判断是否接触，
        //再以有动力的齿轮为根节点生成节点树，依次传递。
        var gearItems = this.getComponentsInChildren(GearItem_1.default);
        var pos1 = new cc.Vec2();
        var pos2 = new cc.Vec2();
        for (var i = 1; i < gearItems.length; ++i) {
            var prev = gearItems[i - 1];
            var cur = gearItems[i];
            prev.node.getPosition(pos1);
            cur.node.getPosition(pos2);
            //齿轮2相对齿轮1位置的角度
            var angle = cc.misc.radiansToDegrees(Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x));
            //齿轮1从0度转至与齿轮2相切，经过的角度
            var angle2 = angle - (prev.node.angle % 360);
            //齿轮1旋转整数齿后，接近相切，又转动f齿（0到1），才正式与齿轮2相切
            var f = (angle2 / (360 / prev.num)) % 1;
            //齿轮2的0度位置旋转至与齿轮1相切（angle+180度）后，再转动0.5齿（使凹凸相对），再转动f
            var angle3 = angle + 180 + (360 / cur.num) * (0.5 + f);
            cur.node.angle = angle3;
            //齿轮2速度与齿轮1速度，与它们的齿轮数成反比
            cur.velocity = -prev.velocity * prev.num / cur.num;
        }
    };
    GearManager = __decorate([
        ccclass
    ], GearManager);
    return GearManager;
}(cc.Component));
exports.default = GearManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2Vhck1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsdUNBQWlDO0FBRTNCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEOztJQTZCQSxDQUFDO0lBM0JHLDJCQUFLLEdBQUw7UUFDSSx3QkFBd0I7UUFDeEIsc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUN6QixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsa0JBQVEsQ0FBQyxDQUFDO1FBQ3ZELElBQUksSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLGVBQWU7WUFDZixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkYsc0JBQXNCO1lBQ3RCLElBQUksTUFBTSxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzdDLHFDQUFxQztZQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEMsb0RBQW9EO1lBQ3BELElBQUksTUFBTSxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUN4Qix3QkFBd0I7WUFDeEIsR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO1NBQ3REO0lBQ0wsQ0FBQztJQTFCZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTZCL0I7SUFBRCxrQkFBQztDQTdCRCxBQTZCQyxDQTdCd0MsRUFBRSxDQUFDLFNBQVMsR0E2QnBEO2tCQTdCb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBHZWFySXRlbSBmcm9tICcuL0dlYXJJdGVtJ1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlYXJNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvL+i/memHjOS7heaMieiKgueCuemhuuW6j+S+neasoeS8oOmAku+8jOeUqOS6jua8lOekuum9v+i9ruWvuem9kOOAglxyXG4gICAgICAgIC8v5a6e6ZmF6aG555uu5bqU5qC55o2u6Led56a75LiO5Y2K5b6E5p2l5Yik5pat5piv5ZCm5o6l6Kem77yMXHJcbiAgICAgICAgLy/lho3ku6XmnInliqjlipvnmoTpvb/ova7kuLrmoLnoioLngrnnlJ/miJDoioLngrnmoJHvvIzkvp3mrKHkvKDpgJLjgIJcclxuICAgICAgICBsZXQgZ2Vhckl0ZW1zID0gdGhpcy5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihHZWFySXRlbSk7XHJcbiAgICAgICAgbGV0IHBvczEgPSBuZXcgY2MuVmVjMigpO1xyXG4gICAgICAgIGxldCBwb3MyID0gbmV3IGNjLlZlYzIoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGdlYXJJdGVtcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgcHJldiA9IGdlYXJJdGVtc1tpIC0gMV07XHJcbiAgICAgICAgICAgIGxldCBjdXIgPSBnZWFySXRlbXNbaV07XHJcbiAgICAgICAgICAgIHByZXYubm9kZS5nZXRQb3NpdGlvbihwb3MxKTtcclxuICAgICAgICAgICAgY3VyLm5vZGUuZ2V0UG9zaXRpb24ocG9zMik7XHJcbiAgICAgICAgICAgIC8v6b2/6L2uMuebuOWvuem9v+i9rjHkvY3nva7nmoTop5LluqZcclxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIocG9zMi55IC0gcG9zMS55LCBwb3MyLnggLSBwb3MxLngpKTtcclxuICAgICAgICAgICAgLy/pvb/ova4x5LuOMOW6pui9rOiHs+S4jum9v+i9rjLnm7jliIfvvIznu4/ov4fnmoTop5LluqZcclxuICAgICAgICAgICAgbGV0IGFuZ2xlMiA9IGFuZ2xlIC0gKHByZXYubm9kZS5hbmdsZSAlIDM2MCk7XHJcbiAgICAgICAgICAgIC8v6b2/6L2uMeaXi+i9rOaVtOaVsOm9v+WQju+8jOaOpei/keebuOWIh++8jOWPiOi9rOWKqGbpvb/vvIgw5YiwMe+8ie+8jOaJjeato+W8j+S4jum9v+i9rjLnm7jliIdcclxuICAgICAgICAgICAgbGV0IGYgPSAoYW5nbGUyIC8gKDM2MCAvIHByZXYubnVtKSkgJSAxO1xyXG4gICAgICAgICAgICAvL+m9v+i9rjLnmoQw5bqm5L2N572u5peL6L2s6Iez5LiO6b2/6L2uMeebuOWIh++8iGFuZ2xlKzE4MOW6pu+8ieWQju+8jOWGjei9rOWKqDAuNem9v++8iOS9v+WHueWHuOebuOWvue+8ie+8jOWGjei9rOWKqGZcclxuICAgICAgICAgICAgbGV0IGFuZ2xlMyA9IGFuZ2xlICsgMTgwICsgKDM2MCAvIGN1ci5udW0pICogKDAuNSArIGYpO1xyXG4gICAgICAgICAgICBjdXIubm9kZS5hbmdsZSA9IGFuZ2xlMztcclxuICAgICAgICAgICAgLy/pvb/ova4y6YCf5bqm5LiO6b2/6L2uMemAn+W6pu+8jOS4juWug+S7rOeahOm9v+i9ruaVsOaIkOWPjeavlFxyXG4gICAgICAgICAgICBjdXIudmVsb2NpdHkgPSAtcHJldi52ZWxvY2l0eSAqIHByZXYubnVtIC8gY3VyLm51bTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
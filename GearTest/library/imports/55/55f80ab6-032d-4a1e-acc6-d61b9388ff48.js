"use strict";
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
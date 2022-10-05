
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scene/Bullet_Tracking/Bullet_Tracking.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '82433YSgYFI4Kmfyazc1Wwg', 'Bullet_Tracking');
// Scene/Bullet_Tracking/Bullet_Tracking.ts

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
var Bullet_Tracking = /** @class */ (function (_super) {
    __extends(Bullet_Tracking, _super);
    function Bullet_Tracking() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.launch_btn = null;
        _this.bullet = null;
        _this.target = null;
        _this.fireFlag = false;
        _this.bulletSpeed = 200;
        return _this;
    }
    Bullet_Tracking.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
    };
    Bullet_Tracking.prototype.touchMoveEvent = function (evt) {
        this.target.x += evt.getDeltaX();
        this.target.y += evt.getDeltaY();
    };
    Bullet_Tracking.prototype.fire = function () {
        this.bullet.getComponent(cc.Sprite).enabled = true;
        this.bullet.getChildByName('boom').active = false;
        this.bullet.setPosition(this.launch_btn.position);
        this.bullet.active = true;
        this.fireFlag = true;
    };
    Bullet_Tracking.prototype.hitTheTarget = function () {
        var _this = this;
        this.fireFlag = false;
        this.bullet.getComponent(cc.Sprite).enabled = false;
        this.bullet.getChildByName('boom').active = true;
        this.scheduleOnce(function () {
            _this.bullet.getChildByName('boom').active = false;
        }, 0.2);
    };
    Bullet_Tracking.prototype.update = function (dt) {
        if (!this.fireFlag)
            return;
        var targetPos = this.target.getPosition();
        var bulletPos = this.bullet.getPosition();
        var normalizeVec = targetPos.subtract(bulletPos).normalize();
        this.bullet.x += normalizeVec.x * this.bulletSpeed * dt;
        this.bullet.y += normalizeVec.y * this.bulletSpeed * dt;
        // 角度变化以y轴正方向为起点，逆时针角度递增
        this.bullet.angle = cc.v2(0, 1).signAngle(normalizeVec) * 180 / Math.PI;
        var rect = this.target.getBoundingBox();
        if (rect.contains(bulletPos))
            this.hitTheTarget();
    };
    var _b, _c, _d;
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Node) === "function" ? _b : Object)
    ], Bullet_Tracking.prototype, "launch_btn", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Node) === "function" ? _c : Object)
    ], Bullet_Tracking.prototype, "bullet", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_d = typeof cc !== "undefined" && cc.Node) === "function" ? _d : Object)
    ], Bullet_Tracking.prototype, "target", void 0);
    Bullet_Tracking = __decorate([
        ccclass
    ], Bullet_Tracking);
    return Bullet_Tracking;
}(cc.Component));
exports.default = Bullet_Tracking;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NlbmVcXEJ1bGxldF9UcmFja2luZ1xcQnVsbGV0X1RyYWNraW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBcURDO1FBbkRDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQVd2QixjQUFRLEdBQVksS0FBSyxDQUFDO1FBa0IxQixpQkFBVyxHQUFHLEdBQUcsQ0FBQzs7SUFnQnBCLENBQUM7SUEzQ0MsZ0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCx3Q0FBYyxHQUFkLFVBQWUsR0FBd0I7UUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBR0QsOEJBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUVELHNDQUFZLEdBQVo7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoQixLQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BELENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7SUFHRCxnQ0FBTSxHQUFOLFVBQU8sRUFBRTtRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFFM0IsSUFBSSxTQUFTLEdBQVksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuRCxJQUFJLFNBQVMsR0FBWSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25ELElBQUksWUFBWSxHQUFZLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFdEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3hELHdCQUF3QjtRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFFeEUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1lBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3BELENBQUM7O0lBbEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ04sRUFBRSxvQkFBRixFQUFFLENBQUMsSUFBSTt1REFBUTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNWLEVBQUUsb0JBQUYsRUFBRSxDQUFDLElBQUk7bURBQVE7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDVixFQUFFLG9CQUFGLEVBQUUsQ0FBQyxJQUFJO21EQUFRO0lBUkosZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQXFEbkM7SUFBRCxzQkFBQztDQXJERCxBQXFEQyxDQXJENEMsRUFBRSxDQUFDLFNBQVMsR0FxRHhEO2tCQXJEb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWxsZXRfVHJhY2tpbmcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGxhdW5jaF9idG46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBidWxsZXQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICB0YXJnZXQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmVFdmVudCwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICB0b3VjaE1vdmVFdmVudChldnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgIHRoaXMudGFyZ2V0LnggKz0gZXZ0LmdldERlbHRhWCgpO1xyXG4gICAgdGhpcy50YXJnZXQueSArPSBldnQuZ2V0RGVsdGFZKCk7XHJcbiAgfVxyXG5cclxuICBmaXJlRmxhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGZpcmUoKSB7XHJcbiAgICB0aGlzLmJ1bGxldC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuYnVsbGV0LmdldENoaWxkQnlOYW1lKCdib29tJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLmJ1bGxldC5zZXRQb3NpdGlvbih0aGlzLmxhdW5jaF9idG4ucG9zaXRpb24pO1xyXG4gICAgdGhpcy5idWxsZXQuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuZmlyZUZsYWcgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaGl0VGhlVGFyZ2V0KCkge1xyXG4gICAgdGhpcy5maXJlRmxhZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5idWxsZXQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5idWxsZXQuZ2V0Q2hpbGRCeU5hbWUoJ2Jvb20nKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLmJ1bGxldC5nZXRDaGlsZEJ5TmFtZSgnYm9vbScpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSwgMC4yKTtcclxuICB9XHJcblxyXG4gIGJ1bGxldFNwZWVkID0gMjAwO1xyXG4gIHVwZGF0ZShkdCkge1xyXG4gICAgaWYgKCF0aGlzLmZpcmVGbGFnKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHRhcmdldFBvczogY2MuVmVjMiA9IHRoaXMudGFyZ2V0LmdldFBvc2l0aW9uKCk7XHJcbiAgICBsZXQgYnVsbGV0UG9zOiBjYy5WZWMyID0gdGhpcy5idWxsZXQuZ2V0UG9zaXRpb24oKTtcclxuICAgIGxldCBub3JtYWxpemVWZWM6IGNjLlZlYzIgPSB0YXJnZXRQb3Muc3VidHJhY3QoYnVsbGV0UG9zKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICB0aGlzLmJ1bGxldC54ICs9IG5vcm1hbGl6ZVZlYy54ICogdGhpcy5idWxsZXRTcGVlZCAqIGR0O1xyXG4gICAgdGhpcy5idWxsZXQueSArPSBub3JtYWxpemVWZWMueSAqIHRoaXMuYnVsbGV0U3BlZWQgKiBkdDtcclxuICAgIC8vIOinkuW6puWPmOWMluS7pXnovbTmraPmlrnlkJHkuLrotbfngrnvvIzpgIbml7bpkojop5LluqbpgJLlop5cclxuICAgIHRoaXMuYnVsbGV0LmFuZ2xlID0gY2MudjIoMCwgMSkuc2lnbkFuZ2xlKG5vcm1hbGl6ZVZlYykgKiAxODAgLyBNYXRoLlBJO1xyXG5cclxuICAgIGxldCByZWN0ID0gdGhpcy50YXJnZXQuZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgIGlmIChyZWN0LmNvbnRhaW5zKGJ1bGxldFBvcykpIHRoaXMuaGl0VGhlVGFyZ2V0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
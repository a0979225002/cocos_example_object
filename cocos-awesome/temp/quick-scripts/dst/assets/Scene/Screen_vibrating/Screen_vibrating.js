
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scene/Screen_vibrating/Screen_vibrating.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8a4fhJRiRB8YVcfMOtC1jT', 'Screen_vibrating');
// Scene/Screen_vibrating/Screen_vibrating.ts

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
var Screen_vibrating = /** @class */ (function (_super) {
    __extends(Screen_vibrating, _super);
    function Screen_vibrating() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgNode = null;
        _this.hitFeedback = null;
        return _this;
    }
    Screen_vibrating.prototype.onLoad = function () {
        this.shakeEffect(this.bgNode, 1);
    };
    Screen_vibrating.prototype.hit = function (evn) {
        var _this = this;
        this.shakeEffect(evn.currentTarget, 0.6);
        this.hitFeedback.setPosition(this.node.convertToNodeSpaceAR(evn.getLocation()));
        this.hitFeedback.active = true;
        var anim = this.hitFeedback.getComponent(cc.Animation);
        anim.on('finished', function () {
            _this.hitFeedback.active = false;
            anim.setCurrentTime(0);
            anim.stop();
        });
        anim.play();
    };
    Screen_vibrating.prototype.shakeEffect = function (node, duration) {
        node.stopAllActions();
        node.runAction(cc
            .sequence(cc.moveTo(0.02, cc.v2(5, 7)), cc.moveTo(0.02, cc.v2(-6, 7)), cc.moveTo(0.02, cc.v2(-13, 3)), cc.moveTo(0.02, cc.v2(3, -6)), cc.moveTo(0.02, cc.v2(-5, 5)), cc.moveTo(0.02, cc.v2(2, -8)), cc.moveTo(0.02, cc.v2(-8, -10)), cc.moveTo(0.02, cc.v2(3, 10)), cc.moveTo(0.02, cc.v2(0, 0)))
            .repeatForever());
        this.scheduleOnce(function () {
            node.stopAllActions();
            node.setPosition(0, 0);
        }, duration);
    };
    var _b, _c;
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Node) === "function" ? _b : Object)
    ], Screen_vibrating.prototype, "bgNode", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Node) === "function" ? _c : Object)
    ], Screen_vibrating.prototype, "hitFeedback", void 0);
    Screen_vibrating = __decorate([
        ccclass
    ], Screen_vibrating);
    return Screen_vibrating;
}(cc.Component));
exports.default = Screen_vibrating;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NlbmVcXFNjcmVlbl92aWJyYXRpbmdcXFNjcmVlbl92aWJyYXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUFnREM7UUE5Q0MsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixpQkFBVyxHQUFZLElBQUksQ0FBQzs7SUE0QzlCLENBQUM7SUExQ0MsaUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsOEJBQUcsR0FBSCxVQUFJLEdBQXdCO1FBQTVCLGlCQWFDO1FBWkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXpDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFL0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFO1lBQ2xCLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELHNDQUFXLEdBQVgsVUFBWSxJQUFhLEVBQUUsUUFBUTtRQUNqQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FDWixFQUFFO2FBQ0MsUUFBUSxDQUNQLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQzVCLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDN0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUM5QixFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzdCLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDN0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUM3QixFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDL0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFDN0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDN0I7YUFDQSxhQUFhLEVBQUUsQ0FDbkIsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDaEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNmLENBQUM7O0lBN0NEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1YsRUFBRSxvQkFBRixFQUFFLENBQUMsSUFBSTtvREFBUTtJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNMLEVBQUUsb0JBQUYsRUFBRSxDQUFDLElBQUk7eURBQVE7SUFKVCxnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQWdEcEM7SUFBRCx1QkFBQztDQWhERCxBQWdEQyxDQWhENkMsRUFBRSxDQUFDLFNBQVMsR0FnRHpEO2tCQWhEb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmVlbl92aWJyYXRpbmcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGJnTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgaGl0RmVlZGJhY2s6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLnNoYWtlRWZmZWN0KHRoaXMuYmdOb2RlLCAxKTtcclxuICB9XHJcblxyXG4gIGhpdChldm46IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgIHRoaXMuc2hha2VFZmZlY3QoZXZuLmN1cnJlbnRUYXJnZXQsIDAuNik7XHJcblxyXG4gICAgdGhpcy5oaXRGZWVkYmFjay5zZXRQb3NpdGlvbih0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZuLmdldExvY2F0aW9uKCkpKTtcclxuICAgIHRoaXMuaGl0RmVlZGJhY2suYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICBsZXQgYW5pbSA9IHRoaXMuaGl0RmVlZGJhY2suZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICBhbmltLm9uKCdmaW5pc2hlZCcsICgpID0+IHtcclxuICAgICAgdGhpcy5oaXRGZWVkYmFjay5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgYW5pbS5zZXRDdXJyZW50VGltZSgwKTtcclxuICAgICAgYW5pbS5zdG9wKCk7XHJcbiAgICB9KTtcclxuICAgIGFuaW0ucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgc2hha2VFZmZlY3Qobm9kZTogY2MuTm9kZSwgZHVyYXRpb24pIHtcclxuICAgIG5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgIG5vZGUucnVuQWN0aW9uKFxyXG4gICAgICBjY1xyXG4gICAgICAgIC5zZXF1ZW5jZShcclxuICAgICAgICAgIGNjLm1vdmVUbygwLjAyLCBjYy52Mig1LCA3KSksXHJcbiAgICAgICAgICBjYy5tb3ZlVG8oMC4wMiwgY2MudjIoLTYsIDcpKSxcclxuICAgICAgICAgIGNjLm1vdmVUbygwLjAyLCBjYy52MigtMTMsIDMpKSxcclxuICAgICAgICAgIGNjLm1vdmVUbygwLjAyLCBjYy52MigzLCAtNikpLFxyXG4gICAgICAgICAgY2MubW92ZVRvKDAuMDIsIGNjLnYyKC01LCA1KSksXHJcbiAgICAgICAgICBjYy5tb3ZlVG8oMC4wMiwgY2MudjIoMiwgLTgpKSxcclxuICAgICAgICAgIGNjLm1vdmVUbygwLjAyLCBjYy52MigtOCwgLTEwKSksXHJcbiAgICAgICAgICBjYy5tb3ZlVG8oMC4wMiwgY2MudjIoMywgMTApKSxcclxuICAgICAgICAgIGNjLm1vdmVUbygwLjAyLCBjYy52MigwLCAwKSlcclxuICAgICAgICApXHJcbiAgICAgICAgLnJlcGVhdEZvcmV2ZXIoKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIG5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgIH0sIGR1cmF0aW9uKTtcclxuICB9XHJcbn1cclxuIl19
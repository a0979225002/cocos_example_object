
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scene/Metaball/Metaball.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7d68bZisFBP06BUmEtWSaVY', 'Metaball');
// Scene/Metaball/Metaball.ts

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
var Metaball = /** @class */ (function (_super) {
    __extends(Metaball, _super);
    function Metaball() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ball = null;
        _this.material = null;
        _this.touchStartPoint = null;
        return _this;
    }
    Metaball.prototype.onLoad = function () {
        this.material = this.ball.getComponent(cc.Sprite).getMaterial(0);
        this.touchStartPoint = cc.v2(this.ball.width / 2, this.ball.height / 2);
        this.ball.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
    };
    Metaball.prototype.touchMoveEvent = function (evt) {
        this.touchStartPoint = this.touchStartPoint.add(evt.getDelta());
        var x = this.touchStartPoint.x;
        var y = this.ball.height - this.touchStartPoint.y;
        this.material.setProperty('u_point', [x / this.ball.width, y / this.ball.height]);
    };
    var _b;
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Node) === "function" ? _b : Object)
    ], Metaball.prototype, "ball", void 0);
    Metaball = __decorate([
        ccclass
    ], Metaball);
    return Metaball;
}(cc.Component));
exports.default = Metaball;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NlbmVcXE1ldGFiYWxsXFxNZXRhYmFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWtCQztRQWhCQyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBUTdCLHFCQUFlLEdBQVcsSUFBSSxDQUFDOztJQU9qQyxDQUFDO0lBYkMseUJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFHRCxpQ0FBYyxHQUFkLFVBQWUsR0FBd0I7UUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNoRSxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDOztJQWZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1osRUFBRSxvQkFBRixFQUFFLENBQUMsSUFBSTswQ0FBUTtJQUZGLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FrQjVCO0lBQUQsZUFBQztDQWxCRCxBQWtCQyxDQWxCcUMsRUFBRSxDQUFDLFNBQVMsR0FrQmpEO2tCQWxCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhYmFsbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgYmFsbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgbWF0ZXJpYWw6IGNjLk1hdGVyaWFsID0gbnVsbDtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5tYXRlcmlhbCA9IHRoaXMuYmFsbC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5nZXRNYXRlcmlhbCgwKTtcclxuICAgIHRoaXMudG91Y2hTdGFydFBvaW50ID0gY2MudjIodGhpcy5iYWxsLndpZHRoIC8gMix0aGlzLmJhbGwuaGVpZ2h0LzIpO1xyXG4gICAgdGhpcy5iYWxsLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlRXZlbnQsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgdG91Y2hTdGFydFBvaW50OiBjYy5WZWMyPSBudWxsO1xyXG4gIHRvdWNoTW92ZUV2ZW50KGV2dDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgdGhpcy50b3VjaFN0YXJ0UG9pbnQgPSB0aGlzLnRvdWNoU3RhcnRQb2ludC5hZGQoZXZ0LmdldERlbHRhKCkpO1xyXG4gICAgY29uc3QgeCA9IHRoaXMudG91Y2hTdGFydFBvaW50Lng7XHJcbiAgICBjb25zdCB5ID0gdGhpcy5iYWxsLmhlaWdodCAtIHRoaXMudG91Y2hTdGFydFBvaW50Lnk7XHJcbiAgICB0aGlzLm1hdGVyaWFsLnNldFByb3BlcnR5KCd1X3BvaW50JywgWyB4IC8gdGhpcy5iYWxsLndpZHRoLCB5IC8gdGhpcy5iYWxsLmhlaWdodF0pO1xyXG4gIH1cclxufVxyXG4iXX0=
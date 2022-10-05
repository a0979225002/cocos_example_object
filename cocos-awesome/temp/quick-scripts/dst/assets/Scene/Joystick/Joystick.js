
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scene/Joystick/Joystick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ea7dbuck+9ApJnQTq/C4vpv', 'Joystick');
// Scene/Joystick/Joystick.ts

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
var Roller = /** @class */ (function (_super) {
    __extends(Roller, _super);
    function Roller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.controlDot = null;
        _this.joystick = null;
        _this.movableStar = null;
        _this.movableFlag = false;
        _this.radian = 0;
        _this.speed = 150;
        return _this;
    }
    Roller.prototype.onLoad = function () {
        this.initTouchEvent();
    };
    Roller.prototype.initTouchEvent = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEndEvent, this);
    };
    Roller.prototype.touchStartEvent = function (event) {
        var touchPos = this.node.convertToNodeSpaceAR(event.getLocation());
        var distance = touchPos.len();
        var radius = this.node.width / 2 - this.controlDot.width / 2;
        // 以x轴正方向为基准，计算偏移量
        this.radian = cc.v2(1, 0).signAngle(touchPos);
        var offsetX = Math.cos(this.radian) * radius;
        var offsetY = Math.sin(this.radian) * radius;
        this.controlDot.setPosition(radius > distance ? touchPos : cc.v2(offsetX, offsetY));
        this.movableFlag = true;
    };
    Roller.prototype.touchMoveEvent = function (event) {
        var touchPos = this.node.convertToNodeSpaceAR(event.getLocation());
        var distance = touchPos.len();
        var radius = this.node.width / 2 - this.controlDot.width / 2;
        this.radian = cc.v2(1, 0).signAngle(touchPos);
        var offsetX = Math.cos(this.radian) * radius;
        var offsetY = Math.sin(this.radian) * radius;
        this.controlDot.setPosition(radius > distance ? touchPos : cc.v2(offsetX, offsetY));
    };
    Roller.prototype.touchEndEvent = function () {
        this.movableFlag = false;
        this.controlDot.setPosition(cc.v2(0, 0));
    };
    Roller.prototype.update = function (dt) {
        if (!this.movableFlag)
            return;
        this.movableStar.x += Math.cos(this.radian) * dt * this.speed;
        this.movableStar.y += Math.sin(this.radian) * dt * this.speed;
    };
    var _b, _c, _d;
    __decorate([
        property({ type: cc.Node, tooltip: '操控杆的控制点' }),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Node) === "function" ? _b : Object)
    ], Roller.prototype, "controlDot", void 0);
    __decorate([
        property({ type: cc.Node, tooltip: '操控杆' }),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Node) === "function" ? _c : Object)
    ], Roller.prototype, "joystick", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_d = typeof cc !== "undefined" && cc.Node) === "function" ? _d : Object)
    ], Roller.prototype, "movableStar", void 0);
    Roller = __decorate([
        ccclass
    ], Roller);
    return Roller;
}(cc.Component));
exports.default = Roller;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NlbmVcXEpveXN0aWNrXFxKb3lzdGljay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQTBEQztRQXhEQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsV0FBSyxHQUFXLEdBQUcsQ0FBQzs7SUFnRHRCLENBQUM7SUEvQ0MsdUJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsK0JBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxF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QUksQ0FBQyxLQUFLLENBQUM7SUFDaEUsQ0FBQzs7SUF2REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUM7c0RBQ3BDLEVBQUUsb0JBQUYsRUFBRSxDQUFDLElBQUk7OENBQVE7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7c0RBQ2xDLEVBQUUsb0JBQUYsRUFBRSxDQUFDLElBQUk7NENBQVE7SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDTCxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxJQUFJOytDQUFRO0lBTlQsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQTBEMUI7SUFBRCxhQUFDO0NBMURELEFBMERDLENBMURtQyxFQUFFLENBQUMsU0FBUyxHQTBEL0M7a0JBMURvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSwgdG9vbHRpcDogJ+aTjeaOp+adhueahOaOp+WItueCuScgfSlcclxuICBjb250cm9sRG90OiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoeyB0eXBlOiBjYy5Ob2RlLCB0b29sdGlwOiAn5pON5o6n5p2GJyB9KVxyXG4gIGpveXN0aWNrOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBtb3ZhYmxlU3RhcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIG1vdmFibGVGbGFnOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcmFkaWFuOiBudW1iZXIgPSAwO1xyXG4gIHNwZWVkOiBudW1iZXIgPSAxNTA7XHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5pbml0VG91Y2hFdmVudCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdFRvdWNoRXZlbnQoKSB7XHJcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydEV2ZW50LCB0aGlzKTtcclxuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZUV2ZW50LCB0aGlzKTtcclxuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmRFdmVudCwgdGhpcyk7XHJcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnRvdWNoRW5kRXZlbnQsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgdG91Y2hTdGFydEV2ZW50KGV2ZW50KSB7XHJcbiAgICBsZXQgdG91Y2hQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICBjb25zdCBkaXN0YW5jZSA9IHRvdWNoUG9zLmxlbigpO1xyXG4gICAgY29uc3QgcmFkaXVzID0gdGhpcy5ub2RlLndpZHRoIC8gMiAtIHRoaXMuY29udHJvbERvdC53aWR0aCAvIDI7XHJcblxyXG4gICAgLy8g5LuleOi9tOato+aWueWQkeS4uuWfuuWHhu+8jOiuoeeul+WBj+enu+mHj1xyXG4gICAgdGhpcy5yYWRpYW4gPSBjYy52MigxLCAwKS5zaWduQW5nbGUodG91Y2hQb3MpO1xyXG4gICAgY29uc3Qgb2Zmc2V0WCA9IE1hdGguY29zKHRoaXMucmFkaWFuKSAqIHJhZGl1cztcclxuICAgIGNvbnN0IG9mZnNldFkgPSBNYXRoLnNpbih0aGlzLnJhZGlhbikgKiByYWRpdXM7XHJcbiAgICB0aGlzLmNvbnRyb2xEb3Quc2V0UG9zaXRpb24ocmFkaXVzID4gZGlzdGFuY2UgPyB0b3VjaFBvcyA6IGNjLnYyKG9mZnNldFgsIG9mZnNldFkpKTtcclxuXHJcbiAgICB0aGlzLm1vdmFibGVGbGFnID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHRvdWNoTW92ZUV2ZW50KGV2ZW50KSB7XHJcbiAgICBsZXQgdG91Y2hQb3M6IGNjLlZlYzIgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICBjb25zdCBkaXN0YW5jZSA9IHRvdWNoUG9zLmxlbigpO1xyXG4gICAgY29uc3QgcmFkaXVzID0gdGhpcy5ub2RlLndpZHRoIC8gMiAtIHRoaXMuY29udHJvbERvdC53aWR0aCAvIDI7XHJcblxyXG4gICAgdGhpcy5yYWRpYW4gPSBjYy52MigxLCAwKS5zaWduQW5nbGUodG91Y2hQb3MpO1xyXG4gICAgY29uc3Qgb2Zmc2V0WCA9IE1hdGguY29zKHRoaXMucmFkaWFuKSAqIHJhZGl1cztcclxuICAgIGNvbnN0IG9mZnNldFkgPSBNYXRoLnNpbih0aGlzLnJhZGlhbikgKiByYWRpdXM7XHJcblxyXG4gICAgdGhpcy5jb250cm9sRG90LnNldFBvc2l0aW9uKHJhZGl1cyA+IGRpc3RhbmNlID8gdG91Y2hQb3MgOiBjYy52MihvZmZzZXRYLCBvZmZzZXRZKSk7XHJcbiAgfVxyXG5cclxuICB0b3VjaEVuZEV2ZW50KCkge1xyXG4gICAgdGhpcy5tb3ZhYmxlRmxhZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5jb250cm9sRG90LnNldFBvc2l0aW9uKGNjLnYyKDAsIDApKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShkdCkge1xyXG4gICAgaWYgKCF0aGlzLm1vdmFibGVGbGFnKSByZXR1cm47XHJcbiAgICB0aGlzLm1vdmFibGVTdGFyLnggKz0gTWF0aC5jb3ModGhpcy5yYWRpYW4pICogZHQgKiB0aGlzLnNwZWVkO1xyXG4gICAgdGhpcy5tb3ZhYmxlU3Rhci55ICs9IE1hdGguc2luKHRoaXMucmFkaWFuKSAqIGR0ICogdGhpcy5zcGVlZDtcclxuICB9XHJcbn1cclxuIl19
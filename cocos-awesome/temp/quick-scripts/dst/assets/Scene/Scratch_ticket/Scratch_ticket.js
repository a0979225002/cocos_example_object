
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scene/Scratch_ticket/Scratch_ticket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd30e1f08DZOMI5wufTMlpN5', 'Scratch_ticket');
// Scene/Scratch_ticket/Scratch_ticket.ts

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
var CALC_RECT_WIDTH = 40;
var CLEAR_LINE_WIDTH = 40;
var Scratch_ticket = /** @class */ (function (_super) {
    __extends(Scratch_ticket, _super);
    function Scratch_ticket() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maskNode = null;
        _this.ticketNode = null;
        _this.progerss = null;
        _this.calcDebugger = false; // 辅助开关，开启则会绘制划开涂层所属的小格子
        _this.tempDrawPoints = [];
        _this.polygonPointsList = [];
        return _this;
    }
    Scratch_ticket.prototype.onLoad = function () {
        this.reset();
        this.ticketNode.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.ticketNode.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.ticketNode.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
        this.ticketNode.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEndEvent, this);
    };
    Scratch_ticket.prototype.beforeDestroy = function () {
        this.ticketNode.off(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.ticketNode.off(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.ticketNode.off(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
        this.ticketNode.off(cc.Node.EventType.TOUCH_CANCEL, this.touchEndEvent, this);
    };
    Scratch_ticket.prototype.touchStartEvent = function (event) {
        var point = this.ticketNode.convertToNodeSpaceAR(event.getLocation());
        this.clearMask(point);
    };
    Scratch_ticket.prototype.touchMoveEvent = function (event) {
        var point = this.ticketNode.convertToNodeSpaceAR(event.getLocation());
        this.clearMask(point);
    };
    Scratch_ticket.prototype.touchEndEvent = function () {
        this.tempDrawPoints = [];
        this.calcProgress();
    };
    Scratch_ticket.prototype.calcProgress = function () {
        var _this = this;
        var hitItemCount = 0;
        var ctx = this.ticketNode.getComponent(cc.Graphics);
        this.polygonPointsList.forEach(function (item) {
            if (!item.isHit)
                return;
            hitItemCount += 1;
            if (!_this.calcDebugger)
                return;
            ctx.rect(item.rect.x, item.rect.y, item.rect.width, item.rect.height);
            ctx.fillColor = cc.color(216, 18, 18, 255);
            ctx.fill();
        });
        this.progerss.string = "\u5DF2\u7ECF\u522E\u5F00\u4E86 " + Math.ceil((hitItemCount / this.polygonPointsList.length) * 100) + "%";
    };
    Scratch_ticket.prototype.clearMask = function (pos) {
        var mask = this.maskNode.getComponent(cc.Mask);
        var stencil = mask._graphics;
        var len = this.tempDrawPoints.length;
        this.tempDrawPoints.push(pos);
        if (len <= 1) {
            // 只有一个点，用圆来清除涂层
            stencil.circle(pos.x, pos.y, CLEAR_LINE_WIDTH / 2);
            stencil.fill();
            // 记录点所在的格子
            this.polygonPointsList.forEach(function (item) {
                if (item.isHit)
                    return;
                var xFlag = pos.x > item.rect.x && pos.x < item.rect.x + item.rect.width;
                var yFlag = pos.y > item.rect.y && pos.y < item.rect.y + item.rect.height;
                if (xFlag && yFlag)
                    item.isHit = true;
            });
        }
        else {
            // 存在多个点，用线段来清除涂层
            var prevPos_1 = this.tempDrawPoints[len - 2];
            var curPos_1 = this.tempDrawPoints[len - 1];
            stencil.moveTo(prevPos_1.x, prevPos_1.y);
            stencil.lineTo(curPos_1.x, curPos_1.y);
            stencil.lineWidth = CLEAR_LINE_WIDTH;
            stencil.lineCap = cc.Graphics.LineCap.ROUND;
            stencil.lineJoin = cc.Graphics.LineJoin.ROUND;
            stencil.strokeColor = cc.color(255, 255, 255, 255);
            stencil.stroke();
            // 记录线段经过的格子
            this.polygonPointsList.forEach(function (item) {
                item.isHit = item.isHit || cc.Intersection.lineRect(prevPos_1, curPos_1, item.rect);
            });
        }
    };
    Scratch_ticket.prototype.reset = function () {
        var mask = this.maskNode.getComponent(cc.Mask);
        mask._graphics.clear();
        this.tempDrawPoints = [];
        this.polygonPointsList = [];
        this.progerss.string = '已经刮开了 0%';
        this.ticketNode.getComponent(cc.Graphics).clear();
        // 生成小格子，用来辅助统计涂层的刮开比例
        for (var x = 0; x < this.ticketNode.width; x += CALC_RECT_WIDTH) {
            for (var y = 0; y < this.ticketNode.height; y += CALC_RECT_WIDTH) {
                this.polygonPointsList.push({
                    rect: cc.rect(x - this.ticketNode.width / 2, y - this.ticketNode.height / 2, CALC_RECT_WIDTH, CALC_RECT_WIDTH),
                    isHit: false
                });
            }
        }
    };
    var _b, _c, _d;
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Node) === "function" ? _b : Object)
    ], Scratch_ticket.prototype, "maskNode", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Node) === "function" ? _c : Object)
    ], Scratch_ticket.prototype, "ticketNode", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_d = typeof cc !== "undefined" && cc.Label) === "function" ? _d : Object)
    ], Scratch_ticket.prototype, "progerss", void 0);
    Scratch_ticket = __decorate([
        ccclass
    ], Scratch_ticket);
    return Scratch_ticket;
}(cc.Component));
exports.default = Scratch_ticket;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NlbmVcXFNjcmF0Y2hfdGlja2V0XFxTY3JhdGNoX3RpY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxJQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDM0IsSUFBTSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7QUFHNUI7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFrSEM7UUFoSEMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBZ0MxQixrQkFBWSxHQUFZLEtBQUssQ0FBQyxDQUFDLHdCQUF3QjtRQWlCdkQsb0JBQWMsR0FBYyxFQUFFLENBQUM7UUF1Qy9CLHVCQUFpQixHQUF3QyxFQUFFLENBQUM7O0lBb0I5RCxDQUFDO0lBMUdDLCtCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsVUFBVSxDQUFD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QyxFQUFFLENBQUMsU0FBUyxHQWtIdkQ7a0JBbEhvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuY29uc3QgQ0FMQ19SRUNUX1dJRFRIID0gNDA7XHJcbmNvbnN0IENMRUFSX0xJTkVfV0lEVEggPSA0MDtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmF0Y2hfdGlja2V0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBtYXNrTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgdGlja2V0Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gIHByb2dlcnNzOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHRoaXMucmVzZXQoKTtcclxuICAgIHRoaXMudGlja2V0Tm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0RXZlbnQsIHRoaXMpO1xyXG4gICAgdGhpcy50aWNrZXROb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlRXZlbnQsIHRoaXMpO1xyXG4gICAgdGhpcy50aWNrZXROb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZEV2ZW50LCB0aGlzKTtcclxuICAgIHRoaXMudGlja2V0Tm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmRFdmVudCwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBiZWZvcmVEZXN0cm95KCkge1xyXG4gICAgdGhpcy50aWNrZXROb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0RXZlbnQsIHRoaXMpO1xyXG4gICAgdGhpcy50aWNrZXROb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZUV2ZW50LCB0aGlzKTtcclxuICAgIHRoaXMudGlja2V0Tm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kRXZlbnQsIHRoaXMpO1xyXG4gICAgdGhpcy50aWNrZXROb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmRFdmVudCwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICB0b3VjaFN0YXJ0RXZlbnQoZXZlbnQpIHtcclxuICAgIGxldCBwb2ludCA9IHRoaXMudGlja2V0Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgIHRoaXMuY2xlYXJNYXNrKHBvaW50KTtcclxuICB9XHJcblxyXG4gIHRvdWNoTW92ZUV2ZW50KGV2ZW50KSB7XHJcbiAgICBsZXQgcG9pbnQgPSB0aGlzLnRpY2tldE5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICB0aGlzLmNsZWFyTWFzayhwb2ludCk7XHJcbiAgfVxyXG5cclxuICB0b3VjaEVuZEV2ZW50KCkge1xyXG4gICAgdGhpcy50ZW1wRHJhd1BvaW50cyA9IFtdO1xyXG4gICAgdGhpcy5jYWxjUHJvZ3Jlc3MoKTtcclxuICB9XHJcblxyXG4gIGNhbGNEZWJ1Z2dlcjogYm9vbGVhbiA9IGZhbHNlOyAvLyDovoXliqnlvIDlhbPvvIzlvIDlkK/liJnkvJrnu5jliLbliJLlvIDmtoLlsYLmiYDlsZ7nmoTlsI/moLzlrZBcclxuICBjYWxjUHJvZ3Jlc3MoKSB7XHJcbiAgICBsZXQgaGl0SXRlbUNvdW50ID0gMDtcclxuICAgIGxldCBjdHggPSB0aGlzLnRpY2tldE5vZGUuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgIHRoaXMucG9seWdvblBvaW50c0xpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoIWl0ZW0uaXNIaXQpIHJldHVybjtcclxuICAgICAgaGl0SXRlbUNvdW50ICs9IDE7XHJcblxyXG4gICAgICBpZiAoIXRoaXMuY2FsY0RlYnVnZ2VyKSByZXR1cm47XHJcbiAgICAgIGN0eC5yZWN0KGl0ZW0ucmVjdC54LCBpdGVtLnJlY3QueSwgaXRlbS5yZWN0LndpZHRoLCBpdGVtLnJlY3QuaGVpZ2h0KTtcclxuICAgICAgY3R4LmZpbGxDb2xvciA9IGNjLmNvbG9yKDIxNiwgMTgsIDE4LCAyNTUpO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5wcm9nZXJzcy5zdHJpbmcgPSBg5bey57uP5Yiu5byA5LqGICR7TWF0aC5jZWlsKChoaXRJdGVtQ291bnQgLyB0aGlzLnBvbHlnb25Qb2ludHNMaXN0Lmxlbmd0aCkgKiAxMDApfSVgO1xyXG4gIH1cclxuXHJcbiAgdGVtcERyYXdQb2ludHM6IGNjLlZlYzJbXSA9IFtdO1xyXG4gIGNsZWFyTWFzayhwb3MpIHtcclxuICAgIGxldCBtYXNrOiBhbnkgPSB0aGlzLm1hc2tOb2RlLmdldENvbXBvbmVudChjYy5NYXNrKTtcclxuICAgIGxldCBzdGVuY2lsID0gbWFzay5fZ3JhcGhpY3M7XHJcbiAgICBjb25zdCBsZW4gPSB0aGlzLnRlbXBEcmF3UG9pbnRzLmxlbmd0aDtcclxuICAgIHRoaXMudGVtcERyYXdQb2ludHMucHVzaChwb3MpO1xyXG5cclxuICAgIGlmIChsZW4gPD0gMSkge1xyXG4gICAgICAvLyDlj6rmnInkuIDkuKrngrnvvIznlKjlnIbmnaXmuIXpmaTmtoLlsYJcclxuICAgICAgc3RlbmNpbC5jaXJjbGUocG9zLngsIHBvcy55LCBDTEVBUl9MSU5FX1dJRFRIIC8gMik7XHJcbiAgICAgIHN0ZW5jaWwuZmlsbCgpO1xyXG5cclxuICAgICAgLy8g6K6w5b2V54K55omA5Zyo55qE5qC85a2QXHJcbiAgICAgIHRoaXMucG9seWdvblBvaW50c0xpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmlzSGl0KSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgeEZsYWcgPSBwb3MueCA+IGl0ZW0ucmVjdC54ICYmIHBvcy54IDwgaXRlbS5yZWN0LnggKyBpdGVtLnJlY3Qud2lkdGg7XHJcbiAgICAgICAgY29uc3QgeUZsYWcgPSBwb3MueSA+IGl0ZW0ucmVjdC55ICYmIHBvcy55IDwgaXRlbS5yZWN0LnkgKyBpdGVtLnJlY3QuaGVpZ2h0O1xyXG4gICAgICAgIGlmICh4RmxhZyAmJiB5RmxhZykgaXRlbS5pc0hpdCA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8g5a2Y5Zyo5aSa5Liq54K577yM55So57q/5q615p2l5riF6Zmk5raC5bGCXHJcbiAgICAgIGxldCBwcmV2UG9zID0gdGhpcy50ZW1wRHJhd1BvaW50c1tsZW4gLSAyXTtcclxuICAgICAgbGV0IGN1clBvcyA9IHRoaXMudGVtcERyYXdQb2ludHNbbGVuIC0gMV07XHJcblxyXG4gICAgICBzdGVuY2lsLm1vdmVUbyhwcmV2UG9zLngsIHByZXZQb3MueSk7XHJcbiAgICAgIHN0ZW5jaWwubGluZVRvKGN1clBvcy54LCBjdXJQb3MueSk7XHJcbiAgICAgIHN0ZW5jaWwubGluZVdpZHRoID0gQ0xFQVJfTElORV9XSURUSDtcclxuICAgICAgc3RlbmNpbC5saW5lQ2FwID0gY2MuR3JhcGhpY3MuTGluZUNhcC5ST1VORDtcclxuICAgICAgc3RlbmNpbC5saW5lSm9pbiA9IGNjLkdyYXBoaWNzLkxpbmVKb2luLlJPVU5EO1xyXG4gICAgICBzdGVuY2lsLnN0cm9rZUNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgc3RlbmNpbC5zdHJva2UoKTtcclxuXHJcbiAgICAgIC8vIOiusOW9lee6v+autee7j+i/h+eahOagvOWtkFxyXG4gICAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLmlzSGl0ID0gaXRlbS5pc0hpdCB8fCBjYy5JbnRlcnNlY3Rpb24ubGluZVJlY3QocHJldlBvcywgY3VyUG9zLCBpdGVtLnJlY3QpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBvbHlnb25Qb2ludHNMaXN0OiB7IHJlY3Q6IGNjLlJlY3Q7IGlzSGl0OiBib29sZWFuIH1bXSA9IFtdO1xyXG4gIHJlc2V0KCkge1xyXG4gICAgbGV0IG1hc2s6IGFueSA9IHRoaXMubWFza05vZGUuZ2V0Q29tcG9uZW50KGNjLk1hc2spO1xyXG4gICAgbWFzay5fZ3JhcGhpY3MuY2xlYXIoKTtcclxuXHJcbiAgICB0aGlzLnRlbXBEcmF3UG9pbnRzID0gW107XHJcbiAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0ID0gW107XHJcbiAgICB0aGlzLnByb2dlcnNzLnN0cmluZyA9ICflt7Lnu4/liK7lvIDkuoYgMCUnO1xyXG4gICAgdGhpcy50aWNrZXROb2RlLmdldENvbXBvbmVudChjYy5HcmFwaGljcykuY2xlYXIoKTtcclxuXHJcbiAgICAvLyDnlJ/miJDlsI/moLzlrZDvvIznlKjmnaXovoXliqnnu5/orqHmtoLlsYLnmoTliK7lvIDmr5TkvotcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy50aWNrZXROb2RlLndpZHRoOyB4ICs9IENBTENfUkVDVF9XSURUSCkge1xyXG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMudGlja2V0Tm9kZS5oZWlnaHQ7IHkgKz0gQ0FMQ19SRUNUX1dJRFRIKSB7XHJcbiAgICAgICAgdGhpcy5wb2x5Z29uUG9pbnRzTGlzdC5wdXNoKHtcclxuICAgICAgICAgIHJlY3Q6IGNjLnJlY3QoeCAtIHRoaXMudGlja2V0Tm9kZS53aWR0aCAvIDIsIHkgLSB0aGlzLnRpY2tldE5vZGUuaGVpZ2h0IC8gMiwgQ0FMQ19SRUNUX1dJRFRILCBDQUxDX1JFQ1RfV0lEVEgpLFxyXG4gICAgICAgICAgaXNIaXQ6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
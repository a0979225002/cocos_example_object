
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controll.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8e4b00XT51O46mCkdkAdil3', 'Controll');
// Script/Controll.ts

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
var ccclass = cc._decorator.ccclass;
var property = cc._decorator.property;
var Modle_1 = require("./Modle");
/**
 * @Author 蕭立品
 * @Description 支票物件控制器
 * @Date 2022-08-08 下午 02:46
 * @Version 1.0
 */
var ChequeController = /** @class */ (function (_super) {
    __extends(ChequeController, _super);
    function ChequeController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chequePrefab = null;
        _this.drawBoardNode = null;
        return _this;
    }
    ChequeController.prototype.onLoad = function () {
        fcc.configMgr.build();
        fcc.sceneMgr
            .setDesignHeight(720)
            .setDesignWidth(1280)
            .updateSize(fcc.type.SceneStyleType.HORIZONTAL)
            .startListener(500);
        this.chequeModel = new Modle_1.default();
        this.chequeModel.initDrawBoardData(this.drawBoardNode, cc.color().fromHEX("#ff8600"), 5);
        this.initialTouchEvent();
    };
    ChequeController.prototype.initialTouchEvent = function () {
        this.drawBoardNode.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.drawBoardNode.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.drawBoardNode.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
    };
    ChequeController.prototype.start = function () {
    };
    ChequeController.prototype.test = function (e) {
        console.log(e);
    };
    ChequeController.prototype.touchStartEvent = function (eventTouch) {
        var position = eventTouch.getLocation();
        // const nowPosition: cc.Vec2 = cc.v2(position.x, this.drawBoardNode.height - position.y);
        this.chequeModel.touchStartAction(position);
    };
    ChequeController.prototype.touchMoveEvent = function (eventTouch) {
        var position = eventTouch.getLocation();
        // const nowPosition: cc.Vec2 = cc.v2(position.x, this.drawBoardNode.height - position.y);
        this.chequeModel.touchMoveToAction(position);
    };
    ChequeController.prototype.touchEndEvent = function (eventTouch) {
        var nowPosition = eventTouch.getLocation();
    };
    ChequeController.prototype.buttonInit = function (componentTrget, component, callBack, buttonTarget, callbackValue) {
        var event = new cc.Component.EventHandler();
        event.target = componentTrget;
        event.component = component;
        event.handler = callBack;
        if (callbackValue)
            event.customEventData = callbackValue;
        console.log(buttonTarget);
        buttonTarget.clickEvents.push(event);
    };
    __decorate([
        property(cc.Prefab)
    ], ChequeController.prototype, "chequePrefab", void 0);
    __decorate([
        property(cc.Node)
    ], ChequeController.prototype, "drawBoardNode", void 0);
    ChequeController = __decorate([
        ccclass
    ], ChequeController);
    return ChequeController;
}(cc.Component));
exports.default = ChequeController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFPLE9BQU8sR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztBQUN2QyxJQUFPLFFBQVEsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztBQUN6QyxpQ0FBa0M7QUFHbEM7Ozs7O0dBS0c7QUFFSDtJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQWlFQztRQTlEVyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQixtQkFBYSxHQUFZLElBQUksQ0FBQzs7SUEyRDFDLENBQUM7SUF0RGEsaUNBQU0sR0FBaEI7UUFDSSxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ3JCLEdBQUcsQ0FBQyxRQUFRO2FBQ1AsZUFBZSxDQUFDLEdBQUcsQ0FBQzthQUNwQixjQUFjLENBQUMsSUFBSSxDQUFDO2FBQ3BCLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7YUFDOUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXhCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxlQUFXLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUM5QixJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELDRDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFUyxnQ0FBSyxHQUFmO0lBRUEsQ0FBQztJQUNELCtCQUFJLEdBQUosVUFBSyxDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQsMENBQWUsR0FBZixVQUFnQixVQUErQjtRQUMzQyxJQUFNLFFBQVEsR0FBWSxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkQsMEZBQTBGO1FBQzFGLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELHlDQUFjLEdBQWQsVUFBZSxVQUErQjtRQUMxQyxJQUFNLFFBQVEsR0FBWSxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkQsMEZBQTBGO1FBQzFGLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELHdDQUFhLEdBQWIsVUFBYyxVQUErQjtRQUN6QyxJQUFNLFdBQVcsR0FBWSxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDMUQsQ0FBQztJQUNELHFDQUFVLEdBQVYsVUFBVyxjQUF1QixFQUFFLFNBQWlCLEVBQUUsUUFBZ0IsRUFBRSxZQUF1QixFQUFFLGFBQXNCO1FBQ3BILElBQUksS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1QyxLQUFLLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztRQUM5QixLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUM1QixLQUFLLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLGFBQWE7WUFDYixLQUFLLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQTtRQUV6QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTFCLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUE3REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswREFDbUI7SUFHdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyREFDb0I7SUFOckIsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0FpRXBDO0lBQUQsdUJBQUM7Q0FqRUQsQUFpRUMsQ0FqRTZDLEVBQUUsQ0FBQyxTQUFTLEdBaUV6RDtrQkFqRW9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjY2NsYXNzID0gY2MuX2RlY29yYXRvci5jY2NsYXNzO1xyXG5pbXBvcnQgcHJvcGVydHkgPSBjYy5fZGVjb3JhdG9yLnByb3BlcnR5O1xyXG5pbXBvcnQgQ2hlcXVlTW9kZWwgZnJvbSBcIi4vTW9kbGVcIjtcclxuXHJcblxyXG4vKipcclxuICogQEF1dGhvciDola3nq4vlk4FcclxuICogQERlc2NyaXB0aW9uIOaUr+elqOeJqeS7tuaOp+WItuWZqFxyXG4gKiBARGF0ZSAyMDIyLTA4LTA4IOS4i+WNiCAwMjo0NlxyXG4gKiBAVmVyc2lvbiAxLjBcclxuICovXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZXF1ZUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcml2YXRlIGNoZXF1ZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgZHJhd0JvYXJkTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVxdWVNb2RlbDogQ2hlcXVlTW9kZWw7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgZmNjLmNvbmZpZ01nci5idWlsZCgpXHJcbiAgICAgICAgZmNjLnNjZW5lTWdyXHJcbiAgICAgICAgICAgIC5zZXREZXNpZ25IZWlnaHQoNzIwKVxyXG4gICAgICAgICAgICAuc2V0RGVzaWduV2lkdGgoMTI4MClcclxuICAgICAgICAgICAgLnVwZGF0ZVNpemUoZmNjLnR5cGUuU2NlbmVTdHlsZVR5cGUuSE9SSVpPTlRBTClcclxuICAgICAgICAgICAgLnN0YXJ0TGlzdGVuZXIoNTAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGVxdWVNb2RlbCA9IG5ldyBDaGVxdWVNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMuY2hlcXVlTW9kZWwuaW5pdERyYXdCb2FyZERhdGEoXHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0JvYXJkTm9kZSwgY2MuY29sb3IoKS5mcm9tSEVYKFwiI2ZmODYwMFwiKSwgNSk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsVG91Y2hFdmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxUb3VjaEV2ZW50KCkge1xyXG4gICAgICAgIHRoaXMuZHJhd0JvYXJkTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0RXZlbnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZHJhd0JvYXJkTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZUV2ZW50LCB0aGlzKTtcclxuICAgICAgICB0aGlzLmRyYXdCb2FyZE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kRXZlbnQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcbiAgICB0ZXN0KGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuXHJcbiAgICB0b3VjaFN0YXJ0RXZlbnQoZXZlbnRUb3VjaDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uOiBjYy5WZWMyID0gZXZlbnRUb3VjaC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIC8vIGNvbnN0IG5vd1Bvc2l0aW9uOiBjYy5WZWMyID0gY2MudjIocG9zaXRpb24ueCwgdGhpcy5kcmF3Qm9hcmROb2RlLmhlaWdodCAtIHBvc2l0aW9uLnkpO1xyXG4gICAgICAgIHRoaXMuY2hlcXVlTW9kZWwudG91Y2hTdGFydEFjdGlvbihwb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgdG91Y2hNb3ZlRXZlbnQoZXZlbnRUb3VjaDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uOiBjYy5WZWMyID0gZXZlbnRUb3VjaC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIC8vIGNvbnN0IG5vd1Bvc2l0aW9uOiBjYy5WZWMyID0gY2MudjIocG9zaXRpb24ueCwgdGhpcy5kcmF3Qm9hcmROb2RlLmhlaWdodCAtIHBvc2l0aW9uLnkpO1xyXG4gICAgICAgIHRoaXMuY2hlcXVlTW9kZWwudG91Y2hNb3ZlVG9BY3Rpb24ocG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvdWNoRW5kRXZlbnQoZXZlbnRUb3VjaDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGNvbnN0IG5vd1Bvc2l0aW9uOiBjYy5WZWMyID0gZXZlbnRUb3VjaC5nZXRMb2NhdGlvbigpO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uSW5pdChjb21wb25lbnRUcmdldDogY2MuTm9kZSwgY29tcG9uZW50OiBzdHJpbmcsIGNhbGxCYWNrOiBzdHJpbmcsIGJ1dHRvblRhcmdldDogY2MuQnV0dG9uLCBjYWxsYmFja1ZhbHVlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGV2ZW50ID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBldmVudC50YXJnZXQgPSBjb21wb25lbnRUcmdldDtcclxuICAgICAgICBldmVudC5jb21wb25lbnQgPSBjb21wb25lbnQ7XHJcbiAgICAgICAgZXZlbnQuaGFuZGxlciA9IGNhbGxCYWNrO1xyXG4gICAgICAgIGlmIChjYWxsYmFja1ZhbHVlKVxyXG4gICAgICAgICAgICBldmVudC5jdXN0b21FdmVudERhdGEgPSBjYWxsYmFja1ZhbHVlXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGJ1dHRvblRhcmdldCk7XHJcblxyXG4gICAgICAgIGJ1dHRvblRhcmdldC5jbGlja0V2ZW50cy5wdXNoKGV2ZW50KVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
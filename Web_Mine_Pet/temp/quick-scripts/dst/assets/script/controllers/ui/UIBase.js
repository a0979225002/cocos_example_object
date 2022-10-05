
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/ui/UIBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2b6cedKGxRIG6XYQhia9aYu', 'UIBase');
// script/controllers/ui/UIBase.ts

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
var EventMng_1 = require("../../manager/EventMng");
var PREFAB_UI_DIR = 'prefab/';
var ccclass = cc._decorator.ccclass;
var UIBase = /** @class */ (function (_super) {
    __extends(UIBase, _super);
    function UIBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UIBase.prototype, "tag", {
        get: function () {
            return this.mTag;
        },
        set: function (value) {
            this.mTag = value;
        },
        enumerable: false,
        configurable: true
    });
    UIBase.getUrl = function () {
        return PREFAB_UI_DIR + this.prefabUrl;
    };
    UIBase.getName = function () {
        return this.className;
    };
    UIBase.prototype.init = function (params) {
        this.onInit(params);
    };
    UIBase.prototype.onLoad = function () {
        this._notifyEventList = new Map();
        this._registerEventList = new Map();
        this.onUILoad();
    };
    UIBase.prototype.start = function () {
        this.onStart();
    };
    UIBase.prototype.onDestroy = function () {
        this.onUIDestroy();
    };
    UIBase.prototype.onEnable = function () {
        this.onRegisterEvent(this.node, this.touchEvent, this);
        this.onShow();
    };
    UIBase.prototype.onDisable = function () {
        this.unRegisterEvent(this.node, this.touchEvent, this);
        this.onHide();
        var self = this;
        this._notifyEventList.forEach(function (f, key) {
            EventMng_1.default.off(key, f, self);
        }, this);
        this._notifyEventList.clear();
    };
    UIBase.prototype.initEvent = function (eventName, callback) {
        EventMng_1.default.on(eventName, callback, this);
        this._notifyEventList.set(eventName, callback);
    };
    UIBase.prototype.touchEvent = function (event) {
        event.stopPropagation();
    };
    UIBase.prototype.onRegisterEvent = function (node, callback, target) {
        if (target === void 0) { target = null; }
        if (!node) {
            return;
        }
        node.on(cc.Node.EventType.TOUCH_END, callback, target);
        this._registerEventList.set(node.name, { callback: callback, target: target });
    };
    UIBase.prototype.unRegisterEvent = function (node, callback, target) {
        if (target === void 0) { target = null; }
        node.off(cc.Node.EventType.TOUCH_END, callback, target);
    };
    UIBase.prototype.getCanvas = function () {
        var node = cc.find("Canvas");
        return cc.v2(node.x, node.y);
    };
    UIBase.prototype.onInit = function (params) { };
    UIBase.prototype.onUILoad = function () { };
    UIBase.prototype.onUIDestroy = function () { };
    UIBase.prototype.onStart = function () { };
    UIBase.prototype.onShow = function () { };
    UIBase.prototype.onHide = function () { };
    UIBase = __decorate([
        ccclass
    ], UIBase);
    return UIBase;
}(cc.Component));
exports.default = UIBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcdWlcXFVJQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFhOUMsSUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDO0FBQ3hCLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBR2xDO0lBQW9DLDBCQUFZO0lBQWhEOztJQWdHQSxDQUFDO0lBMUZHLHNCQUFXLHVCQUFHO2FBQWQ7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQzthQUNELFVBQWUsS0FBVTtZQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FIQTtJQVFhLGFBQU0sR0FBcEI7UUFDSSxPQUFPLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFDLENBQUM7SUFFYSxjQUFPLEdBQXJCO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCxxQkFBSSxHQUFKLFVBQUssTUFBTTtRQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELHVCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxHQUFHLEVBQW9CLENBQUM7UUFDcEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksR0FBRyxFQUF5QixDQUFDO1FBQzNELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsc0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsMEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQseUJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsMEJBQVMsR0FBVDtRQUVJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXZELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVkLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLEdBQUc7WUFDakMsa0JBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFbEMsQ0FBQztJQUVELDBCQUFTLEdBQVQsVUFBVSxTQUFpQixFQUFFLFFBQWtCO1FBQzNDLGtCQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELDJCQUFVLEdBQVYsVUFBVyxLQUFLO1FBQ1osS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxnQ0FBZSxHQUFmLFVBQWdCLElBQWEsRUFBRSxRQUFRLEVBQUUsTUFBYTtRQUFiLHVCQUFBLEVBQUEsYUFBYTtRQUNsRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVELGdDQUFlLEdBQWYsVUFBZ0IsSUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFhO1FBQWIsdUJBQUEsRUFBQSxhQUFhO1FBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsMEJBQVMsR0FBVDtRQUNJLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCx1QkFBTSxHQUFOLFVBQU8sTUFBTSxJQUFJLENBQUM7SUFDbEIseUJBQVEsR0FBUixjQUFhLENBQUM7SUFDZCw0QkFBVyxHQUFYLGNBQWdCLENBQUM7SUFDakIsd0JBQU8sR0FBUCxjQUFZLENBQUM7SUFDYix1QkFBTSxHQUFOLGNBQVcsQ0FBQztJQUNaLHVCQUFNLEdBQU4sY0FBVyxDQUFDO0lBOUZLLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FnRzFCO0lBQUQsYUFBQztDQWhHRCxBQWdHQyxDQWhHbUMsRUFBRSxDQUFDLFNBQVMsR0FnRy9DO2tCQWhHb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudE1uZyBmcm9tIFwiLi4vLi4vbWFuYWdlci9FdmVudE1uZ1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVSUNsYXNzPFQgZXh0ZW5kcyBVSUJhc2U+IHtcclxuICAgIG5ldygpOiBUO1xyXG4gICAgZ2V0VXJsKCk6IHN0cmluZztcclxuICAgIGdldE5hbWUoKTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUmVnaXN0ZXJFdmVudCB7XHJcbiAgICBjYWxsYmFjazogRnVuY3Rpb24sXHJcbiAgICB0YXJnZXQ/OiBhbnksXHJcbn1cclxuXHJcbmNvbnN0IFBSRUZBQl9VSV9ESVIgPSAncHJlZmFiLyc7XHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJQmFzZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBwcmVmYWJVcmw7XHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIGNsYXNzTmFtZTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgbVRhZzogYW55O1xyXG4gICAgcHVibGljIGdldCB0YWcoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tVGFnO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCB0YWcodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMubVRhZyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX25vdGlmeUV2ZW50TGlzdDogTWFwPHN0cmluZywgRnVuY3Rpb24+O1xyXG4gICAgcHJpdmF0ZSBfcmVnaXN0ZXJFdmVudExpc3Q6IE1hcDxzdHJpbmcsIFJlZ2lzdGVyRXZlbnQ+O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VXJsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFBSRUZBQl9VSV9ESVIgKyB0aGlzLnByZWZhYlVybDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbGFzc05hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChwYXJhbXMpIHtcclxuICAgICAgICB0aGlzLm9uSW5pdChwYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLl9ub3RpZnlFdmVudExpc3QgPSBuZXcgTWFwPHN0cmluZywgRnVuY3Rpb24+KCk7XHJcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXJFdmVudExpc3QgPSBuZXcgTWFwPHN0cmluZywgUmVnaXN0ZXJFdmVudD4oKTtcclxuICAgICAgICB0aGlzLm9uVUlMb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5vblN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMub25VSURlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm9uUmVnaXN0ZXJFdmVudCh0aGlzLm5vZGUsIHRoaXMudG91Y2hFdmVudCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcblxyXG4gICAgICAgIHRoaXMudW5SZWdpc3RlckV2ZW50KHRoaXMubm9kZSwgdGhpcy50b3VjaEV2ZW50LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkhpZGUoKTtcclxuXHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLl9ub3RpZnlFdmVudExpc3QuZm9yRWFjaCgoZiwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIEV2ZW50TW5nLm9mZihrZXksIGYsIHNlbGYpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl9ub3RpZnlFdmVudExpc3QuY2xlYXIoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEV2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pIHtcclxuICAgICAgICBFdmVudE1uZy5vbihldmVudE5hbWUsIGNhbGxiYWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLl9ub3RpZnlFdmVudExpc3Quc2V0KGV2ZW50TmFtZSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHRvdWNoRXZlbnQoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlZ2lzdGVyRXZlbnQobm9kZTogY2MuTm9kZSwgY2FsbGJhY2ssIHRhcmdldCA9IG51bGwpIHtcclxuICAgICAgICBpZiAoIW5vZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgY2FsbGJhY2ssIHRhcmdldCk7XHJcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXJFdmVudExpc3Quc2V0KG5vZGUubmFtZSwge2NhbGxiYWNrOiBjYWxsYmFjaywgdGFyZ2V0OiB0YXJnZXR9KTtcclxuICAgIH1cclxuXHJcbiAgICB1blJlZ2lzdGVyRXZlbnQobm9kZTogY2MuTm9kZSwgY2FsbGJhY2ssIHRhcmdldCA9IG51bGwpIHtcclxuICAgICAgICBub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGNhbGxiYWNrLCB0YXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENhbnZhcygpIHtcclxuICAgICAgICBjb25zdCBub2RlID0gY2MuZmluZChcIkNhbnZhc1wiKTtcclxuICAgICAgICByZXR1cm4gY2MudjIobm9kZS54LCBub2RlLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5pdChwYXJhbXMpIHsgfVxyXG4gICAgb25VSUxvYWQoKSB7IH1cclxuICAgIG9uVUlEZXN0cm95KCkgeyB9XHJcbiAgICBvblN0YXJ0KCkgeyB9XHJcbiAgICBvblNob3coKSB7IH1cclxuICAgIG9uSGlkZSgpIHsgfVxyXG5cclxufSJdfQ==
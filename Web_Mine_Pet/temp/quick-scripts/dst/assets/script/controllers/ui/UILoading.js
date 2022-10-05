
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/ui/UILoading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f7418/eTg1GuKl68PWCV/8c', 'UILoading');
// script/controllers/ui/UILoading.ts

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
var UIBase_1 = require("./UIBase");
var ccclass = cc._decorator.ccclass;
var UILoading = /** @class */ (function (_super) {
    __extends(UILoading, _super);
    function UILoading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UILoading.prototype.onInit = function () {
        cc.game.addPersistRootNode(this.node);
    };
    UILoading.prototype.onUILoad = function () {
        this.resize();
    };
    UILoading.prototype.show = function () {
        if (this.node.active) {
            return;
        }
        this.node.active = true;
        this.setTxt();
        this.fadeIn();
    };
    UILoading.prototype.hide = function (isAni) {
        if (isAni === void 0) { isAni = true; }
        if (!this.node.active) {
            return;
        }
        if (isAni) {
            this.fadeOut();
            return;
        }
        this.node.active = false;
    };
    UILoading.prototype.fadeIn = function () {
        this.node.opacity = 0;
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.fadeIn(.1), cc.callFunc(function () {
        })));
    };
    UILoading.prototype.fadeOut = function () {
        var _this = this;
        this.node.runAction(cc.sequence(cc.delayTime(.2), cc.fadeOut(.16), cc.callFunc(function () {
            _this.node.active = false;
        })));
    };
    UILoading.prototype.setTxt = function () {
    };
    UILoading.prototype.resize = function () {
        var pos = this.getCanvas();
        this.node.setPosition(pos.x, pos.y);
    };
    UILoading.prefabUrl = "loading_full_plane";
    UILoading.className = "UILoading";
    UILoading = __decorate([
        ccclass
    ], UILoading);
    return UILoading;
}(UIBase_1.default));
exports.default = UILoading;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcdWlcXFVJTG9hZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFFdEIsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBbUI7QUFHbEM7SUFBdUMsNkJBQU07SUFBN0M7O0lBeUVBLENBQUM7SUFuRUcsMEJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCw0QkFBUSxHQUFSO1FBRUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCx3QkFBSSxHQUFKO1FBRUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNsQixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCx3QkFBSSxHQUFKLFVBQUssS0FBcUI7UUFBckIsc0JBQUEsRUFBQSxZQUFxQjtRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDbkIsT0FBTztTQUNWO1FBRUQsSUFBSSxLQUFLLEVBQUU7WUFDUCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFFN0IsQ0FBQztJQUdELDBCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUMzQixFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUNiLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFDWixDQUFDLENBQUMsQ0FDTCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBR0QsMkJBQU8sR0FBUDtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FDM0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDaEIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFDZixFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ1IsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUNMLENBQUMsQ0FBQztJQUNQLENBQUM7SUFHRCwwQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELDBCQUFNLEdBQU47UUFDSSxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQXJFZ0IsbUJBQVMsR0FBRyxvQkFBb0IsQ0FBQztJQUNqQyxtQkFBUyxHQUFHLFdBQVcsQ0FBQztJQUh4QixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBeUU3QjtJQUFELGdCQUFDO0NBekVELEFBeUVDLENBekVzQyxnQkFBTSxHQXlFNUM7a0JBekVvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJQmFzZSBmcm9tIFwiLi9VSUJhc2VcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJTG9hZGluZyBleHRlbmRzIFVJQmFzZSB7XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBwcmVmYWJVcmwgPSBcImxvYWRpbmdfZnVsbF9wbGFuZVwiO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBjbGFzc05hbWUgPSBcIlVJTG9hZGluZ1wiO1xyXG5cclxuXHJcbiAgICBvbkluaXQoKSB7XHJcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBvblVJTG9hZCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ub2RlLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNldFR4dCgpO1xyXG4gICAgICAgIHRoaXMuZmFkZUluKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZShpc0FuaTogYm9vbGVhbiA9IHRydWUpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLm5vZGUuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc0FuaSkge1xyXG4gICAgICAgICAgICB0aGlzLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgZmFkZUluKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICBjYy5mYWRlSW4oLjEpLFxyXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZhZGVPdXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKC4yKSxcclxuICAgICAgICAgICAgY2MuZmFkZU91dCguMTYpLFxyXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldFR4dCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMuZ2V0Q2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHBvcy54LCBwb3MueSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
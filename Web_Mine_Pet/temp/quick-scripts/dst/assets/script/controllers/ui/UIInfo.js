
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/ui/UIInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cfd9aq3RmlM16Tmxzt3eI7O', 'UIInfo');
// script/controllers/ui/UIInfo.ts

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
var LangMng_1 = require("../../manager/LangMng");
var UIBase_1 = require("./UIBase");
var ViewZorder_1 = require("../../data/const/ViewZorder");
var ccclass = cc._decorator.ccclass;
var UIInfo = /** @class */ (function (_super) {
    __extends(UIInfo, _super);
    function UIInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIInfo.prototype.onUILoad = function () {
        this.node_main = this.node.getChildByName("main");
        this.btn_close = this.node_main.getChildByName("btn_close");
        var con1 = this.node_main.getChildByName("con_1");
        this.label_title_1 = con1.getChildByName("title").getComponent(cc.Label);
        this.label_con_txt_1 = con1.getChildByName("content").getComponent(cc.Label);
        var con2 = this.node_main.getChildByName("con_2");
        this.label_title_2 = con2.getChildByName("title").getComponent(cc.Label);
        this.label_con_txt_2 = con1.getChildByName("content").getComponent(cc.Label);
        this.node.zIndex = ViewZorder_1.ViewZorder.UI;
        this.setTxt();
        this.hide(false);
    };
    UIInfo.prototype.onShow = function () {
        this.onRegisterEvent(this.btn_close, this.onBtnCloseClick, this);
    };
    UIInfo.prototype.show = function () {
        if (this.node.active) {
            return;
        }
        this.node.active = true;
        this.fadeIn();
    };
    UIInfo.prototype.hide = function (isAni) {
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
    UIInfo.prototype.setTxt = function () {
        this.label_title_1.string = LangMng_1.default.getTxt("I_001");
        this.label_con_txt_1.string = LangMng_1.default.getTxt("I_002");
        this.label_title_2.string = LangMng_1.default.getTxt("I_003");
        this.label_con_txt_2.string = LangMng_1.default.getTxt("I_004");
    };
    UIInfo.prototype.fadeIn = function () {
        this.node.opacity = 0;
        this.node.stopAllActions();
        this.node.runAction(cc.fadeIn(.1).easing(cc.easeSineOut()));
    };
    UIInfo.prototype.fadeOut = function () {
        var _this = this;
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.fadeOut(.1), cc.callFunc(function () {
            _this.node.active = false;
        })));
    };
    UIInfo.prototype.onBtnCloseClick = function () {
        this.hide();
    };
    UIInfo = __decorate([
        ccclass
    ], UIInfo);
    return UIInfo;
}(UIBase_1.default));
exports.default = UIInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcdWlcXFVJSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFDNUMsbUNBQThCO0FBQzlCLDBEQUF5RDtBQUVqRCxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUdsQztJQUFvQywwQkFBTTtJQUExQzs7SUEwRkEsQ0FBQztJQS9FRyx5QkFBUSxHQUFSO1FBRUksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTVELElBQUksSUFBSSxHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTdFLElBQUksSUFBSSxHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTdFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLHVCQUFVLENBQUMsRUFBRSxDQUFDO1FBRWpDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFckIsQ0FBQztJQUVELHVCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQscUJBQUksR0FBSjtRQUVJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDbEIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRXhCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUVsQixDQUFDO0lBRUQscUJBQUksR0FBSixVQUFLLEtBQXFCO1FBQXJCLHNCQUFBLEVBQUEsWUFBcUI7UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ25CLE9BQU87U0FDVjtRQUVELElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBRTdCLENBQUM7SUFFRCx1QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELHVCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFHRCx3QkFBTyxHQUFQO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQzNCLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQ2QsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNSLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FDTCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsZ0NBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBeEZnQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBMEYxQjtJQUFELGFBQUM7Q0ExRkQsQUEwRkMsQ0ExRm1DLGdCQUFNLEdBMEZ6QztrQkExRm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGFuZ01uZyBmcm9tIFwiLi4vLi4vbWFuYWdlci9MYW5nTW5nXCI7XHJcbmltcG9ydCBVSUJhc2UgZnJvbSBcIi4vVUlCYXNlXCI7XHJcbmltcG9ydCB7IFZpZXdab3JkZXIgfSBmcm9tIFwiLi4vLi4vZGF0YS9jb25zdC9WaWV3Wm9yZGVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUluZm8gZXh0ZW5kcyBVSUJhc2Uge1xyXG5cclxuICAgIG5vZGVfbWFpbjogY2MuTm9kZTtcclxuXHJcbiAgICBsYWJlbF90aXRsZV8xOiBjYy5MYWJlbDtcclxuICAgIGxhYmVsX2Nvbl90eHRfMTogY2MuTGFiZWw7XHJcbiAgICBsYWJlbF90aXRsZV8yOiBjYy5MYWJlbDtcclxuICAgIGxhYmVsX2Nvbl90eHRfMjogY2MuTGFiZWw7XHJcblxyXG4gICAgYnRuX2Nsb3NlOiBjYy5Ob2RlO1xyXG5cclxuICAgIG9uVUlMb2FkKCkge1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVfbWFpbiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm1haW5cIik7XHJcbiAgICAgICAgdGhpcy5idG5fY2xvc2UgPSB0aGlzLm5vZGVfbWFpbi5nZXRDaGlsZEJ5TmFtZShcImJ0bl9jbG9zZVwiKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbjE9IHRoaXMubm9kZV9tYWluLmdldENoaWxkQnlOYW1lKFwiY29uXzFcIilcclxuICAgICAgICB0aGlzLmxhYmVsX3RpdGxlXzEgPSBjb24xLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLmxhYmVsX2Nvbl90eHRfMSA9IGNvbjEuZ2V0Q2hpbGRCeU5hbWUoXCJjb250ZW50XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgIGxldCBjb24yPSB0aGlzLm5vZGVfbWFpbi5nZXRDaGlsZEJ5TmFtZShcImNvbl8yXCIpXHJcbiAgICAgICAgdGhpcy5sYWJlbF90aXRsZV8yID0gY29uMi5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5sYWJlbF9jb25fdHh0XzIgPSBjb24xLmdldENoaWxkQnlOYW1lKFwiY29udGVudFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gVmlld1pvcmRlci5VSTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRUeHQoKTtcclxuICAgICAgICB0aGlzLmhpZGUoZmFsc2UpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgICAgdGhpcy5vblJlZ2lzdGVyRXZlbnQodGhpcy5idG5fY2xvc2UsIHRoaXMub25CdG5DbG9zZUNsaWNrLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ub2RlLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5mYWRlSW4oKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZShpc0FuaTogYm9vbGVhbiA9IHRydWUpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLm5vZGUuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc0FuaSkge1xyXG4gICAgICAgICAgICB0aGlzLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRUeHQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sYWJlbF90aXRsZV8xLnN0cmluZyA9IExhbmdNbmcuZ2V0VHh0KFwiSV8wMDFcIik7XHJcbiAgICAgICAgdGhpcy5sYWJlbF9jb25fdHh0XzEuc3RyaW5nID0gTGFuZ01uZy5nZXRUeHQoXCJJXzAwMlwiKTtcclxuICAgICAgICB0aGlzLmxhYmVsX3RpdGxlXzIuc3RyaW5nID0gTGFuZ01uZy5nZXRUeHQoXCJJXzAwM1wiKTtcclxuICAgICAgICB0aGlzLmxhYmVsX2Nvbl90eHRfMi5zdHJpbmcgPSBMYW5nTW5nLmdldFR4dChcIklfMDA0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZhZGVJbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5mYWRlSW4oLjEpLmVhc2luZyhjYy5lYXNlU2luZU91dCgpKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZhZGVPdXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgY2MuZmFkZU91dCguMSksXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkNsb3NlQ2xpY2soKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
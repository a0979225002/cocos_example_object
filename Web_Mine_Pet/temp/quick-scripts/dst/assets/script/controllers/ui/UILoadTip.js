
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/ui/UILoadTip.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6ee63MtGNRCs7+qoygTJjeG', 'UILoadTip');
// script/controllers/ui/UILoadTip.ts

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
var ViewZorder_1 = require("../../data/const/ViewZorder");
var ccclass = cc._decorator.ccclass;
var UILoadTip = /** @class */ (function (_super) {
    __extends(UILoadTip, _super);
    function UILoadTip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UILoadTip.prototype.onUILoad = function () {
        this.icon = this.node.getChildByName("icon");
        this.node.zIndex = ViewZorder_1.ViewZorder.Loading;
        this.hide();
    };
    UILoadTip.prototype.show = function () {
        this.node.active = true;
        this.icon.opacity = 0;
        this.icon.runAction(cc.sequence(cc.delayTime(.5), cc.fadeIn(.2)));
    };
    UILoadTip.prototype.hide = function () {
        this.icon.stopAllActions();
        this.node.active = false;
    };
    UILoadTip = __decorate([
        ccclass
    ], UILoadTip);
    return UILoadTip;
}(UIBase_1.default));
exports.default = UILoadTip;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcdWlcXFVJTG9hZFRpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtQ0FBOEI7QUFDOUIsMERBQXVEO0FBRy9DLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBR2xDO0lBQXVDLDZCQUFNO0lBQTdDOztJQXdCQSxDQUFDO0lBcEJHLDRCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLHVCQUFVLENBQUMsT0FBTyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsd0JBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FDNUIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDaEIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FDZixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsd0JBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUF0QmdCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0F3QjdCO0lBQUQsZ0JBQUM7Q0F4QkQsQUF3QkMsQ0F4QnNDLGdCQUFNLEdBd0I1QztrQkF4Qm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFVJQmFzZSBmcm9tIFwiLi9VSUJhc2VcIjtcclxuaW1wb3J0IHtWaWV3Wm9yZGVyfSBmcm9tIFwiLi4vLi4vZGF0YS9jb25zdC9WaWV3Wm9yZGVyXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlMb2FkVGlwIGV4dGVuZHMgVUlCYXNlIHtcclxuXHJcbiAgICBpY29uOiBjYy5Ob2RlO1xyXG5cclxuICAgIG9uVUlMb2FkKCkge1xyXG4gICAgICAgIHRoaXMuaWNvbiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImljb25cIik7XHJcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IFZpZXdab3JkZXIuTG9hZGluZztcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaWNvbi5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLmljb24ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgIGNjLmRlbGF5VGltZSguNSksXHJcbiAgICAgICAgICAgY2MuZmFkZUluKC4yKSxcclxuICAgICAgICApKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIHRoaXMuaWNvbi5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
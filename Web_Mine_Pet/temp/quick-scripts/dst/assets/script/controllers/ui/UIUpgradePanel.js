
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/ui/UIUpgradePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '65452SKn4BDMZY6E+o5EwfY', 'UIUpgradePanel');
// script/controllers/ui/UIUpgradePanel.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var GameCenter_1 = require("../../data/GameCenter");
var AssetsMng_1 = require("../../manager/AssetsMng");
var ViewZorder_1 = require("../../data/const/ViewZorder");
var UIBase_1 = require("./UIBase");
var UIUpgradePanel = /** @class */ (function (_super) {
    __extends(UIUpgradePanel, _super);
    function UIUpgradePanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIUpgradePanel.prototype.onUILoad = function () {
        this.black_bg = this.node.getChildByName("bg");
        this.spine = this.node.getChildByName("spine").getComponent(sp.Skeleton);
        this.light = this.node.getChildByName("light");
        this.node.active = false;
        this.init();
    };
    UIUpgradePanel.prototype.init = function () {
        this.node.zIndex = ViewZorder_1.ViewZorder.UI;
    };
    UIUpgradePanel.prototype.show = function (upgradeID) {
        this.setSpineData(upgradeID);
        this.node.active = true;
        this.light.active = false;
        this.black_bg.active = true;
        this.black_bg.opacity = 0;
        this.black_bg.stopAllActions();
        this.black_bg.runAction(cc.fadeTo(.15, 180));
        this.spine.node.active = true;
        this.spine.setAnimation(0, "lv_start", true);
    };
    UIUpgradePanel.prototype.hide = function (callback) {
        var _this = this;
        this.light.active = true;
        this.light.opacity = 0;
        this.light.stopAllActions();
        this.light.runAction(cc.sequence(cc.fadeIn(.15).easing(cc.easeSineIn()), cc.callFunc(function () {
            _this.spine.node.active = false;
            _this.black_bg.active = false;
            if (callback) {
                callback();
            }
        }), cc.delayTime(.1), cc.fadeOut(.2).easing(cc.easeSineOut()), cc.callFunc(function () {
            _this.node.active = false;
        })));
    };
    UIUpgradePanel.prototype.setSpineData = function (upgradeID) {
        var spineName = GameCenter_1.default.game.getPetBodyThemeName(upgradeID);
        this.spine.skeletonData = AssetsMng_1.default.getAssets(spineName + ".spine");
        this.setSkin(upgradeID);
    };
    UIUpgradePanel.prototype.setSkin = function (upgradeID) {
        this.spine.setSkin(GameCenter_1.default.game.getPetBodySkinName(upgradeID));
    };
    return UIUpgradePanel;
}(UIBase_1.default));
exports.default = UIUpgradePanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcdWlcXFVJVXBncmFkZVBhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUErQztBQUMvQyxxREFBZ0Q7QUFDaEQsMERBQXlEO0FBQ3pELG1DQUE4QjtBQUU5QjtJQUE0QyxrQ0FBTTtJQUFsRDs7SUFvRUEsQ0FBQztJQTlERyxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsdUJBQVUsQ0FBQyxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELDZCQUFJLEdBQUosVUFBSyxTQUFTO1FBRVYsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU3QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVqRCxDQUFDO0lBRUQsNkJBQUksR0FBSixVQUFLLFFBQVM7UUFBZCxpQkFxQkM7UUFuQkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQzVCLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUN0QyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ1IsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUMvQixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsUUFBUSxFQUFFLENBQUM7YUFDZDtRQUNMLENBQUMsQ0FBQyxFQUNGLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQ2hCLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUN2QyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ1IsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUNMLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCxxQ0FBWSxHQUFaLFVBQWEsU0FBUztRQUNsQixJQUFJLFNBQVMsR0FBRyxvQkFBVSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxtQkFBUyxDQUFDLFNBQVMsQ0FBSyxTQUFTLFdBQVMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUdELGdDQUFPLEdBQVAsVUFBUSxTQUFTO1FBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsb0JBQVUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUwscUJBQUM7QUFBRCxDQXBFQSxBQW9FQyxDQXBFMkMsZ0JBQU0sR0FvRWpEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVDZW50ZXIgZnJvbSBcIi4uLy4uL2RhdGEvR2FtZUNlbnRlclwiO1xyXG5pbXBvcnQgQXNzZXRzTW5nIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0Fzc2V0c01uZ1wiO1xyXG5pbXBvcnQgeyBWaWV3Wm9yZGVyIH0gZnJvbSBcIi4uLy4uL2RhdGEvY29uc3QvVmlld1pvcmRlclwiO1xyXG5pbXBvcnQgVUlCYXNlIGZyb20gXCIuL1VJQmFzZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlVcGdyYWRlUGFuZWwgZXh0ZW5kcyBVSUJhc2Uge1xyXG5cclxuICAgIGJsYWNrX2JnOiBjYy5Ob2RlO1xyXG4gICAgc3BpbmU6IHNwLlNrZWxldG9uO1xyXG4gICAgbGlnaHQ6IGNjLk5vZGU7XHJcblxyXG4gICAgb25VSUxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ibGFja19iZyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpO1xyXG4gICAgICAgIHRoaXMuc3BpbmUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluZVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgIHRoaXMubGlnaHQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsaWdodFwiKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gVmlld1pvcmRlci5VSTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KHVwZ3JhZGVJRCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLnNldFNwaW5lRGF0YSh1cGdyYWRlSUQpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmxhY2tfYmcuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJsYWNrX2JnLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMuYmxhY2tfYmcuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLmJsYWNrX2JnLnJ1bkFjdGlvbihjYy5mYWRlVG8oLjE1LCAxODApKTtcclxuXHJcbiAgICAgICAgdGhpcy5zcGluZS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zcGluZS5zZXRBbmltYXRpb24oMCwgYGx2X3N0YXJ0YCwgdHJ1ZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoY2FsbGJhY2s/KTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMubGlnaHQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxpZ2h0Lm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMubGlnaHQuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLmxpZ2h0LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgY2MuZmFkZUluKC4xNSkuZWFzaW5nKGNjLmVhc2VTaW5lSW4oKSksXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BpbmUubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmxhY2tfYmcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKC4xKSxcclxuICAgICAgICAgICAgY2MuZmFkZU91dCguMikuZWFzaW5nKGNjLmVhc2VTaW5lT3V0KCkpLFxyXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldFNwaW5lRGF0YSh1cGdyYWRlSUQpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc3BpbmVOYW1lID0gR2FtZUNlbnRlci5nYW1lLmdldFBldEJvZHlUaGVtZU5hbWUodXBncmFkZUlEKTtcclxuICAgICAgICB0aGlzLnNwaW5lLnNrZWxldG9uRGF0YSA9IEFzc2V0c01uZy5nZXRBc3NldHMoYCR7IHNwaW5lTmFtZSB9LnNwaW5lYCk7XHJcbiAgICAgICAgdGhpcy5zZXRTa2luKHVwZ3JhZGVJRCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldFNraW4odXBncmFkZUlEKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcGluZS5zZXRTa2luKEdhbWVDZW50ZXIuZ2FtZS5nZXRQZXRCb2R5U2tpbk5hbWUodXBncmFkZUlEKSk7XHJcbiAgICB9XHJcblxyXG59Il19
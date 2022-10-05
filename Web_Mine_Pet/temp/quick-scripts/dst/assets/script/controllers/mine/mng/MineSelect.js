
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/mine/mng/MineSelect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b2f2byd4L5G6Z6W+vjV+m7B', 'MineSelect');
// script/controllers/mine/mng/MineSelect.ts

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
exports.MineSelect = void 0;
var MineSlider_1 = require("./MineSlider");
var UIBase_1 = require("../../ui/UIBase");
var DataMinePetSelect_1 = require("../../../data/scene/DataMinePetSelect");
var MineSelect = /** @class */ (function (_super) {
    __extends(MineSelect, _super);
    function MineSelect(type) {
        var _this = _super.call(this) || this;
        _this.type = null;
        _this.bodyName = [];
        _this.floorName = [];
        _this.type = type;
        return _this;
    }
    MineSelect.prototype.onUILoad = function () {
        this.ui = this.node.addComponent(DataMinePetSelect_1.default);
        this.slider = new MineSlider_1.MineSlider(this.ui, this.type);
    };
    MineSelect.prototype.onStart = function () {
        this.slider.init();
        this.slider.createSliderList(this.getFloorAssets(), this.getBodyAssets());
    };
    MineSelect.prototype.onShow = function () {
        this.onRegisterEvent(this.ui.btn_go, this.onBtnGoClick, this);
        this.slider.show();
        this.slider.arrowBtnsBindOn();
    };
    MineSelect.prototype.onHide = function () {
        this.unRegisterEvent(this.ui.btn_go, this.onBtnGoClick, this);
        this.slider.hide();
        this.slider.arrowBtnsBindOff();
    };
    MineSelect.prototype.onBtnGoClick = function () {
        this.slider.onBtnGoClick();
    };
    MineSelect.prototype.getBodyAssets = function () {
        return this.bodyName;
    };
    MineSelect.prototype.getFloorAssets = function () {
        return this.floorName;
    };
    return MineSelect;
}(UIBase_1.default));
exports.MineSelect = MineSelect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcbWluZVxcbW5nXFxNaW5lU2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMEM7QUFDMUMsMENBQXFDO0FBQ3JDLDJFQUFzRTtBQUV0RTtJQUFnQyw4QkFBTTtJQVNsQyxvQkFBWSxJQUFZO1FBQXhCLFlBQ0ksaUJBQU8sU0FFVjtRQVBELFVBQUksR0FBVyxJQUFJLENBQUM7UUFDcEIsY0FBUSxHQUFhLEVBQUUsQ0FBQztRQUN4QixlQUFTLEdBQWEsRUFBRSxDQUFDO1FBSXJCLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztJQUNyQixDQUFDO0lBRUQsNkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsMkJBQWlCLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksdUJBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsNEJBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELDJCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCwyQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxpQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsa0NBQWEsR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQsbUNBQWMsR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUwsaUJBQUM7QUFBRCxDQWhEQSxBQWdEQyxDQWhEK0IsZ0JBQU0sR0FnRHJDO0FBaERZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWluZVNsaWRlciB9IGZyb20gXCIuL01pbmVTbGlkZXJcIjtcclxuaW1wb3J0IFVJQmFzZSBmcm9tIFwiLi4vLi4vdWkvVUlCYXNlXCI7XHJcbmltcG9ydCBEYXRhTWluZVBldFNlbGVjdCBmcm9tIFwiLi4vLi4vLi4vZGF0YS9zY2VuZS9EYXRhTWluZVBldFNlbGVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1pbmVTZWxlY3QgZXh0ZW5kcyBVSUJhc2Uge1xyXG5cclxuICAgIHVpOiBEYXRhTWluZVBldFNlbGVjdDtcclxuICAgIHNsaWRlcjogTWluZVNsaWRlcjtcclxuXHJcbiAgICB0eXBlOiBudW1iZXIgPSBudWxsO1xyXG4gICAgYm9keU5hbWU6IHN0cmluZ1tdID0gW107XHJcbiAgICBmbG9vck5hbWU6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IodHlwZTogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVUlMb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudWkgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KERhdGFNaW5lUGV0U2VsZWN0KTtcclxuICAgICAgICB0aGlzLnNsaWRlciA9IG5ldyBNaW5lU2xpZGVyKHRoaXMudWksIHRoaXMudHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdGFydCgpIHtcclxuICAgICAgICB0aGlzLnNsaWRlci5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIuY3JlYXRlU2xpZGVyTGlzdCh0aGlzLmdldEZsb29yQXNzZXRzKCksIHRoaXMuZ2V0Qm9keUFzc2V0cygpKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblJlZ2lzdGVyRXZlbnQodGhpcy51aS5idG5fZ28sIHRoaXMub25CdG5Hb0NsaWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnNsaWRlci5zaG93KCk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIuYXJyb3dCdG5zQmluZE9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25IaWRlKCkge1xyXG4gICAgICAgIHRoaXMudW5SZWdpc3RlckV2ZW50KHRoaXMudWkuYnRuX2dvLCB0aGlzLm9uQnRuR29DbGljaywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyLmFycm93QnRuc0JpbmRPZmYoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkdvQ2xpY2soKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIub25CdG5Hb0NsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Qm9keUFzc2V0cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib2R5TmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGbG9vckFzc2V0cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mbG9vck5hbWU7XHJcbiAgICB9XHJcblxyXG59Il19
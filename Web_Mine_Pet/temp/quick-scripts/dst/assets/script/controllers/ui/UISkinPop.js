
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/ui/UISkinPop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '47f5anK9OFGM5aOAaXeNX9s', 'UISkinPop');
// script/controllers/ui/UISkinPop.ts

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
var AssetsMng_1 = require("../../manager/AssetsMng");
var GameCenter_1 = require("../../data/GameCenter");
var PropSelectPop_1 = require("../mine/pop/PropSelectPop");
var LangMng_1 = require("../../manager/LangMng");
var UISkinPop = /** @class */ (function (_super) {
    __extends(UISkinPop, _super);
    function UISkinPop() {
        var _this = _super.call(this) || this;
        _this.langTxtData = null;
        _this.langTxtData = {
            noDisplay: LangMng_1.default.getTxt("T_113"),
        };
        _this.btnIconImg = {
            n: _this.getBtnNormalImg(),
            a: _this.getBtnActiveImg(),
        };
        return _this;
    }
    UISkinPop.prototype.getListData = function () {
        return GameCenter_1.default.game.mineSkinListData;
    };
    UISkinPop.prototype.getBtnNormalImg = function () {
        var arr = [null];
        var img = AssetsMng_1.default.getAssets("decoration.plist");
        for (var i = 1; i < 8; i++) {
            arr[i] = img.getSpriteFrame("skin_01_n");
        }
        return arr;
    };
    UISkinPop.prototype.getBtnActiveImg = function () {
        var arr = [null];
        var img = AssetsMng_1.default.getAssets("decoration.plist");
        for (var i = 1; i < 8; i++) {
            arr[i] = img.getSpriteFrame("skin_01_a");
        }
        return arr;
    };
    UISkinPop.prototype.getCurrentSelectID = function (id) {
        return GameCenter_1.default.game.mineSkin[id];
    };
    return UISkinPop;
}(PropSelectPop_1.default));
exports.default = UISkinPop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcdWlcXFVJU2tpblBvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Q7QUFDaEQsb0RBQStDO0FBQy9DLDJEQUFzRDtBQUN0RCxpREFBNEM7QUFFNUM7SUFBdUMsNkJBQWE7SUFJaEQ7UUFBQSxZQUVJLGlCQUFPLFNBV1Y7UUFmRCxpQkFBVyxHQUFHLElBQUksQ0FBQztRQU1mLEtBQUksQ0FBQyxXQUFXLEdBQUc7WUFDZixTQUFTLEVBQUUsaUJBQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ3JDLENBQUE7UUFFRCxLQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2QsQ0FBQyxFQUFFLEtBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsQ0FBQyxFQUFFLEtBQUksQ0FBQyxlQUFlLEVBQUU7U0FDNUIsQ0FBQTs7SUFFTCxDQUFDO0lBRUQsK0JBQVcsR0FBWDtRQUNJLE9BQU8sb0JBQVUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDNUMsQ0FBQztJQUVELG1DQUFlLEdBQWY7UUFFRyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLElBQUksR0FBRyxHQUFHLG1CQUFTLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFbEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM1QztRQUVELE9BQU8sR0FBRyxDQUFDO0lBRWQsQ0FBQztJQUVELG1DQUFlLEdBQWY7UUFFSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLElBQUksR0FBRyxHQUFHLG1CQUFTLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFbEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM1QztRQUVELE9BQU8sR0FBRyxDQUFDO0lBRWYsQ0FBQztJQUVELHNDQUFrQixHQUFsQixVQUFtQixFQUFFO1FBQ2pCLE9BQU8sb0JBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTCxnQkFBQztBQUFELENBckRBLEFBcURDLENBckRzQyx1QkFBYSxHQXFEbkQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXNzZXRzTW5nIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0Fzc2V0c01uZ1wiO1xyXG5pbXBvcnQgR2FtZUNlbnRlciBmcm9tIFwiLi4vLi4vZGF0YS9HYW1lQ2VudGVyXCI7XHJcbmltcG9ydCBQcm9wU2VsZWN0UG9wIGZyb20gXCIuLi9taW5lL3BvcC9Qcm9wU2VsZWN0UG9wXCI7XHJcbmltcG9ydCBMYW5nTW5nIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0xhbmdNbmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJU2tpblBvcCBleHRlbmRzIFByb3BTZWxlY3RQb3Age1xyXG5cclxuICAgIGxhbmdUeHREYXRhID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5sYW5nVHh0RGF0YSA9IHtcclxuICAgICAgICAgICAgbm9EaXNwbGF5OiBMYW5nTW5nLmdldFR4dChcIlRfMTEzXCIpLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5idG5JY29uSW1nID0ge1xyXG4gICAgICAgICAgICBuOiB0aGlzLmdldEJ0bk5vcm1hbEltZygpLFxyXG4gICAgICAgICAgICBhOiB0aGlzLmdldEJ0bkFjdGl2ZUltZygpLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGlzdERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIEdhbWVDZW50ZXIuZ2FtZS5taW5lU2tpbkxpc3REYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJ0bk5vcm1hbEltZygpIHtcclxuXHJcbiAgICAgICBsZXQgYXJyID0gW251bGxdO1xyXG4gICAgICAgbGV0IGltZyA9IEFzc2V0c01uZy5nZXRBc3NldHMoXCJkZWNvcmF0aW9uLnBsaXN0XCIpO1xyXG5cclxuICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgICAgICAgYXJyW2ldID0gaW1nLmdldFNwcml0ZUZyYW1lKFwic2tpbl8wMV9uXCIpO1xyXG4gICAgICAgfVxyXG5cclxuICAgICAgIHJldHVybiBhcnI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEJ0bkFjdGl2ZUltZygpIHtcclxuXHJcbiAgICAgICAgbGV0IGFyciA9IFtudWxsXTtcclxuICAgICAgICBsZXQgaW1nID0gQXNzZXRzTW5nLmdldEFzc2V0cyhcImRlY29yYXRpb24ucGxpc3RcIik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFycltpXSA9IGltZy5nZXRTcHJpdGVGcmFtZShcInNraW5fMDFfYVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhcnI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEN1cnJlbnRTZWxlY3RJRChpZCkge1xyXG4gICAgICAgIHJldHVybiBHYW1lQ2VudGVyLmdhbWUubWluZVNraW5baWRdO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
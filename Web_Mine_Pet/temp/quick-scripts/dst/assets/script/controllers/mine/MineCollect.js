
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/mine/MineCollect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ccc99o6jJ9MNa1E8Z6mswH1', 'MineCollect');
// script/controllers/mine/MineCollect.ts

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
var LangMng_1 = require("../../manager/LangMng");
var UIBase_1 = require("../ui/UIBase");
var ActionTransition_1 = require("../../common/ActionTransition");
var EventConst_1 = require("../../data/const/EventConst");
var DataMineCollect_1 = require("../../data/scene/DataMineCollect");
var CollectGeneral_1 = require("./collect/CollectGeneral");
var ccclass = cc._decorator.ccclass;
var MineCollect = /** @class */ (function (_super) {
    __extends(MineCollect, _super);
    function MineCollect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pages = [];
        _this.currentPageIndex = 0;
        return _this;
    }
    MineCollect.prototype.onUILoad = function () {
        this.ui = this.node.addComponent(DataMineCollect_1.default);
        this.collectGeneral = this.ui.node_con_1.addComponent(CollectGeneral_1.default);
        this.viewInit();
    };
    MineCollect.prototype.onShow = function () {
        this.onRegisterEvent(this.ui.btn_home, this.onBtnHomeClick, this);
        this.onRegisterEvent(this.ui.btn_vip, this.onBtnVipClick, this);
    };
    MineCollect.prototype.onHide = function () {
        this.unRegisterEvent(this.ui.btn_home, this.onBtnHomeClick, this);
        this.unRegisterEvent(this.ui.btn_vip, this.onBtnVipClick, this);
    };
    MineCollect.prototype.viewInit = function () {
        this.pages.push(this.collectGeneral);
        this.node.active = false;
    };
    MineCollect.prototype.show = function (aniState) {
        var _this = this;
        if (aniState === void 0) { aniState = true; }
        this.pages[this.currentPageIndex].viewReset();
        ActionTransition_1.ActionTransition.pageFadeIn(this.node, aniState, function () {
            _this.pages[_this.currentPageIndex].mineAniPlay();
        });
    };
    MineCollect.prototype.hide = function (aniState) {
        if (aniState === void 0) { aniState = true; }
        ActionTransition_1.ActionTransition.pageFadeOut(this.node, aniState);
    };
    MineCollect.prototype.onBtnHomeClick = function () {
        EventMng_1.default.emit(EventConst_1.MainEvent.ENTER_MINE_MNG);
    };
    MineCollect.prototype.onBtnVipClick = function () {
        EventMng_1.default.emit(EventConst_1.MainEvent.MESSAGE_SHOW, {
            type: 2,
            content: LangMng_1.default.getTxt("S_9001"),
            autoClose: true,
        });
    };
    MineCollect = __decorate([
        ccclass
    ], MineCollect);
    return MineCollect;
}(UIBase_1.default));
exports.default = MineCollect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcbWluZVxcTWluZUNvbGxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLGlEQUE0QztBQUM1Qyx1Q0FBa0M7QUFDbEMsa0VBQWlFO0FBQ2pFLDBEQUF3RDtBQUN4RCxvRUFBK0Q7QUFDL0QsMkRBQXNEO0FBRTlDLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBR2xDO0lBQXlDLCtCQUFNO0lBQS9DO1FBQUEscUVBbURDO1FBL0NHLFdBQUssR0FBVSxFQUFFLENBQUM7UUFDbEIsc0JBQWdCLEdBQVcsQ0FBQyxDQUFDOztJQThDakMsQ0FBQztJQTVDRyw4QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyx5QkFBZSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsd0JBQWMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELDRCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFDRCw4QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsMEJBQUksR0FBSixVQUFLLFFBQXdCO1FBQTdCLGlCQUtDO1FBTEkseUJBQUEsRUFBQSxlQUF3QjtRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzlDLG1DQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRTtZQUM3QyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDBCQUFJLEdBQUosVUFBSyxRQUF3QjtRQUF4Qix5QkFBQSxFQUFBLGVBQXdCO1FBQ3pCLG1DQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFHRCxvQ0FBYyxHQUFkO1FBQ0ksa0JBQVEsQ0FBQyxJQUFJLENBQUMsc0JBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsbUNBQWEsR0FBYjtRQUNJLGtCQUFRLENBQUMsSUFBSSxDQUFDLHNCQUFTLENBQUMsWUFBWSxFQUFFO1lBQ2xDLElBQUksRUFBRSxDQUFDO1lBQ1AsT0FBTyxFQUFFLGlCQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNqQyxTQUFTLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBakRnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBbUQvQjtJQUFELGtCQUFDO0NBbkRELEFBbURDLENBbkR3QyxnQkFBTSxHQW1EOUM7a0JBbkRvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50TW5nIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0V2ZW50TW5nXCI7XHJcbmltcG9ydCBMYW5nTW5nIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0xhbmdNbmdcIjtcclxuaW1wb3J0IFVJQmFzZSBmcm9tIFwiLi4vdWkvVUlCYXNlXCI7XHJcbmltcG9ydCB7IEFjdGlvblRyYW5zaXRpb24gfSBmcm9tIFwiLi4vLi4vY29tbW9uL0FjdGlvblRyYW5zaXRpb25cIjtcclxuaW1wb3J0IHsgTWFpbkV2ZW50IH0gZnJvbSBcIi4uLy4uL2RhdGEvY29uc3QvRXZlbnRDb25zdFwiO1xyXG5pbXBvcnQgRGF0YU1pbmVDb2xsZWN0IGZyb20gXCIuLi8uLi9kYXRhL3NjZW5lL0RhdGFNaW5lQ29sbGVjdFwiO1xyXG5pbXBvcnQgQ29sbGVjdEdlbmVyYWwgZnJvbSBcIi4vY29sbGVjdC9Db2xsZWN0R2VuZXJhbFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWluZUNvbGxlY3QgZXh0ZW5kcyBVSUJhc2Uge1xyXG5cclxuICAgIHVpOiBEYXRhTWluZUNvbGxlY3Q7XHJcbiAgICBjb2xsZWN0R2VuZXJhbDogQ29sbGVjdEdlbmVyYWw7XHJcbiAgICBwYWdlczogYW55W10gPSBbXTtcclxuICAgIGN1cnJlbnRQYWdlSW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgb25VSUxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51aSA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoRGF0YU1pbmVDb2xsZWN0KTtcclxuICAgICAgICB0aGlzLmNvbGxlY3RHZW5lcmFsID0gdGhpcy51aS5ub2RlX2Nvbl8xLmFkZENvbXBvbmVudChDb2xsZWN0R2VuZXJhbCk7XHJcbiAgICAgICAgdGhpcy52aWV3SW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2hvdygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uUmVnaXN0ZXJFdmVudCh0aGlzLnVpLmJ0bl9ob21lLCB0aGlzLm9uQnRuSG9tZUNsaWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm9uUmVnaXN0ZXJFdmVudCh0aGlzLnVpLmJ0bl92aXAsIHRoaXMub25CdG5WaXBDbGljaywgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25IaWRlKCkge1xyXG4gICAgICAgIHRoaXMudW5SZWdpc3RlckV2ZW50KHRoaXMudWkuYnRuX2hvbWUsIHRoaXMub25CdG5Ib21lQ2xpY2ssIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudW5SZWdpc3RlckV2ZW50KHRoaXMudWkuYnRuX3ZpcCwgdGhpcy5vbkJ0blZpcENsaWNrLCB0aGlzKTtcclxuICAgIH1cclxuICAgIHZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFnZXMucHVzaCh0aGlzLmNvbGxlY3RHZW5lcmFsKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdyhhbmlTdGF0ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhZ2VzW3RoaXMuY3VycmVudFBhZ2VJbmRleF0udmlld1Jlc2V0KCk7XHJcbiAgICAgICAgQWN0aW9uVHJhbnNpdGlvbi5wYWdlRmFkZUluKHRoaXMubm9kZSwgYW5pU3RhdGUsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlSW5kZXhdLm1pbmVBbmlQbGF5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZShhbmlTdGF0ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICBBY3Rpb25UcmFuc2l0aW9uLnBhZ2VGYWRlT3V0KHRoaXMubm9kZSwgYW5pU3RhdGUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkJ0bkhvbWVDbGljaygpOiB2b2lkIHtcclxuICAgICAgICBFdmVudE1uZy5lbWl0KE1haW5FdmVudC5FTlRFUl9NSU5FX01ORyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5WaXBDbGljaygpOiB2b2lkIHtcclxuICAgICAgICBFdmVudE1uZy5lbWl0KE1haW5FdmVudC5NRVNTQUdFX1NIT1csIHtcclxuICAgICAgICAgICAgdHlwZTogMixcclxuICAgICAgICAgICAgY29udGVudDogTGFuZ01uZy5nZXRUeHQoXCJTXzkwMDFcIiksXHJcbiAgICAgICAgICAgIGF1dG9DbG9zZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0iXX0=
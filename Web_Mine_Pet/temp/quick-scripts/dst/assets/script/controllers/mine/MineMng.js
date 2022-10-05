
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/mine/MineMng.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '45f045uJgJKmrnqXFHFo6tj', 'MineMng');
// script/controllers/mine/MineMng.ts

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
var ActionTransition_1 = require("../../common/ActionTransition");
var EventConst_1 = require("../../data/const/EventConst");
var UIBase_1 = require("../ui/UIBase");
var DataMineMng_1 = require("../../data/scene/DataMineMng");
var MineMngNav_1 = require("./MineMngNav");
var MineMngCon_1 = require("./MineMngCon");
var ccclass = cc._decorator.ccclass;
var MineMng = /** @class */ (function (_super) {
    __extends(MineMng, _super);
    function MineMng() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui = null;
        _this._currentIndex = 0;
        return _this;
    }
    MineMng.prototype.onUILoad = function () {
        this.ui = this.node.addComponent(DataMineMng_1.default);
        this.tabNav = this.ui.tab_nav_holder.addComponent(MineMngNav_1.default);
        this.con = this.ui.con_holder.addComponent(MineMngCon_1.default);
        this.viewInit();
    };
    MineMng.prototype.onShow = function () {
        this.initEvent(EventConst_1.MainEvent.MINE_MNG_PAGE_SWITCH, this.onPageSwitch);
    };
    MineMng.prototype.viewInit = function () {
        var mineListState = this.con.pages[0].slider.getSliderState();
        if (mineListState == 0) {
            this.tabNav.navBtns[2].node.active = false;
        }
    };
    MineMng.prototype.show = function (aniState) {
        if (aniState === void 0) { aniState = true; }
        ActionTransition_1.ActionTransition.pageFadeIn(this.node, aniState);
    };
    MineMng.prototype.hide = function (aniState) {
        if (aniState === void 0) { aniState = true; }
        ActionTransition_1.ActionTransition.pageFadeOut(this.node, aniState);
    };
    MineMng.prototype.onPageSwitch = function (id) {
        if (this._currentIndex == id) {
            return;
        }
        var hasPage = this.getHasPage(id);
        if (!hasPage) {
            EventMng_1.default.emit(EventConst_1.MainEvent.MESSAGE_SHOW, {
                type: 2,
                content: LangMng_1.default.getTxt("S_9001"),
                autoClose: true,
            });
            return;
        }
        this.currentIndex = id;
        this.tabNav.btnSwitch(this.currentIndex);
        this.con.pageSwitch(this.currentIndex);
    };
    MineMng.prototype.getHasPage = function (id) {
        return !!this.con.pages[id];
    };
    Object.defineProperty(MineMng.prototype, "currentIndex", {
        get: function () {
            return this._currentIndex;
        },
        set: function (value) {
            this._currentIndex = value;
        },
        enumerable: false,
        configurable: true
    });
    MineMng = __decorate([
        ccclass
    ], MineMng);
    return MineMng;
}(UIBase_1.default));
exports.default = MineMng;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcbWluZVxcTWluZU1uZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsaURBQTRDO0FBQzVDLGtFQUFpRTtBQUNqRSwwREFBd0Q7QUFDeEQsdUNBQWtDO0FBQ2xDLDREQUF1RDtBQUN2RCwyQ0FBc0M7QUFDdEMsMkNBQXNDO0FBRTlCLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBR2xDO0lBQXFDLDJCQUFNO0lBQTNDO1FBQUEscUVBd0VDO1FBdEVHLFFBQUUsR0FBZ0IsSUFBSSxDQUFDO1FBSWYsbUJBQWEsR0FBVyxDQUFDLENBQUM7O0lBa0V0QyxDQUFDO0lBaEVHLDBCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxvQkFBVSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsb0JBQVUsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsd0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQVMsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELDBCQUFRLEdBQVI7UUFDSSxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDOUQsSUFBSSxhQUFhLElBQUksQ0FBQyxFQUFHO1lBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQzlDO0lBQ0wsQ0FBQztJQUdELHNCQUFJLEdBQUosVUFBSyxRQUF3QjtRQUF4Qix5QkFBQSxFQUFBLGVBQXdCO1FBQ3pCLG1DQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFHRCxzQkFBSSxHQUFKLFVBQUssUUFBd0I7UUFBeEIseUJBQUEsRUFBQSxlQUF3QjtRQUN6QixtQ0FBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBR0QsOEJBQVksR0FBWixVQUFhLEVBQVU7UUFHbkIsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLEVBQUUsRUFBRTtZQUMxQixPQUFPO1NBQ1Y7UUFFRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDVixrQkFBUSxDQUFDLElBQUksQ0FBQyxzQkFBUyxDQUFDLFlBQVksRUFBRTtnQkFDbEMsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsT0FBTyxFQUFFLGlCQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFDakMsU0FBUyxFQUFFLElBQUk7YUFDbEIsQ0FBQyxDQUFDO1lBQ0gsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUUzQyxDQUFDO0lBRUQsNEJBQVUsR0FBVixVQUFXLEVBQUU7UUFDVCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsc0JBQUksaUNBQVk7YUFJaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQzthQU5ELFVBQWlCLEtBQWE7WUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFsRWdCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0F3RTNCO0lBQUQsY0FBQztDQXhFRCxBQXdFQyxDQXhFb0MsZ0JBQU0sR0F3RTFDO2tCQXhFb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudE1uZyBmcm9tIFwiLi4vLi4vbWFuYWdlci9FdmVudE1uZ1wiO1xyXG5pbXBvcnQgTGFuZ01uZyBmcm9tIFwiLi4vLi4vbWFuYWdlci9MYW5nTW5nXCI7XHJcbmltcG9ydCB7IEFjdGlvblRyYW5zaXRpb24gfSBmcm9tIFwiLi4vLi4vY29tbW9uL0FjdGlvblRyYW5zaXRpb25cIjtcclxuaW1wb3J0IHsgTWFpbkV2ZW50IH0gZnJvbSBcIi4uLy4uL2RhdGEvY29uc3QvRXZlbnRDb25zdFwiO1xyXG5pbXBvcnQgVUlCYXNlIGZyb20gXCIuLi91aS9VSUJhc2VcIjtcclxuaW1wb3J0IERhdGFNaW5lTW5nIGZyb20gXCIuLi8uLi9kYXRhL3NjZW5lL0RhdGFNaW5lTW5nXCI7XHJcbmltcG9ydCBNaW5lTW5nTmF2IGZyb20gXCIuL01pbmVNbmdOYXZcIjtcclxuaW1wb3J0IE1pbmVNbmdDb24gZnJvbSBcIi4vTWluZU1uZ0NvblwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWluZU1uZyBleHRlbmRzIFVJQmFzZSB7XHJcblxyXG4gICAgdWk6IERhdGFNaW5lTW5nID0gbnVsbDtcclxuICAgIHRhYk5hdjogTWluZU1uZ05hdjtcclxuICAgIGNvbjogTWluZU1uZ0NvbjtcclxuXHJcbiAgICBwcml2YXRlIF9jdXJyZW50SW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgb25VSUxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51aSA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoRGF0YU1pbmVNbmcpO1xyXG4gICAgICAgIHRoaXMudGFiTmF2ID0gdGhpcy51aS50YWJfbmF2X2hvbGRlci5hZGRDb21wb25lbnQoTWluZU1uZ05hdik7XHJcbiAgICAgICAgdGhpcy5jb24gPSB0aGlzLnVpLmNvbl9ob2xkZXIuYWRkQ29tcG9uZW50KE1pbmVNbmdDb24pO1xyXG4gICAgICAgIHRoaXMudmlld0luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoTWFpbkV2ZW50Lk1JTkVfTU5HX1BBR0VfU1dJVENILCB0aGlzLm9uUGFnZVN3aXRjaCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1pbmVMaXN0U3RhdGUgPSB0aGlzLmNvbi5wYWdlc1swXS5zbGlkZXIuZ2V0U2xpZGVyU3RhdGUoKTtcclxuICAgICAgICBpZiAobWluZUxpc3RTdGF0ZSA9PSAwICkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYk5hdi5uYXZCdG5zWzJdLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzaG93KGFuaVN0YXRlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgICAgIEFjdGlvblRyYW5zaXRpb24ucGFnZUZhZGVJbih0aGlzLm5vZGUsIGFuaVN0YXRlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaGlkZShhbmlTdGF0ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICBBY3Rpb25UcmFuc2l0aW9uLnBhZ2VGYWRlT3V0KHRoaXMubm9kZSwgYW5pU3RhdGUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvblBhZ2VTd2l0Y2goaWQ6IG51bWJlcik6IHZvaWQge1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRJbmRleCA9PSBpZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGFzUGFnZSA9IHRoaXMuZ2V0SGFzUGFnZShpZCk7XHJcbiAgICAgICAgaWYgKCFoYXNQYWdlKSB7XHJcbiAgICAgICAgICAgIEV2ZW50TW5nLmVtaXQoTWFpbkV2ZW50Lk1FU1NBR0VfU0hPVywge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogMixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IExhbmdNbmcuZ2V0VHh0KFwiU185MDAxXCIpLFxyXG4gICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBpZDtcclxuICAgICAgICB0aGlzLnRhYk5hdi5idG5Td2l0Y2godGhpcy5jdXJyZW50SW5kZXgpO1xyXG4gICAgICAgIHRoaXMuY29uLnBhZ2VTd2l0Y2godGhpcy5jdXJyZW50SW5kZXgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRIYXNQYWdlKGlkKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5jb24ucGFnZXNbaWRdO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBjdXJyZW50SW5kZXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRJbmRleCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjdXJyZW50SW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudEluZGV4O1xyXG4gICAgfVxyXG5cclxufSJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/mine/MineMngCon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6ed47uaRptLMIrZ6C4JFDxl', 'MineMngCon');
// script/controllers/mine/MineMngCon.ts

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
var UIBase_1 = require("../ui/UIBase");
var DataMineMngCon_1 = require("../../data/scene/DataMineMngCon");
var MinePetSelect_1 = require("./mng/MinePetSelect");
var MinePartnerSelect_1 = require("./mng/MinePartnerSelect");
var MineToolBox_1 = require("./mng/MineToolBox");
var ccclass = cc._decorator.ccclass;
var MineMngCon = /** @class */ (function (_super) {
    __extends(MineMngCon, _super);
    function MineMngCon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pages = [];
        _this.preIndex = 0;
        _this.currentIndex = 0;
        return _this;
    }
    MineMngCon.prototype.onUILoad = function () {
        this.ui = this.node.addComponent(DataMineMngCon_1.default);
        this.page1 = this.ui.node_page_1.addComponent(MinePetSelect_1.default);
        this.page2 = this.ui.node_page_2.addComponent(MinePartnerSelect_1.default);
        this.page3 = this.ui.node_page_3.addComponent(MineToolBox_1.default);
        this.pages.push(this.page1, this.page2, this.page3);
        this.pageSwitch(0);
    };
    MineMngCon.prototype.pageSwitch = function (id) {
        this.preIndex = this.currentIndex;
        this.currentIndex = id;
        for (var i = 0; i < this.pages.length; i++) {
            this.pages[i].node.active = i == this.currentIndex;
        }
        if (this.pages[this.currentIndex].reset) {
            this.pages[this.currentIndex].reset();
        }
    };
    MineMngCon = __decorate([
        ccclass
    ], MineMngCon);
    return MineMngCon;
}(UIBase_1.default));
exports.default = MineMngCon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcbWluZVxcTWluZU1uZ0Nvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBa0M7QUFDbEMsa0VBQTZEO0FBQzdELHFEQUFnRDtBQUNoRCw2REFBd0Q7QUFDeEQsaURBQTRDO0FBRXBDLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBR2xDO0lBQXdDLDhCQUFNO0lBQTlDO1FBQUEscUVBaUNDO1FBL0JHLFdBQUssR0FBVSxFQUFFLENBQUM7UUFRbEIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixrQkFBWSxHQUFXLENBQUMsQ0FBQzs7SUFzQjdCLENBQUM7SUFwQkcsNkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsd0JBQWMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLHVCQUFhLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQywyQkFBaUIsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELCtCQUFVLEdBQVYsVUFBVyxFQUFVO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3REO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDekM7SUFDTCxDQUFDO0lBL0JnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBaUM5QjtJQUFELGlCQUFDO0NBakNELEFBaUNDLENBakN1QyxnQkFBTSxHQWlDN0M7a0JBakNvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJQmFzZSBmcm9tIFwiLi4vdWkvVUlCYXNlXCI7XHJcbmltcG9ydCBEYXRhTWluZU1uZ0NvbiBmcm9tIFwiLi4vLi4vZGF0YS9zY2VuZS9EYXRhTWluZU1uZ0NvblwiO1xyXG5pbXBvcnQgTWluZVBldFNlbGVjdCBmcm9tIFwiLi9tbmcvTWluZVBldFNlbGVjdFwiO1xyXG5pbXBvcnQgTWluZVBhcnRuZXJTZWxlY3QgZnJvbSBcIi4vbW5nL01pbmVQYXJ0bmVyU2VsZWN0XCI7XHJcbmltcG9ydCBNaW5lVG9vbEJveCBmcm9tIFwiLi9tbmcvTWluZVRvb2xCb3hcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmVNbmdDb24gZXh0ZW5kcyBVSUJhc2Uge1xyXG5cclxuICAgIHBhZ2VzOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIHVpOiBEYXRhTWluZU1uZ0NvbjtcclxuXHJcbiAgICBwYWdlMTogTWluZVBldFNlbGVjdDtcclxuICAgIHBhZ2UyOiBNaW5lUGFydG5lclNlbGVjdDtcclxuICAgIHBhZ2UzOiBNaW5lVG9vbEJveDtcclxuXHJcbiAgICBwcmVJbmRleDogbnVtYmVyID0gMDtcclxuICAgIGN1cnJlbnRJbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBvblVJTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChEYXRhTWluZU1uZ0Nvbik7XHJcbiAgICAgICAgdGhpcy5wYWdlMSA9IHRoaXMudWkubm9kZV9wYWdlXzEuYWRkQ29tcG9uZW50KE1pbmVQZXRTZWxlY3QpO1xyXG4gICAgICAgIHRoaXMucGFnZTIgPSB0aGlzLnVpLm5vZGVfcGFnZV8yLmFkZENvbXBvbmVudChNaW5lUGFydG5lclNlbGVjdCk7XHJcbiAgICAgICAgdGhpcy5wYWdlMyA9IHRoaXMudWkubm9kZV9wYWdlXzMuYWRkQ29tcG9uZW50KE1pbmVUb29sQm94KTtcclxuICAgICAgICB0aGlzLnBhZ2VzLnB1c2godGhpcy5wYWdlMSwgdGhpcy5wYWdlMiwgdGhpcy5wYWdlMyk7XHJcbiAgICAgICAgdGhpcy5wYWdlU3dpdGNoKDApO1xyXG4gICAgfVxyXG5cclxuICAgIHBhZ2VTd2l0Y2goaWQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucHJlSW5kZXggPSB0aGlzLmN1cnJlbnRJbmRleDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGlkO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VzW2ldLm5vZGUuYWN0aXZlID0gaSA9PSB0aGlzLmN1cnJlbnRJbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGFnZXNbdGhpcy5jdXJyZW50SW5kZXhdLnJlc2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZXNbdGhpcy5jdXJyZW50SW5kZXhdLnJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ==
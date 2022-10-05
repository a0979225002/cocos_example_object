
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/mine/MineMngNav.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ab80fqLElB9I8oFBRZmzCi', 'MineMngNav');
// script/controllers/mine/MineMngNav.ts

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
var EventConst_1 = require("../../data/const/EventConst");
var UIBase_1 = require("../ui/UIBase");
var ccclass = cc._decorator.ccclass;
var MineMngNav = /** @class */ (function (_super) {
    __extends(MineMngNav, _super);
    function MineMngNav() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.navBtns = [];
        _this.preIndex = 0;
        _this.currentIndex = 0;
        return _this;
    }
    MineMngNav.prototype.onUILoad = function () {
        this.btnsCreate();
    };
    MineMngNav.prototype.onShow = function () {
        this.btnsBindOn();
    };
    MineMngNav.prototype.onHide = function () {
        this.btnBindOff();
    };
    MineMngNav.prototype.btnsCreate = function () {
        for (var i = 0; i < this.node.children.length; i++) {
            var btn = this.node.children[i];
            this.navBtns[i] = new Btn(btn, i);
        }
    };
    MineMngNav.prototype.btnsBindOn = function () {
        this.navBtns.forEach(function (btn) {
            btn.eventBindOn();
        });
    };
    MineMngNav.prototype.btnBindOff = function () {
        this.navBtns.forEach(function (btn) {
            btn.eventBindOff();
        });
    };
    MineMngNav.prototype.btnSwitch = function (id) {
        this.preIndex = this.currentIndex;
        this.currentIndex = id;
        this.navBtns[this.preIndex].updateState(false);
        this.navBtns[this.currentIndex].updateState(true);
    };
    MineMngNav = __decorate([
        ccclass
    ], MineMngNav);
    return MineMngNav;
}(UIBase_1.default));
exports.default = MineMngNav;
var Btn = /** @class */ (function () {
    function Btn(node, id) {
        this.color_black = new cc.Color(0, 0, 0, 255);
        this.color_white = new cc.Color(255, 255, 255, 255);
        this._id = 0;
        this.node = node;
        this._id = id;
        this.node_activeBg = this.node.getChildByName("bg_active");
        this.node_txt = this.node.getChildByName("txt");
    }
    Btn.prototype.click = function () {
        EventMng_1.default.emit(EventConst_1.MainEvent.MINE_MNG_PAGE_SWITCH, this.id);
    };
    Btn.prototype.eventBindOn = function () {
        this.node.on("touchend", this.click, this);
    };
    Btn.prototype.eventBindOff = function () {
        this.node.off("touchend", this.click, this);
    };
    Btn.prototype.updateState = function (state) {
        this.activeBgShow(state);
        this.node_txt.color = state ? this.color_black : this.color_white;
    };
    Btn.prototype.activeBgShow = function (state) {
        this.node_activeBg.active = state;
        if (state) {
            this.node_activeBg.opacity = 0;
            this.node_activeBg.stopAllActions();
            this.node_activeBg.runAction(cc.fadeIn(.15));
        }
    };
    Object.defineProperty(Btn.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    return Btn;
}());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcbWluZVxcTWluZU1uZ05hdi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsMERBQXdEO0FBQ3hELHVDQUFrQztBQUUxQixJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUdsQztJQUF3Qyw4QkFBTTtJQUE5QztRQUFBLHFFQTRDQztRQTFDRyxhQUFPLEdBQVUsRUFBRSxDQUFDO1FBQ3BCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsa0JBQVksR0FBVyxDQUFDLENBQUM7O0lBd0M3QixDQUFDO0lBdENHLDZCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELDJCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELDJCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELCtCQUFVLEdBQVY7UUFDSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQUVELCtCQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7WUFDckIsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RCLENB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QzthQU5ELFVBQU8sS0FBYTtZQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQU1MLFVBQUM7QUFBRCxDQXREQSxBQXNEQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50TW5nIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0V2ZW50TW5nXCI7XHJcbmltcG9ydCB7IE1haW5FdmVudCB9IGZyb20gXCIuLi8uLi9kYXRhL2NvbnN0L0V2ZW50Q29uc3RcIjtcclxuaW1wb3J0IFVJQmFzZSBmcm9tIFwiLi4vdWkvVUlCYXNlXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5lTW5nTmF2IGV4dGVuZHMgVUlCYXNlIHtcclxuXHJcbiAgICBuYXZCdG5zOiBCdG5bXSA9IFtdO1xyXG4gICAgcHJlSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBjdXJyZW50SW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgb25VSUxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5idG5zQ3JlYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYnRuc0JpbmRPbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGlkZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJ0bkJpbmRPZmYoKTtcclxuICAgIH1cclxuXHJcbiAgICBidG5zQ3JlYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSB0aGlzLm5vZGUuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIHRoaXMubmF2QnRuc1tpXSA9IG5ldyBCdG4oYnRuLCBpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnRuc0JpbmRPbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5hdkJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgICAgICAgIGJ0bi5ldmVudEJpbmRPbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJ0bkJpbmRPZmYoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5uYXZCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICAgICAgICBidG4uZXZlbnRCaW5kT2ZmKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnRuU3dpdGNoKGlkOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnByZUluZGV4ID0gdGhpcy5jdXJyZW50SW5kZXg7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBpZDtcclxuICAgICAgICB0aGlzLm5hdkJ0bnNbdGhpcy5wcmVJbmRleF0udXBkYXRlU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubmF2QnRuc1t0aGlzLmN1cnJlbnRJbmRleF0udXBkYXRlU3RhdGUodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBCdG4ge1xyXG5cclxuICAgIG5vZGU6IGNjLk5vZGU7XHJcbiAgICBub2RlX3R4dDogY2MuTm9kZTtcclxuICAgIG5vZGVfYWN0aXZlQmc6IGNjLk5vZGU7XHJcbiAgICBjb2xvcl9ibGFjazogY2MuQ29sb3IgPSBuZXcgY2MuQ29sb3IoMCwgMCwgMCwgMjU1KTtcclxuICAgIGNvbG9yX3doaXRlOiBjYy5Db2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpO1xyXG5cclxuICAgIHByb3RlY3RlZCBfaWQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3Iobm9kZTogY2MuTm9kZSwgaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XHJcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcclxuICAgICAgICB0aGlzLm5vZGVfYWN0aXZlQmcgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ19hY3RpdmVcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlX3R4dCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInR4dFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGljaygpOiB2b2lkIHtcclxuICAgICAgICBFdmVudE1uZy5lbWl0KE1haW5FdmVudC5NSU5FX01OR19QQUdFX1NXSVRDSCwgdGhpcy5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRCaW5kT24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwidG91Y2hlbmRcIiwgdGhpcy5jbGljaywgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRCaW5kT2ZmKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoXCJ0b3VjaGVuZFwiLCB0aGlzLmNsaWNrLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGF0ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlQmdTaG93KHN0YXRlKTtcclxuICAgICAgICB0aGlzLm5vZGVfdHh0LmNvbG9yID0gc3RhdGUgPyB0aGlzLmNvbG9yX2JsYWNrIDogdGhpcy5jb2xvcl93aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmVCZ1Nob3coc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlX2FjdGl2ZUJnLmFjdGl2ZSA9IHN0YXRlO1xyXG5cclxuICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlX2FjdGl2ZUJnLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVfYWN0aXZlQmcuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlX2FjdGl2ZUJnLnJ1bkFjdGlvbihjYy5mYWRlSW4oLjE1KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXQgaWQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2lkID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
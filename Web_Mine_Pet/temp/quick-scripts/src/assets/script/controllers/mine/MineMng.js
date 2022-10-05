"use strict";
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
"use strict";
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
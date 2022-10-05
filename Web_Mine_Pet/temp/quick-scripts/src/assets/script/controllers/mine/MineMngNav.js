"use strict";
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
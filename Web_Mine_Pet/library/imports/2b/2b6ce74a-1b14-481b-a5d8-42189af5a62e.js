"use strict";
cc._RF.push(module, '2b6cedKGxRIG6XYQhia9aYu', 'UIBase');
// script/controllers/ui/UIBase.ts

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
var PREFAB_UI_DIR = 'prefab/';
var ccclass = cc._decorator.ccclass;
var UIBase = /** @class */ (function (_super) {
    __extends(UIBase, _super);
    function UIBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UIBase.prototype, "tag", {
        get: function () {
            return this.mTag;
        },
        set: function (value) {
            this.mTag = value;
        },
        enumerable: false,
        configurable: true
    });
    UIBase.getUrl = function () {
        return PREFAB_UI_DIR + this.prefabUrl;
    };
    UIBase.getName = function () {
        return this.className;
    };
    UIBase.prototype.init = function (params) {
        this.onInit(params);
    };
    UIBase.prototype.onLoad = function () {
        this._notifyEventList = new Map();
        this._registerEventList = new Map();
        this.onUILoad();
    };
    UIBase.prototype.start = function () {
        this.onStart();
    };
    UIBase.prototype.onDestroy = function () {
        this.onUIDestroy();
    };
    UIBase.prototype.onEnable = function () {
        this.onRegisterEvent(this.node, this.touchEvent, this);
        this.onShow();
    };
    UIBase.prototype.onDisable = function () {
        this.unRegisterEvent(this.node, this.touchEvent, this);
        this.onHide();
        var self = this;
        this._notifyEventList.forEach(function (f, key) {
            EventMng_1.default.off(key, f, self);
        }, this);
        this._notifyEventList.clear();
    };
    UIBase.prototype.initEvent = function (eventName, callback) {
        EventMng_1.default.on(eventName, callback, this);
        this._notifyEventList.set(eventName, callback);
    };
    UIBase.prototype.touchEvent = function (event) {
        event.stopPropagation();
    };
    UIBase.prototype.onRegisterEvent = function (node, callback, target) {
        if (target === void 0) { target = null; }
        if (!node) {
            return;
        }
        node.on(cc.Node.EventType.TOUCH_END, callback, target);
        this._registerEventList.set(node.name, { callback: callback, target: target });
    };
    UIBase.prototype.unRegisterEvent = function (node, callback, target) {
        if (target === void 0) { target = null; }
        node.off(cc.Node.EventType.TOUCH_END, callback, target);
    };
    UIBase.prototype.getCanvas = function () {
        var node = cc.find("Canvas");
        return cc.v2(node.x, node.y);
    };
    UIBase.prototype.onInit = function (params) { };
    UIBase.prototype.onUILoad = function () { };
    UIBase.prototype.onUIDestroy = function () { };
    UIBase.prototype.onStart = function () { };
    UIBase.prototype.onShow = function () { };
    UIBase.prototype.onHide = function () { };
    UIBase = __decorate([
        ccclass
    ], UIBase);
    return UIBase;
}(cc.Component));
exports.default = UIBase;

cc._RF.pop();
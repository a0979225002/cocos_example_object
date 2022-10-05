"use strict";
cc._RF.push(module, 'b5d27Ax+B5PZ7cPb5SXl9yK', 'MainLoading');
// script/controllers/scene/MainLoading.ts

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
var GameController_1 = require("../../GameController");
var AssetsMng_1 = require("../../manager/AssetsMng");
var SceneMng_1 = require("../../manager/SceneMng");
var EventConst_1 = require("../../data/const/EventConst");
var UIBase_1 = require("../ui/UIBase");
var UIHelp_1 = require("../ui/UIHelp");
var LangMng_1 = require("../../manager/LangMng");
var ccclass = cc._decorator.ccclass;
var MainLoading = /** @class */ (function (_super) {
    __extends(MainLoading, _super);
    function MainLoading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainLoading.prototype.onUILoad = function () {
        UIHelp_1.default.ShowLoading();
        UIHelp_1.default.ShowDialog(null);
        this.initEvent(EventConst_1.LoadEvent.LOAD_PRELOAD_DONE, this.onAssetLoadDone);
        this.initEvent(EventConst_1.LoadEvent.LOAD_SUCCESS, this.onLoadSuccess);
        this.initEvent(EventConst_1.MainEvent.MESSAGE_SHOW, this.onMessageShow);
        SceneMng_1.default.resize();
    };
    MainLoading.prototype.onStart = function () {
        GameController_1.default.init();
        this.onPreLoad();
    };
    MainLoading.prototype.onPreLoad = function () {
        AssetsMng_1.default.onPreLoad();
    };
    MainLoading.prototype.onAssetLoadDone = function () {
        SceneMng_1.default.preload("mainGame", this.onNextSceneLoad.bind(this));
    };
    MainLoading.prototype.onNextSceneLoad = function () {
        GameController_1.default.net.send("start", null);
    };
    MainLoading.prototype.onLoadSuccess = function () {
        var timer = setTimeout((function () {
            SceneMng_1.default.goGame();
            clearTimeout(timer);
        }), 1000);
    };
    MainLoading.prototype.onMessageShow = function (config) {
        UIHelp_1.default.ShowDialog({
            content: LangMng_1.default.getTxt(config.code),
        });
    };
    MainLoading.prototype.update = function (dt) {
        SceneMng_1.default.resizeUpdate();
    };
    MainLoading = __decorate([
        ccclass
    ], MainLoading);
    return MainLoading;
}(UIBase_1.default));
exports.default = MainLoading;

cc._RF.pop();
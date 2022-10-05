"use strict";
cc._RF.push(module, 'e1b90/rohdEk4SdmmEZANaD', 'Home');
// Scene/Home/Home.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var BackHomeBtn_1 = require("./BackHomeBtn");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LOAD_SCENE_MIN_SEC = 1.2;
var sceneList;
(function (sceneList) {
    sceneList["Water_spread"] = "\u6C34\u6CE2\u6269\u6563\u6548\u679C\uFF08shader\uFF09";
    sceneList["Specular_gloss"] = "\u955C\u9762\u5149\u6CFD\u6548\u679C\uFF08shader\uFF09";
    sceneList["Dissolve_color"] = "\u6EB6\u89E3\u6548\u679C\uFF08shader\uFF09";
    sceneList["Follow_spot"] = "\u8FFD\u5149\u6548\u679C\uFF08shader\uFF09";
    sceneList["Metaball"] = "\u878D\u7403\u6548\u679C\uFF08shader\uFF09";
    sceneList["Circle_avatar"] = "\u5706\u5F62\u5934\u50CF\uFF08shader\uFF09";
    sceneList["Scratch_ticket"] = "\u522E\u522E\u5361\u5B9E\u73B0";
    sceneList["Coin_fly_to_wallet"] = "\u91D1\u5E01\u843D\u888B\u6548\u679C";
    sceneList["Moving_ghost"] = "\u79FB\u52A8\u6B8B\u5F71\u6548\u679C";
    sceneList["Magnifying_mirror"] = "\u653E\u5927\u955C\u6548\u679C";
    sceneList["Typer"] = "\u6253\u5B57\u673A\u6548\u679C";
    sceneList["Bullet_Tracking"] = "\u5B50\u5F39\u8DDF\u8E2A\u6548\u679C";
    sceneList["Infinite_bg_scroll"] = "\u80CC\u666F\u65E0\u9650\u6EDA\u52A8";
    sceneList["Change_clothes"] = "\u6362\u88C5";
    sceneList["Screen_vibrating"] = "\u9707\u5C4F\u6548\u679C+\u52A8\u753B\u6062\u590D\u7B2C\u4E00\u5E27";
    sceneList["Joystick"] = "\u9065\u63A7\u6746";
    sceneList["Filter"] = "\u989C\u8272\u6EE4\u955C";
    sceneList["Mosaic"] = "\u9A6C\u8D5B\u514B/\u50CF\u7D20\u98CE\uFF08shader\uFF09";
    sceneList["Photo_gallery"] = "\u6E10\u53D8\u8FC7\u6E21\u7684\u76F8\u518C\uFF08shader\uFF09";
})(sceneList || (sceneList = {}));
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadingNode = null;
        _this.loadingProgress = null;
        _this.scrollContent = null;
        _this.scrollItemPrefab = null;
        _this.beginLoad = false;
        _this.finishLoadFlag = false;
        _this.loadTime = 0;
        _this.loadSceneName = '';
        return _this;
    }
    Home.prototype.onLoad = function () {
        this.initScrollItem();
    };
    Home.prototype.start = function () {
        this.judgeJump();
    };
    Home.prototype.judgeJump = function () {
        var sceneName = this.getQueryStringByName('sceneName');
        var isSameVisit = window['isSameVisit'];
        if (!sceneName)
            return;
        if (isSameVisit)
            return;
        if (sceneList[sceneName]) {
            window['isSameVisit'] = true;
            this.loadScene(sceneName);
        }
    };
    Home.prototype.getQueryStringByName = function (name) {
        var result = window.location.search.match(new RegExp('[?&]' + name + '=([^&]+)', 'i'));
        return result == null || result.length < 1 ? '' : result[1];
    };
    Home.prototype.initScrollItem = function () {
        var _this = this;
        var _loop_1 = function (key) {
            var scrollItem = cc.instantiate(this_1.scrollItemPrefab);
            scrollItem.getChildByName('label').getComponent(cc.Label).string = sceneList[key];
            scrollItem.on(cc.Node.EventType.TOUCH_END, function () {
                cc.tween(scrollItem)
                    .to(0.1, { scale: 1.05 })
                    .to(0.1, { scale: 1 })
                    .start();
                _this.loadScene(key);
            }, this_1);
            this_1.scrollContent.addChild(scrollItem);
        };
        var this_1 = this;
        for (var key in sceneList) {
            _loop_1(key);
        }
    };
    Home.prototype.loadScene = function (key) {
        var _this = this;
        if (this.beginLoad)
            return;
        this.loadingProgress.progress = 0;
        this.loadingNode.active = true;
        this.beginLoad = true;
        this.loadSceneName = key;
        cc.director.preloadScene(key, function (completedCount, totalCount) {
            // 还是做假进度条吧，缓存之后太快了，一闪而过的体验不好
            // this.loadingProgress.progress = completedCount / totalCount;
        }, function (error, asset) {
            if (!error) {
                _this.finishLoadFlag = true;
            }
            else {
                _this.loadingNode.active = false;
                _this.beginLoad = false;
                _this.loadTime = 0;
            }
        });
    };
    Home.prototype.update = function (dt) {
        if (!this.beginLoad)
            return;
        if (this.loadTime >= LOAD_SCENE_MIN_SEC && this.finishLoadFlag) {
            this.loadingProgress.progress = 1;
            BackHomeBtn_1.default.instance.toggleActive(true);
            cc.director.loadScene(this.loadSceneName);
        }
        else {
            this.loadTime += dt;
            this.loadingProgress.progress = Math.min(this.loadTime / LOAD_SCENE_MIN_SEC, this.finishLoadFlag ? 1 : 0.9);
        }
    };
    var _b, _c, _d, _e;
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Node) === "function" ? _b : Object)
    ], Home.prototype, "loadingNode", void 0);
    __decorate([
        property(cc.ProgressBar),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.ProgressBar) === "function" ? _c : Object)
    ], Home.prototype, "loadingProgress", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_d = typeof cc !== "undefined" && cc.Node) === "function" ? _d : Object)
    ], Home.prototype, "scrollContent", void 0);
    __decorate([
        property(cc.Prefab),
        __metadata("design:type", typeof (_e = typeof cc !== "undefined" && cc.Prefab) === "function" ? _e : Object)
    ], Home.prototype, "scrollItemPrefab", void 0);
    Home = __decorate([
        ccclass
    ], Home);
    return Home;
}(cc.Component));
exports.default = Home;

cc._RF.pop();

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scene/Home/Home.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NlbmVcXEhvbWVcXEhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBQ2xDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLElBQU0sa0JBQWtCLEdBQVcsR0FBRyxDQUFDO0FBQ3ZDLElBQUssU0FvQko7QUFwQkQsV0FBSyxTQUFTO0lBQ1osb0ZBQWlDLENBQUE7SUFDakMsc0ZBQW1DLENBQUE7SUFDbkMsMEVBQWlDLENBQUE7SUFDakMsdUVBQThCLENBQUE7SUFDOUIsb0VBQTJCLENBQUE7SUFDM0IseUVBQWdDLENBQUE7SUFDaEMsOERBQTBCLENBQUE7SUFDMUIsd0VBQStCLENBQUE7SUFDL0Isa0VBQXlCLENBQUE7SUFDekIsaUVBQTZCLENBQUE7SUFDN0IscURBQWlCLENBQUE7SUFDakIscUVBQTRCLENBQUE7SUFDNUIsd0VBQStCLENBQUE7SUFDL0IsNENBQXVCLENBQUE7SUFDdkIscUdBQW1DLENBQUE7SUFDbkMsNENBQWtCLENBQUE7SUFDbEIsZ0RBQWlCLENBQUE7SUFDakIsK0VBQTRCLENBQUE7SUFDNUIsMkZBQW1DLENBQUE7QUFDckMsQ0FBQyxFQXBCSSxTQUFTLEtBQVQsU0FBUyxRQW9CYjtBQUdEO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBa0dDO1FBaEdDLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLHFCQUFlLEdBQW1CLElBQUksQ0FBQztRQUV2QyxtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFpRG5DLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0Isb0JBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixtQkFBYSxHQUFXLEVBQUUsQ0FBQzs7SUFz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Q0FBQyxNQUFNLENBQUM7c0RBQ0YsRUFBRSxvQkFBRixFQUFFLENBQUMsTUFBTTtrREFBUTtJQVJoQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBa0d4QjtJQUFELFdBQUM7Q0FsR0QsQUFrR0MsQ0FsR2lDLEVBQUUsQ0FBQyxTQUFTLEdBa0c3QztrQkFsR29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFja0hvbWVCdG4gZnJvbSAnLi9CYWNrSG9tZUJ0bic7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmNvbnN0IExPQURfU0NFTkVfTUlOX1NFQzogbnVtYmVyID0gMS4yO1xyXG5lbnVtIHNjZW5lTGlzdCB7XHJcbiAgJ1dhdGVyX3NwcmVhZCcgPSAn5rC05rOi5omp5pWj5pWI5p6c77yIc2hhZGVy77yJJyxcclxuICAnU3BlY3VsYXJfZ2xvc3MnID0gJ+mVnOmdouWFieazveaViOaenO+8iHNoYWRlcu+8iScsXHJcbiAgJ0Rpc3NvbHZlX2NvbG9yJyA9ICfmurbop6PmlYjmnpzvvIhzaGFkZXLvvIknLFxyXG4gICdGb2xsb3dfc3BvdCcgPSAn6L+95YWJ5pWI5p6c77yIc2hhZGVy77yJJyxcclxuICAnTWV0YWJhbGwnID0gJ+iejeeQg+aViOaenO+8iHNoYWRlcu+8iScsXHJcbiAgJ0NpcmNsZV9hdmF0YXInID0gJ+WchuW9ouWktOWDj++8iHNoYWRlcu+8iScsXHJcbiAgJ1NjcmF0Y2hfdGlja2V0JyA9ICfliK7liK7ljaHlrp7njrAnLFxyXG4gICdDb2luX2ZseV90b193YWxsZXQnID0gJ+mHkeW4geiQveiii+aViOaenCcsXHJcbiAgJ01vdmluZ19naG9zdCcgPSAn56e75Yqo5q6L5b2x5pWI5p6cJyxcclxuICAnTWFnbmlmeWluZ19taXJyb3InID0gJ+aUvuWkp+mVnOaViOaenCcsXHJcbiAgJ1R5cGVyJyA9ICfmiZPlrZfmnLrmlYjmnpwnLFxyXG4gICdCdWxsZXRfVHJhY2tpbmcnID0gJ+WtkOW8uei3n+i4quaViOaenCcsXHJcbiAgJ0luZmluaXRlX2JnX3Njcm9sbCcgPSAn6IOM5pmv5peg6ZmQ5rua5YqoJyxcclxuICAnQ2hhbmdlX2Nsb3RoZXMnID0gJ+aNouijhScsXHJcbiAgJ1NjcmVlbl92aWJyYXRpbmcnID0gJ+mch+Wxj+aViOaenCvliqjnlLvmgaLlpI3nrKzkuIDluKcnLFxyXG4gICdKb3lzdGljaycgPSAn6YGl5o6n5p2GJyxcclxuICAnRmlsdGVyJyA9ICfpopzoibLmu6TplZwnLFxyXG4gICdNb3NhaWMnID0gJ+mprOi1m+WFiy/lg4/ntKDpo47vvIhzaGFkZXLvvIknLFxyXG4gICdQaG90b19nYWxsZXJ5JyA9ICfmuJDlj5jov4fmuKHnmoTnm7jlhozvvIhzaGFkZXLvvIknXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGxvYWRpbmdOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgbG9hZGluZ1Byb2dyZXNzOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgc2Nyb2xsQ29udGVudDogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICBzY3JvbGxJdGVtUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLmluaXRTY3JvbGxJdGVtKCk7XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIHRoaXMuanVkZ2VKdW1wKCk7XHJcbiAgfVxyXG5cclxuICBqdWRnZUp1bXAoKSB7XHJcbiAgICBjb25zdCBzY2VuZU5hbWUgPSB0aGlzLmdldFF1ZXJ5U3RyaW5nQnlOYW1lKCdzY2VuZU5hbWUnKTtcclxuICAgIGNvbnN0IGlzU2FtZVZpc2l0ID0gd2luZG93Wydpc1NhbWVWaXNpdCddO1xyXG5cclxuICAgIGlmICghc2NlbmVOYW1lKSByZXR1cm47XHJcbiAgICBpZiAoaXNTYW1lVmlzaXQpIHJldHVybjtcclxuXHJcbiAgICBpZiAoc2NlbmVMaXN0W3NjZW5lTmFtZV0pIHtcclxuICAgICAgd2luZG93Wydpc1NhbWVWaXNpdCddID0gdHJ1ZTtcclxuICAgICAgdGhpcy5sb2FkU2NlbmUoc2NlbmVOYW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFF1ZXJ5U3RyaW5nQnlOYW1lKG5hbWUpIHtcclxuICAgIGxldCByZXN1bHQgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLm1hdGNoKG5ldyBSZWdFeHAoJ1s/Jl0nICsgbmFtZSArICc9KFteJl0rKScsICdpJykpO1xyXG4gICAgcmV0dXJuIHJlc3VsdCA9PSBudWxsIHx8IHJlc3VsdC5sZW5ndGggPCAxID8gJycgOiByZXN1bHRbMV07XHJcbiAgfVxyXG5cclxuICBpbml0U2Nyb2xsSXRlbSgpIHtcclxuICAgIGZvciAobGV0IGtleSBpbiBzY2VuZUxpc3QpIHtcclxuICAgICAgbGV0IHNjcm9sbEl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNjcm9sbEl0ZW1QcmVmYWIpO1xyXG5cclxuICAgICAgc2Nyb2xsSXRlbS5nZXRDaGlsZEJ5TmFtZSgnbGFiZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHNjZW5lTGlzdFtrZXldO1xyXG4gICAgICBzY3JvbGxJdGVtLm9uKFxyXG4gICAgICAgIGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICBjYy50d2VlbihzY3JvbGxJdGVtKVxyXG4gICAgICAgICAgICAudG8oMC4xLCB7IHNjYWxlOiAxLjA1IH0pXHJcbiAgICAgICAgICAgIC50bygwLjEsIHsgc2NhbGU6IDEgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICB0aGlzLmxvYWRTY2VuZShrZXkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGhpc1xyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5zY3JvbGxDb250ZW50LmFkZENoaWxkKHNjcm9sbEl0ZW0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYmVnaW5Mb2FkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgZmluaXNoTG9hZEZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBsb2FkVGltZTogbnVtYmVyID0gMDtcclxuICBsb2FkU2NlbmVOYW1lOiBzdHJpbmcgPSAnJztcclxuICBsb2FkU2NlbmUoa2V5KSB7XHJcbiAgICBpZiAodGhpcy5iZWdpbkxvYWQpIHJldHVybjtcclxuICAgIHRoaXMubG9hZGluZ1Byb2dyZXNzLnByb2dyZXNzID0gMDtcclxuICAgIHRoaXMubG9hZGluZ05vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuYmVnaW5Mb2FkID0gdHJ1ZTtcclxuICAgIHRoaXMubG9hZFNjZW5lTmFtZSA9IGtleTtcclxuXHJcbiAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXHJcbiAgICAgIGtleSxcclxuICAgICAgKGNvbXBsZXRlZENvdW50LCB0b3RhbENvdW50KSA9PiB7XHJcbiAgICAgICAgLy8g6L+Y5piv5YGa5YGH6L+b5bqm5p2h5ZCn77yM57yT5a2Y5LmL5ZCO5aSq5b+r5LqG77yM5LiA6Zeq6ICM6L+H55qE5L2T6aqM5LiN5aW9XHJcbiAgICAgICAgLy8gdGhpcy5sb2FkaW5nUHJvZ3Jlc3MucHJvZ3Jlc3MgPSBjb21wbGV0ZWRDb3VudCAvIHRvdGFsQ291bnQ7XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnJvciwgYXNzZXQpID0+IHtcclxuICAgICAgICBpZiAoIWVycm9yKSB7XHJcbiAgICAgICAgICB0aGlzLmZpbmlzaExvYWRGbGFnID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5sb2FkaW5nTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuYmVnaW5Mb2FkID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmxvYWRUaW1lID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoZHQpIHtcclxuICAgIGlmICghdGhpcy5iZWdpbkxvYWQpIHJldHVybjtcclxuXHJcbiAgICBpZiAodGhpcy5sb2FkVGltZSA+PSBMT0FEX1NDRU5FX01JTl9TRUMgJiYgdGhpcy5maW5pc2hMb2FkRmxhZykge1xyXG4gICAgICB0aGlzLmxvYWRpbmdQcm9ncmVzcy5wcm9ncmVzcyA9IDE7XHJcbiAgICAgIEJhY2tIb21lQnRuLmluc3RhbmNlLnRvZ2dsZUFjdGl2ZSh0cnVlKTtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHRoaXMubG9hZFNjZW5lTmFtZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxvYWRUaW1lICs9IGR0O1xyXG4gICAgICB0aGlzLmxvYWRpbmdQcm9ncmVzcy5wcm9ncmVzcyA9IE1hdGgubWluKHRoaXMubG9hZFRpbWUgLyBMT0FEX1NDRU5FX01JTl9TRUMsIHRoaXMuZmluaXNoTG9hZEZsYWcgPyAxIDogMC45KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
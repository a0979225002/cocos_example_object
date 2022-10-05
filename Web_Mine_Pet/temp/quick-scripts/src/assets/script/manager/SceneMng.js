"use strict";
cc._RF.push(module, '1ffbcqd11JElod7SHTW99A/', 'SceneMng');
// script/manager/SceneMng.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UIMessage_1 = require("../controllers/ui/UIMessage");
var UIHelp_1 = require("../controllers/ui/UIHelp");
var UILoading_1 = require("../controllers/ui/UILoading");
var SceneName;
(function (SceneName) {
    SceneName[SceneName["Login"] = 0] = "Login";
    SceneName[SceneName["Game"] = 1] = "Game";
})(SceneName || (SceneName = {}));
var SceneMng = /** @class */ (function () {
    function SceneMng() {
        this._nowScene = SceneName.Login;
        this._resizeActive = false;
        this._resizeDt = 0;
        this.init();
    }
    SceneMng.prototype.init = function () {
        this.resizeBindOn();
    };
    SceneMng.prototype.preload = function (sceneName, onCompleted) {
        cc.director.preloadScene(sceneName, onCompleted);
    };
    SceneMng.prototype.load = function (sceneName) {
        var _this = this;
        cc.director.loadScene(sceneName, function () {
            _this.resize();
        });
    };
    SceneMng.prototype.goGame = function () {
        this.load("mainGame");
        this._nowScene = SceneName.Game;
    };
    SceneMng.prototype.getCurrentSceneName = function () {
        return this._nowScene;
    };
    SceneMng.prototype.resize = function () {
        this.setCanvasSize();
        UIHelp_1.default.Resize(UILoading_1.default);
        UIHelp_1.default.Resize(UIMessage_1.default);
    };
    SceneMng.prototype.setCanvasSize = function () {
        if (!cc) {
            return;
        }
        var canvasSize = this.getWinSize();
        if (canvasSize.height / canvasSize.width <= 16 / 9) {
            cc.view.setDesignResolutionSize(750, 1333, new cc.ResolutionPolicy(cc.ContainerStrategy.PROPORTION_TO_FRAME, cc.ContentStrategy.NO_BORDER));
        }
        else {
            if (canvasSize.height / canvasSize.width > 16 / 9 && canvasSize.height / canvasSize.width <= 19.5 / 9) {
                cc.view.setDesignResolutionSize(750, 1624, new cc.ResolutionPolicy(cc.ContainerStrategy.EQUAL_TO_FRAME, cc.ContentStrategy.FIXED_WIDTH));
            }
            else {
                cc.view.setDesignResolutionSize(750, 1624, new cc.ResolutionPolicy(cc.ContainerStrategy.PROPORTION_TO_FRAME, cc.ContentStrategy.NO_BORDER));
            }
        }
    };
    SceneMng.prototype.resizeBindOn = function () {
        var _this = this;
        window.addEventListener("resize", this.debounce(function () {
            _this.resize();
            _this._resizeActive = true;
        }));
    };
    SceneMng.prototype.resizeUpdate = function () {
        if (this._resizeActive) {
            this._resizeDt++;
            if (this._resizeDt <= 3 || this._resizeDt >= 96) {
                this.resize();
            }
            if (this._resizeDt > 100) {
                this._resizeActive = false;
                this._resizeDt = 0;
            }
        }
    };
    SceneMng.prototype.debounce = function (func) {
        var timer;
        return function (event) {
            if (timer)
                clearTimeout(timer);
            timer = setTimeout(func, 300, event);
        };
    };
    SceneMng.prototype.getWinSize = function () {
        return { width: window.innerWidth, height: window.innerHeight };
    };
    Object.defineProperty(SceneMng.prototype, "nowScene", {
        get: function () {
            return this._nowScene;
        },
        set: function (value) {
            this._nowScene = value;
        },
        enumerable: false,
        configurable: true
    });
    return SceneMng;
}());
exports.default = new SceneMng();

cc._RF.pop();
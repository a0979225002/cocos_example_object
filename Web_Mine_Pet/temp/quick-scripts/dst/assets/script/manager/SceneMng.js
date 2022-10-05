
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/SceneMng.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxTY2VuZU1uZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUFvRDtBQUNwRCxtREFBOEM7QUFDOUMseURBQW9EO0FBSXBELElBQUssU0FHSjtBQUhELFdBQUssU0FBUztJQUNWLDJDQUFLLENBQUE7SUFDTCx5Q0FBSSxDQUFBO0FBQ1IsQ0FBQyxFQUhJLFNBQVMsS0FBVCxTQUFTLFFBR2I7QUFFRDtJQU1JO1FBSlEsY0FBUyxHQUFjLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDdkMsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUcxQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUdELHVCQUFJLEdBQUo7UUFFSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFeEIsQ0FBQztJQUVELDBCQUFPLEdBQVAsVUFBUSxTQUFpQixFQUFFLFdBQStCO1FBQ3RELEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBR0QsdUJBQUksR0FBSixVQUFLLFNBQWlCO1FBQXRCLGlCQUlDO1FBSEcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQzdCLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDcEMsQ0FBQztJQUVELHNDQUFtQixHQUFuQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxhQUFh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QzFCLENBQUM7YUFFRCxVQUFhLEtBQWdCO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7OztPQUpBO0lBTUwsZUFBQztBQUFELENBL0dBLEFBK0dDLElBQUE7QUFFRCxrQkFBZSxJQUFJLFFBQVEsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJTWVzc2FnZSBmcm9tIFwiLi4vY29udHJvbGxlcnMvdWkvVUlNZXNzYWdlXCI7XHJcbmltcG9ydCBVSUhlbHAgZnJvbSBcIi4uL2NvbnRyb2xsZXJzL3VpL1VJSGVscFwiO1xyXG5pbXBvcnQgVUlMb2FkaW5nIGZyb20gXCIuLi9jb250cm9sbGVycy91aS9VSUxvYWRpbmdcIjtcclxuXHJcbmV4cG9ydCB0eXBlIENvbXBsZXRlZENhbGxiYWNrID0gKGNvbXBsZXRlZENvdW50OiBudW1iZXIsIHRvdGFsQ291bnQ6IG51bWJlciwgaXRlbTogYW55KSA9PiB2b2lkO1xyXG5cclxuZW51bSBTY2VuZU5hbWUge1xyXG4gICAgTG9naW4sXHJcbiAgICBHYW1lXHJcbn1cclxuXHJcbmNsYXNzIFNjZW5lTW5nIHtcclxuXHJcbiAgICBwcml2YXRlIF9ub3dTY2VuZTogU2NlbmVOYW1lID0gU2NlbmVOYW1lLkxvZ2luO1xyXG4gICAgcHJpdmF0ZSBfcmVzaXplQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9yZXNpemVEdDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5yZXNpemVCaW5kT24oKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJlbG9hZChzY2VuZU5hbWU6IHN0cmluZywgb25Db21wbGV0ZWQ/OiBDb21wbGV0ZWRDYWxsYmFjayk6IHZvaWQge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShzY2VuZU5hbWUsIG9uQ29tcGxldGVkKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbG9hZChzY2VuZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzY2VuZU5hbWUsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZXNpemUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnb0dhbWUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2FkKFwibWFpbkdhbWVcIik7XHJcbiAgICAgICAgdGhpcy5fbm93U2NlbmUgPSBTY2VuZU5hbWUuR2FtZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW50U2NlbmVOYW1lKCk6IFNjZW5lTmFtZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25vd1NjZW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldENhbnZhc1NpemUoKTtcclxuICAgICAgICBVSUhlbHAuUmVzaXplKFVJTG9hZGluZyk7XHJcbiAgICAgICAgVUlIZWxwLlJlc2l6ZShVSU1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgc2V0Q2FudmFzU2l6ZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKCFjYykgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgbGV0IGNhbnZhc1NpemUgPSB0aGlzLmdldFdpblNpemUoKTtcclxuXHJcbiAgICAgICAgaWYgKGNhbnZhc1NpemUuaGVpZ2h0IC8gY2FudmFzU2l6ZS53aWR0aCA8PSAxNiAvIDkpIHtcclxuXHJcbiAgICAgICAgICAgIGNjLnZpZXcuc2V0RGVzaWduUmVzb2x1dGlvblNpemUoNzUwLCAxMzMzLCBuZXcgY2MuUmVzb2x1dGlvblBvbGljeShjYy5Db250YWluZXJTdHJhdGVneS5QUk9QT1JUSU9OX1RPX0ZSQU1FLCBjYy5Db250ZW50U3RyYXRlZ3kuTk9fQk9SREVSKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGNhbnZhc1NpemUuaGVpZ2h0IC8gY2FudmFzU2l6ZS53aWR0aCA+IDE2IC8gOSAmJiBjYW52YXNTaXplLmhlaWdodCAvIGNhbnZhc1NpemUud2lkdGggPD0gMTkuNSAvIDkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjYy52aWV3LnNldERlc2lnblJlc29sdXRpb25TaXplKDc1MCwgMTYyNCwgbmV3IGNjLlJlc29sdXRpb25Qb2xpY3koY2MuQ29udGFpbmVyU3RyYXRlZ3kuRVFVQUxfVE9fRlJBTUUsIGNjLkNvbnRlbnRTdHJhdGVneS5GSVhFRF9XSURUSCkpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2Mudmlldy5zZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSg3NTAsIDE2MjQsIG5ldyBjYy5SZXNvbHV0aW9uUG9saWN5KGNjLkNvbnRhaW5lclN0cmF0ZWd5LlBST1BPUlRJT05fVE9fRlJBTUUsIGNjLkNvbnRlbnRTdHJhdGVneS5OT19CT1JERVIpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVzaXplQmluZE9uKCk6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuZGVib3VuY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNpemVBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVzaXplVXBkYXRlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fcmVzaXplQWN0aXZlKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9yZXNpemVEdCsrO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX3Jlc2l6ZUR0IDw9IDMgfHwgdGhpcy5fcmVzaXplRHQgPj0gOTYpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZXNpemVEdCA+IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzaXplQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNpemVEdCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBkZWJvdW5jZShmdW5jOiBGdW5jdGlvbikge1xyXG4gICAgICAgIGxldCB0aW1lcjtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICh0aW1lcikgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmMsIDMwMCwgZXZlbnQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2luU2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4ge3dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHR9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBub3dTY2VuZSgpOiBTY2VuZU5hbWUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ub3dTY2VuZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbm93U2NlbmUodmFsdWU6IFNjZW5lTmFtZSkge1xyXG4gICAgICAgIHRoaXMuX25vd1NjZW5lID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgU2NlbmVNbmcoKTsiXX0=
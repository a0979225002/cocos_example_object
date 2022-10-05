
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/ui/UIMusic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8166cTvy+RJFIeDtGEoIKtC', 'UIMusic');
// script/controllers/ui/UIMusic.ts

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
var UIBase_1 = require("./UIBase");
var DataUIMusic_1 = require("../../data/scene/DataUIMusic");
var LangMng_1 = require("../../manager/LangMng");
var MusicMng_1 = require("../../manager/MusicMng");
var BtnType;
(function (BtnType) {
    BtnType[BtnType["Music"] = 0] = "Music";
    BtnType[BtnType["Effect"] = 1] = "Effect";
})(BtnType || (BtnType = {}));
var ccclass = cc._decorator.ccclass;
var UIMusic = /** @class */ (function (_super) {
    __extends(UIMusic, _super);
    function UIMusic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui = null;
        _this._isLangSet = false;
        _this._closeX = -33;
        _this._openX = 33;
        _this._closeColor = new cc.Color(190, 190, 190, 255);
        _this._openColor = new cc.Color(0, 133, 255, 255);
        return _this;
    }
    UIMusic.prototype.onInit = function () {
        cc.game.addPersistRootNode(this.node);
        this.resize();
    };
    UIMusic.prototype.onUILoad = function () {
        this.ui = this.node.addComponent(DataUIMusic_1.default);
        this.updateBtnDisplay(BtnType.Music);
        this.updateBtnDisplay(BtnType.Effect);
        this.hide(false);
    };
    UIMusic.prototype.onShow = function () {
        this.setLang();
        this.onRegisterEvent(this.ui.btn_close, this.onBtnCloseClick, this);
        this.onRegisterEvent(this.ui.btn_music, this.onBtnMusicClick, this);
        this.onRegisterEvent(this.ui.btn_effect, this.onBtnEffectClick, this);
    };
    UIMusic.prototype.onHide = function () {
        this.unRegisterEvent(this.ui.btn_music, this.onBtnCloseClick, this);
        this.unRegisterEvent(this.ui.btn_close, this.onBtnMusicClick, this);
        this.unRegisterEvent(this.ui.btn_effect, this.onBtnEffectClick, this);
    };
    UIMusic.prototype.onBtnCloseClick = function () {
        this.hide();
    };
    UIMusic.prototype.onBtnMusicClick = function () {
        MusicMng_1.default.switchMusic();
        this.updateBtnDisplay(BtnType.Music);
    };
    UIMusic.prototype.onBtnEffectClick = function () {
        MusicMng_1.default.switchEffect();
        this.updateBtnDisplay(BtnType.Effect);
    };
    UIMusic.prototype.updateBtnDisplay = function (type) {
        var state = type == 0 ? MusicMng_1.default.getMusicState() : MusicMng_1.default.getEffectState();
        var circleNode = type == 0 ? this.ui.node_musicCircle : this.ui.node_effectCircle;
        var bgNode = type == 0 ? this.ui.node_musicBg : this.ui.node_effectBg;
        var targetPosX = state ? this._openX : this._closeX;
        var targetColor = state ? this._openColor : this._closeColor;
        circleNode.stopAllActions();
        circleNode.runAction(cc.moveTo(.2, targetPosX, 0).easing(cc.easeSineOut()));
        bgNode.stopAllActions();
        bgNode.runAction(cc.tintTo(.2, targetColor.getR(), targetColor.getG(), targetColor.getB()));
    };
    UIMusic.prototype.show = function () {
        if (this.node.active) {
            return;
        }
        this.node.active = true;
        this.fadeIn();
    };
    UIMusic.prototype.hide = function (isAni) {
        if (isAni === void 0) { isAni = true; }
        if (!this.node.active) {
            return;
        }
        if (isAni) {
            this.fadeOut();
            return;
        }
        this.node.active = false;
    };
    UIMusic.prototype.fadeIn = function () {
        this.ui.node_main.setPosition(0, 2000);
        this.ui.node_main.stopAllActions();
        this.ui.node_main.runAction(cc.sequence(cc.moveTo(.3, 0, 0).easing(cc.easeQuarticActionInOut()), cc.callFunc(function () {
        })));
    };
    UIMusic.prototype.fadeOut = function () {
        var _this = this;
        this.ui.node_main.stopAllActions();
        this.ui.node_main.runAction(cc.sequence(cc.moveTo(.2, 0, 2000).easing(cc.easeSineOut()), cc.callFunc(function () {
            _this.node.active = false;
        })));
    };
    UIMusic.prototype.setLang = function () {
        if (this._isLangSet) {
            return;
        }
        this.ui.label_music.string = LangMng_1.default.getTxt("MB_008");
        this.ui.label_effect.string = LangMng_1.default.getTxt("MB_009");
        this.ui.label_close.string = LangMng_1.default.getTxt("P_1003");
        this._isLangSet = true;
    };
    UIMusic.prototype.resize = function () {
        var pos = this.getCanvas();
        this.node.setPosition(pos.x, pos.y);
    };
    UIMusic.prefabUrl = "music_panel";
    UIMusic.className = "UIMusic";
    UIMusic = __decorate([
        ccclass
    ], UIMusic);
    return UIMusic;
}(UIBase_1.default));
exports.default = UIMusic;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcdWlcXFVJTXVzaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBQzlCLDREQUF1RDtBQUN2RCxpREFBNEM7QUFDNUMsbURBQThDO0FBRTlDLElBQUssT0FHSjtBQUhELFdBQUssT0FBTztJQUNSLHVDQUFLLENBQUE7SUFDTCx5Q0FBTSxDQUFBO0FBQ1YsQ0FBQyxFQUhJLE9BQU8sS0FBUCxPQUFPLFFBR1g7QUFFTSxJQUFBLE9BQU8sR0FBSSxFQUFFLENBQUMsVUFBVSxRQUFqQixDQUFrQjtBQUdoQztJQUFxQywyQkFBTTtJQUEzQztRQUFBLHFFQWtKQztRQWhKRyxRQUFFLEdBQWdCLElBQUksQ0FBQztRQUtmLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGFBQU8sR0FBVyxDQUFDLEVBQUUsQ0FBQztRQUN0QixZQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLGlCQUFXLEdBQWEsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELGdCQUFVLEdBQWEsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDOztJQXVJbEUsQ0FBQztJQXJJRyx3QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCwwQkFBUSxHQUFSO1FBRUksSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFDLENBQUM7UUFFOUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8s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U0FBUyxDQUFDO0lBTHRCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FrSjNCO0lBQUQsY0FBQztDQWxKRCxBQWtKQyxDQWxKb0MsZ0JBQU0sR0FrSjFDO2tCQWxKb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSUJhc2UgZnJvbSBcIi4vVUlCYXNlXCI7XHJcbmltcG9ydCBEYXRhVUlNdXNpYyBmcm9tIFwiLi4vLi4vZGF0YS9zY2VuZS9EYXRhVUlNdXNpY1wiO1xyXG5pbXBvcnQgTGFuZ01uZyBmcm9tIFwiLi4vLi4vbWFuYWdlci9MYW5nTW5nXCI7XHJcbmltcG9ydCBNdXNpY01uZyBmcm9tIFwiLi4vLi4vbWFuYWdlci9NdXNpY01uZ1wiO1xyXG5cclxuZW51bSBCdG5UeXBlIHtcclxuICAgIE11c2ljLFxyXG4gICAgRWZmZWN0LFxyXG59XHJcblxyXG5jb25zdCB7Y2NjbGFzc30gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlNdXNpYyBleHRlbmRzIFVJQmFzZSB7XHJcblxyXG4gICAgdWk6IERhdGFVSU11c2ljID0gbnVsbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIHByZWZhYlVybCA9IFwibXVzaWNfcGFuZWxcIjtcclxuICAgIHByb3RlY3RlZCBzdGF0aWMgY2xhc3NOYW1lID0gXCJVSU11c2ljXCI7XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNMYW5nU2V0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9jbG9zZVg6IG51bWJlciA9IC0zMztcclxuICAgIHByaXZhdGUgX29wZW5YOiBudW1iZXIgPSAzMztcclxuICAgIHByaXZhdGUgX2Nsb3NlQ29sb3I6IGNjLkNvbG9yID0gbmV3IGNjLkNvbG9yKDE5MCwgMTkwLCAxOTAsIDI1NSk7XHJcbiAgICBwcml2YXRlIF9vcGVuQ29sb3I6IGNjLkNvbG9yID0gbmV3IGNjLkNvbG9yKDAsIDEzMywgMjU1LCAyNTUpO1xyXG5cclxuICAgIG9uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMucmVzaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25VSUxvYWQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMudWkgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KERhdGFVSU11c2ljKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVCdG5EaXNwbGF5KEJ0blR5cGUuTXVzaWMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQnRuRGlzcGxheShCdG5UeXBlLkVmZmVjdCk7XHJcblxyXG4gICAgICAgIHRoaXMuaGlkZShmYWxzZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uU2hvdygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRMYW5nKCk7XHJcblxyXG4gICAgICAgIHRoaXMub25SZWdpc3RlckV2ZW50KHRoaXMudWkuYnRuX2Nsb3NlLCB0aGlzLm9uQnRuQ2xvc2VDbGljaywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblJlZ2lzdGVyRXZlbnQodGhpcy51aS5idG5fbXVzaWMsIHRoaXMub25CdG5NdXNpY0NsaWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm9uUmVnaXN0ZXJFdmVudCh0aGlzLnVpLmJ0bl9lZmZlY3QsIHRoaXMub25CdG5FZmZlY3RDbGljaywgdGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uSGlkZSgpOiB2b2lkIHtcclxuXHJcblxyXG4gICAgICAgIHRoaXMudW5SZWdpc3RlckV2ZW50KHRoaXMudWkuYnRuX211c2ljLCB0aGlzLm9uQnRuQ2xvc2VDbGljaywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51blJlZ2lzdGVyRXZlbnQodGhpcy51aS5idG5fY2xvc2UsIHRoaXMub25CdG5NdXNpY0NsaWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVuUmVnaXN0ZXJFdmVudCh0aGlzLnVpLmJ0bl9lZmZlY3QsIHRoaXMub25CdG5FZmZlY3RDbGljaywgdGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuQ2xvc2VDbGljaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bk11c2ljQ2xpY2soKTogdm9pZCB7XHJcbiAgICAgICAgTXVzaWNNbmcuc3dpdGNoTXVzaWMoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJ0bkRpc3BsYXkoQnRuVHlwZS5NdXNpYyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5FZmZlY3RDbGljaygpOiB2b2lkIHtcclxuICAgICAgICBNdXNpY01uZy5zd2l0Y2hFZmZlY3QoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJ0bkRpc3BsYXkoQnRuVHlwZS5FZmZlY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUJ0bkRpc3BsYXkodHlwZTogQnRuVHlwZSk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgc3RhdGUgPSB0eXBlID09IDAgPyBNdXNpY01uZy5nZXRNdXNpY1N0YXRlKCkgOiBNdXNpY01uZy5nZXRFZmZlY3RTdGF0ZSgpO1xyXG4gICAgICAgIGxldCBjaXJjbGVOb2RlID0gdHlwZSA9PSAwID8gdGhpcy51aS5ub2RlX211c2ljQ2lyY2xlIDogdGhpcy51aS5ub2RlX2VmZmVjdENpcmNsZTtcclxuICAgICAgICBsZXQgYmdOb2RlID0gdHlwZSA9PSAwID8gdGhpcy51aS5ub2RlX211c2ljQmcgOiB0aGlzLnVpLm5vZGVfZWZmZWN0Qmc7XHJcbiAgICAgICAgbGV0IHRhcmdldFBvc1ggPSBzdGF0ZSA/IHRoaXMuX29wZW5YIDogdGhpcy5fY2xvc2VYO1xyXG4gICAgICAgIGxldCB0YXJnZXRDb2xvciA9IHN0YXRlID8gdGhpcy5fb3BlbkNvbG9yIDogdGhpcy5fY2xvc2VDb2xvcjtcclxuXHJcbiAgICAgICAgY2lyY2xlTm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIGNpcmNsZU5vZGUucnVuQWN0aW9uKFxyXG4gICAgICAgICAgICBjYy5tb3ZlVG8oLjIsIHRhcmdldFBvc1gsIDApLmVhc2luZyhjYy5lYXNlU2luZU91dCgpKSxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBiZ05vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICBiZ05vZGUucnVuQWN0aW9uKFxyXG4gICAgICAgICAgICBjYy50aW50VG8oLjIsIHRhcmdldENvbG9yLmdldFIoKSwgdGFyZ2V0Q29sb3IuZ2V0RygpLCB0YXJnZXRDb2xvci5nZXRCKCkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ub2RlLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZhZGVJbigpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBoaWRlKGlzQW5pOiBib29sZWFuID0gdHJ1ZSkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzQW5pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFkZU91dCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZhZGVJbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpLm5vZGVfbWFpbi5zZXRQb3NpdGlvbigwLCAyMDAwKTtcclxuICAgICAgICB0aGlzLnVpLm5vZGVfbWFpbi5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMudWkubm9kZV9tYWluLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgY2MubW92ZVRvKC4zLCAwLCAwKS5lYXNpbmcoY2MuZWFzZVF1YXJ0aWNBY3Rpb25Jbk91dCgpKSxcclxuICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApKTtcclxuICAgIH1cclxuXHJcbiAgICBmYWRlT3V0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudWkubm9kZV9tYWluLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy51aS5ub2RlX21haW4ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbyguMiwgMCwgMjAwMCkuZWFzaW5nKGNjLmVhc2VTaW5lT3V0KCkpLFxyXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGFuZygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2lzTGFuZ1NldCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVpLmxhYmVsX211c2ljLnN0cmluZyA9IExhbmdNbmcuZ2V0VHh0KFwiTUJfMDA4XCIpO1xyXG4gICAgICAgIHRoaXMudWkubGFiZWxfZWZmZWN0LnN0cmluZyA9IExhbmdNbmcuZ2V0VHh0KFwiTUJfMDA5XCIpO1xyXG4gICAgICAgIHRoaXMudWkubGFiZWxfY2xvc2Uuc3RyaW5nID0gTGFuZ01uZy5nZXRUeHQoXCJQXzEwMDNcIik7XHJcblxyXG4gICAgICAgIHRoaXMuX2lzTGFuZ1NldCA9IHRydWU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBwb3MgPSB0aGlzLmdldENhbnZhcygpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihwb3MueCwgcG9zLnkpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
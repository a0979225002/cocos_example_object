
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/ui/UIMessage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2d4de+mDeJJN7KetexHq3uT', 'UIMessage');
// script/controllers/ui/UIMessage.ts

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
var DataUIMessage_1 = require("../../data/scene/DataUIMessage");
var LangMng_1 = require("../../manager/LangMng");
var ccclass = cc._decorator.ccclass;
var PopType;
(function (PopType) {
    PopType[PopType["All"] = 0] = "All";
    PopType[PopType["Confirm"] = 1] = "Confirm";
    PopType[PopType["None"] = 2] = "None";
})(PopType || (PopType = {}));
var UIMessage = /** @class */ (function (_super) {
    __extends(UIMessage, _super);
    function UIMessage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui = null;
        _this._isLangSet = false;
        _this._type = PopType.None;
        _this._canCover = true;
        _this._autoClose = false;
        _this._timer = null;
        _this._timerTime = 3000;
        return _this;
    }
    UIMessage.prototype.onInit = function (params) {
        cc.game.addPersistRootNode(this.node);
    };
    UIMessage.prototype.onUILoad = function () {
        this.ui = this.node.addComponent(DataUIMessage_1.default);
        this.resize();
        this.hide(false);
    };
    UIMessage.prototype.onShow = function () {
        this.onRegisterEvent(this.ui.btn_confirm, this.onConfirmClick, this);
        this.onRegisterEvent(this.ui.btn_cancel, this.onCancelClick, this);
        this.onRegisterEvent(this.ui.node_backBg, this.onBackBgClick, this);
        this.setLang();
    };
    UIMessage.prototype.onHide = function () {
        this.unRegisterEvent(this.ui.btn_cancel, this.onConfirmClick, this);
        this.unRegisterEvent(this.ui.btn_cancel, this.onCancelClick, this);
        this.unRegisterEvent(this.ui.node_backBg, this.onBackBgClick, this);
        this._canCover = true;
    };
    UIMessage.prototype.onConfirmClick = function () {
        if (this._confirmCb) {
            this._confirmCb();
        }
        this.hide();
    };
    UIMessage.prototype.onCancelClick = function () {
        if (this._cancelCb) {
            this._cancelCb();
        }
        this.hide();
    };
    UIMessage.prototype.onBackBgClick = function () {
        this.hide();
    };
    UIMessage.prototype.show = function (params) {
        var _this = this;
        if (params == undefined) {
            return;
        }
        var data = params;
        this._type = data.type;
        this._content = data.content;
        this._confirmCb = data.confirmCb;
        this._cancelCb = data.cancelCb;
        if (data.canCover != undefined) {
            this._canCover = data.canCover;
        }
        if (!this._canCover && this.node.active) {
            return;
        }
        if (data.autoClose != undefined) {
            this._autoClose = data.autoClose;
        }
        if (this._autoClose) {
            this._timer = setTimeout(function () {
                _this.hide();
            }, this._timerTime);
        }
        this.node.active = true;
        this.setIntroTxt();
        this.setBtnsDisplay();
        this.fadeIn();
    };
    UIMessage.prototype.hide = function (isAni) {
        if (isAni === void 0) { isAni = true; }
        clearTimeout(this._timer);
        if (!this.node.active) {
            return;
        }
        if (isAni) {
            this.fadeOut();
            return;
        }
        this.node.active = false;
    };
    UIMessage.prototype.fadeIn = function () {
        this.ui.node_main.opacity = 0;
        this.ui.node_main.scale = 1.3;
        this.ui.node_main.stopAllActions();
        this.ui.node_main.runAction(cc.sequence(cc.spawn(cc.fadeIn(.15), cc.scaleTo(.2, 1).easing(cc.easeBackOut())), cc.callFunc(function () {
        })));
    };
    UIMessage.prototype.fadeOut = function () {
        var _this = this;
        this.ui.node_main.stopAllActions();
        this.ui.node_main.runAction(cc.sequence(cc.fadeOut(.1), cc.callFunc(function () {
            _this.node.active = false;
        })));
    };
    UIMessage.prototype.setBtnsDisplay = function () {
        switch (this._type) {
            case PopType.Confirm:
                this.setBtnCancelActive(false);
                this.setBtnConfirmActive(true);
                break;
            case PopType.None:
                this.setBtnCancelActive(false);
                this.setBtnConfirmActive(false);
                break;
            default:
                this.setBtnCancelActive(true);
                this.setBtnConfirmActive(true);
        }
    };
    UIMessage.prototype.setBtnConfirmActive = function (state) {
        this.ui.btn_confirm.active = state;
    };
    UIMessage.prototype.setBtnCancelActive = function (state) {
        this.ui.btn_cancel.active = state;
    };
    UIMessage.prototype.setIntroTxt = function () {
        this.ui.label_msg_txt.string = this._content;
    };
    UIMessage.prototype.setLang = function () {
        if (this._isLangSet) {
            return;
        }
        this.ui.label_confirm.string = LangMng_1.default.getTxt("P_1001");
        this.ui.label_cancel.string = LangMng_1.default.getTxt("P_1002");
        this._isLangSet = true;
    };
    UIMessage.prototype.resize = function () {
        var pos = this.getCanvas();
        this.node.setPosition(pos.x, pos.y);
    };
    UIMessage.prefabUrl = "message_panel";
    UIMessage.className = "UIMessage";
    UIMessage = __decorate([
        ccclass
    ], UIMessage);
    return UIMessage;
}(UIBase_1.default));
exports.default = UIMessage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcdWlcXFVJTWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFFOUIsZ0VBQTJEO0FBQzNELGlEQUE0QztBQUVwQyxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUVsQyxJQUFLLE9BSUo7QUFKRCxXQUFLLE9BQU87SUFDUixtQ0FBRyxDQUFBO0lBQ0gsMkNBQU8sQ0FBQTtJQUNQLHFDQUFJLENBQUE7QUFDUixDQUFDLEVBSkksT0FBTyxLQUFQLE9BQU8sUUFJWDtBQVlEO0lBQXVDLDZCQUFNO0lBQTdDO1FBQUEscUVBaU1DO1FBL0xHLFFBQUUsR0FBa0IsSUFBSSxDQUFDO1FBS2pCLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLFdBQUssR0FBVyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBSTdCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsWUFBTSxHQUFXLElBQUksQ0FBQztRQUN0QixnQkFBVSxHQUFXLElBQUksQ0FBQzs7SUFrTHRDLENBQUM7SUEvS0csMEJBQU0sR0FBTixVQUFPLE1BQU07UUFDVCxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsdUJBQWEsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELDBCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFF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LFFBQVEsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV2RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUUzQixDQUFDO0lBRUQsMEJBQU0sR0FBTjtRQUNJLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBM0xnQixtQkFBUyxHQUFHLGVBQWUsQ0FBQztJQUM1QixtQkFBUyxHQUFHLFdBQVcsQ0FBQztJQUx4QixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBaU03QjtJQUFELGdCQUFDO0NBak1ELEFBaU1DLENBak1zQyxnQkFBTSxHQWlNNUM7a0JBak1vQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJQmFzZSBmcm9tIFwiLi9VSUJhc2VcIjtcclxuaW1wb3J0IHsgTG9nIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9Mb2dcIjtcclxuaW1wb3J0IERhdGFVSU1lc3NhZ2UgZnJvbSBcIi4uLy4uL2RhdGEvc2NlbmUvRGF0YVVJTWVzc2FnZVwiO1xyXG5pbXBvcnQgTGFuZ01uZyBmcm9tIFwiLi4vLi4vbWFuYWdlci9MYW5nTW5nXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5lbnVtIFBvcFR5cGUge1xyXG4gICAgQWxsLFxyXG4gICAgQ29uZmlybSxcclxuICAgIE5vbmVcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dQYXJhbXMge1xyXG4gICAgdHlwZTogbnVtYmVyLFxyXG4gICAgY29udGVudDogc3RyaW5nLFxyXG4gICAgY29uZmlybUNiPzogRnVuY3Rpb24sXHJcbiAgICBjYW5jZWxDYj86IEZ1bmN0aW9uXHJcbiAgICBjYW5Db3Zlcj86IGJvb2xlYW4sXHJcbiAgICBhdXRvQ2xvc2U/OiBib29sZWFuLFxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1lc3NhZ2UgZXh0ZW5kcyBVSUJhc2Uge1xyXG5cclxuICAgIHVpOiBEYXRhVUlNZXNzYWdlID0gbnVsbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIHByZWZhYlVybCA9IFwibWVzc2FnZV9wYW5lbFwiO1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBjbGFzc05hbWUgPSBcIlVJTWVzc2FnZVwiO1xyXG5cclxuICAgIHByaXZhdGUgX2lzTGFuZ1NldDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfdHlwZTogbnVtYmVyID0gUG9wVHlwZS5Ob25lO1xyXG4gICAgcHJpdmF0ZSBfY29udGVudDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfY29uZmlybUNiOiBGdW5jdGlvbjtcclxuICAgIHByaXZhdGUgX2NhbmNlbENiOiBGdW5jdGlvbjtcclxuICAgIHByaXZhdGUgX2NhbkNvdmVyOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgX2F1dG9DbG9zZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfdGltZXI6IG51bWJlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIF90aW1lclRpbWU6IG51bWJlciA9IDMwMDA7XHJcblxyXG5cclxuICAgIG9uSW5pdChwYXJhbXMpOiB2b2lkIHtcclxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVUlMb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudWkgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KERhdGFVSU1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMucmVzaXplKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblJlZ2lzdGVyRXZlbnQodGhpcy51aS5idG5fY29uZmlybSwgdGhpcy5vbkNvbmZpcm1DbGljaywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblJlZ2lzdGVyRXZlbnQodGhpcy51aS5idG5fY2FuY2VsLCB0aGlzLm9uQ2FuY2VsQ2xpY2ssIHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25SZWdpc3RlckV2ZW50KHRoaXMudWkubm9kZV9iYWNrQmcsIHRoaXMub25CYWNrQmdDbGljaywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZXRMYW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25IaWRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudW5SZWdpc3RlckV2ZW50KHRoaXMudWkuYnRuX2NhbmNlbCwgdGhpcy5vbkNvbmZpcm1DbGljaywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51blJlZ2lzdGVyRXZlbnQodGhpcy51aS5idG5fY2FuY2VsLCB0aGlzLm9uQ2FuY2VsQ2xpY2ssIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudW5SZWdpc3RlckV2ZW50KHRoaXMudWkubm9kZV9iYWNrQmcsIHRoaXMub25CYWNrQmdDbGljaywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5fY2FuQ292ZXIgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29uZmlybUNsaWNrKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fY29uZmlybUNiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpcm1DYigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2FuY2VsQ2xpY2soKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jYW5jZWxDYikge1xyXG4gICAgICAgICAgICB0aGlzLl9jYW5jZWxDYigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uQmFja0JnQ2xpY2soKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdyhwYXJhbXMpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHBhcmFtcyA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRhdGEgPSBwYXJhbXMgYXMgRGlhbG9nUGFyYW1zO1xyXG4gICAgICAgIHRoaXMuX3R5cGUgPSBkYXRhLnR5cGU7XHJcbiAgICAgICAgdGhpcy5fY29udGVudCA9IGRhdGEuY29udGVudDtcclxuICAgICAgICB0aGlzLl9jb25maXJtQ2IgPSBkYXRhLmNvbmZpcm1DYjtcclxuICAgICAgICB0aGlzLl9jYW5jZWxDYiA9IGRhdGEuY2FuY2VsQ2I7XHJcblxyXG4gICAgICAgIGlmIChkYXRhLmNhbkNvdmVyICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYW5Db3ZlciA9IGRhdGEuY2FuQ292ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighdGhpcy5fY2FuQ292ZXIgJiYgdGhpcy5ub2RlLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGF0YS5hdXRvQ2xvc2UgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2F1dG9DbG9zZSA9IGRhdGEuYXV0b0Nsb3NlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2F1dG9DbG9zZSkge1xyXG4gICAgICAgICAgICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMuX3RpbWVyVGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNldEludHJvVHh0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRCdG5zRGlzcGxheSgpO1xyXG4gICAgICAgIHRoaXMuZmFkZUluKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoaXNBbmk6IGJvb2xlYW4gPSB0cnVlKSB7XHJcblxyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5ub2RlLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNBbmkpIHtcclxuICAgICAgICAgICAgdGhpcy5mYWRlT3V0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZmFkZUluKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudWkubm9kZV9tYWluLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMudWkubm9kZV9tYWluLnNjYWxlID0gMS4zO1xyXG4gICAgICAgIHRoaXMudWkubm9kZV9tYWluLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy51aS5ub2RlX21haW4ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnNwYXduKFxyXG4gICAgICAgICAgICBjYy5mYWRlSW4oLjE1KSxcclxuICAgICAgICAgICAgY2Muc2NhbGVUbyguMiwgMSkuZWFzaW5nKGNjLmVhc2VCYWNrT3V0KCkpXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZhZGVPdXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51aS5ub2RlX21haW4uc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLnVpLm5vZGVfbWFpbi5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLmZhZGVPdXQoLjEpLFxyXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QnRuc0Rpc3BsYXkoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fdHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFBvcFR5cGUuQ29uZmlybTpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QnRuQ2FuY2VsQWN0aXZlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QnRuQ29uZmlybUFjdGl2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICBQb3BUeXBlLk5vbmU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEJ0bkNhbmNlbEFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEJ0bkNvbmZpcm1BY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEJ0bkNhbmNlbEFjdGl2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QnRuQ29uZmlybUFjdGl2ZSh0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldEJ0bkNvbmZpcm1BY3RpdmUoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpLmJ0bl9jb25maXJtLmFjdGl2ZSA9IHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEJ0bkNhbmNlbEFjdGl2ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudWkuYnRuX2NhbmNlbC5hY3RpdmUgPSBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbnRyb1R4dCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVpLmxhYmVsX21zZ190eHQuc3RyaW5nID0gdGhpcy5fY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMYW5nKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5faXNMYW5nU2V0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudWkubGFiZWxfY29uZmlybS5zdHJpbmcgPSBMYW5nTW5nLmdldFR4dChcIlBfMTAwMVwiKTtcclxuICAgICAgICB0aGlzLnVpLmxhYmVsX2NhbmNlbC5zdHJpbmcgPSBMYW5nTW5nLmdldFR4dChcIlBfMTAwMlwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5faXNMYW5nU2V0ID0gdHJ1ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMuZ2V0Q2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHBvcy54LCBwb3MueSk7XHJcbiAgICB9XHJcblxyXG59Il19
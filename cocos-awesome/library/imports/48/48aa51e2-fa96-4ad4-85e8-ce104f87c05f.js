"use strict";
cc._RF.push(module, '48aa5Hi+pZK1IXozhBPh8Bf', 'Typer');
// Scene/Typer/Typer.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Typer = /** @class */ (function (_super) {
    __extends(Typer, _super);
    function Typer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.richText = null;
        _this.typerTimer = null; // 计时器Id
        return _this;
    }
    Typer.prototype.onLoad = function () {
        this.showRichTextTyper();
    };
    Typer.prototype.beforeDestroy = function () {
        // Destroy前确保定时器关闭
        this.typerTimer && clearInterval(this.typerTimer);
    };
    Typer.prototype.showLabelTyper = function () {
        var str = '我是异名\n这是Label打字效果';
        this.richText.string = '';
        this.label.string = '';
        this.makeLaberTyper(str);
    };
    Typer.prototype.makeLaberTyper = function (str) {
        var _this = this;
        var charArr = str.split('');
        var charIdx = 0;
        this.typerTimer && clearInterval(this.typerTimer);
        this.typerTimer = setInterval(function () {
            if (charIdx >= charArr.length) {
                _this.typerTimer && clearInterval(_this.typerTimer);
            }
            else {
                charIdx += 1;
                _this.label.string = charArr.slice(0, charIdx).join('');
            }
        }, 50);
    };
    Typer.prototype.showRichTextTyper = function () {
        var str = '我是<color=#1B262E>异名</c>\n这是<color=#1B262E>富文本打字机</color>效果';
        this.richText.string = '';
        this.label.string = '';
        this.makeRichTextTyper(str);
    };
    Typer.prototype.makeRichTextTyper = function (str) {
        var _this = this;
        var delimiterCharList = ['✁', '✂', '✃', '✄', '✺', '✻', '✼', '❄', '❅', '❆', '❇', '❈', '❉', '❊'];
        var regexp = /<.+?\/?>/g;
        var matchArr = str.match(regexp);
        var delimiterChar = delimiterCharList.find(function (item) { return str.indexOf(item) == -1; });
        var replaceStr = str.replace(regexp, delimiterChar);
        var tagInfoArr = [];
        var temp = [];
        var tagInfo = {};
        var num = 0;
        for (var i = 0; i < replaceStr.length; i++) {
            if (replaceStr[i] == delimiterChar) {
                temp.push(i);
                if (temp.length >= 2) {
                    tagInfo.endStr = matchArr[tagInfoArr.length * 2 + 1];
                    tagInfo.endtIdx = i - num;
                    tagInfoArr.push(tagInfo);
                    temp = [];
                    tagInfo = {};
                }
                else {
                    tagInfo.startIdx = i - num;
                    tagInfo.startStr = matchArr[tagInfoArr.length * 2];
                }
                num += 1;
            }
        }
        var showCharArr = str.replace(regexp, '').split('');
        var typerArr = [];
        for (var i = 1; i <= showCharArr.length; i++) {
            var temp_1 = showCharArr.join('').slice(0, i);
            var addLen = 0;
            for (var j = 0; j < tagInfoArr.length; j++) {
                var tagInfo_1 = tagInfoArr[j];
                var start = tagInfo_1.startIdx;
                var end = tagInfo_1.endtIdx;
                if (i > start && i <= end) {
                    temp_1 = temp_1.slice(0, start + addLen) + tagInfo_1.startStr + temp_1.slice(start + addLen) + tagInfo_1.endStr;
                    addLen += tagInfo_1.startStr.length + tagInfo_1.endStr.length;
                }
                else if (i > end) {
                    temp_1 =
                        temp_1.slice(0, start + addLen) +
                            tagInfo_1.startStr +
                            temp_1.slice(start + addLen, end + addLen) +
                            tagInfo_1.endStr +
                            temp_1.slice(end + addLen);
                    addLen += tagInfo_1.startStr.length + tagInfo_1.endStr.length;
                }
            }
            typerArr.unshift(temp_1);
        }
        this.typerTimer && clearInterval(this.typerTimer);
        this.typerTimer = setInterval(function () {
            if (typerArr.length) {
                _this.richText.string = typerArr.pop();
            }
            else {
                _this.typerTimer && clearInterval(_this.typerTimer);
            }
        }, 50);
    };
    var _b, _c;
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Label) === "function" ? _b : Object)
    ], Typer.prototype, "label", void 0);
    __decorate([
        property(cc.RichText),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.RichText) === "function" ? _c : Object)
    ], Typer.prototype, "richText", void 0);
    Typer = __decorate([
        ccclass
    ], Typer);
    return Typer;
}(cc.Component));
exports.default = Typer;

cc._RF.pop();
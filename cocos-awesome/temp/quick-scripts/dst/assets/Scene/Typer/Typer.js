
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scene/Typer/Typer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NlbmVcXFR5cGVyXFxUeXBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQTJHQztRQXpHQyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBRXZCLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBRTdCLGdCQUFVLEdBQVcsSUFBSSxDQUFDLENBQUMsUUFBUTs7SUFxR3JDLENBQUM7SUFuR0Msc0JBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCw2QkFBYSxHQUFiO1FBQ0Usa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxVQUFVLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsOEJBQWMsR0FBZDtRQUNFLElBQUksR0FBRyxHQUFHLG1CQUFtQixDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsOEJBQWMsR0FBZCxVQUFlLEdBQVc7UUFBMUIsaUJBYUM7UUFaQyxJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztRQUVoQixJQUFJLENBQUMsVUFBVSxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7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QUcsTUFBTSxFQUFFLEdBQUcsR0FBRyxNQUFNLENBQUM7NEJBQ3hDLFNBQU8sQ0FBQyxNQUFNOzRCQUNkLE1BQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDO29CQUMzQixNQUFNLElBQUksU0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsU0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7aUJBQzNEO2FBQ0Y7WUFDRCxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQUksQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxDQUFDLFVBQVUsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO1lBQzVCLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDbkIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxVQUFVLElBQUksYUFBYSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNuRDtRQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNULENBQUM7O0lBeEdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ1osRUFBRSxvQkFBRixFQUFFLENBQUMsS0FBSzt3Q0FBUTtJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO3NEQUNaLEVBQUUsb0JBQUYsRUFBRSxDQUFDLFFBQVE7MkNBQVE7SUFKVixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBMkd6QjtJQUFELFlBQUM7Q0EzR0QsQUEyR0MsQ0EzR2tDLEVBQUUsQ0FBQyxTQUFTLEdBMkc5QztrQkEzR29CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHlwZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcclxuICByaWNoVGV4dDogY2MuUmljaFRleHQgPSBudWxsO1xyXG5cclxuICB0eXBlclRpbWVyOiBudW1iZXIgPSBudWxsOyAvLyDorqHml7blmahJZFxyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLnNob3dSaWNoVGV4dFR5cGVyKCk7XHJcbiAgfVxyXG5cclxuICBiZWZvcmVEZXN0cm95KCkge1xyXG4gICAgLy8gRGVzdHJveeWJjeehruS/neWumuaXtuWZqOWFs+mXrVxyXG4gICAgdGhpcy50eXBlclRpbWVyICYmIGNsZWFySW50ZXJ2YWwodGhpcy50eXBlclRpbWVyKTtcclxuICB9XHJcblxyXG4gIHNob3dMYWJlbFR5cGVyKCkge1xyXG4gICAgbGV0IHN0ciA9ICfmiJHmmK/lvILlkI1cXG7ov5nmmK9MYWJlbOaJk+Wtl+aViOaenCc7XHJcbiAgICB0aGlzLnJpY2hUZXh0LnN0cmluZyA9ICcnO1xyXG4gICAgdGhpcy5sYWJlbC5zdHJpbmcgPSAnJztcclxuICAgIHRoaXMubWFrZUxhYmVyVHlwZXIoc3RyKTtcclxuICB9XHJcblxyXG4gIG1ha2VMYWJlclR5cGVyKHN0cjogc3RyaW5nKSB7XHJcbiAgICBsZXQgY2hhckFyciA9IHN0ci5zcGxpdCgnJyk7XHJcbiAgICBsZXQgY2hhcklkeCA9IDA7XHJcblxyXG4gICAgdGhpcy50eXBlclRpbWVyICYmIGNsZWFySW50ZXJ2YWwodGhpcy50eXBlclRpbWVyKTtcclxuICAgIHRoaXMudHlwZXJUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYgKGNoYXJJZHggPj0gY2hhckFyci5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLnR5cGVyVGltZXIgJiYgY2xlYXJJbnRlcnZhbCh0aGlzLnR5cGVyVGltZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNoYXJJZHggKz0gMTtcclxuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IGNoYXJBcnIuc2xpY2UoMCwgY2hhcklkeCkuam9pbignJyk7XHJcbiAgICAgIH1cclxuICAgIH0sIDUwKTtcclxuICB9XHJcblxyXG4gIHNob3dSaWNoVGV4dFR5cGVyKCkge1xyXG4gICAgbGV0IHN0ciA9ICfmiJHmmK88Y29sb3I9IzFCMjYyRT7lvILlkI08L2M+XFxu6L+Z5pivPGNvbG9yPSMxQjI2MkU+5a+M5paH5pys5omT5a2X5py6PC9jb2xvcj7mlYjmnpwnO1xyXG4gICAgdGhpcy5yaWNoVGV4dC5zdHJpbmcgPSAnJztcclxuICAgIHRoaXMubGFiZWwuc3RyaW5nID0gJyc7XHJcbiAgICB0aGlzLm1ha2VSaWNoVGV4dFR5cGVyKHN0cik7XHJcbiAgfVxyXG5cclxuICBtYWtlUmljaFRleHRUeXBlcihzdHI6IHN0cmluZykge1xyXG4gICAgbGV0IGRlbGltaXRlckNoYXJMaXN0OiBhbnkgPSBbJ+KcgScsICfinIInLCAn4pyDJywgJ+KchCcsICfinLonLCAn4py7JywgJ+KcvCcsICfinYQnLCAn4p2FJywgJ+KdhicsICfinYcnLCAn4p2IJywgJ+KdiScsICfinYonXTtcclxuICAgIGxldCByZWdleHAgPSAvPC4rP1xcLz8+L2c7XHJcbiAgICBsZXQgbWF0Y2hBcnIgPSBzdHIubWF0Y2gocmVnZXhwKTtcclxuICAgIGxldCBkZWxpbWl0ZXJDaGFyID0gZGVsaW1pdGVyQ2hhckxpc3QuZmluZCgoaXRlbSkgPT4gc3RyLmluZGV4T2YoaXRlbSkgPT0gLTEpO1xyXG4gICAgbGV0IHJlcGxhY2VTdHIgPSBzdHIucmVwbGFjZShyZWdleHAsIGRlbGltaXRlckNoYXIpO1xyXG4gICAgbGV0IHRhZ0luZm9BcnIgPSBbXTtcclxuICAgIGxldCB0ZW1wID0gW107XHJcbiAgICBsZXQgdGFnSW5mbzogeyBlbmRTdHI/OyBlbmR0SWR4Pzsgc3RhcnRJZHg/OyBzdGFydFN0cj8gfSA9IHt9O1xyXG4gICAgbGV0IG51bSA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcGxhY2VTdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHJlcGxhY2VTdHJbaV0gPT0gZGVsaW1pdGVyQ2hhcikge1xyXG4gICAgICAgIHRlbXAucHVzaChpKTtcclxuICAgICAgICBpZiAodGVtcC5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgdGFnSW5mby5lbmRTdHIgPSBtYXRjaEFyclt0YWdJbmZvQXJyLmxlbmd0aCAqIDIgKyAxXTtcclxuICAgICAgICAgIHRhZ0luZm8uZW5kdElkeCA9IGkgLSBudW07XHJcbiAgICAgICAgICB0YWdJbmZvQXJyLnB1c2godGFnSW5mbyk7XHJcbiAgICAgICAgICB0ZW1wID0gW107XHJcbiAgICAgICAgICB0YWdJbmZvID0ge307XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRhZ0luZm8uc3RhcnRJZHggPSBpIC0gbnVtO1xyXG4gICAgICAgICAgdGFnSW5mby5zdGFydFN0ciA9IG1hdGNoQXJyW3RhZ0luZm9BcnIubGVuZ3RoICogMl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG51bSArPSAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNob3dDaGFyQXJyID0gc3RyLnJlcGxhY2UocmVnZXhwLCAnJykuc3BsaXQoJycpO1xyXG4gICAgbGV0IHR5cGVyQXJyID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBzaG93Q2hhckFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgdGVtcCA9IHNob3dDaGFyQXJyLmpvaW4oJycpLnNsaWNlKDAsIGkpO1xyXG4gICAgICBsZXQgYWRkTGVuID0gMDtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0YWdJbmZvQXJyLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgbGV0IHRhZ0luZm8gPSB0YWdJbmZvQXJyW2pdO1xyXG4gICAgICAgIGxldCBzdGFydCA9IHRhZ0luZm8uc3RhcnRJZHg7XHJcbiAgICAgICAgbGV0IGVuZCA9IHRhZ0luZm8uZW5kdElkeDtcclxuICAgICAgICBpZiAoaSA+IHN0YXJ0ICYmIGkgPD0gZW5kKSB7XHJcbiAgICAgICAgICB0ZW1wID0gdGVtcC5zbGljZSgwLCBzdGFydCArIGFkZExlbikgKyB0YWdJbmZvLnN0YXJ0U3RyICsgdGVtcC5zbGljZShzdGFydCArIGFkZExlbikgKyB0YWdJbmZvLmVuZFN0cjtcclxuICAgICAgICAgIGFkZExlbiArPSB0YWdJbmZvLnN0YXJ0U3RyLmxlbmd0aCArIHRhZ0luZm8uZW5kU3RyLmxlbmd0aDtcclxuICAgICAgICB9IGVsc2UgaWYgKGkgPiBlbmQpIHtcclxuICAgICAgICAgIHRlbXAgPVxyXG4gICAgICAgICAgICB0ZW1wLnNsaWNlKDAsIHN0YXJ0ICsgYWRkTGVuKSArXHJcbiAgICAgICAgICAgIHRhZ0luZm8uc3RhcnRTdHIgK1xyXG4gICAgICAgICAgICB0ZW1wLnNsaWNlKHN0YXJ0ICsgYWRkTGVuLCBlbmQgKyBhZGRMZW4pICtcclxuICAgICAgICAgICAgdGFnSW5mby5lbmRTdHIgK1xyXG4gICAgICAgICAgICB0ZW1wLnNsaWNlKGVuZCArIGFkZExlbik7XHJcbiAgICAgICAgICBhZGRMZW4gKz0gdGFnSW5mby5zdGFydFN0ci5sZW5ndGggKyB0YWdJbmZvLmVuZFN0ci5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHR5cGVyQXJyLnVuc2hpZnQodGVtcCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50eXBlclRpbWVyICYmIGNsZWFySW50ZXJ2YWwodGhpcy50eXBlclRpbWVyKTtcclxuICAgIHRoaXMudHlwZXJUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYgKHR5cGVyQXJyLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMucmljaFRleHQuc3RyaW5nID0gdHlwZXJBcnIucG9wKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50eXBlclRpbWVyICYmIGNsZWFySW50ZXJ2YWwodGhpcy50eXBlclRpbWVyKTtcclxuICAgICAgfVxyXG4gICAgfSwgNTApO1xyXG4gIH1cclxufVxyXG4iXX0=
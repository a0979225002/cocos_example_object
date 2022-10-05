
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/test.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1484ebWK2pJpLb4brP/XlwY', 'test');
// Script/test.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var test = /** @class */ (function (_super) {
    __extends(test, _super);
    function test() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setTime = 43200000;
        _this.showTime = 0;
        return _this;
    }
    test.prototype.start = function () {
        var _this = this;
        setInterval(function () {
            _this.showTime += 1000;
            console.log(_this.updateTime(_this.showTime, _this.setTime));
        }, 1000);
    };
    test.prototype.updateTime = function (time, countTime) {
        var hr = Math.floor(time / 3600);
        var min = Math.floor((time - (hr * 3600)) / 60);
        var sec = time - (hr * 3600) - (min * 60);
        var returnPercent = time / countTime;
        return returnPercent;
    };
    test = __decorate([
        ccclass
    ], test);
    return test;
}(cc.Component));
exports.default = test;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx0ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBbUJDO1FBbEJHLGFBQU8sR0FBVyxRQUFRLENBQUM7UUFDM0IsY0FBUSxHQUFXLENBQUMsQ0FBQzs7SUFpQnpCLENBQUM7SUFmRyxvQkFBSyxHQUFMO1FBQUEsaUJBTUM7UUFMRyxXQUFXLENBQUM7WUFDUixLQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUU5RCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0QseUJBQVUsR0FBVixVQUFXLElBQVksRUFBRSxTQUFpQjtRQUN0QyxJQUFJLEVBQUUsR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLEdBQUcsR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxHQUFHLEdBQVcsSUFBSSxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELElBQUksYUFBYSxHQUFHLElBQUksR0FBRyxTQUFTLENBQUM7UUFDckMsT0FBTyxhQUFhLENBQUE7SUFFeEIsQ0FBQztJQWxCZ0IsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQW1CeEI7SUFBRCxXQUFDO0NBbkJELEFBbUJDLENBbkJpQyxFQUFFLENBQUMsU0FBUyxHQW1CN0M7a0JBbkJvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRlc3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgc2V0VGltZTogbnVtYmVyID0gNDMyMDAwMDA7XHJcbiAgICBzaG93VGltZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1RpbWUgKz0gMTAwMDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy51cGRhdGVUaW1lKHRoaXMuc2hvd1RpbWUsIHRoaXMuc2V0VGltZSkpO1xyXG5cclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVRpbWUodGltZTogbnVtYmVyLCBjb3VudFRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIHZhciBocjogbnVtYmVyID0gTWF0aC5mbG9vcih0aW1lIC8gMzYwMCk7XHJcbiAgICAgICAgdmFyIG1pbjogbnVtYmVyID0gTWF0aC5mbG9vcigodGltZSAtIChociAqIDM2MDApKSAvIDYwKTtcclxuICAgICAgICB2YXIgc2VjOiBudW1iZXIgPSB0aW1lIC0gKGhyICogMzYwMCkgLSAobWluICogNjApO1xyXG4gICAgICAgIHZhciByZXR1cm5QZXJjZW50ID0gdGltZSAvIGNvdW50VGltZTtcclxuICAgICAgICByZXR1cm4gcmV0dXJuUGVyY2VudFxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=
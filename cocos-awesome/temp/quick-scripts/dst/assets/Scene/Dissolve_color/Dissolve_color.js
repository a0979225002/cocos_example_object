
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scene/Dissolve_color/Dissolve_color.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '184ab+BIeVCTLvd8FH6B+h3', 'Dissolve_color');
// Scene/Dissolve_color/Dissolve_color.ts

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
var Dissolve_color = /** @class */ (function (_super) {
    __extends(Dissolve_color, _super);
    function Dissolve_color() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tip = null;
        _this.materialList = [];
        _this.fadePct = 0; // 溶解百分比
        _this.activeFlag = false; // 溶解进行中
        _this.symbol = 1; // 色彩叠加的正负
        _this.speed = 0.5; // 色彩叠加的速度
        return _this;
    }
    Dissolve_color.prototype.start = function () {
        this.materialList.push(this.node.getChildByName('ghost').getComponent(cc.Sprite).getMaterial(0), this.node.getChildByName('man').getComponent(cc.Sprite).getMaterial(0));
    };
    Dissolve_color.prototype.toggle = function () {
        if (this.activeFlag)
            return;
        this.activeFlag = true;
    };
    Dissolve_color.prototype.update = function (dt) {
        var _this = this;
        if (!this.activeFlag)
            return;
        this.materialList.forEach(function (material) { return material.setProperty('fade_pct', _this.fadePct); });
        if (this.fadePct >= 0 && this.fadePct <= 1) {
            this.fadePct += this.symbol * dt * this.speed;
            this.tip.string = "溶解程度 " + this.fadePct.toFixed(1);
        }
        else {
            this.fadePct = this.fadePct > 1 ? 1 : 0;
            this.symbol = -this.symbol;
            this.activeFlag = false;
        }
    };
    var _b;
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Label) === "function" ? _b : Object)
    ], Dissolve_color.prototype, "tip", void 0);
    Dissolve_color = __decorate([
        ccclass
    ], Dissolve_color);
    return Dissolve_color;
}(cc.Component));
exports.default = Dissolve_color;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NlbmVcXERpc3NvbHZlX2NvbG9yXFxEaXNzb2x2ZV9jb2xvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQWtDQztRQWhDQyxTQUFHLEdBQWEsSUFBSSxDQUFDO1FBQ3JCLGtCQUFZLEdBQWtCLEVBQUUsQ0FBQztRQUNqQyxhQUFPLEdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUTtRQUM3QixnQkFBVSxHQUFZLEtBQUssQ0FBQyxDQUFDLFFBQVE7UUFDckMsWUFBTSxHQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFDOUIsV0FBSyxHQUFXLEdBQUcsQ0FBQyxDQUFDLFVBQVU7O0lBMkJqQyxDQUFDO0lBekJDLDhCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQ3hFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUN2RSxDQUFDO0lBQ0osQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTztRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQsK0JBQU0sR0FBTixVQUFPLEVBQUU7UUFBVCxpQkFZQztRQVhDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVTtZQUFFLE9BQU87UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxRQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQTlDLENBQThDLENBQUMsQ0FBQztRQUV4RixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxFQUFFO1lBQzFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckQ7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7SUEvQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDZCxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxLQUFLOytDQUFRO0lBRkYsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQWtDbEM7SUFBRCxxQkFBQztDQWxDRCxBQWtDQyxDQWxDMkMsRUFBRSxDQUFDLFNBQVMsR0FrQ3ZEO2tCQWxDb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNzb2x2ZV9jb2xvciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gIHRpcDogY2MuTGFiZWwgPSBudWxsO1xyXG4gIG1hdGVyaWFsTGlzdDogY2MuTWF0ZXJpYWxbXSA9IFtdO1xyXG4gIGZhZGVQY3Q6IG51bWJlciA9IDA7IC8vIOa6tuino+eZvuWIhuavlFxyXG4gIGFjdGl2ZUZsYWc6IGJvb2xlYW4gPSBmYWxzZTsgLy8g5rq26Kej6L+b6KGM5LitXHJcbiAgc3ltYm9sOiBudW1iZXIgPSAxOyAvLyDoibLlvanlj6DliqDnmoTmraPotJ9cclxuICBzcGVlZDogbnVtYmVyID0gMC41OyAvLyDoibLlvanlj6DliqDnmoTpgJ/luqZcclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB0aGlzLm1hdGVyaWFsTGlzdC5wdXNoKFxyXG4gICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2dob3N0JykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZ2V0TWF0ZXJpYWwoMCksXHJcbiAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnbWFuJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZ2V0TWF0ZXJpYWwoMClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGUoKSB7XHJcbiAgICBpZiAodGhpcy5hY3RpdmVGbGFnKSByZXR1cm47XHJcbiAgICB0aGlzLmFjdGl2ZUZsYWcgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKGR0KSB7XHJcbiAgICBpZiAoIXRoaXMuYWN0aXZlRmxhZykgcmV0dXJuO1xyXG4gICAgdGhpcy5tYXRlcmlhbExpc3QuZm9yRWFjaCgobWF0ZXJpYWwpID0+IG1hdGVyaWFsLnNldFByb3BlcnR5KCdmYWRlX3BjdCcsIHRoaXMuZmFkZVBjdCkpO1xyXG5cclxuICAgIGlmICh0aGlzLmZhZGVQY3QgPj0gMCAmJiB0aGlzLmZhZGVQY3QgPD0gMSkge1xyXG4gICAgICB0aGlzLmZhZGVQY3QgKz0gdGhpcy5zeW1ib2wgKiBkdCAqIHRoaXMuc3BlZWQ7XHJcbiAgICAgIHRoaXMudGlwLnN0cmluZyA9IFwi5rq26Kej56iL5bqmIFwiICsgdGhpcy5mYWRlUGN0LnRvRml4ZWQoMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZhZGVQY3QgPSB0aGlzLmZhZGVQY3QgPiAxID8gMSA6IDA7XHJcbiAgICAgIHRoaXMuc3ltYm9sID0gLXRoaXMuc3ltYm9sO1xyXG4gICAgICB0aGlzLmFjdGl2ZUZsYWcgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
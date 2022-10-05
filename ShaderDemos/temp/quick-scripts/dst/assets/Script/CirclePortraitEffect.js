
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/CirclePortraitEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bf118HtGdBCe5k973WKlsID', 'CirclePortraitEffect');
// Script/CirclePortraitEffect.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var CirclePortraitFrag_1 = require("./CirclePortraitFrag");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cornerSlider = null;
        _this.edge = 0.05;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
        this.edge = this.cornerSlider.progress / 2;
        this.makeCircle();
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.makeCircle = function () {
        if (this.program)
            return;
        this.program = new cc.GLProgram();
        if (cc.sys.isNative) {
            this.program.initWithString(CirclePortraitFrag_1.default.circle_vert, CirclePortraitFrag_1.default.circle_frag);
        }
        else {
            this.program.initWithVertexShaderByteArray(CirclePortraitFrag_1.default.circle_vert, CirclePortraitFrag_1.default.circle_frag);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
        }
        this.program.link();
        this.program.updateUniforms();
        this.program.use();
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
            glProgram_state.setUniformFloat('u_edge', this.edge);
        }
        else {
            var ed = this.program.getUniformLocationForName("u_edge");
            this.program.setUniformLocationWith1f(ed, this.edge);
        }
        this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program);
    };
    NewClass.prototype.setProgram = function (node, program) {
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(program);
            node.setGLProgramState(glProgram_state);
        }
        else {
            node.setShaderProgram(program);
        }
    };
    NewClass.prototype.onSliderChange = function (slider, eventType) {
        this.edge = Number((slider.progress / 2).toFixed(2));
        if (!this.program)
            return;
        this.program.use();
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
            glProgram_state.setUniformFloat("u_edge", this.edge);
        }
        else {
            var ed = this.program.getUniformLocationForName("u_edge");
            this.program.setUniformLocationWith1f(ed, this.edge);
        }
    };
    __decorate([
        property(cc.Slider)
    ], NewClass.prototype, "cornerSlider", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDaXJjbGVQb3J0cmFpdEVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBa0Q7QUFFNUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFrRUM7UUEvREcsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFHL0IsVUFBSSxHQUFHLElBQUksQ0FBQzs7UUEyRFosaUJBQWlCO0lBQ3JCLENBQUM7SUExREcseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCw2QkFBVSxHQUFWO1FBQ0ksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLDRCQUFjLENBQUMsV0FBVyxFQUFFLDRCQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdkY7YUFBTTtZQUNILElBQUksQ0FBQyxPQUFPLENBQUMsNkJBQTZCLENBQUMsNEJBQWMsQ0FBQyxXQUFXLEVBQUUsNEJBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNuRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FB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b290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaXJjbGVQb3J0cmFpdCBmcm9tICcuL0NpcmNsZVBvcnRyYWl0RnJhZyc7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU2xpZGVyKVxyXG4gICAgY29ybmVyU2xpZGVyOiBjYy5TbGlkZXIgPSBudWxsO1xyXG5cclxuICAgIHByb2dyYW06IGNjLkdMUHJvZ3JhbTtcclxuICAgIGVkZ2UgPSAwLjA1O1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmVkZ2UgPSB0aGlzLmNvcm5lclNsaWRlci5wcm9ncmVzcyAvIDI7XHJcbiAgICAgICAgdGhpcy5tYWtlQ2lyY2xlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtYWtlQ2lyY2xlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb2dyYW0pIHJldHVybjsgICAgXHJcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbmV3IGNjLkdMUHJvZ3JhbSgpO1xyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmluaXRXaXRoU3RyaW5nKENpcmNsZVBvcnRyYWl0LmNpcmNsZV92ZXJ0LCBDaXJjbGVQb3J0cmFpdC5jaXJjbGVfZnJhZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmluaXRXaXRoVmVydGV4U2hhZGVyQnl0ZUFycmF5KENpcmNsZVBvcnRyYWl0LmNpcmNsZV92ZXJ0LCBDaXJjbGVQb3J0cmFpdC5jaXJjbGVfZnJhZyk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfUE9TSVRJT04sIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfUE9TSVRJT04pO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX0NPTE9SLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX0NPTE9SKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9URVhfQ09PUkQsIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfVEVYX0NPT1JEUyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvZ3JhbS5saW5rKCk7XHJcbiAgICAgICAgdGhpcy5wcm9ncmFtLnVwZGF0ZVVuaWZvcm1zKCk7XHJcbiAgICAgICAgdGhpcy5wcm9ncmFtLnVzZSgpO1xyXG5cclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0odGhpcy5wcm9ncmFtKTtcclxuICAgICAgICAgICAgZ2xQcm9ncmFtX3N0YXRlLnNldFVuaWZvcm1GbG9hdCgndV9lZGdlJywgdGhpcy5lZGdlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZWQgPSB0aGlzLnByb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZSggXCJ1X2VkZ2VcIiApO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmKGVkLCB0aGlzLmVkZ2UgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRQcm9ncmFtKHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5fc2dOb2RlLCB0aGlzLnByb2dyYW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFByb2dyYW0obm9kZTogYW55LCBwcm9ncmFtOiBhbnkpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0ocHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0R0xQcm9ncmFtU3RhdGUoZ2xQcm9ncmFtX3N0YXRlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub2RlLnNldFNoYWRlclByb2dyYW0ocHJvZ3JhbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2xpZGVyQ2hhbmdlKHNsaWRlcjogY2MuU2xpZGVyLCBldmVudFR5cGU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuZWRnZSA9IE51bWJlcigoc2xpZGVyLnByb2dyZXNzIC8gMikudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb2dyYW0pIHJldHVybjtcclxuICAgICAgICB0aGlzLnByb2dyYW0udXNlKCk7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtRmxvYXQoXCJ1X2VkZ2VcIiwgdGhpcy5lZGdlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZWQgPSB0aGlzLnByb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZShcInVfZWRnZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgxZihlZCwgdGhpcy5lZGdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
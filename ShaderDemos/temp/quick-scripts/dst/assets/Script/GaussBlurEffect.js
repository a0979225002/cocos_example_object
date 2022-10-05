
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GaussBlurEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3c908SX2u5DfIEt7iumNEPE', 'GaussBlurEffect');
// Script/GaussBlurEffect.ts

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
var GaussBlursFrag_1 = require("./GaussBlursFrag");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GaussBlurEffect = /** @class */ (function (_super) {
    __extends(GaussBlurEffect, _super);
    function GaussBlurEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAllChildrenUse = false;
        _this.slider = null;
        _this.blurText = null;
        _this.bluramount = 0.10;
        return _this;
    }
    GaussBlurEffect.prototype.onLoad = function () {
        this.bluramount = this.slider.progress / 10;
        this.blurText.string = (this.slider.progress * 100).toString();
        this.useBlur();
    };
    GaussBlurEffect.prototype.start = function () {
    };
    GaussBlurEffect.prototype.useBlur = function () {
        this.program = new cc.GLProgram();
        if (cc.sys.isNative) {
            this.program.initWithString(GaussBlursFrag_1.default.blurs_vert, GaussBlursFrag_1.default.blurs_frag);
        }
        else {
            this.program.initWithVertexShaderByteArray(GaussBlursFrag_1.default.blurs_vert, GaussBlursFrag_1.default.blurs_frag);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
        }
        this.program.link();
        this.program.updateUniforms();
        this.program.use();
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
            glProgram_state.setUniformFloat("bluramount", this.bluramount);
        }
        else {
            var ba = this.program.getUniformLocationForName("bluramount");
            this.program.setUniformLocationWith1f(ba, this.bluramount);
        }
        if (this.isAllChildrenUse) {
            this.setProgram(this.node._sgNode, this.program);
        }
        else {
            this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program);
        }
    };
    GaussBlurEffect.prototype.setProgram = function (node, program) {
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(program);
            node.setGLProgramState(glProgram_state);
        }
        else {
            node.setShaderProgram(program);
        }
        var children = node.children;
        if (!children)
            return;
        for (var i = 0; i < children.length; i++) {
            this.setProgram(children[i], program);
        }
    };
    GaussBlurEffect.prototype.onSliderBlurAmount = function (slider, eventType) {
        this.bluramount = Number((this.slider.progress / 10).toFixed(3));
        this.blurText.string = (this.bluramount * 1000).toString();
        this.changeBlurAmount(this.bluramount);
    };
    GaussBlurEffect.prototype.changeBlurAmount = function (amount) {
        if (this.program) {
            this.program.use();
            if (cc.sys.isNative) {
                var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
                glProgram_state.setUniformFloat("bluramount", this.bluramount);
            }
            else {
                var ba = this.program.getUniformLocationForName("bluramount");
                this.program.setUniformLocationWith1f(ba, this.bluramount);
            }
        }
    };
    __decorate([
        property
    ], GaussBlurEffect.prototype, "isAllChildrenUse", void 0);
    __decorate([
        property(cc.Slider)
    ], GaussBlurEffect.prototype, "slider", void 0);
    __decorate([
        property(cc.Label)
    ], GaussBlurEffect.prototype, "blurText", void 0);
    GaussBlurEffect = __decorate([
        ccclass
    ], GaussBlurEffect);
    return GaussBlurEffect;
}(cc.Component));
exports.default = GaussBlurEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYXVzc0JsdXJFZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXlDO0FBQ25DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBdUZDO1FBcEZHLHNCQUFnQixHQUFZLEtBQUssQ0FBQztRQUdsQyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFHMUIsZ0JBQVUsR0FBVyxJQUFJLENBQUM7O0lBMkU5QixDQUFDO0lBdkVHLGdDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsK0JBQUssR0FBTDtJQUNBLENBQUM7SUFFRCxpQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLHdCQUFTLENBQUMsVUFBVSxFQUFFLHdCQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDM0U7YUFBTTtZQUNILElBQUksQ0FBQyxPQUFPLENBQUMsNkJBQTZCLENBQUMsd0JBQVMsQ0FBQyxVQUFVLEVBQUUsd0JBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZ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QUFVLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsMENBQWdCLEdBQWhCLFVBQWlCLE1BQWM7UUFDM0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNuQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDL0UsZUFBZSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ2xFO2lCQUFNO2dCQUNILElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzlELElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUM5RDtTQUNKO0lBQ0wsQ0FBQztJQW5GRDtRQURDLFFBQVE7NkRBQ3lCO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bURBQ0s7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDTztJQVRULGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0F1Rm5DO0lBQUQsc0JBQUM7Q0F2RkQsQUF1RkMsQ0F2RjRDLEVBQUUsQ0FBQyxTQUFTLEdBdUZ4RDtrQkF2Rm9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmx1cnNGcmFnIGZyb20gJy4vR2F1c3NCbHVyc0ZyYWcnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2F1c3NCbHVyRWZmZWN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpc0FsbENoaWxkcmVuVXNlOiBib29sZWFuID0gZmFsc2U7IFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TbGlkZXIpXHJcbiAgICBzbGlkZXI6IGNjLlNsaWRlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgYmx1clRleHQ6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBwcm9ncmFtOiBjYy5HTFByb2dyYW07XHJcbiAgICBibHVyYW1vdW50OiBudW1iZXIgPSAwLjEwO1xyXG5cclxuICAgIFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmJsdXJhbW91bnQgPSB0aGlzLnNsaWRlci5wcm9ncmVzcyAvIDEwO1xyXG4gICAgICAgIHRoaXMuYmx1clRleHQuc3RyaW5nID0gKHRoaXMuc2xpZGVyLnByb2dyZXNzKjEwMCkudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLnVzZUJsdXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH1cclxuXHJcbiAgICB1c2VCbHVyKCkge1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBjYy5HTFByb2dyYW0oKTtcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5pbml0V2l0aFN0cmluZyhCbHVyc0ZyYWcuYmx1cnNfdmVydCwgQmx1cnNGcmFnLmJsdXJzX2ZyYWcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5pbml0V2l0aFZlcnRleFNoYWRlckJ5dGVBcnJheShCbHVyc0ZyYWcuYmx1cnNfdmVydCwgQmx1cnNGcmFnLmJsdXJzX2ZyYWcpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX1BPU0lUSU9OLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1BPU0lUSU9OKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9DT0xPUiwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9DT0xPUik7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfVEVYX0NPT1JELCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1RFWF9DT09SRFMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb2dyYW0ubGluaygpO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbS51c2UoKTtcclxuXHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtRmxvYXQoXCJibHVyYW1vdW50XCIsIHRoaXMuYmx1cmFtb3VudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGJhID0gdGhpcy5wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoXCJibHVyYW1vdW50XCIpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmKGJhLCB0aGlzLmJsdXJhbW91bnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc0FsbENoaWxkcmVuVXNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZ3JhbSh0aGlzLm5vZGUuX3NnTm9kZSwgdGhpcy5wcm9ncmFtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFByb2dyYW0odGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLl9zZ05vZGUsIHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFByb2dyYW0obm9kZTogYW55LCBwcm9ncmFtOiBhbnkpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0ocHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0R0xQcm9ncmFtU3RhdGUoZ2xQcm9ncmFtX3N0YXRlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub2RlLnNldFNoYWRlclByb2dyYW0ocHJvZ3JhbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XHJcbiAgICAgICAgaWYgKCFjaGlsZHJlbilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZ3JhbShjaGlsZHJlbltpXSwgcHJvZ3JhbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2xpZGVyQmx1ckFtb3VudChzbGlkZXI6IGNjLlNsaWRlciwgZXZlbnRUeXBlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmJsdXJhbW91bnQgPSBOdW1iZXIoKHRoaXMuc2xpZGVyLnByb2dyZXNzIC8gMTApLnRvRml4ZWQoMykpO1xyXG4gICAgICAgIHRoaXMuYmx1clRleHQuc3RyaW5nID0gKHRoaXMuYmx1cmFtb3VudCoxMDAwKS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlQmx1ckFtb3VudCh0aGlzLmJsdXJhbW91bnQpO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICBjaGFuZ2VCbHVyQW1vdW50KGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvZ3JhbSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0udXNlKCk7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0odGhpcy5wcm9ncmFtKTtcclxuICAgICAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtRmxvYXQoXCJibHVyYW1vdW50XCIsIHRoaXMuYmx1cmFtb3VudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmEgPSB0aGlzLnByb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZShcImJsdXJhbW91bnRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmKGJhLCB0aGlzLmJsdXJhbW91bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICBcclxuICAgIH1cclxufVxyXG4iXX0=
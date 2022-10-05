
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/EffectManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bd1117F/2dLHJBPHjLTzcUt', 'EffectManager');
// Script/EffectManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EffectManager = /** @class */ (function (_super) {
    __extends(EffectManager, _super);
    function EffectManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fragShader = 'lightcircle';
        _this.default_vert = "\n    attribute vec4 a_position;\n    attribute vec2 a_texCoord;\n    attribute vec4 a_color;\n    varying vec2 v_texCoord;\n    varying vec4 v_fragmentColor;\n    void main()\n    {\n        gl_Position = CC_PMatrix * a_position;\n        v_fragmentColor = a_color;\n        v_texCoord = a_texCoord;\n    }\n    ";
        _this.frag_glsl = '';
        _this.startTime = Date.now();
        _this.time = 0;
        _this.resolution = { x: 0.0, y: 0.0 };
        return _this;
    }
    // 初始化
    EffectManager.prototype.onLoad = function () {
        cc.director.setDisplayStats(true);
        this.resolution.x = (this.node.getContentSize().width);
        this.resolution.y = (this.node.getContentSize().height);
        var self = this;
        cc.loader.loadRes(this.fragShader, function (err, data) {
            if (err)
                cc.log(err);
            else {
                self.frag_glsl = data;
                self.useShader();
            }
        });
    };
    EffectManager.prototype.useShader = function () {
        this.program = new cc.GLProgram();
        if (cc.sys.isNative) {
            this.program.initWithString(this.default_vert, this.frag_glsl);
        }
        else {
            this.program.initWithVertexShaderByteArray(this.default_vert, this.frag_glsl);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
        }
        this.program.link();
        this.program.updateUniforms();
        this.program.use();
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
            glProgram_state.setUniformFloat("time", this.time);
            glProgram_state.setUniformVec2("resolution", this.resolution);
        }
        else {
            var ba = this.program.getUniformLocationForName("time");
            var res = this.program.getUniformLocationForName("resolution");
            this.program.setUniformLocationWith1f(ba, this.time);
            this.program.setUniformLocationWith2f(res, this.resolution.x, this.resolution.y);
        }
        this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program);
    };
    EffectManager.prototype.setProgram = function (node, program) {
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(program);
            node.setGLProgramState(glProgram_state);
        }
        else {
            node.setShaderProgram(program);
        }
    };
    EffectManager.prototype.updateParameters = function () {
        this.time = (Date.now() - this.startTime) / 1000;
    };
    // 每帧更新函数
    EffectManager.prototype.update = function (dt) {
        this.updateParameters();
        if (this.program) {
            this.program.use();
            if (cc.sys.isNative) {
                var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
                glProgram_state.setUniformFloat("time", this.time);
            }
            else {
                var ct = this.program.getUniformLocationForName("time");
                this.program.setUniformLocationWith1f(ct, this.time);
            }
        }
    };
    __decorate([
        property
    ], EffectManager.prototype, "fragShader", void 0);
    EffectManager = __decorate([
        ccclass
    ], EffectManager);
    return EffectManager;
}(cc.Component));
exports.default = EffectManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFZmZlY3RNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBNkZDO1FBMUZHLGdCQUFVLEdBQVcsYUFBYSxDQUFDO1FBRW5DLGtCQUFZLEdBQUcsMlRBWWQsQ0FBQztRQUdGLGVBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsZUFBUyxHQUFVLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM5QixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGdCQUFVLEdBQUMsRUFBRSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQzs7SUFzRS9CLENBQUM7SUFyRUcsTUFBTTtJQUNOLDhCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxDQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQVUsR0FBRyxFQUFFLElBQUk7WUFDbEQsSUFBSSxHQUFHO2dCQUNILEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ1g7Z0JBQ0QsSUFBSSxDQUFDLFNBQVMs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SSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3JELENBQUM7SUFDRCxTQUFTO0lBQ1QsOEJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ25CLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksZUFBZSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMvRSxlQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEQ7aUJBQU07Z0JBQ0gsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hEO1NBQ0o7SUFDTCxDQUFDO0lBekZEO1FBREMsUUFBUTtxREFDMEI7SUFIbEIsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQTZGakM7SUFBRCxvQkFBQztDQTdGRCxBQTZGQyxDQTdGMEMsRUFBRSxDQUFDLFNBQVMsR0E2RnREO2tCQTdGb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZmZlY3RNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGZyYWdTaGFkZXI6IHN0cmluZyA9ICdsaWdodGNpcmNsZSc7XHJcbiAgICBcclxuICAgIGRlZmF1bHRfdmVydCA9IGBcclxuICAgIGF0dHJpYnV0ZSB2ZWM0IGFfcG9zaXRpb247XHJcbiAgICBhdHRyaWJ1dGUgdmVjMiBhX3RleENvb3JkO1xyXG4gICAgYXR0cmlidXRlIHZlYzQgYV9jb2xvcjtcclxuICAgIHZhcnlpbmcgdmVjMiB2X3RleENvb3JkO1xyXG4gICAgdmFyeWluZyB2ZWM0IHZfZnJhZ21lbnRDb2xvcjtcclxuICAgIHZvaWQgbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgZ2xfUG9zaXRpb24gPSBDQ19QTWF0cml4ICogYV9wb3NpdGlvbjtcclxuICAgICAgICB2X2ZyYWdtZW50Q29sb3IgPSBhX2NvbG9yO1xyXG4gICAgICAgIHZfdGV4Q29vcmQgPSBhX3RleENvb3JkO1xyXG4gICAgfVxyXG4gICAgYDtcclxuXHJcbiAgICBwcm9ncmFtOiBjYy5HTFByb2dyYW07XHJcbiAgICBmcmFnX2dsc2w6IHN0cmluZyA9ICcnO1xyXG4gICAgc3RhcnRUaW1lOm51bWJlciA9IERhdGUubm93KCk7XHJcbiAgICB0aW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcmVzb2x1dGlvbj17IHg6MC4wLCB5OjAuMH07XHJcbiAgICAvLyDliJ3lp4vljJZcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5zZXREaXNwbGF5U3RhdHModHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5yZXNvbHV0aW9uLnggPSAodGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkud2lkdGggKTtcclxuICAgICAgICB0aGlzLnJlc29sdXRpb24ueSA9ICh0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQpO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyh0aGlzLmZyYWdTaGFkZXIsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGVycilcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZnJhZ19nbHNsID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIHNlbGYudXNlU2hhZGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VTaGFkZXIoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbmV3IGNjLkdMUHJvZ3JhbSgpOyBcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5pbml0V2l0aFN0cmluZyh0aGlzLmRlZmF1bHRfdmVydCwgdGhpcy5mcmFnX2dsc2wpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5pbml0V2l0aFZlcnRleFNoYWRlckJ5dGVBcnJheSh0aGlzLmRlZmF1bHRfdmVydCwgdGhpcy5mcmFnX2dsc2wpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX1BPU0lUSU9OLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1BPU0lUSU9OKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9DT0xPUiwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9DT0xPUik7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfVEVYX0NPT1JELCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1RFWF9DT09SRFMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb2dyYW0ubGluaygpO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbS51c2UoKTtcclxuXHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtRmxvYXQoXCJ0aW1lXCIsIHRoaXMudGltZSk7XHJcbiAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtVmVjMiggXCJyZXNvbHV0aW9uXCIsIHRoaXMucmVzb2x1dGlvbiApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBiYSA9IHRoaXMucHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lKFwidGltZVwiKTtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IHRoaXMucHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lKCBcInJlc29sdXRpb25cIiApO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmKGJhLCB0aGlzLnRpbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDJmKCByZXMsIHRoaXMucmVzb2x1dGlvbi54LHRoaXMucmVzb2x1dGlvbi55ICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0UHJvZ3JhbSh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuX3NnTm9kZSwgdGhpcy5wcm9ncmFtKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9ncmFtKG5vZGU6IGFueSwgcHJvZ3JhbTogYW55KSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgICAgICBub2RlLnNldEdMUHJvZ3JhbVN0YXRlKGdsUHJvZ3JhbV9zdGF0ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbm9kZS5zZXRTaGFkZXJQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQYXJhbWV0ZXJzKCkge1xyXG4gICAgICAgIHRoaXMudGltZSA9IChEYXRlLm5vdygpIC0gdGhpcy5zdGFydFRpbWUpIC8gMTAwMDtcclxuICAgIH1cclxuICAgIC8vIOavj+W4p+abtOaWsOWHveaVsFxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQYXJhbWV0ZXJzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvZ3JhbSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0udXNlKCk7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0odGhpcy5wcm9ncmFtKTtcclxuICAgICAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtRmxvYXQoXCJ0aW1lXCIsIHRoaXMudGltZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3QgPSB0aGlzLnByb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZShcInRpbWVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmKGN0LCB0aGlzLnRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
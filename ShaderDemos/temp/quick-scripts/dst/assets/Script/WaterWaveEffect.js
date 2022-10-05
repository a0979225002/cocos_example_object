
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/WaterWaveEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a07cefNdFNDU7fkKWco4FFG', 'WaterWaveEffect');
// Script/WaterWaveEffect.ts

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
// Feofox Game
// Author:Lerry
// https://github.com/fylz1125/ShaderDemos
var WaterWaveFrag_1 = require("./WaterWaveFrag");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WaterWaveEffect = /** @class */ (function (_super) {
    __extends(WaterWaveEffect, _super);
    function WaterWaveEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startTime = Date.now();
        _this.time = 0;
        _this.resolution = { x: 0.0, y: 0.0 };
        return _this;
    }
    WaterWaveEffect.prototype.onLoad = function () {
        this.resolution.x = (this.node.getContentSize().width);
        this.resolution.y = (this.node.getContentSize().height);
        this.useWater();
    };
    WaterWaveEffect.prototype.start = function () {
    };
    WaterWaveEffect.prototype.useWater = function () {
        if (this.program)
            return;
        this.program = new cc.GLProgram();
        if (cc.sys.isNative) {
            this.program.initWithString(WaterWaveFrag_1.default.waterwave_vert, WaterWaveFrag_1.default.waterwave_frag);
        }
        else {
            this.program.initWithVertexShaderByteArray(WaterWaveFrag_1.default.waterwave_vert, WaterWaveFrag_1.default.waterwave_frag);
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
            var res = this.program.getUniformLocationForName("resolution");
            var ba = this.program.getUniformLocationForName("time");
            this.program.setUniformLocationWith2f(res, this.resolution.x, this.resolution.y);
            this.program.setUniformLocationWith1f(ba, this.time);
        }
        this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program);
    };
    WaterWaveEffect.prototype.setProgram = function (node, program) {
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(program);
            node.setGLProgramState(glProgram_state);
        }
        else {
            node.setShaderProgram(program);
        }
    };
    WaterWaveEffect.prototype.update = function (dt) {
        this.time = (Date.now() - this.startTime) / 1000;
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
    WaterWaveEffect = __decorate([
        ccclass
    ], WaterWaveEffect);
    return WaterWaveEffect;
}(cc.Component));
exports.default = WaterWaveEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxXYXRlcldhdmVFZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsY0FBYztBQUNkLGVBQWU7QUFDZiwwQ0FBMEM7QUFDMUMsaURBQXdDO0FBQ2xDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBb0VDO1FBakVHLGVBQVMsR0FBVSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDOUIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUVqQixnQkFBVSxHQUFDLEVBQUUsQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUM7O0lBOEQvQixDQUFDO0lBNURHLGdDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxDQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUVwQixDQUFDO0lBRUQsK0JBQUssR0FBTDtJQUNBLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLHVCQUFTLENBQUMsY0FBYyxFQUFFLHVCQUFTLENBQUMs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SSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMvRSxlQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEQ7aUJBQU07Z0JBQ0gsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hEO1NBQ0o7SUFDTCxDQUFDO0lBbkVnQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBb0VuQztJQUFELHNCQUFDO0NBcEVELEFBb0VDLENBcEU0QyxFQUFFLENBQUMsU0FBUyxHQW9FeEQ7a0JBcEVvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRmVvZm94IEdhbWVcclxuLy8gQXV0aG9yOkxlcnJ5XHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9meWx6MTEyNS9TaGFkZXJEZW1vc1xyXG5pbXBvcnQgV2F0ZXJXYXZlIGZyb20gJy4vV2F0ZXJXYXZlRnJhZyc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYXRlcldhdmVFZmZlY3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByb2dyYW06IGNjLkdMUHJvZ3JhbTtcclxuICAgIHN0YXJ0VGltZTpudW1iZXIgPSBEYXRlLm5vdygpO1xyXG4gICAgdGltZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICByZXNvbHV0aW9uPXsgeDowLjAsIHk6MC4wfTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5yZXNvbHV0aW9uLnggPSAoIHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpLndpZHRoICk7XHJcbiAgICAgICAgdGhpcy5yZXNvbHV0aW9uLnkgPSAoIHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCApO1xyXG4gICAgICAgIHRoaXMudXNlV2F0ZXIoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH1cclxuXHJcbiAgICB1c2VXYXRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9ncmFtKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbmV3IGNjLkdMUHJvZ3JhbSgpO1xyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmluaXRXaXRoU3RyaW5nKFdhdGVyV2F2ZS53YXRlcndhdmVfdmVydCwgV2F0ZXJXYXZlLndhdGVyd2F2ZV9mcmFnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uaW5pdFdpdGhWZXJ0ZXhTaGFkZXJCeXRlQXJyYXkoV2F0ZXJXYXZlLndhdGVyd2F2ZV92ZXJ0LCBXYXRlcldhdmUud2F0ZXJ3YXZlX2ZyYWcpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX1BPU0lUSU9OLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1BPU0lUSU9OKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9DT0xPUiwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9DT0xPUik7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfVEVYX0NPT1JELCBjYy5tYWNyby5WRVJURVhfQVRUUklCX1RFWF9DT09SRFMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb2dyYW0ubGluaygpO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbS51c2UoKTtcclxuXHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtRmxvYXQoXCJ0aW1lXCIsIHRoaXMudGltZSk7XHJcbiAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtVmVjMiggXCJyZXNvbHV0aW9uXCIsIHRoaXMucmVzb2x1dGlvbiApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSB0aGlzLnByb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZSggXCJyZXNvbHV0aW9uXCIgKTtcclxuICAgICAgICAgICAgbGV0IGJhID0gdGhpcy5wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoXCJ0aW1lXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDJmKCByZXMsIHRoaXMucmVzb2x1dGlvbi54LHRoaXMucmVzb2x1dGlvbi55ICk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMWYoYmEsIHRoaXMudGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0UHJvZ3JhbSh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuX3NnTm9kZSwgdGhpcy5wcm9ncmFtKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9ncmFtKG5vZGU6IGFueSwgcHJvZ3JhbTogYW55KSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgICAgICBub2RlLnNldEdMUHJvZ3JhbVN0YXRlKGdsUHJvZ3JhbV9zdGF0ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbm9kZS5zZXRTaGFkZXJQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLnRpbWUgPSAoRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lKSAvIDEwMDA7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvZ3JhbSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0udXNlKCk7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0odGhpcy5wcm9ncmFtKTtcclxuICAgICAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtRmxvYXQoXCJ0aW1lXCIsIHRoaXMudGltZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3QgPSB0aGlzLnByb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZShcInRpbWVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmKGN0LCB0aGlzLnRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
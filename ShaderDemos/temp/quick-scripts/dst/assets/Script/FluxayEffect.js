
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/FluxayEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e8aabh4tllDR7kMBCxz7hqp', 'FluxayEffect');
// Script/FluxayEffect.ts

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
var FluxayFrag_1 = require("./FluxayFrag");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FluxayEffect = /** @class */ (function (_super) {
    __extends(FluxayEffect, _super);
    function FluxayEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mode = 0;
        _this.fragStr = null;
        _this.startTime = Date.now();
        _this.time = 0;
        return _this;
    }
    FluxayEffect.prototype.onLoad = function () {
        if (this.mode == 0) {
            this.fragStr = FluxayFrag_1.default.fluxay_frag;
        }
        else {
            this.fragStr = FluxayFrag_1.default.fluxay_frag_super;
        }
        this.useWater();
    };
    FluxayEffect.prototype.start = function () {
    };
    FluxayEffect.prototype.useWater = function () {
        this.program = new cc.GLProgram();
        if (cc.sys.isNative) {
            this.program.initWithString(FluxayFrag_1.default.fluxay_vert, this.fragStr);
        }
        else {
            this.program.initWithVertexShaderByteArray(FluxayFrag_1.default.fluxay_vert, this.fragStr);
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
        }
        else {
            var ba = this.program.getUniformLocationForName("time");
            this.program.setUniformLocationWith1f(ba, this.time);
        }
        this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program);
    };
    FluxayEffect.prototype.setProgram = function (node, program) {
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(program);
            node.setGLProgramState(glProgram_state);
        }
        else {
            node.setShaderProgram(program);
        }
    };
    FluxayEffect.prototype.update = function (dt) {
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
    __decorate([
        property
    ], FluxayEffect.prototype, "mode", void 0);
    FluxayEffect = __decorate([
        ccclass
    ], FluxayEffect);
    return FluxayEffect;
}(cc.Component));
exports.default = FluxayEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxGbHV4YXlFZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsY0FBYztBQUNkLGVBQWU7QUFDZiwwQ0FBMEM7QUFDMUMsMkNBQWtDO0FBRTVCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBbUVDO1FBakVHLFVBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsYUFBTyxHQUFXLElBQUksQ0FBQztRQUV2QixlQUFTLEdBQVUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzlCLFVBQUksR0FBVyxDQUFDLENBQUM7O0lBNkRyQixDQUFDO0lBMURHLDZCQUFNLEdBQU47UUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQU0sQ0FBQyxXQUFXLENBQUM7U0FDckM7YUFBTTtZQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQU0sQ0FBQyxpQkFBaUIsQ0FBQztTQUMzQztRQUNELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsNEJBQUssR0FBTDtJQUNBLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLG9CQUFNLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqRTthQUFNO1lBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxvQkFBTSxDQUFDLFdBQVcsRUFBRSxJ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QztDQW5FRCxBQW1FQyxDQW5FeUMsRUFBRSxDQUFDLFNBQVMsR0FtRXJEO2tCQW5Fb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZlb2ZveCBHYW1lXHJcbi8vIEF1dGhvcjpMZXJyeVxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZnlsejExMjUvU2hhZGVyRGVtb3NcclxuaW1wb3J0IEZsdXhheSBmcm9tICcuL0ZsdXhheUZyYWcnO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbHV4YXlFZmZlY3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtb2RlOiBudW1iZXIgPSAwOyAgICBcclxuICAgIGZyYWdTdHI6IHN0cmluZyA9IG51bGw7XHJcbiAgICBwcm9ncmFtOiBjYy5HTFByb2dyYW07XHJcbiAgICBzdGFydFRpbWU6bnVtYmVyID0gRGF0ZS5ub3coKTtcclxuICAgIHRpbWU6IG51bWJlciA9IDA7XHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5tb2RlID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5mcmFnU3RyID0gRmx1eGF5LmZsdXhheV9mcmFnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJhZ1N0ciA9IEZsdXhheS5mbHV4YXlfZnJhZ19zdXBlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51c2VXYXRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIHVzZVdhdGVyKCkge1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBjYy5HTFByb2dyYW0oKTtcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5pbml0V2l0aFN0cmluZyhGbHV4YXkuZmx1eGF5X3ZlcnQsIHRoaXMuZnJhZ1N0cik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmluaXRXaXRoVmVydGV4U2hhZGVyQnl0ZUFycmF5KEZsdXhheS5mbHV4YXlfdmVydCwgdGhpcy5mcmFnU3RyKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9QT1NJVElPTiwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9QT1NJVElPTik7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfQ09MT1IsIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfQ09MT1IpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX1RFWF9DT09SRCwgY2MubWFjcm8uVkVSVEVYX0FUVFJJQl9URVhfQ09PUkRTKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9ncmFtLmxpbmsoKTtcclxuICAgICAgICB0aGlzLnByb2dyYW0udXBkYXRlVW5pZm9ybXMoKTtcclxuICAgICAgICB0aGlzLnByb2dyYW0udXNlKCk7XHJcblxyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgdmFyIGdsUHJvZ3JhbV9zdGF0ZSA9IGNjLkdMUHJvZ3JhbVN0YXRlLmdldE9yQ3JlYXRlV2l0aEdMUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xyXG4gICAgICAgICAgICBnbFByb2dyYW1fc3RhdGUuc2V0VW5pZm9ybUZsb2F0KFwidGltZVwiLCB0aGlzLnRpbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBiYSA9IHRoaXMucHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lKFwidGltZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgxZihiYSwgdGhpcy50aW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRQcm9ncmFtKHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5fc2dOb2RlLCB0aGlzLnByb2dyYW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFByb2dyYW0obm9kZTogYW55LCBwcm9ncmFtOiBhbnkpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0ocHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0R0xQcm9ncmFtU3RhdGUoZ2xQcm9ncmFtX3N0YXRlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub2RlLnNldFNoYWRlclByb2dyYW0ocHJvZ3JhbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMudGltZSA9IChEYXRlLm5vdygpIC0gdGhpcy5zdGFydFRpbWUpIC8gMTAwMDtcclxuICAgICAgICBpZiAodGhpcy5wcm9ncmFtKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS51c2UoKTtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGdsUHJvZ3JhbV9zdGF0ZSA9IGNjLkdMUHJvZ3JhbVN0YXRlLmdldE9yQ3JlYXRlV2l0aEdMUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xyXG4gICAgICAgICAgICAgICAgZ2xQcm9ncmFtX3N0YXRlLnNldFVuaWZvcm1GbG9hdChcInRpbWVcIiwgdGhpcy50aW1lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdCA9IHRoaXMucHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb25Gb3JOYW1lKFwidGltZVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMWYoY3QsIHRoaXMudGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
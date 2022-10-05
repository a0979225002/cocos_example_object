
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/DissolveEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '831c4Ne7TdMaYLo5lnjBd8e', 'DissolveEffect');
// Script/DissolveEffect.ts

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
var DissolveFrag_1 = require("./DissolveFrag");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DissolveEffect = /** @class */ (function (_super) {
    __extends(DissolveEffect, _super);
    function DissolveEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.noiseTexture = null;
        _this.startTime = Date.now();
        _this.time = 0.;
        return _this;
    }
    DissolveEffect.prototype.onLoad = function () {
        this.enabled = false;
    };
    DissolveEffect.prototype.useDissolve = function () {
        // 绑定噪音纹理
        var texture1 = this.noiseTexture.getTexture();
        var gltext1 = texture1._glID;
        if (cc.sys.isNative) {
        }
        else {
            cc.gl.bindTexture2DN(1, texture1);
        }
        this.program = new cc.GLProgram();
        if (cc.sys.isNative) {
            this.program.initWithString(DissolveFrag_1.default.vert, DissolveFrag_1.default.frag);
        }
        else {
            this.program.initWithVertexShaderByteArray(DissolveFrag_1.default.vert, DissolveFrag_1.default.frag);
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
            glProgram_state.setUniformTexture("texture1", gltext1);
        }
        else {
            var ba = this.program.getUniformLocationForName("time");
            var text1 = this.program.getUniformLocationForName("texture1");
            this.program.setUniformLocationWith1f(ba, this.time);
            this.program.setUniformLocationWith1i(text1, 1);
        }
        this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program);
        this.enabled = true;
    };
    DissolveEffect.prototype.setProgram = function (node, program) {
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(program);
            node.setGLProgramState(glProgram_state);
        }
        else {
            node.setShaderProgram(program);
        }
    };
    DissolveEffect.prototype.update = function (dt) {
        // 溶解速度
        this.time += 0.008;
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
        property(cc.SpriteFrame)
    ], DissolveEffect.prototype, "noiseTexture", void 0);
    DissolveEffect = __decorate([
        ccclass
    ], DissolveEffect);
    return DissolveEffect;
}(cc.Component));
exports.default = DissolveEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEaXNzb2x2ZUVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBMEM7QUFDcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUEwRUM7UUF2RUcsa0JBQVksR0FBbUIsSUFBSSxDQUFDO1FBR3BDLGVBQVMsR0FBVSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDOUIsVUFBSSxHQUFXLEVBQUUsQ0FBQzs7SUFtRXRCLENBQUM7SUFoRUcsK0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0ksU0FBUztRQUNULElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDOUMsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUM3QixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1NBQ3BCO2FBQ0k7WUFDRCxFQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDckM7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2xDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsc0JBQVksQ0FBQyxJQUFJLEVBQUUsc0JBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyRTthQUFNO1lBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxzQkFBWSxDQUFDLElBQUksRUFBRSxzQkFB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QUFDLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4RDtTQUNKO0lBQ0wsQ0FBQztJQXRFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3dEQUNXO0lBSG5CLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0EwRWxDO0lBQUQscUJBQUM7Q0ExRUQsQUEwRUMsQ0ExRTJDLEVBQUUsQ0FBQyxTQUFTLEdBMEV2RDtrQkExRW9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlzc29sdmVGcmFnIGZyb20gJy4vRGlzc29sdmVGcmFnJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3NvbHZlRWZmZWN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBub2lzZVRleHR1cmU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBwcm9ncmFtOiBjYy5HTFByb2dyYW07XHJcbiAgICBzdGFydFRpbWU6bnVtYmVyID0gRGF0ZS5ub3coKTtcclxuICAgIHRpbWU6IG51bWJlciA9IDAuO1xyXG5cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRGlzc29sdmUoKSB7XHJcbiAgICAgICAgLy8g57uR5a6a5Zmq6Z+z57q555CGXHJcbiAgICAgICAgbGV0IHRleHR1cmUxID0gdGhpcy5ub2lzZVRleHR1cmUuZ2V0VGV4dHVyZSgpO1xyXG4gICAgICAgIGxldCBnbHRleHQxID0gdGV4dHVyZTEuX2dsSUQ7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2MuZ2wuYmluZFRleHR1cmUyRE4oMSwgdGV4dHVyZTEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbmV3IGNjLkdMUHJvZ3JhbSgpO1xyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmluaXRXaXRoU3RyaW5nKERpc3NvbHZlRnJhZy52ZXJ0LCBEaXNzb2x2ZUZyYWcuZnJhZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmluaXRXaXRoVmVydGV4U2hhZGVyQnl0ZUFycmF5KERpc3NvbHZlRnJhZy52ZXJ0LCBEaXNzb2x2ZUZyYWcuZnJhZyk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfUE9TSVRJT04sIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfUE9TSVRJT04pO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX0NPTE9SLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX0NPTE9SKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9URVhfQ09PUkQsIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfVEVYX0NPT1JEUyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvZ3JhbS5saW5rKCk7XHJcbiAgICAgICAgdGhpcy5wcm9ncmFtLnVwZGF0ZVVuaWZvcm1zKCk7XHJcbiAgICAgICAgdGhpcy5wcm9ncmFtLnVzZSgpO1xyXG5cclxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHZhciBnbFByb2dyYW1fc3RhdGUgPSBjYy5HTFByb2dyYW1TdGF0ZS5nZXRPckNyZWF0ZVdpdGhHTFByb2dyYW0odGhpcy5wcm9ncmFtKTtcclxuICAgICAgICAgICAgZ2xQcm9ncmFtX3N0YXRlLnNldFVuaWZvcm1GbG9hdChcInRpbWVcIiwgdGhpcy50aW1lKTtcclxuICAgICAgICAgICAgZ2xQcm9ncmFtX3N0YXRlLnNldFVuaWZvcm1UZXh0dXJlKFwidGV4dHVyZTFcIiwgZ2x0ZXh0MSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGJhID0gdGhpcy5wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoXCJ0aW1lXCIpO1xyXG4gICAgICAgICAgICBsZXQgdGV4dDEgPSB0aGlzLnByb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZShcInRleHR1cmUxXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmKGJhLCB0aGlzLnRpbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFpKHRleHQxLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRQcm9ncmFtKHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5fc2dOb2RlLCB0aGlzLnByb2dyYW0pO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvZ3JhbShub2RlOiBhbnksIHByb2dyYW06IGFueSkge1xyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgdmFyIGdsUHJvZ3JhbV9zdGF0ZSA9IGNjLkdMUHJvZ3JhbVN0YXRlLmdldE9yQ3JlYXRlV2l0aEdMUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgICAgICAgICAgbm9kZS5zZXRHTFByb2dyYW1TdGF0ZShnbFByb2dyYW1fc3RhdGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0U2hhZGVyUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy8g5rq26Kej6YCf5bqmXHJcbiAgICAgICAgdGhpcy50aW1lICs9IDAuMDA4O1xyXG4gICAgICAgIGlmICh0aGlzLnByb2dyYW0pIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnVzZSgpO1xyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgICAgICAgICBnbFByb2dyYW1fc3RhdGUuc2V0VW5pZm9ybUZsb2F0KFwidGltZVwiLCB0aGlzLnRpbWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN0ID0gdGhpcy5wcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbkZvck5hbWUoXCJ0aW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnNldFVuaWZvcm1Mb2NhdGlvbldpdGgxZihjdCwgdGhpcy50aW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
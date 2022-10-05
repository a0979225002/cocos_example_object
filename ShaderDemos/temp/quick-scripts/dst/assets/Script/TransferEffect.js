
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/TransferEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1b90/rohdEk4SdmmEZANaD', 'TransferEffect');
// Script/TransferEffect.ts

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
var TransferFrag_1 = require("./TransferFrag");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TransferEffect = /** @class */ (function (_super) {
    __extends(TransferEffect, _super);
    function TransferEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAllChildrenUse = false;
        _this.time = 0;
        return _this;
    }
    TransferEffect.prototype.start = function () {
        // init logic
        this.enabled = false;
    };
    TransferEffect.prototype.useShader = function () {
        var bgSp = this.node.getComponent(cc.Sprite);
        this.program = new cc.GLProgram();
        if (!cc.sys.isNative) {
            this.program.initWithVertexShaderByteArray(TransferFrag_1.default.vert, TransferFrag_1.default.frag);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
        }
        else {
            this.program.initWithString(TransferFrag_1.default.vert, TransferFrag_1.default.frag);
        }
        this.program.link();
        this.program.updateUniforms();
        this.program.use();
        if (!cc.sys.isNative) {
            var time = this.program.getUniformLocationForName("time");
            this.program.setUniformLocationWith1f(time, this.time);
        }
        else {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
            glProgram_state.setUniformFloat("time", this.time);
        }
        // bgSp._sgNode.setShaderProgram(this.program);
        // this.enabled = true;
        if (this.isAllChildrenUse) {
            this.setProgram(this.node._sgNode, this.program);
        }
        else {
            this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program);
        }
        this.enabled = true;
    };
    TransferEffect.prototype.setProgram = function (node, program) {
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
    TransferEffect.prototype.update = function (dt) {
        this.time += 0.02;
        if (this.program) {
            this.program.use();
            if (!cc.sys.isNative) {
                var time = this.program.getUniformLocationForName("time");
                this.program.setUniformLocationWith1f(time, this.time);
            }
            else {
                var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.program);
                glProgram_state.setUniformFloat("time", this.time);
            }
        }
    };
    __decorate([
        property
    ], TransferEffect.prototype, "isAllChildrenUse", void 0);
    TransferEffect = __decorate([
        ccclass
    ], TransferEffect);
    return TransferEffect;
}(cc.Component));
exports.default = TransferEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUcmFuc2ZlckVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBc0M7QUFDaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUE0RUM7UUF4RUcsc0JBQWdCLEdBQVksS0FBSyxDQUFDO1FBR2xDLFVBQUksR0FBVyxDQUFDLENBQUM7O0lBcUVyQixDQUFDO0lBbkVHLDhCQUFLLEdBQUw7UUFDSSxhQUFhO1FBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVELGtDQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksR0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxzQkFBUSxDQUFDLElBQUksRUFBRSxzQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQzdGLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3ZGLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFD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QUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDL0UsZUFBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3REO1NBQ0o7SUFDTCxDQUFDO0lBdkVEO1FBREMsUUFBUTs0REFDeUI7SUFKakIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQTRFbEM7SUFBRCxxQkFBQztDQTVFRCxBQTRFQyxDQTVFMkMsRUFBRSxDQUFDLFNBQVMsR0E0RXZEO2tCQTVFb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFuc2ZlciBmcm9tICcuL1RyYW5zZmVyRnJhZyc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2ZlckVmZmVjdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgaXNBbGxDaGlsZHJlblVzZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByb2dyYW06IGNjLkdMUHJvZ3JhbTtcclxuICAgIHRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gaW5pdCBsb2dpY1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZVNoYWRlcigpIHtcclxuICAgICAgICBsZXQgYmdTcDogY2MuU3ByaXRlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBjYy5HTFByb2dyYW0oKTtcclxuICAgICAgICBpZiAoIWNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uaW5pdFdpdGhWZXJ0ZXhTaGFkZXJCeXRlQXJyYXkoVHJhbnNmZXIudmVydCwgVHJhbnNmZXIuZnJhZyk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfUE9TSVRJT04sIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfUE9TSVRJT04pO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX0NPTE9SLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX0NPTE9SKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9URVhfQ09PUkQsIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfVEVYX0NPT1JEUyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmluaXRXaXRoU3RyaW5nKFRyYW5zZmVyLnZlcnQsIFRyYW5zZmVyLmZyYWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb2dyYW0ubGluaygpO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbS51c2UoKTtcclxuXHJcbiAgICAgICAgaWYgKCFjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgbGV0IHRpbWUgPSB0aGlzLnByb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZShcInRpbWVcIik7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5zZXRVbmlmb3JtTG9jYXRpb25XaXRoMWYodGltZSwgdGhpcy50aW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgICAgIGdsUHJvZ3JhbV9zdGF0ZS5zZXRVbmlmb3JtRmxvYXQoXCJ0aW1lXCIsIHRoaXMudGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGJnU3AuX3NnTm9kZS5zZXRTaGFkZXJQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgLy8gdGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5pc0FsbENoaWxkcmVuVXNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZ3JhbSh0aGlzLm5vZGUuX3NnTm9kZSwgdGhpcy5wcm9ncmFtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFByb2dyYW0odGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLl9zZ05vZGUsIHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvZ3JhbShub2RlOiBhbnksIHByb2dyYW06IGFueSkge1xyXG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgdmFyIGdsUHJvZ3JhbV9zdGF0ZSA9IGNjLkdMUHJvZ3JhbVN0YXRlLmdldE9yQ3JlYXRlV2l0aEdMUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgICAgICAgICAgbm9kZS5zZXRHTFByb2dyYW1TdGF0ZShnbFByb2dyYW1fc3RhdGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0U2hhZGVyUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbjtcclxuICAgICAgICBpZiAoIWNoaWxkcmVuKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRQcm9ncmFtKGNoaWxkcmVuW2ldLCBwcm9ncmFtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMudGltZSArPSAwLjAyO1xyXG4gICAgICAgIGlmICh0aGlzLnByb2dyYW0pIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnVzZSgpO1xyXG4gICAgICAgICAgICBpZiAoIWNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWUgPSB0aGlzLnByb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uRm9yTmFtZShcInRpbWVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW0uc2V0VW5pZm9ybUxvY2F0aW9uV2l0aDFmKHRpbWUsIHRoaXMudGltZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgICAgICAgICBnbFByb2dyYW1fc3RhdGUuc2V0VW5pZm9ybUZsb2F0KFwidGltZVwiLCB0aGlzLnRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
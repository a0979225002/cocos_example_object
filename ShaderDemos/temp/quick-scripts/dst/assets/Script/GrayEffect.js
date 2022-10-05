
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GrayEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '25ea7qT3A5DTrk6mpTAwlYf', 'GrayEffect');
// Script/GrayEffect.ts

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
var GrayFrag_1 = require("./GrayFrag");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GrayEffect = /** @class */ (function (_super) {
    __extends(GrayEffect, _super);
    function GrayEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAllChildrenUse = false;
        return _this;
    }
    GrayEffect.prototype.onLoad = function () {
        this.grayShader();
    };
    // 变灰shader
    GrayEffect.prototype.grayShader = function () {
        this.program = new cc.GLProgram();
        if (cc.sys.isNative) {
            this.program.initWithString(GrayFrag_1.default.default_vert, GrayFrag_1.default.gray_frag);
            this.program.link();
            this.program.updateUniforms();
        }
        else {
            this.program.initWithVertexShaderByteArray(GrayFrag_1.default.default_vert, GrayFrag_1.default.gray_frag);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
            this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
            this.program.link();
            this.program.updateUniforms();
        }
        if (this.isAllChildrenUse) {
            this.setProgram(this.node._sgNode, this.program);
        }
        else {
            this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program);
        }
    };
    GrayEffect.prototype.setProgram = function (node, program) {
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
    // 恢复默认shader
    GrayEffect.prototype.resetProgram = function (node) {
        node.getComponent(cc.Sprite)._sgNode.setState(0);
        var children = node.children;
        if (!children)
            return;
        for (var i = 0; i < children.length; i++) {
            this.resetProgram(children[i]);
        }
    };
    GrayEffect.prototype.resetShader = function () {
        if (this.isAllChildrenUse) {
            this.resetProgram(this.node);
        }
        else {
            this.node.getComponent(cc.Sprite)._sgNode.setState(0);
        }
    };
    __decorate([
        property
    ], GrayEffect.prototype, "isAllChildrenUse", void 0);
    GrayEffect = __decorate([
        ccclass
    ], GrayEffect);
    return GrayEffect;
}(cc.Component));
exports.default = GrayEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHcmF5RWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE4QjtBQUN4QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQTtBQUczQztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQXFFQztRQW5FRyxzQkFBZ0IsR0FBWSxLQUFLLENBQUM7O0lBbUV0QyxDQUFDO0lBL0RHLDJCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFdBQVc7SUFDWCwrQkFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLGtCQUFJLENBQUMsWUFBWSxFQUFFLGtCQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ2pDO2FBQU07WUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLDZCQUE2QixDQUFDLGtCQUFJLENBQUMsWUFBWSxFQUFFLGtCQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDOUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDN0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDdkYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDaEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEQ7YUFBTTtZQUNILElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDNUU7SUFFTCxDQUFDO0lBRUQsK0JBQVUsR0FBVixVQUFXLElBQVMsRUFBRSxPQUFZO1FBQzlCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsQztRQUVELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVE7WUFDVCxPQUFPO1FBRVgsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDekM7SUFDTCxDQUFDO0lBRUQsYUFBYTtJQUNiLGlDQUFZLEdBQVosVUFBYSxJQUFhO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUTtZQUNULE9BQU87UUFDWCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xDO0lBRUwsQ0FBQztJQUVELGdDQUFXLEdBQVg7UUFDSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQzthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekQ7SUFDTCxDQUFDO0lBbEVEO1FBREMsUUFBUTt3REFDeUI7SUFGakIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXFFOUI7SUFBRCxpQkFBQztDQXJFRCxBQXFFQyxDQXJFdUMsRUFBRSxDQUFDLFNBQVMsR0FxRW5EO2tCQXJFb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHcmF5IGZyb20gJy4vR3JheUZyYWcnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmF5RWZmZWN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgaXNBbGxDaGlsZHJlblVzZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByb2dyYW06IGNjLkdMUHJvZ3JhbTsvLyBTaGFkZXJQcm9ncmFtXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuZ3JheVNoYWRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWPmOeBsHNoYWRlclxyXG4gICAgZ3JheVNoYWRlcigpIHtcclxuICAgICAgICB0aGlzLnByb2dyYW0gPSBuZXcgY2MuR0xQcm9ncmFtKCk7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uaW5pdFdpdGhTdHJpbmcoR3JheS5kZWZhdWx0X3ZlcnQsIEdyYXkuZ3JheV9mcmFnKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmxpbmsoKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLnVwZGF0ZVVuaWZvcm1zKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmluaXRXaXRoVmVydGV4U2hhZGVyQnl0ZUFycmF5KEdyYXkuZGVmYXVsdF92ZXJ0LCBHcmF5LmdyYXlfZnJhZyk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5hZGRBdHRyaWJ1dGUoY2MubWFjcm8uQVRUUklCVVRFX05BTUVfUE9TSVRJT04sIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfUE9TSVRJT04pO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uYWRkQXR0cmlidXRlKGNjLm1hY3JvLkFUVFJJQlVURV9OQU1FX0NPTE9SLCBjYy5tYWNyby5WRVJURVhfQVRUUklCX0NPTE9SKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtLmFkZEF0dHJpYnV0ZShjYy5tYWNyby5BVFRSSUJVVEVfTkFNRV9URVhfQ09PUkQsIGNjLm1hY3JvLlZFUlRFWF9BVFRSSUJfVEVYX0NPT1JEUyk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5saW5rKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc0FsbENoaWxkcmVuVXNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZ3JhbSh0aGlzLm5vZGUuX3NnTm9kZSwgdGhpcy5wcm9ncmFtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFByb2dyYW0odGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLl9zZ05vZGUsIHRoaXMucHJvZ3JhbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9ncmFtKG5vZGU6IGFueSwgcHJvZ3JhbTogYW55KSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXIgZ2xQcm9ncmFtX3N0YXRlID0gY2MuR0xQcm9ncmFtU3RhdGUuZ2V0T3JDcmVhdGVXaXRoR0xQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgICAgICBub2RlLnNldEdMUHJvZ3JhbVN0YXRlKGdsUHJvZ3JhbV9zdGF0ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbm9kZS5zZXRTaGFkZXJQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbjtcclxuICAgICAgICBpZiAoIWNoaWxkcmVuKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRQcm9ncmFtKGNoaWxkcmVuW2ldLCBwcm9ncmFtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5oGi5aSN6buY6K6kc2hhZGVyXHJcbiAgICByZXNldFByb2dyYW0obm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuX3NnTm9kZS5zZXRTdGF0ZSgwKTtcclxuICAgICAgICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuO1xyXG4gICAgICAgIGlmICghY2hpbGRyZW4pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQcm9ncmFtKGNoaWxkcmVuW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRTaGFkZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBbGxDaGlsZHJlblVzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0UHJvZ3JhbSh0aGlzLm5vZGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5fc2dOb2RlLnNldFN0YXRlKDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==
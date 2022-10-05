
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/shader/MaterialComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1051azP8/dDh4jHNUC7U4lc', 'MaterialComponent');
// Script/shader/MaterialComponent.ts

"use strict";
// Author：lerry（大掌教）
// 详细教程请关注博客和微信公众号
// csdn：https://darkpalm.blog.csdn.net
// 微信公众号ID：darkpalm
// Q群：704391772
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
var MaterialManager_1 = require("./MaterialManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, executeInEditMode = _a.executeInEditMode;
var NeedUpdate = [MaterialManager_1.ShaderType.WaterWave, MaterialManager_1.ShaderType.StartLighting];
var ShaderComponent = /** @class */ (function (_super) {
    __extends(ShaderComponent, _super);
    function ShaderComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._shader = MaterialManager_1.ShaderType.Normal;
        _this._time = 0;
        _this._startIndex = Date.now();
        return _this;
    }
    Object.defineProperty(ShaderComponent.prototype, "shader", {
        get: function () { return this._shader; },
        set: function (type) {
            this._shader = type;
            this._setMaterial();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShaderComponent.prototype, "material", {
        get: function () { return this._material; },
        enumerable: false,
        configurable: true
    });
    ShaderComponent.prototype.start = function () {
        this.getComponent(cc.Sprite).setState(cc.Sprite.State.NORMAL);
        this._setMaterial();
    };
    ShaderComponent.prototype.update = function (dt) {
        if (!this._material)
            return;
        this._updateShaderTime(dt);
    };
    ShaderComponent.prototype._setMaterial = function () {
        var shader = this.shader;
        var sprite = this.getComponent(cc.Sprite);
        var material = MaterialManager_1.default.getMaterial(sprite, shader);
        this._material = material;
        if (!material)
            return;
        switch (shader) {
            case MaterialManager_1.ShaderType.WaterWave:
            case MaterialManager_1.ShaderType.StartLighting:
            case MaterialManager_1.ShaderType.Blackhole:
                material.setResolution(this.node.width, this.node.height);
                break;
            default:
                break;
        }
    };
    /**
     * 随时间更新shader
     * @param dt 每帧时间
     */
    ShaderComponent.prototype._updateShaderTime = function (dt) {
        if (NeedUpdate.indexOf(this._shader) >= 0) {
            this._time = (Date.now() - this._startIndex) / 1000;
            this._material.setTime(this._time);
        }
    };
    __decorate([
        property({ type: cc.Enum(MaterialManager_1.ShaderType), visible: false })
    ], ShaderComponent.prototype, "_shader", void 0);
    __decorate([
        property({
            type: cc.Enum(MaterialManager_1.ShaderEffects),
            displayName: "着色器"
        })
    ], ShaderComponent.prototype, "shader", null);
    ShaderComponent = __decorate([
        ccclass,
        executeInEditMode,
        requireComponent(cc.Sprite)
    ], ShaderComponent);
    return ShaderComponent;
}(cc.Component));
exports.default = ShaderComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzaGFkZXJcXE1hdGVyaWFsQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLHNDQUFzQztBQUN0QyxtQkFBbUI7QUFDbkIsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2YscURBQStFO0FBRXpFLElBQUEsS0FBNkQsRUFBRSxDQUFDLFVBQVUsRUFBeEUsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsZ0JBQWdCLHNCQUFBLEVBQUUsaUJBQWlCLHVCQUFrQixDQUFDO0FBRWpGLElBQU0sVUFBVSxHQUFHLENBQUMsNEJBQVUsQ0FBQyxTQUFTLEVBQUMsNEJBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUtuRTtJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQTBEQztRQXZEVyxhQUFPLEdBQWUsNEJBQVUsQ0FBQyxNQUFNLENBQUM7UUFZeEMsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGlCQUFXLEdBQVUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDOztJQTBDNUMsQ0FBQztJQWpERyxzQkFBSSxtQ0FBTTthQUFWLGNBQWUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNyQyxVQUFXLElBQUk7WUFDWCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQzs7O09BSm9DO0lBU3JDLHNCQUFJLHFDQUFRO2FBQVosY0FBaUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFL0IsK0JBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFeEIsQ0FBQztJQUVTLGdDQUFNLEdBQWhCLFVBQWlCLEVBQUU7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU8sc0NBQVksR0FBcEI7UUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3pCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLElBQUksUUFBUSxHQUFHLHlCQUFlLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDdEIsUUFBUSxNQUFNLEVBQUU7WUFDWixLQUFLLDRCQUFVLENBQUMsU0FBUyxDQUFDO1lBQzFCLEtBQUssNEJBQVUsQ0FBQyxhQUFhLENBQUM7WUFDOUIsS0FBSyw0QkFBVSxDQUFDLFNBQVM7Z0JBQ3JCLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDMUQsTUFBTTtZQUNWO2dCQUNJLE1BQU07U0FDYjtJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSywyQ0FBaUIsR0FBekIsVUFBMEIsRUFBRTtRQUN4QixJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztJQXRERDtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLDRCQUFVLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7b0RBQ1I7SUFNaEQ7UUFKQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQywrQkFBYSxDQUFDO1lBQzVCLFdBQVcsRUFBQyxLQUFLO1NBQ3BCLENBQUM7aURBQ21DO0lBVHBCLGVBQWU7UUFIbkMsT0FBTztRQUNQLGlCQUFpQjtRQUNqQixnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO09BQ1AsZUFBZSxDQTBEbkM7SUFBRCxzQkFBQztDQTFERCxBQTBEQyxDQTFENEMsRUFBRSxDQUFDLFNBQVMsR0EwRHhEO2tCQTFEb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEF1dGhvcu+8mmxlcnJ577yI5aSn5o6M5pWZ77yJXHJcbi8vIOivpue7huaVmeeoi+ivt+WFs+azqOWNmuWuouWSjOW+ruS/oeWFrOS8l+WPt1xyXG4vLyBjc2Ru77yaaHR0cHM6Ly9kYXJrcGFsbS5ibG9nLmNzZG4ubmV0XHJcbi8vIOW+ruS/oeWFrOS8l+WPt0lE77yaZGFya3BhbG1cclxuLy8gUee+pO+8mjcwNDM5MTc3MlxyXG5cclxuaW1wb3J0IE1hdGVyaWFsU2luZ2xldG9uIGZyb20gXCIuL01hdGVyaWFsU2luZ2xldG9uXCI7XHJcbmltcG9ydCBNYXRlcmlhbE1hbmFnZXIsIHsgU2hhZGVyVHlwZSwgU2hhZGVyRWZmZWN0cyB9IGZyb20gXCIuL01hdGVyaWFsTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgcmVxdWlyZUNvbXBvbmVudCwgZXhlY3V0ZUluRWRpdE1vZGUgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5jb25zdCBOZWVkVXBkYXRlID0gW1NoYWRlclR5cGUuV2F0ZXJXYXZlLFNoYWRlclR5cGUuU3RhcnRMaWdodGluZ107XHJcblxyXG5AY2NjbGFzc1xyXG5AZXhlY3V0ZUluRWRpdE1vZGVcclxuQHJlcXVpcmVDb21wb25lbnQoY2MuU3ByaXRlKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFkZXJDb21wb25lbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oU2hhZGVyVHlwZSksIHZpc2libGU6IGZhbHNlIH0pXHJcbiAgICBwcml2YXRlIF9zaGFkZXI6IFNoYWRlclR5cGUgPSBTaGFkZXJUeXBlLk5vcm1hbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkVudW0oU2hhZGVyRWZmZWN0cyksXHJcbiAgICAgICAgZGlzcGxheU5hbWU6XCLnnYDoibLlmahcIlxyXG4gICAgfSlcclxuICAgIGdldCBzaGFkZXIoKSB7IHJldHVybiB0aGlzLl9zaGFkZXI7IH1cclxuICAgIHNldCBzaGFkZXIodHlwZSkge1xyXG4gICAgICAgIHRoaXMuX3NoYWRlciA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5fc2V0TWF0ZXJpYWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF90aW1lID0gMDtcclxuICAgIHByaXZhdGUgX3N0YXJ0SW5kZXg6bnVtYmVyID0gRGF0ZS5ub3coKTtcclxuICAgIHByaXZhdGUgIF9tYXRlcmlhbDogTWF0ZXJpYWxTaW5nbGV0b247XHJcbiAgICBnZXQgbWF0ZXJpYWwoKSB7IHJldHVybiB0aGlzLl9tYXRlcmlhbDsgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNldFN0YXRlKGNjLlNwcml0ZS5TdGF0ZS5OT1JNQUwpO1xyXG4gICAgICAgIHRoaXMuX3NldE1hdGVyaWFsKCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fbWF0ZXJpYWwpIHJldHVybjtcclxuICAgICAgICB0aGlzLl91cGRhdGVTaGFkZXJUaW1lKGR0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zZXRNYXRlcmlhbCgpIHtcclxuICAgICAgICBsZXQgc2hhZGVyID0gdGhpcy5zaGFkZXI7XHJcbiAgICAgICAgbGV0IHNwcml0ZSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgbGV0IG1hdGVyaWFsID0gTWF0ZXJpYWxNYW5hZ2VyLmdldE1hdGVyaWFsKHNwcml0ZSwgc2hhZGVyKTtcclxuICAgICAgICB0aGlzLl9tYXRlcmlhbCA9IG1hdGVyaWFsO1xyXG4gICAgICAgIGlmICghbWF0ZXJpYWwpIHJldHVybjtcclxuICAgICAgICBzd2l0Y2ggKHNoYWRlcikge1xyXG4gICAgICAgICAgICBjYXNlIFNoYWRlclR5cGUuV2F0ZXJXYXZlOlxyXG4gICAgICAgICAgICBjYXNlIFNoYWRlclR5cGUuU3RhcnRMaWdodGluZzpcclxuICAgICAgICAgICAgY2FzZSBTaGFkZXJUeXBlLkJsYWNraG9sZTpcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLnNldFJlc29sdXRpb24odGhpcy5ub2RlLndpZHRoLCB0aGlzLm5vZGUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqP5pe26Ze05pu05pawc2hhZGVyXHJcbiAgICAgKiBAcGFyYW0gZHQg5q+P5bin5pe26Ze0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3VwZGF0ZVNoYWRlclRpbWUoZHQpIHtcclxuICAgICAgICBpZiAoTmVlZFVwZGF0ZS5pbmRleE9mKHRoaXMuX3NoYWRlcikgPj0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl90aW1lID0gKERhdGUubm93KCkgLSB0aGlzLl9zdGFydEluZGV4KSAvIDEwMDA7XHJcbiAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsLnNldFRpbWUodGhpcy5fdGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
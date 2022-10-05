"use strict";
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
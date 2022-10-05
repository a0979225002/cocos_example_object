"use strict";
cc._RF.push(module, '1c61a8tZbFId421pLOVx0oz', 'MaterialSingleton');
// Script/shader/MaterialSingleton.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var math = cc.vmath;
var renderEngine = cc.renderer.renderEngine;
var Material = renderEngine.Material;
var MaterialSingleton = /** @class */ (function (_super) {
    __extends(MaterialSingleton, _super);
    function MaterialSingleton() {
        return _super.call(this, false) || this;
    }
    MaterialSingleton.getInstance = function (shaderName) {
        if (!this.instance) {
            this.instance = new MaterialSingleton();
        }
        this.instance.initWithName(shaderName);
        return this.instance;
    };
    MaterialSingleton.prototype.initWithName = function (shaderName) {
        var renderer = renderEngine.renderer;
        var gfx = renderEngine.gfx;
        var pass = new renderer.Pass(shaderName);
        pass.setDepth(false, false);
        pass.setCullMode(gfx.CULL_NONE);
        pass.setBlend(gfx.BLEND_FUNC_ADD, gfx.BLEND_SRC_ALPHA, gfx.BLEND_ONE_MINUS_SRC_ALPHA, gfx.BLEND_FUNC_ADD, gfx.BLEND_SRC_ALPHA, gfx.BLEND_ONE_MINUS_SRC_ALPHA);
        var mainTech = new renderer.Technique(['transparent'], [
            { name: 'texture', type: renderer.PARAM_TEXTURE_2D },
            { name: 'pos', type: renderer.PARAM_FLOAT3 },
            { name: 'size', type: renderer.PARAM_FLOAT2 },
            { name: 'iTime', type: renderer.PARAM_FLOAT },
            { name: 'num', type: renderer.PARAM_FLOAT },
            { name: 'resolution', type: renderer.PARAM_FLOAT3 },
        ], [pass]);
        // @ts-ignore
        this._texture = null;
        // @ts-ignore
        this._pos = { x: 0.0, y: 0.0, z: 0.0 };
        // @ts-ignore
        this._size = { x: 0.0, y: 0.0 };
        // @ts-ignore
        this._time = 0.0;
        // @ts-ignore
        this._num = 0.0;
        // @ts-ignore
        this._resolution = math.vec3.create();
        // @ts-ignore
        this._effect = this.effect = new renderer.Effect([
            mainTech
        ], {
            'pos': this._pos,
            'size': this._size,
            'iTime': this._time,
            'num': this._num,
            'resolution': this._resolution
        }, []);
        // @ts-ignore
        this._mainTech = mainTech;
    };
    MaterialSingleton.prototype.setTexture = function (texture) {
        if (this._texture !== texture) {
            // @ts-ignore
            this._texture = texture;
            this._texture.update({
                // 有时候需要反转y轴
                flipY: false,
                // 多级渐进纹理
                mipmap: true
            });
            this._effect.setProperty('texture', texture.getImpl());
            this._texIds['texture'] = texture.getId();
        }
    };
    MaterialSingleton.prototype.setPos = function (x, y, z) {
        this._pos.x = x;
        this._pos.y = y;
        this._pos.z = z;
        this._effect.setProperty('pos', this._pos);
    };
    MaterialSingleton.prototype.setSize = function (x, y) {
        this._size.x = x;
        this._size.y = y;
        this._effect.setProperty('size', this._size);
    };
    MaterialSingleton.prototype.setTime = function (time) {
        // @ts-ignore
        this._time = time;
        this._effect.setProperty('iTime', this._time);
    };
    MaterialSingleton.prototype.setNum = function (num) {
        // @ts-ignore
        this._num = num;
        this._effect.setProperty('num', this._num);
    };
    MaterialSingleton.prototype.setResolution = function (w, h) {
        this._resolution.x = w;
        this._resolution.y = h;
        this._effect.setProperty('resolution', this._resolution);
    };
    MaterialSingleton.instance = null;
    return MaterialSingleton;
}(Material));
exports.default = MaterialSingleton;

cc._RF.pop();
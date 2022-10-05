
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/shader/MaterialSingleton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzaGFkZXJcXE1hdGVyaWFsU2luZ2xldG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGFBQWE7QUFDYixJQUFNLElBQUksR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0FBQ3RCLElBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO0FBQzlDLElBQU0sUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7QUFFdkM7SUFBK0MscUNBQVE7SUFFbkQ7ZUFDSSxrQkFBTSxLQUFLLENBQUM7SUFDaEIsQ0FBQztJQUVhLDZCQUFXLEdBQXpCLFVBQTBCLFVBQWlCO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDdEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFTyx3Q0FBWSxHQUFwQixVQUFxQixVQUFrQjtRQUNuQyxJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO1FBQ3JDLElBQUksR0FBRyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUM7UUFFM0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQ1QsR0FBRyxDQUFDLGNBQWMsRUFDbEIsR0FBRyxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMseUJBQXlCLEVBQ2xELEdB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LENBdEg4QyxRQUFRLEdBc0h0RDtrQkF0SG9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1pZ25vcmVcclxuY29uc3QgbWF0aCA9IGNjLnZtYXRoO1xyXG5jb25zdCByZW5kZXJFbmdpbmUgPSBjYy5yZW5kZXJlci5yZW5kZXJFbmdpbmU7XHJcbmNvbnN0IE1hdGVyaWFsID0gcmVuZGVyRW5naW5lLk1hdGVyaWFsO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0ZXJpYWxTaW5nbGV0b24gZXh0ZW5kcyBNYXRlcmlhbCB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTWF0ZXJpYWxTaW5nbGV0b24gPSBudWxsO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2Uoc2hhZGVyTmFtZTpzdHJpbmcpOiBNYXRlcmlhbFNpbmdsZXRvbiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTWF0ZXJpYWxTaW5nbGV0b24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5pbml0V2l0aE5hbWUoc2hhZGVyTmFtZSlcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRXaXRoTmFtZShzaGFkZXJOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgcmVuZGVyZXIgPSByZW5kZXJFbmdpbmUucmVuZGVyZXI7XHJcbiAgICAgICAgbGV0IGdmeCA9IHJlbmRlckVuZ2luZS5nZng7XHJcblxyXG4gICAgICAgIGxldCBwYXNzID0gbmV3IHJlbmRlcmVyLlBhc3Moc2hhZGVyTmFtZSk7XHJcbiAgICAgICAgcGFzcy5zZXREZXB0aChmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgIHBhc3Muc2V0Q3VsbE1vZGUoZ2Z4LkNVTExfTk9ORSk7XHJcbiAgICAgICAgcGFzcy5zZXRCbGVuZChcclxuICAgICAgICAgICAgZ2Z4LkJMRU5EX0ZVTkNfQURELFxyXG4gICAgICAgICAgICBnZnguQkxFTkRfU1JDX0FMUEhBLCBnZnguQkxFTkRfT05FX01JTlVTX1NSQ19BTFBIQSxcclxuICAgICAgICAgICAgZ2Z4LkJMRU5EX0ZVTkNfQURELFxyXG4gICAgICAgICAgICBnZnguQkxFTkRfU1JDX0FMUEhBLCBnZnguQkxFTkRfT05FX01JTlVTX1NSQ19BTFBIQVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCBtYWluVGVjaCA9IG5ldyByZW5kZXJlci5UZWNobmlxdWUoXHJcbiAgICAgICAgICAgIFsndHJhbnNwYXJlbnQnXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAndGV4dHVyZScsIHR5cGU6IHJlbmRlcmVyLlBBUkFNX1RFWFRVUkVfMkQgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ3BvcycsIHR5cGU6IHJlbmRlcmVyLlBBUkFNX0ZMT0FUMyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnc2l6ZScsIHR5cGU6IHJlbmRlcmVyLlBBUkFNX0ZMT0FUMiB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnaVRpbWUnLCB0eXBlOiByZW5kZXJlci5QQVJBTV9GTE9BVCB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnbnVtJywgdHlwZTogcmVuZGVyZXIuUEFSQU1fRkxPQVQgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ3Jlc29sdXRpb24nLCB0eXBlOiByZW5kZXJlci5QQVJBTV9GTE9BVDMgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW3Bhc3NdXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHRoaXMuX3RleHR1cmUgPSBudWxsO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICB0aGlzLl9wb3MgPSB7IHg6IDAuMCwgeTogMC4wLCB6OiAwLjAgfTtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgdGhpcy5fc2l6ZSA9IHsgeDogMC4wLCB5OiAwLjAgfTtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgdGhpcy5fdGltZSA9IDAuMDtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgdGhpcy5fbnVtID0gMC4wO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICB0aGlzLl9yZXNvbHV0aW9uID0gbWF0aC52ZWMzLmNyZWF0ZSgpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICB0aGlzLl9lZmZlY3QgPSB0aGlzLmVmZmVjdCA9IG5ldyByZW5kZXJlci5FZmZlY3QoXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIG1haW5UZWNoXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICdwb3MnOiB0aGlzLl9wb3MsXHJcbiAgICAgICAgICAgICAgICAnc2l6ZSc6IHRoaXMuX3NpemUsXHJcbiAgICAgICAgICAgICAgICAnaVRpbWUnOiB0aGlzLl90aW1lLFxyXG4gICAgICAgICAgICAgICAgJ251bSc6IHRoaXMuX251bSxcclxuICAgICAgICAgICAgICAgICdyZXNvbHV0aW9uJzogdGhpcy5fcmVzb2x1dGlvblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBbXVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHRoaXMuX21haW5UZWNoID0gbWFpblRlY2g7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGV4dHVyZSh0ZXh0dXJlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RleHR1cmUgIT09IHRleHR1cmUpIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICB0aGlzLl90ZXh0dXJlID0gdGV4dHVyZTtcclxuICAgICAgICAgICAgdGhpcy5fdGV4dHVyZS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgLy8g5pyJ5pe25YCZ6ZyA6KaB5Y+N6L2seei9tFxyXG4gICAgICAgICAgICAgICAgZmxpcFk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8g5aSa57qn5riQ6L+b57q555CGXHJcbiAgICAgICAgICAgICAgICBtaXBtYXA6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2VmZmVjdC5zZXRQcm9wZXJ0eSgndGV4dHVyZScsIHRleHR1cmUuZ2V0SW1wbCgpKTtcclxuICAgICAgICAgICAgdGhpcy5fdGV4SWRzWyd0ZXh0dXJlJ10gPSB0ZXh0dXJlLmdldElkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFBvcyh4LCB5LCB6KSB7XHJcbiAgICAgICAgdGhpcy5fcG9zLnggPSB4O1xyXG4gICAgICAgIHRoaXMuX3Bvcy55ID0geTtcclxuICAgICAgICB0aGlzLl9wb3MueiA9IHo7XHJcbiAgICAgICAgdGhpcy5fZWZmZWN0LnNldFByb3BlcnR5KCdwb3MnLCB0aGlzLl9wb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNpemUoeCwgeSkge1xyXG4gICAgICAgIHRoaXMuX3NpemUueCA9IHg7XHJcbiAgICAgICAgdGhpcy5fc2l6ZS55ID0geTtcclxuICAgICAgICB0aGlzLl9lZmZlY3Quc2V0UHJvcGVydHkoJ3NpemUnLCB0aGlzLl9zaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lKHRpbWUpIHtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgdGhpcy5fdGltZSA9IHRpbWU7XHJcbiAgICAgICAgdGhpcy5fZWZmZWN0LnNldFByb3BlcnR5KCdpVGltZScsIHRoaXMuX3RpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE51bShudW0pIHtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgdGhpcy5fbnVtID0gbnVtO1xyXG4gICAgICAgIHRoaXMuX2VmZmVjdC5zZXRQcm9wZXJ0eSgnbnVtJywgdGhpcy5fbnVtKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRSZXNvbHV0aW9uKHcsIGgpIHtcclxuICAgICAgICB0aGlzLl9yZXNvbHV0aW9uLnggPSB3O1xyXG4gICAgICAgIHRoaXMuX3Jlc29sdXRpb24ueSA9IGg7XHJcbiAgICAgICAgdGhpcy5fZWZmZWN0LnNldFByb3BlcnR5KCdyZXNvbHV0aW9uJywgdGhpcy5fcmVzb2x1dGlvbik7XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==
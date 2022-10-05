
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ssr/fbo/component/FBONodeTargetComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ebf13MKw2pNWZFXXVkQ7L4A', 'FBONodeTargetComponent');
// scripts/ssr/fbo/component/FBONodeTargetComponent.js

"use strict";

/****************************************************************************
 Copyright (c) 2017-2020 SuperSuRaccoon
 
 Site: http://www.supersuraccoon-cocos2d.com
 Mail: supersuraccoon@gmail.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
var ssr = require("../namespace/FBONamespace");
/**
 * 指定[目标纹理] 的FBO 专用类
 * @class FBONodeTargetComponent
 * @extends FBONodeComponent
 */


ssr.FBO.Component.Target = cc.Class({
  "extends": ssr.FBO.Component.Core,
  editor: CC_EDITOR && {
    menu: 'ssr/FBO/Target',
    executeInEditMode: true
  },
  properties: {
    _target: null,
    target: {
      type: cc.Node,
      get: function get() {
        return this._target;
      },
      set: function set(val) {
        this._target = val;
        this.updateTarget();
      },
      tooltip: "FBO 目标节点"
    },
    _syncAngle: false,
    syncAngle: {
      get: function get() {
        return this._syncAngle;
      },
      set: function set(val) {
        this._syncAngle = val;
      },
      tooltip: "是否需要动态监测目标旋转角度"
    },
    _syncScale: false,
    syncScale: {
      get: function get() {
        return this._syncScale;
      },
      set: function set(val) {
        this._syncScale = val;
      },
      tooltip: "是否需要动态监测目标缩放大小"
    },
    _syncSize: false,
    syncSize: {
      get: function get() {
        return this._syncSize;
      },
      set: function set(val) {
        this._syncSize = val;
      },
      tooltip: "是否需要动态监测目标大小"
    },
    _syncAnchor: false,
    syncAnchor: {
      get: function get() {
        return this._syncAnchor;
      },
      set: function set(val) {
        this._syncAnchor = val;
      },
      tooltip: "是否需要动态监测目标锚点"
    },
    _offsetX: 0,
    offsetX: {
      type: cc.Float,
      get: function get() {
        return this._offsetX;
      },
      set: function set(val) {
        this._offsetX = val;
        this.updateTarget();
      },
      tooltip: "FBO 渲染区域 X轴方向偏移量"
    },
    _offsetY: 0,
    offsetY: {
      type: cc.Float,
      get: function get() {
        return this._offsetY;
      },
      set: function set(val) {
        this._offsetY = val;
        this.updateTarget();
      }
    },
    _inflateW: 0,
    inflateW: {
      type: cc.Float,
      get: function get() {
        return this._inflateW;
      },
      set: function set(val) {
        this._inflateW = val;
        this.updateTarget();
      },
      tooltip: "FBO 渲染区域 宽度扩展范围"
    },
    _inflateH: 0,
    inflateH: {
      type: cc.Float,
      get: function get() {
        return this._inflateH;
      },
      set: function set(val) {
        this._inflateH = val;
        this.updateTarget();
      },
      tooltip: "FBO 渲染区域 高度扩展范围"
    }
  },

  /**
   * 重写初始化 RenderTexture 对象，纹理大小为目标对象尺寸
   * @method _initFBORenderTexture
   * @private
   */
  _initFBORenderTexture: function _initFBORenderTexture() {
    this._super();

    if (this.target) {
      this._renderTexture.initWithSize(this.target.width + this.inflateW, this.target.height + this.inflateH, cc.gfx.RB_FMT_S8);
    }
  },

  /**
      * 重写初始化 FBO 专用 cc.Camera , 设置 cullingMask，开启自定义大小模式
      * @method _initFBOCamera
      * @private
      */
  _initFBOCamera: function _initFBOCamera() {
    this._super();

    this._fboCamera.cullingMask = 0x00000000;
    this._fboCamera.cullingMask |= ~(1 << this.node.groupIndex);
    this._fboCamera.alignWithScreen = false;

    if (this.target) {
      this._fboCamera.orthoSize = (this.target.height + this.inflateH) / 2;
    }
  },

  /**
      * 重写update 生命周期函数，渲染前后更新节点的坐标
      * @method update
      */
  updateFBO: function updateFBO() {
    if (!this.target) {
      return;
    }

    var oldPosition = this.node.position;

    if (this.syncAngle && this._targetAngleOld != this.target.angle) {
      this._targetAngleOld = this.target.angle;
      this.node.angle = this.target.angle = 0;
    }

    if (this.syncScale) {
      if (this._targetScaleXOld != this.target.scaleX) {
        this._targetScaleXOld = this.target.scaleX;
      }

      if (this._targetScaleYOld != this.target.scaleY) {
        this._targetScaleYOld = this.target.scaleY;
      }

      this.node.scaleX = this.target.scaleX = 1;
      this.node.scaleY = this.target.scaleY = 1;
    }

    if (this.syncAnchor) {
      if (this._targetAnchorXOld != this.target.anchorX) {
        this._targetAnchorXOld = this.target.anchorX;
      }

      if (this._targetAnchorYOld != this.target.anchorY) {
        this._targetAnchorYOld = this.target.anchorY;
      }

      this.node.anchorX = this.target.anchorX = 0.5;
      this.node.anchorY = this.target.anchorY = 0.5;
    }

    if (this.syncSize) {
      if (this._targetWidthOld != this.target.width || this._targetHeightOld != this.target.height) {
        this._targetWidthOld = this.target.width;
        this._targetHeightOld = this.target.height;
        this.node.width = this.target.width + this.inflateW;
        this.node.height = this.target.height + this.inflateH;

        this._updateRenderTextureSize(this.target.width + this.inflateW, this.target.height + this.inflateH);

        if (this._fboCamera) {
          this._fboCamera.targetTexture = this._renderTexture;
          this._fboCamera.orthoSize = (this.target.height + this.inflateH) / 2;
        }
      }
    }

    this.node.position = cc.v3(this.target.position.x - this.offsetX, this.target.position.y - this.offsetY, 1);
    this.target.group = this.group;

    this._super();

    this.target.group = this._targetGroupOld;

    if (this.syncAngle) {
      this.node.angle = this.target.angle = this._targetAngleOld;
    }

    if (this.syncAnchor) {
      this.node.anchorX = this.target.anchorX = this._targetAnchorXOld;
      this.node.anchorY = this.target.anchorY = this._targetAnchorYOld; // if (this.flipY) {
      // 	this.node.anchorY = 1 - this.node.anchorY;
      // }
    }

    if (this.syncScale) {
      this.node.scaleX = this.target.scaleX = this._targetScaleXOld;
      this.node.scaleY = this.target.scaleY = this._targetScaleYOld; // this.node.scaleY *= (this.flipY ? -1 : 1);
    }

    this.node.position = cc.v3(oldPosition.x, oldPosition.y, 1);
  },

  /**
      * _resetTarget 函数，重置目标
      * @method _resetTarget
      */
  _resetTarget: function _resetTarget() {
    this.node.group = "default";
    this.node.width = 100;
    this.node.height = 100;

    if (this._renderTexture) {
      this._renderTexture.initWithSize(this.node.width, this.node.height, cc.gfx.RB_FMT_S8);
    }

    if (this._fboCamera) {
      this._fboCamera.targetTexture = this._renderTexture;
      this._fboCamera.orthoSize = (this.target.height + this.inflateH) / 2;
    }

    if (this._fboSprite) {
      var fboSpriteFrame = new cc.SpriteFrame();
      this._fboSprite.spriteFrame = fboSpriteFrame;
    }
  },

  /**
      * updateTarget 函数，更新当前 FBO 的对象
      * @param {cc.Node} target
      * @method updateTarget
      */
  updateTarget: function updateTarget() {
    if (!this.target) {
      this._resetTarget();

      return;
    }

    this.node.width = this.target.width + this.inflateW;
    this.node.height = this.target.height + this.inflateH;

    if (this._renderTexture) {
      this._renderTexture.initWithSize(this.target.width + this.inflateW, this.target.height + this.inflateH, cc.gfx.RB_FMT_S8);
    }

    if (this._fboCamera) {
      this._fboCamera.targetTexture = this._renderTexture;
      this._fboCamera.orthoSize = (this.target.height + this.inflateH) / 2;
    } //


    this._targetGroupOld = this.target.group;
    this._targetAngleOld = 0;
    this._targetScaleXOld = 0;
    this._targetScaleYOld = 0;
    this._targetWidthOld = 0;
    this._targetHeightOld = 0;
    this._targetAnchorXOld = 0;
    this._targetAnchorYOld = 0;
  },

  /**
      * __preload 函数，编辑器用，锁定部分属性
      * @method __preload
      */
  __preload: function __preload() {
    if (CC_EDITOR) {
      var Flags = cc.Object.Flags; // this._objFlags |= (Flags.IsAnchorLocked | Flags.IsSizeLocked | Flags.IsRotationLocked | Flags.IsScaleLocked);
    }
  },
  onLoad: function onLoad() {
    this._super(); //


    this.node.group = "default";
    this.updateTarget();
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3NyXFxmYm9cXGNvbXBvbmVudFxcRkJPTm9kZVRhcmdldENvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJzc3IiLCJyZXF1aXJlIiwiRkJPIiwiQ29tcG9uZW50IiwiVGFyZ2V0IiwiY2MiLCJDbGFzcyIsIkNvcmUiLCJlZGl0b3IiLCJDQ19FRElUT1IiLCJtZW51IiwiZXhlY3V0ZUluRWRpdE1vZGUiLCJwcm9wZXJ0aWVzIiwiX3RhcmdldCIsInRhcmdldCIsInR5cGUiLCJOb2RlIiwiZ2V0Iiwic2V0IiwidmFsIiwidXBkYXRlVGFyZ2V0IiwidG9vbHRpcCIsIl9zeW5jQW5nbGUiLCJzeW5jQW5nbGUiLCJfc3luY1NjYWxlIiwic3luY1NjYWxlIiwiX3N5bmNTaXplIiwic3luY1NpemUiLCJfc3luY0FuY2hvciIsInN5bmNBbmNob3IiLCJfb2Zmc2V0WCIsIm9mZnNldFgiLCJGbG9hdCIsIl9vZmZzZXRZIiwib2Zmc2V0WSIsIl9pbmZsYXRlVyIsImluZmxhdGVXIiwiX2luZmxhdGVIIiwiaW5mbGF0ZUgiLCJfaW5pdEZCT1JlbmRlclRleHR1cmUiLCJfc3VwZXIiLCJfcmVuZGVyVGV4dHVyZSIsImluaXRXaXRoU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiZ2Z4IiwiUkJfRk1UX1M4IiwiX2luaXRGQk9DYW1lcmEiLCJfZmJvQ2FtZXJhIiwiY3VsbGluZ01hc2siLCJub2RlIiwiZ3JvdXBJbmRleCIsImFsaWduV2l0aFNjcmVlbiIsIm9ydGhvU2l6ZSIsInVwZGF0ZUZCTyIsIm9sZFBvc2l0aW9uIiwicG9zaXRpb24iLCJfdGFyZ2V0QW5nbGVPbGQiLCJhbmdsZSIsIl90YXJnZXRTY2FsZVhPbGQiLCJzY2FsZVgiLCJfdGFyZ2V0U2NhbGVZT2xkIiwic2NhbGVZIiwiX3RhcmdldEFuY2hvclhPbGQiLCJhbmNob3JYIiwiX3RhcmdldEFuY2hvcllPbGQiLCJhbmNob3JZIiwiX3RhcmdldFdpZHRoT2xkIiwiX3RhcmdldEhlaWdodE9sZCIsIl91cGRhdGVSZW5kZXJUZXh0dXJlU2l6ZSIsInRhcmdldFRleHR1cmUiLCJ2MyIsIngiLCJ5IiwiZ3JvdXAiLCJfdGFyZ2V0R3JvdXBPbGQiLCJfcmVzZXRUYXJnZXQiLCJfZmJvU3ByaXRlIiwiZmJvU3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsInNwcml0ZUZyYW1lIiwiX19wcmVsb2FkIiwiRmxhZ3MiLCJPYmplY3QiLCJvbkxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyxHQUFHQyxPQUFPLENBQUMsMkJBQUQsQ0FBbkI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQUQsR0FBRyxDQUFDRSxHQUFKLENBQVFDLFNBQVIsQ0FBa0JDLE1BQWxCLEdBQTJCQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNoQyxhQUFTTixHQUFHLENBQUNFLEdBQUosQ0FBUUMsU0FBUixDQUFrQkksSUFESztBQUVoQ0MsRUFBQUEsTUFBTSxFQUFFQyxTQUFTLElBQUk7QUFDakJDLElBQUFBLElBQUksRUFBRSxnQkFEVztBQUVqQkMsSUFBQUEsaUJBQWlCLEVBQUU7QUFGRixHQUZXO0FBTWhDQyxFQUFBQSxVQUFVLEVBQUU7QUFDWEMsSUFBQUEsT0FBTyxFQUFFLElBREU7QUFFZEMsSUFBQUEsTUFBTSxFQUFFO0FBQ0pDLE1BQUFBLElBQUksRUFBRVYsRUFBRSxDQUFDVyxJQURMO0FBRUpDLE1BQUFBLEdBRkksaUJBRUc7QUFDSCxlQUFPLEtBQUtKLE9BQVo7QUFDSCxPQUpHO0FBS0pLLE1BQUFBLEdBTEksZUFLQ0MsR0FMRCxFQUtNO0FBQ04sYUFBS04sT0FBTCxHQUFlTSxHQUFmO0FBQ0EsYUFBS0MsWUFBTDtBQUNILE9BUkc7QUFTSkMs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QUt0RCxZQUFMO0FBQ0E7QUF4UWtDLENBQVQsQ0FBM0IiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMjAgU3VwZXJTdVJhY2Nvb25cbiBcbiBTaXRlOiBodHRwOi8vd3d3LnN1cGVyc3VyYWNjb29uLWNvY29zMmQuY29tXG4gTWFpbDogc3VwZXJzdXJhY2Nvb25AZ21haWwuY29tXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuIFxuY29uc3Qgc3NyID0gcmVxdWlyZShcIi4uL25hbWVzcGFjZS9GQk9OYW1lc3BhY2VcIik7XG5cbi8qKlxuICog5oyH5a6aW+ebruagh+e6ueeQhl0g55qERkJPIOS4k+eUqOexu1xuICogQGNsYXNzIEZCT05vZGVUYXJnZXRDb21wb25lbnRcbiAqIEBleHRlbmRzIEZCT05vZGVDb21wb25lbnRcbiAqL1xuc3NyLkZCTy5Db21wb25lbnQuVGFyZ2V0ID0gY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IHNzci5GQk8uQ29tcG9uZW50LkNvcmUsXG4gICAgZWRpdG9yOiBDQ19FRElUT1IgJiYge1xuICAgICAgICBtZW51OiAnc3NyL0ZCTy9UYXJnZXQnLFxuICAgICAgICBleGVjdXRlSW5FZGl0TW9kZTogdHJ1ZSxcbiAgICB9LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICBcdF90YXJnZXQ6IG51bGwsXG5cdFx0dGFyZ2V0OiB7XG5cdFx0ICAgIHR5cGU6IGNjLk5vZGUsXG5cdFx0ICAgIGdldCAoKSB7XG5cdFx0ICAgICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0O1xuXHRcdCAgICB9LFxuXHRcdCAgICBzZXQgKHZhbCkge1xuXHRcdCAgICAgICAgdGhpcy5fdGFyZ2V0ID0gdmFsO1xuXHRcdCAgICAgICAgdGhpcy51cGRhdGVUYXJnZXQoKTtcblx0XHQgICAgfSxcblx0XHQgICAgdG9vbHRpcDogXCJGQk8g55uu5qCH6IqC54K5XCJcblx0XHR9LFxuXHRcdF9zeW5jQW5nbGU6IGZhbHNlLFxuXHRcdHN5bmNBbmdsZToge1xuXHRcdFx0Z2V0ICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3N5bmNBbmdsZTtcblx0XHRcdH0sXG5cdFx0XHRzZXQgKHZhbCkge1xuXHRcdFx0XHR0aGlzLl9zeW5jQW5nbGUgPSB2YWw7XG5cdFx0XHR9LFxuXHRcdFx0dG9vbHRpcDogXCLmmK/lkKbpnIDopoHliqjmgIHnm5HmtYvnm67moIfml4vovazop5LluqZcIlxuXHRcdH0sXG5cdFx0X3N5bmNTY2FsZTogZmFsc2UsXG5cdFx0c3luY1NjYWxlOiB7XG5cdFx0XHRnZXQgKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fc3luY1NjYWxlO1xuXHRcdFx0fSxcblx0XHRcdHNldCAodmFsKSB7XG5cdFx0XHRcdHRoaXMuX3N5bmNTY2FsZSA9IHZhbDtcblx0XHRcdH0sXG5cdFx0XHR0b29sdGlwOiBcIuaYr+WQpumcgOimgeWKqOaAgeebkea1i+ebruagh+e8qeaUvuWkp+Wwj1wiXG5cdFx0fSxcblx0XHRfc3luY1NpemU6IGZhbHNlLFxuXHRcdHN5bmNTaXplOiB7XG5cdFx0XHRnZXQgKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fc3luY1NpemU7XG5cdFx0XHR9LFxuXHRcdFx0c2V0ICh2YWwpIHtcblx0XHRcdFx0dGhpcy5fc3luY1NpemUgPSB2YWw7XG5cdFx0XHR9LFxuXHRcdFx0dG9vbHRpcDogXCLmmK/lkKbpnIDopoHliqjmgIHnm5HmtYvnm67moIflpKflsI9cIlxuXHRcdH0sXG5cdFx0X3N5bmNBbmNob3I6IGZhbHNlLFxuXHRcdHN5bmNBbmNob3I6IHtcblx0XHRcdGdldCAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9zeW5jQW5jaG9yO1xuXHRcdFx0fSxcblx0XHRcdHNldCAodmFsKSB7XG5cdFx0XHRcdHRoaXMuX3N5bmNBbmNob3IgPSB2YWw7XG5cdFx0XHR9LFxuXHRcdFx0dG9vbHRpcDogXCLmmK/lkKbpnIDopoHliqjmgIHnm5HmtYvnm67moIfplJrngrlcIlxuXHRcdH0sXG5cdFx0X29mZnNldFg6IDAsXG5cdFx0b2Zmc2V0WDoge1xuXHRcdFx0dHlwZTogY2MuRmxvYXQsXG5cdFx0XHRnZXQgKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fb2Zmc2V0WDtcblx0XHRcdH0sXG5cdFx0XHRzZXQgKHZhbCkge1xuXHRcdFx0XHR0aGlzLl9vZmZzZXRYID0gdmFsO1xuXHRcdCAgICAgICAgdGhpcy51cGRhdGVUYXJnZXQoKTtcblx0XHRcdH0sXG5cdFx0XHR0b29sdGlwOiBcIkZCTyDmuLLmn5PljLrln58gWOi9tOaWueWQkeWBj+enu+mHj1wiXG5cdFx0fSxcblx0XHRfb2Zmc2V0WTogMCxcblx0XHRvZmZzZXRZOiB7XG5cdFx0XHR0eXBlOiBjYy5GbG9hdCxcblx0XHRcdGdldCAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9vZmZzZXRZO1xuXHRcdFx0fSxcblx0XHRcdHNldCAodmFsKSB7XG5cdFx0XHRcdHRoaXMuX29mZnNldFkgPSB2YWw7XG5cdFx0ICAgICAgICB0aGlzLnVwZGF0ZVRhcmdldCgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0X2luZmxhdGVXOiAwLFxuXHRcdGluZmxhdGVXOiB7XG5cdFx0XHR0eXBlOiBjYy5GbG9hdCxcblx0XHRcdGdldCAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9pbmZsYXRlVztcblx0XHRcdH0sXG5cdFx0XHRzZXQgKHZhbCkge1xuXHRcdFx0XHR0aGlzLl9pbmZsYXRlVyA9IHZhbDtcblx0XHQgICAgICAgIHRoaXMudXBkYXRlVGFyZ2V0KCk7XG5cdFx0XHR9LFxuXHRcdFx0dG9vbHRpcDogXCJGQk8g5riy5p+T5Yy65Z+fIOWuveW6puaJqeWxleiMg+WbtFwiXG5cdFx0fSxcblx0XHRfaW5mbGF0ZUg6IDAsXG5cdFx0aW5mbGF0ZUg6IHtcblx0XHRcdHR5cGU6IGNjLkZsb2F0LFxuXHRcdFx0Z2V0ICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2luZmxhdGVIO1xuXHRcdFx0fSxcblx0XHRcdHNldCAodmFsKSB7XG5cdFx0XHRcdHRoaXMuX2luZmxhdGVIID0gdmFsO1xuXHRcdCAgICAgICAgdGhpcy51cGRhdGVUYXJnZXQoKTtcblx0XHRcdH0sXG5cdFx0XHR0b29sdGlwOiBcIkZCTyDmuLLmn5PljLrln58g6auY5bqm5omp5bGV6IyD5Zu0XCJcblx0XHR9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDph43lhpnliJ3lp4vljJYgUmVuZGVyVGV4dHVyZSDlr7nosaHvvIznurnnkIblpKflsI/kuLrnm67moIflr7nosaHlsLrlr7hcbiAgICAgKiBAbWV0aG9kIF9pbml0RkJPUmVuZGVyVGV4dHVyZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2luaXRGQk9SZW5kZXJUZXh0dXJlICgpIHtcblx0XHR0aGlzLl9zdXBlcigpO1xuXHRcdGlmICh0aGlzLnRhcmdldCkge1xuXHRcdFx0dGhpcy5fcmVuZGVyVGV4dHVyZS5pbml0V2l0aFNpemUodGhpcy50YXJnZXQud2lkdGggKyB0aGlzLmluZmxhdGVXLCB0aGlzLnRhcmdldC5oZWlnaHQgKyB0aGlzLmluZmxhdGVILCBjYy5nZnguUkJfRk1UX1M4KTtcdFxuXHRcdH1cblx0fSxcblx0LyoqXG4gICAgICog6YeN5YaZ5Yid5aeL5YyWIEZCTyDkuJPnlKggY2MuQ2FtZXJhICwg6K6+572uIGN1bGxpbmdNYXNr77yM5byA5ZCv6Ieq5a6a5LmJ5aSn5bCP5qih5byPXG4gICAgICogQG1ldGhvZCBfaW5pdEZCT0NhbWVyYVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG5cdF9pbml0RkJPQ2FtZXJhICgpIHtcblx0XHR0aGlzLl9zdXBlcigpO1xuXHRcdHRoaXMuX2Zib0NhbWVyYS5jdWxsaW5nTWFzayA9IDB4MDAwMDAwMDA7XG4gICAgICAgIHRoaXMuX2Zib0NhbWVyYS5jdWxsaW5nTWFzayB8PSB+KDEgPDwgdGhpcy5ub2RlLmdyb3VwSW5kZXgpO1xuXHRcdHRoaXMuX2Zib0NhbWVyYS5hbGlnbldpdGhTY3JlZW4gPSBmYWxzZTtcblx0XHRpZiAodGhpcy50YXJnZXQpIHtcblx0XHRcdHRoaXMuX2Zib0NhbWVyYS5vcnRob1NpemUgPSAodGhpcy50YXJnZXQuaGVpZ2h0ICsgdGhpcy5pbmZsYXRlSCkgLyAyO1xuXHRcdH1cblx0fSxcblx0LyoqXG4gICAgICog6YeN5YaZdXBkYXRlIOeUn+WRveWRqOacn+WHveaVsO+8jOa4suafk+WJjeWQjuabtOaWsOiKgueCueeahOWdkOagh1xuICAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgICovXG5cdHVwZGF0ZUZCTyAoKSB7XG5cdFx0aWYgKCF0aGlzLnRhcmdldCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRsZXQgb2xkUG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb247XG5cdFx0aWYgKHRoaXMuc3luY0FuZ2xlICYmIHRoaXMuX3RhcmdldEFuZ2xlT2xkICE9IHRoaXMudGFyZ2V0LmFuZ2xlKSB7XG5cdFx0XHR0aGlzLl90YXJnZXRBbmdsZU9sZCA9IHRoaXMudGFyZ2V0LmFuZ2xlO1xuXHRcdFx0dGhpcy5ub2RlLmFuZ2xlID0gdGhpcy50YXJnZXQuYW5nbGUgPSAwO1xuXHRcdH1cblx0XHRpZiAodGhpcy5zeW5jU2NhbGUpIHtcblx0XHRcdGlmICh0aGlzLl90YXJnZXRTY2FsZVhPbGQgIT0gdGhpcy50YXJnZXQuc2NhbGVYKSB7XG5cdFx0XHRcdHRoaXMuX3RhcmdldFNjYWxlWE9sZCA9IHRoaXMudGFyZ2V0LnNjYWxlWDtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLl90YXJnZXRTY2FsZVlPbGQgIT0gdGhpcy50YXJnZXQuc2NhbGVZKSB7XG5cdFx0XHRcdHRoaXMuX3RhcmdldFNjYWxlWU9sZCA9IHRoaXMudGFyZ2V0LnNjYWxlWTtcblx0XHRcdH1cblx0XHRcdHRoaXMubm9kZS5zY2FsZVggPSB0aGlzLnRhcmdldC5zY2FsZVggPSAxO1xuXHRcdFx0dGhpcy5ub2RlLnNjYWxlWSA9IHRoaXMudGFyZ2V0LnNjYWxlWSA9IDE7XG5cdFx0fVxuXHRcdGlmICh0aGlzLnN5bmNBbmNob3IpIHtcblx0XHRcdGlmICh0aGlzLl90YXJnZXRBbmNob3JYT2xkICE9IHRoaXMudGFyZ2V0LmFuY2hvclgpIHtcblx0XHRcdFx0dGhpcy5fdGFyZ2V0QW5jaG9yWE9sZCA9IHRoaXMudGFyZ2V0LmFuY2hvclg7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5fdGFyZ2V0QW5jaG9yWU9sZCAhPSB0aGlzLnRhcmdldC5hbmNob3JZKSB7XG5cdFx0XHRcdHRoaXMuX3RhcmdldEFuY2hvcllPbGQgPSB0aGlzLnRhcmdldC5hbmNob3JZO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5ub2RlLmFuY2hvclggPSB0aGlzLnRhcmdldC5hbmNob3JYID0gMC41O1xuXHRcdFx0dGhpcy5ub2RlLmFuY2hvclkgPSB0aGlzLnRhcmdldC5hbmNob3JZID0gMC41O1xuXHRcdH1cblx0XHRpZiAodGhpcy5zeW5jU2l6ZSkge1xuXHRcdFx0aWYgKHRoaXMuX3RhcmdldFdpZHRoT2xkICE9IHRoaXMudGFyZ2V0LndpZHRoIHx8XG5cdFx0XHRcdHRoaXMuX3RhcmdldEhlaWdodE9sZCAhPSB0aGlzLnRhcmdldC5oZWlnaHQpIHtcblx0XHRcdFx0dGhpcy5fdGFyZ2V0V2lkdGhPbGQgPSB0aGlzLnRhcmdldC53aWR0aDtcblx0XHRcdFx0dGhpcy5fdGFyZ2V0SGVpZ2h0T2xkID0gdGhpcy50YXJnZXQuaGVpZ2h0O1xuXHRcdFx0XHR0aGlzLm5vZGUud2lkdGggPSB0aGlzLnRhcmdldC53aWR0aCArIHRoaXMuaW5mbGF0ZVc7XG5cdFx0ICAgIFx0dGhpcy5ub2RlLmhlaWdodCA9IHRoaXMudGFyZ2V0LmhlaWdodCArIHRoaXMuaW5mbGF0ZUg7XG5cdFx0ICAgIFx0dGhpcy5fdXBkYXRlUmVuZGVyVGV4dHVyZVNpemUodGhpcy50YXJnZXQud2lkdGggKyB0aGlzLmluZmxhdGVXLCB0aGlzLnRhcmdldC5oZWlnaHQgKyB0aGlzLmluZmxhdGVIKTtcblx0XHQgICAgXHRpZiAodGhpcy5fZmJvQ2FtZXJhKSB7XG5cdFx0ICAgIFx0XHR0aGlzLl9mYm9DYW1lcmEudGFyZ2V0VGV4dHVyZSA9IHRoaXMuX3JlbmRlclRleHR1cmU7XG5cdFx0ICAgICAgICBcdHRoaXMuX2Zib0NhbWVyYS5vcnRob1NpemUgPSAodGhpcy50YXJnZXQuaGVpZ2h0ICsgdGhpcy5pbmZsYXRlSCkgLyAyO1xuXHRcdCAgICBcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjModGhpcy50YXJnZXQucG9zaXRpb24ueCAtIHRoaXMub2Zmc2V0WCwgdGhpcy50YXJnZXQucG9zaXRpb24ueSAtIHRoaXMub2Zmc2V0WSwgMSk7XG5cdFx0dGhpcy50YXJnZXQuZ3JvdXAgPSB0aGlzLmdyb3VwO1xuXHRcdHRoaXMuX3N1cGVyKCk7XG5cdFx0dGhpcy50YXJnZXQuZ3JvdXAgPSB0aGlzLl90YXJnZXRHcm91cE9sZDtcblx0XHRpZiAodGhpcy5zeW5jQW5nbGUpIHtcblx0XHRcdHRoaXMubm9kZS5hbmdsZSA9IHRoaXMudGFyZ2V0LmFuZ2xlID0gdGhpcy5fdGFyZ2V0QW5nbGVPbGQ7XG5cdFx0fVxuXHRcdGlmICh0aGlzLnN5bmNBbmNob3IpIHtcblx0XHRcdHRoaXMubm9kZS5hbmNob3JYID0gdGhpcy50YXJnZXQuYW5jaG9yWCA9IHRoaXMuX3RhcmdldEFuY2hvclhPbGQ7XG5cdFx0XHR0aGlzLm5vZGUuYW5jaG9yWSA9IHRoaXMudGFyZ2V0LmFuY2hvclkgPSB0aGlzLl90YXJnZXRBbmNob3JZT2xkO1xuXHRcdFx0Ly8gaWYgKHRoaXMuZmxpcFkpIHtcblx0XHRcdC8vIFx0dGhpcy5ub2RlLmFuY2hvclkgPSAxIC0gdGhpcy5ub2RlLmFuY2hvclk7XG5cdFx0XHQvLyB9XG5cdFx0fVxuXHRcdGlmICh0aGlzLnN5bmNTY2FsZSkge1xuXHRcdFx0dGhpcy5ub2RlLnNjYWxlWCA9IHRoaXMudGFyZ2V0LnNjYWxlWCA9IHRoaXMuX3RhcmdldFNjYWxlWE9sZDtcblx0XHRcdHRoaXMubm9kZS5zY2FsZVkgPSB0aGlzLnRhcmdldC5zY2FsZVkgPSB0aGlzLl90YXJnZXRTY2FsZVlPbGQ7XHRcblx0XHRcdC8vIHRoaXMubm9kZS5zY2FsZVkgKj0gKHRoaXMuZmxpcFkgPyAtMSA6IDEpO1xuXHRcdH1cblx0XHR0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52MyhvbGRQb3NpdGlvbi54LCBvbGRQb3NpdGlvbi55LCAxKTtcblx0fSxcblx0LyoqXG4gICAgICogX3Jlc2V0VGFyZ2V0IOWHveaVsO+8jOmHjee9ruebruagh1xuICAgICAqIEBtZXRob2QgX3Jlc2V0VGFyZ2V0XG4gICAgICovXG5cdF9yZXNldFRhcmdldCAoKSB7XG5cdFx0dGhpcy5ub2RlLmdyb3VwID0gXCJkZWZhdWx0XCI7XG5cdFx0dGhpcy5ub2RlLndpZHRoID0gMTAwO1xuICAgIFx0dGhpcy5ub2RlLmhlaWdodCA9IDEwMDtcbiAgICBcdGlmICh0aGlzLl9yZW5kZXJUZXh0dXJlKSB7XG4gICAgICAgIFx0dGhpcy5fcmVuZGVyVGV4dHVyZS5pbml0V2l0aFNpemUodGhpcy5ub2RlLndpZHRoLCB0aGlzLm5vZGUuaGVpZ2h0LCBjYy5nZnguUkJfRk1UX1M4KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZmJvQ2FtZXJhKSB7XG4gICAgICAgIFx0dGhpcy5fZmJvQ2FtZXJhLnRhcmdldFRleHR1cmUgPSB0aGlzLl9yZW5kZXJUZXh0dXJlO1xuICAgICAgICBcdHRoaXMuX2Zib0NhbWVyYS5vcnRob1NpemUgPSAodGhpcy50YXJnZXQuaGVpZ2h0ICsgdGhpcy5pbmZsYXRlSCkgLyAyO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9mYm9TcHJpdGUpIHtcbiAgICAgICAgXHR2YXIgZmJvU3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUoKTtcbiAgICAgICAgXHR0aGlzLl9mYm9TcHJpdGUuc3ByaXRlRnJhbWUgPSBmYm9TcHJpdGVGcmFtZTtcbiAgICAgICAgfVxuXHR9LFxuXHQvKipcbiAgICAgKiB1cGRhdGVUYXJnZXQg5Ye95pWw77yM5pu05paw5b2T5YmNIEZCTyDnmoTlr7nosaFcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IHRhcmdldFxuICAgICAqIEBtZXRob2QgdXBkYXRlVGFyZ2V0XG4gICAgICovXG5cdHVwZGF0ZVRhcmdldCAoKSB7XG5cdFx0aWYgKCF0aGlzLnRhcmdldCkge1xuXHRcdFx0dGhpcy5fcmVzZXRUYXJnZXQoKTtcbiAgICAgICAgXHRyZXR1cm47XHRcblx0XHR9XG4gICAgICAgIHRoaXMubm9kZS53aWR0aCA9IHRoaXMudGFyZ2V0LndpZHRoICsgdGhpcy5pbmZsYXRlVztcbiAgICBcdHRoaXMubm9kZS5oZWlnaHQgPSB0aGlzLnRhcmdldC5oZWlnaHQgKyB0aGlzLmluZmxhdGVIO1xuICAgICAgICBpZiAodGhpcy5fcmVuZGVyVGV4dHVyZSkge1xuICAgICAgICBcdHRoaXMuX3JlbmRlclRleHR1cmUuaW5pdFdpdGhTaXplKHRoaXMudGFyZ2V0LndpZHRoICsgdGhpcy5pbmZsYXRlVywgdGhpcy50YXJnZXQuaGVpZ2h0ICsgdGhpcy5pbmZsYXRlSCwgY2MuZ2Z4LlJCX0ZNVF9TOCk7XHRcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZmJvQ2FtZXJhKSB7XG4gICAgICAgIFx0dGhpcy5fZmJvQ2FtZXJhLnRhcmdldFRleHR1cmUgPSB0aGlzLl9yZW5kZXJUZXh0dXJlO1xuICAgICAgICBcdHRoaXMuX2Zib0NhbWVyYS5vcnRob1NpemUgPSAodGhpcy50YXJnZXQuaGVpZ2h0ICsgdGhpcy5pbmZsYXRlSCkgLyAyO1xuICAgICAgICB9XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuX3RhcmdldEdyb3VwT2xkID0gdGhpcy50YXJnZXQuZ3JvdXA7XG4gICAgXHR0aGlzLl90YXJnZXRBbmdsZU9sZCA9IDA7XG5cdFx0dGhpcy5fdGFyZ2V0U2NhbGVYT2xkID0gMDtcblx0XHR0aGlzLl90YXJnZXRTY2FsZVlPbGQgPSAwO1xuXHRcdHRoaXMuX3RhcmdldFdpZHRoT2xkID0gMDtcblx0XHR0aGlzLl90YXJnZXRIZWlnaHRPbGQgPSAwO1xuXHRcdHRoaXMuX3RhcmdldEFuY2hvclhPbGQgPSAwO1xuXHRcdHRoaXMuX3RhcmdldEFuY2hvcllPbGQgPSAwO1xuICAgIH0sXG5cdC8qKlxuICAgICAqIF9fcHJlbG9hZCDlh73mlbDvvIznvJbovpHlmajnlKjvvIzplIHlrprpg6jliIblsZ7mgKdcbiAgICAgKiBAbWV0aG9kIF9fcHJlbG9hZFxuICAgICAqL1xuXHRfX3ByZWxvYWQgKCkge1xuICAgICAgICBpZiAoQ0NfRURJVE9SKSB7XG4gICAgICAgICAgICB2YXIgRmxhZ3MgPSBjYy5PYmplY3QuRmxhZ3M7XG4gICAgICAgICAgICAvLyB0aGlzLl9vYmpGbGFncyB8PSAoRmxhZ3MuSXNBbmNob3JMb2NrZWQgfCBGbGFncy5Jc1NpemVMb2NrZWQgfCBGbGFncy5Jc1JvdGF0aW9uTG9ja2VkIHwgRmxhZ3MuSXNTY2FsZUxvY2tlZCk7XG5cdFx0fVxuICAgIH0sXG5cdG9uTG9hZCAoKSB7XG5cdFx0dGhpcy5fc3VwZXIoKTtcblx0XHQvL1xuXHRcdHRoaXMubm9kZS5ncm91cCA9IFwiZGVmYXVsdFwiO1xuXHRcdHRoaXMudXBkYXRlVGFyZ2V0KCk7XG5cdH1cbn0pO1xuIl19
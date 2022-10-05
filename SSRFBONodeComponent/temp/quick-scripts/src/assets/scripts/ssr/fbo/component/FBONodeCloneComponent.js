"use strict";
cc._RF.push(module, '7596cS966dF85SrAvau2uTn', 'FBONodeCloneComponent');
// scripts/ssr/fbo/component/FBONodeCloneComponent.js

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
 * 指定[区域纹理] 的FBO 专用类
 * @class FBONodeRegionComponent
 * @extends FBONodeComponent
 * 主相机      everything &= ~(1 << fbo);
 * 目标对象    fbo
 * fbo相机     nothing |= ~(1 << fbo);
 * fbo对象     clone
 */


ssr.FBO.Component.Clone = cc.Class({
  "extends": require("./FBONodeComponent.js"),
  editor: CC_EDITOR && {
    menu: 'ssr/FBO/Clone',
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
        this.node.width = this._target.width;
        this.node.height = this._target.height;
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
    }
  },
  onEnable: function onEnable() {
    this._registerNodeEvent();
  },
  _registerNodeEvent: function _registerNodeEvent() {
    this.node.on('size-changed', this._updateSize, this);
  },
  _unregisterNodeEvent: function _unregisterNodeEvent() {
    this.node.off('size-changed', this._updateSize, this);
  },
  _updateSize: function _updateSize() {
    this._updateRenderTextureSize(this.node.width, this.node.height);

    this._fboCamera.targetTexture = this._renderTexture;
    this._fboCamera.orthoSize = this.node.height / 2;
  },
  updateTarget: function updateTarget() {
    if (!this.target) {
      return;
    }

    this._targetGroupOld = this.target.group;
    this._targetAngleOld = 0;
    this._targetScaleXOld = 0;
    this._targetScaleYOld = 0;
    this._targetWidthOld = 0;
    this._targetHeightOld = 0;
    this.target.group = this.group;
    this.node.position = cc.v3(this.target.x + this.offsetX * this.target.scaleX, this.target.y + this.offsetY * this.target.scaleY, 1);
  },

  /**
   * 重写初始化 RenderTexture 对象，纹理大小为指定尺寸大小
   * @method _initFBORenderTexture
   * @private
   */
  _initFBORenderTexture: function _initFBORenderTexture() {
    this._super();

    this._renderTexture.initWithSize(this.node.width, this.node.height, cc.gfx.RB_FMT_S8);
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
    this._fboCamera.orthoSize = this.node.height / 2;
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

    this.node.position = cc.v3(this.target.x + this.offsetX * this.target.scaleX, this.target.y + this.offsetY * this.target.scaleY, 1);
    this._fboCamera.orthoSize = this.node.height / 2 * this.target.scaleX;

    this._super();

    this._fboCamera.orthoSize = this.node.height / 2;
    cc.Camera.main.cullingMask &= ~(1 << this.target.groupIndex);

    if (this.syncAngle) {
      this.node.angle = this.target.angle = this._targetAngleOld;
    }

    if (this.syncScale) {
      this.node.scaleX = this.target.scaleX = this._targetScaleXOld;
      this.node.scaleY = this.target.scaleY = this._targetScaleYOld; // this.node.scaleY *= (this.flipY ? -1 : 1);
    }

    this.node.position = cc.v3(oldPosition.x, oldPosition.y, 1);
  },
  __preload: function __preload() {
    if (CC_EDITOR) {
      var Flags = cc.Object.Flags;
      this._objFlags |= Flags.IsScaleLocked | Flags.IsAnchorLocked | Flags.IsPositionLocked;
    }
  },
  onLoad: function onLoad() {
    this._super(); //


    this.node.group = "clone";
    this.updateTarget();
  },
  onDisable: function onDisable() {
    this._unregisterNodeEvent();

    this.target.group = this._targetGroupOld;
  }
});

cc._RF.pop();
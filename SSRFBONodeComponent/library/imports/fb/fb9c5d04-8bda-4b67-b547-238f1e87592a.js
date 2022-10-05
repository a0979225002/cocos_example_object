"use strict";
cc._RF.push(module, 'fb9c50Ei9pLZ7VHI48eh1kq', 'FBONodeComponent');
// scripts/ssr/fbo/component/FBONodeComponent.js

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
 * FBO 更新模式枚举变量
 * @enum FBONodeComponent._updateMode
 * @static
 * @private
 * @namespace FBONodeComponent
 */


var UpdateMode = cc.Enum({
  /**
      * 近更新一次
      * @property {Number} ONCE
      * @static
      */
  ONCE: 0,

  /**
   * 同步更新
   * @property {Number} ONCE
   * @static
   */
  ALWAYS: 1
});
/**
 * FBONodeComponent 组件基类，用于
 * @class FBONodeComponent
 * @extends Component
 */

ssr.FBO.Component.Core = cc.Class({
  "extends": cc.Component,
  properties: {
    /**
     * 在编辑器模式下开启实时刷新预览
     * @property {Boolean} preview
     * @default true
     */
    preview: {
      "default": true,
      editorOnly: true,
      notify: CC_EDITOR && function () {
        if (this.preview) {
          this.updateFBO();
        }
      },
      tooltip: "是否在在编辑器中预览"
    },

    /**
     * 是否需要翻转纹理
     * @property {Boolean} flipY
     * @default true
     */
    _flipY: true,
    flipY: {
      get: function get() {
        return this._flipY;
      },
      set: function set(val) {
        this._flipY = val;

        if (this._fboSprite && this._fboSprite.spriteFrame) {
          this._fboSprite.spriteFrame.setFlipY(val);
        } // this.node.scaleY *= -1;

      },
      tooltip: "是否需要翻转纹理"
    },

    /**
        * FBO 对象默认所属节点的分组。同 cc.Node 的 group 属性
        * @property {String} group
        * @default fbo
        */
    group: {
      "default": "fbo",
      tooltip: "FBO 节点专用的分组名称"
    },
    _updateMode: UpdateMode.ALWAYS,

    /**
        * FBO 对象默认的更新模式
        * @property {UpdateMode} updateMode
        * @default UpdateMode.ALWAYS
        */
    updateMode: {
      type: UpdateMode,
      get: function get() {
        return this._updateMode;
      },
      set: function set(val) {
        this._updateMode = val;
      },
      tooltip: "更新模式，默认实时更新"
    },

    /**
           * 摄像机用于清除屏幕的背景色。
           * @property {Color} backgroundColor
           */
    _backgroundColor: cc.color(0, 0, 0, 0),
    backgroundColor: {
      get: function get() {
        return this._backgroundColor;
      },
      set: function set(value) {
        this._backgroundColor.set(value);

        this._fboCamera.backgroundColor = value;
      },
      tooltip: "摄像机用于清除屏幕的背景色"
    }
  },

  /**
   * 初始化内部数据
   * @method _initData
   * @private
   */
  _initData: function _initData() {
    this._isPaused = false;
  },

  /**
   * 初始化 RenderTexture 对象
   * @method _initFBORenderTexture
   * @private
   */
  _initFBORenderTexture: function _initFBORenderTexture() {
    if (!this._renderTexture) {
      this._renderTexture = new cc.RenderTexture();
    }
  },

  /**
      * 初始化 FBO 最终渲染目标对象 cc.Sprite
      * @method _initFBOSprite
      * @private
      */
  _initFBOSprite: function _initFBOSprite() {
    this._fboSprite = this.node.getComponent(cc.Sprite);

    if (!this._fboSprite) {
      this._fboSprite = this.node.addComponent(cc.Sprite);
    }

    if (!this._fboSprite.spriteFrame) {
      var fboSpriteFrame = new cc.SpriteFrame();
      this._fboSprite.spriteFrame = fboSpriteFrame;

      this._fboSprite.spriteFrame.setFlipY(this.flipY);
    } // this.node.scaleY = this.flipY ? -1 : 1;

  },

  /**
      * 初始化 FBO 专用 cc.Camera
      * @method _initFBOCamera
      * @private
      */
  _initFBOCamera: function _initFBOCamera() {
    this._fboCamera = this.node.getComponent(cc.Camera);

    if (!this._fboCamera) {
      this._fboCamera = this.node.addComponent(cc.Camera);
    }

    this._fboCamera.depth = 0;
    this._fboCamera.clearFlags = cc.Camera.ClearFlags.COLOR;
    this._fboCamera.backgroundColor = this.backgroundColor;
    this._fboCamera.targetTexture = this._renderTexture;
    this._fboCamera.enabled = false;
  },

  /**
   * onLoad 生命周期函数，将本 cc.Node 的 group 切换为用户指定的分组
   * @method onLoad
   */
  onLoad: function onLoad() {
    this.node.group = this.group;
  },

  /**
      * start 生命周期函数，初始化一些内部用对象，调用一次更新 FBO 函数 (UpdateMode.ONCE 模式仅此一次调用)
      * @method start
      */
  start: function start() {
    this._initData();

    this._initFBORenderTexture();

    this._initFBOSprite();

    this._initFBOCamera();

    this.updateFBO();
  },

  /**
   * 更新 RenderTexture 大小
   * @method _updateRenderTextureSize
   * @private
   */
  _updateRenderTextureSize: function _updateRenderTextureSize(width, height) {
    if (!this._renderTexture) {
      return;
    }

    if (window.jsb) {
      // https://forum.cocos.org/t/cc-rendertexture-updatesize/99634
      this._renderTexture.destroy();

      this._renderTexture = new cc.RenderTexture();

      this._renderTexture.initWithSize(width, height, cc.gfx.RB_FMT_S8);
    } else {
      this._renderTexture.updateSize(width, height);
    }
  },

  /**
   * update 生命周期函数，每帧调用，更新 FBO (UpdateMode.ALWAYS 模式每帧调用)
   * @method update
   */
  update: function update() {
    if (CC_EDITOR && !this.preview) {
      return;
    }

    if (this._isPaused) {
      return;
    }

    if (this.updateMode == UpdateMode.ALWAYS) {
      this.updateFBO();
    }
  },

  /**
   * 刷新一次 FBO 并将其渲染到 cc.Sprite 对象中
   * @method updateFBO
   */
  updateFBO: function updateFBO() {
    if (CC_EDITOR && !this.preview) {
      return;
    }

    this._fboCamera.enabled = true;

    this._fboCamera.render(this.target);

    this._fboSprite.spriteFrame.setTexture(this._renderTexture);

    this._fboCamera.enabled = false;
  },

  /**
      * 暂停刷新
      * @method pause
      */
  pause: function pause() {
    this._isPaused = true;
  },

  /**
   * 继续刷新
   * @method resume
   */
  resume: function resume() {
    this._isPaused = false;
  }
});

cc._RF.pop();
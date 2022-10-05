"use strict";
cc._RF.push(module, 'c385biz14hE8pyyt+Tbi/Xk', 'FBONodeInPlaceComponent');
// scripts/ssr/fbo/component/FBONodeInPlaceComponent.js

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
 * 将指定[源区域纹理]渲染到[目标区域] 的FBO 专用类
 * @class FBONodeInPlaceComponent
 * @extends FBONodeComponent
 */


ssr.FBO.Component.InPlace = cc.Class({
  "extends": ssr.FBO.Component.Core,
  editor: CC_EDITOR && {
    menu: 'ssr/FBO/InPlace',
    executeInEditMode: true
  },
  properties: {
    _rect: cc.rect(0, 0, 100, 100),
    rect: {
      get: function get() {
        return this._rect;
      },
      set: function set(val) {
        this._rect = val; //

        this.node.width = this._rect.width;
        this.node.height = this._rect.height;

        this._updateRenderTextureSize(this._rect.width, this._rect.height);

        this._fboCamera.targetTexture = this._renderTexture;
        this._fboCamera.orthoSize = this._rect.height / 2;
        this.updateFBO();
      },
      tooltip: "FBO 目标节点"
    }
  },

  /**
   * 重写初始化 RenderTexture 对象，纹理大小为指定尺寸大小
   * @method _initFBORenderTexture
   * @private
   */
  _initFBORenderTexture: function _initFBORenderTexture() {
    this._super();

    this._renderTexture.initWithSize(this.rect.width, this.rect.height, cc.gfx.RB_FMT_S8);
  },

  /**
   * 重写初始化 FBO 专用 cc.Camera , 设置 cullingMask，开启自定义大小模式
   * @method _initFBOCamera
   * @private
   */
  _initFBOCamera: function _initFBOCamera() {
    this._super();

    this._fboCamera.cullingMask = 0xffffffff;
    this._fboCamera.cullingMask &= ~(1 << this.node.groupIndex);
    this._fboCamera.alignWithScreen = false;
    this._fboCamera.orthoSize = this.rect.height / 2;
  },

  /**
   * 重写update 生命周期函数，渲染前后更新节点的坐标
   * @method update
   */
  updateFBO: function updateFBO() {
    var oldPosition = this.node.position;
    this.node.position = cc.v3(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2, 1);

    this._super();

    this.node.position = cc.v3(oldPosition.x, oldPosition.y, 1);
  },
  onLoad: function onLoad() {
    this._super(); //


    this.node.width = this.rect.width;
    this.node.height = this.rect.height;
  },
  __preload: function __preload() {
    if (CC_EDITOR) {
      var Flags = cc.Object.Flags;
      this._objFlags |= Flags.IsScaleLocked | Flags.IsAnchorLocked | Flags.IsSizeLocked;
    }
  }
});

cc._RF.pop();
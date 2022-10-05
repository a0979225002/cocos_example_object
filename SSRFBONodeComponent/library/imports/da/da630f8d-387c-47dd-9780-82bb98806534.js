"use strict";
cc._RF.push(module, 'da630+NOHxH3ZeAgruYgGU0', 'FBONodeScreenComponent');
// scripts/ssr/fbo/component/FBONodeScreenComponent.js

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
 * 全屏 FBO 专用类
 * @class FBONodeScreenComponent
 * @extends FBONodeComponent
 */


ssr.FBO.Component.Screen = cc.Class({
  "extends": ssr.FBO.Component.Core,
  editor: CC_EDITOR && {
    menu: 'ssr/FBO/Screen',
    executeInEditMode: true
  },
  properties: {},

  /**
   * 重写初始化 RenderTexture 对象，纹理大小为屏幕尺寸大小
   * @method _initFBORenderTexture
   * @private
   */
  _initFBORenderTexture: function _initFBORenderTexture() {
    this._super();

    this._renderTexture.initWithSize(cc.Canvas.instance.node.width, cc.Canvas.instance.node.height, cc.gfx.RB_FMT_S8);
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
  },
  onLoad: function onLoad() {
    this._super(); //


    this.node.width = cc.Canvas.instance.node.width;
    this.node.height = cc.Canvas.instance.node.height;
  }
});

cc._RF.pop();
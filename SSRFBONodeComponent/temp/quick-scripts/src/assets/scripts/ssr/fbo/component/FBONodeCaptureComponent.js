"use strict";
cc._RF.push(module, '1cb8a/AOZxPk5DsfD7bA6BD', 'FBONodeCaptureComponent');
// scripts/ssr/fbo/component/FBONodeCaptureComponent.js

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
 * FBO 对象转化为图片用
 * @class FBONodeCaptureComponent
 * @extends Component
 */


ssr.FBO.Component.Capture = cc.Class({
  "extends": cc.Component,
  editor: CC_EDITOR && {
    menu: 'ssr/FBO/Capture'
  },
  properties: {
    target: cc.Node
  },
  onLoad: function onLoad() {},
  start: function start() {},
  //
  capture: function capture(imageName) {
    imageName = imageName || "fbo.png";

    if (window.jsb) {
      var texture = this.target.getComponent(cc.Sprite).spriteFrame.getTexture();
      var width = texture.width;
      var height = texture.height;
      var data = texture.readPixels();
      var picData = new Uint8Array(width * height * 4);
      var rowBytes = width * 4;

      for (var row = 0; row < height; row++) {
        var srow = height - 1 - row;
        var start = srow * width * 4;
        var reStart = row * width * 4;

        for (var i = 0; i < rowBytes; i++) {
          picData[reStart + i] = data[start + i];
        }
      }

      var filePath = jsb.fileUtils.getWritablePath() + imageName;
      var success = jsb.saveImageData(picData, width, height, filePath);

      if (success) {
        return filePath;
      } else {
        return null;
      }
    } else {
      var texture = this.target.getComponent(cc.Sprite).spriteFrame.getTexture();
      var _width = texture.width;
      var _height = texture.height;

      if (!this._canvas) {
        this._canvas = document.createElement('canvas');
        this._canvas.width = _width;
        this._canvas.height = _height;
      } else {
        this.clearCanvas();
      }

      var ctx = this._canvas.getContext('2d');

      var _data = texture.readPixels();

      var _rowBytes = _width * 4;

      for (var _row = 0; _row < _height; _row++) {
        var _srow = _height - 1 - _row;

        var imageData = ctx.createImageData(_width, 1);

        var _start = _srow * _width * 4;

        for (var _i = 0; _i < _rowBytes; _i++) {
          imageData.data[_i] = _data[_start + _i];
        }

        ctx.putImageData(imageData, 0, _row);
      }

      var dataURL = this._canvas.toDataURL("image/png");

      this._canvas.remove();

      this._canvas = null;
      download(dataURL, imageName, "image/png");
      return imageName;
    }
  }
});

cc._RF.pop();
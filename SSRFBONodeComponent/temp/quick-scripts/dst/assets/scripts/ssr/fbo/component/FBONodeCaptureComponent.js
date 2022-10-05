
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ssr/fbo/component/FBONodeCaptureComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3NyXFxmYm9cXGNvbXBvbmVudFxcRkJPTm9kZUNhcHR1cmVDb21wb25lbnQuanMiXSwibmFtZXMiOlsic3NyIiwicmVxdWlyZSIsIkZCTyIsIkNvbXBvbmVudCIsIkNhcHR1cmUiLCJjYyIsIkNsYXNzIiwiZWRpdG9yIiwiQ0NfRURJVE9SIiwibWVudSIsInByb3BlcnRpZXMiLCJ0YXJnZXQiLCJOb2RlIiwib25Mb2FkIiwic3RhcnQiLCJjYXB0dXJlIiwiaW1hZ2VOYW1lIiwid2luZG93IiwianNiIiwidGV4dHVyZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiZ2V0VGV4dHVyZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGF0YSIsInJlYWRQaXhlbHMiLCJwaWNEYXRhIiwiVWludDhBcnJheSIsInJvd0J5dGVzIiwicm93Iiwic3JvdyIsInJlU3RhcnQiLCJpIiwiZmlsZVBhdGgiLCJmaWxlVXRpbHMiLCJnZXRXcml0YWJsZVBhdGgiLCJzdWNjZXNzIiwic2F2ZUltYWdlRGF0YSIsIl9jYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGVhckNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJpbWFnZURhdGEiLCJjcmVhdGVJbWFnZURhdGEiLCJwdXRJbWFnZURhdGEiLCJkYXRhVVJMIiwidG9EYXRhVVJMIiwicmVtb3ZlIiwiZG93bmxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsR0FBRyxHQUFHQyxPQUFPLENBQUMsMkJBQUQsQ0FBbkI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQUQsR0FBRyxDQUFDRSxHQUFKLENBQVFD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QUtKLE9BQUwsQ0FBYUssVUFBYixDQUF3QixJQUF4QixDQUFWOztBQUNBLFVBQUluQixLQUFJLEdBQUdQLE9BQU8sQ0FBQ1EsVUFBUixFQUFYOztBQUNBLFVBQUlHLFNBQVEsR0FBR04sTUFBSyxHQUFHLENBQXZCOztBQUNBLFdBQUssSUFBSU8sSUFBRyxHQUFHLENBQWYsRUFBa0JBLElBQUcsR0FBR04sT0FBeEIsRUFBZ0NNLElBQUcsRUFBbkMsRUFBdUM7QUFDbkMsWUFBSUMsS0FBSSxHQUFHUCxPQUFNLEdBQUcsQ0FBVCxHQUFhTSxJQUF4Qjs7QUFDQSxZQUFJZSxTQUFTLEdBQUdGLEdBQUcsQ0FBQ0csZUFBSixDQUFvQnZCLE1BQXBCLEVBQTJCLENBQTNCLENBQWhCOztBQUNBLFlBQUlWLE1BQUssR0FBR2tCLEtBQUksR0FBR1IsTUFBUCxHQUFlLENBQTNCOztBQUNBLGFBQUssSUFBSVUsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR0osU0FBcEIsRUFBOEJJLEVBQUMsRUFBL0IsRUFBbUM7QUFDL0JZLFVBQUFBLFNBQVMsQ0FBQ3BCLElBQVYsQ0FBZVEsRUFBZixJQUFvQlIsS0FBSSxDQUFDWixNQUFLLEdBQUdvQixFQUFULENBQXhCO0FBQ0g7O0FBQ0RVLFFBQUFBLEdBQUcsQ0FBQ0ksWUFBSixDQUFpQkYsU0FBakIsRUFBNEIsQ0FBNUIsRUFBK0JmLElBQS9CO0FBQ0g7O0FBQ0QsVUFBSWtCLE9BQU8sR0FBRyxLQUFLVCxPQUFMLENBQWFVLFNBQWIsQ0FBdUIsV0FBdkIsQ0FBZDs7QUFDQSxXQUFLVixPQUFMLENBQWFXLE1BQWI7O0FBQ0EsV0FBS1gsT0FBTCxHQUFlLElBQWY7QUFDQVksTUFBQUEsUUFBUSxDQUFDSCxPQUFELEVBQVVqQyxTQUFWLEVBQXFCLFdBQXJCLENBQVI7QUFDQSxhQUFPQSxTQUFQO0FBQ0g7QUFDSjtBQXJFZ0MsQ0FBVCxDQUE1QiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAyMCBTdXBlclN1UmFjY29vblxuIFxuIFNpdGU6IGh0dHA6Ly93d3cuc3VwZXJzdXJhY2Nvb24tY29jb3MyZC5jb21cbiBNYWlsOiBzdXBlcnN1cmFjY29vbkBnbWFpbC5jb21cblxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gXG5cbmNvbnN0IHNzciA9IHJlcXVpcmUoXCIuLi9uYW1lc3BhY2UvRkJPTmFtZXNwYWNlXCIpO1xuXG4vKipcbiAqIEZCTyDlr7nosaHovazljJbkuLrlm77niYfnlKhcbiAqIEBjbGFzcyBGQk9Ob2RlQ2FwdHVyZUNvbXBvbmVudFxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbnNzci5GQk8uQ29tcG9uZW50LkNhcHR1cmUgPSBjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuICAgIGVkaXRvcjogQ0NfRURJVE9SICYmIHtcbiAgICAgICAgbWVudTogJ3Nzci9GQk8vQ2FwdHVyZSdcbiAgICB9LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICBcdHRhcmdldDogY2MuTm9kZVxuICAgIH0sXG5cdG9uTG9hZCAoKSB7XG5cdH0sXG4gICAgc3RhcnQgKCkge1xuICAgIH0sXG4gICAgLy9cbiAgICBjYXB0dXJlIChpbWFnZU5hbWUpIHtcbiAgICAgICAgaW1hZ2VOYW1lID0gaW1hZ2VOYW1lIHx8IFwiZmJvLnBuZ1wiO1xuICAgICAgICBpZiAod2luZG93LmpzYikge1xuICAgICAgICAgICAgdmFyIHRleHR1cmUgPSB0aGlzLnRhcmdldC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZS5nZXRUZXh0dXJlKCk7XG4gICAgICAgICAgICBsZXQgd2lkdGggPSB0ZXh0dXJlLndpZHRoO1xuICAgICAgICAgICAgbGV0IGhlaWdodCA9IHRleHR1cmUuaGVpZ2h0O1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0ZXh0dXJlLnJlYWRQaXhlbHMoKTtcbiAgICAgICAgICAgIGxldCBwaWNEYXRhID0gbmV3IFVpbnQ4QXJyYXkod2lkdGggKiBoZWlnaHQgKiA0KTtcbiAgICAgICAgICAgIGxldCByb3dCeXRlcyA9IHdpZHRoICogNDtcbiAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGhlaWdodDsgcm93KyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc3JvdyA9IGhlaWdodCAtIDEgLSByb3c7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0ID0gc3JvdyAqIHdpZHRoICogNDtcbiAgICAgICAgICAgICAgICBsZXQgcmVTdGFydCA9IHJvdyAqIHdpZHRoICogNDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd0J5dGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcGljRGF0YVtyZVN0YXJ0ICsgaV0gPSBkYXRhW3N0YXJ0ICsgaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGZpbGVQYXRoID0ganNiLmZpbGVVdGlscy5nZXRXcml0YWJsZVBhdGgoKSArIGltYWdlTmFtZTtcbiAgICAgICAgICAgIGxldCBzdWNjZXNzID0ganNiLnNhdmVJbWFnZURhdGEocGljRGF0YSwgd2lkdGgsIGhlaWdodCwgZmlsZVBhdGgpXG4gICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaWxlUGF0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRleHR1cmUgPSB0aGlzLnRhcmdldC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZS5nZXRUZXh0dXJlKCk7XG4gICAgICAgICAgICBsZXQgd2lkdGggPSB0ZXh0dXJlLndpZHRoO1xuICAgICAgICAgICAgbGV0IGhlaWdodCA9IHRleHR1cmUuaGVpZ2h0O1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9jYW52YXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckNhbnZhcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGN0eCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0ZXh0dXJlLnJlYWRQaXhlbHMoKTtcbiAgICAgICAgICAgIGxldCByb3dCeXRlcyA9IHdpZHRoICogNDsgXG4gICAgICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBoZWlnaHQ7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNyb3cgPSBoZWlnaHQgLSAxIC0gcm93O1xuICAgICAgICAgICAgICAgIGxldCBpbWFnZURhdGEgPSBjdHguY3JlYXRlSW1hZ2VEYXRhKHdpZHRoLCAxKTtcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnQgPSBzcm93ICogd2lkdGggKiA0O1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93Qnl0ZXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGEuZGF0YVtpXSA9IGRhdGFbc3RhcnQgKyBpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3R4LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIHJvdyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZGF0YVVSTCA9IHRoaXMuX2NhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLl9jYW52YXMgPSBudWxsO1xuICAgICAgICAgICAgZG93bmxvYWQoZGF0YVVSTCwgaW1hZ2VOYW1lLCBcImltYWdlL3BuZ1wiKTtcbiAgICAgICAgICAgIHJldHVybiBpbWFnZU5hbWU7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==
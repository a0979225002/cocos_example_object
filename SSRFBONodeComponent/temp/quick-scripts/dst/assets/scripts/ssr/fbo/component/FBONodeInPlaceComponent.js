
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ssr/fbo/component/FBONodeInPlaceComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3NyXFxmYm9cXGNvbXBvbmVudFxcRkJPTm9kZUluUGxhY2VDb21wb25lbnQuanMiXSwibmFtZXMiOlsic3NyIiwicmVxdWlyZSIsIkZCTyIsIkNvbXBvbmVudCIsIkluUGxhY2UiLCJjYyIsIkNsYXNzIiwiQ29yZSIsImVkaXRvciIsIkNDX0VESVRPUiIsIm1lbnUiLCJleGVjdXRlSW5FZGl0TW9kZSIsInByb3BlcnRpZXMiLCJfcmVjdCIsInJlY3QiLCJnZXQiLCJzZXQiLCJ2YWwiLCJub2RlIiwid2lkdGgiLCJoZWlnaHQiLCJfdXBkYXRlUmVuZGVyVGV4dHVyZVNpemUiLCJfZmJvQ2FtZXJhIiwidGFyZ2V0VGV4dHVyZSIsIl9yZW5kZXJUZXh0dXJlIiwib3J0aG9TaXplIiwidXBkYXRlRkJPIiwidG9vbHRpcCIsIl9pbml0RkJPUmVuZGVyVGV4dHVyZSIsIl9zdXBlciIsImluaXRXaXRoU2l6ZSIsImdmeCIsIlJCX0ZNVF9TOCIsIl9pbml0RkJPQ2FtZXJhIiwiY3VsbGluZ01hc2siLCJncm91cEluZGV4IiwiYWxpZ25XaXRoU2NyZWVuIiwib2xkUG9zaXRpb24iLCJwb3NpdGlvbiIsInYzIiwieCIsInkiLCJvbkxvYWQiLCJfX3ByZWxvYWQiLCJGbGFncyIsIk9iamVjdCIsIl9vYmpGbGFncyIsIklzU2NhbGVMb2NrZWQiLCJJc0FuY2hvckxvY2tlZCIsIklzU2l6ZUxvY2tlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLEdBQUdDLE9BQU8sQ0FBQywyQkFBRCxDQUFuQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBRCxHQUFHLENBQUNFLEdBQUosQ0FB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eURqQ0MsRUFBQUEsTUF6RGlDLG9CQXlEdkI7QUFDTixTQUFLYixNQUFMLEdBRE0sQ0FFTjs7O0FBQ0EsU0FBS1gsSUFBTCxDQUFVQyxLQUFWLEdBQWtCLEtBQUtMLElBQUwsQ0FBVUssS0FBNUI7QUFDQSxTQUFLRCxJQUFMLENBQVVFLE1BQVYsR0FBbUIsS0FBS04sSUFBTCxDQUFVTSxNQUE3QjtBQUNILEdBOURnQztBQStEakN1QixFQUFBQSxTQS9EaUMsdUJBK0RwQjtBQUNULFFBQUlsQyxTQUFKLEVBQWU7QUFDWCxVQUFJbUMsS0FBSyxHQUFHdkMsRUFBRSxDQUFDd0MsTUFBSCxDQUFVRCxLQUF0QjtBQUNBLFdBQUtFLFNBQUwsSUFBbUJGLEtBQUssQ0FBQ0csYUFBTixHQUFzQkgsS0FBSyxDQUFDSSxjQUE1QixHQUE2Q0osS0FBSyxDQUFDSyxZQUF0RTtBQUNIO0FBQ0o7QUFwRWdDLENBQVQsQ0FBNUIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMjAgU3VwZXJTdVJhY2Nvb25cbiBcbiBTaXRlOiBodHRwOi8vd3d3LnN1cGVyc3VyYWNjb29uLWNvY29zMmQuY29tXG4gTWFpbDogc3VwZXJzdXJhY2Nvb25AZ21haWwuY29tXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuIFxuY29uc3Qgc3NyID0gcmVxdWlyZShcIi4uL25hbWVzcGFjZS9GQk9OYW1lc3BhY2VcIik7XG5cbi8qKlxuICog5bCG5oyH5a6aW+a6kOWMuuWfn+e6ueeQhl3muLLmn5PliLBb55uu5qCH5Yy65Z+fXSDnmoRGQk8g5LiT55So57G7XG4gKiBAY2xhc3MgRkJPTm9kZUluUGxhY2VDb21wb25lbnRcbiAqIEBleHRlbmRzIEZCT05vZGVDb21wb25lbnRcbiAqL1xuc3NyLkZCTy5Db21wb25lbnQuSW5QbGFjZSA9IGNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBzc3IuRkJPLkNvbXBvbmVudC5Db3JlLFxuICAgIGVkaXRvcjogQ0NfRURJVE9SICYmIHtcbiAgICAgICAgbWVudTogJ3Nzci9GQk8vSW5QbGFjZScsXG4gICAgICAgIGV4ZWN1dGVJbkVkaXRNb2RlOiB0cnVlLFxuICAgIH0sXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBfcmVjdDogY2MucmVjdCgwLCAwLCAxMDAsIDEwMCksXG4gICAgICAgIHJlY3Q6IHtcbiAgICAgICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlY3Q7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0ICh2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWN0ID0gdmFsO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLndpZHRoID0gdGhpcy5fcmVjdC53aWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gdGhpcy5fcmVjdC5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlUmVuZGVyVGV4dHVyZVNpemUodGhpcy5fcmVjdC53aWR0aCwgdGhpcy5fcmVjdC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Zib0NhbWVyYS50YXJnZXRUZXh0dXJlID0gdGhpcy5fcmVuZGVyVGV4dHVyZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9mYm9DYW1lcmEub3J0aG9TaXplID0gdGhpcy5fcmVjdC5oZWlnaHQgLyAyO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRkJPKCk7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwOiBcIkZCTyDnm67moIfoioLngrlcIlxuICAgICAgICB9LFxuICAgIH0sXG4gICAgLyoqXG4gICAgICog6YeN5YaZ5Yid5aeL5YyWIFJlbmRlclRleHR1cmUg5a+56LGh77yM57q555CG5aSn5bCP5Li65oyH5a6a5bC65a+45aSn5bCPXG4gICAgICogQG1ldGhvZCBfaW5pdEZCT1JlbmRlclRleHR1cmVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9pbml0RkJPUmVuZGVyVGV4dHVyZSAoKSB7XG5cdFx0dGhpcy5fc3VwZXIoKTtcblx0XHR0aGlzLl9yZW5kZXJUZXh0dXJlLmluaXRXaXRoU2l6ZSh0aGlzLnJlY3Qud2lkdGgsIHRoaXMucmVjdC5oZWlnaHQsIGNjLmdmeC5SQl9GTVRfUzgpO1x0XG5cdH0sXG4gICAgLyoqXG4gICAgICog6YeN5YaZ5Yid5aeL5YyWIEZCTyDkuJPnlKggY2MuQ2FtZXJhICwg6K6+572uIGN1bGxpbmdNYXNr77yM5byA5ZCv6Ieq5a6a5LmJ5aSn5bCP5qih5byPXG4gICAgICogQG1ldGhvZCBfaW5pdEZCT0NhbWVyYVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG5cdF9pbml0RkJPQ2FtZXJhICgpIHtcblx0XHR0aGlzLl9zdXBlcigpO1xuICAgICAgICB0aGlzLl9mYm9DYW1lcmEuY3VsbGluZ01hc2sgPSAweGZmZmZmZmZmO1xuICAgICAgICB0aGlzLl9mYm9DYW1lcmEuY3VsbGluZ01hc2sgJj0gfigxIDw8IHRoaXMubm9kZS5ncm91cEluZGV4KTtcblx0XHR0aGlzLl9mYm9DYW1lcmEuYWxpZ25XaXRoU2NyZWVuID0gZmFsc2U7XG5cdFx0dGhpcy5fZmJvQ2FtZXJhLm9ydGhvU2l6ZSA9IHRoaXMucmVjdC5oZWlnaHQgLyAyO1xuXHR9LCBcbiAgICAvKipcbiAgICAgKiDph43lhpl1cGRhdGUg55Sf5ZG95ZGo5pyf5Ye95pWw77yM5riy5p+T5YmN5ZCO5pu05paw6IqC54K555qE5Z2Q5qCHXG4gICAgICogQG1ldGhvZCB1cGRhdGVcbiAgICAgKi9cblx0dXBkYXRlRkJPICgpIHtcblx0XHRsZXQgb2xkUG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb247XG5cdFx0dGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjModGhpcy5yZWN0LnggKyB0aGlzLnJlY3Qud2lkdGggLyAyLCB0aGlzLnJlY3QueSArIHRoaXMucmVjdC5oZWlnaHQgLyAyLCAxKTtcblx0XHR0aGlzLl9zdXBlcigpO1xuXHRcdHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYzKG9sZFBvc2l0aW9uLngsIG9sZFBvc2l0aW9uLnksIDEpO1xuXHR9LFxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMuX3N1cGVyKCk7XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMubm9kZS53aWR0aCA9IHRoaXMucmVjdC53aWR0aDtcbiAgICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IHRoaXMucmVjdC5oZWlnaHQ7XG4gICAgfSxcbiAgICBfX3ByZWxvYWQgKCkge1xuICAgICAgICBpZiAoQ0NfRURJVE9SKSB7XG4gICAgICAgICAgICB2YXIgRmxhZ3MgPSBjYy5PYmplY3QuRmxhZ3M7XG4gICAgICAgICAgICB0aGlzLl9vYmpGbGFncyB8PSAoRmxhZ3MuSXNTY2FsZUxvY2tlZCB8IEZsYWdzLklzQW5jaG9yTG9ja2VkIHwgRmxhZ3MuSXNTaXplTG9ja2VkKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19
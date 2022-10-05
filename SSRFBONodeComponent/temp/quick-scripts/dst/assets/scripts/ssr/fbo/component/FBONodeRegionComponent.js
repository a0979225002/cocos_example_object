
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ssr/fbo/component/FBONodeRegionComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2bb847nObZKJIcEUqOdqpEa', 'FBONodeRegionComponent');
// scripts/ssr/fbo/component/FBONodeRegionComponent.js

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
 */


ssr.FBO.Component.Region = cc.Class({
  "extends": ssr.FBO.Component.Core,
  editor: CC_EDITOR && {
    menu: 'ssr/FBO/Region',
    executeInEditMode: true
  },
  properties: {
    _zoom: 1.0,
    zoom: {
      type: cc.Float,
      get: function get() {
        return this._zoom;
      },
      set: function set(val) {
        this._zoom = val;
        this._fboCamera.orthoSize = this.node.height / 2 / this._zoom;
      },
      tooltip: "纹理缩放比率"
    }
  },
  onEnable: function onEnable() {
    this._registerNodeEvent();
  },
  onDisable: function onDisable() {
    this._unregisterNodeEvent();
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
    this._fboCamera.orthoSize = this.node.height / 2 / this.zoom;
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

    this._fboCamera.cullingMask = 0xffffffff;
    this._fboCamera.cullingMask &= ~(1 << this.node.groupIndex);
    this._fboCamera.alignWithScreen = false;
    this._fboCamera.orthoSize = this.node.height / 2 / this.zoom;
  },

  /**
   * 重写update 生命周期函数，渲染前后更新节点的坐标
   * @method update
   */
  updateFBO: function updateFBO() {
    //
    this.node.position = cc.v3(this.node.x, this.node.y, 1);

    this._super();
  },
  __preload: function __preload() {
    if (CC_EDITOR) {
      var Flags = cc.Object.Flags;
      this._objFlags |= Flags.IsScaleLocked | Flags.IsAnchorLocked;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3NyXFxmYm9cXGNvbXBvbmVudFxcRkJPTm9kZVJlZ2lvbkNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJzc3IiLCJyZXF1aXJlIiwiRkJPIiwiQ29tcG9uZW50IiwiUmVnaW9uIiwiY2MiLCJDbGFzcyIsIkNvcmUiLCJlZGl0b3IiLCJDQ19FRElUT1IiLCJtZW51IiwiZXhlY3V0ZUluRWRpdE1vZGUiLCJwcm9wZXJ0aWVzIiwiX3pvb20iLCJ6b29tIiwidHlwZSIsIkZsb2F0IiwiZ2V0Iiwic2V0IiwidmFsIiwiX2Zib0NhbWVyYSIsIm9ydGhvU2l6ZSIsIm5vZGUiLCJoZWlnaHQiLCJ0b29sdGlwIiwib25FbmFibGUiLCJfcmVnaXN0ZXJOb2RlRXZlbnQiLCJvbkRpc2FibGUiLCJfdW5yZWdpc3Rlck5vZGVFdmVudCIsIm9uIiwiX3VwZGF0ZVNpemUiLCJvZmYiLCJfdXBkYXRlUmVuZGVyVGV4dHVyZVNpemUiLCJ3aWR0aCIsInRhcmdldFRleHR1cmUiLCJfcmVuZGVyVGV4dHVyZSIsIl9pbml0RkJPUmVuZGVyVGV4dHVyZSIsIl9zdXBlciIsImluaXRXaXRoU2l6ZSIsImdmeCIsIlJCX0ZNVF9TOCIsIl9pbml0RkJPQ2FtZXJhIiwiY3VsbGluZ01hc2siLCJncm91cEluZGV4IiwiYWxpZ25XaXRoU2NyZWVuIiwidXBkYXRlRkJPIiwicG9zaXRpb24iLCJ2MyIsIngiLCJ5IiwiX19wcmVsb2FkIiwiRmxhZ3MiLCJPYmplY3QiLCJfb2JqRmxhZ3MiLCJJc1NjYWxlTG9ja2VkIiwiSXNBbmNob3JMb2NrZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyxHQUFHQyxPQUFPLENB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LHVCQStEdEI7QUFDTjtBQUNBLFNBQUt2QixJQUFMLENBQVV3QixRQUFWLEdBQXFCekMsRUFBRSxDQUFDMEMsRUFBSCxDQUFNLEtBQUt6QixJQUFMLENBQVUwQixDQUFoQixFQUFtQixLQUFLMUIsSUFBTCxDQUFVMkIsQ0FBN0IsRUFBZ0MsQ0FBaEMsQ0FBckI7O0FBQ04sU0FBS1osTUFBTDtBQUNBLEdBbkVrQztBQW9FaENhLEVBQUFBLFNBcEVnQyx1QkFvRW5CO0FBQ1QsUUFBSXpDLFNBQUosRUFBZTtBQUNYLFVBQUkwQyxLQUFLLEdBQUc5QyxFQUFFLENBQUMrQyxNQUFILENBQVVELEtBQXRCO0FBQ0EsV0FBS0UsU0FBTCxJQUFtQkYsS0FBSyxDQUFDRyxhQUFOLEdBQXNCSCxLQUFLLENBQUNJLGNBQS9DO0FBQ0g7QUFDSjtBQXpFK0IsQ0FBVCxDQUEzQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAyMCBTdXBlclN1UmFjY29vblxuIFxuIFNpdGU6IGh0dHA6Ly93d3cuc3VwZXJzdXJhY2Nvb24tY29jb3MyZC5jb21cbiBNYWlsOiBzdXBlcnN1cmFjY29vbkBnbWFpbC5jb21cblxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gXG5jb25zdCBzc3IgPSByZXF1aXJlKFwiLi4vbmFtZXNwYWNlL0ZCT05hbWVzcGFjZVwiKTtcblxuLyoqXG4gKiDmjIflrppb5Yy65Z+f57q555CGXSDnmoRGQk8g5LiT55So57G7XG4gKiBAY2xhc3MgRkJPTm9kZVJlZ2lvbkNvbXBvbmVudFxuICogQGV4dGVuZHMgRkJPTm9kZUNvbXBvbmVudFxuICovXG5zc3IuRkJPLkNvbXBvbmVudC5SZWdpb24gPSBjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogc3NyLkZCTy5Db21wb25lbnQuQ29yZSxcbiAgICBlZGl0b3I6IENDX0VESVRPUiAmJiB7XG4gICAgICAgIG1lbnU6ICdzc3IvRkJPL1JlZ2lvbicsXG4gICAgICAgIGV4ZWN1dGVJbkVkaXRNb2RlOiB0cnVlLFxuICAgIH0sXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBfem9vbTogMS4wLFxuICAgICAgICB6b29tOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5GbG9hdCxcbiAgICAgICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3pvb207XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0ICh2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl96b29tID0gdmFsO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Zib0NhbWVyYS5vcnRob1NpemUgPSB0aGlzLm5vZGUuaGVpZ2h0IC8gMiAvIHRoaXMuX3pvb207XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbHRpcDogXCLnurnnkIbnvKnmlL7mr5TnjodcIlxuICAgICAgICB9LFxuICAgIH0sXG4gICAgb25FbmFibGUgKCkge1xuICAgICAgICB0aGlzLl9yZWdpc3Rlck5vZGVFdmVudCgpO1xuICAgIH0sXG4gICAgb25EaXNhYmxlICgpIHtcbiAgICAgICAgdGhpcy5fdW5yZWdpc3Rlck5vZGVFdmVudCgpO1xuICAgIH0sXG4gICAgX3JlZ2lzdGVyTm9kZUV2ZW50ICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdzaXplLWNoYW5nZWQnLCB0aGlzLl91cGRhdGVTaXplLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgX3VucmVnaXN0ZXJOb2RlRXZlbnQgKCkge1xuICAgICAgICB0aGlzLm5vZGUub2ZmKCdzaXplLWNoYW5nZWQnLCB0aGlzLl91cGRhdGVTaXplLCB0aGlzKTtcbiAgICB9LFxuICAgIF91cGRhdGVTaXplICgpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlUmVuZGVyVGV4dHVyZVNpemUodGhpcy5ub2RlLndpZHRoLCB0aGlzLm5vZGUuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5fZmJvQ2FtZXJhLnRhcmdldFRleHR1cmUgPSB0aGlzLl9yZW5kZXJUZXh0dXJlO1xuICAgICAgICB0aGlzLl9mYm9DYW1lcmEub3J0aG9TaXplID0gdGhpcy5ub2RlLmhlaWdodCAvIDIgLyB0aGlzLnpvb207XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDph43lhpnliJ3lp4vljJYgUmVuZGVyVGV4dHVyZSDlr7nosaHvvIznurnnkIblpKflsI/kuLrmjIflrprlsLrlr7jlpKflsI9cbiAgICAgKiBAbWV0aG9kIF9pbml0RkJPUmVuZGVyVGV4dHVyZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2luaXRGQk9SZW5kZXJUZXh0dXJlICgpIHtcblx0XHR0aGlzLl9zdXBlcigpO1xuXHRcdHRoaXMuX3JlbmRlclRleHR1cmUuaW5pdFdpdGhTaXplKHRoaXMubm9kZS53aWR0aCwgdGhpcy5ub2RlLmhlaWdodCwgY2MuZ2Z4LlJCX0ZNVF9TOCk7XG5cdH0sXG4gICAgLyoqXG4gICAgICog6YeN5YaZ5Yid5aeL5YyWIEZCTyDkuJPnlKggY2MuQ2FtZXJhICwg6K6+572uIGN1bGxpbmdNYXNr77yM5byA5ZCv6Ieq5a6a5LmJ5aSn5bCP5qih5byPXG4gICAgICogQG1ldGhvZCBfaW5pdEZCT0NhbWVyYVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG5cdF9pbml0RkJPQ2FtZXJhICgpIHtcblx0XHR0aGlzLl9zdXBlcigpO1xuICAgICAgICB0aGlzLl9mYm9DYW1lcmEuY3VsbGluZ01hc2sgPSAweGZmZmZmZmZmO1xuICAgICAgICB0aGlzLl9mYm9DYW1lcmEuY3VsbGluZ01hc2sgJj0gfigxIDw8IHRoaXMubm9kZS5ncm91cEluZGV4KTtcblx0XHR0aGlzLl9mYm9DYW1lcmEuYWxpZ25XaXRoU2NyZWVuID0gZmFsc2U7XG5cdFx0dGhpcy5fZmJvQ2FtZXJhLm9ydGhvU2l6ZSA9IHRoaXMubm9kZS5oZWlnaHQgLyAyIC8gdGhpcy56b29tO1xuXHR9LFxuICAgIC8qKlxuICAgICAqIOmHjeWGmXVwZGF0ZSDnlJ/lkb3lkajmnJ/lh73mlbDvvIzmuLLmn5PliY3lkI7mm7TmlrDoioLngrnnmoTlnZDmoIdcbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVxuICAgICAqL1xuXHR1cGRhdGVGQk8gKCkge1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52Myh0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnksIDEpO1xuXHRcdHRoaXMuX3N1cGVyKCk7XG5cdH0sXG4gICAgX19wcmVsb2FkICgpIHtcbiAgICAgICAgaWYgKENDX0VESVRPUikge1xuICAgICAgICAgICAgdmFyIEZsYWdzID0gY2MuT2JqZWN0LkZsYWdzO1xuICAgICAgICAgICAgdGhpcy5fb2JqRmxhZ3MgfD0gKEZsYWdzLklzU2NhbGVMb2NrZWQgfCBGbGFncy5Jc0FuY2hvckxvY2tlZCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==
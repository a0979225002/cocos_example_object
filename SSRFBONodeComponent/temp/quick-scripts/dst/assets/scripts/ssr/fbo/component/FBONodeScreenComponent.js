
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ssr/fbo/component/FBONodeScreenComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3NyXFxmYm9cXGNvbXBvbmVudFxcRkJPTm9kZVNjcmVlbkNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJzc3IiLCJyZXF1aXJlIiwiRkJPIiwiQ29tcG9uZW50IiwiU2NyZWVuIiwiY2MiLCJDbGFzcyIsIkNvcmUiLCJlZGl0b3IiLCJDQ19FRElUT1IiLCJtZW51IiwiZXhlY3V0ZUluRWRpdE1vZGUiLCJwcm9wZXJ0aWVzIiwiX2luaXRGQk9SZW5kZXJUZXh0dXJlIiwiX3N1cGVyIiwiX3JlbmRlclRleHR1cmUiLCJpbml0V2l0aFNpemUiLCJDYW52YXMiLCJpbnN0YW5jZSIsIm5vZGUiLCJ3aWR0aCIsImhlaWdodCIsImdmeCIsIlJCX0ZNVF9TOCIsIl9pbml0RkJPQ2FtZXJhIiwiX2Zib0NhbWVyYSIsImN1bGxpbmdNYXNrIiwiZ3JvdXBJbmRleCIsIm9uTG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLEdBQUdDLE9BQU8sQ0FBQywyQkFBRCxDQUFuQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBRCxHQUFHLENBQUNFLEdBQUosQ0FBUUMsU0FBUixDQUFrQkMsTUFBbEIsR0FBMkJDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ2hDLGFBQVNOLEdBQUcsQ0FBQ0UsR0FBSixDQUFRQyxTQUFSLENBQWtCSSxJQURLO0FBRWhDQyxFQUFBQSxNQUFNLEVBQUVDLFNBQVMsSUFBSTtBQUNqQkMsSUFBQUEsSUFBSSxFQUFFLGdCQURXO0FBRWpCQyxJQUFBQSxpQkFBaUIsRUFBRTtBQUZGLEdBRlc7QUFNaENDLEVBQUFBLFVBQVUsRUFBRSxFQU5vQjs7QUFRaEM7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNJQyxFQUFBQSxxQkFiZ0MsbUNBYVA7QUFDM0IsU0FBS0MsTUFBTDs7QUFDQSxTQUFLQyxjQUFMLENBQW9CQyxZQUFwQixDQUFpQ1gsRUFBRSxDQUFDWSxNQUFILENBQVVDLFFBQVYsQ0FBbUJDLElBQW5CLENBQXdCQyxLQUF6RCxFQUFnRWYsRUFBRSxDQUFDWSxNQUFILENBQVVDLFFBQVYsQ0FBbUJDLElBQW5CLENBQXdCRSxNQUF4RixFQUFnR2hCLEVBQUUsQ0FBQ2lCLEdBQUgsQ0FBT0MsU0FBdkc7QUFDQSxHQWhCa0M7O0FBaUJuQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0NDLEVBQUFBLGNBdEJtQyw0QkFzQmpCO0FBQ2pCLFNBQUtWLE1BQUw7O0FBQ0EsU0FBS1csVUFBTCxDQUFnQkMsV0FBaEIsR0FBOEIsVUFBOUI7QUFDQSxTQUFLRCxVQUFMLENBQWdCQyxXQUFoQixJQUErQixFQUFFLEtBQUssS0FBS1AsSUFBTCxDQUFVUSxVQUFqQixDQUEvQjtBQUNBLEdBMUJrQztBQTJCbkNDLEVBQUFBLE1BM0JtQyxvQkEyQnpCO0FBQ1QsU0FBS2QsTUFBTCxHQURTLENBRVQ7OztBQUNBLFNBQUtLLElBQUwsQ0FBVUMsS0FBVixHQUFrQmYsRUFBRSxDQUFDWSxNQUFILENBQVVDLFFBQVYsQ0FBbUJDLElBQW5CLENBQXdCQyxLQUExQztBQUNHLFNBQUtELElBQUwsQ0FBVUUsTUFBVixHQUFtQmhCLEVBQUUsQ0FBQ1ksTUFBSCxDQUFVQyxRQUFWLENBQW1CQyxJQUFuQixDQUF3QkUsTUFBM0M7QUFDSDtBQWhDa0MsQ0FBVCxDQUEzQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAyMCBTdXBlclN1UmFjY29vblxuIFxuIFNpdGU6IGh0dHA6Ly93d3cuc3VwZXJzdXJhY2Nvb24tY29jb3MyZC5jb21cbiBNYWlsOiBzdXBlcnN1cmFjY29vbkBnbWFpbC5jb21cblxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gXG5jb25zdCBzc3IgPSByZXF1aXJlKFwiLi4vbmFtZXNwYWNlL0ZCT05hbWVzcGFjZVwiKTtcblxuLyoqXG4gKiDlhajlsY8gRkJPIOS4k+eUqOexu1xuICogQGNsYXNzIEZCT05vZGVTY3JlZW5Db21wb25lbnRcbiAqIEBleHRlbmRzIEZCT05vZGVDb21wb25lbnRcbiAqL1xuc3NyLkZCTy5Db21wb25lbnQuU2NyZWVuID0gY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IHNzci5GQk8uQ29tcG9uZW50LkNvcmUsXG4gICAgZWRpdG9yOiBDQ19FRElUT1IgJiYge1xuICAgICAgICBtZW51OiAnc3NyL0ZCTy9TY3JlZW4nLFxuICAgICAgICBleGVjdXRlSW5FZGl0TW9kZTogdHJ1ZSxcbiAgICB9LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOmHjeWGmeWIneWni+WMliBSZW5kZXJUZXh0dXJlIOWvueixoe+8jOe6ueeQhuWkp+Wwj+S4uuWxj+W5leWwuuWvuOWkp+Wwj1xuICAgICAqIEBtZXRob2QgX2luaXRGQk9SZW5kZXJUZXh0dXJlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfaW5pdEZCT1JlbmRlclRleHR1cmUgKCkge1xuXHRcdHRoaXMuX3N1cGVyKCk7XG5cdFx0dGhpcy5fcmVuZGVyVGV4dHVyZS5pbml0V2l0aFNpemUoY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUud2lkdGgsIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmhlaWdodCwgY2MuZ2Z4LlJCX0ZNVF9TOCk7XG5cdH0sXG5cdC8qKlxuICAgICAqIOmHjeWGmeWIneWni+WMliBGQk8g5LiT55SoIGNjLkNhbWVyYSAsIOiuvue9riBjdWxsaW5nTWFza++8jOW8gOWQr+iHquWumuS5ieWkp+Wwj+aooeW8j1xuICAgICAqIEBtZXRob2QgX2luaXRGQk9DYW1lcmFcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuXHRfaW5pdEZCT0NhbWVyYSAoKSB7XG5cdFx0dGhpcy5fc3VwZXIoKTtcblx0XHR0aGlzLl9mYm9DYW1lcmEuY3VsbGluZ01hc2sgPSAweGZmZmZmZmZmO1xuXHRcdHRoaXMuX2Zib0NhbWVyYS5jdWxsaW5nTWFzayAmPSB+KDEgPDwgdGhpcy5ub2RlLmdyb3VwSW5kZXgpO1xuXHR9LFxuXHRvbkxvYWQgKCkge1xuXHRcdHRoaXMuX3N1cGVyKCk7XG5cdFx0Ly9cblx0XHR0aGlzLm5vZGUud2lkdGggPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS53aWR0aDtcbiAgICBcdHRoaXMubm9kZS5oZWlnaHQgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5oZWlnaHQ7XG5cdH1cbn0pO1xuIl19
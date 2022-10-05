
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ssr/fbo/component/FBONodeGhostComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3766eS0Sr5OdpI2r6AdvfWA', 'FBONodeGhostComponent');
// scripts/ssr/fbo/component/FBONodeGhostComponent.js

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
 * 附身 的FBO 专用类
 * @class FBONodeGhostComponent
 * @extends FBONodeComponent
 * 主相机      everything &= ~(1 << fbo);
 * 目标对象    fbo
 * fbo相机     nothing |= ~(1 << fbo);
 * fbo对象     ghost
 */


ssr.FBO.Component.Ghost = cc.Class({
  "extends": require("./FBONodeComponent.js"),
  editor: CC_EDITOR && {
    menu: 'ssr/FBO/Ghost',
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

    if (this._fboCamera) {
      this._fboCamera.targetTexture = this._renderTexture;
      this._fboCamera.orthoSize = this.node.height / 2;
    }
  },
  updateTarget: function updateTarget() {
    if (!this.target) {
      return;
    }

    this._targetGroupOld = this.target.group;
    this.target.group = this.group;
    this.node.position = cc.v3(this.offsetX, this.offsetY, 1);
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

    this.node.position = cc.v3(this.offsetX, this.offsetY, 1);
    this._fboCamera.orthoSize = this.node.height / 2 * this.target.scaleX;

    this._super();

    this._fboCamera.orthoSize = this.node.height / 2;
    cc.Camera.main.cullingMask &= ~(1 << this.target.groupIndex);
  },
  __preload: function __preload() {
    if (CC_EDITOR) {
      var Flags = cc.Object.Flags;
      this._objFlags |= Flags.IsScaleLocked | Flags.IsAnchorLocked | Flags.IsPositionLocked;
    }
  },
  onLoad: function onLoad() {
    this._super(); //


    this.node.group = "ghost";
    this.updateTarget();
  },
  onDisable: function onDisable() {
    this._unregisterNodeEvent();

    this.target.group = this._targetGroupOld;
    this.target.group = "default";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3NyXFxmYm9cXGNvbXBvbmVudFxcRkJPTm9kZUdob3N0Q29tcG9uZW50LmpzIl0sIm5hbWVzIjpbInNzciIsInJlcXVpcmUiLCJGQk8iLCJDb21wb25lbnQiLCJHaG9zdCIsImNjIiwiQ2xhc3MiLCJlZGl0b3IiLCJDQ19FRElUT1IiLCJtZW51IiwiZXhlY3V0ZUluRWRpdE1vZGUiLCJwcm9wZXJ0aWVzIiwiX3RhcmdldCIsInRhcmdldCIsInR5cGUiLCJOb2RlIiwiZ2V0Iiwic2V0IiwidmFsIiwidXBkYXRlVGFyZ2V0Iiwibm9kZSIsIndpZHRoIiwiaGVpZ2h0IiwidG9vbHRpcCIsIl9vZmZzZXRYIiwib2Zmc2V0WCIsIkZsb2F0IiwiX29mZnNldFkiLCJvZmZzZXRZIiwib25FbmFibGUiLCJfcmVnaXN0ZXJOb2RlRXZlbnQiLCJvbiIsIl91cGRhdGVTaXplIiwiX3VucmVnaXN0ZXJOb2RlRXZlbnQiLCJvZmYiLCJfdXBkYXRlUmVuZGVyVGV4dHVyZVNpemUiLCJfZmJvQ2FtZXJhIiwidGFyZ2V0VGV4dHVyZSIsIl9yZW5kZXJUZXh0dXJlIiwib3J0aG9TaXplIiwiX3RhcmdldEdyb3VwT2xkIiwiZ3JvdXAiLCJwb3NpdGlvbiIsInYzIiwiX2luaXRGQk9SZW5kZXJUZXh0dXJlIiwiX3N1cGVyIiwiaW5pdFdpdGhTaXplIiwiZ2Z4IiwiUkJfRk1UX1M4IiwiX2luaXRGQk9DYW1lcmEiLCJjdWxsaW5nTWFzayIsImdyb3VwSW5kZXgiLCJhbGlnbldpdGhTY3JlZW4iLCJ1cGRhdGVGQk8iLCJzY2FsZVgiLCJDYW1lcmEiLCJtYWluIiwiX19wcmVsb2FkIiwiRmxhZ3MiLCJPYmplY3QiLCJfb2JqRmxhZ3MiLCJJc1NjYWxlTG9ja2VkIiwiSXNBbmNob3JMb2NrZWQiLCJJc1Bvc2l0aW9uTG9ja2VkIiwib25Mb2FkIiwib25EaXNhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNB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QUFMLENBQVk0QixLQUFaLEdBQW9CLFNBQXBCO0FBQ0g7QUExSDhCLENBQVQsQ0FBMUIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMjAgU3VwZXJTdVJhY2Nvb25cbiBcbiBTaXRlOiBodHRwOi8vd3d3LnN1cGVyc3VyYWNjb29uLWNvY29zMmQuY29tXG4gTWFpbDogc3VwZXJzdXJhY2Nvb25AZ21haWwuY29tXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5jb25zdCBzc3IgPSByZXF1aXJlKFwiLi4vbmFtZXNwYWNlL0ZCT05hbWVzcGFjZVwiKTtcblxuLyoqXG4gKiDpmYTouqsg55qERkJPIOS4k+eUqOexu1xuICogQGNsYXNzIEZCT05vZGVHaG9zdENvbXBvbmVudFxuICogQGV4dGVuZHMgRkJPTm9kZUNvbXBvbmVudFxuICog5Li755u45py6ICAgICAgZXZlcnl0aGluZyAmPSB+KDEgPDwgZmJvKTtcbiAqIOebruagh+WvueixoSAgICBmYm9cbiAqIGZib+ebuOacuiAgICAgbm90aGluZyB8PSB+KDEgPDwgZmJvKTtcbiAqIGZib+WvueixoSAgICAgZ2hvc3RcbiAqL1xuc3NyLkZCTy5Db21wb25lbnQuR2hvc3QgPSBjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogcmVxdWlyZShcIi4vRkJPTm9kZUNvbXBvbmVudC5qc1wiKSxcbiAgICBlZGl0b3I6IENDX0VESVRPUiAmJiB7XG4gICAgICAgIG1lbnU6ICdzc3IvRkJPL0dob3N0JyxcbiAgICAgICAgZXhlY3V0ZUluRWRpdE1vZGU6IHRydWUsXG4gICAgfSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIF90YXJnZXQ6IG51bGwsXG4gICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQgKHZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RhcmdldCA9IHZhbDtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRhcmdldCgpO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS53aWR0aCA9IHRoaXMuX3RhcmdldC53aWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gdGhpcy5fdGFyZ2V0LmhlaWdodDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwOiBcIkZCTyDnm67moIfoioLngrlcIlxuICAgICAgICB9LFxuICAgICAgICBfb2Zmc2V0WDogMCxcbiAgICAgICAgb2Zmc2V0WDoge1xuICAgICAgICAgICAgdHlwZTogY2MuRmxvYXQsXG4gICAgICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9vZmZzZXRYO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCAodmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb2Zmc2V0WCA9IHZhbDtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRhcmdldCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwiRkJPIOa4suafk+WMuuWfnyBY6L205pa55ZCR5YGP56e76YePXCJcbiAgICAgICAgfSxcbiAgICAgICAgX29mZnNldFk6IDAsXG4gICAgICAgIG9mZnNldFk6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLkZsb2F0LFxuICAgICAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fb2Zmc2V0WTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQgKHZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX29mZnNldFkgPSB2YWw7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUYXJnZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgb25FbmFibGUgKCkge1xuICAgICAgICB0aGlzLl9yZWdpc3Rlck5vZGVFdmVudCgpO1xuICAgIH0sXG4gICAgX3JlZ2lzdGVyTm9kZUV2ZW50ICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdzaXplLWNoYW5nZWQnLCB0aGlzLl91cGRhdGVTaXplLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgX3VucmVnaXN0ZXJOb2RlRXZlbnQgKCkge1xuICAgICAgICB0aGlzLm5vZGUub2ZmKCdzaXplLWNoYW5nZWQnLCB0aGlzLl91cGRhdGVTaXplLCB0aGlzKTtcbiAgICB9LFxuICAgIF91cGRhdGVTaXplICgpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlUmVuZGVyVGV4dHVyZVNpemUodGhpcy5ub2RlLndpZHRoLCB0aGlzLm5vZGUuaGVpZ2h0KTtcbiAgICAgICAgaWYgKHRoaXMuX2Zib0NhbWVyYSkge1xuICAgICAgICAgICAgdGhpcy5fZmJvQ2FtZXJhLnRhcmdldFRleHR1cmUgPSB0aGlzLl9yZW5kZXJUZXh0dXJlO1xuICAgICAgICAgICAgdGhpcy5fZmJvQ2FtZXJhLm9ydGhvU2l6ZSA9IHRoaXMubm9kZS5oZWlnaHQgLyAyO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVUYXJnZXQgKCkge1xuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdGFyZ2V0R3JvdXBPbGQgPSB0aGlzLnRhcmdldC5ncm91cDtcbiAgICAgICAgdGhpcy50YXJnZXQuZ3JvdXAgPSB0aGlzLmdyb3VwO1xuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52Myh0aGlzLm9mZnNldFgsIHRoaXMub2Zmc2V0WSwgMSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDph43lhpnliJ3lp4vljJYgUmVuZGVyVGV4dHVyZSDlr7nosaHvvIznurnnkIblpKflsI/kuLrmjIflrprlsLrlr7jlpKflsI9cbiAgICAgKiBAbWV0aG9kIF9pbml0RkJPUmVuZGVyVGV4dHVyZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2luaXRGQk9SZW5kZXJUZXh0dXJlICgpIHtcbiAgICAgICAgdGhpcy5fc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyVGV4dHVyZS5pbml0V2l0aFNpemUodGhpcy5ub2RlLndpZHRoLCB0aGlzLm5vZGUuaGVpZ2h0LCBjYy5nZnguUkJfRk1UX1M4KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOmHjeWGmeWIneWni+WMliBGQk8g5LiT55SoIGNjLkNhbWVyYSAsIOiuvue9riBjdWxsaW5nTWFza++8jOW8gOWQr+iHquWumuS5ieWkp+Wwj+aooeW8j1xuICAgICAqIEBtZXRob2QgX2luaXRGQk9DYW1lcmFcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9pbml0RkJPQ2FtZXJhICgpIHtcbiAgICAgICAgdGhpcy5fc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fZmJvQ2FtZXJhLmN1bGxpbmdNYXNrID0gMHgwMDAwMDAwMDtcbiAgICAgICAgdGhpcy5fZmJvQ2FtZXJhLmN1bGxpbmdNYXNrIHw9IH4oMSA8PCB0aGlzLm5vZGUuZ3JvdXBJbmRleCk7XG5cbiAgICAgICAgdGhpcy5fZmJvQ2FtZXJhLmFsaWduV2l0aFNjcmVlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9mYm9DYW1lcmEub3J0aG9TaXplID0gdGhpcy5ub2RlLmhlaWdodCAvIDI7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDph43lhpl1cGRhdGUg55Sf5ZG95ZGo5pyf5Ye95pWw77yM5riy5p+T5YmN5ZCO5pu05paw6IqC54K555qE5Z2Q5qCHXG4gICAgICogQG1ldGhvZCB1cGRhdGVcbiAgICAgKi9cbiAgICB1cGRhdGVGQk8gKCkge1xuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjModGhpcy5vZmZzZXRYLCB0aGlzLm9mZnNldFksIDEpO1xuICAgICAgICB0aGlzLl9mYm9DYW1lcmEub3J0aG9TaXplID0gdGhpcy5ub2RlLmhlaWdodCAvIDIgKiB0aGlzLnRhcmdldC5zY2FsZVg7XG4gICAgICAgIHRoaXMuX3N1cGVyKCk7XG4gICAgICAgIHRoaXMuX2Zib0NhbWVyYS5vcnRob1NpemUgPSB0aGlzLm5vZGUuaGVpZ2h0IC8gMjtcbiAgICAgICAgY2MuQ2FtZXJhLm1haW4uY3VsbGluZ01hc2sgJj0gfigxIDw8IHRoaXMudGFyZ2V0Lmdyb3VwSW5kZXgpO1xuICAgIH0sXG4gICAgX19wcmVsb2FkICgpIHtcbiAgICAgICAgaWYgKENDX0VESVRPUikge1xuICAgICAgICAgICAgdmFyIEZsYWdzID0gY2MuT2JqZWN0LkZsYWdzO1xuICAgICAgICAgICAgdGhpcy5fb2JqRmxhZ3MgfD0gKEZsYWdzLklzU2NhbGVMb2NrZWQgfCBGbGFncy5Jc0FuY2hvckxvY2tlZCB8IEZsYWdzLklzUG9zaXRpb25Mb2NrZWQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLl9zdXBlcigpO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLm5vZGUuZ3JvdXAgPSBcImdob3N0XCI7XG4gICAgICAgIHRoaXMudXBkYXRlVGFyZ2V0KCk7XG4gICAgfSxcbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuX3VucmVnaXN0ZXJOb2RlRXZlbnQoKTtcbiAgICAgICAgdGhpcy50YXJnZXQuZ3JvdXAgPSB0aGlzLl90YXJnZXRHcm91cE9sZDtcbiAgICAgICAgdGhpcy50YXJnZXQuZ3JvdXAgPSBcImRlZmF1bHRcIjtcbiAgICB9XG59KTtcbiJdfQ==
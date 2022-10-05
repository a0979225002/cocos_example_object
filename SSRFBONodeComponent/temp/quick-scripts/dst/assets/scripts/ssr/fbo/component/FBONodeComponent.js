
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ssr/fbo/component/FBONodeComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3NyXFxmYm9cXGNvbXBvbmVudFxcRkJPTm9kZUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJzc3IiLCJyZXF1aXJlIiwiVXBkYXRlTW9kZSIsImNjIiwiRW51bSIsIk9OQ0UiLCJBTFdBWVMiLCJGQk8iLCJDb21wb25lbnQiLCJDb3JlIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicHJldmlldyIsImVkaXRvck9ubHkiLCJub3RpZnkiLCJDQ19FRElUT1IiLCJ1cGRhdGVGQk8iLCJ0b29sdGlwIiwiX2ZsaXBZIiwiZmxpcFkiLCJnZXQiLCJzZXQiLCJ2YWwiLCJfZmJvU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJzZXRGbGlwWSIsImdyb3VwIiwiX3VwZGF0ZU1vZGUiLCJ1cGRhdGVNb2RlIiwidHlwZSIsIl9iYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsInZhbHVlIiwiX2Zib0NhbWVyYSIsIl9pbml0RGF0YSIsIl9pc1BhdXNlZCIsIl9pbml0RkJPUmVuZGVyVGV4dHVyZSIsIl9yZW5kZXJUZXh0dXJlIiwiUmVuZGVyVGV4dHVyZSIsIl9pbml0RkJPU3ByaXRlIiwibm9kZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsImFkZENvbXBvbmVudCIsImZib1Nwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiLCJfaW5pdEZCT0NhbWVyYSIsIkNhbWVyYSIsImRlcHRoIiwiY2xlYXJGbGFncyIsIkNsZWFyRmxhZ3MiLCJDT0xPUiIsInRhcmdldFRleHR1cmUiLCJlbmFibGVkIiwib25Mb2FkIiwic3RhcnQiLCJfdXBkYXRlUmVuZGVyVGV4dHVyZVNpemUiLCJ3aWR0aCIsImhlaWdodCIsIndpbmRvdyIsImpzYiIsImRlc3Ryb3kiLCJpbml0V2l0aFNpemUiLCJnZngiLCJSQl9GTVRfUzgiLCJ1cGRhdGVTaXplIiwidXBkYXRlIiwicmVuZGVyIiwidGFyZ2V0Iiwic2V0VGV4dHVyZSIsInBhdXNlIiwicmVzdW1l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QTlNOEIsb0JBOE1wQjtBQUNULFNBQUtwQyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0E7QUFoTjZCLENBQVQsQ0FBekIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMjAgU3VwZXJTdVJhY2Nvb25cbiBcbiBTaXRlOiBodHRwOi8vd3d3LnN1cGVyc3VyYWNjb29uLWNvY29zMmQuY29tXG4gTWFpbDogc3VwZXJzdXJhY2Nvb25AZ21haWwuY29tXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuIFxuY29uc3Qgc3NyID0gcmVxdWlyZShcIi4uL25hbWVzcGFjZS9GQk9OYW1lc3BhY2VcIik7XG5cbi8qKlxuICogRkJPIOabtOaWsOaooeW8j+aemuS4vuWPmOmHj1xuICogQGVudW0gRkJPTm9kZUNvbXBvbmVudC5fdXBkYXRlTW9kZVxuICogQHN0YXRpY1xuICogQHByaXZhdGVcbiAqIEBuYW1lc3BhY2UgRkJPTm9kZUNvbXBvbmVudFxuICovXG5sZXQgVXBkYXRlTW9kZSA9IGNjLkVudW0oe1xuXHQvKipcbiAgICAgKiDov5Hmm7TmlrDkuIDmrKFcbiAgICAgKiBAcHJvcGVydHkge051bWJlcn0gT05DRVxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBPTkNFIFx0XHQ6IDAsXG4gICAgLyoqXG4gICAgICog5ZCM5q2l5pu05pawXG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IE9OQ0VcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgQUxXQVlTXHRcdDogMVxufSk7XG5cbi8qKlxuICogRkJPTm9kZUNvbXBvbmVudCDnu4Tku7bln7rnsbvvvIznlKjkuo5cbiAqIEBjbGFzcyBGQk9Ob2RlQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuc3NyLkZCTy5Db21wb25lbnQuQ29yZSA9IGNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgcHJvcGVydGllczoge1xuICAgIFx0LyoqXG5cdCAgICAgKiDlnKjnvJbovpHlmajmqKHlvI/kuIvlvIDlkK/lrp7ml7bliLfmlrDpooTop4hcblx0ICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gcHJldmlld1xuXHQgICAgICogQGRlZmF1bHQgdHJ1ZVxuXHQgICAgICovXG4gICAgXHRwcmV2aWV3OiB7XG5cdCAgICAgICAgZGVmYXVsdDogdHJ1ZSxcblx0ICAgICAgICBlZGl0b3JPbmx5OiB0cnVlLFxuXHQgICAgICAgIG5vdGlmeTogQ0NfRURJVE9SICYmIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgaWYgKHRoaXMucHJldmlldykge1xuXHQgICAgICAgICAgICBcdHRoaXMudXBkYXRlRkJPKCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9LFxuXHQgICAgICAgIHRvb2x0aXA6IFwi5piv5ZCm5Zyo5Zyo57yW6L6R5Zmo5Lit6aKE6KeIXCJcblx0ICAgIH0sXG5cdCAgICAvKipcblx0ICAgICAqIOaYr+WQpumcgOimgee/u+i9rOe6ueeQhlxuXHQgICAgICogQHByb3BlcnR5IHtCb29sZWFufSBmbGlwWVxuXHQgICAgICogQGRlZmF1bHQgdHJ1ZVxuXHQgICAgICovXG5cdCAgICAgX2ZsaXBZOiB0cnVlLFxuXHRcdGZsaXBZOiB7XG5cdFx0XHRnZXQgKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fZmxpcFk7XG5cdFx0XHR9LFxuXHRcdFx0c2V0ICh2YWwpIHtcblx0XHRcdFx0dGhpcy5fZmxpcFkgPSB2YWw7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Zib1Nwcml0ZSAmJiB0aGlzLl9mYm9TcHJpdGUuc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmJvU3ByaXRlLnNwcml0ZUZyYW1lLnNldEZsaXBZKHZhbCk7XG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0XHQvLyB0aGlzLm5vZGUuc2NhbGVZICo9IC0xO1xuXHRcdFx0fSxcblx0XHRcdHRvb2x0aXA6IFwi5piv5ZCm6ZyA6KaB57+76L2s57q555CGXCJcblx0XHR9LFxuXHRcdC8qKlxuXHQgICAgICogRkJPIOWvueixoem7mOiupOaJgOWxnuiKgueCueeahOWIhue7hOOAguWQjCBjYy5Ob2RlIOeahCBncm91cCDlsZ7mgKdcblx0ICAgICAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBncm91cFxuXHQgICAgICogQGRlZmF1bHQgZmJvXG5cdCAgICAgKi9cblx0XHRncm91cDoge1xuXHRcdCAgICBkZWZhdWx0OiBcImZib1wiLFxuXHRcdCAgICB0b29sdGlwOiBcIkZCTyDoioLngrnkuJPnlKjnmoTliIbnu4TlkI3np7BcIlxuXHRcdH0sXG5cdFx0X3VwZGF0ZU1vZGU6IFVwZGF0ZU1vZGUuQUxXQVlTLFxuXHRcdC8qKlxuXHQgICAgICogRkJPIOWvueixoem7mOiupOeahOabtOaWsOaooeW8j1xuXHQgICAgICogQHByb3BlcnR5IHtVcGRhdGVNb2RlfSB1cGRhdGVNb2RlXG5cdCAgICAgKiBAZGVmYXVsdCBVcGRhdGVNb2RlLkFMV0FZU1xuXHQgICAgICovXG5cdFx0dXBkYXRlTW9kZToge1xuXHRcdCAgICB0eXBlOiBVcGRhdGVNb2RlLFxuXHRcdCAgICBnZXQgKCkge1xuXHRcdCAgICAgICAgcmV0dXJuIHRoaXMuX3VwZGF0ZU1vZGU7XG5cdFx0ICAgIH0sXG5cdFx0ICAgIHNldCAodmFsKSB7XG5cdFx0ICAgICAgICB0aGlzLl91cGRhdGVNb2RlID0gdmFsO1xuXHRcdCAgICB9LFxuXHRcdCAgICB0b29sdGlwOiBcIuabtOaWsOaooeW8j++8jOm7mOiupOWunuaXtuabtOaWsFwiXG5cdFx0fSxcblx0XHQvKipcbiAgICAgICAgICog5pGE5YOP5py655So5LqO5riF6Zmk5bGP5bmV55qE6IOM5pmv6Imy44CCXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7Q29sb3J9IGJhY2tncm91bmRDb2xvclxuICAgICAgICAgKi9cblx0XHRfYmFja2dyb3VuZENvbG9yOiBjYy5jb2xvcigwLCAwLCAwLCAwKSxcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IHtcbiAgICAgICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2JhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmFja2dyb3VuZENvbG9yLnNldCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmJvQ2FtZXJhLmJhY2tncm91bmRDb2xvciA9IHZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5pGE5YOP5py655So5LqO5riF6Zmk5bGP5bmV55qE6IOM5pmv6ImyXCIsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJblhoXpg6jmlbDmja5cbiAgICAgKiBAbWV0aG9kIF9pbml0RGF0YVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2luaXREYXRhICgpIHtcbiAgICBcdHRoaXMuX2lzUGF1c2VkID0gZmFsc2U7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJYgUmVuZGVyVGV4dHVyZSDlr7nosaFcbiAgICAgKiBAbWV0aG9kIF9pbml0RkJPUmVuZGVyVGV4dHVyZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG5cdF9pbml0RkJPUmVuZGVyVGV4dHVyZSAoKSB7XG5cdFx0aWYgKCF0aGlzLl9yZW5kZXJUZXh0dXJlKSB7XG5cdFx0XHR0aGlzLl9yZW5kZXJUZXh0dXJlID0gbmV3IGNjLlJlbmRlclRleHR1cmUoKTtcblx0XHR9XG5cdH0sXG5cdC8qKlxuICAgICAqIOWIneWni+WMliBGQk8g5pyA57uI5riy5p+T55uu5qCH5a+56LGhIGNjLlNwcml0ZVxuICAgICAqIEBtZXRob2QgX2luaXRGQk9TcHJpdGVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuXHRfaW5pdEZCT1Nwcml0ZSAoKSB7XG5cdFx0dGhpcy5fZmJvU3ByaXRlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuXHRcdGlmICghdGhpcy5fZmJvU3ByaXRlKSB7XG5cdFx0XHR0aGlzLl9mYm9TcHJpdGUgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG5cdFx0fVxuXHRcdGlmICghdGhpcy5fZmJvU3ByaXRlLnNwcml0ZUZyYW1lKSB7XG5cdFx0XHR2YXIgZmJvU3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUoKTtcblx0XHQgICAgdGhpcy5fZmJvU3ByaXRlLnNwcml0ZUZyYW1lID0gZmJvU3ByaXRlRnJhbWU7XG4gICAgICAgICAgICB0aGlzLl9mYm9TcHJpdGUuc3ByaXRlRnJhbWUuc2V0RmxpcFkodGhpcy5mbGlwWSk7XG5cdFx0fVxuXG5cdFx0Ly8gdGhpcy5ub2RlLnNjYWxlWSA9IHRoaXMuZmxpcFkgPyAtMSA6IDE7XG5cdH0sXG5cdC8qKlxuICAgICAqIOWIneWni+WMliBGQk8g5LiT55SoIGNjLkNhbWVyYVxuICAgICAqIEBtZXRob2QgX2luaXRGQk9DYW1lcmFcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuXHRfaW5pdEZCT0NhbWVyYSAoKSB7XG5cdFx0dGhpcy5fZmJvQ2FtZXJhID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5DYW1lcmEpO1xuXHRcdGlmICghdGhpcy5fZmJvQ2FtZXJhKSB7XG5cdFx0XHR0aGlzLl9mYm9DYW1lcmEgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KGNjLkNhbWVyYSk7XG5cdFx0fVxuXHRcdHRoaXMuX2Zib0NhbWVyYS5kZXB0aCA9IDA7XG5cdFx0dGhpcy5fZmJvQ2FtZXJhLmNsZWFyRmxhZ3MgPSBjYy5DYW1lcmEuQ2xlYXJGbGFncy5DT0xPUjtcblx0XHR0aGlzLl9mYm9DYW1lcmEuYmFja2dyb3VuZENvbG9yID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XG5cdFx0dGhpcy5fZmJvQ2FtZXJhLnRhcmdldFRleHR1cmUgPSB0aGlzLl9yZW5kZXJUZXh0dXJlO1xuXHRcdHRoaXMuX2Zib0NhbWVyYS5lbmFibGVkID0gZmFsc2U7XG5cdH0sXG4gICAgLyoqXG4gICAgICogb25Mb2FkIOeUn+WRveWRqOacn+WHveaVsO+8jOWwhuacrCBjYy5Ob2RlIOeahCBncm91cCDliIfmjaLkuLrnlKjmiLfmjIflrprnmoTliIbnu4RcbiAgICAgKiBAbWV0aG9kIG9uTG9hZFxuICAgICAqL1xuXHRvbkxvYWQgKCkge1xuXHRcdHRoaXMubm9kZS5ncm91cCA9IHRoaXMuZ3JvdXA7XG5cdH0sXG5cdC8qKlxuICAgICAqIHN0YXJ0IOeUn+WRveWRqOacn+WHveaVsO+8jOWIneWni+WMluS4gOS6m+WGhemDqOeUqOWvueixoe+8jOiwg+eUqOS4gOasoeabtOaWsCBGQk8g5Ye95pWwIChVcGRhdGVNb2RlLk9OQ0Ug5qih5byP5LuF5q2k5LiA5qyh6LCD55SoKVxuICAgICAqIEBtZXRob2Qgc3RhcnRcbiAgICAgKi9cbiAgICBzdGFydCAoKSB7XG4gICAgXHR0aGlzLl9pbml0RGF0YSgpO1xuICAgICBcdHRoaXMuX2luaXRGQk9SZW5kZXJUZXh0dXJlKCk7XG4gICAgIFx0dGhpcy5faW5pdEZCT1Nwcml0ZSgpO1xuICAgICBcdHRoaXMuX2luaXRGQk9DYW1lcmEoKTtcbiAgICAgXHR0aGlzLnVwZGF0ZUZCTygpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog5pu05pawIFJlbmRlclRleHR1cmUg5aSn5bCPXG4gICAgICogQG1ldGhvZCBfdXBkYXRlUmVuZGVyVGV4dHVyZVNpemVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF91cGRhdGVSZW5kZXJUZXh0dXJlU2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgXHRpZiAoIXRoaXMuX3JlbmRlclRleHR1cmUpIHtcblx0XHRcdHJldHVybjtcbiAgICBcdH1cbiAgICBcdGlmICh3aW5kb3cuanNiKSB7XG4gICAgXHRcdC8vIGh0dHBzOi8vZm9ydW0uY29jb3Mub3JnL3QvY2MtcmVuZGVydGV4dHVyZS11cGRhdGVzaXplLzk5NjM0XG4gICAgXHRcdHRoaXMuX3JlbmRlclRleHR1cmUuZGVzdHJveSgpO1xuICAgIFx0XHR0aGlzLl9yZW5kZXJUZXh0dXJlID0gbmV3IGNjLlJlbmRlclRleHR1cmUoKTtcbiAgICBcdFx0dGhpcy5fcmVuZGVyVGV4dHVyZS5pbml0V2l0aFNpemUod2lkdGgsIGhlaWdodCwgY2MuZ2Z4LlJCX0ZNVF9TOCk7XHRcbiAgICBcdH1cbiAgICBcdGVsc2Uge1xuICAgIFx0XHR0aGlzLl9yZW5kZXJUZXh0dXJlLnVwZGF0ZVNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgXHR9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiB1cGRhdGUg55Sf5ZG95ZGo5pyf5Ye95pWw77yM5q+P5bin6LCD55So77yM5pu05pawIEZCTyAoVXBkYXRlTW9kZS5BTFdBWVMg5qih5byP5q+P5bin6LCD55SoKVxuICAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgICovXG4gICAgdXBkYXRlICgpIHtcbiAgICBcdGlmIChDQ19FRElUT1IgJiYgIXRoaXMucHJldmlldykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9pc1BhdXNlZCkge1xuICAgICAgICBcdHJldHVybjtcbiAgICAgICAgfVxuICAgIFx0aWYgKHRoaXMudXBkYXRlTW9kZSA9PSBVcGRhdGVNb2RlLkFMV0FZUykge1xuICAgIFx0XHR0aGlzLnVwZGF0ZUZCTygpO1xuICAgIFx0fVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog5Yi35paw5LiA5qyhIEZCTyDlubblsIblhbbmuLLmn5PliLAgY2MuU3ByaXRlIOWvueixoeS4rVxuICAgICAqIEBtZXRob2QgdXBkYXRlRkJPXG4gICAgICovXG5cdHVwZGF0ZUZCTyAoKSB7XG5cdFx0aWYgKENDX0VESVRPUiAmJiAhdGhpcy5wcmV2aWV3KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblx0XHR0aGlzLl9mYm9DYW1lcmEuZW5hYmxlZCA9IHRydWU7XG5cdFx0dGhpcy5fZmJvQ2FtZXJhLnJlbmRlcih0aGlzLnRhcmdldCk7XG5cdFx0dGhpcy5fZmJvU3ByaXRlLnNwcml0ZUZyYW1lLnNldFRleHR1cmUodGhpcy5fcmVuZGVyVGV4dHVyZSk7XG5cdFx0dGhpcy5fZmJvQ2FtZXJhLmVuYWJsZWQgPSBmYWxzZTtcblx0fSxcblx0LyoqXG4gICAgICog5pqC5YGc5Yi35pawXG4gICAgICogQG1ldGhvZCBwYXVzZVxuICAgICAqL1xuICAgIHBhdXNlICgpIHtcbiAgICBcdHRoaXMuX2lzUGF1c2VkID0gdHJ1ZTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOe7p+e7reWIt+aWsFxuICAgICAqIEBtZXRob2QgcmVzdW1lXG4gICAgICovXG4gICAgcmVzdW1lICgpIHtcbiAgICBcdHRoaXMuX2lzUGF1c2VkID0gZmFsc2U7XG4gICAgfVxufSk7XG4iXX0=
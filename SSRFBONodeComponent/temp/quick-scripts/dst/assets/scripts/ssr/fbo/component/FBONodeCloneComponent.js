
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ssr/fbo/component/FBONodeCloneComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7596cS966dF85SrAvau2uTn', 'FBONodeCloneComponent');
// scripts/ssr/fbo/component/FBONodeCloneComponent.js

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
 * ??????[????????????] ???FBO ?????????
 * @class FBONodeRegionComponent
 * @extends FBONodeComponent
 * ?????????      everything &= ~(1 << fbo);
 * ????????????    fbo
 * fbo??????     nothing |= ~(1 << fbo);
 * fbo??????     clone
 */


ssr.FBO.Component.Clone = cc.Class({
  "extends": require("./FBONodeComponent.js"),
  editor: CC_EDITOR && {
    menu: 'ssr/FBO/Clone',
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
      tooltip: "FBO ????????????"
    },
    _syncAngle: false,
    syncAngle: {
      get: function get() {
        return this._syncAngle;
      },
      set: function set(val) {
        this._syncAngle = val;
      },
      tooltip: "??????????????????????????????????????????"
    },
    _syncScale: false,
    syncScale: {
      get: function get() {
        return this._syncScale;
      },
      set: function set(val) {
        this._syncScale = val;
      },
      tooltip: "??????????????????????????????????????????"
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
      tooltip: "FBO ???????????? X??????????????????"
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

    this._fboCamera.targetTexture = this._renderTexture;
    this._fboCamera.orthoSize = this.node.height / 2;
  },
  updateTarget: function updateTarget() {
    if (!this.target) {
      return;
    }

    this._targetGroupOld = this.target.group;
    this._targetAngleOld = 0;
    this._targetScaleXOld = 0;
    this._targetScaleYOld = 0;
    this._targetWidthOld = 0;
    this._targetHeightOld = 0;
    this.target.group = this.group;
    this.node.position = cc.v3(this.target.x + this.offsetX * this.target.scaleX, this.target.y + this.offsetY * this.target.scaleY, 1);
  },

  /**
   * ??????????????? RenderTexture ??????????????????????????????????????????
   * @method _initFBORenderTexture
   * @private
   */
  _initFBORenderTexture: function _initFBORenderTexture() {
    this._super();

    this._renderTexture.initWithSize(this.node.width, this.node.height, cc.gfx.RB_FMT_S8);
  },

  /**
   * ??????????????? FBO ?????? cc.Camera , ?????? cullingMask??????????????????????????????
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
   * ??????update ??????????????????????????????????????????????????????
   * @method update
   */
  updateFBO: function updateFBO() {
    if (!this.target) {
      return;
    }

    var oldPosition = this.node.position;

    if (this.syncAngle && this._targetAngleOld != this.target.angle) {
      this._targetAngleOld = this.target.angle;
      this.node.angle = this.target.angle = 0;
    }

    if (this.syncScale) {
      if (this._targetScaleXOld != this.target.scaleX) {
        this._targetScaleXOld = this.target.scaleX;
      }

      if (this._targetScaleYOld != this.target.scaleY) {
        this._targetScaleYOld = this.target.scaleY;
      }

      this.node.scaleX = this.target.scaleX = 1;
      this.node.scaleY = this.target.scaleY = 1;
    }

    this.node.position = cc.v3(this.target.x + this.offsetX * this.target.scaleX, this.target.y + this.offsetY * this.target.scaleY, 1);
    this._fboCamera.orthoSize = this.node.height / 2 * this.target.scaleX;

    this._super();

    this._fboCamera.orthoSize = this.node.height / 2;
    cc.Camera.main.cullingMask &= ~(1 << this.target.groupIndex);

    if (this.syncAngle) {
      this.node.angle = this.target.angle = this._targetAngleOld;
    }

    if (this.syncScale) {
      this.node.scaleX = this.target.scaleX = this._targetScaleXOld;
      this.node.scaleY = this.target.scaleY = this._targetScaleYOld; // this.node.scaleY *= (this.flipY ? -1 : 1);
    }

    this.node.position = cc.v3(oldPosition.x, oldPosition.y, 1);
  },
  __preload: function __preload() {
    if (CC_EDITOR) {
      var Flags = cc.Object.Flags;
      this._objFlags |= Flags.IsScaleLocked | Flags.IsAnchorLocked | Flags.IsPositionLocked;
    }
  },
  onLoad: function onLoad() {
    this._super(); //


    this.node.group = "clone";
    this.updateTarget();
  },
  onDisable: function onDisable() {
    this._unregisterNodeEvent();

    this.target.group = this._targetGroupOld;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3NyXFxmYm9cXGNvbXBvbmVudFxcRkJPTm9kZUNsb25lQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbInNzciIsInJlcXVpcmUiLCJGQk8iLCJDb21wb25lbnQiLCJDbG9uZSIsImNjIiwiQ2xhc3MiLCJlZGl0b3IiLCJDQ19FRElUT1IiLCJtZW51IiwiZXhlY3V0ZUluRWRpdE1vZGUiLCJwcm9wZXJ0aWVzIiwiX3RhcmdldCIsInRhcmdldCIsInR5cGUiLCJOb2RlIiwiZ2V0Iiwic2V0IiwidmFsIiwidXBkYXRlVGFyZ2V0Iiwibm9kZSIsIndpZHRoIiwiaGVpZ2h0IiwidG9vbHRpcCIsIl9zeW5jQW5nbGUiLCJzeW5jQW5nbGUiLCJfc3luY1NjYWxlIiwic3luY1NjYWxlIiwiX29mZnNldFgiLCJvZmZzZXRYIiwiRmxvYXQiLCJfb2Zmc2V0WSIsIm9mZnNldFkiLCJvbkVuYWJsZSIsIl9yZWdpc3Rlck5vZGVFdmVudCIsIm9uIiwiX3VwZGF0ZVNpemUiLCJfdW5yZWdpc3Rlck5vZGVFdmVudCIsIm9mZiIsIl91cGRhdGVSZW5kZXJUZXh0dXJlU2l6ZSIsIl9mYm9DYW1lcmEiLCJ0YXJnZXRUZXh0dXJlIiwiX3JlbmRlclRleHR1cmUiLCJvcnRob1NpemUiLCJfdGFyZ2V0R3JvdXBPbGQiLCJncm91cCIsIl90YXJnZXRBbmdsZU9sZCIsIl90YXJnZXRTY2FsZVhPbGQiLCJfdGFyZ2V0U2NhbGVZT2xkIiwiX3RhcmdldFdpZHRoT2xkIiwiX3RhcmdldEhlaWdodE9sZCIsInBvc2l0aW9uIiwidjMiLCJ4Iiwic2NhbGVYIiwieSIsInNjYWxlWSIsIl9pbml0RkJPUmVuZGVyVGV4dHVyZSIsIl9zdXBlciIsImluaXRXaXRoU2l6ZSIsImdmeCIsIlJCX0ZNVF9TOCIsIl9pbml0RkJPQ2FtZXJhIiwiY3VsbGluZ01hc2siLCJncm91cEluZGV4IiwiYWxpZ25XaXRoU2NyZWVuIiwidXBkYXRlRkJPIiwib2xkUG9zaXRpb24iLCJhbmdsZSIsIkNhbWVyYSIsIm1haW4iLCJfX3ByZWxvYWQiLCJGbGFncyIsIk9iamVjdCIsIl9vYmpGbGFncyIsIklzU2NhbGVMb2NrZWQiLCJJc0FuY2hvckxvY2tlZCIsIklzUG9zaXRpb25Mb2NrZWQiLCJvbkxvYWQiLCJvbkRpc2FibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyxHQUFHQyxPQUFPLENBQUMsMkJBQUQsQ0FBbkI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBRCxHQUFHLENBQUNFLEdBQUosQ0FBUUMsU0FBUixDQUFrQkMsS0FBbEIsR0FBMEJDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQy9CLGFBQVNMLE9BQU8sQ0FBQyx1QkFBRCxDQURlO0FBRS9CTSxFQUFBQSxNQUFNLEVBQUVDLFNBQVMsSUFBSTtBQUNqQkMsSUFBQUEsSUFBSSxFQUFFLGVBRFc7QUFFakJDLElBQUFBLGlCQUFpQixFQUFFO0FBRkYsR0FGVTtBQU0vQkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE9BQU8sRUFBRSxJQUREO0FBRVJDLElBQUFBLE1BQU0sRUFBRTtBQUNKQyxNQUFBQSxJQUFJLEVBQUVULEVBQUUsQ0FBQ1UsSUFETDtBQUVKQyxNQUFBQSxHQUZJLGlCQUVHO0FBQ0gsZUFBTyxLQUFLSixPQUFaO0FBQ0gsT0FKRztBQUtKSyxNQUFBQSxHQUxJLGVBS0NDLEdBTEQsRUFLTTtBQUNOLGFBQUtOLE9BQUwsR0FBZU0sR0FBZjtBQUNBLGFBQUtDLFlBQUw7QUFDQSxhQUFLQyxJQUFMLENBQVVDLEtBQVYsR0FBa0IsS0FBS1QsT0FBTCxDQUFhUyxLQUEvQjtBQUNBLGFBQUtELElBQUwsQ0FBVUUsTUFB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QkFBdEU7QUFDSDtBQUNKLEdBaEs4QjtBQWlLL0JDLEVBQUFBLE1BaksrQixvQkFpS3JCO0FBQ04sU0FBS3BCLE1BQUwsR0FETSxDQUVOOzs7QUFDQSxTQUFLdEMsSUFBTCxDQUFVeUIsS0FBVixHQUFrQixPQUFsQjtBQUNBLFNBQUsxQixZQUFMO0FBQ0gsR0F0SzhCO0FBdUsvQjRELEVBQUFBLFNBdksrQix1QkF1S25CO0FBQ1IsU0FBSzFDLG9CQUFMOztBQUNBLFNBQUt4QixNQUFMLENBQVlnQyxLQUFaLEdBQW9CLEtBQUtELGVBQXpCO0FBQ0g7QUExSzhCLENBQVQsQ0FBMUIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMjAgU3VwZXJTdVJhY2Nvb25cbiBcbiBTaXRlOiBodHRwOi8vd3d3LnN1cGVyc3VyYWNjb29uLWNvY29zMmQuY29tXG4gTWFpbDogc3VwZXJzdXJhY2Nvb25AZ21haWwuY29tXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuIFxuY29uc3Qgc3NyID0gcmVxdWlyZShcIi4uL25hbWVzcGFjZS9GQk9OYW1lc3BhY2VcIik7XG5cbi8qKlxuICog5oyH5a6aW+WMuuWfn+e6ueeQhl0g55qERkJPIOS4k+eUqOexu1xuICogQGNsYXNzIEZCT05vZGVSZWdpb25Db21wb25lbnRcbiAqIEBleHRlbmRzIEZCT05vZGVDb21wb25lbnRcbiAqIOS4u+ebuOacuiAgICAgIGV2ZXJ5dGhpbmcgJj0gfigxIDw8IGZibyk7XG4gKiDnm67moIflr7nosaEgICAgZmJvXG4gKiBmYm/nm7jmnLogICAgIG5vdGhpbmcgfD0gfigxIDw8IGZibyk7XG4gKiBmYm/lr7nosaEgICAgIGNsb25lXG4gKi9cbnNzci5GQk8uQ29tcG9uZW50LkNsb25lID0gY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IHJlcXVpcmUoXCIuL0ZCT05vZGVDb21wb25lbnQuanNcIiksXG4gICAgZWRpdG9yOiBDQ19FRElUT1IgJiYge1xuICAgICAgICBtZW51OiAnc3NyL0ZCTy9DbG9uZScsXG4gICAgICAgIGV4ZWN1dGVJbkVkaXRNb2RlOiB0cnVlLFxuICAgIH0sXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBfdGFyZ2V0OiBudWxsLFxuICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl90YXJnZXQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0ICh2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90YXJnZXQgPSB2YWw7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUYXJnZXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUud2lkdGggPSB0aGlzLl90YXJnZXQud2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IHRoaXMuX3RhcmdldC5oZWlnaHQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbHRpcDogXCJGQk8g55uu5qCH6IqC54K5XCJcbiAgICAgICAgfSxcbiAgICAgICAgX3N5bmNBbmdsZTogZmFsc2UsXG4gICAgICAgIHN5bmNBbmdsZToge1xuICAgICAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc3luY0FuZ2xlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCAodmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3luY0FuZ2xlID0gdmFsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5piv5ZCm6ZyA6KaB5Yqo5oCB55uR5rWL55uu5qCH5peL6L2s6KeS5bqmXCJcbiAgICAgICAgfSxcbiAgICAgICAgX3N5bmNTY2FsZTogZmFsc2UsXG4gICAgICAgIHN5bmNTY2FsZToge1xuICAgICAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc3luY1NjYWxlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCAodmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3luY1NjYWxlID0gdmFsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5piv5ZCm6ZyA6KaB5Yqo5oCB55uR5rWL55uu5qCH57yp5pS+5aSn5bCPXCJcbiAgICAgICAgfSxcbiAgICAgICAgX29mZnNldFg6IDAsXG4gICAgICAgIG9mZnNldFg6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLkZsb2F0LFxuICAgICAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fb2Zmc2V0WDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQgKHZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX29mZnNldFggPSB2YWw7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUYXJnZXQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwOiBcIkZCTyDmuLLmn5PljLrln58gWOi9tOaWueWQkeWBj+enu+mHj1wiXG4gICAgICAgIH0sXG4gICAgICAgIF9vZmZzZXRZOiAwLFxuICAgICAgICBvZmZzZXRZOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5GbG9hdCxcbiAgICAgICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29mZnNldFk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0ICh2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vZmZzZXRZID0gdmFsO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGFyZ2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG9uRW5hYmxlICgpIHtcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXJOb2RlRXZlbnQoKTtcbiAgICB9LFxuICAgIF9yZWdpc3Rlck5vZGVFdmVudCAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbignc2l6ZS1jaGFuZ2VkJywgdGhpcy5fdXBkYXRlU2l6ZSwgdGhpcyk7XG4gICAgfSxcblxuICAgIF91bnJlZ2lzdGVyTm9kZUV2ZW50ICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9mZignc2l6ZS1jaGFuZ2VkJywgdGhpcy5fdXBkYXRlU2l6ZSwgdGhpcyk7XG4gICAgfSxcbiAgICBfdXBkYXRlU2l6ZSAoKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVJlbmRlclRleHR1cmVTaXplKHRoaXMubm9kZS53aWR0aCwgdGhpcy5ub2RlLmhlaWdodCk7XG4gICAgICAgIHRoaXMuX2Zib0NhbWVyYS50YXJnZXRUZXh0dXJlID0gdGhpcy5fcmVuZGVyVGV4dHVyZTtcbiAgICAgICAgdGhpcy5fZmJvQ2FtZXJhLm9ydGhvU2l6ZSA9IHRoaXMubm9kZS5oZWlnaHQgLyAyO1xuICAgIH0sXG4gICAgdXBkYXRlVGFyZ2V0ICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3RhcmdldEdyb3VwT2xkID0gdGhpcy50YXJnZXQuZ3JvdXA7XG4gICAgICAgIHRoaXMuX3RhcmdldEFuZ2xlT2xkID0gMDtcbiAgICAgICAgdGhpcy5fdGFyZ2V0U2NhbGVYT2xkID0gMDtcbiAgICAgICAgdGhpcy5fdGFyZ2V0U2NhbGVZT2xkID0gMDtcbiAgICAgICAgdGhpcy5fdGFyZ2V0V2lkdGhPbGQgPSAwO1xuICAgICAgICB0aGlzLl90YXJnZXRIZWlnaHRPbGQgPSAwO1xuXG4gICAgICAgIHRoaXMudGFyZ2V0Lmdyb3VwID0gdGhpcy5ncm91cDtcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjModGhpcy50YXJnZXQueCArIHRoaXMub2Zmc2V0WCAqIHRoaXMudGFyZ2V0LnNjYWxlWCwgdGhpcy50YXJnZXQueSArIHRoaXMub2Zmc2V0WSAqIHRoaXMudGFyZ2V0LnNjYWxlWSwgMSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDph43lhpnliJ3lp4vljJYgUmVuZGVyVGV4dHVyZSDlr7nosaHvvIznurnnkIblpKflsI/kuLrmjIflrprlsLrlr7jlpKflsI9cbiAgICAgKiBAbWV0aG9kIF9pbml0RkJPUmVuZGVyVGV4dHVyZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2luaXRGQk9SZW5kZXJUZXh0dXJlICgpIHtcbiAgICAgICAgdGhpcy5fc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyVGV4dHVyZS5pbml0V2l0aFNpemUodGhpcy5ub2RlLndpZHRoLCB0aGlzLm5vZGUuaGVpZ2h0LCBjYy5nZnguUkJfRk1UX1M4KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOmHjeWGmeWIneWni+WMliBGQk8g5LiT55SoIGNjLkNhbWVyYSAsIOiuvue9riBjdWxsaW5nTWFza++8jOW8gOWQr+iHquWumuS5ieWkp+Wwj+aooeW8j1xuICAgICAqIEBtZXRob2QgX2luaXRGQk9DYW1lcmFcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9pbml0RkJPQ2FtZXJhICgpIHtcbiAgICAgICAgdGhpcy5fc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fZmJvQ2FtZXJhLmN1bGxpbmdNYXNrID0gMHgwMDAwMDAwMDtcbiAgICAgICAgdGhpcy5fZmJvQ2FtZXJhLmN1bGxpbmdNYXNrIHw9IH4oMSA8PCB0aGlzLm5vZGUuZ3JvdXBJbmRleCk7XG5cbiAgICAgICAgdGhpcy5fZmJvQ2FtZXJhLmFsaWduV2l0aFNjcmVlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9mYm9DYW1lcmEub3J0aG9TaXplID0gdGhpcy5ub2RlLmhlaWdodCAvIDI7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDph43lhpl1cGRhdGUg55Sf5ZG95ZGo5pyf5Ye95pWw77yM5riy5p+T5YmN5ZCO5pu05paw6IqC54K555qE5Z2Q5qCHXG4gICAgICogQG1ldGhvZCB1cGRhdGVcbiAgICAgKi9cbiAgICB1cGRhdGVGQk8gKCkge1xuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9sZFBvc2l0aW9uID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xuICAgICAgICBpZiAodGhpcy5zeW5jQW5nbGUgJiYgdGhpcy5fdGFyZ2V0QW5nbGVPbGQgIT0gdGhpcy50YXJnZXQuYW5nbGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3RhcmdldEFuZ2xlT2xkID0gdGhpcy50YXJnZXQuYW5nbGU7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSB0aGlzLnRhcmdldC5hbmdsZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3luY1NjYWxlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fdGFyZ2V0U2NhbGVYT2xkICE9IHRoaXMudGFyZ2V0LnNjYWxlWCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RhcmdldFNjYWxlWE9sZCA9IHRoaXMudGFyZ2V0LnNjYWxlWDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl90YXJnZXRTY2FsZVlPbGQgIT0gdGhpcy50YXJnZXQuc2NhbGVZKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGFyZ2V0U2NhbGVZT2xkID0gdGhpcy50YXJnZXQuc2NhbGVZO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IHRoaXMudGFyZ2V0LnNjYWxlWCA9IDE7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVZID0gdGhpcy50YXJnZXQuc2NhbGVZID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYzKHRoaXMudGFyZ2V0LnggKyB0aGlzLm9mZnNldFggKiB0aGlzLnRhcmdldC5zY2FsZVgsIHRoaXMudGFyZ2V0LnkgKyB0aGlzLm9mZnNldFkgKiB0aGlzLnRhcmdldC5zY2FsZVksIDEpO1xuICAgICAgICB0aGlzLl9mYm9DYW1lcmEub3J0aG9TaXplID0gdGhpcy5ub2RlLmhlaWdodCAvIDIgKiB0aGlzLnRhcmdldC5zY2FsZVg7XG4gICAgICAgIHRoaXMuX3N1cGVyKCk7XG4gICAgICAgIHRoaXMuX2Zib0NhbWVyYS5vcnRob1NpemUgPSB0aGlzLm5vZGUuaGVpZ2h0IC8gMjtcbiAgICAgICAgY2MuQ2FtZXJhLm1haW4uY3VsbGluZ01hc2sgJj0gfigxIDw8IHRoaXMudGFyZ2V0Lmdyb3VwSW5kZXgpO1xuICAgICAgICBpZiAodGhpcy5zeW5jQW5nbGUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IHRoaXMudGFyZ2V0LmFuZ2xlID0gdGhpcy5fdGFyZ2V0QW5nbGVPbGQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3luY1NjYWxlKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gdGhpcy50YXJnZXQuc2NhbGVYID0gdGhpcy5fdGFyZ2V0U2NhbGVYT2xkO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWSA9IHRoaXMudGFyZ2V0LnNjYWxlWSA9IHRoaXMuX3RhcmdldFNjYWxlWU9sZDsgIFxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnNjYWxlWSAqPSAodGhpcy5mbGlwWSA/IC0xIDogMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjMob2xkUG9zaXRpb24ueCwgb2xkUG9zaXRpb24ueSwgMSk7XG4gICAgfSxcbiAgICBfX3ByZWxvYWQgKCkge1xuICAgICAgICBpZiAoQ0NfRURJVE9SKSB7XG4gICAgICAgICAgICB2YXIgRmxhZ3MgPSBjYy5PYmplY3QuRmxhZ3M7XG4gICAgICAgICAgICB0aGlzLl9vYmpGbGFncyB8PSAoRmxhZ3MuSXNTY2FsZUxvY2tlZCB8IEZsYWdzLklzQW5jaG9yTG9ja2VkIHwgRmxhZ3MuSXNQb3NpdGlvbkxvY2tlZCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMuX3N1cGVyKCk7XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMubm9kZS5ncm91cCA9IFwiY2xvbmVcIjtcbiAgICAgICAgdGhpcy51cGRhdGVUYXJnZXQoKTtcbiAgICB9LFxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5fdW5yZWdpc3Rlck5vZGVFdmVudCgpO1xuICAgICAgICB0aGlzLnRhcmdldC5ncm91cCA9IHRoaXMuX3RhcmdldEdyb3VwT2xkO1xuICAgIH1cbn0pO1xuIl19
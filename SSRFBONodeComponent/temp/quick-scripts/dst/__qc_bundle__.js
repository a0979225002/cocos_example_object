
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/TestList');
require('./assets/scripts/Testcase');
require('./assets/scripts/demo/2DDropShadow');
require('./assets/scripts/demo/CircularFog');
require('./assets/scripts/demo/Cyberpunk.fire');
require('./assets/scripts/demo/FoWTest');
require('./assets/scripts/demo/NightVision');
require('./assets/scripts/demo/SnowCover');
require('./assets/scripts/demo/WaterTurbulence');
require('./assets/scripts/ssr/fbo/component/FBONodeCaptureComponent');
require('./assets/scripts/ssr/fbo/component/FBONodeCloneComponent');
require('./assets/scripts/ssr/fbo/component/FBONodeComponent');
require('./assets/scripts/ssr/fbo/component/FBONodeGhostComponent');
require('./assets/scripts/ssr/fbo/component/FBONodeInPlaceComponent');
require('./assets/scripts/ssr/fbo/component/FBONodeRegionComponent');
require('./assets/scripts/ssr/fbo/component/FBONodeScreenComponent');
require('./assets/scripts/ssr/fbo/component/FBONodeTargetComponent');
require('./assets/scripts/ssr/fbo/namespace/FBONamespace');
require('./assets/scripts/ssr/fow/component/SSRFoWComponent');
require('./assets/scripts/ssr/fow/namespace/SSRFoWNamespace');
require('./assets/scripts/ssr/fow/util/SSRTiledFogOfWarUtil');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Testcase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '54322ynBmJOU4YG4EjpaC3k', 'Testcase');
// scripts/Testcase.js

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
cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    this._testcase = cc.director.getScene().name;
    cc.Canvas.instance.node.getChildByName("Title").getComponent(cc.Label).string = "Testcase - " + this._testcase;
  },
  start: function start() {
    if (this._testcase == "TargetSync") {
      this._graphics = this.node.addComponent(cc.Graphics);
      this._graphics.lineWidth = 2;
      this._graphics.strokeColor = cc.Color.WHITE; //

      var spriteScaleAnimated = cc.Canvas.instance.node.getChildByName("SpriteScaleAnimated");
      cc.tween(spriteScaleAnimated).repeatForever(cc.tween().to(3, {
        scale: 0.3
      }).to(3, {
        scale: 1.2
      })).start();
      var spriteAngleAnimated = cc.Canvas.instance.node.getChildByName("SpriteAngleAnimated");
      cc.tween(spriteAngleAnimated).by(3, {
        angle: 360
      }).repeatForever().start();
      var spriteSizeAnimated = cc.Canvas.instance.node.getChildByName("SpriteSizeAnimated");
      cc.tween(spriteSizeAnimated).repeatForever(cc.tween().to(3, {
        width: 100
      }).to(3, {
        width: 300
      })).start();
      var spriteAnchorAnimated = cc.Canvas.instance.node.getChildByName("SpriteAnchorAnimated");
      cc.tween(spriteAnchorAnimated).repeatForever(cc.tween().to(3, {
        anchorX: 0,
        anchorY: 1
      }).to(3, {
        anchorX: 1,
        anchorY: 0
      })).start();
    } else if (this._testcase == "ScreenCapture") {
      var fboNodeCapture = cc.Canvas.instance.node.getChildByName("FBONodeCapture");
      this.scheduleOnce(function () {
        var info = fboNodeCapture.getComponent("FBONodeCaptureComponent").capture("ScreenCapture.png");
        cc.Canvas.instance.node.getChildByName("CaptureInfo").getComponent(cc.Label).string += info;
      }, 2);
    } else if (this._testcase == "InPlaceCapture") {
      var _fboNodeCapture = cc.Canvas.instance.node.getChildByName("FBONodeCapture");

      this.scheduleOnce(function () {
        var info = _fboNodeCapture.getComponent("FBONodeCaptureComponent").capture("InPlaceCapture.png");

        cc.Canvas.instance.node.getChildByName("CaptureInfo").getComponent(cc.Label).string += info;
      }, 2);
    } else if (this._testcase == "RegionCapture") {
      var _fboNodeCapture2 = cc.Canvas.instance.node.getChildByName("FBONodeCapture");

      this.scheduleOnce(function () {
        var info = _fboNodeCapture2.getComponent("FBONodeCaptureComponent").capture("RegionCapture.png");

        cc.Canvas.instance.node.getChildByName("CaptureInfo").getComponent(cc.Label).string += info;
      }, 2);
    } else if (this._testcase == "TargetCapture") {
      var fboNodeCapture1 = cc.Canvas.instance.node.getChildByName("FBONodeCapture1");
      var fboNodeCapture2 = cc.Canvas.instance.node.getChildByName("FBONodeCapture2");
      var fboNodeCapture3 = cc.Canvas.instance.node.getChildByName("FBONodeCapture3");
      var fboNodeCapture4 = cc.Canvas.instance.node.getChildByName("FBONodeCapture4");
      var fboNodeCapture5 = cc.Canvas.instance.node.getChildByName("FBONodeCapture5");
      var fboNodeCapture6 = cc.Canvas.instance.node.getChildByName("FBONodeCapture6");
      var fboNodeCapture7 = cc.Canvas.instance.node.getChildByName("FBONodeCapture7");
      this.scheduleOnce(function () {
        fboNodeCapture1.getComponent("FBONodeCaptureComponent").capture("TargetCapture1.png");
        fboNodeCapture2.getComponent("FBONodeCaptureComponent").capture("TargetCapture2.png");
        fboNodeCapture3.getComponent("FBONodeCaptureComponent").capture("TargetCapture3.png");
        fboNodeCapture4.getComponent("FBONodeCaptureComponent").capture("TargetCapture4.png");
        fboNodeCapture5.getComponent("FBONodeCaptureComponent").capture("TargetCapture5.png");
        fboNodeCapture6.getComponent("FBONodeCaptureComponent").capture("TargetCapture6.png");
        var info = fboNodeCapture7.getComponent("FBONodeCaptureComponent").capture("TargetCapture7.png");
        cc.Canvas.instance.node.getChildByName("CaptureInfo").getComponent(cc.Label).string += info;
      }, 2);
    } else if (this._testcase == "GhostCapture") {
      var _fboNodeCapture3 = cc.Canvas.instance.node.getChildByName("FBONodeCapture1");

      var _fboNodeCapture4 = cc.Canvas.instance.node.getChildByName("FBONodeCapture2");

      this.scheduleOnce(function () {
        _fboNodeCapture3.getComponent("FBONodeCaptureComponent").capture("TargetCapture1.png");

        var info = _fboNodeCapture4.getComponent("FBONodeCaptureComponent").capture("TargetCapture1.png");

        cc.Canvas.instance.node.getChildByName("CaptureInfo").getComponent(cc.Label).string += info;
      }, 2);
    } else if (this._testcase == "CloneCapture") {
      var _fboNodeCapture5 = cc.Canvas.instance.node.getChildByName("FBONodeCapture1");

      var _fboNodeCapture6 = cc.Canvas.instance.node.getChildByName("FBONodeCapture2");

      this.scheduleOnce(function () {
        _fboNodeCapture5.getComponent("FBONodeCaptureComponent").capture("TargetCapture1.png");

        var info = _fboNodeCapture6.getComponent("FBONodeCaptureComponent").capture("TargetCapture1.png");

        cc.Canvas.instance.node.getChildByName("CaptureInfo").getComponent(cc.Label).string += info;
      }, 3);
    }
  },
  update: function update() {
    if (this._testcase == "TargetSync") {
      this._graphics.clear();

      var spriteScaleAnimated = cc.Canvas.instance.node.getChildByName("SpriteScaleAnimated");

      this._graphics.rect(spriteScaleAnimated.getBoundingBox().x, spriteScaleAnimated.getBoundingBox().y, spriteScaleAnimated.getBoundingBox().width, spriteScaleAnimated.getBoundingBox().height);

      var fboNodeSyncScaleOff = cc.Canvas.instance.node.getChildByName("FBONodeSyncScaleOff");

      this._graphics.rect(fboNodeSyncScaleOff.getBoundingBox().x, fboNodeSyncScaleOff.getBoundingBox().y, fboNodeSyncScaleOff.getBoundingBox().width, fboNodeSyncScaleOff.getBoundingBox().height);

      var fboNodeSyncScaleOn = cc.Canvas.instance.node.getChildByName("FBONodeSyncScaleOn");

      this._graphics.rect(fboNodeSyncScaleOn.getBoundingBox().x, fboNodeSyncScaleOn.getBoundingBox().y, fboNodeSyncScaleOn.getBoundingBox().width, fboNodeSyncScaleOn.getBoundingBox().height); //


      var spriteAngleAnimated = cc.Canvas.instance.node.getChildByName("SpriteAngleAnimated");

      this._graphics.rect(spriteAngleAnimated.getBoundingBox().x, spriteAngleAnimated.getBoundingBox().y, spriteAngleAnimated.getBoundingBox().width, spriteAngleAnimated.getBoundingBox().height);

      var fboNodeSyncAngleOff = cc.Canvas.instance.node.getChildByName("FBONodeSyncAngleOff");

      this._graphics.rect(fboNodeSyncAngleOff.getBoundingBox().x, fboNodeSyncAngleOff.getBoundingBox().y, fboNodeSyncAngleOff.getBoundingBox().width, fboNodeSyncAngleOff.getBoundingBox().height);

      var fboNodeSyncAngleOn = cc.Canvas.instance.node.getChildByName("FBONodeSyncAngleOn");

      this._graphics.rect(fboNodeSyncAngleOn.getBoundingBox().x, fboNodeSyncAngleOn.getBoundingBox().y, fboNodeSyncAngleOn.getBoundingBox().width, fboNodeSyncAngleOn.getBoundingBox().height); //


      var spriteSizeAnimated = cc.Canvas.instance.node.getChildByName("SpriteSizeAnimated");

      this._graphics.rect(spriteSizeAnimated.getBoundingBox().x, spriteSizeAnimated.getBoundingBox().y, spriteSizeAnimated.getBoundingBox().width, spriteSizeAnimated.getBoundingBox().height);

      var fboNodeSyncSizeOff = cc.Canvas.instance.node.getChildByName("FBONodeSyncSizeOff");

      this._graphics.rect(fboNodeSyncSizeOff.getBoundingBox().x, fboNodeSyncSizeOff.getBoundingBox().y, fboNodeSyncSizeOff.getBoundingBox().width, fboNodeSyncSizeOff.getBoundingBox().height);

      var fboNodeSyncSizeOn = cc.Canvas.instance.node.getChildByName("FBONodeSyncSizeOn");

      this._graphics.rect(fboNodeSyncSizeOn.getBoundingBox().x, fboNodeSyncSizeOn.getBoundingBox().y, fboNodeSyncSizeOn.getBoundingBox().width, fboNodeSyncSizeOn.getBoundingBox().height); //


      var spriteAnchorAnimated = cc.Canvas.instance.node.getChildByName("SpriteAnchorAnimated");

      this._graphics.rect(spriteAnchorAnimated.getBoundingBox().x, spriteAnchorAnimated.getBoundingBox().y, spriteAnchorAnimated.getBoundingBox().width, spriteAnchorAnimated.getBoundingBox().height);

      var fboNodeSyncAnchorOff = cc.Canvas.instance.node.getChildByName("FBONodeSyncAnchorOff");

      this._graphics.rect(fboNodeSyncAnchorOff.getBoundingBox().x, fboNodeSyncAnchorOff.getBoundingBox().y, fboNodeSyncAnchorOff.getBoundingBox().width, fboNodeSyncAnchorOff.getBoundingBox().height);

      var fboNodeSyncAnchorOn = cc.Canvas.instance.node.getChildByName("FBONodeSyncAnchorOn");

      this._graphics.rect(fboNodeSyncAnchorOn.getBoundingBox().x, fboNodeSyncAnchorOn.getBoundingBox().y, fboNodeSyncAnchorOn.getBoundingBox().width, fboNodeSyncAnchorOn.getBoundingBox().height);

      this._graphics.stroke();
    }
  },
  testFlipY: function testFlipY() {
    var fboNode1 = cc.Canvas.instance.node.getChildByName("FBONode1").getComponent("FBONodeTargetComponent");
    fboNode1.flipY = !fboNode1.flipY;
    var fboNode2 = cc.Canvas.instance.node.getChildByName("FBONode2").getComponent("FBONodeTargetComponent");
    fboNode2.flipY = !fboNode2.flipY;
    var fboNode3 = cc.Canvas.instance.node.getChildByName("FBONode3").getComponent("FBONodeTargetComponent");
    fboNode3.flipY = !fboNode3.flipY;
    var fboNode4 = cc.Canvas.instance.node.getChildByName("FBONode4").getComponent("FBONodeTargetComponent");
    fboNode4.flipY = !fboNode4.flipY;
    var fboNode5 = cc.Canvas.instance.node.getChildByName("FBONode5").getComponent("FBONodeTargetComponent");
    fboNode5.flipY = !fboNode5.flipY;
    var fboNode6 = cc.Canvas.instance.node.getChildByName("FBONode6").getComponent("FBONodeTargetComponent");
    fboNode6.flipY = !fboNode6.flipY;
    var fboNode7 = cc.Canvas.instance.node.getChildByName("FBONode7").getComponent("FBONodeTargetComponent");
    fboNode7.flipY = !fboNode7.flipY;
  },
  testUpdateFBO: function testUpdateFBO() {
    var fboNode = cc.Canvas.instance.node.getChildByName("FBONodeUpdateOnce").getComponent("FBONodeTargetComponent");
    fboNode.updateFBO();
  },
  back: function back() {
    cc.director.loadScene('TestList');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVGVzdGNhc2UuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJfdGVzdGNhc2UiLCJkaXJlY3RvciIsImdldFNjZW5lIiwibmFtZSIsIkNhbnZhcyIsImluc3RhbmNlIiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJzdGFydCIsIl9ncmFwaGljcyIsImFkZENvbXBvbmVudCIsIkdyYXBoaWNzIiwibGluZVdpZHRoIiwic3Ryb2tlQ29sb3IiLCJDb2xvciIsIldISVRFIiwic3ByaXRlU2NhbGVBbmltYXRlZCIsInR3ZWVuIiwicmVwZWF0Rm9yZXZlciIsInRvIiwic2NhbGUiLCJzcHJpdGVBbmdsZUFuaW1hdGVkIiwiYnkiLCJhbmdsZSIsInNwcml0ZVNpemVBbmltYXRlZCIsIndpZHRoIiwic3ByaXRlQW5jaG9yQW5pbWF0ZWQiLCJhbmNob3JYIiwiYW5jaG9yWSIsImZib05vZGVDYXB0dXJlIiwic2NoZWR1bGVPbmNlIiwiaW5mbyIsImNhcHR1cmUiLCJmYm9Ob2RlQ2FwdHVyZTEiLCJmYm9Ob2RlQ2FwdHVyZTIiLCJmYm9Ob2RlQ2FwdHVyZTMiLCJmYm9Ob2RlQ2FwdHVyZTQiLCJmYm9Ob2RlQ2FwdHVyZTUiLCJmYm9Ob2RlQ2FwdHVyZTYiLCJmYm9Ob2RlQ2FwdHVyZTciLCJ1cGRhdGUiLCJjbGVhciIsInJlY3QiLCJnZXRCb3VuZGluZ0JveCIsIngiLCJ5IiwiaGVpZ2h0IiwiZmJvTm9kZVN5bmNTY2FsZU9mZiIsImZib05vZGVTeW5jU2NhbGVPbiIsImZib05vZGVTeW5jQW5nbGVPZmYiLCJmYm9Ob2RlU3luY0FuZ2xlT24iLCJmYm9Ob2RlU3luY1NpemVPZmYiLCJmYm9Ob2RlU3luY1NpemVPbiIsImZib05vZGVTeW5jQW5jaG9yT2ZmIiwiZmJvTm9kZVN5bmNBbmNob3JPbiIsInN0cm9rZSIsInRlc3RGbGlwWSIsImZib05vZGUxIiwiZmxpcFkiLCJmYm9Ob2RlMiIsImZib05vZGUzIiwiZmJvTm9kZTQiLCJmYm9Ob2RlNSIsImZib05vZGU2IiwiZmJvTm9kZTciLCJ0ZXN0VXBkYXRlRkJPIiwiZmJvTm9kZSIsInVwZGF0ZUZCTyIsImJhY2siLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRSxFQUZQO0FBSUxDLEVBQUFBLE1BSkssb0JBSUs7QUFDTixTQUFLQyxTQUFMLEdBQWlCTCxFQUFFLENBQUNNLFFBQUgsQ0FBWUMsUUFBWixHQUF1QkMsSUFBeEM7QUFDQVIsSUFBQUEsRUFBRSxDQUFDUyxNQUFILENBQVVDLFFBQVYsQ0FBbUJDLElBQW5CLENBQXdCQyxjQUF4QixDQUF1QyxPQUF2QyxFQUFnREMsWUFBaEQsQ0FBNkRiLEVBQUUsQ0FBQ2MsS0FBaEUsRUFBdUVDLE1BQXZFLEdBQWdGLGdCQUFnQixLQUFLVixTQUFyRztBQUNILEdBUEk7QUFRTFcsRUFBQUEsS0FSSyxtQkFRSTtBQUNMLFFBQUksS0FBS1gsU0FBTCxJQUFrQixZQUF0QixFQUFvQztBQUNoQyxXQUFLWSxTQUFMLEdBQWlCLEtBQUtOLElBQUwsQ0FBVU8sWUFBVixDQUF1QmxCLEVBQUUsQ0FBQ21CLFFBQTFCLENBQWpCO0FBQ0EsV0FBS0YsU0FBTCxDQUFlRyxTQUFmLEdBQTJCLENBQTNCO0FBQ0EsV0FBS0gsU0FBTCxDQUFlSSxXQUFmLEdBQTZCckIsRUFBRSxDQUFDc0IsS0FBSCxDQUFTQyxLQUF0QyxDQUhnQyxDQUloQzs7QUFDQSxVQUFJQyxtQkFB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RCxDQUFnRSx3QkFBaEUsQ0FBZjtBQUNBMkQsSUFBQUEsUUFBUSxDQUFDTixLQUFULEdBQWlCLENBQUNNLFFBQVEsQ0FBQ04sS0FBM0I7QUFDSCxHQTFKSTtBQTJKTE8sRUFBQUEsYUEzSkssMkJBMkpZO0FBQ2IsUUFBSUMsT0FBTyxHQUFHMUUsRUFBRSxDQUFDUyxNQUFILENBQVVDLFFBQVYsQ0FBbUJDLElBQW5CLENBQXdCQyxjQUF4QixDQUF1QyxtQkFBdkMsRUFBNERDLFlBQTVELENBQXlFLHdCQUF6RSxDQUFkO0FBQ0E2RCxJQUFBQSxPQUFPLENBQUNDLFNBQVI7QUFDSCxHQTlKSTtBQStKTEMsRUFBQUEsSUEvSkssa0JBK0pHO0FBQ0o1RSxJQUFBQSxFQUFFLENBQUNNLFFBQUgsQ0FBWXVFLFNBQVosQ0FBc0IsVUFBdEI7QUFDSDtBQWpLSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDIwIFN1cGVyU3VSYWNjb29uXG4gXG4gU2l0ZTogaHR0cDovL3d3dy5zdXBlcnN1cmFjY29vbi1jb2NvczJkLmNvbVxuIE1haWw6IHN1cGVyc3VyYWNjb29uQGdtYWlsLmNvbVxuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiBcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgcHJvcGVydGllczoge1xuICAgIH0sXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5fdGVzdGNhc2UgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWU7XG4gICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGl0bGVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlRlc3RjYXNlIC0gXCIgKyB0aGlzLl90ZXN0Y2FzZTtcbiAgICB9LFxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Rlc3RjYXNlID09IFwiVGFyZ2V0U3luY1wiKSB7XG4gICAgICAgICAgICB0aGlzLl9ncmFwaGljcyA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICAgICAgdGhpcy5fZ3JhcGhpY3MubGluZVdpZHRoID0gMjtcbiAgICAgICAgICAgIHRoaXMuX2dyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgbGV0IHNwcml0ZVNjYWxlQW5pbWF0ZWQgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlNwcml0ZVNjYWxlQW5pbWF0ZWRcIik7XG4gICAgICAgICAgICBjYy50d2VlbihzcHJpdGVTY2FsZUFuaW1hdGVkKVxuICAgICAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKFxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMywge3NjYWxlOiAwLjN9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDMsIHtzY2FsZTogMS4yfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgIGxldCBzcHJpdGVBbmdsZUFuaW1hdGVkID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJTcHJpdGVBbmdsZUFuaW1hdGVkXCIpO1xuICAgICAgICAgICAgY2MudHdlZW4oc3ByaXRlQW5nbGVBbmltYXRlZClcbiAgICAgICAgICAgICAgICAuYnkoMywge2FuZ2xlOiAzNjB9KVxuICAgICAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKClcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICAgICAgbGV0IHNwcml0ZVNpemVBbmltYXRlZCA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiU3ByaXRlU2l6ZUFuaW1hdGVkXCIpO1xuICAgICAgICAgICAgY2MudHdlZW4oc3ByaXRlU2l6ZUFuaW1hdGVkKVxuICAgICAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKFxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMywge3dpZHRoOiAxMDB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDMsIHt3aWR0aDogMzAwfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgIGxldCBzcHJpdGVBbmNob3JBbmltYXRlZCA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiU3ByaXRlQW5jaG9yQW5pbWF0ZWRcIik7XG4gICAgICAgICAgICBjYy50d2VlbihzcHJpdGVBbmNob3JBbmltYXRlZClcbiAgICAgICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDMsIHthbmNob3JYOiAwLCBhbmNob3JZOiAxfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygzLCB7YW5jaG9yWDogMSwgYW5jaG9yWTogMH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3Rlc3RjYXNlID09IFwiU2NyZWVuQ2FwdHVyZVwiKSB7XG4gICAgICAgICAgICBsZXQgZmJvTm9kZUNhcHR1cmUgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkZCT05vZGVDYXB0dXJlXCIpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZm8gPSBmYm9Ob2RlQ2FwdHVyZS5nZXRDb21wb25lbnQoXCJGQk9Ob2RlQ2FwdHVyZUNvbXBvbmVudFwiKS5jYXB0dXJlKFwiU2NyZWVuQ2FwdHVyZS5wbmdcIik7XG4gICAgICAgICAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYXB0dXJlSW5mb1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyArPSBpbmZvO1xuICAgICAgICAgICAgfSwgMik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fdGVzdGNhc2UgPT0gXCJJblBsYWNlQ2FwdHVyZVwiKSB7XG4gICAgICAgICAgICBsZXQgZmJvTm9kZUNhcHR1cmUgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkZCT05vZGVDYXB0dXJlXCIpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZm8gPSBmYm9Ob2RlQ2FwdHVyZS5nZXRDb21wb25lbnQoXCJGQk9Ob2RlQ2FwdHVyZUNvbXBvbmVudFwiKS5jYXB0dXJlKFwiSW5QbGFjZUNhcHR1cmUucG5nXCIpO1xuICAgICAgICAgICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ2FwdHVyZUluZm9cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgKz0gaW5mbztcbiAgICAgICAgICAgIH0sIDIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3Rlc3RjYXNlID09IFwiUmVnaW9uQ2FwdHVyZVwiKSB7XG4gICAgICAgICAgICBsZXQgZmJvTm9kZUNhcHR1cmUgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkZCT05vZGVDYXB0dXJlXCIpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZm8gPSBmYm9Ob2RlQ2FwdHVyZS5nZXRDb21wb25lbnQoXCJGQk9Ob2RlQ2FwdHVyZUNvbXBvbmVudFwiKS5jYXB0dXJlKFwiUmVnaW9uQ2FwdHVyZS5wbmdcIik7XG4gICAgICAgICAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYXB0dXJlSW5mb1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyArPSBpbmZvO1xuICAgICAgICAgICAgfSwgMik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fdGVzdGNhc2UgPT0gXCJUYXJnZXRDYXB0dXJlXCIpIHtcbiAgICAgICAgICAgIGxldCBmYm9Ob2RlQ2FwdHVyZTEgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkZCT05vZGVDYXB0dXJlMVwiKTtcbiAgICAgICAgICAgIGxldCBmYm9Ob2RlQ2FwdHVyZTIgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkZCT05vZGVDYXB0dXJlMlwiKTtcbiAgICAgICAgICAgIGxldCBmYm9Ob2RlQ2FwdHVyZTMgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkZCT05vZGVDYXB0dXJlM1wiKTtcbiAgICAgICAgICAgIGxldCBmYm9Ob2RlQ2FwdHVyZTQgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkZCT05vZGVDYXB0dXJlNFwiKTtcbiAgICAgICAgICAgIGxldCBmYm9Ob2RlQ2FwdHVyZTUgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkZCT05vZGVDYXB0dXJlNVwiKTtcbiAgICAgICAgICAgIGxldCBmYm9Ob2RlQ2FwdHVyZTYgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkZCT05vZGVDYXB0dXJlNlwiKTtcbiAgICAgICAgICAgIGxldCBmYm9Ob2RlQ2FwdHVyZTcgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkZCT05vZGVDYXB0dXJlN1wiKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGZib05vZGVDYXB0dXJlMS5nZXRDb21wb25lbnQoXCJGQk9Ob2RlQ2FwdHVyZUNvbXBvbmVudFwiKS5jYXB0dXJlKFwiVGFyZ2V0Q2FwdHVyZTEucG5nXCIpO1xuICAgICAgICAgICAgICAgIGZib05vZGVDYXB0dXJlMi5nZXRDb21wb25lbnQoXCJGQk9Ob2RlQ2FwdHVyZUNvbXBvbmVudFwiKS5jYXB0dXJlKFwiVGFyZ2V0Q2FwdHVyZTIucG5nXCIpO1xuICAgICAgICAgICAgICAgIGZib05vZGVDYXB0dXJlMy5nZXRDb21wb25lbnQoXCJGQk9Ob2RlQ2FwdHVyZUNvbXBvbmVudFwiKS5jYXB0dXJlKFwiVGFyZ2V0Q2FwdHVyZTMucG5nXCIpO1xuICAgICAgICAgICAgICAgIGZib05vZGVDYXB0dXJlNC5nZXRDb21wb25lbnQoXCJGQk9Ob2RlQ2FwdHVyZUNvbXBvbmVudFwiKS5jYXB0dXJlKFwiVGFyZ2V0Q2FwdHVyZTQucG5nXCIpO1xuICAgICAgICAgICAgICAgIGZib05vZGVDYXB0dXJlNS5nZXRDb21wb25lbnQoXCJGQk9Ob2RlQ2FwdHVyZUNvbXBvbmVudFwiKS5jYXB0dXJlKFwiVGFyZ2V0Q2FwdHVyZTUucG5nXCIpO1xuICAgICAgICAgICAgICAgIGZib05vZGVDYXB0dXJlNi5nZXRDb21wb25lbnQoXCJGQk9Ob2RlQ2FwdHVyZUNvbXBvbmVudFwiKS5jYXB0dXJlKFwiVGFyZ2V0Q2FwdHVyZTYucG5nXCIpO1xuICAgICAgICAgICAgICAgIGxldCBpbmZvID0gZmJvTm9kZUNhcHR1cmU3LmdldENvbXBvbmVudChcIkZCT05vZGVDYXB0dXJlQ29tcG9uZW50XCIpLmNhcHR1cmUoXCJUYXJnZXRDYXB0dXJlNy5wbmdcIik7XG4gICAgICAgICAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYXB0dXJlSW5mb1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyArPSBpbmZvO1xuICAgICAgICAgICAgfSwgMik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fdGVzdGNhc2UgPT0gXCJHaG9zdENhcHR1cmVcIikge1xuICAgICAgICAgICAgbGV0IGZib05vZGVDYXB0dXJlMSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiRkJPTm9kZUNhcHR1cmUxXCIpO1xuICAgICAgICAgICAgbGV0IGZib05vZGVDYXB0dXJlMiA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiRkJPTm9kZUNhcHR1cmUyXCIpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZmJvTm9kZUNhcHR1cmUxLmdldENvbXBvbmVudChcIkZCT05vZGVDYXB0dXJlQ29tcG9uZW50XCIpLmNhcHR1cmUoXCJUYXJnZXRDYXB0dXJlMS5wbmdcIik7XG4gICAgICAgICAgICAgICAgbGV0IGluZm8gPSBmYm9Ob2RlQ2FwdHVyZTIuZ2V0Q29tcG9uZW50KFwiRkJPTm9kZUNhcHR1cmVDb21wb25lbnRcIikuY2FwdHVyZShcIlRhcmdldENhcHR1cmUxLnBuZ1wiKTtcbiAgICAgICAgICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhcHR1cmVJbmZvXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nICs9IGluZm87XG4gICAgICAgICAgICB9LCAyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl90ZXN0Y2FzZSA9PSBcIkNsb25lQ2FwdHVyZVwiKSB7XG4gICAgICAgICAgICBsZXQgZmJvTm9kZUNhcHR1cmUxID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJGQk9Ob2RlQ2FwdHVyZTFcIik7XG4gICAgICAgICAgICBsZXQgZmJvTm9kZUNhcHR1cmUyID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJGQk9Ob2RlQ2FwdHVyZTJcIik7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBmYm9Ob2RlQ2FwdHVyZTEuZ2V0Q29tcG9uZW50KFwiRkJPTm9kZUNhcHR1cmVDb21wb25lbnRcIikuY2FwdHVyZShcIlRhcmdldENhcHR1cmUxLnBuZ1wiKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5mbyA9IGZib05vZGVDYXB0dXJlMi5nZXRDb21wb25lbnQoXCJGQk9Ob2RlQ2FwdHVyZUNvbXBvbmVudFwiKS5jYXB0dXJlKFwiVGFyZ2V0Q2FwdHVyZTEucG5nXCIpO1xuICAgICAgICAgICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ2FwdHVyZUluZm9cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgKz0gaW5mbztcbiAgICAgICAgICAgIH0sIDMpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGUgKCkge1xuICAgICAgICBpZiAodGhpcy5fdGVzdGNhc2UgPT0gXCJUYXJnZXRTeW5jXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2dyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgICAgICBsZXQgc3ByaXRlU2NhbGVBbmltYXRlZCA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiU3ByaXRlU2NhbGVBbmltYXRlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuX2dyYXBoaWNzLnJlY3Qoc3ByaXRlU2NhbGVBbmltYXRlZC5nZXRCb3VuZGluZ0JveCgpLngsIHNwcml0ZVNjYWxlQW5pbWF0ZWQuZ2V0Qm91bmRpbmdCb3goKS55LCBzcHJpdGVTY2FsZUFuaW1hdGVkLmdldEJvdW5kaW5nQm94KCkud2lkdGgsIHNwcml0ZVNjYWxlQW5pbWF0ZWQuZ2V0Qm91bmRpbmdCb3goKS5oZWlnaHQpO1xuICAgICAgICAgICAgbGV0IGZib05vZGVTeW5jU2NhbGVPZmYgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkZCT05vZGVTeW5jU2NhbGVPZmZcIik7XG4gICAgICAgICAgICB0aGlzLl9ncmFwaGljcy5yZWN0KGZib05vZGVTeW5jU2NhbGVPZmYuZ2V0Qm91bmRpbmdCb3goKS54LCBmYm9Ob2RlU3luY1NjYWxlT2ZmLmdldEJvdW5kaW5nQm94KCkueSwgZmJvTm9kZVN5bmNTY2FsZU9mZi5nZXRCb3VuZGluZ0JveCgpLndpZHRoLCBmYm9Ob2RlU3luY1NjYWxlT2ZmLmdldEJvdW5kaW5nQm94KCkuaGVpZ2h0KTtcbiAgICAgICAgICAgIGxldCBmYm9Ob2RlU3luY1NjYWxlT24gPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkZCT05vZGVTeW5jU2NhbGVPblwiKTtcbiAgICAgICAgICAgIHRoaXMuX2dyYXBoaWNzLnJlY3QoZmJvTm9kZVN5bmNTY2FsZU9uLmdldEJvdW5kaW5nQm94KCkueCwgZmJvTm9kZVN5bmNTY2FsZU9uLmdldEJvdW5kaW5nQm94KCkueSwgZmJvTm9kZVN5bmNTY2FsZU9uLmdldEJvdW5kaW5nQm94KCkud2lkdGgsIGZib05vZGVTeW5jU2NhbGVPbi5nZXRCb3VuZGluZ0JveCgpLmhlaWdodCk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgbGV0IHNwcml0ZUFuZ2xlQW5pbWF0ZWQgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlNwcml0ZUFuZ2xlQW5pbWF0ZWRcIik7XG4gICAgICAgICAgICB0aGlzLl9ncmFwaGljcy5yZWN0KHNwcml0ZUFuZ2xlQW5pbWF0ZWQuZ2V0Qm91bmRpbmdCb3goKS54LCBzcHJpdGVBbmdsZUFuaW1hdGVkLmdldEJvdW5kaW5nQm94KCkueSwgc3ByaXRlQW5nbGVBbmltYXRlZC5nZXRCb3VuZGluZ0JveCgpLndpZHRoLCBzcHJpdGVBbmdsZUFuaW1hdGVkLmdldEJvdW5kaW5nQm94KCkuaGVpZ2h0KTtcbiAgICAgICAgICAgIGxldCBmYm9Ob2RlU3luY0FuZ2xlT2ZmID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJGQk9Ob2RlU3luY0FuZ2xlT2ZmXCIpO1xuICAgICAgICAgICAgdGhpcy5fZ3JhcGhpY3MucmVjdChmYm9Ob2RlU3luY0FuZ2xlT2ZmLmdldEJvdW5kaW5nQm94KCkueCwgZmJvTm9kZVN5bmNBbmdsZU9mZi5nZXRCb3VuZGluZ0JveCgpLnksIGZib05vZGVTeW5jQW5nbGVPZmYuZ2V0Qm91bmRpbmdCb3goKS53aWR0aCwgZmJvTm9kZVN5bmNBbmdsZU9mZi5nZXRCb3VuZGluZ0JveCgpLmhlaWdodCk7XG4gICAgICAgICAgICBsZXQgZmJvTm9kZVN5bmNBbmdsZU9uID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJGQk9Ob2RlU3luY0FuZ2xlT25cIik7XG4gICAgICAgICAgICB0aGlzLl9ncmFwaGljcy5yZWN0KGZib05vZGVTeW5jQW5nbGVPbi5nZXRCb3VuZGluZ0JveCgpLngsIGZib05vZGVTeW5jQW5nbGVPbi5nZXRCb3VuZGluZ0JveCgpLnksIGZib05vZGVTeW5jQW5nbGVPbi5nZXRCb3VuZGluZ0JveCgpLndpZHRoLCBmYm9Ob2RlU3luY0FuZ2xlT24uZ2V0Qm91bmRpbmdCb3goKS5oZWlnaHQpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIGxldCBzcHJpdGVTaXplQW5pbWF0ZWQgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlNwcml0ZVNpemVBbmltYXRlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuX2dyYXBoaWNzLnJlY3Qoc3ByaXRlU2l6ZUFuaW1hdGVkLmdldEJvdW5kaW5nQm94KCkueCwgc3ByaXRlU2l6ZUFuaW1hdGVkLmdldEJvdW5kaW5nQm94KCkueSwgc3ByaXRlU2l6ZUFuaW1hdGVkLmdldEJvdW5kaW5nQm94KCkud2lkdGgsIHNwcml0ZVNpemVBbmltYXRlZC5nZXRCb3VuZGluZ0JveCgpLmhlaWdodCk7XG4gICAgICAgICAgICBsZXQgZmJvTm9kZVN5bmNTaXplT2ZmID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJGQk9Ob2RlU3luY1NpemVPZmZcIik7XG4gICAgICAgICAgICB0aGlzLl9ncmFwaGljcy5yZWN0KGZib05vZGVTeW5jU2l6ZU9mZi5nZXRCb3VuZGluZ0JveCgpLngsIGZib05vZGVTeW5jU2l6ZU9mZi5nZXRCb3VuZGluZ0JveCgpLnksIGZib05vZGVTeW5jU2l6ZU9mZi5nZXRCb3VuZGluZ0JveCgpLndpZHRoLCBmYm9Ob2RlU3luY1NpemVPZmYuZ2V0Qm91bmRpbmdCb3goKS5oZWlnaHQpO1xuICAgICAgICAgICAgbGV0IGZib05vZGVTeW5jU2l6ZU9uID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJGQk9Ob2RlU3luY1NpemVPblwiKTtcbiAgICAgICAgICAgIHRoaXMuX2dyYXBoaWNzLnJlY3QoZmJvTm9kZVN5bmNTaXplT24uZ2V0Qm91bmRpbmdCb3goKS54LCBmYm9Ob2RlU3luY1NpemVPbi5nZXRCb3VuZGluZ0JveCgpLnksIGZib05vZGVTeW5jU2l6ZU9uLmdldEJvdW5kaW5nQm94KCkud2lkdGgsIGZib05vZGVTeW5jU2l6ZU9uLmdldEJvdW5kaW5nQm94KCkuaGVpZ2h0KTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICBsZXQgc3ByaXRlQW5jaG9yQW5pbWF0ZWQgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlNwcml0ZUFuY2hvckFuaW1hdGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5fZ3JhcGhpY3MucmVjdChzcHJpdGVBbmNob3JBbmltYXRlZC5nZXRCb3VuZGluZ0JveCgpLngsIHNwcml0ZUFuY2hvckFuaW1hdGVkLmdldEJvdW5kaW5nQm94KCkueSwgc3ByaXRlQW5jaG9yQW5pbWF0ZWQuZ2V0Qm91bmRpbmdCb3goKS53aWR0aCwgc3ByaXRlQW5jaG9yQW5pbWF0ZWQuZ2V0Qm91bmRpbmdCb3goKS5oZWlnaHQpO1xuICAgICAgICAgICAgbGV0IGZib05vZGVTeW5jQW5jaG9yT2ZmID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJGQk9Ob2RlU3luY0FuY2hvck9mZlwiKTtcbiAgICAgICAgICAgIHRoaXMuX2dyYXBoaWNzLnJlY3QoZmJvTm9kZVN5bmNBbmNob3JPZmYuZ2V0Qm91bmRpbmdCb3goKS54LCBmYm9Ob2RlU3luY0FuY2hvck9mZi5nZXRCb3VuZGluZ0JveCgpLnksIGZib05vZGVTeW5jQW5jaG9yT2ZmLmdldEJvdW5kaW5nQm94KCkud2lkdGgsIGZib05vZGVTeW5jQW5jaG9yT2ZmLmdldEJvdW5kaW5nQm94KCkuaGVpZ2h0KTtcbiAgICAgICAgICAgIGxldCBmYm9Ob2RlU3luY0FuY2hvck9uID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJGQk9Ob2RlU3luY0FuY2hvck9uXCIpO1xuICAgICAgICAgICAgdGhpcy5fZ3JhcGhpY3MucmVjdChmYm9Ob2RlU3luY0FuY2hvck9uLmdldEJvdW5kaW5nQm94KCkueCwgZmJvTm9kZVN5bmNBbmNob3JPbi5nZXRCb3VuZGluZ0JveCgpLnksIGZib05vZGVTeW5jQW5jaG9yT24uZ2V0Qm91bmRpbmdCb3goKS53aWR0aCwgZmJvTm9kZVN5bmNBbmNob3JPbi5nZXRCb3VuZGluZ0JveCgpLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLl9ncmFwaGljcy5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdGVzdEZsaXBZICgpIHtcbiAgICAgICAgbGV0IGZib05vZGUxID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJGQk9Ob2RlMVwiKS5nZXRDb21wb25lbnQoXCJGQk9Ob2RlVGFyZ2V0Q29tcG9uZW50XCIpO1xuICAgICAgICBmYm9Ob2RlMS5mbGlwWSA9ICFmYm9Ob2RlMS5mbGlwWTtcbiAgICAgICAgbGV0IGZib05vZGUyID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJGQk9Ob2RlMlwiKS5nZXRDb21wb25lbnQoXCJGQk9Ob2RlVGFyZ2V0Q29tcG9uZW50XCIpO1xuICAgICAgICBmYm9Ob2RlMi5mbGlwWSA9ICFmYm9Ob2RlMi5mbGlwWTtcbiAgICAgICAgbGV0IGZib05vZGUzID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJGQk9Ob2RlM1wiKS5nZXRDb21wb25lbnQoXCJGQk9Ob2RlVGFyZ2V0Q29tcG9uZW50XCIpO1xuICAgICAgICBmYm9Ob2RlMy5mbGlwWSA9ICFmYm9Ob2RlMy5mbGlwWTtcbiAgICAgICAgbGV0IGZib05vZGU0ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJGQk9Ob2RlNFwiKS5nZXRDb21wb25lbnQoXCJGQk9Ob2RlVGFyZ2V0Q29tcG9uZW50XCIpO1xuICAgICAgICBmYm9Ob2RlNC5mbGlwWSA9ICFmYm9Ob2RlNC5mbGlwWTtcbiAgICAgICAgbGV0IGZib05vZGU1ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJGQk9Ob2RlNVwiKS5nZXRDb21wb25lbnQoXCJGQk9Ob2RlVGFyZ2V0Q29tcG9uZW50XCIpO1xuICAgICAgICBmYm9Ob2RlNS5mbGlwWSA9ICFmYm9Ob2RlNS5mbGlwWTtcbiAgICAgICAgbGV0IGZib05vZGU2ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJGQk9Ob2RlNlwiKS5nZXRDb21wb25lbnQoXCJGQk9Ob2RlVGFyZ2V0Q29tcG9uZW50XCIpO1xuICAgICAgICBmYm9Ob2RlNi5mbGlwWSA9ICFmYm9Ob2RlNi5mbGlwWTtcbiAgICAgICAgbGV0IGZib05vZGU3ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJGQk9Ob2RlN1wiKS5nZXRDb21wb25lbnQoXCJGQk9Ob2RlVGFyZ2V0Q29tcG9uZW50XCIpO1xuICAgICAgICBmYm9Ob2RlNy5mbGlwWSA9ICFmYm9Ob2RlNy5mbGlwWTtcbiAgICB9LFxuICAgIHRlc3RVcGRhdGVGQk8gKCkge1xuICAgICAgICBsZXQgZmJvTm9kZSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiRkJPTm9kZVVwZGF0ZU9uY2VcIikuZ2V0Q29tcG9uZW50KFwiRkJPTm9kZVRhcmdldENvbXBvbmVudFwiKTtcbiAgICAgICAgZmJvTm9kZS51cGRhdGVGQk8oKTtcbiAgICB9LFxuICAgIGJhY2sgKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ1Rlc3RMaXN0Jyk7XG4gICAgfVxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/demo/Cyberpunk.fire.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0fa78akxHxAb70buEI+3Q20', 'Cyberpunk.fire');
// scripts/demo/Cyberpunk.fire.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    fbo: cc.Node
  },
  onLoad: function onLoad() {
    cc.debug.setDisplayStats(true);
  },
  start: function start() {
    cc.tween(this.fbo).by(25, {
      position: cc.v2(-900, 0)
    }).start();
  },
  update: function update(dt) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZGVtb1xcQ3liZXJwdW5rLmZpcmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJmYm8iLCJOb2RlIiwib25Mb2FkIiwiZGVidWciLCJzZXREaXNwbGF5U3RhdHMiLCJzdGFydCIsInR3ZWVuIiwiYnkiLCJwb3NpdGlvbiIsInYyIiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxHQUFHLEVBQUVKLEVBQUUsQ0FBQ0s7QUFEQSxHQUhQO0FBTUxDLEVBQUFBLE1BTkssb0JBTUs7QUFDTk4sSUFBQUEsRUFBRSxDQUFDTyxLQUFILENBQVNDLGVBQVQsQ0FBeUIsSUFBekI7QUFDSCxHQVJJO0FBVUxDLEVBQUFBLEtBVkssbUJBVUk7QUFDTFQsSUFBQUEsRUFBRSxDQUFDVSxLQUFILENBQVMsS0FBS04sR0FBZCxFQUNLTyxFQURMLENBQ1EsRUFEUixFQUNZO0FBQUVDLE1BQUFBLFFBQVEsRUFBRVosRUFBRSxDQUFDYSxFQUFILENBQU0sQ0FBQyxHQUFQLEVBQVksQ0FBWjtBQUFaLEtBRFosRUFFS0osS0FGTDtBQUdILEdBZEk7QUFlTEssRUFBQUEsTUFmSyxrQkFlR0MsRUFmSCxFQWVPLENBQ1g7QUFoQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZmJvOiBjYy5Ob2RlLFxuICAgIH0sXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKHRydWUpO1xuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZmJvKVxuICAgICAgICAgICAgLmJ5KDI1LCB7IHBvc2l0aW9uOiBjYy52MigtOTAwLCAwKSB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfSxcbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/demo/CircularFog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c49c0OhGv1L+agzoM2zMTuo', 'CircularFog');
// scripts/demo/CircularFog.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    fbo: cc.Node,
    spine: cc.Node,
    dragon: cc.Node
  },
  onLoad: function onLoad() {
    cc.debug.setDisplayStats(true);
  },
  start: function start() {
    cc.tween(this.spine).by(15, {
      position: cc.v2(900, 0)
    }).start();
    cc.tween(this.dragon).by(20, {
      position: cc.v2(1100, 0)
    }).start();
  },
  update: function update(dt) {
    this.fbo.getComponent(cc.Sprite).getMaterial(0).setProperty("Pos", [(this.spine.x + this.fbo.width / 2) / this.fbo.width, (this.spine.y + this.fbo.height / 2) / cc.winSize.height]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZGVtb1xcQ2lyY3VsYXJGb2cuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJmYm8iLCJOb2RlIiwic3BpbmUiLCJkcmFnb24iLCJvbkxvYWQiLCJkZWJ1ZyIsInNldERpc3BsYXlTdGF0cyIsInN0YXJ0IiwidHdlZW4iLCJieSIsInBvc2l0aW9uIiwidjIiLCJ1cGRhdGUiLCJkdCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsImdldE1hdGVyaWFsIiwic2V0UHJvcGVydHkiLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0Iiwid2luU2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEdBQUcsRUFBRUosRUFBRSxDQUFDSyxJQURBO0FBRVJDLElBQUFBLEtBQUssRUFBRU4sRUFBRSxDQUFDSyxJQUZGO0FBR1JFLElBQUFBLE1BQU0sRUFBRVAsRUFBRSxDQUFDSztBQUhILEdBSFA7QUFRTEcsRUFBQUEsTUFSSyxvQkFRSztBQUNOUixJQUFBQSxFQUFFLENBQUNTLEtBQUgsQ0FBU0MsZUFBVCxDQUF5QixJQUF6QjtBQUNILEdBVkk7QUFZTEMsRUFBQUEsS0FaSyxtQkFZSTtBQUNMWCxJQUFBQSxFQUFFLENBQUNZLEtBQUgsQ0FBUyxLQUFLTixLQUFkLEVBQ0tPLEVBREwsQ0FDUSxFQURSLEVBQ1k7QUFBRUMsTUFBQUEsUUFBUSxFQUFFZCxFQUFFLENBQUNlLEVBQUgsQ0FBTSxHQUFOLEVBQVcsQ0FBWDtBQUFaLEtBRFosRUFFS0osS0FGTDtBQUlBWCxJQUFBQSxFQUFFLENBQUNZLEtBQUgsQ0FBUyxLQUFLTCxNQUFkLEVBQ0tNLEVBREwsQ0FDUSxFQURSLEVBQ1k7QUFBRUMsTUFBQUEsUUFBUSxFQUFFZCxFQUFFLENBQUNlLEVBQUgsQ0FBTSxJQUFOLEVBQVksQ0FBWjtBQUFaLEtBRFosRUFFS0osS0FGTDtBQUdILEdBcEJJO0FBcUJMSyxFQUFBQSxNQXJCSyxrQkFxQkdDLEVBckJILEVBcUJPO0FBQ1IsU0FBS2IsR0FBTCxDQUFTYyxZQUFULENBQXNCbEIsRUFBRSxDQUFDbUIsTUFBekIsRUFBaUNDLFdBQWpDLENBQTZDLENBQTdDLEVBQWdEQyxXQUFoRCxDQUE0RCxLQUE1RCxFQUFtRSxDQUFDLENBQUMsS0FBS2YsS0FBTCxDQUFXZ0IsQ0FBWCxHQUFlLEtBQUtsQixHQUFMLENBQVNtQixLQUFULEdBQWlCLENBQWpDLElBQXNDLEtBQUtuQixHQUFMLENBQVNtQixLQUFoRCxFQUF1RCxDQUFDLEtBQUtqQixLQUFMLENBQVdrQixDQUFYLEdBQWUsS0FBS3BCLEdBQUwsQ0FBU3FCLE1BQVQsR0FBa0IsQ0FBbEMsSUFBdUN6QixFQUFFLENBQUMwQixPQUFILENBQVdELE1BQXpHLENBQW5FO0FBQ0g7QUF2QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZmJvOiBjYy5Ob2RlLFxuICAgICAgICBzcGluZTogY2MuTm9kZSxcbiAgICAgICAgZHJhZ29uOiBjYy5Ob2RlLFxuICAgIH0sXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKHRydWUpO1xuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuc3BpbmUpXG4gICAgICAgICAgICAuYnkoMTUsIHsgcG9zaXRpb246IGNjLnYyKDkwMCwgMCkgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZHJhZ29uKVxuICAgICAgICAgICAgLmJ5KDIwLCB7IHBvc2l0aW9uOiBjYy52MigxMTAwLCAwKSB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfSxcbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIHRoaXMuZmJvLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmdldE1hdGVyaWFsKDApLnNldFByb3BlcnR5KFwiUG9zXCIsIFsodGhpcy5zcGluZS54ICsgdGhpcy5mYm8ud2lkdGggLyAyKSAvIHRoaXMuZmJvLndpZHRoLCAodGhpcy5zcGluZS55ICsgdGhpcy5mYm8uaGVpZ2h0IC8gMikgLyBjYy53aW5TaXplLmhlaWdodF0pO1xuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/demo/FoWTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '894c5cmPJdKjY/iavFrHK6D', 'FoWTest');
// scripts/demo/FoWTest.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    fow: cc.Node
  },
  onLoad: function onLoad() {
    cc.debug.setDisplayStats(true);
  },
  start: function start() {
    var self = this;
    this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
      var touches = event.getTouches();
      var touchLoc = touches[0].getLocation();
      self.fow.getComponent("SSRFoWComponent").updateFog(self.fow.convertToNodeSpaceAR(touchLoc));
    }, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      var touches = event.getTouches();
      var touchLoc = touches[0].getLocation();
      self.fow.getComponent("SSRFoWComponent").updateFog(self.fow.convertToNodeSpaceAR(touchLoc));
    }, this);
    this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
      var touches = event.getTouches();
      var touchLoc = touches[0].getLocation();
      self.fow.getComponent("SSRFoWComponent").updateFog(self.fow.convertToNodeSpaceAR(touchLoc));
    }, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {}, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZGVtb1xcRm9XVGVzdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImZvdyIsIk5vZGUiLCJvbkxvYWQiLCJkZWJ1ZyIsInNldERpc3BsYXlTdGF0cyIsInN0YXJ0Iiwic2VsZiIsIm5vZGUiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiZXZlbnQiLCJ0b3VjaGVzIiwiZ2V0VG91Y2hlcyIsInRvdWNoTG9jIiwiZ2V0TG9jYXRpb24iLCJnZXRDb21wb25lbnQiLCJ1cGRhdGVGb2ciLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsIlRPVUNIX01PVkUiLCJUT1VDSF9FTkQiLCJUT1VDSF9DQU5DRUwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxHQUFHLEVBQUVKLEVBQUUsQ0FBQ0s7QUFEQSxHQUhQO0FBT0xDLEVBQUFBLE1BUEssb0JBT0s7QUFDTk4sSUFBQUEsRUFBRSxDQUFDTyxLQUFILENBQVNDLGVBQVQsQ0FBeUIsSUFBekI7QUFDSCxHQVRJO0FBV0xDLEVBQUFBLEtBWEssbUJBV0k7QUFDTCxRQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUNBLFNBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhWixFQUFFLENBQUNLLElBQUgsQ0FBUVEsU0FBUixDQUFrQkMsV0FBL0IsRUFBNEMsVUFBVUMsS0FBVixFQUFpQjtBQUN6RCxVQUFJQyxPQUFPLEdBQUdELEtBQUssQ0FBQ0UsVUFBTixFQUFkO0FBQ0EsVUFBSUMsUUFBUSxHQUFHRixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdHLFdBQVgsRUFBZjtBQUNBVCxNQUFBQSxJQUFJLENBQUNOLEdBQUwsQ0FBU2dCLFlBQVQsQ0FBc0IsaUJBQXRCLEVBQXlDQyxTQUF6QyxDQUFtRFgsSUFBSSxDQUFDTixHQUFMLENBQVNrQixvQkFBVCxDQUE4QkosUUFBOUIsQ0FBbkQ7QUFDSCxLQUpELEVBSUcsSUFKSDtBQUtBLFNBQUtQLElBQUwsQ0FBVUMsRUFBVixDQUFhWixFQUFFLENBQUNLLElBQUgsQ0FBUVEsU0FBUixDQUFrQlUsVUFBL0IsRUFBMkMsVUFBVVIsS0FBVixFQUFpQjtBQUN4RCxVQUFJQyxPQUFPLEdBQUdELEtBQUssQ0FBQ0UsVUFBTixFQUFkO0FBQ0EsVUFBSUMsUUFBUSxHQUFHRixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdHLFdBQVgsRUFBZjtBQUNBVCxNQUFBQSxJQUFJLENBQUNOLEdBQUwsQ0FBU2dCLFlBQVQsQ0FBc0IsaUJBQXRCLEVBQXlDQyxTQUF6QyxDQUFtRFgsSUFBSSxDQUFDTixHQUFMLENBQVNrQixvQkFBVCxDQUE4QkosUUFBOUIsQ0FBbkQ7QUFDSCxLQUpELEVBSUcsSUFKSDtBQUtBLFNBQUtQLElBQUwsQ0FBVUMsRUFBVixDQUFhWixFQUFFLENBQUNLLElBQUgsQ0FBUVEsU0FBUixDQUFrQlcsU0FBL0IsRUFBMEMsVUFBVVQsS0FBVixFQUFpQjtBQUN2RCxVQUFJQyxPQUFPLEdBQUdELEtBQUssQ0FBQ0UsVUFBTixFQUFkO0FBQ0EsVUFBSUMsUUFBUSxHQUFHRixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdHLFdBQVgsRUFBZjtBQUNBVCxNQUFBQSxJQUFJLENBQUNOLEdBQUwsQ0FBU2dCLFlBQVQsQ0FBc0IsaUJBQXRCLEVBQXlDQyxTQUF6QyxDQUFtRFgsSUFBSSxDQUFDTixHQUFMLENBQVNrQixvQkFBVCxDQUE4QkosUUFBOUIsQ0FBbkQ7QUFDSCxLQUpELEVBSUcsSUFKSDtBQUtBLFNBQUtQLElBQUwsQ0FBVUMsRUFBVixDQUFhWixFQUFFLENBQUNLLElBQUgsQ0FBUVEsU0FBUixDQUFrQlksWUFBL0IsRUFBNkMsVUFBVVYsS0FBVixFQUFpQixDQUM3RCxDQURELEVBQ0csSUFESDtBQUVIO0FBOUJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZm93OiBjYy5Ob2RlXG4gICAgfSxcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyh0cnVlKTtcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgdG91Y2hlcyA9IGV2ZW50LmdldFRvdWNoZXMoKTtcbiAgICAgICAgICAgIHZhciB0b3VjaExvYyA9IHRvdWNoZXNbMF0uZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgIHNlbGYuZm93LmdldENvbXBvbmVudChcIlNTUkZvV0NvbXBvbmVudFwiKS51cGRhdGVGb2coc2VsZi5mb3cuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2hMb2MpKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciB0b3VjaGVzID0gZXZlbnQuZ2V0VG91Y2hlcygpO1xuICAgICAgICAgICAgdmFyIHRvdWNoTG9jID0gdG91Y2hlc1swXS5nZXRMb2NhdGlvbigpO1xuICAgICAgICAgICAgc2VsZi5mb3cuZ2V0Q29tcG9uZW50KFwiU1NSRm9XQ29tcG9uZW50XCIpLnVwZGF0ZUZvZyhzZWxmLmZvdy5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0b3VjaExvYykpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgdG91Y2hlcyA9IGV2ZW50LmdldFRvdWNoZXMoKTtcbiAgICAgICAgICAgIHZhciB0b3VjaExvYyA9IHRvdWNoZXNbMF0uZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgIHNlbGYuZm93LmdldENvbXBvbmVudChcIlNTUkZvV0NvbXBvbmVudFwiKS51cGRhdGVGb2coc2VsZi5mb3cuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2hMb2MpKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/demo/NightVision.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ee86AiUblJ7oGG5vTJ80/p', 'NightVision');
// scripts/demo/NightVision.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    spine: cc.Node,
    dragon: cc.Node,
    binocular: cc.Node // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },

  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.debug.setDisplayStats(true);
  },
  start: function start() {
    cc.tween(this.spine).by(15, {
      position: cc.v2(900, 0)
    }).start();
    cc.tween(this.dragon).by(20, {
      position: cc.v2(1100, 0)
    }).start();
    var self = this; // this.node.on(cc.Node.EventType.TOUCH_START, this._touchStartCallback, this);

    this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      var canvas = cc.find("Canvas");
      var location = canvas.convertToNodeSpaceAR(event.touch.getLocation());
      self.binocular.position = location;
    }, this); // this.node.on(cc.Node.EventType.TOUCH_END, this._touchEndCallback, this);
    // this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._touchCancelCallback, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZGVtb1xcTmlnaHRWaXNpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzcGluZSIsIk5vZGUiLCJkcmFnb24iLCJiaW5vY3VsYXIiLCJvbkxvYWQiLCJkZWJ1ZyIsInNldERpc3BsYXlTdGF0cyIsInN0YXJ0IiwidHdlZW4iLCJieSIsInBvc2l0aW9uIiwidjIiLCJzZWxmIiwibm9kZSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfTU9WRSIsImV2ZW50IiwiY2FudmFzIiwiZmluZCIsImxvY2F0aW9uIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJ0b3VjaCIsImdldExvY2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFFSixFQUFFLENBQUNLLElBREY7QUFFUkMsSUFBQUEsTUFBTSxFQUFFTixFQUFFLENBQUNLLElBRkg7QUFHUkUsSUFBQUEsU0FBUyxFQUFFUCxFQUFFLENBQUNLLElBSE4sQ0FJUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBbEJRLEdBSFA7QUF3Qkw7QUFFQUcsRUFBQUEsTUExQkssb0JBMEJLO0FBQ05SLElBQUFBLEVBQUUsQ0FBQ1MsS0FBSCxDQUFTQyxlQUFULENBQXlCLElBQXpCO0FBQ0gsR0E1Qkk7QUE4QkxDLEVBQUFBLEtBOUJLLG1CQThCSTtBQUNMWCxJQUFBQSxFQUFFLENBQUNZLEtBQUgsQ0FBUyxLQUFLUixLQUFkLEVBQ0tTLEVBREwsQ0FDUSxFQURSLEVBQ1k7QUFBRUMsTUFBQUEsUUFBUSxFQUFFZCxFQUFFLENBQUNlLEVBQUgsQ0FBTSxHQUFOLEVBQVcsQ0FBWDtBQUFaLEtBRFosRUFFS0osS0FGTDtBQUlBWCxJQUFBQSxFQUFFLENBQUNZLEtBQUgsQ0FBUyxLQUFLTixNQUFkLEVBQ0tPLEVBREwsQ0FDUSxFQURSLEVBQ1k7QUFBRUMsTUFBQUEsUUFBUSxFQUFFZCxFQUFFLENBQUNlLEVBQUgsQ0FBTSxJQUFOLEVBQVksQ0FBWjtBQUFaLEtBRFosRUFFS0osS0FGTDtBQUlBLFFBQUlLLElBQUksR0FBRyxJQUFYLENBVEssQ0FVTDs7QUFDQSxTQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYWxCLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRYyxTQUFSLENBQWtCQyxVQUEvQixFQUEyQyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3hELFVBQUlDLE1BQU0sR0FBR3RCLEVBQUUsQ0FBQ3VCLElBQUgsQ0FBUSxRQUFSLENBQWI7QUFDQSxVQUFJQyxRQUFRLEdBQUdGLE1BQU0sQ0FBQ0csb0JBQVAsQ0FBNEJKLEtBQUssQ0FBQ0ssS0FBTixDQUFZQyxXQUFaLEVBQTVCLENBQWY7QUFDQVgsTUFBQUEsSUFBSSxDQUFDVCxTQUFMLENBQWVPLFFBQWYsR0FBMEJVLFFBQTFCO0FBQ0gsS0FKRCxFQUlHLElBSkgsRUFYSyxDQWdCTDtBQUNBO0FBQ0g7QUFoREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc3BpbmU6IGNjLk5vZGUsXG4gICAgICAgIGRyYWdvbjogY2MuTm9kZSxcbiAgICAgICAgYmlub2N1bGFyOiBjYy5Ob2RlLFxuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gYmFyOiB7XG4gICAgICAgIC8vICAgICBnZXQgKCkge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyh0cnVlKTtcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBjYy50d2Vlbih0aGlzLnNwaW5lKVxuICAgICAgICAgICAgLmJ5KDE1LCB7IHBvc2l0aW9uOiBjYy52Mig5MDAsIDApIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICBjYy50d2Vlbih0aGlzLmRyYWdvbilcbiAgICAgICAgICAgIC5ieSgyMCwgeyBwb3NpdGlvbjogY2MudjIoMTEwMCwgMCkgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLl90b3VjaFN0YXJ0Q2FsbGJhY2ssIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcbiAgICAgICAgICAgIHZhciBsb2NhdGlvbiA9IGNhbnZhcy5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC50b3VjaC5nZXRMb2NhdGlvbigpKTtcbiAgICAgICAgICAgIHNlbGYuYmlub2N1bGFyLnBvc2l0aW9uID0gbG9jYXRpb247XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAvLyB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLl90b3VjaEVuZENhbGxiYWNrLCB0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5fdG91Y2hDYW5jZWxDYWxsYmFjaywgdGhpcyk7XG4gICAgfVxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/TestList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dcf48BtPeFIaIdYRMwUrYSz', 'TestList');
// scripts/TestList.js

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
cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  start: function start() {
    cc.debug.setDisplayStats(true);
  },
  toTestCase: function toTestCase(event) {
    cc.director.loadScene(event.target.getComponent(cc.Label).string);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVGVzdExpc3QuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJzdGFydCIsImRlYnVnIiwic2V0RGlzcGxheVN0YXRzIiwidG9UZXN0Q2FzZSIsImV2ZW50IiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJ0YXJnZXQiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFLEVBRlA7QUFJTEMsRUFBQUEsTUFKSyxvQkFJSyxDQUNULENBTEk7QUFNTEMsRUFBQUEsS0FOSyxtQkFNSTtBQUNMTCxJQUFBQSxFQUFFLENBQUNNLEtBQUgsQ0FBU0MsZUFBVCxDQUF5QixJQUF6QjtBQUNILEdBUkk7QUFTTEMsRUFBQUEsVUFUSyxzQkFTT0MsS0FUUCxFQVNjO0FBQ2ZULElBQUFBLEVBQUUsQ0FBQ1UsUUFBSCxDQUFZQyxTQUFaLENBQXNCRixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsWUFBYixDQUEwQmIsRUFBRSxDQUFDYyxLQUE3QixFQUFvQ0MsTUFBMUQ7QUFDSDtBQVhJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMjAgU3VwZXJTdVJhY2Nvb25cbiBcbiBTaXRlOiBodHRwOi8vd3d3LnN1cGVyc3VyYWNjb29uLWNvY29zMmQuY29tXG4gTWFpbDogc3VwZXJzdXJhY2Nvb25AZ21haWwuY29tXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuIFxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgfSxcbiAgICBvbkxvYWQgKCkge1xuICAgIH0sXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBjYy5kZWJ1Zy5zZXREaXNwbGF5U3RhdHModHJ1ZSk7XG4gICAgfSxcbiAgICB0b1Rlc3RDYXNlIChldmVudCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoZXZlbnQudGFyZ2V0LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nKTtcbiAgICB9XG59KTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/demo/WaterTurbulence.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0a142QGRMJBF4zYYM0Bl3nz', 'WaterTurbulence');
// scripts/demo/WaterTurbulence.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    fbo: cc.Node,
    spine: cc.Node,
    dragon: cc.Node // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },

  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.debug.setDisplayStats(true);
  },
  start: function start() {
    // cc.debug.setDisplayStats(true);
    // let self = this;
    // this.schedule(function() {
    //     self.fbo.getComponent("FBONodeCaptureComponent").capture("666");
    // }, 0.1);
    cc.tween(this.spine).by(15, {
      position: cc.v2(900, 0)
    }).start();
    cc.tween(this.dragon).by(20, {
      position: cc.v2(1100, 0)
    }).start();
  },
  update: function update(dt) {// this.fbo.getComponent("FBONodeCaptureComponent").capture("666");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZGVtb1xcV2F0ZXJUdXJidWxlbmNlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZmJvIiwiTm9kZSIsInNwaW5lIiwiZHJhZ29uIiwib25Mb2FkIiwiZGVidWciLCJzZXREaXNwbGF5U3RhdHMiLCJzdGFydCIsInR3ZWVuIiwiYnkiLCJwb3NpdGlvbiIsInYyIiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxHQUFHLEVBQUVKLEVBQUUsQ0FBQ0ssSUFEQTtBQUVSQyxJQUFBQSxLQUFLLEVBQUVOLEVBQUUsQ0FBQ0ssSUFGRjtBQUdSRSxJQUFBQSxNQUFNLEVBQUVQLEVBQUUsQ0FBQ0ssSUFISCxDQUlSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFsQlEsR0FIUDtBQXdCTDtBQUVBRyxFQUFBQSxNQTFCSyxvQkEwQks7QUFDTlIsSUFBQUEsRUFBRSxDQUFDUyxLQUFILENBQVNDLGVBQVQsQ0FBeUIsSUFBekI7QUFDSCxHQTVCSTtBQThCTEMsRUFBQUEsS0E5QkssbUJBOEJJO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBWCxJQUFBQSxFQUFFLENBQUNZLEtBQUgsQ0FBUyxLQUFLTixLQUFkLEVBQ0tPLEVBREwsQ0FDUSxFQURSLEVBQ1k7QUFBRUMsTUFBQUEsUUFBUSxFQUFFZCxFQUFFLENBQUNlLEVBQUgsQ0FBTSxHQUFOLEVBQVcsQ0FBWDtBQUFaLEtBRFosRUFFS0osS0FGTDtBQUlBWCxJQUFBQSxFQUFFLENBQUNZLEtBQUgsQ0FBUyxLQUFLTCxNQUFkLEVBQ0tNLEVBREwsQ0FDUSxFQURSLEVBQ1k7QUFBRUMsTUFBQUEsUUFBUSxFQUFFZCxFQUFFLENBQUNlLEVBQUgsQ0FBTSxJQUFOLEVBQVksQ0FBWjtBQUFaLEtBRFosRUFFS0osS0FGTDtBQUdILEdBNUNJO0FBNkNMSyxFQUFBQSxNQTdDSyxrQkE2Q0dDLEVBN0NILEVBNkNPLENBQ1I7QUFDSDtBQS9DSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBmYm86IGNjLk5vZGUsXG4gICAgICAgIHNwaW5lOiBjYy5Ob2RlLFxuICAgICAgICBkcmFnb246IGNjLk5vZGUsXG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyBiYXI6IHtcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKHRydWUpO1xuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8vIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyh0cnVlKTtcbiAgICAgICAgLy8gbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAgICAgc2VsZi5mYm8uZ2V0Q29tcG9uZW50KFwiRkJPTm9kZUNhcHR1cmVDb21wb25lbnRcIikuY2FwdHVyZShcIjY2NlwiKTtcbiAgICAgICAgLy8gfSwgMC4xKTtcblxuICAgICAgICBjYy50d2Vlbih0aGlzLnNwaW5lKVxuICAgICAgICAgICAgLmJ5KDE1LCB7IHBvc2l0aW9uOiBjYy52Mig5MDAsIDApIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICBjYy50d2Vlbih0aGlzLmRyYWdvbilcbiAgICAgICAgICAgIC5ieSgyMCwgeyBwb3NpdGlvbjogY2MudjIoMTEwMCwgMCkgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH0sXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICAvLyB0aGlzLmZiby5nZXRDb21wb25lbnQoXCJGQk9Ob2RlQ2FwdHVyZUNvbXBvbmVudFwiKS5jYXB0dXJlKFwiNjY2XCIpO1xuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/demo/SnowCover.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93940/npztBHaSlyWKo4C4y', 'SnowCover');
// scripts/demo/SnowCover.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    fbo: cc.Node,
    fbo2: cc.Node,
    fbo3: cc.Node,
    spine: cc.Node,
    dragon: cc.Node,
    snow: cc.ParticleSystem
  },
  onLoad: function onLoad() {
    cc.debug.setDisplayStats(true);
    this.time = 0;
    this.melting = false;
  },
  start: function start() {
    cc.tween(this.spine).by(25, {
      position: cc.v2(900, 0)
    }).start();
    cc.tween(this.dragon).by(30, {
      position: cc.v2(1100, 0)
    }).start();
  },
  update: function update(dt) {
    if (this.melting) {
      var edge = this.fbo.getComponent(cc.Sprite).getMaterial(0).getProperty("Edge");

      if (edge >= 0.0) {
        edge -= dt / 30;
        this.fbo.getComponent(cc.Sprite).getMaterial(0).setProperty("Edge", edge);
        this.fbo2.getComponent(cc.Sprite).getMaterial(0).setProperty("Edge", edge);
        this.fbo3.getComponent(cc.Sprite).getMaterial(0).setProperty("Edge", edge);
        this.spine.getComponent(sp.Skeleton).getMaterial(0).setProperty("Edge", edge);
        this.dragon.getComponent(dragonBones.ArmatureDisplay).getMaterial(0).setProperty("Edge", edge);
      }
    } else {
      this.time += dt / 40;

      if (this.fbo.getComponent(cc.Sprite).getMaterial(0).getProperty("Edge") < 0.35) {
        this.fbo.getComponent(cc.Sprite).getMaterial(0).setProperty("Edge", this.time);
        this.fbo2.getComponent(cc.Sprite).getMaterial(0).setProperty("Edge", this.time);
        this.fbo3.getComponent(cc.Sprite).getMaterial(0).setProperty("Edge", this.time);
        this.spine.getComponent(sp.Skeleton).getMaterial(0).setProperty("Edge", this.time);
        this.dragon.getComponent(dragonBones.ArmatureDisplay).getMaterial(0).setProperty("Edge", this.time);
      } else {
        this.melting = true;
        this.time = 0;
        this.snow.stopSystem();
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZGVtb1xcU25vd0NvdmVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZmJvIiwiTm9kZSIsImZibzIiLCJmYm8zIiwic3BpbmUiLCJkcmFnb24iLCJzbm93IiwiUGFydGljbGVTeXN0ZW0iLCJvbkxvYWQiLCJkZWJ1ZyIsInNldERpc3BsYXlTdGF0cyIsInRpbWUiLCJtZWx0aW5nIiwic3RhcnQiLCJ0d2VlbiIsImJ5IiwicG9zaXRpb24iLCJ2MiIsInVwZGF0ZSIsImR0IiwiZWRnZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsImdldE1hdGVyaWFsIiwiZ2V0UHJvcGVydHkiLCJzZXRQcm9wZXJ0eSIsInNwIiwiU2tlbGV0b24iLCJkcmFnb25Cb25lcyIsIkFybWF0dXJlRGlzcGxheSIsInN0b3BTeXN0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxHQUFHLEVBQUVKLEVBQUUsQ0FBQ0ssSUFEQTtBQUVSQyxJQUFBQSxJQUFJLEVBQUVOLEVBQUUsQ0FBQ0ssSUFGRDtBQUdSRSxJQUFBQSxJQUFJLEVBQUVQLEVBQUUsQ0FBQ0ssSUFIRDtBQUlSRyxJQUFBQSxLQUFLLEVBQUVSLEVBQUUsQ0FBQ0ssSUFKRjtBQUtSSSxJQUFBQSxNQUFNLEVBQUVULEVBQUUsQ0FBQ0ssSUFMSDtBQU1SSyxJQUFBQSxJQUFJLEVBQUVWLEVBQUUsQ0FBQ1c7QUFORCxHQUhQO0FBV0xDLEVBQUFBLE1BWEssb0JBV0s7QUFDTlosSUFBQUEsRUFBRSxDQUFDYSxLQUFILENBQVNDLGVBQVQsQ0FBeUIsSUFBekI7QUFDQSxTQUFLQyxJQUFMLEdBQVksQ0FBWjtBQUNBLFNBQUtD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WCxDQUF3QkssRUFBRSxDQUFDQyxRQUEzQixFQUFxQ0osV0FBckMsQ0FBaUQsQ0FBakQsRUFBb0RFLFdBQXBELENBQWdFLE1BQWhFLEVBQXdFLEtBQUtkLElBQTdFO0FBQ0EsYUFBS04sTUFBTCxDQUFZZ0IsWUFBWixDQUF5Qk8sV0FBVyxDQUFDQyxlQUFyQyxFQUFzRE4sV0FBdEQsQ0FBa0UsQ0FBbEUsRUFBcUVFLFdBQXJFLENBQWlGLE1BQWpGLEVBQXlGLEtBQUtkLElBQTlGO0FBQ0gsT0FORCxNQU9LO0FBQ0QsYUFBS0MsT0FBTCxHQUFlLElBQWY7QUFDQSxhQUFLRCxJQUFMLEdBQVksQ0FBWjtBQUNBLGFBQUtMLElBQUwsQ0FBVXdCLFVBQVY7QUFDSDtBQUNKO0FBQ0o7QUFyREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZmJvOiBjYy5Ob2RlLFxuICAgICAgICBmYm8yOiBjYy5Ob2RlLFxuICAgICAgICBmYm8zOiBjYy5Ob2RlLFxuICAgICAgICBzcGluZTogY2MuTm9kZSxcbiAgICAgICAgZHJhZ29uOiBjYy5Ob2RlLFxuICAgICAgICBzbm93OiBjYy5QYXJ0aWNsZVN5c3RlbVxuICAgIH0sXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKHRydWUpO1xuICAgICAgICB0aGlzLnRpbWUgPSAwO1xuICAgICAgICB0aGlzLm1lbHRpbmcgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBjYy50d2Vlbih0aGlzLnNwaW5lKVxuICAgICAgICAgICAgLmJ5KDI1LCB7IHBvc2l0aW9uOiBjYy52Mig5MDAsIDApIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICBjYy50d2Vlbih0aGlzLmRyYWdvbilcbiAgICAgICAgICAgIC5ieSgzMCwgeyBwb3NpdGlvbjogY2MudjIoMTEwMCwgMCkgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH0sXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICBpZiAodGhpcy5tZWx0aW5nKSB7XG4gICAgICAgICAgICBsZXQgZWRnZSA9IHRoaXMuZmJvLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmdldE1hdGVyaWFsKDApLmdldFByb3BlcnR5KFwiRWRnZVwiKTtcbiAgICAgICAgICAgIGlmIChlZGdlID49IDAuMCkge1xuICAgICAgICAgICAgICAgIGVkZ2UgLT0gZHQgLyAzMDtcbiAgICAgICAgICAgICAgICB0aGlzLmZiby5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5nZXRNYXRlcmlhbCgwKS5zZXRQcm9wZXJ0eShcIkVkZ2VcIiwgZWRnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5mYm8yLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmdldE1hdGVyaWFsKDApLnNldFByb3BlcnR5KFwiRWRnZVwiLCBlZGdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZibzMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZ2V0TWF0ZXJpYWwoMCkuc2V0UHJvcGVydHkoXCJFZGdlXCIsIGVkZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BpbmUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5nZXRNYXRlcmlhbCgwKS5zZXRQcm9wZXJ0eShcIkVkZ2VcIiwgZWRnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnb24uZ2V0Q29tcG9uZW50KGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSkuZ2V0TWF0ZXJpYWwoMCkuc2V0UHJvcGVydHkoXCJFZGdlXCIsIGVkZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aW1lICs9IGR0IC8gNDA7XG4gICAgICAgICAgICBpZiAodGhpcy5mYm8uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZ2V0TWF0ZXJpYWwoMCkuZ2V0UHJvcGVydHkoXCJFZGdlXCIpIDwgMC4zNSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmJvLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmdldE1hdGVyaWFsKDApLnNldFByb3BlcnR5KFwiRWRnZVwiLCB0aGlzLnRpbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmJvMi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5nZXRNYXRlcmlhbCgwKS5zZXRQcm9wZXJ0eShcIkVkZ2VcIiwgdGhpcy50aW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZibzMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZ2V0TWF0ZXJpYWwoMCkuc2V0UHJvcGVydHkoXCJFZGdlXCIsIHRoaXMudGltZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGluZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmdldE1hdGVyaWFsKDApLnNldFByb3BlcnR5KFwiRWRnZVwiLCB0aGlzLnRpbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ29uLmdldENvbXBvbmVudChkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkpLmdldE1hdGVyaWFsKDApLnNldFByb3BlcnR5KFwiRWRnZVwiLCB0aGlzLnRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZWx0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuc25vdy5zdG9wU3lzdGVtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/demo/2DDropShadow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8d383C04ltNnYh0bGYUqvyS', '2DDropShadow');
// scripts/demo/2DDropShadow.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    fbo: cc.Node,
    spine: cc.Node,
    dragon: cc.Node // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },

  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.debug.setDisplayStats(true);
  },
  start: function start() {
    // cc.debug.setDisplayStats(true);
    // let self = this;
    // this.schedule(function() {
    //     self.fbo.getComponent("FBONodeCaptureComponent").capture("666");
    // }, 0.1);
    cc.tween(this.spine).by(15, {
      position: cc.v2(900, 0)
    }).start();
    cc.tween(this.dragon).by(20, {
      position: cc.v2(1100, 0)
    }).start();
  },
  update: function update(dt) {// this.fbo.getComponent("FBONodeCaptureComponent").capture("666");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZGVtb1xcMkREcm9wU2hhZG93LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZmJvIiwiTm9kZSIsInNwaW5lIiwiZHJhZ29uIiwib25Mb2FkIiwiZGVidWciLCJzZXREaXNwbGF5U3RhdHMiLCJzdGFydCIsInR3ZWVuIiwiYnkiLCJwb3NpdGlvbiIsInYyIiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxHQUFHLEVBQUVKLEVBQUUsQ0FBQ0ssSUFEQTtBQUVSQyxJQUFBQSxLQUFLLEVBQUVOLEVBQUUsQ0FBQ0ssSUFGRjtBQUdSRSxJQUFBQSxNQUFNLEVBQUVQLEVBQUUsQ0FBQ0ssSUFISCxDQUlSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFsQlEsR0FIUDtBQXdCTDtBQUVBRyxFQUFBQSxNQTFCSyxvQkEwQks7QUFDTlIsSUFBQUEsRUFBRSxDQUFDUyxLQUFILENBQVNDLGVBQVQsQ0FBeUIsSUFBekI7QUFDSCxHQTVCSTtBQThCTEMsRUFBQUEsS0E5QkssbUJBOEJJO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBWCxJQUFBQSxFQUFFLENBQUNZLEtBQUgsQ0FBUyxLQUFLTixLQUFkLEVBQ0tPLEVBREwsQ0FDUSxFQURSLEVBQ1k7QUFBRUMsTUFBQUEsUUFBUSxFQUFFZCxFQUFFLENBQUNlLEVBQUgsQ0FBTSxHQUFOLEVBQVcsQ0FBWDtBQUFaLEtBRFosRUFFS0osS0FGTDtBQUlBWCxJQUFBQSxFQUFFLENBQUNZLEtBQUgsQ0FBUyxLQUFLTCxNQUFkLEVBQ0tNLEVBREwsQ0FDUSxFQURSLEVBQ1k7QUFBRUMsTUFBQUEsUUFBUSxFQUFFZCxFQUFFLENBQUNlLEVBQUgsQ0FBTSxJQUFOLEVBQVksQ0FBWjtBQUFaLEtBRFosRUFFS0osS0FGTDtBQUdILEdBNUNJO0FBNkNMSyxFQUFBQSxNQTdDSyxrQkE2Q0dDLEVBN0NILEVBNkNPLENBQ1I7QUFDSDtBQS9DSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBmYm86IGNjLk5vZGUsXG4gICAgICAgIHNwaW5lOiBjYy5Ob2RlLFxuICAgICAgICBkcmFnb246IGNjLk5vZGUsXG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyBiYXI6IHtcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKHRydWUpO1xuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8vIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyh0cnVlKTtcbiAgICAgICAgLy8gbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAgICAgc2VsZi5mYm8uZ2V0Q29tcG9uZW50KFwiRkJPTm9kZUNhcHR1cmVDb21wb25lbnRcIikuY2FwdHVyZShcIjY2NlwiKTtcbiAgICAgICAgLy8gfSwgMC4xKTtcblxuICAgICAgICBjYy50d2Vlbih0aGlzLnNwaW5lKVxuICAgICAgICAgICAgLmJ5KDE1LCB7IHBvc2l0aW9uOiBjYy52Mig5MDAsIDApIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICBjYy50d2Vlbih0aGlzLmRyYWdvbilcbiAgICAgICAgICAgIC5ieSgyMCwgeyBwb3NpdGlvbjogY2MudjIoMTEwMCwgMCkgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH0sXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICAvLyB0aGlzLmZiby5nZXRDb21wb25lbnQoXCJGQk9Ob2RlQ2FwdHVyZUNvbXBvbmVudFwiKS5jYXB0dXJlKFwiNjY2XCIpO1xuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ssr/fow/namespace/SSRFoWNamespace.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8187fPoTENKd7XrSoJMg+a0', 'SSRFoWNamespace');
// scripts/ssr/fow/namespace/SSRFoWNamespace.js

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
var ssr = ssr || {};
ssr.FoW = ssr.FoW || {};
ssr.FoW.Component = ssr.FoW.Component || {};
ssr.FoW.Util = ssr.FoW || {};
module.exports = ssr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3NyXFxmb3dcXG5hbWVzcGFjZVxcU1NSRm9XTmFtZXNwYWNlLmpzIl0sIm5hbWVzIjpbInNzciIsIkZvVyIsIkNvbXBvbmVudCIsIlV0aWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEdBQUcsR0FBR0EsR0FBRyxJQUFJLEVBQWpCO0FBRUFBLEdBQUcsQ0FBQ0MsR0FBSixHQUFVRCxHQUFHLENBQUNDLEdBQUosSUFBVyxFQUFyQjtBQUVBRCxHQUFHLENBQUNDLEdBQUosQ0FBUUMsU0FBUixHQUFvQkYsR0FBRyxDQUFDQyxHQUFKLENBQVFDLFNBQVIsSUFBcUIsRUFBekM7QUFFQUYsR0FBRyxDQUFDQyxHQUFKLENBQVFFLElBQVIsR0FBZUgsR0FBRyxDQUFDQyxHQUFKLElBQVcsRUFBMUI7QUFFQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTCxHQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAyMCBTdXBlclN1UmFjY29vblxuIFxuIFNpdGU6IGh0dHA6Ly93d3cuc3VwZXJzdXJhY2Nvb24tY29jb3MyZC5jb21cbiBNYWlsOiBzdXBlcnN1cmFjY29vbkBnbWFpbC5jb21cblxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gXG52YXIgc3NyID0gc3NyIHx8IHt9O1xuXG5zc3IuRm9XID0gc3NyLkZvVyB8fCB7fTtcblxuc3NyLkZvVy5Db21wb25lbnQgPSBzc3IuRm9XLkNvbXBvbmVudCB8fCB7fTtcblxuc3NyLkZvVy5VdGlsID0gc3NyLkZvVyB8fCB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBzc3I7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ssr/fow/util/SSRTiledFogOfWarUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '523d2Auk3dGFKAsk+ivvo95', 'SSRTiledFogOfWarUtil');
// scripts/ssr/fow/util/SSRTiledFogOfWarUtil.js

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
var ssr = require('../namespace/SSRFoWNamespace');

ssr.TiledFogOfWarUtil = function () {};

ssr.TiledFogOfWarUtil.STYLE = {
  "SQUARE": 1,
  "DIAMOND": 2
};
ssr.TiledFogOfWarUtil.RENDER_STYLE = {
  "RECT": 1,
  "CIRCLE": 2
};
ssr.TiledFogOfWarUtil.REVEAL_MARK = {
  "CENTER": 1,
  "AROUND": 2
}; // from top to bottom, left to right

ssr.TiledFogOfWarUtil.tilesAroundSquare = function (centerCoord, aroundCount) {
  var tilesArray = [];
  var offsetX = -aroundCount;
  var offsetY = -aroundCount;

  for (var i = 2 * aroundCount; i >= 0; i--) {
    for (var j = 0; j < 2 * aroundCount + 1; j++) {
      var coord = centerCoord.add(cc.v2(offsetX + j, offsetY + i));
      tilesArray.push(coord);
    }
  }

  return tilesArray;
}; //


ssr.TiledFogOfWarUtil.tilesAroundDiamond = function (centerCoord, aroundCount) {
  var tilesArray = [];
  var offsetX = -aroundCount;
  var offsetY = -aroundCount;

  for (var i = 2 * aroundCount; i >= 0; i--) {
    var countInARow = aroundCount - Math.abs(offsetY + i);

    for (var j = 0; j < 2 * aroundCount + 1; j++) {
      if (offsetX + j < -countInARow || offsetX + j > countInARow) {
        continue;
      }

      var coord = centerCoord.add(cc.v2(offsetX + j, offsetY + i));
      tilesArray.push(coord);
    }
  }

  return tilesArray;
};

ssr.TiledFogOfWarUtil.coordFromPos = function (position, tileSize) {
  var x = position.x / tileSize;
  var y = position.y / tileSize;
  return cc.v2(parseInt(x), parseInt(y));
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3NyXFxmb3dcXHV0aWxcXFNTUlRpbGVkRm9nT2ZXYXJVdGlsLmpzIl0sIm5hbWVzIjpbInNzciIsInJlcXVpcmUiLCJUaWxlZEZvZ09mV2FyVXRpbCIsIlNUWUxFIiwiUkVOREVSX1NUWUxFIiwiUkVWRUFMX01BUksiLCJ0aWxlc0Fyb3VuZFNxdWFyZSIsImNlbnRlckNvb3JkIiwiYXJvdW5kQ291bnQiLCJ0aWxlc0FycmF5Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJpIiwiaiIsImNvb3JkIiwiYWRkIiwiY2MiLCJ2MiIsInB1c2giLCJ0aWxlc0Fyb3VuZERpYW1vbmQiLCJjb3VudEluQVJvdyIsIk1hdGgiLCJhYnMiLCJjb29yZEZyb21Qb3MiLCJwb3NpdGlvbiIsInRpbGVTaXplIiwieCIsInkiLCJwYXJzZUludCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLEdBQUdDLE9BQU8sQ0FBQyw4QkFBRCxDQUFuQjs7QUFFQUQsR0FBRyxDQUFDRSxpQkFBSixHQUF3QixZQUFXLENBQUUsQ0FBckM7O0FBRUFGLEdBQUcsQ0FBQ0UsaUJBQUosQ0FBc0JDLEtBQXRCLEdBQThCO0FBQzFCLFlBQWMsQ0FEWTtBQUUxQixhQUFjO0FBRlksQ0FBOUI7QUFJQUgsR0FBRyxDQUFDRSxpQkFBSixDQUFzQkUsWUFBdEIsR0FBcUM7QUFDakMsVUFBa0IsQ0FEZTtBQUVqQyxZQUFrQjtBQUZlLENBQXJDO0FBSUFKLEdBQUcsQ0FBQ0UsaUJBQUosQ0FBc0JHLFdBQXRCLEdBQW9DO0FBQ2hDLFlBQWMsQ0FEa0I7QUFFaEMsWUFBYztBQUZrQixDQUFwQyxFQUtBOztBQUNBTCxHQUFHLENBQUNFLGlCQUFKLENBQXNCSSxpQkFBdEIsR0FBMEMsVUFBU0MsV0FBVCxFQUFzQkMsV0FBdEIsRUFBbUM7QUFDekUsTUFBSUMsVUFBVSxHQUFHLEVBQWpCO0FBQ0EsTUFBSUMsT0FBTyxHQUFHLENBQUNGLFdBQWY7QUFDQSxNQUFJRyxPQUFPLEdBQUcsQ0FBQ0gsV0FBZjs7QUFDQSxPQUFLLElBQUlJLENBQUMsR0FBRyxJQUFJSixXQUFqQixFQUE4QkksQ0FBQyxJQUFJLENBQW5DLEVBQXNDQSxDQUFDLEVBQXZDLEVBQTRDO0FBQ3hDLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxJQUFJTCxXQUFKLEdBQWtCLENBQXRDLEVBQXlDSyxDQUFDLEVBQTFDLEVBQStDO0FBQzNDLFVBQUlDLEtBQUssR0FBR1AsV0FBVyxDQUFDUSxHQUFaLENBQWdCQyxFQUFFLENBQUNDLEVBQUgsQ0FBTVAsT0FBTyxHQUFHRyxDQUFoQixFQUFtQkYsT0FBTyxHQUFHQyxDQUE3QixDQUFoQixDQUFaO0FBQ0FILE1BQUFBLFVBQVUsQ0FBQ1MsSUFBWCxDQUFnQkosS0FBaEI7QUFDSDtBQUNKOztBQUNELFNBQU9MLFVBQVA7QUFDSCxDQVhELEVBYUE7OztBQUNBVCxHQUFHLENBQUNFLGlCQUFKLENBQXNCaUIsa0JBQXRCLEdBQTJDLFVBQVNaLFdBQVQsRUFBc0JDLFdBQXRCLEVBQW1DO0FBQzFFLE1BQUlDLFVBQVUsR0FBRyxFQUFqQjtBQUNBLE1BQUlDLE9BQU8sR0FBRyxDQUFDRixXQUFmO0FBQ0EsTUFBSUcsT0FBTyxHQUFHLENBQUNILFdBQWY7O0FBQ0EsT0FBSyxJQUFJSSxDQUFDLEdBQUcsSUFBSUosV0FBakIsRUFBOEJJLENBQUMsSUFBSSxDQUFuQyxFQUFzQ0EsQ0FBQyxFQUF2QyxFQUE0QztBQUN4QyxRQUFJUSxXQUFXLEdBQUdaLFdBQVcsR0FBR2EsSUFBSSxDQUFDQyxHQUFMLENBQVNYLE9BQU8sR0FBR0MsQ0FBbkIsQ0FBaEM7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLElBQUlMLFdBQUosR0FBa0IsQ0FBdEMsRUFBeUNLLENBQUMsRUFBMUMsRUFBK0M7QUFDM0MsVUFBSUgsT0FBTyxHQUFHRyxDQUFWLEdBQWMsQ0FBQ08sV0FBZixJQUE4QlYsT0FBTyxHQUFHRyxDQUFWLEdBQWNPLFdBQWhELEVBQTZEO0FBQ3pEO0FBQ0g7O0FBQ0QsVUFBSU4sS0FBSyxHQUFHUCxXQUFXLENBQUNRLEdBQVosQ0FBZ0JDLEVBQUUsQ0FBQ0MsRUFBSCxDQUFNUCxPQUFPLEdBQUdHLENBQWhCLEVBQW1CRixPQUFPLEdBQUdDLENBQTdCLENBQWhCLENBQVo7QUFDQUgsTUFBQUEsVUFBVSxDQUFDUyxJQUFYLENBQWdCSixLQUFoQjtBQUNIO0FBQ0o7O0FBQ0QsU0FBT0wsVUFBUDtBQUNILENBZkQ7O0FBaUJBVCxHQUFHLENBQUNFLGlCQUFKLENBQXNCcUIsWUFBdEIsR0FBcUMsVUFBU0MsUUFBVCxFQUFtQkMsUUFBbkIsRUFBNkI7QUFDOUQsTUFBSUMsQ0FBQyxHQUFHRixRQUFRLENBQUNFLENBQVQsR0FBYUQsUUFBckI7QUFDQSxNQUFJRSxDQUFDLEdBQUdILFFBQVEsQ0FBQ0csQ0FBVCxHQUFhRixRQUFyQjtBQUNBLFNBQU9ULEVBQUUsQ0FBQ0MsRUFBSCxDQUFNVyxRQUFRLENBQUNGLENBQUQsQ0FBZCxFQUFtQkUsUUFBUSxDQUFDRCxDQUFELENBQTNCLENBQVA7QUFDSCxDQUpEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuIENvcHlyaWdodCAoYykgMjAxNy0yMDIwIFN1cGVyU3VSYWNjb29uXG4gXG4gU2l0ZTogaHR0cDovL3d3dy5zdXBlcnN1cmFjY29vbi1jb2NvczJkLmNvbVxuIE1haWw6IHN1cGVyc3VyYWNjb29uQGdtYWlsLmNvbVxuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuY29uc3Qgc3NyID0gcmVxdWlyZSgnLi4vbmFtZXNwYWNlL1NTUkZvV05hbWVzcGFjZScpO1xuXG5zc3IuVGlsZWRGb2dPZldhclV0aWwgPSBmdW5jdGlvbigpIHt9O1xuXG5zc3IuVGlsZWRGb2dPZldhclV0aWwuU1RZTEUgPSB7XG4gICAgXCJTUVVBUkVcIiAgICA6IDEsXG4gICAgXCJESUFNT05EXCIgICA6IDJcbn07XG5zc3IuVGlsZWRGb2dPZldhclV0aWwuUkVOREVSX1NUWUxFID0ge1xuICAgIFwiUkVDVFwiICAgICAgICAgIDogMSxcbiAgICBcIkNJUkNMRVwiICAgICAgICA6IDJcbn07XG5zc3IuVGlsZWRGb2dPZldhclV0aWwuUkVWRUFMX01BUksgPSB7XG4gICAgXCJDRU5URVJcIiAgICA6IDEsXG4gICAgXCJBUk9VTkRcIiAgICA6IDJcbn07XG5cbi8vIGZyb20gdG9wIHRvIGJvdHRvbSwgbGVmdCB0byByaWdodFxuc3NyLlRpbGVkRm9nT2ZXYXJVdGlsLnRpbGVzQXJvdW5kU3F1YXJlID0gZnVuY3Rpb24oY2VudGVyQ29vcmQsIGFyb3VuZENvdW50KSB7XG4gICAgdmFyIHRpbGVzQXJyYXkgPSBbXTtcbiAgICB2YXIgb2Zmc2V0WCA9IC1hcm91bmRDb3VudDtcbiAgICB2YXIgb2Zmc2V0WSA9IC1hcm91bmRDb3VudDtcbiAgICBmb3IgKHZhciBpID0gMiAqIGFyb3VuZENvdW50OyBpID49IDA7IGkgLS0pIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCAyICogYXJvdW5kQ291bnQgKyAxOyBqICsrKSB7XG4gICAgICAgICAgICB2YXIgY29vcmQgPSBjZW50ZXJDb29yZC5hZGQoY2MudjIob2Zmc2V0WCArIGosIG9mZnNldFkgKyBpKSk7XG4gICAgICAgICAgICB0aWxlc0FycmF5LnB1c2goY29vcmQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aWxlc0FycmF5O1xufTtcblxuLy9cbnNzci5UaWxlZEZvZ09mV2FyVXRpbC50aWxlc0Fyb3VuZERpYW1vbmQgPSBmdW5jdGlvbihjZW50ZXJDb29yZCwgYXJvdW5kQ291bnQpIHtcbiAgICB2YXIgdGlsZXNBcnJheSA9IFtdO1xuICAgIHZhciBvZmZzZXRYID0gLWFyb3VuZENvdW50O1xuICAgIHZhciBvZmZzZXRZID0gLWFyb3VuZENvdW50O1xuICAgIGZvciAodmFyIGkgPSAyICogYXJvdW5kQ291bnQ7IGkgPj0gMDsgaSAtLSkge1xuICAgICAgICB2YXIgY291bnRJbkFSb3cgPSBhcm91bmRDb3VudCAtIE1hdGguYWJzKG9mZnNldFkgKyBpKTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCAyICogYXJvdW5kQ291bnQgKyAxOyBqICsrKSB7XG4gICAgICAgICAgICBpZiAob2Zmc2V0WCArIGogPCAtY291bnRJbkFSb3cgfHwgb2Zmc2V0WCArIGogPiBjb3VudEluQVJvdykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNvb3JkID0gY2VudGVyQ29vcmQuYWRkKGNjLnYyKG9mZnNldFggKyBqLCBvZmZzZXRZICsgaSkpO1xuICAgICAgICAgICAgdGlsZXNBcnJheS5wdXNoKGNvb3JkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGlsZXNBcnJheTtcbn07XG5cbnNzci5UaWxlZEZvZ09mV2FyVXRpbC5jb29yZEZyb21Qb3MgPSBmdW5jdGlvbihwb3NpdGlvbiwgdGlsZVNpemUpIHtcbiAgICB2YXIgeCA9IHBvc2l0aW9uLnggLyB0aWxlU2l6ZTtcbiAgICB2YXIgeSA9IHBvc2l0aW9uLnkgLyB0aWxlU2l6ZTtcbiAgICByZXR1cm4gY2MudjIocGFyc2VJbnQoeCksIHBhcnNlSW50KHkpKTtcbn07XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ssr/fbo/namespace/FBONamespace.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '75da1jQripHQ4tVuH7X/7cb', 'FBONamespace');
// scripts/ssr/fbo/namespace/FBONamespace.js

"use strict";

/****************************************************************************
 Copyright (c) 2017-2018 SuperSuRaccoon
 
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
var ssr = ssr || {};
ssr.FBO = ssr.FBO || {};
ssr.FBO.Component = ssr.FBO.Component || {};
ssr.FBO.Const = ssr.FBO.Const || {};
ssr.FBO.Data = ssr.FBO.Data || {};
ssr.FBO.Util = ssr.FBO.Util || {};
module.exports = ssr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3NyXFxmYm9cXG5hbWVzcGFjZVxcRkJPTmFtZXNwYWNlLmpzIl0sIm5hbWVzIjpbInNzciIsIkZCTyIsIkNvbXBvbmVudCIsIkNvbnN0IiwiRGF0YSIsIlV0aWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEdBQUcsR0FBR0EsR0FBRyxJQUFJLEVBQWpCO0FBRUFBLEdBQUcsQ0FBQ0MsR0FBSixHQUFVRCxHQUFHLENBQUNDLEdBQUosSUFBVyxFQUFyQjtBQUVBRCxHQUFHLENBQUNDLEdBQUosQ0FBUUMsU0FBUixHQUFvQkYsR0FBRyxDQUFDQyxHQUFKLENBQVFDLFNBQVIsSUFBcUIsRUFBekM7QUFFQUYsR0FBRyxDQUFDQyxHQUFKLENBQVFFLEtBQVIsR0FBZ0JILEdBQUcsQ0FBQ0MsR0FBSixDQUFRRSxLQUFSLElBQWlCLEVBQWpDO0FBRUFILEdBQUcsQ0FBQ0MsR0FBSixDQUFRRyxJQUFSLEdBQWVKLEdBQUcsQ0FBQ0MsR0FBSixDQUFRRyxJQUFSLElBQWdCLEVBQS9CO0FBRUFKLEdBQUcsQ0FBQ0MsR0FBSixDQUFRSSxJQUFSLEdBQWVMLEdBQUcsQ0FBQ0MsR0FBSixDQUFRSSxJQUFSLElBQWdCLEVBQS9CO0FBRUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlAsR0FBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggU3VwZXJTdVJhY2Nvb25cbiBcbiBTaXRlOiBodHRwOi8vd3d3LnN1cGVyc3VyYWNjb29uLWNvY29zMmQuY29tXG4gTWFpbDogc3VwZXJzdXJhY2Nvb25AZ21haWwuY29tXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuIFxudmFyIHNzciA9IHNzciB8fCB7fTtcblxuc3NyLkZCTyA9IHNzci5GQk8gfHwge307XG5cbnNzci5GQk8uQ29tcG9uZW50ID0gc3NyLkZCTy5Db21wb25lbnQgfHwge307XG5cbnNzci5GQk8uQ29uc3QgPSBzc3IuRkJPLkNvbnN0IHx8IHt9O1xuXG5zc3IuRkJPLkRhdGEgPSBzc3IuRkJPLkRhdGEgfHwge307XG5cbnNzci5GQk8uVXRpbCA9IHNzci5GQk8uVXRpbCB8fCB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBzc3I7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ssr/fow/component/SSRFoWComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8a216QSTKFAVo8loBP3b1AP', 'SSRFoWComponent');
// scripts/ssr/fow/component/SSRFoWComponent.js

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
var ssr = require('../namespace/SSRFoWNamespace');

var RevealStyle = cc.Enum({
  SQUARE: 1,
  DIAMOND: 2
});
var TileStyle = cc.Enum({
  RECT: 1,
  CIRCLE: 2
});
/**
 * ssr.FoW.Component 战雾组件
 * @class ssr.FoW.Component
 * @extends Component
 */

ssr.FoW.Component = cc.Class({
  "extends": cc.Component,
  editor: CC_EDITOR && {
    menu: 'ssr/FoW/Component'
  },
  properties: {
    /**
     * 用于渲染的 Graphics 对象，如果没有提供，会尝试使用 cc.Node 上 cc.Mask 对象的内置 Graphics 对象
     * @property {cc.Graphics} render
     * @default null
     */
    render: cc.Graphics,
    //
    _tileSize: 32,
    tileSize: {
      get: function get() {
        return this._tileSize;
      },
      set: function set(val) {
        this._tileSize = val;
      },
      tooltip: "单元 tile 的大小尺寸"
    },
    _range: 2,
    range: {
      get: function get() {
        return this._range;
      },
      set: function set(val) {
        this._range = val;
      },
      tooltip: "每次揭开迷雾的周边单元格范围"
    },
    _revealStyle: RevealStyle.DIAMOND,
    revealStyle: {
      type: RevealStyle,
      get: function get() {
        return this._revealStyle;
      },
      set: function set(val) {
        this._revealStyle = val;
      },
      tooltip: "揭开周围单元格的风格，支持钻石形状和矩形"
    },
    _tileStyle: TileStyle.CIRCLE,
    tileStyle: {
      type: TileStyle,
      get: function get() {
        return this._tileStyle;
      },
      set: function set(val) {
        this._tileStyle = val;
      },
      tooltip: "每个单元格的渲染风格，支持圆形和矩形"
    }
  },
  onLoad: function onLoad() {},
  start: function start() {
    if (!this.render) {
      this.mask = this.node.getComponent("cc.Mask");

      if (this.mask) {
        this.render = this.mask._graphics;
      }
    } //


    this.render.fillColor = cc.color(0, 0, 0, 255); //

    this._init();
  },
  _init: function _init() {
    /* 
        revealed tiles record array 
        null : unrevealed
        1    : revealed as centerCoord
        2    : revealed as aroundCoord
    */
    this._revealedTileArray = {};
  },
  _isTileRevealed: function _isTileRevealed(tileToReveal) {
    return tileToReveal.x in this._revealedTileArray && tileToReveal.y in this._revealedTileArray[tileToReveal.x] && (this._revealedTileArray[tileToReveal.x][tileToReveal.y] != ssr.TiledFogOfWarUtil.REVEAL_MARK.AROUND || this._revealedTileArray[tileToReveal.x][tileToReveal.y] != ssr.TiledFogOfWarUtil.REVEAL_MARK.CENTER);
  },
  _isTileRevealedAsCetner: function _isTileRevealedAsCetner(tileToReveal) {
    return tileToReveal.x in this._revealedTileArray && tileToReveal.y in this._revealedTileArray[tileToReveal.x] && this._revealedTileArray[tileToReveal.x][tileToReveal.y] == ssr.TiledFogOfWarUtil.REVEAL_MARK.CENTER;
  },
  _revealTile: function _revealTile(tileToReveal) {
    if (!this._revealedTileArray[tileToReveal.x]) {
      // this._revealedTileArray[tileToReveal.x] = [];
      this._revealedTileArray[tileToReveal.x] = {};
    }

    this._revealedTileArray[tileToReveal.x][tileToReveal.y] = ssr.TiledFogOfWarUtil.REVEAL_MARK.AROUND;
  },
  _revealTileAsCenter: function _revealTileAsCenter(tileToReveal) {
    if (!this._revealedTileArray[tileToReveal.x]) {
      // this._revealedTileArray[tileToReveal.x] = [];
      this._revealedTileArray[tileToReveal.x] = {};
    }

    this._revealedTileArray[tileToReveal.x][tileToReveal.y] = ssr.TiledFogOfWarUtil.REVEAL_MARK.CENTER;
  },
  updateFog: function updateFog(pos) {
    var centerCoord = ssr.TiledFogOfWarUtil.coordFromPos(pos, this.tileSize);

    if (this._isTileRevealedAsCetner(centerCoord)) {
      return;
    }

    if (this.revealStyle == ssr.TiledFogOfWarUtil.STYLE.SQUARE) {
      var tilesArray = ssr.TiledFogOfWarUtil.tilesAroundSquare(centerCoord, this.range);
    } else {
      var tilesArray = ssr.TiledFogOfWarUtil.tilesAroundDiamond(centerCoord, this.range);
    }

    var hasTilesToReveal = false;

    for (var i = 0; i < tilesArray.length; i++) {
      var tileToReveal = tilesArray[i];

      if (this._isTileRevealed(tileToReveal)) {
        if (centerCoord.equals(tileToReveal)) {
          // mark as centerCoord
          this._revealTileAsCenter(tileToReveal);
        }

        continue;
      }

      hasTilesToReveal = true;

      this._revealTile(tileToReveal);

      if (this.tileStyle == ssr.TiledFogOfWarUtil.RENDER_STYLE.RECT) {
        this.render.rect(tileToReveal.x * this.tileSize, tileToReveal.y * this.tileSize, this.tileSize, this.tileSize);
      } else if (this.tileStyle == ssr.TiledFogOfWarUtil.RENDER_STYLE.CIRCLE) {
        this.render.circle(tileToReveal.x * this.tileSize, tileToReveal.y * this.tileSize, this.tileSize);
      }
    }

    if (hasTilesToReveal) {
      this.render.fill();
    }
  },
  reset: function reset() {
    this.render.clear();
    this._revealedTileArray = {};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3NyXFxmb3dcXGNvbXBvbmVudFxcU1NSRm9XQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbInNzciIsInJlcXVpcmUiLCJSZXZlYWxTdHlsZSIsImNjIiwiRW51bSIsIlNRVUFSRSIsIkRJQU1PTkQiLCJUaWxlU3R5bGUiLCJSRUNUIiwiQ0lSQ0xFIiwiRm9XIiwiQ29tcG9uZW50IiwiQ2xhc3MiLCJlZGl0b3IiLCJDQ19FRElUT1IiLCJtZW51IiwicHJvcGVydGllcyIsInJlbmRlciIsIkdyYXBoaWNzIiwiX3RpbGVTaXplIiwidGlsZVNpemUiLCJnZXQiLCJzZXQiLCJ2YWwiLCJ0b29sdGlwIiwiX3JhbmdlIiwicmFuZ2UiLCJfcmV2ZWFsU3R5bGUiLCJyZXZlYWxTdHlsZSIsInR5cGUiLCJfdGlsZVN0eWxlIiwidGlsZVN0eWxlIiwib25Mb2FkIiwic3RhcnQiLCJtYXNrIiwibm9kZSIsImdldENvbXBvbmVudCIsIl9ncmFwaGljcyIsImZpbGxDb2xvciIsImNvbG9yIiwiX2luaXQiLCJfcmV2ZWFsZWRUaWxlQXJyYXkiLCJfaXNUaWxlUmV2ZWFsZWQiLCJ0aWxlVG9SZXZlYWwiLCJ4IiwieSIsIlRpbGVkRm9nT2ZXYXJVdGlsIiwiUkVWRUFMX01BUksiLCJBUk9VTkQiLCJDRU5URVIiLCJfaXNUaWxlUmV2ZWFsZWRBc0NldG5lciIsIl9yZXZlYWxUaWxlIiwiX3JldmVhbFRpbGVBc0NlbnRlciIsInVwZGF0ZUZvZyIsInBvcyIsImNlbnRlckNvb3JkIiwiY29vcmRGcm9tUG9zIiwiU1RZTEUiLCJ0aWxlc0FycmF5IiwidGlsZXNBcm91bmRTcXVhcmUiLCJ0aWxlc0Fyb3VuZERpYW1vbmQiLCJoYXNUaWxlc1RvUmV2ZWFsIiwiaSIsImxlbmd0aCIsImVxdWFscyIsIlJFTkRFUl9TVFlMRSIsInJlY3QiLCJjaXJjbGUiLCJmaWxsIiwicmVzZXQiLCJjbGVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLEdBQUdDLE9BQU8sQ0FBQyw4QkFBRCxDQUFuQjs7QUFFQSxJQUFJQyxXQUFXLEdBQUdDLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRO0FBQ3RCQyxFQUFBQSxNQUFNLEVBQVUsQ0FETTtBQUV0QkMsRUFBQUEsT0FBTyxFQUFTO0FBRk0sQ0FBUixDQUFsQjtBQUtBLElBQUlDLFNBQVMsR0FBR0osRUFBRSxDQUFDQyxJQUFILENBQVE7QUFDcEJJLEVBQUFBLElBQUksRUFBWSxDQURJO0FBRXBCQyxFQUFBQSxNQUFNLEVBQVU7QUFGSSxDQUFSLENBQWhCO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQVQsR0FBRyxDQUFDVSxHQUFKLENBQVFDLFNBQVIsR0FBb0JSLEVBQUUsQ0FBQ1MsS0FBSCxDQUFTO0FBQ3pCLGFBQVNULEVBQUUsQ0FBQ1EsU0FEYTtBQUV6QkUsRUFBQUEsTUFBTSxFQUFFQyxTQUFTLElBQUk7QUFDakJDLElBQUFBLElBQUksRUFBRTtBQURXLEdBRkk7QUFLekJDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDUUMsSUFBQUEsTUFBTSxFQUFFZCxFQUFFLENBQUNlLFFBTkg7QUFPUjtBQUNBQyxJQUFBQSxTQUFTLEVBQUUsRUFSSDtBQVNSQyxJQUFBQSxRQUFRLEVBQUU7QUFDTkMsTUFBQUEsR0FETSxpQkFDQztBQUNILGVBQU8sS0FBS0YsU0FBWjtBQUNILE9BSEs7QUFJTkcsTUFBQUEsR0FKTSxlQUlEQyxHQUpDLEVBSUk7QUFDTixhQUFLSixTQUFMLEdBQWlCSSxHQUFqQjtBQUNILE9BTks7QUFPTkMsTUFBQUEsT0FBTyxFQUFFO0FBUEgsS0FURjtBQWtCUkMsSUFBQUEsTUFBTSxFQUFFLENBbEJBO0FBbUJSQyxJQUFBQSxLQUFLLEVBQUU7QUFDSEwsTUFBQUEsR0FERyxpQkFDSTtBQUNILGVBQU8sS0FBS0ksTUFBWjtBQUNILE9BSEU7QUFJSEgsTUFBQUEsR0FKRyxlQUlFQyxHQUpGLEVBSU87QUFDTixhQUFLRSxNQUFMLEdBQWNGLEdBQWQ7QUFDSCxPQU5FO0FBT0hDLE1BQUFBLE9BQU8sRUFBRTtBQVBOLEtBbkJDO0FBNEJSRyxJQUFBQSxZQUFZLEVBQUV6QixXQUFXLENBQUNJLE9BNUJsQjtBQTZCUnNCLElBQUFBLFdBQVcsRUFBRTtBQUNUQyxNQUFBQSxJQUFJLEVBQUUzQixXQURHO0FBRVRtQixNQUFBQSxHQUZTLGlCQUVGO0FBQ0gsZUFBTyxLQUFLTSxZQUFaO0FBQ0gsT0FKUTtBQUtUTCxNQUFBQSxHQUxTLGVBS0pDLEdBTEksRUFLQztBQUNOLGFBQUtJLFlBQUwsR0FBb0JKLEdBQXBCO0FBQ0gsT0FQUTtBQVFUQyxNQUFBQSxPQUFPLEVBQUU7QUFSQSxLQTdCTDtBQXVDUk0sSUFBQUEsVUFBVSxFQUFFdkIsU0FBUyxDQUFDRSxNQXZDZDtBQXdDUnNCLElBQUFBLFNBQVMsRUFBRTtBQUNQRixNQUFBQSxJQUFJLEVBQUV0QixTQURDO0FBRVBjLE1BQUFBLEdBRk8saUJBRUE7QUFDSCxlQUFPLEtBQUtTLFVBQVo7QUFDSCxPQUpNO0FBS1BSLE1BQUFBLEdBTE8sZUFLRkMsR0FMRSxFQUtHO0FBQ04sYUFBS08sVUFBTCxHQUFrQlAsR0FBbEI7QUFDSCxPQVBNO0FBUVBDLE1BQUFBLE9BQU8sRUFBRTtBQVJGO0FBeENILEdBTGE7QUF3RHpCUSxFQUFBQSxNQXhEeUIsb0JBd0RmLENBQ1QsQ0F6RHdCO0FBMER6QkMsRUFBQUEsS0ExRHlCLG1CQTBEaEI7QUFDTCxRQUFJLENBQUMsS0FBS2hCLE1BQVYsRUFBa0I7QUFDZCxXQUFLaUIsSUFBTCxHQUFZLEtBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QixTQUF2QixDQUFaOztBQUNBLFVBQUksS0FBS0YsSUFBVCxFQUFlO0FBQ1gsYUFBS2pCLE1BQUwsR0FBYyxLQUFLaUIsSUFBTCxDQUFVRyxTQUF4QjtBQUNIO0FBQ0osS0FOSSxDQU9MOzs7QUFDQSxTQUFLcEIsTUFBTCxDQUFZcUIsU0FBWixHQUF3Qm5DLEVBQUUsQ0FBQ29DLEtBQUgsQ0FBUyxDQUFULEVBQVksQ0FBWixFQUFlLENBQWYsRUFBa0IsR0FBbEIsQ0FBeEIsQ0FSSyxDQVNMOztBQUNBLFNBQUtDLEtBQUw7QUFDSCxHQXJFd0I7QUFzRXpCQSxFQUFBQSxLQXRFeUIsbUJBc0VoQjtBQUNMO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNRLFNBQUtDLGtCQUFMLEdBQTBCLEVBQTFCO0FBQ0gsR0E5RXdCO0FBK0V6QkMsRUFBQUEsZUEvRXlCLDJCQStFUkMsWUEvRVEsRUErRU07QUFDM0IsV0FBUUEsWUFBWSxDQUFDQyxDQUFiLElBQWtCLEtBQUtILGtCQUF2QixJQUNBRSxZQUFZLENBQUNFLENBQWIsSUFBa0IsS0FBS0osa0JBQUwsQ0FBd0JFLFlBQVksQ0FBQ0MsQ0FBckMsQ0FEbEIsS0FFQyxLQUFLSCxrQkFBTCxDQUF3QkUsWUFBWSxDQUFDQyxDQUFyQyxFQUF3Q0QsWUFBWSxDQUFDRSxDQUFyRCxLQUEyRDdDLEdBQUcsQ0FBQzhDLGlCQUFKLENBQXNCQyxXQUF0QixDQUFrQ0MsTUFBN0YsSUFDQSxLQUFLUCxrQkFBTCxDQUF3QkUsWUFBWSxDQUFDQyxDQUFyQyxFQUF3Q0QsWUFBWSxDQUFDRSxDQUFyRCxLQUEyRDdDLEdBQUcsQ0FBQzhDLGlCQUFKLENBQXNCQyxXQUF0QixDQUFrQ0UsTUFIOUYsQ0FBUjtBQUlILEdBcEZ3QjtBQXFGekJDLEVBQUFBLHVCQXJGeUIsbUNBcUZBUCxZQXJGQSxFQXFGYztBQUNuQyxXQUFRQSxZQUFZLENBQUNDLENBQWIsSUFBa0IsS0FBS0gsa0JBQXZCLElBQ0FFLFlBQVksQ0FBQ0UsQ0FBYixJQUFrQixLQUFLSixrQkFBTCxDQUF3QkUsWUFBWSxDQUFDQyxDQUFyQyxDQURsQixJQUVBLEtBQUtILGtCQUFMLENBQXdCRSxZQUFZLENBQUNDLENBQXJDLEVBQXdDRCxZQUFZLENBQUNFLENBQXJELEtBQTJEN0MsR0FBRyxDQUFDOEMsaUJBQUosQ0FBc0JDLFdBQXRCLENBQWtDRSxNQUZyRztBQUdILEdBekZ3QjtBQTBGekJFLEVBQUFBLFdBMUZ5Qix1QkEwRlpSLFlBMUZZLEVBMEZFO0FBQ3ZCLFFBQUksQ0FBQyxLQUFLRixrQkFBTCxDQUF3QkUsWUFBWSxDQUFDQyxDQUFyQyxDQUFMLEVBQThDO0FBQzFDO0FBQ0EsV0FBS0gsa0JBQUwsQ0FBd0JFLFlBQVksQ0FBQ0MsQ0FBckMsSUFBMEMsRUFBMUM7QUFDSDs7QUFDRCxTQUFLSCxrQkFBTCxDQUF3QkUsWUFBWSxDQUFDQyxDQUFyQyxFQUF3Q0QsWUFBWSxDQUFDRSxDQUFyRCxJQUEwRDdDLEdBQUcsQ0FBQzhDLGlCQUFKLENBQXNCQyxXQUF0QixDQUFrQ0MsTUFBNUY7QUFDSCxHQWhHd0I7QUFpR3pCSSxFQUFBQSxtQkFqR3lCLCtCQWlHSlQsWUFqR0ksRUFpR1U7QUFDL0IsUUFBSSxDQUFDLEtBQUtGLGtCQUFMLENBQXdCRSxZQUFZLENBQUNDLENBQXJDLENBQUwsRUFBOEM7QUFDMUM7QUFDQSxXQUFLSCxrQkFBTCxDQUF3QkUsWUFBWSxDQUFDQyxDQUFyQyxJQUEwQyxFQUExQztBQUNIOztBQUNELFNBQUtILGtCQUFMLENBQXdCRSxZQUFZLENBQUNDLENBQXJDLEVBQXdDRCxZQUFZLENBQUNFLENBQXJELElBQTBEN0MsR0FBRyxDQUFDOEMsaUJBQUosQ0FBc0JDLFdBQXRCLENBQWtDRSxNQUE1RjtBQUNILEdBdkd3QjtBQXdHekJJLEVBQUFBLFNBeEd5QixxQkF3R2RDLEdBeEdjLEVBd0dUO0FBQ1osUUFBSUMsV0FBVyxHQUFHdkQsR0FBRyxDQUFDOEMsaUJBQUosQ0FBc0JVLFlBQXRCLENBQW1DRixHQUFuQyxFQUF3QyxLQUFLbEMsUUFBN0MsQ0FBbEI7O0FBQ0EsUUFBSSxLQUFLOEIsdUJBQUwsQ0FBNkJLLFdBQTdCLENBQUosRUFBK0M7QUFDM0M7QUFDSDs7QUFDRCxRQUFJLEtBQUszQixXQUFMLElBQW9CNUIsR0FBRyxDQUFDOEMsaUJBQUosQ0FBc0JXLEtBQXRCLENBQTRCcEQsTUFBcEQsRUFBNEQ7QUFDeEQsVUFBSXFELFVBQVUsR0FBRzFELEdBQUcsQ0FBQzhDLGlCQUFKLENBQXNCYSxpQkFBdEIsQ0FDYkosV0FEYSxFQUViLEtBQUs3QixLQUZRLENBQWpCO0FBSUgsS0FMRCxNQU1LO0FBQ0QsVUFBSWdDLFVBQVUsR0FBRzFELEdBQUcsQ0FBQzhDLGlCQUFKLENBQXNCYyxrQkFBdEIsQ0FDYkwsV0FEYSxFQUViLEtBQUs3QixLQUZRLENBQWpCO0FBSUg7O0FBQ0QsUUFBSW1DLGdCQUFnQixHQUFHLEtBQXZCOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0osVUFBVSxDQUFDSyxNQUEvQixFQUF1Q0QsQ0FBQyxFQUF4QyxFQUE2QztBQUN6QyxVQUFJbkIsWUFBWSxHQUFHZSxVQUFVLENBQUNJLENBQUQsQ0FBN0I7O0FBQ0EsVUFBSSxLQUFLcEIsZUFBTCxDQUFxQkMsWUFBckIsQ0FBSixFQUF3QztBQUNwQyxZQUFJWSxXQUFXLENBQUNTLE1BQVosQ0FBbUJyQixZQUFuQixDQUFKLEVBQXNDO0FBQ2xDO0FBQ0EsZUFBS1MsbUJBQUwsQ0FBeUJULFlBQXpCO0FBQ0g7O0FBQ0Q7QUFDSDs7QUFDRGtCLE1BQUFBLGdCQUFnQixHQUFHLElBQW5COztBQUNBLFdBQUtWLFdBQUwsQ0FBaUJSLFlBQWpCOztBQUVBLFVBQUksS0FBS1osU0FBTCxJQUFrQi9CLEdBQUcsQ0FBQzhDLGlCQUFKLENBQXNCbUIsWUFBdEIsQ0FBbUN6RCxJQUF6RCxFQUErRDtBQUMzRCxhQUFLUyxNQUFMLENBQVlpRCxJQUFaLENBQ0l2QixZQUFZLENBQUNDLENBQWIsR0FBaUIsS0FBS3hCLFFBRDFCLEVBRUl1QixZQUFZLENBQUNFLENBQWIsR0FBaUIsS0FBS3pCLFFBRjFCLEVBR0ksS0FBS0EsUUFIVCxFQUlJLEtBQUtBLFFBSlQ7QUFPSCxPQVJELE1BU0ssSUFBSSxLQUFLVyxTQUFMLElBQWtCL0IsR0FBRyxDQUFDOEMsaUJBQUosQ0FBc0JtQixZQUF0QixDQUFtQ3hELE1BQXpELEVBQWlFO0FBQ2xFLGFBQUtRLE1BQUwsQ0FBWWtELE1BQVosQ0FDSXhCLFlBQVksQ0FBQ0MsQ0FBYixHQUFpQixLQUFLeEIsUUFEMUIsRUFFSXVCLFlBQVksQ0FBQ0UsQ0FBYixHQUFpQixLQUFLekIsUUFGMUIsRUFHSSxLQUFLQSxRQUhUO0FBTUg7QUFDSjs7QUFDRCxRQUFJeUMsZ0JBQUosRUFBc0I7QUFDbEIsV0FBSzVDLE1BQUwsQ0FBWW1ELElBQVo7QUFDSDtBQUNKLEdBM0p3QjtBQTRKekJDLEVBQUFBLEtBNUp5QixtQkE0SmhCO0FBQ0wsU0FBS3BELE1BQUwsQ0FBWXFELEtBQVo7QUFDQSxTQUFLN0Isa0JBQUwsR0FBMEIsRUFBMUI7QUFDSDtBQS9Kd0IsQ0FBVCxDQUFwQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAyMCBTdXBlclN1UmFjY29vblxuIFxuIFNpdGU6IGh0dHA6Ly93d3cuc3VwZXJzdXJhY2Nvb24tY29jb3MyZC5jb21cbiBNYWlsOiBzdXBlcnN1cmFjY29vbkBnbWFpbC5jb21cblxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmNvbnN0IHNzciA9IHJlcXVpcmUoJy4uL25hbWVzcGFjZS9TU1JGb1dOYW1lc3BhY2UnKTtcblxubGV0IFJldmVhbFN0eWxlID0gY2MuRW51bSh7XG4gICAgU1FVQVJFICAgICAgICA6IDEsXG4gICAgRElBTU9ORCAgICAgICA6IDJcbn0pO1xuXG5sZXQgVGlsZVN0eWxlID0gY2MuRW51bSh7XG4gICAgUkVDVCAgICAgICAgICA6IDEsXG4gICAgQ0lSQ0xFICAgICAgICA6IDIsXG59KTtcblxuLyoqXG4gKiBzc3IuRm9XLkNvbXBvbmVudCDmiJjpm77nu4Tku7ZcbiAqIEBjbGFzcyBzc3IuRm9XLkNvbXBvbmVudFxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbnNzci5Gb1cuQ29tcG9uZW50ID0gY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBlZGl0b3I6IENDX0VESVRPUiAmJiB7XG4gICAgICAgIG1lbnU6ICdzc3IvRm9XL0NvbXBvbmVudCdcbiAgICB9LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOeUqOS6jua4suafk+eahCBHcmFwaGljcyDlr7nosaHvvIzlpoLmnpzmsqHmnInmj5DkvpvvvIzkvJrlsJ3or5Xkvb/nlKggY2MuTm9kZSDkuIogY2MuTWFzayDlr7nosaHnmoTlhoXnva4gR3JhcGhpY3Mg5a+56LGhXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7Y2MuR3JhcGhpY3N9IHJlbmRlclxuICAgICAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICAgICAqL1xuICAgICAgICByZW5kZXI6IGNjLkdyYXBoaWNzLFxuICAgICAgICAvL1xuICAgICAgICBfdGlsZVNpemU6IDMyLFxuICAgICAgICB0aWxlU2l6ZToge1xuICAgICAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdGlsZVNpemU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0ICh2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90aWxlU2l6ZSA9IHZhbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWNleWFgyB0aWxlIOeahOWkp+Wwj+WwuuWvuFwiXG4gICAgICAgIH0sXG4gICAgICAgIF9yYW5nZTogMixcbiAgICAgICAgcmFuZ2U6IHtcbiAgICAgICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JhbmdlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCAodmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmFuZ2UgPSB2YWw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbHRpcDogXCLmr4/mrKHmj63lvIDov7fpm77nmoTlkajovrnljZXlhYPmoLzojIPlm7RcIlxuICAgICAgICB9LFxuICAgICAgICBfcmV2ZWFsU3R5bGU6IFJldmVhbFN0eWxlLkRJQU1PTkQsXG4gICAgICAgIHJldmVhbFN0eWxlOiB7XG4gICAgICAgICAgICB0eXBlOiBSZXZlYWxTdHlsZSxcbiAgICAgICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JldmVhbFN0eWxlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCAodmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmV2ZWFsU3R5bGUgPSB2YWw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbHRpcDogXCLmj63lvIDlkajlm7TljZXlhYPmoLznmoTpo47moLzvvIzmlK/mjIHpkrvnn7PlvaLnirblkoznn6nlvaJcIlxuICAgICAgICB9LFxuICAgICAgICBfdGlsZVN0eWxlOiBUaWxlU3R5bGUuQ0lSQ0xFLFxuICAgICAgICB0aWxlU3R5bGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFRpbGVTdHlsZSxcbiAgICAgICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RpbGVTdHlsZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQgKHZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RpbGVTdHlsZSA9IHZhbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwOiBcIuavj+S4quWNleWFg+agvOeahOa4suafk+mjjuagvO+8jOaUr+aMgeWchuW9ouWSjOefqeW9olwiXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBvbkxvYWQgKCkge1xuICAgIH0sXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBpZiAoIXRoaXMucmVuZGVyKSB7XG4gICAgICAgICAgICB0aGlzLm1hc2sgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFwiY2MuTWFza1wiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1hc2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlciA9IHRoaXMubWFzay5fZ3JhcGhpY3M7ICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL1xuICAgICAgICB0aGlzLnJlbmRlci5maWxsQ29sb3IgPSBjYy5jb2xvcigwLCAwLCAwLCAyNTUpO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLl9pbml0KCk7XG4gICAgfSxcbiAgICBfaW5pdCAoKSB7XG4gICAgICAgIC8qIFxuICAgICAgICAgICAgcmV2ZWFsZWQgdGlsZXMgcmVjb3JkIGFycmF5IFxuICAgICAgICAgICAgbnVsbCA6IHVucmV2ZWFsZWRcbiAgICAgICAgICAgIDEgICAgOiByZXZlYWxlZCBhcyBjZW50ZXJDb29yZFxuICAgICAgICAgICAgMiAgICA6IHJldmVhbGVkIGFzIGFyb3VuZENvb3JkXG4gICAgICAgICovXG4gICAgICAgIHRoaXMuX3JldmVhbGVkVGlsZUFycmF5ID0ge307XG4gICAgfSxcbiAgICBfaXNUaWxlUmV2ZWFsZWQgKHRpbGVUb1JldmVhbCkge1xuICAgICAgICByZXR1cm4gKHRpbGVUb1JldmVhbC54IGluIHRoaXMuX3JldmVhbGVkVGlsZUFycmF5ICYmXG4gICAgICAgICAgICAgICAgdGlsZVRvUmV2ZWFsLnkgaW4gdGhpcy5fcmV2ZWFsZWRUaWxlQXJyYXlbdGlsZVRvUmV2ZWFsLnhdICYmXG4gICAgICAgICAgICAgICAgKHRoaXMuX3JldmVhbGVkVGlsZUFycmF5W3RpbGVUb1JldmVhbC54XVt0aWxlVG9SZXZlYWwueV0gIT0gc3NyLlRpbGVkRm9nT2ZXYXJVdGlsLlJFVkVBTF9NQVJLLkFST1VORCB8fFxuICAgICAgICAgICAgICAgICB0aGlzLl9yZXZlYWxlZFRpbGVBcnJheVt0aWxlVG9SZXZlYWwueF1bdGlsZVRvUmV2ZWFsLnldICE9IHNzci5UaWxlZEZvZ09mV2FyVXRpbC5SRVZFQUxfTUFSSy5DRU5URVIpKTtcbiAgICB9LFxuICAgIF9pc1RpbGVSZXZlYWxlZEFzQ2V0bmVyICh0aWxlVG9SZXZlYWwpIHtcbiAgICAgICAgcmV0dXJuICh0aWxlVG9SZXZlYWwueCBpbiB0aGlzLl9yZXZlYWxlZFRpbGVBcnJheSAmJlxuICAgICAgICAgICAgICAgIHRpbGVUb1JldmVhbC55IGluIHRoaXMuX3JldmVhbGVkVGlsZUFycmF5W3RpbGVUb1JldmVhbC54XSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuX3JldmVhbGVkVGlsZUFycmF5W3RpbGVUb1JldmVhbC54XVt0aWxlVG9SZXZlYWwueV0gPT0gc3NyLlRpbGVkRm9nT2ZXYXJVdGlsLlJFVkVBTF9NQVJLLkNFTlRFUik7XG4gICAgfSxcbiAgICBfcmV2ZWFsVGlsZSAodGlsZVRvUmV2ZWFsKSB7XG4gICAgICAgIGlmICghdGhpcy5fcmV2ZWFsZWRUaWxlQXJyYXlbdGlsZVRvUmV2ZWFsLnhdKSB7XG4gICAgICAgICAgICAvLyB0aGlzLl9yZXZlYWxlZFRpbGVBcnJheVt0aWxlVG9SZXZlYWwueF0gPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX3JldmVhbGVkVGlsZUFycmF5W3RpbGVUb1JldmVhbC54XSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3JldmVhbGVkVGlsZUFycmF5W3RpbGVUb1JldmVhbC54XVt0aWxlVG9SZXZlYWwueV0gPSBzc3IuVGlsZWRGb2dPZldhclV0aWwuUkVWRUFMX01BUksuQVJPVU5EO1xuICAgIH0sXG4gICAgX3JldmVhbFRpbGVBc0NlbnRlciAodGlsZVRvUmV2ZWFsKSB7XG4gICAgICAgIGlmICghdGhpcy5fcmV2ZWFsZWRUaWxlQXJyYXlbdGlsZVRvUmV2ZWFsLnhdKSB7XG4gICAgICAgICAgICAvLyB0aGlzLl9yZXZlYWxlZFRpbGVBcnJheVt0aWxlVG9SZXZlYWwueF0gPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX3JldmVhbGVkVGlsZUFycmF5W3RpbGVUb1JldmVhbC54XSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3JldmVhbGVkVGlsZUFycmF5W3RpbGVUb1JldmVhbC54XVt0aWxlVG9SZXZlYWwueV0gPSBzc3IuVGlsZWRGb2dPZldhclV0aWwuUkVWRUFMX01BUksuQ0VOVEVSO1xuICAgIH0sXG4gICAgdXBkYXRlRm9nIChwb3MpIHtcbiAgICAgICAgbGV0IGNlbnRlckNvb3JkID0gc3NyLlRpbGVkRm9nT2ZXYXJVdGlsLmNvb3JkRnJvbVBvcyhwb3MsIHRoaXMudGlsZVNpemUpO1xuICAgICAgICBpZiAodGhpcy5faXNUaWxlUmV2ZWFsZWRBc0NldG5lcihjZW50ZXJDb29yZCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yZXZlYWxTdHlsZSA9PSBzc3IuVGlsZWRGb2dPZldhclV0aWwuU1RZTEUuU1FVQVJFKSB7XG4gICAgICAgICAgICB2YXIgdGlsZXNBcnJheSA9IHNzci5UaWxlZEZvZ09mV2FyVXRpbC50aWxlc0Fyb3VuZFNxdWFyZShcbiAgICAgICAgICAgICAgICBjZW50ZXJDb29yZCwgXG4gICAgICAgICAgICAgICAgdGhpcy5yYW5nZVxuICAgICAgICAgICAgKTsgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGlsZXNBcnJheSA9IHNzci5UaWxlZEZvZ09mV2FyVXRpbC50aWxlc0Fyb3VuZERpYW1vbmQoXG4gICAgICAgICAgICAgICAgY2VudGVyQ29vcmQsIFxuICAgICAgICAgICAgICAgIHRoaXMucmFuZ2VcbiAgICAgICAgICAgICk7ICAgXG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhhc1RpbGVzVG9SZXZlYWwgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aWxlc0FycmF5Lmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgdmFyIHRpbGVUb1JldmVhbCA9IHRpbGVzQXJyYXlbaV07XG4gICAgICAgICAgICBpZiAodGhpcy5faXNUaWxlUmV2ZWFsZWQodGlsZVRvUmV2ZWFsKSkge1xuICAgICAgICAgICAgICAgIGlmIChjZW50ZXJDb29yZC5lcXVhbHModGlsZVRvUmV2ZWFsKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBtYXJrIGFzIGNlbnRlckNvb3JkXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JldmVhbFRpbGVBc0NlbnRlcih0aWxlVG9SZXZlYWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhc1RpbGVzVG9SZXZlYWwgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fcmV2ZWFsVGlsZSh0aWxlVG9SZXZlYWwpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy50aWxlU3R5bGUgPT0gc3NyLlRpbGVkRm9nT2ZXYXJVdGlsLlJFTkRFUl9TVFlMRS5SRUNUKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIucmVjdChcbiAgICAgICAgICAgICAgICAgICAgdGlsZVRvUmV2ZWFsLnggKiB0aGlzLnRpbGVTaXplLFxuICAgICAgICAgICAgICAgICAgICB0aWxlVG9SZXZlYWwueSAqIHRoaXMudGlsZVNpemUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVNpemUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVNpemVcblxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnRpbGVTdHlsZSA9PSBzc3IuVGlsZWRGb2dPZldhclV0aWwuUkVOREVSX1NUWUxFLkNJUkNMRSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyLmNpcmNsZShcbiAgICAgICAgICAgICAgICAgICAgdGlsZVRvUmV2ZWFsLnggKiB0aGlzLnRpbGVTaXplLFxuICAgICAgICAgICAgICAgICAgICB0aWxlVG9SZXZlYWwueSAqIHRoaXMudGlsZVNpemUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVNpemVcblxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc1RpbGVzVG9SZXZlYWwpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyLmZpbGwoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVzZXQgKCkge1xuICAgICAgICB0aGlzLnJlbmRlci5jbGVhcigpO1xuICAgICAgICB0aGlzLl9yZXZlYWxlZFRpbGVBcnJheSA9IHt9O1xuICAgIH1cbn0pO1xuXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ssr/fbo/component/FBONodeTargetComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ebf13MKw2pNWZFXXVkQ7L4A', 'FBONodeTargetComponent');
// scripts/ssr/fbo/component/FBONodeTargetComponent.js

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
 * 指定[目标纹理] 的FBO 专用类
 * @class FBONodeTargetComponent
 * @extends FBONodeComponent
 */


ssr.FBO.Component.Target = cc.Class({
  "extends": ssr.FBO.Component.Core,
  editor: CC_EDITOR && {
    menu: 'ssr/FBO/Target',
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
      },
      tooltip: "FBO 目标节点"
    },
    _syncAngle: false,
    syncAngle: {
      get: function get() {
        return this._syncAngle;
      },
      set: function set(val) {
        this._syncAngle = val;
      },
      tooltip: "是否需要动态监测目标旋转角度"
    },
    _syncScale: false,
    syncScale: {
      get: function get() {
        return this._syncScale;
      },
      set: function set(val) {
        this._syncScale = val;
      },
      tooltip: "是否需要动态监测目标缩放大小"
    },
    _syncSize: false,
    syncSize: {
      get: function get() {
        return this._syncSize;
      },
      set: function set(val) {
        this._syncSize = val;
      },
      tooltip: "是否需要动态监测目标大小"
    },
    _syncAnchor: false,
    syncAnchor: {
      get: function get() {
        return this._syncAnchor;
      },
      set: function set(val) {
        this._syncAnchor = val;
      },
      tooltip: "是否需要动态监测目标锚点"
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
    },
    _inflateW: 0,
    inflateW: {
      type: cc.Float,
      get: function get() {
        return this._inflateW;
      },
      set: function set(val) {
        this._inflateW = val;
        this.updateTarget();
      },
      tooltip: "FBO 渲染区域 宽度扩展范围"
    },
    _inflateH: 0,
    inflateH: {
      type: cc.Float,
      get: function get() {
        return this._inflateH;
      },
      set: function set(val) {
        this._inflateH = val;
        this.updateTarget();
      },
      tooltip: "FBO 渲染区域 高度扩展范围"
    }
  },

  /**
   * 重写初始化 RenderTexture 对象，纹理大小为目标对象尺寸
   * @method _initFBORenderTexture
   * @private
   */
  _initFBORenderTexture: function _initFBORenderTexture() {
    this._super();

    if (this.target) {
      this._renderTexture.initWithSize(this.target.width + this.inflateW, this.target.height + this.inflateH, cc.gfx.RB_FMT_S8);
    }
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

    if (this.target) {
      this._fboCamera.orthoSize = (this.target.height + this.inflateH) / 2;
    }
  },

  /**
      * 重写update 生命周期函数，渲染前后更新节点的坐标
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

    if (this.syncAnchor) {
      if (this._targetAnchorXOld != this.target.anchorX) {
        this._targetAnchorXOld = this.target.anchorX;
      }

      if (this._targetAnchorYOld != this.target.anchorY) {
        this._targetAnchorYOld = this.target.anchorY;
      }

      this.node.anchorX = this.target.anchorX = 0.5;
      this.node.anchorY = this.target.anchorY = 0.5;
    }

    if (this.syncSize) {
      if (this._targetWidthOld != this.target.width || this._targetHeightOld != this.target.height) {
        this._targetWidthOld = this.target.width;
        this._targetHeightOld = this.target.height;
        this.node.width = this.target.width + this.inflateW;
        this.node.height = this.target.height + this.inflateH;

        this._updateRenderTextureSize(this.target.width + this.inflateW, this.target.height + this.inflateH);

        if (this._fboCamera) {
          this._fboCamera.targetTexture = this._renderTexture;
          this._fboCamera.orthoSize = (this.target.height + this.inflateH) / 2;
        }
      }
    }

    this.node.position = cc.v3(this.target.position.x - this.offsetX, this.target.position.y - this.offsetY, 1);
    this.target.group = this.group;

    this._super();

    this.target.group = this._targetGroupOld;

    if (this.syncAngle) {
      this.node.angle = this.target.angle = this._targetAngleOld;
    }

    if (this.syncAnchor) {
      this.node.anchorX = this.target.anchorX = this._targetAnchorXOld;
      this.node.anchorY = this.target.anchorY = this._targetAnchorYOld; // if (this.flipY) {
      // 	this.node.anchorY = 1 - this.node.anchorY;
      // }
    }

    if (this.syncScale) {
      this.node.scaleX = this.target.scaleX = this._targetScaleXOld;
      this.node.scaleY = this.target.scaleY = this._targetScaleYOld; // this.node.scaleY *= (this.flipY ? -1 : 1);
    }

    this.node.position = cc.v3(oldPosition.x, oldPosition.y, 1);
  },

  /**
      * _resetTarget 函数，重置目标
      * @method _resetTarget
      */
  _resetTarget: function _resetTarget() {
    this.node.group = "default";
    this.node.width = 100;
    this.node.height = 100;

    if (this._renderTexture) {
      this._renderTexture.initWithSize(this.node.width, this.node.height, cc.gfx.RB_FMT_S8);
    }

    if (this._fboCamera) {
      this._fboCamera.targetTexture = this._renderTexture;
      this._fboCamera.orthoSize = (this.target.height + this.inflateH) / 2;
    }

    if (this._fboSprite) {
      var fboSpriteFrame = new cc.SpriteFrame();
      this._fboSprite.spriteFrame = fboSpriteFrame;
    }
  },

  /**
      * updateTarget 函数，更新当前 FBO 的对象
      * @param {cc.Node} target
      * @method updateTarget
      */
  updateTarget: function updateTarget() {
    if (!this.target) {
      this._resetTarget();

      return;
    }

    this.node.width = this.target.width + this.inflateW;
    this.node.height = this.target.height + this.inflateH;

    if (this._renderTexture) {
      this._renderTexture.initWithSize(this.target.width + this.inflateW, this.target.height + this.inflateH, cc.gfx.RB_FMT_S8);
    }

    if (this._fboCamera) {
      this._fboCamera.targetTexture = this._renderTexture;
      this._fboCamera.orthoSize = (this.target.height + this.inflateH) / 2;
    } //


    this._targetGroupOld = this.target.group;
    this._targetAngleOld = 0;
    this._targetScaleXOld = 0;
    this._targetScaleYOld = 0;
    this._targetWidthOld = 0;
    this._targetHeightOld = 0;
    this._targetAnchorXOld = 0;
    this._targetAnchorYOld = 0;
  },

  /**
      * __preload 函数，编辑器用，锁定部分属性
      * @method __preload
      */
  __preload: function __preload() {
    if (CC_EDITOR) {
      var Flags = cc.Object.Flags; // this._objFlags |= (Flags.IsAnchorLocked | Flags.IsSizeLocked | Flags.IsRotationLocked | Flags.IsScaleLocked);
    }
  },
  onLoad: function onLoad() {
    this._super(); //


    this.node.group = "default";
    this.updateTarget();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3NyXFxmYm9cXGNvbXBvbmVudFxcRkJPTm9kZVRhcmdldENvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJzc3IiLCJyZXF1aXJlIiwiRkJPIiwiQ29tcG9uZW50IiwiVGFyZ2V0IiwiY2MiLCJDbGFzcyIsIkNvcmUiLCJlZGl0b3IiLCJDQ19FRElUT1IiLCJtZW51IiwiZXhlY3V0ZUluRWRpdE1vZGUiLCJwcm9wZXJ0aWVzIiwiX3RhcmdldCIsInRhcmdldCIsInR5cGUiLCJOb2RlIiwiZ2V0Iiwic2V0IiwidmFsIiwidXBkYXRlVGFyZ2V0IiwidG9vbHRpcCIsIl9zeW5jQW5nbGUiLCJzeW5jQW5nbGUiLCJfc3luY1NjYWxlIiwic3luY1NjYWxlIiwiX3N5bmNTaXplIiwic3luY1NpemUiLCJfc3luY0FuY2hvciIsInN5bmNBbmNob3IiLCJfb2Zmc2V0WCIsIm9mZnNldFgiLCJGbG9hdCIsIl9vZmZzZXRZIiwib2Zmc2V0WSIsIl9pbmZsYXRlVyIsImluZmxhdGVXIiwiX2luZmxhdGVIIiwiaW5mbGF0ZUgiLCJfaW5pdEZCT1JlbmRlclRleHR1cmUiLCJfc3VwZXIiLCJfcmVuZGVyVGV4dHVyZSIsImluaXRXaXRoU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiZ2Z4IiwiUkJfRk1UX1M4IiwiX2luaXRGQk9DYW1lcmEiLCJfZmJvQ2FtZXJhIiwiY3VsbGluZ01hc2siLCJub2RlIiwiZ3JvdXBJbmRleCIsImFsaWduV2l0aFNjcmVlbiIsIm9ydGhvU2l6ZSIsInVwZGF0ZUZCTyIsIm9sZFBvc2l0aW9uIiwicG9zaXRpb24iLCJfdGFyZ2V0QW5nbGVPbGQiLCJhbmdsZSIsIl90YXJnZXRTY2FsZVhPbGQiLCJzY2FsZVgiLCJfdGFyZ2V0U2NhbGVZT2xkIiwic2NhbGVZIiwiX3RhcmdldEFuY2hvclhPbGQiLCJhbmNob3JYIiwiX3RhcmdldEFuY2hvcllPbGQiLCJhbmNob3JZIiwiX3RhcmdldFdpZHRoT2xkIiwiX3RhcmdldEhlaWdodE9sZCIsIl91cGRhdGVSZW5kZXJUZXh0dXJlU2l6ZSIsInRhcmdldFRleHR1cmUiLCJ2MyIsIngiLCJ5IiwiZ3JvdXAiLCJfdGFyZ2V0R3JvdXBPbGQiLCJfcmVzZXRUYXJnZXQiLCJfZmJvU3ByaXRlIiwiZmJvU3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsInNwcml0ZUZyYW1lIiwiX19wcmVsb2FkIiwiRmxhZ3MiLCJPYmplY3QiLCJvbkxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyxHQUFHQyxPQUFPLENBQUMsMkJBQUQsQ0FBbkI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQUQsR0FBRyxDQUFDRSxHQUFKLENBQVFDLFNBQVIsQ0FBa0JDLE1BQWxCLEdBQTJCQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNoQyxhQUFTTixHQUFHLENBQUNFLEdBQUosQ0FBUUMsU0FBUixDQUFrQkksSUFESztBQUVoQ0MsRUFBQUEsTUFBTSxFQUFFQyxTQUFTLElBQUk7QUFDakJDLElBQUFBLElBQUksRUFBRSxnQkFEVztBQUVqQkMsSUFBQUEsaUJBQWlCLEVBQUU7QUFGRixHQUZXO0FBTWhDQyxFQUFBQSxVQUFVLEVBQUU7QUFDWEMsSUFBQUEsT0FBTyxFQUFFLElBREU7QUFFZEMsSUFBQUEsTUFBTSxFQUFFO0FBQ0pDLE1BQUFBLElBQUksRUFBRVYsRUFBRSxDQUFDVyxJQURMO0FBRUpDLE1BQUFBLEdBRkksaUJBRUc7QUFDSCxlQUFPLEtBQUtKLE9BQVo7QUFDSCxPQUpHO0FBS0pLLE1BQUFBLEdBTEksZUFLQ0MsR0FMRCxFQUtNO0FBQ04sYUFBS04sT0FBTCxHQUFlTSxHQUFmO0FBQ0EsYUFBS0MsWUFBTDtBQUNILE9BUkc7QUFTSkMs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QUt0RCxZQUFMO0FBQ0E7QUF4UWtDLENBQVQsQ0FBM0IiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMjAgU3VwZXJTdVJhY2Nvb25cbiBcbiBTaXRlOiBodHRwOi8vd3d3LnN1cGVyc3VyYWNjb29uLWNvY29zMmQuY29tXG4gTWFpbDogc3VwZXJzdXJhY2Nvb25AZ21haWwuY29tXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuIFxuY29uc3Qgc3NyID0gcmVxdWlyZShcIi4uL25hbWVzcGFjZS9GQk9OYW1lc3BhY2VcIik7XG5cbi8qKlxuICog5oyH5a6aW+ebruagh+e6ueeQhl0g55qERkJPIOS4k+eUqOexu1xuICogQGNsYXNzIEZCT05vZGVUYXJnZXRDb21wb25lbnRcbiAqIEBleHRlbmRzIEZCT05vZGVDb21wb25lbnRcbiAqL1xuc3NyLkZCTy5Db21wb25lbnQuVGFyZ2V0ID0gY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IHNzci5GQk8uQ29tcG9uZW50LkNvcmUsXG4gICAgZWRpdG9yOiBDQ19FRElUT1IgJiYge1xuICAgICAgICBtZW51OiAnc3NyL0ZCTy9UYXJnZXQnLFxuICAgICAgICBleGVjdXRlSW5FZGl0TW9kZTogdHJ1ZSxcbiAgICB9LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICBcdF90YXJnZXQ6IG51bGwsXG5cdFx0dGFyZ2V0OiB7XG5cdFx0ICAgIHR5cGU6IGNjLk5vZGUsXG5cdFx0ICAgIGdldCAoKSB7XG5cdFx0ICAgICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0O1xuXHRcdCAgICB9LFxuXHRcdCAgICBzZXQgKHZhbCkge1xuXHRcdCAgICAgICAgdGhpcy5fdGFyZ2V0ID0gdmFsO1xuXHRcdCAgICAgICAgdGhpcy51cGRhdGVUYXJnZXQoKTtcblx0XHQgICAgfSxcblx0XHQgICAgdG9vbHRpcDogXCJGQk8g55uu5qCH6IqC54K5XCJcblx0XHR9LFxuXHRcdF9zeW5jQW5nbGU6IGZhbHNlLFxuXHRcdHN5bmNBbmdsZToge1xuXHRcdFx0Z2V0ICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3N5bmNBbmdsZTtcblx0XHRcdH0sXG5cdFx0XHRzZXQgKHZhbCkge1xuXHRcdFx0XHR0aGlzLl9zeW5jQW5nbGUgPSB2YWw7XG5cdFx0XHR9LFxuXHRcdFx0dG9vbHRpcDogXCLmmK/lkKbpnIDopoHliqjmgIHnm5HmtYvnm67moIfml4vovazop5LluqZcIlxuXHRcdH0sXG5cdFx0X3N5bmNTY2FsZTogZmFsc2UsXG5cdFx0c3luY1NjYWxlOiB7XG5cdFx0XHRnZXQgKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fc3luY1NjYWxlO1xuXHRcdFx0fSxcblx0XHRcdHNldCAodmFsKSB7XG5cdFx0XHRcdHRoaXMuX3N5bmNTY2FsZSA9IHZhbDtcblx0XHRcdH0sXG5cdFx0XHR0b29sdGlwOiBcIuaYr+WQpumcgOimgeWKqOaAgeebkea1i+ebruagh+e8qeaUvuWkp+Wwj1wiXG5cdFx0fSxcblx0XHRfc3luY1NpemU6IGZhbHNlLFxuXHRcdHN5bmNTaXplOiB7XG5cdFx0XHRnZXQgKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fc3luY1NpemU7XG5cdFx0XHR9LFxuXHRcdFx0c2V0ICh2YWwpIHtcblx0XHRcdFx0dGhpcy5fc3luY1NpemUgPSB2YWw7XG5cdFx0XHR9LFxuXHRcdFx0dG9vbHRpcDogXCLmmK/lkKbpnIDopoHliqjmgIHnm5HmtYvnm67moIflpKflsI9cIlxuXHRcdH0sXG5cdFx0X3N5bmNBbmNob3I6IGZhbHNlLFxuXHRcdHN5bmNBbmNob3I6IHtcblx0XHRcdGdldCAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9zeW5jQW5jaG9yO1xuXHRcdFx0fSxcblx0XHRcdHNldCAodmFsKSB7XG5cdFx0XHRcdHRoaXMuX3N5bmNBbmNob3IgPSB2YWw7XG5cdFx0XHR9LFxuXHRcdFx0dG9vbHRpcDogXCLmmK/lkKbpnIDopoHliqjmgIHnm5HmtYvnm67moIfplJrngrlcIlxuXHRcdH0sXG5cdFx0X29mZnNldFg6IDAsXG5cdFx0b2Zmc2V0WDoge1xuXHRcdFx0dHlwZTogY2MuRmxvYXQsXG5cdFx0XHRnZXQgKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fb2Zmc2V0WDtcblx0XHRcdH0sXG5cdFx0XHRzZXQgKHZhbCkge1xuXHRcdFx0XHR0aGlzLl9vZmZzZXRYID0gdmFsO1xuXHRcdCAgICAgICAgdGhpcy51cGRhdGVUYXJnZXQoKTtcblx0XHRcdH0sXG5cdFx0XHR0b29sdGlwOiBcIkZCTyDmuLLmn5PljLrln58gWOi9tOaWueWQkeWBj+enu+mHj1wiXG5cdFx0fSxcblx0XHRfb2Zmc2V0WTogMCxcblx0XHRvZmZzZXRZOiB7XG5cdFx0XHR0eXBlOiBjYy5GbG9hdCxcblx0XHRcdGdldCAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9vZmZzZXRZO1xuXHRcdFx0fSxcblx0XHRcdHNldCAodmFsKSB7XG5cdFx0XHRcdHRoaXMuX29mZnNldFkgPSB2YWw7XG5cdFx0ICAgICAgICB0aGlzLnVwZGF0ZVRhcmdldCgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0X2luZmxhdGVXOiAwLFxuXHRcdGluZmxhdGVXOiB7XG5cdFx0XHR0eXBlOiBjYy5GbG9hdCxcblx0XHRcdGdldCAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9pbmZsYXRlVztcblx0XHRcdH0sXG5cdFx0XHRzZXQgKHZhbCkge1xuXHRcdFx0XHR0aGlzLl9pbmZsYXRlVyA9IHZhbDtcblx0XHQgICAgICAgIHRoaXMudXBkYXRlVGFyZ2V0KCk7XG5cdFx0XHR9LFxuXHRcdFx0dG9vbHRpcDogXCJGQk8g5riy5p+T5Yy65Z+fIOWuveW6puaJqeWxleiMg+WbtFwiXG5cdFx0fSxcblx0XHRfaW5mbGF0ZUg6IDAsXG5cdFx0aW5mbGF0ZUg6IHtcblx0XHRcdHR5cGU6IGNjLkZsb2F0LFxuXHRcdFx0Z2V0ICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2luZmxhdGVIO1xuXHRcdFx0fSxcblx0XHRcdHNldCAodmFsKSB7XG5cdFx0XHRcdHRoaXMuX2luZmxhdGVIID0gdmFsO1xuXHRcdCAgICAgICAgdGhpcy51cGRhdGVUYXJnZXQoKTtcblx0XHRcdH0sXG5cdFx0XHR0b29sdGlwOiBcIkZCTyDmuLLmn5PljLrln58g6auY5bqm5omp5bGV6IyD5Zu0XCJcblx0XHR9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDph43lhpnliJ3lp4vljJYgUmVuZGVyVGV4dHVyZSDlr7nosaHvvIznurnnkIblpKflsI/kuLrnm67moIflr7nosaHlsLrlr7hcbiAgICAgKiBAbWV0aG9kIF9pbml0RkJPUmVuZGVyVGV4dHVyZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2luaXRGQk9SZW5kZXJUZXh0dXJlICgpIHtcblx0XHR0aGlzLl9zdXBlcigpO1xuXHRcdGlmICh0aGlzLnRhcmdldCkge1xuXHRcdFx0dGhpcy5fcmVuZGVyVGV4dHVyZS5pbml0V2l0aFNpemUodGhpcy50YXJnZXQud2lkdGggKyB0aGlzLmluZmxhdGVXLCB0aGlzLnRhcmdldC5oZWlnaHQgKyB0aGlzLmluZmxhdGVILCBjYy5nZnguUkJfRk1UX1M4KTtcdFxuXHRcdH1cblx0fSxcblx0LyoqXG4gICAgICog6YeN5YaZ5Yid5aeL5YyWIEZCTyDkuJPnlKggY2MuQ2FtZXJhICwg6K6+572uIGN1bGxpbmdNYXNr77yM5byA5ZCv6Ieq5a6a5LmJ5aSn5bCP5qih5byPXG4gICAgICogQG1ldGhvZCBfaW5pdEZCT0NhbWVyYVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG5cdF9pbml0RkJPQ2FtZXJhICgpIHtcblx0XHR0aGlzLl9zdXBlcigpO1xuXHRcdHRoaXMuX2Zib0NhbWVyYS5jdWxsaW5nTWFzayA9IDB4MDAwMDAwMDA7XG4gICAgICAgIHRoaXMuX2Zib0NhbWVyYS5jdWxsaW5nTWFzayB8PSB+KDEgPDwgdGhpcy5ub2RlLmdyb3VwSW5kZXgpO1xuXHRcdHRoaXMuX2Zib0NhbWVyYS5hbGlnbldpdGhTY3JlZW4gPSBmYWxzZTtcblx0XHRpZiAodGhpcy50YXJnZXQpIHtcblx0XHRcdHRoaXMuX2Zib0NhbWVyYS5vcnRob1NpemUgPSAodGhpcy50YXJnZXQuaGVpZ2h0ICsgdGhpcy5pbmZsYXRlSCkgLyAyO1xuXHRcdH1cblx0fSxcblx0LyoqXG4gICAgICog6YeN5YaZdXBkYXRlIOeUn+WRveWRqOacn+WHveaVsO+8jOa4suafk+WJjeWQjuabtOaWsOiKgueCueeahOWdkOagh1xuICAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgICovXG5cdHVwZGF0ZUZCTyAoKSB7XG5cdFx0aWYgKCF0aGlzLnRhcmdldCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRsZXQgb2xkUG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb247XG5cdFx0aWYgKHRoaXMuc3luY0FuZ2xlICYmIHRoaXMuX3RhcmdldEFuZ2xlT2xkICE9IHRoaXMudGFyZ2V0LmFuZ2xlKSB7XG5cdFx0XHR0aGlzLl90YXJnZXRBbmdsZU9sZCA9IHRoaXMudGFyZ2V0LmFuZ2xlO1xuXHRcdFx0dGhpcy5ub2RlLmFuZ2xlID0gdGhpcy50YXJnZXQuYW5nbGUgPSAwO1xuXHRcdH1cblx0XHRpZiAodGhpcy5zeW5jU2NhbGUpIHtcblx0XHRcdGlmICh0aGlzLl90YXJnZXRTY2FsZVhPbGQgIT0gdGhpcy50YXJnZXQuc2NhbGVYKSB7XG5cdFx0XHRcdHRoaXMuX3RhcmdldFNjYWxlWE9sZCA9IHRoaXMudGFyZ2V0LnNjYWxlWDtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLl90YXJnZXRTY2FsZVlPbGQgIT0gdGhpcy50YXJnZXQuc2NhbGVZKSB7XG5cdFx0XHRcdHRoaXMuX3RhcmdldFNjYWxlWU9sZCA9IHRoaXMudGFyZ2V0LnNjYWxlWTtcblx0XHRcdH1cblx0XHRcdHRoaXMubm9kZS5zY2FsZVggPSB0aGlzLnRhcmdldC5zY2FsZVggPSAxO1xuXHRcdFx0dGhpcy5ub2RlLnNjYWxlWSA9IHRoaXMudGFyZ2V0LnNjYWxlWSA9IDE7XG5cdFx0fVxuXHRcdGlmICh0aGlzLnN5bmNBbmNob3IpIHtcblx0XHRcdGlmICh0aGlzLl90YXJnZXRBbmNob3JYT2xkICE9IHRoaXMudGFyZ2V0LmFuY2hvclgpIHtcblx0XHRcdFx0dGhpcy5fdGFyZ2V0QW5jaG9yWE9sZCA9IHRoaXMudGFyZ2V0LmFuY2hvclg7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5fdGFyZ2V0QW5jaG9yWU9sZCAhPSB0aGlzLnRhcmdldC5hbmNob3JZKSB7XG5cdFx0XHRcdHRoaXMuX3RhcmdldEFuY2hvcllPbGQgPSB0aGlzLnRhcmdldC5hbmNob3JZO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5ub2RlLmFuY2hvclggPSB0aGlzLnRhcmdldC5hbmNob3JYID0gMC41O1xuXHRcdFx0dGhpcy5ub2RlLmFuY2hvclkgPSB0aGlzLnRhcmdldC5hbmNob3JZID0gMC41O1xuXHRcdH1cblx0XHRpZiAodGhpcy5zeW5jU2l6ZSkge1xuXHRcdFx0aWYgKHRoaXMuX3RhcmdldFdpZHRoT2xkICE9IHRoaXMudGFyZ2V0LndpZHRoIHx8XG5cdFx0XHRcdHRoaXMuX3RhcmdldEhlaWdodE9sZCAhPSB0aGlzLnRhcmdldC5oZWlnaHQpIHtcblx0XHRcdFx0dGhpcy5fdGFyZ2V0V2lkdGhPbGQgPSB0aGlzLnRhcmdldC53aWR0aDtcblx0XHRcdFx0dGhpcy5fdGFyZ2V0SGVpZ2h0T2xkID0gdGhpcy50YXJnZXQuaGVpZ2h0O1xuXHRcdFx0XHR0aGlzLm5vZGUud2lkdGggPSB0aGlzLnRhcmdldC53aWR0aCArIHRoaXMuaW5mbGF0ZVc7XG5cdFx0ICAgIFx0dGhpcy5ub2RlLmhlaWdodCA9IHRoaXMudGFyZ2V0LmhlaWdodCArIHRoaXMuaW5mbGF0ZUg7XG5cdFx0ICAgIFx0dGhpcy5fdXBkYXRlUmVuZGVyVGV4dHVyZVNpemUodGhpcy50YXJnZXQud2lkdGggKyB0aGlzLmluZmxhdGVXLCB0aGlzLnRhcmdldC5oZWlnaHQgKyB0aGlzLmluZmxhdGVIKTtcblx0XHQgICAgXHRpZiAodGhpcy5fZmJvQ2FtZXJhKSB7XG5cdFx0ICAgIFx0XHR0aGlzLl9mYm9DYW1lcmEudGFyZ2V0VGV4dHVyZSA9IHRoaXMuX3JlbmRlclRleHR1cmU7XG5cdFx0ICAgICAgICBcdHRoaXMuX2Zib0NhbWVyYS5vcnRob1NpemUgPSAodGhpcy50YXJnZXQuaGVpZ2h0ICsgdGhpcy5pbmZsYXRlSCkgLyAyO1xuXHRcdCAgICBcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjModGhpcy50YXJnZXQucG9zaXRpb24ueCAtIHRoaXMub2Zmc2V0WCwgdGhpcy50YXJnZXQucG9zaXRpb24ueSAtIHRoaXMub2Zmc2V0WSwgMSk7XG5cdFx0dGhpcy50YXJnZXQuZ3JvdXAgPSB0aGlzLmdyb3VwO1xuXHRcdHRoaXMuX3N1cGVyKCk7XG5cdFx0dGhpcy50YXJnZXQuZ3JvdXAgPSB0aGlzLl90YXJnZXRHcm91cE9sZDtcblx0XHRpZiAodGhpcy5zeW5jQW5nbGUpIHtcblx0XHRcdHRoaXMubm9kZS5hbmdsZSA9IHRoaXMudGFyZ2V0LmFuZ2xlID0gdGhpcy5fdGFyZ2V0QW5nbGVPbGQ7XG5cdFx0fVxuXHRcdGlmICh0aGlzLnN5bmNBbmNob3IpIHtcblx0XHRcdHRoaXMubm9kZS5hbmNob3JYID0gdGhpcy50YXJnZXQuYW5jaG9yWCA9IHRoaXMuX3RhcmdldEFuY2hvclhPbGQ7XG5cdFx0XHR0aGlzLm5vZGUuYW5jaG9yWSA9IHRoaXMudGFyZ2V0LmFuY2hvclkgPSB0aGlzLl90YXJnZXRBbmNob3JZT2xkO1xuXHRcdFx0Ly8gaWYgKHRoaXMuZmxpcFkpIHtcblx0XHRcdC8vIFx0dGhpcy5ub2RlLmFuY2hvclkgPSAxIC0gdGhpcy5ub2RlLmFuY2hvclk7XG5cdFx0XHQvLyB9XG5cdFx0fVxuXHRcdGlmICh0aGlzLnN5bmNTY2FsZSkge1xuXHRcdFx0dGhpcy5ub2RlLnNjYWxlWCA9IHRoaXMudGFyZ2V0LnNjYWxlWCA9IHRoaXMuX3RhcmdldFNjYWxlWE9sZDtcblx0XHRcdHRoaXMubm9kZS5zY2FsZVkgPSB0aGlzLnRhcmdldC5zY2FsZVkgPSB0aGlzLl90YXJnZXRTY2FsZVlPbGQ7XHRcblx0XHRcdC8vIHRoaXMubm9kZS5zY2FsZVkgKj0gKHRoaXMuZmxpcFkgPyAtMSA6IDEpO1xuXHRcdH1cblx0XHR0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52MyhvbGRQb3NpdGlvbi54LCBvbGRQb3NpdGlvbi55LCAxKTtcblx0fSxcblx0LyoqXG4gICAgICogX3Jlc2V0VGFyZ2V0IOWHveaVsO+8jOmHjee9ruebruagh1xuICAgICAqIEBtZXRob2QgX3Jlc2V0VGFyZ2V0XG4gICAgICovXG5cdF9yZXNldFRhcmdldCAoKSB7XG5cdFx0dGhpcy5ub2RlLmdyb3VwID0gXCJkZWZhdWx0XCI7XG5cdFx0dGhpcy5ub2RlLndpZHRoID0gMTAwO1xuICAgIFx0dGhpcy5ub2RlLmhlaWdodCA9IDEwMDtcbiAgICBcdGlmICh0aGlzLl9yZW5kZXJUZXh0dXJlKSB7XG4gICAgICAgIFx0dGhpcy5fcmVuZGVyVGV4dHVyZS5pbml0V2l0aFNpemUodGhpcy5ub2RlLndpZHRoLCB0aGlzLm5vZGUuaGVpZ2h0LCBjYy5nZnguUkJfRk1UX1M4KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZmJvQ2FtZXJhKSB7XG4gICAgICAgIFx0dGhpcy5fZmJvQ2FtZXJhLnRhcmdldFRleHR1cmUgPSB0aGlzLl9yZW5kZXJUZXh0dXJlO1xuICAgICAgICBcdHRoaXMuX2Zib0NhbWVyYS5vcnRob1NpemUgPSAodGhpcy50YXJnZXQuaGVpZ2h0ICsgdGhpcy5pbmZsYXRlSCkgLyAyO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9mYm9TcHJpdGUpIHtcbiAgICAgICAgXHR2YXIgZmJvU3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUoKTtcbiAgICAgICAgXHR0aGlzLl9mYm9TcHJpdGUuc3ByaXRlRnJhbWUgPSBmYm9TcHJpdGVGcmFtZTtcbiAgICAgICAgfVxuXHR9LFxuXHQvKipcbiAgICAgKiB1cGRhdGVUYXJnZXQg5Ye95pWw77yM5pu05paw5b2T5YmNIEZCTyDnmoTlr7nosaFcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IHRhcmdldFxuICAgICAqIEBtZXRob2QgdXBkYXRlVGFyZ2V0XG4gICAgICovXG5cdHVwZGF0ZVRhcmdldCAoKSB7XG5cdFx0aWYgKCF0aGlzLnRhcmdldCkge1xuXHRcdFx0dGhpcy5fcmVzZXRUYXJnZXQoKTtcbiAgICAgICAgXHRyZXR1cm47XHRcblx0XHR9XG4gICAgICAgIHRoaXMubm9kZS53aWR0aCA9IHRoaXMudGFyZ2V0LndpZHRoICsgdGhpcy5pbmZsYXRlVztcbiAgICBcdHRoaXMubm9kZS5oZWlnaHQgPSB0aGlzLnRhcmdldC5oZWlnaHQgKyB0aGlzLmluZmxhdGVIO1xuICAgICAgICBpZiAodGhpcy5fcmVuZGVyVGV4dHVyZSkge1xuICAgICAgICBcdHRoaXMuX3JlbmRlclRleHR1cmUuaW5pdFdpdGhTaXplKHRoaXMudGFyZ2V0LndpZHRoICsgdGhpcy5pbmZsYXRlVywgdGhpcy50YXJnZXQuaGVpZ2h0ICsgdGhpcy5pbmZsYXRlSCwgY2MuZ2Z4LlJCX0ZNVF9TOCk7XHRcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZmJvQ2FtZXJhKSB7XG4gICAgICAgIFx0dGhpcy5fZmJvQ2FtZXJhLnRhcmdldFRleHR1cmUgPSB0aGlzLl9yZW5kZXJUZXh0dXJlO1xuICAgICAgICBcdHRoaXMuX2Zib0NhbWVyYS5vcnRob1NpemUgPSAodGhpcy50YXJnZXQuaGVpZ2h0ICsgdGhpcy5pbmZsYXRlSCkgLyAyO1xuICAgICAgICB9XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuX3RhcmdldEdyb3VwT2xkID0gdGhpcy50YXJnZXQuZ3JvdXA7XG4gICAgXHR0aGlzLl90YXJnZXRBbmdsZU9sZCA9IDA7XG5cdFx0dGhpcy5fdGFyZ2V0U2NhbGVYT2xkID0gMDtcblx0XHR0aGlzLl90YXJnZXRTY2FsZVlPbGQgPSAwO1xuXHRcdHRoaXMuX3RhcmdldFdpZHRoT2xkID0gMDtcblx0XHR0aGlzLl90YXJnZXRIZWlnaHRPbGQgPSAwO1xuXHRcdHRoaXMuX3RhcmdldEFuY2hvclhPbGQgPSAwO1xuXHRcdHRoaXMuX3RhcmdldEFuY2hvcllPbGQgPSAwO1xuICAgIH0sXG5cdC8qKlxuICAgICAqIF9fcHJlbG9hZCDlh73mlbDvvIznvJbovpHlmajnlKjvvIzplIHlrprpg6jliIblsZ7mgKdcbiAgICAgKiBAbWV0aG9kIF9fcHJlbG9hZFxuICAgICAqL1xuXHRfX3ByZWxvYWQgKCkge1xuICAgICAgICBpZiAoQ0NfRURJVE9SKSB7XG4gICAgICAgICAgICB2YXIgRmxhZ3MgPSBjYy5PYmplY3QuRmxhZ3M7XG4gICAgICAgICAgICAvLyB0aGlzLl9vYmpGbGFncyB8PSAoRmxhZ3MuSXNBbmNob3JMb2NrZWQgfCBGbGFncy5Jc1NpemVMb2NrZWQgfCBGbGFncy5Jc1JvdGF0aW9uTG9ja2VkIHwgRmxhZ3MuSXNTY2FsZUxvY2tlZCk7XG5cdFx0fVxuICAgIH0sXG5cdG9uTG9hZCAoKSB7XG5cdFx0dGhpcy5fc3VwZXIoKTtcblx0XHQvL1xuXHRcdHRoaXMubm9kZS5ncm91cCA9IFwiZGVmYXVsdFwiO1xuXHRcdHRoaXMudXBkYXRlVGFyZ2V0KCk7XG5cdH1cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc3NyXFxmYm9cXGNvbXBvbmVudFxcRkJPTm9kZUdob3N0Q29tcG9uZW50LmpzIl0sIm5hbWVzIjpbInNzciIsInJlcXVpcmUiLCJGQk8iLCJDb21wb25lbnQiLCJHaG9zdCIsImNjIiwiQ2xhc3MiLCJlZGl0b3IiLCJDQ19FRElUT1IiLCJtZW51IiwiZXhlY3V0ZUluRWRpdE1vZGUiLCJwcm9wZXJ0aWVzIiwiX3RhcmdldCIsInRhcmdldCIsInR5cGUiLCJOb2RlIiwiZ2V0Iiwic2V0IiwidmFsIiwidXBkYXRlVGFyZ2V0Iiwibm9kZSIsIndpZHRoIiwiaGVpZ2h0IiwidG9vbHRpcCIsIl9vZmZzZXRYIiwib2Zmc2V0WCIsIkZsb2F0IiwiX29mZnNldFkiLCJvZmZzZXRZIiwib25FbmFibGUiLCJfcmVnaXN0ZXJOb2RlRXZlbnQiLCJvbiIsIl91cGRhdGVTaXplIiwiX3VucmVnaXN0ZXJOb2RlRXZlbnQiLCJvZmYiLCJfdXBkYXRlUmVuZGVyVGV4dHVyZVNpemUiLCJfZmJvQ2FtZXJhIiwidGFyZ2V0VGV4dHVyZSIsIl9yZW5kZXJUZXh0dXJlIiwib3J0aG9TaXplIiwiX3RhcmdldEdyb3VwT2xkIiwiZ3JvdXAiLCJwb3NpdGlvbiIsInYzIiwiX2luaXRGQk9SZW5kZXJUZXh0dXJlIiwiX3N1cGVyIiwiaW5pdFdpdGhTaXplIiwiZ2Z4IiwiUkJfRk1UX1M4IiwiX2luaXRGQk9DYW1lcmEiLCJjdWxsaW5nTWFzayIsImdyb3VwSW5kZXgiLCJhbGlnbldpdGhTY3JlZW4iLCJ1cGRhdGVGQk8iLCJzY2FsZVgiLCJDYW1lcmEiLCJtYWluIiwiX19wcmVsb2FkIiwiRmxhZ3MiLCJPYmplY3QiLCJfb2JqRmxhZ3MiLCJJc1NjYWxlTG9ja2VkIiwiSXNBbmNob3JMb2NrZWQiLCJJc1Bvc2l0aW9uTG9ja2VkIiwib25Mb2FkIiwib25EaXNhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEdBQUcsR0FBR0MsT0FBTyxDQUFDLDJCQUFELENBQW5CO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQUQsR0FBRyxDQUFDRSxHQUFKLENBQVFDLFNBQVIsQ0FBa0JDLEtBQWxCLEdBQTBCQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUMvQixhQUFTTCxPQUFPLENBQUMsdUJBQUQsQ0FEZTtBQUUvQk0sRUFBQUEsTUFBTSxFQUFFQyxTQUFTLElBQUk7QUFDakJDLElBQUFBLElBQUksRUFBRSxlQURXO0FBRWpCQyxJQUFBQSxpQkFBaUIsRUFBRTtBQUZGLEdBRlU7QUFNL0JDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxPQUFPLEVBQUUsSUFERDtBQUVSQyxJQUFBQSxNQUFNLEVBQUU7QUFDSkMsTUFBQUEsSUFBSSxFQUFFVCxFQUFFLENBQUNVLElBREw7QUFFSkMsTUFBQUEsR0FGSSxpQkFFRztBQUNILGVBQU8sS0FBS0osT0FBWjtBQUNILE9BSkc7QUFLSkssTUFBQUEsR0FMSSxlQUtDQyxHQUxELEVBS007QUFDTixhQUFLTixPQUFMLEdBQWVNLEdBQWY7QUFDQSxhQUFLQyxZQUFMO0FBQ0EsYUFBS0MsSUFBTCxDQUFVQyxLQUFWLEdBQWtCLEtBQUtULE9BQUwsQ0FBYVMsS0FBL0I7QUFDQSxhQUFLRCxJQUFMLENBQVVFLE1BQVYsR0FBbUIsS0FBS1YsT0FBTCxDQUFhVSxNQUFoQztBQUNILE9BVkc7QUFXSkMsTUFBQUEsT0FBTyxFQUFFO0FBWEwsS0FGQTtBQWVSQyxJQUFBQSxRQUFRLEVBQUUsQ0FmRjtBQWdCUkMsSUFBQUEsT0FBTyxFQUFFO0FBQ0xYLE1BQUFBLElBQUksRUFBRVQsRUFBRSxDQUFDcUIsS0FESjtBQUVMVixNQUFBQSxHQUZLLGlCQUVFO0FBQ0gsZUFBTyxLQUFLUSxRQUFaO0FBQ0gsT0FKSTtBQUtMUCxNQUFBQSxHQUxLLGVBS0FDLEdBTEEsRUFLSztBQUNOLGFBQUtNLFFBQUwsR0FBZ0JOLEdBQWhCO0FBQ0EsYUFBS0MsWUFBTDtBQUNILE9BUkk7QUFTTEksTUFBQUEsT0FBTyxFQUFFO0FBVEosS0FoQkQ7QUEyQlJJLElBQUFBLFFBQVEsRUFBRSxDQTNCRjtBQTRCUkMsSUFBQUEsT0FBTyxFQUFFO0FBQ0xkLE1BQUFBLElBQUksRUFBRVQsRUFBRSxDQUFDcUIsS0FESjtBQUVMVixNQUFBQSxHQUZLLGlCQUVFO0FBQ0gsZUFBTyxLQUFLVyxRQUFaO0FBQ0gsT0FKSTtBQUtMVixNQUFBQSxHQUxLLGVBS0FDLEdBTEEsRUFLSztBQUNOLGFBQUtTLFFBQUwsR0FBZ0JULEdBQWhCO0FBQ0EsYUFBS0MsWUFBTDtBQUNIO0FBUkk7QUE1QkQsR0FObUI7QUE2Qy9CVSxFQUFBQSxRQTdDK0Isc0JBNkNuQjtBQUNSLFNBQUtDLGtCQUFMO0FBQ0gsR0EvQzhCO0FBZ0QvQkEsRUFBQUEsa0JBaEQrQixnQ0FnRFQ7QUFDbEIsU0FBS1YsSUFBTCxDQUFVVyxFQUFWLENBQWEsY0FBYixFQUE2QixLQUFLQyxXQUFsQyxFQUErQyxJQUEvQztBQUNILEdBbEQ4QjtBQW9EL0JDLEVBQUFBLG9CQXBEK0Isa0NBb0RQO0FBQ3BCLFNBQUtiLElBQUwsQ0FBVWMsR0FBVixDQUFjLGNBQWQsRUFBOEIsS0FBS0YsV0FBbkMsRUFBZ0QsSUFBaEQ7QUFDSCxHQXREOEI7QUF1RC9CQSxFQUFBQSxXQXZEK0IseUJBdURoQjtBQUNYLFNBQUtHLHdCQUFMLENBQThCLEtBQUtmLElBQUwsQ0FBVUMsS0FBeEMsRUFBK0MsS0FBS0QsSUFBTCxDQUFVRSxNQUF6RDs7QUFDQSxRQUFJLEtBQUtjLFVBQVQsRUFBcUI7QUFDakIsV0FBS0EsVUFBTCxDQUFnQkMsYUFBaEIsR0FBZ0MsS0FBS0MsY0FBckM7QUFDQSxXQUFLRixVQUFMLENBQWdCRyxTQUFoQixHQUE0QixLQUFLbkIsSUFBTCxDQUFVRSxNQUFWLEdBQW1CLENBQS9DO0FBQ0g7QUFDSixHQTdEOEI7QUE4RC9CSCxFQUFBQSxZQTlEK0IsMEJBOERmO0FBQ1osUUFBSSxDQUFDLEtBQUtOLE1BQVYsRUFBa0I7QUFDZDtBQUNIOztBQUNELFNBQUsyQixlQUFMLEdBQXVCLEtBQUszQixNQUFMLENBQVk0QixLQUFuQztBQUNBLFNBQUs1QixNQUFMLENBQVk0QixLQUFaLEdBQW9CLEtBQUtBLEtBQXpCO0FBQ0EsU0FBS3JCLElBQUwsQ0FBVXNCLFFBQVYsR0FBcUJyQyxFQUFFLENBQUNzQyxFQUFILENBQU0sS0FBS2xCLE9BQVgsRUFBb0IsS0FBS0csT0FBekIsRUFBa0MsQ0FBbEMsQ0FBckI7QUFDSCxHQXJFOEI7O0FBc0UvQjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0lnQixFQUFBQSxxQkEzRStCLG1DQTJFTjtBQUNyQixTQUFLQyxNQUFMOztBQUNBLFNBQUtQLGNBQUwsQ0FBb0JRLFlBQXBCLENBQWlDLEtBQUsxQixJQUFMLENBQVVDLEtBQTNDLEVBQWtELEtBQUtELElBQUwsQ0FBVUUsTUFBNUQsRUFBb0VqQixFQUFFLENBQUMwQyxHQUFILENBQU9DLFNBQTNFO0FBQ0gsR0E5RThCOztBQStFL0I7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNJQyxFQUFBQSxjQXBGK0IsNEJBb0ZiO0FBQ2QsU0FBS0osTUFBTDs7QUFDQSxTQUFLVCxVQUFMLENBQWdCYyxXQUFoQixHQUE4QixVQUE5QjtBQUNBLFNBQUtkLFVBQUwsQ0FBZ0JjLFdBQWhCLElBQStCLEVBQUUsS0FBSyxLQUFLOUIsSUFBTCxDQUFVK0IsVUFBakIsQ0FBL0I7QUFFQSxTQUFLZixVQUFMLENBQWdCZ0IsZUFBaEIsR0FBa0MsS0FBbEM7QUFDQSxTQUFLaEIsVUFBTCxDQUFnQkcsU0FBaEIsR0FBNEIsS0FBS25CLElBQUwsQ0FBVUUsTUFBVixHQUFtQixDQUEvQztBQUNILEdBM0Y4Qjs7QUE0Ri9CO0FBQ0o7QUFDQTtBQUNBO0FBQ0krQixFQUFBQSxTQWhHK0IsdUJBZ0dsQjtBQUNULFFBQUksQ0FBQyxLQUFLeEMsTUFBVixFQUFrQjtBQUNkO0FBQ0g7O0FBQ0QsU0FBS08sSUFBTCxDQUFVc0IsUUFBVixHQUFxQnJDLEVBQUUsQ0FBQ3NDLEVBQUgsQ0FBTSxLQUFLbEIsT0FBWCxFQUFvQixLQUFLRyxPQUF6QixFQUFrQyxDQUFsQyxDQUFyQjtBQUNBLFNBQUtRLFVBQUwsQ0FBZ0JHLFNBQWhCLEdBQTRCLEtBQUtuQixJQUFMLENBQVVFLE1BQVYsR0FBbUIsQ0FBbkIsR0FBdUIsS0FBS1QsTUFBTCxDQUFZeUMsTUFBL0Q7O0FBQ0EsU0FBS1QsTUFBTDs7QUFDQSxTQUFLVCxVQUFMLENBQWdCRyxTQUFoQixHQUE0QixLQUFLbkIsSUFBTCxDQUFVRSxNQUFWLEdBQW1CLENBQS9DO0FBQ0FqQixJQUFBQSxFQUFFLENBQUNrRCxNQUFILENBQVVDLElBQVYsQ0FBZU4sV0FBZixJQUE4QixFQUFFLEtBQUssS0FBS3JDLE1BQUwsQ0FBWXNDLFVBQW5CLENBQTlCO0FBQ0gsR0F6RzhCO0FBMEcvQk0sRUFBQUEsU0ExRytCLHVCQTBHbEI7QUFDVCxRQUFJakQsU0FBSixFQUFlO0FBQ1gsVUFBSWtELEtBQUssR0FBR3JELEVBQUUsQ0FBQ3NELE1BQUgsQ0FBVUQsS0FBdEI7QUFDQSxXQUFLRSxTQUFMLElBQW1CRixLQUFLLENBQUNHLGFBQU4sR0FBc0JILEtBQUssQ0FBQ0ksY0FBNUIsR0FBNkNKLEtBQUssQ0FBQ0ssZ0JBQXRFO0FBQ0g7QUFDSixHQS9HOEI7QUFnSC9CQyxFQUFBQSxNQWhIK0Isb0JBZ0hyQjtBQUNOLFNBQUtuQixNQUFMLEdBRE0sQ0FFTjs7O0FBQ0EsU0FBS3pCLElBQUwsQ0FBVXFCLEtBQVYsR0FBa0IsT0FBbEI7QUFDQSxTQUFLdEIsWUFBTDtBQUNILEdBckg4QjtBQXNIL0I4QyxFQUFBQSxTQXRIK0IsdUJBc0huQjtBQUNSLFNBQUtoQyxvQkFBTDs7QUFDQSxTQUFLcEIsTUFBTCxDQUFZNEIsS0FBWixHQUFvQixLQUFLRCxlQUF6QjtBQUNBLFNBQUszQixNQUFMLENBQVk0QixLQUFaLEdBQW9CLFNBQXBCO0FBQ0g7QUExSDhCLENBQVQsQ0FBMUIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMjAgU3VwZXJTdVJhY2Nvb25cbiBcbiBTaXRlOiBodHRwOi8vd3d3LnN1cGVyc3VyYWNjb29uLWNvY29zMmQuY29tXG4gTWFpbDogc3VwZXJzdXJhY2Nvb25AZ21haWwuY29tXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuIFRIRSBTT0ZUV0FSRS5cbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5jb25zdCBzc3IgPSByZXF1aXJlKFwiLi4vbmFtZXNwYWNlL0ZCT05hbWVzcGFjZVwiKTtcblxuLyoqXG4gKiDpmYTouqsg55qERkJPIOS4k+eUqOexu1xuICogQGNsYXNzIEZCT05vZGVHaG9zdENvbXBvbmVudFxuICogQGV4dGVuZHMgRkJPTm9kZUNvbXBvbmVudFxuICog5Li755u45py6ICAgICAgZXZlcnl0aGluZyAmPSB+KDEgPDwgZmJvKTtcbiAqIOebruagh+WvueixoSAgICBmYm9cbiAqIGZib+ebuOacuiAgICAgbm90aGluZyB8PSB+KDEgPDwgZmJvKTtcbiAqIGZib+WvueixoSAgICAgZ2hvc3RcbiAqL1xuc3NyLkZCTy5Db21wb25lbnQuR2hvc3QgPSBjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogcmVxdWlyZShcIi4vRkJPTm9kZUNvbXBvbmVudC5qc1wiKSxcbiAgICBlZGl0b3I6IENDX0VESVRPUiAmJiB7XG4gICAgICAgIG1lbnU6ICdzc3IvRkJPL0dob3N0JyxcbiAgICAgICAgZXhlY3V0ZUluRWRpdE1vZGU6IHRydWUsXG4gICAgfSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIF90YXJnZXQ6IG51bGwsXG4gICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQgKHZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RhcmdldCA9IHZhbDtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRhcmdldCgpO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS53aWR0aCA9IHRoaXMuX3RhcmdldC53aWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gdGhpcy5fdGFyZ2V0LmhlaWdodDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwOiBcIkZCTyDnm67moIfoioLngrlcIlxuICAgICAgICB9LFxuICAgICAgICBfb2Zmc2V0WDogMCxcbiAgICAgICAgb2Zmc2V0WDoge1xuICAgICAgICAgICAgdHlwZTogY2MuRmxvYXQsXG4gICAgICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9vZmZzZXRYO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCAodmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb2Zmc2V0WCA9IHZhbDtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRhcmdldCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwiRkJPIOa4suafk+WMuuWfnyBY6L205pa55ZCR5YGP56e76YePXCJcbiAgICAgICAgfSxcbiAgICAgICAgX29mZnNldFk6IDAsXG4gICAgICAgIG9mZnNldFk6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLkZsb2F0LFxuICAgICAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fb2Zmc2V0WTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQgKHZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX29mZnNldFkgPSB2YWw7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUYXJnZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgb25FbmFibGUgKCkge1xuICAgICAgICB0aGlzLl9yZWdpc3Rlck5vZGVFdmVudCgpO1xuICAgIH0sXG4gICAgX3JlZ2lzdGVyTm9kZUV2ZW50ICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdzaXplLWNoYW5nZWQnLCB0aGlzLl91cGRhdGVTaXplLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgX3VucmVnaXN0ZXJOb2RlRXZlbnQgKCkge1xuICAgICAgICB0aGlzLm5vZGUub2ZmKCdzaXplLWNoYW5nZWQnLCB0aGlzLl91cGRhdGVTaXplLCB0aGlzKTtcbiAgICB9LFxuICAgIF91cGRhdGVTaXplICgpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlUmVuZGVyVGV4dHVyZVNpemUodGhpcy5ub2RlLndpZHRoLCB0aGlzLm5vZGUuaGVpZ2h0KTtcbiAgICAgICAgaWYgKHRoaXMuX2Zib0NhbWVyYSkge1xuICAgICAgICAgICAgdGhpcy5fZmJvQ2FtZXJhLnRhcmdldFRleHR1cmUgPSB0aGlzLl9yZW5kZXJUZXh0dXJlO1xuICAgICAgICAgICAgdGhpcy5fZmJvQ2FtZXJhLm9ydGhvU2l6ZSA9IHRoaXMubm9kZS5oZWlnaHQgLyAyO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVUYXJnZXQgKCkge1xuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdGFyZ2V0R3JvdXBPbGQgPSB0aGlzLnRhcmdldC5ncm91cDtcbiAgICAgICAgdGhpcy50YXJnZXQuZ3JvdXAgPSB0aGlzLmdyb3VwO1xuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52Myh0aGlzLm9mZnNldFgsIHRoaXMub2Zmc2V0WSwgMSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDph43lhpnliJ3lp4vljJYgUmVuZGVyVGV4dHVyZSDlr7nosaHvvIznurnnkIblpKflsI/kuLrmjIflrprlsLrlr7jlpKflsI9cbiAgICAgKiBAbWV0aG9kIF9pbml0RkJPUmVuZGVyVGV4dHVyZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2luaXRGQk9SZW5kZXJUZXh0dXJlICgpIHtcbiAgICAgICAgdGhpcy5fc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyVGV4dHVyZS5pbml0V2l0aFNpemUodGhpcy5ub2RlLndpZHRoLCB0aGlzLm5vZGUuaGVpZ2h0LCBjYy5nZnguUkJfRk1UX1M4KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOmHjeWGmeWIneWni+WMliBGQk8g5LiT55SoIGNjLkNhbWVyYSAsIOiuvue9riBjdWxsaW5nTWFza++8jOW8gOWQr+iHquWumuS5ieWkp+Wwj+aooeW8j1xuICAgICAqIEBtZXRob2QgX2luaXRGQk9DYW1lcmFcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9pbml0RkJPQ2FtZXJhICgpIHtcbiAgICAgICAgdGhpcy5fc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fZmJvQ2FtZXJhLmN1bGxpbmdNYXNrID0gMHgwMDAwMDAwMDtcbiAgICAgICAgdGhpcy5fZmJvQ2FtZXJhLmN1bGxpbmdNYXNrIHw9IH4oMSA8PCB0aGlzLm5vZGUuZ3JvdXBJbmRleCk7XG5cbiAgICAgICAgdGhpcy5fZmJvQ2FtZXJhLmFsaWduV2l0aFNjcmVlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9mYm9DYW1lcmEub3J0aG9TaXplID0gdGhpcy5ub2RlLmhlaWdodCAvIDI7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDph43lhpl1cGRhdGUg55Sf5ZG95ZGo5pyf5Ye95pWw77yM5riy5p+T5YmN5ZCO5pu05paw6IqC54K555qE5Z2Q5qCHXG4gICAgICogQG1ldGhvZCB1cGRhdGVcbiAgICAgKi9cbiAgICB1cGRhdGVGQk8gKCkge1xuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjModGhpcy5vZmZzZXRYLCB0aGlzLm9mZnNldFksIDEpO1xuICAgICAgICB0aGlzLl9mYm9DYW1lcmEub3J0aG9TaXplID0gdGhpcy5ub2RlLmhlaWdodCAvIDIgKiB0aGlzLnRhcmdldC5zY2FsZVg7XG4gICAgICAgIHRoaXMuX3N1cGVyKCk7XG4gICAgICAgIHRoaXMuX2Zib0NhbWVyYS5vcnRob1NpemUgPSB0aGlzLm5vZGUuaGVpZ2h0IC8gMjtcbiAgICAgICAgY2MuQ2FtZXJhLm1haW4uY3VsbGluZ01hc2sgJj0gfigxIDw8IHRoaXMudGFyZ2V0Lmdyb3VwSW5kZXgpO1xuICAgIH0sXG4gICAgX19wcmVsb2FkICgpIHtcbiAgICAgICAgaWYgKENDX0VESVRPUikge1xuICAgICAgICAgICAgdmFyIEZsYWdzID0gY2MuT2JqZWN0LkZsYWdzO1xuICAgICAgICAgICAgdGhpcy5fb2JqRmxhZ3MgfD0gKEZsYWdzLklzU2NhbGVMb2NrZWQgfCBGbGFncy5Jc0FuY2hvckxvY2tlZCB8IEZsYWdzLklzUG9zaXRpb25Mb2NrZWQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLl9zdXBlcigpO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLm5vZGUuZ3JvdXAgPSBcImdob3N0XCI7XG4gICAgICAgIHRoaXMudXBkYXRlVGFyZ2V0KCk7XG4gICAgfSxcbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuX3VucmVnaXN0ZXJOb2RlRXZlbnQoKTtcbiAgICAgICAgdGhpcy50YXJnZXQuZ3JvdXAgPSB0aGlzLl90YXJnZXRHcm91cE9sZDtcbiAgICAgICAgdGhpcy50YXJnZXQuZ3JvdXAgPSBcImRlZmF1bHRcIjtcbiAgICB9XG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
 * 指定[区域纹理] 的FBO 专用类
 * @class FBONodeRegionComponent
 * @extends FBONodeComponent
 * 主相机      everything &= ~(1 << fbo);
 * 目标对象    fbo
 * fbo相机     nothing |= ~(1 << fbo);
 * fbo对象     clone
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
      tooltip: "FBO 目标节点"
    },
    _syncAngle: false,
    syncAngle: {
      get: function get() {
        return this._syncAngle;
      },
      set: function set(val) {
        this._syncAngle = val;
      },
      tooltip: "是否需要动态监测目标旋转角度"
    },
    _syncScale: false,
    syncScale: {
      get: function get() {
        return this._syncScale;
      },
      set: function set(val) {
        this._syncScale = val;
      },
      tooltip: "是否需要动态监测目标缩放大小"
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
//------QC-SOURCE-SPLIT------

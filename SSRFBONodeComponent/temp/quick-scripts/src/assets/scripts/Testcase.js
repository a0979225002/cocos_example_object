"use strict";
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
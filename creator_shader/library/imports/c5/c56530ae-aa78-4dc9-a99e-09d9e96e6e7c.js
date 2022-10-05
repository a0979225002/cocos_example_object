"use strict";
cc._RF.push(module, 'c5653CuqnhNyameCdnpbm58', 'MyScene');
// MyScene.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    btnLeft: cc.Button,
    btnRight: cc.Button,
    lblTitle: cc.Label,
    nodeContainer: cc.Node,
    _start: 0,
    prefIdx: {
      set: function set(val) {
        var num = this.prefs.length;

        if (val < 0) {
          val = num - 1;
        }

        if (val >= num) {
          val = 0;
        }

        this.__width = val;
        this.changeIdx();
      },
      get: function get(val) {
        return this.__width;
      },
      type: cc.Integer,
      visible: false
    }
  },
  onLoad: function onLoad() {
    var _this = this;

    this.prefs = ['test-003/test-003_pref', 'UISmoke/UISmoke_pref', '64239.0/64239.0_pref', '64420.2/64420.2_pref', '64645.0/64645.0_pref', '69541.0/69541.0_pref', 'BookShader/BookShader_pref', 'BookShader_noise/BookShader_noise_pref', 'glslsandbox#68726/glslsandbox#68726', 'glslsandbox#68774/glslsandbox#68774', 'glslsandbox#69016/glslsandbox#69016', 'glslsandbox#69022/glslsandbox#69022', 'glslsandbox#69156/glslsandbox#69156', 'glslsandbox#69315/glslsandbox#69315', 'glslsandbox#69342/glslsandbox#69342', 'glslsandbox#69350/glslsandbox#69350', 'ImageEffect/ImageEffect_pref', 'jizuobiao/jizuobiao_pref', 'KnifeLight/KnifeLight_pref', 'Regional_gray/Regional_gray_pref', 'river/river_pref', 'ScrollBox/ScrollBox_pref', 'StreetLight/StreetLight', 'test-002/test-002_pref'];
    this.prefIdx = 0;
    this.btnLeft.node.on('click', function () {
      --_this.prefIdx;
    });
    this.btnRight.node.on('click', function () {
      ++_this.prefIdx;
    });
    this.nodeContainer.on(cc.Node.EventType.TOUCH_START, function (event) {
      _this.setMouse(event.getLocation());
    });
    this.nodeContainer.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      _this.setMouse(event.getLocation());
    });
    this.nodeContainer.on(cc.Node.EventType.TOUCH_ENDED, function (event) {
      _this.setMouse(event.getLocation());
    });
  },
  changeIdx: function changeIdx() {
    var _this2 = this;

    this.removeAllChilds(this.nodeContainer);
    console.log("load " + this.prefs[this.prefIdx]);
    cc.loader.loadRes(this.prefs[this.prefIdx], function (err, res) {
      var node = cc.instantiate(res);

      _this2.nodeContainer.addChild(node);

      node.setAnchorPoint(0.5, 0.5);
      _this2.lblTitle.string = _this2.prefs[_this2.prefIdx]; // node.setPosition();
    });
  },
  removeAllChilds: function removeAllChilds(node) {
    var childs = node.getChildren();
    childs.forEach(function (child) {
      node.removeChild(child);
    });
  },
  setMouse: function setMouse(pos) {
    var mat = this.nodeContainer.children[0].getComponent(cc.Sprite).getMaterial(0);
    mat.effect.setProperty('u_mouse', pos);
  },
  update: function update(dt) {
    this._setShaderTime(dt);
  },
  _setShaderTime: function _setShaderTime(dt) {
    var _this3 = this;

    this._start += 0.01;

    if (this._start > this._max) {
      this._start = 0;
    }

    if (this.nodeContainer.children[0]) {
      var cmts = this.nodeContainer.children[0].getComponentsInChildren(cc.Sprite);
      cmts.forEach(function (cc) {
        cc.getMaterial(0).effect.setProperty('u_time', _this3._start);
      });
    }
  }
});

cc._RF.pop();
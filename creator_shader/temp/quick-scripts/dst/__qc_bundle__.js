
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
require('./assets/MyScene');

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
                    var __filename = 'preview-scripts/assets/MyScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTXlTY2VuZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImJ0bkxlZnQiLCJCdXR0b24iLCJidG5SaWdodCIsImxibFRpdGxlIiwiTGFiZWwiLCJub2RlQ29udGFpbmVyIiwiTm9kZSIsIl9zdGFydCIsInByZWZJZHgiLCJzZXQiLCJ2YWwiLCJudW0iLCJwcmVmcyIsImxlbmd0aCIsIl9fd2lkdGgiLCJjaGFuZ2VJZHgiLCJnZXQiLCJ0eXBlIiwiSW50ZWdlciIsInZpc2libGUiLCJvbkxvYWQiLCJub2RlIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsImV2ZW50Iiwic2V0TW91c2UiLCJnZXRMb2NhdGlvbiIsIlRPVUNIX01PVkUiLCJUT1VDSF9FTkRFRCIsInJlbW92ZUFsbENoaWxkcyIsImNvbnNvbGUiLCJsb2ciLCJsb2FkZXIiLCJsb2FkUmVzIiwiZXJyIiwicmVzIiwiaW5zdGFudGlhdGUiLCJhZGRDaGlsZCIsInNldEFuY2hvclBvaW50Iiwic3RyaW5nIiwiY2hpbGRzIiwiZ2V0Q2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGQiLCJyZW1vdmVDaGlsZCIsInBvcyIsIm1hdCIsImNoaWxkcmVuIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwiZ2V0TWF0ZXJpYWwiLCJlZmZlY3QiLCJzZXRQcm9wZXJ0eSIsInVwZGF0ZSIsImR0IiwiX3NldFNoYWRlclRpbWUiLCJfbWF4IiwiY210cyIsImdldENvbXBvbmVudHNJbkNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsT0FBTyxFQUFFSixFQUFFLENBQUNLLE1BREo7QUFFUkMsSUFBQUEsUUFBUSxFQUFFTixFQUFFLENBQUNLLE1BRkw7QUFHUkUsSUFB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TEMsRUFBQUEsY0F6R0ssMEJBeUdVRCxFQXpHVixFQXlHYztBQUFBOztBQUNmLFNBQUtoRCxNQUFMLElBQWUsSUFBZjs7QUFDQSxRQUFJLEtBQUtBLE1BQUwsR0FBYyxLQUFLa0QsSUFBdkIsRUFBNkI7QUFDekIsV0FBS2xELE1BQUwsR0FBYyxDQUFkO0FBQ0g7O0FBQ0QsUUFBRyxLQUFLRixhQUFMLENBQW1CMkMsUUFBbkIsQ0FBNEIsQ0FBNUIsQ0FBSCxFQUNBO0FBQ0ksVUFBSVUsSUFBSSxHQUFHLEtBQUtyRCxhQUFMLENBQW1CMkMsUUFBbkIsQ0FBNEIsQ0FBNUIsRUFBK0JXLHVCQUEvQixDQUF1RC9ELEVBQUUsQ0FBQ3NELE1BQTFELENBQVg7QUFDQVEsTUFBQUEsSUFBSSxDQUFDZixPQUFMLENBQWEsVUFBQS9DLEVBQUUsRUFBSTtBQUNmQSxRQUFBQSxFQUFFLENBQUN1RCxXQUFILENBQWUsQ0FBZixFQUFrQkMsTUFBbEIsQ0FBeUJDLFdBQXpCLENBQXFDLFFBQXJDLEVBQThDLE1BQUksQ0FBQzlDLE1BQW5EO0FBQ0gsT0FGRDtBQUdIO0FBQ0o7QUFySEksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgYnRuTGVmdDogY2MuQnV0dG9uLFxyXG4gICAgICAgIGJ0blJpZ2h0OiBjYy5CdXR0b24sXHJcbiAgICAgICAgbGJsVGl0bGU6IGNjLkxhYmVsLFxyXG4gICAgICAgIG5vZGVDb250YWluZXI6IGNjLk5vZGUsXHJcbiAgICAgICAgX3N0YXJ0OjAsXHJcbiAgICAgICAgcHJlZklkeDoge1xyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbCkgIHtcclxuICAgICAgICAgICAgICAgIHZhciBudW0gPSB0aGlzLnByZWZzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGlmKCB2YWwgPCAwICl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gbnVtIC0xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoIHZhbCA+PSBudW0gKXtcclxuICAgICAgICAgICAgICAgICAgICB2YWwgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fX3dpZHRoID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VJZHgoKTtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24odmFsKSAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX193aWR0aDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHlwZTogY2MuSW50ZWdlcixcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5wcmVmcyA9IFtcclxuICAgICAgICAgICAgJ3Rlc3QtMDAzL3Rlc3QtMDAzX3ByZWYnLFxyXG4gICAgICAgICAgICAnVUlTbW9rZS9VSVNtb2tlX3ByZWYnLFxyXG4gICAgICAgICAgICAnNjQyMzkuMC82NDIzOS4wX3ByZWYnLFxyXG4gICAgICAgICAgICAnNjQ0MjAuMi82NDQyMC4yX3ByZWYnLFxyXG4gICAgICAgICAgICAnNjQ2NDUuMC82NDY0NS4wX3ByZWYnLFxyXG4gICAgICAgICAgICAnNjk1NDEuMC82OTU0MS4wX3ByZWYnLFxyXG4gICAgICAgICAgICAnQm9va1NoYWRlci9Cb29rU2hhZGVyX3ByZWYnLFxyXG4gICAgICAgICAgICAnQm9va1NoYWRlcl9ub2lzZS9Cb29rU2hhZGVyX25vaXNlX3ByZWYnLFxyXG4gICAgICAgICAgICAnZ2xzbHNhbmRib3gjNjg3MjYvZ2xzbHNhbmRib3gjNjg3MjYnLFxyXG4gICAgICAgICAgICAnZ2xzbHNhbmRib3gjNjg3NzQvZ2xzbHNhbmRib3gjNjg3NzQnLFxyXG4gICAgICAgICAgICAnZ2xzbHNhbmRib3gjNjkwMTYvZ2xzbHNhbmRib3gjNjkwMTYnLFxyXG4gICAgICAgICAgICAnZ2xzbHNhbmRib3gjNjkwMjIvZ2xzbHNhbmRib3gjNjkwMjInLFxyXG4gICAgICAgICAgICAnZ2xzbHNhbmRib3gjNjkxNTYvZ2xzbHNhbmRib3gjNjkxNTYnLFxyXG4gICAgICAgICAgICAnZ2xzbHNhbmRib3gjNjkzMTUvZ2xzbHNhbmRib3gjNjkzMTUnLFxyXG4gICAgICAgICAgICAnZ2xzbHNhbmRib3gjNjkzNDIvZ2xzbHNhbmRib3gjNjkzNDInLFxyXG4gICAgICAgICAgICAnZ2xzbHNhbmRib3gjNjkzNTAvZ2xzbHNhbmRib3gjNjkzNTAnLFxyXG4gICAgICAgICAgICAnSW1hZ2VFZmZlY3QvSW1hZ2VFZmZlY3RfcHJlZicsXHJcbiAgICAgICAgICAgICdqaXp1b2JpYW8vaml6dW9iaWFvX3ByZWYnLFxyXG4gICAgICAgICAgICAnS25pZmVMaWdodC9LbmlmZUxpZ2h0X3ByZWYnLFxyXG4gICAgICAgICAgICAnUmVnaW9uYWxfZ3JheS9SZWdpb25hbF9ncmF5X3ByZWYnLFxyXG4gICAgICAgICAgICAncml2ZXIvcml2ZXJfcHJlZicsXHJcbiAgICAgICAgICAgICdTY3JvbGxCb3gvU2Nyb2xsQm94X3ByZWYnLFxyXG4gICAgICAgICAgICAnU3RyZWV0TGlnaHQvU3RyZWV0TGlnaHQnLFxyXG4gICAgICAgICAgICAndGVzdC0wMDIvdGVzdC0wMDJfcHJlZicsXHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLnByZWZJZHggPSAwO1xyXG4gICAgICAgIHRoaXMuYnRuTGVmdC5ub2RlLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgLS10aGlzLnByZWZJZHg7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5idG5SaWdodC5ub2RlLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgKyt0aGlzLnByZWZJZHg7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZUNvbnRhaW5lci5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TW91c2UoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ub2RlQ29udGFpbmVyLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldE1vdXNlKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubm9kZUNvbnRhaW5lci5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkRFRCwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TW91c2UoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBjaGFuZ2VJZHgoKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxDaGlsZHModGhpcy5ub2RlQ29udGFpbmVyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWQgXCIgKyB0aGlzLnByZWZzW3RoaXMucHJlZklkeF0pO1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHRoaXMucHJlZnNbdGhpcy5wcmVmSWR4XSwgKGVycixyZXMpID0+IHtcclxuICAgICAgICAgICAgdmFyIG5vZGUgPSBjYy5pbnN0YW50aWF0ZShyZXMpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVDb250YWluZXIuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0QW5jaG9yUG9pbnQoMC41LDAuNSk7XHJcbiAgICAgICAgICAgIHRoaXMubGJsVGl0bGUuc3RyaW5nID0gdGhpcy5wcmVmc1t0aGlzLnByZWZJZHhdO1xyXG4gICAgICAgICAgICAvLyBub2RlLnNldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlbW92ZUFsbENoaWxkcyhub2RlKSB7XHJcbiAgICAgICAgdmFyIGNoaWxkcyA9IG5vZGUuZ2V0Q2hpbGRyZW4oKTtcclxuICAgICAgICBjaGlsZHMuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIHNldE1vdXNlIChwb3MpIHtcclxuICAgICAgICBsZXQgbWF0ID0gdGhpcy5ub2RlQ29udGFpbmVyLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmdldE1hdGVyaWFsKDApO1xyXG4gICAgICAgIG1hdC5lZmZlY3Quc2V0UHJvcGVydHkoJ3VfbW91c2UnLHBvcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMuX3NldFNoYWRlclRpbWUoZHQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBfc2V0U2hhZGVyVGltZShkdCkge1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0ICs9IDAuMDE7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0ID4gdGhpcy5fbWF4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5ub2RlQ29udGFpbmVyLmNoaWxkcmVuWzBdKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNtdHMgPSB0aGlzLm5vZGVDb250YWluZXIuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgY210cy5mb3JFYWNoKGNjID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmdldE1hdGVyaWFsKDApLmVmZmVjdC5zZXRQcm9wZXJ0eSgndV90aW1lJyx0aGlzLl9zdGFydCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

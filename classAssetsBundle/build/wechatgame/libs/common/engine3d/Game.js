"use strict";

var inputManager = cc.internal.inputManager;
var renderer = cc.renderer;
var game = cc.game;
var _frameRate = 60;
Object.assign(game, {
  setFrameRate: function setFrameRate(frameRate) {
    _frameRate = frameRate;

    if (__globalAdapter.setPreferredFramesPerSecond) {
      __globalAdapter.setPreferredFramesPerSecond(frameRate);
    } else {
      this._paused = true;

      this._setAnimFrame();

      this._runMainLoop();
    }
  },
  getFrameRate: function getFrameRate() {
    return _frameRate;
  },
  _runMainLoop: function _runMainLoop() {
    var self = this,
        _callback,
        config = self.config,
        director = cc.director,
        skip = true,
        frameRate = config.frameRate;

    cc.debug.setDisplayStats(config.showFPS);
    director.startAnimation();

    _callback = function callback(time) {
      if (!self._paused) {
        self._intervalId = window.rAF(_callback);

        if (_frameRate === 30 && !__globalAdapter.setPreferredFramesPerSecond) {
          if (skip = !skip) {
            return;
          }
        }

        director.mainLoop(time);
      }
    };

    if (self._intervalId) {
      window.cAF(self._intervalId);
      self._intervalId = 0;
    }

    self._intervalId = window.rAF(_callback);
    self._paused = false;
  },
  _initEvents: function _initEvents() {
    var hidden = false;

    function onHidden() {
      if (!hidden) {
        hidden = true;
        cc.game.emit(cc.Game.EVENT_HIDE);
      }
    }

    function onShown() {
      if (hidden) {
        hidden = false;
        cc.game.emit(cc.Game.EVENT_SHOW);
      }
    }

    __globalAdapter.onAudioInterruptionEnd && __globalAdapter.onAudioInterruptionEnd(onShown);
    __globalAdapter.onAudioInterruptionBegin && __globalAdapter.onAudioInterruptionBegin(onHidden);
    __globalAdapter.onShow && __globalAdapter.onShow(onShown);
    __globalAdapter.onHide && __globalAdapter.onHide(onHidden);
    this.on(cc.Game.EVENT_HIDE, function () {
      cc.game.pause();
    });
    this.on(cc.Game.EVENT_SHOW, function () {
      cc.game.resume();
    });
  },
  end: function end() {} // mini game platform not support this api

}); //  Small game in the screen log

function onErrorMessageHandler(info) {
  // off error event
  __globalAdapter.offError && __globalAdapter.offError(onErrorMessageHandler);
  var allowTrigger = Math.random() < 0.001;

  if (__globalAdapter.isSubContext || !allowTrigger) {
    return;
  }

  var env = __globalAdapter.getSystemInfoSync();

  if (!env) {
    return;
  }

  var root = cc.Canvas.instance.node;

  if (!root) {
    return;
  }

  var offset = 60;
  var node = new cc.Node();
  node.color = cc.Color.BLACK;
  node.parent = root;
  var label = node.addComponent(cc.Label);
  node.height = root.height - offset;
  node.width = root.width - offset;
  label.overflow = cc.Label.Overflow.SHRINK;
  label.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
  label.verticalAlign = cc.Label.VerticalAlign.TOP;
  label.fontSize = 24;

  if (cc.LabelOutline) {
    var outline = node.addComponent(cc.LabelOutline);
    outline.color = cc.Color.WHITE;
  }

  label.string = '??????????????????????????????????????????????????????Please send this screen shot to the game developer???\n';
  label.string += 'Device: ' + env.brand + ' ' + env.model + '\n' + 'System: ' + env.system + '\n' + 'Platform: WeChat ' + env.version + '\n' + 'Engine: Cocos Creator v' + window.CocosEngine + '\n' + 'Error:\n' + info.message;
  cc.director.pause();
  node.once('touchend', function () {
    node.destroy();
    setTimeout(function () {
      cc.director.resume();
    }, 1000);
  });
}

__globalAdapter.onError && __globalAdapter.onError(onErrorMessageHandler);
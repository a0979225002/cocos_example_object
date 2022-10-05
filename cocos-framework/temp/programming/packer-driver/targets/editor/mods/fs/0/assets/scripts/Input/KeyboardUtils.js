System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SystemEvent, systemEvent, KeyboardUtils, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfKeys(extras) {
    _reporterNs.report("Keys", "./Keys", _context.meta, extras);
  }

  _export("KeyboardUtils", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      SystemEvent = _cc.SystemEvent;
      systemEvent = _cc.systemEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6590aXHil1DYI9ztlL/f5d/", "KeyboardUtils", undefined);

      _export("KeyboardUtils", KeyboardUtils = class KeyboardUtils {
        /**
         * 当前帧按键状态
         */

        /**
         * 上一帧按键状态
         */
        static init() {
          systemEvent.on(SystemEvent.EventType.KEY_UP, KeyboardUtils.onKeyUpHandler, this);
          systemEvent.on(SystemEvent.EventType.KEY_DOWN, KeyboardUtils.onKeyDownHandler, this);
        }

        static update() {
          KeyboardUtils.previousKeys.length = 0;

          for (let key of KeyboardUtils.currentKeys) {
            KeyboardUtils.previousKeys.push(key);
            new es.List(KeyboardUtils.currentKeys).remove(key);
          }

          KeyboardUtils.currentKeys.length = 0;

          for (let key of KeyboardUtils.keyStatusKeys) {
            KeyboardUtils.currentKeys.push(key);
          }
        }

        static destroy() {
          KeyboardUtils.currentKeys.length = 0;
          systemEvent.off(SystemEvent.EventType.KEY_UP, KeyboardUtils.onKeyUpHandler, this);
          systemEvent.off(SystemEvent.EventType.KEY_DOWN, KeyboardUtils.onKeyDownHandler, this);
        }

        static onKeyDownHandler(event) {
          if (!new es.List(KeyboardUtils.keyStatusKeys).contains(event.keyCode)) KeyboardUtils.keyStatusKeys.push(event.keyCode);
        }

        static onKeyUpHandler(event) {
          let linqList = new es.List(KeyboardUtils.keyStatusKeys);
          if (linqList.contains(event.keyCode)) linqList.remove(event.keyCode);
        }

      });

      _defineProperty(KeyboardUtils, "currentKeys", []);

      _defineProperty(KeyboardUtils, "previousKeys", []);

      _defineProperty(KeyboardUtils, "keyStatusKeys", []);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=KeyboardUtils.js.map
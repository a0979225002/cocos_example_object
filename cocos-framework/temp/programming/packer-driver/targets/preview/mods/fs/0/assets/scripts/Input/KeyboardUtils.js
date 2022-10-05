System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SystemEvent, systemEvent, _crd, KeyboardUtils;

  function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfKeys(extras) {
    _reporterNs.report("Keys", "./Keys", _context.meta, extras);
  }

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

      _export("KeyboardUtils", KeyboardUtils = /*#__PURE__*/function () {
        function KeyboardUtils() {}

        /**
         * 当前帧按键状态
         */

        /**
         * 上一帧按键状态
         */
        KeyboardUtils.init = function init() {
          systemEvent.on(SystemEvent.EventType.KEY_UP, KeyboardUtils.onKeyUpHandler, this);
          systemEvent.on(SystemEvent.EventType.KEY_DOWN, KeyboardUtils.onKeyDownHandler, this);
        };

        KeyboardUtils.update = function update() {
          KeyboardUtils.previousKeys.length = 0;

          for (var _iterator = _createForOfIteratorHelperLoose(KeyboardUtils.currentKeys), _step; !(_step = _iterator()).done;) {
            var key = _step.value;
            KeyboardUtils.previousKeys.push(key);
            new es.List(KeyboardUtils.currentKeys).remove(key);
          }

          KeyboardUtils.currentKeys.length = 0;

          for (var _iterator2 = _createForOfIteratorHelperLoose(KeyboardUtils.keyStatusKeys), _step2; !(_step2 = _iterator2()).done;) {
            var _key = _step2.value;
            KeyboardUtils.currentKeys.push(_key);
          }
        };

        KeyboardUtils.destroy = function destroy() {
          KeyboardUtils.currentKeys.length = 0;
          systemEvent.off(SystemEvent.EventType.KEY_UP, KeyboardUtils.onKeyUpHandler, this);
          systemEvent.off(SystemEvent.EventType.KEY_DOWN, KeyboardUtils.onKeyDownHandler, this);
        };

        KeyboardUtils.onKeyDownHandler = function onKeyDownHandler(event) {
          if (!new es.List(KeyboardUtils.keyStatusKeys).contains(event.keyCode)) KeyboardUtils.keyStatusKeys.push(event.keyCode);
        };

        KeyboardUtils.onKeyUpHandler = function onKeyUpHandler(event) {
          var linqList = new es.List(KeyboardUtils.keyStatusKeys);
          if (linqList.contains(event.keyCode)) linqList.remove(event.keyCode);
        };

        return KeyboardUtils;
      }());

      _defineProperty(KeyboardUtils, "currentKeys", []);

      _defineProperty(KeyboardUtils, "previousKeys", []);

      _defineProperty(KeyboardUtils, "keyStatusKeys", []);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=KeyboardUtils.js.map
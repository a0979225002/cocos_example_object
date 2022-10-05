System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, ButtonState, MouseState;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("ButtonState", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e0e5kyUkdEAYqyqOdAi1wi", "MouseState", undefined);

      (function (ButtonState) {
        ButtonState[ButtonState["pressed"] = 0] = "pressed";
        ButtonState[ButtonState["released"] = 1] = "released";
      })(ButtonState || _export("ButtonState", ButtonState = {}));

      _export("MouseState", MouseState = /*#__PURE__*/function () {
        function MouseState() {
          _defineProperty(this, "leftButton", ButtonState.released);

          _defineProperty(this, "rightButton", ButtonState.released);
        }

        var _proto = MouseState.prototype;

        _proto.clone = function clone() {
          var mouseState = new MouseState();
          mouseState.leftButton = this.leftButton;
          mouseState.rightButton = this.rightButton;
          return mouseState;
        };

        return MouseState;
      }());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MouseState.js.map
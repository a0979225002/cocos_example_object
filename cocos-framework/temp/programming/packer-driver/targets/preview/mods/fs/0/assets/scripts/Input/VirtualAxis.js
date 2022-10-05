System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Input, OverlapBehavior, VirtualInput, VirtualAxisNode, _crd, VirtualAxis, KeyboardKeys;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfInput(extras) {
    _reporterNs.report("Input", "./Input", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKeys(extras) {
    _reporterNs.report("Keys", "./Keys", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOverlapBehavior(extras) {
    _reporterNs.report("OverlapBehavior", "./VirtualInput", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVirtualInput(extras) {
    _reporterNs.report("VirtualInput", "./VirtualInput", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVirtualAxisNode(extras) {
    _reporterNs.report("VirtualAxisNode", "./VirtualIntegerAxis", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Input = _unresolved_2.Input;
    }, function (_unresolved_3) {
      OverlapBehavior = _unresolved_3.OverlapBehavior;
      VirtualInput = _unresolved_3.VirtualInput;
    }, function (_unresolved_4) {
      VirtualAxisNode = _unresolved_4.VirtualAxisNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "76eb11eZ5ZIZLzmPktgyOJg", "VirtualAxis", undefined);

      _export("VirtualAxis", VirtualAxis = /*#__PURE__*/function (_ref) {
        _inheritsLoose(VirtualAxis, _ref);

        function VirtualAxis() {
          var _this;

          _this = _ref.call(this) || this;

          _defineProperty(_assertThisInitialized(_this), "nodes", []);

          for (var _len = arguments.length, nodes = new Array(_len), _key = 0; _key < _len; _key++) {
            nodes[_key] = arguments[_key];
          }

          _this.nodes.concat(nodes);

          return _this;
        }

        var _proto = VirtualAxis.prototype;

        _proto.update = function update() {
          for (var i = 0; i < this.nodes.length; i++) {
            this.nodes[i].update();
          }
        };

        _createClass(VirtualAxis, [{
          key: "value",
          get: function get() {
            for (var i = 0; i < this.nodes.length; i++) {
              var val = this.nodes[i].value;
              if (val != 0) return val;
            }

            return 0;
          }
        }]);

        return VirtualAxis;
      }(_crd && VirtualInput === void 0 ? (_reportPossibleCrUseOfVirtualInput({
        error: Error()
      }), VirtualInput) : VirtualInput));

      _export("KeyboardKeys", KeyboardKeys = /*#__PURE__*/function (_ref2) {
        _inheritsLoose(KeyboardKeys, _ref2);

        function KeyboardKeys(overlapBehavior, negative, positive) {
          var _this2;

          _this2 = _ref2.call(this) || this;

          _defineProperty(_assertThisInitialized(_this2), "overlapBehavior", void 0);

          _defineProperty(_assertThisInitialized(_this2), "positive", void 0);

          _defineProperty(_assertThisInitialized(_this2), "negative", void 0);

          _defineProperty(_assertThisInitialized(_this2), "_value", 0);

          _defineProperty(_assertThisInitialized(_this2), "_turned", false);

          _this2.overlapBehavior = overlapBehavior;
          _this2.negative = negative;
          _this2.positive = positive;
          return _this2;
        }

        var _proto2 = KeyboardKeys.prototype;

        _proto2.update = function update() {
          if ((_crd && Input === void 0 ? (_reportPossibleCrUseOfInput({
            error: Error()
          }), Input) : Input).isKeyDown(this.positive)) {
            if ((_crd && Input === void 0 ? (_reportPossibleCrUseOfInput({
              error: Error()
            }), Input) : Input).isKeyDown(this.negative)) {
              switch (this.overlapBehavior) {
                default:
                case (_crd && OverlapBehavior === void 0 ? (_reportPossibleCrUseOfOverlapBehavior({
                  error: Error()
                }), OverlapBehavior) : OverlapBehavior).cancelOut:
                  this._value = 0;
                  break;

                case (_crd && OverlapBehavior === void 0 ? (_reportPossibleCrUseOfOverlapBehavior({
                  error: Error()
                }), OverlapBehavior) : OverlapBehavior).takeNewer:
                  if (!this._turned) {
                    this._value *= -1;
                    this._turned = true;
                  }

                  break;

                case (_crd && OverlapBehavior === void 0 ? (_reportPossibleCrUseOfOverlapBehavior({
                  error: Error()
                }), OverlapBehavior) : OverlapBehavior).takeOlder:
                  break;
              }
            } else {
              this._turned = false;
              this._value = 1;
            }
          } else if ((_crd && Input === void 0 ? (_reportPossibleCrUseOfInput({
            error: Error()
          }), Input) : Input).isKeyDown(this.negative)) {
            this._turned = false;
            this._value = -1;
          } else {
            this._turned = false;
            this._value = 0;
          }
        };

        _createClass(KeyboardKeys, [{
          key: "value",
          get: function get() {
            return this._value;
          }
        }]);

        return KeyboardKeys;
      }(_crd && VirtualAxisNode === void 0 ? (_reportPossibleCrUseOfVirtualAxisNode({
        error: Error()
      }), VirtualAxisNode) : VirtualAxisNode));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=VirtualAxis.js.map
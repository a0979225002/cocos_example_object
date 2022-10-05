System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, KeyboardKeys, VirtualInput, VirtualInputNode, _crd, VirtualIntegerAxis, VirtualAxisNode;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfKeys(extras) {
    _reporterNs.report("Keys", "./Keys", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKeyboardKeys(extras) {
    _reporterNs.report("KeyboardKeys", "./VirtualAxis", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOverlapBehavior(extras) {
    _reporterNs.report("OverlapBehavior", "./VirtualInput", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVirtualInput(extras) {
    _reporterNs.report("VirtualInput", "./VirtualInput", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVirtualInputNode(extras) {
    _reporterNs.report("VirtualInputNode", "./VirtualInput", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      KeyboardKeys = _unresolved_2.KeyboardKeys;
    }, function (_unresolved_3) {
      VirtualInput = _unresolved_3.VirtualInput;
      VirtualInputNode = _unresolved_3.VirtualInputNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a6159kYNLNGtJ8c/Ei7jj1Z", "VirtualIntegerAxis", undefined);

      _export("VirtualIntegerAxis", VirtualIntegerAxis = /*#__PURE__*/function (_ref) {
        _inheritsLoose(VirtualIntegerAxis, _ref);

        function VirtualIntegerAxis() {
          var _this;

          _this = _ref.call(this) || this;

          _defineProperty(_assertThisInitialized(_this), "nodes", []);

          for (var _len = arguments.length, nodes = new Array(_len), _key = 0; _key < _len; _key++) {
            nodes[_key] = arguments[_key];
          }

          _this.nodes.concat(nodes);

          return _this;
        }

        var _proto = VirtualIntegerAxis.prototype;

        _proto.update = function update() {
          for (var i = 0; i < this.nodes.length; i++) {
            this.nodes[i].update();
          }
        }
        /**
         * 添加键盘键来模拟这个虚拟输入的左/右或上/下
         * @param overlapBehavior
         * @param negative
         * @param positive
         */
        ;

        _proto.addKeyboardKeys = function addKeyboardKeys(overlapBehavior, negative, positive) {
          this.nodes.push(new (_crd && KeyboardKeys === void 0 ? (_reportPossibleCrUseOfKeyboardKeys({
            error: Error()
          }), KeyboardKeys) : KeyboardKeys)(overlapBehavior, negative, positive));
          return this;
        };

        _createClass(VirtualIntegerAxis, [{
          key: "value",
          get: function get() {
            for (var i = 0; i < this.nodes.length; i++) {
              var val = this.nodes[i].value;
              if (val != 0) return Math.sign(val);
            }

            return 0;
          }
        }]);

        return VirtualIntegerAxis;
      }(_crd && VirtualInput === void 0 ? (_reportPossibleCrUseOfVirtualInput({
        error: Error()
      }), VirtualInput) : VirtualInput));

      _export("VirtualAxisNode", VirtualAxisNode = /*#__PURE__*/function (_ref2) {
        _inheritsLoose(VirtualAxisNode, _ref2);

        function VirtualAxisNode() {
          var _this2;

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          _this2 = _ref2.call.apply(_ref2, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this2), "value", void 0);

          return _this2;
        }

        return VirtualAxisNode;
      }(_crd && VirtualInputNode === void 0 ? (_reportPossibleCrUseOfVirtualInputNode({
        error: Error()
      }), VirtualInputNode) : VirtualInputNode));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=VirtualIntegerAxis.js.map
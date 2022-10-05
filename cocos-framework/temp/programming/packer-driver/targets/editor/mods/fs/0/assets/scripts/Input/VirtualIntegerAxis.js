System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, KeyboardKeys, VirtualInput, VirtualInputNode, VirtualIntegerAxis, VirtualAxisNode, _crd;

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

  _export({
    VirtualIntegerAxis: void 0,
    VirtualAxisNode: void 0
  });

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

      _export("VirtualIntegerAxis", VirtualIntegerAxis = class VirtualIntegerAxis extends (_crd && VirtualInput === void 0 ? (_reportPossibleCrUseOfVirtualInput({
        error: Error()
      }), VirtualInput) : VirtualInput) {
        get value() {
          for (let i = 0; i < this.nodes.length; i++) {
            let val = this.nodes[i].value;
            if (val != 0) return Math.sign(val);
          }

          return 0;
        }

        constructor(...nodes) {
          super();

          _defineProperty(this, "nodes", []);

          this.nodes.concat(nodes);
        }

        update() {
          for (let i = 0; i < this.nodes.length; i++) this.nodes[i].update();
        }
        /**
         * 添加键盘键来模拟这个虚拟输入的左/右或上/下
         * @param overlapBehavior
         * @param negative
         * @param positive
         */


        addKeyboardKeys(overlapBehavior, negative, positive) {
          this.nodes.push(new (_crd && KeyboardKeys === void 0 ? (_reportPossibleCrUseOfKeyboardKeys({
            error: Error()
          }), KeyboardKeys) : KeyboardKeys)(overlapBehavior, negative, positive));
          return this;
        }

      });

      _export("VirtualAxisNode", VirtualAxisNode = class VirtualAxisNode extends (_crd && VirtualInputNode === void 0 ? (_reportPossibleCrUseOfVirtualInputNode({
        error: Error()
      }), VirtualInputNode) : VirtualInputNode) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "value", void 0);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=VirtualIntegerAxis.js.map
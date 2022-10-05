System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Input, OverlapBehavior, VirtualInput, VirtualAxisNode, VirtualAxis, KeyboardKeys, _crd;

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

  _export({
    VirtualAxis: void 0,
    KeyboardKeys: void 0
  });

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

      _export("VirtualAxis", VirtualAxis = class VirtualAxis extends (_crd && VirtualInput === void 0 ? (_reportPossibleCrUseOfVirtualInput({
        error: Error()
      }), VirtualInput) : VirtualInput) {
        get value() {
          for (let i = 0; i < this.nodes.length; i++) {
            let val = this.nodes[i].value;
            if (val != 0) return val;
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

      });

      _export("KeyboardKeys", KeyboardKeys = class KeyboardKeys extends (_crd && VirtualAxisNode === void 0 ? (_reportPossibleCrUseOfVirtualAxisNode({
        error: Error()
      }), VirtualAxisNode) : VirtualAxisNode) {
        constructor(overlapBehavior, negative, positive) {
          super();

          _defineProperty(this, "overlapBehavior", void 0);

          _defineProperty(this, "positive", void 0);

          _defineProperty(this, "negative", void 0);

          _defineProperty(this, "_value", 0);

          _defineProperty(this, "_turned", false);

          this.overlapBehavior = overlapBehavior;
          this.negative = negative;
          this.positive = positive;
        }

        update() {
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
        }

        get value() {
          return this._value;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=VirtualAxis.js.map
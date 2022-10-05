System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Input, _crd, OverlapBehavior, VirtualInput, VirtualInputNode;

  function _reportPossibleCrUseOfInput(extras) {
    _reporterNs.report("Input", "./Input", _context.meta, extras);
  }

  _export("OverlapBehavior", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Input = _unresolved_2.Input;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "693bao3RaJDlbdFXrW/k5D4", "VirtualInput", undefined);

      (function (OverlapBehavior) {
        OverlapBehavior[OverlapBehavior["cancelOut"] = 0] = "cancelOut";
        OverlapBehavior[OverlapBehavior["takeOlder"] = 1] = "takeOlder";
        OverlapBehavior[OverlapBehavior["takeNewer"] = 2] = "takeNewer";
      })(OverlapBehavior || _export("OverlapBehavior", OverlapBehavior = {}));

      /**
       * 虚拟按钮，其状态由其VirtualInputNodes的状态决定
       */
      _export("VirtualInput", VirtualInput = /*#__PURE__*/function () {
        function VirtualInput() {
          (_crd && Input === void 0 ? (_reportPossibleCrUseOfInput({
            error: Error()
          }), Input) : Input)._virtualInputs.push(this);
        }
        /**
         * 从输入系统取消虚拟输入的注册。在轮询VirtualInput之后调用这个函数
         */


        var _proto = VirtualInput.prototype;

        _proto.deregister = function deregister() {
          new es.List((_crd && Input === void 0 ? (_reportPossibleCrUseOfInput({
            error: Error()
          }), Input) : Input)._virtualInputs).remove(this);
        };

        return VirtualInput;
      }());
      /**
       * 将它们添加到您的VirtualInput中，以定义它如何确定当前输入状态。
       * 例如，如果你想检查一个键盘键是否被按下，创建一个VirtualButton并添加一个VirtualButton.keyboardkey
       */


      _export("VirtualInputNode", VirtualInputNode = /*#__PURE__*/function () {
        function VirtualInputNode() {}

        var _proto2 = VirtualInputNode.prototype;

        _proto2.update = function update() {};

        return VirtualInputNode;
      }());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=VirtualInput.js.map
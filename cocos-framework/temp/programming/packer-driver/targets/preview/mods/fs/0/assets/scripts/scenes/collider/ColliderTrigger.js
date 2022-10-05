System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, ColliderTrigger;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e2353np0TtPErcgkMOBZqtL", "ColliderTrigger", undefined);

      _export("ColliderTrigger", ColliderTrigger = /*#__PURE__*/function (_es$Component) {
        _inheritsLoose(ColliderTrigger, _es$Component);

        function ColliderTrigger() {
          return _es$Component.apply(this, arguments) || this;
        }

        var _proto = ColliderTrigger.prototype;

        _proto.onTriggerEnter = function onTriggerEnter(other, local) {
          console.log("onTriggerEnter", other, local);
        };

        _proto.onTriggerExit = function onTriggerExit(other, local) {
          console.log("onTriggerExit", other, local);
        };

        return ColliderTrigger;
      }(es.Component));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ColliderTrigger.js.map
System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ColliderTrigger, _crd;

  _export("ColliderTrigger", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e2353np0TtPErcgkMOBZqtL", "ColliderTrigger", undefined);

      _export("ColliderTrigger", ColliderTrigger = class ColliderTrigger extends es.Component {
        onTriggerEnter(other, local) {
          console.log("onTriggerEnter", other, local);
        }

        onTriggerExit(other, local) {
          console.log("onTriggerExit", other, local);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ColliderTrigger.js.map
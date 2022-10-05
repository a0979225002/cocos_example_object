"use strict";
cc._RF.push(module, '298137scYlJoreHV0uCyjdd', 'UIManager');
// Script/UIManager.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    btnGroupPrefab: {
      "default": null,
      type: cc.Prefab
    }
  },
  // use this for initialization
  onLoad: function onLoad() {
    var btnGroup = cc.instantiate(this.btnGroupPrefab);
    btnGroup.parent = this.node;
  }
});

cc._RF.pop();
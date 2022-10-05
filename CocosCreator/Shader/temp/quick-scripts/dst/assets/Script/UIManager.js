
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxVSU1hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJidG5Hcm91cFByZWZhYiIsInR5cGUiLCJQcmVmYWIiLCJvbkxvYWQiLCJidG5Hcm91cCIsImluc3RhbnRpYXRlIiwicGFyZW50Iiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLGNBQWMsRUFBQztBQUNYLGlCQUFRLElBREc7QUFFWEMsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNO0FBRkc7QUFEUCxHQUhQO0FBVUw7QUFDQUMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCLFFBQUlDLFFBQVEsR0FBR1IsRUFBRSxDQUFDUyxXQUFILENBQWUsS0FBS0wsY0FBcEIsQ0FBZjtBQUNBSSxJQUFBQSxRQUFRLENBQUNFLE1BQVQsR0FBa0IsS0FBS0MsSUFBdkI7QUFDSDtBQWRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgYnRuR3JvdXBQcmVmYWI6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuUHJlZmFiLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYnRuR3JvdXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ0bkdyb3VwUHJlZmFiKTtcclxuICAgICAgICBidG5Hcm91cC5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICB9LFxyXG59KTtcclxuIl19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScoreAnim.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1f9e88YHdGr7qD17shtr2w', 'ScoreAnim');
// scripts/ScoreAnim.js

"use strict";

cc.Class({
  "extends": cc.Component,
  init: function init(scoreFX) {
    this.scoreFX = scoreFX;
  },
  hideFX: function hideFX() {
    this.scoreFX.despawn();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NvcmVBbmltLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJpbml0Iiwic2NvcmVGWCIsImhpZGVGWCIsImRlc3Bhd24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLElBSEssZ0JBR0NDLE9BSEQsRUFHVTtBQUNYLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNILEdBTEk7QUFPTEMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCLFNBQUtELE9BQUwsQ0FBYUUsT0FBYjtBQUNIO0FBVEksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIGluaXQgKHNjb3JlRlgpIHtcclxuICAgICAgICB0aGlzLnNjb3JlRlggPSBzY29yZUZYO1xyXG4gICAgfSxcclxuXHJcbiAgICBoaWRlRlg6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNjb3JlRlguZGVzcGF3bigpO1xyXG4gICAgfSxcclxufSk7Il19
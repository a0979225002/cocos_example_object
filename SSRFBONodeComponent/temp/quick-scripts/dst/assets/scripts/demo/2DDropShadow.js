
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/demo/2DDropShadow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8d383C04ltNnYh0bGYUqvyS', '2DDropShadow');
// scripts/demo/2DDropShadow.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    fbo: cc.Node,
    spine: cc.Node,
    dragon: cc.Node // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },

  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.debug.setDisplayStats(true);
  },
  start: function start() {
    // cc.debug.setDisplayStats(true);
    // let self = this;
    // this.schedule(function() {
    //     self.fbo.getComponent("FBONodeCaptureComponent").capture("666");
    // }, 0.1);
    cc.tween(this.spine).by(15, {
      position: cc.v2(900, 0)
    }).start();
    cc.tween(this.dragon).by(20, {
      position: cc.v2(1100, 0)
    }).start();
  },
  update: function update(dt) {// this.fbo.getComponent("FBONodeCaptureComponent").capture("666");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZGVtb1xcMkREcm9wU2hhZG93LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZmJvIiwiTm9kZSIsInNwaW5lIiwiZHJhZ29uIiwib25Mb2FkIiwiZGVidWciLCJzZXREaXNwbGF5U3RhdHMiLCJzdGFydCIsInR3ZWVuIiwiYnkiLCJwb3NpdGlvbiIsInYyIiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxHQUFHLEVBQUVKLEVBQUUsQ0FBQ0ssSUFEQTtBQUVSQyxJQUFBQSxLQUFLLEVBQUVOLEVBQUUsQ0FBQ0ssSUFGRjtBQUdSRSxJQUFBQSxNQUFNLEVBQUVQLEVBQUUsQ0FBQ0ssSUFISCxDQUlSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFsQlEsR0FIUDtBQXdCTDtBQUVBRyxFQUFBQSxNQTFCSyxvQkEwQks7QUFDTlIsSUFBQUEsRUFBRSxDQUFDUyxLQUFILENBQVNDLGVBQVQsQ0FBeUIsSUFBekI7QUFDSCxHQTVCSTtBQThCTEMsRUFBQUEsS0E5QkssbUJBOEJJO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBWCxJQUFBQSxFQUFFLENBQUNZLEtBQUgsQ0FBUyxLQUFLTixLQUFkLEVBQ0tPLEVBREwsQ0FDUSxFQURSLEVBQ1k7QUFBRUMsTUFBQUEsUUFBUSxFQUFFZCxFQUFFLENBQUNlLEVBQUgsQ0FBTSxHQUFOLEVBQVcsQ0FBWDtBQUFaLEtBRFosRUFFS0osS0FGTDtBQUlBWCxJQUFBQSxFQUFFLENBQUNZLEtBQUgsQ0FBUyxLQUFLTCxNQUFkLEVBQ0tNLEVBREwsQ0FDUSxFQURSLEVBQ1k7QUFBRUMsTUFBQUEsUUFBUSxFQUFFZCxFQUFFLENBQUNlLEVBQUgsQ0FBTSxJQUFOLEVBQVksQ0FBWjtBQUFaLEtBRFosRUFFS0osS0FGTDtBQUdILEdBNUNJO0FBNkNMSyxFQUFBQSxNQTdDSyxrQkE2Q0dDLEVBN0NILEVBNkNPLENBQ1I7QUFDSDtBQS9DSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBmYm86IGNjLk5vZGUsXG4gICAgICAgIHNwaW5lOiBjYy5Ob2RlLFxuICAgICAgICBkcmFnb246IGNjLk5vZGUsXG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyBiYXI6IHtcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKHRydWUpO1xuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8vIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyh0cnVlKTtcbiAgICAgICAgLy8gbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAgICAgc2VsZi5mYm8uZ2V0Q29tcG9uZW50KFwiRkJPTm9kZUNhcHR1cmVDb21wb25lbnRcIikuY2FwdHVyZShcIjY2NlwiKTtcbiAgICAgICAgLy8gfSwgMC4xKTtcblxuICAgICAgICBjYy50d2Vlbih0aGlzLnNwaW5lKVxuICAgICAgICAgICAgLmJ5KDE1LCB7IHBvc2l0aW9uOiBjYy52Mig5MDAsIDApIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICBjYy50d2Vlbih0aGlzLmRyYWdvbilcbiAgICAgICAgICAgIC5ieSgyMCwgeyBwb3NpdGlvbjogY2MudjIoMTEwMCwgMCkgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH0sXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICAvLyB0aGlzLmZiby5nZXRDb21wb25lbnQoXCJGQk9Ob2RlQ2FwdHVyZUNvbXBvbmVudFwiKS5jYXB0dXJlKFwiNjY2XCIpO1xuICAgIH0sXG59KTtcbiJdfQ==
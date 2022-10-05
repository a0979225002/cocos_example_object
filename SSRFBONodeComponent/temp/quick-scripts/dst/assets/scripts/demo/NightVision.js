
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/demo/NightVision.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ee86AiUblJ7oGG5vTJ80/p', 'NightVision');
// scripts/demo/NightVision.js

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
    spine: cc.Node,
    dragon: cc.Node,
    binocular: cc.Node // foo: {
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
    cc.tween(this.spine).by(15, {
      position: cc.v2(900, 0)
    }).start();
    cc.tween(this.dragon).by(20, {
      position: cc.v2(1100, 0)
    }).start();
    var self = this; // this.node.on(cc.Node.EventType.TOUCH_START, this._touchStartCallback, this);

    this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      var canvas = cc.find("Canvas");
      var location = canvas.convertToNodeSpaceAR(event.touch.getLocation());
      self.binocular.position = location;
    }, this); // this.node.on(cc.Node.EventType.TOUCH_END, this._touchEndCallback, this);
    // this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._touchCancelCallback, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZGVtb1xcTmlnaHRWaXNpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzcGluZSIsIk5vZGUiLCJkcmFnb24iLCJiaW5vY3VsYXIiLCJvbkxvYWQiLCJkZWJ1ZyIsInNldERpc3BsYXlTdGF0cyIsInN0YXJ0IiwidHdlZW4iLCJieSIsInBvc2l0aW9uIiwidjIiLCJzZWxmIiwibm9kZSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfTU9WRSIsImV2ZW50IiwiY2FudmFzIiwiZmluZCIsImxvY2F0aW9uIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJ0b3VjaCIsImdldExvY2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFFSixFQUFFLENBQUNLLElBREY7QUFFUkMsSUFBQUEsTUFBTSxFQUFFTixFQUFFLENBQUNLLElBRkg7QUFHUkUsSUFBQUEsU0FBUyxFQUFFUCxFQUFFLENBQUNLLElBSE4sQ0FJUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBbEJRLEdBSFA7QUF3Qkw7QUFFQUcsRUFBQUEsTUExQkssb0JBMEJLO0FBQ05SLElBQUFBLEVBQUUsQ0FBQ1MsS0FBSCxDQUFTQyxlQUFULENBQXlCLElBQXpCO0FBQ0gsR0E1Qkk7QUE4QkxDLEVBQUFBLEtBOUJLLG1CQThCSTtBQUNMWCxJQUFBQSxFQUFFLENBQUNZLEtBQUgsQ0FBUyxLQUFLUixLQUFkLEVBQ0tTLEVBREwsQ0FDUSxFQURSLEVBQ1k7QUFBRUMsTUFBQUEsUUFBUSxFQUFFZCxFQUFFLENBQUNlLEVBQUgsQ0FBTSxHQUFOLEVBQVcsQ0FBWDtBQUFaLEtBRFosRUFFS0osS0FGTDtBQUlBWCxJQUFBQSxFQUFFLENBQUNZLEtBQUgsQ0FBUyxLQUFLTixNQUFkLEVBQ0tPLEVBREwsQ0FDUSxFQURSLEVBQ1k7QUFBRUMsTUFBQUEsUUFBUSxFQUFFZCxFQUFFLENBQUNlLEVBQUgsQ0FBTSxJQUFOLEVBQVksQ0FBWjtBQUFaLEtBRFosRUFFS0osS0FGTDtBQUlBLFFBQUlLLElBQUksR0FBRyxJQUFYLENBVEssQ0FVTDs7QUFDQSxTQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYWxCLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRYyxTQUFSLENBQWtCQyxVQUEvQixFQUEyQyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3hELFVBQUlDLE1BQU0sR0FBR3RCLEVBQUUsQ0FBQ3VCLElBQUgsQ0FBUSxRQUFSLENBQWI7QUFDQSxVQUFJQyxRQUFRLEdBQUdGLE1BQU0sQ0FBQ0csb0JBQVAsQ0FBNEJKLEtBQUssQ0FBQ0ssS0FBTixDQUFZQyxXQUFaLEVBQTVCLENBQWY7QUFDQVgsTUFBQUEsSUFBSSxDQUFDVCxTQUFMLENBQWVPLFFBQWYsR0FBMEJVLFFBQTFCO0FBQ0gsS0FKRCxFQUlHLElBSkgsRUFYSyxDQWdCTDtBQUNBO0FBQ0g7QUFoREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc3BpbmU6IGNjLk5vZGUsXG4gICAgICAgIGRyYWdvbjogY2MuTm9kZSxcbiAgICAgICAgYmlub2N1bGFyOiBjYy5Ob2RlLFxuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gYmFyOiB7XG4gICAgICAgIC8vICAgICBnZXQgKCkge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyh0cnVlKTtcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBjYy50d2Vlbih0aGlzLnNwaW5lKVxuICAgICAgICAgICAgLmJ5KDE1LCB7IHBvc2l0aW9uOiBjYy52Mig5MDAsIDApIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICBjYy50d2Vlbih0aGlzLmRyYWdvbilcbiAgICAgICAgICAgIC5ieSgyMCwgeyBwb3NpdGlvbjogY2MudjIoMTEwMCwgMCkgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLl90b3VjaFN0YXJ0Q2FsbGJhY2ssIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcbiAgICAgICAgICAgIHZhciBsb2NhdGlvbiA9IGNhbnZhcy5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC50b3VjaC5nZXRMb2NhdGlvbigpKTtcbiAgICAgICAgICAgIHNlbGYuYmlub2N1bGFyLnBvc2l0aW9uID0gbG9jYXRpb247XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAvLyB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLl90b3VjaEVuZENhbGxiYWNrLCB0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5fdG91Y2hDYW5jZWxDYWxsYmFjaywgdGhpcyk7XG4gICAgfVxufSk7XG4iXX0=
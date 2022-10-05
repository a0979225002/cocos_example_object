
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/demo/FoWTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '894c5cmPJdKjY/iavFrHK6D', 'FoWTest');
// scripts/demo/FoWTest.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    fow: cc.Node
  },
  onLoad: function onLoad() {
    cc.debug.setDisplayStats(true);
  },
  start: function start() {
    var self = this;
    this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
      var touches = event.getTouches();
      var touchLoc = touches[0].getLocation();
      self.fow.getComponent("SSRFoWComponent").updateFog(self.fow.convertToNodeSpaceAR(touchLoc));
    }, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      var touches = event.getTouches();
      var touchLoc = touches[0].getLocation();
      self.fow.getComponent("SSRFoWComponent").updateFog(self.fow.convertToNodeSpaceAR(touchLoc));
    }, this);
    this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
      var touches = event.getTouches();
      var touchLoc = touches[0].getLocation();
      self.fow.getComponent("SSRFoWComponent").updateFog(self.fow.convertToNodeSpaceAR(touchLoc));
    }, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {}, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZGVtb1xcRm9XVGVzdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImZvdyIsIk5vZGUiLCJvbkxvYWQiLCJkZWJ1ZyIsInNldERpc3BsYXlTdGF0cyIsInN0YXJ0Iiwic2VsZiIsIm5vZGUiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiZXZlbnQiLCJ0b3VjaGVzIiwiZ2V0VG91Y2hlcyIsInRvdWNoTG9jIiwiZ2V0TG9jYXRpb24iLCJnZXRDb21wb25lbnQiLCJ1cGRhdGVGb2ciLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsIlRPVUNIX01PVkUiLCJUT1VDSF9FTkQiLCJUT1VDSF9DQU5DRUwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxHQUFHLEVBQUVKLEVBQUUsQ0FBQ0s7QUFEQSxHQUhQO0FBT0xDLEVBQUFBLE1BUEssb0JBT0s7QUFDTk4sSUFBQUEsRUFBRSxDQUFDTyxLQUFILENBQVNDLGVBQVQsQ0FBeUIsSUFBekI7QUFDSCxHQVRJO0FBV0xDLEVBQUFBLEtBWEssbUJBV0k7QUFDTCxRQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUNBLFNBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhWixFQUFFLENBQUNLLElBQUgsQ0FBUVEsU0FBUixDQUFrQkMsV0FBL0IsRUFBNEMsVUFBVUMsS0FBVixFQUFpQjtBQUN6RCxVQUFJQyxPQUFPLEdBQUdELEtBQUssQ0FBQ0UsVUFBTixFQUFkO0FBQ0EsVUFBSUMsUUFBUSxHQUFHRixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdHLFdBQVgsRUFBZjtBQUNBVCxNQUFBQSxJQUFJLENBQUNOLEdBQUwsQ0FBU2dCLFlBQVQsQ0FBc0IsaUJBQXRCLEVBQXlDQyxTQUF6QyxDQUFtRFgsSUFBSSxDQUFDTixHQUFMLENBQVNrQixvQkFBVCxDQUE4QkosUUFBOUIsQ0FBbkQ7QUFDSCxLQUpELEVBSUcsSUFKSDtBQUtBLFNBQUtQLElBQUwsQ0FBVUMsRUFBVixDQUFhWixFQUFFLENBQUNLLElBQUgsQ0FBUVEsU0FBUixDQUFrQlUsVUFBL0IsRUFBMkMsVUFBVVIsS0FBVixFQUFpQjtBQUN4RCxVQUFJQyxPQUFPLEdBQUdELEtBQUssQ0FBQ0UsVUFBTixFQUFkO0FBQ0EsVUFBSUMsUUFBUSxHQUFHRixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdHLFdBQVgsRUFBZjtBQUNBVCxNQUFBQSxJQUFJLENBQUNOLEdBQUwsQ0FBU2dCLFlBQVQsQ0FBc0IsaUJBQXRCLEVBQXlDQyxTQUF6QyxDQUFtRFgsSUFBSSxDQUFDTixHQUFMLENBQVNrQixvQkFBVCxDQUE4QkosUUFBOUIsQ0FBbkQ7QUFDSCxLQUpELEVBSUcsSUFKSDtBQUtBLFNBQUtQLElBQUwsQ0FBVUMsRUFBVixDQUFhWixFQUFFLENBQUNLLElBQUgsQ0FBUVEsU0FBUixDQUFrQlcsU0FBL0IsRUFBMEMsVUFBVVQsS0FBVixFQUFpQjtBQUN2RCxVQUFJQyxPQUFPLEdBQUdELEtBQUssQ0FBQ0UsVUFBTixFQUFkO0FBQ0EsVUFBSUMsUUFBUSxHQUFHRixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdHLFdBQVgsRUFBZjtBQUNBVCxNQUFBQSxJQUFJLENBQUNOLEdBQUwsQ0FBU2dCLFlBQVQsQ0FBc0IsaUJBQXRCLEVBQXlDQyxTQUF6QyxDQUFtRFgsSUFBSSxDQUFDTixHQUFMLENBQVNrQixvQkFBVCxDQUE4QkosUUFBOUIsQ0FBbkQ7QUFDSCxLQUpELEVBSUcsSUFKSDtBQUtBLFNBQUtQLElBQUwsQ0FBVUMsRUFBVixDQUFhWixFQUFFLENBQUNLLElBQUgsQ0FBUVEsU0FBUixDQUFrQlksWUFBL0IsRUFBNkMsVUFBVVYsS0FBVixFQUFpQixDQUM3RCxDQURELEVBQ0csSUFESDtBQUVIO0FBOUJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZm93OiBjYy5Ob2RlXG4gICAgfSxcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIGNjLmRlYnVnLnNldERpc3BsYXlTdGF0cyh0cnVlKTtcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgdG91Y2hlcyA9IGV2ZW50LmdldFRvdWNoZXMoKTtcbiAgICAgICAgICAgIHZhciB0b3VjaExvYyA9IHRvdWNoZXNbMF0uZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgIHNlbGYuZm93LmdldENvbXBvbmVudChcIlNTUkZvV0NvbXBvbmVudFwiKS51cGRhdGVGb2coc2VsZi5mb3cuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2hMb2MpKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciB0b3VjaGVzID0gZXZlbnQuZ2V0VG91Y2hlcygpO1xuICAgICAgICAgICAgdmFyIHRvdWNoTG9jID0gdG91Y2hlc1swXS5nZXRMb2NhdGlvbigpO1xuICAgICAgICAgICAgc2VsZi5mb3cuZ2V0Q29tcG9uZW50KFwiU1NSRm9XQ29tcG9uZW50XCIpLnVwZGF0ZUZvZyhzZWxmLmZvdy5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0b3VjaExvYykpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgdG91Y2hlcyA9IGV2ZW50LmdldFRvdWNoZXMoKTtcbiAgICAgICAgICAgIHZhciB0b3VjaExvYyA9IHRvdWNoZXNbMF0uZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgIHNlbGYuZm93LmdldENvbXBvbmVudChcIlNTUkZvV0NvbXBvbmVudFwiKS51cGRhdGVGb2coc2VsZi5mb3cuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2hMb2MpKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG59KTtcbiJdfQ==
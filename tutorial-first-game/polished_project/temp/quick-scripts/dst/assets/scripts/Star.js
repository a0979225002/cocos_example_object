
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '21890Xr4RBJlqTJhmXJ/f5s', 'Star');
// scripts/Star.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    // 星星和主角之间的距离小于这个数值时，就会完成收集
    pickRadius: 0
  },
  onLoad: function onLoad() {
    this.enabled = false;
  },
  // use this for initialization
  init: function init(game) {
    this.game = game;
    this.enabled = true;
    this.node.opacity = 255;
  },
  reuse: function reuse(game) {
    this.init(game);
  },
  getPlayerDistance: function getPlayerDistance() {
    // 根据 player 节点位置判断距离
    var playerPos = this.game.player.getCenterPos(); // 根据两点位置计算两点之间距离

    var dist = this.node.position.sub(playerPos).mag();
    return dist;
  },
  onPicked: function onPicked() {
    var pos = this.node.getPosition(); // 调用 Game 脚本的得分方法

    this.game.gainScore(pos); // 当星星被收集时，调用 Game 脚本中的接口，销毁当前星星节点，生成一个新的星星

    this.game.despawnStar(this.node);
  },
  // called every frame
  update: function update(dt) {
    // 每帧判断和主角之间的距离是否小于收集距离
    if (this.getPlayerDistance() < this.pickRadius) {
      // 调用收集行为
      this.onPicked();
      return;
    } // 根据 Game 脚本中的计时器更新星星的透明度


    var opacityRatio = 1 - this.game.timer / this.game.starDuration;
    var minOpacity = 50;
    this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU3Rhci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBpY2tSYWRpdXMiLCJvbkxvYWQiLCJlbmFibGVkIiwiaW5pdCIsImdhbWUiLCJub2RlIiwib3BhY2l0eSIsInJldXNlIiwiZ2V0UGxheWVyRGlzdGFuY2UiLCJwbGF5ZXJQb3MiLCJwbGF5ZXIiLCJnZXRDZW50ZXJQb3MiLCJkaXN0IiwicG9zaXRpb24iLCJzdWIiLCJtYWciLCJvblBpY2tlZCIsInBvcyIsImdldFBvc2l0aW9uIiwiZ2FpblNjb3JlIiwiZGVzcGF3blN0YXIiLCJ1cGRhdGUiLCJkdCIsIm9wYWNpdHlSYXRpbyIsInRpbWVyIiwic3RhckR1cmF0aW9uIiwibWluT3BhY2l0eSIsIk1hdGgiLCJmbG9vciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQUMsSUFBQUEsVUFBVSxFQUFFO0FBRkosR0FIUDtBQVFMQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEIsU0FBS0MsT0FBTCxHQUFlLEtBQWY7QUFDSCxHQVZJO0FBWUw7QUFDQUMsRUFBQUEsSUFBSSxFQUFFLGNBQVVDLElBQVYsRUFBZ0I7QUFDbEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0YsT0FBTCxHQUFlLElBQWY7QUFDQSxTQUFLRyxJQUFMLENBQVVDLE9BQVYsR0FBb0IsR0FBcEI7QUFDSCxHQWpCSTtBQW1CTEMsRUFBQUEsS0FuQkssaUJBbUJFSCxJQW5CRixFQW1CUTtBQUNULFNBQUtELElBQUwsQ0FBVUMsSUFBVjtBQUNILEdBckJJO0FBdUJMSSxFQUFBQSxpQkFBaUIsRUFBRSw2QkFBWTtBQUMzQjtBQUNBLFFBQUlDLFNBQVMsR0FBRyxLQUFLTCxJQUFMLENBQVVNLE1BQVYsQ0FBaUJDLFlBQWpCLEVBQWhCLENBRjJCLENBRzNCOztBQUNBLFFBQUlDLElBQUksR0FBRyxLQUFLUCxJQUFMLENBQVVRLFFBQVYsQ0FBbUJDLEdBQW5CLENBQXVCTCxTQUF2QixFQUFrQ00sR0FBbEMsRUFBWDtBQUNBLFdBQU9ILElBQVA7QUFDSCxHQTdCSTtBQStCTEksRUFBQUEsUUFBUSxFQUFFLG9CQUFXO0FBQ2pCLFFBQUlDLEdBQUcsR0FBRyxLQUFLWixJQUFMLENBQVVhLFdBQVYsRUFBVixDQURpQixDQUVqQjs7QUFDQSxTQUFLZCxJQUFMLENBQVVlLFNBQVYsQ0FBb0JGLEdBQXBCLEVBSGlCLENBSWpCOztBQUNBLFNBQUtiLElBQUwsQ0FBVWdCLFdBQVYsQ0FBc0IsS0FBS2YsSUFBM0I7QUFDSCxHQXJDSTtBQXVDTDtBQUNBZ0IsRUFBQUEsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWM7QUFDbEI7QUFDQSxRQUFJLEtBQUtkLGlCQUFMLEtBQTJCLEtBQUtSLFVBQXBDLEVBQWdEO0FBQzVDO0FBQ0EsV0FBS2dCLFFBQUw7QUFDQTtBQUNILEtBTmlCLENBT2xCOzs7QUFDQSxRQUFJTyxZQUFZLEdBQUcsSUFBSSxLQUFLbkIsSUFBTCxDQUFVb0IsS0FBVixHQUFnQixLQUFLcEIsSUFBTCxDQUFVcUIsWUFBakQ7QUFDQSxRQUFJQyxVQUFVLEdBQUcsRUFBakI7QUFDQSxTQUFLckIsSUFBTCxDQUFVQyxPQUFWLEdBQW9Cb0IsVUFBVSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsWUFBWSxJQUFJLE1BQU1HLFVBQVYsQ0FBdkIsQ0FBakM7QUFDSDtBQW5ESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIOaYn+aYn+WSjOS4u+inkuS5i+mXtOeahOi3neemu+Wwj+S6jui/meS4quaVsOWAvOaXtu+8jOWwseS8muWujOaIkOaUtumbhlxyXG4gICAgICAgIHBpY2tSYWRpdXM6IDAsXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIGluaXQ6IGZ1bmN0aW9uIChnYW1lKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgfSxcclxuXHJcbiAgICByZXVzZSAoZ2FtZSkge1xyXG4gICAgICAgIHRoaXMuaW5pdChnYW1lKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0UGxheWVyRGlzdGFuY2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyDmoLnmja4gcGxheWVyIOiKgueCueS9jee9ruWIpOaWrei3neemu1xyXG4gICAgICAgIHZhciBwbGF5ZXJQb3MgPSB0aGlzLmdhbWUucGxheWVyLmdldENlbnRlclBvcygpO1xyXG4gICAgICAgIC8vIOagueaNruS4pOeCueS9jee9ruiuoeeul+S4pOeCueS5i+mXtOi3neemu1xyXG4gICAgICAgIHZhciBkaXN0ID0gdGhpcy5ub2RlLnBvc2l0aW9uLnN1YihwbGF5ZXJQb3MpLm1hZygpO1xyXG4gICAgICAgIHJldHVybiBkaXN0O1xyXG4gICAgfSxcclxuXHJcbiAgICBvblBpY2tlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIC8vIOiwg+eUqCBHYW1lIOiEmuacrOeahOW+l+WIhuaWueazlVxyXG4gICAgICAgIHRoaXMuZ2FtZS5nYWluU2NvcmUocG9zKTtcclxuICAgICAgICAvLyDlvZPmmJ/mmJ/ooqvmlLbpm4bml7bvvIzosIPnlKggR2FtZSDohJrmnKzkuK3nmoTmjqXlj6PvvIzplIDmr4HlvZPliY3mmJ/mmJ/oioLngrnvvIznlJ/miJDkuIDkuKrmlrDnmoTmmJ/mmJ9cclxuICAgICAgICB0aGlzLmdhbWUuZGVzcGF3blN0YXIodGhpcy5ub2RlKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgIC8vIOavj+W4p+WIpOaWreWSjOS4u+inkuS5i+mXtOeahOi3neemu+aYr+WQpuWwj+S6juaUtumbhui3neemu1xyXG4gICAgICAgIGlmICh0aGlzLmdldFBsYXllckRpc3RhbmNlKCkgPCB0aGlzLnBpY2tSYWRpdXMpIHtcclxuICAgICAgICAgICAgLy8g6LCD55So5pS26ZuG6KGM5Li6XHJcbiAgICAgICAgICAgIHRoaXMub25QaWNrZWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDmoLnmja4gR2FtZSDohJrmnKzkuK3nmoTorqHml7blmajmm7TmlrDmmJ/mmJ/nmoTpgI/mmI7luqZcclxuICAgICAgICB2YXIgb3BhY2l0eVJhdGlvID0gMSAtIHRoaXMuZ2FtZS50aW1lci90aGlzLmdhbWUuc3RhckR1cmF0aW9uO1xyXG4gICAgICAgIHZhciBtaW5PcGFjaXR5ID0gNTA7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSBtaW5PcGFjaXR5ICsgTWF0aC5mbG9vcihvcGFjaXR5UmF0aW8gKiAoMjU1IC0gbWluT3BhY2l0eSkpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
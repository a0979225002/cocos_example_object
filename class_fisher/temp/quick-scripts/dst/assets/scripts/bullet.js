
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/bullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'abc9cdcjp1IE4Q59dTt8ZjM', 'bullet');
// scripts/bullet.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    degree: 45,
    speed: 600,
    play_onload: false
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    if (this.play_onload) {
      this.shoot(this.degree, this.speed);
    }
  },
  shoot: function shoot(degree, speed) {
    this.degree = degree;
    this.speed = speed;
    var r = this.degree / 180 * Math.PI;
    this.vx = this.speed * Math.cos(r);
    this.vy = this.speed * Math.sin(r);
    this.node.angle = this.degree - 90;
  },
  update: function update(dt) {
    var sx = this.vx * dt;
    var sy = this.vy * dt;
    this.node.x += sx;
    this.node.y += sy;

    if (this.node.x < -cc.winSize.width * 0.5 || this.node.x > cc.winSize.width * 0.5 || this.node.y < -cc.winSize.height * 0.5 || this.node.y > cc.winSize.height * 0.5) {
      console.log("delete");
      this.node.removeFromParent();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYnVsbGV0LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGVncmVlIiwic3BlZWQiLCJwbGF5X29ubG9hZCIsInN0YXJ0Iiwic2hvb3QiLCJyIiwiTWF0aCIsIlBJIiwidngiLCJjb3MiLCJ2eSIsInNpbiIsIm5vZGUiLCJhbmdsZSIsInVwZGF0ZSIsImR0Iiwic3giLCJzeSIsIngiLCJ5Iiwid2luU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiY29uc29sZSIsImxvZyIsInJlbW92ZUZyb21QYXJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxNQUFNLEVBQUUsRUFEQTtBQUVSQyxJQUFBQSxLQUFLLEVBQUUsR0FGQztBQUlSQyxJQUFBQSxXQUFXLEVBQUU7QUFKTCxHQUhQO0FBVUw7QUFFQTtBQUVBQyxFQUFBQSxLQWRLLG1CQWNJO0FBRUwsUUFBSSxLQUFLRCxXQUFULEVBQXNCO0FBQ2xCLFdBQUtFLEtBQUwsQ0FBVyxLQUFLSixNQUFoQixFQUF3QixLQUFLQyxLQUE3QjtBQUNIO0FBQ0osR0FuQkk7QUFxQkxHLEVBQUFBLEtBckJLLGlCQXFCQ0osTUFyQkQsRUFxQlNDLEtBckJULEVBcUJnQjtBQUNqQixTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFFQSxRQUFJSSxDQUFDLEdBQUksS0FBS0wsTUFBTCxHQUFjLEdBQWYsR0FBc0JNLElBQUksQ0FBQ0MsRUFBbkM7QUFDQSxTQUFLQyxFQUFMLEdBQVUsS0FBS1AsS0FBTCxHQUFhSyxJQUFJLENBQUNHLEdBQUwsQ0FBU0osQ0FBVCxDQUF2QjtBQUNBLFNBQUtLLEVBQUwsR0FBVSxLQUFLVCxLQUFMLEdBQWFLLElBQUksQ0FBQ0ssR0FBTCxDQUFTTixDQUFULENBQXZCO0FBRUEsU0FBS08sSUFBTCxDQUFVQyxLQUFWLEdBQWtCLEtBQUtiLE1BQUwsR0FBYyxFQUFoQztBQUNILEdBOUJJO0FBZ0NMYyxFQUFBQSxNQWhDSyxrQkFnQ0dDLEVBaENILEVBZ0NPO0FBQ1IsUUFBSUMsRUFBRSxHQUFHLEtBQUtSLEVBQUwsR0FBVU8sRUFBbkI7QUFDQSxRQUFJRSxFQUFFLEdBQUcsS0FBS1AsRUFBTCxHQUFVSyxFQUFuQjtBQUVBLFNBQUtILElBQUwsQ0FBVU0sQ0FBVixJQUFlRixFQUFmO0FBQ0EsU0FBS0osSUFBTCxDQUFVTyxDQUFWLElBQWVGLEVBQWY7O0FBRUEsUUFBSSxLQUFLTCxJQUFMLENBQVVNLENBQVYsR0FBYyxDQUFDdEIsRUFBRSxDQUFDd0IsT0FBSCxDQUFXQyxLQUFaLEdBQW9CLEdBQWxDLElBQ0EsS0FBS1QsSUFBTCxDQUFVTSxDQUFWLEdBQWN0QixFQUFFLENBQUN3QixPQUFILENBQVdDLEtBQVgsR0FBbUIsR0FEakMsSUFFQSxLQUFLVCxJQUFMLENBQVVPLENBQVYsR0FBYyxDQUFDdkIsRUFBRSxDQUFDd0IsT0FBSCxDQUFXRSxNQUFaLEdBQXFCLEdBRm5DLElBR0EsS0FBS1YsSUFBTCxDQUFVTyxDQUFWLEdBQWN2QixFQUFFLENBQUN3QixPQUFILENBQVdFLE1BQVgsR0FBb0IsR0FIdEMsRUFHMkM7QUFDdkNDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQSxXQUFLWixJQUFMLENBQVVhLGdCQUFWO0FBQ0g7QUFDSjtBQTlDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGRlZ3JlZTogNDUsXHJcbiAgICAgICAgc3BlZWQ6IDYwMCxcclxuXHJcbiAgICAgICAgcGxheV9vbmxvYWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wbGF5X29ubG9hZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob290KHRoaXMuZGVncmVlLCB0aGlzLnNwZWVkKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNob290KGRlZ3JlZSwgc3BlZWQpIHtcclxuICAgICAgICB0aGlzLmRlZ3JlZSA9IGRlZ3JlZTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcblxyXG4gICAgICAgIHZhciByID0gKHRoaXMuZGVncmVlIC8gMTgwKSAqIE1hdGguUEk7XHJcbiAgICAgICAgdGhpcy52eCA9IHRoaXMuc3BlZWQgKiBNYXRoLmNvcyhyKTtcclxuICAgICAgICB0aGlzLnZ5ID0gdGhpcy5zcGVlZCAqIE1hdGguc2luKHIpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSB0aGlzLmRlZ3JlZSAtIDkwO1xyXG4gICAgfSwgXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIHZhciBzeCA9IHRoaXMudnggKiBkdDtcclxuICAgICAgICB2YXIgc3kgPSB0aGlzLnZ5ICogZHQ7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IHN4O1xyXG4gICAgICAgIHRoaXMubm9kZS55ICs9IHN5O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ub2RlLnggPCAtY2Mud2luU2l6ZS53aWR0aCAqIDAuNSB8fCBcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggPiBjYy53aW5TaXplLndpZHRoICogMC41IHx8XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55IDwgLWNjLndpblNpemUuaGVpZ2h0ICogMC41IHx8XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55ID4gY2Mud2luU2l6ZS5oZWlnaHQgKiAwLjUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkZWxldGVcIik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/cannon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'acbe68HfShFYbhiWLurk/Li', 'cannon');
// scripts/cannon.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    target: {
      type: cc.Node,
      "default": null
    },
    bullet_prefab: {
      type: cc.Prefab,
      "default": null
    },
    bullet_root: {
      type: cc.Node,
      "default": null
    },
    shoot_time: 0.2 // 每隔0.2秒发射一颗;

  },
  start: function start() {
    // this this.node ---> 
    this.now_time = this.shoot_time;
  },
  // 发射一颗子弹, 
  do_shoot: function do_shoot() {
    if (this.target === null) {
      return;
    }

    var dst = this.target.getComponent("nav_agent").get_next_point(); // var dst = this.target.getPosition();

    var src = this.node.getPosition();
    var dir = dst.sub(src); // dir 炮台的方向;

    var r = Math.atan2(dir.y, dir.x);
    var degree = r * 180 / Math.PI;
    var bullet = cc.instantiate(this.bullet_prefab);
    this.bullet_root.addChild(bullet);
    bullet.setPosition(src);
    bullet.getComponent("bullet").shoot(degree, 800);
  },
  update: function update(dt) {
    if (this.target === null) {
      return;
    } // 数学不好能否学会;  初中数学, 


    var src = this.node.getPosition(); // 炮的位置;

    var dst = this.target.getPosition();
    var dir = dst.sub(src); // dir 炮台的方向;

    var r = Math.atan2(dir.y, dir.x);
    var degree = r * 180 / Math.PI;
    this.node.angle = degree - 90;
    this.now_time += dt;

    if (this.now_time >= this.shoot_time) {
      this.now_time = 0;
      this.do_shoot();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY2Fubm9uLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGFyZ2V0IiwidHlwZSIsIk5vZGUiLCJidWxsZXRfcHJlZmFiIiwiUHJlZmFiIiwiYnVsbGV0X3Jvb3QiLCJzaG9vdF90aW1lIiwic3RhcnQiLCJub3dfdGltZSIsImRvX3Nob290IiwiZHN0IiwiZ2V0Q29tcG9uZW50IiwiZ2V0X25leHRfcG9pbnQiLCJzcmMiLCJub2RlIiwiZ2V0UG9zaXRpb24iLCJkaXIiLCJzdWIiLCJyIiwiTWF0aCIsImF0YW4yIiwieSIsIngiLCJkZWdyZWUiLCJQSSIsImJ1bGxldCIsImluc3RhbnRpYXRlIiwiYWRkQ2hpbGQiLCJzZXRQb3NpdGlvbiIsInNob290IiwidXBkYXRlIiwiZHQiLCJhbmdsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBRTtBQUNKQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sSUFETDtBQUVKLGlCQUFTO0FBRkwsS0FEQTtBQU1SQyxJQUFBQSxhQUFhLEVBQUU7QUFDWEYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNRLE1BREU7QUFFWCxpQkFBUztBQUZFLEtBTlA7QUFXUkMsSUFBQUEsV0FBVyxFQUFFO0FBQ1RKLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxJQURBO0FBRVQsaUJBQVM7QUFGQSxLQVhMO0FBZ0JSSSxJQUFBQSxVQUFVLEVBQUUsR0FoQkosQ0FnQlM7O0FBaEJULEdBSFA7QUFzQkxDLEVBQUFBLEtBdEJLLG1CQXNCSTtBQUNMO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFLRixVQUFyQjtBQUNILEdBekJJO0FBMkJMO0FBQ0FHLEVBQUFBLFFBNUJLLHNCQTRCTTtBQUNQLFFBQUksS0FBS1QsTUFBTCxLQUFnQixJQUFwQixFQUEwQjtBQUN0QjtBQUNIOztBQUVELFFBQUlVLEdBQUcsR0FBRyxLQUFLVixNQUFMLENBQVlXLFlBQVosQ0FBeUIsV0FBekIsRUFBc0NDLGNBQXRDLEVBQVYsQ0FMTyxDQU1QOztBQUNBLFFBQUlDLEdBQUcsR0FBRyxLQUFLQyxJQUFMLENBQVVDLFdBQVYsRUFBVjtBQUVBLFFBQUlDLEdBQUcsR0FBR04sR0FBRyxDQUFDTyxHQUFKLENBQVFKLEdBQVIsQ0FBVixDQVRPLENBU2lCOztBQUN4QixRQUFJSyxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixHQUFHLENBQUNLLENBQWYsRUFBa0JMLEdBQUcsQ0FBQ00sQ0FBdEIsQ0FBUjtBQUNBLFFBQUlDLE1BQU0sR0FBR0wsQ0FBQyxHQUFHLEdBQUosR0FBVUMsSUFBSSxDQUFDSyxFQUE1QjtBQUVBLFFBQUlDLE1BQU0sR0FBRzdCLEVBQUUsQ0FBQzhCLFdBQUgsQ0FBZSxLQUFLdkIsYUFBcEIsQ0FBYjtBQUNBLFNBQUtFLFdBQUwsQ0FBaUJzQixRQUFqQixDQUEwQkYsTUFBMUI7QUFDQUEsSUFBQUEsTUFBTSxDQUFDRyxXQUFQLENBQW1CZixHQUFuQjtBQUVBWSxJQUFBQSxNQUFNLENBQUNkLFlBQVAsQ0FBb0IsUUFBcEIsRUFBOEJrQixLQUE5QixDQUFvQ04sTUFBcEMsRUFBNEMsR0FBNUM7QUFDSCxHQTlDSTtBQWdETE8sRUFBQUEsTUFoREssa0JBZ0RHQyxFQWhESCxFQWdETztBQUNSLFFBQUksS0FBSy9CLE1BQUwsS0FBZ0IsSUFBcEIsRUFBMEI7QUFDdEI7QUFDSCxLQUhPLENBS1I7OztBQUNBLFFBQUlhLEdBQUcsR0FBRyxLQUFLQyxJQUFMLENBQVVDLFdBQVYsRUFBVixDQU5RLENBTTJCOztBQUNuQyxRQUFJTCxHQUFHLEdBQUcsS0FBS1YsTUFBTCxDQUFZZSxXQUFaLEVBQVY7QUFDQSxRQUFJQyxHQUFHLEdBQUdOLEdBQUcsQ0FBQ08sR0FBSixDQUFRSixHQUFSLENBQVYsQ0FSUSxDQVFnQjs7QUFDeEIsUUFBSUssQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osR0FBRyxDQUFDSyxDQUFmLEVBQWtCTCxHQUFHLENBQUNNLENBQXRCLENBQVI7QUFDQSxRQUFJQyxNQUFNLEdBQUdMLENBQUMsR0FBRyxHQUFKLEdBQVVDLElBQUksQ0FBQ0ssRUFBNUI7QUFFQSxTQUFLVixJQUFMLENBQVVrQixLQUFWLEdBQWtCVCxNQUFNLEdBQUcsRUFBM0I7QUFFQSxTQUFLZixRQUFMLElBQWlCdUIsRUFBakI7O0FBQ0EsUUFBSSxLQUFLdkIsUUFBTCxJQUFpQixLQUFLRixVQUExQixFQUFzQztBQUNsQyxXQUFLRSxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsV0FBS0MsUUFBTDtBQUNIO0FBQ0o7QUFuRUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYnVsbGV0X3ByZWZhYjoge1xyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYnVsbGV0X3Jvb3Q6IHtcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzaG9vdF90aW1lOiAwLjIsIC8vIOavj+malDAuMuenkuWPkeWwhOS4gOmilztcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIHRoaXMgdGhpcy5ub2RlIC0tLT4gXHJcbiAgICAgICAgdGhpcy5ub3dfdGltZSA9IHRoaXMuc2hvb3RfdGltZTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8g5Y+R5bCE5LiA6aKX5a2Q5by5LCBcclxuICAgIGRvX3Nob290KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRhcmdldCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZHN0ID0gdGhpcy50YXJnZXQuZ2V0Q29tcG9uZW50KFwibmF2X2FnZW50XCIpLmdldF9uZXh0X3BvaW50KCk7XHJcbiAgICAgICAgLy8gdmFyIGRzdCA9IHRoaXMudGFyZ2V0LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgdmFyIHNyYyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICB2YXIgZGlyID0gZHN0LnN1YihzcmMpOyAvLyBkaXIg54Ku5Y+w55qE5pa55ZCRO1xyXG4gICAgICAgIHZhciByID0gTWF0aC5hdGFuMihkaXIueSwgZGlyLngpOyBcclxuICAgICAgICB2YXIgZGVncmVlID0gciAqIDE4MCAvIE1hdGguUEk7IFxyXG5cclxuICAgICAgICB2YXIgYnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXRfcHJlZmFiKTtcclxuICAgICAgICB0aGlzLmJ1bGxldF9yb290LmFkZENoaWxkKGJ1bGxldCk7XHJcbiAgICAgICAgYnVsbGV0LnNldFBvc2l0aW9uKHNyYyk7XHJcblxyXG4gICAgICAgIGJ1bGxldC5nZXRDb21wb25lbnQoXCJidWxsZXRcIikuc2hvb3QoZGVncmVlLCA4MDApO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOaVsOWtpuS4jeWlveiDveWQpuWtpuS8mjsgIOWIneS4reaVsOWtpiwgXHJcbiAgICAgICAgdmFyIHNyYyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpOyAvLyDngq7nmoTkvY3nva47XHJcbiAgICAgICAgdmFyIGRzdCA9IHRoaXMudGFyZ2V0LmdldFBvc2l0aW9uKCk7IFxyXG4gICAgICAgIHZhciBkaXIgPSBkc3Quc3ViKHNyYyk7IC8vIGRpciDngq7lj7DnmoTmlrnlkJE7XHJcbiAgICAgICAgdmFyIHIgPSBNYXRoLmF0YW4yKGRpci55LCBkaXIueCk7IFxyXG4gICAgICAgIHZhciBkZWdyZWUgPSByICogMTgwIC8gTWF0aC5QSTsgXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IGRlZ3JlZSAtIDkwO1xyXG5cclxuICAgICAgICB0aGlzLm5vd190aW1lICs9IGR0O1xyXG4gICAgICAgIGlmICh0aGlzLm5vd190aW1lID49IHRoaXMuc2hvb3RfdGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vd190aW1lID0gMDtcclxuICAgICAgICAgICAgdGhpcy5kb19zaG9vdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
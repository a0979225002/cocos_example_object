
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/nav_agent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d4683+gaZJKIT/Pv2z85pZ', 'nav_agent');
// scripts/nav_agent.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var fish_map = require("fish_map"); // 组件类,


cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
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
    map: {
      type: fish_map,
      "default": null
    },
    speed: 100
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  // start函数 组件开始运行之前，调用, 初始入口的好地方;
  start: function start() {
    this.run_road();
  },
  run_road: function run_road() {
    var road_set = this.map.get_road_set();
    var index = Math.random() * road_set.length;
    index = Math.floor(index);
    this.road_data = road_set[index]; // 假设从第0条;

    if (this.road_data.length < 2) {
      return;
    }

    this.is_walking = false;
    this.node.setPosition(this.road_data[0]);
    this.next_step = 1; // 下一个要走的路径点;

    if (this.road_data[0].x < this.road_data[this.road_data.length - 1].x) {
      this.node.scaleX = 1;
    } else {
      this.node.scaleX = -1;
    }

    this.walk_to_next();
  },
  get_next_point: function get_next_point() {
    if (this.next_step + 3 >= this.road_data.length) {
      return this.road_data[this.road_data.length - 1];
    }

    return this.road_data[this.next_step + 3];
  },
  walk_to_next: function walk_to_next() {
    if (this.next_step >= this.road_data.length) {
      this.is_walking = false;
      this.run_road();
      return;
    }

    this.is_walking = true;
    var src = this.node.getPosition();
    var dst = this.road_data[this.next_step];
    var dir = dst.sub(src);
    var len = dir.mag();
    this.total_time = len / this.speed;
    this.now_time = 0;
    this.vx = this.speed * dir.x / len;
    this.vy = this.speed * dir.y / len; // 旋转鱼头

    var r = Math.atan2(dir.y, dir.x); // 弧度

    var degree = r * 180 / Math.PI;
    degree = degree - 90; // 逆时针--> 顺时针

    this.node.angle = degree; // this.node.runAction(cc.rotateTo(0.5, degree));
    // end
  },
  // update 组件再游戏画面每次刷新的时候调用, update
  // dt: 是距离上一次过去刷新的时间;
  update: function update(dt) {
    if (this.is_walking === false) {
      return;
    }

    this.now_time += dt;

    if (this.now_time > this.total_time) {
      dt -= this.now_time - this.total_time;
    }

    var sx = this.vx * dt;
    var sy = this.vy * dt;
    this.node.x += sx;
    this.node.y += sy;

    if (this.now_time >= this.total_time) {
      this.next_step++;
      this.walk_to_next(); // 继续走下一个点;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbmF2X2FnZW50LmpzIl0sIm5hbWVzIjpbImZpc2hfbWFwIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibWFwIiwidHlwZSIsInNwZWVkIiwic3RhcnQiLCJydW5fcm9hZCIsInJvYWRfc2V0IiwiZ2V0X3JvYWRfc2V0IiwiaW5kZXgiLCJNYXRoIiwicmFuZG9tIiwibGVuZ3RoIiwiZmxvb3IiLCJyb2FkX2RhdGEiLCJpc193YWxraW5nIiwibm9kZSIsInNldFBvc2l0aW9uIiwibmV4dF9zdGVwIiwieCIsInNjYWxlWCIsIndhbGtfdG9fbmV4dCIsImdldF9uZXh0X3BvaW50Iiwic3JjIiwiZ2V0UG9zaXRpb24iLCJkc3QiLCJkaXIiLCJzdWIiLCJsZW4iLCJtYWciLCJ0b3RhbF90aW1lIiwibm93X3RpbWUiLCJ2eCIsInZ5IiwieSIsInIiLCJhdGFuMiIsImRlZ3JlZSIsIlBJIiwiYW5nbGUiLCJ1cGRhdGUiLCJkdCIsInN4Iiwic3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF0QixFQUNBOzs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLElBQUFBLEdBQUcsRUFBRTtBQUNEQyxNQUFBQSxJQUFJLEVBQUVQLFFBREw7QUFFRCxpQkFBUztBQUZSLEtBaEJHO0FBcUJSUSxJQUFBQSxLQUFLLEVBQUU7QUFyQkMsR0FIUDtBQTJCTDtBQUVBO0FBQ0E7QUFDQUMsRUFBQUEsS0EvQkssbUJB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QkYsTUFBbEIsQ0F0QlcsQ0F1Qlg7QUFDQTtBQUNILEdBekZJO0FBMkZMO0FBQ0E7QUFDQUcsRUFBQUEsTUE3Rkssa0JBNkZHQyxFQTdGSCxFQTZGTztBQUNSLFFBQUcsS0FBSzFCLFVBQUwsS0FBb0IsS0FBdkIsRUFBOEI7QUFDMUI7QUFDSDs7QUFFRCxTQUFLZ0IsUUFBTCxJQUFpQlUsRUFBakI7O0FBQ0EsUUFBSSxLQUFLVixRQUFMLEdBQWdCLEtBQUtELFVBQXpCLEVBQXFDO0FBQ2pDVyxNQUFBQSxFQUFFLElBQUssS0FBS1YsUUFBTCxHQUFnQixLQUFLRCxVQUE1QjtBQUNIOztBQUVELFFBQUlZLEVBQUUsR0FBRyxLQUFLVixFQUFMLEdBQVVTLEVBQW5CO0FBQ0EsUUFBSUUsRUFBRSxHQUFHLEtBQUtWLEVBQUwsR0FBVVEsRUFBbkI7QUFFQSxTQUFLekIsSUFBTCxDQUFVRyxDQUFWLElBQWV1QixFQUFmO0FBQ0EsU0FBSzFCLElBQUwsQ0FBVWtCLENBQVYsSUFBZVMsRUFBZjs7QUFFQSxRQUFJLEtBQUtaLFFBQUwsSUFBaUIsS0FBS0QsVUFBMUIsRUFBc0M7QUFDbEMsV0FBS1osU0FBTDtBQUNBLFdBQUtHLFlBQUwsR0FGa0MsQ0FFYjtBQUN4QjtBQUNKO0FBakhJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxudmFyIGZpc2hfbWFwID0gcmVxdWlyZShcImZpc2hfbWFwXCIpO1xyXG4vLyDnu4Tku7bnsbssXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYmFyOiB7XHJcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgbWFwOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IGZpc2hfbWFwLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNwZWVkOiAxMDAsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuICAgIC8vIHN0YXJ05Ye95pWwIOe7hOS7tuW8gOWni+i/kOihjOS5i+WJje+8jOiwg+eUqCwg5Yid5aeL5YWl5Y+j55qE5aW95Zyw5pa5O1xyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMucnVuX3JvYWQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgcnVuX3JvYWQoKSB7XHJcbiAgICAgICAgdmFyIHJvYWRfc2V0ID0gdGhpcy5tYXAuZ2V0X3JvYWRfc2V0KCk7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gTWF0aC5yYW5kb20oKSAqIHJvYWRfc2V0Lmxlbmd0aDtcclxuICAgICAgICBpbmRleCA9IE1hdGguZmxvb3IoaW5kZXgpO1xyXG4gICAgICAgIHRoaXMucm9hZF9kYXRhID0gcm9hZF9zZXRbaW5kZXhdOyAvLyDlgYforr7ku47nrKww5p2hO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5yb2FkX2RhdGEubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNfd2Fsa2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLnJvYWRfZGF0YVswXSk7XHJcbiAgICAgICAgdGhpcy5uZXh0X3N0ZXAgPSAxOyAvLyDkuIvkuIDkuKropoHotbDnmoTot6/lvoTngrk7XHJcbiAgICAgICAgaWYgKHRoaXMucm9hZF9kYXRhWzBdLnggPCB0aGlzLnJvYWRfZGF0YVt0aGlzLnJvYWRfZGF0YS5sZW5ndGggLSAxXS54KSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndhbGtfdG9fbmV4dCgpO1xyXG4gICAgfSwgXHJcblxyXG4gICAgZ2V0X25leHRfcG9pbnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubmV4dF9zdGVwICsgMyA+PSB0aGlzLnJvYWRfZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9hZF9kYXRhW3RoaXMucm9hZF9kYXRhLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm9hZF9kYXRhW3RoaXMubmV4dF9zdGVwICsgM107XHJcbiAgICB9LFxyXG5cclxuICAgIHdhbGtfdG9fbmV4dCgpIHtcclxuICAgICAgICBpZiAodGhpcy5uZXh0X3N0ZXAgPj0gdGhpcy5yb2FkX2RhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNfd2Fsa2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnJ1bl9yb2FkKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNfd2Fsa2luZyA9IHRydWU7XHJcbiAgICAgICAgdmFyIHNyYyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHZhciBkc3QgPSB0aGlzLnJvYWRfZGF0YVt0aGlzLm5leHRfc3RlcF07XHJcbiAgICAgICAgdmFyIGRpciA9IGRzdC5zdWIoc3JjKTtcclxuICAgICAgICB2YXIgbGVuID0gZGlyLm1hZygpO1xyXG5cclxuICAgICAgICB0aGlzLnRvdGFsX3RpbWUgPSBsZW4gLyB0aGlzLnNwZWVkO1xyXG4gICAgICAgIHRoaXMubm93X3RpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMudnggPSB0aGlzLnNwZWVkICogZGlyLnggLyBsZW47XHJcbiAgICAgICAgdGhpcy52eSA9IHRoaXMuc3BlZWQgKiBkaXIueSAvIGxlbjtcclxuXHJcbiAgICAgICAgLy8g5peL6L2s6bG85aS0XHJcbiAgICAgICAgdmFyIHIgPSBNYXRoLmF0YW4yKGRpci55LCBkaXIueCk7IC8vIOW8p+W6plxyXG4gICAgICAgIHZhciBkZWdyZWUgPSByICogMTgwIC8gTWF0aC5QSTtcclxuICAgICAgICBkZWdyZWUgPSBkZWdyZWUgLSA5MDsgLy8g6YCG5pe26ZKILS0+IOmhuuaXtumSiFxyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IGRlZ3JlZTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnJvdGF0ZVRvKDAuNSwgZGVncmVlKSk7XHJcbiAgICAgICAgLy8gZW5kXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSDnu4Tku7blho3muLjmiI/nlLvpnaLmr4/mrKHliLfmlrDnmoTml7blgJnosIPnlKgsIHVwZGF0ZVxyXG4gICAgLy8gZHQ6IOaYr+i3neemu+S4iuS4gOasoei/h+WOu+WIt+aWsOeahOaXtumXtDtcclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZih0aGlzLmlzX3dhbGtpbmcgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubm93X3RpbWUgKz0gZHQ7XHJcbiAgICAgICAgaWYgKHRoaXMubm93X3RpbWUgPiB0aGlzLnRvdGFsX3RpbWUpIHtcclxuICAgICAgICAgICAgZHQgLT0gKHRoaXMubm93X3RpbWUgLSB0aGlzLnRvdGFsX3RpbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHN4ID0gdGhpcy52eCAqIGR0O1xyXG4gICAgICAgIHZhciBzeSA9IHRoaXMudnkgKiBkdDtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gc3g7XHJcbiAgICAgICAgdGhpcy5ub2RlLnkgKz0gc3k7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5vd190aW1lID49IHRoaXMudG90YWxfdGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLm5leHRfc3RlcCArKztcclxuICAgICAgICAgICAgdGhpcy53YWxrX3RvX25leHQoKTsgLy8g57un57ut6LWw5LiL5LiA5Liq54K5O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
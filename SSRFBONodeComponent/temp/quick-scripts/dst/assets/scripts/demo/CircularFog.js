
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/demo/CircularFog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c49c0OhGv1L+agzoM2zMTuo', 'CircularFog');
// scripts/demo/CircularFog.js

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
    dragon: cc.Node
  },
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
  },
  update: function update(dt) {
    this.fbo.getComponent(cc.Sprite).getMaterial(0).setProperty("Pos", [(this.spine.x + this.fbo.width / 2) / this.fbo.width, (this.spine.y + this.fbo.height / 2) / cc.winSize.height]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZGVtb1xcQ2lyY3VsYXJGb2cuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJmYm8iLCJOb2RlIiwic3BpbmUiLCJkcmFnb24iLCJvbkxvYWQiLCJkZWJ1ZyIsInNldERpc3BsYXlTdGF0cyIsInN0YXJ0IiwidHdlZW4iLCJieSIsInBvc2l0aW9uIiwidjIiLCJ1cGRhdGUiLCJkdCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsImdldE1hdGVyaWFsIiwic2V0UHJvcGVydHkiLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0Iiwid2luU2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEdBQUcsRUFBRUosRUFBRSxDQUFDSyxJQURBO0FBRVJDLElBQUFBLEtBQUssRUFBRU4sRUFBRSxDQUFDSyxJQUZGO0FBR1JFLElBQUFBLE1BQU0sRUFBRVAsRUFBRSxDQUFDSztBQUhILEdBSFA7QUFRTEcsRUFBQUEsTUFSSyxvQkFRSztBQUNOUixJQUFBQSxFQUFFLENBQUNTLEtBQUgsQ0FBU0MsZUFBVCxDQUF5QixJQUF6QjtBQUNILEdBVkk7QUFZTEMsRUFBQUEsS0FaSyxtQkFZSTtBQUNMWCxJQUFBQSxFQUFFLENBQUNZLEtBQUgsQ0FBUyxLQUFLTixLQUFkLEVBQ0tPLEVBREwsQ0FDUSxFQURSLEVBQ1k7QUFBRUMsTUFBQUEsUUFBUSxFQUFFZCxFQUFFLENBQUNlLEVBQUgsQ0FBTSxHQUFOLEVBQVcsQ0FBWDtBQUFaLEtBRFosRUFFS0osS0FGTDtBQUlBWCxJQUFBQSxFQUFFLENBQUNZLEtBQUgsQ0FBUyxLQUFLTCxNQUFkLEVBQ0tNLEVBREwsQ0FDUSxFQURSLEVBQ1k7QUFBRUMsTUFBQUEsUUFBUSxFQUFFZCxFQUFFLENBQUNlLEVBQUgsQ0FBTSxJQUFOLEVBQVksQ0FBWjtBQUFaLEtBRFosRUFFS0osS0FGTDtBQUdILEdBcEJJO0FBcUJMSyxFQUFBQSxNQXJCSyxrQkFxQkdDLEVBckJILEVBcUJPO0FBQ1IsU0FBS2IsR0FBTCxDQUFTYyxZQUFULENBQXNCbEIsRUFBRSxDQUFDbUIsTUFBekIsRUFBaUNDLFdBQWpDLENBQTZDLENBQTdDLEVBQWdEQyxXQUFoRCxDQUE0RCxLQUE1RCxFQUFtRSxDQUFDLENBQUMsS0FBS2YsS0FBTCxDQUFXZ0IsQ0FBWCxHQUFlLEtBQUtsQixHQUFMLENBQVNtQixLQUFULEdBQWlCLENBQWpDLElBQXNDLEtBQUtuQixHQUFMLENBQVNtQixLQUFoRCxFQUF1RCxDQUFDLEtBQUtqQixLQUFMLENBQVdrQixDQUFYLEdBQWUsS0FBS3BCLEdBQUwsQ0FBU3FCLE1BQVQsR0FBa0IsQ0FBbEMsSUFBdUN6QixFQUFFLENBQUMwQixPQUFILENBQVdELE1BQXpHLENBQW5FO0FBQ0g7QUF2QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZmJvOiBjYy5Ob2RlLFxuICAgICAgICBzcGluZTogY2MuTm9kZSxcbiAgICAgICAgZHJhZ29uOiBjYy5Ob2RlLFxuICAgIH0sXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKHRydWUpO1xuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuc3BpbmUpXG4gICAgICAgICAgICAuYnkoMTUsIHsgcG9zaXRpb246IGNjLnYyKDkwMCwgMCkgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuZHJhZ29uKVxuICAgICAgICAgICAgLmJ5KDIwLCB7IHBvc2l0aW9uOiBjYy52MigxMTAwLCAwKSB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfSxcbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIHRoaXMuZmJvLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmdldE1hdGVyaWFsKDApLnNldFByb3BlcnR5KFwiUG9zXCIsIFsodGhpcy5zcGluZS54ICsgdGhpcy5mYm8ud2lkdGggLyAyKSAvIHRoaXMuZmJvLndpZHRoLCAodGhpcy5zcGluZS55ICsgdGhpcy5mYm8uaGVpZ2h0IC8gMikgLyBjYy53aW5TaXplLmhlaWdodF0pO1xuICAgIH0sXG59KTtcbiJdfQ==
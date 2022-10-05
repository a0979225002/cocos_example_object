
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/demo/SnowCover.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93940/npztBHaSlyWKo4C4y', 'SnowCover');
// scripts/demo/SnowCover.js

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
    fbo2: cc.Node,
    fbo3: cc.Node,
    spine: cc.Node,
    dragon: cc.Node,
    snow: cc.ParticleSystem
  },
  onLoad: function onLoad() {
    cc.debug.setDisplayStats(true);
    this.time = 0;
    this.melting = false;
  },
  start: function start() {
    cc.tween(this.spine).by(25, {
      position: cc.v2(900, 0)
    }).start();
    cc.tween(this.dragon).by(30, {
      position: cc.v2(1100, 0)
    }).start();
  },
  update: function update(dt) {
    if (this.melting) {
      var edge = this.fbo.getComponent(cc.Sprite).getMaterial(0).getProperty("Edge");

      if (edge >= 0.0) {
        edge -= dt / 30;
        this.fbo.getComponent(cc.Sprite).getMaterial(0).setProperty("Edge", edge);
        this.fbo2.getComponent(cc.Sprite).getMaterial(0).setProperty("Edge", edge);
        this.fbo3.getComponent(cc.Sprite).getMaterial(0).setProperty("Edge", edge);
        this.spine.getComponent(sp.Skeleton).getMaterial(0).setProperty("Edge", edge);
        this.dragon.getComponent(dragonBones.ArmatureDisplay).getMaterial(0).setProperty("Edge", edge);
      }
    } else {
      this.time += dt / 40;

      if (this.fbo.getComponent(cc.Sprite).getMaterial(0).getProperty("Edge") < 0.35) {
        this.fbo.getComponent(cc.Sprite).getMaterial(0).setProperty("Edge", this.time);
        this.fbo2.getComponent(cc.Sprite).getMaterial(0).setProperty("Edge", this.time);
        this.fbo3.getComponent(cc.Sprite).getMaterial(0).setProperty("Edge", this.time);
        this.spine.getComponent(sp.Skeleton).getMaterial(0).setProperty("Edge", this.time);
        this.dragon.getComponent(dragonBones.ArmatureDisplay).getMaterial(0).setProperty("Edge", this.time);
      } else {
        this.melting = true;
        this.time = 0;
        this.snow.stopSystem();
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZGVtb1xcU25vd0NvdmVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZmJvIiwiTm9kZSIsImZibzIiLCJmYm8zIiwic3BpbmUiLCJkcmFnb24iLCJzbm93IiwiUGFydGljbGVTeXN0ZW0iLCJvbkxvYWQiLCJkZWJ1ZyIsInNldERpc3BsYXlTdGF0cyIsInRpbWUiLCJtZWx0aW5nIiwic3RhcnQiLCJ0d2VlbiIsImJ5IiwicG9zaXRpb24iLCJ2MiIsInVwZGF0ZSIsImR0IiwiZWRnZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsImdldE1hdGVyaWFsIiwiZ2V0UHJvcGVydHkiLCJzZXRQcm9wZXJ0eSIsInNwIiwiU2tlbGV0b24iLCJkcmFnb25Cb25lcyIsIkFybWF0dXJlRGlzcGxheSIsInN0b3BTeXN0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxHQUFHLEVBQUVKLEVBQUUsQ0FBQ0ssSUFEQTtBQUVSQyxJQUFBQSxJQUFJLEVBQUVOLEVBQUUsQ0FBQ0ssSUFGRDtBQUdSRSxJQUFBQSxJQUFJLEVBQUVQLEVBQUUsQ0FBQ0ssSUFIRDtBQUlSRyxJQUFBQSxLQUFLLEVBQUVSLEVBQUUsQ0FBQ0ssSUFKRjtBQUtSSSxJQUFBQSxNQUFNLEVBQUVULEVBQUUsQ0FBQ0ssSUFMSDtBQU1SSyxJQUFBQSxJQUFJLEVBQUVWLEVBQUUsQ0FBQ1c7QUFORCxHQUhQO0FBV0xDLEVBQUFBLE1BWEssb0JBV0s7QUFDTlosSUFBQUEsRUFBRSxDQUFDYSxLQUFILENBQVNDLGVBQVQsQ0FBeUIsSUFBekI7QUFDQSxTQUFLQyxJQUFMLEdBQVksQ0FBWjtBQUNBLFNBQUtD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WCxDQUF3QkssRUFBRSxDQUFDQyxRQUEzQixFQUFxQ0osV0FBckMsQ0FBaUQsQ0FBakQsRUFBb0RFLFdBQXBELENBQWdFLE1BQWhFLEVBQXdFLEtBQUtkLElBQTdFO0FBQ0EsYUFBS04sTUFBTCxDQUFZZ0IsWUFBWixDQUF5Qk8sV0FBVyxDQUFDQyxlQUFyQyxFQUFzRE4sV0FBdEQsQ0FBa0UsQ0FBbEUsRUFBcUVFLFdBQXJFLENBQWlGLE1BQWpGLEVBQXlGLEtBQUtkLElBQTlGO0FBQ0gsT0FORCxNQU9LO0FBQ0QsYUFBS0MsT0FBTCxHQUFlLElBQWY7QUFDQSxhQUFLRCxJQUFMLEdBQVksQ0FBWjtBQUNBLGFBQUtMLElBQUwsQ0FBVXdCLFVBQVY7QUFDSDtBQUNKO0FBQ0o7QUFyREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZmJvOiBjYy5Ob2RlLFxuICAgICAgICBmYm8yOiBjYy5Ob2RlLFxuICAgICAgICBmYm8zOiBjYy5Ob2RlLFxuICAgICAgICBzcGluZTogY2MuTm9kZSxcbiAgICAgICAgZHJhZ29uOiBjYy5Ob2RlLFxuICAgICAgICBzbm93OiBjYy5QYXJ0aWNsZVN5c3RlbVxuICAgIH0sXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKHRydWUpO1xuICAgICAgICB0aGlzLnRpbWUgPSAwO1xuICAgICAgICB0aGlzLm1lbHRpbmcgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBjYy50d2Vlbih0aGlzLnNwaW5lKVxuICAgICAgICAgICAgLmJ5KDI1LCB7IHBvc2l0aW9uOiBjYy52Mig5MDAsIDApIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICBjYy50d2Vlbih0aGlzLmRyYWdvbilcbiAgICAgICAgICAgIC5ieSgzMCwgeyBwb3NpdGlvbjogY2MudjIoMTEwMCwgMCkgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH0sXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICBpZiAodGhpcy5tZWx0aW5nKSB7XG4gICAgICAgICAgICBsZXQgZWRnZSA9IHRoaXMuZmJvLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmdldE1hdGVyaWFsKDApLmdldFByb3BlcnR5KFwiRWRnZVwiKTtcbiAgICAgICAgICAgIGlmIChlZGdlID49IDAuMCkge1xuICAgICAgICAgICAgICAgIGVkZ2UgLT0gZHQgLyAzMDtcbiAgICAgICAgICAgICAgICB0aGlzLmZiby5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5nZXRNYXRlcmlhbCgwKS5zZXRQcm9wZXJ0eShcIkVkZ2VcIiwgZWRnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5mYm8yLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmdldE1hdGVyaWFsKDApLnNldFByb3BlcnR5KFwiRWRnZVwiLCBlZGdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZibzMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZ2V0TWF0ZXJpYWwoMCkuc2V0UHJvcGVydHkoXCJFZGdlXCIsIGVkZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BpbmUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5nZXRNYXRlcmlhbCgwKS5zZXRQcm9wZXJ0eShcIkVkZ2VcIiwgZWRnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnb24uZ2V0Q29tcG9uZW50KGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSkuZ2V0TWF0ZXJpYWwoMCkuc2V0UHJvcGVydHkoXCJFZGdlXCIsIGVkZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aW1lICs9IGR0IC8gNDA7XG4gICAgICAgICAgICBpZiAodGhpcy5mYm8uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZ2V0TWF0ZXJpYWwoMCkuZ2V0UHJvcGVydHkoXCJFZGdlXCIpIDwgMC4zNSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmJvLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmdldE1hdGVyaWFsKDApLnNldFByb3BlcnR5KFwiRWRnZVwiLCB0aGlzLnRpbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmJvMi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5nZXRNYXRlcmlhbCgwKS5zZXRQcm9wZXJ0eShcIkVkZ2VcIiwgdGhpcy50aW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZibzMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZ2V0TWF0ZXJpYWwoMCkuc2V0UHJvcGVydHkoXCJFZGdlXCIsIHRoaXMudGltZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGluZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmdldE1hdGVyaWFsKDApLnNldFByb3BlcnR5KFwiRWRnZVwiLCB0aGlzLnRpbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ29uLmdldENvbXBvbmVudChkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkpLmdldE1hdGVyaWFsKDApLnNldFByb3BlcnR5KFwiRWRnZVwiLCB0aGlzLnRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZWx0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuc25vdy5zdG9wU3lzdGVtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG4iXX0=
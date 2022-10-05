
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0486fOqHrJN+6c5PQg5FHh9', 'Game');
// scripts/Game.js

"use strict";

var Player = require('Player');

var ScoreFX = require('ScoreFX');

var Star = require('Star');

var Game = cc.Class({
  "extends": cc.Component,
  properties: {
    // 这个属性引用了星星预制资源
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    scoreFXPrefab: {
      "default": null,
      type: cc.Prefab
    },
    // 星星产生后消失时间的随机范围
    maxStarDuration: 0,
    minStarDuration: 0,
    // 地面节点，用于确定星星生成的高度
    ground: {
      "default": null,
      type: cc.Node
    },
    // player 节点，用于获取主角弹跳的高度，和控制主角行动开关
    player: {
      "default": null,
      type: Player
    },
    // score label 的引用
    scoreDisplay: {
      "default": null,
      type: cc.Label
    },
    // 得分音效资源
    scoreAudio: {
      "default": null,
      type: cc.AudioClip
    },
    btnNode: {
      "default": null,
      type: cc.Node
    },
    gameOverNode: {
      "default": null,
      type: cc.Node
    },
    controlHintLabel: {
      "default": null,
      type: cc.Label
    },
    keyboardHint: {
      "default": '',
      multiline: true
    },
    touchHint: {
      "default": '',
      multiline: true
    }
  },
  // use this for initialization
  onLoad: function onLoad() {
    // 获取地平面的 y 轴坐标
    this.groundY = this.ground.y + this.ground.height / 2; // store last star's x position

    this.currentStar = null;
    this.currentStarX = 0; // 初始化计时器

    this.timer = 0;
    this.starDuration = 0; // is showing menu or running game

    this.enabled = false; // initialize control hint

    var hintText = cc.sys.isMobile ? this.touchHint : this.keyboardHint;
    this.controlHintLabel.string = hintText; // initialize star and score pool

    this.starPool = new cc.NodePool('Star');
    this.scorePool = new cc.NodePool('ScoreFX');
  },
  onStartGame: function onStartGame() {
    // 初始化计分
    this.resetScore(); // set game state to running

    this.enabled = true; // set button and gameover text out of screen

    this.btnNode.x = 3000;
    this.gameOverNode.active = false; // reset player position and move speed

    this.player.startMoveAt(cc.v2(0, this.groundY)); // spawn star

    this.spawnNewStar();
  },
  spawnNewStar: function spawnNewStar() {
    var newStar = null; // 使用给定的模板在场景中生成一个新节点

    if (this.starPool.size() > 0) {
      newStar = this.starPool.get(this); // this will be passed to Star's reuse method
    } else {
      newStar = cc.instantiate(this.starPrefab);
    } // 将新增的节点添加到 Canvas 节点下面


    this.node.addChild(newStar); // 为星星设置一个随机位置

    newStar.setPosition(this.getNewStarPosition()); // pass Game instance to star

    newStar.getComponent('Star').init(this); // start star timer and store star reference

    this.startTimer();
    this.currentStar = newStar;
  },
  despawnStar: function despawnStar(star) {
    this.starPool.put(star);
    this.spawnNewStar();
  },
  startTimer: function startTimer() {
    // get a life duration for next star
    this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
    this.timer = 0;
  },
  getNewStarPosition: function getNewStarPosition() {
    // if there's no star, set a random x pos
    if (!this.currentStar) {
      this.currentStarX = (Math.random() - 0.5) * 2 * this.node.width / 2;
    }

    var randX = 0; // 根据地平面位置和主角跳跃高度，随机得到一个星星的 y 坐标

    var randY = this.groundY + Math.random() * this.player.jumpHeight + 50; // 根据屏幕宽度和上一个星星的 x 坐标，随机得到一个新生成星星 x 坐标

    var maxX = this.node.width / 2;

    if (this.currentStarX >= 0) {
      randX = -Math.random() * maxX;
    } else {
      randX = Math.random() * maxX;
    }

    this.currentStarX = randX; // 返回星星坐标

    return cc.v2(randX, randY);
  },
  gainScore: function gainScore(pos) {
    this.score += 1; // 更新 scoreDisplay Label 的文字

    this.scoreDisplay.string = 'Score: ' + this.score.toString(); // 播放特效

    var fx = this.spawnScoreFX();
    this.node.addChild(fx.node);
    fx.node.setPosition(pos);
    fx.play(); // 播放得分音效

    cc.audioEngine.playEffect(this.scoreAudio, false);
  },
  resetScore: function resetScore() {
    this.score = 0;
    this.scoreDisplay.string = 'Score: ' + this.score.toString();
  },
  spawnScoreFX: function spawnScoreFX() {
    var fx;

    if (this.scorePool.size() > 0) {
      fx = this.scorePool.get();
      return fx.getComponent('ScoreFX');
    } else {
      fx = cc.instantiate(this.scoreFXPrefab).getComponent('ScoreFX');
      fx.init(this);
      return fx;
    }
  },
  despawnScoreFX: function despawnScoreFX(scoreFX) {
    this.scorePool.put(scoreFX);
  },
  // called every frame
  update: function update(dt) {
    // 每帧更新计时器，超过限度还没有生成新的星星
    // 就会调用游戏失败逻辑
    if (this.timer > this.starDuration) {
      this.gameOver();
      this.enabled = false; // disable this to avoid gameOver() repeatedly

      return;
    }

    this.timer += dt;
  },
  gameOver: function gameOver() {
    this.gameOverNode.active = true;
    this.player.enabled = false;
    this.player.stopMove();
    this.currentStar.destroy();
    this.btnNode.x = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJyZXF1aXJlIiwiU2NvcmVGWCIsIlN0YXIiLCJHYW1lIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFyUHJlZmFiIiwidHlwZSIsIlByZWZhYiIsInNjb3JlRlhQcmVmYWIiLCJtYXhTdGFyRHVyYXRpb24iLCJtaW5TdGFyRHVyYXRpb24iLCJncm91bmQiLCJOb2RlIiwicGxheWVyIiwic2NvcmVEaXNwbGF5IiwiTGFiZWwiLCJzY29yZUF1ZGlvIiwiQXVkaW9DbGlwIiwiYnRuTm9kZSIsImdhbWVPdmVyTm9kZSIsImNvbnRyb2xIaW50TGFiZWwiLCJrZXlib2FyZEhpbnQiLCJtdWx0aWxpbmUiLCJ0b3VjaEhpbnQiLCJvbkxvYWQiLCJncm91bmRZIiwieSIsImhlaWdodCIsImN1cnJlbnRTdGFyIiwiY3VycmVudFN0YXJYIiwidGltZXIiLCJzdGFyRHVyYXRpb24iLCJlbmFibGVkIiwiaGludFRleHQiLCJzeXMiLCJpc01vYmlsZSIsInN0cmluZyIsInN0YXJQb29sIiwiTm9kZVBvb2wiLCJzY29yZVBvb2wiLCJvblN0YXJ0R2FtZSIsInJlc2V0U2NvcmUiLCJ4IiwiYWN0aXZlIiwic3RhcnRNb3ZlQXQiLCJ2MiIsInNwYXduTmV3U3RhciIsIm5ld1N0YXIiLCJzaXplIiwiZ2V0IiwiaW5zdGFudGlhdGUiLCJub2RlIiwiYWRkQ2hpbGQiLCJzZXRQb3NpdGlvbiIsImdldE5ld1N0YXJQb3NpdGlvbiIsImdldENvbXBvbmVudCIsImluaXQiLCJzdGFydFRpbWVyIiwiZGVzcGF3blN0YXIiLCJzdGFyIiwicHV0IiwiTWF0aCIsInJhbmRvbSIsIndpZHRoIiwicmFuZFgiLCJyYW5kWSIsImp1bXBIZWlnaHQiLCJtYXhYIiwiZ2FpblNjb3JlIiwicG9zIiwic2NvcmUiLCJ0b1N0cmluZyIsImZ4Iiwic3Bhd25TY29yZUZYIiwicGxheSIsImF1ZGlvRW5naW5lIiwicGxheUVmZmVjdCIsImRlc3Bhd25TY29yZUZYIiwic2NvcmVGWCIsInVwZGF0ZSIsImR0IiwiZ2FtZU92ZXIiLCJzdG9wTW92ZSIsImRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsUUFBRCxDQUF0Qjs7QUFDQSxJQUFNQyxPQUFPLEdBQUdELE9BQU8sQ0FBQyxTQUFELENBQXZCOztBQUNBLElBQU1FLElBQUksR0FBR0YsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0FBRUEsSUFBSUcsSUFBSSxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNoQixhQUFTRCxFQUFFLENBQUNFLFNBREk7QUFHaEJDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0FDLElBQUFBLFVBQVUsRUFBRTtBQUNSLGlCQUFTLElBREQ7QUFFUkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkQsS0FGSjtBQU1SQyxJQUFBQSxhQUFhLEVBQUU7QUFDWCxpQkFBUyxJQURFO0FBRVhGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZFLEtBTlA7QUFVUjtBQUNBRSxJQUFBQSxlQUFlLEVBQUUsQ0FYVDtBQVlSQyxJQUFBQSxlQUFlLEVBQUUsQ0FaVDtBQWFSO0FBQ0FDLElBQUFBLE1BQU0sRUFBRTtBQUNKLGlCQUFTLElBREw7QUFFSkwsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNXO0FBRkwsS0FkQTtBQWtCUjtBQUNBQyxJQUFBQSxNQUFNLEVBQUU7QUFDSixpQkFBUyxJQURMO0FBRUpQLE1BQUFBLElBQUksRUFBRVY7QUFGRixLQW5CQTtBQXVCUjtBQUNBa0IsSUFBQUEsWUFBWSxFQUFFO0FBQ1YsaUJBQVMsSUFEQztBQUVWUixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ2M7QUFGQyxLQXhCTjtBQTRCUjtBQUNBQyxJQUFBQSxVQUFVLEVBQUU7QUFDUixpQkFBUyxJQUREO0FBRVJWLE1BQUFBLElBQUksRUFBRUws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Q0EsYUFBT3VCLEVBQUUsQ0FBQ2pCLFlBQUgsQ0FBZ0IsU0FBaEIsQ0FBUDtBQUNILEtBSEQsTUFHTztBQUNIaUIsTUFBQUEsRUFBRSxHQUFHdkUsRUFBRSxDQUFDaUQsV0FBSCxDQUFlLEtBQUsxQyxhQUFwQixFQUFtQytDLFlBQW5DLENBQWdELFNBQWhELENBQUw7QUFDQWlCLE1BQUFBLEVBQUUsQ0FBQ2hCLElBQUgsQ0FBUSxJQUFSO0FBQ0EsYUFBT2dCLEVBQVA7QUFDSDtBQUNKLEdBL0tlO0FBaUxoQkssRUFBQUEsY0FqTGdCLDBCQWlMQUMsT0FqTEEsRUFpTFM7QUFDckIsU0FBS3ZDLFNBQUwsQ0FBZXFCLEdBQWYsQ0FBbUJrQixPQUFuQjtBQUNILEdBbkxlO0FBcUxoQjtBQUNBQyxFQUFBQSxNQUFNLEVBQUUsZ0JBQVVDLEVBQVYsRUFBYztBQUNsQjtBQUNBO0FBQ0EsUUFBSSxLQUFLbEQsS0FBTCxHQUFhLEtBQUtDLFlBQXRCLEVBQW9DO0FBQ2hDLFdBQUtrRCxRQUFMO0FBQ0EsV0FBS2pELE9BQUwsR0FBZSxLQUFmLENBRmdDLENBRVI7O0FBQ3hCO0FBQ0g7O0FBQ0QsU0FBS0YsS0FBTCxJQUFja0QsRUFBZDtBQUNILEdBL0xlO0FBaU1oQkMsRUFBQUEsUUFBUSxFQUFFLG9CQUFZO0FBQ2xCLFNBQUs5RCxZQUFMLENBQWtCd0IsTUFBbEIsR0FBMkIsSUFBM0I7QUFDQSxTQUFLOUIsTUFBTCxDQUFZbUIsT0FBWixHQUFzQixLQUF0QjtBQUNBLFNBQUtuQixNQUFMLENBQVlxRSxRQUFaO0FBQ0EsU0FBS3RELFdBQUwsQ0FBaUJ1RCxPQUFqQjtBQUNBLFNBQUtqRSxPQUFMLENBQWF3QixDQUFiLEdBQWlCLENBQWpCO0FBQ0g7QUF2TWUsQ0FBVCxDQUFYIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQbGF5ZXIgPSByZXF1aXJlKCdQbGF5ZXInKTtcclxuY29uc3QgU2NvcmVGWCA9IHJlcXVpcmUoJ1Njb3JlRlgnKTtcclxuY29uc3QgU3RhciA9IHJlcXVpcmUoJ1N0YXInKTtcclxuXHJcbnZhciBHYW1lID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyDov5nkuKrlsZ7mgKflvJXnlKjkuobmmJ/mmJ/pooTliLbotYTmupBcclxuICAgICAgICBzdGFyUHJlZmFiOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NvcmVGWFByZWZhYjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOaYn+aYn+S6p+eUn+WQjua2iOWkseaXtumXtOeahOmaj+acuuiMg+WbtFxyXG4gICAgICAgIG1heFN0YXJEdXJhdGlvbjogMCxcclxuICAgICAgICBtaW5TdGFyRHVyYXRpb246IDAsXHJcbiAgICAgICAgLy8g5Zyw6Z2i6IqC54K577yM55So5LqO56Gu5a6a5pif5pif55Sf5oiQ55qE6auY5bqmXHJcbiAgICAgICAgZ3JvdW5kOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHBsYXllciDoioLngrnvvIznlKjkuo7ojrflj5bkuLvop5LlvLnot7PnmoTpq5jluqbvvIzlkozmjqfliLbkuLvop5LooYzliqjlvIDlhbNcclxuICAgICAgICBwbGF5ZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogUGxheWVyXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBzY29yZSBsYWJlbCDnmoTlvJXnlKhcclxuICAgICAgICBzY29yZURpc3BsYXk6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOW+l+WIhumfs+aViOi1hOa6kFxyXG4gICAgICAgIHNjb3JlQXVkaW86IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBidG5Ob2RlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdhbWVPdmVyTm9kZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250cm9sSGludExhYmVsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBrZXlib2FyZEhpbnQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogJycsXHJcbiAgICAgICAgICAgIG11bHRpbGluZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG91Y2hIaW50OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxyXG4gICAgICAgICAgICBtdWx0aWxpbmU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIOiOt+WPluWcsOW5s+mdoueahCB5IOi9tOWdkOagh1xyXG4gICAgICAgIHRoaXMuZ3JvdW5kWSA9IHRoaXMuZ3JvdW5kLnkgKyB0aGlzLmdyb3VuZC5oZWlnaHQvMjtcclxuXHJcbiAgICAgICAgLy8gc3RvcmUgbGFzdCBzdGFyJ3MgeCBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXJYID0gMDtcclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyW6K6h5pe25ZmoXHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGFyRHVyYXRpb24gPSAwO1xyXG5cclxuICAgICAgICAvLyBpcyBzaG93aW5nIG1lbnUgb3IgcnVubmluZyBnYW1lXHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIGluaXRpYWxpemUgY29udHJvbCBoaW50XHJcbiAgICAgICAgdmFyIGhpbnRUZXh0ID0gY2Muc3lzLmlzTW9iaWxlID8gdGhpcy50b3VjaEhpbnQgOiB0aGlzLmtleWJvYXJkSGludDtcclxuICAgICAgICB0aGlzLmNvbnRyb2xIaW50TGFiZWwuc3RyaW5nID0gaGludFRleHQ7XHJcblxyXG4gICAgICAgIC8vIGluaXRpYWxpemUgc3RhciBhbmQgc2NvcmUgcG9vbFxyXG4gICAgICAgIHRoaXMuc3RhclBvb2wgPSBuZXcgY2MuTm9kZVBvb2woJ1N0YXInKTtcclxuICAgICAgICB0aGlzLnNjb3JlUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgnU2NvcmVGWCcpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblN0YXJ0R2FtZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIOWIneWni+WMluiuoeWIhlxyXG4gICAgICAgIHRoaXMucmVzZXRTY29yZSgpO1xyXG4gICAgICAgIC8vIHNldCBnYW1lIHN0YXRlIHRvIHJ1bm5pbmdcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIHNldCBidXR0b24gYW5kIGdhbWVvdmVyIHRleHQgb3V0IG9mIHNjcmVlblxyXG4gICAgICAgIHRoaXMuYnRuTm9kZS54ID0gMzAwMDtcclxuICAgICAgICB0aGlzLmdhbWVPdmVyTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyByZXNldCBwbGF5ZXIgcG9zaXRpb24gYW5kIG1vdmUgc3BlZWRcclxuICAgICAgICB0aGlzLnBsYXllci5zdGFydE1vdmVBdChjYy52MigwLCB0aGlzLmdyb3VuZFkpKTtcclxuICAgICAgICAvLyBzcGF3biBzdGFyXHJcbiAgICAgICAgdGhpcy5zcGF3bk5ld1N0YXIoKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3Bhd25OZXdTdGFyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgbmV3U3RhciA9IG51bGw7XHJcbiAgICAgICAgLy8g5L2/55So57uZ5a6a55qE5qih5p2/5Zyo5Zy65pmv5Lit55Sf5oiQ5LiA5Liq5paw6IqC54K5XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhclBvb2wuc2l6ZSgpID4gMCkge1xyXG4gICAgICAgICAgICBuZXdTdGFyID0gdGhpcy5zdGFyUG9vbC5nZXQodGhpcyk7IC8vIHRoaXMgd2lsbCBiZSBwYXNzZWQgdG8gU3RhcidzIHJldXNlIG1ldGhvZFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld1N0YXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnN0YXJQcmVmYWIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlsIbmlrDlop7nmoToioLngrnmt7vliqDliLAgQ2FudmFzIOiKgueCueS4i+mdolxyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdTdGFyKTtcclxuICAgICAgICAvLyDkuLrmmJ/mmJ/orr7nva7kuIDkuKrpmo/mnLrkvY3nva5cclxuICAgICAgICBuZXdTdGFyLnNldFBvc2l0aW9uKHRoaXMuZ2V0TmV3U3RhclBvc2l0aW9uKCkpO1xyXG4gICAgICAgIC8vIHBhc3MgR2FtZSBpbnN0YW5jZSB0byBzdGFyXHJcbiAgICAgICAgbmV3U3Rhci5nZXRDb21wb25lbnQoJ1N0YXInKS5pbml0KHRoaXMpO1xyXG4gICAgICAgIC8vIHN0YXJ0IHN0YXIgdGltZXIgYW5kIHN0b3JlIHN0YXIgcmVmZXJlbmNlXHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWVyKCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhciA9IG5ld1N0YXI7XHJcbiAgICB9LFxyXG5cclxuICAgIGRlc3Bhd25TdGFyIChzdGFyKSB7XHJcbiAgICAgICAgdGhpcy5zdGFyUG9vbC5wdXQoc3Rhcik7XHJcbiAgICAgICAgdGhpcy5zcGF3bk5ld1N0YXIoKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnRUaW1lcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGdldCBhIGxpZmUgZHVyYXRpb24gZm9yIG5leHQgc3RhclxyXG4gICAgICAgIHRoaXMuc3RhckR1cmF0aW9uID0gdGhpcy5taW5TdGFyRHVyYXRpb24gKyBNYXRoLnJhbmRvbSgpICogKHRoaXMubWF4U3RhckR1cmF0aW9uIC0gdGhpcy5taW5TdGFyRHVyYXRpb24pO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXROZXdTdGFyUG9zaXRpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBpZiB0aGVyZSdzIG5vIHN0YXIsIHNldCBhIHJhbmRvbSB4IHBvc1xyXG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50U3Rhcikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFyWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIgKiB0aGlzLm5vZGUud2lkdGgvMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJhbmRYID0gMDtcclxuICAgICAgICAvLyDmoLnmja7lnLDlubPpnaLkvY3nva7lkozkuLvop5Lot7Pot4Ppq5jluqbvvIzpmo/mnLrlvpfliLDkuIDkuKrmmJ/mmJ/nmoQgeSDlnZDmoIdcclxuICAgICAgICB2YXIgcmFuZFkgPSB0aGlzLmdyb3VuZFkgKyBNYXRoLnJhbmRvbSgpICogdGhpcy5wbGF5ZXIuanVtcEhlaWdodCArIDUwO1xyXG4gICAgICAgIC8vIOagueaNruWxj+W5leWuveW6puWSjOS4iuS4gOS4quaYn+aYn+eahCB4IOWdkOagh++8jOmaj+acuuW+l+WIsOS4gOS4quaWsOeUn+aIkOaYn+aYnyB4IOWdkOagh1xyXG4gICAgICAgIHZhciBtYXhYID0gdGhpcy5ub2RlLndpZHRoLzI7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFN0YXJYID49IDApIHtcclxuICAgICAgICAgICAgcmFuZFggPSAtTWF0aC5yYW5kb20oKSAqIG1heFg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmFuZFggPSBNYXRoLnJhbmRvbSgpICogbWF4WDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhclggPSByYW5kWDtcclxuICAgICAgICAvLyDov5Tlm57mmJ/mmJ/lnZDmoIdcclxuICAgICAgICByZXR1cm4gY2MudjIocmFuZFgsIHJhbmRZKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2FpblNjb3JlOiBmdW5jdGlvbiAocG9zKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSAxO1xyXG4gICAgICAgIC8vIOabtOaWsCBzY29yZURpc3BsYXkgTGFiZWwg55qE5paH5a2XXHJcbiAgICAgICAgdGhpcy5zY29yZURpc3BsYXkuc3RyaW5nID0gJ1Njb3JlOiAnICsgdGhpcy5zY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgIC8vIOaSreaUvueJueaViFxyXG4gICAgICAgIHZhciBmeCA9IHRoaXMuc3Bhd25TY29yZUZYKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGZ4Lm5vZGUpO1xyXG4gICAgICAgIGZ4Lm5vZGUuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICBmeC5wbGF5KCk7XHJcbiAgICAgICAgLy8g5pKt5pS+5b6X5YiG6Z+z5pWIXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnNjb3JlQXVkaW8sIGZhbHNlKTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVzZXRTY29yZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZyA9ICdTY29yZTogJyArIHRoaXMuc2NvcmUudG9TdHJpbmcoKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3Bhd25TY29yZUZYOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGZ4O1xyXG4gICAgICAgIGlmICh0aGlzLnNjb3JlUG9vbC5zaXplKCkgPiAwKSB7XHJcbiAgICAgICAgICAgIGZ4ID0gdGhpcy5zY29yZVBvb2wuZ2V0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmeC5nZXRDb21wb25lbnQoJ1Njb3JlRlgnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmeCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2NvcmVGWFByZWZhYikuZ2V0Q29tcG9uZW50KCdTY29yZUZYJyk7XHJcbiAgICAgICAgICAgIGZ4LmluaXQodGhpcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmeDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGRlc3Bhd25TY29yZUZYIChzY29yZUZYKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZVBvb2wucHV0KHNjb3JlRlgpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWVcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgLy8g5q+P5bin5pu05paw6K6h5pe25Zmo77yM6LaF6L+H6ZmQ5bqm6L+Y5rKh5pyJ55Sf5oiQ5paw55qE5pif5pifXHJcbiAgICAgICAgLy8g5bCx5Lya6LCD55So5ri45oiP5aSx6LSl6YC76L6RXHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPiB0aGlzLnN0YXJEdXJhdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlOyAgIC8vIGRpc2FibGUgdGhpcyB0byBhdm9pZCBnYW1lT3ZlcigpIHJlcGVhdGVkbHlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpbWVyICs9IGR0O1xyXG4gICAgfSxcclxuXHJcbiAgICBnYW1lT3ZlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnN0b3BNb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3Rhci5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5idG5Ob2RlLnggPSAwO1xyXG4gICAgfVxyXG59KTtcclxuIl19
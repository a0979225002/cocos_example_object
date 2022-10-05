
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Game');
require('./assets/scripts/Player');
require('./assets/scripts/ScoreAnim');
require('./assets/scripts/ScoreFX');
require('./assets/scripts/Star');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScoreFX.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dd18c67pr9OM5wJb/yY6Onf', 'ScoreFX');
// scripts/ScoreFX.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    anim: {
      "default": null,
      type: cc.Animation
    }
  },
  init: function init(game) {
    this.game = game;
    this.anim.getComponent('ScoreAnim').init(this);
  },
  despawn: function despawn() {
    this.game.despawnScoreFX(this.node);
  },
  play: function play() {
    this.anim.play('score_pop');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NvcmVGWC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImFuaW0iLCJ0eXBlIiwiQW5pbWF0aW9uIiwiaW5pdCIsImdhbWUiLCJnZXRDb21wb25lbnQiLCJkZXNwYXduIiwiZGVzcGF3blNjb3JlRlgiLCJub2RlIiwicGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLElBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRlA7QUFERSxHQUhQO0FBVUxDLEVBQUFBLElBVkssZ0JBVUNDLElBVkQsRUFVTztBQUNSLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtKLElBQUwsQ0FBVUssWUFBVixDQUF1QixXQUF2QixFQUFvQ0YsSUFBcEMsQ0FBeUMsSUFBekM7QUFDSCxHQWJJO0FBZUxHLEVBQUFBLE9BZksscUJBZU07QUFDUCxTQUFLRixJQUFMLENBQVVHLGNBQVYsQ0FBeUIsS0FBS0MsSUFBOUI7QUFDSCxHQWpCSTtBQW1CTEMsRUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2QsU0FBS1QsSUFBTCxDQUFVUyxJQUFWLENBQWUsV0FBZjtBQUNIO0FBckJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgYW5pbToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BbmltYXRpb25cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQgKGdhbWUpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMuYW5pbS5nZXRDb21wb25lbnQoJ1Njb3JlQW5pbScpLmluaXQodGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIGRlc3Bhd24gKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5kZXNwYXduU2NvcmVGWCh0aGlzLm5vZGUpO1xyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoJ3Njb3JlX3BvcCcpO1xyXG4gICAgfVxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ScoreAnim.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1f9e88YHdGr7qD17shtr2w', 'ScoreAnim');
// scripts/ScoreAnim.js

"use strict";

cc.Class({
  "extends": cc.Component,
  init: function init(scoreFX) {
    this.scoreFX = scoreFX;
  },
  hideFX: function hideFX() {
    this.scoreFX.despawn();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2NvcmVBbmltLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJpbml0Iiwic2NvcmVGWCIsImhpZGVGWCIsImRlc3Bhd24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLElBSEssZ0JBR0NDLE9BSEQsRUFHVTtBQUNYLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNILEdBTEk7QUFPTEMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCLFNBQUtELE9BQUwsQ0FBYUUsT0FBYjtBQUNIO0FBVEksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIGluaXQgKHNjb3JlRlgpIHtcclxuICAgICAgICB0aGlzLnNjb3JlRlggPSBzY29yZUZYO1xyXG4gICAgfSxcclxuXHJcbiAgICBoaWRlRlg6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNjb3JlRlguZGVzcGF3bigpO1xyXG4gICAgfSxcclxufSk7Il19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c10bbPdGYhDWaLoKLV38bHf', 'Player');
// scripts/Player.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    // 主角跳跃高度
    jumpHeight: 0,
    // 主角跳跃持续时间
    jumpDuration: 0,
    // 辅助形变动作时间
    squashDuration: 0,
    // 最大移动速度
    maxMoveSpeed: 0,
    // 加速度
    accel: 0,
    // 跳跃音效资源
    jumpAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.enabled = false; // 加速度方向开关

    this.accLeft = false;
    this.accRight = false; // 主角当前水平方向速度

    this.xSpeed = 0; // screen boundaries

    this.minPosX = -this.node.parent.width / 2;
    this.maxPosX = this.node.parent.width / 2; // 初始化键盘输入监听

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    var touchReceiver = cc.Canvas.instance.node;
    touchReceiver.on('touchstart', this.onTouchStart, this);
    touchReceiver.on('touchend', this.onTouchEnd, this);
  },
  onDestroy: function onDestroy() {
    // 取消键盘输入监听
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    var touchReceiver = cc.Canvas.instance.node;
    touchReceiver.off('touchstart', this.onTouchStart, this);
    touchReceiver.off('touchend', this.onTouchEnd, this);
  },
  onKeyDown: function onKeyDown(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
      case cc.macro.KEY.left:
        this.accLeft = true;
        this.accRight = false;
        break;

      case cc.macro.KEY.d:
      case cc.macro.KEY.right:
        this.accLeft = false;
        this.accRight = true;
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
      case cc.macro.KEY.left:
        this.accLeft = false;
        break;

      case cc.macro.KEY.d:
      case cc.macro.KEY.right:
        this.accRight = false;
        break;
    }
  },
  onTouchStart: function onTouchStart(event) {
    var touchLoc = event.getLocation();

    if (touchLoc.x >= cc.winSize.width / 2) {
      this.accLeft = false;
      this.accRight = true;
    } else {
      this.accLeft = true;
      this.accRight = false;
    }
  },
  onTouchEnd: function onTouchEnd(event) {
    this.accLeft = false;
    this.accRight = false;
  },
  runJumpAction: function runJumpAction() {
    // 跳跃上升
    var jumpUp = cc.tween().by(this.jumpDuration, {
      y: this.jumpHeight
    }, {
      easing: 'sineOut'
    }); // 下落

    var jumpDown = cc.tween().by(this.jumpDuration, {
      y: -this.jumpHeight
    }, {
      easing: 'sineIn'
    }); // 形变

    var squash = cc.tween().to(this.squashDuration, {
      scaleX: 1,
      scaleY: 0.6
    });
    var stretch = cc.tween().to(this.squashDuration, {
      scaleX: 1,
      scaleY: 1.2
    });
    var scaleBack = cc.tween().to(this.squashDuration, {
      scaleX: 1,
      scaleY: 1
    }); // 创建一个缓动

    var tween = cc.tween() // 按顺序执行动作
    .sequence(squash, stretch, jumpUp, scaleBack, jumpDown) // 添加一个回调函数，在前面的动作都结束时调用我们定义的 playJumpSound() 方法
    .call(this.playJumpSound, this); // 不断重复

    return cc.tween().repeatForever(tween);
  },
  playJumpSound: function playJumpSound() {
    // 调用声音引擎播放声音
    cc.audioEngine.playEffect(this.jumpAudio, false);
  },
  getCenterPos: function getCenterPos() {
    var centerPos = cc.v2(this.node.x, this.node.y + this.node.height / 2);
    return centerPos;
  },
  startMoveAt: function startMoveAt(pos) {
    this.enabled = true;
    this.xSpeed = 0;
    this.node.setPosition(pos);
    var jumpAction = this.runJumpAction();
    cc.tween(this.node).then(jumpAction).start();
  },
  stopMove: function stopMove() {
    this.node.stopAllActions();
  },
  // called every frame
  update: function update(dt) {
    // 根据当前加速度方向每帧更新速度
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    } // 限制主角的速度不能超过最大值


    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      // if speed reach limit, use max speed with current direction
      this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
    } // 根据当前速度更新主角的位置


    this.node.x += this.xSpeed * dt; // limit player position inside screen

    if (this.node.x > this.node.parent.width / 2) {
      this.node.x = this.node.parent.width / 2;
      this.xSpeed = 0;
    } else if (this.node.x < -this.node.parent.width / 2) {
      this.node.x = -this.node.parent.width / 2;
      this.xSpeed = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsInNxdWFzaER1cmF0aW9uIiwibWF4TW92ZVNwZWVkIiwiYWNjZWwiLCJqdW1wQXVkaW8iLCJ0eXBlIiwiQXVkaW9DbGlwIiwib25Mb2FkIiwiZW5hYmxlZCIsImFjY0xlZnQiLCJhY2NSaWdodCIsInhTcGVlZCIsIm1pblBvc1giLCJub2RlIiwicGFyZW50Iiwid2lkdGgiLCJtYXhQb3NYIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJvbktleURvd24iLCJLRVlfVVAiLCJvbktleVVwIiwidG91Y2hSZWNlaXZlciIsIkNhbnZhcyIsImluc3RhbmNlIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaEVuZCIsIm9uRGVzdHJveSIsIm9mZiIsImV2ZW50Iiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwiYSIsImxlZnQiLCJkIiwicmlnaHQiLCJ0b3VjaExvYyIsImdldExvY2F0aW9uIiwieCIsIndpblNpemUiLCJydW5KdW1wQWN0aW9uIiwianVtcFVwIiwidHdlZW4iLCJieSIsInkiLCJlYXNpbmciLCJqdW1wRG93biIsInNxdWFzaCIsInRvIiwic2NhbGVYIiwic2NhbGVZIiwic3RyZXRjaCIsInNjYWxlQmFjayIsInNlcXVlbmNlIiwiY2FsbCIsInBsYXlKdW1wU291bmQiLCJyZXBlYXRGb3JldmVyIiwiYXVkaW9FbmdpbmUiLCJwbGF5RWZmZWN0IiwiZ2V0Q2VudGVyUG9zIiwiY2VudGVyUG9zIiwidjIiLCJoZWlnaHQiLCJzdGFydE1vdmVBdCIsInBvcyIsInNldFBvc2l0aW9uIiwianVtcEFjdGlvbiIsInRoZW4iLCJzdGFydCIsInN0b3BNb3ZlIiwic3RvcEFsbEFjdGlvbnMiLCJ1cGRhdGUiLCJkdCIsIk1hdGgi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R0FBYyxDQUFDLEtBQUs3QixJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLEtBQWxCLEdBQXdCLENBQXRDO0FBQ0EsV0FBS0osTUFBTCxHQUFjLENBQWQ7QUFDSDtBQUNKO0FBcktJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8g5Li76KeS6Lez6LeD6auY5bqmXHJcbiAgICAgICAganVtcEhlaWdodDogMCxcclxuICAgICAgICAvLyDkuLvop5Lot7Pot4PmjIHnu63ml7bpl7RcclxuICAgICAgICBqdW1wRHVyYXRpb246IDAsXHJcbiAgICAgICAgLy8g6L6F5Yqp5b2i5Y+Y5Yqo5L2c5pe26Ze0XHJcbiAgICAgICAgc3F1YXNoRHVyYXRpb246IDAsXHJcbiAgICAgICAgLy8g5pyA5aSn56e75Yqo6YCf5bqmXHJcbiAgICAgICAgbWF4TW92ZVNwZWVkOiAwLFxyXG4gICAgICAgIC8vIOWKoOmAn+W6plxyXG4gICAgICAgIGFjY2VsOiAwLFxyXG4gICAgICAgIC8vIOi3s+i3g+mfs+aViOi1hOa6kFxyXG4gICAgICAgIGp1bXBBdWRpbzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIC8vIOWKoOmAn+W6puaWueWQkeW8gOWFs1xyXG4gICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAvLyDkuLvop5LlvZPliY3msLTlubPmlrnlkJHpgJ/luqZcclxuICAgICAgICB0aGlzLnhTcGVlZCA9IDA7XHJcbiAgICAgICAgLy8gc2NyZWVuIGJvdW5kYXJpZXNcclxuICAgICAgICB0aGlzLm1pblBvc1ggPSAtdGhpcy5ub2RlLnBhcmVudC53aWR0aC8yO1xyXG4gICAgICAgIHRoaXMubWF4UG9zWCA9IHRoaXMubm9kZS5wYXJlbnQud2lkdGgvMjtcclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyW6ZSu55uY6L6T5YWl55uR5ZCsXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgdG91Y2hSZWNlaXZlciA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlO1xyXG4gICAgICAgIHRvdWNoUmVjZWl2ZXIub24oJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdG91Y2hSZWNlaXZlci5vbigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkRlc3Ryb3kgKCkge1xyXG4gICAgICAgIC8vIOWPlua2iOmUruebmOi+k+WFpeebkeWQrFxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgdG91Y2hSZWNlaXZlciA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlO1xyXG4gICAgICAgIHRvdWNoUmVjZWl2ZXIub2ZmKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRvdWNoUmVjZWl2ZXIub2ZmKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uS2V5RG93biAoZXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5yaWdodDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NSaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uS2V5VXAgKGV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvblRvdWNoU3RhcnQgKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHRvdWNoTG9jID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBpZiAodG91Y2hMb2MueCA+PSBjYy53aW5TaXplLndpZHRoLzIpIHtcclxuICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uVG91Y2hFbmQgKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBydW5KdW1wQWN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8g6Lez6LeD5LiK5Y2HXHJcbiAgICAgICAgdmFyIGp1bXBVcCA9IGNjLnR3ZWVuKCkuYnkodGhpcy5qdW1wRHVyYXRpb24sIHsgeTogdGhpcy5qdW1wSGVpZ2h0IH0sIHsgZWFzaW5nOiAnc2luZU91dCcgfSk7XHJcbiAgICAgICAgLy8g5LiL6JC9XHJcbiAgICAgICAgdmFyIGp1bXBEb3duID0gY2MudHdlZW4oKS5ieSh0aGlzLmp1bXBEdXJhdGlvbiwgeyB5OiAtdGhpcy5qdW1wSGVpZ2h0IH0sIHsgZWFzaW5nOiAnc2luZUluJyB9KTtcclxuICAgICAgICAvLyDlvaLlj5hcclxuICAgICAgICB2YXIgc3F1YXNoID0gY2MudHdlZW4oKS50byh0aGlzLnNxdWFzaER1cmF0aW9uLCB7IHNjYWxlWDogMSwgc2NhbGVZOiAwLjYgfSk7XHJcbiAgICAgICAgdmFyIHN0cmV0Y2ggPSBjYy50d2VlbigpLnRvKHRoaXMuc3F1YXNoRHVyYXRpb24sIHsgc2NhbGVYOiAxLCBzY2FsZVk6IDEuMiB9KTtcclxuICAgICAgICB2YXIgc2NhbGVCYWNrID0gY2MudHdlZW4oKS50byh0aGlzLnNxdWFzaER1cmF0aW9uLCB7IHNjYWxlWDogMSwgc2NhbGVZOiAxIH0pO1xyXG5cclxuICAgICAgICAvLyDliJvlu7rkuIDkuKrnvJPliqhcclxuICAgICAgICB2YXIgdHdlZW4gPSBjYy50d2VlbigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaMiemhuuW6j+aJp+ihjOWKqOS9nFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VxdWVuY2Uoc3F1YXNoLCBzdHJldGNoLCBqdW1wVXAsIHNjYWxlQmFjaywganVtcERvd24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOa3u+WKoOS4gOS4quWbnuiwg+WHveaVsO+8jOWcqOWJjemdoueahOWKqOS9nOmDvee7k+adn+aXtuiwg+eUqOaIkeS7rOWumuS5ieeahCBwbGF5SnVtcFNvdW5kKCkg5pa55rOVXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKHRoaXMucGxheUp1bXBTb3VuZCwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8vIOS4jeaWremHjeWkjVxyXG4gICAgICAgIHJldHVybiBjYy50d2VlbigpLnJlcGVhdEZvcmV2ZXIodHdlZW4pO1xyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5SnVtcFNvdW5kOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8g6LCD55So5aOw6Z+z5byV5pOO5pKt5pS+5aOw6Z+zXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmp1bXBBdWRpbywgZmFsc2UpO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRDZW50ZXJQb3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY2VudGVyUG9zID0gY2MudjIodGhpcy5ub2RlLngsIHRoaXMubm9kZS55ICsgdGhpcy5ub2RlLmhlaWdodC8yKTtcclxuICAgICAgICByZXR1cm4gY2VudGVyUG9zO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydE1vdmVBdDogZnVuY3Rpb24gKHBvcykge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy54U3BlZWQgPSAwO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihwb3MpO1xyXG5cclxuICAgICAgICB2YXIganVtcEFjdGlvbiA9IHRoaXMucnVuSnVtcEFjdGlvbigpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudGhlbihqdW1wQWN0aW9uKS5zdGFydCgpXHJcbiAgICB9LFxyXG5cclxuICAgIHN0b3BNb3ZlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZVxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICAvLyDmoLnmja7lvZPliY3liqDpgJ/luqbmlrnlkJHmr4/luKfmm7TmlrDpgJ/luqZcclxuICAgICAgICBpZiAodGhpcy5hY2NMZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMueFNwZWVkIC09IHRoaXMuYWNjZWwgKiBkdDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWNjUmlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy54U3BlZWQgKz0gdGhpcy5hY2NlbCAqIGR0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDpmZDliLbkuLvop5LnmoTpgJ/luqbkuI3og73otoXov4fmnIDlpKflgLxcclxuICAgICAgICBpZiAoIE1hdGguYWJzKHRoaXMueFNwZWVkKSA+IHRoaXMubWF4TW92ZVNwZWVkICkge1xyXG4gICAgICAgICAgICAvLyBpZiBzcGVlZCByZWFjaCBsaW1pdCwgdXNlIG1heCBzcGVlZCB3aXRoIGN1cnJlbnQgZGlyZWN0aW9uXHJcbiAgICAgICAgICAgIHRoaXMueFNwZWVkID0gdGhpcy5tYXhNb3ZlU3BlZWQgKiB0aGlzLnhTcGVlZCAvIE1hdGguYWJzKHRoaXMueFNwZWVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOagueaNruW9k+WJjemAn+W6puabtOaWsOS4u+inkueahOS9jee9rlxyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMueFNwZWVkICogZHQ7XHJcblxyXG4gICAgICAgIC8vIGxpbWl0IHBsYXllciBwb3NpdGlvbiBpbnNpZGUgc2NyZWVuXHJcbiAgICAgICAgaWYgKCB0aGlzLm5vZGUueCA+IHRoaXMubm9kZS5wYXJlbnQud2lkdGgvMikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IHRoaXMubm9kZS5wYXJlbnQud2lkdGgvMjtcclxuICAgICAgICAgICAgdGhpcy54U3BlZWQgPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlLnggPCAtdGhpcy5ub2RlLnBhcmVudC53aWR0aC8yKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ID0gLXRoaXMubm9kZS5wYXJlbnQud2lkdGgvMjtcclxuICAgICAgICAgICAgdGhpcy54U3BlZWQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

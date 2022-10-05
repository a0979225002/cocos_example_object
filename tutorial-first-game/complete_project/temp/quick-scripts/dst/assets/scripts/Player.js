
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
cc._RF.push(module, '6c688v72QdOKamCGCT+xaAd', 'Player');
// scripts/Player.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    // 主角跳跃高度
    jumpHeight: 0,
    // 主角跳跃持续时间
    jumpDuration: 0,
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
    }); // 创建一个缓动

    var tween = cc.tween() // 按 jumpUp，jumpDown 的顺序执行动作
    .sequence(jumpUp, jumpDown) // 添加一个回调函数，在前面的动作都结束时调用我们定义的 playJumpSound() 方法
    .call(this.playJumpSound, this); // 不断重复

    return cc.tween().repeatForever(tween);
  },
  playJumpSound: function playJumpSound() {
    // 调用声音引擎播放声音
    cc.audioEngine.playEffect(this.jumpAudio, false);
  },
  onKeyDown: function onKeyDown(event) {
    // set a flag when key pressed
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;

      case cc.macro.KEY.d:
        this.accRight = true;
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    // unset a flag when key released
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;

      case cc.macro.KEY.d:
        this.accRight = false;
        break;
    }
  },
  onLoad: function onLoad() {
    // 初始化跳跃动作
    var jumpAction = this.runJumpAction();
    cc.tween(this.node).then(jumpAction).start(); // 加速度方向开关

    this.accLeft = false;
    this.accRight = false; // 主角当前水平方向速度

    this.xSpeed = 0; // 初始化键盘输入监听

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  onDestroy: function onDestroy() {
    // 取消键盘输入监听
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
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


    this.node.x += this.xSpeed * dt;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsIm1heE1vdmVTcGVlZCIsImFjY2VsIiwianVtcEF1ZGlvIiwidHlwZSIsIkF1ZGlvQ2xpcCIsInJ1bkp1bXBBY3Rpb24iLCJqdW1wVXAiLCJ0d2VlbiIsImJ5IiwieSIsImVhc2luZyIsImp1bXBEb3duIiwic2VxdWVuY2UiLCJjYWxsIiwicGxheUp1bXBTb3VuZCIsInJlcGVhdEZvcmV2ZXIiLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJvbktleURvd24iLCJldmVudCIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsImEiLCJhY2NMZWZ0IiwiZCIsImFjY1JpZ2h0Iiwib25LZXlVcCIsIm9uTG9hZCIsImp1bXBBY3Rpb24iLCJub2RlIiwidGhlbiIsInN0YXJ0IiwieFNwZWVkIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJLRVlfVVAiLCJvbkRlc3Ryb3kiLCJvZmYiLCJ1cGRhdGUiLCJkdCIsIk1hdGgiLCJhYnMiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBQyxJQUFBQSxVQUFVLEVBQUUsQ0FGSjtBQUdSO0FBQ0FDLElBQUFBLFlBQVksRUFBRSxDQUpOO0FBS1I7QUFDQUMsSUFBQUEsWUFBWSxFQUFFLENBTk47QUFPUjtBQUNBQyxJQUFBQSxLQUFLLEVBQUUsQ0FSQztBQVNSO0FBQ0FDLElBQUFBLFNBQVMsRUFBRTtBQUNQLGlCQUFTLElBREY7QUFFUEMsTUFBQUEsSUFBSSxFQUFFVCxFQUFFLENBQUNVO0FBRkY7QUFWSCxHQUhQO0FB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LFdBQUgsQ0FBZU8sR0FBZixDQUFtQi9DLEVBQUUsQ0FBQzBDLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkMsUUFBNUMsRUFBc0QsS0FBS3BCLFNBQTNELEVBQXNFLElBQXRFO0FBQ0F4QixJQUFBQSxFQUFFLENBQUN3QyxXQUFILENBQWVPLEdBQWYsQ0FBbUIvQyxFQUFFLENBQUMwQyxXQUFILENBQWVDLFNBQWYsQ0FBeUJFLE1BQTVDLEVBQW9ELEtBQUtaLE9BQXpELEVBQWtFLElBQWxFO0FBQ0gsR0F2Rkk7QUF5RkxlLEVBQUFBLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjO0FBQ2xCO0FBQ0EsUUFBSSxLQUFLbkIsT0FBVCxFQUFrQjtBQUNkLFdBQUtTLE1BQUwsSUFBZSxLQUFLaEMsS0FBTCxHQUFhMEMsRUFBNUI7QUFDSCxLQUZELE1BRU8sSUFBSSxLQUFLakIsUUFBVCxFQUFtQjtBQUN0QixXQUFLTyxNQUFMLElBQWUsS0FBS2hDLEtBQUwsR0FBYTBDLEVBQTVCO0FBQ0gsS0FOaUIsQ0FPbEI7OztBQUNBLFFBQUtDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUtaLE1BQWQsSUFBd0IsS0FBS2pDLFlBQWxDLEVBQWlEO0FBQzdDO0FBQ0EsV0FBS2lDLE1BQUwsR0FBYyxLQUFLakMsWUFBTCxHQUFvQixLQUFLaUMsTUFBekIsR0FBa0NXLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUtaLE1BQWQsQ0FBaEQ7QUFDSCxLQVhpQixDQWFsQjs7O0FBQ0EsU0FBS0gsSUFBTCxDQUFVZ0IsQ0FBVixJQUFlLEtBQUtiLE1BQUwsR0FBY1UsRUFBN0I7QUFDSDtBQXhHSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyDkuLvop5Lot7Pot4Ppq5jluqZcclxuICAgICAgICBqdW1wSGVpZ2h0OiAwLFxyXG4gICAgICAgIC8vIOS4u+inkui3s+i3g+aMgee7reaXtumXtFxyXG4gICAgICAgIGp1bXBEdXJhdGlvbjogMCxcclxuICAgICAgICAvLyDmnIDlpKfnp7vliqjpgJ/luqZcclxuICAgICAgICBtYXhNb3ZlU3BlZWQ6IDAsXHJcbiAgICAgICAgLy8g5Yqg6YCf5bqmXHJcbiAgICAgICAgYWNjZWw6IDAsXHJcbiAgICAgICAgLy8g6Lez6LeD6Z+z5pWI6LWE5rqQXHJcbiAgICAgICAganVtcEF1ZGlvOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIHJ1bkp1bXBBY3Rpb246IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLy8g6Lez6LeD5LiK5Y2HXHJcbiAgICAgICAgdmFyIGp1bXBVcCA9IGNjLnR3ZWVuKCkuYnkodGhpcy5qdW1wRHVyYXRpb24sIHsgeTogdGhpcy5qdW1wSGVpZ2h0IH0sIHsgZWFzaW5nOiAnc2luZU91dCcgfSk7XHJcblxyXG4gICAgICAgIC8vIOS4i+iQvVxyXG4gICAgICAgIHZhciBqdW1wRG93biA9IGNjLnR3ZWVuKCkuYnkodGhpcy5qdW1wRHVyYXRpb24sIHsgeTogLXRoaXMuanVtcEhlaWdodCB9LCB7IGVhc2luZzogJ3NpbmVJbicgfSk7XHJcblxyXG4gICAgICAgIC8vIOWIm+W7uuS4gOS4que8k+WKqFxyXG4gICAgICAgIHZhciB0d2VlbiA9IGNjLnR3ZWVuKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5oyJIGp1bXBVcO+8jGp1bXBEb3duIOeahOmhuuW6j+aJp+ihjOWKqOS9nFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VxdWVuY2UoanVtcFVwLCBqdW1wRG93bilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5re75Yqg5LiA5Liq5Zue6LCD5Ye95pWw77yM5Zyo5YmN6Z2i55qE5Yqo5L2c6YO957uT5p2f5pe26LCD55So5oiR5Lus5a6a5LmJ55qEIHBsYXlKdW1wU291bmQoKSDmlrnms5VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwodGhpcy5wbGF5SnVtcFNvdW5kLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8g5LiN5pat6YeN5aSNXHJcbiAgICAgICAgcmV0dXJuIGNjLnR3ZWVuKCkucmVwZWF0Rm9yZXZlcih0d2Vlbik7XHJcbiAgICB9LFxyXG5cclxuICAgIHBsYXlKdW1wU291bmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyDosIPnlKjlo7Dpn7PlvJXmk47mkq3mlL7lo7Dpn7NcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuanVtcEF1ZGlvLCBmYWxzZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uS2V5RG93biAoZXZlbnQpIHtcclxuICAgICAgICAvLyBzZXQgYSBmbGFnIHdoZW4ga2V5IHByZXNzZWRcclxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NSaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uS2V5VXAgKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gdW5zZXQgYSBmbGFnIHdoZW4ga2V5IHJlbGVhc2VkXHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyW6Lez6LeD5Yqo5L2cXHJcbiAgICAgICAgdmFyIGp1bXBBY3Rpb24gPSB0aGlzLnJ1bkp1bXBBY3Rpb24oKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRoZW4oanVtcEFjdGlvbikuc3RhcnQoKVxyXG5cclxuICAgICAgICAvLyDliqDpgJ/luqbmlrnlkJHlvIDlhbNcclxuICAgICAgICB0aGlzLmFjY0xlZnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8g5Li76KeS5b2T5YmN5rC05bmz5pa55ZCR6YCf5bqmXHJcbiAgICAgICAgdGhpcy54U3BlZWQgPSAwO1xyXG5cclxuICAgICAgICAvLyDliJ3lp4vljJbplK7nm5jovpPlhaXnm5HlkKxcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpOyAgICBcclxuICAgIH0sXHJcblxyXG4gICAgb25EZXN0cm95ICgpIHtcclxuICAgICAgICAvLyDlj5bmtojplK7nm5jovpPlhaXnm5HlkKxcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICB9LCAgICBcclxuXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgIC8vIOagueaNruW9k+WJjeWKoOmAn+W6puaWueWQkeavj+W4p+abtOaWsOmAn+W6plxyXG4gICAgICAgIGlmICh0aGlzLmFjY0xlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy54U3BlZWQgLT0gdGhpcy5hY2NlbCAqIGR0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY2NSaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCArPSB0aGlzLmFjY2VsICogZHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOmZkOWItuS4u+inkueahOmAn+W6puS4jeiDvei2hei/h+acgOWkp+WAvFxyXG4gICAgICAgIGlmICggTWF0aC5hYnModGhpcy54U3BlZWQpID4gdGhpcy5tYXhNb3ZlU3BlZWQgKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIHNwZWVkIHJlYWNoIGxpbWl0LCB1c2UgbWF4IHNwZWVkIHdpdGggY3VycmVudCBkaXJlY3Rpb25cclxuICAgICAgICAgICAgdGhpcy54U3BlZWQgPSB0aGlzLm1heE1vdmVTcGVlZCAqIHRoaXMueFNwZWVkIC8gTWF0aC5hYnModGhpcy54U3BlZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5qC55o2u5b2T5YmN6YCf5bqm5pu05paw5Li76KeS55qE5L2N572uXHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy54U3BlZWQgKiBkdDtcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuXHJcbiJdfQ==
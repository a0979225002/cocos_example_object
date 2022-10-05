System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _temp, _crd, ccclass, property, MovieClip;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _dec8: void 0,
    _dec9: void 0,
    _dec10: void 0,
    _dec11: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _descriptor7: void 0,
    _descriptor8: void 0,
    _descriptor9: void 0,
    _descriptor10: void 0,
    _descriptor11: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1d7c2H5ZmVDAamPzbgJi8ei", "MovieClip", _context.meta);

      // Learn TypeScript:
      //  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
      //  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
      // Learn Attribute:
      //  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
      //  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
      // Learn life-cycle callbacks:
      //  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
      //  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
      ({
        ccclass,
        property
      } = cc._decorator);
      /**
       * 动画播放器
       * @author 落日故人 QQ 583051842
       * 
       */

      _export("default", MovieClip = (_dec = property(cc.Float), _dec2 = property({
        type: cc.Texture2D
      }), _dec3 = property({
        type: cc.Integer
      }), _dec4 = property(cc.Integer), _dec5 = property(cc.Integer), _dec6 = property(cc.Integer), _dec7 = property(cc.Boolean), _dec8 = property(cc.Boolean), _dec9 = property(cc.Boolean), _dec10 = property(), _dec11 = property(), ccclass(_class = (_class2 = (_temp = class MovieClip extends cc.Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "m_sprite", null);

          _defineProperty(this, "timer", 0.1);

          _initializerDefineProperty(this, "interval", _descriptor, this);

          _initializerDefineProperty(this, "texture", _descriptor2, this);

          _initializerDefineProperty(this, "playTimes", _descriptor3, this);

          _initializerDefineProperty(this, "row", _descriptor4, this);

          _initializerDefineProperty(this, "col", _descriptor5, this);

          _initializerDefineProperty(this, "rowIndex", _descriptor6, this);

          _initializerDefineProperty(this, "isAll", _descriptor7, this);

          _initializerDefineProperty(this, "autoPlayOnLoad", _descriptor8, this);

          _initializerDefineProperty(this, "autoDestroy", _descriptor9, this);

          _initializerDefineProperty(this, "begin", _descriptor10, this);

          _initializerDefineProperty(this, "end", _descriptor11, this);

          _defineProperty(this, "totalFrame", 8);

          _defineProperty(this, "currentFrame", 0);

          _defineProperty(this, "currentTimes", 0);

          _defineProperty(this, "running", true);

          _defineProperty(this, "_playIndex", 0);

          _defineProperty(this, "_pieceWidth", 0);

          _defineProperty(this, "_pieceHeight", 0);

          _defineProperty(this, "_bitmapArr", []);
        }

        get playIndex() {
          return this._playIndex;
        }

        set playIndex(value) {
          this._playIndex = value;
        }

        // Use this for initialization
        onLoad() {
          //this. m_clips = new cc.SpriteFrame[this.row][this.col];
          //Texture2D tex = Resources.Load<Texture2D>("Image/Avatar/" + m_sprite_name);
          //this.begin = 0;
          if (this.end == 0) {
            this.end = this.col;
          }

          this.rowIndex = this.clamp(this.rowIndex, 0, this.row - 1);
          this._pieceWidth = this.texture.width / this.col;
          this._pieceHeight = this.texture.height / this.row;
          this.m_sprite = this.getComponent(cc.Sprite);

          if (!this.m_sprite) {
            this.m_sprite = this.addComponent(cc.Sprite);
          }

          for (var i = 0; i < this.row; i++) {
            this._bitmapArr[i] = [];

            for (var j = 0; j < this.col; j++) {
              this._bitmapArr[i][j] = new cc.SpriteFrame(this.texture, new cc.Rect(j * this._pieceWidth, i * this._pieceHeight, this._pieceWidth, this._pieceHeight), false, cc.v2(0, 0), new cc.Size(this._pieceWidth, this._pieceHeight));
            }
          }

          this.m_sprite.spriteFrame = this._bitmapArr[this.rowIndex][0];
          this.node.width = this._pieceWidth;
          this.node.height = this._pieceHeight; //this.timer = this.interval;

          this.timer = 0;
          this.running = this.autoPlayOnLoad;
        }

        reset() {
          this.timer = 0;
          this.playIndex = 0;
          this.currentTimes = 0;
          this.currentFrame = 0;
          this.playAction();
        }

        update(dt) {
          if (!this.running) return;

          if (this.playTimes != 0 && this.currentTimes == this.playTimes) {
            this.running = false;
            return;
          }

          this.timer -= dt;

          if (this.timer <= 0) {
            this.timer = this.interval;
            this.currentFrame = this.currentFrame % this.col;
            this.playAction();
            this.currentFrame++;

            if (this.currentFrame == this.col) {
              if (this.isAll) {
                this.rowIndex++;

                if (this.rowIndex == this.row) {
                  this.currentTimes++;
                  this.node.emit("completeTimes");

                  if (this.playTimes != 0 && this.currentTimes == this.playTimes) {
                    this.node.emit("complete");

                    if (this.autoDestroy) {
                      this.node.destroy();
                    }
                  }
                }

                this.rowIndex %= this.row;
              } else {
                this.currentTimes++;
                this.node.emit("completeTimes");

                if (this.playTimes != 0 && this.currentTimes == this.playTimes) {
                  this.node.emit("complete");

                  if (this.autoDestroy) {
                    this.node.destroy();
                  }
                }
              }
            }
          }
        }

        playAction() {
          this.rowIndex = this.clamp(this.rowIndex, 0, this.row - 1);
          this._playIndex = this._playIndex % (this.end - this.begin) + this.begin;
          this.m_sprite.spriteFrame = this._bitmapArr[this.rowIndex][this._playIndex]; //this.m_sprite.spriteFrame.setRect(this.rect);

          this._playIndex++;
        } /// <summary>
        /// 播放影片
        /// </summary>


        play() {
          this.running = true;
        } /// <summary>
        /// 停止播放影片
        /// </summary>


        stop() {
          this.running = false;
        } /// <summary>
        /// 跳帧播放
        /// </summary>
        /// <param name="frame">帧</param>


        gotoAndPlay(frame) {
          this.running = true;
          this._playIndex = frame;
          this._playIndex = this.clamp(this._playIndex, 0, this.col - 1);
        } /// <summary>
        /// 跳帧停止
        /// </summary>
        /// <param name="frame">帧</param>


        gotoAndStop(frame) {
          this.running = false;
          this._playIndex = frame;
          this._playIndex = this.clamp(this._playIndex, 0, this.col - 1);
          this.m_sprite.spriteFrame = this._bitmapArr[this.rowIndex][this._playIndex];
        }

        clamp(value, minLimit, maxLimit) {
          if (value < minLimit) {
            return minLimit;
          }

          if (value > maxLimit) {
            return maxLimit;
          }

          return value;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "interval", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "texture", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "playTimes", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "row", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 4;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "col", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 4;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "rowIndex", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "isAll", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "autoPlayOnLoad", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "autoDestroy", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "begin", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "end", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vQzovSG9tZS93b3Jrc3BhY2UvY2xhc3NBc3NldHNCdW5kbGUvYXNzZXRzL0Fzc2V0c1BhY2thZ2UvQ2hhcmFjdG9ycy9Nb3ZpZUNsaXAudHMiXSwibmFtZXMiOlsiY2NjbGFzcyIsInByb3BlcnR5IiwiY2MiLCJfZGVjb3JhdG9yIiwiTW92aWVDbGlwIiwiRmxvYXQiLCJ0eXBlIiwiVGV4dHVyZTJEIiwiSW50ZWdlciIsIkJvb2xlYW4iLCJDb21wb25lbnQiLCJwbGF5SW5kZXgiLCJfcGxheUluZGV4IiwidmFsdWUiLCJvbkxvYWQiLCJlbmQiLCJjb2wiLCJyb3dJbmRleCIsImNsYW1wIiwicm93IiwiX3BpZWNlV2lkdGgiLCJ0ZXh0dXJlIiwid2lkdGgiLCJfcGllY2VIZWlnaHQiLCJoZWlnaHQiLCJtX3Nwcml0ZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsImFkZENvbXBvbmVudCIsImkiLCJfYml0bWFwQXJyIiwiaiIsIlNwcml0ZUZyYW1lIiwiUmVjdCIsInYyIiwiU2l6ZSIsInNwcml0ZUZyYW1lIiwibm9kZSIsInRpbWVyIiwicnVubmluZyIsImF1dG9QbGF5T25Mb2FkIiwicmVzZXQiLCJjdXJyZW50VGltZXMiLCJjdXJyZW50RnJhbWUiLCJwbGF5QWN0aW9uIiwidXBkYXRlIiwiZHQiLCJwbGF5VGltZXMiLCJpbnRlcnZhbCIsImlzQWxsIiwiZW1pdCIsImF1dG9EZXN0cm95IiwiZGVzdHJveSIsImJlZ2luIiwicGxheSIsInN0b3AiLCJnb3RvQW5kUGxheSIsImZyYW1lIiwiZ290b0FuZFN0b3AiLCJtaW5MaW1pdCIsIm1heExpbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtPQUVNO0FBQUNBLFFBQUFBLE9BQUQ7QUFBVUMsUUFBQUE7QUFBVixPLEdBQXNCQyxFQUFFLENB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YUwsS0FBYixFQUEwQjhDLFFBQTFCLEVBQTBDQyxRQUExQyxFQUNBO0FBQ0ksY0FBRy9DLEtBQUssR0FBRzhDLFFBQVgsRUFDQTtBQUNJLG1CQUFPQSxRQUFQO0FBQ0g7O0FBRUQsY0FBRzlDLEtBQUssR0FBRytDLFFBQVgsRUFDQTtBQUNJLG1CQUFPQSxRQUFQO0FBQ0g7O0FBRUQsaUJBQU8vQyxLQUFQO0FBQ0g7O0FBclQrQyxPOzs7OztpQkFxQnZCLEc7Ozs7Ozs7aUJBTUssSTs7Ozs7OztpQkFNSixDOzs7Ozs7O2lCQU9OLEM7Ozs7Ozs7aUJBTUEsQzs7Ozs7OztpQkFHSyxDOzs7Ozs7O2lCQUdGLEs7Ozs7Ozs7aUJBR1MsSTs7Ozs7OztpQkFNSCxLOzs7Ozs7O2lCQUlQLEM7Ozs7Ozs7aUJBR0YsQyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuLyoqXHJcbiAqIOWKqOeUu+aSreaUvuWZqFxyXG4gKiBAYXV0aG9yIOiQveaXpeaVheS6uiBRUSA1ODMwNTE4NDJcclxuICogXHJcbiAqL1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpZUNsaXAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBTcHJpdGXmuLLmn5PlmahcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwcm90ZWN0ZWQgbV9zcHJpdGU6Y2MuU3ByaXRlID0gbnVsbDs7XHJcblxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDliqjnlLvorqHml7bpl7TpmpQg5q+P6ZqUMC4xc+abtOaWsOS4gOW4p1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHByb3RlY3RlZCB0aW1lcjpudW1iZXIgPSAwLjE7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOaSreaUviDml7bpl7Qg6Ze06ZqUXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pKt5pS+IOaXtumXtCDpl7TpmpRcclxuICAgICAqL1xyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgcHVibGljIGludGVydmFsOm51bWJlciA9IDAuMTtcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g6LS05Zu+5paH5Lu25ZCNXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLlRleHR1cmUyRH0pXHJcbiAgICBwdWJsaWMgdGV4dHVyZTpjYy5UZXh0dXJlMkQgPSBudWxsO1xyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDmkq3mlL7mrKHmlbBcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuSW50ZWdlcn0pXHJcbiAgICBwdWJsaWMgcGxheVRpbWVzOm51bWJlciA9IDA7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOWbvueJh+WIh+WJsuaIkOWHoOihjFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIHB1YmxpYyByb3c6bnVtYmVyID0gNDtcclxuXHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8g5Zu+54mH5YiH5Ymy5oiQ5Yeg5YiXXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBwdWJsaWMgY29sOm51bWJlciA9IDQ7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBwdWJsaWMgcm93SW5kZXg6bnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcclxuICAgIHB1YmxpYyBpc0FsbDpib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgICBwdWJsaWMgYXV0b1BsYXlPbkxvYWQ6Ym9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOaSreaUvuWujOiHquWKqOmUgOavgVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxyXG4gICAgcHVibGljIGF1dG9EZXN0cm95OmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KClcclxuICAgIHB1YmxpYyBiZWdpbjpudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBwdWJsaWMgZW5kOm51bWJlciA9IDA7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOWKqOeUu+W4p+aVsFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyB0b3RhbEZyYW1lOm51bWJlciA9IDg7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOW9k+WJjeW4p+aVsFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBjdXJyZW50RnJhbWU6bnVtYmVyID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+WJjeaSreaUvuS6huesrOWHoOasoVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3VycmVudFRpbWVzOm51bWJlciA9IDA7XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOW9seeJh+aYr+WQpuWcqOi3keWKqOS4rVxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBydW5uaW5nOmJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8vcHJpdmF0ZSBfZGlyZWN0aW9uOm51bWJlciA9IDE7XHJcblxyXG4gICAgcHJpdmF0ZSBfcGxheUluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGdldCBwbGF5SW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGxheUluZGV4O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBwbGF5SW5kZXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3BsYXlJbmRleCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3BpZWNlV2lkdGg6bnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIF9waWVjZUhlaWdodDpudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIF9iaXRtYXBBcnI6Y2MuU3ByaXRlRnJhbWVbXVtdID0gW107XHJcblxyXG4gICAgLy8gVXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQoKVxyXG4gICAge1xyXG5cclxuICAgICAgICAvL3RoaXMuIG1fY2xpcHMgPSBuZXcgY2MuU3ByaXRlRnJhbWVbdGhpcy5yb3ddW3RoaXMuY29sXTtcclxuICAgICAgICAvL1RleHR1cmUyRCB0ZXggPSBSZXNvdXJjZXMuTG9hZDxUZXh0dXJlMkQ+KFwiSW1hZ2UvQXZhdGFyL1wiICsgbV9zcHJpdGVfbmFtZSk7XHJcblxyXG4gICAgICAgIC8vdGhpcy5iZWdpbiA9IDA7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuZW5kID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmVuZCA9IHRoaXMuY29sO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yb3dJbmRleCA9IHRoaXMuY2xhbXAodGhpcy5yb3dJbmRleCwwLHRoaXMucm93IC0gMSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLl9waWVjZVdpZHRoID0gdGhpcy50ZXh0dXJlLndpZHRoIC8gdGhpcy5jb2w7XHJcbiAgICAgICAgdGhpcy5fcGllY2VIZWlnaHQgPSB0aGlzLnRleHR1cmUuaGVpZ2h0IC8gdGhpcy5yb3c7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5tX3Nwcml0ZSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLm1fc3ByaXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tX3Nwcml0ZSA9IHRoaXMuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwIDsgaSA8IHRoaXMucm93IDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fYml0bWFwQXJyW2ldID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IodmFyIGogPSAwIDsgaiA8IHRoaXMuY29sIDsgaisrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iaXRtYXBBcnJbaV1bal0gPSBuZXcgY2MuU3ByaXRlRnJhbWUodGhpcy50ZXh0dXJlLG5ldyBjYy5SZWN0KGogKiB0aGlzLl9waWVjZVdpZHRoLGkgKiB0aGlzLl9waWVjZUhlaWdodCx0aGlzLl9waWVjZVdpZHRoLCB0aGlzLl9waWVjZUhlaWdodCksZmFsc2UsY2MudjIoMCwwKSxuZXcgY2MuU2l6ZSh0aGlzLl9waWVjZVdpZHRoLHRoaXMuX3BpZWNlSGVpZ2h0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5tX3Nwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuX2JpdG1hcEFyclt0aGlzLnJvd0luZGV4XVswXTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLndpZHRoID0gdGhpcy5fcGllY2VXaWR0aDtcclxuICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gdGhpcy5fcGllY2VIZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vdGhpcy50aW1lciA9IHRoaXMuaW50ZXJ2YWw7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMucnVubmluZyA9IHRoaXMuYXV0b1BsYXlPbkxvYWQ7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzZXQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMucGxheUluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lcyA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RnJhbWUgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXlBY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpXHJcbiAgICB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5ydW5uaW5nKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBsYXlUaW1lcyAhPSAwICYmIHRoaXMuY3VycmVudFRpbWVzID09IHRoaXMucGxheVRpbWVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLnRpbWVyIC09IGR0O1xyXG5cclxuICAgICAgICBpZiAodGhpcy50aW1lciA8PSAwKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSB0aGlzLmludGVydmFsO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RnJhbWUgPSB0aGlzLmN1cnJlbnRGcmFtZSAlIHRoaXMuY29sO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wbGF5QWN0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZSsrO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50RnJhbWUgPT0gdGhpcy5jb2wpXHJcbiAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmlzQWxsKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm93SW5kZXgrKztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5yb3dJbmRleCA9PSB0aGlzLnJvdylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWVzICsrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJjb21wbGV0ZVRpbWVzXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheVRpbWVzICE9IDAgJiYgdGhpcy5jdXJyZW50VGltZXMgPT0gdGhpcy5wbGF5VGltZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiY29tcGxldGVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5hdXRvRGVzdHJveSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvd0luZGV4ICU9IHRoaXMucm93O1xyXG4gICAgICAgICAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lcyArKztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJjb21wbGV0ZVRpbWVzXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5VGltZXMgIT0gMCAmJiB0aGlzLmN1cnJlbnRUaW1lcyA9PSB0aGlzLnBsYXlUaW1lcylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiY29tcGxldGVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmF1dG9EZXN0cm95KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcGxheUFjdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5yb3dJbmRleCA9IHRoaXMuY2xhbXAodGhpcy5yb3dJbmRleCwgMCwgdGhpcy5yb3cgLSAxKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcGxheUluZGV4ID0gdGhpcy5fcGxheUluZGV4ICUgKHRoaXMuZW5kIC0gdGhpcy5iZWdpbikgKyB0aGlzLmJlZ2luO1xyXG5cclxuICAgICAgICB0aGlzLm1fc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5fYml0bWFwQXJyW3RoaXMucm93SW5kZXhdW3RoaXMuX3BsYXlJbmRleF07XHJcbiAgICAgICAgLy90aGlzLm1fc3ByaXRlLnNwcml0ZUZyYW1lLnNldFJlY3QodGhpcy5yZWN0KTtcclxuXHJcbiAgICAgICAgdGhpcy5fcGxheUluZGV4Kys7XHJcbiAgICB9XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOaSreaUvuW9seeJh1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBwbGF5KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyDlgZzmraLmkq3mlL7lvbHniYdcclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgc3RvcCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOi3s+W4p+aSreaUvlxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIC8vLyA8cGFyYW0gbmFtZT1cImZyYW1lXCI+5binPC9wYXJhbT5cclxuICAgIHB1YmxpYyBnb3RvQW5kUGxheShmcmFtZTpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9wbGF5SW5kZXggPSBmcmFtZTtcclxuICAgICAgICB0aGlzLl9wbGF5SW5kZXggPSB0aGlzLmNsYW1wKHRoaXMuX3BsYXlJbmRleCwgMCwgdGhpcy5jb2wgLSAxKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIOi3s+W4p+WBnOatolxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIC8vLyA8cGFyYW0gbmFtZT1cImZyYW1lXCI+5binPC9wYXJhbT5cclxuICAgIHB1YmxpYyBnb3RvQW5kU3RvcChmcmFtZTpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuX3BsYXlJbmRleCA9IGZyYW1lO1xyXG4gICAgICAgIHRoaXMuX3BsYXlJbmRleCA9IHRoaXMuY2xhbXAodGhpcy5fcGxheUluZGV4LCAwLCB0aGlzLmNvbCAtIDEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubV9zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLl9iaXRtYXBBcnJbdGhpcy5yb3dJbmRleF1bdGhpcy5fcGxheUluZGV4XTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGNsYW1wKHZhbHVlOm51bWJlcixtaW5MaW1pdDpudW1iZXIsbWF4TGltaXQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHZhbHVlIDwgbWluTGltaXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbWluTGltaXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih2YWx1ZSA+IG1heExpbWl0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1heExpbWl0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
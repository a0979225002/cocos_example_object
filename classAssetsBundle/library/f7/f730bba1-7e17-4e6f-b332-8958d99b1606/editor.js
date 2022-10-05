System.register(["cce.code-quality.cr", "cc", "./Game/GameApp.js", "./Managers/ResMgr.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, GameApp, ResMgr, _dec, _class, _class2, _temp, _crd, ccclass, property, GameLanch;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGameApp(extras) {
    _reporterNs.report("GameApp", "./Game/GameApp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "./Managers/ResMgr", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_GameGameAppJs) {
      GameApp = _GameGameAppJs.GameApp;
    }, function (_ManagersResMgrJs) {
      ResMgr = _ManagersResMgrJs.ResMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f730buhfhdOb7MyiVjZmxYG", "GameLanch", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameLanch", GameLanch = (_dec = ccclass('GameLanch'), _dec(_class = (_temp = _class2 = class GameLanch extends Component {
        onLoad() {
          if (GameLanch.Instance === null) {
            GameLanch.Instance = this;
          } else {
            this.destroy();
            return;
          } // 初始化游戏框架: 资源管理模块，网络模块，协议模块，日志模块， 。。。


          this.node.addComponent(_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr); // end

          this.node.addComponent(_crd && GameApp === void 0 ? (_reportPossibleCrUseOfGameApp({
            error: Error()
          }), GameApp) : GameApp);
        }

        start() {
          // 资源监测更新
          // end
          (_crd && GameApp === void 0 ? (_reportPossibleCrUseOfGameApp({
            error: Error()
          }), GameApp) : GameApp).Instance.EnterGame();
        }

      }, _defineProperty(_class2, "Instance", null), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vQzovSG9tZS93b3Jrc3BhY2UvY2xhc3NBc3NldHNCdW5kbGUvYXNzZXRzL1NjcmlwdHMvR2FtZUxhbmNoLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJHYW1lQXBwIiwiUmVzTWdyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiR2FtZUxhbmNoIiwib25Mb2FkIiwiSW5zdGFuY2UiLCJkZXN0cm95Iiwibm9kZSIsImFkZENvbXBvbmVudCIsInN0YXJ0IiwiRW50ZXJHYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUzs7QUFDWkMsTUFBQUEsTyxrQkFBQUEsTzs7QUFDQUMsTUFBQUEsTSxxQkFBQUEsTTs7Ozs7OztPQUNIO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCTCxVOzsyQkFHakJNLFMsV0FEWkYsT0FBTyxDQUFDLFdBQUQsQyxtQ0FBUixNQUNhRSxTQURiLFNBQytCTCxTQUQvQixDQUN5QztBQUdyQ00sUUFBQUEsTUFBTSxHQUFTO0FBQ1gsY0FBR0QsU0FBUyxDQUFDRSxRQUFWLEtBQXVCLElBQTFCLEVBQWdDO0FBQzVCRixZQUFBQSxTQUFTLENBQUNFLFFBQVYsR0FBcUIsSUFBckI7QUFDSCxXQUZELE1BR0s7QUFDRCxpQkFBS0MsT0FBTDtBQUNBO0FBQ0gsV0FQVSxDQVNYOzs7QUFDQSxlQUFLQyxJQUFMLENBQVVDLFlBQVY7QUFBQTtBQUFBLGdDQVZXLENBV1g7O0FBRUEsZUFBS0QsSUFBTCxDQUFVQyxZQUFWO0FBQUE7QUFBQTtBQUNIOztBQUVEQyxRQUFBQSxLQUFLLEdBQUk7QUFDTDtBQUNBO0FBRUE7QUFBQTtBQUFBLGtDQUFRSixRQUFSLENBQWlCSyxTQUFqQjtBQUNIOztBQXhCb0MsTyx1Q0FDRCxJIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gJ2NjJztcclxuaW1wb3J0IHsgR2FtZUFwcCB9IGZyb20gJy4vR2FtZS9HYW1lQXBwJztcclxuaW1wb3J0IHsgUmVzTWdyIH0gZnJvbSAnLi9NYW5hZ2Vycy9SZXNNZ3InO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0dhbWVMYW5jaCcpXHJcbmV4cG9ydCBjbGFzcyBHYW1lTGFuY2ggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcHVibGljIHN0YXRpYyBJbnN0YW5jZTogR2FtZUxhbmNoID0gbnVsbCBhcyB1bmtub3duIGFzIEdhbWVMYW5jaDtcclxuXHJcbiAgICBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYoR2FtZUxhbmNoLkluc3RhbmNlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIEdhbWVMYW5jaC5JbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyW5ri45oiP5qGG5p62OiDotYTmupDnrqHnkIbmqKHlnZfvvIznvZHnu5zmqKHlnZfvvIzljY/orq7mqKHlnZfvvIzml6Xlv5fmqKHlnZfvvIwg44CC44CC44CCXHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENvbXBvbmVudChSZXNNZ3IpO1xyXG4gICAgICAgIC8vIGVuZFxyXG5cclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KEdhbWVBcHApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvLyDotYTmupDnm5HmtYvmm7TmlrBcclxuICAgICAgICAvLyBlbmRcclxuXHJcbiAgICAgICAgR2FtZUFwcC5JbnN0YW5jZS5FbnRlckdhbWUoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
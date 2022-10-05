System.register(["cce.code-quality.cr", "cc", "./Game/GameApp.js", "./Managers/ResMgr.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, GameApp, ResMgr, _dec, _class, _class2, _temp, _crd, ccclass, property, GameLanch;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameLanch", GameLanch = (_dec = ccclass('GameLanch'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameLanch, _Component);

        function GameLanch() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = GameLanch.prototype;

        _proto.onLoad = function onLoad() {
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
        };

        _proto.start = function start() {
          // 资源监测更新
          // end
          (_crd && GameApp === void 0 ? (_reportPossibleCrUseOfGameApp({
            error: Error()
          }), GameApp) : GameApp).Instance.EnterGame();
        };

        return GameLanch;
      }(Component), _defineProperty(_class2, "Instance", null), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vQzovSG9tZS93b3Jrc3BhY2UvY2xhc3NBc3NldHNCdW5kbGUvYXNzZXRzL1NjcmlwdHMvR2FtZUxhbmNoLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJHYW1lQXBwIiwiUmVzTWdyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiR2FtZUxhbmNoIiwib25Mb2FkIiwiSW5zdGFuY2UiLCJkZXN0cm95Iiwibm9kZSIsImFkZENvbXBvbmVudCIsInN0YXJ0IiwiRW50ZXJHYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTOztBQUNaQyxNQUFBQSxPLGtCQUFBQSxPOztBQUNBQyxNQUFBQSxNLHFCQUFBQSxNOzs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JKLFUsQ0FBdEJJLE87QUFBU0MsTUFBQUEsUSxHQUFhTCxVLENBQWJLLFE7OzJCQUdKQyxTLFdBRFpGLE9BQU8sQ0FBQyxXQUFELEM7Ozs7Ozs7OztlQUlKRyxNLEdBQUEsa0JBQWU7QUFDWCxjQUFHRCxTQUFTLENBQUNFLFFBQVYsS0FBdUIsSUFBMUIsRUFBZ0M7QUFDNUJGLFlBQUFBLFNBQVMsQ0FBQ0UsUUFBVixHQUFxQixJQUFyQjtBQUNILFdBRkQsTUFHSztBQUNELGlCQUFLQyxPQUFMO0FBQ0E7QUFDSCxXQVBVLENBU1g7OztBQUNBLGVBQUtDLElBQUwsQ0FBVUMsWUFBVjtBQUFBO0FBQUEsZ0NBVlcsQ0FXWDs7QUFFQSxlQUFLRCxJQUFMLENBQVVDLFlBQVY7QUFBQTtBQUFBO0FBQ0gsUzs7ZUFFREMsSyxHQUFBLGlCQUFTO0FBQ0w7QUFDQTtBQUVBO0FBQUE7QUFBQSxrQ0FBUUosUUFBUixDQUFpQkssU0FBakI7QUFDSCxTOzs7UUF4QjBCWixTLHdDQUNTLEkiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBHYW1lQXBwIH0gZnJvbSAnLi9HYW1lL0dhbWVBcHAnO1xyXG5pbXBvcnQgeyBSZXNNZ3IgfSBmcm9tICcuL01hbmFnZXJzL1Jlc01ncic7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnR2FtZUxhbmNoJylcclxuZXhwb3J0IGNsYXNzIEdhbWVMYW5jaCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlOiBHYW1lTGFuY2ggPSBudWxsIGFzIHVua25vd24gYXMgR2FtZUxhbmNoO1xyXG5cclxuICAgIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBpZihHYW1lTGFuY2guSW5zdGFuY2UgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgR2FtZUxhbmNoLkluc3RhbmNlID0gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDliJ3lp4vljJbmuLjmiI/moYbmnrY6IOi1hOa6kOeuoeeQhuaooeWdl++8jOe9kee7nOaooeWdl++8jOWNj+iuruaooeWdl++8jOaXpeW/l+aooeWdl++8jCDjgILjgILjgIJcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KFJlc01ncik7XHJcbiAgICAgICAgLy8gZW5kXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDb21wb25lbnQoR2FtZUFwcCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOi1hOa6kOebkea1i+abtOaWsFxyXG4gICAgICAgIC8vIGVuZFxyXG5cclxuICAgICAgICBHYW1lQXBwLkluc3RhbmNlLkVudGVyR2FtZSgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
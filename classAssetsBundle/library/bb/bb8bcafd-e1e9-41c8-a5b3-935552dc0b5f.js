System.register(["cce.code-quality.cr", "cc", "../Managers/ResMgr.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, find, instantiate, Prefab, Sprite, ResMgr, _crd, GameApp;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../Managers/ResMgr", _context.meta, extras);
  }

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      find = _cc.find;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
    }, function (_ManagersResMgrJs) {
      ResMgr = _ManagersResMgrJs.ResMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bb8bcr94elByKWzk1VS3Atf", "GameApp", _context.meta);

      _export("GameApp", GameApp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameApp, _Component);

        function GameApp() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "canvas", null);

          _defineProperty(_assertThisInitialized(_this), "progressBar", null);

          return _this;
        }

        var _proto = GameApp.prototype;

        _proto.onLoad = function onLoad() {
          var _this$canvas, _this$canvas$getChild, _this$canvas$getChild2, _this$canvas$getChild3;

          if (GameApp.Instance === null) {
            GameApp.Instance = this;
          } else {
            this.destroy();
            return;
          }

          this.canvas = find("Canvas");
          this.progressBar = (_this$canvas = this.canvas) === null || _this$canvas === void 0 ? void 0 : (_this$canvas$getChild = _this$canvas.getChildByName("ResLoading")) === null || _this$canvas$getChild === void 0 ? void 0 : (_this$canvas$getChild2 = _this$canvas$getChild.getChildByName("UIProgress")) === null || _this$canvas$getChild2 === void 0 ? void 0 : (_this$canvas$getChild3 = _this$canvas$getChild2.getChildByName("value")) === null || _this$canvas$getChild3 === void 0 ? void 0 : _this$canvas$getChild3.getComponent(Sprite);
          this.progressBar.fillRange = 0;
        };

        _proto.EnterGame = function EnterGame() {
          var _this2 = this;

          var resPkg = {
            Maps: {
              assetType: Prefab,
              urls: ["Prefabs/Fisher001"]
            },
            GUI: {
              assetType: Prefab,
              urls: ["UIPrefabs/GameUI", "UIPrefabs/LoginUI"]
            }
          };
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).Instance.preloadResPkg(resPkg, function (now, total) {
            var per = now / total;

            if (_this2.progressBar !== null) {
              _this2.progressBar.fillRange = per;
            }
          }, function () {
            var _this2$canvas;

            (_this2$canvas = _this2.canvas) === null || _this2$canvas === void 0 ? void 0 : _this2$canvas.destroyAllChildren(); // 加载资源

            _this2.EnterLoginScene(); // end 

          });
        };

        _proto.EnterLoginScene = function EnterLoginScene() {
          var _this$canvas2;

          // 释放3D地图
          var mapPrefab = (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).Instance.getAsset("Maps", "Prefabs/Fisher001");
          var map = instantiate(mapPrefab);
          this.node.addChild(map); // end
          // 释放角色
          // end
          // 释放UI视图

          var uiPrefab = (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).Instance.getAsset("GUI", "UIPrefabs/LoginUI");
          var uiView = instantiate(uiPrefab);
          (_this$canvas2 = this.canvas) === null || _this$canvas2 === void 0 ? void 0 : _this$canvas2.addChild(uiView); // end
        };

        return GameApp;
      }(Component));

      _defineProperty(GameApp, "Instance", null);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vQzovSG9tZS93b3Jrc3BhY2UvY2xhc3NBc3NldHNCdW5kbGUvYXNzZXRzL1NjcmlwdHMvR2FtZS9HYW1lQXBwLnRzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImZpbmQiLCJpbnN0YW50aWF0ZSIsIlByZWZhYiIsIlNwcml0ZSIsIlJlc01nciIsIkdhbWVBcHAiLCJvbkxvYWQiLCJJbnN0YW5jZSIsImRlc3Ryb3kiLCJjYW52YXMiLCJwcm9ncmVzc0JhciIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiZmlsbFJhbmdlIiwiRW50ZXJHYW1lIiwicmVzUGtnIiwiTWFwcyIsImFzc2V0VHlwZSIsInVybHMiLCJHVUkiLCJwcmVsb2FkUmVzUGtnIiwibm93IiwidG90YWwiLCJwZXIiLCJkZXN0cm95QWxsQ2hpbGRyZW4iLCJFbnRlckxvZ2luU2NlbmUiLCJtYXBQcmVmYWIiLCJnZXRBc3NldCIsIm1hcCIsIm5vZGUiLCJhZGRDaGlsZCIsInVpUHJlZmFiIiwidWlWaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNTQSxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLFcsT0FBQUEsVztBQUFtQkMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLE0sT0FBQUEsTTs7QUFDNUNDLE1BQUFBLE0scUJBQUFBLE07Ozs7Ozs7eUJBRUlDLE87Ozs7Ozs7Ozs7OzttRUFFbUIsSTs7d0VBQ08sSTs7Ozs7OztlQUVuQ0MsTSxHQUFBLGtCQUFlO0FBQUE7O0FBQ1gsY0FBR0QsT0FBTyxDQUFDRSxRQUFSLEtBQXFCLElBQXhCLEVBQThCO0FBQzFCRixZQUFBQSxPQUFPLENBQUNFLFFBQVIsR0FBbUIsSUFBbkI7QUFDSCxXQUZELE1BR0s7QUFDRCxpQkFBS0MsT0FBTDtBQUNBO0FBQ0g7O0FBRUQsZUFBS0MsTUFBTCxHQUFjVCxJQUFJLENBQUMsUUFBRCxDQUFsQjtBQUNBLGVBQUtVLFdBQUwsbUJBQW1CLEtBQUtELE1BQXhCLDBFQUFtQixhQUFhRSxjQUFiLENBQTRCLFlBQTVCLENBQW5CLG9GQUFtQixzQkFBMkNBLGNBQTNDLENBQTBELFlBQTFELENBQW5CLHFGQUFtQix1QkFBeUVBLGNBQXpFLENBQXdGLE9BQXhGLENBQW5CLDJEQUFtQix1QkFBa0dDLFlBQWxHLENBQStHVCxNQUEvRyxDQUFuQjtBQUNBLGVBQUtPLFdBQUwsQ0FBaUJHLFNBQWpCLEdBQTZCLENBQTdCO0FBQ0gsUzs7ZUFFTUMsUyxHQUFQLHFCQUF5QjtBQUFBOztBQUNyQixjQUFJQyxNQUFNLEdBQUc7QUFDVEMsWUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLGNBQUFBLFNBQVMsRUFBRWYsTUFEVDtBQUVGZ0IsY0FBQUEsSUFBSSxFQUFFLENBQ0YsbUJBREU7QUFGSixhQURHO0FBUVRDLFlBQUFBLEdBQUcsRUFBRTtBQUNERixjQUFBQSxTQUFTLEVBQUVmLE1BRFY7QUFFRGdCLGNBQUFBLElBQUksRUFBRSxDQUNGLGtCQURFLEVBRUYsbUJBRkU7QUFGTDtBQVJJLFdBQWI7QUFpQkE7QUFBQTtBQUFBLGdDQUFPWCxRQUFQLENBQWdCYSxhQUFoQixDQUE4QkwsTUFBOUIsRUFBc0MsVUFBQ00sR0FBRCxFQUFjQyxLQUFkLEVBQThCO0FBQ2hFLGdCQUFJQyxHQUFHLEdBQUdGLEdBQUcsR0FBR0MsS0FBaEI7O0FBQ0EsZ0JBQUcsTUFBSSxDQUFDWixXQUFMLEtBQXFCLElBQXhCLEVBQThCO0FBQzFCLGNBQUEsTUFBSSxDQUFDQSxXQUFMLENBQWlCRyxTQUFqQixHQUE2QlUsR0FBN0I7QUFDSDtBQUVKLFdBTkQsRUFNRyxZQUFJO0FBQUE7O0FBQ0gsNkJBQUEsTUFBSSxDQUFDZCxNQUFMLGdFQUFhZSxrQkFBYixHQURHLENBR0g7O0FBQ0EsWUFBQSxNQUFJLENBQUNDLGVBQUwsR0FKRyxDQUtIOztBQUNILFdBWkQ7QUFjSCxTOztlQUVNQSxlLEdBQVAsMkJBQStCO0FBQUE7O0FBQzNCO0FBQ0EsY0FBSUMsU0FBUyxHQUFHO0FBQUE7QUFBQSxnQ0FBT25CLFFBQVAsQ0FBZ0JvQixRQUFoQixDQUF5QixNQUF6QixFQUFpQyxtQkFBakMsQ0FBaEI7QUFDQSxjQUFJQyxHQUFHLEdBQUczQixXQUFXLENBQUN5QixTQUFELENBQXJCO0FBQ0EsZUFBS0csSUFBTCxDQUFVQyxRQUFWLENBQW1CRixHQUFuQixFQUoyQixDQUszQjtBQUVBO0FBQ0E7QUFFQTs7QUFDQSxjQUFJRyxRQUFRLEdBQUc7QUFBQTtBQUFBLGdDQUFPeEIsUUFBUCxDQUFnQm9CLFFBQWhCLENBQXlCLEtBQXpCLEVBQWdDLG1CQUFoQyxDQUFmO0FBQ0EsY0FBSUssTUFBTSxHQUFHL0IsV0FBVyxDQUFDOEIsUUFBRCxDQUF4QjtBQUNBLGdDQUFLdEIsTUFBTCxnRUFBYXFCLFFBQWIsQ0FBc0JFLE1BQXRCLEVBYjJCLENBYzNCO0FBQ0gsUzs7O1FBcEV3QmpDLFM7O3NCQUFoQk0sTyxjQUN5QixJIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENvbXBvbmVudCwgZmluZCwgaW5zdGFudGlhdGUsIE5vZGUsIFByZWZhYiwgU3ByaXRlIH0gZnJvbSAnY2MnO1xyXG5pbXBvcnQgeyBSZXNNZ3IgfSBmcm9tICcuLi9NYW5hZ2Vycy9SZXNNZ3InO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcHVibGljIHN0YXRpYyBJbnN0YW5jZTogR2FtZUFwcCA9IG51bGwgYXMgdW5rbm93biBhcyBHYW1lQXBwO1xyXG4gICAgcHJpdmF0ZSBjYW52YXM6IE5vZGV8bnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHByb2dyZXNzQmFyOiBTcHJpdGV8bnVsbCA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIGlmKEdhbWVBcHAuSW5zdGFuY2UgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgR2FtZUFwcC5JbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBmaW5kKFwiQ2FudmFzXCIpO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSB0aGlzLmNhbnZhcz8uZ2V0Q2hpbGRCeU5hbWUoXCJSZXNMb2FkaW5nXCIpPy5nZXRDaGlsZEJ5TmFtZShcIlVJUHJvZ3Jlc3NcIik/LmdldENoaWxkQnlOYW1lKFwidmFsdWVcIik/LmdldENvbXBvbmVudChTcHJpdGUpIGFzIFNwcml0ZTtcclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmZpbGxSYW5nZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEVudGVyR2FtZSgpOiB2b2lkIHtcclxuICAgICAgICB2YXIgcmVzUGtnID0ge1xyXG4gICAgICAgICAgICBNYXBzOiB7XHJcbiAgICAgICAgICAgICAgICBhc3NldFR5cGU6IFByZWZhYixcclxuICAgICAgICAgICAgICAgIHVybHM6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIlByZWZhYnMvRmlzaGVyMDAxXCIsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgR1VJOiB7XHJcbiAgICAgICAgICAgICAgICBhc3NldFR5cGU6IFByZWZhYixcclxuICAgICAgICAgICAgICAgIHVybHM6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIlVJUHJlZmFicy9HYW1lVUlcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlVJUHJlZmFicy9Mb2dpblVJXCIsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIFJlc01nci5JbnN0YW5jZS5wcmVsb2FkUmVzUGtnKHJlc1BrZywgKG5vdzogbnVtYmVyLCB0b3RhbDogbnVtYmVyKT0+e1xyXG4gICAgICAgICAgICB2YXIgcGVyID0gbm93IC8gdG90YWw7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucHJvZ3Jlc3NCYXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuZmlsbFJhbmdlID0gcGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sICgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzPy5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOWKoOi9vei1hOa6kFxyXG4gICAgICAgICAgICB0aGlzLkVudGVyTG9naW5TY2VuZSgpO1xyXG4gICAgICAgICAgICAvLyBlbmQgXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgRW50ZXJMb2dpblNjZW5lKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIOmHiuaUvjNE5Zyw5Zu+XHJcbiAgICAgICAgdmFyIG1hcFByZWZhYiA9IFJlc01nci5JbnN0YW5jZS5nZXRBc3NldChcIk1hcHNcIiwgXCJQcmVmYWJzL0Zpc2hlcjAwMVwiKTtcclxuICAgICAgICB2YXIgbWFwID0gaW5zdGFudGlhdGUobWFwUHJlZmFiKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobWFwKTtcclxuICAgICAgICAvLyBlbmRcclxuXHJcbiAgICAgICAgLy8g6YeK5pS+6KeS6ImyXHJcbiAgICAgICAgLy8gZW5kXHJcblxyXG4gICAgICAgIC8vIOmHiuaUvlVJ6KeG5Zu+XHJcbiAgICAgICAgdmFyIHVpUHJlZmFiID0gUmVzTWdyLkluc3RhbmNlLmdldEFzc2V0KFwiR1VJXCIsIFwiVUlQcmVmYWJzL0xvZ2luVUlcIik7XHJcbiAgICAgICAgdmFyIHVpVmlldyA9IGluc3RhbnRpYXRlKHVpUHJlZmFiKTtcclxuICAgICAgICB0aGlzLmNhbnZhcz8uYWRkQ2hpbGQodWlWaWV3KTtcclxuICAgICAgICAvLyBlbmRcclxuICAgIH1cclxufVxyXG4iXX0=
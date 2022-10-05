System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Component, assetManager, _crd, ResMgr;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      assetManager = _cc.assetManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ef5cdLScJpD5bHO5EUhKMcY", "ResMgr", _context.meta);

      _export("ResMgr", ResMgr = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ResMgr, _Component);

        function ResMgr() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "totalAb", 0);

          _defineProperty(_assertThisInitialized(_this), "nowAb", 0);

          _defineProperty(_assertThisInitialized(_this), "total", 0);

          _defineProperty(_assertThisInitialized(_this), "now", 0);

          _defineProperty(_assertThisInitialized(_this), "abBunds", {});

          _defineProperty(_assertThisInitialized(_this), "progressFunc", null);

          _defineProperty(_assertThisInitialized(_this), "endFunc", null);

          return _this;
        }

        var _proto = ResMgr.prototype;

        _proto.onLoad = function onLoad() {
          if (ResMgr.Instance === null) {
            ResMgr.Instance = this;
          } else {
            this.destroy();
            return;
          }
        };

        _proto.loadAssetsBundle = function loadAssetsBundle(abName, endFunc) {
          var _this2 = this;

          assetManager.loadBundle(abName, function (err, bundle) {
            if (err !== null) {
              console.log("[ResMgr]:Load AssetsBundle Error: " + abName);
              _this2.abBunds[abName] = null;
            } else {
              console.log("[ResMgr]:Load AssetsBundle Success: " + abName);
              _this2.abBunds[abName] = bundle;
            }

            if (endFunc) {
              endFunc();
            }
          });
        };

        _proto.loadRes = function loadRes(abBundle, url, typeClasss) {
          var _this3 = this;

          abBundle.load(url, typeClasss, function (error, asset) {
            _this3.now++;

            if (error) {
              console.log("load Res " + url + " error: " + error);
            } else {
              console.log("load Res " + url + " success!");
            }

            if (_this3.progressFunc) {
              _this3.progressFunc(_this3.now, _this3.total);
            }

            console.log(_this3.now, _this3.total);

            if (_this3.now >= _this3.total) {
              if (_this3.endFunc !== null) {
                _this3.endFunc();
              }
            }
          });
        };

        _proto.loadAssetsInAssetsBundle = function loadAssetsInAssetsBundle(resPkg) {
          for (var key in resPkg) {
            var urlSet = resPkg[key].urls;
            var typeClass = resPkg[key].assetType;

            for (var i = 0; i < urlSet.length; i++) {
              this.loadRes(this.abBunds[key], urlSet[i], typeClass);
            }
          }
        } // var pkg = {GUI: {assetType: cc.Prefab, urls: ["", "", ""] }};
        ;

        _proto.preloadResPkg = function preloadResPkg(resPkg, progressFunc, endFunc) {
          var _this4 = this;

          this.total = 0;
          this.now = 0;
          this.totalAb = 0;
          this.nowAb = 0;
          this.progressFunc = progressFunc;
          this.endFunc = endFunc;

          for (var key in resPkg) {
            this.totalAb++;
            this.total += resPkg[key].urls.length;
          }

          for (var key in resPkg) {
            this.loadAssetsBundle(key, function () {
              _this4.nowAb++;

              if (_this4.nowAb === _this4.totalAb) {
                _this4.loadAssetsInAssetsBundle(resPkg);
              }
            });
          }
        };

        _proto.unloadResPkg = function unloadResPkg(resPkg) {};

        _proto.prelaodRes = function prelaodRes(abName, url, progressFunc, endFunc) {};

        _proto.getAsset = function getAsset(abName, resUrl) {
          var bondule = assetManager.getBundle(abName);

          if (bondule === null) {
            console.log("[error]: " + abName + " AssetsBundle not loaded !!!");
            return null;
          }

          return bondule.get(resUrl);
        };

        return ResMgr;
      }(Component));

      _defineProperty(ResMgr, "Instance", null);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vQzovSG9tZS93b3Jrc3BhY2UvY2xhc3NBc3NldHNCdW5kbGUvYXNzZXRzL1NjcmlwdHMvTWFuYWdlcnMvUmVzTWdyLnRzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImFzc2V0TWFuYWdlciIsIlJlc01nciIsIm9uTG9hZCIsIkluc3RhbmNlIiwiZGVzdHJveSIsImxvYWRBc3NldHNCdW5kbGUiLCJhYk5hbWUiLCJlbmRGdW5jIiwibG9hZEJ1bmRsZSIsImVyciIsImJ1bmRsZSIsImNvbnNvbGUiLCJsb2ciLCJhYkJ1bmRzIiwibG9hZFJlcyIsImFiQnVuZGxlIiwidXJsIiwidHlwZUNsYXNzcyIsImxvYWQiLCJlcnJvciIsImFzc2V0Iiwibm93IiwicHJvZ3Jlc3NGdW5jIiwidG90YWwiLCJsb2FkQXNzZXRzSW5Bc3NldHNCdW5kbGUiLCJyZXNQa2ciLCJrZXkiLCJ1cmxTZXQiLCJ1cmxzIiwidHlwZUNsYXNzIiwiYXNzZXRUeXBlIiwiaSIsImxlbmd0aCIsInByZWxvYWRSZXNQa2ciLCJ0b3RhbEFiIiwibm93QWIiLCJ1bmxvYWRSZXNQa2ciLCJwcmVsYW9kUmVzIiwiZ2V0QXNzZXQiLCJyZXNVcmwiLCJib25kdWxlIiwiZ2V0QnVuZGxlIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNTQSxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLFksT0FBQUEsWTs7Ozs7Ozt3QkFFYkMsTTs7Ozs7Ozs7Ozs7O29FQUVpQixDOztrRUFDRixDOztrRUFFQSxDOztnRUFDRixDOztvRUFFQyxFOzt5RUFDZSxJOztvRUFDTCxJOzs7Ozs7O2VBR2pDQyxNLEdBQUEsa0JBQWU7QUFDWCxjQUFHRCxNQUFNLENBQUNFLFFBQVAsS0FBb0IsSUFBdkIsRUFBNkI7QUFDekJGLFlBQUFBLE1BQU0sQ0FBQ0UsUUFBUCxHQUFrQixJQUFsQjtBQUNILFdBRkQsTUFHSztBQUNELGlCQUFLQyxPQUFMO0FBQ0E7QUFDSDtBQUdKLFM7O2VBRU9DLGdC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QUFMO0FBQ0EsaUJBQUtYLEtBQUwsSUFBY0UsTUFBTSxDQUFDQyxHQUFELENBQU4sQ0FBWUUsSUFBWixDQUFpQkksTUFBL0I7QUFDSDs7QUFFRCxlQUFJLElBQUlOLEdBQVIsSUFBZUQsTUFBZixFQUF1QjtBQUNuQixpQkFBS3BCLGdCQUFMLENBQXNCcUIsR0FBdEIsRUFBMkIsWUFBSTtBQUMzQixjQUFBLE1BQUksQ0FBQ1MsS0FBTDs7QUFDQSxrQkFBSSxNQUFJLENBQUNBLEtBQUwsS0FBZSxNQUFJLENBQUNELE9BQXhCLEVBQWlDO0FBQzdCLGdCQUFBLE1BQUksQ0FBQ1Ysd0JBQUwsQ0FBOEJDLE1BQTlCO0FBQ0g7QUFDSixhQUxEO0FBT0g7QUFDSixTOztlQUVNVyxZLEdBQVAsc0JBQW9CWCxNQUFwQixFQUF1QyxDQUV0QyxDOztlQUVNWSxVLEdBQVAsb0JBQWtCL0IsTUFBbEIsRUFBa0NVLEdBQWxDLEVBQStDTSxZQUEvQyxFQUF1RWYsT0FBdkUsRUFBZ0csQ0FFL0YsQzs7ZUFFTStCLFEsR0FBUCxrQkFBZ0JoQyxNQUFoQixFQUFnQ2lDLE1BQWhDLEVBQXFEO0FBQ2pELGNBQUlDLE9BQU8sR0FBR3hDLFlBQVksQ0FBQ3lDLFNBQWIsQ0FBdUJuQyxNQUF2QixDQUFkOztBQUNBLGNBQUlrQyxPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDbEI3QixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFjTixNQUFkLEdBQXVCLDhCQUFuQztBQUNBLG1CQUFPLElBQVA7QUFDSDs7QUFDRCxpQkFBT2tDLE9BQU8sQ0FBQ0UsR0FBUixDQUFZSCxNQUFaLENBQVA7QUFDSCxTOzs7UUF4SHVCeEMsUzs7c0JBQWZFLE0sY0FZd0IsSSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE5vZGUsIGFzc2V0TWFuYWdlciB9IGZyb20gJ2NjJztcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXNNZ3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgdG90YWxBYjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgbm93QWI6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSB0b3RhbDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgbm93OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgYWJCdW5kczogYW55ID0ge307XHJcbiAgICBwcml2YXRlIHByb2dyZXNzRnVuYzogRnVuY3Rpb258bnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGVuZEZ1bmM6IEZ1bmN0aW9ufG51bGwgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U6IFJlc01nciA9IG51bGwgYXMgdW5rbm93biBhcyBSZXNNZ3I7XHJcbiAgICBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYoUmVzTWdyLkluc3RhbmNlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIFJlc01nci5JbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZEFzc2V0c0J1bmRsZShhYk5hbWU6IHN0cmluZywgZW5kRnVuYzogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICBhc3NldE1hbmFnZXIubG9hZEJ1bmRsZShhYk5hbWUsIChlcnIsIGJ1bmRsZSk9PntcclxuICAgICAgICAgICAgaWYoZXJyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltSZXNNZ3JdOkxvYWQgQXNzZXRzQnVuZGxlIEVycm9yOiBcIiArIGFiTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFiQnVuZHNbYWJOYW1lXSA9IG51bGw7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbUmVzTWdyXTpMb2FkIEFzc2V0c0J1bmRsZSBTdWNjZXNzOiBcIiArIGFiTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFiQnVuZHNbYWJOYW1lXSA9IGJ1bmRsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihlbmRGdW5jKSB7XHJcbiAgICAgICAgICAgICAgICBlbmRGdW5jKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkUmVzKGFiQnVuZGxlOiBhbnksIHVybDogYW55LCB0eXBlQ2xhc3NzOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBhYkJ1bmRsZS5sb2FkKHVybCwgdHlwZUNsYXNzcywgKGVycm9yOiBhbnksIGFzc2V0OiBhbnkpPT57XHJcbiAgICAgICAgICAgIHRoaXMubm93ICsrO1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9hZCBSZXMgXCIgKyB1cmwgKyBcIiBlcnJvcjogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvYWQgUmVzIFwiICsgdXJsICsgXCIgc3VjY2VzcyFcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2dyZXNzRnVuYykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Z1bmModGhpcy5ub3csIHRoaXMudG90YWwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5vdywgdGhpcy50b3RhbCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vdyA+PSB0aGlzLnRvdGFsKSB7ICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuZEZ1bmMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZEZ1bmMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZEFzc2V0c0luQXNzZXRzQnVuZGxlKHJlc1BrZzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yKHZhciBrZXkgaW4gcmVzUGtnKSB7XHJcbiAgICAgICAgICAgIHZhciB1cmxTZXQgPSByZXNQa2dba2V5XS51cmxzO1xyXG4gICAgICAgICAgICB2YXIgdHlwZUNsYXNzID0gcmVzUGtnW2tleV0uYXNzZXRUeXBlO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB1cmxTZXQubGVuZ3RoOyBpICsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRSZXModGhpcy5hYkJ1bmRzW2tleV0sIHVybFNldFtpXSwgdHlwZUNsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB2YXIgcGtnID0ge0dVSToge2Fzc2V0VHlwZTogY2MuUHJlZmFiLCB1cmxzOiBbXCJcIiwgXCJcIiwgXCJcIl0gfX07XHJcbiAgICBwdWJsaWMgcHJlbG9hZFJlc1BrZyhyZXNQa2c6IGFueSwgcHJvZ3Jlc3NGdW5jOiBGdW5jdGlvbnxudWxsLCBlbmRGdW5jOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudG90YWwgPSAwO1xyXG4gICAgICAgIHRoaXMubm93ID0gMDtcclxuICAgICAgICB0aGlzLnRvdGFsQWIgPSAwO1xyXG4gICAgICAgIHRoaXMubm93QWIgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnByb2dyZXNzRnVuYyA9IHByb2dyZXNzRnVuYztcclxuICAgICAgICB0aGlzLmVuZEZ1bmMgPSBlbmRGdW5jO1xyXG5cclxuICAgICAgICBmb3IodmFyIGtleSBpbiByZXNQa2cpIHtcclxuICAgICAgICAgICAgdGhpcy50b3RhbEFiICsrO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsICs9IHJlc1BrZ1trZXldLnVybHMubGVuZ3RoOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcih2YXIga2V5IGluIHJlc1BrZykge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRBc3NldHNCdW5kbGUoa2V5LCAoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3dBYiArKztcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vd0FiID09PSB0aGlzLnRvdGFsQWIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRBc3NldHNJbkFzc2V0c0J1bmRsZShyZXNQa2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1bmxvYWRSZXNQa2cocmVzUGtnOiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByZWxhb2RSZXMoYWJOYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nLCBwcm9ncmVzc0Z1bmM6IEZ1bmN0aW9uLCBlbmRGdW5jOiBGdW5jdGlvbik6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QXNzZXQoYWJOYW1lOiBzdHJpbmcsIHJlc1VybDogc3RyaW5nKTogYW55IHtcclxuICAgICAgICB2YXIgYm9uZHVsZSA9IGFzc2V0TWFuYWdlci5nZXRCdW5kbGUoYWJOYW1lKTtcclxuICAgICAgICBpZiAoYm9uZHVsZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltlcnJvcl06IFwiICsgYWJOYW1lICsgXCIgQXNzZXRzQnVuZGxlIG5vdCBsb2FkZWQgISEhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJvbmR1bGUuZ2V0KHJlc1VybCk7XHJcbiAgICB9XHJcbn1cclxuIl19
System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Component, assetManager, ResMgr, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("ResMgr", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      assetManager = _cc.assetManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ef5cdLScJpD5bHO5EUhKMcY", "ResMgr", _context.meta);

      _export("ResMgr", ResMgr = class ResMgr extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "totalAb", 0);

          _defineProperty(this, "nowAb", 0);

          _defineProperty(this, "total", 0);

          _defineProperty(this, "now", 0);

          _defineProperty(this, "abBunds", {});

          _defineProperty(this, "progressFunc", null);

          _defineProperty(this, "endFunc", null);
        }

        onLoad() {
          if (ResMgr.Instance === null) {
            ResMgr.Instance = this;
          } else {
            this.destroy();
            return;
          }
        }

        loadAssetsBundle(abName, endFunc) {
          assetManager.loadBundle(abName, (err, bundle) => {
            if (err !== null) {
              console.log("[ResMgr]:Load AssetsBundle Error: " + abName);
              this.abBunds[abName] = null;
            } else {
              console.log("[ResMgr]:Load AssetsBundle Success: " + abName);
              this.abBunds[abName] = bundle;
            }

            if (endFunc) {
              endFunc();
            }
          });
        }

        loadRes(abBundle, url, typeClasss) {
          abBundle.load(url, typeClasss, (error, asset) => {
            this.now++;

            if (error) {
              console.log("load Res " + url + " error: " + error);
            } else {
              console.log("load Res " + url + " success!");
            }

            if (this.progressFunc) {
              this.progressFunc(this.now, this.total);
            }

            console.log(this.now, this.total);

            if (this.now >= this.total) {
              if (this.endFunc !== null) {
                this.endFunc();
              }
            }
          });
        }

        loadAssetsInAssetsBundle(resPkg) {
          for (var key in resPkg) {
            var urlSet = resPkg[key].urls;
            var typeClass = resPkg[key].assetType;

            for (var i = 0; i < urlSet.length; i++) {
              this.loadRes(this.abBunds[key], urlSet[i], typeClass);
            }
          }
        } // var pkg = {GUI: {assetType: cc.Prefab, urls: ["", "", ""] }};


        preloadResPkg(resPkg, progressFunc, endFunc) {
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
            this.loadAssetsBundle(key, () => {
              this.nowAb++;

              if (this.nowAb === this.totalAb) {
                this.loadAssetsInAssetsBundle(resPkg);
              }
            });
          }
        }

        unloadResPkg(resPkg) {}

        prelaodRes(abName, url, progressFunc, endFunc) {}

        getAsset(abName, resUrl) {
          var bondule = assetManager.getBundle(abName);

          if (bondule === null) {
            console.log("[error]: " + abName + " AssetsBundle not loaded !!!");
            return null;
          }

          return bondule.get(resUrl);
        }

      });

      _defineProperty(ResMgr, "Instance", null);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vQzovSG9tZS93b3Jrc3BhY2UvY2xhc3NBc3NldHNCdW5kbGUvYXNzZXRzL1NjcmlwdHMvTWFuYWdlcnMvUmVzTWdyLnRzIl0sIm5hbWVzIjpbIlJlc01nciIsIkNvbXBvbmVudCIsImFzc2V0TWFuYWdlciIsIm9uTG9hZCIsIkluc3RhbmNlIiwiZGVzdHJveSIsImxvYWRBc3NldHNCdW5kbGUiLCJhYk5hbWUiLCJlbmRGdW5jIiwibG9hZEJ1bmRsZSIsImVyciIsImJ1bmRsZSIsImNvbnNvbGUiLCJsb2ciLCJhYkJ1bmRzIiwibG9hZFJlcyIsImFiQnVuZGxlIiwidXJsIiwidHlwZUNsYXNzcyIsImxvYWQiLCJlcnJvciIsImFzc2V0Iiwibm93IiwicHJvZ3Jlc3NGdW5jIiwidG90YWwiLCJsb2FkQXNzZXRzSW5Bc3NldHNCdW5kbGUiLCJyZXNQa2ciLCJrZXkiLCJ1cmxTZXQiLCJ1cmxzIiwidHlwZUNsYXNzIiwiYXNzZXRUeXBlIiwiaSIsImxlbmd0aCIsInByZWxvYWRSZXNQa2ciLCJ0b3RhbEFiIiwibm93QWIiLCJ1bmxvYWRSZXNQa2ciLCJwcmVsYW9kUmVzIiwiZ2V0QXNzZXQiLCJyZXNVcmwiLCJib25kdWxlIiwiZ2V0QnVuZGxlIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7MENBR2FBLE07Ozs7Ozs7OztBQUZKQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLFksT0FBQUEsWTs7Ozs7Ozt3QkFFYkYsTSxHQUFOLE1BQU1BLE1BQU4sU0FBcUJDLFNBQXJCLENBQStCO0FBQUE7QUFBQTs7QUFBQSwyQ0FFUixDQUZROztBQUFBLHlDQUdWLENBSFU7O0FBQUEseUNBS1YsQ0FMVTs7QUFBQSx1Q0FNWixDQU5ZOztBQUFBLDJDQVFYLEVBUlc7O0FBQUEsZ0RBU0ksSUFUSjs7QUFBQSwyQ0FVRCxJQVZDO0FBQUE7O0FBYWxDRSxRQUFBQSxNQUFNLEdBQVM7QUFDWCxjQUFHSCxNQUFNLENBQUNJLFFBQVAsS0FBb0IsSUFBdkIsRUFBNkI7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aUJBQUtTLE9BQUw7QUFDQSxpQkFBS1gsS0FBTCxJQUFjRSxNQUFNLENBQUNDLEdBQUQsQ0FBTixDQUFZRSxJQUFaLENBQWlCSSxNQUEvQjtBQUNIOztBQUVELGVBQUksSUFBSU4sR0FBUixJQUFlRCxNQUFmLEVBQXVCO0FBQ25CLGlCQUFLcEIsZ0JBQUwsQ0FBc0JxQixHQUF0QixFQUEyQixNQUFJO0FBQzNCLG1CQUFLUyxLQUFMOztBQUNBLGtCQUFJLEtBQUtBLEtBQUwsS0FBZSxLQUFLRCxPQUF4QixFQUFpQztBQUM3QixxQkFBS1Ysd0JBQUwsQ0FBOEJDLE1BQTlCO0FBQ0g7QUFDSixhQUxEO0FBT0g7QUFDSjs7QUFFTVcsUUFBQUEsWUFBUCxDQUFvQlgsTUFBcEIsRUFBdUMsQ0FFdEM7O0FBRU1ZLFFBQUFBLFVBQVAsQ0FBa0IvQixNQUFsQixFQUFrQ1UsR0FBbEMsRUFBK0NNLFlBQS9DLEVBQXVFZixPQUF2RSxFQUFnRyxDQUUvRjs7QUFFTStCLFFBQUFBLFFBQVAsQ0FBZ0JoQyxNQUFoQixFQUFnQ2lDLE1BQWhDLEVBQXFEO0FBQ2pELGNBQUlDLE9BQU8sR0FBR3ZDLFlBQVksQ0FBQ3dDLFNBQWIsQ0FBdUJuQyxNQUF2QixDQUFkOztBQUNBLGNBQUlrQyxPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDbEI3QixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFjTixNQUFkLEdBQXVCLDhCQUFuQztBQUNBLG1CQUFPLElBQVA7QUFDSDs7QUFDRCxpQkFBT2tDLE9BQU8sQ0FBQ0UsR0FBUixDQUFZSCxNQUFaLENBQVA7QUFDSDs7QUF4SGlDLE87O3NCQUF6QnhDLE0sY0FZd0IsSSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE5vZGUsIGFzc2V0TWFuYWdlciB9IGZyb20gJ2NjJztcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXNNZ3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgdG90YWxBYjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgbm93QWI6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSB0b3RhbDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgbm93OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgYWJCdW5kczogYW55ID0ge307XHJcbiAgICBwcml2YXRlIHByb2dyZXNzRnVuYzogRnVuY3Rpb258bnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGVuZEZ1bmM6IEZ1bmN0aW9ufG51bGwgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U6IFJlc01nciA9IG51bGwgYXMgdW5rbm93biBhcyBSZXNNZ3I7XHJcbiAgICBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYoUmVzTWdyLkluc3RhbmNlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIFJlc01nci5JbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZEFzc2V0c0J1bmRsZShhYk5hbWU6IHN0cmluZywgZW5kRnVuYzogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICBhc3NldE1hbmFnZXIubG9hZEJ1bmRsZShhYk5hbWUsIChlcnIsIGJ1bmRsZSk9PntcclxuICAgICAgICAgICAgaWYoZXJyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltSZXNNZ3JdOkxvYWQgQXNzZXRzQnVuZGxlIEVycm9yOiBcIiArIGFiTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFiQnVuZHNbYWJOYW1lXSA9IG51bGw7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbUmVzTWdyXTpMb2FkIEFzc2V0c0J1bmRsZSBTdWNjZXNzOiBcIiArIGFiTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFiQnVuZHNbYWJOYW1lXSA9IGJ1bmRsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihlbmRGdW5jKSB7XHJcbiAgICAgICAgICAgICAgICBlbmRGdW5jKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkUmVzKGFiQnVuZGxlOiBhbnksIHVybDogYW55LCB0eXBlQ2xhc3NzOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBhYkJ1bmRsZS5sb2FkKHVybCwgdHlwZUNsYXNzcywgKGVycm9yOiBhbnksIGFzc2V0OiBhbnkpPT57XHJcbiAgICAgICAgICAgIHRoaXMubm93ICsrO1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9hZCBSZXMgXCIgKyB1cmwgKyBcIiBlcnJvcjogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvYWQgUmVzIFwiICsgdXJsICsgXCIgc3VjY2VzcyFcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2dyZXNzRnVuYykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Z1bmModGhpcy5ub3csIHRoaXMudG90YWwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5vdywgdGhpcy50b3RhbCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vdyA+PSB0aGlzLnRvdGFsKSB7ICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuZEZ1bmMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZEZ1bmMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZEFzc2V0c0luQXNzZXRzQnVuZGxlKHJlc1BrZzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yKHZhciBrZXkgaW4gcmVzUGtnKSB7XHJcbiAgICAgICAgICAgIHZhciB1cmxTZXQgPSByZXNQa2dba2V5XS51cmxzO1xyXG4gICAgICAgICAgICB2YXIgdHlwZUNsYXNzID0gcmVzUGtnW2tleV0uYXNzZXRUeXBlO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB1cmxTZXQubGVuZ3RoOyBpICsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRSZXModGhpcy5hYkJ1bmRzW2tleV0sIHVybFNldFtpXSwgdHlwZUNsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB2YXIgcGtnID0ge0dVSToge2Fzc2V0VHlwZTogY2MuUHJlZmFiLCB1cmxzOiBbXCJcIiwgXCJcIiwgXCJcIl0gfX07XHJcbiAgICBwdWJsaWMgcHJlbG9hZFJlc1BrZyhyZXNQa2c6IGFueSwgcHJvZ3Jlc3NGdW5jOiBGdW5jdGlvbnxudWxsLCBlbmRGdW5jOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudG90YWwgPSAwO1xyXG4gICAgICAgIHRoaXMubm93ID0gMDtcclxuICAgICAgICB0aGlzLnRvdGFsQWIgPSAwO1xyXG4gICAgICAgIHRoaXMubm93QWIgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnByb2dyZXNzRnVuYyA9IHByb2dyZXNzRnVuYztcclxuICAgICAgICB0aGlzLmVuZEZ1bmMgPSBlbmRGdW5jO1xyXG5cclxuICAgICAgICBmb3IodmFyIGtleSBpbiByZXNQa2cpIHtcclxuICAgICAgICAgICAgdGhpcy50b3RhbEFiICsrO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsICs9IHJlc1BrZ1trZXldLnVybHMubGVuZ3RoOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcih2YXIga2V5IGluIHJlc1BrZykge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRBc3NldHNCdW5kbGUoa2V5LCAoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3dBYiArKztcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vd0FiID09PSB0aGlzLnRvdGFsQWIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRBc3NldHNJbkFzc2V0c0J1bmRsZShyZXNQa2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1bmxvYWRSZXNQa2cocmVzUGtnOiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByZWxhb2RSZXMoYWJOYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nLCBwcm9ncmVzc0Z1bmM6IEZ1bmN0aW9uLCBlbmRGdW5jOiBGdW5jdGlvbik6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QXNzZXQoYWJOYW1lOiBzdHJpbmcsIHJlc1VybDogc3RyaW5nKTogYW55IHtcclxuICAgICAgICB2YXIgYm9uZHVsZSA9IGFzc2V0TWFuYWdlci5nZXRCdW5kbGUoYWJOYW1lKTtcclxuICAgICAgICBpZiAoYm9uZHVsZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltlcnJvcl06IFwiICsgYWJOYW1lICsgXCIgQXNzZXRzQnVuZGxlIG5vdCBsb2FkZWQgISEhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJvbmR1bGUuZ2V0KHJlc1VybCk7XHJcbiAgICB9XHJcbn1cclxuIl19
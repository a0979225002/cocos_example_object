
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/AssetsMng.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0935a8N6rJPWKXmhvgo3hu/', 'AssetsMng');
// script/manager/AssetsMng.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Assets_1 = require("../data/Assets");
var EventMng_1 = require("../manager/EventMng");
var EventConst_1 = require("../data/const/EventConst");
var AssetsMng = /** @class */ (function () {
    function AssetsMng() {
    }
    AssetsMng.prototype.init = function () {
    };
    AssetsMng.prototype.onPreLoad = function () {
        this.onGamePrefabLoad();
    };
    AssetsMng.prototype.onPreLoadDone = function () {
        EventMng_1.default.emit(EventConst_1.LoadEvent.LOAD_PRELOAD_DONE);
    };
    AssetsMng.prototype.onGameSpineLoad = function () {
        var _this = this;
        var arr = Assets_1.default.getGameSpineUrls();
        cc.loader.loadResArray(arr, sp.SkeletonData, function (error, data) {
            _this.onGameSpineDone(error, data);
        });
    };
    AssetsMng.prototype.onGameSpineDone = function (error, data) {
        if (!error) {
            this.setAssets(data, '.spine');
            this.onPreLoadDone();
        }
        else {
            console.log(error);
        }
    };
    AssetsMng.prototype.onGameAssetsLoad = function () {
        var _this = this;
        var arr = Assets_1.default.getGameAssetsUrls();
        cc.loader.loadResArray(arr, cc.SpriteAtlas, function (error, data) {
            _this.onGameAssetsDone(error, data);
        });
    };
    AssetsMng.prototype.onGameAssetsDone = function (error, data) {
        if (!error) {
            this.setAssets(data);
            this.onGameSpineLoad();
        }
        else {
            console.log(error);
        }
    };
    AssetsMng.prototype.onGamePrefabLoad = function () {
        var _this = this;
        var arr = Assets_1.default.getGameAssetsPrefabUrls();
        cc.loader.loadResArray(arr, function (error, data) {
            _this.onGamePrefabLoadDone(error, data);
        });
    };
    AssetsMng.prototype.onGamePrefabLoadDone = function (error, data) {
        if (!error) {
            this.setAssets(data);
            this.onGameAssetsLoad();
        }
        else {
            console.log(error);
        }
    };
    AssetsMng.prototype.setAssets = function (data, name) {
        for (var i = 0; i < data.length; i++) {
            var valName = data[i]._name;
            if (name) {
                valName += name;
            }
            Assets_1.default[valName] = data[i];
        }
    };
    AssetsMng.prototype.getAssets = function (name) {
        if (Assets_1.default[name]) {
            return Assets_1.default[name];
        }
    };
    AssetsMng.prototype.getHeadPhotoImg = function (id) {
        var plist = this.getAssets("head_photo.plist");
        if (!plist) {
            return;
        }
        var num = id < 10 ? "0" + id : id;
        return plist.getSpriteFrame("head_" + num);
    };
    return AssetsMng;
}());
exports.default = new AssetsMng();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxBc3NldHNNbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFDcEMsZ0RBQTJDO0FBQzNDLHVEQUFxRDtBQUVyRDtJQUFBO0lBMkdBLENBQUM7SUF6R0csd0JBQUksR0FBSjtJQUVBLENBQUM7SUFFRCw2QkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELGlDQUFhLEdBQWI7UUFDSSxrQkFBUSxDQUFDLElBQUksQ0FBQyxzQkFBUyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUtELG1DQUFlLEdBQWY7UUFBQSxpQkFLQztRQUpHLElBQU0sR0FBRyxHQUFHLGdCQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN0QyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFDLEtBQUssRUFBRSxJQUFJO1lBQ3JELEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG1DQUFlLEdBQWYsVUFBZ0IsS0FBSyxFQUFFLElBQUk7UUFDdkIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjthQUFNO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFHRCxvQ0FBZ0IsR0FBaEI7UUFBQSxpQkFLQztRQUpHLElBQU0sR0FBRyxHQUFHLGdCQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN2QyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLEtBQUssRUFBRSxJQUFJO1lBQ3BELEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBR0Qsb0NBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDUixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMxQjthQUFNO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFHRCxvQ0FBZ0IsR0FBaEI7UUFBQSxpQkFLQztRQUpHLElBQU0sR0FBRyxHQUFHLGdCQUFNLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUM3QyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsVUFBQyxLQUFLLEVBQUUsSUFBSTtZQUNwQyxLQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdDQUFvQixHQUFwQixVQUFxQixLQUFLLEVBQUUsSUFBSTtRQUM1QixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUMzQjthQUFNO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFRCw2QkFBUyxHQUFULFVBQVUsSUFBSSxFQUFFLElBQWE7UUFFekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFFbEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUU1QixJQUFJLElBQUksRUFBRTtnQkFDTixPQUFPLElBQUksSUFBSSxDQUFDO2FBQ25CO1lBRUQsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FJN0I7SUFFTCxDQUFDO0lBR0QsNkJBQVMsR0FBVCxVQUFVLElBQVk7UUFDbEIsSUFBSSxnQkFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2QsT0FBTyxnQkFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUdELG1DQUFlLEdBQWYsVUFBZ0IsRUFBVTtRQUV0QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNSLE9BQU87U0FDVjtRQUVELElBQUksR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQUksRUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbEMsT0FBTyxLQUFLLENBQUMsY0FBYyxDQUFDLFVBQVEsR0FBSyxDQUFDLENBQUM7SUFFL0MsQ0FBQztJQUVMLGdCQUFDO0FBQUQsQ0EzR0EsQUEyR0MsSUFBQTtBQUVELGtCQUFlLElBQUksU0FBUyxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXNzZXRzIGZyb20gXCIuLi9kYXRhL0Fzc2V0c1wiO1xyXG5pbXBvcnQgRXZlbnRNbmcgZnJvbSBcIi4uL21hbmFnZXIvRXZlbnRNbmdcIjtcclxuaW1wb3J0IHsgTG9hZEV2ZW50IH0gZnJvbSBcIi4uL2RhdGEvY29uc3QvRXZlbnRDb25zdFwiO1xyXG5cclxuY2xhc3MgQXNzZXRzTW5nIHtcclxuXHJcbiAgICBpbml0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblByZUxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkdhbWVQcmVmYWJMb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25QcmVMb2FkRG9uZSgpOiB2b2lkIHtcclxuICAgICAgICBFdmVudE1uZy5lbWl0KExvYWRFdmVudC5MT0FEX1BSRUxPQURfRE9ORSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgb25HYW1lU3BpbmVMb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGFyciA9IEFzc2V0cy5nZXRHYW1lU3BpbmVVcmxzKCk7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXNBcnJheShhcnIsIHNwLlNrZWxldG9uRGF0YSwgKGVycm9yLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25HYW1lU3BpbmVEb25lKGVycm9yLCBkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkdhbWVTcGluZURvbmUoZXJyb3IsIGRhdGEpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXNzZXRzKGRhdGEsICcuc3BpbmUnKTtcclxuICAgICAgICAgICAgdGhpcy5vblByZUxvYWREb25lKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgb25HYW1lQXNzZXRzTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBhcnIgPSBBc3NldHMuZ2V0R2FtZUFzc2V0c1VybHMoKTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlc0FycmF5KGFyciwgY2MuU3ByaXRlQXRsYXMsIChlcnJvciwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uR2FtZUFzc2V0c0RvbmUoZXJyb3IsIGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkdhbWVBc3NldHNEb25lKGVycm9yLCBkYXRhKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFlcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLnNldEFzc2V0cyhkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5vbkdhbWVTcGluZUxvYWQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkdhbWVQcmVmYWJMb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGFyciA9IEFzc2V0cy5nZXRHYW1lQXNzZXRzUHJlZmFiVXJscygpO1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzQXJyYXkoYXJyLCAoZXJyb3IsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbkdhbWVQcmVmYWJMb2FkRG9uZShlcnJvciwgZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25HYW1lUHJlZmFiTG9hZERvbmUoZXJyb3IsIGRhdGEpIHtcclxuICAgICAgICBpZiAoIWVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXNzZXRzKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLm9uR2FtZUFzc2V0c0xvYWQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEFzc2V0cyhkYXRhLCBuYW1lPzogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IHZhbE5hbWUgPSBkYXRhW2ldLl9uYW1lO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHZhbE5hbWUgKz0gbmFtZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQXNzZXRzW3ZhbE5hbWVdID0gZGF0YVtpXTtcclxuXHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRBc3NldHMobmFtZTogc3RyaW5nKTogYW55e1xyXG4gICAgICAgIGlmIChBc3NldHNbbmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIEFzc2V0c1tuYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldEhlYWRQaG90b0ltZyhpZDogbnVtYmVyKTogY2MuU3ByaXRlRnJhbWUge1xyXG5cclxuICAgICAgICBsZXQgcGxpc3QgPSB0aGlzLmdldEFzc2V0cyhcImhlYWRfcGhvdG8ucGxpc3RcIik7XHJcblxyXG4gICAgICAgIGlmICghcGxpc3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG51bSA9IGlkIDwgMTAgPyBgMCR7aWR9YCA6IGlkO1xyXG4gICAgICAgIHJldHVybiBwbGlzdC5nZXRTcHJpdGVGcmFtZShgaGVhZF8ke251bX1gKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQXNzZXRzTW5nKCk7Il19
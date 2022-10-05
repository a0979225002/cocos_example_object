
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/Assets.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '340e97coRhIRIju4Wj756U6', 'Assets');
// script/data/Assets.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Assets = /** @class */ (function () {
    function Assets() {
        this.langAssetUrl = "images/txt/";
        this.gameAssetUrl = "images/";
        this.prefabAssetUrl = "prefab/";
        this.spineAssetUrl = "spine/";
        this._gameAssetsName = [
            "pet/pet_1",
            "pet/pet_2",
            "game/decoration"
        ];
        this._gameAssetsPrefabName = [
            "cube_item",
            "coin_gold_prefab",
            "coin_sliver_prefab",
        ];
        this._gameAssetsSpineName = [
            "select/select",
            "map/map_gpg1",
            "mine/pet01",
            "partner/mining1",
            "coin/coin",
        ];
    }
    Assets.prototype.getGameAssetsPrefabUrls = function () {
        var arr = [];
        for (var i = 0; i < this._gameAssetsPrefabName.length; i++) {
            arr.push(this.prefabAssetUrl + this._gameAssetsPrefabName[i]);
        }
        return arr;
    };
    Assets.prototype.getPrefabAssetUrl = function () {
        return this.prefabAssetUrl;
    };
    Assets.prototype.getGameAssetsUrls = function () {
        var arr = [];
        for (var i = 0; i < this._gameAssetsName.length; i++) {
            arr.push(this.getGameAssetUrl() + this._gameAssetsName[i]);
        }
        return arr;
    };
    Assets.prototype.getGameAssetUrl = function () {
        return this.gameAssetUrl;
    };
    Assets.prototype.getGameSpineUrls = function () {
        var arr = [];
        for (var i = 0; i < this._gameAssetsSpineName.length; i++) {
            arr.push(this.getGameSpineUrl() + this._gameAssetsSpineName[i]);
        }
        return arr;
    };
    Assets.prototype.getGameSpineUrl = function () {
        return this.spineAssetUrl;
    };
    return Assets;
}());
exports.default = new Assets();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxBc3NldHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO1FBSUksaUJBQVksR0FBVyxhQUFhLENBQUM7UUFDckMsaUJBQVksR0FBVyxTQUFTLENBQUM7UUFDakMsbUJBQWMsR0FBVyxTQUFTLENBQUM7UUFDbkMsa0JBQWEsR0FBVyxRQUFRLENBQUM7UUFFekIsb0JBQWUsR0FBYTtZQUNoQyxXQUFXO1lBQ1gsV0FBVztZQUNYLGlCQUFpQjtTQUNwQixDQUFDO1FBRU0sMEJBQXFCLEdBQWE7WUFDdEMsV0FBVztZQUNYLGtCQUFrQjtZQUNsQixvQkFBb0I7U0FDdkIsQ0FBQztRQUVNLHlCQUFvQixHQUFhO1lBRXJDLGVBQWU7WUFFZixjQUFjO1lBRWQsWUFBWTtZQUVaLGlCQUFpQjtZQUVqQixXQUFXO1NBRWQsQ0FBQztJQXVDTixDQUFDO0lBcENHLHdDQUF1QixHQUF2QjtRQUNJLElBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqRTtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVELGtDQUFpQixHQUFqQjtRQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixDQUFDO0lBRUQsa0NBQWlCLEdBQWpCO1FBQ0ksSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5RDtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVELGdDQUFlLEdBQWY7UUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQztJQUVELGlDQUFnQixHQUFoQjtRQUNJLElBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25FO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRUQsZ0NBQWUsR0FBZjtRQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM5QixDQUFDO0lBRUwsYUFBQztBQUFELENBeEVBLEFBd0VDLElBQUE7QUFFRCxrQkFBZSxJQUFJLE1BQU0sRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXNzZXRzIHtcblxuICAgIFt4OiBzdHJpbmddOiBhbnk7XG5cbiAgICBsYW5nQXNzZXRVcmw6IHN0cmluZyA9IFwiaW1hZ2VzL3R4dC9cIjtcbiAgICBnYW1lQXNzZXRVcmw6IHN0cmluZyA9IFwiaW1hZ2VzL1wiO1xuICAgIHByZWZhYkFzc2V0VXJsOiBzdHJpbmcgPSBcInByZWZhYi9cIjtcbiAgICBzcGluZUFzc2V0VXJsOiBzdHJpbmcgPSBcInNwaW5lL1wiO1xuXG4gICAgcHJpdmF0ZSBfZ2FtZUFzc2V0c05hbWU6IHN0cmluZ1tdID0gW1xuICAgICAgICBcInBldC9wZXRfMVwiLFxuICAgICAgICBcInBldC9wZXRfMlwiLFxuICAgICAgICBcImdhbWUvZGVjb3JhdGlvblwiXG4gICAgXTtcblxuICAgIHByaXZhdGUgX2dhbWVBc3NldHNQcmVmYWJOYW1lOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgXCJjdWJlX2l0ZW1cIixcbiAgICAgICAgXCJjb2luX2dvbGRfcHJlZmFiXCIsXG4gICAgICAgIFwiY29pbl9zbGl2ZXJfcHJlZmFiXCIsXG4gICAgXTtcblxuICAgIHByaXZhdGUgX2dhbWVBc3NldHNTcGluZU5hbWU6IHN0cmluZ1tdID0gW1xuXG4gICAgICAgIFwic2VsZWN0L3NlbGVjdFwiLFxuXG4gICAgICAgIFwibWFwL21hcF9ncGcxXCIsXG5cbiAgICAgICAgXCJtaW5lL3BldDAxXCIsXG5cbiAgICAgICAgXCJwYXJ0bmVyL21pbmluZzFcIixcblxuICAgICAgICBcImNvaW4vY29pblwiLFxuXG4gICAgXTtcblxuXG4gICAgZ2V0R2FtZUFzc2V0c1ByZWZhYlVybHMoKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9nYW1lQXNzZXRzUHJlZmFiTmFtZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJyLnB1c2godGhpcy5wcmVmYWJBc3NldFVybCArIHRoaXMuX2dhbWVBc3NldHNQcmVmYWJOYW1lW2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIGdldFByZWZhYkFzc2V0VXJsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnByZWZhYkFzc2V0VXJsO1xuICAgIH1cblxuICAgIGdldEdhbWVBc3NldHNVcmxzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgY29uc3QgYXJyID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZ2FtZUFzc2V0c05hbWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyci5wdXNoKHRoaXMuZ2V0R2FtZUFzc2V0VXJsKCkgKyB0aGlzLl9nYW1lQXNzZXRzTmFtZVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICBnZXRHYW1lQXNzZXRVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZUFzc2V0VXJsO1xuICAgIH1cblxuICAgIGdldEdhbWVTcGluZVVybHMoKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9nYW1lQXNzZXRzU3BpbmVOYW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcnIucHVzaCh0aGlzLmdldEdhbWVTcGluZVVybCgpICsgdGhpcy5fZ2FtZUFzc2V0c1NwaW5lTmFtZVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICBnZXRHYW1lU3BpbmVVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BpbmVBc3NldFVybDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFzc2V0cygpOyJdfQ==
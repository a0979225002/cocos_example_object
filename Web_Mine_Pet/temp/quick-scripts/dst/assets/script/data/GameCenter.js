
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/GameCenter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a0f07OGhsVLNaJb6hfQq2WI', 'GameCenter');
// script/data/GameCenter.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssetsMng_1 = require("../manager/AssetsMng");
var CfgMine = require("./config/CfgMine");
var CfgPartner = require("./config/CfgPartner");
var System_1 = require("./model/System");
var GameModel_1 = require("./model/GameModel");
var GameCenter = /** @class */ (function () {
    function GameCenter() {
        this.cfgMine = CfgMine;
        this.cfgPartner = CfgPartner;
        this.system = null;
        this.game = null;
        this.system = new System_1.default();
        this.game = new GameModel_1.default();
        this.init();
    }
    GameCenter.prototype.init = function () {
        var models = [this.system, this.game];
        for (var i = 0; i < models.length; i++) {
            models[i].getData = this.getData.bind(this);
        }
    };
    GameCenter.prototype.getData = function (modelName, val) {
        if (!this[modelName]) {
            return null;
        }
        return this[modelName][val];
    };
    GameCenter.prototype.getCurrentPetChooseIcon = function () {
        var id = this.game.mineSelectID;
        var level = this.game.mineLevel[id];
        var assetImg = AssetsMng_1.default.getAssets("pet_1.plist");
        return assetImg.getSpriteFrame("" + this.cfgMine[id].levelName[Math.floor((level - 1) / 3)]);
    };
    GameCenter.prototype.getCurrentPartnerChooseIcon = function () {
        var id = this.game.partnerSelectID;
        var assetImg = AssetsMng_1.default.getAssets("pet_2.plist");
        return assetImg.getSpriteFrame("display_" + this.cfgPartner[id].levelName[0]);
    };
    return GameCenter;
}());
exports.default = new GameCenter();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxHYW1lQ2VudGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQTZDO0FBQzdDLDBDQUE0QztBQUM1QyxnREFBa0Q7QUFDbEQseUNBQW9DO0FBQ3BDLCtDQUEwQztBQUUxQztJQU9JO1FBTEEsWUFBTyxHQUFXLE9BQU8sQ0FBQztRQUMxQixlQUFVLEdBQVcsVUFBVSxDQUFDO1FBQ2hDLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFDdEIsU0FBSSxHQUFjLElBQUksQ0FBQztRQUluQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZ0JBQU0sRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxtQkFBUyxFQUFFLENBQUM7UUFFNUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBRWhCLENBQUM7SUFFRCx5QkFBSSxHQUFKO1FBQ0ksSUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9DO0lBQ0wsQ0FBQztJQUVELDRCQUFPLEdBQVAsVUFBUSxTQUFpQixFQUFFLEdBQVc7UUFFbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNsQixPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFaEMsQ0FBQztJQUVELDRDQUF1QixHQUF2QjtRQUNJLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ2hDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLElBQUksUUFBUSxHQUFHLG1CQUFTLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUcsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFFRCxnREFBMkIsR0FBM0I7UUFDSSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNuQyxJQUFJLFFBQVEsR0FBRyxtQkFBUyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsRCxPQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBVyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUcsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFTCxpQkFBQztBQUFELENBOUNBLEFBOENDLElBQUE7QUFFRCxrQkFBZSxJQUFJLFVBQVUsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFzc2V0c01uZyBmcm9tIFwiLi4vbWFuYWdlci9Bc3NldHNNbmdcIjtcclxuaW1wb3J0ICogYXMgQ2ZnTWluZSBmcm9tIFwiLi9jb25maWcvQ2ZnTWluZVwiO1xyXG5pbXBvcnQgKiBhcyBDZmdQYXJ0bmVyIGZyb20gXCIuL2NvbmZpZy9DZmdQYXJ0bmVyXCI7XHJcbmltcG9ydCBTeXN0ZW0gZnJvbSBcIi4vbW9kZWwvU3lzdGVtXCI7XHJcbmltcG9ydCBHYW1lTW9kZWwgZnJvbSBcIi4vbW9kZWwvR2FtZU1vZGVsXCI7XHJcblxyXG5jbGFzcyBHYW1lQ2VudGVyIHtcclxuXHJcbiAgICBjZmdNaW5lOiBvYmplY3QgPSBDZmdNaW5lO1xyXG4gICAgY2ZnUGFydG5lcjogb2JqZWN0ID0gQ2ZnUGFydG5lcjtcclxuICAgIHN5c3RlbTogU3lzdGVtID0gbnVsbDtcclxuICAgIGdhbWU6IEdhbWVNb2RlbCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3lzdGVtID0gbmV3IFN5c3RlbSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lTW9kZWwoKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbW9kZWxzID0gW3RoaXMuc3lzdGVtLCB0aGlzLmdhbWVdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kZWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG1vZGVsc1tpXS5nZXREYXRhID0gdGhpcy5nZXREYXRhLmJpbmQodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGEobW9kZWxOYW1lOiBzdHJpbmcsIHZhbDogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpc1ttb2RlbE5hbWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXNbbW9kZWxOYW1lXVt2YWxdO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW50UGV0Q2hvb3NlSWNvbigpIHtcclxuICAgICAgICBsZXQgaWQgPSB0aGlzLmdhbWUubWluZVNlbGVjdElEO1xyXG4gICAgICAgIGxldCBsZXZlbCA9IHRoaXMuZ2FtZS5taW5lTGV2ZWxbaWRdO1xyXG4gICAgICAgIGxldCBhc3NldEltZyA9IEFzc2V0c01uZy5nZXRBc3NldHMoYHBldF8xLnBsaXN0YCk7XHJcbiAgICAgICAgcmV0dXJuIGFzc2V0SW1nLmdldFNwcml0ZUZyYW1lKGAke3RoaXMuY2ZnTWluZVtpZF0ubGV2ZWxOYW1lW01hdGguZmxvb3IoKGxldmVsIC0gMSkgLyAzKV19YCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VycmVudFBhcnRuZXJDaG9vc2VJY29uKCkge1xyXG4gICAgICAgIGxldCBpZCA9IHRoaXMuZ2FtZS5wYXJ0bmVyU2VsZWN0SUQ7XHJcbiAgICAgICAgbGV0IGFzc2V0SW1nID0gQXNzZXRzTW5nLmdldEFzc2V0cyhgcGV0XzIucGxpc3RgKTtcclxuICAgICAgICByZXR1cm4gYXNzZXRJbWcuZ2V0U3ByaXRlRnJhbWUoYGRpc3BsYXlfJHt0aGlzLmNmZ1BhcnRuZXJbaWRdLmxldmVsTmFtZVswXX1gKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBHYW1lQ2VudGVyKCk7Il19
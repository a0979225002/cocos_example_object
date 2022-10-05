"use strict";
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
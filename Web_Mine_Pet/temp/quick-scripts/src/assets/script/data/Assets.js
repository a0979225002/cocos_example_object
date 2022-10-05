"use strict";
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
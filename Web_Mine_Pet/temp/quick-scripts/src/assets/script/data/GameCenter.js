"use strict";
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
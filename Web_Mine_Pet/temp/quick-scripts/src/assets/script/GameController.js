"use strict";
cc._RF.push(module, '625adCwuHROjZwwrOIfvQIe', 'GameController');
// script/GameController.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssetsMng_1 = require("./manager/AssetsMng");
var SceneMng_1 = require("./manager/SceneMng");
var LangMng_1 = require("./manager/LangMng");
var GPGAPI_1 = require("./api/GPGAPI");
var GameController = /** @class */ (function () {
    function GameController() {
        this.net = null;
    }
    GameController.prototype.init = function () {
        AssetsMng_1.default.init();
        SceneMng_1.default.init();
        LangMng_1.default.init();
        this.net = new GPGAPI_1.GPGAPI();
        this.net.connect();
    };
    return GameController;
}());
exports.default = new GameController();

cc._RF.pop();
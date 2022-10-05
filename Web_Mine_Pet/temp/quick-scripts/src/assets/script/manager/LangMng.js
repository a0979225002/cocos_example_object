"use strict";
cc._RF.push(module, 'f55cb6l4/tA2ohzJpkFRfG6', 'LangMng');
// script/manager/LangMng.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameCenter_1 = require("../data/GameCenter");
var LangMng = /** @class */ (function () {
    function LangMng() {
        this._data = null;
    }
    LangMng.prototype.init = function () {
        var langMode = GameCenter_1.default.system.language;
        this._data = require(langMode);
    };
    LangMng.prototype.getTxt = function (code) {
        if (!this._data)
            return;
        if (code == null)
            return code;
        return this._data[code] == null ? code : this._data[code];
    };
    return LangMng;
}());
exports.default = new LangMng();

cc._RF.pop();

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/LangMng.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxMYW5nTW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTRDO0FBRTVDO0lBQUE7UUFFWSxVQUFLLEdBQUcsSUFBSSxDQUFDO0lBZXpCLENBQUM7SUFiRyxzQkFBSSxHQUFKO1FBRUksSUFBSSxRQUFRLEdBQUcsb0JBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRW5DLENBQUM7SUFFRCx3QkFBTSxHQUFOLFVBQU8sSUFBWTtRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87UUFDeEIsSUFBSSxJQUFJLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQzlCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUwsY0FBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFFRCxrQkFBZSxJQUFJLE9BQU8sRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVDZW50ZXIgZnJvbSBcIi4uL2RhdGEvR2FtZUNlbnRlclwiO1xyXG5cclxuY2xhc3MgTGFuZ01uZyB7XHJcblxyXG4gICAgcHJpdmF0ZSBfZGF0YSA9IG51bGw7XHJcblxyXG4gICAgaW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IGxhbmdNb2RlID0gR2FtZUNlbnRlci5zeXN0ZW0ubGFuZ3VhZ2U7XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IHJlcXVpcmUobGFuZ01vZGUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRUeHQoY29kZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2RhdGEpIHJldHVybjtcclxuICAgICAgICBpZiAoY29kZSA9PSBudWxsKSByZXR1cm4gY29kZTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVtjb2RlXSA9PSBudWxsID8gY29kZSA6IHRoaXMuX2RhdGFbY29kZV07XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgTGFuZ01uZygpOyJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUM1QywrQ0FBMEM7QUFDMUMsNkNBQXdDO0FBQ3hDLHVDQUFzQztBQUV0QztJQUFBO1FBRUksUUFBRyxHQUFXLElBQUksQ0FBQztJQVV2QixDQUFDO0lBUkcsNkJBQUksR0FBSjtRQUNJLG1CQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakIsa0JBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVMLHFCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFFRCxrQkFBZSxJQUFJLGNBQWMsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFzc2V0c01uZyBmcm9tIFwiLi9tYW5hZ2VyL0Fzc2V0c01uZ1wiO1xyXG5pbXBvcnQgU2NlbmVNbmcgZnJvbSBcIi4vbWFuYWdlci9TY2VuZU1uZ1wiO1xyXG5pbXBvcnQgTGFuZ01uZyBmcm9tIFwiLi9tYW5hZ2VyL0xhbmdNbmdcIjtcclxuaW1wb3J0IHsgR1BHQVBJIH0gZnJvbSBcIi4vYXBpL0dQR0FQSVwiO1xyXG5cclxuY2xhc3MgR2FtZUNvbnRyb2xsZXIge1xyXG5cclxuICAgIG5ldDogR1BHQVBJID0gbnVsbDtcclxuXHJcbiAgICBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIEFzc2V0c01uZy5pbml0KCk7XHJcbiAgICAgICAgU2NlbmVNbmcuaW5pdCgpO1xyXG4gICAgICAgIExhbmdNbmcuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMubmV0ID0gbmV3IEdQR0FQSSgpO1xyXG4gICAgICAgIHRoaXMubmV0LmNvbm5lY3QoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBHYW1lQ29udHJvbGxlcigpOyJdfQ==
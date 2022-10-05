"use strict";
cc._RF.push(module, '03ebe44nLBHH4l0fYiXtCmo', 'WebAPI');
// script/data/model/WebAPI.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IDataModel_1 = require("../IDataModel");
var WebAPI = /** @class */ (function (_super) {
    __extends(WebAPI, _super);
    function WebAPI() {
        var _this = _super.call(this, "WebAPI") || this;
        _this.init();
        return _this;
    }
    Object.defineProperty(WebAPI.prototype, "GameServerSocket", {
        get: function () {
            return this._GameServerSocket;
        },
        set: function (value) {
            this._GameServerSocket = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAPI.prototype, "accountName", {
        get: function () {
            return this._accountName;
        },
        set: function (value) {
            this._accountName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAPI.prototype, "loginType", {
        get: function () {
            return this._loginType;
        },
        set: function (value) {
            this._loginType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAPI.prototype, "token", {
        get: function () {
            return this._token;
        },
        set: function (value) {
            this._token = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAPI.prototype, "code", {
        get: function () {
            return this._code;
        },
        set: function (value) {
            this._code = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAPI.prototype, "channelId", {
        get: function () {
            return this._channelId;
        },
        set: function (value) {
            this._channelId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAPI.prototype, "gameId", {
        get: function () {
            return this._gameId;
        },
        set: function (value) {
            this._gameId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAPI.prototype, "lang", {
        get: function () {
            return this._lang;
        },
        set: function (value) {
            this._lang = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAPI.prototype, "gameMaker", {
        get: function () {
            return this._gameMaker;
        },
        set: function (value) {
            this._gameMaker = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAPI.prototype, "homeURL", {
        get: function () {
            return this._homeURL;
        },
        set: function (value) {
            this._homeURL = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAPI.prototype, "companyIcon", {
        get: function () {
            return this._companyIcon;
        },
        set: function (value) {
            this._companyIcon = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAPI.prototype, "windows", {
        get: function () {
            return this._windows;
        },
        set: function (value) {
            this._windows = value;
        },
        enumerable: false,
        configurable: true
    });
    WebAPI.prototype.init = function () {
        this.setData("GameServerSocket");
        this.setData("accountName");
        this.setData("loginType");
        this.setData("token");
        this.setData("gameId");
        this.setData("lang");
        this.setData("homeURL");
        this.setData("companyIcon");
        this.setData("windows");
    };
    WebAPI.prototype.setData = function (name) {
        if ((window[name] && window[name] != "") || window[name] === 0) {
            this[name] = window[name];
        }
    };
    return WebAPI;
}(IDataModel_1.default));
exports.default = WebAPI;

cc._RF.pop();
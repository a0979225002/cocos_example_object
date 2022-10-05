
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/model/WebAPI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxtb2RlbFxcV2ViQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUF1QztBQW9CdkM7SUFBb0MsMEJBQVU7SUFpRzFDO1FBQUEsWUFDSSxrQkFBTSxRQUFRLENBQUMsU0FFbEI7UUFERyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7O0lBQ2hCLENBQUM7SUFqR0Qsc0JBQUksb0NBQWdCO2FBQXBCO1lBQ0ksT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDbEMsQ0FBQzthQUNELFVBQXFCLEtBQUs7WUFDdEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztRQUNuQyxDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLCtCQUFXO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzthQUNELFVBQWdCLEtBQUs7WUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSw2QkFBUzthQUFiO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFDRCxVQUFjLEtBQUs7WUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLHlCQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUNELFVBQVUsS0FBSztZQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7OztPQUhBO0lBTUQsc0JBQUksd0JBQUk7YUFBUjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO2FBQ0QsVUFBUyxLQUFLO1lBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSw2QkFBUzthQUFiO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFDRCxVQUFjLEtBQUs7WUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLDBCQUFNO2FBQVY7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzthQUNELFVBQVcsS0FBSztZQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQUhBO0lBTUQsc0JBQUksd0JBQUk7YUFBUjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO2FBQ0QsVUFBUyxLQUFLO1lBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSw2QkFBUzthQUFiO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFDRCxVQUFjLEtBQUs7WUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLDJCQUFPO2FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzthQUNELFVBQVksS0FBSztZQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUM7OztPQUhBO0lBTUQsc0JBQUksK0JBQVc7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDO2FBQ0QsVUFBZ0IsS0FBSztZQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDOzs7T0FIQTtJQU1ELHNCQUFJLDJCQUFPO2FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzthQUNELFVBQVksS0FBSztZQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUM7OztPQUhBO0lBU0QscUJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELHdCQUFPLEdBQVAsVUFBUSxJQUFZO1FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFFTCxhQUFDO0FBQUQsQ0F4SEEsQUF3SEMsQ0F4SG1DLG9CQUFVLEdBd0g3QyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJRGF0YU1vZGVsIGZyb20gXCIuLi9JRGF0YU1vZGVsXCI7XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgICAgICBHYW1lU2VydmVyU29ja2V0OiBhbnk7XHJcbiAgICAgICAgYWNjb3VudE5hbWU6IGFueTtcclxuICAgICAgICBsb2dpblR5cGU6IGFueTtcclxuICAgICAgICB0b2tlbjogYW55O1xyXG4gICAgICAgIGNvZGU6IGFueTtcclxuICAgICAgICBjaGFubmVsSWQ6IGFueTtcclxuICAgICAgICBnYW1lSWQ6IGFueTtcclxuICAgICAgICBsYW5nOiBhbnk7XHJcbiAgICAgICAgZ2FtZU1ha2VyOiBhbnk7XHJcbiAgICAgICAgaG9tZVVSTDogYW55O1xyXG4gICAgICAgIGNvbXBhbnlJY29uOiBhbnk7XHJcbiAgICAgICAgd2luZG93czogYW55O1xyXG4gICAgICAgIENvY29zTG9hZEVuZDogYW55O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWJBUEkgZXh0ZW5kcyBJRGF0YU1vZGVsIHtcclxuXHJcbiAgICBwcml2YXRlIF9HYW1lU2VydmVyU29ja2V0O1xyXG4gICAgZ2V0IEdhbWVTZXJ2ZXJTb2NrZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dhbWVTZXJ2ZXJTb2NrZXQ7XHJcbiAgICB9XHJcbiAgICBzZXQgR2FtZVNlcnZlclNvY2tldCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX0dhbWVTZXJ2ZXJTb2NrZXQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9hY2NvdW50TmFtZTtcclxuICAgIGdldCBhY2NvdW50TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYWNjb3VudE5hbWU7XHJcbiAgICB9XHJcbiAgICBzZXQgYWNjb3VudE5hbWUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9hY2NvdW50TmFtZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvZ2luVHlwZTtcclxuICAgIGdldCBsb2dpblR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvZ2luVHlwZTtcclxuICAgIH1cclxuICAgIHNldCBsb2dpblR5cGUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9sb2dpblR5cGUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF90b2tlbjtcclxuICAgIGdldCB0b2tlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW47XHJcbiAgICB9XHJcbiAgICBzZXQgdG9rZW4odmFsdWUpIHtcclxuICAgICAgICB0aGlzLl90b2tlbiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NvZGU7XHJcbiAgICBnZXQgY29kZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29kZTtcclxuICAgIH1cclxuICAgIHNldCBjb2RlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fY29kZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NoYW5uZWxJZDtcclxuICAgIGdldCBjaGFubmVsSWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYW5uZWxJZDtcclxuICAgIH1cclxuICAgIHNldCBjaGFubmVsSWQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9jaGFubmVsSWQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nYW1lSWQ7XHJcbiAgICBnZXQgZ2FtZUlkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nYW1lSWQ7XHJcbiAgICB9XHJcbiAgICBzZXQgZ2FtZUlkKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fZ2FtZUlkID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbGFuZztcclxuICAgIGdldCBsYW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sYW5nO1xyXG4gICAgfVxyXG4gICAgc2V0IGxhbmcodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9sYW5nID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2FtZU1ha2VyO1xyXG4gICAgZ2V0IGdhbWVNYWtlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZU1ha2VyO1xyXG4gICAgfVxyXG4gICAgc2V0IGdhbWVNYWtlcih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2dhbWVNYWtlciA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hvbWVVUkw7XHJcbiAgICBnZXQgaG9tZVVSTCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faG9tZVVSTDtcclxuICAgIH1cclxuICAgIHNldCBob21lVVJMKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5faG9tZVVSTCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NvbXBhbnlJY29uO1xyXG4gICAgZ2V0IGNvbXBhbnlJY29uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wYW55SWNvbjtcclxuICAgIH1cclxuICAgIHNldCBjb21wYW55SWNvbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2NvbXBhbnlJY29uID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfd2luZG93cztcclxuICAgIGdldCB3aW5kb3dzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93aW5kb3dzO1xyXG4gICAgfVxyXG4gICAgc2V0IHdpbmRvd3ModmFsdWUpIHtcclxuICAgICAgICB0aGlzLl93aW5kb3dzID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihcIldlYkFQSVwiKTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YShcIkdhbWVTZXJ2ZXJTb2NrZXRcIik7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKFwiYWNjb3VudE5hbWVcIik7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKFwibG9naW5UeXBlXCIpO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YShcInRva2VuXCIpO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YShcImdhbWVJZFwiKTtcclxuICAgICAgICB0aGlzLnNldERhdGEoXCJsYW5nXCIpO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YShcImhvbWVVUkxcIik7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKFwiY29tcGFueUljb25cIik7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKFwid2luZG93c1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREYXRhKG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICgod2luZG93W25hbWVdICAmJiB3aW5kb3dbbmFtZV0gIT0gXCJcIikgfHwgd2luZG93W25hbWVdID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB3aW5kb3dbbmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ==
"use strict";
cc._RF.push(module, 'f2723OMcjJG6oiOUkAUM8YA', 'GameModel');
// script/data/model/GameModel.ts

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
var EventMng_1 = require("../../manager/EventMng");
var EventConst_1 = require("../const/EventConst");
var IDataModel_1 = require("../IDataModel");
var GameModel = /** @class */ (function (_super) {
    __extends(GameModel, _super);
    function GameModel() {
        var _this = _super.call(this, "Game") || this;
        _this._mineSelectID = 0;
        _this.mineList = [0, 0, 0, 0, 0];
        _this.mineLevel = [1, 1, 1, 1, 1];
        _this.mineSkin = [0, 0, 0, 0, 0];
        _this.mineAccessories = [0, 0, 0, 0, 0];
        _this._partnerSelectID = 0;
        _this.partnerList = [0, 0, 0, 0, 0];
        _this._canGo = false;
        _this.goldPoint = 0;
        _this.silverPoint = 0;
        _this.warehousePoint = 0;
        _this.timeActive = false;
        _this.countDownTimer = null;
        _this.currentTime = 0;
        _this.grandTotalTime = 120;
        _this.collect = {
            gold: 0,
            silver: 0
        };
        _this.levelConfig = {
            silver: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            can: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            rate: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        };
        _this.canCount = 0;
        _this.mineSkinListData = [];
        _this.levelSkinName = ["obj_S", "obj_M", "obj_L"];
        _this.mineBodyName = ["pet01", "pet01", "pet01", "pet01", "pet01"];
        _this.mineFloorName = ["floor_01", "floor_01", "floor_01", "floor_01", "floor_01"];
        _this.mineSkinName = ["pet01",];
        _this.mineRoadName = ["map_gpg1", "map_gpg1", "map_gpg1", "map_gpg1", "map_gpg1"];
        _this.partnerBodyName = ["mining1", "mining1", "mining1", "mining1", "mining1"];
        return _this;
    }
    GameModel.prototype.getMessageListeners = function () {
        var _a;
        var _this = this;
        return _a = {},
            _a['start'] = function (msg) { _this.onStart(msg); },
            _a['action'] = function (msg) { _this.onAction(msg); },
            _a['other'] = function (msg) { _this.onOther(msg); },
            _a['upgrade'] = function (msg) { _this.onUpgrade(msg); },
            _a['getbag'] = function (msg) { _this.onGetBag(msg); },
            _a['use'] = function (msg) { _this.onUse(msg); },
            _a;
    };
    GameModel.prototype.onStart = function (msg) {
        if (msg == null) {
            EventMng_1.default.emit(EventConst_1.MainEvent.MESSAGE_SHOW, {
                code: "S_9100"
            });
            return;
        }
        this.goldPoint = msg.wallet.gold;
        this.silverPoint = msg.wallet.silver;
        this.mineSelectID = msg.currentPet;
        for (var i = 0; i < msg.pet.length; i++) {
            var data = msg.pet[i];
            this.mineList[i] = data.own ? 1 : 0;
            if (this.mineList[i] == 1) {
                this.mineLevel[i] = data.info.level;
                this.mineSkin[i] = data.info.skin.id;
                this.mineAccessories[i] = data.info.deco.id;
            }
        }
        this.partnerSelectID = msg.currentElf;
        for (var i = 0; i < msg.elf.length; i++) {
            this.partnerList[i] = msg.elf[i].own ? 1 : 0;
        }
        this.levelConfig.silver = msg.upgrade.silver;
        this.levelConfig.can = msg.upgrade.can;
        this.levelConfig.rate = msg.upgrade.chance;
        this.canCount = msg.can;
        this.grandTotalTime = msg.other.time;
        this.warehousePoint = msg.other.expect;
        this.timeStart();
        EventMng_1.default.emit(EventConst_1.LoadEvent.LOAD_SUCCESS);
    };
    GameModel.prototype.onAction = function (msg) {
        if (msg == null) {
            return;
        }
        this.goldPoint = msg.wallet.gold;
        this.silverPoint = msg.wallet.silver;
        this.collect.gold = msg.getmine.gold;
        this.collect.silver = msg.getmine.silver;
        if (this.collect.gold == 0 && this.collect.silver == 0) {
            return;
        }
        EventMng_1.default.emit(EventConst_1.MainEvent.GET_POINT);
    };
    GameModel.prototype.onOther = function (msg) {
        if (msg == null) {
            return;
        }
        this.timeStop();
        this.grandTotalTime = msg.time > 43200 ? 43200 : msg.time;
        this.warehousePoint = msg.expect;
        this.timeStart();
        EventMng_1.default.emit("MINE_GENERAL_UPDATE");
    };
    GameModel.prototype.onUpgrade = function (msg) {
        this.canCount = msg.can;
        this.goldPoint = msg.gold;
        this.silverPoint = msg.silver;
        EventMng_1.default.emit("PET_UPGRADE", msg);
    };
    GameModel.prototype.onUse = function (msg) {
        var state = msg.isSuccess;
        EventMng_1.default.emit(EventConst_1.MainEvent.ENTER_MINE_COLLECT, {
            state: state,
        });
    };
    GameModel.prototype.timeInit = function () {
        this.currentTime = this.grandTotalTime;
    };
    GameModel.prototype.timeStart = function () {
        var _this = this;
        this.timeInit();
        this.timeActive = true;
        var time = 0;
        var start = new Date().getTime();
        var action = function () {
            clearTimeout(_this.countDownTimer);
            if (_this.currentTime < 0 || _this.currentTime >= 43200) {
                return;
            }
            time += 1000;
            var diff = (new Date().getTime() - start) - time;
            _this.currentTime += 1;
            if (_this.currentTime < 0) {
                _this.timeStop();
                return;
            }
            _this.countDownTimer = setTimeout(action, (1000 - diff));
        };
        this.countDownTimer = setTimeout(action, 1000);
    };
    GameModel.prototype.timeStop = function () {
        this.timeActive = false;
        this.currentTime = 0;
        clearTimeout(this.countDownTimer);
    };
    GameModel.prototype.onGetBag = function (msg) {
        this.mineSkinListData = msg.skinList;
        EventMng_1.default.emit("OPEN_SKIN_POP", msg);
    };
    GameModel.prototype.hasMine = function () {
        return this.mineList[this.mineSelectID] != 0;
    };
    GameModel.prototype.getPetBodyThemeName = function (id) {
        var checkID = id == 0 || id > 0 ? id : this.mineSelectID;
        var name = this.mineBodyName[checkID];
        if (this.mineSkin[checkID] > 0) {
            name = this.mineSkinName[this.mineSkin[checkID]];
        }
        return name;
    };
    GameModel.prototype.getPetBodySkinName = function (id) {
        var name = "default";
        var checkID = id == 0 || id > 0 ? id : this.mineSelectID;
        if (this.mineSkin[checkID] == 0) {
            name = this.levelSkinName[Math.floor((this.mineLevel[checkID] - 1) / 3)];
        }
        return name;
    };
    GameModel.prototype.getPartnerBodyThemeName = function () {
        return this.partnerBodyName[this.partnerSelectID];
    };
    GameModel.prototype.hasPartner = function () {
        return this.partnerList[this.partnerSelectID] != 0;
    };
    Object.defineProperty(GameModel.prototype, "mineSelectID", {
        get: function () {
            return this._mineSelectID;
        },
        set: function (value) {
            this._mineSelectID = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameModel.prototype, "partnerSelectID", {
        get: function () {
            return this._partnerSelectID;
        },
        set: function (value) {
            this._partnerSelectID = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameModel.prototype, "canGo", {
        get: function () {
            this._canGo = !(!this.hasMine() || !this.hasPartner());
            return this._canGo;
        },
        set: function (value) {
            this._canGo = value;
        },
        enumerable: false,
        configurable: true
    });
    return GameModel;
}(IDataModel_1.default));
exports.default = GameModel;

cc._RF.pop();
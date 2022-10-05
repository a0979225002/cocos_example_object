
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/model/GameModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxtb2RlbFxcR2FtZU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5QyxrREFBMkQ7QUFDM0QsNENBQXVDO0FBRXZDO0lBQXVDLDZCQUFVO0lBNEM3QztRQUFBLFlBQ0ksa0JBQU0sTUFBTSxDQUFDLFNBQ2hCO1FBNUNPLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQ2xDLGNBQVEsR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyQyxlQUFTLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEMsY0FBUSxHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLHFCQUFlLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFcEMsc0JBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBQ3JDLGlCQUFXLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFaEMsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUVoQyxlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBRTNCLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLG9CQUFjLEdBQVcsSUFBSSxDQUFDO1FBQzlCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLG9CQUFjLEdBQVcsR0FBRyxDQUFDO1FBRTdCLGFBQU8sR0FBRztZQUNOLElBQUksRUFBRSxD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QUVELHNCQUFJLG1DQUFZO2FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7YUFFRCxVQUFpQixLQUFhO1lBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7OztPQUpBO0lBTUQsc0JBQUksc0NBQWU7YUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqQyxDQUFDO2FBRUQsVUFBb0IsS0FBYTtZQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUM7OztPQUpBO0lBTUQsc0JBQUksNEJBQUs7YUFBVDtZQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7WUFDdkQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFVLEtBQWM7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQzs7O09BSkE7SUFNTCxnQkFBQztBQUFELENBN1FBLEFBNlFDLENBN1FzQyxvQkFBVSxHQTZRaEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnRNbmcgZnJvbSBcIi4uLy4uL21hbmFnZXIvRXZlbnRNbmdcIjtcclxuaW1wb3J0IHsgTG9hZEV2ZW50LCBNYWluRXZlbnQgfSBmcm9tIFwiLi4vY29uc3QvRXZlbnRDb25zdFwiO1xyXG5pbXBvcnQgSURhdGFNb2RlbCBmcm9tIFwiLi4vSURhdGFNb2RlbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1vZGVsIGV4dGVuZHMgSURhdGFNb2RlbCB7XHJcblxyXG4gICAgcHJpdmF0ZSBfbWluZVNlbGVjdElEOiBudW1iZXIgPSAwO1xyXG4gICAgbWluZUxpc3Q6IG51bWJlcltdID0gWzAsIDAsIDAsIDAsIDBdO1xyXG4gICAgbWluZUxldmVsOiBudW1iZXJbXSA9IFsxLCAxLCAxLCAxLCAxXTtcclxuICAgIG1pbmVTa2luOiBudW1iZXJbXSA9IFswLCAwLCAwLCAwLCAwXTtcclxuICAgIG1pbmVBY2Nlc3NvcmllczogbnVtYmVyW10gPSBbMCwgMCwgMCwgMCwgMF07XHJcblxyXG4gICAgcHJpdmF0ZSBfcGFydG5lclNlbGVjdElEOiBudW1iZXIgPSAwO1xyXG4gICAgcGFydG5lckxpc3Q6IG51bWJlcltdID0gWzAsIDAsIDAsIDAsIDBdO1xyXG5cclxuICAgIHByaXZhdGUgX2NhbkdvOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgZ29sZFBvaW50OiBudW1iZXIgPSAwO1xyXG4gICAgc2lsdmVyUG9pbnQ6IG51bWJlciA9IDA7XHJcbiAgICB3YXJlaG91c2VQb2ludDogbnVtYmVyID0gMDtcclxuXHJcbiAgICB0aW1lQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBjb3VudERvd25UaW1lcjogbnVtYmVyID0gbnVsbDtcclxuICAgIGN1cnJlbnRUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgZ3JhbmRUb3RhbFRpbWU6IG51bWJlciA9IDEyMDtcclxuXHJcbiAgICBjb2xsZWN0ID0ge1xyXG4gICAgICAgIGdvbGQ6IDAsXHJcbiAgICAgICAgc2lsdmVyOiAwXHJcbiAgICB9O1xyXG5cclxuICAgIGxldmVsQ29uZmlnID0ge1xyXG4gICAgICAgIHNpbHZlcjogWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgIGNhbjogIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICByYXRlOiAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgfVxyXG5cclxuICAgIGNhbkNvdW50OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG1pbmVTa2luTGlzdERhdGEgPSBbXTtcclxuXHJcbiAgICBsZXZlbFNraW5OYW1lID0gW1wib2JqX1NcIiwgXCJvYmpfTVwiLCBcIm9ial9MXCJdO1xyXG4gICAgbWluZUJvZHlOYW1lID0gWyBcInBldDAxXCIsIFwicGV0MDFcIiwgXCJwZXQwMVwiLCBcInBldDAxXCIsIFwicGV0MDFcIiBdO1xyXG4gICAgbWluZUZsb29yTmFtZSA9IFtcImZsb29yXzAxXCIsIFwiZmxvb3JfMDFcIiwgXCJmbG9vcl8wMVwiLCBcImZsb29yXzAxXCIsIFwiZmxvb3JfMDFcIl07XHJcbiAgICBtaW5lU2tpbk5hbWUgPSBbXCJwZXQwMVwiLF07XHJcbiAgICBtaW5lUm9hZE5hbWUgPSBbXCJtYXBfZ3BnMVwiLCBcIm1hcF9ncGcxXCIsIFwibWFwX2dwZzFcIiwgXCJtYXBfZ3BnMVwiLCBcIm1hcF9ncGcxXCJdO1xyXG4gICAgcGFydG5lckJvZHlOYW1lID0gW1wibWluaW5nMVwiLCBcIm1pbmluZzFcIiwgXCJtaW5pbmcxXCIsIFwibWluaW5nMVwiLCBcIm1pbmluZzFcIl07XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJHYW1lXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKTogb2JqZWN0IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBbJ3N0YXJ0J106IChtc2cpID0+IHsgdGhpcy5vblN0YXJ0KG1zZykgfSxcclxuICAgICAgICAgICAgWydhY3Rpb24nXTogKG1zZykgPT4geyB0aGlzLm9uQWN0aW9uKG1zZykgfSxcclxuICAgICAgICAgICAgWydvdGhlciddOiAobXNnKSA9PiB7IHRoaXMub25PdGhlcihtc2cpIH0sXHJcbiAgICAgICAgICAgIFsndXBncmFkZSddOiAobXNnKSA9PiB7IHRoaXMub25VcGdyYWRlKG1zZykgfSxcclxuICAgICAgICAgICAgWydnZXRiYWcnXTogKG1zZykgPT4geyB0aGlzLm9uR2V0QmFnKG1zZykgfSxcclxuICAgICAgICAgICAgWyd1c2UnXTogKG1zZykgPT4geyB0aGlzLm9uVXNlKG1zZykgfSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TdGFydChtc2cpOiB2b2lkIHtcclxuXHJcblxyXG4gICAgICAgIGlmIChtc2cgPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgRXZlbnRNbmcuZW1pdChNYWluRXZlbnQuTUVTU0FHRV9TSE9XLCB7XHJcbiAgICAgICAgICAgICAgICBjb2RlOiBcIlNfOTEwMFwiXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ29sZFBvaW50ID0gbXNnLndhbGxldC5nb2xkO1xyXG4gICAgICAgIHRoaXMuc2lsdmVyUG9pbnQgPSBtc2cud2FsbGV0LnNpbHZlcjtcclxuXHJcbiAgICAgICAgdGhpcy5taW5lU2VsZWN0SUQgPSBtc2cuY3VycmVudFBldDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cucGV0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gbXNnLnBldFtpXTtcclxuICAgICAgICAgICAgdGhpcy5taW5lTGlzdFtpXSA9IGRhdGEub3duID8gMSA6IDA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1pbmVMaXN0W2ldID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWluZUxldmVsW2ldID0gZGF0YS5pbmZvLmxldmVsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taW5lU2tpbltpXSA9IGRhdGEuaW5mby5za2luLmlkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taW5lQWNjZXNzb3JpZXNbaV0gPSBkYXRhLmluZm8uZGVjby5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wYXJ0bmVyU2VsZWN0SUQgPSBtc2cuY3VycmVudEVsZjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cuZWxmLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFydG5lckxpc3RbaV0gPSBtc2cuZWxmW2ldLm93biA/IDEgOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sZXZlbENvbmZpZy5zaWx2ZXIgPSBtc2cudXBncmFkZS5zaWx2ZXI7XHJcbiAgICAgICAgdGhpcy5sZXZlbENvbmZpZy5jYW4gPSBtc2cudXBncmFkZS5jYW47XHJcbiAgICAgICAgdGhpcy5sZXZlbENvbmZpZy5yYXRlID0gbXNnLnVwZ3JhZGUuY2hhbmNlO1xyXG5cclxuICAgICAgICB0aGlzLmNhbkNvdW50ID0gbXNnLmNhbjtcclxuXHJcbiAgICAgICAgdGhpcy5ncmFuZFRvdGFsVGltZSA9IG1zZy5vdGhlci50aW1lO1xyXG4gICAgICAgIHRoaXMud2FyZWhvdXNlUG9pbnQgPSBtc2cub3RoZXIuZXhwZWN0O1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVTdGFydCgpO1xyXG5cclxuICAgICAgICBFdmVudE1uZy5lbWl0KExvYWRFdmVudC5MT0FEX1NVQ0NFU1MpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkFjdGlvbihtc2cpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKG1zZyA9PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICB0aGlzLmdvbGRQb2ludCA9IG1zZy53YWxsZXQuZ29sZDtcclxuICAgICAgICB0aGlzLnNpbHZlclBvaW50ID0gbXNnLndhbGxldC5zaWx2ZXI7XHJcblxyXG4gICAgICAgIHRoaXMuY29sbGVjdC5nb2xkID0gbXNnLmdldG1pbmUuZ29sZDtcclxuICAgICAgICB0aGlzLmNvbGxlY3Quc2lsdmVyID0gbXNnLmdldG1pbmUuc2lsdmVyO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb2xsZWN0LmdvbGQgPT0gMCAmJiB0aGlzLmNvbGxlY3Quc2lsdmVyID09IDApIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIEV2ZW50TW5nLmVtaXQoTWFpbkV2ZW50LkdFVF9QT0lOVCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uT3RoZXIobXNnKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmIChtc2cgPT0gbnVsbCkgeyByZXR1cm47IH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRpbWVTdG9wKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JhbmRUb3RhbFRpbWUgPSBtc2cudGltZSA+IDQzMjAwID8gNDMyMDAgOiBtc2cudGltZTtcclxuICAgICAgICB0aGlzLndhcmVob3VzZVBvaW50ID0gbXNnLmV4cGVjdDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRpbWVTdGFydCgpO1xyXG5cclxuICAgICAgICBFdmVudE1uZy5lbWl0KFwiTUlORV9HRU5FUkFMX1VQREFURVwiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25VcGdyYWRlKG1zZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2FuQ291bnQgPSBtc2cuY2FuO1xyXG4gICAgICAgIHRoaXMuZ29sZFBvaW50ID0gbXNnLmdvbGQ7XHJcbiAgICAgICAgdGhpcy5zaWx2ZXJQb2ludCA9IG1zZy5zaWx2ZXI7XHJcbiAgICAgICAgRXZlbnRNbmcuZW1pdChcIlBFVF9VUEdSQURFXCIsIG1zZyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Vc2UobXNnKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZSA9IG1zZy5pc1N1Y2Nlc3M7XHJcblxyXG4gICAgICAgIEV2ZW50TW5nLmVtaXQoTWFpbkV2ZW50LkVOVEVSX01JTkVfQ09MTEVDVCwge1xyXG4gICAgICAgICAgICBzdGF0ZTogc3RhdGUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRpbWVJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSB0aGlzLmdyYW5kVG90YWxUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHRpbWVTdGFydCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lSW5pdCgpO1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVBY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICBsZXQgdGltZSA9IDA7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgIGxldCBhY3Rpb24gPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jb3VudERvd25UaW1lcik7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA8IDAgfHwgdGhpcy5jdXJyZW50VGltZSA+PSA0MzIwMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aW1lICs9IDEwMDA7XHJcbiAgICAgICAgICAgIGxldCBkaWZmID0gKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnQpIC0gdGltZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUgKz0gMTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lU3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvdW50RG93blRpbWVyID0gc2V0VGltZW91dChhY3Rpb24sICgxMDAwIC0gZGlmZikpO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmNvdW50RG93blRpbWVyID0gc2V0VGltZW91dChhY3Rpb24sIDEwMDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0aW1lU3RvcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRpbWVBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jb3VudERvd25UaW1lcik7XHJcbiAgICB9XHJcbiAgICBvbkdldEJhZyhtc2cpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1pbmVTa2luTGlzdERhdGEgPSBtc2cuc2tpbkxpc3Q7XHJcbiAgICAgICAgRXZlbnRNbmcuZW1pdChcIk9QRU5fU0tJTl9QT1BcIiwgbXNnKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNNaW5lKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAgdGhpcy5taW5lTGlzdFt0aGlzLm1pbmVTZWxlY3RJRF0gIT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQZXRCb2R5VGhlbWVOYW1lKGlkPzogbnVtYmVyKTogc3RyaW5nIHtcclxuXHJcbiAgICAgICAgbGV0IGNoZWNrSUQgPSBpZCA9PSAwIHx8IGlkID4gMCA/ICBpZCA6IHRoaXMubWluZVNlbGVjdElEO1xyXG5cclxuICAgICAgICBsZXQgbmFtZSA9IHRoaXMubWluZUJvZHlOYW1lW2NoZWNrSURdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5taW5lU2tpbltjaGVja0lEXSA+IDApIHtcclxuICAgICAgICAgICAgbmFtZSA9IHRoaXMubWluZVNraW5OYW1lW3RoaXMubWluZVNraW5bY2hlY2tJRF1dO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFBldEJvZHlTa2luTmFtZShpZD86IG51bWJlcik6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGxldCBuYW1lID0gXCJkZWZhdWx0XCI7XHJcblxyXG4gICAgICAgIGxldCBjaGVja0lEID0gaWQgPT0gMCB8fCBpZCA+IDAgPyBpZCA6IHRoaXMubWluZVNlbGVjdElEO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5taW5lU2tpbltjaGVja0lEXSA9PSAwKSB7XHJcbiAgICAgICAgICAgIG5hbWUgPSB0aGlzLmxldmVsU2tpbk5hbWVbTWF0aC5mbG9vcigodGhpcy5taW5lTGV2ZWxbY2hlY2tJRF0gLSAxKSAvIDMpXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFBhcnRuZXJCb2R5VGhlbWVOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFydG5lckJvZHlOYW1lW3RoaXMucGFydG5lclNlbGVjdElEXTtcclxuICAgIH1cclxuICAgIGhhc1BhcnRuZXIoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICB0aGlzLnBhcnRuZXJMaXN0W3RoaXMucGFydG5lclNlbGVjdElEXSAhPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtaW5lU2VsZWN0SUQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWluZVNlbGVjdElEO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBtaW5lU2VsZWN0SUQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21pbmVTZWxlY3RJRCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwYXJ0bmVyU2VsZWN0SUQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGFydG5lclNlbGVjdElEO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBwYXJ0bmVyU2VsZWN0SUQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3BhcnRuZXJTZWxlY3RJRCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjYW5HbygpOiBib29sZWFuIHtcclxuICAgICAgICB0aGlzLl9jYW5HbyA9ICEoIXRoaXMuaGFzTWluZSgpIHx8ICF0aGlzLmhhc1BhcnRuZXIoKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbkdvO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBjYW5Hbyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2NhbkdvID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG59Il19
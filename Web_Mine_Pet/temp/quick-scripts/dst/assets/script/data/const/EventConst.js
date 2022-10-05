
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/const/EventConst.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '23077tDaiFOYJMfHPD1J4iF', 'EventConst');
// script/data/const/EventConst.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainEvent = exports.LoadEvent = exports.SocketEvent = void 0;
var SocketEvent = /** @class */ (function () {
    function SocketEvent() {
    }
    SocketEvent.SOCKET_OPEN = 'SOCKET_OPEN';
    SocketEvent.SOCKET_CLOSE = 'SOCKET_CLOSE';
    return SocketEvent;
}());
exports.SocketEvent = SocketEvent;
var LoadEvent = /** @class */ (function () {
    function LoadEvent() {
    }
    LoadEvent.LOAD_PRELOAD_DONE = 'LOAD_PRELOAD_DONE';
    LoadEvent.LOAD_SUCCESS = 'LOAD_SUCCESS';
    return LoadEvent;
}());
exports.LoadEvent = LoadEvent;
var MainEvent = /** @class */ (function () {
    function MainEvent() {
    }
    MainEvent.ENTER_MINE_COLLECT = 'ENTER_MINE_COLLECT';
    MainEvent.ENTER_MINE_MNG = 'ENTER_MINE_MNG';
    MainEvent.MINE_GENERAL_UPDATE = 'MINE_GENERAL_UPDATE';
    MainEvent.MINE_MNG_PAGE_SWITCH = 'MINE_MNG_PAGE_SWITCH';
    MainEvent.MESSAGE_SHOW = 'MESSAGE_SHOW';
    MainEvent.GET_POINT = 'GET_POINT';
    MainEvent.PET_UPGRADE_REQ = 'PET_UPGRADE_REQ';
    MainEvent.PET_UPGRADE = 'PET_UPGRADE';
    MainEvent.PET_UPGRADE_CHANGE = 'PET_UPGRADE_CHANGE';
    MainEvent.OPEN_SKIN_POP_REQ = 'OPEN_SKIN_POP_REQ';
    MainEvent.OPEN_SKIN_POP = 'OPEN_SKIN_POP';
    MainEvent.MINE_CHANGE_REQ = 'MINE_CHANGE_REQ';
    return MainEvent;
}());
exports.MainEvent = MainEvent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxjb25zdFxcRXZlbnRDb25zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUFBO0lBR0EsQ0FBQztJQUYwQix1QkFBVyxHQUFHLGFBQWEsQ0FBQztJQUM1Qix3QkFBWSxHQUFHLGNBQWMsQ0FBQztJQUN6RCxrQkFBQztDQUhELEFBR0MsSUFBQTtBQUhZLGtDQUFXO0FBS3hCO0lBQUE7SUFHQSxDQUFDO0lBRjBCLDJCQUFpQixHQUFHLG1CQUFtQixDQUFDO0lBQ3hDLHNCQUFZLEdBQUcsY0FBYyxDQUFDO0lBQ3pELGdCQUFDO0NBSEQsQUFHQyxJQUFBO0FBSFksOEJBQVM7QUFLdEI7SUFBQTtJQWFBLENBQUM7SUFaMEIsNEJBQWtCLEdBQUcsb0JBQW9CLENBQUM7SUFDMUMsd0JBQWMsR0FBRyxnQkFBZ0IsQ0FBQztJQUNsQyw2QkFBbUIsR0FBRyxxQkFBcUIsQ0FBQztJQUM1Qyw4QkFBb0IsR0FBRyxzQkFBc0IsQ0FBQztJQUM5QyxzQkFBWSxHQUFHLGNBQWMsQ0FBQztJQUM5QixtQkFBUyxHQUFHLFdBQVcsQ0FBQztJQUN4Qix5QkFBZSxHQUFHLGlCQUFpQixDQUFDO0lBQ3BDLHFCQUFXLEdBQUcsYUFBYSxDQUFDO0lBQzVCLDRCQUFrQixHQUFHLG9CQUFvQixDQUFDO0lBQzFDLDJCQUFpQixHQUFHLG1CQUFtQixDQUFDO0lBQ3hDLHVCQUFhLEdBQUcsZUFBZSxDQUFDO0lBQ2hDLHlCQUFlLEdBQUcsaUJBQWlCLENBQUM7SUFDL0QsZ0JBQUM7Q0FiRCxBQWFDLElBQUE7QUFiWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY2xhc3MgU29ja2V0RXZlbnQge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTT0NLRVRfT1BFTiA9ICdTT0NLRVRfT1BFTic7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNPQ0tFVF9DTE9TRSA9ICdTT0NLRVRfQ0xPU0UnO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZEV2ZW50IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTE9BRF9QUkVMT0FEX0RPTkUgPSAnTE9BRF9QUkVMT0FEX0RPTkUnO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBMT0FEX1NVQ0NFU1MgPSAnTE9BRF9TVUNDRVNTJztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1haW5FdmVudCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVOVEVSX01JTkVfQ09MTEVDVCA9ICdFTlRFUl9NSU5FX0NPTExFQ1QnO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFTlRFUl9NSU5FX01ORyA9ICdFTlRFUl9NSU5FX01ORyc7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE1JTkVfR0VORVJBTF9VUERBVEUgPSAnTUlORV9HRU5FUkFMX1VQREFURSc7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE1JTkVfTU5HX1BBR0VfU1dJVENIID0gJ01JTkVfTU5HX1BBR0VfU1dJVENIJztcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTUVTU0FHRV9TSE9XID0gJ01FU1NBR0VfU0hPVyc7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEdFVF9QT0lOVCA9ICdHRVRfUE9JTlQnO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBQRVRfVVBHUkFERV9SRVEgPSAnUEVUX1VQR1JBREVfUkVRJztcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUEVUX1VQR1JBREUgPSAnUEVUX1VQR1JBREUnO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBQRVRfVVBHUkFERV9DSEFOR0UgPSAnUEVUX1VQR1JBREVfQ0hBTkdFJztcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT1BFTl9TS0lOX1BPUF9SRVEgPSAnT1BFTl9TS0lOX1BPUF9SRVEnO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPUEVOX1NLSU5fUE9QID0gJ09QRU5fU0tJTl9QT1AnO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBNSU5FX0NIQU5HRV9SRVEgPSAnTUlORV9DSEFOR0VfUkVRJztcclxufSJdfQ==
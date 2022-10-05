"use strict";
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
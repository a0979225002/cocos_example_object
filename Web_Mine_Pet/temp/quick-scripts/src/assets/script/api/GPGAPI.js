"use strict";
cc._RF.push(module, '9f2569Jys9BA5U+pyZK6gQC', 'GPGAPI');
// script/api/GPGAPI.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GPGAPI = void 0;
var EventMng_1 = require("../manager/EventMng");
var GPGAPI = /** @class */ (function () {
    function GPGAPI() {
    }
    GPGAPI.prototype.connect = function () {
        window.addEventListener("message", this.onReceiveMessage, false);
    };
    GPGAPI.prototype.send = function (cmd, data) {
        var Packet = {
            cmd: cmd,
            data: data
        };
        window.parent.postMessage(Packet, "*");
    };
    GPGAPI.prototype.onReceiveMessage = function (event) {
        var cmd = event.data.cmd;
        var data = event.data.data;
        EventMng_1.default.emit(cmd, data);
    };
    return GPGAPI;
}());
exports.GPGAPI = GPGAPI;

cc._RF.pop();
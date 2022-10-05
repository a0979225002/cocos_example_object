
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/api/GPGAPI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxhcGlcXEdQR0FQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFFM0M7SUFBQTtJQW9CQSxDQUFDO0lBbEJHLHdCQUFPLEdBQVA7UUFDSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQscUJBQUksR0FBSixVQUFLLEdBQVcsRUFBRSxJQUFZO1FBQzFCLElBQUksTUFBTSxHQUFHO1lBQ1QsR0FBRyxFQUFFLEdBQUc7WUFDUixJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELGlDQUFnQixHQUFoQixVQUFpQixLQUFLO1FBQ2xCLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzNCLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzdCLGtCQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUwsYUFBQztBQUFELENBcEJBLEFBb0JDLElBQUE7QUFwQlksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnRNbmcgZnJvbSBcIi4uL21hbmFnZXIvRXZlbnRNbmdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHUEdBUEkge1xyXG5cclxuICAgIGNvbm5lY3QoKTogdm9pZCB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMub25SZWNlaXZlTWVzc2FnZSwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmQoY21kOiBzdHJpbmcsIGRhdGE6IG9iamVjdCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBQYWNrZXQgPSB7XHJcbiAgICAgICAgICAgIGNtZDogY21kLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgfTtcclxuICAgICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKFBhY2tldCwgXCIqXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVjZWl2ZU1lc3NhZ2UoZXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjbWQgPSBldmVudC5kYXRhLmNtZDtcclxuICAgICAgICBjb25zdCBkYXRhID0gZXZlbnQuZGF0YS5kYXRhO1xyXG4gICAgICAgIEV2ZW50TW5nLmVtaXQoY21kLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbn0iXX0=
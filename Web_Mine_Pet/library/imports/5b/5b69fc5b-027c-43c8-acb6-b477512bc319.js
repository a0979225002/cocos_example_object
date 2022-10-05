"use strict";
cc._RF.push(module, '5b69fxbAnxDyKy2tHdRK8MZ', 'IDataModel');
// script/data/IDataModel.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventMng_1 = require("../manager/EventMng");
var IDataModel = /** @class */ (function () {
    function IDataModel(modelName) {
        if (modelName === void 0) { modelName = 'default'; }
        this.modelName = 'default';
        this.modelName = modelName;
        this.registerListeners();
    }
    IDataModel.prototype.registerListeners = function () {
        var tbMsg = this.getMessageListeners();
        var _loop_1 = function (key) {
            if (tbMsg.hasOwnProperty(key)) {
                EventMng_1.default.on(key.toString(), function (msg) {
                    tbMsg[key](msg);
                });
            }
        };
        for (var key in tbMsg) {
            _loop_1(key);
        }
    };
    IDataModel.prototype.getMessageListeners = function () {
        return {};
    };
    IDataModel.prototype.getData = function (modelName, val) {
        return;
    };
    return IDataModel;
}());
exports.default = IDataModel;

cc._RF.pop();
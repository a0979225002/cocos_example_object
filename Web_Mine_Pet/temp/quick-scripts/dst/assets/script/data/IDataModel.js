
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/IDataModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFxJRGF0YU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBRTNDO0lBSUksb0JBQVksU0FBcUI7UUFBckIsMEJBQUEsRUFBQSxxQkFBcUI7UUFGdkIsY0FBUyxHQUFXLFNBQVMsQ0FBQztRQUdwQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU8sc0NBQWlCLEdBQXpCO1FBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0NBQzVCLEdBQUc7WUFDVixJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzNCLGtCQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxVQUFVLEdBQUc7b0JBQ3JDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLENBQUE7YUFDTDs7UUFMTCxLQUFLLElBQU0sR0FBRyxJQUFJLEtBQUs7b0JBQVosR0FBRztTQU1iO0lBQ0wsQ0FBQztJQUVELHdDQUFtQixHQUFuQjtRQUNJLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELDRCQUFPLEdBQVAsVUFBUSxTQUFpQixFQUFFLEdBQVc7UUFDbEMsT0FBTztJQUNYLENBQUM7SUFFTCxpQkFBQztBQUFELENBNUJBLEFBNEJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnRNbmcgZnJvbSBcIi4uL21hbmFnZXIvRXZlbnRNbmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElEYXRhTW9kZWwge1xyXG5cclxuICAgIHByb3RlY3RlZCBtb2RlbE5hbWU6IHN0cmluZyA9ICdkZWZhdWx0JztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbE5hbWUgPSAnZGVmYXVsdCcpIHtcclxuICAgICAgICB0aGlzLm1vZGVsTmFtZSA9IG1vZGVsTmFtZTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3Rlckxpc3RlbmVycygpIHtcclxuICAgICAgICBsZXQgdGJNc2cgPSB0aGlzLmdldE1lc3NhZ2VMaXN0ZW5lcnMoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0Yk1zZykge1xyXG4gICAgICAgICAgICBpZiAodGJNc2cuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgRXZlbnRNbmcub24oa2V5LnRvU3RyaW5nKCksIGZ1bmN0aW9uIChtc2cpIHtcclxuICAgICAgICAgICAgICAgICAgICB0Yk1zZ1trZXldKG1zZyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGEobW9kZWxOYW1lOiBzdHJpbmcsIHZhbDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
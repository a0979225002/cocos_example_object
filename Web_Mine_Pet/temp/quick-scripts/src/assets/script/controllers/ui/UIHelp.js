"use strict";
cc._RF.push(module, '0f7597DOsZLc7J+fGCabqaN', 'UIHelp');
// script/controllers/ui/UIHelp.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UIMng_1 = require("../../manager/UIMng");
var UILoading_1 = require("./UILoading");
var UIMessage_1 = require("./UIMessage");
var ViewZorder_1 = require("../../data/const/ViewZorder");
var UIHelp = /** @class */ (function () {
    function UIHelp() {
    }
    UIHelp.ShowUI = function (uiClass) {
        UIMng_1.default.getInstance().showUI(uiClass);
    };
    UIHelp.HideUI = function (uiClass) {
        UIMng_1.default.getInstance().hideUI(uiClass);
    };
    UIHelp.ShowLoading = function (callback) {
        UIMng_1.default.getInstance().openUI(UILoading_1.default, ViewZorder_1.ViewZorder.UI, callback);
    };
    UIHelp.ShowDialog = function (data) {
        var dialogUI = UIMng_1.default.getInstance().getUI(UIMessage_1.default);
        if (!dialogUI) {
            UIMng_1.default.getInstance().openUI(UIMessage_1.default, ViewZorder_1.ViewZorder.Dialog, null, null, data);
        }
        else {
            dialogUI.show(data);
        }
    };
    UIHelp.Resize = function (uiClass) {
        UIMng_1.default.getInstance().resizeUI(uiClass);
    };
    return UIHelp;
}());
exports.default = UIHelp;

cc._RF.pop();
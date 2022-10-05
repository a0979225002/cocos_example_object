
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/ui/UIHelp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcdWlcXFVJSGVscC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF3QztBQUV4Qyx5Q0FBb0M7QUFDcEMseUNBQW9DO0FBQ3BDLDBEQUF1RDtBQUV2RDtJQUFBO0lBMkJBLENBQUM7SUF6QmlCLGFBQU0sR0FBcEIsVUFBdUMsT0FBbUI7UUFDdEQsZUFBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRWEsYUFBTSxHQUFwQixVQUF1QyxPQUFtQjtRQUN0RCxlQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFYSxrQkFBVyxHQUF6QixVQUEwQixRQUFtQjtRQUN6QyxlQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLG1CQUFTLEVBQUUsdUJBQVUsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVhLGlCQUFVLEdBQXhCLFVBQXlCLElBQUk7UUFDekIsSUFBSSxRQUFRLEdBQUcsZUFBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBUyxDQUFjLENBQUM7UUFDakUsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNYLGVBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsbUJBQVMsRUFBRSx1QkFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzlFO2FBQU07WUFDSCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUVhLGFBQU0sR0FBcEIsVUFBdUMsT0FBbUI7UUFDdEQsZUFBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUwsYUFBQztBQUFELENBM0JBLEFBMkJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlNbmcgZnJvbSBcIi4uLy4uL21hbmFnZXIvVUlNbmdcIjtcclxuaW1wb3J0IFVJQmFzZSwgeyBVSUNsYXNzIH0gZnJvbSBcIi4vVUlCYXNlXCI7XHJcbmltcG9ydCBVSUxvYWRpbmcgZnJvbSBcIi4vVUlMb2FkaW5nXCI7XHJcbmltcG9ydCBVSU1lc3NhZ2UgZnJvbSBcIi4vVUlNZXNzYWdlXCI7XHJcbmltcG9ydCB7Vmlld1pvcmRlcn0gZnJvbSBcIi4uLy4uL2RhdGEvY29uc3QvVmlld1pvcmRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlIZWxwIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFNob3dVSTxUIGV4dGVuZHMgVUlCYXNlPih1aUNsYXNzOiBVSUNsYXNzPFQ+KSB7XHJcbiAgICAgICAgVUlNbmcuZ2V0SW5zdGFuY2UoKS5zaG93VUkodWlDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBIaWRlVUk8VCBleHRlbmRzIFVJQmFzZT4odWlDbGFzczogVUlDbGFzczxUPikge1xyXG4gICAgICAgIFVJTW5nLmdldEluc3RhbmNlKCkuaGlkZVVJKHVpQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgU2hvd0xvYWRpbmcoY2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIFVJTW5nLmdldEluc3RhbmNlKCkub3BlblVJKFVJTG9hZGluZywgVmlld1pvcmRlci5VSSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgU2hvd0RpYWxvZyhkYXRhKSB7XHJcbiAgICAgICAgbGV0IGRpYWxvZ1VJID0gVUlNbmcuZ2V0SW5zdGFuY2UoKS5nZXRVSShVSU1lc3NhZ2UpIGFzIFVJTWVzc2FnZTtcclxuICAgICAgICBpZiAoIWRpYWxvZ1VJKSB7XHJcbiAgICAgICAgICAgIFVJTW5nLmdldEluc3RhbmNlKCkub3BlblVJKFVJTWVzc2FnZSwgVmlld1pvcmRlci5EaWFsb2csIG51bGwsIG51bGwsIGRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpYWxvZ1VJLnNob3coZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgUmVzaXplPFQgZXh0ZW5kcyBVSUJhc2U+KHVpQ2xhc3M6IFVJQ2xhc3M8VD4pOiB2b2lkIHtcclxuICAgICAgICBVSU1uZy5nZXRJbnN0YW5jZSgpLnJlc2l6ZVVJKHVpQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
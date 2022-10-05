
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/scene/MainLoading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b5d27Ax+B5PZ7cPb5SXl9yK', 'MainLoading');
// script/controllers/scene/MainLoading.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameController_1 = require("../../GameController");
var AssetsMng_1 = require("../../manager/AssetsMng");
var SceneMng_1 = require("../../manager/SceneMng");
var EventConst_1 = require("../../data/const/EventConst");
var UIBase_1 = require("../ui/UIBase");
var UIHelp_1 = require("../ui/UIHelp");
var LangMng_1 = require("../../manager/LangMng");
var ccclass = cc._decorator.ccclass;
var MainLoading = /** @class */ (function (_super) {
    __extends(MainLoading, _super);
    function MainLoading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainLoading.prototype.onUILoad = function () {
        UIHelp_1.default.ShowLoading();
        UIHelp_1.default.ShowDialog(null);
        this.initEvent(EventConst_1.LoadEvent.LOAD_PRELOAD_DONE, this.onAssetLoadDone);
        this.initEvent(EventConst_1.LoadEvent.LOAD_SUCCESS, this.onLoadSuccess);
        this.initEvent(EventConst_1.MainEvent.MESSAGE_SHOW, this.onMessageShow);
        SceneMng_1.default.resize();
    };
    MainLoading.prototype.onStart = function () {
        GameController_1.default.init();
        this.onPreLoad();
    };
    MainLoading.prototype.onPreLoad = function () {
        AssetsMng_1.default.onPreLoad();
    };
    MainLoading.prototype.onAssetLoadDone = function () {
        SceneMng_1.default.preload("mainGame", this.onNextSceneLoad.bind(this));
    };
    MainLoading.prototype.onNextSceneLoad = function () {
        GameController_1.default.net.send("start", null);
    };
    MainLoading.prototype.onLoadSuccess = function () {
        var timer = setTimeout((function () {
            SceneMng_1.default.goGame();
            clearTimeout(timer);
        }), 1000);
    };
    MainLoading.prototype.onMessageShow = function (config) {
        UIHelp_1.default.ShowDialog({
            content: LangMng_1.default.getTxt(config.code),
        });
    };
    MainLoading.prototype.update = function (dt) {
        SceneMng_1.default.resizeUpdate();
    };
    MainLoading = __decorate([
        ccclass
    ], MainLoading);
    return MainLoading;
}(UIBase_1.default));
exports.default = MainLoading;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcc2NlbmVcXE1haW5Mb2FkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFrRDtBQUNsRCxxREFBZ0Q7QUFDaEQsbURBQThDO0FBQzlDLDBEQUFtRTtBQUNuRSx1Q0FBa0M7QUFDbEMsdUNBQWtDO0FBQ2xDLGlEQUE0QztBQUVwQyxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUdsQztJQUF5QywrQkFBTTtJQUEvQzs7SUFxREEsQ0FBQztJQW5ERyw4QkFBUSxHQUFSO1FBRUksZ0JBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixnQkFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4QixJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFTLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTNELGtCQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFFdEIsQ0FBQztJQUVELDZCQUFPLEdBQVA7UUFDSSx3QkFBYyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBR0QsK0JBQVMsR0FBVDtRQUNJLG1CQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUdELHFDQUFlLEdBQWY7UUFDSSxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBR0QscUNBQWUsR0FBZjtRQUNJLHdCQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELG1DQUFhLEdBQWI7UUFDSSxJQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsQ0FBQztZQUN0QixrQkFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2xCLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNkLENBQUM7SUFHRCxtQ0FBYSxHQUFiLFVBQWMsTUFBTTtRQUNoQixnQkFBTSxDQUFDLFVBQVUsQ0FBQztZQUNWLE9BQU8sRUFBRSxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQzNDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFUyw0QkFBTSxHQUFoQixVQUFpQixFQUFVO1FBQ3ZCLGtCQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQW5EZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXFEL0I7SUFBRCxrQkFBQztDQXJERCxBQXFEQyxDQXJEd0MsZ0JBQU0sR0FxRDlDO2tCQXJEb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vLi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IEFzc2V0c01uZyBmcm9tIFwiLi4vLi4vbWFuYWdlci9Bc3NldHNNbmdcIjtcclxuaW1wb3J0IFNjZW5lTW5nIGZyb20gXCIuLi8uLi9tYW5hZ2VyL1NjZW5lTW5nXCI7XHJcbmltcG9ydCB7IExvYWRFdmVudCwgTWFpbkV2ZW50IH0gZnJvbSBcIi4uLy4uL2RhdGEvY29uc3QvRXZlbnRDb25zdFwiO1xyXG5pbXBvcnQgVUlCYXNlIGZyb20gXCIuLi91aS9VSUJhc2VcIjtcclxuaW1wb3J0IFVJSGVscCBmcm9tIFwiLi4vdWkvVUlIZWxwXCI7XHJcbmltcG9ydCBMYW5nTW5nIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0xhbmdNbmdcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5Mb2FkaW5nIGV4dGVuZHMgVUlCYXNlIHtcclxuXHJcbiAgICBvblVJTG9hZCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgVUlIZWxwLlNob3dMb2FkaW5nKCk7XHJcbiAgICAgICAgVUlIZWxwLlNob3dEaWFsb2cobnVsbCk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KExvYWRFdmVudC5MT0FEX1BSRUxPQURfRE9ORSwgdGhpcy5vbkFzc2V0TG9hZERvbmUpO1xyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KExvYWRFdmVudC5MT0FEX1NVQ0NFU1MsIHRoaXMub25Mb2FkU3VjY2Vzcyk7XHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoTWFpbkV2ZW50Lk1FU1NBR0VfU0hPVywgdGhpcy5vbk1lc3NhZ2VTaG93KTtcclxuXHJcbiAgICAgICAgU2NlbmVNbmcucmVzaXplKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgR2FtZUNvbnRyb2xsZXIuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMub25QcmVMb2FkKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uUHJlTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBBc3NldHNNbmcub25QcmVMb2FkKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uQXNzZXRMb2FkRG9uZSgpOiB2b2lkIHtcclxuICAgICAgICBTY2VuZU1uZy5wcmVsb2FkKFwibWFpbkdhbWVcIiwgdGhpcy5vbk5leHRTY2VuZUxvYWQuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uTmV4dFNjZW5lTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBHYW1lQ29udHJvbGxlci5uZXQuc2VuZChcInN0YXJ0XCIsIG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZFN1Y2Nlc3MoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgoKSA9PiB7XHJcbiAgICAgICAgICAgIFNjZW5lTW5nLmdvR2FtZSgpO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgIH0pLCAxMDAwKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25NZXNzYWdlU2hvdyhjb25maWcpOiB2b2lkIHtcclxuICAgICAgICBVSUhlbHAuU2hvd0RpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBMYW5nTW5nLmdldFR4dChjb25maWcuY29kZSksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgU2NlbmVNbmcucmVzaXplVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG59Il19
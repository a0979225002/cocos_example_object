"use strict";
cc._RF.push(module, '095671c/OFGXJQ8UAONFXpD', 'UIMng');
// script/manager/UIMng.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ViewZorder_1 = require("../data/const/ViewZorder");
var UIMng = /** @class */ (function () {
    function UIMng() {
        this.uiList = [];
    }
    UIMng.getInstance = function () {
        if (this.instance == null) {
            this.instance = new UIMng();
        }
        return this.instance;
    };
    UIMng.prototype.openUI = function (uiClass, zOrder, callback, onProgress) {
        var _this = this;
        if (zOrder === void 0) { zOrder = ViewZorder_1.ViewZorder.UI; }
        var args = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            args[_i - 4] = arguments[_i];
        }
        if (this.getUI(uiClass)) {
            return;
        }
        cc.loader.loadRes(uiClass.getUrl(), function (completedCount, totalCount, item) {
            onProgress && onProgress(completedCount, totalCount, item);
        }, function (error, prefab) {
            if (error) {
                return;
            }
            if (_this.getUI(uiClass)) {
                return;
            }
            var uiNode = cc.instantiate(prefab);
            var ui = uiNode.getComponent(uiClass);
            if (!ui) {
                return;
            }
            ui.init(args);
            var uiRoot = cc.director.getScene();
            if (!uiRoot) {
                return;
            }
            uiNode.parent = uiRoot;
            uiNode.zIndex = zOrder;
            _this.uiList.push(ui);
            ui.tag = uiClass;
            callback && callback(ui);
        });
    };
    UIMng.prototype.showUI = function (uiClass, callback) {
        var ui = this.getUI(uiClass);
        if (!ui) {
            console.error("UIMng showUI: ui " + uiClass.getName() + " not exist");
            return;
        }
        if (ui["show"]) {
            ui["show"]();
        }
        else {
            ui.node.active = true;
        }
    };
    UIMng.prototype.hideUI = function (uiClass) {
        var ui = this.getUI(uiClass);
        if (ui["hide"]) {
            ui["hide"]();
        }
        else {
            ui.node.active = false;
        }
    };
    UIMng.prototype.resizeUI = function (uiClass) {
        var ui = this.getUI(uiClass);
        if (ui && ui["resize"]) {
            ui["resize"]();
        }
    };
    UIMng.prototype.closeUI = function (uiClass) {
        for (var i = 0; i < this.uiList.length; ++i) {
            if (this.uiList[i].tag === uiClass) {
                if (cc.isValid(this.uiList[i].node)) {
                    this.uiList[i].node.destroy();
                    this.clearDependsRes(uiClass.getUrl());
                }
                this.uiList.splice(i, 1);
                return;
            }
        }
    };
    UIMng.prototype.getUI = function (uiClass) {
        for (var i = 0; i < this.uiList.length; ++i) {
            if (this.uiList[i].tag === uiClass) {
                return this.uiList[i];
            }
        }
        return null;
    };
    UIMng.prototype.clearDependsRes = function (prefabUrl) {
        var deps = cc.loader.getDependsRecursively(prefabUrl);
        deps.forEach(function (item) {
            if (item.indexOf('common') === -1) {
                cc.loader.release(item);
            }
        });
    };
    return UIMng;
}());
exports.default = UIMng;

cc._RF.pop();
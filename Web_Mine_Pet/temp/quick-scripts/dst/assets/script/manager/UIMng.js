
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/UIMng.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxVSU1uZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHVEQUFvRDtBQUNwRDtJQVlJO1FBVFEsV0FBTSxHQUFhLEVBQUUsQ0FBQztJQVc5QixDQUFDO0lBVGEsaUJBQVcsR0FBekI7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztTQUMvQjtRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBTU0sc0JBQU0sR0FBYixVQUFnQyxPQUFtQixFQUFFLE1BQThCLEVBQUUsUUFBbUIsRUFBRSxVQUFxQjtRQUEvSCxpQkF5Q0M7UUF6Q29ELHVCQUFBLEVBQUEsU0FBaUIsdUJBQVUsQ0FBQyxFQUFFO1FBQThDLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsNkJBQWM7O1FBRTNJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNyQixPQUFPO1NBQ1Y7UUFFRCxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsVUFBQyxjQUFzQixFQUFFLFVBQWtCLEVBQUUsSUFBUztZQUN0RixVQUFVLElBQUksVUFBVSxDQUFDLGNBQWMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0QsQ0FBQyxFQUFFLFVBQUMsS0FBSyxFQUFFLE1BQU07WUFFYixJQUFJLEtBQUssRUFBRTtnQkFDUCxPQUFPO2FBQ1Y7WUFFRCxJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3JCLE9BQU87YUFDVjtZQUVELElBQUksTUFBTSxHQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0MsSUFBSSxFQUFFLEdB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RSxDQUFDLEVBQUU7WUFDekMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7Z0JBQ2hDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN6QjtTQUNKO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFFaEIsQ0FBQztJQUVPLCtCQUFlLEdBQXZCLFVBQXdCLFNBQVM7UUFDN0IsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtZQUNkLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDL0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0I7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFHTCxZQUFDO0FBQUQsQ0FoSUEsQUFnSUMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSUJhc2UsIHsgVUlDbGFzcyB9IGZyb20gXCIuLi9jb250cm9sbGVycy91aS9VSUJhc2VcIjtcclxuaW1wb3J0IHtWaWV3Wm9yZGVyfSBmcm9tIFwiLi4vZGF0YS9jb25zdC9WaWV3Wm9yZGVyXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJTW5nIHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogVUlNbmc7XHJcbiAgICBwcml2YXRlIHVpTGlzdDogVUlCYXNlW10gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IFVJTW5nIHtcclxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVUlNbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5VSTxUIGV4dGVuZHMgVUlCYXNlPih1aUNsYXNzOiBVSUNsYXNzPFQ+LCB6T3JkZXI6IG51bWJlciA9IFZpZXdab3JkZXIuVUksIGNhbGxiYWNrPzogRnVuY3Rpb24sIG9uUHJvZ3Jlc3M/OiBGdW5jdGlvbiwgLi4uYXJnczogYW55W10pIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0VUkodWlDbGFzcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXModWlDbGFzcy5nZXRVcmwoKSwgKGNvbXBsZXRlZENvdW50OiBudW1iZXIsIHRvdGFsQ291bnQ6IG51bWJlciwgaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIG9uUHJvZ3Jlc3MgJiYgb25Qcm9ncmVzcyhjb21wbGV0ZWRDb3VudCwgdG90YWxDb3VudCwgaXRlbSk7XHJcbiAgICAgICAgfSwgKGVycm9yLCBwcmVmYWIpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRVSSh1aUNsYXNzKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdWlOb2RlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgbGV0IHVpID0gdWlOb2RlLmdldENvbXBvbmVudCh1aUNsYXNzKSBhcyBVSUJhc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXVpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHVpLmluaXQoYXJncyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdWlSb290ID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdWlSb290KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHVpTm9kZS5wYXJlbnQgPSB1aVJvb3Q7XHJcbiAgICAgICAgICAgIHVpTm9kZS56SW5kZXggPSB6T3JkZXI7XHJcbiAgICAgICAgICAgIHRoaXMudWlMaXN0LnB1c2godWkpO1xyXG4gICAgICAgICAgICB1aS50YWcgPSB1aUNsYXNzO1xyXG5cclxuICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sodWkpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd1VJPFQgZXh0ZW5kcyBVSUJhc2U+KHVpQ2xhc3M6IFVJQ2xhc3M8VD4sIGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuXHJcbiAgICAgICAgbGV0IHVpID0gdGhpcy5nZXRVSSh1aUNsYXNzKTtcclxuXHJcbiAgICAgICAgaWYgKCF1aSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBVSU1uZyBzaG93VUk6IHVpICR7dWlDbGFzcy5nZXROYW1lKCl9IG5vdCBleGlzdGApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodWlbYHNob3dgXSkge1xyXG4gICAgICAgICAgICB1aVtgc2hvd2BdKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdWkubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpZGVVSTxUIGV4dGVuZHMgVUlCYXNlPih1aUNsYXNzOiBVSUNsYXNzPFQ+KSB7XHJcbiAgICAgICAgbGV0IHVpID0gdGhpcy5nZXRVSSh1aUNsYXNzKTtcclxuICAgICAgICBpZiAodWlbYGhpZGVgXSkge1xyXG4gICAgICAgICAgICB1aVtgaGlkZWBdKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdWkubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2l6ZVVJPFQgZXh0ZW5kcyBVSUJhc2U+KHVpQ2xhc3M6IFVJQ2xhc3M8VD4pIHtcclxuICAgICAgICBsZXQgdWkgPSB0aGlzLmdldFVJKHVpQ2xhc3MpO1xyXG4gICAgICAgIGlmICh1aSAmJiB1aVtgcmVzaXplYF0pIHtcclxuICAgICAgICAgICAgdWlbYHJlc2l6ZWBdKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VVSTxUIGV4dGVuZHMgVUlCYXNlPih1aUNsYXNzOiBVSUNsYXNzPFQ+KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVpTGlzdC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51aUxpc3RbaV0udGFnID09PSB1aUNsYXNzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLnVpTGlzdFtpXS5ub2RlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWlMaXN0W2ldLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJEZXBlbmRzUmVzKHVpQ2xhc3MuZ2V0VXJsKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy51aUxpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRVSTxUIGV4dGVuZHMgVUlCYXNlPih1aUNsYXNzOiBVSUNsYXNzPFQ+KTogVUlCYXNlIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVpTGlzdC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51aUxpc3RbaV0udGFnID09PSB1aUNsYXNzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51aUxpc3RbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsZWFyRGVwZW5kc1JlcyhwcmVmYWJVcmwpIHtcclxuICAgICAgICBsZXQgZGVwcyA9IGNjLmxvYWRlci5nZXREZXBlbmRzUmVjdXJzaXZlbHkocHJlZmFiVXJsKTtcclxuICAgICAgICBkZXBzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uaW5kZXhPZignY29tbW9uJykgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIucmVsZWFzZShpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19
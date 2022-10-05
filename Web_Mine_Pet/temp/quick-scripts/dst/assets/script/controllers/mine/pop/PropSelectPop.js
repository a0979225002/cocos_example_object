
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/controllers/mine/pop/PropSelectPop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4a94TBtqJGB7bW3Gnm6qbA', 'PropSelectPop');
// script/controllers/mine/pop/PropSelectPop.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var LangMng_1 = require("../../../manager/LangMng");
var UIBase_1 = require("../../ui/UIBase");
var ViewZorder_1 = require("../../../data/const/ViewZorder");
var CtrlBtn = /** @class */ (function () {
    function CtrlBtn(node, id, config) {
        this.id = -1;
        this.clickCallBack = null;
        this.canClick = true;
        this.node = node;
        this.id = id;
        if (config && config.clickCallBack) {
            this.clickCallBack = config.clickCallBack;
        }
        this.node_normal = this.node.getChildByName("normal");
        this.node_active = this.node.getChildByName("active");
        this.label_txt = this.node.getChildByName("txt").getComponent(cc.Label);
        if (config && config.iconNormal) {
            this.sprite_normal_icon = this.node_normal.getChildByName("icon").getComponent(cc.Sprite);
            this.sprite_normal_icon.spriteFrame = config.iconNormal;
        }
        if (config && config.iconActive) {
            this.sprite_active_icon = this.node_active.getChildByName("icon").getComponent(cc.Sprite);
            this.sprite_active_icon.spriteFrame = config.iconActive;
        }
        this.init();
    }
    CtrlBtn.prototype.init = function () {
        this.setPieceNum("");
    };
    CtrlBtn.prototype.show = function () {
        this.node_normal.active = false;
        this.node_active.active = true;
    };
    CtrlBtn.prototype.hide = function () {
        this.node_normal.active = true;
        this.node_active.active = false;
    };
    CtrlBtn.prototype.setPieceNum = function (str) {
        this.label_txt.string = str;
    };
    CtrlBtn.prototype.clickBindOn = function () {
        this.node.on("touchend", this.onClick, this);
    };
    CtrlBtn.prototype.clickBindOff = function () {
        this.node.off("touchend", this.onClick, this);
    };
    CtrlBtn.prototype.onClick = function () {
        if (this.clickCallBack && this.canClick) {
            this.clickCallBack(this.id);
        }
    };
    CtrlBtn.prototype.remove = function () {
        var label = this.label_txt;
        label.string = LangMng_1.default.getTxt("T_114");
        label.node.setPosition(0, 0);
        label.node.color = new cc.Color(170, 170, 170);
        label.fontSize = 30;
        this.sprite_normal_icon.node.active = false;
        this.sprite_active_icon.node.active = false;
        this.canClick = false;
    };
    CtrlBtn.prototype.updateData = function (data) {
        var info = data.info;
        if (info) {
            this.setPieceNum(info.quantity + "/" + info.require);
        }
        this.canClick = true;
    };
    return CtrlBtn;
}());
var PropSelectPop = /** @class */ (function (_super) {
    __extends(PropSelectPop, _super);
    function PropSelectPop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentIndex = -1;
        _this.ctrlBtns = [];
        _this.mineID = -1;
        _this.langTxtData = {
            noDisplay: "",
        };
        _this.btnIconImg = null;
        return _this;
    }
    PropSelectPop.prototype.onUILoad = function () {
        this.node_main = this.node.getChildByName("main");
        this.node_view_holder = this.node_main.getChildByName("view_holder");
        this.node_view_con = this.node_view_holder.getChildByName("con");
        this.no_txt = this.node_view_holder.getChildByName("no_txt").getComponent(cc.Label);
        this.node_btns_holder = this.node_main.getChildByName("btns_holder");
        this.btn_close = this.node_main.getChildByName("btn_close");
        this.viewInit();
        this.hide();
    };
    PropSelectPop.prototype.show = function (msg) {
        this.node.active = true;
        this.mineID = msg.petID;
        this.btnsInfoUpdate();
        this.change(this.getCurrentSelectID(this.mineID));
        this.onRegisterEvent(this.btn_close, this.onBtnClose, this);
    };
    PropSelectPop.prototype.hide = function () {
        this.node.active = false;
        this.unRegisterEvent(this.btn_close, this.onBtnClose, this);
    };
    PropSelectPop.prototype.onBtnClose = function () {
        this.hide();
    };
    PropSelectPop.prototype.change = function (id) {
        if (this.currentIndex >= 0) {
            this.ctrlBtns[this.currentIndex].hide();
        }
        this.currentIndex = id;
        this.ctrlBtns[id].show();
    };
    PropSelectPop.prototype.viewInit = function () {
        this.setOrder();
        this.setNoUseTxt();
        this.previewHide();
        this.btnsCreate();
    };
    PropSelectPop.prototype.previewShow = function () {
        this.node_view_con.active = true;
    };
    PropSelectPop.prototype.previewHide = function () {
        this.node_view_con.active = false;
    };
    PropSelectPop.prototype.noUseShow = function () {
        this.no_txt.node.active = true;
    };
    PropSelectPop.prototype.noUseHide = function () {
        this.no_txt.node.active = false;
    };
    PropSelectPop.prototype.btnsCreate = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var btnNode = this_1.node_btns_holder.children[i];
            var ctrlBtn = new CtrlBtn(btnNode, i, {
                iconNormal: (function () {
                    return _this.btnIconImg && _this.btnIconImg.n ? _this.btnIconImg.n[i] : null;
                })(),
                iconActive: (function () {
                    return _this.btnIconImg && _this.btnIconImg.a ? _this.btnIconImg.a[i] : null;
                })(),
                clickCallBack: this_1.btnOnClick.bind(this_1),
            });
            this_1.ctrlBtns.push(ctrlBtn);
        };
        var this_1 = this;
        for (var i = 0; i < 8; i++) {
            _loop_1(i);
        }
    };
    PropSelectPop.prototype.btnsInfoUpdate = function () {
        var data = this.getListData();
        for (var i = 1; i < this.ctrlBtns.length; i++) {
            if (data[i - 1]) {
                this.ctrlBtns[i].updateData(data[i - 1]);
            }
            else {
                this.ctrlBtns[i].remove();
            }
        }
    };
    PropSelectPop.prototype.btnsClickOn = function () {
        this.ctrlBtns.forEach(function (btn) {
            btn.clickBindOn();
        });
    };
    PropSelectPop.prototype.btnsClickOff = function () {
        this.ctrlBtns.forEach(function (btn) {
            btn.clickBindOff();
        });
    };
    PropSelectPop.prototype.btnOnClick = function (id) {
        if (this.currentIndex == id) {
            return;
        }
        this.change(id);
    };
    PropSelectPop.prototype.setOrder = function () {
        this.node.zIndex = ViewZorder_1.ViewZorder.UI;
    };
    PropSelectPop.prototype.setNoUseTxt = function () {
        this.no_txt.string = this.langTxtData ? this.langTxtData.noDisplay : "";
    };
    PropSelectPop.prototype.getListData = function () {
        return [];
    };
    PropSelectPop.prototype.getPieceMaxNum = function () {
        return 0;
    };
    PropSelectPop.prototype.getCurrentSelectID = function (id) {
        return null;
    };
    return PropSelectPop;
}(UIBase_1.default));
exports.default = PropSelectPop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb250cm9sbGVyc1xcbWluZVxccG9wXFxQcm9wU2VsZWN0UG9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUErQztBQUMvQywwQ0FBcUM7QUFDckMsNkRBQTREO0FBRTVEO0lBaUJJLGlCQUFZLElBQWEsRUFBRSxFQUFVLEVBQUUsTUFBTztRQWY5QyxPQUFFLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFXaEIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFFckIsYUFBUSxHQUFZLElBQUksQ0FBQztRQUlyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUViLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1NBQzdDO1FBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV4RSxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQzdCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEdBQUcs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QUUsQ0FBQztJQUM1RSxDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNJLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELHNDQUFjLEdBQWQ7UUFDSSxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCwwQ0FBa0IsR0FBbEIsVUFBbUIsRUFBRTtRQUNqQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUwsb0JBQUM7QUFBRCxDQXJMQSxBQXFMQyxDQXJMMEMsZ0JBQU0sR0FxTGhEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExhbmdNbmcgZnJvbSBcIi4uLy4uLy4uL21hbmFnZXIvTGFuZ01uZ1wiO1xyXG5pbXBvcnQgVUlCYXNlIGZyb20gXCIuLi8uLi91aS9VSUJhc2VcIjtcclxuaW1wb3J0IHsgVmlld1pvcmRlciB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2NvbnN0L1ZpZXdab3JkZXJcIjtcclxuXHJcbmNsYXNzIEN0cmxCdG4ge1xyXG5cclxuICAgIGlkOiBudW1iZXIgPSAtMTtcclxuICAgIG5vZGU6IGNjLk5vZGU7XHJcblxyXG4gICAgbm9kZV9ub3JtYWw6IGNjLk5vZGU7XHJcbiAgICBub2RlX2FjdGl2ZTogY2MuTm9kZTtcclxuXHJcbiAgICBzcHJpdGVfbm9ybWFsX2ljb246IGNjLlNwcml0ZTtcclxuICAgIHNwcml0ZV9hY3RpdmVfaWNvbjogY2MuU3ByaXRlO1xyXG5cclxuICAgIGxhYmVsX3R4dDogY2MuTGFiZWw7XHJcblxyXG4gICAgY2xpY2tDYWxsQmFjayA9IG51bGw7XHJcblxyXG4gICAgY2FuQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5vZGU6IGNjLk5vZGUsIGlkOiBudW1iZXIsIGNvbmZpZz8pIHtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcblxyXG4gICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLmNsaWNrQ2FsbEJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5jbGlja0NhbGxCYWNrID0gY29uZmlnLmNsaWNrQ2FsbEJhY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGVfbm9ybWFsID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibm9ybWFsXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZV9hY3RpdmUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgdGhpcy5sYWJlbF90eHQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0eHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZyAmJiBjb25maWcuaWNvbk5vcm1hbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZV9ub3JtYWxfaWNvbiA9IHRoaXMubm9kZV9ub3JtYWwuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZV9ub3JtYWxfaWNvbi5zcHJpdGVGcmFtZSA9IGNvbmZpZy5pY29uTm9ybWFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZyAmJiBjb25maWcuaWNvbkFjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZV9hY3RpdmVfaWNvbiA9IHRoaXMubm9kZV9hY3RpdmUuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZV9hY3RpdmVfaWNvbi5zcHJpdGVGcmFtZSA9IGNvbmZpZy5pY29uQWN0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRQaWVjZU51bShcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZV9ub3JtYWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlX2FjdGl2ZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlX25vcm1hbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZV9hY3RpdmUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGllY2VOdW0oc3RyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sYWJlbF90eHQuc3RyaW5nID0gc3RyO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrQmluZE9uKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcInRvdWNoZW5kXCIsIHRoaXMub25DbGljaywgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tCaW5kT2ZmKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoXCJ0b3VjaGVuZFwiLCB0aGlzLm9uQ2xpY2ssIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2xpY2tDYWxsQmFjayAmJiB0aGlzLmNhbkNsaWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpY2tDYWxsQmFjayh0aGlzLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgbGFiZWwgPSB0aGlzLmxhYmVsX3R4dDtcclxuICAgICAgICBsYWJlbC5zdHJpbmcgPSBMYW5nTW5nLmdldFR4dChcIlRfMTE0XCIpO1xyXG4gICAgICAgIGxhYmVsLm5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgbGFiZWwubm9kZS5jb2xvciA9IG5ldyBjYy5Db2xvcigxNzAsIDE3MCwgMTcwKTtcclxuICAgICAgICBsYWJlbC5mb250U2l6ZSA9IDMwO1xyXG5cclxuICAgICAgICB0aGlzLnNwcml0ZV9ub3JtYWxfaWNvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlX2FjdGl2ZV9pY29uLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVEYXRhKGRhdGEpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IGluZm8gPSBkYXRhLmluZm87XHJcblxyXG4gICAgICAgIGlmIChpbmZvKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UGllY2VOdW0oYCR7IGluZm8ucXVhbnRpdHkgfS8keyBpbmZvLnJlcXVpcmUgfWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcFNlbGVjdFBvcCBleHRlbmRzIFVJQmFzZSB7XHJcblxyXG4gICAgbm9kZV9tYWluOiBjYy5Ob2RlO1xyXG5cclxuICAgIG5vZGVfdmlld19ob2xkZXI6IGNjLk5vZGU7XHJcbiAgICBub2RlX3ZpZXdfY29uOiBjYy5Ob2RlO1xyXG4gICAgbm9fdHh0OiBjYy5MYWJlbDtcclxuXHJcbiAgICBub2RlX2J0bnNfaG9sZGVyOiBjYy5Ob2RlO1xyXG5cclxuICAgIGJ0bl9jbG9zZTogY2MuTm9kZTtcclxuXHJcbiAgICBjdXJyZW50SW5kZXg6IG51bWJlciA9IC0xO1xyXG4gICAgY3RybEJ0bnM6IEN0cmxCdG5bXSA9IFtdO1xyXG5cclxuICAgIG1pbmVJRDogbnVtYmVyID0gLTE7XHJcblxyXG4gICAgbGFuZ1R4dERhdGEgPSB7XHJcbiAgICAgICAgbm9EaXNwbGF5OiBcIlwiLFxyXG4gICAgfTtcclxuXHJcbiAgICBidG5JY29uSW1nID0gbnVsbDtcclxuXHJcbiAgICBvblVJTG9hZCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlX21haW4gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtYWluXCIpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVfdmlld19ob2xkZXIgPSB0aGlzLm5vZGVfbWFpbi5nZXRDaGlsZEJ5TmFtZShcInZpZXdfaG9sZGVyXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZV92aWV3X2NvbiA9IHRoaXMubm9kZV92aWV3X2hvbGRlci5nZXRDaGlsZEJ5TmFtZShcImNvblwiKTtcclxuICAgICAgICB0aGlzLm5vX3R4dCA9IHRoaXMubm9kZV92aWV3X2hvbGRlci5nZXRDaGlsZEJ5TmFtZShcIm5vX3R4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVfYnRuc19ob2xkZXIgPSB0aGlzLm5vZGVfbWFpbi5nZXRDaGlsZEJ5TmFtZShcImJ0bnNfaG9sZGVyXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmJ0bl9jbG9zZSA9IHRoaXMubm9kZV9tYWluLmdldENoaWxkQnlOYW1lKFwiYnRuX2Nsb3NlXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnZpZXdJbml0KCk7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3cobXNnKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubWluZUlEID0gbXNnLnBldElEO1xyXG5cclxuICAgICAgICB0aGlzLmJ0bnNJbmZvVXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UodGhpcy5nZXRDdXJyZW50U2VsZWN0SUQodGhpcy5taW5lSUQpKTtcclxuXHJcbiAgICAgICAgdGhpcy5vblJlZ2lzdGVyRXZlbnQodGhpcy5idG5fY2xvc2UsIHRoaXMub25CdG5DbG9zZSwgdGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudW5SZWdpc3RlckV2ZW50KHRoaXMuYnRuX2Nsb3NlLCB0aGlzLm9uQnRuQ2xvc2UsIHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkNsb3NlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlKGlkKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3RybEJ0bnNbdGhpcy5jdXJyZW50SW5kZXhdLmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gaWQ7XHJcblxyXG4gICAgICAgIHRoaXMuY3RybEJ0bnNbaWRdLnNob3coKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdmlld0luaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0T3JkZXIoKTtcclxuICAgICAgICB0aGlzLnNldE5vVXNlVHh0KCk7XHJcbiAgICAgICAgdGhpcy5wcmV2aWV3SGlkZSgpO1xyXG4gICAgICAgIHRoaXMuYnRuc0NyZWF0ZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcmV2aWV3U2hvdygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGVfdmlld19jb24uYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2aWV3SGlkZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGVfdmlld19jb24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbm9Vc2VTaG93KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9fdHh0Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBub1VzZUhpZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub190eHQubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBidG5zQ3JlYXRlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGJ0bk5vZGUgPSB0aGlzLm5vZGVfYnRuc19ob2xkZXIuY2hpbGRyZW5baV07XHJcblxyXG4gICAgICAgICAgICBsZXQgY3RybEJ0biA9IG5ldyBDdHJsQnRuKGJ0bk5vZGUsIGksIHtcclxuICAgICAgICAgICAgICAgIGljb25Ob3JtYWw6ICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnRuSWNvbkltZyAmJiB0aGlzLmJ0bkljb25JbWcubiA/IHRoaXMuYnRuSWNvbkltZy5uW2ldOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfSkoKSxcclxuICAgICAgICAgICAgICAgIGljb25BY3RpdmU6ICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnRuSWNvbkltZyAmJiB0aGlzLmJ0bkljb25JbWcuYSA/IHRoaXMuYnRuSWNvbkltZy5hW2ldOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfSkoKSxcclxuICAgICAgICAgICAgICAgIGNsaWNrQ2FsbEJhY2s6IHRoaXMuYnRuT25DbGljay5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3RybEJ0bnMucHVzaChjdHJsQnRuKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBidG5zSW5mb1VwZGF0ZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldExpc3REYXRhKCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5jdHJsQnRucy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGFbaSAtIDFdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0cmxCdG5zW2ldLnVwZGF0ZURhdGEoZGF0YVtpIC0gMV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdHJsQnRuc1tpXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJ0bnNDbGlja09uKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY3RybEJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgICAgICAgIGJ0bi5jbGlja0JpbmRPbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJ0bnNDbGlja09mZigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN0cmxCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICAgICAgICBidG4uY2xpY2tCaW5kT2ZmKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnRuT25DbGljayhpZDogbnVtYmVyKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA9PSBpZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZShpZCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldE9yZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS56SW5kZXggPSBWaWV3Wm9yZGVyLlVJO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE5vVXNlVHh0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9fdHh0LnN0cmluZyA9IHRoaXMubGFuZ1R4dERhdGEgPyB0aGlzLmxhbmdUeHREYXRhLm5vRGlzcGxheSA6IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGlzdERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBpZWNlTWF4TnVtKCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEN1cnJlbnRTZWxlY3RJRChpZCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
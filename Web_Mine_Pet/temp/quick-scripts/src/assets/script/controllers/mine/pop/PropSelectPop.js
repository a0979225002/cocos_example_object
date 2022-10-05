"use strict";
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
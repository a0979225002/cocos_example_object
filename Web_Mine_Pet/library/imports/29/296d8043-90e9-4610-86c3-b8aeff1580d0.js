"use strict";
cc._RF.push(module, '296d8BDkOlGEIbDuK7/FYDQ', 'ToolComponent');
// script/controllers/mine/mng/ToolComponent.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolIntroCon = exports.ToolBtn = void 0;
var ToolBtn = /** @class */ (function () {
    function ToolBtn(node, id, clickCallback) {
        this.id = -1;
        this.clickCallback = null;
        this.color_red = null;
        this.color_black = null;
        this.id = id;
        this.node = node;
        this.count_box = this.node.getChildByName("count_box");
        this.count_bg = this.count_box.getChildByName("bg");
        this.label_count = this.count_box.getChildByName("number").getComponent(cc.Label);
        this.bg_active = this.node.getChildByName("bg_active");
        this.title_main = this.node.getChildByName("title");
        this.label_title = this.title_main.getChildByName("txt").getComponent(cc.Label);
        this.color_red = new cc.Color(255, 59, 59);
        this.color_black = new cc.Color(0, 0, 0);
        if (clickCallback) {
            this.clickCallback = clickCallback;
        }
    }
    ToolBtn.prototype.active = function (state) {
        this.bg_active.active = state;
        this.title_main.active = state;
        this.count_bg.color = state ? this.color_red : this.color_black;
    };
    ToolBtn.prototype.setCount = function (val) {
        this.label_count.string = val;
    };
    ToolBtn.prototype.setTitleTxt = function (str) {
        this.label_title.string = str;
    };
    ToolBtn.prototype.bindOn = function () {
        this.node.on("touchend", this.onClick, this);
    };
    ToolBtn.prototype.bindOff = function () {
        this.node.off("touchend", this.onClick, this);
    };
    ToolBtn.prototype.onClick = function () {
        if (this.clickCallback)
            this.clickCallback(this.id);
    };
    return ToolBtn;
}());
exports.ToolBtn = ToolBtn;
var ToolIntroCon = /** @class */ (function () {
    function ToolIntroCon(node, id, updateIntro) {
        this.id = -1;
        this.updateIntro = null;
        this.node = node;
        this.id = id;
        if (updateIntro) {
            this.updateIntro = updateIntro;
        }
    }
    ToolIntroCon.prototype.show = function () {
        this.node.active = true;
        if (this.updateIntro) {
            this.updateIntro();
        }
    };
    ToolIntroCon.prototype.hide = function () {
        if (!this.node.active) {
            return;
        }
        this.node.active = false;
    };
    return ToolIntroCon;
}());
exports.ToolIntroCon = ToolIntroCon;

cc._RF.pop();
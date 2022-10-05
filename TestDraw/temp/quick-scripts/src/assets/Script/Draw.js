"use strict";
cc._RF.push(module, '29c04YUG5VOupGjzxfxy5hb', 'Draw');
// Script/Draw.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var DrawManager_1 = require("./DrawManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.board = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        fcc.configMgr.build();
        fcc.sceneMgr
            .setDesignWidth(1280)
            .setDesignHeight(720)
            .updateSize(fcc.type.SceneStyleType.HORIZONTAL)
            .startListener(500);
    };
    NewClass.prototype.start = function () {
        this.drawManager = new DrawManager_1.DrawManager();
        this.drawManager.init(this.board);
        this.onPen();
        this.node.addChild(this.drawManager.drawNode);
    };
    NewClass.prototype.onEraser = function () {
        this.drawManager.setLineWidth(40);
        this.drawManager.setStrokeColor(new cc.Color(0, 0, 0, 0));
    };
    NewClass.prototype.onPen = function () {
        this.drawManager.setLineWidth(10);
        this.drawManager.setStrokeColor(new cc.Color(0, 200, 200, 255));
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "board", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
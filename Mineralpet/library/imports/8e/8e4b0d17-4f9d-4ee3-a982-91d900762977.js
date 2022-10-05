"use strict";
cc._RF.push(module, '8e4b00XT51O46mCkdkAdil3', 'Controll');
// Script/Controll.ts

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
var ccclass = cc._decorator.ccclass;
var property = cc._decorator.property;
var Modle_1 = require("./Modle");
/**
 * @Author 蕭立品
 * @Description 支票物件控制器
 * @Date 2022-08-08 下午 02:46
 * @Version 1.0
 */
var ChequeController = /** @class */ (function (_super) {
    __extends(ChequeController, _super);
    function ChequeController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chequePrefab = null;
        _this.drawBoardNode = null;
        return _this;
    }
    ChequeController.prototype.onLoad = function () {
        fcc.configMgr.build();
        fcc.sceneMgr
            .setDesignHeight(720)
            .setDesignWidth(1280)
            .updateSize(fcc.type.SceneStyleType.HORIZONTAL)
            .startListener(500);
        this.chequeModel = new Modle_1.default();
        this.chequeModel.initDrawBoardData(this.drawBoardNode, cc.color().fromHEX("#ff8600"), 5);
        this.initialTouchEvent();
    };
    ChequeController.prototype.initialTouchEvent = function () {
        this.drawBoardNode.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.drawBoardNode.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.drawBoardNode.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
    };
    ChequeController.prototype.start = function () {
    };
    ChequeController.prototype.test = function (e) {
        console.log(e);
    };
    ChequeController.prototype.touchStartEvent = function (eventTouch) {
        var position = eventTouch.getLocation();
        // const nowPosition: cc.Vec2 = cc.v2(position.x, this.drawBoardNode.height - position.y);
        this.chequeModel.touchStartAction(position);
    };
    ChequeController.prototype.touchMoveEvent = function (eventTouch) {
        var position = eventTouch.getLocation();
        // const nowPosition: cc.Vec2 = cc.v2(position.x, this.drawBoardNode.height - position.y);
        this.chequeModel.touchMoveToAction(position);
    };
    ChequeController.prototype.touchEndEvent = function (eventTouch) {
        var nowPosition = eventTouch.getLocation();
    };
    ChequeController.prototype.buttonInit = function (componentTrget, component, callBack, buttonTarget, callbackValue) {
        var event = new cc.Component.EventHandler();
        event.target = componentTrget;
        event.component = component;
        event.handler = callBack;
        if (callbackValue)
            event.customEventData = callbackValue;
        console.log(buttonTarget);
        buttonTarget.clickEvents.push(event);
    };
    __decorate([
        property(cc.Prefab)
    ], ChequeController.prototype, "chequePrefab", void 0);
    __decorate([
        property(cc.Node)
    ], ChequeController.prototype, "drawBoardNode", void 0);
    ChequeController = __decorate([
        ccclass
    ], ChequeController);
    return ChequeController;
}(cc.Component));
exports.default = ChequeController;

cc._RF.pop();
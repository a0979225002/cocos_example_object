"use strict";
cc._RF.push(module, '3d0332/NZNHery098ycvc6e', 'DrawManager');
// Script/DrawManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.PenType = exports.DrawManager = void 0;
var DrawBoard_1 = require("./DrawBoard");
var DrawManager = /** @class */ (function () {
    function DrawManager() {
        this.strokeColor = cc.color(0, 0, 255);
        this.lineWidth = 10;
    }
    DrawManager.prototype.init = function (ui) {
        this._node = ui;
        this.initDraw();
        this.addEvent();
    };
    Object.defineProperty(DrawManager.prototype, "drawNode", {
        get: function () {
            return this._drawNode;
        },
        enumerable: false,
        configurable: true
    });
    DrawManager.prototype.setStrokeColor = function (color) {
        this.strokeColor = color;
        this._drawBoard.setColor(this.strokeColor.getR(), this.strokeColor.getG(), this.strokeColor.getB(), this.strokeColor.getA());
    };
    DrawManager.prototype.setLineWidth = function (lineWidth) {
        this.lineWidth = lineWidth;
        this._drawBoard.setLineWidth(this.lineWidth);
    };
    DrawManager.prototype.initDraw = function () {
        var size = cc.size(500, 500);
        this._width = size.width;
        this._height = size.height;
        this._drawNode = new cc.Node();
        this._drawSprite = this._drawNode.addComponent(cc.Sprite);
        this._drawSprite.spriteFrame = new cc.SpriteFrame();
        this._drawBoard = new DrawBoard_1.DrawBoard(size.width, size.height);
        var data = this._drawBoard.getData();
        var texture = new cc.Texture2D();
        texture.initWithData(data, cc.Texture2D.PixelFormat.RGBA8888, this._width, this._height);
        texture.setFlipY(true);
        this._drawSprite.spriteFrame.setTexture(texture);
    };
    DrawManager.prototype.addEvent = function () {
        this._node.targetOff(this);
        this._node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this._node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this._node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        this._node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    };
    DrawManager.prototype.unregistEvents = function () {
        this._node.targetOff(this);
        cc.systemEvent.targetOff(this);
    };
    DrawManager.prototype.onTouchStart = function (evt) {
        var loc = evt.getLocation();
        var drawLoc = this._transition(loc);
        this._drawBoard.moveTo(drawLoc.x, drawLoc.y);
        return true;
    };
    DrawManager.prototype.onTouchMove = function (evt) {
        var touchLoc = evt.getLocation();
        var drawLoc = this._transition(touchLoc);
        this._drawWithLocation(drawLoc);
    };
    DrawManager.prototype.onTouchEnd = function (evt) {
    };
    DrawManager.prototype.onTouchCancel = function (evt) {
    };
    DrawManager.prototype._transition = function (loc) {
        var node = this._node;
        var touchLoc = node.convertToNodeSpaceAR(loc);
        touchLoc.x += this._width / 2;
        touchLoc.y += this._height / 2;
        return touchLoc;
    };
    DrawManager.prototype._drawWithLocation = function (loc) {
        this._drawBoard.lineTo(loc.x, loc.y);
        var data = this._drawBoard.getData();
        var texture = this._drawSprite.spriteFrame.getTexture();
        var opts = texture["_getOpts"]();
        opts.image = data;
        opts.images = [opts.image];
        texture.update(opts);
    };
    return DrawManager;
}());
exports.DrawManager = DrawManager;
var PenType;
(function (PenType) {
    /** 默认为画*/
    PenType[PenType["DEFAULT"] = 0] = "DEFAULT";
    /** 橡皮擦*/
    PenType[PenType["ERASER"] = 1] = "ERASER";
})(PenType = exports.PenType || (exports.PenType = {}));

cc._RF.pop();
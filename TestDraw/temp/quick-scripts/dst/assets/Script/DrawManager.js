
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/DrawManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEcmF3TWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF3QztBQUN4QztJQWFDO1FBVlEsZ0JBQVcsR0FBYSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDM0MsY0FBUyxHQUFXLEVBQUUsQ0FBQztJQVcvQixDQUFDO0lBRU0sMEJBQUksR0FBWCxVQUFZLEVBQVc7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFaEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsc0JBQVcsaUNBQVE7YUFBbkI7WUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFDTSxvQ0FBYyxHQUFyQixVQUFzQixLQUFlO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM5SCxDQUFDO0lBQ00sa0NBQVksR0FBbkIsVUFBb0IsU0FBaUI7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFHTyw4QkFBUSxHQUFoQjtRQUNDLElBQUksSUFBSSxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDLEdBQUcs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U0FBUztJQUNULHlDQUFVLENBQUE7QUFDZCxDQUFDLEVBTFcsT0FBTyxHQUFQLGVBQU8sS0FBUCxlQUFPLFFBS2xCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHJhd0JvYXJkIH0gZnJvbSAnLi9EcmF3Qm9hcmQnO1xuZXhwb3J0IGNsYXNzIERyYXdNYW5hZ2VyIHtcblxuXHRwcml2YXRlIF9ub2RlOiBjYy5Ob2RlO1xuXHRwcml2YXRlIHN0cm9rZUNvbG9yOiBjYy5Db2xvciA9IGNjLmNvbG9yKDAsIDAsIDI1NSlcblx0cHJpdmF0ZSBsaW5lV2lkdGg6IG51bWJlciA9IDEwO1xuXG5cdHByaXZhdGUgX3dpZHRoOiBudW1iZXI7XG5cdHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xuXG5cdHByaXZhdGUgX2RyYXdOb2RlOiBjYy5Ob2RlO1xuXHRwcml2YXRlIF9kcmF3Qm9hcmQ6IERyYXdCb2FyZDtcblx0cHJpdmF0ZSBfZHJhd1Nwcml0ZTogY2MuU3ByaXRlO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdH1cblxuXHRwdWJsaWMgaW5pdCh1aTogY2MuTm9kZSkge1xuXHRcdHRoaXMuX25vZGUgPSB1aTtcblxuXHRcdHRoaXMuaW5pdERyYXcoKTtcblx0XHR0aGlzLmFkZEV2ZW50KCk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0IGRyYXdOb2RlKCk6IGNjLk5vZGUge1xuXHRcdHJldHVybiB0aGlzLl9kcmF3Tm9kZTtcblx0fVxuXHRwdWJsaWMgc2V0U3Ryb2tlQ29sb3IoY29sb3I6IGNjLkNvbG9yKSB7XG5cdFx0dGhpcy5zdHJva2VDb2xvciA9IGNvbG9yO1xuXHRcdHRoaXMuX2RyYXdCb2FyZC5zZXRDb2xvcih0aGlzLnN0cm9rZUNvbG9yLmdldFIoKSwgdGhpcy5zdHJva2VDb2xvci5nZXRHKCksIHRoaXMuc3Ryb2tlQ29sb3IuZ2V0QigpLCB0aGlzLnN0cm9rZUNvbG9yLmdldEEoKSk7XG5cdH1cblx0cHVibGljIHNldExpbmVXaWR0aChsaW5lV2lkdGg6IG51bWJlcikge1xuXHRcdHRoaXMubGluZVdpZHRoID0gbGluZVdpZHRoO1xuXHRcdHRoaXMuX2RyYXdCb2FyZC5zZXRMaW5lV2lkdGgodGhpcy5saW5lV2lkdGgpO1xuXHR9XG5cblxuXHRwcml2YXRlIGluaXREcmF3KCk6IHZvaWQge1xuXHRcdGxldCBzaXplOiBjYy5TaXplID0gY2Muc2l6ZSg1MDAsNTAwKTtcblx0XHR0aGlzLl93aWR0aCA9IHNpemUud2lkdGg7XG5cdFx0dGhpcy5faGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XG5cdFx0dGhpcy5fZHJhd05vZGUgPSBuZXcgY2MuTm9kZSgpO1xuXHRcdHRoaXMuX2RyYXdTcHJpdGUgPSB0aGlzLl9kcmF3Tm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcblx0XHR0aGlzLl9kcmF3U3ByaXRlLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKCk7XG5cdFx0dGhpcy5fZHJhd0JvYXJkID0gbmV3IERyYXdCb2FyZChzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG5cblx0XHRsZXQgZGF0YTogVWludDhBcnJheSA9IHRoaXMuX2RyYXdCb2FyZC5nZXREYXRhKCk7XG5cdFx0bGV0IHRleHR1cmU6IGNjLlRleHR1cmUyRCA9IG5ldyBjYy5UZXh0dXJlMkQoKTtcblx0XHR0ZXh0dXJlLmluaXRXaXRoRGF0YShkYXRhLCBjYy5UZXh0dXJlMkQuUGl4ZWxGb3JtYXQuUkdCQTg4ODgsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpXG5cdFx0dGV4dHVyZS5zZXRGbGlwWSh0cnVlKTtcblx0XHR0aGlzLl9kcmF3U3ByaXRlLnNwcml0ZUZyYW1lLnNldFRleHR1cmUodGV4dHVyZSk7XG5cdH1cblxuXG5cblx0cHJpdmF0ZSBhZGRFdmVudCgpIHtcblx0XHR0aGlzLl9ub2RlLnRhcmdldE9mZih0aGlzKTtcblx0XHR0aGlzLl9ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG5cdFx0dGhpcy5fbm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcblx0XHR0aGlzLl9ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoQ2FuY2VsLCB0aGlzKTtcblx0XHR0aGlzLl9ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcblx0fVxuXHRwdWJsaWMgdW5yZWdpc3RFdmVudHMoKSB7XG5cdFx0dGhpcy5fbm9kZS50YXJnZXRPZmYodGhpcyk7XG5cdFx0Y2Muc3lzdGVtRXZlbnQudGFyZ2V0T2ZmKHRoaXMpO1xuXHR9XG5cdHByaXZhdGUgb25Ub3VjaFN0YXJ0KGV2dDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuXHRcdGxldCBsb2M6IGNjLlZlYzIgPSBldnQuZ2V0TG9jYXRpb24oKTtcblxuXHRcdGxldCBkcmF3TG9jOiBjYy5WZWMyID0gdGhpcy5fdHJhbnNpdGlvbihsb2MpO1xuXHRcdHRoaXMuX2RyYXdCb2FyZC5tb3ZlVG8oZHJhd0xvYy54LCBkcmF3TG9jLnkpO1xuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRwcml2YXRlIG9uVG91Y2hNb3ZlKGV2dDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuXHRcdGxldCB0b3VjaExvYzogY2MuVmVjMiA9IGV2dC5nZXRMb2NhdGlvbigpO1xuXG5cdFx0bGV0IGRyYXdMb2M6IGNjLlZlYzIgPSB0aGlzLl90cmFuc2l0aW9uKHRvdWNoTG9jKTtcblx0XHR0aGlzLl9kcmF3V2l0aExvY2F0aW9uKGRyYXdMb2MpO1xuXHR9XG5cblx0cHJpdmF0ZSBvblRvdWNoRW5kKGV2dDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuXHR9XG5cblx0cHJpdmF0ZSBvblRvdWNoQ2FuY2VsKGV2dDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuXHR9XG5cblx0cHJpdmF0ZSBfdHJhbnNpdGlvbihsb2M6IGNjLlZlYzIpOiBjYy5WZWMyIHtcblx0XHRsZXQgbm9kZTogY2MuTm9kZSA9IHRoaXMuX25vZGU7XG5cdFx0bGV0IHRvdWNoTG9jID0gbm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihsb2MpO1xuXHRcdHRvdWNoTG9jLnggKz0gdGhpcy5fd2lkdGggLyAyO1xuXHRcdHRvdWNoTG9jLnkgKz0gdGhpcy5faGVpZ2h0IC8gMjtcblxuXHRcdHJldHVybiB0b3VjaExvYztcblx0fVxuXHRwcml2YXRlIF9kcmF3V2l0aExvY2F0aW9uKGxvYzogY2MuVmVjMikge1xuXG5cdFx0dGhpcy5fZHJhd0JvYXJkLmxpbmVUbyhsb2MueCwgbG9jLnkpO1xuXG5cdFx0bGV0IGRhdGE6IFVpbnQ4QXJyYXkgPSB0aGlzLl9kcmF3Qm9hcmQuZ2V0RGF0YSgpO1xuXHRcdGxldCB0ZXh0dXJlOiBjYy5UZXh0dXJlMkQgPSB0aGlzLl9kcmF3U3ByaXRlLnNwcml0ZUZyYW1lLmdldFRleHR1cmUoKTtcblx0XHRsZXQgb3B0cyA9IHRleHR1cmVbXCJfZ2V0T3B0c1wiXSgpO1xuXHRcdG9wdHMuaW1hZ2UgPSBkYXRhO1xuXHRcdG9wdHMuaW1hZ2VzID0gW29wdHMuaW1hZ2VdO1xuXHRcdHRleHR1cmUudXBkYXRlKG9wdHMpO1xuXHR9XG59XG5cblxuXG5leHBvcnQgZW51bSBQZW5UeXBlIHtcbiAgICAvKiog6buY6K6k5Li655S7Ki9cbiAgICBERUZBVUxUID0gMCxcbiAgICAvKiog5qmh55qu5pOmKi9cbiAgICBFUkFTRVIgPSAxXG59XG4iXX0=
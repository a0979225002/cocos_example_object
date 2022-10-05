"use strict";
cc._RF.push(module, 'a51e4UlxktM1oQQBIVV4BlY', 'DrawBoardBuilder');
// Script/drawBoard/DrawBoardBuilder.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DrawBoard_1 = require("./DrawBoard");
var DrawBoardModel_1 = require("./DrawBoardModel");
/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2022-08-09 下午 03:45
 * @Version 1.0
 */
var DrawBoardBuilder = /** @class */ (function () {
    function DrawBoardBuilder() {
    }
    /**
     * 設置畫板大小
     * @param {number} width - 畫板寬度
     * @param {number} height - 畫板高度
     * @returns {this}
     */
    DrawBoardBuilder.prototype.setBoardSize = function (width, height) {
        this._width = width;
        this._height = height;
        return this;
    };
    /**
     * 設置畫板繪製時使用的顏色
     * @param {cc.Color} color
     */
    DrawBoardBuilder.prototype.setColor = function (color) {
        this._recentColor = color;
        return this;
    };
    /**
     * 設置線條寬度
     * @param {number} width
     * @returns {this}
     */
    DrawBoardBuilder.prototype.setLineWidth = function (width) {
        this._lineWidth = width;
        return this;
    };
    /**
     * 線段結尾是否為圓角
     * @param {boolean} canCircleEnd
     */
    DrawBoardBuilder.prototype.setLineCircleEnd = function (canCircleEnd) {
        this._previousLineCircleEnd = canCircleEnd;
        return this;
    };
    /**
     * 動態創建的圖片對象,繪製的圖案數據,將應用到這個貼圖中
     * @param {cc.Node} targetNode - 當作顯示圖案的容器
     * @private
     */
    DrawBoardBuilder.prototype.setDraw = function (targetNode) {
        this._drawNode = new cc.Node();
        this._drawNode.width = this._width;
        this._drawNode.height = this._height;
        this._drawSprite = this._drawNode.addComponent(cc.Sprite);
        this._drawSprite.spriteFrame = new cc.SpriteFrame();
        targetNode.addChild(this._drawNode);
    };
    /**
     * 初始化 Texture
     * @private
     */
    DrawBoardBuilder.prototype.initTexture = function (drawBoardModel) {
        // console.log(this._texture);
        var pixelColor = drawBoardModel.pixelColor;
        this._texture.initWithData(pixelColor, cc.Texture2D.PixelFormat.RGBA8888, this._width, this._height);
        this._texture.setFlipY(true);
        this._drawSprite.spriteFrame.setTexture(this.texture);
    };
    /**
     * 建構畫布
     * @param {cc.Node} targetNode
     * @returns {DrawBoard}
     */
    DrawBoardBuilder.prototype.build = function (targetNode) {
        this._board = targetNode;
        this._texture = new cc.Texture2D();
        this.setDraw(targetNode);
        var drawBoardModel = new DrawBoardModel_1.default(this);
        this.initTexture(drawBoardModel);
        return new DrawBoard_1.default(drawBoardModel);
    };
    Object.defineProperty(DrawBoardBuilder.prototype, "width", {
        /**
         * 繪圖板寬度
         * @returns {number}
         */
        get: function () {
            return this._width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardBuilder.prototype, "height", {
        /**
         * 繪圖板高度
         * @returns {number}
         */
        get: function () {
            return this._height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardBuilder.prototype, "texture", {
        /**
         * 動態創建的圖片對象,再會版中繪製的圖案數據,將應用到這個貼圖中
         * @returns {cc.RenderTexture}
         */
        get: function () {
            return this._texture;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardBuilder.prototype, "color", {
        /**
         * 紀錄最近一次的像素顏色(十六進制顏色值),繪製時未指定顏色時,將使用該值
         * @returns {cc.Color}
         */
        get: function () {
            return this._recentColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardBuilder.prototype, "previousLineWidth", {
        /**
         * 線條寬度
         * @returns {number}
         */
        get: function () {
            return this._lineWidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardBuilder.prototype, "previousLineCircleEnd", {
        /**
         * 線段結尾是否是圓角
         * @returns {boolean}
         */
        get: function () {
            return this._previousLineCircleEnd;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardBuilder.prototype, "drawNode", {
        /**
         * 當前繪圖板顯示物件
         * @returns {cc.Node}
         */
        get: function () {
            return this._drawNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardBuilder.prototype, "drawSprite", {
        /**
         * 當前繪圖的圖片
         * @returns {cc.Sprite}
         */
        get: function () {
            return this._drawSprite;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawBoardBuilder.prototype, "board", {
        /**
         * 當前綁定的畫板
         * @returns {cc.Node}
         */
        get: function () {
            return this._board;
        },
        enumerable: false,
        configurable: true
    });
    return DrawBoardBuilder;
}());
exports.default = DrawBoardBuilder;

cc._RF.pop();
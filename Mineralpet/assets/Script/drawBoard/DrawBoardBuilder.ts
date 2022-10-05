import DrawBoard from "./DrawBoard";
import IDrawBordInitializeData from "./IDrawBordInitializeData";
import DrawBoardModel from "./DrawBoardModel";

/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2022-08-09 下午 03:45
 * @Version 1.0
 */

export default class DrawBoardBuilder implements IDrawBordInitializeData {

    /**
     * 繪圖板寬度
     * @type {number}
     * @private
     */
    private _width: number;

    /**
     * 繪圖板高度
     * @type {number}
     * @private
     */
    private _height: number;

    /**
     * 動態創建的圖片對象,再會版中繪製的圖案數據,將應用到這個貼圖中
     * @type {cc.Texture2D}
     * @protected
     */
    private _texture: cc.Texture2D;

    /**
     * 紀錄最近一次的像素顏色(十六進制顏色值),繪製時未指定顏色時,將使用該值
     * @type {number}
     * @private
     */
    private _recentColor: cc.Color;

    /**
     * 線條寬度
     * @type {number}
     * @private
     */
    private _lineWidth: number;

    /**
     * 線段結尾是否是圓角
     * @type {boolean}
     * @private
     */
    private _previousLineCircleEnd: boolean;

    /**
     * 當前繪圖板顯示物件
     * @type {cc.Node}
     * @private
     */
    private _drawNode: cc.Node;

    /**
     * 當前繪圖的圖片
     * @type {cc.Sprite}
     */
    private _drawSprite: cc.Sprite;
    private _board: cc.Node;


    /**
     * 設置畫板大小
     * @param {number} width - 畫板寬度
     * @param {number} height - 畫板高度
     * @returns {this}
     */
    public setBoardSize(width: number, height: number): this {
        this._width = width;
        this._height = height;
        return this;
    }

    /**
     * 設置畫板繪製時使用的顏色
     * @param {cc.Color} color
     */
    public setColor(color: cc.Color): this {
        this._recentColor = color;
        return this;
    }

    /**
     * 設置線條寬度
     * @param {number} width
     * @returns {this}
     */
    public setLineWidth(width: number): this {
        this._lineWidth = width;
        return this
    }


    /**
     * 線段結尾是否為圓角
     * @param {boolean} canCircleEnd
     */
    public setLineCircleEnd(canCircleEnd: boolean): this {
        this._previousLineCircleEnd = canCircleEnd;
        return this;
    }

    /**
     * 動態創建的圖片對象,繪製的圖案數據,將應用到這個貼圖中
     * @param {cc.Node} targetNode - 當作顯示圖案的容器
     * @private
     */
    private setDraw(targetNode: cc.Node): void {
        this._drawNode = new cc.Node();
        this._drawNode.width = this._width;
        this._drawNode.height = this._height;
        this._drawSprite = this._drawNode.addComponent(cc.Sprite);
        this._drawSprite.spriteFrame = new cc.SpriteFrame();
        targetNode.addChild(this._drawNode);
    }

    /**
     * 初始化 Texture
     * @private
     */
    private initTexture(drawBoardModel: DrawBoardModel) {
        // console.log(this._texture);

        const pixelColor: Uint8Array = drawBoardModel.pixelColor
        this._texture.initWithData(
            pixelColor,
            cc.Texture2D.PixelFormat.RGBA8888,
            this._width,
            this._height
        );
        this._texture.setFlipY(true);
        this._drawSprite.spriteFrame.setTexture(this.texture);
    }

    /**
     * 建構畫布
     * @param {cc.Node} targetNode
     * @returns {DrawBoard}
     */
    public build(targetNode: cc.Node): DrawBoard {
        this._board = targetNode;
        this._texture = new cc.Texture2D();
        this.setDraw(targetNode);
        const drawBoardModel = new DrawBoardModel(this);
        this.initTexture(drawBoardModel);
        return new DrawBoard(drawBoardModel);
    }

    /**
     * 繪圖板寬度
     * @returns {number}
     */
    get width(): number {
        return this._width;
    }

    /**
     * 繪圖板高度
     * @returns {number}
     */
    get height(): number {
        return this._height;
    }

    /**
     * 動態創建的圖片對象,再會版中繪製的圖案數據,將應用到這個貼圖中
     * @returns {cc.RenderTexture}
     */
    get texture(): cc.Texture2D {
        return this._texture;
    }

    /**
     * 紀錄最近一次的像素顏色(十六進制顏色值),繪製時未指定顏色時,將使用該值
     * @returns {cc.Color}
     */
    get color(): cc.Color {
        return this._recentColor;
    }

    /**
     * 線條寬度
     * @returns {number}
     */
    get previousLineWidth(): number {
        return this._lineWidth;
    }

    /**
     * 線段結尾是否是圓角
     * @returns {boolean}
     */
    get previousLineCircleEnd(): boolean {
        return this._previousLineCircleEnd;
    }

    /**
     * 當前繪圖板顯示物件
     * @returns {cc.Node}
     */
    get drawNode(): cc.Node {
        return this._drawNode;
    }

    /**
     * 當前繪圖的圖片
     * @returns {cc.Sprite}
     */
    get drawSprite(): cc.Sprite {
        return this._drawSprite;
    }

    /**
     * 當前綁定的畫板
     * @returns {cc.Node}
     */
    get board(): cc.Node {
        return this._board;
    }
}

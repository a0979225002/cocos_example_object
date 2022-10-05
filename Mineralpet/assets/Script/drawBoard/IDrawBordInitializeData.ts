/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2022-08-10 下午 05:34
 * @Version 1.0
 */
export default interface IDrawBordInitializeData {

    /**
     * 當前綁定的畫板
     * @type {cc.Node}
     * @private
     */
    board: cc.Node;

    /**
     * 繪圖板寬度
     * @type {number}
     * @private
     */
    width: number;

    /**
     * 繪圖板高度
     * @type {number}
     * @private
     */
    height: number;

    /**
     * 動態創建的圖片對象,再會版中繪製的圖案數據,將應用到這個貼圖中
     * @type {cc.Texture2D}
     * @protected
     */
    texture: cc.Texture2D;

    /**
     * 初始畫筆顏色
     * @type {number}
     * @private
     */
    color: cc.Color;

    /**
     * 線條寬度
     * @type {number}
     * @private
     */
    previousLineWidth: number;

    /**
     * 線段結尾是否事圓角
     * @type {boolean}
     * @private
     */
    previousLineCircleEnd: boolean;

    /**
     * 當前繪圖板顯示物件
     */
    drawNode: cc.Node;

    /**
     * 當前繪圖的圖片
     */
    drawSprite: cc.Sprite;
}

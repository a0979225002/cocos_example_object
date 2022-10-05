/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2022-09-15 下午 04:45
 * @Version 1.0
 */
export interface IVec2 {
    /**
     * X軸位置
     */
    x: number;

    /**
     * Y軸位置
     */
    y: number;

    /**
     * 添加當前位置
     * @param {number | IVec2} p
     * @param {number} y
     */
    set(p: number | IVec2, y?: number)
}

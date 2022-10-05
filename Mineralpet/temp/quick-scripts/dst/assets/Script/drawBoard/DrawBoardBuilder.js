
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/drawBoard/DrawBoardBuilder.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxkcmF3Qm9hcmRcXERyYXdCb2FyZEJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFFcEMsbURBQThDO0FBRTlDOzs7OztHQUtHO0FBRUg7SUFBQTtJQXlOQSxDQUFDO0lBOUpHOzs7OztPQUtHO0lBQ0ksdUNBQVksR0FBbkIsVUFBb0IsS0FBYSxFQUFFLE1BQWM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLG1DQUFRLEdBQWYsVUFBZ0IsS0FBZTtRQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHVDQUFZLEdBQW5CLFVBQW9CLEtBQWE7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBR0Q7OztPQUdHO0lBQ0ksMkNBQWdCLEdBQXZCLFVBQXdCLFlBQXFCO1FBQ3pDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxZQUFZLENBQUM7UUFDM0MsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxrQ0FBTyxHQUFmLFVBQWdCLFVBQW1CO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7O09BR0c7SUFDSyxzQ0FBVyxHQUFuQixVQUFvQixjQUE4QjtRQUM5Qyw4QkFBOEI7UUFFOUIsSUFBTSxVQUFVLEdBQWUsY0FBYyxDQUFDLFVBQVUsQ0FBQTtRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FDdEIsVUFBVSxFQUNWLEVBQUUsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFDakMsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsT0FBTyxDQUNmLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksZ0NBQUssR0FBWixVQUFhLFVBQW1CO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6QixJQUFNLGNBQWMsR0FBRyxJQUFJLHdCQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNqQyxPQUFPLElBQUksbUJBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBTUQsc0JBQUksbUNBQUs7UUFKVDs7O1dBR0c7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLG9DQUFNO1FBSlY7OztXQUdHO2FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSxxQ0FBTztRQUpYOzs7V0FHRzthQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBTUQsc0JBQUksbUNBQUs7UUFKVDs7O1dBR0c7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLCtDQUFpQjtRQUpyQjs7O1dBR0c7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLG1EQUFxQjtRQUp6Qjs7O1dBR0c7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBTUQsc0JBQUksc0NBQVE7UUFKWjs7O1dBR0c7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLHdDQUFVO1FBSmQ7OztXQUdHO2FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSxtQ0FBSztRQUpUOzs7V0FHRzthQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBQ0wsdUJBQUM7QUFBRCxDQXpOQSxBQXlOQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERyYXdCb2FyZCBmcm9tIFwiLi9EcmF3Qm9hcmRcIjtcclxuaW1wb3J0IElEcmF3Qm9yZEluaXRpYWxpemVEYXRhIGZyb20gXCIuL0lEcmF3Qm9yZEluaXRpYWxpemVEYXRhXCI7XHJcbmltcG9ydCBEcmF3Qm9hcmRNb2RlbCBmcm9tIFwiLi9EcmF3Qm9hcmRNb2RlbFwiO1xyXG5cclxuLyoqXHJcbiAqIEBBdXRob3Ig6JWt56uL5ZOBXHJcbiAqIEBEZXNjcmlwdGlvbiBUT0RPXHJcbiAqIEBEYXRlIDIwMjItMDgtMDkg5LiL5Y2IIDAzOjQ1XHJcbiAqIEBWZXJzaW9uIDEuMFxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdCb2FyZEJ1aWxkZXIgaW1wbGVtZW50cyBJRHJhd0JvcmRJbml0aWFsaXplRGF0YSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnuarlnJbmnb/lr6zluqZcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog57mq5ZyW5p2/6auY5bqmXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDli5XmhYvlibXlu7rnmoTlnJbniYflsI3osaEs5YaN5pyD54mI5Lit57mq6KO955qE5ZyW5qGI5pW45pOaLOWwh+aHieeUqOWIsOmAmeWAi+iyvOWcluS4rVxyXG4gICAgICogQHR5cGUge2NjLlRleHR1cmUyRH1cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfdGV4dHVyZTogY2MuVGV4dHVyZTJEO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog57SA6YyE5pyA6L+R5LiA5qyh55qE5YOP57Sg6aGP6ImyKOWNgeWFremAsuWItumhj+iJsuWAvCks57mq6KO95pmC5pyq5oyH5a6a6aGP6Imy5pmCLOWwh+S9v+eUqOipsuWAvFxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3JlY2VudENvbG9yOiBjYy5Db2xvcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe3muaineWvrOW6plxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2xpbmVXaWR0aDogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog57ea5q6157WQ5bC+5piv5ZCm5piv5ZyT6KeSXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3ByZXZpb3VzTGluZUNpcmNsZUVuZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeVtuWJjee5quWcluadv+mhr+ekuueJqeS7tlxyXG4gICAgICogQHR5cGUge2NjLk5vZGV9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9kcmF3Tm9kZTogY2MuTm9kZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeVtuWJjee5quWclueahOWclueJh1xyXG4gICAgICogQHR5cGUge2NjLlNwcml0ZX1cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZHJhd1Nwcml0ZTogY2MuU3ByaXRlO1xyXG4gICAgcHJpdmF0ZSBfYm9hcmQ6IGNjLk5vZGU7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Kit572u55Wr5p2/5aSn5bCPXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggLSDnlavmnb/lr6zluqZcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgLSDnlavmnb/pq5jluqZcclxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0Qm9hcmRTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoqK3nva7nlavmnb/nuaroo73mmYLkvb/nlKjnmoTpoY/oibJcclxuICAgICAqIEBwYXJhbSB7Y2MuQ29sb3J9IGNvbG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRDb2xvcihjb2xvcjogY2MuQ29sb3IpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9yZWNlbnRDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Kit572u57ea5qKd5a+s5bqmXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcclxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0TGluZVdpZHRoKHdpZHRoOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9saW5lV2lkdGggPSB3aWR0aDtcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOe3muautee1kOWwvuaYr+WQpueCuuWck+inklxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBjYW5DaXJjbGVFbmRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldExpbmVDaXJjbGVFbmQoY2FuQ2lyY2xlRW5kOiBib29sZWFuKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fcHJldmlvdXNMaW5lQ2lyY2xlRW5kID0gY2FuQ2lyY2xlRW5kO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YuV5oWL5Ym15bu655qE5ZyW54mH5bCN6LGhLOe5quijveeahOWcluahiOaVuOaTmizlsIfmh4nnlKjliLDpgJnlgIvosrzlnJbkuK1cclxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gdGFyZ2V0Tm9kZSAtIOeVtuS9nOmhr+ekuuWcluahiOeahOWuueWZqFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzZXREcmF3KHRhcmdldE5vZGU6IGNjLk5vZGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9kcmF3Tm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgdGhpcy5fZHJhd05vZGUud2lkdGggPSB0aGlzLl93aWR0aDtcclxuICAgICAgICB0aGlzLl9kcmF3Tm9kZS5oZWlnaHQgPSB0aGlzLl9oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5fZHJhd1Nwcml0ZSA9IHRoaXMuX2RyYXdOb2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHRoaXMuX2RyYXdTcHJpdGUuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUoKTtcclxuICAgICAgICB0YXJnZXROb2RlLmFkZENoaWxkKHRoaXMuX2RyYXdOb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMliBUZXh0dXJlXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGluaXRUZXh0dXJlKGRyYXdCb2FyZE1vZGVsOiBEcmF3Qm9hcmRNb2RlbCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX3RleHR1cmUpO1xyXG5cclxuICAgICAgICBjb25zdCBwaXhlbENvbG9yOiBVaW50OEFycmF5ID0gZHJhd0JvYXJkTW9kZWwucGl4ZWxDb2xvclxyXG4gICAgICAgIHRoaXMuX3RleHR1cmUuaW5pdFdpdGhEYXRhKFxyXG4gICAgICAgICAgICBwaXhlbENvbG9yLFxyXG4gICAgICAgICAgICBjYy5UZXh0dXJlMkQuUGl4ZWxGb3JtYXQuUkdCQTg4ODgsXHJcbiAgICAgICAgICAgIHRoaXMuX3dpZHRoLFxyXG4gICAgICAgICAgICB0aGlzLl9oZWlnaHRcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuX3RleHR1cmUuc2V0RmxpcFkodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5fZHJhd1Nwcml0ZS5zcHJpdGVGcmFtZS5zZXRUZXh0dXJlKHRoaXMudGV4dHVyZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlu7rmp4vnlavluINcclxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gdGFyZ2V0Tm9kZVxyXG4gICAgICogQHJldHVybnMge0RyYXdCb2FyZH1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGJ1aWxkKHRhcmdldE5vZGU6IGNjLk5vZGUpOiBEcmF3Qm9hcmQge1xyXG4gICAgICAgIHRoaXMuX2JvYXJkID0gdGFyZ2V0Tm9kZTtcclxuICAgICAgICB0aGlzLl90ZXh0dXJlID0gbmV3IGNjLlRleHR1cmUyRCgpO1xyXG4gICAgICAgIHRoaXMuc2V0RHJhdyh0YXJnZXROb2RlKTtcclxuICAgICAgICBjb25zdCBkcmF3Qm9hcmRNb2RlbCA9IG5ldyBEcmF3Qm9hcmRNb2RlbCh0aGlzKTtcclxuICAgICAgICB0aGlzLmluaXRUZXh0dXJlKGRyYXdCb2FyZE1vZGVsKTtcclxuICAgICAgICByZXR1cm4gbmV3IERyYXdCb2FyZChkcmF3Qm9hcmRNb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnuarlnJbmnb/lr6zluqZcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOe5quWcluadv+mrmOW6plxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDli5XmhYvlibXlu7rnmoTlnJbniYflsI3osaEs5YaN5pyD54mI5Lit57mq6KO955qE5ZyW5qGI5pW45pOaLOWwh+aHieeUqOWIsOmAmeWAi+iyvOWcluS4rVxyXG4gICAgICogQHJldHVybnMge2NjLlJlbmRlclRleHR1cmV9XHJcbiAgICAgKi9cclxuICAgIGdldCB0ZXh0dXJlKCk6IGNjLlRleHR1cmUyRCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHR1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDntIDpjITmnIDov5HkuIDmrKHnmoTlg4/ntKDpoY/oibIo5Y2B5YWt6YCy5Yi26aGP6Imy5YC8KSznuaroo73mmYLmnKrmjIflrprpoY/oibLmmYIs5bCH5L2/55So6Kmy5YC8XHJcbiAgICAgKiBAcmV0dXJucyB7Y2MuQ29sb3J9XHJcbiAgICAgKi9cclxuICAgIGdldCBjb2xvcigpOiBjYy5Db2xvciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlY2VudENvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57ea5qKd5a+s5bqmXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBnZXQgcHJldmlvdXNMaW5lV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGluZVdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57ea5q6157WQ5bC+5piv5ZCm5piv5ZyT6KeSXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgZ2V0IHByZXZpb3VzTGluZUNpcmNsZUVuZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJldmlvdXNMaW5lQ2lyY2xlRW5kO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55W25YmN57mq5ZyW5p2/6aGv56S654mp5Lu2XHJcbiAgICAgKiBAcmV0dXJucyB7Y2MuTm9kZX1cclxuICAgICAqL1xyXG4gICAgZ2V0IGRyYXdOb2RlKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kcmF3Tm9kZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOeVtuWJjee5quWclueahOWclueJh1xyXG4gICAgICogQHJldHVybnMge2NjLlNwcml0ZX1cclxuICAgICAqL1xyXG4gICAgZ2V0IGRyYXdTcHJpdGUoKTogY2MuU3ByaXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZHJhd1Nwcml0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOeVtuWJjee2geWumueahOeVq+adv1xyXG4gICAgICogQHJldHVybnMge2NjLk5vZGV9XHJcbiAgICAgKi9cclxuICAgIGdldCBib2FyZCgpOiBjYy5Ob2RlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYm9hcmQ7XHJcbiAgICB9XHJcbn1cclxuIl19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/drawBoard/DrawBoard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '068dbrO1ORCbbFCAfDtZ4uX', 'DrawBoard');
// Script/drawBoard/DrawBoard.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author 蕭立品
 * @Description 畫板
 * @Date 2022-08-09 上午 11:44
 * @Version 1.0
 */
var DrawBoard = /** @class */ (function () {
    /**
     * 創建畫板
     * @param {drawBordData} drawBordData - 初始化資料
     */
    function DrawBoard(drawBordData) {
        this.model = drawBordData;
    }
    /**
     * 移動畫筆到指定的位置,使用 lineTo() 可以將該點與中點連成一條線
     * @param {cc.Vec2} position
     */
    DrawBoard.prototype.moveTo = function (position) {
        var loc = this.model.transitionPosition(position);
        var x = Math.round(loc.x);
        var y = Math.round(loc.y);
        this.model.previousLineEndPos.set(x, y);
        this.model.previousLineEndPosT.set(x, y);
        this.model.previousLineEndPosB.set(x, y);
    };
    /**
     * 繪製到指定坐標的直線，起點為上一次繪製的直線的終點，使用默認的顏色、寬度和線段端點樣式
     * @param {cc.Vec2} position
     */
    DrawBoard.prototype.lineTo = function (position) {
        var loc = this.model.transitionPosition(position);
        var x = Math.round(loc.x);
        var y = Math.round(loc.y);
        if (this.model.previousLineEndPos.x == x && this.model.previousLineEndPos.y == y)
            return;
        var width = this.model.previousLineWidth;
        var circleEnd = this.model.previousLineCircleEnd;
        var beforeX = this.model.previousLineEndPos.x;
        var beforeY = this.model.previousLineEndPos.y;
        var afterX = x;
        var afterY = y;
        if (beforeX > afterX) {
            //強制轉換,讓after 永遠大於 before
            beforeX = afterX;
            beforeY = afterY;
            afterX = this.model.previousLineEndPos.x;
            afterY = this.model.previousLineEndPos.y;
        }
        var offsetX = 0;
        var offsetY = 0;
        var rateK = 1;
        if (beforeX == afterX) {
            offsetX = Math.round(width * 0.5);
        }
        else if (beforeY == afterY) {
            offsetY = Math.round(width * 0.5);
        }
        else {
            var k = (afterY - beforeY) / (afterX - beforeX);
            rateK = Math.sqrt(k * k + 1);
            offsetY = width * 0.5 / rateK;
            offsetX = Math.round(offsetY * k);
            offsetY = Math.round(offsetY);
        }
        if (!circleEnd) {
            //如果當前繪製頂點無須圓角
            if (this.model.previousLineEndPos.x != this.model.previousLineEndPosT.x
                || this.model.previousLineEndPos.y != this.model.previousLineEndPosT.y) {
                var p1_1 = this.model.buildMyVec2(this.model.previousLineEndPos.x - offsetX, this.model.previousLineEndPos.y + offsetY);
                var p2_1 = this.model.buildMyVec2(this.model.previousLineEndPos.x + offsetX, this.model.previousLineEndPos.y - offsetY);
                this.model.drawTriangle([p1_1, p2_1, this.model.previousLineEndPosT]);
                this.model.drawTriangle([p1_1, p2_1, this.model.previousLineEndPosB]);
            }
        }
        else {
            this.model.drawCircle(beforeX, beforeY, width * 0.5);
            this.model.drawCircle(afterX, afterY, width * 0.5);
        }
        var p1 = this.model.buildMyVec2(beforeX, beforeY);
        var p2 = this.model.buildMyVec2(afterX, afterY);
        this.model.drawLine(p1, p2, width, offsetX, offsetY, rateK);
        this.model.previousLineEndPos.set(x, y);
        this.model.previousLineEndPosT.set(x - offsetX, y + offsetY);
        this.model.previousLineEndPosB.set(x + offsetX, y - offsetY);
    };
    /**
     * 獲取當前畫板中紀錄的每個像素位置顏色的數據
     * @returns {Uint8Array}
     */
    DrawBoard.prototype.getPixelColorData = function () {
        return this.model.pixelColor;
    };
    /**
     * 將畫布上玩家繪製的筆跡響應到圖片中
     */
    DrawBoard.prototype.updateTexture = function () {
        var pixelColor = this.getPixelColorData();
        var texture = this.model.texture;
        console.log(this.model.texture);
        var opts = texture["_getOpts"]();
        opts.image = pixelColor;
        opts.images = [opts.image];
        texture.update(opts);
    };
    /**
     * 清空畫布
     */
    DrawBoard.prototype.empitDrawBord = function () {
        this.model.reset();
    };
    return DrawBoard;
}());
exports.default = DrawBoard;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxkcmF3Qm9hcmRcXERyYXdCb2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7OztHQUtHO0FBQ0g7SUFJSTs7O09BR0c7SUFDSCxtQkFBWSxZQUE0QjtRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztJQUM5QixDQUFDO0lBR0Q7OztPQUdHO0lBQ0ksMEJBQU0sR0FBYixVQUFjLFFBQWlCO1FBQzNCLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUdEOzs7T0FHRztJQUNJLDBCQUFNLEdBQWIsVUFBYyxRQUFpQjtRQUMzQixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMs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Ozs7T0FHRztJQUNJLHFDQUFpQixHQUF4QjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7SUFDakMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksaUNBQWEsR0FBcEI7UUFDSSxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM1QyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFaEMsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7T0FFRztJQUNJLGlDQUFhLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQWpIQSxBQWlIQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERyYXdCb2FyZE1vZGVsIGZyb20gXCIuL0RyYXdCb2FyZE1vZGVsXCI7XHJcblxyXG4vKipcclxuICogQEF1dGhvciDola3nq4vlk4FcclxuICogQERlc2NyaXB0aW9uIOeVq+adv1xyXG4gKiBARGF0ZSAyMDIyLTA4LTA5IOS4iuWNiCAxMTo0NFxyXG4gKiBAVmVyc2lvbiAxLjBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdCb2FyZCB7XHJcblxyXG4gICAgcHJpdmF0ZSBtb2RlbDogRHJhd0JvYXJkTW9kZWw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlibXlu7rnlavmnb9cclxuICAgICAqIEBwYXJhbSB7ZHJhd0JvcmREYXRhfSBkcmF3Qm9yZERhdGEgLSDliJ3lp4vljJbos4fmlplcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoZHJhd0JvcmREYXRhOiBEcmF3Qm9hcmRNb2RlbCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBkcmF3Qm9yZERhdGE7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog56e75YuV55Wr562G5Yiw5oyH5a6a55qE5L2N572uLOS9v+eUqCBsaW5lVG8oKSDlj6/ku6XlsIfoqbLpu57oiIfkuK3pu57pgKPmiJDkuIDmop3nt5pcclxuICAgICAqIEBwYXJhbSB7Y2MuVmVjMn0gcG9zaXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIG1vdmVUbyhwb3NpdGlvbjogY2MuVmVjMikge1xyXG4gICAgICAgIGNvbnN0IGxvYyA9IHRoaXMubW9kZWwudHJhbnNpdGlvblBvc2l0aW9uKHBvc2l0aW9uKTtcclxuICAgICAgICBjb25zdCB4ID0gTWF0aC5yb3VuZChsb2MueCk7XHJcbiAgICAgICAgY29uc3QgeSA9IE1hdGgucm91bmQobG9jLnkpO1xyXG4gICAgICAgIHRoaXMubW9kZWwucHJldmlvdXNMaW5lRW5kUG9zLnNldCh4LCB5KTtcclxuICAgICAgICB0aGlzLm1vZGVsLnByZXZpb3VzTGluZUVuZFBvc1Quc2V0KHgsIHkpO1xyXG4gICAgICAgIHRoaXMubW9kZWwucHJldmlvdXNMaW5lRW5kUG9zQi5zZXQoeCwgeSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57mq6KO95Yiw5oyH5a6a5Z2Q5qiZ55qE55u057ea77yM6LW36bue54K65LiK5LiA5qyh57mq6KO955qE55u057ea55qE57WC6bue77yM5L2/55So6buY6KqN55qE6aGP6Imy44CB5a+s5bqm5ZKM57ea5q6156uv6bue5qij5byPXHJcbiAgICAgKiBAcGFyYW0ge2NjLlZlYzJ9IHBvc2l0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsaW5lVG8ocG9zaXRpb246IGNjLlZlYzIpIHtcclxuICAgICAgICBjb25zdCBsb2MgPSB0aGlzLm1vZGVsLnRyYW5zaXRpb25Qb3NpdGlvbihwb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3QgeCA9IE1hdGgucm91bmQobG9jLngpO1xyXG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLnJvdW5kKGxvYy55KTtcclxuICAgICAgICBpZiAodGhpcy5tb2RlbC5wcmV2aW91c0xpbmVFbmRQb3MueCA9PSB4ICYmIHRoaXMubW9kZWwucHJldmlvdXNMaW5lRW5kUG9zLnkgPT0geSkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5tb2RlbC5wcmV2aW91c0xpbmVXaWR0aDtcclxuICAgICAgICBjb25zdCBjaXJjbGVFbmQgPSB0aGlzLm1vZGVsLnByZXZpb3VzTGluZUNpcmNsZUVuZDtcclxuICAgICAgICBsZXQgYmVmb3JlWCA9IHRoaXMubW9kZWwucHJldmlvdXNMaW5lRW5kUG9zLng7XHJcbiAgICAgICAgbGV0IGJlZm9yZVkgPSB0aGlzLm1vZGVsLnByZXZpb3VzTGluZUVuZFBvcy55O1xyXG4gICAgICAgIGxldCBhZnRlclggPSB4O1xyXG4gICAgICAgIGxldCBhZnRlclkgPSB5O1xyXG4gICAgICAgIGlmIChiZWZvcmVYID4gYWZ0ZXJYKSB7XHJcbiAgICAgICAgICAgIC8v5by35Yi26L2J5o+bLOiuk2FmdGVyIOawuOmBoOWkp+aWvCBiZWZvcmVcclxuICAgICAgICAgICAgYmVmb3JlWCA9IGFmdGVyWDtcclxuICAgICAgICAgICAgYmVmb3JlWSA9IGFmdGVyWTtcclxuICAgICAgICAgICAgYWZ0ZXJYID0gdGhpcy5tb2RlbC5wcmV2aW91c0xpbmVFbmRQb3MueDtcclxuICAgICAgICAgICAgYWZ0ZXJZID0gdGhpcy5tb2RlbC5wcmV2aW91c0xpbmVFbmRQb3MueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG9mZnNldFggPSAwO1xyXG4gICAgICAgIGxldCBvZmZzZXRZID0gMDtcclxuICAgICAgICBsZXQgcmF0ZUsgPSAxO1xyXG4gICAgICAgIGlmIChiZWZvcmVYID09IGFmdGVyWCkge1xyXG4gICAgICAgICAgICBvZmZzZXRYID0gTWF0aC5yb3VuZCh3aWR0aCAqIDAuNSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChiZWZvcmVZID09IGFmdGVyWSkge1xyXG4gICAgICAgICAgICBvZmZzZXRZID0gTWF0aC5yb3VuZCh3aWR0aCAqIDAuNSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGsgPSAoYWZ0ZXJZIC0gYmVmb3JlWSkgLyAoYWZ0ZXJYIC0gYmVmb3JlWCk7XHJcbiAgICAgICAgICAgIHJhdGVLID0gTWF0aC5zcXJ0KGsgKiBrICsgMSk7XHJcbiAgICAgICAgICAgIG9mZnNldFkgPSB3aWR0aCAqIDAuNSAvIHJhdGVLO1xyXG4gICAgICAgICAgICBvZmZzZXRYID0gTWF0aC5yb3VuZChvZmZzZXRZICogayk7XHJcbiAgICAgICAgICAgIG9mZnNldFkgPSBNYXRoLnJvdW5kKG9mZnNldFkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNpcmNsZUVuZCkge1xyXG4gICAgICAgICAgICAvL+WmguaenOeVtuWJjee5quijvemggum7nueEoemgiOWck+inklxyXG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlbC5wcmV2aW91c0xpbmVFbmRQb3MueCAhPSB0aGlzLm1vZGVsLnByZXZpb3VzTGluZUVuZFBvc1QueFxyXG4gICAgICAgICAgICAgICAgfHwgdGhpcy5tb2RlbC5wcmV2aW91c0xpbmVFbmRQb3MueSAhPSB0aGlzLm1vZGVsLnByZXZpb3VzTGluZUVuZFBvc1QueSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHAxID0gdGhpcy5tb2RlbC5idWlsZE15VmVjMih0aGlzLm1vZGVsLnByZXZpb3VzTGluZUVuZFBvcy54IC0gb2Zmc2V0WCwgdGhpcy5tb2RlbC5wcmV2aW91c0xpbmVFbmRQb3MueSArIG9mZnNldFkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHAyID0gdGhpcy5tb2RlbC5idWlsZE15VmVjMih0aGlzLm1vZGVsLnByZXZpb3VzTGluZUVuZFBvcy54ICsgb2Zmc2V0WCwgdGhpcy5tb2RlbC5wcmV2aW91c0xpbmVFbmRQb3MueSAtIG9mZnNldFkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5kcmF3VHJpYW5nbGUoW3AxLCBwMiwgdGhpcy5tb2RlbC5wcmV2aW91c0xpbmVFbmRQb3NUXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLmRyYXdUcmlhbmdsZShbcDEsIHAyLCB0aGlzLm1vZGVsLnByZXZpb3VzTGluZUVuZFBvc0JdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZHJhd0NpcmNsZShiZWZvcmVYLCBiZWZvcmVZLCB3aWR0aCAqIDAuNSk7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZHJhd0NpcmNsZShhZnRlclgsIGFmdGVyWSwgd2lkdGggKiAwLjUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwMSA9IHRoaXMubW9kZWwuYnVpbGRNeVZlYzIoYmVmb3JlWCwgYmVmb3JlWSk7XHJcbiAgICAgICAgY29uc3QgcDIgPSB0aGlzLm1vZGVsLmJ1aWxkTXlWZWMyKGFmdGVyWCwgYWZ0ZXJZKTtcclxuICAgICAgICB0aGlzLm1vZGVsLmRyYXdMaW5lKHAxLCBwMiwgd2lkdGgsIG9mZnNldFgsIG9mZnNldFksIHJhdGVLKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RlbC5wcmV2aW91c0xpbmVFbmRQb3Muc2V0KHgsIHkpO1xyXG4gICAgICAgIHRoaXMubW9kZWwucHJldmlvdXNMaW5lRW5kUG9zVC5zZXQoeCAtIG9mZnNldFgsIHkgKyBvZmZzZXRZKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnByZXZpb3VzTGluZUVuZFBvc0Iuc2V0KHggKyBvZmZzZXRYLCB5IC0gb2Zmc2V0WSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnjbLlj5bnlbbliY3nlavmnb/kuK3ntIDpjITnmoTmr4/lgIvlg4/ntKDkvY3nva7poY/oibLnmoTmlbjmk5pcclxuICAgICAqIEByZXR1cm5zIHtVaW50OEFycmF5fVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0UGl4ZWxDb2xvckRhdGEoKTogVWludDhBcnJheSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwucGl4ZWxDb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWwh+eVq+W4g+S4iueOqeWutue5quijveeahOethui3oemfv+aHieWIsOWclueJh+S4rVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlVGV4dHVyZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBwaXhlbENvbG9yID0gdGhpcy5nZXRQaXhlbENvbG9yRGF0YSgpO1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSB0aGlzLm1vZGVsLnRleHR1cmU7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tb2RlbC50ZXh0dXJlKTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0cyA9IHRleHR1cmVbXCJfZ2V0T3B0c1wiXSgpO1xyXG4gICAgICAgIG9wdHMuaW1hZ2UgPSBwaXhlbENvbG9yO1xyXG4gICAgICAgIG9wdHMuaW1hZ2VzID0gW29wdHMuaW1hZ2VdO1xyXG4gICAgICAgIHRleHR1cmUudXBkYXRlKG9wdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5riF56m655Wr5biDXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbXBpdERyYXdCb3JkKCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwucmVzZXQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
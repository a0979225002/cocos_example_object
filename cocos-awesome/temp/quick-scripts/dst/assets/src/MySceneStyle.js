
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/MySceneStyle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e22d2mwyNxFi7eAIHuJFVvs', 'MySceneStyle');
// src/MySceneStyle.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2021-09-13 下午 12:58
 * @Version 1.0
 */
/**
 * @Author XIAO-LI-PIN
 * @Description 橫式樣式更新
 * @Date 2021-04-14 下午 20:24
 * @Version 1.1
 */
var MySceneStyle = /** @class */ (function () {
    function MySceneStyle() {
    }
    MySceneStyle.prototype.executionStyle = function (width, height) {
        var cvs = cc.find('Canvas').getComponent(cc.Canvas);
        //保存原始設計分辨率，供屏幕大小變化時使用
        if (!this.curDR) {
            this.curDR = cc.size(width, height);
        }
        var dr = this.curDR;
        var s = cc.view.getFrameSize();
        var rw = s.width;
        var rh = s.height;
        var finalW = rw;
        var finalH = rh;
        if ((rw / rh) > (dr.width / dr.height)) {
            //橫向
            //!#zh: 是否優先將設計分辨率高度撐滿視圖高度 。 */
            //如果更長，則用定高
            finalH = dr.height;
            finalW = finalH * rw / rh;
        }
        else {
            //直向
            /*!#zh: 是否優先將設計分辨率寬度撐滿視圖寬度 。 */
            //如果更短，則用定寬
            finalW = dr.width;
            finalH = rh / rw * finalW;
        }
        cvs.designResolution = cc.size(finalW, finalH);
        cvs.node.width = finalW;
        cvs.node.height = finalH;
    };
    return MySceneStyle;
}());
exports.default = MySceneStyle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxNeVNjZW5lU3R5bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7R0FLRztBQUNIOzs7OztHQUtHO0FBQ0g7SUFBQTtJQXFDQSxDQUFDO0lBaENVLHFDQUFjLEdBQXJCLFVBQXNCLEtBQWEsRUFBRSxNQUFjO1FBRS9DLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwRCxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQy9CLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDakIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNsQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRWhCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNwQyxJQUFJO1lBQ0osK0JBQStCO1lBQy9CLFdBQVc7WUFDWCxNQUFNLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNuQixNQUFNLEdBQUcsTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7U0FDN0I7YUFBTTtZQUNILElBQUk7WUFDSiwrQkFBK0I7WUFDL0IsV0FBVztZQUNYLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2xCLE1BQU0sR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQztTQUM3QjtRQUNELEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDeEIsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQzdCLENBQUM7SUFDTCxtQkFBQztBQUFELENBckNBLEFBcUNDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBBdXRob3Ig6JWt56uL5ZOBXG4gKiBARGVzY3JpcHRpb24gVE9ET1xuICogQERhdGUgMjAyMS0wOS0xMyDkuIvljYggMTI6NThcbiAqIEBWZXJzaW9uIDEuMFxuICovXG4vKipcbiAqIEBBdXRob3IgWElBTy1MSS1QSU5cbiAqIEBEZXNjcmlwdGlvbiDmqavlvI/mqKPlvI/mm7TmlrBcbiAqIEBEYXRlIDIwMjEtMDQtMTQg5LiL5Y2IIDIwOjI0XG4gKiBAVmVyc2lvbiAxLjFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlTY2VuZVN0eWxlIGltcGxlbWVudHMgZmNjLklGLklTY2VuZVN0eWxlIHtcblxuICAgIC8v55W25YmNY2F2ZXJz5a+s6auYXG4gICAgcHJpdmF0ZSBjdXJEUjogYW55O1xuXG4gICAgcHVibGljIGV4ZWN1dGlvblN0eWxlKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG5cbiAgICAgICAgbGV0IGN2cyA9IGNjLmZpbmQoJ0NhbnZhcycpLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xuXG4gICAgICAgIC8v5L+d5a2Y5Y6f5aeL6Kit6KiI5YiG6L6o546H77yM5L6b5bGP5bmV5aSn5bCP6K6K5YyW5pmC5L2/55SoXG4gICAgICAgIGlmICghdGhpcy5jdXJEUikge1xuICAgICAgICAgICAgdGhpcy5jdXJEUiA9IGNjLnNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRyID0gdGhpcy5jdXJEUjtcbiAgICAgICAgbGV0IHMgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xuICAgICAgICBsZXQgcncgPSBzLndpZHRoO1xuICAgICAgICBsZXQgcmggPSBzLmhlaWdodDtcbiAgICAgICAgbGV0IGZpbmFsVyA9IHJ3O1xuICAgICAgICBsZXQgZmluYWxIID0gcmg7XG5cbiAgICAgICAgaWYgKChydyAvIHJoKSA+IChkci53aWR0aCAvIGRyLmhlaWdodCkpIHtcbiAgICAgICAgICAgIC8v5qmr5ZCRXG4gICAgICAgICAgICAvLyEjemg6IOaYr+WQpuWEquWFiOWwh+ioreioiOWIhui+qOeOh+mrmOW6puaSkOa7v+imluWclumrmOW6piDjgIIgKi9cbiAgICAgICAgICAgIC8v5aaC5p6c5pu06ZW377yM5YmH55So5a6a6auYXG4gICAgICAgICAgICBmaW5hbEggPSBkci5oZWlnaHQ7XG4gICAgICAgICAgICBmaW5hbFcgPSBmaW5hbEggKiBydyAvIHJoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy/nm7TlkJFcbiAgICAgICAgICAgIC8qISN6aDog5piv5ZCm5YSq5YWI5bCH6Kit6KiI5YiG6L6o546H5a+s5bqm5pKQ5ru/6KaW5ZyW5a+s5bqmIOOAgiAqL1xuICAgICAgICAgICAgLy/lpoLmnpzmm7Tnn63vvIzliYfnlKjlrprlr6xcbiAgICAgICAgICAgIGZpbmFsVyA9IGRyLndpZHRoO1xuICAgICAgICAgICAgZmluYWxIID0gcmggLyBydyAqIGZpbmFsVztcbiAgICAgICAgfVxuICAgICAgICBjdnMuZGVzaWduUmVzb2x1dGlvbiA9IGNjLnNpemUoZmluYWxXLCBmaW5hbEgpO1xuICAgICAgICBjdnMubm9kZS53aWR0aCA9IGZpbmFsVztcbiAgICAgICAgY3ZzLm5vZGUuaGVpZ2h0ID0gZmluYWxIO1xuICAgIH1cbn1cbiJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/test.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '731b8JZZKlEp51f3tTu1+Fi', 'test');
// test.ts

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
var DrawingBoard_1 = require("./DrawingBoard");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var test = /** @class */ (function (_super) {
    __extends(test, _super);
    function test() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**画板对象 */
        _this.db = null;
        /**动态创建的贴图对象，在画板中绘制的图案数据，将应用到这个贴图中 */
        _this.texture = null;
        return _this;
    }
    test.prototype.onLoad = function () {
        fcc.configMgr.build();
        fcc.sceneMgr
            .setDesignWidth(1280)
            .setDesignHeight(720)
            .updateSize(fcc.type.SceneStyleType.HORIZONTAL)
            .startListener(500);
    };
    test.prototype.start = function () {
        this.initDb();
        this.initTexture();
        this.node.on("touchstart", this.onTouchStart, this);
        this.node.on("touchmove", this.onTouchMove, this);
    };
    test.prototype.initDb = function () {
        //创建一个画板(需传入画板尺寸，将自动初始化)
        this.db = new DrawingBoard_1.default(1280, 720);
        //设置画板的绘图颜色（每次绘制前都可以重新设置）
        this.db.setColor(255, 0, 0, 255);
        //设置画板绘制的线条的宽度
        this.db.setLineWidth(0.3);
        //线条端点以圆角结尾
        this.db.setLineCircleEnd(true);
    };
    test.prototype.initTexture = function () {
        this.texture = new cc.RenderTexture();
        this.texture.initWithSize(1280, 720);
        //将动态创建的贴图应用到精灵节点上，以显示在屏幕上
        var sf = new cc.SpriteFrame(this.texture);
        var node = new cc.Node();
        node.width = this.node.width;
        node.height = this.node.height;
        this.node.addChild(node);
        node.setPosition(0, 0);
        node.addComponent(cc.Sprite).spriteFrame = sf;
    };
    test.prototype.onTouchStart = function (e) {
        this.prePos = e.getLocation();
        //将触摸位置作为线条的起点
        //画板中使用的坐标系，与图片坐标系一样，原点在左上角，X轴向右为正，Y轴向下为正
        //所以Y轴坐标应反过来
        this.db.moveTo(this.prePos.x, this.node.height - this.prePos.y);
    };
    test.prototype.onTouchMove = function (e) {
        this.prePos = e.getLocation();
        //从上一次绘制线条后的终点开始向鼠标当前位置绘制线条
        this.db.lineTo(this.prePos.x, this.node.height - this.prePos.y);
        //每次画板中的数据有变化后，及时将数据应用到贴图上，在屏幕上显示出来
        this.drawToImg();
    };
    /**将画板中绘制的数据应用到贴图中 */
    test.prototype.drawToImg = function () {
        //获取画板中绘制的图案数据
        var data = this.db.getData();
        //将数据传递给贴图对象
        this.texture.initWithData(data, cc.Texture2D.PixelFormat.RGBA8888, this.db.width, this.db.height);
    };
    test = __decorate([
        ccclass
    ], test);
    return test;
}(cc.Component));
exports.default = test;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBQ1MsMEJBQVcsR0FBckIsVUFBc0IsQ0FBc0I7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUIsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQscUJBQXFCO0lBQ1gsd0JBQVMsR0FBbkI7UUFDSSxjQUFjO1FBQ2QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3QixZQUFZO1FBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFwRWdCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FxRXhCO0lBQUQsV0FBQztDQXJFRCxBQXFFQyxDQXJFaUMsRUFBRSxDQUFDLFNBQVMsR0FxRTdDO2tCQXJFb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEcmF3aW5nQm9hcmQgZnJvbSBcIi4vRHJhd2luZ0JvYXJkXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGVzdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcclxuICAgICAgICBmY2MuY29uZmlnTWdyLmJ1aWxkKCk7XHJcbiAgICAgICAgZmNjLnNjZW5lTWdyXHJcbiAgICAgICAgICAgIC5zZXREZXNpZ25XaWR0aCgxMjgwKVxyXG4gICAgICAgICAgICAuc2V0RGVzaWduSGVpZ2h0KDcyMClcclxuICAgICAgICAgICAgLnVwZGF0ZVNpemUoZmNjLnR5cGUuU2NlbmVTdHlsZVR5cGUuSE9SSVpPTlRBTClcclxuICAgICAgICAgICAgLnN0YXJ0TGlzdGVuZXIoNTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmluaXREYigpO1xyXG4gICAgICAgIHRoaXMuaW5pdFRleHR1cmUoKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJ0b3VjaHN0YXJ0XCIsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJ0b3VjaG1vdmVcIiwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq55S75p2/5a+56LGhICovXHJcbiAgICBwcm90ZWN0ZWQgZGI6IERyYXdpbmdCb2FyZCA9IG51bGw7XHJcbiAgICBwcm90ZWN0ZWQgaW5pdERiKCkge1xyXG4gICAgICAgIC8v5Yib5bu65LiA5Liq55S75p2/KOmcgOS8oOWFpeeUu+adv+WwuuWvuO+8jOWwhuiHquWKqOWIneWni+WMlilcclxuICAgICAgICB0aGlzLmRiID0gbmV3IERyYXdpbmdCb2FyZCgxMjgwLCA3MjApO1xyXG4gICAgICAgIC8v6K6+572u55S75p2/55qE57uY5Zu+6aKc6Imy77yI5q+P5qyh57uY5Yi25YmN6YO95Y+v5Lul6YeN5paw6K6+572u77yJXHJcbiAgICAgICAgdGhpcy5kYi5zZXRDb2xvcigyNTUsIDAsIDAsIDI1NSk7XHJcbiAgICAgICAgLy/orr7nva7nlLvmnb/nu5jliLbnmoTnur/mnaHnmoTlrr3luqZcclxuICAgICAgICB0aGlzLmRiLnNldExpbmVXaWR0aCgwLjMpO1xyXG4gICAgICAgIC8v57q/5p2h56uv54K55Lul5ZyG6KeS57uT5bC+XHJcbiAgICAgICAgdGhpcy5kYi5zZXRMaW5lQ2lyY2xlRW5kKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWKqOaAgeWIm+W7uueahOi0tOWbvuWvueixoe+8jOWcqOeUu+adv+S4ree7mOWItueahOWbvuahiOaVsOaNru+8jOWwhuW6lOeUqOWIsOi/meS4qui0tOWbvuS4rSAqL1xyXG4gICAgcHJvdGVjdGVkIHRleHR1cmU6IGNjLlJlbmRlclRleHR1cmUgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIGluaXRUZXh0dXJlKCkge1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IG5ldyBjYy5SZW5kZXJUZXh0dXJlKCk7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlLmluaXRXaXRoU2l6ZSgxMjgwLCA3MjApO1xyXG4gICAgICAgIC8v5bCG5Yqo5oCB5Yib5bu655qE6LS05Zu+5bqU55So5Yiw57K+54G16IqC54K55LiK77yM5Lul5pi+56S65Zyo5bGP5bmV5LiKXHJcbiAgICAgICAgbGV0IHNmID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRoaXMudGV4dHVyZSk7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIG5vZGUud2lkdGggPSB0aGlzLm5vZGUud2lkdGg7XHJcbiAgICAgICAgbm9kZS5oZWlnaHQgPSB0aGlzLm5vZGUuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgIG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzZjtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcHJlUG9zOiBjYy5WZWMyO1xyXG4gICAgcHJvdGVjdGVkIG9uVG91Y2hTdGFydChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgdGhpcy5wcmVQb3MgPSBlLmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgLy/lsIbop6bmkbjkvY3nva7kvZzkuLrnur/mnaHnmoTotbfngrlcclxuICAgICAgICAvL+eUu+adv+S4reS9v+eUqOeahOWdkOagh+ezu++8jOS4juWbvueJh+WdkOagh+ezu+S4gOagt++8jOWOn+eCueWcqOW3puS4iuinku+8jFjovbTlkJHlj7PkuLrmraPvvIxZ6L205ZCR5LiL5Li65q2jXHJcbiAgICAgICAgLy/miYDku6VZ6L205Z2Q5qCH5bqU5Y+N6L+H5p2lXHJcbiAgICAgICAgdGhpcy5kYi5tb3ZlVG8odGhpcy5wcmVQb3MueCwgdGhpcy5ub2RlLmhlaWdodCAtIHRoaXMucHJlUG9zLnkpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uVG91Y2hNb3ZlKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICB0aGlzLnByZVBvcyA9IGUuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAvL+S7juS4iuS4gOasoee7mOWItue6v+adoeWQjueahOe7iOeCueW8gOWni+WQkem8oOagh+W9k+WJjeS9jee9rue7mOWItue6v+adoVxyXG4gICAgICAgIHRoaXMuZGIubGluZVRvKHRoaXMucHJlUG9zLngsIHRoaXMubm9kZS5oZWlnaHQgLSB0aGlzLnByZVBvcy55KTtcclxuICAgICAgICAvL+avj+asoeeUu+adv+S4reeahOaVsOaNruacieWPmOWMluWQju+8jOWPiuaXtuWwhuaVsOaNruW6lOeUqOWIsOi0tOWbvuS4iu+8jOWcqOWxj+W5leS4iuaYvuekuuWHuuadpVxyXG4gICAgICAgIHRoaXMuZHJhd1RvSW1nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5bCG55S75p2/5Lit57uY5Yi255qE5pWw5o2u5bqU55So5Yiw6LS05Zu+5LitICovXHJcbiAgICBwcm90ZWN0ZWQgZHJhd1RvSW1nKCkge1xyXG4gICAgICAgIC8v6I635Y+W55S75p2/5Lit57uY5Yi255qE5Zu+5qGI5pWw5o2uXHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmRiLmdldERhdGEoKTtcclxuICAgICAgICAvL+WwhuaVsOaNruS8oOmAkue7mei0tOWbvuWvueixoVxyXG4gICAgICAgIHRoaXMudGV4dHVyZS5pbml0V2l0aERhdGEoZGF0YSwgY2MuVGV4dHVyZTJELlBpeGVsRm9ybWF0LlJHQkE4ODg4LCB0aGlzLmRiLndpZHRoLCB0aGlzLmRiLmhlaWdodCk7XHJcbiAgICB9XHJcbn1cclxuIl19
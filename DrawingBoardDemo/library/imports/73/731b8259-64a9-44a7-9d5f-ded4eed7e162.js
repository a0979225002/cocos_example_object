"use strict";
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
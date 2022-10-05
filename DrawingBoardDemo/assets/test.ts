import DrawingBoard from "./DrawingBoard";

const { ccclass, property } = cc._decorator;

@ccclass
export default class test extends cc.Component {

    protected onLoad() {
        fcc.configMgr.build();
        fcc.sceneMgr
            .setDesignWidth(1280)
            .setDesignHeight(720)
            .updateSize(fcc.type.SceneStyleType.HORIZONTAL)
            .startListener(500);
    }

    start() {
        this.initDb();
        this.initTexture();
        this.node.on("touchstart", this.onTouchStart, this);
        this.node.on("touchmove", this.onTouchMove, this);
    }

    /**画板对象 */
    protected db: DrawingBoard = null;
    protected initDb() {
        //创建一个画板(需传入画板尺寸，将自动初始化)
        this.db = new DrawingBoard(1280, 720);
        //设置画板的绘图颜色（每次绘制前都可以重新设置）
        this.db.setColor(255, 0, 0, 255);
        //设置画板绘制的线条的宽度
        this.db.setLineWidth(0.3);
        //线条端点以圆角结尾
        this.db.setLineCircleEnd(true);
    }

    /**动态创建的贴图对象，在画板中绘制的图案数据，将应用到这个贴图中 */
    protected texture: cc.RenderTexture = null;
    protected initTexture() {
        this.texture = new cc.RenderTexture();
        this.texture.initWithSize(1280, 720);
        //将动态创建的贴图应用到精灵节点上，以显示在屏幕上
        let sf = new cc.SpriteFrame(this.texture);
        let node = new cc.Node();
        node.width = this.node.width;
        node.height = this.node.height;
        this.node.addChild(node);
        node.setPosition(0, 0);
        node.addComponent(cc.Sprite).spriteFrame = sf;
    }

    protected prePos: cc.Vec2;
    protected onTouchStart(e: cc.Event.EventTouch) {
        this.prePos = e.getLocation();
        //将触摸位置作为线条的起点
        //画板中使用的坐标系，与图片坐标系一样，原点在左上角，X轴向右为正，Y轴向下为正
        //所以Y轴坐标应反过来
        this.db.moveTo(this.prePos.x, this.node.height - this.prePos.y);
    }
    protected onTouchMove(e: cc.Event.EventTouch) {
        this.prePos = e.getLocation();
        //从上一次绘制线条后的终点开始向鼠标当前位置绘制线条
        this.db.lineTo(this.prePos.x, this.node.height - this.prePos.y);
        //每次画板中的数据有变化后，及时将数据应用到贴图上，在屏幕上显示出来
        this.drawToImg();
    }

    /**将画板中绘制的数据应用到贴图中 */
    protected drawToImg() {
        //获取画板中绘制的图案数据
        let data = this.db.getData();
        //将数据传递给贴图对象
        this.texture.initWithData(data, cc.Texture2D.PixelFormat.RGBA8888, this.db.width, this.db.height);
    }
}

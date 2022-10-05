import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import ChequeModel from "./Modle";


/**
 * @Author 蕭立品
 * @Description 支票物件控制器
 * @Date 2022-08-08 下午 02:46
 * @Version 1.0
 */
@ccclass
export default class ChequeController extends cc.Component {

    @property(cc.Prefab)
    private chequePrefab: cc.Prefab = null;

    @property(cc.Node)
    private drawBoardNode: cc.Node = null;

    private chequeModel: ChequeModel;


    protected onLoad(): void {
        fcc.configMgr.build()
        fcc.sceneMgr
            .setDesignHeight(720)
            .setDesignWidth(1280)
            .updateSize(fcc.type.SceneStyleType.HORIZONTAL)
            .startListener(500);

        this.chequeModel = new ChequeModel();
        this.chequeModel.initDrawBoardData(
            this.drawBoardNode, cc.color().fromHEX("#ff8600"), 5);
        this.initialTouchEvent();
    }

    initialTouchEvent() {
        this.drawBoardNode.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
        this.drawBoardNode.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
        this.drawBoardNode.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
    }

    protected start() {

    }
    test(e) {
        console.log(e);
    }

    touchStartEvent(eventTouch: cc.Event.EventTouch) {
        const position: cc.Vec2 = eventTouch.getLocation();
        // const nowPosition: cc.Vec2 = cc.v2(position.x, this.drawBoardNode.height - position.y);
        this.chequeModel.touchStartAction(position);
    }

    touchMoveEvent(eventTouch: cc.Event.EventTouch) {
        const position: cc.Vec2 = eventTouch.getLocation();
        // const nowPosition: cc.Vec2 = cc.v2(position.x, this.drawBoardNode.height - position.y);
        this.chequeModel.touchMoveToAction(position);
    }

    touchEndEvent(eventTouch: cc.Event.EventTouch) {
        const nowPosition: cc.Vec2 = eventTouch.getLocation();
    }
    buttonInit(componentTrget: cc.Node, component: string, callBack: string, buttonTarget: cc.Button, callbackValue?: string) {
        let event = new cc.Component.EventHandler();
        event.target = componentTrget;
        event.component = component;
        event.handler = callBack;
        if (callbackValue)
            event.customEventData = callbackValue

        console.log(buttonTarget);

        buttonTarget.clickEvents.push(event)
    }
}

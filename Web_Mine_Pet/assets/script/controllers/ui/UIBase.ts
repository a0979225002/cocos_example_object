import EventMng from "../../manager/EventMng";

export interface UIClass<T extends UIBase> {
    new(): T;
    getUrl(): string;
    getName(): string;
}

interface RegisterEvent {
    callback: Function,
    target?: any,
}

const PREFAB_UI_DIR = 'prefab/';
const { ccclass } = cc._decorator;

@ccclass
export default class UIBase extends cc.Component {

    protected static prefabUrl;
    protected static className;

    protected mTag: any;
    public get tag(): any {
        return this.mTag;
    }
    public set tag(value: any) {
        this.mTag = value;
    }

    private _notifyEventList: Map<string, Function>;
    private _registerEventList: Map<string, RegisterEvent>;

    public static getUrl(): string {
        return PREFAB_UI_DIR + this.prefabUrl;
    }

    public static getName(): string {
        return this.className;
    }

    init(params) {
        this.onInit(params);
    }

    onLoad() {
        this._notifyEventList = new Map<string, Function>();
        this._registerEventList = new Map<string, RegisterEvent>();
        this.onUILoad();
    }

    start() {
        this.onStart();
    }

    onDestroy() {
        this.onUIDestroy();
    }

    onEnable() {
        this.onRegisterEvent(this.node, this.touchEvent, this);
        this.onShow();
    }

    onDisable() {

        this.unRegisterEvent(this.node, this.touchEvent, this);

        this.onHide();

        let self = this;

        this._notifyEventList.forEach((f, key) => {
            EventMng.off(key, f, self);
        }, this);

        this._notifyEventList.clear();

    }

    initEvent(eventName: string, callback: Function) {
        EventMng.on(eventName, callback, this);
        this._notifyEventList.set(eventName, callback);
    }

    touchEvent(event) {
        event.stopPropagation();
    }

    onRegisterEvent(node: cc.Node, callback, target = null) {
        if (!node) {
            return;
        }
        node.on(cc.Node.EventType.TOUCH_END, callback, target);
        this._registerEventList.set(node.name, {callback: callback, target: target});
    }

    unRegisterEvent(node: cc.Node, callback, target = null) {
        node.off(cc.Node.EventType.TOUCH_END, callback, target);
    }

    getCanvas() {
        const node = cc.find("Canvas");
        return cc.v2(node.x, node.y);
    }

    onInit(params) { }
    onUILoad() { }
    onUIDestroy() { }
    onStart() { }
    onShow() { }
    onHide() { }

}
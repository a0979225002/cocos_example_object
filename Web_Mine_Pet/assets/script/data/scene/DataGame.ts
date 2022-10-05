const { ccclass } = cc._decorator;

@ccclass
export default class DataGame extends cc.Component {

    Canvas: cc.Node;
    mine_mng_holder: cc.Node;
    mine_holder: cc.Node;
    info_pop_holder: cc.Node;
    skin_pop_holder: cc.Node;
    upgrade_holder: cc.Node;
    load_tip: cc.Node;
    btn_close: cc.Node;
    btn_info: cc.Node;

    ver_str: cc.Label;

    onLoad(): void {
        let parent = this.node.getParent();
        this.Canvas = parent.getChildByName("Canvas");
        this.mine_mng_holder = this.Canvas.getChildByName("mine_mng_holder");
        this.mine_holder = this.Canvas.getChildByName("mine_holder");
        this.info_pop_holder = this.Canvas.getChildByName("info_pop_holder");
        this.skin_pop_holder = this.Canvas.getChildByName("skin_pop_holder");
        this.upgrade_holder = this.Canvas.getChildByName("upgrade_holder");
        this.load_tip = this.Canvas.getChildByName("load_tip");
        this.btn_close = this.Canvas.getChildByName("btn_close");
        this.btn_info = this.Canvas.getChildByName("btn_info");
        this.ver_str = this.Canvas.getChildByName("ver_str").getComponent(cc.Label);
    }

}
const { ccclass } = cc._decorator;

@ccclass
export default class DataUIMessage extends cc.Component {

    node_main: cc.Node;
    node_backBg: cc.Node;

    label_msg_txt: cc.Label;
    btn_main: cc.Node;
    btn_confirm: cc.Node;
    label_confirm: cc.Label;
    btn_cancel: cc.Node;
    label_cancel: cc.Label;

    onLoad() {
        this.node_main = this.node.getChildByName("main");
        this.node_backBg = this.node.getChildByName("bg");
        this.label_msg_txt = this.node_main.getChildByName("txt").getComponent(cc.Label);
        this.btn_main = this.node_main.getChildByName("btn_main");
        this.btn_cancel = this.btn_main.getChildByName("btn_cancel");
        this.btn_confirm = this.btn_main.getChildByName("btn_confirm");
        this.label_cancel = this.btn_cancel.getChildByName("txt").getComponent(cc.Label);
        this.label_confirm = this.btn_confirm.getChildByName("txt").getComponent(cc.Label);
    }

}
const {ccclass} = cc._decorator;

@ccclass
export default class DataMineCollect extends cc.Component {

    node_con_holder: cc.Node;
    node_view_holder: cc.Node;
    node_con_1: cc.Node;

    btn_home: cc.Node;
    btn_vip: cc.Node;

    onLoad(): void {

        this.node_con_holder = this.node.getChildByName("con_holder");
        this.node_view_holder = this.node_con_holder.getChildByName("view_holder");
        this.node_con_1 = this.node_view_holder.getChildByName("con_1");
        this.btn_home = this.node.getChildByName("btn_home");
        this.btn_vip = this.node.getChildByName("btn_vip");

    }

}
const { ccclass } = cc._decorator;

@ccclass
export default class DataMineMngCon extends cc.Component {

    node_view_holder: cc.Node;
    node_page_1: cc.Node;
    node_page_2: cc.Node;
    node_page_3: cc.Node;

    onLoad(): void {
        this.node_view_holder = this.node.getChildByName("view_holder");
        this.node_page_1 = this.node_view_holder.getChildByName("con_1");
        this.node_page_2 = this.node_view_holder.getChildByName("con_2");
        this.node_page_3 = this.node_view_holder.getChildByName("con_3");
    }

}
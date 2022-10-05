const {ccclass} = cc._decorator;

@ccclass
export default class DataMineMng extends cc.Component {

    tab_nav_holder:　cc.Node;
    con_holder:　cc.Node;

    onLoad(): void {
        this.tab_nav_holder = this.node.getChildByName("tab_holder");
        this.con_holder = this.node.getChildByName("con_holder");
    }

}
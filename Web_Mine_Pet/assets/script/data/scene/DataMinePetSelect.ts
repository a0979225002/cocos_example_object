const { ccclass } = cc._decorator;

@ccclass
export default class DataMinePetSelect extends cc.Component {

    node_choose_tip_main:  cc.Node;
    node_choose_tip_bg: cc.Node;
    node_choose_img_mask: cc.Node;
    node_choose_tip_img: cc.Node;
    sprite_choose_tip_img: cc.Sprite;
    node_choose_state: cc.Node;
    label_choose_tip_title: cc.Label;

    node_item_slider_holder: cc.Node;
    node_item_main: cc.Node;
    node_arrow_holder: cc.Node;
    node_intro_holder: cc.Node;
    node_intro_txt_group: cc.Node;

    label_intro_title: cc.Label;
    label_intro_con: cc.Label;

    btn_slider_arrow_left: cc.Node;
    btn_slider_arrow_right: cc.Node;
    btn_go: cc.Node;

    node_btn_go_normal: cc.Node;
    node_btn_go_active: cc.Node;

    page_view: cc.PageView;
    layout: cc.Layout;


    onLoad(): void {

        this.node_item_slider_holder = this.node.getChildByName("item_slider_holder");
        this.node_item_main = this.node_item_slider_holder.getChildByName("item_main");
        this.node_arrow_holder = this.node.getChildByName("arrow_holder");

        this.node_intro_holder = this.node.getChildByName("intro_holder");
        this.node_intro_txt_group = this.node_intro_holder.getChildByName("txt_group");
        this.label_intro_title = this.node_intro_txt_group.getChildByName("title").getComponent(cc.Label);
        this.label_intro_con = this.node_intro_txt_group.getChildByName("con").getComponent(cc.Label);

        this.btn_slider_arrow_left = this.node_arrow_holder.getChildByName("arrow_left");
        this.btn_slider_arrow_right = this.node_arrow_holder.getChildByName("arrow_right");
        this.btn_go = this.node.getChildByName("btn_go");

        this.node_btn_go_normal = this.btn_go.getChildByName("normal");
        this.node_btn_go_active = this.btn_go.getChildByName("active");

        this.page_view = this.node_item_slider_holder.getComponent(cc.PageView);
        this.layout = this.node_item_main.getComponent(cc.Layout);

        this.node_choose_tip_main = this.node.getChildByName("choose_tip_main");
        this.node_choose_tip_bg = this.node_choose_tip_main.getChildByName("bg");
        this.node_choose_img_mask = this.node_choose_tip_main.getChildByName("mask");
        this.node_choose_tip_img = this.node_choose_img_mask.getChildByName("img");
        this.sprite_choose_tip_img = this.node_choose_tip_img.getComponent(cc.Sprite);
        this.node_choose_state = this.node_choose_tip_main.getChildByName("btn_state");
        this.label_choose_tip_title = this.node_choose_tip_main.getChildByName("title").getComponent(cc.Label);

    }

}
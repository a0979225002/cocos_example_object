const { ccclass } = cc._decorator;

@ccclass
export default class DataMineToolBox extends cc.Component {

    node_choose_tip_main:  cc.Node;
    node_choose_tip_bg: cc.Node;
    node_choose_img_mask: cc.Node;
    node_choose_tip_img: cc.Node;
    sprite_choose_tip_img: cc.Sprite;
    node_choose_state: cc.Node;

    label_choose_tip_title: cc.Label;
    label_item_name: cc.Label;

    node_pet_dialog_holder: cc.Node;
    label_pet_dialog_txt: cc.Label;

    node_item_slider_holder: cc.Node;
    node_item_main: cc.Node;
    node_arrow_holder: cc.Node;

    node_props_holder: cc.Node;

    node_level_holder: cc.Node;
    node_level_bar: cc.Node;
    ani_level_bar: cc.Animation;
    label_level_num: cc.Label;

    node_intro_holder: cc.Node;
    node_intro_con_1: cc.Node;
    node_intro_con_2: cc.Node;
    node_intro_con_3: cc.Node;
    label_msg_tip: cc.Label;

    btn_slider_arrow_left: cc.Node;
    btn_slider_arrow_right: cc.Node;

    btn_confirm: cc.Node;
    node_confirm_active: cc.Node;

    node_state_tip: cc.Node;

    page_view: cc.PageView;
    layout: cc.Layout;

    onLoad(): void {

        this.node_item_slider_holder = this.node.getChildByName("item_slider_holder");
        this.node_item_main = this.node_item_slider_holder.getChildByName("item_main");
        this.node_arrow_holder = this.node.getChildByName("arrow_holder");

        this.node_props_holder = this.node.getChildByName("props_holder");

        this.node_pet_dialog_holder = this.node.getChildByName("pet_dialog_holder");
        this.label_pet_dialog_txt = this.node_pet_dialog_holder.getChildByName("txt").getComponent(cc.Label);

        this.node_level_holder = this.node.getChildByName("level_holder");
        this.node_level_bar = this.node_level_holder.getChildByName("level_bar");
        this.ani_level_bar = this.node_level_bar.getChildByName("mask").getComponent(cc.Animation);

        this.label_level_num = this.node_level_holder.getChildByName("level_num").getComponent(cc.Label);

        this.node_intro_holder = this.node.getChildByName("intro_holder");
        this.label_msg_tip = this.node_intro_holder.getChildByName("msg_tip").getComponent(cc.Label);

        this.label_item_name = this.node.getChildByName("item_name").getComponent(cc.Label);

        this.node_intro_con_1 = this.node_intro_holder.getChildByName("con_1");
        this.node_intro_con_2 = this.node_intro_holder.getChildByName("con_2");
        this.node_intro_con_3 = this.node_intro_holder.getChildByName("con_3");

        this.btn_confirm = this.node.getChildByName("btn_confirm");
        this.node_confirm_active = this.btn_confirm.getChildByName("active");

        this.node_state_tip = this.node.getChildByName("state_tip");

        this.btn_slider_arrow_left = this.node_arrow_holder.getChildByName("arrow_left");
        this.btn_slider_arrow_right = this.node_arrow_holder.getChildByName("arrow_right");

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
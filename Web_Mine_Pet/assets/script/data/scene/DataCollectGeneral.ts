const {ccclass} = cc._decorator;

@ccclass
export default class DataCollectGeneral extends cc.Component {

    node_coin_particle_holder: cc.Node;
    node_mine_tip_holder: cc.Node;

    node_gold_coin_holder: cc.Node;
    node_sliver_coin_holder: cc.Node;

    node_coin_level_holder: cc.Node;

    node_icon_mine_box: cc.Node;
    sprite_icon_mine: cc.Sprite;

    node_icon_partner_box: cc.Node;
    sprite_icon_partner: cc.Sprite;

    label_time: cc.Label;
    label_gold: cc.Label;
    label_sliver: cc.Label;
    label_coin_txt: cc.Label;

    btn_get: cc.Node;
    node_get_normal: cc.Node;
    node_get_active: cc.Node;

    spine_road: sp.Skeleton;
    spine_pet: sp.Skeleton;
    spine_partner: sp.Skeleton;
    spine_coin: sp.Skeleton;

    onLoad(): void {

        this.node_mine_tip_holder = this.node.getChildByName("mine_tip_holder");
        this.label_time = this.node_mine_tip_holder.getChildByName("remain_time").getComponent(cc.Label);
        this.label_coin_txt = this.node_mine_tip_holder.getChildByName("coin_txt").getComponent(cc.Label);

        this.node_icon_mine_box = this.node.getChildByName("icon_mine_box");
        this.sprite_icon_mine = this.node_icon_mine_box.getChildByName("icon").getComponent(cc.Sprite);

        this.node_icon_partner_box = this.node.getChildByName("icon_partner_box");
        this.sprite_icon_partner =  this.node_icon_partner_box.getChildByName("icon").getComponent(cc.Sprite);

        this.node_coin_particle_holder = this.node.getChildByName("coin_particle_holder");

        this.node_gold_coin_holder = this.node.getChildByName("gold_coin_holder");
        this.node_sliver_coin_holder = this.node.getChildByName("sliver_coin_holder");

        this.node_coin_level_holder = this.node.getChildByName("coin_level_holder");

        this.label_gold = this.node_gold_coin_holder.getChildByName("txt").getComponent(cc.Label);
        this.label_sliver = this.node_sliver_coin_holder.getChildByName("txt").getComponent(cc.Label);

        this.btn_get = this.node.getChildByName("btn_get");
        this.node_get_normal = this.btn_get.getChildByName("normal");
        this.node_get_active = this.btn_get.getChildByName("active");

        this.spine_road = this.node.getChildByName("road").getComponent(sp.Skeleton);
        this.spine_pet = this.node.getChildByName("pet").getComponent(sp.Skeleton);
        this.spine_partner = this.node.getChildByName("partner").getComponent(sp.Skeleton);
        this.spine_coin = this.node.getChildByName("coin").getComponent(sp.Skeleton);

    }

}
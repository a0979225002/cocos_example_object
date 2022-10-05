const { ccclass } = cc._decorator;

@ccclass
export default class DataUIMusic extends cc.Component {

    node_main: cc.Node;
    node_music: cc.Node;
    node_effect: cc.Node;
    label_music: cc.Label;
    label_effect: cc.Label;
    btn_music: cc.Node;
    btn_effect: cc.Node;
    btn_close: cc.Node;
    label_close: cc.Label;

    node_musicBg: cc.Node;
    node_effectBg: cc.Node;
    node_musicCircle: cc.Node;
    node_effectCircle: cc.Node;

    onLoad() {

        this.node_main =  this.node.getChildByName("main");

        this.node_music = this.node_main.getChildByName("btn_music");
        this.node_effect = this.node_main.getChildByName("btn_effect");

        this.label_music = this.node_music.getChildByName("title").getComponent(cc.Label);
        this.label_effect = this.node_effect.getChildByName("title").getComponent(cc.Label);

        this.btn_music = this.node_music.getChildByName("switch_main");
        this.btn_effect = this.node_effect.getChildByName("switch_main");
        this.btn_close = this.node_main.getChildByName("btn_close");

        this.label_close = this.btn_close.getChildByName("txt").getComponent(cc.Label);

        this.node_musicBg = this.btn_music.getChildByName("bg");
        this.node_musicCircle = this.btn_music.getChildByName("circle");

        this.node_effectBg = this.btn_effect.getChildByName("bg");
        this.node_effectCircle = this.btn_effect.getChildByName("circle");

    }

}
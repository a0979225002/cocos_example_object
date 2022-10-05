const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {


    @property(cc.Node)
    waveLight1: cc.Node = null;



    t1 = 0;
    update() {
        this.t1 += 0.01;
        let _materi1 = this.waveLight1.getComponent(cc.Sprite).getMaterial(0);
        _materi1.effect.setProperty("u_time", this.t1);
    }
}

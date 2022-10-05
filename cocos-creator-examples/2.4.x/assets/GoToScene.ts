
const { ccclass, property } = cc._decorator;

@ccclass
export default class GoToScene extends cc.Component {

    @property
    sceneName: string = 'home';

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.gotoScene, this);
    }

    gotoScene() {
        cc.director.loadScene(this.sceneName);
    }

}

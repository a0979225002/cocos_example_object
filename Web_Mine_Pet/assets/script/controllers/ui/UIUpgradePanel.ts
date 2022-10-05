import GameCenter from "../../data/GameCenter";
import AssetsMng from "../../manager/AssetsMng";
import { ViewZorder } from "../../data/const/ViewZorder";
import UIBase from "./UIBase";

export default class UIUpgradePanel extends UIBase {

    black_bg: cc.Node;
    spine: sp.Skeleton;
    light: cc.Node;

    onUILoad() {
        this.black_bg = this.node.getChildByName("bg");
        this.spine = this.node.getChildByName("spine").getComponent(sp.Skeleton);
        this.light = this.node.getChildByName("light");
        this.node.active = false;
        this.init();
    }

    init(): void {
        this.node.zIndex = ViewZorder.UI;
    }

    show(upgradeID): void {

        this.setSpineData(upgradeID);

        this.node.active = true;
        this.light.active = false;
        this.black_bg.active = true;
        this.black_bg.opacity = 0;
        this.black_bg.stopAllActions();
        this.black_bg.runAction(cc.fadeTo(.15, 180));

        this.spine.node.active = true;
        this.spine.setAnimation(0, `lv_start`, true);

    }

    hide(callback?): void {

        this.light.active = true;
        this.light.opacity = 0;
        this.light.stopAllActions();
        this.light.runAction(cc.sequence(
            cc.fadeIn(.15).easing(cc.easeSineIn()),
            cc.callFunc(() => {
                this.spine.node.active = false;
                this.black_bg.active = false;
                if (callback) {
                    callback();
                }
            }),
            cc.delayTime(.1),
            cc.fadeOut(.2).easing(cc.easeSineOut()),
            cc.callFunc(() => {
                this.node.active = false;
            })
        ));

    }

    setSpineData(upgradeID): void {
        let spineName = GameCenter.game.getPetBodyThemeName(upgradeID);
        this.spine.skeletonData = AssetsMng.getAssets(`${ spineName }.spine`);
        this.setSkin(upgradeID);
    }


    setSkin(upgradeID): void {
        this.spine.setSkin(GameCenter.game.getPetBodySkinName(upgradeID));
    }

}
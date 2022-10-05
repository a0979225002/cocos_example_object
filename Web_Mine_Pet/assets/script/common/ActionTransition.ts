export class ActionTransition {

    public static pageFadeIn(node: cc.Node, aniState: boolean = true, callBack?: Function): void {

        node.zIndex = 9;
        node.active = true;

        if (!aniState) { return; }

        node.opacity = 0;
        node.setScale(1.2);
        node.active = true;
        node.stopAllActions();
        node.runAction(cc.sequence(
            cc.delayTime(.16),
            cc.spawn(
                cc.scaleTo(.3, 1).easing(cc.easeBackInOut()),
                cc.fadeIn(.1)
            ),
            cc.callFunc(() => {
                if (callBack) callBack();
            })
        ));

    }

    public static pageFadeOut(node: cc.Node, aniState: boolean = true, callBack?: Function): void {

        if (aniState) {

            node.zIndex = 1;

            node.stopAllActions();
            node.runAction(cc.sequence(
                cc.scaleTo(.3, 0).easing(cc.easeBackIn()),
                cc.callFunc(() => {
                    node.active = false;
                    if (callBack) callBack();
                })
            ));

            return;

        }

        node.active = false;

    }

    public static btnBounce(node: cc.Node, callBack?: Function): void {
        node.runAction(cc.sequence(
            cc.scaleTo(.13, 1.1),
            cc.scaleTo(.1, 1),
            cc.callFunc(() => {
                if (callBack) callBack();
            })
        ));
    }

}
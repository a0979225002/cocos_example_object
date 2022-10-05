import GameCenter from "../../../data/GameCenter";

export class MineSelectItem {

    node: cc.Node;
    node_spine_box: cc.Node;

    spine_body: sp.Skeleton;
    spine_floor: sp.Skeleton;

    id: number = 0;
    type: number;
    skinID: number = 0;
    level: number = 0;
    size: object = {
        w:  666,
        h: 600
    };

    floorName: string = "empty";

    constructor(node: cc.Node, type: number = 0, itemID: number = 0, itemLevel: number = 0, config?) {

        this.node = node;
        this.node_spine_box = this.node.getChildByName("spine");
        this.spine_body = this.node_spine_box.getChildByName("body").getComponent(sp.Skeleton);
        this.spine_floor = this.node_spine_box.getChildByName("floor").getComponent(sp.Skeleton);

        this.id = itemID;
        this.type = type;
        this.level = itemLevel;

        if (config) {

            if (config.floorName) {
                this.floorName = config.floorName;
            }

            if (config.bodyAssets) {
                this.setBodySpineAssets(config.bodyAssets);
            }

        }

        this.init();

    }

    init(): void {
        this.setSkin();
        this.play("IDLE");
    }


    play(aniName:String) : void {
        this.bodyPlay(aniName);
        this.floorPlay(aniName);
    }


    bodyPlay(aniName): void {
        if (aniName == "IDLE") {
            this.spine_body.setAnimation(0, `select_idle`, true);
        } else if (aniName == "ACTION") {
            this.spine_body.setAnimation(0, `select_act`, true);
        }
    }

    floorPlay(aniName): void {

        if (!this.spine_floor) { return; }

        if (aniName == "IDLE") {
            this.spine_floor.setAnimation(0, `${this.floorName}`, true);
        } else if (aniName == "ACTION") {
            let actionAniName = this.floorName == "empty" ? `${this.floorName}_act` : this.floorName;
            this.spine_floor.setAnimation(0, actionAniName, true);
        }

    }

    setSkin(id?): void {

        if (this.type > 0) {
            return;
        }

        this.spine_body.setSkin(GameCenter.game.getPetBodySkinName(id));

    }
    upgradeSuccess(id: number, level: number): void {
        this.setLevel(id, level);
        let spine =  this.spine_body;
        spine.setAnimation(0, `lv_success`, false);
        spine.addAnimation(0, "idle", true);
    }

    upgradeFail(): void {
        let spine =  this.spine_body;
        spine.setAnimation(0, `lv_fail`, false);
        spine.addAnimation(0, `idle`, true);
    }
    setLevel(id, val: number): void {
        this.level = val;
        this.setSkin(id);
    }

    setSpineNodePosition(pos: cc.Vec2): void {
        this.node_spine_box.setPosition(pos);
    }

    setBodySpineAssets(assets): void {
        this.spine_body.skeletonData = assets;
    }

}
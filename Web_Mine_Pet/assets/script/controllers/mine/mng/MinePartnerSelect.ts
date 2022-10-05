import GameCenter from "../../../data/GameCenter";
import { MineSelect } from "./MineSelect";

export default class MinePetSelect extends MineSelect {

    constructor() {
        super(1);
        this.setInitData();
    }

    setInitData(): void {
        this.bodyName = GameCenter.game.partnerBodyName;
        this.floorName = GameCenter.game.mineFloorName;
    }

}
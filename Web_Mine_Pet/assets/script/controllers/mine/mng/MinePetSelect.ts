import GameCenter from "../../../data/GameCenter";
import { MineSelect } from "./MineSelect";

export default class MinePetSelect extends MineSelect {

    constructor() {
        super(0);
        this.setInitData();
    }

    reset(): void {
        this.slider.updateItemAni();
        this.slider.updateLevel();
    }

    setInitData(): void {
        this.bodyName = GameCenter.game.mineBodyName;
        this.floorName = GameCenter.game.mineFloorName;
    }

}
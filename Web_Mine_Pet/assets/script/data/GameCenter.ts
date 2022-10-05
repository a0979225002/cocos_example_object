import AssetsMng from "../manager/AssetsMng";
import * as CfgMine from "./config/CfgMine";
import * as CfgPartner from "./config/CfgPartner";
import System from "./model/System";
import GameModel from "./model/GameModel";

class GameCenter {

    cfgMine: object = CfgMine;
    cfgPartner: object = CfgPartner;
    system: System = null;
    game: GameModel = null;

    constructor() {

        this.system = new System();
        this.game = new GameModel();

        this.init();

    }

    init(): void {
        const models = [this.system, this.game];
        for (let i = 0; i < models.length; i++) {
            models[i].getData = this.getData.bind(this);
        }
    }

    getData(modelName: string, val: string) {

        if (!this[modelName]) {
            return null;
        }

        return this[modelName][val];

    }

    getCurrentPetChooseIcon() {
        let id = this.game.mineSelectID;
        let level = this.game.mineLevel[id];
        let assetImg = AssetsMng.getAssets(`pet_1.plist`);
        return assetImg.getSpriteFrame(`${this.cfgMine[id].levelName[Math.floor((level - 1) / 3)]}`);
    }

    getCurrentPartnerChooseIcon() {
        let id = this.game.partnerSelectID;
        let assetImg = AssetsMng.getAssets(`pet_2.plist`);
        return assetImg.getSpriteFrame(`display_${this.cfgPartner[id].levelName[0]}`);
    }

}

export default new GameCenter();
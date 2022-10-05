import AssetsMng from "../../manager/AssetsMng";
import GameCenter from "../../data/GameCenter";
import PropSelectPop from "../mine/pop/PropSelectPop";
import LangMng from "../../manager/LangMng";

export default class UISkinPop extends PropSelectPop {

    langTxtData = null;

    constructor() {

        super();

        this.langTxtData = {
            noDisplay: LangMng.getTxt("T_113"),
        }

        this.btnIconImg = {
            n: this.getBtnNormalImg(),
            a: this.getBtnActiveImg(),
        }

    }

    getListData() {
        return GameCenter.game.mineSkinListData;
    }

    getBtnNormalImg() {

       let arr = [null];
       let img = AssetsMng.getAssets("decoration.plist");

       for (let i = 1; i < 8; i++) {
           arr[i] = img.getSpriteFrame("skin_01_n");
       }

       return arr;

    }

    getBtnActiveImg() {

        let arr = [null];
        let img = AssetsMng.getAssets("decoration.plist");

        for (let i = 1; i < 8; i++) {
            arr[i] = img.getSpriteFrame("skin_01_a");
        }

        return arr;

    }

    getCurrentSelectID(id) {
        return GameCenter.game.mineSkin[id];
    }

}
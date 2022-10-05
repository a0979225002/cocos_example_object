import AssetsMng from "./manager/AssetsMng";
import SceneMng from "./manager/SceneMng";
import LangMng from "./manager/LangMng";
import { GPGAPI } from "./api/GPGAPI";

class GameController {

    net: GPGAPI = null;

    init(): void {
        AssetsMng.init();
        SceneMng.init();
        LangMng.init();
        this.net = new GPGAPI();
        this.net.connect();
    }

}

export default new GameController();
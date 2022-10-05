import GameController from "../../GameController";
import AssetsMng from "../../manager/AssetsMng";
import SceneMng from "../../manager/SceneMng";
import { LoadEvent, MainEvent } from "../../data/const/EventConst";
import UIBase from "../ui/UIBase";
import UIHelp from "../ui/UIHelp";
import LangMng from "../../manager/LangMng";

const { ccclass } = cc._decorator;

@ccclass
export default class MainLoading extends UIBase {

    onUILoad(): void {

        UIHelp.ShowLoading();
        UIHelp.ShowDialog(null);

        this.initEvent(LoadEvent.LOAD_PRELOAD_DONE, this.onAssetLoadDone);
        this.initEvent(LoadEvent.LOAD_SUCCESS, this.onLoadSuccess);
        this.initEvent(MainEvent.MESSAGE_SHOW, this.onMessageShow);

        SceneMng.resize();

    }

    onStart(): void {
        GameController.init();
        this.onPreLoad();
    }


    onPreLoad(): void {
        AssetsMng.onPreLoad();
    }


    onAssetLoadDone(): void {
        SceneMng.preload("mainGame", this.onNextSceneLoad.bind(this));
    }


    onNextSceneLoad(): void {
        GameController.net.send("start", null);
    }

    onLoadSuccess(): void {
        const timer = setTimeout((() => {
            SceneMng.goGame();
            clearTimeout(timer);
        }), 1000);
    }


    onMessageShow(config): void {
        UIHelp.ShowDialog({
                content: LangMng.getTxt(config.code),
        });
    }

    protected update(dt: number) {
        SceneMng.resizeUpdate();
    }

}
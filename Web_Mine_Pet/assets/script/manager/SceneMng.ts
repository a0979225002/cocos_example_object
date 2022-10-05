import UIMessage from "../controllers/ui/UIMessage";
import UIHelp from "../controllers/ui/UIHelp";
import UILoading from "../controllers/ui/UILoading";

export type CompletedCallback = (completedCount: number, totalCount: number, item: any) => void;

enum SceneName {
    Login,
    Game
}

class SceneMng {

    private _nowScene: SceneName = SceneName.Login;
    private _resizeActive: boolean = false;
    private _resizeDt: number = 0;

    constructor() {
        this.init();
    }


    init(): void {

        this.resizeBindOn();

    }

    preload(sceneName: string, onCompleted?: CompletedCallback): void {
        cc.director.preloadScene(sceneName, onCompleted);
    }


    load(sceneName: string): void {
        cc.director.loadScene(sceneName, () => {
            this.resize();
        });
    }

    goGame(): void {
        this.load("mainGame");
        this._nowScene = SceneName.Game;
    }

    getCurrentSceneName(): SceneName {
        return this._nowScene;
    }

    resize(): void {
        this.setCanvasSize();
        UIHelp.Resize(UILoading);
        UIHelp.Resize(UIMessage);
    }
    setCanvasSize(): void {

        if (!cc) { return; }

        let canvasSize = this.getWinSize();

        if (canvasSize.height / canvasSize.width <= 16 / 9) {

            cc.view.setDesignResolutionSize(750, 1333, new cc.ResolutionPolicy(cc.ContainerStrategy.PROPORTION_TO_FRAME, cc.ContentStrategy.NO_BORDER));
        } else {
            if (canvasSize.height / canvasSize.width > 16 / 9 && canvasSize.height / canvasSize.width <= 19.5 / 9) {

                cc.view.setDesignResolutionSize(750, 1624, new cc.ResolutionPolicy(cc.ContainerStrategy.EQUAL_TO_FRAME, cc.ContentStrategy.FIXED_WIDTH))
            } else {

                cc.view.setDesignResolutionSize(750, 1624, new cc.ResolutionPolicy(cc.ContainerStrategy.PROPORTION_TO_FRAME, cc.ContentStrategy.NO_BORDER))
            }
        }

    }


    resizeBindOn(): void {
        window.addEventListener("resize", this.debounce(() => {
            this.resize();
            this._resizeActive = true;
        }));
    }


    resizeUpdate(): void {

        if (this._resizeActive) {

            this._resizeDt++;

            if (this._resizeDt <= 3 || this._resizeDt >= 96) {
                this.resize();
            }

            if (this._resizeDt > 100) {
                this._resizeActive = false;
                this._resizeDt = 0;
            }

        }

    }

    debounce(func: Function) {
        let timer;
        return function (event) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(func, 300, event);
        };
    }

    getWinSize() {
        return {width: window.innerWidth, height: window.innerHeight};
    }

    get nowScene(): SceneName {
        return this._nowScene;
    }

    set nowScene(value: SceneName) {
        this._nowScene = value;
    }

}

export default new SceneMng();
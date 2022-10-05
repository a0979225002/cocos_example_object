import Assets from "../data/Assets";
import EventMng from "../manager/EventMng";
import { LoadEvent } from "../data/const/EventConst";

class AssetsMng {

    init(): void {

    }

    onPreLoad(): void {
        this.onGamePrefabLoad();
    }

    onPreLoadDone(): void {
        EventMng.emit(LoadEvent.LOAD_PRELOAD_DONE);
    }




    onGameSpineLoad(): void {
        const arr = Assets.getGameSpineUrls();
        cc.loader.loadResArray(arr, sp.SkeletonData, (error, data) => {
            this.onGameSpineDone(error, data);
        });
    }

    onGameSpineDone(error, data): void {
        if (!error) {
            this.setAssets(data, '.spine');
            this.onPreLoadDone();
        } else {
            console.log(error);
        }
    }


    onGameAssetsLoad(): void {
        const arr = Assets.getGameAssetsUrls();
        cc.loader.loadResArray(arr, cc.SpriteAtlas, (error, data) => {
            this.onGameAssetsDone(error, data);
        });
    }


    onGameAssetsDone(error, data): void {
        if (!error) {
            this.setAssets(data);
            this.onGameSpineLoad();
        } else {
            console.log(error);
        }
    }


    onGamePrefabLoad(): void {
        const arr = Assets.getGameAssetsPrefabUrls();
        cc.loader.loadResArray(arr, (error, data) => {
            this.onGamePrefabLoadDone(error, data);
        });
    }

    onGamePrefabLoadDone(error, data) {
        if (!error) {
            this.setAssets(data);
            this.onGameAssetsLoad();
        } else {
            console.log(error);
        }
    }

    setAssets(data, name?: string): void {

        for (let i = 0; i < data.length; i++) {

            let valName = data[i]._name;

            if (name) {
                valName += name;
            }

            Assets[valName] = data[i];



        }

    }


    getAssets(name: string): any{
        if (Assets[name]) {
            return Assets[name];
        }
    }


    getHeadPhotoImg(id: number): cc.SpriteFrame {

        let plist = this.getAssets("head_photo.plist");

        if (!plist) {
            return;
        }

        let num = id < 10 ? `0${id}` : id;
        return plist.getSpriteFrame(`head_${num}`);

    }

}

export default new AssetsMng();
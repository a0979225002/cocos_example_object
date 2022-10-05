class Assets {

    [x: string]: any;

    langAssetUrl: string = "images/txt/";
    gameAssetUrl: string = "images/";
    prefabAssetUrl: string = "prefab/";
    spineAssetUrl: string = "spine/";

    private _gameAssetsName: string[] = [
        "pet/pet_1",
        "pet/pet_2",
        "game/decoration"
    ];

    private _gameAssetsPrefabName: string[] = [
        "cube_item",
        "coin_gold_prefab",
        "coin_sliver_prefab",
    ];

    private _gameAssetsSpineName: string[] = [

        "select/select",

        "map/map_gpg1",

        "mine/pet01",

        "partner/mining1",

        "coin/coin",

    ];


    getGameAssetsPrefabUrls(): string[] {
        const arr = [];
        for (let i = 0; i < this._gameAssetsPrefabName.length; i++) {
            arr.push(this.prefabAssetUrl + this._gameAssetsPrefabName[i]);
        }
        return arr;
    }

    getPrefabAssetUrl(): string {
        return this.prefabAssetUrl;
    }

    getGameAssetsUrls(): string[] {
        const arr = [];
        for (let i = 0; i < this._gameAssetsName.length; i++) {
            arr.push(this.getGameAssetUrl() + this._gameAssetsName[i]);
        }
        return arr;
    }

    getGameAssetUrl(): string {
        return this.gameAssetUrl;
    }

    getGameSpineUrls(): string[] {
        const arr = [];
        for (let i = 0; i < this._gameAssetsSpineName.length; i++) {
            arr.push(this.getGameSpineUrl() + this._gameAssetsSpineName[i]);
        }
        return arr;
    }

    getGameSpineUrl(): string {
        return this.spineAssetUrl;
    }

}

export default new Assets();
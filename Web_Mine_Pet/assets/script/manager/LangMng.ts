import GameCenter from "../data/GameCenter";

class LangMng {

    private _data = null;

    init(): void {

        let langMode = GameCenter.system.language;
        this._data = require(langMode);

    }

    getTxt(code: string): string {
        if (!this._data) return;
        if (code == null) return code;
        return this._data[code] == null ? code : this._data[code];
    }

}

export default new LangMng();
import GameCenter from "../data/GameCenter";

class MusicMng {

    private _data = {};
    private _musicID = null;
    private _volMusic;
    private _volEffect;

    init(): void {

        this._volMusic = GameCenter.system.music_vol;
        this._volEffect = GameCenter.system.effect_vol;

        this.musicVolSet();
        this.effectVolSet();

    }

    preLoad(callBack?: Function): void {
        this.audioLoad("music/preload", callBack);
    }

    load(callBack?: Function): void {
        this.audioLoad("music/main", callBack);
    }

    audioLoad(path: string, callBack?: Function): void {
        cc.loader.loadResDir(path, cc.AudioClip, (err, Clip) => {
            for (let key in Clip) {
                this._data[Clip[key]._name] = Clip[key];
            }
            if (callBack) callBack();
        });
    }


    switchMusic(): boolean {
        GameCenter.system.is_open_music = !GameCenter.system.is_open_music;
        this.musicVolSet();
        return GameCenter.system.is_open_music;
    }

    musicPlay(musicName: string, playLoop = true): number {
        this.musicStop();
        this._musicID = cc.audioEngine.playMusic(this._data[musicName], playLoop);
        return this._musicID;
    }

    musicStop(): void {
        cc.audioEngine.stopMusic();
    }

    musicVolSet(vol?: number): void {

        if (vol) {
            this._volMusic = vol;
        }

        cc.audioEngine.setMusicVolume(this.getMusicState()? this._volMusic : 0);

    }

    getMusicState(): boolean {
        return GameCenter.system.is_open_music;
    }

    switchEffect(): boolean {
        GameCenter.system.is_open_sound = ! GameCenter.system.is_open_sound;
        this.effectVolSet();
        return GameCenter.system.is_open_sound;
    }

    effectPlay(effectName: string, playLoop: boolean = false): number {
        if(!GameCenter.system.is_open_sound) return;
        return cc.audioEngine.playEffect(this._data[effectName], playLoop);
    }

    effectStop(effectID: number): void {
        cc.audioEngine.stop(effectID);
    }

    effectVolSet(): void {
        cc.audioEngine.setEffectsVolume(GameCenter.system.is_open_sound ? this._volEffect : 0);
    }

    getEffectState(): boolean {
        return GameCenter.system.is_open_sound;
    }

    btnClick(): void {
        this.effectPlay("button_01");
    }



}

export default new MusicMng();
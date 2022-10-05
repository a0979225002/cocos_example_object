"use strict";
cc._RF.push(module, '5b610IWD/FEgp5Yjbypp1Sk', 'MusicMng');
// script/manager/MusicMng.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameCenter_1 = require("../data/GameCenter");
var MusicMng = /** @class */ (function () {
    function MusicMng() {
        this._data = {};
        this._musicID = null;
    }
    MusicMng.prototype.init = function () {
        this._volMusic = GameCenter_1.default.system.music_vol;
        this._volEffect = GameCenter_1.default.system.effect_vol;
        this.musicVolSet();
        this.effectVolSet();
    };
    MusicMng.prototype.preLoad = function (callBack) {
        this.audioLoad("music/preload", callBack);
    };
    MusicMng.prototype.load = function (callBack) {
        this.audioLoad("music/main", callBack);
    };
    MusicMng.prototype.audioLoad = function (path, callBack) {
        var _this = this;
        cc.loader.loadResDir(path, cc.AudioClip, function (err, Clip) {
            for (var key in Clip) {
                _this._data[Clip[key]._name] = Clip[key];
            }
            if (callBack)
                callBack();
        });
    };
    MusicMng.prototype.switchMusic = function () {
        GameCenter_1.default.system.is_open_music = !GameCenter_1.default.system.is_open_music;
        this.musicVolSet();
        return GameCenter_1.default.system.is_open_music;
    };
    MusicMng.prototype.musicPlay = function (musicName, playLoop) {
        if (playLoop === void 0) { playLoop = true; }
        this.musicStop();
        this._musicID = cc.audioEngine.playMusic(this._data[musicName], playLoop);
        return this._musicID;
    };
    MusicMng.prototype.musicStop = function () {
        cc.audioEngine.stopMusic();
    };
    MusicMng.prototype.musicVolSet = function (vol) {
        if (vol) {
            this._volMusic = vol;
        }
        cc.audioEngine.setMusicVolume(this.getMusicState() ? this._volMusic : 0);
    };
    MusicMng.prototype.getMusicState = function () {
        return GameCenter_1.default.system.is_open_music;
    };
    MusicMng.prototype.switchEffect = function () {
        GameCenter_1.default.system.is_open_sound = !GameCenter_1.default.system.is_open_sound;
        this.effectVolSet();
        return GameCenter_1.default.system.is_open_sound;
    };
    MusicMng.prototype.effectPlay = function (effectName, playLoop) {
        if (playLoop === void 0) { playLoop = false; }
        if (!GameCenter_1.default.system.is_open_sound)
            return;
        return cc.audioEngine.playEffect(this._data[effectName], playLoop);
    };
    MusicMng.prototype.effectStop = function (effectID) {
        cc.audioEngine.stop(effectID);
    };
    MusicMng.prototype.effectVolSet = function () {
        cc.audioEngine.setEffectsVolume(GameCenter_1.default.system.is_open_sound ? this._volEffect : 0);
    };
    MusicMng.prototype.getEffectState = function () {
        return GameCenter_1.default.system.is_open_sound;
    };
    MusicMng.prototype.btnClick = function () {
        this.effectPlay("button_01");
    };
    return MusicMng;
}());
exports.default = new MusicMng();

cc._RF.pop();
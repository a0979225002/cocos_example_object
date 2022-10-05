
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/manager/MusicMng.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYW5hZ2VyXFxNdXNpY01uZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUU1QztJQUFBO1FBRVksVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGFBQVEsR0FBRyxJQUFJLENBQUM7SUEyRjVCLENBQUM7SUF2RkcsdUJBQUksR0FBSjtRQUVJLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLEdBQUcsb0JBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBRS9DLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFeEIsQ0FBQztJQUVELDBCQUFPLEdBQVAsVUFBUSxRQUFtQjtRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsdUJBQUksR0FBSixVQUFLLFFBQW1CO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCw0QkFBUyxHQUFULFVBQVUsSUFBWSxFQUFFLFFBQW1CO1FBQTNDLGlCQU9DO1FBTkcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFHLEVBQUUsSUFBSTtZQUMvQyxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtnQkFDbEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzNDO1lBQ0QsSUFBSSxRQUFRO2dCQUFFLFFBQVEsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdELDhCQUFXLEdBQVg7UUFDSSxvQkFBVSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsQ0FBQyxvQkFBVSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDbkUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLE9BQU8sb0JBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQzNDLENBQUM7SUFFRCw0QkFBUyxHQUFULFVBQVUsU0FBaUIsRUFBRSxRQUFlO1FBQWYseUJBQUEsRUFBQSxlQUFlO1FBQ3hDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDMUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsOEJBQVcsR0FBWCxVQUFZLEdBQVk7UUFFcEIsSUFBSSxHQUFHLEVBQUU7WUFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztTQUN4QjtRQUVELEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFNUUsQ0FBQztJQUVELGdDQUFhLEdBQWI7UUFDSSxPQUFPLG9CQUFVLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUMzQyxDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUNJLG9CQUFVLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxDQUFFLG9CQUFVLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUNwRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsT0FBTyxvQkFBVSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDM0MsQ0FBQztJQUVELDZCQUFVLEdBQVYsVUFBVyxVQUFrQixFQUFFLFFBQXlCO1FBQXpCLHlCQUFBLEVBQUEsZ0JBQXlCO1FBQ3BELElBQUcsQ0FBQyxvQkFBVSxDQUFDLE1BQU0sQ0FBQyxhQUFhO1lBQUUsT0FBTztRQUM1QyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELDZCQUFVLEdBQVYsVUFBVyxRQUFnQjtRQUN2QixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsb0JBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRUQsaUNBQWMsR0FBZDtRQUNJLE9BQU8sb0JBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQzNDLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBSUwsZUFBQztBQUFELENBOUZBLEFBOEZDLElBQUE7QUFFRCxrQkFBZSxJQUFJLFFBQVEsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVDZW50ZXIgZnJvbSBcIi4uL2RhdGEvR2FtZUNlbnRlclwiO1xyXG5cclxuY2xhc3MgTXVzaWNNbmcge1xyXG5cclxuICAgIHByaXZhdGUgX2RhdGEgPSB7fTtcclxuICAgIHByaXZhdGUgX211c2ljSUQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfdm9sTXVzaWM7XHJcbiAgICBwcml2YXRlIF92b2xFZmZlY3Q7XHJcblxyXG4gICAgaW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5fdm9sTXVzaWMgPSBHYW1lQ2VudGVyLnN5c3RlbS5tdXNpY192b2w7XHJcbiAgICAgICAgdGhpcy5fdm9sRWZmZWN0ID0gR2FtZUNlbnRlci5zeXN0ZW0uZWZmZWN0X3ZvbDtcclxuXHJcbiAgICAgICAgdGhpcy5tdXNpY1ZvbFNldCgpO1xyXG4gICAgICAgIHRoaXMuZWZmZWN0Vm9sU2V0KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByZUxvYWQoY2FsbEJhY2s/OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYXVkaW9Mb2FkKFwibXVzaWMvcHJlbG9hZFwiLCBjYWxsQmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZChjYWxsQmFjaz86IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hdWRpb0xvYWQoXCJtdXNpYy9tYWluXCIsIGNhbGxCYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBhdWRpb0xvYWQocGF0aDogc3RyaW5nLCBjYWxsQmFjaz86IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXNEaXIocGF0aCwgY2MuQXVkaW9DbGlwLCAoZXJyLCBDbGlwKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBDbGlwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhW0NsaXBba2V5XS5fbmFtZV0gPSBDbGlwW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNhbGxCYWNrKSBjYWxsQmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzd2l0Y2hNdXNpYygpOiBib29sZWFuIHtcclxuICAgICAgICBHYW1lQ2VudGVyLnN5c3RlbS5pc19vcGVuX211c2ljID0gIUdhbWVDZW50ZXIuc3lzdGVtLmlzX29wZW5fbXVzaWM7XHJcbiAgICAgICAgdGhpcy5tdXNpY1ZvbFNldCgpO1xyXG4gICAgICAgIHJldHVybiBHYW1lQ2VudGVyLnN5c3RlbS5pc19vcGVuX211c2ljO1xyXG4gICAgfVxyXG5cclxuICAgIG11c2ljUGxheShtdXNpY05hbWU6IHN0cmluZywgcGxheUxvb3AgPSB0cnVlKTogbnVtYmVyIHtcclxuICAgICAgICB0aGlzLm11c2ljU3RvcCgpO1xyXG4gICAgICAgIHRoaXMuX211c2ljSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5fZGF0YVttdXNpY05hbWVdLCBwbGF5TG9vcCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX211c2ljSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgbXVzaWNTdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG4gICAgfVxyXG5cclxuICAgIG11c2ljVm9sU2V0KHZvbD86IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodm9sKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZvbE11c2ljID0gdm9sO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUodGhpcy5nZXRNdXNpY1N0YXRlKCk/IHRoaXMuX3ZvbE11c2ljIDogMCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldE11c2ljU3RhdGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIEdhbWVDZW50ZXIuc3lzdGVtLmlzX29wZW5fbXVzaWM7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoRWZmZWN0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIEdhbWVDZW50ZXIuc3lzdGVtLmlzX29wZW5fc291bmQgPSAhIEdhbWVDZW50ZXIuc3lzdGVtLmlzX29wZW5fc291bmQ7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RWb2xTZXQoKTtcclxuICAgICAgICByZXR1cm4gR2FtZUNlbnRlci5zeXN0ZW0uaXNfb3Blbl9zb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICBlZmZlY3RQbGF5KGVmZmVjdE5hbWU6IHN0cmluZywgcGxheUxvb3A6IGJvb2xlYW4gPSBmYWxzZSk6IG51bWJlciB7XHJcbiAgICAgICAgaWYoIUdhbWVDZW50ZXIuc3lzdGVtLmlzX29wZW5fc291bmQpIHJldHVybjtcclxuICAgICAgICByZXR1cm4gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLl9kYXRhW2VmZmVjdE5hbWVdLCBwbGF5TG9vcCk7XHJcbiAgICB9XHJcblxyXG4gICAgZWZmZWN0U3RvcChlZmZlY3RJRDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcChlZmZlY3RJRCk7XHJcbiAgICB9XHJcblxyXG4gICAgZWZmZWN0Vm9sU2V0KCk6IHZvaWQge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUoR2FtZUNlbnRlci5zeXN0ZW0uaXNfb3Blbl9zb3VuZCA/IHRoaXMuX3ZvbEVmZmVjdCA6IDApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVmZmVjdFN0YXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBHYW1lQ2VudGVyLnN5c3RlbS5pc19vcGVuX3NvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgIGJ0bkNsaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWZmZWN0UGxheShcImJ1dHRvbl8wMVwiKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IE11c2ljTW5nKCk7Il19
/*
Copyright 2021 LuJun

Permission is hereby granted, free of charge, to any person obtaining a copy 
of this software and associated documentation files (the "Software"), to deal 
in the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the Software is furnished 
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in 
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/// <reference path="../base/state.ts" />
/// <reference path="../utils/js.ts" />
/// <reference path="../index/index-manager.ts" />

namespace lcc {

const TAG = "lcc.AudioManager";

/**
 * 索引路径
 */
export namespace INDEXPATH {
	/**
	 * 音频
	 */
	export let AUDIO = "audio";
};

/**
 * 音频配置
 */
interface AudioConfig {
	/**
	 * 剪辑
	 */
	clip:cc.AudioClip;
	
	/**
	 * 配置
	 */
	config:{
		/**
		 * 文件
		 */
		file:string;

		/**
		 * 音量
		 */
		volume:number;
		
		/**
		 * 循环
		 */
		loop:boolean;
	};

	/**
	 * 预加载
	 */
	preload?:boolean;
}

/**
 * 默认全局BGM音量
 */
export let DEFAULT_BGM_VOLUME = 0.5;

/**
 * 默认全局SE音量
 */
export let DEFAULT_SE_VOLUME = 0.5;

/** 
 * @zh
 * 音频管理器 
 */
class AudioManager {
	
	/**
	 * 音频配置
	 */
	private _audioConfigs:{[key:string]:AudioConfig} = js.createMap();
	
	/**
	 * 全局BGM音量
	 */
	private _BGMVolume:number = DEFAULT_BGM_VOLUME;

	/**
	 * 全局SE音量
	 */
	private _SEVolume:number = DEFAULT_SE_VOLUME;

	/**
	 * 当前BGM
	 */
	private _nowBGM:string = null!;

	/**
	 * 当前BGM的ID
	 */
    private _nowBGMID:number = null!;
    
	/**
	 * 构造数据库管理器
	 */
	constructor(){
		state.on('initialize', ()=>{
			doing.stateInitialize.in(()=>{
				this._audioConfigs = js.createMap();
				this._BGMVolume = DEFAULT_BGM_VOLUME;
				this._SEVolume = DEFAULT_SE_VOLUME;
				this._nowBGM = null;
				this._nowBGMID = null;
				indexMgr.on("indexes_removed", this.onIndexesRemoved, this);
			});
		});
		state.on('release', ()=>{
			doing.stateRelease.in(()=>{
				indexMgr.targetOff(this);
			});
		});
	}
	
	onIndexesRemoved(){
		this.releaseInvalidAudios();
	}

	/**
	 * 释放无效音频
	 */
	public releaseInvalidAudios(){
		let afiles = indexMgr.getIndex(INDEXPATH.AUDIO) || {};
		for(let aname of Object.keys(this._audioConfigs)){
			if(!afiles[aname]){
				this.releaseAudio(aname);
			}
		}
	}

	/**
	 * 获取所有音频
	 */
	public getAllAudios(){
		return Object.keys(indexMgr.getIndex(INDEXPATH.AUDIO));
	}

	/**
	 * 释放指定音频
	 * @param aname 
	 * @param preload 预加载的也释放
	 */
	public releaseAudio(aname:string, preload:boolean = false){
		let audioconf = this._audioConfigs[aname];
		if(audioconf && (!audioconf.preload || preload)){
			delete this._audioConfigs[aname];
			audioconf.clip.decRef();
			cc.audioEngine.uncache(audioconf.clip);
			DEBUG.AUDIO && cc.log(TAG, `releaseAudio ${aname}`);
		}
	}

	/**
	 * 释放音频数组
	 * @param preload 
	 */
	public releaseAudios(anames:string[], preload:boolean = false){
		for(let aname of anames){
			this.releaseAudio(aname, preload);
		}
	}
	
	/**
	 * 预加载指定音频
	 * @param aname 
	 */
	public async preloadAudio(aname:string){
		(await this.getAudioConfig(aname)).preload = true;
	}
	
	/**
	 * 预加载音频数组
	 */
	public async preloadAudios(anames:string[], progress = (p:number)=>{}){
		for (let i = 0, len = anames.length; i < len; i++){
			await this.preloadAudio(anames[i]);
			progress((i + 1) / len);
		}
	}
	
	/**
	 * 设置 BGM 音量
	 */
	public async setBgmVolume(volume:number){
        if(this._BGMVolume != volume){
            this._BGMVolume = volume;
            if(this._nowBGMID != null){
				let audio = await this.getAudioConfig(this._nowBGM);
				if(audio){
					cc.audioEngine.setVolume(this._nowBGMID, 
						volume * (audio.config.volume != null ? audio.config.volume : 1));
					DEBUG.AUDIO && cc.log(TAG, `setBgmVolume ${volume}`);
				}
            }else if(this._nowBGM != null){
                this.playBGM(this._nowBGM);
            }
        }
	}

	/**
	 * 获得 BGM 音量
	 */
	public getBgmVolume(){
		return this._BGMVolume;
	}
	
	/**
	 * 设置 SE 音量
	 */
	public setSeVolume(volume:number){
		this._SEVolume = volume;
	}
	
	/**
	 * 获得 SE 音量
	 */
	public getSeVolume(){
		return this._SEVolume;
	}

	/**
	 * 获得当前的BGM
	 */
	public getNowBGM(){
		return this._nowBGM;
	}

	/**
	 * 播放背景音乐
	 * @param aname 音频名称
	 * @param loop 是否循环
	 */
	public async playBGM(aname:string, loop:boolean = true){
		if(this._nowBGM != aname){
			let aconf = await this.getAudioConfig(aname);
			if(aconf){
				this.stopBGM();
                this._nowBGM = aname;
				if(this._BGMVolume > 0){
					this._nowBGMID = cc.audioEngine.play(aconf.clip, 
						loop !== null ? loop : aconf.config.loop , 
						(aconf.config.volume != null ? aconf.config.volume : 1) * this._BGMVolume);
					DEBUG.AUDIO && cc.log(TAG, `playBGM ${aname} loop:${loop}`);
					return this._nowBGMID;
				}
			}
		}
	}

	/**
	 * 停止当前BGN
	 */
	public stopBGM(){
		if(this._nowBGMID != null){
			cc.audioEngine.stop(this._nowBGMID);
			DEBUG.AUDIO && cc.log(TAG, `stopBGM ${this._nowBGM}`);
			this._nowBGMID = null;
			this._nowBGM = null;
		}
	}

	/**
	 * 播放音效
	 * @param aname 音频名称
	 */
	public async playSE(aname:string){
		let aconf = await this.getAudioConfig(aname);
		if(aconf && this._SEVolume > 0){
			let result = cc.audioEngine.play(aconf.clip, 
				aconf.config.loop , 
				(aconf.config.volume != null ? aconf.config.volume : 1) * this._SEVolume);
			DEBUG.AUDIO && cc.log(TAG, `playSE ${aname}`);
			return result;
		}
	}

	/**
	 * 直到音频播放完成
	 * @param aid 音频播放ID
	 */
	public async untilFinish(aid:number){
		return new Promise((resolve)=>{
			let state = cc.audioEngine.getState(aid);
			if(state == cc.audioEngine.AudioState.ERROR){
				resolve(null);
			}else{
				cc.audioEngine.setFinishCallback(aid, resolve);
			}
		});
	}

	/**
	 * 获得音频配置
	 * @param aname 音频名称
	 */
	private async getAudioConfig(aname:string){
		let audioconf = this._audioConfigs[aname];
		if(!audioconf){
			let config = indexMgr.getIndex(INDEXPATH.AUDIO + "/" + aname);
			if(config){
				let clip = await packMgr.loadAudio(config.file);
				audioconf = {
					clip : clip,
					config : config,
				};
				clip.addRef();
				this._audioConfigs[aname] = audioconf;
			}
		}
		return audioconf;
	}
	
};

/**
 * 音频管理器
 */
export const audioMgr = new AudioManager();

}

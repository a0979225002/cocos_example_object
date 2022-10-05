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

/// <reference path="../base/base.ts" />
/// <reference path="../base/state.ts" />

namespace lcc {

const TAG = "lcc/log/log-manager.ts";

/**
 * @zh
 * 日志等级
 */
export enum LOGLEVEL {
    /**
     * @zh
     * 最低级，什么都可以
     */
    VERBOSE = 1,
    
    /**
     * @zh
     * 调试日志
     */
    DEBUG,
    
    /**
     * @zh
     * 信息日志
     */
    INFO,
    
    /**
     * @zh
     * 警告日志
     */
    WARN,
    
    /**
     * @zh
     * 错误日志
     */
    ERROR,
    
    /**
     * @zh
     * 寂静, 用于关闭日志
     */
	SILENT,
}

/**
 * @zh
 * 日志等级描述
 */
const LogLevelDescs = {
	[LOGLEVEL.VERBOSE] : "V",
	[LOGLEVEL.DEBUG] : "D",
	[LOGLEVEL.INFO] : "I",
	[LOGLEVEL.WARN] : "W",
	[LOGLEVEL.ERROR] : "E",
	[LOGLEVEL.SILENT] : "S",
}

/**
 * @zh
 * 日志参数
 */
export interface LogParams {
	/**
     * @zh
	 * 等级
	 */
	level?:LOGLEVEL;

	/**
     * @zh
	 * 标签
	 */
	tag?:string;

	/**
     * @zh
	 * 内容
	 */
	content?:string;
}

/**
 * @zh
 * 日志缓冲
 */
export interface LogBuffer {
	/**
     * @zh
	 * 日志数组
	 */
	logs:string[];

	/**
     * @zh
	 * 日志大小
	 */
	size:number;
}

/**
 * @zh
 * 最大日志缓冲 默认1M
 */
export let LOG_BUFFERSIZE = 1024 * 1024;


/**
 * @zh
 * 日志默认存放路径<br/>
  * *原生平台有效*
 */
export let LOG_PATH = CC_JSB && `${jsb.fileUtils.getWritablePath()}/logs`;

 /**
  * @zh
  * 生成的日志文件名，不含后缀<br/>
  * *原生平台有效*
  */
export let LOG_FILENAME = 'log';
 
 /**
  * @zh
  * 开启单个日志文件<br/>
  * 开启后所有输出都会追加到这个文件中<br/>
  * *原生平台有效*
  */
export let LOG_SINGLE = false;

/**
 * @zh
 * 日志管理器<br/>
 * 主要管理框架日志的输出和保存<br/>
 * 并且也监听程序异常日志
 */
class LogManager {
	/**
     * @zh
	 * 管理器实例
	 */
	private static _instance:LogManager;

	/**
     * @zh
	 * 获取单例对象
	 */
	public static getInstance() : LogManager  {
		if(!LogManager._instance){
			LogManager._instance = new LogManager();
		}
		return LogManager._instance;
	}

	/**
     * @zh
	 * 日志输出等级<br>
     * 只有不小于该等级的日志会被输出和保存<br/>
     * 保存不一定是及时的，有缓冲区
	 */
	private _logLevel:LOGLEVEL = LOGLEVEL.INFO;

	/**
     * @zh
	 * 日志缓冲保存等级<br/>
     * 如果收到不小于该等级的日志会立刻保存
	 */
	private _flushLevel:LOGLEVEL = LOGLEVEL.ERROR;
	
	/**
     * @zh
	 * 日志缓冲大小
	 */
	private _buffSize:number = LOG_BUFFERSIZE;

	/**
     * @zh
	 * 日志缓冲
	 */
	private _logBuff:LogBuffer = { logs:[], size:0 };
	
    /**
     * @zh
     * 日志文件
     */
	private _logFile:string = null;

	/**
     * @zh
	 * 日志格式化函数
	 */
	private _logFormat:(params:LogParams)=>string = this.defaultLogFormat.bind(this);

	/**
	 * @zh
	 * 构造函数
	 */
	constructor(){
		state.on('initialize', ()=>{
			doing.stateInitialize.in(()=>{
				this._logLevel =  LOGLEVEL.INFO;
				this._flushLevel =  LOGLEVEL.ERROR;
				this._buffSize =  LOG_BUFFERSIZE;
				this._logBuff =  { logs:[], size:0 };
				this._logFile =  null;
				this._logFormat =  this.defaultLogFormat.bind(this);
				if (!CC_EDITOR) {
					window.onerror = this.onError.bind(this);
				}
			});
		});
		state.on('release', ()=>{
			doing.stateRelease.in(()=>{
				if (!CC_EDITOR) {
					window.onerror = null;
				}
			});
		});
	}

	/**
	 * @zh
	 * 全局错误
	 * 
	 * @param message 
	 * @param source 
	 * @param lineno 
	 * @param colno 
	 * @param error 
	 */
	private onError(message, source, lineno, colno, error){
		this.error("SYSTEM","[" + error + "]" + message + " < " + source + "(" + lineno + "," + colno + ")");
	}

    /**
     * @zh
     * 获得日志文件<br/>
     * 如果使用`LOG_SINGLE`单日志文件，那么始终获得同一个日志文件<br/>
     * 否则，每一次启动程序，日志文件名称都会加上时间标记
     */
	public getLogFile(){
        if(!this._logFile){
			if(CC_JSB){
				jsb.fileUtils.createDirectory(LOG_PATH);
				if(LOG_SINGLE){
					this._logFile = `${LOG_PATH}/${LOG_FILENAME}.log`;
				}else{
					let now = new Date();
					let yyyy = now.getFullYear();
					let mm = now.getMonth() + 1;
					let dd = now.getDate();
					let HH = now.getHours();
					let MM = now.getMinutes();
					let SS = now.getSeconds();
					this._logFile = `${LOG_PATH}/${yyyy}${mm < 10 ? "0" + mm : mm}${dd < 10 ? "0" + dd : dd}${HH < 10 ? "0" + HH : HH}${MM < 10 ? "0" + MM : MM}${SS < 10 ? "0" + SS : SS}-${LOG_FILENAME}.log`;
				}
			}
        }
        return this._logFile;
    }

	/**
     * @zh
	 * 设置日志输出等级
     * 
	 * @param level - 日志等级
	 */
	public setLogLevel(level:LOGLEVEL){
		this._logLevel = level;
	}

	/**
     * @zh
	 * 设置缓冲区保存等级
     * 
	 * @param level - 日志等级
	 */
	public setFlushLevel(level:LOGLEVEL){
		this._flushLevel = level;
	}

	/**
     * @zh
	 * 设置日志缓冲区大小
     * 
	 * @param size - 大小，字节数
	 */
	public setBufferSize(size:number){
		this._buffSize = size;
	}

	/**
     * @zh
	 * 设置日志格式化函数<br/>
     * 如果设置为'null'，那么会使用默认的格式化函数
     * 
	 * @param format - 自定义格式化函数
	 */
	public setLogFormat(format?:(params:LogParams)=>string){
		this._logFormat = format;
		if(!this._logFormat){
			this._logFormat = this.defaultLogFormat.bind(this);
		}
	}

	/**
     * @zh
	 * 默认日志格式化函数
     * 
	 * @param params - 日志参数
	 */
	private defaultLogFormat(params:LogParams){
		return js.formatDate("mm-dd HH:MM:SS", new Date()) + " " + LogLevelDescs[params.level] + "/" + params.tag
			+ " - " + params.content;
	}

	/**
     * @zh
	 * 写入日志<br/>
     * 根据`日志输出等级`，决定是否输出日志<br/>
     * 根据`缓冲保存等级`，决定是否立即保存日志
     * 
	 * @param params - 日志参数
	 */
	public writeLog(params:LogParams){
		if(params.level >= this._logLevel){
			let log = this._logFormat(params);
			switch(params.level){
			case LOGLEVEL.ERROR:
				cc.error(log);
				break;
			case LOGLEVEL.WARN:
				cc.warn(log);
				break;
			default:
				cc.log(log);
				break;
			}
			if(CC_JSB){
				this._logBuff.logs.push(log);
				this._logBuff.size += log.length;
				if(params.level >= this._flushLevel || this._logBuff.size >= this._buffSize){
					this.flushLog();
				}
			}
		}
	}

	/**
     * @zh
	 * 保存日志缓冲<br/>
     * 如果需要马上在日志文件上看到输出，可以手动调用
	 */
	public flushLog(){
		if(this._logBuff.size > 0){
			if(CC_JSB){
				// 写入缓冲区
				jsb.fileUtils.writeStringToFile(this._logBuff.logs.join("\n") + "\n", this.getLogFile());
			}
			this._logBuff = { logs:[], size:0 };
		}
	}
	
	/**
	 * @zh
	 * 输出 VERBOSE 日志
	 */
	public verbose(tagOrParams:string | LogParams, msg:string, ...args:any[]){
		if(LOGLEVEL.VERBOSE >= this._logLevel){
			if(typeof tagOrParams == "string"){
				tagOrParams = { tag : tagOrParams };
			}
			tagOrParams.level = LOGLEVEL.VERBOSE;
			tagOrParams.content = js.formatString(msg, args);
			this.writeLog(tagOrParams);
		}
	}

	/**
	 * @zh
	 * 输出 DEBUG 日志
	 */
	public debug(tagOrParams:string | LogParams, msg:string, ...args:any[]){
		if(LOGLEVEL.DEBUG >= this._logLevel){
			if(typeof tagOrParams == "string"){
				tagOrParams = { tag : tagOrParams };
			}
			tagOrParams.level = LOGLEVEL.DEBUG;
			tagOrParams.content = js.formatString(msg, args);
			this.writeLog(tagOrParams);
		}
	}

	/**
	 * @zh
	 * 输出 INFO 日志
	 */
	public info(tagOrParams:string | LogParams, msg:string, ...args:any[]){
		if(LOGLEVEL.INFO >= this._logLevel){
			if(typeof tagOrParams == "string"){
				tagOrParams = { tag : tagOrParams };
			}
			tagOrParams.level = LOGLEVEL.INFO;
			tagOrParams.content = js.formatString(msg, args);
			this.writeLog(tagOrParams);
		}
	}

	/**
	 * @zh
	 * 输出 WARN 日志
	 */
	public warn(tagOrParams:string | LogParams, msg:string, ...args:any[]){
		if(LOGLEVEL.WARN >= this._logLevel){
			if(typeof tagOrParams == "string"){
				tagOrParams = { tag : tagOrParams };
			}
			tagOrParams.level = LOGLEVEL.WARN;
			tagOrParams.content = js.formatString(msg, args);
			this.writeLog(tagOrParams);
		}
	}

	/**
	 * @zh
	 * 输出 ERROR 日志
	 */
	public error(tagOrParams:string | LogParams, msg:string, ...args:any[]){
		if(LOGLEVEL.ERROR >= this._logLevel){
			if(typeof tagOrParams == "string"){
				tagOrParams = { tag : tagOrParams };
			}
			tagOrParams.level = LOGLEVEL.ERROR;
			tagOrParams.content = js.formatString(msg, args);
			this.writeLog(tagOrParams);
		}
	}

};

/**
 * @zh
 * 日志管理器对象
 */
export const logMgr = new LogManager();

}
	
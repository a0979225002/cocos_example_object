
import { CONFIG_PATH, NODE_PATH, LOG_PATH, DEFAULT_GID } from '../config';

const forever = require('forever');
const Path = require('path');
const FS = require('fs');

const TAG = "[start]";

/**
 * 服务器配置
 */
export interface ServerConfig {
    /**
     * 进程ID
     */
    PID:string;

    /**
     * 是否启用
     */
    enable?:boolean;

    /**
     * 服务器名称
     */
    server:string;

    /**
     * 服务器配置
     */
    config?:string;
}

/**
 * 服务器组配置
 */
export interface ServersConfig {
    /**
     * 全局ID
     */
    GID?:string;

    /**
     * 服务器组
     */
    servers:ServerConfig[];
}

/**
 * 获得运行中的服务器，返回 UID 数组
 */
export function getRunningServers() {
    return new Promise<string[]>((resolve)=>{
        forever.list(true, function (error:string, processes:string) {
            let list:string[] = [];
            if(error){
                lcc.logMgr.error(TAG, `forever list error : ${error}`);
            }else{
                if(processes){
                    for(let msg of processes.split('\n').splice(1)){
                        list.push(msg.split(' ')[1]);
                    }
                }
            }
            resolve(list);
        });
    });
}

/**
 * 启动
 */
export async function start(options:any = {}){
    await lcc.configMgr.loadConfig("servers");
    let servers:ServersConfig = lcc.configMgr.getConfig('servers');
    if(!servers){
        return lcc.logMgr.error(TAG, `not found servers config in ${CONFIG_PATH}`);
    }
    //console.log(TAG, JSON.stringify(lcc.CONFIGS));

    let starts:ServerConfig[] = [];
    for(let s of servers.servers){
        if(s.enable != false && (!options.servers || options.servers.indexOf(s.PID) != -1)){
            starts.push(s);
        }
    }
    lcc.logMgr.info(TAG, `start servers ${JSON.stringify(starts.map((v)=>{ return v.PID; }))}`);

    // 启动服务器
    FS.mkdirSync(LOG_PATH, { recursive : true });
    let runServers = await getRunningServers();
    for(let start of starts){
        let UID = `${servers.GID || DEFAULT_GID}-${start.PID}`;
        if(runServers.indexOf(UID) == -1){
            let option = {
                script : Path.join(NODE_PATH, 'servers', start.server, 'bin', 'main.js'),
                args : null,
                killSignal : 'SIGTERM',
                logFile : Path.join(LOG_PATH, `forever-${UID}.log`),
                append : true,
                uid : UID,
            };
            if(start.config){
                option.args = [ start.config ];
            }
            forever.startDaemon(option.script, option);
        }
    }
    lcc.logMgr.info(TAG, `start complete`);
}

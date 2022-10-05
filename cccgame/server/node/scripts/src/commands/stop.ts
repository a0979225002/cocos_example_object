import { CONFIG_PATH, NODE_PATH, DEFAULT_GID } from '../config';

const forever = require('forever');
const Path = require('path');

const TAG = "[stop]";

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
 * 停止
 */
export async function stop(options:any = {}){
    await lcc.configMgr.loadConfig("servers");
    let servers:ServersConfig = lcc.configMgr.getConfig('servers');
    if(!servers){
        return lcc.logMgr.error(TAG, `not found servers config in ${CONFIG_PATH}`);
    }
    //console.log(TAG, JSON.stringify(lcc.CONFIGS));

    let stops:ServerConfig[] = [];
    for(let s of servers.servers){
        if(s.enable != false && (!options.servers || options.servers.indexOf(s.PID) != -1)){
            stops.push(s);
        }
    }
    lcc.logMgr.info(TAG, `stop servers ${JSON.stringify(stops.map((v)=>{ return v.PID; }))}`);

    // 停止服务器
    let runServers = await getRunningServers();
    for(let stop of stops){
        let UID = `${servers.GID || DEFAULT_GID}-${stop.PID}`;
        if(runServers.indexOf(UID) != -1){
            var runner = forever.stop(UID, true);
            runner.on('stop', (process) => {
                lcc.logMgr.info(TAG, `Forever stopped process:\n${process}`);
            });
            runner.on('error', (err) => {
                lcc.logMgr.info(TAG, `Forever cannot find process with id: ${UID}`);
            });
        }
    }
}

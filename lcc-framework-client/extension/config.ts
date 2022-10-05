import { updateMap } from './utils'

const Fs = require('fs');
const Path = require('path');

/**
 * 配置文件
 */
const CONFIG_FILE = Path.join(Editor.Project.path, 'local', 'lcc-framework.json');

/**
 * 扩展配置
 */
export interface ExtensionConfig {

    /**
     * 发布
     */
    publish:{

        /**
         * 混淆框架
         */
        confuse:boolean;

        /**
         * 裁剪框架
         */
        clip:boolean;

        /**
         * 裁剪方式
         */
        clipMethod:string;

        /**
         * 保持模块
         */
        keepModules:{[key:string]:boolean};
    };
}

/**
 * 默认配置
 */
const DEFAULT_CONFIG:ExtensionConfig = {
    publish:{
        confuse : false,
        clip : true,
        clipMethod : 'custom',
        keepModules : {},
    }
};

/**
 * 加载配置
 */
export function loadConfig(){
    if (Fs.existsSync(CONFIG_FILE)) {
        return <ExtensionConfig>JSON.parse(Fs.readFileSync(CONFIG_FILE, 'utf8'));
    } else {
        return { ...DEFAULT_CONFIG };
    }
}

/**
 * 保存配置
 */
export function saveConfig(config:ExtensionConfig){
    const configDir = Path.dirname(CONFIG_FILE);
    if (!Fs.existsSync(configDir)) Fs.mkdirSync(configDir, { recursive : true });
    let oldConfig:ExtensionConfig;
    if(Fs.existsSync(CONFIG_FILE)){
        oldConfig = JSON.parse(Fs.readFileSync(CONFIG_FILE, 'utf8'));
    }else{
        oldConfig = Object.create(null);
    }
    updateMap(oldConfig, config);
    Fs.writeFileSync(CONFIG_FILE, JSON.stringify(oldConfig));
}

/// <reference types="../@types/creator" />
declare namespace lcc {
    /**
     * @zh
     * 版本号
     */
    const VERSION = "1.0.0";
    /**
     * @zh
     * 调试用宏定义
     */
    namespace DEBUG {
        /**
         * @zh
         * 基础模块
         */
        let BASE: boolean;
        /**
         * @zh
         * 存档模块
         */
        let ARCHIVE: boolean;
        /**
         * @zh
         * 音频模块
         */
        let AUDIO: boolean;
        /**
         * @zh
         * 配置模块
         */
        let CONFIG: boolean;
        /**
         * @zh
         * 数据表模块
         */
        let TABLE: boolean;
        /**
         * @zh
         * 语言模块
         */
        let LANG: boolean;
        /**
         * @zh
         * 网络模块
         */
        let NETWORK: boolean;
        /**
         * @zh
         * 定时器模块
         */
        let TIMER: boolean;
        /**
         * @zh
         * 工作者模块
         */
        let WORKER: boolean;
    }
}
declare namespace lcc {
    namespace js {
        /**
         * @zh
         * 格式化字符串, Map参数
         *
         * @param str - 格式化的字符串
         * @param map - 外部映射表，优先解析
         */
        function formatString(str: string, map: {
            [key: string]: any;
        }): string;
        /**
         * @zh
         * 日期格式化
         *
         * @param fmt - 格式字符串
         * @param date - 日期对象
         */
        function formatDate(fmt: string, date: Date): string;
        /**
         * @zh
         * 创建map表
         *
         * @param forceDictMode
         */
        function createMap(forceDictMode?: boolean): any;
        /**
         * @zh
         * 判断是否为空map表
         *
         * @param map
         */
        function isEmptyMap(map: Object): boolean;
        /**
         * @zh
         * 通过Map的值
         *
         * @param map - Map对象
         * @param path - 路径
         * @param split - 分隔符
         */
        function getMapValue(map: Object, path: string, split?: string): any;
        /**
         * @zh
         * 通过路径设置Map的值
         *
         * @param map - Map对象
         * @param path - 路径
         * @param value - 值
         * @param split - 分隔符
         */
        function setMapValue(map: Object, path: string, value: any, split?: string): void;
        /**
         * @zh
         * 合并Map表<br/>
         * Map表合并规则：<br/>
         * 遍历源Map表字段，对比目的Map表对应字段，存在几种情况：<br/>
         * 1、目的Map表中不存在该字段，直接设置为源Map表字段<br/>
         * 2、目的Map表字段和源Map表字段同为数组(Array)，把字段的源Map表数组复制到目的Map表数组中<br/>
         * 3、目的Map表字段和源Map表字段同为对象(Object)，以字段的目的Map表和源Map表为参数再次调用次函数<br/>
         * 4、其他情况，说明存在冲突。警告后，源Map表字段直接覆盖目的Map表字段
         *
         * @param dmap - 目的Map表
         * @param smap - 源Map表
         * @param options - 选项，主要可以指定异常输出标签和源文件
         */
        function mergeMap(dmap: Object, smap: Object, options?: {
            tag?: string;
            source?: string;
        }): void;
        /**
         * @zh
         * 更新Map表<br/>
         * Map表更新规则：<br/>
         * 遍历源Map表字段，对比目的Map表对应字段，存在几种情况：<br/>
         * 1、目的Map表中不存在该字段，直接设置为源Map表字段<br/>
         * 2、目的Map表字段和源Map表字段同为数组(Array)，直接设置为源Map表字段<br/>
         * 3、目的Map表字段和源Map表字段同为对象(Object)，以字段的目的Map表和源Map表为参数再次调用次函数<br/>
         *
         * @param dmap - 目的Map表
         * @param smap - 源Map表
         */
        function updateMap(dmap: Object, smap: Object): void;
        /**
         * @zh
         * 提取Map表<br/>
         * Map表提取规则：<br/>
         * 遍历目的Map表字段，对比源Map表对应字段，存在几种情况：<br/>
         * 1、源Map表中不存在该字段，跳过<br/>
         * 1、源Map表字段和目的Map表字段类型不同，跳过<br/>
         * 2、源Map表字段和目的Map表字段类型相同，不为(Object)，目的Map表字段设置为源Map表字段<br/>
         * 3、源Map表字段和目的Map表字段类型相同，同为(Object)，以字段的目的Map表和源Map表为参数再次调用次函数<br/>
         *
         * @param dmap - 目的Map表
         * @param smap - 源Map表
         */
        function extractMap(dmap: Object, smap: Object): void;
        /**
         * @zh
         * 缓冲转换为UTF16字符串
         *
         * @param buff - 缓冲
         */
        function ab2str(buff: ArrayBuffer): any;
        /**
         * @zh
         * UTF16字符串转为缓冲
         *
         * @param str - 字符串
         */
        function str2ab(str: string): ArrayBuffer;
        /**
         * @zh
         * 重复指定的字符串
         *
         * @param src -重复的字符串
         * @param n - 重复次数
         */
        function repeat(src: string, n: number): string;
        /**
         * @zh
         * base64字符串转为Uint8Array
         *
         * @param b64str - base64字符串
         */
        function b642u8a(b64str: string): Uint8Array;
        /**
         * @zh
         * ArrayBuffer转为Base64字符串
         *
         * @param buff - 缓冲对象
         */
        function ab2b64(buff: ArrayBuffer): string;
        /**
         * @zh
         * 合并ArrayBuffer
         *
         * @param arrays - 数组
         */
        function mergeABs(...arrays: ArrayBuffer[]): ArrayBufferLike;
        /**
         * @zh
         * 复制ArrayBuffer
         *
         * @param src - 源ArrayBuffer
         * @param dest - 目的ArrayBuffer
         * @param start - 目的开始位置
         */
        function copyAB(src: ArrayBuffer, dest: ArrayBuffer, start: number): void;
    }
}
declare namespace lcc {
    /**
     * @zh
     * 计数器
     */
    class Counter {
        /**
         * @zh
         * 计数值
         */
        private _count;
        /**
         * @zh
         * 归零回调
         */
        private _onZero;
        /**
         * @zh
         * 检查归零
         */
        private checkZero;
        /**
         * 重置计数
         */
        reset(): void;
        /**
         * @zh
         * 增加计数
         */
        addCount(): void;
        /**
         * @zh
         * 减少计数
         */
        decCount(): void;
        /**
         * @zh
         * 在回调函数内计数
         *
         * @param callback - 回调函数
         */
        in(callback: Function): Promise<void>;
        /**
         * @zh
         * 直到归零
         */
        untilZero(): Promise<any>;
    }
    /**
     * @zh
     * 工作中类
     */
    class Doing {
        /**
         * 索引加载
         */
        indexLoad: Counter;
        /**
         * 语言更新
         */
        langUpdate: Counter;
        /**
         * 状态初始化
         */
        stateInitialize: Counter;
        /**
         * 状态释放
         */
        stateRelease: Counter;
        /**
         * 重置工作中
         */
        reset(): void;
    }
    /**
     * @zh
     * 工作中对象
     */
    export const doing: Doing;
    export {};
}
declare namespace lcc {
    /**
     * @zh
     * 变量类
     */
    class Variable {
        /**
         * @zh
         * 映射表
         */
        private _map;
        /**
         * @zh
         * 设置变量
         *
         * @param vname - 变量名称
         * @param value - 变量值
         */
        set(vname: string, value: any): void;
        /**
         * @zh
         * 获得变量
         *
         * @param vname - 变量名称
         */
        get(vname: string): any;
        /**
         * @zh
         * 移除所有变量
         */
        removeAll(): void;
        /**
         * @zh
         * 解析字符串中的变量
         *
         * @param str - 字符串
         * @param extMap - 外部映射表，优先解析
         */
        parseString(str: string, extMap?: {
            [key: string]: any;
        }): string;
    }
    /**
     * @zh
     * 变量对象
     */
    export const variable: Variable;
    /**
     * @zh
     * 翻译JSON对象中的变量
     *
     * @param json json对象
     * @param localpath 文件当前路径
     */
    export function translateJSON(json: any, localpath?: string): any;
    export {};
}
declare namespace lcc {
    /**
     * @zh
     * 引用冲突
     */
    export let ERROR_REFERENCE_CONFLICT: boolean;
    /**
     * @zh
     * 引用键
     */
    export interface RefKey {
        /**
         * @zh
         * 路径
         */
        path: string;
        /**
         * @zh
         * 包名, 默认使用当前加载的
         */
        pack?: string;
    }
    /**
     * @zh
     * 获得引用key字符串
     *
     * @param key 引用key对象
     */
    export function getRefKeyString(key: RefKey): string;
    /**
     * @zh
     * 引用类
     */
    class Reference {
        /**
         * @zh
         * 映射表
         */
        private _map;
        /**
         * @zh
         * 获得指定引用
         *
         * @param key 键
         */
        get<T = any>(key: string | RefKey): T;
        /**
         * @zh
         * 添加指定引用
         *
         * @param key 键
         * @param value 值
         */
        add(key: string | RefKey, value: any): void;
        /**
         * @zh
         * 遍历引用
         *
         * @param callback - 回调函数
         */
        foreach(callback: (key: string, value: any) => boolean): void;
        /**
         * @zh
         * 移除指定引用
         *
         * @param key 键
         */
        remove(key: string | RefKey): void;
        /**
         * @zh
         * 通过包名称移除
         *
         * @param pack 包名称
         */
        removeByPack(pack: string): void;
        /**
         * @zh
         * 移除所有引用
         */
        removeAll(): void;
    }
    /**
     * @zh
     * 引用对象
     */
    export const reference: Reference;
    /**
     * @zh
     * 装饰器
     */
    export namespace _decorator {
        /**
         * @zh
         * lcc引用类装饰器
         */
        function refclass(key?: string | RefKey): (target: any) => void;
    }
    export {};
}
declare namespace lcc {
    /**
     * @zh
     * 框架状态
     */
    class State extends cc.EventTarget {
        /**
         * @zh
         * 是否已经初始化
         */
        private _initialized;
        /**
         * @zh
         * 判断是否已经初始化
         */
        get initialized(): boolean;
        /**
         * @zh
         * 初始化
         */
        initialize(): Promise<void>;
        /**
         * @zh
         * 释放
         */
        release(): Promise<void>;
    }
    /**
     * @zh
     * 框架状态对象
     */
    export const state: State;
    export {};
}
declare namespace lcc {
    /**
     * @zh
     * 默认存档事件段
     */
    export let ARCHIVE_EVENTS_SEGEMENT: string;
    /**
     * @zh
     * 存档信息
     */
    interface ArchiveInfo {
        /**
         * @zh
         * 插槽
         */
        slot: number;
        /**
         * @zh
         * 名字
         */
        name: string;
        /**
         * @zh
         * 时间
         */
        time: number;
        /**
         * @zh
         * 版本
         */
        version: string;
    }
    /**
     * @zh
     * 存档管理器
     */
    class ArchiveManager extends cc.EventTarget {
        /**
         * @zh
         * 存档信息
         */
        private _infos;
        /**
         * @zh
         * 当前存档插槽
         */
        private _nowSlot;
        /**
         * @zh
         * 当前存档数据
         */
        private _data;
        /**
         * @zh
         * 构造函数
         */
        constructor();
        /**
         * @zh
         * 获得当前存档信息
         */
        getArchiveInfo(): ArchiveInfo;
        /**
         * @zh
         * 获得当前存档数据
         */
        getArchiveData(): any;
        /**
         * @zh
         * 获得所有存档
         */
        getArchives(): ArchiveInfo[];
        /**
         * @zh
         * 加载存档
         *
         * @param slot - 插槽
         */
        loadArchive(slot: number): boolean;
        /**
         * @zh
         * 保存存档
         *
         * @param slot - 插槽
         */
        saveArchive(slot: number): void;
        /**
         * @zh
         * 删除存档
         *
         * @param slot - 插槽
         */
        deleteArchive(slot: number): boolean;
        /**
         * @zh
         * 新建存档
         *
         * @param slot - 插槽
         * @param name - 存档名
         */
        createArchive(slot: number, name?: string): void;
        /**
         * @zh
         * 检查事件点
         *
         * @param point - 事件
         * @param segment - 段
         */
        checkEventPoint(point: number, segment?: string): boolean;
        /**
         * @zh
         * 设置事件点
         *
         * @param point - 事件
         * @param state - 状态
         * @param segment - 段
         */
        setEventPoint(point: number, state: boolean, segment?: string): void;
    }
    /**
     * @zh
     * 存档管理器对象
     */
    export const archiveMgr: ArchiveManager;
    export {};
}
declare namespace lcc {
    /**
     * @zh
     * HTTP发送默认超时时间
     */
    let HTTP_SEND_TIMEOUT: number;
    /**
     * @zh
     * http功能类
     */
    namespace http {
        /**
         * @zh
         * http POST 数据
         *
         * @param url - URL
         * @param data - 数据
         * @param extHeaders - 额外header
         * @param timeout - 可选，自定义超时时间
         *
         * @return Promise<string>
         */
        function post(url: string, data: any, extHeaders?: any, timeout?: number): Promise<string>;
        /**
         * @zh
         * http POST发送JSON与接收JSON数据
         *
         * @param url - URL
         * @param data - JSON对象
         * @param timeout - 可选，自定义超时时间
         *
         * @return Promise<[JSON]>
         */
        function postJson(url: string, data: any, timeout?: number): Promise<any>;
        /**
         * @zh
         * http GET 数据
         *
         * @param url - URL
         * @param timeout - 可选，自定义超时时间
         *
         * @return Promise<string>
         */
        function get(url: string, timeout?: number): Promise<string>;
        /**
         * @zh
         * http GET JSON数据
         *
         * @param url - URL
         * @param timeout - 可选，自定义超时时间
         *
         * @return Promise<[JSON]>
         */
        function getJson(url: string, timeout?: number): Promise<any>;
    }
}
declare namespace lcc {
    namespace asset {
        /**
         * @zh
         * 加载资源包
         *
         * @param nameOrUrl - 包名或者URL路径
         */
        function loadBundle(nameOrUrl: string): Promise<cc.AssetManager.Bundle>;
        /**
         * @zh
         * 加载远程精灵帧
         *
         * @param surl - 精灵帧URL路径
         * @param ext - 图片后缀, 例如 .png .jpg 等。如果路径没有后缀，则必须指定该后缀
         */
        function loadRemoteSpriteFrame(surl: string, ext?: string): Promise<cc.SpriteFrame>;
        /**
         * @zh
         * 通过UUID获得资源
         *
         * @param uuid - UUID字符串
         */
        function getAssetByUUID<T extends cc.Asset>(uuid: string): Promise<T>;
        /**
         * @zh
         * 加载json文件
         *
         * @param jgPath - JSON文件包路径
         * @param bundle - 包对象
         */
        function loadJson(jpPath: string, bundle?: cc.AssetManager.Bundle): Promise<any>;
        /**
         * @zh
         * 加载音频
         *
         * @param apPath - 音频文件包路径
         * @param bundle - 包对象
         */
        function loadAudio(apPath: string, bundle?: cc.AssetManager.Bundle): Promise<cc.AudioClip>;
        /**
         * @zh
         * 加载预制件
         *
         * @param ppPath 预制件包路径
         * @param bundle - 包对象
         */
        function loadPrefab(ppPath: string, bundle?: cc.AssetManager.Bundle): Promise<cc.Prefab>;
        /**
         * @zh
         * 加载精灵帧
         *
         * @param sfgPath 精灵帧包路径
         * @param bundle - 包对象
         */
        function loadSpriteFrame(sfpPath: string, bundle?: cc.AssetManager.Bundle): Promise<cc.SpriteFrame>;
        /**
         * @zh
         * 加载ttf字体
         *
         * @param ttfgPath - 字体文件全局路径
         * @param bundle - 包对象
         */
        function loadTTFFont(ttfpPath: string, bundle?: cc.AssetManager.Bundle): Promise<cc.TTFFont>;
        /**
         * @zh
         * 获得资源的url
         *
         * @param agPath 资源包路径
         * @param bundle - 包对象
         */
        function getAssetUrl(apPath: string, bundle?: cc.AssetManager.Bundle): Promise<string>;
    }
}
declare namespace lcc {
    /**
     * @zh
     * 真实文件路径
     */
    export interface RealFilePath {
        /**
         * @zh
         * 真实路径
         */
        rpath: string;
        /**
         * @zh
         * 资源包
         */
        bundle?: cc.AssetManager.Bundle;
    }
    /**
     * @zh
     * 包管理器
     */
    class PackManager extends cc.EventTarget {
        /**
         * @zh
         * 包映射表
         */
        private _packs;
        /**
         * @zh
         * 构造函数
         */
        constructor();
        /**
         * @zh
         * 获得指定包
         *
         * @param name - 包名称
         */
        getPack(name: string): PackLoader;
        /**
         * @zh
         * 加载包
         *
         * @param nameOrUrl - 包名称或者URL路径
         */
        loadPack(nameOrUrl: string): Promise<PackLoader>;
        /**
         * @zh
         * 释放包
         *
         * @param name - 包名称
         */
        releasePack(name: string): Promise<void>;
        /**
         * @zh
         * 释放所有包
         */
        releaseAllPacks(): Promise<void>;
        /**
         * @zh
         * 解析资源路径
         *
         * @param aPath - 资源路径
         */
        parseAssetPath(aPath: string): RealFilePath;
        /**
         * @zh
         * 加载json文件
         *
         * @param jgPath - JSON文件全局路径
         */
        loadJson(jgPath: string): Promise<any>;
        /**
         * @zh
         * 加载音频
         *
         * @param agPath - 音频文件全局路径
         */
        loadAudio(agPath: string): Promise<cc.AudioClip>;
        /**
         * @zh
         * 加载预制件
         *
         * @param pfile 预制件全局路径
         */
        loadPrefab(pgPath: string): Promise<cc.Prefab>;
        /**
         * @zh
         * 加载精灵帧
         *
         * @param sfgPath 精灵帧全局路径
         */
        loadSpriteFrame(sfgPath: string): Promise<cc.SpriteFrame>;
        /**
         * @zh
         * 加载ttf字体
         *
         * @param ttfgPath - 字体文件全局路径
         */
        loadTTFFont(ttfgPath: string): Promise<cc.TTFFont>;
        /**
         * @zh
         * 获得资源的url
         *
         * @param agPath 资源文件全局路径
         */
        getAssetUrl(agPath: string): Promise<string>;
    }
    /**
     * @zh
     * 包管理器对象
     */
    export const packMgr: PackManager;
    export {};
}
declare namespace lcc {
    /**
     * @zh
     * 下载远程配置`remoteconfig`文件的超时时间
     */
    let REMOTE_CONFIG_TIMEOUT: number;
    /**
     * @zh
     * 读取配置文件
     *
     * @param fileUrl 配置文件URL
     */
    function readConfigFile(fileUrl: string): Promise<any>;
}
declare namespace lcc {
    /**
     * @zh
     * 索引路径冲突
     */
    export let ERROR_INDEX_PATH_CONFLICT: boolean;
    /**
     * @zh
     * 索引管理器<br/>
     * 管理游戏中的公用资源索引
     */
    class IndexManager extends cc.EventTarget {
        /**
         * @zh
         * 包优先级
         */
        private _packPriority;
        /**
         * @zh
         * 包索引表
         */
        private _packIndexs;
        /**
         * @zh
         * 全局索引表
         */
        private _indexes;
        /**
         * @zh
         * 构造索引管理器
         */
        constructor();
        /**
         * @zh
         * 合并Map表<br/>
         * Map表合并规则：<br/>
         * 遍历源Map表字段，对比目的Map表对应字段，存在几种情况：<br/>
         * 1、目的Map表中不存在该字段，直接设置为源Map表字段<br/>
         * 2、目的Map表字段和源Map表字段同为数组(Array)，把字段的源Map表数组复制到目的Map表数组中<br/>
         * 3、目的Map表字段和源Map表字段同为对象(Object)，以字段的目的Map表和源Map表为参数再次调用次函数<br/>
         * 4、其他情况，说明存在冲突。警告后，源Map表字段直接覆盖目的Map表字段
         *
         * @param dmap - 目的Map表
         * @param smap - 源Map表
         * @param listen - 是否监听
         * @param ipath - 文件路径
         */
        private mergeTable;
        /**
         * @zh
         * 重构索引
         */
        private rebuildIndexes;
        /**
         * @zh
         * 获得指定索引
         *
         * @param path - 索引路径
         */
        getIndex(path: string): any;
        /**
         * @zh
         * 加载包索引表
         *
         * @param pname - 包名称
         */
        loadPackIndexes(pname: string): Promise<void>;
        /**
         * @zh
         * 移除包索引表
         *
         * @param pname - 包名称
         */
        removePackIndexes(pname: string): void;
        /**
         * @zh
         * 通知索引被移除
         *
         * @param indexes - 移除的包索引表
         * @param ipath - 当前索引路径
         */
        private notifyIndexesRemoved;
    }
    /**
     * @zh
     * 索引管理器对象
     */
    export const indexMgr: IndexManager;
    export {};
}
declare namespace lcc {
    /**
     * 索引路径
     */
    export namespace INDEXPATH {
        /**
         * 音频
         */
        let AUDIO: string;
    }
    /**
     * 默认全局BGM音量
     */
    export let DEFAULT_BGM_VOLUME: number;
    /**
     * 默认全局SE音量
     */
    export let DEFAULT_SE_VOLUME: number;
    /**
     * @zh
     * 音频管理器
     */
    class AudioManager {
        /**
         * 音频配置
         */
        private _audioConfigs;
        /**
         * 全局BGM音量
         */
        private _BGMVolume;
        /**
         * 全局SE音量
         */
        private _SEVolume;
        /**
         * 当前BGM
         */
        private _nowBGM;
        /**
         * 当前BGM的ID
         */
        private _nowBGMID;
        /**
         * 构造数据库管理器
         */
        constructor();
        onIndexesRemoved(): void;
        /**
         * 释放无效音频
         */
        releaseInvalidAudios(): void;
        /**
         * 获取所有音频
         */
        getAllAudios(): string[];
        /**
         * 释放指定音频
         * @param aname
         * @param preload 预加载的也释放
         */
        releaseAudio(aname: string, preload?: boolean): void;
        /**
         * 释放音频数组
         * @param preload
         */
        releaseAudios(anames: string[], preload?: boolean): void;
        /**
         * 预加载指定音频
         * @param aname
         */
        preloadAudio(aname: string): Promise<void>;
        /**
         * 预加载音频数组
         */
        preloadAudios(anames: string[], progress?: (p: number) => void): Promise<void>;
        /**
         * 设置 BGM 音量
         */
        setBgmVolume(volume: number): Promise<void>;
        /**
         * 获得 BGM 音量
         */
        getBgmVolume(): number;
        /**
         * 设置 SE 音量
         */
        setSeVolume(volume: number): void;
        /**
         * 获得 SE 音量
         */
        getSeVolume(): number;
        /**
         * 获得当前的BGM
         */
        getNowBGM(): string;
        /**
         * 播放背景音乐
         * @param aname 音频名称
         * @param loop 是否循环
         */
        playBGM(aname: string, loop?: boolean): Promise<number>;
        /**
         * 停止当前BGN
         */
        stopBGM(): void;
        /**
         * 播放音效
         * @param aname 音频名称
         */
        playSE(aname: string): Promise<number>;
        /**
         * 直到音频播放完成
         * @param aid 音频播放ID
         */
        untilFinish(aid: number): Promise<unknown>;
        /**
         * 获得音频配置
         * @param aname 音频名称
         */
        private getAudioConfig;
    }
    /**
     * 音频管理器
     */
    export const audioMgr: AudioManager;
    export {};
}
declare namespace lcc {
    /**
     * @zh
     * 配置对象映射表<br/>
     * 在加载完对应配置后，可以直接通过这个变量访问配置数据<br/>
     * ```
     *      lcc.configMgr.loadConfigFile('asset://resources/config/test');
     *      let testConfig = CONFIGS.test;      // 方式1
     *      let testConfig = CONFIGS['test'];   // 方式2
     * ```
     */
    export let CONFIGS: {
        [key: string]: any;
    };
    /**
     * @zh
     * 加载配置选项
     */
    export interface LoadConfigOption {
        /**
        * @zh
        * 配置名称<br/>
        * 可以修改配置加载后的名称<br/>
        * 如果没有指定，则会使用配置文件的名作为配置名
        */
        configName?: string;
        /**
        * @zh
        * 合并当前配置<br/>
        * 如果`CONFIGS`中存在当前名称的配置，那么会把当前配置合并到原有配置上<br/>
        * 否则，当前配置会替换原有存在配置
        */
        merge?: boolean;
    }
    /**
     * @zh
     * 配置管理器<br/>
     * 主要用于管理程序的配置对象<br/>
     * 配置对象在加载时会进行以下处理:<br/>
     * 1、替换配置对象字符串中的`${...}`变量值。变量值可以通过`setVariable`设置，其中`localpath`为固有值，表示当前文件目录。<br/>
     * 2、替换配置对象健中以`@`开始的引用字段。其值表示引用路径，比如`http://localhost/test.json`表示网络文件, `asset://resources/test`表示resources包中的test.json文件。
     * 会以引用文件的内容(这里是JSON对象)替换当前字段的值，并且去掉健中的`@`符号。<br/>
     * 例如：<br/>
     * 存在网络文件http://localhost/test.json，内容为；<br/>
     * ```
     * {
     *      "type" : "remote file"
     * }
     * ```
     * 存在资源文件asset://resources/test (resources包中的test.json文件)，内容为；<br/>
     * ```
     * {
     *      "type": "asset file"
     * }
     * ```
     * 存在本地配置文件asset://resources/config (resources包中的config.json文件)，内容为；<br/>
     * ```
     * {
     *      "config" : "config file",
     *      "@remote" : "http://localhost/test.json",
     *      "@asset" : "${localpath}/test"
     * }
     * ```
     * 那么，使用`lcc.configMgr.loadConfigFile('asset://resources/config')`后，<br/>
     * 使用lcc.configMgr.getConfig('config')内容如下；<br/>
     * ```
     * {
     *      "config" : "config file",
     *      "remote" : {
     *          "type" : "remote file"
     *      },
     *      "asset" :  {
     *          "type" : "asset file"
     *      }
     * }
     * ```
     * 可以看出config加载时，通过网络替换引用`@remote`，解析变量`localpath`拼接test.json路径并替换引用`@asset`<br/>
     */
    class ConfigManager {
        /**
         * @zh
         * 构造函数
         */
        constructor();
        /**
         * @zh
         * 获得所有配置<br/>
         * 也可以直接使用`CONFIGS`
         */
        getConfigs(): {
            [key: string]: any;
        };
        /**
         * @zh
         * 获得对应配置<br/>
         * 也可以直接使用`CONFIGS[key]`
         */
        getConfig<T = any>(key: string): T;
        /**
         * @zh
         * 移除指定配置<br/>
         *
         * @param cname - 配置名称
         */
        removeConfig(cname: string): void;
        /**
         * @zh
         * 移除所有配置
         */
        removeAllConfigs(): void;
        /**
         * @zh
         * 加载配置文件<br/>
         * 用法：<br/>
         * ```
         * 		// 加载resources目录下的配置
         * 		lcc.configMgr.loadConfig('asset://resources/config/test');
         * 		// 获得加载的配置
         * 		lcc.configMgr.getConfig('test');
         *
         * 		// 加载resources目录下的配置，并且重置名称
         * 		lcc.configMgr.loadConfig('asset://resources/config/test', 'newtest');
         * 		// 获得加载的配置
         * 		lcc.configMgr.getConfig('newtest');
         *
         * 		// 加载game子包下的配置，并且重置名称。如果有相同配置，则合并
         * 		lcc.configMgr.loadConfig('asset://game/config/test', { name : 'newtest', merge : true });
         * 		// 获得加载的配置
         * 		lcc.configMgr.getConfig('newtest');
         * ```
         *
         * @param jfile - JSON文件路径
         * @param nameOrOption - 配置名称或者选项
         */
        loadConfigFile(jfile: string, nameOrOption?: string | LoadConfigOption): Promise<void>;
    }
    /**
     * @zh
     * 配置管理器对象
     */
    export const configMgr: ConfigManager;
    export {};
}
declare namespace lcc {
    /**
     * @zh
     * 索引路径
     */
    export namespace INDEXPATH {
        /**
         * @zh
         * 字体
         */
        let FONT: string;
        /**
         * @zh
         * 语言
         */
        let LANG: string;
    }
    /**
     * @zh
     * 默认语言
     */
    export let DEFAULT_LANGUAGE: string;
    /**
     * @zh
     * 多语言文本
     */
    export class LangText {
        /**
         * @zh
         * 使用富文本
         */
        useRichText: boolean;
        /**
         * @zh
         * 关联标签
         */
        label: cc.Label;
        /**
         * @zh
         * 关联富文本
         */
        richText: cc.RichText;
        /**
         * @zh
         * 关联键
         */
        key: string;
        /**
         * @zh
         * 关联文本参数
         */
        args: string;
    }
    /**
     * @zh
     * 多语言图片
     */
    export class LangImage {
        /**
         * @zh
         * 关联精灵
         */
        image: cc.Sprite;
        /**
         * @zh
         * 关联键
         */
        key: string;
    }
    /**
     * @zh
     * 语言管理器<br/>
     * 管理多语言与其字体
     */
    class LangManager extends cc.EventTarget {
        /**
         * @zh
         * 字体缓冲
         */
        private _fontBuff;
        /**
         * @zh
         * 图片缓冲
         */
        private _imageBuff;
        /**
         * @zh
         * 语言配置表
         */
        private _langConfig;
        /**
         * @zh
         * 当前语言
         */
        private _nowLang;
        /**
         * @zh
         * 多语言组映射表
         */
        private _langGroupMap;
        /**
         * @zh
         * 构造管理器
         */
        constructor();
        /**
         * @internal
         */
        private reloadNowLanguage;
        /**
         * @zh
         * 当索引加载
         *
         * @param ivalue 索引路径对象
         */
        private onLangIndexesLoaded;
        /**
         * @zh
         * 移除无效的缓冲
         */
        removeInvalidBuff(): void;
        /**
         * @zh
         * 合并表<br/>
         * 合并规则与[[js.mergeMap]]一致
         *
         * @param table - 新表对象
         * @param tfile - 文件路径
         */
        private loadTable;
        /**
         * @zh
         * 加载前置配置
         */
        loadPreposeLangs(): Promise<void>;
        /**
         * @zh
         * 设置并更新语言
         *
         * @param lang - 语言名称
         * @param deflang - 可选，默认语言
         */
        setLanguage(lang: string): Promise<void>;
        /**
         * @zh
         * 获得当前语言
         */
        getLanguage(): string;
        /**
         * @zh
         * 获得语言列表
         */
        getLanguageList(): string[];
        /**
         * @zh
         * 更新所有语言组
         */
        private updateAllLangGroup;
        /**
         * @zh
         * 更新指定语言组
         *
         * @param group - 组名称
         */
        private updateLangGroup;
        /**
         * @zh
         * 更新文本
         *
         * @param target - 目标对象
         * @param key - 关联文本key
         * @param args - 文本参数
         */
        updateText(target: cc.Label | cc.RichText, key: string, ...args: any[]): Promise<void>;
        /**
         * @zh
         * 获得字体
         *
         * @param fname - 字体名称
         */
        private getFont;
        /**
         * @zh
         * 更新图片
         *
         * @param target - 目标对象
         * @param key - 关联图片key
         */
        updateImage(target: cc.Sprite, key: string): Promise<void>;
        /**
         * @zh
         * 获得语言图片
         *
         * @param fpath - 语言图片路径
         */
        private getLangImage;
        /**
         * @zh
         * 添加语言组<br/>
         * 配套组件使用
         *
         * @param group - 组名称
         * @param texts - 文本组
         * @param images - 图片组
         */
        _addLangGroup(group: string, texts?: LangText[], images?: LangImage[]): Promise<void>;
        /**
         * @zh
         * 移除语言组<br/>
         * 配套组件使用
         *
         * @param group - 组名称
         */
        _removeLangGroup(group: string): void;
        /**
         * @zh
         * 增加语言更新中计数
         */
        addLangUpdating(): void;
        /**
         * @zh
         * 减少语言更新中计数
         */
        decLangUpdating(): void;
        /**
         * @zh
         * 获得当前语言文本
         *
         * @param key - 关联key
         * @param args - 参数数组
         */
        getText(key: string, ...args: any[]): string;
        /**
         * @zh
         * 获得当前语言图片
         *
         * @param key - 关联key
         */
        getImage(key: string): Promise<cc.SpriteFrame>;
        /**
         * @zh
         * 获得图片的路径
         *
         * @param key - 关联key
         */
        getImageUrl(key: string): Promise<string>;
    }
    /**
     * @zh
     * 语言管理器对象
     */
    export const langMgr: LangManager;
    export {};
}
declare namespace lcc {
    /**
     * @zh
     * 多语言绑定组件
     */
    class MultipleLanguages extends cc.Component {
        langTexts: LangText[];
        langImages: LangImage[];
        onLoad(): void;
        onDestroy(): void;
    }
}
declare namespace lcc {
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
        DEBUG = 2,
        /**
         * @zh
         * 信息日志
         */
        INFO = 3,
        /**
         * @zh
         * 警告日志
         */
        WARN = 4,
        /**
         * @zh
         * 错误日志
         */
        ERROR = 5,
        /**
         * @zh
         * 寂静, 用于关闭日志
         */
        SILENT = 6
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
        level?: LOGLEVEL;
        /**
         * @zh
         * 标签
         */
        tag?: string;
        /**
         * @zh
         * 内容
         */
        content?: string;
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
        logs: string[];
        /**
         * @zh
         * 日志大小
         */
        size: number;
    }
    /**
     * @zh
     * 最大日志缓冲 默认1M
     */
    export let LOG_BUFFERSIZE: number;
    /**
     * @zh
     * 日志默认存放路径<br/>
      * *原生平台有效*
     */
    export let LOG_PATH: string;
    /**
     * @zh
     * 生成的日志文件名，不含后缀<br/>
     * *原生平台有效*
     */
    export let LOG_FILENAME: string;
    /**
     * @zh
     * 开启单个日志文件<br/>
     * 开启后所有输出都会追加到这个文件中<br/>
     * *原生平台有效*
     */
    export let LOG_SINGLE: boolean;
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
        private static _instance;
        /**
         * @zh
         * 获取单例对象
         */
        static getInstance(): LogManager;
        /**
         * @zh
         * 日志输出等级<br>
         * 只有不小于该等级的日志会被输出和保存<br/>
         * 保存不一定是及时的，有缓冲区
         */
        private _logLevel;
        /**
         * @zh
         * 日志缓冲保存等级<br/>
         * 如果收到不小于该等级的日志会立刻保存
         */
        private _flushLevel;
        /**
         * @zh
         * 日志缓冲大小
         */
        private _buffSize;
        /**
         * @zh
         * 日志缓冲
         */
        private _logBuff;
        /**
         * @zh
         * 日志文件
         */
        private _logFile;
        /**
         * @zh
         * 日志格式化函数
         */
        private _logFormat;
        /**
         * @zh
         * 构造函数
         */
        constructor();
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
        private onError;
        /**
         * @zh
         * 获得日志文件<br/>
         * 如果使用`LOG_SINGLE`单日志文件，那么始终获得同一个日志文件<br/>
         * 否则，每一次启动程序，日志文件名称都会加上时间标记
         */
        getLogFile(): string;
        /**
         * @zh
         * 设置日志输出等级
         *
         * @param level - 日志等级
         */
        setLogLevel(level: LOGLEVEL): void;
        /**
         * @zh
         * 设置缓冲区保存等级
         *
         * @param level - 日志等级
         */
        setFlushLevel(level: LOGLEVEL): void;
        /**
         * @zh
         * 设置日志缓冲区大小
         *
         * @param size - 大小，字节数
         */
        setBufferSize(size: number): void;
        /**
         * @zh
         * 设置日志格式化函数<br/>
         * 如果设置为'null'，那么会使用默认的格式化函数
         *
         * @param format - 自定义格式化函数
         */
        setLogFormat(format?: (params: LogParams) => string): void;
        /**
         * @zh
         * 默认日志格式化函数
         *
         * @param params - 日志参数
         */
        private defaultLogFormat;
        /**
         * @zh
         * 写入日志<br/>
         * 根据`日志输出等级`，决定是否输出日志<br/>
         * 根据`缓冲保存等级`，决定是否立即保存日志
         *
         * @param params - 日志参数
         */
        writeLog(params: LogParams): void;
        /**
         * @zh
         * 保存日志缓冲<br/>
         * 如果需要马上在日志文件上看到输出，可以手动调用
         */
        flushLog(): void;
        /**
         * @zh
         * 输出 VERBOSE 日志
         */
        verbose(tagOrParams: string | LogParams, msg: string, ...args: any[]): void;
        /**
         * @zh
         * 输出 DEBUG 日志
         */
        debug(tagOrParams: string | LogParams, msg: string, ...args: any[]): void;
        /**
         * @zh
         * 输出 INFO 日志
         */
        info(tagOrParams: string | LogParams, msg: string, ...args: any[]): void;
        /**
         * @zh
         * 输出 WARN 日志
         */
        warn(tagOrParams: string | LogParams, msg: string, ...args: any[]): void;
        /**
         * @zh
         * 输出 ERROR 日志
         */
        error(tagOrParams: string | LogParams, msg: string, ...args: any[]): void;
    }
    /**
     * @zh
     * 日志管理器对象
     */
    export const logMgr: LogManager;
    export {};
}
declare namespace lcc {
    /**
     * @zh
     * 网络线模式
     */
    enum NetLineMode {
        /**
         * @zh
         * 客户端
         */
        CLIENT = 1,
        /**
         * @zh
         * 服务器
         */
        SERVER = 2,
        /**
         * @zh
         * 连接-服务器收到的连接
         */
        CONNECT = 3
    }
    /**
     * @zh
     * 网络线基类<br/>
     * 基本属性、网络数据的缓冲和发送操作等
     */
    class NetLine extends cc.EventTarget {
        /**
         * @zh
         * 网络线类型表
         */
        private static __types;
        /**
         * @zh
         * 网络线名称
         */
        protected _name: string;
        /**
         * @zh
         * 网络线模式
         */
        protected _mode: NetLineMode;
        /**
         * @zh
         * 网络线类型
         */
        protected _type: number;
        /**
         * @zh
         * 使用ProtoBuff
         */
        protected _useProtoBuff: boolean;
        /**
         * @zh
         * 自动发送
         */
        protected _autoSend: boolean;
        /**
         * @zh
         * 发送缓冲
         */
        protected _sendCaches: ProtocolData[];
        /**
         * @zh
         * 自动分发
         */
        protected _autoDispatch: boolean;
        /**
         * @zh
         * 分发缓冲
         */
        protected _dispatchCaches: ProtocolData[];
        /**
         * @zh
         * 注册网络线类型
         *
         * @param netType - 网络类型枚举
         * @param value - 网络类型对象
         */
        static registerNetType(netType: number, value: typeof NetLine): void;
        /**
         * @zh
         * 获得网络类型对象
         *
         * @param netType - 网络类型枚举
         */
        static getNetType(netType: number): typeof NetLine;
        /**
         * @zh
         * 构造函数
         * @param name - 名称
         * @param mode - 模式
         * @param type - 类型
         */
        constructor(name: string, mode: NetLineMode, type: number);
        /**
         * @zh
         * 配置网络线<br/>
         * 子类中应该重写该函数
         *
         * @param config - 不同类型的网络线有不同的配置
         */
        config(config: any): void;
        /**
         * @zh
         * 检查网络线是否有效<br/>
         * 子类中应该重写该函数
         *
         * @returns 如果无效，有些操作可能不会执行
         */
        isValid(): boolean;
        /**
         * @zh
         * 打开网络线<br/>
         * 子类中应该重写该函数
         */
        open(): Promise<boolean>;
        /**
         * @zh
         * 关闭网络线<br/>
         * 子类中应该重写该函数
         */
        close(): void;
        /**
         * @zh
         * 更新网络线<br/>
         * 子类中应该重写该函数
         *
         * @param dt 间隔时间
         */
        onUpdate(dt: number): void;
        /**
         * @zh
         * 发送网络数据<br/>
         * 子类中应该重写该函数
         *
         * @param data - 网络数据
         */
        protected sendNetData(data: NetData): void;
        /**
         * @zh
         * 获得网络线名称
         */
        getName(): string;
        /**
         * @zh
         * 获得模式
         */
        getMode(): NetLineMode;
        /**
         * @zh
         * 获得类型
         */
        getType(): number;
        /**
         * @zh
         * 设置是否使用ProtoBuff
         *
         * @param use - 是否使用ProtoBuff
         */
        useProtoBuff(use: boolean): void;
        /**
         * @zh
         * 检查是否使用ProtoBuff
         */
        isUseProtoBuff(): boolean;
        /**
         * @zh
         * 自动发送使能<br/>、
         * `自动发送`的意思是：如果`writeProtocol`写入协议后，会立刻发送出去
         *
         * @param psend - 是否自动发送
         */
        autoSend(pwrite: boolean): void;
        /**
         * @zh
         * 自动分发使能<br/>、
         * `自动发送`的意思是：如果接收到网络数据协议后，是否立刻`emit`到注册的协议事件
         *
         * @param dispatch - 是否自动分发
         */
        autoDispatch(dispatch: boolean): void;
        /**
         * @zh
         * 压入发送缓存
         *
         * @param datas - 协议数据
         */
        pushSendCaches(datas: ProtocolData[]): void;
        /**
         * @zh
         * 压入分发缓存
         *
         * @param datas - 协议数据
         */
        pushDispatchCaches(datas: ProtocolData[]): void;
        /**
         * @zh
         * 弹出发送缓冲<br/>
         * 会返回并清空发送缓冲
         *
         * @returns 协议数据
         */
        protected popSendCaches(): ProtocolData[];
        /**
         * @zh
         * 输出发送缓冲<br/>
         * 当网络线无效或者没有数据时，除非使用`force`，否则不能执行发送操作
         *
         * @param force - 如果当前网络线无效，也强制输出(最终结果可能是丢弃所有数据)
         */
        flushSendCaches(force?: boolean): void;
        /**
         * @zh
         * 输出分发缓冲<br/>
         * 分发处理缓冲中的网络数据
         */
        protected flushDispatchCaches(): void;
        /**
         * @zh
         * 写入网络线数据
         *
         * @param type - 数据类型
         * @param data - 数据对象
         */
        protected writeNetLineData<T>(type: netdata.NetDataType, data?: T): void;
        /**
         * @zh
         * 写入协议<br/>
         * 协议是最基本的通信数据，它由`cmd`标记数据的类型，和`data`包含具体内容组成
         *
         * @param cmd - 命令
         * @param data - 数据
         */
        writeProtocol<T>(cmd: number, data?: T): void;
    }
}
declare namespace lcc {
    /**
     * @zh
     * 网络客户端tick时间<br/>
     * 客户端上[[NetLine.onUpdate]]的基准时间
     */
    export let NETCLIENT_TICKTIME: number;
    /**
     * @zh
     * 网络客户端映射表
     */
    export let NETCLIENTS: {
        [key: string]: NetLine;
    };
    /**
     * @zh
     * 网络客户端管理<br/>
     * 主动发起连接端的管理
     */
    class NetClient extends cc.EventTarget {
        /**
         * @zh
         * 是否使用网络心跳
         */
        private _useNetHeart;
        /**
         * @zh
         * WSS 配置
         */
        private _WSSConfig;
        /**
         * @zh
         * 构造函数
         */
        constructor();
        /**
         * @zh
         * 设置WSS 配置
         *
         * @param protocol - 协议
         * @param cert - 证书
         */
        setWSSConfig(protocol: string, cert: string): void;
        /**
         * @zh
         * 获得WSS 配置
         */
        getWSSConfig(): {
            protocol: string;
            cert: string;
        };
        /**
         * @zh
         * 安装心跳
         */
        private setupHeartTick;
        /**
         * @zh
         * 删除心跳
         */
        private deleteHeartTick;
        /**
         * @zh
         * 当心跳回调
         *
         * @param dt 间隔时间，一般为[[NETCLIENT_TICKTIME]]
         */
        private onHeartTick;
        /**
         * 添加客户端<br/>
         * 这里只是添加客户端，如果你需要启动客户端，应该手动调用`open`<br/>
         * ```
         *      let client = lcc.netClient.addClient(...);
         *      if(client){
         *          // 打开客户端，一般是向服务器发送连接请求
         *          client.open();
         *      }
         * ```
         *
         * @param name - 名称
         * @param type - 类型
         * @param config - 配置
         */
        addClient(name: string, type: number, config?: {
            [key: string]: any;
        }): NetLine;
        /**
         * @zh
         * 获得网络客户端
         *
         * @param name 名称
         *
         * @returns 客户端对象
         */
        getClient(name: string): NetLine;
        /**
         * @zh
         * 移除网络客户端
         *
         * @param name 名称
         */
        removeClient(name: string): void;
        /**
         * @zh
         * 移除所有客户端
         */
        removeAllClients(): void;
    }
    /**
     * @zh
     * 网络客户端管理实例
     */
    export const netClient: NetClient;
    export {};
}
declare namespace lcc {
    namespace js {
        /**
         * @zh
         * 缓冲读取对象
         */
        class BufferReader {
            /**
             * @zh
             * 缓冲对象
             */
            protected _buffer: ArrayBuffer;
            /**
             * @zh
             * 视图
             */
            protected _view: DataView;
            /**
             * @zh
             * 当前索引
             */
            protected _index: number;
            /**
             * @zh
             * 缓冲容量
             */
            protected _capacity: number;
            /**
             * @zh
             * 构造缓冲读取类
             *
             * @param buffer - 缓冲实体
             * @param index - 当前索引
             * @param capacity - 当前容量
             */
            constructor(buffer: ArrayBuffer, index?: number, capacity?: number);
            /**
             * @zh
             * 跳过长度字节
             *
             * @param count - 字节数
             */
            skip(count: number): void;
            /**
             * @zh
             * 缓冲区对齐
             *
             * @param size - 对齐大小
             */
            alignment(size: number): void;
            /**
             * @zh
             * 读取 Byte
             */
            readByte(): number;
            /**
             * @zh
             * 读取 unsigned Byte
             */
            readUByte(): number;
            /**
             * @zh
             * 查看 Byte
             */
            peekByte(): number;
            /**
             * @zh
             * 查看 unsigned Byte
             */
            peekUByte(): number;
            /**
             * @zh
             * 读取 Short
             */
            readShort(): number;
            /**
             * @zh
             * 读取 unsigned Short
             */
            readUShort(): number;
            /**
             * @zh
             * 查看 Short
             */
            peekShort(): number;
            /**
             * @zh
             * 查看 unsigned Short
             */
            peekUShort(): number;
            /**
             * @zh
             * 读取 Long
             */
            readLong(): number;
            /**
             * @zh
             * 读取 unsigned Long
             */
            readULong(): number;
            /**
             * @zh
             * 查看 Long
             */
            peekLong(): number;
            /**
             * @zh
             * 查看 unsigned Long
             */
            peekULong(): number;
            /**
             * @zh
             * 读取 Float
             */
            readFloat(): number;
            /**
             * @zh
             * 查看 Float
             */
            peekFloat(): number;
            /**
             * @zh
             * 读取 Double
             */
            readDouble(): number;
            /**
             * @zh
             * 查看 Double
             */
            peekDouble(): number;
            /**
             * @zh
             * 读取字符串，使用utf16le
             */
            readString(): any;
            /**
             * @zh
             * 缓冲区索引
             */
            getIndex(): number;
            /**
             * @zh
             * 缓冲区剩余大小
             */
            getRemainSize(): number;
            /**
             * @zh
             * 空闲缓冲大小
             */
            getEmptySize(): number;
            /**
             * @zh
             * 读取数据
             *
             * @param count - 大小
             */
            readData(count: number): ArrayBuffer;
            /**
             * @zh
             * 查看数据
             *
             * @param count - 大小
             */
            peekData(count: number): ArrayBuffer;
        }
        /**
         * @zh
         * 缓冲写入对象
         */
        class BufferWriter {
            /**
             * @zh
             * 缓冲数组
             */
            private _buffers;
            /**
             * @zh
             * 缓冲大小
             */
            private _size;
            /**
             * @zh
             * 获得缓冲大小
             */
            getSize(): number;
            /**
             * @zh
             * 填充指定数量的字符
             *
             * @param count - 字节数
             * @param char - 数值
             */
            fill(count: number, char: number): void;
            /**
             * @zh
             * 缓冲区对齐
             *
             * @param size - 对齐字节数
             * @param char - 填充数值
             */
            alignment(size: any, char: any): void;
            /**
             * @zh
             * 写入 Byte
             *
             * @param byte - 数据
             */
            writeByte(byte: number): void;
            /**
             * @zh
             * 写入 unsigned Byte
             *
             * @param byte - 数据
             */
            writeUByte(byte: number): void;
            /**
             * @zh
             * 写入 Short
             *
             * @param Short - 数据
             */
            writeShort(short: number): void;
            /**
             * @zh
             * 写入 unsigned Short
             *
             * @param Short - 数据
             */
            writeUShort(short: number): void;
            /**
             * @zh
             * 写入 Long
             *
             * @param Long - 数据
             */
            writeLong(long: number): void;
            /**
             * @zh
             * 写入 unsigned Long
             *
             * @param Long - 数据
             */
            writeULong(long: number): void;
            /**
             * @zh
             * 写入 unsigned Float
             *
             * @param Float - 数据
             */
            writeFloat(float: number): void;
            /**
             * @zh
             * 写入 unsigned Double
             *
             * @param Double - 数据
             */
            writeDouble(double: number): void;
            /**
             * @zh
             * 写入数据
             *
             * @param buffer - 缓冲
             */
            writeData(buffer: ArrayBuffer): void;
            /**
             * @zh
             * 写入UTF16LE字符串
             *
             * @param str - 字符串
             */
            writeString(str: string): void;
            /**
             * @zh
             * 清空缓冲
             */
            clear(): void;
            /**
             * @zh
             * 获得数据
             *
             * @returns 最终的Buffer数据
             */
            getData(): ArrayBufferLike;
        }
        /**
         * @zh
         * 流缓冲读取类<br/>
         * 在[[BufferReader]]基础上添加了追加缓冲功能
         */
        class StreamReader extends BufferReader {
            /**
             * @zh
             * 构造函数
             *
             * @param basesize 基础大小
             */
            constructor(basesize: number);
            /**
             * @zh
             * 清空缓冲区
             */
            clear(): void;
            /**
             * @zh
             * 追加缓冲
             *
             * @param buffer - 缓冲对象
             */
            append(buffer: ArrayBuffer): void;
        }
    }
}
declare namespace lcc {
    /**
     * @zh
     * 数据包装器
     */
    interface DataPacker<T = any> {
        /**
         * @zh
         * 打包数据
         *
         * @param wBuff - 缓冲写入器
         * @param data - 数据对象
         */
        pack(wBuff: js.BufferWriter, data: T): void;
        /**
         * @zh
         * 解包数据
         *
         * @param rBuff - 缓冲读取器
         */
        unpack(rBuff: js.BufferReader): T;
    }
    /**
     * @zh
     * 协议接口
     */
    interface ProtobufInterface {
        /**
         * @zh
         * 判断是否存在协议
         *
         * @param command - 命令号
         */
        hasProtocol(command: number): boolean;
        /**
         * @zh
         * 打包协议
         *
         * @param wBuff - 写入缓冲
         * @param command - 命令号
         * @param data - 数据
         */
        packProtocol<T>(wBuff: js.BufferWriter, command: number, data: T): void;
        /**
         * @zh
         * 解包协议
         *
         * @param rBuff - 读取缓冲
         * @param command - 命令号
         */
        unpackProtocol<T>(rBuff: js.BufferReader, command: number): T;
    }
    /**
     * @zh
     * 内部网络数据<br/>
     * 不要引用他们，除非你知道在干什么
     */
    namespace netdata {
        /**
         * @zh
         * 网络数据类型
         */
        enum NetDataType {
            /**
             * @zh
             * 协议
             */
            PROTOCOLS = 0,
            /**
             * @zh
             * 心跳
             */
            HERT_TICK = 1,
            /**
             * @zh
             * 同步心跳时间
             */
            SYNC_HERTTICK_TIME = 2,
            /**
             * @zh
             * 同步连接ID
             */
            SYNC_CONNECT_ID = 3
        }
        /**
         * @zh
         * 同步心跳时间
         */
        interface SyncHeartTickTime {
            /**
             * @zh
             * 心跳时间
             */
            heartTime: number;
        }
        /**
         * @zh
         * 同步连接ID
         */
        interface SyncConnectID {
            /**
             * @zh
             * 连接ID
             */
            connectID: string;
        }
        /**
         * @zh
         * 网络数据打包器映射表
         */
        const PackerMap: {
            [key: number]: DataPacker;
        };
    }
    /**
     * @zh
     * 协议数据<br/>
     * 协议是最基本的通信数据，它由`cmd`标记数据的类型，和`data`包含具体内容组成
     */
    interface ProtocolData {
        /**
         * @zh
         * 命令号
         */
        cmd: number;
        /**
         * @zh
         * 数据
         */
        data: any;
    }
    /**
     * @zh
     * 网络数据
     */
    interface NetData {
        /**
         * @zh
         * 连接ID<br/>
         * http需要
         */
        connectID?: string;
        /**
         * @zh
         * 类型
         */
        type: netdata.NetDataType;
        /**
         * @zh
         * 数据
         */
        data?: any;
        /**
         * @zh
         * 协议数据表
         */
        protocols?: ProtocolData[];
    }
    /**
     * @zh
     * 协议接口, 内部使用
     */
    let __pbInterface: ProtobufInterface;
    /**
     * @zh
     * 打包网络数据
     *
     * @param netData - 网络数据对象
     * @param netLine - 可选，当前网络线
     */
    function packNetData(data: NetData, netLine?: NetLine): ArrayBuffer;
    /**
     * @zh
     * 解包网络数据
     *
     * @param netBuff - 网络数据缓冲
     */
    function unpackNetData(netBuff: ArrayBuffer): NetData;
}
declare namespace lcc {
    /**
     * protobuf库
     */
    export let __jspb: any;
    /**
     * @zh
     * 消息包装器
     *
     * @param M - 消息类型
     * @param D - 数据类型
     */
    export interface MessagePacker<M = any, D = any> {
        /**
         * @zh
         * 打包数据
         *
         * @param data - 数据对象
         * @return 消息对象
         */
        pack(data: D): M;
        /**
         * @zh
         * 解包数据
         *
         * @param msg - 消息对象
         * @return 数据对象
         */
        unpack(msg: M): D;
    }
    /**
     * @zh
     * 协议配置
     */
    interface Protocol {
        /**
         * @zh
         * 协议消息名称
         */
        msgName: string;
        /**
         * @zh
         * 协议消息类型
         */
        msgType: any;
        /**
         * @zh
         * 所属包
         */
        pack?: string;
    }
    /**
     * @zh
     * Protobuf管理器<br/>
     * 主要管理协议打包器
     */
    class ProtobufManager implements ProtobufInterface {
        /**
         * @zh
         * 协议映射表
         */
        private _protocolMap;
        /**
         * @zh
         * 消息映射表
         */
        private _messageMap;
        /**
         * @zh
         * 构造管理器
         */
        constructor();
        /**
         * @internal
         */
        private onPackReleased;
        /**
         * @zh
         * 判断是否有协议
         *
         * @param command - 命令号
         */
        hasProtocol(command: number): boolean;
        /**
         * @zh
         * 获得协议
         *
         * @param command - 命令号
         */
        getProtocol(command: number): Protocol;
        /**
         * @zh
         * 添加协议
         *
         * @param command - 命令号
         * @param msgName - 消息名称
         * @param msgType - 消息类型
         * @param pack - 所属包
         */
        addProtocol(command: number, msgName: string, msgType: any, pack?: string): void;
        /**
         * @zh
         * 移除协议
         *
         * @param command - 命令号
         */
        removeProtocol(command: number): void;
        /**
         * @zh
         * 打包协议
         *
         * @param wBuff - 写入缓冲
         * @param command - 命令号
         * @param data - 数据
         */
        packProtocol<T>(wBuff: js.BufferWriter, command: number, data: T): void;
        /**
         * @zh
         * 解包协议
         *
         * @param rBuff - 读取缓冲
         * @param command - 命令号
         */
        unpackProtocol<T>(rBuff: js.BufferReader, command: number): any;
        /**
         * @zh
         * 获得消息打包器
         *
         * @param name - 消息名称
         */
        getMessagePacker(name: string): MessagePacker<any, any>;
        /**
         * @zh
         * 添加消息打包器
         *
         * @param name - 消息名称
         * @param packer - 打包器
         * @param pack - 所属包
         */
        addMessagePacker(name: string, packer: MessagePacker, pack?: string): void;
        /**
         * @zh
         * 移除消息打包器
         *
         * @param name - 消息名称
         */
        removeMessagePacker(name: string): void;
        /**
         * @zh
         * 打包消息
         *
         * @param name - 消息名称
         * @param data - 数据
         * @return - 消息对象
         */
        packMessage(name: string, data: any): any;
        /**
         * @zh
         * 解包消息
         *
         * @param name - 消息名称
         * @param msg - 消息对象
         * @return - 数据
         */
        unpackMessage(name: string, msg: any): any;
    }
    /**
     * @zh
     * 协议管理器实例
     */
    export const pbMgr: ProtobufManager;
    export {};
}
declare namespace lcc {
    /**
     * @zh
     * 节点池表
     */
    class NodePools {
        /**
         * @zh
         * 节点池表
         */
        private _pools;
        /**
         * 构造数据库管理器
         */
        constructor();
        /**
         * @zh
         * 从对象池中获得节点
         *
         * @param prefab - 预制资源
         * @param name - 可选，自定义名称
         */
        getNode(prefab: cc.Prefab, name?: string): cc.Node;
        /**
         * @zh
         * 将节点放回对象池中
         *
         * @param node - 节点对象
         * @param name - 可选，自定义名称
         */
        putNode(node: cc.Node, name?: string): void;
        /**
         * @zh
         * 根据名称清空对象池
         *
         * @param name - 名称
         */
        clearPool(name: string): void;
        /**
         * @zh
         * 清空所有对象池
         */
        clearAllPools(): void;
    }
    /**
     * @zh
     * 节点池表对象
     */
    export const nodePools: NodePools;
    export {};
}
declare namespace lcc {
    /**
     * @zh
     * 预制体基类
     */
    class PrefabBase extends cc.Component {
        /**
         * @zh
         * 预制体名称
         */
        private _prefabName;
        /**
         * @zh
         * 预制体根节点
         */
        private _rootNode;
        /**
         * @zh
         * 设置预制体名称
         *
         * @param wname - 预制体名称
         */
        _setPrefabName(pname: string): void;
        /**
         * @zh
         * 获得预制体名称
         */
        getPrefabName(): string;
        /**
         * @zh
         * 设置预制体根节点
         *
         * @param node - 根节点
         */
        _setRootNode(node: cc.Node): void;
        /**
         * @zh
         * 获得预制体根节点
         */
        getRootNode(): cc.Node;
    }
}
declare namespace lcc {
    class PrefabBindConfig {
        node: cc.Node;
        prefab: string;
        advance: boolean;
        key: string;
        priority: number;
        pool: boolean;
    }
    /**
     * @zh
     * 预制体绑定
     */
    export class PrefabBind extends cc.Component {
        prefabBinds: PrefabBindConfig[];
        /**
         * @zh
         * 绑定配置表
         */
        _bindConfigs: {
            [key: string]: PrefabBindConfig;
        };
        /**
         * @zh
         * 预制体表
         */
        _prefabs: {
            [key: string]: PrefabBase;
        };
        /**
         * @zh
         * 扩展加载
         */
        protected onLoad(): Promise<void>;
        /**
         * @zh
         * 扩展销毁
         */
        protected onDestroy(): void;
        /**
         * @zh
         * 获得预制体
         *
         * @param key - 键
         */
        getPrefab<T extends PrefabBase>(key: string): T;
    }
    export {};
}
declare namespace lcc {
    /**
     * @zh
     * 索引路径
     */
    export namespace INDEXPATH {
        /**
         * @zh
         * 预制体
         */
        let PREFAB: string;
    }
    /**
     * @zh
     * 预制体管理器
     */
    class PrefabManager {
        /**
         * @zh
         * 预制体配置表
         */
        private _prefabConfigs;
        /**
         * @zh
         * 预制体实例，用于在预制体上挂配置
         */
        private _prefabInstances;
        /**
         * @zh
         * 预制体实例节点
         */
        private _instanceRoot;
        /**
         * @zh
         * 构造函数
         */
        constructor();
        /**
         * @zh
         * 当移除索引
         *
         * @internal
         */
        private onIndexesRemoved;
        /**
         * @zh
         * 释放无效预制体
         */
        releaseInvalidPrefabConfigs(): void;
        /**
         * @zh
         * 释放预制体
         *
         * @param pname - 预制体名称
         * @param preload - 预加载也释放
         */
        releasePrefabConfig(pname: string, preload?: boolean): void;
        /**
         * @zh
         * 释放预制体数组
         *
         * @param pnames - 预制体数组
         * @param preload - 预加载也释放
         */
        releasePrefabConfigs(pnames: string[], preload?: boolean): void;
        /**
         * @zh
         * 预加载预制体
         *
         * @param pname - 预制体名称
         */
        preloadPrefabConfig(pname: string): Promise<void>;
        /**
         * @zh
         * 预加载预制体数组
         *
         * @param pnames - 预制体数组
         * @param progress - 进度
         */
        preloadPrefabConfigs(pnames: string[], progress?: (p: number) => void): Promise<void>;
        /**
         * @zh
         * 获得预制体配置
         *
         * @param pname 预制体名称
         */
        private getPrefabConfig;
        /**
         * @zh
         * 创建预制体
         *
         * @param pname - 预制体名称
         * @param pool - 在池中创建
         */
        createPrefab<T extends PrefabBase>(pname: string, pool?: boolean): Promise<T>;
        /**
         * @zh
         * 释放预制体到池中
         *
         * @param prefab - 预制体对象
         * @param pool - 在池中创建
         */
        releasePrefab(prefab: PrefabBase, pool?: boolean): void;
        /**
         * @zh
         * 获得预制体实例，一般用于获得在预制体上放的配置
         *
         * @param pname - 预制体名称
         */
        getPrefabInstance<T extends PrefabBase>(pname: string): Promise<T>;
        /**
         * @zh
         * 释放预制体实例，一般用于释放在预制体上放的配置
         *
         * @param pname - 预制体名称
         */
        releasePrefabInstance(pname: string): void;
    }
    /**
     * @zh
     * 预制体管理器对象
     */
    export const prefabMgr: PrefabManager;
    export {};
}
declare namespace lcc {
    /**
     * @zh
     * 包加载器基类
     */
    class PackLoader {
        /**
         * @zh
         * 包的名称
         */
        private _name;
        /**
         * @zh
         * 资源包对象
         */
        private _bundle;
        /**
         * @zh
         * 构造包加载器
         *
         * @param name - 包的名称
         * @param bundle - 资源包对象
         */
        constructor(name: string, bundle: cc.AssetManager.Bundle);
        /**
         * @zh
         * 获得包名称
         */
        getName(): string;
        /**
         * @zh
         * 获得包资源
         */
        getBundle(): cc.AssetManager.Bundle;
        /**
         * @zh
         * 加载操作
         */
        onLoad(): Promise<void>;
        /**
         * @zh
         * 销毁操作
         */
        onDestroy(): Promise<void>;
        /**
         * @zh
         * 加载json文件
         *
         * @param jpPath - json文件包路径
         */
        loadJson(jpPath: string): Promise<any>;
        /**
         * @zh
         * 加载音频
         *
         * @param apPath - 音频文件包路径
         */
        loadAudio(apPath: string): Promise<cc.AudioClip>;
        /**
         * @zh
         * 加载预制件
         *
         * @param ppPath 预制件包路径
         */
        loadPrefab(ppPath: string): Promise<cc.Prefab>;
        /**
         * @zh
         * 加载精灵帧
         *
         * @param sfpPath 精灵帧包路径
         */
        loadSpriteFrame(sfpPath: string): Promise<cc.SpriteFrame>;
        /**
         * @zh
         * 加载ttf字体
         *
         * @param ttfpPath - 字体ttf文件包路径
         */
        loadTTFFont(ttfpPath: string): Promise<cc.TTFFont>;
        /**
         * @zh
         * 获得资源的url
         *
         * @param apPath 资源文件包路径
         */
        getAssetUrl(apPath: string): Promise<string>;
    }
}
declare namespace lcc {
    /**
     * @zh
     * 场景快照
     */
    interface SceneSnapshot {
        /**
         * @zh
         * 场景名
         */
        sceneName: string;
        /**
         * @zh
         * 参数列表
         */
        sceneArgs: any[];
    }
    /**
     * @zh
     * 场景基类
     */
    class SceneBase extends cc.Component {
        /**
         * @zh
         * 捕捉按键
         */
        catchKeys: boolean;
        /**
         * @zh
         * 场景名称
         */
        private _sceneName;
        /**
         * @zh
         * 安装场景
         */
        protected onLoad(): void;
        /**
         * @zh
         * 场景销毁
         */
        protected onDestroy(): void;
        /**
         * @zh
         * 当场景场景加载<br/>
         * 子类需要可以重写这个函数
         *
         * @param sceneArgs - 参数
         */
        onSceneLoad(...sceneArgs: any[]): void;
        /**
         * @zh
         * 设置场景名称
         *
         * @param scenename - 设置场景名
         */
        _setSceneName(scenename: string): void;
        /**
         * @zh
         * 获得场景名称
         */
        getSceneName(): string;
        /**
         * @zh
         * 当捕捉到键盘事件
         *
         * @param event - 按键值
         */
        private OnCatchKeyEvent;
        /**
         * @zh
         * 制作场景快照<br/>
         * 如果场景可以保存数据，可以重写这个函数
         */
        makeSnapshot(): {
            sceneName: string;
            sceneArgs: any[];
        };
        /**
         * @zh
         * 当按键按下
         */
        onKeyPressed(keyCode: string): boolean;
    }
}
declare namespace lcc {
    /**
     * @zh
     * 场景管理器
     */
    class SceneManager {
        /**
         * @zh
         * 场景栈
         */
        private _sceneStack;
        /**
         * @zh
         * 当前场景
         */
        private _currentScene;
        /**
         * @zh
         * 构造函数
         */
        constructor();
        /**
         * @zh
         * 检查当前场景<br/>
         * 搜索场景的[[SceneBase]]脚本组件，如果不存在就会在第一个子节点上挂载一个新的
         */
        private checkCurrentScene;
        /**
         * @zh
         * 获得当前场景
         */
        getCurrentScene(): SceneBase;
        /**
         * @zh
         * 切换场景
         *
         * @param sname - 场景名
         * @param sargs - 快照参数
         */
        private _switchScene;
        /**
         * @zh
         * 切换场景
         *
         * @param sname - 场景名
         * @param sargs - 快照参数
         */
        switchScene(sname: string, ...sargs: any[]): void;
        /**
         * @zh
         * 制作当前场景的快照
         */
        makeSnapshot(): SceneSnapshot;
        /**
         * @zh
         * 恢复场景快照
         *
         * @param snapshot - 场景快照
         */
        resumeSnapshot(snapshot: SceneSnapshot): void;
        /**
         * @zh
         * 压入场景到栈
         *
         * @param sname - 场景名
         * @param sargs - 快照参数
         */
        pushScene(sname: string, ...sargs: any[]): void;
        /**
         * @zh
         * 弹出栈中的场景
         */
        popScene(): void;
        /**
         * @zh
         * 获得场景栈
         */
        getSceneStack(): SceneSnapshot[];
    }
    /**
     * @zh
     * 场景管理器对象
     */
    export const sceneMgr: SceneManager;
    export {};
}
declare namespace lcc {
    /**
     * @zh
     * 索引路径
     */
    export namespace INDEXPATH {
        /**
         * @zh
         * 数据表
         */
        let TABLE: string;
    }
    /**
     * @zh
     * 自动加载数据表<br/>
     * 如果为true，那么会在加载游戏包的时候加载所有数据表。
     */
    export let LOADTABLE_AUTO: boolean;
    /**
     * @zh
     * 数据表对象映射表<br/>
     */
    export let TABLES: {
        [key: string]: any;
    };
    /**
     * @zh
     * 数据表管理器<br/>
     * 主要用于管理游戏数据表，这些表一般由策划配置<br/>
     * 数据表的合并功能
     */
    class TableManager {
        /**
         * @zh
         * 数据表加载映射表
         */
        private _loadMap;
        /**
         * @zh
         * 构造函数
         */
        constructor();
        /**
         * @zh
         * 当移除索引
         *
         * @internal
         */
        private onIndexesRemoved;
        /**
         * @zh
         * 当加载索引
         *
         * @param ivalue 索引对象
         *
         * @internal
         */
        private onIndexesLoaded;
        /**
         * @zh
         * 加载数据表
         *
         * @param tgPath - 数据表文件全局路径
         */
        private loadTableFile;
        /**
         * @zh
         * 索引具体值
         *
         * @param map - 索引对象
         * @param index - 索引
         */
        private indexValue;
        /**
         * @zh
         * 排序列表类型数据表
         *
         * @param tname 数据表名称
         */
        private sortListTable;
        /**
         * @zh
         * 获得所有表
         */
        getTables(): {
            [key: string]: any;
        };
        /**
         * @zh
         * 获得指定表<br/>
         * 在[[LOADTABLE_AUTO]]为false时。如果表未加载，会优先加载指定表。
         *
         * @param tname - 数据表名称
         */
        getTable<T = any>(tname: string): Promise<T>;
        /**
         * @zh
         * 手动加载数据表<br/>
         * 只在[[LOADTABLE_AUTO]]为false下有效
         *
         * @param tnames - 数据表名称数组
         */
        loadTable(...tnames: string[]): Promise<void>;
        /**
         * @zh
         * 手动移除数据表<br/>
         * 只在[[LOADTABLE_AUTO]]为false下有效
         *
         * @param tnames - 数据表名称数组
         */
        removeTable(...tnames: string[]): void;
        /**
         * @zh
         * 手动移除移除所有数据表<br/>
         * 只在[[LOADTABLE_AUTO]]为false下有效
         */
        removeAllTables(): void;
    }
    /**
     * @zh
     * 数据表管理对象
     */
    export const tableMgr: TableManager;
    export {};
}
declare namespace lcc {
    /**
     * @zh
     * 定时器选项
     */
    export interface TimerOption {
        /**
         * @zh
         * 定时器分组
         */
        group?: string;
        /**
         * @zh
         * 定时器键
         */
        key?: string;
        /**
         * @zh
         * 循环运行
         */
        loop?: boolean;
    }
    /**
     * @zh
     * 默认定时器组
     */
    export let DEFAULT_TIMER_GROUP: string;
    /**
    /**
     * @zh
     * 定时器时间片，秒
     */
    export let TIMER_TIMESLICE: number;
    /**
     * @zh
     * 定时器管理器<br/>
     * 主要用于程序中所有定时器的添加、触发和移除
     */
    class TimerManager {
        /**
         * @zh
         * 定时器实体
         */
        private _entity;
        /**
         * @zh
         * 任务映射表
         */
        private _taskMap;
        /**
         * @zh
         * 任务索引<br>
         * 如果任务没有指定`key`，就会自动分配索引
         */
        private _taskIndex;
        /**
         * @zh
         * 构造函数
         */
        constructor();
        /**
         * @zh
         * 安装定时器实体
         */
        private setupTimerEntity;
        /**
         * @zh
         * 删除定时器实体
         */
        private deleteTimerEntity;
        /**
         * @zh
         * 时间更新函数
         */
        private onTimeUpdate;
        /**
         * @zh
         * 添加定时器
         *
         * @param time - 回调的时间
         * @param handle - 回调函数
         * @param key - 可选，定时器键或者定时器选项
         */
        addTimer(time: number, handle: (dt?: number) => void, key?: string | TimerOption): string;
        /**
         * @zh
         * 移除定时器<br/>
         * 如果选项不传入`key`，那么会移除整个定时器分组上的所有定时器
         *
         * @param key - 定时器键或者定时器选项，如果使用选项则必须存在group，否则不生效
         */
        removeTimer(key: string | TimerOption): number;
        /**
         * 移除定时器
         */
        removeAllTimers(): void;
        /**
         * @zh
         * 睡眠指定秒数
         *
         * @param seconds - 秒数
         */
        sleep(seconds: number): Promise<unknown>;
    }
    /**
     * @zh
     * 定时器管理器对象
     */
    export const timerMgr: TimerManager;
    export {};
}
declare namespace lcc {
    /**
     * @zh
     * UI动画播放接口
     */
    interface UIAnimationPlayable {
        /**
         * @zh
         * 播放指定类型动画
         *
         * @param aType 动画类型
         */
        play(aType: string): Promise<any>;
    }
    /**
     * @zh
     * UI基类
     */
    class UIBase extends cc.Component {
        /**
         * @zh
         * 根节点
         */
        private _rootNode;
        /**
         * @zh
         * UI动画对象
         */
        private _uiAnimation;
        /**
         * @zh
         * UI名称
         */
        private _uiName;
        /**
         * @zh
         * 固定优先级
         */
        private _fixedPriority;
        /**
         * @zh
         * 画布对象
         */
        private _canvas;
        /**
         * @zh
         * 设置根节点
         *
         * @param node - 节点对象
         */
        _setRootNode(node: cc.Node): void;
        /**
         * @zh
         * 设置是否激活
         *
         * @param active - 是否激活
         */
        setActive(active: boolean): void;
        /**
         * @zh
         * 设置UI名称
         *
         * @param uiname - UI名称
         */
        _setUIName(uiname: string): void;
        /**
         * @zh
         * 获得UI名称
         */
        getUIName(): string;
        /**
         * @zh
         * 设置固定优先级
         *
         * @param priority - 优先级
         */
        setFixedPriority(priority: number): void;
        /**
         * @zh
         * 获得固定优先级
         */
        getFixedPriority(): number;
        /**
         * @zh
         * 设置画布对象
         *
         * @param canvas - 画布对象
         */
        _setCanvas(canvas: CanvasConfig): void;
        /**
         * @zh
         * 获得画布对象
         */
        getCanvas(): CanvasConfig;
        /**
         * @zh
         * 关闭当前UI
         */
        closeSelf(release?: boolean): Promise<string>;
        /**
         * @zh
         * UI创建，内部使用
         */
        _onUICreate(): void;
        /**
         * @zh
         * 播放UI动画
         *
         * @param aType 动画类型
         */
        playUIAnimation(aType: string): Promise<void>;
        /**
         * @zh
         * UI创建回调，子类中可以重写这个函数
         */
        onUICreate(): void;
        /**
         * @zh
         * UI打开回调，子类中可以重写这个函数
         *
         * @param args - 打开参数
         */
        onOpen(...args: any[]): any;
        /**
         * @zh
         * UI关闭回调，子类中可以重写这个函数
         */
        onClose(): void;
        /**
         * @zh
         * UI释放回调，子类中可以重写这个函数
         */
        onUIRelease(): void;
        /**
         * @zh
         * 当改变当前UI最前面，子类中可以重写这个函数
         */
        onChangeFront(front: boolean): void;
        /**
         * @zh
         * 当按键按下，子类中可以重写这个函数
         */
        onKeyPressed(keyCode: string): boolean;
    }
}
declare namespace lcc {
    /**
     * @zh
     * 空动画枚举
     */
    enum TempAnimtionEnum {
        '<None>' = 0
    }
    /**
     * @zh
     * UI动画组件<br/>
     * 添加到UIBase同节点上生效
     */
    class UIAnimation extends cc.Component implements UIAnimationPlayable {
        /**
         * @zh
         * UI动画
         */
        _uiAnimation: cc.Animation;
        get uiAnimation(): cc.Animation;
        set uiAnimation(value: cc.Animation);
        /**
         * @zh
         * 打开动画
         */
        openAnimation: number;
        /**
         * @zh
         * 打开动画反转
         */
        openReverse: boolean;
        /**
         * @zh
         * 关闭动画
         */
        closeAnimation: number;
        /**
         * @zh
         * 反转关闭动画
         */
        closeReverse: boolean;
        /**
         * @zh
         * 更新动画枚举
         */
        private updateAnimationEnum;
        /**
         * @zh
         * 预加载
         */
        __preload(): void;
        /**
         * @zh
         * 播放动画
         *
         * @param aType 动画类型 'open'/'close'
         */
        play(aType: string): Promise<unknown>;
    }
}
declare namespace lcc {
    /**
     * @zh
     * 索引路径
     */
    export namespace INDEXPATH {
        /**
         * @zh
         * UI界面
         */
        let UI: string;
    }
    /**
     * @zh
     * UI根节点名
     */
    export const UIROOT_NAME = "UIManager";
    /**
     * @zh
     * UI根节ZINDEX
     */
    export const UIROOT_ZINDEX = 1000;
    /**
     * @zh
     * 默认画布
     */
    export const DEFAULT_CANVAS = "lcc_Canvas";
    /**
     * @zh
     * 优先级最大值
     */
    export const PRIORITY_MAX = 1000;
    /**
     * @zh
     * 画布配置
     */
    export interface CanvasConfig {
        /**
         * @zh
         * 画布节点
         */
        canvas: cc.Node;
        /**
         * @zh
         * UI表
         */
        UIs: {
            [key: string]: UIBase;
        };
        /**
         * @zh
         * 打开UI表
         */
        openUIs: {
            [key: string]: UIBase;
        };
        /**
         * @zh
         * 当前UI优先级
         */
        UIPriority: number;
        /**
         * @zh
         * 最前面的UI对象
         */
        frontUI: UIBase;
    }
    /**
     * @zh
     * UI管理器
     */
    class UIManager {
        /**
         * @zh
         * 画布映射表
         */
        private _canvasMap;
        /**
         * @zh
         * UI配置表
         */
        private _UIConfigs;
        /**
         * UI根节点
         */
        private _uiRoot;
        /**
         * @zh
         * 画布优先级
         */
        private _canvasPriority;
        /**
         * @zh
         * UI操作表
         */
        private _uiOperations;
        /**
         * @zh
         * UI栈
         */
        private _uiStack;
        /**
         * @zh
         * 构造函数
         */
        constructor();
        /**
         * @zh
         * 获得UI根节点
         */
        getUIRoot(): cc.Node;
        /**
         * @zh
         * 获得画布
         *
         * @param cname - 画布名称
         */
        getCanvas(cname?: string): CanvasConfig;
        /**
         * @zh
         * 设置指定画布在最前面
         *
         * @param cname - 画布名称
         */
        setFrontCanvas(cname: string): void;
        /**
         * @zh
         * 当移除索引
         *
         * @internal
         */
        onIndexesRemoved(): void;
        /**
         * @zh
         * 释放无效UI
         */
        releaseInvalidUIs(): void;
        /**
         * @zh
         * 获取所有UI
         */
        getAllUIs(): string[];
        /**
         * @zh
         * 释放指定UI
         *
         * @param uiname - ui名称
         * @param preload - 预加载
         */
        releaseUI(uiname: string, preload?: boolean): void;
        /**
         * @zh
         * 释放UI数组
         *
         * @param uinames - ui名称数组
         * @param preload - 预加载
         */
        releaseUIs(uinames: string[], preload?: boolean): void;
        /**
         * @zh
         * 预加载UI
         *
         * @param uiname - ui名称
         */
        preloadUI(uiname: string): Promise<void>;
        /**
         * @zh
         * 预加载UI数组
         *
         * @param uinames - ui名称数组
         * @param progress - 进度
         */
        preloadUIs(uinames: string[], progress?: (p: number) => void): Promise<void>;
        /**
         * @zh
         * 获得UI配置
         *
         * @param uiname - UI名称
         */
        private getUIConfig;
        /**
         * @zh
         * 获得指定UI
         *
         * @param uiname - UI名称
         * @param create - 如果不存在，则创建
         */
        getUI(uiname: string, create?: boolean): Promise<UIBase>;
        /**
         * @zh
         * 获得指定UI
         *
         * @param uiname - UI名称
         * @param create - 如果不存在，则创建
         */
        private _getUI;
        /**
         * @zh
         * 释放指定UI
         *
         * @param uiname - UI名称
         */
        private _releaseUI;
        /**
         * @zh
         * 设置指定UI到最前面
         *
         * @param ui - 指定UI
         */
        private setFront;
        /**
         * @zh
         * 排序打开的UI
         *
         * @param canvas - 画布对象
         */
        sortOpenedUIs(canvas: CanvasConfig): void;
        /**
         * @zh
         * 把UI放置到最前面
         *
         * @param uiname - UI名称
         */
        setFrontByName(uiname: string): void;
        /**
         * @zh
         * 添加UI操作
         *
         * @param uiname - UI名称
         * @param operation - 操作函数
         */
        private addUIOperation;
        /**
         * @zh
         * 执行下个UI操作
         *
         * @param uiname - UI名称
         */
        private nextUIOperation;
        /**
         * @zh
         * 打开指定UI
         *
         * @param uiname - UI名称
         * @param args - 打开参数
         */
        private _openUI;
        /**
         * @zh
         * 打开指定UI
         *
         * @param uiname - UI名称
         * @param args - 打开参数
         */
        openUI(uiname: string, ...args: any[]): Promise<UIBase>;
        /**
         * @zh
         * 关闭指定UI
         *
         * @param uiname - UI名称
         * @param release - 释放对象
         */
        private _closeUI;
        /**
         * @zh
         * 关闭指定UI
         *
         * @param uiname - UI名称
         * @param release - 释放对象
         */
        closeUI(uiname: string, release?: boolean): Promise<string>;
        /**
         * @zh
         * 关闭UI数组
         *
         * @param uinames - UI名称数组
         */
        closeUIs(uinames: string[], release?: boolean): void;
        /**
         * @zh
         * 关闭所有UI
         *
         * @param excepts - 排除UI数组
         */
        closeAllUI(excepts?: string[], release?: boolean): void;
        /**
         * @zh
         * 使用栈方式打开UI
         *
         * @param uiname - UI名称
         * @param args - 打开参数
         */
        pushUI(uiname: string, ...args: any[]): Promise<UIBase>;
        /**
         * @zh
         * 使用栈方式关闭UI
         *
         * @param uiname - UI名称
         */
        popUI(): Promise<UIBase>;
        /**
         * @zh
         * 获得UI栈
         */
        getUIStack(): string[];
        /**
         * @zh
         * 清空UI栈
         */
        clearUIStack(): void;
        /**
         * @zh
         * 当按键按下
         *
         * @param keyCode - 按键编码
         */
        onKeyPressed(keyCode: string): boolean;
    }
    /**
     * @zh
     * UI管理器对象
     */
    export const uiMgr: UIManager;
    export {};
}
declare namespace lcc {
    namespace fs {
        /**
         * @zh
         * 获得路径的目录
         *
         * @param path - 路径
         */
        function dirname(path: string): string;
        /**
         * @zh
         * 获得路径的文件名
         *
         * @param path - 路径
         */
        function basename(path: string): string;
    }
}
declare namespace lcc {
    namespace math {
        /**
         * @zh
         * 获得随机浮点值
         *
         * @param min - 最小值
         * @param max - 最大值
         */
        function randomFloat(min: number, max: number): number;
        /**
         * @zh
         * 获得随机整数值
         *
         * @param min - 最小值
         * @param max - 最大值
         */
        function randomInt(min: number, max: number): number;
        /**
         * @zh
         * 随机获得数组中的值
         *
         * @param elements - 元素数组
         */
        function randomElement(elements: any[]): any;
        /**
         * @zh
         * 随机获得数组的几个值
         *
         * @param elements - 元素数组
         * @param count - 数量
         */
        function randomElements(elements: any[], count: number): any[];
    }
}
declare namespace lcc {
    /**
     * @zh
     * HTTP心跳，不大于0表示不使用
     */
    let HTTP_HEARTTICK: number;
    /**
     * @zh
     * HTTP协议路径
     */
    let HTTP_PROTOCOL_PATH: string;
    /**
     * @zh
     * 网络线类型
     */
    namespace NetLineType {
        /**
         * @zh
         * HTTP网络线
         */
        const HTTP = 2;
    }
    /**
     * @zh
     * Http调用方式
     */
    enum HttpCall {
        /**
         * @zh
         * GET调用
         */
        GET = 1,
        /**
         * @zh
         * POST调用
         */
        POST = 2
    }
    /**
     * @zh
     * WS网络线配置
     */
    interface HttpConfig {
        /**
         * @zh
         * URL连接
         */
        url?: string;
        /**
         * @zh
         * 调用方式， 默认POST<br/>
         * 客户端
         */
        call?: HttpCall;
    }
    /**
     * @zh
     * HTTP网络线
     */
    class HttpLine extends NetLine {
        /**
         * @zh
         * 网络线配置
         */
        private _config;
        /**
         * @zh
         * 连接ID
         */
        private _connectID;
        /**
         * @zh
         * 就绪
         */
        private _ready;
        /**
         * @zh
         * 已经关闭
         */
        private _closed;
        /**
         * @zh
         * 发送心跳时间
         */
        private _sendHeartTime;
        /**
         * @zh
         * 获得URL连接
         */
        getURL(): string;
        /**
         * @zh
         * 配置网络线
         *
         * @param config - 配置对象
         */
        config(config: HttpConfig): void;
        /**
         * @zh
         * 检查网络线是否有效
         */
        isValid(): boolean;
        /**
         * @zh
         * 处理网络线数据
         *
         * @param netData 网络数据
         */
        private onDealNetData;
        /**
         * @zh
         * 打开网络线
         */
        open(): Promise<boolean>;
        /**
         * @zh
         * 关闭网络线
         */
        close(): void;
        /**
         * @zh
         * 更新网络线
         *
         * @param dt 间隔时间
         */
        onUpdate(dt: number): void;
        /**
         * @zh
         * 同步连接ID
         */
        protected syncConnectID(): void;
        /**
         * @zh
         * 发送网络数据-客户端
         *
         * @param data - 网络数据
         */
        private sendNetData_client;
        /**
         * @zh
         * 发送网络线数据
         *
         * @param data - 网络数据
         */
        protected sendNetData(data: NetData): Promise<void>;
    }
}
declare namespace lcc {
    /**
     * @zh
     * WS心跳
     */
    let WEBSOCKET_HEARTTICK: number;
    /**
     * @zh
     * 网络线类型
     */
    namespace NetLineType {
        /**
         * @zh
         * WS网络线
         */
        const WEBSOCKET = 1;
    }
    /**
     * @zh
     * WS网络线配置
     */
    interface WebSocketConfig {
        /**
         * @zh
         * URL连接
         */
        url?: string;
    }
    /**
     * @zh
     * WEBSOCKET网络线<br/>
     */
    class WebSocketLine extends NetLine {
        /**
         * @zh
         * 网络线配置
         */
        private _config;
        /**
         * @zh
         * 网络线实体
         */
        private _entity;
        /**
         * @zh
         * 就绪
         */
        private _ready;
        /**
         * @zh
         * 心跳时间限制
         */
        private _heartTimeLimit;
        /**
         * @zh
         * 检查心跳时间
         */
        private _checkHeartTime;
        /**
         * @zh
         * 发送心跳时间<br/>
         * 客户端
         */
        private _sendHeartTime;
        /**
         * @zh
         * 获得URL连接
         */
        getURL(): string;
        /**
         * @zh
         * 配置网络线
         *
         * @param config - 配置对象
         */
        config(config: WebSocketConfig): void;
        /**
         * @zh
         * 检查网络线是否有效
         */
        isValid(): boolean;
        /**
         * @zh
         * 处理网络线数据
         *
         * @param netData - 收到的网络数据
         */
        private onDealNetData;
        /**
         * @zh
         * 打开网络线
         */
        open(): Promise<boolean>;
        /**
         * @zh
         * 关闭网络线
         */
        close(): void;
        /**
         * @zh
         * 更新网络线
         *
         * @param dt - 间隔时间
         */
        onUpdate(dt: number): void;
        /**
         * @zh
         * 发送网络线数据
         *
         * @param data - 网络数据
         */
        protected sendNetData(netData: NetData): void;
    }
}

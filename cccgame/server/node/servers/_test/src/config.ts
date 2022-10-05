
const FS = require('fs');
const Path = require('path');

// 基础路径
export const BASE_PATH = Path.join(__dirname, '..', '..', '..', '..');

// 工程路径
export const PROJECT_PATH = Path.join(__dirname, '..');

// 工作路径
export const WORK_PATH = BASE_PATH;

// 资源路径
export const ASSETS_PATH = Path.join(BASE_PATH, 'assets');

// 文档路径
export const DOCS_PATH = Path.join(BASE_PATH, 'docs');

// 配置路径
export const CONFIG_PATH = Path.join(BASE_PATH, 'config');

// 日志路径
export const LOG_PATH = Path.join(BASE_PATH, 'log');

// 日志文件名
export const LOG_FILENAME = 'test';

// 基础端口
export const BASE_PORT = 4566;

////////////////////////////////////////////////////////////////////////
// 初始化框架
////////////////////////////////////////////////////////////////////////

// 引入框架
require(Path.join(BASE_PATH, 'node', 'lcc-framework-server', 'dist', 'lcc-framework'));

// 调试
lcc.DEBUG.NETWORK = true;
lcc.DEBUG.CONFIG = true;
lcc.DEBUG.WORKER = true;

// 日志
lcc.LOG_PATH = LOG_PATH;
lcc.LOG_FILENAME = LOG_FILENAME;
lcc.logMgr.setLogLevel(lcc.LOGLEVEL.DEBUG);
lcc.logMgr.setFlushLevel(lcc.LOGLEVEL.DEBUG);

// 配置
lcc.CONFIG_PATH = CONFIG_PATH;

// 数据表
lcc.TABLE_PATH = Path.join(ASSETS_PATH, 'lcc-assets', 'tables');

////////////////////////////////////////////////////////////////////////
// 加载与卸载
////////////////////////////////////////////////////////////////////////

/**
 * 加载
 */
export async function load() {
	// 加载协议
	const PROTOCOL_FILE = Path.join(ASSETS_PATH, 'lcc-assets', 'lcc-protocols.js');
	if(FS.existsSync(PROTOCOL_FILE)){
		require(PROTOCOL_FILE);
	}
}

/**
 * 卸载
 */
export async function unload() {
	
}


const path = require('path');
const crypto = require('crypto');

// 基础路径
export const BASE_PATH = path.join(__dirname, '..', '..', '..');

// 工程路径
export const PROJECT_PATH = path.join(__dirname, '..');

// 工作路径
export const WORK_PATH = BASE_PATH;

// NODE路径
export const NODE_PATH = path.join(BASE_PATH, 'node');

// 发布路径
export const PUBLISH_PATH = path.join(BASE_PATH, 'publish');

// 资源路径
export const ASSETS_PATH = path.join(BASE_PATH, 'assets');

// 配置路径
export const CONFIG_PATH = path.join(BASE_PATH, 'config');

// 日志路径
export const LOG_PATH = path.join(BASE_PATH, 'log');

// 日志文件名
export const LOG_FILENAME = 'control';

// 默认工程的GID
export const DEFAULT_GID = crypto.createHash('md5').update(CONFIG_PATH).digest("hex");

////////////////////////////////////////////////////////////////////////
// 初始化框架
////////////////////////////////////////////////////////////////////////

// 引入框架
require(path.join(BASE_PATH, 'node', 'lcc-framework-server', 'dist', 'lcc-framework'));

// 调试
lcc.DEBUG.CONFIG = true;

// 日志
lcc.LOG_PATH = LOG_PATH;
lcc.LOG_FILENAME = LOG_FILENAME;
lcc.LOG_SINGLE = true;

// 配置
lcc.CONFIG_PATH = CONFIG_PATH;

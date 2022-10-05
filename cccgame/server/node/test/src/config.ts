
const Path = require('path');

// 基础路径
export const BASE_PATH = Path.join(__dirname, '..', '..', '..');

// 工程路径
export const PROJECT_PATH = Path.join(__dirname, '..');

// 工作路径
export const WORK_PATH = Path.join(PROJECT_PATH, 'data');

// 引入框架
require(Path.join(BASE_PATH, 'node', 'lcc-framework-server', 'dist', 'lcc-framework'));

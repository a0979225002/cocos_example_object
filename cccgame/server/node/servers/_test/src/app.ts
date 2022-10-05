import { CONFIG_PATH, WORK_PATH, load as loadConfig, unload as unloadConfig } from './config';

const Path = require('path')

const TAG = "app";

/**
 * 加载
 */
export async function load() {
	await loadConfig();
	await lcc.workerMgr.startWorker(lcc.makeWorkerMeta('Config', { classPath : Path.join(__dirname, 'workers', 'Config') }))
	await lcc.workerMgr.startWorker(lcc.makeWorkerMeta('Pack', { classPath : Path.join(__dirname, 'workers', 'Pack') }))
	await lcc.workerMgr.startWorker(lcc.makeWorkerMeta('WebsocketLine', { classPath : Path.join(__dirname, 'workers', 'WebsocketLine') }))
	await lcc.workerMgr.startWorker(lcc.makeWorkerMeta('HttpLine', { classPath : Path.join(__dirname, 'workers', 'HttpLine') }))
}

/**
 * 卸载
 */
export async function unload() {
    await lcc.workerMgr.release();
	await unloadConfig();
}

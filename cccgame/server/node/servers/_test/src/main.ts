#!/usr/bin/env node

/**
 * Module dependencies.
 */

import { load as loadApp, unload as unloadApp } from "./app"

const TAG = "main";

// 关闭信号
process.on('SIGINT', async ()=>{
    lcc.logMgr.info(TAG, 'stop by SIGINT');
    await unloadApp();
    process.exit(1001);
});

// 关闭信号
process.on('SIGTERM', async ()=>{
    lcc.logMgr.info(TAG, 'stop by SIGTERM');
    await unloadApp();
    process.exit(1002);
});

// 运行App
loadApp();

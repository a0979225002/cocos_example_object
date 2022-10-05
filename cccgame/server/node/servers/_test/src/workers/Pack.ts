
const TAG = "Pack";

import { BASE_PORT,ASSETS_PATH } from '../config';

const cors = require('cors');
const express = require('express');
const Path = require('path');

const PORT = BASE_PORT + 2;

/**
 * 测试 - 配置
 */
export default class Pack extends lcc.WorkerBase {
	
    public async onStart(){
        let pExpress = lcc.express.createFilesExpress(Path.join(ASSETS_PATH,'tests', 'packs'));
        await lcc.webServer.addServer('Pack', pExpress, PORT);
    }

    public async onStop(){
        lcc.webServer.removeServer('Pack');
    }
}

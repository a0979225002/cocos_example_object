
const TAG = "Config";

import { BASE_PORT } from '../config';

const cors = require('cors');
const express = require('express');

const PORT = BASE_PORT + 1;

/**
 * 测试 - 配置
 */
export default class Config extends lcc.WorkerBase {
	
    public async onStart(){
        let pExpress = lcc.express.createEmptyExpress();
        pExpress.use(cors()); 
		pExpress.use(express.json());
        pExpress.use(express.urlencoded({ extended: false }));
        let router = lcc.express.createRouter();
		pExpress.use('/', router);
        router.get('/config', this.createWork(this.OnConfig.bind(this)));
        await lcc.webServer.addServer('Config', pExpress, PORT);
    }

    private async OnConfig(req, res, next){
        res.json({
            version : "1.0.3"
        });
    }
    
    public async onStop(){
        lcc.webServer.removeServer('Config');
    }
}

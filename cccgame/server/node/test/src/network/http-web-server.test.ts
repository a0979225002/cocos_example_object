
const Fs = require('fs');
const Path = require('path');

import { WORK_PATH } from '../config';
lcc.DEBUG.NETWORK = false;

let portTest = 4567;
async function getEmptyPort() {
	while(true){
		if(await lcc.os.isEmptyPort(portTest)){
			let r = portTest;
			portTest ++;
			return r;
		}else{
			portTest ++;
		}
	}
}

const TEST_WORK_PATH = Path.join(WORK_PATH, 'network');

beforeAll(async ()=>{
	if(!Fs.existsSync(TEST_WORK_PATH)){
		Fs.mkdirSync(TEST_WORK_PATH, { recursive : true });
	}
	lcc.fs.clearDirectory(TEST_WORK_PATH);
	Fs.writeFileSync(Path.join(TEST_WORK_PATH, 'version.json'), JSON.stringify({
		remoteconfig : 'http:test.version.json',
		versionName : '0.0.0'
	}));
});

describe('web-server', ()=>{

	afterEach(async ()=>{
		lcc.webServer.removeAllServers();
	});

	test('addServer/getServer/removeServer',async ()=>{
		let server = await lcc.webServer.addServer('test', lcc.express.createFilesExpress(TEST_WORK_PATH), await getEmptyPort());
		expect(server).toBeDefined();
		expect(lcc.webServer.getServer('test')).toBe(server);
		lcc.webServer.removeServer('test');
		expect(lcc.webServer.getServer('test')).toBeUndefined();
	});

	test('addServer/getServer/removeAllServers',async ()=>{
		let server = await lcc.webServer.addServer('test', lcc.express.createFilesExpress(TEST_WORK_PATH), await getEmptyPort());
		expect(server).toBeDefined();
		expect(lcc.webServer.getServer('test')).toBe(server);
		lcc.webServer.removeAllServers();
		expect(lcc.webServer.getServer('test')).toBeUndefined();
	});

	test('downFile',async ()=>{
		let server = await lcc.webServer.addServer('test', lcc.express.createFilesExpress(TEST_WORK_PATH), await getEmptyPort());
		let r = await lcc.http.getJson(`http://localhost:${server.port}/version.json`);
		expect(r).toBeDefined();
		expect(r.remoteconfig).toBe('http:test.version.json');
		expect(r.versionName).toBe('0.0.0');
	});

	test('getJson',async ()=>{
		let express = lcc.express.createEmptyExpress();
		let router = lcc.express.createRouter();
		express.use('/config', router);
		router.get('/version', (req, res, next) => {
			res.json({
				version : '1.0.0'
			});
		});
		let server = await lcc.webServer.addServer('test', express, await getEmptyPort());
		let r = await lcc.http.getJson(`http://localhost:${server.port}/config/version`);
		expect(r).toBeDefined();
		expect(r.version).toBe('1.0.0');
	});
	
	test('postJson',async ()=>{
		let Express = require('express');
		let express = lcc.express.createEmptyExpress();
		let router = lcc.express.createRouter();
		express.use(Express.json());
		express.use('/config', router);
		let reqBody = null;
		router.post('/version', (req, res, next) => {
			reqBody = req.body;
			res.json({
				version : '1.0.0'
			});
		});
		let server = await lcc.webServer.addServer('test', express, await getEmptyPort());
		let r = await lcc.http.postJson(`http://localhost:${server.port}/config/version`, { config : 1000 });
		expect(r).toBeDefined();
		expect(r.version).toBe('1.0.0');
		expect(reqBody).toBeDefined();
		expect(reqBody.config).toBe(1000);
	});
});


const Fs = require('fs');
const Path = require('path');

import { WORK_PATH } from '../config';
lcc.DEBUG.CONFIG = false;

lcc.http['get'] = (url:string, timeout?:number)=>{
	expect(url).toBe('http://test.version.json');
	return new Promise((resolve)=>{
		resolve(JSON.stringify({
			value : 'remote'
		}));
	});
};

const TEST_WORK_PATH = Path.join(WORK_PATH, 'config');

beforeAll(async ()=>{
	if(!Fs.existsSync(TEST_WORK_PATH)){
		Fs.mkdirSync(TEST_WORK_PATH, { recursive : true });
	}
	lcc.fs.clearDirectory(TEST_WORK_PATH);
	Fs.writeFileSync(Path.join(TEST_WORK_PATH, 'version.json'), JSON.stringify({
		"@remote" : 'http://test.version.json',
		"@local" : '${localpath}/config.json',
		versionName : '0.0.0'
	}));
	Fs.writeFileSync(Path.join(TEST_WORK_PATH, 'config.json'), JSON.stringify({
		gameName : 'Test',
		value : "local"
	}));
});

describe('ConfigManager', ()=>{

	beforeEach(()=>{
		lcc.DEBUG.CONFIG = true;
		lcc.CONFIG_PATH = TEST_WORK_PATH;
		lcc.configMgr.removeAllConfigs();
	});

	test('getConfigs empty', ()=>{
		expect(lcc.js.isEmptyMap(lcc.configMgr.getConfigs())).toBeTruthy();
	});	

	test('loadConfigFile(jfile)', async ()=>{
		await lcc.configMgr.loadConfigFile(Path.join(TEST_WORK_PATH, 'config.json'));
		//console.log(`** --------------- ${JSON.stringify(lcc.configMgr.getConfigs())}`);
		expect(lcc.configMgr.getConfig('config').gameName).toBe('Test');
		expect(lcc.configMgr.getConfig('config').value).toBe('local');

	});
	
	test('loadConfigFile(jfile) ref',async ()=>{
		await lcc.configMgr.loadConfigFile(Path.join(TEST_WORK_PATH, 'version.json'));
		expect(lcc.configMgr.getConfigs()['version'].versionName).toBe('0.0.0');
		expect(lcc.configMgr.getConfigs()['version'].remote.value).toBe('remote');
		expect(lcc.configMgr.getConfigs()['version'].local.value).toBe('local');
	});
	
	test('loadConfigFile(jfile,cname)', async ()=>{
		await lcc.configMgr.loadConfigFile(Path.join(TEST_WORK_PATH, 'version.json'),'config');
		expect(lcc.configMgr.getConfigs()['config'].versionName).toBe('0.0.0');
	});
	
	test('loadConfigFile(jfile,cname) mulit',async ()=>{
		await lcc.configMgr.loadConfigFile(Path.join(TEST_WORK_PATH, 'version.json'));
		await lcc.configMgr.loadConfigFile(Path.join(TEST_WORK_PATH, 'config.json'),'version');
		expect(lcc.configMgr.getConfigs()['version'].versionName).toBeUndefined();
		expect(lcc.configMgr.getConfigs()['version'].gameName).toBe('Test');
	});
	
	test('loadConfigFile(jfile,option) mulit',async ()=>{
		await lcc.configMgr.loadConfigFile(Path.join(TEST_WORK_PATH, 'version.json'));
		await lcc.configMgr.loadConfigFile(Path.join(TEST_WORK_PATH, 'config.json'),{ configName : 'version', merge : false});
		expect(lcc.configMgr.getConfigs()['version'].versionName).toBeUndefined();
		expect(lcc.configMgr.getConfigs()['version'].gameName).toBe('Test');
	});
	
	test('getConfigs', async ()=>{
		await lcc.configMgr.loadConfigFile(Path.join(TEST_WORK_PATH, 'version.json'));
		await lcc.configMgr.loadConfigFile(Path.join(TEST_WORK_PATH, 'config.json'));
		expect(lcc.configMgr.getConfigs()['version'].versionName).toBe('0.0.0');
		expect(lcc.configMgr.getConfigs()['config'].gameName).toBe('Test');
	});	
	
	test('getConfig undefined', async ()=>{
		expect(await lcc.configMgr.getConfig('version')).toBeUndefined();
	});	
	
	test('getConfig',async ()=>{
		await lcc.configMgr.loadConfigFile(Path.join(TEST_WORK_PATH, 'version.json'));
		expect(lcc.configMgr.getConfig<any>('version').versionName).toBe('0.0.0');
	});	
	
	test('removeConfig', async ()=>{
		await lcc.configMgr.loadConfigFile(Path.join(TEST_WORK_PATH, 'version.json'));
		await lcc.configMgr.loadConfigFile(Path.join(TEST_WORK_PATH, 'config.json'));
		expect(lcc.configMgr.getConfig('version')).toBeDefined();
		expect(lcc.configMgr.getConfig('config')).toBeDefined();
		lcc.configMgr.removeConfig('version');
		expect(lcc.configMgr.getConfig('version')).toBeUndefined();
		expect(lcc.configMgr.getConfig('config')).toBeDefined();
	});	
	
	test('removeAllConfigs', async ()=>{
		await lcc.configMgr.loadConfigFile(Path.join(TEST_WORK_PATH, 'version.json'));
		await lcc.configMgr.loadConfigFile(Path.join(TEST_WORK_PATH, 'config.json'));
		expect(lcc.configMgr.getConfig('version')).toBeDefined();
		expect(lcc.configMgr.getConfig('config')).toBeDefined();
		lcc.configMgr.removeAllConfigs();
		expect(lcc.configMgr.getConfig('version')).toBeUndefined();
		expect(lcc.configMgr.getConfig('config')).toBeUndefined();
	});	
	
	test('loadConfig(config)',async ()=>{
		expect(lcc.configMgr.getConfig('version')).toBeUndefined();
		await lcc.configMgr.loadConfig('version');
		expect(lcc.configMgr.getConfig('version')).toBeDefined();
	});	
	
	test('loadConfig(config,option{configName})',async ()=>{
		expect(lcc.configMgr.getConfig('config')).toBeUndefined();
		await lcc.configMgr.loadConfig('version', { configName : 'config' });
		expect(lcc.configMgr.getConfig('config')).toBeDefined();
	});
	
	test('loadConfig(config,option{configName,replace:false})',async ()=>{
		expect(lcc.configMgr.getConfig('version')).toBeUndefined();
		await lcc.configMgr.loadConfig('version');
		expect(lcc.configMgr.getConfig<any>('version').versionName).toBe('0.0.0');
		await lcc.configMgr.loadConfig('config', { configName : 'version', merge : true });
		expect(lcc.configMgr.getConfig<any>('version').gameName).toBe('Test');
		expect(lcc.configMgr.getConfig<any>('version').versionName).toBe('0.0.0');
	});
	
	test('loadConfig(config,option{configName,replace:true})',async ()=>{
		expect(lcc.configMgr.getConfig('version')).toBeUndefined();
		await lcc.configMgr.loadConfig('version');
		expect(lcc.configMgr.getConfig<any>('version').versionName).toBe('0.0.0');
		await lcc.configMgr.loadConfig('config', { configName : 'version', merge : false });
		expect(lcc.configMgr.getConfig<any>('version').gameName).toBe('Test');
		expect(lcc.configMgr.getConfig<any>('version').versionName).toBeUndefined();
	});
	
});

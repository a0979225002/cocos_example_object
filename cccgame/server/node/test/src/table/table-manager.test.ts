
const Fs = require('fs');
const Path = require('path');

import { WORK_PATH } from '../config';
lcc.DEBUG.TABLE = false;

const TEST_WORK_PATH = Path.join(WORK_PATH, 'table');

const consoleLog = console.log; 
const consoleWarn = console.warn; 
const consoleError = console.error; 

beforeAll(async ()=>{
	if(!Fs.existsSync(TEST_WORK_PATH)){
		Fs.mkdirSync(TEST_WORK_PATH, { recursive : true });
	}
	lcc.fs.clearDirectory(TEST_WORK_PATH);
	Fs.writeFileSync(Path.join(TEST_WORK_PATH, 'test1.json'), JSON.stringify({
		test1 : {
			role : 'Nomat',
			hpMax : 100,
			mpMax : 20,
			isMan : true,
			value : 'main',
			game : 'Test',
			skills:[ 1, 2, 3, 4 ],
		}
	}));
	Fs.writeFileSync(Path.join(TEST_WORK_PATH, 'test2.json'), JSON.stringify({
		test2 : {
			role : 'Nomat6',
			hpMax : 90,
			mpMax : 10,
			isMan : false,
			value : 'main2',
			game : 'Test2',
			skills:[ 1, 2, 3],
		}
	}));
	
	console.log = (...data:any[])=>{};
	console.warn = (...data:any[])=>{};
	console.error = (...data:any[])=>{};
});

afterAll(async ()=>{
	console.log = consoleLog;
	console.warn = consoleWarn;
	console.error = consoleError;
});

describe('TableManager', ()=>{

	beforeEach(()=>{
		lcc.TABLE_PATH = TEST_WORK_PATH;
		lcc.tableMgr.removeAllTables();
	});

	test('loadTableFile/getTables/getTable/clearTable/removeTable/removeAllTables', ()=>{
		lcc.tableMgr.loadTableFile(Path.join(TEST_WORK_PATH, 'test1.json'));
		lcc.tableMgr.loadTableFile(Path.join(TEST_WORK_PATH, 'test2.json'));
		expect(lcc.js.isEmptyMap(lcc.tableMgr.getTables())).toBeFalsy();
		expect(lcc.tableMgr.getTable('test1')).toBeDefined();
		expect(lcc.tableMgr.getTable('test2')).toBeDefined();
		lcc.tableMgr.removeTable('test1');
		expect(lcc.tableMgr.getTable('test1')).toBeUndefined();
		lcc.tableMgr.removeAllTables();
		expect(lcc.tableMgr.getTable('test2')).toBeUndefined();
		expect(lcc.js.isEmptyMap(lcc.tableMgr.getTables())).toBeTruthy();
	});
	
	test('loadTable(table)', ()=>{
		lcc.tableMgr.loadTable('test1');
		let test1 = lcc.tableMgr.getTable<any>('test1');
		expect(test1).toBeDefined();
		expect(test1.role).toBe('Nomat');
		expect(test1.hpMax).toBe(100);
		expect(test1.mpMax).toBe(20);
		expect(test1.isMan).toBeTruthy();
		expect(test1.game).toBe('Test');
		expect(test1.skills.length).toBe(4);
		expect(test1.skills[0]).toBe(1);
		expect(test1.skills[1]).toBe(2);
		expect(test1.skills[2]).toBe(3);
		expect(test1.skills[3]).toBe(4);
	});
	
	test('loadTable(table1,table2)', ()=>{
		lcc.tableMgr.loadTable('test1', 'test2');
		let test1 = lcc.tableMgr.getTable<any>('test1');
		let test2 = lcc.tableMgr.getTable<any>('test2');
		expect(test1).toBeDefined();
		expect(test1.role).toBe('Nomat');
		expect(test1.hpMax).toBe(100);
		expect(test1.mpMax).toBe(20);
		expect(test1.isMan).toBeTruthy();
		expect(test1.game).toBe('Test');
		expect(test1.skills).toBeDefined();
		expect(test1.value).toBe('main');
		expect(test2).toBeDefined();
		expect(test2.role).toBe('Nomat6');
		expect(test2.hpMax).toBe(90);
		expect(test2.mpMax).toBe(10);
		expect(test2.isMan).toBeFalsy();
		expect(test2.game).toBe('Test2');
		expect(test2.skills).toBeDefined();
		expect(test2.value).toBe('main2');
	});

});

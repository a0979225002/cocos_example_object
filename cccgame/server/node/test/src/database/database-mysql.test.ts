
require('../config');

class MysqlTestConnection {
	public valid:boolean;
	public datas:{[key:string]:{error?:string, result:any}};
	public doTransaction:boolean;
	public doCommit:boolean;
	public doRollback:boolean;
	
	init(){
		this.valid = true;
		this.datas = lcc.js.createMap();
		this.doTransaction = false;
		this.doCommit = false;
		this.doRollback = false;
	}
	release(){
		this.valid = false;
	}
	beginTransaction(callback:(error:any)=>void){
		this.doTransaction = true;
		callback(null);
	}
	commit(callback:(error:any)=>void){
		this.doCommit = true;
		callback(null);
	}
	rollback(callback:(error:any)=>void){
		this.doRollback = true;
		callback(null);
	}
	query(sql:string, params:any[], callback:(error:any, result:any)=>void){
		let data = this.datas[sql];
		if(data){
			callback(data.error, data.result);
		}else{
			callback(null, []);
		}
	}
}

let testConnection = new MysqlTestConnection();

class MysqlTestPool {
	public valid:boolean = true;
	end(){
		this.valid = false;
	}
	getConnection(callback:(error:string, con:MysqlTestConnection)=>void){
		callback(null, testConnection);
	}
}

const mysql = require("mysql");
jest.mock('mysql');

mysql.createPool.mockReturnValue(new MysqlTestPool());

describe('DatabaseManager', ()=>{

	beforeEach(async ()=>{
		await lcc.dbMgr.addDatabase('test',lcc.DatabaseType.MYSQL, { test : true });
		testConnection.init();
	});

	afterEach(async ()=>{
		await lcc.dbMgr.removeDatabase('test');
	});

	test('getDatabase', ()=>{
		expect(lcc.dbMgr.getDatabase('test')).toBeDefined();
	});

	test('removeDatabase',async ()=>{
		await lcc.dbMgr.removeDatabase('test');
		expect(lcc.dbMgr.getDatabase('test')).toBeUndefined();
	});

});

describe('Database', ()=>{

	beforeEach(async ()=>{
		await lcc.dbMgr.addDatabase('test',lcc.DatabaseType.MYSQL, { test : true });
		testConnection.init();
	});

	afterEach(async ()=>{
		await lcc.dbMgr.removeDatabase('test');
	});

	test('getConnection',async ()=>{
		expect(await lcc.dbMgr.getDatabase('test').getConnection()).toBeDefined();
	});

	test('doQuery empty',async ()=>{
		let database = lcc.dbMgr.getDatabase('test');
		let r = database.doQuery(async (con)=>{
			let result = await con.query('select * from game');
			expect(result.length).toBe(0);
			return true;
		});
		expect(r).toBeTruthy();
	});

	test('doQuery',async ()=>{
		let sql = 'select * from game';
		testConnection.datas[sql] = { result : [ 'testvalue' ] };
		let database = lcc.dbMgr.getDatabase('test');
		let r = database.doQuery(async (con)=>{
			let result = await con.query(sql);
			expect(result.length).toBe(1);
			expect(result[0]).toBe('testvalue');
			return true;
		});
		expect(r).toBeTruthy();
	});

	test('doTransaction commit',async ()=>{
		let sql = 'select * from game';
		testConnection.datas[sql] = { result : [ 'testvalue' ] };
		let database = lcc.dbMgr.getDatabase('test');
		let r = await database.doTransaction(async (con)=>{
			let result = await con.query(sql);
			expect(result.length).toBe(1);
			expect(result[0]).toBe('testvalue');
			return true;
		});
		expect(r).toBeTruthy();
		expect(testConnection.doTransaction).toBeTruthy();
		expect(testConnection.doCommit).toBeTruthy();
	});

	test('doTransaction rollback',async ()=>{
		let sql = 'select * from game';
		testConnection.datas[sql] = { result : [ 'testvalue' ] };
		let database = lcc.dbMgr.getDatabase('test');
		let r = await database.doTransaction(async (con)=>{
			let result = await con.query(sql);
			expect(result.length).toBe(1);
			expect(result[0]).toBe('testvalue');
			return false;
		});
		expect(r).toBeFalsy();
		expect(testConnection.doTransaction).toBeTruthy();
		expect(testConnection.doRollback).toBeTruthy();
	});
});

describe('Connection', ()=>{

	beforeEach(async ()=>{
		await lcc.dbMgr.addDatabase('test',lcc.DatabaseType.MYSQL, { test : true });
		testConnection.init();
	});

	afterEach(async ()=>{
		await lcc.dbMgr.removeDatabase('test');
	});

	test('getDatabase', async ()=>{
		let database = lcc.dbMgr.getDatabase('test');
		let connection = await database.getConnection();
		expect(connection.getDatabase()).toBe(database);
	});

	test('beginTransaction',async ()=>{
		let database = lcc.dbMgr.getDatabase('test');
		let connection = await database.getConnection();
		let r = await connection.beginTransaction();
		expect(r).toBeTruthy();
		expect(testConnection.doTransaction).toBeTruthy();
	});

	test('commit',async ()=>{
		let database = lcc.dbMgr.getDatabase('test');
		let connection = await database.getConnection();
		let r = await connection.commit();
		expect(r).toBeTruthy();
		expect(testConnection.doCommit).toBeTruthy();
	});

	test('rollback',async ()=>{
		let database = lcc.dbMgr.getDatabase('test');
		let connection = await database.getConnection();
		let r = await connection.rollback();
		expect(r).toBeTruthy();
		expect(testConnection.doRollback).toBeTruthy();
	});
	
	test('query empty',async ()=>{
		let sql = 'select * from game';
		let database = lcc.dbMgr.getDatabase('test');
		let connection = await database.getConnection();
		let r = await connection.query(sql);
		expect(r.length).toBe(0);
	});
	
	test('query',async ()=>{
		let sql = 'select * from game';
		testConnection.datas[sql] = { result : [ 'testvalue' ] };
		let database = lcc.dbMgr.getDatabase('test');
		let connection = await database.getConnection();
		let r = await connection.query(sql);
		expect(r.length).toBe(1);
		expect(r[0]).toBe('testvalue');
	});
	
});

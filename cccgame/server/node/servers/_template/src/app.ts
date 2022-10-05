import { CONFIG_PATH, WORK_PATH, load as loadConfig, unload as unloadConfig } from './config';

const Path = require('path')

const TAG = "app";

/**
 * 加载
 */
export async function load() {
	await loadConfig();
	///*
	let server = lcc.netServer.addServer("test", lcc.NetLineType.WEBSOCKET, {
		port : 4096,
	});
	if(server){
		//server.useProtoBuff(false);
		server.on("newConnect", (netline:lcc.NetLine)=>{
			netline.on('protocol_' + lcc.protocol.TYPESCRIPTTEST1, (data:lcc.protocol.TypescriptTest1)=>{
				console.log(`服务器收到TYPESCRIPTTEST1:${JSON.stringify(data)}`);
			});
			netline.on('protocol_' + lcc.protocol.TYPESCRIPTTEST2, (data:lcc.protocol.TypescriptTest2)=>{
				console.log(`服务器收到TYPESCRIPTTEST2:${JSON.stringify(data)}`);
			});
			netline.on('protocol_' + lcc.protocol.TYPESCRIPTTEST3, (data:lcc.protocol.TypescriptTest3)=>{
				console.log(`服务器收到TYPESCRIPTTEST3:${JSON.stringify(data)}`);
			});
			netline.on('protocol_' + lcc.protocol.PROTOBUFFTEST, (data:lcc.protocol.ProtoBuffTest)=>{
				console.log(`服务器收到PROTOBUFFTEST:${JSON.stringify(data)}`);
			});
			netline.writeProtocol<lcc.protocol.TypescriptTest1>(lcc.protocol.TYPESCRIPTTEST1, {
				numberV : 100,
				numberG : [ 100,200,300 ],
				numberM : { [1]:100,[2]:200,[3]:300 },
				stringV : "server100",
				stringG : [ "server100","server200","server300" ],
				stringM : { [1]:"server100",[2]:"server200",[3]:"server300" },
				enumV : lcc.protocol.EnumTest.ENUM1,
				enumG : [ lcc.protocol.EnumTest.ENUM1,lcc.protocol.EnumTest.ENUM2,lcc.protocol.EnumTest.ENUM3, ],
				enumM1 : { [1]:lcc.protocol.EnumTest.ENUM1,[2]:lcc.protocol.EnumTest.ENUM2,[3]:lcc.protocol.EnumTest.ENUM3 },
				enumM2 : { ['s1']:lcc.protocol.EnumTest.ENUM1,['s2']:lcc.protocol.EnumTest.ENUM2,['s3']:lcc.protocol.EnumTest.ENUM3 },
				booleanV : true,
				booleanG : [ true, false, true, false ],
				booleanM1 : { [1]:false, [2]:true, [3]:false },
				booleanM2 : { ['s1']:false, ['s2']:true, ['s3']:false, ['s4']:true },
				uint8arrayV : new Uint8Array(5),
				uint8arrayG : [ new Uint8Array(1), new Uint8Array(2), new Uint8Array(3), ],
				uint8arrayM1 : { [1]:new Uint8Array(1),[2]:new Uint8Array(2),[3]:new Uint8Array(3) },
				uint8arrayM2 : { ['s1']:new Uint8Array(1),['s2']:new Uint8Array(2),['s3']:new Uint8Array(3) },
			});
			netline.writeProtocol<lcc.protocol.TypescriptTest2>(lcc.protocol.TYPESCRIPTTEST2,{
				test1V : { numberV : 100 },
				test1G : [{ numberV : 100 },{ numberV : 200 },{ numberV : 300 }],
				test1M1 : { [1]:{ numberV : 100 },[2]:{ numberV : 200 },[3]:{ numberV : 300 }, },
				test1M2 : { ['s1']:{ numberV : 100 },['s2']:{ numberV : 200 },['s3']:{ numberV : 300 }, },
			});
			netline.writeProtocol<lcc.protocol.TypescriptTest3>(lcc.protocol.TYPESCRIPTTEST3,{
				test1V : { numberV : 300 },
				test2V : { test1V : { numberV: 400 } }
			});
			netline.writeProtocol<lcc.protocol.ProtoBuffTest>(lcc.protocol.PROTOBUFFTEST,{
				floatV : 1.5,
				doubleV : 2.3,
				int32V : 200,
				boolV : true,
				bytesV : new Uint8Array(10),
				mapV1 : { ['s1']:true },
				mapV2 : { [1]:false }
			});
		});
		server.open();
	}
	let client = lcc.netClient.addClient("test", lcc.NetLineType.WEBSOCKET, {
		url : "ws://localhost:4096"
	});
	client.on('protocol_' + lcc.protocol.TYPESCRIPTTEST1, (data:lcc.protocol.TypescriptTest1)=>{
		console.log(`客户端收到TYPESCRIPTTEST1:${JSON.stringify(data)}`);
	})
	client.on('protocol_' + lcc.protocol.TYPESCRIPTTEST2, (data:lcc.protocol.TypescriptTest2)=>{
		console.log(`客户端收到TYPESCRIPTTEST2:${JSON.stringify(data)}`);
	});
	client.on('protocol_' + lcc.protocol.TYPESCRIPTTEST3, (data:lcc.protocol.TypescriptTest3)=>{
		console.log(`客户端收到TYPESCRIPTTEST3:${JSON.stringify(data)}`);
	});
	client.on('protocol_' + lcc.protocol.PROTOBUFFTEST, (data:lcc.protocol.ProtoBuffTest)=>{
		console.log(`客户端收到PROTOBUFFTEST:${JSON.stringify(data)}`);
	});
	client.on('onOpen', ()=>{
		client.writeProtocol<lcc.protocol.TypescriptTest1>(lcc.protocol.TYPESCRIPTTEST1, {
			numberV : 200,
		});
	});
	client.open();
	//*/
	/*
	let server = lcc.netServer.addServer("test", lcc.NetLineType.SOCKET, {
		port : 4096,
	});
	if(server){
		server.on("newConnect", (netline:lcc.NetLine)=>{
			netline.on('protocol_' + lcc.protocol.TYPESCRIPTTEST1, (data:lcc.protocol.TypescriptTest1)=>{
				console.log(`服务器收到TYPESCRIPTTEST1:${JSON.stringify(data)}`);
			});
			netline.on('protocol_' + lcc.protocol.TYPESCRIPTTEST2, (data:lcc.protocol.TypescriptTest2)=>{
				console.log(`服务器收到TYPESCRIPTTEST2:${JSON.stringify(data)}`);
			});
			netline.on('protocol_' + lcc.protocol.TYPESCRIPTTEST3, (data:lcc.protocol.TypescriptTest3)=>{
				console.log(`服务器收到TYPESCRIPTTEST3:${JSON.stringify(data)}`);
			});
			netline.on('protocol_' + lcc.protocol.PROTOBUFFTEST, (data:lcc.protocol.ProtoBuffTest)=>{
				console.log(`服务器收到PROTOBUFFTEST:${JSON.stringify(data)}`);
			});
			netline.writeProtocol<lcc.protocol.TypescriptTest1>(lcc.protocol.TYPESCRIPTTEST1, {
				numberV : 100,
				numberG : [ 100,200,300 ],
				numberM : { [1]:100,[2]:200,[3]:300 },
				stringV : "server100",
				stringG : [ "server100","server200","server300" ],
				stringM : { [1]:"server100",[2]:"server200",[3]:"server300" },
				enumV : lcc.protocol.EnumTest.ENUM1,
				enumG : [ lcc.protocol.EnumTest.ENUM1,lcc.protocol.EnumTest.ENUM2,lcc.protocol.EnumTest.ENUM3, ],
				enumM1 : { [1]:lcc.protocol.EnumTest.ENUM1,[2]:lcc.protocol.EnumTest.ENUM2,[3]:lcc.protocol.EnumTest.ENUM3 },
				enumM2 : { ['s1']:lcc.protocol.EnumTest.ENUM1,['s2']:lcc.protocol.EnumTest.ENUM2,['s3']:lcc.protocol.EnumTest.ENUM3 },
				booleanV : true,
				booleanG : [ true, false, true, false ],
				booleanM1 : { [1]:false, [2]:true, [3]:false },
				booleanM2 : { ['s1']:false, ['s2']:true, ['s3']:false, ['s4']:true },
				uint8arrayV : new Uint8Array(5),
				uint8arrayG : [ new Uint8Array(1), new Uint8Array(2), new Uint8Array(3), ],
				uint8arrayM1 : { [1]:new Uint8Array(1),[2]:new Uint8Array(2),[3]:new Uint8Array(3) },
				uint8arrayM2 : { ['s1']:new Uint8Array(1),['s2']:new Uint8Array(2),['s3']:new Uint8Array(3) },
			});
			netline.writeProtocol<lcc.protocol.TypescriptTest2>(lcc.protocol.TYPESCRIPTTEST2,{
				test1V : { numberV : 100 },
				test1G : [{ numberV : 100 },{ numberV : 200 },{ numberV : 300 }],
				test1M1 : { [1]:{ numberV : 100 },[2]:{ numberV : 200 },[3]:{ numberV : 300 }, },
				test1M2 : { ['s1']:{ numberV : 100 },['s2']:{ numberV : 200 },['s3']:{ numberV : 300 }, },
			});
			netline.writeProtocol<lcc.protocol.TypescriptTest3>(lcc.protocol.TYPESCRIPTTEST3,{
				test1V : { numberV : 300 },
				test2V : { test1V : { numberV: 400 } }
			});
			netline.writeProtocol<lcc.protocol.ProtoBuffTest>(lcc.protocol.PROTOBUFFTEST,{
				floatV : 1.5,
				doubleV : 2.3,
				int32V : 200,
				boolV : true,
				bytesV : new Uint8Array(10),
				mapV1 : { ['s1']:true },
				mapV2 : { [1]:false }
			});
		});
		server.open();
	}
	let client = lcc.netClient.addClient("test", lcc.NetLineType.SOCKET, {
		address : 'localhost',
		port : 4096,
	});
	client.on('protocol_' + lcc.protocol.TYPESCRIPTTEST1, (data:lcc.protocol.TypescriptTest1)=>{
		console.log(`客户端收到TYPESCRIPTTEST1:${JSON.stringify(data)}`);
	})
	client.on('protocol_' + lcc.protocol.TYPESCRIPTTEST2, (data:lcc.protocol.TypescriptTest2)=>{
		console.log(`客户端收到TYPESCRIPTTEST2:${JSON.stringify(data)}`);
	});
	client.on('protocol_' + lcc.protocol.TYPESCRIPTTEST3, (data:lcc.protocol.TypescriptTest3)=>{
		console.log(`客户端收到TYPESCRIPTTEST3:${JSON.stringify(data)}`);
	});
	client.on('protocol_' + lcc.protocol.PROTOBUFFTEST, (data:lcc.protocol.ProtoBuffTest)=>{
		console.log(`客户端收到PROTOBUFFTEST:${JSON.stringify(data)}`);
	});
	client.on('onOpen', ()=>{
		client.writeProtocol<lcc.protocol.TypescriptTest1>(lcc.protocol.TYPESCRIPTTEST1, {
			numberV : 200,
		});
	});
	client.open();
	*/
	/*
	let server = lcc.netServer.addServer("test", lcc.NetLineType.HTTP, {
		port : 4096,
	});
	if(server){
		//server.useProtoBuff(false);
		server.on("newConnect", (netline:lcc.NetLine)=>{
			netline.on('protocol_' + lcc.protocol.TYPESCRIPTTEST1, (data:lcc.protocol.TypescriptTest1)=>{
				console.log(`服务器收到TYPESCRIPTTEST1:${JSON.stringify(data)}`);
			});
			netline.on('protocol_' + lcc.protocol.TYPESCRIPTTEST2, (data:lcc.protocol.TypescriptTest2)=>{
				console.log(`服务器收到TYPESCRIPTTEST2:${JSON.stringify(data)}`);
			});
			netline.on('protocol_' + lcc.protocol.TYPESCRIPTTEST3, (data:lcc.protocol.TypescriptTest3)=>{
				console.log(`服务器收到TYPESCRIPTTEST3:${JSON.stringify(data)}`);
			});
			netline.on('protocol_' + lcc.protocol.PROTOBUFFTEST, (data:lcc.protocol.ProtoBuffTest)=>{
				console.log(`服务器收到PROTOBUFFTEST:${JSON.stringify(data)}`);
			});
			netline.writeProtocol<lcc.protocol.TypescriptTest1>(lcc.protocol.TYPESCRIPTTEST1, {
				numberV : 100,
				numberG : [ 100,200,300 ],
				numberM : { [1]:100,[2]:200,[3]:300 },
				stringV : "server100",
				stringG : [ "server100","server200","server300" ],
				stringM : { [1]:"server100",[2]:"server200",[3]:"server300" },
				enumV : lcc.protocol.EnumTest.ENUM1,
				enumG : [ lcc.protocol.EnumTest.ENUM1,lcc.protocol.EnumTest.ENUM2,lcc.protocol.EnumTest.ENUM3, ],
				enumM1 : { [1]:lcc.protocol.EnumTest.ENUM1,[2]:lcc.protocol.EnumTest.ENUM2,[3]:lcc.protocol.EnumTest.ENUM3 },
				enumM2 : { ['s1']:lcc.protocol.EnumTest.ENUM1,['s2']:lcc.protocol.EnumTest.ENUM2,['s3']:lcc.protocol.EnumTest.ENUM3 },
				booleanV : true,
				booleanG : [ true, false, true, false ],
				booleanM1 : { [1]:false, [2]:true, [3]:false },
				booleanM2 : { ['s1']:false, ['s2']:true, ['s3']:false, ['s4']:true },
				uint8arrayV : new Uint8Array(5),
				uint8arrayG : [ new Uint8Array(1), new Uint8Array(2), new Uint8Array(3), ],
				uint8arrayM1 : { [1]:new Uint8Array(1),[2]:new Uint8Array(2),[3]:new Uint8Array(3) },
				uint8arrayM2 : { ['s1']:new Uint8Array(1),['s2']:new Uint8Array(2),['s3']:new Uint8Array(3) },
			});
			netline.writeProtocol<lcc.protocol.TypescriptTest2>(lcc.protocol.TYPESCRIPTTEST2,{
				test1V : { numberV : 100 },
				test1G : [{ numberV : 100 },{ numberV : 200 },{ numberV : 300 }],
				test1M1 : { [1]:{ numberV : 100 },[2]:{ numberV : 200 },[3]:{ numberV : 300 }, },
				test1M2 : { ['s1']:{ numberV : 100 },['s2']:{ numberV : 200 },['s3']:{ numberV : 300 }, },
			});
			netline.writeProtocol<lcc.protocol.TypescriptTest3>(lcc.protocol.TYPESCRIPTTEST3,{
				test1V : { numberV : 300 },
				test2V : { test1V : { numberV: 400 } }
			});
			netline.writeProtocol<lcc.protocol.ProtoBuffTest>(lcc.protocol.PROTOBUFFTEST,{
				floatV : 1.5,
				doubleV : 2.3,
				int32V : 200,
				boolV : true,
				bytesV : new Uint8Array(10),
				mapV1 : { ['s1']:true },
				mapV2 : { [1]:false }
			});
		});
		server.open();
	}
	let client = lcc.netClient.addClient("test", lcc.NetLineType.HTTP, {
		url : 'http://localhost:4096',
		call : lcc.HttpCall.GET
	});
	client.on('protocol_' + lcc.protocol.TYPESCRIPTTEST1, (data:lcc.protocol.TypescriptTest1)=>{
		console.log(`客户端收到TYPESCRIPTTEST1:${JSON.stringify(data)}`);
	})
	client.on('protocol_' + lcc.protocol.TYPESCRIPTTEST2, (data:lcc.protocol.TypescriptTest2)=>{
		console.log(`客户端收到TYPESCRIPTTEST2:${JSON.stringify(data)}`);
	});
	client.on('protocol_' + lcc.protocol.TYPESCRIPTTEST3, (data:lcc.protocol.TypescriptTest3)=>{
		console.log(`客户端收到TYPESCRIPTTEST3:${JSON.stringify(data)}`);
	});
	client.on('protocol_' + lcc.protocol.PROTOBUFFTEST, (data:lcc.protocol.ProtoBuffTest)=>{
		console.log(`客户端收到PROTOBUFFTEST:${JSON.stringify(data)}`);
	});
	client.on('onOpen', ()=>{
		client.writeProtocol<lcc.protocol.TypescriptTest1>(lcc.protocol.TYPESCRIPTTEST1, {
			numberV : 200,
		});
	});
	client.open();
	*/
	
	/*
	await lcc.configMgr.loadConfig('version', { configName : "test" }, lcc.CONFIG_PATH);
	console.log(lcc.CONFIGS);
	*/
	
	/*
	//lcc.tableMgr.loadTableConfig(/(game|roles)/, lcc.TABLE_PATH);
	lcc.tableMgr.loadTable('game', { tableName : 'test' }, lcc.TABLE_PATH);
	console.log(JSON.stringify(lcc.TABLES.test));
	*/
	`
	let database = lcc.dbMgr.addDatabase("test", lcc.DatabaseType.MYSQL, {
		connectionLimit: 10,
		host: "localhost",
		user: "root",
		password: "root",
		port: 3306,
		multipleStatements: true,
		database: "test"
	});
	database.connect();
	/*
	database.doQuery(async(con:lcc.Connection)=>{
		//let result = await con.query("insert into test(value) values(?);", [2]);
		let result = await con.query("select * from test;");
		if(result){
			console.log(result);
		}
		return true;
	});
	*/
	database.doTransaction(async(con:lcc.Connection)=>{
		await con.query("update test set value = ? where id = ?;", [ 10, 1 ]);
		return false;
	});
	`
	//*
	console.log((await lcc.workerMgr.callWorker(lcc.makeWorkerMeta({
		workerName : 'Math',
		groupName : 'Tools'
	}, {
		classPath : Path.join(__dirname, 'workers', 'Math')
	}), 'add', 1, 2, 3, 4)).return);

	//*/
	//lcc.configMgr.loadConfig('version');
	//lcc.configMgr.loadConfig('server-test', { configName : 'version'});
	
	//let http = require('http');
	//let server = http.createServer(lcc.express.createFileDownloadExpress(`F:/workspace/FilesServer/web/public`));
	//server.listen(8888);

	//await lcc.webServer.addServer('downFiles', lcc.express.createFilesExpress(WORK_PATH), 4567);
	//await lcc.timerMgr.sleep(10);
	//console.log(await lcc.http.getJson('http://localhost:4000/config/version.json'));
}

/**
 * 卸载
 */
export async function unload() {
    //await lcc.workerMgr.release();
	await unloadConfig();
}

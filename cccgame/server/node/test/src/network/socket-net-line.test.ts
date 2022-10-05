
require('../config');
lcc.DEBUG.NETWORK = false;
require('./lcc-protocols');

let portTest1 = 5678;
async function getEmptyPort1() {
	while(true){
		if(await lcc.os.isEmptyPort(portTest1)){
			let r = portTest1;
			portTest1 ++;
			return r;
		}else{
			portTest1 ++;
		}
	}
}

describe('NetServer', ()=>{

	afterEach(async ()=>{
		lcc.netServer.removeAllServers();
	});

	test('addServer/getServer/removeServer', async ()=>{
		expect(lcc.js.isEmptyMap(lcc.NETSERVERS)).toBeTruthy();
		lcc.netServer.addServer('testServer', lcc.NetLineType.SOCKET, {  port : await getEmptyPort1() });
		lcc.netServer.addServer('testServer2', lcc.NetLineType.SOCKET, {  port : await getEmptyPort1() });
		expect(lcc.js.isEmptyMap(lcc.NETSERVERS)).toBeFalsy();
		expect(lcc.netServer.getServer('testServer')).toBeDefined();
		expect(lcc.netServer.getServer('testServer2')).toBeDefined();
		lcc.netServer.removeServer('testServer');
		expect(lcc.js.isEmptyMap(lcc.NETSERVERS)).toBeFalsy();
		expect(lcc.netServer.getServer('testServer')).toBeUndefined();
		lcc.netServer.removeServer('testServer2');
		expect(lcc.js.isEmptyMap(lcc.NETSERVERS)).toBeTruthy();
		expect(lcc.netServer.getServer('testServer2')).toBeUndefined();
	});

	test('addServer/getServer/removeAllServers', async ()=>{
		expect(lcc.js.isEmptyMap(lcc.NETSERVERS)).toBeTruthy();
		lcc.netServer.addServer('testServer', lcc.NetLineType.SOCKET, {  port : await getEmptyPort1() });
		lcc.netServer.addServer('testServer2', lcc.NetLineType.SOCKET, {  port : await getEmptyPort1() });
		expect(lcc.js.isEmptyMap(lcc.NETSERVERS)).toBeFalsy();
		expect(lcc.netServer.getServer('testServer')).toBeDefined();
		expect(lcc.netServer.getServer('testServer2')).toBeDefined();
		lcc.netServer.removeAllServers();
		expect(lcc.js.isEmptyMap(lcc.NETSERVERS)).toBeTruthy();
		expect(lcc.netServer.getServer('testServer')).toBeUndefined();
		expect(lcc.netServer.getServer('testServer2')).toBeUndefined();
	});
});

describe('NetClient', ()=>{

	afterEach(async ()=>{
		lcc.netClient.removeAllClients();
	});

	test('addClient/getClient/removeClient', async ()=>{
		expect(lcc.js.isEmptyMap(lcc.NETCLIENTS)).toBeTruthy();
		lcc.netClient.addClient('testClient', lcc.NetLineType.SOCKET, { address:'localhost', port : 4567 });
		lcc.netClient.addClient('testClient2', lcc.NetLineType.SOCKET, { address:'localhost', port : 4567 });
		expect(lcc.js.isEmptyMap(lcc.NETCLIENTS)).toBeFalsy();
		expect(lcc.netClient.getClient('testClient')).toBeDefined();
		expect(lcc.netClient.getClient('testClient2')).toBeDefined();
		lcc.netClient.removeClient('testClient');
		expect(lcc.js.isEmptyMap(lcc.NETCLIENTS)).toBeFalsy();
		expect(lcc.netClient.getClient('testClient')).toBeUndefined();
		lcc.netClient.removeClient('testClient2');
		expect(lcc.js.isEmptyMap(lcc.NETCLIENTS)).toBeTruthy();
		expect(lcc.netClient.getClient('testClient2')).toBeUndefined();
	});

	test('addClient/getClient/removeAllClients', async ()=>{
		expect(lcc.js.isEmptyMap(lcc.NETCLIENTS)).toBeTruthy();
		lcc.netClient.addClient('testClient', lcc.NetLineType.SOCKET, { address:'localhost', port : 4567 });
		lcc.netClient.addClient('testClient2', lcc.NetLineType.SOCKET, { address:'localhost', port : 4567 });
		expect(lcc.js.isEmptyMap(lcc.NETCLIENTS)).toBeFalsy();
		expect(lcc.netClient.getClient('testClient')).toBeDefined();
		expect(lcc.netClient.getClient('testClient2')).toBeDefined();
		lcc.netClient.removeAllClients();
		expect(lcc.js.isEmptyMap(lcc.NETCLIENTS)).toBeTruthy();
		expect(lcc.netClient.getClient('testClient')).toBeUndefined();
		expect(lcc.netClient.getClient('testClient2')).toBeUndefined();
	});
});

describe('net-line', ()=>{
	
	afterEach(async ()=>{
		lcc.netClient.removeAllClients();
		lcc.netServer.removeAllServers();
	});

	test('useProtoBuf/isUseProtoBuf', async ()=>{
		let clientLine = lcc.netClient.addClient('testClient', lcc.NetLineType.SOCKET, { address:'localhost', port : 4567 });
		expect(clientLine).toBeDefined();
		clientLine.useProtoBuf(true);
		expect(clientLine.isUseProtoBuf()).toBeTruthy();
		clientLine.useProtoBuf(false);
		expect(clientLine.isUseProtoBuf()).toBeFalsy();
	});

	test('writeProtocol/dealProtocol TYPESCRIPTTEST1 useProtoBuf', async ()=>{
		let tempPort = await getEmptyPort1();
		let server = lcc.netServer.addServer('testServer', lcc.NetLineType.SOCKET, {  port : tempPort });
		let client = lcc.netClient.addClient('testClient', lcc.NetLineType.SOCKET, { address:'localhost', port : tempPort });
		server.useProtoBuf(true);
		client.useProtoBuf(true);
		await new Promise((resolve)=>{
			server.on("newConnect", (conLine:lcc.NetLine)=>{
				conLine.on('protocol-' + lcc.protocol.TYPESCRIPTTEST1, (data:lcc.protocol.TypescriptTest1)=>{
					conLine.writeProtocol<lcc.protocol.TypescriptTest1>(lcc.protocol.TYPESCRIPTTEST1,data);
				});
			});
			server.on('onOpen', (result:boolean, serverLine:lcc.NetLine)=>{
				expect(result).toBeTruthy();
				expect(serverLine).toBe(server);
				client.on('onOpen', ()=>{
					client.on('protocol-' + lcc.protocol.TYPESCRIPTTEST1, (data:lcc.protocol.TypescriptTest1)=>{
						expect(data).toBeDefined();
						expect(data.numberV).toBe(1);
						expect(data.numberG.length).toBe(3);
						expect(data.numberG[0]).toBe(1);
						expect(data.numberG[1]).toBe(2);
						expect(data.numberG[2]).toBe(3);
						expect(data.numberM[1]).toBe(1);
						expect(data.numberM[2]).toBe(2);
						expect(data.numberM[3]).toBe(3);
						expect(data.stringV).toBe('s1');
						expect(data.stringG.length).toBe(3);
						expect(data.stringG[0]).toBe('s1');
						expect(data.stringG[1]).toBe('s2');
						expect(data.stringG[2]).toBe('s3');
						expect(data.stringM.a).toBe('s1');
						expect(data.stringM.b).toBe('s2');
						expect(data.stringM.c).toBe('s3');
						expect(data.enumV).toBe(lcc.protocol.EnumTest.ENUM1);
						expect(data.enumG.length).toBe(3);
						expect(data.enumG[0]).toBe(lcc.protocol.EnumTest.ENUM1);
						expect(data.enumG[1]).toBe(lcc.protocol.EnumTest.ENUM2);
						expect(data.enumG[2]).toBe(lcc.protocol.EnumTest.ENUM3);
						expect(data.enumM1[1]).toBe(lcc.protocol.EnumTest.ENUM1);
						expect(data.enumM1[2]).toBe(lcc.protocol.EnumTest.ENUM2);
						expect(data.enumM1[3]).toBe(lcc.protocol.EnumTest.ENUM3);
						expect(data.enumM2['s1']).toBe(lcc.protocol.EnumTest.ENUM1);
						expect(data.enumM2['s2']).toBe(lcc.protocol.EnumTest.ENUM2);
						expect(data.enumM2['s3']).toBe(lcc.protocol.EnumTest.ENUM3);
						expect(data.booleanV).toBeTruthy();
						expect(data.booleanG.length).toBe(3);
						expect(data.booleanG[0]).toBeTruthy();
						expect(data.booleanG[1]).toBeFalsy();
						expect(data.booleanG[2]).toBeTruthy();
						expect(data.booleanM1[1]).toBeTruthy();
						expect(data.booleanM1[2]).toBeFalsy();
						expect(data.booleanM1[3]).toBeTruthy();
						expect(data.booleanM2['s1']).toBeTruthy();
						expect(data.booleanM2['s2']).toBeFalsy();
						expect(data.booleanM2['s3']).toBeTruthy();
						expect(data.uint8arrayV.length).toBe(1);
						expect(data.uint8arrayG.length).toBe(3);
						expect(data.uint8arrayG[0].length).toBe(1);
						expect(data.uint8arrayG[1].length).toBe(2);
						expect(data.uint8arrayG[2].length).toBe(3);
						expect(data.uint8arrayM1[1].length).toBe(1);
						expect(data.uint8arrayM1[2].length).toBe(2);
						expect(data.uint8arrayM1[3].length).toBe(3);
						expect(data.uint8arrayM2['s1'].length).toBe(1);
						expect(data.uint8arrayM2['s2'].length).toBe(2);
						expect(data.uint8arrayM2['s3'].length).toBe(3);
						resolve(null);
					})
					client.writeProtocol<lcc.protocol.TypescriptTest1>(lcc.protocol.TYPESCRIPTTEST1,{
						numberV:1,
						numberG:[1,2,3],
						numberM:{1:1,2:2,3:3},
						stringV:'s1',
						stringG:['s1','s2','s3'],
						stringM:{a:'s1',b:'s2',c:'s3',},
						enumV:lcc.protocol.EnumTest.ENUM1,
						enumG:[lcc.protocol.EnumTest.ENUM1, lcc.protocol.EnumTest.ENUM2, lcc.protocol.EnumTest.ENUM3],
						enumM1:{1:lcc.protocol.EnumTest.ENUM1,2:lcc.protocol.EnumTest.ENUM2,3:lcc.protocol.EnumTest.ENUM3},
						enumM2:{'s1':lcc.protocol.EnumTest.ENUM1,'s2':lcc.protocol.EnumTest.ENUM2,'s3':lcc.protocol.EnumTest.ENUM3},
						booleanV:true,
						booleanG:[true, false, true],
						booleanM1:{1:true, 2:false, 3:true},
						booleanM2:{'s1':true, 's2':false, 's3':true},
						uint8arrayV:new Uint8Array(1),
						uint8arrayG:[new Uint8Array(1),new Uint8Array(2),new Uint8Array(3)],
						uint8arrayM1:{1:new Uint8Array(1),2:new Uint8Array(2),3:new Uint8Array(3)},
						uint8arrayM2:{'s1':new Uint8Array(1),'s2':new Uint8Array(2),'s3':new Uint8Array(3)},
					});
				});
				client.open();
			});
			server.open();
		});
	});

	test('writeProtocol/dealProtocol TYPESCRIPTTEST1', async ()=>{
		let tempPort = await getEmptyPort1();
		let server = lcc.netServer.addServer('testServer', lcc.NetLineType.SOCKET, {  port : tempPort });
		let client = lcc.netClient.addClient('testClient', lcc.NetLineType.SOCKET, { address:'localhost', port : tempPort });
		server.useProtoBuf(false);
		client.useProtoBuf(false);
		await new Promise((resolve)=>{
			server.on("newConnect", (conLine:lcc.NetLine)=>{
				conLine.on('protocol-' + lcc.protocol.TYPESCRIPTTEST1, (data:lcc.protocol.TypescriptTest1)=>{
					conLine.writeProtocol<lcc.protocol.TypescriptTest1>(lcc.protocol.TYPESCRIPTTEST1,data);
				});
			});
			server.on('onOpen', (result:boolean, serverLine:lcc.NetLine)=>{
				expect(result).toBeTruthy();
				expect(serverLine).toBe(server);
				client.on('onOpen', ()=>{
					client.on('protocol-' + lcc.protocol.TYPESCRIPTTEST1, (data:lcc.protocol.TypescriptTest1)=>{
						expect(data).toBeDefined();
						expect(data.numberV).toBe(1);
						expect(data.numberG.length).toBe(3);
						expect(data.numberG[0]).toBe(1);
						expect(data.numberG[1]).toBe(2);
						expect(data.numberG[2]).toBe(3);
						expect(data.numberM[1]).toBe(1);
						expect(data.numberM[2]).toBe(2);
						expect(data.numberM[3]).toBe(3);
						expect(data.stringV).toBe('s1');
						expect(data.stringG.length).toBe(3);
						expect(data.stringG[0]).toBe('s1');
						expect(data.stringG[1]).toBe('s2');
						expect(data.stringG[2]).toBe('s3');
						expect(data.stringM.a).toBe('s1');
						expect(data.stringM.b).toBe('s2');
						expect(data.stringM.c).toBe('s3');
						expect(data.enumV).toBe(lcc.protocol.EnumTest.ENUM1);
						expect(data.enumG.length).toBe(3);
						expect(data.enumG[0]).toBe(lcc.protocol.EnumTest.ENUM1);
						expect(data.enumG[1]).toBe(lcc.protocol.EnumTest.ENUM2);
						expect(data.enumG[2]).toBe(lcc.protocol.EnumTest.ENUM3);
						expect(data.enumM1[1]).toBe(lcc.protocol.EnumTest.ENUM1);
						expect(data.enumM1[2]).toBe(lcc.protocol.EnumTest.ENUM2);
						expect(data.enumM1[3]).toBe(lcc.protocol.EnumTest.ENUM3);
						expect(data.enumM2['s1']).toBe(lcc.protocol.EnumTest.ENUM1);
						expect(data.enumM2['s2']).toBe(lcc.protocol.EnumTest.ENUM2);
						expect(data.enumM2['s3']).toBe(lcc.protocol.EnumTest.ENUM3);
						expect(data.booleanV).toBeTruthy();
						expect(data.booleanG.length).toBe(3);
						expect(data.booleanG[0]).toBeTruthy();
						expect(data.booleanG[1]).toBeFalsy();
						expect(data.booleanG[2]).toBeTruthy();
						expect(data.booleanM1[1]).toBeTruthy();
						expect(data.booleanM1[2]).toBeFalsy();
						expect(data.booleanM1[3]).toBeTruthy();
						expect(data.booleanM2['s1']).toBeTruthy();
						expect(data.booleanM2['s2']).toBeFalsy();
						expect(data.booleanM2['s3']).toBeTruthy();
						expect(data.uint8arrayV.length).toBe(5);
						expect(data.uint8arrayG.length).toBe(3);
						expect(data.uint8arrayG[0].length).toBe(1);
						expect(data.uint8arrayG[1].length).toBe(2);
						expect(data.uint8arrayG[2].length).toBe(3);
						expect(data.uint8arrayM1[1].length).toBe(1);
						expect(data.uint8arrayM1[2].length).toBe(2);
						expect(data.uint8arrayM1[3].length).toBe(3);
						expect(data.uint8arrayM2['s1'].length).toBe(1);
						expect(data.uint8arrayM2['s2'].length).toBe(2);
						expect(data.uint8arrayM2['s3'].length).toBe(3);
						resolve(null);
					})
					client.writeProtocol<lcc.protocol.TypescriptTest1>(lcc.protocol.TYPESCRIPTTEST1,{
						numberV:1,
						numberG:[1,2,3],
						numberM:{1:1,2:2,3:3},
						stringV:'s1',
						stringG:['s1','s2','s3'],
						stringM:{a:'s1',b:'s2',c:'s3',},
						enumV:lcc.protocol.EnumTest.ENUM1,
						enumG:[lcc.protocol.EnumTest.ENUM1, lcc.protocol.EnumTest.ENUM2, lcc.protocol.EnumTest.ENUM3],
						enumM1:{1:lcc.protocol.EnumTest.ENUM1,2:lcc.protocol.EnumTest.ENUM2,3:lcc.protocol.EnumTest.ENUM3},
						enumM2:{'s1':lcc.protocol.EnumTest.ENUM1,'s2':lcc.protocol.EnumTest.ENUM2,'s3':lcc.protocol.EnumTest.ENUM3},
						booleanV:true,
						booleanG:[true, false, true],
						booleanM1:{1:true, 2:false, 3:true},
						booleanM2:{'s1':true, 's2':false, 's3':true},
						uint8arrayV:'55555',
						uint8arrayG:['1','22','333'],
						uint8arrayM1:{1:'1',2:'22',3:'333'},
						uint8arrayM2:{'s1':'1','s2':'22','s3':'333'},
					});
				});
				client.open();
			});
			server.open();
		});
	});
	
	test('writeProtocol/dealProtocol TYPESCRIPTTEST2 useProtoBuf', async ()=>{
		let tempPort = await getEmptyPort1();
		let server = lcc.netServer.addServer('testServer', lcc.NetLineType.SOCKET, {  port : tempPort });
		let client = lcc.netClient.addClient('testClient', lcc.NetLineType.SOCKET, { address:'localhost', port : tempPort });
		server.useProtoBuf(true);
		client.useProtoBuf(true);
		await new Promise((resolve)=>{
			server.on("newConnect", (conLine:lcc.NetLine)=>{
				conLine.on('protocol-' + lcc.protocol.TYPESCRIPTTEST2, (data:lcc.protocol.TypescriptTest2)=>{
					conLine.writeProtocol<lcc.protocol.TypescriptTest2>(lcc.protocol.TYPESCRIPTTEST2,data);
				});
			});
			server.on('onOpen', (result:boolean, serverLine:lcc.NetLine)=>{
				expect(result).toBeTruthy();
				expect(serverLine).toBe(server);
				client.on('onOpen', ()=>{
					client.on('protocol-' + lcc.protocol.TYPESCRIPTTEST2, (data:lcc.protocol.TypescriptTest2)=>{
						expect(data).toBeDefined();
						expect(data.test1V).toBeDefined();
						expect(data.test1G).toBeDefined();
						expect(data.test1M1).toBeDefined();
						expect(data.test1M2).toBeDefined();
						expect(data.test1V.numberV).toBe(1);
						expect(data.test1G.length).toBe(3);
						expect(data.test1G[0].numberV).toBe(1);
						expect(data.test1G[1].numberV).toBe(2);
						expect(data.test1G[2].numberV).toBe(3);
						expect(data.test1M1[1].numberV).toBe(1);
						expect(data.test1M1[2].numberV).toBe(2);
						expect(data.test1M1[3].numberV).toBe(3);
						expect(data.test1M2['s1'].numberV).toBe(1);
						expect(data.test1M2['s2'].numberV).toBe(2);
						expect(data.test1M2['s3'].numberV).toBe(3);
						resolve(null);
					})
					client.writeProtocol<lcc.protocol.TypescriptTest2>(lcc.protocol.TYPESCRIPTTEST2,{
						test1V:{ numberV : 1 },
						test1G:[{ numberV : 1 },{ numberV : 2 },{ numberV : 3 }],
						test1M1:{1:{ numberV : 1 },2:{ numberV : 2 },3:{ numberV : 3 }},
						test1M2:{'s1':{ numberV : 1 },'s2':{ numberV : 2 },'s3':{ numberV : 3 }},
					});
				});
				client.open();
			});
			server.open();
		});
	});

	test('writeProtocol/dealProtocol TYPESCRIPTTEST2', async ()=>{
		let tempPort = await getEmptyPort1();
		let server = lcc.netServer.addServer('testServer', lcc.NetLineType.SOCKET, {  port : tempPort });
		let client = lcc.netClient.addClient('testClient', lcc.NetLineType.SOCKET, { address:'localhost', port : tempPort });
		server.useProtoBuf(false);
		client.useProtoBuf(false);
		await new Promise((resolve)=>{
			server.on("newConnect", (conLine:lcc.NetLine)=>{
				conLine.on('protocol-' + lcc.protocol.TYPESCRIPTTEST2, (data:lcc.protocol.TypescriptTest2)=>{
					conLine.writeProtocol<lcc.protocol.TypescriptTest2>(lcc.protocol.TYPESCRIPTTEST2,data);
				});
			});
			server.on('onOpen', (result:boolean, serverLine:lcc.NetLine)=>{
				expect(result).toBeTruthy();
				expect(serverLine).toBe(server);
				client.on('onOpen', ()=>{
					client.on('protocol-' + lcc.protocol.TYPESCRIPTTEST2, (data:lcc.protocol.TypescriptTest2)=>{
						expect(data).toBeDefined();
						expect(data.test1V).toBeDefined();
						expect(data.test1G).toBeDefined();
						expect(data.test1M1).toBeDefined();
						expect(data.test1M2).toBeDefined();
						expect(data.test1V.numberV).toBe(1);
						expect(data.test1G.length).toBe(3);
						expect(data.test1G[0].numberV).toBe(1);
						expect(data.test1G[1].numberV).toBe(2);
						expect(data.test1G[2].numberV).toBe(3);
						expect(data.test1M1[1].numberV).toBe(1);
						expect(data.test1M1[2].numberV).toBe(2);
						expect(data.test1M1[3].numberV).toBe(3);
						expect(data.test1M2['s1'].numberV).toBe(1);
						expect(data.test1M2['s2'].numberV).toBe(2);
						expect(data.test1M2['s3'].numberV).toBe(3);
						resolve(null);
					})
					client.writeProtocol<lcc.protocol.TypescriptTest2>(lcc.protocol.TYPESCRIPTTEST2,{
						test1V:{ numberV : 1 },
						test1G:[{ numberV : 1 },{ numberV : 2 },{ numberV : 3 }],
						test1M1:{1:{ numberV : 1 },2:{ numberV : 2 },3:{ numberV : 3 }},
						test1M2:{'s1':{ numberV : 1 },'s2':{ numberV : 2 },'s3':{ numberV : 3 }},
					});
				});
				client.open();
			});
			server.open();
		});
	});
	
	test('writeProtocol/dealProtocol TYPESCRIPTTEST3 useProtoBuf', async ()=>{
		let tempPort = await getEmptyPort1();
		let server = lcc.netServer.addServer('testServer', lcc.NetLineType.SOCKET, {  port : tempPort });
		let client = lcc.netClient.addClient('testClient', lcc.NetLineType.SOCKET, { address:'localhost', port : tempPort });
		server.useProtoBuf(true);
		client.useProtoBuf(true);
		await new Promise((resolve)=>{
			server.on("newConnect", (conLine:lcc.NetLine)=>{
				conLine.on('protocol-' + lcc.protocol.TYPESCRIPTTEST3, (data:lcc.protocol.TypescriptTest3)=>{
					conLine.writeProtocol<lcc.protocol.TypescriptTest3>(lcc.protocol.TYPESCRIPTTEST3,data);
				});
			});
			server.on('onOpen', (result:boolean, serverLine:lcc.NetLine)=>{
				expect(result).toBeTruthy();
				expect(serverLine).toBe(server);
				client.on('onOpen', ()=>{
					client.on('protocol-' + lcc.protocol.TYPESCRIPTTEST3, (data:lcc.protocol.TypescriptTest3)=>{
						expect(data).toBeDefined();
						expect(data.test1V).toBeDefined();
						expect(data.test1G).toBeDefined();
						expect(data.test1M1).toBeDefined();
						expect(data.test1M2).toBeDefined();
						expect(data.test1V.numberV).toBe(1);
						expect(data.test1G.length).toBe(3);
						expect(data.test1G[0].numberV).toBe(1);
						expect(data.test1G[1].numberV).toBe(2);
						expect(data.test1G[2].numberV).toBe(3);
						expect(data.test1M1[1].numberV).toBe(1);
						expect(data.test1M1[2].numberV).toBe(2);
						expect(data.test1M1[3].numberV).toBe(3);
						expect(data.test1M2['s1'].numberV).toBe(1);
						expect(data.test1M2['s2'].numberV).toBe(2);
						expect(data.test1M2['s3'].numberV).toBe(3);
						expect(data.test2V).toBeDefined();
						expect(data.test2G).toBeDefined();
						expect(data.test2M1).toBeDefined();
						expect(data.test2M2).toBeDefined();
						expect(data.test2V.test1V.numberV).toBe(10);
						expect(data.test2G.length).toBe(3);
						expect(data.test2G[0].test1V.numberV).toBe(10);
						expect(data.test2G[1].test1V.numberV).toBe(20);
						expect(data.test2G[2].test1V.numberV).toBe(30);
						expect(data.test2M1[1].test1V.numberV).toBe(10);
						expect(data.test2M1[2].test1V.numberV).toBe(20);
						expect(data.test2M1[3].test1V.numberV).toBe(30);
						expect(data.test2M2['s1'].test1V.numberV).toBe(10);
						expect(data.test2M2['s2'].test1V.numberV).toBe(20);
						expect(data.test2M2['s3'].test1V.numberV).toBe(30);
						resolve(null);
					})
					client.writeProtocol<lcc.protocol.TypescriptTest3>(lcc.protocol.TYPESCRIPTTEST3,{
						test1V:{ numberV : 1 },
						test1G:[{ numberV : 1 },{ numberV : 2 },{ numberV : 3 }],
						test1M1:{1:{ numberV : 1 },2:{ numberV : 2 },3:{ numberV : 3 }},
						test1M2:{'s1':{ numberV : 1 },'s2':{ numberV : 2 },'s3':{ numberV : 3 }},
						test2V:{ test1V : { numberV : 10 } },
						test2G:[{ test1V : { numberV : 10 } },{ test1V : { numberV : 20 } },{ test1V : { numberV : 30 } }],
						test2M1:{1:{ test1V : { numberV : 10 } },2:{ test1V : { numberV : 20 } },3:{ test1V : { numberV : 30 } }},
						test2M2:{'s1':{ test1V : { numberV : 10 } },'s2':{ test1V : { numberV : 20 } },'s3':{ test1V : { numberV : 30 } }},
					});
				});
				client.open();
			});
			server.open();
		});
	});

	test('writeProtocol/dealProtocol TYPESCRIPTTEST3', async ()=>{
		let tempPort = await getEmptyPort1();
		let server = lcc.netServer.addServer('testServer', lcc.NetLineType.SOCKET, {  port : tempPort });
		let client = lcc.netClient.addClient('testClient', lcc.NetLineType.SOCKET, { address:'localhost', port : tempPort });
		server.useProtoBuf(false);
		client.useProtoBuf(false);
		await new Promise((resolve)=>{
			server.on("newConnect", (conLine:lcc.NetLine)=>{
				conLine.on('protocol-' + lcc.protocol.TYPESCRIPTTEST3, (data:lcc.protocol.TypescriptTest3)=>{
					conLine.writeProtocol<lcc.protocol.TypescriptTest3>(lcc.protocol.TYPESCRIPTTEST3,data);
				});
			});
			server.on('onOpen', (result:boolean, serverLine:lcc.NetLine)=>{
				expect(result).toBeTruthy();
				expect(serverLine).toBe(server);
				client.on('onOpen', ()=>{
					client.on('protocol-' + lcc.protocol.TYPESCRIPTTEST3, (data:lcc.protocol.TypescriptTest3)=>{
						expect(data).toBeDefined();
						expect(data.test1V).toBeDefined();
						expect(data.test1G).toBeDefined();
						expect(data.test1M1).toBeDefined();
						expect(data.test1M2).toBeDefined();
						expect(data.test1V.numberV).toBe(1);
						expect(data.test1G.length).toBe(3);
						expect(data.test1G[0].numberV).toBe(1);
						expect(data.test1G[1].numberV).toBe(2);
						expect(data.test1G[2].numberV).toBe(3);
						expect(data.test1M1[1].numberV).toBe(1);
						expect(data.test1M1[2].numberV).toBe(2);
						expect(data.test1M1[3].numberV).toBe(3);
						expect(data.test1M2['s1'].numberV).toBe(1);
						expect(data.test1M2['s2'].numberV).toBe(2);
						expect(data.test1M2['s3'].numberV).toBe(3);
						expect(data.test2V).toBeDefined();
						expect(data.test2G).toBeDefined();
						expect(data.test2M1).toBeDefined();
						expect(data.test2M2).toBeDefined();
						expect(data.test2V.test1V.numberV).toBe(10);
						expect(data.test2G.length).toBe(3);
						expect(data.test2G[0].test1V.numberV).toBe(10);
						expect(data.test2G[1].test1V.numberV).toBe(20);
						expect(data.test2G[2].test1V.numberV).toBe(30);
						expect(data.test2M1[1].test1V.numberV).toBe(10);
						expect(data.test2M1[2].test1V.numberV).toBe(20);
						expect(data.test2M1[3].test1V.numberV).toBe(30);
						expect(data.test2M2['s1'].test1V.numberV).toBe(10);
						expect(data.test2M2['s2'].test1V.numberV).toBe(20);
						expect(data.test2M2['s3'].test1V.numberV).toBe(30);
						resolve(null);
					})
					client.writeProtocol<lcc.protocol.TypescriptTest3>(lcc.protocol.TYPESCRIPTTEST3,{
						test1V:{ numberV : 1 },
						test1G:[{ numberV : 1 },{ numberV : 2 },{ numberV : 3 }],
						test1M1:{1:{ numberV : 1 },2:{ numberV : 2 },3:{ numberV : 3 }},
						test1M2:{'s1':{ numberV : 1 },'s2':{ numberV : 2 },'s3':{ numberV : 3 }},
						test2V:{ test1V : { numberV : 10 } },
						test2G:[{ test1V : { numberV : 10 } },{ test1V : { numberV : 20 } },{ test1V : { numberV : 30 } }],
						test2M1:{1:{ test1V : { numberV : 10 } },2:{ test1V : { numberV : 20 } },3:{ test1V : { numberV : 30 } }},
						test2M2:{'s1':{ test1V : { numberV : 10 } },'s2':{ test1V : { numberV : 20 } },'s3':{ test1V : { numberV : 30 } }},
					});
				});
				client.open();
			});
			server.open();
		});
	});
	
	test('writeProtocol/dealProtocol PROTOBUFFTEST useProtoBuf', async ()=>{
		let tempPort = await getEmptyPort1();
		let server = lcc.netServer.addServer('testServer', lcc.NetLineType.SOCKET, {  port : tempPort });
		let client = lcc.netClient.addClient('testClient', lcc.NetLineType.SOCKET, { address:'localhost', port : tempPort });
		server.useProtoBuf(true);
		client.useProtoBuf(true);
		await new Promise((resolve)=>{
			server.on("newConnect", (conLine:lcc.NetLine)=>{
				conLine.on('protocol-' + lcc.protocol.PROTOBUFFTEST, (data:lcc.protocol.ProtoBuffTest)=>{
					conLine.writeProtocol<lcc.protocol.ProtoBuffTest>(lcc.protocol.PROTOBUFFTEST,data);
				});
			});
			server.on('onOpen', (result:boolean, serverLine:lcc.NetLine)=>{
				expect(result).toBeTruthy();
				expect(serverLine).toBe(server);
				client.on('onOpen', ()=>{
					client.on('protocol-' + lcc.protocol.PROTOBUFFTEST, (data:lcc.protocol.ProtoBuffTest)=>{
						expect(data).toBeDefined();
						expect(data.floatV).toBeCloseTo(1.5);
						expect(data.doubleV).toBeCloseTo(1.25);
						expect(data.int32V).toBe(1);
						expect(data.boolV).toBeTruthy();
						expect(data.bytesV.length).toBe(5);
						expect(data.mapV1['s1']).toBeTruthy();
						expect(data.mapV1['s2']).toBeFalsy();
						expect(data.mapV1['s3']).toBeTruthy();
						expect(data.mapV2[1]).toBeTruthy();
						expect(data.mapV2[2]).toBeFalsy();
						expect(data.mapV2[3]).toBeTruthy();
						resolve(null);
					})
					client.writeProtocol<lcc.protocol.ProtoBuffTest>(lcc.protocol.PROTOBUFFTEST,{
						floatV:1.5,
						doubleV:1.25,
						int32V:1,
						boolV:true,
						bytesV:new Uint8Array(5),
						mapV1:{'s1':true, 's2':false, 's3':true},
						mapV2:{1:true, 2:false, 3:true},
					});
				});
				client.open();
			});
			server.open();
		});
	});

	test('writeProtocol/dealProtocol PROTOBUFFTEST', async ()=>{
		let tempPort = await getEmptyPort1();
		let server = lcc.netServer.addServer('testServer', lcc.NetLineType.SOCKET, {  port : tempPort });
		let client = lcc.netClient.addClient('testClient', lcc.NetLineType.SOCKET, { address:'localhost', port : tempPort });
		server.useProtoBuf(false);
		client.useProtoBuf(false);
		await new Promise((resolve)=>{
			server.on("newConnect", (conLine:lcc.NetLine)=>{
				conLine.on('protocol-' + lcc.protocol.PROTOBUFFTEST, (data:lcc.protocol.ProtoBuffTest)=>{
					conLine.writeProtocol<lcc.protocol.ProtoBuffTest>(lcc.protocol.PROTOBUFFTEST,data);
				});
			});
			server.on('onOpen', (result:boolean, serverLine:lcc.NetLine)=>{
				expect(result).toBeTruthy();
				expect(serverLine).toBe(server);
				client.on('onOpen', ()=>{
					client.on('protocol-' + lcc.protocol.PROTOBUFFTEST, (data:lcc.protocol.ProtoBuffTest)=>{
						expect(data).toBeDefined();
						expect(data.floatV).toBeCloseTo(1.5);
						expect(data.doubleV).toBeCloseTo(1.25);
						expect(data.int32V).toBe(1);
						expect(data.boolV).toBeTruthy();
						expect(data.bytesV.length).toBe(5);
						expect(data.mapV1['s1']).toBeTruthy();
						expect(data.mapV1['s2']).toBeFalsy();
						expect(data.mapV1['s3']).toBeTruthy();
						expect(data.mapV2[1]).toBeTruthy();
						expect(data.mapV2[2]).toBeFalsy();
						expect(data.mapV2[3]).toBeTruthy();
						resolve(null);
					})
					client.writeProtocol<lcc.protocol.ProtoBuffTest>(lcc.protocol.PROTOBUFFTEST,{
						floatV:1.5,
						doubleV:1.25,
						int32V:1,
						boolV:true,
						bytesV:'55555',
						mapV1:{'s1':true, 's2':false, 's3':true},
						mapV2:{1:true, 2:false, 3:true},
					});
				});
				client.open();
			});
			server.open();
		});
	});
	
});

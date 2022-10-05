
require('../config');
lcc.DEBUG.NETWORK = false;
require('./lcc-protocols');

describe('net-data', ()=>{

	test('packNetData/unpackNetData useProtoBuf', async ()=>{
		let buff = lcc.packNetData({
			connectID : 'test',
			type : lcc.netdata.NetDataType.SYNC_HERTTICK_TIME,
			data : {
				heartTime : 10,
			},
			protocols : [
				{
					cmd : lcc.protocol.TYPESCRIPTTEST1,
					data : {
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
					}
				},
				{
					cmd : lcc.protocol.TYPESCRIPTTEST2,
					data : {
						test1V:{ numberV : 1 },
						test1G:[{ numberV : 1 },{ numberV : 2 },{ numberV : 3 }],
						test1M1:{1:{ numberV : 1 },2:{ numberV : 2 },3:{ numberV : 3 }},
						test1M2:{'s1':{ numberV : 1 },'s2':{ numberV : 2 },'s3':{ numberV : 3 }},
					}
				},
				{
					cmd : lcc.protocol.TYPESCRIPTTEST3,
					data : {
						test1V:{ numberV : 1 },
						test1G:[{ numberV : 1 },{ numberV : 2 },{ numberV : 3 }],
						test1M1:{1:{ numberV : 1 },2:{ numberV : 2 },3:{ numberV : 3 }},
						test1M2:{'s1':{ numberV : 1 },'s2':{ numberV : 2 },'s3':{ numberV : 3 }},
						test2V:{ test1V : { numberV : 10 } },
						test2G:[{ test1V : { numberV : 10 } },{ test1V : { numberV : 20 } },{ test1V : { numberV : 30 } }],
						test2M1:{1:{ test1V : { numberV : 10 } },2:{ test1V : { numberV : 20 } },3:{ test1V : { numberV : 30 } }},
						test2M2:{'s1':{ test1V : { numberV : 10 } },'s2':{ test1V : { numberV : 20 } },'s3':{ test1V : { numberV : 30 } }},
					}
				},
				{
					cmd : lcc.protocol.PROTOBUFFTEST,
					data : {
						floatV:1.5,
						doubleV:1.25,
						int32V:1,
						boolV:true,
						bytesV:new Uint8Array(5),
						mapV1:{'s1':true, 's2':false, 's3':true},
						mapV2:{1:true, 2:false, 3:true},
					}
				}
			]
		}, true);
		let netData = lcc.unpackNetData(buff);
		expect(netData.connectID).toBe('test');
		expect(netData.type).toBe(lcc.netdata.NetDataType.SYNC_HERTTICK_TIME);
		expect(netData.data.heartTime).toBe(10);
		expect(netData.protocols.length).toBe(4);

		let p = netData.protocols[0];
		expect(p.cmd).toBe(lcc.protocol.TYPESCRIPTTEST1);
		let data = p.data;
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

		p = netData.protocols[1];
		expect(p.cmd).toBe(lcc.protocol.TYPESCRIPTTEST2);
		data = p.data;
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

		p = netData.protocols[2];
		expect(p.cmd).toBe(lcc.protocol.TYPESCRIPTTEST3);
		data = p.data;
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

		p = netData.protocols[3];
		expect(p.cmd).toBe(lcc.protocol.PROTOBUFFTEST);
		data = p.data;
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
	});
	
	test('packNetData/unpackNetData', async ()=>{
		let buff = lcc.packNetData({
			connectID : 'test',
			type : lcc.netdata.NetDataType.SYNC_HERTTICK_TIME,
			data : {
				heartTime : 10,
			},
			protocols : [
				{
					cmd : lcc.protocol.TYPESCRIPTTEST1,
					data : {
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
					}
				},
				{
					cmd : lcc.protocol.TYPESCRIPTTEST2,
					data : {
						test1V:{ numberV : 1 },
						test1G:[{ numberV : 1 },{ numberV : 2 },{ numberV : 3 }],
						test1M1:{1:{ numberV : 1 },2:{ numberV : 2 },3:{ numberV : 3 }},
						test1M2:{'s1':{ numberV : 1 },'s2':{ numberV : 2 },'s3':{ numberV : 3 }},
					}
				},
				{
					cmd : lcc.protocol.TYPESCRIPTTEST3,
					data : {
						test1V:{ numberV : 1 },
						test1G:[{ numberV : 1 },{ numberV : 2 },{ numberV : 3 }],
						test1M1:{1:{ numberV : 1 },2:{ numberV : 2 },3:{ numberV : 3 }},
						test1M2:{'s1':{ numberV : 1 },'s2':{ numberV : 2 },'s3':{ numberV : 3 }},
						test2V:{ test1V : { numberV : 10 } },
						test2G:[{ test1V : { numberV : 10 } },{ test1V : { numberV : 20 } },{ test1V : { numberV : 30 } }],
						test2M1:{1:{ test1V : { numberV : 10 } },2:{ test1V : { numberV : 20 } },3:{ test1V : { numberV : 30 } }},
						test2M2:{'s1':{ test1V : { numberV : 10 } },'s2':{ test1V : { numberV : 20 } },'s3':{ test1V : { numberV : 30 } }},
					}
				},
				{
					cmd : lcc.protocol.PROTOBUFFTEST,
					data : {
						floatV:1.5,
						doubleV:1.25,
						int32V:1,
						boolV:true,
						bytesV:'55555',
						mapV1:{'s1':true, 's2':false, 's3':true},
						mapV2:{1:true, 2:false, 3:true},
					}
				}
			]
		});
		let netData = lcc.unpackNetData(buff);
		expect(netData.connectID).toBe('test');
		expect(netData.type).toBe(lcc.netdata.NetDataType.SYNC_HERTTICK_TIME);
		expect(netData.data.heartTime).toBe(10);
		expect(netData.protocols.length).toBe(4);

		let p = netData.protocols[0];
		expect(p.cmd).toBe(lcc.protocol.TYPESCRIPTTEST1);
		let data = p.data;
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

		p = netData.protocols[1];
		expect(p.cmd).toBe(lcc.protocol.TYPESCRIPTTEST2);
		data = p.data;
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

		p = netData.protocols[2];
		expect(p.cmd).toBe(lcc.protocol.TYPESCRIPTTEST3);
		data = p.data;
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

		p = netData.protocols[3];
		expect(p.cmd).toBe(lcc.protocol.PROTOBUFFTEST);
		data = p.data;
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
	});
});

describe('net-line Send/Dispatch', ()=>{
	let flushSendCaches = null;
	let flushDispatchCaches = null;
	let doFlushSendCaches = false;
	let doFlushDispatchCaches = false;
	beforeEach(async ()=>{
		flushSendCaches = lcc.NetLine.prototype['flushSendCaches'];
		flushDispatchCaches = lcc.NetLine.prototype['flushDispatchCaches'];
		doFlushSendCaches = false;
		doFlushDispatchCaches = false;
		lcc.NetLine.prototype['flushSendCaches'] = function(){
			doFlushSendCaches = true;
		};
		lcc.NetLine.prototype['flushDispatchCaches'] = function(){
			doFlushDispatchCaches = true;
		};
	});

	afterEach(async ()=>{
		lcc.NetLine.prototype['flushSendCaches'] = flushSendCaches;
		lcc.NetLine.prototype['flushSendCaches'] = flushSendCaches;
		lcc.netClient.removeAllClients();
	});

	test('Send/Dispatch auto', async ()=>{
		let clientLine = lcc.netClient.addClient('testClient', lcc.NetLineType.HTTP, {  url : 'http://localhost:4567' });
		clientLine.autoSend(true);
		clientLine.autoDispatch(true);
		expect(doFlushSendCaches).toBeFalsy();
		expect(doFlushDispatchCaches).toBeFalsy();
		clientLine.pushSendCaches([{cmd:1,data:{}}]);
		expect(doFlushSendCaches).toBeTruthy();
		clientLine.pushDispatchCaches([{cmd:1,data:{}}]);
		expect(doFlushDispatchCaches).toBeTruthy();
	});

	test('Send/Dispatch manual', async ()=>{
		let clientLine = lcc.netClient.addClient('testClient', lcc.NetLineType.HTTP, {  url : 'http://localhost:4567' });
		clientLine.autoSend(false);
		clientLine.autoDispatch(false);
		expect(doFlushSendCaches).toBeFalsy();
		expect(doFlushDispatchCaches).toBeFalsy();
		clientLine.pushSendCaches([{cmd:1,data:{}}]);
		expect(doFlushSendCaches).toBeFalsy();
		clientLine.flushSendCaches();
		expect(doFlushSendCaches).toBeTruthy();
		clientLine.pushDispatchCaches([{cmd:1,data:{}}]);
		expect(doFlushDispatchCaches).toBeFalsy();
		clientLine.flushDispatchCaches();
		expect(doFlushDispatchCaches).toBeTruthy();
	});
});

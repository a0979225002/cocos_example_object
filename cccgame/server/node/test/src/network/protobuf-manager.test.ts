
require('../config');
lcc.DEBUG.NETWORK = false;
const pbMgr = lcc.pbMgr;

import { TypescriptTest1, TypescriptTest2, TypescriptTest3 ,ProtoBuffTest,
	TTypescriptTest1, TTypescriptTest2, TTypescriptTest3 ,TProtoBuffTest } from './lcc-protocols-alone'

describe('ProtobufManager', ()=>{

	afterEach(async ()=>{
		pbMgr.removeAllProtocols();
		pbMgr.removeAllMessagePackers();
	});

	test('addProtocol/hasProtocol/getProtocol/removeProtocol', async ()=>{
		pbMgr.addProtocol(1000, 'proto.resources.TypescriptTest1', TTypescriptTest1);
		pbMgr.addProtocol(1001, 'proto.resources.TypescriptTest2', TTypescriptTest2);
		pbMgr.addProtocol(1002, 'proto.resources.TypescriptTest3', TTypescriptTest3);
		pbMgr.addProtocol(1003, 'proto.resources.ProtoBuffTest', TProtoBuffTest);
		expect(pbMgr.hasProtocol(1000)).toBeTruthy();
		expect(pbMgr.hasProtocol(1001)).toBeTruthy();
		expect(pbMgr.hasProtocol(1002)).toBeTruthy();
		expect(pbMgr.hasProtocol(1003)).toBeTruthy();
		expect(pbMgr.getProtocol(1000)).toBeDefined();
		expect(pbMgr.getProtocol(1001)).toBeDefined();
		expect(pbMgr.getProtocol(1002)).toBeDefined();
		expect(pbMgr.getProtocol(1003)).toBeDefined();
		pbMgr.removeProtocol(1000);
		expect(pbMgr.hasProtocol(1000)).toBeFalsy();
		expect(pbMgr.getProtocol(1000)).toBeUndefined();
		pbMgr.removeProtocol(1001);
		expect(pbMgr.hasProtocol(1001)).toBeFalsy();
		expect(pbMgr.getProtocol(1001)).toBeUndefined();
		pbMgr.removeProtocol(1002);
		expect(pbMgr.hasProtocol(1002)).toBeFalsy();
		expect(pbMgr.getProtocol(1002)).toBeUndefined();
		pbMgr.removeProtocol(1003);
		expect(pbMgr.hasProtocol(1003)).toBeFalsy();
		expect(pbMgr.getProtocol(1003)).toBeUndefined();
	});

	test('addProtocol/hasProtocol/getProtocol/removeAllProtocols', async ()=>{
		pbMgr.addProtocol(1000, 'proto.resources.TypescriptTest1', TTypescriptTest1);
		pbMgr.addProtocol(1001, 'proto.resources.TypescriptTest2', TTypescriptTest2);
		pbMgr.addProtocol(1002, 'proto.resources.TypescriptTest3', TTypescriptTest3);
		pbMgr.addProtocol(1003, 'proto.resources.ProtoBuffTest', TProtoBuffTest);
		expect(pbMgr.hasProtocol(1000)).toBeTruthy();
		expect(pbMgr.hasProtocol(1001)).toBeTruthy();
		expect(pbMgr.hasProtocol(1002)).toBeTruthy();
		expect(pbMgr.hasProtocol(1003)).toBeTruthy();
		expect(pbMgr.getProtocol(1000)).toBeDefined();
		expect(pbMgr.getProtocol(1001)).toBeDefined();
		expect(pbMgr.getProtocol(1002)).toBeDefined();
		expect(pbMgr.getProtocol(1003)).toBeDefined();
		pbMgr.removeAllProtocols();
		expect(pbMgr.hasProtocol(1000)).toBeFalsy();
		expect(pbMgr.getProtocol(1000)).toBeUndefined();
		expect(pbMgr.hasProtocol(1001)).toBeFalsy();
		expect(pbMgr.getProtocol(1001)).toBeUndefined();
		expect(pbMgr.hasProtocol(1002)).toBeFalsy();
		expect(pbMgr.getProtocol(1002)).toBeUndefined();
		expect(pbMgr.hasProtocol(1003)).toBeFalsy();
		expect(pbMgr.getProtocol(1003)).toBeUndefined();
	}),

	test('addMessagePacker/getMessagePacker/removeMessagePacker', async ()=>{
		pbMgr.addMessagePacker('proto.resources.TypescriptTest1', TypescriptTest1);
		pbMgr.addMessagePacker('proto.resources.TypescriptTest2', TypescriptTest2);
		pbMgr.addMessagePacker('proto.resources.TypescriptTest3', TypescriptTest3);
		pbMgr.addMessagePacker('proto.resources.ProtoBuffTest', ProtoBuffTest);
		expect(pbMgr.getMessagePacker('proto.resources.TypescriptTest1')).toBeDefined();
		expect(pbMgr.getMessagePacker('proto.resources.TypescriptTest2')).toBeDefined();
		expect(pbMgr.getMessagePacker('proto.resources.TypescriptTest3')).toBeDefined();
		expect(pbMgr.getMessagePacker('proto.resources.ProtoBuffTest')).toBeDefined();
		pbMgr.removeMessagePacker('proto.resources.TypescriptTest1');
		expect(pbMgr.getMessagePacker('proto.resources.TypescriptTest1')).toBeUndefined();
		pbMgr.removeMessagePacker('proto.resources.TypescriptTest2');
		expect(pbMgr.getMessagePacker('proto.resources.TypescriptTest2')).toBeUndefined();
		pbMgr.removeMessagePacker('proto.resources.TypescriptTest3');
		expect(pbMgr.getMessagePacker('proto.resources.TypescriptTest3')).toBeUndefined();
		pbMgr.removeMessagePacker('proto.resources.ProtoBuffTest');
		expect(pbMgr.getMessagePacker('proto.resources.ProtoBuffTest')).toBeUndefined();
	});

	test('addMessagePacker/getMessagePacker/removeAllMessagePackers', async ()=>{
		pbMgr.addMessagePacker('proto.resources.TypescriptTest1', TypescriptTest1);
		pbMgr.addMessagePacker('proto.resources.TypescriptTest2', TypescriptTest2);
		pbMgr.addMessagePacker('proto.resources.TypescriptTest3', TypescriptTest3);
		pbMgr.addMessagePacker('proto.resources.ProtoBuffTest', ProtoBuffTest);
		expect(pbMgr.getMessagePacker('proto.resources.TypescriptTest1')).toBeDefined();
		expect(pbMgr.getMessagePacker('proto.resources.TypescriptTest2')).toBeDefined();
		expect(pbMgr.getMessagePacker('proto.resources.TypescriptTest3')).toBeDefined();
		expect(pbMgr.getMessagePacker('proto.resources.ProtoBuffTest')).toBeDefined();
		pbMgr.removeAllMessagePackers();
		expect(pbMgr.getMessagePacker('proto.resources.TypescriptTest1')).toBeUndefined();
		expect(pbMgr.getMessagePacker('proto.resources.TypescriptTest2')).toBeUndefined();
		expect(pbMgr.getMessagePacker('proto.resources.TypescriptTest3')).toBeUndefined();
		expect(pbMgr.getMessagePacker('proto.resources.ProtoBuffTest')).toBeUndefined();
	});

	test('packProtocol/unpackProtocol/packMessage/unpackMessage TypescriptTest1', async ()=>{
		pbMgr.addMessagePacker('proto.resources.TypescriptTest1', TypescriptTest1);
		pbMgr.addMessagePacker('proto.resources.TypescriptTest2', TypescriptTest2);
		pbMgr.addMessagePacker('proto.resources.TypescriptTest3', TypescriptTest3);
		pbMgr.addMessagePacker('proto.resources.ProtoBuffTest', ProtoBuffTest);
		pbMgr.addProtocol(1000, 'proto.resources.TypescriptTest1', TTypescriptTest1);
		pbMgr.addProtocol(1001, 'proto.resources.TypescriptTest2', TTypescriptTest2);
		pbMgr.addProtocol(1002, 'proto.resources.TypescriptTest3', TTypescriptTest3);
		pbMgr.addProtocol(1003, 'proto.resources.ProtoBuffTest', TProtoBuffTest);
		let wBuff = new lcc.js.BufferWriter();
		pbMgr.packProtocol<lcc.protocol.TypescriptTest1>(wBuff, lcc.protocol.TYPESCRIPTTEST1, {
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
		let data:lcc.protocol.TypescriptTest1 = pbMgr.unpackProtocol(new lcc.js.BufferReader(wBuff.getData()), lcc.protocol.TYPESCRIPTTEST1);
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
	});
	
	test('packProtocol/unpackProtocol/packMessage/unpackMessage TypescriptTest2', async ()=>{
		pbMgr.addMessagePacker('proto.resources.TypescriptTest1', TypescriptTest1);
		pbMgr.addMessagePacker('proto.resources.TypescriptTest2', TypescriptTest2);
		pbMgr.addMessagePacker('proto.resources.TypescriptTest3', TypescriptTest3);
		pbMgr.addMessagePacker('proto.resources.ProtoBuffTest', ProtoBuffTest);
		pbMgr.addProtocol(1000, 'proto.resources.TypescriptTest1', TTypescriptTest1);
		pbMgr.addProtocol(1001, 'proto.resources.TypescriptTest2', TTypescriptTest2);
		pbMgr.addProtocol(1002, 'proto.resources.TypescriptTest3', TTypescriptTest3);
		pbMgr.addProtocol(1003, 'proto.resources.ProtoBuffTest', TProtoBuffTest);
		let wBuff = new lcc.js.BufferWriter();
		pbMgr.packProtocol<lcc.protocol.TypescriptTest2>(wBuff, lcc.protocol.TYPESCRIPTTEST2, {
			test1V:{ numberV : 1 },
			test1G:[{ numberV : 1 },{ numberV : 2 },{ numberV : 3 }],
			test1M1:{1:{ numberV : 1 },2:{ numberV : 2 },3:{ numberV : 3 }},
			test1M2:{'s1':{ numberV : 1 },'s2':{ numberV : 2 },'s3':{ numberV : 3 }},
		});
		let data:lcc.protocol.TypescriptTest2 = pbMgr.unpackProtocol(new lcc.js.BufferReader(wBuff.getData()), lcc.protocol.TYPESCRIPTTEST2);
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
	});

	test('packProtocol/unpackProtocol/packMessage/unpackMessage TypescriptTest3', async ()=>{
		pbMgr.addMessagePacker('proto.resources.TypescriptTest1', TypescriptTest1);
		pbMgr.addMessagePacker('proto.resources.TypescriptTest2', TypescriptTest2);
		pbMgr.addMessagePacker('proto.resources.TypescriptTest3', TypescriptTest3);
		pbMgr.addMessagePacker('proto.resources.ProtoBuffTest', ProtoBuffTest);
		pbMgr.addProtocol(1000, 'proto.resources.TypescriptTest1', TTypescriptTest1);
		pbMgr.addProtocol(1001, 'proto.resources.TypescriptTest2', TTypescriptTest2);
		pbMgr.addProtocol(1002, 'proto.resources.TypescriptTest3', TTypescriptTest3);
		pbMgr.addProtocol(1003, 'proto.resources.ProtoBuffTest', TProtoBuffTest);
		let wBuff = new lcc.js.BufferWriter();
		pbMgr.packProtocol<lcc.protocol.TypescriptTest3>(wBuff, lcc.protocol.TYPESCRIPTTEST3, {
			test1V:{ numberV : 1 },
			test1G:[{ numberV : 1 },{ numberV : 2 },{ numberV : 3 }],
			test1M1:{1:{ numberV : 1 },2:{ numberV : 2 },3:{ numberV : 3 }},
			test1M2:{'s1':{ numberV : 1 },'s2':{ numberV : 2 },'s3':{ numberV : 3 }},
			test2V:{ test1V : { numberV : 10 } },
			test2G:[{ test1V : { numberV : 10 } },{ test1V : { numberV : 20 } },{ test1V : { numberV : 30 } }],
			test2M1:{1:{ test1V : { numberV : 10 } },2:{ test1V : { numberV : 20 } },3:{ test1V : { numberV : 30 } }},
			test2M2:{'s1':{ test1V : { numberV : 10 } },'s2':{ test1V : { numberV : 20 } },'s3':{ test1V : { numberV : 30 } }},
		});
		let data:lcc.protocol.TypescriptTest3 = pbMgr.unpackProtocol(new lcc.js.BufferReader(wBuff.getData()), lcc.protocol.TYPESCRIPTTEST3);
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
	});

	test('packProtocol/unpackProtocol/packMessage/unpackMessage ProtoBuffTest', async ()=>{
		pbMgr.addMessagePacker('proto.resources.TypescriptTest1', TypescriptTest1);
		pbMgr.addMessagePacker('proto.resources.TypescriptTest2', TypescriptTest2);
		pbMgr.addMessagePacker('proto.resources.TypescriptTest3', TypescriptTest3);
		pbMgr.addMessagePacker('proto.resources.ProtoBuffTest', ProtoBuffTest);
		pbMgr.addProtocol(1000, 'proto.resources.TypescriptTest1', TTypescriptTest1);
		pbMgr.addProtocol(1001, 'proto.resources.TypescriptTest2', TTypescriptTest2);
		pbMgr.addProtocol(1002, 'proto.resources.TypescriptTest3', TTypescriptTest3);
		pbMgr.addProtocol(1003, 'proto.resources.ProtoBuffTest', TProtoBuffTest);
		let wBuff = new lcc.js.BufferWriter();
		pbMgr.packProtocol<lcc.protocol.ProtoBuffTest>(wBuff, lcc.protocol.PROTOBUFFTEST, {
			floatV:1.5,
			doubleV:1.25,
			int32V:1,
			boolV:true,
			bytesV:new Uint8Array(5),
			mapV1:{'s1':true, 's2':false, 's3':true},
			mapV2:{1:true, 2:false, 3:true},
		});
		let data:lcc.protocol.ProtoBuffTest = pbMgr.unpackProtocol(new lcc.js.BufferReader(wBuff.getData()), lcc.protocol.PROTOBUFFTEST);
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

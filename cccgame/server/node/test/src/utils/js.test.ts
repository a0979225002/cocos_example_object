
require('../config');

test('mergeMap', async ()=>{
	let destMap:any = {
		value:true,
		group:[ 1, 's', true, false, [ 1 ], { v : true } ],
		object:{ v1 : 1, v2 : true }
	};
	let srcMap = {
		value2:false,
		group:[ 1, 's', true, false, [ 1 ], { v : true } ],
		object:{ v3 : 1, v4 : true }
	};
	lcc.js.mergeMap(destMap, srcMap);
	expect(destMap.value).toBeTruthy();
	expect(destMap.value2).toBeFalsy();
	expect(destMap.group.length).toBe(12);
	expect(destMap.group[0]).toBe(1);
	expect(destMap.group[1]).toBe('s');
	expect(destMap.group[2]).toBeTruthy();
	expect(destMap.group[3]).toBeFalsy();
	expect(destMap.group[4].length).toBe(1);
	expect(destMap.group[4][0]).toBe(1);
	expect(destMap.group[5].v).toBeTruthy();
	expect(destMap.group[6]).toBe(1);
	expect(destMap.group[7]).toBe('s');
	expect(destMap.group[8]).toBeTruthy();
	expect(destMap.group[9]).toBeFalsy();
	expect(destMap.group[10].length).toBe(1);
	expect(destMap.group[10][0]).toBe(1);
	expect(destMap.group[11].v).toBeTruthy();
	expect(destMap.object.v1).toBe(1);
	expect(destMap.object.v2).toBeTruthy();
	expect(destMap.object.v3).toBe(1);
	expect(destMap.object.v4).toBeTruthy();
});

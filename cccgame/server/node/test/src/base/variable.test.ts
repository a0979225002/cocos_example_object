
require('../config');

describe('Variables', ()=>{

	beforeEach(()=>{
		lcc.clearVariables();
	});

	test('getVariable undefined', ()=>{
		expect(lcc.getVariable('test')).toBeUndefined();
	});	
	
	test('setVariable', ()=>{
		lcc.setVariable('test', 'value1');
		expect(lcc.getVariable('test')).toBe('value1');
	});	
	
	test('clearVariables', ()=>{
		lcc.setVariable('test', 'value1');
		lcc.clearVariables();
		expect(lcc.getVariable('test')).toBeUndefined();
	});	
	
	test('parseVariables lcc', ()=>{
		lcc.setVariable('test', "value1");
		expect(lcc.parseVariables('1:${test}')).toBe('1:value1');
	});	

	test('parseVariables extMap', ()=>{
		expect(lcc.parseVariables('1:${test}', { test : 'value2' })).toBe('1:value2');
	});	

	test('parseVariables extMap > lcc', ()=>{
		lcc.setVariable('test', "value3");
		expect(lcc.parseVariables('1:${test}', { test : 'value4' })).toBe('1:value4');
	});	
});

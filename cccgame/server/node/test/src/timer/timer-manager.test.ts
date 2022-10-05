
require('../config');
lcc.DEBUG.TIMER = false;

describe('TimerManager', ()=>{

	beforeEach(()=>{
		lcc.timerMgr.removeAllTimers();
	});

	test('sleep', async ()=>{
		const callback = jest.fn();
		let time = Date.now();
		await lcc.timerMgr.sleep(1);
		expect(Date.now() - time).toBeGreaterThanOrEqual(1000);
	});

	test('addTimer', async ()=>{
		const callback = jest.fn();
		lcc.timerMgr.addTimer(1, callback);
		expect(callback).not.toBeCalled();
		await lcc.timerMgr.sleep(1);
		expect(callback).toBeCalled();
 		expect(callback).toHaveBeenCalledTimes(1);
	});

	test('removeTimer group', async ()=>{
		const callback = jest.fn();
		const callback2 = jest.fn();
		lcc.timerMgr.addTimer(1, callback, { group : 'test' });
		lcc.timerMgr.addTimer(1, callback2, { group : 'test' });
		expect(callback).not.toBeCalled();
		expect(callback2).not.toBeCalled();
		lcc.timerMgr.removeTimer({ group : 'test' });
		await lcc.timerMgr.sleep(1);
		expect(callback).not.toBeCalled();
		expect(callback2).not.toBeCalled();
	});

	test('removeAllTimers', async ()=>{
		const callback = jest.fn();
		const callback2 = jest.fn();
		lcc.timerMgr.addTimer(1, callback);
		lcc.timerMgr.addTimer(1, callback2);
		expect(callback).not.toBeCalled();
		expect(callback2).not.toBeCalled();
		lcc.timerMgr.removeAllTimers();
		await lcc.timerMgr.sleep(1);
		expect(callback).not.toBeCalled();
		expect(callback2).not.toBeCalled();
	});

	test('removeTimer key', async ()=>{
		const callback = jest.fn();
		const callback2 = jest.fn();
		lcc.timerMgr.addTimer(1, callback, 'key');
		lcc.timerMgr.addTimer(1, callback2, 'key2');
		expect(callback).not.toBeCalled();
		expect(callback2).not.toBeCalled();
		lcc.timerMgr.removeTimer('key');
		await lcc.timerMgr.sleep(1);
		expect(callback).not.toBeCalled();
		expect(callback2).toBeCalled();
 		expect(callback2).toHaveBeenCalledTimes(1);
	});

	test('addTimer loop', async ()=>{
		const callback = jest.fn();
		lcc.timerMgr.addTimer(1, callback, { loop : true });
		expect(callback).not.toBeCalled();
		await lcc.timerMgr.sleep(1);
		expect(callback).toBeCalled();
 		expect(callback).toHaveBeenCalledTimes(1);
		await lcc.timerMgr.sleep(1);
		expect(callback).toHaveBeenCalledTimes(2);
		lcc.timerMgr.removeAllTimers();
	});
});

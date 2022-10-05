
const Path = require('path')

require('../config');

describe('Worker Environment', ()=>{

	afterEach(async ()=>{
		await lcc.workerMgr.release();
	});

	test('WorkerGroup default', async ()=>{
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta('Math', {
            classPath : Path.join(__dirname, 'workers', 'Math')
        }));
        expect((await lcc.workerMgr.callWorker('Math', 'isMasterWorker')).return).toBeTruthy();
        expect((await lcc.workerMgr.callWorker('Math', 'isThreadWorker')).return).toBeFalsy();
        expect((await lcc.workerMgr.callWorker('Math', 'isProcessWorker')).return).toBeFalsy();
	});

	test('WorkerGroup', async ()=>{
		await lcc.workerMgr.addWorkerGroup('Tools');
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Math',
            groupName : 'Tools'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Math')
        }));
        expect((await lcc.workerMgr.callWorker({
            workerName : 'Math',
            groupName : 'Tools'
        }, 'isMasterWorker')).return).toBeTruthy();
        expect((await lcc.workerMgr.callWorker({
            workerName : 'Math',
            groupName : 'Tools'
        }, 'isThreadWorker')).return).toBeFalsy();
        expect((await lcc.workerMgr.callWorker({
            workerName : 'Math',
            groupName : 'Tools'
        }, 'isProcessWorker')).return).toBeFalsy();
	});

	test('ThreadGroup', async ()=>{
		await lcc.workerMgr.addThreadGroup('Tools', Path.join(__dirname, '..', 'config'));
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Math',
            groupName : 'Tools'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Math')
        }));
        expect((await lcc.workerMgr.callWorker({
            workerName : 'Math',
            groupName : 'Tools'
        }, 'isMasterWorker')).return).toBeFalsy();
        expect((await lcc.workerMgr.callWorker({
            workerName : 'Math',
            groupName : 'Tools'
        }, 'isThreadWorker')).return).toBeTruthy();
        expect((await lcc.workerMgr.callWorker({
            workerName : 'Math',
            groupName : 'Tools'
        }, 'isProcessWorker')).return).toBeFalsy();
	});

	test('ProcessGroup', async ()=>{
		await lcc.workerMgr.addProcessGroup('Tools', Path.join(__dirname, '..', 'config'));
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Math',
            groupName : 'Tools'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Math')
        }));
        expect((await lcc.workerMgr.callWorker({
            workerName : 'Math',
            groupName : 'Tools'
        }, 'isMasterWorker')).return).toBeFalsy();
        expect((await lcc.workerMgr.callWorker({
            workerName : 'Math',
            groupName : 'Tools'
        }, 'isThreadWorker')).return).toBeFalsy();
        expect((await lcc.workerMgr.callWorker({
            workerName : 'Math',
            groupName : 'Tools'
        }, 'isProcessWorker')).return).toBeTruthy();
	});
});

describe('Worker Call', ()=>{

	afterEach(async ()=>{
		await lcc.workerMgr.release();
	});

	test('Call Master', async ()=>{
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta('Math', {
            classPath : Path.join(__dirname, 'workers', 'Math')
        }));
        expect((await lcc.workerMgr.callWorker('Math', 'add', 1, 2, 3, 4)).return).toBe(10);
	});

	test('Call Thread', async ()=>{
		await lcc.workerMgr.addThreadGroup('Tools', Path.join(__dirname, '..', 'config'));
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Math',
            groupName : 'Tools'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Math')
        }));
        expect((await lcc.workerMgr.callWorker({
            workerName : 'Math',
            groupName : 'Tools'
        }, 'add', 1, 2, 3, 4)).return).toBe(10);
	});

	test('Call Process', async ()=>{
		await lcc.workerMgr.addProcessGroup('Tools', Path.join(__dirname, '..', 'config'));
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Math',
            groupName : 'Tools'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Math')
        }));
        expect((await lcc.workerMgr.callWorker({
            workerName : 'Math',
            groupName : 'Tools'
        },  'add', 1, 2, 3, 4)).return).toBe(10);
	});
    
	test('Call Master Same', async ()=>{
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Math',
            groupName : 'Tools'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Math')
        }));
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Test',
            groupName : 'Tools'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Test')
        }));
        expect((await lcc.workerMgr.callWorker({
            workerName : 'Test',
            groupName : 'Tools'
        }, 'mathAdd', 1, 2, 3, 4)).return).toBe(10);
	});

	test('Call Thread Same', async ()=>{
		await lcc.workerMgr.addThreadGroup('Tools', Path.join(__dirname, '..', 'config'));
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Math',
            groupName : 'Tools'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Math')
        }));
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Test',
            groupName : 'Tools'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Test')
        }));
        expect((await lcc.workerMgr.callWorker({
            workerName : 'Test',
            groupName : 'Tools'
        }, 'mathAdd', 1, 2, 3, 4)).return).toBe(10);
	});

	test('Call Process Same', async ()=>{
		await lcc.workerMgr.addProcessGroup('Tools', Path.join(__dirname, '..', 'config'));
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Math',
            groupName : 'Tools'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Math')
        }));
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Test',
            groupName : 'Tools'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Test')
        }));
        expect((await lcc.workerMgr.callWorker({
            workerName : 'Test',
            groupName : 'Tools'
        }, 'mathAdd', 1, 2, 3, 4)).return).toBe(10);
	});
    
	test('Master Call Master', async ()=>{
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Math',
            groupName : 'Tools'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Math')
        }));
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Test',
            groupName : 'Main'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Test')
        }));

        expect((await lcc.workerMgr.callWorker({
            workerName : 'Test',
            groupName : 'Main'
        }, 'mathAdd', 1, 2, 3, 4)).return).toBe(10);
	});

	test('Master Call Thread', async ()=>{
        await lcc.workerMgr.addThreadGroup('Tools', Path.join(__dirname, '..', 'config'));
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Math',
            groupName : 'Tools'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Math')
        }));
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Test',
            groupName : 'Main'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Test')
        }));

        expect((await lcc.workerMgr.callWorker({
            workerName : 'Test',
            groupName : 'Main'
        }, 'mathAdd', 1, 2, 3, 4)).return).toBe(10);
	});

	test('Master Call Process', async ()=>{
        await lcc.workerMgr.addProcessGroup('Tools', Path.join(__dirname, '..', 'config'));
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Math',
            groupName : 'Tools'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Math')
        }));
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Test',
            groupName : 'Main'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Test')
        }));

        expect((await lcc.workerMgr.callWorker({
            workerName : 'Test',
            groupName : 'Main'
        }, 'mathAdd', 1, 2, 3, 4)).return).toBe(10);
	});

	test('Thread Call Master', async ()=>{
        await lcc.workerMgr.addThreadGroup('Main', Path.join(__dirname, '..', 'config'));
        await lcc.workerMgr.addWorkerGroup('Tools');
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Math',
            groupName : 'Tools'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Math')
        }));
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Test',
            groupName : 'Main'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Test')
        }));

        expect((await lcc.workerMgr.callWorker({
            workerName : 'Test',
            groupName : 'Main'
        }, 'mathAdd', 1, 2, 3, 4)).return).toBe(10);
	});

	test('Thread Call Thread', async ()=>{
        await lcc.workerMgr.addThreadGroup('Main', Path.join(__dirname, '..', 'config'));
        await lcc.workerMgr.addThreadGroup('Tools', Path.join(__dirname, '..', 'config'));
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Math',
            groupName : 'Tools'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Math')
        }));
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Test',
            groupName : 'Main'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Test')
        }));

        expect((await lcc.workerMgr.callWorker({
            workerName : 'Test',
            groupName : 'Main'
        }, 'mathAdd', 1, 2, 3, 4)).return).toBe(10);
	});

	test('Thread Call Process', async ()=>{
        await lcc.workerMgr.addThreadGroup('Main', Path.join(__dirname, '..', 'config'));
        await lcc.workerMgr.addProcessGroup('Tools', Path.join(__dirname, '..', 'config'));
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Math',
            groupName : 'Tools'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Math')
        }));
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Test',
            groupName : 'Main'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Test')
        }));

        expect((await lcc.workerMgr.callWorker({
            workerName : 'Test',
            groupName : 'Main'
        }, 'mathAdd', 1, 2, 3, 4)).return).toBe(10);
	});

	test('Process Call Master', async ()=>{
        await lcc.workerMgr.addProcessGroup('Main', Path.join(__dirname, '..', 'config'));
        await lcc.workerMgr.addWorkerGroup('Tools');
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Math',
            groupName : 'Tools'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Math')
        }));
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Test',
            groupName : 'Main'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Test')
        }));

        expect((await lcc.workerMgr.callWorker({
            workerName : 'Test',
            groupName : 'Main'
        }, 'mathAdd', 1, 2, 3, 4)).return).toBe(10);
	});

	test('Process Call Thread', async ()=>{
        await lcc.workerMgr.addProcessGroup('Main', Path.join(__dirname, '..', 'config'));
        await lcc.workerMgr.addThreadGroup('Tools', Path.join(__dirname, '..', 'config'));
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Math',
            groupName : 'Tools'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Math')
        }));
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Test',
            groupName : 'Main'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Test')
        }));

        expect((await lcc.workerMgr.callWorker({
            workerName : 'Test',
            groupName : 'Main'
        }, 'mathAdd', 1, 2, 3, 4)).return).toBe(10);
	});

	test('Process Call Process', async ()=>{
        await lcc.workerMgr.addProcessGroup('Main', Path.join(__dirname, '..', 'config'));
        await lcc.workerMgr.addProcessGroup('Tools', Path.join(__dirname, '..', 'config'));
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Math',
            groupName : 'Tools'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Math')
        }));
        await lcc.workerMgr.startWorker(lcc.makeWorkerMeta({
            workerName : 'Test',
            groupName : 'Main'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Test')
        }));

        expect((await lcc.workerMgr.callWorker({
            workerName : 'Test',
            groupName : 'Main'
        }, 'mathAdd', 1, 2, 3, 4)).return).toBe(10);
	});

});

describe('Worker Call Delay Create', ()=>{

	afterEach(async ()=>{
		await lcc.workerMgr.release();
	});

	test('Call Master', async ()=>{
        expect((await lcc.workerMgr.callWorker(lcc.makeWorkerMeta('Math', {
            classPath : Path.join(__dirname, 'workers', 'Math')
        }), 'add', 1, 2, 3, 4)).return).toBe(10);
	});

	test('Call Thread', async ()=>{
		await lcc.workerMgr.addThreadGroup('Tools', Path.join(__dirname, '..', 'config'));
        expect((await lcc.workerMgr.callWorker(lcc.makeWorkerMeta({
            workerName : 'Math',
            groupName : 'Tools'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Math')
        }), 'add', 1, 2, 3, 4)).return).toBe(10);
	});

	test('Call Process', async ()=>{
		await lcc.workerMgr.addProcessGroup('Tools', Path.join(__dirname, '..', 'config'));
        expect((await lcc.workerMgr.callWorker(lcc.makeWorkerMeta({
            workerName : 'Math',
            groupName : 'Tools'
        }, {
            classPath : Path.join(__dirname, 'workers', 'Math')
        }),  'add', 1, 2, 3, 4)).return).toBe(10);
	});
    
});

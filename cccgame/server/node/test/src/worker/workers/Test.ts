
const TAG = "Test";

/**
 * 测试工作者
 */
export default class Test extends lcc.WorkerBase {
	
    /**
     * 加法
     */
    public async mathAdd(...args:number[]){
        return (await this.callWorker({
            workerName : 'Math',
            groupName : 'Tools'
        }, 'add', ...args)).return;
    }

}

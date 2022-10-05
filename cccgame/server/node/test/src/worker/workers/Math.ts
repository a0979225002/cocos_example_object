
const TAG = "Math";

/**
 * 数学工作者
 */
export default class Math extends lcc.WorkerBase {
	
    /**
     * 加法
     */
    public add(...args:number[]){
        let sum = 0;
        for(let v of args){
            sum += v;
        }
        return sum;
    }

    /**
     * 乘法
     */
    public mul(...args:number[]){
        let sum = 1;
        for(let v of args){
            sum *= v;
        }
        return sum;
    }

}

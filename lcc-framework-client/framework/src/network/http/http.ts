/*
Copyright 2021 LuJun

Permission is hereby granted, free of charge, to any person obtaining a copy 
of this software and associated documentation files (the "Software"), to deal 
in the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the Software is furnished 
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in 
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

namespace lcc {

const TAG = "lcc/network/http/http.ts";

/**
 * @zh
 * HTTP发送默认超时时间
 */
export let HTTP_SEND_TIMEOUT = 5;

/**
 * @zh
 * http功能类
 */
export namespace http {

/**
 * @zh
 * 请求索引
 */
let requestIndex = 0;

/**
 * @zh
 * http POST 数据
 * 
 * @param url - URL
 * @param data - 数据
 * @param extHeaders - 额外header
 * @param timeout - 可选，自定义超时时间
 * 
 * @return Promise<string>
 */
export function post(url:string, data:any, extHeaders?:any, timeout?:number) {
	return new Promise<string>((resole)=>{
		let reqid = `req_${requestIndex ++}`;
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4 && xhr.status == 200) {
				timerMgr.removeTimer({
					group : "lcc.http", 
					key : reqid,
				});
				resole(xhr.responseText);
			}
		};
		timerMgr.addTimer(timeout || HTTP_SEND_TIMEOUT, () => {
			xhr.onreadystatechange = null;
			resole(null)
		}, {
            group : "lcc.http", 
            key : reqid,
        });
		xhr.open("POST", url, true);
		xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
		xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST');
		xhr.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type');
		if(extHeaders){
			for(let k in extHeaders){
				xhr.setRequestHeader(k, extHeaders[k]);
			}
		}
		xhr.send(data);
	});
}

/**
 * @zh
 * http POST发送JSON与接收JSON数据
 * 
 * @param url - URL
 * @param data - JSON对象
 * @param timeout - 可选，自定义超时时间
 * 
 * @return Promise<[JSON]>
 */
export async function postJson(url:string, data:any, timeout?:number) {
	let content = await post(url, JSON.stringify(data), { "Content-Type" : "application/json" }, timeout);
	if(content){
		return JSON.parse(content);
	}
}

/**
 * @zh
 * http GET 数据
 * 
 * @param url - URL
 * @param timeout - 可选，自定义超时时间
 * 
 * @return Promise<string>
 */
export function get(url:string, timeout?:number) {
	return new Promise<string>((resole)=>{
		let reqid = `req_${requestIndex ++}`;
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4 && xhr.status == 200) {
				timerMgr.removeTimer({
					group : "lcc.http", 
					key : reqid,
				});
				resole(xhr.responseText);
			}
		};
		timerMgr.addTimer(timeout || HTTP_SEND_TIMEOUT, () => {
			xhr.onreadystatechange = null;
			resole(null)
		}, {
            group : "lcc.http", 
            key : reqid,
        });
		xhr.open("GET", url, true);
		xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
		xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST');
		xhr.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type');
		xhr.send();
	});
}

/**
 * @zh
 * http GET JSON数据
 * 
 * @param url - URL
 * @param timeout - 可选，自定义超时时间
 * 
 * @return Promise<[JSON]>
 */
export async function getJson(url:string, timeout?:number) {
	let content = await get(url, timeout);
	if(content){
		return JSON.parse(content);
	}
}

}

}

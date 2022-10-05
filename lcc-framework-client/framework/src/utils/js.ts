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

export namespace js {

const TAG = "lcc/utils/js.ts";

/**
 * @zh
 * 格式化字符串, Map参数
 * 
 * @param str - 格式化的字符串
 * @param map - 外部映射表，优先解析
 */
export function formatString(str:string, map:{[key:string]:any}){
	if(!isEmptyMap(map)){
		return str.replace(/\$\{([\w\d_:\.]+)\}/g, (k,m) => {
			let value = map[m];
			if(value != null){
				return value;
			}
			return "${" + m + "}";
		});
	}else{
		return str;
	}
}

/**
 * @zh
 * 日期格式化
 * 
 * @param fmt - 格式字符串
 * @param date - 日期对象
 */
export function formatDate(fmt:string, date:Date) {
	let ret:any;
	const opt:any = {
		"Y+": date.getFullYear().toString(),        // 年
		"m+": (date.getMonth() + 1).toString(),     // 月
		"d+": date.getDate().toString(),            // 日
		"H+": date.getHours().toString(),           // 时
		"M+": date.getMinutes().toString(),         // 分
		"S+": date.getSeconds().toString()          // 秒
		// 有其他格式化字符需求可以继续添加，必须转化成字符串
	};
	for (let k in opt) {
		ret = new RegExp("(" + k + ")").exec(fmt);
		if (ret) {
			fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
		};
	};
	return fmt;
}

/**
 * @zh
 * 创建map表
 * 
 * @param forceDictMode 
 */
export function createMap(forceDictMode?: boolean): any {
    const map = Object.create(null);
    if (forceDictMode) {
        const INVALID_IDENTIFIER_1 = '.';
        const INVALID_IDENTIFIER_2 = '/';
        // assign dummy values on the object
        map[INVALID_IDENTIFIER_1] = 1;
        map[INVALID_IDENTIFIER_2] = 1;
        delete map[INVALID_IDENTIFIER_1];
        delete map[INVALID_IDENTIFIER_2];
    }
    return map;
}

/**
 * @zh
 * 判断是否为空map表
 * 
 * @param map 
 */
export function isEmptyMap(map:Object){
	for(let k in map){
		return false;
	}
	return true;
}

/**
 * @zh
 * 通过Map的值
 * 
 * @param map - Map对象
 * @param path - 路径
 * @param split - 分隔符
 */
export function getMapValue(map:Object, path:string, split:string = "/"){
	if(path[0] == split){
		path = path.substr(1, path.length-1);
	}
	if(path[path.length - 1] == split){
		path = path.substr(0, path.length-1);
	}
	let value:any = map;
	for(let n of path.split(split)){
		if(!value){
			return null;
		}
		value = value[n];
	}
	return value;
}

/**
 * @zh
 * 通过路径设置Map的值
 * 
 * @param map - Map对象
 * @param path - 路径
 * @param value - 值
 * @param split - 分隔符
 */
export function setMapValue(map:Object, path:string, value:any, split:string = "/"){
	if(path[path.length - 1] == split){
		path = path.substr(0, path.length-1);
	}
    let spaths = path.split(split);
	let dest:any = map;
    for(let i = 0; i < spaths.length - 1; i++){
        let p = spaths[i];
        let nDest = dest[p];
        if(!nDest){
            nDest = createMap();
            dest[p] = nDest;
        }
        dest = nDest;
    }
	dest[spaths[spaths.length - 1]] = value;
}

/**
 * @zh
 * 合并Map表<br/>
 * Map表合并规则：<br/>
 * 遍历源Map表字段，对比目的Map表对应字段，存在几种情况：<br/>
 * 1、目的Map表中不存在该字段，直接设置为源Map表字段<br/>
 * 2、目的Map表字段和源Map表字段同为数组(Array)，把字段的源Map表数组复制到目的Map表数组中<br/>
 * 3、目的Map表字段和源Map表字段同为对象(Object)，以字段的目的Map表和源Map表为参数再次调用次函数<br/>
 * 4、其他情况，说明存在冲突。警告后，源Map表字段直接覆盖目的Map表字段
 * 
 * @param dmap - 目的Map表
 * @param smap - 源Map表
 * @param options - 选项，主要可以指定异常输出标签和源文件
 */
export function mergeMap(dmap:Object, smap:Object, options:{ tag?:string, source?:string } = {}){
    for(let key in smap){
        let svalue = smap[key];
        let dvalue = dmap[key];
        if(dvalue == null){
            dmap[key] = svalue;
        }else{
            let stype = typeof svalue;
            let dtype = typeof dvalue;
            if(dtype == 'object' && stype == dtype){
                let sarray = svalue instanceof Array;
                let darray = dvalue instanceof Array;
                if(sarray != darray){
                    cc.warn(options.tag || TAG, `invalid merge type array '${sarray}-${darray}' in key '${key}' < ${options.source || '[unknown]'}`);
                    dmap[key] = svalue;
                }else{
                    if(darray){
                        dvalue.push(...svalue);
                    }else {
                        mergeMap(dvalue, svalue, options);
                    }
                }
            }else{
                cc.warn(options.tag || TAG, `invalid merge type '${stype}-${dtype}' in key '${key}' < ${options.source || '[unknown]'}`);
                dmap[key] = svalue;
            }
        }
    }
}

/**
 * @zh
 * 更新Map表<br/>
 * Map表更新规则：<br/>
 * 遍历源Map表字段，对比目的Map表对应字段，存在几种情况：<br/>
 * 1、目的Map表中不存在该字段，直接设置为源Map表字段<br/>
 * 2、目的Map表字段和源Map表字段同为数组(Array)，直接设置为源Map表字段<br/>
 * 3、目的Map表字段和源Map表字段同为对象(Object)，以字段的目的Map表和源Map表为参数再次调用次函数<br/>
 * 
 * @param dmap - 目的Map表
 * @param smap - 源Map表
 */
export function updateMap(dmap:Object, smap:Object){
    for(let key in smap){
        let svalue = smap[key];
        let dvalue = dmap[key];
        if(dvalue == null){
            dmap[key] = svalue;
        }else{
            let stype = typeof svalue;
            let dtype = typeof dvalue;
            if(dtype == 'object' && stype == dtype){
                let sarray = svalue instanceof Array;
                let darray = dvalue instanceof Array;
                if(sarray != darray){
                    dmap[key] = svalue;
                }else{
                    if(darray){
                        dmap[key] = svalue;
                    }else {
                        this.updateMap(dvalue, svalue);
                    }
                }
            }else{
                dmap[key] = svalue;
            }
        }
    }
}

/**
 * @zh
 * 提取Map表<br/>
 * Map表提取规则：<br/>
 * 遍历目的Map表字段，对比源Map表对应字段，存在几种情况：<br/>
 * 1、源Map表中不存在该字段，跳过<br/>
 * 1、源Map表字段和目的Map表字段类型不同，跳过<br/>
 * 2、源Map表字段和目的Map表字段类型相同，不为(Object)，目的Map表字段设置为源Map表字段<br/>
 * 3、源Map表字段和目的Map表字段类型相同，同为(Object)，以字段的目的Map表和源Map表为参数再次调用次函数<br/>
 * 
 * @param dmap - 目的Map表
 * @param smap - 源Map表
 */
export function extractMap(dmap:Object, smap:Object){
    for(let key in dmap){
        let dvalue = dmap[key];
        let svalue = smap[key];
        if(svalue != null){
            let stype = typeof svalue;
            let dtype = typeof dvalue;
            if(stype == dtype){
                if(dtype == 'object'){
                    let sarray = svalue instanceof Array;
                    let darray = dvalue instanceof Array;
                    if(sarray == darray){
                        if(darray){
                            dmap[key] = svalue;
                        }else{
                            this.extractMap(dvalue, svalue);
                        }
                    }
                }else{
                    dmap[key] = svalue;
                }
            }
        }
    }
}

/**
 * @zh
 * 缓冲转换为UTF16字符串
 * 
 * @param buff - 缓冲
 */
export function ab2str(buff:ArrayBuffer){
	return String.fromCharCode.apply(null, new Uint16Array(buff));
}

/**
 * @zh
 * UTF16字符串转为缓冲
 * 
 * @param str - 字符串
 */
export function str2ab(str:string){
	let buff = new ArrayBuffer(str.length * 2);
	var bufView = new Uint16Array(buff);
	for (var i=0, l=str.length; i<l; i++) {
		bufView[i] = str.charCodeAt(i);
	}
	return buff;
}

/**
 * @zh
 * 重复指定的字符串
 * 
 * @param src -重复的字符串
 * @param n - 重复次数
 */
export function repeat(src:string, n:number) {
    return (new Array(n + 1)).join(src);
}

/**
 * @zh
 * base64字符串转为Uint8Array
 * 
 * @param b64str - base64字符串
 */
export function b642u8a(b64str:string) {
    repeat('123',3);
	const padding = repeat('=',(4 - b64str.length % 4) % 4);
	const base64 = (b64str + padding)
				.replace(/\-/g, '+')
				.replace(/_/g, '/');
	const rawData = atob(base64);
	const outputArray = new Uint8Array(rawData.length);

	for (let i = 0; i < rawData.length; ++i) {
		outputArray[i] = rawData.charCodeAt(i);
	}
	return outputArray;
}

/**
 * @zh
 * ArrayBuffer转为Base64字符串
 * 
 * @param buff - 缓冲对象
 */
export function ab2b64(buff:ArrayBuffer){
	let binary = '';
	let bytes = new Uint8Array(buff);
	let len = bytes.byteLength;
	for (let i = 0; i < len; i++) {
		binary += String.fromCharCode(bytes[i]);
	}
	return btoa(binary);
}

/**
 * @zh
 * 合并ArrayBuffer
 * 
 * @param arrays - 数组
 */
export function mergeABs(...arrays:ArrayBuffer[]) {
	let totalLen = 0;
	let ui8arrays:Uint8Array[] = [];
	for (let array of arrays){
		ui8arrays.push(new Uint8Array(array));
		totalLen += array.byteLength;
	}

    let res = new Uint8Array(totalLen);
    let offset = 0;
    for(let ui8array of ui8arrays) {
        res.set(ui8array, offset);
        offset += ui8array.length;
    }
    return res.buffer;
}

/**
 * @zh
 * 复制ArrayBuffer
 * 
 * @param src - 源ArrayBuffer
 * @param dest - 目的ArrayBuffer
 * @param start - 目的开始位置
 */
export function copyAB(src:ArrayBuffer, dest:ArrayBuffer, start:number){
	(new Uint8Array(dest)).set(new Uint8Array(src), start);
}

}

}

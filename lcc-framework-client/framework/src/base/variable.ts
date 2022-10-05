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

/// <reference path="../utils/js.ts" />

namespace lcc {

const TAG = "lcc/base/variable.ts";

/**
 * @zh
 * 变量类
 */
class Variable {
    /**
     * @zh
     * 映射表
     */
    private _map:{[key:string]:any} = js.createMap();
    
    /**
     * @zh
     * 设置变量
     * 
     * @param vname - 变量名称
     * @param value - 变量值
     */
    public set(vname:string, value:any){
        DEBUG.BASE && cc.log(TAG, `set ${vname} => ${value}`);
        this._map[vname] = value;
    }

    /**
     * @zh
     * 获得变量
     * 
     * @param vname - 变量名称
     */
    public get(vname:string){
        return this._map[vname];
    }

    /**
     * @zh
     * 移除所有变量
     */
    public removeAll(){
        for(let vname in Object.keys(this._map)){
            delete this._map[vname];
        }
        DEBUG.BASE && cc.log(TAG, `removeAll`);
    }

    /**
     * @zh
     * 解析字符串中的变量
     * 
     * @param str - 字符串
     * @param extMap - 外部映射表，优先解析
     */
    public parseString(str:string, extMap:{[key:string]:any} = {}){
        return str.replace(/\$\{([\w\d_:\.]+)\}/g, (k ,m:string) => {
            if(m.indexOf(":") == -1){
                let value = extMap[m];
                if(value != null){
                    return value;
                }
                value = this._map[m];
                if(value != null){
                    return value;
                }
            }else{
                let parts = m.split(":");
                let value = extMap[parts[0]];
                if(typeof value == "function"){
                    return value(...parts[1].split(","));
                }
                value = this._map[parts[0]];
                if(typeof value == "function"){
                    return value(...parts[1].split(","));
                }
            }
            return "${" + m + "}";
        });
    }

}

/**
 * @zh
 * 变量对象
 */
export const variable = new Variable();

/**
 * @zh
 * 翻译JSON对象中的变量
 * 
 * @param json json对象
 * @param localpath 文件当前路径
 */
export function translateJSON(json:any, localpath?:string){
    return JSON.parse(variable.parseString(JSON.stringify(json), { localpath : localpath || "" }));
}

}

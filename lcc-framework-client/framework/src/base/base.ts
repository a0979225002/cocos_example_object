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

const TAG = "lcc/base/base.ts";

/**
 * @zh
 * 版本号
 */
export const VERSION = '1.0.0';

/**
 * @zh
 * 调试用宏定义
 */
export namespace DEBUG {
    /**
     * @zh
     * 基础模块
     */
    export let BASE = false;

    /**
     * @zh
     * 存档模块
     */
    export let ARCHIVE = false;

    /**
     * @zh
     * 音频模块
     */
    export let AUDIO = false;

    /**
     * @zh
     * 配置模块
     */
    export let CONFIG = false;
    
    /**
     * @zh
     * 数据表模块
     */
    export let TABLE = false;

    /**
     * @zh
     * 语言模块
     */
    export let LANG = false;

    /**
     * @zh
     * 网络模块
     */
    export let NETWORK = false;

    /**
     * @zh
     * 定时器模块
     */
    export let TIMER = false;

    /**
     * @zh
     * 工作者模块
     */
    export let WORKER = false;
};

}

// 挂载到全局
globalThis.lcc = lcc;

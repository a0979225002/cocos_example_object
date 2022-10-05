var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
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
var lcc;
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
(function (lcc) {
    var TAG = "lcc/base/lcc.ts";
    /**
     * @zh
     * 版本号
     */
    lcc.VERSION = '1.0.0';
    /**
     * @zh
     * 调试用宏定义
     */
    var DEBUG;
    (function (DEBUG) {
        /**
         * @zh
         * 基础模块
         */
        DEBUG.BASE = false;
        /**
         * @zh
         * 存档模块
         */
        DEBUG.ARCHIVE = false;
        /**
         * @zh
         * 音频模块
         */
        DEBUG.AUDIO = false;
        /**
         * @zh
         * 配置模块
         */
        DEBUG.CONFIG = false;
        /**
         * @zh
         * 数据表模块
         */
        DEBUG.TABLE = false;
        /**
         * @zh
         * 语言模块
         */
        DEBUG.LANG = false;
        /**
         * @zh
         * 网络模块
         */
        DEBUG.NETWORK = false;
        /**
         * @zh
         * 定时器模块
         */
        DEBUG.TIMER = false;
        /**
         * @zh
         * 工作者模块
         */
        DEBUG.WORKER = false;
    })(DEBUG = lcc.DEBUG || (lcc.DEBUG = {}));
    ;
})(lcc || (lcc = {}));
// 挂载到全局
globalThis.lcc = lcc;
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
var lcc;
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
(function (lcc) {
    var js;
    (function (js) {
        var TAG = "lcc/utils/js.ts";
        /**
         * @zh
         * 格式化字符串, Map参数
         *
         * @param str - 格式化的字符串
         * @param map - 外部映射表，优先解析
         */
        function formatString(str, map) {
            if (!isEmptyMap(map)) {
                return str.replace(/\$\{([\w\d_:\.]+)\}/g, function (k, m) {
                    var value = map[m];
                    if (value != null) {
                        return value;
                    }
                    return "${" + m + "}";
                });
            }
            else {
                return str;
            }
        }
        js.formatString = formatString;
        /**
         * @zh
         * 日期格式化
         *
         * @param fmt - 格式字符串
         * @param date - 日期对象
         */
        function formatDate(fmt, date) {
            var ret;
            var opt = {
                "Y+": date.getFullYear().toString(),
                "m+": (date.getMonth() + 1).toString(),
                "d+": date.getDate().toString(),
                "H+": date.getHours().toString(),
                "M+": date.getMinutes().toString(),
                "S+": date.getSeconds().toString() // 秒
                // 有其他格式化字符需求可以继续添加，必须转化成字符串
            };
            for (var k in opt) {
                ret = new RegExp("(" + k + ")").exec(fmt);
                if (ret) {
                    fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")));
                }
                ;
            }
            ;
            return fmt;
        }
        js.formatDate = formatDate;
        /**
         * @zh
         * 创建map表
         *
         * @param forceDictMode
         */
        function createMap(forceDictMode) {
            var map = Object.create(null);
            if (forceDictMode) {
                var INVALID_IDENTIFIER_1 = '.';
                var INVALID_IDENTIFIER_2 = '/';
                // assign dummy values on the object
                map[INVALID_IDENTIFIER_1] = 1;
                map[INVALID_IDENTIFIER_2] = 1;
                delete map[INVALID_IDENTIFIER_1];
                delete map[INVALID_IDENTIFIER_2];
            }
            return map;
        }
        js.createMap = createMap;
        /**
         * @zh
         * 判断是否为空map表
         *
         * @param map
         */
        function isEmptyMap(map) {
            for (var k in map) {
                return false;
            }
            return true;
        }
        js.isEmptyMap = isEmptyMap;
        /**
         * @zh
         * 通过Map的值
         *
         * @param map - Map对象
         * @param path - 路径
         * @param split - 分隔符
         */
        function getMapValue(map, path, split) {
            if (split === void 0) { split = "/"; }
            if (path[0] == split) {
                path = path.substr(1, path.length - 1);
            }
            if (path[path.length - 1] == split) {
                path = path.substr(0, path.length - 1);
            }
            var value = map;
            for (var _i = 0, _a = path.split(split); _i < _a.length; _i++) {
                var n = _a[_i];
                if (!value) {
                    return null;
                }
                value = value[n];
            }
            return value;
        }
        js.getMapValue = getMapValue;
        /**
         * @zh
         * 通过路径设置Map的值
         *
         * @param map - Map对象
         * @param path - 路径
         * @param value - 值
         * @param split - 分隔符
         */
        function setMapValue(map, path, value, split) {
            if (split === void 0) { split = "/"; }
            if (path[path.length - 1] == split) {
                path = path.substr(0, path.length - 1);
            }
            var spaths = path.split(split);
            var dest = map;
            for (var i = 0; i < spaths.length - 1; i++) {
                var p = spaths[i];
                var nDest = dest[p];
                if (!nDest) {
                    nDest = createMap();
                    dest[p] = nDest;
                }
                dest = nDest;
            }
            dest[spaths[spaths.length - 1]] = value;
        }
        js.setMapValue = setMapValue;
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
        function mergeMap(dmap, smap, options) {
            if (options === void 0) { options = {}; }
            for (var key in smap) {
                var svalue = smap[key];
                var dvalue = dmap[key];
                if (dvalue == null) {
                    dmap[key] = svalue;
                }
                else {
                    var stype = typeof svalue;
                    var dtype = typeof dvalue;
                    if (dtype == 'object' && stype == dtype) {
                        var sarray = svalue instanceof Array;
                        var darray = dvalue instanceof Array;
                        if (sarray != darray) {
                            cc.warn(options.tag || TAG, "invalid merge type array '" + sarray + "-" + darray + "' in key '" + key + "' < " + (options.source || '[unknown]'));
                            dmap[key] = svalue;
                        }
                        else {
                            if (darray) {
                                dvalue.push.apply(dvalue, svalue);
                            }
                            else {
                                mergeMap(dvalue, svalue, options);
                            }
                        }
                    }
                    else {
                        cc.warn(options.tag || TAG, "invalid merge type '" + stype + "-" + dtype + "' in key '" + key + "' < " + (options.source || '[unknown]'));
                        dmap[key] = svalue;
                    }
                }
            }
        }
        js.mergeMap = mergeMap;
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
        function updateMap(dmap, smap) {
            for (var key in smap) {
                var svalue = smap[key];
                var dvalue = dmap[key];
                if (dvalue == null) {
                    dmap[key] = svalue;
                }
                else {
                    var stype = typeof svalue;
                    var dtype = typeof dvalue;
                    if (dtype == 'object' && stype == dtype) {
                        var sarray = svalue instanceof Array;
                        var darray = dvalue instanceof Array;
                        if (sarray != darray) {
                            dmap[key] = svalue;
                        }
                        else {
                            if (darray) {
                                dmap[key] = svalue;
                            }
                            else {
                                this.updateMap(dvalue, svalue);
                            }
                        }
                    }
                    else {
                        dmap[key] = svalue;
                    }
                }
            }
        }
        js.updateMap = updateMap;
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
        function extractMap(dmap, smap) {
            for (var key in dmap) {
                var dvalue = dmap[key];
                var svalue = smap[key];
                if (svalue != null) {
                    var stype = typeof svalue;
                    var dtype = typeof dvalue;
                    if (stype == dtype) {
                        if (dtype == 'object') {
                            var sarray = svalue instanceof Array;
                            var darray = dvalue instanceof Array;
                            if (sarray == darray) {
                                if (darray) {
                                    dmap[key] = svalue;
                                }
                                else {
                                    this.extractMap(dvalue, svalue);
                                }
                            }
                        }
                        else {
                            dmap[key] = svalue;
                        }
                    }
                }
            }
        }
        js.extractMap = extractMap;
        /**
         * @zh
         * 缓冲转换为UTF16字符串
         *
         * @param buff - 缓冲
         */
        function ab2str(buff) {
            return String.fromCharCode.apply(null, new Uint16Array(buff));
        }
        js.ab2str = ab2str;
        /**
         * @zh
         * UTF16字符串转为缓冲
         *
         * @param str - 字符串
         */
        function str2ab(str) {
            var buff = new ArrayBuffer(str.length * 2);
            var bufView = new Uint16Array(buff);
            for (var i = 0, l = str.length; i < l; i++) {
                bufView[i] = str.charCodeAt(i);
            }
            return buff;
        }
        js.str2ab = str2ab;
        /**
         * @zh
         * 重复指定的字符串
         *
         * @param src -重复的字符串
         * @param n - 重复次数
         */
        function repeat(src, n) {
            return (new Array(n + 1)).join(src);
        }
        js.repeat = repeat;
        /**
         * @zh
         * base64字符串转为Uint8Array
         *
         * @param b64str - base64字符串
         */
        function b642u8a(b64str) {
            repeat('123', 3);
            var padding = repeat('=', (4 - b64str.length % 4) % 4);
            var base64 = (b64str + padding)
                .replace(/\-/g, '+')
                .replace(/_/g, '/');
            var rawData = atob(base64);
            var outputArray = new Uint8Array(rawData.length);
            for (var i = 0; i < rawData.length; ++i) {
                outputArray[i] = rawData.charCodeAt(i);
            }
            return outputArray;
        }
        js.b642u8a = b642u8a;
        /**
         * @zh
         * ArrayBuffer转为Base64字符串
         *
         * @param buff - 缓冲对象
         */
        function ab2b64(buff) {
            var binary = '';
            var bytes = new Uint8Array(buff);
            var len = bytes.byteLength;
            for (var i = 0; i < len; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            return btoa(binary);
        }
        js.ab2b64 = ab2b64;
        /**
         * @zh
         * 合并ArrayBuffer
         *
         * @param arrays - 数组
         */
        function mergeABs() {
            var arrays = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arrays[_i] = arguments[_i];
            }
            var totalLen = 0;
            var ui8arrays = [];
            for (var _a = 0, arrays_1 = arrays; _a < arrays_1.length; _a++) {
                var array = arrays_1[_a];
                ui8arrays.push(new Uint8Array(array));
                totalLen += array.byteLength;
            }
            var res = new Uint8Array(totalLen);
            var offset = 0;
            for (var _b = 0, ui8arrays_1 = ui8arrays; _b < ui8arrays_1.length; _b++) {
                var ui8array = ui8arrays_1[_b];
                res.set(ui8array, offset);
                offset += ui8array.length;
            }
            return res.buffer;
        }
        js.mergeABs = mergeABs;
        /**
         * @zh
         * 复制ArrayBuffer
         *
         * @param src - 源ArrayBuffer
         * @param dest - 目的ArrayBuffer
         * @param start - 目的开始位置
         */
        function copyAB(src, dest, start) {
            (new Uint8Array(dest)).set(new Uint8Array(src), start);
        }
        js.copyAB = copyAB;
    })(js = lcc.js || (lcc.js = {}));
})(lcc || (lcc = {}));
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
/// <reference path="./lcc.ts" />
/// <reference path="../utils/js.ts" />
var lcc;
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
/// <reference path="./lcc.ts" />
/// <reference path="../utils/js.ts" />
(function (lcc) {
    var TAG = "lcc/base/doing.ts";
    /**
     * @zh
     * 计数器
     */
    var Counter = /** @class */ (function () {
        function Counter() {
            /**
             * @zh
             * 计数值
             */
            this._count = 0;
            /**
             * @zh
             * 归零回调
             */
            this._onZero = null;
        }
        /**
         * @zh
         * 检查归零
         */
        Counter.prototype.checkZero = function () {
            if (this._count <= 0) {
                if (this._onZero) {
                    var callback = this._onZero;
                    this._onZero = null;
                    try {
                        callback();
                    }
                    catch (e) {
                        cc.error(TAG, "checkZero Exception " + e);
                    }
                }
            }
        };
        /**
         * 重置计数
         */
        Counter.prototype.reset = function () {
            this._count = 0;
            this.checkZero();
        };
        /**
         * @zh
         * 增加计数
         */
        Counter.prototype.addCount = function () {
            this._count++;
        };
        /**
         * @zh
         * 减少计数
         */
        Counter.prototype.decCount = function () {
            this._count--;
            this.checkZero();
        };
        /**
         * @zh
         * 在回调函数内计数
         *
         * @param callback - 回调函数
         */
        Counter.prototype.in = function (callback) {
            return __awaiter(this, void 0, void 0, function () {
                var e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.addCount();
                            if (!callback) return [3 /*break*/, 4];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, callback()];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            e_1 = _a.sent();
                            cc.error(TAG, "in Exception " + e_1);
                            return [3 /*break*/, 4];
                        case 4:
                            this.decCount();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 直到归零
         */
        Counter.prototype.untilZero = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    if (this._count > 0) {
                        return [2 /*return*/, new Promise(function (resolve) {
                                _this._onZero = resolve;
                            })];
                    }
                    return [2 /*return*/];
                });
            });
        };
        return Counter;
    }());
    /**
     * @zh
     * 工作中类
     */
    var Doing = /** @class */ (function () {
        function Doing() {
            /**
             * 索引加载
             */
            this.indexLoad = new Counter();
            /**
             * 语言更新
             */
            this.langUpdate = new Counter();
            /**
             * 状态初始化
             */
            this.stateInitialize = new Counter();
            /**
             * 状态释放
             */
            this.stateRelease = new Counter();
        }
        /**
         * 重置工作中
         */
        Doing.prototype.reset = function () {
            this.indexLoad.reset();
            this.langUpdate.reset();
            this.stateInitialize.reset();
            this.stateRelease.reset();
        };
        return Doing;
    }());
    /**
     * @zh
     * 工作中对象
     */
    lcc.doing = new Doing();
})(lcc || (lcc = {}));
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
var lcc;
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
(function (lcc) {
    var TAG = "lcc/base/variable.ts";
    /**
     * @zh
     * 变量类
     */
    var Variable = /** @class */ (function () {
        function Variable() {
            /**
             * @zh
             * 映射表
             */
            this._map = lcc.js.createMap();
        }
        /**
         * @zh
         * 设置变量
         *
         * @param vname - 变量名称
         * @param value - 变量值
         */
        Variable.prototype.set = function (vname, value) {
            lcc.DEBUG.BASE && cc.log(TAG, "set " + vname + " => " + value);
            this._map[vname] = value;
        };
        /**
         * @zh
         * 获得变量
         *
         * @param vname - 变量名称
         */
        Variable.prototype.get = function (vname) {
            return this._map[vname];
        };
        /**
         * @zh
         * 移除所有变量
         */
        Variable.prototype.removeAll = function () {
            for (var vname in Object.keys(this._map)) {
                delete this._map[vname];
            }
            lcc.DEBUG.BASE && cc.log(TAG, "removeAll");
        };
        /**
         * @zh
         * 解析字符串中的变量
         *
         * @param str - 字符串
         * @param extMap - 外部映射表，优先解析
         */
        Variable.prototype.parseString = function (str, extMap) {
            var _this = this;
            if (extMap === void 0) { extMap = {}; }
            return str.replace(/\$\{([\w\d_:\.]+)\}/g, function (k, m) {
                if (m.indexOf(":") == -1) {
                    var value = extMap[m];
                    if (value != null) {
                        return value;
                    }
                    value = _this._map[m];
                    if (value != null) {
                        return value;
                    }
                }
                else {
                    var parts = m.split(":");
                    var value = extMap[parts[0]];
                    if (typeof value == "function") {
                        return value.apply(void 0, parts[1].split(","));
                    }
                    value = _this._map[parts[0]];
                    if (typeof value == "function") {
                        return value.apply(void 0, parts[1].split(","));
                    }
                }
                return "${" + m + "}";
            });
        };
        return Variable;
    }());
    /**
     * @zh
     * 变量对象
     */
    lcc.variable = new Variable();
    /**
     * @zh
     * 翻译JSON对象中的变量
     *
     * @param json json对象
     * @param localpath 文件当前路径
     */
    function translateJSON(json, localpath) {
        return JSON.parse(lcc.variable.parseString(JSON.stringify(json), { localpath: localpath || "" }));
    }
    lcc.translateJSON = translateJSON;
})(lcc || (lcc = {}));
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
/// <reference path="./lcc.ts" />
/// <reference path="./variable.ts" />
/// <reference path="../utils/js.ts" />
var lcc;
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
/// <reference path="./lcc.ts" />
/// <reference path="./variable.ts" />
/// <reference path="../utils/js.ts" />
(function (lcc) {
    var TAG = "lcc/base/reference.ts";
    /**
     * @zh
     * 框架错误
     */
    var ERROR;
    (function (ERROR) {
        /**
         * @zh
         * 引用冲突
         */
        ERROR.REFERENCE_CONFLICT = true;
    })(ERROR = lcc.ERROR || (lcc.ERROR = {}));
    ;
    /**
     * @zh
     * 获得引用key字符串
     *
     * @param key 引用key对象
     */
    function getRefKeyString(key) {
        if (key.pack == null) {
            key.pack = lcc.variable.get('__LoadPack__') || 'resources';
        }
        return key.pack + "://" + key.path;
    }
    lcc.getRefKeyString = getRefKeyString;
    /**
     * @zh
     * 引用类
     */
    var Reference = /** @class */ (function () {
        function Reference() {
            /**
             * @zh
             * 映射表
             */
            this._map = lcc.js.createMap();
        }
        /**
         * @zh
         * 获得指定引用
         *
         * @param key 键
         */
        Reference.prototype.get = function (key) {
            if (typeof key != 'string') {
                key = getRefKeyString(key);
            }
            return this._map[key];
        };
        /**
         * @zh
         * 添加指定引用
         *
         * @param key 键
         * @param value 值
         */
        Reference.prototype.add = function (key, value) {
            if (typeof key != 'string') {
                key = getRefKeyString(key);
            }
            if (this._map[key]) {
                var msg = "key " + key + " conflict";
                if (ERROR.REFERENCE_CONFLICT) {
                    cc.error(TAG, msg);
                }
                else {
                    cc.warn(TAG, msg);
                }
            }
            lcc.DEBUG.BASE && cc.log(TAG, "add " + key + " => " + value);
            this._map[key] = value;
        };
        /**
         * @zh
         * 遍历引用
         *
         * @param callback - 回调函数
         */
        Reference.prototype.foreach = function (callback) {
            for (var k in this._map) {
                if (callback(k, this._map[k])) {
                    break;
                }
            }
        };
        /**
         * @zh
         * 移除指定引用
         *
         * @param key 键
         */
        Reference.prototype.remove = function (key) {
            if (typeof key != 'string') {
                key = getRefKeyString(key);
            }
            lcc.DEBUG.BASE && cc.log(TAG, "remove " + key);
            delete this._map[key];
        };
        /**
         * @zh
         * 通过包名称移除
         *
         * @param pack 包名称
         */
        Reference.prototype.removeByPack = function (pack) {
            var prefix = pack + "://";
            for (var _i = 0, _a = Object.keys(this._map); _i < _a.length; _i++) {
                var key = _a[_i];
                if (key.indexOf(prefix) == 0) {
                    this.remove(key);
                }
            }
        };
        /**
         * @zh
         * 移除所有引用
         */
        Reference.prototype.removeAll = function () {
            for (var _i = 0, _a = Object.keys(this._map); _i < _a.length; _i++) {
                var key = _a[_i];
                this.remove(key);
            }
        };
        return Reference;
    }());
    /**
     * @zh
     * 引用对象
     */
    lcc.reference = new Reference();
    /**
     * @zh
     * 装饰器
     */
    var _decorator;
    (function (_decorator) {
        /**
         * @zh
         * lcc引用类装饰器
         */
        function refclass(key) {
            return function (target) {
                key = key || target.prototype.constructor.name;
                if (typeof key != 'string') {
                    key = getRefKeyString(key);
                }
                lcc.reference.add(key, target);
            };
        }
        _decorator.refclass = refclass;
        ;
    })(_decorator = lcc._decorator || (lcc._decorator = {}));
})(lcc || (lcc = {}));
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
/// <reference path="./lcc.ts" />
/// <reference path="./doing.ts" />
/// <reference path="./reference.ts" />
/// <reference path="./variable.ts" />
var lcc;
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
/// <reference path="./lcc.ts" />
/// <reference path="./doing.ts" />
/// <reference path="./reference.ts" />
/// <reference path="./variable.ts" />
(function (lcc) {
    var TAG = "lcc/base/state.ts";
    /**
     * @zh
     * 框架状态
     */
    var State = /** @class */ (function (_super) {
        __extends(State, _super);
        function State() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * @zh
             * 是否已经初始化
             */
            _this._initialized = false;
            return _this;
        }
        Object.defineProperty(State.prototype, "initialized", {
            /**
             * @zh
             * 判断是否已经初始化
             */
            get: function () {
                return this._initialized;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @zh
         * 初始化
         */
        State.prototype.initialize = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!this._initialized) return [3 /*break*/, 2];
                            lcc.reference.removeAll();
                            lcc.variable.removeAll();
                            lcc.doing.reset();
                            try {
                                this.emit('initialize');
                            }
                            catch (e) {
                                cc.error(TAG, "initialize Exception " + e);
                            }
                            return [4 /*yield*/, lcc.doing.stateInitialize.untilZero()];
                        case 1:
                            _a.sent();
                            this._initialized = true;
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 释放
         */
        State.prototype.release = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this._initialized) return [3 /*break*/, 2];
                            this._initialized = false;
                            lcc.doing.reset();
                            try {
                                this.emit('release');
                            }
                            catch (e) {
                                cc.error(TAG, "release Exception " + e);
                            }
                            return [4 /*yield*/, lcc.doing.stateRelease.untilZero()];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        return State;
    }(cc.EventTarget));
    /**
     * @zh
     * 框架状态对象
     */
    lcc.state = new State();
})(lcc || (lcc = {}));
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
/// <reference path="../base/lcc.ts" />
/// <reference path="../base/state.ts" />
/// <reference path="../utils/js.ts" />
var lcc;
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
/// <reference path="../base/lcc.ts" />
/// <reference path="../base/state.ts" />
/// <reference path="../utils/js.ts" />
(function (lcc) {
    var TAG = "lcc/archive/archive-manager.ts";
    /**
     * @zh
     * 事件点块位数
     */
    var EPOINT_BLOCK = 32;
    /**
     * @zh
     * 存档信息项
     */
    var INFO_ITEM = "archive_info";
    /**
     * @zh
     * 存档插槽前缀
     */
    var DATA_PREFIX = "archive_data_";
    /**
     * @zh
     * 默认存档事件段
     */
    lcc.ARCHIVE_EVENTS_SEGEMENT = 'default';
    /**
     * @zh
     * 存档管理器
     */
    var ArchiveManager = /** @class */ (function (_super) {
        __extends(ArchiveManager, _super);
        /**
         * @zh
         * 构造函数
         */
        function ArchiveManager() {
            var _this = _super.call(this) || this;
            /**
             * @zh
             * 存档信息
             */
            _this._infos = lcc.js.createMap();
            /**
             * @zh
             * 当前存档插槽
             */
            _this._nowSlot = 0;
            /**
             * @zh
             * 当前存档数据
             */
            _this._data = null;
            lcc.state.on('initialize', function () {
                lcc.doing.stateInitialize.in(function () {
                    _this._infos = JSON.parse(cc.sys.localStorage.getItem(INFO_ITEM) || "{}");
                    _this._nowSlot = 0;
                    _this._data = null;
                });
            });
            lcc.state.on('release', function () {
                lcc.doing.stateRelease.in(function () {
                    _this.clear();
                });
            });
            return _this;
        }
        /**
         * @zh
         * 获得当前存档信息
         */
        ArchiveManager.prototype.getArchiveInfo = function () {
            return this._infos[this, this._nowSlot];
        };
        /**
         * @zh
         * 获得当前存档数据
         */
        ArchiveManager.prototype.getArchiveData = function () {
            return this._data;
        };
        /**
         * @zh
         * 获得所有存档
         */
        ArchiveManager.prototype.getArchives = function () {
            var archives = [];
            for (var s in this._infos) {
                archives.push(this._infos[s]);
            }
            archives.sort(function (a, b) {
                return b.time - a.time;
            });
            return archives;
        };
        /**
         * @zh
         * 加载存档
         *
         * @param slot - 插槽
         */
        ArchiveManager.prototype.loadArchive = function (slot) {
            this._nowSlot = slot;
            var datas = cc.sys.localStorage.getItem(DATA_PREFIX + this._nowSlot);
            if (datas) {
                this._data = JSON.parse(datas);
                try {
                    this.emit("load", this._data, this._infos[this._nowSlot]);
                    lcc.DEBUG.ARCHIVE && cc.log(TAG, "loadArchive " + slot);
                    return true;
                }
                catch (e) {
                    cc.error(TAG, "loadArchive ' Exception " + e);
                }
            }
        };
        /**
         * @zh
         * 保存存档
         *
         * @param slot - 插槽
         */
        ArchiveManager.prototype.saveArchive = function (slot) {
            this._nowSlot = slot;
            if (this._nowSlot && this._infos && this._data) {
                var info = this._infos[this._nowSlot];
                try {
                    this.emit("save", this._data, info);
                    info.time = Math.floor(Date.now() / 1000);
                    cc.sys.localStorage.setItem(INFO_ITEM, JSON.stringify(this._infos));
                    cc.sys.localStorage.setItem(DATA_PREFIX + this._nowSlot, JSON.stringify(this._data));
                    lcc.DEBUG.ARCHIVE && cc.log(TAG, "saveArchive " + slot);
                }
                catch (e) {
                    cc.error(TAG, "saveArchive ' Exception " + e);
                }
            }
        };
        /**
         * @zh
         * 删除存档
         *
         * @param slot - 插槽
         */
        ArchiveManager.prototype.deleteArchive = function (slot) {
            if (this._nowSlot == slot) {
                this._data = null;
            }
            this._nowSlot = slot;
            if (this._infos[this._nowSlot]) {
                delete this._infos[this._nowSlot];
                cc.sys.localStorage.setItem(INFO_ITEM, JSON.stringify(this._infos));
                cc.sys.localStorage.setItem(DATA_PREFIX + this._nowSlot, "");
                lcc.DEBUG.ARCHIVE && cc.log(TAG, "deleteArchive " + slot);
                return true;
            }
        };
        /**
         * @zh
         * 新建存档
         *
         * @param slot - 插槽
         * @param name - 存档名
         */
        ArchiveManager.prototype.createArchive = function (slot, name) {
            this._nowSlot = slot;
            var info = {
                slot: slot,
                name: name || "New Archive",
                time: Math.floor(Date.now() / 1000),
                version: "1.0.0",
            };
            this._infos[slot] = info;
            this._data = {
                eventps: {
                    default: lcc.js.createMap() // 默认
                }
            };
            try {
                this.emit("create", this._data, info);
                lcc.DEBUG.ARCHIVE && cc.log(TAG, "createArchive " + slot + " name:" + name);
            }
            catch (e) {
                cc.error(TAG, "createArchive ' Exception " + e);
            }
        };
        /**
         * @zh
         * 检查事件点
         *
         * @param point - 事件
         * @param segment - 段
         */
        ArchiveManager.prototype.checkEventPoint = function (point, segment) {
            if (segment === void 0) { segment = lcc.ARCHIVE_EVENTS_SEGEMENT; }
            point--;
            var valofst = Math.floor(point / EPOINT_BLOCK);
            var bitofst = point % EPOINT_BLOCK;
            var segeps = this._data.eventps[segment];
            if (!segeps) {
                return false;
            }
            var epsval = segeps[valofst];
            if (!epsval) {
                return false;
            }
            return ((epsval & (1 << bitofst)) != 0);
        };
        /**
         * @zh
         * 设置事件点
         *
         * @param point - 事件
         * @param state - 状态
         * @param segment - 段
         */
        ArchiveManager.prototype.setEventPoint = function (point, state, segment) {
            if (segment === void 0) { segment = lcc.ARCHIVE_EVENTS_SEGEMENT; }
            point--;
            var valofst = Math.floor(point / EPOINT_BLOCK);
            var bitofst = point % EPOINT_BLOCK;
            var segeps = this._data.eventps[segment];
            if (!segeps) {
                segeps = lcc.js.createMap();
                this._data.eventps[segment] = segeps;
            }
            var epsval = segeps[valofst] || 0;
            if (state) {
                epsval = epsval | (1 << bitofst);
            }
            else {
                epsval = epsval & (~(1 << bitofst));
            }
            segeps[valofst] = epsval;
            lcc.DEBUG.ARCHIVE && cc.log(TAG, "setEventPoint " + point + " state:" + state + " segment:" + segment);
        };
        return ArchiveManager;
    }(cc.EventTarget));
    ;
    /**
     * @zh
     * 存档管理器对象
     */
    lcc.archiveMgr = new ArchiveManager();
})(lcc || (lcc = {}));
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
var lcc;
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
(function (lcc) {
    var TAG = "lcc/network/http/http.ts";
    /**
     * @zh
     * HTTP发送默认超时时间
     */
    lcc.HTTP_SEND_TIMEOUT = 5;
    /**
     * @zh
     * http功能类
     */
    var http;
    (function (http) {
        /**
         * @zh
         * 请求索引
         */
        var requestIndex = 0;
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
        function post(url, data, extHeaders, timeout) {
            return new Promise(function (resole) {
                var reqid = "req_" + requestIndex++;
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4 && xhr.status == 200) {
                        lcc.timerMgr.removeTimer({
                            group: "lcc.http",
                            key: reqid,
                        });
                        resole(xhr.responseText);
                    }
                };
                lcc.timerMgr.addTimer(timeout || lcc.HTTP_SEND_TIMEOUT, function () {
                    xhr.onreadystatechange = null;
                    resole(null);
                }, {
                    group: "lcc.http",
                    key: reqid,
                });
                xhr.open("POST", url, true);
                xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
                xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST');
                xhr.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type');
                if (extHeaders) {
                    for (var k in extHeaders) {
                        xhr.setRequestHeader(k, extHeaders[k]);
                    }
                }
                xhr.send(data);
            });
        }
        http.post = post;
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
        function postJson(url, data, timeout) {
            return __awaiter(this, void 0, void 0, function () {
                var content;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, post(url, JSON.stringify(data), { "Content-Type": "application/json" }, timeout)];
                        case 1:
                            content = _a.sent();
                            if (content) {
                                return [2 /*return*/, JSON.parse(content)];
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
        http.postJson = postJson;
        /**
         * @zh
         * http GET 数据
         *
         * @param url - URL
         * @param timeout - 可选，自定义超时时间
         *
         * @return Promise<string>
         */
        function get(url, timeout) {
            return new Promise(function (resole) {
                var reqid = "req_" + requestIndex++;
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4 && xhr.status == 200) {
                        lcc.timerMgr.removeTimer({
                            group: "lcc.http",
                            key: reqid,
                        });
                        resole(xhr.responseText);
                    }
                };
                lcc.timerMgr.addTimer(timeout || lcc.HTTP_SEND_TIMEOUT, function () {
                    xhr.onreadystatechange = null;
                    resole(null);
                }, {
                    group: "lcc.http",
                    key: reqid,
                });
                xhr.open("GET", url, true);
                xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
                xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST');
                xhr.setRequestHeader('Access-Control-Allow-Headers', 'x-requested-with,content-type');
                xhr.send();
            });
        }
        http.get = get;
        /**
         * @zh
         * http GET JSON数据
         *
         * @param url - URL
         * @param timeout - 可选，自定义超时时间
         *
         * @return Promise<[JSON]>
         */
        function getJson(url, timeout) {
            return __awaiter(this, void 0, void 0, function () {
                var content;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, get(url, timeout)];
                        case 1:
                            content = _a.sent();
                            if (content) {
                                return [2 /*return*/, JSON.parse(content)];
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
        http.getJson = getJson;
    })(http = lcc.http || (lcc.http = {}));
})(lcc || (lcc = {}));
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
var lcc;
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
(function (lcc) {
    var asset;
    (function (asset_1) {
        var TAG = "lcc/utils/asset.ts";
        /**
         * @zh
         * 加载资源包
         *
         * @param nameOrUrl - 包名或者URL路径
         */
        function loadBundle(nameOrUrl) {
            return new Promise(function (resolve) {
                cc.assetManager.loadBundle(nameOrUrl, function (err, bundle) {
                    if (!err && bundle) {
                        resolve(bundle);
                    }
                    else {
                        cc.warn(TAG, "not found Bundle : " + nameOrUrl);
                        resolve(null);
                    }
                });
            });
        }
        asset_1.loadBundle = loadBundle;
        /**
         * @zh
         * 加载远程精灵帧
         *
         * @param surl - 精灵帧URL路径
         * @param ext - 图片后缀, 例如 .png .jpg 等。如果路径没有后缀，则必须指定该后缀
         */
        function loadRemoteSpriteFrame(surl, ext) {
            return new Promise(function (resolve) {
                var callback = function (err, data) {
                    if (!err && data) {
                        var spriteFrame = new cc.SpriteFrame();
                        spriteFrame.setTexture(data);
                        resolve(spriteFrame);
                    }
                    else {
                        cc.warn(TAG, "not found Remote SpriteFrame : " + surl);
                        resolve(null);
                    }
                };
                if (ext) {
                    cc.assetManager.loadRemote(surl, { type: ext }, callback);
                }
                else {
                    cc.assetManager.loadRemote(surl, callback);
                }
            });
        }
        asset_1.loadRemoteSpriteFrame = loadRemoteSpriteFrame;
        /**
         * @zh
         * 通过UUID获得资源
         *
         * @param uuid - UUID字符串
         */
        function getAssetByUUID(uuid) {
            return new Promise(function (resolve) {
                cc.assetManager.loadAny([uuid], function (err, asset) {
                    if (!err && asset) {
                        resolve(asset);
                    }
                    else {
                        cc.warn(TAG, "not found asset : " + uuid);
                        resolve(null);
                    }
                });
            });
        }
        asset_1.getAssetByUUID = getAssetByUUID;
        /**
         * @zh
         * 加载json文件
         *
         * @param jgPath - JSON文件包路径
         * @param bundle - 包对象
         */
        function loadJson(jpPath, bundle) {
            if (bundle === void 0) { bundle = cc.resources; }
            return new Promise(function (resolve) {
                bundle.load(jpPath, cc.JsonAsset, function (err, data) {
                    if (!err && data) {
                        resolve(data.json);
                    }
                    else {
                        cc.warn(TAG, "not found Json : " + jpPath + " in " + bundle.name);
                        resolve(null);
                    }
                });
            });
        }
        asset_1.loadJson = loadJson;
        /**
         * @zh
         * 加载音频
         *
         * @param apPath - 音频文件包路径
         * @param bundle - 包对象
         */
        function loadAudio(apPath, bundle) {
            if (bundle === void 0) { bundle = cc.resources; }
            return new Promise(function (resolve) {
                bundle.load(apPath, cc.AudioClip, function (err, data) {
                    if (!err && data) {
                        resolve(data);
                    }
                    else {
                        cc.warn(TAG, "not found AudioClip : " + apPath + " in " + bundle.name);
                        resolve(null);
                    }
                });
            });
        }
        asset_1.loadAudio = loadAudio;
        /**
         * @zh
         * 加载预制件
         *
         * @param ppPath 预制件包路径
         * @param bundle - 包对象
         */
        function loadPrefab(ppPath, bundle) {
            if (bundle === void 0) { bundle = cc.resources; }
            return new Promise(function (resolve) {
                bundle.load(ppPath, cc.Prefab, function (err, data) {
                    if (!err && data) {
                        resolve(data);
                    }
                    else {
                        cc.warn(TAG, "not found Prefab : " + ppPath + " in " + bundle.name);
                        resolve(null);
                    }
                });
            });
        }
        asset_1.loadPrefab = loadPrefab;
        /**
         * @zh
         * 加载精灵帧
         *
         * @param sfgPath 精灵帧包路径
         * @param bundle - 包对象
         */
        function loadSpriteFrame(sfpPath, bundle) {
            if (bundle === void 0) { bundle = cc.resources; }
            return new Promise(function (resolve) {
                bundle.load(sfpPath, cc.SpriteFrame, function (err, data) {
                    if (!err && data) {
                        resolve(data);
                    }
                    else {
                        cc.warn(TAG, "not found SpriteFrame : " + sfpPath + " in " + bundle.name);
                        resolve(null);
                    }
                });
            });
        }
        asset_1.loadSpriteFrame = loadSpriteFrame;
        /**
         * @zh
         * 加载ttf字体
         *
         * @param ttfgPath - 字体文件全局路径
         * @param bundle - 包对象
         */
        function loadTTFFont(ttfpPath, bundle) {
            if (bundle === void 0) { bundle = cc.resources; }
            return new Promise(function (resolve) {
                bundle.load(ttfpPath, cc.TTFFont, function (err, data) {
                    if (!err && data) {
                        resolve(data);
                    }
                    else {
                        cc.warn(TAG, "not found TTFFont : " + ttfpPath + " in " + bundle.name);
                        resolve(null);
                    }
                });
            });
        }
        asset_1.loadTTFFont = loadTTFFont;
        /**
         * @zh
         * 获得资源的url
         *
         * @param agPath 资源包路径
         * @param bundle - 包对象
         */
        function getAssetUrl(apPath, bundle) {
            if (bundle === void 0) { bundle = cc.resources; }
            return new Promise(function (resolve) {
                bundle.load(apPath, cc.Asset, function (err, data) {
                    if (!err && data) {
                        resolve(data.nativeUrl);
                    }
                    else {
                        cc.warn(TAG, "not found ResUrl : " + apPath + " in " + bundle.name);
                        resolve(null);
                    }
                });
            });
        }
        asset_1.getAssetUrl = getAssetUrl;
    })(asset = lcc.asset || (lcc.asset = {}));
})(lcc || (lcc = {}));
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
/// <reference path="../base/lcc.ts" />
/// <reference path="../base/doing.ts" />
/// <reference path="../base/variable.ts" />
/// <reference path="../base/reference.ts" />
/// <reference path="../index/index-manager.ts" />
/// <reference path="../utils/js.ts" />
/// <reference path="../utils/asset.ts" />
var lcc;
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
/// <reference path="../base/lcc.ts" />
/// <reference path="../base/doing.ts" />
/// <reference path="../base/variable.ts" />
/// <reference path="../base/reference.ts" />
/// <reference path="../index/index-manager.ts" />
/// <reference path="../utils/js.ts" />
/// <reference path="../utils/asset.ts" />
(function (lcc) {
    var TAG = "lcc/pack/pack-manager.ts";
    /**
     * @zh
     * 包管理器
     */
    var PackManager = /** @class */ (function (_super) {
        __extends(PackManager, _super);
        /**
         * @zh
         * 构造函数
         */
        function PackManager() {
            var _this = _super.call(this) || this;
            /**
             * @zh
             * 包映射表
             */
            _this._packs = lcc.js.createMap();
            lcc.state.on('initialize', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    lcc.doing.stateInitialize.in(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, lcc.asset.loadBundle('resources')];
                                case 1:
                                    _a.sent();
                                    this._packs = lcc.js.createMap();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            lcc.state.on('release', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    lcc.doing.stateRelease.in(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.clear();
                                    return [4 /*yield*/, this.releaseAllPacks()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            return _this;
        }
        /**
         * @zh
         * 获得指定包
         *
         * @param name - 包名称
         */
        PackManager.prototype.getPack = function (name) {
            return this._packs[name];
        };
        /**
         * @zh
         * 加载包
         *
         * @param nameOrUrl - 包名称或者URL路径
         */
        PackManager.prototype.loadPack = function (nameOrUrl) {
            return __awaiter(this, void 0, void 0, function () {
                var pname, pack, bundle, PackLoaderType, packLoader;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            pname = lcc.fs.basename(nameOrUrl);
                            pack = this._packs[pname];
                            if (!!pack) return [3 /*break*/, 5];
                            lcc.variable.set("__LoadPack__", pname);
                            return [4 /*yield*/, lcc.asset.loadBundle(nameOrUrl)];
                        case 1:
                            bundle = _a.sent();
                            PackLoaderType = lcc.reference.get({ pack: pname, path: 'PackLoader' }) || lcc.PackLoader;
                            packLoader = new PackLoaderType(pname, bundle);
                            this._packs[pname] = packLoader;
                            return [4 /*yield*/, lcc.indexMgr.loadPackIndexes(pname)];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, packLoader.onLoad()];
                        case 3:
                            _a.sent();
                            try {
                                this.emit("loaded", pname);
                            }
                            catch (e) {
                                cc.error(TAG, "loadPack Exception " + e);
                            }
                            return [4 /*yield*/, lcc.doing.indexLoad.untilZero()];
                        case 4:
                            _a.sent(); // 等待索引加载完成
                            _a.label = 5;
                        case 5: return [2 /*return*/, pack];
                    }
                });
            });
        };
        /**
         * @zh
         * 释放包
         *
         * @param name - 包名称
         */
        PackManager.prototype.releasePack = function (name) {
            return __awaiter(this, void 0, void 0, function () {
                var pack, bundle;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            pack = this._packs[name];
                            if (!pack) return [3 /*break*/, 3];
                            bundle = pack.getBundle();
                            return [4 /*yield*/, pack.onDestroy()];
                        case 1:
                            _a.sent();
                            lcc.indexMgr.removePackIndexes(name);
                            delete this._packs[name];
                            lcc.reference.removeByPack(name);
                            cc.assetManager.removeBundle(bundle);
                            try {
                                this.emit("released", name);
                            }
                            catch (e) {
                                cc.error(TAG, "releasePack Exception " + e);
                            }
                            return [4 /*yield*/, lcc.doing.indexLoad.untilZero()];
                        case 2:
                            _a.sent(); // 等待索引加载完成
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 释放所有包
         */
        PackManager.prototype.releaseAllPacks = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _i, _a, name_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _i = 0, _a = Object.keys(this._packs);
                            _b.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                            name_1 = _a[_i];
                            return [4 /*yield*/, this.releasePack(name_1)];
                        case 2:
                            _b.sent();
                            _b.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 解析资源路径
         *
         * @param aPath - 资源路径
         */
        PackManager.prototype.parseAssetPath = function (aPath) {
            var parts = aPath.split('://');
            if (parts.length == 2 && parts[0] == 'asset') {
                var pindex = parts[1].indexOf('/');
                return {
                    rpath: parts[1].substring(pindex + 1),
                    bundle: this.getPack(parts[1].substring(0, pindex)).getBundle(),
                };
            }
        };
        /**
         * @zh
         * 加载json文件
         *
         * @param jgPath - JSON文件全局路径
         */
        PackManager.prototype.loadJson = function (jgPath) {
            return __awaiter(this, void 0, void 0, function () {
                var finfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            finfo = this.parseAssetPath(jgPath);
                            if (!(finfo && finfo.bundle)) return [3 /*break*/, 2];
                            return [4 /*yield*/, lcc.asset.loadJson(finfo.rpath, finfo.bundle)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            cc.warn(TAG, "not found Json : " + jgPath);
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 加载音频
         *
         * @param agPath - 音频文件全局路径
         */
        PackManager.prototype.loadAudio = function (agPath) {
            return __awaiter(this, void 0, void 0, function () {
                var finfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            finfo = this.parseAssetPath(agPath);
                            if (!(finfo && finfo.bundle)) return [3 /*break*/, 2];
                            return [4 /*yield*/, lcc.asset.loadAudio(finfo.rpath, finfo.bundle)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            cc.warn(TAG, "not found AudioClip : " + agPath);
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 加载预制件
         *
         * @param pfile 预制件全局路径
         */
        PackManager.prototype.loadPrefab = function (pgPath) {
            return __awaiter(this, void 0, void 0, function () {
                var finfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            finfo = this.parseAssetPath(pgPath);
                            if (!(finfo && finfo.bundle)) return [3 /*break*/, 2];
                            return [4 /*yield*/, lcc.asset.loadPrefab(finfo.rpath, finfo.bundle)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            cc.warn(TAG, "not found Prefab : " + pgPath);
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 加载精灵帧
         *
         * @param sfgPath 精灵帧全局路径
         */
        PackManager.prototype.loadSpriteFrame = function (sfgPath) {
            return __awaiter(this, void 0, void 0, function () {
                var finfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            finfo = this.parseAssetPath(sfgPath);
                            if (!(finfo && finfo.bundle)) return [3 /*break*/, 2];
                            return [4 /*yield*/, lcc.asset.loadSpriteFrame(finfo.rpath, finfo.bundle)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            cc.warn(TAG, "not found SpriteFrame : " + sfgPath);
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 加载ttf字体
         *
         * @param ttfgPath - 字体文件全局路径
         */
        PackManager.prototype.loadTTFFont = function (ttfgPath) {
            return __awaiter(this, void 0, void 0, function () {
                var finfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            finfo = this.parseAssetPath(ttfgPath);
                            if (!(finfo && finfo.bundle)) return [3 /*break*/, 2];
                            return [4 /*yield*/, lcc.asset.loadTTFFont(finfo.rpath, finfo.bundle)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            cc.warn(TAG, "not found TTFFont : " + ttfgPath);
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 获得资源的url
         *
         * @param agPath 资源文件全局路径
         */
        PackManager.prototype.getAssetUrl = function (agPath) {
            return __awaiter(this, void 0, void 0, function () {
                var finfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            finfo = this.parseAssetPath(agPath);
                            if (!(finfo && finfo.bundle)) return [3 /*break*/, 2];
                            return [4 /*yield*/, lcc.asset.getAssetUrl(finfo.rpath, finfo.bundle)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            cc.warn(TAG, "not found ResUrl : " + agPath);
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return PackManager;
    }(cc.EventTarget));
    /**
     * @zh
     * 包管理器对象
     */
    lcc.packMgr = new PackManager();
})(lcc || (lcc = {}));
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
/// <reference path="../base/lcc.ts" />
/// <reference path="../base/variable.ts" />
/// <reference path="../network/http/http.ts" />
/// <reference path="./pack-manager.ts" />
var lcc;
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
/// <reference path="../base/lcc.ts" />
/// <reference path="../base/variable.ts" />
/// <reference path="../network/http/http.ts" />
/// <reference path="./pack-manager.ts" />
(function (lcc) {
    var TAG = "lcc/pack/read-config.ts";
    /**
     * @zh
     * 下载远程配置`remoteconfig`文件的超时时间
     */
    lcc.REMOTE_CONFIG_TIMEOUT = 5;
    /**
     * @zh
     * 解析配置对象</br>
     * 1、解析配置中的引用</br>
     *      "@key1":"http://localhost/config.json"     =>   "key1" : [具体内容]</br>
     *      "@key2":"resources://config/test1"         =>   "key2" : [具体内容]</br>
     *
     * @param config 配置对象
     */
    function parseConfigObject(config) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, k, v, vtp, nc;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, _a = Object.keys(config);
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        k = _a[_i];
                        v = config[k];
                        vtp = typeof (v);
                        if (!(vtp == 'object')) return [3 /*break*/, 3];
                        return [4 /*yield*/, parseConfigObject(v)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        if (!(vtp == 'string' && k.indexOf('@') == 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, readConfigFile(v)];
                    case 4:
                        nc = _b.sent();
                        if (nc) {
                            config[k.substr(1)] = nc;
                            delete config[k];
                        }
                        else {
                            cc.error(TAG, "parseConfig file '" + v + "' not found!!!");
                        }
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    }
    /**
     * @zh
     * 读取配置文件
     *
     * @param fileUrl 配置文件URL
     */
    function readConfigFile(fileUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var content, _a, _b, config;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        content = null;
                        if (!(fileUrl.indexOf('http://') == 0 || fileUrl.indexOf('https://') == 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, lcc.http.get(fileUrl, lcc.REMOTE_CONFIG_TIMEOUT)];
                    case 1:
                        content = _c.sent();
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(fileUrl.indexOf('asset://') == 0)) return [3 /*break*/, 4];
                        _b = (_a = JSON).stringify;
                        return [4 /*yield*/, lcc.packMgr.loadJson(fileUrl)];
                    case 3:
                        content = _b.apply(_a, [_c.sent()]);
                        return [3 /*break*/, 5];
                    case 4:
                        cc.error(TAG, "readConfigFile Unknown Url " + fileUrl);
                        _c.label = 5;
                    case 5:
                        if (!content) return [3 /*break*/, 7];
                        content = lcc.variable.parseString(content, { localpath: lcc.fs.dirname(fileUrl) });
                        config = JSON.parse(content);
                        return [4 /*yield*/, parseConfigObject(config)];
                    case 6:
                        _c.sent();
                        return [2 /*return*/, config];
                    case 7: return [2 /*return*/];
                }
            });
        });
    }
    lcc.readConfigFile = readConfigFile;
})(lcc || (lcc = {}));
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
/// <reference path="../base/lcc.ts" />
/// <reference path="../base/doing.ts" />
/// <reference path="../pack/read-config.ts" />
/// <reference path="../base/variable.ts" />
/// <reference path="../utils/js.ts" />
var lcc;
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
/// <reference path="../base/lcc.ts" />
/// <reference path="../base/doing.ts" />
/// <reference path="../pack/read-config.ts" />
/// <reference path="../base/variable.ts" />
/// <reference path="../utils/js.ts" />
(function (lcc) {
    var TAG = "lcc/index/index-manager.ts";
    /**
     * @zh
     * 框架错误
     */
    var ERROR;
    (function (ERROR) {
        /**
         * @zh
         * 索引路径冲突
         */
        ERROR.INDEX_PATH_CONFLICT = true;
    })(ERROR = lcc.ERROR || (lcc.ERROR = {}));
    ;
    /**
     * @zh
     * 索引管理器<br/>
     * 管理游戏中的公用资源索引
     */
    var IndexManager = /** @class */ (function (_super) {
        __extends(IndexManager, _super);
        /**
         * @zh
         * 构造索引管理器
         */
        function IndexManager() {
            var _this = _super.call(this) || this;
            /**
             * @zh
             * 包优先级
             */
            _this._packPriority = 0;
            /**
             * @zh
             * 包索引表
             */
            _this._packIndexs = lcc.js.createMap();
            /**
             * @zh
             * 全局索引表
             */
            _this._indexes = lcc.js.createMap();
            lcc.state.on('initialize', function () {
                lcc.doing.stateInitialize.in(function () {
                    _this._packPriority = 0;
                    _this._packIndexs = lcc.js.createMap();
                    _this._indexes = lcc.js.createMap();
                });
            });
            lcc.state.on('release', function () {
                lcc.doing.stateRelease.in(function () {
                    _this.clear();
                });
            });
            return _this;
        }
        //--------------------------------------------------	索引操作
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
         * @param listen - 是否监听
         * @param ipath - 文件路径
         */
        IndexManager.prototype.mergeTable = function (dmap, smap, listen, ipath) {
            if (listen === void 0) { listen = false; }
            if (ipath === void 0) { ipath = ""; }
            for (var key in smap) {
                var svalue = smap[key];
                var dvalue = dmap[key];
                var lipath = ipath ? ipath + "/" + key : key;
                if (!dvalue) {
                    dmap[key] = svalue;
                }
                else {
                    var stype = typeof svalue;
                    var dtype = typeof dvalue;
                    if (dtype == 'object' && stype == dtype) {
                        var sarray = svalue instanceof Array;
                        var darray = dvalue instanceof Array;
                        if (sarray != darray) {
                            var msg = "invalid merge type array '" + sarray + "-" + darray + "' in key '" + key + "'";
                            if (ERROR.INDEX_PATH_CONFLICT) {
                                cc.error(TAG, msg);
                            }
                            else {
                                cc.warn(TAG, msg);
                            }
                            dmap[key] = svalue;
                        }
                        else {
                            if (darray) {
                                dvalue.push.apply(dvalue, svalue);
                            }
                            else {
                                this.mergeTable(dvalue, svalue, listen, lipath);
                            }
                        }
                    }
                    else {
                        var msg = "invalid merge type '" + stype + "-" + dtype + "' in key '" + key + "'";
                        if (ERROR.INDEX_PATH_CONFLICT) {
                            cc.error(TAG, msg);
                        }
                        else {
                            cc.warn(TAG, msg);
                        }
                        dmap[key] = svalue;
                    }
                }
                if (listen) {
                    try {
                        this.emit("indexes_loaded_" + lipath, svalue);
                    }
                    catch (e) {
                        cc.error(TAG, "mergeTable Exception " + e);
                    }
                }
            }
        };
        /**
         * @zh
         * 重构索引
         */
        IndexManager.prototype.rebuildIndexes = function () {
            this._indexes = lcc.js.createMap();
            var packIndexs = Object.values(this._packIndexs).sort(function (a, b) { return a.priority - b.priority; });
            for (var _i = 0, packIndexs_1 = packIndexs; _i < packIndexs_1.length; _i++) {
                var pi = packIndexs_1[_i];
                this.mergeTable(this._indexes, pi.indexes);
            }
        };
        /**
         * @zh
         * 获得指定索引
         *
         * @param path - 索引路径
         */
        IndexManager.prototype.getIndex = function (path) {
            if (path) {
                return lcc.js.getMapValue(this._indexes, path, "/");
            }
        };
        /**
         * @zh
         * 加载包索引表
         *
         * @param pname - 包名称
         */
        IndexManager.prototype.loadPackIndexes = function (pname) {
            return __awaiter(this, void 0, void 0, function () {
                var indexPath, indexConfig, _a, _b, _i, k, indexFile, indexes, packIndex;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            lcc.doing.indexLoad.addCount();
                            indexPath = "asset://" + pname + "/index-files";
                            return [4 /*yield*/, lcc.readConfigFile(indexPath)];
                        case 1:
                            indexConfig = _c.sent();
                            if (!indexConfig) return [3 /*break*/, 5];
                            indexConfig = lcc.translateJSON(indexConfig, lcc.fs.dirname(indexPath));
                            _a = [];
                            for (_b in indexConfig)
                                _a.push(_b);
                            _i = 0;
                            _c.label = 2;
                        case 2:
                            if (!(_i < _a.length)) return [3 /*break*/, 5];
                            k = _a[_i];
                            indexFile = indexConfig[k];
                            return [4 /*yield*/, lcc.readConfigFile(indexFile)];
                        case 3:
                            indexes = _c.sent();
                            if (indexes) {
                                indexes = lcc.translateJSON(indexes, lcc.fs.dirname(indexFile));
                                packIndex = this._packIndexs[pname];
                                if (!packIndex) {
                                    packIndex = {
                                        priority: this._packPriority++,
                                        indexes: indexes,
                                    };
                                    this._packIndexs[pname] = packIndex;
                                }
                                else {
                                    this.mergeTable(packIndex.indexes, indexes);
                                }
                                this.mergeTable(this._indexes, indexes, true);
                            }
                            _c.label = 4;
                        case 4:
                            _i++;
                            return [3 /*break*/, 2];
                        case 5:
                            lcc.doing.indexLoad.decCount();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 移除包索引表
         *
         * @param pname - 包名称
         */
        IndexManager.prototype.removePackIndexes = function (pname) {
            lcc.doing.indexLoad.addCount();
            var packIndex = this._packIndexs[pname];
            if (packIndex) {
                delete this._packIndexs[pname];
                this.rebuildIndexes();
                this.notifyIndexesRemoved(packIndex.indexes);
                try {
                    this.emit("indexes_removed");
                }
                catch (e) {
                    cc.error(TAG, "removePackIndexes Exception " + e);
                }
            }
            lcc.doing.indexLoad.decCount();
        };
        /**
         * @zh
         * 通知索引被移除
         *
         * @param indexes - 移除的包索引表
         * @param ipath - 当前索引路径
         */
        IndexManager.prototype.notifyIndexesRemoved = function (indexes, ipath) {
            if (ipath === void 0) { ipath = ""; }
            if (indexes) {
                for (var key in indexes) {
                    var value = indexes[key];
                    var lipath = ipath ? ipath + "/" + key : key;
                    if (typeof value == 'object') {
                        this.notifyIndexesRemoved(value, lipath);
                    }
                    try {
                        this.emit("indexes_removed_" + lipath, value);
                    }
                    catch (e) {
                        cc.error(TAG, "notifyIndexesRemoved Exception " + e);
                    }
                }
            }
        };
        return IndexManager;
    }(cc.EventTarget));
    /**
     * @zh
     * 索引管理器对象
     */
    lcc.indexMgr = new IndexManager();
    ;
})(lcc || (lcc = {}));
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
/// <reference path="../base/state.ts" />
/// <reference path="../utils/js.ts" />
/// <reference path="../index/index-manager.ts" />
var lcc;
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
/// <reference path="../base/state.ts" />
/// <reference path="../utils/js.ts" />
/// <reference path="../index/index-manager.ts" />
(function (lcc) {
    var TAG = "lcc.AudioManager";
    /**
     * 索引路径
     */
    var INDEXPATH;
    (function (INDEXPATH) {
        /**
         * 音频
         */
        INDEXPATH.AUDIO = "audio";
    })(INDEXPATH = lcc.INDEXPATH || (lcc.INDEXPATH = {}));
    ;
    /**
     * 默认全局BGM音量
     */
    lcc.DEFAULT_BGM_VOLUME = 0.5;
    /**
     * 默认全局SE音量
     */
    lcc.DEFAULT_SE_VOLUME = 0.5;
    /**
     * @zh
     * 音频管理器
     */
    var AudioManager = /** @class */ (function () {
        /**
         * 构造数据库管理器
         */
        function AudioManager() {
            var _this = this;
            /**
             * 音频配置
             */
            this._audioConfigs = lcc.js.createMap();
            /**
             * 全局BGM音量
             */
            this._BGMVolume = lcc.DEFAULT_BGM_VOLUME;
            /**
             * 全局SE音量
             */
            this._SEVolume = lcc.DEFAULT_SE_VOLUME;
            /**
             * 当前BGM
             */
            this._nowBGM = null;
            /**
             * 当前BGM的ID
             */
            this._nowBGMID = null;
            lcc.state.on('initialize', function () {
                lcc.doing.stateInitialize.in(function () {
                    _this._audioConfigs = lcc.js.createMap();
                    _this._BGMVolume = lcc.DEFAULT_BGM_VOLUME;
                    _this._SEVolume = lcc.DEFAULT_SE_VOLUME;
                    _this._nowBGM = null;
                    _this._nowBGMID = null;
                    lcc.indexMgr.on("indexes_removed", _this.onIndexesRemoved, _this);
                });
            });
            lcc.state.on('release', function () {
                lcc.doing.stateRelease.in(function () {
                    lcc.indexMgr.targetOff(_this);
                });
            });
        }
        AudioManager.prototype.onIndexesRemoved = function () {
            this.releaseInvalidAudios();
        };
        /**
         * 释放无效音频
         */
        AudioManager.prototype.releaseInvalidAudios = function () {
            var afiles = lcc.indexMgr.getIndex(INDEXPATH.AUDIO) || {};
            for (var _i = 0, _a = Object.keys(this._audioConfigs); _i < _a.length; _i++) {
                var aname = _a[_i];
                if (!afiles[aname]) {
                    this.releaseAudio(aname);
                }
            }
        };
        /**
         * 获取所有音频
         */
        AudioManager.prototype.getAllAudios = function () {
            return Object.keys(lcc.indexMgr.getIndex(INDEXPATH.AUDIO));
        };
        /**
         * 释放指定音频
         * @param aname
         * @param preload 预加载的也释放
         */
        AudioManager.prototype.releaseAudio = function (aname, preload) {
            if (preload === void 0) { preload = false; }
            var audioconf = this._audioConfigs[aname];
            if (audioconf && (!audioconf.preload || preload)) {
                delete this._audioConfigs[aname];
                audioconf.clip.decRef();
                cc.audioEngine.uncache(audioconf.clip);
                lcc.DEBUG.AUDIO && cc.log(TAG, "releaseAudio " + aname);
            }
        };
        /**
         * 释放音频数组
         * @param preload
         */
        AudioManager.prototype.releaseAudios = function (anames, preload) {
            if (preload === void 0) { preload = false; }
            for (var _i = 0, anames_1 = anames; _i < anames_1.length; _i++) {
                var aname = anames_1[_i];
                this.releaseAudio(aname, preload);
            }
        };
        /**
         * 预加载指定音频
         * @param aname
         */
        AudioManager.prototype.preloadAudio = function (aname) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAudioConfig(aname)];
                        case 1:
                            (_a.sent()).preload = true;
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 预加载音频数组
         */
        AudioManager.prototype.preloadAudios = function (anames, progress) {
            if (progress === void 0) { progress = function (p) { }; }
            return __awaiter(this, void 0, void 0, function () {
                var i, len;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            i = 0, len = anames.length;
                            _a.label = 1;
                        case 1:
                            if (!(i < len)) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.preloadAudio(anames[i])];
                        case 2:
                            _a.sent();
                            progress((i + 1) / len);
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 设置 BGM 音量
         */
        AudioManager.prototype.setBgmVolume = function (volume) {
            return __awaiter(this, void 0, void 0, function () {
                var audio;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this._BGMVolume != volume)) return [3 /*break*/, 3];
                            this._BGMVolume = volume;
                            if (!(this._nowBGMID != null)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.getAudioConfig(this._nowBGM)];
                        case 1:
                            audio = _a.sent();
                            if (audio) {
                                cc.audioEngine.setVolume(this._nowBGMID, volume * (audio.config.volume != null ? audio.config.volume : 1));
                                lcc.DEBUG.AUDIO && cc.log(TAG, "setBgmVolume " + volume);
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            if (this._nowBGM != null) {
                                this.playBGM(this._nowBGM);
                            }
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 获得 BGM 音量
         */
        AudioManager.prototype.getBgmVolume = function () {
            return this._BGMVolume;
        };
        /**
         * 设置 SE 音量
         */
        AudioManager.prototype.setSeVolume = function (volume) {
            this._SEVolume = volume;
        };
        /**
         * 获得 SE 音量
         */
        AudioManager.prototype.getSeVolume = function () {
            return this._SEVolume;
        };
        /**
         * 获得当前的BGM
         */
        AudioManager.prototype.getNowBGM = function () {
            return this._nowBGM;
        };
        /**
         * 播放背景音乐
         * @param aname 音频名称
         * @param loop 是否循环
         */
        AudioManager.prototype.playBGM = function (aname, loop) {
            if (loop === void 0) { loop = true; }
            return __awaiter(this, void 0, void 0, function () {
                var aconf;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this._nowBGM != aname)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.getAudioConfig(aname)];
                        case 1:
                            aconf = _a.sent();
                            if (aconf) {
                                this.stopBGM();
                                this._nowBGM = aname;
                                if (this._BGMVolume > 0) {
                                    this._nowBGMID = cc.audioEngine.play(aconf.clip, loop !== null ? loop : aconf.config.loop, (aconf.config.volume != null ? aconf.config.volume : 1) * this._BGMVolume);
                                    lcc.DEBUG.AUDIO && cc.log(TAG, "playBGM " + aname + " loop:" + loop);
                                    return [2 /*return*/, this._nowBGMID];
                                }
                            }
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 停止当前BGN
         */
        AudioManager.prototype.stopBGM = function () {
            if (this._nowBGMID != null) {
                cc.audioEngine.stop(this._nowBGMID);
                lcc.DEBUG.AUDIO && cc.log(TAG, "stopBGM " + this._nowBGM);
                this._nowBGMID = null;
                this._nowBGM = null;
            }
        };
        /**
         * 播放音效
         * @param aname 音频名称
         */
        AudioManager.prototype.playSE = function (aname) {
            return __awaiter(this, void 0, void 0, function () {
                var aconf, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAudioConfig(aname)];
                        case 1:
                            aconf = _a.sent();
                            if (aconf && this._SEVolume > 0) {
                                result = cc.audioEngine.play(aconf.clip, aconf.config.loop, (aconf.config.volume != null ? aconf.config.volume : 1) * this._SEVolume);
                                lcc.DEBUG.AUDIO && cc.log(TAG, "playSE " + aname);
                                return [2 /*return*/, result];
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 直到音频播放完成
         * @param aid 音频播放ID
         */
        AudioManager.prototype.untilFinish = function (aid) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve) {
                            var state = cc.audioEngine.getState(aid);
                            if (state == cc.audioEngine.AudioState.ERROR) {
                                resolve(null);
                            }
                            else {
                                cc.audioEngine.setFinishCallback(aid, resolve);
                            }
                        })];
                });
            });
        };
        /**
         * 获得音频配置
         * @param aname 音频名称
         */
        AudioManager.prototype.getAudioConfig = function (aname) {
            return __awaiter(this, void 0, void 0, function () {
                var audioconf, config, clip;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            audioconf = this._audioConfigs[aname];
                            if (!!audioconf) return [3 /*break*/, 2];
                            config = lcc.indexMgr.getIndex(INDEXPATH.AUDIO + "/" + aname);
                            if (!config) return [3 /*break*/, 2];
                            return [4 /*yield*/, lcc.packMgr.loadAudio(config.file)];
                        case 1:
                            clip = _a.sent();
                            audioconf = {
                                clip: clip,
                                config: config,
                            };
                            clip.addRef();
                            this._audioConfigs[aname] = audioconf;
                            _a.label = 2;
                        case 2: return [2 /*return*/, audioconf];
                    }
                });
            });
        };
        return AudioManager;
    }());
    ;
    /**
     * 音频管理器
     */
    lcc.audioMgr = new AudioManager();
})(lcc || (lcc = {}));
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
/// <reference path="../base/lcc.ts" />
/// <reference path="../base/state.ts" />
/// <reference path="../pack/read-config.ts" />
/// <reference path="../utils/js.ts" />
var lcc;
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
/// <reference path="../base/lcc.ts" />
/// <reference path="../base/state.ts" />
/// <reference path="../pack/read-config.ts" />
/// <reference path="../utils/js.ts" />
(function (lcc) {
    var TAG = "lcc/config/config-manager.ts";
    /**
     * @zh
     * 配置对象映射表<br/>
     * 在加载完对应配置后，可以直接通过这个变量访问配置数据<br/>
     * ```
     *      lcc.configMgr.loadConfigFile('asset://resources/config/test');
     *      let testConfig = CONFIGS.test;      // 方式1
     *      let testConfig = CONFIGS['test'];   // 方式2
     * ```
     */
    lcc.CONFIGS = lcc.js.createMap();
    /**
     * @zh
     * 配置管理器<br/>
     * 主要用于管理程序的配置对象<br/>
     * 配置对象在加载时会进行以下处理:<br/>
     * 1、替换配置对象字符串中的`${...}`变量值。变量值可以通过`setVariable`设置，其中`localpath`为固有值，表示当前文件目录。<br/>
     * 2、替换配置对象健中以`@`开始的引用字段。其值表示引用路径，比如`http://localhost/test.json`表示网络文件, `asset://resources/test`表示resources包中的test.json文件。
     * 会以引用文件的内容(这里是JSON对象)替换当前字段的值，并且去掉健中的`@`符号。<br/>
     * 例如：<br/>
     * 存在网络文件http://localhost/test.json，内容为；<br/>
     * ```
     * {
     *      "type" : "remote file"
     * }
     * ```
     * 存在资源文件asset://resources/test (resources包中的test.json文件)，内容为；<br/>
     * ```
     * {
     *      "type": "asset file"
     * }
     * ```
     * 存在本地配置文件asset://resources/config (resources包中的config.json文件)，内容为；<br/>
     * ```
     * {
     *      "config" : "config file",
     *      "@remote" : "http://localhost/test.json",
     *      "@asset" : "${localpath}/test"
     * }
     * ```
     * 那么，使用`lcc.configMgr.loadConfigFile('asset://resources/config')`后，<br/>
     * 使用lcc.configMgr.getConfig('config')内容如下；<br/>
     * ```
     * {
     *      "config" : "config file",
     *      "remote" : {
     *          "type" : "remote file"
     *      },
     *      "asset" :  {
     *          "type" : "asset file"
     *      }
     * }
     * ```
     * 可以看出config加载时，通过网络替换引用`@remote`，解析变量`localpath`拼接test.json路径并替换引用`@asset`<br/>
     */
    var ConfigManager = /** @class */ (function () {
        /**
         * @zh
         * 构造函数
         */
        function ConfigManager() {
            var _this = this;
            lcc.state.on('initialize', function () {
                lcc.doing.stateInitialize.in(function () {
                    _this.removeAllConfigs();
                });
            });
        }
        /**
         * @zh
         * 获得所有配置<br/>
         * 也可以直接使用`CONFIGS`
         */
        ConfigManager.prototype.getConfigs = function () {
            return lcc.CONFIGS;
        };
        /**
         * @zh
         * 获得对应配置<br/>
         * 也可以直接使用`CONFIGS[key]`
         */
        ConfigManager.prototype.getConfig = function (key) {
            return lcc.CONFIGS[key];
        };
        /**
         * @zh
         * 移除指定配置<br/>
         *
         * @param cname - 配置名称
         */
        ConfigManager.prototype.removeConfig = function (cname) {
            delete lcc.CONFIGS[cname];
        };
        /**
         * @zh
         * 移除所有配置
         */
        ConfigManager.prototype.removeAllConfigs = function () {
            for (var _i = 0, _a = Object.keys(lcc.CONFIGS); _i < _a.length; _i++) {
                var cname = _a[_i];
                delete lcc.CONFIGS[cname];
            }
        };
        /**
         * @zh
         * 加载配置文件<br/>
         * 用法：<br/>
         * ```
         * 		// 加载resources目录下的配置
         * 		lcc.configMgr.loadConfig('asset://resources/config/test');
         * 		// 获得加载的配置
         * 		lcc.configMgr.getConfig('test');
         *
         * 		// 加载resources目录下的配置，并且重置名称
         * 		lcc.configMgr.loadConfig('asset://resources/config/test', 'newtest');
         * 		// 获得加载的配置
         * 		lcc.configMgr.getConfig('newtest');
         *
         * 		// 加载game子包下的配置，并且重置名称。如果有相同配置，则合并
         * 		lcc.configMgr.loadConfig('asset://game/config/test', { name : 'newtest', merge : true });
         * 		// 获得加载的配置
         * 		lcc.configMgr.getConfig('newtest');
         * ```
         *
         * @param jfile - JSON文件路径
         * @param nameOrOption - 配置名称或者选项
         */
        ConfigManager.prototype.loadConfigFile = function (jfile, nameOrOption) {
            if (nameOrOption === void 0) { nameOrOption = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var localconf, option, config;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, lcc.readConfigFile(jfile)];
                        case 1:
                            localconf = _a.sent();
                            if (localconf) {
                                option = void 0;
                                if (typeof nameOrOption == 'string') {
                                    option = {
                                        configName: nameOrOption,
                                    };
                                }
                                else {
                                    option = nameOrOption;
                                }
                                option.configName = option.configName || lcc.fs.basename(jfile);
                                lcc.DEBUG.CONFIG && cc.log(TAG, "local config " + option.configName + " : " + JSON.stringify(localconf));
                                if (!option.merge) {
                                    delete lcc.CONFIGS[option.configName];
                                }
                                config = lcc.CONFIGS[option.configName];
                                if (!config) {
                                    config = lcc.js.createMap();
                                    lcc.CONFIGS[option.configName] = config;
                                }
                                lcc.js.mergeMap(config, localconf, { tag: TAG, source: jfile });
                            }
                            else {
                                cc.error(TAG, "loadConfigFile '" + jfile + "' not found!!!");
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        return ConfigManager;
    }());
    ;
    /**
     * @zh
     * 配置管理器对象
     */
    lcc.configMgr = new ConfigManager();
})(lcc || (lcc = {}));
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
/// <reference path="../base/lcc.ts" />
/// <reference path="../base/state.ts" />
/// <reference path="../base/doing.ts" />
/// <reference path="../base/variable.ts" />
/// <reference path="../utils/js.ts" />
var lcc;
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
/// <reference path="../base/lcc.ts" />
/// <reference path="../base/state.ts" />
/// <reference path="../base/doing.ts" />
/// <reference path="../base/variable.ts" />
/// <reference path="../utils/js.ts" />
(function (lcc) {
    var TAG = "lcc/language/lang-manager.ts";
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    /**
     * @zh
     * 框架错误
     */
    var ERROR;
    (function (ERROR) {
        /**
         * @zh
         * 语言键键冲突
         */
        ERROR.LANG_KEY_CONFLICT = true;
    })(ERROR = lcc.ERROR || (lcc.ERROR = {}));
    ;
    /**
     * @zh
     * 索引路径
     */
    var INDEXPATH;
    (function (INDEXPATH) {
        /**
         * @zh
         * 字体
         */
        INDEXPATH.FONT = "font";
        /**
         * @zh
         * 语言
         */
        INDEXPATH.LANG = "lang";
    })(INDEXPATH = lcc.INDEXPATH || (lcc.INDEXPATH = {}));
    ;
    /**
     * @zh
     * 默认语言
     */
    lcc.DEFAULT_LANGUAGE = 'zh';
    /**
     * @zh
     * 多语言文本
     */
    var LangText = /** @class */ (function () {
        function LangText() {
            /**
             * @zh
             * 使用富文本
             */
            this.useRichText = false;
            /**
             * @zh
             * 关联标签
             */
            this.label = null;
            /**
             * @zh
             * 关联富文本
             */
            this.richText = null;
            /**
             * @zh
             * 关联键
             */
            this.key = "";
            /**
             * @zh
             * 关联文本参数
             */
            this.args = "";
        }
        __decorate([
            property({
                tooltip: "使用富文本"
            })
        ], LangText.prototype, "useRichText", void 0);
        __decorate([
            property({
                type: cc.Label,
                visible: function () {
                    return this.useRichText == false;
                }
            })
        ], LangText.prototype, "label", void 0);
        __decorate([
            property({
                type: cc.RichText,
                visible: function () {
                    return this.useRichText == true;
                }
            })
        ], LangText.prototype, "richText", void 0);
        __decorate([
            property({
                tooltip: "关联键"
            })
        ], LangText.prototype, "key", void 0);
        __decorate([
            property({
                tooltip: "关联文本参数"
            })
        ], LangText.prototype, "args", void 0);
        LangText = __decorate([
            ccclass("lcc.LangText")
        ], LangText);
        return LangText;
    }());
    lcc.LangText = LangText;
    /**
     * @zh
     * 多语言图片
     */
    var LangImage = /** @class */ (function () {
        function LangImage() {
            /**
             * @zh
             * 关联精灵
             */
            this.image = null;
            /**
             * @zh
             * 关联键
             */
            this.key = "";
        }
        __decorate([
            property(cc.Sprite)
        ], LangImage.prototype, "image", void 0);
        __decorate([
            property({
                tooltip: "关联键"
            })
        ], LangImage.prototype, "key", void 0);
        LangImage = __decorate([
            ccclass("lcc.LangImage")
        ], LangImage);
        return LangImage;
    }());
    lcc.LangImage = LangImage;
    /**
     * @zh
     * 语言管理器<br/>
     * 管理多语言与其字体
     */
    var LangManager = /** @class */ (function (_super) {
        __extends(LangManager, _super);
        /**
         * @zh
         * 构造管理器
         */
        function LangManager() {
            var _this = _super.call(this) || this;
            /**
             * @zh
             * 字体缓冲
             */
            _this._fontBuff = lcc.js.createMap();
            /**
             * @zh
             * 图片缓冲
             */
            _this._imageBuff = lcc.js.createMap();
            /**
             * @zh
             * 语言配置表
             */
            _this._langConfig = { texts: {}, images: {} };
            /**
             * @zh
             * 当前语言
             */
            _this._nowLang = null;
            /**
             * @zh
             * 多语言组映射表
             */
            _this._langGroupMap = lcc.js.createMap();
            lcc.state.on('initialize', function () {
                lcc.doing.stateInitialize.in(function () {
                    _this._fontBuff = lcc.js.createMap();
                    _this._imageBuff = lcc.js.createMap();
                    _this._langConfig = { texts: {}, images: {} };
                    _this._nowLang = null;
                    _this._langGroupMap = lcc.js.createMap();
                    lcc.indexMgr.on("indexes_removed", _this.reloadNowLanguage, _this);
                    lcc.indexMgr.on("indexes_loaded_" + INDEXPATH.LANG, _this.onLangIndexesLoaded, _this);
                });
            });
            lcc.state.on('release', function () {
                lcc.doing.stateRelease.in(function () {
                    _this.clear();
                    lcc.indexMgr.targetOff(_this);
                });
            });
            return _this;
        }
        /**
         * @internal
         */
        LangManager.prototype.reloadNowLanguage = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            lcc.doing.indexLoad.addCount();
                            this._langConfig = { texts: {}, images: {} };
                            return [4 /*yield*/, this.loadPreposeLangs()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.onLangIndexesLoaded(lcc.indexMgr.getIndex(INDEXPATH.LANG))];
                        case 2:
                            _a.sent();
                            this.removeInvalidBuff();
                            lcc.doing.indexLoad.decCount();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 当索引加载
         *
         * @param ivalue 索引路径对象
         */
        LangManager.prototype.onLangIndexesLoaded = function (ivalue) {
            return __awaiter(this, void 0, void 0, function () {
                var tfiles, _i, tfiles_1, tfile, table;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            lcc.doing.indexLoad.addCount();
                            this._nowLang = this._nowLang || lcc.DEFAULT_LANGUAGE;
                            if (!ivalue) return [3 /*break*/, 4];
                            tfiles = ivalue[this._nowLang];
                            if (!tfiles) return [3 /*break*/, 4];
                            _i = 0, tfiles_1 = tfiles;
                            _a.label = 1;
                        case 1:
                            if (!(_i < tfiles_1.length)) return [3 /*break*/, 4];
                            tfile = tfiles_1[_i];
                            return [4 /*yield*/, lcc.readConfigFile(tfile)];
                        case 2:
                            table = _a.sent();
                            if (!table) {
                                cc.error(TAG, "lang file " + tfile + " read fail !!!");
                            }
                            else {
                                table = lcc.translateJSON(table, lcc.fs.dirname(tfile));
                                this.loadTable(table, tfile);
                            }
                            _a.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4:
                            lcc.doing.indexLoad.decCount();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 移除无效的缓冲
         */
        LangManager.prototype.removeInvalidBuff = function () {
            var _this = this;
            // 字体
            var fontconfs = lcc.indexMgr.getIndex(INDEXPATH.FONT);
            for (var _i = 0, _a = Object.keys(this._fontBuff); _i < _a.length; _i++) {
                var fname = _a[_i];
                var font = this._fontBuff[fname];
                if (!fontconfs[fname] && font) {
                    font.decRef();
                    delete this._fontBuff[fname];
                }
            }
            var _loop_1 = function (ipath) {
                var image = this_1._imageBuff[ipath];
                var find = false;
                (function () {
                    for (var k in _this._langConfig.images) {
                        var path = _this._langConfig.images[k];
                        if (ipath == path) {
                            find = true;
                            return;
                        }
                    }
                })();
                if (!find) {
                    image.decRef();
                    delete this_1._imageBuff[ipath];
                }
            };
            var this_1 = this;
            // 图片
            for (var _b = 0, _c = Object.keys(this._imageBuff); _b < _c.length; _b++) {
                var ipath = _c[_b];
                _loop_1(ipath);
            }
        };
        /**
         * @zh
         * 合并表<br/>
         * 合并规则与[[js.mergeMap]]一致
         *
         * @param table - 新表对象
         * @param tfile - 文件路径
         */
        LangManager.prototype.loadTable = function (table, tfile) {
            if (tfile === void 0) { tfile = "[unknown]"; }
            lcc.js.mergeMap(this._langConfig, table, { tag: TAG, source: tfile });
            lcc.DEBUG.LANG && cc.log(TAG, "load lang table " + JSON.stringify(table) + " from " + tfile);
        };
        /**
         * @zh
         * 加载前置配置
         */
        LangManager.prototype.loadPreposeLangs = function () {
            return __awaiter(this, void 0, void 0, function () {
                var prelangs, langConfig;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this._nowLang = this._nowLang || lcc.DEFAULT_LANGUAGE;
                            return [4 /*yield*/, lcc.asset.loadJson("lcc-assets/prelangs", cc.resources)];
                        case 1:
                            prelangs = _a.sent();
                            langConfig = prelangs && prelangs[this._nowLang];
                            if (langConfig) {
                                this.loadTable(lcc.translateJSON(langConfig), "asset://resources/lcc-assets/prelangs");
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 设置并更新语言
         *
         * @param lang - 语言名称
         * @param deflang - 可选，默认语言
         */
        LangManager.prototype.setLanguage = function (lang) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this._nowLang != lang)) return [3 /*break*/, 4];
                            this._nowLang = lang;
                            return [4 /*yield*/, this.reloadNowLanguage()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.updateAllLangGroup()];
                        case 2:
                            _a.sent();
                            try {
                                this.emit("lang_changed", lang);
                            }
                            catch (e) {
                                cc.error(TAG, "setLanguage Exception " + e);
                            }
                            return [4 /*yield*/, lcc.doing.langUpdate.untilZero()];
                        case 3:
                            _a.sent(); // 直到更新完成
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 获得当前语言
         */
        LangManager.prototype.getLanguage = function () {
            return this._nowLang;
        };
        /**
         * @zh
         * 获得语言列表
         */
        LangManager.prototype.getLanguageList = function () {
            return Object.keys(lcc.indexMgr.getIndex(INDEXPATH.LANG));
        };
        /**
         * @zh
         * 更新所有语言组
         */
        LangManager.prototype.updateAllLangGroup = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _i, group;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _a = [];
                            for (_b in this._langGroupMap)
                                _a.push(_b);
                            _i = 0;
                            _c.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                            group = _a[_i];
                            return [4 /*yield*/, this.updateLangGroup(group)];
                        case 2:
                            _c.sent();
                            _c.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 更新指定语言组
         *
         * @param group - 组名称
         */
        LangManager.prototype.updateLangGroup = function (group) {
            return __awaiter(this, void 0, void 0, function () {
                var groupconf, _i, _a, tc, _b, _c, ic;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            if (!this._nowLang) return [3 /*break*/, 8];
                            groupconf = this._langGroupMap[group];
                            if (!groupconf) return [3 /*break*/, 8];
                            if (!groupconf.texts) return [3 /*break*/, 4];
                            _i = 0, _a = groupconf.texts;
                            _d.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                            tc = _a[_i];
                            return [4 /*yield*/, this.updateText(tc.useRichText ? tc.richText : tc.label, tc.key, tc.args.split(","))];
                        case 2:
                            _d.sent();
                            _d.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4:
                            if (!groupconf.images) return [3 /*break*/, 8];
                            _b = 0, _c = groupconf.images;
                            _d.label = 5;
                        case 5:
                            if (!(_b < _c.length)) return [3 /*break*/, 8];
                            ic = _c[_b];
                            return [4 /*yield*/, this.updateImage(ic.image, ic.key)];
                        case 6:
                            _d.sent();
                            _d.label = 7;
                        case 7:
                            _b++;
                            return [3 /*break*/, 5];
                        case 8: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 更新文本
         *
         * @param target - 目标对象
         * @param key - 关联文本key
         * @param args - 文本参数
         */
        LangManager.prototype.updateText = function (target, key) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                var textConf, font;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            lcc.doing.langUpdate.addCount();
                            textConf = this._langConfig.texts[key];
                            if (!textConf) return [3 /*break*/, 3];
                            target.string = lcc.variable.parseString(textConf.text, args);
                            if (textConf.fontSize) {
                                target.fontSize = textConf.fontSize;
                            }
                            if (!textConf.fontName) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.getFont(textConf.fontName)];
                        case 1:
                            font = _a.sent();
                            if (font) {
                                target.font = font;
                            }
                            _a.label = 2;
                        case 2: return [3 /*break*/, 4];
                        case 3:
                            cc.error(TAG, "updateText lang:" + this._nowLang + " key:" + key + " not found!");
                            _a.label = 4;
                        case 4:
                            lcc.doing.langUpdate.decCount();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 获得字体
         *
         * @param fname - 字体名称
         */
        LangManager.prototype.getFont = function (fname) {
            return __awaiter(this, void 0, void 0, function () {
                var font, path;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            font = this._fontBuff[fname];
                            if (!!font) return [3 /*break*/, 2];
                            path = lcc.indexMgr.getIndex(INDEXPATH.FONT + "/" + fname);
                            return [4 /*yield*/, lcc.packMgr.loadTTFFont(path)];
                        case 1:
                            font = _a.sent();
                            if (font) {
                                font.addRef();
                                this._fontBuff[fname] = font;
                            }
                            _a.label = 2;
                        case 2: return [2 /*return*/, font];
                    }
                });
            });
        };
        /**
         * @zh
         * 更新图片
         *
         * @param target - 目标对象
         * @param key - 关联图片key
         */
        LangManager.prototype.updateImage = function (target, key) {
            return __awaiter(this, void 0, void 0, function () {
                var imgPath, spframe;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            lcc.doing.langUpdate.addCount();
                            imgPath = this._langConfig.images[key];
                            if (!imgPath) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.getLangImage(imgPath)];
                        case 1:
                            spframe = _a.sent();
                            if (spframe) {
                                target.spriteFrame = spframe;
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            cc.error(TAG, "updateImage lang:" + this._nowLang + " key:" + key + " not found!");
                            _a.label = 3;
                        case 3:
                            lcc.doing.langUpdate.decCount();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 获得语言图片
         *
         * @param fpath - 语言图片路径
         */
        LangManager.prototype.getLangImage = function (fpath) {
            return __awaiter(this, void 0, void 0, function () {
                var spframe;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            spframe = this._imageBuff[fpath];
                            if (!!spframe) return [3 /*break*/, 2];
                            return [4 /*yield*/, lcc.packMgr.loadSpriteFrame(fpath)];
                        case 1:
                            spframe = _a.sent();
                            if (spframe) {
                                spframe.addRef();
                                this._imageBuff[fpath] = spframe;
                            }
                            _a.label = 2;
                        case 2: return [2 /*return*/, spframe];
                    }
                });
            });
        };
        /**
         * @zh
         * 添加语言组<br/>
         * 配套组件使用
         *
         * @param group - 组名称
         * @param texts - 文本组
         * @param images - 图片组
         */
        LangManager.prototype._addLangGroup = function (group, texts, images) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this._langGroupMap[group]) return [3 /*break*/, 1];
                            cc.error(TAG, "lang group conflict " + group + "!!!");
                            return [3 /*break*/, 3];
                        case 1:
                            this._langGroupMap[group] = {
                                texts: texts,
                                images: images,
                            };
                            return [4 /*yield*/, this.updateLangGroup(group)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 移除语言组<br/>
         * 配套组件使用
         *
         * @param group - 组名称
         */
        LangManager.prototype._removeLangGroup = function (group) {
            delete this._langGroupMap[group];
        };
        /**
         * @zh
         * 增加语言更新中计数
         */
        LangManager.prototype.addLangUpdating = function () {
            lcc.doing.langUpdate.addCount();
        };
        /**
         * @zh
         * 减少语言更新中计数
         */
        LangManager.prototype.decLangUpdating = function () {
            lcc.doing.langUpdate.decCount();
        };
        /**
         * @zh
         * 获得当前语言文本
         *
         * @param key - 关联key
         * @param args - 参数数组
         */
        LangManager.prototype.getText = function (key) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var textConf = this._langConfig.texts[key];
            if (textConf) {
                return lcc.variable.parseString.apply(lcc.variable, __spreadArray([textConf.text], args));
            }
        };
        /**
         * @zh
         * 获得当前语言图片
         *
         * @param key - 关联key
         */
        LangManager.prototype.getImage = function (key) {
            return __awaiter(this, void 0, void 0, function () {
                var imgPath;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            imgPath = this._langConfig.images[key];
                            if (!imgPath) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.getLangImage(imgPath)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 获得图片的路径
         *
         * @param key - 关联key
         */
        LangManager.prototype.getImageUrl = function (key) {
            return __awaiter(this, void 0, void 0, function () {
                var imgPath;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            imgPath = this._langConfig.images[key];
                            if (!imgPath) return [3 /*break*/, 2];
                            return [4 /*yield*/, lcc.packMgr.getAssetUrl(imgPath)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        return LangManager;
    }(cc.EventTarget));
    ;
    /**
     * @zh
     * 语言管理器对象
     */
    lcc.langMgr = new LangManager();
    lcc.variable.set('LANG', function (key) {
        return lcc.langMgr.getText(key);
    });
})(lcc || (lcc = {}));
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
/// <reference path = "./lang-manager.ts" /> 
var lcc;
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
/// <reference path = "./lang-manager.ts" /> 
(function (lcc) {
    var TAG = "lcc/language/multiple-languages.ts";
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
    /**
     * @zh
     * 多语言绑定组件
     */
    var MultipleLanguages = /** @class */ (function (_super) {
        __extends(MultipleLanguages, _super);
        function MultipleLanguages() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.langTexts = [];
            _this.langImages = [];
            return _this;
        }
        MultipleLanguages.prototype.onLoad = function () {
            // @ts-ignore
            lcc.langMgr._addLangGroup(this._id, this.langTexts, this.langImages);
        };
        MultipleLanguages.prototype.onDestroy = function () {
            // @ts-ignore
            lcc.langMgr._removeLangGroup(this._id);
        };
        __decorate([
            property({
                type: [lcc.LangText],
                tooltip: "多语言文本"
            })
        ], MultipleLanguages.prototype, "langTexts", void 0);
        __decorate([
            property({
                type: [lcc.LangImage],
                tooltip: "多语言图片"
            })
        ], MultipleLanguages.prototype, "langImages", void 0);
        MultipleLanguages = __decorate([
            ccclass("lcc.MultipleLanguages"),
            menu("i18n:lcc-framework.menu-extension/MultipleLanguages")
        ], MultipleLanguages);
        return MultipleLanguages;
    }(cc.Component));
    lcc.MultipleLanguages = MultipleLanguages;
})(lcc || (lcc = {}));
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
/// <reference path="../base/lcc.ts" />
/// <reference path="../base/state.ts" />
var lcc;
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
/// <reference path="../base/lcc.ts" />
/// <reference path="../base/state.ts" />
(function (lcc) {
    var _a;
    var TAG = "lcc/log/log-manager.ts";
    /**
     * @zh
     * 日志等级
     */
    var LOGLEVEL;
    (function (LOGLEVEL) {
        /**
         * @zh
         * 最低级，什么都可以
         */
        LOGLEVEL[LOGLEVEL["VERBOSE"] = 1] = "VERBOSE";
        /**
         * @zh
         * 调试日志
         */
        LOGLEVEL[LOGLEVEL["DEBUG"] = 2] = "DEBUG";
        /**
         * @zh
         * 信息日志
         */
        LOGLEVEL[LOGLEVEL["INFO"] = 3] = "INFO";
        /**
         * @zh
         * 警告日志
         */
        LOGLEVEL[LOGLEVEL["WARN"] = 4] = "WARN";
        /**
         * @zh
         * 错误日志
         */
        LOGLEVEL[LOGLEVEL["ERROR"] = 5] = "ERROR";
        /**
         * @zh
         * 寂静, 用于关闭日志
         */
        LOGLEVEL[LOGLEVEL["SILENT"] = 6] = "SILENT";
    })(LOGLEVEL = lcc.LOGLEVEL || (lcc.LOGLEVEL = {}));
    /**
     * @zh
     * 日志等级描述
     */
    var LogLevelDescs = (_a = {},
        _a[LOGLEVEL.VERBOSE] = "V",
        _a[LOGLEVEL.DEBUG] = "D",
        _a[LOGLEVEL.INFO] = "I",
        _a[LOGLEVEL.WARN] = "W",
        _a[LOGLEVEL.ERROR] = "E",
        _a[LOGLEVEL.SILENT] = "S",
        _a);
    /**
     * @zh
     * 最大日志缓冲 默认1M
     */
    lcc.LOG_BUFFERSIZE = 1024 * 1024;
    /**
     * @zh
     * 日志默认存放路径<br/>
      * *原生平台有效*
     */
    lcc.LOG_PATH = CC_JSB && jsb.fileUtils.getWritablePath() + "/logs";
    /**
     * @zh
     * 生成的日志文件名，不含后缀<br/>
     * *原生平台有效*
     */
    lcc.LOG_FILENAME = 'log';
    /**
     * @zh
     * 开启单个日志文件<br/>
     * 开启后所有输出都会追加到这个文件中<br/>
     * *原生平台有效*
     */
    lcc.LOG_SINGLE = false;
    /**
     * @zh
     * 日志管理器<br/>
     * 主要管理框架日志的输出和保存<br/>
     * 并且也监听程序异常日志
     */
    var LogManager = /** @class */ (function () {
        /**
         * @zh
         * 构造函数
         */
        function LogManager() {
            var _this = this;
            /**
             * @zh
             * 日志输出等级<br>
             * 只有不小于该等级的日志会被输出和保存<br/>
             * 保存不一定是及时的，有缓冲区
             */
            this._logLevel = LOGLEVEL.INFO;
            /**
             * @zh
             * 日志缓冲保存等级<br/>
             * 如果收到不小于该等级的日志会立刻保存
             */
            this._flushLevel = LOGLEVEL.ERROR;
            /**
             * @zh
             * 日志缓冲大小
             */
            this._buffSize = lcc.LOG_BUFFERSIZE;
            /**
             * @zh
             * 日志缓冲
             */
            this._logBuff = { logs: [], size: 0 };
            /**
             * @zh
             * 日志文件
             */
            this._logFile = null;
            /**
             * @zh
             * 日志格式化函数
             */
            this._logFormat = this.defaultLogFormat.bind(this);
            lcc.state.on('initialize', function () {
                lcc.doing.stateInitialize.in(function () {
                    _this._logLevel = LOGLEVEL.INFO;
                    _this._flushLevel = LOGLEVEL.ERROR;
                    _this._buffSize = lcc.LOG_BUFFERSIZE;
                    _this._logBuff = { logs: [], size: 0 };
                    _this._logFile = null;
                    _this._logFormat = _this.defaultLogFormat.bind(_this);
                    if (!CC_EDITOR) {
                        window.onerror = _this.onError.bind(_this);
                    }
                });
            });
            lcc.state.on('release', function () {
                lcc.doing.stateRelease.in(function () {
                    if (!CC_EDITOR) {
                        window.onerror = null;
                    }
                });
            });
        }
        /**
         * @zh
         * 获取单例对象
         */
        LogManager.getInstance = function () {
            if (!LogManager._instance) {
                LogManager._instance = new LogManager();
            }
            return LogManager._instance;
        };
        /**
         * @zh
         * 全局错误
         *
         * @param message
         * @param source
         * @param lineno
         * @param colno
         * @param error
         */
        LogManager.prototype.onError = function (message, source, lineno, colno, error) {
            this.error("SYSTEM", "[" + error + "]" + message + " < " + source + "(" + lineno + "," + colno + ")");
        };
        /**
         * @zh
         * 获得日志文件<br/>
         * 如果使用`LOG_SINGLE`单日志文件，那么始终获得同一个日志文件<br/>
         * 否则，每一次启动程序，日志文件名称都会加上时间标记
         */
        LogManager.prototype.getLogFile = function () {
            if (!this._logFile) {
                if (CC_JSB) {
                    jsb.fileUtils.createDirectory(lcc.LOG_PATH);
                    if (lcc.LOG_SINGLE) {
                        this._logFile = lcc.LOG_PATH + "/" + lcc.LOG_FILENAME + ".log";
                    }
                    else {
                        var now = new Date();
                        var yyyy = now.getFullYear();
                        var mm = now.getMonth() + 1;
                        var dd = now.getDate();
                        var HH = now.getHours();
                        var MM = now.getMinutes();
                        var SS = now.getSeconds();
                        this._logFile = lcc.LOG_PATH + "/" + yyyy + (mm < 10 ? "0" + mm : mm) + (dd < 10 ? "0" + dd : dd) + (HH < 10 ? "0" + HH : HH) + (MM < 10 ? "0" + MM : MM) + (SS < 10 ? "0" + SS : SS) + "-" + lcc.LOG_FILENAME + ".log";
                    }
                }
            }
            return this._logFile;
        };
        /**
         * @zh
         * 设置日志输出等级
         *
         * @param level - 日志等级
         */
        LogManager.prototype.setLogLevel = function (level) {
            this._logLevel = level;
        };
        /**
         * @zh
         * 设置缓冲区保存等级
         *
         * @param level - 日志等级
         */
        LogManager.prototype.setFlushLevel = function (level) {
            this._flushLevel = level;
        };
        /**
         * @zh
         * 设置日志缓冲区大小
         *
         * @param size - 大小，字节数
         */
        LogManager.prototype.setBufferSize = function (size) {
            this._buffSize = size;
        };
        /**
         * @zh
         * 设置日志格式化函数<br/>
         * 如果设置为'null'，那么会使用默认的格式化函数
         *
         * @param format - 自定义格式化函数
         */
        LogManager.prototype.setLogFormat = function (format) {
            this._logFormat = format;
            if (!this._logFormat) {
                this._logFormat = this.defaultLogFormat.bind(this);
            }
        };
        /**
         * @zh
         * 默认日志格式化函数
         *
         * @param params - 日志参数
         */
        LogManager.prototype.defaultLogFormat = function (params) {
            return lcc.js.formatDate("mm-dd HH:MM:SS", new Date()) + " " + LogLevelDescs[params.level] + "/" + params.tag
                + " - " + params.content;
        };
        /**
         * @zh
         * 写入日志<br/>
         * 根据`日志输出等级`，决定是否输出日志<br/>
         * 根据`缓冲保存等级`，决定是否立即保存日志
         *
         * @param params - 日志参数
         */
        LogManager.prototype.writeLog = function (params) {
            if (params.level >= this._logLevel) {
                var log = this._logFormat(params);
                switch (params.level) {
                    case LOGLEVEL.ERROR:
                        cc.error(log);
                        break;
                    case LOGLEVEL.WARN:
                        cc.warn(log);
                        break;
                    default:
                        cc.log(log);
                        break;
                }
                if (CC_JSB) {
                    this._logBuff.logs.push(log);
                    this._logBuff.size += log.length;
                    if (params.level >= this._flushLevel || this._logBuff.size >= this._buffSize) {
                        this.flushLog();
                    }
                }
            }
        };
        /**
         * @zh
         * 保存日志缓冲<br/>
         * 如果需要马上在日志文件上看到输出，可以手动调用
         */
        LogManager.prototype.flushLog = function () {
            if (this._logBuff.size > 0) {
                if (CC_JSB) {
                    // 写入缓冲区
                    jsb.fileUtils.writeStringToFile(this._logBuff.logs.join("\n") + "\n", this.getLogFile());
                }
                this._logBuff = { logs: [], size: 0 };
            }
        };
        /**
         * @zh
         * 输出 VERBOSE 日志
         */
        LogManager.prototype.verbose = function (tagOrParams, msg) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            if (LOGLEVEL.VERBOSE >= this._logLevel) {
                if (typeof tagOrParams == "string") {
                    tagOrParams = { tag: tagOrParams };
                }
                tagOrParams.level = LOGLEVEL.VERBOSE;
                tagOrParams.content = lcc.js.formatString(msg, args);
                this.writeLog(tagOrParams);
            }
        };
        /**
         * @zh
         * 输出 DEBUG 日志
         */
        LogManager.prototype.debug = function (tagOrParams, msg) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            if (LOGLEVEL.DEBUG >= this._logLevel) {
                if (typeof tagOrParams == "string") {
                    tagOrParams = { tag: tagOrParams };
                }
                tagOrParams.level = LOGLEVEL.DEBUG;
                tagOrParams.content = lcc.js.formatString(msg, args);
                this.writeLog(tagOrParams);
            }
        };
        /**
         * @zh
         * 输出 INFO 日志
         */
        LogManager.prototype.info = function (tagOrParams, msg) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            if (LOGLEVEL.INFO >= this._logLevel) {
                if (typeof tagOrParams == "string") {
                    tagOrParams = { tag: tagOrParams };
                }
                tagOrParams.level = LOGLEVEL.INFO;
                tagOrParams.content = lcc.js.formatString(msg, args);
                this.writeLog(tagOrParams);
            }
        };
        /**
         * @zh
         * 输出 WARN 日志
         */
        LogManager.prototype.warn = function (tagOrParams, msg) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            if (LOGLEVEL.WARN >= this._logLevel) {
                if (typeof tagOrParams == "string") {
                    tagOrParams = { tag: tagOrParams };
                }
                tagOrParams.level = LOGLEVEL.WARN;
                tagOrParams.content = lcc.js.formatString(msg, args);
                this.writeLog(tagOrParams);
            }
        };
        /**
         * @zh
         * 输出 ERROR 日志
         */
        LogManager.prototype.error = function (tagOrParams, msg) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            if (LOGLEVEL.ERROR >= this._logLevel) {
                if (typeof tagOrParams == "string") {
                    tagOrParams = { tag: tagOrParams };
                }
                tagOrParams.level = LOGLEVEL.ERROR;
                tagOrParams.content = lcc.js.formatString(msg, args);
                this.writeLog(tagOrParams);
            }
        };
        return LogManager;
    }());
    ;
    /**
     * @zh
     * 日志管理器对象
     */
    lcc.logMgr = new LogManager();
})(lcc || (lcc = {}));
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
/// <reference path="../base/lcc.ts" />
var lcc;
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
/// <reference path="../base/lcc.ts" />
(function (lcc) {
    var TAG = "lcc/network/net-line.ts";
    /**
     * @zh
     * 网络线模式
     */
    var NetLineMode;
    (function (NetLineMode) {
        /**
         * @zh
         * 客户端
         */
        NetLineMode[NetLineMode["CLIENT"] = 1] = "CLIENT";
        /**
         * @zh
         * 服务器
         */
        NetLineMode[NetLineMode["SERVER"] = 2] = "SERVER";
        /**
         * @zh
         * 连接-服务器收到的连接
         */
        NetLineMode[NetLineMode["CONNECT"] = 3] = "CONNECT";
    })(NetLineMode = lcc.NetLineMode || (lcc.NetLineMode = {}));
    ;
    /**
     * @zh
     * 网络线基类<br/>
     * 基本属性、网络数据的缓冲和发送操作等
     */
    var NetLine = /** @class */ (function (_super) {
        __extends(NetLine, _super);
        /**
         * @zh
         * 构造函数
         * @param name - 名称
         * @param mode - 模式
         * @param type - 类型
         */
        function NetLine(name, mode, type) {
            var _this = _super.call(this) || this;
            /**
             * @zh
             * 网络线名称
             */
            _this._name = null;
            /**
             * @zh
             * 网络线模式
             */
            _this._mode = null;
            /**
             * @zh
             * 网络线类型
             */
            _this._type = null;
            /**
             * @zh
             * 使用ProtoBuff
             */
            _this._useProtoBuff = false;
            /**
             * @zh
             * 自动发送
             */
            _this._autoSend = true;
            /**
             * @zh
             * 发送缓冲
             */
            _this._sendCaches = [];
            /**
             * @zh
             * 自动分发
             */
            _this._autoDispatch = true;
            /**
             * @zh
             * 分发缓冲
             */
            _this._dispatchCaches = [];
            _this._mode = mode;
            _this._type = type;
            _this._name = name;
            return _this;
        }
        /**
         * @zh
         * 注册网络线类型
         *
         * @param netType - 网络类型枚举
         * @param value - 网络类型对象
         */
        NetLine.registerNetType = function (netType, value) {
            NetLine.__types[netType] = value;
        };
        /**
         * @zh
         * 获得网络类型对象
         *
         * @param netType - 网络类型枚举
         */
        NetLine.getNetType = function (netType) {
            return NetLine.__types[netType];
        };
        /**
         * @zh
         * 配置网络线<br/>
         * 子类中应该重写该函数
         *
         * @param config - 不同类型的网络线有不同的配置
         */
        NetLine.prototype.config = function (config) { };
        /**
         * @zh
         * 检查网络线是否有效<br/>
         * 子类中应该重写该函数
         *
         * @returns 如果无效，有些操作可能不会执行
         */
        NetLine.prototype.isValid = function () {
            return false;
        };
        /**
         * @zh
         * 打开网络线<br/>
         * 子类中应该重写该函数
         */
        NetLine.prototype.open = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, false];
                });
            });
        };
        /**
         * @zh
         * 关闭网络线<br/>
         * 子类中应该重写该函数
         */
        NetLine.prototype.close = function () { };
        /**
         * @zh
         * 更新网络线<br/>
         * 子类中应该重写该函数
         *
         * @param dt 间隔时间
         */
        NetLine.prototype.onUpdate = function (dt) { };
        /**
         * @zh
         * 发送网络数据<br/>
         * 子类中应该重写该函数
         *
         * @param data - 网络数据
         */
        NetLine.prototype.sendNetData = function (data) {
            console.warn(TAG, "NetLine " + this._name + " discard send datas!");
        };
        /**
         * @zh
         * 获得网络线名称
         */
        NetLine.prototype.getName = function () {
            return this._name;
        };
        /**
         * @zh
         * 获得模式
         */
        NetLine.prototype.getMode = function () {
            return this._mode;
        };
        /**
         * @zh
         * 获得类型
         */
        NetLine.prototype.getType = function () {
            return this._type;
        };
        /**
         * @zh
         * 设置是否使用ProtoBuff
         *
         * @param use - 是否使用ProtoBuff
         */
        NetLine.prototype.useProtoBuff = function (use) {
            this._useProtoBuff = use;
        };
        /**
         * @zh
         * 检查是否使用ProtoBuff
         */
        NetLine.prototype.isUseProtoBuff = function () {
            return this._useProtoBuff;
        };
        /**
         * @zh
         * 自动发送使能<br/>、
         * `自动发送`的意思是：如果`writeProtocol`写入协议后，会立刻发送出去
         *
         * @param psend - 是否自动发送
         */
        NetLine.prototype.autoSend = function (pwrite) {
            lcc.DEBUG.NETWORK && cc.log(TAG, this.getName() + " autoSend " + pwrite);
            if (this._autoSend != pwrite) {
                this._autoSend = pwrite;
                if (pwrite) {
                    this.flushSendCaches();
                }
            }
        };
        /**
         * @zh
         * 自动分发使能<br/>、
         * `自动发送`的意思是：如果接收到网络数据协议后，是否立刻`emit`到注册的协议事件
         *
         * @param dispatch - 是否自动分发
         */
        NetLine.prototype.autoDispatch = function (dispatch) {
            lcc.DEBUG.NETWORK && cc.log(TAG, this.getName() + " autoDispatch " + dispatch);
            if (this._autoDispatch != dispatch) {
                this._autoDispatch = dispatch;
                if (dispatch) {
                    this.flushDispatchCaches();
                }
            }
        };
        /**
         * @zh
         * 压入发送缓存
         *
         * @param datas - 协议数据
         */
        NetLine.prototype.pushSendCaches = function (datas) {
            var _a;
            lcc.DEBUG.NETWORK && cc.log(TAG, this.getName() + " pushSendCaches " + JSON.stringify(datas));
            (_a = this._sendCaches).push.apply(_a, datas);
            if (this._autoSend) {
                this.flushSendCaches();
            }
        };
        /**
         * @zh
         * 压入分发缓存
         *
         * @param datas - 协议数据
         */
        NetLine.prototype.pushDispatchCaches = function (datas) {
            var _a;
            lcc.DEBUG.NETWORK && cc.log(TAG, this.getName() + " pushDispatchCaches " + JSON.stringify(datas));
            (_a = this._dispatchCaches).push.apply(_a, datas);
            if (this._autoDispatch) {
                this.flushDispatchCaches();
            }
        };
        /**
         * @zh
         * 弹出发送缓冲<br/>
         * 会返回并清空发送缓冲
         *
         * @returns 协议数据
         */
        NetLine.prototype.popSendCaches = function () {
            if (this._sendCaches.length > 0) {
                var caches_1 = this._sendCaches;
                this._sendCaches = [];
                lcc.DEBUG.NETWORK && cc.log(TAG, this.getName() + " popSendCaches success");
                return caches_1;
            }
        };
        /**
         * @zh
         * 输出发送缓冲<br/>
         * 当网络线无效或者没有数据时，除非使用`force`，否则不能执行发送操作
         *
         * @param force - 如果当前网络线无效，也强制输出(最终结果可能是丢弃所有数据)
         */
        NetLine.prototype.flushSendCaches = function (force) {
            if (force === void 0) { force = false; }
            if (force || (this.isValid() && this._sendCaches.length > 0)) {
                lcc.DEBUG.NETWORK && cc.log(TAG, this.getName() + " flushSendCaches success " + force);
                this.writeNetLineData(lcc.netdata.NetDataType.PROTOCOLS);
            }
        };
        /**
         * @zh
         * 输出分发缓冲<br/>
         * 分发处理缓冲中的网络数据
         */
        NetLine.prototype.flushDispatchCaches = function () {
            lcc.DEBUG.NETWORK && cc.log(TAG, this.getName() + " flushDispatchCaches success");
            for (var _i = 0, _a = this._dispatchCaches; _i < _a.length; _i++) {
                var cache = _a[_i];
                try {
                    this.emit("protocol-" + cache.cmd, cache.data, this);
                    this.emit("protocol", cache.cmd, cache.data, this);
                    if (this._mode === NetLineMode.CLIENT) {
                        lcc.netClient.emit("protocol-" + cache.cmd, cache.data, this);
                        lcc.netClient.emit("protocol", cache.cmd, cache.data, this);
                    }
                }
                catch (e) {
                    cc.error(TAG, this.getName() + " flushDispatchCaches Exception " + e);
                }
            }
            this._dispatchCaches = [];
        };
        /**
         * @zh
         * 写入网络线数据
         *
         * @param type - 数据类型
         * @param data - 数据对象
         */
        NetLine.prototype.writeNetLineData = function (type, data) {
            lcc.DEBUG.NETWORK && cc.log(TAG, this.getName() + " writeNetLineData " + type + " " + (data && JSON.stringify(data)));
            this.sendNetData({ type: type, data: data, protocols: this.popSendCaches() });
        };
        /**
         * @zh
         * 写入协议<br/>
         * 协议是最基本的通信数据，它由`cmd`标记数据的类型，和`data`包含具体内容组成
         *
         * @param cmd - 命令
         * @param data - 数据
         */
        NetLine.prototype.writeProtocol = function (cmd, data) {
            lcc.DEBUG.NETWORK && cc.log(TAG, this.getName() + " writeProtocol " + cmd + " " + (data && JSON.stringify(data)));
            this.pushSendCaches([{
                    cmd: cmd,
                    data: data,
                }]);
        };
        /**
         * @zh
         * 网络线类型表
         */
        NetLine.__types = lcc.js.createMap();
        return NetLine;
    }(cc.EventTarget));
    lcc.NetLine = NetLine;
})(lcc || (lcc = {}));
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
/// <reference path="../base/lcc.ts" />
/// <reference path="../base/state.ts" />
/// <reference path="../utils/js.ts" />
/// <reference path="./net-line.ts" />
var lcc;
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
/// <reference path="../base/lcc.ts" />
/// <reference path="../base/state.ts" />
/// <reference path="../utils/js.ts" />
/// <reference path="./net-line.ts" />
(function (lcc) {
    var TAG = "lcc/network/net-client.ts";
    /**
     * @zh
     * 网络客户端tick时间<br/>
     * 客户端上[[NetLine.onUpdate]]的基准时间
     */
    lcc.NETCLIENT_TICKTIME = 1;
    /**
     * @zh
     * 网络客户端映射表
     */
    lcc.NETCLIENTS = lcc.js.createMap();
    /**
     * @zh
     * 网络客户端管理<br/>
     * 主动发起连接端的管理
     */
    var NetClient = /** @class */ (function (_super) {
        __extends(NetClient, _super);
        /**
         * @zh
         * 构造函数
         */
        function NetClient() {
            var _this = _super.call(this) || this;
            /**
             * @zh
             * 是否使用网络心跳
             */
            _this._useNetHeart = false;
            /**
             * @zh
             * WSS 配置
             */
            _this._WSSConfig = null;
            lcc.state.on('initialize', function () {
                lcc.doing.stateInitialize.in(function () {
                    _this._useNetHeart = false;
                    _this._WSSConfig = null;
                });
            });
            lcc.state.on('release', function () {
                lcc.doing.stateRelease.in(function () {
                    _this.clear();
                    _this.removeAllClients();
                });
            });
            return _this;
        }
        /**
         * @zh
         * 设置WSS 配置
         *
         * @param protocol - 协议
         * @param cert - 证书
         */
        NetClient.prototype.setWSSConfig = function (protocol, cert) {
            this._WSSConfig = {
                protocol: protocol,
                cert: cert,
            };
        };
        /**
         * @zh
         * 获得WSS 配置
         */
        NetClient.prototype.getWSSConfig = function () {
            return this._WSSConfig;
        };
        /**
         * @zh
         * 安装心跳
         */
        NetClient.prototype.setupHeartTick = function () {
            if (!this._useNetHeart && !lcc.js.isEmptyMap(lcc.NETCLIENTS)) {
                lcc.timerMgr.addTimer(lcc.NETCLIENT_TICKTIME, this.onHeartTick.bind(this), {
                    group: "lcc.NetClient",
                    key: "tick",
                    loop: true
                });
                this._useNetHeart = true;
                lcc.DEBUG.NETWORK && cc.log(TAG, "setupHeartTick tick " + lcc.NETCLIENT_TICKTIME);
            }
        };
        /**
         * @zh
         * 删除心跳
         */
        NetClient.prototype.deleteHeartTick = function () {
            if (this._useNetHeart && lcc.js.isEmptyMap(lcc.NETCLIENTS)) {
                lcc.timerMgr.removeTimer({
                    group: "lcc.NetClient",
                    key: "tick",
                });
                this._useNetHeart = false;
                lcc.DEBUG.NETWORK && cc.log(TAG, "deleteHeartTick tick");
            }
        };
        /**
         * @zh
         * 当心跳回调
         *
         * @param dt 间隔时间，一般为[[NETCLIENT_TICKTIME]]
         */
        NetClient.prototype.onHeartTick = function (dt) {
            for (var _i = 0, _a = Object.keys(lcc.NETCLIENTS); _i < _a.length; _i++) {
                var cname = _a[_i];
                var netline = lcc.NETCLIENTS[cname];
                if (netline) {
                    netline.onUpdate(dt);
                }
            }
        };
        /**
         * 添加客户端<br/>
         * 这里只是添加客户端，如果你需要启动客户端，应该手动调用`open`<br/>
         * ```
         *      let client = lcc.netClient.addClient(...);
         *      if(client){
         *          // 打开客户端，一般是向服务器发送连接请求
         *          client.open();
         *      }
         * ```
         *
         * @param name - 名称
         * @param type - 类型
         * @param config - 配置
         */
        NetClient.prototype.addClient = function (name, type, config) {
            if (config === void 0) { config = lcc.js.createMap(); }
            lcc.DEBUG.NETWORK && cc.log(TAG, "addClient " + name + " " + type + " " + JSON.stringify(config));
            if (lcc.NETCLIENTS[name]) {
                cc.error(TAG, "client [" + name + "] conflict!");
            }
            else {
                var netType = lcc.NetLine.getNetType(type);
                if (!netType) {
                    cc.error(TAG, "net type [" + type + "] not found!");
                }
                else {
                    var netline = new netType(name, lcc.NetLineMode.CLIENT, type);
                    lcc.NETCLIENTS[name] = netline;
                    netline.config(config);
                    this.setupHeartTick();
                    lcc.DEBUG.NETWORK && cc.log(TAG, "addClient " + name + " success");
                    return netline;
                }
            }
        };
        /**
         * @zh
         * 获得网络客户端
         *
         * @param name 名称
         *
         * @returns 客户端对象
         */
        NetClient.prototype.getClient = function (name) {
            return lcc.NETCLIENTS[name];
        };
        /**
         * @zh
         * 移除网络客户端
         *
         * @param name 名称
         */
        NetClient.prototype.removeClient = function (name) {
            lcc.DEBUG.NETWORK && cc.log(TAG, "removeClient " + name);
            var netline = lcc.NETCLIENTS[name];
            if (netline) {
                netline.close();
                delete lcc.NETCLIENTS[name];
                this.deleteHeartTick();
                lcc.DEBUG.NETWORK && cc.log(TAG, "removeClient " + name + " success");
            }
        };
        /**
         * @zh
         * 移除所有客户端
         */
        NetClient.prototype.removeAllClients = function () {
            for (var _i = 0, _a = Object.keys(lcc.NETCLIENTS); _i < _a.length; _i++) {
                var name_2 = _a[_i];
                this.removeClient(name_2);
            }
        };
        return NetClient;
    }(cc.EventTarget));
    ;
    /**
     * @zh
     * 网络客户端管理实例
     */
    lcc.netClient = new NetClient();
})(lcc || (lcc = {}));
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
var lcc;
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
(function (lcc) {
    var js;
    (function (js) {
        var TAG = "lcc/utils/js-buffer.ts";
        /**
         * @zh
         * 缓冲读取对象
         */
        var BufferReader = /** @class */ (function () {
            /**
             * @zh
             * 构造缓冲读取类
             *
             * @param buffer - 缓冲实体
             * @param index - 当前索引
             * @param capacity - 当前容量
             */
            function BufferReader(buffer, index, capacity) {
                if (index === void 0) { index = 0; }
                /**
                 * @zh
                 * 缓冲对象
                 */
                this._buffer = null;
                /**
                 * @zh
                 * 视图
                 */
                this._view = null;
                /**
                 * @zh
                 * 当前索引
                 */
                this._index = 0;
                /**
                 * @zh
                 * 缓冲容量
                 */
                this._capacity = 0;
                this._buffer = buffer;
                this._view = new DataView(buffer);
                this._index = index;
                this._capacity = capacity == null ? buffer.byteLength : capacity;
            }
            /**
             * @zh
             * 跳过长度字节
             *
             * @param count - 字节数
             */
            BufferReader.prototype.skip = function (count) {
                this._index += count;
                if (this._index > this._capacity) {
                    this._index = this._capacity;
                }
            };
            /**
             * @zh
             * 缓冲区对齐
             *
             * @param size - 对齐大小
             */
            BufferReader.prototype.alignment = function (size) {
                var rem = this._index % size;
                if (rem != 0) {
                    this.skip(size - rem);
                }
            };
            /**
             * @zh
             * 读取 Byte
             */
            BufferReader.prototype.readByte = function () {
                var value = this._view.getInt8(this._index);
                this.skip(1);
                return value;
            };
            /**
             * @zh
             * 读取 unsigned Byte
             */
            BufferReader.prototype.readUByte = function () {
                var value = this._view.getUint8(this._index);
                this.skip(1);
                return value;
            };
            /**
             * @zh
             * 查看 Byte
             */
            BufferReader.prototype.peekByte = function () {
                return this._view.getInt8(this._index);
            };
            /**
             * @zh
             * 查看 unsigned Byte
             */
            BufferReader.prototype.peekUByte = function () {
                return this._view.getUint8(this._index);
            };
            /**
             * @zh
             * 读取 Short
             */
            BufferReader.prototype.readShort = function () {
                var value = this._view.getInt16(this._index, true);
                this.skip(2);
                return value;
            };
            /**
             * @zh
             * 读取 unsigned Short
             */
            BufferReader.prototype.readUShort = function () {
                var value = this._view.getUint16(this._index, true);
                this.skip(2);
                return value;
            };
            /**
             * @zh
             * 查看 Short
             */
            BufferReader.prototype.peekShort = function () {
                return this._view.getInt16(this._index, true);
            };
            /**
             * @zh
             * 查看 unsigned Short
             */
            BufferReader.prototype.peekUShort = function () {
                return this._view.getUint16(this._index, true);
            };
            /**
             * @zh
             * 读取 Long
             */
            BufferReader.prototype.readLong = function () {
                var value = this._view.getInt32(this._index, true);
                this.skip(4);
                return value;
            };
            /**
             * @zh
             * 读取 unsigned Long
             */
            BufferReader.prototype.readULong = function () {
                var value = this._view.getUint32(this._index, true);
                this.skip(4);
                return value;
            };
            /**
             * @zh
             * 查看 Long
             */
            BufferReader.prototype.peekLong = function () {
                return this._view.getInt32(this._index, true);
            };
            /**
             * @zh
             * 查看 unsigned Long
             */
            BufferReader.prototype.peekULong = function () {
                return this._view.getUint32(this._index, true);
            };
            /**
             * @zh
             * 读取 Float
             */
            BufferReader.prototype.readFloat = function () {
                var value = this._view.getFloat32(this._index, true);
                this.skip(4);
                return value;
            };
            /**
             * @zh
             * 查看 Float
             */
            BufferReader.prototype.peekFloat = function () {
                return this._view.getFloat32(this._index, true);
            };
            /**
             * @zh
             * 读取 Double
             */
            BufferReader.prototype.readDouble = function () {
                var value = this._view.getFloat64(this._index, true);
                this.skip(8);
                return value;
            };
            /**
             * @zh
             * 查看 Double
             */
            BufferReader.prototype.peekDouble = function () {
                return this._view.getFloat64(this._index, true);
            };
            /**
             * @zh
             * 读取字符串，使用utf16le
             */
            BufferReader.prototype.readString = function () {
                var len = this.readUShort();
                var str = js.ab2str(this.readData(len));
                return str;
            };
            /**
             * @zh
             * 缓冲区索引
             */
            BufferReader.prototype.getIndex = function () {
                return this._index;
            };
            /**
             * @zh
             * 缓冲区剩余大小
             */
            BufferReader.prototype.getRemainSize = function () {
                return this._capacity - this._index;
            };
            /**
             * @zh
             * 空闲缓冲大小
             */
            BufferReader.prototype.getEmptySize = function () {
                return this._buffer.byteLength - this._capacity;
            };
            /**
             * @zh
             * 读取数据
             *
             * @param count - 大小
             */
            BufferReader.prototype.readData = function (count) {
                if (count > 0) {
                    var buffer = this._buffer.slice(this._index, this._index + count);
                    this.skip(count);
                    return buffer;
                }
            };
            /**
             * @zh
             * 查看数据
             *
             * @param count - 大小
             */
            BufferReader.prototype.peekData = function (count) {
                if (count > 0) {
                    return this._buffer.slice(this._index, this._index + count);
                }
            };
            return BufferReader;
        }());
        js.BufferReader = BufferReader;
        /**
         * @zh
         * 缓冲写入对象
         */
        var BufferWriter = /** @class */ (function () {
            function BufferWriter() {
                /**
                 * @zh
                 * 缓冲数组
                 */
                this._buffers = [];
                /**
                 * @zh
                 * 缓冲大小
                 */
                this._size = 0;
            }
            /**
             * @zh
             * 获得缓冲大小
             */
            BufferWriter.prototype.getSize = function () {
                return this._size;
            };
            /**
             * @zh
             * 填充指定数量的字符
             *
             * @param count - 字节数
             * @param char - 数值
             */
            BufferWriter.prototype.fill = function (count, char) {
                if (count > 0) {
                    var buff = new ArrayBuffer(count);
                    (new Int8Array(buff)).fill(char, 0, -1);
                    this._buffers.push(buff);
                    this._size += count;
                }
            };
            /**
             * @zh
             * 缓冲区对齐
             *
             * @param size - 对齐字节数
             * @param char - 填充数值
             */
            BufferWriter.prototype.alignment = function (size, char) {
                var rem = this._size % size;
                if (rem != 0) {
                    this.fill(rem, char);
                }
            };
            /**
             * @zh
             * 写入 Byte
             *
             * @param byte - 数据
             */
            BufferWriter.prototype.writeByte = function (byte) {
                var buff = new ArrayBuffer(1);
                (new DataView(buff)).setInt8(0, byte);
                this._buffers.push(buff);
                this._size += 1;
            };
            /**
             * @zh
             * 写入 unsigned Byte
             *
             * @param byte - 数据
             */
            BufferWriter.prototype.writeUByte = function (byte) {
                var buff = new ArrayBuffer(1);
                (new DataView(buff)).setUint8(0, byte);
                this._buffers.push(buff);
                this._size += 1;
            };
            /**
             * @zh
             * 写入 Short
             *
             * @param Short - 数据
             */
            BufferWriter.prototype.writeShort = function (short) {
                var buff = new ArrayBuffer(2);
                (new DataView(buff)).setInt16(0, short, true);
                this._buffers.push(buff);
                this._size += 2;
            };
            /**
             * @zh
             * 写入 unsigned Short
             *
             * @param Short - 数据
             */
            BufferWriter.prototype.writeUShort = function (short) {
                var buff = new ArrayBuffer(2);
                (new DataView(buff)).setUint16(0, short, true);
                this._buffers.push(buff);
                this._size += 2;
            };
            /**
             * @zh
             * 写入 Long
             *
             * @param Long - 数据
             */
            BufferWriter.prototype.writeLong = function (long) {
                var buff = new ArrayBuffer(4);
                (new DataView(buff)).setInt32(0, long, true);
                this._buffers.push(buff);
                this._size += 4;
            };
            /**
             * @zh
             * 写入 unsigned Long
             *
             * @param Long - 数据
             */
            BufferWriter.prototype.writeULong = function (long) {
                var buff = new ArrayBuffer(4);
                (new DataView(buff)).setUint32(0, long, true);
                this._buffers.push(buff);
                this._size += 4;
            };
            /**
             * @zh
             * 写入 unsigned Float
             *
             * @param Float - 数据
             */
            BufferWriter.prototype.writeFloat = function (float) {
                var buff = new ArrayBuffer(4);
                (new DataView(buff)).setFloat32(0, float, true);
                this._buffers.push(buff);
                this._size += 4;
            };
            /**
             * @zh
             * 写入 unsigned Double
             *
             * @param Double - 数据
             */
            BufferWriter.prototype.writeDouble = function (double) {
                var buff = new ArrayBuffer(8);
                (new DataView(buff)).setFloat64(0, double, true);
                this._buffers.push(buff);
                this._size += 8;
            };
            /**
             * @zh
             * 写入数据
             *
             * @param buffer - 缓冲
             */
            BufferWriter.prototype.writeData = function (buffer) {
                this._buffers.push(buffer);
                this._size += buffer.byteLength;
            };
            /**
             * @zh
             * 写入UTF16LE字符串
             *
             * @param str - 字符串
             */
            BufferWriter.prototype.writeString = function (str) {
                var buff = js.str2ab(str);
                this.writeUShort(buff.byteLength);
                this.writeData(buff);
            };
            /**
             * @zh
             * 清空缓冲
             */
            BufferWriter.prototype.clear = function () {
                this._buffers = [];
                this._size = 0;
            };
            /**
             * @zh
             * 获得数据
             *
             * @returns 最终的Buffer数据
             */
            BufferWriter.prototype.getData = function () {
                return js.mergeABs.apply(js, this._buffers);
            };
            return BufferWriter;
        }());
        js.BufferWriter = BufferWriter;
        /**
         * @zh
         * 流缓冲读取类<br/>
         * 在[[BufferReader]]基础上添加了追加缓冲功能
         */
        var StreamReader = /** @class */ (function (_super) {
            __extends(StreamReader, _super);
            /**
             * @zh
             * 构造函数
             *
             * @param basesize 基础大小
             */
            function StreamReader(basesize) {
                return _super.call(this, new ArrayBuffer(basesize), 0, 0) || this;
            }
            /**
             * @zh
             * 清空缓冲区
             */
            StreamReader.prototype.clear = function () {
                this._capacity = 0;
                this._index = 0;
            };
            /**
             * @zh
             * 追加缓冲
             *
             * @param buffer - 缓冲对象
             */
            StreamReader.prototype.append = function (buffer) {
                if (this.getEmptySize() > buffer.byteLength) {
                    js.copyAB(buffer, this._buffer, this._capacity);
                    this._capacity += buffer.byteLength;
                }
                else {
                    var needsize = this.getRemainSize() + buffer.byteLength;
                    var newcapacity = (needsize > this._capacity ? needsize : this._capacity) * 2;
                    var newbuffer = new ArrayBuffer(newcapacity);
                    js.copyAB(this._buffer.slice(this._index, this._capacity), newbuffer, 0);
                    js.copyAB(buffer, newbuffer, this.getRemainSize());
                    this._buffer = newbuffer;
                    this._index = 0;
                    this._capacity = needsize;
                }
            };
            return StreamReader;
        }(BufferReader));
        js.StreamReader = StreamReader;
    })(js = lcc.js || (lcc.js = {}));
})(lcc || (lcc = {}));
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
/// <reference path="../utils/js-buffer.ts" />
var lcc;
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
/// <reference path="../utils/js-buffer.ts" />
(function (lcc) {
    var TAG = "lcc/network/net-data.ts";
    /**
     * @zh
     * 内部网络数据<br/>
     * 不要引用他们，除非你知道在干什么
     */
    var netdata;
    (function (netdata) {
        var _a;
        /**
         * @zh
         * 网络数据类型
         */
        var NetDataType;
        (function (NetDataType) {
            /**
             * @zh
             * 协议
             */
            NetDataType[NetDataType["PROTOCOLS"] = 0] = "PROTOCOLS";
            /**
             * @zh
             * 心跳
             */
            NetDataType[NetDataType["HERT_TICK"] = 1] = "HERT_TICK";
            /**
             * @zh
             * 同步心跳时间
             */
            NetDataType[NetDataType["SYNC_HERTTICK_TIME"] = 2] = "SYNC_HERTTICK_TIME";
            /**
             * @zh
             * 同步连接ID
             */
            NetDataType[NetDataType["SYNC_CONNECT_ID"] = 3] = "SYNC_CONNECT_ID";
        })(NetDataType = netdata.NetDataType || (netdata.NetDataType = {}));
        /**
         * @zh
         * 空网络数据打包器
         */
        var EmptyPacker = {
            pack: function (wBuff, data) {
            },
            unpack: function (rBuff) {
            }
        };
        /**
         * @zh
         * 网络数据打包器映射表
         */
        netdata.PackerMap = (_a = {},
            _a[NetDataType.PROTOCOLS] = EmptyPacker,
            _a[NetDataType.HERT_TICK] = EmptyPacker,
            _a[NetDataType.SYNC_HERTTICK_TIME] = {
                pack: function (wBuff, data) {
                    wBuff.writeUShort(data.heartTime);
                },
                unpack: function (rBuff) {
                    var heartTime = rBuff.readUShort();
                    return {
                        heartTime: heartTime
                    };
                }
            },
            _a[NetDataType.SYNC_CONNECT_ID] = {
                pack: function (wBuff, data) {
                    wBuff.writeString(data.connectID || '');
                },
                unpack: function (rBuff) {
                    var connectID = rBuff.readString();
                    return {
                        connectID: connectID
                    };
                }
            },
            _a);
    })(netdata = lcc.netdata || (lcc.netdata = {}));
    /**
     * @zh
     * 协议接口, 内部使用
     */
    lcc.__pbInterface = null;
    /**
     * @zh
     * 打包网络数据
     *
     * @param netData - 网络数据对象
     * @param netLine - 可选，当前网络线
     */
    function packNetData(data, netLine) {
        var wBuff = new lcc.js.BufferWriter();
        wBuff.writeString(data.connectID || '');
        wBuff.writeUShort(data.type);
        var packer = netdata.PackerMap[data.type];
        if (!packer) {
            lcc.logMgr.error(TAG, "not find packer for NetData " + data.type);
            return null;
        }
        packer.pack(wBuff, data.data || {});
        // 打包协议
        var useProtocol = !netLine || netLine.isUseProtoBuff();
        var protoSize = data.protocols ? data.protocols.length : 0;
        wBuff.writeUShort(protoSize);
        for (var i = 0; i < protoSize; i++) {
            var protocol = data.protocols[i];
            if (useProtocol && lcc.__pbInterface && lcc.__pbInterface.hasProtocol(protocol.cmd)) {
                wBuff.writeUByte(1);
                wBuff.writeUShort(protocol.cmd);
                lcc.__pbInterface.packProtocol(wBuff, protocol.cmd, protocol.data);
            }
            else {
                wBuff.writeUByte(0);
                wBuff.writeString(JSON.stringify(protocol));
            }
        }
        return wBuff.getData();
    }
    lcc.packNetData = packNetData;
    /**
     * @zh
     * 解包网络数据
     *
     * @param netBuff - 网络数据缓冲
     */
    function unpackNetData(netBuff) {
        var rBuff = new lcc.js.BufferReader(netBuff);
        var connectID = rBuff.readString() || undefined;
        var type = rBuff.readUShort();
        var packer = netdata.PackerMap[type];
        if (!packer) {
            lcc.logMgr.error(TAG, "not find packer for NetData " + type);
            return null;
        }
        var data = packer.unpack(rBuff);
        // 解包协议
        var protoSize = rBuff.readUShort();
        var protocols = [];
        for (var i = 0; i < protoSize; i++) {
            if (rBuff.readUByte()) {
                var cmd = rBuff.readUShort();
                var data_1 = lcc.__pbInterface && lcc.__pbInterface.unpackProtocol(rBuff, cmd);
                protocols.push({
                    cmd: cmd,
                    data: data_1,
                });
            }
            else {
                protocols.push(JSON.parse(rBuff.readString()));
            }
        }
        return {
            connectID: connectID,
            type: type,
            data: data,
            protocols: protocols,
        };
    }
    lcc.unpackNetData = unpackNetData;
})(lcc || (lcc = {}));
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
/// <reference path="../base/state.ts" />
/// <reference path="../log/log-manager.ts" />
/// <reference path="../utils/js.ts" />
/// <reference path="../utils/js-buffer.ts" />
/// <reference path="./net-data.ts" />
var lcc;
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
/// <reference path="../base/state.ts" />
/// <reference path="../log/log-manager.ts" />
/// <reference path="../utils/js.ts" />
/// <reference path="../utils/js-buffer.ts" />
/// <reference path="./net-data.ts" />
(function (lcc) {
    var TAG = "lcc/network/protocol-manager.ts";
    /**
     * @zh
     * Protobuf管理器<br/>
     * 主要管理协议打包器
     */
    var ProtobufManager = /** @class */ (function () {
        /**
         * @zh
         * 构造管理器
         */
        function ProtobufManager() {
            var _this = this;
            /**
             * @zh
             * 协议映射表
             */
            this._protocolMap = lcc.js.createMap();
            /**
             * @zh
             * 消息映射表
             */
            this._messageMap = lcc.js.createMap();
            lcc.state.on('initialize', function () {
                lcc.doing.stateInitialize.in(function () {
                    //this._protocolMap = js.createMap();
                    //this._messageMap = js.createMap();
                    lcc.packMgr.on('released', _this.onPackReleased, _this);
                });
            });
            lcc.state.on('release', function () {
                lcc.doing.stateRelease.in(function () {
                    lcc.packMgr.targetOff(_this);
                });
            });
        }
        /**
         * @internal
         */
        ProtobufManager.prototype.onPackReleased = function (pname) {
            return __awaiter(this, void 0, void 0, function () {
                var _i, _a, k, protocol, _b, _c, k, message;
                return __generator(this, function (_d) {
                    for (_i = 0, _a = Object.keys(this._protocolMap); _i < _a.length; _i++) {
                        k = _a[_i];
                        protocol = this._protocolMap[k];
                        if (protocol.pack == pname) {
                            delete this._protocolMap[k];
                        }
                    }
                    for (_b = 0, _c = Object.keys(this._messageMap); _b < _c.length; _b++) {
                        k = _c[_b];
                        message = this._messageMap[k];
                        if (message.pack == pname) {
                            delete this._messageMap[k];
                        }
                    }
                    return [2 /*return*/];
                });
            });
        };
        /**
         * @zh
         * 判断是否有协议
         *
         * @param command - 命令号
         */
        ProtobufManager.prototype.hasProtocol = function (command) {
            return this._protocolMap[command] != null;
        };
        /**
         * @zh
         * 获得协议
         *
         * @param command - 命令号
         */
        ProtobufManager.prototype.getProtocol = function (command) {
            return this._protocolMap[command];
        };
        /**
         * @zh
         * 添加协议
         *
         * @param command - 命令号
         * @param msgName - 消息名称
         * @param msgType - 消息类型
         * @param pack - 所属包
         */
        ProtobufManager.prototype.addProtocol = function (command, msgName, msgType, pack) {
            if (this._protocolMap[command]) {
                lcc.logMgr.warn(TAG, "addProtocol command '" + command + "' conflict");
            }
            this._protocolMap[command] = {
                msgName: msgName,
                msgType: msgType,
            };
        };
        /**
         * @zh
         * 移除协议
         *
         * @param command - 命令号
         */
        ProtobufManager.prototype.removeProtocol = function (command) {
            delete this._protocolMap[command];
        };
        /**
         * @zh
         * 打包协议
         *
         * @param wBuff - 写入缓冲
         * @param command - 命令号
         * @param data - 数据
         */
        ProtobufManager.prototype.packProtocol = function (wBuff, command, data) {
            var protocol = this.getProtocol(command);
            if (protocol) {
                var msg = this.packMessage(protocol.msgName, data);
                var buff = msg.serializeBinary();
                wBuff.writeUShort(buff.byteLength);
                wBuff.writeData(buff);
            }
        };
        /**
         * @zh
         * 解包协议
         *
         * @param rBuff - 读取缓冲
         * @param command - 命令号
         */
        ProtobufManager.prototype.unpackProtocol = function (rBuff, command) {
            var protocol = this.getProtocol(command);
            if (protocol) {
                var byteLength = rBuff.readUShort();
                var buff = rBuff.readData(byteLength);
                var msg = protocol.msgType.deserializeBinary(buff);
                return lcc.pbMgr.unpackMessage(protocol.msgName, msg);
            }
        };
        /**
         * @zh
         * 获得消息打包器
         *
         * @param name - 消息名称
         */
        ProtobufManager.prototype.getMessagePacker = function (name) {
            var msg = this._messageMap[name];
            return msg && msg.packer;
        };
        /**
         * @zh
         * 添加消息打包器
         *
         * @param name - 消息名称
         * @param packer - 打包器
         * @param pack - 所属包
         */
        ProtobufManager.prototype.addMessagePacker = function (name, packer, pack) {
            if (this._messageMap[name]) {
                lcc.logMgr.warn(TAG, "addMessagePacker command '" + name + "' conflict");
            }
            this._messageMap[name] = {
                packer: packer,
                pack: pack,
            };
        };
        /**
         * @zh
         * 移除消息打包器
         *
         * @param name - 消息名称
         */
        ProtobufManager.prototype.removeMessagePacker = function (name) {
            delete this._messageMap[name];
        };
        /**
         * @zh
         * 打包消息
         *
         * @param name - 消息名称
         * @param data - 数据
         * @return - 消息对象
         */
        ProtobufManager.prototype.packMessage = function (name, data) {
            var packer = this.getMessagePacker(name);
            if (packer) {
                return packer.pack(data);
            }
        };
        /**
         * @zh
         * 解包消息
         *
         * @param name - 消息名称
         * @param msg - 消息对象
         * @return - 数据
         */
        ProtobufManager.prototype.unpackMessage = function (name, msg) {
            var packer = this.getMessagePacker(name);
            if (packer) {
                return packer.unpack(msg);
            }
        };
        return ProtobufManager;
    }());
    /**
     * @zh
     * 协议管理器实例
     */
    lcc.pbMgr = new ProtobufManager();
    // 设置协议接口
    lcc.__pbInterface = lcc.pbMgr;
})(lcc || (lcc = {}));
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
var lcc;
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
(function (lcc) {
    var TAG = "lcc/pack/pack-loader.ts";
    /**
     * @zh
     * 包加载器基类
     */
    var PackLoader = /** @class */ (function () {
        /**
         * @zh
         * 构造包加载器
         *
         * @param name - 包的名称
         * @param bundle - 资源包对象
         */
        function PackLoader(name, bundle) {
            /**
             * @zh
             * 包的名称
             */
            this._name = null;
            /**
             * @zh
             * 资源包对象
             */
            this._bundle = null;
            this._name = name;
            this._bundle = bundle;
        }
        /**
         * @zh
         * 获得包名称
         */
        PackLoader.prototype.getName = function () {
            return this._name;
        };
        /**
         * @zh
         * 获得包资源
         */
        PackLoader.prototype.getBundle = function () {
            return this._bundle;
        };
        /**
         * @zh
         * 加载操作
         */
        PackLoader.prototype.onLoad = function () {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/];
            }); });
        };
        /**
         * @zh
         * 销毁操作
         */
        PackLoader.prototype.onDestroy = function () {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/];
            }); });
        };
        /**
         * @zh
         * 加载json文件
         *
         * @param jpPath - json文件包路径
         */
        PackLoader.prototype.loadJson = function (jpPath) {
            return lcc.asset.loadJson(jpPath, this._bundle);
        };
        /**
         * @zh
         * 加载音频
         *
         * @param apPath - 音频文件包路径
         */
        PackLoader.prototype.loadAudio = function (apPath) {
            return lcc.asset.loadAudio(apPath, this._bundle);
        };
        /**
         * @zh
         * 加载预制件
         *
         * @param ppPath 预制件包路径
         */
        PackLoader.prototype.loadPrefab = function (ppPath) {
            return lcc.asset.loadPrefab(ppPath, this._bundle);
        };
        /**
         * @zh
         * 加载精灵帧
         *
         * @param sfpPath 精灵帧包路径
         */
        PackLoader.prototype.loadSpriteFrame = function (sfpPath) {
            return lcc.asset.loadSpriteFrame(sfpPath, this._bundle);
        };
        /**
         * @zh
         * 加载ttf字体
         *
         * @param ttfpPath - 字体ttf文件包路径
         */
        PackLoader.prototype.loadTTFFont = function (ttfpPath) {
            return lcc.asset.loadTTFFont(ttfpPath, this._bundle);
        };
        /**
         * @zh
         * 获得资源的url
         *
         * @param apPath 资源文件包路径
         */
        PackLoader.prototype.getAssetUrl = function (apPath) {
            return lcc.asset.getAssetUrl(apPath, this._bundle);
        };
        return PackLoader;
    }());
    lcc.PackLoader = PackLoader;
})(lcc || (lcc = {}));
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
/// <reference path="../base/lcc.ts" />
/// <reference path="../base/state.ts" />
/// <reference path="../utils/js.ts" />
var lcc;
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
/// <reference path="../base/lcc.ts" />
/// <reference path="../base/state.ts" />
/// <reference path="../utils/js.ts" />
(function (lcc) {
    var TAG = "lcc/prefab/node-pools.ts";
    /**
     * @zh
     * 节点池表
     */
    var NodePools = /** @class */ (function () {
        /**
         * 构造数据库管理器
         */
        function NodePools() {
            var _this = this;
            /**
             * @zh
             * 节点池表
             */
            this._pools = lcc.js.createMap();
            lcc.state.on('initialize', function () {
                lcc.doing.stateInitialize.in(function () {
                    _this._pools = lcc.js.createMap();
                });
            });
        }
        /**
         * @zh
         * 从对象池中获得节点
         *
         * @param prefab - 预制资源
         * @param name - 可选，自定义名称
         */
        NodePools.prototype.getNode = function (prefab, name) {
            name = name || prefab.data.name;
            var node = null;
            if (this._pools.hasOwnProperty(name)) {
                var pool = this._pools[name];
                if (pool.size() > 0) {
                    node = pool.get();
                }
                else {
                    node = cc.instantiate(prefab);
                }
            }
            else {
                var pool = new cc.NodePool();
                this._pools[name] = pool;
                node = cc.instantiate(prefab);
            }
            return node;
        };
        /**
         * @zh
         * 将节点放回对象池中
         *
         * @param node - 节点对象
         * @param name - 可选，自定义名称
         */
        NodePools.prototype.putNode = function (node, name) {
            name = name || node.name;
            var pool = null;
            if (this._pools.hasOwnProperty(name)) {
                pool = this._pools[name];
            }
            else {
                pool = new cc.NodePool();
                this._pools[name] = pool;
            }
            pool.put(node);
        };
        /**
         * @zh
         * 根据名称清空对象池
         *
         * @param name - 名称
         */
        NodePools.prototype.clearPool = function (name) {
            if (this._pools.hasOwnProperty(name)) {
                var pool = this._pools[name];
                pool.clear();
            }
        };
        /**
         * @zh
         * 清空所有对象池
         */
        NodePools.prototype.clearAllPools = function () {
            for (var _i = 0, _a = Object.keys(this._pools); _i < _a.length; _i++) {
                var name_3 = _a[_i];
                this.clearPool(name_3);
            }
        };
        return NodePools;
    }());
    ;
    /**
     * @zh
     * 节点池表对象
     */
    lcc.nodePools = new NodePools();
})(lcc || (lcc = {}));
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
var lcc;
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
(function (lcc) {
    var TAG = "lcc/prefab/prefab-base.ts";
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    /**
     * @zh
     * 预制体基类
     */
    var PrefabBase = /** @class */ (function (_super) {
        __extends(PrefabBase, _super);
        function PrefabBase() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * @zh
             * 预制体名称
             */
            _this._prefabName = null;
            /**
             * @zh
             * 预制体根节点
             */
            _this._rootNode = null;
            return _this;
        }
        /**
         * @zh
         * 设置预制体名称
         *
         * @param wname - 预制体名称
         */
        PrefabBase.prototype._setPrefabName = function (pname) {
            this._prefabName = pname;
        };
        /**
         * @zh
         * 获得预制体名称
         */
        PrefabBase.prototype.getPrefabName = function () {
            return this._prefabName || this.node.name;
        };
        /**
         * @zh
         * 设置预制体根节点
         *
         * @param node - 根节点
         */
        PrefabBase.prototype._setRootNode = function (node) {
            this._rootNode = node;
        };
        /**
         * @zh
         * 获得预制体根节点
         */
        PrefabBase.prototype.getRootNode = function () {
            return this._rootNode;
        };
        PrefabBase = __decorate([
            ccclass("lcc.PrefabBase")
        ], PrefabBase);
        return PrefabBase;
    }(cc.Component));
    lcc.PrefabBase = PrefabBase;
})(lcc || (lcc = {}));
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
var lcc;
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
(function (lcc) {
    var TAG = "lcc/prefab/prefab-bind.ts";
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
    var PrefabBindConfig = /** @class */ (function () {
        function PrefabBindConfig() {
            this.node = null;
            this.prefab = "";
            this.advance = false;
            this.key = "";
            this.priority = 0;
            this.pool = false;
        }
        __decorate([
            property({
                type: cc.Node,
                tooltip: "绑定的节点"
            })
        ], PrefabBindConfig.prototype, "node", void 0);
        __decorate([
            property({
                tooltip: "绑定的预制体"
            })
        ], PrefabBindConfig.prototype, "prefab", void 0);
        __decorate([
            property({
                tooltip: "高级选项",
            })
        ], PrefabBindConfig.prototype, "advance", void 0);
        __decorate([
            property({
                tooltip: "重定义引用的键",
                visible: function () {
                    return this.advance;
                }
            })
        ], PrefabBindConfig.prototype, "key", void 0);
        __decorate([
            property({
                tooltip: "UI优先级",
                visible: function () {
                    return this.advance;
                }
            })
        ], PrefabBindConfig.prototype, "priority", void 0);
        __decorate([
            property({
                tooltip: "池中分配",
                visible: function () {
                    return this.advance;
                }
            })
        ], PrefabBindConfig.prototype, "pool", void 0);
        PrefabBindConfig = __decorate([
            ccclass("lcc.PrefabBindConfig")
        ], PrefabBindConfig);
        return PrefabBindConfig;
    }());
    /**
     * @zh
     * 预制体绑定
     */
    var PrefabBind = /** @class */ (function (_super) {
        __extends(PrefabBind, _super);
        function PrefabBind() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.prefabBinds = [];
            /**
             * @zh
             * 绑定配置表
             */
            _this._bindConfigs = null;
            /**
             * @zh
             * 预制体表
             */
            _this._prefabs = null;
            return _this;
        }
        /**
         * @zh
         * 扩展加载
         */
        PrefabBind.prototype.onLoad = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _i, _a, wd, name_4, prefab;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this._bindConfigs = lcc.js.createMap();
                            this._prefabs = lcc.js.createMap();
                            _i = 0, _a = this.prefabBinds;
                            _b.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                            wd = _a[_i];
                            name_4 = wd.advance ? wd.key : wd.prefab;
                            this._bindConfigs[name_4] = wd;
                            return [4 /*yield*/, lcc.prefabMgr.createPrefab(wd.prefab, wd.advance ? wd.pool : null)];
                        case 2:
                            prefab = _b.sent();
                            if (prefab) {
                                prefab.node.parent = wd.node;
                                this._prefabs[name_4] = prefab;
                                if (wd.advance) {
                                    prefab.node.zIndex = wd.priority;
                                }
                            }
                            _b.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 扩展销毁
         */
        PrefabBind.prototype.onDestroy = function () {
            for (var name_5 in this._prefabs) {
                var prefab = this._prefabs[name_5];
                var config = this._bindConfigs[name_5];
                lcc.prefabMgr.releasePrefab(prefab, config.pool);
            }
            this._prefabs = null;
            this._bindConfigs = null;
        };
        /**
         * @zh
         * 获得预制体
         *
         * @param key - 键
         */
        PrefabBind.prototype.getPrefab = function (key) {
            return this._prefabs[key];
        };
        __decorate([
            property({
                type: [PrefabBindConfig],
                tooltip: "预制体绑定配置"
            })
        ], PrefabBind.prototype, "prefabBinds", void 0);
        PrefabBind = __decorate([
            ccclass("lcc.PrefabBind"),
            menu("i18n:lcc-framework.menu-extension/PrefabBind")
        ], PrefabBind);
        return PrefabBind;
    }(cc.Component));
    lcc.PrefabBind = PrefabBind;
})(lcc || (lcc = {}));
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
/// <reference path="../base/lcc.ts" />
/// <reference path="../base/state.ts" />
/// <reference path="../utils/js.ts" />
/// <reference path="./node-pools.ts" />
var lcc;
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
/// <reference path="../base/lcc.ts" />
/// <reference path="../base/state.ts" />
/// <reference path="../utils/js.ts" />
/// <reference path="./node-pools.ts" />
(function (lcc) {
    var TAG = "lcc/prefab/prefab-manager.ts";
    /**
     * @zh
     * 索引路径
     */
    var INDEXPATH;
    (function (INDEXPATH) {
        /**
         * @zh
         * 预制体
         */
        INDEXPATH.PREFAB = "prefab";
    })(INDEXPATH = lcc.INDEXPATH || (lcc.INDEXPATH = {}));
    ;
    /**
     * @zh
     * 预制体实例
     */
    var PREFAB_INSTANCE = "lcc_Prefab";
    /**
     * @zh
     * 预制体管理器
     */
    var PrefabManager = /** @class */ (function () {
        /**
         * @zh
         * 构造函数
         */
        function PrefabManager() {
            var _this = this;
            /**
             * @zh
             * 预制体配置表
             */
            this._prefabConfigs = lcc.js.createMap();
            /**
             * @zh
             * 预制体实例，用于在预制体上挂配置
             */
            this._prefabInstances = lcc.js.createMap();
            /**
             * @zh
             * 预制体实例节点
             */
            this._instanceRoot = null;
            lcc.state.on('initialize', function () {
                lcc.doing.stateInitialize.in(function () {
                    _this._prefabConfigs = lcc.js.createMap();
                    _this._prefabInstances = lcc.js.createMap();
                    _this._instanceRoot = null;
                    lcc.indexMgr.on("indexes_removed", _this.onIndexesRemoved, _this);
                });
            });
            lcc.state.on('release', function () {
                lcc.doing.stateRelease.in(function () {
                    lcc.indexMgr.targetOff(_this);
                });
            });
        }
        /**
         * @zh
         * 当移除索引
         *
         * @internal
         */
        PrefabManager.prototype.onIndexesRemoved = function () {
            this.releaseInvalidPrefabConfigs();
        };
        /**
         * @zh
         * 释放无效预制体
         */
        PrefabManager.prototype.releaseInvalidPrefabConfigs = function () {
            var prefabfiles = lcc.indexMgr.getIndex(INDEXPATH.PREFAB) || lcc.js.createMap();
            for (var _i = 0, _a = Object.keys(this._prefabConfigs); _i < _a.length; _i++) {
                var pname = _a[_i];
                if (!prefabfiles[pname]) {
                    this.releasePrefabConfig(pname);
                }
            }
        };
        /**
         * @zh
         * 释放预制体
         *
         * @param pname - 预制体名称
         * @param preload - 预加载也释放
         */
        PrefabManager.prototype.releasePrefabConfig = function (pname, preload) {
            if (preload === void 0) { preload = false; }
            var prefabconf = this._prefabConfigs[pname];
            if (prefabconf && (!prefabconf.preload || preload)) {
                prefabconf.prefab.decRef();
                delete this._prefabConfigs[pname];
                lcc.nodePools.clearPool(pname);
            }
        };
        /**
         * @zh
         * 释放预制体数组
         *
         * @param pnames - 预制体数组
         * @param preload - 预加载也释放
         */
        PrefabManager.prototype.releasePrefabConfigs = function (pnames, preload) {
            if (preload === void 0) { preload = false; }
            for (var _i = 0, pnames_1 = pnames; _i < pnames_1.length; _i++) {
                var pname = pnames_1[_i];
                this.releasePrefabConfig(pname, preload);
            }
        };
        /**
         * @zh
         * 预加载预制体
         *
         * @param pname - 预制体名称
         */
        PrefabManager.prototype.preloadPrefabConfig = function (pname) {
            return __awaiter(this, void 0, void 0, function () {
                var prefabconf;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getPrefabConfig(pname)];
                        case 1:
                            prefabconf = _a.sent();
                            if (prefabconf) {
                                prefabconf.preload = true;
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 预加载预制体数组
         *
         * @param pnames - 预制体数组
         * @param progress - 进度
         */
        PrefabManager.prototype.preloadPrefabConfigs = function (pnames, progress) {
            if (progress === void 0) { progress = function (p) { }; }
            return __awaiter(this, void 0, void 0, function () {
                var i, len;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            i = 0, len = pnames.length;
                            _a.label = 1;
                        case 1:
                            if (!(i < len)) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.preloadPrefabConfig(pnames[i])];
                        case 2:
                            _a.sent();
                            progress((i + 1) / len);
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 获得预制体配置
         *
         * @param pname 预制体名称
         */
        PrefabManager.prototype.getPrefabConfig = function (pname) {
            return __awaiter(this, void 0, void 0, function () {
                var prefabConf, config, prefab;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            prefabConf = this._prefabConfigs[pname];
                            if (!!prefabConf) return [3 /*break*/, 2];
                            config = lcc.indexMgr.getIndex(INDEXPATH.PREFAB + "/" + pname);
                            if (!config) return [3 /*break*/, 2];
                            return [4 /*yield*/, lcc.packMgr.loadPrefab(config.file)];
                        case 1:
                            prefab = _a.sent();
                            prefabConf = {
                                prefab: prefab,
                                config: config,
                            };
                            prefab.addRef();
                            this._prefabConfigs[pname] = prefabConf;
                            _a.label = 2;
                        case 2: return [2 /*return*/, prefabConf];
                    }
                });
            });
        };
        /**
         * @zh
         * 创建预制体
         *
         * @param pname - 预制体名称
         * @param pool - 在池中创建
         */
        PrefabManager.prototype.createPrefab = function (pname, pool) {
            return __awaiter(this, void 0, void 0, function () {
                var prefabconf, node, prefab;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getPrefabConfig(pname)];
                        case 1:
                            prefabconf = _a.sent();
                            if (prefabconf) {
                                if (pool == null) {
                                    pool = prefabconf.config.pool;
                                }
                                node = null;
                                if (pool) {
                                    node = lcc.nodePools.getNode(prefabconf.prefab, pname);
                                }
                                else {
                                    node = cc.instantiate(prefabconf.prefab);
                                }
                                prefab = node.getComponent(lcc.PrefabBase) || node.getComponentInChildren(lcc.PrefabBase);
                                if (!prefab) {
                                    prefab = node.addComponent(lcc.PrefabBase);
                                }
                                prefab._setRootNode(node);
                                prefab._setPrefabName(pname);
                                return [2 /*return*/, prefab];
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 释放预制体到池中
         *
         * @param prefab - 预制体对象
         * @param pool - 在池中创建
         */
        PrefabManager.prototype.releasePrefab = function (prefab, pool) {
            var pname = prefab.getPrefabName();
            if (pool == null) {
                var prefabconf = this._prefabConfigs[pname];
                if (prefabconf) {
                    pool = prefabconf.config.pool;
                }
            }
            if (pool) {
                lcc.nodePools.putNode(prefab.getRootNode(), pname);
            }
            else {
                prefab.getRootNode().destroy();
            }
        };
        /**
         * @zh
         * 获得预制体实例，一般用于获得在预制体上放的配置
         *
         * @param pname - 预制体名称
         */
        PrefabManager.prototype.getPrefabInstance = function (pname) {
            return __awaiter(this, void 0, void 0, function () {
                var prefab;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            prefab = this._prefabInstances[pname];
                            if (!!prefab) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.createPrefab(pname)];
                        case 1:
                            prefab = _a.sent();
                            if (!this._instanceRoot) {
                                this._instanceRoot = new cc.Node(PREFAB_INSTANCE);
                                cc.director.getScene().addChild(this._instanceRoot);
                                cc.game.addPersistRootNode(this._instanceRoot);
                            }
                            prefab.getRootNode().parent = this._instanceRoot;
                            this._prefabInstances[pname] = prefab;
                            _a.label = 2;
                        case 2: return [2 /*return*/, prefab];
                    }
                });
            });
        };
        /**
         * @zh
         * 释放预制体实例，一般用于释放在预制体上放的配置
         *
         * @param pname - 预制体名称
         */
        PrefabManager.prototype.releasePrefabInstance = function (pname) {
            var prefab = this._prefabInstances[pname];
            if (prefab) {
                this.releasePrefab(prefab);
                delete this._prefabInstances[pname];
            }
        };
        return PrefabManager;
    }());
    ;
    /**
     * @zh
     * 预制体管理器对象
     */
    lcc.prefabMgr = new PrefabManager();
})(lcc || (lcc = {}));
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
var lcc;
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
(function (lcc) {
    var TAG = "lcc/scene/scene-base.ts";
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    /**
     * @zh
     * 场景基类
     */
    var SceneBase = /** @class */ (function (_super) {
        __extends(SceneBase, _super);
        function SceneBase() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * @zh
             * 捕捉按键
             */
            _this.catchKeys = false;
            /**
             * @zh
             * 场景名称
             */
            _this._sceneName = null;
            return _this;
        }
        /**
         * @zh
         * 安装场景
         */
        SceneBase.prototype.onLoad = function () {
            if (this.catchKeys) {
                cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.OnCatchKeyEvent, this);
            }
        };
        /**
         * @zh
         * 场景销毁
         */
        SceneBase.prototype.onDestroy = function () {
            if (this.catchKeys) {
                cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.OnCatchKeyEvent, this);
            }
        };
        /**
         * @zh
         * 当场景场景加载<br/>
         * 子类需要可以重写这个函数
         *
         * @param sceneArgs - 参数
         */
        SceneBase.prototype.onSceneLoad = function () {
            var sceneArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                sceneArgs[_i] = arguments[_i];
            }
        };
        /**
         * @zh
         * 设置场景名称
         *
         * @param scenename - 设置场景名
         */
        SceneBase.prototype._setSceneName = function (scenename) {
            this._sceneName = scenename;
        };
        /**
         * @zh
         * 获得场景名称
         */
        SceneBase.prototype.getSceneName = function () {
            if (!this._sceneName) {
                this._sceneName = cc.director.getScene().name;
            }
            return this._sceneName;
        };
        /**
         * @zh
         * 当捕捉到键盘事件
         *
         * @param event - 按键值
         */
        SceneBase.prototype.OnCatchKeyEvent = function (event) {
            if (!lcc.uiMgr.onKeyPressed(event.keyCode)) {
                this.onKeyPressed(event.keyCode);
            }
        };
        /**
         * @zh
         * 制作场景快照<br/>
         * 如果场景可以保存数据，可以重写这个函数
         */
        SceneBase.prototype.makeSnapshot = function () {
            return {
                sceneName: this.getSceneName(),
                sceneArgs: []
            };
        };
        /**
         * @zh
         * 当按键按下
         */
        SceneBase.prototype.onKeyPressed = function (keyCode) { return false; };
        __decorate([
            property({
                tooltip: "启动按键捕捉"
            })
        ], SceneBase.prototype, "catchKeys", void 0);
        SceneBase = __decorate([
            ccclass("lcc.SceneBase")
        ], SceneBase);
        return SceneBase;
    }(cc.Component));
    lcc.SceneBase = SceneBase;
})(lcc || (lcc = {}));
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
/// <reference path="../base/lcc.ts" />
/// <reference path="../base/state.ts" />
var lcc;
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
/// <reference path="../base/lcc.ts" />
/// <reference path="../base/state.ts" />
(function (lcc) {
    var TAG = "lcc/scene/scene-manager.ts";
    /**
     * @zh
     * 场景管理器
     */
    var SceneManager = /** @class */ (function () {
        /**
         * @zh
         * 构造函数
         */
        function SceneManager() {
            var _this = this;
            /**
             * @zh
             * 场景栈
             */
            this._sceneStack = [];
            /**
             * @zh
             * 当前场景
             */
            this._currentScene = null;
            lcc.state.on('initialize', function () {
                lcc.doing.stateInitialize.in(function () {
                    _this._sceneStack = [];
                    _this._currentScene = null;
                });
            });
        }
        /**
         * @zh
         * 检查当前场景<br/>
         * 搜索场景的[[SceneBase]]脚本组件，如果不存在就会在第一个子节点上挂载一个新的
         */
        SceneManager.prototype.checkCurrentScene = function () {
            if (!this._currentScene) {
                var snode = cc.director.getScene();
                var scene = snode.getComponentInChildren(lcc.SceneBase);
                if (!scene) {
                    var node = (snode.children[0]);
                    if (node) {
                        scene = node.addComponent(lcc.SceneBase);
                    }
                    else {
                        cc.error(TAG, "scene must have nodes");
                    }
                }
                scene._setSceneName(snode.name);
                this._currentScene = scene;
            }
        };
        /**
         * @zh
         * 获得当前场景
         */
        SceneManager.prototype.getCurrentScene = function () {
            this.checkCurrentScene();
            return this._currentScene;
        };
        /**
         * @zh
         * 切换场景
         *
         * @param sname - 场景名
         * @param sargs - 快照参数
         */
        SceneManager.prototype._switchScene = function (sname) {
            var sargs = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                sargs[_i - 1] = arguments[_i];
            }
            var self = this;
            lcc.uiMgr.closeAllUI();
            cc.director.loadScene(sname, function (err, snode) {
                if (!err && snode) {
                    var scene = snode.getComponentInChildren(lcc.SceneBase);
                    if (!scene) {
                        var node = (snode.children[0]);
                        if (node) {
                            scene = node.addComponent(lcc.SceneBase);
                        }
                        else {
                            cc.error(TAG, "scene must have nodes");
                        }
                    }
                    scene._setSceneName(snode.name);
                    self._currentScene = scene;
                    scene.onSceneLoad.apply(scene, sargs);
                }
                else {
                    cc.error(TAG, "scene " + sname + " switch failure");
                }
            });
        };
        /**
         * @zh
         * 切换场景
         *
         * @param sname - 场景名
         * @param sargs - 快照参数
         */
        SceneManager.prototype.switchScene = function (sname) {
            var sargs = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                sargs[_i - 1] = arguments[_i];
            }
            this._sceneStack = [];
            this._switchScene.apply(this, __spreadArray([sname], sargs));
        };
        /**
         * @zh
         * 制作当前场景的快照
         */
        SceneManager.prototype.makeSnapshot = function () {
            var curscene = this.getCurrentScene();
            if (curscene) {
                return curscene.makeSnapshot();
            }
        };
        /**
         * @zh
         * 恢复场景快照
         *
         * @param snapshot - 场景快照
         */
        SceneManager.prototype.resumeSnapshot = function (snapshot) {
            if (snapshot) {
                this._switchScene(snapshot.sceneName, snapshot.sceneArgs);
            }
        };
        /**
         * @zh
         * 压入场景到栈
         *
         * @param sname - 场景名
         * @param sargs - 快照参数
         */
        SceneManager.prototype.pushScene = function (sname) {
            var sargs = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                sargs[_i - 1] = arguments[_i];
            }
            var curscene = this.getCurrentScene();
            if (curscene) {
                this._sceneStack.push(curscene.makeSnapshot());
            }
            this._switchScene.apply(this, __spreadArray([sname], sargs));
        };
        /**
         * @zh
         * 弹出栈中的场景
         */
        SceneManager.prototype.popScene = function () {
            var scenep = this._sceneStack.pop();
            if (scenep) {
                this._switchScene(scenep.sceneName, scenep.sceneArgs);
            }
        };
        /**
         * @zh
         * 获得场景栈
         */
        SceneManager.prototype.getSceneStack = function () {
            return this._sceneStack;
        };
        return SceneManager;
    }());
    ;
    /**
     * @zh
     * 场景管理器对象
     */
    lcc.sceneMgr = new SceneManager();
})(lcc || (lcc = {}));
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
/// <reference path="../base/lcc.ts" />
/// <reference path="../base/state.ts" />
/// <reference path="../base/doing.ts" />
/// <reference path="../utils/js.ts" />
var lcc;
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
/// <reference path="../base/lcc.ts" />
/// <reference path="../base/state.ts" />
/// <reference path="../base/doing.ts" />
/// <reference path="../utils/js.ts" />
(function (lcc) {
    var TAG = "lcc/table/table-manager.ts";
    /**
     * @zh
     * 索引路径
     */
    var INDEXPATH;
    (function (INDEXPATH) {
        /**
         * @zh
         * 数据表
         */
        INDEXPATH.TABLE = "table";
    })(INDEXPATH = lcc.INDEXPATH || (lcc.INDEXPATH = {}));
    ;
    /**
     * @zh
     * 自动加载数据表<br/>
     * 如果为true，那么会在加载游戏包的时候加载所有数据表。
     */
    lcc.LOADTABLE_AUTO = true;
    /**
     * @zh
     * 数据表对象映射表<br/>
     */
    lcc.TABLES = lcc.js.createMap();
    /**
     * @zh
     * 数据表管理器<br/>
     * 主要用于管理游戏数据表，这些表一般由策划配置<br/>
     * 数据表的合并功能
     */
    var TableManager = /** @class */ (function () {
        /**
         * @zh
         * 构造函数
         */
        function TableManager() {
            var _this = this;
            /**
             * @zh
             * 数据表加载映射表
             */
            this._loadMap = lcc.js.createMap();
            lcc.state.on('initialize', function () {
                lcc.doing.stateInitialize.in(function () {
                    _this._loadMap = lcc.js.createMap();
                    lcc.indexMgr.on("indexes_removed", _this.onIndexesRemoved, _this);
                    lcc.indexMgr.on("indexes_loaded_" + INDEXPATH.TABLE, _this.onIndexesLoaded, _this);
                });
            });
            lcc.state.on('release', function () {
                lcc.doing.stateRelease.in(function () {
                    lcc.indexMgr.targetOff(_this);
                    for (var _i = 0, _a = Object.keys(lcc.TABLES); _i < _a.length; _i++) {
                        var tname = _a[_i];
                        delete lcc.TABLES[tname];
                    }
                });
            });
        }
        /**
         * @zh
         * 当移除索引
         *
         * @internal
         */
        TableManager.prototype.onIndexesRemoved = function () {
            lcc.doing.indexLoad.addCount();
            for (var _i = 0, _a = Object.keys(lcc.TABLES); _i < _a.length; _i++) {
                var tname = _a[_i];
                delete lcc.TABLES[tname];
            }
            this.onIndexesLoaded(lcc.indexMgr.getIndex(INDEXPATH.TABLE));
            lcc.doing.indexLoad.decCount();
        };
        /**
         * @zh
         * 当加载索引
         *
         * @param ivalue 索引对象
         *
         * @internal
         */
        TableManager.prototype.onIndexesLoaded = function (ivalue) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _i, tname, tfiles, _c, tfiles_2, tfile;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            lcc.doing.indexLoad.addCount();
                            if (!ivalue) return [3 /*break*/, 7];
                            _a = [];
                            for (_b in ivalue)
                                _a.push(_b);
                            _i = 0;
                            _d.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 7];
                            tname = _a[_i];
                            if (!(lcc.LOADTABLE_AUTO || this._loadMap[tname])) return [3 /*break*/, 6];
                            this._loadMap[tname] = true;
                            tfiles = ivalue[tname];
                            _c = 0, tfiles_2 = tfiles;
                            _d.label = 2;
                        case 2:
                            if (!(_c < tfiles_2.length)) return [3 /*break*/, 5];
                            tfile = tfiles_2[_c];
                            return [4 /*yield*/, this.loadTableFile(tfile)];
                        case 3:
                            _d.sent();
                            _d.label = 4;
                        case 4:
                            _c++;
                            return [3 /*break*/, 2];
                        case 5:
                            this.sortListTable(tname);
                            _d.label = 6;
                        case 6:
                            _i++;
                            return [3 /*break*/, 1];
                        case 7:
                            lcc.doing.indexLoad.decCount();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 加载数据表
         *
         * @param tgPath - 数据表文件全局路径
         */
        TableManager.prototype.loadTableFile = function (tgPath) {
            return __awaiter(this, void 0, void 0, function () {
                var table;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, lcc.packMgr.loadJson(tgPath)];
                        case 1:
                            table = _a.sent();
                            if (!table) {
                                cc.error(TAG, "database file " + tgPath + " read fail !!!");
                            }
                            else {
                                lcc.js.mergeMap(lcc.TABLES, table, { tag: TAG, source: tgPath });
                                lcc.DEBUG.TABLE && cc.log(TAG, "load table " + JSON.stringify(table) + " from " + tgPath);
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 索引具体值
         *
         * @param map - 索引对象
         * @param index - 索引
         */
        TableManager.prototype.indexValue = function (map, index) {
            if (typeof index == 'string') {
                return lcc.js.getMapValue(map, index, '.');
            }
            else {
                return map[index];
            }
        };
        /**
         * @zh
         * 排序列表类型数据表
         *
         * @param tname 数据表名称
         */
        TableManager.prototype.sortListTable = function (tname) {
            var _this = this;
            var sortMap = lcc.TABLES['#listSort'];
            if (sortMap) {
                var table = lcc.TABLES[tname];
                var sortInfo_1 = sortMap[tname];
                if (table && sortInfo_1) {
                    if (sortInfo_1.key != null) {
                        if (sortInfo_1.sort == 'up') {
                            table.sort(function (a, b) { return _this.indexValue(a, sortInfo_1.key) - _this.indexValue(b, sortInfo_1.key); });
                        }
                        else {
                            table.sort(function (a, b) { return _this.indexValue(b, sortInfo_1.key) - _this.indexValue(a, sortInfo_1.key); });
                        }
                    }
                    else {
                        if (sortInfo_1.sort == 'up') {
                            table.sort(function (a, b) { return a - b; });
                        }
                        else {
                            table.sort(function (a, b) { return b - a; });
                        }
                    }
                }
            }
        };
        /**
         * @zh
         * 获得所有表
         */
        TableManager.prototype.getTables = function () {
            return lcc.TABLES;
        };
        /**
         * @zh
         * 获得指定表<br/>
         * 在[[LOADTABLE_AUTO]]为false时。如果表未加载，会优先加载指定表。
         *
         * @param tname - 数据表名称
         */
        TableManager.prototype.getTable = function (tname) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.loadTable(tname)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, lcc.TABLES[tname]];
                    }
                });
            });
        };
        /**
         * @zh
         * 手动加载数据表<br/>
         * 只在[[LOADTABLE_AUTO]]为false下有效
         *
         * @param tnames - 数据表名称数组
         */
        TableManager.prototype.loadTable = function () {
            var tnames = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                tnames[_i] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                var _a, tnames_1, tname, tfiles, _b, tfiles_3, tfile;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!!lcc.LOADTABLE_AUTO) return [3 /*break*/, 7];
                            _a = 0, tnames_1 = tnames;
                            _c.label = 1;
                        case 1:
                            if (!(_a < tnames_1.length)) return [3 /*break*/, 7];
                            tname = tnames_1[_a];
                            if (!!this._loadMap[tname]) return [3 /*break*/, 6];
                            this._loadMap[tname] = true;
                            tfiles = lcc.indexMgr.getIndex(INDEXPATH.TABLE + "/" + tname);
                            if (!tfiles) return [3 /*break*/, 6];
                            _b = 0, tfiles_3 = tfiles;
                            _c.label = 2;
                        case 2:
                            if (!(_b < tfiles_3.length)) return [3 /*break*/, 5];
                            tfile = tfiles_3[_b];
                            return [4 /*yield*/, this.loadTableFile(tfile)];
                        case 3:
                            _c.sent();
                            _c.label = 4;
                        case 4:
                            _b++;
                            return [3 /*break*/, 2];
                        case 5:
                            this.sortListTable(tname);
                            _c.label = 6;
                        case 6:
                            _a++;
                            return [3 /*break*/, 1];
                        case 7: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 手动移除数据表<br/>
         * 只在[[LOADTABLE_AUTO]]为false下有效
         *
         * @param tnames - 数据表名称数组
         */
        TableManager.prototype.removeTable = function () {
            var tnames = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                tnames[_i] = arguments[_i];
            }
            if (!lcc.LOADTABLE_AUTO) {
                for (var _a = 0, tnames_2 = tnames; _a < tnames_2.length; _a++) {
                    var tname = tnames_2[_a];
                    delete lcc.TABLES[tname];
                    delete this._loadMap[tname];
                }
            }
        };
        /**
         * @zh
         * 手动移除移除所有数据表<br/>
         * 只在[[LOADTABLE_AUTO]]为false下有效
         */
        TableManager.prototype.removeAllTables = function () {
            if (!lcc.LOADTABLE_AUTO) {
                this.removeTable.apply(this, Object.keys(lcc.TABLES));
            }
        };
        return TableManager;
    }());
    ;
    /**
     * @zh
     * 数据表管理对象
     */
    lcc.tableMgr = new TableManager();
    lcc.variable.set('TABLE', function (path) {
        return lcc.js.getMapValue(lcc.TABLES, path);
    });
})(lcc || (lcc = {}));
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
/// <reference path="../base/lcc.ts" />
/// <reference path="../base/state.ts" />
/// <reference path="../utils/js.ts" />
var lcc;
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
/// <reference path="../base/lcc.ts" />
/// <reference path="../base/state.ts" />
/// <reference path="../utils/js.ts" />
(function (lcc) {
    var TAG = "lcc/timer/timer-manager.ts";
    /**
     * @zh
     * 默认定时器组
     */
    lcc.DEFAULT_TIMER_GROUP = "default";
    /**
    /**
     * @zh
     * 定时器时间片，秒
     */
    lcc.TIMER_TIMESLICE = 1;
    /**
     * @zh
     * 定时器管理器<br/>
     * 主要用于程序中所有定时器的添加、触发和移除
     */
    var TimerManager = /** @class */ (function () {
        /**
         * @zh
         * 构造函数
         */
        function TimerManager() {
            var _this = this;
            /**
             * @zh
             * 定时器实体
             */
            this._entity = null;
            /**
             * @zh
             * 任务映射表
             */
            this._taskMap = lcc.js.createMap();
            /**
             * @zh
             * 任务索引<br>
             * 如果任务没有指定`key`，就会自动分配索引
             */
            this._taskIndex = 0;
            lcc.state.on('initialize', function () {
                lcc.doing.stateInitialize.in(function () {
                    _this._entity = null;
                    _this._taskMap = lcc.js.createMap();
                    _this._taskIndex = 0;
                });
            });
            lcc.state.on('release', function () {
                lcc.doing.stateRelease.in(function () {
                    _this.removeAllTimers();
                });
            });
        }
        /**
         * @zh
         * 安装定时器实体
         */
        TimerManager.prototype.setupTimerEntity = function () {
            if (!this._entity && !lcc.js.isEmptyMap(this._taskMap)) {
                this._entity = setInterval(this.onTimeUpdate.bind(this), lcc.TIMER_TIMESLICE * 1000);
                lcc.DEBUG.TIMER && cc.log(TAG, "setupTimerEntity " + lcc.TIMER_TIMESLICE * 1000);
            }
        };
        /**
         * @zh
         * 删除定时器实体
         */
        TimerManager.prototype.deleteTimerEntity = function () {
            if (this._entity && lcc.js.isEmptyMap(this._taskMap)) {
                clearInterval(this._entity);
                this._entity = null;
                lcc.DEBUG.TIMER && cc.log(TAG, "deleteTimerEntity");
            }
        };
        /**
         * @zh
         * 时间更新函数
         */
        TimerManager.prototype.onTimeUpdate = function () {
            var change = false;
            for (var _i = 0, _a = Object.keys(this._taskMap); _i < _a.length; _i++) {
                var group = _a[_i];
                var tasks = this._taskMap[group];
                if (tasks) {
                    for (var _b = 0, _c = Object.keys(tasks); _b < _c.length; _b++) {
                        var key = _c[_b];
                        var task = tasks[key];
                        if (task) {
                            task.remainTime -= lcc.TIMER_TIMESLICE;
                            if (task.remainTime <= 0) {
                                if (task.loop) {
                                    task.remainTime = task.totalTime;
                                }
                                else {
                                    delete tasks[key];
                                    if (lcc.js.isEmptyMap(tasks)) {
                                        delete this._taskMap[group];
                                        change = true;
                                    }
                                }
                                try {
                                    task.handle(task.totalTime);
                                }
                                catch (e) {
                                    lcc.logMgr.error(TAG, "onTimeUpdate '" + group + "-" + key + "' " + e);
                                }
                            }
                        }
                    }
                }
            }
            if (change) {
                this.deleteTimerEntity();
            }
        };
        /**
         * @zh
         * 添加定时器
         *
         * @param time - 回调的时间
         * @param handle - 回调函数
         * @param key - 可选，定时器键或者定时器选项
         */
        TimerManager.prototype.addTimer = function (time, handle, key) {
            if (key === void 0) { key = {}; }
            var option;
            if (typeof key == 'string') {
                option = { key: key };
            }
            else {
                option = key;
            }
            lcc.DEBUG.TIMER && cc.log(TAG, "addTimer " + time + " " + JSON.stringify(option));
            var group = option.group || lcc.DEFAULT_TIMER_GROUP;
            var tasks = this._taskMap[group];
            if (!tasks) {
                tasks = lcc.js.createMap();
                this._taskMap[group] = tasks;
            }
            var timerKey = option.key || (this._taskIndex++).toString();
            tasks[timerKey] = {
                remainTime: time,
                handle: handle,
                loop: option.loop,
                totalTime: time,
            };
            this.setupTimerEntity();
            return timerKey;
        };
        /**
         * @zh
         * 移除定时器<br/>
         * 如果选项不传入`key`，那么会移除整个定时器分组上的所有定时器
         *
         * @param key - 定时器键或者定时器选项，如果使用选项则必须存在group，否则不生效
         */
        TimerManager.prototype.removeTimer = function (key) {
            var option;
            if (typeof key == 'string') {
                option = { key: key, group: lcc.DEFAULT_TIMER_GROUP };
            }
            else {
                option = key;
            }
            lcc.DEBUG.TIMER && cc.log(TAG, "removeTimer " + JSON.stringify(option));
            if (option.group) {
                var timerKey = option.key;
                var remainTime = 0;
                var tasks = this._taskMap[option.group];
                if (tasks) {
                    if (timerKey) {
                        var task = tasks[timerKey];
                        if (task) {
                            delete tasks[timerKey];
                            if (lcc.js.isEmptyMap(tasks)) {
                                delete this._taskMap[option.group];
                            }
                            remainTime = task.remainTime;
                        }
                        lcc.DEBUG.TIMER && cc.log(TAG, "removeTimer " + JSON.stringify(option) + " success");
                    }
                    else {
                        delete this._taskMap[option.group];
                        lcc.DEBUG.TIMER && cc.log(TAG, "removeTimer Group " + JSON.stringify(option) + " success");
                    }
                }
                this.deleteTimerEntity();
                return remainTime;
            }
        };
        /**
         * 移除定时器
         */
        TimerManager.prototype.removeAllTimers = function () {
            for (var _i = 0, _a = Object.keys(this._taskMap); _i < _a.length; _i++) {
                var group = _a[_i];
                this.removeTimer({ group: group });
            }
        };
        /**
         * @zh
         * 睡眠指定秒数
         *
         * @param seconds - 秒数
         */
        TimerManager.prototype.sleep = function (seconds) {
            var _this = this;
            return new Promise(function (resolve) {
                _this.addTimer(seconds, resolve, { group: 'lcc.TimerManager.sleep' });
            });
        };
        return TimerManager;
    }());
    /**
     * @zh
     * 定时器管理器对象
     */
    lcc.timerMgr = new TimerManager();
})(lcc || (lcc = {}));
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
var lcc;
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
(function (lcc) {
    var TAG = "lcc/ui/ui-base.ts";
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    /**
     * @zh
     * UI基类
     */
    var UIBase = /** @class */ (function (_super) {
        __extends(UIBase, _super);
        function UIBase() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * @zh
             * 根节点
             */
            _this._rootNode = null;
            /**
             * @zh
             * UI动画对象
             */
            _this._uiAnimation = null;
            /**
             * @zh
             * UI名称
             */
            _this._uiName = null;
            /**
             * @zh
             * 固定优先级
             */
            _this._fixedPriority = null;
            /**
             * @zh
             * 画布对象
             */
            _this._canvas = null;
            return _this;
        }
        /**
         * @zh
         * 设置根节点
         *
         * @param node - 节点对象
         */
        UIBase.prototype._setRootNode = function (node) {
            this._rootNode = node;
        };
        /**
         * @zh
         * 设置是否激活
         *
         * @param active - 是否激活
         */
        UIBase.prototype.setActive = function (active) {
            this._rootNode.active = active;
        };
        /**
         * @zh
         * 设置UI名称
         *
         * @param uiname - UI名称
         */
        UIBase.prototype._setUIName = function (uiname) {
            this._uiName = uiname;
        };
        /**
         * @zh
         * 获得UI名称
         */
        UIBase.prototype.getUIName = function () {
            return this._uiName;
        };
        /**
         * @zh
         * 设置固定优先级
         *
         * @param priority - 优先级
         */
        UIBase.prototype.setFixedPriority = function (priority) {
            this._fixedPriority = priority;
        };
        /**
         * @zh
         * 获得固定优先级
         */
        UIBase.prototype.getFixedPriority = function () {
            return this._fixedPriority;
        };
        /**
         * @zh
         * 设置画布对象
         *
         * @param canvas - 画布对象
         */
        UIBase.prototype._setCanvas = function (canvas) {
            this._canvas = canvas;
        };
        /**
         * @zh
         * 获得画布对象
         */
        UIBase.prototype.getCanvas = function () {
            return this._canvas;
        };
        /**
         * @zh
         * 关闭当前UI
         */
        UIBase.prototype.closeSelf = function (release) {
            if (release === void 0) { release = false; }
            return lcc.uiMgr.closeUI(this.getUIName(), release);
        };
        /**
         * @zh
         * UI创建，内部使用
         */
        UIBase.prototype._onUICreate = function () {
            this._uiAnimation = this.getComponent('lcc.UIAnimation');
            this.onUICreate();
        };
        /**
         * @zh
         * 播放UI动画
         *
         * @param aType 动画类型
         */
        UIBase.prototype.playUIAnimation = function (aType) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this._uiAnimation) return [3 /*break*/, 2];
                            return [4 /*yield*/, this._uiAnimation.play(aType)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * UI创建回调，子类中可以重写这个函数
         */
        UIBase.prototype.onUICreate = function () { };
        /**
         * @zh
         * UI打开回调，子类中可以重写这个函数
         *
         * @param args - 打开参数
         */
        UIBase.prototype.onOpen = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
        };
        /**
         * @zh
         * UI关闭回调，子类中可以重写这个函数
         */
        UIBase.prototype.onClose = function () { };
        /**
         * @zh
         * UI释放回调，子类中可以重写这个函数
         */
        UIBase.prototype.onUIRelease = function () { };
        /**
         * @zh
         * 当改变当前UI最前面，子类中可以重写这个函数
         */
        UIBase.prototype.onChangeFront = function (front) { };
        /**
         * @zh
         * 当按键按下，子类中可以重写这个函数
         */
        UIBase.prototype.onKeyPressed = function (keyCode) { return false; };
        UIBase = __decorate([
            ccclass("lcc.UIBase")
        ], UIBase);
        return UIBase;
    }(cc.Component));
    lcc.UIBase = UIBase;
})(lcc || (lcc = {}));
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
/// <reference path="./ui-base.ts" />
var lcc;
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
/// <reference path="./ui-base.ts" />
(function (lcc) {
    var TAG = "lcc/ui/ui-animation.ts";
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, menu = _a.menu;
    /**
     * @zh
     * 空动画枚举
     */
    var TempAnimtionEnum;
    (function (TempAnimtionEnum) {
        TempAnimtionEnum[TempAnimtionEnum["<None>"] = 0] = "<None>";
    })(TempAnimtionEnum = lcc.TempAnimtionEnum || (lcc.TempAnimtionEnum = {}));
    /**
     * @zh
     * UI动画组件<br/>
     * 添加到UIBase同节点上生效
     */
    var UIAnimation = /** @class */ (function (_super) {
        __extends(UIAnimation, _super);
        function UIAnimation() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * @zh
             * UI动画
             */
            _this._uiAnimation = null;
            /**
             * @zh
             * 打开动画
             */
            _this.openAnimation = TempAnimtionEnum["<None>"];
            /**
             * @zh
             * 打开动画反转
             */
            _this.openReverse = false;
            /**
             * @zh
             * 关闭动画
             */
            _this.closeAnimation = TempAnimtionEnum["<None>"];
            /**
             * @zh
             * 反转关闭动画
             */
            _this.closeReverse = false;
            return _this;
        }
        Object.defineProperty(UIAnimation.prototype, "uiAnimation", {
            get: function () {
                return this._uiAnimation;
            },
            set: function (value) {
                if (this._uiAnimation != value) {
                    this._uiAnimation = value;
                    this.updateAnimationEnum();
                }
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @zh
         * 更新动画枚举
         */
        UIAnimation.prototype.updateAnimationEnum = function () {
            if (CC_EDITOR) {
                if (this._uiAnimation) {
                    var enumMap_1 = {
                        '<None>': 0
                    };
                    this._uiAnimation.getClips().forEach(function (v, i) { enumMap_1[v.name] = i + 1; });
                    // @ts-ignore
                    cc.Class.Attr.setClassAttr(this, 'openAnimation', 'enumList', cc.Enum.getList(enumMap_1));
                    // @ts-ignore
                    cc.Class.Attr.setClassAttr(this, 'closeAnimation', 'enumList', cc.Enum.getList(enumMap_1));
                }
                else {
                    // @ts-ignore
                    cc.Class.Attr.setClassAttr(this, 'openAnimation', 'enumList', cc.Enum.getList(cc.Enum(TempAnimtionEnum)));
                    // @ts-ignore
                    cc.Class.Attr.setClassAttr(this, 'closeAnimation', 'enumList', cc.Enum.getList(cc.Enum(TempAnimtionEnum)));
                }
                if (this.node) {
                    Editor.Utils.refreshSelectedInspector('node', this.node.uuid);
                }
            }
        };
        /**
         * @zh
         * 预加载
         */
        UIAnimation.prototype.__preload = function () {
            this.updateAnimationEnum();
        };
        /**
         * @zh
         * 播放动画
         *
         * @param aType 动画类型 'open'/'close'
         */
        UIAnimation.prototype.play = function (aType) {
            var _this = this;
            return new Promise(function (resolve) {
                if (!_this._uiAnimation) {
                    resolve(null);
                }
                else {
                    var state_1 = null;
                    var duration = 0;
                    if (aType == 'open' && _this.openAnimation > 0) {
                        var clip = _this._uiAnimation.getClips()[_this.openAnimation - 1];
                        state_1 = _this._uiAnimation.getAnimationState(clip.name);
                        if (_this.openReverse) {
                            state_1.time = clip.duration;
                            state_1.speed = -1;
                        }
                        else {
                            state_1.time = 0;
                            state_1.speed = 1;
                        }
                        duration = clip.duration;
                    }
                    else if (aType == 'close' && _this.closeAnimation > 0) {
                        var clip = _this._uiAnimation.getClips()[_this.closeAnimation - 1];
                        state_1 = _this._uiAnimation.getAnimationState(clip.name);
                        if (_this.closeReverse) {
                            state_1.time = clip.duration;
                            state_1.speed = -1;
                        }
                        else {
                            state_1.time = 0;
                            state_1.speed = 1;
                        }
                        duration = clip.duration;
                    }
                    if (!state_1) {
                        resolve(null);
                    }
                    else {
                        state_1.play();
                        cc.tween(_this.node).delay(duration).call(resolve).start();
                    }
                }
            });
        };
        __decorate([
            property(cc.Animation)
        ], UIAnimation.prototype, "_uiAnimation", void 0);
        __decorate([
            property({
                type: cc.Animation,
                tooltip: 'UI动画组件'
            })
        ], UIAnimation.prototype, "uiAnimation", null);
        __decorate([
            property({
                type: cc.Enum(TempAnimtionEnum),
                tooltip: '在UI动画组件中，打开动画的索引',
                visible: function () {
                    return this._uiAnimation != null;
                }
            })
        ], UIAnimation.prototype, "openAnimation", void 0);
        __decorate([
            property({
                tooltip: '是否反转打开动画',
                visible: function () {
                    return this._uiAnimation != null && this.openAnimation != 0;
                }
            })
        ], UIAnimation.prototype, "openReverse", void 0);
        __decorate([
            property({
                type: cc.Enum(TempAnimtionEnum),
                tooltip: '在UI动画组件中，关闭动画的索引',
                visible: function () {
                    return this._uiAnimation != null;
                }
            })
        ], UIAnimation.prototype, "closeAnimation", void 0);
        __decorate([
            property({
                tooltip: '是否反转关闭动画',
                visible: function () {
                    return this._uiAnimation != null && this.closeAnimation != 0;
                }
            })
        ], UIAnimation.prototype, "closeReverse", void 0);
        UIAnimation = __decorate([
            ccclass("lcc.UIAnimation"),
            executeInEditMode(),
            menu("i18n:lcc-framework.menu-extension/UIAnimation")
        ], UIAnimation);
        return UIAnimation;
    }(cc.Component));
    lcc.UIAnimation = UIAnimation;
})(lcc || (lcc = {}));
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
/// <reference path="../base/lcc.ts" />
/// <reference path="../base/state.ts" />
/// <reference path="../utils/js.ts" />
var lcc;
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
/// <reference path="../base/lcc.ts" />
/// <reference path="../base/state.ts" />
/// <reference path="../utils/js.ts" />
(function (lcc) {
    var TAG = "lcc/ui/ui-manager.ts";
    /**
     * @zh
     * 索引路径
     */
    var INDEXPATH;
    (function (INDEXPATH) {
        /**
         * @zh
         * UI界面
         */
        INDEXPATH.UI = "ui";
    })(INDEXPATH = lcc.INDEXPATH || (lcc.INDEXPATH = {}));
    ;
    /**
     * @zh
     * UI根节点名
     */
    lcc.UIROOT_NAME = 'UIManager';
    /**
     * @zh
     * UI根节ZINDEX
     */
    lcc.UIROOT_ZINDEX = 1000;
    /**
     * @zh
     * 默认画布
     */
    lcc.DEFAULT_CANVAS = "lcc_Canvas";
    /**
     * @zh
     * 优先级最大值
     */
    lcc.PRIORITY_MAX = 1000;
    /**
     * @zh
     * UI管理器
     */
    var UIManager = /** @class */ (function () {
        /**
         * @zh
         * 构造函数
         */
        function UIManager() {
            var _this = this;
            /**
             * @zh
             * 画布映射表
             */
            this._canvasMap = lcc.js.createMap();
            /**
             * @zh
             * UI配置表
             */
            this._UIConfigs = lcc.js.createMap();
            /**
             * UI根节点
             */
            this._uiRoot = null;
            /**
             * @zh
             * 画布优先级
             */
            this._canvasPriority = 0;
            /**
             * @zh
             * UI操作表
             */
            this._uiOperations = lcc.js.createMap();
            /**
             * @zh
             * UI栈
             */
            this._uiStack = [];
            lcc.state.on('initialize', function () {
                lcc.doing.stateInitialize.in(function () {
                    _this._canvasMap = lcc.js.createMap();
                    _this._UIConfigs = lcc.js.createMap();
                    _this._uiRoot = null;
                    _this._canvasPriority = 0;
                    _this._uiOperations = lcc.js.createMap();
                    _this._uiStack = [];
                    lcc.indexMgr.on("indexes_removed", _this.onIndexesRemoved, _this);
                });
            });
            lcc.state.on('release', function () {
                lcc.doing.stateRelease.in(function () {
                    lcc.indexMgr.targetOff(_this);
                });
            });
        }
        /**
         * @zh
         * 获得UI根节点
         */
        UIManager.prototype.getUIRoot = function () {
            if (!this._uiRoot) {
                this._uiRoot = new cc.Node(lcc.UIROOT_NAME);
                cc.director.getScene().addChild(this._uiRoot, lcc.UIROOT_ZINDEX);
                cc.game.addPersistRootNode(this._uiRoot);
                this._uiRoot.setAnchorPoint(cc.v2(0, 0));
                this._uiRoot.setPosition(cc.v2(0, 0));
                this._uiRoot.setContentSize(cc.winSize);
            }
            1;
            return this._uiRoot;
        };
        /**
         * @zh
         * 获得画布
         *
         * @param cname - 画布名称
         */
        UIManager.prototype.getCanvas = function (cname) {
            if (cname === void 0) { cname = lcc.DEFAULT_CANVAS; }
            var canvasConfig = this._canvasMap[cname];
            if (!canvasConfig) {
                var canvasNode = new cc.Node(cname);
                this.getUIRoot().addChild(canvasNode);
                canvasNode.setAnchorPoint(cc.v2(0, 0));
                var widget = canvasNode.addComponent(cc.Widget);
                widget.alignMode = cc.Widget.AlignMode.ON_WINDOW_RESIZE;
                widget.isAlignTop = true;
                widget.isAlignBottom = true;
                widget.isAlignLeft = true;
                widget.isAlignRight = true;
                widget.top = 0;
                widget.bottom = 0;
                widget.left = 0;
                widget.right = 0;
                canvasConfig = {
                    canvas: canvasNode,
                    UIs: lcc.js.createMap(),
                    openUIs: lcc.js.createMap(),
                    UIPriority: 1,
                    frontUI: null,
                };
                this._canvasMap[cname] = canvasConfig;
            }
            return canvasConfig;
        };
        /**
         * @zh
         * 设置指定画布在最前面
         *
         * @param cname - 画布名称
         */
        UIManager.prototype.setFrontCanvas = function (cname) {
            var canvasConfig = this._canvasMap[cname];
            if (canvasConfig) {
                canvasConfig.canvas.zIndex = this._canvasPriority++;
            }
        };
        /**
         * @zh
         * 当移除索引
         *
         * @internal
         */
        UIManager.prototype.onIndexesRemoved = function () {
            this.releaseInvalidUIs();
        };
        /**
         * @zh
         * 释放无效UI
         */
        UIManager.prototype.releaseInvalidUIs = function () {
            var uifiles = lcc.indexMgr.getIndex(INDEXPATH.UI) || lcc.js.createMap();
            for (var _i = 0, _a = Object.keys(this._UIConfigs); _i < _a.length; _i++) {
                var uiname = _a[_i];
                if (!uifiles[uiname]) {
                    this.releaseUI(uiname);
                }
            }
        };
        /**
         * @zh
         * 获取所有UI
         */
        UIManager.prototype.getAllUIs = function () {
            return Object.keys(lcc.indexMgr.getIndex(INDEXPATH.UI));
        };
        /**
         * @zh
         * 释放指定UI
         *
         * @param uiname - ui名称
         * @param preload - 预加载
         */
        UIManager.prototype.releaseUI = function (uiname, preload) {
            if (preload === void 0) { preload = false; }
            var uiconf = this._UIConfigs[uiname];
            if (uiconf && (!uiconf.preload || preload)) {
                this.closeUI(uiname, true);
                this._releaseUI(uiname);
            }
        };
        /**
         * @zh
         * 释放UI数组
         *
         * @param uinames - ui名称数组
         * @param preload - 预加载
         */
        UIManager.prototype.releaseUIs = function (uinames, preload) {
            if (preload === void 0) { preload = false; }
            for (var _i = 0, uinames_1 = uinames; _i < uinames_1.length; _i++) {
                var uiname = uinames_1[_i];
                this.releaseUI(uiname, preload);
            }
        };
        /**
         * @zh
         * 预加载UI
         *
         * @param uiname - ui名称
         */
        UIManager.prototype.preloadUI = function (uiname) {
            return __awaiter(this, void 0, void 0, function () {
                var uiconf;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getUIConfig(uiname)];
                        case 1:
                            uiconf = _a.sent();
                            if (uiconf) {
                                this._getUI(uiname, uiconf, true);
                                uiconf.preload = true;
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 预加载UI数组
         *
         * @param uinames - ui名称数组
         * @param progress - 进度
         */
        UIManager.prototype.preloadUIs = function (uinames, progress) {
            if (progress === void 0) { progress = function (p) { }; }
            return __awaiter(this, void 0, void 0, function () {
                var i, len;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            i = 0, len = uinames.length;
                            _a.label = 1;
                        case 1:
                            if (!(i < len)) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.preloadUI(uinames[i])];
                        case 2:
                            _a.sent();
                            progress((i + 1) / len);
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 获得UI配置
         *
         * @param uiname - UI名称
         */
        UIManager.prototype.getUIConfig = function (uiname) {
            return __awaiter(this, void 0, void 0, function () {
                var uiconf, config, prefab;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            uiconf = this._UIConfigs[uiname];
                            if (!!uiconf) return [3 /*break*/, 2];
                            config = lcc.indexMgr.getIndex(INDEXPATH.UI + "/" + uiname);
                            if (!config) return [3 /*break*/, 2];
                            return [4 /*yield*/, lcc.packMgr.loadPrefab(config.file)];
                        case 1:
                            prefab = _a.sent();
                            uiconf = {
                                prefab: prefab,
                                config: config,
                                UI: null,
                            };
                            prefab.addRef();
                            this._UIConfigs[uiname] = uiconf;
                            _a.label = 2;
                        case 2: return [2 /*return*/, uiconf];
                    }
                });
            });
        };
        /**
         * @zh
         * 获得指定UI
         *
         * @param uiname - UI名称
         * @param create - 如果不存在，则创建
         */
        UIManager.prototype.getUI = function (uiname, create) {
            if (create === void 0) { create = false; }
            return __awaiter(this, void 0, void 0, function () {
                var uiconf;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getUIConfig(uiname)];
                        case 1:
                            uiconf = _a.sent();
                            return [2 /*return*/, this._getUI(uiname, uiconf, create)];
                    }
                });
            });
        };
        /**
         * @zh
         * 获得指定UI
         *
         * @param uiname - UI名称
         * @param create - 如果不存在，则创建
         */
        UIManager.prototype._getUI = function (uiname, uiconf, create) {
            if (create === void 0) { create = false; }
            if (uiconf) {
                var ui = uiconf.UI;
                if (!ui && create) {
                    var node = cc.instantiate(uiconf.prefab);
                    var canvas = this.getCanvas(uiconf.config.canvas);
                    canvas.canvas.addChild(node);
                    node.active = false;
                    ui = node.getComponent(lcc.UIBase) || node.getComponentInChildren(lcc.UIBase);
                    if (!ui) {
                        ui = node.addComponent(lcc.UIBase);
                    }
                    ui._setRootNode(node);
                    ui._setCanvas(canvas);
                    ui._setUIName(uiname);
                    if (uiconf.config.priority != null) {
                        ui.setFixedPriority(uiconf.config.priority);
                    }
                    ui._onUICreate();
                    uiconf.UI = ui;
                    canvas.UIs[uiname] = ui;
                }
                return ui;
            }
        };
        /**
         * @zh
         * 释放指定UI
         *
         * @param uiname - UI名称
         */
        UIManager.prototype._releaseUI = function (uiname) {
            var uiconf = this._UIConfigs[uiname];
            if (uiconf) {
                var ui = uiconf.UI;
                if (ui) {
                    var canvas = ui.getCanvas();
                    ui.onUIRelease();
                    ui.node.destroy();
                    delete canvas.UIs[uiname];
                    uiconf.prefab.decRef();
                    uiconf.UI = null;
                    delete this._UIConfigs[uiname];
                }
            }
        };
        /**
         * @zh
         * 设置指定UI到最前面
         *
         * @param ui - 指定UI
         */
        UIManager.prototype.setFront = function (ui) {
            if (ui) {
                var canvas = ui.getCanvas();
                if (ui !== canvas.frontUI) {
                    var priority = ui.getFixedPriority();
                    if (priority == null) {
                        canvas.UIPriority += 1;
                        priority = canvas.UIPriority;
                    }
                    ui.node.zIndex = priority;
                    if (canvas.frontUI) {
                        canvas.frontUI.onChangeFront(false);
                    }
                    canvas.frontUI = ui;
                    canvas.frontUI.onChangeFront(true);
                }
                if (canvas.UIPriority >= lcc.PRIORITY_MAX) {
                    this.sortOpenedUIs(canvas);
                }
            }
        };
        /**
         * @zh
         * 排序打开的UI
         *
         * @param canvas - 画布对象
         */
        UIManager.prototype.sortOpenedUIs = function (canvas) {
            var ouis = [];
            for (var uname in canvas.openUIs) {
                var ui = canvas.openUIs[uname];
                if (ui.getFixedPriority() == null) {
                    ouis.push(ui);
                }
            }
            ouis.sort(function (a, b) {
                return a.node.zIndex - b.node.zIndex;
            });
            canvas.UIPriority = ouis.length;
            for (var i = 0, len = ouis.length; i < len; i++) {
                ouis[i].node.zIndex = (i + 1);
            }
        };
        /**
         * @zh
         * 把UI放置到最前面
         *
         * @param uiname - UI名称
         */
        UIManager.prototype.setFrontByName = function (uiname) {
            var uiconf = this._UIConfigs[uiname];
            if (uiconf && uiconf.UI) {
                this.setFront(uiconf.UI);
            }
        };
        /**
         * @zh
         * 添加UI操作
         *
         * @param uiname - UI名称
         * @param operation - 操作函数
         */
        UIManager.prototype.addUIOperation = function (uiname, operation) {
            var operations = this._uiOperations[uiname];
            if (!operations) {
                operations = [];
                this._uiOperations[uiname] = operations;
            }
            operations.push(operation);
            if (operations.length == 1) {
                operations[0]();
            }
        };
        /**
         * @zh
         * 执行下个UI操作
         *
         * @param uiname - UI名称
         */
        UIManager.prototype.nextUIOperation = function (uiname) {
            var operations = this._uiOperations[uiname];
            if (operations.length > 0) {
                operations.shift();
            }
            if (operations.length > 0) {
                operations[0]();
            }
        };
        /**
         * @zh
         * 打开指定UI
         *
         * @param uiname - UI名称
         * @param args - 打开参数
         */
        UIManager.prototype._openUI = function (uiname) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                var ui, uiconf, canvas;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            ui = null;
                            return [4 /*yield*/, this.getUIConfig(uiname)];
                        case 1:
                            uiconf = _a.sent();
                            if (!uiconf) return [3 /*break*/, 3];
                            ui = uiconf.UI;
                            if (!ui) {
                                ui = this._getUI(uiname, uiconf, true);
                                if (ui) {
                                    canvas = ui.getCanvas();
                                    canvas.openUIs[uiname] = ui;
                                }
                            }
                            if (!ui) return [3 /*break*/, 3];
                            this.setFront(ui);
                            ui.setActive(true);
                            ui.onOpen.apply(ui, args);
                            return [4 /*yield*/, ui.playUIAnimation('open')];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/, ui];
                    }
                });
            });
        };
        /**
         * @zh
         * 打开指定UI
         *
         * @param uiname - UI名称
         * @param args - 打开参数
         */
        UIManager.prototype.openUI = function (uiname) {
            var _this = this;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return new Promise(function (resolve) {
                _this.addUIOperation(uiname, function () { return __awaiter(_this, void 0, void 0, function () {
                    var ui;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this._openUI.apply(this, __spreadArray([uiname], args))];
                            case 1:
                                ui = _a.sent();
                                this.nextUIOperation(uiname);
                                resolve(ui);
                                return [2 /*return*/];
                        }
                    });
                }); });
            });
        };
        /**
         * @zh
         * 关闭指定UI
         *
         * @param uiname - UI名称
         * @param release - 释放对象
         */
        UIManager.prototype._closeUI = function (uiname, release) {
            if (release === void 0) { release = false; }
            return __awaiter(this, void 0, void 0, function () {
                var uiconf, ui, canvas, nfui, uin, opui;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            uiconf = this._UIConfigs[uiname];
                            if (!uiconf) return [3 /*break*/, 2];
                            ui = uiconf.UI;
                            if (!ui) return [3 /*break*/, 2];
                            canvas = ui.getCanvas();
                            return [4 /*yield*/, ui.playUIAnimation('close')];
                        case 1:
                            _a.sent();
                            ui.onClose();
                            ui.setActive(false);
                            delete canvas.openUIs[uiname];
                            if (ui === canvas.frontUI) {
                                nfui = null;
                                for (uin in canvas.openUIs) {
                                    opui = canvas.openUIs[uin];
                                    if ((opui !== canvas.frontUI) && (!nfui ||
                                        nfui.node.zIndex < opui.node.zIndex)) {
                                        nfui = opui;
                                    }
                                }
                                this.setFront(nfui);
                            }
                            if (release) {
                                this._releaseUI(uiname);
                            }
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 关闭指定UI
         *
         * @param uiname - UI名称
         * @param release - 释放对象
         */
        UIManager.prototype.closeUI = function (uiname, release) {
            var _this = this;
            if (release === void 0) { release = false; }
            return new Promise(function (resolve) {
                _this.addUIOperation(uiname, function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this._closeUI(uiname, release)];
                            case 1:
                                _a.sent();
                                this.nextUIOperation(uiname);
                                resolve(uiname);
                                return [2 /*return*/];
                        }
                    });
                }); });
            });
        };
        /**
         * @zh
         * 关闭UI数组
         *
         * @param uinames - UI名称数组
         */
        UIManager.prototype.closeUIs = function (uinames, release) {
            if (release === void 0) { release = false; }
            for (var _i = 0, uinames_2 = uinames; _i < uinames_2.length; _i++) {
                var uin = uinames_2[_i];
                this.closeUI(uin, release);
            }
        };
        /**
         * @zh
         * 关闭所有UI
         *
         * @param excepts - 排除UI数组
         */
        UIManager.prototype.closeAllUI = function (excepts, release) {
            var _this = this;
            if (release === void 0) { release = false; }
            Object.keys(this._UIConfigs).forEach(function (uiname) {
                if (!excepts || excepts.indexOf(uiname) == -1) {
                    _this.closeUI(uiname, release);
                }
            });
        };
        /**
         * @zh
         * 使用栈方式打开UI
         *
         * @param uiname - UI名称
         * @param args - 打开参数
         */
        UIManager.prototype.pushUI = function (uiname) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this._uiStack.length > 0)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.closeUI(this._uiStack[this._uiStack.length - 1])];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            this._uiStack.push(uiname);
                            return [4 /*yield*/, this.openUI.apply(this, __spreadArray([uiname], args))];
                        case 3: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * @zh
         * 使用栈方式关闭UI
         *
         * @param uiname - UI名称
         */
        UIManager.prototype.popUI = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this._uiStack.length > 0)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.closeUI(this._uiStack.pop())];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            if (!(this._uiStack.length > 0)) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.openUI(this._uiStack[this._uiStack.length - 1])];
                        case 3: return [2 /*return*/, _a.sent()];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 获得UI栈
         */
        UIManager.prototype.getUIStack = function () {
            return this._uiStack;
        };
        /**
         * @zh
         * 清空UI栈
         */
        UIManager.prototype.clearUIStack = function () {
            this._uiStack = lcc.js.createMap();
        };
        /**
         * @zh
         * 当按键按下
         *
         * @param keyCode - 按键编码
         */
        UIManager.prototype.onKeyPressed = function (keyCode) {
            var canvasuis = [];
            for (var cname in this._canvasMap) {
                var canvans = this._canvasMap[cname];
                var openuis = [];
                for (var uin in canvans.openUIs) {
                    openuis.push(canvans.openUIs[uin]);
                }
                canvasuis.push({
                    priority: canvans.canvas.zIndex,
                    openuis: openuis,
                });
            }
            canvasuis.sort(function (a, b) { return b.priority - a.priority; });
            for (var _i = 0, canvasuis_1 = canvasuis; _i < canvasuis_1.length; _i++) {
                var cui = canvasuis_1[_i];
                cui.openuis.sort(function (a, b) { return b.node.zIndex - a.node.zIndex; });
                for (var _a = 0, _b = cui.openuis; _a < _b.length; _a++) {
                    var ui = _b[_a];
                    if (ui.onKeyPressed(keyCode)) {
                        return true;
                    }
                }
            }
            return false;
        };
        return UIManager;
    }());
    ;
    /**
     * @zh
     * UI管理器对象
     */
    lcc.uiMgr = new UIManager();
})(lcc || (lcc = {}));
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
var lcc;
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
(function (lcc) {
    var fs;
    (function (fs) {
        var TAG = "lcc/utils/fs.ts";
        /**
         * @zh
         * 获得路径的目录
         *
         * @param path - 路径
         */
        function dirname(path) {
            var lastSpos = path.lastIndexOf('/');
            return lastSpos == -1 ? '' : path.substring(0, lastSpos);
        }
        fs.dirname = dirname;
        /**
         * @zh
         * 获得路径的文件名
         *
         * @param path - 路径
         */
        function basename(path) {
            var lastSpos = path.lastIndexOf('/');
            return lastSpos == -1 ? path : path.substr(lastSpos + 1);
        }
        fs.basename = basename;
    })(fs = lcc.fs || (lcc.fs = {}));
})(lcc || (lcc = {}));
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
var lcc;
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
(function (lcc) {
    var math;
    (function (math) {
        var TAG = "lcc/utils/math.ts";
        /**
         * @zh
         * 获得随机浮点值
         *
         * @param min - 最小值
         * @param max - 最大值
         */
        function randomFloat(min, max) {
            return Math.random() * (max - min + 1) + min;
        }
        math.randomFloat = randomFloat;
        /**
         * @zh
         * 获得随机整数值
         *
         * @param min - 最小值
         * @param max - 最大值
         */
        function randomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        math.randomInt = randomInt;
        /**
         * @zh
         * 随机获得数组中的值
         *
         * @param elements - 元素数组
         */
        function randomElement(elements) {
            var select = Math.floor(Math.random() * 100) % elements.length;
            return elements[select];
        }
        math.randomElement = randomElement;
        /**
         * @zh
         * 随机获得数组的几个值
         *
         * @param elements - 元素数组
         * @param count - 数量
         */
        function randomElements(elements, count) {
            var shuffled = elements.slice(0), i = elements.length, min = i - count, temp, index;
            while (i-- > min) {
                index = Math.floor((i + 1) * Math.random());
                temp = shuffled[index];
                shuffled[index] = shuffled[i];
                shuffled[i] = temp;
            }
            return shuffled.slice(min);
        }
        math.randomElements = randomElements;
    })(math = lcc.math || (lcc.math = {}));
})(lcc || (lcc = {}));
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
/// <reference path="../net-line.ts" />
/// <reference path="../net-client.ts" />
var lcc;
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
/// <reference path="../net-line.ts" />
/// <reference path="../net-client.ts" />
(function (lcc) {
    var TAG = "lcc/network/http/http-line.ts";
    /**
     * @zh
     * HTTP心跳，不大于0表示不使用
     */
    lcc.HTTP_HEARTTICK = -1;
    /**
     * @zh
     * HTTP协议路径
     */
    lcc.HTTP_PROTOCOL_PATH = '/protocol';
    /**
     * @zh
     * 网络线类型
     */
    var NetLineType;
    (function (NetLineType) {
        /**
         * @zh
         * HTTP网络线
         */
        NetLineType.HTTP = 2;
    })(NetLineType = lcc.NetLineType || (lcc.NetLineType = {}));
    /**
     * @zh
     * Http调用方式
     */
    var HttpCall;
    (function (HttpCall) {
        /**
         * @zh
         * GET调用
         */
        HttpCall[HttpCall["GET"] = 1] = "GET";
        /**
         * @zh
         * POST调用
         */
        HttpCall[HttpCall["POST"] = 2] = "POST";
    })(HttpCall = lcc.HttpCall || (lcc.HttpCall = {}));
    /**
     * @zh
     * HTTP网络线
     */
    var HttpLine = /** @class */ (function (_super) {
        __extends(HttpLine, _super);
        function HttpLine() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * @zh
             * 网络线配置
             */
            _this._config = null;
            /**
             * @zh
             * 连接ID
             */
            _this._connectID = null;
            /**
             * @zh
             * 就绪
             */
            _this._ready = false;
            /**
             * @zh
             * 已经关闭
             */
            _this._closed = false;
            /**
             * @zh
             * 发送心跳时间
             */
            _this._sendHeartTime = 0;
            return _this;
        }
        /**
         * @zh
         * 获得URL连接
         */
        HttpLine.prototype.getURL = function () {
            return this._config.url;
        };
        /**
         * @zh
         * 配置网络线
         *
         * @param config - 配置对象
         */
        HttpLine.prototype.config = function (config) {
            lcc.DEBUG.NETWORK && cc.log(TAG, this.getName() + " config");
            this._config = config;
        };
        /**
         * @zh
         * 检查网络线是否有效
         */
        HttpLine.prototype.isValid = function () {
            return this._ready && !this._closed;
        };
        /**
         * @zh
         * 处理网络线数据
         *
         * @param netData 网络数据
         */
        HttpLine.prototype.onDealNetData = function (netData) {
            lcc.DEBUG.NETWORK && cc.log(TAG, this.getName() + " onDealNetData " + JSON.stringify(netData));
            if (netData.protocols) {
                this.pushDispatchCaches(netData.protocols);
            }
            if (netData.type == lcc.netdata.NetDataType.SYNC_CONNECT_ID) {
                this._connectID = netData.data.connectID;
                lcc.DEBUG.NETWORK && cc.log(TAG, this.getName() + " onDealNetData SYNC_CONNECT_ID " + this._connectID);
                if (!this._ready) {
                    lcc.DEBUG.NETWORK && cc.log(TAG, this.getName() + " CLIENT connect");
                    this._sendHeartTime = 0;
                    this._ready = true;
                    try {
                        this.emit("onOpen", true, this);
                    }
                    catch (e) {
                        cc.error(TAG, "onDealNetData SYNC_CONNECT_ID Exception " + e);
                    }
                }
            }
        };
        /**
         * @zh
         * 打开网络线
         */
        HttpLine.prototype.open = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    if (!this._ready) {
                        this._config.call = this._config.call || HttpCall.POST;
                        lcc.DEBUG.NETWORK && cc.log(TAG, this.getName() + " CLIENT open " + this._config.url + " " + this._config.call);
                        if (this._config.url) {
                            this._config.url = "" + this._config.url + lcc.HTTP_PROTOCOL_PATH;
                            this.syncConnectID();
                        }
                        else {
                            cc.error(TAG, "HttpLine " + this._name + " url is invalid!");
                            try {
                                this.emit("onOpen", false, this);
                            }
                            catch (e) {
                                cc.error(TAG, "CLIENT open Exception " + e);
                            }
                        }
                    }
                    return [2 /*return*/, new Promise(function (resolve) {
                            if (_this._ready) {
                                resolve(true);
                            }
                            else {
                                _this.once("onOpen", resolve);
                            }
                        })];
                });
            });
        };
        /**
         * @zh
         * 关闭网络线
         */
        HttpLine.prototype.close = function () {
            if (this._ready) {
                lcc.DEBUG.NETWORK && cc.log(TAG, this.getName() + " CLIENT close");
                this._ready = false;
                this.emit("onClose", this, 0);
            }
        };
        /**
         * @zh
         * 更新网络线
         *
         * @param dt 间隔时间
         */
        HttpLine.prototype.onUpdate = function (dt) {
            if (lcc.HTTP_HEARTTICK > 0 && this._ready) {
                this._sendHeartTime += dt;
                if (this._sendHeartTime >= lcc.HTTP_HEARTTICK) {
                    lcc.DEBUG.NETWORK && cc.log(TAG, this.getName() + " onUpdate sendHeartTime");
                    this.writeNetLineData(lcc.netdata.NetDataType.HERT_TICK);
                }
            }
        };
        /**
         * @zh
         * 同步连接ID
         */
        HttpLine.prototype.syncConnectID = function () {
            if (this._mode === lcc.NetLineMode.CLIENT) {
                lcc.DEBUG.NETWORK && cc.log(TAG, this.getName() + " syncConnectID");
                var data = {
                    type: lcc.netdata.NetDataType.SYNC_CONNECT_ID
                };
                this.sendNetData_client(data);
            }
        };
        /**
         * @zh
         * 发送网络数据-客户端
         *
         * @param data - 网络数据
         */
        HttpLine.prototype.sendNetData_client = function (netData) {
            return __awaiter(this, void 0, void 0, function () {
                var datab64, r, rNetData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            datab64 = lcc.js.ab2b64(lcc.packNetData(netData, this));
                            if (!(this._config.call == HttpCall.POST)) return [3 /*break*/, 2];
                            return [4 /*yield*/, lcc.http.postJson(this._config.url, { data: datab64 })];
                        case 1:
                            r = _a.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, lcc.http.getJson(this._config.url + "?data=" + datab64)];
                        case 3:
                            r = _a.sent();
                            _a.label = 4;
                        case 4:
                            rNetData = r && lcc.unpackNetData(lcc.js.b642u8a(r.data).buffer);
                            if (rNetData) {
                                this.onDealNetData(rNetData);
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @zh
         * 发送网络线数据
         *
         * @param data - 网络数据
         */
        HttpLine.prototype.sendNetData = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (this._ready) {
                        lcc.DEBUG.NETWORK && cc.log(TAG, this.getName() + " sendNetData " + this._mode + " " + JSON.stringify(data));
                        if (this._mode === lcc.NetLineMode.CLIENT) {
                            data.connectID = this._connectID;
                            this.sendNetData_client(data);
                            this._sendHeartTime = 0;
                        }
                    }
                    else {
                        cc.warn(TAG, "HttpLine " + this._name + " sendNetData fail!");
                    }
                    return [2 /*return*/];
                });
            });
        };
        return HttpLine;
    }(lcc.NetLine));
    lcc.HttpLine = HttpLine;
    ;
    //注册网络类型
    lcc.NetLine.registerNetType(NetLineType.HTTP, HttpLine);
})(lcc || (lcc = {}));
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
/// <reference path="../net-line.ts" />
/// <reference path="../net-client.ts" />
/// <reference path="../../utils/js-buffer.ts" />
var lcc;
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
/// <reference path="../net-line.ts" />
/// <reference path="../net-client.ts" />
/// <reference path="../../utils/js-buffer.ts" />
(function (lcc) {
    var TAG = "lcc/network/websocket/websocket-line.ts";
    /**
     * @zh
     * WS心跳
     */
    lcc.WEBSOCKET_HEARTTICK = 10;
    /**
     * @zh
     * 网络线类型
     */
    var NetLineType;
    (function (NetLineType) {
        /**
         * @zh
         * WS网络线
         */
        NetLineType.WEBSOCKET = 1;
    })(NetLineType = lcc.NetLineType || (lcc.NetLineType = {}));
    /**
     * @zh
     * WEBSOCKET网络线<br/>
     */
    var WebSocketLine = /** @class */ (function (_super) {
        __extends(WebSocketLine, _super);
        function WebSocketLine() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * @zh
             * 网络线配置
             */
            _this._config = null;
            /**
             * @zh
             * 网络线实体
             */
            _this._entity = null;
            /**
             * @zh
             * 就绪
             */
            _this._ready = false;
            /**
             * @zh
             * 心跳时间限制
             */
            _this._heartTimeLimit = lcc.WEBSOCKET_HEARTTICK;
            /**
             * @zh
             * 检查心跳时间
             */
            _this._checkHeartTime = 0;
            /**
             * @zh
             * 发送心跳时间<br/>
             * 客户端
             */
            _this._sendHeartTime = 0;
            return _this;
        }
        /**
         * @zh
         * 获得URL连接
         */
        WebSocketLine.prototype.getURL = function () {
            return this._config.url;
        };
        /**
         * @zh
         * 配置网络线
         *
         * @param config - 配置对象
         */
        WebSocketLine.prototype.config = function (config) {
            lcc.DEBUG.NETWORK && cc.log(TAG, this.getName() + " config");
            this._config = config;
        };
        /**
         * @zh
         * 检查网络线是否有效
         */
        WebSocketLine.prototype.isValid = function () {
            return this._entity && this._ready;
        };
        /**
         * @zh
         * 处理网络线数据
         *
         * @param netData - 收到的网络数据
         */
        WebSocketLine.prototype.onDealNetData = function (netData) {
            this._checkHeartTime = 0;
            lcc.DEBUG.NETWORK && cc.log(TAG, this.getName() + " onDealNetData " + JSON.stringify(netData));
            if (netData.protocols) {
                this.pushDispatchCaches(netData.protocols);
            }
            if (netData.type == lcc.netdata.NetDataType.SYNC_HERTTICK_TIME) {
                if (this._mode === lcc.NetLineMode.CLIENT) {
                    this._heartTimeLimit = netData.data.heartTime;
                    this.writeNetLineData(lcc.netdata.NetDataType.HERT_TICK);
                    this._sendHeartTime = 0;
                    lcc.DEBUG.NETWORK && cc.log(TAG, this.getName() + " SYNC_HERTTICK_TIME " + this._heartTimeLimit);
                }
            }
        };
        /**
         * @zh
         * 打开网络线
         */
        WebSocketLine.prototype.open = function () {
            return __awaiter(this, void 0, void 0, function () {
                var wssconfig;
                var _this = this;
                return __generator(this, function (_a) {
                    if (!this._entity) {
                        if (this._mode === lcc.NetLineMode.CLIENT) {
                            lcc.DEBUG.NETWORK && cc.log(TAG, this.getName() + " CLIENT open " + this._config.url);
                            try {
                                if (this._config.url.indexOf("wss://") == 0 && CC_JSB) {
                                    wssconfig = lcc.netClient.getWSSConfig();
                                    if (wssconfig) {
                                        // @ts-ignore
                                        this._entity = new WebSocket(this._config.url, wssconfig.protocol, wssconfig.cert);
                                    }
                                    else {
                                        cc.warn(TAG, "native wss connect must set wssconfig");
                                        try {
                                            this.emit("onOpen", false, this);
                                        }
                                        catch (e) {
                                            cc.error(TAG, this.getName() + " CLIENT open Exception " + e);
                                        }
                                    }
                                }
                                else {
                                    this._entity = new WebSocket(this._config.url);
                                }
                            }
                            catch (err) {
                                cc.error(err);
                                try {
                                    this.emit("onOpen", false, this);
                                }
                                catch (e) {
                                    cc.error(TAG, this.getName() + " CLIENT open Exception " + e);
                                }
                                return [2 /*return*/];
                            }
                            this._entity.onopen = function (ev) {
                                lcc.DEBUG.NETWORK && cc.log(TAG, _this.getName() + " CLIENT onopen");
                                _this._checkHeartTime = 0;
                                _this._sendHeartTime = 0;
                                _this._ready = true;
                                try {
                                    _this.emit("onOpen", true, _this);
                                }
                                catch (e) {
                                    cc.error(TAG, _this.getName() + " CLIENT open onopen Exception " + e);
                                }
                            };
                            this._entity.onclose = function (ev) {
                                lcc.DEBUG.NETWORK && cc.log(TAG, _this.getName() + " CLIENT onclose");
                                if (_this._entity) {
                                    _this._entity = null;
                                    _this._ready = false;
                                    try {
                                        _this.emit("onClose", _this, 0);
                                    }
                                    catch (e) {
                                        cc.error(TAG, _this.getName() + " CLIENT open onclose Exception " + e);
                                    }
                                }
                            };
                            this._entity.onmessage = function (ev) {
                                lcc.DEBUG.NETWORK && cc.log(TAG, _this.getName() + " CLIENT onmessage " + ev.data);
                                if (typeof ev.data == 'string') {
                                    var netData = JSON.parse(ev.data);
                                    if (netData) {
                                        _this.onDealNetData(netData);
                                    }
                                }
                                else if (ev.data instanceof ArrayBuffer) {
                                    var netData = lcc.unpackNetData(ev.data);
                                    if (netData) {
                                        _this.onDealNetData(netData);
                                    }
                                }
                                else if (ev.data instanceof Blob) {
                                    var reader = new FileReader();
                                    reader.onload = function (evt) {
                                        if (evt.target.readyState == FileReader.DONE) {
                                            var netData = lcc.unpackNetData(evt.target.result);
                                            if (netData) {
                                                _this.onDealNetData(netData);
                                            }
                                        }
                                    };
                                    reader.readAsArrayBuffer(ev.data);
                                }
                            };
                            this._entity.onerror = function (ev) {
                                lcc.DEBUG.NETWORK && cc.log(TAG, _this.getName() + " CLIENT onerror " + ev);
                                try {
                                    if (_this._ready) {
                                        _this.emit("onError", _this, ev);
                                    }
                                    else {
                                        _this.emit("onOpen", false, _this);
                                    }
                                }
                                catch (e) {
                                    cc.error(TAG, _this.getName() + " CLIENT open onerror Exception " + e);
                                }
                                _this.close();
                            };
                        }
                    }
                    if (this._entity) {
                        return [2 /*return*/, new Promise(function (resolve) {
                                if (_this._ready) {
                                    resolve(true);
                                }
                                else {
                                    _this.once("onOpen", resolve);
                                }
                            })];
                    }
                    return [2 /*return*/];
                });
            });
        };
        /**
         * @zh
         * 关闭网络线
         */
        WebSocketLine.prototype.close = function () {
            if (this._entity) {
                lcc.DEBUG.NETWORK && cc.log(TAG, this.getName() + " " + this._mode + " close");
                var ent = this._entity;
                this._entity = null;
                if (this._ready) {
                    ent.close();
                }
                this._ready = false;
                try {
                    this.emit("onClose", this, 0);
                }
                catch (e) {
                    cc.error(TAG, this.getName() + " close Exception " + e);
                }
            }
        };
        /**
         * @zh
         * 更新网络线
         *
         * @param dt - 间隔时间
         */
        WebSocketLine.prototype.onUpdate = function (dt) {
            if (this._entity && this._ready) {
                this._checkHeartTime += dt;
                if (this._checkHeartTime >= this._heartTimeLimit) {
                    lcc.DEBUG.NETWORK && cc.log(TAG, this.getName() + " onUpdate checkHeartTime close");
                    this.close();
                }
                if (this._mode === lcc.NetLineMode.CLIENT) {
                    this._sendHeartTime += dt;
                    if (this._sendHeartTime >= this._heartTimeLimit / 2) {
                        lcc.DEBUG.NETWORK && cc.log(TAG, this.getName() + " onUpdate sendHeartTime");
                        this.writeNetLineData(lcc.netdata.NetDataType.HERT_TICK);
                        this._sendHeartTime = 0;
                    }
                }
            }
        };
        /**
         * @zh
         * 发送网络线数据
         *
         * @param data - 网络数据
         */
        WebSocketLine.prototype.sendNetData = function (netData) {
            if (this._entity && this._ready) {
                this._entity.send(lcc.packNetData(netData, this));
            }
            else {
                console.warn(TAG, "WebSocketLine " + this._name + " sendNetData fail!");
            }
        };
        return WebSocketLine;
    }(lcc.NetLine));
    lcc.WebSocketLine = WebSocketLine;
    ;
    //注册网络类型
    lcc.NetLine.registerNetType(NetLineType.WEBSOCKET, WebSocketLine);
})(lcc || (lcc = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9iYXNlL2xjYy50cyIsInNyYy91dGlscy9qcy50cyIsInNyYy9iYXNlL2RvaW5nLnRzIiwic3JjL2Jhc2UvdmFyaWFibGUudHMiLCJzcmMvYmFzZS9yZWZlcmVuY2UudHMiLCJzcmMvYmFzZS9zdGF0ZS50cyIsInNyYy9hcmNoaXZlL2FyY2hpdmUtbWFuYWdlci50cyIsInNyYy9uZXR3b3JrL2h0dHAvaHR0cC50cyIsInNyYy91dGlscy9hc3NldC50cyIsInNyYy9wYWNrL3BhY2stbWFuYWdlci50cyIsInNyYy9wYWNrL3JlYWQtY29uZmlnLnRzIiwic3JjL2luZGV4L2luZGV4LW1hbmFnZXIudHMiLCJzcmMvYXVkaW8vYXVkaW8tbWFuYWdlci50cyIsInNyYy9jb25maWcvY29uZmlnLW1hbmFnZXIudHMiLCJzcmMvbGFuZ3VhZ2UvbGFuZy1tYW5hZ2VyLnRzIiwic3JjL2xhbmd1YWdlL211bHRpcGxlLWxhbmd1YWdlcy50cyIsInNyYy9sb2cvbG9nLW1hbmFnZXIudHMiLCJzcmMvbmV0d29yay9uZXQtbGluZS50cyIsInNyYy9uZXR3b3JrL25ldC1jbGllbnQudHMiLCJzcmMvdXRpbHMvanMtYnVmZmVyLnRzIiwic3JjL25ldHdvcmsvbmV0LWRhdGEudHMiLCJzcmMvbmV0d29yay9wcm90b2J1Zi1tYW5hZ2VyLnRzIiwic3JjL3BhY2svcGFjay1sb2FkZXIudHMiLCJzcmMvcHJlZmFiL25vZGUtcG9vbHMudHMiLCJzcmMvcHJlZmFiL3ByZWZhYi1iYXNlLnRzIiwic3JjL3ByZWZhYi9wcmVmYWItYmluZC50cyIsInNyYy9wcmVmYWIvcHJlZmFiLW1hbmFnZXIudHMiLCJzcmMvc2NlbmUvc2NlbmUtYmFzZS50cyIsInNyYy9zY2VuZS9zY2VuZS1tYW5hZ2VyLnRzIiwic3JjL3RhYmxlL3RhYmxlLW1hbmFnZXIudHMiLCJzcmMvdGltZXIvdGltZXItbWFuYWdlci50cyIsInNyYy91aS91aS1iYXNlLnRzIiwic3JjL3VpL3VpLWFuaW1hdGlvbi50cyIsInNyYy91aS91aS1tYW5hZ2VyLnRzIiwic3JjL3V0aWxzL2ZzLnRzIiwic3JjL3V0aWxzL21hdGgudHMiLCJzcmMvbmV0d29yay9odHRwL2h0dHAtbGluZS50cyIsInNyYy9uZXR3b3JrL3dlYnNvY2tldC93ZWJzb2NrZXQtbGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbUJFO0FBRUYsSUFBVSxHQUFHLENBc0VaO0FBM0ZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbUJFO0FBRUYsV0FBVSxHQUFHO0lBRWIsSUFBTSxHQUFHLEdBQUcsaUJBQWlCLENBQUM7SUFFOUI7OztPQUdHO0lBQ1UsV0FBTyxHQUFHLE9BQU8sQ0FBQztJQUUvQjs7O09BR0c7SUFDSCxJQUFpQixLQUFLLENBc0RyQjtJQXRERCxXQUFpQixLQUFLO1FBQ2xCOzs7V0FHQTtRQUNXLFVBQUksR0FBRyxLQUFLLENBQUM7UUFFM0I7OztXQUdHO1FBQ1csYUFBTyxHQUFHLEtBQUssQ0FBQztRQUU5Qjs7O1dBR0c7UUFDVyxXQUFLLEdBQUcsS0FBSyxDQUFDO1FBRTVCOzs7V0FHRztRQUNXLFlBQU0sR0FBRyxLQUFLLENBQUM7UUFFMUI7OztXQUdHO1FBQ1EsV0FBSyxHQUFHLEtBQUssQ0FBQztRQUV6Qjs7O1dBR0c7UUFDUSxVQUFJLEdBQUcsS0FBSyxDQUFDO1FBRXhCOzs7V0FHRztRQUNRLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFFM0I7OztXQUdHO1FBQ1EsV0FBSyxHQUFHLEtBQUssQ0FBQztRQUV6Qjs7O1dBR0c7UUFDUSxZQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUMsRUF0RGdCLEtBQUssR0FBTCxTQUFLLEtBQUwsU0FBSyxRQXNEckI7SUFBQSxDQUFDO0FBRUYsQ0FBQyxFQXRFUyxHQUFHLEtBQUgsR0FBRyxRQXNFWjtBQUVELFFBQVE7QUFDUixVQUFVLENB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LEtBQUssdUJBQW9CLENBQUMsQ0FBQzthQUNuRTtRQUNGLENBQUM7UUFDRixvQkFBQztJQUFELENBOVBBLEFBOFBDLENBOVBrQyxJQUFBLE9BQU8sR0E4UHpDO0lBOVBZLGlCQUFhLGdCQThQekIsQ0FBQTtJQUFBLENBQUM7SUFFRixRQUFRO0lBQ1IsSUFBQSxPQUFPLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFFOUQsQ0FBQyxFQXpTUyxHQUFHLEtBQUgsR0FBRyxRQXlTWiIsImZpbGUiOiJsY2MtZnJhbWV3b3JrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuQ29weXJpZ2h0IDIwMjEgTHVKdW5cclxuXHJcblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgXHJcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgXHJcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgXHJcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgXHJcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgXHJcbnRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIFxyXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgXHJcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBcclxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgXHJcblRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIFxyXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBcclxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXHJcbiovXHJcblxyXG5uYW1lc3BhY2UgbGNjIHtcclxuXHJcbmNvbnN0IFRBRyA9IFwibGNjL2Jhc2UvbGNjLnRzXCI7XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOeJiOacrOWPt1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSAnMS4wLjAnO1xyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDosIPor5XnlKjlro/lrprkuYlcclxuICovXHJcbmV4cG9ydCBuYW1lc3BhY2UgREVCVUcge1xyXG4gICAgLyoqXHJcblx0ICogQHpoXHJcblx0ICog5Z+656GA5qih5Z2XXHJcblx0ICovXHJcbiAgICBleHBvcnQgbGV0IEJBU0UgPSBmYWxzZTtcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5a2Y5qGj5qih5Z2XXHJcblx0ICovXHJcbiAgICBleHBvcnQgbGV0IEFSQ0hJVkUgPSBmYWxzZTtcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6Z+z6aKR5qih5Z2XXHJcblx0ICovXHJcbiAgICBleHBvcnQgbGV0IEFVRElPID0gZmFsc2U7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOmFjee9ruaooeWdl1xyXG5cdCAqL1xyXG4gICAgZXhwb3J0IGxldCBDT05GSUcgPSBmYWxzZTtcclxuICAgIFxyXG4gICAgLyoqXHJcblx0ICogQHpoXHJcbiAgICAgKiDmlbDmja7ooajmqKHlnZdcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGxldCBUQUJMRSA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG5cdCAqIEB6aFxyXG4gICAgICog6K+t6KiA5qih5Z2XXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBsZXQgTEFORyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG5cdCAqIEB6aFxyXG4gICAgICog572R57uc5qih5Z2XXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBsZXQgTkVUV09SSyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG5cdCAqIEB6aFxyXG4gICAgICog5a6a5pe25Zmo5qih5Z2XXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBsZXQgVElNRVIgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuXHQgKiBAemhcclxuICAgICAqIOW3peS9nOiAheaooeWdl1xyXG4gICAgICovXHJcbiAgICBleHBvcnQgbGV0IFdPUktFUiA9IGZhbHNlO1xyXG59O1xyXG5cclxufVxyXG5cclxuLy8g5oyC6L295Yiw5YWo5bGAXHJcbmdsb2JhbFRoaXMubGNjID0gbGNjO1xyXG4iLCIvKlxyXG5Db3B5cmlnaHQgMjAyMSBMdUp1blxyXG5cclxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBcclxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBcclxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyBcclxudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBcclxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCBcclxudG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gXHJcbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBcclxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIFxyXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBcclxuVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgXHJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIFxyXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuKi9cclxuXHJcbm5hbWVzcGFjZSBsY2Mge1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBqcyB7XHJcblxyXG5jb25zdCBUQUcgPSBcImxjYy91dGlscy9qcy50c1wiO1xyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDmoLzlvI/ljJblrZfnrKbkuLIsIE1hcOWPguaVsFxyXG4gKiBcclxuICogQHBhcmFtIHN0ciAtIOagvOW8j+WMlueahOWtl+espuS4slxyXG4gKiBAcGFyYW0gbWFwIC0g5aSW6YOo5pig5bCE6KGo77yM5LyY5YWI6Kej5p6QXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0U3RyaW5nKHN0cjpzdHJpbmcsIG1hcDp7W2tleTpzdHJpbmddOmFueX0pe1xyXG5cdGlmKCFpc0VtcHR5TWFwKG1hcCkpe1xyXG5cdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC9cXCRcXHsoW1xcd1xcZF86XFwuXSspXFx9L2csIChrLG0pID0+IHtcclxuXHRcdFx0bGV0IHZhbHVlID0gbWFwW21dO1xyXG5cdFx0XHRpZih2YWx1ZSAhPSBudWxsKXtcclxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIFwiJHtcIiArIG0gKyBcIn1cIjtcclxuXHRcdH0pO1xyXG5cdH1lbHNle1xyXG5cdFx0cmV0dXJuIHN0cjtcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5pel5pyf5qC85byP5YyWXHJcbiAqIFxyXG4gKiBAcGFyYW0gZm10IC0g5qC85byP5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBkYXRlIC0g5pel5pyf5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShmbXQ6c3RyaW5nLCBkYXRlOkRhdGUpIHtcclxuXHRsZXQgcmV0OmFueTtcclxuXHRjb25zdCBvcHQ6YW55ID0ge1xyXG5cdFx0XCJZK1wiOiBkYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSwgICAgICAgIC8vIOW5tFxyXG5cdFx0XCJtK1wiOiAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKSwgICAgIC8vIOaciFxyXG5cdFx0XCJkK1wiOiBkYXRlLmdldERhdGUoKS50b1N0cmluZygpLCAgICAgICAgICAgIC8vIOaXpVxyXG5cdFx0XCJIK1wiOiBkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKSwgICAgICAgICAgIC8vIOaXtlxyXG5cdFx0XCJNK1wiOiBkYXRlLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLCAgICAgICAgIC8vIOWIhlxyXG5cdFx0XCJTK1wiOiBkYXRlLmdldFNlY29uZHMoKS50b1N0cmluZygpICAgICAgICAgIC8vIOenklxyXG5cdFx0Ly8g5pyJ5YW25LuW5qC85byP5YyW5a2X56ym6ZyA5rGC5Y+v5Lul57un57ut5re75Yqg77yM5b+F6aG76L2s5YyW5oiQ5a2X56ym5LiyXHJcblx0fTtcclxuXHRmb3IgKGxldCBrIGluIG9wdCkge1xyXG5cdFx0cmV0ID0gbmV3IFJlZ0V4cChcIihcIiArIGsgKyBcIilcIikuZXhlYyhmbXQpO1xyXG5cdFx0aWYgKHJldCkge1xyXG5cdFx0XHRmbXQgPSBmbXQucmVwbGFjZShyZXRbMV0sIChyZXRbMV0ubGVuZ3RoID09IDEpID8gKG9wdFtrXSkgOiAob3B0W2tdLnBhZFN0YXJ0KHJldFsxXS5sZW5ndGgsIFwiMFwiKSkpXHJcblx0XHR9O1xyXG5cdH07XHJcblx0cmV0dXJuIGZtdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDliJvlu7ptYXDooahcclxuICogXHJcbiAqIEBwYXJhbSBmb3JjZURpY3RNb2RlIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1hcChmb3JjZURpY3RNb2RlPzogYm9vbGVhbik6IGFueSB7XHJcbiAgICBjb25zdCBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgaWYgKGZvcmNlRGljdE1vZGUpIHtcclxuICAgICAgICBjb25zdCBJTlZBTElEX0lERU5USUZJRVJfMSA9ICcuJztcclxuICAgICAgICBjb25zdCBJTlZBTElEX0lERU5USUZJRVJfMiA9ICcvJztcclxuICAgICAgICAvLyBhc3NpZ24gZHVtbXkgdmFsdWVzIG9uIHRoZSBvYmplY3RcclxuICAgICAgICBtYXBbSU5WQUxJRF9JREVOVElGSUVSXzFdID0gMTtcclxuICAgICAgICBtYXBbSU5WQUxJRF9JREVOVElGSUVSXzJdID0gMTtcclxuICAgICAgICBkZWxldGUgbWFwW0lOVkFMSURfSURFTlRJRklFUl8xXTtcclxuICAgICAgICBkZWxldGUgbWFwW0lOVkFMSURfSURFTlRJRklFUl8yXTtcclxuICAgIH1cclxuICAgIHJldHVybiBtYXA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5Yik5pat5piv5ZCm5Li656m6bWFw6KGoXHJcbiAqIFxyXG4gKiBAcGFyYW0gbWFwIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHlNYXAobWFwOk9iamVjdCl7XHJcblx0Zm9yKGxldCBrIGluIG1hcCl7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cdHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOmAmui/h01hcOeahOWAvFxyXG4gKiBcclxuICogQHBhcmFtIG1hcCAtIE1hcOWvueixoVxyXG4gKiBAcGFyYW0gcGF0aCAtIOi3r+W+hFxyXG4gKiBAcGFyYW0gc3BsaXQgLSDliIbpmpTnrKZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXBWYWx1ZShtYXA6T2JqZWN0LCBwYXRoOnN0cmluZywgc3BsaXQ6c3RyaW5nID0gXCIvXCIpe1xyXG5cdGlmKHBhdGhbMF0gPT0gc3BsaXQpe1xyXG5cdFx0cGF0aCA9IHBhdGguc3Vic3RyKDEsIHBhdGgubGVuZ3RoLTEpO1xyXG5cdH1cclxuXHRpZihwYXRoW3BhdGgubGVuZ3RoIC0gMV0gPT0gc3BsaXQpe1xyXG5cdFx0cGF0aCA9IHBhdGguc3Vic3RyKDAsIHBhdGgubGVuZ3RoLTEpO1xyXG5cdH1cclxuXHRsZXQgdmFsdWU6YW55ID0gbWFwO1xyXG5cdGZvcihsZXQgbiBvZiBwYXRoLnNwbGl0KHNwbGl0KSl7XHJcblx0XHRpZighdmFsdWUpe1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHRcdHZhbHVlID0gdmFsdWVbbl07XHJcblx0fVxyXG5cdHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDpgJrov4fot6/lvoTorr7nva5NYXDnmoTlgLxcclxuICogXHJcbiAqIEBwYXJhbSBtYXAgLSBNYXDlr7nosaFcclxuICogQHBhcmFtIHBhdGggLSDot6/lvoRcclxuICogQHBhcmFtIHZhbHVlIC0g5YC8XHJcbiAqIEBwYXJhbSBzcGxpdCAtIOWIhumalOesplxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE1hcFZhbHVlKG1hcDpPYmplY3QsIHBhdGg6c3RyaW5nLCB2YWx1ZTphbnksIHNwbGl0OnN0cmluZyA9IFwiL1wiKXtcclxuXHRpZihwYXRoW3BhdGgubGVuZ3RoIC0gMV0gPT0gc3BsaXQpe1xyXG5cdFx0cGF0aCA9IHBhdGguc3Vic3RyKDAsIHBhdGgubGVuZ3RoLTEpO1xyXG5cdH1cclxuICAgIGxldCBzcGF0aHMgPSBwYXRoLnNwbGl0KHNwbGl0KTtcclxuXHRsZXQgZGVzdDphbnkgPSBtYXA7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3BhdGhzLmxlbmd0aCAtIDE7IGkrKyl7XHJcbiAgICAgICAgbGV0IHAgPSBzcGF0aHNbaV07XHJcbiAgICAgICAgbGV0IG5EZXN0ID0gZGVzdFtwXTtcclxuICAgICAgICBpZighbkRlc3Qpe1xyXG4gICAgICAgICAgICBuRGVzdCA9IGNyZWF0ZU1hcCgpO1xyXG4gICAgICAgICAgICBkZXN0W3BdID0gbkRlc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlc3QgPSBuRGVzdDtcclxuICAgIH1cclxuXHRkZXN0W3NwYXRoc1tzcGF0aHMubGVuZ3RoIC0gMV1dID0gdmFsdWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5ZCI5bm2TWFw6KGoPGJyLz5cclxuICogTWFw6KGo5ZCI5bm26KeE5YiZ77yaPGJyLz5cclxuICog6YGN5Y6G5rqQTWFw6KGo5a2X5q6177yM5a+55q+U55uu55qETWFw6KGo5a+55bqU5a2X5q6177yM5a2Y5Zyo5Yeg56eN5oOF5Ya177yaPGJyLz5cclxuICogMeOAgeebrueahE1hcOihqOS4reS4jeWtmOWcqOivpeWtl+aute+8jOebtOaOpeiuvue9ruS4uua6kE1hcOihqOWtl+autTxici8+XHJcbiAqIDLjgIHnm67nmoRNYXDooajlrZfmrrXlkozmupBNYXDooajlrZfmrrXlkIzkuLrmlbDnu4QoQXJyYXkp77yM5oqK5a2X5q6155qE5rqQTWFw6KGo5pWw57uE5aSN5Yi25Yiw55uu55qETWFw6KGo5pWw57uE5LitPGJyLz5cclxuICogM+OAgeebrueahE1hcOihqOWtl+auteWSjOa6kE1hcOihqOWtl+auteWQjOS4uuWvueixoShPYmplY3Qp77yM5Lul5a2X5q6155qE55uu55qETWFw6KGo5ZKM5rqQTWFw6KGo5Li65Y+C5pWw5YaN5qyh6LCD55So5qyh5Ye95pWwPGJyLz5cclxuICogNOOAgeWFtuS7luaDheWGte+8jOivtOaYjuWtmOWcqOWGsueqgeOAguitpuWRiuWQju+8jOa6kE1hcOihqOWtl+auteebtOaOpeimhuebluebrueahE1hcOihqOWtl+autVxyXG4gKiBcclxuICogQHBhcmFtIGRtYXAgLSDnm67nmoRNYXDooahcclxuICogQHBhcmFtIHNtYXAgLSDmupBNYXDooahcclxuICogQHBhcmFtIG9wdGlvbnMgLSDpgInpobnvvIzkuLvopoHlj6/ku6XmjIflrprlvILluLjovpPlh7rmoIfnrb7lkozmupDmlofku7ZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZU1hcChkbWFwOk9iamVjdCwgc21hcDpPYmplY3QsIG9wdGlvbnM6eyB0YWc/OnN0cmluZywgc291cmNlPzpzdHJpbmcgfSA9IHt9KXtcclxuICAgIGZvcihsZXQga2V5IGluIHNtYXApe1xyXG4gICAgICAgIGxldCBzdmFsdWUgPSBzbWFwW2tleV07XHJcbiAgICAgICAgbGV0IGR2YWx1ZSA9IGRtYXBba2V5XTtcclxuICAgICAgICBpZihkdmFsdWUgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGRtYXBba2V5XSA9IHN2YWx1ZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IHN0eXBlID0gdHlwZW9mIHN2YWx1ZTtcclxuICAgICAgICAgICAgbGV0IGR0eXBlID0gdHlwZW9mIGR2YWx1ZTtcclxuICAgICAgICAgICAgaWYoZHR5cGUgPT0gJ29iamVjdCcgJiYgc3R5cGUgPT0gZHR5cGUpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHNhcnJheSA9IHN2YWx1ZSBpbnN0YW5jZW9mIEFycmF5O1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhcnJheSA9IGR2YWx1ZSBpbnN0YW5jZW9mIEFycmF5O1xyXG4gICAgICAgICAgICAgICAgaWYoc2FycmF5ICE9IGRhcnJheSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Mud2FybihvcHRpb25zLnRhZyB8fCBUQUcsIGBpbnZhbGlkIG1lcmdlIHR5cGUgYXJyYXkgJyR7c2FycmF5fS0ke2RhcnJheX0nIGluIGtleSAnJHtrZXl9JyA8ICR7b3B0aW9ucy5zb3VyY2UgfHwgJ1t1bmtub3duXSd9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG1hcFtrZXldID0gc3ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZGFycmF5KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHZhbHVlLnB1c2goLi4uc3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlTWFwKGR2YWx1ZSwgc3ZhbHVlLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY2Mud2FybihvcHRpb25zLnRhZyB8fCBUQUcsIGBpbnZhbGlkIG1lcmdlIHR5cGUgJyR7c3R5cGV9LSR7ZHR5cGV9JyBpbiBrZXkgJyR7a2V5fScgPCAke29wdGlvbnMuc291cmNlIHx8ICdbdW5rbm93bl0nfWApO1xyXG4gICAgICAgICAgICAgICAgZG1hcFtrZXldID0gc3ZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOabtOaWsE1hcOihqDxici8+XHJcbiAqIE1hcOihqOabtOaWsOinhOWIme+8mjxici8+XHJcbiAqIOmBjeWOhua6kE1hcOihqOWtl+aute+8jOWvueavlOebrueahE1hcOihqOWvueW6lOWtl+aute+8jOWtmOWcqOWHoOenjeaDheWGte+8mjxici8+XHJcbiAqIDHjgIHnm67nmoRNYXDooajkuK3kuI3lrZjlnKjor6XlrZfmrrXvvIznm7TmjqXorr7nva7kuLrmupBNYXDooajlrZfmrrU8YnIvPlxyXG4gKiAy44CB55uu55qETWFw6KGo5a2X5q615ZKM5rqQTWFw6KGo5a2X5q615ZCM5Li65pWw57uEKEFycmF5Ke+8jOebtOaOpeiuvue9ruS4uua6kE1hcOihqOWtl+autTxici8+XHJcbiAqIDPjgIHnm67nmoRNYXDooajlrZfmrrXlkozmupBNYXDooajlrZfmrrXlkIzkuLrlr7nosaEoT2JqZWN0Ke+8jOS7peWtl+auteeahOebrueahE1hcOihqOWSjOa6kE1hcOihqOS4uuWPguaVsOWGjeasoeiwg+eUqOasoeWHveaVsDxici8+XHJcbiAqIFxyXG4gKiBAcGFyYW0gZG1hcCAtIOebrueahE1hcOihqFxyXG4gKiBAcGFyYW0gc21hcCAtIOa6kE1hcOihqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU1hcChkbWFwOk9iamVjdCwgc21hcDpPYmplY3Qpe1xyXG4gICAgZm9yKGxldCBrZXkgaW4gc21hcCl7XHJcbiAgICAgICAgbGV0IHN2YWx1ZSA9IHNtYXBba2V5XTtcclxuICAgICAgICBsZXQgZHZhbHVlID0gZG1hcFtrZXldO1xyXG4gICAgICAgIGlmKGR2YWx1ZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgZG1hcFtrZXldID0gc3ZhbHVlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgc3R5cGUgPSB0eXBlb2Ygc3ZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgZHR5cGUgPSB0eXBlb2YgZHZhbHVlO1xyXG4gICAgICAgICAgICBpZihkdHlwZSA9PSAnb2JqZWN0JyAmJiBzdHlwZSA9PSBkdHlwZSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2FycmF5ID0gc3ZhbHVlIGluc3RhbmNlb2YgQXJyYXk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGFycmF5ID0gZHZhbHVlIGluc3RhbmNlb2YgQXJyYXk7XHJcbiAgICAgICAgICAgICAgICBpZihzYXJyYXkgIT0gZGFycmF5KXtcclxuICAgICAgICAgICAgICAgICAgICBkbWFwW2tleV0gPSBzdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpZihkYXJyYXkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkbWFwW2tleV0gPSBzdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1hcChkdmFsdWUsIHN2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGRtYXBba2V5XSA9IHN2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDmj5Dlj5ZNYXDooag8YnIvPlxyXG4gKiBNYXDooajmj5Dlj5bop4TliJnvvJo8YnIvPlxyXG4gKiDpgY3ljobnm67nmoRNYXDooajlrZfmrrXvvIzlr7nmr5TmupBNYXDooajlr7nlupTlrZfmrrXvvIzlrZjlnKjlh6Dnp43mg4XlhrXvvJo8YnIvPlxyXG4gKiAx44CB5rqQTWFw6KGo5Lit5LiN5a2Y5Zyo6K+l5a2X5q6177yM6Lez6L+HPGJyLz5cclxuICogMeOAgea6kE1hcOihqOWtl+auteWSjOebrueahE1hcOihqOWtl+auteexu+Wei+S4jeWQjO+8jOi3s+i/hzxici8+XHJcbiAqIDLjgIHmupBNYXDooajlrZfmrrXlkoznm67nmoRNYXDooajlrZfmrrXnsbvlnovnm7jlkIzvvIzkuI3kuLooT2JqZWN0Ke+8jOebrueahE1hcOihqOWtl+auteiuvue9ruS4uua6kE1hcOihqOWtl+autTxici8+XHJcbiAqIDPjgIHmupBNYXDooajlrZfmrrXlkoznm67nmoRNYXDooajlrZfmrrXnsbvlnovnm7jlkIzvvIzlkIzkuLooT2JqZWN0Ke+8jOS7peWtl+auteeahOebrueahE1hcOihqOWSjOa6kE1hcOihqOS4uuWPguaVsOWGjeasoeiwg+eUqOasoeWHveaVsDxici8+XHJcbiAqIFxyXG4gKiBAcGFyYW0gZG1hcCAtIOebrueahE1hcOihqFxyXG4gKiBAcGFyYW0gc21hcCAtIOa6kE1hcOihqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RNYXAoZG1hcDpPYmplY3QsIHNtYXA6T2JqZWN0KXtcclxuICAgIGZvcihsZXQga2V5IGluIGRtYXApe1xyXG4gICAgICAgIGxldCBkdmFsdWUgPSBkbWFwW2tleV07XHJcbiAgICAgICAgbGV0IHN2YWx1ZSA9IHNtYXBba2V5XTtcclxuICAgICAgICBpZihzdmFsdWUgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGxldCBzdHlwZSA9IHR5cGVvZiBzdmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBkdHlwZSA9IHR5cGVvZiBkdmFsdWU7XHJcbiAgICAgICAgICAgIGlmKHN0eXBlID09IGR0eXBlKXtcclxuICAgICAgICAgICAgICAgIGlmKGR0eXBlID09ICdvYmplY3QnKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2FycmF5ID0gc3ZhbHVlIGluc3RhbmNlb2YgQXJyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhcnJheSA9IGR2YWx1ZSBpbnN0YW5jZW9mIEFycmF5O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHNhcnJheSA9PSBkYXJyYXkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkYXJyYXkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG1hcFtrZXldID0gc3ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdE1hcChkdmFsdWUsIHN2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBkbWFwW2tleV0gPSBzdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog57yT5Yay6L2s5o2i5Li6VVRGMTblrZfnrKbkuLJcclxuICogXHJcbiAqIEBwYXJhbSBidWZmIC0g57yT5YayXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWIyc3RyKGJ1ZmY6QXJyYXlCdWZmZXIpe1xyXG5cdHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIG5ldyBVaW50MTZBcnJheShidWZmKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICogVVRGMTblrZfnrKbkuLLovazkuLrnvJPlhrJcclxuICogXHJcbiAqIEBwYXJhbSBzdHIgLSDlrZfnrKbkuLJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHIyYWIoc3RyOnN0cmluZyl7XHJcblx0bGV0IGJ1ZmYgPSBuZXcgQXJyYXlCdWZmZXIoc3RyLmxlbmd0aCAqIDIpO1xyXG5cdHZhciBidWZWaWV3ID0gbmV3IFVpbnQxNkFycmF5KGJ1ZmYpO1xyXG5cdGZvciAodmFyIGk9MCwgbD1zdHIubGVuZ3RoOyBpPGw7IGkrKykge1xyXG5cdFx0YnVmVmlld1tpXSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xyXG5cdH1cclxuXHRyZXR1cm4gYnVmZjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDph43lpI3mjIflrprnmoTlrZfnrKbkuLJcclxuICogXHJcbiAqIEBwYXJhbSBzcmMgLemHjeWkjeeahOWtl+espuS4slxyXG4gKiBAcGFyYW0gbiAtIOmHjeWkjeasoeaVsFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdChzcmM6c3RyaW5nLCBuOm51bWJlcikge1xyXG4gICAgcmV0dXJuIChuZXcgQXJyYXkobiArIDEpKS5qb2luKHNyYyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICogYmFzZTY05a2X56ym5Liy6L2s5Li6VWludDhBcnJheVxyXG4gKiBcclxuICogQHBhcmFtIGI2NHN0ciAtIGJhc2U2NOWtl+espuS4slxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGI2NDJ1OGEoYjY0c3RyOnN0cmluZykge1xyXG4gICAgcmVwZWF0KCcxMjMnLDMpO1xyXG5cdGNvbnN0IHBhZGRpbmcgPSByZXBlYXQoJz0nLCg0IC0gYjY0c3RyLmxlbmd0aCAlIDQpICUgNCk7XHJcblx0Y29uc3QgYmFzZTY0ID0gKGI2NHN0ciArIHBhZGRpbmcpXHJcblx0XHRcdFx0LnJlcGxhY2UoL1xcLS9nLCAnKycpXHJcblx0XHRcdFx0LnJlcGxhY2UoL18vZywgJy8nKTtcclxuXHRjb25zdCByYXdEYXRhID0gYXRvYihiYXNlNjQpO1xyXG5cdGNvbnN0IG91dHB1dEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkocmF3RGF0YS5sZW5ndGgpO1xyXG5cclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHJhd0RhdGEubGVuZ3RoOyArK2kpIHtcclxuXHRcdG91dHB1dEFycmF5W2ldID0gcmF3RGF0YS5jaGFyQ29kZUF0KGkpO1xyXG5cdH1cclxuXHRyZXR1cm4gb3V0cHV0QXJyYXk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICogQXJyYXlCdWZmZXLovazkuLpCYXNlNjTlrZfnrKbkuLJcclxuICogXHJcbiAqIEBwYXJhbSBidWZmIC0g57yT5Yay5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWIyYjY0KGJ1ZmY6QXJyYXlCdWZmZXIpe1xyXG5cdGxldCBiaW5hcnkgPSAnJztcclxuXHRsZXQgYnl0ZXMgPSBuZXcgVWludDhBcnJheShidWZmKTtcclxuXHRsZXQgbGVuID0gYnl0ZXMuYnl0ZUxlbmd0aDtcclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRiaW5hcnkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSk7XHJcblx0fVxyXG5cdHJldHVybiBidG9hKGJpbmFyeSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5ZCI5bm2QXJyYXlCdWZmZXJcclxuICogXHJcbiAqIEBwYXJhbSBhcnJheXMgLSDmlbDnu4RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUFCcyguLi5hcnJheXM6QXJyYXlCdWZmZXJbXSkge1xyXG5cdGxldCB0b3RhbExlbiA9IDA7XHJcblx0bGV0IHVpOGFycmF5czpVaW50OEFycmF5W10gPSBbXTtcclxuXHRmb3IgKGxldCBhcnJheSBvZiBhcnJheXMpe1xyXG5cdFx0dWk4YXJyYXlzLnB1c2gobmV3IFVpbnQ4QXJyYXkoYXJyYXkpKTtcclxuXHRcdHRvdGFsTGVuICs9IGFycmF5LmJ5dGVMZW5ndGg7XHJcblx0fVxyXG5cclxuICAgIGxldCByZXMgPSBuZXcgVWludDhBcnJheSh0b3RhbExlbik7XHJcbiAgICBsZXQgb2Zmc2V0ID0gMDtcclxuICAgIGZvcihsZXQgdWk4YXJyYXkgb2YgdWk4YXJyYXlzKSB7XHJcbiAgICAgICAgcmVzLnNldCh1aThhcnJheSwgb2Zmc2V0KTtcclxuICAgICAgICBvZmZzZXQgKz0gdWk4YXJyYXkubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcy5idWZmZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5aSN5Yi2QXJyYXlCdWZmZXJcclxuICogXHJcbiAqIEBwYXJhbSBzcmMgLSDmupBBcnJheUJ1ZmZlclxyXG4gKiBAcGFyYW0gZGVzdCAtIOebrueahEFycmF5QnVmZmVyXHJcbiAqIEBwYXJhbSBzdGFydCAtIOebrueahOW8gOWni+S9jee9rlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvcHlBQihzcmM6QXJyYXlCdWZmZXIsIGRlc3Q6QXJyYXlCdWZmZXIsIHN0YXJ0Om51bWJlcil7XHJcblx0KG5ldyBVaW50OEFycmF5KGRlc3QpKS5zZXQobmV3IFVpbnQ4QXJyYXkoc3JjKSwgc3RhcnQpO1xyXG59XHJcblxyXG59XHJcblxyXG59XHJcbiIsIi8qXHJcbkNvcHlyaWdodCAyMDIxIEx1SnVuXHJcblxyXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IFxyXG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIFxyXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIFxyXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIFxyXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIFxyXG50byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBcclxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIFxyXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgXHJcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFxyXG5USEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBcclxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgXHJcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG4qL1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vbGNjLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3V0aWxzL2pzLnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBsY2Mge1xyXG5cclxuY29uc3QgVEFHID0gXCJsY2MvYmFzZS9kb2luZy50c1wiO1xyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDorqHmlbDlmahcclxuICovXHJcbmNsYXNzIENvdW50ZXIge1xyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDorqHmlbDlgLxcclxuXHQgKi9cclxuICAgIHByaXZhdGUgX2NvdW50Om51bWJlciA9IDA7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOW9kumbtuWbnuiwg1xyXG5cdCAqL1xyXG4gICAgcHJpdmF0ZSBfb25aZXJvOkZ1bmN0aW9uID0gbnVsbDtcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5qOA5p+l5b2S6Zu2XHJcblx0ICovXHJcblx0cHJpdmF0ZSBjaGVja1plcm8oKXtcclxuXHRcdGlmKHRoaXMuX2NvdW50IDw9IDApe1xyXG5cdFx0XHRpZih0aGlzLl9vblplcm8pe1xyXG5cdFx0XHRcdGxldCBjYWxsYmFjayA9IHRoaXMuX29uWmVybztcclxuXHRcdFx0XHR0aGlzLl9vblplcm8gPSBudWxsO1xyXG5cdFx0XHRcdHRyeXtcclxuXHRcdFx0XHRcdGNhbGxiYWNrKCk7XHJcblx0XHRcdFx0fWNhdGNoKGUpe1xyXG5cdFx0XHRcdFx0Y2MuZXJyb3IoVEFHLCBgY2hlY2taZXJvIEV4Y2VwdGlvbiAke2V9YCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiDph43nva7orqHmlbBcclxuXHQgKi9cclxuXHRwdWJsaWMgcmVzZXQoKXtcclxuXHRcdHRoaXMuX2NvdW50ID0gMDtcclxuXHRcdHRoaXMuY2hlY2taZXJvKCk7XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOWinuWKoOiuoeaVsFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhZGRDb3VudCgpe1xyXG5cdFx0dGhpcy5fY291bnQgKys7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDlh4/lsJHorqHmlbBcclxuXHQgKi9cclxuXHRwdWJsaWMgZGVjQ291bnQoKXtcclxuXHRcdHRoaXMuX2NvdW50IC0tO1xyXG5cdFx0dGhpcy5jaGVja1plcm8oKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOWcqOWbnuiwg+WHveaVsOWGheiuoeaVsFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBjYWxsYmFjayAtIOWbnuiwg+WHveaVsFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhc3luYyBpbihjYWxsYmFjazpGdW5jdGlvbil7XHJcblx0XHR0aGlzLmFkZENvdW50KCk7XHJcblx0XHRpZihjYWxsYmFjayl7XHJcblx0XHRcdHRyeXtcclxuXHRcdFx0XHRhd2FpdCBjYWxsYmFjaygpO1xyXG5cdFx0XHR9Y2F0Y2goZSl7XHJcblx0XHRcdFx0Y2MuZXJyb3IoVEFHLCBgaW4gRXhjZXB0aW9uICR7ZX1gKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5kZWNDb3VudCgpO1xyXG5cdH1cclxuXHRcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDnm7TliLDlvZLpm7ZcclxuXHQgKi9cclxuXHRwdWJsaWMgYXN5bmMgdW50aWxaZXJvKCl7XHJcblx0XHRpZih0aGlzLl9jb3VudCA+IDApe1xyXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSk9PntcclxuXHRcdFx0XHR0aGlzLl9vblplcm8gPSByZXNvbHZlO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5bel5L2c5Lit57G7XHJcbiAqL1xyXG5jbGFzcyBEb2luZyB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIOe0ouW8leWKoOi9vVxyXG5cdCAqL1xyXG5cdHB1YmxpYyBpbmRleExvYWQ6Q291bnRlciA9IG5ldyBDb3VudGVyKCk7XHJcblx0XHJcblx0LyoqXHJcblx0ICog6K+t6KiA5pu05pawXHJcblx0ICovXHJcblx0cHVibGljIGxhbmdVcGRhdGU6Q291bnRlciA9IG5ldyBDb3VudGVyKCk7XHJcblx0XHJcblx0LyoqXHJcblx0ICog54q25oCB5Yid5aeL5YyWXHJcblx0ICovXHJcblx0cHVibGljIHN0YXRlSW5pdGlhbGl6ZTpDb3VudGVyID0gbmV3IENvdW50ZXIoKTtcclxuXHRcclxuXHQvKipcclxuXHQgKiDnirbmgIHph4rmlL5cclxuXHQgKi9cclxuXHRwdWJsaWMgc3RhdGVSZWxlYXNlOkNvdW50ZXIgPSBuZXcgQ291bnRlcigpO1xyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIOmHjee9ruW3peS9nOS4rVxyXG5cdCAqL1xyXG5cdHB1YmxpYyByZXNldCgpe1xyXG5cdFx0dGhpcy5pbmRleExvYWQucmVzZXQoKTtcclxuXHRcdHRoaXMubGFuZ1VwZGF0ZS5yZXNldCgpO1xyXG5cdFx0dGhpcy5zdGF0ZUluaXRpYWxpemUucmVzZXQoKTtcclxuXHRcdHRoaXMuc3RhdGVSZWxlYXNlLnJlc2V0KCk7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOW3peS9nOS4reWvueixoVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGRvaW5nID0gbmV3IERvaW5nKCk7XHJcblxyXG59XHJcbiIsIi8qXHJcbkNvcHlyaWdodCAyMDIxIEx1SnVuXHJcblxyXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IFxyXG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIFxyXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIFxyXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIFxyXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIFxyXG50byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBcclxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIFxyXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgXHJcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFxyXG5USEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBcclxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgXHJcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG4qL1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3V0aWxzL2pzLnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBsY2Mge1xyXG5cclxuY29uc3QgVEFHID0gXCJsY2MvYmFzZS92YXJpYWJsZS50c1wiO1xyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDlj5jph4/nsbtcclxuICovXHJcbmNsYXNzIFZhcmlhYmxlIHtcclxuICAgIC8qKlxyXG4gICAgICogQHpoXHJcbiAgICAgKiDmmKDlsITooahcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfbWFwOntba2V5OnN0cmluZ106YW55fSA9IGpzLmNyZWF0ZU1hcCgpO1xyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIEB6aFxyXG4gICAgICog6K6+572u5Y+Y6YePXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB2bmFtZSAtIOWPmOmHj+WQjeensFxyXG4gICAgICogQHBhcmFtIHZhbHVlIC0g5Y+Y6YeP5YC8XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQodm5hbWU6c3RyaW5nLCB2YWx1ZTphbnkpe1xyXG4gICAgICAgIERFQlVHLkJBU0UgJiYgY2MubG9nKFRBRywgYHNldCAke3ZuYW1lfSA9PiAke3ZhbHVlfWApO1xyXG4gICAgICAgIHRoaXMuX21hcFt2bmFtZV0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEB6aFxyXG4gICAgICog6I635b6X5Y+Y6YePXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB2bmFtZSAtIOWPmOmHj+WQjeensFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0KHZuYW1lOnN0cmluZyl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcFt2bmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOenu+mZpOaJgOacieWPmOmHj1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlQWxsKCl7XHJcbiAgICAgICAgZm9yKGxldCB2bmFtZSBpbiBPYmplY3Qua2V5cyh0aGlzLl9tYXApKXtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX21hcFt2bmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIERFQlVHLkJBU0UgJiYgY2MubG9nKFRBRywgYHJlbW92ZUFsbGApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHpoXHJcbiAgICAgKiDop6PmnpDlrZfnrKbkuLLkuK3nmoTlj5jph49cclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHN0ciAtIOWtl+espuS4slxyXG4gICAgICogQHBhcmFtIGV4dE1hcCAtIOWklumDqOaYoOWwhOihqO+8jOS8mOWFiOino+aekFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGFyc2VTdHJpbmcoc3RyOnN0cmluZywgZXh0TWFwOntba2V5OnN0cmluZ106YW55fSA9IHt9KXtcclxuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcJFxceyhbXFx3XFxkXzpcXC5dKylcXH0vZywgKGsgLG06c3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKG0uaW5kZXhPZihcIjpcIikgPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZXh0TWFwW21dO1xyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl9tYXBbbV07XHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZSAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcnRzID0gbS5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBleHRNYXBbcGFydHNbMF1dO1xyXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIHZhbHVlID09IFwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlKC4uLnBhcnRzWzFdLnNwbGl0KFwiLFwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX21hcFtwYXJ0c1swXV07XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT0gXCJmdW5jdGlvblwiKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUoLi4ucGFydHNbMV0uc3BsaXQoXCIsXCIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gXCIke1wiICsgbSArIFwifVwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDlj5jph4/lr7nosaFcclxuICovXHJcbmV4cG9ydCBjb25zdCB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZSgpO1xyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDnv7vor5FKU09O5a+56LGh5Lit55qE5Y+Y6YePXHJcbiAqIFxyXG4gKiBAcGFyYW0ganNvbiBqc29u5a+56LGhXHJcbiAqIEBwYXJhbSBsb2NhbHBhdGgg5paH5Lu25b2T5YmN6Lev5b6EXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlSlNPTihqc29uOmFueSwgbG9jYWxwYXRoPzpzdHJpbmcpe1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UodmFyaWFibGUucGFyc2VTdHJpbmcoSlNPTi5zdHJpbmdpZnkoanNvbiksIHsgbG9jYWxwYXRoIDogbG9jYWxwYXRoIHx8IFwiXCIgfSkpO1xyXG59XHJcblxyXG59XHJcbiIsIi8qXHJcbkNvcHlyaWdodCAyMDIxIEx1SnVuXHJcblxyXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IFxyXG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIFxyXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIFxyXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIFxyXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIFxyXG50byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBcclxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIFxyXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgXHJcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFxyXG5USEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBcclxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgXHJcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG4qL1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vbGNjLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vdmFyaWFibGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdXRpbHMvanMudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIGxjYyB7XHJcblxyXG5jb25zdCBUQUcgPSBcImxjYy9iYXNlL3JlZmVyZW5jZS50c1wiO1xyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDmoYbmnrbplJnor69cclxuICovXHJcbmV4cG9ydCBuYW1lc3BhY2UgRVJST1Ige1xyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOW8leeUqOWGsueqgVxyXG5cdCAqL1xyXG5cdGV4cG9ydCBsZXQgUkVGRVJFTkNFX0NPTkZMSUNUID0gdHJ1ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5byV55So6ZSuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFJlZktleSB7XHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6Lev5b6EXHJcblx0ICovXHJcblx0cGF0aDpzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOWMheWQjSwg6buY6K6k5L2/55So5b2T5YmN5Yqg6L2955qEXHJcblx0ICovXHJcblx0cGFjaz86c3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOiOt+W+l+W8leeUqGtleeWtl+espuS4slxyXG4gKiBcclxuICogQHBhcmFtIGtleSDlvJXnlKhrZXnlr7nosaFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWZLZXlTdHJpbmcoa2V5OlJlZktleSl7XHJcblx0aWYoa2V5LnBhY2sgPT0gbnVsbCl7XHJcblx0XHRrZXkucGFjayA9IHZhcmlhYmxlLmdldCgnX19Mb2FkUGFja19fJykgfHwgJ3Jlc291cmNlcyc7XHJcblx0fVxyXG5cdHJldHVybiBgJHtrZXkucGFja306Ly8ke2tleS5wYXRofWA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5byV55So57G7XHJcbiAqL1xyXG5jbGFzcyBSZWZlcmVuY2Uge1xyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOaYoOWwhOihqFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgX21hcDp7W2tleTpzdHJpbmddOmFueX0gPSBqcy5jcmVhdGVNYXAoKTtcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6I635b6X5oyH5a6a5byV55SoXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGtleSDplK5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0PFQgPSBhbnk+KGtleTpzdHJpbmcgfCBSZWZLZXkpe1xyXG5cdFx0aWYodHlwZW9mIGtleSAhPSAnc3RyaW5nJyl7XHJcblx0XHRcdGtleSA9IGdldFJlZktleVN0cmluZyhrZXkpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIDxUPnRoaXMuX21hcFtrZXldO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5re75Yqg5oyH5a6a5byV55SoXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGtleSDplK5cclxuXHQgKiBAcGFyYW0gdmFsdWUg5YC8XHJcblx0ICovXHJcblx0cHVibGljIGFkZChrZXk6c3RyaW5nIHwgUmVmS2V5LCB2YWx1ZTphbnkpe1xyXG5cdFx0aWYodHlwZW9mIGtleSAhPSAnc3RyaW5nJyl7XHJcblx0XHRcdGtleSA9IGdldFJlZktleVN0cmluZyhrZXkpO1xyXG5cdFx0fVxyXG5cdFx0aWYodGhpcy5fbWFwW2tleV0pe1xyXG5cdFx0XHRsZXQgbXNnID0gYGtleSAke2tleX0gY29uZmxpY3RgO1xyXG5cdFx0XHRpZihFUlJPUi5SRUZFUkVOQ0VfQ09ORkxJQ1Qpe1xyXG5cdFx0XHRcdGNjLmVycm9yKFRBRywgbXNnKTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0Y2Mud2FybihUQUcsIG1zZyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdERFQlVHLkJBU0UgJiYgY2MubG9nKFRBRywgYGFkZCAke2tleX0gPT4gJHt2YWx1ZX1gKTtcclxuXHRcdHRoaXMuX21hcFtrZXldID0gdmFsdWU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDpgY3ljoblvJXnlKhcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gY2FsbGJhY2sgLSDlm57osIPlh73mlbBcclxuXHQgKi9cclxuXHRwdWJsaWMgZm9yZWFjaChjYWxsYmFjazooa2V5OnN0cmluZywgdmFsdWU6YW55KT0+Ym9vbGVhbil7XHJcblx0XHRmb3IobGV0IGsgaW4gdGhpcy5fbWFwKXtcclxuXHRcdFx0aWYoY2FsbGJhY2soaywgdGhpcy5fbWFwW2tdKSl7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOenu+mZpOaMh+WumuW8leeUqFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBrZXkg6ZSuXHJcblx0ICovXHJcblx0cHVibGljIHJlbW92ZShrZXk6c3RyaW5nIHwgUmVmS2V5KXtcclxuXHRcdGlmKHR5cGVvZiBrZXkgIT0gJ3N0cmluZycpe1xyXG5cdFx0XHRrZXkgPSBnZXRSZWZLZXlTdHJpbmcoa2V5KTtcclxuXHRcdH1cclxuXHRcdERFQlVHLkJBU0UgJiYgY2MubG9nKFRBRywgYHJlbW92ZSAke2tleX1gKTtcclxuXHRcdGRlbGV0ZSB0aGlzLl9tYXBba2V5XTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOmAmui/h+WMheWQjeensOenu+mZpFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBwYWNrIOWMheWQjeensFxyXG5cdCAqL1xyXG5cdHB1YmxpYyByZW1vdmVCeVBhY2socGFjazpzdHJpbmcpe1xyXG5cdFx0bGV0IHByZWZpeCA9IGAke3BhY2t9Oi8vYDtcclxuXHRcdGZvcihsZXQga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuX21hcCkpe1xyXG5cdFx0XHRpZihrZXkuaW5kZXhPZihwcmVmaXgpID09IDApe1xyXG5cdFx0XHRcdHRoaXMucmVtb3ZlKGtleSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOenu+mZpOaJgOacieW8leeUqFxyXG5cdCAqL1xyXG5cdHB1YmxpYyByZW1vdmVBbGwoKXtcclxuXHRcdGZvcihsZXQga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuX21hcCkpe1xyXG5cdFx0XHR0aGlzLnJlbW92ZShrZXkpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDlvJXnlKjlr7nosaFcclxuICovXHJcbmV4cG9ydCBjb25zdCByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKCk7XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOijhemlsOWZqFxyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBfZGVjb3JhdG9yIHtcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICogbGNj5byV55So57G76KOF6aWw5ZmoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVmY2xhc3Moa2V5PzpzdHJpbmcgfCBSZWZLZXkpIHtcclxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0OmFueSl7XHJcblx0XHRrZXkgPSBrZXkgfHwgdGFyZ2V0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lO1xyXG5cdFx0aWYodHlwZW9mIGtleSAhPSAnc3RyaW5nJyl7XHJcblx0XHRcdGtleSA9IGdldFJlZktleVN0cmluZyhrZXkpO1xyXG5cdFx0fVxyXG5cdFx0bGNjLnJlZmVyZW5jZS5hZGQoa2V5LCB0YXJnZXQpO1xyXG5cdH1cclxufTtcclxuXHJcbn1cclxuXHJcbn1cclxuIiwiLypcclxuQ29weXJpZ2h0IDIwMjEgTHVKdW5cclxuXHJcblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgXHJcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgXHJcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgXHJcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgXHJcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgXHJcbnRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIFxyXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgXHJcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBcclxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgXHJcblRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIFxyXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBcclxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXHJcbiovXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9sY2MudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9kb2luZy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3JlZmVyZW5jZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3ZhcmlhYmxlLnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBsY2Mge1xyXG5cclxuY29uc3QgVEFHID0gXCJsY2MvYmFzZS9zdGF0ZS50c1wiO1xyXG4gICAgXHJcbi8qKlxyXG4gKiBAemhcclxuICog5qGG5p6254q25oCBXHJcbiAqL1xyXG5jbGFzcyBTdGF0ZSBleHRlbmRzIGNjLkV2ZW50VGFyZ2V0IHtcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5piv5ZCm5bey57uP5Yid5aeL5YyWXHJcblx0ICovXHJcblx0cHJpdmF0ZSBfaW5pdGlhbGl6ZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDliKTmlq3mmK/lkKblt7Lnu4/liJ3lp4vljJZcclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0IGluaXRpYWxpemVkKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5faW5pdGlhbGl6ZWQ7XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOWIneWni+WMllxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhc3luYyBpbml0aWFsaXplKCl7XHJcblx0XHRpZighdGhpcy5faW5pdGlhbGl6ZWQpe1xyXG5cdFx0XHRyZWZlcmVuY2UucmVtb3ZlQWxsKCk7XHJcblx0XHRcdHZhcmlhYmxlLnJlbW92ZUFsbCgpO1xyXG5cdFx0XHRkb2luZy5yZXNldCgpO1xyXG5cdFx0XHR0cnl7XHJcblx0XHRcdFx0dGhpcy5lbWl0KCdpbml0aWFsaXplJyk7XHJcblx0XHRcdH1jYXRjaChlKXtcclxuXHRcdFx0XHRjYy5lcnJvcihUQUcsIGBpbml0aWFsaXplIEV4Y2VwdGlvbiAke2V9YCk7XHJcblx0XHRcdH1cclxuXHRcdFx0YXdhaXQgZG9pbmcuc3RhdGVJbml0aWFsaXplLnVudGlsWmVybygpO1xyXG5cdFx0XHR0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOmHiuaUvlxyXG5cdCAqL1xyXG5cdCBwdWJsaWMgYXN5bmMgcmVsZWFzZSgpe1xyXG5cdFx0aWYodGhpcy5faW5pdGlhbGl6ZWQpe1xyXG5cdFx0XHR0aGlzLl9pbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cdFx0XHRkb2luZy5yZXNldCgpO1xyXG5cdFx0XHR0cnl7XHJcblx0XHRcdFx0dGhpcy5lbWl0KCdyZWxlYXNlJyk7XHJcblx0XHRcdH1jYXRjaChlKXtcclxuXHRcdFx0XHRjYy5lcnJvcihUQUcsIGByZWxlYXNlIEV4Y2VwdGlvbiAke2V9YCk7XHJcblx0XHRcdH1cclxuXHRcdFx0YXdhaXQgZG9pbmcuc3RhdGVSZWxlYXNlLnVudGlsWmVybygpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDmoYbmnrbnirbmgIHlr7nosaFcclxuICovXHJcbmV4cG9ydCBjb25zdCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG5cclxufVxyXG4iLCIvKlxyXG5Db3B5cmlnaHQgMjAyMSBMdUp1blxyXG5cclxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBcclxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBcclxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyBcclxudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBcclxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCBcclxudG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gXHJcbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBcclxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIFxyXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBcclxuVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgXHJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIFxyXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuKi9cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9iYXNlL2xjYy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9iYXNlL3N0YXRlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3V0aWxzL2pzLnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBsY2Mge1xyXG5cclxuY29uc3QgVEFHID0gXCJsY2MvYXJjaGl2ZS9hcmNoaXZlLW1hbmFnZXIudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5LqL5Lu254K55Z2X5L2N5pWwXHJcbiAqL1xyXG5jb25zdCBFUE9JTlRfQkxPQ0sgPSAzMjtcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5a2Y5qGj5L+h5oGv6aG5XHJcbiAqL1xyXG5jb25zdCBJTkZPX0lURU0gPSBcImFyY2hpdmVfaW5mb1wiXHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOWtmOaho+aPkuanveWJjee8gFxyXG4gKi9cclxuY29uc3QgREFUQV9QUkVGSVggPSBcImFyY2hpdmVfZGF0YV9cIjtcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog6buY6K6k5a2Y5qGj5LqL5Lu25q61XHJcbiAqL1xyXG5leHBvcnQgbGV0IEFSQ0hJVkVfRVZFTlRTX1NFR0VNRU5UID0gJ2RlZmF1bHQnO1xyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDlrZjmoaPkv6Hmga9cclxuICovXHJcbmludGVyZmFjZSBBcmNoaXZlSW5mbyB7XHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5o+S5qe9XHJcblx0ICovXHJcblx0c2xvdDpudW1iZXI7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOWQjeWtl1xyXG5cdCAqL1xyXG5cdG5hbWU6c3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDml7bpl7RcclxuXHQgKi9cclxuXHR0aW1lOm51bWJlcjtcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog54mI5pysXHJcblx0ICovXHJcblx0dmVyc2lvbjpzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5a2Y5qGj566h55CG5ZmoXHJcbiAqL1xyXG5jbGFzcyBBcmNoaXZlTWFuYWdlciBleHRlbmRzIGNjLkV2ZW50VGFyZ2V0IHtcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5a2Y5qGj5L+h5oGvXHJcblx0ICovXHJcblx0cHJpdmF0ZSBfaW5mb3M6e1trZXk6bnVtYmVyXTpBcmNoaXZlSW5mb30gPSBqcy5jcmVhdGVNYXAoKTtcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5b2T5YmN5a2Y5qGj5o+S5qe9XHJcblx0ICovXHJcblx0cHJpdmF0ZSBfbm93U2xvdDpudW1iZXIgPSAwO1xyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDlvZPliY3lrZjmoaPmlbDmja5cclxuXHQgKi9cclxuXHRwcml2YXRlIF9kYXRhOmFueSA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOaehOmAoOWHveaVsFxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0c3RhdGUub24oJ2luaXRpYWxpemUnLCAoKT0+e1xyXG5cdFx0XHRkb2luZy5zdGF0ZUluaXRpYWxpemUuaW4oKCk9PntcclxuXHRcdFx0XHR0aGlzLl9pbmZvcyA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKElORk9fSVRFTSkgfHwgXCJ7fVwiKTtcclxuXHRcdFx0XHR0aGlzLl9ub3dTbG90ID0gMDtcclxuXHRcdFx0XHR0aGlzLl9kYXRhID0gbnVsbDtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdHN0YXRlLm9uKCdyZWxlYXNlJywgKCk9PntcclxuXHRcdFx0ZG9pbmcuc3RhdGVSZWxlYXNlLmluKCgpPT57XHJcblx0XHRcdFx0dGhpcy5jbGVhcigpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDojrflvpflvZPliY3lrZjmoaPkv6Hmga9cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0QXJjaGl2ZUluZm8oKXtcclxuXHRcdHJldHVybiB0aGlzLl9pbmZvc1t0aGlzLHRoaXMuX25vd1Nsb3RdO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6I635b6X5b2T5YmN5a2Y5qGj5pWw5o2uXHJcblx0ICovXHJcblx0cHVibGljIGdldEFyY2hpdmVEYXRhKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5fZGF0YTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOiOt+W+l+aJgOacieWtmOaho1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXRBcmNoaXZlcygpe1xyXG5cdFx0bGV0IGFyY2hpdmVzOkFyY2hpdmVJbmZvW10gPSBbXTtcclxuXHRcdGZvcihsZXQgcyBpbiB0aGlzLl9pbmZvcyl7XHJcblx0XHRcdGFyY2hpdmVzLnB1c2godGhpcy5faW5mb3Nbc10pO1xyXG5cdFx0fVxyXG5cdFx0YXJjaGl2ZXMuc29ydCgoYSwgYik9PntcclxuXHRcdFx0cmV0dXJuIGIudGltZSAtIGEudGltZTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGFyY2hpdmVzO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5Yqg6L295a2Y5qGjXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHNsb3QgLSDmj5Lmp71cclxuXHQgKi9cclxuXHRwdWJsaWMgbG9hZEFyY2hpdmUoc2xvdDpudW1iZXIpe1xyXG5cdFx0dGhpcy5fbm93U2xvdCA9IHNsb3Q7XHJcblx0XHRsZXQgZGF0YXMgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oREFUQV9QUkVGSVggKyB0aGlzLl9ub3dTbG90KTtcclxuXHRcdGlmKGRhdGFzKXtcclxuXHRcdFx0dGhpcy5fZGF0YSA9IEpTT04ucGFyc2UoZGF0YXMpO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHRoaXMuZW1pdChcImxvYWRcIiwgdGhpcy5fZGF0YSwgdGhpcy5faW5mb3NbdGhpcy5fbm93U2xvdF0pO1xyXG5cdFx0XHRcdERFQlVHLkFSQ0hJVkUgJiYgY2MubG9nKFRBRywgYGxvYWRBcmNoaXZlICR7c2xvdH1gKTtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fWNhdGNoKGUpe1xyXG5cdFx0XHRcdGNjLmVycm9yKFRBRywgYGxvYWRBcmNoaXZlICcgRXhjZXB0aW9uICR7ZX1gKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5L+d5a2Y5a2Y5qGjXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHNsb3QgLSDmj5Lmp71cclxuXHQgKi9cclxuXHRwdWJsaWMgc2F2ZUFyY2hpdmUoc2xvdDpudW1iZXIpe1xyXG5cdFx0dGhpcy5fbm93U2xvdCA9IHNsb3Q7XHJcblx0XHRpZih0aGlzLl9ub3dTbG90ICYmIHRoaXMuX2luZm9zICYmIHRoaXMuX2RhdGEpe1xyXG5cdFx0XHRsZXQgaW5mbyA9IHRoaXMuX2luZm9zW3RoaXMuX25vd1Nsb3RdO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHRoaXMuZW1pdChcInNhdmVcIiwgdGhpcy5fZGF0YSwgaW5mbyk7XHJcblx0XHRcdFx0aW5mby50aW1lID0gTWF0aC5mbG9vcihEYXRlLm5vdygpLzEwMDApO1xyXG5cdFx0XHRcdGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShJTkZPX0lURU0sIEpTT04uc3RyaW5naWZ5KHRoaXMuX2luZm9zKSk7XHJcblx0XHRcdFx0Y2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKERBVEFfUFJFRklYICsgdGhpcy5fbm93U2xvdCwgSlNPTi5zdHJpbmdpZnkodGhpcy5fZGF0YSkpO1xyXG5cdFx0XHRcdERFQlVHLkFSQ0hJVkUgJiYgY2MubG9nKFRBRywgYHNhdmVBcmNoaXZlICR7c2xvdH1gKTtcclxuXHRcdFx0fWNhdGNoKGUpe1xyXG5cdFx0XHRcdGNjLmVycm9yKFRBRywgYHNhdmVBcmNoaXZlICcgRXhjZXB0aW9uICR7ZX1gKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5Yig6Zmk5a2Y5qGjXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHNsb3QgLSDmj5Lmp71cclxuXHQgKi9cclxuXHRwdWJsaWMgZGVsZXRlQXJjaGl2ZShzbG90Om51bWJlcil7XHJcblx0XHRpZih0aGlzLl9ub3dTbG90ID09IHNsb3Qpe1xyXG5cdFx0XHR0aGlzLl9kYXRhID0gbnVsbDtcclxuXHRcdH1cclxuXHRcdHRoaXMuX25vd1Nsb3QgPSBzbG90O1xyXG5cdFx0aWYodGhpcy5faW5mb3NbdGhpcy5fbm93U2xvdF0pe1xyXG5cdFx0XHRkZWxldGUgdGhpcy5faW5mb3NbdGhpcy5fbm93U2xvdF07XHJcblx0XHRcdGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShJTkZPX0lURU0sIEpTT04uc3RyaW5naWZ5KHRoaXMuX2luZm9zKSk7XHJcblx0XHRcdGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShEQVRBX1BSRUZJWCArIHRoaXMuX25vd1Nsb3QsIFwiXCIpO1xyXG5cdFx0XHRERUJVRy5BUkNISVZFICYmIGNjLmxvZyhUQUcsIGBkZWxldGVBcmNoaXZlICR7c2xvdH1gKTtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDmlrDlu7rlrZjmoaNcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gc2xvdCAtIOaPkuanvVxyXG5cdCAqIEBwYXJhbSBuYW1lIC0g5a2Y5qGj5ZCNXHJcblx0ICovXHJcblx0cHVibGljIGNyZWF0ZUFyY2hpdmUoc2xvdDpudW1iZXIsIG5hbWU/OnN0cmluZyl7XHJcblx0XHR0aGlzLl9ub3dTbG90ID0gc2xvdDtcclxuXHRcdGxldCBpbmZvID0ge1xyXG5cdFx0XHRzbG90IDogc2xvdCxcclxuXHRcdFx0bmFtZSA6IG5hbWUgfHwgXCJOZXcgQXJjaGl2ZVwiLFxyXG5cdFx0XHR0aW1lIDogTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCksXHJcblx0XHRcdHZlcnNpb24gOiBcIjEuMC4wXCIsXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5faW5mb3Nbc2xvdF0gPSBpbmZvO1xyXG5cdFx0dGhpcy5fZGF0YSA9IHtcclxuXHRcdFx0ZXZlbnRwcyA6IHtcdFx0IFx0ICAgICAgICAgICAgLy8g5LqL5Lu254K5XHJcblx0XHRcdFx0ZGVmYXVsdCA6IGpzLmNyZWF0ZU1hcCgpXHQvLyDpu5jorqRcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdHRyeSB7XHJcblx0XHRcdHRoaXMuZW1pdChcImNyZWF0ZVwiLCB0aGlzLl9kYXRhLCBpbmZvKTtcclxuXHRcdFx0REVCVUcuQVJDSElWRSAmJiBjYy5sb2coVEFHLCBgY3JlYXRlQXJjaGl2ZSAke3Nsb3R9IG5hbWU6JHtuYW1lfWApO1xyXG5cdFx0fWNhdGNoKGUpe1xyXG5cdFx0XHRjYy5lcnJvcihUQUcsIGBjcmVhdGVBcmNoaXZlICcgRXhjZXB0aW9uICR7ZX1gKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5qOA5p+l5LqL5Lu254K5XHJcblx0ICogXHJcblx0ICogQHBhcmFtIHBvaW50IC0g5LqL5Lu2XHJcblx0ICogQHBhcmFtIHNlZ21lbnQgLSDmrrVcclxuXHQgKi9cclxuXHRwdWJsaWMgY2hlY2tFdmVudFBvaW50KHBvaW50Om51bWJlciwgc2VnbWVudDpzdHJpbmcgPSBBUkNISVZFX0VWRU5UU19TRUdFTUVOVCl7XHJcblx0XHRwb2ludCAtLTtcclxuXHRcdGxldCB2YWxvZnN0ID0gTWF0aC5mbG9vcihwb2ludCAvIEVQT0lOVF9CTE9DSyk7XHJcblx0XHRsZXQgYml0b2ZzdCA9IHBvaW50ICUgRVBPSU5UX0JMT0NLO1xyXG5cdFx0bGV0IHNlZ2VwcyA9IHRoaXMuX2RhdGEuZXZlbnRwc1tzZWdtZW50XTtcclxuXHRcdGlmKCFzZWdlcHMpe1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRsZXQgZXBzdmFsID0gc2VnZXBzW3ZhbG9mc3RdO1xyXG5cdFx0aWYoIWVwc3ZhbCl7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiAoKGVwc3ZhbCAmICgxIDw8IGJpdG9mc3QpKSAhPSAwKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOiuvue9ruS6i+S7tueCuVxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBwb2ludCAtIOS6i+S7tlxyXG5cdCAqIEBwYXJhbSBzdGF0ZSAtIOeKtuaAgVxyXG5cdCAqIEBwYXJhbSBzZWdtZW50IC0g5q61XHJcblx0ICovXHJcblx0cHVibGljIHNldEV2ZW50UG9pbnQocG9pbnQ6bnVtYmVyLCBzdGF0ZTpib29sZWFuLCBzZWdtZW50OnN0cmluZyA9IEFSQ0hJVkVfRVZFTlRTX1NFR0VNRU5UKXtcclxuXHRcdHBvaW50IC0tO1xyXG5cdFx0bGV0IHZhbG9mc3QgPSBNYXRoLmZsb29yKHBvaW50IC8gRVBPSU5UX0JMT0NLKTtcclxuXHRcdGxldCBiaXRvZnN0ID0gcG9pbnQgJSBFUE9JTlRfQkxPQ0s7XHJcblx0XHRcclxuXHRcdGxldCBzZWdlcHMgPSB0aGlzLl9kYXRhLmV2ZW50cHNbc2VnbWVudF07XHJcblx0XHRpZighc2VnZXBzKXtcclxuXHRcdFx0c2VnZXBzID0ganMuY3JlYXRlTWFwKCk7XHJcblx0XHRcdHRoaXMuX2RhdGEuZXZlbnRwc1tzZWdtZW50XSA9IHNlZ2VwcztcclxuXHRcdH1cclxuXHRcdGxldCBlcHN2YWwgPSBzZWdlcHNbdmFsb2ZzdF0gfHwgMDtcclxuXHRcdGlmKHN0YXRlKXtcclxuXHRcdFx0ZXBzdmFsID0gZXBzdmFsIHwgKDEgPDwgYml0b2ZzdCk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0ZXBzdmFsID0gZXBzdmFsICYgKH4oMSA8PCBiaXRvZnN0KSk7XHJcblx0XHR9XHJcblx0XHRzZWdlcHNbdmFsb2ZzdF0gPSBlcHN2YWw7XHJcblx0XHRERUJVRy5BUkNISVZFICYmIGNjLmxvZyhUQUcsIGBzZXRFdmVudFBvaW50ICR7cG9pbnR9IHN0YXRlOiR7c3RhdGV9IHNlZ21lbnQ6JHtzZWdtZW50fWApO1xyXG5cdH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5a2Y5qGj566h55CG5Zmo5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYXJjaGl2ZU1nciA9IG5ldyBBcmNoaXZlTWFuYWdlcigpO1xyXG5cclxufVxyXG4iLCIvKlxuQ29weXJpZ2h0IDIwMjEgTHVKdW5cblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIFxudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgXG50byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIFxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBcblRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIFxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbm5hbWVzcGFjZSBsY2Mge1xuXG5jb25zdCBUQUcgPSBcImxjYy9uZXR3b3JrL2h0dHAvaHR0cC50c1wiO1xuXG4vKipcbiAqIEB6aFxuICogSFRUUOWPkemAgem7mOiupOi2heaXtuaXtumXtFxuICovXG5leHBvcnQgbGV0IEhUVFBfU0VORF9USU1FT1VUID0gNTtcblxuLyoqXG4gKiBAemhcbiAqIGh0dHDlip/og73nsbtcbiAqL1xuZXhwb3J0IG5hbWVzcGFjZSBodHRwIHtcblxuLyoqXG4gKiBAemhcbiAqIOivt+axgue0ouW8lVxuICovXG5sZXQgcmVxdWVzdEluZGV4ID0gMDtcblxuLyoqXG4gKiBAemhcbiAqIGh0dHAgUE9TVCDmlbDmja5cbiAqIFxuICogQHBhcmFtIHVybCAtIFVSTFxuICogQHBhcmFtIGRhdGEgLSDmlbDmja5cbiAqIEBwYXJhbSBleHRIZWFkZXJzIC0g6aKd5aSWaGVhZGVyXG4gKiBAcGFyYW0gdGltZW91dCAtIOWPr+mAie+8jOiHquWumuS5iei2heaXtuaXtumXtFxuICogXG4gKiBAcmV0dXJuIFByb21pc2U8c3RyaW5nPlxuICovXG5leHBvcnQgZnVuY3Rpb24gcG9zdCh1cmw6c3RyaW5nLCBkYXRhOmFueSwgZXh0SGVhZGVycz86YW55LCB0aW1lb3V0PzpudW1iZXIpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sZSk9Pntcblx0XHRsZXQgcmVxaWQgPSBgcmVxXyR7cmVxdWVzdEluZGV4ICsrfWA7XG5cdFx0bGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG5cdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PSAyMDApIHtcblx0XHRcdFx0dGltZXJNZ3IucmVtb3ZlVGltZXIoe1xuXHRcdFx0XHRcdGdyb3VwIDogXCJsY2MuaHR0cFwiLCBcblx0XHRcdFx0XHRrZXkgOiByZXFpZCxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJlc29sZSh4aHIucmVzcG9uc2VUZXh0KTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdHRpbWVyTWdyLmFkZFRpbWVyKHRpbWVvdXQgfHwgSFRUUF9TRU5EX1RJTUVPVVQsICgpID0+IHtcblx0XHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuXHRcdFx0cmVzb2xlKG51bGwpXG5cdFx0fSwge1xuICAgICAgICAgICAgZ3JvdXAgOiBcImxjYy5odHRwXCIsIFxuICAgICAgICAgICAga2V5IDogcmVxaWQsXG4gICAgICAgIH0pO1xuXHRcdHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJywgJ0dFVCwgUE9TVCcpO1xuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJ3gtcmVxdWVzdGVkLXdpdGgsY29udGVudC10eXBlJyk7XG5cdFx0aWYoZXh0SGVhZGVycyl7XG5cdFx0XHRmb3IobGV0IGsgaW4gZXh0SGVhZGVycyl7XG5cdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKGssIGV4dEhlYWRlcnNba10pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR4aHIuc2VuZChkYXRhKTtcblx0fSk7XG59XG5cbi8qKlxuICogQHpoXG4gKiBodHRwIFBPU1Tlj5HpgIFKU09O5LiO5o6l5pS2SlNPTuaVsOaNrlxuICogXG4gKiBAcGFyYW0gdXJsIC0gVVJMXG4gKiBAcGFyYW0gZGF0YSAtIEpTT07lr7nosaFcbiAqIEBwYXJhbSB0aW1lb3V0IC0g5Y+v6YCJ77yM6Ieq5a6a5LmJ6LaF5pe25pe26Ze0XG4gKiBcbiAqIEByZXR1cm4gUHJvbWlzZTxbSlNPTl0+XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0SnNvbih1cmw6c3RyaW5nLCBkYXRhOmFueSwgdGltZW91dD86bnVtYmVyKSB7XG5cdGxldCBjb250ZW50ID0gYXdhaXQgcG9zdCh1cmwsIEpTT04uc3RyaW5naWZ5KGRhdGEpLCB7IFwiQ29udGVudC1UeXBlXCIgOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LCB0aW1lb3V0KTtcblx0aWYoY29udGVudCl7XG5cdFx0cmV0dXJuIEpTT04ucGFyc2UoY29udGVudCk7XG5cdH1cbn1cblxuLyoqXG4gKiBAemhcbiAqIGh0dHAgR0VUIOaVsOaNrlxuICogXG4gKiBAcGFyYW0gdXJsIC0gVVJMXG4gKiBAcGFyYW0gdGltZW91dCAtIOWPr+mAie+8jOiHquWumuS5iei2heaXtuaXtumXtFxuICogXG4gKiBAcmV0dXJuIFByb21pc2U8c3RyaW5nPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0KHVybDpzdHJpbmcsIHRpbWVvdXQ/Om51bWJlcikge1xuXHRyZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2xlKT0+e1xuXHRcdGxldCByZXFpZCA9IGByZXFfJHtyZXF1ZXN0SW5kZXggKyt9YDtcblx0XHRsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcblx0XHRcdGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09IDIwMCkge1xuXHRcdFx0XHR0aW1lck1nci5yZW1vdmVUaW1lcih7XG5cdFx0XHRcdFx0Z3JvdXAgOiBcImxjYy5odHRwXCIsIFxuXHRcdFx0XHRcdGtleSA6IHJlcWlkLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmVzb2xlKHhoci5yZXNwb25zZVRleHQpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0dGltZXJNZ3IuYWRkVGltZXIodGltZW91dCB8fCBIVFRQX1NFTkRfVElNRU9VVCwgKCkgPT4ge1xuXHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG5cdFx0XHRyZXNvbGUobnVsbClcblx0XHR9LCB7XG4gICAgICAgICAgICBncm91cCA6IFwibGNjLmh0dHBcIiwgXG4gICAgICAgICAgICBrZXkgOiByZXFpZCxcbiAgICAgICAgfSk7XG5cdFx0eGhyLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcblx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcblx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdHRVQsIFBPU1QnKTtcblx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICd4LXJlcXVlc3RlZC13aXRoLGNvbnRlbnQtdHlwZScpO1xuXHRcdHhoci5zZW5kKCk7XG5cdH0pO1xufVxuXG4vKipcbiAqIEB6aFxuICogaHR0cCBHRVQgSlNPTuaVsOaNrlxuICogXG4gKiBAcGFyYW0gdXJsIC0gVVJMXG4gKiBAcGFyYW0gdGltZW91dCAtIOWPr+mAie+8jOiHquWumuS5iei2heaXtuaXtumXtFxuICogXG4gKiBAcmV0dXJuIFByb21pc2U8W0pTT05dPlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SnNvbih1cmw6c3RyaW5nLCB0aW1lb3V0PzpudW1iZXIpIHtcblx0bGV0IGNvbnRlbnQgPSBhd2FpdCBnZXQodXJsLCB0aW1lb3V0KTtcblx0aWYoY29udGVudCl7XG5cdFx0cmV0dXJuIEpTT04ucGFyc2UoY29udGVudCk7XG5cdH1cbn1cblxufVxuXG59XG4iLCIvKlxyXG5Db3B5cmlnaHQgMjAyMSBMdUp1blxyXG5cclxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBcclxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBcclxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyBcclxudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBcclxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCBcclxudG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gXHJcbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBcclxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIFxyXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBcclxuVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgXHJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIFxyXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuKi9cclxuXHJcbm5hbWVzcGFjZSBsY2Mge1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBhc3NldCB7XHJcblxyXG5jb25zdCBUQUcgPSBcImxjYy91dGlscy9hc3NldC50c1wiO1xyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDliqDovb3otYTmupDljIVcclxuICogXHJcbiAqIEBwYXJhbSBuYW1lT3JVcmwgLSDljIXlkI3miJbogIVVUkzot6/lvoRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQnVuZGxlKG5hbWVPclVybDpzdHJpbmcpe1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZTxjYy5Bc3NldE1hbmFnZXIuQnVuZGxlPigocmVzb2x2ZSkgPT4ge1xyXG5cdFx0Y2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUobmFtZU9yVXJsLCAoZXJyLCBidW5kbGUpPT57XHJcblx0XHRcdGlmICghZXJyICYmIGJ1bmRsZSkge1xyXG5cdFx0XHRcdHJlc29sdmUoYnVuZGxlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjYy53YXJuKFRBRywgYG5vdCBmb3VuZCBCdW5kbGUgOiAke25hbWVPclVybH1gKTtcclxuXHRcdFx0XHRyZXNvbHZlKG51bGwpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDliqDovb3ov5znqIvnsr7ngbXluKdcclxuICogXHJcbiAqIEBwYXJhbSBzdXJsIC0g57K+54G15binVVJM6Lev5b6EXHJcbiAqIEBwYXJhbSBleHQgLSDlm77niYflkI7nvIAsIOS+i+WmgiAucG5nIC5qcGcg562J44CC5aaC5p6c6Lev5b6E5rKh5pyJ5ZCO57yA77yM5YiZ5b+F6aG75oyH5a6a6K+l5ZCO57yAXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFJlbW90ZVNwcml0ZUZyYW1lKHN1cmw6c3RyaW5nLCBleHQ/OnN0cmluZyl7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlPGNjLlNwcml0ZUZyYW1lPigocmVzb2x2ZSkgPT4ge1xyXG5cdFx0bGV0IGNhbGxiYWNrID0gKGVycjpFcnJvciwgZGF0YTpjYy5Bc3NldCkgPT4geyAgICAgICAgXHJcblx0XHRcdGlmICghZXJyICYmIGRhdGEpIHtcclxuXHRcdFx0XHRsZXQgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUoKTtcclxuXHRcdFx0XHRzcHJpdGVGcmFtZS5zZXRUZXh0dXJlKDxjYy5UZXh0dXJlMkQ+ZGF0YSk7XHJcblx0XHRcdFx0cmVzb2x2ZShzcHJpdGVGcmFtZSk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGNjLndhcm4oVEFHLCBgbm90IGZvdW5kIFJlbW90ZSBTcHJpdGVGcmFtZSA6ICR7c3VybH1gKTtcclxuXHRcdFx0XHRyZXNvbHZlKG51bGwpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZihleHQpe1xyXG5cdFx0XHRjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShzdXJsLCB7IHR5cGUgOiBleHQgfSwgY2FsbGJhY2spO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKHN1cmwsIGNhbGxiYWNrKTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDpgJrov4dVVUlE6I635b6X6LWE5rqQXHJcbiAqIFxyXG4gKiBAcGFyYW0gdXVpZCAtIFVVSUTlrZfnrKbkuLJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBc3NldEJ5VVVJRDxUIGV4dGVuZHMgY2MuQXNzZXQ+KHV1aWQ6c3RyaW5nKXtcclxuXHRyZXR1cm4gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpPT57XHJcblx0XHRjYy5hc3NldE1hbmFnZXIubG9hZEFueShbIHV1aWQgXSwgZnVuY3Rpb24gKGVyciwgYXNzZXQ6VCkge1xyXG5cdFx0XHRpZighZXJyICYmIGFzc2V0KXtcclxuXHRcdFx0XHRyZXNvbHZlKGFzc2V0KTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0Y2Mud2FybihUQUcsIGBub3QgZm91bmQgYXNzZXQgOiAke3V1aWR9YCk7XHJcblx0XHRcdFx0cmVzb2x2ZShudWxsKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5Yqg6L29anNvbuaWh+S7tlxyXG4gKiBcclxuICogQHBhcmFtIGpnUGF0aCAtIEpTT07mlofku7bljIXot6/lvoRcclxuICogQHBhcmFtIGJ1bmRsZSAtIOWMheWvueixoVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRKc29uKGpwUGF0aDpzdHJpbmcsIGJ1bmRsZTpjYy5Bc3NldE1hbmFnZXIuQnVuZGxlID0gY2MucmVzb3VyY2VzKXtcclxuXHRyZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSkgPT4ge1xyXG5cdFx0YnVuZGxlLmxvYWQoanBQYXRoLCBjYy5Kc29uQXNzZXQsIChlcnIsIGRhdGE6Y2MuSnNvbkFzc2V0KSA9PiB7XHJcblx0XHRcdGlmICghZXJyICYmIGRhdGEpIHtcclxuXHRcdFx0XHRyZXNvbHZlKGRhdGEuanNvbik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y2Mud2FybihUQUcsIGBub3QgZm91bmQgSnNvbiA6ICR7anBQYXRofSBpbiAke2J1bmRsZS5uYW1lfWApO1xyXG5cdFx0XHRcdHJlc29sdmUobnVsbCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOWKoOi9vemfs+mikVxyXG4gKiBcclxuICogQHBhcmFtIGFwUGF0aCAtIOmfs+mikeaWh+S7tuWMhei3r+W+hFxyXG4gKiBAcGFyYW0gYnVuZGxlIC0g5YyF5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEF1ZGlvKGFwUGF0aDpzdHJpbmcsIGJ1bmRsZTpjYy5Bc3NldE1hbmFnZXIuQnVuZGxlID0gY2MucmVzb3VyY2VzKSB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlPGNjLkF1ZGlvQ2xpcD4oKHJlc29sdmUpID0+IHtcclxuXHRcdGJ1bmRsZS5sb2FkKGFwUGF0aCwgY2MuQXVkaW9DbGlwLCAoZXJyLCBkYXRhOmNjLkF1ZGlvQ2xpcCkgPT4ge1xyXG5cdFx0XHRpZiAoIWVyciAmJiBkYXRhKSB7XHJcblx0XHRcdFx0cmVzb2x2ZShkYXRhKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjYy53YXJuKFRBRywgYG5vdCBmb3VuZCBBdWRpb0NsaXAgOiAke2FwUGF0aH0gaW4gJHtidW5kbGUubmFtZX1gKTtcclxuXHRcdFx0XHRyZXNvbHZlKG51bGwpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDliqDovb3pooTliLbku7ZcclxuICogXHJcbiAqIEBwYXJhbSBwcFBhdGgg6aKE5Yi25Lu25YyF6Lev5b6EXHJcbiAqIEBwYXJhbSBidW5kbGUgLSDljIXlr7nosaFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkUHJlZmFiKHBwUGF0aDpzdHJpbmcsIGJ1bmRsZTpjYy5Bc3NldE1hbmFnZXIuQnVuZGxlID0gY2MucmVzb3VyY2VzKSB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlPGNjLlByZWZhYj4oKHJlc29sdmUpID0+IHtcclxuXHRcdGJ1bmRsZS5sb2FkKHBwUGF0aCwgY2MuUHJlZmFiLCAoZXJyLCBkYXRhOmNjLlByZWZhYikgPT4ge1xyXG5cdFx0XHRpZiAoIWVyciAmJiBkYXRhKSB7XHJcblx0XHRcdFx0cmVzb2x2ZShkYXRhKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjYy53YXJuKFRBRywgYG5vdCBmb3VuZCBQcmVmYWIgOiAke3BwUGF0aH0gaW4gJHtidW5kbGUubmFtZX1gKTtcclxuXHRcdFx0XHRyZXNvbHZlKG51bGwpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDliqDovb3nsr7ngbXluKdcclxuICogXHJcbiAqIEBwYXJhbSBzZmdQYXRoIOeyvueBteW4p+WMhei3r+W+hFxyXG4gKiBAcGFyYW0gYnVuZGxlIC0g5YyF5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFNwcml0ZUZyYW1lKHNmcFBhdGg6c3RyaW5nLCBidW5kbGU6Y2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZSA9IGNjLnJlc291cmNlcyl7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlPGNjLlNwcml0ZUZyYW1lPigocmVzb2x2ZSk9PntcclxuXHRcdGJ1bmRsZS5sb2FkKHNmcFBhdGgsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBkYXRhOmNjLlNwcml0ZUZyYW1lKSA9PiB7XHJcblx0XHRcdGlmICghZXJyICYmIGRhdGEpIHtcclxuXHRcdFx0XHRyZXNvbHZlKGRhdGEpO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRjYy53YXJuKFRBRywgYG5vdCBmb3VuZCBTcHJpdGVGcmFtZSA6ICR7c2ZwUGF0aH0gaW4gJHtidW5kbGUubmFtZX1gKTtcclxuXHRcdFx0XHRyZXNvbHZlKG51bGwpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDliqDovb10dGblrZfkvZNcclxuICogXHJcbiAqIEBwYXJhbSB0dGZnUGF0aCAtIOWtl+S9k+aWh+S7tuWFqOWxgOi3r+W+hFxyXG4gKiBAcGFyYW0gYnVuZGxlIC0g5YyF5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFRURkZvbnQodHRmcFBhdGg6c3RyaW5nLCBidW5kbGU6Y2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZSA9IGNjLnJlc291cmNlcykge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZTxjYy5UVEZGb250PigocmVzb2x2ZSkgPT4ge1xyXG5cdFx0YnVuZGxlLmxvYWQodHRmcFBhdGgsIGNjLlRURkZvbnQsIChlcnIsIGRhdGEpID0+IHtcclxuXHRcdFx0aWYgKCFlcnIgJiYgZGF0YSkge1xyXG5cdFx0XHRcdHJlc29sdmUoZGF0YSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y2Mud2FybihUQUcsIGBub3QgZm91bmQgVFRGRm9udCA6ICR7dHRmcFBhdGh9IGluICR7YnVuZGxlLm5hbWV9YCk7XHJcblx0XHRcdFx0cmVzb2x2ZShudWxsKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog6I635b6X6LWE5rqQ55qEdXJsXHJcbiAqIFxyXG4gKiBAcGFyYW0gYWdQYXRoIOi1hOa6kOWMhei3r+W+hFxyXG4gKiBAcGFyYW0gYnVuZGxlIC0g5YyF5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXNzZXRVcmwoYXBQYXRoOnN0cmluZywgYnVuZGxlOmNjLkFzc2V0TWFuYWdlci5CdW5kbGUgPSBjYy5yZXNvdXJjZXMpe1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlKT0+e1xyXG5cdFx0YnVuZGxlLmxvYWQoYXBQYXRoLCBjYy5Bc3NldCwgKGVyciwgZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoIWVyciAmJiBkYXRhKSB7XHJcblx0XHRcdFx0cmVzb2x2ZShkYXRhLm5hdGl2ZVVybCk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGNjLndhcm4oVEFHLCBgbm90IGZvdW5kIFJlc1VybCA6ICR7YXBQYXRofSBpbiAke2J1bmRsZS5uYW1lfWApO1xyXG5cdFx0XHRcdHJlc29sdmUobnVsbCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59XHJcblxyXG59XHJcblxyXG59XHJcbiIsIi8qXHJcbkNvcHlyaWdodCAyMDIxIEx1SnVuXHJcblxyXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IFxyXG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIFxyXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIFxyXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIFxyXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIFxyXG50byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBcclxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIFxyXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgXHJcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFxyXG5USEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBcclxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgXHJcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG4qL1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2Jhc2UvbGNjLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2Jhc2UvZG9pbmcudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vYmFzZS92YXJpYWJsZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9iYXNlL3JlZmVyZW5jZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9pbmRleC9pbmRleC1tYW5hZ2VyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3V0aWxzL2pzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3V0aWxzL2Fzc2V0LnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBsY2Mge1xyXG5cclxuY29uc3QgVEFHID0gXCJsY2MvcGFjay9wYWNrLW1hbmFnZXIudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog55yf5a6e5paH5Lu26Lev5b6EXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFJlYWxGaWxlUGF0aCB7XHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog55yf5a6e6Lev5b6EXHJcblx0ICovXHJcblx0cnBhdGg6c3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDotYTmupDljIVcclxuXHQgKi9cclxuXHRidW5kbGU/OmNjLkFzc2V0TWFuYWdlci5CdW5kbGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5YyF566h55CG5ZmoXHJcbiAqL1xyXG5jbGFzcyBQYWNrTWFuYWdlciBleHRlbmRzIGNjLkV2ZW50VGFyZ2V0IHtcclxuXHRcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDljIXmmKDlsITooahcclxuXHQgKi9cclxuXHRwcml2YXRlIF9wYWNrczp7W2tleTpzdHJpbmddOlBhY2tMb2FkZXJ9ID0ganMuY3JlYXRlTWFwKCk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOaehOmAoOWHveaVsFxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0c3RhdGUub24oJ2luaXRpYWxpemUnLGFzeW5jICgpPT57XHJcblx0XHRcdGRvaW5nLnN0YXRlSW5pdGlhbGl6ZS5pbihhc3luYyAoKT0+e1xyXG5cdFx0XHRcdGF3YWl0IGFzc2V0LmxvYWRCdW5kbGUoJ3Jlc291cmNlcycpO1xyXG5cdFx0XHRcdHRoaXMuX3BhY2tzID0ganMuY3JlYXRlTWFwKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHRzdGF0ZS5vbigncmVsZWFzZScsIGFzeW5jICgpPT57XHJcblx0XHRcdGRvaW5nLnN0YXRlUmVsZWFzZS5pbihhc3luYyAoKT0+e1xyXG5cdFx0XHRcdHRoaXMuY2xlYXIoKTtcclxuXHRcdFx0XHRhd2FpdCB0aGlzLnJlbGVhc2VBbGxQYWNrcygpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDojrflvpfmjIflrprljIVcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gbmFtZSAtIOWMheWQjeensFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXRQYWNrKG5hbWU6c3RyaW5nKXtcclxuXHRcdHJldHVybiB0aGlzLl9wYWNrc1tuYW1lXTtcclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5Yqg6L295YyFXHJcblx0ICogXHJcblx0ICogQHBhcmFtIG5hbWVPclVybCAtIOWMheWQjeensOaIluiAhVVSTOi3r+W+hFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhc3luYyBsb2FkUGFjayhuYW1lT3JVcmw6c3RyaW5nKXtcclxuXHRcdGxldCBwbmFtZSA9IGZzLmJhc2VuYW1lKG5hbWVPclVybCk7XHJcblx0XHRsZXQgcGFjayA9IHRoaXMuX3BhY2tzW3BuYW1lXTtcclxuXHRcdGlmKCFwYWNrKXtcclxuXHRcdFx0dmFyaWFibGUuc2V0KFwiX19Mb2FkUGFja19fXCIsIHBuYW1lKTtcclxuXHRcdFx0bGV0IGJ1bmRsZSA9IGF3YWl0IGFzc2V0LmxvYWRCdW5kbGUobmFtZU9yVXJsKTtcclxuXHRcdFx0bGV0IFBhY2tMb2FkZXJUeXBlID0gcmVmZXJlbmNlLmdldDx0eXBlb2YgUGFja0xvYWRlcj4oe3BhY2sgOiBwbmFtZSwgcGF0aCA6ICdQYWNrTG9hZGVyJ30pIHx8IFBhY2tMb2FkZXI7XHJcblx0XHRcdGxldCBwYWNrTG9hZGVyID0gbmV3IFBhY2tMb2FkZXJUeXBlKHBuYW1lLCBidW5kbGUpO1xyXG5cdFx0XHR0aGlzLl9wYWNrc1twbmFtZV0gPSBwYWNrTG9hZGVyO1xyXG5cdFx0XHRhd2FpdCBpbmRleE1nci5sb2FkUGFja0luZGV4ZXMocG5hbWUpO1xyXG5cdFx0XHRhd2FpdCBwYWNrTG9hZGVyLm9uTG9hZCgpO1xyXG5cdFx0XHR0cnl7XHJcblx0XHRcdFx0dGhpcy5lbWl0KFwibG9hZGVkXCIsIHBuYW1lKTtcclxuXHRcdFx0fWNhdGNoKGUpe1xyXG5cdFx0XHRcdGNjLmVycm9yKFRBRywgYGxvYWRQYWNrIEV4Y2VwdGlvbiAke2V9YCk7XHJcblx0XHRcdH1cclxuXHRcdFx0YXdhaXQgZG9pbmcuaW5kZXhMb2FkLnVudGlsWmVybygpO1x0XHRcdFx0XHRcdFx0Ly8g562J5b6F57Si5byV5Yqg6L295a6M5oiQXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcGFjaztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOmHiuaUvuWMhVxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBuYW1lIC0g5YyF5ZCN56ewXHJcblx0ICovXHJcblx0cHVibGljIGFzeW5jIHJlbGVhc2VQYWNrKG5hbWU6c3RyaW5nKXtcclxuXHRcdGxldCBwYWNrID0gdGhpcy5fcGFja3NbbmFtZV07XHJcblx0XHRpZihwYWNrKXtcclxuXHRcdFx0bGV0IGJ1bmRsZSA9IHBhY2suZ2V0QnVuZGxlKCk7XHJcblx0XHRcdGF3YWl0IHBhY2sub25EZXN0cm95KCk7XHJcblx0XHRcdGluZGV4TWdyLnJlbW92ZVBhY2tJbmRleGVzKG5hbWUpO1xyXG5cdFx0XHRkZWxldGUgdGhpcy5fcGFja3NbbmFtZV07XHJcblx0XHRcdHJlZmVyZW5jZS5yZW1vdmVCeVBhY2sobmFtZSk7XHJcblx0XHRcdGNjLmFzc2V0TWFuYWdlci5yZW1vdmVCdW5kbGUoYnVuZGxlKTtcclxuXHRcdFx0dHJ5e1xyXG5cdFx0XHRcdHRoaXMuZW1pdChcInJlbGVhc2VkXCIsIG5hbWUpO1xyXG5cdFx0XHR9Y2F0Y2goZSl7XHJcblx0XHRcdFx0Y2MuZXJyb3IoVEFHLCBgcmVsZWFzZVBhY2sgRXhjZXB0aW9uICR7ZX1gKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRhd2FpdCBkb2luZy5pbmRleExvYWQudW50aWxaZXJvKCk7XHRcdFx0XHRcdFx0XHQvLyDnrYnlvoXntKLlvJXliqDovb3lrozmiJBcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOmHiuaUvuaJgOacieWMhVxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhc3luYyByZWxlYXNlQWxsUGFja3MoKXtcclxuXHRcdGZvcihsZXQgbmFtZSBvZiBPYmplY3Qua2V5cyh0aGlzLl9wYWNrcykpe1xyXG5cdFx0XHRhd2FpdCB0aGlzLnJlbGVhc2VQYWNrKG5hbWUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDop6PmnpDotYTmupDot6/lvoRcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gYVBhdGggLSDotYTmupDot6/lvoRcclxuXHQgKi9cclxuXHRwdWJsaWMgcGFyc2VBc3NldFBhdGgoYVBhdGg6c3RyaW5nKTpSZWFsRmlsZVBhdGh7XHJcblx0XHRsZXQgcGFydHMgPSBhUGF0aC5zcGxpdCgnOi8vJyk7XHJcblx0XHRpZihwYXJ0cy5sZW5ndGggPT0gMiAmJiBwYXJ0c1swXSA9PSAnYXNzZXQnKXtcclxuXHRcdFx0bGV0IHBpbmRleCA9IHBhcnRzWzFdLmluZGV4T2YoJy8nKTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRycGF0aCA6IHBhcnRzWzFdLnN1YnN0cmluZyhwaW5kZXggKyAxKSxcclxuXHRcdFx0XHRidW5kbGUgOiB0aGlzLmdldFBhY2socGFydHNbMV0uc3Vic3RyaW5nKDAsIHBpbmRleCkpLmdldEJ1bmRsZSgpLFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDliqDovb1qc29u5paH5Lu2XHJcblx0ICogXHJcblx0ICogQHBhcmFtIGpnUGF0aCAtIEpTT07mlofku7blhajlsYDot6/lvoRcclxuXHQgKi9cclxuXHRwdWJsaWMgYXN5bmMgbG9hZEpzb24oamdQYXRoOnN0cmluZyl7XHJcblx0XHRsZXQgZmluZm8gPSB0aGlzLnBhcnNlQXNzZXRQYXRoKGpnUGF0aCk7XHJcblx0XHRpZihmaW5mbyAmJiBmaW5mby5idW5kbGUpe1xyXG5cdFx0XHRyZXR1cm4gYXdhaXQgYXNzZXQubG9hZEpzb24oZmluZm8ucnBhdGgsIGZpbmZvLmJ1bmRsZSk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0Y2Mud2FybihUQUcsIGBub3QgZm91bmQgSnNvbiA6ICR7amdQYXRofWApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0XHRcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDliqDovb3pn7PpopFcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gYWdQYXRoIC0g6Z+z6aKR5paH5Lu25YWo5bGA6Lev5b6EXHJcblx0ICovXHJcblx0IHB1YmxpYyBhc3luYyBsb2FkQXVkaW8oYWdQYXRoOnN0cmluZykge1xyXG5cdFx0bGV0IGZpbmZvID0gdGhpcy5wYXJzZUFzc2V0UGF0aChhZ1BhdGgpO1xyXG5cdFx0aWYoZmluZm8gJiYgZmluZm8uYnVuZGxlKXtcclxuXHRcdFx0cmV0dXJuIGF3YWl0IGFzc2V0LmxvYWRBdWRpbyhmaW5mby5ycGF0aCwgZmluZm8uYnVuZGxlKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRjYy53YXJuKFRBRywgYG5vdCBmb3VuZCBBdWRpb0NsaXAgOiAke2FnUGF0aH1gKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOWKoOi9vemihOWItuS7tlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBwZmlsZSDpooTliLbku7blhajlsYDot6/lvoRcclxuXHQgKi9cclxuXHRwdWJsaWMgYXN5bmMgbG9hZFByZWZhYihwZ1BhdGg6c3RyaW5nKSB7XHJcblx0XHRsZXQgZmluZm8gPSB0aGlzLnBhcnNlQXNzZXRQYXRoKHBnUGF0aCk7XHJcblx0XHRpZihmaW5mbyAmJiBmaW5mby5idW5kbGUpe1xyXG5cdFx0XHRyZXR1cm4gYXdhaXQgYXNzZXQubG9hZFByZWZhYihmaW5mby5ycGF0aCwgZmluZm8uYnVuZGxlKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRjYy53YXJuKFRBRywgYG5vdCBmb3VuZCBQcmVmYWIgOiAke3BnUGF0aH1gKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOWKoOi9veeyvueBteW4p1xyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBzZmdQYXRoIOeyvueBteW4p+WFqOWxgOi3r+W+hFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhc3luYyBsb2FkU3ByaXRlRnJhbWUoc2ZnUGF0aDpzdHJpbmcpe1xyXG5cdFx0bGV0IGZpbmZvID0gdGhpcy5wYXJzZUFzc2V0UGF0aChzZmdQYXRoKTtcclxuXHRcdGlmKGZpbmZvICYmIGZpbmZvLmJ1bmRsZSl7XHJcblx0XHRcdHJldHVybiBhd2FpdCBhc3NldC5sb2FkU3ByaXRlRnJhbWUoZmluZm8ucnBhdGgsIGZpbmZvLmJ1bmRsZSk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0Y2Mud2FybihUQUcsIGBub3QgZm91bmQgU3ByaXRlRnJhbWUgOiAke3NmZ1BhdGh9YCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDliqDovb10dGblrZfkvZNcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gdHRmZ1BhdGggLSDlrZfkvZPmlofku7blhajlsYDot6/lvoRcclxuXHQgKi9cclxuXHRwdWJsaWMgYXN5bmMgbG9hZFRURkZvbnQodHRmZ1BhdGg6c3RyaW5nKSB7XHJcblx0XHRsZXQgZmluZm8gPSB0aGlzLnBhcnNlQXNzZXRQYXRoKHR0ZmdQYXRoKTtcclxuXHRcdGlmKGZpbmZvICYmIGZpbmZvLmJ1bmRsZSl7XHJcblx0XHRcdHJldHVybiBhd2FpdCBhc3NldC5sb2FkVFRGRm9udChmaW5mby5ycGF0aCwgZmluZm8uYnVuZGxlKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRjYy53YXJuKFRBRywgYG5vdCBmb3VuZCBUVEZGb250IDogJHt0dGZnUGF0aH1gKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHRcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDojrflvpfotYTmupDnmoR1cmxcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gYWdQYXRoIOi1hOa6kOaWh+S7tuWFqOWxgOi3r+W+hFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhc3luYyBnZXRBc3NldFVybChhZ1BhdGg6c3RyaW5nKXtcclxuXHRcdGxldCBmaW5mbyA9IHRoaXMucGFyc2VBc3NldFBhdGgoYWdQYXRoKTtcclxuXHRcdGlmKGZpbmZvICYmIGZpbmZvLmJ1bmRsZSl7XHJcblx0XHRcdHJldHVybiBhd2FpdCBhc3NldC5nZXRBc3NldFVybChmaW5mby5ycGF0aCwgZmluZm8uYnVuZGxlKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRjYy53YXJuKFRBRywgYG5vdCBmb3VuZCBSZXNVcmwgOiAke2FnUGF0aH1gKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5YyF566h55CG5Zmo5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcGFja01nciA9IG5ldyBQYWNrTWFuYWdlcigpO1xyXG5cclxufVxyXG4iLCIvKlxyXG5Db3B5cmlnaHQgMjAyMSBMdUp1blxyXG5cclxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBcclxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBcclxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyBcclxudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBcclxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCBcclxudG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gXHJcbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBcclxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIFxyXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBcclxuVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgXHJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIFxyXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuKi9cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9iYXNlL2xjYy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9iYXNlL3ZhcmlhYmxlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL25ldHdvcmsvaHR0cC9odHRwLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vcGFjay1tYW5hZ2VyLnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBsY2Mge1xyXG5cclxuY29uc3QgVEFHID0gXCJsY2MvcGFjay9yZWFkLWNvbmZpZy50c1wiO1xyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDkuIvovb3ov5znqIvphY3nva5gcmVtb3RlY29uZmlnYOaWh+S7tueahOi2heaXtuaXtumXtFxyXG4gKi9cclxuZXhwb3J0IGxldCBSRU1PVEVfQ09ORklHX1RJTUVPVVQgPSA1O1xyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDop6PmnpDphY3nva7lr7nosaE8L2JyPlxyXG4gKiAx44CB6Kej5p6Q6YWN572u5Lit55qE5byV55SoPC9icj5cclxuICogICAgICBcIkBrZXkxXCI6XCJodHRwOi8vbG9jYWxob3N0L2NvbmZpZy5qc29uXCIgICAgID0+ICAgXCJrZXkxXCIgOiBb5YW35L2T5YaF5a65XTwvYnI+XHJcbiAqICAgICAgXCJAa2V5MlwiOlwicmVzb3VyY2VzOi8vY29uZmlnL3Rlc3QxXCIgICAgICAgICA9PiAgIFwia2V5MlwiIDogW+WFt+S9k+WGheWuuV08L2JyPlxyXG4gKiBcclxuICogQHBhcmFtIGNvbmZpZyDphY3nva7lr7nosaFcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIHBhcnNlQ29uZmlnT2JqZWN0KGNvbmZpZzphbnkpe1xyXG4gICAgZm9yKGxldCBrIG9mIE9iamVjdC5rZXlzKGNvbmZpZykpe1xyXG4gICAgICAgIGxldCB2ID0gY29uZmlnW2tdO1xyXG4gICAgICAgIGxldCB2dHAgPSB0eXBlb2Yodik7XHJcbiAgICAgICAgaWYgKHZ0cCA9PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgICAgIGF3YWl0IHBhcnNlQ29uZmlnT2JqZWN0KHYpO1xyXG4gICAgICAgIH1lbHNlIGlmKHZ0cCA9PSAnc3RyaW5nJyAmJiBrLmluZGV4T2YoJ0AnKSA9PSAwKXtcclxuICAgICAgICAgICAgbGV0IG5jID0gIGF3YWl0IHJlYWRDb25maWdGaWxlKHYpO1xyXG4gICAgICAgICAgICBpZihuYyl7XHJcbiAgICAgICAgICAgICAgICBjb25maWdbay5zdWJzdHIoMSldID0gbmM7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnW2tdO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKFRBRywgYHBhcnNlQ29uZmlnIGZpbGUgJyR7dn0nIG5vdCBmb3VuZCEhIWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOivu+WPlumFjee9ruaWh+S7tlxyXG4gKiBcclxuICogQHBhcmFtIGZpbGVVcmwg6YWN572u5paH5Lu2VVJMXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVhZENvbmZpZ0ZpbGUoZmlsZVVybDpzdHJpbmcpe1xyXG4gICAgbGV0IGNvbnRlbnQ6c3RyaW5nID0gbnVsbDtcclxuICAgIGlmKGZpbGVVcmwuaW5kZXhPZignaHR0cDovLycpID09IDAgfHwgZmlsZVVybC5pbmRleE9mKCdodHRwczovLycpID09IDApe1xyXG4gICAgICAgIGNvbnRlbnQgPSBhd2FpdCBodHRwLmdldChmaWxlVXJsLCBSRU1PVEVfQ09ORklHX1RJTUVPVVQpO1xyXG4gICAgfWVsc2UgaWYoZmlsZVVybC5pbmRleE9mKCdhc3NldDovLycpID09IDApe1xyXG4gICAgICAgIGNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShhd2FpdCBwYWNrTWdyLmxvYWRKc29uKGZpbGVVcmwpKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNjLmVycm9yKFRBRywgYHJlYWRDb25maWdGaWxlIFVua25vd24gVXJsICR7ZmlsZVVybH1gKTtcclxuICAgIH1cclxuICAgIGlmKGNvbnRlbnQpe1xyXG4gICAgICAgIGNvbnRlbnQgPSB2YXJpYWJsZS5wYXJzZVN0cmluZyhjb250ZW50LCB7IGxvY2FscGF0aCA6IGZzLmRpcm5hbWUoZmlsZVVybCkgfSk7XHJcbiAgICAgICAgbGV0IGNvbmZpZyA9IEpTT04ucGFyc2UoY29udGVudCk7XHJcbiAgICAgICAgYXdhaXQgcGFyc2VDb25maWdPYmplY3QoY29uZmlnKTtcclxuICAgICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgfVxyXG59XHJcblxyXG59XHJcbiIsIi8qXHJcbkNvcHlyaWdodCAyMDIxIEx1SnVuXHJcblxyXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IFxyXG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIFxyXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIFxyXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIFxyXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIFxyXG50byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBcclxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIFxyXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgXHJcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFxyXG5USEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBcclxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgXHJcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG4qL1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2Jhc2UvbGNjLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2Jhc2UvZG9pbmcudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vcGFjay9yZWFkLWNvbmZpZy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9iYXNlL3ZhcmlhYmxlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3V0aWxzL2pzLnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBsY2Mge1xyXG5cclxuY29uc3QgVEFHID0gXCJsY2MvaW5kZXgvaW5kZXgtbWFuYWdlci50c1wiO1xyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDmoYbmnrbplJnor69cclxuICovXHJcbmV4cG9ydCBuYW1lc3BhY2UgRVJST1Ige1xyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOe0ouW8lei3r+W+hOWGsueqgVxyXG5cdCAqL1xyXG5cdGV4cG9ydCBsZXQgSU5ERVhfUEFUSF9DT05GTElDVCA9IHRydWU7XHJcbn07XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOWMhee0ouW8lVxyXG4gKi9cclxuaW50ZXJmYWNlIFBhY2tJbmRleCB7XHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5LyY5YWI57qnXHJcblx0ICovXHJcblx0cHJpb3JpdHk6bnVtYmVyO1xyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDntKLlvJXlr7nosaFcclxuXHQgKi9cclxuXHRpbmRleGVzOmFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDntKLlvJXnrqHnkIblmag8YnIvPlxyXG4gKiDnrqHnkIbmuLjmiI/kuK3nmoTlhaznlKjotYTmupDntKLlvJVcclxuICovXHJcbmNsYXNzIEluZGV4TWFuYWdlciBleHRlbmRzIGNjLkV2ZW50VGFyZ2V0IHtcclxuXHRcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDljIXkvJjlhYjnuqdcclxuXHQgKi9cclxuXHRwcml2YXRlIF9wYWNrUHJpb3JpdHk6bnVtYmVyID0gMDtcclxuXHRcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDljIXntKLlvJXooahcclxuXHQgKi9cclxuXHRwcml2YXRlIF9wYWNrSW5kZXhzOntba2V5OnN0cmluZ106UGFja0luZGV4fSA9IGpzLmNyZWF0ZU1hcCgpO1xyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDlhajlsYDntKLlvJXooahcclxuXHQgKi9cclxuXHRwcml2YXRlIF9pbmRleGVzOmFueSA9IGpzLmNyZWF0ZU1hcCgpO1xyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDmnoTpgKDntKLlvJXnrqHnkIblmahcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3Rvcigpe1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHN0YXRlLm9uKCdpbml0aWFsaXplJywgKCk9PntcclxuXHRcdFx0ZG9pbmcuc3RhdGVJbml0aWFsaXplLmluKCgpPT57XHJcblx0XHRcdFx0dGhpcy5fcGFja1ByaW9yaXR5ID0gMDtcclxuXHRcdFx0XHR0aGlzLl9wYWNrSW5kZXhzID0ganMuY3JlYXRlTWFwKCk7XHJcblx0XHRcdFx0dGhpcy5faW5kZXhlcyA9IGpzLmNyZWF0ZU1hcCgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0c3RhdGUub24oJ3JlbGVhc2UnLCAoKT0+e1xyXG5cdFx0XHRkb2luZy5zdGF0ZVJlbGVhc2UuaW4oKCk9PntcclxuXHRcdFx0XHR0aGlzLmNsZWFyKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHTntKLlvJXmk43kvZxcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5ZCI5bm2TWFw6KGoPGJyLz5cclxuXHQgKiBNYXDooajlkIjlubbop4TliJnvvJo8YnIvPlxyXG5cdCAqIOmBjeWOhua6kE1hcOihqOWtl+aute+8jOWvueavlOebrueahE1hcOihqOWvueW6lOWtl+aute+8jOWtmOWcqOWHoOenjeaDheWGte+8mjxici8+XHJcblx0ICogMeOAgeebrueahE1hcOihqOS4reS4jeWtmOWcqOivpeWtl+aute+8jOebtOaOpeiuvue9ruS4uua6kE1hcOihqOWtl+autTxici8+XHJcblx0ICogMuOAgeebrueahE1hcOihqOWtl+auteWSjOa6kE1hcOihqOWtl+auteWQjOS4uuaVsOe7hChBcnJheSnvvIzmiorlrZfmrrXnmoTmupBNYXDooajmlbDnu4TlpI3liLbliLDnm67nmoRNYXDooajmlbDnu4TkuK08YnIvPlxyXG5cdCAqIDPjgIHnm67nmoRNYXDooajlrZfmrrXlkozmupBNYXDooajlrZfmrrXlkIzkuLrlr7nosaEoT2JqZWN0Ke+8jOS7peWtl+auteeahOebrueahE1hcOihqOWSjOa6kE1hcOihqOS4uuWPguaVsOWGjeasoeiwg+eUqOasoeWHveaVsDxici8+XHJcblx0ICogNOOAgeWFtuS7luaDheWGte+8jOivtOaYjuWtmOWcqOWGsueqgeOAguitpuWRiuWQju+8jOa6kE1hcOihqOWtl+auteebtOaOpeimhuebluebrueahE1hcOihqOWtl+autVxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBkbWFwIC0g55uu55qETWFw6KGoXHJcblx0ICogQHBhcmFtIHNtYXAgLSDmupBNYXDooahcclxuXHQgKiBAcGFyYW0gbGlzdGVuIC0g5piv5ZCm55uR5ZCsXHJcblx0ICogQHBhcmFtIGlwYXRoIC0g5paH5Lu26Lev5b6EXHJcblx0ICovXHJcblx0cHJpdmF0ZSBtZXJnZVRhYmxlKGRtYXA6T2JqZWN0LCBzbWFwOk9iamVjdCwgbGlzdGVuOmJvb2xlYW4gPSBmYWxzZSwgaXBhdGg6c3RyaW5nID0gXCJcIil7XHJcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gc21hcCl7XHJcbiAgICAgICAgICAgIGxldCBzdmFsdWUgPSBzbWFwW2tleV07XHJcbiAgICAgICAgICAgIGxldCBkdmFsdWUgPSBkbWFwW2tleV07XHJcbiAgICAgICAgICAgIGxldCBsaXBhdGggPSBpcGF0aCA/IGAke2lwYXRofS8ke2tleX1gIDoga2V5O1xyXG5cclxuICAgICAgICAgICAgaWYoIWR2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICBkbWFwW2tleV0gPSBzdmFsdWU7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0eXBlID0gdHlwZW9mIHN2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGxldCBkdHlwZSA9IHR5cGVvZiBkdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZihkdHlwZSA9PSAnb2JqZWN0JyAmJiBzdHlwZSA9PSBkdHlwZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNhcnJheSA9IHN2YWx1ZSBpbnN0YW5jZW9mIEFycmF5O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXJyYXkgPSBkdmFsdWUgaW5zdGFuY2VvZiBBcnJheTtcclxuICAgICAgICAgICAgICAgICAgICBpZihzYXJyYXkgIT0gZGFycmF5KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1zZyA9IGBpbnZhbGlkIG1lcmdlIHR5cGUgYXJyYXkgJyR7c2FycmF5fS0ke2RhcnJheX0nIGluIGtleSAnJHtrZXl9J2A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKEVSUk9SLklOREVYX1BBVEhfQ09ORkxJQ1Qpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoVEFHLCBtc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLndhcm4oVEFHLCBtc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRtYXBba2V5XSA9IHN2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGFycmF5KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR2YWx1ZS5wdXNoKC4uLnN2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVyZ2VUYWJsZShkdmFsdWUsIHN2YWx1ZSwgbGlzdGVuLCBsaXBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1zZyA9IGBpbnZhbGlkIG1lcmdlIHR5cGUgJyR7c3R5cGV9LSR7ZHR5cGV9JyBpbiBrZXkgJyR7a2V5fSdgO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKEVSUk9SLklOREVYX1BBVEhfQ09ORkxJQ1Qpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihUQUcsIG1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLndhcm4oVEFHLCBtc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkbWFwW2tleV0gPSBzdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYobGlzdGVuKXtcclxuXHRcdFx0XHR0cnl7XHJcblx0XHRcdFx0XHR0aGlzLmVtaXQoXCJpbmRleGVzX2xvYWRlZF9cIiArIGxpcGF0aCwgc3ZhbHVlKTtcclxuXHRcdFx0XHR9Y2F0Y2goZSl7XHJcblx0XHRcdFx0XHRjYy5lcnJvcihUQUcsIGBtZXJnZVRhYmxlIEV4Y2VwdGlvbiAke2V9YCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6YeN5p6E57Si5byVXHJcblx0ICovXHJcblx0cHJpdmF0ZSByZWJ1aWxkSW5kZXhlcygpe1xyXG5cdFx0dGhpcy5faW5kZXhlcyA9IGpzLmNyZWF0ZU1hcCgpO1xyXG5cdFx0bGV0IHBhY2tJbmRleHMgPSBPYmplY3QudmFsdWVzKHRoaXMuX3BhY2tJbmRleHMpLnNvcnQoKGEsYik9PnsgcmV0dXJuIGEucHJpb3JpdHkgLSBiLnByaW9yaXR5OyB9KTtcclxuXHRcdGZvciAobGV0IHBpIG9mIHBhY2tJbmRleHMpe1xyXG5cdFx0XHR0aGlzLm1lcmdlVGFibGUodGhpcy5faW5kZXhlcywgcGkuaW5kZXhlcyk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOiOt+W+l+aMh+Wumue0ouW8lVxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBwYXRoIC0g57Si5byV6Lev5b6EXHJcblx0ICovXHJcblx0cHVibGljIGdldEluZGV4KHBhdGg6c3RyaW5nKXtcclxuXHRcdGlmKHBhdGgpe1xyXG5cdFx0XHRyZXR1cm4ganMuZ2V0TWFwVmFsdWUodGhpcy5faW5kZXhlcywgcGF0aCwgXCIvXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5Yqg6L295YyF57Si5byV6KGoXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHBuYW1lIC0g5YyF5ZCN56ewXHJcblx0ICovXHJcblx0cHVibGljIGFzeW5jIGxvYWRQYWNrSW5kZXhlcyhwbmFtZTpzdHJpbmcpe1xyXG5cdFx0ZG9pbmcuaW5kZXhMb2FkLmFkZENvdW50KCk7XHJcblx0XHRsZXQgaW5kZXhQYXRoID0gYGFzc2V0Oi8vJHtwbmFtZX0vaW5kZXgtZmlsZXNgO1xyXG5cdFx0bGV0IGluZGV4Q29uZmlnID0gYXdhaXQgcmVhZENvbmZpZ0ZpbGUoaW5kZXhQYXRoKTtcclxuXHRcdGlmKGluZGV4Q29uZmlnKXtcclxuXHRcdFx0aW5kZXhDb25maWcgPSB0cmFuc2xhdGVKU09OKGluZGV4Q29uZmlnLCBmcy5kaXJuYW1lKGluZGV4UGF0aCkpO1xyXG5cdFx0XHRmb3IobGV0IGsgaW4gaW5kZXhDb25maWcpe1xyXG5cdFx0XHRcdGxldCBpbmRleEZpbGUgPSBpbmRleENvbmZpZ1trXTtcclxuXHRcdFx0XHRsZXQgaW5kZXhlcyA9IGF3YWl0IHJlYWRDb25maWdGaWxlKGluZGV4RmlsZSk7XHJcblx0XHRcdFx0aWYoaW5kZXhlcyl7XHJcblx0XHRcdFx0XHRpbmRleGVzID0gdHJhbnNsYXRlSlNPTihpbmRleGVzLCBmcy5kaXJuYW1lKGluZGV4RmlsZSkpO1xyXG5cdFx0XHRcdFx0bGV0IHBhY2tJbmRleCA9IHRoaXMuX3BhY2tJbmRleHNbcG5hbWVdO1xyXG5cdFx0XHRcdFx0aWYoIXBhY2tJbmRleCl7XHJcblx0XHRcdFx0XHRcdHBhY2tJbmRleCA9IHtcclxuXHRcdFx0XHRcdFx0XHRwcmlvcml0eSA6IHRoaXMuX3BhY2tQcmlvcml0eSArKyxcclxuXHRcdFx0XHRcdFx0XHRpbmRleGVzIDogaW5kZXhlcyxcclxuXHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0dGhpcy5fcGFja0luZGV4c1twbmFtZV0gPSBwYWNrSW5kZXg7XHJcblx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0dGhpcy5tZXJnZVRhYmxlKHBhY2tJbmRleC5pbmRleGVzLCBpbmRleGVzKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMubWVyZ2VUYWJsZSh0aGlzLl9pbmRleGVzLCBpbmRleGVzLCB0cnVlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGRvaW5nLmluZGV4TG9hZC5kZWNDb3VudCgpO1xyXG5cdH1cclxuXHRcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDnp7vpmaTljIXntKLlvJXooahcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gcG5hbWUgLSDljIXlkI3np7BcclxuXHQgKi9cclxuXHRwdWJsaWMgcmVtb3ZlUGFja0luZGV4ZXMocG5hbWU6c3RyaW5nKXtcclxuXHRcdGRvaW5nLmluZGV4TG9hZC5hZGRDb3VudCgpO1xyXG5cdFx0bGV0IHBhY2tJbmRleCA9IHRoaXMuX3BhY2tJbmRleHNbcG5hbWVdO1xyXG5cdFx0aWYocGFja0luZGV4KXtcclxuXHRcdFx0ZGVsZXRlIHRoaXMuX3BhY2tJbmRleHNbcG5hbWVdO1xyXG5cdFx0XHR0aGlzLnJlYnVpbGRJbmRleGVzKCk7XHJcblx0XHRcdHRoaXMubm90aWZ5SW5kZXhlc1JlbW92ZWQocGFja0luZGV4LmluZGV4ZXMpO1xyXG5cdFx0XHR0cnl7XHJcblx0XHRcdFx0dGhpcy5lbWl0KFwiaW5kZXhlc19yZW1vdmVkXCIpO1xyXG5cdFx0XHR9Y2F0Y2goZSl7XHJcblx0XHRcdFx0Y2MuZXJyb3IoVEFHLCBgcmVtb3ZlUGFja0luZGV4ZXMgRXhjZXB0aW9uICR7ZX1gKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZG9pbmcuaW5kZXhMb2FkLmRlY0NvdW50KCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDpgJrnn6XntKLlvJXooqvnp7vpmaRcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gaW5kZXhlcyAtIOenu+mZpOeahOWMhee0ouW8leihqFxyXG5cdCAqIEBwYXJhbSBpcGF0aCAtIOW9k+WJjee0ouW8lei3r+W+hFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgbm90aWZ5SW5kZXhlc1JlbW92ZWQoaW5kZXhlczphbnksIGlwYXRoOnN0cmluZyA9IFwiXCIpe1xyXG5cdFx0aWYoaW5kZXhlcyl7XHJcblx0XHRcdGZvcihsZXQga2V5IGluIGluZGV4ZXMpe1xyXG5cdFx0XHRcdGxldCB2YWx1ZSA9IGluZGV4ZXNba2V5XTtcclxuXHRcdFx0XHRsZXQgbGlwYXRoID0gaXBhdGggPyBgJHtpcGF0aH0vJHtrZXl9YCA6IGtleTtcclxuXHRcdFx0XHRpZih0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpe1xyXG5cdFx0XHRcdFx0dGhpcy5ub3RpZnlJbmRleGVzUmVtb3ZlZCh2YWx1ZSwgbGlwYXRoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dHJ5e1xyXG5cdFx0XHRcdFx0dGhpcy5lbWl0KFwiaW5kZXhlc19yZW1vdmVkX1wiICsgbGlwYXRoLCB2YWx1ZSk7XHJcblx0XHRcdFx0fWNhdGNoKGUpe1xyXG5cdFx0XHRcdFx0Y2MuZXJyb3IoVEFHLCBgbm90aWZ5SW5kZXhlc1JlbW92ZWQgRXhjZXB0aW9uICR7ZX1gKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog57Si5byV566h55CG5Zmo5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaW5kZXhNZ3IgPSBuZXcgSW5kZXhNYW5hZ2VyKCk7O1xyXG5cclxufVxyXG4iLCIvKlxyXG5Db3B5cmlnaHQgMjAyMSBMdUp1blxyXG5cclxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBcclxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBcclxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyBcclxudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBcclxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCBcclxudG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gXHJcbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBcclxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIFxyXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBcclxuVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgXHJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIFxyXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuKi9cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9iYXNlL3N0YXRlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3V0aWxzL2pzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2luZGV4L2luZGV4LW1hbmFnZXIudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIGxjYyB7XHJcblxyXG5jb25zdCBUQUcgPSBcImxjYy5BdWRpb01hbmFnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiDntKLlvJXot6/lvoRcclxuICovXHJcbmV4cG9ydCBuYW1lc3BhY2UgSU5ERVhQQVRIIHtcclxuXHQvKipcclxuXHQgKiDpn7PpopFcclxuXHQgKi9cclxuXHRleHBvcnQgbGV0IEFVRElPID0gXCJhdWRpb1wiO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIOmfs+mikemFjee9rlxyXG4gKi9cclxuaW50ZXJmYWNlIEF1ZGlvQ29uZmlnIHtcclxuXHQvKipcclxuXHQgKiDliarovpFcclxuXHQgKi9cclxuXHRjbGlwOmNjLkF1ZGlvQ2xpcDtcclxuXHRcclxuXHQvKipcclxuXHQgKiDphY3nva5cclxuXHQgKi9cclxuXHRjb25maWc6e1xyXG5cdFx0LyoqXHJcblx0XHQgKiDmlofku7ZcclxuXHRcdCAqL1xyXG5cdFx0ZmlsZTpzdHJpbmc7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiDpn7Pph49cclxuXHRcdCAqL1xyXG5cdFx0dm9sdW1lOm51bWJlcjtcclxuXHRcdFxyXG5cdFx0LyoqXHJcblx0XHQgKiDlvqrnjq9cclxuXHRcdCAqL1xyXG5cdFx0bG9vcDpib29sZWFuO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIOmihOWKoOi9vVxyXG5cdCAqL1xyXG5cdHByZWxvYWQ/OmJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDpu5jorqTlhajlsYBCR03pn7Pph49cclxuICovXHJcbmV4cG9ydCBsZXQgREVGQVVMVF9CR01fVk9MVU1FID0gMC41O1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOWFqOWxgFNF6Z+z6YePXHJcbiAqL1xyXG5leHBvcnQgbGV0IERFRkFVTFRfU0VfVk9MVU1FID0gMC41O1xyXG5cclxuLyoqIFxyXG4gKiBAemhcclxuICog6Z+z6aKR566h55CG5ZmoIFxyXG4gKi9cclxuY2xhc3MgQXVkaW9NYW5hZ2VyIHtcclxuXHRcclxuXHQvKipcclxuXHQgKiDpn7PpopHphY3nva5cclxuXHQgKi9cclxuXHRwcml2YXRlIF9hdWRpb0NvbmZpZ3M6e1trZXk6c3RyaW5nXTpBdWRpb0NvbmZpZ30gPSBqcy5jcmVhdGVNYXAoKTtcclxuXHRcclxuXHQvKipcclxuXHQgKiDlhajlsYBCR03pn7Pph49cclxuXHQgKi9cclxuXHRwcml2YXRlIF9CR01Wb2x1bWU6bnVtYmVyID0gREVGQVVMVF9CR01fVk9MVU1FO1xyXG5cclxuXHQvKipcclxuXHQgKiDlhajlsYBTRemfs+mHj1xyXG5cdCAqL1xyXG5cdHByaXZhdGUgX1NFVm9sdW1lOm51bWJlciA9IERFRkFVTFRfU0VfVk9MVU1FO1xyXG5cclxuXHQvKipcclxuXHQgKiDlvZPliY1CR01cclxuXHQgKi9cclxuXHRwcml2YXRlIF9ub3dCR006c3RyaW5nID0gbnVsbCE7XHJcblxyXG5cdC8qKlxyXG5cdCAqIOW9k+WJjUJHTeeahElEXHJcblx0ICovXHJcbiAgICBwcml2YXRlIF9ub3dCR01JRDpudW1iZXIgPSBudWxsITtcclxuICAgIFxyXG5cdC8qKlxyXG5cdCAqIOaehOmAoOaVsOaNruW6k+euoeeQhuWZqFxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHRzdGF0ZS5vbignaW5pdGlhbGl6ZScsICgpPT57XHJcblx0XHRcdGRvaW5nLnN0YXRlSW5pdGlhbGl6ZS5pbigoKT0+e1xyXG5cdFx0XHRcdHRoaXMuX2F1ZGlvQ29uZmlncyA9IGpzLmNyZWF0ZU1hcCgpO1xyXG5cdFx0XHRcdHRoaXMuX0JHTVZvbHVtZSA9IERFRkFVTFRfQkdNX1ZPTFVNRTtcclxuXHRcdFx0XHR0aGlzLl9TRVZvbHVtZSA9IERFRkFVTFRfU0VfVk9MVU1FO1xyXG5cdFx0XHRcdHRoaXMuX25vd0JHTSA9IG51bGw7XHJcblx0XHRcdFx0dGhpcy5fbm93QkdNSUQgPSBudWxsO1xyXG5cdFx0XHRcdGluZGV4TWdyLm9uKFwiaW5kZXhlc19yZW1vdmVkXCIsIHRoaXMub25JbmRleGVzUmVtb3ZlZCwgdGhpcyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHRzdGF0ZS5vbigncmVsZWFzZScsICgpPT57XHJcblx0XHRcdGRvaW5nLnN0YXRlUmVsZWFzZS5pbigoKT0+e1xyXG5cdFx0XHRcdGluZGV4TWdyLnRhcmdldE9mZih0aGlzKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0b25JbmRleGVzUmVtb3ZlZCgpe1xyXG5cdFx0dGhpcy5yZWxlYXNlSW52YWxpZEF1ZGlvcygpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICog6YeK5pS+5peg5pWI6Z+z6aKRXHJcblx0ICovXHJcblx0cHVibGljIHJlbGVhc2VJbnZhbGlkQXVkaW9zKCl7XHJcblx0XHRsZXQgYWZpbGVzID0gaW5kZXhNZ3IuZ2V0SW5kZXgoSU5ERVhQQVRILkFVRElPKSB8fCB7fTtcclxuXHRcdGZvcihsZXQgYW5hbWUgb2YgT2JqZWN0LmtleXModGhpcy5fYXVkaW9Db25maWdzKSl7XHJcblx0XHRcdGlmKCFhZmlsZXNbYW5hbWVdKXtcclxuXHRcdFx0XHR0aGlzLnJlbGVhc2VBdWRpbyhhbmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIOiOt+WPluaJgOaciemfs+mikVxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXRBbGxBdWRpb3MoKXtcclxuXHRcdHJldHVybiBPYmplY3Qua2V5cyhpbmRleE1nci5nZXRJbmRleChJTkRFWFBBVEguQVVESU8pKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIOmHiuaUvuaMh+Wumumfs+mikVxyXG5cdCAqIEBwYXJhbSBhbmFtZSBcclxuXHQgKiBAcGFyYW0gcHJlbG9hZCDpooTliqDovb3nmoTkuZ/ph4rmlL5cclxuXHQgKi9cclxuXHRwdWJsaWMgcmVsZWFzZUF1ZGlvKGFuYW1lOnN0cmluZywgcHJlbG9hZDpib29sZWFuID0gZmFsc2Upe1xyXG5cdFx0bGV0IGF1ZGlvY29uZiA9IHRoaXMuX2F1ZGlvQ29uZmlnc1thbmFtZV07XHJcblx0XHRpZihhdWRpb2NvbmYgJiYgKCFhdWRpb2NvbmYucHJlbG9hZCB8fCBwcmVsb2FkKSl7XHJcblx0XHRcdGRlbGV0ZSB0aGlzLl9hdWRpb0NvbmZpZ3NbYW5hbWVdO1xyXG5cdFx0XHRhdWRpb2NvbmYuY2xpcC5kZWNSZWYoKTtcclxuXHRcdFx0Y2MuYXVkaW9FbmdpbmUudW5jYWNoZShhdWRpb2NvbmYuY2xpcCk7XHJcblx0XHRcdERFQlVHLkFVRElPICYmIGNjLmxvZyhUQUcsIGByZWxlYXNlQXVkaW8gJHthbmFtZX1gKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIOmHiuaUvumfs+mikeaVsOe7hFxyXG5cdCAqIEBwYXJhbSBwcmVsb2FkIFxyXG5cdCAqL1xyXG5cdHB1YmxpYyByZWxlYXNlQXVkaW9zKGFuYW1lczpzdHJpbmdbXSwgcHJlbG9hZDpib29sZWFuID0gZmFsc2Upe1xyXG5cdFx0Zm9yKGxldCBhbmFtZSBvZiBhbmFtZXMpe1xyXG5cdFx0XHR0aGlzLnJlbGVhc2VBdWRpbyhhbmFtZSwgcHJlbG9hZCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIOmihOWKoOi9veaMh+Wumumfs+mikVxyXG5cdCAqIEBwYXJhbSBhbmFtZSBcclxuXHQgKi9cclxuXHRwdWJsaWMgYXN5bmMgcHJlbG9hZEF1ZGlvKGFuYW1lOnN0cmluZyl7XHJcblx0XHQoYXdhaXQgdGhpcy5nZXRBdWRpb0NvbmZpZyhhbmFtZSkpLnByZWxvYWQgPSB0cnVlO1xyXG5cdH1cclxuXHRcclxuXHQvKipcclxuXHQgKiDpooTliqDovb3pn7PpopHmlbDnu4RcclxuXHQgKi9cclxuXHRwdWJsaWMgYXN5bmMgcHJlbG9hZEF1ZGlvcyhhbmFtZXM6c3RyaW5nW10sIHByb2dyZXNzID0gKHA6bnVtYmVyKT0+e30pe1xyXG5cdFx0Zm9yIChsZXQgaSA9IDAsIGxlbiA9IGFuYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKyl7XHJcblx0XHRcdGF3YWl0IHRoaXMucHJlbG9hZEF1ZGlvKGFuYW1lc1tpXSk7XHJcblx0XHRcdHByb2dyZXNzKChpICsgMSkgLyBsZW4pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHQvKipcclxuXHQgKiDorr7nva4gQkdNIOmfs+mHj1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBhc3luYyBzZXRCZ21Wb2x1bWUodm9sdW1lOm51bWJlcil7XHJcbiAgICAgICAgaWYodGhpcy5fQkdNVm9sdW1lICE9IHZvbHVtZSl7XHJcbiAgICAgICAgICAgIHRoaXMuX0JHTVZvbHVtZSA9IHZvbHVtZTtcclxuICAgICAgICAgICAgaWYodGhpcy5fbm93QkdNSUQgIT0gbnVsbCl7XHJcblx0XHRcdFx0bGV0IGF1ZGlvID0gYXdhaXQgdGhpcy5nZXRBdWRpb0NvbmZpZyh0aGlzLl9ub3dCR00pO1xyXG5cdFx0XHRcdGlmKGF1ZGlvKXtcclxuXHRcdFx0XHRcdGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZSh0aGlzLl9ub3dCR01JRCwgXHJcblx0XHRcdFx0XHRcdHZvbHVtZSAqIChhdWRpby5jb25maWcudm9sdW1lICE9IG51bGwgPyBhdWRpby5jb25maWcudm9sdW1lIDogMSkpO1xyXG5cdFx0XHRcdFx0REVCVUcuQVVESU8gJiYgY2MubG9nKFRBRywgYHNldEJnbVZvbHVtZSAke3ZvbHVtZX1gKTtcclxuXHRcdFx0XHR9XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuX25vd0JHTSAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUJHTSh0aGlzLl9ub3dCR00pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICog6I635b6XIEJHTSDpn7Pph49cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0QmdtVm9sdW1lKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5fQkdNVm9sdW1lO1xyXG5cdH1cclxuXHRcclxuXHQvKipcclxuXHQgKiDorr7nva4gU0Ug6Z+z6YePXHJcblx0ICovXHJcblx0cHVibGljIHNldFNlVm9sdW1lKHZvbHVtZTpudW1iZXIpe1xyXG5cdFx0dGhpcy5fU0VWb2x1bWUgPSB2b2x1bWU7XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIOiOt+W+lyBTRSDpn7Pph49cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0U2VWb2x1bWUoKXtcclxuXHRcdHJldHVybiB0aGlzLl9TRVZvbHVtZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIOiOt+W+l+W9k+WJjeeahEJHTVxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXROb3dCR00oKXtcclxuXHRcdHJldHVybiB0aGlzLl9ub3dCR007XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiDmkq3mlL7og4zmma/pn7PkuZBcclxuXHQgKiBAcGFyYW0gYW5hbWUg6Z+z6aKR5ZCN56ewXHJcblx0ICogQHBhcmFtIGxvb3Ag5piv5ZCm5b6q546vXHJcblx0ICovXHJcblx0cHVibGljIGFzeW5jIHBsYXlCR00oYW5hbWU6c3RyaW5nLCBsb29wOmJvb2xlYW4gPSB0cnVlKXtcclxuXHRcdGlmKHRoaXMuX25vd0JHTSAhPSBhbmFtZSl7XHJcblx0XHRcdGxldCBhY29uZiA9IGF3YWl0IHRoaXMuZ2V0QXVkaW9Db25maWcoYW5hbWUpO1xyXG5cdFx0XHRpZihhY29uZil7XHJcblx0XHRcdFx0dGhpcy5zdG9wQkdNKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ub3dCR00gPSBhbmFtZTtcclxuXHRcdFx0XHRpZih0aGlzLl9CR01Wb2x1bWUgPiAwKXtcclxuXHRcdFx0XHRcdHRoaXMuX25vd0JHTUlEID0gY2MuYXVkaW9FbmdpbmUucGxheShhY29uZi5jbGlwLCBcclxuXHRcdFx0XHRcdFx0bG9vcCAhPT0gbnVsbCA/IGxvb3AgOiBhY29uZi5jb25maWcubG9vcCAsIFxyXG5cdFx0XHRcdFx0XHQoYWNvbmYuY29uZmlnLnZvbHVtZSAhPSBudWxsID8gYWNvbmYuY29uZmlnLnZvbHVtZSA6IDEpICogdGhpcy5fQkdNVm9sdW1lKTtcclxuXHRcdFx0XHRcdERFQlVHLkFVRElPICYmIGNjLmxvZyhUQUcsIGBwbGF5QkdNICR7YW5hbWV9IGxvb3A6JHtsb29wfWApO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX25vd0JHTUlEO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICog5YGc5q2i5b2T5YmNQkdOXHJcblx0ICovXHJcblx0cHVibGljIHN0b3BCR00oKXtcclxuXHRcdGlmKHRoaXMuX25vd0JHTUlEICE9IG51bGwpe1xyXG5cdFx0XHRjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuX25vd0JHTUlEKTtcclxuXHRcdFx0REVCVUcuQVVESU8gJiYgY2MubG9nKFRBRywgYHN0b3BCR00gJHt0aGlzLl9ub3dCR019YCk7XHJcblx0XHRcdHRoaXMuX25vd0JHTUlEID0gbnVsbDtcclxuXHRcdFx0dGhpcy5fbm93QkdNID0gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIOaSreaUvumfs+aViFxyXG5cdCAqIEBwYXJhbSBhbmFtZSDpn7PpopHlkI3np7BcclxuXHQgKi9cclxuXHRwdWJsaWMgYXN5bmMgcGxheVNFKGFuYW1lOnN0cmluZyl7XHJcblx0XHRsZXQgYWNvbmYgPSBhd2FpdCB0aGlzLmdldEF1ZGlvQ29uZmlnKGFuYW1lKTtcclxuXHRcdGlmKGFjb25mICYmIHRoaXMuX1NFVm9sdW1lID4gMCl7XHJcblx0XHRcdGxldCByZXN1bHQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGFjb25mLmNsaXAsIFxyXG5cdFx0XHRcdGFjb25mLmNvbmZpZy5sb29wICwgXHJcblx0XHRcdFx0KGFjb25mLmNvbmZpZy52b2x1bWUgIT0gbnVsbCA/IGFjb25mLmNvbmZpZy52b2x1bWUgOiAxKSAqIHRoaXMuX1NFVm9sdW1lKTtcclxuXHRcdFx0REVCVUcuQVVESU8gJiYgY2MubG9nKFRBRywgYHBsYXlTRSAke2FuYW1lfWApO1xyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICog55u05Yiw6Z+z6aKR5pKt5pS+5a6M5oiQXHJcblx0ICogQHBhcmFtIGFpZCDpn7PpopHmkq3mlL5JRFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhc3luYyB1bnRpbEZpbmlzaChhaWQ6bnVtYmVyKXtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcclxuXHRcdFx0bGV0IHN0YXRlID0gY2MuYXVkaW9FbmdpbmUuZ2V0U3RhdGUoYWlkKTtcclxuXHRcdFx0aWYoc3RhdGUgPT0gY2MuYXVkaW9FbmdpbmUuQXVkaW9TdGF0ZS5FUlJPUil7XHJcblx0XHRcdFx0cmVzb2x2ZShudWxsKTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0Y2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soYWlkLCByZXNvbHZlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiDojrflvpfpn7PpopHphY3nva5cclxuXHQgKiBAcGFyYW0gYW5hbWUg6Z+z6aKR5ZCN56ewXHJcblx0ICovXHJcblx0cHJpdmF0ZSBhc3luYyBnZXRBdWRpb0NvbmZpZyhhbmFtZTpzdHJpbmcpe1xyXG5cdFx0bGV0IGF1ZGlvY29uZiA9IHRoaXMuX2F1ZGlvQ29uZmlnc1thbmFtZV07XHJcblx0XHRpZighYXVkaW9jb25mKXtcclxuXHRcdFx0bGV0IGNvbmZpZyA9IGluZGV4TWdyLmdldEluZGV4KElOREVYUEFUSC5BVURJTyArIFwiL1wiICsgYW5hbWUpO1xyXG5cdFx0XHRpZihjb25maWcpe1xyXG5cdFx0XHRcdGxldCBjbGlwID0gYXdhaXQgcGFja01nci5sb2FkQXVkaW8oY29uZmlnLmZpbGUpO1xyXG5cdFx0XHRcdGF1ZGlvY29uZiA9IHtcclxuXHRcdFx0XHRcdGNsaXAgOiBjbGlwLFxyXG5cdFx0XHRcdFx0Y29uZmlnIDogY29uZmlnLFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0Y2xpcC5hZGRSZWYoKTtcclxuXHRcdFx0XHR0aGlzLl9hdWRpb0NvbmZpZ3NbYW5hbWVdID0gYXVkaW9jb25mO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYXVkaW9jb25mO1xyXG5cdH1cclxuXHRcclxufTtcclxuXHJcbi8qKlxyXG4gKiDpn7PpopHnrqHnkIblmahcclxuICovXHJcbmV4cG9ydCBjb25zdCBhdWRpb01nciA9IG5ldyBBdWRpb01hbmFnZXIoKTtcclxuXHJcbn1cclxuIiwiLypcbkNvcHlyaWdodCAyMDIxIEx1SnVuXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgXG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyBcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIFxudG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBcbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIFxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgXG5USEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vYmFzZS9sY2MudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2Jhc2Uvc3RhdGUudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3BhY2svcmVhZC1jb25maWcudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3V0aWxzL2pzLnRzXCIgLz5cblxubmFtZXNwYWNlIGxjYyB7XG5cbmNvbnN0IFRBRyA9IFwibGNjL2NvbmZpZy9jb25maWctbWFuYWdlci50c1wiO1xuXG4vKipcbiAqIEB6aFxuICog6YWN572u5a+56LGh5pig5bCE6KGoPGJyLz5cbiAqIOWcqOWKoOi9veWujOWvueW6lOmFjee9ruWQju+8jOWPr+S7peebtOaOpemAmui/h+i/meS4quWPmOmHj+iuv+mXrumFjee9ruaVsOaNrjxici8+XG4gKiBgYGBcbiAqICAgICAgbGNjLmNvbmZpZ01nci5sb2FkQ29uZmlnRmlsZSgnYXNzZXQ6Ly9yZXNvdXJjZXMvY29uZmlnL3Rlc3QnKTtcbiAqICAgICAgbGV0IHRlc3RDb25maWcgPSBDT05GSUdTLnRlc3Q7ICAgICAgLy8g5pa55byPMVxuICogICAgICBsZXQgdGVzdENvbmZpZyA9IENPTkZJR1NbJ3Rlc3QnXTsgICAvLyDmlrnlvI8yXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGxldCBDT05GSUdTOntba2V5OnN0cmluZ106YW55fSA9IGpzLmNyZWF0ZU1hcCgpO1xuXG4vKipcbiAqIEB6aFxuICog5Yqg6L296YWN572u6YCJ6aG5XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZENvbmZpZ09wdGlvbiB7XG5cdCAvKipcbiAgICAgKiBAemhcbiAgICAgKiDphY3nva7lkI3np7A8YnIvPlxuICAgICAqIOWPr+S7peS/ruaUuemFjee9ruWKoOi9veWQjueahOWQjeensDxici8+XG4gICAgICog5aaC5p6c5rKh5pyJ5oyH5a6a77yM5YiZ5Lya5L2/55So6YWN572u5paH5Lu255qE5ZCN5L2c5Li66YWN572u5ZCNICBcbiAgICAgKi9cblx0Y29uZmlnTmFtZT86c3RyaW5nO1xuXG4gICAgLyoqXG4gICAgKiBAemhcbiAgICAqIOWQiOW5tuW9k+WJjemFjee9rjxici8+XG4gICAgKiDlpoLmnpxgQ09ORklHU2DkuK3lrZjlnKjlvZPliY3lkI3np7DnmoTphY3nva7vvIzpgqPkuYjkvJrmiorlvZPliY3phY3nva7lkIjlubbliLDljp/mnInphY3nva7kuIo8YnIvPlxuICAgICog5ZCm5YiZ77yM5b2T5YmN6YWN572u5Lya5pu/5o2i5Y6f5pyJ5a2Y5Zyo6YWN572uXG4gICAgKi9cbiAgICBtZXJnZT86Ym9vbGVhbjtcbn1cblxuLyoqXG4gKiBAemhcbiAqIOmFjee9rueuoeeQhuWZqDxici8+XG4gKiDkuLvopoHnlKjkuo7nrqHnkIbnqIvluo/nmoTphY3nva7lr7nosaE8YnIvPlxuICog6YWN572u5a+56LGh5Zyo5Yqg6L295pe25Lya6L+b6KGM5Lul5LiL5aSE55CGOjxici8+XG4gKiAx44CB5pu/5o2i6YWN572u5a+56LGh5a2X56ym5Liy5Lit55qEYCR7Li4ufWDlj5jph4/lgLzjgILlj5jph4/lgLzlj6/ku6XpgJrov4dgc2V0VmFyaWFibGVg6K6+572u77yM5YW25LitYGxvY2FscGF0aGDkuLrlm7rmnInlgLzvvIzooajnpLrlvZPliY3mlofku7bnm67lvZXjgII8YnIvPlxuICogMuOAgeabv+aNoumFjee9ruWvueixoeWBpeS4reS7pWBAYOW8gOWni+eahOW8leeUqOWtl+auteOAguWFtuWAvOihqOekuuW8leeUqOi3r+W+hO+8jOavlOWmgmBodHRwOi8vbG9jYWxob3N0L3Rlc3QuanNvbmDooajnpLrnvZHnu5zmlofku7YsIGBhc3NldDovL3Jlc291cmNlcy90ZXN0YOihqOekunJlc291cmNlc+WMheS4reeahHRlc3QuanNvbuaWh+S7tuOAglxuICog5Lya5Lul5byV55So5paH5Lu255qE5YaF5a65KOi/memHjOaYr0pTT07lr7nosaEp5pu/5o2i5b2T5YmN5a2X5q6155qE5YC877yM5bm25LiU5Y675o6J5YGl5Lit55qEYEBg56ym5Y+344CCPGJyLz5cbiAqIOS+i+Wmgu+8mjxici8+XG4gKiDlrZjlnKjnvZHnu5zmlofku7ZodHRwOi8vbG9jYWxob3N0L3Rlc3QuanNvbu+8jOWGheWuueS4uu+8mzxici8+XG4gKiBgYGBcbiAqIHtcbiAqICAgICAgXCJ0eXBlXCIgOiBcInJlbW90ZSBmaWxlXCJcbiAqIH1cbiAqIGBgYFxuICog5a2Y5Zyo6LWE5rqQ5paH5Lu2YXNzZXQ6Ly9yZXNvdXJjZXMvdGVzdCAocmVzb3VyY2Vz5YyF5Lit55qEdGVzdC5qc29u5paH5Lu2Ke+8jOWGheWuueS4uu+8mzxici8+XG4gKiBgYGBcbiAqIHtcbiAqICAgICAgXCJ0eXBlXCI6IFwiYXNzZXQgZmlsZVwiXG4gKiB9XG4gKiBgYGBcbiAqIOWtmOWcqOacrOWcsOmFjee9ruaWh+S7tmFzc2V0Oi8vcmVzb3VyY2VzL2NvbmZpZyAocmVzb3VyY2Vz5YyF5Lit55qEY29uZmlnLmpzb27mlofku7Yp77yM5YaF5a655Li677ybPGJyLz5cbiAqIGBgYFxuICoge1xuICogICAgICBcImNvbmZpZ1wiIDogXCJjb25maWcgZmlsZVwiLFxuICogICAgICBcIkByZW1vdGVcIiA6IFwiaHR0cDovL2xvY2FsaG9zdC90ZXN0Lmpzb25cIixcbiAqICAgICAgXCJAYXNzZXRcIiA6IFwiJHtsb2NhbHBhdGh9L3Rlc3RcIlxuICogfVxuICogYGBgXG4gKiDpgqPkuYjvvIzkvb/nlKhgbGNjLmNvbmZpZ01nci5sb2FkQ29uZmlnRmlsZSgnYXNzZXQ6Ly9yZXNvdXJjZXMvY29uZmlnJylg5ZCO77yMPGJyLz5cbiAqIOS9v+eUqGxjYy5jb25maWdNZ3IuZ2V0Q29uZmlnKCdjb25maWcnKeWGheWuueWmguS4i++8mzxici8+XG4gKiBgYGBcbiAqIHtcbiAqICAgICAgXCJjb25maWdcIiA6IFwiY29uZmlnIGZpbGVcIixcbiAqICAgICAgXCJyZW1vdGVcIiA6IHtcbiAqICAgICAgICAgIFwidHlwZVwiIDogXCJyZW1vdGUgZmlsZVwiXG4gKiAgICAgIH0sXG4gKiAgICAgIFwiYXNzZXRcIiA6ICB7XG4gKiAgICAgICAgICBcInR5cGVcIiA6IFwiYXNzZXQgZmlsZVwiXG4gKiAgICAgIH1cbiAqIH1cbiAqIGBgYFxuICog5Y+v5Lul55yL5Ye6Y29uZmln5Yqg6L295pe277yM6YCa6L+H572R57uc5pu/5o2i5byV55SoYEByZW1vdGVg77yM6Kej5p6Q5Y+Y6YePYGxvY2FscGF0aGDmi7zmjqV0ZXN0Lmpzb27ot6/lvoTlubbmm7/mjaLlvJXnlKhgQGFzc2V0YDxici8+XG4gKi9cbmNsYXNzIENvbmZpZ01hbmFnZXIge1xuICAgIFxuICAgIC8qKlxuICAgICAqIEB6aFxuICAgICAqIOaehOmAoOWHveaVsFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN0YXRlLm9uKCdpbml0aWFsaXplJywgKCk9Pntcblx0XHRcdGRvaW5nLnN0YXRlSW5pdGlhbGl6ZS5pbigoKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsQ29uZmlncygpO1xuICAgICAgICAgICAgfSk7XG5cdFx0fSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEB6aFxuICAgICAqIOiOt+W+l+aJgOaciemFjee9rjxici8+XG4gICAgICog5Lmf5Y+v5Lul55u05o6l5L2/55SoYENPTkZJR1NgXG4gICAgICovXG4gICAgcHVibGljIGdldENvbmZpZ3MoKXtcbiAgICAgICAgcmV0dXJuIENPTkZJR1M7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEB6aFxuICAgICAqIOiOt+W+l+WvueW6lOmFjee9rjxici8+XG4gICAgICog5Lmf5Y+v5Lul55u05o6l5L2/55SoYENPTkZJR1Nba2V5XWBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Q29uZmlnPFQgPSBhbnk+KGtleTpzdHJpbmcpe1xuICAgICAgICByZXR1cm4gQ09ORklHU1trZXldIGFzIFQ7XG4gICAgfVxuXHRcbiAgICAvKipcbiAgICAgKiBAemhcbiAgICAgKiDnp7vpmaTmjIflrprphY3nva48YnIvPlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBjbmFtZSAtIOmFjee9ruWQjeensFxuICAgICAqL1xuICAgIHB1YmxpYyByZW1vdmVDb25maWcoY25hbWU6c3RyaW5nKXtcblx0XHRkZWxldGUgQ09ORklHU1tjbmFtZV07XG5cdH1cblx0XG5cdC8qKlxuICAgICAqIEB6aFxuXHQgKiDnp7vpmaTmiYDmnInphY3nva5cblx0ICovXG5cdHB1YmxpYyByZW1vdmVBbGxDb25maWdzKCl7XG5cdFx0Zm9yKGxldCBjbmFtZSBvZiBPYmplY3Qua2V5cyhDT05GSUdTKSl7XG5cdFx0XHRkZWxldGUgQ09ORklHU1tjbmFtZV07XG5cdFx0fVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBAemhcbiAgICAgKiDliqDovb3phY3nva7mlofku7Y8YnIvPlxuXHQgKiDnlKjms5XvvJo8YnIvPlxuXHQgKiBgYGBcblx0ICogXHRcdC8vIOWKoOi9vXJlc291cmNlc+ebruW9leS4i+eahOmFjee9rlxuXHQgKiBcdFx0bGNjLmNvbmZpZ01nci5sb2FkQ29uZmlnKCdhc3NldDovL3Jlc291cmNlcy9jb25maWcvdGVzdCcpO1xuXHQgKiBcdFx0Ly8g6I635b6X5Yqg6L2955qE6YWN572uXG5cdCAqIFx0XHRsY2MuY29uZmlnTWdyLmdldENvbmZpZygndGVzdCcpO1xuXHQgKiBcblx0ICogXHRcdC8vIOWKoOi9vXJlc291cmNlc+ebruW9leS4i+eahOmFjee9ru+8jOW5tuS4lOmHjee9ruWQjeensFxuXHQgKiBcdFx0bGNjLmNvbmZpZ01nci5sb2FkQ29uZmlnKCdhc3NldDovL3Jlc291cmNlcy9jb25maWcvdGVzdCcsICduZXd0ZXN0Jyk7XG5cdCAqIFx0XHQvLyDojrflvpfliqDovb3nmoTphY3nva5cblx0ICogXHRcdGxjYy5jb25maWdNZ3IuZ2V0Q29uZmlnKCduZXd0ZXN0Jyk7XG5cdCAqIFxuXHQgKiBcdFx0Ly8g5Yqg6L29Z2FtZeWtkOWMheS4i+eahOmFjee9ru+8jOW5tuS4lOmHjee9ruWQjeensOOAguWmguaenOacieebuOWQjOmFjee9ru+8jOWImeWQiOW5tlxuXHQgKiBcdFx0bGNjLmNvbmZpZ01nci5sb2FkQ29uZmlnKCdhc3NldDovL2dhbWUvY29uZmlnL3Rlc3QnLCB7IG5hbWUgOiAnbmV3dGVzdCcsIG1lcmdlIDogdHJ1ZSB9KTtcblx0ICogXHRcdC8vIOiOt+W+l+WKoOi9veeahOmFjee9rlxuXHQgKiBcdFx0bGNjLmNvbmZpZ01nci5nZXRDb25maWcoJ25ld3Rlc3QnKTtcblx0ICogYGBgXG5cdCAqIFxuICAgICAqIEBwYXJhbSBqZmlsZSAtIEpTT07mlofku7bot6/lvoRcbiAgICAgKiBAcGFyYW0gbmFtZU9yT3B0aW9uIC0g6YWN572u5ZCN56ew5oiW6ICF6YCJ6aG5XG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGxvYWRDb25maWdGaWxlKGpmaWxlOnN0cmluZywgbmFtZU9yT3B0aW9uOnN0cmluZ3xMb2FkQ29uZmlnT3B0aW9uID0ge30pe1xuXHRcdGxldCBsb2NhbGNvbmYgPSBhd2FpdCByZWFkQ29uZmlnRmlsZShqZmlsZSk7XG5cdFx0aWYobG9jYWxjb25mKXtcblx0XHRcdGxldCBvcHRpb246TG9hZENvbmZpZ09wdGlvbjtcblx0XHRcdGlmKHR5cGVvZiBuYW1lT3JPcHRpb24gPT0gJ3N0cmluZycpe1xuXHRcdFx0XHRvcHRpb24gPSB7XG5cdFx0XHRcdFx0Y29uZmlnTmFtZSA6IG5hbWVPck9wdGlvbixcblx0XHRcdFx0fTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRvcHRpb24gPSBuYW1lT3JPcHRpb247XG5cdFx0XHR9XG5cdFx0XHRvcHRpb24uY29uZmlnTmFtZSA9IG9wdGlvbi5jb25maWdOYW1lIHx8IGZzLmJhc2VuYW1lKGpmaWxlKTtcblx0XHRcdERFQlVHLkNPTkZJRyAmJiBjYy5sb2coVEFHLCBgbG9jYWwgY29uZmlnICR7b3B0aW9uLmNvbmZpZ05hbWV9IDogJHtKU09OLnN0cmluZ2lmeShsb2NhbGNvbmYpfWApO1xuXHRcdFx0aWYoIW9wdGlvbi5tZXJnZSl7XG4gICAgICAgICAgICAgICAgZGVsZXRlIENPTkZJR1Nbb3B0aW9uLmNvbmZpZ05hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGNvbmZpZyA9IENPTkZJR1Nbb3B0aW9uLmNvbmZpZ05hbWVdO1xuICAgICAgICAgICAgaWYoIWNvbmZpZyl7XG4gICAgICAgICAgICAgICAgY29uZmlnID0ganMuY3JlYXRlTWFwKCk7XG4gICAgICAgICAgICAgICAgQ09ORklHU1tvcHRpb24uY29uZmlnTmFtZV0gPSBjb25maWc7XG4gICAgICAgICAgICB9XG5cdFx0XHRqcy5tZXJnZU1hcChjb25maWcsIGxvY2FsY29uZiwgeyB0YWcgOiBUQUcsIHNvdXJjZSA6IGpmaWxlIH0pO1xuXHRcdH1lbHNle1xuXHRcdFx0Y2MuZXJyb3IoVEFHLCBgbG9hZENvbmZpZ0ZpbGUgJyR7amZpbGV9JyBub3QgZm91bmQhISFgKTtcblx0XHR9XG4gICAgfVxufTtcblxuLyoqXG4gKiBAemhcbiAqIOmFjee9rueuoeeQhuWZqOWvueixoVxuICovXG5leHBvcnQgY29uc3QgY29uZmlnTWdyID0gbmV3IENvbmZpZ01hbmFnZXIoKTtcblxufVxuIiwiLypcclxuQ29weXJpZ2h0IDIwMjEgTHVKdW5cclxuXHJcblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgXHJcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgXHJcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgXHJcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgXHJcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgXHJcbnRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIFxyXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgXHJcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBcclxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgXHJcblRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIFxyXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBcclxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXHJcbiovXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vYmFzZS9sY2MudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vYmFzZS9zdGF0ZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9iYXNlL2RvaW5nLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2Jhc2UvdmFyaWFibGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdXRpbHMvanMudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIGxjYyB7XHJcblxyXG5jb25zdCBUQUcgPSBcImxjYy9sYW5ndWFnZS9sYW5nLW1hbmFnZXIudHNcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDmoYbmnrbplJnor69cclxuICovXHJcbmV4cG9ydCBuYW1lc3BhY2UgRVJST1Ige1xyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOivreiogOmUrumUruWGsueqgVxyXG5cdCAqL1xyXG5cdGV4cG9ydCBsZXQgTEFOR19LRVlfQ09ORkxJQ1QgPSB0cnVlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDntKLlvJXot6/lvoRcclxuICovXHJcbmV4cG9ydCBuYW1lc3BhY2UgSU5ERVhQQVRIIHtcclxuXHRcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDlrZfkvZNcclxuXHQgKi9cclxuXHRleHBvcnQgbGV0IEZPTlQgPSBcImZvbnRcIjtcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6K+t6KiAXHJcblx0ICovXHJcblx0ZXhwb3J0IGxldCBMQU5HID0gXCJsYW5nXCI7XHJcbn07XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOm7mOiupOivreiogFxyXG4gKi9cclxuZXhwb3J0IGxldCBERUZBVUxUX0xBTkdVQUdFID0gJ3poJztcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog6K+t6KiA6YWN572uXHJcbiAqL1xyXG5pbnRlcmZhY2UgTGFuZ0NvbmZpZyB7XHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5paH5pys6YWN572u6KGoXHJcblx0ICovXHJcblx0dGV4dHM6e1trZXk6c3RyaW5nXTp7XHJcblx0XHQvKipcclxuXHRcdCAqIEB6aFxyXG5cdFx0ICog5paH5pysXHJcblx0XHQgKi9cclxuXHRcdHRleHQ6c3RyaW5nO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHpoXHJcblx0XHQgKiDkvb/nlKjnmoTlrZfkvZNcclxuXHRcdCAqL1xyXG5cdFx0Zm9udE5hbWU/OnN0cmluZztcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEB6aFxyXG5cdFx0ICog5a2X5L2T5aSn5bCPXHJcblx0XHQgKi9cclxuXHRcdGZvbnRTaXplPzpudW1iZXI7XHJcblx0fX07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOivreiogOWbvueJh+ihqFxyXG5cdCAqL1xyXG5cdGltYWdlczp7W2tleTpzdHJpbmddOnN0cmluZ307XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5aSa6K+t6KiA5paH5pysXHJcbiAqL1xyXG5AY2NjbGFzcyhcImxjYy5MYW5nVGV4dFwiKVxyXG5leHBvcnQgY2xhc3MgTGFuZ1RleHQge1xyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOS9v+eUqOWvjOaWh+acrFxyXG5cdCAqL1xyXG5cdEBwcm9wZXJ0eSh7XHJcblx0XHR0b29sdGlwIDogXCLkvb/nlKjlr4zmlofmnKxcIlxyXG5cdH0pXHJcblx0dXNlUmljaFRleHQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDlhbPogZTmoIfnrb5cclxuXHQgKi9cclxuXHRAcHJvcGVydHkoe1xyXG5cdFx0dHlwZSA6IGNjLkxhYmVsLFxyXG5cdFx0dmlzaWJsZSAoKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMudXNlUmljaFRleHQgPT0gZmFsc2U7XHJcblx0XHR9XHJcblx0fSlcclxuXHRsYWJlbDpjYy5MYWJlbCA9IG51bGwhO1xyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDlhbPogZTlr4zmlofmnKxcclxuXHQgKi9cclxuXHRAcHJvcGVydHkoe1xyXG5cdFx0dHlwZSA6IGNjLlJpY2hUZXh0LFxyXG5cdFx0dmlzaWJsZSAoKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMudXNlUmljaFRleHQgPT0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9KVxyXG5cdHJpY2hUZXh0OmNjLlJpY2hUZXh0ID0gbnVsbCE7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOWFs+iBlOmUrlxyXG5cdCAqL1xyXG5cdEBwcm9wZXJ0eSh7XHJcblx0XHR0b29sdGlwIDogXCLlhbPogZTplK5cIlxyXG5cdH0pXHJcblx0a2V5OnN0cmluZyA9IFwiXCI7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOWFs+iBlOaWh+acrOWPguaVsFxyXG5cdCAqL1xyXG5cdEBwcm9wZXJ0eSh7XHJcblx0XHR0b29sdGlwIDogXCLlhbPogZTmlofmnKzlj4LmlbBcIlxyXG5cdH0pXHJcblx0YXJnczpzdHJpbmcgPSBcIlwiO1xyXG59XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOWkmuivreiogOWbvueJh1xyXG4gKi9cclxuQGNjY2xhc3MoXCJsY2MuTGFuZ0ltYWdlXCIpXHJcbmV4cG9ydCBjbGFzcyBMYW5nSW1hZ2Uge1xyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOWFs+iBlOeyvueBtVxyXG5cdCAqL1xyXG5cdEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcblx0aW1hZ2U6Y2MuU3ByaXRlID0gbnVsbCE7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOWFs+iBlOmUrlxyXG5cdCAqL1xyXG5cdEBwcm9wZXJ0eSh7XHJcblx0XHR0b29sdGlwIDogXCLlhbPogZTplK5cIlxyXG5cdH0pXHJcblx0a2V5OnN0cmluZyA9IFwiXCI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog6K+t6KiA566h55CG5ZmoPGJyLz5cclxuICog566h55CG5aSa6K+t6KiA5LiO5YW25a2X5L2TXHJcbiAqL1xyXG5jbGFzcyBMYW5nTWFuYWdlciBleHRlbmRzIGNjLkV2ZW50VGFyZ2V0IHtcclxuXHRcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDlrZfkvZPnvJPlhrJcclxuXHQgKi9cclxuXHRwcml2YXRlIF9mb250QnVmZjp7W2tleTpzdHJpbmddOmNjLlRURkZvbnR9ID0ganMuY3JlYXRlTWFwKCk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOWbvueJh+e8k+WGslxyXG5cdCAqL1xyXG5cdHByaXZhdGUgX2ltYWdlQnVmZjp7W2tleTpzdHJpbmddOmNjLlNwcml0ZUZyYW1lfSA9IGpzLmNyZWF0ZU1hcCgpO1xyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDor63oqIDphY3nva7ooahcclxuXHQgKi9cclxuXHRwcml2YXRlIF9sYW5nQ29uZmlnOkxhbmdDb25maWcgPSB7IHRleHRzIDoge30sIGltYWdlcyA6IHt9IH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOW9k+WJjeivreiogFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgX25vd0xhbmc6c3RyaW5nID0gbnVsbCE7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOWkmuivreiogOe7hOaYoOWwhOihqFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgX2xhbmdHcm91cE1hcDp7W2tleTpzdHJpbmddOnt0ZXh0czpMYW5nVGV4dFtdLCBpbWFnZXM6TGFuZ0ltYWdlW119fSA9IGpzLmNyZWF0ZU1hcCgpO1xyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDmnoTpgKDnrqHnkIblmahcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3Rvcigpe1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHN0YXRlLm9uKCdpbml0aWFsaXplJywgKCk9PntcclxuXHRcdFx0ZG9pbmcuc3RhdGVJbml0aWFsaXplLmluKCgpPT57XHJcblx0XHRcdFx0dGhpcy5fZm9udEJ1ZmYgPSBqcy5jcmVhdGVNYXAoKTtcclxuXHRcdFx0XHR0aGlzLl9pbWFnZUJ1ZmYgPSBqcy5jcmVhdGVNYXAoKTtcclxuXHRcdFx0XHR0aGlzLl9sYW5nQ29uZmlnID0geyB0ZXh0cyA6IHt9LCBpbWFnZXMgOiB7fSB9O1xyXG5cdFx0XHRcdHRoaXMuX25vd0xhbmcgPSBudWxsO1xyXG5cdFx0XHRcdHRoaXMuX2xhbmdHcm91cE1hcCA9IGpzLmNyZWF0ZU1hcCgpO1xyXG5cdFx0XHRcdGluZGV4TWdyLm9uKFwiaW5kZXhlc19yZW1vdmVkXCIsIHRoaXMucmVsb2FkTm93TGFuZ3VhZ2UsIHRoaXMpO1xyXG5cdFx0XHRcdGluZGV4TWdyLm9uKFwiaW5kZXhlc19sb2FkZWRfXCIgKyBJTkRFWFBBVEguTEFORywgdGhpcy5vbkxhbmdJbmRleGVzTG9hZGVkLCB0aGlzKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdHN0YXRlLm9uKCdyZWxlYXNlJywgKCk9PntcclxuXHRcdFx0ZG9pbmcuc3RhdGVSZWxlYXNlLmluKCgpPT57XHJcblx0XHRcdFx0dGhpcy5jbGVhcigpO1xyXG5cdFx0XHRcdGluZGV4TWdyLnRhcmdldE9mZih0aGlzKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0ICogQGludGVybmFsXHJcblx0ICovXHJcblx0cHJpdmF0ZSBhc3luYyByZWxvYWROb3dMYW5ndWFnZSgpe1xyXG5cdFx0ZG9pbmcuaW5kZXhMb2FkLmFkZENvdW50KCk7XHJcblx0XHR0aGlzLl9sYW5nQ29uZmlnID0geyB0ZXh0cyA6IHt9LCBpbWFnZXMgOiB7fSB9O1xyXG5cdFx0YXdhaXQgdGhpcy5sb2FkUHJlcG9zZUxhbmdzKCk7XHJcblx0XHRhd2FpdCB0aGlzLm9uTGFuZ0luZGV4ZXNMb2FkZWQobGNjLmluZGV4TWdyLmdldEluZGV4KElOREVYUEFUSC5MQU5HKSk7XHJcblx0XHR0aGlzLnJlbW92ZUludmFsaWRCdWZmKCk7XHJcblx0XHRkb2luZy5pbmRleExvYWQuZGVjQ291bnQoKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOW9k+e0ouW8leWKoOi9vVxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBpdmFsdWUg57Si5byV6Lev5b6E5a+56LGhXHJcblx0ICovXHJcblx0cHJpdmF0ZSBhc3luYyBvbkxhbmdJbmRleGVzTG9hZGVkKGl2YWx1ZTpPYmplY3Qpe1xyXG5cdFx0ZG9pbmcuaW5kZXhMb2FkLmFkZENvdW50KCk7XHJcblx0XHR0aGlzLl9ub3dMYW5nID0gdGhpcy5fbm93TGFuZyB8fCBERUZBVUxUX0xBTkdVQUdFO1xyXG5cdFx0aWYoaXZhbHVlKXtcclxuXHRcdFx0bGV0IHRmaWxlcyA9IGl2YWx1ZVt0aGlzLl9ub3dMYW5nXTtcclxuXHRcdFx0aWYodGZpbGVzKXtcclxuXHRcdFx0XHRmb3IgKGxldCB0ZmlsZSBvZiB0ZmlsZXMpe1xyXG5cdFx0XHRcdFx0bGV0IHRhYmxlID0gYXdhaXQgcmVhZENvbmZpZ0ZpbGUodGZpbGUpO1xyXG5cdFx0XHRcdFx0aWYoIXRhYmxlKXtcclxuXHRcdFx0XHRcdFx0Y2MuZXJyb3IoVEFHLCBgbGFuZyBmaWxlICR7dGZpbGV9IHJlYWQgZmFpbCAhISFgKTtcclxuXHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHR0YWJsZSA9IHRyYW5zbGF0ZUpTT04odGFibGUsIGZzLmRpcm5hbWUodGZpbGUpKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5sb2FkVGFibGUodGFibGUsIHRmaWxlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGRvaW5nLmluZGV4TG9hZC5kZWNDb3VudCgpO1xyXG5cdH1cclxuXHRcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDnp7vpmaTml6DmlYjnmoTnvJPlhrJcclxuXHQgKi9cclxuXHRwdWJsaWMgcmVtb3ZlSW52YWxpZEJ1ZmYoKXtcclxuXHRcdC8vIOWtl+S9k1xyXG5cdFx0bGV0IGZvbnRjb25mcyA9IGluZGV4TWdyLmdldEluZGV4KElOREVYUEFUSC5GT05UKTtcclxuXHRcdGZvciAobGV0IGZuYW1lIG9mIE9iamVjdC5rZXlzKHRoaXMuX2ZvbnRCdWZmKSl7XHJcblx0XHRcdGxldCBmb250ID0gdGhpcy5fZm9udEJ1ZmZbZm5hbWVdO1xyXG5cdFx0XHRpZighZm9udGNvbmZzW2ZuYW1lXSAmJiBmb250KXtcclxuXHRcdFx0XHRmb250LmRlY1JlZigpO1xyXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLl9mb250QnVmZltmbmFtZV07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyDlm77niYdcclxuXHRcdGZvciAobGV0IGlwYXRoIG9mIE9iamVjdC5rZXlzKHRoaXMuX2ltYWdlQnVmZikpe1xyXG5cdFx0XHRsZXQgaW1hZ2UgPSB0aGlzLl9pbWFnZUJ1ZmZbaXBhdGhdO1xyXG5cdFx0XHRsZXQgZmluZCA9IGZhbHNlO1xyXG5cdFx0XHQoKCk9PntcclxuXHRcdFx0XHRmb3IobGV0IGsgaW4gdGhpcy5fbGFuZ0NvbmZpZy5pbWFnZXMpe1xyXG5cdFx0XHRcdFx0bGV0IHBhdGggPSB0aGlzLl9sYW5nQ29uZmlnLmltYWdlc1trXTtcclxuXHRcdFx0XHRcdGlmKGlwYXRoID09IHBhdGgpe1xyXG5cdFx0XHRcdFx0XHRmaW5kID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSkoKTtcclxuXHRcdFx0aWYoIWZpbmQpe1xyXG5cdFx0XHRcdGltYWdlLmRlY1JlZigpO1xyXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLl9pbWFnZUJ1ZmZbaXBhdGhdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOWQiOW5tuihqDxici8+XHJcblx0ICog5ZCI5bm26KeE5YiZ5LiOW1tqcy5tZXJnZU1hcF1d5LiA6Ie0XHJcblx0ICogXHJcblx0ICogQHBhcmFtIHRhYmxlIC0g5paw6KGo5a+56LGhXHJcblx0ICogQHBhcmFtIHRmaWxlIC0g5paH5Lu26Lev5b6EXHJcblx0ICovXHJcblx0cHJpdmF0ZSBsb2FkVGFibGUodGFibGU6T2JqZWN0LCB0ZmlsZTpzdHJpbmcgPSBcIlt1bmtub3duXVwiKXtcclxuXHRcdGpzLm1lcmdlTWFwKHRoaXMuX2xhbmdDb25maWcsIHRhYmxlLCB7IHRhZyA6IFRBRywgc291cmNlIDogdGZpbGUgfSk7XHJcblx0XHRERUJVRy5MQU5HICYmIGNjLmxvZyhUQUcsIGBsb2FkIGxhbmcgdGFibGUgJHtKU09OLnN0cmluZ2lmeSh0YWJsZSl9IGZyb20gJHt0ZmlsZX1gKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOWKoOi9veWJjee9rumFjee9rlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhc3luYyBsb2FkUHJlcG9zZUxhbmdzKCl7XHJcblx0XHR0aGlzLl9ub3dMYW5nID0gdGhpcy5fbm93TGFuZyB8fCBERUZBVUxUX0xBTkdVQUdFO1xyXG5cdFx0bGV0IHByZWxhbmdzID0gYXdhaXQgYXNzZXQubG9hZEpzb24oXCJsY2MtYXNzZXRzL3ByZWxhbmdzXCIsIGNjLnJlc291cmNlcyk7XHJcblx0XHRsZXQgbGFuZ0NvbmZpZyA9IHByZWxhbmdzICYmIHByZWxhbmdzW3RoaXMuX25vd0xhbmddO1xyXG5cdFx0aWYobGFuZ0NvbmZpZyl7XHJcblx0XHRcdHRoaXMubG9hZFRhYmxlKHRyYW5zbGF0ZUpTT04obGFuZ0NvbmZpZyksIFwiYXNzZXQ6Ly9yZXNvdXJjZXMvbGNjLWFzc2V0cy9wcmVsYW5nc1wiKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6K6+572u5bm25pu05paw6K+t6KiAXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGxhbmcgLSDor63oqIDlkI3np7BcclxuXHQgKiBAcGFyYW0gZGVmbGFuZyAtIOWPr+mAie+8jOm7mOiupOivreiogFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhc3luYyBzZXRMYW5ndWFnZShsYW5nOnN0cmluZyl7XHJcblx0XHRpZih0aGlzLl9ub3dMYW5nICE9IGxhbmcpe1xyXG5cdFx0XHR0aGlzLl9ub3dMYW5nID0gbGFuZztcclxuXHRcdFx0YXdhaXQgdGhpcy5yZWxvYWROb3dMYW5ndWFnZSgpO1xyXG5cdFx0XHRhd2FpdCB0aGlzLnVwZGF0ZUFsbExhbmdHcm91cCgpO1xyXG5cdFx0XHR0cnl7XHJcblx0XHRcdFx0dGhpcy5lbWl0KFwibGFuZ19jaGFuZ2VkXCIsIGxhbmcpO1xyXG5cdFx0XHR9Y2F0Y2goZSl7XHJcblx0XHRcdFx0Y2MuZXJyb3IoVEFHLCBgc2V0TGFuZ3VhZ2UgRXhjZXB0aW9uICR7ZX1gKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRhd2FpdCBkb2luZy5sYW5nVXBkYXRlLnVudGlsWmVybygpO1x0XHQvLyDnm7TliLDmm7TmlrDlrozmiJBcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOiOt+W+l+W9k+WJjeivreiogFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXRMYW5ndWFnZSgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuX25vd0xhbmc7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDojrflvpfor63oqIDliJfooahcclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0TGFuZ3VhZ2VMaXN0KCl7XHJcblx0XHRyZXR1cm4gT2JqZWN0LmtleXMoaW5kZXhNZ3IuZ2V0SW5kZXgoSU5ERVhQQVRILkxBTkcpKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOabtOaWsOaJgOacieivreiogOe7hFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgYXN5bmMgdXBkYXRlQWxsTGFuZ0dyb3VwKCl7XHJcblx0XHRmb3IgKGxldCBncm91cCBpbiB0aGlzLl9sYW5nR3JvdXBNYXApe1xyXG5cdFx0XHRhd2FpdCB0aGlzLnVwZGF0ZUxhbmdHcm91cChncm91cCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDmm7TmlrDmjIflrpror63oqIDnu4RcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gZ3JvdXAgLSDnu4TlkI3np7BcclxuXHQgKi9cclxuXHRwcml2YXRlIGFzeW5jIHVwZGF0ZUxhbmdHcm91cChncm91cDpzdHJpbmcpe1xyXG5cdFx0aWYodGhpcy5fbm93TGFuZyl7XHJcblx0XHRcdGxldCBncm91cGNvbmYgPSB0aGlzLl9sYW5nR3JvdXBNYXBbZ3JvdXBdO1xyXG5cdFx0XHRpZihncm91cGNvbmYpe1xyXG5cdFx0XHRcdGlmKGdyb3VwY29uZi50ZXh0cyl7XHJcblx0XHRcdFx0XHRmb3IgKGxldCB0YyBvZiBncm91cGNvbmYudGV4dHMpe1xyXG5cdFx0XHRcdFx0XHRhd2FpdCB0aGlzLnVwZGF0ZVRleHQodGMudXNlUmljaFRleHQgPyB0Yy5yaWNoVGV4dCA6IHRjLmxhYmVsLCB0Yy5rZXksIHRjLmFyZ3Muc3BsaXQoXCIsXCIpKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYoZ3JvdXBjb25mLmltYWdlcyl7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBpYyBvZiBncm91cGNvbmYuaW1hZ2VzKXtcclxuXHRcdFx0XHRcdFx0YXdhaXQgdGhpcy51cGRhdGVJbWFnZShpYy5pbWFnZSwgaWMua2V5KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOabtOaWsOaWh+acrFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB0YXJnZXQgLSDnm67moIflr7nosaFcclxuXHQgKiBAcGFyYW0ga2V5IC0g5YWz6IGU5paH5pysa2V5XHJcblx0ICogQHBhcmFtIGFyZ3MgLSDmlofmnKzlj4LmlbBcclxuXHQgKi9cclxuXHRwdWJsaWMgYXN5bmMgdXBkYXRlVGV4dCh0YXJnZXQ6Y2MuTGFiZWx8Y2MuUmljaFRleHQsIGtleTpzdHJpbmcsIC4uLmFyZ3M6YW55W10pe1xyXG5cdFx0ZG9pbmcubGFuZ1VwZGF0ZS5hZGRDb3VudCgpO1xyXG5cdFx0bGV0IHRleHRDb25mID0gdGhpcy5fbGFuZ0NvbmZpZy50ZXh0c1trZXldO1xyXG5cdFx0aWYodGV4dENvbmYpe1xyXG5cdFx0XHR0YXJnZXQuc3RyaW5nID0gdmFyaWFibGUucGFyc2VTdHJpbmcodGV4dENvbmYudGV4dCwgYXJncyk7XHJcblx0XHRcdGlmKHRleHRDb25mLmZvbnRTaXplKXtcclxuXHRcdFx0XHR0YXJnZXQuZm9udFNpemUgPSB0ZXh0Q29uZi5mb250U2l6ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZih0ZXh0Q29uZi5mb250TmFtZSl7XHJcblx0XHRcdFx0bGV0IGZvbnQgPSBhd2FpdCB0aGlzLmdldEZvbnQodGV4dENvbmYuZm9udE5hbWUpO1xyXG5cdFx0XHRcdGlmKGZvbnQpe1xyXG5cdFx0XHRcdFx0dGFyZ2V0LmZvbnQgPSBmb250O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGNjLmVycm9yKFRBRywgYHVwZGF0ZVRleHQgbGFuZzoke3RoaXMuX25vd0xhbmd9IGtleToke2tleX0gbm90IGZvdW5kIWApO1xyXG5cdFx0fVxyXG5cdFx0ZG9pbmcubGFuZ1VwZGF0ZS5kZWNDb3VudCgpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6I635b6X5a2X5L2TXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGZuYW1lIC0g5a2X5L2T5ZCN56ewXHJcblx0ICovXHJcblx0cHJpdmF0ZSBhc3luYyBnZXRGb250KGZuYW1lOnN0cmluZyl7XHJcblx0XHRsZXQgZm9udCA9IHRoaXMuX2ZvbnRCdWZmW2ZuYW1lXTtcclxuXHRcdGlmKCFmb250KXtcclxuXHRcdFx0bGV0IHBhdGggPSBpbmRleE1nci5nZXRJbmRleChJTkRFWFBBVEguRk9OVCArIFwiL1wiICsgZm5hbWUpO1xyXG5cdFx0XHRmb250ID0gYXdhaXQgcGFja01nci5sb2FkVFRGRm9udChwYXRoKTtcclxuXHRcdFx0aWYoZm9udCl7XHJcblx0XHRcdFx0Zm9udC5hZGRSZWYoKTtcclxuXHRcdFx0XHR0aGlzLl9mb250QnVmZltmbmFtZV0gPSBmb250O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZm9udDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOabtOaWsOWbvueJh1xyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB0YXJnZXQgLSDnm67moIflr7nosaFcclxuXHQgKiBAcGFyYW0ga2V5IC0g5YWz6IGU5Zu+54mHa2V5XHJcblx0ICovXHJcblx0cHVibGljIGFzeW5jIHVwZGF0ZUltYWdlKHRhcmdldDpjYy5TcHJpdGUsIGtleTpzdHJpbmcpe1xyXG5cdFx0ZG9pbmcubGFuZ1VwZGF0ZS5hZGRDb3VudCgpO1xyXG5cdFx0bGV0IGltZ1BhdGggPSB0aGlzLl9sYW5nQ29uZmlnLmltYWdlc1trZXldO1xyXG5cdFx0aWYoaW1nUGF0aCl7XHJcblx0XHRcdGxldCBzcGZyYW1lID0gYXdhaXQgdGhpcy5nZXRMYW5nSW1hZ2UoaW1nUGF0aCk7XHJcblx0XHRcdGlmKHNwZnJhbWUpe1xyXG5cdFx0XHRcdHRhcmdldC5zcHJpdGVGcmFtZSA9IHNwZnJhbWU7XHJcblx0XHRcdH1cclxuXHRcdH1lbHNle1xyXG5cdFx0XHRjYy5lcnJvcihUQUcsIGB1cGRhdGVJbWFnZSBsYW5nOiR7dGhpcy5fbm93TGFuZ30ga2V5OiR7a2V5fSBub3QgZm91bmQhYCk7XHJcblx0XHR9XHJcblx0XHRkb2luZy5sYW5nVXBkYXRlLmRlY0NvdW50KCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDojrflvpfor63oqIDlm77niYdcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gZnBhdGggLSDor63oqIDlm77niYfot6/lvoRcclxuXHQgKi9cclxuXHRwcml2YXRlIGFzeW5jIGdldExhbmdJbWFnZShmcGF0aDpzdHJpbmcpe1xyXG5cdFx0bGV0IHNwZnJhbWUgPSB0aGlzLl9pbWFnZUJ1ZmZbZnBhdGhdO1xyXG5cdFx0aWYoIXNwZnJhbWUpe1xyXG5cdFx0XHRzcGZyYW1lID0gYXdhaXQgcGFja01nci5sb2FkU3ByaXRlRnJhbWUoZnBhdGgpO1xyXG5cdFx0XHRpZihzcGZyYW1lKXtcclxuXHRcdFx0XHRzcGZyYW1lLmFkZFJlZigpO1xyXG5cdFx0XHRcdHRoaXMuX2ltYWdlQnVmZltmcGF0aF0gPSBzcGZyYW1lO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gc3BmcmFtZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOa3u+WKoOivreiogOe7hDxici8+XHJcblx0ICog6YWN5aWX57uE5Lu25L2/55SoXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGdyb3VwIC0g57uE5ZCN56ewXHJcblx0ICogQHBhcmFtIHRleHRzIC0g5paH5pys57uEXHJcblx0ICogQHBhcmFtIGltYWdlcyAtIOWbvueJh+e7hFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhc3luYyBfYWRkTGFuZ0dyb3VwKGdyb3VwOnN0cmluZywgdGV4dHM/OkxhbmdUZXh0W10sIGltYWdlcz86TGFuZ0ltYWdlW10pe1xyXG5cdFx0aWYodGhpcy5fbGFuZ0dyb3VwTWFwW2dyb3VwXSl7XHJcblx0XHRcdGNjLmVycm9yKFRBRywgYGxhbmcgZ3JvdXAgY29uZmxpY3QgJHtncm91cH0hISFgKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLl9sYW5nR3JvdXBNYXBbZ3JvdXBdID0ge1xyXG5cdFx0XHRcdHRleHRzIDogdGV4dHMsXHJcblx0XHRcdFx0aW1hZ2VzIDogaW1hZ2VzLFxyXG5cdFx0XHR9O1xyXG5cdFx0XHRhd2FpdCB0aGlzLnVwZGF0ZUxhbmdHcm91cChncm91cCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDnp7vpmaTor63oqIDnu4Q8YnIvPlxyXG5cdCAqIOmFjeWll+e7hOS7tuS9v+eUqFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBncm91cCAtIOe7hOWQjeensFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBfcmVtb3ZlTGFuZ0dyb3VwKGdyb3VwOnN0cmluZyl7XHJcblx0XHRkZWxldGUgdGhpcy5fbGFuZ0dyb3VwTWFwW2dyb3VwXTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOWinuWKoOivreiogOabtOaWsOS4reiuoeaVsFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhZGRMYW5nVXBkYXRpbmcoKXtcclxuXHRcdGRvaW5nLmxhbmdVcGRhdGUuYWRkQ291bnQoKTtcclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5YeP5bCR6K+t6KiA5pu05paw5Lit6K6h5pWwXHJcblx0ICovXHJcblx0cHVibGljIGRlY0xhbmdVcGRhdGluZygpe1xyXG5cdFx0ZG9pbmcubGFuZ1VwZGF0ZS5kZWNDb3VudCgpO1xyXG5cdH1cclxuXHRcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDojrflvpflvZPliY3or63oqIDmlofmnKxcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ga2V5IC0g5YWz6IGUa2V5XHJcblx0ICogQHBhcmFtIGFyZ3MgLSDlj4LmlbDmlbDnu4RcclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0VGV4dChrZXk6c3RyaW5nLCAuLi5hcmdzOmFueVtdKXtcclxuXHRcdGxldCB0ZXh0Q29uZiA9IHRoaXMuX2xhbmdDb25maWcudGV4dHNba2V5XTtcclxuXHRcdGlmICh0ZXh0Q29uZil7XHJcblx0XHRcdHJldHVybiB2YXJpYWJsZS5wYXJzZVN0cmluZyh0ZXh0Q29uZi50ZXh0LCAuLi5hcmdzKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6I635b6X5b2T5YmN6K+t6KiA5Zu+54mHXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGtleSAtIOWFs+iBlGtleVxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhc3luYyBnZXRJbWFnZShrZXk6c3RyaW5nKXtcclxuXHRcdGxldCBpbWdQYXRoID0gdGhpcy5fbGFuZ0NvbmZpZy5pbWFnZXNba2V5XTtcclxuXHRcdGlmIChpbWdQYXRoKXtcclxuXHRcdFx0cmV0dXJuIGF3YWl0IHRoaXMuZ2V0TGFuZ0ltYWdlKGltZ1BhdGgpO1xyXG5cdFx0fVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuXHQgKiBAemhcclxuICAgICAqIOiOt+W+l+WbvueJh+eahOi3r+W+hFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBrZXkgLSDlhbPogZRrZXlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGdldEltYWdlVXJsKGtleTpzdHJpbmcpe1xyXG4gICAgICAgIGxldCBpbWdQYXRoID0gdGhpcy5fbGFuZ0NvbmZpZy5pbWFnZXNba2V5XTtcclxuXHRcdGlmKGltZ1BhdGgpe1xyXG5cdFx0XHRyZXR1cm4gYXdhaXQgcGFja01nci5nZXRBc3NldFVybChpbWdQYXRoKTtcclxuXHRcdH1cclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog6K+t6KiA566h55CG5Zmo5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbGFuZ01nciA9IG5ldyBMYW5nTWFuYWdlcigpO1xyXG5cclxudmFyaWFibGUuc2V0KCdMQU5HJywgKGtleTpzdHJpbmcpPT57XHJcblx0cmV0dXJuIGxhbmdNZ3IuZ2V0VGV4dChrZXkpO1xyXG59KVxyXG5cclxufVxyXG4iLCIvKlxuQ29weXJpZ2h0IDIwMjEgTHVKdW5cblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIFxudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgXG50byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIFxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBcblRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIFxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vLyA8cmVmZXJlbmNlIHBhdGggPSBcIi4vbGFuZy1tYW5hZ2VyLnRzXCIgLz4gXG5cbm5hbWVzcGFjZSBsY2Mge1xuXG5jb25zdCBUQUcgPSBcImxjYy9sYW5ndWFnZS9tdWx0aXBsZS1sYW5ndWFnZXMudHNcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5LCBtZW51fSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8qKlxuICogQHpoXG4gKiDlpJror63oqIDnu5Hlrprnu4Tku7ZcbiAqL1xuQGNjY2xhc3MoXCJsY2MuTXVsdGlwbGVMYW5ndWFnZXNcIilcbkBtZW51KFwiaTE4bjpsY2MtZnJhbWV3b3JrLm1lbnUtZXh0ZW5zaW9uL011bHRpcGxlTGFuZ3VhZ2VzXCIpXG5leHBvcnQgY2xhc3MgTXVsdGlwbGVMYW5ndWFnZXMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXHRcblx0QHByb3BlcnR5KHtcblx0XHR0eXBlIDogW0xhbmdUZXh0XSxcblx0XHR0b29sdGlwIDogXCLlpJror63oqIDmlofmnKxcIlxuXHR9KVxuXHRsYW5nVGV4dHM6TGFuZ1RleHRbXSA9IFtdO1xuXHRcblx0QHByb3BlcnR5KHtcblx0XHR0eXBlIDogW0xhbmdJbWFnZV0sXG5cdFx0dG9vbHRpcCA6IFwi5aSa6K+t6KiA5Zu+54mHXCJcblx0fSlcblx0bGFuZ0ltYWdlczpMYW5nSW1hZ2VbXSA9IFtdO1xuXHRcblx0b25Mb2FkKCl7XG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdGxhbmdNZ3IuX2FkZExhbmdHcm91cCh0aGlzLl9pZCwgdGhpcy5sYW5nVGV4dHMsIHRoaXMubGFuZ0ltYWdlcyk7XG5cdH1cblx0XG5cdG9uRGVzdHJveSgpe1xuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRsYW5nTWdyLl9yZW1vdmVMYW5nR3JvdXAodGhpcy5faWQpO1xuXHR9XG59XG5cbn1cbiIsIi8qXHJcbkNvcHlyaWdodCAyMDIxIEx1SnVuXHJcblxyXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IFxyXG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIFxyXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIFxyXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIFxyXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIFxyXG50byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBcclxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIFxyXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgXHJcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFxyXG5USEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBcclxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgXHJcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG4qL1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2Jhc2UvbGNjLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2Jhc2Uvc3RhdGUudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIGxjYyB7XHJcblxyXG5jb25zdCBUQUcgPSBcImxjYy9sb2cvbG9nLW1hbmFnZXIudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5pel5b+X562J57qnXHJcbiAqL1xyXG5leHBvcnQgZW51bSBMT0dMRVZFTCB7XHJcbiAgICAvKipcclxuICAgICAqIEB6aFxyXG4gICAgICog5pyA5L2O57qn77yM5LuA5LmI6YO95Y+v5LulXHJcbiAgICAgKi9cclxuICAgIFZFUkJPU0UgPSAxLFxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIEB6aFxyXG4gICAgICog6LCD6K+V5pel5b+XXHJcbiAgICAgKi9cclxuICAgIERFQlVHLFxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIEB6aFxyXG4gICAgICog5L+h5oGv5pel5b+XXHJcbiAgICAgKi9cclxuICAgIElORk8sXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogQHpoXHJcbiAgICAgKiDorablkYrml6Xlv5dcclxuICAgICAqL1xyXG4gICAgV0FSTixcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOmUmeivr+aXpeW/l1xyXG4gICAgICovXHJcbiAgICBFUlJPUixcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOWvgumdmSwg55So5LqO5YWz6Zet5pel5b+XXHJcbiAgICAgKi9cclxuXHRTSUxFTlQsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5pel5b+X562J57qn5o+P6L+wXHJcbiAqL1xyXG5jb25zdCBMb2dMZXZlbERlc2NzID0ge1xyXG5cdFtMT0dMRVZFTC5WRVJCT1NFXSA6IFwiVlwiLFxyXG5cdFtMT0dMRVZFTC5ERUJVR10gOiBcIkRcIixcclxuXHRbTE9HTEVWRUwuSU5GT10gOiBcIklcIixcclxuXHRbTE9HTEVWRUwuV0FSTl0gOiBcIldcIixcclxuXHRbTE9HTEVWRUwuRVJST1JdIDogXCJFXCIsXHJcblx0W0xPR0xFVkVMLlNJTEVOVF0gOiBcIlNcIixcclxufVxyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDml6Xlv5flj4LmlbBcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9nUGFyYW1zIHtcclxuXHQvKipcclxuICAgICAqIEB6aFxyXG5cdCAqIOetiee6p1xyXG5cdCAqL1xyXG5cdGxldmVsPzpMT0dMRVZFTDtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBAemhcclxuXHQgKiDmoIfnrb5cclxuXHQgKi9cclxuXHR0YWc/OnN0cmluZztcclxuXHJcblx0LyoqXHJcbiAgICAgKiBAemhcclxuXHQgKiDlhoXlrrlcclxuXHQgKi9cclxuXHRjb250ZW50PzpzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5pel5b+X57yT5YayXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIExvZ0J1ZmZlciB7XHJcblx0LyoqXHJcbiAgICAgKiBAemhcclxuXHQgKiDml6Xlv5fmlbDnu4RcclxuXHQgKi9cclxuXHRsb2dzOnN0cmluZ1tdO1xyXG5cclxuXHQvKipcclxuICAgICAqIEB6aFxyXG5cdCAqIOaXpeW/l+Wkp+Wwj1xyXG5cdCAqL1xyXG5cdHNpemU6bnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOacgOWkp+aXpeW/l+e8k+WGsiDpu5jorqQxTVxyXG4gKi9cclxuZXhwb3J0IGxldCBMT0dfQlVGRkVSU0laRSA9IDEwMjQgKiAxMDI0O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5pel5b+X6buY6K6k5a2Y5pS+6Lev5b6EPGJyLz5cclxuICAqICrljp/nlJ/lubPlj7DmnInmlYgqXHJcbiAqL1xyXG5leHBvcnQgbGV0IExPR19QQVRIID0gQ0NfSlNCICYmIGAke2pzYi5maWxlVXRpbHMuZ2V0V3JpdGFibGVQYXRoKCl9L2xvZ3NgO1xyXG5cclxuIC8qKlxyXG4gICogQHpoXHJcbiAgKiDnlJ/miJDnmoTml6Xlv5fmlofku7blkI3vvIzkuI3lkKvlkI7nvIA8YnIvPlxyXG4gICogKuWOn+eUn+W5s+WPsOacieaViCpcclxuICAqL1xyXG5leHBvcnQgbGV0IExPR19GSUxFTkFNRSA9ICdsb2cnO1xyXG4gXHJcbiAvKipcclxuICAqIEB6aFxyXG4gICog5byA5ZCv5Y2V5Liq5pel5b+X5paH5Lu2PGJyLz5cclxuICAqIOW8gOWQr+WQjuaJgOaciei+k+WHuumDveS8mui/veWKoOWIsOi/meS4quaWh+S7tuS4rTxici8+XHJcbiAgKiAq5Y6f55Sf5bmz5Y+w5pyJ5pWIKlxyXG4gICovXHJcbmV4cG9ydCBsZXQgTE9HX1NJTkdMRSA9IGZhbHNlO1xyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDml6Xlv5fnrqHnkIblmag8YnIvPlxyXG4gKiDkuLvopoHnrqHnkIbmoYbmnrbml6Xlv5fnmoTovpPlh7rlkozkv53lrZg8YnIvPlxyXG4gKiDlubbkuJTkuZ/nm5HlkKznqIvluo/lvILluLjml6Xlv5dcclxuICovXHJcbmNsYXNzIExvZ01hbmFnZXIge1xyXG5cdC8qKlxyXG4gICAgICogQHpoXHJcblx0ICog566h55CG5Zmo5a6e5L6LXHJcblx0ICovXHJcblx0cHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOkxvZ01hbmFnZXI7XHJcblxyXG5cdC8qKlxyXG4gICAgICogQHpoXHJcblx0ICog6I635Y+W5Y2V5L6L5a+56LGhXHJcblx0ICovXHJcblx0cHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpIDogTG9nTWFuYWdlciAge1xyXG5cdFx0aWYoIUxvZ01hbmFnZXIuX2luc3RhbmNlKXtcclxuXHRcdFx0TG9nTWFuYWdlci5faW5zdGFuY2UgPSBuZXcgTG9nTWFuYWdlcigpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIExvZ01hbmFnZXIuX2luc3RhbmNlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBAemhcclxuXHQgKiDml6Xlv5fovpPlh7rnrYnnuqc8YnI+XHJcbiAgICAgKiDlj6rmnInkuI3lsI/kuo7or6XnrYnnuqfnmoTml6Xlv5fkvJrooqvovpPlh7rlkozkv53lrZg8YnIvPlxyXG4gICAgICog5L+d5a2Y5LiN5LiA5a6a5piv5Y+K5pe255qE77yM5pyJ57yT5Yay5Yy6XHJcblx0ICovXHJcblx0cHJpdmF0ZSBfbG9nTGV2ZWw6TE9HTEVWRUwgPSBMT0dMRVZFTC5JTkZPO1xyXG5cclxuXHQvKipcclxuICAgICAqIEB6aFxyXG5cdCAqIOaXpeW/l+e8k+WGsuS/neWtmOetiee6pzxici8+XHJcbiAgICAgKiDlpoLmnpzmlLbliLDkuI3lsI/kuo7or6XnrYnnuqfnmoTml6Xlv5fkvJrnq4vliLvkv53lrZhcclxuXHQgKi9cclxuXHRwcml2YXRlIF9mbHVzaExldmVsOkxPR0xFVkVMID0gTE9HTEVWRUwuRVJST1I7XHJcblx0XHJcblx0LyoqXHJcbiAgICAgKiBAemhcclxuXHQgKiDml6Xlv5fnvJPlhrLlpKflsI9cclxuXHQgKi9cclxuXHRwcml2YXRlIF9idWZmU2l6ZTpudW1iZXIgPSBMT0dfQlVGRkVSU0laRTtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBAemhcclxuXHQgKiDml6Xlv5fnvJPlhrJcclxuXHQgKi9cclxuXHRwcml2YXRlIF9sb2dCdWZmOkxvZ0J1ZmZlciA9IHsgbG9nczpbXSwgc2l6ZTowIH07XHJcblx0XHJcbiAgICAvKipcclxuICAgICAqIEB6aFxyXG4gICAgICog5pel5b+X5paH5Lu2XHJcbiAgICAgKi9cclxuXHRwcml2YXRlIF9sb2dGaWxlOnN0cmluZyA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG4gICAgICogQHpoXHJcblx0ICog5pel5b+X5qC85byP5YyW5Ye95pWwXHJcblx0ICovXHJcblx0cHJpdmF0ZSBfbG9nRm9ybWF0OihwYXJhbXM6TG9nUGFyYW1zKT0+c3RyaW5nID0gdGhpcy5kZWZhdWx0TG9nRm9ybWF0LmJpbmQodGhpcyk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOaehOmAoOWHveaVsFxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHRzdGF0ZS5vbignaW5pdGlhbGl6ZScsICgpPT57XHJcblx0XHRcdGRvaW5nLnN0YXRlSW5pdGlhbGl6ZS5pbigoKT0+e1xyXG5cdFx0XHRcdHRoaXMuX2xvZ0xldmVsID0gIExPR0xFVkVMLklORk87XHJcblx0XHRcdFx0dGhpcy5fZmx1c2hMZXZlbCA9ICBMT0dMRVZFTC5FUlJPUjtcclxuXHRcdFx0XHR0aGlzLl9idWZmU2l6ZSA9ICBMT0dfQlVGRkVSU0laRTtcclxuXHRcdFx0XHR0aGlzLl9sb2dCdWZmID0gIHsgbG9nczpbXSwgc2l6ZTowIH07XHJcblx0XHRcdFx0dGhpcy5fbG9nRmlsZSA9ICBudWxsO1xyXG5cdFx0XHRcdHRoaXMuX2xvZ0Zvcm1hdCA9ICB0aGlzLmRlZmF1bHRMb2dGb3JtYXQuYmluZCh0aGlzKTtcclxuXHRcdFx0XHRpZiAoIUNDX0VESVRPUikge1xyXG5cdFx0XHRcdFx0d2luZG93Lm9uZXJyb3IgPSB0aGlzLm9uRXJyb3IuYmluZCh0aGlzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHRzdGF0ZS5vbigncmVsZWFzZScsICgpPT57XHJcblx0XHRcdGRvaW5nLnN0YXRlUmVsZWFzZS5pbigoKT0+e1xyXG5cdFx0XHRcdGlmICghQ0NfRURJVE9SKSB7XHJcblx0XHRcdFx0XHR3aW5kb3cub25lcnJvciA9IG51bGw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5YWo5bGA6ZSZ6K+vXHJcblx0ICogXHJcblx0ICogQHBhcmFtIG1lc3NhZ2UgXHJcblx0ICogQHBhcmFtIHNvdXJjZSBcclxuXHQgKiBAcGFyYW0gbGluZW5vIFxyXG5cdCAqIEBwYXJhbSBjb2xubyBcclxuXHQgKiBAcGFyYW0gZXJyb3IgXHJcblx0ICovXHJcblx0cHJpdmF0ZSBvbkVycm9yKG1lc3NhZ2UsIHNvdXJjZSwgbGluZW5vLCBjb2xubywgZXJyb3Ipe1xyXG5cdFx0dGhpcy5lcnJvcihcIlNZU1RFTVwiLFwiW1wiICsgZXJyb3IgKyBcIl1cIiArIG1lc3NhZ2UgKyBcIiA8IFwiICsgc291cmNlICsgXCIoXCIgKyBsaW5lbm8gKyBcIixcIiArIGNvbG5vICsgXCIpXCIpO1xyXG5cdH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEB6aFxyXG4gICAgICog6I635b6X5pel5b+X5paH5Lu2PGJyLz5cclxuICAgICAqIOWmguaenOS9v+eUqGBMT0dfU0lOR0xFYOWNleaXpeW/l+aWh+S7tu+8jOmCo+S5iOWni+e7iOiOt+W+l+WQjOS4gOS4quaXpeW/l+aWh+S7tjxici8+XHJcbiAgICAgKiDlkKbliJnvvIzmr4/kuIDmrKHlkK/liqjnqIvluo/vvIzml6Xlv5fmlofku7blkI3np7Dpg73kvJrliqDkuIrml7bpl7TmoIforrBcclxuICAgICAqL1xyXG5cdHB1YmxpYyBnZXRMb2dGaWxlKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuX2xvZ0ZpbGUpe1xyXG5cdFx0XHRpZihDQ19KU0Ipe1xyXG5cdFx0XHRcdGpzYi5maWxlVXRpbHMuY3JlYXRlRGlyZWN0b3J5KExPR19QQVRIKTtcclxuXHRcdFx0XHRpZihMT0dfU0lOR0xFKXtcclxuXHRcdFx0XHRcdHRoaXMuX2xvZ0ZpbGUgPSBgJHtMT0dfUEFUSH0vJHtMT0dfRklMRU5BTUV9LmxvZ2A7XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRsZXQgbm93ID0gbmV3IERhdGUoKTtcclxuXHRcdFx0XHRcdGxldCB5eXl5ID0gbm93LmdldEZ1bGxZZWFyKCk7XHJcblx0XHRcdFx0XHRsZXQgbW0gPSBub3cuZ2V0TW9udGgoKSArIDE7XHJcblx0XHRcdFx0XHRsZXQgZGQgPSBub3cuZ2V0RGF0ZSgpO1xyXG5cdFx0XHRcdFx0bGV0IEhIID0gbm93LmdldEhvdXJzKCk7XHJcblx0XHRcdFx0XHRsZXQgTU0gPSBub3cuZ2V0TWludXRlcygpO1xyXG5cdFx0XHRcdFx0bGV0IFNTID0gbm93LmdldFNlY29uZHMoKTtcclxuXHRcdFx0XHRcdHRoaXMuX2xvZ0ZpbGUgPSBgJHtMT0dfUEFUSH0vJHt5eXl5fSR7bW0gPCAxMCA/IFwiMFwiICsgbW0gOiBtbX0ke2RkIDwgMTAgPyBcIjBcIiArIGRkIDogZGR9JHtISCA8IDEwID8gXCIwXCIgKyBISCA6IEhIfSR7TU0gPCAxMCA/IFwiMFwiICsgTU0gOiBNTX0ke1NTIDwgMTAgPyBcIjBcIiArIFNTIDogU1N9LSR7TE9HX0ZJTEVOQU1FfS5sb2dgO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9nRmlsZTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBAemhcclxuXHQgKiDorr7nva7ml6Xlv5fovpPlh7rnrYnnuqdcclxuICAgICAqIFxyXG5cdCAqIEBwYXJhbSBsZXZlbCAtIOaXpeW/l+etiee6p1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBzZXRMb2dMZXZlbChsZXZlbDpMT0dMRVZFTCl7XHJcblx0XHR0aGlzLl9sb2dMZXZlbCA9IGxldmVsO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBAemhcclxuXHQgKiDorr7nva7nvJPlhrLljLrkv53lrZjnrYnnuqdcclxuICAgICAqIFxyXG5cdCAqIEBwYXJhbSBsZXZlbCAtIOaXpeW/l+etiee6p1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBzZXRGbHVzaExldmVsKGxldmVsOkxPR0xFVkVMKXtcclxuXHRcdHRoaXMuX2ZsdXNoTGV2ZWwgPSBsZXZlbDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG4gICAgICogQHpoXHJcblx0ICog6K6+572u5pel5b+X57yT5Yay5Yy65aSn5bCPXHJcbiAgICAgKiBcclxuXHQgKiBAcGFyYW0gc2l6ZSAtIOWkp+Wwj++8jOWtl+iKguaVsFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzZXRCdWZmZXJTaXplKHNpemU6bnVtYmVyKXtcclxuXHRcdHRoaXMuX2J1ZmZTaXplID0gc2l6ZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG4gICAgICogQHpoXHJcblx0ICog6K6+572u5pel5b+X5qC85byP5YyW5Ye95pWwPGJyLz5cclxuICAgICAqIOWmguaenOiuvue9ruS4uidudWxsJ++8jOmCo+S5iOS8muS9v+eUqOm7mOiupOeahOagvOW8j+WMluWHveaVsFxyXG4gICAgICogXHJcblx0ICogQHBhcmFtIGZvcm1hdCAtIOiHquWumuS5ieagvOW8j+WMluWHveaVsFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzZXRMb2dGb3JtYXQoZm9ybWF0PzoocGFyYW1zOkxvZ1BhcmFtcyk9PnN0cmluZyl7XHJcblx0XHR0aGlzLl9sb2dGb3JtYXQgPSBmb3JtYXQ7XHJcblx0XHRpZighdGhpcy5fbG9nRm9ybWF0KXtcclxuXHRcdFx0dGhpcy5fbG9nRm9ybWF0ID0gdGhpcy5kZWZhdWx0TG9nRm9ybWF0LmJpbmQodGhpcyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuICAgICAqIEB6aFxyXG5cdCAqIOm7mOiupOaXpeW/l+agvOW8j+WMluWHveaVsFxyXG4gICAgICogXHJcblx0ICogQHBhcmFtIHBhcmFtcyAtIOaXpeW/l+WPguaVsFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgZGVmYXVsdExvZ0Zvcm1hdChwYXJhbXM6TG9nUGFyYW1zKXtcclxuXHRcdHJldHVybiBqcy5mb3JtYXREYXRlKFwibW0tZGQgSEg6TU06U1NcIiwgbmV3IERhdGUoKSkgKyBcIiBcIiArIExvZ0xldmVsRGVzY3NbcGFyYW1zLmxldmVsXSArIFwiL1wiICsgcGFyYW1zLnRhZ1xyXG5cdFx0XHQrIFwiIC0gXCIgKyBwYXJhbXMuY29udGVudDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG4gICAgICogQHpoXHJcblx0ICog5YaZ5YWl5pel5b+XPGJyLz5cclxuICAgICAqIOagueaNrmDml6Xlv5fovpPlh7rnrYnnuqdg77yM5Yaz5a6a5piv5ZCm6L6T5Ye65pel5b+XPGJyLz5cclxuICAgICAqIOagueaNrmDnvJPlhrLkv53lrZjnrYnnuqdg77yM5Yaz5a6a5piv5ZCm56uL5Y2z5L+d5a2Y5pel5b+XXHJcbiAgICAgKiBcclxuXHQgKiBAcGFyYW0gcGFyYW1zIC0g5pel5b+X5Y+C5pWwXHJcblx0ICovXHJcblx0cHVibGljIHdyaXRlTG9nKHBhcmFtczpMb2dQYXJhbXMpe1xyXG5cdFx0aWYocGFyYW1zLmxldmVsID49IHRoaXMuX2xvZ0xldmVsKXtcclxuXHRcdFx0bGV0IGxvZyA9IHRoaXMuX2xvZ0Zvcm1hdChwYXJhbXMpO1xyXG5cdFx0XHRzd2l0Y2gocGFyYW1zLmxldmVsKXtcclxuXHRcdFx0Y2FzZSBMT0dMRVZFTC5FUlJPUjpcclxuXHRcdFx0XHRjYy5lcnJvcihsb2cpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIExPR0xFVkVMLldBUk46XHJcblx0XHRcdFx0Y2Mud2Fybihsb2cpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGNjLmxvZyhsb2cpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmKENDX0pTQil7XHJcblx0XHRcdFx0dGhpcy5fbG9nQnVmZi5sb2dzLnB1c2gobG9nKTtcclxuXHRcdFx0XHR0aGlzLl9sb2dCdWZmLnNpemUgKz0gbG9nLmxlbmd0aDtcclxuXHRcdFx0XHRpZihwYXJhbXMubGV2ZWwgPj0gdGhpcy5fZmx1c2hMZXZlbCB8fCB0aGlzLl9sb2dCdWZmLnNpemUgPj0gdGhpcy5fYnVmZlNpemUpe1xyXG5cdFx0XHRcdFx0dGhpcy5mbHVzaExvZygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBAemhcclxuXHQgKiDkv53lrZjml6Xlv5fnvJPlhrI8YnIvPlxyXG4gICAgICog5aaC5p6c6ZyA6KaB6ams5LiK5Zyo5pel5b+X5paH5Lu25LiK55yL5Yiw6L6T5Ye677yM5Y+v5Lul5omL5Yqo6LCD55SoXHJcblx0ICovXHJcblx0cHVibGljIGZsdXNoTG9nKCl7XHJcblx0XHRpZih0aGlzLl9sb2dCdWZmLnNpemUgPiAwKXtcclxuXHRcdFx0aWYoQ0NfSlNCKXtcclxuXHRcdFx0XHQvLyDlhpnlhaXnvJPlhrLljLpcclxuXHRcdFx0XHRqc2IuZmlsZVV0aWxzLndyaXRlU3RyaW5nVG9GaWxlKHRoaXMuX2xvZ0J1ZmYubG9ncy5qb2luKFwiXFxuXCIpICsgXCJcXG5cIiwgdGhpcy5nZXRMb2dGaWxlKCkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuX2xvZ0J1ZmYgPSB7IGxvZ3M6W10sIHNpemU6MCB9O1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDovpPlh7ogVkVSQk9TRSDml6Xlv5dcclxuXHQgKi9cclxuXHRwdWJsaWMgdmVyYm9zZSh0YWdPclBhcmFtczpzdHJpbmcgfCBMb2dQYXJhbXMsIG1zZzpzdHJpbmcsIC4uLmFyZ3M6YW55W10pe1xyXG5cdFx0aWYoTE9HTEVWRUwuVkVSQk9TRSA+PSB0aGlzLl9sb2dMZXZlbCl7XHJcblx0XHRcdGlmKHR5cGVvZiB0YWdPclBhcmFtcyA9PSBcInN0cmluZ1wiKXtcclxuXHRcdFx0XHR0YWdPclBhcmFtcyA9IHsgdGFnIDogdGFnT3JQYXJhbXMgfTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0YWdPclBhcmFtcy5sZXZlbCA9IExPR0xFVkVMLlZFUkJPU0U7XHJcblx0XHRcdHRhZ09yUGFyYW1zLmNvbnRlbnQgPSBqcy5mb3JtYXRTdHJpbmcobXNnLCBhcmdzKTtcclxuXHRcdFx0dGhpcy53cml0ZUxvZyh0YWdPclBhcmFtcyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDovpPlh7ogREVCVUcg5pel5b+XXHJcblx0ICovXHJcblx0cHVibGljIGRlYnVnKHRhZ09yUGFyYW1zOnN0cmluZyB8IExvZ1BhcmFtcywgbXNnOnN0cmluZywgLi4uYXJnczphbnlbXSl7XHJcblx0XHRpZihMT0dMRVZFTC5ERUJVRyA+PSB0aGlzLl9sb2dMZXZlbCl7XHJcblx0XHRcdGlmKHR5cGVvZiB0YWdPclBhcmFtcyA9PSBcInN0cmluZ1wiKXtcclxuXHRcdFx0XHR0YWdPclBhcmFtcyA9IHsgdGFnIDogdGFnT3JQYXJhbXMgfTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0YWdPclBhcmFtcy5sZXZlbCA9IExPR0xFVkVMLkRFQlVHO1xyXG5cdFx0XHR0YWdPclBhcmFtcy5jb250ZW50ID0ganMuZm9ybWF0U3RyaW5nKG1zZywgYXJncyk7XHJcblx0XHRcdHRoaXMud3JpdGVMb2codGFnT3JQYXJhbXMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6L6T5Ye6IElORk8g5pel5b+XXHJcblx0ICovXHJcblx0cHVibGljIGluZm8odGFnT3JQYXJhbXM6c3RyaW5nIHwgTG9nUGFyYW1zLCBtc2c6c3RyaW5nLCAuLi5hcmdzOmFueVtdKXtcclxuXHRcdGlmKExPR0xFVkVMLklORk8gPj0gdGhpcy5fbG9nTGV2ZWwpe1xyXG5cdFx0XHRpZih0eXBlb2YgdGFnT3JQYXJhbXMgPT0gXCJzdHJpbmdcIil7XHJcblx0XHRcdFx0dGFnT3JQYXJhbXMgPSB7IHRhZyA6IHRhZ09yUGFyYW1zIH07XHJcblx0XHRcdH1cclxuXHRcdFx0dGFnT3JQYXJhbXMubGV2ZWwgPSBMT0dMRVZFTC5JTkZPO1xyXG5cdFx0XHR0YWdPclBhcmFtcy5jb250ZW50ID0ganMuZm9ybWF0U3RyaW5nKG1zZywgYXJncyk7XHJcblx0XHRcdHRoaXMud3JpdGVMb2codGFnT3JQYXJhbXMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6L6T5Ye6IFdBUk4g5pel5b+XXHJcblx0ICovXHJcblx0cHVibGljIHdhcm4odGFnT3JQYXJhbXM6c3RyaW5nIHwgTG9nUGFyYW1zLCBtc2c6c3RyaW5nLCAuLi5hcmdzOmFueVtdKXtcclxuXHRcdGlmKExPR0xFVkVMLldBUk4gPj0gdGhpcy5fbG9nTGV2ZWwpe1xyXG5cdFx0XHRpZih0eXBlb2YgdGFnT3JQYXJhbXMgPT0gXCJzdHJpbmdcIil7XHJcblx0XHRcdFx0dGFnT3JQYXJhbXMgPSB7IHRhZyA6IHRhZ09yUGFyYW1zIH07XHJcblx0XHRcdH1cclxuXHRcdFx0dGFnT3JQYXJhbXMubGV2ZWwgPSBMT0dMRVZFTC5XQVJOO1xyXG5cdFx0XHR0YWdPclBhcmFtcy5jb250ZW50ID0ganMuZm9ybWF0U3RyaW5nKG1zZywgYXJncyk7XHJcblx0XHRcdHRoaXMud3JpdGVMb2codGFnT3JQYXJhbXMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6L6T5Ye6IEVSUk9SIOaXpeW/l1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBlcnJvcih0YWdPclBhcmFtczpzdHJpbmcgfCBMb2dQYXJhbXMsIG1zZzpzdHJpbmcsIC4uLmFyZ3M6YW55W10pe1xyXG5cdFx0aWYoTE9HTEVWRUwuRVJST1IgPj0gdGhpcy5fbG9nTGV2ZWwpe1xyXG5cdFx0XHRpZih0eXBlb2YgdGFnT3JQYXJhbXMgPT0gXCJzdHJpbmdcIil7XHJcblx0XHRcdFx0dGFnT3JQYXJhbXMgPSB7IHRhZyA6IHRhZ09yUGFyYW1zIH07XHJcblx0XHRcdH1cclxuXHRcdFx0dGFnT3JQYXJhbXMubGV2ZWwgPSBMT0dMRVZFTC5FUlJPUjtcclxuXHRcdFx0dGFnT3JQYXJhbXMuY29udGVudCA9IGpzLmZvcm1hdFN0cmluZyhtc2csIGFyZ3MpO1xyXG5cdFx0XHR0aGlzLndyaXRlTG9nKHRhZ09yUGFyYW1zKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDml6Xlv5fnrqHnkIblmajlr7nosaFcclxuICovXHJcbmV4cG9ydCBjb25zdCBsb2dNZ3IgPSBuZXcgTG9nTWFuYWdlcigpO1xyXG5cclxufVxyXG5cdCIsIi8qXHJcbkNvcHlyaWdodCAyMDIxIEx1SnVuXHJcblxyXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IFxyXG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIFxyXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIFxyXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIFxyXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIFxyXG50byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBcclxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIFxyXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgXHJcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFxyXG5USEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBcclxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgXHJcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG4qL1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2Jhc2UvbGNjLnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBsY2Mge1xyXG5cclxuY29uc3QgVEFHID0gXCJsY2MvbmV0d29yay9uZXQtbGluZS50c1wiO1xyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDnvZHnu5znur/mqKHlvI9cclxuICovXHJcbmV4cG9ydCBlbnVtIE5ldExpbmVNb2RlIHtcclxuICAgIC8qKlxyXG4gICAgICogQHpoXHJcbiAgICAgKiDlrqLmiLfnq69cclxuICAgICAqL1xyXG4gICAgQ0xJRU5UID0gMSxcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOacjeWKoeWZqFxyXG4gICAgICovXHJcbiAgICBTRVJWRVIsXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogQHpoXHJcbiAgICAgKiDov57mjqUt5pyN5Yqh5Zmo5pS25Yiw55qE6L+e5o6lXHJcbiAgICAgKi9cclxuICAgIENPTk5FQ1QsXHJcbn07XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOe9kee7nOe6v+Wfuuexuzxici8+XHJcbiAqIOWfuuacrOWxnuaAp+OAgee9kee7nOaVsOaNrueahOe8k+WGsuWSjOWPkemAgeaTjeS9nOetiVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE5ldExpbmUgZXh0ZW5kcyBjYy5FdmVudFRhcmdldCB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOe9kee7nOe6v+exu+Wei+ihqFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgc3RhdGljIF9fdHlwZXM6e1trZXk6bnVtYmVyXTp0eXBlb2YgTmV0TGluZX0gPSBqcy5jcmVhdGVNYXAoKTtcclxuXHRcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDnvZHnu5znur/lkI3np7BcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgX25hbWU6c3RyaW5nID0gbnVsbDtcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog572R57uc57q/5qih5byPXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIF9tb2RlOk5ldExpbmVNb2RlID0gbnVsbDtcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog572R57uc57q/57G75Z6LXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIF90eXBlOm51bWJlciA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOS9v+eUqFByb3RvQnVmZlxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBfdXNlUHJvdG9CdWZmOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6Ieq5Yqo5Y+R6YCBXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIF9hdXRvU2VuZDpib29sZWFuID0gdHJ1ZTtcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5Y+R6YCB57yT5YayXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIF9zZW5kQ2FjaGVzOlByb3RvY29sRGF0YVtdID0gW107XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOiHquWKqOWIhuWPkVxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBfYXV0b0Rpc3BhdGNoOmJvb2xlYW4gPSB0cnVlO1xyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDliIblj5HnvJPlhrJcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgX2Rpc3BhdGNoQ2FjaGVzOlByb3RvY29sRGF0YVtdID0gW107XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOazqOWGjOe9kee7nOe6v+exu+Wei1xyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBuZXRUeXBlIC0g572R57uc57G75Z6L5p6a5Li+XHJcblx0ICogQHBhcmFtIHZhbHVlIC0g572R57uc57G75Z6L5a+56LGhXHJcblx0ICovXHJcblx0cHVibGljIHN0YXRpYyByZWdpc3Rlck5ldFR5cGUobmV0VHlwZTpudW1iZXIsIHZhbHVlOnR5cGVvZiBOZXRMaW5lKXtcclxuXHRcdE5ldExpbmUuX190eXBlc1tuZXRUeXBlXSA9IHZhbHVlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6I635b6X572R57uc57G75Z6L5a+56LGhXHJcblx0ICogXHJcblx0ICogQHBhcmFtIG5ldFR5cGUgLSDnvZHnu5znsbvlnovmnprkuL5cclxuXHQgKi9cclxuXHRwdWJsaWMgc3RhdGljIGdldE5ldFR5cGUobmV0VHlwZTpudW1iZXIpe1xyXG5cdFx0cmV0dXJuIE5ldExpbmUuX190eXBlc1tuZXRUeXBlXTtcclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5p6E6YCg5Ye95pWwXHJcblx0ICogQHBhcmFtIG5hbWUgLSDlkI3np7BcclxuXHQgKiBAcGFyYW0gbW9kZSAtIOaooeW8j1xyXG5cdCAqIEBwYXJhbSB0eXBlIC0g57G75Z6LXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IobmFtZTpzdHJpbmcsIG1vZGU6TmV0TGluZU1vZGUsIHR5cGU6bnVtYmVyKXtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLl9tb2RlID0gbW9kZTtcclxuXHRcdHRoaXMuX3R5cGUgPSB0eXBlO1xyXG5cdFx0dGhpcy5fbmFtZSA9IG5hbWU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuICAgICAqIEB6aFxyXG5cdCAqIOmFjee9rue9kee7nOe6vzxici8+XHJcbiAgICAgKiDlrZDnsbvkuK3lupTor6Xph43lhpnor6Xlh73mlbBcclxuICAgICAqIFxyXG5cdCAqIEBwYXJhbSBjb25maWcgLSDkuI3lkIznsbvlnovnmoTnvZHnu5znur/mnInkuI3lkIznmoTphY3nva5cclxuXHQgKi9cclxuXHRwdWJsaWMgY29uZmlnKGNvbmZpZzphbnkpe31cclxuXHRcclxuXHQvKipcclxuICAgICAqIEB6aFxyXG5cdCAqIOajgOafpee9kee7nOe6v+aYr+WQpuacieaViDxici8+XHJcbiAgICAgKiDlrZDnsbvkuK3lupTor6Xph43lhpnor6Xlh73mlbBcclxuICAgICAqIFxyXG4gICAgICogQHJldHVybnMg5aaC5p6c5peg5pWI77yM5pyJ5Lqb5pON5L2c5Y+v6IO95LiN5Lya5omn6KGMXHJcblx0ICovXHJcblx0cHVibGljIGlzVmFsaWQoKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG4gICAgXHJcblx0LyoqXHJcbiAgICAgKiBAemhcclxuXHQgKiDmiZPlvIDnvZHnu5znur88YnIvPlxyXG4gICAgICog5a2Q57G75Lit5bqU6K+l6YeN5YaZ6K+l5Ye95pWwXHJcblx0ICovXHJcblx0cHVibGljIGFzeW5jIG9wZW4oKTpQcm9taXNlPGJvb2xlYW4+e1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHRcclxuXHQvKipcclxuICAgICAqIEB6aFxyXG5cdCAqIOWFs+mXree9kee7nOe6vzxici8+XHJcbiAgICAgKiDlrZDnsbvkuK3lupTor6Xph43lhpnor6Xlh73mlbBcclxuXHQgKi9cclxuXHRwdWJsaWMgY2xvc2UoKXt9XHJcblxyXG5cdC8qKlxyXG4gICAgICogQHpoXHJcblx0ICog5pu05paw572R57uc57q/PGJyLz5cclxuICAgICAqIOWtkOexu+S4reW6lOivpemHjeWGmeivpeWHveaVsFxyXG4gICAgICogXHJcblx0ICogQHBhcmFtIGR0IOmXtOmalOaXtumXtFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBvblVwZGF0ZShkdDpudW1iZXIpe31cclxuXHJcblx0LyoqXHJcbiAgICAgKiBAemhcclxuXHQgKiDlj5HpgIHnvZHnu5zmlbDmja48YnIvPlxyXG4gICAgICog5a2Q57G75Lit5bqU6K+l6YeN5YaZ6K+l5Ye95pWwXHJcbiAgICAgKiBcclxuXHQgKiBAcGFyYW0gZGF0YSAtIOe9kee7nOaVsOaNrlxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBzZW5kTmV0RGF0YShkYXRhOk5ldERhdGEpe1xyXG5cdFx0Y29uc29sZS53YXJuKFRBRywgYE5ldExpbmUgJHt0aGlzLl9uYW1lfSBkaXNjYXJkIHNlbmQgZGF0YXMhYCk7XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG4gICAgICogQHpoXHJcblx0ICog6I635b6X572R57uc57q/5ZCN56ewXHJcblx0ICovXHJcblx0cHVibGljIGdldE5hbWUoKXtcclxuXHRcdHJldHVybiB0aGlzLl9uYW1lO1xyXG5cdH1cclxuXHRcclxuXHQvKipcclxuICAgICAqIEB6aFxyXG5cdCAqIOiOt+W+l+aooeW8j1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXRNb2RlKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW9kZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG4gICAgICogQHpoXHJcblx0ICog6I635b6X57G75Z6LXHJcblx0ICovXHJcblx0cHVibGljIGdldFR5cGUoKXtcclxuXHRcdHJldHVybiB0aGlzLl90eXBlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6K6+572u5piv5ZCm5L2/55SoUHJvdG9CdWZmXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHVzZSAtIOaYr+WQpuS9v+eUqFByb3RvQnVmZlxyXG5cdCAqL1xyXG5cdHB1YmxpYyB1c2VQcm90b0J1ZmYodXNlOmJvb2xlYW4pe1xyXG5cdFx0dGhpcy5fdXNlUHJvdG9CdWZmID0gdXNlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5qOA5p+l5piv5ZCm5L2/55SoUHJvdG9CdWZmXHJcblx0ICovXHJcblx0cHVibGljIGlzVXNlUHJvdG9CdWZmKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5fdXNlUHJvdG9CdWZmO1xyXG5cdH1cclxuXHRcclxuXHQvKipcclxuICAgICAqIEB6aFxyXG5cdCAqIOiHquWKqOWPkemAgeS9v+iDvTxici8+44CBXHJcbiAgICAgKiBg6Ieq5Yqo5Y+R6YCBYOeahOaEj+aAneaYr++8muWmguaenGB3cml0ZVByb3RvY29sYOWGmeWFpeWNj+iuruWQju+8jOS8mueri+WIu+WPkemAgeWHuuWOu1xyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gcHNlbmQgLSDmmK/lkKboh6rliqjlj5HpgIFcclxuXHQgKi9cclxuXHRwdWJsaWMgYXV0b1NlbmQocHdyaXRlOmJvb2xlYW4pe1xyXG4gICAgICAgIERFQlVHLk5FVFdPUksgJiYgY2MubG9nKFRBRywgYCR7dGhpcy5nZXROYW1lKCl9IGF1dG9TZW5kICR7cHdyaXRlfWApO1xyXG5cdFx0aWYodGhpcy5fYXV0b1NlbmQgIT0gcHdyaXRlKXtcclxuXHRcdFx0dGhpcy5fYXV0b1NlbmQgPSBwd3JpdGU7XHJcblx0XHRcdGlmKHB3cml0ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZsdXNoU2VuZENhY2hlcygpO1xyXG4gICAgICAgICAgICB9XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG4gICAgICogQHpoXHJcblx0ICog6Ieq5Yqo5YiG5Y+R5L2/6IO9PGJyLz7jgIFcclxuICAgICAqIGDoh6rliqjlj5HpgIFg55qE5oSP5oCd5piv77ya5aaC5p6c5o6l5pS25Yiw572R57uc5pWw5o2u5Y2P6K6u5ZCO77yM5piv5ZCm56uL5Yi7YGVtaXRg5Yiw5rOo5YaM55qE5Y2P6K6u5LqL5Lu2XHJcbiAgICAgKiBcclxuXHQgKiBAcGFyYW0gZGlzcGF0Y2ggLSDmmK/lkKboh6rliqjliIblj5FcclxuXHQgKi9cclxuXHRwdWJsaWMgYXV0b0Rpc3BhdGNoKGRpc3BhdGNoOmJvb2xlYW4pe1xyXG4gICAgICAgIERFQlVHLk5FVFdPUksgJiYgY2MubG9nKFRBRywgYCR7dGhpcy5nZXROYW1lKCl9IGF1dG9EaXNwYXRjaCAke2Rpc3BhdGNofWApO1xyXG5cdFx0aWYgKHRoaXMuX2F1dG9EaXNwYXRjaCAhPSBkaXNwYXRjaCkge1xyXG5cdFx0XHR0aGlzLl9hdXRvRGlzcGF0Y2ggPSBkaXNwYXRjaDtcclxuXHRcdFx0aWYoZGlzcGF0Y2gpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbHVzaERpc3BhdGNoQ2FjaGVzKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOWOi+WFpeWPkemAgee8k+WtmFxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gZGF0YXMgLSDljY/orq7mlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHB1c2hTZW5kQ2FjaGVzKGRhdGFzOlByb3RvY29sRGF0YVtdKXtcclxuICAgICAgICBERUJVRy5ORVRXT1JLICYmIGNjLmxvZyhUQUcsIGAke3RoaXMuZ2V0TmFtZSgpfSBwdXNoU2VuZENhY2hlcyAke0pTT04uc3RyaW5naWZ5KGRhdGFzKX1gKTtcclxuICAgICAgICB0aGlzLl9zZW5kQ2FjaGVzLnB1c2goLi4uZGF0YXMpO1xyXG4gICAgICAgIGlmKHRoaXMuX2F1dG9TZW5kKXtcclxuICAgICAgICAgICAgdGhpcy5mbHVzaFNlbmRDYWNoZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOWOi+WFpeWIhuWPkee8k+WtmFxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gZGF0YXMgLSDljY/orq7mlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHB1c2hEaXNwYXRjaENhY2hlcyhkYXRhczpQcm90b2NvbERhdGFbXSl7XHJcbiAgICAgICAgREVCVUcuTkVUV09SSyAmJiBjYy5sb2coVEFHLCBgJHt0aGlzLmdldE5hbWUoKX0gcHVzaERpc3BhdGNoQ2FjaGVzICR7SlNPTi5zdHJpbmdpZnkoZGF0YXMpfWApO1xyXG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoQ2FjaGVzLnB1c2goLi4uZGF0YXMpO1xyXG4gICAgICAgIGlmKHRoaXMuX2F1dG9EaXNwYXRjaCl7XHJcbiAgICAgICAgICAgIHRoaXMuZmx1c2hEaXNwYXRjaENhY2hlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBAemhcclxuXHQgKiDlvLnlh7rlj5HpgIHnvJPlhrI8YnIvPlxyXG4gICAgICog5Lya6L+U5Zue5bm25riF56m65Y+R6YCB57yT5YayXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm5zIOWNj+iuruaVsOaNrlxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBwb3BTZW5kQ2FjaGVzKCl7XHJcblx0XHRpZih0aGlzLl9zZW5kQ2FjaGVzLmxlbmd0aCA+IDApe1xyXG5cdFx0XHRsZXQgY2FjaGVzID0gdGhpcy5fc2VuZENhY2hlcztcclxuICAgICAgICAgICAgdGhpcy5fc2VuZENhY2hlcyA9IFtdO1xyXG4gICAgICAgICAgICBERUJVRy5ORVRXT1JLICYmIGNjLmxvZyhUQUcsIGAke3RoaXMuZ2V0TmFtZSgpfSBwb3BTZW5kQ2FjaGVzIHN1Y2Nlc3NgKTtcclxuXHRcdFx0cmV0dXJuIGNhY2hlcztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG4gICAgICogQHpoXHJcblx0ICog6L6T5Ye65Y+R6YCB57yT5YayPGJyLz5cclxuICAgICAqIOW9k+e9kee7nOe6v+aXoOaViOaIluiAheayoeacieaVsOaNruaXtu+8jOmZpOmdnuS9v+eUqGBmb3JjZWDvvIzlkKbliJnkuI3og73miafooYzlj5HpgIHmk43kvZxcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGZvcmNlIC0g5aaC5p6c5b2T5YmN572R57uc57q/5peg5pWI77yM5Lmf5by65Yi26L6T5Ye6KOacgOe7iOe7k+aenOWPr+iDveaYr+S4ouW8g+aJgOacieaVsOaNrilcclxuXHQgKi9cclxuXHRwdWJsaWMgZmx1c2hTZW5kQ2FjaGVzKGZvcmNlOmJvb2xlYW4gPSBmYWxzZSl7XHJcbiAgICAgICAgaWYoZm9yY2UgfHwgKHRoaXMuaXNWYWxpZCgpICYmIHRoaXMuX3NlbmRDYWNoZXMubGVuZ3RoID4gMCkpe1xyXG4gICAgICAgICAgICBERUJVRy5ORVRXT1JLICYmIGNjLmxvZyhUQUcsIGAke3RoaXMuZ2V0TmFtZSgpfSBmbHVzaFNlbmRDYWNoZXMgc3VjY2VzcyAke2ZvcmNlfWApO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlTmV0TGluZURhdGEobmV0ZGF0YS5OZXREYXRhVHlwZS5QUk9UT0NPTFMpO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG4gICAgICogQHpoXHJcblx0ICog6L6T5Ye65YiG5Y+R57yT5YayPGJyLz5cclxuICAgICAqIOWIhuWPkeWkhOeQhue8k+WGsuS4reeahOe9kee7nOaVsOaNrlxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBmbHVzaERpc3BhdGNoQ2FjaGVzKCl7XHJcbiAgICAgICAgREVCVUcuTkVUV09SSyAmJiBjYy5sb2coVEFHLCBgJHt0aGlzLmdldE5hbWUoKX0gZmx1c2hEaXNwYXRjaENhY2hlcyBzdWNjZXNzYCk7XHJcblx0XHRmb3IgKGxldCBjYWNoZSBvZiB0aGlzLl9kaXNwYXRjaENhY2hlcyl7XHJcblx0XHRcdHRyeXtcclxuXHRcdFx0XHR0aGlzLmVtaXQoXCJwcm90b2NvbC1cIiArIGNhY2hlLmNtZCwgY2FjaGUuZGF0YSwgdGhpcyk7XHJcblx0XHRcdFx0dGhpcy5lbWl0KFwicHJvdG9jb2xcIiwgY2FjaGUuY21kLCBjYWNoZS5kYXRhLCB0aGlzKTtcclxuXHRcdFx0XHRpZih0aGlzLl9tb2RlID09PSBOZXRMaW5lTW9kZS5DTElFTlQpe1xyXG5cdFx0XHRcdFx0bmV0Q2xpZW50LmVtaXQoXCJwcm90b2NvbC1cIiArIGNhY2hlLmNtZCwgY2FjaGUuZGF0YSwgdGhpcyk7XHJcblx0XHRcdFx0XHRuZXRDbGllbnQuZW1pdChcInByb3RvY29sXCIsIGNhY2hlLmNtZCwgY2FjaGUuZGF0YSwgdGhpcyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9Y2F0Y2goZSl7XHJcblx0XHRcdFx0Y2MuZXJyb3IoVEFHLCBgJHt0aGlzLmdldE5hbWUoKX0gZmx1c2hEaXNwYXRjaENhY2hlcyBFeGNlcHRpb24gJHtlfWApO1xyXG5cdFx0XHR9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoQ2FjaGVzID0gW107XHJcbiAgICB9XHJcblx0XHJcbiAgICAvKipcclxuICAgICAqIEB6aFxyXG4gICAgICog5YaZ5YWl572R57uc57q/5pWw5o2uXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB0eXBlIC0g5pWw5o2u57G75Z6LXHJcbiAgICAgKiBAcGFyYW0gZGF0YSAtIOaVsOaNruWvueixoVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgd3JpdGVOZXRMaW5lRGF0YTxUPih0eXBlOm5ldGRhdGEuTmV0RGF0YVR5cGUsIGRhdGE/OlQpe1xyXG4gICAgICAgIERFQlVHLk5FVFdPUksgJiYgY2MubG9nKFRBRywgYCR7dGhpcy5nZXROYW1lKCl9IHdyaXRlTmV0TGluZURhdGEgJHt0eXBlfSAke2RhdGEgJiYgSlNPTi5zdHJpbmdpZnkoZGF0YSl9YCk7XHJcbiAgICAgICAgdGhpcy5zZW5kTmV0RGF0YSh7IHR5cGUgOiB0eXBlLCBkYXRhIDogZGF0YSwgcHJvdG9jb2xzIDogdGhpcy5wb3BTZW5kQ2FjaGVzKCkgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuXHQvKipcclxuICAgICAqIEB6aFxyXG5cdCAqIOWGmeWFpeWNj+iurjxici8+XHJcbiAgICAgKiDljY/orq7mmK/mnIDln7rmnKznmoTpgJrkv6HmlbDmja7vvIzlroPnlLFgY21kYOagh+iusOaVsOaNrueahOexu+Wei++8jOWSjGBkYXRhYOWMheWQq+WFt+S9k+WGheWuuee7hOaIkFxyXG4gICAgICogXHJcblx0ICogQHBhcmFtIGNtZCAtIOWRveS7pFxyXG5cdCAqIEBwYXJhbSBkYXRhIC0g5pWw5o2uXHJcblx0ICovXHJcblx0cHVibGljIHdyaXRlUHJvdG9jb2w8VD4oY21kOm51bWJlciwgZGF0YT86VCl7XHJcbiAgICAgICAgREVCVUcuTkVUV09SSyAmJiBjYy5sb2coVEFHLCBgJHt0aGlzLmdldE5hbWUoKX0gd3JpdGVQcm90b2NvbCAke2NtZH0gJHtkYXRhICYmIEpTT04uc3RyaW5naWZ5KGRhdGEpfWApO1xyXG5cdFx0dGhpcy5wdXNoU2VuZENhY2hlcyhbe1xyXG4gICAgICAgICAgICBjbWQgOiBjbWQsXHJcbiAgICAgICAgICAgIGRhdGEgOiBkYXRhLFxyXG4gICAgICAgIH1dKTtcclxuICAgIH1cclxufVxyXG5cclxufVxyXG4iLCIvKlxyXG5Db3B5cmlnaHQgMjAyMSBMdUp1blxyXG5cclxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBcclxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBcclxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyBcclxudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBcclxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCBcclxudG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gXHJcbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBcclxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIFxyXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBcclxuVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgXHJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIFxyXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuKi9cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9iYXNlL2xjYy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9iYXNlL3N0YXRlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3V0aWxzL2pzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vbmV0LWxpbmUudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIGxjYyB7XHJcblxyXG5jb25zdCBUQUcgPSBcImxjYy9uZXR3b3JrL25ldC1jbGllbnQudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog572R57uc5a6i5oi356uvdGlja+aXtumXtDxici8+XHJcbiAqIOWuouaIt+err+S4iltbTmV0TGluZS5vblVwZGF0ZV1d55qE5Z+65YeG5pe26Ze0XHJcbiAqL1xyXG5leHBvcnQgbGV0IE5FVENMSUVOVF9USUNLVElNRSA9IDE7XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOe9kee7nOWuouaIt+err+aYoOWwhOihqFxyXG4gKi9cclxuZXhwb3J0IGxldCBORVRDTElFTlRTOntba2V5OnN0cmluZ106TmV0TGluZX0gPSBqcy5jcmVhdGVNYXAoKTtcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog572R57uc5a6i5oi356uv566h55CGPGJyLz5cclxuICog5Li75Yqo5Y+R6LW36L+e5o6l56uv55qE566h55CGXHJcbiAqL1xyXG5jbGFzcyBOZXRDbGllbnQgZXh0ZW5kcyBjYy5FdmVudFRhcmdldCB7XHJcblx0XHJcblx0LyoqXHJcbiAgICAgKiBAemhcclxuXHQgKiDmmK/lkKbkvb/nlKjnvZHnu5zlv4Pot7NcclxuXHQgKi9cclxuXHRwcml2YXRlIF91c2VOZXRIZWFydDpib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIFdTUyDphY3nva5cclxuXHQgKi9cclxuXHRwcml2YXRlIF9XU1NDb25maWc6e3Byb3RvY29sOnN0cmluZywgY2VydDpzdHJpbmd9ID0gbnVsbDtcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5p6E6YCg5Ye95pWwXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoKXtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHRzdGF0ZS5vbignaW5pdGlhbGl6ZScsICgpPT57XHJcblx0XHRcdGRvaW5nLnN0YXRlSW5pdGlhbGl6ZS5pbigoKT0+e1xyXG5cdFx0XHRcdHRoaXMuX3VzZU5ldEhlYXJ0ID0gIGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuX1dTU0NvbmZpZyA9ICBudWxsO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0c3RhdGUub24oJ3JlbGVhc2UnLCAoKT0+e1xyXG5cdFx0XHRkb2luZy5zdGF0ZVJlbGVhc2UuaW4oKCk9PntcclxuXHRcdFx0XHR0aGlzLmNsZWFyKCk7XHJcblx0XHRcdFx0dGhpcy5yZW1vdmVBbGxDbGllbnRzKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOiuvue9rldTUyDphY3nva5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gcHJvdG9jb2wgLSDljY/orq5cclxuXHQgKiBAcGFyYW0gY2VydCAtIOivgeS5plxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzZXRXU1NDb25maWcocHJvdG9jb2w6c3RyaW5nLCBjZXJ0OnN0cmluZyl7XHJcblx0XHR0aGlzLl9XU1NDb25maWcgPSB7XHJcblx0XHRcdHByb3RvY29sIDogcHJvdG9jb2wsXHJcblx0XHRcdGNlcnQgOiBjZXJ0LFxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDojrflvpdXU1Mg6YWN572uXHJcblx0ICovXHJcblx0cHVibGljIGdldFdTU0NvbmZpZygpe1xyXG5cdFx0cmV0dXJuIHRoaXMuX1dTU0NvbmZpZztcclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5a6J6KOF5b+D6LezXHJcblx0ICovXHJcblx0cHJpdmF0ZSBzZXR1cEhlYXJ0VGljaygpe1xyXG5cdFx0aWYoIXRoaXMuX3VzZU5ldEhlYXJ0ICYmICFqcy5pc0VtcHR5TWFwKE5FVENMSUVOVFMpKXtcclxuXHRcdFx0dGltZXJNZ3IuYWRkVGltZXIoTkVUQ0xJRU5UX1RJQ0tUSU1FLCB0aGlzLm9uSGVhcnRUaWNrLmJpbmQodGhpcyksIHtcclxuICAgICAgICAgICAgICAgIGdyb3VwIDogXCJsY2MuTmV0Q2xpZW50XCIsIFxyXG4gICAgICAgICAgICAgICAga2V5IDogXCJ0aWNrXCIsXHJcbiAgICAgICAgICAgICAgICBsb29wIDogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5fdXNlTmV0SGVhcnQgPSB0cnVlO1xyXG4gICAgICAgICAgICBERUJVRy5ORVRXT1JLICYmIGNjLmxvZyhUQUcsIGBzZXR1cEhlYXJ0VGljayB0aWNrICR7TkVUQ0xJRU5UX1RJQ0tUSU1FfWApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5Yig6Zmk5b+D6LezXHJcblx0ICovXHJcblx0cHJpdmF0ZSBkZWxldGVIZWFydFRpY2soKXtcclxuXHRcdGlmKHRoaXMuX3VzZU5ldEhlYXJ0ICYmIGpzLmlzRW1wdHlNYXAoTkVUQ0xJRU5UUykpe1xyXG5cdFx0XHR0aW1lck1nci5yZW1vdmVUaW1lcih7XHJcbiAgICAgICAgICAgICAgICBncm91cCA6IFwibGNjLk5ldENsaWVudFwiLCBcclxuICAgICAgICAgICAgICAgIGtleSA6IFwidGlja1wiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5fdXNlTmV0SGVhcnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgREVCVUcuTkVUV09SSyAmJiBjYy5sb2coVEFHLCBgZGVsZXRlSGVhcnRUaWNrIHRpY2tgKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0LyoqXHJcbiAgICAgKiBAemhcclxuXHQgKiDlvZPlv4Pot7Plm57osINcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGR0IOmXtOmalOaXtumXtO+8jOS4gOiIrOS4ultbTkVUQ0xJRU5UX1RJQ0tUSU1FXV1cclxuXHQgKi9cclxuXHRwcml2YXRlIG9uSGVhcnRUaWNrKGR0Om51bWJlcil7XHJcblx0XHRmb3IgKGxldCBjbmFtZSBvZiBPYmplY3Qua2V5cyhORVRDTElFTlRTKSl7XHJcblx0XHRcdGxldCBuZXRsaW5lID0gTkVUQ0xJRU5UU1tjbmFtZV07XHJcblx0XHRcdGlmKG5ldGxpbmUpe1xyXG5cdFx0XHRcdG5ldGxpbmUub25VcGRhdGUoZHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIOa3u+WKoOWuouaIt+errzxici8+XHJcbiAgICAgKiDov5nph4zlj6rmmK/mt7vliqDlrqLmiLfnq6/vvIzlpoLmnpzkvaDpnIDopoHlkK/liqjlrqLmiLfnq6/vvIzlupTor6XmiYvliqjosIPnlKhgb3BlbmA8YnIvPlxyXG4gICAgICogYGBgXHJcbiAgICAgKiAgICAgIGxldCBjbGllbnQgPSBsY2MubmV0Q2xpZW50LmFkZENsaWVudCguLi4pO1xyXG4gICAgICogICAgICBpZihjbGllbnQpe1xyXG4gICAgICogICAgICAgICAgLy8g5omT5byA5a6i5oi356uv77yM5LiA6Iis5piv5ZCR5pyN5Yqh5Zmo5Y+R6YCB6L+e5o6l6K+35rGCXHJcbiAgICAgKiAgICAgICAgICBjbGllbnQub3BlbigpO1xyXG4gICAgICogICAgICB9XHJcbiAgICAgKiBgYGBcclxuICAgICAqIFxyXG5cdCAqIEBwYXJhbSBuYW1lIC0g5ZCN56ewXHJcblx0ICogQHBhcmFtIHR5cGUgLSDnsbvlnotcclxuXHQgKiBAcGFyYW0gY29uZmlnIC0g6YWN572uXHJcblx0ICovXHJcblx0cHVibGljIGFkZENsaWVudChuYW1lOnN0cmluZywgdHlwZTpudW1iZXIsIGNvbmZpZzp7W2tleTpzdHJpbmddOmFueX0gPSBqcy5jcmVhdGVNYXAoKSl7XHJcbiAgICAgICAgREVCVUcuTkVUV09SSyAmJiBjYy5sb2coVEFHLCBgYWRkQ2xpZW50ICR7bmFtZX0gJHt0eXBlfSAke0pTT04uc3RyaW5naWZ5KGNvbmZpZyl9YCk7XHJcbiAgICAgICAgaWYoTkVUQ0xJRU5UU1tuYW1lXSl7XHJcblx0XHRcdGNjLmVycm9yKFRBRywgYGNsaWVudCBbJHtuYW1lfV0gY29uZmxpY3QhYCk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0bGV0IG5ldFR5cGUgPSBOZXRMaW5lLmdldE5ldFR5cGUodHlwZSk7XHJcblx0XHRcdGlmKCFuZXRUeXBlKXtcclxuXHRcdFx0XHRjYy5lcnJvcihUQUcsIGBuZXQgdHlwZSBbJHt0eXBlfV0gbm90IGZvdW5kIWApO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRsZXQgbmV0bGluZSA9IG5ldyBuZXRUeXBlKG5hbWUsIE5ldExpbmVNb2RlLkNMSUVOVCwgdHlwZSk7XHJcblx0XHRcdFx0TkVUQ0xJRU5UU1tuYW1lXSA9IG5ldGxpbmU7XHJcblx0XHRcdFx0bmV0bGluZS5jb25maWcoY29uZmlnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBIZWFydFRpY2soKTtcclxuICAgICAgICAgICAgICAgIERFQlVHLk5FVFdPUksgJiYgY2MubG9nKFRBRywgYGFkZENsaWVudCAke25hbWV9IHN1Y2Nlc3NgKTtcclxuXHRcdFx0XHRyZXR1cm4gbmV0bGluZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHQvKipcclxuICAgICAqIEB6aFxyXG5cdCAqIOiOt+W+l+e9kee7nOWuouaIt+err1xyXG4gICAgICogXHJcblx0ICogQHBhcmFtIG5hbWUg5ZCN56ewXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm5zIOWuouaIt+err+WvueixoVxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXRDbGllbnQobmFtZTpzdHJpbmcpe1xyXG5cdFx0cmV0dXJuIE5FVENMSUVOVFNbbmFtZV07XHJcblx0fVxyXG5cclxuXHQvKipcclxuICAgICAqIEB6aFxyXG5cdCAqIOenu+mZpOe9kee7nOWuouaIt+err1xyXG4gICAgICogXHJcblx0ICogQHBhcmFtIG5hbWUg5ZCN56ewXHJcblx0ICovXHJcblx0cHVibGljIHJlbW92ZUNsaWVudChuYW1lOnN0cmluZyl7XHJcblx0XHRERUJVRy5ORVRXT1JLICYmIGNjLmxvZyhUQUcsIGByZW1vdmVDbGllbnQgJHtuYW1lfWApO1xyXG5cdFx0bGV0IG5ldGxpbmUgPSBORVRDTElFTlRTW25hbWVdO1xyXG5cdFx0aWYobmV0bGluZSl7XHJcblx0XHRcdG5ldGxpbmUuY2xvc2UoKTtcclxuXHRcdFx0ZGVsZXRlIE5FVENMSUVOVFNbbmFtZV07XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlSGVhcnRUaWNrKCk7XHJcbiAgICAgICAgICAgIERFQlVHLk5FVFdPUksgJiYgY2MubG9nKFRBRywgYHJlbW92ZUNsaWVudCAke25hbWV9IHN1Y2Nlc3NgKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOenu+mZpOaJgOacieWuouaIt+err1xyXG5cdCAqL1xyXG5cdHB1YmxpYyByZW1vdmVBbGxDbGllbnRzKCl7XHJcblx0XHRmb3IobGV0IG5hbWUgb2YgT2JqZWN0LmtleXMoTkVUQ0xJRU5UUykpe1xyXG5cdFx0XHR0aGlzLnJlbW92ZUNsaWVudChuYW1lKTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOe9kee7nOWuouaIt+err+euoeeQhuWunuS+i1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG5ldENsaWVudCA9IG5ldyBOZXRDbGllbnQoKTtcclxuXHJcbn1cclxuIiwiLypcclxuQ29weXJpZ2h0IDIwMjEgTHVKdW5cclxuXHJcblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgXHJcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgXHJcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgXHJcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgXHJcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgXHJcbnRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIFxyXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgXHJcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBcclxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgXHJcblRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIFxyXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBcclxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXHJcbiovXHJcblxyXG5uYW1lc3BhY2UgbGNjIHtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UganMge1xyXG5cclxuY29uc3QgVEFHID0gXCJsY2MvdXRpbHMvanMtYnVmZmVyLnRzXCI7XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOe8k+WGsuivu+WPluWvueixoVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJ1ZmZlclJlYWRlciB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOe8k+WGsuWvueixoVxyXG4gICAgICovXHJcblx0cHJvdGVjdGVkIF9idWZmZXI6QXJyYXlCdWZmZXIgPSBudWxsO1xyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOinhuWbvlxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBfdmlldzpEYXRhVmlldyA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOW9k+WJjee0ouW8lVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2luZGV4Om51bWJlciA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOe8k+WGsuWuuemHj1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgX2NhcGFjaXR5Om51bWJlciA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOaehOmAoOe8k+WGsuivu+WPluexu1xyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyIC0g57yT5Yay5a6e5L2TXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggLSDlvZPliY3ntKLlvJVcclxuICAgICAqIEBwYXJhbSBjYXBhY2l0eSAtIOW9k+WJjeWuuemHj1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihidWZmZXI6QXJyYXlCdWZmZXIsIGluZGV4Om51bWJlciA9IDAsIGNhcGFjaXR5PzpudW1iZXIpe1xyXG5cdFx0dGhpcy5fYnVmZmVyID0gYnVmZmVyO1xyXG5cdFx0dGhpcy5fdmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIpXHJcbiAgICAgICAgdGhpcy5faW5kZXggPSBpbmRleDtcclxuXHRcdHRoaXMuX2NhcGFjaXR5ID0gY2FwYWNpdHkgPT0gbnVsbCA/IGJ1ZmZlci5ieXRlTGVuZ3RoIDogY2FwYWNpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOi3s+i/h+mVv+W6puWtl+iKglxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gY291bnQgLSDlrZfoioLmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNraXAoY291bnQ6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLl9pbmRleCArPSBjb3VudDtcclxuICAgICAgICBpZih0aGlzLl9pbmRleCA+IHRoaXMuX2NhcGFjaXR5KXtcclxuICAgICAgICAgICAgdGhpcy5faW5kZXggPSB0aGlzLl9jYXBhY2l0eTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOe8k+WGsuWMuuWvuem9kFxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gc2l6ZSAtIOWvuem9kOWkp+Wwj1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWxpZ25tZW50KHNpemU6bnVtYmVyKXtcclxuICAgICAgICBsZXQgcmVtID0gdGhpcy5faW5kZXggJSBzaXplO1xyXG4gICAgICAgIGlmKHJlbSAhPSAwKXtcclxuICAgICAgICAgICAgdGhpcy5za2lwKHNpemUgLSByZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEB6aFxyXG4gICAgICog6K+75Y+WIEJ5dGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRCeXRlKCl7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5fdmlldy5nZXRJbnQ4KHRoaXMuX2luZGV4KTtcclxuICAgICAgICB0aGlzLnNraXAoMSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHpoXHJcbiAgICAgKiDor7vlj5YgdW5zaWduZWQgQnl0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZFVCeXRlKCl7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5fdmlldy5nZXRVaW50OCh0aGlzLl9pbmRleCk7XHJcbiAgICAgICAgdGhpcy5za2lwKDEpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEB6aFxyXG4gICAgICog5p+l55yLIEJ5dGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBlZWtCeXRlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXcuZ2V0SW50OCh0aGlzLl9pbmRleCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogQHpoXHJcbiAgICAgKiDmn6XnnIsgdW5zaWduZWQgQnl0ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGVla1VCeXRlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXcuZ2V0VWludDgodGhpcy5faW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHpoXHJcbiAgICAgKiDor7vlj5YgU2hvcnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRTaG9ydCgpe1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuX3ZpZXcuZ2V0SW50MTYodGhpcy5faW5kZXgsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuc2tpcCgyKTtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOivu+WPliB1bnNpZ25lZCBTaG9ydFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZFVTaG9ydCgpe1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuX3ZpZXcuZ2V0VWludDE2KHRoaXMuX2luZGV4LCB0cnVlKTtcclxuICAgICAgICB0aGlzLnNraXAoMik7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHpoXHJcbiAgICAgKiDmn6XnnIsgU2hvcnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBlZWtTaG9ydCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92aWV3LmdldEludDE2KHRoaXMuX2luZGV4LCB0cnVlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOafpeeciyB1bnNpZ25lZCBTaG9ydFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGVla1VTaG9ydCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92aWV3LmdldFVpbnQxNih0aGlzLl9pbmRleCwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOivu+WPliBMb25nXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkTG9uZygpe1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuX3ZpZXcuZ2V0SW50MzIodGhpcy5faW5kZXgsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuc2tpcCg0KTtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOivu+WPliB1bnNpZ25lZCBMb25nXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkVUxvbmcoKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLl92aWV3LmdldFVpbnQzMih0aGlzLl9pbmRleCwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5za2lwKDQpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEB6aFxyXG4gICAgICog5p+l55yLIExvbmdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBlZWtMb25nKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXcuZ2V0SW50MzIodGhpcy5faW5kZXgsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIEB6aFxyXG4gICAgICog5p+l55yLIHVuc2lnbmVkIExvbmdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBlZWtVTG9uZygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92aWV3LmdldFVpbnQzMih0aGlzLl9pbmRleCwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOivu+WPliBGbG9hdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZEZsb2F0KCl7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5fdmlldy5nZXRGbG9hdDMyKHRoaXMuX2luZGV4LCB0cnVlKTtcclxuICAgICAgICB0aGlzLnNraXAoNCk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHpoXHJcbiAgICAgKiDmn6XnnIsgRmxvYXRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBlZWtGbG9hdCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92aWV3LmdldEZsb2F0MzIodGhpcy5faW5kZXgsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIEB6aFxyXG4gICAgICog6K+75Y+WIERvdWJsZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZERvdWJsZSgpe1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuX3ZpZXcuZ2V0RmxvYXQ2NCh0aGlzLl9pbmRleCwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5za2lwKDgpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEB6aFxyXG4gICAgICog5p+l55yLIERvdWJsZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGVla0RvdWJsZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92aWV3LmdldEZsb2F0NjQodGhpcy5faW5kZXgsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIEB6aFxyXG4gICAgICog6K+75Y+W5a2X56ym5Liy77yM5L2/55SodXRmMTZsZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZFN0cmluZygpe1xyXG5cdFx0bGV0IGxlbiA9IHRoaXMucmVhZFVTaG9ydCgpO1xyXG4gICAgICAgIGxldCBzdHIgPSBqcy5hYjJzdHIodGhpcy5yZWFkRGF0YShsZW4pKTtcclxuICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHpoXHJcbiAgICAgKiDnvJPlhrLljLrntKLlvJVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEluZGV4KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHpoXHJcbiAgICAgKiDnvJPlhrLljLrliankvZnlpKflsI9cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFJlbWFpblNpemUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2FwYWNpdHkgLSB0aGlzLl9pbmRleDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEB6aFxyXG4gICAgICog56m66Zey57yT5Yay5aSn5bCPXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRFbXB0eVNpemUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYnVmZmVyLmJ5dGVMZW5ndGggLSB0aGlzLl9jYXBhY2l0eTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEB6aFxyXG4gICAgICog6K+75Y+W5pWw5o2uXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBjb3VudCAtIOWkp+Wwj1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZERhdGEoY291bnQ6bnVtYmVyKXtcclxuICAgICAgICBpZihjb3VudCA+IDApe1xyXG4gICAgICAgICAgICBsZXQgYnVmZmVyID0gdGhpcy5fYnVmZmVyLnNsaWNlKHRoaXMuX2luZGV4LCB0aGlzLl9pbmRleCArIGNvdW50KTtcclxuICAgICAgICAgICAgdGhpcy5za2lwKGNvdW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOafpeeci+aVsOaNrlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gY291bnQgLSDlpKflsI9cclxuICAgICAqL1xyXG4gICAgcHVibGljIHBlZWtEYXRhKGNvdW50Om51bWJlcil7XHJcbiAgICAgICAgaWYoY291bnQgPiAwKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2J1ZmZlci5zbGljZSh0aGlzLl9pbmRleCwgdGhpcy5faW5kZXggKyBjb3VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOe8k+WGsuWGmeWFpeWvueixoVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJ1ZmZlcldyaXRlciB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOe8k+WGsuaVsOe7hFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9idWZmZXJzOkFycmF5QnVmZmVyW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB6aFxyXG4gICAgICog57yT5Yay5aSn5bCPXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3NpemU6bnVtYmVyID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB6aFxyXG4gICAgICog6I635b6X57yT5Yay5aSn5bCPXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRTaXplKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOWhq+WFheaMh+WumuaVsOmHj+eahOWtl+esplxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gY291bnQgLSDlrZfoioLmlbBcclxuICAgICAqIEBwYXJhbSBjaGFyIC0g5pWw5YC8XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBmaWxsKGNvdW50Om51bWJlciwgY2hhcjpudW1iZXIpe1xyXG4gICAgICAgIGlmKGNvdW50ID4gMCl7XHJcblx0XHRcdGxldCBidWZmID0gbmV3IEFycmF5QnVmZmVyKGNvdW50KTtcclxuXHRcdFx0KG5ldyBJbnQ4QXJyYXkoYnVmZikpLmZpbGwoY2hhciwgMCwgLTEpO1xyXG4gICAgICAgICAgICB0aGlzLl9idWZmZXJzLnB1c2goYnVmZik7XHJcbiAgICAgICAgICAgIHRoaXMuX3NpemUgKz0gY291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHpoXHJcbiAgICAgKiDnvJPlhrLljLrlr7npvZBcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHNpemUgLSDlr7npvZDlrZfoioLmlbBcclxuICAgICAqIEBwYXJhbSBjaGFyIC0g5aGr5YWF5pWw5YC8XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhbGlnbm1lbnQoc2l6ZSwgY2hhcil7XHJcbiAgICAgICAgbGV0IHJlbSA9IHRoaXMuX3NpemUgJSBzaXplO1xyXG4gICAgICAgIGlmKHJlbSAhPSAwKXtcclxuICAgICAgICAgICAgdGhpcy5maWxsKHJlbSwgY2hhcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHpoXHJcbiAgICAgKiDlhpnlhaUgQnl0ZVxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gYnl0ZSAtIOaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgd3JpdGVCeXRlKGJ5dGU6bnVtYmVyKXtcclxuXHRcdGxldCBidWZmID0gbmV3IEFycmF5QnVmZmVyKDEpO1xyXG5cdFx0KG5ldyBEYXRhVmlldyhidWZmKSkuc2V0SW50OCgwLCBieXRlKTtcclxuICAgICAgICB0aGlzLl9idWZmZXJzLnB1c2goYnVmZik7XHJcbiAgICAgICAgdGhpcy5fc2l6ZSArPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHpoXHJcbiAgICAgKiDlhpnlhaUgdW5zaWduZWQgQnl0ZVxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gYnl0ZSAtIOaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgd3JpdGVVQnl0ZShieXRlOm51bWJlcil7XHJcblx0XHRsZXQgYnVmZiA9IG5ldyBBcnJheUJ1ZmZlcigxKTtcclxuXHRcdChuZXcgRGF0YVZpZXcoYnVmZikpLnNldFVpbnQ4KDAsIGJ5dGUpO1xyXG4gICAgICAgIHRoaXMuX2J1ZmZlcnMucHVzaChidWZmKTtcclxuICAgICAgICB0aGlzLl9zaXplICs9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOWGmeWFpSBTaG9ydFxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gU2hvcnQgLSDmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHdyaXRlU2hvcnQoc2hvcnQ6bnVtYmVyKXtcclxuXHRcdGxldCBidWZmID0gbmV3IEFycmF5QnVmZmVyKDIpO1xyXG5cdFx0KG5ldyBEYXRhVmlldyhidWZmKSkuc2V0SW50MTYoMCwgc2hvcnQsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuX2J1ZmZlcnMucHVzaChidWZmKTtcclxuICAgICAgICB0aGlzLl9zaXplICs9IDI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOWGmeWFpSB1bnNpZ25lZCBTaG9ydFxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gU2hvcnQgLSDmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHdyaXRlVVNob3J0KHNob3J0Om51bWJlcil7XHJcbiAgICAgICAgbGV0IGJ1ZmYgPSBuZXcgQXJyYXlCdWZmZXIoMik7XHJcblx0XHQobmV3IERhdGFWaWV3KGJ1ZmYpKS5zZXRVaW50MTYoMCwgc2hvcnQsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuX2J1ZmZlcnMucHVzaChidWZmKTtcclxuICAgICAgICB0aGlzLl9zaXplICs9IDI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOWGmeWFpSBMb25nXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBMb25nIC0g5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB3cml0ZUxvbmcobG9uZzpudW1iZXIpe1xyXG4gICAgICAgIGxldCBidWZmID0gbmV3IEFycmF5QnVmZmVyKDQpO1xyXG5cdFx0KG5ldyBEYXRhVmlldyhidWZmKSkuc2V0SW50MzIoMCwgbG9uZywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5fYnVmZmVycy5wdXNoKGJ1ZmYpO1xyXG4gICAgICAgIHRoaXMuX3NpemUgKz0gNDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEB6aFxyXG4gICAgICog5YaZ5YWlIHVuc2lnbmVkIExvbmdcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIExvbmcgLSDmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHdyaXRlVUxvbmcobG9uZzpudW1iZXIpe1xyXG4gICAgICAgIGxldCBidWZmID0gbmV3IEFycmF5QnVmZmVyKDQpO1xyXG5cdFx0KG5ldyBEYXRhVmlldyhidWZmKSkuc2V0VWludDMyKDAsIGxvbmcsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuX2J1ZmZlcnMucHVzaChidWZmKTtcclxuICAgICAgICB0aGlzLl9zaXplICs9IDQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOWGmeWFpSB1bnNpZ25lZCBGbG9hdFxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gRmxvYXQgLSDmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHdyaXRlRmxvYXQoZmxvYXQ6bnVtYmVyKXtcclxuXHRcdGxldCBidWZmID0gbmV3IEFycmF5QnVmZmVyKDQpO1xyXG5cdFx0KG5ldyBEYXRhVmlldyhidWZmKSkuc2V0RmxvYXQzMigwLCBmbG9hdCwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5fYnVmZmVycy5wdXNoKGJ1ZmYpO1xyXG4gICAgICAgIHRoaXMuX3NpemUgKz0gNDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEB6aFxyXG4gICAgICog5YaZ5YWlIHVuc2lnbmVkIERvdWJsZVxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gRG91YmxlIC0g5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB3cml0ZURvdWJsZShkb3VibGU6bnVtYmVyKXtcclxuXHRcdGxldCBidWZmID0gbmV3IEFycmF5QnVmZmVyKDgpO1xyXG5cdFx0KG5ldyBEYXRhVmlldyhidWZmKSkuc2V0RmxvYXQ2NCgwLCBkb3VibGUsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuX2J1ZmZlcnMucHVzaChidWZmKTtcclxuICAgICAgICB0aGlzLl9zaXplICs9IDg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOWGmeWFpeaVsOaNrlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyIC0g57yT5YayXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB3cml0ZURhdGEoYnVmZmVyOkFycmF5QnVmZmVyKXtcclxuICAgICAgICB0aGlzLl9idWZmZXJzLnB1c2goYnVmZmVyKTtcclxuICAgICAgICB0aGlzLl9zaXplICs9IGJ1ZmZlci5ieXRlTGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHpoXHJcbiAgICAgKiDlhpnlhaVVVEYxNkxF5a2X56ym5LiyXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBzdHIgLSDlrZfnrKbkuLJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHdyaXRlU3RyaW5nKHN0cjpzdHJpbmcpe1xyXG5cdFx0bGV0IGJ1ZmYgPSBqcy5zdHIyYWIoc3RyKTtcclxuICAgICAgICB0aGlzLndyaXRlVVNob3J0KGJ1ZmYuYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy53cml0ZURhdGEoYnVmZik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOa4heepuue8k+WGslxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xlYXIoKXtcclxuICAgICAgICB0aGlzLl9idWZmZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOiOt+W+l+aVsOaNrlxyXG4gICAgICogXHJcbiAgICAgKiBAcmV0dXJucyDmnIDnu4jnmoRCdWZmZXLmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldERhdGEoKXtcclxuXHRcdHJldHVybiBqcy5tZXJnZUFCcyguLi50aGlzLl9idWZmZXJzKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDmtYHnvJPlhrLor7vlj5bnsbs8YnIvPlxyXG4gKiDlnKhbW0J1ZmZlclJlYWRlcl1d5Z+656GA5LiK5re75Yqg5LqG6L+95Yqg57yT5Yay5Yqf6IO9XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3RyZWFtUmVhZGVyIGV4dGVuZHMgQnVmZmVyUmVhZGVyIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB6aFxyXG4gICAgICog5p6E6YCg5Ye95pWwXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBiYXNlc2l6ZSDln7rnoYDlpKflsI9cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoYmFzZXNpemU6bnVtYmVyKXtcclxuICAgICAgICBzdXBlcihuZXcgQXJyYXlCdWZmZXIoYmFzZXNpemUpLCAwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEB6aFxyXG4gICAgICog5riF56m657yT5Yay5Yy6XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbGVhcigpe1xyXG4gICAgICAgIHRoaXMuX2NhcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLl9pbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOi/veWKoOe8k+WGslxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyIC0g57yT5Yay5a+56LGhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhcHBlbmQoYnVmZmVyOkFycmF5QnVmZmVyKXtcclxuICAgICAgICBpZih0aGlzLmdldEVtcHR5U2l6ZSgpID4gYnVmZmVyLmJ5dGVMZW5ndGgpe1xyXG5cdFx0XHRqcy5jb3B5QUIoYnVmZmVyLCB0aGlzLl9idWZmZXIsIHRoaXMuX2NhcGFjaXR5KTtcclxuICAgICAgICAgICAgdGhpcy5fY2FwYWNpdHkgKz0gYnVmZmVyLmJ5dGVMZW5ndGg7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBuZWVkc2l6ZSA9IHRoaXMuZ2V0UmVtYWluU2l6ZSgpICsgYnVmZmVyLmJ5dGVMZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCBuZXdjYXBhY2l0eSA9IChuZWVkc2l6ZSA+IHRoaXMuX2NhcGFjaXR5ID8gbmVlZHNpemUgOiB0aGlzLl9jYXBhY2l0eSkgKiAyO1xyXG5cdFx0XHRsZXQgbmV3YnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKG5ld2NhcGFjaXR5KTtcclxuXHRcdFx0anMuY29weUFCKHRoaXMuX2J1ZmZlci5zbGljZSh0aGlzLl9pbmRleCwgdGhpcy5fY2FwYWNpdHkpLCBuZXdidWZmZXIsIDApO1xyXG5cdFx0XHRqcy5jb3B5QUIoYnVmZmVyLCBuZXdidWZmZXIsIHRoaXMuZ2V0UmVtYWluU2l6ZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5fYnVmZmVyID0gbmV3YnVmZmVyO1xyXG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhcGFjaXR5ID0gbmVlZHNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG59XHJcblxyXG59ICAgIFxyXG4iLCIvKlxyXG5Db3B5cmlnaHQgMjAyMSBMdUp1blxyXG5cclxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBcclxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBcclxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyBcclxudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBcclxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCBcclxudG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gXHJcbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBcclxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIFxyXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBcclxuVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgXHJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIFxyXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuKi9cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi91dGlscy9qcy1idWZmZXIudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIGxjYyB7XHJcblxyXG5jb25zdCBUQUcgPSBcImxjYy9uZXR3b3JrL25ldC1kYXRhLnRzXCI7XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOaVsOaNruWMheijheWZqFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBEYXRhUGFja2VyPFQgPSBhbnk+IHtcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDmiZPljIXmlbDmja5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gd0J1ZmYgLSDnvJPlhrLlhpnlhaXlmahcclxuXHQgKiBAcGFyYW0gZGF0YSAtIOaVsOaNruWvueixoVxyXG5cdCAqL1xyXG5cdHBhY2sod0J1ZmY6anMuQnVmZmVyV3JpdGVyLCBkYXRhOlQpOnZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOino+WMheaVsOaNrlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSByQnVmZiAtIOe8k+WGsuivu+WPluWZqFxyXG5cdCAqL1xyXG5cdHVucGFjayhyQnVmZjpqcy5CdWZmZXJSZWFkZXIpOlQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5Y2P6K6u5o6l5Y+jXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFByb3RvYnVmSW50ZXJmYWNlIHtcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDliKTmlq3mmK/lkKblrZjlnKjljY/orq5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gY29tbWFuZCAtIOWRveS7pOWPt1xyXG5cdCAqL1xyXG5cdGhhc1Byb3RvY29sKGNvbW1hbmQ6bnVtYmVyKTpib29sZWFuO1xyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDmiZPljIXljY/orq5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gd0J1ZmYgLSDlhpnlhaXnvJPlhrJcclxuXHQgKiBAcGFyYW0gY29tbWFuZCAtIOWRveS7pOWPt1xyXG5cdCAqIEBwYXJhbSBkYXRhIC0g5pWw5o2uXHJcblx0ICovXHJcblx0cGFja1Byb3RvY29sPFQ+KHdCdWZmOmpzLkJ1ZmZlcldyaXRlciwgY29tbWFuZDpudW1iZXIsIGRhdGE6VCk6dm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6Kej5YyF5Y2P6K6uXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHJCdWZmIC0g6K+75Y+W57yT5YayXHJcblx0ICogQHBhcmFtIGNvbW1hbmQgLSDlkb3ku6Tlj7dcclxuXHQgKi9cclxuXHR1bnBhY2tQcm90b2NvbDxUPihyQnVmZjpqcy5CdWZmZXJSZWFkZXIsIGNvbW1hbmQ6bnVtYmVyKTpUO1xyXG59XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOWGhemDqOe9kee7nOaVsOaNrjxici8+XHJcbiAqIOS4jeimgeW8leeUqOS7luS7rO+8jOmZpOmdnuS9oOefpemBk+WcqOW5suS7gOS5iFxyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBuZXRkYXRhIHtcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog572R57uc5pWw5o2u57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgZW51bSBOZXREYXRhVHlwZSB7XHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5Y2P6K6uXHJcblx0ICovXHJcblx0UFJPVE9DT0xTID0gMCxcclxuXHRcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDlv4Pot7NcclxuXHQgKi9cclxuXHRIRVJUX1RJQ0ssXHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOWQjOatpeW/g+i3s+aXtumXtFxyXG5cdCAqL1xyXG5cdFNZTkNfSEVSVFRJQ0tfVElNRSxcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5ZCM5q2l6L+e5o6lSURcclxuXHQgKi9cclxuXHRTWU5DX0NPTk5FQ1RfSUQsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5ZCM5q2l5b+D6Lez5pe26Ze0XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN5bmNIZWFydFRpY2tUaW1lIHtcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDlv4Pot7Pml7bpl7RcclxuXHQgKi9cclxuXHRoZWFydFRpbWU6bnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOWQjOatpei/nuaOpUlEXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN5bmNDb25uZWN0SUQge1xyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOi/nuaOpUlEXHJcblx0ICovXHJcblx0Y29ubmVjdElEOnN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDnqbrnvZHnu5zmlbDmja7miZPljIXlmahcclxuICovXHJcbmNvbnN0IEVtcHR5UGFja2VyOkRhdGFQYWNrZXIgPSB7XHJcblx0cGFjayA6ICh3QnVmZjpqcy5CdWZmZXJXcml0ZXIsIGRhdGE6YW55KT0+e1xyXG5cdH0sXHJcblx0dW5wYWNrIDogKHJCdWZmOmpzLkJ1ZmZlclJlYWRlcik9PntcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog572R57uc5pWw5o2u5omT5YyF5Zmo5pig5bCE6KGoXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUGFja2VyTWFwOntba2V5Om51bWJlcl06RGF0YVBhY2tlcn0gPSB7XHJcblx0W05ldERhdGFUeXBlLlBST1RPQ09MU10gOiBFbXB0eVBhY2tlcixcclxuXHRbTmV0RGF0YVR5cGUuSEVSVF9USUNLXSA6IEVtcHR5UGFja2VyLFxyXG5cdFtOZXREYXRhVHlwZS5TWU5DX0hFUlRUSUNLX1RJTUVdIDoge1xyXG5cdFx0cGFjayA6ICh3QnVmZjpqcy5CdWZmZXJXcml0ZXIsIGRhdGE6U3luY0hlYXJ0VGlja1RpbWUpPT57XHJcblx0XHRcdHdCdWZmLndyaXRlVVNob3J0KGRhdGEuaGVhcnRUaW1lKVxyXG5cdFx0fSxcclxuXHRcdHVucGFjayA6IChyQnVmZjpqcy5CdWZmZXJSZWFkZXIpOlN5bmNIZWFydFRpY2tUaW1lPT57XHJcblx0XHRcdGxldCBoZWFydFRpbWUgPSByQnVmZi5yZWFkVVNob3J0KCk7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aGVhcnRUaW1lIDogaGVhcnRUaW1lXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdFtOZXREYXRhVHlwZS5TWU5DX0NPTk5FQ1RfSURdIDoge1xyXG5cdFx0cGFjayA6ICh3QnVmZjpqcy5CdWZmZXJXcml0ZXIsIGRhdGE6U3luY0Nvbm5lY3RJRCk9PntcclxuXHRcdFx0d0J1ZmYud3JpdGVTdHJpbmcoZGF0YS5jb25uZWN0SUQgfHwgJycpXHJcblx0XHR9LFxyXG5cdFx0dW5wYWNrIDogKHJCdWZmOmpzLkJ1ZmZlclJlYWRlcik6U3luY0Nvbm5lY3RJRD0+e1xyXG5cdFx0XHRsZXQgY29ubmVjdElEID0gckJ1ZmYucmVhZFN0cmluZygpO1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGNvbm5lY3RJRCA6IGNvbm5lY3RJRFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxufVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDljY/orq7mlbDmja48YnIvPlxyXG4gKiDljY/orq7mmK/mnIDln7rmnKznmoTpgJrkv6HmlbDmja7vvIzlroPnlLFgY21kYOagh+iusOaVsOaNrueahOexu+Wei++8jOWSjGBkYXRhYOWMheWQq+WFt+S9k+WGheWuuee7hOaIkFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBQcm90b2NvbERhdGEge1xyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOWRveS7pOWPt1xyXG5cdCAqL1xyXG5cdGNtZDpudW1iZXI7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOaVsOaNrlxyXG5cdCAqL1xyXG5cdGRhdGE6YW55O1xyXG59XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOe9kee7nOaVsOaNrlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBOZXREYXRhIHtcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDov57mjqVJRDxici8+XHJcblx0ICogaHR0cOmcgOimgVxyXG5cdCAqL1xyXG5cdGNvbm5lY3RJRD86c3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDnsbvlnotcclxuXHQgKi9cclxuXHR0eXBlOm5ldGRhdGEuTmV0RGF0YVR5cGU7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOaVsOaNrlxyXG5cdCAqL1xyXG5cdGRhdGE/OmFueTtcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5Y2P6K6u5pWw5o2u6KGoXHJcblx0ICovXHJcblx0cHJvdG9jb2xzPzpQcm90b2NvbERhdGFbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDljY/orq7mjqXlj6MsIOWGhemDqOS9v+eUqFxyXG4gKi9cclxuZXhwb3J0IGxldCBfX3BiSW50ZXJmYWNlOlByb3RvYnVmSW50ZXJmYWNlID0gbnVsbDtcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5omT5YyF572R57uc5pWw5o2uXHJcbiAqIFxyXG4gKiBAcGFyYW0gbmV0RGF0YSAtIOe9kee7nOaVsOaNruWvueixoVxyXG4gKiBAcGFyYW0gbmV0TGluZSAtIOWPr+mAie+8jOW9k+WJjee9kee7nOe6v1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhY2tOZXREYXRhKGRhdGE6TmV0RGF0YSwgbmV0TGluZT86TmV0TGluZSk6QXJyYXlCdWZmZXIge1xyXG5cdGxldCB3QnVmZiA9IG5ldyBqcy5CdWZmZXJXcml0ZXIoKTtcclxuXHR3QnVmZi53cml0ZVN0cmluZyhkYXRhLmNvbm5lY3RJRCB8fCAnJyk7XHJcblx0d0J1ZmYud3JpdGVVU2hvcnQoZGF0YS50eXBlKTtcclxuXHRsZXQgcGFja2VyID0gbmV0ZGF0YS5QYWNrZXJNYXBbZGF0YS50eXBlXTtcclxuXHRpZighcGFja2VyKXtcclxuXHRcdGxvZ01nci5lcnJvcihUQUcsIGBub3QgZmluZCBwYWNrZXIgZm9yIE5ldERhdGEgJHtkYXRhLnR5cGV9YCk7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblx0cGFja2VyLnBhY2sod0J1ZmYsIGRhdGEuZGF0YSB8fCB7fSk7XHJcblxyXG5cdC8vIOaJk+WMheWNj+iurlxyXG5cdGxldCB1c2VQcm90b2NvbCA9ICFuZXRMaW5lIHx8IG5ldExpbmUuaXNVc2VQcm90b0J1ZmYoKTtcclxuXHRsZXQgcHJvdG9TaXplID0gZGF0YS5wcm90b2NvbHMgPyBkYXRhLnByb3RvY29scy5sZW5ndGggOiAwO1xyXG5cdHdCdWZmLndyaXRlVVNob3J0KHByb3RvU2l6ZSk7XHJcblx0Zm9yKGxldCBpID0gMDsgaSA8IHByb3RvU2l6ZTsgaSsrKXtcclxuXHRcdGxldCBwcm90b2NvbCA9IGRhdGEucHJvdG9jb2xzW2ldO1xyXG5cdFx0aWYodXNlUHJvdG9jb2wgJiYgX19wYkludGVyZmFjZSAmJiBfX3BiSW50ZXJmYWNlLmhhc1Byb3RvY29sKHByb3RvY29sLmNtZCkpe1xyXG5cdFx0XHR3QnVmZi53cml0ZVVCeXRlKDEpO1xyXG5cdFx0XHR3QnVmZi53cml0ZVVTaG9ydChwcm90b2NvbC5jbWQpO1xyXG5cdFx0XHRfX3BiSW50ZXJmYWNlLnBhY2tQcm90b2NvbCh3QnVmZiwgcHJvdG9jb2wuY21kLCBwcm90b2NvbC5kYXRhKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR3QnVmZi53cml0ZVVCeXRlKDApO1xyXG5cdFx0XHR3QnVmZi53cml0ZVN0cmluZyhKU09OLnN0cmluZ2lmeShwcm90b2NvbCkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHdCdWZmLmdldERhdGEoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDop6PljIXnvZHnu5zmlbDmja5cclxuICogXHJcbiAqIEBwYXJhbSBuZXRCdWZmIC0g572R57uc5pWw5o2u57yT5YayXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5wYWNrTmV0RGF0YShuZXRCdWZmOkFycmF5QnVmZmVyKTpOZXREYXRhIHtcclxuXHRsZXQgckJ1ZmYgPSBuZXcganMuQnVmZmVyUmVhZGVyKG5ldEJ1ZmYpO1xyXG5cdGxldCBjb25uZWN0SUQgPSByQnVmZi5yZWFkU3RyaW5nKCkgfHwgdW5kZWZpbmVkO1xyXG5cdGxldCB0eXBlID0gckJ1ZmYucmVhZFVTaG9ydCgpO1xyXG5cdGxldCBwYWNrZXIgPSBuZXRkYXRhLlBhY2tlck1hcFt0eXBlXTtcclxuXHRpZighcGFja2VyKXtcclxuXHRcdGxvZ01nci5lcnJvcihUQUcsIGBub3QgZmluZCBwYWNrZXIgZm9yIE5ldERhdGEgJHt0eXBlfWApO1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cdGxldCBkYXRhID0gcGFja2VyLnVucGFjayhyQnVmZik7XHJcblxyXG5cdC8vIOino+WMheWNj+iurlxyXG5cdGxldCBwcm90b1NpemUgPSByQnVmZi5yZWFkVVNob3J0KCk7XHJcblx0bGV0IHByb3RvY29sczpQcm90b2NvbERhdGFbXSA9IFtdO1xyXG5cdGZvcihsZXQgaSA9IDA7IGkgPCBwcm90b1NpemU7IGkrKyl7XHJcblx0XHRpZihyQnVmZi5yZWFkVUJ5dGUoKSl7XHJcblx0XHRcdGxldCBjbWQgPSByQnVmZi5yZWFkVVNob3J0KCk7XHJcblx0XHRcdGxldCBkYXRhID0gX19wYkludGVyZmFjZSAmJiBfX3BiSW50ZXJmYWNlLnVucGFja1Byb3RvY29sKHJCdWZmLCBjbWQpO1xyXG5cdFx0XHRwcm90b2NvbHMucHVzaCh7XHJcblx0XHRcdFx0Y21kIDogY21kLFxyXG5cdFx0XHRcdGRhdGEgOiBkYXRhLFxyXG5cdFx0XHR9KTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRwcm90b2NvbHMucHVzaChKU09OLnBhcnNlKHJCdWZmLnJlYWRTdHJpbmcoKSkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGNvbm5lY3RJRCA6IGNvbm5lY3RJRCxcclxuXHRcdHR5cGUgOiB0eXBlLFxyXG5cdFx0ZGF0YSA6IGRhdGEsXHJcblx0XHRwcm90b2NvbHMgOiBwcm90b2NvbHMsXHJcblx0fTtcclxufVxyXG5cclxufVxyXG4iLCIvKlxyXG5Db3B5cmlnaHQgMjAyMSBMdUp1blxyXG5cclxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBcclxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBcclxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyBcclxudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBcclxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCBcclxudG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gXHJcbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBcclxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIFxyXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBcclxuVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgXHJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIFxyXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuKi9cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9iYXNlL3N0YXRlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2xvZy9sb2ctbWFuYWdlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi91dGlscy9qcy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi91dGlscy9qcy1idWZmZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9uZXQtZGF0YS50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgbGNjIHtcclxuXHJcbmNvbnN0IFRBRyA9IFwibGNjL25ldHdvcmsvcHJvdG9jb2wtbWFuYWdlci50c1wiO1xyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDmtojmga/ljIXoo4XlmahcclxuICogXHJcbiAqIEBwYXJhbSBNIC0g5raI5oGv57G75Z6LXHJcbiAqIEBwYXJhbSBEIC0g5pWw5o2u57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2VQYWNrZXI8TSA9IGFueSwgRCA9IGFueT4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOaJk+WMheaVsOaNrlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gZGF0YSAtIOaVsOaNruWvueixoVxyXG4gICAgICogQHJldHVybiDmtojmga/lr7nosaFcclxuICAgICAqL1xyXG4gICAgcGFjayhkYXRhOkQpOk07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOino+WMheaVsOaNrlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gbXNnIC0g5raI5oGv5a+56LGhXHJcblx0ICogQHJldHVybiDmlbDmja7lr7nosaFcclxuICAgICAqL1xyXG4gICAgdW5wYWNrKG1zZzpNKTpEO1xyXG59XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOa2iOaBr+WvueixoVxyXG4gKi9cclxuaW50ZXJmYWNlIE1lc3NhZ2Uge1xyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOaJk+WMheWZqFxyXG5cdCAqL1xyXG5cdHBhY2tlcjpNZXNzYWdlUGFja2VyO1xyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDmiYDlsZ7ljIVcclxuXHQgKi9cclxuXHRwYWNrPzpzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5Y2P6K6u6YWN572uXHJcbiAqL1xyXG5pbnRlcmZhY2UgUHJvdG9jb2x7XHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5Y2P6K6u5raI5oGv5ZCN56ewXHJcblx0ICovXHJcbiAgICBtc2dOYW1lOnN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5Y2P6K6u5raI5oGv57G75Z6LXHJcblx0ICovXHJcblx0bXNnVHlwZTphbnk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOaJgOWxnuWMhVxyXG5cdCAqL1xyXG5cdHBhY2s/OnN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiBQcm90b2J1ZueuoeeQhuWZqDxici8+XHJcbiAqIOS4u+imgeeuoeeQhuWNj+iuruaJk+WMheWZqFxyXG4gKi9cclxuY2xhc3MgUHJvdG9idWZNYW5hZ2VyIGltcGxlbWVudHMgUHJvdG9idWZJbnRlcmZhY2Uge1xyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDljY/orq7mmKDlsITooahcclxuXHQgKi9cclxuXHRwcml2YXRlIF9wcm90b2NvbE1hcDp7W2tleTpudW1iZXJdOlByb3RvY29sfSA9IGpzLmNyZWF0ZU1hcCgpO1xyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOa2iOaBr+aYoOWwhOihqFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgX21lc3NhZ2VNYXA6e1trZXk6c3RyaW5nXTpNZXNzYWdlfSA9IGpzLmNyZWF0ZU1hcCgpO1xyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOaehOmAoOeuoeeQhuWZqFxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHRzdGF0ZS5vbignaW5pdGlhbGl6ZScsICgpPT57XHJcblx0XHRcdGRvaW5nLnN0YXRlSW5pdGlhbGl6ZS5pbigoKT0+e1xyXG5cdFx0XHRcdC8vdGhpcy5fcHJvdG9jb2xNYXAgPSBqcy5jcmVhdGVNYXAoKTtcclxuXHRcdFx0XHQvL3RoaXMuX21lc3NhZ2VNYXAgPSBqcy5jcmVhdGVNYXAoKTtcclxuXHRcdFx0XHRwYWNrTWdyLm9uKCdyZWxlYXNlZCcsIHRoaXMub25QYWNrUmVsZWFzZWQsIHRoaXMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0c3RhdGUub24oJ3JlbGVhc2UnLCAoKT0+e1xyXG5cdFx0XHRkb2luZy5zdGF0ZVJlbGVhc2UuaW4oKCk9PntcclxuXHRcdFx0XHRwYWNrTWdyLnRhcmdldE9mZih0aGlzKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0ICogQGludGVybmFsXHJcblx0ICovXHJcblx0cHJpdmF0ZSBhc3luYyBvblBhY2tSZWxlYXNlZChwbmFtZTpzdHJpbmcpe1xyXG5cdFx0Zm9yKGxldCBrIG9mIE9iamVjdC5rZXlzKHRoaXMuX3Byb3RvY29sTWFwKSl7XHJcblx0XHRcdGxldCBwcm90b2NvbDpQcm90b2NvbCA9IHRoaXMuX3Byb3RvY29sTWFwW2tdO1xyXG5cdFx0XHRpZihwcm90b2NvbC5wYWNrID09IHBuYW1lKXtcclxuXHRcdFx0XHRkZWxldGUgdGhpcy5fcHJvdG9jb2xNYXBba107XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGZvcihsZXQgayBvZiBPYmplY3Qua2V5cyh0aGlzLl9tZXNzYWdlTWFwKSl7XHJcblx0XHRcdGxldCBtZXNzYWdlOk1lc3NhZ2UgPSB0aGlzLl9tZXNzYWdlTWFwW2tdO1xyXG5cdFx0XHRpZihtZXNzYWdlLnBhY2sgPT0gcG5hbWUpe1xyXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLl9tZXNzYWdlTWFwW2tdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOWIpOaWreaYr+WQpuacieWNj+iurlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBjb21tYW5kIC0g5ZG95Luk5Y+3XHJcblx0ICovXHJcblx0cHVibGljIGhhc1Byb3RvY29sKGNvbW1hbmQ6bnVtYmVyKXtcclxuXHRcdHJldHVybiA8UHJvdG9jb2w+dGhpcy5fcHJvdG9jb2xNYXBbY29tbWFuZF0gIT0gbnVsbDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOiOt+W+l+WNj+iurlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBjb21tYW5kIC0g5ZG95Luk5Y+3XHJcblx0ICovXHJcblx0cHVibGljIGdldFByb3RvY29sKGNvbW1hbmQ6bnVtYmVyKXtcclxuXHRcdHJldHVybiA8UHJvdG9jb2w+dGhpcy5fcHJvdG9jb2xNYXBbY29tbWFuZF07XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDmt7vliqDljY/orq5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gY29tbWFuZCAtIOWRveS7pOWPt1xyXG5cdCAqIEBwYXJhbSBtc2dOYW1lIC0g5raI5oGv5ZCN56ewXHJcblx0ICogQHBhcmFtIG1zZ1R5cGUgLSDmtojmga/nsbvlnotcclxuXHQgKiBAcGFyYW0gcGFjayAtIOaJgOWxnuWMhVxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhZGRQcm90b2NvbChjb21tYW5kOm51bWJlciwgbXNnTmFtZTpzdHJpbmcsIG1zZ1R5cGU6YW55LCBwYWNrPzpzdHJpbmcpe1xyXG5cdFx0aWYgKHRoaXMuX3Byb3RvY29sTWFwW2NvbW1hbmRdKXtcclxuXHRcdFx0bG9nTWdyLndhcm4oVEFHLCBgYWRkUHJvdG9jb2wgY29tbWFuZCAnJHtjb21tYW5kfScgY29uZmxpY3RgKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuX3Byb3RvY29sTWFwW2NvbW1hbmRdID0ge1xyXG5cdFx0XHRtc2dOYW1lIDogbXNnTmFtZSxcclxuXHRcdFx0bXNnVHlwZSA6IG1zZ1R5cGUsXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog56e76Zmk5Y2P6K6uXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGNvbW1hbmQgLSDlkb3ku6Tlj7dcclxuXHQgKi9cclxuXHRwdWJsaWMgcmVtb3ZlUHJvdG9jb2woY29tbWFuZDpudW1iZXIpe1xyXG5cdFx0ZGVsZXRlIHRoaXMuX3Byb3RvY29sTWFwW2NvbW1hbmRdO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5omT5YyF5Y2P6K6uXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHdCdWZmIC0g5YaZ5YWl57yT5YayXHJcblx0ICogQHBhcmFtIGNvbW1hbmQgLSDlkb3ku6Tlj7dcclxuXHQgKiBAcGFyYW0gZGF0YSAtIOaVsOaNrlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBwYWNrUHJvdG9jb2w8VD4od0J1ZmY6anMuQnVmZmVyV3JpdGVyLCBjb21tYW5kOm51bWJlciwgZGF0YTpUKXtcclxuXHRcdGxldCBwcm90b2NvbCA9IHRoaXMuZ2V0UHJvdG9jb2woY29tbWFuZCk7XHJcblx0XHRpZihwcm90b2NvbCl7XHJcblx0XHRcdHZhciBtc2cgPSB0aGlzLnBhY2tNZXNzYWdlKHByb3RvY29sLm1zZ05hbWUsIGRhdGEpO1xyXG5cdFx0XHR2YXIgYnVmZiA9IG1zZy5zZXJpYWxpemVCaW5hcnkoKTtcclxuXHRcdFx0d0J1ZmYud3JpdGVVU2hvcnQoYnVmZi5ieXRlTGVuZ3RoKTtcclxuXHRcdFx0d0J1ZmYud3JpdGVEYXRhKGJ1ZmYpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6Kej5YyF5Y2P6K6uXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHJCdWZmIC0g6K+75Y+W57yT5YayXHJcblx0ICogQHBhcmFtIGNvbW1hbmQgLSDlkb3ku6Tlj7dcclxuXHQgKi9cclxuXHRwdWJsaWMgdW5wYWNrUHJvdG9jb2w8VD4ockJ1ZmY6anMuQnVmZmVyUmVhZGVyLCBjb21tYW5kOm51bWJlcil7XHJcblx0XHRsZXQgcHJvdG9jb2wgPSB0aGlzLmdldFByb3RvY29sKGNvbW1hbmQpO1xyXG5cdFx0aWYocHJvdG9jb2wpe1xyXG5cdFx0XHR2YXIgYnl0ZUxlbmd0aCA9IHJCdWZmLnJlYWRVU2hvcnQoKTtcclxuXHRcdFx0dmFyIGJ1ZmYgPSByQnVmZi5yZWFkRGF0YShieXRlTGVuZ3RoKTtcclxuXHRcdFx0dmFyIG1zZyA9IHByb3RvY29sLm1zZ1R5cGUuZGVzZXJpYWxpemVCaW5hcnkoYnVmZik7XHJcblx0XHRcdHJldHVybiBwYk1nci51bnBhY2tNZXNzYWdlKHByb3RvY29sLm1zZ05hbWUsIG1zZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOiOt+W+l+a2iOaBr+aJk+WMheWZqFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBuYW1lIC0g5raI5oGv5ZCN56ewXHJcblx0ICovXHJcblx0cHVibGljIGdldE1lc3NhZ2VQYWNrZXIobmFtZTpzdHJpbmcpe1xyXG5cdFx0bGV0IG1zZyA9IHRoaXMuX21lc3NhZ2VNYXBbbmFtZV07XHJcblx0XHRyZXR1cm4gbXNnICYmIG1zZy5wYWNrZXI7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDmt7vliqDmtojmga/miZPljIXlmahcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gbmFtZSAtIOa2iOaBr+WQjeensFxyXG5cdCAqIEBwYXJhbSBwYWNrZXIgLSDmiZPljIXlmahcclxuXHQgKiBAcGFyYW0gcGFjayAtIOaJgOWxnuWMhVxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhZGRNZXNzYWdlUGFja2VyKG5hbWU6c3RyaW5nLCBwYWNrZXI6TWVzc2FnZVBhY2tlciwgcGFjaz86c3RyaW5nKXtcclxuXHRcdGlmICh0aGlzLl9tZXNzYWdlTWFwW25hbWVdKXtcclxuXHRcdFx0bG9nTWdyLndhcm4oVEFHLCBgYWRkTWVzc2FnZVBhY2tlciBjb21tYW5kICcke25hbWV9JyBjb25mbGljdGApO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5fbWVzc2FnZU1hcFtuYW1lXSA9IHtcclxuXHRcdFx0cGFja2VyIDogcGFja2VyLFxyXG5cdFx0XHRwYWNrIDogcGFjayxcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDnp7vpmaTmtojmga/miZPljIXlmahcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gbmFtZSAtIOa2iOaBr+WQjeensFxyXG5cdCAqL1xyXG5cdHB1YmxpYyByZW1vdmVNZXNzYWdlUGFja2VyKG5hbWU6c3RyaW5nKXtcclxuXHRcdGRlbGV0ZSB0aGlzLl9tZXNzYWdlTWFwW25hbWVdO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5omT5YyF5raI5oGvXHJcblx0ICogXHJcblx0ICogQHBhcmFtIG5hbWUgLSDmtojmga/lkI3np7BcclxuXHQgKiBAcGFyYW0gZGF0YSAtIOaVsOaNrlxyXG5cdCAqIEByZXR1cm4gLSDmtojmga/lr7nosaFcclxuXHQgKi9cclxuXHRwdWJsaWMgcGFja01lc3NhZ2UobmFtZTpzdHJpbmcsIGRhdGE6YW55KXtcclxuXHRcdGxldCBwYWNrZXIgPSB0aGlzLmdldE1lc3NhZ2VQYWNrZXIobmFtZSk7XHJcblx0XHRpZiAocGFja2VyKXtcclxuXHRcdFx0cmV0dXJuIHBhY2tlci5wYWNrKGRhdGEpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6Kej5YyF5raI5oGvXHJcblx0ICogXHJcblx0ICogQHBhcmFtIG5hbWUgLSDmtojmga/lkI3np7BcclxuXHQgKiBAcGFyYW0gbXNnIC0g5raI5oGv5a+56LGhXHJcblx0ICogQHJldHVybiAtIOaVsOaNrlxyXG5cdCAqL1xyXG5cdHB1YmxpYyB1bnBhY2tNZXNzYWdlKG5hbWU6c3RyaW5nLCBtc2c6YW55KXtcclxuXHRcdGxldCBwYWNrZXIgPSB0aGlzLmdldE1lc3NhZ2VQYWNrZXIobmFtZSk7XHJcblx0XHRpZihwYWNrZXIpe1xyXG5cdFx0XHRyZXR1cm4gcGFja2VyLnVucGFjayhtc2cpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDljY/orq7nrqHnkIblmajlrp7kvotcclxuICovXHJcbmV4cG9ydCBjb25zdCBwYk1nciA9IG5ldyBQcm90b2J1Zk1hbmFnZXIoKTtcclxuXHJcbi8vIOiuvue9ruWNj+iuruaOpeWPo1xyXG5fX3BiSW50ZXJmYWNlID0gcGJNZ3I7XHJcblxyXG59XHJcbiIsIi8qXG5Db3B5cmlnaHQgMjAyMSBMdUp1blxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IFxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCBcbnRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFxuVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxubmFtZXNwYWNlIGxjYyB7XG5cdFxuY29uc3QgVEFHID0gXCJsY2MvcGFjay9wYWNrLWxvYWRlci50c1wiO1xuXG4vKipcbiAqIEB6aFxuICog5YyF5Yqg6L295Zmo5Z+657G7XG4gKi9cbmV4cG9ydCBjbGFzcyBQYWNrTG9hZGVyIHtcblx0LyoqXG5cdCAqIEB6aFxuXHQgKiDljIXnmoTlkI3np7Bcblx0ICovXG5cdHByaXZhdGUgX25hbWU6c3RyaW5nID0gbnVsbDtcblxuXHQvKipcblx0ICogQHpoXG5cdCAqIOi1hOa6kOWMheWvueixoVxuXHQgKi9cblx0cHJpdmF0ZSBfYnVuZGxlOmNjLkFzc2V0TWFuYWdlci5CdW5kbGUgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAemhcblx0ICog5p6E6YCg5YyF5Yqg6L295ZmoXG5cdCAqIFxuXHQgKiBAcGFyYW0gbmFtZSAtIOWMheeahOWQjeensFxuXHQgKiBAcGFyYW0gYnVuZGxlIC0g6LWE5rqQ5YyF5a+56LGhXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihuYW1lOnN0cmluZywgYnVuZGxlOmNjLkFzc2V0TWFuYWdlci5CdW5kbGUpe1xuXHRcdHRoaXMuX25hbWUgPSBuYW1lO1xuXHRcdHRoaXMuX2J1bmRsZSA9IGJ1bmRsZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAemhcblx0ICog6I635b6X5YyF5ZCN56ewXG5cdCAqL1xuXHRwdWJsaWMgZ2V0TmFtZSgpe1xuXHRcdHJldHVybiB0aGlzLl9uYW1lO1xuXHR9XG5cblx0LyoqXG5cdCAqIEB6aFxuXHQgKiDojrflvpfljIXotYTmupBcblx0ICovXG5cdHB1YmxpYyBnZXRCdW5kbGUoKXtcblx0XHRyZXR1cm4gdGhpcy5fYnVuZGxlO1xuXHR9XG5cdFxuXHQvKipcblx0ICogQHpoXG5cdCAqIOWKoOi9veaTjeS9nFxuXHQgKi9cblx0cHVibGljIGFzeW5jIG9uTG9hZCgpe31cblx0XG5cdC8qKlxuXHQgKiBAemhcblx0ICog6ZSA5q+B5pON5L2cXG5cdCAqL1xuICAgIHB1YmxpYyBhc3luYyBvbkRlc3Ryb3koKXt9XG4gICAgXG4gICAgLyoqXG4gICAgICogQHpoXG4gICAgICog5Yqg6L29anNvbuaWh+S7tlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBqcFBhdGggLSBqc29u5paH5Lu25YyF6Lev5b6EXG4gICAgICovXG4gICAgcHVibGljIGxvYWRKc29uKGpwUGF0aDpzdHJpbmcpe1xuICAgICAgICByZXR1cm4gYXNzZXQubG9hZEpzb24oanBQYXRoLCB0aGlzLl9idW5kbGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEB6aFxuICAgICAqIOWKoOi9vemfs+mikVxuICAgICAqIFxuICAgICAqIEBwYXJhbSBhcFBhdGggLSDpn7PpopHmlofku7bljIXot6/lvoRcbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZEF1ZGlvKGFwUGF0aDpzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGFzc2V0LmxvYWRBdWRpbyhhcFBhdGgsIHRoaXMuX2J1bmRsZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHpoXG4gICAgICog5Yqg6L296aKE5Yi25Lu2XG4gICAgICogXG4gICAgICogQHBhcmFtIHBwUGF0aCDpooTliLbku7bljIXot6/lvoRcbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZFByZWZhYihwcFBhdGg6c3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBhc3NldC5sb2FkUHJlZmFiKHBwUGF0aCwgdGhpcy5fYnVuZGxlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAemhcbiAgICAgKiDliqDovb3nsr7ngbXluKdcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gc2ZwUGF0aCDnsr7ngbXluKfljIXot6/lvoRcbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZFNwcml0ZUZyYW1lKHNmcFBhdGg6c3RyaW5nKXtcbiAgICAgICAgcmV0dXJuIGFzc2V0LmxvYWRTcHJpdGVGcmFtZShzZnBQYXRoLCB0aGlzLl9idW5kbGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEB6aFxuICAgICAqIOWKoOi9vXR0ZuWtl+S9k1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB0dGZwUGF0aCAtIOWtl+S9k3R0ZuaWh+S7tuWMhei3r+W+hFxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkVFRGRm9udCh0dGZwUGF0aDpzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGFzc2V0LmxvYWRUVEZGb250KHR0ZnBQYXRoLCB0aGlzLl9idW5kbGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEB6aFxuICAgICAqIOiOt+W+l+i1hOa6kOeahHVybFxuICAgICAqIFxuICAgICAqIEBwYXJhbSBhcFBhdGgg6LWE5rqQ5paH5Lu25YyF6Lev5b6EXG4gICAgICovXG4gICAgcHVibGljIGdldEFzc2V0VXJsKGFwUGF0aDpzdHJpbmcpe1xuICAgICAgICByZXR1cm4gYXNzZXQuZ2V0QXNzZXRVcmwoYXBQYXRoLCB0aGlzLl9idW5kbGUpO1xuICAgIH1cbn1cblxufVxuIiwiLypcclxuQ29weXJpZ2h0IDIwMjEgTHVKdW5cclxuXHJcblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgXHJcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgXHJcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgXHJcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgXHJcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgXHJcbnRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIFxyXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgXHJcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBcclxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgXHJcblRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIFxyXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBcclxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXHJcbiovXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vYmFzZS9sY2MudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vYmFzZS9zdGF0ZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi91dGlscy9qcy50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgbGNjIHtcclxuXHJcbmNvbnN0IFRBRyA9IFwibGNjL3ByZWZhYi9ub2RlLXBvb2xzLnRzXCI7XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOiKgueCueaxoOihqFxyXG4gKi9cclxuY2xhc3MgTm9kZVBvb2xzIHtcclxuXHRcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDoioLngrnmsaDooahcclxuXHQgKi9cclxuXHRwcml2YXRlIF9wb29sczp7W2tleTpzdHJpbmddOmNjLk5vZGVQb29sfSA9IGpzLmNyZWF0ZU1hcCgpXHJcblx0XHJcblx0LyoqXHJcblx0ICog5p6E6YCg5pWw5o2u5bqT566h55CG5ZmoXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoKXtcclxuXHRcdHN0YXRlLm9uKCdpbml0aWFsaXplJywgKCk9PntcclxuXHRcdFx0ZG9pbmcuc3RhdGVJbml0aWFsaXplLmluKCgpPT57XHJcblx0XHRcdFx0dGhpcy5fcG9vbHMgPSBqcy5jcmVhdGVNYXAoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5LuO5a+56LGh5rGg5Lit6I635b6X6IqC54K5XHJcblx0ICogXHJcblx0ICogQHBhcmFtIHByZWZhYiAtIOmihOWItui1hOa6kFxyXG5cdCAqIEBwYXJhbSBuYW1lIC0g5Y+v6YCJ77yM6Ieq5a6a5LmJ5ZCN56ewXHJcblx0ICovXHJcblx0cHVibGljIGdldE5vZGUocHJlZmFiOiBjYy5QcmVmYWIsIG5hbWU/OnN0cmluZyl7XHJcblx0XHRuYW1lID0gbmFtZSB8fCBwcmVmYWIuZGF0YS5uYW1lO1xyXG5cdFx0bGV0IG5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cdFx0aWYgKHRoaXMuX3Bvb2xzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XHJcblx0XHRcdGxldCBwb29sID0gdGhpcy5fcG9vbHNbbmFtZV07XHJcblx0XHRcdGlmIChwb29sLnNpemUoKSA+IDApIHtcclxuXHRcdFx0XHRub2RlID0gcG9vbC5nZXQoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bGV0IHBvb2wgPSBuZXcgY2MuTm9kZVBvb2woKTtcclxuXHRcdFx0dGhpcy5fcG9vbHNbbmFtZV0gPSBwb29sO1xyXG5cclxuXHRcdFx0bm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHJldHVybiBub2RlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5bCG6IqC54K55pS+5Zue5a+56LGh5rGg5LitXHJcblx0ICogXHJcblx0ICogQHBhcmFtIG5vZGUgLSDoioLngrnlr7nosaFcclxuXHQgKiBAcGFyYW0gbmFtZSAtIOWPr+mAie+8jOiHquWumuS5ieWQjeensFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBwdXROb2RlKG5vZGU6Y2MuTm9kZSwgbmFtZT86c3RyaW5nKXtcclxuXHRcdG5hbWUgPSBuYW1lIHx8IG5vZGUubmFtZTtcclxuXHRcdGxldCBwb29sID0gbnVsbDtcclxuXHRcdGlmICh0aGlzLl9wb29scy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xyXG5cdFx0XHRwb29sID0gdGhpcy5fcG9vbHNbbmFtZV07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRwb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XHJcblx0XHRcdHRoaXMuX3Bvb2xzW25hbWVdID0gcG9vbDtcclxuXHRcdH1cclxuXHJcblx0XHRwb29sLnB1dChub2RlKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOagueaNruWQjeensOa4heepuuWvueixoeaxoFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBuYW1lIC0g5ZCN56ewXHJcblx0ICovXHJcblx0cHVibGljIGNsZWFyUG9vbChuYW1lOnN0cmluZyl7XHJcblx0XHRpZiAodGhpcy5fcG9vbHMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcclxuXHRcdFx0bGV0IHBvb2wgPSB0aGlzLl9wb29sc1tuYW1lXTtcclxuXHRcdFx0cG9vbC5jbGVhcigpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDmuIXnqbrmiYDmnInlr7nosaHmsaBcclxuXHQgKi9cclxuXHRwdWJsaWMgY2xlYXJBbGxQb29scygpe1xyXG5cdFx0Zm9yIChsZXQgbmFtZSBvZiBPYmplY3Qua2V5cyh0aGlzLl9wb29scykpe1xyXG5cdFx0XHR0aGlzLmNsZWFyUG9vbChuYW1lKTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOiKgueCueaxoOihqOWvueixoVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG5vZGVQb29scyA9IG5ldyBOb2RlUG9vbHMoKTtcclxuXHJcbn1cclxuIiwiLypcclxuQ29weXJpZ2h0IDIwMjEgTHVKdW5cclxuXHJcblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgXHJcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgXHJcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgXHJcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgXHJcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgXHJcbnRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIFxyXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgXHJcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBcclxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgXHJcblRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIFxyXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBcclxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXHJcbiovXHJcblxyXG5uYW1lc3BhY2UgbGNjIHtcclxuXHJcbmNvbnN0IFRBRyA9IFwibGNjL3ByZWZhYi9wcmVmYWItYmFzZS50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog6aKE5Yi25L2T5Z+657G7XHJcbiAqL1xyXG5AY2NjbGFzcyhcImxjYy5QcmVmYWJCYXNlXCIpXHJcbmV4cG9ydCBjbGFzcyBQcmVmYWJCYXNlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHRcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDpooTliLbkvZPlkI3np7BcclxuXHQgKi9cclxuXHRwcml2YXRlIF9wcmVmYWJOYW1lOnN0cmluZyA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOmihOWItuS9k+agueiKgueCuVxyXG5cdCAqL1xyXG5cdHByaXZhdGUgX3Jvb3ROb2RlOmNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDorr7nva7pooTliLbkvZPlkI3np7BcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gd25hbWUgLSDpooTliLbkvZPlkI3np7BcclxuXHQgKi9cclxuXHRwdWJsaWMgX3NldFByZWZhYk5hbWUocG5hbWU6c3RyaW5nKXtcclxuXHRcdHRoaXMuX3ByZWZhYk5hbWUgPSBwbmFtZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOiOt+W+l+mihOWItuS9k+WQjeensFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXRQcmVmYWJOYW1lKCk6c3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLl9wcmVmYWJOYW1lIHx8IHRoaXMubm9kZS5uYW1lO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6K6+572u6aKE5Yi25L2T5qC56IqC54K5XHJcblx0ICogXHJcblx0ICogQHBhcmFtIG5vZGUgLSDmoLnoioLngrlcclxuXHQgKi9cclxuXHQgcHVibGljIF9zZXRSb290Tm9kZShub2RlOmNjLk5vZGUpe1xyXG5cdFx0dGhpcy5fcm9vdE5vZGUgPSBub2RlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6I635b6X6aKE5Yi25L2T5qC56IqC54K5XHJcblx0ICovXHJcblx0cHVibGljIGdldFJvb3ROb2RlKCk6Y2MuTm9kZSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcm9vdE5vZGU7XHJcblx0fVxyXG59XHJcblxyXG59XHJcbiIsIi8qXHJcbkNvcHlyaWdodCAyMDIxIEx1SnVuXHJcblxyXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IFxyXG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIFxyXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIFxyXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIFxyXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIFxyXG50byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBcclxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIFxyXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgXHJcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFxyXG5USEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBcclxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgXHJcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG4qL1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3V0aWxzL2pzLnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBsY2Mge1xyXG5cclxuY29uc3QgVEFHID0gXCJsY2MvcHJlZmFiL3ByZWZhYi1iaW5kLnRzXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHksIG1lbnV9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwibGNjLlByZWZhYkJpbmRDb25maWdcIilcclxuY2xhc3MgUHJlZmFiQmluZENvbmZpZyB7XHJcblx0XHJcblx0QHByb3BlcnR5KHtcclxuXHRcdHR5cGU6IGNjLk5vZGUsXHJcblx0XHR0b29sdGlwIDogXCLnu5HlrprnmoToioLngrlcIlxyXG5cdH0pXHJcblx0bm9kZTpjYy5Ob2RlID0gbnVsbCE7XHJcblxyXG5cdEBwcm9wZXJ0eSh7XHJcblx0XHR0b29sdGlwOiBcIue7keWumueahOmihOWItuS9k1wiXHJcblx0fSlcclxuXHRwcmVmYWI6c3RyaW5nID0gXCJcIjtcclxuXHJcblx0QHByb3BlcnR5KHtcclxuXHRcdHRvb2x0aXAgOiBcIumrmOe6p+mAiemhuVwiLFxyXG5cdH0pXHJcblx0YWR2YW5jZTpib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdEBwcm9wZXJ0eSh7XHJcblx0XHR0b29sdGlwOiBcIumHjeWumuS5ieW8leeUqOeahOmUrlwiLFxyXG5cdFx0dmlzaWJsZSAoKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMuYWR2YW5jZTtcclxuXHRcdH1cclxuXHR9KVxyXG5cdGtleTpzdHJpbmcgPSBcIlwiO1xyXG5cclxuXHRAcHJvcGVydHkoe1xyXG5cdFx0dG9vbHRpcDogXCJVSeS8mOWFiOe6p1wiLFxyXG5cdFx0dmlzaWJsZSAoKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMuYWR2YW5jZTtcclxuXHRcdH1cclxuXHR9KVxyXG5cdHByaW9yaXR5Om51bWJlciA9IDA7XHJcblxyXG5cdEBwcm9wZXJ0eSh7XHJcblx0XHR0b29sdGlwIDogXCLmsaDkuK3liIbphY1cIixcclxuXHRcdHZpc2libGUgKCl7XHJcblx0XHRcdHJldHVybiB0aGlzLmFkdmFuY2U7XHJcblx0XHR9XHJcblx0fSlcclxuXHRwb29sOmJvb2xlYW4gPSBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDpooTliLbkvZPnu5HlrppcclxuICovXHJcbkBjY2NsYXNzKFwibGNjLlByZWZhYkJpbmRcIilcclxuQG1lbnUoXCJpMThuOmxjYy1mcmFtZXdvcmsubWVudS1leHRlbnNpb24vUHJlZmFiQmluZFwiKVxyXG5leHBvcnQgY2xhc3MgUHJlZmFiQmluZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblx0XHJcblx0QHByb3BlcnR5KHtcclxuXHRcdHR5cGU6IFtQcmVmYWJCaW5kQ29uZmlnXSxcclxuXHRcdHRvb2x0aXA6IFwi6aKE5Yi25L2T57uR5a6a6YWN572uXCJcclxuXHR9KVxyXG5cdHByZWZhYkJpbmRzOlByZWZhYkJpbmRDb25maWdbXSA9IFtdO1xyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDnu5HlrprphY3nva7ooahcclxuXHQgKi9cclxuXHRfYmluZENvbmZpZ3M6e1trZXk6c3RyaW5nXTpQcmVmYWJCaW5kQ29uZmlnfSA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOmihOWItuS9k+ihqFxyXG5cdCAqL1xyXG5cdF9wcmVmYWJzOntba2V5OnN0cmluZ106UHJlZmFiQmFzZX0gPSBudWxsO1xyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOaJqeWxleWKoOi9vVxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBhc3luYyBvbkxvYWQoKXtcclxuXHRcdHRoaXMuX2JpbmRDb25maWdzID0ganMuY3JlYXRlTWFwKCk7XHJcblx0XHR0aGlzLl9wcmVmYWJzID0ganMuY3JlYXRlTWFwKCk7XHJcblx0XHRmb3IgKGxldCB3ZCBvZiB0aGlzLnByZWZhYkJpbmRzKXtcclxuXHRcdFx0bGV0IG5hbWUgPSB3ZC5hZHZhbmNlID8gd2Qua2V5IDogd2QucHJlZmFiO1xyXG5cdFx0XHR0aGlzLl9iaW5kQ29uZmlnc1tuYW1lXSA9IHdkO1xyXG5cdFx0XHRsZXQgcHJlZmFiID0gYXdhaXQgcHJlZmFiTWdyLmNyZWF0ZVByZWZhYih3ZC5wcmVmYWIsIHdkLmFkdmFuY2UgPyB3ZC5wb29sIDogbnVsbCk7XHJcblx0XHRcdGlmKHByZWZhYil7XHJcblx0XHRcdFx0cHJlZmFiLm5vZGUucGFyZW50ID0gd2Qubm9kZTtcclxuXHRcdFx0XHR0aGlzLl9wcmVmYWJzW25hbWVdID0gcHJlZmFiO1xyXG5cdFx0XHRcdGlmKHdkLmFkdmFuY2Upe1xyXG5cdFx0XHRcdFx0cHJlZmFiLm5vZGUuekluZGV4ID0gd2QucHJpb3JpdHk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDmianlsZXplIDmr4FcclxuXHQgKi9cclxuXHRwcm90ZWN0ZWQgb25EZXN0cm95KCl7XHJcblx0XHRmb3IgKGxldCBuYW1lIGluIHRoaXMuX3ByZWZhYnMpe1xyXG5cdFx0XHRsZXQgcHJlZmFiID0gdGhpcy5fcHJlZmFic1tuYW1lXTtcclxuXHRcdFx0bGV0IGNvbmZpZyA9IHRoaXMuX2JpbmRDb25maWdzW25hbWVdO1xyXG5cdFx0XHRwcmVmYWJNZ3IucmVsZWFzZVByZWZhYihwcmVmYWIsIGNvbmZpZy5wb29sKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuX3ByZWZhYnMgPSBudWxsO1xyXG5cdFx0dGhpcy5fYmluZENvbmZpZ3MgPSBudWxsO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6I635b6X6aKE5Yi25L2TXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGtleSAtIOmUrlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXRQcmVmYWI8VCBleHRlbmRzIFByZWZhYkJhc2U+KGtleTpzdHJpbmcpe1xyXG5cdFx0cmV0dXJuIDxUPnRoaXMuX3ByZWZhYnNba2V5XTtcclxuXHR9XHJcbn1cclxuXHJcbn1cclxuIiwiLypcclxuQ29weXJpZ2h0IDIwMjEgTHVKdW5cclxuXHJcblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgXHJcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgXHJcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgXHJcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgXHJcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgXHJcbnRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIFxyXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgXHJcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBcclxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgXHJcblRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIFxyXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBcclxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXHJcbiovXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vYmFzZS9sY2MudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vYmFzZS9zdGF0ZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi91dGlscy9qcy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL25vZGUtcG9vbHMudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIGxjYyB7XHJcblxyXG5jb25zdCBUQUcgPSBcImxjYy9wcmVmYWIvcHJlZmFiLW1hbmFnZXIudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog57Si5byV6Lev5b6EXHJcbiAqL1xyXG5leHBvcnQgbmFtZXNwYWNlIElOREVYUEFUSCB7XHJcblx0XHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6aKE5Yi25L2TXHJcblx0ICovXHJcblx0ZXhwb3J0IGxldCBQUkVGQUIgPSBcInByZWZhYlwiO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDpooTliLbkvZPlrp7kvotcclxuICovXHJcbmNvbnN0IFBSRUZBQl9JTlNUQU5DRSA9IFwibGNjX1ByZWZhYlwiO1xyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDpooTliLbkvZPphY3nva5cclxuICovXHJcbmludGVyZmFjZSBQcmVmYWJDb25maWcge1xyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOmihOWItuS9k1xyXG5cdCAqL1xyXG5cdHByZWZhYjpjYy5QcmVmYWI7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOmFjee9rlxyXG5cdCAqL1xyXG5cdGNvbmZpZzp7XHJcblx0XHQvKipcclxuXHRcdCAqIEB6aFxyXG5cdFx0ICog6aKE5Yi25L2T5paH5Lu2XHJcblx0XHQgKi9cclxuXHRcdGZpbGU6c3RyaW5nO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHpoXHJcblx0XHQgKiDmsaDkuK3liIbphY1cclxuXHRcdCAqL1xyXG5cdFx0cG9vbD86Ym9vbGVhbjtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDpooTliqDovb1cclxuXHQgKi9cclxuXHRwcmVsb2FkPzpib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOmihOWItuS9k+euoeeQhuWZqFxyXG4gKi9cclxuY2xhc3MgUHJlZmFiTWFuYWdlciB7XHJcblx0XHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6aKE5Yi25L2T6YWN572u6KGoXHJcblx0ICovXHJcblx0cHJpdmF0ZSBfcHJlZmFiQ29uZmlnczp7W2tleTpzdHJpbmddOlByZWZhYkNvbmZpZ30gPSBqcy5jcmVhdGVNYXAoKTtcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6aKE5Yi25L2T5a6e5L6L77yM55So5LqO5Zyo6aKE5Yi25L2T5LiK5oyC6YWN572uXHJcblx0ICovXHJcblx0cHJpdmF0ZSBfcHJlZmFiSW5zdGFuY2VzOntba2V5OnN0cmluZ106UHJlZmFiQmFzZX0gPSBqcy5jcmVhdGVNYXAoKTtcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6aKE5Yi25L2T5a6e5L6L6IqC54K5XHJcblx0ICovXHJcblx0cHJpdmF0ZSBfaW5zdGFuY2VSb290OmNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDmnoTpgKDlh73mlbBcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3Rvcigpe1xyXG5cdFx0c3RhdGUub24oJ2luaXRpYWxpemUnLCAoKT0+e1xyXG5cdFx0XHRkb2luZy5zdGF0ZUluaXRpYWxpemUuaW4oKCk9PntcclxuXHRcdFx0XHR0aGlzLl9wcmVmYWJDb25maWdzID0ganMuY3JlYXRlTWFwKCk7XHJcblx0XHRcdFx0dGhpcy5fcHJlZmFiSW5zdGFuY2VzID0ganMuY3JlYXRlTWFwKCk7XHJcblx0XHRcdFx0dGhpcy5faW5zdGFuY2VSb290ID0gbnVsbDtcclxuXHRcdFx0XHRpbmRleE1nci5vbihcImluZGV4ZXNfcmVtb3ZlZFwiLCB0aGlzLm9uSW5kZXhlc1JlbW92ZWQsIHRoaXMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0c3RhdGUub24oJ3JlbGVhc2UnLCAoKT0+e1xyXG5cdFx0XHRkb2luZy5zdGF0ZVJlbGVhc2UuaW4oKCk9PntcclxuXHRcdFx0XHRpbmRleE1nci50YXJnZXRPZmYodGhpcyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOW9k+enu+mZpOe0ouW8lVxyXG5cdCAqIFxyXG5cdCAqIEBpbnRlcm5hbFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgb25JbmRleGVzUmVtb3ZlZCgpe1xyXG5cdFx0dGhpcy5yZWxlYXNlSW52YWxpZFByZWZhYkNvbmZpZ3MoKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOmHiuaUvuaXoOaViOmihOWItuS9k1xyXG5cdCAqL1xyXG5cdHB1YmxpYyByZWxlYXNlSW52YWxpZFByZWZhYkNvbmZpZ3MoKXtcclxuXHRcdGxldCBwcmVmYWJmaWxlcyA9IGluZGV4TWdyLmdldEluZGV4KElOREVYUEFUSC5QUkVGQUIpIHx8IGpzLmNyZWF0ZU1hcCgpO1xyXG5cdFx0Zm9yKGxldCBwbmFtZSBvZiBPYmplY3Qua2V5cyh0aGlzLl9wcmVmYWJDb25maWdzKSl7XHJcblx0XHRcdGlmKCFwcmVmYWJmaWxlc1twbmFtZV0pe1xyXG5cdFx0XHRcdHRoaXMucmVsZWFzZVByZWZhYkNvbmZpZyhwbmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOmHiuaUvumihOWItuS9k1xyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBwbmFtZSAtIOmihOWItuS9k+WQjeensFxyXG5cdCAqIEBwYXJhbSBwcmVsb2FkIC0g6aKE5Yqg6L295Lmf6YeK5pS+XHJcblx0ICovXHJcblx0cHVibGljIHJlbGVhc2VQcmVmYWJDb25maWcocG5hbWU6c3RyaW5nLCBwcmVsb2FkOmJvb2xlYW4gPSBmYWxzZSl7XHJcblx0XHRsZXQgcHJlZmFiY29uZiA9IHRoaXMuX3ByZWZhYkNvbmZpZ3NbcG5hbWVdO1xyXG5cdFx0aWYocHJlZmFiY29uZiAmJiAoIXByZWZhYmNvbmYucHJlbG9hZCB8fCBwcmVsb2FkKSl7XHJcblx0XHRcdHByZWZhYmNvbmYucHJlZmFiLmRlY1JlZigpO1xyXG5cdFx0XHRkZWxldGUgdGhpcy5fcHJlZmFiQ29uZmlnc1twbmFtZV07XHJcblx0XHRcdG5vZGVQb29scy5jbGVhclBvb2wocG5hbWUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6YeK5pS+6aKE5Yi25L2T5pWw57uEXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHBuYW1lcyAtIOmihOWItuS9k+aVsOe7hFxyXG5cdCAqIEBwYXJhbSBwcmVsb2FkIC0g6aKE5Yqg6L295Lmf6YeK5pS+XHJcblx0ICovXHJcblx0cHVibGljIHJlbGVhc2VQcmVmYWJDb25maWdzKHBuYW1lczpzdHJpbmdbXSwgcHJlbG9hZDpib29sZWFuID0gZmFsc2Upe1xyXG5cdFx0Zm9yKGxldCBwbmFtZSBvZiBwbmFtZXMpe1xyXG5cdFx0XHR0aGlzLnJlbGVhc2VQcmVmYWJDb25maWcocG5hbWUsIHByZWxvYWQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuICAgIC8qKlxyXG5cdCAqIEB6aFxyXG4gICAgICog6aKE5Yqg6L296aKE5Yi25L2TXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHBuYW1lIC0g6aKE5Yi25L2T5ZCN56ewXHJcbiAgICAgKi9cclxuXHRwdWJsaWMgYXN5bmMgcHJlbG9hZFByZWZhYkNvbmZpZyhwbmFtZTpzdHJpbmcpe1xyXG5cdFx0bGV0IHByZWZhYmNvbmYgPSBhd2FpdCB0aGlzLmdldFByZWZhYkNvbmZpZyhwbmFtZSk7XHJcblx0XHRpZihwcmVmYWJjb25mKXtcclxuXHRcdFx0cHJlZmFiY29uZi5wcmVsb2FkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcbiAgICBcclxuICAgIC8qKlxyXG5cdCAqIEB6aFxyXG4gICAgICog6aKE5Yqg6L296aKE5Yi25L2T5pWw57uEXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHBuYW1lcyAtIOmihOWItuS9k+aVsOe7hFxyXG5cdCAqIEBwYXJhbSBwcm9ncmVzcyAtIOi/m+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgcHJlbG9hZFByZWZhYkNvbmZpZ3MocG5hbWVzOnN0cmluZ1tdLCBwcm9ncmVzcyA9IChwOm51bWJlcik9Pnt9KXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwLCBsZW4gPSBwbmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspe1xyXG5cdFx0XHRhd2FpdCB0aGlzLnByZWxvYWRQcmVmYWJDb25maWcocG5hbWVzW2ldKTtcclxuICAgICAgICAgICAgcHJvZ3Jlc3MoKGkgKyAxKSAvIGxlbik7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6I635b6X6aKE5Yi25L2T6YWN572uXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHBuYW1lIOmihOWItuS9k+WQjeensFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgYXN5bmMgZ2V0UHJlZmFiQ29uZmlnKHBuYW1lOnN0cmluZyl7XHJcblx0XHRsZXQgcHJlZmFiQ29uZiA9IHRoaXMuX3ByZWZhYkNvbmZpZ3NbcG5hbWVdO1xyXG5cdFx0aWYoIXByZWZhYkNvbmYpe1xyXG5cdFx0XHRsZXQgY29uZmlnID0gaW5kZXhNZ3IuZ2V0SW5kZXgoSU5ERVhQQVRILlBSRUZBQiArIFwiL1wiICsgcG5hbWUpO1xyXG5cdFx0XHRpZihjb25maWcpe1xyXG5cdFx0XHRcdGxldCBwcmVmYWIgPSBhd2FpdCBwYWNrTWdyLmxvYWRQcmVmYWIoY29uZmlnLmZpbGUpO1xyXG5cdFx0XHRcdHByZWZhYkNvbmYgPSB7XHJcblx0XHRcdFx0XHRwcmVmYWIgOiBwcmVmYWIsXHJcblx0XHRcdFx0XHRjb25maWcgOiBjb25maWcsXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRwcmVmYWIuYWRkUmVmKCk7XHJcblx0XHRcdFx0dGhpcy5fcHJlZmFiQ29uZmlnc1twbmFtZV0gPSBwcmVmYWJDb25mO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcHJlZmFiQ29uZjtcclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5Yib5bu66aKE5Yi25L2TXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHBuYW1lIC0g6aKE5Yi25L2T5ZCN56ewXHJcblx0ICogQHBhcmFtIHBvb2wgLSDlnKjmsaDkuK3liJvlu7pcclxuXHQgKi9cclxuXHRwdWJsaWMgYXN5bmMgY3JlYXRlUHJlZmFiPFQgZXh0ZW5kcyBQcmVmYWJCYXNlPihwbmFtZTpzdHJpbmcsIHBvb2w/OmJvb2xlYW4pe1xyXG5cdFx0bGV0IHByZWZhYmNvbmYgPSBhd2FpdCB0aGlzLmdldFByZWZhYkNvbmZpZyhwbmFtZSk7XHJcblx0XHRpZihwcmVmYWJjb25mKXtcclxuXHRcdFx0aWYocG9vbCA9PSBudWxsKXtcclxuXHRcdFx0XHRwb29sID0gcHJlZmFiY29uZi5jb25maWcucG9vbDtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgbm9kZTpjYy5Ob2RlID0gbnVsbDtcclxuXHRcdFx0aWYocG9vbCl7XHJcblx0XHRcdFx0bm9kZSA9IG5vZGVQb29scy5nZXROb2RlKHByZWZhYmNvbmYucHJlZmFiLCBwbmFtZSk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWJjb25mLnByZWZhYik7XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IHByZWZhYiA9IG5vZGUuZ2V0Q29tcG9uZW50KFByZWZhYkJhc2UpIHx8IG5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihQcmVmYWJCYXNlKTtcclxuXHRcdFx0aWYoIXByZWZhYil7XHJcblx0XHRcdFx0cHJlZmFiID0gbm9kZS5hZGRDb21wb25lbnQoUHJlZmFiQmFzZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cHJlZmFiLl9zZXRSb290Tm9kZShub2RlKTtcclxuXHRcdFx0cHJlZmFiLl9zZXRQcmVmYWJOYW1lKHBuYW1lKTtcclxuXHRcdFx0cmV0dXJuIDxUPnByZWZhYjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOmHiuaUvumihOWItuS9k+WIsOaxoOS4rVxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBwcmVmYWIgLSDpooTliLbkvZPlr7nosaFcclxuXHQgKiBAcGFyYW0gcG9vbCAtIOWcqOaxoOS4reWIm+W7ulxyXG5cdCAqL1xyXG5cdHB1YmxpYyByZWxlYXNlUHJlZmFiKHByZWZhYjpQcmVmYWJCYXNlLCBwb29sPzpib29sZWFuKXtcclxuXHRcdGxldCBwbmFtZSA9IHByZWZhYi5nZXRQcmVmYWJOYW1lKCk7XHJcblx0XHRpZihwb29sID09IG51bGwpe1xyXG5cdFx0XHRsZXQgcHJlZmFiY29uZiA9IHRoaXMuX3ByZWZhYkNvbmZpZ3NbcG5hbWVdO1xyXG5cdFx0XHRpZihwcmVmYWJjb25mKXtcclxuXHRcdFx0XHRwb29sID0gcHJlZmFiY29uZi5jb25maWcucG9vbDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYocG9vbCl7XHJcblx0XHRcdG5vZGVQb29scy5wdXROb2RlKHByZWZhYi5nZXRSb290Tm9kZSgpLCBwbmFtZSk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0cHJlZmFiLmdldFJvb3ROb2RlKCkuZGVzdHJveSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6I635b6X6aKE5Yi25L2T5a6e5L6L77yM5LiA6Iis55So5LqO6I635b6X5Zyo6aKE5Yi25L2T5LiK5pS+55qE6YWN572uXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHBuYW1lIC0g6aKE5Yi25L2T5ZCN56ewXHJcblx0ICovXHJcblx0cHVibGljIGFzeW5jIGdldFByZWZhYkluc3RhbmNlPFQgZXh0ZW5kcyBQcmVmYWJCYXNlPihwbmFtZTpzdHJpbmcpe1xyXG5cdFx0bGV0IHByZWZhYiA9IHRoaXMuX3ByZWZhYkluc3RhbmNlc1twbmFtZV07XHJcblx0XHRpZighcHJlZmFiKXtcclxuXHRcdFx0cHJlZmFiID0gYXdhaXQgdGhpcy5jcmVhdGVQcmVmYWIocG5hbWUpO1xyXG5cdFx0XHRpZighdGhpcy5faW5zdGFuY2VSb290KXtcclxuXHRcdFx0XHR0aGlzLl9pbnN0YW5jZVJvb3QgPSBuZXcgY2MuTm9kZShQUkVGQUJfSU5TVEFOQ0UpO1xyXG5cdFx0XHRcdGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuYWRkQ2hpbGQodGhpcy5faW5zdGFuY2VSb290KTtcclxuXHRcdFx0XHRjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLl9pbnN0YW5jZVJvb3QpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHByZWZhYi5nZXRSb290Tm9kZSgpLnBhcmVudCA9IHRoaXMuX2luc3RhbmNlUm9vdDtcclxuXHRcdFx0dGhpcy5fcHJlZmFiSW5zdGFuY2VzW3BuYW1lXSA9IHByZWZhYjtcclxuXHRcdH1cclxuXHRcdHJldHVybiA8VD5wcmVmYWI7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDph4rmlL7pooTliLbkvZPlrp7kvovvvIzkuIDoiKznlKjkuo7ph4rmlL7lnKjpooTliLbkvZPkuIrmlL7nmoTphY3nva5cclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gcG5hbWUgLSDpooTliLbkvZPlkI3np7BcclxuXHQgKi9cclxuXHRwdWJsaWMgcmVsZWFzZVByZWZhYkluc3RhbmNlKHBuYW1lOnN0cmluZyl7XHJcblx0XHRsZXQgcHJlZmFiID0gdGhpcy5fcHJlZmFiSW5zdGFuY2VzW3BuYW1lXTtcclxuXHRcdGlmKHByZWZhYil7XHJcblx0XHRcdHRoaXMucmVsZWFzZVByZWZhYihwcmVmYWIpO1xyXG5cdFx0XHRkZWxldGUgdGhpcy5fcHJlZmFiSW5zdGFuY2VzW3BuYW1lXTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOmihOWItuS9k+euoeeQhuWZqOWvueixoVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHByZWZhYk1nciA9IG5ldyBQcmVmYWJNYW5hZ2VyKCk7XHJcblxyXG59XHJcbiIsIi8qXG5Db3B5cmlnaHQgMjAyMSBMdUp1blxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IFxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCBcbnRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFxuVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxubmFtZXNwYWNlIGxjYyB7XG5cbmNvbnN0IFRBRyA9IFwibGNjL3NjZW5lL3NjZW5lLWJhc2UudHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuLyoqXG4gKiBAemhcbiAqIOWcuuaZr+W/q+eFp1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFNjZW5lU25hcHNob3Qge1xuXHQvKipcblx0ICogQHpoXG5cdCAqIOWcuuaZr+WQjVxuXHQgKi9cblx0c2NlbmVOYW1lOnN0cmluZyxcblxuXHQvKipcblx0ICogQHpoXG5cdCAqIOWPguaVsOWIl+ihqFxuXHQgKi9cblx0c2NlbmVBcmdzOmFueVtdLFxufVxuXG4vKipcbiAqIEB6aFxuICog5Zy65pmv5Z+657G7XG4gKi9cbkBjY2NsYXNzKFwibGNjLlNjZW5lQmFzZVwiKVxuZXhwb3J0IGNsYXNzIFNjZW5lQmFzZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cdC8qKlxuXHQgKiBAemhcblx0ICog5o2V5o2J5oyJ6ZSuXG5cdCAqL1xuXHRAcHJvcGVydHkoe1xuXHRcdHRvb2x0aXAgOiBcIuWQr+WKqOaMiemUruaNleaNiVwiXG5cdH0pXG5cdGNhdGNoS2V5czpib29sZWFuID0gZmFsc2U7XG5cblx0LyoqXG5cdCAqIEB6aFxuXHQgKiDlnLrmma/lkI3np7Bcblx0ICovXG5cdHByaXZhdGUgX3NjZW5lTmFtZTpzdHJpbmcgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAemhcblx0ICog5a6J6KOF5Zy65pmvXG5cdCAqL1xuXHRwcm90ZWN0ZWQgb25Mb2FkKCl7XG5cdFx0aWYodGhpcy5jYXRjaEtleXMpe1xuXHRcdFx0Y2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5PbkNhdGNoS2V5RXZlbnQsIHRoaXMpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAemhcblx0ICog5Zy65pmv6ZSA5q+BXG5cdCAqL1xuXHRwcm90ZWN0ZWQgb25EZXN0cm95KCl7XG5cdFx0aWYodGhpcy5jYXRjaEtleXMpe1xuXHRcdFx0Y2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMuT25DYXRjaEtleUV2ZW50LCB0aGlzKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQHpoXG5cdCAqIOW9k+WcuuaZr+WcuuaZr+WKoOi9vTxici8+XG5cdCAqIOWtkOexu+mcgOimgeWPr+S7pemHjeWGmei/meS4quWHveaVsFxuXHQgKiBcblx0ICogQHBhcmFtIHNjZW5lQXJncyAtIOWPguaVsFxuXHQgKi9cblx0cHVibGljIG9uU2NlbmVMb2FkKC4uLnNjZW5lQXJnczphbnlbXSl7fVxuXHRcblx0LyoqXG5cdCAqIEB6aFxuXHQgKiDorr7nva7lnLrmma/lkI3np7Bcblx0ICogXG5cdCAqIEBwYXJhbSBzY2VuZW5hbWUgLSDorr7nva7lnLrmma/lkI1cblx0ICovXG5cdHB1YmxpYyBfc2V0U2NlbmVOYW1lKHNjZW5lbmFtZTpzdHJpbmcpe1xuXHRcdHRoaXMuX3NjZW5lTmFtZSA9IHNjZW5lbmFtZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAemhcblx0ICog6I635b6X5Zy65pmv5ZCN56ewXG5cdCAqL1xuXHRwdWJsaWMgZ2V0U2NlbmVOYW1lKCk6c3RyaW5nIHtcblx0XHRpZighdGhpcy5fc2NlbmVOYW1lKXtcblx0XHRcdHRoaXMuX3NjZW5lTmFtZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX3NjZW5lTmFtZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAemhcblx0ICog5b2T5o2V5o2J5Yiw6ZSu55uY5LqL5Lu2XG5cdCAqIFxuXHQgKiBAcGFyYW0gZXZlbnQgLSDmjInplK7lgLxcblx0ICovXG5cdHByaXZhdGUgT25DYXRjaEtleUV2ZW50KGV2ZW50OmFueSl7XG5cdFx0aWYoIXVpTWdyLm9uS2V5UHJlc3NlZChldmVudC5rZXlDb2RlKSl7XG5cdFx0XHR0aGlzLm9uS2V5UHJlc3NlZChldmVudC5rZXlDb2RlKTtcblx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBAemhcblx0ICog5Yi25L2c5Zy65pmv5b+r54WnPGJyLz5cblx0ICog5aaC5p6c5Zy65pmv5Y+v5Lul5L+d5a2Y5pWw5o2u77yM5Y+v5Lul6YeN5YaZ6L+Z5Liq5Ye95pWwXG5cdCAqL1xuXHRwdWJsaWMgbWFrZVNuYXBzaG90KCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNjZW5lTmFtZSA6IHRoaXMuZ2V0U2NlbmVOYW1lKCksXG5cdFx0XHRzY2VuZUFyZ3MgOiBbXVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAemhcblx0ICog5b2T5oyJ6ZSu5oyJ5LiLXG5cdCAqL1xuXHRwdWJsaWMgb25LZXlQcmVzc2VkKGtleUNvZGU6c3RyaW5nKXsgcmV0dXJuIGZhbHNlOyB9XG59XG5cbn1cbiIsIi8qXHJcbkNvcHlyaWdodCAyMDIxIEx1SnVuXHJcblxyXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IFxyXG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIFxyXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIFxyXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIFxyXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIFxyXG50byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBcclxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIFxyXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgXHJcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFxyXG5USEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBcclxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgXHJcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG4qL1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2Jhc2UvbGNjLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2Jhc2Uvc3RhdGUudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIGxjYyB7XHJcblxyXG5jb25zdCBUQUcgPSBcImxjYy9zY2VuZS9zY2VuZS1tYW5hZ2VyLnRzXCI7XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOWcuuaZr+euoeeQhuWZqFxyXG4gKi9cclxuY2xhc3MgU2NlbmVNYW5hZ2VyIHtcclxuXHRcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDlnLrmma/moIhcclxuXHQgKi9cclxuXHRwcml2YXRlIF9zY2VuZVN0YWNrOlNjZW5lU25hcHNob3RbXSA9IFtdO1xyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDlvZPliY3lnLrmma9cclxuXHQgKi9cclxuXHRwcml2YXRlIF9jdXJyZW50U2NlbmU6U2NlbmVCYXNlID0gbnVsbDtcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5p6E6YCg5Ye95pWwXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoKXtcclxuXHRcdHN0YXRlLm9uKCdpbml0aWFsaXplJywgKCk9PntcclxuXHRcdFx0ZG9pbmcuc3RhdGVJbml0aWFsaXplLmluKCgpPT57XHJcblx0XHRcdFx0dGhpcy5fc2NlbmVTdGFjayA9IFtdO1xyXG5cdFx0XHRcdHRoaXMuX2N1cnJlbnRTY2VuZSA9IG51bGw7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDmo4Dmn6XlvZPliY3lnLrmma88YnIvPlxyXG5cdCAqIOaQnOe0ouWcuuaZr+eahFtbU2NlbmVCYXNlXV3ohJrmnKznu4Tku7bvvIzlpoLmnpzkuI3lrZjlnKjlsLHkvJrlnKjnrKzkuIDkuKrlrZDoioLngrnkuIrmjILovb3kuIDkuKrmlrDnmoRcclxuXHQgKi9cclxuXHRwcml2YXRlIGNoZWNrQ3VycmVudFNjZW5lKCl7XHJcblx0XHRpZighdGhpcy5fY3VycmVudFNjZW5lKXtcclxuXHRcdFx0bGV0IHNub2RlOmNjLlNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcclxuXHRcdFx0bGV0IHNjZW5lID0gc25vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihTY2VuZUJhc2UpO1xyXG5cdFx0XHRpZighc2NlbmUpe1xyXG5cdFx0XHRcdGxldCBub2RlID0gPGNjLk5vZGU+PGFueT4oc25vZGUuY2hpbGRyZW5bMF0pO1xyXG5cdFx0XHRcdGlmKG5vZGUpe1xyXG5cdFx0XHRcdFx0c2NlbmUgPSBub2RlLmFkZENvbXBvbmVudChTY2VuZUJhc2UpO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0Y2MuZXJyb3IoVEFHLCBcInNjZW5lIG11c3QgaGF2ZSBub2Rlc1wiKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRzY2VuZS5fc2V0U2NlbmVOYW1lKHNub2RlLm5hbWUpO1xyXG5cdFx0XHR0aGlzLl9jdXJyZW50U2NlbmUgPSBzY2VuZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOiOt+W+l+W9k+WJjeWcuuaZr1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXRDdXJyZW50U2NlbmUoKTpTY2VuZUJhc2Uge1xyXG5cdFx0dGhpcy5jaGVja0N1cnJlbnRTY2VuZSgpO1xyXG5cdFx0cmV0dXJuIHRoaXMuX2N1cnJlbnRTY2VuZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOWIh+aNouWcuuaZr1xyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBzbmFtZSAtIOWcuuaZr+WQjVxyXG5cdCAqIEBwYXJhbSBzYXJncyAtIOW/q+eFp+WPguaVsFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgX3N3aXRjaFNjZW5lKHNuYW1lOnN0cmluZywgLi4uc2FyZ3M6YW55W10pe1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB1aU1nci5jbG9zZUFsbFVJKCk7XHJcblx0XHRjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc25hbWUsIChlcnIsIHNub2RlOmNjLlNjZW5lKT0+e1xyXG5cdFx0XHRpZighZXJyICYmIHNub2RlKXtcclxuXHRcdFx0XHRsZXQgc2NlbmUgPSBzbm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKFNjZW5lQmFzZSk7XHJcblx0XHRcdFx0aWYoIXNjZW5lKXtcclxuXHRcdFx0XHRcdGxldCBub2RlID0gPGNjLk5vZGU+PGFueT4oc25vZGUuY2hpbGRyZW5bMF0pO1xyXG5cdFx0XHRcdFx0aWYobm9kZSl7XHJcblx0XHRcdFx0XHRcdHNjZW5lID0gbm9kZS5hZGRDb21wb25lbnQoU2NlbmVCYXNlKTtcclxuXHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRjYy5lcnJvcihUQUcsIFwic2NlbmUgbXVzdCBoYXZlIG5vZGVzXCIpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHNjZW5lLl9zZXRTY2VuZU5hbWUoc25vZGUubmFtZSk7XHJcblx0XHRcdFx0c2VsZi5fY3VycmVudFNjZW5lID0gc2NlbmU7XHJcblx0XHRcdFx0c2NlbmUub25TY2VuZUxvYWQoLi4uc2FyZ3MpO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRjYy5lcnJvcihUQUcsIGBzY2VuZSAke3NuYW1lfSBzd2l0Y2ggZmFpbHVyZWApXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5YiH5o2i5Zy65pmvXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHNuYW1lIC0g5Zy65pmv5ZCNXHJcblx0ICogQHBhcmFtIHNhcmdzIC0g5b+r54Wn5Y+C5pWwXHJcblx0ICovXHJcblx0cHVibGljIHN3aXRjaFNjZW5lKHNuYW1lOnN0cmluZywgLi4uc2FyZ3M6YW55W10pe1xyXG5cdFx0dGhpcy5fc2NlbmVTdGFjayA9IFtdO1xyXG5cdFx0dGhpcy5fc3dpdGNoU2NlbmUoc25hbWUsIC4uLnNhcmdzKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOWItuS9nOW9k+WJjeWcuuaZr+eahOW/q+eFp1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBtYWtlU25hcHNob3QoKTpTY2VuZVNuYXBzaG90IHtcclxuXHRcdGxldCBjdXJzY2VuZSA9IHRoaXMuZ2V0Q3VycmVudFNjZW5lKCk7XHJcblx0XHRpZihjdXJzY2VuZSl7XHJcblx0XHRcdHJldHVybiBjdXJzY2VuZS5tYWtlU25hcHNob3QoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOaBouWkjeWcuuaZr+W/q+eFp1xyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBzbmFwc2hvdCAtIOWcuuaZr+W/q+eFp1xyXG5cdCAqL1xyXG5cdHB1YmxpYyByZXN1bWVTbmFwc2hvdChzbmFwc2hvdDpTY2VuZVNuYXBzaG90KSB7XHJcblx0XHRpZihzbmFwc2hvdCl7XHJcblx0XHRcdHRoaXMuX3N3aXRjaFNjZW5lKHNuYXBzaG90LnNjZW5lTmFtZSwgc25hcHNob3Quc2NlbmVBcmdzKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5Y6L5YWl5Zy65pmv5Yiw5qCIXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHNuYW1lIC0g5Zy65pmv5ZCNXHJcblx0ICogQHBhcmFtIHNhcmdzIC0g5b+r54Wn5Y+C5pWwXHJcblx0ICovXHJcblx0cHVibGljIHB1c2hTY2VuZShzbmFtZTpzdHJpbmcsIC4uLnNhcmdzOmFueVtdKXtcclxuXHRcdGxldCBjdXJzY2VuZSA9IHRoaXMuZ2V0Q3VycmVudFNjZW5lKCk7XHJcblx0XHRpZihjdXJzY2VuZSl7XHJcblx0XHRcdHRoaXMuX3NjZW5lU3RhY2sucHVzaChjdXJzY2VuZS5tYWtlU25hcHNob3QoKSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLl9zd2l0Y2hTY2VuZShzbmFtZSwgLi4uc2FyZ3MpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5by55Ye65qCI5Lit55qE5Zy65pmvXHJcblx0ICovXHJcblx0cHVibGljIHBvcFNjZW5lKCl7XHJcblx0XHRsZXQgc2NlbmVwID0gdGhpcy5fc2NlbmVTdGFjay5wb3AoKTtcclxuXHRcdGlmKHNjZW5lcCl7XHJcblx0XHRcdHRoaXMuX3N3aXRjaFNjZW5lKHNjZW5lcC5zY2VuZU5hbWUsIHNjZW5lcC5zY2VuZUFyZ3MpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6I635b6X5Zy65pmv5qCIXHJcblx0ICovXHJcblx0cHVibGljIGdldFNjZW5lU3RhY2soKXtcclxuXHRcdHJldHVybiB0aGlzLl9zY2VuZVN0YWNrO1xyXG5cdH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5Zy65pmv566h55CG5Zmo5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2NlbmVNZ3IgPSBuZXcgU2NlbmVNYW5hZ2VyKCk7XHJcblxyXG59XHJcbiIsIi8qXHJcbkNvcHlyaWdodCAyMDIxIEx1SnVuXHJcblxyXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IFxyXG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIFxyXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIFxyXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIFxyXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIFxyXG50byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBcclxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIFxyXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgXHJcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFxyXG5USEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBcclxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgXHJcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG4qL1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2Jhc2UvbGNjLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2Jhc2Uvc3RhdGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vYmFzZS9kb2luZy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi91dGlscy9qcy50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgbGNjIHtcclxuXHJcbmNvbnN0IFRBRyA9IFwibGNjL3RhYmxlL3RhYmxlLW1hbmFnZXIudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog57Si5byV6Lev5b6EXHJcbiAqL1xyXG5leHBvcnQgbmFtZXNwYWNlIElOREVYUEFUSCB7XHJcblx0XHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5pWw5o2u6KGoXHJcblx0ICovXHJcblx0ZXhwb3J0IGxldCBUQUJMRSA9IFwidGFibGVcIjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog6Ieq5Yqo5Yqg6L295pWw5o2u6KGoPGJyLz5cclxuICog5aaC5p6c5Li6dHJ1Ze+8jOmCo+S5iOS8muWcqOWKoOi9vea4uOaIj+WMheeahOaXtuWAmeWKoOi9veaJgOacieaVsOaNruihqOOAglxyXG4gKi9cclxuZXhwb3J0IGxldCBMT0FEVEFCTEVfQVVUTyA9IHRydWU7XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOaVsOaNruihqOWvueixoeaYoOWwhOihqDxici8+XHJcbiAqL1xyXG5leHBvcnQgbGV0IFRBQkxFUzp7W2tleTpzdHJpbmddOmFueX0gPSBqcy5jcmVhdGVNYXAoKTtcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5pWw5o2u6KGo566h55CG5ZmoPGJyLz5cclxuICog5Li76KaB55So5LqO566h55CG5ri45oiP5pWw5o2u6KGo77yM6L+Z5Lqb6KGo5LiA6Iis55Sx562W5YiS6YWN572uPGJyLz5cclxuICog5pWw5o2u6KGo55qE5ZCI5bm25Yqf6IO9XHJcbiAqL1xyXG5jbGFzcyBUYWJsZU1hbmFnZXIge1xyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOaVsOaNruihqOWKoOi9veaYoOWwhOihqFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgX2xvYWRNYXA6e1trZXk6c3RyaW5nXTpib29sZWFufSA9IGpzLmNyZWF0ZU1hcCgpO1xyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDmnoTpgKDlh73mlbBcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3Rvcigpe1xyXG5cdFx0c3RhdGUub24oJ2luaXRpYWxpemUnLCAoKT0+e1xyXG5cdFx0XHRkb2luZy5zdGF0ZUluaXRpYWxpemUuaW4oKCk9PntcclxuXHRcdFx0XHR0aGlzLl9sb2FkTWFwID0ganMuY3JlYXRlTWFwKCk7XHJcblx0XHRcdFx0aW5kZXhNZ3Iub24oXCJpbmRleGVzX3JlbW92ZWRcIiwgdGhpcy5vbkluZGV4ZXNSZW1vdmVkLCB0aGlzKTtcclxuXHRcdFx0XHRpbmRleE1nci5vbihcImluZGV4ZXNfbG9hZGVkX1wiICsgSU5ERVhQQVRILlRBQkxFLCB0aGlzLm9uSW5kZXhlc0xvYWRlZCwgdGhpcyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHRzdGF0ZS5vbigncmVsZWFzZScsICgpPT57XHJcblx0XHRcdGRvaW5nLnN0YXRlUmVsZWFzZS5pbigoKT0+e1xyXG5cdFx0XHRcdGluZGV4TWdyLnRhcmdldE9mZih0aGlzKTtcclxuXHRcdFx0XHRmb3IobGV0IHRuYW1lIG9mIE9iamVjdC5rZXlzKFRBQkxFUykpe1xyXG5cdFx0XHRcdFx0ZGVsZXRlIFRBQkxFU1t0bmFtZV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG4gICAgfVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOW9k+enu+mZpOe0ouW8lVxyXG5cdCAqIFxyXG5cdCAqIEBpbnRlcm5hbFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgb25JbmRleGVzUmVtb3ZlZCgpe1xyXG5cdFx0ZG9pbmcuaW5kZXhMb2FkLmFkZENvdW50KCk7XHJcblx0XHRmb3IobGV0IHRuYW1lIG9mIE9iamVjdC5rZXlzKFRBQkxFUykpe1xyXG5cdFx0XHRkZWxldGUgVEFCTEVTW3RuYW1lXTtcclxuXHRcdH1cclxuXHRcdHRoaXMub25JbmRleGVzTG9hZGVkKGluZGV4TWdyLmdldEluZGV4KElOREVYUEFUSC5UQUJMRSkpO1xyXG5cdFx0ZG9pbmcuaW5kZXhMb2FkLmRlY0NvdW50KCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDlvZPliqDovb3ntKLlvJVcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gaXZhbHVlIOe0ouW8leWvueixoVxyXG5cdCAqIFxyXG5cdCAqIEBpbnRlcm5hbFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgYXN5bmMgb25JbmRleGVzTG9hZGVkKGl2YWx1ZTpPYmplY3Qpe1xyXG5cdFx0ZG9pbmcuaW5kZXhMb2FkLmFkZENvdW50KCk7XHJcblx0XHRpZihpdmFsdWUpe1xyXG5cdFx0XHRmb3IobGV0IHRuYW1lIGluIGl2YWx1ZSl7XHJcblx0XHRcdFx0aWYoTE9BRFRBQkxFX0FVVE8gfHwgdGhpcy5fbG9hZE1hcFt0bmFtZV0pe1xyXG5cdFx0XHRcdFx0dGhpcy5fbG9hZE1hcFt0bmFtZV0gPSB0cnVlO1xyXG5cdFx0XHRcdFx0bGV0IHRmaWxlcyA9IGl2YWx1ZVt0bmFtZV07XHJcblx0XHRcdFx0XHRmb3IgKGxldCB0ZmlsZSBvZiB0ZmlsZXMpe1xyXG5cdFx0XHRcdFx0XHRhd2FpdCB0aGlzLmxvYWRUYWJsZUZpbGUodGZpbGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5zb3J0TGlzdFRhYmxlKHRuYW1lKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGRvaW5nLmluZGV4TG9hZC5kZWNDb3VudCgpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5Yqg6L295pWw5o2u6KGoXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHRnUGF0aCAtIOaVsOaNruihqOaWh+S7tuWFqOWxgOi3r+W+hFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgYXN5bmMgbG9hZFRhYmxlRmlsZSh0Z1BhdGg6c3RyaW5nKXtcclxuXHRcdGxldCB0YWJsZSA9IGF3YWl0IHBhY2tNZ3IubG9hZEpzb24odGdQYXRoKTtcclxuXHRcdGlmKCF0YWJsZSl7XHJcblx0XHRcdGNjLmVycm9yKFRBRywgYGRhdGFiYXNlIGZpbGUgJHt0Z1BhdGh9IHJlYWQgZmFpbCAhISFgKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRqcy5tZXJnZU1hcChUQUJMRVMsIHRhYmxlLCB7IHRhZyA6IFRBRywgc291cmNlIDogdGdQYXRoIH0pO1xyXG5cdFx0XHRERUJVRy5UQUJMRSAmJiBjYy5sb2coVEFHLCBgbG9hZCB0YWJsZSAke0pTT04uc3RyaW5naWZ5KHRhYmxlKX0gZnJvbSAke3RnUGF0aH1gKTtcclxuXHRcdH1cclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog57Si5byV5YW35L2T5YC8XHJcblx0ICogXHJcblx0ICogQHBhcmFtIG1hcCAtIOe0ouW8leWvueixoVxyXG5cdCAqIEBwYXJhbSBpbmRleCAtIOe0ouW8lVxyXG5cdCAqL1xyXG5cdHByaXZhdGUgaW5kZXhWYWx1ZShtYXA6T2JqZWN0LCBpbmRleDphbnkpe1xyXG5cdFx0aWYodHlwZW9mIGluZGV4ID09ICdzdHJpbmcnKXtcclxuXHRcdFx0cmV0dXJuIGpzLmdldE1hcFZhbHVlKG1hcCwgaW5kZXgsICcuJyk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0cmV0dXJuIG1hcFtpbmRleF07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDmjpLluo/liJfooajnsbvlnovmlbDmja7ooahcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gdG5hbWUg5pWw5o2u6KGo5ZCN56ewXHJcblx0ICovXHJcblx0cHJpdmF0ZSBzb3J0TGlzdFRhYmxlKHRuYW1lOnN0cmluZyl7XHJcblx0XHRsZXQgc29ydE1hcCA9IFRBQkxFU1snI2xpc3RTb3J0J107XHJcblx0XHRpZihzb3J0TWFwKXtcclxuXHRcdFx0bGV0IHRhYmxlID0gVEFCTEVTW3RuYW1lXVxyXG5cdFx0XHRsZXQgc29ydEluZm8gPSBzb3J0TWFwW3RuYW1lXTtcclxuXHRcdFx0aWYodGFibGUgJiYgc29ydEluZm8pe1xyXG5cdFx0XHRcdGlmKHNvcnRJbmZvLmtleSAhPSBudWxsKXtcclxuXHRcdFx0XHRcdGlmKHNvcnRJbmZvLnNvcnQgPT0gJ3VwJyl7XHJcblx0XHRcdFx0XHRcdHRhYmxlLnNvcnQoKGE6YW55ICwgYjphbnkpPT57IHJldHVybiB0aGlzLmluZGV4VmFsdWUoYSwgc29ydEluZm8ua2V5KSAtIHRoaXMuaW5kZXhWYWx1ZShiLCBzb3J0SW5mby5rZXkpOyB9KTtcclxuXHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHR0YWJsZS5zb3J0KChhOmFueSAsIGI6YW55KT0+eyByZXR1cm4gdGhpcy5pbmRleFZhbHVlKGIsIHNvcnRJbmZvLmtleSkgLSB0aGlzLmluZGV4VmFsdWUoYSwgc29ydEluZm8ua2V5KTsgfSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRpZihzb3J0SW5mby5zb3J0ID09ICd1cCcpe1xyXG5cdFx0XHRcdFx0XHR0YWJsZS5zb3J0KChhOmFueSAsIGI6YW55KT0+eyByZXR1cm4gYSAtIGI7IH0pO1xyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdHRhYmxlLnNvcnQoKGE6YW55ICwgYjphbnkpPT57IHJldHVybiBiIC0gYTsgfSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG4gICAgLyoqXHJcblx0ICogQHpoXHJcbiAgICAgKiDojrflvpfmiYDmnInooahcclxuICAgICAqL1xyXG5cdHB1YmxpYyBnZXRUYWJsZXMoKXtcclxuICAgICAgICByZXR1cm4gVEFCTEVTO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuXHQgKiBAemhcclxuICAgICAqIOiOt+W+l+aMh+WumuihqDxici8+XHJcblx0ICog5ZyoW1tMT0FEVEFCTEVfQVVUT11d5Li6ZmFsc2Xml7bjgILlpoLmnpzooajmnKrliqDovb3vvIzkvJrkvJjlhYjliqDovb3mjIflrprooajjgIJcclxuXHQgKiBcclxuICAgICAqIEBwYXJhbSB0bmFtZSAtIOaVsOaNruihqOWQjeensFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0VGFibGU8VCA9IGFueT4odG5hbWU6c3RyaW5nKXtcclxuXHRcdGF3YWl0IHRoaXMubG9hZFRhYmxlKHRuYW1lKTtcclxuICAgICAgICByZXR1cm4gVEFCTEVTW3RuYW1lXSBhcyBUO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDmiYvliqjliqDovb3mlbDmja7ooag8YnIvPlxyXG5cdCAqIOWPquWcqFtbTE9BRFRBQkxFX0FVVE9dXeS4umZhbHNl5LiL5pyJ5pWIXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHRuYW1lcyAtIOaVsOaNruihqOWQjeensOaVsOe7hFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhc3luYyBsb2FkVGFibGUoLi4udG5hbWVzOnN0cmluZ1tdKXtcclxuXHRcdGlmKCFMT0FEVEFCTEVfQVVUTyl7XHJcblx0XHRcdGZvcihsZXQgdG5hbWUgb2YgdG5hbWVzKXtcclxuXHRcdFx0XHRpZighdGhpcy5fbG9hZE1hcFt0bmFtZV0pe1xyXG5cdFx0XHRcdFx0dGhpcy5fbG9hZE1hcFt0bmFtZV0gPSB0cnVlO1xyXG5cdFx0XHRcdFx0bGV0IHRmaWxlcyA9IGluZGV4TWdyLmdldEluZGV4KGAke0lOREVYUEFUSC5UQUJMRX0vJHt0bmFtZX1gKTtcclxuXHRcdFx0XHRcdGlmKHRmaWxlcyl7XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IHRmaWxlIG9mIHRmaWxlcyl7XHJcblx0XHRcdFx0XHRcdFx0YXdhaXQgdGhpcy5sb2FkVGFibGVGaWxlKHRmaWxlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0aGlzLnNvcnRMaXN0VGFibGUodG5hbWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcbiAgICAvKipcclxuXHQgKiBAemhcclxuICAgICAqIOaJi+WKqOenu+mZpOaVsOaNruihqDxici8+XHJcblx0ICog5Y+q5ZyoW1tMT0FEVEFCTEVfQVVUT11d5Li6ZmFsc2XkuIvmnInmlYhcclxuXHQgKiBcclxuICAgICAqIEBwYXJhbSB0bmFtZXMgLSDmlbDmja7ooajlkI3np7DmlbDnu4RcclxuICAgICAqL1xyXG5cdHB1YmxpYyByZW1vdmVUYWJsZSguLi50bmFtZXM6c3RyaW5nW10pe1xyXG5cdFx0aWYoIUxPQURUQUJMRV9BVVRPKXtcclxuXHRcdFx0Zm9yKGxldCB0bmFtZSBvZiB0bmFtZXMpe1xyXG5cdFx0XHRcdGRlbGV0ZSBUQUJMRVNbdG5hbWVdO1xyXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLl9sb2FkTWFwW3RuYW1lXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG4gICAgfVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOaJi+WKqOenu+mZpOenu+mZpOaJgOacieaVsOaNruihqDxici8+XHJcblx0ICog5Y+q5ZyoW1tMT0FEVEFCTEVfQVVUT11d5Li6ZmFsc2XkuIvmnInmlYhcclxuXHQgKi9cclxuXHRwdWJsaWMgcmVtb3ZlQWxsVGFibGVzKCl7XHJcblx0XHRpZighTE9BRFRBQkxFX0FVVE8pe1xyXG5cdFx0XHR0aGlzLnJlbW92ZVRhYmxlKC4uLk9iamVjdC5rZXlzKFRBQkxFUykpO1xyXG5cdFx0fVxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5pWw5o2u6KGo566h55CG5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdGFibGVNZ3IgPSBuZXcgVGFibGVNYW5hZ2VyKCk7XHJcblxyXG52YXJpYWJsZS5zZXQoJ1RBQkxFJywgKHBhdGg6c3RyaW5nKT0+e1xyXG5cdHJldHVybiBqcy5nZXRNYXBWYWx1ZShUQUJMRVMsIHBhdGgpO1xyXG59KVxyXG5cclxufVxyXG4iLCIvKlxyXG5Db3B5cmlnaHQgMjAyMSBMdUp1blxyXG5cclxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBcclxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBcclxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyBcclxudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBcclxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCBcclxudG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gXHJcbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBcclxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIFxyXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBcclxuVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgXHJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIFxyXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuKi9cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9iYXNlL2xjYy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9iYXNlL3N0YXRlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3V0aWxzL2pzLnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBsY2Mge1xyXG5cclxuY29uc3QgVEFHID0gXCJsY2MvdGltZXIvdGltZXItbWFuYWdlci50c1wiO1xyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDlrprml7blmajphY3nva5cclxuICovXHJcbiBpbnRlcmZhY2UgVGltZXJDb25maWcge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOWJqeS9meaXtumXtFxyXG4gICAgICovXHJcbiAgICByZW1haW5UaW1lOm51bWJlcjtcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOWkhOeQhuWHveaVsFxyXG4gICAgICovXHJcbiAgICBoYW5kbGU6KGR0PzpudW1iZXIpPT52b2lkO1xyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIEB6aFxyXG4gICAgICog5b6q546v6L+Q6KGM77yM6Zmk6Z2e6KKr56e76ZmkXHJcbiAgICAgKi9cclxuICAgIGxvb3A6Ym9vbGVhbjtcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOaAu+aXtumXtFxyXG4gICAgICovXHJcblx0dG90YWxUaW1lOm51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDlrprml7blmajpgInpoblcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGltZXJPcHRpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOWumuaXtuWZqOWIhue7hFxyXG4gICAgICovXHJcbiAgICBncm91cD86c3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHpoXHJcbiAgICAgKiDlrprml7blmajplK5cclxuICAgICAqL1xyXG4gICAga2V5PzpzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOW+queOr+i/kOihjFxyXG4gICAgICovXHJcbiAgICBsb29wPzpib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOm7mOiupOWumuaXtuWZqOe7hFxyXG4gKi9cclxuZXhwb3J0IGxldCBERUZBVUxUX1RJTUVSX0dST1VQID0gXCJkZWZhdWx0XCI7XHJcblxyXG4vKipcclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDlrprml7blmajml7bpl7TniYfvvIznp5JcclxuICovXHJcbmV4cG9ydCBsZXQgVElNRVJfVElNRVNMSUNFID0gMTtcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5a6a5pe25Zmo566h55CG5ZmoPGJyLz5cclxuICog5Li76KaB55So5LqO56iL5bqP5Lit5omA5pyJ5a6a5pe25Zmo55qE5re75Yqg44CB6Kem5Y+R5ZKM56e76ZmkXHJcbiAqL1xyXG4gY2xhc3MgVGltZXJNYW5hZ2VyIHtcclxuXHRcclxuXHQvKipcclxuICAgICAqIEB6aFxyXG5cdCAqIOWumuaXtuWZqOWunuS9k1xyXG5cdCAqL1xyXG5cdHByaXZhdGUgX2VudGl0eSA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG4gICAgICogQHpoXHJcblx0ICog5Lu75Yqh5pig5bCE6KGoXHJcblx0ICovXHJcblx0cHJpdmF0ZSBfdGFza01hcDp7W2tleTpzdHJpbmddOntba2V5OnN0cmluZ106VGltZXJDb25maWd9fSA9IGpzLmNyZWF0ZU1hcCgpO1xyXG5cclxuXHQvKipcclxuICAgICAqIEB6aFxyXG5cdCAqIOS7u+WKoee0ouW8lTxicj5cclxuICAgICAqIOWmguaenOS7u+WKoeayoeacieaMh+WummBrZXlg77yM5bCx5Lya6Ieq5Yqo5YiG6YWN57Si5byVXHJcblx0ICovXHJcblx0cHJpdmF0ZSBfdGFza0luZGV4ID0gMDtcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5p6E6YCg5Ye95pWwXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoKXtcclxuXHRcdHN0YXRlLm9uKCdpbml0aWFsaXplJywgKCk9PntcclxuXHRcdFx0ZG9pbmcuc3RhdGVJbml0aWFsaXplLmluKCgpPT57XHJcblx0XHRcdFx0dGhpcy5fZW50aXR5ID0gbnVsbDtcclxuXHRcdFx0XHR0aGlzLl90YXNrTWFwID0ganMuY3JlYXRlTWFwKCk7XHJcblx0XHRcdFx0dGhpcy5fdGFza0luZGV4ID0gMDtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdHN0YXRlLm9uKCdyZWxlYXNlJywgKCk9PntcclxuXHRcdFx0ZG9pbmcuc3RhdGVSZWxlYXNlLmluKCgpPT57XHJcblx0XHRcdFx0dGhpcy5yZW1vdmVBbGxUaW1lcnMoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuICAgIH1cclxuXHRcclxuXHQvKipcclxuICAgICAqIEB6aFxyXG5cdCAqIOWuieijheWumuaXtuWZqOWunuS9k1xyXG5cdCAqL1xyXG5cdHByaXZhdGUgc2V0dXBUaW1lckVudGl0eSgpe1xyXG5cdFx0aWYoIXRoaXMuX2VudGl0eSAmJiAhanMuaXNFbXB0eU1hcCh0aGlzLl90YXNrTWFwKSl7XHJcblx0XHRcdHRoaXMuX2VudGl0eSA9IHNldEludGVydmFsKHRoaXMub25UaW1lVXBkYXRlLmJpbmQodGhpcyksIFRJTUVSX1RJTUVTTElDRSAqIDEwMDApO1xyXG5cdFx0XHRERUJVRy5USU1FUiAmJiBjYy5sb2coVEFHLCBgc2V0dXBUaW1lckVudGl0eSAke1RJTUVSX1RJTUVTTElDRSAqIDEwMDB9YCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG4gICAgICogQHpoXHJcblx0ICog5Yig6Zmk5a6a5pe25Zmo5a6e5L2TXHJcblx0ICovXHJcblx0cHJpdmF0ZSBkZWxldGVUaW1lckVudGl0eSgpe1xyXG5cdFx0aWYodGhpcy5fZW50aXR5ICYmIGpzLmlzRW1wdHlNYXAodGhpcy5fdGFza01hcCkpe1xyXG5cdFx0XHRjbGVhckludGVydmFsKHRoaXMuX2VudGl0eSk7XHJcblx0XHRcdHRoaXMuX2VudGl0eSA9IG51bGw7XHJcblx0XHRcdERFQlVHLlRJTUVSICYmIGNjLmxvZyhUQUcsIGBkZWxldGVUaW1lckVudGl0eWApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBAemhcclxuXHQgKiDml7bpl7Tmm7TmlrDlh73mlbBcclxuXHQgKi9cclxuXHRwcml2YXRlIG9uVGltZVVwZGF0ZSgpe1xyXG5cdFx0bGV0IGNoYW5nZSA9IGZhbHNlO1xyXG5cdFx0Zm9yIChsZXQgZ3JvdXAgb2YgT2JqZWN0LmtleXModGhpcy5fdGFza01hcCkpe1xyXG5cdFx0XHRsZXQgdGFza3MgPSB0aGlzLl90YXNrTWFwW2dyb3VwXTtcclxuXHRcdFx0aWYodGFza3Mpe1xyXG5cdFx0XHRcdGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyh0YXNrcykpe1xyXG5cdFx0XHRcdFx0bGV0IHRhc2sgPSB0YXNrc1trZXldO1xyXG5cdFx0XHRcdFx0aWYodGFzayl7XHJcblx0XHRcdFx0XHRcdHRhc2sucmVtYWluVGltZSAtPSBUSU1FUl9USU1FU0xJQ0U7XHJcblx0XHRcdFx0XHRcdGlmKHRhc2sucmVtYWluVGltZSA8PSAwKXtcclxuXHRcdFx0XHRcdFx0XHRpZih0YXNrLmxvb3Ape1xyXG5cdFx0XHRcdFx0XHRcdFx0dGFzay5yZW1haW5UaW1lID0gdGFzay50b3RhbFRpbWU7XHJcblx0XHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRkZWxldGUgdGFza3Nba2V5XTtcclxuXHRcdFx0XHRcdFx0XHRcdGlmKGpzLmlzRW1wdHlNYXAodGFza3MpKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuX3Rhc2tNYXBbZ3JvdXBdO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjaGFuZ2UgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGFzay5oYW5kbGUodGFzay50b3RhbFRpbWUpO1xyXG5cdFx0XHRcdFx0XHRcdH1jYXRjaChlKXtcclxuXHRcdFx0XHRcdFx0XHRcdGxvZ01nci5lcnJvcihUQUcsIGBvblRpbWVVcGRhdGUgJyR7Z3JvdXB9LSR7a2V5fScgJHtlfWApO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYoY2hhbmdlKXtcclxuXHRcdFx0dGhpcy5kZWxldGVUaW1lckVudGl0eSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBAemhcclxuXHQgKiDmt7vliqDlrprml7blmahcclxuICAgICAqIFxyXG5cdCAqIEBwYXJhbSB0aW1lIC0g5Zue6LCD55qE5pe26Ze0XHJcblx0ICogQHBhcmFtIGhhbmRsZSAtIOWbnuiwg+WHveaVsFxyXG5cdCAqIEBwYXJhbSBrZXkgLSDlj6/pgInvvIzlrprml7blmajplK7miJbogIXlrprml7blmajpgInpoblcclxuXHQgKi9cclxuXHRwdWJsaWMgYWRkVGltZXIodGltZTpudW1iZXIsIGhhbmRsZTooZHQ/Om51bWJlcik9PnZvaWQsIGtleTpzdHJpbmd8VGltZXJPcHRpb24gPSB7fSl7XHJcbiAgICAgICAgbGV0IG9wdGlvbjpUaW1lck9wdGlvbjtcclxuICAgICAgICBpZih0eXBlb2Yga2V5ID09ICdzdHJpbmcnKXtcclxuICAgICAgICAgICAgb3B0aW9uID0geyBrZXkgOiBrZXkgfTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgb3B0aW9uID0ga2V5O1xyXG4gICAgICAgIH1cclxuXHRcdERFQlVHLlRJTUVSICYmIGNjLmxvZyhUQUcsIGBhZGRUaW1lciAke3RpbWV9ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9uKX1gKTtcclxuICAgICAgICBsZXQgZ3JvdXAgPSBvcHRpb24uZ3JvdXAgfHwgREVGQVVMVF9USU1FUl9HUk9VUDtcclxuXHRcdGxldCB0YXNrcyA9IHRoaXMuX3Rhc2tNYXBbZ3JvdXBdO1xyXG5cdFx0aWYoIXRhc2tzKXtcclxuXHRcdFx0dGFza3MgPSBqcy5jcmVhdGVNYXAoKTtcclxuXHRcdFx0dGhpcy5fdGFza01hcFtncm91cF0gPSB0YXNrcztcclxuXHRcdH1cclxuICAgICAgICBsZXQgdGltZXJLZXkgPSBvcHRpb24ua2V5IHx8ICh0aGlzLl90YXNrSW5kZXgrKykudG9TdHJpbmcoKTtcclxuXHRcdHRhc2tzW3RpbWVyS2V5XSA9IHtcclxuXHRcdFx0cmVtYWluVGltZSA6IHRpbWUsXHJcblx0XHRcdGhhbmRsZSA6IGhhbmRsZSxcclxuXHRcdFx0bG9vcCA6IG9wdGlvbi5sb29wLFxyXG5cdFx0XHR0b3RhbFRpbWUgOiB0aW1lLFxyXG5cdFx0fVxyXG5cdFx0dGhpcy5zZXR1cFRpbWVyRW50aXR5KCk7XHJcbiAgICAgICAgcmV0dXJuIHRpbWVyS2V5O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBAemhcclxuXHQgKiDnp7vpmaTlrprml7blmag8YnIvPlxyXG4gICAgICog5aaC5p6c6YCJ6aG55LiN5Lyg5YWlYGtleWDvvIzpgqPkuYjkvJrnp7vpmaTmlbTkuKrlrprml7blmajliIbnu4TkuIrnmoTmiYDmnInlrprml7blmahcclxuICAgICAqIFxyXG5cdCAqIEBwYXJhbSBrZXkgLSDlrprml7blmajplK7miJbogIXlrprml7blmajpgInpobnvvIzlpoLmnpzkvb/nlKjpgInpobnliJnlv4XpobvlrZjlnKhncm91cO+8jOWQpuWImeS4jeeUn+aViFxyXG5cdCAqL1xyXG5cdHB1YmxpYyByZW1vdmVUaW1lcihrZXk6c3RyaW5nfFRpbWVyT3B0aW9uKXtcclxuICAgICAgICBsZXQgb3B0aW9uOlRpbWVyT3B0aW9uO1xyXG4gICAgICAgIGlmKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycpe1xyXG4gICAgICAgICAgICBvcHRpb24gPSB7IGtleSA6IGtleSwgZ3JvdXAgOiBERUZBVUxUX1RJTUVSX0dST1VQIH07XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG9wdGlvbiA9IGtleTtcclxuICAgICAgICB9XHJcblx0XHRERUJVRy5USU1FUiAmJiBjYy5sb2coVEFHLCBgcmVtb3ZlVGltZXIgJHtKU09OLnN0cmluZ2lmeShvcHRpb24pfWApO1xyXG4gICAgICAgIGlmKG9wdGlvbi5ncm91cCl7XHJcbiAgICAgICAgICAgIGxldCB0aW1lcktleSA9IG9wdGlvbi5rZXk7XHJcbiAgICAgICAgICAgIGxldCByZW1haW5UaW1lID0gMDtcclxuICAgICAgICAgICAgbGV0IHRhc2tzID0gdGhpcy5fdGFza01hcFtvcHRpb24uZ3JvdXBdO1xyXG4gICAgICAgICAgICBpZih0YXNrcyl7XHJcbiAgICAgICAgICAgICAgICBpZih0aW1lcktleSl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2sgPSB0YXNrc1t0aW1lcktleV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGFzayl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0YXNrc1t0aW1lcktleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGpzLmlzRW1wdHlNYXAodGFza3MpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl90YXNrTWFwW29wdGlvbi5ncm91cF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtYWluVGltZSA9IHRhc2sucmVtYWluVGltZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgREVCVUcuVElNRVIgJiYgY2MubG9nKFRBRywgYHJlbW92ZVRpbWVyICR7SlNPTi5zdHJpbmdpZnkob3B0aW9uKX0gc3VjY2Vzc2ApO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3Rhc2tNYXBbb3B0aW9uLmdyb3VwXTtcclxuICAgICAgICAgICAgICAgICAgICBERUJVRy5USU1FUiAmJiBjYy5sb2coVEFHLCBgcmVtb3ZlVGltZXIgR3JvdXAgJHtKU09OLnN0cmluZ2lmeShvcHRpb24pfSBzdWNjZXNzYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kZWxldGVUaW1lckVudGl0eSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVtYWluVGltZTtcclxuICAgICAgICB9XHJcblx0XHRcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIOenu+mZpOWumuaXtuWZqFxyXG5cdCAqL1xyXG5cdHB1YmxpYyByZW1vdmVBbGxUaW1lcnMoKXtcclxuXHRcdGZvcihsZXQgZ3JvdXAgb2YgT2JqZWN0LmtleXModGhpcy5fdGFza01hcCkpe1xyXG5cdFx0XHR0aGlzLnJlbW92ZVRpbWVyKHsgZ3JvdXAgOiBncm91cCB9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOedoeecoOaMh+WumuenkuaVsFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBzZWNvbmRzIC0g56eS5pWwXHJcblx0ICovXHJcblx0cHVibGljIHNsZWVwKHNlY29uZHM6bnVtYmVyKXtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcclxuXHRcdFx0dGhpcy5hZGRUaW1lcihzZWNvbmRzLCByZXNvbHZlLCB7IGdyb3VwIDogJ2xjYy5UaW1lck1hbmFnZXIuc2xlZXAnIH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOWumuaXtuWZqOeuoeeQhuWZqOWvueixoVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHRpbWVyTWdyID0gbmV3IFRpbWVyTWFuYWdlcigpO1xyXG5cclxufVxyXG4iLCIvKlxuQ29weXJpZ2h0IDIwMjEgTHVKdW5cblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIFxudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgXG50byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIFxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBcblRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIFxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbm5hbWVzcGFjZSBsY2Mge1xuXG5jb25zdCBUQUcgPSBcImxjYy91aS91aS1iYXNlLnRzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8qKlxuICogQHpoXG4gKiBVSeWKqOeUu+aSreaUvuaOpeWPo1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFVJQW5pbWF0aW9uUGxheWFibGUge1xuXHQvKipcblx0ICogQHpoXG5cdCAqIOaSreaUvuaMh+Wumuexu+Wei+WKqOeUu1xuXHQgKiBcblx0ICogQHBhcmFtIGFUeXBlIOWKqOeUu+exu+Wei1xuXHQgKi9cblx0cGxheShhVHlwZTpzdHJpbmcpOlByb21pc2U8YW55Pjtcbn1cblxuLyoqXG4gKiBAemhcbiAqIFVJ5Z+657G7XG4gKi9cbkBjY2NsYXNzKFwibGNjLlVJQmFzZVwiKVxuZXhwb3J0IGNsYXNzIFVJQmFzZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cdC8qKlxuXHQgKiBAemhcblx0ICog5qC56IqC54K5XG5cdCAqL1xuXHRwcml2YXRlIF9yb290Tm9kZTpjYy5Ob2RlID0gbnVsbDtcblxuXHQvKipcblx0ICogQHpoXG5cdCAqIFVJ5Yqo55S75a+56LGhXG5cdCAqL1xuXHRwcml2YXRlIF91aUFuaW1hdGlvbjpVSUFuaW1hdGlvblBsYXlhYmxlID0gbnVsbDtcblxuXHQvKipcblx0ICogQHpoXG5cdCAqIFVJ5ZCN56ewXG5cdCAqL1xuXHRwcml2YXRlIF91aU5hbWU6c3RyaW5nID0gbnVsbDtcblxuXHQvKipcblx0ICogQHpoXG5cdCAqIOWbuuWumuS8mOWFiOe6p1xuXHQgKi9cblx0cHJpdmF0ZSBfZml4ZWRQcmlvcml0eTpudW1iZXIgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAemhcblx0ICog55S75biD5a+56LGhXG5cdCAqL1xuXHRwcml2YXRlIF9jYW52YXM6Q2FudmFzQ29uZmlnID0gbnVsbDtcblxuXHQvKipcblx0ICogQHpoXG5cdCAqIOiuvue9ruagueiKgueCuVxuXHQgKiBcblx0ICogQHBhcmFtIG5vZGUgLSDoioLngrnlr7nosaFcblx0ICovXG5cdHB1YmxpYyBfc2V0Um9vdE5vZGUobm9kZTpjYy5Ob2RlKXtcblx0XHR0aGlzLl9yb290Tm9kZSA9IG5vZGU7XG5cdH1cblxuXHQvKipcblx0ICogQHpoXG5cdCAqIOiuvue9ruaYr+WQpua/gOa0u1xuXHQgKiBcblx0ICogQHBhcmFtIGFjdGl2ZSAtIOaYr+WQpua/gOa0u1xuXHQgKi9cblx0cHVibGljIHNldEFjdGl2ZShhY3RpdmU6Ym9vbGVhbil7XG5cdFx0dGhpcy5fcm9vdE5vZGUuYWN0aXZlID0gYWN0aXZlO1xuXHR9XG5cdFxuXHQvKipcblx0ICogQHpoXG5cdCAqIOiuvue9rlVJ5ZCN56ewXG5cdCAqIFxuXHQgKiBAcGFyYW0gdWluYW1lIC0gVUnlkI3np7Bcblx0ICovXG5cdHB1YmxpYyBfc2V0VUlOYW1lKHVpbmFtZTpzdHJpbmcpe1xuXHRcdHRoaXMuX3VpTmFtZSA9IHVpbmFtZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAemhcblx0ICog6I635b6XVUnlkI3np7Bcblx0ICovXG5cdHB1YmxpYyBnZXRVSU5hbWUoKTpzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLl91aU5hbWU7XG5cdH1cblxuXHQvKipcblx0ICogQHpoXG5cdCAqIOiuvue9ruWbuuWumuS8mOWFiOe6p1xuXHQgKiBcblx0ICogQHBhcmFtIHByaW9yaXR5IC0g5LyY5YWI57qnXG5cdCAqL1xuXHRwdWJsaWMgc2V0Rml4ZWRQcmlvcml0eShwcmlvcml0eTpudW1iZXIpIHtcblx0XHR0aGlzLl9maXhlZFByaW9yaXR5ID0gcHJpb3JpdHk7XG5cdH1cblxuXHQvKipcblx0ICogQHpoXG5cdCAqIOiOt+W+l+WbuuWumuS8mOWFiOe6p1xuXHQgKi9cblx0cHVibGljIGdldEZpeGVkUHJpb3JpdHkoKTpudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLl9maXhlZFByaW9yaXR5O1xuXHR9XG5cblx0LyoqXG5cdCAqIEB6aFxuXHQgKiDorr7nva7nlLvluIPlr7nosaFcblx0ICogXG5cdCAqIEBwYXJhbSBjYW52YXMgLSDnlLvluIPlr7nosaFcblx0ICovXG5cdHB1YmxpYyBfc2V0Q2FudmFzKGNhbnZhczpDYW52YXNDb25maWcpe1xuXHRcdHRoaXMuX2NhbnZhcyA9IGNhbnZhcztcblx0fVxuXG5cdC8qKlxuXHQgKiBAemhcblx0ICog6I635b6X55S75biD5a+56LGhXG5cdCAqL1xuXHRwdWJsaWMgZ2V0Q2FudmFzKCkge1xuXHRcdHJldHVybiB0aGlzLl9jYW52YXM7XG5cdH1cblxuXHQvKipcblx0ICogQHpoXG5cdCAqIOWFs+mXreW9k+WJjVVJXG5cdCAqL1xuXHRwdWJsaWMgY2xvc2VTZWxmKHJlbGVhc2U6Ym9vbGVhbiA9IGZhbHNlKXtcblx0XHRyZXR1cm4gdWlNZ3IuY2xvc2VVSSh0aGlzLmdldFVJTmFtZSgpLCByZWxlYXNlKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEB6aFxuXHQgKiBVSeWIm+W7uu+8jOWGhemDqOS9v+eUqFxuXHQgKi9cblx0cHVibGljIF9vblVJQ3JlYXRlKCl7XG5cdFx0dGhpcy5fdWlBbmltYXRpb24gPSB0aGlzLmdldENvbXBvbmVudCgnbGNjLlVJQW5pbWF0aW9uJyk7XG5cdFx0dGhpcy5vblVJQ3JlYXRlKCk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBAemhcblx0ICog5pKt5pS+VUnliqjnlLtcblx0ICogXG5cdCAqIEBwYXJhbSBhVHlwZSDliqjnlLvnsbvlnotcblx0ICovXG5cdHB1YmxpYyBhc3luYyBwbGF5VUlBbmltYXRpb24oYVR5cGU6c3RyaW5nKXtcblx0XHRpZih0aGlzLl91aUFuaW1hdGlvbil7XG5cdFx0XHRhd2FpdCB0aGlzLl91aUFuaW1hdGlvbi5wbGF5KGFUeXBlKTtcblx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBAemhcblx0ICogVUnliJvlu7rlm57osIPvvIzlrZDnsbvkuK3lj6/ku6Xph43lhpnov5nkuKrlh73mlbBcblx0ICovXG5cdHB1YmxpYyBvblVJQ3JlYXRlKCl7fVxuXG5cdC8qKlxuXHQgKiBAemhcblx0ICogVUnmiZPlvIDlm57osIPvvIzlrZDnsbvkuK3lj6/ku6Xph43lhpnov5nkuKrlh73mlbBcblx0ICogXG5cdCAqIEBwYXJhbSBhcmdzIC0g5omT5byA5Y+C5pWwXG5cdCAqL1xuICAgIHB1YmxpYyBvbk9wZW4oLi4uYXJnczphbnlbXSk6YW55e31cbiAgICBcblx0LyoqXG5cdCAqIEB6aFxuXHQgKiBVSeWFs+mXreWbnuiwg++8jOWtkOexu+S4reWPr+S7pemHjeWGmei/meS4quWHveaVsFxuXHQgKi9cblx0cHVibGljIG9uQ2xvc2UoKXt9XG5cblx0LyoqXG5cdCAqIEB6aFxuXHQgKiBVSemHiuaUvuWbnuiwg++8jOWtkOexu+S4reWPr+S7pemHjeWGmei/meS4quWHveaVsFxuXHQgKi9cblx0cHVibGljIG9uVUlSZWxlYXNlKCl7fVxuXHRcblx0LyoqXG5cdCAqIEB6aFxuXHQgKiDlvZPmlLnlj5jlvZPliY1VSeacgOWJjemdou+8jOWtkOexu+S4reWPr+S7pemHjeWGmei/meS4quWHveaVsFxuXHQgKi9cblx0cHVibGljIG9uQ2hhbmdlRnJvbnQoZnJvbnQ6Ym9vbGVhbil7fVxuXG5cdC8qKlxuXHQgKiBAemhcblx0ICog5b2T5oyJ6ZSu5oyJ5LiL77yM5a2Q57G75Lit5Y+v5Lul6YeN5YaZ6L+Z5Liq5Ye95pWwXG5cdCAqL1xuXHRwdWJsaWMgb25LZXlQcmVzc2VkKGtleUNvZGU6c3RyaW5nKXsgcmV0dXJuIGZhbHNlOyB9XG5cdFxufVxuXG59XG4iLCIvKlxyXG5Db3B5cmlnaHQgMjAyMSBMdUp1blxyXG5cclxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBcclxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBcclxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyBcclxudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBcclxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCBcclxudG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gXHJcbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBcclxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIFxyXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBcclxuVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgXHJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIFxyXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuKi9cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3VpLWJhc2UudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIGxjYyB7XHJcblxyXG5jb25zdCBUQUcgPSBcImxjYy91aS91aS1hbmltYXRpb24udHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIGV4ZWN1dGVJbkVkaXRNb2RlLCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDnqbrliqjnlLvmnprkuL5cclxuICovXHJcbmV4cG9ydCBlbnVtIFRlbXBBbmltdGlvbkVudW0ge1xyXG5cdCc8Tm9uZT4nID0gMFxyXG59XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIFVJ5Yqo55S757uE5Lu2PGJyLz5cclxuICog5re75Yqg5YiwVUlCYXNl5ZCM6IqC54K55LiK55Sf5pWIXHJcbiAqL1xyXG5AY2NjbGFzcyhcImxjYy5VSUFuaW1hdGlvblwiKVxyXG5AZXhlY3V0ZUluRWRpdE1vZGUoKVxyXG5AbWVudShcImkxOG46bGNjLWZyYW1ld29yay5tZW51LWV4dGVuc2lvbi9VSUFuaW1hdGlvblwiKVxyXG5leHBvcnQgY2xhc3MgVUlBbmltYXRpb24gZXh0ZW5kcyBjYy5Db21wb25lbnQgaW1wbGVtZW50cyBVSUFuaW1hdGlvblBsYXlhYmxlIHtcclxuICAgIFxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIFVJ5Yqo55S7XHJcblx0ICovXHJcblx0QHByb3BlcnR5KGNjLkFuaW1hdGlvbilcclxuXHRfdWlBbmltYXRpb246Y2MuQW5pbWF0aW9uID0gbnVsbDtcclxuXHRAcHJvcGVydHkoe1xyXG5cdFx0dHlwZSA6IGNjLkFuaW1hdGlvbixcclxuXHRcdHRvb2x0aXAgOiAnVUnliqjnlLvnu4Tku7YnXHJcblx0fSlcclxuXHRnZXQgdWlBbmltYXRpb24oKXtcclxuXHRcdHJldHVybiB0aGlzLl91aUFuaW1hdGlvbjtcclxuXHR9XHJcblx0c2V0IHVpQW5pbWF0aW9uKHZhbHVlOmNjLkFuaW1hdGlvbil7XHJcblx0XHRpZih0aGlzLl91aUFuaW1hdGlvbiAhPSB2YWx1ZSl7XHJcblx0XHRcdHRoaXMuX3VpQW5pbWF0aW9uID0gdmFsdWU7XHJcblx0XHRcdHRoaXMudXBkYXRlQW5pbWF0aW9uRW51bSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5omT5byA5Yqo55S7XHJcblx0ICovXHJcblx0QHByb3BlcnR5KHtcclxuXHRcdHR5cGU6Y2MuRW51bShUZW1wQW5pbXRpb25FbnVtKSxcclxuXHRcdHRvb2x0aXAgOiAn5ZyoVUnliqjnlLvnu4Tku7bkuK3vvIzmiZPlvIDliqjnlLvnmoTntKLlvJUnLFxyXG5cdFx0dmlzaWJsZSAoKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMuX3VpQW5pbWF0aW9uICE9IG51bGw7XHJcblx0XHR9XHJcblx0fSlcclxuXHRvcGVuQW5pbWF0aW9uOm51bWJlciA9IFRlbXBBbmltdGlvbkVudW1bXCI8Tm9uZT5cIl07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOaJk+W8gOWKqOeUu+WPjei9rFxyXG5cdCAqL1xyXG5cdEBwcm9wZXJ0eSh7XHJcblx0XHR0b29sdGlwIDogJ+aYr+WQpuWPjei9rOaJk+W8gOWKqOeUuycsXHJcblx0XHR2aXNpYmxlICgpe1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fdWlBbmltYXRpb24gIT0gbnVsbCAmJiB0aGlzLm9wZW5BbmltYXRpb24gIT0gMDtcclxuXHRcdH1cclxuXHR9KVxyXG5cdG9wZW5SZXZlcnNlOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5YWz6Zet5Yqo55S7XHJcblx0ICovXHJcblx0QHByb3BlcnR5KHtcclxuXHRcdHR5cGU6Y2MuRW51bShUZW1wQW5pbXRpb25FbnVtKSxcclxuXHRcdHRvb2x0aXAgOiAn5ZyoVUnliqjnlLvnu4Tku7bkuK3vvIzlhbPpl63liqjnlLvnmoTntKLlvJUnLFxyXG5cdFx0dmlzaWJsZSAoKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMuX3VpQW5pbWF0aW9uICE9IG51bGw7XHJcblx0XHR9XHJcblx0fSlcclxuXHRjbG9zZUFuaW1hdGlvbjpudW1iZXIgPSBUZW1wQW5pbXRpb25FbnVtW1wiPE5vbmU+XCJdO1xyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDlj43ovazlhbPpl63liqjnlLtcclxuXHQgKi9cclxuXHRAcHJvcGVydHkoe1xyXG5cdFx0dG9vbHRpcCA6ICfmmK/lkKblj43ovazlhbPpl63liqjnlLsnLFxyXG5cdFx0dmlzaWJsZSAoKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMuX3VpQW5pbWF0aW9uICE9IG51bGwgJiYgdGhpcy5jbG9zZUFuaW1hdGlvbiAhPSAwO1xyXG5cdFx0fVxyXG5cdH0pXHJcblx0Y2xvc2VSZXZlcnNlOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5pu05paw5Yqo55S75p6a5Li+XHJcblx0ICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUFuaW1hdGlvbkVudW0oKXtcclxuICAgICAgICBpZihDQ19FRElUT1Ipe1xyXG4gICAgICAgICAgICBpZih0aGlzLl91aUFuaW1hdGlvbil7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW51bU1hcDp7W2tleTpzdHJpbmddOm51bWJlcn0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJzxOb25lPicgOiAwXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdWlBbmltYXRpb24uZ2V0Q2xpcHMoKS5mb3JFYWNoKCh2LGkpPT57IGVudW1NYXBbdi5uYW1lXSA9IGkgKyAxOyB9KTtcclxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIGNjLkNsYXNzLkF0dHIuc2V0Q2xhc3NBdHRyKHRoaXMsICdvcGVuQW5pbWF0aW9uJywgJ2VudW1MaXN0JywgY2MuRW51bS5nZXRMaXN0KGVudW1NYXApKTtcclxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIGNjLkNsYXNzLkF0dHIuc2V0Q2xhc3NBdHRyKHRoaXMsICdjbG9zZUFuaW1hdGlvbicsICdlbnVtTGlzdCcsIGNjLkVudW0uZ2V0TGlzdChlbnVtTWFwKSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgY2MuQ2xhc3MuQXR0ci5zZXRDbGFzc0F0dHIodGhpcywgJ29wZW5BbmltYXRpb24nLCAnZW51bUxpc3QnLCBjYy5FbnVtLmdldExpc3QoY2MuRW51bShUZW1wQW5pbXRpb25FbnVtKSkpO1xyXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgY2MuQ2xhc3MuQXR0ci5zZXRDbGFzc0F0dHIodGhpcywgJ2Nsb3NlQW5pbWF0aW9uJywgJ2VudW1MaXN0JywgY2MuRW51bS5nZXRMaXN0KGNjLkVudW0oVGVtcEFuaW10aW9uRW51bSkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUpe1xyXG4gICAgICAgICAgICAgICAgRWRpdG9yLlV0aWxzLnJlZnJlc2hTZWxlY3RlZEluc3BlY3Rvcignbm9kZScsIHRoaXMubm9kZS51dWlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOmihOWKoOi9vVxyXG5cdCAqL1xyXG5cdF9fcHJlbG9hZCgpe1xyXG5cdFx0dGhpcy51cGRhdGVBbmltYXRpb25FbnVtKCk7XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOaSreaUvuWKqOeUu1xyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBhVHlwZSDliqjnlLvnsbvlnosgJ29wZW4nLydjbG9zZSdcclxuXHQgKi9cclxuICAgICBwdWJsaWMgcGxheShhVHlwZTpzdHJpbmcpe1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xyXG5cdFx0XHRpZighdGhpcy5fdWlBbmltYXRpb24pe1xyXG5cdFx0XHRcdHJlc29sdmUobnVsbCk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGxldCBzdGF0ZTpjYy5BbmltYXRpb25TdGF0ZSA9IG51bGw7XHJcblx0XHRcdFx0bGV0IGR1cmF0aW9uOm51bWJlciA9IDA7XHJcblx0XHRcdFx0aWYoYVR5cGUgPT0gJ29wZW4nICYmIHRoaXMub3BlbkFuaW1hdGlvbiA+IDApe1xyXG5cdFx0XHRcdFx0bGV0IGNsaXAgPSB0aGlzLl91aUFuaW1hdGlvbi5nZXRDbGlwcygpW3RoaXMub3BlbkFuaW1hdGlvbiAtIDFdO1xyXG5cdFx0XHRcdFx0c3RhdGUgPSB0aGlzLl91aUFuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZShjbGlwLm5hbWUpO1xyXG5cdFx0XHRcdFx0aWYodGhpcy5vcGVuUmV2ZXJzZSl7XHJcblx0XHRcdFx0XHRcdHN0YXRlLnRpbWUgPSBjbGlwLmR1cmF0aW9uO1xyXG5cdFx0XHRcdFx0XHRzdGF0ZS5zcGVlZCA9IC0xO1xyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdHN0YXRlLnRpbWUgPSAwO1xyXG5cdFx0XHRcdFx0XHRzdGF0ZS5zcGVlZCA9IDE7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRkdXJhdGlvbiA9IGNsaXAuZHVyYXRpb247XHJcblx0XHRcdFx0fWVsc2UgaWYoYVR5cGUgPT0gJ2Nsb3NlJyAmJiB0aGlzLmNsb3NlQW5pbWF0aW9uID4gMCl7XHJcblx0XHRcdFx0XHRsZXQgY2xpcCA9IHRoaXMuX3VpQW5pbWF0aW9uLmdldENsaXBzKClbdGhpcy5jbG9zZUFuaW1hdGlvbiAtIDFdO1xyXG5cdFx0XHRcdFx0c3RhdGUgPSB0aGlzLl91aUFuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZShjbGlwLm5hbWUpO1xyXG5cdFx0XHRcdFx0aWYodGhpcy5jbG9zZVJldmVyc2Upe1xyXG5cdFx0XHRcdFx0XHRzdGF0ZS50aW1lID0gY2xpcC5kdXJhdGlvbjtcclxuXHRcdFx0XHRcdFx0c3RhdGUuc3BlZWQgPSAtMTtcclxuXHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRzdGF0ZS50aW1lID0gMDtcclxuXHRcdFx0XHRcdFx0c3RhdGUuc3BlZWQgPSAxO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZHVyYXRpb24gPSBjbGlwLmR1cmF0aW9uO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZighc3RhdGUpe1xyXG5cdFx0XHRcdFx0cmVzb2x2ZShudWxsKTtcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHN0YXRlLnBsYXkoKTtcclxuXHRcdFx0XHRcdGNjLnR3ZWVuKHRoaXMubm9kZSkuZGVsYXkoZHVyYXRpb24pLmNhbGwocmVzb2x2ZSkuc3RhcnQoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxufVxyXG4iLCIvKlxyXG5Db3B5cmlnaHQgMjAyMSBMdUp1blxyXG5cclxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBcclxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBcclxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyBcclxudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBcclxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCBcclxudG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gXHJcbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBcclxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIFxyXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBcclxuVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgXHJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIFxyXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuKi9cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9iYXNlL2xjYy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9iYXNlL3N0YXRlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3V0aWxzL2pzLnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBsY2Mge1xyXG5cclxuY29uc3QgVEFHID0gXCJsY2MvdWkvdWktbWFuYWdlci50c1wiO1xyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDntKLlvJXot6/lvoRcclxuICovXHJcbmV4cG9ydCBuYW1lc3BhY2UgSU5ERVhQQVRIIHtcclxuXHRcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiBVSeeVjOmdolxyXG5cdCAqL1xyXG5cdGV4cG9ydCBsZXQgVUkgPSBcInVpXCI7XHJcbn07XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIFVJ5qC56IqC54K55ZCNXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVUlST09UX05BTUUgPSAnVUlNYW5hZ2VyJztcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICogVUnmoLnoioJaSU5ERVhcclxuICovXHJcbmV4cG9ydCBjb25zdCBVSVJPT1RfWklOREVYID0gMTAwMDtcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog6buY6K6k55S75biDXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9DQU5WQVMgPSBcImxjY19DYW52YXNcIjtcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5LyY5YWI57qn5pyA5aSn5YC8XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUFJJT1JJVFlfTUFYID0gMTAwMDtcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICogVUnphY3nva5cclxuICovXHJcbmludGVyZmFjZSBVSUNvbmZpZyB7XHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6aKE5Yi25L2TXHJcblx0ICovXHJcblx0cHJlZmFiOmNjLlByZWZhYjtcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6YWN572uXHJcblx0ICovXHJcblx0Y29uZmlnOntcclxuXHRcdC8qKlxyXG5cdFx0ICogQHpoXHJcblx0XHQgKiDpooTliLbkvZPmlofku7ZcclxuXHRcdCAqL1xyXG5cdFx0ZmlsZTpzdHJpbmc7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAemhcclxuXHRcdCAqIOWbuuWumuS8mOWFiOe6p1xyXG5cdFx0ICovXHJcblx0XHRwcmlvcml0eT86bnVtYmVyO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHpoXHJcblx0XHQgKiDmiYDlsZ7nlLvluINcclxuXHRcdCAqL1xyXG5cdFx0Y2FudmFzPzpzdHJpbmc7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6aKE5Yqg6L29XHJcblx0ICovXHJcblx0cHJlbG9hZD86Ym9vbGVhbjtcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICogVUnlr7nosaFcclxuXHQgKi9cclxuXHRVSTpVSUJhc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog55S75biD6YWN572uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIENhbnZhc0NvbmZpZyB7XHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog55S75biD6IqC54K5XHJcblx0ICovXHJcblx0Y2FudmFzOmNjLk5vZGU7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIFVJ6KGoXHJcblx0ICovXHJcblx0VUlzOntba2V5OnN0cmluZ106VUlCYXNlfTtcclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5omT5byAVUnooahcclxuXHQgKi9cclxuXHRvcGVuVUlzOntba2V5OnN0cmluZ106VUlCYXNlfTtcclxuXHJcbiAgICAvKipcclxuXHQgKiBAemhcclxuICAgICAqIOW9k+WJjVVJ5LyY5YWI57qnXHJcbiAgICAgKi9cclxuICAgIFVJUHJpb3JpdHk6bnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG5cdCAqIEB6aFxyXG4gICAgICog5pyA5YmN6Z2i55qEVUnlr7nosaFcclxuICAgICAqL1xyXG5cdGZyb250VUk6VUlCYXNlO1xyXG59XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIFVJ566h55CG5ZmoXHJcbiAqL1xyXG5jbGFzcyBVSU1hbmFnZXIge1xyXG4gICAgXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog55S75biD5pig5bCE6KGoXHJcblx0ICovXHJcblx0cHJpdmF0ZSBfY2FudmFzTWFwOntba2V5OnN0cmluZ106Q2FudmFzQ29uZmlnfSA9IGpzLmNyZWF0ZU1hcCgpO1xyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIFVJ6YWN572u6KGoXHJcblx0ICovXHJcblx0cHJpdmF0ZSBfVUlDb25maWdzOntba2V5OnN0cmluZ106VUlDb25maWd9ID0ganMuY3JlYXRlTWFwKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVSeagueiKgueCuVxyXG4gICAgICovXHJcblx0cHJpdmF0ZSBfdWlSb290OmNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDnlLvluIPkvJjlhYjnuqdcclxuXHQgKi9cclxuXHRwcml2YXRlIF9jYW52YXNQcmlvcml0eTpudW1iZXIgPSAwO1xyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiBVSeaTjeS9nOihqFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgX3VpT3BlcmF0aW9uczp7W2tleTpzdHJpbmddOkZ1bmN0aW9uW119ID0ganMuY3JlYXRlTWFwKCk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIFVJ5qCIXHJcblx0ICovXHJcblx0cHJpdmF0ZSBfdWlTdGFjazpzdHJpbmdbXSA9IFtdO1xyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOaehOmAoOWHveaVsFxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHRzdGF0ZS5vbignaW5pdGlhbGl6ZScsICgpPT57XHJcblx0XHRcdGRvaW5nLnN0YXRlSW5pdGlhbGl6ZS5pbigoKT0+e1xyXG5cdFx0XHRcdHRoaXMuX2NhbnZhc01hcCA9IGpzLmNyZWF0ZU1hcCgpO1xyXG5cdFx0XHRcdHRoaXMuX1VJQ29uZmlncyA9IGpzLmNyZWF0ZU1hcCgpO1xyXG5cdFx0XHRcdHRoaXMuX3VpUm9vdCA9IG51bGw7XHJcblx0XHRcdFx0dGhpcy5fY2FudmFzUHJpb3JpdHkgPSAwO1xyXG5cdFx0XHRcdHRoaXMuX3VpT3BlcmF0aW9ucyA9IGpzLmNyZWF0ZU1hcCgpO1xyXG5cdFx0XHRcdHRoaXMuX3VpU3RhY2sgPSBbXTtcclxuXHRcdFx0XHRpbmRleE1nci5vbihcImluZGV4ZXNfcmVtb3ZlZFwiLCB0aGlzLm9uSW5kZXhlc1JlbW92ZWQsIHRoaXMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0c3RhdGUub24oJ3JlbGVhc2UnLCAoKT0+e1xyXG5cdFx0XHRkb2luZy5zdGF0ZVJlbGVhc2UuaW4oKCk9PntcclxuXHRcdFx0XHRpbmRleE1nci50YXJnZXRPZmYodGhpcyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOiOt+W+l1VJ5qC56IqC54K5XHJcblx0ICovXHJcblx0cHVibGljIGdldFVJUm9vdCgpe1xyXG5cdFx0aWYoIXRoaXMuX3VpUm9vdCl7XHJcblx0XHRcdHRoaXMuX3VpUm9vdCA9IG5ldyBjYy5Ob2RlKFVJUk9PVF9OQU1FKTtcclxuXHRcdFx0Y2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5hZGRDaGlsZCh0aGlzLl91aVJvb3QsIFVJUk9PVF9aSU5ERVgpO1xyXG5cdFx0XHRjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLl91aVJvb3QpO1xyXG5cdFx0XHR0aGlzLl91aVJvb3Quc2V0QW5jaG9yUG9pbnQoY2MudjIoMCwwKSk7XHJcblx0XHRcdHRoaXMuX3VpUm9vdC5zZXRQb3NpdGlvbihjYy52MigwLDApKTtcclxuXHRcdFx0dGhpcy5fdWlSb290LnNldENvbnRlbnRTaXplKGNjLndpblNpemUpO1xyXG5cdFx0fTFcclxuXHRcdHJldHVybiB0aGlzLl91aVJvb3Q7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDojrflvpfnlLvluINcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gY25hbWUgLSDnlLvluIPlkI3np7BcclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0Q2FudmFzKGNuYW1lOnN0cmluZyA9IERFRkFVTFRfQ0FOVkFTKXtcclxuXHRcdGxldCBjYW52YXNDb25maWcgPSB0aGlzLl9jYW52YXNNYXBbY25hbWVdO1xyXG5cdFx0aWYoIWNhbnZhc0NvbmZpZyl7XHJcblx0XHRcdGxldCBjYW52YXNOb2RlID0gbmV3IGNjLk5vZGUoY25hbWUpO1xyXG5cdFx0XHR0aGlzLmdldFVJUm9vdCgpLmFkZENoaWxkKGNhbnZhc05vZGUpO1xyXG5cdFx0XHRjYW52YXNOb2RlLnNldEFuY2hvclBvaW50KGNjLnYyKDAsMCkpO1xyXG5cdFx0XHRsZXQgd2lkZ2V0ID0gY2FudmFzTm9kZS5hZGRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuXHRcdFx0d2lkZ2V0LmFsaWduTW9kZSA9IGNjLldpZGdldC5BbGlnbk1vZGUuT05fV0lORE9XX1JFU0laRTtcclxuXHRcdFx0d2lkZ2V0LmlzQWxpZ25Ub3AgPSB0cnVlO1xyXG5cdFx0XHR3aWRnZXQuaXNBbGlnbkJvdHRvbSA9IHRydWU7XHJcblx0XHRcdHdpZGdldC5pc0FsaWduTGVmdCA9IHRydWU7XHJcblx0XHRcdHdpZGdldC5pc0FsaWduUmlnaHQgPSB0cnVlO1xyXG5cdFx0XHR3aWRnZXQudG9wID0gMDtcclxuXHRcdFx0d2lkZ2V0LmJvdHRvbSA9IDA7XHJcblx0XHRcdHdpZGdldC5sZWZ0ID0gMDtcclxuXHRcdFx0d2lkZ2V0LnJpZ2h0ID0gMDtcclxuXHRcdFx0Y2FudmFzQ29uZmlnID0ge1xyXG5cdFx0XHRcdGNhbnZhcyA6IGNhbnZhc05vZGUsXHJcblx0XHRcdFx0VUlzIDoganMuY3JlYXRlTWFwKCksXHJcblx0XHRcdFx0b3BlblVJcyA6IGpzLmNyZWF0ZU1hcCgpLFxyXG5cdFx0XHRcdFVJUHJpb3JpdHkgOiAxLFxyXG5cdFx0XHRcdGZyb250VUkgOiBudWxsLFxyXG5cdFx0XHR9O1xyXG5cdFx0XHR0aGlzLl9jYW52YXNNYXBbY25hbWVdID0gY2FudmFzQ29uZmlnO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGNhbnZhc0NvbmZpZztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOiuvue9ruaMh+WumueUu+W4g+WcqOacgOWJjemdolxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBjbmFtZSAtIOeUu+W4g+WQjeensFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzZXRGcm9udENhbnZhcyhjbmFtZTpzdHJpbmcpe1xyXG5cdFx0bGV0IGNhbnZhc0NvbmZpZyA9IHRoaXMuX2NhbnZhc01hcFtjbmFtZV07XHJcblx0XHRpZihjYW52YXNDb25maWcpe1xyXG5cdFx0XHRjYW52YXNDb25maWcuY2FudmFzLnpJbmRleCA9IHRoaXMuX2NhbnZhc1ByaW9yaXR5ICsrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDlvZPnp7vpmaTntKLlvJVcclxuXHQgKiBcclxuXHQgKiBAaW50ZXJuYWxcclxuXHQgKi9cclxuXHRvbkluZGV4ZXNSZW1vdmVkKCl7XHJcblx0XHR0aGlzLnJlbGVhc2VJbnZhbGlkVUlzKCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDph4rmlL7ml6DmlYhVSVxyXG5cdCAqL1xyXG5cdHB1YmxpYyByZWxlYXNlSW52YWxpZFVJcygpe1xyXG5cdFx0bGV0IHVpZmlsZXMgPSBpbmRleE1nci5nZXRJbmRleChJTkRFWFBBVEguVUkpIHx8IGpzLmNyZWF0ZU1hcCgpO1xyXG5cdFx0Zm9yKGxldCB1aW5hbWUgb2YgT2JqZWN0LmtleXModGhpcy5fVUlDb25maWdzKSl7XHJcblx0XHRcdGlmKCF1aWZpbGVzW3VpbmFtZV0pe1xyXG5cdFx0XHRcdHRoaXMucmVsZWFzZVVJKHVpbmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOiOt+WPluaJgOaciVVJXHJcblx0ICovXHJcblx0cHVibGljIGdldEFsbFVJcygpe1xyXG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKGluZGV4TWdyLmdldEluZGV4KElOREVYUEFUSC5VSSkpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog6YeK5pS+5oyH5a6aVUlcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gdWluYW1lIC0gdWnlkI3np7BcclxuXHQgKiBAcGFyYW0gcHJlbG9hZCAtIOmihOWKoOi9vVxyXG5cdCAqL1xyXG5cdHB1YmxpYyByZWxlYXNlVUkodWluYW1lOnN0cmluZywgcHJlbG9hZDpib29sZWFuID0gZmFsc2Upe1xyXG5cdFx0bGV0IHVpY29uZiA9IHRoaXMuX1VJQ29uZmlnc1t1aW5hbWVdO1xyXG5cdFx0aWYodWljb25mICYmICghdWljb25mLnByZWxvYWQgfHwgcHJlbG9hZCkpe1xyXG5cdFx0XHR0aGlzLmNsb3NlVUkodWluYW1lLCB0cnVlKTtcclxuXHRcdFx0dGhpcy5fcmVsZWFzZVVJKHVpbmFtZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDph4rmlL5VSeaVsOe7hFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB1aW5hbWVzIC0gdWnlkI3np7DmlbDnu4RcclxuXHQgKiBAcGFyYW0gcHJlbG9hZCAtIOmihOWKoOi9vVxyXG5cdCAqL1xyXG5cdHB1YmxpYyByZWxlYXNlVUlzKHVpbmFtZXM6c3RyaW5nW10sIHByZWxvYWQ6Ym9vbGVhbiA9IGZhbHNlKXtcclxuXHRcdGZvcihsZXQgdWluYW1lIG9mIHVpbmFtZXMpe1xyXG5cdFx0XHR0aGlzLnJlbGVhc2VVSSh1aW5hbWUsIHByZWxvYWQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuICAgIC8qKlxyXG5cdCAqIEB6aFxyXG4gICAgICog6aKE5Yqg6L29VUlcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gdWluYW1lIC0gdWnlkI3np7BcclxuICAgICAqL1xyXG5cdHB1YmxpYyBhc3luYyBwcmVsb2FkVUkodWluYW1lOnN0cmluZyl7XHJcblx0XHRsZXQgdWljb25mID0gYXdhaXQgdGhpcy5nZXRVSUNvbmZpZyh1aW5hbWUpO1xyXG5cdFx0aWYodWljb25mKXtcclxuXHRcdFx0dGhpcy5fZ2V0VUkodWluYW1lLCB1aWNvbmYsIHRydWUpO1xyXG5cdFx0XHR1aWNvbmYucHJlbG9hZCA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG4gICAgXHJcbiAgICAvKipcclxuXHQgKiBAemhcclxuICAgICAqIOmihOWKoOi9vVVJ5pWw57uEXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHVpbmFtZXMgLSB1aeWQjeensOaVsOe7hFxyXG5cdCAqIEBwYXJhbSBwcm9ncmVzcyAtIOi/m+W6plxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgcHJlbG9hZFVJcyh1aW5hbWVzOnN0cmluZ1tdLCBwcm9ncmVzcyA9IChwOm51bWJlcik9Pnt9KXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwLCBsZW4gPSB1aW5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKXtcclxuXHRcdFx0YXdhaXQgdGhpcy5wcmVsb2FkVUkodWluYW1lc1tpXSk7XHJcbiAgICAgICAgICAgIHByb2dyZXNzKChpICsgMSkgLyBsZW4pO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOiOt+W+l1VJ6YWN572uXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHVpbmFtZSAtIFVJ5ZCN56ewXHJcblx0ICovXHJcblx0cHJpdmF0ZSBhc3luYyBnZXRVSUNvbmZpZyh1aW5hbWU6c3RyaW5nKXtcclxuXHRcdGxldCB1aWNvbmYgPSB0aGlzLl9VSUNvbmZpZ3NbdWluYW1lXTtcclxuXHRcdGlmKCF1aWNvbmYpe1xyXG5cdFx0XHRsZXQgY29uZmlnID0gaW5kZXhNZ3IuZ2V0SW5kZXgoSU5ERVhQQVRILlVJICsgXCIvXCIgKyB1aW5hbWUpO1xyXG5cdFx0XHRpZihjb25maWcpe1xyXG5cdFx0XHRcdGxldCBwcmVmYWIgPSBhd2FpdCBwYWNrTWdyLmxvYWRQcmVmYWIoY29uZmlnLmZpbGUpO1xyXG5cdFx0XHRcdHVpY29uZiA9IHtcclxuXHRcdFx0XHRcdHByZWZhYiA6IHByZWZhYixcclxuXHRcdFx0XHRcdGNvbmZpZyA6IGNvbmZpZyxcclxuXHRcdFx0XHRcdFVJIDogbnVsbCxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHByZWZhYi5hZGRSZWYoKTtcclxuXHRcdFx0XHR0aGlzLl9VSUNvbmZpZ3NbdWluYW1lXSA9IHVpY29uZjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHVpY29uZjtcclxuXHR9XHJcblx0XHJcbiAgICAvKipcclxuXHQgKiBAemhcclxuICAgICAqIOiOt+W+l+aMh+WumlVJXHJcblx0ICogXHJcbiAgICAgKiBAcGFyYW0gdWluYW1lIC0gVUnlkI3np7BcclxuICAgICAqIEBwYXJhbSBjcmVhdGUgLSDlpoLmnpzkuI3lrZjlnKjvvIzliJnliJvlu7pcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGdldFVJKHVpbmFtZTpzdHJpbmcsIGNyZWF0ZTpib29sZWFuID0gZmFsc2Upe1xyXG5cdFx0bGV0IHVpY29uZiA9IGF3YWl0IHRoaXMuZ2V0VUlDb25maWcodWluYW1lKTtcclxuXHRcdHJldHVybiB0aGlzLl9nZXRVSSh1aW5hbWUsIHVpY29uZiwgY3JlYXRlKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG4gICAgICog6I635b6X5oyH5a6aVUlcclxuXHQgKiBcclxuICAgICAqIEBwYXJhbSB1aW5hbWUgLSBVSeWQjeensFxyXG4gICAgICogQHBhcmFtIGNyZWF0ZSAtIOWmguaenOS4jeWtmOWcqO+8jOWImeWIm+W7ulxyXG4gICAgICovXHJcblx0cHJpdmF0ZSBfZ2V0VUkodWluYW1lOnN0cmluZywgdWljb25mOlVJQ29uZmlnLCBjcmVhdGU6Ym9vbGVhbiA9IGZhbHNlKXtcclxuXHRcdGlmKHVpY29uZil7XHJcblx0XHRcdGxldCB1aSA9IHVpY29uZi5VSTtcclxuXHRcdFx0aWYoIXVpICYmIGNyZWF0ZSl7XHJcblx0XHRcdFx0bGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh1aWNvbmYucHJlZmFiKTtcclxuXHRcdFx0XHRsZXQgY2FudmFzID0gdGhpcy5nZXRDYW52YXModWljb25mLmNvbmZpZy5jYW52YXMpXHJcblx0XHRcdFx0Y2FudmFzLmNhbnZhcy5hZGRDaGlsZChub2RlKTtcclxuXHRcdFx0XHRub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdHVpID0gbm9kZS5nZXRDb21wb25lbnQoVUlCYXNlKSB8fCBub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oVUlCYXNlKTtcclxuXHRcdFx0XHRpZighdWkpe1xyXG5cdFx0XHRcdFx0dWkgPSBub2RlLmFkZENvbXBvbmVudChVSUJhc2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR1aS5fc2V0Um9vdE5vZGUobm9kZSk7XHJcblx0XHRcdFx0dWkuX3NldENhbnZhcyhjYW52YXMpO1xyXG5cdFx0XHRcdHVpLl9zZXRVSU5hbWUodWluYW1lKTtcclxuXHRcdFx0XHRpZih1aWNvbmYuY29uZmlnLnByaW9yaXR5ICE9IG51bGwpe1xyXG5cdFx0XHRcdFx0dWkuc2V0Rml4ZWRQcmlvcml0eSh1aWNvbmYuY29uZmlnLnByaW9yaXR5KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dWkuX29uVUlDcmVhdGUoKTtcclxuXHRcdFx0XHR1aWNvbmYuVUkgPSB1aTtcclxuXHRcdFx0XHRjYW52YXMuVUlzW3VpbmFtZV0gPSB1aTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdWk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOmHiuaUvuaMh+WumlVJXHJcblx0ICogXHJcbiAgICAgKiBAcGFyYW0gdWluYW1lIC0gVUnlkI3np7BcclxuXHQgKi9cclxuXHRwcml2YXRlIF9yZWxlYXNlVUkodWluYW1lOnN0cmluZyl7XHJcblx0XHRsZXQgdWljb25mID0gdGhpcy5fVUlDb25maWdzW3VpbmFtZV07XHJcblx0XHRpZih1aWNvbmYpe1xyXG5cdFx0XHRsZXQgdWkgPSB1aWNvbmYuVUk7XHJcblx0XHRcdGlmKHVpKXtcclxuXHRcdFx0XHRsZXQgY2FudmFzID0gdWkuZ2V0Q2FudmFzKCk7XHJcblx0XHRcdFx0dWkub25VSVJlbGVhc2UoKTtcclxuXHRcdFx0XHR1aS5ub2RlLmRlc3Ryb3koKTtcclxuXHRcdFx0XHRkZWxldGUgY2FudmFzLlVJc1t1aW5hbWVdO1xyXG5cdFx0XHRcdHVpY29uZi5wcmVmYWIuZGVjUmVmKCk7XHJcblx0XHRcdFx0dWljb25mLlVJID0gbnVsbDtcclxuXHRcdFx0XHRkZWxldGUgdGhpcy5fVUlDb25maWdzW3VpbmFtZV07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG4gICAgLyoqXHJcblx0ICogQHpoXHJcbiAgICAgKiDorr7nva7mjIflrppVSeWIsOacgOWJjemdolxyXG5cdCAqIFxyXG4gICAgICogQHBhcmFtIHVpIC0g5oyH5a6aVUlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzZXRGcm9udCh1aTpVSUJhc2Upe1xyXG4gICAgICAgIGlmKHVpKXtcclxuXHRcdFx0bGV0IGNhbnZhcyA9IHVpLmdldENhbnZhcygpO1xyXG4gICAgICAgICAgICBpZih1aSAhPT0gY2FudmFzLmZyb250VUkpe1xyXG5cdFx0XHRcdGxldCBwcmlvcml0eSA9IHVpLmdldEZpeGVkUHJpb3JpdHkoKTtcclxuXHRcdFx0XHRpZihwcmlvcml0eSA9PSBudWxsKXtcclxuXHRcdFx0XHRcdGNhbnZhcy5VSVByaW9yaXR5ICs9IDE7XHJcblx0XHRcdFx0XHRwcmlvcml0eSA9IGNhbnZhcy5VSVByaW9yaXR5O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR1aS5ub2RlLnpJbmRleCA9IHByaW9yaXR5O1xyXG4gICAgICAgICAgICAgICAgaWYoY2FudmFzLmZyb250VUkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy5mcm9udFVJLm9uQ2hhbmdlRnJvbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FudmFzLmZyb250VUkgPSB1aTtcclxuICAgICAgICAgICAgICAgIGNhbnZhcy5mcm9udFVJLm9uQ2hhbmdlRnJvbnQodHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYoY2FudmFzLlVJUHJpb3JpdHkgPj0gUFJJT1JJVFlfTUFYKXtcclxuXHRcdFx0XHR0aGlzLnNvcnRPcGVuZWRVSXMoY2FudmFzKTtcclxuXHRcdFx0fVxyXG4gICAgICAgIH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOaOkuW6j+aJk+W8gOeahFVJXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGNhbnZhcyAtIOeUu+W4g+WvueixoVxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzb3J0T3BlbmVkVUlzKGNhbnZhczpDYW52YXNDb25maWcpe1xyXG5cdFx0bGV0IG91aXM6VUlCYXNlW10gPSBbXTtcclxuXHRcdGZvcihsZXQgdW5hbWUgaW4gY2FudmFzLm9wZW5VSXMpe1xyXG5cdFx0XHRsZXQgdWkgPSBjYW52YXMub3BlblVJc1t1bmFtZV07XHJcblx0XHRcdGlmKHVpLmdldEZpeGVkUHJpb3JpdHkoKSA9PSBudWxsKXtcclxuXHRcdFx0XHRvdWlzLnB1c2godWkpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRvdWlzLnNvcnQoKGEsYik9PntcclxuXHRcdFx0cmV0dXJuIGEubm9kZS56SW5kZXggLSBiLm5vZGUuekluZGV4O1xyXG5cdFx0fSk7XHJcblx0XHRjYW52YXMuVUlQcmlvcml0eSA9IG91aXMubGVuZ3RoO1xyXG5cdFx0Zm9yKGxldCBpID0gMCwgbGVuID0gb3Vpcy5sZW5ndGg7IGkgPCBsZW47IGkrKyl7XHJcblx0XHRcdG91aXNbaV0ubm9kZS56SW5kZXggPSAoaSArIDEpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5oqKVUnmlL7nva7liLDmnIDliY3pnaJcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gdWluYW1lIC0gVUnlkI3np7BcclxuXHQgKi9cclxuXHRwdWJsaWMgc2V0RnJvbnRCeU5hbWUodWluYW1lOnN0cmluZyl7XHJcblx0XHRsZXQgdWljb25mID0gdGhpcy5fVUlDb25maWdzW3VpbmFtZV07XHJcblx0XHRpZih1aWNvbmYgJiYgdWljb25mLlVJKXtcclxuXHRcdFx0dGhpcy5zZXRGcm9udCh1aWNvbmYuVUkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5re75YqgVUnmk43kvZxcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gdWluYW1lIC0gVUnlkI3np7BcclxuXHQgKiBAcGFyYW0gb3BlcmF0aW9uIC0g5pON5L2c5Ye95pWwXHJcblx0ICovXHJcblx0cHJpdmF0ZSBhZGRVSU9wZXJhdGlvbih1aW5hbWU6c3RyaW5nLCBvcGVyYXRpb246RnVuY3Rpb24pIHtcclxuXHRcdGxldCBvcGVyYXRpb25zID0gdGhpcy5fdWlPcGVyYXRpb25zW3VpbmFtZV07XHJcblx0XHRpZighb3BlcmF0aW9ucyl7XHJcblx0XHRcdG9wZXJhdGlvbnMgPSBbXTtcclxuXHRcdFx0dGhpcy5fdWlPcGVyYXRpb25zW3VpbmFtZV0gPSBvcGVyYXRpb25zO1xyXG5cdFx0fVxyXG5cdFx0b3BlcmF0aW9ucy5wdXNoKG9wZXJhdGlvbik7XHJcblx0XHRpZihvcGVyYXRpb25zLmxlbmd0aCA9PSAxKXtcclxuXHRcdFx0b3BlcmF0aW9uc1swXSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5omn6KGM5LiL5LiqVUnmk43kvZxcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gdWluYW1lIC0gVUnlkI3np7BcclxuXHQgKi9cclxuXHRwcml2YXRlIG5leHRVSU9wZXJhdGlvbih1aW5hbWU6c3RyaW5nKXtcclxuXHRcdGxldCBvcGVyYXRpb25zID0gdGhpcy5fdWlPcGVyYXRpb25zW3VpbmFtZV07XHJcblx0XHRpZihvcGVyYXRpb25zLmxlbmd0aCA+IDApe1xyXG5cdFx0XHRvcGVyYXRpb25zLnNoaWZ0KCk7XHJcblx0XHR9XHJcblx0XHRpZihvcGVyYXRpb25zLmxlbmd0aCA+IDApe1xyXG5cdFx0XHRvcGVyYXRpb25zWzBdKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDmiZPlvIDmjIflrppVSVxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB1aW5hbWUgLSBVSeWQjeensFxyXG5cdCAqIEBwYXJhbSBhcmdzIC0g5omT5byA5Y+C5pWwXHJcblx0ICovXHJcblx0cHJpdmF0ZSBhc3luYyBfb3BlblVJKHVpbmFtZTpzdHJpbmcsIC4uLmFyZ3MgOiBhbnlbXSl7XHJcblx0XHRsZXQgdWk6VUlCYXNlID0gbnVsbDtcclxuXHJcblx0XHRsZXQgdWljb25mID0gYXdhaXQgdGhpcy5nZXRVSUNvbmZpZyh1aW5hbWUpO1xyXG5cdFx0aWYodWljb25mKXtcclxuXHRcdFx0dWkgPSB1aWNvbmYuVUk7XHJcblx0XHRcdGlmKCF1aSl7XHJcblx0XHRcdFx0dWkgPSB0aGlzLl9nZXRVSSh1aW5hbWUsIHVpY29uZiwgdHJ1ZSk7XHJcblx0XHRcdFx0aWYodWkpe1xyXG5cdFx0XHRcdFx0bGV0IGNhbnZhcyA9IHVpLmdldENhbnZhcygpO1xyXG5cdFx0XHRcdFx0Y2FudmFzLm9wZW5VSXNbdWluYW1lXSA9IHVpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZih1aSl7XHJcblx0XHRcdFx0dGhpcy5zZXRGcm9udCh1aSk7XHJcblx0XHRcdFx0dWkuc2V0QWN0aXZlKHRydWUpO1xyXG5cdFx0XHRcdHVpLm9uT3BlbiguLi5hcmdzKTtcclxuXHRcdFx0XHRhd2FpdCB1aS5wbGF5VUlBbmltYXRpb24oJ29wZW4nKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB1aTtcclxuXHR9XHJcblx0XHJcbiAgICAvKipcclxuXHQgKiBAemhcclxuICAgICAqIOaJk+W8gOaMh+WumlVJXHJcblx0ICogXHJcbiAgICAgKiBAcGFyYW0gdWluYW1lIC0gVUnlkI3np7BcclxuXHQgKiBAcGFyYW0gYXJncyAtIOaJk+W8gOWPguaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3BlblVJKHVpbmFtZTpzdHJpbmcsIC4uLmFyZ3MgOiBhbnlbXSl7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2U8VUlCYXNlPigocmVzb2x2ZSk9PntcclxuXHRcdFx0dGhpcy5hZGRVSU9wZXJhdGlvbih1aW5hbWUsIGFzeW5jICgpPT57XHJcblx0XHRcdFx0bGV0IHVpID0gYXdhaXQgdGhpcy5fb3BlblVJKHVpbmFtZSwgLi4uYXJncyk7XHJcblx0XHRcdFx0dGhpcy5uZXh0VUlPcGVyYXRpb24odWluYW1lKTtcclxuXHRcdFx0XHRyZXNvbHZlKHVpKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcbiAgICAvKipcclxuXHQgKiBAemhcclxuICAgICAqIOWFs+mXreaMh+WumlVJXHJcblx0ICogXHJcbiAgICAgKiBAcGFyYW0gdWluYW1lIC0gVUnlkI3np7BcclxuXHQgKiBAcGFyYW0gcmVsZWFzZSAtIOmHiuaUvuWvueixoVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIF9jbG9zZVVJKHVpbmFtZTpzdHJpbmcsIHJlbGVhc2U6Ym9vbGVhbiA9IGZhbHNlKXtcclxuXHRcdGxldCB1aWNvbmYgPSB0aGlzLl9VSUNvbmZpZ3NbdWluYW1lXTtcclxuXHRcdGlmKHVpY29uZil7XHJcblx0XHRcdGxldCB1aSA9IHVpY29uZi5VSTtcclxuXHRcdFx0aWYodWkpe1xyXG5cdFx0XHRcdGxldCBjYW52YXMgPSB1aS5nZXRDYW52YXMoKTtcclxuXHRcdFx0XHRhd2FpdCB1aS5wbGF5VUlBbmltYXRpb24oJ2Nsb3NlJyk7XHJcblx0XHRcdFx0dWkub25DbG9zZSgpO1xyXG5cdFx0XHRcdHVpLnNldEFjdGl2ZShmYWxzZSk7XHJcblx0XHRcdFx0ZGVsZXRlIGNhbnZhcy5vcGVuVUlzW3VpbmFtZV07XHJcblx0XHRcdFx0aWYodWkgPT09IGNhbnZhcy5mcm9udFVJKXtcclxuXHRcdFx0XHRcdGxldCBuZnVpOlVJQmFzZSA9IG51bGw7XHJcblx0XHRcdFx0XHRmb3IobGV0IHVpbiBpbiBjYW52YXMub3BlblVJcyl7XHJcblx0XHRcdFx0XHRcdGxldCBvcHVpID0gY2FudmFzLm9wZW5VSXNbdWluXTtcclxuXHRcdFx0XHRcdFx0aWYoKG9wdWkgIT09IGNhbnZhcy5mcm9udFVJKSAmJiAoIW5mdWkgfHwgXHJcblx0XHRcdFx0XHRcdFx0bmZ1aS5ub2RlLnpJbmRleCA8IG9wdWkubm9kZS56SW5kZXgpICl7XHJcblx0XHRcdFx0XHRcdFx0bmZ1aSA9IG9wdWk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMuc2V0RnJvbnQobmZ1aSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmKHJlbGVhc2Upe1xyXG5cdFx0XHRcdFx0dGhpcy5fcmVsZWFzZVVJKHVpbmFtZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG4gICAgLyoqXHJcblx0ICogQHpoXHJcbiAgICAgKiDlhbPpl63mjIflrppVSVxyXG5cdCAqIFxyXG4gICAgICogQHBhcmFtIHVpbmFtZSAtIFVJ5ZCN56ewXHJcblx0ICogQHBhcmFtIHJlbGVhc2UgLSDph4rmlL7lr7nosaFcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsb3NlVUkodWluYW1lOnN0cmluZywgcmVsZWFzZTpib29sZWFuID0gZmFsc2Upe1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUpPT57XHJcblx0XHRcdHRoaXMuYWRkVUlPcGVyYXRpb24odWluYW1lLCBhc3luYyAoKT0+e1xyXG5cdFx0XHRcdGF3YWl0IHRoaXMuX2Nsb3NlVUkodWluYW1lLCByZWxlYXNlKTtcclxuXHRcdFx0XHR0aGlzLm5leHRVSU9wZXJhdGlvbih1aW5hbWUpO1xyXG5cdFx0XHRcdHJlc29sdmUodWluYW1lKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOWFs+mXrVVJ5pWw57uEXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHVpbmFtZXMgLSBVSeWQjeensOaVsOe7hFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjbG9zZVVJcyh1aW5hbWVzOnN0cmluZ1tdLCByZWxlYXNlOmJvb2xlYW4gPSBmYWxzZSl7XHJcblx0XHRmb3IgKGxldCB1aW4gb2YgdWluYW1lcyl7XHJcblx0XHRcdHRoaXMuY2xvc2VVSSh1aW4sIHJlbGVhc2UpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiDlhbPpl63miYDmnIlVSVxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBleGNlcHRzIC0g5o6S6ZmkVUnmlbDnu4RcclxuXHQgKi9cclxuXHRwdWJsaWMgY2xvc2VBbGxVSShleGNlcHRzPzpzdHJpbmdbXSwgcmVsZWFzZTpib29sZWFuID0gZmFsc2Upe1xyXG5cdFx0T2JqZWN0LmtleXModGhpcy5fVUlDb25maWdzKS5mb3JFYWNoKCh1aW5hbWUpPT57XHJcblx0XHRcdGlmKCFleGNlcHRzIHx8IGV4Y2VwdHMuaW5kZXhPZih1aW5hbWUpID09IC0xKXtcclxuXHRcdFx0XHR0aGlzLmNsb3NlVUkodWluYW1lLCByZWxlYXNlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOS9v+eUqOagiOaWueW8j+aJk+W8gFVJXHJcblx0ICogXHJcbiAgICAgKiBAcGFyYW0gdWluYW1lIC0gVUnlkI3np7BcclxuXHQgKiBAcGFyYW0gYXJncyAtIOaJk+W8gOWPguaVsFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhc3luYyBwdXNoVUkodWluYW1lOnN0cmluZywgLi4uYXJncyA6IGFueVtdKXtcclxuXHRcdGlmKHRoaXMuX3VpU3RhY2subGVuZ3RoID4gMCl7XHJcblx0XHRcdGF3YWl0IHRoaXMuY2xvc2VVSSh0aGlzLl91aVN0YWNrW3RoaXMuX3VpU3RhY2subGVuZ3RoIC0gMV0pO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5fdWlTdGFjay5wdXNoKHVpbmFtZSk7XHJcblx0XHRyZXR1cm4gYXdhaXQgdGhpcy5vcGVuVUkodWluYW1lLCAuLi5hcmdzKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOS9v+eUqOagiOaWueW8j+WFs+mXrVVJXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHVpbmFtZSAtIFVJ5ZCN56ewXHJcblx0ICovXHJcblx0cHVibGljIGFzeW5jIHBvcFVJKCl7XHJcblx0XHRpZih0aGlzLl91aVN0YWNrLmxlbmd0aCA+IDApe1xyXG5cdFx0XHRhd2FpdCB0aGlzLmNsb3NlVUkodGhpcy5fdWlTdGFjay5wb3AoKSk7XHJcblx0XHR9XHJcblx0XHRpZih0aGlzLl91aVN0YWNrLmxlbmd0aCA+IDApe1xyXG5cdFx0XHRyZXR1cm4gYXdhaXQgdGhpcy5vcGVuVUkodGhpcy5fdWlTdGFja1t0aGlzLl91aVN0YWNrLmxlbmd0aCAtIDFdKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOiOt+W+l1VJ5qCIXHJcblx0ICovXHJcblx0cHVibGljIGdldFVJU3RhY2soKXtcclxuXHRcdHJldHVybiB0aGlzLl91aVN0YWNrO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5riF56m6VUnmoIhcclxuXHQgKi9cclxuXHRwdWJsaWMgY2xlYXJVSVN0YWNrKCl7XHJcblx0XHR0aGlzLl91aVN0YWNrID0ganMuY3JlYXRlTWFwKCk7XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOW9k+aMiemUruaMieS4i1xyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBrZXlDb2RlIC0g5oyJ6ZSu57yW56CBXHJcblx0ICovXHJcblx0cHVibGljIG9uS2V5UHJlc3NlZChrZXlDb2RlOnN0cmluZyl7XHJcblx0XHRsZXQgY2FudmFzdWlzOnsgcHJpb3JpdHk6bnVtYmVyLCBvcGVudWlzOlVJQmFzZVtdIH1bXSA9IFtdO1xyXG5cdFx0Zm9yKGxldCBjbmFtZSBpbiB0aGlzLl9jYW52YXNNYXApe1xyXG5cdFx0XHRsZXQgY2FudmFucyA9IHRoaXMuX2NhbnZhc01hcFtjbmFtZV07XHJcblx0XHRcdGxldCBvcGVudWlzOlVJQmFzZVtdID0gW107XHJcblx0XHRcdGZvciAobGV0IHVpbiBpbiBjYW52YW5zLm9wZW5VSXMpe1xyXG5cdFx0XHRcdG9wZW51aXMucHVzaChjYW52YW5zLm9wZW5VSXNbdWluXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2FudmFzdWlzLnB1c2goe1xyXG5cdFx0XHRcdHByaW9yaXR5IDogY2FudmFucy5jYW52YXMuekluZGV4LFxyXG5cdFx0XHRcdG9wZW51aXMgOiBvcGVudWlzLFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGNhbnZhc3Vpcy5zb3J0KChhLGIpID0+IGIucHJpb3JpdHkgLSBhLnByaW9yaXR5KTtcclxuXHRcdGZvciAobGV0IGN1aSBvZiBjYW52YXN1aXMpe1xyXG5cdFx0XHRjdWkub3BlbnVpcy5zb3J0KChhLGIpID0+IGIubm9kZS56SW5kZXggLSBhLm5vZGUuekluZGV4KTtcclxuXHRcdFx0Zm9yKGxldCB1aSBvZiBjdWkub3BlbnVpcyl7XHJcblx0XHRcdFx0aWYodWkub25LZXlQcmVzc2VkKGtleUNvZGUpKXtcclxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICogVUnnrqHnkIblmajlr7nosaFcclxuICovXHJcbmV4cG9ydCBjb25zdCB1aU1nciA9IG5ldyBVSU1hbmFnZXIoKTtcclxuXHJcbn1cclxuIiwiLypcclxuQ29weXJpZ2h0IDIwMjEgTHVKdW5cclxuXHJcblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgXHJcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgXHJcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgXHJcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgXHJcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgXHJcbnRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIFxyXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgXHJcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBcclxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgXHJcblRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIFxyXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBcclxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXHJcbiovXHJcblxyXG5uYW1lc3BhY2UgbGNjIHtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgZnMge1xyXG5cclxuY29uc3QgVEFHID0gXCJsY2MvdXRpbHMvZnMudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog6I635b6X6Lev5b6E55qE55uu5b2VXHJcbiAqIFxyXG4gKiBAcGFyYW0gcGF0aCAtIOi3r+W+hFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpcm5hbWUocGF0aDpzdHJpbmcpe1xyXG5cdGxldCBsYXN0U3BvcyA9IHBhdGgubGFzdEluZGV4T2YoJy8nKTtcclxuXHRyZXR1cm4gbGFzdFNwb3MgPT0gLTEgPyAnJyA6IHBhdGguc3Vic3RyaW5nKDAsIGxhc3RTcG9zKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDojrflvpfot6/lvoTnmoTmlofku7blkI1cclxuICogXHJcbiAqIEBwYXJhbSBwYXRoIC0g6Lev5b6EXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYmFzZW5hbWUocGF0aDpzdHJpbmcpe1xyXG5cdGxldCBsYXN0U3BvcyA9IHBhdGgubGFzdEluZGV4T2YoJy8nKTtcclxuXHRyZXR1cm4gbGFzdFNwb3MgPT0gLTEgPyBwYXRoIDogcGF0aC5zdWJzdHIobGFzdFNwb3MgKyAxKTtcclxufVxyXG5cclxufVxyXG5cclxufVxyXG4iLCIvKlxyXG5Db3B5cmlnaHQgMjAyMSBMdUp1blxyXG5cclxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBcclxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBcclxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyBcclxudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBcclxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCBcclxudG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gXHJcbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBcclxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIFxyXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBcclxuVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgXHJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIFxyXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuKi9cclxuXHJcblxyXG5uYW1lc3BhY2UgbGNjIHtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgbWF0aCB7XHJcblxyXG5jb25zdCBUQUcgPSBcImxjYy91dGlscy9tYXRoLnRzXCI7XHJcblxyXG4vKipcclxuICogQHpoXHJcbiAqIOiOt+W+l+maj+acuua1rueCueWAvFxyXG4gKiBcclxuICogQHBhcmFtIG1pbiAtIOacgOWwj+WAvFxyXG4gKiBAcGFyYW0gbWF4IC0g5pyA5aSn5YC8XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tRmxvYXQobWluOm51bWJlciwgbWF4Om51bWJlcil7XHJcblx0cmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog6I635b6X6ZqP5py65pW05pWw5YC8XHJcbiAqIFxyXG4gKiBAcGFyYW0gbWluIC0g5pyA5bCP5YC8XHJcbiAqIEBwYXJhbSBtYXggLSDmnIDlpKflgLxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnQobWluOm51bWJlciwgbWF4Om51bWJlcil7XHJcblx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog6ZqP5py66I635b6X5pWw57uE5Lit55qE5YC8XHJcbiAqIFxyXG4gKiBAcGFyYW0gZWxlbWVudHMgLSDlhYPntKDmlbDnu4RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21FbGVtZW50KGVsZW1lbnRzOmFueVtdKXtcclxuXHRsZXQgc2VsZWN0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSAlIGVsZW1lbnRzLmxlbmd0aDtcclxuXHRyZXR1cm4gZWxlbWVudHNbc2VsZWN0XTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDpmo/mnLrojrflvpfmlbDnu4TnmoTlh6DkuKrlgLxcclxuICogXHJcbiAqIEBwYXJhbSBlbGVtZW50cyAtIOWFg+e0oOaVsOe7hFxyXG4gKiBAcGFyYW0gY291bnQgLSDmlbDph49cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21FbGVtZW50cyhlbGVtZW50czphbnlbXSwgY291bnQ6bnVtYmVyKSB7XHJcblx0dmFyIHNodWZmbGVkID0gZWxlbWVudHMuc2xpY2UoMCksIGkgPSBlbGVtZW50cy5sZW5ndGgsIG1pbiA9IGkgLSBjb3VudCwgdGVtcCwgaW5kZXg7XHJcblx0d2hpbGUgKGktLSA+IG1pbikge1xyXG5cdFx0aW5kZXggPSBNYXRoLmZsb29yKChpICsgMSkgKiBNYXRoLnJhbmRvbSgpKTtcclxuXHRcdHRlbXAgPSBzaHVmZmxlZFtpbmRleF07XHJcblx0XHRzaHVmZmxlZFtpbmRleF0gPSBzaHVmZmxlZFtpXTtcclxuXHRcdHNodWZmbGVkW2ldID0gdGVtcDtcclxuXHR9XHJcblx0cmV0dXJuIHNodWZmbGVkLnNsaWNlKG1pbik7XHJcbn1cclxuXHJcbn1cclxuXHJcbn1cclxuIiwiLypcbkNvcHlyaWdodCAyMDIxIEx1SnVuXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgXG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyBcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIFxudG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBcbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIFxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgXG5USEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vbmV0LWxpbmUudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL25ldC1jbGllbnQudHNcIiAvPlxuXG5uYW1lc3BhY2UgbGNjIHtcblxuY29uc3QgVEFHID0gXCJsY2MvbmV0d29yay9odHRwL2h0dHAtbGluZS50c1wiO1xuXG4vKipcbiAqIEB6aFxuICogSFRUUOW/g+i3s++8jOS4jeWkp+S6jjDooajnpLrkuI3kvb/nlKhcbiAqL1xuZXhwb3J0IGxldCBIVFRQX0hFQVJUVElDSyA9IC0xO1xuXG4vKipcbiAqIEB6aFxuICogSFRUUOWNj+iurui3r+W+hFxuICovXG5leHBvcnQgbGV0IEhUVFBfUFJPVE9DT0xfUEFUSCA9ICcvcHJvdG9jb2wnO1xuXG4vKipcbiAqIEB6aFxuICog572R57uc57q/57G75Z6LXG4gKi9cbmV4cG9ydCBuYW1lc3BhY2UgTmV0TGluZVR5cGUge1xuXHQvKipcblx0ICogQHpoXG5cdCAqIEhUVFDnvZHnu5znur9cblx0ICovXG5cdGV4cG9ydCBjb25zdCBIVFRQID0gMjtcbn1cblxuLyoqXG4gKiBAemhcbiAqIEh0dHDosIPnlKjmlrnlvI9cbiAqL1xuZXhwb3J0IGVudW0gSHR0cENhbGwge1xuXHQvKipcblx0ICogQHpoXG5cdCAqIEdFVOiwg+eUqFxuXHQgKi9cblx0R0VUID0gMSxcblxuXHQvKipcblx0ICogQHpoXG5cdCAqIFBPU1TosIPnlKhcblx0ICovXG5cdFBPU1QsXG59XG5cbi8qKlxuICogQHpoXG4gKiBXU+e9kee7nOe6v+mFjee9rlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEh0dHBDb25maWcge1xuXHQvKipcblx0ICogQHpoXG5cdCAqIFVSTOi/nuaOpVxuXHQgKi9cbiAgICB1cmw/OnN0cmluZztcbiAgICBcbiAgICAvKipcblx0ICogQHpoXG4gICAgICog6LCD55So5pa55byP77yMIOm7mOiupFBPU1Q8YnIvPlxuICAgICAqIOWuouaIt+err1xuICAgICAqL1xuICAgIGNhbGw/Okh0dHBDYWxsO1xufVxuXG4vKipcbiAqIEB6aFxuICogSFRUUOe9kee7nOe6v1xuICovXG5leHBvcnQgY2xhc3MgSHR0cExpbmUgZXh0ZW5kcyBOZXRMaW5lIHtcblxuXHQvKipcblx0ICogQHpoXG5cdCAqIOe9kee7nOe6v+mFjee9rlxuXHQgKi9cblx0cHJpdmF0ZSBfY29uZmlnOkh0dHBDb25maWcgPSBudWxsO1xuXHRcbiAgICAvKipcblx0ICogQHpoXG4gICAgICog6L+e5o6lSURcbiAgICAgKi9cbiAgICBwcml2YXRlIF9jb25uZWN0SUQ6c3RyaW5nID0gbnVsbDtcblx0XG5cdC8qKlxuXHQgKiBAemhcblx0ICog5bCx57uqXG5cdCAqL1xuICAgIHByaXZhdGUgX3JlYWR5OmJvb2xlYW4gPSBmYWxzZTtcbiAgICBcbiAgICAvKipcblx0ICogQHpoXG4gICAgICog5bey57uP5YWz6ZetXG4gICAgICovXG4gICAgcHJpdmF0ZSBfY2xvc2VkOmJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8qKlxuXHQgKiBAemhcbiAgICAgKiDlj5HpgIHlv4Pot7Pml7bpl7RcbiAgICAgKi9cbiAgICBwcml2YXRlIF9zZW5kSGVhcnRUaW1lOm51bWJlciA9IDA7XG5cblx0LyoqXG5cdCAqIEB6aFxuXHQgKiDojrflvpdVUkzov57mjqVcblx0ICovXG5cdHB1YmxpYyBnZXRVUkwoKXtcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnLnVybDtcblx0fVxuXG5cdC8qKlxuICAgICAqIEB6aFxuXHQgKiDphY3nva7nvZHnu5znur9cblx0ICogXG5cdCAqIEBwYXJhbSBjb25maWcgLSDphY3nva7lr7nosaFcblx0ICovXG5cdHB1YmxpYyBjb25maWcoY29uZmlnOkh0dHBDb25maWcpe1xuICAgICAgICBERUJVRy5ORVRXT1JLICYmIGNjLmxvZyhUQUcsIGAke3RoaXMuZ2V0TmFtZSgpfSBjb25maWdgKTtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuXHR9XG4gICAgXG5cdC8qKlxuICAgICAqIEB6aFxuXHQgKiDmo4Dmn6XnvZHnu5znur/mmK/lkKbmnInmlYhcblx0ICovXG5cdHB1YmxpYyBpc1ZhbGlkKCkge1xuXHRcdHJldHVybiB0aGlzLl9yZWFkeSAmJiAhdGhpcy5fY2xvc2VkO1xuXHR9XG5cbiAgICAvKipcbiAgICAgKiBAemhcbiAgICAgKiDlpITnkIbnvZHnu5znur/mlbDmja5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gbmV0RGF0YSDnvZHnu5zmlbDmja5cbiAgICAgKi9cbiAgICBwcml2YXRlIG9uRGVhbE5ldERhdGEobmV0RGF0YTpOZXREYXRhKXtcbiAgICAgICAgREVCVUcuTkVUV09SSyAmJiBjYy5sb2coVEFHLCBgJHt0aGlzLmdldE5hbWUoKX0gb25EZWFsTmV0RGF0YSAke0pTT04uc3RyaW5naWZ5KG5ldERhdGEpfWApO1xuICAgICAgICBpZihuZXREYXRhLnByb3RvY29scyl7XG4gICAgICAgICAgICB0aGlzLnB1c2hEaXNwYXRjaENhY2hlcyhuZXREYXRhLnByb3RvY29scyk7XG5cdFx0fVxuXHRcdGlmKG5ldERhdGEudHlwZSA9PSBuZXRkYXRhLk5ldERhdGFUeXBlLlNZTkNfQ09OTkVDVF9JRCl7XG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0SUQgPSAobmV0RGF0YS5kYXRhIGFzIG5ldGRhdGEuU3luY0Nvbm5lY3RJRCkuY29ubmVjdElEO1xuICAgICAgICAgICAgREVCVUcuTkVUV09SSyAmJiBjYy5sb2coVEFHLCBgJHt0aGlzLmdldE5hbWUoKX0gb25EZWFsTmV0RGF0YSBTWU5DX0NPTk5FQ1RfSUQgJHt0aGlzLl9jb25uZWN0SUR9YCk7XG4gICAgICAgICAgICBpZighdGhpcy5fcmVhZHkpe1xuICAgICAgICAgICAgICAgIERFQlVHLk5FVFdPUksgJiYgY2MubG9nKFRBRywgYCR7dGhpcy5nZXROYW1lKCl9IENMSUVOVCBjb25uZWN0YCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2VuZEhlYXJ0VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVhZHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwib25PcGVuXCIsIHRydWUsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1jYXRjaChlKXtcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoVEFHLCBgb25EZWFsTmV0RGF0YSBTWU5DX0NPTk5FQ1RfSUQgRXhjZXB0aW9uICR7ZX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG5cdC8qKlxuICAgICAqIEB6aFxuXHQgKiDmiZPlvIDnvZHnu5znur9cblx0ICovXG4gICAgcHVibGljIGFzeW5jIG9wZW4oKTpQcm9taXNlPGJvb2xlYW4+e1xuXHRcdGlmKCF0aGlzLl9yZWFkeSl7XG4gICAgICAgICAgICB0aGlzLl9jb25maWcuY2FsbCA9IHRoaXMuX2NvbmZpZy5jYWxsIHx8IEh0dHBDYWxsLlBPU1Q7XG4gICAgICAgICAgICBERUJVRy5ORVRXT1JLICYmIGNjLmxvZyhUQUcsIGAke3RoaXMuZ2V0TmFtZSgpfSBDTElFTlQgb3BlbiAke3RoaXMuX2NvbmZpZy51cmx9ICR7dGhpcy5fY29uZmlnLmNhbGx9YCk7XG5cdFx0XHRpZih0aGlzLl9jb25maWcudXJsKXtcblx0XHRcdFx0dGhpcy5fY29uZmlnLnVybCA9IGAke3RoaXMuX2NvbmZpZy51cmx9JHtIVFRQX1BST1RPQ09MX1BBVEh9YDtcbiAgICAgICAgICAgICAgICB0aGlzLnN5bmNDb25uZWN0SUQoKTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRjYy5lcnJvcihUQUcsIGBIdHRwTGluZSAke3RoaXMuX25hbWV9IHVybCBpcyBpbnZhbGlkIWApO1xuICAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwib25PcGVuXCIsIGZhbHNlLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9Y2F0Y2goZSl7XG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKFRBRywgYENMSUVOVCBvcGVuIEV4Y2VwdGlvbiAke2V9YCk7XG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpPT57IFxuICAgICAgICAgICAgaWYodGhpcy5fcmVhZHkpe1xuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLm9uY2UoYG9uT3BlbmAsIHJlc29sdmUpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cdH1cblxuXHQvKipcbiAgICAgKiBAemhcblx0ICog5YWz6Zet572R57uc57q/XG5cdCAqL1xuXHRwdWJsaWMgY2xvc2UoKXtcbiAgICAgICAgaWYodGhpcy5fcmVhZHkpe1xuICAgICAgICAgICAgREVCVUcuTkVUV09SSyAmJiBjYy5sb2coVEFHLCBgJHt0aGlzLmdldE5hbWUoKX0gQ0xJRU5UIGNsb3NlYCk7XG4gICAgICAgICAgICB0aGlzLl9yZWFkeSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwib25DbG9zZVwiLCB0aGlzLCAwKTtcbiAgICAgICAgfVxuXHR9XG5cdFxuXHQvKipcbiAgICAgKiBAemhcblx0ICog5pu05paw572R57uc57q/XG4gICAgICogXG5cdCAqIEBwYXJhbSBkdCDpl7TpmpTml7bpl7Rcblx0ICovXG5cdHB1YmxpYyBvblVwZGF0ZShkdDpudW1iZXIpe1xuXHRcdGlmKEhUVFBfSEVBUlRUSUNLID4gMCAmJiB0aGlzLl9yZWFkeSl7XG4gICAgICAgICAgICB0aGlzLl9zZW5kSGVhcnRUaW1lICs9IGR0O1xuICAgICAgICAgICAgaWYodGhpcy5fc2VuZEhlYXJ0VGltZSA+PSBIVFRQX0hFQVJUVElDSyl7XG4gICAgICAgICAgICAgICAgREVCVUcuTkVUV09SSyAmJiBjYy5sb2coVEFHLCBgJHt0aGlzLmdldE5hbWUoKX0gb25VcGRhdGUgc2VuZEhlYXJ0VGltZWApO1xuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVOZXRMaW5lRGF0YShuZXRkYXRhLk5ldERhdGFUeXBlLkhFUlRfVElDSyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblx0fVxuXG4gICAgLyoqXG5cdCAqIEB6aFxuICAgICAqIOWQjOatpei/nuaOpUlEXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHN5bmNDb25uZWN0SUQoKXtcbiAgICAgICAgaWYodGhpcy5fbW9kZSA9PT0gTmV0TGluZU1vZGUuQ0xJRU5UKXtcbiAgICAgICAgICAgIERFQlVHLk5FVFdPUksgJiYgY2MubG9nKFRBRywgYCR7dGhpcy5nZXROYW1lKCl9IHN5bmNDb25uZWN0SURgKTtcbiAgICAgICAgICAgIGxldCBkYXRhOk5ldERhdGEgPSB7XG4gICAgICAgICAgICAgICAgdHlwZSA6IG5ldGRhdGEuTmV0RGF0YVR5cGUuU1lOQ19DT05ORUNUX0lEXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5zZW5kTmV0RGF0YV9jbGllbnQoZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAemhcbiAgICAgKiDlj5HpgIHnvZHnu5zmlbDmja4t5a6i5oi356uvXG4gICAgICogXG4gICAgICogQHBhcmFtIGRhdGEgLSDnvZHnu5zmlbDmja5cbiAgICAgKi9cbiAgICBwcml2YXRlIGFzeW5jIHNlbmROZXREYXRhX2NsaWVudChuZXREYXRhOk5ldERhdGEpe1xuXHRcdGxldCBkYXRhYjY0ID0ganMuYWIyYjY0KHBhY2tOZXREYXRhKG5ldERhdGEsIHRoaXMpKTtcbiAgICAgICAgbGV0IHI6YW55O1xuICAgICAgICBpZih0aGlzLl9jb25maWcuY2FsbCA9PSBIdHRwQ2FsbC5QT1NUKXtcbiAgICAgICAgICAgIHIgPSBhd2FpdCBodHRwLnBvc3RKc29uKHRoaXMuX2NvbmZpZy51cmwsIHsgZGF0YSA6IGRhdGFiNjQgfSk7XG4gICAgICAgIH1lbHNleyAvLyBHRVRcbiAgICAgICAgICAgIHIgPSBhd2FpdCBodHRwLmdldEpzb24odGhpcy5fY29uZmlnLnVybCArIFwiP2RhdGE9XCIgKyBkYXRhYjY0KTtcbiAgICAgICAgfVxuXHRcdGxldCByTmV0RGF0YTpOZXREYXRhID0gciAmJiB1bnBhY2tOZXREYXRhKGpzLmI2NDJ1OGEoci5kYXRhKS5idWZmZXIpO1xuICAgICAgICBpZihyTmV0RGF0YSl7XG4gICAgICAgICAgICB0aGlzLm9uRGVhbE5ldERhdGEock5ldERhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuXHQvKipcbiAgICAgKiBAemhcblx0ICog5Y+R6YCB572R57uc57q/5pWw5o2uXG4gICAgICogXG5cdCAqIEBwYXJhbSBkYXRhIC0g572R57uc5pWw5o2uXG5cdCAqL1xuXHRwcm90ZWN0ZWQgYXN5bmMgc2VuZE5ldERhdGEoZGF0YTpOZXREYXRhKXtcbiAgICAgICAgaWYodGhpcy5fcmVhZHkpe1xuICAgICAgICAgICAgREVCVUcuTkVUV09SSyAmJiBjYy5sb2coVEFHLCBgJHt0aGlzLmdldE5hbWUoKX0gc2VuZE5ldERhdGEgJHt0aGlzLl9tb2RlfSAke0pTT04uc3RyaW5naWZ5KGRhdGEpfWApO1xuICAgICAgICAgICAgaWYodGhpcy5fbW9kZSA9PT0gTmV0TGluZU1vZGUuQ0xJRU5UKXtcbiAgICAgICAgICAgICAgICBkYXRhLmNvbm5lY3RJRCA9IHRoaXMuX2Nvbm5lY3RJRDtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmROZXREYXRhX2NsaWVudChkYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZW5kSGVhcnRUaW1lID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG5cdFx0XHRjYy53YXJuKFRBRywgYEh0dHBMaW5lICR7dGhpcy5fbmFtZX0gc2VuZE5ldERhdGEgZmFpbCFgKTtcblx0XHR9XG5cdH1cbn07XG5cbi8v5rOo5YaM572R57uc57G75Z6LXG5OZXRMaW5lLnJlZ2lzdGVyTmV0VHlwZShOZXRMaW5lVHlwZS5IVFRQLCBIdHRwTGluZSk7XG5cbn1cbiIsIi8qXHJcbkNvcHlyaWdodCAyMDIxIEx1SnVuXHJcblxyXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IFxyXG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIFxyXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIFxyXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIFxyXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIFxyXG50byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBcclxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIFxyXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgXHJcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFxyXG5USEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBcclxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgXHJcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG4qL1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL25ldC1saW5lLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL25ldC1jbGllbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdXRpbHMvanMtYnVmZmVyLnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBsY2Mge1xyXG5cclxuY29uc3QgVEFHID0gXCJsY2MvbmV0d29yay93ZWJzb2NrZXQvd2Vic29ja2V0LWxpbmUudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICogV1Plv4Pot7NcclxuICovXHJcbmV4cG9ydCBsZXQgV0VCU09DS0VUX0hFQVJUVElDSyA9IDEwO1xyXG5cclxuLyoqXHJcbiAqIEB6aFxyXG4gKiDnvZHnu5znur/nsbvlnotcclxuICovXHJcbmV4cG9ydCBuYW1lc3BhY2UgTmV0TGluZVR5cGUge1xyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIFdT572R57uc57q/XHJcblx0ICovXHJcblx0ZXhwb3J0IGNvbnN0IFdFQlNPQ0tFVCA9IDE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICogV1PnvZHnu5znur/phY3nva5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2ViU29ja2V0Q29uZmlnIHtcclxuXHQvKipcclxuXHQgKiBAemhcclxuXHQgKiBVUkzov57mjqVcclxuXHQgKi9cclxuXHR1cmw/OnN0cmluZywgXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICogV0VCU09DS0VU572R57uc57q/PGJyLz5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBXZWJTb2NrZXRMaW5lIGV4dGVuZHMgTmV0TGluZSB7XHJcblx0XHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog572R57uc57q/6YWN572uXHJcblx0ICovXHJcblx0cHJpdmF0ZSBfY29uZmlnOldlYlNvY2tldENvbmZpZyA9IG51bGw7XHJcblx0XHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog572R57uc57q/5a6e5L2TXHJcblx0ICovXHJcblx0cHJpdmF0ZSBfZW50aXR5OldlYlNvY2tldCA9IG51bGw7XHJcblx0XHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5bCx57uqXHJcblx0ICovXHJcblx0cHJpdmF0ZSBfcmVhZHk6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOW/g+i3s+aXtumXtOmZkOWItlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgX2hlYXJ0VGltZUxpbWl0Om51bWJlciA9IFdFQlNPQ0tFVF9IRUFSVFRJQ0s7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOajgOafpeW/g+i3s+aXtumXtFxyXG5cdCAqL1xyXG5cdHByaXZhdGUgX2NoZWNrSGVhcnRUaW1lOm51bWJlciA9IDA7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOWPkemAgeW/g+i3s+aXtumXtDxici8+XHJcbiAgICAgKiDlrqLmiLfnq69cclxuXHQgKi9cclxuXHRwcml2YXRlIF9zZW5kSGVhcnRUaW1lOm51bWJlciA9IDA7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOiOt+W+l1VSTOi/nuaOpVxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXRVUkwoKXtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWcudXJsO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBAemhcclxuXHQgKiDphY3nva7nvZHnu5znur9cclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGNvbmZpZyAtIOmFjee9ruWvueixoVxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjb25maWcoY29uZmlnOldlYlNvY2tldENvbmZpZyl7XHJcbiAgICAgICAgREVCVUcuTkVUV09SSyAmJiBjYy5sb2coVEFHLCBgJHt0aGlzLmdldE5hbWUoKX0gY29uZmlnYCk7XHJcblx0XHR0aGlzLl9jb25maWcgPSBjb25maWc7XHJcblx0fVxyXG5cclxuXHQvKipcclxuICAgICAqIEB6aFxyXG5cdCAqIOajgOafpee9kee7nOe6v+aYr+WQpuacieaViFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBpc1ZhbGlkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2VudGl0eSAmJiB0aGlzLl9yZWFkeTtcclxuXHR9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAemhcclxuICAgICAqIOWkhOeQhue9kee7nOe6v+aVsOaNrlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gbmV0RGF0YSAtIOaUtuWIsOeahOe9kee7nOaVsOaNrlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG9uRGVhbE5ldERhdGEobmV0RGF0YTpOZXREYXRhKXtcclxuICAgICAgICB0aGlzLl9jaGVja0hlYXJ0VGltZSA9IDA7XHJcbiAgICAgICAgREVCVUcuTkVUV09SSyAmJiBjYy5sb2coVEFHLCBgJHt0aGlzLmdldE5hbWUoKX0gb25EZWFsTmV0RGF0YSAke0pTT04uc3RyaW5naWZ5KG5ldERhdGEpfWApO1xyXG4gICAgICAgIGlmKG5ldERhdGEucHJvdG9jb2xzKXtcclxuICAgICAgICAgICAgdGhpcy5wdXNoRGlzcGF0Y2hDYWNoZXMobmV0RGF0YS5wcm90b2NvbHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihuZXREYXRhLnR5cGUgPT0gbmV0ZGF0YS5OZXREYXRhVHlwZS5TWU5DX0hFUlRUSUNLX1RJTUUpe1xyXG4gICAgICAgICAgICBpZih0aGlzLl9tb2RlID09PSBOZXRMaW5lTW9kZS5DTElFTlQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faGVhcnRUaW1lTGltaXQgPSAobmV0RGF0YS5kYXRhIGFzIG5ldGRhdGEuU3luY0hlYXJ0VGlja1RpbWUpLmhlYXJ0VGltZTtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVOZXRMaW5lRGF0YShuZXRkYXRhLk5ldERhdGFUeXBlLkhFUlRfVElDSyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZW5kSGVhcnRUaW1lID0gMDtcclxuICAgICAgICAgICAgICAgIERFQlVHLk5FVFdPUksgJiYgY2MubG9nKFRBRywgYCR7dGhpcy5nZXROYW1lKCl9IFNZTkNfSEVSVFRJQ0tfVElNRSAke3RoaXMuX2hlYXJ0VGltZUxpbWl0fWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcblx0LyoqXHJcblx0ICogQHpoXHJcblx0ICog5omT5byA572R57uc57q/XHJcblx0ICovXHJcblx0cHVibGljIGFzeW5jIG9wZW4oKTpQcm9taXNlPGJvb2xlYW4+e1xyXG5cdFx0aWYoIXRoaXMuX2VudGl0eSl7XHJcblx0XHRcdGlmKHRoaXMuX21vZGUgPT09IE5ldExpbmVNb2RlLkNMSUVOVCl7XHJcbiAgICAgICAgICAgICAgICBERUJVRy5ORVRXT1JLICYmIGNjLmxvZyhUQUcsIGAke3RoaXMuZ2V0TmFtZSgpfSBDTElFTlQgb3BlbiAke3RoaXMuX2NvbmZpZy51cmx9YCk7XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdGlmKHRoaXMuX2NvbmZpZy51cmwuaW5kZXhPZihcIndzczovL1wiKSA9PSAwICYmIENDX0pTQil7XHJcblx0XHRcdFx0XHRcdGxldCB3c3Njb25maWcgPSBuZXRDbGllbnQuZ2V0V1NTQ29uZmlnKCk7XHJcblx0XHRcdFx0XHRcdGlmKHdzc2NvbmZpZyl7XHJcblx0XHRcdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuX2VudGl0eSA9IG5ldyBXZWJTb2NrZXQodGhpcy5fY29uZmlnLnVybCwgd3NzY29uZmlnLnByb3RvY29sLCB3c3Njb25maWcuY2VydCk7XHJcblx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdGNjLndhcm4oVEFHLCBcIm5hdGl2ZSB3c3MgY29ubmVjdCBtdXN0IHNldCB3c3Njb25maWdcIik7XHJcblx0XHRcdFx0XHRcdFx0dHJ5e1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5lbWl0KFwib25PcGVuXCIsIGZhbHNlLCB0aGlzKTtcclxuXHRcdFx0XHRcdFx0XHR9Y2F0Y2goZSl7XHJcblx0XHRcdFx0XHRcdFx0XHRjYy5lcnJvcihUQUcsIGAke3RoaXMuZ2V0TmFtZSgpfSBDTElFTlQgb3BlbiBFeGNlcHRpb24gJHtlfWApO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdHRoaXMuX2VudGl0eSA9IG5ldyBXZWJTb2NrZXQodGhpcy5fY29uZmlnLnVybCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBjYXRjaChlcnIpIHtcclxuXHRcdFx0XHRcdGNjLmVycm9yKGVycik7XHJcblx0XHRcdFx0XHR0cnl7XHJcblx0XHRcdFx0XHRcdHRoaXMuZW1pdChcIm9uT3BlblwiLCBmYWxzZSwgdGhpcyk7XHJcblx0XHRcdFx0XHR9Y2F0Y2goZSl7XHJcblx0XHRcdFx0XHRcdGNjLmVycm9yKFRBRywgYCR7dGhpcy5nZXROYW1lKCl9IENMSUVOVCBvcGVuIEV4Y2VwdGlvbiAke2V9YCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuX2VudGl0eS5vbm9wZW4gPSAoZXY6RXZlbnQpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgREVCVUcuTkVUV09SSyAmJiBjYy5sb2coVEFHLCBgJHt0aGlzLmdldE5hbWUoKX0gQ0xJRU5UIG9ub3BlbmApO1xyXG5cdFx0XHRcdFx0dGhpcy5fY2hlY2tIZWFydFRpbWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlbmRIZWFydFRpbWUgPSAwO1xyXG5cdFx0XHRcdFx0dGhpcy5fcmVhZHkgPSB0cnVlO1xyXG5cdFx0XHRcdFx0dHJ5e1xyXG5cdFx0XHRcdFx0XHR0aGlzLmVtaXQoXCJvbk9wZW5cIiwgdHJ1ZSwgdGhpcyk7XHJcblx0XHRcdFx0XHR9Y2F0Y2goZSl7XHJcblx0XHRcdFx0XHRcdGNjLmVycm9yKFRBRywgYCR7dGhpcy5nZXROYW1lKCl9IENMSUVOVCBvcGVuIG9ub3BlbiBFeGNlcHRpb24gJHtlfWApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0dGhpcy5fZW50aXR5Lm9uY2xvc2UgPSAoZXY6Q2xvc2VFdmVudCk9PntcclxuICAgICAgICAgICAgICAgICAgICBERUJVRy5ORVRXT1JLICYmIGNjLmxvZyhUQUcsIGAke3RoaXMuZ2V0TmFtZSgpfSBDTElFTlQgb25jbG9zZWApO1xyXG5cdFx0XHRcdFx0aWYodGhpcy5fZW50aXR5KXtcclxuXHRcdFx0XHRcdFx0dGhpcy5fZW50aXR5ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVhZHkgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0dHJ5e1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZW1pdChcIm9uQ2xvc2VcIiwgdGhpcywgMCk7XHJcblx0XHRcdFx0XHRcdH1jYXRjaChlKXtcclxuXHRcdFx0XHRcdFx0XHRjYy5lcnJvcihUQUcsIGAke3RoaXMuZ2V0TmFtZSgpfSBDTElFTlQgb3BlbiBvbmNsb3NlIEV4Y2VwdGlvbiAke2V9YCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHRoaXMuX2VudGl0eS5vbm1lc3NhZ2UgPSAoZXY6IE1lc3NhZ2VFdmVudCk9PntcclxuICAgICAgICAgICAgICAgICAgICBERUJVRy5ORVRXT1JLICYmIGNjLmxvZyhUQUcsIGAke3RoaXMuZ2V0TmFtZSgpfSBDTElFTlQgb25tZXNzYWdlICR7ZXYuZGF0YX1gKTtcclxuXHRcdFx0XHRcdGlmICh0eXBlb2YgZXYuZGF0YSA9PSAnc3RyaW5nJyl7XHJcblx0XHRcdFx0XHRcdGxldCBuZXREYXRhOk5ldERhdGEgPSBKU09OLnBhcnNlKGV2LmRhdGEpO1xyXG5cdFx0XHRcdFx0XHRpZihuZXREYXRhKXtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm9uRGVhbE5ldERhdGEobmV0RGF0YSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1lbHNlIGlmKGV2LmRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcil7XHJcblx0XHRcdFx0XHRcdGxldCBuZXREYXRhOk5ldERhdGEgPSB1bnBhY2tOZXREYXRhKGV2LmRhdGEpO1xyXG5cdFx0XHRcdFx0XHRpZihuZXREYXRhKXtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm9uRGVhbE5ldERhdGEobmV0RGF0YSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1lbHNlIGlmKGV2LmRhdGEgaW5zdGFuY2VvZiBCbG9iKXtcclxuXHRcdFx0XHRcdFx0dmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7ICBcclxuXHRcdFx0XHRcdFx0cmVhZGVyLm9ubG9hZCA9IChldnQpPT57ICBcclxuXHRcdFx0XHRcdFx0XHRpZihldnQudGFyZ2V0LnJlYWR5U3RhdGUgPT0gRmlsZVJlYWRlci5ET05FKXsgIFxyXG5cdFx0XHRcdFx0XHRcdFx0bGV0IG5ldERhdGE6TmV0RGF0YSA9IHVucGFja05ldERhdGEoPEFycmF5QnVmZmVyPmV2dC50YXJnZXQucmVzdWx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdGlmKG5ldERhdGEpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLm9uRGVhbE5ldERhdGEobmV0RGF0YSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihldi5kYXRhKTsgIFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0dGhpcy5fZW50aXR5Lm9uZXJyb3IgPSAoZXY6IEV2ZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIERFQlVHLk5FVFdPUksgJiYgY2MubG9nKFRBRywgYCR7dGhpcy5nZXROYW1lKCl9IENMSUVOVCBvbmVycm9yICR7ZXZ9YCk7XHJcblx0XHRcdFx0XHR0cnl7XHJcblx0XHRcdFx0XHRcdGlmKHRoaXMuX3JlYWR5KXtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmVtaXQoXCJvbkVycm9yXCIsIHRoaXMsIGV2KTtcclxuXHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5lbWl0KFwib25PcGVuXCIsIGZhbHNlLCB0aGlzKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fWNhdGNoKGUpe1xyXG5cdFx0XHRcdFx0XHRjYy5lcnJvcihUQUcsIGAke3RoaXMuZ2V0TmFtZSgpfSBDTElFTlQgb3BlbiBvbmVycm9yIEV4Y2VwdGlvbiAke2V9YCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLmNsb3NlKCk7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYodGhpcy5fZW50aXR5KXtcclxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKT0+eyBcclxuXHRcdFx0XHRpZih0aGlzLl9yZWFkeSl7XHJcblx0XHRcdFx0XHRyZXNvbHZlKHRydWUpO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dGhpcy5vbmNlKGBvbk9wZW5gLCByZXNvbHZlKTsgXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB6aFxyXG5cdCAqIOWFs+mXree9kee7nOe6v1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBjbG9zZSgpe1xyXG5cdFx0aWYodGhpcy5fZW50aXR5KXtcclxuICAgICAgICAgICAgREVCVUcuTkVUV09SSyAmJiBjYy5sb2coVEFHLCBgJHt0aGlzLmdldE5hbWUoKX0gJHt0aGlzLl9tb2RlfSBjbG9zZWApO1xyXG5cdFx0XHRsZXQgZW50ID0gdGhpcy5fZW50aXR5O1xyXG5cdFx0XHR0aGlzLl9lbnRpdHkgPSBudWxsO1xyXG5cdFx0XHRpZih0aGlzLl9yZWFkeSl7XHJcblx0XHRcdFx0ZW50LmNsb3NlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5fcmVhZHkgPSBmYWxzZTtcclxuXHRcdFx0dHJ5e1xyXG5cdFx0XHRcdHRoaXMuZW1pdChcIm9uQ2xvc2VcIiwgdGhpcywgMCk7XHJcblx0XHRcdH1jYXRjaChlKXtcclxuXHRcdFx0XHRjYy5lcnJvcihUQUcsIGAke3RoaXMuZ2V0TmFtZSgpfSBjbG9zZSBFeGNlcHRpb24gJHtlfWApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG4gICAgICogQHpoXHJcblx0ICog5pu05paw572R57uc57q/XHJcbiAgICAgKiBcclxuXHQgKiBAcGFyYW0gZHQgLSDpl7TpmpTml7bpl7RcclxuXHQgKi9cclxuXHRwdWJsaWMgb25VcGRhdGUoZHQ6bnVtYmVyKXtcclxuXHRcdGlmKHRoaXMuX2VudGl0eSAmJiB0aGlzLl9yZWFkeSl7XHJcblx0XHRcdHRoaXMuX2NoZWNrSGVhcnRUaW1lICs9IGR0O1xyXG5cdFx0XHRpZih0aGlzLl9jaGVja0hlYXJ0VGltZSA+PSB0aGlzLl9oZWFydFRpbWVMaW1pdCl7XHJcbiAgICAgICAgICAgICAgICBERUJVRy5ORVRXT1JLICYmIGNjLmxvZyhUQUcsIGAke3RoaXMuZ2V0TmFtZSgpfSBvblVwZGF0ZSBjaGVja0hlYXJ0VGltZSBjbG9zZWApO1xyXG5cdFx0XHRcdHRoaXMuY2xvc2UoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZih0aGlzLl9tb2RlID09PSBOZXRMaW5lTW9kZS5DTElFTlQpe1xyXG5cdFx0XHRcdHRoaXMuX3NlbmRIZWFydFRpbWUgKz0gZHQ7XHJcblx0XHRcdFx0aWYodGhpcy5fc2VuZEhlYXJ0VGltZSA+PSB0aGlzLl9oZWFydFRpbWVMaW1pdCAvIDIpe1xyXG4gICAgICAgICAgICAgICAgICAgIERFQlVHLk5FVFdPUksgJiYgY2MubG9nKFRBRywgYCR7dGhpcy5nZXROYW1lKCl9IG9uVXBkYXRlIHNlbmRIZWFydFRpbWVgKTtcclxuXHRcdFx0XHRcdHRoaXMud3JpdGVOZXRMaW5lRGF0YShuZXRkYXRhLk5ldERhdGFUeXBlLkhFUlRfVElDSyk7XHJcblx0XHRcdFx0XHR0aGlzLl9zZW5kSGVhcnRUaW1lID0gMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG4gICAgICogQHpoXHJcblx0ICog5Y+R6YCB572R57uc57q/5pWw5o2uXHJcbiAgICAgKiBcclxuXHQgKiBAcGFyYW0gZGF0YSAtIOe9kee7nOaVsOaNrlxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBzZW5kTmV0RGF0YShuZXREYXRhOk5ldERhdGEpe1xyXG5cdFx0aWYodGhpcy5fZW50aXR5ICYmIHRoaXMuX3JlYWR5KXtcclxuXHRcdFx0dGhpcy5fZW50aXR5LnNlbmQocGFja05ldERhdGEobmV0RGF0YSwgdGhpcykpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGNvbnNvbGUud2FybihUQUcsIGBXZWJTb2NrZXRMaW5lICR7dGhpcy5fbmFtZX0gc2VuZE5ldERhdGEgZmFpbCFgKTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG4vL+azqOWGjOe9kee7nOexu+Wei1xyXG5OZXRMaW5lLnJlZ2lzdGVyTmV0VHlwZShOZXRMaW5lVHlwZS5XRUJTT0NLRVQsIFdlYlNvY2tldExpbmUpO1xyXG5cclxufVxyXG4iXX0=

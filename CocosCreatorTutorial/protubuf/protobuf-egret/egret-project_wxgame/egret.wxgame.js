var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * @private
         */
        var WebFps = (function (_super) {
            __extends(WebFps, _super);
            function WebFps(stage, showFPS, showLog, logFilter, styles) {
                var _this = _super.call(this) || this;
                _this.showPanle = true;
                _this.fpsHeight = 0;
                _this.WIDTH = 101;
                _this.HEIGHT = 20;
                _this.bgCanvasColor = "#18304b";
                _this.fpsFrontColor = "#18fefe";
                _this.WIDTH_COST = 50;
                _this.cost1Color = "#18fefe";
                // private cost2Color = "#ffff00";
                _this.cost3Color = "#ff0000";
                _this.arrFps = [];
                _this.arrCost = [];
                _this.arrLog = [];
                if (showFPS || showLog) {
                    if (egret.Capabilities.renderMode == 'canvas') {
                        _this.renderMode = "Canvas";
                    }
                    else {
                        _this.renderMode = "WebGL";
                    }
                    _this.panelX = styles["x"] === undefined ? 0 : parseInt(styles['x']);
                    _this.panelY = styles["y"] === undefined ? 0 : parseInt(styles['y']);
                    _this.fontColor = styles["textColor"] === undefined ? '#ffffff' : styles['textColor'].replace("0x", "#");
                    _this.fontSize = styles["size"] === undefined ? 12 : parseInt(styles['size']);
                    if (egret.Capabilities.isMobile) {
                        _this.fontSize -= 2;
                    }
                    var all = document.createElement('div');
                    all.style.position = 'absolute';
                    all.style.background = "rgba(0,0,0," + styles['bgAlpha'] + ")";
                    all.style.left = _this.panelX + 'px';
                    all.style.top = _this.panelY + 'px';
                    all.style.pointerEvents = 'none';
                    document.body.appendChild(all);
                    var container = document.createElement('div');
                    container.style.color = _this.fontColor;
                    container.style.fontSize = _this.fontSize + 'px';
                    container.style.lineHeight = _this.fontSize + 'px';
                    container.style.margin = '4px 4px 4px 4px';
                    _this.container = container;
                    all.appendChild(container);
                    if (showFPS)
                        _this.addFps();
                    if (showLog)
                        _this.addLog();
                }
                return _this;
            }
            WebFps.prototype.addFps = function () {
                var div = document.createElement('div');
                div.style.display = 'inline-block';
                this.containerFps = div;
                this.container.appendChild(div);
                var fps = document.createElement('div');
                fps.style.paddingBottom = '2px';
                this.fps = fps;
                this.containerFps.appendChild(fps);
                fps.innerHTML = "0 FPS " + this.renderMode + "<br/>min0 max0 avg0";
                var canvas = document.createElement('canvas');
                this.containerFps.appendChild(canvas);
                canvas.width = this.WIDTH;
                canvas.height = this.HEIGHT;
                this.canvasFps = canvas;
                var context = canvas.getContext('2d');
                this.contextFps = context;
                context.fillStyle = this.bgCanvasColor;
                context.fillRect(0, 0, this.WIDTH, this.HEIGHT);
                var divDatas = document.createElement('div');
                this.divDatas = divDatas;
                this.containerFps.appendChild(divDatas);
                var left = document.createElement('div');
                left.style['float'] = 'left';
                left.innerHTML = "Draw<br/>Cost";
                divDatas.appendChild(left);
                var right = document.createElement('div');
                right.style.paddingLeft = left.offsetWidth + 20 + "px";
                divDatas.appendChild(right);
                var draw = document.createElement('div');
                this.divDraw = draw;
                draw.innerHTML = "0<br/>";
                right.appendChild(draw);
                var cost = document.createElement('div');
                this.divCost = cost;
                cost.innerHTML = "<font  style=\"color:" + this.cost1Color + "\">0<font/> <font  style=\"color:" + this.cost3Color + "\">0<font/>";
                right.appendChild(cost);
                canvas = document.createElement('canvas');
                this.canvasCost = canvas;
                this.containerFps.appendChild(canvas);
                canvas.width = this.WIDTH;
                canvas.height = this.HEIGHT;
                context = canvas.getContext('2d');
                this.contextCost = context;
                context.fillStyle = this.bgCanvasColor;
                context.fillRect(0, 0, this.WIDTH, this.HEIGHT);
                context.fillStyle = "#000000";
                context.fillRect(this.WIDTH_COST, 0, 1, this.HEIGHT);
                this.fpsHeight = this.container.offsetHeight;
            };
            WebFps.prototype.addLog = function () {
                var log = document.createElement('div');
                log.style.maxWidth = document.body.clientWidth - 8 - this.panelX + 'px';
                log.style.wordWrap = "break-word";
                this.log = log;
                this.container.appendChild(log);
            };
            WebFps.prototype.update = function (datas, showLastData) {
                if (showLastData === void 0) { showLastData = false; }
                var numFps;
                var numCostTicker;
                var numCostRender;
                if (!showLastData) {
                    numFps = datas.fps;
                    numCostTicker = datas.costTicker;
                    numCostRender = datas.costRender;
                    this.lastNumDraw = datas.draw;
                    this.arrFps.push(numFps);
                    this.arrCost.push([numCostTicker, numCostRender]);
                }
                else {
                    numFps = this.arrFps[this.arrFps.length - 1];
                    numCostTicker = this.arrCost[this.arrCost.length - 1][0];
                    numCostRender = this.arrCost[this.arrCost.length - 1][1];
                }
                var fpsTotal = 0;
                var lenFps = this.arrFps.length;
                if (lenFps > 101) {
                    lenFps = 101;
                    this.arrFps.shift();
                    this.arrCost.shift();
                }
                var fpsMin = this.arrFps[0];
                var fpsMax = this.arrFps[0];
                for (var i = 0; i < lenFps; i++) {
                    var num = this.arrFps[i];
                    fpsTotal += num;
                    if (num < fpsMin)
                        fpsMin = num;
                    else if (num > fpsMax)
                        fpsMax = num;
                }
                var WIDTH = this.WIDTH;
                var HEIGHT = this.HEIGHT;
                var context = this.contextFps;
                context.drawImage(this.canvasFps, 1, 0, WIDTH - 1, HEIGHT, 0, 0, WIDTH - 1, HEIGHT);
                context.fillStyle = this.bgCanvasColor;
                context.fillRect(WIDTH - 1, 0, 1, HEIGHT);
                var lastHeight = Math.floor(numFps / 60 * 20);
                if (lastHeight < 1)
                    lastHeight = 1;
                context.fillStyle = this.fpsFrontColor;
                context.fillRect(WIDTH - 1, 20 - lastHeight, 1, lastHeight);
                var WIDTH_COST = this.WIDTH_COST;
                context = this.contextCost;
                context.drawImage(this.canvasCost, 1, 0, WIDTH_COST - 1, HEIGHT, 0, 0, WIDTH_COST - 1, HEIGHT);
                context.drawImage(this.canvasCost, WIDTH_COST + 2, 0, WIDTH_COST - 1, HEIGHT, WIDTH_COST + 1, 0, WIDTH_COST - 1, HEIGHT);
                var c1Height = Math.floor(numCostTicker / 2);
                if (c1Height < 1)
                    c1Height = 1;
                else if (c1Height > 20)
                    c1Height = 20;
                //todo lcj
                var c2Height = Math.floor(numCostRender / 2);
                if (c2Height < 1)
                    c2Height = 1;
                else if (c2Height > 20)
                    c2Height = 20;
                context.fillStyle = this.bgCanvasColor;
                context.fillRect(WIDTH_COST - 1, 0, 1, HEIGHT);
                context.fillRect(WIDTH_COST * 2, 0, 1, HEIGHT);
                context.fillRect(WIDTH_COST * 3 + 1, 0, 1, HEIGHT);
                context.fillStyle = this.cost1Color;
                context.fillRect(WIDTH_COST - 1, 20 - c1Height, 1, c1Height);
                context.fillStyle = this.cost3Color;
                context.fillRect(WIDTH_COST * 2, 20 - c2Height, 1, c2Height);
                var fpsAvg = Math.floor(fpsTotal / lenFps);
                var fpsOutput = numFps + " FPS " + this.renderMode;
                if (this.showPanle) {
                    fpsOutput += "<br/>min" + fpsMin + " max" + fpsMax + " avg" + fpsAvg;
                    this.divDraw.innerHTML = this.lastNumDraw + "<br/>";
                    this.divCost.innerHTML = "<font  style=\"color:#18fefe\">" + numCostTicker + "<font/> <font  style=\"color:#ff0000\">" + numCostRender + "<font/>";
                }
                this.fps.innerHTML = fpsOutput;
            };
            ;
            WebFps.prototype.updateInfo = function (info) {
                this.arrLog.push(info);
                this.log.innerHTML = this.arrLog.join('<br/>');
                while (document.body.clientHeight < (this.log.offsetHeight + this.fpsHeight + this.panelY + this.fontSize * 2)) {
                    this.arrLog.shift();
                    this.log.innerHTML = this.arrLog.join('<br/>');
                }
            };
            WebFps.prototype.updateWarn = function (info) {
            };
            WebFps.prototype.updateError = function (info) {
            };
            return WebFps;
        }(egret.DisplayObject));
        wxapp.WebFps = WebFps;
        __reflect(WebFps.prototype, "egret.wxapp.WebFps", ["egret.FPSDisplay", "egret.DisplayObject"]);
        egret.FPSDisplay = WebFps;
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
if (window['HTMLDivElement'] == undefined) {
    window['HTMLDivElement'] = HTMLElement;
}
// There is no HTMLDivElement in webkit for air
if (window['HTMLVideoElement'] == undefined) {
    window['HTMLVideoElement'] = HTMLDivElement;
}

(function (egret) {
    var wxapp;
    (function (wxapp) {
        var className = "egret.BitmapData";
        egret.registerClass(HTMLImageElement, className);
        egret.registerClass(HTMLCanvasElement, className);
        egret.registerClass(HTMLVideoElement, className);
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
(function (egret) {
    /**
     * ?????? Image???Canvas???Video ??? Egret ?????????????????? BitmapData ?????????
     * @param data ??????????????????????????????HTMLImageElement|HTMLCanvasElement|HTMLVideoElement
     * @deprecated
     */
    function $toBitmapData(data) {
        data["hashCode"] = data["$hashCode"] = egret.$hashCount++;
        return data;
    }
    egret.$toBitmapData = $toBitmapData;
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var localStorage;
    (function (localStorage) {
        var wxapp;
        (function (wxapp) {
            /**
             * @private
             *
             * @param key
             * @returns
             */
            function getItem(key) {
                return window.localStorage.getItem(key);
            }
            /**
             * @private
             *
             * @param key
             * @param value
             * @returns
             */
            function setItem(key, value) {
                try {
                    window.localStorage.setItem(key, value);
                    return true;
                }
                catch (e) {
                    egret.$warn(1047, key, value);
                    return false;
                }
            }
            /**
             * @private
             *
             * @param key
             */
            function removeItem(key) {
                window.localStorage.removeItem(key);
            }
            /**
             * @private
             *
             */
            function clear() {
                window.localStorage.clear();
            }
            localStorage.getItem = getItem;
            localStorage.setItem = setItem;
            localStorage.removeItem = removeItem;
            localStorage.clear = clear;
        })(wxapp = localStorage.wxapp || (localStorage.wxapp = {}));
    })(localStorage = egret.localStorage || (egret.localStorage = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * @private
         * @inheritDoc
         */
        var HtmlSound = (function (_super) {
            __extends(HtmlSound, _super);
            /**
             * @private
             * @inheritDoc
             */
            function HtmlSound() {
                var _this = _super.call(this) || this;
                /**
                 * @private
                 */
                _this.loaded = false;
                return _this;
            }
            Object.defineProperty(HtmlSound.prototype, "length", {
                get: function () {
                    if (this.originAudio) {
                        return this.originAudio.duration;
                    }
                    throw new Error("sound not loaded!");
                    //return 0;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @inheritDoc
             */
            HtmlSound.prototype.load = function (url) {
                var self = this;
                this.url = url;
                if (true && !url) {
                    egret.$error(3002);
                }
                var audio = new Audio(url);
                audio.addEventListener("canplaythrough", onAudioLoaded);
                audio.addEventListener("error", onAudioError);
                var ua = navigator.userAgent.toLowerCase();
                if (ua.indexOf("firefox") >= 0) {
                    audio.autoplay = !0;
                    audio.muted = true;
                }
                // audio.load();     wxapp???????????????
                this.originAudio = audio;
                if (HtmlSound.clearAudios[this.url]) {
                    delete HtmlSound.clearAudios[this.url];
                }
                HtmlSound.$recycle(this.url, audio);
                function onAudioLoaded() {
                    removeListeners();
                    if (ua.indexOf("firefox") >= 0) {
                        audio.pause();
                        audio.muted = false;
                    }
                    self.loaded = true;
                    self.dispatchEventWith(egret.Event.COMPLETE);
                }
                function onAudioError() {
                    removeListeners();
                    self.dispatchEventWith(egret.IOErrorEvent.IO_ERROR);
                }
                function removeListeners() {
                    audio.removeEventListener("canplaythrough", onAudioLoaded);
                    audio.removeEventListener("error", onAudioError);
                }
            };
            /**
             * @inheritDoc
             */
            HtmlSound.prototype.play = function (startTime, loops) {
                startTime = +startTime || 0;
                loops = +loops || 0;
                if (true && this.loaded == false) {
                    egret.$error(1049);
                }
                var audio = HtmlSound.$pop(this.url);
                if (audio == null) {
                    audio = this.originAudio.cloneNode();
                }
                else {
                    //audio.load();
                }
                audio.autoplay = true;
                var channel = new wxapp.HtmlSoundChannel(audio);
                channel.$url = this.url;
                channel.$loops = loops;
                channel.$startTime = startTime;
                channel.$play();
                egret.sys.$pushSoundChannel(channel);
                return channel;
            };
            /**
             * @inheritDoc
             */
            HtmlSound.prototype.close = function () {
                if (this.loaded == false && this.originAudio)
                    this.originAudio.src = "";
                if (this.originAudio)
                    this.originAudio = null;
                HtmlSound.$clear(this.url);
            };
            HtmlSound.$clear = function (url) {
                HtmlSound.clearAudios[url] = true;
                var array = HtmlSound.audios[url];
                if (array) {
                    array.length = 0;
                }
            };
            HtmlSound.$pop = function (url) {
                var array = HtmlSound.audios[url];
                if (array && array.length > 0) {
                    return array.pop();
                }
                return null;
            };
            HtmlSound.$recycle = function (url, audio) {
                if (HtmlSound.clearAudios[url]) {
                    return;
                }
                var array = HtmlSound.audios[url];
                if (HtmlSound.audios[url] == null) {
                    array = HtmlSound.audios[url] = [];
                }
                array.push(audio);
            };
            /**
             * Background music
             * @version Egret 2.4
             * @platform Web,Native
             * @language en_US
             */
            /**
             * ????????????
             * @version Egret 2.4
             * @platform Web,Native
             * @language zh_CN
             */
            HtmlSound.MUSIC = "music";
            /**
             * EFFECT
             * @version Egret 2.4
             * @platform Web,Native
             * @language en_US
             */
            /**
             * ??????
             * @version Egret 2.4
             * @platform Web,Native
             * @language zh_CN
             */
            HtmlSound.EFFECT = "effect";
            /**
             * @private
             */
            HtmlSound.audios = {};
            HtmlSound.clearAudios = {};
            return HtmlSound;
        }(egret.EventDispatcher));
        wxapp.HtmlSound = HtmlSound;
        __reflect(HtmlSound.prototype, "egret.wxapp.HtmlSound", ["egret.Sound"]);
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * @private
         * @inheritDoc
         */
        var HtmlSoundChannel = (function (_super) {
            __extends(HtmlSoundChannel, _super);
            /**
             * @private
             */
            function HtmlSoundChannel(audio) {
                var _this = _super.call(this) || this;
                /**
                 * @private
                 */
                _this.$startTime = 0;
                /**
                 * @private
                 */
                _this.audio = null;
                //??????????????????????????????
                _this.isStopped = false;
                _this.canPlay = function () {
                    _this.audio.removeEventListener("canplay", _this.canPlay);
                    try {
                        _this.audio.currentTime = _this.$startTime;
                    }
                    catch (e) {
                    }
                    finally {
                        _this.audio.play();
                    }
                };
                /**
                 * @private
                 */
                _this.onPlayEnd = function () {
                    if (_this.$loops == 1) {
                        _this.stop();
                        _this.dispatchEventWith(egret.Event.SOUND_COMPLETE);
                        return;
                    }
                    if (_this.$loops > 0) {
                        _this.$loops--;
                    }
                    /////////////
                    //this.audio.load();
                    _this.$play();
                };
                /**
                 * @private
                 */
                _this._volume = 1;
                audio.addEventListener("ended", _this.onPlayEnd);
                _this.audio = audio;
                return _this;
            }
            HtmlSoundChannel.prototype.$play = function () {
                if (this.isStopped) {
                    egret.$error(1036);
                    return;
                }
                try {
                    //this.audio.pause();
                    this.audio.volume = this._volume;
                    this.audio.currentTime = this.$startTime;
                }
                catch (e) {
                    this.audio.addEventListener("canplay", this.canPlay);
                    return;
                }
                this.audio.play();
            };
            /**
             * @private
             * @inheritDoc
             */
            HtmlSoundChannel.prototype.stop = function () {
                if (!this.audio)
                    return;
                if (!this.isStopped) {
                    egret.sys.$popSoundChannel(this);
                }
                this.isStopped = true;
                var audio = this.audio;
                audio.removeEventListener("ended", this.onPlayEnd);
                audio.volume = 0;
                this._volume = 0;
                this.audio = null;
                var url = this.$url;
                //????????????????????????????????????chrome??????
                window.setTimeout(function () {
                    audio.pause();
                    wxapp.HtmlSound.$recycle(url, audio);
                }, 200);
            };
            Object.defineProperty(HtmlSoundChannel.prototype, "volume", {
                /**
                 * @private
                 * @inheritDoc
                 */
                get: function () {
                    return this._volume;
                },
                /**
                 * @inheritDoc
                 */
                set: function (value) {
                    if (this.isStopped) {
                        egret.$error(1036);
                        return;
                    }
                    this._volume = value;
                    if (!this.audio)
                        return;
                    this.audio.volume = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(HtmlSoundChannel.prototype, "position", {
                /**
                 * @private
                 * @inheritDoc
                 */
                get: function () {
                    if (!this.audio)
                        return 0;
                    return this.audio.currentTime;
                },
                enumerable: true,
                configurable: true
            });
            return HtmlSoundChannel;
        }(egret.EventDispatcher));
        wxapp.HtmlSoundChannel = HtmlSoundChannel;
        __reflect(HtmlSoundChannel.prototype, "egret.wxapp.HtmlSoundChannel", ["egret.SoundChannel", "egret.IEventDispatcher"]);
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * @private
         */
        var WebAudioDecode = (function () {
            function WebAudioDecode() {
            }
            /**
             * @private
             *
             */
            WebAudioDecode.decodeAudios = function () {
                if (WebAudioDecode.decodeArr.length <= 0) {
                    return;
                }
                if (WebAudioDecode.isDecoding) {
                    return;
                }
                WebAudioDecode.isDecoding = true;
                var decodeInfo = WebAudioDecode.decodeArr.shift();
                WebAudioDecode.ctx.decodeAudioData(decodeInfo["buffer"], function (audioBuffer) {
                    decodeInfo["self"].audioBuffer = audioBuffer;
                    if (decodeInfo["success"]) {
                        decodeInfo["success"]();
                    }
                    WebAudioDecode.isDecoding = false;
                    WebAudioDecode.decodeAudios();
                }, function () {
                    alert("sound decode error: " + decodeInfo["url"] + "???\nsee http://edn.egret.com/cn/docs/page/156");
                    if (decodeInfo["fail"]) {
                        decodeInfo["fail"]();
                    }
                    WebAudioDecode.isDecoding = false;
                    WebAudioDecode.decodeAudios();
                });
            };
            /**
             * @private
             */
            WebAudioDecode.decodeArr = [];
            /**
             * @private
             */
            WebAudioDecode.isDecoding = false;
            return WebAudioDecode;
        }());
        wxapp.WebAudioDecode = WebAudioDecode;
        __reflect(WebAudioDecode.prototype, "egret.wxapp.WebAudioDecode");
        /**
         * @private
         * @inheritDoc
         */
        var WebAudioSound = (function (_super) {
            __extends(WebAudioSound, _super);
            /**
             * @private
             * @inheritDoc
             */
            function WebAudioSound() {
                var _this = _super.call(this) || this;
                /**
                 * @private
                 */
                _this.loaded = false;
                return _this;
            }
            Object.defineProperty(WebAudioSound.prototype, "length", {
                get: function () {
                    if (this.audioBuffer) {
                        return this.audioBuffer.duration;
                    }
                    throw new Error("sound not loaded!");
                    //return 0;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @inheritDoc
             */
            WebAudioSound.prototype.load = function (url) {
                var self = this;
                this.url = url;
                if (true && !url) {
                    egret.$error(3002);
                }
                var request = new XMLHttpRequest();
                request.open("GET", url, true);
                request.responseType = "arraybuffer";
                request.onreadystatechange = function () {
                    if (request.readyState == 4) {
                        var ioError = (request.status >= 400 || request.status == 0);
                        if (ioError) {
                            self.dispatchEventWith(egret.IOErrorEvent.IO_ERROR);
                        }
                        else {
                            WebAudioDecode.decodeArr.push({
                                "buffer": request.response,
                                "success": onAudioLoaded,
                                "fail": onAudioError,
                                "self": self,
                                "url": self.url
                            });
                            WebAudioDecode.decodeAudios();
                        }
                    }
                };
                request.send();
                function onAudioLoaded() {
                    self.loaded = true;
                    self.dispatchEventWith(egret.Event.COMPLETE);
                }
                function onAudioError() {
                    self.dispatchEventWith(egret.IOErrorEvent.IO_ERROR);
                }
            };
            /**
             * @inheritDoc
             */
            WebAudioSound.prototype.play = function (startTime, loops) {
                startTime = +startTime || 0;
                loops = +loops || 0;
                if (true && this.loaded == false) {
                    egret.$error(1049);
                }
                var channel = new wxapp.WebAudioSoundChannel();
                channel.$url = this.url;
                channel.$loops = loops;
                channel.$audioBuffer = this.audioBuffer;
                channel.$startTime = startTime;
                channel.$play();
                egret.sys.$pushSoundChannel(channel);
                return channel;
            };
            /**
             * @inheritDoc
             */
            WebAudioSound.prototype.close = function () {
            };
            /**
             * Background music
             * @version Egret 2.4
             * @platform Web,Native
             * @language en_US
             */
            /**
             * ????????????
             * @version Egret 2.4
             * @platform Web,Native
             * @language zh_CN
             */
            WebAudioSound.MUSIC = "music";
            /**
             * EFFECT
             * @version Egret 2.4
             * @platform Web,Native
             * @language en_US
             */
            /**
             * ??????
             * @version Egret 2.4
             * @platform Web,Native
             * @language zh_CN
             */
            WebAudioSound.EFFECT = "effect";
            return WebAudioSound;
        }(egret.EventDispatcher));
        wxapp.WebAudioSound = WebAudioSound;
        __reflect(WebAudioSound.prototype, "egret.wxapp.WebAudioSound", ["egret.Sound"]);
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * @private
         * @inheritDoc
         */
        var WebAudioSoundChannel = (function (_super) {
            __extends(WebAudioSoundChannel, _super);
            /**
             * @private
             */
            function WebAudioSoundChannel() {
                var _this = _super.call(this) || this;
                /**
                 * @private
                 */
                _this.$startTime = 0;
                /**
                 * @private
                 */
                _this.bufferSource = null;
                /**
                 * @private
                 */
                _this.context = wxapp.WebAudioDecode.ctx;
                //??????????????????????????????
                _this.isStopped = false;
                /**
                 * @private
                 */
                _this._currentTime = 0;
                /**
                 * @private
                 */
                _this._volume = 1;
                /**
                 * @private
                 */
                _this.onPlayEnd = function () {
                    if (_this.$loops == 1) {
                        _this.stop();
                        _this.dispatchEventWith(egret.Event.SOUND_COMPLETE);
                        return;
                    }
                    if (_this.$loops > 0) {
                        _this.$loops--;
                    }
                    /////////////
                    _this.$play();
                };
                /**
                 * @private
                 */
                _this._startTime = 0;
                if (_this.context["createGain"]) {
                    _this.gain = _this.context["createGain"]();
                }
                else {
                    _this.gain = _this.context["createGainNode"]();
                }
                return _this;
            }
            WebAudioSoundChannel.prototype.$play = function () {
                if (this.isStopped) {
                    egret.$error(1036);
                    return;
                }
                if (this.bufferSource) {
                    this.bufferSource.onended = null;
                    this.bufferSource = null;
                }
                var context = this.context;
                var gain = this.gain;
                var bufferSource = context.createBufferSource();
                this.bufferSource = bufferSource;
                bufferSource.buffer = this.$audioBuffer;
                bufferSource.connect(gain);
                gain.connect(context.destination);
                bufferSource.onended = this.onPlayEnd;
                this._startTime = Date.now();
                this.gain.gain.value = this._volume;
                bufferSource.start(0, this.$startTime);
                this._currentTime = 0;
            };
            WebAudioSoundChannel.prototype.stop = function () {
                if (this.bufferSource) {
                    var sourceNode = this.bufferSource;
                    if (sourceNode.stop) {
                        sourceNode.stop(0);
                    }
                    else {
                        sourceNode.noteOff(0);
                    }
                    sourceNode.onended = null;
                    sourceNode.disconnect();
                    this.bufferSource = null;
                    this.$audioBuffer = null;
                }
                if (!this.isStopped) {
                    egret.sys.$popSoundChannel(this);
                }
                this.isStopped = true;
            };
            Object.defineProperty(WebAudioSoundChannel.prototype, "volume", {
                /**
                 * @private
                 * @inheritDoc
                 */
                get: function () {
                    return this._volume;
                },
                /**
                 * @inheritDoc
                 */
                set: function (value) {
                    if (this.isStopped) {
                        egret.$error(1036);
                        return;
                    }
                    this._volume = value;
                    this.gain.gain.value = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(WebAudioSoundChannel.prototype, "position", {
                /**
                 * @private
                 * @inheritDoc
                 */
                get: function () {
                    if (this.bufferSource) {
                        return (Date.now() - this._startTime) / 1000 + this.$startTime;
                    }
                    return 0;
                },
                enumerable: true,
                configurable: true
            });
            return WebAudioSoundChannel;
        }(egret.EventDispatcher));
        wxapp.WebAudioSoundChannel = WebAudioSoundChannel;
        __reflect(WebAudioSoundChannel.prototype, "egret.wxapp.WebAudioSoundChannel", ["egret.SoundChannel", "egret.IEventDispatcher"]);
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * @private
         * @inheritDoc
         */
        var WebVideo = (function (_super) {
            __extends(WebVideo, _super);
            /**
             * @inheritDoc
             */
            function WebVideo(url, cache) {
                if (cache === void 0) { cache = true; }
                var _this = _super.call(this) || this;
                /**
                 * @private
                 */
                _this.loaded = false;
                /**
                 * @private
                 */
                _this.closed = false;
                /**
                 * @private
                 */
                _this.heightSet = NaN;
                /**
                 * @private
                 */
                _this.widthSet = NaN;
                /**
                 * @private
                 * pc????????????????????????????????????
                 */
                _this.waiting = false;
                /**
                 * @private
                 * ????????????????????? pause
                 */
                _this.userPause = false;
                /**
                 * @private
                 * ????????????????????? play
                 */
                _this.userPlay = false;
                _this.isPlayed = false;
                _this.screenChanged = function (e) {
                    var isfullscreen = document.fullscreenEnabled || document.webkitIsFullScreen;
                    if (!isfullscreen) {
                        _this.checkFullScreen(false);
                        if (!egret.Capabilities.isMobile) {
                            _this._fullscreen = isfullscreen;
                        }
                    }
                };
                _this._fullscreen = true;
                /**
                 * @private
                 *
                 */
                _this.onVideoLoaded = function () {
                    _this.video.removeEventListener("canplay", _this.onVideoLoaded);
                    var video = _this.video;
                    _this.loaded = true;
                    //video.pause();
                    if (_this.posterData) {
                        _this.posterData.width = _this.getPlayWidth();
                        _this.posterData.height = _this.getPlayHeight();
                    }
                    video.width = video.videoWidth;
                    video.height = video.videoHeight;
                    window.setTimeout(function () {
                        _this.dispatchEventWith(egret.Event.COMPLETE);
                    }, 200);
                };
                _this.$renderNode = new egret.sys.BitmapNode();
                _this.src = url;
                _this.once(egret.Event.ADDED_TO_STAGE, _this.loadPoster, _this);
                if (url) {
                    _this.load();
                }
                return _this;
            }
            /**
             * @inheritDoc
             */
            WebVideo.prototype.load = function (url, cache) {
                var _this = this;
                if (cache === void 0) { cache = true; }
                url = url || this.src;
                this.src = url;
                if (true && !url) {
                    egret.$error(3002);
                }
                if (this.video && this.video.src == url) {
                    return;
                }
                var video;
                if (!this.video || egret.Capabilities.isMobile) {
                    video = document.createElement("video");
                    this.video = video;
                    video.controls = null;
                }
                else {
                    video = this.video;
                }
                video.src = url;
                video.setAttribute("autoplay", "autoplay");
                video.setAttribute("webkit-playsinline", "true");
                video.addEventListener("canplay", this.onVideoLoaded);
                video.addEventListener("error", function () { return _this.onVideoError(); });
                video.addEventListener("ended", function () { return _this.onVideoEnded(); });
                var firstPause = false;
                video.addEventListener("canplay", function () {
                    _this.waiting = false;
                    if (!firstPause) {
                        firstPause = true;
                        video.pause();
                    }
                    else {
                        if (_this.userPause) {
                            _this.pause();
                        }
                        else if (_this.userPlay) {
                            _this.play();
                        }
                    }
                });
                video.addEventListener("waiting", function () {
                    _this.waiting = true;
                });
                video.load();
                this.videoPlay();
                video.style.position = "absolute";
                video.style.top = "0px";
                video.style.zIndex = "-88888";
                video.style.left = "0px";
                video.height = 1;
                video.width = 1;
            };
            /**
             * @inheritDoc
             */
            WebVideo.prototype.play = function (startTime, loop) {
                var _this = this;
                if (loop === void 0) { loop = false; }
                if (this.loaded == false) {
                    this.load(this.src);
                    this.once(egret.Event.COMPLETE, function (e) { return _this.play(startTime, loop); }, this);
                    return;
                }
                this.isPlayed = true;
                var video = this.video;
                if (startTime != undefined)
                    video.currentTime = +startTime || 0;
                video.loop = !!loop;
                if (egret.Capabilities.isMobile) {
                    video.style.zIndex = "-88888"; //?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????canvas
                }
                else {
                    video.style.zIndex = "9999";
                }
                video.style.position = "absolute";
                video.style.top = "0px";
                video.style.left = "0px";
                video.height = video.videoHeight;
                video.width = video.videoWidth;
                if (egret.Capabilities.os != "Windows PC" && egret.Capabilities.os != "Mac OS") {
                    window.setTimeout(function () {
                        video.width = 0;
                    }, 1000);
                }
                this.checkFullScreen(this._fullscreen);
            };
            WebVideo.prototype.videoPlay = function () {
                this.userPause = false;
                if (this.waiting) {
                    this.userPlay = true;
                    return;
                }
                this.userPlay = false;
                this.video.play();
            };
            WebVideo.prototype.checkFullScreen = function (playFullScreen) {
                var video = this.video;
                if (playFullScreen) {
                    if (video.parentElement == null) {
                        video.removeAttribute("webkit-playsinline");
                        document.body.appendChild(video);
                    }
                    egret.stopTick(this.markDirty, this);
                    this.goFullscreen();
                }
                else {
                    if (video.parentElement != null) {
                        video.parentElement.removeChild(video);
                    }
                    video.setAttribute("webkit-playsinline", "true");
                    this.setFullScreenMonitor(false);
                    egret.startTick(this.markDirty, this);
                    if (egret.Capabilities.isMobile) {
                        this.video.currentTime = 0;
                        this.onVideoEnded();
                        return;
                    }
                }
                this.videoPlay();
            };
            WebVideo.prototype.goFullscreen = function () {
                var video = this.video;
                var fullscreenType;
                fullscreenType = wxapp.getPrefixStyleName('requestFullscreen', video);
                if (!video[fullscreenType]) {
                    fullscreenType = wxapp.getPrefixStyleName('requestFullScreen', video);
                    if (!video[fullscreenType]) {
                        return true;
                    }
                }
                video.removeAttribute("webkit-playsinline");
                video[fullscreenType]();
                this.setFullScreenMonitor(true);
                return true;
            };
            WebVideo.prototype.setFullScreenMonitor = function (use) {
                var video = this.video;
                if (use) {
                    video.addEventListener("mozfullscreenchange", this.screenChanged);
                    video.addEventListener("webkitfullscreenchange", this.screenChanged);
                    video.addEventListener("mozfullscreenerror", this.screenError);
                    video.addEventListener("webkitfullscreenerror", this.screenError);
                }
                else {
                    video.removeEventListener("mozfullscreenchange", this.screenChanged);
                    video.removeEventListener("webkitfullscreenchange", this.screenChanged);
                    video.removeEventListener("mozfullscreenerror", this.screenError);
                    video.removeEventListener("webkitfullscreenerror", this.screenError);
                }
            };
            WebVideo.prototype.screenError = function () {
                egret.$error(3014);
            };
            WebVideo.prototype.exitFullscreen = function () {
                //????????????
                if (document['exitFullscreen']) {
                    document['exitFullscreen']();
                }
                else if (document['msExitFullscreen']) {
                    document['msExitFullscreen']();
                }
                else if (document['mozCancelFullScreen']) {
                    document['mozCancelFullScreen']();
                }
                else if (document['oCancelFullScreen']) {
                    document['oCancelFullScreen']();
                }
                else if (document['webkitExitFullscreen']) {
                    document['webkitExitFullscreen']();
                }
                else {
                }
            };
            /**
             * @private
             *
             */
            WebVideo.prototype.onVideoEnded = function () {
                this.pause();
                this.isPlayed = false;
                this.dispatchEventWith(egret.Event.ENDED);
            };
            /**
             * @private
             *
             */
            WebVideo.prototype.onVideoError = function () {
                this.dispatchEventWith(egret.IOErrorEvent.IO_ERROR);
            };
            /**
             * @inheritDoc
             */
            WebVideo.prototype.close = function () {
                var _this = this;
                this.closed = true;
                this.video.removeEventListener("canplay", this.onVideoLoaded);
                this.video.removeEventListener("error", function () { return _this.onVideoError(); });
                this.video.removeEventListener("ended", function () { return _this.onVideoEnded(); });
                this.pause();
                if (this.loaded == false && this.video)
                    this.video.src = "";
                if (this.video && this.video.parentElement) {
                    this.video.parentElement.removeChild(this.video);
                    this.video = null;
                }
                this.loaded = false;
            };
            /**
             * @inheritDoc
             */
            WebVideo.prototype.pause = function () {
                this.userPlay = false;
                if (this.waiting) {
                    this.userPause = true;
                    return;
                }
                this.userPause = false;
                egret.stopTick(this.markDirty, this);
            };
            Object.defineProperty(WebVideo.prototype, "volume", {
                /**
                 * @inheritDoc
                 */
                get: function () {
                    if (!this.video)
                        return 1;
                    return this.video.volume;
                },
                /**
                 * @inheritDoc
                 */
                set: function (value) {
                    if (!this.video)
                        return;
                    this.video.volume = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(WebVideo.prototype, "position", {
                /**
                 * @inheritDoc
                 */
                get: function () {
                    if (!this.video)
                        return 0;
                    return this.video.currentTime;
                },
                /**
                 * @inheritDoc
                 */
                set: function (value) {
                    if (!this.video)
                        return;
                    this.video.currentTime = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(WebVideo.prototype, "fullscreen", {
                /**
                 * @inheritDoc
                 */
                get: function () {
                    return this._fullscreen;
                },
                /**
                 * @inheritDoc
                 */
                set: function (value) {
                    if (egret.Capabilities.isMobile) {
                        return;
                    }
                    this._fullscreen = !!value;
                    if (this.video && this.video.paused == false) {
                        this.checkFullScreen(this._fullscreen);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(WebVideo.prototype, "bitmapData", {
                /**
                 * @inheritDoc
                 */
                get: function () {
                    if (!this.video || !this.loaded)
                        return null;
                    if (!this._bitmapData) {
                        this.video.width = this.video.videoWidth;
                        this.video.height = this.video.videoHeight;
                        this._bitmapData = new egret.BitmapData(this.video);
                        this._bitmapData.$deleteSource = false;
                    }
                    return this._bitmapData;
                },
                enumerable: true,
                configurable: true
            });
            WebVideo.prototype.loadPoster = function () {
                var _this = this;
                var poster = this.poster;
                if (!poster)
                    return;
                var imageLoader = new egret.ImageLoader();
                imageLoader.once(egret.Event.COMPLETE, function (e) {
                    var posterData = imageLoader.data;
                    _this.posterData = imageLoader.data;
                    _this.posterData.width = _this.getPlayWidth();
                    _this.posterData.height = _this.getPlayHeight();
                }, this);
                imageLoader.load(poster);
            };
            /**
             * @private
             */
            WebVideo.prototype.$measureContentBounds = function (bounds) {
                var bitmapData = this.bitmapData;
                var posterData = this.posterData;
                if (bitmapData) {
                    bounds.setTo(0, 0, this.getPlayWidth(), this.getPlayHeight());
                }
                else if (posterData) {
                    bounds.setTo(0, 0, this.getPlayWidth(), this.getPlayHeight());
                }
                else {
                    bounds.setEmpty();
                }
            };
            WebVideo.prototype.getPlayWidth = function () {
                if (!isNaN(this.widthSet)) {
                    return this.widthSet;
                }
                if (this.bitmapData) {
                    return this.bitmapData.width;
                }
                if (this.posterData) {
                    return this.posterData.width;
                }
                return NaN;
            };
            WebVideo.prototype.getPlayHeight = function () {
                if (!isNaN(this.heightSet)) {
                    return this.heightSet;
                }
                if (this.bitmapData) {
                    return this.bitmapData.height;
                }
                if (this.posterData) {
                    return this.posterData.height;
                }
                return NaN;
            };
            /**
             * @private
             */
            WebVideo.prototype.$updateRenderNode = function () {
                var node = this.$renderNode;
                var bitmapData = this.bitmapData;
                var posterData = this.posterData;
                var width = this.getPlayWidth();
                var height = this.getPlayHeight();
                if ((!this.isPlayed || egret.Capabilities.isMobile) && posterData) {
                    node.image = posterData;
                    node.imageWidth = width;
                    node.imageHeight = height;
                    node.drawImage(0, 0, posterData.width, posterData.height, 0, 0, width, height);
                }
                else if (this.isPlayed && bitmapData) {
                    node.image = bitmapData;
                    node.imageWidth = bitmapData.width;
                    node.imageHeight = bitmapData.height;
                    egret.WebGLUtils.deleteWebGLTexture(bitmapData.webGLTexture);
                    bitmapData.webGLTexture = null;
                    node.drawImage(0, 0, bitmapData.width, bitmapData.height, 0, 0, width, height);
                }
            };
            WebVideo.prototype.markDirty = function () {
                this.$renderDirty = true;
                return true;
            };
            /**
             * @private
             * ??????????????????
             */
            WebVideo.prototype.$setHeight = function (value) {
                this.heightSet = +value || 0;
                _super.prototype.$setHeight.call(this, value);
            };
            /**
             * @private
             * ??????????????????
             */
            WebVideo.prototype.$setWidth = function (value) {
                this.widthSet = +value || 0;
                _super.prototype.$setWidth.call(this, value);
            };
            Object.defineProperty(WebVideo.prototype, "paused", {
                get: function () {
                    if (this.video) {
                        return this.video.paused;
                    }
                    return true;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(WebVideo.prototype, "length", {
                /**
                 * @inheritDoc
                 */
                get: function () {
                    if (this.video) {
                        return this.video.duration;
                    }
                    throw new Error("Video not loaded!");
                },
                enumerable: true,
                configurable: true
            });
            return WebVideo;
        }(egret.DisplayObject));
        wxapp.WebVideo = WebVideo;
        __reflect(WebVideo.prototype, "egret.wxapp.WebVideo", ["egret.Video", "egret.DisplayObject"]);
        egret.Video = WebVideo;
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * @private
         */
        var WebHttpRequest = (function (_super) {
            __extends(WebHttpRequest, _super);
            /**
             * @private
             */
            function WebHttpRequest() {
                var _this = _super.call(this) || this;
                /**
                 * @private
                 */
                _this._url = "";
                _this._method = "";
                return _this;
            }
            Object.defineProperty(WebHttpRequest.prototype, "response", {
                /**
                 * @private
                 * ????????????????????????????????????????????????responseType?????????????????????
                 */
                get: function () {
                    if (this._response) {
                        return this._response;
                    }
                    if (!this._xhr) {
                        return null;
                    }
                    if (this._xhr.response != undefined) {
                        return this._xhr.response;
                    }
                    if (this._responseType == "text") {
                        return this._xhr.responseText;
                    }
                    if (this._responseType == "arraybuffer" && /msie 9.0/i.test(navigator.userAgent)) {
                        var w = window;
                        return w.convertResponseBodyToText(this._xhr["responseBody"]);
                    }
                    if (this._responseType == "document") {
                        return this._xhr.responseXML;
                    }
                    /*if (this._xhr.responseXML) {
                        return this._xhr.responseXML;
                    }
                    if (this._xhr.responseText != undefined) {
                        return this._xhr.responseText;
                    }*/
                    return null;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(WebHttpRequest.prototype, "responseType", {
                /**
                 * @private
                 * ??????????????????????????????????????? HttpResponseType ?????????????????????????????????????????????????????????????????????HttpResponseType.TEXT???
                 */
                get: function () {
                    return this._responseType;
                },
                set: function (value) {
                    this._responseType = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(WebHttpRequest.prototype, "withCredentials", {
                /**
                 * @private
                 * ?????????????????????(cross-site)???????????????(Access-Control)????????????????????????????????????(??????cookie????????????header)??? ????????? false???(???????????????????????????????????????)
                 */
                get: function () {
                    return this._withCredentials;
                },
                set: function (value) {
                    this._withCredentials = value;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @private
             * ?????????????????????.????????????????????????????????????????????????????????????????????????????????????abort().
             * @param url ????????????????????????URL????????????????????????URL
             * @param method ??????????????????HTTP????????? ????????? HttpMethod ??????????????????.
             */
            WebHttpRequest.prototype.open = function (url, method) {
                if (method === void 0) { method = "GET"; }
                this._url = url;
                this._method = method;
                if (this._xhr) {
                    this._xhr.abort();
                    this._xhr = null;
                }
                this._xhr = new XMLHttpRequest();
                this._xhr.onreadystatechange = this.onReadyStateChange.bind(this);
                this._xhr.onprogress = this.updateProgress.bind(this);
                this._xhr.open(this._method, this._url, true);
            };
            WebHttpRequest.prototype.readFileAsync = function () {
                var self = this;
                var onSuccessFunc = function (content) {
                    self._response = content;
                    self.dispatchEventWith(egret.Event.COMPLETE);
                };
                var onErrorFunc = function () {
                    self.dispatchEventWith(egret.IOErrorEvent.IO_ERROR);
                };
                var fs = wx.getFileSystemManager();
                if (self.responseType == "arraybuffer") {
                    //?????? encoding ???????????????????????????????????? encoding:binary ???????????? string ??????
                    fs.readFile({
                        filePath: self._url,
                        success: function (_a) {
                            var data = _a.data;
                            onSuccessFunc(data);
                        },
                        fail: function () {
                            onErrorFunc();
                        }
                    });
                }
                else {
                    fs.readFile({
                        filePath: self._url,
                        encoding: 'utf8',
                        success: function (_a) {
                            var data = _a.data;
                            onSuccessFunc(data);
                        },
                        fail: function () {
                            onErrorFunc();
                        }
                    });
                }
            };
            /**
             * @private
             * ????????????.
             * @param data ?????????????????????
             */
            WebHttpRequest.prototype.send = function (data) {
                this._response = undefined;
                if (!this.isNetUrl(this._url)) {
                    this.readFileAsync();
                }
                else {
                    if (this._responseType != null) {
                        this._xhr.responseType = this._responseType;
                    }
                    if (this._withCredentials != null) {
                        this._xhr.withCredentials = this._withCredentials;
                    }
                    if (this.headerObj) {
                        for (var key in this.headerObj) {
                            this._xhr.setRequestHeader(key, this.headerObj[key]);
                        }
                    }
                    this._xhr.send(data);
                }
            };
            /**
             * ?????????????????????
             * @param url
             * @returns {boolean}
             */
            WebHttpRequest.prototype.isNetUrl = function (url) {
                return url.indexOf("http://") != -1 || url.indexOf("HTTP://") != -1 || url.indexOf("https://") != -1 || url.indexOf("HTTPS://") != -1;
            };
            /**
             * @private
             * ???????????????????????????,?????????????????????.
             */
            WebHttpRequest.prototype.abort = function () {
                if (this._xhr) {
                    this._xhr.abort();
                }
            };
            /**
             * @private
             * ???????????????????????????(??????????????????), ???????????????????????????,?????????"".
             */
            WebHttpRequest.prototype.getAllResponseHeaders = function () {
                if (!this._xhr) {
                    return null;
                }
                var result = this._xhr.getAllResponseHeaders();
                return result ? result : "";
            };
            /**
             * @private
             * ????????????HTTP???????????????.????????????,??????????????????????????? open() ?????????????????????url.
             * @param header ?????????????????????????????????.
             * @param value ??????????????????????????????.
             */
            WebHttpRequest.prototype.setRequestHeader = function (header, value) {
                if (!this.headerObj) {
                    this.headerObj = {};
                }
                this.headerObj[header] = value;
            };
            /**
             * @private
             * ??????????????????????????????, ??????????????????????????????,????????????????????????,?????????"".
             * @param header ???????????????????????????
             */
            WebHttpRequest.prototype.getResponseHeader = function (header) {
                if (!this._xhr) {
                    return null;
                }
                var result = this._xhr.getResponseHeader(header);
                return result ? result : "";
            };
            /**
             * @private
             */
            WebHttpRequest.prototype.onReadyStateChange = function () {
                var xhr = this._xhr;
                if (xhr.readyState == 4) {
                    var ioError_1 = (xhr.status >= 400 || xhr.status == 0);
                    var url_1 = this._url;
                    var self_1 = this;
                    window.setTimeout(function () {
                        if (ioError_1) {
                            if (true && !self_1.hasEventListener(egret.IOErrorEvent.IO_ERROR)) {
                                egret.$error(1011, url_1);
                            }
                            self_1.dispatchEventWith(egret.IOErrorEvent.IO_ERROR);
                        }
                        else {
                            self_1.dispatchEventWith(egret.Event.COMPLETE);
                        }
                    }, 0);
                }
            };
            /**
             * @private
             */
            WebHttpRequest.prototype.updateProgress = function (event) {
                if (event.lengthComputable) {
                    egret.ProgressEvent.dispatchProgressEvent(this, egret.ProgressEvent.PROGRESS, event.loaded, event.total);
                }
            };
            return WebHttpRequest;
        }(egret.EventDispatcher));
        wxapp.WebHttpRequest = WebHttpRequest;
        __reflect(WebHttpRequest.prototype, "egret.wxapp.WebHttpRequest", ["egret.HttpRequest"]);
        egret.HttpRequest = WebHttpRequest;
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        var winURL = window["URL"] || window["webkitURL"];
        /**
         * @private
         * ImageLoader ???????????????????????????JPG???PNG ??? GIF?????????????????? load() ?????????????????????????????????????????????????????????????????? ImageLoader.data ????????? ???
         */
        var WebImageLoader = (function (_super) {
            __extends(WebImageLoader, _super);
            function WebImageLoader() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                /**
                 * @private
                 * ?????? load() ????????????????????? BitmapData ???????????????
                 */
                _this.data = null;
                /**
                 * @private
                 * ??????????????????????????????????????????????????????????????????????????????(CORS)???????????????null???
                 * ???????????????"anonymous","use-credentials"???null,??????????????????????????????"anonymous"???
                 */
                _this._crossOrigin = null;
                /**
                 * @private
                 * ??????crossOrigin?????????????????????,????????????????????????????????????
                 */
                _this._hasCrossOriginSet = false;
                /**
                 * @private
                 */
                _this.currentImage = null;
                /**
                 * @private
                 */
                _this.request = null;
                return _this;
            }
            Object.defineProperty(WebImageLoader.prototype, "crossOrigin", {
                get: function () {
                    return this._crossOrigin;
                },
                set: function (value) {
                    this._hasCrossOriginSet = true;
                    this._crossOrigin = value;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @private
             * ??????????????????????????????????????????????????????????????????????????????????????? load() ???????????????????????????????????????????????????
             * @param url ????????????????????????????????????
             */
            WebImageLoader.prototype.load = function (url) {
                this.loadImage(url);
            };
            /**
             * @private
             */
            WebImageLoader.prototype.loadImage = function (src) {
                var image = new Image();
                this.data = null;
                this.currentImage = image;
                if (this._hasCrossOriginSet) {
                    if (this._crossOrigin) {
                        image.crossOrigin = this._crossOrigin;
                    }
                }
                else {
                    if (WebImageLoader.crossOrigin) {
                        image.crossOrigin = WebImageLoader.crossOrigin;
                    }
                }
                /*else {
                    if (image.hasAttribute("crossOrigin")) {//????????????
                        image.removeAttribute("crossOrigin");
                    }
                }*/
                image.onload = this.onImageComplete.bind(this);
                image.onerror = this.onLoadError.bind(this);
                image.src = src;
            };
            /**
             * @private
             */
            WebImageLoader.prototype.onImageComplete = function (event) {
                var image = this.getImage(event);
                if (!image) {
                    return;
                }
                this.data = new egret.BitmapData(image);
                var self = this;
                window.setTimeout(function () {
                    self.dispatchEventWith(egret.Event.COMPLETE);
                }, 0);
            };
            /**
             * @private
             */
            WebImageLoader.prototype.onLoadError = function (event) {
                var image = this.getImage(event);
                if (!image) {
                    return;
                }
                this.dispatchIOError(image.src);
            };
            WebImageLoader.prototype.dispatchIOError = function (url) {
                var self = this;
                window.setTimeout(function () {
                    if (true && !self.hasEventListener(egret.IOErrorEvent.IO_ERROR)) {
                        egret.$error(1011, url);
                    }
                    self.dispatchEventWith(egret.IOErrorEvent.IO_ERROR);
                }, 0);
            };
            /**
             * @private
             */
            WebImageLoader.prototype.getImage = function (event) {
                var image = event.target;
                var url = image.src;
                image.onerror = null;
                image.onload = null;
                if (this.currentImage !== image) {
                    return null;
                }
                this.currentImage = null;
                return image;
            };
            /**
             * @private
             * ????????????????????????????????????,??????ImageLoader??????????????????crossOrigin??????????????????????????????
             */
            WebImageLoader.crossOrigin = null;
            return WebImageLoader;
        }(egret.EventDispatcher));
        wxapp.WebImageLoader = WebImageLoader;
        __reflect(WebImageLoader.prototype, "egret.wxapp.WebImageLoader", ["egret.ImageLoader"]);
        egret.ImageLoader = WebImageLoader;
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * @classdesc
         * @extends egret.StageText
         * @private
         */
        var HTML5StageText = (function (_super) {
            __extends(HTML5StageText, _super);
            /**
             * @private
             */
            function HTML5StageText() {
                var _this = _super.call(this) || this;
                /**
                 * @private
                 */
                _this.textValue = "";
                _this.onKeyboardComplete = _this.onKeyboardComplete.bind(_this);
                _this.onKeyboardInput = _this.onKeyboardInput.bind(_this);
                return _this;
            }
            /**
             * @private
             *
             * @param textfield
             */
            HTML5StageText.prototype.$setTextField = function (textfield) {
                this.$textfield = textfield;
                return true;
            };
            /**
             * @private
             *
             */
            HTML5StageText.prototype.$addToStage = function () {
            };
            /**
             * @private
             *
             */
            HTML5StageText.prototype.$show = function () {
                var info = {
                    defaultValue: this.$textfield.text,
                    multiple: this.$textfield.multiline,
                    confirmHold: true,
                    confirmType: 'done',
                    fail: function (res) {
                        console.log(res.errMsg);
                    }
                };
                if (this.$textfield.maxChars) {
                    info.maxLength = this.$textfield.maxChars;
                }
                wx.showKeyboard(info);
                wx.onKeyboardConfirm(this.onKeyboardComplete);
                wx.onKeyboardComplete(this.onKeyboardComplete);
                wx.onKeyboardInput(this.onKeyboardInput);
                this.dispatchEvent(new egret.Event("focus"));
            };
            HTML5StageText.prototype.onKeyboardInput = function (data) {
                this.textValue = data.value;
                egret.Event.dispatchEvent(this, "updateText", false);
            };
            HTML5StageText.prototype.onKeyboardComplete = function (res) {
                this.$textfield.text = res.value;
                this.$hide();
            };
            /**
             * @private
             */
            HTML5StageText.prototype.$hide = function () {
                wx.offKeyboardComplete();
                wx.offKeyboardConfirm();
                wx.offKeyboardInput();
                wx.hideKeyboard({});
                this.dispatchEvent(new egret.Event("blur"));
            };
            /**
             * @private
             *
             * @returns
             */
            HTML5StageText.prototype.$getText = function () {
                if (!this.textValue) {
                    this.textValue = "";
                }
                return this.textValue;
            };
            /**
             * @private
             *
             * @param value
             */
            HTML5StageText.prototype.$setText = function (value) {
                this.textValue = value;
                // this.resetText();
                return true;
            };
            /**
             * @private
             */
            HTML5StageText.prototype.$setColor = function (value) {
                return true;
            };
            HTML5StageText.prototype.$onBlur = function () {
            };
            /**
             * @private
             *
             */
            HTML5StageText.prototype.$removeFromStage = function () {
            };
            /**
             * ????????????
             * @private
             */
            HTML5StageText.prototype.$resetStageText = function () {
            };
            return HTML5StageText;
        }(egret.EventDispatcher));
        wxapp.HTML5StageText = HTML5StageText;
        __reflect(HTML5StageText.prototype, "egret.wxapp.HTML5StageText", ["egret.StageText"]);
        egret.StageText = HTML5StageText;
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * @private
         */
        var context = null;
        /**
         * @private
         */
        var fontCache = {};
        /**
         * ??????????????????????????????????????????
         * @param text ???????????????????????????
         * @param fontFamily ????????????
         * @param fontSize ????????????
         * @param bold ????????????
         * @param italic ????????????
         */
        function measureText(text, fontFamily, fontSize, bold, italic) {
            if (!context) {
                createContext();
            }
            var font = "";
            if (italic)
                font += "italic ";
            if (bold)
                font += "bold ";
            font += (fontSize || 12) + "px ";
            font += (fontFamily || "Arial");
            context.font = font;
            return context.measureText(text).width;
        }
        /**
         * @private
         */
        function createContext() {
            context = egret.sys.canvasHitTestBuffer.context;
            context.textAlign = "left";
            context.textBaseline = "middle";
        }
        egret.sys.measureText = measureText;
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * ????????????canvas???
         */
        function createCanvas(width, height) {
            var canvas = document.createElement("canvas");
            if (!isNaN(width) && !isNaN(height)) {
                canvas.width = width;
                canvas.height = height;
            }
            var context = canvas.getContext("2d");
            if (context["imageSmoothingEnabled"] === undefined) {
                var keys = ["webkitImageSmoothingEnabled", "mozImageSmoothingEnabled", "msImageSmoothingEnabled"];
                var key_1;
                for (var i = keys.length - 1; i >= 0; i--) {
                    key_1 = keys[i];
                    if (context[key_1] !== void 0) {
                        break;
                    }
                }
                try {
                    Object.defineProperty(context, "imageSmoothingEnabled", {
                        get: function () {
                            return this[key_1];
                        },
                        set: function (value) {
                            this[key_1] = value;
                        }
                    });
                }
                catch (e) {
                    context["imageSmoothingEnabled"] = context[key_1];
                }
            }
            return canvas;
        }
        var sharedCanvas;
        /**
         * @private
         * Canvas2D????????????
         */
        var CanvasRenderBuffer = (function () {
            function CanvasRenderBuffer(width, height, root) {
                if (root) {
                    if (egret.wxgame.isSubContext) {
                        this.surface = window["sharedCanvas"];
                    }
                    else {
                        this.surface = window["canvas"];
                    }
                }
                else {
                    this.surface = createCanvas(width, height);
                }
                this.context = this.surface.getContext("2d");
                if (this.context) {
                    this.context.$offsetX = 0;
                    this.context.$offsetY = 0;
                }
            }
            Object.defineProperty(CanvasRenderBuffer.prototype, "width", {
                /**
                 * ?????????????????????????????????????????????
                 * @readOnly
                 */
                get: function () {
                    return this.surface.width;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(CanvasRenderBuffer.prototype, "height", {
                /**
                 * ?????????????????????????????????????????????
                 * @readOnly
                 */
                get: function () {
                    return this.surface.height;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * ?????????????????????????????????????????????
             * @param width ???????????????
             * @param height ???????????????
             * @param useMaxSize ?????????true???????????????????????????????????????????????????????????????????????????
             */
            CanvasRenderBuffer.prototype.resize = function (width, height, useMaxSize) {
                var surface = this.surface;
                if (surface == window["sharedCanvas"]) {
                    return;
                }
                if (useMaxSize) {
                    var change = false;
                    if (surface.width < width) {
                        surface.width = width;
                        change = true;
                    }
                    if (surface.height < height) {
                        surface.height = height;
                        change = true;
                    }
                    //?????????????????????,?????????????????????
                    if (!change) {
                        this.context.globalCompositeOperation = "source-over";
                        this.context.setTransform(1, 0, 0, 1, 0, 0);
                        this.context.globalAlpha = 1;
                    }
                }
                else {
                    if (surface.width != width) {
                        surface.width = width;
                    }
                    if (surface.height != height) {
                        surface.height = height;
                    }
                }
                this.clear();
            };
            /**
             * ???????????????????????????
             */
            CanvasRenderBuffer.prototype.getPixels = function (x, y, width, height) {
                if (width === void 0) { width = 1; }
                if (height === void 0) { height = 1; }
                return this.context.getImageData(x, y, width, height).data;
            };
            /**
             * ?????????base64?????????????????????????????????????????????????????????????????????null
             * @param type ?????????????????????: "image/png","image/jpeg"
             */
            CanvasRenderBuffer.prototype.toDataURL = function (type, encoderOptions) {
                return this.surface.toDataURL(type, encoderOptions);
            };
            /**
             * ?????????????????????
             */
            CanvasRenderBuffer.prototype.clear = function () {
                this.context.setTransform(1, 0, 0, 1, 0, 0);
                this.context.clearRect(0, 0, this.surface.width, this.surface.height);
            };
            /**
             * ??????????????????
             */
            CanvasRenderBuffer.prototype.destroy = function () {
                this.surface.width = this.surface.height = 0;
            };
            return CanvasRenderBuffer;
        }());
        wxapp.CanvasRenderBuffer = CanvasRenderBuffer;
        __reflect(CanvasRenderBuffer.prototype, "egret.wxapp.CanvasRenderBuffer", ["egret.sys.RenderBuffer"]);
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided this the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * @private
         */
        var WebTouchHandler = (function (_super) {
            __extends(WebTouchHandler, _super);
            /**
             * @private
             */
            function WebTouchHandler(stage, canvas) {
                var _this = _super.call(this) || this;
                /**
                 * @private
                 */
                _this.onTouchBegin = function (event) {
                    var location = _this.getLocation(event);
                    _this.touch.onTouchBegin(location.x, location.y, event.identifier);
                };
                /**
                 * @private
                 */
                _this.onTouchMove = function (event) {
                    var location = _this.getLocation(event);
                    _this.touch.onTouchMove(location.x, location.y, event.identifier);
                };
                /**
                 * @private
                 */
                _this.onTouchEnd = function (event) {
                    var location = _this.getLocation(event);
                    _this.touch.onTouchEnd(location.x, location.y, event.identifier);
                };
                /**
                 * @private
                 */
                _this.scaleX = 1;
                /**
                 * @private
                 */
                _this.scaleY = 1;
                /**
                 * @private
                 */
                _this.rotation = 0;
                _this.canvas = canvas;
                _this.touch = new egret.sys.TouchHandler(stage);
                _this.addTouchListener();
                return _this;
            }
            /**
             * @private
             *
             */
            WebTouchHandler.prototype.addTouchListener = function () {
                var self = this;
                if (egret.wxgame.isSubContext) {
                    wx.onTouchStart(function (event) {
                        var l = event.changedTouches.length;
                        for (var i = 0; i < l; i++) {
                            self.onTouchBegin(event.changedTouches[i]);
                        }
                    });
                    wx.onTouchMove(function (event) {
                        var l = event.changedTouches.length;
                        for (var i = 0; i < l; i++) {
                            self.onTouchMove(event.changedTouches[i]);
                        }
                    });
                    wx.onTouchEnd(function (event) {
                        var l = event.changedTouches.length;
                        for (var i = 0; i < l; i++) {
                            self.onTouchEnd(event.changedTouches[i]);
                        }
                    });
                    wx.onTouchCancel(function (event) {
                        var l = event.changedTouches.length;
                        for (var i = 0; i < l; i++) {
                            self.onTouchEnd(event.changedTouches[i]);
                        }
                    });
                }
                else {
                    self.canvas.addEventListener("touchstart", function (event) {
                        var l = event.changedTouches.length;
                        for (var i = 0; i < l; i++) {
                            self.onTouchBegin(event.changedTouches[i]);
                        }
                        self.prevent(event);
                    }, false);
                    self.canvas.addEventListener("touchmove", function (event) {
                        var l = event.changedTouches.length;
                        for (var i = 0; i < l; i++) {
                            self.onTouchMove(event.changedTouches[i]);
                        }
                        self.prevent(event);
                    }, false);
                    self.canvas.addEventListener("touchend", function (event) {
                        var l = event.changedTouches.length;
                        for (var i = 0; i < l; i++) {
                            self.onTouchEnd(event.changedTouches[i]);
                        }
                        self.prevent(event);
                    }, false);
                    self.canvas.addEventListener("touchcancel", function (event) {
                        var l = event.changedTouches.length;
                        for (var i = 0; i < l; i++) {
                            self.onTouchEnd(event.changedTouches[i]);
                        }
                        self.prevent(event);
                    }, false);
                }
            };
            /**
             * @private
             */
            WebTouchHandler.prototype.prevent = function (event) {
                event.stopPropagation();
                if (event["isScroll"] != true && !this.canvas['userTyping']) {
                    event.preventDefault();
                }
            };
            /**
             * @private
             */
            WebTouchHandler.prototype.getLocation = function (event) {
                //   event.identifier = +event.identifier || 0;        wxapp ?????????????????????
                var doc = document.documentElement;
                var box = this.canvas.getBoundingClientRect();
                var left = box.left;
                var top = box.top;
                var x = event.pageX - left, newx = x;
                var y = event.pageY - top, newy = y;
                if (this.rotation == 90) {
                    newx = y;
                    newy = box.width - x;
                }
                else if (this.rotation == -90) {
                    newx = box.height - y;
                    newy = x;
                }
                newx = newx / this.scaleX;
                newy = newy / this.scaleY;
                return egret.$TempPoint.setTo(Math.round(newx), Math.round(newy));
            };
            /**
             * @private
             * ????????????????????????????????????????????????????????????????????????
             * @param scaleX ??????????????????????????????
             * @param scaleY ??????????????????????????????
             */
            WebTouchHandler.prototype.updateScaleMode = function (scaleX, scaleY, rotation) {
                this.scaleX = scaleX;
                this.scaleY = scaleY;
                this.rotation = rotation;
            };
            /**
             * @private
             * ??????????????????????????????
             */
            WebTouchHandler.prototype.$updateMaxTouches = function () {
                this.touch.$initMaxTouches();
            };
            return WebTouchHandler;
        }(egret.HashObject));
        wxapp.WebTouchHandler = WebTouchHandler;
        __reflect(WebTouchHandler.prototype, "egret.wxapp.WebTouchHandler");
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * @private
         */
        wxapp.WebLifeCycleHandler = function (context) {
            var handleVisibilityChange = function () {
                if (!document[hidden]) {
                    context.resume();
                }
                else {
                    context.pause();
                }
            };
            window.addEventListener("focus", context.resume, false);
            window.addEventListener("blur", context.pause, false);
            var hidden, visibilityChange;
            if (typeof document.hidden !== "undefined") {
                hidden = "hidden";
                visibilityChange = "visibilitychange";
            }
            else if (typeof document["mozHidden"] !== "undefined") {
                hidden = "mozHidden";
                visibilityChange = "mozvisibilitychange";
            }
            else if (typeof document["msHidden"] !== "undefined") {
                hidden = "msHidden";
                visibilityChange = "msvisibilitychange";
            }
            else if (typeof document["webkitHidden"] !== "undefined") {
                hidden = "webkitHidden";
                visibilityChange = "webkitvisibilitychange";
            }
            else if (typeof document["oHidden"] !== "undefined") {
                hidden = "oHidden";
                visibilityChange = "ovisibilitychange";
            }
            if ("onpageshow" in window && "onpagehide" in window) {
                window.addEventListener("pageshow", context.resume, false);
                window.addEventListener("pagehide", context.pause, false);
            }
            if (hidden && visibilityChange) {
                document.addEventListener(visibilityChange, handleVisibilityChange, false);
            }
            var ua = navigator.userAgent;
            var isWX = /micromessenger/gi.test(ua);
            var isQQBrowser = /mqq/ig.test(ua);
            var isQQ = /mobile.*qq/gi.test(ua);
            if (isQQ || isWX) {
                isQQBrowser = false;
            }
            if (isQQBrowser) {
                var browser = window["browser"] || {};
                browser.execWebFn = browser.execWebFn || {};
                browser.execWebFn.postX5GamePlayerMessage = function (event) {
                    var eventType = event.type;
                    if (eventType == "app_enter_background") {
                        context.pause();
                    }
                    else if (eventType == "app_enter_foreground") {
                        context.resume();
                    }
                };
                window["browser"] = browser;
            }
        };
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * @private
         */
        var AudioType = (function () {
            function AudioType() {
            }
            /**
             * @private
             */
            AudioType.WEB_AUDIO = 2;
            /**
             * @private
             */
            AudioType.HTML5_AUDIO = 3;
            return AudioType;
        }());
        wxapp.AudioType = AudioType;
        __reflect(AudioType.prototype, "egret.wxapp.AudioType");
        /**
         * @private
         */
        var SystemOSType = (function () {
            function SystemOSType() {
            }
            /**
             * @private
             */
            SystemOSType.WPHONE = 1;
            /**
             * @private
             */
            SystemOSType.IOS = 2;
            /**
             * @private
             */
            SystemOSType.ADNROID = 3;
            return SystemOSType;
        }());
        wxapp.SystemOSType = SystemOSType;
        __reflect(SystemOSType.prototype, "egret.wxapp.SystemOSType");
        /**
         * html5???????????????
         * @private
         */
        var Html5Capatibility = (function (_super) {
            __extends(Html5Capatibility, _super);
            /**
             * @private
             */
            function Html5Capatibility() {
                return _super.call(this) || this;
            }
            /**
             * @private
             *
             */
            Html5Capatibility.$init = function () {
                var ua = navigator.userAgent.toLowerCase();
                Html5Capatibility.ua = ua;
                egret.Capabilities.$isMobile = (ua.indexOf('mobile') != -1 || ua.indexOf('android') != -1);
                Html5Capatibility._canUseBlob = false;
                var canUseWebAudio = window["AudioContext"] || window["webkitAudioContext"] || window["mozAudioContext"];
                if (canUseWebAudio) {
                    try {
                        //????????????chrome????????????????????????
                        wxapp.WebAudioDecode.ctx = new (window["AudioContext"] || window["webkitAudioContext"] || window["mozAudioContext"])();
                    }
                    catch (e) {
                        canUseWebAudio = false;
                    }
                }
                var audioType = Html5Capatibility._audioType;
                var checkAudioType;
                if ((audioType == AudioType.WEB_AUDIO && canUseWebAudio) || audioType == AudioType.HTML5_AUDIO) {
                    checkAudioType = false;
                    Html5Capatibility.setAudioType(audioType);
                }
                else {
                    checkAudioType = true;
                    Html5Capatibility.setAudioType(AudioType.HTML5_AUDIO);
                }
                if (ua.indexOf("windows phone") >= 0) {
                    Html5Capatibility._System_OS = SystemOSType.WPHONE;
                    egret.Capabilities.$os = "Windows Phone";
                }
                else if (ua.indexOf("android") >= 0) {
                    egret.Capabilities.$os = "Android";
                    Html5Capatibility._System_OS = SystemOSType.ADNROID;
                    if (checkAudioType && canUseWebAudio) {
                        Html5Capatibility.setAudioType(AudioType.WEB_AUDIO);
                    }
                }
                else if (ua.indexOf("iphone") >= 0 || ua.indexOf("ipad") >= 0 || ua.indexOf("ipod") >= 0) {
                    egret.Capabilities.$os = "iOS";
                    Html5Capatibility._System_OS = SystemOSType.IOS;
                    if (Html5Capatibility.getIOSVersion() >= 7) {
                        Html5Capatibility._canUseBlob = true;
                        if (checkAudioType && canUseWebAudio) {
                            Html5Capatibility.setAudioType(AudioType.WEB_AUDIO);
                        }
                    }
                }
                else {
                    if (ua.indexOf("windows nt") != -1) {
                        egret.Capabilities.$os = "Windows PC";
                    }
                    else if (ua.indexOf("mac os") != -1) {
                        egret.Capabilities.$os = "Mac OS";
                    }
                }
                var winURL = window["URL"] || window["webkitURL"];
                if (!winURL) {
                    Html5Capatibility._canUseBlob = false;
                }
                if (ua.indexOf("egretnative") >= 0) {
                    Html5Capatibility.setAudioType(AudioType.HTML5_AUDIO);
                    Html5Capatibility._canUseBlob = true;
                }
                egret.Sound = Html5Capatibility._AudioClass;
            };
            Html5Capatibility.setAudioType = function (type) {
                Html5Capatibility._audioType = type;
                switch (type) {
                    case AudioType.WEB_AUDIO:
                        Html5Capatibility._AudioClass = egret.wxapp.WebAudioSound;
                        break;
                    case AudioType.HTML5_AUDIO:
                        Html5Capatibility._AudioClass = egret.wxapp.HtmlSound;
                        break;
                }
            };
            /**
             * @private
             * ??????ios??????
             * @returns {string}
             */
            Html5Capatibility.getIOSVersion = function () {
                var value = Html5Capatibility.ua.toLowerCase().match(/cpu [^\d]*\d.*like mac os x/)[0];
                return parseInt(value.match(/\d+(_\d)*/)[0]) || 0;
            };
            /**
             * @private
             *
             */
            Html5Capatibility.checkHtml5Support = function () {
                var language = (navigator.language || navigator["browserLanguage"]).toLowerCase();
                var strings = language.split("-");
                if (strings.length > 1) {
                    strings[1] = strings[1].toUpperCase();
                }
                egret.Capabilities.$language = strings.join("-");
            };
            //?????????????????????????????????blob
            Html5Capatibility._canUseBlob = false;
            //?????????????????????????????????webaudio
            Html5Capatibility._audioType = 0;
            /**
             * @private
             */
            Html5Capatibility._System_OS = 0;
            /**
             * @private
             */
            Html5Capatibility.ua = "";
            return Html5Capatibility;
        }(egret.HashObject));
        wxapp.Html5Capatibility = Html5Capatibility;
        __reflect(Html5Capatibility.prototype, "egret.wxapp.Html5Capatibility");
        /**
         * @private
         */
        var currentPrefix = null;
        /**
         * @private
         */
        function getPrefixStyleName(name, element) {
            var header = "";
            if (element != null) {
                header = getPrefix(name, element);
            }
            else {
                if (currentPrefix == null) {
                    var tempStyle = document.createElement('div').style;
                    currentPrefix = getPrefix("transform", tempStyle);
                }
                header = currentPrefix;
            }
            if (header == "") {
                return name;
            }
            return header + name.charAt(0).toUpperCase() + name.substring(1, name.length);
        }
        wxapp.getPrefixStyleName = getPrefixStyleName;
        /**
         * @private
         */
        function getPrefix(name, element) {
            if (name in element) {
                return "";
            }
            name = name.charAt(0).toUpperCase() + name.substring(1, name.length);
            var transArr = ["webkit", "ms", "Moz", "O"];
            for (var i = 0; i < transArr.length; i++) {
                var tempStyle = transArr[i] + name;
                if (tempStyle in element) {
                    return transArr[i];
                }
            }
            return "";
        }
        wxapp.getPrefix = getPrefix;
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxgame;
    (function (wxgame) {
        /**
         * ?????????????????????????????????
         */
        wxgame.version = "1.0.10";
        /**
         * ???????????????????????????
         */
        wxgame.isSubContext = false;
    })(wxgame = egret.wxgame || (egret.wxgame = {}));
})(egret || (egret = {}));
(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * @private
         * ????????????Egret???????????????????????????????????????????????????JavaScript?????????????????????Egret??????????????????????????????????????????????????????????????????
         * ????????????????????????????????????????????????????????????
         */
        function updateAllScreens() {
            if (!isRunning) {
                return;
            }
            // let containerList = document.querySelectorAll(".egret-player");
            // let length = containerList.length;
            // for (let i = 0; i < length; i++) {
            //     let container = containerList[i];
            //     let player = <WebPlayer>container["egret-player"];
            window['player'].updateScreenSize();
            // }
        }
        var isRunning = false;
        /**
         * @private
         * ????????????????????????????????????????????????Egret??????
         */
        function runEgret(options) {
            if (isRunning) {
                return;
            }
            isRunning = true;
            if (!options) {
                options = {};
            }
            wxapp.Html5Capatibility._audioType = options.audioType;
            wxapp.Html5Capatibility.$init();
            // WebGL????????????????????????
            if (options.renderMode == "webgl") {
                // WebGL??????????????????????????????PC?????????????????????
                var antialias = options.antialias;
                wxapp.WebGLRenderContext.antialias = !!antialias;
                // WebGLRenderContext.antialias = (typeof antialias == undefined) ? true : antialias;
            }
            egret.sys.CanvasRenderBuffer = wxapp.CanvasRenderBuffer;
            setRenderMode(options.renderMode);
            var canvasScaleFactor;
            if (options.canvasScaleFactor) {
                canvasScaleFactor = options.canvasScaleFactor;
            }
            else if (options.calculateCanvasScaleFactor) {
                canvasScaleFactor = options.calculateCanvasScaleFactor(egret.sys.canvasHitTestBuffer.context);
            }
            else {
                //based on : https://github.com/jondavidjohn/hidpi-canvas-polyfill
                var context = egret.sys.canvasHitTestBuffer.context;
                var backingStore = context.backingStorePixelRatio ||
                    context.webkitBackingStorePixelRatio ||
                    context.mozBackingStorePixelRatio ||
                    context.msBackingStorePixelRatio ||
                    context.oBackingStorePixelRatio ||
                    context.backingStorePixelRatio || 1;
                canvasScaleFactor = (window.devicePixelRatio || 1) / backingStore;
            }
            egret.sys.DisplayList.$canvasScaleFactor = canvasScaleFactor;
            var ticker = egret.ticker;
            startTicker(ticker);
            if (options.screenAdapter) {
                egret.sys.screenAdapter = options.screenAdapter;
            }
            else if (!egret.sys.screenAdapter) {
                egret.sys.screenAdapter = new egret.sys.DefaultScreenAdapter();
            }
            // let list = document.querySelectorAll(".egret-player");
            // let length = list.length;
            // for (let i = 0; i < length; i++) {
            //     let container = <HTMLDivElement>list[i];
            //     let player = new WebPlayer(container, options);
            //     container["egret-player"] = player;
            // }
            var container = {};
            var player = new wxapp.WebPlayer(container, options);
            window['player'] = player;
            window.addEventListener("resize", function () {
                if (isNaN(resizeTimer)) {
                    resizeTimer = window.setTimeout(doResize, 300);
                }
            });
        }
        /**
         * ?????????????????????"auto","webgl","canvas"
         * @param renderMode
         */
        function setRenderMode(renderMode) {
            if (!egret.wxgame.isSubContext) {
                egret.Capabilities.$renderMode = "webgl";
                egret.sys.RenderBuffer = wxapp.WebGLRenderBuffer;
                egret.sys.systemRenderer = new wxapp.WebGLRenderer();
                egret.sys.canvasRenderer = new egret.CanvasRenderer();
                egret.sys.customHitTestBuffer = new wxapp.WebGLRenderBuffer(3, 3);
                egret.sys.canvasHitTestBuffer = new wxapp.CanvasRenderBuffer(3, 3);
            }
            else {
                egret.Capabilities.$renderMode = "canvas";
                egret.sys.RenderBuffer = wxapp.CanvasRenderBuffer;
                egret.sys.systemRenderer = new egret.CanvasRenderer();
                egret.sys.canvasRenderer = egret.sys.systemRenderer;
                egret.sys.customHitTestBuffer = new wxapp.CanvasRenderBuffer(3, 3);
                egret.sys.canvasHitTestBuffer = egret.sys.customHitTestBuffer;
            }
        }
        /**
         * @private
         * ????????????????????????
         */
        function startTicker(ticker) {
            var requestAnimationFrame = window["requestAnimationFrame"] ||
                window["webkitRequestAnimationFrame"] ||
                window["mozRequestAnimationFrame"] ||
                window["oRequestAnimationFrame"] ||
                window["msRequestAnimationFrame"];
            if (!requestAnimationFrame) {
                requestAnimationFrame = function (callback) {
                    return window.setTimeout(callback, 1000 / 60);
                };
            }
            requestAnimationFrame(onTick);
            function onTick() {
                ticker.update();
                requestAnimationFrame(onTick);
            }
        }
        //???????????????isNaN()???????????????????????????????????????2~10??????????????????
        window["isNaN"] = function (value) {
            value = +value;
            return value !== value;
        };
        egret.runEgret = runEgret;
        egret.updateAllScreens = updateAllScreens;
        var resizeTimer = NaN;
        function doResize() {
            resizeTimer = NaN;
            egret.updateAllScreens();
        }
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
if (true) {
    var language = navigator.language || navigator["browserLanguage"] || "en_US";
    language = language.replace("-", "_");
    if (language in egret.$locale_strings)
        egret.$language = language;
}
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * @private
         */
        var WebCapability = (function () {
            function WebCapability() {
            }
            /**
             * @private
             * ??????????????????
             */
            WebCapability.detect = function () {
                var capabilities = egret.Capabilities;
                var ua = navigator.userAgent.toLowerCase();
                capabilities.$isMobile = (ua.indexOf('mobile') != -1 || ua.indexOf('android') != -1);
                if (capabilities.$isMobile) {
                    if (ua.indexOf("windows") < 0 && (ua.indexOf("iphone") != -1 || ua.indexOf("ipad") != -1 || ua.indexOf("ipod") != -1)) {
                        capabilities.$os = "iOS";
                    }
                    else if (ua.indexOf("android") != -1 && ua.indexOf("linux") != -1) {
                        capabilities.$os = "Android";
                    }
                    else if (ua.indexOf("windows") != -1) {
                        capabilities.$os = "Windows Phone";
                    }
                }
                else {
                    if (ua.indexOf("windows nt") != -1) {
                        capabilities.$os = "Windows PC";
                    }
                    else if (ua.indexOf("mac os") != -1) {
                        capabilities.$os = "Mac OS";
                    }
                }
                var language = (navigator.language || navigator["browserLanguage"]).toLowerCase();
                var strings = language.split("-");
                if (strings.length > 1) {
                    strings[1] = strings[1].toUpperCase();
                }
                capabilities.$language = strings.join("-");
                WebCapability.injectUIntFixOnIE9();
            };
            WebCapability.injectUIntFixOnIE9 = function () {
                if (/msie 9.0/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
                    var IEBinaryToArray_ByteStr_Script = "<!-- IEBinaryToArray_ByteStr -->\r\n" +
                        "<script type='text/vbscript' language='VBScript'>\r\n" +
                        "Function IEBinaryToArray_ByteStr(Binary)\r\n" +
                        "   IEBinaryToArray_ByteStr = CStr(Binary)\r\n" +
                        "End Function\r\n" +
                        "Function IEBinaryToArray_ByteStr_Last(Binary)\r\n" +
                        "   Dim lastIndex\r\n" +
                        "   lastIndex = LenB(Binary)\r\n" +
                        "   if lastIndex mod 2 Then\r\n" +
                        "       IEBinaryToArray_ByteStr_Last = Chr( AscB( MidB( Binary, lastIndex, 1 ) ) )\r\n" +
                        "   Else\r\n" +
                        "       IEBinaryToArray_ByteStr_Last = " + '""' + "\r\n" +
                        "   End If\r\n" +
                        "End Function\r\n" + "<\/script>\r\n" +
                        "<!-- convertResponseBodyToText -->\r\n" +
                        "<script>\r\n" +
                        "let convertResponseBodyToText = function (binary) {\r\n" +
                        "   let byteMapping = {};\r\n" +
                        "   for ( let i = 0; i < 256; i++ ) {\r\n" +
                        "       for ( let j = 0; j < 256; j++ ) {\r\n" +
                        "           byteMapping[ String.fromCharCode( i + j * 256 ) ] =\r\n" +
                        "           String.fromCharCode(i) + String.fromCharCode(j);\r\n" +
                        "       }\r\n" +
                        "   }\r\n" +
                        "   let rawBytes = IEBinaryToArray_ByteStr(binary);\r\n" +
                        "   let lastChr = IEBinaryToArray_ByteStr_Last(binary);\r\n" +
                        "   return rawBytes.replace(/[\\s\\S]/g," +
                        "                           function( match ) { return byteMapping[match]; }) + lastChr;\r\n" +
                        "};\r\n" +
                        "<\/script>\r\n";
                    document.write(IEBinaryToArray_ByteStr_Script);
                }
            };
            return WebCapability;
        }());
        wxapp.WebCapability = WebCapability;
        __reflect(WebCapability.prototype, "egret.wxapp.WebCapability");
        WebCapability.detect();
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * @private
         */
        var WebExternalInterface = (function () {
            function WebExternalInterface() {
            }
            /**
             * @private
             * @param functionName
             * @param value
             */
            WebExternalInterface.call = function (functionName, value) {
            };
            /**
             * @private
             * @param functionName
             * @param listener
             */
            WebExternalInterface.addCallback = function (functionName, listener) {
            };
            return WebExternalInterface;
        }());
        wxapp.WebExternalInterface = WebExternalInterface;
        __reflect(WebExternalInterface.prototype, "egret.wxapp.WebExternalInterface", ["egret.ExternalInterface"]);
        var ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf("egretnative") < 0) {
            egret.ExternalInterface = WebExternalInterface;
        }
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
(function (egret) {
    var wxapp;
    (function (wxapp) {
        var callBackDic = {};
        /**
         * @private
         */
        var NativeExternalInterface = (function () {
            function NativeExternalInterface() {
            }
            NativeExternalInterface.call = function (functionName, value) {
                var data = {};
                data.functionName = functionName;
                data.value = value;
                egret_native.sendInfoToPlugin(JSON.stringify(data));
            };
            NativeExternalInterface.addCallback = function (functionName, listener) {
                callBackDic[functionName] = listener;
            };
            return NativeExternalInterface;
        }());
        wxapp.NativeExternalInterface = NativeExternalInterface;
        __reflect(NativeExternalInterface.prototype, "egret.wxapp.NativeExternalInterface", ["egret.ExternalInterface"]);
        /**
         * @private
         * @param info
         */
        function onReceivedPluginInfo(info) {
            var data = JSON.parse(info);
            var functionName = data.functionName;
            var listener = callBackDic[functionName];
            if (listener) {
                var value = data.value;
                listener.call(null, value);
            }
            else {
                egret.$warn(1050, functionName);
            }
        }
        var ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf("egretnative") >= 0) {
            egret.ExternalInterface = NativeExternalInterface;
            egret_native.receivedPluginInfo = onReceivedPluginInfo;
        }
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * @private
         */
        function getOption(key) {
            if (window.location) {
                var search = location.search;
                if (search == "") {
                    return "";
                }
                search = search.slice(1);
                var searchArr = search.split("&");
                var length_1 = searchArr.length;
                for (var i = 0; i < length_1; i++) {
                    var str = searchArr[i];
                    var arr = str.split("=");
                    if (arr[0] == key) {
                        return arr[1];
                    }
                }
            }
            return "";
        }
        wxapp.getOption = getOption;
        egret.getOption = getOption;
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * @private
         */
        var WebPlayer = (function (_super) {
            __extends(WebPlayer, _super);
            function WebPlayer(container, options) {
                var _this = _super.call(this) || this;
                _this.init(container, options);
                _this.initOrientation();
                return _this;
            }
            WebPlayer.prototype.init = function (container, options) {
                var option = this.readOption(container, options);
                var stage = new egret.Stage();
                stage.$screen = this;
                stage.$scaleMode = option.scaleMode;
                stage.$orientation = option.orientation;
                stage.$maxTouches = option.maxTouches;
                stage.frameRate = option.frameRate;
                stage.textureScaleFactor = option.textureScaleFactor;
                var buffer = new egret.sys.RenderBuffer(undefined, undefined, true);
                var canvas = buffer.surface;
                this.attachCanvas(container, canvas);
                var webTouch = new wxapp.WebTouchHandler(stage, canvas);
                var player = new egret.sys.Player(buffer, stage, option.entryClassName);
                egret.lifecycle.stage = stage;
                egret.lifecycle.addLifecycleListener(wxapp.WebLifeCycleHandler);
                if (option.showFPS || option.showLog) {
                    player.displayFPS(option.showFPS, option.showLog, option.logFilter, option.fpsStyles);
                }
                this.playerOption = option;
                this.container = container;
                this.canvas = canvas;
                this.stage = stage;
                this.player = player;
                this.webTouchHandler = webTouch;
                this.updateScreenSize();
                this.updateMaxTouches();
                player.start();
            };
            WebPlayer.prototype.initOrientation = function () {
                var self = this;
                window.addEventListener("orientationchange", function () {
                    window.setTimeout(function () {
                        egret.StageOrientationEvent.dispatchStageOrientationEvent(self.stage, egret.StageOrientationEvent.ORIENTATION_CHANGE);
                    }, 350);
                });
            };
            /**
             * ?????????????????????
             */
            WebPlayer.prototype.readOption = function (container, options) {
                var option = {};
                option.entryClassName = options.entryClassName || "Main";
                option.scaleMode = options.scaleMode || egret.StageScaleMode.FIXED_WIDTH;
                if (option.scaleMode == egret.StageScaleMode.SHOW_ALL) {
                    throw new Error("?????????????????? showAll ??????????????????????????? fixedWidth ??????");
                }
                option.frameRate = options.frameRate || 30;
                option.contentWidth = options.contentWidth || 640;
                option.contentHeight = options.contentHeight || 1136;
                option.orientation = options.orientation || egret.OrientationMode.AUTO;
                option.maxTouches = 2;
                option.textureScaleFactor = 1;
                option.showFPS = false;
                var styleStr = "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9";
                var stylesArr = styleStr.split(",");
                var styles = {};
                for (var i = 0; i < stylesArr.length; i++) {
                    var tempStyleArr = stylesArr[i].split(":");
                    styles[tempStyleArr[0]] = tempStyleArr[1];
                }
                option.fpsStyles = styles;
                option.showLog = false;
                option.logFilter = "";
                return option;
            };
            /**
             * @private
             * ??????canvas???container???
             */
            WebPlayer.prototype.attachCanvas = function (container, canvas) {
                var style = canvas.style;
                style.cursor = "inherit";
                style.position = "absolute";
                style.top = "0";
                style.bottom = "0";
                style.left = "0";
                style.right = "0";
                // container.appendChild(canvas);
                // style = container.style;
                // style.overflow = "hidden";
                // style.position = "absolute";
            };
            /**
             * @private
             * ???????????????????????????
             */
            WebPlayer.prototype.updateScreenSize = function () {
                var canvas = this.canvas;
                if (canvas['userTyping'])
                    return;
                var option = this.playerOption;
                var screenRect = canvas.getBoundingClientRect();
                var top = 0;
                var boundingClientWidth = screenRect.width;
                var boundingClientHeight = screenRect.height;
                if (screenRect.top < 0) {
                    boundingClientHeight += screenRect.top;
                    top = -screenRect.top;
                }
                var shouldRotate = false;
                var orientation = this.stage.$orientation;
                if (orientation != egret.OrientationMode.AUTO) {
                    shouldRotate = orientation != egret.OrientationMode.PORTRAIT && boundingClientHeight > boundingClientWidth
                        || orientation == egret.OrientationMode.PORTRAIT && boundingClientWidth > boundingClientHeight;
                }
                var screenWidth = shouldRotate ? boundingClientHeight : boundingClientWidth;
                var screenHeight = shouldRotate ? boundingClientWidth : boundingClientHeight;
                egret.Capabilities.$boundingClientWidth = screenWidth;
                egret.Capabilities.$boundingClientHeight = screenHeight;
                var stageSize = egret.sys.screenAdapter.calculateStageSize(this.stage.$scaleMode, screenWidth, screenHeight, option.contentWidth, option.contentHeight);
                var stageWidth = stageSize.stageWidth;
                var stageHeight = stageSize.stageHeight;
                var displayWidth = stageSize.displayWidth;
                var displayHeight = stageSize.displayHeight;
                canvas.style[egret.wxapp.getPrefixStyleName("transformOrigin")] = "0% 0% 0px";
                if (canvas.width != stageWidth) {
                    if (!egret.wxgame.isSubContext) {
                        if (window["sharedCanvas"]) {
                            window["sharedCanvas"].width = stageWidth;
                        }
                        canvas.width = stageWidth;
                    }
                }
                if (canvas.height != stageHeight) {
                    if (!egret.wxgame.isSubContext) {
                        if (window["sharedCanvas"]) {
                            window["sharedCanvas"].height = stageHeight;
                        }
                        canvas.height = stageHeight;
                    }
                }
                var rotation = 0;
                if (shouldRotate) {
                    if (orientation == egret.OrientationMode.LANDSCAPE) {
                        rotation = 90;
                        canvas.style.top = top + (boundingClientHeight - displayWidth) / 2 + "px";
                        canvas.style.left = (boundingClientWidth + displayHeight) / 2 + "px";
                    }
                    else {
                        rotation = -90;
                        canvas.style.top = top + (boundingClientHeight + displayWidth) / 2 + "px";
                        canvas.style.left = (boundingClientWidth - displayHeight) / 2 + "px";
                    }
                }
                else {
                    canvas.style.top = top + (boundingClientHeight - displayHeight) / 2 + "px";
                    canvas.style.left = (boundingClientWidth - displayWidth) / 2 + "px";
                }
                var scalex = displayWidth / stageWidth, scaley = displayHeight / stageHeight;
                var canvasScaleX = scalex * egret.sys.DisplayList.$canvasScaleFactor;
                var canvasScaleY = scaley * egret.sys.DisplayList.$canvasScaleFactor;
                // if (egret.Capabilities.$renderMode == "canvas") {
                //     canvasScaleX = Math.ceil(canvasScaleX);
                //     canvasScaleY = Math.ceil(canvasScaleY);
                // }
                var m = new egret.Matrix();
                m.scale(scalex / canvasScaleX, scaley / canvasScaleY);
                m.rotate(rotation * Math.PI / 180);
                var transform = "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + m.tx + "," + m.ty + ")";
                canvas.style[egret.wxapp.getPrefixStyleName("transform")] = transform;
                egret.sys.DisplayList.$setCanvasScale(canvasScaleX, canvasScaleY);
                this.webTouchHandler.updateScaleMode(scalex, scaley, rotation);
                this.player.updateStageSize(stageWidth, stageHeight); //???????????????????????????????????????
            };
            WebPlayer.prototype.setContentSize = function (width, height) {
                var option = this.playerOption;
                option.contentWidth = width;
                option.contentHeight = height;
                this.updateScreenSize();
            };
            /**
             * @private
             * ??????????????????
             */
            WebPlayer.prototype.updateMaxTouches = function () {
                this.webTouchHandler.$updateMaxTouches();
            };
            return WebPlayer;
        }(egret.HashObject));
        wxapp.WebPlayer = WebPlayer;
        __reflect(WebPlayer.prototype, "egret.wxapp.WebPlayer", ["egret.sys.Screen"]);
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        var sharedCanvas;
        var sharedContext;
        /**
         * @private
         */
        function convertImageToCanvas(texture, rect) {
            if (!sharedCanvas) {
                sharedCanvas = document.createElement("canvas");
                sharedContext = sharedCanvas.getContext("2d");
            }
            var w = texture.$getTextureWidth();
            var h = texture.$getTextureHeight();
            if (rect == null) {
                rect = egret.$TempRectangle;
                rect.x = 0;
                rect.y = 0;
                rect.width = w;
                rect.height = h;
            }
            rect.x = Math.min(rect.x, w - 1);
            rect.y = Math.min(rect.y, h - 1);
            rect.width = Math.min(rect.width, w - rect.x);
            rect.height = Math.min(rect.height, h - rect.y);
            var iWidth = rect.width;
            var iHeight = rect.height;
            var surface = sharedCanvas;
            surface["style"]["width"] = iWidth + "px";
            surface["style"]["height"] = iHeight + "px";
            sharedCanvas.width = iWidth;
            sharedCanvas.height = iHeight;
            if (egret.Capabilities.$renderMode == "webgl") {
                var renderTexture = void 0;
                //webgl??????RenderTexture???????????????RenderTexture
                if (!texture.$renderBuffer) {
                    renderTexture = new egret.RenderTexture();
                    renderTexture.drawToTexture(new egret.Bitmap(texture));
                }
                else {
                    renderTexture = texture;
                }
                //???RenderTexture??????????????????????????????canvas
                var pixels = renderTexture.$renderBuffer.getPixels(rect.x, rect.y, iWidth, iHeight);
                var imageData = new ImageData(iWidth, iHeight);
                for (var i = 0; i < pixels.length; i++) {
                    imageData.data[i] = pixels[i];
                }
                sharedContext.putImageData(imageData, 0, 0);
                if (!texture.$renderBuffer) {
                    renderTexture.dispose();
                }
                return surface;
            }
            else {
                var bitmapData = texture;
                var offsetX = Math.round(bitmapData.$offsetX);
                var offsetY = Math.round(bitmapData.$offsetY);
                var bitmapWidth = bitmapData.$bitmapWidth;
                var bitmapHeight = bitmapData.$bitmapHeight;
                sharedContext.drawImage(bitmapData.$bitmapData.source, bitmapData.$bitmapX + rect.x / egret.$TextureScaleFactor, bitmapData.$bitmapY + rect.y / egret.$TextureScaleFactor, bitmapWidth * rect.width / w, bitmapHeight * rect.height / h, offsetX, offsetY, rect.width, rect.height);
                return surface;
            }
        }
        /**
         * @private
         */
        function toDataURL(type, rect, encoderOptions) {
            try {
                var surface = convertImageToCanvas(this, rect);
                var result = surface.toDataURL(type, encoderOptions);
                return result;
            }
            catch (e) {
                egret.$error(1033);
            }
            return null;
        }
        /**
         * ???????????????????????? saveToFile ???????????????????????????
         */
        function eliFoTevas(type, filePath, rect, encoderOptions) {
            var base64 = toDataURL.call(this, type, rect, encoderOptions);
            if (base64 == null) {
                return;
            }
            var href = base64.replace(/^data:image[^;]*/, "data:image/octet-stream");
            var aLink = document.createElement('a');
            aLink['download'] = filePath;
            aLink.href = href;
            var evt = document.createEvent('MouseEvents');
            evt.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            aLink.dispatchEvent(evt);
        }
        function getPixel32(x, y) {
            egret.$warn(1041, "getPixel32", "getPixels");
            return this.getPixels(x, y);
        }
        function getPixels(x, y, width, height) {
            if (width === void 0) { width = 1; }
            if (height === void 0) { height = 1; }
            try {
                var surface = convertImageToCanvas(this);
                var result = sharedContext.getImageData(x, y, width, height).data;
                return result;
            }
            catch (e) {
                egret.$error(1039);
            }
        }
        egret.Texture.prototype.toDataURL = toDataURL;
        egret.Texture.prototype.saveToFile = eliFoTevas;
        egret.Texture.prototype.getPixel32 = getPixel32;
        egret.Texture.prototype.getPixels = getPixels;
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * @private
         * XML????????????
         */
        var XMLNode = (function () {
            /**
             * @private
             */
            function XMLNode(nodeType, parent) {
                this.nodeType = nodeType;
                this.parent = parent;
            }
            return XMLNode;
        }());
        wxapp.XMLNode = XMLNode;
        __reflect(XMLNode.prototype, "egret.wxapp.XMLNode");
        /**
         * @private
         * XML????????????
         */
        var XML = (function (_super) {
            __extends(XML, _super);
            /**
             * @private
             */
            function XML(localName, parent, prefix, namespace, name) {
                var _this = _super.call(this, 1, parent) || this;
                /**
                 * @private
                 * ??????????????????????????????
                 */
                _this.attributes = {};
                /**
                 * @private
                 * ??????????????????????????????
                 */
                _this.children = [];
                _this.localName = localName;
                _this.prefix = prefix;
                _this.namespace = namespace;
                _this.name = name;
                return _this;
            }
            return XML;
        }(XMLNode));
        wxapp.XML = XML;
        __reflect(XML.prototype, "egret.wxapp.XML");
        /**
         * @private
         * XML????????????
         */
        var XMLText = (function (_super) {
            __extends(XMLText, _super);
            /**
             * @private
             */
            function XMLText(text, parent) {
                var _this = _super.call(this, 3, parent) || this;
                _this.text = text;
                return _this;
            }
            return XMLText;
        }(XMLNode));
        wxapp.XMLText = XMLText;
        __reflect(XMLText.prototype, "egret.wxapp.XMLText");
        //let parser = new DOMParser();
        var parser;
        /**
         * @private
         * ??????????????????XML??????
         * @param text ?????????????????????
         */
        function parse(text) {
            var xmlDoc = parser.parseFromString(text, "text/xml");
            var length = xmlDoc.childNodes.length;
            for (var i = 0; i < length; i++) {
                var node = xmlDoc.childNodes[i];
                if (node.nodeType == 1) {
                    return parseNode(node, null);
                }
            }
            return null;
        }
        /**
         * @private
         * ??????????????????
         */
        function parseNode(node, parent) {
            if (node.localName == "parsererror") {
                throw new Error(node.textContent);
            }
            var xml = new XML(node.localName, parent, node["prefix"], node.namespaceURI, node.nodeName);
            var nodeAttributes = node.attributes;
            var attributes = xml.attributes;
            var length = nodeAttributes.length;
            for (var i = 0; i < length; i++) {
                var attributeNode = nodeAttributes[i];
                var name_1 = attributeNode.name;
                if (name_1.indexOf("xmlns:") == 0) {
                    continue;
                }
                attributes[name_1] = attributeNode.value;
                xml["$" + name_1] = attributeNode.value;
            }
            var childNodes = node.childNodes;
            length = childNodes.length;
            var children = xml.children;
            for (var i = 0; i < length; i++) {
                var childNode = childNodes[i];
                var nodeType = childNode.nodeType;
                var childXML = null;
                if (nodeType == 1) {
                    childXML = parseNode(childNode, xml);
                }
                else if (nodeType == 3) {
                    var text = childNode.textContent.trim();
                    if (text) {
                        childXML = new XMLText(text, xml);
                    }
                }
                if (childXML) {
                    children.push(childXML);
                }
            }
            return xml;
        }
        egret.XML = { parse: parse };
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * @private
         */
        var WebDeviceOrientation = (function (_super) {
            __extends(WebDeviceOrientation, _super);
            function WebDeviceOrientation() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                /**
                 * @private
                 */
                _this.onChange = function (e) {
                    var event = new egret.OrientationEvent(egret.Event.CHANGE);
                    event.beta = e.beta;
                    event.gamma = e.gamma;
                    event.alpha = e.alpha;
                    _this.dispatchEvent(event);
                };
                return _this;
            }
            /**
             * @private
             *
             */
            WebDeviceOrientation.prototype.start = function () {
                window.addEventListener("deviceorientation", this.onChange);
            };
            /**
             * @private
             *
             */
            WebDeviceOrientation.prototype.stop = function () {
                window.removeEventListener("deviceorientation", this.onChange);
            };
            return WebDeviceOrientation;
        }(egret.EventDispatcher));
        wxapp.WebDeviceOrientation = WebDeviceOrientation;
        __reflect(WebDeviceOrientation.prototype, "egret.wxapp.WebDeviceOrientation", ["egret.DeviceOrientation"]);
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
egret.DeviceOrientation = egret.wxapp.WebDeviceOrientation;

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * @private
         */
        var WebGeolocation = (function (_super) {
            __extends(WebGeolocation, _super);
            /**
             * @private
             */
            function WebGeolocation(option) {
                var _this = _super.call(this) || this;
                /**
                 * @private
                 */
                _this.onUpdate = function (position) {
                    var event = new egret.GeolocationEvent(egret.Event.CHANGE);
                    var coords = position.coords;
                    event.altitude = coords.altitude;
                    event.heading = coords.heading;
                    event.accuracy = coords.accuracy;
                    event.latitude = coords.latitude;
                    event.longitude = coords.longitude;
                    event.speed = coords.speed;
                    event.altitudeAccuracy = coords.altitudeAccuracy;
                    _this.dispatchEvent(event);
                };
                /**
                 * @private
                 */
                _this.onError = function (error) {
                    var errorType = egret.GeolocationEvent.UNAVAILABLE;
                    if (error.code == error.PERMISSION_DENIED)
                        errorType = egret.GeolocationEvent.PERMISSION_DENIED;
                    var event = new egret.GeolocationEvent(egret.IOErrorEvent.IO_ERROR);
                    event.errorType = errorType;
                    event.errorMessage = error.message;
                    _this.dispatchEvent(event);
                };
                _this.geolocation = navigator.geolocation;
                return _this;
            }
            /**
             * @private
             *
             */
            WebGeolocation.prototype.start = function () {
                var geo = this.geolocation;
                if (geo)
                    this.watchId = geo.watchPosition(this.onUpdate, this.onError);
                else
                    this.onError({
                        code: 2,
                        message: egret.sys.tr(3004),
                        PERMISSION_DENIED: 1,
                        POSITION_UNAVAILABLE: 2
                    });
            };
            /**
             * @private
             *
             */
            WebGeolocation.prototype.stop = function () {
                var geo = this.geolocation;
                geo.clearWatch(this.watchId);
            };
            return WebGeolocation;
        }(egret.EventDispatcher));
        wxapp.WebGeolocation = WebGeolocation;
        __reflect(WebGeolocation.prototype, "egret.wxapp.WebGeolocation", ["egret.Geolocation"]);
        egret.Geolocation = egret.wxapp.WebGeolocation;
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * @private
         */
        var WebMotion = (function (_super) {
            __extends(WebMotion, _super);
            function WebMotion() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                /**
                 * @private
                 */
                _this.onChange = function (e) {
                    var event = new egret.MotionEvent(egret.Event.CHANGE);
                    var acceleration = {
                        x: e.acceleration.x,
                        y: e.acceleration.y,
                        z: e.acceleration.z
                    };
                    var accelerationIncludingGravity = {
                        x: e.accelerationIncludingGravity.x,
                        y: e.accelerationIncludingGravity.y,
                        z: e.accelerationIncludingGravity.z
                    };
                    var rotation = {
                        alpha: e.rotationRate.alpha,
                        beta: e.rotationRate.beta,
                        gamma: e.rotationRate.gamma
                    };
                    event.acceleration = acceleration;
                    event.accelerationIncludingGravity = accelerationIncludingGravity;
                    event.rotationRate = rotation;
                    _this.dispatchEvent(event);
                };
                return _this;
            }
            /**
             * @private
             *
             */
            WebMotion.prototype.start = function () {
                window.addEventListener("devicemotion", this.onChange);
            };
            /**
             * @private
             *
             */
            WebMotion.prototype.stop = function () {
                window.removeEventListener("devicemotion", this.onChange);
            };
            return WebMotion;
        }(egret.EventDispatcher));
        wxapp.WebMotion = WebMotion;
        __reflect(WebMotion.prototype, "egret.wxapp.WebMotion", ["egret.Motion"]);
        egret.Motion = egret.wxapp.WebMotion;
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        if (true) {
            var logFuncs_1;
            function setLogLevel(logType) {
                if (logFuncs_1 == null) {
                    logFuncs_1 = {
                        "error": console.error,
                        "debug": console.debug,
                        "warn": console.warn,
                        "info": console.info,
                        "log": console.log
                    };
                }
                switch (logType) {
                    case egret.Logger.OFF:
                        console.error = function () {
                        };
                    case egret.Logger.ERROR:
                        console.warn = function () {
                        };
                    case egret.Logger.WARN:
                        console.info = function () {
                        };
                        console.log = function () {
                        };
                    case egret.Logger.INFO:
                        console.debug = function () {
                        };
                    default:
                        break;
                }
                switch (logType) {
                    case egret.Logger.ALL:
                    case egret.Logger.DEBUG:
                        console.debug = logFuncs_1["debug"];
                    case egret.Logger.INFO:
                        console.log = logFuncs_1["log"];
                        console.info = logFuncs_1["info"];
                    case egret.Logger.WARN:
                        console.warn = logFuncs_1["warn"];
                    case egret.Logger.ERROR:
                        console.error = logFuncs_1["error"];
                    default:
                        break;
                }
            }
            Object.defineProperty(egret.Logger, "logLevel", {
                set: setLogLevel,
                enumerable: true,
                configurable: true
            });
        }
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * @private
         * ?????????????????????
         * ????????????drawData??????
         */
        var WebGLDrawCmdManager = (function () {
            function WebGLDrawCmdManager() {
                /**
                 * ?????????????????????????????????
                 */
                this.drawData = [];
                this.drawDataLen = 0;
            }
            /**
             * ????????????????????????
             */
            WebGLDrawCmdManager.prototype.pushDrawRect = function () {
                if (this.drawDataLen == 0 || this.drawData[this.drawDataLen - 1].type != 1 /* RECT */) {
                    var data = this.drawData[this.drawDataLen] || {};
                    data.type = 1 /* RECT */;
                    data.count = 0;
                    this.drawData[this.drawDataLen] = data;
                    this.drawDataLen++;
                }
                this.drawData[this.drawDataLen - 1].count += 2;
            };
            /**
             * ????????????texture??????
             */
            WebGLDrawCmdManager.prototype.pushDrawTexture = function (texture, count, filter, textureWidth, textureHeight) {
                if (count === void 0) { count = 2; }
                if (filter) {
                    // ?????????????????????????????????????????????
                    var data = this.drawData[this.drawDataLen] || {};
                    data.type = 0 /* TEXTURE */;
                    data.texture = texture;
                    data.filter = filter;
                    data.count = count;
                    data.textureWidth = textureWidth;
                    data.textureHeight = textureHeight;
                    this.drawData[this.drawDataLen] = data;
                    this.drawDataLen++;
                }
                else {
                    if (this.drawDataLen == 0 || this.drawData[this.drawDataLen - 1].type != 0 /* TEXTURE */ || texture != this.drawData[this.drawDataLen - 1].texture || this.drawData[this.drawDataLen - 1].filter) {
                        var data = this.drawData[this.drawDataLen] || {};
                        data.type = 0 /* TEXTURE */;
                        data.texture = texture;
                        data.count = 0;
                        this.drawData[this.drawDataLen] = data;
                        this.drawDataLen++;
                    }
                    this.drawData[this.drawDataLen - 1].count += count;
                }
            };
            WebGLDrawCmdManager.prototype.pushChangeSmoothing = function (texture, smoothing) {
                texture["smoothing"] = smoothing;
                var data = this.drawData[this.drawDataLen] || {};
                data.type = 10 /* SMOOTHING */;
                data.texture = texture;
                data.smoothing = smoothing;
                this.drawData[this.drawDataLen] = data;
                this.drawDataLen++;
            };
            /**
             * ??????pushMask??????
             */
            WebGLDrawCmdManager.prototype.pushPushMask = function (count) {
                if (count === void 0) { count = 1; }
                var data = this.drawData[this.drawDataLen] || {};
                data.type = 2 /* PUSH_MASK */;
                data.count = count * 2;
                this.drawData[this.drawDataLen] = data;
                this.drawDataLen++;
            };
            /**
             * ??????popMask??????
             */
            WebGLDrawCmdManager.prototype.pushPopMask = function (count) {
                if (count === void 0) { count = 1; }
                var data = this.drawData[this.drawDataLen] || {};
                data.type = 3 /* POP_MASK */;
                data.count = count * 2;
                this.drawData[this.drawDataLen] = data;
                this.drawDataLen++;
            };
            /**
             * ??????????????????
             */
            WebGLDrawCmdManager.prototype.pushSetBlend = function (value) {
                var len = this.drawDataLen;
                // ?????????????????????????????????
                var drawState = false;
                for (var i = len - 1; i >= 0; i--) {
                    var data = this.drawData[i];
                    if (data) {
                        if (data.type == 0 /* TEXTURE */ || data.type == 1 /* RECT */) {
                            drawState = true;
                        }
                        // ??????????????????blend???????????????????????????????????????????????????
                        if (!drawState && data.type == 4 /* BLEND */) {
                            this.drawData.splice(i, 1);
                            this.drawDataLen--;
                            continue;
                        }
                        // ??????????????????blend?????????????????????????????????
                        if (data.type == 4 /* BLEND */) {
                            if (data.value == value) {
                                return;
                            }
                            else {
                                break;
                            }
                        }
                    }
                }
                var _data = this.drawData[this.drawDataLen] || {};
                _data.type = 4 /* BLEND */;
                _data.value = value;
                this.drawData[this.drawDataLen] = _data;
                this.drawDataLen++;
            };
            /*
             * ??????resize render target??????
             */
            WebGLDrawCmdManager.prototype.pushResize = function (buffer, width, height) {
                var data = this.drawData[this.drawDataLen] || {};
                data.type = 5 /* RESIZE_TARGET */;
                data.buffer = buffer;
                data.width = width;
                data.height = height;
                this.drawData[this.drawDataLen] = data;
                this.drawDataLen++;
            };
            /*
             * ??????clear color??????
             */
            WebGLDrawCmdManager.prototype.pushClearColor = function () {
                var data = this.drawData[this.drawDataLen] || {};
                data.type = 6 /* CLEAR_COLOR */;
                this.drawData[this.drawDataLen] = data;
                this.drawDataLen++;
            };
            /**
             * ????????????buffer??????
             */
            WebGLDrawCmdManager.prototype.pushActivateBuffer = function (buffer) {
                var len = this.drawDataLen;
                // ?????????????????????????????????
                var drawState = false;
                for (var i = len - 1; i >= 0; i--) {
                    var data = this.drawData[i];
                    if (data) {
                        if (data.type != 4 /* BLEND */ && data.type != 7 /* ACT_BUFFER */) {
                            drawState = true;
                        }
                        // ??????????????????buffer???????????????????????????????????????????????????
                        if (!drawState && data.type == 7 /* ACT_BUFFER */) {
                            this.drawData.splice(i, 1);
                            this.drawDataLen--;
                            continue;
                        }
                        // ??????????????????buffer?????????????????????????????????
                        // if(data.type == DRAWABLE_TYPE.ACT_BUFFER) {
                        //     if(data.buffer == buffer) {
                        //         return;
                        //     } else {
                        //         break;
                        //     }
                        // }
                    }
                }
                var _data = this.drawData[this.drawDataLen] || {};
                _data.type = 7 /* ACT_BUFFER */;
                _data.buffer = buffer;
                _data.width = buffer.rootRenderTarget.width;
                _data.height = buffer.rootRenderTarget.height;
                this.drawData[this.drawDataLen] = _data;
                this.drawDataLen++;
            };
            /*
             * ??????enabel scissor??????
             */
            WebGLDrawCmdManager.prototype.pushEnableScissor = function (x, y, width, height) {
                var data = this.drawData[this.drawDataLen] || {};
                data.type = 8 /* ENABLE_SCISSOR */;
                data.x = x;
                data.y = y;
                data.width = width;
                data.height = height;
                this.drawData[this.drawDataLen] = data;
                this.drawDataLen++;
            };
            /*
             * ??????disable scissor??????
             */
            WebGLDrawCmdManager.prototype.pushDisableScissor = function () {
                var data = this.drawData[this.drawDataLen] || {};
                data.type = 9 /* DISABLE_SCISSOR */;
                this.drawData[this.drawDataLen] = data;
                this.drawDataLen++;
            };
            /**
             * ??????????????????
             */
            WebGLDrawCmdManager.prototype.clear = function () {
                for (var i = 0; i < this.drawDataLen; i++) {
                    var data = this.drawData[i];
                    data.type = 0;
                    data.count = 0;
                    data.texture = null;
                    data.filter = null;
                    data.uv = null;
                    data.value = "";
                    data.buffer = null;
                    data.width = 0;
                    data.height = 0;
                }
                this.drawDataLen = 0;
            };
            return WebGLDrawCmdManager;
        }());
        wxapp.WebGLDrawCmdManager = WebGLDrawCmdManager;
        __reflect(WebGLDrawCmdManager.prototype, "egret.wxapp.WebGLDrawCmdManager");
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * @private
         * ????????????????????????
         * ????????????????????????
         */
        var WebGLVertexArrayObject = (function () {
            function WebGLVertexArrayObject() {
                this.size = 2000;
                this.vertexMaxSize = this.size * 4;
                this.indicesMaxSize = this.size * 6;
                this.vertSize = 5;
                this.vertices = null;
                this.indices = null;
                this.indicesForMesh = null;
                this.vertexIndex = 0;
                this.indexIndex = 0;
                this.hasMesh = false;
                var numVerts = this.vertexMaxSize * this.vertSize;
                var numIndices = this.indicesMaxSize;
                this.vertices = new Float32Array(numVerts);
                this.indices = new Uint16Array(numIndices);
                this.indicesForMesh = new Uint16Array(numIndices);
                for (var i = 0, j = 0; i < numIndices; i += 6, j += 4) {
                    this.indices[i + 0] = j + 0;
                    this.indices[i + 1] = j + 1;
                    this.indices[i + 2] = j + 2;
                    this.indices[i + 3] = j + 0;
                    this.indices[i + 4] = j + 2;
                    this.indices[i + 5] = j + 3;
                }
            }
            /**
             * ??????????????????????????????
             */
            WebGLVertexArrayObject.prototype.reachMaxSize = function (vertexCount, indexCount) {
                if (vertexCount === void 0) { vertexCount = 4; }
                if (indexCount === void 0) { indexCount = 6; }
                return this.vertexIndex > this.vertexMaxSize - vertexCount || this.indexIndex > this.indicesMaxSize - indexCount;
            };
            /**
             * ?????????????????????????????????
             */
            WebGLVertexArrayObject.prototype.getVertices = function () {
                var view = this.vertices.subarray(0, this.vertexIndex * this.vertSize);
                return view;
            };
            /**
             * ?????????????????????????????????
             */
            WebGLVertexArrayObject.prototype.getIndices = function () {
                return this.indices;
            };
            /**
             * ?????????????????????mesh????????????
             */
            WebGLVertexArrayObject.prototype.getMeshIndices = function () {
                return this.indicesForMesh;
            };
            /**
             * ?????????mesh??????????????????
             */
            WebGLVertexArrayObject.prototype.changeToMeshIndices = function () {
                if (!this.hasMesh) {
                    // ????????????index?????????for mesh???
                    for (var i = 0, l = this.indexIndex; i < l; ++i) {
                        this.indicesForMesh[i] = this.indices[i];
                    }
                    this.hasMesh = true;
                }
            };
            WebGLVertexArrayObject.prototype.isMesh = function () {
                return this.hasMesh;
            };
            /**
             * ??????????????????
             */
            // private defaultMeshVertices = [0, 0, 1, 0, 1, 1, 0, 1];
            // private defaultMeshUvs = [
            //     0, 0,
            //     1, 0,
            //     1, 1,
            //     0, 1
            // ];
            // private defaultMeshIndices = [0, 1, 2, 0, 2, 3];
            /**
             * ??????????????????
             */
            WebGLVertexArrayObject.prototype.cacheArrays = function (buffer, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, textureSourceWidth, textureSourceHeight, meshUVs, meshVertices, meshIndices, rotated) {
                var alpha = buffer.globalAlpha;
                //?????????????????????????????????????????????????????????
                var locWorldTransform = buffer.globalMatrix;
                var a = locWorldTransform.a;
                var b = locWorldTransform.b;
                var c = locWorldTransform.c;
                var d = locWorldTransform.d;
                var tx = locWorldTransform.tx;
                var ty = locWorldTransform.ty;
                var offsetX = buffer.$offsetX;
                var offsetY = buffer.$offsetY;
                if (offsetX != 0 || offsetY != 0) {
                    tx = offsetX * a + offsetY * c + tx;
                    ty = offsetX * b + offsetY * d + ty;
                }
                if (!meshVertices) {
                    if (destX != 0 || destY != 0) {
                        tx = destX * a + destY * c + tx;
                        ty = destX * b + destY * d + ty;
                    }
                    var a1 = destWidth / sourceWidth;
                    if (a1 != 1) {
                        a = a1 * a;
                        b = a1 * b;
                    }
                    var d1 = destHeight / sourceHeight;
                    if (d1 != 1) {
                        c = d1 * c;
                        d = d1 * d;
                    }
                }
                if (meshVertices) {
                    // ???????????????????????????
                    var vertices = this.vertices;
                    var index = this.vertexIndex * this.vertSize;
                    // ??????????????????
                    var i = 0, iD = 0, l = 0;
                    var u = 0, v = 0, x = 0, y = 0;
                    for (i = 0, l = meshUVs.length; i < l; i += 2) {
                        iD = i * 5 / 2;
                        x = meshVertices[i];
                        y = meshVertices[i + 1];
                        u = meshUVs[i];
                        v = meshUVs[i + 1];
                        // xy
                        vertices[index + iD + 0] = a * x + c * y + tx;
                        vertices[index + iD + 1] = b * x + d * y + ty;
                        // uv
                        vertices[index + iD + 2] = (sourceX + u * sourceWidth) / textureSourceWidth;
                        vertices[index + iD + 3] = (sourceY + v * sourceHeight) / textureSourceHeight;
                        // alpha
                        vertices[index + iD + 4] = alpha;
                    }
                    // ??????????????????
                    if (this.hasMesh) {
                        for (var i_1 = 0, l_1 = meshIndices.length; i_1 < l_1; ++i_1) {
                            this.indicesForMesh[this.indexIndex + i_1] = meshIndices[i_1] + this.vertexIndex;
                        }
                    }
                    this.vertexIndex += meshUVs.length / 2;
                    this.indexIndex += meshIndices.length;
                }
                else {
                    var width = textureSourceWidth;
                    var height = textureSourceHeight;
                    var w = sourceWidth;
                    var h = sourceHeight;
                    sourceX = sourceX / width;
                    sourceY = sourceY / height;
                    var vertices = this.vertices;
                    var index = this.vertexIndex * this.vertSize;
                    if (rotated) {
                        var temp = sourceWidth;
                        sourceWidth = sourceHeight / width;
                        sourceHeight = temp / height;
                        // xy
                        vertices[index++] = tx;
                        vertices[index++] = ty;
                        // uv
                        vertices[index++] = sourceWidth + sourceX;
                        vertices[index++] = sourceY;
                        // alpha
                        vertices[index++] = alpha;
                        // xy
                        vertices[index++] = a * w + tx;
                        vertices[index++] = b * w + ty;
                        // uv
                        vertices[index++] = sourceWidth + sourceX;
                        vertices[index++] = sourceHeight + sourceY;
                        // alpha
                        vertices[index++] = alpha;
                        // xy
                        vertices[index++] = a * w + c * h + tx;
                        vertices[index++] = d * h + b * w + ty;
                        // uv
                        vertices[index++] = sourceX;
                        vertices[index++] = sourceHeight + sourceY;
                        // alpha
                        vertices[index++] = alpha;
                        // xy
                        vertices[index++] = c * h + tx;
                        vertices[index++] = d * h + ty;
                        // uv
                        vertices[index++] = sourceX;
                        vertices[index++] = sourceY;
                        // alpha
                        vertices[index++] = alpha;
                    }
                    else {
                        sourceWidth = sourceWidth / width;
                        sourceHeight = sourceHeight / height;
                        // xy
                        vertices[index++] = tx;
                        vertices[index++] = ty;
                        // uv
                        vertices[index++] = sourceX;
                        vertices[index++] = sourceY;
                        // alpha
                        vertices[index++] = alpha;
                        // xy
                        vertices[index++] = a * w + tx;
                        vertices[index++] = b * w + ty;
                        // uv
                        vertices[index++] = sourceWidth + sourceX;
                        vertices[index++] = sourceY;
                        // alpha
                        vertices[index++] = alpha;
                        // xy
                        vertices[index++] = a * w + c * h + tx;
                        vertices[index++] = d * h + b * w + ty;
                        // uv
                        vertices[index++] = sourceWidth + sourceX;
                        vertices[index++] = sourceHeight + sourceY;
                        // alpha
                        vertices[index++] = alpha;
                        // xy
                        vertices[index++] = c * h + tx;
                        vertices[index++] = d * h + ty;
                        // uv
                        vertices[index++] = sourceX;
                        vertices[index++] = sourceHeight + sourceY;
                        // alpha
                        vertices[index++] = alpha;
                    }
                    // ??????????????????
                    if (this.hasMesh) {
                        var indicesForMesh = this.indicesForMesh;
                        indicesForMesh[this.indexIndex + 0] = 0 + this.vertexIndex;
                        indicesForMesh[this.indexIndex + 1] = 1 + this.vertexIndex;
                        indicesForMesh[this.indexIndex + 2] = 2 + this.vertexIndex;
                        indicesForMesh[this.indexIndex + 3] = 0 + this.vertexIndex;
                        indicesForMesh[this.indexIndex + 4] = 2 + this.vertexIndex;
                        indicesForMesh[this.indexIndex + 5] = 3 + this.vertexIndex;
                    }
                    this.vertexIndex += 4;
                    this.indexIndex += 6;
                }
            };
            WebGLVertexArrayObject.prototype.clear = function () {
                this.hasMesh = false;
                this.vertexIndex = 0;
                this.indexIndex = 0;
            };
            return WebGLVertexArrayObject;
        }());
        wxapp.WebGLVertexArrayObject = WebGLVertexArrayObject;
        __reflect(WebGLVertexArrayObject.prototype, "egret.wxapp.WebGLVertexArrayObject");
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * @private
         * WebGLRenderTarget???
         * ??????WebGL???????????????????????????frame buffer???texture
         */
        var WebGLRenderTarget = (function (_super) {
            __extends(WebGLRenderTarget, _super);
            function WebGLRenderTarget(gl, width, height) {
                var _this = _super.call(this) || this;
                // ?????????
                _this.clearColor = [0, 0, 0, 0];
                // ????????????frame buffer, ?????????true
                _this.useFrameBuffer = true;
                _this.gl = gl;
                // ??????????????? 0 chrome?????????
                _this.width = width || 1;
                _this.height = height || 1;
                return _this;
            }
            /**
             * ??????render target?????????
             */
            WebGLRenderTarget.prototype.resize = function (width, height) {
                var gl = this.gl;
                this.width = width;
                this.height = height;
                if (this.frameBuffer) {
                    // ??????texture??????
                    gl.bindTexture(gl.TEXTURE_2D, this.texture);
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
                    // gl.bindTexture(gl.TEXTURE_2D, null);
                }
                if (this.stencilBuffer) {
                    gl.deleteRenderbuffer(this.stencilBuffer);
                    this.stencilBuffer = null;
                }
            };
            /**
             * ?????????render target
             */
            WebGLRenderTarget.prototype.activate = function () {
                var gl = this.gl;
                gl.bindFramebuffer(gl.FRAMEBUFFER, this.getFrameBuffer());
            };
            /**
             * ??????frame buffer
             */
            WebGLRenderTarget.prototype.getFrameBuffer = function () {
                if (!this.useFrameBuffer) {
                    return null;
                }
                return this.frameBuffer;
            };
            WebGLRenderTarget.prototype.initFrameBuffer = function () {
                if (!this.frameBuffer) {
                    var gl = this.gl;
                    // ????????????
                    this.texture = this.createTexture();
                    // ??????frame buffer
                    this.frameBuffer = gl.createFramebuffer();
                    gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
                    // ????????????
                    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);
                }
            };
            /**
             * ????????????
             * TODO ?????????????????????????????????
             */
            WebGLRenderTarget.prototype.createTexture = function () {
                var gl = this.gl;
                var texture = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.width, this.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                return texture;
            };
            /**
             * ??????render target????????????
             */
            WebGLRenderTarget.prototype.clear = function (bind) {
                var gl = this.gl;
                if (bind) {
                    this.activate();
                }
                gl.colorMask(true, true, true, true);
                gl.clearColor(this.clearColor[0], this.clearColor[1], this.clearColor[2], this.clearColor[3]);
                gl.clear(gl.COLOR_BUFFER_BIT);
            };
            WebGLRenderTarget.prototype.enabledStencil = function () {
                if (!this.frameBuffer || this.stencilBuffer) {
                    return;
                }
                var gl = this.gl;
                // ??????render buffer?????????
                gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer); // ???????????????????????????
                // ??????stencil buffer
                this.stencilBuffer = gl.createRenderbuffer();
                gl.bindRenderbuffer(gl.RENDERBUFFER, this.stencilBuffer);
                gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, this.width, this.height);
                gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, this.stencilBuffer);
                // ??????????????????????????????bug???
                // gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            };
            WebGLRenderTarget.prototype.dispose = function () {
                egret.WebGLUtils.deleteWebGLTexture(this.texture);
            };
            return WebGLRenderTarget;
        }(egret.HashObject));
        wxapp.WebGLRenderTarget = WebGLRenderTarget;
        __reflect(WebGLRenderTarget.prototype, "egret.wxapp.WebGLRenderTarget");
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * ????????????canvas???
         */
        function createCanvas(width, height) {
            //let canvas: HTMLCanvasElement = document.createElement("canvas");
            var canvas = window['canvas'];
            if (!isNaN(width) && !isNaN(height)) {
                canvas.width = width;
                canvas.height = height;
            }
            return canvas;
        }
        /**
         * @private
         * WebGL?????????????????????????????????????????????
         * ???????????????????????????????????????context
         */
        var WebGLRenderContext = (function () {
            function WebGLRenderContext(width, height) {
                this.glID = null;
                this.projectionX = NaN;
                this.projectionY = NaN;
                this.contextLost = false;
                this.$scissorState = false;
                this.vertSize = 5;
                this.surface = createCanvas(width, height);
                this.initWebGL();
                this.$bufferStack = [];
                var gl = this.context;
                this.vertexBuffer = gl.createBuffer();
                this.indexBuffer = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
                this.drawCmdManager = new wxapp.WebGLDrawCmdManager();
                this.vao = new wxapp.WebGLVertexArrayObject();
                this.setGlobalCompositeOperation("source-over");
            }
            WebGLRenderContext.getInstance = function (width, height) {
                if (this.instance) {
                    return this.instance;
                }
                this.instance = new WebGLRenderContext(width, height);
                return this.instance;
            };
            /**
             * ????????????RenderBuffer?????????
             */
            WebGLRenderContext.prototype.pushBuffer = function (buffer) {
                this.$bufferStack.push(buffer);
                if (buffer != this.currentBuffer) {
                    if (this.currentBuffer) {
                        // this.$drawWebGL();
                    }
                    this.drawCmdManager.pushActivateBuffer(buffer);
                }
                this.currentBuffer = buffer;
            };
            /**
             * ????????????RenderBuffer??????????????????RenderBuffer
             */
            WebGLRenderContext.prototype.popBuffer = function () {
                // ?????????????????????buffer???????????????pop??????
                // ????????????buffer??????????????????
                if (this.$bufferStack.length <= 1) {
                    return;
                }
                var buffer = this.$bufferStack.pop();
                var lastBuffer = this.$bufferStack[this.$bufferStack.length - 1];
                // ????????????
                if (buffer != lastBuffer) {
                    // this.$drawWebGL();
                    this.drawCmdManager.pushActivateBuffer(lastBuffer);
                }
                this.currentBuffer = lastBuffer;
            };
            /**
             * ??????RenderBuffer
             */
            WebGLRenderContext.prototype.activateBuffer = function (buffer) {
                buffer.rootRenderTarget.activate();
                if (!this.bindIndices) {
                    this.uploadIndicesArray(this.vao.getIndices());
                }
                buffer.restoreStencil();
                buffer.restoreScissor();
                this.onResize(buffer.width, buffer.height);
            };
            /**
             * ??????????????????
             */
            WebGLRenderContext.prototype.uploadVerticesArray = function (array) {
                var gl = this.context;
                gl.bufferData(gl.ARRAY_BUFFER, array, gl.STREAM_DRAW);
                // gl.bufferSubData(gl.ARRAY_BUFFER, 0, array);
            };
            /**
             * ??????????????????
             */
            WebGLRenderContext.prototype.uploadIndicesArray = function (array) {
                var gl = this.context;
                gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, array, gl.STATIC_DRAW);
                this.bindIndices = true;
            };
            /**
             * ??????????????????
             */
            WebGLRenderContext.prototype.destroy = function () {
                this.surface.width = this.surface.height = 0;
            };
            WebGLRenderContext.prototype.onResize = function (width, height) {
                width = width || this.surface.width;
                height = height || this.surface.height;
                this.projectionX = width / 2;
                this.projectionY = -height / 2;
                if (this.context) {
                    this.context.viewport(0, 0, width, height);
                }
            };
            /**
             * ?????????????????????????????????????????????
             * @param width ???????????????
             * @param height ???????????????
             * @param useMaxSize ?????????true???????????????????????????????????????????????????????????????????????????
             */
            WebGLRenderContext.prototype.resize = function (width, height, useMaxSize) {
                var surface = this.surface;
                if (useMaxSize) {
                    if (surface.width < width) {
                        surface.width = width;
                        if (!egret.wxgame.isSubContext && window["sharedCanvas"]) {
                            window["sharedCanvas"].width = width;
                        }
                    }
                    if (surface.height < height) {
                        surface.height = height;
                        if (!egret.wxgame.isSubContext && window["sharedCanvas"]) {
                            window["sharedCanvas"].height = height;
                        }
                    }
                }
                else {
                    if (surface.width != width) {
                        surface.width = width;
                        if (!egret.wxgame.isSubContext && window["sharedCanvas"]) {
                            window["sharedCanvas"].width = width;
                        }
                    }
                    if (surface.height != height) {
                        surface.height = height;
                        if (!egret.wxgame.isSubContext && window["sharedCanvas"]) {
                            window["sharedCanvas"].height = height;
                        }
                    }
                }
                this.onResize();
            };
            WebGLRenderContext.prototype.initWebGL = function () {
                this.onResize();
                this.surface.addEventListener("webglcontextlost", this.handleContextLost.bind(this), false);
                this.surface.addEventListener("webglcontextrestored", this.handleContextRestored.bind(this), false);
                this.getWebGLContext();
                var gl = this.context;
                this.$maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
            };
            WebGLRenderContext.prototype.handleContextLost = function () {
                this.contextLost = true;
            };
            WebGLRenderContext.prototype.handleContextRestored = function () {
                this.initWebGL();
                this.contextLost = false;
            };
            WebGLRenderContext.prototype.getWebGLContext = function () {
                // let options = {
                //     antialias: WebGLRenderContext.antialias,
                //     stencil: true//???????????????????????????????????????????????????
                // };
                // let gl: any;
                // //todo ????????????chrome??????names
                // //let contextNames = ["moz-webgl", "webkit-3d", "experimental-webgl", "webgl", "3d"];
                // let names = ["webgl", "experimental-webgl"];
                // for (let i = 0; i < names.length; i++) {
                //     try {
                //         gl = this.surface.getContext(names[i], options);
                //     } catch (e) {
                //     }
                //     if (gl) {
                //         break;
                //     }
                // }
                // if (!gl) {
                //     $error(1021);
                // }
                // this.setContext(gl);
                this.setContext(window['canvas'].getContext('webgl'));
            };
            WebGLRenderContext.prototype.setContext = function (gl) {
                this.context = gl;
                gl.id = WebGLRenderContext.glContextId++;
                this.glID = gl.id;
                gl.disable(gl.DEPTH_TEST);
                gl.disable(gl.CULL_FACE);
                gl.enable(gl.BLEND);
                gl.colorMask(true, true, true, true);
                // ???????????????0??????????????????????????????
                gl.activeTexture(gl.TEXTURE0);
            };
            /**
             * ??????????????????
             */
            WebGLRenderContext.prototype.enableStencilTest = function () {
                var gl = this.context;
                gl.enable(gl.STENCIL_TEST);
            };
            /**
             * ??????????????????
             */
            WebGLRenderContext.prototype.disableStencilTest = function () {
                var gl = this.context;
                gl.disable(gl.STENCIL_TEST);
            };
            /**
             * ??????scissor??????
             */
            WebGLRenderContext.prototype.enableScissorTest = function (rect) {
                var gl = this.context;
                gl.enable(gl.SCISSOR_TEST);
                gl.scissor(rect.x, rect.y, rect.width, rect.height);
            };
            /**
             * ??????scissor??????
             */
            WebGLRenderContext.prototype.disableScissorTest = function () {
                var gl = this.context;
                gl.disable(gl.SCISSOR_TEST);
            };
            /**
             * ??????????????????
             */
            WebGLRenderContext.prototype.getPixels = function (x, y, width, height, pixels) {
                var gl = this.context;
                gl.readPixels(x, y, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
            };
            /**
             * ????????????WebGLTexture
             */
            WebGLRenderContext.prototype.createTexture = function (bitmapData) {
                var gl = this.context;
                var texture = gl.createTexture();
                if (!texture) {
                    //?????????texture??????,??????lost??????????????????..
                    this.contextLost = true;
                    return;
                }
                texture.glContext = gl;
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, bitmapData);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                return texture;
            };
            WebGLRenderContext.prototype.createTextureFromCompressedData = function (data, width, height, levels, internalFormat) {
                return null;
            };
            /**
             * ???????????????bitmapData
             */
            WebGLRenderContext.prototype.updateTexture = function (texture, bitmapData) {
                var gl = this.context;
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, bitmapData);
            };
            /**
             * ????????????WebGLTexture
             * ??????????????????texture???????????????texture?????????????????????????????????texture
             */
            WebGLRenderContext.prototype.getWebGLTexture = function (bitmapData) {
                if (!bitmapData.webGLTexture) {
                    if (bitmapData.format == "image") {
                        bitmapData.webGLTexture = this.createTexture(bitmapData.source);
                    }
                    else if (bitmapData.format == "pvr") {
                        bitmapData.webGLTexture = this.createTextureFromCompressedData(bitmapData.source.pvrtcData, bitmapData.width, bitmapData.height, bitmapData.source.mipmapsCount, bitmapData.source.format);
                    }
                    if (bitmapData.$deleteSource && bitmapData.webGLTexture) {
                        bitmapData.source = null;
                    }
                    //todo ?????????
                    bitmapData.webGLTexture["smoothing"] = true;
                }
                return bitmapData.webGLTexture;
            };
            /**
             * ??????????????????
             */
            WebGLRenderContext.prototype.clearRect = function (x, y, width, height) {
                if (x != 0 || y != 0 || width != this.surface.width || height != this.surface.height) {
                    var buffer = this.currentBuffer;
                    if (buffer.$hasScissor) {
                        this.setGlobalCompositeOperation("destination-out");
                        this.drawRect(x, y, width, height);
                        this.setGlobalCompositeOperation("source-over");
                    }
                    else {
                        var m = buffer.globalMatrix;
                        if (m.b == 0 && m.c == 0) {
                            x = x * m.a + m.tx;
                            y = y * m.d + m.ty;
                            width = width * m.a;
                            height = height * m.d;
                            this.enableScissor(x, -y - height + buffer.height, width, height);
                            this.clear();
                            this.disableScissor();
                        }
                        else {
                            this.setGlobalCompositeOperation("destination-out");
                            this.drawRect(x, y, width, height);
                            this.setGlobalCompositeOperation("source-over");
                        }
                    }
                }
                else {
                    this.clear();
                }
            };
            /**
             * ????????????
             */
            WebGLRenderContext.prototype.setGlobalCompositeOperation = function (value) {
                this.drawCmdManager.pushSetBlend(value);
            };
            /**
             * ???????????????image???????????????BitmapData??????renderTarget
             */
            WebGLRenderContext.prototype.drawImage = function (image, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, imageSourceWidth, imageSourceHeight, rotated, smoothing) {
                var buffer = this.currentBuffer;
                if (this.contextLost || !image || !buffer) {
                    return;
                }
                var texture;
                var offsetX;
                var offsetY;
                if (image["texture"] || (image.source && image.source["texture"])) {
                    // ?????????render target
                    texture = image["texture"] || image.source["texture"];
                    buffer.saveTransform();
                    offsetX = buffer.$offsetX;
                    offsetY = buffer.$offsetY;
                    buffer.useOffset();
                    buffer.transform(1, 0, 0, -1, 0, destHeight + destY * 2); // ??????
                }
                else if (!image.source && !image.webGLTexture) {
                    return;
                }
                else {
                    texture = this.getWebGLTexture(image);
                }
                if (!texture) {
                    return;
                }
                this.drawTexture(texture, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, imageSourceWidth, imageSourceHeight, undefined, undefined, undefined, undefined, rotated, smoothing);
                if (image.source && image.source["texture"]) {
                    buffer.$offsetX = offsetX;
                    buffer.$offsetY = offsetY;
                    buffer.restoreTransform();
                }
            };
            /**
             * ??????Mesh
             */
            WebGLRenderContext.prototype.drawMesh = function (image, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, imageSourceWidth, imageSourceHeight, meshUVs, meshVertices, meshIndices, bounds, rotated, smoothing) {
                var buffer = this.currentBuffer;
                if (this.contextLost || !image || !buffer) {
                    return;
                }
                var texture;
                var offsetX;
                var offsetY;
                if (image["texture"] || (image.source && image.source["texture"])) {
                    // ?????????render target
                    texture = image["texture"] || image.source["texture"];
                    buffer.saveTransform();
                    offsetX = buffer.$offsetX;
                    offsetY = buffer.$offsetY;
                    buffer.useOffset();
                    buffer.transform(1, 0, 0, -1, 0, destHeight + destY * 2); // ??????
                }
                else if (!image.source && !image.webGLTexture) {
                    return;
                }
                else {
                    texture = this.getWebGLTexture(image);
                }
                if (!texture) {
                    return;
                }
                this.drawTexture(texture, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, imageSourceWidth, imageSourceHeight, meshUVs, meshVertices, meshIndices, bounds, rotated, smoothing);
                if (image["texture"] || (image.source && image.source["texture"])) {
                    buffer.$offsetX = offsetX;
                    buffer.$offsetY = offsetY;
                    buffer.restoreTransform();
                }
            };
            /**
             * ????????????
             */
            WebGLRenderContext.prototype.drawTexture = function (texture, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, textureWidth, textureHeight, meshUVs, meshVertices, meshIndices, bounds, rotated, smoothing) {
                var buffer = this.currentBuffer;
                if (this.contextLost || !texture || !buffer) {
                    return;
                }
                if (meshVertices && meshIndices) {
                    if (this.vao.reachMaxSize(meshVertices.length / 2, meshIndices.length)) {
                        this.$drawWebGL();
                    }
                }
                else {
                    if (this.vao.reachMaxSize()) {
                        this.$drawWebGL();
                    }
                }
                if (smoothing != undefined && texture["smoothing"] != smoothing) {
                    this.drawCmdManager.pushChangeSmoothing(texture, smoothing);
                }
                if (meshUVs) {
                    this.vao.changeToMeshIndices();
                }
                var count = meshIndices ? meshIndices.length / 3 : 2;
                // ??????$filter?????????????????????colorMatrixFilter??????????????????????????????
                this.drawCmdManager.pushDrawTexture(texture, count, this.$filter);
                this.vao.cacheArrays(buffer, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, textureWidth, textureHeight, meshUVs, meshVertices, meshIndices, rotated);
            };
            /**
             * ??????????????????????????????????????????
             */
            WebGLRenderContext.prototype.drawRect = function (x, y, width, height) {
                var buffer = this.currentBuffer;
                if (this.contextLost || !buffer) {
                    return;
                }
                if (this.vao.reachMaxSize()) {
                    this.$drawWebGL();
                }
                this.drawCmdManager.pushDrawRect();
                this.vao.cacheArrays(buffer, 0, 0, width, height, x, y, width, height, width, height);
            };
            /**
             * ????????????
             */
            WebGLRenderContext.prototype.pushMask = function (x, y, width, height) {
                var buffer = this.currentBuffer;
                if (this.contextLost || !buffer) {
                    return;
                }
                buffer.$stencilList.push({ x: x, y: y, width: width, height: height });
                if (this.vao.reachMaxSize()) {
                    this.$drawWebGL();
                }
                this.drawCmdManager.pushPushMask();
                this.vao.cacheArrays(buffer, 0, 0, width, height, x, y, width, height, width, height);
            };
            /**
             * ????????????
             */
            WebGLRenderContext.prototype.popMask = function () {
                var buffer = this.currentBuffer;
                if (this.contextLost || !buffer) {
                    return;
                }
                var mask = buffer.$stencilList.pop();
                if (this.vao.reachMaxSize()) {
                    this.$drawWebGL();
                }
                this.drawCmdManager.pushPopMask();
                this.vao.cacheArrays(buffer, 0, 0, mask.width, mask.height, mask.x, mask.y, mask.width, mask.height, mask.width, mask.height);
            };
            /**
             * ??????????????????
             */
            WebGLRenderContext.prototype.clear = function () {
                this.drawCmdManager.pushClearColor();
            };
            /**
             * ??????scissor test
             */
            WebGLRenderContext.prototype.enableScissor = function (x, y, width, height) {
                var buffer = this.currentBuffer;
                this.drawCmdManager.pushEnableScissor(x, y, width, height);
                buffer.$hasScissor = true;
            };
            /**
             * ??????scissor test
             */
            WebGLRenderContext.prototype.disableScissor = function () {
                var buffer = this.currentBuffer;
                this.drawCmdManager.pushDisableScissor();
                buffer.$hasScissor = false;
            };
            WebGLRenderContext.prototype.$drawWebGL = function () {
                if (this.drawCmdManager.drawDataLen == 0 || this.contextLost) {
                    return;
                }
                this.uploadVerticesArray(this.vao.getVertices());
                // ???mesh????????????indicesForMesh
                if (this.vao.isMesh()) {
                    this.uploadIndicesArray(this.vao.getMeshIndices());
                }
                var length = this.drawCmdManager.drawDataLen;
                var offset = 0;
                for (var i = 0; i < length; i++) {
                    var data = this.drawCmdManager.drawData[i];
                    offset = this.drawData(data, offset);
                    // ??????draw call
                    if (data.type == 7 /* ACT_BUFFER */) {
                        this.activatedBuffer = data.buffer;
                    }
                    if (data.type == 0 /* TEXTURE */ || data.type == 1 /* RECT */ || data.type == 2 /* PUSH_MASK */ || data.type == 3 /* POP_MASK */) {
                        if (this.activatedBuffer && this.activatedBuffer.$computeDrawCall) {
                            this.activatedBuffer.$drawCalls++;
                        }
                    }
                }
                // ???????????????indices
                if (this.vao.isMesh()) {
                    this.uploadIndicesArray(this.vao.getIndices());
                }
                // ????????????
                this.drawCmdManager.clear();
                this.vao.clear();
            };
            /**
             * ??????????????????
             */
            WebGLRenderContext.prototype.drawData = function (data, offset) {
                if (!data) {
                    return;
                }
                var gl = this.context;
                var program;
                var filter = data.filter;
                switch (data.type) {
                    case 0 /* TEXTURE */:
                        if (filter) {
                            if (filter.type === "custom") {
                                program = wxapp.EgretWebGLProgram.getProgram(gl, filter.$vertexSrc, filter.$fragmentSrc, filter.$shaderKey);
                            }
                            else if (filter.type === "colorTransform") {
                                program = wxapp.EgretWebGLProgram.getProgram(gl, wxapp.EgretShaderLib.default_vert, wxapp.EgretShaderLib.colorTransform_frag, "colorTransform");
                            }
                            else if (filter.type === "blurX") {
                                program = wxapp.EgretWebGLProgram.getProgram(gl, wxapp.EgretShaderLib.default_vert, wxapp.EgretShaderLib.blur_frag, "blur");
                            }
                            else if (filter.type === "blurY") {
                                program = wxapp.EgretWebGLProgram.getProgram(gl, wxapp.EgretShaderLib.default_vert, wxapp.EgretShaderLib.blur_frag, "blur");
                            }
                            else if (filter.type === "glow") {
                                program = wxapp.EgretWebGLProgram.getProgram(gl, wxapp.EgretShaderLib.default_vert, wxapp.EgretShaderLib.glow_frag, "glow");
                            }
                        }
                        else {
                            program = wxapp.EgretWebGLProgram.getProgram(gl, wxapp.EgretShaderLib.default_vert, wxapp.EgretShaderLib.texture_frag, "texture");
                        }
                        this.activeProgram(gl, program);
                        this.syncUniforms(program, filter, data.textureWidth, data.textureHeight);
                        offset += this.drawTextureElements(data, offset);
                        break;
                    case 1 /* RECT */:
                        program = wxapp.EgretWebGLProgram.getProgram(gl, wxapp.EgretShaderLib.default_vert, wxapp.EgretShaderLib.primitive_frag, "primitive");
                        this.activeProgram(gl, program);
                        this.syncUniforms(program, filter, data.textureWidth, data.textureHeight);
                        offset += this.drawRectElements(data, offset);
                        break;
                    case 2 /* PUSH_MASK */:
                        program = wxapp.EgretWebGLProgram.getProgram(gl, wxapp.EgretShaderLib.default_vert, wxapp.EgretShaderLib.primitive_frag, "primitive");
                        this.activeProgram(gl, program);
                        this.syncUniforms(program, filter, data.textureWidth, data.textureHeight);
                        offset += this.drawPushMaskElements(data, offset);
                        break;
                    case 3 /* POP_MASK */:
                        program = wxapp.EgretWebGLProgram.getProgram(gl, wxapp.EgretShaderLib.default_vert, wxapp.EgretShaderLib.primitive_frag, "primitive");
                        this.activeProgram(gl, program);
                        this.syncUniforms(program, filter, data.textureWidth, data.textureHeight);
                        offset += this.drawPopMaskElements(data, offset);
                        break;
                    case 4 /* BLEND */:
                        this.setBlendMode(data.value);
                        break;
                    case 5 /* RESIZE_TARGET */:
                        data.buffer.rootRenderTarget.resize(data.width, data.height);
                        this.onResize(data.width, data.height);
                        break;
                    case 6 /* CLEAR_COLOR */:
                        if (this.activatedBuffer) {
                            var target = this.activatedBuffer.rootRenderTarget;
                            if (target.width != 0 || target.height != 0) {
                                target.clear(true);
                            }
                        }
                        break;
                    case 7 /* ACT_BUFFER */:
                        this.activateBuffer(data.buffer);
                        break;
                    case 8 /* ENABLE_SCISSOR */:
                        var buffer = this.activatedBuffer;
                        if (buffer) {
                            if (buffer.rootRenderTarget) {
                                buffer.rootRenderTarget.enabledStencil();
                            }
                            buffer.enableScissor(data.x, data.y, data.width, data.height);
                        }
                        break;
                    case 9 /* DISABLE_SCISSOR */:
                        buffer = this.activatedBuffer;
                        if (buffer) {
                            buffer.disableScissor();
                        }
                        break;
                    case 10 /* SMOOTHING */:
                        gl.bindTexture(gl.TEXTURE_2D, data.texture);
                        if (data.smoothing) {
                            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                        }
                        else {
                            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
                            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                        }
                        break;
                    default:
                        break;
                }
                return offset;
            };
            WebGLRenderContext.prototype.activeProgram = function (gl, program) {
                if (program != this.currentProgram) {
                    gl.useProgram(program.id);
                    // ????????????attribute buffer??????????????????????????????
                    var attribute = program.attributes;
                    for (var key in attribute) {
                        if (key === "aVertexPosition") {
                            gl.vertexAttribPointer(attribute["aVertexPosition"].location, 2, gl.FLOAT, false, 5 * 4, 0);
                            gl.enableVertexAttribArray(attribute["aVertexPosition"].location);
                        }
                        else if (key === "aTextureCoord") {
                            gl.vertexAttribPointer(attribute["aTextureCoord"].location, 2, gl.FLOAT, false, 5 * 4, 2 * 4);
                            gl.enableVertexAttribArray(attribute["aTextureCoord"].location);
                        }
                        else if (key === "aColor") {
                            gl.vertexAttribPointer(attribute["aColor"].location, 1, gl.FLOAT, false, 5 * 4, 4 * 4);
                            gl.enableVertexAttribArray(attribute["aColor"].location);
                        }
                    }
                    this.currentProgram = program;
                }
            };
            WebGLRenderContext.prototype.syncUniforms = function (program, filter, textureWidth, textureHeight) {
                var uniforms = program.uniforms;
                var isCustomFilter = filter && filter.type === "custom";
                for (var key in uniforms) {
                    if (key === "projectionVector") {
                        uniforms[key].setValue({ x: this.projectionX, y: this.projectionY });
                    }
                    else if (key === "uTextureSize") {
                        uniforms[key].setValue({ x: textureWidth, y: textureHeight });
                    }
                    else if (key === "uSampler") {
                    }
                    else {
                        var value = filter.$uniforms[key];
                        if (value !== undefined) {
                            uniforms[key].setValue(value);
                        }
                        else {
                            // egret.warn("filter custom: uniform " + key + " not defined!");
                        }
                    }
                }
            };
            /**
             * ???texture
             **/
            WebGLRenderContext.prototype.drawTextureElements = function (data, offset) {
                var gl = this.context;
                gl.bindTexture(gl.TEXTURE_2D, data.texture);
                var size = data.count * 3;
                gl.drawElements(gl.TRIANGLES, size, gl.UNSIGNED_SHORT, offset * 2);
                return size;
            };
            /**
             * @private
             * ???rect
             **/
            WebGLRenderContext.prototype.drawRectElements = function (data, offset) {
                var gl = this.context;
                // gl.bindTexture(gl.TEXTURE_2D, null);
                var size = data.count * 3;
                gl.drawElements(gl.TRIANGLES, size, gl.UNSIGNED_SHORT, offset * 2);
                return size;
            };
            /**
             * ???push mask
             **/
            WebGLRenderContext.prototype.drawPushMaskElements = function (data, offset) {
                var gl = this.context;
                var size = data.count * 3;
                var buffer = this.activatedBuffer;
                if (buffer) {
                    if (buffer.rootRenderTarget) {
                        buffer.rootRenderTarget.enabledStencil();
                    }
                    if (buffer.stencilHandleCount == 0) {
                        buffer.enableStencil();
                        gl.clear(gl.STENCIL_BUFFER_BIT); // clear
                    }
                    var level = buffer.stencilHandleCount;
                    buffer.stencilHandleCount++;
                    gl.colorMask(false, false, false, false);
                    gl.stencilFunc(gl.EQUAL, level, 0xFF);
                    gl.stencilOp(gl.KEEP, gl.KEEP, gl.INCR);
                    // gl.bindTexture(gl.TEXTURE_2D, null);
                    gl.drawElements(gl.TRIANGLES, size, gl.UNSIGNED_SHORT, offset * 2);
                    gl.stencilFunc(gl.EQUAL, level + 1, 0xFF);
                    gl.colorMask(true, true, true, true);
                    gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
                }
                return size;
            };
            /**
             * ???pop mask
             **/
            WebGLRenderContext.prototype.drawPopMaskElements = function (data, offset) {
                var gl = this.context;
                var size = data.count * 3;
                var buffer = this.activatedBuffer;
                if (buffer) {
                    buffer.stencilHandleCount--;
                    if (buffer.stencilHandleCount == 0) {
                        buffer.disableStencil(); // skip this draw
                    }
                    else {
                        var level = buffer.stencilHandleCount;
                        gl.colorMask(false, false, false, false);
                        gl.stencilFunc(gl.EQUAL, level + 1, 0xFF);
                        gl.stencilOp(gl.KEEP, gl.KEEP, gl.DECR);
                        // gl.bindTexture(gl.TEXTURE_2D, null);
                        gl.drawElements(gl.TRIANGLES, size, gl.UNSIGNED_SHORT, offset * 2);
                        gl.stencilFunc(gl.EQUAL, level, 0xFF);
                        gl.colorMask(true, true, true, true);
                        gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
                    }
                }
                return size;
            };
            /**
             * ????????????
             */
            WebGLRenderContext.prototype.setBlendMode = function (value) {
                var gl = this.context;
                var blendModeWebGL = WebGLRenderContext.blendModesForGL[value];
                if (blendModeWebGL) {
                    gl.blendFunc(blendModeWebGL[0], blendModeWebGL[1]);
                }
            };
            /**
             * ???????????????????????????render target
             * ?????????????????????input????????????????????????????????????input???????????????????????????????????????release
             */
            WebGLRenderContext.prototype.drawTargetWidthFilters = function (filters, input) {
                var originInput = input, filtersLen = filters.length, output;
                // ?????????????????????
                if (filtersLen > 1) {
                    for (var i = 0; i < filtersLen - 1; i++) {
                        var filter_1 = filters[i];
                        var width = input.rootRenderTarget.width;
                        var height = input.rootRenderTarget.height;
                        output = wxapp.WebGLRenderBuffer.create(width, height);
                        output.setTransform(1, 0, 0, 1, 0, 0);
                        output.globalAlpha = 1;
                        this.drawToRenderTarget(filter_1, input, output);
                        if (input != originInput) {
                            wxapp.WebGLRenderBuffer.release(input);
                        }
                        input = output;
                    }
                }
                // ???????????????????????????????????????????????????
                var filter = filters[filtersLen - 1];
                this.drawToRenderTarget(filter, input, this.currentBuffer);
                // ????????????????????????buffer
                if (input != originInput) {
                    wxapp.WebGLRenderBuffer.release(input);
                }
            };
            /**
             * ?????????renderTarget?????????
             * */
            WebGLRenderContext.prototype.drawToRenderTarget = function (filter, input, output) {
                if (this.contextLost) {
                    return;
                }
                if (this.vao.reachMaxSize()) {
                    this.$drawWebGL();
                }
                this.pushBuffer(output);
                var originInput = input, temp, width = input.rootRenderTarget.width, height = input.rootRenderTarget.height;
                // ????????????????????????blurX???blurY
                if (filter.type == "blur") {
                    var blurXFilter = filter.blurXFilter;
                    var blurYFilter = filter.blurYFilter;
                    if (blurXFilter.blurX != 0 && blurYFilter.blurY != 0) {
                        temp = wxapp.WebGLRenderBuffer.create(width, height);
                        temp.setTransform(1, 0, 0, 1, 0, 0);
                        temp.globalAlpha = 1;
                        this.drawToRenderTarget(filter.blurXFilter, input, temp);
                        if (input != originInput) {
                            wxapp.WebGLRenderBuffer.release(input);
                        }
                        input = temp;
                        filter = blurYFilter;
                    }
                    else {
                        filter = blurXFilter.blurX === 0 ? blurYFilter : blurXFilter;
                    }
                }
                // ??????input???????????????
                output.saveTransform();
                output.transform(1, 0, 0, -1, 0, height);
                this.vao.cacheArrays(output, 0, 0, width, height, 0, 0, width, height, width, height);
                output.restoreTransform();
                this.drawCmdManager.pushDrawTexture(input.rootRenderTarget.texture, 2, filter, width, height);
                // ?????????input
                if (input != originInput) {
                    wxapp.WebGLRenderBuffer.release(input);
                }
                this.popBuffer();
            };
            WebGLRenderContext.initBlendMode = function () {
                WebGLRenderContext.blendModesForGL = {};
                WebGLRenderContext.blendModesForGL["source-over"] = [1, 771];
                WebGLRenderContext.blendModesForGL["lighter"] = [1, 1];
                WebGLRenderContext.blendModesForGL["lighter-in"] = [770, 771];
                WebGLRenderContext.blendModesForGL["destination-out"] = [0, 771];
                WebGLRenderContext.blendModesForGL["destination-in"] = [0, 770];
            };
            WebGLRenderContext.glContextId = 0;
            WebGLRenderContext.blendModesForGL = null;
            return WebGLRenderContext;
        }());
        wxapp.WebGLRenderContext = WebGLRenderContext;
        __reflect(WebGLRenderContext.prototype, "egret.wxapp.WebGLRenderContext");
        WebGLRenderContext.initBlendMode();
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * @private
         * WebGL????????????
         */
        var WebGLRenderBuffer = (function (_super) {
            __extends(WebGLRenderBuffer, _super);
            function WebGLRenderBuffer(width, height, root) {
                var _this = _super.call(this) || this;
                _this.globalAlpha = 1;
                /**
                 * stencil state
                 * ??????????????????
                 */
                _this.stencilState = false;
                _this.$stencilList = [];
                _this.stencilHandleCount = 0;
                /**
                 * scissor state
                 * scissor ????????????
                 */
                _this.$scissorState = false;
                _this.scissorRect = new egret.Rectangle();
                _this.$hasScissor = false;
                _this.$drawCalls = 0;
                _this.$computeDrawCall = false;
                _this.globalMatrix = new egret.Matrix();
                _this.savedGlobalMatrix = new egret.Matrix();
                _this.$offsetX = 0;
                _this.$offsetY = 0;
                // ??????webglRenderContext
                _this.context = wxapp.WebGLRenderContext.getInstance(width, height);
                // buffer ????????? render target
                _this.rootRenderTarget = new wxapp.WebGLRenderTarget(_this.context.context, 3, 3);
                if (width && height) {
                    _this.resize(width, height);
                }
                // ???????????????????????????buffer??????????????????buffer
                _this.root = root;
                // ??????????????????????????????renderBuffer??????????????????renderTarget???renderContext????????????????????????
                if (_this.root) {
                    _this.context.pushBuffer(_this);
                    // ??????
                    _this.surface = _this.context.surface;
                    _this.$computeDrawCall = true;
                }
                else {
                    // ????????????renderTarget?????????frameBuffer???????????????????????????
                    var lastBuffer = _this.context.activatedBuffer;
                    if (lastBuffer) {
                        lastBuffer.rootRenderTarget.activate();
                    }
                    _this.rootRenderTarget.initFrameBuffer();
                    _this.surface = _this.rootRenderTarget;
                }
                return _this;
            }
            WebGLRenderBuffer.prototype.enableStencil = function () {
                if (!this.stencilState) {
                    this.context.enableStencilTest();
                    this.stencilState = true;
                }
            };
            WebGLRenderBuffer.prototype.disableStencil = function () {
                if (this.stencilState) {
                    this.context.disableStencilTest();
                    this.stencilState = false;
                }
            };
            WebGLRenderBuffer.prototype.restoreStencil = function () {
                if (this.stencilState) {
                    this.context.enableStencilTest();
                }
                else {
                    this.context.disableStencilTest();
                }
            };
            WebGLRenderBuffer.prototype.enableScissor = function (x, y, width, height) {
                if (!this.$scissorState) {
                    this.$scissorState = true;
                    this.scissorRect.setTo(x, y, width, height);
                    this.context.enableScissorTest(this.scissorRect);
                }
            };
            WebGLRenderBuffer.prototype.disableScissor = function () {
                if (this.$scissorState) {
                    this.$scissorState = false;
                    this.scissorRect.setEmpty();
                    this.context.disableScissorTest();
                }
            };
            WebGLRenderBuffer.prototype.restoreScissor = function () {
                if (this.$scissorState) {
                    this.context.enableScissorTest(this.scissorRect);
                }
                else {
                    this.context.disableScissorTest();
                }
            };
            Object.defineProperty(WebGLRenderBuffer.prototype, "width", {
                /**
                 * ?????????????????????????????????????????????
                 * @readOnly
                 */
                get: function () {
                    return this.rootRenderTarget.width;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(WebGLRenderBuffer.prototype, "height", {
                /**
                 * ?????????????????????????????????????????????
                 * @readOnly
                 */
                get: function () {
                    return this.rootRenderTarget.height;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * ?????????????????????????????????????????????
             * @param width ???????????????
             * @param height ???????????????
             * @param useMaxSize ?????????true???????????????????????????????????????????????????????????????????????????
             */
            WebGLRenderBuffer.prototype.resize = function (width, height, useMaxSize) {
                this.context.pushBuffer(this);
                width = width || 1;
                height = height || 1;
                // render target ????????????
                if (width != this.rootRenderTarget.width || height != this.rootRenderTarget.height) {
                    this.context.drawCmdManager.pushResize(this, width, height);
                    // ??????????????????
                    this.rootRenderTarget.width = width;
                    this.rootRenderTarget.height = height;
                }
                // ???????????????????????????????????????resize?????????surface?????????????????????
                if (this.root) {
                    this.context.resize(width, height, useMaxSize);
                }
                this.context.clear();
                this.context.popBuffer();
            };
            /**
             * ???????????????????????????
             */
            WebGLRenderBuffer.prototype.getPixels = function (x, y, width, height) {
                if (width === void 0) { width = 1; }
                if (height === void 0) { height = 1; }
                var pixels = new Uint8Array(4 * width * height);
                var useFrameBuffer = this.rootRenderTarget.useFrameBuffer;
                this.rootRenderTarget.useFrameBuffer = true;
                this.rootRenderTarget.activate();
                this.context.getPixels(x, y, width, height, pixels);
                this.rootRenderTarget.useFrameBuffer = useFrameBuffer;
                this.rootRenderTarget.activate();
                //????????????
                var result = new Uint8Array(4 * width * height);
                for (var i = 0; i < height; i++) {
                    for (var j = 0; j < width; j++) {
                        result[(width * (height - i - 1) + j) * 4] = pixels[(width * i + j) * 4];
                        result[(width * (height - i - 1) + j) * 4 + 1] = pixels[(width * i + j) * 4 + 1];
                        result[(width * (height - i - 1) + j) * 4 + 2] = pixels[(width * i + j) * 4 + 2];
                        result[(width * (height - i - 1) + j) * 4 + 3] = pixels[(width * i + j) * 4 + 3];
                    }
                }
                return result;
            };
            /**
             * ?????????base64?????????????????????????????????????????????????????????????????????null
             * @param type ?????????????????????: "image/png","image/jpeg"
             */
            WebGLRenderBuffer.prototype.toDataURL = function (type, encoderOptions) {
                return this.context.surface.toDataURL(type, encoderOptions);
            };
            /**
             * ??????????????????
             */
            WebGLRenderBuffer.prototype.destroy = function () {
                this.context.destroy();
            };
            WebGLRenderBuffer.prototype.onRenderFinish = function () {
                this.$drawCalls = 0;
            };
            /**
             * ??????frameBuffer???????????????surface???
             * @param width ??????
             * @param height ??????
             */
            WebGLRenderBuffer.prototype.drawFrameBufferToSurface = function (sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, clear) {
                if (clear === void 0) { clear = false; }
                this.rootRenderTarget.useFrameBuffer = false;
                this.rootRenderTarget.activate();
                this.context.disableStencilTest(); // ??????frameBuffer???????????????STENCIL_TEST
                this.context.disableScissorTest();
                this.setTransform(1, 0, 0, 1, 0, 0);
                this.globalAlpha = 1;
                this.context.setGlobalCompositeOperation("source-over");
                clear && this.context.clear();
                this.context.drawImage(this.rootRenderTarget, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, sourceWidth, sourceHeight, false);
                this.context.$drawWebGL();
                this.rootRenderTarget.useFrameBuffer = true;
                this.rootRenderTarget.activate();
                this.restoreStencil();
                this.restoreScissor();
            };
            /**
             * ??????surface????????????frameBuffer???
             * @param width ??????
             * @param height ??????
             */
            WebGLRenderBuffer.prototype.drawSurfaceToFrameBuffer = function (sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, clear) {
                if (clear === void 0) { clear = false; }
                this.rootRenderTarget.useFrameBuffer = true;
                this.rootRenderTarget.activate();
                this.context.disableStencilTest(); // ??????frameBuffer???????????????STENCIL_TEST
                this.context.disableScissorTest();
                this.setTransform(1, 0, 0, 1, 0, 0);
                this.globalAlpha = 1;
                this.context.setGlobalCompositeOperation("source-over");
                clear && this.context.clear();
                this.context.drawImage(this.context.surface, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, sourceWidth, sourceHeight, false);
                this.context.$drawWebGL();
                this.rootRenderTarget.useFrameBuffer = false;
                this.rootRenderTarget.activate();
                this.restoreStencil();
                this.restoreScissor();
            };
            /**
             * ?????????????????????
             */
            WebGLRenderBuffer.prototype.clear = function () {
                this.context.pushBuffer(this);
                this.context.clear();
                this.context.popBuffer();
            };
            WebGLRenderBuffer.prototype.setTransform = function (a, b, c, d, tx, ty) {
                // this.globalMatrix.setTo(a, b, c, d, tx, ty);
                var matrix = this.globalMatrix;
                matrix.a = a;
                matrix.b = b;
                matrix.c = c;
                matrix.d = d;
                matrix.tx = tx;
                matrix.ty = ty;
            };
            WebGLRenderBuffer.prototype.transform = function (a, b, c, d, tx, ty) {
                var matrix = this.globalMatrix;
                var a1 = matrix.a;
                var b1 = matrix.b;
                var c1 = matrix.c;
                var d1 = matrix.d;
                if (a != 1 || b != 0 || c != 0 || d != 1) {
                    matrix.a = a * a1 + b * c1;
                    matrix.b = a * b1 + b * d1;
                    matrix.c = c * a1 + d * c1;
                    matrix.d = c * b1 + d * d1;
                }
                matrix.tx = tx * a1 + ty * c1 + matrix.tx;
                matrix.ty = tx * b1 + ty * d1 + matrix.ty;
            };
            WebGLRenderBuffer.prototype.translate = function (dx, dy) {
                var matrix = this.globalMatrix;
                matrix.tx += dx;
                matrix.ty += dy;
            };
            WebGLRenderBuffer.prototype.useOffset = function () {
                var self = this;
                if (self.$offsetX != 0 || self.$offsetY != 0) {
                    self.globalMatrix.append(1, 0, 0, 1, self.$offsetX, self.$offsetY);
                    self.$offsetX = self.$offsetY = 0;
                }
            };
            WebGLRenderBuffer.prototype.saveTransform = function () {
                var matrix = this.globalMatrix;
                var sMatrix = this.savedGlobalMatrix;
                sMatrix.a = matrix.a;
                sMatrix.b = matrix.b;
                sMatrix.c = matrix.c;
                sMatrix.d = matrix.d;
                sMatrix.tx = matrix.tx;
                sMatrix.ty = matrix.ty;
            };
            WebGLRenderBuffer.prototype.restoreTransform = function () {
                var matrix = this.globalMatrix;
                var sMatrix = this.savedGlobalMatrix;
                matrix.a = sMatrix.a;
                matrix.b = sMatrix.b;
                matrix.c = sMatrix.c;
                matrix.d = sMatrix.d;
                matrix.tx = sMatrix.tx;
                matrix.ty = sMatrix.ty;
            };
            /**
             * ????????????buffer??????
             */
            WebGLRenderBuffer.create = function (width, height) {
                var buffer = renderBufferPool.pop();
                // width = Math.min(width, 1024);
                // height = Math.min(height, 1024);
                if (buffer) {
                    buffer.resize(width, height);
                    var matrix = buffer.globalMatrix;
                    matrix.a = 1;
                    matrix.b = 0;
                    matrix.c = 0;
                    matrix.d = 1;
                    matrix.tx = 0;
                    matrix.ty = 0;
                    buffer.globalAlpha = 1;
                    buffer.$offsetX = 0;
                    buffer.$offsetY = 0;
                }
                else {
                    buffer = new WebGLRenderBuffer(width, height);
                    buffer.$computeDrawCall = false;
                }
                return buffer;
            };
            /**
             * ????????????buffer??????
             */
            WebGLRenderBuffer.release = function (buffer) {
                renderBufferPool.push(buffer);
            };
            WebGLRenderBuffer.autoClear = true;
            return WebGLRenderBuffer;
        }(egret.HashObject));
        wxapp.WebGLRenderBuffer = WebGLRenderBuffer;
        __reflect(WebGLRenderBuffer.prototype, "egret.wxapp.WebGLRenderBuffer", ["egret.sys.RenderBuffer"]);
        var renderBufferPool = []; //????????????????????????
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        var blendModes = ["source-over", "lighter", "destination-out"];
        var defaultCompositeOp = "source-over";
        var BLACK_COLOR = "#000000";
        var CAPS_STYLES = { none: 'butt', square: 'square', round: 'round' };
        var renderBufferPool = []; //????????????????????????
        /**
         * @private
         * WebGL?????????
         */
        var WebGLRenderer = (function () {
            function WebGLRenderer() {
                this.nestLevel = 0; //????????????????????????0????????????????????????????????????
            }
            /**
             * ????????????????????????
             * @param displayObject ????????????????????????
             * @param buffer ????????????
             * @param matrix ?????????????????????????????????????????????
             * @param dirtyList ???????????????
             * @param forRenderTexture ???????????????RenderTexture?????????
             * @returns drawCall?????????????????????
             */
            WebGLRenderer.prototype.render = function (displayObject, buffer, matrix, forRenderTexture) {
                this.nestLevel++;
                var webglBuffer = buffer;
                var webglBufferContext = webglBuffer.context;
                var root = forRenderTexture ? displayObject : null;
                webglBufferContext.pushBuffer(webglBuffer);
                //??????????????????
                webglBuffer.transform(matrix.a, matrix.b, matrix.c, matrix.d, 0, 0);
                this.drawDisplayObject(displayObject, webglBuffer, matrix.tx, matrix.ty, true);
                webglBufferContext.$drawWebGL();
                var drawCall = webglBuffer.$drawCalls;
                webglBuffer.onRenderFinish();
                webglBufferContext.popBuffer();
                var invert = egret.Matrix.create();
                matrix.$invertInto(invert);
                webglBuffer.transform(invert.a, invert.b, invert.c, invert.d, 0, 0);
                egret.Matrix.release(invert);
                this.nestLevel--;
                if (this.nestLevel === 0) {
                    //????????????6???????????????
                    if (renderBufferPool.length > 6) {
                        renderBufferPool.length = 6;
                    }
                    var length_2 = renderBufferPool.length;
                    for (var i = 0; i < length_2; i++) {
                        renderBufferPool[i].resize(0, 0);
                    }
                }
                return drawCall;
            };
            /**
             * @private
             * ????????????????????????
             */
            WebGLRenderer.prototype.drawDisplayObject = function (displayObject, buffer, offsetX, offsetY, isStage) {
                var drawCalls = 0;
                var node;
                var displayList = displayObject.$displayList;
                if (displayList && !isStage) {
                    if (displayObject.$cacheDirty || displayObject.$renderDirty ||
                        displayList.$canvasScaleX != egret.sys.DisplayList.$canvasScaleX ||
                        displayList.$canvasScaleY != egret.sys.DisplayList.$canvasScaleY) {
                        drawCalls += displayList.drawToSurface();
                    }
                    node = displayList.$renderNode;
                }
                else {
                    if (displayObject.$renderDirty) {
                        node = displayObject.$getRenderNode();
                    }
                    else {
                        node = displayObject.$renderNode;
                    }
                }
                displayObject.$cacheDirty = false;
                if (node) {
                    drawCalls++;
                    buffer.$offsetX = offsetX;
                    buffer.$offsetY = offsetY;
                    switch (node.type) {
                        case 1 /* BitmapNode */:
                            this.renderBitmap(node, buffer);
                            break;
                        case 2 /* TextNode */:
                            this.renderText(node, buffer);
                            break;
                        case 3 /* GraphicsNode */:
                            this.renderGraphics(node, buffer);
                            break;
                        case 4 /* GroupNode */:
                            this.renderGroup(node, buffer);
                            break;
                        case 5 /* MeshNode */:
                            this.renderMesh(node, buffer);
                            break;
                        case 6 /* NormalBitmapNode */:
                            this.renderNormalBitmap(node, buffer);
                            break;
                    }
                    buffer.$offsetX = 0;
                    buffer.$offsetY = 0;
                }
                if (displayList && !isStage) {
                    return drawCalls;
                }
                var children = displayObject.$children;
                if (children) {
                    var length_3 = children.length;
                    for (var i = 0; i < length_3; i++) {
                        var child = children[i];
                        var offsetX2 = void 0;
                        var offsetY2 = void 0;
                        var tempAlpha = void 0;
                        if (child.$alpha != 1) {
                            tempAlpha = buffer.globalAlpha;
                            buffer.globalAlpha *= child.$alpha;
                        }
                        var savedMatrix = void 0;
                        if (child.$useTranslate) {
                            var m = child.$getMatrix();
                            offsetX2 = offsetX + child.$x;
                            offsetY2 = offsetY + child.$y;
                            var m2 = buffer.globalMatrix;
                            savedMatrix = egret.Matrix.create();
                            savedMatrix.a = m2.a;
                            savedMatrix.b = m2.b;
                            savedMatrix.c = m2.c;
                            savedMatrix.d = m2.d;
                            savedMatrix.tx = m2.tx;
                            savedMatrix.ty = m2.ty;
                            buffer.transform(m.a, m.b, m.c, m.d, offsetX2, offsetY2);
                            offsetX2 = -child.$anchorOffsetX;
                            offsetY2 = -child.$anchorOffsetY;
                        }
                        else {
                            offsetX2 = offsetX + child.$x - child.$anchorOffsetX;
                            offsetY2 = offsetY + child.$y - child.$anchorOffsetY;
                        }
                        switch (child.$renderMode) {
                            case 1 /* NONE */:
                                break;
                            case 2 /* FILTER */:
                                drawCalls += this.drawWithFilter(child, buffer, offsetX2, offsetY2);
                                break;
                            case 3 /* CLIP */:
                                drawCalls += this.drawWithClip(child, buffer, offsetX2, offsetY2);
                                break;
                            case 4 /* SCROLLRECT */:
                                drawCalls += this.drawWithScrollRect(child, buffer, offsetX2, offsetY2);
                                break;
                            default:
                                drawCalls += this.drawDisplayObject(child, buffer, offsetX2, offsetY2);
                                break;
                        }
                        if (tempAlpha) {
                            buffer.globalAlpha = tempAlpha;
                        }
                        if (savedMatrix) {
                            var m = buffer.globalMatrix;
                            m.a = savedMatrix.a;
                            m.b = savedMatrix.b;
                            m.c = savedMatrix.c;
                            m.d = savedMatrix.d;
                            m.tx = savedMatrix.tx;
                            m.ty = savedMatrix.ty;
                            egret.Matrix.release(savedMatrix);
                        }
                    }
                }
                return drawCalls;
            };
            /**
             * @private
             */
            WebGLRenderer.prototype.drawWithFilter = function (displayObject, buffer, offsetX, offsetY) {
                var drawCalls = 0;
                if (displayObject.$children && displayObject.$children.length == 0 && (!displayObject.$renderNode || displayObject.$renderNode.$getRenderCount() == 0)) {
                    return;
                }
                var filters = displayObject.$filters;
                var hasBlendMode = (displayObject.$blendMode !== 0);
                var compositeOp;
                if (hasBlendMode) {
                    compositeOp = blendModes[displayObject.$blendMode];
                    if (!compositeOp) {
                        compositeOp = defaultCompositeOp;
                    }
                }
                var displayBounds = displayObject.$getOriginalBounds();
                if (displayBounds.width <= 0 || displayBounds.height <= 0) {
                    return drawCalls;
                }
                if (!displayObject.mask && filters.length == 1 && (filters[0].type == "colorTransform" || (filters[0].type === "custom" && filters[0].padding === 0))) {
                    var childrenDrawCount = this.getRenderCount(displayObject);
                    if (!displayObject.$children || childrenDrawCount == 1) {
                        if (hasBlendMode) {
                            buffer.context.setGlobalCompositeOperation(compositeOp);
                        }
                        buffer.context.$filter = filters[0];
                        if (displayObject.$mask) {
                            drawCalls += this.drawWithClip(displayObject, buffer, offsetX, offsetY);
                        }
                        else if (displayObject.$scrollRect || displayObject.$maskRect) {
                            drawCalls += this.drawWithScrollRect(displayObject, buffer, offsetX, offsetY);
                        }
                        else {
                            drawCalls += this.drawDisplayObject(displayObject, buffer, offsetX, offsetY);
                        }
                        buffer.context.$filter = null;
                        if (hasBlendMode) {
                            buffer.context.setGlobalCompositeOperation(defaultCompositeOp);
                        }
                        return drawCalls;
                    }
                }
                // ?????????????????????????????????buffer
                var displayBuffer = this.createRenderBuffer(displayBounds.width, displayBounds.height);
                displayBuffer.context.pushBuffer(displayBuffer);
                //todo ??????????????????draw??????
                if (displayObject.$mask) {
                    drawCalls += this.drawWithClip(displayObject, displayBuffer, -displayBounds.x, -displayBounds.y);
                }
                else if (displayObject.$scrollRect || displayObject.$maskRect) {
                    drawCalls += this.drawWithScrollRect(displayObject, displayBuffer, -displayBounds.x, -displayBounds.y);
                }
                else {
                    drawCalls += this.drawDisplayObject(displayObject, displayBuffer, -displayBounds.x, -displayBounds.y);
                }
                displayBuffer.context.popBuffer();
                //?????????????????????
                if (drawCalls > 0) {
                    if (hasBlendMode) {
                        buffer.context.setGlobalCompositeOperation(compositeOp);
                    }
                    drawCalls++;
                    // ????????????????????????????????????
                    buffer.$offsetX = offsetX + displayBounds.x;
                    buffer.$offsetY = offsetY + displayBounds.y;
                    buffer.context.drawTargetWidthFilters(filters, displayBuffer);
                    if (hasBlendMode) {
                        buffer.context.setGlobalCompositeOperation(defaultCompositeOp);
                    }
                }
                renderBufferPool.push(displayBuffer);
                return drawCalls;
            };
            WebGLRenderer.prototype.getRenderCount = function (displayObject) {
                var childrenDrawCount = 0;
                if (displayObject.$children) {
                    for (var _i = 0, _a = displayObject.$children; _i < _a.length; _i++) {
                        var child = _a[_i];
                        var node = child.$getRenderNode();
                        if (node) {
                            childrenDrawCount += node.$getRenderCount();
                        }
                        if (child.$children) {
                            childrenDrawCount += this.getRenderCount(child);
                        }
                    }
                }
                return childrenDrawCount;
            };
            /**
             * @private
             */
            WebGLRenderer.prototype.drawWithClip = function (displayObject, buffer, offsetX, offsetY) {
                var drawCalls = 0;
                var hasBlendMode = (displayObject.$blendMode !== 0);
                var compositeOp;
                if (hasBlendMode) {
                    compositeOp = blendModes[displayObject.$blendMode];
                    if (!compositeOp) {
                        compositeOp = defaultCompositeOp;
                    }
                }
                var scrollRect = displayObject.$scrollRect ? displayObject.$scrollRect : displayObject.$maskRect;
                var mask = displayObject.$mask;
                if (mask) {
                    var maskRenderMatrix = mask.$getMatrix();
                    //??????scaleX???scaleY???0???????????????
                    if ((maskRenderMatrix.a == 0 && maskRenderMatrix.b == 0) || (maskRenderMatrix.c == 0 && maskRenderMatrix.d == 0)) {
                        return drawCalls;
                    }
                }
                //????????????,??????????????????????????????
                if (!mask && (!displayObject.$children || displayObject.$children.length == 0)) {
                    if (scrollRect) {
                        buffer.context.pushMask(scrollRect.x + offsetX, scrollRect.y + offsetY, scrollRect.width, scrollRect.height);
                    }
                    //??????????????????
                    if (hasBlendMode) {
                        buffer.context.setGlobalCompositeOperation(compositeOp);
                    }
                    drawCalls += this.drawDisplayObject(displayObject, buffer, offsetX, offsetY);
                    if (hasBlendMode) {
                        buffer.context.setGlobalCompositeOperation(defaultCompositeOp);
                    }
                    if (scrollRect) {
                        buffer.context.popMask();
                    }
                    return drawCalls;
                }
                else {
                    var displayBounds = displayObject.$getOriginalBounds();
                    //?????????????????????????????????scrollRect?????????clip
                    var displayBuffer = this.createRenderBuffer(displayBounds.width, displayBounds.height);
                    displayBuffer.context.pushBuffer(displayBuffer);
                    drawCalls += this.drawDisplayObject(displayObject, displayBuffer, -displayBounds.x, -displayBounds.y);
                    //????????????
                    if (mask) {
                        var maskBuffer = this.createRenderBuffer(displayBounds.width, displayBounds.height);
                        maskBuffer.context.pushBuffer(maskBuffer);
                        var maskMatrix = egret.Matrix.create();
                        maskMatrix.copyFrom(mask.$getConcatenatedMatrix());
                        mask.$getConcatenatedMatrixAt(displayObject, maskMatrix);
                        maskBuffer.setTransform(maskMatrix.a, maskMatrix.b, maskMatrix.c, maskMatrix.d, maskMatrix.tx, maskMatrix.ty);
                        egret.Matrix.release(maskMatrix);
                        drawCalls += this.drawDisplayObject(mask, maskBuffer, -displayBounds.x, -displayBounds.y);
                        maskBuffer.context.popBuffer();
                        displayBuffer.context.setGlobalCompositeOperation("destination-in");
                        displayBuffer.setTransform(1, 0, 0, -1, 0, maskBuffer.height);
                        displayBuffer.globalAlpha = 1;
                        var maskBufferWidth = maskBuffer.rootRenderTarget.width;
                        var maskBufferHeight = maskBuffer.rootRenderTarget.height;
                        displayBuffer.context.drawTexture(maskBuffer.rootRenderTarget.texture, 0, 0, maskBufferWidth, maskBufferHeight, 0, 0, maskBufferWidth, maskBufferHeight, maskBufferWidth, maskBufferHeight);
                        displayBuffer.setTransform(1, 0, 0, 1, 0, 0);
                        displayBuffer.context.setGlobalCompositeOperation("source-over");
                        renderBufferPool.push(maskBuffer);
                    }
                    displayBuffer.context.setGlobalCompositeOperation(defaultCompositeOp);
                    displayBuffer.context.popBuffer();
                    //?????????????????????
                    if (drawCalls > 0) {
                        drawCalls++;
                        if (hasBlendMode) {
                            buffer.context.setGlobalCompositeOperation(compositeOp);
                        }
                        if (scrollRect) {
                            buffer.context.pushMask(scrollRect.x + offsetX, scrollRect.y + offsetY, scrollRect.width, scrollRect.height);
                        }
                        buffer.globalAlpha = 1;
                        var savedMatrix = egret.Matrix.create();
                        var curMatrix = buffer.globalMatrix;
                        savedMatrix.a = curMatrix.a;
                        savedMatrix.b = curMatrix.b;
                        savedMatrix.c = curMatrix.c;
                        savedMatrix.d = curMatrix.d;
                        savedMatrix.tx = curMatrix.tx;
                        savedMatrix.ty = curMatrix.ty;
                        buffer.setTransform(egret.sys.DisplayList.$canvasScaleX, 0, 0, -egret.sys.DisplayList.$canvasScaleY, (offsetX + displayBounds.x) * egret.sys.DisplayList.$canvasScaleX, (offsetY + displayBounds.y + displayBuffer.height) * egret.sys.DisplayList.$canvasScaleY);
                        var displayBufferWidth = displayBuffer.rootRenderTarget.width;
                        var displayBufferHeight = displayBuffer.rootRenderTarget.height;
                        buffer.context.drawTexture(displayBuffer.rootRenderTarget.texture, 0, 0, displayBufferWidth, displayBufferHeight, 0, 0, displayBufferWidth, displayBufferHeight, displayBufferWidth, displayBufferHeight);
                        if (scrollRect) {
                            displayBuffer.context.popMask();
                        }
                        if (hasBlendMode) {
                            buffer.context.setGlobalCompositeOperation(defaultCompositeOp);
                        }
                        var matrix = buffer.globalMatrix;
                        matrix.a = savedMatrix.a;
                        matrix.b = savedMatrix.b;
                        matrix.c = savedMatrix.c;
                        matrix.d = savedMatrix.d;
                        matrix.tx = savedMatrix.tx;
                        matrix.ty = savedMatrix.ty;
                        egret.Matrix.release(savedMatrix);
                    }
                    renderBufferPool.push(displayBuffer);
                    return drawCalls;
                }
            };
            /**
             * @private
             */
            WebGLRenderer.prototype.drawWithScrollRect = function (displayObject, buffer, offsetX, offsetY) {
                var drawCalls = 0;
                var scrollRect = displayObject.$scrollRect ? displayObject.$scrollRect : displayObject.$maskRect;
                if (scrollRect.isEmpty()) {
                    return drawCalls;
                }
                if (displayObject.$scrollRect) {
                    offsetX -= scrollRect.x;
                    offsetY -= scrollRect.y;
                }
                var m = buffer.globalMatrix;
                var context = buffer.context;
                var scissor = false;
                if (buffer.$hasScissor || m.b != 0 || m.c != 0) {
                    buffer.context.pushMask(scrollRect.x + offsetX, scrollRect.y + offsetY, scrollRect.width, scrollRect.height);
                }
                else {
                    var a = m.a;
                    var d = m.d;
                    var tx = m.tx;
                    var ty = m.ty;
                    var x = scrollRect.x + offsetX;
                    var y = scrollRect.y + offsetY;
                    var xMax = x + scrollRect.width;
                    var yMax = y + scrollRect.height;
                    var minX = void 0, minY = void 0, maxX = void 0, maxY = void 0;
                    //????????????????????????????????????????????????????????????????????????????????????
                    if (a == 1.0 && d == 1.0) {
                        minX = x + tx;
                        minY = y + ty;
                        maxX = xMax + tx;
                        maxY = yMax + ty;
                    }
                    else {
                        var x0 = a * x + tx;
                        var y0 = d * y + ty;
                        var x1 = a * xMax + tx;
                        var y1 = d * y + ty;
                        var x2 = a * xMax + tx;
                        var y2 = d * yMax + ty;
                        var x3 = a * x + tx;
                        var y3 = d * yMax + ty;
                        var tmp = 0;
                        if (x0 > x1) {
                            tmp = x0;
                            x0 = x1;
                            x1 = tmp;
                        }
                        if (x2 > x3) {
                            tmp = x2;
                            x2 = x3;
                            x3 = tmp;
                        }
                        minX = (x0 < x2 ? x0 : x2);
                        maxX = (x1 > x3 ? x1 : x3);
                        if (y0 > y1) {
                            tmp = y0;
                            y0 = y1;
                            y1 = tmp;
                        }
                        if (y2 > y3) {
                            tmp = y2;
                            y2 = y3;
                            y3 = tmp;
                        }
                        minY = (y0 < y2 ? y0 : y2);
                        maxY = (y1 > y3 ? y1 : y3);
                    }
                    context.enableScissor(minX, -maxY + buffer.height, maxX - minX, maxY - minY);
                    scissor = true;
                }
                drawCalls += this.drawDisplayObject(displayObject, buffer, offsetX, offsetY);
                if (scissor) {
                    context.disableScissor();
                }
                else {
                    context.popMask();
                }
                return drawCalls;
            };
            /**
             * ?????????RenderNode???????????????????????????
             * @param node ??????????????????
             * @param buffer ????????????
             * @param matrix ??????????????????
             * @param forHitTest ??????????????????????????????????????????true????????????GraphicsNode?????????????????????????????????????????????????????????????????????
             */
            WebGLRenderer.prototype.drawNodeToBuffer = function (node, buffer, matrix, forHitTest) {
                var webglBuffer = buffer;
                //pushRenderTARGET
                webglBuffer.context.pushBuffer(webglBuffer);
                webglBuffer.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
                this.renderNode(node, buffer, 0, 0, forHitTest);
                webglBuffer.context.$drawWebGL();
                webglBuffer.onRenderFinish();
                //popRenderTARGET
                webglBuffer.context.popBuffer();
            };
            /**
             * ?????????DisplayObject??????????????????????????????RenderTexture??????
             * @param displayObject ????????????????????????
             * @param buffer ????????????
             * @param matrix ??????????????????
             */
            WebGLRenderer.prototype.drawDisplayToBuffer = function (displayObject, buffer, matrix) {
                buffer.context.pushBuffer(buffer);
                if (matrix) {
                    buffer.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
                }
                var node;
                if (displayObject.$renderDirty) {
                    node = displayObject.$getRenderNode();
                }
                else {
                    node = displayObject.$renderNode;
                }
                var drawCalls = 0;
                if (node) {
                    drawCalls++;
                    switch (node.type) {
                        case 1 /* BitmapNode */:
                            this.renderBitmap(node, buffer);
                            break;
                        case 2 /* TextNode */:
                            this.renderText(node, buffer);
                            break;
                        case 3 /* GraphicsNode */:
                            this.renderGraphics(node, buffer);
                            break;
                        case 4 /* GroupNode */:
                            this.renderGroup(node, buffer);
                            break;
                        case 5 /* MeshNode */:
                            this.renderMesh(node, buffer);
                            break;
                        case 6 /* NormalBitmapNode */:
                            this.renderNormalBitmap(node, buffer);
                            break;
                    }
                }
                var children = displayObject.$children;
                if (children) {
                    var length_4 = children.length;
                    for (var i = 0; i < length_4; i++) {
                        var child = children[i];
                        switch (child.$renderMode) {
                            case 1 /* NONE */:
                                break;
                            case 2 /* FILTER */:
                                drawCalls += this.drawWithFilter(child, buffer, 0, 0);
                                break;
                            case 3 /* CLIP */:
                                drawCalls += this.drawWithClip(child, buffer, 0, 0);
                                break;
                            case 4 /* SCROLLRECT */:
                                drawCalls += this.drawWithScrollRect(child, buffer, 0, 0);
                                break;
                            default:
                                drawCalls += this.drawDisplayObject(child, buffer, 0, 0);
                                break;
                        }
                    }
                }
                buffer.context.$drawWebGL();
                buffer.onRenderFinish();
                buffer.context.popBuffer();
                return drawCalls;
            };
            /**
             * @private
             */
            WebGLRenderer.prototype.renderNode = function (node, buffer, offsetX, offsetY, forHitTest) {
                buffer.$offsetX = offsetX;
                buffer.$offsetY = offsetY;
                switch (node.type) {
                    case 1 /* BitmapNode */:
                        this.renderBitmap(node, buffer);
                        break;
                    case 2 /* TextNode */:
                        this.renderText(node, buffer);
                        break;
                    case 3 /* GraphicsNode */:
                        this.renderGraphics(node, buffer, forHitTest);
                        break;
                    case 4 /* GroupNode */:
                        this.renderGroup(node, buffer);
                        break;
                    case 5 /* MeshNode */:
                        this.renderMesh(node, buffer);
                        break;
                    case 6 /* NormalBitmapNode */:
                        this.renderNormalBitmap(node, buffer);
                        break;
                }
            };
            /**
             * @private
             */
            WebGLRenderer.prototype.renderNormalBitmap = function (node, buffer) {
                var image = node.image;
                if (!image) {
                    return;
                }
                buffer.context.drawImage(image, node.sourceX, node.sourceY, node.sourceW, node.sourceH, node.drawX, node.drawY, node.drawW, node.drawH, node.imageWidth, node.imageHeight, node.rotated, node.smoothing);
            };
            /**
             * @private
             */
            WebGLRenderer.prototype.renderBitmap = function (node, buffer) {
                var image = node.image;
                if (!image) {
                    return;
                }
                //buffer.imageSmoothingEnabled = node.smoothing;
                var data = node.drawData;
                var length = data.length;
                var pos = 0;
                var m = node.matrix;
                var blendMode = node.blendMode;
                var alpha = node.alpha;
                var savedMatrix;
                var offsetX;
                var offsetY;
                if (m) {
                    savedMatrix = egret.Matrix.create();
                    var curMatrix = buffer.globalMatrix;
                    savedMatrix.a = curMatrix.a;
                    savedMatrix.b = curMatrix.b;
                    savedMatrix.c = curMatrix.c;
                    savedMatrix.d = curMatrix.d;
                    savedMatrix.tx = curMatrix.tx;
                    savedMatrix.ty = curMatrix.ty;
                    offsetX = buffer.$offsetX;
                    offsetY = buffer.$offsetY;
                    buffer.useOffset();
                    buffer.transform(m.a, m.b, m.c, m.d, m.tx, m.ty);
                }
                //?????????????????????
                if (blendMode) {
                    buffer.context.setGlobalCompositeOperation(blendModes[blendMode]);
                }
                var originAlpha;
                if (alpha == alpha) {
                    originAlpha = buffer.globalAlpha;
                    buffer.globalAlpha *= alpha;
                }
                if (node.filter) {
                    buffer.context.$filter = node.filter;
                    while (pos < length) {
                        buffer.context.drawImage(image, data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], node.imageWidth, node.imageHeight, node.rotated, node.smoothing);
                    }
                    buffer.context.$filter = null;
                }
                else {
                    while (pos < length) {
                        buffer.context.drawImage(image, data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], node.imageWidth, node.imageHeight, node.rotated, node.smoothing);
                    }
                }
                if (blendMode) {
                    buffer.context.setGlobalCompositeOperation(defaultCompositeOp);
                }
                if (alpha == alpha) {
                    buffer.globalAlpha = originAlpha;
                }
                if (m) {
                    var matrix = buffer.globalMatrix;
                    matrix.a = savedMatrix.a;
                    matrix.b = savedMatrix.b;
                    matrix.c = savedMatrix.c;
                    matrix.d = savedMatrix.d;
                    matrix.tx = savedMatrix.tx;
                    matrix.ty = savedMatrix.ty;
                    buffer.$offsetX = offsetX;
                    buffer.$offsetY = offsetY;
                    egret.Matrix.release(savedMatrix);
                }
            };
            /**
             * @private
             */
            WebGLRenderer.prototype.renderMesh = function (node, buffer) {
                var image = node.image;
                //buffer.imageSmoothingEnabled = node.smoothing;
                var data = node.drawData;
                var length = data.length;
                var pos = 0;
                var m = node.matrix;
                var blendMode = node.blendMode;
                var alpha = node.alpha;
                var savedMatrix;
                var offsetX;
                var offsetY;
                if (m) {
                    savedMatrix = egret.Matrix.create();
                    var curMatrix = buffer.globalMatrix;
                    savedMatrix.a = curMatrix.a;
                    savedMatrix.b = curMatrix.b;
                    savedMatrix.c = curMatrix.c;
                    savedMatrix.d = curMatrix.d;
                    savedMatrix.tx = curMatrix.tx;
                    savedMatrix.ty = curMatrix.ty;
                    offsetX = buffer.$offsetX;
                    offsetY = buffer.$offsetY;
                    buffer.useOffset();
                    buffer.transform(m.a, m.b, m.c, m.d, m.tx, m.ty);
                }
                //?????????????????????
                if (blendMode) {
                    buffer.context.setGlobalCompositeOperation(blendModes[blendMode]);
                }
                var originAlpha;
                if (alpha == alpha) {
                    originAlpha = buffer.globalAlpha;
                    buffer.globalAlpha *= alpha;
                }
                if (node.filter) {
                    buffer.context.$filter = node.filter;
                    while (pos < length) {
                        buffer.context.drawMesh(image, data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], node.imageWidth, node.imageHeight, node.uvs, node.vertices, node.indices, node.bounds, node.rotated, node.smoothing);
                    }
                    buffer.context.$filter = null;
                }
                else {
                    while (pos < length) {
                        buffer.context.drawMesh(image, data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], node.imageWidth, node.imageHeight, node.uvs, node.vertices, node.indices, node.bounds, node.rotated, node.smoothing);
                    }
                }
                if (blendMode) {
                    buffer.context.setGlobalCompositeOperation(defaultCompositeOp);
                }
                if (alpha == alpha) {
                    buffer.globalAlpha = originAlpha;
                }
                if (m) {
                    var matrix = buffer.globalMatrix;
                    matrix.a = savedMatrix.a;
                    matrix.b = savedMatrix.b;
                    matrix.c = savedMatrix.c;
                    matrix.d = savedMatrix.d;
                    matrix.tx = savedMatrix.tx;
                    matrix.ty = savedMatrix.ty;
                    buffer.$offsetX = offsetX;
                    buffer.$offsetY = offsetY;
                    egret.Matrix.release(savedMatrix);
                }
            };
            /**
             * @private
             */
            WebGLRenderer.prototype.renderText = function (node, buffer) {
                var width = node.width - node.x;
                var height = node.height - node.y;
                if (width <= 0 || height <= 0 || !width || !height || node.drawData.length == 0) {
                    return;
                }
                var canvasScaleX = egret.sys.DisplayList.$canvasScaleX;
                var canvasScaleY = egret.sys.DisplayList.$canvasScaleY;
                var maxTextureSize = buffer.context.$maxTextureSize;
                if (width * canvasScaleX > maxTextureSize) {
                    canvasScaleX *= maxTextureSize / (width * canvasScaleX);
                }
                if (height * canvasScaleY > maxTextureSize) {
                    canvasScaleY *= maxTextureSize / (height * canvasScaleY);
                }
                width *= canvasScaleX;
                height *= canvasScaleY;
                var x = node.x * canvasScaleX;
                var y = node.y * canvasScaleY;
                if (node.$canvasScaleX != canvasScaleX || node.$canvasScaleY != canvasScaleY) {
                    node.$canvasScaleX = canvasScaleX;
                    node.$canvasScaleY = canvasScaleY;
                    node.dirtyRender = true;
                }
                if (!this.canvasRenderBuffer || !this.canvasRenderBuffer.context) {
                    this.canvasRenderer = new egret.CanvasRenderer();
                    this.canvasRenderBuffer = new wxapp.CanvasRenderBuffer(width, height);
                }
                else if (node.dirtyRender) {
                    this.canvasRenderBuffer.resize(width, height);
                }
                if (!this.canvasRenderBuffer.context) {
                    return;
                }
                if (canvasScaleX != 1 || canvasScaleY != 1) {
                    this.canvasRenderBuffer.context.setTransform(canvasScaleX, 0, 0, canvasScaleY, 0, 0);
                }
                if (x || y) {
                    if (node.dirtyRender) {
                        this.canvasRenderBuffer.context.setTransform(canvasScaleX, 0, 0, canvasScaleY, -x, -y);
                    }
                    buffer.transform(1, 0, 0, 1, x / canvasScaleX, y / canvasScaleY);
                }
                else if (canvasScaleX != 1 || canvasScaleY != 1) {
                    this.canvasRenderBuffer.context.setTransform(canvasScaleX, 0, 0, canvasScaleY, 0, 0);
                }
                if (node.dirtyRender) {
                    var surface = this.canvasRenderBuffer.surface;
                    this.canvasRenderer.renderText(node, this.canvasRenderBuffer.context);
                    // ??????canvas???texture
                    var texture = node.$texture;
                    if (!texture) {
                        texture = buffer.context.createTexture(surface);
                        node.$texture = texture;
                    }
                    else {
                        // ????????????????????????
                        buffer.context.updateTexture(texture, surface);
                    }
                    // ??????????????????
                    node.$textureWidth = surface.width;
                    node.$textureHeight = surface.height;
                }
                var textureWidth = node.$textureWidth;
                var textureHeight = node.$textureHeight;
                buffer.context.drawTexture(node.$texture, 0, 0, textureWidth, textureHeight, 0, 0, textureWidth / canvasScaleX, textureHeight / canvasScaleY, textureWidth, textureHeight);
                if (x || y) {
                    if (node.dirtyRender) {
                        this.canvasRenderBuffer.context.setTransform(canvasScaleX, 0, 0, canvasScaleY, 0, 0);
                    }
                    buffer.transform(1, 0, 0, 1, -x / canvasScaleX, -y / canvasScaleY);
                }
                node.dirtyRender = false;
            };
            /**
             * @private
             */
            WebGLRenderer.prototype.renderGraphics = function (node, buffer, forHitTest) {
                var width = node.width;
                var height = node.height;
                if (width <= 0 || height <= 0 || !width || !height || node.drawData.length == 0) {
                    return;
                }
                var canvasScaleX = egret.sys.DisplayList.$canvasScaleX;
                var canvasScaleY = egret.sys.DisplayList.$canvasScaleY;
                if (width * canvasScaleX < 1 || height * canvasScaleY < 1) {
                    canvasScaleX = canvasScaleY = 1;
                }
                if (node.$canvasScaleX != canvasScaleX || node.$canvasScaleY != canvasScaleY) {
                    node.$canvasScaleX = canvasScaleX;
                    node.$canvasScaleY = canvasScaleY;
                    node.dirtyRender = true;
                }
                width *= canvasScaleX;
                height *= canvasScaleY;
                if (!this.canvasRenderBuffer || !this.canvasRenderBuffer.context) {
                    this.canvasRenderer = new egret.CanvasRenderer();
                    this.canvasRenderBuffer = new wxapp.CanvasRenderBuffer(width, height);
                }
                else if (node.dirtyRender || forHitTest) {
                    this.canvasRenderBuffer.resize(width, height);
                }
                if (!this.canvasRenderBuffer.context) {
                    return;
                }
                if (canvasScaleX != 1 || canvasScaleY != 1) {
                    this.canvasRenderBuffer.context.setTransform(canvasScaleX, 0, 0, canvasScaleY, 0, 0);
                }
                if (node.x || node.y) {
                    if (node.dirtyRender || forHitTest) {
                        this.canvasRenderBuffer.context.translate(-node.x, -node.y);
                    }
                    buffer.transform(1, 0, 0, 1, node.x, node.y);
                }
                var surface = this.canvasRenderBuffer.surface;
                if (forHitTest) {
                    this.canvasRenderer.renderGraphics(node, this.canvasRenderBuffer.context, true);
                    egret.WebGLUtils.deleteWebGLTexture(surface);
                    var texture = buffer.context.getWebGLTexture(surface);
                    buffer.context.drawTexture(texture, 0, 0, width, height, 0, 0, width, height, surface.width, surface.height);
                }
                else {
                    if (node.dirtyRender) {
                        this.canvasRenderer.renderGraphics(node, this.canvasRenderBuffer.context);
                        // ??????canvas???texture
                        var texture = node.$texture;
                        if (!texture) {
                            texture = buffer.context.createTexture(surface);
                            node.$texture = texture;
                        }
                        else {
                            // ????????????????????????
                            buffer.context.updateTexture(texture, surface);
                        }
                        // ??????????????????
                        node.$textureWidth = surface.width;
                        node.$textureHeight = surface.height;
                    }
                    var textureWidth = node.$textureWidth;
                    var textureHeight = node.$textureHeight;
                    buffer.context.drawTexture(node.$texture, 0, 0, textureWidth, textureHeight, 0, 0, textureWidth / canvasScaleX, textureHeight / canvasScaleY, textureWidth, textureHeight);
                }
                if (node.x || node.y) {
                    if (node.dirtyRender || forHitTest) {
                        this.canvasRenderBuffer.context.translate(node.x, node.y);
                    }
                    buffer.transform(1, 0, 0, 1, -node.x, -node.y);
                }
                if (!forHitTest) {
                    node.dirtyRender = false;
                }
            };
            WebGLRenderer.prototype.renderGroup = function (groupNode, buffer) {
                var m = groupNode.matrix;
                var savedMatrix;
                var offsetX;
                var offsetY;
                if (m) {
                    savedMatrix = egret.Matrix.create();
                    var curMatrix = buffer.globalMatrix;
                    savedMatrix.a = curMatrix.a;
                    savedMatrix.b = curMatrix.b;
                    savedMatrix.c = curMatrix.c;
                    savedMatrix.d = curMatrix.d;
                    savedMatrix.tx = curMatrix.tx;
                    savedMatrix.ty = curMatrix.ty;
                    offsetX = buffer.$offsetX;
                    offsetY = buffer.$offsetY;
                    buffer.useOffset();
                    buffer.transform(m.a, m.b, m.c, m.d, m.tx, m.ty);
                }
                var children = groupNode.drawData;
                var length = children.length;
                for (var i = 0; i < length; i++) {
                    var node = children[i];
                    this.renderNode(node, buffer, buffer.$offsetX, buffer.$offsetY);
                }
                if (m) {
                    var matrix = buffer.globalMatrix;
                    matrix.a = savedMatrix.a;
                    matrix.b = savedMatrix.b;
                    matrix.c = savedMatrix.c;
                    matrix.d = savedMatrix.d;
                    matrix.tx = savedMatrix.tx;
                    matrix.ty = savedMatrix.ty;
                    buffer.$offsetX = offsetX;
                    buffer.$offsetY = offsetY;
                    egret.Matrix.release(savedMatrix);
                }
            };
            /**
             * @private
             */
            WebGLRenderer.prototype.createRenderBuffer = function (width, height) {
                var buffer = renderBufferPool.pop();
                if (buffer) {
                    buffer.resize(width, height);
                }
                else {
                    buffer = new wxapp.WebGLRenderBuffer(width, height);
                    buffer.$computeDrawCall = false;
                }
                return buffer;
            };
            return WebGLRenderer;
        }());
        wxapp.WebGLRenderer = WebGLRenderer;
        __reflect(WebGLRenderer.prototype, "egret.wxapp.WebGLRenderer", ["egret.sys.SystemRenderer"]);
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * @private
         */
        var WEBGL_ATTRIBUTE_TYPE;
        (function (WEBGL_ATTRIBUTE_TYPE) {
            WEBGL_ATTRIBUTE_TYPE[WEBGL_ATTRIBUTE_TYPE["FLOAT_VEC2"] = 35664] = "FLOAT_VEC2";
            WEBGL_ATTRIBUTE_TYPE[WEBGL_ATTRIBUTE_TYPE["FLOAT_VEC3"] = 35665] = "FLOAT_VEC3";
            WEBGL_ATTRIBUTE_TYPE[WEBGL_ATTRIBUTE_TYPE["FLOAT_VEC4"] = 35666] = "FLOAT_VEC4";
            WEBGL_ATTRIBUTE_TYPE[WEBGL_ATTRIBUTE_TYPE["FLOAT"] = 5126] = "FLOAT";
            WEBGL_ATTRIBUTE_TYPE[WEBGL_ATTRIBUTE_TYPE["BYTE"] = 65535] = "BYTE";
            WEBGL_ATTRIBUTE_TYPE[WEBGL_ATTRIBUTE_TYPE["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
            WEBGL_ATTRIBUTE_TYPE[WEBGL_ATTRIBUTE_TYPE["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
        })(WEBGL_ATTRIBUTE_TYPE = wxapp.WEBGL_ATTRIBUTE_TYPE || (wxapp.WEBGL_ATTRIBUTE_TYPE = {}));
        /**
         * @private
         */
        var EgretWebGLAttribute = (function () {
            function EgretWebGLAttribute(gl, program, attributeData) {
                this.gl = gl;
                this.name = attributeData.name;
                this.type = attributeData.type;
                this.size = attributeData.size;
                this.location = gl.getAttribLocation(program, this.name);
                this.count = 0;
                this.initCount(gl);
                this.format = gl.FLOAT;
                this.initFormat(gl);
            }
            EgretWebGLAttribute.prototype.initCount = function (gl) {
                var type = this.type;
                switch (type) {
                    case WEBGL_ATTRIBUTE_TYPE.FLOAT:
                    case WEBGL_ATTRIBUTE_TYPE.BYTE:
                    case WEBGL_ATTRIBUTE_TYPE.UNSIGNED_BYTE:
                    case WEBGL_ATTRIBUTE_TYPE.UNSIGNED_SHORT:
                        this.count = 1;
                        break;
                    case WEBGL_ATTRIBUTE_TYPE.FLOAT_VEC2:
                        this.count = 2;
                        break;
                    case WEBGL_ATTRIBUTE_TYPE.FLOAT_VEC3:
                        this.count = 3;
                        break;
                    case WEBGL_ATTRIBUTE_TYPE.FLOAT_VEC4:
                        this.count = 4;
                        break;
                }
            };
            EgretWebGLAttribute.prototype.initFormat = function (gl) {
                var type = this.type;
                switch (type) {
                    case WEBGL_ATTRIBUTE_TYPE.FLOAT:
                    case WEBGL_ATTRIBUTE_TYPE.FLOAT_VEC2:
                    case WEBGL_ATTRIBUTE_TYPE.FLOAT_VEC3:
                    case WEBGL_ATTRIBUTE_TYPE.FLOAT_VEC4:
                        this.format = gl.FLOAT;
                        break;
                    case WEBGL_ATTRIBUTE_TYPE.UNSIGNED_BYTE:
                        this.format = gl.UNSIGNED_BYTE;
                        break;
                    case WEBGL_ATTRIBUTE_TYPE.UNSIGNED_SHORT:
                        this.format = gl.UNSIGNED_SHORT;
                        break;
                    case WEBGL_ATTRIBUTE_TYPE.BYTE:
                        this.format = gl.BYTE;
                        break;
                }
            };
            return EgretWebGLAttribute;
        }());
        wxapp.EgretWebGLAttribute = EgretWebGLAttribute;
        __reflect(EgretWebGLAttribute.prototype, "egret.wxapp.EgretWebGLAttribute");
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        function loadShader(gl, type, source) {
            var shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
            if (!compiled) {
                console.log("shader not compiled!");
                console.log(gl.getShaderInfoLog(shader));
            }
            return shader;
        }
        function createWebGLProgram(gl, vertexShader, fragmentShader) {
            var program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            return program;
        }
        function extractAttributes(gl, program) {
            var attributes = {};
            var totalAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
            for (var i = 0; i < totalAttributes; i++) {
                var attribData = gl.getActiveAttrib(program, i);
                var name_2 = attribData.name;
                var attribute = new wxapp.EgretWebGLAttribute(gl, program, attribData);
                attributes[name_2] = attribute;
            }
            return attributes;
        }
        function extractUniforms(gl, program) {
            var uniforms = {};
            var totalUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
            for (var i = 0; i < totalUniforms; i++) {
                var uniformData = gl.getActiveUniform(program, i);
                var name_3 = uniformData.name;
                var uniform = new wxapp.EgretWebGLUniform(gl, program, uniformData);
                uniforms[name_3] = uniform;
            }
            return uniforms;
        }
        /**
         * @private
         */
        var EgretWebGLProgram = (function () {
            function EgretWebGLProgram(gl, vertSource, fragSource) {
                this.vshaderSource = vertSource;
                this.fshaderSource = fragSource;
                this.vertexShader = loadShader(gl, gl.VERTEX_SHADER, this.vshaderSource);
                this.fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, this.fshaderSource);
                this.id = createWebGLProgram(gl, this.vertexShader, this.fragmentShader);
                this.uniforms = extractUniforms(gl, this.id);
                this.attributes = extractAttributes(gl, this.id);
            }
            /**
             * ???????????????WebGL Program
             * @param key {string} ???????????????program????????????????????????key
             */
            EgretWebGLProgram.getProgram = function (gl, vertSource, fragSource, key) {
                if (!this.programCache[key]) {
                    this.programCache[key] = new EgretWebGLProgram(gl, vertSource, fragSource);
                }
                return this.programCache[key];
            };
            EgretWebGLProgram.deleteProgram = function (gl, vertSource, fragSource, key) {
                // TODO delete
            };
            EgretWebGLProgram.programCache = {};
            return EgretWebGLProgram;
        }());
        wxapp.EgretWebGLProgram = EgretWebGLProgram;
        __reflect(EgretWebGLProgram.prototype, "egret.wxapp.EgretWebGLProgram");
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * @private
         */
        var WEBGL_UNIFORM_TYPE;
        (function (WEBGL_UNIFORM_TYPE) {
            WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["FLOAT_VEC2"] = 35664] = "FLOAT_VEC2";
            WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["FLOAT_VEC3"] = 35665] = "FLOAT_VEC3";
            WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["FLOAT_VEC4"] = 35666] = "FLOAT_VEC4";
            WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["INT_VEC2"] = 35667] = "INT_VEC2";
            WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["INT_VEC3"] = 35668] = "INT_VEC3";
            WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["INT_VEC4"] = 35669] = "INT_VEC4";
            WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["BOOL"] = 35670] = "BOOL";
            WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["BOOL_VEC2"] = 35671] = "BOOL_VEC2";
            WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["BOOL_VEC3"] = 35672] = "BOOL_VEC3";
            WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["BOOL_VEC4"] = 35673] = "BOOL_VEC4";
            WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["FLOAT_MAT2"] = 35674] = "FLOAT_MAT2";
            WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["FLOAT_MAT3"] = 35675] = "FLOAT_MAT3";
            WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["FLOAT_MAT4"] = 35676] = "FLOAT_MAT4";
            WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["SAMPLER_2D"] = 35678] = "SAMPLER_2D";
            WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["SAMPLER_CUBE"] = 35680] = "SAMPLER_CUBE";
            WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["BYTE"] = 65535] = "BYTE";
            WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
            WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["SHORT"] = 5122] = "SHORT";
            WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
            WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["INT"] = 5124] = "INT";
            WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["UNSIGNED_INT"] = 5125] = "UNSIGNED_INT";
            WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["FLOAT"] = 5126] = "FLOAT";
        })(WEBGL_UNIFORM_TYPE = wxapp.WEBGL_UNIFORM_TYPE || (wxapp.WEBGL_UNIFORM_TYPE = {}));
        /**
         * @private
         */
        var EgretWebGLUniform = (function () {
            function EgretWebGLUniform(gl, program, uniformData) {
                this.gl = gl;
                this.name = uniformData.name;
                this.type = uniformData.type;
                this.size = uniformData.size;
                this.location = gl.getUniformLocation(program, this.name);
                this.setDefaultValue();
                this.generateSetValue();
                this.generateUpload();
            }
            EgretWebGLUniform.prototype.setDefaultValue = function () {
                var type = this.type;
                switch (type) {
                    case WEBGL_UNIFORM_TYPE.FLOAT:
                    case WEBGL_UNIFORM_TYPE.SAMPLER_2D:
                    case WEBGL_UNIFORM_TYPE.SAMPLER_CUBE:
                    case WEBGL_UNIFORM_TYPE.BOOL:
                    case WEBGL_UNIFORM_TYPE.INT:
                        this.value = 0;
                        break;
                    case WEBGL_UNIFORM_TYPE.FLOAT_VEC2:
                    case WEBGL_UNIFORM_TYPE.BOOL_VEC2:
                    case WEBGL_UNIFORM_TYPE.INT_VEC2:
                        this.value = [0, 0];
                        break;
                    case WEBGL_UNIFORM_TYPE.FLOAT_VEC3:
                    case WEBGL_UNIFORM_TYPE.BOOL_VEC3:
                    case WEBGL_UNIFORM_TYPE.INT_VEC3:
                        this.value = [0, 0, 0];
                        break;
                    case WEBGL_UNIFORM_TYPE.FLOAT_VEC4:
                    case WEBGL_UNIFORM_TYPE.BOOL_VEC4:
                    case WEBGL_UNIFORM_TYPE.INT_VEC4:
                        this.value = [0, 0, 0, 0];
                        break;
                    case WEBGL_UNIFORM_TYPE.FLOAT_MAT2:
                        this.value = new Float32Array([
                            1, 0,
                            0, 1
                        ]);
                        break;
                    case WEBGL_UNIFORM_TYPE.FLOAT_MAT3:
                        this.value = new Float32Array([
                            1, 0, 0,
                            0, 1, 0,
                            0, 0, 1
                        ]);
                        break;
                    case WEBGL_UNIFORM_TYPE.FLOAT_MAT4:
                        this.value = new Float32Array([
                            1, 0, 0, 0,
                            0, 1, 0, 0,
                            0, 0, 1, 0,
                            0, 0, 0, 1
                        ]);
                        break;
                }
            };
            EgretWebGLUniform.prototype.generateSetValue = function () {
                var type = this.type;
                switch (type) {
                    case WEBGL_UNIFORM_TYPE.FLOAT:
                    case WEBGL_UNIFORM_TYPE.SAMPLER_2D:
                    case WEBGL_UNIFORM_TYPE.SAMPLER_CUBE:
                    case WEBGL_UNIFORM_TYPE.BOOL:
                    case WEBGL_UNIFORM_TYPE.INT:
                        this.setValue = function (value) {
                            var notEqual = this.value !== value;
                            this.value = value;
                            notEqual && this.upload();
                        };
                        break;
                    case WEBGL_UNIFORM_TYPE.FLOAT_VEC2:
                    case WEBGL_UNIFORM_TYPE.BOOL_VEC2:
                    case WEBGL_UNIFORM_TYPE.INT_VEC2:
                        this.setValue = function (value) {
                            var notEqual = this.value[0] !== value.x || this.value[1] !== value.y;
                            this.value[0] = value.x;
                            this.value[1] = value.y;
                            notEqual && this.upload();
                        };
                        break;
                    case WEBGL_UNIFORM_TYPE.FLOAT_VEC3:
                    case WEBGL_UNIFORM_TYPE.BOOL_VEC3:
                    case WEBGL_UNIFORM_TYPE.INT_VEC3:
                        this.setValue = function (value) {
                            this.value[0] = value.x;
                            this.value[1] = value.y;
                            this.value[2] = value.z;
                            this.upload();
                        };
                        break;
                    case WEBGL_UNIFORM_TYPE.FLOAT_VEC4:
                    case WEBGL_UNIFORM_TYPE.BOOL_VEC4:
                    case WEBGL_UNIFORM_TYPE.INT_VEC4:
                        this.setValue = function (value) {
                            this.value[0] = value.x;
                            this.value[1] = value.y;
                            this.value[2] = value.z;
                            this.value[3] = value.w;
                            this.upload();
                        };
                        break;
                    case WEBGL_UNIFORM_TYPE.FLOAT_MAT2:
                    case WEBGL_UNIFORM_TYPE.FLOAT_MAT3:
                    case WEBGL_UNIFORM_TYPE.FLOAT_MAT4:
                        this.setValue = function (value) {
                            this.value.set(value);
                            this.upload();
                        };
                        break;
                }
            };
            EgretWebGLUniform.prototype.generateUpload = function () {
                var gl = this.gl;
                var type = this.type;
                var location = this.location;
                switch (type) {
                    case WEBGL_UNIFORM_TYPE.FLOAT:
                        this.upload = function () {
                            var value = this.value;
                            gl.uniform1f(location, value);
                        };
                        break;
                    case WEBGL_UNIFORM_TYPE.FLOAT_VEC2:
                        this.upload = function () {
                            var value = this.value;
                            gl.uniform2f(location, value[0], value[1]);
                        };
                        break;
                    case WEBGL_UNIFORM_TYPE.FLOAT_VEC3:
                        this.upload = function () {
                            var value = this.value;
                            gl.uniform3f(location, value[0], value[1], value[2]);
                        };
                        break;
                    case WEBGL_UNIFORM_TYPE.FLOAT_VEC4:
                        this.upload = function () {
                            var value = this.value;
                            gl.uniform4f(location, value[0], value[1], value[2], value[3]);
                        };
                        break;
                    case WEBGL_UNIFORM_TYPE.SAMPLER_2D:
                    case WEBGL_UNIFORM_TYPE.SAMPLER_CUBE:
                    case WEBGL_UNIFORM_TYPE.BOOL:
                    case WEBGL_UNIFORM_TYPE.INT:
                        this.upload = function () {
                            var value = this.value;
                            gl.uniform1i(location, value);
                        };
                        break;
                    case WEBGL_UNIFORM_TYPE.BOOL_VEC2:
                    case WEBGL_UNIFORM_TYPE.INT_VEC2:
                        this.upload = function () {
                            var value = this.value;
                            gl.uniform2i(location, value[0], value[1]);
                        };
                        break;
                    case WEBGL_UNIFORM_TYPE.BOOL_VEC3:
                    case WEBGL_UNIFORM_TYPE.INT_VEC3:
                        this.upload = function () {
                            var value = this.value;
                            gl.uniform3i(location, value[0], value[1], value[2]);
                        };
                        break;
                    case WEBGL_UNIFORM_TYPE.BOOL_VEC4:
                    case WEBGL_UNIFORM_TYPE.INT_VEC4:
                        this.upload = function () {
                            var value = this.value;
                            gl.uniform4i(location, value[0], value[1], value[2], value[3]);
                        };
                        break;
                    case WEBGL_UNIFORM_TYPE.FLOAT_MAT2:
                        this.upload = function () {
                            var value = this.value;
                            gl.uniformMatrix2fv(location, false, value);
                        };
                        break;
                    case WEBGL_UNIFORM_TYPE.FLOAT_MAT3:
                        this.upload = function () {
                            var value = this.value;
                            gl.uniformMatrix3fv(location, false, value);
                        };
                        break;
                    case WEBGL_UNIFORM_TYPE.FLOAT_MAT4:
                        this.upload = function () {
                            var value = this.value;
                            gl.uniformMatrix4fv(location, false, value);
                        };
                        break;
                }
            };
            return EgretWebGLUniform;
        }());
        wxapp.EgretWebGLUniform = EgretWebGLUniform;
        __reflect(EgretWebGLUniform.prototype, "egret.wxapp.EgretWebGLUniform");
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));

(function (egret) {
    var wxapp;
    (function (wxapp) {
        /**
         * @private
         */
        var EgretShaderLib = (function () {
            function EgretShaderLib() {
            }
            EgretShaderLib.blur_frag = "precision mediump float;\nuniform vec2 blur;\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\nuniform vec2 uTextureSize;\nvoid main()\n{\n    const int sampleRadius = 5;\n    const int samples = sampleRadius * 2 + 1;\n    vec2 blurUv = blur / uTextureSize;\n    vec4 color = vec4(0, 0, 0, 0);\n    vec2 uv = vec2(0.0, 0.0);\n    blurUv /= float(sampleRadius);\n    for (int i = -sampleRadius; i <= sampleRadius; i++) {\n        uv.x = vTextureCoord.x + float(i) * blurUv.x;\n        uv.y = vTextureCoord.y + float(i) * blurUv.y;\n        color += texture2D(uSampler, uv);\n    }\n    color /= float(samples);\n    gl_FragColor = color;\n}";
            EgretShaderLib.colorTransform_frag = "precision mediump float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform mat4 matrix;\nuniform vec4 colorAdd;\nuniform sampler2D uSampler;\nvoid main(void) {\n    vec4 texColor = texture2D(uSampler, vTextureCoord);\n    if(texColor.a > 0.) {\n        texColor = vec4(texColor.rgb / texColor.a, texColor.a);\n    }\n    vec4 locColor = clamp(texColor * matrix + colorAdd, 0., 1.);\n    gl_FragColor = vColor * vec4(locColor.rgb * locColor.a, locColor.a);\n}";
            EgretShaderLib.default_vert = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec2 aColor;\nuniform vec2 projectionVector;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nconst vec2 center = vec2(-1.0, 1.0);\nvoid main(void) {\n   gl_Position = vec4( (aVertexPosition / projectionVector) + center , 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = vec4(aColor.x, aColor.x, aColor.x, aColor.x);\n}";
            EgretShaderLib.glow_frag = "precision mediump float;\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float dist;\nuniform float angle;\nuniform vec4 color;\nuniform float alpha;\nuniform float blurX;\nuniform float blurY;\nuniform float strength;\nuniform float inner;\nuniform float knockout;\nuniform float hideObject;\nuniform vec2 uTextureSize;\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\nvoid main(void) {\n    vec2 px = vec2(1.0 / uTextureSize.x, 1.0 / uTextureSize.y);\n    const float linearSamplingTimes = 7.0;\n    const float circleSamplingTimes = 12.0;\n    vec4 ownColor = texture2D(uSampler, vTextureCoord);\n    vec4 curColor;\n    float totalAlpha = 0.0;\n    float maxTotalAlpha = 0.0;\n    float curDistanceX = 0.0;\n    float curDistanceY = 0.0;\n    float offsetX = dist * cos(angle) * px.x;\n    float offsetY = dist * sin(angle) * px.y;\n    const float PI = 3.14159265358979323846264;\n    float cosAngle;\n    float sinAngle;\n    float offset = PI * 2.0 / circleSamplingTimes * random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    float stepX = blurX * px.x / linearSamplingTimes;\n    float stepY = blurY * px.y / linearSamplingTimes;\n    for (float a = 0.0; a <= PI * 2.0; a += PI * 2.0 / circleSamplingTimes) {\n        cosAngle = cos(a + offset);\n        sinAngle = sin(a + offset);\n        for (float i = 1.0; i <= linearSamplingTimes; i++) {\n            curDistanceX = i * stepX * cosAngle;\n            curDistanceY = i * stepY * sinAngle;\n            \n            curColor = texture2D(uSampler, vec2(vTextureCoord.x + curDistanceX - offsetX, vTextureCoord.y + curDistanceY + offsetY));\n            totalAlpha += (linearSamplingTimes - i) * curColor.a;\n            maxTotalAlpha += (linearSamplingTimes - i);\n        }\n    }\n    ownColor.a = max(ownColor.a, 0.0001);\n    ownColor.rgb = ownColor.rgb / ownColor.a;\n    float outerGlowAlpha = (totalAlpha / maxTotalAlpha) * strength * alpha * (1. - inner) * max(min(hideObject, knockout), 1. - ownColor.a);\n    float innerGlowAlpha = ((maxTotalAlpha - totalAlpha) / maxTotalAlpha) * strength * alpha * inner * ownColor.a;\n    ownColor.a = max(ownColor.a * knockout * (1. - hideObject), 0.0001);\n    vec3 mix1 = mix(ownColor.rgb, color.rgb, innerGlowAlpha / (innerGlowAlpha + ownColor.a));\n    vec3 mix2 = mix(mix1, color.rgb, outerGlowAlpha / (innerGlowAlpha + ownColor.a + outerGlowAlpha));\n    float resultAlpha = min(ownColor.a + outerGlowAlpha + innerGlowAlpha, 1.);\n    gl_FragColor = vec4(mix2 * resultAlpha, resultAlpha);\n}";
            EgretShaderLib.primitive_frag = "precision lowp float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvoid main(void) {\n    gl_FragColor = vColor;\n}";
            EgretShaderLib.texture_frag = "precision lowp float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform sampler2D uSampler;\nvoid main(void) {\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor;\n}";
            return EgretShaderLib;
        }());
        wxapp.EgretShaderLib = EgretShaderLib;
        __reflect(EgretShaderLib.prototype, "egret.wxapp.EgretShaderLib");
    })(wxapp = egret.wxapp || (egret.wxapp = {}));
})(egret || (egret = {}));
;

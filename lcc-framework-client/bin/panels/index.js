//import { EXTENSION_PATH, getGamePacks, exeCommand, getFrameworkModules } from '../utils';
//import { loadConfig, saveConfig } from '../config';
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
var _a = require(Editor.Project.path + "/packages/lcc-framework-client/bin/utils"), EXTENSION_PATH = _a.EXTENSION_PATH, getGamePacks = _a.getGamePacks, exeCommand = _a.exeCommand, getFrameworkModules = _a.getFrameworkModules;
var _b = require(Editor.Project.path + "/packages/lcc-framework-client/bin/config"), loadConfig = _b.loadConfig, saveConfig = _b.saveConfig;
var OS = require('os');
var Fs = require('fs');
var Path = require('path');
/**
 * 收集模块
 */
function collectModules() {
    var keepModules = {};
    var moduleDescs = {};
    var config = loadConfig();
    var modules = getFrameworkModules();
    for (var mname in modules) {
        var module_1 = modules[mname];
        if (mname.indexOf("base") != 0) {
            var keep = config.publish.keepModules[mname];
            moduleDescs[mname] = module_1.description;
            keepModules[mname] = keep != null ? keep : module_1.keepDefault;
        }
    }
    return {
        keeps: keepModules,
        descs: moduleDescs,
    };
}
Editor.Panel.extend({
    style: Fs.readFileSync(Path.join(EXTENSION_PATH, 'htmls', 'fontello.css'), { encoding: 'utf-8' }) +
        Fs.readFileSync(Path.join(EXTENSION_PATH, 'htmls', 'panel-frame.css'), { encoding: 'utf-8' }) +
        Fs.readFileSync(Path.join(EXTENSION_PATH, 'htmls', 'functions.css'), { encoding: 'utf-8' }),
    template: "\n<div id=\"functions\" loaded=\"\">\n\t<div class=\"slider\">\n\t\t<div v-bind:active=\"showpage==0\" v-on:click=\"changePage(0)\">" + Editor.T('lcc-framework.label-build-pack-declaration') + "</div>\n\t\t<div v-bind:active=\"showpage==1\" v-on:click=\"changePage(1)\">" + Editor.T('lcc-framework.label-publish-setting') + "</div>\n\t</div>\n\t<div class=\"tabs\" v-show=\"showpage==0\">\n\t\t<header>\n\t\t\t<h1>" + Editor.T('lcc-framework.label-build-pack-declaration') + "</h1>\n\t\t</header>\n\t\t<section>\n\t\t\t<div class=\"scroll\">\n\t\t\t\t<style type=\"text/css\">.fit,.fixed-bottom,.fixed-top{right:0}.fit,.fixed-bottom,.fixed-left{bottom:0;left:0}.layout.horizontal,.layout.horizontal-reverse,.layout.vertical,.layout.vertical-reverse{display:-ms-flexbox;display:-webkit-flex;display:flex}.layout.inline{display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex}.layout.horizontal{-ms-flex-direction:row;-webkit-flex-direction:row;flex-direction:row}.layout.horizontal-reverse{-ms-flex-direction:row-reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse}.layout.vertical{-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.layout.vertical-reverse{-ms-flex-direction:column-reverse;-webkit-flex-direction:column-reverse;flex-direction:column-reverse}.layout.wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.layout.wrap-reverse{-ms-flex-wrap:wrap-reverse;-webkit-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.flex-auto{-ms-flex:1 1 auto;-webkit-flex:1 1 auto;flex:1 1 auto}.flex-none{-ms-flex:none;-webkit-flex:none;flex:none}.flex,.flex-1{-ms-flex:1;-webkit-flex:1;flex:1}.flex-2{-ms-flex:2;-webkit-flex:2;flex:2}.flex-3{-ms-flex:3;-webkit-flex:3;flex:3}.flex-4{-ms-flex:4;-webkit-flex:4;flex:4}.flex-5{-ms-flex:5;-webkit-flex:5;flex:5}.flex-6{-ms-flex:6;-webkit-flex:6;flex:6}.flex-7{-ms-flex:7;-webkit-flex:7;flex:7}.flex-8{-ms-flex:8;-webkit-flex:8;flex:8}.flex-9{-ms-flex:9;-webkit-flex:9;flex:9}.flex-10{-ms-flex:10;-webkit-flex:10;flex:10}.flex-11{-ms-flex:11;-webkit-flex:11;flex:11}.flex-12{-ms-flex:12;-webkit-flex:12;flex:12}.layout.start{-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start}.layout.center,.layout.center-center{-ms-flex-align:center;-webkit-align-items:center;align-items:center}.layout.end{-ms-flex-align:end;-webkit-align-items:flex-end;align-items:flex-end}.layout.start-justified{-ms-flex-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.layout.center-center,.layout.center-justified{-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center}.layout.end-justified{-ms-flex-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.layout.around-justified{-ms-flex-pack:around;-webkit-justify-content:space-around;justify-content:space-around}.layout.justified{-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.self-start{-ms-align-self:flex-start;-webkit-align-self:flex-start;align-self:flex-start}.self-center{-ms-align-self:center;-webkit-align-self:center;align-self:center}.self-end{-ms-align-self:flex-end;-webkit-align-self:flex-end;align-self:flex-end}.self-stretch{-ms-align-self:stretch;-webkit-align-self:stretch;align-self:stretch}.block{display:block}[hidden]{display:none!important}.invisible{visibility:hidden!important}.relative{position:relative}.fit{position:absolute;top:0}body.fullbleed{margin:0;height:100vh}.scroll{-webkit-overflow-scrolling:touch;overflow:auto}.fixed-bottom,.fixed-left,.fixed-right,.fixed-top{position:fixed}.fixed-top{top:0;left:0}.fixed-right{top:0;right:0;bottom:0}.fixed-left{top:0}:host{display:block;position:relative;contain:content}table{border-collapse:collapse;font-size:1em;width:100%}td,th{font-weight:400;text-align:left;padding:4px 8px}.label{width:10%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wrapper{position:relative}.fill{width:100%}th ui-prop{min-width:auto}tr[hovering] .label{color:#09f}tr[selected] .label{color:#fd942b}tr[is-disabled] .label{color:#636363;cursor:default} .debug td,.debug th{border:1px solid #666} .debug tr:nth-child(even){background-color:#333}</style>\n\t\t\t\t<table class=\"debug\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th class=\"label\">\n\t\t\t\t\t\t\t<span>" + Editor.T('lcc-framework.label-pack') + "</span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th class=\"wrapper\">\n\t\t\t\t\t\t\t<span>" + Editor.T('lcc-framework.label-path') + "</span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th class=\"label\">\n\t\t\t\t\t\t\t<span>" + Editor.T('lcc-framework.label-action') + "</span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr v-for=\"(pack,path) in packs\">\n\t\t\t\t\t\t<th class=\"label\">\n\t\t\t\t\t\t\t<span>{{pack}}</span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th class=\"wrapper\">\n\t\t\t\t\t\t\t<span>{{path}}</span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th class=\"label\">\n\t\t\t\t\t\t\t<ui-button class=\"green\" v-disabled=\"building\" @click=\"buildDeclaration(pack)\">" + Editor.T('lcc-framework.button-build') + "</ui-button>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t\t<h2>" + Editor.T('lcc-framework.label-build-output') + "</h2>\n\t\t\t\t<pre v-text=\"buildinfo\"></pre>\n\t\t\t</div>\n\t\t</section>\n\t\t<ui-loader class=\"transparent\" v-show=\"building\">" + Editor.T('lcc-framework.label-building') + "</ui-loader>\n\t</div>\n\t<div class=\"tabs\" v-show=\"showpage==1\">\n\t\t<header>\n\t\t\t<h1>" + Editor.T('lcc-framework.label-publish-setting') + "</h1>\n\t\t</header>\n\t\t<section>\n\t\t\t<div class=\"preview\">\n\t\t\t\t<ui-prop name=\"" + Editor.T('lcc-framework.label-framework-confuse') + "\" tooltip=\"" + Editor.T('lcc-framework.label-framework-confuse') + "\">\n\t\t\t\t\t<ui-checkbox v-value=\"publish.confuse\"></ui-checkbox>\n\t\t\t\t</ui-prop>\n\t\t\t\t<ui-prop name=\"" + Editor.T('lcc-framework.label-framework-clip') + "\" tooltip=\"" + Editor.T('lcc-framework.label-framework-clip') + "\">\n\t\t\t\t\t<ui-checkbox v-value=\"publish.clip\"></ui-checkbox>\n\t\t\t\t</ui-prop>\n\t\t\t\t<ui-prop name=\"" + Editor.T('lcc-framework.label-framework-clip-method') + "\" tooltip=\"" + Editor.T('lcc-framework.label-framework-clip-method') + "\" v-show=\"publish.clip\">\n\t\t\t\t\t<ui-select v-value=\"publish.clipMethod\">\n\t\t\t\t\t\t<option value=\"auto\">" + Editor.T('lcc-framework.label-auto-clip') + "</option>\n\t\t\t\t\t\t<option value=\"custom\">" + Editor.T('lcc-framework.label-custom-clip') + "</option>\n\t\t\t\t\t</ui-select>\n\t\t\t\t</ui-prop>\t\n\t\t\t\t<ui-section v-show=\"publish.clip&&publish.clipMethod=='custom'\">\n\t\t\t\t\t<div slot=\"header\">" + Editor.T('lcc-framework.label-keep-modules') + "</div>\n\t\t\t\t\t<div style=\"overflow: auto;height: 200px;\">\n\t\t\t\t\t\t<ui-prop v-for=\"(module,keep) in publish.keepModules\" :key=\"module\" :name=\"module\" :tooltip=\"moduleDescs[module]\">\n\t\t\t\t\t\t\t<ui-checkbox v-value=\"keep\"></ui-checkbox>\n\t\t\t\t\t\t</ui-prop>\n\t\t\t\t\t</div>\n\t\t\t\t</ui-section>\n\t\t\t</div>\n\t\t</section>\n\t\t<footer>\n            <ui-button class=\"green\" v-disabled=\"saving\" @click=\"savePublishConfig()\">" + Editor.T('lcc-framework.button-save') + "</ui-button>\n        </footer>\n\t\t<ui-loader class=\"transparent\" v-show=\"saving\">" + Editor.T('lcc-framework.label-saving') + "</ui-loader>\n\t</div>\n</div>\n",
    ready: function () {
        return __awaiter(this, void 0, void 0, function () {
            var config, modules, app;
            return __generator(this, function (_a) {
                config = loadConfig();
                modules = collectModules();
                app = new window.Vue({
                    el: this.shadowRoot,
                    data: function () {
                        return {
                            showpage: 0,
                            packs: getGamePacks(),
                            building: false,
                            buildinfo: '',
                            moduleDescs: modules.descs,
                            publish: {
                                confuse: config.publish.confuse,
                                clip: config.publish.clip,
                                clipMethod: config.publish.clipMethod,
                                keepModules: modules.keeps,
                            },
                            saving: false,
                        };
                    },
                    methods: {
                        changePage: function (page) {
                            if (this.showpage != page) {
                                this.showpage = page;
                                if (page == 0) {
                                    this.packs = getGamePacks();
                                }
                                else if (page == 1) {
                                    modules = collectModules();
                                    this.moduleDescs = modules.descs;
                                    this.publish.keepModules = modules.keeps;
                                }
                            }
                        },
                        buildDeclaration: function (pack) {
                            return __awaiter(this, void 0, void 0, function () {
                                var command, result;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            this.building = true;
                                            this.buildinfo = Editor.T('lcc-framework.label-pack-building') + " [" + pack + "]";
                                            if (!(OS.platform() == "win32")) return [3 /*break*/, 2];
                                            command = "gulp buildDeclaration --pack " + pack;
                                            return [4 /*yield*/, exeCommand(command, EXTENSION_PATH)];
                                        case 1:
                                            result = _a.sent();
                                            if (result.error) {
                                                this.buildinfo += "\nerror :\n" + result.error;
                                            }
                                            else {
                                                this.buildinfo += "\nstdout :\n" + result.stdout;
                                                if (result.stderr) {
                                                    this.buildinfo += "\nstderr :\n" + result.stderr;
                                                }
                                            }
                                            _a.label = 2;
                                        case 2:
                                            this.buildinfo += "\n" + Editor.T('lcc-framework.label-pack-builded');
                                            this.building = false;
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        },
                        savePublishConfig: function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    this.saving = true;
                                    config.publish = this.publish;
                                    saveConfig(config);
                                    this.saving = false;
                                    return [2 /*return*/];
                                });
                            });
                        }
                    }
                });
                return [2 /*return*/];
            });
        });
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUNkLElBQUksQ0FBQyxTQUFTLElBQUksZ0JBQWMsTUFBTSxDQUFDLEtBQU8sQ0FBQzs2Q0FDbEQ7aURBQUk7Z0RBQ0QsSUFBSSxDQUFDLFNBQVMsSUFBSSxpQkFBZSxNQUFNLENBQUMsTUFBUSxDQUFDO2dEQUNqRCxJQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUM7b0RBQ2IsSUFBSSxDQUFDLFNBQVMsSUFBSSxpQkFBZSxNQUFNLENBQUMsTUFBUSxDQUFDO2lEQUNwRDs2Q0FDSjs7OzRDQUVMLElBQUksQ0FBQyxTQUFTLElBQUksT0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLGtDQUFrQyxDQUFHLENBQUM7NENBQ3RFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDOzs7Ozt5QkFDekI7d0JBRUssaUJBQWlCOzs7b0NBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29DQUNuQixNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7b0NBQzlCLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQ0FDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Ozs7eUJBQ3ZCO3FCQUNKO2lCQUNKLENBQUMsQ0FBQzs7OztLQUNOO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6InBhbmVscy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vL2ltcG9ydCB7IEVYVEVOU0lPTl9QQVRILCBnZXRHYW1lUGFja3MsIGV4ZUNvbW1hbmQsIGdldEZyYW1ld29ya01vZHVsZXMgfSBmcm9tICcuLi91dGlscyc7XHJcbi8vaW1wb3J0IHsgbG9hZENvbmZpZywgc2F2ZUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5jb25zdCB7IEVYVEVOU0lPTl9QQVRILCBnZXRHYW1lUGFja3MsIGV4ZUNvbW1hbmQsIGdldEZyYW1ld29ya01vZHVsZXMgfSA9IHJlcXVpcmUoYCR7RWRpdG9yLlByb2plY3QucGF0aH0vcGFja2FnZXMvbGNjLWZyYW1ld29yay1jbGllbnQvYmluL3V0aWxzYCk7XHJcbmNvbnN0IHsgbG9hZENvbmZpZywgc2F2ZUNvbmZpZyB9ID0gcmVxdWlyZShgJHtFZGl0b3IuUHJvamVjdC5wYXRofS9wYWNrYWdlcy9sY2MtZnJhbWV3b3JrLWNsaWVudC9iaW4vY29uZmlnYCk7XHJcblxyXG5jb25zdCBPUyA9IHJlcXVpcmUoJ29zJyk7XHJcbmNvbnN0IEZzID0gcmVxdWlyZSgnZnMnKTtcclxuY29uc3QgUGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuXHJcbi8qKlxyXG4gKiDmlLbpm4bmqKHlnZdcclxuICovXHJcbmZ1bmN0aW9uIGNvbGxlY3RNb2R1bGVzKCl7XHJcbiAgICBsZXQga2VlcE1vZHVsZXM6eyBba2V5OnN0cmluZ106Ym9vbGVhbiB9ID0ge307XHJcbiAgICBsZXQgbW9kdWxlRGVzY3M6eyBba2V5OnN0cmluZ106c3RyaW5nIH0gPSB7fTtcclxuICAgIGxldCBjb25maWcgPSBsb2FkQ29uZmlnKCk7XHJcblxyXG4gICAgY29uc3QgbW9kdWxlcyA9IGdldEZyYW1ld29ya01vZHVsZXMoKTtcclxuICAgIGZvcihsZXQgbW5hbWUgaW4gbW9kdWxlcyl7XHJcbiAgICAgICAgbGV0IG1vZHVsZSA9IG1vZHVsZXNbbW5hbWVdO1xyXG4gICAgICAgIGlmKG1uYW1lLmluZGV4T2YoXCJiYXNlXCIpICE9IDApe1xyXG4gICAgICAgICAgICBsZXQga2VlcCA9IGNvbmZpZy5wdWJsaXNoLmtlZXBNb2R1bGVzW21uYW1lXTtcclxuICAgICAgICAgICAgbW9kdWxlRGVzY3NbbW5hbWVdID0gbW9kdWxlLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICBrZWVwTW9kdWxlc1ttbmFtZV0gPSBrZWVwICE9IG51bGwgPyBrZWVwIDogbW9kdWxlLmtlZXBEZWZhdWx0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGtlZXBzIDoga2VlcE1vZHVsZXMsXHJcbiAgICAgICAgZGVzY3MgOiBtb2R1bGVEZXNjcyxcclxuICAgIH1cclxufVxyXG5cclxuRWRpdG9yLlBhbmVsLmV4dGVuZCh7XHJcblxyXG4gICAgc3R5bGU6IEZzLnJlYWRGaWxlU3luYyhQYXRoLmpvaW4oRVhURU5TSU9OX1BBVEgsICdodG1scycsICdmb250ZWxsby5jc3MnKSwgeyBlbmNvZGluZyA6ICd1dGYtOCcgfSkgKyBcclxuXHQgICAgRnMucmVhZEZpbGVTeW5jKFBhdGguam9pbihFWFRFTlNJT05fUEFUSCwgJ2h0bWxzJywgJ3BhbmVsLWZyYW1lLmNzcycpLCB7IGVuY29kaW5nIDogJ3V0Zi04JyB9KSArIFxyXG5cdCAgICBGcy5yZWFkRmlsZVN5bmMoUGF0aC5qb2luKEVYVEVOU0lPTl9QQVRILCAnaHRtbHMnLCAnZnVuY3Rpb25zLmNzcycpLCB7IGVuY29kaW5nIDogJ3V0Zi04JyB9KSxcclxuICAgIFxyXG4gICAgdGVtcGxhdGU6IGBcclxuPGRpdiBpZD1cImZ1bmN0aW9uc1wiIGxvYWRlZD1cIlwiPlxyXG5cdDxkaXYgY2xhc3M9XCJzbGlkZXJcIj5cclxuXHRcdDxkaXYgdi1iaW5kOmFjdGl2ZT1cInNob3dwYWdlPT0wXCIgdi1vbjpjbGljaz1cImNoYW5nZVBhZ2UoMClcIj4ke0VkaXRvci5UKCdsY2MtZnJhbWV3b3JrLmxhYmVsLWJ1aWxkLXBhY2stZGVjbGFyYXRpb24nKX08L2Rpdj5cclxuXHRcdDxkaXYgdi1iaW5kOmFjdGl2ZT1cInNob3dwYWdlPT0xXCIgdi1vbjpjbGljaz1cImNoYW5nZVBhZ2UoMSlcIj4ke0VkaXRvci5UKCdsY2MtZnJhbWV3b3JrLmxhYmVsLXB1Ymxpc2gtc2V0dGluZycpfTwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cdDxkaXYgY2xhc3M9XCJ0YWJzXCIgdi1zaG93PVwic2hvd3BhZ2U9PTBcIj5cclxuXHRcdDxoZWFkZXI+XHJcblx0XHRcdDxoMT4ke0VkaXRvci5UKCdsY2MtZnJhbWV3b3JrLmxhYmVsLWJ1aWxkLXBhY2stZGVjbGFyYXRpb24nKX08L2gxPlxyXG5cdFx0PC9oZWFkZXI+XHJcblx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInNjcm9sbFwiPlxyXG5cdFx0XHRcdDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj4uZml0LC5maXhlZC1ib3R0b20sLmZpeGVkLXRvcHtyaWdodDowfS5maXQsLmZpeGVkLWJvdHRvbSwuZml4ZWQtbGVmdHtib3R0b206MDtsZWZ0OjB9LmxheW91dC5ob3Jpem9udGFsLC5sYXlvdXQuaG9yaXpvbnRhbC1yZXZlcnNlLC5sYXlvdXQudmVydGljYWwsLmxheW91dC52ZXJ0aWNhbC1yZXZlcnNle2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTpmbGV4fS5sYXlvdXQuaW5saW5le2Rpc3BsYXk6LW1zLWlubGluZS1mbGV4Ym94O2Rpc3BsYXk6LXdlYmtpdC1pbmxpbmUtZmxleDtkaXNwbGF5OmlubGluZS1mbGV4fS5sYXlvdXQuaG9yaXpvbnRhbHstbXMtZmxleC1kaXJlY3Rpb246cm93Oy13ZWJraXQtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvd30ubGF5b3V0Lmhvcml6b250YWwtcmV2ZXJzZXstbXMtZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2U7LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZTtmbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZX0ubGF5b3V0LnZlcnRpY2Fsey1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5sYXlvdXQudmVydGljYWwtcmV2ZXJzZXstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uLXJldmVyc2U7LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjpjb2x1bW4tcmV2ZXJzZTtmbGV4LWRpcmVjdGlvbjpjb2x1bW4tcmV2ZXJzZX0ubGF5b3V0LndyYXB7LW1zLWZsZXgtd3JhcDp3cmFwOy13ZWJraXQtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXB9LmxheW91dC53cmFwLXJldmVyc2V7LW1zLWZsZXgtd3JhcDp3cmFwLXJldmVyc2U7LXdlYmtpdC1mbGV4LXdyYXA6d3JhcC1yZXZlcnNlO2ZsZXgtd3JhcDp3cmFwLXJldmVyc2V9LmZsZXgtYXV0b3stbXMtZmxleDoxIDEgYXV0bzstd2Via2l0LWZsZXg6MSAxIGF1dG87ZmxleDoxIDEgYXV0b30uZmxleC1ub25ley1tcy1mbGV4Om5vbmU7LXdlYmtpdC1mbGV4Om5vbmU7ZmxleDpub25lfS5mbGV4LC5mbGV4LTF7LW1zLWZsZXg6MTstd2Via2l0LWZsZXg6MTtmbGV4OjF9LmZsZXgtMnstbXMtZmxleDoyOy13ZWJraXQtZmxleDoyO2ZsZXg6Mn0uZmxleC0zey1tcy1mbGV4OjM7LXdlYmtpdC1mbGV4OjM7ZmxleDozfS5mbGV4LTR7LW1zLWZsZXg6NDstd2Via2l0LWZsZXg6NDtmbGV4OjR9LmZsZXgtNXstbXMtZmxleDo1Oy13ZWJraXQtZmxleDo1O2ZsZXg6NX0uZmxleC02ey1tcy1mbGV4OjY7LXdlYmtpdC1mbGV4OjY7ZmxleDo2fS5mbGV4LTd7LW1zLWZsZXg6Nzstd2Via2l0LWZsZXg6NztmbGV4Ojd9LmZsZXgtOHstbXMtZmxleDo4Oy13ZWJraXQtZmxleDo4O2ZsZXg6OH0uZmxleC05ey1tcy1mbGV4Ojk7LXdlYmtpdC1mbGV4Ojk7ZmxleDo5fS5mbGV4LTEwey1tcy1mbGV4OjEwOy13ZWJraXQtZmxleDoxMDtmbGV4OjEwfS5mbGV4LTExey1tcy1mbGV4OjExOy13ZWJraXQtZmxleDoxMTtmbGV4OjExfS5mbGV4LTEyey1tcy1mbGV4OjEyOy13ZWJraXQtZmxleDoxMjtmbGV4OjEyfS5sYXlvdXQuc3RhcnR7LW1zLWZsZXgtYWxpZ246c3RhcnQ7LXdlYmtpdC1hbGlnbi1pdGVtczpmbGV4LXN0YXJ0O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnR9LmxheW91dC5jZW50ZXIsLmxheW91dC5jZW50ZXItY2VudGVyey1tcy1mbGV4LWFsaWduOmNlbnRlcjstd2Via2l0LWFsaWduLWl0ZW1zOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9LmxheW91dC5lbmR7LW1zLWZsZXgtYWxpZ246ZW5kOy13ZWJraXQtYWxpZ24taXRlbXM6ZmxleC1lbmQ7YWxpZ24taXRlbXM6ZmxleC1lbmR9LmxheW91dC5zdGFydC1qdXN0aWZpZWR7LW1zLWZsZXgtcGFjazpzdGFydDstd2Via2l0LWp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5sYXlvdXQuY2VudGVyLWNlbnRlciwubGF5b3V0LmNlbnRlci1qdXN0aWZpZWR7LW1zLWZsZXgtcGFjazpjZW50ZXI7LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LmxheW91dC5lbmQtanVzdGlmaWVkey1tcy1mbGV4LXBhY2s6ZW5kOy13ZWJraXQtanVzdGlmeS1jb250ZW50OmZsZXgtZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0ubGF5b3V0LmFyb3VuZC1qdXN0aWZpZWR7LW1zLWZsZXgtcGFjazphcm91bmQ7LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO2p1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmR9LmxheW91dC5qdXN0aWZpZWR7LW1zLWZsZXgtcGFjazpqdXN0aWZ5Oy13ZWJraXQtanVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59LnNlbGYtc3RhcnR7LW1zLWFsaWduLXNlbGY6ZmxleC1zdGFydDstd2Via2l0LWFsaWduLXNlbGY6ZmxleC1zdGFydDthbGlnbi1zZWxmOmZsZXgtc3RhcnR9LnNlbGYtY2VudGVyey1tcy1hbGlnbi1zZWxmOmNlbnRlcjstd2Via2l0LWFsaWduLXNlbGY6Y2VudGVyO2FsaWduLXNlbGY6Y2VudGVyfS5zZWxmLWVuZHstbXMtYWxpZ24tc2VsZjpmbGV4LWVuZDstd2Via2l0LWFsaWduLXNlbGY6ZmxleC1lbmQ7YWxpZ24tc2VsZjpmbGV4LWVuZH0uc2VsZi1zdHJldGNoey1tcy1hbGlnbi1zZWxmOnN0cmV0Y2g7LXdlYmtpdC1hbGlnbi1zZWxmOnN0cmV0Y2g7YWxpZ24tc2VsZjpzdHJldGNofS5ibG9ja3tkaXNwbGF5OmJsb2NrfVtoaWRkZW5de2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9LmludmlzaWJsZXt2aXNpYmlsaXR5OmhpZGRlbiFpbXBvcnRhbnR9LnJlbGF0aXZle3Bvc2l0aW9uOnJlbGF0aXZlfS5maXR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjB9Ym9keS5mdWxsYmxlZWR7bWFyZ2luOjA7aGVpZ2h0OjEwMHZofS5zY3JvbGx7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7b3ZlcmZsb3c6YXV0b30uZml4ZWQtYm90dG9tLC5maXhlZC1sZWZ0LC5maXhlZC1yaWdodCwuZml4ZWQtdG9we3Bvc2l0aW9uOmZpeGVkfS5maXhlZC10b3B7dG9wOjA7bGVmdDowfS5maXhlZC1yaWdodHt0b3A6MDtyaWdodDowO2JvdHRvbTowfS5maXhlZC1sZWZ0e3RvcDowfTpob3N0e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7Y29udGFpbjpjb250ZW50fXRhYmxle2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtmb250LXNpemU6MWVtO3dpZHRoOjEwMCV9dGQsdGh7Zm9udC13ZWlnaHQ6NDAwO3RleHQtYWxpZ246bGVmdDtwYWRkaW5nOjRweCA4cHh9LmxhYmVse3dpZHRoOjEwJTt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXN9LndyYXBwZXJ7cG9zaXRpb246cmVsYXRpdmV9LmZpbGx7d2lkdGg6MTAwJX10aCB1aS1wcm9we21pbi13aWR0aDphdXRvfXRyW2hvdmVyaW5nXSAubGFiZWx7Y29sb3I6IzA5Zn10cltzZWxlY3RlZF0gLmxhYmVse2NvbG9yOiNmZDk0MmJ9dHJbaXMtZGlzYWJsZWRdIC5sYWJlbHtjb2xvcjojNjM2MzYzO2N1cnNvcjpkZWZhdWx0fSAuZGVidWcgdGQsLmRlYnVnIHRoe2JvcmRlcjoxcHggc29saWQgIzY2Nn0gLmRlYnVnIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiMzMzN9PC9zdHlsZT5cclxuXHRcdFx0XHQ8dGFibGUgY2xhc3M9XCJkZWJ1Z1wiPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGggY2xhc3M9XCJsYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPiR7RWRpdG9yLlQoJ2xjYy1mcmFtZXdvcmsubGFiZWwtcGFjaycpfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0PHRoIGNsYXNzPVwid3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPiR7RWRpdG9yLlQoJ2xjYy1mcmFtZXdvcmsubGFiZWwtcGF0aCcpfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0PHRoIGNsYXNzPVwibGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj4ke0VkaXRvci5UKCdsY2MtZnJhbWV3b3JrLmxhYmVsLWFjdGlvbicpfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8dHIgdi1mb3I9XCIocGFjayxwYXRoKSBpbiBwYWNrc1wiPlxyXG5cdFx0XHRcdFx0XHQ8dGggY2xhc3M9XCJsYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPnt7cGFja319PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGggY2xhc3M9XCJ3cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4+e3twYXRofX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aCBjbGFzcz1cImxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdFx0PHVpLWJ1dHRvbiBjbGFzcz1cImdyZWVuXCIgdi1kaXNhYmxlZD1cImJ1aWxkaW5nXCIgQGNsaWNrPVwiYnVpbGREZWNsYXJhdGlvbihwYWNrKVwiPiR7RWRpdG9yLlQoJ2xjYy1mcmFtZXdvcmsuYnV0dG9uLWJ1aWxkJyl9PC91aS1idXR0b24+XHJcblx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdFx0PGgyPiR7RWRpdG9yLlQoJ2xjYy1mcmFtZXdvcmsubGFiZWwtYnVpbGQtb3V0cHV0Jyl9PC9oMj5cclxuXHRcdFx0XHQ8cHJlIHYtdGV4dD1cImJ1aWxkaW5mb1wiPjwvcHJlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvc2VjdGlvbj5cclxuXHRcdDx1aS1sb2FkZXIgY2xhc3M9XCJ0cmFuc3BhcmVudFwiIHYtc2hvdz1cImJ1aWxkaW5nXCI+JHtFZGl0b3IuVCgnbGNjLWZyYW1ld29yay5sYWJlbC1idWlsZGluZycpfTwvdWktbG9hZGVyPlxyXG5cdDwvZGl2PlxyXG5cdDxkaXYgY2xhc3M9XCJ0YWJzXCIgdi1zaG93PVwic2hvd3BhZ2U9PTFcIj5cclxuXHRcdDxoZWFkZXI+XHJcblx0XHRcdDxoMT4ke0VkaXRvci5UKCdsY2MtZnJhbWV3b3JrLmxhYmVsLXB1Ymxpc2gtc2V0dGluZycpfTwvaDE+XHJcblx0XHQ8L2hlYWRlcj5cclxuXHRcdDxzZWN0aW9uPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicHJldmlld1wiPlxyXG5cdFx0XHRcdDx1aS1wcm9wIG5hbWU9XCIke0VkaXRvci5UKCdsY2MtZnJhbWV3b3JrLmxhYmVsLWZyYW1ld29yay1jb25mdXNlJyl9XCIgdG9vbHRpcD1cIiR7RWRpdG9yLlQoJ2xjYy1mcmFtZXdvcmsubGFiZWwtZnJhbWV3b3JrLWNvbmZ1c2UnKX1cIj5cclxuXHRcdFx0XHRcdDx1aS1jaGVja2JveCB2LXZhbHVlPVwicHVibGlzaC5jb25mdXNlXCI+PC91aS1jaGVja2JveD5cclxuXHRcdFx0XHQ8L3VpLXByb3A+XHJcblx0XHRcdFx0PHVpLXByb3AgbmFtZT1cIiR7RWRpdG9yLlQoJ2xjYy1mcmFtZXdvcmsubGFiZWwtZnJhbWV3b3JrLWNsaXAnKX1cIiB0b29sdGlwPVwiJHtFZGl0b3IuVCgnbGNjLWZyYW1ld29yay5sYWJlbC1mcmFtZXdvcmstY2xpcCcpfVwiPlxyXG5cdFx0XHRcdFx0PHVpLWNoZWNrYm94IHYtdmFsdWU9XCJwdWJsaXNoLmNsaXBcIj48L3VpLWNoZWNrYm94PlxyXG5cdFx0XHRcdDwvdWktcHJvcD5cclxuXHRcdFx0XHQ8dWktcHJvcCBuYW1lPVwiJHtFZGl0b3IuVCgnbGNjLWZyYW1ld29yay5sYWJlbC1mcmFtZXdvcmstY2xpcC1tZXRob2QnKX1cIiB0b29sdGlwPVwiJHtFZGl0b3IuVCgnbGNjLWZyYW1ld29yay5sYWJlbC1mcmFtZXdvcmstY2xpcC1tZXRob2QnKX1cIiB2LXNob3c9XCJwdWJsaXNoLmNsaXBcIj5cclxuXHRcdFx0XHRcdDx1aS1zZWxlY3Qgdi12YWx1ZT1cInB1Ymxpc2guY2xpcE1ldGhvZFwiPlxyXG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiYXV0b1wiPiR7RWRpdG9yLlQoJ2xjYy1mcmFtZXdvcmsubGFiZWwtYXV0by1jbGlwJyl9PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJjdXN0b21cIj4ke0VkaXRvci5UKCdsY2MtZnJhbWV3b3JrLmxhYmVsLWN1c3RvbS1jbGlwJyl9PC9vcHRpb24+XHJcblx0XHRcdFx0XHQ8L3VpLXNlbGVjdD5cclxuXHRcdFx0XHQ8L3VpLXByb3A+XHRcclxuXHRcdFx0XHQ8dWktc2VjdGlvbiB2LXNob3c9XCJwdWJsaXNoLmNsaXAmJnB1Ymxpc2guY2xpcE1ldGhvZD09J2N1c3RvbSdcIj5cclxuXHRcdFx0XHRcdDxkaXYgc2xvdD1cImhlYWRlclwiPiR7RWRpdG9yLlQoJ2xjYy1mcmFtZXdvcmsubGFiZWwta2VlcC1tb2R1bGVzJyl9PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPVwib3ZlcmZsb3c6IGF1dG87aGVpZ2h0OiAyMDBweDtcIj5cclxuXHRcdFx0XHRcdFx0PHVpLXByb3Agdi1mb3I9XCIobW9kdWxlLGtlZXApIGluIHB1Ymxpc2gua2VlcE1vZHVsZXNcIiA6a2V5PVwibW9kdWxlXCIgOm5hbWU9XCJtb2R1bGVcIiA6dG9vbHRpcD1cIm1vZHVsZURlc2NzW21vZHVsZV1cIj5cclxuXHRcdFx0XHRcdFx0XHQ8dWktY2hlY2tib3ggdi12YWx1ZT1cImtlZXBcIj48L3VpLWNoZWNrYm94PlxyXG5cdFx0XHRcdFx0XHQ8L3VpLXByb3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L3VpLXNlY3Rpb24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9zZWN0aW9uPlxyXG5cdFx0PGZvb3Rlcj5cclxuICAgICAgICAgICAgPHVpLWJ1dHRvbiBjbGFzcz1cImdyZWVuXCIgdi1kaXNhYmxlZD1cInNhdmluZ1wiIEBjbGljaz1cInNhdmVQdWJsaXNoQ29uZmlnKClcIj4ke0VkaXRvci5UKCdsY2MtZnJhbWV3b3JrLmJ1dHRvbi1zYXZlJyl9PC91aS1idXR0b24+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcblx0XHQ8dWktbG9hZGVyIGNsYXNzPVwidHJhbnNwYXJlbnRcIiB2LXNob3c9XCJzYXZpbmdcIj4ke0VkaXRvci5UKCdsY2MtZnJhbWV3b3JrLmxhYmVsLXNhdmluZycpfTwvdWktbG9hZGVyPlxyXG5cdDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBcclxuICAgIGFzeW5jIHJlYWR5KCkge1xyXG4gICAgICAgIGxldCBjb25maWcgPSBsb2FkQ29uZmlnKCk7XHJcbiAgICAgICAgbGV0IG1vZHVsZXMgPSBjb2xsZWN0TW9kdWxlcygpO1xyXG5cclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgY29uc3QgYXBwID0gbmV3IHdpbmRvdy5WdWUoe1xyXG4gICAgICAgICAgICBlbDogdGhpcy5zaGFkb3dSb290LFxyXG5cclxuICAgICAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd3BhZ2UgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhY2tzIDogZ2V0R2FtZVBhY2tzKCksXHJcbiAgICAgICAgICAgICAgICAgICAgYnVpbGRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBidWlsZGluZm8gOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBtb2R1bGVEZXNjcyA6IG1vZHVsZXMuZGVzY3MsXHJcbiAgICAgICAgICAgICAgICAgICAgcHVibGlzaCA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZnVzZSA6IGNvbmZpZy5wdWJsaXNoLmNvbmZ1c2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAgOiBjb25maWcucHVibGlzaC5jbGlwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlwTWV0aG9kIDogY29uZmlnLnB1Ymxpc2guY2xpcE1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAga2VlcE1vZHVsZXMgOiBtb2R1bGVzLmtlZXBzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2F2aW5nIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VQYWdlKHBhZ2U6bnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5zaG93cGFnZSAhPSBwYWdlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93cGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBhZ2UgPT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhY2tzID0gZ2V0R2FtZVBhY2tzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHBhZ2UgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVzID0gY29sbGVjdE1vZHVsZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9kdWxlRGVzY3MgPSBtb2R1bGVzLmRlc2NzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdWJsaXNoLmtlZXBNb2R1bGVzID0gbW9kdWxlcy5rZWVwcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGFzeW5jIGJ1aWxkRGVjbGFyYXRpb24ocGFjazpzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkaW5mbyA9IGAke0VkaXRvci5UKCdsY2MtZnJhbWV3b3JrLmxhYmVsLXBhY2stYnVpbGRpbmcnKX0gWyR7cGFja31dYDtcclxuICAgICAgICAgICAgICAgICAgICBpZihPUy5wbGF0Zm9ybSgpID09IFwid2luMzJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb21tYW5kID0gXCJndWxwIGJ1aWxkRGVjbGFyYXRpb24gLS1wYWNrIFwiICsgcGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGV4ZUNvbW1hbmQoY29tbWFuZCwgRVhURU5TSU9OX1BBVEgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkaW5mbyArPSBgXFxuZXJyb3IgOlxcbiR7cmVzdWx0LmVycm9yfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZGluZm8gKz0gYFxcbnN0ZG91dCA6XFxuJHtyZXN1bHQuc3Rkb3V0fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQuc3RkZXJyKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkaW5mbyArPSBgXFxuc3RkZXJyIDpcXG4ke3Jlc3VsdC5zdGRlcnJ9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkaW5mbyArPSBgXFxuJHtFZGl0b3IuVCgnbGNjLWZyYW1ld29yay5sYWJlbC1wYWNrLWJ1aWxkZWQnKX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgYXN5bmMgc2F2ZVB1Ymxpc2hDb25maWcoKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLnB1Ymxpc2ggPSB0aGlzLnB1Ymxpc2g7XHJcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUNvbmZpZyhjb25maWcpOyBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
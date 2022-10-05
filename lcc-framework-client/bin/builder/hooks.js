"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.onBuildFinished = exports.onBuildStart = void 0;
var utils_1 = require("../utils");
var config_1 = require("../config");
var modules_1 = require("./modules");
var Fs = require('fs');
var Path = require('path');
var TAG = 'lcc-framework';
/**
 * 构建开始
 */
function onBuildStart(options, callback) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            callback();
            return [2 /*return*/];
        });
    });
}
exports.onBuildStart = onBuildStart;
/**
 * 构建完成
 */
function onBuildFinished(options, callback) {
    return __awaiter(this, void 0, void 0, function () {
        var pkgOptions, destJs, VERSION, tempPath, modules, modulesConfig_1, pathList_2, autoclipCacheConfigFile, autoclipCacheConfig_1, autoclipCache, _i, pathList_1, _path, pinfo, modulesTree, mname, config, _a, _b, keyword, reg, keepModules_1, debug, option_debug, option_modules, option_confuse, frameworkCacheConfigFile, frameworkCacheFile, frameworkCacheConfig, command, result;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    pkgOptions = config_1.loadConfig().publish;
                    destJs = utils_1.findFile(options.dest, 'lcc-framework.js', utils_1.FindFileType.FILE);
                    if (!destJs) return [3 /*break*/, 5];
                    VERSION = utils_1.getExtensionConfig().version;
                    tempPath = Path.join(Editor.Project.path, 'temp', 'lcc-framework');
                    if (!Fs.existsSync(tempPath)) {
                        Fs.mkdirSync(tempPath, { recursive: true });
                    }
                    modules = '';
                    modulesConfig_1 = utils_1.getFrameworkModules();
                    if (pkgOptions.clip) {
                        if (pkgOptions.clipMethod == 'auto') {
                            pathList_2 = [];
                            utils_1.mapDirectory(Path.join(Editor.Project.path, 'assets'), function (path, file, isdir) {
                                if (!isdir && file != 'lcc-framework.js' && file != 'lcc-framework.d.ts' &&
                                    (path.endsWith('.ts') ||
                                        path.endsWith('.js') ||
                                        path.endsWith('.scene') ||
                                        path.endsWith('.prefab'))) {
                                    pathList_2.push(path);
                                }
                                return false;
                            });
                            autoclipCacheConfigFile = Path.join(tempPath, 'autoclip-cache-config.json');
                            autoclipCacheConfig_1 = { version: VERSION, filetimes: {}, modules: "" };
                            do {
                                // 检查缓存
                                if (Fs.existsSync(autoclipCacheConfigFile)) {
                                    autoclipCacheConfig_1 = JSON.parse(Fs.readFileSync(autoclipCacheConfigFile, { encoding: 'utf-8' }));
                                    if (Object.keys(autoclipCacheConfig_1.filetimes).length == pathList_2.length && autoclipCacheConfig_1.version == VERSION) {
                                        if ((function () {
                                            for (var _i = 0, pathList_3 = pathList_2; _i < pathList_3.length; _i++) {
                                                var _path = pathList_3[_i];
                                                var pinfo = Fs.statSync(_path);
                                                if (Math.floor(pinfo.mtimeMs) != autoclipCacheConfig_1.filetimes[_path]) {
                                                    return false;
                                                }
                                            }
                                            return true;
                                        })()) {
                                            Editor.log(TAG + " \u4F7F\u7528\u81EA\u52A8\u88C1\u526A\u7F13\u5B58");
                                            modules = autoclipCacheConfig_1.modules;
                                            break;
                                        }
                                    }
                                }
                                // 重新构建缓存
                                if (Fs.existsSync(autoclipCacheConfigFile)) {
                                    Fs.unlinkSync(autoclipCacheConfigFile);
                                }
                                autoclipCacheConfig_1.version = VERSION;
                                autoclipCacheConfig_1.filetimes = {};
                                autoclipCache = '';
                                for (_i = 0, pathList_1 = pathList_2; _i < pathList_1.length; _i++) {
                                    _path = pathList_1[_i];
                                    pinfo = Fs.statSync(_path);
                                    autoclipCacheConfig_1.filetimes[_path] = Math.floor(pinfo.mtimeMs);
                                    autoclipCache += Fs.readFileSync(_path, { encoding: 'utf-8' });
                                }
                                modulesTree = new modules_1.ModulesTree(modulesConfig_1);
                                for (mname in modulesConfig_1) {
                                    config = modulesConfig_1[mname];
                                    if (config.keywords) {
                                        for (_a = 0, _b = config.keywords; _a < _b.length; _a++) {
                                            keyword = _b[_a];
                                            reg = new RegExp("[^a-zA-Z_$]" + keyword + "[^a-zA-Z_$]");
                                            if (reg.test(autoclipCache)) {
                                                Editor.log(TAG + " KEYWORD '" + keyword + "' MODULE '" + mname + "'");
                                                modulesTree.keepModule(mname);
                                                break;
                                            }
                                        }
                                    }
                                }
                                autoclipCacheConfig_1.modules = modulesTree.collectModules().filter(function (mname) { return !modulesConfig_1[mname].baseModule; }).join(',');
                                modules = autoclipCacheConfig_1.modules;
                                Fs.writeFileSync(autoclipCacheConfigFile, JSON.stringify(autoclipCacheConfig_1));
                            } while (false);
                        }
                        else {
                            keepModules_1 = pkgOptions.keepModules;
                            modules = Object.keys(modulesConfig_1).filter(function (mname) {
                                var module = modulesConfig_1[mname];
                                var keep = keepModules_1[mname];
                                return !module.baseModule && (keep != null ? keep : module.keepDefault);
                            }).join(',');
                        }
                    }
                    else {
                        modules = Object.keys(modulesConfig_1).filter(function (mname) { return !modulesConfig_1[mname].baseModule; }).join(',');
                    }
                    Editor.log(TAG + " \u6A21\u5757:" + modules);
                    debug = pkgOptions.confuse ? false : options.debug;
                    option_debug = debug ? '--debug' : '';
                    option_modules = modules ? "--modules \"" + modules + "\"" : '';
                    option_confuse = pkgOptions.confuse ? '--confuse' : '';
                    frameworkCacheConfigFile = Path.join(tempPath, 'framework-cache-config.json');
                    frameworkCacheFile = Path.join(tempPath, 'framework-cache.js');
                    frameworkCacheConfig = { version: VERSION, options: {} };
                    _c.label = 1;
                case 1:
                    // 检查缓存
                    if (Fs.existsSync(frameworkCacheConfigFile) && Fs.existsSync(frameworkCacheFile)) {
                        frameworkCacheConfig = JSON.parse(Fs.readFileSync(frameworkCacheConfigFile, { encoding: 'utf-8' }));
                        if (frameworkCacheConfig.version == VERSION &&
                            frameworkCacheConfig.options['debug'] == option_debug &&
                            frameworkCacheConfig.options['confuse'] == option_confuse &&
                            frameworkCacheConfig.options['modules'] == option_modules) {
                            Editor.log(TAG + " \u4F7F\u7528\u6846\u67B6\u7F13\u5B58");
                            return [3 /*break*/, 4];
                        }
                    }
                    // 重新编译框架
                    if (Fs.existsSync(frameworkCacheConfigFile)) {
                        Fs.unlinkSync(frameworkCacheConfigFile);
                    }
                    if (Fs.existsSync(frameworkCacheFile)) {
                        Fs.unlinkSync(frameworkCacheFile);
                    }
                    command = "gulp buildPublishFramework --outDir \"" + tempPath + "\" --outFile framework-cache.js " + option_debug + " " + option_confuse + " " + option_modules;
                    return [4 /*yield*/, utils_1.exeCommand(command, utils_1.EXTENSION_PATH)];
                case 2:
                    result = _c.sent();
                    if (result.error) {
                        Editor.error('框架编译失败: ' + result.error);
                        return [3 /*break*/, 4];
                    }
                    else {
                        // 写入缓存
                        frameworkCacheConfig.version = VERSION;
                        frameworkCacheConfig.options['debug'] = option_debug;
                        frameworkCacheConfig.options['confuse'] = option_confuse;
                        frameworkCacheConfig.options['modules'] = option_modules;
                        Fs.writeFileSync(frameworkCacheConfigFile, JSON.stringify(frameworkCacheConfig));
                    }
                    _c.label = 3;
                case 3:
                    if (false) return [3 /*break*/, 1];
                    _c.label = 4;
                case 4:
                    if (Fs.existsSync(frameworkCacheFile)) {
                        utils_1.copyFile(frameworkCacheFile, destJs);
                        Editor.log(TAG + " lcc-framework.js \u66FF\u6362\u6210\u529F");
                    }
                    _c.label = 5;
                case 5:
                    callback();
                    return [2 /*return*/];
            }
        });
    });
}
exports.onBuildFinished = onBuildFinished;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QkFBa0IsQ0FBQyxDQUFDO3FCQUNsQztvQkFDWSxPQUFPLEdBQUcsMkNBQXdDLFFBQVEsd0NBQWtDLFlBQVksU0FBSSxjQUFjLFNBQUksY0FBZ0IsQ0FBQztvQkFFL0kscUJBQU0sa0JBQVUsQ0FBQyxPQUFPLEVBQUUsc0JBQWMsQ0FBQyxFQUFBOztvQkFBbEQsTUFBTSxHQUFHLFNBQXlDO29CQUM3QyxJQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUM7d0JBQ1osTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUN4Qyx3QkFBTTtxQkFDVDt5QkFBSTt3QkFDRCxPQUFPO3dCQUNQLG9CQUFvQixDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7d0JBQ3ZDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxZQUFZLENBQUM7d0JBQ3JELG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxjQUFjLENBQUM7d0JBQ3pELG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxjQUFjLENBQUM7d0JBQ3pELEVBQUUsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7cUJBQ3BGOzs7d0JBQ0UsS0FBSzs7O29CQUVaLElBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFDO3dCQUNqQyxnQkFBUSxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxDQUFDO3dCQUM5QyxNQUFNLENBQUMsR0FBRyxDQUFJLEdBQUcsK0NBQXdCLENBQUMsQ0FBQztxQkFDckM7OztvQkFFUixRQUFRLEVBQUUsQ0FBQzs7Ozs7Q0FDWDtBQTlJRCwwQ0E4SUMiLCJmaWxlIjoiYnVpbGRlci9ob29rcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVYVEVOU0lPTl9QQVRILCBleGVDb21tYW5kLCBmaW5kRmlsZSwgRmluZEZpbGVUeXBlLCBnZXRFeHRlbnNpb25Db25maWcsZ2V0RnJhbWV3b3JrTW9kdWxlcyxtYXBEaXJlY3RvcnksY29weUZpbGUgfSBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IGxvYWRDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgeyBNb2R1bGVzQ29uZmlnLE1vZHVsZXNUcmVlIH0gZnJvbSAnLi9tb2R1bGVzJztcclxuXHJcbmNvbnN0IEZzID0gcmVxdWlyZSgnZnMnKTtcclxuY29uc3QgUGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuXHJcbmNvbnN0IFRBRyA9ICdsY2MtZnJhbWV3b3JrJztcclxuXHJcbi8qKlxyXG4gKiDmnoTlu7rlvIDlp4tcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBvbkJ1aWxkU3RhcnQob3B0aW9uczpCdWlsZE9wdGlvbnMsIGNhbGxiYWNrOkZ1bmN0aW9uKXtcclxuXHRjYWxsYmFjaygpO1xyXG59XHJcblxyXG4vKipcclxuICog5p6E5bu65a6M5oiQXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gb25CdWlsZEZpbmlzaGVkKG9wdGlvbnM6QnVpbGRPcHRpb25zLCBjYWxsYmFjazpGdW5jdGlvbil7XHJcblx0Ly9FZGl0b3IubG9nKGAke1RBR30gb25CdWlsZEZpbmlzaGVkICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucyl9YCk7XHJcblx0bGV0IHBrZ09wdGlvbnMgPSBsb2FkQ29uZmlnKCkucHVibGlzaDtcclxuXHRsZXQgZGVzdEpzID0gZmluZEZpbGUob3B0aW9ucy5kZXN0LCAnbGNjLWZyYW1ld29yay5qcycsIEZpbmRGaWxlVHlwZS5GSUxFKTtcclxuXHRpZihkZXN0SnMpe1xyXG4gICAgICAgIGNvbnN0IFZFUlNJT04gPSBnZXRFeHRlbnNpb25Db25maWcoKS52ZXJzaW9uO1xyXG4gICAgICAgIGNvbnN0IHRlbXBQYXRoID0gUGF0aC5qb2luKEVkaXRvci5Qcm9qZWN0LnBhdGgsICd0ZW1wJywgJ2xjYy1mcmFtZXdvcmsnKTtcclxuICAgICAgICBpZighRnMuZXhpc3RzU3luYyh0ZW1wUGF0aCkpe1xyXG4gICAgICAgICAgICBGcy5ta2RpclN5bmModGVtcFBhdGgsIHsgcmVjdXJzaXZlIDogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcblx0XHRsZXQgbW9kdWxlcyA9ICcnO1xyXG5cdFx0bGV0IG1vZHVsZXNDb25maWc6TW9kdWxlc0NvbmZpZyA9IGdldEZyYW1ld29ya01vZHVsZXMoKTtcclxuXHRcdGlmKHBrZ09wdGlvbnMuY2xpcCl7XHJcblx0XHRcdGlmKHBrZ09wdGlvbnMuY2xpcE1ldGhvZCA9PSAnYXV0bycpe1xyXG5cdFx0XHRcdGxldCBwYXRoTGlzdDpzdHJpbmdbXSA9IFtdO1xyXG5cdFx0XHRcdG1hcERpcmVjdG9yeShQYXRoLmpvaW4oRWRpdG9yLlByb2plY3QucGF0aCwgJ2Fzc2V0cycpLCAocGF0aCwgZmlsZSwgaXNkaXIpPT57XHJcblx0XHRcdFx0XHRpZighaXNkaXIgJiYgZmlsZSAhPSAnbGNjLWZyYW1ld29yay5qcycgJiYgZmlsZSAhPSAnbGNjLWZyYW1ld29yay5kLnRzJyAmJlxyXG5cdFx0XHRcdFx0XHQocGF0aC5lbmRzV2l0aCgnLnRzJykgfHwgXHJcblx0XHRcdFx0XHRcdHBhdGguZW5kc1dpdGgoJy5qcycpIHx8IFxyXG5cdFx0XHRcdFx0XHRwYXRoLmVuZHNXaXRoKCcuc2NlbmUnKSB8fCBcclxuXHRcdFx0XHRcdFx0cGF0aC5lbmRzV2l0aCgnLnByZWZhYicpKSl7XHJcblx0XHRcdFx0XHRcdHBhdGhMaXN0LnB1c2gocGF0aCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Y29uc3QgYXV0b2NsaXBDYWNoZUNvbmZpZ0ZpbGUgPSBQYXRoLmpvaW4odGVtcFBhdGgsICdhdXRvY2xpcC1jYWNoZS1jb25maWcuanNvbicpO1xyXG5cdFx0XHRcdGxldCBhdXRvY2xpcENhY2hlQ29uZmlnOnsgdmVyc2lvbjpudW1iZXIgLCBmaWxldGltZXM6UmVjb3JkPHN0cmluZyxudW1iZXI+LCBtb2R1bGVzOnN0cmluZyB9ID0geyB2ZXJzaW9uOlZFUlNJT04sIGZpbGV0aW1lczp7fSwgbW9kdWxlczpcIlwiIH07XHJcblx0XHRcdFx0ZG8ge1xyXG5cdFx0XHRcdFx0Ly8g5qOA5p+l57yT5a2YXHJcblx0XHRcdFx0XHRpZihGcy5leGlzdHNTeW5jKGF1dG9jbGlwQ2FjaGVDb25maWdGaWxlKSl7XHJcblx0XHRcdFx0XHRcdGF1dG9jbGlwQ2FjaGVDb25maWcgPSBKU09OLnBhcnNlKEZzLnJlYWRGaWxlU3luYyhhdXRvY2xpcENhY2hlQ29uZmlnRmlsZSwgeyBlbmNvZGluZyA6ICd1dGYtOCcgfSkpO1xyXG5cdFx0XHRcdFx0XHRpZihPYmplY3Qua2V5cyhhdXRvY2xpcENhY2hlQ29uZmlnLmZpbGV0aW1lcykubGVuZ3RoID09IHBhdGhMaXN0Lmxlbmd0aCAmJiBhdXRvY2xpcENhY2hlQ29uZmlnLnZlcnNpb24gPT0gVkVSU0lPTil7XHJcblx0XHRcdFx0XHRcdFx0aWYoKCgpPT57XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IobGV0IF9wYXRoIG9mIHBhdGhMaXN0KXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IHBpbmZvID0gRnMuc3RhdFN5bmMoX3BhdGgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZihNYXRoLmZsb29yKHBpbmZvLm10aW1lTXMpICE9IGF1dG9jbGlwQ2FjaGVDb25maWcuZmlsZXRpbWVzW19wYXRoXSl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHR9KSgpKXtcclxuXHRcdFx0XHRcdFx0XHRcdEVkaXRvci5sb2coYCR7VEFHfSDkvb/nlKjoh6rliqjoo4HliarnvJPlrZhgKTtcclxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZXMgPSBhdXRvY2xpcENhY2hlQ29uZmlnLm1vZHVsZXM7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyDph43mlrDmnoTlu7rnvJPlrZhcclxuXHRcdFx0XHRcdGlmKEZzLmV4aXN0c1N5bmMoYXV0b2NsaXBDYWNoZUNvbmZpZ0ZpbGUpKXtcclxuXHRcdFx0XHRcdFx0RnMudW5saW5rU3luYyhhdXRvY2xpcENhY2hlQ29uZmlnRmlsZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRhdXRvY2xpcENhY2hlQ29uZmlnLnZlcnNpb24gPSBWRVJTSU9OO1xyXG5cdFx0XHRcdFx0YXV0b2NsaXBDYWNoZUNvbmZpZy5maWxldGltZXMgPSB7fTtcclxuXHRcdFx0XHRcdGxldCBhdXRvY2xpcENhY2hlID0gJyc7XHJcblx0XHRcdFx0XHRmb3IobGV0IF9wYXRoIG9mIHBhdGhMaXN0KXtcclxuXHRcdFx0XHRcdFx0bGV0IHBpbmZvID0gRnMuc3RhdFN5bmMoX3BhdGgpO1xyXG5cdFx0XHRcdFx0XHRhdXRvY2xpcENhY2hlQ29uZmlnLmZpbGV0aW1lc1tfcGF0aF0gPSBNYXRoLmZsb29yKHBpbmZvLm10aW1lTXMpO1xyXG5cdFx0XHRcdFx0XHRhdXRvY2xpcENhY2hlICs9IEZzLnJlYWRGaWxlU3luYyhfcGF0aCwgeyBlbmNvZGluZyA6ICd1dGYtOCcgfSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRsZXQgbW9kdWxlc1RyZWUgPSBuZXcgTW9kdWxlc1RyZWUobW9kdWxlc0NvbmZpZyk7XHJcblx0XHRcdFx0XHRmb3IobGV0IG1uYW1lIGluIG1vZHVsZXNDb25maWcpe1xyXG5cdFx0XHRcdFx0XHRsZXQgY29uZmlnID0gbW9kdWxlc0NvbmZpZ1ttbmFtZV07XHJcblx0XHRcdFx0XHRcdGlmKGNvbmZpZy5rZXl3b3Jkcyl7XHJcblx0XHRcdFx0XHRcdFx0Zm9yKGxldCBrZXl3b3JkIG9mIGNvbmZpZy5rZXl3b3Jkcyl7XHJcblx0XHRcdFx0XHRcdFx0XHRsZXQgcmVnID0gbmV3IFJlZ0V4cChgW15hLXpBLVpfJF0ke2tleXdvcmR9W15hLXpBLVpfJF1gKTtcclxuXHRcdFx0XHRcdFx0XHRcdGlmKHJlZy50ZXN0KGF1dG9jbGlwQ2FjaGUpKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0RWRpdG9yLmxvZyhgJHtUQUd9IEtFWVdPUkQgJyR7a2V5d29yZH0nIE1PRFVMRSAnJHttbmFtZX0nYCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZXNUcmVlLmtlZXBNb2R1bGUobW5hbWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGF1dG9jbGlwQ2FjaGVDb25maWcubW9kdWxlcyA9IG1vZHVsZXNUcmVlLmNvbGxlY3RNb2R1bGVzKCkuZmlsdGVyKChtbmFtZTpzdHJpbmcpPT57IHJldHVybiAhbW9kdWxlc0NvbmZpZ1ttbmFtZV0uYmFzZU1vZHVsZTsgfSkuam9pbignLCcpO1xyXG5cdFx0XHRcdFx0bW9kdWxlcyA9IGF1dG9jbGlwQ2FjaGVDb25maWcubW9kdWxlcztcclxuXHRcdFx0XHRcdEZzLndyaXRlRmlsZVN5bmMoYXV0b2NsaXBDYWNoZUNvbmZpZ0ZpbGUsIEpTT04uc3RyaW5naWZ5KGF1dG9jbGlwQ2FjaGVDb25maWcpKTtcclxuXHRcdFx0XHR9d2hpbGUoZmFsc2UpO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRsZXQga2VlcE1vZHVsZXMgPSBwa2dPcHRpb25zLmtlZXBNb2R1bGVzO1xyXG5cdFx0XHRcdG1vZHVsZXMgPSBPYmplY3Qua2V5cyhtb2R1bGVzQ29uZmlnKS5maWx0ZXIoKG1uYW1lOnN0cmluZyk9PnsgXHJcblx0XHRcdFx0XHRsZXQgbW9kdWxlID0gbW9kdWxlc0NvbmZpZ1ttbmFtZV07XHJcblx0XHRcdFx0XHRsZXQga2VlcCA9IGtlZXBNb2R1bGVzW21uYW1lXTtcclxuXHRcdFx0XHRcdHJldHVybiAhbW9kdWxlLmJhc2VNb2R1bGUgJiYgKGtlZXAgIT0gbnVsbCA/IGtlZXAgOiBtb2R1bGUua2VlcERlZmF1bHQpO1xyXG5cdFx0XHRcdH0pLmpvaW4oJywnKTtcclxuXHRcdFx0fVxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdG1vZHVsZXMgPSBPYmplY3Qua2V5cyhtb2R1bGVzQ29uZmlnKS5maWx0ZXIoKG1uYW1lOnN0cmluZyk9PnsgcmV0dXJuICFtb2R1bGVzQ29uZmlnW21uYW1lXS5iYXNlTW9kdWxlOyB9KS5qb2luKCcsJyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdEVkaXRvci5sb2coYCR7VEFHfSDmqKHlnZc6JHttb2R1bGVzfWApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBkZWJ1ZyA9IHBrZ09wdGlvbnMuY29uZnVzZSA/IGZhbHNlIDogb3B0aW9ucy5kZWJ1ZztcclxuICAgICAgICBjb25zdCBvcHRpb25fZGVidWcgPSBkZWJ1Zz8nLS1kZWJ1Zyc6Jyc7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uX21vZHVsZXMgPSBtb2R1bGVzP2AtLW1vZHVsZXMgXCIke21vZHVsZXN9XCJgOicnO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbl9jb25mdXNlID0gcGtnT3B0aW9ucy5jb25mdXNlPyctLWNvbmZ1c2UnOicnO1xyXG5cclxuICAgICAgICBjb25zdCBmcmFtZXdvcmtDYWNoZUNvbmZpZ0ZpbGUgPSBQYXRoLmpvaW4odGVtcFBhdGgsICdmcmFtZXdvcmstY2FjaGUtY29uZmlnLmpzb24nKTtcclxuICAgICAgICBjb25zdCBmcmFtZXdvcmtDYWNoZUZpbGUgPSBQYXRoLmpvaW4odGVtcFBhdGgsICdmcmFtZXdvcmstY2FjaGUuanMnKTtcclxuICAgICAgICBsZXQgZnJhbWV3b3JrQ2FjaGVDb25maWc6eyB2ZXJzaW9uOm51bWJlciAsb3B0aW9uczpSZWNvcmQ8c3RyaW5nLHN0cmluZz4gfSA9IHsgdmVyc2lvbjpWRVJTSU9OLCBvcHRpb25zOnt9IH07XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAvLyDmo4Dmn6XnvJPlrZhcclxuICAgICAgICAgICAgaWYoRnMuZXhpc3RzU3luYyhmcmFtZXdvcmtDYWNoZUNvbmZpZ0ZpbGUpICYmIEZzLmV4aXN0c1N5bmMoZnJhbWV3b3JrQ2FjaGVGaWxlKSl7XHJcbiAgICAgICAgICAgICAgICBmcmFtZXdvcmtDYWNoZUNvbmZpZyA9IEpTT04ucGFyc2UoRnMucmVhZEZpbGVTeW5jKGZyYW1ld29ya0NhY2hlQ29uZmlnRmlsZSwgeyBlbmNvZGluZyA6ICd1dGYtOCcgfSkpO1xyXG4gICAgICAgICAgICAgICAgaWYoZnJhbWV3b3JrQ2FjaGVDb25maWcudmVyc2lvbiA9PSBWRVJTSU9OICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1ld29ya0NhY2hlQ29uZmlnLm9wdGlvbnNbJ2RlYnVnJ10gPT0gb3B0aW9uX2RlYnVnICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1ld29ya0NhY2hlQ29uZmlnLm9wdGlvbnNbJ2NvbmZ1c2UnXSA9PSBvcHRpb25fY29uZnVzZSAmJiBcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZXdvcmtDYWNoZUNvbmZpZy5vcHRpb25zWydtb2R1bGVzJ10gPT0gb3B0aW9uX21vZHVsZXMpe1xyXG5cdFx0XHRcdFx0XHRFZGl0b3IubG9nKGAke1RBR30g5L2/55So5qGG5p6257yT5a2YYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblx0XHRcdC8vIOmHjeaWsOe8luivkeahhuaetlxyXG5cdFx0XHRpZihGcy5leGlzdHNTeW5jKGZyYW1ld29ya0NhY2hlQ29uZmlnRmlsZSkpe1xyXG5cdFx0XHRcdEZzLnVubGlua1N5bmMoZnJhbWV3b3JrQ2FjaGVDb25maWdGaWxlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZihGcy5leGlzdHNTeW5jKGZyYW1ld29ya0NhY2hlRmlsZSkpe1xyXG5cdFx0XHRcdEZzLnVubGlua1N5bmMoZnJhbWV3b3JrQ2FjaGVGaWxlKTtcclxuXHRcdFx0fVxyXG4gICAgICAgICAgICBsZXQgY29tbWFuZCA9IGBndWxwIGJ1aWxkUHVibGlzaEZyYW1ld29yayAtLW91dERpciBcIiR7dGVtcFBhdGh9XCIgLS1vdXRGaWxlIGZyYW1ld29yay1jYWNoZS5qcyAke29wdGlvbl9kZWJ1Z30gJHtvcHRpb25fY29uZnVzZX0gJHtvcHRpb25fbW9kdWxlc31gO1xyXG4gICAgICAgICAgICAvL0VkaXRvci5sb2coYCR7VEFHfSBvbkJ1aWxkRmluaXNoZWQgJHtjb21tYW5kfWApO1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYXdhaXQgZXhlQ29tbWFuZChjb21tYW5kLCBFWFRFTlNJT05fUEFUSCk7XHJcbiAgICAgICAgICAgIGlmKHJlc3VsdC5lcnJvcil7XHJcbiAgICAgICAgICAgICAgICBFZGl0b3IuZXJyb3IoJ+ahhuaetue8luivkeWksei0pTogJyArIHJlc3VsdC5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvLyDlhpnlhaXnvJPlrZhcclxuICAgICAgICAgICAgICAgIGZyYW1ld29ya0NhY2hlQ29uZmlnLnZlcnNpb24gPSBWRVJTSU9OO1xyXG4gICAgICAgICAgICAgICAgZnJhbWV3b3JrQ2FjaGVDb25maWcub3B0aW9uc1snZGVidWcnXSA9IG9wdGlvbl9kZWJ1ZztcclxuICAgICAgICAgICAgICAgIGZyYW1ld29ya0NhY2hlQ29uZmlnLm9wdGlvbnNbJ2NvbmZ1c2UnXSA9IG9wdGlvbl9jb25mdXNlO1xyXG4gICAgICAgICAgICAgICAgZnJhbWV3b3JrQ2FjaGVDb25maWcub3B0aW9uc1snbW9kdWxlcyddID0gb3B0aW9uX21vZHVsZXM7XHJcbiAgICAgICAgICAgICAgICBGcy53cml0ZUZpbGVTeW5jKGZyYW1ld29ya0NhY2hlQ29uZmlnRmlsZSwgSlNPTi5zdHJpbmdpZnkoZnJhbWV3b3JrQ2FjaGVDb25maWcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH13aGlsZShmYWxzZSk7XHJcblxyXG4gICAgICAgIGlmKEZzLmV4aXN0c1N5bmMoZnJhbWV3b3JrQ2FjaGVGaWxlKSl7XHJcbiAgICAgICAgICAgIGNvcHlGaWxlKGZyYW1ld29ya0NhY2hlRmlsZSwgZGVzdEpzKTtcclxuXHRcdFx0RWRpdG9yLmxvZyhgJHtUQUd9IGxjYy1mcmFtZXdvcmsuanMg5pu/5o2i5oiQ5YqfYCk7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHRjYWxsYmFjaygpO1xyXG59XHJcbiJdfQ==

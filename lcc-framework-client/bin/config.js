"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveConfig = exports.loadConfig = void 0;
var utils_1 = require("./utils");
var Fs = require('fs');
var Path = require('path');
/**
 * 配置文件
 */
var CONFIG_FILE = Path.join(Editor.Project.path, 'local', 'lcc-framework.json');
/**
 * 默认配置
 */
var DEFAULT_CONFIG = {
    publish: {
        confuse: false,
        clip: true,
        clipMethod: 'custom',
        keepModules: {},
    }
};
/**
 * 加载配置
 */
function loadConfig() {
    if (Fs.existsSync(CONFIG_FILE)) {
        return JSON.parse(Fs.readFileSync(CONFIG_FILE, 'utf8'));
    }
    else {
        return __assign({}, DEFAULT_CONFIG);
    }
}
exports.loadConfig = loadConfig;
/**
 * 保存配置
 */
function saveConfig(config) {
    var configDir = Path.dirname(CONFIG_FILE);
    if (!Fs.existsSync(configDir))
        Fs.mkdirSync(configDir, { recursive: true });
    var oldConfig;
    if (Fs.existsSync(CONFIG_FILE)) {
        oldConfig = JSON.parse(Fs.readFileSync(CONFIG_FILE, 'utf8'));
    }
    else {
        oldConfig = Object.create(null);
    }
    utils_1.updateMap(oldConfig, config);
    Fs.writeFileSync(CONFIG_FILE, JSON.stringify(oldConfig));
}
exports.saveConfig = saveConfig;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUFtQztBQUVuQyxJQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRTdCOztHQUVHO0FBQ0gsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztBQWtDbEY7O0dBRUc7QUFDSCxJQUFNLGNBQWMsR0FBbUI7SUFDbkMsT0FBTyxFQUFDO1FBQ0osT0FBTyxFQUFHLEtBQUs7UUFDZixJQUFJLEVBQUcsSUFBSTtRQUNYLFVBQVUsRUFBRyxRQUFRO1FBQ3JCLFdBQVcsRUFBRyxFQUFFO0tBQ25CO0NBQ0osQ0FBQztBQUVGOztHQUVHO0FBQ0gsU0FBZ0IsVUFBVTtJQUN0QixJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEVBQUU7UUFDNUIsT0FBd0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQzVFO1NBQU07UUFDSCxvQkFBWSxjQUFjLEVBQUc7S0FDaEM7QUFDTCxDQUFDO0FBTkQsZ0NBTUM7QUFFRDs7R0FFRztBQUNILFNBQWdCLFVBQVUsQ0FBQyxNQUFzQjtJQUM3QyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLEVBQUUsU0FBUyxFQUFHLElBQUksRUFBRSxDQUFDLENBQUM7SUFDN0UsSUFBSSxTQUF5QixDQUFDO0lBQzlCLElBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsRUFBQztRQUMxQixTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQ2hFO1NBQUk7UUFDRCxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNuQztJQUNELGlCQUFTLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLEVBQUUsQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUM3RCxDQUFDO0FBWEQsZ0NBV0MiLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXBkYXRlTWFwIH0gZnJvbSAnLi91dGlscydcclxuXHJcbmNvbnN0IEZzID0gcmVxdWlyZSgnZnMnKTtcclxuY29uc3QgUGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuXHJcbi8qKlxyXG4gKiDphY3nva7mlofku7ZcclxuICovXHJcbmNvbnN0IENPTkZJR19GSUxFID0gUGF0aC5qb2luKEVkaXRvci5Qcm9qZWN0LnBhdGgsICdsb2NhbCcsICdsY2MtZnJhbWV3b3JrLmpzb24nKTtcclxuXHJcbi8qKlxyXG4gKiDmianlsZXphY3nva5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXh0ZW5zaW9uQ29uZmlnIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWPkeW4g1xyXG4gICAgICovXHJcbiAgICBwdWJsaXNoOntcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5re35reG5qGG5p62XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uZnVzZTpib29sZWFuO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDoo4HliarmoYbmnrZcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGlwOmJvb2xlYW47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOijgeWJquaWueW8j1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsaXBNZXRob2Q6c3RyaW5nO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDkv53mjIHmqKHlnZdcclxuICAgICAgICAgKi9cclxuICAgICAgICBrZWVwTW9kdWxlczp7W2tleTpzdHJpbmddOmJvb2xlYW59O1xyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOm7mOiupOmFjee9rlxyXG4gKi9cclxuY29uc3QgREVGQVVMVF9DT05GSUc6RXh0ZW5zaW9uQ29uZmlnID0ge1xyXG4gICAgcHVibGlzaDp7XHJcbiAgICAgICAgY29uZnVzZSA6IGZhbHNlLFxyXG4gICAgICAgIGNsaXAgOiB0cnVlLFxyXG4gICAgICAgIGNsaXBNZXRob2QgOiAnY3VzdG9tJyxcclxuICAgICAgICBrZWVwTW9kdWxlcyA6IHt9LFxyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIOWKoOi9vemFjee9rlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb25maWcoKXtcclxuICAgIGlmIChGcy5leGlzdHNTeW5jKENPTkZJR19GSUxFKSkge1xyXG4gICAgICAgIHJldHVybiA8RXh0ZW5zaW9uQ29uZmlnPkpTT04ucGFyc2UoRnMucmVhZEZpbGVTeW5jKENPTkZJR19GSUxFLCAndXRmOCcpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uREVGQVVMVF9DT05GSUcgfTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOS/neWtmOmFjee9rlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVDb25maWcoY29uZmlnOkV4dGVuc2lvbkNvbmZpZyl7XHJcbiAgICBjb25zdCBjb25maWdEaXIgPSBQYXRoLmRpcm5hbWUoQ09ORklHX0ZJTEUpO1xyXG4gICAgaWYgKCFGcy5leGlzdHNTeW5jKGNvbmZpZ0RpcikpIEZzLm1rZGlyU3luYyhjb25maWdEaXIsIHsgcmVjdXJzaXZlIDogdHJ1ZSB9KTtcclxuICAgIGxldCBvbGRDb25maWc6RXh0ZW5zaW9uQ29uZmlnO1xyXG4gICAgaWYoRnMuZXhpc3RzU3luYyhDT05GSUdfRklMRSkpe1xyXG4gICAgICAgIG9sZENvbmZpZyA9IEpTT04ucGFyc2UoRnMucmVhZEZpbGVTeW5jKENPTkZJR19GSUxFLCAndXRmOCcpKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIG9sZENvbmZpZyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVNYXAob2xkQ29uZmlnLCBjb25maWcpO1xyXG4gICAgRnMud3JpdGVGaWxlU3luYyhDT05GSUdfRklMRSwgSlNPTi5zdHJpbmdpZnkob2xkQ29uZmlnKSk7XHJcbn1cclxuIl19

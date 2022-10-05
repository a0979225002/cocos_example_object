"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModulesTree = void 0;
var fs = require('fs');
/**
 * 模块树
 */
var ModulesTree = /** @class */ (function () {
    /**
     * 构建模块树
     * @param configFile 模块配置文件
     */
    function ModulesTree(config) {
        /**
         * 模块表
         */
        this._modules = {};
        if (typeof config == "string") {
            this._modules = JSON.parse(fs.readFileSync(config, { encoding: 'utf-8' }));
        }
        else {
            this._modules = config;
        }
    }
    /**
     * 保留模块数组
     * @param mnames
     */
    ModulesTree.prototype.keepModules = function (mnames) {
        if (mnames) {
            for (var _i = 0, mnames_1 = mnames; _i < mnames_1.length; _i++) {
                var mname = mnames_1[_i];
                this.keepModule(mname);
            }
        }
    };
    /**
     * 保留模块
     * @param mname
     */
    ModulesTree.prototype.keepModule = function (mname) {
        var module = this._modules[mname];
        if (module) {
            if (!module.keep) {
                module.keep = true;
                this.keepModules(module.dependences);
            }
        }
    };
    /**
     * 保留所有模块
     */
    ModulesTree.prototype.keepAllModules = function () {
        for (var mname in this._modules) {
            var module_1 = this._modules[mname];
            module_1.keep = true;
        }
    };
    /**
     * 收集模块
     */
    ModulesTree.prototype.collectModules = function () {
        var modules = [];
        for (var mname in this._modules) {
            var module_2 = this._modules[mname];
            if (module_2.keep) {
                modules.push(mname);
            }
        }
        return modules;
    };
    /**
     * 收集源文件
     */
    ModulesTree.prototype.collectSources = function () {
        var sources = [];
        for (var mname in this._modules) {
            var module_3 = this._modules[mname];
            if (module_3.keep && module_3.sources) {
                sources.push.apply(sources, module_3.sources);
            }
        }
        return sources;
    };
    /**
     * 收集LIB库文件
     */
    ModulesTree.prototype.collectLibs = function () {
        var libs = [];
        for (var mname in this._modules) {
            var module_4 = this._modules[mname];
            if (module_4.keep && module_4.libs) {
                libs.push.apply(libs, module_4.libs);
            }
        }
        return libs;
    };
    return ModulesTree;
}());
exports.ModulesTree = ModulesTree;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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WUFDbEMsSUFBRyxRQUFNLENBQUMsSUFBSSxJQUFJLFFBQU0sQ0FBQyxJQUFJLEVBQUM7Z0JBQzFCLElBQUksQ0FBQyxJQUFJLE9BQVQsSUFBSSxFQUFTLFFBQU0sQ0FBQyxJQUFJLEVBQUU7YUFDN0I7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCxrQkFBQztBQUFELENBaEdBLEFBZ0dDLElBQUE7QUFoR1ksa0NBQVciLCJmaWxlIjoiYnVpbGRlci9tb2R1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5cbi8qKlxuICog5qih5Z2X6YWN572uXG4gKi9cbiBleHBvcnQgaW50ZXJmYWNlIE1vZHVsZXNDb25maWcge1xuICAgIFtrZXk6c3RyaW5nXTp7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDkv53nlZnmraTmqKHlnZdcbiAgICAgICAgICovXG5cdFx0a2VlcD86Ym9vbGVhbjtcblx0XHRcblx0XHQvKipcblx0XHQgKiDmmK/lkKbkuLrln7rnoYDmqKHlnZdcblx0XHQgKi9cbiAgICAgICAgYmFzZU1vZHVsZT86Ym9vbGVhbjtcblxuXHRcdC8qKlxuXHRcdCAqIOm7mOiupOaYr+WQpuS/neeVmeatpOaooeWdl1xuXHRcdCAqL1xuXHRcdGtlZXBEZWZhdWx0Pzpib29sZWFuO1xuXG5cdFx0LyoqXG5cdFx0ICog5qih5Z2X5o+P6L+wXG5cdFx0ICovXG5cdFx0ZGVzY3JpcHRpb24/OnN0cmluZztcblxuICAgICAgICAvKipcbiAgICAgICAgICog5bqT5paH5Lu2XG4gICAgICAgICAqL1xuICAgICAgICBsaWJzPzpzdHJpbmdbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICog5qih5Z2X5L6d6LWWXG4gICAgICAgICAqL1xuICAgICAgICBkZXBlbmRlbmNlcz86c3RyaW5nW107XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaooeWdl+a6kOaWh+S7tlxuICAgICAgICAgKi9cbiAgICAgICAgc291cmNlcz86c3RyaW5nW107XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaooeWdl+WFs+mUruWtl1xuICAgICAgICAgKi9cbiAgICAgICAga2V5d29yZHM/OnN0cmluZ1tdO1xuICAgIH1cbn1cblxuLyoqXG4gKiDmqKHlnZfmoJFcbiAqL1xuZXhwb3J0IGNsYXNzIE1vZHVsZXNUcmVlIHtcblxuICAgIC8qKlxuICAgICAqIOaooeWdl+ihqFxuICAgICAqL1xuICAgIHByaXZhdGUgX21vZHVsZXM6TW9kdWxlc0NvbmZpZyA9IHt9O1xuXG4gICAgLyoqXG4gICAgICog5p6E5bu65qih5Z2X5qCRXG4gICAgICogQHBhcmFtIGNvbmZpZ0ZpbGUg5qih5Z2X6YWN572u5paH5Lu2XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnOnN0cmluZ3xNb2R1bGVzQ29uZmlnKXtcblx0XHRpZih0eXBlb2YgY29uZmlnID09IFwic3RyaW5nXCIpe1xuXHRcdFx0dGhpcy5fbW9kdWxlcyA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGNvbmZpZywgeyBlbmNvZGluZyA6ICd1dGYtOCcgfSkpO1xuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5fbW9kdWxlcyA9IGNvbmZpZztcblx0XHR9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5L+d55WZ5qih5Z2X5pWw57uEXG4gICAgICogQHBhcmFtIG1uYW1lcyBcbiAgICAgKi9cbiAgICBwdWJsaWMga2VlcE1vZHVsZXMobW5hbWVzOnN0cmluZ1tdKXtcbiAgICAgICAgaWYobW5hbWVzKXtcbiAgICAgICAgICAgIGZvcihsZXQgbW5hbWUgb2YgbW5hbWVzKXtcbiAgICAgICAgICAgICAgICB0aGlzLmtlZXBNb2R1bGUobW5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5L+d55WZ5qih5Z2XXG4gICAgICogQHBhcmFtIG1uYW1lIFxuICAgICAqL1xuICAgIHB1YmxpYyBrZWVwTW9kdWxlKG1uYW1lOnN0cmluZyl7XG4gICAgICAgIGxldCBtb2R1bGUgPSB0aGlzLl9tb2R1bGVzW21uYW1lXTtcbiAgICAgICAgaWYobW9kdWxlKXtcbiAgICAgICAgICAgIGlmKCFtb2R1bGUua2VlcCl7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmtlZXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMua2VlcE1vZHVsZXMobW9kdWxlLmRlcGVuZGVuY2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXHR9XG5cbiAgICAvKipcbiAgICAgKiDkv53nlZnmiYDmnInmqKHlnZdcbiAgICAgKi9cbiAgICBwdWJsaWMga2VlcEFsbE1vZHVsZXMoKXtcbiAgICAgICAgZm9yKGxldCBtbmFtZSBpbiB0aGlzLl9tb2R1bGVzKXtcbiAgICAgICAgICAgIGxldCBtb2R1bGUgPSB0aGlzLl9tb2R1bGVzW21uYW1lXTtcbiAgICAgICAgICAgIG1vZHVsZS5rZWVwID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblx0XG5cdC8qKlxuXHQgKiDmlLbpm4bmqKHlnZdcblx0ICovXG5cdHB1YmxpYyBjb2xsZWN0TW9kdWxlcygpe1xuXHRcdGxldCBtb2R1bGVzOnN0cmluZ1tdID0gW107XG4gICAgICAgIGZvcihsZXQgbW5hbWUgaW4gdGhpcy5fbW9kdWxlcyl7XG4gICAgICAgICAgICBsZXQgbW9kdWxlID0gdGhpcy5fbW9kdWxlc1ttbmFtZV07XG4gICAgICAgICAgICBpZihtb2R1bGUua2VlcCl7XG4gICAgICAgICAgICAgICAgbW9kdWxlcy5wdXNoKG1uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW9kdWxlcztcblx0fVxuXG4gICAgLyoqXG4gICAgICog5pS26ZuG5rqQ5paH5Lu2XG4gICAgICovXG4gICAgcHVibGljIGNvbGxlY3RTb3VyY2VzKCl7XG4gICAgICAgIGxldCBzb3VyY2VzOnN0cmluZ1tdID0gW107XG4gICAgICAgIGZvcihsZXQgbW5hbWUgaW4gdGhpcy5fbW9kdWxlcyl7XG4gICAgICAgICAgICBsZXQgbW9kdWxlID0gdGhpcy5fbW9kdWxlc1ttbmFtZV07XG4gICAgICAgICAgICBpZihtb2R1bGUua2VlcCAmJiBtb2R1bGUuc291cmNlcyl7XG4gICAgICAgICAgICAgICAgc291cmNlcy5wdXNoKC4uLm1vZHVsZS5zb3VyY2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc291cmNlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmlLbpm4ZMSULlupPmlofku7ZcbiAgICAgKi9cbiAgICBwdWJsaWMgY29sbGVjdExpYnMoKXtcbiAgICAgICAgbGV0IGxpYnM6c3RyaW5nW10gPSBbXTtcbiAgICAgICAgZm9yKGxldCBtbmFtZSBpbiB0aGlzLl9tb2R1bGVzKXtcbiAgICAgICAgICAgIGxldCBtb2R1bGUgPSB0aGlzLl9tb2R1bGVzW21uYW1lXTtcbiAgICAgICAgICAgIGlmKG1vZHVsZS5rZWVwICYmIG1vZHVsZS5saWJzKXtcbiAgICAgICAgICAgICAgICBsaWJzLnB1c2goLi4ubW9kdWxlLmxpYnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaWJzO1xuICAgIH1cbn1cbiJdfQ==

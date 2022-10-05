"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGamePacks = exports.getExtensionConfig = exports.getFrameworkModules = exports.copyDirectory = exports.copyFile = exports.mapDirectory = exports.findFile = exports.FindFileType = exports.updateMap = exports.exeCommand = exports.EXTENSION_PATH = void 0;
var Fs = require('fs');
var Path = require('path');
var exec = require('child_process').exec;
/**
 * 扩展路径
 */
exports.EXTENSION_PATH = Path.join(__dirname, '..');
/**
 * 执行命令
 * @param command
 * @param cwd
 */
function exeCommand(command, cwd) {
    return new Promise(function (resolve) {
        return exec(command, { cwd: cwd }, function (error, stdout, stderr) {
            resolve({
                error: error,
                stdout: stdout,
                stderr: stderr,
            });
        });
    });
}
exports.exeCommand = exeCommand;
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
exports.updateMap = updateMap;
/**
 * 查找文件类型
 */
var FindFileType;
(function (FindFileType) {
    FindFileType[FindFileType["FILE"] = 1] = "FILE";
    FindFileType[FindFileType["DIRECTORY"] = 2] = "DIRECTORY";
})(FindFileType = exports.FindFileType || (exports.FindFileType = {}));
/**
 * 在指定目录中查找文件
 * @param dir
 * @param filename
 */
function findFile(dir, filename, types) {
    if (types === void 0) { types = FindFileType.FILE | FindFileType.DIRECTORY; }
    for (var _i = 0, _a = Fs.readdirSync(dir); _i < _a.length; _i++) {
        var file = _a[_i];
        var npath = Path.join(dir, file);
        var info = Fs.statSync(npath);
        if ((file == filename) && (info.isDirectory() ? types & FindFileType.DIRECTORY : types & FindFileType.FILE)) {
            return npath;
        }
        else if (info.isDirectory()) {
            var result = findFile(npath, filename, types);
            if (result) {
                return result;
            }
        }
    }
}
exports.findFile = findFile;
/**
 * 遍历目录路径
 */
function mapDirectory(path_, callback) {
    for (var _i = 0, _a = Fs.readdirSync(path_); _i < _a.length; _i++) {
        var file = _a[_i];
        var npath = Path.join(path_, file);
        var info = Fs.statSync(npath);
        if (callback(npath, file, info.isDirectory())) {
            return true;
        }
        else if (info.isDirectory()) {
            if (mapDirectory(npath, callback)) {
                return true;
            }
        }
    }
}
exports.mapDirectory = mapDirectory;
/**
 * 复制文件
 * @param srcPath
 * @param destPath
 */
function copyFile(srcPath, destPath) {
    Fs.writeFileSync(destPath, Fs.readFileSync(srcPath));
}
exports.copyFile = copyFile;
/**
 * 复制目录
 * @param src
 * @param dest
 */
function copyDirectory(srcPath, destPath) {
    if (Fs.existsSync(srcPath)) {
        if (!Fs.existsSync(destPath)) {
            Fs.mkdirSync(destPath, { recursive: true });
        }
        for (var _i = 0, _a = Fs.readdirSync(srcPath); _i < _a.length; _i++) {
            var file = _a[_i];
            var spath = Path.join(srcPath, file);
            var dpath = Path.join(destPath, file);
            var info = Fs.statSync(spath);
            if (info.isDirectory()) {
                copyDirectory(spath, dpath);
            }
            else {
                copyFile(spath, dpath);
            }
        }
    }
}
exports.copyDirectory = copyDirectory;
/**
 * 获得框架模块表
 */
var modulesFile = Path.join(exports.EXTENSION_PATH, 'framework', 'modules.json');
var modulesConfig = null;
function getFrameworkModules() {
    if (!modulesConfig) {
        if (Fs.existsSync(modulesFile)) {
            modulesConfig = JSON.parse(Fs.readFileSync(modulesFile, { encoding: 'utf-8' }));
        }
    }
    return modulesConfig;
}
exports.getFrameworkModules = getFrameworkModules;
/**
 * 获得扩展配置
 */
var packageFile = Path.join(exports.EXTENSION_PATH, 'package.json');
var packageConfig = null;
function getExtensionConfig() {
    if (!packageConfig) {
        if (Fs.existsSync(packageFile)) {
            packageConfig = JSON.parse(Fs.readFileSync(packageFile, { encoding: 'utf-8' }));
        }
    }
    return packageConfig;
}
exports.getExtensionConfig = getExtensionConfig;
/**
 * 获得游戏包
 */
function getGamePacks() {
    var packs = {};
    var _collectGamePacks;
    _collectGamePacks = function (path) {
        for (var _i = 0, _a = Fs.readdirSync(path); _i < _a.length; _i++) {
            var f = _a[_i];
            var fpath = Path.join(path, f);
            var fstate = Fs.statSync(fpath);
            if (fstate.isDirectory()) {
                var metafile = fpath + ".meta";
                if (Fs.existsSync(metafile)) {
                    var meta = JSON.parse(Fs.readFileSync(metafile, { encoding: 'utf-8' }));
                    if (meta && meta.isBundle) {
                        packs[meta.bundleName || f] = Path.normalize(fpath);
                        continue;
                    }
                }
                _collectGamePacks(fpath);
            }
        }
    };
    packs['main'] = Path.normalize(Path.join(Editor.Project.path, 'assets'));
    _collectGamePacks(Path.join(Editor.Project.path, 'assets'));
    return packs;
}
exports.getGamePacks = getGamePacks;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLElBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDckIsSUFBQSxJQUFJLEdBQUssT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUE3QixDQUE4QjtBQUUxQzs7R0FFRztBQUNVLFFBQUEsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRXpEOzs7O0dBSUc7QUFDSCxTQUFnQixVQUFVLENBQUMsT0FBYyxFQUFFLEdBQVU7SUFDcEQsT0FBTyxJQUFJLE9BQU8sQ0FBb0QsVUFBQyxPQUFPO1FBQzdFLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsRUFBRyxHQUFHLEVBQUUsRUFBRSxVQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTTtZQUN6RCxPQUFPLENBQUM7Z0JBQ1AsS0FBSyxFQUFHLEtBQUs7Z0JBQ2IsTUFBTSxFQUFHLE1BQU07Z0JBQ2YsTUFBTSxFQUFHLE1BQU07YUFDZixDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQVZELGdDQVVDO0FBRUQ7Ozs7Ozs7Ozs7O0dBV0c7QUFDRixTQUFnQixTQUFTLENBQUMsSUFBVyxFQUFFLElBQVc7SUFDL0MsS0FBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUM7UUFDaEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFHLE1BQU0sSUFBSSxJQUFJLEVBQUM7WUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBQ3RCO2FBQUk7WUFDRCxJQUFJLEtBQUssR0FBRyxPQUFPLE1BQU0sQ0FBQztZQUMxQixJQUFJLEtBQUssR0FBRyxPQUFPLE1BQU0sQ0FBQztZQUMxQixJQUFHLEtBQUssSUFBSSxRQUFRLElBQUksS0FBSyxJQUFJLEtBQUssRUFBQztnQkFDbkMsSUFBSSxNQUFNLEdBQUcsTUFBTSxZQUFZLEtBQUssQ0FBQztnQkFDckMsSUFBSSxNQUFNLEdBQUcsTUFBTSxZQUFZLEtBQUssQ0FBQztnQkFDckMsSUFBRyxNQUFNLElBQUksTUFBTSxFQUFDO29CQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDO2lCQUN0QjtxQkFBSTtvQkFDRCxJQUFHLE1BQU0sRUFBQzt3QkFDTixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDO3FCQUN0Qjt5QkFBSzt3QkFDRixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztxQkFDbEM7aUJBQ0o7YUFDSjtpQkFBSTtnQkFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDO2FBQ3RCO1NBQ0o7S0FDSjtBQUNMLENBQUM7QUExQkEsOEJBMEJBO0FBRUQ7O0dBRUc7QUFDSCxJQUFZLFlBR1g7QUFIRCxXQUFZLFlBQVk7SUFDdkIsK0NBQVEsQ0FBQTtJQUNSLHlEQUFhLENBQUE7QUFDZCxDQUFDLEVBSFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFHdkI7QUFFRDs7OztHQUlHO0FBQ0gsU0FBZ0IsUUFBUSxDQUFDLEdBQVUsRUFBRSxRQUFlLEVBQUUsS0FBeUQ7SUFBekQsc0JBQUEsRUFBQSxRQUFlLFlBQVksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLFNBQVM7SUFDOUcsS0FBZ0IsVUFBbUIsRUFBbkIsS0FBQSxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFuQixjQUFtQixFQUFuQixJQUFtQixFQUFDO1FBQWhDLElBQUksSUFBSSxTQUFBO1FBQ1gsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixJQUFHLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBQztZQUMxRyxPQUFPLEtBQUssQ0FBQztTQUNiO2FBQUssSUFBRyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUM7WUFDM0IsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDOUMsSUFBRyxNQUFNLEVBQUM7Z0JBQ1QsT0FBTyxNQUFNLENBQUM7YUFDZDtTQUNEO0tBQ0Q7QUFDRixDQUFDO0FBYkQsNEJBYUM7QUFFRDs7R0FFRztBQUNILFNBQWdCLFlBQVksQ0FBQyxLQUFZLEVBQUUsUUFBMkQ7SUFDckcsS0FBZ0IsVUFBcUIsRUFBckIsS0FBQSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQixjQUFxQixFQUFyQixJQUFxQixFQUFDO1FBQWxDLElBQUksSUFBSSxTQUFBO1FBQ1gsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixJQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFDO1lBQzVDLE9BQU8sSUFBSSxDQUFDO1NBQ1o7YUFBSyxJQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBQztZQUMzQixJQUFHLFlBQVksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUM7Z0JBQ2hDLE9BQU8sSUFBSSxDQUFDO2FBQ1o7U0FDRDtLQUNEO0FBQ0YsQ0FBQztBQVpELG9DQVlDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQWdCLFFBQVEsQ0FBQyxPQUFjLEVBQUUsUUFBZTtJQUN2RCxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDdEQsQ0FBQztBQUZELDRCQUVDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQWdCLGFBQWEsQ0FBQyxPQUFjLEVBQUUsUUFBZTtJQUN6RCxJQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUM7UUFDdEIsSUFBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUM7WUFDeEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxTQUFTLEVBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNoRDtRQUNELEtBQWdCLFVBQXVCLEVBQXZCLEtBQUEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBdkIsY0FBdUIsRUFBdkIsSUFBdUIsRUFBQztZQUFwQyxJQUFJLElBQUksU0FBQTtZQUNSLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3JDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3RDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUIsSUFBRyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUM7Z0JBQ2xCLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDL0I7aUJBQUk7Z0JBQ0QsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQzthQUMxQjtTQUNKO0tBQ0o7QUFDTCxDQUFDO0FBaEJELHNDQWdCQztBQUVEOztHQUVHO0FBQ0gsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBYyxFQUFFLFdBQVcsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUMzRSxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFDekIsU0FBZ0IsbUJBQW1CO0lBQy9CLElBQUcsQ0FBQyxhQUFhLEVBQUM7UUFDZCxJQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEVBQUM7WUFDMUIsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsRUFBRSxRQUFRLEVBQUcsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3BGO0tBQ0o7SUFDRCxPQUFPLGFBQWEsQ0FBQztBQUN6QixDQUFDO0FBUEQsa0RBT0M7QUFFRDs7R0FFRztBQUNILElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUM5RCxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFDekIsU0FBZ0Isa0JBQWtCO0lBQzlCLElBQUcsQ0FBQyxhQUFhLEVBQUM7UUFDZCxJQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEVBQUM7WUFDMUIsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsRUFBRSxRQUFRLEVBQUcsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3BGO0tBQ0o7SUFDRCxPQUFPLGFBQWEsQ0FBQztBQUN6QixDQUFDO0FBUEQsZ0RBT0M7QUFFRDs7R0FFRztBQUNILFNBQWdCLFlBQVk7SUFDeEIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2YsSUFBSSxpQkFBaUIsQ0FBQztJQUN0QixpQkFBaUIsR0FBRyxVQUFDLElBQVc7UUFDNUIsS0FBYSxVQUFvQixFQUFwQixLQUFBLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQXBCLGNBQW9CLEVBQXBCLElBQW9CLEVBQUM7WUFBOUIsSUFBSSxDQUFDLFNBQUE7WUFDTCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hDLElBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFDO2dCQUNwQixJQUFJLFFBQVEsR0FBRyxLQUFLLEdBQUcsT0FBTyxDQUFDO2dCQUMvQixJQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUM7b0JBQ3ZCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUcsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN6RSxJQUFHLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFDO3dCQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNwRCxTQUFTO3FCQUNaO2lCQUNKO2dCQUNELGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzVCO1NBQ0o7SUFDTCxDQUFDLENBQUM7SUFDTCxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDekUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3pELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUF2QkQsb0NBdUJDIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IEZzID0gcmVxdWlyZSgnZnMnKTtcclxuY29uc3QgUGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuY29uc3QgeyBleGVjIH0gPSByZXF1aXJlKCdjaGlsZF9wcm9jZXNzJyk7XHJcblxyXG4vKipcclxuICog5omp5bGV6Lev5b6EXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRVhURU5TSU9OX1BBVEggPSBQYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4nKTtcclxuXHJcbi8qKlxyXG4gKiDmiafooYzlkb3ku6RcclxuICogQHBhcmFtIGNvbW1hbmQgXHJcbiAqIEBwYXJhbSBjd2QgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZXhlQ29tbWFuZChjb21tYW5kOnN0cmluZywgY3dkOnN0cmluZyl7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlPHsgZXJyb3I/OnN0cmluZywgc3Rkb3V0PzpzdHJpbmcsIHN0ZGVycj86c3RyaW5nIH0+KChyZXNvbHZlKT0+e1xyXG5cdFx0cmV0dXJuIGV4ZWMoY29tbWFuZCwgeyBjd2QgOiBjd2QgfSwgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xyXG5cdFx0XHRyZXNvbHZlKHtcclxuXHRcdFx0XHRlcnJvciA6IGVycm9yLFxyXG5cdFx0XHRcdHN0ZG91dCA6IHN0ZG91dCxcclxuXHRcdFx0XHRzdGRlcnIgOiBzdGRlcnIsXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAemhcclxuICog5pu05pawTWFw6KGoPGJyLz5cclxuICogTWFw6KGo5pu05paw6KeE5YiZ77yaPGJyLz5cclxuICog6YGN5Y6G5rqQTWFw6KGo5a2X5q6177yM5a+55q+U55uu55qETWFw6KGo5a+55bqU5a2X5q6177yM5a2Y5Zyo5Yeg56eN5oOF5Ya177yaPGJyLz5cclxuICogMeOAgeebrueahE1hcOihqOS4reS4jeWtmOWcqOivpeWtl+aute+8jOebtOaOpeiuvue9ruS4uua6kE1hcOihqOWtl+autTxici8+XHJcbiAqIDLjgIHnm67nmoRNYXDooajlrZfmrrXlkozmupBNYXDooajlrZfmrrXlkIzkuLrmlbDnu4QoQXJyYXkp77yM55u05o6l6K6+572u5Li65rqQTWFw6KGo5a2X5q61PGJyLz5cclxuICogM+OAgeebrueahE1hcOihqOWtl+auteWSjOa6kE1hcOihqOWtl+auteWQjOS4uuWvueixoShPYmplY3Qp77yM5Lul5a2X5q6155qE55uu55qETWFw6KGo5ZKM5rqQTWFw6KGo5Li65Y+C5pWw5YaN5qyh6LCD55So5qyh5Ye95pWwPGJyLz5cclxuICogXHJcbiAqIEBwYXJhbSBkbWFwIC0g55uu55qETWFw6KGoXHJcbiAqIEBwYXJhbSBzbWFwIC0g5rqQTWFw6KGoXHJcbiAqL1xyXG4gZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU1hcChkbWFwOk9iamVjdCwgc21hcDpPYmplY3Qpe1xyXG4gICAgZm9yKGxldCBrZXkgaW4gc21hcCl7XHJcbiAgICAgICAgbGV0IHN2YWx1ZSA9IHNtYXBba2V5XTtcclxuICAgICAgICBsZXQgZHZhbHVlID0gZG1hcFtrZXldO1xyXG4gICAgICAgIGlmKGR2YWx1ZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgZG1hcFtrZXldID0gc3ZhbHVlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgc3R5cGUgPSB0eXBlb2Ygc3ZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgZHR5cGUgPSB0eXBlb2YgZHZhbHVlO1xyXG4gICAgICAgICAgICBpZihkdHlwZSA9PSAnb2JqZWN0JyAmJiBzdHlwZSA9PSBkdHlwZSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2FycmF5ID0gc3ZhbHVlIGluc3RhbmNlb2YgQXJyYXk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGFycmF5ID0gZHZhbHVlIGluc3RhbmNlb2YgQXJyYXk7XHJcbiAgICAgICAgICAgICAgICBpZihzYXJyYXkgIT0gZGFycmF5KXtcclxuICAgICAgICAgICAgICAgICAgICBkbWFwW2tleV0gPSBzdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpZihkYXJyYXkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkbWFwW2tleV0gPSBzdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1hcChkdmFsdWUsIHN2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGRtYXBba2V5XSA9IHN2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOafpeaJvuaWh+S7tuexu+Wei1xyXG4gKi9cclxuZXhwb3J0IGVudW0gRmluZEZpbGVUeXBlIHtcclxuXHRGSUxFID0gMSxcclxuXHRESVJFQ1RPUlkgPSAyLFxyXG59XHJcblxyXG4vKipcclxuICog5Zyo5oyH5a6a55uu5b2V5Lit5p+l5om+5paH5Lu2XHJcbiAqIEBwYXJhbSBkaXIgXHJcbiAqIEBwYXJhbSBmaWxlbmFtZSBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kRmlsZShkaXI6c3RyaW5nLCBmaWxlbmFtZTpzdHJpbmcsIHR5cGVzOm51bWJlciA9IEZpbmRGaWxlVHlwZS5GSUxFIHwgRmluZEZpbGVUeXBlLkRJUkVDVE9SWSl7XHJcblx0Zm9yKGxldCBmaWxlIG9mIEZzLnJlYWRkaXJTeW5jKGRpcikpe1xyXG5cdFx0bGV0IG5wYXRoID0gUGF0aC5qb2luKGRpciwgZmlsZSk7XHJcblx0XHR2YXIgaW5mbyA9IEZzLnN0YXRTeW5jKG5wYXRoKTtcclxuXHRcdGlmKChmaWxlID09IGZpbGVuYW1lKSAmJiAoaW5mby5pc0RpcmVjdG9yeSgpID8gdHlwZXMgJiBGaW5kRmlsZVR5cGUuRElSRUNUT1JZIDogdHlwZXMgJiBGaW5kRmlsZVR5cGUuRklMRSkpe1xyXG5cdFx0XHRyZXR1cm4gbnBhdGg7XHJcblx0XHR9ZWxzZSBpZihpbmZvLmlzRGlyZWN0b3J5KCkpe1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gZmluZEZpbGUobnBhdGgsIGZpbGVuYW1lLCB0eXBlcyk7XHJcblx0XHRcdGlmKHJlc3VsdCl7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOmBjeWOhuebruW9lei3r+W+hFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcERpcmVjdG9yeShwYXRoXzpzdHJpbmcsIGNhbGxiYWNrOihQYXRoOnN0cmluZywgZmlsZTpzdHJpbmcsIGlzZGlyOmJvb2xlYW4pPT5ib29sZWFuKSB7XHJcblx0Zm9yKGxldCBmaWxlIG9mIEZzLnJlYWRkaXJTeW5jKHBhdGhfKSl7XHJcblx0XHRsZXQgbnBhdGggPSBQYXRoLmpvaW4ocGF0aF8sIGZpbGUpO1xyXG5cdFx0dmFyIGluZm8gPSBGcy5zdGF0U3luYyhucGF0aCk7XHJcblx0XHRpZihjYWxsYmFjayhucGF0aCwgZmlsZSwgaW5mby5pc0RpcmVjdG9yeSgpKSl7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fWVsc2UgaWYoaW5mby5pc0RpcmVjdG9yeSgpKXtcclxuXHRcdFx0aWYobWFwRGlyZWN0b3J5KG5wYXRoLCBjYWxsYmFjaykpe1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICog5aSN5Yi25paH5Lu2XHJcbiAqIEBwYXJhbSBzcmNQYXRoIFxyXG4gKiBAcGFyYW0gZGVzdFBhdGggXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29weUZpbGUoc3JjUGF0aDpzdHJpbmcsIGRlc3RQYXRoOnN0cmluZyl7XHJcblx0RnMud3JpdGVGaWxlU3luYyhkZXN0UGF0aCwgRnMucmVhZEZpbGVTeW5jKHNyY1BhdGgpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOWkjeWItuebruW9lVxyXG4gKiBAcGFyYW0gc3JjIFxyXG4gKiBAcGFyYW0gZGVzdCBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3B5RGlyZWN0b3J5KHNyY1BhdGg6c3RyaW5nLCBkZXN0UGF0aDpzdHJpbmcpe1xyXG4gICAgaWYoRnMuZXhpc3RzU3luYyhzcmNQYXRoKSl7XHJcbiAgICAgICAgaWYoIUZzLmV4aXN0c1N5bmMoZGVzdFBhdGgpKXtcclxuICAgICAgICAgICAgRnMubWtkaXJTeW5jKGRlc3RQYXRoLCB7IHJlY3Vyc2l2ZSA6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgZmlsZSBvZiBGcy5yZWFkZGlyU3luYyhzcmNQYXRoKSl7XHJcbiAgICAgICAgICAgIGxldCBzcGF0aCA9IFBhdGguam9pbihzcmNQYXRoLCBmaWxlKTtcclxuICAgICAgICAgICAgbGV0IGRwYXRoID0gUGF0aC5qb2luKGRlc3RQYXRoLCBmaWxlKTtcclxuICAgICAgICAgICAgdmFyIGluZm8gPSBGcy5zdGF0U3luYyhzcGF0aCk7XHJcbiAgICAgICAgICAgIGlmKGluZm8uaXNEaXJlY3RvcnkoKSl7XHJcbiAgICAgICAgICAgICAgICBjb3B5RGlyZWN0b3J5KHNwYXRoLCBkcGF0aCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY29weUZpbGUoc3BhdGgsIGRwYXRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+W+l+ahhuaetuaooeWdl+ihqFxyXG4gKi9cclxuY29uc3QgbW9kdWxlc0ZpbGUgPSBQYXRoLmpvaW4oRVhURU5TSU9OX1BBVEgsICdmcmFtZXdvcmsnLCAnbW9kdWxlcy5qc29uJyk7XHJcbmxldCBtb2R1bGVzQ29uZmlnID0gbnVsbDtcclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZyYW1ld29ya01vZHVsZXMoKXtcclxuICAgIGlmKCFtb2R1bGVzQ29uZmlnKXtcclxuICAgICAgICBpZihGcy5leGlzdHNTeW5jKG1vZHVsZXNGaWxlKSl7XHJcbiAgICAgICAgICAgIG1vZHVsZXNDb25maWcgPSBKU09OLnBhcnNlKEZzLnJlYWRGaWxlU3luYyhtb2R1bGVzRmlsZSwgeyBlbmNvZGluZyA6ICd1dGYtOCcgfSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtb2R1bGVzQ29uZmlnO1xyXG59XHJcblxyXG4vKipcclxuICog6I635b6X5omp5bGV6YWN572uXHJcbiAqL1xyXG5jb25zdCBwYWNrYWdlRmlsZSA9IFBhdGguam9pbihFWFRFTlNJT05fUEFUSCwgJ3BhY2thZ2UuanNvbicpO1xyXG5sZXQgcGFja2FnZUNvbmZpZyA9IG51bGw7XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFeHRlbnNpb25Db25maWcoKXtcclxuICAgIGlmKCFwYWNrYWdlQ29uZmlnKXtcclxuICAgICAgICBpZihGcy5leGlzdHNTeW5jKHBhY2thZ2VGaWxlKSl7XHJcbiAgICAgICAgICAgIHBhY2thZ2VDb25maWcgPSBKU09OLnBhcnNlKEZzLnJlYWRGaWxlU3luYyhwYWNrYWdlRmlsZSwgeyBlbmNvZGluZyA6ICd1dGYtOCcgfSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwYWNrYWdlQ29uZmlnO1xyXG59XHJcblxyXG4vKipcclxuICog6I635b6X5ri45oiP5YyFXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2FtZVBhY2tzKCl7XHJcbiAgICBsZXQgcGFja3MgPSB7fTtcclxuICAgIGxldCBfY29sbGVjdEdhbWVQYWNrcztcclxuICAgIF9jb2xsZWN0R2FtZVBhY2tzID0gKHBhdGg6c3RyaW5nKT0+e1xyXG4gICAgICAgIGZvcihsZXQgZiBvZiBGcy5yZWFkZGlyU3luYyhwYXRoKSl7XHJcbiAgICAgICAgICAgIGxldCBmcGF0aCA9IFBhdGguam9pbihwYXRoLCBmKTtcclxuICAgICAgICAgICAgbGV0IGZzdGF0ZSA9IEZzLnN0YXRTeW5jKGZwYXRoKTtcclxuICAgICAgICAgICAgaWYoZnN0YXRlLmlzRGlyZWN0b3J5KCkpe1xyXG4gICAgICAgICAgICAgICAgbGV0IG1ldGFmaWxlID0gZnBhdGggKyBcIi5tZXRhXCI7XHJcbiAgICAgICAgICAgICAgICBpZihGcy5leGlzdHNTeW5jKG1ldGFmaWxlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1ldGEgPSBKU09OLnBhcnNlKEZzLnJlYWRGaWxlU3luYyhtZXRhZmlsZSwgeyBlbmNvZGluZyA6ICd1dGYtOCcgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG1ldGEgJiYgbWV0YS5pc0J1bmRsZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhY2tzW21ldGEuYnVuZGxlTmFtZSB8fCBmXSA9IFBhdGgubm9ybWFsaXplKGZwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgX2NvbGxlY3RHYW1lUGFja3MoZnBhdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHRwYWNrc1snbWFpbiddID0gUGF0aC5ub3JtYWxpemUoUGF0aC5qb2luKEVkaXRvci5Qcm9qZWN0LnBhdGgsICdhc3NldHMnKSk7XHJcblx0X2NvbGxlY3RHYW1lUGFja3MoUGF0aC5qb2luKEVkaXRvci5Qcm9qZWN0LnBhdGgsICdhc3NldHMnKSk7XHJcbiAgICByZXR1cm4gcGFja3M7XHJcbn1cclxuIl19

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messages = exports.unload = exports.load = void 0;
var utils_1 = require("./utils");
var hooks_1 = require("./builder/hooks");
var Path = require('path');
var TAG = 'lcc-framework';
/**
 * 导入框架
 */
function importFramework() {
    var sources = Path.join(utils_1.EXTENSION_PATH, 'assets');
    var target = "assets/lcc-framework/";
    // 如果已经导入寻找目标目录
    var path = utils_1.findFile(Path.join(Editor.Project.path, 'assets'), "lcc-framework", utils_1.FindFileType.DIRECTORY);
    if (path) {
        target = path.substring(path.indexOf("assets")).replace("\\", "/");
    }
    utils_1.copyDirectory(sources, Path.join(Editor.Project.path, target));
    Editor.assetdb.refresh('db://' + target);
}
/**
 * 插件加载回调
 */
function load() {
    Editor.Builder.on('build-start', hooks_1.onBuildStart);
    Editor.Builder.on('build-finished', hooks_1.onBuildFinished);
}
exports.load = load;
/**
 * 插件卸载回调
 */
function unload() {
    Editor.Builder.removeListener('build-start', hooks_1.onBuildStart);
    Editor.Builder.removeListener('build-finished', hooks_1.onBuildFinished);
}
exports.unload = unload;
/**
 * 消息合集
 */
var messages;
(function (messages) {
    /**
     * 导入或更新框架
     */
    function import_framework() {
        importFramework();
    }
    messages.import_framework = import_framework;
    /**
     * 功能界面
     */
    function function_panel() {
        Editor.Panel.open('lcc-framework');
    }
    messages.function_panel = function_panel;
})(messages = exports.messages || (exports.messages = {}));
;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsaUNBQWdGO0FBQ2hGLHlDQUErRDtBQUUvRCxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFN0IsSUFBTSxHQUFHLEdBQUcsZUFBZSxDQUFDO0FBRTVCOztHQUVHO0FBQ0gsU0FBUyxlQUFlO0lBQ3ZCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMvQyxJQUFJLE1BQU0sR0FBRyx1QkFBdUIsQ0FBQztJQUV4QyxlQUFlO0lBQ2YsSUFBSSxJQUFJLEdBQUcsZ0JBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLGVBQWUsRUFBRSxvQkFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZHLElBQUcsSUFBSSxFQUFDO1FBQ1AsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsR0FBRyxDQUFDLENBQUM7S0FDbEU7SUFDRCxxQkFBYSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDL0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQWdCLElBQUk7SUFDbkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLG9CQUFZLENBQUMsQ0FBQztJQUM1QyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSx1QkFBZSxDQUFDLENBQUM7QUFDekQsQ0FBQztBQUhELG9CQUdDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixNQUFNO0lBQ3JCLE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxvQkFBWSxDQUFDLENBQUM7SUFDeEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEVBQUUsdUJBQWUsQ0FBQyxDQUFDO0FBQ3JFLENBQUM7QUFIRCx3QkFHQztBQUVEOztHQUVHO0FBQ0gsSUFBaUIsUUFBUSxDQWN4QjtBQWRELFdBQWlCLFFBQVE7SUFDeEI7O09BRUc7SUFDSCxTQUFnQixnQkFBZ0I7UUFDL0IsZUFBZSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUZlLHlCQUFnQixtQkFFL0IsQ0FBQTtJQUVFOztPQUVHO0lBQ0gsU0FBZ0IsY0FBYztRQUMxQixNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRmUsdUJBQWMsaUJBRTdCLENBQUE7QUFDTCxDQUFDLEVBZGdCLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBY3hCO0FBQUEsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEVYVEVOU0lPTl9QQVRILCBmaW5kRmlsZSwgRmluZEZpbGVUeXBlLCBjb3B5RGlyZWN0b3J5IH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IG9uQnVpbGRTdGFydCwgb25CdWlsZEZpbmlzaGVkIH0gZnJvbSAnLi9idWlsZGVyL2hvb2tzJ1xyXG5cclxuY29uc3QgUGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuXHJcbmNvbnN0IFRBRyA9ICdsY2MtZnJhbWV3b3JrJztcclxuXHJcbi8qKlxyXG4gKiDlr7zlhaXmoYbmnrZcclxuICovXHJcbmZ1bmN0aW9uIGltcG9ydEZyYW1ld29yaygpIHtcclxuXHRsZXQgc291cmNlcyA9IFBhdGguam9pbihFWFRFTlNJT05fUEFUSCwgJ2Fzc2V0cycpO1xyXG4gICAgbGV0IHRhcmdldCA9IFwiYXNzZXRzL2xjYy1mcmFtZXdvcmsvXCI7XHJcbiAgICBcclxuXHQvLyDlpoLmnpzlt7Lnu4/lr7zlhaXlr7vmib7nm67moIfnm67lvZVcclxuXHRsZXQgcGF0aCA9IGZpbmRGaWxlKFBhdGguam9pbihFZGl0b3IuUHJvamVjdC5wYXRoLCAnYXNzZXRzJyksIFwibGNjLWZyYW1ld29ya1wiLCBGaW5kRmlsZVR5cGUuRElSRUNUT1JZKTtcclxuXHRpZihwYXRoKXtcclxuXHRcdHRhcmdldCA9IHBhdGguc3Vic3RyaW5nKHBhdGguaW5kZXhPZihcImFzc2V0c1wiKSkucmVwbGFjZShcIlxcXFxcIixcIi9cIik7XHJcblx0fVxyXG5cdGNvcHlEaXJlY3Rvcnkoc291cmNlcywgUGF0aC5qb2luKEVkaXRvci5Qcm9qZWN0LnBhdGgsIHRhcmdldCkpO1xyXG5cdEVkaXRvci5hc3NldGRiLnJlZnJlc2goJ2RiOi8vJyArIHRhcmdldCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmj5Lku7bliqDovb3lm57osINcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkKCl7XHJcblx0RWRpdG9yLkJ1aWxkZXIub24oJ2J1aWxkLXN0YXJ0Jywgb25CdWlsZFN0YXJ0KTtcclxuICAgIEVkaXRvci5CdWlsZGVyLm9uKCdidWlsZC1maW5pc2hlZCcsIG9uQnVpbGRGaW5pc2hlZCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmj5Lku7bljbjovb3lm57osINcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1bmxvYWQoKXtcclxuXHRFZGl0b3IuQnVpbGRlci5yZW1vdmVMaXN0ZW5lcignYnVpbGQtc3RhcnQnLCBvbkJ1aWxkU3RhcnQpO1xyXG4gICAgRWRpdG9yLkJ1aWxkZXIucmVtb3ZlTGlzdGVuZXIoJ2J1aWxkLWZpbmlzaGVkJywgb25CdWlsZEZpbmlzaGVkKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOa2iOaBr+WQiOmbhlxyXG4gKi9cclxuZXhwb3J0IG5hbWVzcGFjZSBtZXNzYWdlcyB7XHJcblx0LyoqXHJcblx0ICog5a+85YWl5oiW5pu05paw5qGG5p62XHJcblx0ICovXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGltcG9ydF9mcmFtZXdvcmsoKXtcclxuXHRcdGltcG9ydEZyYW1ld29yaygpO1xyXG5cdH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKn+iDveeVjOmdolxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gZnVuY3Rpb25fcGFuZWwoKXtcclxuICAgICAgICBFZGl0b3IuUGFuZWwub3BlbignbGNjLWZyYW1ld29yaycpO1xyXG4gICAgfVxyXG59O1xyXG4iXX0=

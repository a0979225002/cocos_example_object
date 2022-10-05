
import { EXTENSION_PATH, findFile, FindFileType, copyDirectory } from './utils';
import { onBuildStart, onBuildFinished } from './builder/hooks'

const Path = require('path');

const TAG = 'lcc-framework';

/**
 * 导入框架
 */
function importFramework() {
	let sources = Path.join(EXTENSION_PATH, 'assets');
    let target = "assets/lcc-framework/";
    
	// 如果已经导入寻找目标目录
	let path = findFile(Path.join(Editor.Project.path, 'assets'), "lcc-framework", FindFileType.DIRECTORY);
	if(path){
		target = path.substring(path.indexOf("assets")).replace("\\","/");
	}
	copyDirectory(sources, Path.join(Editor.Project.path, target));
	Editor.assetdb.refresh('db://' + target);
}

/**
 * 插件加载回调
 */
export function load(){
	Editor.Builder.on('build-start', onBuildStart);
    Editor.Builder.on('build-finished', onBuildFinished);
}

/**
 * 插件卸载回调
 */
export function unload(){
	Editor.Builder.removeListener('build-start', onBuildStart);
    Editor.Builder.removeListener('build-finished', onBuildFinished);
}

/**
 * 消息合集
 */
export namespace messages {
	/**
	 * 导入或更新框架
	 */
	export function import_framework(){
		importFramework();
	}

    /**
     * 功能界面
     */
    export function function_panel(){
        Editor.Panel.open('lcc-framework');
    }
};


const Fs = require('fs');
const Path = require('path');
const { exec } = require('child_process');

/**
 * 扩展路径
 */
export const EXTENSION_PATH = Path.join(__dirname, '..');

/**
 * 执行命令
 * @param command 
 * @param cwd 
 */
export function exeCommand(command:string, cwd:string){
	return new Promise<{ error?:string, stdout?:string, stderr?:string }>((resolve)=>{
		return exec(command, { cwd : cwd }, (error, stdout, stderr) => {
			resolve({
				error : error,
				stdout : stdout,
				stderr : stderr,
			});
		});
	});
}

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
 export function updateMap(dmap:Object, smap:Object){
    for(let key in smap){
        let svalue = smap[key];
        let dvalue = dmap[key];
        if(dvalue == null){
            dmap[key] = svalue;
        }else{
            let stype = typeof svalue;
            let dtype = typeof dvalue;
            if(dtype == 'object' && stype == dtype){
                let sarray = svalue instanceof Array;
                let darray = dvalue instanceof Array;
                if(sarray != darray){
                    dmap[key] = svalue;
                }else{
                    if(darray){
                        dmap[key] = svalue;
                    }else {
                        this.updateMap(dvalue, svalue);
                    }
                }
            }else{
                dmap[key] = svalue;
            }
        }
    }
}

/**
 * 查找文件类型
 */
export enum FindFileType {
	FILE = 1,
	DIRECTORY = 2,
}

/**
 * 在指定目录中查找文件
 * @param dir 
 * @param filename 
 */
export function findFile(dir:string, filename:string, types:number = FindFileType.FILE | FindFileType.DIRECTORY){
	for(let file of Fs.readdirSync(dir)){
		let npath = Path.join(dir, file);
		var info = Fs.statSync(npath);
		if((file == filename) && (info.isDirectory() ? types & FindFileType.DIRECTORY : types & FindFileType.FILE)){
			return npath;
		}else if(info.isDirectory()){
			let result = findFile(npath, filename, types);
			if(result){
				return result;
			}
		}
	}
}

/**
 * 遍历目录路径
 */
export function mapDirectory(path_:string, callback:(Path:string, file:string, isdir:boolean)=>boolean) {
	for(let file of Fs.readdirSync(path_)){
		let npath = Path.join(path_, file);
		var info = Fs.statSync(npath);
		if(callback(npath, file, info.isDirectory())){
			return true;
		}else if(info.isDirectory()){
			if(mapDirectory(npath, callback)){
				return true;
			}
		}
	}
}

/**
 * 复制文件
 * @param srcPath 
 * @param destPath 
 */
export function copyFile(srcPath:string, destPath:string){
	Fs.writeFileSync(destPath, Fs.readFileSync(srcPath));
}

/**
 * 复制目录
 * @param src 
 * @param dest 
 */
export function copyDirectory(srcPath:string, destPath:string){
    if(Fs.existsSync(srcPath)){
        if(!Fs.existsSync(destPath)){
            Fs.mkdirSync(destPath, { recursive : true });
        }
        for(let file of Fs.readdirSync(srcPath)){
            let spath = Path.join(srcPath, file);
            let dpath = Path.join(destPath, file);
            var info = Fs.statSync(spath);
            if(info.isDirectory()){
                copyDirectory(spath, dpath);
            }else{
                copyFile(spath, dpath);
            }
        }
    }
}

/**
 * 获得框架模块表
 */
const modulesFile = Path.join(EXTENSION_PATH, 'framework', 'modules.json');
let modulesConfig = null;
export function getFrameworkModules(){
    if(!modulesConfig){
        if(Fs.existsSync(modulesFile)){
            modulesConfig = JSON.parse(Fs.readFileSync(modulesFile, { encoding : 'utf-8' }));
        }
    }
    return modulesConfig;
}

/**
 * 获得扩展配置
 */
const packageFile = Path.join(EXTENSION_PATH, 'package.json');
let packageConfig = null;
export function getExtensionConfig(){
    if(!packageConfig){
        if(Fs.existsSync(packageFile)){
            packageConfig = JSON.parse(Fs.readFileSync(packageFile, { encoding : 'utf-8' }));
        }
    }
    return packageConfig;
}

/**
 * 获得游戏包
 */
export function getGamePacks(){
    let packs = {};
    let _collectGamePacks;
    _collectGamePacks = (path:string)=>{
        for(let f of Fs.readdirSync(path)){
            let fpath = Path.join(path, f);
            let fstate = Fs.statSync(fpath);
            if(fstate.isDirectory()){
                let metafile = fpath + ".meta";
                if(Fs.existsSync(metafile)){
                    let meta = JSON.parse(Fs.readFileSync(metafile, { encoding : 'utf-8' }));
                    if(meta && meta.isBundle){
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

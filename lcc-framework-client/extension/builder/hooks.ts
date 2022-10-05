import { EXTENSION_PATH, exeCommand, findFile, FindFileType, getExtensionConfig,getFrameworkModules,mapDirectory,copyFile } from '../utils';
import { loadConfig } from '../config';
import { ModulesConfig,ModulesTree } from './modules';

const Fs = require('fs');
const Path = require('path');

const TAG = 'lcc-framework';

/**
 * 构建开始
 */
export async function onBuildStart(options:BuildOptions, callback:Function){
	callback();
}

/**
 * 构建完成
 */
export async function onBuildFinished(options:BuildOptions, callback:Function){
	//Editor.log(`${TAG} onBuildFinished ${JSON.stringify(options)}`);
	let pkgOptions = loadConfig().publish;
	let destJs = findFile(options.dest, 'lcc-framework.js', FindFileType.FILE);
	if(destJs){
        const VERSION = getExtensionConfig().version;
        const tempPath = Path.join(Editor.Project.path, 'temp', 'lcc-framework');
        if(!Fs.existsSync(tempPath)){
            Fs.mkdirSync(tempPath, { recursive : true });
        }
		let modules = '';
		let modulesConfig:ModulesConfig = getFrameworkModules();
		if(pkgOptions.clip){
			if(pkgOptions.clipMethod == 'auto'){
				let pathList:string[] = [];
				mapDirectory(Path.join(Editor.Project.path, 'assets'), (path, file, isdir)=>{
					if(!isdir && file != 'lcc-framework.js' && file != 'lcc-framework.d.ts' &&
						(path.endsWith('.ts') || 
						path.endsWith('.js') || 
						path.endsWith('.scene') || 
						path.endsWith('.prefab'))){
						pathList.push(path);
					}
					return false;
				});
				const autoclipCacheConfigFile = Path.join(tempPath, 'autoclip-cache-config.json');
				let autoclipCacheConfig:{ version:number , filetimes:Record<string,number>, modules:string } = { version:VERSION, filetimes:{}, modules:"" };
				do {
					// 检查缓存
					if(Fs.existsSync(autoclipCacheConfigFile)){
						autoclipCacheConfig = JSON.parse(Fs.readFileSync(autoclipCacheConfigFile, { encoding : 'utf-8' }));
						if(Object.keys(autoclipCacheConfig.filetimes).length == pathList.length && autoclipCacheConfig.version == VERSION){
							if((()=>{
								for(let _path of pathList){
									let pinfo = Fs.statSync(_path);
									if(Math.floor(pinfo.mtimeMs) != autoclipCacheConfig.filetimes[_path]){
										return false;
									}
								}
								return true;
							})()){
								Editor.log(`${TAG} 使用自动裁剪缓存`);
								modules = autoclipCacheConfig.modules;
								break;
							}
						}
					}

					// 重新构建缓存
					if(Fs.existsSync(autoclipCacheConfigFile)){
						Fs.unlinkSync(autoclipCacheConfigFile);
					}
					autoclipCacheConfig.version = VERSION;
					autoclipCacheConfig.filetimes = {};
					let autoclipCache = '';
					for(let _path of pathList){
						let pinfo = Fs.statSync(_path);
						autoclipCacheConfig.filetimes[_path] = Math.floor(pinfo.mtimeMs);
						autoclipCache += Fs.readFileSync(_path, { encoding : 'utf-8' });
					}
					let modulesTree = new ModulesTree(modulesConfig);
					for(let mname in modulesConfig){
						let config = modulesConfig[mname];
						if(config.keywords){
							for(let keyword of config.keywords){
								let reg = new RegExp(`[^a-zA-Z_$]${keyword}[^a-zA-Z_$]`);
								if(reg.test(autoclipCache)){
									Editor.log(`${TAG} KEYWORD '${keyword}' MODULE '${mname}'`);
									modulesTree.keepModule(mname);
									break;
								}
							}
						}
					}
					autoclipCacheConfig.modules = modulesTree.collectModules().filter((mname:string)=>{ return !modulesConfig[mname].baseModule; }).join(',');
					modules = autoclipCacheConfig.modules;
					Fs.writeFileSync(autoclipCacheConfigFile, JSON.stringify(autoclipCacheConfig));
				}while(false);
			}else{
				let keepModules = pkgOptions.keepModules;
				modules = Object.keys(modulesConfig).filter((mname:string)=>{ 
					let module = modulesConfig[mname];
					let keep = keepModules[mname];
					return !module.baseModule && (keep != null ? keep : module.keepDefault);
				}).join(',');
			}
		}else{
			modules = Object.keys(modulesConfig).filter((mname:string)=>{ return !modulesConfig[mname].baseModule; }).join(',');
		}
		
		Editor.log(`${TAG} 模块:${modules}`);
        
        let debug = pkgOptions.confuse ? false : options.debug;
        const option_debug = debug?'--debug':'';
        const option_modules = modules?`--modules "${modules}"`:'';
        const option_confuse = pkgOptions.confuse?'--confuse':'';

        const frameworkCacheConfigFile = Path.join(tempPath, 'framework-cache-config.json');
        const frameworkCacheFile = Path.join(tempPath, 'framework-cache.js');
        let frameworkCacheConfig:{ version:number ,options:Record<string,string> } = { version:VERSION, options:{} };
        do {
            // 检查缓存
            if(Fs.existsSync(frameworkCacheConfigFile) && Fs.existsSync(frameworkCacheFile)){
                frameworkCacheConfig = JSON.parse(Fs.readFileSync(frameworkCacheConfigFile, { encoding : 'utf-8' }));
                if(frameworkCacheConfig.version == VERSION && 
                    frameworkCacheConfig.options['debug'] == option_debug && 
                    frameworkCacheConfig.options['confuse'] == option_confuse && 
                    frameworkCacheConfig.options['modules'] == option_modules){
						Editor.log(`${TAG} 使用框架缓存`);
                    break;
                }
            }

			// 重新编译框架
			if(Fs.existsSync(frameworkCacheConfigFile)){
				Fs.unlinkSync(frameworkCacheConfigFile);
			}
			if(Fs.existsSync(frameworkCacheFile)){
				Fs.unlinkSync(frameworkCacheFile);
			}
            let command = `gulp buildPublishFramework --outDir "${tempPath}" --outFile framework-cache.js ${option_debug} ${option_confuse} ${option_modules}`;
            //Editor.log(`${TAG} onBuildFinished ${command}`);
			let result = await exeCommand(command, EXTENSION_PATH);
            if(result.error){
                Editor.error('框架编译失败: ' + result.error);
                break;
            }else{
                // 写入缓存
                frameworkCacheConfig.version = VERSION;
                frameworkCacheConfig.options['debug'] = option_debug;
                frameworkCacheConfig.options['confuse'] = option_confuse;
                frameworkCacheConfig.options['modules'] = option_modules;
                Fs.writeFileSync(frameworkCacheConfigFile, JSON.stringify(frameworkCacheConfig));
            }
        }while(false);

        if(Fs.existsSync(frameworkCacheFile)){
            copyFile(frameworkCacheFile, destJs);
			Editor.log(`${TAG} lcc-framework.js 替换成功`);
        }
	}
	callback();
}

import { WORK_PATH, NODE_PATH, PUBLISH_PATH } from '../config';

const FS = require('fs');
const Path = require('path');
const globby = require('globby');

const TAG = "[publish]";

/**
 * 默认的发布包含配置
 */
const DEFAULT_PUBLISH_INCLUDE = [
	'dist/**/*',
    'bin/**/*',
];

/**
 * 发布包含配置文件，优先
 */
const PUBLISH_INCLUDE_FILE = "publish.include";

/**
 * 发布排除配置文件
 */
const PUBLISH_EXCLUDE_FILE = "publish.exclude";

/**
 * 构建工程
 * @param path 
 */
async function buildProject(path:string, buildCmd?:string) {
    var info = FS.statSync(path);
    if(info.isDirectory()){
        if(FS.existsSync(Path.join(path, 'tsconfig.json'))){
            lcc.logMgr.info(TAG, `buildProject ${path}`);
            let result:any;
            if(buildCmd){
                result = await lcc.os.exeCommand(buildCmd, path);
            }else{
                result = await lcc.os.exeCommand('tsc', path);
            }
            if(result.error){
                if(result.stdout){
                    lcc.logMgr.error(TAG, `tsc output : ${result.stdout}`);
                }
                if(result.stderr){
                    lcc.logMgr.error(TAG, `tsc error : ${result.stderr}`);
                }
            }else{
                return true;
            }
        }else{
            lcc.logMgr.error(TAG, `not found 'tsconfig.json' in ${path}`);
        }
    }
}

/**
 * 复制工程
 */
async function copyProjects(destPath:string, options:any = {}) {
	if(!FS.existsSync(destPath)){
		FS.mkdirSync(destPath, { recursive : true });
	}
	
    // 收集工程
    let projects:{node:string, build?:string}[] = [];
    projects.push({ node : 'lcc-framework-server', build : 'gulp buildFramework' });
    projects.push({ node : 'scripts' });
    const serverPath = Path.join(NODE_PATH, 'servers');
    for(let file of FS.readdirSync(serverPath)){
        let spath = Path.join(serverPath, file);
        var info = FS.statSync(spath);
        if(info.isDirectory() && (file.indexOf('_') != 0)){
            projects.push({ node : Path.join('servers', file)});
        }
    }

    // 构建与复制工程
    for(let project of projects){
        let localPath = Path.join(NODE_PATH, project.node);
        if(!options.build || await buildProject(localPath, project.build)){
            let files:string[];
            let includePath = Path.join(localPath, PUBLISH_INCLUDE_FILE);
            let excludePath = Path.join(localPath, PUBLISH_EXCLUDE_FILE);
            if(FS.existsSync(includePath)){
                let includes = FS.readFileSync(includePath, { encoding : 'utf8'}).replace(/[\r\n]+/g,'\n').content.split('\n');
                files = globby.sync(includes, { cwd : localPath });
            }else if(FS.existsSync(excludePath)){
                let excludes = FS.readFileSync(excludePath, { encoding : 'utf8'}).replace(/[\r\n]+/g,'\n').content.split('\n');
                files = globby.sync('**/*', { cwd : localPath, ignore : excludes });
            }else{
                files = globby.sync(DEFAULT_PUBLISH_INCLUDE, { cwd : localPath });
            }
			for (let file of files){
				let srcFile = Path.join(localPath, file);
				var info = FS.statSync(srcFile);
				if(!info.isDirectory()){
					let destFile = Path.join(destPath, 'node', project.node, file);
					let destDir = Path.dirname(destFile);
					if(!FS.existsSync(destDir)){
						FS.mkdirSync(destDir, { recursive : true });
					}
					lcc.fs.copyFile(srcFile, destFile);
				}
			}
            lcc.logMgr.info(TAG, `copy node '${project}'`);
        }
    }
    
    // 复制nodejs配置
    lcc.fs.copyFile(Path.join(NODE_PATH, 'package.json'), Path.join(destPath, 'node', 'package.json'));
    lcc.fs.copyFile(Path.join(NODE_PATH, 'package-lock.json'), Path.join(destPath, 'node', 'package-lock.json'));
}

/**
 * 复制资源
 */
function copyAssets(destPath:string, options:any = {}){
    if(options.assets){
        lcc.fs.copyDirectory(Path.join(WORK_PATH, 'assets'), Path.join(destPath, 'assets'));
        lcc.logMgr.info(TAG, `copy assets 'assets'`);
    
        lcc.fs.copyDirectory(Path.join(WORK_PATH, 'config'), Path.join(destPath, 'config'));
        lcc.logMgr.info(TAG, `copy assets 'config'`);
    }
}

/**
 * 发布
 */
export async function publish(options:any = {}){
    let now = new Date();
    let yyyy = now.getFullYear();
    let mm = now.getMonth() + 1;
    let dd = now.getDate();
    let HH = now.getHours();
    let MM = now.getMinutes();
    let SS = now.getSeconds();
    let destPath = `${PUBLISH_PATH}/${yyyy}${mm < 10 ? "0" + mm : mm}${dd < 10 ? "0" + dd : dd}${HH < 10 ? "0" + HH : HH}${MM < 10 ? "0" + MM : MM}${SS < 10 ? "0" + SS : SS}`;
    FS.mkdirSync(destPath, { recursive : true });
    lcc.logMgr.info(TAG, `dest path : ${destPath}`);

    // 复制工程
    await copyProjects(destPath, options);

    // 复制资源
    copyAssets(destPath, options);

    // 生成脚本文件 install
    FS.writeFileSync(Path.join(destPath, 'install.bat'), `
        @echo off
        cd node
        npm install
        pause
    `);
    lcc.logMgr.info(TAG, `create install.bat`);
    FS.writeFileSync(Path.join(destPath, 'install.sh'), `#!/bin/sh
        cd node
        npm install
    `);
    lcc.logMgr.info(TAG, `create install.sh`);

    // 生成脚本文件 gamectl
    FS.writeFileSync(Path.join(destPath, 'gamectl.bat'), `
        @echo off
        node node/scripts/bin/main.js %1 %2 %3 %4 %5 %6 %7 %8 %9
    `);
    lcc.logMgr.info(TAG, `create gamectl.bat`);
    FS.writeFileSync(Path.join(destPath, 'gamectl.sh'), `#!/bin/sh
        node node/scripts/bin/main.js $@
    `);
    lcc.logMgr.info(TAG, `create gamectl.sh`);
}

import { ModulesTree } from './modules';

const gulp = require("gulp");
const ts = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const jsobfuscator = require('gulp-javascript-obfuscator');
const debug = require('gulp-debug');
const notify = require('gulp-notify');
const browserify = require('gulp-browserify');
const merge = require('merge2');
const through = require('through2');
const fs = require("fs");
const path = require("path");
const yargs = require('yargs');

/**
 * 清空资源框架
 */
function cleanAssetFramework(cb) {
	if(fs.existsSync('framework')){
		console.log("cleanAssetFramework");
		return gulp.src([ 'assets/scripts/lcc-framework.js', 'assets/scripts/lcc-framework.d.ts'], { read: false, allowEmpty:true })
			.pipe(clean({ force:true }));
	}else{
		console.error("framework not found!");
		cb();
	}
}

/**
 * 构建资源框架
 */
function buildAssetFramework(cb) {
	if(fs.existsSync('framework')){
		console.log("buildAssetFramework");
		let tsResult = gulp.src([ 'framework/src/**/*.ts', '@types/creator.d.ts' ])
			.pipe(sourcemaps.init())
            .pipe(ts.createProject('framework/tsconfig.json', {
				target : "ES5",
            })())
			.on("error",function(err:any){
				console.error(err.message);
			});
		let modulesTree = new ModulesTree('framework/modules.json');
		modulesTree.keepAllModules();
		return merge(
			tsResult.js
				.pipe(sourcemaps.write())
				.pipe(browserify({
					insertGlobals : true,
					debug : true,
				}))
				.pipe(through.obj(function (chunk, enc, callback){
                    let sdata = chunk.contents.toString();
					for(let lib of modulesTree.collectLibs()){
						let libstr = fs.readFileSync(lib, 'utf8');
						sdata = sdata + '\n' + libstr;
					}
                    chunk.contents = Buffer.from(sdata);
                    this.push(chunk)
                    callback();
                }))
				.pipe(gulp.dest('assets/scripts')),
			tsResult.dts
				.pipe(through.obj(function (chunk, enc, callback){
                    let sdata = chunk.contents.toString();
					for(let tp of modulesTree.collectTypes()){
						let tpstr = fs.readFileSync(tp, 'utf8');
						sdata = sdata + '\n' + tpstr;
					}
                    chunk.contents = Buffer.from(sdata);
                    this.push(chunk)
                    callback();
                }))
				.pipe(gulp.dest('assets/scripts'))
			);
	}else{
		console.error("framework not found!");
		cb();
	}
}

/**
 * 构建发布框架
 */
function buildPublishFramework(cb) {
	if(fs.existsSync('framework')){
		console.log("buildPublishFramework");
		let argv = yargs
			.default('debug', false)
			.default('confuse', false)
			.default('modules', "base")
			.default('outDir', "dist")
			.default('outFile', "framework-cache.js")
			.boolean(['debug', 'confuse'])
			.argv;
        
        // 计算编译源文件
        let modulesTree = new ModulesTree('framework/modules.json');
        modulesTree.keepModules(argv.modules.split(','));
		let modules = modulesTree.collectModules();
		console.log(`KeepModules : ${modules.join(',')}`);
        let sources = modulesTree.collectSources().map((item, index, input) => { return 'framework/src/' + item; });
        sources.push(...[ '@types/creator.d.ts' ]);
        console.log("地址:",sources)
		let gulpState = gulp.src(sources);
		if(argv.debug){
			gulpState = gulpState.pipe(sourcemaps.init());
		}
		gulpState = gulpState.pipe(ts.createProject('framework/tsconfig.json', { 
			target : "ES5",
			declaration : false,
			removeComments : true,
			outFile : argv.outFile,
		})())
		.on("error",function(err:any){
			console.error(err.message);
		});
		gulpState = gulpState.js;
		gulpState = gulpState.pipe(browserify({
			insertGlobals : true,
			debug : false,
		}))
		gulpState = gulpState.pipe(through.obj(function (chunk, enc, callback){
			let sdata = chunk.contents.toString();
			for(let lib of modulesTree.collectLibs()){
				let libstr = fs.readFileSync(lib, 'utf8');
				sdata = sdata + '\n' + libstr;
			}
			chunk.contents = Buffer.from(sdata);
			this.push(chunk)
			callback();
		}));
		if(argv.confuse){
			gulpState = gulpState.pipe(jsobfuscator({
				compact: true
			}));
		}
		gulpState = gulpState.pipe(uglify());
		if(argv.debug){
			gulpState = gulpState.pipe(sourcemaps.write());
		}
		return gulpState.pipe(gulp.dest(argv.outDir));
	}else{
		console.error("framework not found!");
		cb();
	}
}

export const buildAsset = gulp.series(cleanAssetFramework, buildAssetFramework);

export const buildPublish = buildPublishFramework;
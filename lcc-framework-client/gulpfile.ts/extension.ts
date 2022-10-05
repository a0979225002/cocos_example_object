
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
const merge = require('merge2');
const through = require('through2');
const fs = require("fs");
const path = require("path");
const argv = require('yargs').argv;

/**
 * 清空扩展
 */
function cleanExtension(cb) {
	if(fs.existsSync('extension')){
		console.log("cleanExtension");
		return gulp.src([ 'bin/**/*' ], { read: false, allowEmpty:true })
			.pipe(clean({ force:true }));
	}else{
		console.error("extension not found!");
		cb();
	}
}

/**
 * 构建扩展
 */
function buildExtension(cb) {
	if(fs.existsSync('extension')){
		console.log("buildExtension");
		let tsResult = gulp.src([ 'extension/**/*.ts', '@types/**/*.ts' ])
			.pipe(sourcemaps.init())
			.pipe(ts.createProject('extension/tsconfig.json')())
			.on("error",function(err:any){
				console.error(err.message);
			});;
		return tsResult.js
			/*
			.pipe(jsobfuscator({
				compact: true
			}))
			.pipe(uglify())
			*/
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('bin'));
	}else{
		console.error("extension not found!");
		cb();
	}
}

export const build = gulp.series(cleanExtension, buildExtension);

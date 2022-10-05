// Load Gulp...of course
const {src, dest, task, watch, series, parallel} = require('gulp');

// CSS related plugins
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// JS related plugins
var uglify = require('gulp-uglify');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var stripDebug = require('gulp-strip-debug');

// Utility plugins
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var options = require('gulp-options');
var gulpif = require('gulp-if');
var through = require('through2');
const ts = require("gulp-typescript");
var runSequence = require('run-sequence');
const jsobfuscator = require('gulp-javascript-obfuscator');
const path = require("path");
// Browers related plugins
var browserSync = require('browser-sync').create();

// Project related variables
var styleSRC = './src/scss/style.scss';
var styleURL = './dist/css/';
var mapURL = './';

var jsSRC = './Framework/Audio/IAudio/';
var jsFront = 'IAudioFactory.ts';
var jsFiles = [jsFront];
var jsURL = './dist/js/';

var imgSRC = './src/images/**/*';
var imgURL = './dist/images/';

var fontsSRC = './src/fonts/**/*';
var fontsURL = './dist/fonts/';

var htmlSRC = './src/**/*.html';
var htmlURL = './dist/';

var styleWatch = './src/scss/**/*.scss';
var jsWatch = './src/js/**/*.js';
var imgWatch = './src/images/**/*.*';
var fontsWatch = './src/fonts/**/*.*';
var htmlWatch = './src/**/*.html';
var allPath = [];

// Tasks
function browser_sync() {
    browserSync.init({
        server: {
            baseDir: './dist/'
        }
    });
}

function reload(done) {
    browserSync.reload();
    done();
}

function css(done) {
    src([styleSRC])
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({browsers: ['last 2 versions', '> 5%', 'Firefox ESR']}))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write(mapURL))
        .pipe(dest(styleURL))
        .pipe(browserSync.stream());
    done();
}

function js2(done) {
    src(['Framework/**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(through.obj(function (file, enc, callback) {
            this.push(file.path);
            callback();
        }))
        .on('data', function (data) {
            console.log("地址:", data)
            return browserify({
                entries: [data],
                debug: true,
            })
                .transform(babelify.configure({
                    presets: ["ES2019"]
                }))
                .on('error',function (error) {
                    console.log(error);
                })
                .bundle()
                .pipe(source(data))
                .pipe(dest('dist'));
        })
}

function js(done) {
    jsFiles.map( function( entry ) {
        return browserify({
            entries: [jsSRC + entry]
        })
            .transform( babelify, { presets: [ '@babel/preset-env' ] } )
            .bundle()
            .pipe( source( entry ) )
            .pipe( rename( {
                extname: '.min.js'
            } ) )
            .pipe( buffer() )
            .pipe( gulpif( options.has( 'production' ), stripDebug() ) )
            .pipe( sourcemaps.init({ loadMaps: true }) )
            .pipe( uglify() )
            .pipe( sourcemaps.write( '.' ) )
            .pipe( dest( jsURL ) )
            .pipe( browserSync.stream() );
    });
    done();
};


function triggerPlumber(src_file, dest_file) {
    return src(src_file)
        .pipe(plumber())
        .pipe(dest(dest_file));
}

function images() {
    return triggerPlumber(imgSRC, imgURL);
}

function fonts() {
    return triggerPlumber(fontsSRC, fontsURL);
}

function html() {
    return triggerPlumber(htmlSRC, htmlURL);
}

function watch_files() {
    watch(styleWatch, series(css, reload));
    watch(jsWatch, series(js, reload));
    watch(imgWatch, series(images, reload));
    watch(fontsWatch, series(fonts, reload));
    watch(htmlWatch, series(html, reload));
    src(jsURL + 'main.min.js')
        .pipe(notify({message: 'Gulp is Watching, Happy Coding!'}));

}

task("css", css);
task("js", js);
task("js2", js2);
task("images", images);
task("fonts", fonts);
task("html", html);
task("default", parallel(css, js, images, fonts, html));
task("watch", parallel(browser_sync, watch_files));
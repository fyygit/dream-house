/**
 * Created by Administrator on 2016/12/12.
 */
//npm install gulp -g  先全局安装
//npm install gulp --save-dev
//npm install gulp-stylus --save-dev
//npm install gulp-minify-css --save-dev
//npm install gulp-uglify --save-dev
//以上在git上安装

//首先引入gulp模块
var gulp = require( 'gulp' );
//引入 gulp-stylus插件
var stylus = require( 'gulp-stylus' );
//引入压缩css的文件  运行gulp minifycss
var minifycss = require( 'gulp-minify-css' );
//gulp-uglify
var uglify = require( 'gulp-uglify' );

//npm install browser-sync --save-dev
var browserSync = require( 'browser-sync' ).create();
//var serverStart=browserSync.create();
var reload = browserSync.reload;

//npm install gulp-nodemon --save-dev
var nodemon = require('gulp-nodemon');
gulp.task('nodemon',function(ab){
    var ft = false;
    return nodemon({
        script:'./app.js'
    } ).on('start',function(){
        if(!ft){
            ab();
            ft = true;
        }
    })
});

gulp.task('browserSync',['nodemon'],function(){
    browserSync.init({
        proxy:{
            target:'http://127.0.0.1:9999'
        },
        port:9888,
        open:false,
        files:['*']
    })
});

//创建一个编译 stylus 的任务
gulp.task( 'stylus', function()
{
    //获取要编译的文件
    //指定一个文件
    //gulp.src('./stylus/index.styl')
    //指定多个文件
    //gulp.src(['./stylus/index.styl','./stylus/css.styl'])
    //指定一个目录下所有（不包含子目录）
    //gulp.src('./stylus/*.styl')
    //指定一个目录及所有子目录下的文件
    return gulp.src( './stylus/**/*.styl' )
        //执行 stylus 编译
        .pipe( stylus() )
        //输出编译后的文件
        .pipe( gulp.dest( './public/css' ) )
} );

//压缩css文件
gulp.task( 'minifycss', [ 'stylus' ], function()
{//添加前置执行任务stylus
    return gulp.src( './public/css/**/*.css' )
        .pipe( minifycss() )
        .pipe( gulp.dest( './public/mincss' ) )
} );
//压缩js文件
gulp.task( 'uglify', function()
{//添加前置执行任务stylus
    return gulp.src( './public/js/**/*.js' )
        .pipe( uglify() )
        .pipe( gulp.dest( './public/minjs' ) )
} );

//创建监听文件变更
gulp.task( 'watcher', ['browserSync', 'stylus', 'uglify' ], function()
{
    gulp.watch( './stylus/**/*.styl', [ 'stylus' ]);
    gulp.watch( './public/js/**/*.js', [ 'uglify' ]);

    gulp.watch(['./public/css/**/*.css','./public/minjs/**/*.js'] ).on('change',function(){
        reload();
    })
} );

//创建一个default任务
gulp.task( 'default', function()
{
    console.log( 'this default' );
} );
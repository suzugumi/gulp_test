const { gulp ,  task  , src, dest , series  ,   watch   , parallel } = require('gulp');
// const sass = require('gulp-sass')(require('sass'));
const sass = require('gulp-dart-sass');//Dart Sass はSass公式が推奨 @use構文などが使える
const browserSync = require('browser-sync').create();
const plumber = require("gulp-plumber"); // エラーが発生しても強制終了させない
const notify = require("gulp-notify"); // エラー発生時のアラート出力
const autoprefixer = require('gulp-autoprefixer'); //ブラウザ別CSS生成
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
const pngquant = require('imagemin-pngquant');
const chokidar = require('chokidar');
const concat = require('gulp-concat');
const fs = require('fs');
const path = require('path');


const spritesmith = require('gulp.spritesmith');
var csso = require('gulp-csso');
const beautify = require('gulp-beautify');
var merge = require('merge-stream');
var buffer = require('vinyl-buffer');



const src_P= {scss :'src/css/*.scss',task:'src/task/**.js' };
const dest_P =  {css :'src/css/', src: './src/',home: './', images:'./src/images/'};

const Sass = (cb) => {
  src([src_P.scss],{
    sourcemaps: true
})
.pipe( 
    plumber({ errorHandler: notify.onError('Error:<%= error.message %>') 
}))
.pipe(sass({outputStyle: 'expanded'}))
.pipe(autoprefixer({
  cascade: false
}))
.pipe(dest( dest_P.css,{sourcemaps: dest_P.home}))
.pipe(browserSync.stream())
cb()
}

const server = (cb) => {
  browserSync.init({
    server: {
        baseDir: "./src",
        index : 'index.html'
    }
});
watch(["./src/index.html","./src/index.html","./index.html",src_P.scss,src_P.task],{ usePolling: true }, Sass).on('change', browserSync.reload);
}


 const watching = ()  => {watch('src/css/*.scss',{ usePolling: true }, series(Sass)); }

 const  cp_index = (cb) => {return src('src/index.html').pipe(dest(dest_P.home)) }

 const rename_file = (cb) => {
    src(src_P)
    .pipe(rename((path)=> {
      path.basename += ".min";
    }))
    .pipe(dest(dest_P.home))
    cb()
   }

const gulp_concat = (cb) => {
  src([src_P,'!src/css/script.css'])
  .pipe(concat('script.css'))
  .pipe(dest(dest_P.css))
  cb()
}

const img_mini = (cb) => {
 
    src('./src/images/*', '!./src/images/sprite.*')
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
	    imagemin.mozjpeg({quality: 50, progressive: true}),
	    imagemin.optipng({optimizationLevel: 5}),
	    imagemin.svgo({
		plugins: [
			{removeViewBox: true},
			{cleanupIDs: false}
		]
	})
    ]))
    .pipe(rename((path)=> {
        if(path.basename.endsWith('Min')) {
            false;
        }else{

            path.basename += 'Min';
        }
    }))
    .pipe(dest(dest_P.images))
    cb()
}


 

const img_concat = () => {

    var spriteData = src(['./src/images/*',
  '!./src/images/sprite.*'],{})
  .pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.css'
    }));
  
    var imgStream = spriteData.img
    .pipe(buffer())
    .pipe(dest(dest_P.css))
  
  // Pipe CSS stream through CSS optimizer and onto disk
  var cssStream = spriteData.css
    .pipe(csso())
    .pipe(beautify.css())
    .pipe(dest(dest_P.css));
  
  // Return a merged stream to handle both `end` events
  return merge(imgStream, cssStream);
  }
  




  exports.img_concat = series(img_concat);
exports.img_mini = series(img_mini);
 exports.test = series(parallel(Sass),parallel(watching,server));

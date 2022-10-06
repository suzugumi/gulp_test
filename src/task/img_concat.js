
const { gulp ,  task  , src, dest , series  ,   watch   , parallel } = require('gulp');

const spritesmith = require('gulp.spritesmith');
var csso = require('gulp-csso');
const beautify = require('gulp-beautify');
var merge = require('merge-stream');
var buffer = require('vinyl-buffer');
const img_concat = (cb) => {

    var spriteData = src(['../images/*',
  '!../images/sprite.*','!../images/sprite.*'],{})
  .pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.css'
    }));
  
    var imgStream = spriteData.img
    .pipe(buffer())
    .pipe(dest('../images/'));
  
  // Pipe CSS stream through CSS optimizer and onto disk
  var cssStream = spriteData.css
    .pipe(csso())
    .pipe(beautify.css())
    .pipe(dest('../images/'));
  
  // Return a merged stream to handle both `end` events
  return merge(imgStream, cssStream);
  }
  
  exports.img_mini = series(img_concat);


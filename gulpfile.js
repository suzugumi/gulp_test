const { gulp ,  task  , src, dest , series , watch , parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();



// const browser_sync = ()=> {
//     browserSync({
//       server: {
//         baseDir: "src", // ルートとなるディレクトリを指定
//       },
//     });
//     // srcフォルダ以下のファイルを監視
//     watch("src/**", function () {
//       browserSync.reload(); // ファイルに変更があれば同期しているブラウザをリロード
//     });
// }

  

// const test = ()=>  {   watch(['input/*.js', '!input/something.js'], function(cb) {
//     console.log('テスト')
//     // body omitted
//     cb();
//   });
// }

// exports.watch = parallel(browser_sync)


// function Sass(){
//     return  src('css/*.scss')
//      .pipe(sass())
//  .pipe(dest('./css/'))
//  }

//  function watching(){
//     return watch('css/**',Sass)
//  }

// task('Sass', parallel(watching)) 

// const watchFiles = () => {
//     watch('css/**')
//   }
  
//   /**
//    * seriesは「順番」に実行
//    * parallelは並列で実行
//    */
//   exports.default = series(
//     parallel(Sass),
//     parallel(watchFiles)
//   );






// const watcher = watch(['css/*.scss']);

// const tes = () =>{
//     console.log(000);
// }


// const tes2 = () =>{
//     console.log(111);
// }

// function Sass(){
//     return src('src/style.scss')
//      .pipe(sass())
//      .pipe(dest('./src/'))
//  }




//  exports.Sass = Sass
// exports.tes = tes



 




// const watchSassFiles = () => watch("css/*.scss", Sass);

// exports.default = watchSassFiles;


// exports.sass = function() {
//    return src('css/*.scss')
//     .pipe(sass())
//     .pipe(dest('./css/'))
// }


// exports.default = function() {
//     return watch('css/*.scss',  function(cb) {
//    return src('css/*.scss')
//     .pipe(sass())
//     .pipe(dest('./css/'))
// });
// }




// 
// exports.default = function(){
//     watch('./css/*.scss', (cb)=>{
//          src('css/style.scss')
//         .pipe(sass())
//         .pipe(dest('./css/'))
//         cb();
//     })
//     }
    
     
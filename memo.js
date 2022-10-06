const path = require('path');

console.log(path.basename)

// var subject = 'I am your father.';

// // 'father'が含まれるかどうか確認。
// if (subject.indexOf('father') !== -1) {
//   console.log('含まれています!');
// }


// let tockn_Name= {};

// tockn_Name.css = 'aaa'

// console.log(tockn_Name);


// const test_text = (cb) =>{
// cb = 'てすと';

// cb += 'だよーん'
// console.log(cb)
// }
// test_text();


// fs.watch('index.js', function(event, filename) {
//   console.log(event + ' to ' + filename)
// })



// chokidarの初期化
// var watcher = chokidar.watch('./src/css/*.scss',{
//     ignored:/[\/\\]\./,
//     persistent:true
// });

// //イベント定義
// chokidar.watch('./src/css/*.scss').on('ready',function(path,event){
//     //準備完了
//     console.log(event +"ready watching...");
//     Sass()
//     //ファイルの追加
//     watcher.on('add',function(path){
//         console.log(path + " added.");
//     });

//     //ファイルの編集
//     watcher.on('change',function(path){
//       Sass()
//         console.log(path + " changed.");
//         uploadFile();
//     });
// });





// const sartch = fs.watch(src_P.scss,Sass, (eventType, filename) => {
//   console.log(`event type is: ${eventType}`);
//   if (filename) {
//     console.log(`filename provided: ${filename}`);
//   } else {
//     console.log('filename not provided');
//   }
// });

// const Sass = (cb) => {
//       src(src_P.scss,{
//         sourcemaps: true
//     })
//     .pipe( 
//         plumber({        errorHandler: notify.onError('Error:<%= error.message %>') 
//     }))
//     .pipe(sass({outputStyle: 'expanded'}))
//     .pipe(dest( dest_P.css,{sourcemaps: './'}))
//     .pipe(browserSync.stream())
//     .pipe(notify({
//         message: 'Sassをコンパイルしました',
//       onLast: true
//     }))
//     cb();
// }

// const checker = ()=> {chokidar.watch('./src/css/*.scss').on('all', (event, path) => {
//     if(path === src_P.scss){
//     Sass()
//     }
// });
// }


// const Sass = (cb) =>{
//   src(src_P.scss)
//  .pipe(sass())
// .pipe(dest(dest_P.css))
// }



  
  
  
  
  // exports.test2  = series(
      
  //     parallel(watching)
  //    );
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
      
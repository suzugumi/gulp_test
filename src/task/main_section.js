'use strict';

let $MAIN_SLID_ARIA = document.getElementById('MAIN_SLID_ARIA');
let $main_Aria = document.getElementById('main_Aria');
let $MAIN_DELETE = document.getElementById('MAIN_DELETE');
let $hedar_SUB = document.getElementById('hedar_SUB');
let $slidshow_IDs = {
    1: document.getElementById('SLID_SHOW1'), 
    2: document.getElementById('SLID_SHOW2'),
    3: document.getElementById('SLID_SHOW3'), 
    4: document.getElementById('SLID_SHOW4'), 
}
// let $scroll_target = document.getElementById('scroll_target');
let count = 1;
let slid_count =0;

	// window.addEventListener('scroll', function () {
	// 	let $taeget_position  = document.querySelector('#scroll_target').getBoundingClientRect().top;
    //     let Ypotision = this.scrollY;


	// 	// ターゲットの画面トップからの距離
    //     console.log(Ypotision);

	// 	// 画面トップからの距離から画面の高さより小さければ実行する
	// 		if ($taeget_position < Ypotision) {
    //             $hedar_SUB.classList.add('height115px');
	// 		}else {
    //             $hedar_SUB.classList.remove('height115px');
    //         }
	// });


// window.addEventListener('scroll', function(Y){
//     // if($hedar_SUB === window.scrollY())
//     console.log(Y)
// })


const slidshow_CountUp = ()  => {
    slid_count  ++;
    console.log(slid_count );

};

const create_main = function(){
    let i = 0;
    let a_tag;
    let div_tag;
    let url = new Array();
     url = { 
        1:'https://twitter.com/home',
        2:'https://www.amazon.co.jp/gp/cart/view.html?ref_=nav_cart',
        3:'https://www.youtube.com',
        4:'https://w.atwiki.jp/iwamototakakazuuuu/',
    };
    
    for( i =1; i  < 5; i++){
        div_tag = document.createElement('div');
        $main_Aria.appendChild(div_tag);
        div_tag.id = 'SLID_SHOW' + i;
        div_tag.classList.add('main_slidshow' + i);
        // a_tag = document.createElement('a');
        // a_tag.id = 'A_TAG' + i;
        // a_tag.href = url[i];
        // a_tag.className =  'Link';
        // div_tag.appendChild(a_tag);
        
    }

    setInterval((time) => { 
        slidshow_CountUp();

            switch(slid_count){
                case 5:
            document.getElementById('SLID_SHOW1').classList.add('text-blur-out','vibrate-1');


            break;
                case 10:
            document.getElementById('SLID_SHOW2').classList.add('text-blur-out');
            break;
                case 15:
            document.getElementById('SLID_SHOW3').classList.add('text-blur-out');
            break;
                case 20:
        document.getElementById('SLID_SHOW4').classList.remove('text-blur-out');
            document.getElementById('SLID_SHOW1').classList.remove('text-blur-out');
            document.getElementById('SLID_SHOW2').classList.remove('text-blur-out');
            document.getElementById('SLID_SHOW3').classList.remove('text-blur-out');
                slid_count = 0;
            break;

            }
            },1000)
}

create_main();


// const transion_Slidshows = function(){

//     setTimeout(function(){
//      return   $slidshow_IDs[1].classList.add('text-blur-out');
//     }, 3000)
    
// }
// transion_Slidshows();

$MAIN_DELETE.addEventListener('click', ()=>{
    let i = 0;
    let target_Id;
    target_Id   = document.getElementById('SLID_SHOW' + count);
    target_Id.tyles.display = 'none';
    // for(i =1; i < 5; i++){
    //     target_Id   = document.getElementById('SLID_SHOW' + i);
    //     target_Id.classList.remove('main_slidshow' + i);
    // }

    // div_tag.classList.add('NONE');
    // console.log(div_tag);
    console.log(target_Id);
    count ++

},false);


// $MAIN_SLID_ARIA.addEventListener('click', ()=>{
//     let i = 0;
//     for(i= 1; i < 5; i++){
//         console.log(url.i);
//     }


// },false);

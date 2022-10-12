'use strict';

let $MAIN_SLID_ARIA = document.getElementById('MAIN_SLID_ARIA');
let $main_Aria = document.getElementById('main_Aria');
let $main_Aria_480px = document.getElementById('main_Aria_480px');
let $MAIN_DELETE = document.getElementById('MAIN_DELETE');
let $TEST = document.getElementById('TEST');
let $target_Platformmenus = document.getElementById('target_Platformmenus');
let $target_efect1 = document.getElementById('target_efect1');
let $Target_Leon = document.getElementById('Target_Leon')
let count = 1;
let sub_count = 1;
let paused; //一時停止用の真偽値用の箱
let slid_count =0;
let $slidshow_IDs = {
    1: document.getElementById('SLID_SHOW1'), 
    2: document.getElementById('SLID_SHOW2'),
    3: document.getElementById('SLID_SHOW3'), 
    4: document.getElementById('SLID_SHOW4'), 
}
// import { scroll_animation_create } from './scroll_animation.js'

const test_menu_action = function(){  
    let $elm = document.querySelectorAll('#target_Platformmenus li');
    $elm.forEach(item => item.classList.add("scale-in-ver-center"))
}


const slidshow_CountUp = ()  => {
    slid_count  ++;
    // console.log(slid_count );

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

}
let main_animation =   
  setInterval(() => { 
    //↓スクロールのターゲットの位置に来たら一時的にメインアニメーションを停止させる
    if(paused == false){
        // console.log('停止');
        return;
    }
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



            window.addEventListener('scroll', (a)=>{ 
                let Ypotion = Math.floor(window.scrollY);
                //ヘッダーのアニメーションを変更
                let $header = document.getElementById('header');
                let $header_elm =  document.getElementById('header_Targert');
                let target_header = $header_elm.getBoundingClientRect();
                let target_header_top = target_header.top
            
                if(Ypotion > Math.floor(target_header_top) ){
                $header.style.position = 'fixed';
                }else if(Ypotion  < target_header_top){
                $header.style.position = 'sticky';
            
                }
            
             // メインのアニメーションがターゲットの高さまでスクロールした場合に発火
                    let $target_heigtUp = document.getElementById('heigt_up');
                    let $elm = document.querySelectorAll('#target_Platformmenus li');
                    let target = $target_efect1 .getBoundingClientRect()
                    let target_top = target.top
                if(Ypotion > target_top ) {
                    $elm.forEach(item => item.classList.add("scale-in-ver-center","blink-2"))
                    $target_heigtUp.style.height = '53%';
            
                }else if(Ypotion < target_top ){
                    $elm.forEach(item => item.classList.remove("scale-in-ver-center","blink-2"))
                    $target_heigtUp.style.height = '50%';
                }
            
            
            //         let $target_Animation = document.getElementById('target_Animation_Aria');
            //         let target_Animation_aria = $target_Animation.getBoundingClientRect()
            //         let target_Animation_top = target_Animation_aria.top
            
            // if(this.scrollY < target_Animation_top ){
            //     $elm.forEach(item => item.classList.add("scale-in-ver-center","blink-2"))
            // }
            
            
                // メインのアニメーションが一定の高さまでくるとアニメーションを停止・再開
                    let $section01_target = document.getElementById('section01_target');
                    let section01_target_potision = $section01_target.getBoundingClientRect()
                    let target_section01_top =  section01_target_potision.top    
                if(Ypotion > target_section01_top) {
                    // console.log('発火')
                    paused = false;
                   
                }else if(Ypotion <  target_section01_top){
                    // console.log('再開')
                    paused = true;
                    setInterval(main_animation )
                }

                //セパレートキラーエリアの背景画像をスクロールに合わせてアニメーション
                    let $killer_Aria_target = document.getElementById('Taeget_background')
                    let $survivor_Aria_target = document.getElementById('survivor_background');

                    //もしもスクロールの高さが１６００より値が大きかったら背景画像を下に移動させる。
                        if( Ypotion > 1600) {
                            count++
                            sub_count--
                            $killer_Aria_target.style.transform = 'translateY('+ count + 'px)';
                            $survivor_Aria_target.style.transform = 'translateY('+ sub_count + 'px)';
                            console.log("発火");
                    //もしももしもスクロールの高さが２１００に来たら背景画像を元の位置にリセット
                    //このif文は無限に背景画像を下にさげてしまう不具合を修正するためにあります。
                            if(Ypotion  > 2100){
                                count = 0;
                                sub_count =0;
                                $killer_Aria_target.style.transform = 'translateY('+ count + 'px)'
                                $survivor_Aria_target.style.transform = 'translateY('+ sub_count + 'px)'

                            }
                 //もしもスクロールの高さが１６００より値が小さかったら背景画像を元の位置に戻す。
                        }else if(Ypotion  < 1620){                         
                               $killer_Aria_target.style.transform = 'translateY(0)';
                               $survivor_Aria_target.style.transform = 'translateY(0)';
                               count = 0;
                               sub_count =0;

                    }

  
                

                },false);
            

const create_main_480px = function(){
    let i = 0;
    let div_tag;
    
    for( i =1; i  < 5; i++){
        div_tag = document.createElement('div');
        $main_Aria_480px.appendChild(div_tag);
        div_tag.id = 'SLID_SHOW_480px' + i;
        div_tag.classList.add('main_slidshow_480px' + i);
        
    }

    setInterval((time) => { 
        slidshow_CountUp()

            switch(slid_count){
                case 5:
            document.getElementById('SLID_SHOW_480px1').classList.add('text-blur-out','vibrate-1');
            break;
                case 10:
            document.getElementById('SLID_SHOW_480px2').classList.add('text-blur-out');
            break;
                case 15:
            document.getElementById('SLID_SHOW_480px3').classList.add('text-blur-out');
            break;
                case 20:
        document.getElementById('SLID_SHOW_480px4').classList.remove('text-blur-out');
            document.getElementById('SLID_SHOW_480px1').classList.remove('text-blur-out');
            document.getElementById('SLID_SHOW_480px2').classList.remove('text-blur-out');
            document.getElementById('SLID_SHOW_480px3').classList.remove('text-blur-out');
                slid_count = 0;
            break;

            }
            },1000)
}


const switchByWith =()=> {
    if(window.matchMedia('(max-width:480px)').matches){
        create_main_480px();
    }else if((window.matchMedia('(min-width:768px)').matches)){
        create_main();
    }
}


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
window.onload = switchByWith;
window.onresize = switchByWith;
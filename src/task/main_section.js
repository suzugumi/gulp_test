'use strict';

let $MAIN_SLID_ARIA = document.getElementById('MAIN_SLID_ARIA');
let $main_Aria = document.getElementById('main_Aria');
let $main_Aria_480px = document.getElementById('main_Aria_480px');
let $MAIN_DELETE = document.getElementById('MAIN_DELETE');
let $TEST = document.getElementById('TEST');
let $target_Platformmenus = document.getElementById('target_Platformmenus');
let $target_efect1 = document.getElementById('target_efect1');
let $Target_Leon = document.getElementById('Target_Leon')
let $killer_Aria_Button = document.getElementById('killer_Aria_Button');
let $survivor_Aria_Button = document.getElementById('survivor_Aria_Button');
let $Carousel_Main = document.getElementById('Carousel_Main');
let $Carousel_Slider = document.getElementById('Carousel_Slider');
let count = 1;
let sub_count = 1;
let DBD_count = 0;
let paused; //一時停止用の真偽値用の箱
let slid_count =0;
let $slidshow_IDs = {
    1: document.getElementById('SLID_SHOW1'), 
    2: document.getElementById('SLID_SHOW2'),
    3: document.getElementById('SLID_SHOW3'), 
    4: document.getElementById('SLID_SHOW4'), 
}

import { $killer_list_item ,  $survivor_list_item , $curosel_item  } from './test.js'




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
    let url 
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
let killer_TARGET_ID = document.getElementById('kilA_LIST');

$killer_Aria_Button.addEventListener('click',function(){
    console.log($killer_list_item.length);
    console.log(DBD_count )
   let $kil = document.getElementById('killer_aria_TARGET');
   let $suv = document.getElementById('survivor_aria_TARGET');
   let $PIG = document.getElementById('PIG');
   let $SADAKO = document.getElementById('SADAKO');
   let $kil_2 = document.getElementById('killer_aria_TARGET2');
   let $suv_2 = document.getElementById('survivor_aria_TARGET2');
   let $mobs_text1 = document.querySelector('.mobs_text1');
   let $killer_Aria_target = document.getElementById('Taeget_background')
   
//    $killer_list_item
   
   //トグル
   $mobs_text1.classList.toggle('NONE');
   $PIG.classList.toggle('NONE');
   $SADAKO.classList.toggle('NONE');
   $killer_Aria_target.classList.toggle('NONE');
   let $div;
   $div = document.createElement('div');
    let i;

   if(DBD_count  < 1){
    $killer_Aria_Button.textContent = "戻る"
    $kil.style.width = '119%';
    $kil_2.style.width = '119%';
    $suv.style.width = '0%';
    $suv_2.style.width = '0%';
    $div.classList.add('kilA_Aria_wrraper');
    $kil_2.appendChild($div);
    let $ul;
    $ul = document.createElement('ul');
    $ul.classList.add('separete_kileer_animationJS');
    

    for( i =1; i  <  $killer_list_item.length; i++){
        let  $li;
        $li = document.createElement('li');
        let $a;
        $a = document.createElement('a');
        let  $img;
        $img = document.createElement('img');
        $div.appendChild($ul);
        $ul.appendChild($li);
        $li.appendChild($a);
        $a.appendChild($img);
        $img.id  = 'killer_list' + i;
        $img.src =   $killer_list_item[i];
        $img.classList.add('killer_list','fade-in');
    }

    DBD_count  = 1

   }else if(DBD_count  < 2){
    $killer_Aria_Button.textContent = "詳しく見る"
    $kil.style.width = '50%';
    $suv.style.width = '50%';
    $kil_2.style.width = '50%';
    $suv_2.style.width = '50%';
    document.querySelector('#killer_aria_TARGET2').lastElementChild.remove();

    DBD_count  = 0;
   }

  
});





$survivor_Aria_Button.addEventListener('click',function(){
    console.log(DBD_count )
   let $suv = document.getElementById('survivor_aria_TARGET');
   let $kil = document.getElementById('killer_aria_TARGET');
   let $LEON = document.getElementById('LEON');
   let $CHERYL = document.getElementById('CHERYL');
   let $suv_2 = document.getElementById('survivor_aria_TARGET2');
   let $kil_2 = document.getElementById('killer_aria_TARGET2');
   let $mobs_text1 = document.querySelector('.mobs_text1');
   let $survivor_Aria_target = document.getElementById('survivor_background');


   //トグル
   $mobs_text1.classList.toggle('NONE');
   $LEON.classList.toggle('NONE');
   $CHERYL.classList.toggle('NONE');
   $survivor_Aria_target.classList.toggle('NONE');
   let $div;
   $div = document.createElement('div');
    let i;


   if(DBD_count  < 1){

    $suv.style.width = '119%';
    $suv_2.style.width = '119%';
    $survivor_Aria_Button.textContent = "戻る"
    $kil.style.width = '0%';
    $kil_2.style.width = '0%';
    $div.classList.add('Survivor_Aria_wrraper');
    $suv_2.appendChild($div);
    let $ul;
    $ul = document.createElement('ul');
    $ul.classList.add('separete_Survivor_animationJS');
    for( i =1; i  <  $survivor_list_item.length; i++){
        let  $li;
        $li = document.createElement('li');
        let $a;
        $a = document.createElement('a');
        let  $img;
        $img = document.createElement('img');
        $div.appendChild($ul);
        $ul.appendChild($li);
        $li.appendChild($a);
        $a.appendChild($img);
        $img.id  = 'Survivor_list' + i;
        $img.src =   $survivor_list_item[i];
        $img.classList.add('Survivor_list','fade-in');
    }

    DBD_count  = 1;

  
   }else if(DBD_count  < 2){
    $survivor_Aria_Button.textContent = "詳しく見る"
    $kil.style.width = '50%';
    $suv.style.width = '50%';
    $kil_2.style.width = '50%';
    $suv_2.style.width = '50%';
    document.querySelector('#survivor_aria_TARGET2').lastElementChild.remove();

    DBD_count  = 0;
   }
});






let $main_border01;
let $main_border02;
let $sub_border01;
let $sub_border02;
let $main_img 
let $sub_img;

$main_border01 = document.createElement('div');
$main_border02 = document.createElement('div');


$main_border01.classList.add('main_border_line_01');
$main_border02.classList.add('main_border_line_02');

// let $main_border_line_01 = $div.classList.add('main_border_line_01');
// let $main_border_line_02 = $div.classList.add('main_border_line_02');

for( let i= 0; i  <  $curosel_item.length; i++){
    $sub_border01 = document.createElement('div');
    $sub_border02 = document.createElement('div');
    $sub_border01.classList.add('sub_border_line_01');
    $sub_border02.classList.add('sub_border_line_02');
    $sub_img = document.createElement('img');
    $sub_img.src = $curosel_item[i];
    $sub_img.id = 'curosel_item' + i;
    $main_img = document.createElement('img');
    $main_img.src = $curosel_item[i];
    $main_img.className = 'curosel_main_imgs';

    $sub_img.className = 'carousel_slider_imgs';
    $sub_img.classList.add('carousel_slider_item' + i);

    $Carousel_Slider.appendChild(  $sub_border01);
    $Carousel_Slider.appendChild(  $sub_border02);
    $Carousel_Slider.appendChild( $sub_img );
    $Carousel_Main.appendChild($main_img);

}


$Carousel_Main.appendChild(    $main_border01 );
$Carousel_Main.appendChild(    $main_border02 );

let $target_imgs = document.getElementsByClassName('carousel_slider_imgs');
let $curosel_main_imgs = document.getElementsByClassName('curosel_main_imgs');
let $main_border_line_01 = document.getElementsByClassName('main_border_line_01');
let $main_border_line_02 = document.getElementsByClassName('main_border_line_02');

for(let i = 0; i < $target_imgs.length; i++){
    $curosel_main_imgs[i].addEventListener('click', function(e){
        console.log(`これは${i}番目です`)
    });
         
}




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



window.onload = switchByWith;
window.onresize = switchByWith;
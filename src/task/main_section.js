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
let $killer_list_item = [
    'https://deadbydaylight.com/static/f43553c6e729f1d05dee195a58c5c0c4/288b3/killer_trapper_headshot_a7962b1bc9.webp',
    'https://deadbydaylight.com/static/16abb5a278b8bce98cfffd04e400494a/288b3/killer_thewraith_headshot_b3af7f4350.webp',
    'https://deadbydaylight.com/static/27e766516d2935990054cb51a23bc207/288b3/killer_thehillbilly_headshot_848632fc4e.webp',
    'https://deadbydaylight.com/static/96a259859b4a29be6cb540a5ee4fe04f/288b3/killer_thenurse_headshot_215590e525.webp',
    'https://deadbydaylight.com/static/ebd074dac61bb506b52d5e68570f432c/288b3/killer_thetuntress_headshot_d4300a20dc.webp',
    'https://deadbydaylight.com/static/837c7e60ca9c1406f21c0e4f6cc8fc3b/c8e23/killer_theshape_headshot_8de0a02ce7.webp',
    'https://deadbydaylight.com/static/ae6a4ab0ee8b5e46c1ab93710ee2ccc3/288b3/killler_thehag_headshot_04ae638c4e.webp',   
    'https://deadbydaylight.com/static/9d89f1255a64ac66ad4c718c9ff6e709/288b3/killer_thedoctor_headshot_0a6c6a9169.webp',
    'https://deadbydaylight.com/static/5e931981e39e25732fd4b95b5b86795e/288b3/killer_thecannibal_headshot_c784f23cc7.webp',
    'https://deadbydaylight.com/static/fbe040c0ebb2ad8c26045eb21864b88a/288b3/killer_thenightmare_headshot_89004c1b2e.webp',
    'https://deadbydaylight.com/static/4eda46eb02ad01afd887af5ac6269aed/288b3/killer_clown_headshot_cc32951133.webp',
    'https://deadbydaylight.com/static/b5cbb55afffbd1ffc0a038d5104df05d/288b3/killer_thespirit_headshot_40c577303f.webp',
    'https://deadbydaylight.com/static/5214b77a40db439087682d8b1c406f51/288b3/killer_legion_headshot_6495e2100b.webp',
    'https://deadbydaylight.com/static/ae3ee293f72068b851bf56b3debddc52/288b3/killer_theplague_headshot_8490178071.webp',
    'https://deadbydaylight.com/static/6ce370b0bcc55f58bde16722219ac5d1/288b3/killer_theghostface_headshot_f785df76cd.webp',
    'https://deadbydaylight.com/static/7e067f20ed42bca99851561df49c6ce3/288b3/killer_theoni_headshot_b1bbf4bd3d.webp',
    'https://deadbydaylight.com/static/b035b6dbd2b454ae0f53a51d377dd5eb/288b3/killer_thedeathslinger_headshot_45a3894f58.webp',
    'https://deadbydaylight.com/static/2ff2598945dbba4178548484d097d04a/288b3/killer_theexecutioner_headshot_3aae2147cb.webp',
    'https://deadbydaylight.com/static/884573dc7fc58b86527cb46da07e0657/288b3/killer_thetwins_headshot_3b9b158395.webp',
    'https://deadbydaylight.com/static/22f6037185c690ca9782c068199f40ea/288b3/killer_thetrickster_headshot_24d3be552d.webp',
    'https://deadbydaylight.com/static/86a7b998342c964eba51d9df1d4f7134/288b3/killer_nemesis_headshot_c3e528e0d9.webp',
    'https://deadbydaylight.com/static/681aa7d8961ec4e569161a862e630928/288b3/killer_thepinhead_headshot_261ae326c0.webp',
    'https://deadbydaylight.com/static/6aeb356a9673e25aae461cd4e5e1dcaf/288b3/killer_theartist_headshot_6e46a3ebcb.webp',
    'https://deadbydaylight.com/static/81ef3da7bb462465cdc8827a8e2f58c8/2892f/killer_theonryo_headshot_e9c9df9699.webp',
    'https://deadbydaylight.com/static/2b25c31e1c5ba93cd97d2f98c8967d6b/288b3/killer_thedredge_headshot_0dbe4f5cec.webp',
    'https://deadbydaylight.com/static/963f3686e7a63690a2bba56ca9cbc93a/288b3/killer_the_mastermind_headshot_fe0418f8c1.webp',
]

let $survivor_list_item = [
    'https://deadbydaylight.com/static/e5627292159dc8c69e4e68d9d0634938/288b3/survivor_dwight_headshot_bb6a42f2bf.webp',
    'https://deadbydaylight.com/static/fab94fa7f8b7628ebea4422d30905817/288b3/survivor_meg_headshot_f033880a7f.webp',
    'https://deadbydaylight.com/static/67533b00d669327b0076194b8ab5c293/288b3/survivor_claudette_headshot_5ea4b938bf.webp',
    'https://deadbydaylight.com/static/393b719a9f596ab626f9c7acb3c0579b/288b3/survivor_jake_headshot_8d1c04a058.webp',
    'https://deadbydaylight.com/static/9e9ec6eb385ff4106f7c9a3ae079367e/288b3/survivor_williambill_headshot_c4cfe89911.webp',
    'https://deadbydaylight.com/static/0a7829436a63b5d9c9d8b0c096983711/288b3/survivor_nea_headshot_3e526fd4a6.webp',
    'https://deadbydaylight.com/static/b89c948174854f2a26e9fb6821f098c9/c8e23/survivor_davidking_headshot_2dc52df0cb.webp',
   ' https://deadbydaylight.com/static/7d6bcd1da451f9e2e6099c7a31069d19/288b3/survivor_laurie_headshot_c5eb02c8e1.webp',
    'https://deadbydaylight.com/static/1a728b1fbba7f085b98a1a6d34f7a274/288b3/survivor_ace_headshot_fc6542dd08.webp',
    'https://deadbydaylight.com/static/25749860f0c242274b0382e44b825641/288b3/survivor_fengmin_headshot_5d8d5d5b1b.webp',
    'https://deadbydaylight.com/static/18e312ebf0e50a387d319701e81fb363/288b3/survivor_quentin_headshot_8618edc4cf.webp',
   ' https://deadbydaylight.com/static/1bb78d15a1310fab87da632d1d5e862a/288b3/survivor_davidtapp_headshot_0e038491e4.webp',
    'https://deadbydaylight.com/static/30f7e93fe527728ac211f9b2124799cf/288b3/survivor_kate_headshot_82cb6a56b0.webp',
   ' https://deadbydaylight.com/static/257fe2984b98e9710fb5798e357e7ef2/288b3/survivor_adam_headshot_c909c1a1e3.webp',
   ' https://deadbydaylight.com/static/7284fab70f13c24830b8c56411916a29/288b3/survivor_jeffjohanson_headshot_1947956da0.webp',
   ' https://deadbydaylight.com/static/826afd1db116e7dce3ce221a3d04c644/288b3/survivor_jane_headshot_3f82d0c552.webp',
   ' https://deadbydaylight.com/static/04642390dfc2392f20890f3caf84887b/288b3/survivor_ash_headshot_d0cc0338f9.webp',
   ' https://deadbydaylight.com/static/8fd0714588c4c01d0f684746edf72a66/288b3/survivor_yuikimura_headshot_e8af4600e7.webp',
   ' https://deadbydaylight.com/static/f0a4bc2d0619a5c4d422cd56d8b14d3a/288b3/survivor_zarina_headshot_df0ffa4357.webp',
   ' https://deadbydaylight.com/static/bc837c0b98f6ad1154febfde26588028/288b3/survivor_cheryl_headshot_c6a970e9e3.webp',
   ' https://deadbydaylight.com/static/8a04667b2e29bdece0811d1adb6a98dc/288b3/survivor_felix_headshot_b760578626.webp',
   ' https://deadbydaylight.com/static/7c967f8b457cb57f1477f547eab2871e/288b3/survivor_elodie_headshot_ae4174b7c8.webp',
   ' https://deadbydaylight.com/static/ed53774c03401a3637e6c0ce3814703e/288b3/survivor_yunjinlee_headshot_2ec8575d05.webp',
   ' https://deadbydaylight.com/static/552cf8aa8dd69b9de0bf26431ec76a11/288b3/survivor_jill_headshot_1d01b0fecb.webp',
   ' https://deadbydaylight.com/static/894467415ec4a5066680c2e82c683cda/288b3/survivor_leon_headshot_e379b63dae.webp',
   ' https://deadbydaylight.com/static/c07af037ade4c273cc1e0c95e17c4aba/288b3/survivor_mikaela_headshot_b7adcf51c6.webp',
   ' https://deadbydaylight.com/static/3b18905fa36a9d17b635593d09f89ebc/288b3/survivor_jonah_headshot_d9304c915d.webp',
   ' https://deadbydaylight.com/static/b648b7b93767f25f3224b3ffea5b75a0/fcdaf/survivor_yoichi_headshot_5451bcc1b8.webp',
   ' https://deadbydaylight.com/static/8d6cb9cb6979fa007101e21e159dd610/288b3/Survivor_Haddie_1_2x_be9ca1da1b.webp',
   ' https://deadbydaylight.com/static/651263f1fbfff4c1e855e50a9b7f779a/288b3/survivor_rebecca_chambers_headshot_7a0022e83d.webp',
   ' https://deadbydaylight.com/static/1a7f8fd7838f10bfd6de9ad6954436a3/288b3/survivor_ada_wong_headshot_32e938f376.webp',
    
    
]

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
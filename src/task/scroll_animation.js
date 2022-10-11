
let scroll_animation_create = function(){
window.addEventListener('scroll', (a)=>{ 
let $target_Platformmenus = document.getElementById('target_Platformmenus');
let $target_efect1 = document.getElementById('target_efect1');
    //ヘッダーのアニメーションを変更
    let $header = document.getElementById('header');
    let $header_elm =  document.getElementById('header_Targert');
    let target_header = $header_elm.getBoundingClientRect();
    let target_header_top = target_header.top

    if(window.scrollY  > target_header_top ){
    $header.style.position = 'fixed';
    }else if(window.scrollY  < target_header_top){
    $header.style.position = 'sticky';

    }

 // メインのアニメーションがターゲットの高さまでスクロールした場合に発火
        let $target_heigtUp = document.getElementById('heigt_up');
        let $elm = document.querySelectorAll('#target_Platformmenus li');
        let target = $target_efect1 .getBoundingClientRect()
        let target_top = target.top
    if(window.scrollY  > target_top ) {
        $elm.forEach(item => item.classList.add("scale-in-ver-center","blink-2"))
        $target_heigtUp.style.height = '53%';

    }else if(window.scrollY < target_top ){
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
    if(window.scrollY > target_section01_top) {
       
        // console.log('発火')
        paused = false;
       
    }else if(window.scrollY <  target_section01_top){
        // console.log('再開')
        paused = true;
        setInterval(main_animation )
    }
    },false);
}

export {  scroll_animation_create }

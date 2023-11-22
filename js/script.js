// ======================
        // manu fix
// ======================
let main_menu = document.querySelector('.main_menu')

window.addEventListener('scroll',()=>{
  let scrolling = window.scrollY

  if(scrolling > 200){
    main_menu.classList.add('menu_fixs')
  }else{
    main_menu.classList.remove('menu_fixs')
  }
  
})


//===== back to top====

let back_tp = document.querySelector('.back_tp')


window.addEventListener('scroll',()=>{
  let srolling = window.scrollY
   
  if(srolling > 500){
    back_tp.classList.add('back_tp_fix')
  }else{
    back_tp.classList.remove('back_tp_fix')
  }
})

back_tp.addEventListener('click',()=>{
  window.scroll({
    top : 0,
    behavior : "smooth"
  })
})

  $(document).ready(function () {
    var elias = document.querySelectorAll("#NZoomImg")
    var arr = Array.from(elias)
    arr.map((item, index) => {
        let t = item,
            e = t.getAttribute("data-NZoomscale") <= 0 ? 1 : t.getAttribute("data-NZoomscale"),
            s = t.clientWidth,
            o = t.clientHeight;
        item.parentElement.classList.add(`NZoomContainer${index}`)
        let i = $(`.NZoomContainer${index}`),
            n = item;
        i.mouseenter(function () {
            item.style.cursor = "crosshair"
            item.style.transition = "0.2s"
            item.style.transform = `scale(${e})`
        })
        i.mousemove(function (t) {
            let e = $(this).offset(),
                x = (t.pageX - e.left) / 380 * 100 <= 100 ? (t.pageX - e.left) / 380 * 100 : 100,
                c = (t.pageY - e.top) / 380 * 100 <= 100 ? (t.pageY - e.top) / 380 * 100 : 100;
            item.style.transformOrigin = `${x}% ${c}%`

        })
        i.mouseleave(function () {
            item.style.transition = "0.2s"
            item.style.transform = "scale(1)"
        })
    })

})  


//=====blog popular slider====

$('.wrapper_post').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false ,
    autoplaySpeed: 2000,
    prevArrow: '<i class="fa-solid fa-angle-left prevArrow"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right nextArrow"></i>',

  });

//=====blog popular slider====

$('.counter').counterUp({
    delay: 10,
    time: 1000
});




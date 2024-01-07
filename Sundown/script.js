const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var element = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
element.addEventListener("mouseenter", function(){
    fixed.style.display = "block";
})
element.addEventListener("mouseleave", function(){
    fixed.style.display = "none";
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
      });
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

swiperAnimation()
loaderAnimation()

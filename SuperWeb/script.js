function loading() {
  var tl = gsap.timeline();
  tl.to("#yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.7,
    ease: "expo.out",
  });

  tl.from(
    "#yellow2",
    {
      top: "100%",
      delay: 0.5,
      duration: 0.7,
      ease: "expo.out",
    },
    "anim"
  );

  tl.to(
    "#loader h1",
    {
      delay: 0.6,
      duration: 0.7,
      color: "black",
    },
    "anim"
  );

  tl.to("#loader", {
    opacity: 0,
  });
  tl.to("#loader", {
    display: "none",
  });
}
loading();

function loco(){
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  
  document.querySelector("#footer h2").addEventListener("click", () => {
    scroll.scrollTo(0)
  })
  
  var elems = document.querySelectorAll("#elem")
  var page2 = document.querySelector("#page2")
  elems.forEach(function(ele){
      ele.addEventListener("mouseenter", function(){
        var bgImag = ele.getAttribute("data-img")
        page2.style.backgroundImage = `url(${bgImag})`
      })
  })
}
loco();
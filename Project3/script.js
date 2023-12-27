var tl = gsap.timeline();
tl
    .from([".nav-head",".nav-last"], {
        delay: 1,
        opacity: 0,
        y:20
    })

    .from(".nav-child", {
        delay: .2,
        opacity: 0,
        y:20
    })
    
    .from(".img1",{
        scale: 1.6,
        opacity: 0,
        x: -60
    })
    .from(".img3",{
        scale: 1.6,
        opacity: 0,
        x: 60
    })

    .from(".img2",{
        scale: 1.5,
        opacity: 0,
        x: -60
    })
    .from(".img4",{
        scale: 1.5,
        opacity: 0,
        x: 60
    })

    .from(".mid-section", {
        opacity: 0,
        y: 30
    })
    .from(".mid-section button", {
        delay: 1,
        opacity: 0,
        y: 20
    })

    .from(".aero",{
        scale: 0.1,
        opacity: 0
    })
    .to(".aero", {
        y:20,
        yoyo: "true",
        repeat: "-1"
    })

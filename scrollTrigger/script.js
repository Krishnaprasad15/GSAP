gsap.to("#box1",{
    rotate:360,
    duration:3,
    delay:1,
    // scrub:2,
    scale:0,
    repeat:-1
})
gsap.to("#box2",{
    rotate:360,
    duration:3,
    delay:1,
    scrollTrigger:{
        trigger:"#box2",
        scroller:"body",
        scrub:2
    },
    scale:0,
    // repeat:-1
})
gsap.to("#box3",{
    rotate:360,
    duration:3,
    delay:1,
    scrollTrigger:{
        trigger:"#box3",
        scroller:"body",
        scrub:2
    },
    scale:0,
    // repeat:-1
})
// IN GSAP THERE ARE TWO THINGS TO ANIMATE ANYTHING
//     1. GSAP.TO      - FROM  INITIAL POS TO FINAL POSITION
//     2. GSAP.FROM    - FROM FINAL POSITION TO INITIAL POSITION BASICALLY REVERSE OF TO.ANIMATE

// WE CAN MOVE ANYTHING THROUGH X AND Y AXIS MENTIONING X:__PIXELS AND Y:__PIXELS
// BUT THE THING IS WE CANT SEE ANY ANIMATION BUT THE THING WE WANT TO ANIMATE IS AT IT'S FINAL POS TO SEE THE ANIMATION WE USE DURATION:__ SECONDS AND A DELAY:__ SECONDS

// IF WE WANT TO ROTATE THE BOX WE SIMPLY USE THE ROTATE:__ DEGREES

// gsap.to("#box2",{
//     x:1000,
//     y:300,
//     backgroundColor:"red",
//     duration:2,
//     delay:1,
//     rotate:360,
//     // repeat:-1
//     // scale:0.5
// })

// gsap.from("#box2",{
//     x:1000,
//     y:300,
//     duration:2,
//     delay:1,
//     rotate:360,
// })

// ***** ANIMATING TEXTS *****

// gsap.to("h1",{
//     x:600,
//     duration:3,
//     delay:1,
//     color:"black"
//     // repeat:-1
// })
// gsap.to("h2",{
//     x:600,
//     duration:3,
//     delay:2,
//     color:"black"
//     // repeat:-1
// })
// gsap.to("h3",{
//     x:600,
//     duration:3,
//     delay:3,
//     // repeat:-1
//     color:"black"
// })

// ***** ANIMATING THE SAME TAG TEXTS ****

// gsap.to("h1",{
//     x:600,
//     duration:2,
//     dealy:1,
//     color:"orange",
//     stagger:1, // stagger is used in the case of same tag elements so that all the texts with same tag won't move at the same time according to the stagger dealy : 1s 2s ....
//     repeat:-1, // used to repeat the animation for an infinite animation we use -1 value
//     yoyo:true // boolean value of T/F for repeating the animation
// })


// **** TIMELINE ****

// IT IS A PROCESS WHERE THE ANIMATIONS TAKES IN SYNCHRONOUS ORDER I.E IF THERE ARE MULTIPLE STRINGS TO BE ANIMATED THEY ANIMATE ACCORDING TO THE DELAY IN ASYNCHRONOUS ORDER BUT TO ANIMATE IN ORDER IRRESPECTIVE OF THE DELAY WE USE TIMELINE
let tl= gsap.timeline()

tl.to("h1",{
    x:600,
    duration:1,
    delay:3,
    color:"black"
})
tl.to("h2",{
    x:600,
    duration:1,
    delay:1,
    color:"black"
})
tl.to("h3",{
    x:600,
    duration:1,
    delay:2,
    color:"black"
})

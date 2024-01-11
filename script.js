const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

let mouseMove=()=>{ 

let video=document.querySelector(".video-container")
let play=document.querySelector(".play")     

video.addEventListener("mouseenter",function(){
    gsap.to(play,{
        scale:1,
        opacity:1
    })
})

video.addEventListener("mouseleave",function(){
    gsap.to(play,{
        scale:0,
        opacity:0
    })
})

video.addEventListener("mousemove",function(dets){
    gsap.to(".play",{
        left:dets.x,
        top:dets.y
    })
})
}
mouseMove()

let loading=()=>{
    gsap.from(".page1 h1",{
        y:100,
        opacity:0,
        delay:0.7,
        duration:0.5,
        stagger:0.2
    })

    gsap.from(".page1 .video-container",{
        scale:0.8,
        opacity:0,
        delay:1.5,
        duration:1,
    })
}
loading()

document.querySelector(".page4").addEventListener("mousemove",function(dets){
    gsap.to(".circle",{
        left:dets.x-50,
        top:dets.y-30
    })
})
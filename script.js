var tl = gsap.timeline()
tl.from("#nav .logo , #nav h2",{
    y: -100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.3
})
tl.from('#main h1',{
    y:120,
    opacity:0,
    stagger:0.3,
    
})
tl.from("#main img ",{
    scale:0,
   
})
tl.to("h5",{
    y:30,
    repeat: -1,
    duration:0.7,
    yoyo:true
})

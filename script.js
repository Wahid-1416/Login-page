
function tl() {
    
    var t1=gsap.timeline()
    t1.from("nav",{
        opacity:0,
        duration:.5,
        delay:1
        
    })
    t1.from("#logo",{
        y:-100,
        opacity:0,
        duration:1
    })
    t1.from("#nav-part2",{
        y:-100,
        opacity:0,
        duration:1,
    })
    
    t1.from("#particles-js",{
        opacity:0,
        duration:.5
    })
    
    t1.from("#box",{
        scale:0,
        opacity:0,
        duration:1
    })
    t1.from("#but h3",{
        scale:2,
        opacity:0,
        duration:1
    })
    
}

tl()



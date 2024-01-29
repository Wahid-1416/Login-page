
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




var qu= document.querySelector("#particles-js");
var circle=document.querySelectorAll(".circle");
var box=document.querySelector("#box");

console.log(circle);
qu.addEventListener("mousemove",function(){
    
    for (let c of circle) {
        console.log(c);
        c.style.display="Block";
      }
})


box.addEventListener("mouseout",function(){
    
    for (let c of circle) {
        console.log(c);
        c.style.display="Block";
      }
})


qu.addEventListener("mousemove",function(details){
    
    let X=details.clientX;
    let Y=details.clientY;

    for (let c of circle) {
        c.style.left=String(X)+"px";
        c.style.top=String(Y)+"px";
        
      }

})



box.addEventListener("mouseover",function(details){
    for (let c of circle) {
        c.style.display="none";
        
      }

})
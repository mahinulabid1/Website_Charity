console.log("script works");
let nav= document.getElementById("navigation");
document.addEventListener("scroll" , (event)=>{
    let pageScrolled= window.pageYOffset;
    if(pageScrolled > 100){
        nav.classList.add("sticky-top");
        nav.style.animationName="stickynav";
        nav.style.animationDuration="1s";
        
    }else if(pageScrolled <= 100){
        nav.classList.remove("sticky-top");
        nav.style.animation="";
    }
});
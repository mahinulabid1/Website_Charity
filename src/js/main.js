const nav= document.getElementById("navigation");
const hamBarOpen= document.querySelector(".ham-bar-container");
const hambarClosebtn=document.getElementById("nav-close");
const mobileNavSection= document.querySelector(".mobile-nav");

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



// NAVIGATIN OPEN AND CLOSE BUTTON
hamBarOpen.addEventListener("click", ()=>{
    mobileNavSection.classList.remove("display-none");
    document.querySelector("html, body").style.overflowY="hidden";
});

hambarClosebtn.addEventListener("click", ()=>{
    mobileNavSection.classList.add("display-none");
    document.querySelector("html, body").style.overflowY="scroll";
})
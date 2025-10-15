var trigramBtn = document.getElementById("trigram");
var miniNav = document.getElementById("dropdownNav");

trigramBtn.addEventListener("click",()=>{
    if (miniNav.style.display == "none"){
        miniNav.style.display='flex';
        setTimeout(()=>{
            miniNav.style.opacity='1';
        },10);
    }
    else{
        miniNav.style.opacity="0";
        setTimeout(()=>{
            miniNav.style.display="none"
        },300);
    }
})

var navLink=miniNav.querySelectorAll('a');
navLink.forEach(link=>{
    link.addEventListener("click",()=>{
        miniNav.style.display="none"
    })
})
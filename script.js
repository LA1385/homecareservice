// Navbar Area
var toggleIcon = document.getElementById("trigram");
var dropdownVav = document.getElementById("dropdownNav");
var returnBtn = document.getElementById("return");
toggleIcon.onclick=function(){
    dropdownVav.style.right="0px"
}

returnBtn.onclick=function(){
    dropdownVav.style.right="-300px"
}


// Non-Functioning Button
var loginBtn=document.getElementById("login");
var signInBtn = document.getElementById("sign-up");
var bookingBtn=document.querySelectorAll(".recruit");
var choosePlanBtn=document.querySelectorAll(".plan");
var subscribeBtn=document.getElementById("subscribe");

loginBtn.addEventListener("click",()=>{
    alert("The login process isn't available")
})

signInBtn.addEventListener("click", () => {
    alert("The sign-in process isn't available")
})

bookingBtn.forEach(bookingBtn=>{
    bookingBtn.addEventListener("click",()=>{
        alert("Sorry the booking process isn't available")
    })
})

choosePlanBtn.forEach(choosePlanBtn=>{
    choosePlanBtn.addEventListener("click", () => {
    alert("The choose plan process isn't available")
})
})

subscribeBtn.addEventListener("click", () => {
    alert("You can't subscribe yet. Thank you")
})

// Copyright Update year
var Year=document.getElementById("year");
var currentDate=new Date();
var currentYear=currentDate.getFullYear();
Year.innerHTML=currentYear;


// Changing the Image in the service section 
var services=[
    { "imageUrl": "images/services/nursingcare.jpg" },
    { "imageUrl": "images/services/medicalassistance.jpg" },
    { "imageUrl": "images/services/physotherapy.jpg" },
    { "imageUrl": "images/services/medicalequipmnt.jpg" },
    { "imageUrl": "images/services/labtest.jpg" },
    { "imageUrl": "images/services/motherbabycare.jpg" },
    { "imageUrl": "images/services/childcare.jpg" },
    { "imageUrl": "images/services/personal-care.jpg" },
]
var images = document.getElementsByClassName("image");
var serviceItem=document.getElementsByClassName("service-item");
var imageHead = document.getElementById("image-head");
for (let a=0;a<serviceItem.length;a++){
          serviceItem[a].addEventListener("click",()=>{
            imageHead.src=services[a].imageUrl;
    })
}

// when the heart button is clicked
var heartBtn=document.getElementsByClassName("heart");
var isClicked=false;
for (let b=0;b<heartBtn.length;b++){
    heartBtn[b].addEventListener("click",()=>{
        if (isClicked==false){
        isClicked=true;
        heartBtn[b].style.background="red";
        heartBtn[b].style.color = "white"
        }
        else{
            isClicked=false;
            heartBtn[b].style.background = "white";
            heartBtn[b].style.color = "black"
        }
    })
}


// function when any navigatting button has been clicked
 var videos=[
    {
        "videoUrl": "https://www.youtube.com/embed/S4wWClQhZaA?si=BH9QNTjVTQ-qyUvM"
    },
    {
        "videoUrl": "https://www.youtube.com/embed/I6TqSwlDtoY?si=zGyn07zmcm348JZG"
    },
    {
        "videoUrl": "https://www.youtube.com/embed/EnyGeD-q-zI?si=ME2Xr6F1uX35YdfZ"
    }
  ]
var mainVideo = document.getElementById("main-video");
var nextArrow=document.getElementById("prev");
var previousArrow=document.getElementById("next");

var currentIndex = 0;
nextArrow.onclick = function () {
    if (currentIndex == videos.length - (1)) {
        currentIndex = 0;
    }
    else {
        currentIndex++;
    }
    var video = videos[currentIndex].videoUrl;
    mainVideo.src=video;
}

previousArrow.onclick = function () {
    if (currentIndex == 0) {
        currentIndex = 2;
    }
    else {
        currentIndex--;
    }
    var video = videos[currentIndex].videoUrl;
    mainVideo.src = video;
}



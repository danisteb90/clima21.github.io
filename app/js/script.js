const btnHamburguer = document.querySelector("#btnHamburguer");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fade = document.querySelectorAll(".has-fade");
var swiper = new Swiper;

// Counter

let valueDisplays = document.querySelectorAll(".num");
let interval = 8000;

btnHamburguer.addEventListener("click", function(){
    
    if(header.classList.contains("open")){//Close menu
        body.classList.remove("noscroll");
        header.classList.remove("open");
        fade.forEach(function(element){
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
        })
        
    } else{// Opens menu
        body.classList.add("noscroll");
        header.classList.add("open");
        fade.forEach(function(element){
            element.classList.remove("fade-out");
            element.classList.add("fade-in");
        })
    }
})

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplay.textContent = startValue;

        if(startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
})

//Swiper
new Swiper(".slide-content", {
    slidesPerView: 2,
    spaceBetween: 40,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        720: {
            slidesPerView: 2,
        },
    }
});

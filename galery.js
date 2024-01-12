




var left_button = document.getElementById("left");
var right_button = document.getElementById("right");
var carousel = document.querySelector(".carousel");
var car_width = carousel.offsetWidth;
console.log(car_width)
left_button.addEventListener("click",()=>{
    console.log("tjo");
    carousel.scrollLeft = -car_width;
    
})

right_button.addEventListener("click",()=>{
    carousel.scrollLeft = car_width;
})
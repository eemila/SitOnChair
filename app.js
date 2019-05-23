document.addEventListener("DOMContentLoaded", function(){

    /* slider */ 
    var nextBtn = document.querySelector(".slider-next");
    var prevBtn = document.querySelector(".slider-prev"); 
    var imgs = document.querySelectorAll(".slider-slide"); 
    
    var imgsArr = Array.from(imgs); 
    var activeImg = 0;
    
    imgsArr[activeImg].classList.add("slider-slide-active")
    
    
    nextBtn.addEventListener("click", function(){
        imgsArr[activeImg].classList.remove("slider-slide-active");
        if(activeImg === imgsArr.length - 1){
            activeImg = 0;
        } else {
            activeImg++
        }
        imgsArr[activeImg].classList.add("slider-slide-active")
    });
    
    prevBtn.addEventListener("click", function(){
        imgsArr[activeImg].classList.remove("slider-slide-active");
        if(activeImg === 0){
            activeImg = imgsArr.length - 1;
        } else {
            activeImg--;
        }
        imgsArr[activeImg].classList.add("slider-slide-active")
    });
    


})

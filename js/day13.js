document.addEventListener("DOMContentLoaded", () => {
    let UI = {
        sliderImages: document.querySelectorAll(".slide-in")
    };

    function checkSlide(e){
        console.log(e);
        UI.sliderImages.forEach(image => {
            const slideInAt = (window.scrollY + window.innerHeight) - image.height/2;
            const imageBottom = image.offsetTop + image.height;
            const isHalfDown = slideInAt > image.offsetTop;
            const isScrolledPast = window.scrollY > imageBottom;
            if(isHalfDown && !isScrolledPast){
                image.classList.add("active");
            }else{
                //image.classList.remove("active");
            }
        });
    }

    window.addEventListener("scroll", debounce(checkSlide));

});

function debounce(func, wait = 10, immediate = true){
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function(){
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
}
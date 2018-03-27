document.addEventListener("DOMContentLoaded", () => {
    let UI = {
        sliderImages: document.querySelectorAll("slide-in")
    };

    function checkSlide(e){
        console.log(e);
    }

    window.addEventListener("scroll", checkSlide);

});
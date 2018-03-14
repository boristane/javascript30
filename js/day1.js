document.addEventListener("DOMContentLoaded", ()=>{
    document.addEventListener("keydown", playSound);

    let keys = document.querySelectorAll(".key");
    keys.forEach((key)=>{
        key.addEventListener("transitionend", removeTransition);
    });

    function playSound(e){
        e.preventDefault();
        let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        if(!audio) return;
        key.classList.add("playing");
        audio.currentTime = 0;
        audio.play();
    }

    function removeTransition(e){
        if(e.propertyName !== "transform") return;
        this.classList.remove("playing");
    }
});
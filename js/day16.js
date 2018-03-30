document.addEventListener("DOMContentLoaded", () => {
    let UI = {
        hero: document.querySelector(".hero"),
        text: document.querySelector("h1")
    };

    const walk = 100; 

    function shadow(e){
        const width = UI.hero.offsetWidth;
        const height = UI.hero.offsetHeight;
        let x = e.offsetX;
        let y = e.offsetY;

        if(this != e.target){
             x+= e.target.offsetLeft;
             y+= e.target.offsetTop;
        }

        const xWalk = Math.round((x/width * walk) - (walk / 2));
        const yWalk = Math.round((y/height * walk) - (walk / 2));
        UI.text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(10, 200, 155, 0.5)`;
   
    }

    UI.hero.addEventListener("mousemove", shadow);
});
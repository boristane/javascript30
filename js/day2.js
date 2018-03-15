document.addEventListener("DOMContentLoaded", () => {

    function setDate() {
        let now = new Date();
        let seconds = now.getSeconds();
        let minutes = now.getMinutes();
        let hours = now.getHours();
        angles = timeToAngles([hours, minutes, seconds]);
        rotateDivToAngle("hour-hand", angles[0]);
        rotateDivToAngle("minute-hand", angles[1]);
        rotateDivToAngle("second-hand", angles[2]);
        //console.log(`${angles[0]}:${angles[1]}:${angles[2]}`);
    }

    function timeToAngles(time, initial){
        let result = [];
        result = time.map((elt, index) => {
            if(index===0) return elt/12*360 + 90;
            return elt/60*360 + 90;
        });
        return result;
    }

    function rotateDivToAngle(divClass, angle){
        let div = document.querySelector(`.${divClass}`);
        if(divClass === "hour-hand"){
            div.style.transform = `translateX(100%) rotate(${angle}deg)`;
            return;
        }
        div.style.transform = `rotate(${angle}deg)`;
    }

    setInterval(setDate, 1000);
});
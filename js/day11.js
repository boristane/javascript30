document.addEventListener("DOMContentLoaded", () => {

    UI = {
        player: document.querySelector(".player"),
        video: document.querySelector(".viewer"),
        progress: document.querySelector(".progress"),
        progressBar: document.querySelector(".progress__filled"),
        toggle: document.querySelector(".toggle"),
        skipButtons: document.querySelectorAll("[data-skip]"),
        ranges: document.querySelectorAll(".player__slider"),
        fullscreenButton: document.querySelector(".fullscreen")
    }

    let isMouseDown = false;

    function togglePlay(){
        const method = UI.video.paused ? "play" : "pause";
        UI.video[method]();
    }

    function updateToggleButton(){
        UI.toggle.textContent = UI.video.paused ? "►" : "❚ ❚";
    }

    function skip(){
        UI.video.currentTime += Number(this.dataset.skip);
    }

    function handleRangeUpdate(range){
        UI.video[range.name] = range.value;
    }

    function handleProgress(){
        let percent = (UI.video.currentTime / UI.video.duration)*100;
        UI.progressBar.style.flexBasis = `${percent}%`;
    }

    function scrub(e){
        let time = (e.offsetX / Number(UI.progress.offsetWidth))*UI.video.duration;
        UI.video.currentTime = time;
    }

    function fullscreen(){
        if (UI.video.requestFullscreen) {
            UI.video.requestFullscreen();
        }
        else if (UI.video.mozRequestFullScreen) {
            UI.video.mozRequestFullScreen();
        }
        else if (UI.video.webkitRequestFullScreen) {
            UI.video.webkitRequestFullScreen();
        }
        else if (UI.video.msRequestFullscreen) {
            UI.video.msRequestFullscreen();
        }
    }

    UI.toggle.addEventListener("click", togglePlay);
    UI.video.addEventListener("click", togglePlay);

    UI.video.addEventListener("play", updateToggleButton);
    UI.video.addEventListener("pause", updateToggleButton);

    UI.skipButtons.forEach(button => {
        button.addEventListener("click", skip);
    });

    UI.ranges.forEach(range => {
        range.addEventListener("mousemove", () => {
            if(isMouseDown) handleRangeUpdate(range);
        });

        range.addEventListener("change", () => {
            handleRangeUpdate(range);
        });
    });

    UI.player.addEventListener("mousedown", () => isMouseDown = true);
    UI.player.addEventListener("mouseup", () => isMouseDown = false);

    UI.video.addEventListener("timeupdate", handleProgress);
    UI.progress.addEventListener("click", scrub);
    UI.progress.addEventListener("mousemove", (e) => {
        if(isMouseDown) scrub(e);
    });

    UI.fullscreenButton.addEventListener("click", fullscreen);

});
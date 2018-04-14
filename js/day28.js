document.addEventListener('DOMContentLoaded', () => {
    const speed = document.querySelector('.speed');
    const bar = document.querySelector('.speed-bar');
    const video = document.querySelector('.flex');

    let isDown = false;

    speed.addEventListener('mousemove', function(e){
        if(!isDown) return;
        e.preventDefault();
        const percent = (e.pageY - this.offsetTop) / this.offsetHeight;
        const height = `${Math.round(percent*100)}%`;
        bar.style.height = height; 
        const [min, max] = [0.4, 4];
        const playbackRate = percent * (max - min) + min;
        bar.textContent = `${playbackRate.toFixed(2)}x`;
        video.playbackRate = playbackRate;
    });

    speed.addEventListener('mousedown', () => isDown = true);
    speed.addEventListener('mouseup', () => isDown = false);
    speed.addEventListener('mouseleave', () => isDown = false);
});


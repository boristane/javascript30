document.addEventListener("DOMContentLoaded", () => {
    let UI = {
        canvas: document.querySelector(".photo"),
        button: document.getElementById("take-photo"),
        snap: document.querySelector(".snap"),
        video: document.querySelector(".player"),
        strip: document.querySelector(".strip")
    };

    let filters = [(pixels) => pixels];
    let currentFilterIndex = 0;

    UI.ctx = UI.canvas.getContext("2d");

    function getVideo(){
        navigator.mediaDevices.getUserMedia({video: {facingMode: "user"}, audio: false})
        .then(localMediaStream => {
            console.log(localMediaStream);
            UI.video.srcObject = localMediaStream;
            UI.video.play();
        })
        .catch(err => {
            console.log("Error: ", err);
        });
    }

    function paintToCanvas(){
        const width = UI.video.videoWidth;
        const height = UI.video.videoHeight;
        UI.canvas.width = width;
        UI.canvas.height = height;

        return setInterval( () => {
            UI.ctx.drawImage(UI.video, 0, 0, width, height);
            let pixels = UI.ctx.getImageData(0, 0, width, height);
            pixels = filters[currentFilterIndex](pixels);
            UI.ctx.putImageData(pixels, 0, 0);
        }, 100);
    }

    function rgbSplit(pixels){
        for (let i = 0; i < pixels.data.length; i+=4) {
            pixels.data[i - 150] = pixels.data[i + 0]; // RED
            pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
            pixels.data[i - 550] = pixels.data[i + 2]; // Blue
          }
          return pixels;
    }

    function redEffect(pixels) {
        for (let i = 0; i < pixels.data.length; i+=4) {
          pixels.data[i + 0] = pixels.data[i + 0] + 50; // RED
          pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
          pixels.data[i + 2] = pixels.data[i + 2] - 50; // Blue
        }
        return pixels;
    }

    function greenEffect(pixels) {
        for (let i = 0; i < pixels.data.length; i+=4) {
          pixels.data[i + 0] = pixels.data[i + 0] - 50; // RED
          pixels.data[i + 1] = pixels.data[i + 1] + 50; // GREEN
          pixels.data[i + 2] = pixels.data[i + 2] - 50; // Blue
        }
        return pixels;
    }

    function blueEffect(pixels) {
        for (let i = 0; i < pixels.data.length; i+=4) {
          pixels.data[i + 0] = pixels.data[i + 0] - 50; // RED
          pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
          pixels.data[i + 2] = pixels.data[i + 2] + 50; // Blue
        }
        return pixels;
    }

    function takePhoto(){
        UI.snap.currentTime = 0;
        UI.snap.play();

        const data = UI.canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = data;
        link.setAttribute("download", "webcam-capture");
        link.innerHTML = `<img src="${data}" alt="Webcam Capture" />`
        UI.strip.insertBefore(link, UI.strip.firsChild);
    }

    function changeFilter(){
        currentFilterIndex = currentFilterIndex + 1 >= filters.length ? 0 : currentFilterIndex + 1;
        return filters[currentFilterIndex];
    }

    filters.push(rgbSplit);
    filters.push(redEffect);
    filters.push(greenEffect);
    filters.push(blueEffect);
    getVideo();
    UI.video.addEventListener("canplay", paintToCanvas);
    UI.button.addEventListener("click", takePhoto);
    UI.canvas.addEventListener("click", changeFilter);
});
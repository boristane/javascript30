document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight * 0.95;

    let isDrawing = false;
    let maxWidth = 100;
    let minWidth = 10;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = minWidth;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;
    let isGrowing = true;

    function draw(e){
        if(!isDrawing) return;
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
        hue = (hue+1)%360;
        ctx.lineWidth = isGrowing ? ctx.lineWidth + 1 : ctx.lineWidth - 1;
        isGrowing = (ctx.lineWidth <= minWidth || ctx.lineWidth >= maxWidth) ? !isGrowing : isGrowing;
    }

    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mousedown", (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
        ctx.lineWidth = minWidth;
        isGrowing = true;
    });
    canvas.addEventListener("mouseup", () => isDrawing = false);
    canvas.addEventListener("mouseout", () => isDrawing = false);
    
});
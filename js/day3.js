document.addEventListener("DOMContentLoaded", ()=>{

    let controls = document.querySelectorAll(".controls input");

    function handleUpdate(){
        const suffix = this.getAttribute("data-suffix") || "";
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    controls.forEach(elt => {
        elt.addEventListener("change", handleUpdate);
    });

    controls.forEach(elt => {
        elt.addEventListener("mousemove", handleUpdate);
    });

});
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];


document.addEventListener("DOMContentLoaded", () => {
    let UI = {
        bands: document.querySelector(".bands"),

        addBand: function(band){
            let liElt = document.createElement("li");
            let divElt = document.createElement("div");
            divElt.classList.add("band");
            liElt.textContent = band;
            divElt.appendChild(liElt);
            this.bands.appendChild(divElt);
        }
    };

    function strip(s){
        const articles = ["An", "The", "A"];
        let result = s.toLowerCase();
        let arr = s.split(" ");
        if(arr.length > 1 && articles.some(elt => elt === arr[0])){
            arr.shift();
            result = arr.join(" ").toLowerCase();
        }
        return result;
    }

    bands.sort((a, b) => strip(a) < strip(b) ? -1 : 1);
    bands.forEach(band => UI.addBand(band));
    




});
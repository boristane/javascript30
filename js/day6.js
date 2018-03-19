endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
let userInput = "";
let cities = ajaxFetch(endpoint);

function ajaxFetch(endpoint){
    // More details here https://developers.google.com/web/updates/2015/03/introduction-to-fetch
    fetch(endpoint).then((response) => {
        if(response.status !==  200){
            console.log(`Error fetching the data. Status Code: ${response.status}`);
            return undefined;
        }
        response.json().then((data) => {
            cities = data;
            return data;
        });
    });
}

function findMatches(input, arr){
    return arr.filter(elt => {
        const regex = new RegExp(input, 'gi');
        return elt.city.match(regex) || elt.state.match(regex);
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


document.addEventListener("DOMContentLoaded", () => {
    UI = {
        input: document.querySelector(".search"),
        suggestions: document.querySelector(".suggestions")
    };
    UI.input.addEventListener("change", displayMatches);
    UI.input.addEventListener("keyup", displayMatches);


    function displayMatches(){
        if(this.value !== ""){
            UI.suggestions.innerHTML = "";
            let results = findMatches(this.value, cities);
            results.forEach((elt) => {
                let liElt = document.createElement("li");
                let placeElt = document.createElement("span");
                let popElt = document.createElement("span");

                liElt.classList.add("entry");
                placeElt.classList.add("place");
                popElt.classList.add("pop");

                let regex = new RegExp(this.value, 'gi');
                let cityName = elt.city.replace(regex, `<span class="hl">${this.value}</span>`);
                let stateName = elt.state.replace(regex, `<span class="hl">${this.value}</span>`);
                let pop = numberWithCommas(elt.population);

                placeElt.innerHTML = `${cityName}, ${stateName}`;
                popElt.textContent = pop;
                liElt.appendChild(placeElt);
                liElt.appendChild(popElt);
                UI.suggestions.appendChild(liElt);
            });
        }
    }
});
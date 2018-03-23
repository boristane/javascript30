const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

document.addEventListener("DOMContentLoaded", () => {
    paragraph = document.querySelector("p");
    paragraph.addEventListener("click", makeGreen);
    
    function makeGreen(){
        paragraph.style.color = "red";
        paragraph.style.fontSize = "3em";
    }
    console.log("Regular console.log()");
    console.log("yup");

    console.log("Interpolated console.log()");
    console.log("I am interpolating", "this");

    console.log("Styled console.log()");
    console.log("%c I'm having some style", "font-family: monospace; background: blue; color: white");

    console.log("Warning console log");
    console.warn("This can be a problem");

    console.log("Error in console");
    console.error("This is a problem");

    console.log("Info in console");
    console.info("'It's on the internet, it's forcibly true' - Abraham Lincoln");

    console.log("Logical testing in the console");
    console.assert(dogs.some(elt => elt.name === "Abraham"), "There is no dog called Abraham my friend");

    console.log("Clear the console");
    //console.clear()

    console.log("Viewing DOM elements");
    console.dir(paragraph);

    console.log("Grouping console.logs");
    dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);
        console.log(`Name: ${dog.name}`);
        console.log(`Age ${dog.age} years`);
        console.groupEnd(`${dog.name}`);
    });

    console.log(`Counting in the console`);
    for(let i = 0; i < 10; i++){
        console.count("Passage in the loop");
    }

    console.log("Timing in the console");
    console.time("fetching github data");
    fetch("https://api.github.com/users/boristane").then(data => data.json())
        .then(data => {
            console.timeEnd("fetching github data");
            console.log(data);
        });
    
    
});
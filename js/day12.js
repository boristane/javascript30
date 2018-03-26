document.addEventListener("DOMContentLoaded", () => {
    let userInput = [];
    const sequence = [66, 79, 82, 73, 83] //boris

    UI = {
        mainTitle: document.querySelector("h1"),
        secondaryTitle: document.querySelector("h2")
    };

    console.log("%c Can you guess the secret code ?", "background: blue; color: white");
    console.info("Don't cheat...")

    document.addEventListener("keyup", (e) => {
        userInput.push(e.keyCode);
        if(userInput.length > sequence.length) {userInput.shift();}
        if(arrayEqual(userInput, sequence)){
            UI.mainTitle.textContent = "Remember the good old day ?";
            UI.mainTitle.classList.add("guessed");
            UI.secondaryTitle.textContent = "I knew you wouldn't";
            UI.secondaryTitle.classList.add("guessed");
        }
    });


});

function arrayEqual(arr1, arr2){
    if(arr1.length !== arr2.length) return false;
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]) return false;
    }
    return true;
}
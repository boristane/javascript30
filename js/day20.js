document.addEventListener("DOMContentLoaded", () => {
    let UI = {
        words: document.querySelector(".words")
    }
    
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = "en-US";

    let p = document.createElement("p");
    UI.words.appendChild(p);

    

    recognition.addEventListener("result", e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join("");

        p.textContent = transcript;
        if(e.results[0].isFinal){
            p = document.createElement("p");
            UI.words.appendChild(p);
        }
        
        if(transcript.includes("red")){
            p.style.color = console.log("You said red!");
        }

    });

    recognition.addEventListener("end", recognition.start);

    recognition.start();

});
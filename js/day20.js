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

        if(transcript.includes("Wikipedia") && e.results[0].isFinal){
            let search = e.results[0]["0"].transcript.split("Wikepedia");
            console.log(search[search.length - 1]);
            wikiSearch(search[search.length - 1], (results) => {
                let a = document.createElement("a");
                a.setAttribute("href", "https://en.wikipedia.org/?curid=" + results[0].pageid);
                a["target"] = "_blank";
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            });
            
        }

    });

    recognition.addEventListener("end", recognition.start);

    recognition.start();

});

function wikiSearch(word, callback){
    var wikiAPI = "https://en.wikipedia.org/w/api.php?";
    var callURL = wikiAPI + "action=query&format=json&list=search&utf8=1&srsearch=" + encodeURIComponent(word) + "&srlimit=10&origin=*";
    $.getJSON(callURL, function(data){
        callback(data.query.search);
    }); 
}
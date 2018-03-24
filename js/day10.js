document.addEventListener("DOMContentLoaded", () => {
    console.log("%c Yeah yea ye y... Yeezy !", "background: blue; color: white");


    let UI = {
        checkBoxes: document.querySelectorAll("input[type='checkBox']"),
        items: document.querySelectorAll(".item"),
        labels: document.querySelectorAll("label")
    };

    let lastChecked;
    let shiftKey = false;

    UI.checkBoxes.forEach((checkBox, index) => {
        checkBox.addEventListener("click", (e) => {
            if(checkBox.checked){
                UI.items[index].classList.add("checked");


                // Manage the shif key down event
                if(shiftKey){
                    indexLastChecked = [...UI.checkBoxes].indexOf(lastChecked);
                    UI.checkBoxes.forEach((box, i) => {
                        if(i === indexLastChecked){
                            let n = index < indexLastChecked ? index : indexLastChecked;
                            while(n < Math.max(index, indexLastChecked)){
                                UI.checkBoxes[n].checked = true;
                                UI.items[n].classList.add("checked");
                                n += 1;
                            }
                        }
                    });
                }


                lastChecked = checkBox;
            }else{
                UI.items[index].classList.remove("checked");
            }
        });
    });


    document.addEventListener("keydown", (e) => {
        e.preventDefault();
        if(e.keyCode === 16){
            shiftKey = true;
        }
    });

    document.addEventListener("keyup", (e) => {
        e.preventDefault();
        if(e.keyCode === 16){
            shiftKey = false;
        }
    });


});
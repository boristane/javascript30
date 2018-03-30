document.addEventListener("DOMContentLoaded", () => {
    let UI = {
        addItems: document.querySelector(".add-items"),
        itemList: document.querySelector(".plates")
    }

    const items = JSON.parse(localStorage.getItem("items")) || [];

    function addItem(e){
        e.preventDefault();
        const text = (this.querySelector("[name = item]")).value;
        const item = {
            text: text,
            done: false
        };
        items.push(item);
        populateList(items, UI.itemList);
        localStorage.setItem("items", JSON.stringify(items));
        this.reset();
    }

    function toggleDone(e){

    }

    function populateList(plates = [], platesList){
        platesList.innerHTML = plates.map((plate, index) => {
            return `
            <li>
                <input type="checkbox" data-index=${index} id="item${index}" ${plate.done ? "checked" : ""}/>
                <label for="item${index}">${plate.text}</label>      
            </li>
            `
        }).join("");
    }

    function toggleDone(e){
        if(!e.target.matches("input")) return;
        const el = e.target;
        items[el.dataset.index].done = !items[el.dataset.index].done;
        localStorage.setItem("items", JSON.stringify(items));
        populateList(items, UI.itemList);
        //items[e.target.index].done = items[e.target.index].done;
    }

    UI.addItems.addEventListener("submit", addItem);
    UI.itemList.addEventListener("click", toggleDone);
    populateList(items, UI.itemList);
});
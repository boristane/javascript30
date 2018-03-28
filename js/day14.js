const players = ["Wes", "Sarah", "Ryan", "Poppy"];

const copy1 = [...players];
const copy2 = [].concat(players);
const copy3 = players.slice();
const copy4 = Array.from(players);

console.log(copy1);
console.log(copy2);
console.log(copy3);
console.log(copy4);

const person = {
    nane: "Derek Dirk",
    age: 32,
    hobbies: ["Javascript", "Playstation", "Youtube"],
    social: {
        twitter: "@boristane",
        instagram: "kedopes5"
    }
};

const personCopy = Object.assign(person);
const personCheapDeepCopy = JSON.parse(JSON.stringify(person));

console.log(personCopy);
console.log(personCheapDeepCopy);
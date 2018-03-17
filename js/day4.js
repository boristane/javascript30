const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

console.log("List of inventors");
console.table(inventors);

console.log("Inventors who were born in the 1500's");
let fifteenHundreds = inventors.filter(elt => {
    return (elt.year < 1600 && elt.year >= 1500);
});
console.table(fifteenHundreds);

console.log("Investors' first and last names");
let firstAndLast = inventors.map((elt) => {
    return `${elt.first} ${elt.last}`;
});
console.log(firstAndLast);

console.log("Inventors sorted by birthdate");
let oldestToYoungest = inventors.sort((a, b) => {
    return a.year - b.year;
});
console.table(oldestToYoungest);

console.log("Total years inventors have lived");
let totalYears = inventors.reduce((acc, elt) => {
    return acc + (elt.passed - elt.year); 
}, 0);
console.log(totalYears);

console.log("Inventors sorted by years lived");
let longestLiving = inventors.sort((a, b) => {
    return (a.passed - a.year) - (b.passed - b.year);
});
console.table(longestLiving);

console.log("List of people");
console.log(people);

console.log("Alphabetic list of people");
let lastNameSort = people.sort((a,b) => {
    let nameA = a.split(", ")[0].toLowerCase();
    let nameB = b.split(" ,")[0].toLowerCase();
    return nameA > nameB ? 1 : -1;
});
console.log(lastNameSort);

console.log("Some random data")
console.log(data);

let initialObject = {};
[...new Set(data)].forEach((elt) => {
    initialObject[elt] = 0;
});
let lol = data.reduce((acc, elt) => {
   acc[elt] += 1; 
   return acc;
}, initialObject);
console.log("Number of instance of each data item");
console.log(lol);
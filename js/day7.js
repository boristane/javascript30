const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

// Is there any adult in the people array ?
let isAdult = people.some(person => {
    let currentYear = new Date().getFullYear();
    return currentYear - person.year >= 19;
});
console.log("Is there any adult ?");
console.log(isAdult);

// Is everyone 19 or older?
let allAdults = people.every(person => {
    let currentYear = new Date().getFullYear();
    return currentYear - person.year >= 19;
});
console.log("Is everyone 19 or older ?");
console.log(allAdults);

// Find the comment with the ID 823423
let commentID = 823423;
let comment = comments.find(comment => comment.id === commentID);
console.log(comment);

// Delete the comment with the ID 823423
let commentIndex = comments.findIndex(comment => comment.id === commentID);
let newComments = [...comments.slice(0, commentIndex), ...comments.slice(commentIndex+1)];
console.log("Delete the comment with ID 823423");
console.log("Old comments");
console.table(comments);
console.log("New comments");
console.table(newComments);

  
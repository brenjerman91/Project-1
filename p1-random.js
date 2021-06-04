/*
    CIT 281 Project 1
    Name: Benjamin Jensen
*/

let stringArray = [];
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//array of letters
let letters = "abcdefghijklmnopqrstuvwxyz".split("");

//takes random number and uses it as a length for string we are creating
let theLength = getRandomInteger(5, 25);

//put a random letter in place of each spot in the length of the string


for (i = 0; i < theLength; i++) {
    //gets random letter from letters above
    let getRandomLetter = getRandomInteger(0, letters.length);
    let randLetter = letters[getRandomLetter];
    stringArray.push(randLetter);
}


let finalString = stringArray.join("");
console.log(finalString);
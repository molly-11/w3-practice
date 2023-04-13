/*console.log("loaded");
let carBrand = "Opel";
console.log("Autó márka:", carBrand);

carBrand = "BMW";
console.log(carBrand);

let doorNumber = 5;
let isDiesel = true;
let fuel = null;

ez egy comment

/*ez is egy comment
csak több soros*/
/*
let firstNames = ["Dorka", "Márió", "Bence", "Edit"];

console.log(firstNames.length);
console.log(firstNames[2]);
console.log(firstNames[firstNames.length - 1]);
firstNames[1] = "Ivett";
console.log(firstNames);
firstNames.push("Márió");
console.log(firstNames);

function myFirstFunction(firstName, lastName) {
  console.log("My First Function");
  return firstName + " " + lastName;
}

console.log(myFirstFunction("Márk", "Goldstein"));

const cond1 = 2;
const cond2 = 2;
const num = 3;
*/


function doubleTheNumber(num) {
  let result = num * 2;
  return result;
}

const doubleNumber = doubleTheNumber(7);
console.log(doubleNumber);

function score(letter) {
  const scoreString = "a";

  if (letter === undefined) {
    return "failed to send a letter";
  } 
  else if(letter===scoreString){
return "Nailed it"
  }
  else {
    return "failed, try again";
  }
}


console.log(score("a"));
console.log(score("b"));
console.log(score());










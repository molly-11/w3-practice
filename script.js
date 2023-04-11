console.log("loaded");
let carBrand= "Opel";
console.log("Autó márka:",carBrand);

carBrand="BMW";
console.log(carBrand);

let doorNumber=5;
let isDiesel=true;
let fuel= null;

//ez egy comment

/* ez is egy comment
csak több soros*/

let firstNames=["Dorka", "Márió","Bence","Edit"];

console.log(firstNames.length);
console.log(firstNames[2]);
console.log(firstNames[firstNames.length-1]);
firstNames[1]="Ivett";
console.log(firstNames);
firstNames.push("Márió");
console.log(firstNames);

function myFirstFunction (firstName,lastName){
  console.log("My First Function");
  return firstName+" "+lastName;
};

console.log(myFirstFunction("Márk","Goldstein"));


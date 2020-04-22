const readlineSync = require("readline-sync");
const num1 = parseInt(readlineSync.question("enter 1st number:"));
const num2 = parseInt(readlineSync.question("enter 2nd number:"));

//addition
const addition = (num1, num2) => {
  return num1 + num2;
}

//substraction
const substraction = (num1, num2) => {
  return num1 - num2;
}

//multiplication
const multiplication = (num1, num2) => {
  return num1 * num2;
}


//Division
const division = (num1, num2) => {
  return num1 / num2; 
}

//modulus
const modulus = (num1, num2) => {
  return num1 % num2;
}


//greaterthanFunction
const arithmeticgreaterthan = (num1, num2) => {
  if (num1 > num2) {
    console.log("yes, num1 is greater than num2");
  }
}


//lessthanFunction
const arithmeticlessthan = (num1, num2) => {
  if (num1 < num2) {
    console.log("yes, num1 is less than num2");
  }
}

//equaltoFunction
const arithmeticequalto = (num1, num2) => {
  if (num1 === num2) {
    console.log("yes, num1 is equal to num2");
  }
}

console.log("sum is: ", addition(num1, num2));
console.log("difference is: ", substraction(num1, num2));
console.log("multiplication is: ", multiplication(num1, num2));
console.log("Division is: ", division(num1, num2));
console.log("Modulus is: ", modulus(num1, num2));
arithmeticgreaterthan(num1, num2);
arithmeticlessthan(num1, num2);
arithmeticequalto(num1, num2);
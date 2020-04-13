const readlineSync = require("readline-sync");
const num1 = parseInt(readlineSync.question("enter 1st number:"));
const num2 = parseInt(readlineSync.question("enter 2nd number:"));

const Addition = (num1 , num2)=> {  //Addition
   const sum = num1 + num2;
   console.log("sum is: ", sum);
}
Addition(num1 , num2);

const substraction = (num1 , num2)=>{
   const difference = num1 - num2;
   console.log("difference is: ", difference);
}
substraction(num1 , num2);        


const multiplication = (num1 , num2)=> {
   const multiplication = num1 * num2;
   console.log("multiplication is: ", multiplication);
}
multiplication(num1 , num2);


const Division = (num1 , num2)=>{
   const Division = num1 / num2;
   console.log("Division is: ", Division);
    
}
Division(num1 , num2);


const Modulus = (num1 , num2)=>{
    const Modulus = num1 % num2;
    console.log("Modulus is: ", Modulus);
    
}
Modulus(num1 , num2);


//greaterthanFunction
function greaterthanFunction(num1 , num2)
{
    if (num1 > num2)
    {
        console.log("yes, num1 is greater than num2");
    }
    else{
        console.log("yes, num2 is greater than num1");
        }
}    
greaterthanFunction(num1 , num2);


//lessthanFunction
function lessthanFunction(num1 , num2)
{
    if (num1 < num2)
    {
        console.log("yes, num1 is less than num2");
    }
    else{
        console.log("yes, num2 is less than num1");
        }
}
lessthanFunction(num1 , num2);


//equaltoFunction
function equaltoFunction(num1 , num2)
{
    if (num1 = num2)
    {
        console.log("yes, num1 is equal to num2");
    }
    else{
    console.log("yes, num1 is not equal to num2");
    }
}
equaltoFunction(num1 , num2);
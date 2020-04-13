const readlineSync = require("readline-sync");
const num1 = parseInt(readlineSync.question("enter the number:"));

   if(num1 % 2 == 0) {
      console.log('Number is even!');
   } 
   else {
      console.log('Number is odd!');
	}
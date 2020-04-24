const readlineSync = require("readline-sync");
const array = readlineSync.question("enter the numbers:");

const squaresOfElements = (array) => {
    let square = "";
    for (let i = 0; i < array.length; i++) {
        square = array[i] ** 2;  
        console.log("square:" +square);
    }
}
squaresOfElements(array);
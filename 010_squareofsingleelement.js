const readlineSync = require("readline-sync");
const string = readlineSync.question("Enter the elements :");
let array = string.split(",").map(Number);

const squarefunction = (element) => {
    console.log("square of :" + element + " = " + element*element)
}
for (let i = 0; i<array.length ;i++) {
    squarefunction(array[i]);
}

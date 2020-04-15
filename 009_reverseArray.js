let array1 = ["Bichu", "Benny", "Binoy", "Bijoy"];
let newArray = [];
const reverseArray = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i]);
        
    }
    console.log(newArray);
}
reverseArray(array1)

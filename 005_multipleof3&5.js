const element = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Arrayfun = () => {
    for (let i = 0; i < element.length; i++) {
        if (element[i] % 3 == 0 ){
            console.log("multiple of 3 = " +element[i]);
        }
      else if (element[i] % 5 == 0 ){
            console.log("multiple of 5 = " +element[i]);
        }
    }
    console.log("Not a multiple of 3 & 5");

}
Arrayfun();

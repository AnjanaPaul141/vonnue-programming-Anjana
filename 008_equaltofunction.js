const element = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const element1 = [0, 2, 7, 4, 5, 6, 4, 8, 0];
const equaltofunction = () => {
    for (let i = 0; i <= 8; i++) {
        if (element[i] == element1[i]){
            console.log(element[i]+ " Equal to " +element1[i]);
        }
        else {
            console.log(element[i]+ " Not Equal to " +element1[i]);
    }
    }

}
equaltofunction();
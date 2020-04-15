const Array = (element) => {
   let Output = [];
   for (let i = 0; i < (9 - 1); i++) {
      i = i + 1;
      Output[i] = element[i];
   }
   console.log(Output);
}
   let element = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   Array(element);





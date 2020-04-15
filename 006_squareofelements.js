const Array = [2, 3, 4];
const squaresofelements = (Array) => {
    let square = 0;
    for (let i = 0; i < Array.length; i++)
     {
        square = (Array[i] ** 2); 
        console.log(square);
    }
    
}

squaresofelements(Array);

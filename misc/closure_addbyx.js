// Prompt: Create a function addByX that returns a function that will add an input by x.

// const addByTwo = addByX(2);
// addByTwo(1); //should return 3
// addByTwo(2); //should return 4
// addByTwo(3); //should return 5

// const addByThree = addByX(3);
// addByThree(1); //should return 4
// addByThree(2); //should return 5

// const addByFour = addByX(4);
// addByFour(4); //should return 8
// addByFour(10); //should return 14
       

function addByX(inputNum) {
    let x = inputNum;
    
    function inner(num) {
      return x + num
    }
    return inner;
  }
  
  const addByTwo = addByX(2); // this 2 stays constant once its returned and the fn closes 
  console.log(addByTwo(1)); // 3
  console.log(addByTwo(2)); // 4
  console.log(addByTwo(1)); // 3 // its not accuming, its a new instance every time. and the addByX(2)..the 2 is constant. bc we're not ++ing 
  // Now call addByTwo with an input of 1 and log the output
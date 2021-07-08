/* Prompt: 
Write a function once that accepts a callback as input and returns a function. 
When the returned function is called the first time, 
it should call the callback and return that output. 
If it is called any additional times, instead of calling the callback again 
it will simply return the output value from the first time it was called.
*/


function once(callback){ // function(num) 
    let counter = 0;
    let callbackValue = null; 
    
    function inner(num){
      if (counter === 0) { // if this is the first call
         counter++; // increment the counter 
           callbackValue = callback(num); //assign the result of calling the callback, to the Backpack data,  variable callbackValue
         return callbackValue // return value 
      } else { // if this is not the first call 
         return  callbackValue // return whatever value is saved in the OLER, backpack variable callbackValue
      }
    }
    return inner;
  }
  
  const addByTwoOnce = once(function(num) {
    return num + 2;
  });
  
  console.log(addByTwoOnce(5));  //should log 7
  console.log(addByTwoOnce(10));  //should log 7
  console.log(addByTwoOnce(9001));  //should log 7
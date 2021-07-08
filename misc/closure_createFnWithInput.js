// Prompt: Create a function createFunctionWithInput that accepts one input and returns a function. When that created function is called, it should return the input that was passed to createFunctionWithInput when it was created.
// const sampleFunc = createFunctionWithInput('sample');
// const helloFunc = createFunctionWithInput('hello');
// // Now we'll call the functions we created and log the result
// console.log(sampleFunc()); 
// // should log 'sample' to the console
// console.log(helloFunc());


function createFunctionWithInput(input) {
    function inner(){
      return input
    }
    return inner;
  }
  
  const sampleFunc = createFunctionWithInput('sample');
  console.log(sampleFunc()); // should log: 'sample'
  const helloFunc = createFunctionWithInput('hello');
  console.log(helloFunc()); // should log: 'hello'
  
// PROMPT: 
// Create a function createFunction that creates and returns a function. 
// When that newly created function is called, it should return the string 'hello world'.
//   const myFunction = createFunction();
//   console.log(myFunction()); //should log: 'hello world'

// PSEUDO: 
// create function createFunction
        // create newFunction
                // return string 'hello world'
    // return newFunction


function createFunction() {

    function newFunction() {
        return 'hello world';
    }

    return newFunction;
};

const myFunction = createFunction();
console.log( myFunction() ); //should log: 'hello world'



// WORDING:
// I set up a called variable myFunction.
// I set it equal to the evaluated result of createFunction()
// createdFunction() will return the function definition & closure (PLSRD) of newFunction()
// then, we console.log the invocation of myFunction()
// we will see the eveluated result of newFunction()....it's just being run under its new name, myFunction
// 
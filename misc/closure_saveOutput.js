/* Prompt: 
Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). 
saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. 
When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values
*/

function saveOutput(cb, pswd) {  // cb = function(num) { return num * 2; };
    let cachedObj = {}; 

    function inner(input) { // input could be number or string
        if (typeof(input) === 'string'){
            return cachedObj
        } else {
            let cbResult = cb(input)
            cachedObj[input] = cbResult
            return cbResult
        }
    }
    return inner;
}

// Uncomment these to test!
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');

console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }

 /* PSUDO:
*/

/* WORDING:
*/

/* NOTES & TAKE AWAYS:
    TYPEOF check
    
    AGRUMENT VS PARAMETER
    - Function parameters are the names listed in the function's definition. 
        Function arguments are the real values passed to the function. 
        Parameters are initialized to the values of the arguments supplied

    ADDING TO OBJ
    - ` cache[arg] = func[arg];`
*/


// // OTHER WAY TO WRITE IT
// function saveOutput(func, pswd){  //cb = function(num) { return num * 2; };
//     const cache = {}; 

//     return function(arg){ // input could be number or string
//         if (arg === pswd){
//             return cache;
//         } else {
//             cache[arg] = func(arg);
//             return cache[arg]
//         }
//     }
// }
// // Uncomment these to test!
// const multiplyBy2 = function(num) { return num * 2; };
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');

// console.log(multBy2AndLog(2)); // should log: 4
// console.log(multBy2AndLog(9)); // should log: 18
// console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }

// BASICALLY RECREATE SETTIMEOUT 
// Write a function delay that accepts two arguments, a callback and the wait time in milliseconds.
// Delay should return a function that, when invoked waits for the specified amount 
// of time before executing. HINT - research setTimeout();

function delay(cb, waitTime) {
        return function wait() {
            return setTimeout(cb, waitTime)
         }
}

// UNCOMMENT THE CODE BELOW TO TEST DELAY
let count = 0; 
const delayedFunc = delay(() => count++, 1000); 
delayedFunc(); // invoking the returned out fn of delay
console.log("count is 0, below")
console.log(count); // should print '0'
console.log("count is 1, below")
setTimeout(() => console.log(count), 1000); // should print '1' after 1 second


/* PSUDO:
    create function Delay with args, cb and waitTime
        return and create function Wait (return but doesnt invoke)
            return setTimeout function and pass in args cb, waitTime
*/


/* WORDING:
- save global variable count to memory with the value of 0
- define a called variable delayedFunc
- i set it equal to the return value of delay
    - delay is ivoked with an anon function that increments count, and a num  in ms
    - ** we give the anon fn a name `cb` when we pass it to the args! impt bc now could invoke by name. **
- delay returns out the function definition (aka saying its uninvoked) & (COVE/closure) of Wait function 
- then we invoke delayedFunc (aka wait()) 
- then concole log the value of count. 
    - counts value is 0 because the cb arg inside of wait() hasnt been invoked yet. we must wait 1000ms (1s) first.
        - setTimeout put the cb function in the Queue and waits until it has a responce object(/?)(.then) before it invokes the cb 
- then to test, we call a global setTimeout and pass in the global value of count to see if the function DelayedFunc incremented the count variable at the approperiate time

*/


/* NOTES & TAKE AWAYS:
- the global value of count is stored in a closure (COVE) and saved inside the variname delayedFunc
*/
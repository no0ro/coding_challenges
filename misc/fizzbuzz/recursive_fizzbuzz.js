/* PROMPT
Print integers 1 to N, but print “Fizz” if an integer is divisible by 3, 
“Buzz” if an integer is divisible by 5, 
and “FizzBuzz” if an integer is divisible by both 3 and 5
*/



// Must print Ascending order! would be easier if i could just `num--`

// IMPROVEMENTS: 
//      1. remove global array variable (place inside param?) 
//      2. remove `1` from initial `fizzBuzz(1, 16)` call. issue i think: bc `counter = 1` is optional, so probs cant return an optional arg before its actually used..?

let result = []
function fizzBuzz( counter = 1, num ) {
    if ( counter === num + 1 ){ 
        return result
    } else if ( counter % 3 === 0 && counter % 5 === 0 ){
        result.push("FizzBuzz")
        return fizzBuzz( counter + 1, num )
    } else if (counter % 3 === 0) {
        result.push("Fizz")
        return fizzBuzz( counter + 1, num )
    } else if (counter % 5 === 0) {
        result.push("Buzz")
        return fizzBuzz( counter + 1, num )
    } else {
        result.push(counter)
        return fizzBuzz( counter + 1, num )
    }
};
fizzBuzz(1, 16)

console.log(result)
// fizzbuzz(16) results should equal: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]





// TAIL CALL RECURSION TEST
// let final = []
// function tailCall(num) {
//     if (num >= 1){
//         final.push(num)
//        return tailCall( num - 1)
//     } else {
//         return final
//     }
// };
// console.log(tailCall(6))
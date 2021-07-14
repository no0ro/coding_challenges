/* PROMPT 
Print integers 1 to N, but print “Fizz” if an integer is divisible by 3, 
“Buzz” if an integer is divisible by 5, 
and “FizzBuzz” if an integer is divisible by both 3 and 5
*/


function fizzbuzz(num) {
    // Print integers 1 to N,
    const result = []
    // if divisible by 3, print “Fizz” 
    // if divisible by 5, print “Buzz” 
    // if divisible by 3&5, print “FizzBuzz” 
    for(let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz")
            result.push("FizzBuzz")
        } else if(i%3 === 0) {
            console.log("fizz")
            result.push("Fizz")
        } else if(i%5 === 0) {
            console.log("buzz")
            result.push("Buzz")
        } else {
            result.push(i)
        }
    }
    return result
};


const x = fizzbuzz(16)
console.log(x)
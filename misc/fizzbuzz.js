/* PROMPT
Print integers 1 to N, but print “Fizz” if an integer is divisible by 3, 
“Buzz” if an integer is divisible by 5, 
and “FizzBuzz” if an integer is divisible by both 3 and 5
*/

function fizzbuzz(num) {
    // Print integers 1 to N
    const result = []

    for(let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {   // if divisible by 3&5, print “FizzBuzz” 
            result.push("FizzBuzz")
        } else if(i%3 === 0) {  // if divisible by 3, print “Fizz” 
            result.push("Fizz")
        } else if(i%5 === 0) {  // if divisible by 5, print “Buzz” 
            result.push("Buzz") 
        } else {
            result.push(i)
        }
    }
    return result
};

const x = fizzbuzz(16)
console.log(x)

// fizzbuzz(16) results should equal [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]
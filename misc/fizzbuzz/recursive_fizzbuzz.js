/* PROMPT
Print integers 1 to N, but print “Fizz” if an integer is divisible by 3, 
“Buzz” if an integer is divisible by 5, 
and “FizzBuzz” if an integer is divisible by both 3 and 5
*/

// (i % 3 === 0 && i % 5 === 0)


let final = []
function fizzBuzz(num) {

    // let resultArr = []
    // let num = n
    if (num >= 1){
    //    resultArr.push(num)
    //    console.log(num)
    //    let updatedResult = resultArr
        final.push(num)
       return fizzBuzz( num - 1)
    } else {
        return final
    }
    // return resultArr
};
console.log(fizzBuzz(6))

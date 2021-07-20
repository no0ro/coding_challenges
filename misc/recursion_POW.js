/* PROMPT

Write a function that takes two inputs, a base and an exponent, 
and returns the expected value of base ^ exponent. 
For instance, if our base is 2 and our exponent is 3, then return 8 because 2^3 = 2*2*2 = 8.

Input 1: {Number} base - base number raised to the exponent
Input 2: {Number} exponent - exponent the base is raised to
Output: {Number} - expected 

*/

function  pow( base, exponent, newBase = base) { 
    return exponent <= 1 ? newBase : pow(base, exponent - 1, base * newBase)
    // use exponent arg as stop condition
    // use newBase as counter/storage
}

console.log(pow(2, 3));
console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243


/* -> Break Down of each recursive call 
pow(2,4)
    2, 4-1, 2*2 // 2,3,4
    2, 3-1, 2*4 // 2,2,8
    2, 2-1, 2*8 // 2,1,16
    exponent = 1;
*/
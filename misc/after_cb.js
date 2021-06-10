// Write a function after that takes the number of times the callback needs 
// to be called before being executed as the first parameter and 
// the callback as the second parameter.


function after(num, cb) {
    let cbsCalled = 1;
   
    return function (string) {
      if (cbsCalled === num) return cb(string);
      cbsCalled++;
    }  
  }
  
  const called = function(string) { return('hello ' + string); };
  const afterCalled = after(3, called);

  
// TEST 
console.log(afterCalled('world')); // -> nothing is printed 
console.log(afterCalled('world')); // -> nothing is printed
console.log(afterCalled('world')); // -> 'hello world' is printed
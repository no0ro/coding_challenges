// -----------Prompt---------------
// Construct a fn `intersection` that compares input arrays and returns
// a new array with elements found in all the inputs. BONUS - use reduce

// start with this: 
// const arr1 = [5, 10, 3, 15, 20];
// const arr2 = [15, 88, 1, 3,  5, 7];
// const arr3 = [1, 10, 15, 5, 20];
// console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]



// ---------SOLUTION---------------
function intersection(arrayOfArrays) {
    return arrayOfArrays.reduce(function(firstArr, currentArr) {
       return firstArr.filter(function(element) {
          return currentArr.indexOf(element) > -1;
       })
    });
};

const arr1 = [5, 10, 3, 15, 20];
const arr2 = [15, 88, 1, 3,  5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
// arrayOfArrays = [ [arr1], [arr2], [arr3] ]



// --------ALTERNATIVE SOLUTION-------------
/*  
const intersection = arrayOfArrays => {
  return arrayOfArrays.reduce((initialized, currentArr) => {
    return initialized.filter(element => {
      return currentArr.includes(element)
    })
  });
}
*/



// -----------NOTES--------------
/* 
Regarding filter, it internally creates an array for you, and each time filter
calls the provided callback with the next element of the array being filtered,
and the callback returns a truthy value, filter pushes the element onto its
internal array. Once filter has gone through all of the elements of the array
being filtered, it returns the internal array that it was building on your behalf.

Regarding the returns, keep in mind that a return applies only to the innermost
scope in which it appears. For example, in your intersection function above,
you have 3 nested scopes: (1) the outermost is the intersection function itself,
(2) the callback that you're passing to reduce (which is nested within the scope
of intersection), and (3) the callback that you're passing to filter (which is
nested within the scope of the callback passed to reduce).

This means that the innermost return appears within the callback passed to
filter, and that return can only return from that callback. It cannot return
from the outer callback that is passed to reduce, nor from the intersection
function itself.
*/
// prompt



function union(nestedArrays) {
    let flattened = nestedArrays.flat(Infinity)
  
    return flattened.reduce(function (accum, currentVal) {
      if (accum.indexOf(currentVal) === -1) {
        accum.push(currentVal);
      }
      return accum
    }, [])
  };

const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union( [arr1, arr2, arr3] )); // should log: [5, 10, 15, 88, 1, 7, 100]




  /*
// with comments & output
function union(nestedArrays) {
    let flattened = nestedArrays.flat(Infinity)
    //accum = 5  currentVal = 10
    return flattened.reduce(function (accum, currentVal) {
      console.log(`accum ${accum}`)
          console.log(`currentVal ${currentVal}`)
      if (accum.indexOf(currentVal) === -1) {
        accum.push(currentVal);
      }
      return accum
    } ,[])
  }
  */
  
  
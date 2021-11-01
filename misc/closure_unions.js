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
  
  
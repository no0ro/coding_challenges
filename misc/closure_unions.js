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
// Create a function dateStamp that accepts a function and returns a function. 
// The returned function will accept whatever arguments the passed-in function accepts 
// and return an object with a date key whose value is today's date (not including the time)
// represented as a human-readable string (see the Date object for conversion methods), and an output 
// key that contains the result from invoking the passed-in function.

function dateStamp(cb) {
    return function(...args) {
      let obj = {}
      let currentDate = new Date
      
      obj["date"] = currentDate.toDateString()
      obj["output"] = cb(...args)
      return obj
    }
  }
  
  const stampedMultBy2 = dateStamp(n => n * 2);
  console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
  console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }


  /* PSUDO:

*/


/* WORDING:

*/


/* NOTES & TAKE AWAYS:

*/
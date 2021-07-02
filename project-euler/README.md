# project euler readme

https://projecteuler.net/


// ADD CODE HERE

// function delay(callback, time){  
//     // let date = Date.now() // 1577569498311
//     //console.log(`date.now = ${date}`)
    
//     return function() {
//       let startTime = Date.now() 
//       console.log(`initial startTime = ${startTime}`)
//       //let startTime = date;
//       let endTime = startTime + time
//       console.log(`target endtime: ${endTime}`)
      
//       while (startTime != endTime){ //startTime + time
//         startTime = Date.now()
//           console.log(`incrementing startTime in loop: ${startTime}`)
//       }
//       console.log(`the incremented startTime, right before we call cb(): ${startTime}`)
//       console.log(`our target endtime (wait time), right before we call cb(): ${endTime}`)
//       callback()
//     }
//   }
  
//   let count = 0;
//   const delayedFunc = delay( () => count++, 1000 );
//   delayedFunc();
  
//   console.log(count); // should print '0'
//   setTimeout(() => console.log(count), 1000); // should print '1' after 1 second



// UNCOMMENT THE CODE BELOW TO TEST DELAY
// let count = 0;
// const delayedFunc = delay(() => count++, 1000);
// delayedFunc();
// console.log(count); 												 // should print '0'
// setTimeout(() => console.log(count), 1000); // should print '1' after 1 second
// PROMPT:
//   You are given an array (which will have a length of at least 3,
//   but could be very large) containing integers. The array is either entirely
//   comprised of odd integers or entirely comprised of even integers except for
//   a single integer N. Write a method that takes the array as an argument and
//   returns this "outlier" N.

function findOutlier(integers){
    //check if we are searching for odds or evens
    let evensCount = 0;
    let oddsCount = 0;
  
    for (let i = 0; i < integers.length; i++){
        if (integers[i] === 0 || integers[i] % 2 === 0 ){
            return evensCount = evensCount + 1 //(dont need return!)
        }
        if (integers[i] === 1 || integers[i] % 3 === 0){
            return oddsCount = oddsCount + 1
        }
    }
  
    console.log(evensCount)
    console.log(oddsCount)
  
    if (evensCount > oddsCount) { //all evens
        let x = integers.find(int => {
            int % 3 === 0
         })
         return x
    }
    if (evensCount < oddsCount) { //all oddss
        integers.find(int => {
            return int % 2 === 0
        })
    }
  }
  
  
  findOutlier([0, 1, 2]) //1
/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/
//* base case:
//*  --
//* recursive case:
//*  -- when n is less than num;
//* recursive step
//*  -- increment n by 1 starting at 0;
// your code here

let sumToN = n => {
  debugger
  if (n < 0) return null;
  if (n <= 1) return n;

  return n + sumToN(n - 1);
}

//sumToN(5)
  //5 + sumToN(4)
    //4 + sumToN(3)
      //3 + sumToN(2)
        //2 + sumToN(1)
          //return 1
        //2 + 1
      //3 + 3
   //4 + 6
//5 + 10

console.log(sumToN(5));
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}

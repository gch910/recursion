/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]

base case -
recursive case -
recursive step - concat or slice(maybe together)
***********************************************************************/

// your code here

let flatten = array => {
  let newArr = [];
  if (array.length === 0) return [];

  array.forEach(function(contents) {
    if (Array.isArray(contents)) {
      newArr.push(...flatten(contents))
    } else (
      newArr.push(contents)
    )
  });
  return newArr
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}

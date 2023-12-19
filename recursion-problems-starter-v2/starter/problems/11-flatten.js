/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

const { arrayBuffer } = require("stream/consumers");

// Only recursion ie. correct solution:
const flatten= arr=>{
  let flat=[]
  arr.forEach(ele=>{
    if(Array.isArray(ele)){
      flat=[...flat,...flatten(ele)]
    }else{
      flat.push(ele)
    }
  })
  return flat
}

// Recursion+default parameter:
// const flatten = (arr,newArr=[]) =>{
//   arr.forEach(ele => {
//     if (Array.isArray(ele)){
//       flatten(ele,newArr)
//     }else{
//       return newArr.push(ele)
//     }
//   });
//   return newArr
// }

// Recursion+closure:
// const flatten = (arr) =>{
//   let newArr=[]
//   const iterator =child=>{
//      child.forEach(ele => {
//       if (Array.isArray(ele)){
//         iterator(ele)
//       }else{
//         return newArr.push(ele)
//       }
//     });
//     return newArr
//   }
//   return iterator(arr)
// }
// your code here
console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2,3,4]]))
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}

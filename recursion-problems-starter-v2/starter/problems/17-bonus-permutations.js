/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/
const permutations=(array,allPerms=[])=>{
  //find base case, which is final array's length = factorial of length of original array
  let factorial=1
  array.forEach((ele,i)=>{
    factorial*=i+1
  })
  if(allPerms.length==factorial){
    return
  }

  let subArray=[]
  //set first number and the other numbers to combine it with
  let first = array[0]
  let rest = array.slice(1)

  //for each number, combine it with first and make them out of order
  rest.forEach(num=>{
    //only bug is that it can find all permutations for maximum 3 nums, for more nums I'd have to find a way to reorganize the
    //array or change how they get pushed to subarray.
    subArray=[first, num, ...rest.filter(ele=>ele!==num)]
    allPerms.push(subArray)
  })
  array=[...rest,first]
  permutations(array,allPerms)
  return allPerms
}
// your code here
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}

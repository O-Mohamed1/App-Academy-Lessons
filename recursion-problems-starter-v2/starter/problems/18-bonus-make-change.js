/***********************************************************************
Write a recursive function that will find the best way to make change from a
given set of coin values for a given amount of money. The set of coin values
should default to using pennies (1 cent), nickels (5 cents), dimes (10 cents),
and quarters (25 cents). Return `null` if there are no possible ways to make
change for the given target amount.

Examples:

makeChange(21); // [1, 10, 10]
makeChange(75); // [25, 25, 25]
makeChange(33, [15, 3]); // [3, 15, 15]
makeChange(34, [15, 3]); // null
makeChange(24, [10, 7, 1]) // [7, 7, 10]

Here's a game plan for solving the problem:

First, write a 'greedy' version called `greedyMakeChange`:

Take as many of the biggest coin as possible and add them to your result.
Add to the result by recursively calling your method on the remaining amount,
leaving out the biggest coin, until the remainder is zero.
Once you have a working greedy version, talk with your partner about refactoring
this to `makeBetterChange`. What's wrong with `greedyMakeChange`?

Consider the case of `greedyMakeChange(24, [10,7,1])`. Because it takes as many
10 pieces as possible, `greedyMakeChange` misses the correct answer of
`[10,7,7]` (try it in node).

To `makeBetterChange`, we only take one coin at a time and never rule out
denominations that we've already used. This allows each coin to be available
each time we get a new remainder. By iterating over the denominations and
continuing to search for the best change, we assure that we test for
'non-greedy' uses of each denomination.

Discuss the following game plan and then work together to implement your
new method:

- Iterate over each coin.
- Grab only one of that one coin and recursively call `makeBetterChange` on the
  remainder using coins less than or equal to the current coin.
- Add the single coin to the change returned by the recursive call. This will be
  a possible solution, but maybe not the best one.
- Keep track of the best solution and return it at the end.

N.B. Don't generate every possible permutation of coins and then compare them.
Remember that a permutation is not the same thing as a combination - we will
need to check every combination of coins that add up to our target, we just
don't want to check the same combination in different orders. If you get stuck
you can start by writing a solution that calculates and compares all of the
permutations without storing them in an array. Then go back and refactor your
solution so that it only calculates and compares all of the different
combinations.
***********************************************************************/

function greedyMakeChange(target, coins = [25, 10, 5, 1]) {
  if(coins.length==0){
    return [`Leftover: ${target}`]
  }
  let usedCoins=[]
  while(target-coins[0]>=0){
    target-=coins[0]
    usedCoins=[...usedCoins,...[coins[0]]]
  }
  debugger
  return usedCoins=[...usedCoins,...greedyMakeChange(target,coins.slice(1))]

  // no tests for greedyMakeChange so make sure to test this on your own
  // your code here
}
// console.log(greedyMakeChange(58,[10,29,1]))

// Goal is to add one coin at a time, and recurse including biggest coin to find non greedy change
function makeBetterChange(target, coins = [25, 10, 5, 1],firstcall=true) {
  let usedCoins=[]
  //if there is a number that can clear the whole target on its own (ie. greatest factor) initialize it as modulo
  let modulo=coins.slice(0,coins.length-1).find(coin=>(target%coin==0))
  //if there is a modulo, use it to clear the rest of target
  if(modulo!==undefined){
    while(target-modulo>=0){
      target-=modulo
      usedCoins=[...usedCoins,modulo]
    }
  }

  //2 base cases: 1) if there are no more coins left, return null.
  if(coins.length==0){
    // return [`Leftover: ${target}`]
    return [null]
  }
  //2) if target is cleared, return all coins used.
  if(target==0){
    return usedCoins
  }

  //2 recursive cases: 1) if theres no modulo, and the biggest coin doesn't fit, recurse with the
  // step: coins.slice(1) to remove biggest coin.
  if(target-coins[0]<0){
    return makeBetterChange(target,coins.slice(1),false)
  }
  // 2) if biggest coin does fit, use it once on target and then recurse with all coins again to see if
  // there is a new modulo. Recursive step is either finding a modulo down the line and clearing target,
  // or removing the biggest coin again till the first recursive case & step lower the coin count.
  target-=coins[0]
  usedCoins=[...usedCoins,coins[0]]
  debugger
  usedCoins=[...usedCoins,...makeBetterChange(target,coins,false)]

  // if there is a remainder at the end, make the whole list [null]. Would prefer using
  // "return [`Leftover: ${target}`]" to show remainder, but they would prefer nulling everything I guess.
  if(firstcall==true&&usedCoins.includes(null)){
    return null
  }
  debugger
  return usedCoins
  // your code here
}
const util = require('util')
console.log(makeBetterChange(58,[10,29,1]))
console.log(makeBetterChange(24,[10,7,1]))
console.log(makeBetterChange(21)); // [1, 10, 10]
console.log(makeBetterChange(75)); // [25, 25, 25]
console.log(makeBetterChange(33, [15, 3])); // [3, 15, 15]
console.log(util.inspect(makeBetterChange(34, [15, 3]),showhidden=false,depth=null)); // null
console.log(makeBetterChange(24, [10, 7, 1])) // [7, 7, 10]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = makeBetterChange
} catch (e) {
  module.exports = null;
}

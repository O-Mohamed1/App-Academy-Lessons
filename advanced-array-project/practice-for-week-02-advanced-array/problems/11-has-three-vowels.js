/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

// let hasThreeVowels = function(string) {
//     let threes=string.forEach(word=>{
//         let word.count=0
//         if(word.includes("a")){
//             word.count+=1
//         }else if(word.includes("e")){
//             word.count+=1
//         }}else if(word.includes("i")){
//             word.count+=1
//         }}else if(word.includes("o")){
//             word.count+=1
//         }}else if(word.includes("u")){
//             word.count+=1
//         }
//         if (word.count>2){
//             return true
//         }else {return false}
//     })
//     return threes
//     // Your code here
// };

// Your code here
let hasThreeVowels = function(string){
    let vowelList="aeiou"
    let vowels=[]
    string.split("").forEach(function(char){
        if (vowelList.includes(char) && !vowels.includes(char)){
            vowels.push(char)
        }
    })
    return vowels.length>=3
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}

/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/
const reverse = word=>{
  let chars=word.split("")
  let last = chars.splice(chars.length-1,1)
  if (chars==""){
    return last.toString()
  }else{
    return last.concat(reverse(chars.join(""))).join("")
  }
}
// your code here
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}

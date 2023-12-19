function switcher(big,small,oper,third){
  switch(oper){
    case "*": return big * third;
    case "/": return big / third;
    case "tacos": return `I ate ${big} tacos.`
    case "dogs": return `I adopted a dog that weighs ${small} pounds.`
  }
}
function calculate(num1,num2,oper,third){
  if (num1 > num2) {
    return switcher(num1,num2,oper,third)
  } else {
    return switcher(num2,num1,oper,third)
  }
}
function multiplyBiggerNumByTwo(num1, num2) {
  return calculate(num1,num2,"*",2)
}

function divideBiggerNumByThree(num1, num2) {
  return calculate(num1,num2,"/",3)
}

function eatMostTacos(sum1, sum2) {
  return calculate(sum1,sum2,"tacos")
}

function adoptSmallerDog(weight1, weight2) {
  return calculate(weight1,weight2,"dogs")
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};

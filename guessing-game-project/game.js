const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Completed tasks and added some extra functionality:
// 1) Checks if responses are NaN and if so, asks again.
// 2) If min>max, switch the variables
// 3) Asks how many attempts you'd like, so its not hardcoded anymore.
// 4) I was calling the same NaN code 4 times so I made it a function checkNaN(number,outerFunction,count)
// count is for askGuess function to remember attempts even if checkNaN returns false ie. is NaN

function checkNaN(num,outerFunction,count){
    if(isNaN(num)){
        console.log("That's not a number.")
        outerFunction(count)
        return false
    }
    return true
}
function askRange(){
    rl.question("Enter a max number:", num =>{
        let max=Number(num)
        checkNaN(max,askRange)
        rl.question("Enter a min number:", num =>{
            let min=Number(num)
            checkNaN(min,askRange)
            rl.question("How many tries would you like?",attempts=>{
                if(checkNaN(Number(attempts),askRange)){
                    if (min>max){
                        let newMin=min
                        min=max
                        max=newMin
                    }
                    console.log(`I'm thinking of a number between ${min} and ${max}...`)
                    let secretNum
                    randomInRange(min,max)
                    askGuess(Number(attempts))
                }
            })
        })
    })
}

function randomInRange(min,max){
    let range = max-min
    secretNum =(min+(Math.floor(Math.random()*range)))
}

function checkGuess(guess){
    if (secretNum === guess){
        console.log('Correct!')
        return true
    }else if(secretNum >= guess){
        console.log('Too low.')
        return false
    }else if(secretNum <= guess){
        console.log('Too high.')
        return false
    }
}

function askGuess(count){
    if(count <= 0){
        console.log('You lose.')
        rl.close()
        return false
    }
    rl.question("Enter a guess:", string =>{
        let response = Number(string)
        checkNaN(response,askGuess,count)
        count--
        if (!checkGuess(response)){
            askGuess(count)
        }else{
            console.log("DONE!")
            rl.close()
        }
    })
}
askRange()

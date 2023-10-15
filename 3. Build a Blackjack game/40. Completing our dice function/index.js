// Try to modify the expression so that we get a range from 1 to 6
let displayDiceResult = document.getElementById("diceResult")


function rollDice(){
    let randomNumber = Math.floor( Math.random() * 6 ) + 1
    return randomNumber
}
console.log(rollDice())
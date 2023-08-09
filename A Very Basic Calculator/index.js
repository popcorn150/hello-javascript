let num1 = 10
let num2 = 8

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let totalSum = document.getElementById("sum-el")
function addition(){
    let result = num1 + num2
    totalSum.textContent = "Sum: " + result
    // console.log(result)
}

function subtraction(){
    let result = num1 - num2
    totalSum.textContent = "Sum: " + result
}

function division(){
    let result = Math.round(num1 / num2)
    totalSum.textContent = "Sum: " + result
}

function multiplication(){
    let result = num1 * num2
    totalSum.textContent = "Sum: " + result
}

// console.log(num2)
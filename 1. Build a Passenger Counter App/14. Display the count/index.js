// document.getElementById("count").innerText = 5

// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el")
// console.log(countEl)

let increaseCount = 0
let decreaseCount = 1

function increment() {
    increaseCount = increaseCount + 1
    countEl.innerText = increaseCount
}

function decrement() {
    decreaseCount = increaseCount - decreaseCount
    countEl.innerText = decreaseCount
}

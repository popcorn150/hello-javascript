// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText

let welcomeEl= document.getElementById("welcome-el")

let myName = "David"
let greeting = "Hi! My name is "

welcomeEl.innerText = greeting + myName

console.log(welcomeEl)
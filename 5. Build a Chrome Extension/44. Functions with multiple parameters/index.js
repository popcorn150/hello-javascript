// const welcomeEl = document.getElementById("welcome-el")

function greetUser(greeting, name, greetingEmoji) {
    // Rewrite the expression using template literals
    // welcomeEl.textContent = `${greeting}, ${name} 👋`
    console.log(`${greeting}, ${name} ${greetingEmoji}`)
}

greetUser("Howdy", "James", "👋")
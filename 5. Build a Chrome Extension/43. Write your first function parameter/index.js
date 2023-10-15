const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(greeting) {
    welcomeEl.textContent = `${greeting}, Per Harald Borgen 👋` 
    // console.log(`${greeting}, Per Harald Borgen 👋`)
}

greetUser("Hey there")
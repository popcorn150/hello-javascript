let sentence = ["Hello", "my", "name", "is", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for (let i = 0; i < sentence.length; i++){
    console.log(greetingEl)
    greetingEl.textContent += sentence[i] + " "
    // console.log(sentence[i])
}
// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let erorMessage = document.getElementById("error")

function errorMessage(){
    let error = "Something went wrong, please try again"
    erorMessage.textContent = error
    // console.log("Yo! You just clicked me!")
}
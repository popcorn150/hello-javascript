// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.
const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]
const imageContainer = document.getElementById("container")

function renderImage() {
    let imageDOM = ""
    for (let i = 0; i < imgs.length; i++) {
        imageDOM += `<img alt="Employee in the company" class="team-img" src=${imgs[i]}>`
    }
    imageContainer.innerHTML = imageDOM
}
renderImage()
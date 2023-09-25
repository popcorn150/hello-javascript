const groceries = document.getElementsByClassName('gorceries')[0]
const pencil = document.getElementById('pencil')
const allItems = document.getElementById('allItems')
const userInput = document.getElementById('userInput')

pencil.addEventListener('click', function(){
    allItems.innerHTML = ''
})

userInput.addEventListener('keydown', function(e){
    if(e.key == 'Enter')
    addItem()
})

function addItem(){
    let h2 = document.createElement('h2')
    h2.innerHTML = `- ${userInput.value}`

    h2.addEventListener('click', function(){
        h2.style.textDecoration = 'line-through'
    })

    allItems.insertAdjacentElement('beforeend', h2)
    userInput.value = ''
}
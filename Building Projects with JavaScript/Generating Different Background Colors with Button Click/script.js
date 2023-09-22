var index = 0

function changeColors() {
    // var colors = ['red', 'blue', 'yellow', 'green', 'purple', 'black', 'orange', 'pink']
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    // document.getElementsByTagName('body')[0].style.background = colors[index++]
    document.getElementsByTagName('body')[0].style.background = `rgb(${red}, ${green}, ${blue})`

    // if(index > colors.length - 1){
    //     index = 0
    // }
}
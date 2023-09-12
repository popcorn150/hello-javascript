function nextInLine(arr, item){
    arr.push(item)
    return arr.shift(0)
}
nextInLine([1, 2, 3, 4, 5], 6)
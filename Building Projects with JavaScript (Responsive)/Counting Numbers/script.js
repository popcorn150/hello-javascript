let count = 0
// let resetCount = 0

function changeCount(num){
    count += num
    document.getElementById('count').innerHTML = count
    // if(count <= -1){
    //     document.getElementById('count').innerHTML = resetCount
    // }
}
// Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
  return console.log(Math.floor(Math.random() * (myMax - myMin + 1) + myMin));
}
randomRange(1, 10)

// Remove Items from an Array with pop() and shift()
function popShift(arr) {
  let popped = arr.pop()
  let shifted = arr.shift()
  return [shifted, popped];
}

console.log(popShift(["challenge", "is", "not", "complete"]));

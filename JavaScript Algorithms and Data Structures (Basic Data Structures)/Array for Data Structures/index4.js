// Javascript filter method

let arr = [
  "banana",
  "flakes",
  3,
  100,
  "flakes",
  "flakes",
  "flakes",
  "flakes",
  "flakes",
  "flakes",
  "flakes",
];
let result = arr.filter(notFilter);
function notFilter(random) {
  return random === "flakes";
}
console.log(result.length);

let numbers = [5, 6, 7, 3, 2, 6, 8];
let numResult = numbers.map(multiplyNumbers);
function multiplyNumbers(multiply) {
  return multiply * 2;
}
console.log(numResult);

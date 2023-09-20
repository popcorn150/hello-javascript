// Catch Unclosed Parentheses, Brackets, Braces and Quotes
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);

// The reduce() method reduces an array to a single value.
const array1 = [1, 2, 3, 4];
console.log(
  array1.reduce((accumulator, currentValue) => accumulator + currentValue)
); // expected output: 10

// Match Single Characters Not Specified
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou3]/gi;
let result = quoteSample.match(myRegex);
console.log(result.length);

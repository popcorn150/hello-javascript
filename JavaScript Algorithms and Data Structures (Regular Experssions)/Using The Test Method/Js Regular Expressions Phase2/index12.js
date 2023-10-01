// Reuse Patterns Using Capture Groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
let result = reRegex.test(repeatNum);
console.log(result)